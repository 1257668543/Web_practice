<template>
  <div class="home">
      <p>首页的子组件</p>
      <hr/>
      <h3>{{count}}</h3>
      <div class="btn">
          <button @click="addAction">+</button>
          <button @click="reduce">-</button>
      </div>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            msg: 'Hello World',
            a: 1
        }
    },
    store,
    // computed: {
    //     count() {
    //         return this.$store.state.count
    //     }
    // },
    // computed: mapState({
    //     count: state => state.count
    // }),
    computed: {
        ...mapState(['count']),
        ...mapGetters(['abc'])
    },
    // methods: {
    //     add() {
    //         this.$store.commit('add', 10)
    //     },
    //     reduce() {
    //         this.$store.commit('reduce')
    //     }
    // }
    // methods: mapMutations([
    //     'add', 'reduce'
    // ])
    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAction'])
    }
}
</script>

<style>

</style>