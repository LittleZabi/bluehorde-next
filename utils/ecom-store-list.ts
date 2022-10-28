export const EcomStore = [
  {
    name: "amazon",
    logo: "/media/assets/amazon.png",
    locations: [
      {
        loc: false,
        code: false,
        search: "https://www.amazon.com/s?k=",
      },
      {
        loc: "china",
        code: "cn",
        search: "https://www.amazon.cn/s?k=",
      },
      {
        loc: "germany",
        code: "de",
        search: "https://www.amazon.de/s?k=",
      },
      {
        loc: "india",
        code: "in",
        search: "https://www.amazon.in/s?k=",
      },
      {
        loc: "united arab emirates",
        code: "ae",
        search: "https://www.amazon.ae/s?k=",
      },
    ],
  },
  {
    name: "alibaba",
    logo: "/media/assets/alibaba.png",
    locations: [
      {
        loc: false,
        code: false,
        search:
          "https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&tab=all&SearchText=",
      },
      {
        loc: "germany",
        code: "de",
        search:
          "https://german.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&tab=all&SearchText=",
      },
    ],
  },
  {
    name: "ebay",
    logo: "/media/assets/ebay.png",
    locations: [
      {
        loc: false,
        code: false,
        search: "https://www.ebay.com/sch/i.html?&_nkw=",
      },
    ],
  },
  {
    name: "daraz",
    logo: "/media/assets/daraz.png",
    locations: [
      {
        loc: "pakistan",
        code: "pk",
        search: "https://www.daraz.pk/catalog/?q=",
      },
      {
        loc: "bangladesh",
        code: "bd",
        search: "https://www.daraz.bd/catalog/?q=",
      },
      {
        loc: "sri lanka",
        code: "lk",
        search: "https://www.daraz.lk/catalog/?q=",
      },
      {
        loc: "nepal",
        code: "np",
        search: "https://www.daraz.np/catalog/?q=",
      },
    ],
  },
];
