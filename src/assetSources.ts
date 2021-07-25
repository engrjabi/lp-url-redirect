import shuffle from "lodash/shuffle";

export enum MansoryItemType {
  IMAGE = "image",
  VIDEO = "video",
}

const moreImageArr = [];
for (let i = 1; i < 200; i++) {
  moreImageArr.push({
    type: MansoryItemType.IMAGE,
    link: `/img/${i}.jpg`,
  });
}

const moreImageArrShuffled = shuffle(moreImageArr);
const moreImageArrPart1 = moreImageArrShuffled.slice(0, 10);
const moreImageArrPart2 = moreImageArrShuffled.slice(10);

export const assetSources = [
  ...moreImageArrPart1,
  {
    type: MansoryItemType.VIDEO,
    link: "https://www.youtube.com/embed/vEpJY_MCS1Y",
  },

  {
    type: MansoryItemType.VIDEO,
    link: "https://www.youtube.com/embed/b10YRPynZO0",
  },

  {
    type: MansoryItemType.VIDEO,
    link: "https://www.youtube.com/embed/PPxi6mq1gkA",
  },

  {
    type: MansoryItemType.VIDEO,
    link: "https://www.youtube.com/embed/L6qMjRTl2xU",
  },
  {
    type: MansoryItemType.VIDEO,
    link: "https://www.youtube.com/embed/6n80OI8lffA",
  },
  {
    type: MansoryItemType.VIDEO,
    link: "https://www.youtube.com/embed/L0-EmVbvDi0",
  },
  ...moreImageArrPart2,
];
