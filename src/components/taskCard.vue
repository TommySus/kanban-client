<template>
  <div>
    <div id="card">
        <button id="edit-btn">&#128393;</button>
        <h4>{{Task.name}}</h4>
        <p>{{Task.description}}</p>
        <div class="row" id="card-button">
          <button @click="back" v-if="Task.category !== 'Back-Log'" style="background-color: rgb(93,156,236);" class="back"><p><</p></button>
          <button @click="next" v-if="Task.category !== 'Done'" style="background-color: rgb(160,212,104);" class="next"><p>></p></button>
          <button @click="deleteTask" style="background-color: rgb(216,51,74);" class="delete"><p>x</p></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TaskCard',
    props: ['Task'],
    methods: {
      deleteTask() {
        this.$emit("deleteTask", this.Task.id)
      },
      next() {
        let changeCategory = ''
        if(this.Task.category == 'Back-Log'){
            changeCategory = 'To-Do'
        }else if(this.Task.category == 'To-Do'){
            changeCategory = 'Doing'
        }else if(this.Task.category == 'Doing'){
            changeCategory = "Done"
        }

        this.$emit("editCategory", changeCategory, this.Task.id)
      },
      back() {
        let changeCategory = ''
        if(this.Task.category == 'To-Do'){
            changeCategory = 'Back-Log'
        }else if(this.Task.category == 'Doing'){
            changeCategory = 'To-Do'
        }else if(this.Task.category == 'Done'){
            changeCategory = "Doing"
        }

        this.$emit("editCategory", changeCategory, this.Task.id)
      }
    }
}
</script>

<style>
  #edit-btn {
    float: right;
    position: relative;
    z-index: 100;
    margin-bottom: 200px;
    border-radius: 25px;
    outline: none;
    background-color:black;
    color: white;
  }
  #edit-btn:hover {
    outline: none;
  }
  #edit-btn:active {
    outline: none;
  }
</style>