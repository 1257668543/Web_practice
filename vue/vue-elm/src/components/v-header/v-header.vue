<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="sellerInfo.avatar"
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ sellerInfo.name }}</span>
        </div>
        <div class="description">{{sellerInfo.description}}/{{sellerInfo.deliveryTime}}分钟送达</div>
        <div class="support" v-if="sellerInfo.supports">
          <support-ico :size=1 :type="sellerInfo.supports[0].type"></support-ico>
          <span class="text">{{sellerInfo.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="sellerInfo.supports">
        <span class="count">{{sellerInfo.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{sellerInfo.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="sellerInfo.avatar" alt="" width="100%" height="100%">
    </div>
    <!-- detail -->
    <HeaderDetail :seller="sellerInfo" v-show="detailVisible" @child-event='parentEvent'></HeaderDetail>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico' 
import HeaderDetail from '@/components/header-detail/header-detail'
export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      sellerInfo: {},
      detailVisible: false
    }
  },
  created() {
    setTimeout(() => {
    this.sellerInfo = this.seller
    // console.log(this.seller)
    }, 1000)
  },
  methods: {
    showDetail() {
      this.detailVisible = true
    },
    parentEvent(data) {
      this.detailVisible = data
    }
  },
  components: {
    SupportIco,
    HeaderDetail
  },
};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header 
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;
  .content-wrapper 
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;
    .avatar 
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;

      img 
        border-radius: 2px;
    .content 
      flex: 1;
      .title 
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .brand 
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        .name 
          margin-left: 6px;
          font-size: $fontsize-large;
          font-weight: bold;
      .description 
        margin-bottom: 8px;
        line-height: 12px;
        font-size: $fontsize-small;
     .support 
        display: flex;
        align-items: center;
        &-ico
          margin-right: 4px;
        .text 
          line-height: 12px;
          font-size: $fontsize-small-s;
    .support-count
      position absolute
      right 12px
      bottom 14px
      display flex
      align-items center
      padding 0 8px
      height 24px
      line-height 24px
      text-align center
      border-radius 14px
      background $color-background-sss
      .count
        font-size $fontsize-small-s
      .icon-keyboard_arrow_right
        margin-left 2px
        line-height 24px
        font-size $fontsize-small-s
  .bulletin-wrapper
    position relative
    display flex
    align-items center
    height 28px
    line-height 28px
    padding 0 8px
    background $color-background-sss
    .bulletin-title
      flex 0 0 22px
      width 22px
      height 12px
      margin-right 4px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      flex 1
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      font-size $fontsize-small-s
    .icon-keyboard_arrow_right
      flex 0 0 10px
      width 10px
      font-size $fontsize-small-s
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
</style>
