<template>
  <div class="category-sec">
    <div class="container">
      <div class="sec-top">
        <h2 class="subTit">
          专属推荐
          <span></span>
        </h2>
      </div>
      <div class="product-list">
        <div
          class="goods-item-container item-category"
          :class="index%4 === 0?'first':''"
          v-for="(item, index) in goods_list"
          :key="item.goods_id"
        >
          <div class="category-img-container">
            <div class="product-img">
              <div class="product-image-container">
                <div class="img-container">
                  <img v-lazy="item.goods_showPic" />
                </div>
              </div>
            </div>
            <p class="desc">{{item.goods_desc}}</p>
          </div>
          <div class="category-box">
            <div class="goods-common-tag"></div>
            <p class="info" :title="item.goods_name">{{item.goods_name}}</p>
            <p class="price">
              <span class="unit">¥</span>
              <span class="num">{{item.goods_price}}</span>
            </p>
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
      goods_list: []
    };
  },
  created() {
    this.$http.getAll()
      .then((res) => {
        this.goods_list = JSON.parse(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
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
.product-list:after, .product-list:before {
    content: " ";
    display: table;
}
.product-list:after {
  clear: both;
}
.item-category {
  width: 264px;
  padding-bottom: 0;
  margin-bottom: 5px;
  border: 1px solid #e7e7e7;
  background: none;
}
.goods-item-container {
  position: relative;
  float: left;
  margin-left: 5px;
  text-align: center;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;
  cursor: pointer;
}
.item-container {
  position: relative;
  float: left;
  width: 266px;
  margin-left: 5px;
  text-align: center;
  background: #fff;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;
  cursor: pointer;
}
.first {
  margin-left: 0;
}
.category-img-container {
  width: 100%;
  .product-img {
    width: 100%;
    height: 198px;
    overflow: hidden;
    .product-image-container {
      width: 264px;
      height: 198px;
      overflow: hidden;
      .img-container {
        padding-left: 35px;
        padding-right: 35px;
        padding-bottom: 3px;
        width: 194px;
        height: 195px;
        overflow: hidden;
        display: inline-block;
        img {
          height: 195px;
          width: 195px;
          margin-left: -0.5px;
          vertical-align: middle;
          border: none;
        }
      }
    }
  }
  .desc {
  color: #845f3f;
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  margin-top: 0;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  } 
}
.category-box {
  margin-top: 18px;
  padding: 13px 0 10px;
  background: #f8f8f8;
  .info {
    color: #333;
    margin-top: 10px;
    font-size: 18px;
    line-height: 22px;
    height: 22px;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .price {
    margin-top: 11px;
    margin-bottom: 0;
    height: 22px;
    line-height: 22px;
    color: #a92112;
    overflow: hidden;
    .unit {
      margin-right: 5px;
      font-size: 13px;
      color: #a92112;
    }
    .num {
      color: #a92112;
      font-size: 20px;
    }
  }
}
.goods-common-tag {
  text-align: center;
  height: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
  overflow: hidden;
}
</style>