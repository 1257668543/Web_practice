<template>
  <div class="container">
    <div class="wrapper">
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout" id="layout">
            <div id="main-content">
              <div class="main-box">
                <div class="ercode">
                  <a-icon type="qrcode" class="ercode-icon" />
                </div>
                <div class="login-header">
                  <div class="header_tit">
                    <img
                      src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png"
                      alt="loading..."
                      class="milogo"
                    />
                    <h4 class="login-title">小米帐号登录</h4>
                    <div class="site-info"></div>
                  </div>
                </div>
                <div class="login-area">
                  <div class="loginbox">
                    <div class="lgn-input">
                      <a-input
                        size="large"
                        :placeholder="
                          isRegister
                            ? '请输入6-16位，数字/字母/下划线组成的账号'
                            : '邮箱/手机号码/小米ID'
                        "
                        allow-clear
                        class="account-input"
                        v-model="account"
                      />
                      <a-input
                        size="large"
                        placeholder="昵称"
                        allow-clear
                        class="account-input"
                        v-if="isRegister"
                        v-model="nickname"
                      />
                      <a-input-password
                        size="large"
                        placeholder="密码"
                        class="pwd-input"
                        v-model="pwd"
                      />
                      <a-input-password
                        size="large"
                        placeholder="确认密码"
                        class="pwd-input"
                        v-if="isRegister"
                        v-model="confirm_pwd"
                      />
                    </div>
                    <div class="btn-lgn">
                      <input
                        type="button"
                        id="login-btn"
                        value="已有账号，去登录"
                        v-if="isRegister"
                        @click="showLogin"
                      />
                      <input
                        type="button"
                        id="login-btn"
                        value="登录"
                        v-else
                        @click="login"
                      />
                      <input
                        type="button"
                        id="regist-btn"
                        value="确认注册"
                        v-if="isRegister"
                        @click="register"
                      />
                      <input
                        type="button"
                        id="regist-btn"
                        value="立即注册"
                        v-else
                        @click="showRegister"
                      />
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
      account: "",
      nickname: '',
      pwd: "",
      confirm_pwd: "",
      isRegister: false,
      log_btn: "",
      reg_btn: "",
    };
  },
  beforeMount() {
    this.isRegister = this.$route.query.isRegister ? true : false;
  },
  mounted() {
    this.$message.info(this.isRegister ? "欢迎来到注册页" : "欢迎来到登录页");
  },
  methods: {
    showLogin() {
      this.account = this.pwd = this.nickname = this.confirm_pwd = ''
      this.isRegister = false;
    },
    showRegister() {
      this.isRegister = true;
    },
    // 请求登录接口，验证账号和密码
    login() {
      if (!this.account || !this.pwd) {
        this.$message.info('请输入账号和密码！')
        return
      }
      this.$http
        .login({
          user_account: this.account,
          user_pwd: this.pwd,
        })
        .then((res) => {
          this.$message.success(res.msg + ',即将跳转首页...')
          console.log(res.data.user_account);
          sessionStorage.setItem('user_account', res.data.user_account)
          sessionStorage.setItem('user_nickname', res.data.user_nickname)
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        })
        .catch((err) => {
          this.$message.error(err)
        });
    },
    // 请求注册接口，验证账号重复性
    register() {
      let reg = /^[\w]{6,16}$/
      if (!reg.test(this.account)) {
        this.$message.warning("账号不规范，请输入6-16位，数字，字母，下划线组成的账号!");
        return
      } 
      else if (!this.pwd || !this.confirm_pwd || !this.nickname) {
        this.$message.warning("请输入密码与昵称！");
        return;
      }
      else if (this.pwd !== this.confirm_pwd) {
        this.$message.warning("两次输入密码不一致，请重试！");
        return;
      }
      this.$http
        .register({
          user_account: this.account,
          user_nickname: this.nickname,
          user_pwd: this.pwd
        })
        .then((res) => {
          this.$message.success('注册成功！')
          console.log(res)
          this.isRegister = false
        })
        .catch((err) => {
          this.$message.error('注册失败！')
          console.log(err);
        });
    },
  },
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
.wrap,
.layout_panel {
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
.milogo {
  width: 49px;
  height: 48px;
  margin: 0 auto;
  display: block;
}
.login-title {
  font-size: 22px;
  padding-top: 15px;
  color: #333;
  font-weight: normal;
}
.site-info {
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