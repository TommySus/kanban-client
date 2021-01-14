<template>
  <div>
    <div id="card">
        <h4>{{Task.name}}</h4>
        <p>{{Task.description}}</p>
        <div class="row" id="card-button">
          <button v-if="Task.category !== 'Back-Log'" style="background-color: rgb(93,156,236);" class="back"><p><</p></button>
          <button v-if="Task.category !== 'Done'" style="background-color: rgb(160,212,104);" class="next"><p>></p></button>
          <button style="background-color: rgb(216,51,74);" class="delete"><p>x</p></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TaskCard',
    props: ['Task']
}
</script>

<style>

</style>