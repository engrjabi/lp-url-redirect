<template>
  <div :key="text" class="animated-link">
    <div @click="handleClick">{{ text }}</div>
    <SyncLoader
      class="animated-link__sync-loader"
      loading
      color="#c6ffc1"
      :size="3"
      sizeUnit="px"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { SyncLoader } from "@saeris/vue-spinners";

export default Vue.extend({
  components: {
    SyncLoader,
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
.animated-link {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  background-color: transparent;
  font-weight: bolder;
  cursor: pointer;
  margin: 0 20px;
  display: inline-block;

  &:hover {
    .animated-link__sync-loader {
      opacity: 1;
    }
  }
}

.animated-link__sync-loader {
  margin-top: -5px;
  opacity: 0;
  transition: all 300ms ease-in-out;
}
</style>
