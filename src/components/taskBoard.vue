<template>
  <div>
    <div id="header-card">
        <h2>{{Category.name}}</h2>
    </div>
    <TaskCard
    v-for="Task in filteredTask"
    :key="Task.id"
    :Task="Task"
    @deleteTask="deleteTask"
    @editCategory="editCategory"
    ></TaskCard>
  </div>
</template>

<script>
import TaskCard from './taskCard'

export default {
    name: 'TaskBoard',
    props: ['Category', 'Tasks'],
    components: {
        TaskCard
    },
    methods: {
        deleteTask(id) {
            this.$emit("deleteTask", id)
        },
        editCategory(category, id) {
            this.$emit("editCategory", category, id)
        }
    },
    computed: {
        filteredTask() {
            return this.Tasks.filter(Task => Task.category === this.Category.name)
        }
    }
}
</script>

<style>

</style>