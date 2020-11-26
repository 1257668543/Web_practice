<template>
  <div class="container">
    <div class="wrapper">
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout" id="layout">
            <a-input placeholder="account" v-model="account"/>
            <a-input placeholder="password" v-model="pwd"/>
            <button class="testApi" @click="handleTest">test Api</button>
            <button @click="add">add</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
    <div class="modal_container"></div>
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
  methods: {
    add() {
      this.account += '1'
      this.pwd += '1'
    },
    handleTest() {
      this.$http.login({ 
        user_id: this.account,
        pwd: this.pwd
      }).then(res => {
        console.log(res.data);
      })
    }
  }
};
</script>

<style lang="less" scoped>
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
.inp {
  outline: burlywood;
}
</style>