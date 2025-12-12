// Data for each type with title and images
const data = {
  "brand-campaigns": {
    title: "Brand Campaigns",
    titleColor: "white",
    images: [
      "/brand1.png",
      "/brand2.png",
      "/brand3.png",
      "/brand4.png",
      "/brand5.png",
      "/brand6.png",
    ]
  },
  "ecommerce": {
    title: "Ecommerce",
    // titleColor: "white",
    images: [
      "/ecomere.jpg",
      "/ecommerce2.png",
      "/ecommerce3.png",
      "/ecommerce4.png",
      "/ecommerce5.png",
      "/ecommerce6.png",
    ]
  },
  "fashion": {
    title: "Fashion",
    images: [
      "/fashion1.png",
      "/fashion2.png",
      "/fashion3.png",
      "/fashion4.png",
      "/fashion5.png",
      "/fashion6.png",
    ]
  },
  "food-and-drink": {
    title: "Food and Drink",
    titleColor: "white",
    images: [
      "/fab1.png",
      "/fab2.png",
      "/fab3.png",
      "/fab4.png",
      "/fab5.png",
      "/fab6.png",
    ]
  },
  "jewellery": {
    title: "Jewellery",
    images: [
      "/jewellery1.png",
      "/jewellery2.png",
      "/jewellery3.png",
      "/jewellery4.png",
      "/jewellery5.png",
      "/jewellery6.png",
    ]
  },
  "home": {
    title: "Jewellery",
    images: [
      "/jewellery1.png",
      "/ecommerce4.png",
      "/fab1.png",
      "/brand1.png",
      "/fashion1.png",
      "/fab2.png",
    ]
  }
};

export type CategoryType = {
title: string;
images: string[];
titleColor?: string;
};


export type CategoriesMap = {
[key: string]: CategoryType;
};


export default data as CategoriesMap;