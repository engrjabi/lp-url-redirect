<template>
  <div>
    <div class="header-title">Little Paradise</div>

    <div class="links-container">
      <AnimatedLink text="location" link="joshua" />
      <AnimatedLink text="contact" link="joshua" />
      <AnimatedLink text="page" link="joshua" />
    </div>

    <div
      class="mansory-root"
      v-masonry="'containerId'"
      transition-duration="0.3s"
      item-selector=".item"
      fit-width="true"
      gutter="3"
    >
      <div
        v-masonry-tile
        class="item"
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          v-if="MansoryItemType.IMAGE === item.type"
          :src="item.link"
          class="mansory-image-item"
        />

        <div
          v-else-if="MansoryItemType.VIDEO === item.type"
          class="fb-video"
          :data-href="item.link"
          data-allowfullscreen="true"
          data-width="400"
          :data-autoplay="item.autoplay || false"
          data-lazy="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { assetSources, MansoryItemType } from "@/assetSources";
import AnimatedLink from "@/components/AnimatedLink.vue";
import shuffle from "lodash/shuffle";
import debounce from "lodash/debounce";

export default Vue.extend({
  name: "App",
  components: {
    AnimatedLink,
  },
  data: () => {
    return {
      MansoryItemType,
      items: shuffle(assetSources),
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;

    const finished_rendering = function () {
      console.log("finished rendering plugins");
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 1000);
    };

    this.$smoothScroll({
      scrollTo: this.$el, // required if updateHistory is true
    });

    // In your onload handler
    (window as any).FB.Event.subscribe("xfbml.render", finished_rendering);

    setTimeout(() => _this.$redrawVueMasonry("containerId"), 500);

    function getDocHeight() {
      let D = document;
      return Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
      );
    }

    const addMoreItems = () => {
      console.log("aaa");
      console.log(this.items);
      this.items = shuffle(assetSources);
      redrawVueMasonry();
    };

    const redrawVueMasonry = debounce(() => {
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 1000);
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 500);
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 250);
    }, 100);

    const smoothScroll = debounce(() => {
      this.$smoothScroll({
        duration: 300,
        scrollTo: document.querySelector(".header-title"), // required if updateHistory is true
      });
    }, 100);

    const amountScrolled = debounce(() => {
      let winheight =
        window.innerHeight ||
        (document.documentElement || document.body).clientHeight;
      let docheight = getDocHeight();
      let scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      let trackLength = docheight - winheight;
      let pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
      console.log(pctScrolled + "% scrolled");

      return pctScrolled;
    }, 100);

    window.addEventListener(
      "scroll",
      function () {
        const amountScrolledPercent = amountScrolled();

        if (amountScrolledPercent > 75) {
          console.log(amountScrolledPercent);
          console.log("scroll", document.querySelector(".header-title"));
          smoothScroll();
          addMoreItems();
        }

        redrawVueMasonry();
      },
      false
    );
  },
});
</script>

<style lang="scss">
/// https://colorhunt.co/palette/282056
/// Color Palette

.links-container {
  margin-bottom: 30px;
  text-align: center;
}

.header-title {
  font-family: "Cabin Sketch", cursive;
  font-size: 80px;
  margin-bottom: 0;
  text-align: center;
  color: #334443;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.mansory-root {
  margin: 0 auto;
}

.mansory-image-item {
  max-width: 400px;
}

.mansory-root .fb-video {
  margin-bottom: 3px;
}
</style>
