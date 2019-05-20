<template>
  <ul id="footWrap">
    <li :class="{on: $route.path==='/home'}" @click="goTo('/home')">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </li>
    <li :class="{on: $route.path==='/classification'}" @click="goTo('/classification')">
      <i class="iconfont icon-icon_wangye"></i>
      <span>分类</span>
    </li>
    <li :class="{on: $route.path==='/general'}" @click="goTo('/general')">
      <i class="iconfont icon-xingzhuang-tupian"></i>
      <span>识物</span>
    </li>
    <li :class="{on: $route.path==='/shopping'}" @click="goTo('/shopping')">
      <i class="iconfont icon-gouwuche-"></i>
      <span>购物车</span>
    </li>
    <li :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
      <i class="iconfont icon-icon_zhanghao"></i>
      <span>个人</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footWrap
    position fixed
    right 0
    left 0
    bottom 0
    z-index 100
    width 100%
    height 98px
    background-color #eee
    display flex
    li
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 15px
      .iconfont
        margin-top 11px
        font-size 40px
</style>
