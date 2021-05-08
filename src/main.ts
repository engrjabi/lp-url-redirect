// @ts-ignore
import PublicGoogleSheetsParser from "public-google-sheets-parser";

const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";
const parser = new PublicGoogleSheetsParser();

parser.parse(spreadsheetId).then((items: any) => {
  const pathname = window.location.pathname.replace("/", "");

  if (items !== null && items.length > 0) {
    const urlIndex = items.findIndex((item: any) => {
      return item.path === pathname;
    });

    if (urlIndex !== -1) {
      window.location.replace(items[urlIndex].link);
      return;
    }
  }
});
