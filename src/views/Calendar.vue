<template>
  <div>
    <LoaderComponent :removeLoader="removeLoader" :hideLoader="hideLoader" />
    <HeaderWithNav />

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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import LoaderComponent from "@/components/LoaderComponent.vue";
import HeaderWithNav from "@/components/HeaderWithNav.vue";
require("vue-simple-calendar/static/css/default.css");

export default Vue.extend({
  data: function () {
    return {
      showDate: new Date(),
      items: [],
      hideLoader: false,
      removeLoader: false,
    };
  },
  components: {
    CalendarView,
    CalendarViewHeader,
    LoaderComponent,
    HeaderWithNav,
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
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;
    const spreadsheetId = "1Qdl6oePPqalgQS_XZ8voAkRuHH1bwSXtUhBDANsS7Cs";
    const parser = new PublicGoogleSheetsParser();

    parser
      .parse(spreadsheetId, "calendar")
      .then((items: any, index: number) => {
        this.items = items.map((item: any) => {
          // Done parsing spreadsheet remove loader
          setTimeout(() => {
            _this.hideLoader = true;
            setTimeout(() => {
              _this.removeLoader = true;
            }, 300);
          }, 500);

          if (item && item.Start) {
            const startDate = item.Start.replace("Date(", "")
              .replace(")", "")
              .split(",");
            const result = new Date(startDate[0], startDate[1], startDate[2]);

            const timeParsed = item.Time.replace("Date(", "")
              .replace(")", "")
              .split(",");

            const time = `${this.pad(timeParsed[3], 2)}:${this.pad(
              timeParsed[4],
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
  // Override .cv-wrapper
  height: 100vh !important;
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

  .cv-header button {
    background-color: #e1cd933b;
    color: #000;
  }

  .cv-item {
    border-color: #e1cd93;
    background-color: #e1cd93;
  }

  .cv-header,
  .cv-header-day {
    background-color: #fff;
  }

  .cv-day.today {
    background-color: #98c6b352;
  }

  .cv-header .periodLabel {
    font-weight: bolder;
  }
}
</style>
