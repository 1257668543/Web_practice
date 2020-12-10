<template>
  <div class="home-wrap">
    <!-- 首页容器 -->
    <siteTop :isLogin="isLogin" :user_nickname="user_nickname"/>
    <Header />
    <FixedBar />
    <router-view></router-view>
  </div>
</template>

<script>
import siteTop from "@/components/basic-components/Site-top.vue";
import Header from "@/components/basic-components/Header.vue";
import FixedBar from "@/components/basic-components/FixedBar.vue";
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
    FixedBar
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