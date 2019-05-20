import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home'
import Classification from '../pages/Classification/classification.vue'
import General from '../pages/General/general.vue'
import Personal from '../pages/Personal/personal.vue'
import Shopping from '../pages/Shopping/shopping.vue'

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home',
          component:Home,
          meta:{
            showFooter:true
          }
        }
      ]
    },
    {
      path:'/classification',
      component:Classification,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/general',
      component:General,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/shopping',
      component:Shopping,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect: '/home'
    }
  ]
})
