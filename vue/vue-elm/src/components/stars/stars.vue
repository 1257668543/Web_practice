<template>
  <div class="starsWrapper">
    <span class="stars-ico" :class="item" v-for="(item, index) in starsList" :key="index"></span>
  </div>
</template>

<script>
export default {
  props: {
    starNum: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      starsList: [],
    };
  },
  created() {
    setTimeout(() => {
     this.starAarry() 
    }, 1000);
  },
  methods: {
    starAarry() {
      let num = Math.floor(this.starNum);
      for (let i = 0; i < num; i++) {
        this.starsList.push("on");
      }
      for (let j = 0; j < 5 - num; j++) {
        this.starsList.push("off");
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';

.starsWrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  .stars-ico {
    margin-right: 22px;
    display: inline-block;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  .on {
    bg-image('star48_on');
  }

  .off {
    bg-image('star48_off');
  }
}
</style>