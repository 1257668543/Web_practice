<template>
  <div class="hello">
    1- {{message}}
    <hr />
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './hello2'
export default {
  components: {
    Hello
  },
  inject: ['message']
}
</script>

<style>

</style>