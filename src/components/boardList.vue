<template>
    <div>
        <div class="row" style="margin-left: 60px; margin-top: 30px;">
            <TaskBoard
                v-for="Category in Category"
                :key="Category.id"
                :Category="Category"
                :Tasks="Tasks"
                @deleteTask="deleteTask"
                @editCategory="editCategory"
                @editTask="editTask"
            ></TaskBoard>
        </div>
    </div>
</template>

<script>
import TaskBoard from './taskBoard'

export default {
    name: 'BoardList',
    props: ['Category', 'Tasks'],
    components: {
        TaskBoard
    },
    methods: {
        deleteTask(id) {
            this.$emit("deleteTask", id)
        },
        editCategory(category, id) {
            this.$emit("editCategory", category, id)
        },
        editTask(name, description, category, id) {
            this.$emit("editTask",name, description, category, id)
        }
    }
}
</script>

<style>

</style>