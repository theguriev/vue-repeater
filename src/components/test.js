import Vue from 'vue'
import Test from './Test.vue'
import Address from './address.vue'

Vue.config.productionTip = false
Vue.component('test-address', Address)

new Vue({
  render: h => h(Test)
}).$mount('#app')
