import PublicGoogleSheetsParser from "public-google-sheets-parser";
import { createApp } from "vue";
import { VueMasonryPlugin } from "vue-masonry/src/masonry-vue3.plugin";
import App from "./App.vue";
import mitt from "mitt";

const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";

/// Same root path here vue.config.js
const ghPagePath = "lp-url-redirect";

const path = localStorage.getItem("path");

if (path) {
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
  const emitter = mitt();
  const app = createApp(App);
  app.config.globalProperties.emitter = emitter;
  app.use(VueMasonryPlugin).mount("#app");
}
