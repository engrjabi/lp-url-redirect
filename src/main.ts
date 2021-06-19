import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { VueMasonryPlugin } from "vue-masonry";
import VueSmoothScroll from "vue2-smooth-scroll";
import { VueSpinners } from "@saeris/vue-spinners";
import Vue2TouchEvents from "vue2-touch-events";

Vue.config.productionTip = false;

const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";

/// Same root path here vue.config.js
const ghPagePath = "lp-url-redirect";

const path = localStorage.getItem("path");
const vueRouterPaths = ["reservation", "calendar"];

if (path && !vueRouterPaths.some((item) => path.includes(item))) {
  localStorage.removeItem("path");
  const rootPath = path.replace(ghPagePath, "").replace("/", "");
  const parser = new PublicGoogleSheetsParser();

  parser.parse(spreadsheetId).then((items: any) => {
    if (items !== null && items.length > 0) {
      const urlIndex = items.findIndex((item: any) => {
        return item.path === rootPath;
      });

      if (urlIndex !== -1) {
        window.location.replace(items[urlIndex].link);
        return;
      }
    }
  });
} else {
  Vue.use(VueMasonryPlugin);
  Vue.use(VueSmoothScroll);
  Vue.use(VueSpinners);
  Vue.use(Vue2TouchEvents);

  const app = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");

  setTimeout(() => {
    if (path && vueRouterPaths.some((item) => path.includes(item))) {
      localStorage.removeItem("path");
      app.$router.push(path);
    }
  }, 1000);
}
