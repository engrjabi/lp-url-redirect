<template>
  <div>
    <div class="header-title">
      <router-link to="/">
        <img class="header-title__logo-image" :src="logo" alt="logo" />
      </router-link>
    </div>

    <div class="links-container">
      <div class="body-text">book now thru</div>

      <AnimatedLink is-primary text="messenger" link="/contact" />
      <span class="body-text">OR</span>
      <AnimatedLink is-primary text="airbnb" link="/airbnb" />

      <div></div>

      <AnimatedLink is-support text="available dates" link="/calendar" />
      <AnimatedLink is-support text="show location" link="/location" />
      <div />

      <AnimatedLink is-footer text="fb page" link="/lp" />
      <AnimatedLink is-footer text="pics" link="/" />
      <AnimatedLink is-footer text="more info" link="/more-info" />
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

.body-text {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  font-weight: bolder;
  opacity: 0.6;
}
</style>
