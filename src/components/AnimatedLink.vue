<template>
  <vgl-rotate :text="text" @click="handleClick" :key="text" />
</template>

<script lang="ts">
import Vue from "vue";
import { VglRotate } from "vue-good-links";
import "vue-good-links/dist/vue-good-links.css";

export default Vue.extend({
  components: {
    VglRotate,
  },
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
.vgl-rotate-wrap {
  cursor: pointer;
  margin: 0 20px;
}

.vgl-rotate-wrap .vgl-rotate-original {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  background-color: transparent;
  font-weight: bolder;
  cursor: pointer;
}

.vgl-rotate-wrap .vgl-rotate-bold {
  font-family: "Noto Sans JP", sans-serif;
  background-color: #34656d;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}
</style>
