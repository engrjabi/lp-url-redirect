<template>
  <div>
    <div class="header-title">
      <router-link to="/">
        <img class="header-title__logo-image" :src="logo" alt="logo" />
      </router-link>
    </div>

    <div class="links-container">
      <AnimatedLink text="location" link="/location" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="contact" link="/contact" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="fb" link="/lp" />

      <div />

      <AnimatedLink text="calendar" link="/calendar" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="airbnb" link="/airbnb" />
      <span class="link-divider"> | </span>

      <AnimatedLink text="house rules" link="/more-info" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AnimatedLink from "@/components/AnimatedLink.vue";
import logo from "../assets/logo_with_label.svg";

export default Vue.extend({
  components: {
    AnimatedLink,
  },
  data: () => {
    return {
      logo,
    };
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

.header-title__logo-image {
  margin: -100px 0 -150px 0;

  @media (max-width: 399px) {
    margin: -50px 0 -100px 0;
  }

  max-width: 100vw;
}

.link-divider {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  font-weight: bolder;
}
</style>
