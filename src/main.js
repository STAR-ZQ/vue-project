import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'	//手动变红
import '../node_modules/element-ui/lib/theme-chalk/index.css'	//手动变红

Vue.config.productionTip = false

Vue.use(ElementUI)	//手动变红

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
