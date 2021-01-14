<template>
  <div>
        <div id="add-task-box">
            <div>
                <h1 style="margin-left: 13%;">Add New Task</h1>
                <form @submit.prevent="addTask" class="flex" id="add-task-form">
                    <input v-model="name" type="text" name="name" id="name" placeholder="name">
                    <input v-model="description" type="text" name="description" id="description" placeholder="description">
                    <label style="margin-left: 40%" for="category"><b>category</b></label>
                    <select v-model="category" id="category" name="category">
                        <option value="Back-Log">Back-Log</option>
                        <option value="To-Do">To-Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    <button type="submit" class="button" style="vertical-align:middle"><span>Submit </span></button>
                </form>
                <h5 @click="changePage" style="margin-left: 44%; margin-top: 5px;">back</h5>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'AddTaskPage',
    data() {
        return {
            name: '',
            description: '',
            category: ''
        }
    }, 
    methods: {
        addTask() {
            this.$emit("addTask", this.name, this.description, this.category)
        },
        changePage() {
            this.$emit("changePage", "HomePage")
        }
    }
}
</script>

<style>

h5 {
    cursor: pointer;
}

h5:hover {
    color: red;
}

.button {
  margin-left: 25%;
  margin-top: 1px;
  display: inline-block;
  border-radius: 25px;
  background-color: black;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 5px;
  width: 170px;
  transition: all 0.5s;
  cursor: pointer;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>