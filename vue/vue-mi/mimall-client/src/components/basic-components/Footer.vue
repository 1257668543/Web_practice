<template>
  <div class="footer" :class="footer">
    <div class="container">
      <div class="fl logo">
        <img src="https://www.xiaomiyoupin.com/static3/media/logo@2x.30cd8c00.png" alt="logo">
      </div>
      <div class="fr icons">
        <img src="https://www.xiaomiyoupin.com/static3/media/f-logo.76889756.png" alt="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: 'mt-footer'
    }
  },
  mounted() {
    if (this.$route.name === 'searchPage' || this.$route.fullPath.includes('personal-center')) {
      this.footer = 'nmt-footer'
    }
  }
}
</script>

<style lang="less" scoped>
.mt-footer {
  margin-top: 60px;
}
.nmt-footer {
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