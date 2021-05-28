import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/reset.css'
import '@/element'

import * as filters from './filters' // global filters
import * as directives from './directives' // global directives
// import '@/components' // 导入全局组件

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
