<template>
  <div id="headerWrap">
    <div class="headerTop">
      <span class="logo">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </span>
      <input type="text" placeholder="请输入关键字搜索">
      <button @click="toLogin">登录</button>
    </div>
    <div class="headerBottom">
      <ul>
        <li @click="activeShow(index)" v-for="(item,index) in list"
            :key="index" :class="activeClass == index ? 'active':''">
          <span>{{item[index + 1]}}</span>
        </li>
      </ul>
      <div class="icon">
        <i class="iconfont icon-down"  @click.prevent="maskShow"></i>
      </div>
    </div>
    <div class="mask" v-show="showMask">
      <div class="maskList">
        <div class="maskTitle">
          <p>全部频道</p>
          <i class="iconfont icon-shangjiantou" @click.prevent="maskShow"></i>
        </div>
        <ul class="maskContent">
          <li>
            <a href="javascript:;">推荐</a>
          </li>
          <li v-for="(item,index) in home.kingKongModule.kingKongList">
            <a href="javascript:;">{{item.text}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        showMask: false,
        activeClass: 0,
        list:[
          {'1': '推荐'},
          {'2': '居家生活'},
          {'3': '服饰鞋包'},
          {'4': '美食酒水'},
          {'5': '个护清洁'},
          {'6': '限时购'},
          {'7': '母婴亲子'},
          {'8': '运动旅行'},
          {'9': '数码家电'},
        ]
      }
    },

   methods:{
     toLogin(){
       this.$router.replace('/personal')
     },
     maskShow(){
       this.showMask = !this.showMask
     },

     activeShow(index){
       this.activeClass = index
     }
   },
    computed: {
      ...mapState(['home'])
    },
    mounted(){
     this.$nextTick(() => {
       new BScroll('.headerBottom',{
         startX: 0,
         click: false,
         scrollX: true,
         // 忽略竖直方向的滚动
         scrollY: false,
         eventPassthrough: "vertical"
       })
     })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #headerWrap
    position fixed
    left 0
    width 100%
    height 148px
    z-index 100
    background-color #FFF
    .headerTop
      height 80px
      display flex
      flex 1
      align-items center
      margin-top 5px
      .logo
        width 138px
        height 40px
        margin-left 25px
        img
          width 138pxv
          height 40px
      input
        width 466px
        height 56px
        background-color #eee
        border-radius 8px
        outline none
        margin 0 10px
      button
        height 40px
        color #b4282d
        font-size 24px
        border 1px solid #b4282d
        border-radius 10px
        background-color #FFF
        outline none

    .headerBottom
      width 100%
      height 60px
      overflow hidden
      display flex
      ul
        height 60px
        display flex
        align-items center
        padding-right 100px
        li
          height 100%
          white-space nowrap
          line-height 70px
          text-align center
          font-size 30px
          margin 0px 20px
          &.active
            color #b4282d
      .icon
        position absolute
        right 0
        width 100px
        height 60px
        line-height 60px
        background-color #fff
        text-align center
        z-index 10
        i
          font-size 30px

    .mask
      position relative
      width 750px
      height 1434px
      background-color rgba(0,0,0,.6)
      .maskList
        position absolute
        left 0
        top -60px
        width 100%
        height 368px
        background-color #FFF
        z-index 11
        .maskTitle
          width 100%
          height 60px
          line-height 60px
          margin-bottom 20px
          p
            display inline-block
            font-size 30px
            margin-left 30px
          i
            float right
            font-size 30px
            width 100px
            height 60px
            text-align center
        .maskContent
          width 100%
          height 288px
          li
            float left
            width 150px
            height 56px
            line-height 56px
            border 1px solid #b4282d
            border-radius 5px
            background-color #fafafa
            margin 0 0 40px 30px
            text-align center

</style>

