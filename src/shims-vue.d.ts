/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "public-google-sheets-parser";
declare module "vue-masonry/src/masonry-vue3.plugin";
