<template>
  <div class="header">
    <div class="container">
      <div class="header-top">
        <div class="logo" @click="toHome"></div>
        <div class="nav-part"></div>
        <ul class="tab-list">
          <li class="tab-item">限时抢购</li>
          <li class="tab-item">企业采购</li>
        </ul>
        <div class="icon-wrap fr">
          <div class="icon">
            <a-icon type="shopping-cart" class="icon-cart" />
          </div>
        </div>
        <div class="search fr">
          <div class="search-form">
            <a-icon type="search" class="search-icon"/>
            <div class="search-input-con">
              <input type="text" placeholder="搜一搜">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/a");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 51px;
  z-index: 101;
  padding-top: 20px;
  margin-bottom: 5px;
  background-color: #fff;
}
.container {
  width: 1080px;
  margin: 0 auto;
}
.header-top {
  position: relative;
  padding-right: 40px;
  z-index: 9;
}
.logo {
  float: left;
  width: 123px;
  height: 51px;
  background: url(https://www.xiaomiyoupin.com/static3/media/logo@2x.cf8cc6a8.png)
    50% no-repeat;
  background-size: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.nav-part {
  float: left;
  margin-left: 10px;
  margin-right: 70px;
  width: 60px;
  height: 51px;
  line-height: 51px;
}
.tab-list {
  float: left;
  width: 420px;
  overflow: hidden;
}
.tab-item {
  float: left;
  margin-right: 32px;
  height: 51px;
  line-height: 57px;
  font-size: 18px;
  color: #666;
  -webkit-transition: color 0.2s ease;
  -o-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
.icon-wrap {
  position: absolute;
  right: 6px;
  top: 18px;
}
.fr {
  float: right;
}
.icon {
  position: relative;
  width: 30px;
}
.icon-cart {
  display: inline-block;
  font-size: 26px;
}
.search{
  width: 296px;
}
</style>