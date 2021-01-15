<template>
  <div>
        <div id="edit-task-box">
            <div>
                <h1 style="margin-left: 28%;">Edit Task</h1>
                <form @submit.prevent="editTask" class="flex" id="add-task-form">
                    <input v-model="editName" type="text" name="name" id="name" placeholder="name">
                    <input v-model="editDescription" type="text" name="description" id="description" placeholder="description">
                    <label style="margin-left: 40%" for="category"><b>category</b></label>
                    <select v-model="editCategory" id="category" name="category">
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
    name: 'EditTaskPage',
    props: ['editData'],
    data() {
        return {
            editName: this.editData.name, 
            editDescription: this.editData.description,
            editCategory: this.editData.category
        }
    },
    methods: {
        changePage() {
            this.$emit("changePage", "HomePage")
        },
        editTask() {
            this.$emit("submitEditTask", this.editName, this.editDescription, this.editCategory, this.editData.id)
        }
    }
}
</script>

<style>
    #edit-task-box {
    width: 400px;
    height: 450px;
    background-color: white;
    margin-left: 35%;
    margin-top: 7%;
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    padding: 20px;
}

#edit-task-image{
    width: 220px;
    height: 300px;
    margin-left: 50px;
    margin-top: 70px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}

#edit-task-form{
    margin-top: 20px;
}

#edit-task-box input[type=text], select {
    width: 80%;
    padding: 12px 20px;
    margin: 15px 35px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-sizing: border-box;
    outline: none;
  }
  
#edit-task-box input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
#edit-task-box input[type=submit]:hover {
    background-color: #45a049;
  }
</style>