<template>
  <div class="home">
    <p>{{title}}</p>
    <User :userName="name" @titleChange="updateTitle"></User>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User'
export default {
  name: 'Home',
  data() {
    return {
      name: 'wl',
      title: ''
    }
  },
  components: {
      User
  },
  methods: {
    updateTitle(e) {
      // console.log('接受到了来自子组件的数据--' + e)
      this.title = e
    }
  }

}
</script>

<style>

</style>