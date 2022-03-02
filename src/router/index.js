import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import Page404 from '@/components/erro404/index.vue'
import Page401 from '@/components/erro401/index.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect:'/Login',   
    name: 'Login',
    component: Login,
      meta:{
      title: 'Login',
    }
    
  },  
  
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      title: 'Login',
    }
    
  },
  {
    path: '/Home',
    name: 'HomePageErro',
    component: Page401,
    meta:{
      title: 'Home',
    }


  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
     meta:{
      title: 'Login',
    }
       
  },
  {
    path: '*',    
    name: '404',
    component: Page404,
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
