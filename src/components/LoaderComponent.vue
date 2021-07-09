<template>
  <div
    v-if="!removeLoader"
    :class="['loader', hideLoader && 'loader--disable']"
  >
    <ClimbingBoxLoader
      class="loader-animation"
      loading
      color="#334443"
      :size="15"
      sizeUnit="px"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ClimbingBoxLoader } from "@saeris/vue-spinners";

export default Vue.extend({
  components: {
    ClimbingBoxLoader,
  },
  props: {
    hideLoader: {
      type: Boolean,
      default: false,
    },
    removeLoader: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
/// https://colorhunt.co/palette/282056
/// Color

.loader {
  width: 100vw;
  height: 100vh;
  background: white;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: all 300ms ease-in-out;
}

.loader--disable {
  opacity: 0;
}
</style>
