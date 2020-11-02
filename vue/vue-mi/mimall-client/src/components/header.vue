<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="fr">
          <div class="fl item user">
            <div class="login">
              <a href="" @mouseover="highLight" @mouseleave="fade" class="log"
                >登录</a
              >
              <a href="" @mouseover="highLight" @mouseleave="fade" class="reg"
                >注册</a
              >
            </div>
          </div>
          <span class="fl line"></span>
          <div class="fl help">
            <a href="https://www.xiaomiyoupin.com/help" class="m-safe-anchor"
              >帮助中心</a
            >
          </div>
          <span class="fl line"></span>
          <div class="fl m-download">
            <a href="https://www.xiaomiyoupin.com/download" class="download">
              <img src="@/assets/Header-icon/phone.png" class="p-icon" />
              下载APP
            </a>
          </div>
          <span class="fl line"></span>
          <div class="fl clauses" @mousemove="showNav" @mouseleave="hideNav">
            <div class="m-clauses">
              <a href="#" class="m-safe">资质证照&nbsp;/&nbsp;协议规则</a>
              <a-icon type="down" class="icon-down" />
            </div>
            <div class="clauses-nav">
              <ul class="nav-list">
                <li>
                  <a href="" class="quality">资质证照</a>
                </li>
                <li>
                  <a href="" class="rules">协议规则</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clausesNav: false,
    };
  },
  methods: {
    highLight() {},
    fade() {},
    showNav() {
      this.clausesNav = true;
    },
    hideNav() {
      this.clausesNav = false;
    },
  },
};
</script>

<style lang='less' scoped>
.top,
.top a {
  color: #e7e7e7;
}
.top {
  height: 46px;
  background: #333;
  font-size: 14px;
  position: relative;
  z-index: 105;
}
.container {
  width: 1080px;
  margin: 0 auto;
}
.fr {
  float: right;
}
.item {
  position: relative;
  margin-left: 5px;
  text-align: center;
}
.fl {
  float: left;
}
.line {
  margin: 17px 3px 0 6px;
  display: inline-block;
  height: 16px;
  vertical-align: middle;
  border-right: 1px solid #666;
}
.help {
  position: relative;
  text-align: center;
  height: 48px;
  line-height: 48px;
  margin-right: 8px;
  margin-left: 11px;
}
.m-download {
  position: relative;
  margin-left: 5px;
  text-align: center;
}
.download {
  text-align: left;
  left: 0;
  padding-left: 30px;
  display: block;
  height: 48px;
  line-height: 48px;
  overflow: hidden;
  margin-right: 5px;
  position: relative;
}
.p-icon {
  left: 1px;
  top: 13px;
  position: absolute;
  width: 22px;
  height: 22px;
}
.clauses {
  position: relative;
  text-align: center;
  padding-right: 40px;
  padding-left: 11px;
}
.m-clauses {
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.icon-down {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 16px;
  right: 10px;
}
.clauses-nav {
  width: 160px;
  position: absolute;
  left: 0;
  top: 48px;
  display: block;
  overflow: hidden;
  box-shadow: 0 3px 28px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0, 1, 0.5, 1);
  background: #fff;
}
.nva-list {
  background-color: #fff;
  list-style: none;
  li {
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    a {
      display: block;
      font-size: 14px;
      color: #666;
    }
  }
}
.login {
  margin-right: 8px;
  height: 48px;
  line-height: 48px;
  a {
    margin-left: 8px;
  }
}
</style>