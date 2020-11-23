<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <keep-alive> 
      <!-- 让子组件缓存，跳到项目其他页面时再返回能保持状态 -->
      <HelloWorld :msg="msg" @getData="getDataFromSon"/>
    </keep-alive>

    <!-- <input type="text" :value.sync="value">
    <span>{{value}}</span> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  provide: {
    message: '我是APP里面的数据'
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value: '123'
    }
  },
  methods: {
    getDataFromSon(msg) {
      this.msg = "实现双向数据流"
      console.log(msg);
    }
  },
  activated() {
    console.log("keep alive 组件专有, 命中缓存时触发");
  },
  deactivated() {
    console.log("keep alive 组件专有，离开组件时触发");
  },
  beforeCreate() {
    console.log("APP beforeCreate");
  },
  created() {
    console.log("APP created");
  },
  beforeMount() {
    console.log("APP beforeMount");
  },
  mounted() {
    console.log("APP mounted");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
