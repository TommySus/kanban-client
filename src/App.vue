<template>
  <div>
      <AddTaskPage
      v-if="currentPage == 'AddTaskPage'"
      @addTask="addTask"
      @changePage="changePage"
      ></AddTaskPage>
      <HomePage
      v-if="currentPage == 'HomePage'"
      @changePage="changePage"
      @addTask="changePage"
      @deleteTask="deleteTask"
      @editCategory="editCategory"
      @editTask="editTask"
      :fetchTask="fetchTask"
      :Tasks="Tasks"
      :Category="Category"
      ></HomePage>
      <LoginPage
      v-if="currentPage == 'LoginPage'"
      @changePage="changePage"
      @login="login"
      :errorMessage="errorMessage"
      :googleLogin="googleLogin"
      ></LoginPage>
      <RegisterPage
      v-if="currentPage == 'RegisterPage'"
      @changePage="changePage"
      @register="register"
      :errorMessage="errorMessage"
      ></RegisterPage>
      <EditTaskPage
      v-if="currentPage == 'EditTaskPage'"
      @changePage="changePage"
      @submitEditTask="submitEditData"
      :editData="editData"
      ></EditTaskPage>
  </div>
</template>

<script>
import axios from "axios"
import AddTaskPage from "./components/addTaskPage"
import HomePage from "./components/homePage"
import LoginPage from "./components/loginPage"
import RegisterPage from "./components/registerPage"
import EditTaskPage from "./components/editTaskPage"
import Swal from 'sweetalert2'

export default {
    name: "App",
    data(){
        return {
            Tasks: [],
            editData: '' ,
            currentPage: "",
            errorMessage: '',
            Category: [
                {
                    id:1,
                    name: "Back-Log"
                },
                {
                    id:2,
                    name: "To-Do"
                },
                {
                    id:3,
                    name: "Doing"
                },
                {
                    id:4,
                    name: "Done"
                }
            ]
        }
    },
    components: {
        LoginPage,
        HomePage,
        RegisterPage,
        EditTaskPage,
        AddTaskPage
    },
    methods: {
        changePage(page) {
            this.errorMessage = ''
            this.currentPage = page
        },
        errorPopUp(error) {
            return  Swal.fire({
                        title: error,
                        icon: 'error',
                        confirmButtonText: 'back'
                    })
        },
        register(name, email, password){
            this.errorMessage = ''
            axios({
                method: "POST",
                url: "http://localhost:3000/users/register",
                data: {
                    name: name,
                    email: email,
                    password: password,
                }
            })      
            .then((response) => {
                this.errorMessage = ''
                this.currentPage = 'LoginPage'
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        },
        login(email, password){
            axios({
                method: "POST",
                url: "http://localhost:3000/users/login",
                data: {
                    email: email,
                    password: password,
                }
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('user', response.data.name)
                this.errorMessage = ''
                this.currentPage = "HomePage"
            })
            .catch((error) => {
                this.errorMessage = error.response.data.message
            })
        },
        googleLogin() {
            this.$gAuth
            .signIn()
            .then(GoogleUser => {
                var id_token = GoogleUser.getAuthResponse().id_token;
                var userInfo = {
                    loginType: 'google',
                    google: GoogleUser
                }
                return axios({
                    method: "POST",
                    url: "http://localhost:3000/users/googleLogin",
                    data: {
                        id_token: id_token
                    }
                })
                .then((response) => {
                    localStorage.setItem('access_token', response.data.access_token)
                    localStorage.setItem('user', response.data.name)
                    this.errorMessage = ''
                    this.currentPage = "HomePage"
                })
                .catch((error) => {
                    this.errorMessage = error.response.data.message
                })
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        },
        fetchTask(){
            axios({
                method: "GET",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                url: "http://localhost:3000/tasks"
            })
            .then(response => {
                this.Tasks = response.data
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        },
        addTask(name, description, category) {
            axios({
                method: "POST",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    name: name,
                    description: description, 
                    category: category
                },
                url: "http://localhost:3000/tasks"
            })
            .then(response => {
                this.fetchTask()
                this.errorMessage = ''
                this.currentPage = 'HomePage'
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        },
        deleteTask(id) {
            axios({
                method: "DELETE",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                url: "http://localhost:3000/tasks/" + id
            })
            .then(response => {
                this.errorMessage = ''
                this.fetchTask()
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
                this.errorPopUp(this.errorMessage)
            })
        },
        editCategory(category, id) {
            axios({
                method: "PATCH",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    category: category
                },
                url: "http://localhost:3000/tasks/" + id
            })
            .then(response => {
                this.errorMessage = ''
                this.fetchTask()
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
                this.errorPopUp(this.errorMessage)
            })
        },
        editTask(name, description, category, id) {
            axios({
                method: "GET",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                url: "http://localhost:3000/tasks/" + id
            })
            .then(response => {
                this.editData = response.data
                this.errorMessage = ''
                this.currentPage = "EditTaskPage"
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
                this.errorPopUp(this.errorMessage)
            })
        },
        submitEditData(name, description, category, id) {
            axios({
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem('access_token')
                },
                data: {
                    name: name,
                    description: description,
                    category: category
                },
                url: "http://localhost:3000/tasks/" + id
            })
            .then(response => {
                this.errorMessage = ''
                this.currentPage = "HomePage"
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        }
    },
    created() {
        if(localStorage.getItem('access_token')) {
            this.currentPage = 'HomePage'
        } else {
            this.currentPage = 'LoginPage'
        }
    }
}
</script>

<style>

</style>