<template>
  <div v-on:click.stop="" class="repeater" ref="repeater">
    <repeater-drop-zone
      v-for="(field, index) in pFields"
      v-on:drop="move($event.dataTransfer.getData('index'), index)"
      v-on:dragEnter="entered = index"
      :class="{
        entered: entered === index,
      }"
      :key="field.name + index"
    >
      <repeater-block
        v-on:dragStart="$event.dataTransfer.setData('index', index)"
        v-on:dragEnd="dragEnd"
        v-on:add="add(index + 1, field)"
        v-on:remove="remove(index)"
        v-on:duplicate="duplicate(index, field)"
        v-on:up="move(index, index - 1)"
        v-on:down="move(index, index + 1)"
        v-on:click="activate(index)"
        :class="{
          active: field.active,
        }"
        :isFirst="index === 0"
        :isLast="index === pFields.length - 1"
      >
        <component
          :is="field.name"
          v-model="field.value"
        ></component>
      </repeater-block>
    </repeater-drop-zone>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import RepeaterBlock from "./repeater-block";
import RepeaterDropZone from "./repeater-drop-zone";

export default {
  name: "repeater",
  components: {
    "repeater-block": RepeaterBlock,
    "repeater-drop-zone": RepeaterDropZone,
  },
  model: {
    prop: "fields",
    event: "change",
  },
  props: ["fields"],
  mounted() {
    document.body.addEventListener("click", this.clickOutside);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.clickOutside);
  },
  data() {
    return {
      pFields: this.fields.map((el) => ({
        ...el,
        /* specify a default value to be used when adding a new slide */
        defaultValue: cloneDeep(el.defaultValue),
      })),
      entered: -1,
    };
  },
  methods: {
    clickOutside(event) {
      this.deactivate();
    },
    setFields(newFields) {
      this.pFields = newFields;
      this.$emit("change", this.pFields);
    },
    add(index, field) {
      const newFields = cloneDeep(this.pFields);
      const newField = cloneDeep(field);
      // set the value of the new slide as the default value
      newField.value = newField.defaultValue;
      newField.active = false;
      newFields.splice(index, 0, newField);
      this.setFields(newFields);
    },
    remove(index) {
      const newFields = cloneDeep(this.pFields);
      newFields.splice(index, 1);
      this.setFields(newFields);
    },
    duplicate(index, field) {
      const newFields = cloneDeep(this.pFields);
      const newField = cloneDeep(field);
      newField.active = false;
      newFields.splice(index, 0, newField);
      this.setFields(newFields);
    },
    move(from, to) {
      from = parseInt(from, 10) || 0;
      const newFields = cloneDeep(this.pFields);
      let el = newFields.splice(from, 1);
      newFields.splice(to, 0, el[0]);
      this.setFields(newFields);
      this.entered = -1;
    },
    deactivate() {
      const newFields = cloneDeep(this.pFields).map((el) => ({
        ...el,
        active: false,
      }));
      this.setFields(newFields);
    },
    activate(index) {
      this.deactivate();
      const newFields = cloneDeep(this.pFields);
      newFields[index].active = true;
      this.setFields(newFields);
    },
    dragEnd($event) {
      const { y } = $event;
      const { bottom } = this.$refs.repeater.getBoundingClientRect();
      const from = $event.dataTransfer.getData("index");
      const to = this.pFields.length - 1;
      if (y > bottom) {
        this.move(from, to);
      }
    },
  },
};
</script>

<style>
:root {
  /* Colors */
  --def-primary: #409eff;
  --def-success: #67c23a;
  --def-warning: #e6a23c;
  --def-danger: #f56c6c;
  --def-info: #909399;
  --def-text-primary: #303133;
  --def-text-regular: #555d66;
  --def-text-secondary: #909399;
  --def-text-placeholder: #c0c4cc;
  --def-border-base: #dcdfe6;
  --def-border-light: #e4e7ed;
  --def-border-extra-light: #f2f6fc;
  --def-white: #ffffff;
  --def-black: #000000;
  --def-background-base: #f5f7fa;
}
</style>
