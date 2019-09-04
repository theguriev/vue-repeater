<template>
  <div
    draggable="true"
    v-on:dragstart="dragStart"
    v-on:dragend="dragEnd"
    v-on:click="$emit('click')"
    class="repeater-block">
    <div class="toolbar">
      <div v-if="icon" class="block-icon">
        <button>
          <i :class="{
            [icon]: true,
          }"></i>
        </button>
      </div>
      <button v-on:click.stop="$emit('add')" title="Add">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6.5V1C6.5 0.854167 6.54688 0.734375 6.64062 0.640625C6.73438 0.546875 6.85417 0.5 7 0.5C7.14583 0.5 7.26562 0.546875 7.35938 0.640625C7.45312 0.734375 7.5 0.854167 7.5 1V6.5H13C13.1458 6.5 13.2656 6.54688 13.3594 6.64062C13.4531 6.73438 13.5 6.85417 13.5 7C13.5 7.14583 13.4531 7.26562 13.3594 7.35938C13.2656 7.45312 13.1458 7.5 13 7.5H7.5V13C7.5 13.1458 7.45312 13.2656 7.35938 13.3594C7.26562 13.4531 7.14583 13.5 7 13.5C6.85417 13.5 6.73438 13.4531 6.64062 13.3594C6.54688 13.2656 6.5 13.1458 6.5 13V7.5H1C0.854167 7.5 0.734375 7.45312 0.640625 7.35938C0.546875 7.26562 0.5 7.14583 0.5 7C0.5 6.85417 0.546875 6.73438 0.640625 6.64062C0.734375 6.54688 0.854167 6.5 1 6.5H6.5Z" fill="black"/>
        </svg>
      </button>
      <button v-on:click.stop="$emit('duplicate')" content="Duplicate">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 12C10.9896 12.5625 10.7917 13.0312 10.4062 13.4062C10.0312 13.7917 9.5625 13.9896 9 14H2C1.4375 13.9896 0.963542 13.7917 0.578125 13.4062C0.203125 13.0312 0.0104167 12.5625 0 12V5C0.0104167 4.4375 0.203125 3.96875 0.578125 3.59375C0.963542 3.20833 1.4375 3.01042 2 3V4C1.71875 4.01042 1.48438 4.10938 1.29688 4.29688C1.10938 4.48438 1.01042 4.71875 1 5V12C1.01042 12.2812 1.10938 12.5156 1.29688 12.7031C1.48438 12.8906 1.71875 12.9896 2 13H9C9.28125 12.9896 9.51562 12.8906 9.70312 12.7031C9.89062 12.5156 9.98958 12.2812 10 12H11ZM5 1C4.71875 1.01042 4.48438 1.10938 4.29688 1.29688C4.10938 1.48438 4.01042 1.71875 4 2V9C4.01042 9.28125 4.10938 9.51562 4.29688 9.70312C4.48438 9.89062 4.71875 9.98958 5 10H12C12.2812 9.98958 12.5156 9.89062 12.7031 9.70312C12.8906 9.51562 12.9896 9.28125 13 9V2C12.9896 1.71875 12.8906 1.48438 12.7031 1.29688C12.5156 1.10938 12.2812 1.01042 12 1H5ZM5 0H12C12.5625 0.0104167 13.0312 0.208333 13.4062 0.59375C13.7917 0.96875 13.9896 1.4375 14 2V9C13.9896 9.5625 13.7917 10.0365 13.4062 10.4219C13.0312 10.7969 12.5625 10.9896 12 11H5C4.4375 10.9896 3.96354 10.7969 3.57812 10.4219C3.20312 10.0365 3.01042 9.5625 3 9V2C3.01042 1.4375 3.20312 0.96875 3.57812 0.59375C3.96354 0.208333 4.4375 0.0104167 5 0Z" fill="black"/>
        </svg>
      </button>
      <button v-on:click.stop="$emit('remove')" title="Remove block">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 3H0.5C0.354167 3 0.234375 2.95312 0.140625 2.85938C0.046875 2.76562 0 2.64583 0 2.5C0 2.35417 0.046875 2.23438 0.140625 2.14062C0.234375 2.04688 0.354167 2 0.5 2H4.5V0.5C4.5 0.354167 4.54688 0.234375 4.64062 0.140625C4.73438 0.046875 4.85417 0 5 0H9C9.14583 0 9.26562 0.046875 9.35938 0.140625C9.45312 0.234375 9.5 0.354167 9.5 0.5V2H13.5C13.6458 2 13.7656 2.04688 13.8594 2.14062C13.9531 2.23438 14 2.35417 14 2.5C14 2.64583 13.9531 2.76562 13.8594 2.85938C13.7656 2.95312 13.6458 3 13.5 3H12.5V13.5C12.5 13.6458 12.4531 13.7656 12.3594 13.8594C12.2656 13.9531 12.1458 14 12 14H2C1.85417 14 1.73438 13.9531 1.64062 13.8594C1.54688 13.7656 1.5 13.6458 1.5 13.5V3ZM8.5 2V1H5.5V2H8.5ZM2.5 13H11.5V3H2.5V13ZM5.5 11C5.35417 11 5.23438 10.9531 5.14062 10.8594C5.04688 10.7656 5 10.6458 5 10.5V5.5C5 5.35417 5.04688 5.23438 5.14062 5.14062C5.23438 5.04688 5.35417 5 5.5 5C5.64583 5 5.76562 5.04688 5.85938 5.14062C5.95312 5.23438 6 5.35417 6 5.5V10.5C6 10.6458 5.95312 10.7656 5.85938 10.8594C5.76562 10.9531 5.64583 11 5.5 11ZM8.5 11C8.35417 11 8.23438 10.9531 8.14062 10.8594C8.04688 10.7656 8 10.6458 8 10.5V5.5C8 5.35417 8.04688 5.23438 8.14062 5.14062C8.23438 5.04688 8.35417 5 8.5 5C8.64583 5 8.76562 5.04688 8.85938 5.14062C8.95312 5.23438 9 5.35417 9 5.5V10.5C9 10.6458 8.95312 10.7656 8.85938 10.8594C8.76562 10.9531 8.64583 11 8.5 11Z" fill="black"/>
        </svg>
      </button>
    </div>
    <div class="navigation">
      <button
        v-if="!isFirst"
        v-on:click.stop="$emit('up')"
        type="button"
        class="nav-button up">
        <svg
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          role="img"
          aria-hidden="true"
          focusable="false">
          <polygon points="9,4.5 3.3,10.1 4.8,11.5 9,7.3 13.2,11.5 14.7,10.1 "></polygon>
        </svg>
      </button>
      <button type="button" class="nav-anchor">
        <svg
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          role="img"
          aria-hidden="true"
          focusable="false">
          <path d="M13,8c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S12.4,8,13,8z M5,6C4.4,6,4,6.4,4,7s0.4,1,1,1s1-0.4,1-1S5.6,6,5,6z M5,10 c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.6,10,5,10z M13,10c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.6,10,13,10z M9,6 C8.4,6,8,6.4,8,7s0.4,1,1,1s1-0.4,1-1S9.6,6,9,6z M9,10c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S9.6,10,9,10z"></path>
        </svg>
      </button>
      <button
        v-if="!isLast"
        v-on:click.stop="$emit('down')"
        type="button"
        class="nav-button down">
        <svg
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          role="img"
          aria-hidden="true"
          focusable="false">
          <polygon points="9,13.5 14.7,7.9 13.2,6.5 9,10.7 4.8,6.5 3.3,7.9 "></polygon>
        </svg>
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'repeater-block',
  props: ['isFirst', 'isLast', 'icon'],
  methods: {
    dragStart ($event) {
      $event.target.style.opacity = 0.5
      this.$emit('dragStart', $event)
    },
    dragEnd ($event) {
      $event.target.style.opacity = 1
      this.$emit('dragEnd', $event)
    }
  }
}
</script>

<style scoped lang="scss">
.repeater-block {
  padding: 16px;
  background: var(--white, var(--def-white));
  position: relative;
  box-sizing: border-box;
  min-height: 100px;
  border-left: 3px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &.active{
    border-color: var(--border-base, var(--def-border-base));

    .navigation{
      display: block;
    }

    .toolbar{
      display: flex;
    }
  }

  .toolbar{
    position: absolute;
    top: -36px;
    left: -3px;
    height: 36px;
    box-sizing: border-box;
    display: none;
    align-items: center;
    padding: 0;
    background: var(--white, var(--def-white));
    overflow: hidden;
    border-left: 3px solid var(--border-light, var(--def-border-light));
    border-right: 1px solid var(--border-light, var(--def-border-light));
    border-top: 1px solid var(--border-light, var(--def-border-light));
    border-bottom: 1px solid var(--border-light, var(--def-border-light));

    .block-icon{
      background: var(--background-base, var(--def-background-base));
      width: 48px;
      height: 36px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;

      button{
        cursor: default;

        &:hover{
          box-shadow: none;
          border: 0;
        }
      }
    }

    button{
      background: transparent;
      border: 1px solid transparent;
      border-radius: 4px;
      display: block;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-size: 16px;
      margin: 0 4px;

      &:hover{
        border: 1px solid var(--border-base, var(--def-border-base));
        box-shadow: 0 1px 1px var(--border-base, var(--def-border-base));
      }
    }
  }

  &:hover{
    border-color: var(--border-base, var(--def-border-base));

    .navigation{
      display: block;
    }

    .toolbar{
      display: flex;
    }
  }

  .navigation {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -29px;
    width: 29px;
    display: none;

    button{
      background: transparent;
      position: absolute;
      left: -2px;
      opacity: 0.5;
      margin-right: 2px;
    }

    button:hover{
      opacity: 1;
    }

    .nav-anchor{
      border: none;
      padding: 2px 5px;
      outline: none;
      cursor: pointer;
      top: 27px;
    }

    .nav-button {
      border: none;
      cursor: pointer;
      padding: 2px 5px;
      border-radius: 4px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;

      &:hover{
        box-shadow: inset 0 0 0 1px var(--border-light, var(--def-border-light)), inset 0 0 0 2px var(--white, var(--def-white)), 0 1px 1px var(--border-base, var(--def-border-base));
      }

      &.up{
        top: 0;
      }

      &.down{
        top: 51px;
      }
    }
  }
}
</style>
