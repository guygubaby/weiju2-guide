import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/style/index.scss'
import { customComponents, vantComponents } from '@/components'

Vue.config.productionTip = false

vantComponents.forEach(component => Vue.use(component))
customComponents.forEach(component => Vue.component(component.name, component))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
