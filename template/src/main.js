import '@babel/polyfill'
// import 'mutationobserver-shim'
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'
import "./views"
import router from './router'
import store from './store'

// const SvgIcon = () => import(/* webpackPrefetch: true */ "./icon/Icon.vue")
// Vue.component(
//   'svg-icon', SvgIcon
// )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
