<template>
  <div>
    <LoaderComponent :removeLoader="removeLoader" :hideLoader="hideLoader" />

    <HeaderWithNav />

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
import shuffle from "lodash/shuffle";
import debounce from "lodash/debounce";
import LoaderComponent from "@/components/LoaderComponent.vue";
import HeaderWithNav from "@/components/HeaderWithNav.vue";

const imageStepCount = 10;

export default Vue.extend({
  components: {
    HeaderWithNav,
    LoaderComponent,
  },
  data: () => {
    return {
      MansoryItemType,
      items: [...shuffle(assetSources.slice(0, imageStepCount))],
      hideLoader: false,
      removeLoader: false,
      lastLoadedPicture: imageStepCount,
      loadingNewPictures: false,
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
    }, 1500);

    // Debounced Functions
    const redrawVueMasonry = debounce(() => {
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 1000);
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 500);
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 250);
    }, 100);

    const loadNewPictures = debounce(() => {
      const scrollPercent = _this.getScrollPercent();

      if (
        scrollPercent > 79 &&
        !_this.loadingNewPictures &&
        _this.lastLoadedPicture < assetSources.length
      ) {
        _this.loadingNewPictures = true;
        const startCount = _this.lastLoadedPicture;
        const endCount = _this.lastLoadedPicture + imageStepCount;

        _this.items = _this.items.concat(
          shuffle(assetSources.slice(startCount, endCount))
        );
        _this.lastLoadedPicture = endCount;

        setTimeout(() => {
          _this.loadingNewPictures = false;
        }, 2000);
      }
    }, 200);

    setTimeout(() => redrawVueMasonry(), 1500);

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
        loadNewPictures();
        redrawVueMasonry();
      },
      false
    );
  },
  methods: {
    getScrollPercent: () => {
      const h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    },
  },
});
</script>

<style lang="scss">
/// https://colorhunt.co/palette/282056
/// Color

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
