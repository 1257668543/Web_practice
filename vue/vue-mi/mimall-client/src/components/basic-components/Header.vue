<template>
  <div class="header clearfix">
    <div :class="fixed ? 'header-fixed' : ''">
      <div class="container">
        <div class="header-top">
          <div class="logo" @click="toHome"></div>
          <div class="nav-part" @mouseenter="ml('show')" @mouseleave="ml()">
            <div class="nav-arrow-container" v-show="showNav">
              <span>分类</span>
              <span class="icons icons-dropdown"></span>
              <div class="nav-container-box" v-show="showNav_container">
                <div class="nav-container">
                  <ul class="nav-list">
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(1)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >有品推荐</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(2)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >家用电器</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(3)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >居家餐厨</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(4)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >电视影音</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(5)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >家具家装</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(6)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >智能家庭</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(7)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >手机电脑</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(8)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >数码周边</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(9)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >日用文创</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(10)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >服装配饰</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(11)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >美妆个护</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(12)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >运动户外</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(13)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >鞋靴箱包</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(14)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >健康保健</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(15)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >美食酒饮</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(16)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >母婴亲子</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(17)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >出行车品</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(18)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >宠物生活</span
                      >
                    </li>
                    <li
                      class="nav-item"
                      @mouseenter="hl('banner-li', $event)"
                      @mouseleave="fd('banner-li', $event)"
                    >
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(19)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >有品海购</span
                      >
                      <span> / </span>
                      <span
                        class="nav-item-span"
                        @click="toSearchResult(20)"
                        @mouseenter="hl('banner-span', $event)"
                        @mouseleave="fd('banner-span', $event)"
                        >DLAB</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul class="tab-list">
            <li
              class="tab-item"
              @mouseenter="hl('tab-item', $event)"
              @mouseleave="fd('tab-item', $event)"
            >
              限时抢购
            </li>
            <li
              class="tab-item"
              @mouseenter="hl('tab-item', $event)"
              @mouseleave="fd('tab-item', $event)"
            >
              企业采购
            </li>
          </ul>
          <div class="icon-wrap fr">
            <div class="icon">
              <a-icon
                type="shopping-cart"
                class="icon-cart"
                @mouseenter="hl('icon-cart', $event)"
                @mouseleave="fd('icon-cart', $event)"
              />
            </div>
          </div>
          <div class="search fr">
            <div
              class="search-form"
              @mousedown="focusSearch"
              :class="activeSearch ? 'active' : ''"
              v-clickoutside="lostFocus"
            >
              <a-icon
                type="search"
                class="search-icon"
                @mouseenter="hl('icon-search', $event)"
                @mouseleave="fd('icon-search', $event)"
                @click="search"
              />
              <div class="search-input-con">
                <input
                  type="text"
                  placeholder="搜一搜"
                  class="field"
                  @keyup.enter="search"
                  v-model="keyword"
                />
              </div>
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
  methods: {
    search() {
      if (this.keyword.trim() === "") return;
      window.open("/Home/search?keyword=" + this.keyword.trim());
    },
    toHome() {
      window.open("/Home/home");
    },
    focusSearch() {
      this.activeSearch = true;
    },
    lostFocus() {
      this.activeSearch = false;
    },
    toSearchResult(type) {
      window.open("./search?cartegoryType=" + type);
    },
    handleScroll() {
      //获取滚动时的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop > 500) {
        this.showNav = true;
        this.fixed = true;
      } else {
        this.showNav = false;
        this.fixed = false;
      }
    },
    ml(flag) {
      if (flag === 'show') {
        this.showNav_container = true
      } else {
        this.showNav_container = false
      }
    },
    hl: highLight,
    fd: fade,
  },
  data() {
    return {
      activeSearch: false,
      keyword: "",
      fixed: false,
      showNav: false,
      showNav_container: false
    };
  },
  // 监听页面滚动事件
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 防止跳转到没有该组件的页面时监听回调报错
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
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
        document.addEventListener("click", function (e) {
          clickHandler(e, binding);
        });
      },
      unbind(el) {
        // 解除事件监听
        document.removeEventListener("click", el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.header-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  padding-top: 0;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.header {
  position: relative;
  height: 51px;
  z-index: 101;
  padding-top: 20px;
  margin-bottom: 5px;
  background-color: #fff;
}
.clearfix::before {
  content: " ";
  display: table;
}
.clearfix::after {
  clear: both;
  content: " ";
  display: table;
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
  background: url(https://www.xiaomiyoupin.com/static3/media/logo@2x.30cd8c00.png)
    50% no-repeat;
  background-size: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
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
.nav-part {
  text-align: left;
  float: left;
  margin-left: 10px;
  margin-right: 70px;
  width: 60px;
  height: 51px;
  line-height: 51px;
  cursor: pointer;
  .nav-arrow-container {
    display: inline-block;
    padding: 0 5px;
    vertical-align: middle;
    width: 48px;
    height: 24px;
    line-height: 24px;
    border: 1px solid #efefef;
    font-size: 14px;
    .icons {
      position: absolute;
    }
    .icons-dropdown {
      display: inline-block;
      background-image: url(https://www.xiaomiyoupin.com/static3/media/yp-icons.7c45b9c9.png);
      top: 12px;
      width: 30px;
      height: 30px;
      background-position: 0 -1678px;
    }
    .nav-container-box {
      position: absolute;
      top: 51px;
      width: 100%;
      left: 0;
      right: 0;
      .nav-container {
        position: absolute;
        height: 358px;
        background-color: #9f8052;
        width: 221px;
        z-index: 100;
        .nav-list {
          height: 358px;
          overflow-y: hidden;
          overflow-x: hidden;
          .nav-item:first-of-type {
            margin-top: 13px;
          }
          .nav-item {
            width: 161px;
            padding: 0 30px;
            height: 33.2px;
            line-height: 33.2px;
            color: #fff;
            font-size: 14px;
            -webkit-transition: all 0.2s ease;
            -o-transition: all 0.2s ease;
            transition: all 0.2s ease;
            text-align: left;
            overflow: hidden;
            span {
              cursor: pointer;
              color: #fff;
            }
          }
          li {
            float: left;
            height: 46px;
            text-align: center;
            cursor: default;
          }
        }
      }
    }
  }
}
</style>