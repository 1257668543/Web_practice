<template>
  <div class="con">
    <h2>{{ msg }}</h2>
    <a-button icon="home" class="btn" @click="toHome"> 回首页 </a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "页面找不到，code: 404",
    };
  },
  mounted() {
    this.$message.info("地址输错咯，点击 回首页 / 浏览器的返回 看看吧");
  },
  methods: {
    toHome() {
      this.$router.push('./')
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  width: 100%;
  height: 500px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
}
.btn {
  margin-left: 10px;
  border: 1px solid #ff6700;
}
</style>