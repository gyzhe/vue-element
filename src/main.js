import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'
//挂载到原型属性上
Vue.prototype.$axios=axios
//配置请求根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/' //设置统一路径前缀
//请求拦截添加token,保障拥有获取数据的权限
axios.interceptors.response.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
}

)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
