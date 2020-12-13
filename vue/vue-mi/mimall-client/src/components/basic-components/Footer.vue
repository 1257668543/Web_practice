<template>
  <div class="footer">
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

}
</script>

<style lang="less" scoped>
.footer {
  margin-top: 60px;
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