<template>
  <div id="app">
    <Com1></Com1>
  </div>
</template>

<script>
import Com1 from './Com-1.vue'
export default {
  components: {
    Com1
  },
  beforeCreate() {
    // node 里面输出
    // 组件在服务端调用了
    console.log(1111111);
  },
  mounted() {
    // 在 node端 没有 $mount() 所以不会被调用
    console.log(2222222);
  }
}
</script>

<style>

</style>