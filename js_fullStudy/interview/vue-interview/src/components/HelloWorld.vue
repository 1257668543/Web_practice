<template>
  <div class="hello">
    Hello World
    <p>
      {{msg}}
    </p>
    <button @click="toParent">click</button>
    <hr />
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './hello1'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Hello
  },
  data() {
    return {
      newMsg: ''
    }
  },
  methods: {
    toParent() {
      this.$emit('getData', '来自子组件的数据')
    }
  },
  beforeCreate() {
    console.log("component beforeCreate");
  },
  created() {
    console.log("component created");
  },
  beforeMount() {
    this.newMsg = this.msg
    this.newMsg = 'welcome'
    console.log("component beforeMount");
  },
  mounted() {
    console.log("component mounted");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
