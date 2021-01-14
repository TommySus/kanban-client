<template>
    <div>
        <div class="row" style="margin-left: 60px; margin-top: 30px;">
            <TaskBoard
                v-for="Category in Category"
                :key="Category.id"
                :Category="Category"
                :Tasks="Tasks"
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
    }
}
</script>

<style>

</style>