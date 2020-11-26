<template>
  <div class="banner-nav">
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item">
          <span class="nav-item-span">有品推荐</span>
          <span> / </span>
          <span class="nav-item-span">家用电器</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">居家餐厨</span>
          <span> / </span>
          <span class="nav-item-span">电视影音</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">家具家装</span>
          <span> / </span>
          <span class="nav-item-span">智能家庭</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">手机电脑</span>
          <span> / </span>
          <span class="nav-item-span">数码周边</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">日用文创</span>
          <span> / </span>
          <span class="nav-item-span">服装配饰</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">美妆个护</span>
          <span> / </span>
          <span class="nav-item-span">运动户外</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">鞋靴箱包</span>
          <span> / </span>
          <span class="nav-item-span">健康保健</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">美食酒饮</span>
          <span> / </span>
          <span class="nav-item-span">母婴亲子</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">出行车品</span>
          <span> / </span>
          <span class="nav-item-span">宠物生活</span>
        </li>
        <li class="nav-item">
          <span class="nav-item-span">有品海购</span>
          <span> / </span>
          <span class="nav-item-span">DLAB</span>
        </li>
      </ul>
      <div class="nav-detail"></div>
    </div>
    <div class="banner-box">
      <!-- 轮播图组件 -->
      <slider ref="slider" :options="options">
        <!-- slideritem wrapped package with the components you need -->
        <slideritem v-for="(image, index) in images" :key="index"
          ><img :src="image" alt="" class="banner-image"
        /></slideritem>
        <!-- Customizable loading -->
        <div slot="loading">loading...</div>
      </slider>
      <div
        class="icon icon-forward"
        @click="slide"
        @mouseenter="hl('banner-icon', $event)"
        @mouseleave="fd('banner-icon', $event)"
      >
        <a-icon type="left" class="forward" />
      </div>
      <div
        class="icon icon-next"
        @click="slideNext"
        @mouseenter="hl('banner-icon', $event)"
        @mouseleave="fd('banner-icon', $event)"
      >
        <a-icon type="right" class="next" />
      </div>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import { highLight, fade } from "@/pub-func/highlight.js";
export default {
  data() {
    return {
      images: [
        "https://img.youpin.mi-img.com/test/ffc9abe427272b491c67fb85393ca935.jpeg?w=1080&h=450",
        "https://img.youpin.mi-img.com/test/2da7d3e434f2f6c1b81c319376470a11.jpeg?w=1080&h=450",
        "https://img.youpin.mi-img.com/test/dbcf460413f27c8dc99cdb3c2e3ae1f5.jpeg?w=1080&h=450",
        "https://img.youpin.mi-img.com/test/f47e62e34f565e28592f3c3d4f6377c9.jpeg?w=1080&h=450",
        "https://img.youpin.mi-img.com/test/a7ca9f43531736a9ebf6b1cc20b2c4cf.jpeg?w=1080&h=450",
        "https://img.youpin.mi-img.com/test/9f81b04551f3fed7ef258ba161c79cb9.jpeg?w=1080&h=450",
        "https://img.youpin.mi-img.com/test/bdf6dc980371978a18bd5d5339dac51d.jpeg?w=1080&h=450",
      ],
      someList: [
        {
          html: "slide1",
          style: {
            background: "#1bbc9b",
          },
        },
        {
          html: "slide2",
          style: {
            background: "#4bbfc3",
          },
        },
        {
          html: "slide3",
          style: {
            background: "#7baabe",
          },
        },
      ],
      options: {
        currentPage: 0,
        loop: true,
        autoplay: "3000",
        speed: "1000",
        timingFunction: "ease",
      },
    };
  },
  components: {
    slider,
    slideritem,
  },
  methods: {
    slideNext() {
      this.$refs.slider.$emit("slideNext");
    },
    slide() {
      this.$refs.slider.$emit("slidePre");
    },
    hl: highLight,
    fd: fade,
  },
};
</script>

<style lang="less" scoped>
.banner-nav {
  width: 1080px;
  margin: 0 auto;
  height: 358px;
}
.nav-container {
  position: absolute;
  height: 358px;
  background-color: #9f8052;
  width: 221px;
  z-index: 100;
}
.nav-container .nav-list {
  height: 358px;
  overflow-y: hidden;
  overflow-x: hidden;
}
.nav-container .nav-list .nav-item:first-of-type {
  margin-top: 13px;
}
.nav-container .nav-list .nav-item {
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
}
.nav-list li {
  float: left;
  height: 46px;
  text-align: center;
  cursor: default;
}
.nav-item span {
  color: #fff;
}
.banner-box {
  position: relative;
  width: 859px;
  height: 358px;
  float: right;
}
.banner-image {
  height: 358px;
  cursor: pointer;
}
.icon {
  position: absolute;
  top: 50%;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  color: #fff;
  border-radius: 30px;
  background: rgba(30, 30, 30, 0.3);
}
.icon-forward {
  left: 10px;
}
.icon-next {
  right: 10px;
}
.forward {
  font-size: 32px;
}
.next {
  font-size: 32px;
}
</style>