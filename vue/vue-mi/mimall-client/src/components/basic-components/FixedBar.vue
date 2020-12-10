<template>
  <div class="fixedBar">
    <ul class="fixed-nav">
      <li
        @mouseenter="hl('fixed-icon', $event)"
        @mouseleave="fd('fixed-icon', $event)"
      >
        <a-icon type="customer-service" class="service icon" />
        <p class="text">联系客服</p>
        <div class="fixed-pop fixed-service-pop">
          <div class="pop-inner">
            <p class="info-title">
              小米有品平台问题，建议反馈，商户和物流问题投诉等请拨打
              小米有品客服热线
            </p>
            <p class="info-phone">400-100-1199</p>
            <p class="info-day">(周一至周日 8：00-18：00)</p>
            <p class="info-des">
              小米/米家自营品牌，手机电视智能硬件商品或订单发货/退款售后问题
              请拨打小米自营客服热线
            </p>
            <p class="info-phone">400-100-5678</p>
            <p class="info-day">(周一至周日 8：00-18：00)</p>
          </div>
          <div class="icons-arrow-right"></div>
        </div>
      </li>
      <li
        @mouseenter="hl('fixed-icon', $event)"
        @mouseleave="fd('fixed-icon', $event)"
      >
        <a-icon type="scan" class="download icon" />
        <p class="text">下载APP</p>
        <div class="fixed-pop fixed-down-pop">
          <div class="pop-inner">
            <img
              class="qr-code"
              src="https://www.xiaomiyoupin.com/static3/media/code.6b4e6f01.png"
              alt="qr-code"
            />
            <p class="site-info">下载小米有品APP<br />得新人礼包</p>
          </div>
          <a class="icons-arrow-right"></a>
        </div>
      </li>
      <li
        @mouseenter="hl('fixed-icon', $event)"
        @mouseleave="fd('fixed-icon', $event)"
      >
        <a-icon type="gift" class="gift icon" />
        <p class="text">新人有礼</p>
        <div class="fixed-pop fixed-gift-pop">
          <div class="pop-inner">
            <div class="gift-bg"></div>
            <img
              class="qr-code"
              src="https://www.xiaomiyoupin.com/static3/media/code.6b4e6f01.png"
              alt="qr-code"
            />
            <p class="site-info">立即扫码下载·小米有品 APP</p>
          </div>
          <a class="icons-arrow-right"></a>
        </div>
      </li>
      <li
        @mouseenter="hl('fixed-icon', $event)"
        @mouseleave="fd('fixed-icon', $event)"
      >
        <a-icon type="wechat" class="wechat icon" />
        <p class="text">关注微信</p>
        <div class="fixed-pop fixed-wx-pop">
          <div class="pop-inner">
            <img
              class="qr-code"
              src="https://www.xiaomiyoupin.com/static3/media/wx_code.83208f15.png"
              alt="qr-code"
            />
            <p class="site-info">
              扫码关注「小米有品」微信服务号，签到积分赢大奖
            </p>
          </div>
          <a class="icons-arrow-right"></a>
        </div>
      </li>
      <li
        @mouseenter="hl('fixed-icon', $event)"
        @mouseleave="fd('fixed-icon', $event)"
        @click="backTop"
      >
        <a-icon type="rocket" class="toTop icon" />
        <p class="text">回到顶部</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { highLight, fade } from "@/pub-func/highlight.js";
export default {
  data() {
    return {};
  },
  methods: {
    hl: highLight,
    fd: fade,
    backTop() {
      // 动画
      let timer = setInterval(function () {
        //获取滚动条到顶部的位置
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        // 判断到顶部的等式：滚动条到顶部的位置 + 当前窗口内容可视区 == 滚动条的总高度
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
  },
};
</script>

<style lang="less" scoped>
.fixedBar {
  position: fixed;
  top: 200px;
  right: 10px;
  z-index: 999;
  width: 71px;
  padding: 0 5px;
  background: #fff;
  -webkit-box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
}
.fixedBar li {
  padding: 10px;
  font-size: 12px;
  text-align: center;
  border-bottom: 1px solid #e7e7e7;
  cursor: pointer;
  position: relative;
  color: red;
}
.icon {
  font-size: 24px;
  color: #666666;
}
.text {
  margin-bottom: 0;
  margin-top: 6px;
}
.active {
  color: #845f3f;
}
.fixed-service-pop {
  width: 230px;
  left: -244px;
}
.fixed-pop {
  position: absolute;
  top: 0;
  display: none;
  padding-right: 20px;
}
.pop-inner {
  padding: 10px 18px;
  border: 1px solid #dfdfdf;
  background: #fff;
}
.info-title {
  margin-top: 8px;
  color: #333;
  font-size: 12px;
}
.info-phone {
  margin-top: 15px;
  color: #845f3f;
  font-size: 20px;
}
.info-day {
  margin-top: 1px;
  color: #666;
  font-size: 12px;
}
.info-des {
  margin-top: 18px;
  color: #333;
  font-size: 12px;
}
.icons-arrow-right {
  position: absolute;
  right: 10px;
  top: 15px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #fff;
}
.fixed-down-pop {
  width: 130px;
  overflow: hidden;
  left: -144px;
}
.qr-code {
  display: block;
  width: 88px;
  height: 88px;
  margin: 0 auto 10px;
}
.fixed-gift-pop {
  height: 328px;
  overflow: hidden;
  left: -242px;
}
.gift-bg {
  width: 190px;
  height: 152px;
  margin-bottom: 20px;
  background: url(https://www.xiaomiyoupin.com/static3/media/gift-gd.3f999fde.png)
    50% no-repeat;
  background-size: 100%;
}
.fixed-wx-pop {
  width: 210px;
  left: -224px;
  .qr-code {
    width: 120px;
    height: 120px;
  }
}
</style>