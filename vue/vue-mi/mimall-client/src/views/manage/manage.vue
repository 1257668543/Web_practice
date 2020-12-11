<template>
  <div class="container">
    <div class="wrapper">
      <div class="admin-lgn" v-if="!isLogin">
        <div class="logo">
          <img
            src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png"
            alt="loading..."
            class="milogo"
          />
          <h4 class="login-title">管理员登录</h4>
        </div>
        <div class="password">
          <a-input-password
            size="large"
            placeholder="请输入管理员密码"
            class="pwd-input"
            v-model="pwd"
          />
        </div>
        <div class="lgn-btn">
          <input type="button" id="login-btn" value="登录" @click="login" />
        </div>
      </div>
      <a-form-model
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        class="form"
        v-else
      >
        <a-form-model-item label="商品名称">
          <a-input v-model="form.G_name" />
        </a-form-model-item>
        <a-form-model-item label="商品价格￥">
          <a-input v-model="form.G_price" />
        </a-form-model-item>
        <a-form-model-item label="商品分类">
          <a-select v-model="form.G_categories" placeholder="请选择商品类别">
            <a-select-option value="1">有品推荐</a-select-option>
            <a-select-option value="2">家用电器</a-select-option>
            <a-select-option value="3">居家餐厨</a-select-option>
            <a-select-option value="4">家具家装</a-select-option>
            <a-select-option value="5">电视影音</a-select-option>
            <a-select-option value="6">智能家庭</a-select-option>
            <a-select-option value="7">手机电脑</a-select-option>
            <a-select-option value="8">数码周边</a-select-option>
            <a-select-option value="9">日用文创</a-select-option>
            <a-select-option value="10">服装配饰</a-select-option>
            <a-select-option value="11">美妆个护</a-select-option>
            <a-select-option value="12">运动户外</a-select-option>
            <a-select-option value="13">鞋靴箱包</a-select-option>
            <a-select-option value="14">健康保健</a-select-option>
            <a-select-option value="15">美食酒饮</a-select-option>
            <a-select-option value="16">母婴亲子</a-select-option>
            <a-select-option value="17">出行车品</a-select-option>
            <a-select-option value="18">宠物生活</a-select-option>
            <a-select-option value="19">有品海购</a-select-option>
            <a-select-option value="20">DLAB</a-select-option>            
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="商品图片地址">
          <a-input v-model="form.G_picArr[0]" />
        </a-form-model-item>
        <a-form-model-item label="商品图片地址">
          <a-input v-model="form.G_picArr[1]" />
        </a-form-model-item>
        <a-form-model-item label="商品图片地址">
          <a-input v-model="form.G_picArr[2]" />
        </a-form-model-item>
        <a-form-model-item label="商品图片地址">
          <a-input v-model="form.G_picArr[3]" />
        </a-form-model-item>
        <a-form-model-item label="商品描述">
          <a-input v-model="form.G_desc" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit"> 添加 </a-button>
          <a-button style="margin-left: 10px" @click="clear"> 清空 </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      pwd: "",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        G_name: "",
        G_price: "",
        G_desc: "",
        G_picArr: [],
        G_categories: ""
      }
    };
  },
  methods: {
    login() {
      if (this.pwd === "admin") {
        this.isLogin = true;
        return;
      }
      this.$message.error("密码错误");
    },
    onSubmit() {
      if (
        this.form.G_name === "" ||
        this.form.G_price === null ||
        this.form.G_desc === "" ||
        this.form.G_picArr.length < 4
      ) {
        this.$message.error("数据不能为空");
        return;
      }
      this.$http
        .insert({
          G_form: this.form,
        })
        .then((res) => {
          this.$message.success(res.msg);
          this.clear();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    clear() {
      this.form.G_name = ''
      this.form.G_price = ''
      this.form.G_desc = ''
      this.form.G_categories = ''
      this.form.G_picArr = []
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.wrapper {
  width: 100%;
}
.admin-lgn {
  width: 100%;
  height: 100vh;
  padding-bottom: 105px;
  padding-top: 50px;
  box-sizing: border-box;
}
.logo {
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
.password {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
.pwd-input {
  width: 40%;
}
#login-btn {
  background-color: #ff6700;
  width: 40%;
  height: 50px;
  line-height: 50px;
  margin: 14px 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
.form {
  padding-top: 70px;
  padding-left: 120px;
  box-sizing: border-box;
}
</style>