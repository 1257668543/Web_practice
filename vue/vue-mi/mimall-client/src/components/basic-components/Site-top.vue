<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="fr">
          <div class="fl item user">
            <div class="login" v-if="isLogin" @mouseenter="show_itemNav" @mouseleave="hide_itemNav">
              <a class="user_order" @click="toPersonal('')">
                <a-icon
                  type="smile"
                  theme="twoTone"
                  two-tone-color="#eecd80"
                  class="user-icon"
                />
                <span class="user_nickname">{{ user_nickname }}</span>
                <a-icon type="down" class="icon-down-arrow"/>
              </a>
              <div class="item-nav" :class="itemNav ? 'showed' : 'hidden'">
                <ul class="user-nav">
                  <li @click="toPersonal('orders')">
                    <a href="" class="item" @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)">我的订单</a>
                  </li>
                  <li>
                    <a href="" class="item" @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)">退款/售后</a>
                  </li>
                  <li @click="toPersonal('assets')">
                    <a href="" class="item" @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)">我的资产</a>
                  </li>
                  <li @click="toPersonal('collections')">
                    <a href="" class="item" @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)">我的收藏</a>
                  </li>
                  <li @click="toPersonal('address')">
                    <a href="" class="item" @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)">地址管理</a>
                  </li>
                  <li>
                    <a href="" class="item" @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)" @click="signOut">退出登录</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="login" v-else>
              <a
                href="/?isRegister"
                @mouseenter="hl('top', $event)"
                @mouseleave="fd('top', $event)"
                class="log"
                >登录</a
              >
              <a
                href="/?isRegister=true"
                @mouseenter="hl('top', $event)"
                @mouseleave="fd('top', $event)"
                class="reg"
                >注册</a
              >
            </div>
          </div>
          <span class="fl line"></span>
          <div class="fl help">
            <a
              class="m-safe-anchor"
              @mouseenter="hl('top', $event)"
              @mouseleave="fd('top', $event)"
              >帮助中心</a
            >
          </div>
          <span class="fl line"></span>
          <div class="fl m-download">
            <a
              class="download"
              @mouseenter="hl('top', $event)"
              @mouseleave="fd('top', $event)"
            >
              <img src="@/assets/Header-icon/phone.png" class="p-icon" />
              下载APP
            </a>
          </div>
          <span class="fl line"></span>
          <div class="fl clauses" @mouseenter="showNav" @mouseleave="hideNav">
            <div class="m-clauses">
              <a
                class="m-safe"
                @mouseenter="hl('top', $event)"
                @mouseleave="fd('top', $event)"
                >资质证照&nbsp;/&nbsp;协议规则</a
              >
              <a-icon type="down" class="icon-down" />
            </div>
            <div class="clauses-nav" :class="clausesNav ? 'show' : 'hide'">
              <ul class="nav-list">
                <li>
                  <a
                    @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)"
                    >资质证照</a
                  >
                </li>
                <li>
                  <a
                    @mouseenter="hl('clauses', $event)"
                    @mouseleave="fd('clauses', $event)"
                    >协议规则</a
                  >
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
import { highLight, fade } from "@/pub-func/highlight.js";
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
    user_nickname: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      itemNav: false,
      clausesNav: false,
      topHighLight: false,
    };
  },
  methods: {
    hl: highLight,
    fd: fade,
    showNav() {
      this.clausesNav = true;
    },
    hideNav() {
      this.clausesNav = false;
    },
    show_itemNav() {
      this.itemNav = true
    },
    hide_itemNav() {
      this.itemNav = false
    },
    toPersonal(url) {
      window.open('/Home/personal-center/' + url)      
    },
    signOut() {
      sessionStorage.removeItem('user_account')
      sessionStorage.removeItem('user_nickname')
      sessionStorage.removeItem('user_id')
    }
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
  color: #b6b6b6;
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
.hide {
  height: 0;
}
.show {
  height: 70px;
}
.nav-list {
  background-color: #fff;
  list-style: none;
  margin-bottom: 0px;
  li {
    height: 35px;
    line-height: 35px;
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
  .item-nav{
    width: 100px;
    left: 15px;
    position: absolute;
    top: 48px;
    overflow: hidden;
    -webkit-box-shadow: 0 3px 28px rgba(0,0,0,.1);
    box-shadow: 0 3px 28px rgba(0,0,0,.1);
    -webkit-transition: all .3s cubic-bezier(0,1,.5,1);
    -o-transition: all .3s cubic-bezier(0,1,.5,1);
    transition: all .3s cubic-bezier(0,1,.5,1);
    background: #fff;
    .user-nav {
      background: #fff;
      li {
        height: 35px;
        line-height: 35px;
        .item {
          display: block;
          font-size: 14px;
          margin-left: 0;
          color: #666;
        }
      }
    }
  }
  .showed {
    opacity: 1;
    height: 210px;
  }
  .hidden {
    height: 0;
    opacity: 0;
  }
}
.user_order {
  display: block;
    width: 70px;
    padding-left: 30px;
    padding-right: 20px;
    overflow: hidden;
    position: relative;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 48px;
    line-height: 48px;
}
.user-icon {
  position: absolute;
  top: 10px;
  left: 6px;
  font-size: 28px;
}
.user_nickname{
  color: #e7e7e7;
  white-space: nowrap;
  font-size: 17px;
}
.icon-down-arrow {
  color:#b6b6b6;
  position: absolute;
  width: 28px;
  height: 28px;
  top: 18px;
  right: 0;
}
</style>