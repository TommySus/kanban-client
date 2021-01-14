<template>
  <div>
      <AddTaskPage
      v-if="currentPage == 'AddTaskPage'"
      ></AddTaskPage>
      <HomePage
      v-if="currentPage == 'HomePage'"
      @changePage="changePage"
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
            currentPage: "RegisterPage",
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
        }
    }
}
</script>

<style>

</style>