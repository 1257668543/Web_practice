<template>
  <div class="personal-collection">
    <section>
      <div class="person-tit">
        <p>我的收藏</p>
      </div>
    </section>
    <section>
      <div class="personal-main">
        <div v-for="(item, index) in goodsArr" :key="index">
          <div class="personal-product">
            <div class="personal-product-image">
              <img :src="item.goods_showPic" alt="" />
            </div>
            <span class="personal-product-text-box">
              <div class="personal-product-name-box">
                <div>
                  <p>{{ item.goods_name }}</p>
                </div>
              </div>
            </span>
          </div>
          <section class="personal-item-footer">
            <div class="personal-button-box">
              <a
                class="btns"
                @mouseenter="hl('clauses', $event)"
                @mouseleave="fd('clauses', $event)"
                @click="changeFavor(item.goods_id)"
                >取消收藏</a
              >
              <a
                class="btns"
                @mouseenter="hl('clauses', $event)"
                @mouseleave="fd('clauses', $event)"
                @click="seekGoods(item.goods_id)"
                >查看商品</a
              >
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { highLight, fade } from "@/pub-func/highlight.js";
export default {
  data() {
    return {
      goodsArr: [],
    };
  },
  methods: {
    hl: highLight,
    fd: fade,
    seekGoods(gid) {
      window.open('/Home/detail?gid=' + gid)
    },
    async changeFavor(goods_id) {
      await this.$http
        .changeFavor({
          gid: goods_id,
          uid: sessionStorage.getItem("user_id")
            ? sessionStorage.getItem("user_id")
            : "",
        })
        .then((res) => {
          this.$message.success(res.msg);
        })
        .catch((err) => {
          console.log(err);
        });
      this.fetchFavor()
    },
    async fetchFavor() {
      this.$http
        .fetchFavor({
          uid: sessionStorage.getItem("user_id")
            ? sessionStorage.getItem("user_id")
            : "",
        })
        .then((res) => {
          this.goodsArr = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchFavor();
  },
};
</script>

<style lang="less" scoped>
.personal-collection {
  webkit-box-sizing: border-box;
  box-sizing: border-box;
  * {
    webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  font-size: 16px;
  section {
    position: relative;
    display: block;
    overflow: hidden;
  }
  .personal-item-footer {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f3f7f5;
    .personal-button-box {
      // 父容器下所有相邻兄弟元素选择第二个，若有三个相邻子元素则会选择第二，第三两个...
      * + * {
        margin-left: 20px;
      }
      float: right;
      padding-bottom: 0;
      .btns {
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
        -webkit-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
        -o-transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
        transition: all 0.5s cubic-bezier(0, 1, 0.5, 1);
      }
    }
  }
}
.person-tit {
  text-align: left;
  padding: 25px 0 10px;
  margin: 0 30px 0 0;
  border-bottom: 1px solid #e7e7e7;
  p {
    font-size: 18px;
    font-weight: 400;
    color: #845f3f;
  }
}
.personal-main {
  min-height: 500px;
}
.personal-product {
  padding: 10px 32px 10px 0 !important;
  line-height: 120px;
  border-bottom: 1px dashed #e7e7e7;
  overflow: hidden;
  .personal-product-image {
    float: left;
    width: 120px;
    height: 120px;
    position: relative;
    overflow: hidden;
    margin-right: 25px;
    img {
      width: 100%;
      height: auto;
    }
  }
  span {
    float: left;
    height: 120px;
    line-height: 120px;
  }
}
.personal-product-name-box {
  max-width: 500px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
</style>