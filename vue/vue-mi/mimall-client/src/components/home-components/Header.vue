<template>
  <div class="header">
    <div class="container">
      <div class="header-top">
        <div class="logo" @click="toHome"></div>
        <div class="nav-part"></div>
        <ul class="tab-list">
          <li class="tab-item" @mouseenter="hl('tab-item', $event)" @mouseleave="fd('tab-item', $event)">限时抢购</li>
          <li class="tab-item" @mouseenter="hl('tab-item', $event)" @mouseleave="fd('tab-item', $event)">企业采购</li>
        </ul>
        <div class="icon-wrap fr">
          <div class="icon">
            <a-icon type="shopping-cart" class="icon-cart" @mouseenter="hl('icon-cart', $event)" @mouseleave="fd('icon-cart', $event)"/>
          </div>
        </div>
        <div class="search fr">
          <div
            class="search-form"
            @mousedown="focusSearch"
            :class="activeSearch ? 'active' : ''"
            v-clickoutside="lostFocus"
          >
            <a-icon type="search" class="search-icon" @mouseenter="hl('icon-search', $event)" @mouseleave="fd('icon-search', $event)"/>
            <div class="search-input-con">
              <input type="text" placeholder="搜一搜" class="field"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { highLight, fade } from '@/pub-func/highlight.js'
export default {
  methods: {
    toHome() {
      window.open('/')
    },
    focusSearch() {
      this.activeSearch = true;
    },
    lostFocus() {
      this.activeSearch = false
    },
    hl: highLight,
    fd: fade
  },
  data() {
    return {
      activeSearch: false,
    };
  },
  // 自定义指令clickoutside
  directives: {
    clickoutside: {
      // 初始化指令
      bind(el, binding) {
        function clickHandler(e, binding) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (el.contains(e.target)) {
            return false;
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            binding.value(e);
          }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = clickHandler;
        document.addEventListener("click", function(e) {
          clickHandler(e, binding)
        });
      },
      unbind(el) {
        // 解除事件监听
        document.removeEventListener("click", el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      },
    },
  }
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
  cursor: pointer;
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
  color: #333333;
  display: inline-block;
  font-size: 22px;
  background-position: 0 -1202px;
  cursor: pointer;
}
.search {
  width: 296px;
}
.search-form {
  position: relative;
  width: 246px;
  padding-left: 35px;
  padding-top: 9px;
  height: 32px;
  border-bottom: 1px solid #e7e7e7;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.active {
  border-bottom: 1px solid #845f3f;
}
.search-icon {
  color: #333333;
  position: absolute;
  left: -2px;
  top: 16px;
  display: block;
  z-index: 2;
  text-align: center;
  outline: 0;
  font-size: 22px;
  cursor: pointer;
}
.search-input-con {
  z-index: 1;
  width: 245px;
  height: 32px;
  line-height: 32px;
}
.field {
  box-sizing: content-box;
  width: 100%;
  border: none;
  color: #333;
  font-size: 14px;
  outline: 0;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}
</style>