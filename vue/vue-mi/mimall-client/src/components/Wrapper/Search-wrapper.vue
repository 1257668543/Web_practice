<template>
  <div class="search-result">
    <div class="container">
      <div>
        <div v-show="matched">
          <div class="search-tit">
            为您找到
            <span class="num">{{nums}}</span>
            条结果
          </div>
          <ProducList :cartegoryType="cartegoryType" :keyword="keyword" @match_result="change" ref="productList"/>
        </div>
        <div class="no-result" v-if="!matched">
          <div class="exception">
            <div class="img"></div>
            <p class="info">抱歉，暂无任何商品</p>
          </div>
          <div style="margin-top: 21px">
            <a href="/Home/home" class="btn">继续逛</a>
            <a style="display: inline-block; width: 10px; height: 36px;"></a>
            <a class="btn" @click="request">刷新试试</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProducList from '../secondary-components/product-list'
export default {
  data() {
    return {
      matched: true,
      nums: 0,
      cartegoryType: this.$route.query.cartegoryType || '',
      keyword: this.$route.query.keyword || ''
    }
  },
  components: {
    ProducList
  },
  methods: {
    change(match, num) {
      this.matched = match
      this.nums = num
    },
    request() {
      this.$refs.productList.request()
    }
  }
}
</script>

<style lang="less" scoped>
.search-result {
  padding-bottom: 100px;
  background: #f2f2f2;
  .container {
    padding: 30px 0;
    width: 1080px;
    margin: 0 auto;
  }
}
.search-tit {
  text-align: left;
  margin-bottom: 10px;
  font-size: 14px;
  .num {
    color: #845f3f;
  }
}
.no-result {
  padding-top: 50px;
  text-align: center;
}
.exception {
  text-align: center;
  .img {
    width: 153px;
    height: 132px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-origin: center center;
    background-size: 100%;
    background-image: url(https://www.xiaomiyoupin.com/static3/media/no_result.72acf161.png);
  }
  .info {
    margin-top: 24px;
    color: #333;
  }
}
.btn {
  min-width: 110px;
  height: 36px;
  line-height: 34px;
  font-size: 16px;
  display: inline-block;
  border-radius: 2px;
  text-align: center;
  color: #666;
  border: 1px solid #666;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 6px;
  -webkit-transition: all .5s cubic-bezier(0,1,.5,1);
  -o-transition: all .5s cubic-bezier(0,1,.5,1);
  transition: all .5s cubic-bezier(0,1,.5,1);
}
</style>