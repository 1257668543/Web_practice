<template>
  <div class="category-sec">
    <div class="container">
      <div class="sec-top">
        <h2 class="subTit">
          全部商品
          <span></span>
        </h2>
      </div>
      <ProductList/>
    </div>
  </div>
</template>

<script>
import ProductList from '../secondary-components/product-list'
export default {
  components: {
    ProductList
  }
};
</script>

<style lang="less" scoped>
.category-sec {
  margin-top: 50px;
}
.container {
  width: 1080px;
  margin: 0 auto;
}
.sec-top {
  position: relative;
  z-index: 99;
  margin-bottom: 20px;
  .subTit {
    color: #333;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 0;
    text-align: left;
  }
}
</style>