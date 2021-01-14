<template>
  <div>
    <div id="header-card">
        <h2>{{Category.name}}</h2>
    </div>
    <TaskCard
    v-for="Task in filteredTask"
    :key="Task.id"
    :Task="Task"
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
    computed: {
        filteredTask() {
            return this.Tasks.filter(Task => Task.category === this.Category.name)
        }
    }
}
</script>

<style>

</style>