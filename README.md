# vue-repeater

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/gcofficial/vue-repeater/master/LICENSE)

The VueJS repeater component allows you to create a set of sub components which can be repeated again and again whilst editing content!

## Install
`yarn add vue-repeater`
or
`npm install --save vue-repeater`

## Usage
### Basic example
```javascript
<script>
import Repeater from './repeater'

export default {
  components: {
    'repeater': Repeater
  },
  data() {
    return {
      fields: [
        {
          name: 'test-address',
          value: {}
        }
      ]
    }
  }
};
</script>

<template>
    <div>
      Here will be vue-repeater
      <repeater v-model="fields"></repeater>
    </div>
</template>
```