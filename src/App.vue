<template>
  <div>
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
          data-autoplay="true"
          data-lazy="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

enum MansoryItemType {
  IMAGE = "image",
  VIDEO = "video",
}

export default defineComponent({
  name: "App",
  data: () => {
    return {
      MansoryItemType,
      items: [
        {
          type: MansoryItemType.IMAGE,
          link: "/img/clouds1.jpg",
        },
        {
          type: MansoryItemType.VIDEO,
          link:
            "https://web.facebook.com/103547664793647/videos/1181762118934339?mute=0",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/cup view 2.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/house.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/falls1.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/sunset1.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/clouds2.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/cup view.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/sunset2.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/horizon.jpg",
        },
        {
          type: MansoryItemType.IMAGE,
          link: "/img/sky.jpg",
        },
      ],
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;

    const finished_rendering = function () {
      console.log("finished rendering plugins");
      setTimeout(() => _this.$redrawVueMasonry("containerId"), 1000);
    };

    // In your onload handler
    (window as any).FB.Event.subscribe("xfbml.render", finished_rendering);

    setTimeout(() => _this.$redrawVueMasonry("containerId"), 500);
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

.mansory-image-item {
  max-width: 400px;
}

.mansory-root .fb-video {
  margin-bottom: 3px;
}
</style>
