<template>
  <div class="address">
    <div class="row">
      <label>Street</label>
      <input v-model="localAddress.street" />
    </div>
    <div class="row">
      <label>City</label>
      <input v-model="localAddress.city" />
    </div>
    <div class="row">
      <label>Zip</label>
      <input v-model="localAddress.zip" />
    </div>
    <div class="row">
      <label>Img</label>
      <div class="file-input-group">
        <label class="overlay-label">Upload Image</label>
        <input type="file" @change="onFileChange" />
      </div>
      <div
        v-if="localAddress.img"
        style="text-align: start; margin-top: 5px; color: #3c3c3c"
      >
        <span>
          File Uploaded:
          {{
            localAddress.img.length > 75
              ? localAddress.img.slice(0, 75) + "..."
              : localAddress.img
          }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "test-address",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    let fileInputs = document.querySelectorAll(".file-input-group");
    fileInputs.forEach((inputGroup, index) => {
      inputGroup
        .querySelector("label")
        .setAttribute("for", `img-upload-${index}`);
      inputGroup
        .querySelector("input")
        .setAttribute("id", `img-upload-${index}`);
    });
  },
  computed: {
    localAddress: {
      get() {
        return this.value;
      },
      set(localAddress) {
        this.$emit("input", localAddress);
      },
    },
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.localAddress = { ...vm.localAddress, img: e.target.result };
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped lang="scss">
.address {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.file-input-group {
  position: relative;
}

label {
  text-align: left;
  margin-bottom: 4px;

  &.overlay-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    line-height: 2;
    padding: 0 5px;
    border-radius: 4px;
    border: 1px solid var(--def-border-base);
    cursor: pointer;

    &:hover {
      background: rgb(238, 238, 238);
    }
  }
}

input {
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--def-border-base);
}
</style>
