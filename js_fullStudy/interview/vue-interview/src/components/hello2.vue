<template>
  <div class="hello">
    2- {{message}}
    <div class="wrap" ref="wrap"></div>
  </div>
</template>

<script>
export default {
  inject: ['message'],
  created() {
    this.$nextTick(() => {
      console.log(this.$refs.wrap);
    })
  }
}
</script>

<style>

</style>