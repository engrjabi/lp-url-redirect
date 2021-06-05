<template>
  <div class="description-item__container">
    <span class="description-item__label">
      <slot name="label"></slot>
    </span>
    <span class="description-item__value">
      <slot name="value"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
.description-item__label {
  opacity: 0.9;
  font-size: 15px;
}

.description-item__value {
  font-size: 18px;
  font-weight: bolder;
}

.description-item__container {
  margin: 10px 0;
}
</style>
