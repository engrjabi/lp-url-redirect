<template>
  <div
    :key="text"
    :class="[
      'animated-link',
      isFooter && 'animated-link--footer',
      isSupport && 'animated-link--support',
      isPrimary && 'animated-link--primary',
    ]"
  >
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
    isFooter: {
      type: Boolean,
      required: false,
    },
    isSupport: {
      type: Boolean,
      required: false,
    },
    isPrimary: {
      type: Boolean,
      required: false,
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
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
  margin: 5px 10px;
  min-width: 50px;
  display: inline-block;
  background-color: #3da679;
  padding: 10px;
  border-radius: 10px;

  &.animated-link--primary {
    width: 100px;
    text-transform: uppercase;
  }

  &.animated-link--footer {
    background-color: transparent;
    color: #34656d;
    border-bottom: 1px solid #c39125;
    padding: 3px;
    border-radius: 2px;
  }

  &.animated-link--support {
    background-color: transparent;
    color: #34656d;
    border: 1px solid #c39125;
    padding: 5px;
  }
}
</style>
