<template>
  <div>
        <div id="home-page">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <div class="row">
                      <img class="navbar-brand" src="https://www.pinclipart.com/picdir/big/176-1761190_this-is-an-image-of-a-clipboard-report.png" width="40" height="50" style="margin-top: 5 px" class="d-inline-block align-top" alt="" loading="lazy">
                      <h3 class="mt-2">KanBan</h3>
                  </div>
                  <div id="greeting">
                      <h3>hello, {{UserName}}</h3>
                  </div>
                  <button @click="logout" class="btn btn-outline-danger" id="logout-btn">Logout</button>
                </div>
            </nav>
            <div @click="addTask" class="button-jittery">
                <button>Add New Task</button>
            </div >
                <BoardList
                :Category="Category"
                :Tasks="Tasks"
                @deleteTask="deleteTask"
                @editCategory="editCategory"
                @editTask="editTask"
                ></BoardList>
        </div>
  </div>
</template>

<script>
import BoardList from './boardList'

export default {
    name: 'homePage',
    data() {
        return {
            UserName: localStorage.getItem('user')
        }
    },
    props: ['fetchTask', 'Tasks', 'Category'],
    components: {
        BoardList
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$emit("changePage", "LoginPage")
        },
        addTask() {
            this.$emit("addTask", "AddTaskPage")
        },
        deleteTask(id) {
            this.$emit("deleteTask", id)
        },
        editCategory(category, id) {
            this.$emit("editCategory", category, id)
        },
        editTask(name, description, category, id) {
            this.$emit("editTask",name, description, category, id)
        }
    },
    created() {
        this.fetchTask()
    }
}
</script>

<style>

</style>