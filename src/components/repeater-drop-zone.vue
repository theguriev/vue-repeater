<template>
  <div
    v-on:dragover.prevent=""
    v-on:drop="$emit('drop', $event)"
    v-on:dragenter="$emit('dragEnter', $event)"
    class="repeater-drop-zone">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'repeater-drop-zone'
}
</script>

<style scoped lang="scss">
.entered{
  box-shadow: inset 0px 3px 0px 0px var(--primary, var( --def-primary));
}

.repeater-drop-zone{
  padding-top: 8px;
}
</style>
