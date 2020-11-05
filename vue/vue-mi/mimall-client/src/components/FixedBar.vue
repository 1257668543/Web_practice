<template>
  <div class="fixedBar">
    <ul class="fixed-nav">
      <li>
        <p class="text">联系客服</p>
      </li>
      <li>
        <p class="text">下载APP</p>
      </li>
      <li>
        <p class="text">新人有礼</p>
      </li>
      <li>
        <p class="text">关注微信</p>
      </li>
      <li>
        <p class="text">回到顶部</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.fixedBar {
  position: fixed;
  top: 220px;
  right: 10px;
  z-index: 999;
  width: 71px;
  padding: 0 5px;
  background: #fff;
  -webkit-box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
}
</style>