<template>
  <div>
    <div class="header-title">
      <router-link to="/">Little Paradise</router-link>
    </div>

    <div class="links-container">
      <AnimatedLink text="location" link="/location" />
      <AnimatedLink text="contact" link="/contact" />
      <AnimatedLink text="community" link="/lp" />
    </div>

    <div class="more-info__body">
      <div class="more-info__sub-title">House Rules</div>
      <img src="/img/house-rules.png" />

      <div class="more-info__sub-title">Amenities</div>
      <img src="/img/guest-access.png" />
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

.more-info__sub-title {
  font-family: "Noto Sans JP", sans-serif;
  color: #34656d;
  background-color: transparent;
  font-weight: bolder;
  margin: 10px 20px;
  font-size: 24px;
  text-align: center;
}

.more-info__body {
  img {
    margin: 0 auto;
    display: block;
    max-width: 100vw;
  }
}

body {
  margin: 0;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

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

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
