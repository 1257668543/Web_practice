<template>
  <div class="home-wrap">
  <!-- 首页容器 -->
    <siteTop />
    <Header />
  </div>
</template>

<script>
import siteTop from '@/components/Site-top.vue'
import Header from '@/components/Header.vue'
export default {
  components: {
    siteTop,
    Header
  }
};
</script>

<style lang="less" scoped>
</style>