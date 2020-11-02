<!-- fragment -->
<template>
  <ul>
    <FragmentDemo :data = "[5, 3, 1, 9, 7, 6, 4, 2, 8]"></FragmentDemo>
  </ul>
</template>

<script>
import FragmentDemo from './fragment.vue'
export default {
  components: {
    FragmentDemo
  }
}
</script>

<style>

</style>