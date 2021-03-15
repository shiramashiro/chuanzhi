<template>
  <div class="shipping-wrapper" @click="$emit('choose', currentActiveIndex)">
    <div class="shipping-header">
      {{ address.acceptedName }}
    </div>
    <div class="shipping-body">
      {{ address.acceptedDetails }} {{ address.phone }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      required: true
    },
    currentActiveIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.shipping-wrapper {
  word-break: break-all;
  width: 237px !important;
  height: 105px !important;
  padding: 15px;
  border: 5px dashed #666;
  font-size: 16px;
  transition: 0.2s;
  border-radius: 4px;

  .shipping-header {
    padding: 0 0 5px 0;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 5px;
  }
}

.shipping-wrapper:hover {
  cursor: pointer;
  transition: 0.2s;
  border: 5px dashed rgb(11, 162, 154);
}
</style>
