<template>
  <div>
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

    <div class="header-title">Little Paradise</div>

    <div class="links-container">
      <AnimatedLink text="location" link="/location" />
      <AnimatedLink text="contact" link="/contact" />
      <AnimatedLink text="community" link="/lp" />
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
          v-lazy="item.link"
          class="mansory-image-item"
          :alt="item.link"
        />

        <iframe
          v-else-if="MansoryItemType.VIDEO === item.type && removeLoader"
          width="400"
          height="300"
          :src="item.link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
import { ClimbingBoxLoader } from "@saeris/vue-spinners";

export default Vue.extend({
  components: {
    AnimatedLink,
    ClimbingBoxLoader,
  },
  data: () => {
    return {
      MansoryItemType,
      items: [...shuffle(assetSources)],
      hideLoader: false,
      removeLoader: false,
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;

    setTimeout(() => {
      _this.hideLoader = true;
      setTimeout(() => {
        _this.removeLoader = true;
      }, 300);
    }, 2000);

    const redrawVueMasonry = debounce(() => {
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 1000);
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 500);
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 250);
    }, 100);

    setTimeout(() => redrawVueMasonry(), 500);

    setTimeout(() => {
      const headerTitle = document.querySelector(".header-title");

      if (headerTitle !== null) {
        this.$smoothScroll({
          duration: 300,
          scrollTo: headerTitle, // required if updateHistory is true
        });
      }
    }, 1000);

    window.addEventListener(
      "scroll",
      function () {
        redrawVueMasonry();
      },
      false
    );
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

  .item img,
  .item iframe {
    max-width: 400px;

    @media (max-width: 399px) {
      max-width: 95vw;
    }
  }
}

.mansory-root .fb-video {
  margin-bottom: 3px;
}
</style>
