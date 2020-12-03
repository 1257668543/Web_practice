<template>
  <div class="container">
    <div class="wrapper">
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout" id="layout">
            <div id="main-content">
              <div class="main-box">
                <div class="ercode">
                  <a-icon type="qrcode" class="ercode-icon"/>
                </div>
                <div class="login-header">
                  <div class="header_tit">
                    <img src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png" alt="loading..." class="milogo">
                    <h4 class="login-title">小米帐号登录</h4>
                    <div class="site-info"></div>
                  </div>
                </div>
                <div class="login-area">
                  <div class="loginbox">
                    <div class="lgn-input">
                      <a-input placeholder="邮箱/手机号码/小米ID" allow-clear class="account-input"/>
                      <a-input-password placeholder="密码" class="pwd-input"/>
                    </div>
                    <div class="btn-lgn">
                      <input type="button" id="login-btn" value="登录">
                      <input type="button" id="regist-btn" value="立即注册" @click="toRegist">
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      account: '',
      pwd: ''
    }
  },
  mounted() {
    this.$message.info('欢迎来到登录页');
  },
  methods: {
    add() {
      this.account += '1'
      this.pwd += '1'
    },
    handleTest() {
      console.log(this);
      this.$http.login({ 
        user_id: this.account,
        pwd: this.pwd
      }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    },
    toRegist() {
      
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  background: #f5f5f5;
  color: #757575;
}
.wrapper {
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  box-align: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  box-pack: center;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  justify-content: center;
  align-items: center;
}
.wrap {
  padding-bottom: 105px;
  padding-top: 50px;
}
.wrap, .layout_panel {
  width: 100%;
}
.layout {
  width: 100%;
  min-width: 400px;
  min-height: 480px;
  background-color: #fff;
  max-width: 854px;
  margin: 0 auto 20px;
  position: relative;
}
.mainbox {
  padding-bottom: 15px;
}
.ercode {
  position: absolute;
  right: 0;
  top: 0;
}
.ercode-icon {
  font-size: 40px;
  color: #ff6700;
}
.header_tit {
  padding: 25px 0 0;
  text-align: center;
}
.milogo{
  width: 49px;
  height: 48px;
  margin: 0 auto;
  display: block;
}
.login-title{
  font-size: 22px;
  padding-top: 15px;
  color: #333;
  font-weight: normal;
}
.site-info{
  padding-top: 10px;
}
.login-area {
  width: 358px;
  margin: 0 auto;
  padding-bottom: 20px;
}
.account-input {
  margin-bottom: 25px;
}
.pwd-input {
  margin-bottom: 25px;
}
.btn-lgn {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
#login-btn {
  background-color: #ff6700;
  width: 40%;
  height: 50px;
  line-height: 50px;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
#regist-btn {
  background-color: #d9d9d9;
  width: 40%;
  height: 50px;
  line-height: 50px;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 14px;
  color: #ff6700;
  cursor: pointer;
}
</style>