<template>
  <div class="home-wrap">
    <!-- 首页容器 -->
    <siteTop :isLogin="isLogin" :user_nickname="user_nickname"/>
    <Header />
    <FixedBar />
    <Banner_nav />
    <Classify_section />
    <div class="test">
      <img
        src="https://img.youpin.mi-img.com/test/1cbb0d8114d1e13651bdee3fdfc29151.jpeg?w=1080&h=450"
        alt=""
      />
    </div>
    <div class="test">
      <img
        src="https://img.youpin.mi-img.com/test/1cbb0d8114d1e13651bdee3fdfc29151.jpeg?w=1080&h=450"
        alt=""
      />
    </div>
    <div class="test">
      <img
        src="https://img.youpin.mi-img.com/test/1cbb0d8114d1e13651bdee3fdfc29151.jpeg?w=1080&h=450"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import siteTop from "@/components/home-components/Site-top.vue";
import Header from "@/components/home-components/Header.vue";
import FixedBar from "@/components/home-components/FixedBar.vue";
import Banner_nav from '@/components/home-components/Banner-nav.vue'
import Classify_section from '@/components/home-components/Classify-section.vue'
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
    Banner_nav,
    Classify_section
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