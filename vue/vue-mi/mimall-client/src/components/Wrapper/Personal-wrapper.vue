<template>
  <div class="personal-box">
    <div class="personal-section-box container">
      <div class="secondary-navigator">
        <span>
          <a>首页</a>
        </span>
        <span>
          <a>个人中心</a>
        </span>
        <span>
          <a>{{current}}</a>          
        </span>
      </div>
      <div class="personal-list-box">
        <div>
          <section>
            <div class="personal-profile">
              <div class="personal-profile-photo"></div>
              <div class="personal-profile-username">Blake</div>
            </div>
          </section>
          <section>
            <div class="personal-functional-list-box">
              <ul>
                <li :class="showOrders?'active':''">
                  <span class="active-circle" v-if="showOrders"></span>
                  <a @click="changeFunction('orders')">我的订单</a>
                </li>
                <li :class="showAssets?'active':''">
                  <span class="active-circle" v-if="showAssets"></span>
                  <a @click="changeFunction('assets')">我的资产</a>
                </li>
                <li :class="showCollections?'active':''">
                  <span class="active-circle" v-if="showCollections"></span>
                  <a @click="changeFunction('collections')">我的收藏</a>
                </li>
                <li :class="showAddress?'active':''">
                  <span class="active-circle" v-if="showAddress"></span>
                  <a @click="changeFunction('address')">地址管理</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div class="personal-container-box">
        <div class="personal-main-box">
          <!-- 三级路由控制组件 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      showOrders: false,
      showAssets: false,
      showCollections: false,
      showAddress: false,
    }
  },
  methods: {
    changeFunction(url) {
      if (this.$route.name.includes(url)) return
      this.showOrders = this.showAssets = this.showCollections = this.showAddress = false
      switch(url) {
        case 'orders':
          this.current = '我的订单'
          this.showOrders = true;
          break;
        case 'assets':
          this.current = '我的资产'
          this.showAssets = true;
          break;
       case 'collections':
          this.current = '我的收藏'
          this.showCollections = true;
          break;
       case 'address':
          this.current = '地址管理'
          this.showAddress = true;
          break;
      }
      this.$router.push(url)
    }
  },
  created() {
    switch(this.$route.name) {
      case 'ordersPage':
        this.current = '我的订单'
        this.showOrders = true;
        break;
      case 'assetsPage':
        this.current = '我的资产'
        this.showAssets = true;
        break;
      case 'collectionsPage':
        this.current = '我的收藏'
        this.showCollections = true;
        break;
      case 'addressPage':
        this.current = '地址管理'
        this.showAddress = true;
        break;
    }
  }
}
</script>

<style lang="less" scoped>
.personal-box {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
  padding-bottom: 100px;
  background: #fafafa repeat 0 0 none;
  color: #4a4a4a;
  * {
    webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .personal-section-box {
    margin: 0 auto;
    overflow: hidden;
    display: block;
    >div {
      float: left;
    }
    .personal-list-box {
      width: 173px;
      margin-right: 7px;
      min-height: 700px;
      background: #fff repeat 0 0 none;
    }
  }
  .container {
    width: 1080px;
  }
}
.personal-profile {
  text-align: center;
  padding: 36px 10px;
  border-bottom: 1px solid #f3f3f3;
  .personal-profile-photo {
    background-image: url(https://img.youpin.mi-img.com/shopcenter/415b0fd8150f58ee2b85caa2ee9cef8f.png);
    background-position: center center;
    background-size: 100%;
    margin: 0 auto 8px;
    width: 54px;
    height: 54px;
    background-repeat: no-repeat;
    border: 1px solid #fafafa;
    border-radius: 50%;
  }
  .personal-profile-username {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
}
.personal-functional-list-box {
  padding: 2px 0 10px;
  ul {
    position: relative;
    padding: 16px 0;
    li {
      width: 100%;
      padding: 16px 20px;
      position: relative;
      a {
        width: 100%;
        height: 100%;
        color: #4a4a4a;
      }
    }
    .active {
      color: #845f3f;
      .active-circle {
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: #845f3f;
        border-radius: 50%;
        top: 50%;
        margin-top: -3px;
        margin-left: -15px;
      }
      a {
        color: #845f3f;
      }
    }
  }
}
.secondary-navigator {
  text-align: left;
  padding: 30px 0;
  width: 100%;
  display: block;
  float: none;
  background: transparent repeat 0 0 none;
  font-size: 13px;
  span::after {
    content: ">";
  }
  span:last-child::after {
    content: "";
  }
  span a {
    margin: 0 6px;
    cursor: pointer;
    color: #000;
  }
  span:first-child a {
    margin-left: 0;
  }
  span:last-child a {
    color: #999;
    cursor: default;
  }
}
.personal-container-box {
  width: 900px;
  min-height: 700px;
  padding-bottom: 25px;
  background: #fff repeat 0 0 none;
  .personal-main-box {
    padding: 11px 0 11px 60px;
    min-height: 500px;
  }
}
</style>