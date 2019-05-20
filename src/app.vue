<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqHome} from './api'
  export default {
    name: "",
    components:{
      FooterGuide
    }
  }
</script>

<style scoped>

</style>
