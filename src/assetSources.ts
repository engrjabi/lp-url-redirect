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
    type: MansoryItemType.IMAGE,
    link: "/img/clouds1.jpg",
  },
  {
    type: MansoryItemType.VIDEO,
    link:
      "https://web.facebook.com/103547664793647/videos/1181762118934339?mute=0",
  },
  {
    type: MansoryItemType.VIDEO,
    link:
      "https://web.facebook.com/103547664793647/videos/1181762118934339?mute=0",
  },
  {
    type: MansoryItemType.VIDEO,
    link:
      "https://web.facebook.com/103547664793647/videos/1181762118934339?mute=0",
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
    type: MansoryItemType.VIDEO,
    link: "https://fb.watch/5n6tY3EY66/",
  },
  // {
  //   type: MansoryItemType.VIDEO,
  //   link: "https://web.facebook.com/103547664793647/videos/454884619099748",
  // },
  // {
  //   type: MansoryItemType.VIDEO,
  //   link: "https://fb.watch/5n6yUOMXEj/",
  // },
  {
    type: MansoryItemType.VIDEO,
    link: "https://fb.watch/5n6zrtp25L/",
  },
  {
    type: MansoryItemType.VIDEO,
    link: "https://fb.watch/5n6DzslUz1/",
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
