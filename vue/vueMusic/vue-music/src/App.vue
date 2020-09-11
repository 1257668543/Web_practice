<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe700;</i>
      <span slot="content">网抑云音乐</span>
      <i class="iconfont" slot="right-icon">&#xe90e;</i>
    </v-header>
    <v-tab></v-tab>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <!-- menu -->
  <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import tab from '@/components/tab'
export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-tab': tab
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052921 */
  src: url('//at.alicdn.com/t/font_2052921_t1m2817uoem.eot');
  src: url('//at.alicdn.com/t/font_2052921_t1m2817uoem.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052921_t1m2817uoem.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052921_t1m2817uoem.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052921_t1m2817uoem.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052921_t1m2817uoem.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>
