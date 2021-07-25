<template>
  <div>
    <HeaderWithNav />

    <div class="more-info__body">
      <img :src="amenities" />
      <img :src="optionalAddons" />
      <img :src="thingsToBring" />
      <img :src="houseRules" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderWithNav from "@/components/HeaderWithNav.vue";
import amenities from "../assets/amenities.svg";
import houseRules from "../assets/house_rules.svg";
import optionalAddons from "../assets/optional_addons.svg";
import thingsToBring from "../assets/things_to_bring.svg";

export default Vue.extend({
  components: {
    HeaderWithNav,
  },
  data: () => {
    return {
      optionalAddons,
      houseRules,
      amenities,
      thingsToBring,
    };
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;

  img {
    margin: 10px;
    max-width: 100vw;
    width: 35vw;

    @media (max-width: 399px) {
      width: 90vw;
    }
  }
}
</style>
