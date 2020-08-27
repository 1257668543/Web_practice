<template>
  <div class="user">
      <p>{{userName}}</p>
      <!-- <button @click="handle">按钮</button> -->
      <button @click="changBaby">养新的宠物</button>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: 'wn',
            title: '我是子组件里的title',
            baby: '大蜗牛'
        }
    },
    methods: {
        handle() {
            // console.log('ok')
            this.$emit('titleChange', this.title)
        },
        changBaby() {
            this.$emit('babyChange', this.baby)
        }
    }
}
</script>

<style>

</style>