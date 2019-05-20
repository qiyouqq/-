<template>
  <div id="pslWrap">
    <div class="header-slot">
      <i class="iconfont icon-home" @click="toHome"></i>
      <span></span>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-gouwuche-"></i>
    </div>
    <div class="logo">
      <img data-v-4e150caf="" src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="loginType">
      <div class="phoneLodin">
        <i class="iconfont icon-contextphone"></i>
        <span>手机号码登录</span>
      </div>
      <div class="emailLodin">
        <i class="iconfont icon-1"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="quickLogin">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-rightArrow"></i>
      </div>
    </div>
    <div class="loginOther">
      <div class="wechat">
        <i class="iconfont icon-weixin"></i>
        <span>微信&nbsp;&nbsp;&nbsp;&nbsp;|</span>
      </div>
      <div class="qq">
        <i class="iconfont icon-qq"></i>
        <span>QQ&nbsp;&nbsp;&nbsp;&nbsp;|</span>
      </div>
      <div class="weibo">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "",
    methods:{
      toHome(){
        this.$router.replace('/home')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #pslWrap
    width 750px
    height 100%
    .header-slot
      width 730px
      height 100px
      line-height 100px
      display flex
      margin 0 auto
      span
        flex 7
        width 138px
        height 40px
        display block
        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-repeat no-repeat
        background-position center
        margin-top 30px
      i
        font-size 46px
      :nth-child(3)
        margin-left 10px
        font-size 50px
    .logo
      width 750px
      height 410px
      text-align center
      line-height 410px
      background-color #F2F5F4
      border-top 1px solid #999
      img
        width 268px
        height 90px

    .loginType
      width 750px
      height 685px
      background-color #F2F5F4
      .phoneLodin
        width 672px
        height 102px
        background-color #b4282d
        margin 0 auto
        font-size 28px
        text-align center
        line-height 102px
        margin-bottom 32px
        i
          font-size 40px
          color #FFF
        span
          color #FFF

      .emailLodin
        width 672px
        height 102px
        margin 0 auto
        font-size 28px
        text-align center
        line-height 102px
        margin-bottom 32px
        color #b4282d
        border 1px solid #b4282d
        i
          font-size 40px
      .quickLogin
        text-align center
        width 670px
        height 37px
        line-height 37px
        margin 0 auto
        padding-left 25px
        span
          font-size 28px
          color #333
        i
          font-size 30px
    .loginOther
      width 750px
      height 138px
      background-color #F2F5F4
      color #7f7f7f
      font-size 28px
      display flex
      justify-content space-around
      text-align center
      .wechat
        width 186px
        height 44px
        line-height 44px
        padding-left 113px
        i
          font-size 40px
      .qq
        width 186px
        height 44px
        line-height 44px
        i
          font-size 36px
      .weibo
        width 186px
        height 44px
        padding-right 113px
        line-height 44px
        i
          font-size 40px
</style>
