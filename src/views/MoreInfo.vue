<template>
  <div>
    <HeaderWithNav />

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
import HeaderWithNav from "@/components/HeaderWithNav.vue";

export default Vue.extend({
  components: {
    HeaderWithNav,
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
</style>
