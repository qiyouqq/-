<template>
  <div>
    <homeHeader/>
    <div class="content" ref="content">
      <div class="contentC">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
        <ul class="wangyi-grow">
          <li v-for="(policyDesc,index) in home.policyDescList" :key="index">
            <i :class="policyDesc.icon" class="iconfont"></i>
            <span>{{policyDesc.desc}}</span>
          </li>
        </ul>
        <div class="nav-box">
          <ul>
            <li v-for="(kingKong,index) in home.kingKongModule.kingKongList" :key="index">
              <img data-v-b421918c="" :src="kingKong.picUrl">
              <span>{{kingKong.text}}</span>
            </li>
          </ul>
        </div>
        <div class="gift-content">
          <p>-新人专属礼-</p>
          <div class="gift-left">
            <p>新人专享礼包</p>
            <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
          </div>
          <div class="gift-rightTop">
            <div class="text">
              <p>福利社</p>
              <p>今日特价</p>
            </div>
            <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社">
          </div>
          <div class="gift-rightBotm">
            <div class="text">
              <p>新人拼团</p>
              <p>1元起包邮</p>
            </div>
            <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
          </div>
        </div>
        <Split/>
        <div class="manufacturer-container">
          <div class="manufacturer-title">
            <div class="manufacturer-titleC">
              <p>品牌制造商直供</p>
              <div class="more">更多></div>
            </div>
          </div>
          <ul class="manufacturer-content">
            <li>
              <span>海外制造商</span>
              <span>9.9元起</span>
              <span>上新</span>
            </li>
            <li>
              <span>海外制造商</span>
              <span>9.9元起</span>
              <span>上新</span>
            </li>
            <li>
              <span>海外制造商</span>
              <span>9.9元起</span>
              <span>上新</span>
            </li>
            <li>
              <span>海外制造商</span>
              <span>9.9元起</span>
              <span>上新</span>
            </li>
          </ul>
        </div>
        <Split/>
        <div class="popular-container">
          <p class="popular-title">类目热销榜</p>
          <ul class="popular-content">
            <li>
              <span>热销榜</span>
              <i class="line"></i>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png" alt="热销榜">
            </li>
            <li>
              <span>好评榜</span>
              <i class="line"></i>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png" alt="热销榜">
            </li>
          </ul>
          <ul class="popular-bottom">
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/873505d4b94744861ba243e321868530.png?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?" alt="热销榜">
            </li>
            <li>
              <span>居家生活榜</span>
              <img data-v-e1e16cb4="" src="http://yanxuan.nosdn.127.net/82de8fdea1c8bba21b26099612ff5605.png?" alt="热销榜">
            </li>
          </ul>
        </div>
        <Split/>
        <div class="reco-container">
          <div class="reco-title">
            <span>人气推荐</span>
            <span class="more">更多
              <i class="iconfont icon-rightArrow"></i>
            </span>
          </div>
          <div class="reco-content">
            <img data-v-ee43daa8="" src="http://yanxuan.nosdn.127.net/2ff4c3a1227a5f08f917e2318fe720f6.png" alt="好物推荐">
            <div class="info">
              <span>APP特惠</span>
              <p>21s素暖轻磨毛四件套</p>
              <p>厚实粗犷肌理感，越睡越舒适</p>
              <p>￥399</p>
            </div>
          </div>
          <ul class="reco-bottom">
            <li>
              <img src="http://yanxuan.nosdn.127.net/06e5818658707bc182acabe92cae3d34.png" alt="商品图">
              <div class="good-name">
                <span>30包 谷风一木软抽面巾纸囤货装</span>
                <span class="good-price">￥75</span>
              </div>
            </li>
            <li>
              <div class="good-name">
                <img data-v-ee43daa8="" src="http://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png" alt="商品图">
                <span>男士轻薄无缝羽绒服</span>
                <span class="good-price">￥399</span>
              </div>
            </li>
            <li>
              <div class="good-name">
                <img data-v-ee43daa8="" src="http://yanxuan.nosdn.127.net/6b21b6c208d7c4ffd4c74e094014219f.png" alt="商品图">
                <span>真皮毛女童系解雪地靴</span>
                <span class="good-price">￥349</span>
              </div>
            </li>
          </ul>
        </div>
        <Split/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.css'
  import homeHeader from '../../components/homeHeader/homeHeader.vue'
  import Split from '../../components/Spilt/split.vue'



  export default {
    computed:{
      ...mapState(['home'])
    },
    components:{
      homeHeader,
      Split
  },
    mounted(){
      this.$store.dispatch('getHome'),

      this.$nextTick(() => {
        new BScroll(this.$refs.content,{startY: 100,})
      }),

      new Swiper('.swiper-container',{
        loop: true,
        scrollbar: {
          el: '.swiper-container',
        },
        autoplay: {
          delay: 3000,//3秒切换一次
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    padding-top 100px
    width 750px
    height 1334px
    .contentC
      .swiper-container
        height 400px
        width 100%
        .swiper-wrapper
          height 400px
          width 100%
          .swiper-slide
            height 400px
            width 100%
            img
              width 100%
              height 100%

      .wangyi-grow
        width 100%
        height 72px
        display flex
        li
          display flex
          flex 1
          align-items center
          justify-content center
          .iconfont
            width 32px
            height 32px
            line-height 32px
            color #b4282d
            margin-right 10px
            font-size 24px
            text-align center
          span
            font-size 24px
            color #b4282d
      .nav-box
        width 100%
        height 350px
        background-color #eee
        ul
          li
            float left
            width 110px
            height 156px
            margin 10px 20px 9px
            img
              width 100px
              height 110px
            span
              font-size 24px
      .gift-content
        width 100%
        height 500px
        background-color #FFF
        text-align center
        &>p
          width 690px
          height 90px
          line-height 90px
          margin 0 auto
          font-size 32px
        .gift-left
          float left
          width 343px
          height 410px
          background-color #F9E9CF
          margin 0 5px 20px 30px
          p
            display block
            padding-top 30px
            font-size 32px
          img
            margin 20px auto

        .gift-rightTop
          float left
          width 343px
          height 200px
          background-color #FBE2D3
          margin-bottom 10px
          .text
            width 96px
            height 200px
            float left
            margin 0 20px 0 10px
            text-align left

          img
            float left
            width 200px
            height 200px

        .gift-rightBotm
          width 343px
          height 200px
          background-color #FFECC2
          float left
          .text
            width 128px
            height 200px
            float left
            margin-left 10px
            text-align left

          img
            float left
            width 200px
            height 200px

      .manufacturer-container
        width 100%
        height 650px
        background-color #FFF
        .manufacturer-title
          margin 0 25px
          float left
          width 700px
          height 100px
          font-size 30px
          .manufacturer-titleC
            width 100%
            margin 0 auto
            p
              line-height 100px
              float left
            .more
              float right
              line-height 100px
        .manufacturer-content
          float left
          margin-left 25px
          width 700px
          height 530px
          background-color #fff
          :nth-child(1)
            margin 0 5px 5px 0
            background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
          :nth-child(2)
            margin 0 5px 5px 0
            background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
          :nth-child(3)
            margin 0 5px 5px 0
            background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
          :nth-child(4)
            margin 0 5px 5px 0
            background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
          li
            float left
            width 343px
            height 260px
            text-align center
            margin 0 7px 5px 0
            background-size: 100% 100%
            :nth-child(1)
              display block
              font-size 30px
              margin-top 20px
            :nth-child(3)
              width 63px
              height 32px
              line-height 32px
              color #FFF
              text-align center
              border-radius 5px
              margin-left 10px
              background-color #cbb693
      .popular-container
        width 100%
        height 710px
        background-color #FFF
        .popular-title
          width 700px
          height 100px
          margin 0 auto
          font-size 32px
          line-height 100px
          font-weight bold
        .popular-content
          width 700px
          height 210px
          margin 0 auto
          :nth-child(1)
            background-color #F9F3E4
          :nth-child(2)
            background-color #EBEFF6
            span
              margin-bottom: 0.133262rem
              background-color #EBEFF6
          li
            position relative
            width 340px
            height 200px
            float left
            text-align center
            display flex
            margin-right 10px
            span
              display inline-block
              width 100px
              height 200px
              line-height 200px
              margin-left 10px
              font-weight bold
              font-size 30px
            .line
              position absolute
              top 50%
              left 32px
              margin-top 26px
              display block
              width 50px
              height 4px
              background-color black
            img
              width 200px
              height 200px

        .popular-bottom
          width 700px
          height 380px
          margin 0 auto
          li
            float left
            width 165px
            height 180px
            text-align center
            margin 0 10px 10px 0
            background-color #F5F5F5
            img
              height 120px
              width 120px
      .reco-container
        width 750px
        height 800px
        .reco-title
          width 690px
          height 100px
          padding-left  30px
          span
            line-height 100px
            font-size 30px
          .more
            float right
            i
              float right
              font-size 30px
        .reco-content
          width 690px
          height 280px
          margin 0 auto 20px
          img
            float left
            width 280px
            height 280px
          .info
            float left
            text-align left
            margin 79px 30px
            span
              font-size 20px
              border 1px solid #b4282d
              color #b4282d
              padding 0 5px
            :nth-child(2)
              font-size 30px
              margin 5px 0
            :nth-child(3)
              font-size 24px
              margin-bottom  5px
              color #666
            :nth-child(4)
              font-size 30px
              color #b4282d
        .reco-bottom
          width 750px
          height 374px
          li
            float left
            width 216px
            height 100%
            margin-left 20px
            img
              width 216px
              height 216px
            span
              font-size 24px
            .good-price
              color #b4282d
</style>
