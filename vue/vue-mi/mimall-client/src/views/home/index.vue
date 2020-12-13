<template>
  <div class="home-wrap">
    <!-- 通用基础组件 -->
    <siteTop :isLogin="isLogin" :user_nickname="user_nickname"/>
    <Header />
    <FixedBar />
    <!-- 二级路由控制组件 -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import siteTop from "@/components/basic-components/Site-top.vue";
import Header from "@/components/basic-components/Header.vue";
import FixedBar from "@/components/basic-components/FixedBar.vue";
import Footer from "@/components/basic-components/Footer.vue"
export default {
  data() {
    return {
      isLogin: sessionStorage.getItem('user_account') ? true : false ,
      user_nickname: sessionStorage.getItem('user_nickname') ? sessionStorage.getItem('user_nickname') : null
    }
  },
  components: {
    siteTop,
    Header,
    FixedBar,
    Footer
  },
};
</script>

<style lang="less" scoped>
.home-wrap {
  overflow-y: auto;
}
.test{
  margin-top: 30px;
}
</style>