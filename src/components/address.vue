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
