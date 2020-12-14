<template>
  <div class="footer" :class="footer">
    <div class="container">
      <div class="fl logo">
        <img src="https://www.xiaomiyoupin.com/static3/media/logo@2x.cf8cc6a8.png" alt="logo">
      </div>
      <div class="fr icons">
        <img src="https://www.xiaomiyoupin.com/static3/media/f-logo.c6285587.png" alt="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: 'home-footer'
    }
  },
  mounted() {
    if (this.$route.name === 'searchPage') {
      this.footer = 'search-footer'
    }
  }
}
</script>

<style lang="less" scoped>
.home-footer {
  margin-top: 60px;
}
.search-footer {
  margin-top: 0;
}
.footer {
  padding: 45px 0;
  height: 45px;
  line-height: 23px;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  color: #666;
  .container {
    width: 1080px;
    margin: 0 auto;
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .logo img {
      width: 123px;
      height: 45px;
      margin-right: 25px;
    }
    .icons img {
      width: 100px;
    }
  }
}
</style>