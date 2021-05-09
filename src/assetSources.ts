export enum MansoryItemType {
  IMAGE = "image",
  VIDEO = "video",
}

const moreImageArr = [];
for (let i = 1; i < 18; i++) {
  moreImageArr.push({
    type: MansoryItemType.IMAGE,
    link: `/img/${i}.jpg`,
  });
}

export const assetSources = [
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

  {
    type: MansoryItemType.IMAGE,
    link: "/img/clouds1.jpg",
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
  {
    type: MansoryItemType.IMAGE,
    link: "/img/falls2.jpg",
  },
  {
    type: MansoryItemType.IMAGE,
    link: "/img/room.jpg",
  },
  {
    type: MansoryItemType.IMAGE,
    link: "/img/wet.jpg",
  },
].concat(moreImageArr);
