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
      :fetchTask="fetchTask"
      :Tasks="Tasks"
      :Category="Category"
      ></HomePage>
      <LoginPage
      v-if="currentPage == 'LoginPage'"
      @changePage="changePage"
      ></LoginPage>
      <RegisterPage
      v-if="currentPage == 'RegisterPage'"
      @changePage="changePage"
      ></RegisterPage>
      <EditTaskPage
      v-if="currentPage == 'EditTaskPage'"
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

export default {
    name: "App",
    data(){
        return {
            Tasks: [],
            currentPage: "",
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
            this.currentPage = page
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
                console.log(error.response)
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
                this.currentPage = 'HomePage'
            })
            .catch(error => {
                console.log(error.response)
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
                this.fetchTask()
            })
            .catch(error => {
                console.log(error.response)
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
                this.fetchTask()
            })
            .catch(error => {
                console.log(error.response)
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