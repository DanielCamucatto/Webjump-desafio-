import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Category from './views/Category'
import shoes from './views/pages/shoes'
import pants from './views/pages/pants'
import shirt from './views/pages/shirt'
Vue.use(VueRouter); 

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      name: 'home',
      path: '/',
      component: Home, 
    },
    {
      name:'category', 
      path:'/categoria', 
      component: Category,
    },
    {
      name: 'sapatos',
      path:'/sapatos',
      component: shoes
    },
    {
      name: 'calcas', 
      path: '/calcas', 
      component: pants
    },
    {
      name: 'camisetas', 
      path: '/camisetas',
      component: shirt
    }
  ]
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
  template: '<App/>',
  components: {App}
}).$mount('#app')
