<template>
  <div class="detail">
    <div class="container">
      <div>
        <div class="header clearfix">
          <div class="banner clearfix">
            <div class="main fl">
              <img :src="main_pic_url" alt="" />
            </div>
            <div class="thumb fr">
              <div class="thumb-container" ref="thumb_container">
                <div
                  class="thumb-pic"
                  v-for="(item, index) in chosen_goods.goods_picArr"
                  :key="index"
                  @click="change($event)"
                  style="border-color: rgb(236, 236, 236)"
                  :style="index === 0 ? 'border-color: rgb(132, 95, 63);' : ''"
                >
                  <img :src="item" />
                </div>
              </div>
            </div>
          </div>
          <div class="sku-container">
            <div class="name clearfix">
              <div class="good-name fl">{{ chosen_goods.goods_name }}</div>
            </div>
            <div class="summary">{{ chosen_goods.goods_desc }}</div>
            <div class="card">
              <div class="price-line">
                <h5 class="sku-title">售价</h5>
                <div class="price">
                  <span class="money-symbol">￥</span>
                  <span class="value">{{ chosen_goods.goods_price }}</span>
                </div>
              </div>
              <div class="service-line">
                <h5 class="sku-title">服务</h5>
                <div class="service">
                  <div class="service-item">
                    <a-icon type="check-circle" class="icons" />
                    <span class="service-item-text">满99包邮</span>
                  </div>
                  <div class="service-item">
                    <a-icon type="check-circle" class="icons" />
                    <span class="service-item-text">小米自营</span>
                  </div>
                  <div class="service-item">
                    <a-icon type="check-circle" class="icons" />
                    <span class="service-item-text"
                      >支持7天无理由退货 (拆封后不支持)</span
                    >
                  </div>
                  <div class="service-item">
                    <a-icon type="check-circle" class="icons" />
                    <span class="service-item-text">售后免邮</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="address-line">
              <h5 class="sku-title">配送区域</h5>
              <div class="address">
                <div>
                  <span>江西省 南昌市</span>
                  <span> 有货</span>
                  <a>修改</a>
                </div>
              </div>
            </div>
            <div>
              <div class="count-line">
                <h5 class="sku-title count-title">数量</h5>
                <div class="count-container">
                  <div>
                    <div class="minus-btn" @click="reduce">
                      <a class="icons icons-reduce"></a>
                    </div>
                    <input
                      type="text"
                      :value="nums"
                      class="count-input"
                      @input="user_input($event)"
                      ref="input"
                    />
                    <div class="minus-btn" @click="add">
                      <a class="icons icons-add"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-line">
              <div class="buy-btn-container">
                <span
                  class="btns btn-middle brown"
                  @mouseenter="hl('brown', $event)"
                  @mouseleave="fd('brown', $event)"
                  >加入购物车</span
                >
                <span
                  class="btns btn-middle brown-stroke"
                  @mouseenter="hl('brown-stroke', $event)"
                  @mouseleave="fd('brown-stroke', $event)"
                  >立即购买</span
                >
              </div>
              <div
                class="favor-btn"
                @mouseenter="hl('icon-detail', $event)"
                @mouseleave="fd('icon-detail', $event)"
                @click="changeFavor"
              >
                <a-icon type="heart" class="icons" v-if="!isFavor"/>
                <a-icon type="heart" class="icons" v-else theme="filled" style="color: #845f3f"/>
                <p>{{ isFavor ? "已收藏" : "收藏" }}</p>
              </div>
              <div
                class="service-btn favor-btn"
                @mouseenter="hl('icon-detail', $event)"
                @mouseleave="fd('icon-detail', $event)"
              >
                <a-icon type="customer-service" class="icons" />
                <p>客服</p>
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
  data() {
    return {
      isFavor: "收藏",
      main_pic_url: "",
      chosen_goods: {
        goods_name: "",
        goods_picArr: [],
        goods_desc: "",
        goods_price: "",
      },
      nums: 1,
    };
  },
  methods: {
    hl: highLight,
    fd: fade,
    change(e) {
      this.main_pic_url = e.currentTarget.firstChild.src;
      this.$refs.thumb_container.childNodes.forEach((child) => {
        child.style.cssText = "border-color: rgb(236, 236, 236);";
      });
      e.currentTarget.style.cssText = "border-color: rgb(132, 95, 63);";
    },
    add() {
      if (this.nums === 20) {
        this.$message.warning("数量已达最大限制");
        return;
      }
      this.nums++;
    },
    reduce() {
      if (this.nums === 1) {
        this.$message.warning("数量已达最小限制");
        return;
      }
      this.nums--;
    },
    user_input(e) {
      if (e.target.value < 1) {
        this.nums = 1;
        e.target.value = 1;
      } else if (e.target.value > 20) {
        this.nums = 20;
        e.target.value = 20;
      } else {
        this.nums = e.target.value;
      }
    },
    async changeFavor() {
      await this.$http
        .changeFavor({
          gid: this.$route.query.gid,
          uid: sessionStorage.getItem("user_id")
            ? sessionStorage.getItem("user_id")
            : "",
        })
        .then((res) => {
          console.log(res.msg);
        })
        .catch((err) => {
          console.log(err);
        });
      this.isFavor = !this.isFavor
    },
    get_goodsDetail() {
      // 获取商品详细信息
      this.$http
        .get_goodsDetail({
          gid: this.$route.query.gid,
          uid: sessionStorage.getItem("user_id")
            ? sessionStorage.getItem("user_id")
            : "",
        })
        .then((res) => {
          this.isFavor = res.isFavor;
          this.chosen_goods = res.data;
          this.main_pic_url = this.chosen_goods.goods_picArr[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.get_goodsDetail()
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  min-height: 285px;
  padding-top: 60px;
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  .container {
    width: 1080px;
    margin: 0 auto;
    min-height: inherit;
    position: relative;
  }
}
.header {
  margin-bottom: 67px;
  .banner {
    margin-right: 46px;
    width: 465px;
    height: 374px;
    float: left;
    .main {
      width: 372px;
      height: 372px;
      background-color: #f4f4f4;
      border: 1px solid #ececec;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .thumb {
      width: 85px;
      height: 100%;
      position: relative;
      overflow: hidden;
      .thumb-container {
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: top 0.3s ease;
        -o-transition: top 0.3s ease;
        transition: top 0.3s ease;
        .thumb-pic {
          cursor: pointer;
          width: 83px;
          height: 83px;
          margin-bottom: 11px;
          border-width: 1px;
          border-style: solid;
          background-color: #f4f4f4;
          -webkit-transition: border 0.5s cubic-bezier(0, 1, 0.5, 1);
          -o-transition: border 0.5s cubic-bezier(0, 1, 0.5, 1);
          transition: border 0.5s cubic-bezier(0, 1, 0.5, 1);
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .sku-container {
    width: 561px;
    float: left;
    .sku-title {
      float: left;
      font-size: 12px;
      font-weight: 400;
      line-height: 32px;
      vertical-align: bottom;
      margin-right: 10px;
      width: 48px;
    }
    .name {
      margin-bottom: 4px;
      .good-name {
        vertical-align: middle;
        line-height: 26px;
        font-size: 20px;
        color: #333;
        float: left;
      }
    }
    .summary {
      text-align: left;
      width: 84%;
      line-height: 18px;
      font-size: 12px;
      color: #999;
    }
    .card {
      margin-bottom: 26px;
      padding: 10px;
      background-color: #f9f9f9;
      .price-line {
        margin-top: 12px;
        margin-bottom: 12px;
        height: 37px;
        overflow: hidden;
        vertical-align: bottom;
        line-height: 40px;
        font-size: 30px;
        .price {
          text-align: left;
          color: #c00000;
          line-height: 30px;
          overflow: hidden;
          .money-symbol {
            color: #c00000;
            margin-right: 3px;
            font-size: 14px;
            vertical-align: 0;
          }
          .value {
            color: #c00000;
            font-size: 30px;
            vertical-align: 0;
          }
        }
      }
      .service-line {
        margin-bottom: 12px;
        vertical-align: bottom;
        line-height: 24px;
        font-size: 24px;
        .service {
          overflow: hidden;
          .service-item {
            float: left;
            overflow: hidden;
            min-height: 24px;
            margin-right: 13px;
            line-height: 24px;
            font-size: 16px;
            .service-item-text {
              margin-left: 8px;
              line-height: 16px;
            }
            .icons {
              color: #c00000;
            }
          }
        }
      }
    }
    .address-line {
      overflow: hidden;
      padding: 0 10px 26px;
      .sku-title {
        line-height: 14px;
      }
      .address {
        font-size: 14px;
        float: left;
        line-height: 14px;
        margin-right: 10px;
        font-weight: 400;
        a {
          margin-left: 10px;
          color: #666;
        }
      }
    }
    .count-line {
      overflow: hidden;
      margin-bottom: 40px;
      .count-title {
        text-align: left;
        float: left;
        line-height: 32px;
        margin-left: 10px;
        margin-right: 10px;
      }
      .sku-title {
        font-size: 12px;
        font-weight: 400;
        vertical-align: bottom;
      }
      .minus-btn {
        float: left;
        width: 34px;
        height: 30px;
        border: 1px solid #d6d6d6;
        line-height: 28px;
        text-align: center;
        color: #d6d6d6;
        .icons {
          background-image: url(https://www.xiaomiyoupin.com/static3/media/yp-icons.7c45b9c9.png);
        }
      }
      .count-input {
        float: left;
        width: 60px;
        height: 30px;
        padding: 0;
        border: 1px solid #d6d6d6;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        color: #333;
        outline: none;
      }
    }
    .btn-line {
      height: 52px;
      position: relative;
      .buy-btn-container {
        float: left;
        overflow: hidden;
        span {
          margin-right: 15px;
        }
      }
      .favor-btn {
        cursor: pointer;
        float: left;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 2px;
        color: #999;
        line-height: 12px;
        text-align: center;
        font-size: 12px;
        -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
        -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
        transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
        .icons {
          color: #999;
          padding: 5px;
          line-height: 12px;
          font-size: 20px;
        }
        p {
          color: #999;
        }
      }
      .service-btn {
        margin-left: 15px;
        .icons {
          color: #999;
        }
        p {
          color: #999;
        }
      }
    }
  }
}
.icons {
  display: inline-block;
}
.btns {
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  text-align: center;
  color: #666;
  border: 1px solid #666;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 6px;
  -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
  -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
  transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
}
.brown {
  color: #fff;
  background-color: #845f3f;
  border-color: #845f3f;
}
.brown-stroke {
  color: #845f3f;
  border-color: #845f3f;
}
.btn-middle {
  min-width: 167px;
  height: 52px;
  line-height: 50px;
  font-size: 20px;
}
.icons-reduce {
  background-position: 0 -1372px;
  width: 30px;
  height: 30px;
}
.icons-add {
  width: 30px;
  height: 30px;
  background-position: 0 -1032px;
}
.icons {
  display: inline-block;
}
.fl {
  float: left;
}
.fr {
  float: right;
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
</style>