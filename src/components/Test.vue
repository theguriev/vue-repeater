<template>
  <div class="test">
    {{ fields }}
    <repeater v-model="fields"></repeater>
  </div>
</template>

<script>
import Repeater from './repeater'

export default {
  components: {
    'repeater': Repeater
  },
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

<style>
.test{
  width: 900px;
  margin: 200px auto 0 auto;
}
</style>
