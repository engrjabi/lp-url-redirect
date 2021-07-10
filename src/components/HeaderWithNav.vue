<template>
  <div>
    <div class="header-title">
      <router-link to="/">Little Paradise</router-link>
    </div>

    <div class="links-container">
      <AnimatedLink text="location" link="/location" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="contact" link="/contact" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="fb" link="/lp" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="calendar" link="/calendar" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="airbnb" link="/airbnb" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AnimatedLink from "@/components/AnimatedLink.vue";

export default Vue.extend({
  components: {
    AnimatedLink,
  },
  data: () => {
    return {};
  },
});
</script>

<style lang="scss">
/// https://colorhunt.co/palette/282056
/// Color

.links-container {
  margin-bottom: 30px;
  text-align: center;
}

.header-title {
  font-family: "Cabin Sketch", cursive;
  font-size: 80px;
  margin-bottom: 0;
  text-align: center;

  a {
    color: #334443 !important;
    text-decoration: none !important;
  }
}

.link-divider {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  font-weight: bolder;
}
</style>
