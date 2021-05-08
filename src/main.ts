// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser";

const path = localStorage.getItem("path");
console.log("path", path);

if (path) {
  localStorage.removeItem("path");

  const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";
  const parser = new PublicGoogleSheetsParser();

  parser.parse(spreadsheetId).then((items: any) => {
    if (items !== null && items.length > 0) {
      const urlIndex = items.findIndex((item: any) => {
        return item.path === path;
      });

      if (urlIndex !== -1) {
        window.location.replace(items[urlIndex].link);
        return;
      }
    }
  });
}
