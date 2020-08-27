<template>
  <div class="animal">
      <p>的宠物: {{babyName}}</p>
  </div>
</template>

<script>
export default {
    props: {
        babyName: {
            type: String,
            default: '蜗牛'
        }
    },
    data() {
        return {
           
        }
    }
}
</script>

<style>

</style>