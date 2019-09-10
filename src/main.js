import Vue from 'vue'
import Test from './components/Test.vue'
import Address from './components/address.vue'

Vue.config.productionTip = false
Vue.component('test-address', Address)

new Vue({
  render: h => h(Test)
}).$mount('#app')
