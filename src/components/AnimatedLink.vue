<template>
  <div :key="text" class="animated-link">
    <div @click="handleClick">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      window.location.replace(this.link);
    },
  },
});
</script>

<style lang="scss">
.animated-link {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  background-color: transparent;
  font-weight: bolder;
  cursor: pointer;
  margin: 0 3px;
  display: inline-block;
}
</style>
