<template>
  <div>
    <div
      class="mansory-root"
      v-masonry="'containerId'"
      transition-duration="0.3s"
      item-selector=".item"
      fit-width="true"
      gutter="10"
    >
      <div
        v-masonry-tile
        class="item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div
          class="fb-video"
          data-href="https://web.facebook.com/103547664793647/videos/1181762118934339"
          data-allowfullscreen="true"
          data-width="500"
          data-autoplay="true"
          data-lazy="false"
        />

        <img src="/img/house.jpg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;

    const finished_rendering = function () {
      console.log("finished rendering plugins");
      _this.$redrawVueMasonry("containerId");
    };

    // In your onload handler
    (window as any).FB.Event.subscribe("xfbml.render", finished_rendering);

    setTimeout(() => _this.$redrawVueMasonry("containerId"), 300);
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mansory-root {
  margin: 0 auto;
}
</style>
