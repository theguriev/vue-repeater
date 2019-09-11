# vue-repeater

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/LICENSE)
[![npm version](https://badge.fury.io/js/vue-repeater.svg)](https://badge.fury.io/js/vue-repeater)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f018779-6609-4cde-b613-a2819b60e320/deploy-status)](https://app.netlify.com/sites/vue-repeater/deploys)

The VueJS repeater component allows you to create a set of sub components which can be repeated again and again whilst editing content!

[Demo](https://vue-repeater.netlify.com/)

## Install
`yarn add vue-repeater`
or
`npm install --save vue-repeater`

## How it works

### Start
![Start](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/gifs/start.gif)

### Reordering
![Reordering](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/gifs/reordering.gif)

### Add
![Add](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/gifs/add.gif)

### Remove
![Remove](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/gifs/remove.gif)

### Duplicate
![Duplicate](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/gifs/duplicate.gif)

## Usage
### Basic example

**./main.js** - entry point
```javascript
import Vue from 'vue'
import App from './App.vue'

import VueRepeater from 'vue-repeater'
import 'vue-repeater/dist/vue-repeater.css'
import address from './components/address'

Vue.config.productionTip = false
Vue.component('vue-repeater', VueRepeater)
Vue.component('test-address', address)

new Vue({
  render: h => h(App)
}).$mount('#app')

```

**./components/address.js** - Component inside repeater
```javascript
<template>
    <div class="address">
        <div class="row">
          <label>Street</label>
          <input v-model="localAddress.street">
        </div>
        <div class="row">
          <label>City</label>
          <input v-model="localAddress.city">
        </div>
        <div class="row">
          <label>Zip</label>
          <input v-model="localAddress.zip">
        </div>
    </div>
</template>
<script>
export default {
  name: 'test-address',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    localAddress: {
      get () { return this.value },
      set (localAddress) { this.$emit('input', localAddress) }
    }
  }
}
</script>

<style scoped lang="scss">
.address{
  display: flex;
  flex-direction: column;
}

.row{
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label{
  text-align: left;
  margin-bottom: 4px;
}

input{
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--def-border-base);
}
</style>

```



**./App.vue** - application component
```javascript
<template>
  <div id="app">
    {{ fields }}
    <vue-repeater v-model="fields"></vue-repeater>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      fields: [
        {
          name: 'test-address',
          value: {}
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 900px;
  margin: 100px auto;
}
</style>
```

## Contacts

Telegram: [https://t.me/therealguriev](@therealguriev)

Skype: live:gurev