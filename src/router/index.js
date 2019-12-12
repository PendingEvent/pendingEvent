import Vue from 'vue'
import Router from 'vue-router'
import "../assets/global.css"


import Head from '@/components/Head'
import item from '@/components/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'name',
      component:item
    }
  ]
})
