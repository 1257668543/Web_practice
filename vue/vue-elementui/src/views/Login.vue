<template>
  <div class="login">
    <h2>旅梦后台管理系统</h2>
    <div class="login-wrapper">
      <p class="input">
        <el-input v-model="user" placeholder="请输入账号"></el-input>
      </p>
      <p class="input">
        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      </p>
      <p class="btn" @click="login">
        <el-button type="primary" round>登录</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      UserDatabase: {
        user: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    login() {
      if ( !this.user || !this.password ) {
        this.$message.warning("用户名和密码不能为空!")
      } else {
        // if (this.user !== this.UserDatabase.user) {
        //   this.$message.error("用户名不存在")
        // } else if (this.password !== this.UserDatabase.password) {
        //   this.$message.error("密码错误")
        // } else {
          this.$message.success('登录成功')
          // 路由跳转
          this.$router.push({ name: 'Home' , params: {userName: this.user}})
        }
      }
    }
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c0c0c0;
}
.login-wrapper {
  margin-top: 30px;
  width: 250px;
}
.input {
  margin-bottom: 20px;
}
.btn button {
  width: 100%;
}
</style>