<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe700;</i>
      <span slot="content">网抑云音乐</span>
      <i class="iconfont" slot="right-icon">&#xe90e;</i>
    </v-header>
    <!-- <router-view/> -->

    <!-- menu -->
  <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header'
import sidebar from '@/components/sidebar'
export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052921 */
  src: url('//at.alicdn.com/t/font_2052921_6p1msre3huk.eot');
  src: url('//at.alicdn.com/t/font_2052921_6p1msre3huk.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052921_6p1msre3huk.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052921_6p1msre3huk.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052921_6p1msre3huk.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052921_6p1msre3huk.svg#iconfont') format('svg');
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
