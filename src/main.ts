// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser";

const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";
/// Same root path here vue.config.js
const ghPagePath = "lp-url-redirect";

const path = localStorage.getItem("path");
console.log("path", path);

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
}
