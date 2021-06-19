<template>
  <div class="calendar-view__container">
    <calendar-view
      :show-date="showDate"
      class="theme-default calendar-view"
      :items="items"
    >
      <template #header="{ headerProps }">
        <calendar-view-header
          :header-props="headerProps"
          @input="setShowDate"
        />
      </template>
    </calendar-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
require("vue-simple-calendar/static/css/default.css");

export default Vue.extend({
  data: function () {
    return {
      showDate: new Date(),
      items: [],
    };
  },
  components: {
    CalendarView,
    CalendarViewHeader,
  },
  methods: {
    setShowDate(d: Date) {
      this.showDate = d;
    },
    pad(n: string, width: number, z = "0") {
      z = z || "0";
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join(z) + n;
    },
  },
  mounted() {
    const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";
    const parser = new PublicGoogleSheetsParser();

    parser
      .parse(spreadsheetId, "calendar")
      .then((items: any, index: number) => {
        this.items = items.map((item: any) => {
          if (item && item.Start) {
            const startDate = item.Start.replace("Date(", "")
              .replace(")", "")
              .split(",");
            const result = new Date(startDate[0], startDate[1], startDate[2]);
            const time = `${this.pad(item.Time[0], 2)}:${this.pad(
              item.Time[1],
              2
            )}`;
            const durationParsed = parseInt(
              item.Duration.replace("Day", "").replace("Days", "")
            );

            return {
              id: index,
              startDate: result.setDate(result.getDate()),
              endDate: item.Duration.includes("Day Tour")
                ? result.setDate(result.getDate())
                : result.setDate(result.getDate() + durationParsed),
              title: `${item.Duration} - ${time}`,
            };
          }
        });
      });
  },
});
</script>

<style lang="scss">
.calendar-view {
  height: 100vh;
  min-width: 900px;

  .previousYear {
    display: none;
  }

  .nextYear {
    display: none;
  }
}

.calendar-view__container {
  overflow-y: hidden;
  font-family: "Noto Sans JP", sans-serif;
}
</style>
