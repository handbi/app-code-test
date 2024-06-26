type Image = {
  path: string;
  resolution: number;
};

type ImageList = {
  list: Image[];
  group: string;
};

export type Product = {
  id: string;
  name: string;
  rating?: number;
  description: string;
  price: number;
  images: ImageList[];
  stock_status: string;
  price_per_uom?: string;
  quantity: {
    unit: string;
    value: number;
  };
  review_count: number;
  points: number;
  promotions: any[];
  brand: {
    name: string;
    id: string;
    slug: string;
    description?: string;
  };
};

export const productList: Product[] = [
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048776_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048776_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048776_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048776_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048776_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048776_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048776_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048776_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048776_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048776_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048776_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048776_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048776_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048776_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048776_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048776_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048776_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048776_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048776_F.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048776_F.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048776_F.jpg",
            resolution: 724,
          },
        ],
        group: "7",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£11.20/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.625,
    review_count: 24,
    description:
      "<ul><li><b>MGO 70 - Recommended if you previously bought 24+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 220,
    promotions: [],
    name: "Manuka Pharm Manuka Honey MGO 70 500g",
    id: "048776",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 55.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048837_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048837_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048837_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048837_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048837_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048837_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048837_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048837_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048837_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048837_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048837_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048837_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048837_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048837_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048837_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "LOWINSTOCK",
    price_per_uom: "£13.00/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.375,
    review_count: 8,
    description:
      "<ul><li><b>MGO 525 - Recommended if you previously bought 15+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 256,
    promotions: [],
    name: "Manuka Lab Manuka Honey MGO 525 500g",
    id: "048837",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 64.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048838_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048838_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048838_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048838_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048838_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048838_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048838_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048838_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048838_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048838_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048838_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048838_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£28.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.7778,
    review_count: 9,
    description:
      "<ul><li><b>MGO 850 - Recommended if you previously bought 20+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 276,
    promotions: [],
    name: "Manuka Lab Manuka Honey MGO 850 250g",
    id: "048838",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 69.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048774_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048774_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048774_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048774_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048774_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048774_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048774_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048774_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048774_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£10.20/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.8696,
    review_count: 23,
    description:
      "<ul><li><b>MGO 55 - Recommended if you previously bought 20+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 200,
    promotions: [
      {
        text: "Penny Sale",
      },
    ],
    name: "Manuka Pharm Manuka Honey MGO 55 500g",
    id: "048774",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 50.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048844_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048844_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048844_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048844_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048844_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048844_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£28.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.65,
    review_count: 20,
    description:
      "<ul><li><b>MGO 850 - Recommended if you previously bought 20+ UMF</b></li><li>100% New Zealand Manuka Honey with a delicious, natural taste.</li><li>Flavourful and versitile. Use as a beneficial ingredient in cooking.</li></ul><p>Pure Gold Manuka Honey is tested by an internationally accredited New Zealand Government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxal, the component that endows Manuka Honey with its unique antibacterial properties. The higher the number, the greater the activity. </p><br><F7p>Manuka Honey is formed in the rural pastures of New Zealand by bees that pollinate the ancient manuka bush. The manuka bush has been used medicinally by the indigenous Maori's for over 4000 years. Today, Manuka Honey is reowned for its unique properties, and is used as a natural alternative to artificial sweeteners and sugars, or taken right off the spoon as part of a healthy diet. </p>",
    points: 276,
    promotions: [],
    name: "Pure Gold Premium Select Manuka Honey MGO 850 250g",
    id: "048844",
    brand: {
      name: "Pure Gold",
      id: "299",
      slug: "pure-gold",
    },
    price: 69.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048835_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048835_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048835_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048835_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048835_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048835_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048835_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048835_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048835_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048835_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048835_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048835_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048835_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048835_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048835_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£12.00/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.7143,
    review_count: 7,
    description:
      "<ul><li><b>MGO 300 - Recommended if you previously bought 10+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 236,
    promotions: [],
    name: "Manuka Lab Manuka Honey MGO 300 500g",
    id: "048835",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 59.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048771_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048771_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048771_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048771_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048771_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048771_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048771_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048771_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048771_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048771_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048771_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048771_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048771_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048771_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048771_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048771_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048771_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048771_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048771_F.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048771_F.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048771_F.jpg",
            resolution: 724,
          },
        ],
        group: "7",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£7.60/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.75,
    review_count: 16,
    description:
      "<ul><li><b>MGO 40 - Recommended if you previously bought 15+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 72,
    promotions: [],
    name: "Manuka Pharm Manuka Honey MGO 40 250g",
    id: "048771",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 18.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048841_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048841_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048841_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048841_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048841_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048841_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048841_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048841_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048841_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£12.00/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.8571,
    review_count: 28,
    description:
      "<ul><li><b>MGO 300 - Recommended if you previously bought 10+ UMF</b></li><li>100% New Zealand Manuka Honey with a delicious, natural taste.</li><li>Flavourful and versitile. Use as a beneficial ingredient in cooking.</li></ul><p>Pure Gold Manuka Honey is tested by an internationally accredited New Zealand Government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxal, the component that endows Manuka Honey with its unique antibacterial properties. The higher the number, the greater the activity. </p><br><p>Manuka Honey is formed in the rural pastures of New Zealand by bees that pollinate the ancient manuka bush. The manuka bush has been used medicinally by the indigenous Maori's for over 4000 years. Today, Manuka Honey is reowned for its unique properties, and is used as a natural alternative to artificial sweeteners and sugars, or taken right off the spoon as part of a healthy diet. </p>",
    points: 236,
    promotions: [],
    name: "Pure Gold Premium Select Manuka Honey MGO 300 500g",
    id: "048841",
    brand: {
      name: "Pure Gold",
      id: "299",
      slug: "pure-gold",
    },
    price: 59.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048780_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048780_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048780_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048780_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048780_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048780_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048780_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048780_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048780_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048780_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048780_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048780_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£20.80/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 3,
    description:
      "<ul><li>Activity Rating : MGO 240</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 204,
    promotions: [],
    name: "Manuka Pharm Premium Monofloral Manuka Honey MGO 240 250g",
    id: "048780",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 51.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048777_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048777_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048777_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048777_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048777_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048777_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048777_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048777_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048777_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048777_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048777_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048777_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£14.80/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 2,
    description:
      "<ul><li><b>MGO 85 - Recommended if you previously bought 5+ UMF</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 144,
    promotions: [],
    name: "Manuka Pharm Manuka Honey MGO 85 250g",
    id: "048777",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 36.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048775_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048775_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048775_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048775_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048775_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048775_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048775_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048775_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048775_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048775_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048775_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048775_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£13.60/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.625,
    review_count: 24,
    description:
      "<ul><li><b>MGO 70 - Recommended if you previously bought 24+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 132,
    promotions: [
      {
        text: "Penny Sale",
      },
    ],
    name: "Manuka Pharm Manuka Honey MGO 70 250g",
    id: "048775",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 33.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048763_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048763_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048763_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048763_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048763_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048763_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048763_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048763_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048763_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048763_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048763_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048763_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048763_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048763_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048763_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048763_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048763_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048763_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048763_F.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048763_F.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048763_F.jpg",
            resolution: 724,
          },
        ],
        group: "7",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£10.20/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.9259,
    review_count: 27,
    description:
      "<ul><li><b>MGO 55 - Recommended if you previously bought 20+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 200,
    promotions: [],
    name: "Manuka Doctor Manuka Honey MGO 55 500g",
    id: "048763",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 50.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048778_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048778_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048778_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048778_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048778_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048778_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048778_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048778_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048778_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048778_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048778_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048778_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£16.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.6667,
    review_count: 3,
    description:
      "<ul><li>Activity Rating : MGO 100</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 156,
    promotions: [],
    name: "Manuka Pharm Premium Monofloral Manuka Honey MGO 100 250g",
    id: "048778",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 39.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048773_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048773_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048773_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048773_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048773_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048773_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048773_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048773_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048773_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£12.40/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.8696,
    review_count: 23,
    description:
      "<ul><li><b>MGO 55 - Recommended if you previously bought 20+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 120,
    promotions: [
      {
        text: "Penny Sale",
      },
    ],
    name: "Manuka Pharm Manuka Honey MGO 55 250g",
    id: "048773",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 30.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048833_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048833_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048833_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048833_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048833_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048833_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048833_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048833_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048833_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048833_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048833_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048833_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£13.33/100 g",
    quantity: {
      unit: "g",
      value: 375,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li><b>MGO 85 - Recommended if you previously bought 5+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 196,
    promotions: [],
    name: "Manuka Lab Manuka Honey MGO 85 375g",
    id: "048833",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 49.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048834_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048834_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048834_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048834_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048834_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048834_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048834_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048834_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048834_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048834_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048834_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048834_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048834_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048834_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048834_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£22.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.7143,
    review_count: 7,
    description:
      "<ul><li><b>MGO 300 - Recommended if you previously bought 10+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 216,
    promotions: [],
    name: "Manuka Lab Manuka Honey MGO 300 250g",
    id: "048834",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 54.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048836_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048836_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048836_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048836_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048836_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048836_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048836_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048836_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048836_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048836_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048836_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048836_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£24.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.375,
    review_count: 8,
    description:
      "<ul><li><b>MGO 525 - Recommended if you previously bought 15+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 236,
    promotions: [],
    name: "Manuka Lab Manuka Honey MGO 525 250g",
    id: "048836",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 59.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048764_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048764_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048764_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_F.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_F.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_F.jpg",
            resolution: 724,
          },
        ],
        group: "7",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_G.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_G.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_G.jpg",
            resolution: 724,
          },
        ],
        group: "8",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048764_H.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048764_H.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048764_H.jpg",
            resolution: 724,
          },
        ],
        group: "9",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£13.60/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.087,
    review_count: 23,
    description:
      "<ul><li><b>MGO 70 - Recommended if you previously bought 24+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes he Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from othernations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 132,
    promotions: [],
    name: "Manuka Doctor Manuka Honey MGO 70 250g",
    id: "048764",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 33.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048760_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048760_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048760_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048760_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048760_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048760_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048760_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048760_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048760_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048760_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048760_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048760_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048760_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048760_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048760_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048760_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048760_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048760_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048760_F.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048760_F.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048760_F.jpg",
            resolution: 724,
          },
        ],
        group: "7",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£10.80/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.7778,
    review_count: 27,
    description:
      "<ul><li><b>MGO 40 - Recommended if you previously bought 15+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 104,
    promotions: [],
    name: "Manuka Doctor Manuka Honey MGO 40 250g",
    id: "048760",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 26.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048761_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048761_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048761_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048761_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048761_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048761_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048761_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048761_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048761_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048761_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048761_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048761_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048761_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048761_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048761_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£9.80/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.7778,
    review_count: 27,
    description:
      "<ul><li><b>MGO 40 - Recommended if you previously bought 15+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 192,
    promotions: [],
    name: "Manuka Doctor Manuka Honey MGO 40 500g",
    id: "048761",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 48.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048762_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048762_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048762_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048762_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048762_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048762_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048762_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048762_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048762_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048762_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048762_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048762_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048762_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048762_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048762_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£12.40/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.9259,
    review_count: 27,
    description:
      "<ul><li><b>MGO 55 - Recommended if you previously bought 20+ TA</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 120,
    promotions: [],
    name: "Manuka Doctor Manuka Honey MGO 55 250g",
    id: "048762",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 30.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048766_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048766_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048766_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048766_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048766_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048766_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048766_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048766_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048766_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048766_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048766_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048766_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048766_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048766_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048766_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048766_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048766_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048766_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£14.80/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 3,
    review_count: 4,
    description:
      "<ul><li><b>MGO 85 - Recommended if you previously bought 5+ UMF</b></li><li>100% New Zealand Multifloral Manuka Honey. Tested & Guaranteed.</li><li>From the beekeeper, straight to you. Fully traceable from Hive to Home</li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other Nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Multifloral Manuka Honey is mainly honey from a Manuka bush, but the bees have travelled further afield so it contains a wider range of nectar from other plants.</p>",
    points: 144,
    promotions: [],
    name: "Manuka Doctor Manuka Honey MGO 85 250g",
    id: "048766",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 36.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048770_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048770_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048770_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048770_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048770_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048770_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048770_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048770_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048770_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048770_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048770_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048770_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048770_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048770_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048770_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£23.20/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 3,
    description:
      "<ul><li>Activity Rating : MGO 340</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 228,
    promotions: [],
    name: "Manuka Doctor Premium Monofloral Manuka Honey MGO 340 250g",
    id: "048770",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 57.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/015271_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/015271_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/015271_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/015271_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/015271_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/015271_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/015271_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/015271_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/015271_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£49.98/100 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.375,
    review_count: 8,
    description:
      "<ul><li>Lightweight and Uplifting Body Oil</li><li>Nourishes your skin</li><li>Leaves skin feeling firm, smooth and hydrated</li></ul><p>This lightweight and uplifting body oil nourishes skin and seals in moisture, leaving skin feeling firm, smooth and hydrated.</p><br><p>Formulated with 24K Gold, the subtle gold shimmer, illuminates skin so body contours appear more even toned and youthful, whilst skin is left looking glowingly soft. Manuka Honey and precious plant oils including Moringa, Avocado and Baobab leave the body feeling smooth and visibly healthier.</p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor 24K Gold & Manuka Honey Body Oil 50ml",
    id: "015271",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/076880_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/076880_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/076880_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076880_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076880_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076880_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£21.96/100 ml",
    quantity: {
      unit: "ml",
      value: 25,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li>Helps calm blemishes, cuts and insect bites</li><li>Cooling formula soothes irritated skin </li><li>With Manuka Honey, Propolis and anti-bacterial Tea Tree</li></ul><p>This must-have multi-tasker works on all types of minor skin irritations including blemishes, cuts and insect bites. Apply as required for a refreshing cool feeling that soothes irritated skin, whilst moisturising and protecting.</p><br><p>Made from hydrating Manuka Honey, antioxidant rich Propolis and anti-bacterial Tea Tree, this fast acting antiseptic gel delivers a refreshing sensation on irritated skin and helps to ease feelings of uncomfortableness, reduce inflammation and calm skin.</p>",
    points: 20,
    promotions: [],
    name: "Manuka Doctor ApiRevive Manuka & Tea Tree Antiseptic Gel 25ml",
    id: "076880",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 5.49,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/015280_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/015280_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/015280_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/015280_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/015280_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/015280_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£79.96/100 ml",
    quantity: {
      unit: "ml",
      value: 25,
    },
    rating: 4.5,
    review_count: 4,
    description:
      "<ul><li>Soft and smooth hands and nails</li><li>Hydrating</li><li>Leaves skin feeling nourished and nails strengthened</li></ul><p>Achieve soft, smooth, beautiful hands and nails with this hydrating oil which sinks in quickly to leave skin feeling nourished and nails strengthened.</p><br><p>This light hand oil contains 24K Gold, Manuka Honey and precious plants extracts including Argan, Macadamia and Sesame to help replenish dry hands and regain suppleness and elasticity.</p>",
    points: 76,
    promotions: [],
    name: "Manuka Doctor 24K Gold & Manuka Honey Hand Oil 25ml",
    id: "015280",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048768_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048768_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048768_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048768_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048768_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048768_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048768_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048768_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048768_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048768_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048768_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048768_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048768_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048768_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048768_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£18.40/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li>Activity Rating : MGO 140</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes he Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 180,
    promotions: [],
    name: "Manuka Doctor Premium Monofloral Manuka Honey MGO 140 250g",
    id: "048768",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 45.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048769_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048769_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048769_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048769_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048769_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048769_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048769_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048769_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048769_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048769_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048769_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048769_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048769_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048769_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048769_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048769_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048769_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048769_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£20.80/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li>Activity Rating : MGO 240</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 204,
    promotions: [],
    name: "Manuka Doctor Premium Monofloral Manuka Honey MGO 240 250g",
    id: "048769",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 51.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048779_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048779_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048779_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048779_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048779_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048779_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048779_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048779_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048779_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048779_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048779_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048779_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£18.40/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li>Activity Rating : MGO 140</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 180,
    promotions: [],
    name: "Manuka Pharm Premium Monofloral Manuka Honey MGO 140 250g",
    id: "048779",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 45.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048865_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048865_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048865_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048865_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048865_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048865_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£4.00/10 ml",
    quantity: {
      unit: "ml",
      value: 75,
    },
    rating: 4.5,
    review_count: 4,
    description:
      "<ul><li>Age-Defying Gold Peel</li><li>Plumps & firms for a youthful looking complexion</li><li>Brightens the complexion for a radiant glow</li></ul><p>NEW radiance boosting golden facial peel lifts tired, dull looking skin, whilst plumping and firming to create a youthful looking complexion. 24K Gold renowned for its anti-ageing properties is combined with Purified Bee Venom & Manuka Honey to fight fine lines and wrinkles whilst leaving skin glowingly soft and naturally radiant. This luxurious peel lifts dead skin cells leaving skin feeling smooth, whilst brightening the complexion and visibly tightening pores.</p><br><p>The amazing age-defying properties of 24K Gold help lock in moisture to keep skin firm by maintaining collagen and inhibiting the breakdown of elastin. Another elastin booster is Manuka Honey from New Zealand which is a natural humectant, drawing moisture from the air. Purified Bee Venom, a potent combination of enzymes, peptides and amino acids, has collagen boosting properties whilst smoothing & plumping. Kaolin, a light mineral clay helps draw impurities from the skin whilst a Silk extract, which is a complex mixture of unsaturated fatty acids, vitamins, proteins & amino acids, aids retention of water & is highly moisturising. Papaya leaf is rich in amino acids and fruit enzymes, which refreshes and stimulates skin. Grapefruit seed extract is rich in natural ingredients that nourish and protect, including vitamins A, C and E and antioxidants. </p>",
    points: 116,
    promotions: [],
    name: "Manuka Doctor 24K & Manuka Honey Gold Face Peel 75ml",
    id: "048865",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 29.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048781_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048781_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048781_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048781_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048781_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048781_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048781_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048781_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048781_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048781_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048781_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048781_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048781_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048781_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048781_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048781_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048781_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048781_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048781_F.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048781_F.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048781_F.jpg",
            resolution: 724,
          },
        ],
        group: "7",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£23.20/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4,
    review_count: 4,
    description:
      "<ul><li>Activity Rating : MGO 340</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Pharm are specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes the Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Pharm honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 228,
    promotions: [],
    name: "Manuka Pharm Premium Monofloral Manuka Honey MGO 340 250g",
    id: "048781",
    brand: {
      name: "Manuka Pharm",
      id: "843",
      slug: "manuka-pharm",
    },
    price: 57.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/015281_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/015281_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/015281_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/015281_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/015281_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/015281_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/015281_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/015281_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/015281_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£13.32/10 ml",
    quantity: {
      unit: "ml",
      value: 12,
    },
    rating: 4.3784,
    review_count: 37,
    description:
      "<ul><li>Nourishes Skin</li><li>Leaves skin glowingly soft and healthy looking</li><li>Visibly brightens, firms and hydrates</li></ul><p>This exquisite beauty oil nourishes skin and seals in moisture, leaving skin glowingly soft and healthy looking. Formulated with 24K Gold, Manuka Honey and precious plant oils this luxurious facial oil visibly brightens, firms and hydrates whilst leaving skin naturally radiant.</p><br><p>The subtle gold shimmer, illuminates skin highlighting facial contours, whilst precious plant oils including Cranberry, Baobab and Marula deeply hydrate, condition and protect giving skin a silky sheen.</p>",
    points: 60,
    promotions: [],
    name: "Manuka Doctor 24K Gold & Manuka Honey Face Oil 12ml",
    id: "015281",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 15.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048767_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048767_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048767_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048767_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048767_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048767_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048767_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048767_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048767_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048767_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048767_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048767_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048767_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048767_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048767_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£16.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 5,
    review_count: 2,
    description:
      "<ul><li>Activity Rating : MGO 100</li><li>100% New Zealand Premium Monofloral Manuka Honey. Tested & Guaranteed.</li><li>Monofloral Manuka Honey has nectar from predominantly the Manuka Bush. With lower levels of nectar from other species. Giving the Manuka honey a higher concentration of Manuka Nectar. </li></ul><p>Manuka Doctor - specialists in high quality New Zealand Harvested Manuka Honey, guaranteed from Hive to Home. MGO (Methylglyoxal) rating in Manuka honey is derived from DHA which is naturally present in the nectar of the Manuka Bush. Within the hive DHA undergoes he Maillard reaction to form MGO. Our MGO levels are validated by independent labs in NZ and the UK.</p><br><p> Manuka honey is made by the bees gathering pollen from the Manuka bush (Leptospermum Scoparium). The plant is indigenous to New Zealand, beekeepers set up their hives in wild uncultivated areas in which Manuka bushes grow. Manuka Doctor honey is 100% pure New Zealand honey and is not blended with honey from other nations. The pollution free New Zealand environment ensures that every jar is honey as nature intended.</p><br><p>Monofloral Manuka Honey is made by bees foraging mainly from Manuka bushes, so it contains only a small amount of nectar from other plants. It is classed as a purer Manuka honey.</p>",
    points: 156,
    promotions: [],
    name: "Manuka Doctor Premium Monofloral Manuka Honey MGO 100 250g",
    id: "048767",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 39.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/010680_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/010680_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/010680_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/010680_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/010680_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/010680_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/010680_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/010680_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/010680_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£2.24/100 g",
    quantity: {
      unit: "g",
      value: 120,
    },
    rating: 1,
    review_count: 1,
    description:
      "<ul><li>Made with pure Active 5+ Manuka Honey</li><li>Suitable for Vegetarians </li><li>Perfect for a treat.</li></ul><p>Picklecoombe House Manuka Nuggets are made with pure Active 5+ Manuka Honey. They are soothing honey sweets are perfect for a treat. They are also suitable for Vegetarians </p><br><p>Picklecoombe House is a working Apiary based in Leicestershire UK and specialises in honey and honey products from all over the world.</p>",
    points: 8,
    promotions: [],
    name: "Picklecoombe House Manuka Nuggets 120g",
    id: "010680",
    brand: {
      name: "Picklecoombe House",
      id: "842",
      slug: "picklecoombe-house",
    },
    price: 2.69,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/001958_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/001958_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/001958_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/001958_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/001958_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/001958_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "LOWINSTOCK",
    price_per_uom: "£19.99/100 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 4,
    review_count: 7,
    description:
      "<ul><li>Replenishes and conditions damaged hair</li><li>De-tangles hair </li><li>Suitable for all hair types</li></ul><p>The unique formulation of Manuka honey, Manuka oil & Abyssinian oil work together to replenish hair of any lost nutrients and restore natural goodness. Hair will be left intensely nourished with long-lasting volume, a weightless finish and fabulous shine! Restorative Hair Mask is suitable for all hair types and also acts as a great de-tangler.</p><br><p>Rich and creamy conditioning treatment that replenishes lost moisture for a natural looking shine. Made with nourishing ingredients to visibly revitalise damaged hair, helping to restore the natural goodness and replace lost nutrients.</p>",
    points: 76,
    promotions: [],
    name: "Manuka Doctor Restorative Hair Mask 100ml",
    id: "001958",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/020596_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/020596_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/020596_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/020596_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/020596_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/020596_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£16.99/100 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 5,
    review_count: 2,
    description:
      "<ul><li>Purifying facial toner with pure Manuka Honey</li><li>Reduces oil and impurities on the skin</li><li>With Purified Bee Venom for anti-bacterial properties</li></ul><p>A deep cleansing toner that reduces oil and impurities, leaving you feeling fresh and pure. The ApiClear Facial Toner features powerful, natural active ingredients Purified Bee Venom (PBV™), Manuka honey, royal jelly and tea tree to help zap blemishes. Purified Bee Venom has proven anti-bacterial properties. Manuka Honey from New Zealand has proven anti-bacterial & moisturising properties. </p><br><p>Make this wonderful toner part of your cleansing, toning and moisturising regime. Combine daily with ApiClear Foaming Cleanser for effective reduction of bacteria. The Manuka Doctor Facial Toner is easy to apply. Simply apply to a cotton pad or ball and gently dab onto dry, cleansed skin.</p>",
    points: 64,
    promotions: [],
    name: "Manuka Doctor ApiClear Facial Toner 100ml",
    id: "020596",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 16.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/089773_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/089773_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/089773_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/089773_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/089773_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/089773_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£8.60/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.8571,
    review_count: 14,
    description:
      "<ul><li>UMF 10+ Manuka Honey</li><li>Raw Manuka Honey</li><li>Up to grade UMF 10+</li></ul><p>New Zealand Manuka Honey, UMF grade 10+ containing 3 naturally occuring chemical markers.</p><br><p>Contains Leptosperin, MGO and DHA. All naturally occuring markers in genuine Manuka Honey.</p>",
    points: 168,
    promotions: [],
    name: "Medibee UMF 10+ Manuka Honey 500g",
    id: "089773",
    brand: {
      name: "Medibee",
      id: "232",
      slug: "medibee",
    },
    price: 42.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083585_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083585_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083585_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083585_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083585_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083585_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£2.52/100 ml",
    quantity: {
      unit: "ml",
      value: 250,
    },
    rating: 3.75,
    review_count: 8,
    description:
      "Used in combination with our organic bioactive Manuka Honey shampoo, this incredibly effective formulation replenishes the hair’s natural condition by coating and penetrating the hair’s external fibres and cellular keratin matrix, allowing our bioactive organic extracts to instantly restore the condition of the hair.",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Conditioner 250ml",
    id: "083585",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.29,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083594_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083594_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083594_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083594_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083594_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083594_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.35/10 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 4.8125,
    review_count: 16,
    description:
      "<ul><li>With organic and bio-active natural ingredients</li><li>Restoring, cleansing & soothing</li><li>Suitable for sensitive and irritated dry skin</li></ul><p>Bioactive 15+ organic Manuka Honey soap cleanses naturally, allowing the powerful organic honey extract to restore and cleanse the skin.</p><br><p>This is a soft and gentle soap with all the regenerating and repairing qualities of Manuka honey. In addition to its health and restorative properties, Manuka Honey is also a highly effective cleanser and a natural moisturiser that helps the skin to retain hydration.</p>",
    points: 12,
    promotions: [],
    name: "Dr Organic Manuka Honey Soap 100g",
    id: "083594",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 3.49,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083593_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083593_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083593_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083593_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083593_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083593_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£2.37/100 ml",
    quantity: {
      unit: "ml",
      value: 265,
    },
    rating: 5,
    review_count: 5,
    description:
      "<ul><li>Rich shampoo with Manuka Honey</li><li>Strengthening, restoring & nourishing</li><li>Leaves hair feeling silky soft & manageable</li></ul><p>A restoring and protecting shampoo formulated with Organic Manuka Honey and Aloe Vera. </p><br><p>This rich moisturising shampoo penetrates deep into the hair’s fibres to restore flexibility, repairing, soothing and nourishing roots and scalp adding a healthy lustre to the hair, leaving it feeling silky soft, regenerated and totally manageable. Suitable for frequent use on most hair types.</p>",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Shampoo 265ml",
    id: "083593",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.29,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/010283_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/010283_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/010283_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/010283_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/010283_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/010283_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/010283_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/010283_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/010283_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£79.96/100 ml",
    quantity: {
      unit: "ml",
      value: 25,
    },
    rating: 4.7407,
    review_count: 27,
    description:
      '<ul>\n<li> Clinically proven to reduce wrinkles and firm skin</li>\n<li> For a luminous complexion and refining fine lines</li>\n<li> Anti-ageing formula featuring hero ingredient, Manuka Oil</li></ul>\n<p>Manuka Doctor Replenishing Facial Oil works wonders on all skin types leaving it looking more luminous, complexion younger looking and fine lines refined. It is clinically proven to increase skin firmness and elasticity in just four weeks.</p>\n<br><p>Omega rich oils, and hero ingredient Manuka Oil, help skin to regain its suppleness and elasticity by protecting moisture levels to help prevent the appearance of fine lines and wrinkles.<em>"I use Manuka Doctor\'s Replenishing Facial Oil under my eyes, on my lids and on my hands before I go to bed. I\'ll even put it on my body. I love the way it smells." - Kourtney Kardashian"</em></p>',
    points: 76,
    promotions: [],
    name: "Manuka Doctor Replenishing Facial Oil 25ml",
    id: "010283",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/010277_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/010277_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/010277_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/010277_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/010277_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/010277_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£79.96/100 ml",
    quantity: {
      unit: "ml",
      value: 25,
    },
    rating: 4.2,
    review_count: 5,
    description:
      '<ul>\n<li> Endorsed by Kourtney Kardashian</li>\n<li> Balancing formula with hero ingredient, Manuka Oil</li>\n<li> Clinically proven to smooth uneven skin tone, reduce redness and reduce pore size</li></ul>\n<p>Award-winning Manuka Doctor Normalising Facial Oil rebalances the skin for a brighter, fresher complexion. It is also clinically proven to minimise pores, without being too heavy or feeling uncomfortably greasy.</p><br>\n<p>Manuka Doctor Normalising Facial Oil is designed to suit all skin types, so there is no reason not to try this powerful anti-ager for visible skincare results. Just a couple of drops applied daily will visibly hydrate and even skin tone whilst essential oils restore skin\'s suppleness - all without greasy side effects. <em>"I am obsessed with the Manuka Doctor Facial Oils! I love the way they smell. I also use them on my hands and body." - Kourtney Kardashian</em></p>',
    points: 76,
    promotions: [],
    name: "Manuka Doctor Normalising Facial Oil 25ml",
    id: "010277",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/010278_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/010278_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/010278_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/010278_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/010278_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/010278_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£79.96/100 ml",
    quantity: {
      unit: "ml",
      value: 25,
    },
    rating: 3.6667,
    review_count: 36,
    description:
      '<ul>\n<li> Clinically proven to reduce age spots in 4 weeks</li>\n<li> Skin appears more luminous and revitalised</li>\n<li> Deeply nourishing essential oils even skin tone</li></ul>\n<p>Manuka Doctor Brightening Facial Oil is designed for all skin types and promotes a more youthful looking complexion by helpin skin appear more luminous and radiant.</p><br>\n<p>Anti-oxidant rich oils, including Manuka Oil, help protect against oxidative damage, whilst deeply nourishing essential oils visibly promote skin’s flexibility.<em>"I am obsessed with the Manuka Doctor Facial Oils! I love the way they smell. I also use them on my hands and body." - Kourtney Kardashian</em></p>',
    points: 76,
    promotions: [],
    name: "Manuka Doctor Brightening Facial Oil 25ml",
    id: "010278",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/019260_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/019260_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/019260_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/019260_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/019260_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/019260_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.22/Wipe",
    quantity: {
      unit: "Wipes",
      value: 60,
    },
    rating: 4.5,
    review_count: 4,
    description:
      "<ul><li>Convenient cleansing pads to remove daily impurities</li><li>Reveal brighter, more radiant skin</li><li>Removes stubborn make-up</li></ul><p>NEW ultra-hydrating Micellar Cleansing Pads from Manuka Doctor gently cleanse the skin to remove daily impurities. The pads gently exfoliate to reveal visibly brighter, more radiant skin. Gentle enough to use around the eyes the pads remove stubborn make up and reinvigorate the skin, leaving it feeling soft and smooth. Manuka Honey is well known to help boost hydration and elastin, leaving the skin feeling moisturised and soothed. Naturally occurring fruit acids gently exfoliate dead skin cells promoting skin radiance.</p><br><p>Manuka Doctor Micellar Cleansing Pads contain a special blend of natural ingredients to gently cleanse and hydrate the complexion. Vitamin C helps promote the synthesis of collagen, increasing skin suppleness, whilst also offering sunlight protection and scavenging free radicals helping to reduce skin roughness and inflammation. Floral Nectar which is obtained from the Combretum farinosum flower wraps the skin in a sheen of revitalising softness. A natural amino acid derivative with skin brightening properties which acts as a skin conditioner with pH-regulating properties. Helps to improve skin clarity and even skin tone. </p>",
    points: 48,
    promotions: [],
    name: "Manuka Doctor Apiclear Micellar Cleansing Pads",
    id: "019260",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 12.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048866_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048866_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048866_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048866_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048866_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048866_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£1.70/10 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 4.5,
    review_count: 2,
    description:
      "<ul><li>NEW Improved Formula</li><li>Hard-working creamy cleanser for blemish-prone skin</li><li>Controls the build up of toxins, excess sebum production & dead skin cells</li></ul><p>NEW IMPROVED Manuka Doctor ApiClear Purifying Cleanser is a highly effective deep cleansing formula that controls the build up of toxins, excess sebum production and dead skin cells, as well as zapping daily impurities & removing make up, to reveal a more radiant complexion. This new creamy formula leaves skin feeling soft, visibly clearer & calmer. </p><br><p>The powerful Purified Bee Venom (PBV™) in this hard-working creamy cleanser helps fight breakouts. Royal jelly is a secretion used by worker bees to feed and nourish their queens. Queen bees live exclusively on royal jelly which is thought to be responsible for their size and longevity. Papaya Fruit is one the best fruits to incorporate into your skin care regime due to an enzyme called papain which helps exfoliate dead skin cells. Shea Butter is highly nourishing whilst Manuka Honey is also highly moisturising. </p>",
    points: 64,
    promotions: [],
    name: "Manuka Doctor Apiclear Purifying Cleanser 100ml",
    id: "048866",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 16.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/085281_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/085281_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/085281_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/085281_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/085281_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/085281_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£9.00/100 ml",
    quantity: {
      unit: "ml",
      value: 200,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li>Manuka honey packed with natural and powerful ingredients</li><li>With added Zinc for immune support</li><li>Tasty blackcurrant flavour</li></ul><p>Comvita® Manuka Honey Elixir with Blackcurrant will support your whole family’s immune system when they need it most. The soothing elixir is packed with natural and powerful ingredients including the unique qualities of UMF® 10+ Manuka Honey, blackcurrants rich in anthocyanin’s and Zinc which supports the immune system. Zinc contributes to the normal function of the immune system</p><br><p>The added blackcurrent flavouring makes it an easy and delicious way to absorb the Manuka Honey Elixir.</p>",
    points: 68,
    promotions: [],
    name: "Comvita Manuka Honey & Blackcurrant Elixir 200ml",
    id: "085281",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 17.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/076887_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/076887_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/076887_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076887_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076887_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076887_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£23.96/100 ml",
    quantity: {
      unit: "ml",
      value: 25,
    },
    rating: 4.3333,
    review_count: 3,
    description:
      "<ul><li>Manuka Honey is proven to nourishes your skin with moisture</li><li>Propolis is one of the most popular ingredients for reducing blemishes</li><li>Combine daily with ApiClear Foaming Cleanser</li></ul><p>Take control of blemish prone skin with our targeted blemish cream. Harnessing the power of active natural ingredients Manuka Honey and Propolis, the Manuka Doctor Blemish Cream has all of the essential ingredients to provide relief for skin imperfections. This natural, cooling and non-greasy formula is a blemish’s worst enemy!</p><br><p></p>",
    points: 20,
    promotions: [],
    name: "Manuka Doctor ApiClear Blemish Cream 25ml",
    id: "076887",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 5.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/014786_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/014786_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/014786_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/014786_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/014786_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/014786_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.12/Lozenge",
    quantity: {
      unit: "Lozenges",
      value: 8,
    },
    rating: 3.6667,
    review_count: 3,
    description:
      "<ul><li>100% pure UMF 10+ Manuka Honey from New Zealand</li><li>Health –maintaining effects</li><li>Contribution to a healthy diet</li></ul><p>Comvita Pure Manuka Honey Lozenges provide the soothing qualities of 100% Pure UMF 10+ Manuka Honey. New Zealand Manuka has long been valued for its health-maintaining effects and Manuka Honey is gaining worldwide recognition for its unique properties.2 tablets.</p><br><p>Manuka Honey Lozenges have been valued for their contribution to a healthy diet and its reputation continues to grow.</p>",
    points: 32,
    promotions: [],
    name: "Comvita Pure Manuka Honey 8 Lozenges",
    id: "014786",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 8.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/077231_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/077231_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/077231_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/077231_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/077231_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/077231_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/077231_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/077231_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/077231_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.06/Lozenge",
    quantity: {
      unit: "Lozenges",
      value: 16,
    },
    rating: 3.6667,
    review_count: 3,
    description:
      "<ul><li>100% pure UMF 10+ Manuka Honey from New Zealand</li><li>Health –maintaining effects</li><li>Contribution to a healthy diet</li></ul><p>Comvita Pure Manuka Honey Lozenges provide the soothing qualities of 100% Pure UMF 10+ Manuka Honey. New Zealand Manuka has long been valued for its health-maintaining effects and Manuka Honey is gaining worldwide recognition for its unique properties.2 tablets.</p><br><p>Manuka Honey Lozenges have been valued for their contribution to a healthy diet and its reputation continues to grow.</p>",
    points: 64,
    promotions: [],
    name: "Comvita Pure Manuka Honey 16 Lozenges",
    id: "077231",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 16.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083587_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083587_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083587_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083587_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083587_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083587_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.20/10 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.5,
    review_count: 8,
    description:
      "A deodorant liquid cream roll-on, providing a number of skin care benefits for sensitive skin.<br><br> This natural deodorant provides all day protection and freshness, promotes smoothing of the skin and it is ideal for everyday use.",
    points: 20,
    promotions: [],
    name: "Dr Organic Manuka Honey Deodorant 50ml",
    id: "083587",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 5.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048860_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048860_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048860_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048860_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048860_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048860_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£15.99/10 ml",
    quantity: {
      unit: "ml",
      value: 10,
    },
    rating: 2.2,
    review_count: 5,
    description:
      "<ul><li>Enhances natural lip shape & colour</li><li>Softens & plumps</li><li>Naturally fuller looking lips</li></ul><p>NEW Manuka Doctor apirefine Lip Oil is the perfect way to moisturise lips whilst enhancing their natural shape and colour. Dispensed in a stylish glass roller ball vial this fruity fragranced Lip Oil softens and plumps for naturally fuller looking lips. Combining natural ingredients with advanced technologies including Floral Nectar - a sweet liquid obtained from the Combretum farinosum flower which gives skin a comforting softness. </p><br><p>Manuka Oil - extracted from the leaves of the Manuka bush to moisturise and protect lips. Kiss Me Quick - extracted from the plant and combined with a natural peptide to plump lips by hyaluronic acid synthesis. Sweet Almond Oil - rich in oleic and linoleic fatty acids this is a great skin conditioning agent due to its penetrating, smoothing, softening and moisturising properties. Raspberry Seed Oil - rich in essential fatty acids and high levels of vitamin E, makes this oil the perfect lipid choice for daily protection and moisture retention. Vitamin E – an excellent antioxidant which moisturises the skin. Plumping Active – composed of hyaluronic acid and konjac polysaccharides and designed to penetrate the upper layers of the skin to rapidly plump lips, smooth out wrinkles and increase volume with long lasting hydration. Colour Enhancement Active – to subtly reveal the natural rose colour of lips.</p>",
    points: 60,
    promotions: [],
    name: "Manuka Doctor ApiRefine Lip Oil 10ml",
    id: "048860",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 15.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/000878_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/000878_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/000878_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/000878_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/000878_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/000878_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£19.99/100 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 5,
    review_count: 2,
    description:
      "<ul><li>Hydration for youthful looking skin</li><li>With pure Manuka Honey from New Zealand</li><li>Removes make up whilst protecting moisture levels</li></ul><p>Invigorate & refresh a dull looking complexion with this nourishing facial exfoliator. Smooth, refine & renew, whilst working against the appearance of dark spots & sun damaged skin. This age defying formula cleanses skin by removing make up, reducing oil & impurities, whilst protecting moisture levels of the skin. For a visibly brighter & more radiant looking complexion, include in your daily routine with the full ApiNourish range.</p><br><p></p>",
    points: 76,
    promotions: [],
    name: "Manuka Doctor ApiNourish Polishing Facial Exfoliator 100ml",
    id: "000878",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/031570_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/031570_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/031570_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/031570_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/031570_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/031570_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£19.99/100 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 4.3333,
    review_count: 6,
    description:
      "<ul><li>Hydration for youthful looking skin</li><li>With pure Manuka Honey from New Zealand</li><li>Removes make up whilst protecting moisture levels</li></ul><p>A spa break in a bottle. Your skin will feel like it’s been on holiday every day with this rejuvenating formula. An invigorating, refreshing cleanser that deeply hydrates while it cleanses, this age-defier also helps form new collagen and reduce the appearance of wrinkles. </p><br><p>Helps purify skin by removing make up, reducing oil and impurities, while protecting against free radicals. For brighter, more radiant skin, include in your daily routine with the full ApiNourish regime.</p>",
    points: 76,
    promotions: [],
    name: "Manuka Doctor ApiNourish Hydrating Facial Cleanser 100ml",
    id: "031570",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 19.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048862_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048862_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048862_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048862_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048862_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048862_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£5.00/10 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.5,
    review_count: 6,
    description:
      "<ul><li>Lavender scented leave-on gel face mask</li><li>Helps to reduce dark circles, under eye bags & brighten a dull complexion</li><li>Speeds up the skin’s natural exfoliation process to promote radiant skin by morning</li></ul><p>Transform skin overnight and wake to visibly hydrated, noticeably smooth, luminous skin with the Manuka Doctor Lavender scented leave-on gel mask. Sleep is vital to beautiful skin. A lack of sleep can create stressful conditions which raises the level of glycotoxins in the body. The glycotoxins deregulate the skin's natural systems responsible for the repair and protection processes that occur during sleep, consequently, this deregulation contributes to impaired cell function, tissue disruption and damaged micro vessels. </p><br><p>The ApiNourish Overnight Sleep Mask contains Lavender Oil to help you relax and promote a restful night's sleep. Skin feels hydrated, plump and healthy. Suitable for all skin types and is well known to boost hydration and elastin, leaving the skin feeling moisturised and soothed. Hyaluronic Acid boosts skin’s hydration, increases firmness and refines the appearance of wrinkles. </p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor Apinourish Lavender Sleep Mask 50ml",
    id: "048862",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/076974_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/076974_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/076974_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076974_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076974_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076974_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076974_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076974_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076974_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£49.98/100 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.5714,
    review_count: 7,
    description:
      "<ul><li>Light & non-greasy</li><li>Reveals a radiant and smooth complexion</li><li>Helps reduce wrinkles and renews damaged skin</li></ul><p>A light, non-greasy skin cream that helps to reveal a more radiant and smooth complexion and renews damaged skin cells. This age defying formula helps to reduce the look of wrinkles and helps skin look visibly younger. With pure Manuka Honey from New Zealand and purified bee venom for deeply nourishing for skin.</p><br><p></p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor ApiNourish Repairing Skin Cream 50ml",
    id: "076974",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/007791_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/007791_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/007791_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/007791_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/007791_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/007791_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£3.00/10 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 4.5,
    review_count: 4,
    description:
      "<ul><li>Skin clearing mask works on blemishes and blackheads</li><li>Leaves skin plumped and silky soft</li><li>Lifts dead skin cells, stimulates cell renewal and purifies pores</li></ul><br><p>The Manuka Doctor ApiClear Purifying Facial Peel is a new peel-off face mask that has been designed to brighten and renew your complexion. Part of the ApiClear range, this facial peel mask contains Purified Bee Venom (PBV™) and Manuka Honey, and is the perfect treat for congested skin in addition to your daily skincare routines. Use once or twice a week for a deep cleanse.</p>",
    points: 116,
    promotions: [],
    name: "Manuka Doctor ApiClear Purify Face Peel 100ml",
    id: "007791",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 29.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/092577_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/092577_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/092577_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/092577_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/092577_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/092577_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£5.59/100 ml",
    quantity: {
      unit: "ml",
      value: 125,
    },
    rating: 4.4,
    review_count: 5,
    description:
      "Bioactive organic Manuka Honey has a host of skin balancing and restoring properties.\n\nIn combination with a complex blend of bioactive, natural and organic ingredients and formulated using natural microparticles of volcanic lava and Corn Cob Powder, we have produced an exceptionally deep cleansing, balancing exfoliant that removes impurities and excess oil whilst restoring, nourishing and moisturising the skin to give a radiant, youthful glow.",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Face Scrub 125ml",
    id: "092577",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083453_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083453_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083453_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083453_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083453_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083453_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.50/Lozenge",
    quantity: {
      unit: "Lozenges",
      value: 12,
    },
    rating: 5,
    review_count: 1,
    description:
      "<ul><li>A powerful synergy of high strength UMF10+ Manuka honey and propolis</li><li>Tasty lemon and honey flavour</li><li>Contributes to normal immune support </li></ul><p>Comvita Manuka Honey Lozenges with Propolis combine the soothing qualities of UMF Manuka Honey with the power of Propolis. New Zealand Manuka has long been valued and is gaining worldwide recognition for its unique properties.</p><br><p>The all-in-one formula comes in a delicious lemon & honey flavour and is also made with peppermint oil.</p>",
    points: 20,
    promotions: [],
    name: "Comvita Manuka Honey with Propolis 12 Lozenges",
    id: "083453",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 5.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083583_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083583_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083583_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083583_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083583_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083583_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£2.52/100 ml",
    quantity: {
      unit: "ml",
      value: 250,
    },
    rating: 4.8333,
    review_count: 6,
    description:
      "<ul><li>Restoring, soothing & replenishing</li><li>Rich daily bath & shower gel </li><li>Suitable for sensitive and irritated dry skin</li></ul><p>A gentle revitalizing body wash based on Organic Manuka Honey and Aloe Vera which is ideal for all skin conditions. Providing a deep cleansing action, this product effectively removes impurities while leaving the skin feeling soft and clean.</p><br><p>Manuka Honey has a hydrating effect on the skin. In combination with a proprietary blend of bioactive and organic extracts it is also suitable for use on sensitive and irritated dry skin, resulting in smoother, healthier-looking skin all day long.</p>",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Body Wash 250ml",
    id: "083583",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.29,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083586_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083586_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083586_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083586_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083586_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083586_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.90/10 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.8333,
    review_count: 24,
    description:
      "<ul>\n<li>Intensive hypoallergenic emollient</li>\n<li>Nourishes, restores and soothes</li>\n<li>Safe to use on dry, sun exposed, sensitive or irritated skin</li>\n</ul>\n<p>Using a complex blend of bioactive organic Manuka Honey guarantees that the nourishing and restorative properties found in this unique honey are captured and combined to produce a rich, absorbent bioactive cream.</p>\n<p>The incredible formulation of Dr Organic Manuka Honey Rescue Cream leaves the skin intensely moisturised, instantly restored and visibly healthier.</p>",
    points: 36,
    promotions: [],
    name: "Dr Organic Manuka Honey Rescue Cream 50ml",
    id: "083586",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 9.49,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083591_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083591_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083591_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083591_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083591_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083591_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£4.00/100 ml",
    quantity: {
      unit: "ml",
      value: 200,
    },
    rating: 4.4375,
    review_count: 16,
    description:
      "Using a complex blend of bioactive organic Manuka Honey guarantees that the nourishing and restorative properties found in this unique honey are captured and combined to produce a rich, absorbent bioactive cream.\n\nThis incredible formulation leaves the skin intensely moisturised, instantly restored and visibly healthier.",
    points: 28,
    promotions: [],
    name: "Dr Organic Manuka Honey Skin Lotion 200ml",
    id: "083591",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 7.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/006600_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/006600_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/006600_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/006600_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/006600_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/006600_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£29.98/100 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 5,
    review_count: 3,
    description:
      "<ul><li>Light-textured tinted bronzing gel for your face</li><li>Natural-looking tan develops in one hour</li><li>Enriched with moisturising ingredients to leave a silky smooth finish</li></ul><br><p>Manuka Doctor ApiBronze Age-Defying Facial Bronzing Gel is a light-textured self-tanning gel bronzer that delivers a natural golden tan that develops in one hour. Enriched with moisturising ingredients to leave a silky smooth finish, this non-sticky formula smoothes on evenly and blends flawlessly leaving skin refreshed & hydrated.</p><br><p>This unique age-defying Facial Bronzing Gel contains Purified Bee Venom (PBV™) & Manuka honey to help visibly promote skin's elasticity, refine the appearance of wrinkles and boost skin’s natural radiance. Suitable for all skin types.</p>",
    points: 56,
    promotions: [],
    name: "Manuka Doctor Age-Defying Bronzing Gel 50ml",
    id: "006600",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 14.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/001325_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/001325_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/001325_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/001325_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/001325_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/001325_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.40/10 ml",
    quantity: {
      unit: "ml",
      value: 75,
    },
    rating: 4,
    review_count: 4,
    description:
      "<ul><li>Convenient travel size conditioner with Manuka Honey</li><li>Soothing, restoring & nourishing</li><li>Leaves hair feeling silky soft & manageable</li></ul><p>A soothing conditioner suitable for all hair types formulated with Organic Manuka Honey, Aloe Vera, Shea butter, Hydrolyzed milk protein, Panthenol, Sunflower oil and Vitamin E. </p><br><p>A great, effective conditioner that nourishes and moisturises the scalp; it replenishes the hair’s natural condition by coating and penetrating the external cellular keratin fibre of each follicle, allowing the bioactive organic extracts to instantly restore the condition of the hair.</p>",
    points: 8,
    promotions: [],
    name: "Dr Organic Manuka Honey Travel Conditioner 75ml",
    id: "001325",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 2.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/001324_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/001324_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/001324_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/001324_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/001324_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/001324_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.40/10 ml",
    quantity: {
      unit: "ml",
      value: 75,
    },
    rating: 5,
    review_count: 5,
    description:
      "<ul><li>Rich shampoo with Manuka Honey</li><li>Strengthening, restoring & nourishing</li><li>Leaves hair feeling silky soft & manageable</li></ul><p>A restoring and protecting shampoo formulated with Organic Manuka Honey and Aloe Vera. </p><br><p>This rich moisturising shampoo penetrates deep into the hair’s fibres to restore flexibility, repairing, soothing and nourishing roots and scalp adding a healthy lustre to the hair, leaving it feeling silky soft, regenerated and totally manageable. Suitable for frequent use on most hair types.</p>",
    points: 8,
    promotions: [],
    name: "Dr Organic Manuka Honey Travel Shampoo 75ml",
    id: "001324",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 2.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/021214_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/021214_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/021214_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/021214_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/021214_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/021214_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.33/100 ml",
    quantity: {
      unit: "ml",
      value: 750,
    },
    rating: 4.8889,
    review_count: 18,
    description:
      '<ul>\n<li> Apple Cider Vinegar with the Mother and Manuka Honey tonic</li>\n<li> Naturally fermented and unpasteurised</li>\n<li> Used in dressings and sauces or drink it neat</li>\n</ul>\n<p>Comvita Apple Cider Vinegar & Manuka Honey is a sweet tasting mix of naturally fermentad Apple Cider Vinger with The Mother and New Zealand 5+ UMF Manuka Honey.</p><br><p>Formerly known as "Comvita Honeygar", Comvita Manuka Honey & Apple Cider Vinegar has all kinds of uses and can be used as a salad dressing or consumed neat.</p>',
    points: 36,
    promotions: [],
    name: "Comvita Manuka Honey & Apple Cider Vinegar 750ml",
    id: "021214",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 9.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/000879_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/000879_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/000879_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/000879_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/000879_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/000879_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£23.07/100 ml",
    quantity: {
      unit: "ml",
      value: 130,
    },
    review_count: 0,
    description:
      "<ul><li>Luxurious firming body cream</li><li>Leaves body contours looking youthful and toned</li><li>Signature ingredients; Purified Bee Venom (PBV™), Manuka Honey and Royal Jelly</li></ul><p>Manuka Doctor ApiNourish Firm Body Moisturiser instantly works to firm, smooth and lift all in one; it visibly improves skin’s elasticity and firmness. The Purified Bee Venom (PBV™) in this body moisturiser is proven to nurture natural collagen formation, increasing skin’s elasticity and the New Zealand Manuka Honey is known to help boost moisturisation and elastin.</p><br><p>Working alongside these amazing ingredients is Shea Butter and Silk Extract, to smoothen skin, and Chicory Root, Caesalpinia Spinosa Gum and Red Algae extracts tighten and lift. You'll definitely look the bee’s knees with this  Manuka honey and Purified Bee Venom (PBV™) miracle body lotion cream from Manuka Doctor!</p>",
    points: 116,
    promotions: [],
    name: "Manuka Doctor ApiNourish Firm Body Moisturiser 130ml",
    id: "000879",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 29.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048863_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048863_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048863_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048863_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048863_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048863_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£12.99/10 ml",
    quantity: {
      unit: "ml",
      value: 10,
    },
    rating: 4.4,
    review_count: 5,
    description:
      "<ul><li>Cools & soothes</li><li>Reduces puffiness</li><li>Brightens dark circles</li></ul><p>This NEW cooling eye gel from Manuka Doctor gently smoothes to visibly revitalise the delicate eye area. Containing a unique blend of natural ingredients to help visibly reduce puffiness and brighten dark circles, whilst refining the appearance of wrinkles & restoring skin's softness. It is a great skin conditioning agent due to its penetrating, smoothing, softening and moisturising properties.</p><br><p>This cooling eye gel contains Floral Nectar, a sweet liquid concentrated at the heart of the Combretum farinosum flower that wraps the skin in a sheen of revitalising and comforting softness. Manuka honey, a natural humectant that draws moisture from the air leaving skin feeling moisturised, soothed and plumped. Panthenol is the pro-vitamin of DL-Pantothenic acid (Vitamin B5), which is able to hydrate and deeply moisturise the skin from within. Persian Tree Extract helps to lift the fold of the eyelid at the top and lessen crow’s feet wrinkles on the sides. It also helps to reduce pigmentation to help fade dark circles as well as diminishing puffiness under the eyes. contains vitamins A, B1, B2 and B6. </p>",
    points: 48,
    promotions: [],
    name: "Manuka Doctor Apiclear Revitalising Eye Gel 10ml",
    id: "048863",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 12.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048864_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048864_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048864_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048864_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048864_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048864_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£5.00/10 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    review_count: 0,
    description:
      "<ul><li>A Moisturiser, Primer & SPF All-In-One!</li><li>Protects from external aggressors</li><li>Gives skin a visible radiant glow</li></ul><p>The Manuka Doctor NEW multi-tasking Daily Defence beauty lotion perfects, primes and weightlessly hydrates, whilst acting as a shield to protect from external aggressors. No need for separate moisturiser, primer and SPF lotion, Daily Defence does it all in one!\n</p><br><p>Combining Floral Nectar, a sweet liquid obtained from the Combretum farinosum flower with moisturising Manuka Honey, skin is wrapped in a sheen of revitalising and comforting softness, leaving the complexion intensely moisturised and soothed. The addition of Hyaluronic acid boosts skin's moisture and elasticity whilst giving skin a visible\nradiant glow. NEW Daily Defence Lotion gives skin an instant soft focus effect providing an intensified blurring property to fine lines, wrinkles & blemishes. Tapioca starch removes any feeling of greasiness and is ideal for sensitive skin.",
    points: 96,
    promotions: [],
    name: "Manuka Doctor Apiclear Daily Defence Lotion 50ml",
    id: "048864",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/028243_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/028243_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/028243_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/028243_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/028243_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/028243_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£62.47/100 ml",
    quantity: {
      unit: "ml",
      value: 40,
    },
    rating: 1,
    review_count: 1,
    description:
      "<ul><li>Lifting and skin-purifying face mask</li><li>Balances skin imperfections</li><li>With Purified Bee Venom (PBV™) and Manuka Honey</li></ul><p>Manuka Doctor ApiClear Purifying Face Mask - also known as nature's face lift - is a totally pain-free way to combat wrinkles and skin imperfections. It's also slightly different to a typical face mask; rather than sitting on the surface of your skin, this regenerative formula sinks into your skin and dissolves, releasing its goodness to intensely nourish and renew damaged skin cells.</p><p></p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor ApiClear Purifying Face Mask 40ml",
    id: "028243",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083584_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083584_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083584_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083584_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083584_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083584_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£4.90/100 ml",
    quantity: {
      unit: "ml",
      value: 200,
    },
    rating: 5,
    review_count: 2,
    description:
      "Manuka Honey has a host of properties. We ensure that the bioactive properties of this New Zealand honey are delivered intact while being combined with a complex blend of selected bioactive extracts which help to and hydrate the skin, creating a non-greasy silky smooth sensation.",
    points: 36,
    promotions: [],
    name: "Dr Organic Manuka Honey Body Butter 200ml",
    id: "083584",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 9.79,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083590_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083590_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083590_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083590_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083590_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083590_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£6.65/10 ml",
    quantity: {
      unit: "ml",
      value: 5.7,
    },
    rating: 3.625,
    review_count: 8,
    description:
      "Manuka has a host of properties. We ensure that the natural bioactive properties of this exceptional New Zealand oil are delivered intact and combined with a complex blend of selected bioactive and organic extracts, to help and hydrate the lips. Our moisturising lip balm also provides SPF 15 protection from the sun’s harmful UVA and UVB rays.",
    points: 12,
    promotions: [],
    name: "Dr Organic Manuka Honey Lip Balm 5.7ml",
    id: "083590",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 3.79,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/076969_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/076969_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/076969_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076969_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076969_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076969_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£63.30/100 ml",
    quantity: {
      unit: "ml",
      value: 30,
    },
    rating: 4.2,
    review_count: 5,
    description:
      "<ul><li>Skin treatment serum with pure Manuka Honey</li><li>Improves blemish prone skin whilst hydrating the skin</li><li>With anti-bacterial Purified Bee Venom</li></ul><p>The Manuka Doctor Skin Treatment Serum is clinically proven to improve blemish prone skin. The Serum features anti-bacterial Purified Bee Venom (PBV™) with Manuka honey and royal jelly to help scare blemishes away. The popular Skin Treatment Serum manages to hydrate skin while calming it to give relief from blemishes. It’s a super smart Bee Venom Skin Treatment Serum which reduces the appearance of fine lines and scars. </p><br><p>The Skin Treatment Serum is great and protecting against free radicals too. Manuka Honey in the serum adds moisturising properties. Create a daily regime that combines the Skin Treatment Serum with the ApiClear Foaming Cleanser for effective reduction of bacteria.</p>",
    points: 72,
    promotions: [],
    name: "Manuka Doctor ApiClear Skin Treatment Serum 30ml",
    id: "076969",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 18.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/076973_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/076973_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/076973_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076973_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076973_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076973_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076973_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076973_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076973_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/076973_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/076973_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/076973_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£99.98/100 g",
    quantity: {
      unit: "g",
      value: 50,
    },
    rating: 3.6667,
    review_count: 3,
    description:
      "<ul><li>Lifting and rejuvenating face mask</li><li>Hydrates skin to make it appear more youthful</li><li>With Purified Bee Venom (PBV™) and Manuka Honey</li></ul><p>Manuka Doctor ApiNourish Rejuvenating Face Mask features collagen boosting and skin nourishing Purified Bee Venom (PBV™). It helps to reduce the appearance of fine and wrinkles, and when used regularly may also help reduce the look of scars.</p><br><p>This a pain-free and slightly different face mask; it absorbs quickly into your skin and dissolves, releasing its goodness to intensely nurture and rejuvenate damaged skin cells.</p>",
    points: 196,
    promotions: [],
    name: "Manuka Doctor ApiNourish Rejuvenating Face Mask 50ml",
    id: "076973",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 49.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/031569_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/031569_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/031569_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/031569_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/031569_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/031569_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£83.30/100 ml",
    quantity: {
      unit: "ml",
      value: 30,
    },
    rating: 4.7143,
    review_count: 7,
    description:
      "<ul><li>Rejuvenates & nourishes the skin</li><li>Providing you with a youthful look</li><li>Helps to smooth the appearance of fine lines</li></ul><p>An age-defying formula that rejuvenates and nourishes. Discover this silky age-defying serum for divinely smooth and younger looking skin. A high performance anti-ager designed for tired skin, this super hydrating serum gives skin a youthful injection. Rejuvenates and nourishes, leaving skin looking and feeling younger, helping to smooth the appearance of fine lines and wrinkles.</p><br><p>Use our age-defying bee venom facial serum regularly with the ApiNourish Repairing Skin Cream or Revitalising Day Cream SPF 15 and Restoring Night Cream to help reveal a more radiant and smoother complexion.</p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor ApiNourish Age Defying Serum 30ml",
    id: "031569",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/031571_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/031571_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/031571_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/031571_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/031571_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/031571_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£49.98/100 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.6471,
    review_count: 17,
    description:
      "<ul><li>Manuka Honey provides a boost of moisture for your skin</li><li>Purified Bee Venom nurtures natural collagen formation, increasing skin’s elasticity</li><li>Shea butter soothes your skin</li></ul><p>Helps to firm, refine skin. A little like a genie in a bottle. Have your wish for youthful skin granted with a night formula that works to firm, nourish and refine skin by nurturing natural collagen formation. With nature’s filler Purified Bee Venom (PBV™), Manuka honey, shea butter and royal jelly.</p><br><p></p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor ApiNourish Restoring Night Cream 50ml",
    id: "031571",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/028242_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/028242_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/028242_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/028242_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/028242_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/028242_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£16.99/100 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 5,
    review_count: 8,
    description:
      "<ul><li>Purifying Facial Scrub with pure Manuka Honey</li><li>Fights bacteria and minimizes the appearance of pores</li><li>With anti-bacterial Purified Bee Venom</li></ul><p>Visibly brighten, resurface & refine the complexion with the Manuka Doctor Purifying Facial Scrub. This hard working Facial Scrub helps purify skin by actively fighting bacteria, minimizing the appearance of pores, controlling excess sebum and scrubbing the skin clean, leaving a brighter, smoother looking complexion. </p><br><p>Combining Purified Bee Venom (PBV™), Manuka Honey & powerful botanical extracts this hard working Facial Scrub visibly refines, polishes, brightens. We use Natural Bamboo Scrub Particles as the exfoliating ingredient to leave a brighter, smoother looking complexion.</p>",
    points: 64,
    promotions: [],
    name: "Manuka Doctor ApiClear Purifying Facial Scrub 100ml",
    id: "028242",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 16.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/092513_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/092513_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/092513_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/092513_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/092513_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/092513_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£6.39/100 ml",
    quantity: {
      unit: "ml",
      value: 125,
    },
    rating: 4,
    review_count: 3,
    description:
      "<ul><li>Deep cleansing face mask with Manuka Honey</li><li>Oil absorbing, replenishing & restoring</li><li>Leaves the skin feeling purified </li></ul><p>Bioactive organic Manuka Honey has a host of and replenishing properties. We combine this unique organic honey with a proprietary blend of bioactive, natural and organic ingredients including mineral-rich Kaolin (China Clay). </p><br><p>This nutrient-rich clay based formulation draws oil from the pores while ridding the skin’s surface of dead cells and impurities to leave the skin deeply purified, perfectly nourished and completely.</p>",
    points: 28,
    promotions: [],
    name: "Dr Organic Manuka Honey Face Mask 125ml",
    id: "092513",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 7.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083454_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083454_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083454_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083454_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083454_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083454_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.50/Lozenge",
    quantity: {
      unit: "Lozenges",
      value: 12,
    },
    rating: 4,
    review_count: 3,
    description:
      "<ul>\n<li>Lozenges containing UMF 10+ Manuka honey</li>\n<li>Contains propolis</li>\n<li>Soothing</li>\n</ul>\n<p>Comvita Manuka Honey Lozenges with Propolis combine the soothing qualities of UMF Manuka Honey with the power of Propolis.</p> <p>New Zealand Manuka has long been valued for its health-maintaining effects, and Manuka Honey is gaining worldwide recognition for its unique properties.</p>",
    points: 20,
    promotions: [],
    name: "Comvita Propolis Original Aniseed 12 Lozenges",
    id: "083454",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 5.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/031572_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/031572_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/031572_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/031572_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/031572_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/031572_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/031572_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/031572_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/031572_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£66.60/100 ml",
    quantity: {
      unit: "ml",
      value: 15,
    },
    rating: 4.45,
    review_count: 20,
    description:
      "<ul><li>Hydrating and great for youthful looking skin</li><li>Contains Manuka Honey with purified bee venom</li><li>This Age-Defying effect Eye Cream also brightens dark circles around your eyes</li></ul><p>Manuka Doctor ApiNourish Age-Defying Eye Cream helps to smooth and plump skin around the eyes whilst helping to reduce the appearance of wrinkles. This nourishing eye cream targets dark circles & wrinkles.</p><br><p>Infusing scientifically proven collagen boosting Purified Bee Venom (PBV™) with hydrating Manuka Honey, this brightening and firming eye cream supports skin's natural collagen and elastin production. </p>",
    points: 36,
    promotions: [],
    name: "Manuka Doctor ApiNourish Age-Defying Eye Cream 15ml",
    id: "031572",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 9.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/084346_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/084346_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/084346_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/084346_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/084346_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/084346_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/084346_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/084346_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/084346_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "NOTAVAILABLE",
    quantity: {
      unit: "",
      value: 1,
    },
    review_count: 0,
    description:
      "<p>Soothe and hydrate with the Dr\nOrganic Manuka Honey Gift Pack.</p>  <p>A treat for the whole body to keep skin\nin super soft condition. Contains best selling Manuka Skin Lotion, Face Cream\nand the award winning hand & nail cream.</p>",
    points: 40,
    promotions: [],
    name: "Dr Organic Manuka Honey Soothe & Restore Gift Set",
    id: "084346",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 10.24,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/008334_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/008334_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/008334_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/008334_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/008334_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/008334_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/008334_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/008334_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/008334_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£6.80/100 g",
    quantity: {
      unit: "g",
      value: 220,
    },
    rating: 4.3333,
    review_count: 9,
    description:
      "<ul><li>Organic coffee bean scrub</li><li>With added benefits of Manuka honey</li><li>Suitable for use all over the face and body</li></ul><p>Bean Body Manuka Honey Coffee Bean Scrub is a luxurious, skin-renewing formula infused with Organic Cold-Pressed Coconut Oil to hydrate, exfoliate and soften from top to toe.</p><br><p>Ideal for eczema and psoriasis, its blend of Himalayan Pink Rock Salt and Demerara Sugar buff away dead skin cells, helping to eliminate blackheads and breakouts for a smoother, more refined finish.</p>",
    points: 56,
    promotions: [],
    name: "Bean Body Manuka Honey Coffee Bean Scrub 220g",
    id: "008334",
    brand: {
      name: "Bean Body",
      id: "1217",
      slug: "bean-body",
    },
    price: 14.95,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/013582_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/013582_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/013582_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/013582_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/013582_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/013582_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/013582_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/013582_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/013582_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.47/10 ml",
    quantity: {
      unit: "ml",
      value: 150,
    },
    rating: 3.6154,
    review_count: 13,
    description:
      "<ul><li> Nourishing face wash with Manuka Honey</li><li> Cleansing and conditioning</li><li> With soothing and replenishing properties</li></ul><p> Dr Organic Manuka Honey Gentle Face Wash boasts a proprietary blend of bioactive, natural and organic ingredients leaving the face feeling moisturised, deeply cleansed and vibrant.  Manuka honey is rightly billed as a ‘superfood’ due to its wide range of skin restoring, nourishing and rejuvenating properties.</p><br><p>So extensive are the benefits of manuka honey that the native Maori population of New Zealand have been using it for millennia. </p>",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Gentle Face Wash 150ml",
    id: "013582",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/001327_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/001327_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/001327_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/001327_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/001327_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/001327_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.93/10 ml",
    quantity: {
      unit: "ml",
      value: 30,
    },
    rating: 4.6,
    review_count: 5,
    description:
      "<ul><li>Travel-sized skin lotion - ideal for your hand luggage</li><li>With the benefits of Manuka honey, Aloe Vera, cocoa butter & more</li><li>Luxurious skin care suitable for face & body</li></ul><p>Powerful and restorative lotion based on Organic Manuka Honey blended with Aloe Vera, Cocoa butter, Shea butter, Olive oil, Sunflower Oil, Irish Moss, Vitamin A and Vitamin E.</p><br><p>Dr Organic Manuka Honey Travel Skin Lotion is a highly absorbent moisturising lotion suitable for use all over the body; it rebalances the body’s natural moisture levels and instantly bio-activates the skin’s epidermal cell structure leaving the skin feeling healthy, silky smooth, firm and in perfect condition.</p>",
    points: 8,
    promotions: [],
    name: "Dr Organic Manuka Honey Travel Skin Lotion 30ml",
    id: "001327",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 2.79,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/001957_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/001957_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/001957_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/001957_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/001957_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/001957_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£12.50/100 ml",
    quantity: {
      unit: "ml",
      value: 200,
    },
    rating: 3.5,
    review_count: 4,
    description:
      "<ul><li>An uplifting formula for younger looking body contours</li><li>develops a natural looking tan in just one hour</li><li>With moisturizing ingredients to leave a silky smooth finish & visibly revitalised skin</li></ul><p>Enriched with moisturising ingredients to leave a silky smooth finish, this non-sticky formula smoothes on evenly and blends flawlessly leaving skin refreshed & hydrated. This unique uplifting Bronzing Gel helps reduce the appearance of cellulite & improves skin’s firmness for younger looking body contours. Containing Purified Bee Venom (PBV™) & Manuka honey to help visibly promote skin's elasticity, whilst developing a natural looking tan in just one hour. Suitable for all skin types.</p><br><p></p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor ApiBronze Anti-Cellulite Bronzing Gel 200ml",
    id: "001957",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/001326_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/001326_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/001326_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/001326_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/001326_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/001326_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.40/10 ml",
    quantity: {
      unit: "ml",
      value: 75,
    },
    review_count: 0,
    description:
      "<ul><li>Restoring, soothing & replenishing</li><li>Rich daily bath & shower gel in travel size</li><li>Suitable for sensitive and irritated dry skin</li></ul><p>A gentle revitalizing body wash based on Organic Manuka Honey and Aloe Vera which is ideal for all skin conditions. Providing a deep cleansing action, this product effectively removes impurities while leaving the skin feeling soft and clean. </p><br><p>Manuka Honey has a hydrating effect on the skin, it is suitable for use on sensitive and irritated dry skin, resulting in smoother, healthier-looking skin all day long.</p>",
    points: 8,
    promotions: [],
    name: "Dr Organic Manuka Honey Travel Body Wash 75ml",
    id: "001326",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 2.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083588_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083588_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083588_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083588_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083588_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083588_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.54/10 ml",
    quantity: {
      unit: "ml",
      value: 125,
    },
    rating: 4.7143,
    review_count: 14,
    description:
      "Therapeutic organic Manuka Honey is well known for its amazing ability to nourish and hydrate.\n\nOur bioactive organic Manuka Honey foot and heel cream combines unique Manuka Honey activity with a complex blend of organic bioactive extracts, to produce an easily absorbed luxurious rescue cream.\n\nThis conditioning formulation instantly helps to soften and eliminate calluses whilst moisturising cracked and extremely dry areas of the feet.",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Foot & Heel Cream 125ml",
    id: "083588",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.75,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/083589_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/083589_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/083589_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/083589_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/083589_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/083589_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£5.43/100 ml",
    quantity: {
      unit: "ml",
      value: 125,
    },
    rating: 4.8824,
    review_count: 17,
    description:
      "Bioactive Manuka Honey has a host of skin properties.\n\nOur unique bioactive and organic Manuka Honey hand and nail cream combines the properties of active Manuka Honey with a complex blend of bioactive extracts. Our cream has been specifically formulated to intensely moisturise the skin, penetrating through the epidermal layer, and restoring dry hands.\n\nThis intensive 12 hour rescue cream is ideal for all dry, rough areas of the body including the elbows and knees.",
    points: 24,
    promotions: [],
    name: "Dr Organic Manuka Honey Hand & Nail Cream 125ml",
    id: "083589",
    brand: {
      name: "Dr Organic",
      id: "333",
      slug: "dr-organic",
    },
    price: 6.79,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/049040_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/049040_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/049040_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/049040_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/049040_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/049040_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "OUTOFSTOCK",
    price_per_uom: "£1.10/10 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    review_count: 0,
    description:
      "<ul><li>Immune Support for Kids</li><li>Contains Manuka Honey.</li><li>Combined with Vitamin D and C for immune support</li></ul><p>Comvita kids Manuka Honey Elixir is a yummy option for when the little ones need that extra love and support.</p><br><p>Containing three New Zealand Honeys, Manuka, Thyme and Rewarewa, combined with Vitamin D and C and Marshmallow</p>",
    points: 40,
    promotions: [],
    name: "Comvita Kids Manuka Honey Elixir Strawberry Flavour 100ml",
    id: "049040",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 10.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/031574_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/031574_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/031574_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/031574_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/031574_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/031574_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£49.98/100 ml",
    quantity: {
      unit: "ml",
      value: 50,
    },
    rating: 4.7273,
    review_count: 33,
    description:
      "<ul>\n<li> Skin nourishing day cream</li>\n<li> With purified bee venom and SPF15</li>\n<li> Hydration for more youthful looking skin</li>\n</ul>\n<p>Manuka Doctor ApiNourish Revitalising Day Cream works to refine the look of lines while nourishing skin’s softness. The Manuka Doctor Day Cream features Purified Bee Venom (PBV™), Manuka honey and royal jelly to refine and skin appears more toned and youthful. An enriching, hydrating and energising formula with SPF15.</p>",
    points: 96,
    promotions: [],
    name: "Manuka Doctor ApiNourish Revitalising Day Cream SPF15 50ml",
    id: "031574",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 24.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/077028_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/077028_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/077028_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/077028_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/077028_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/077028_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£16.99/100 ml",
    quantity: {
      unit: "ml",
      value: 100,
    },
    rating: 4.7,
    review_count: 10,
    description:
      "<ul><li>A super light moisturiser ideal for blemish-prone skin</li><li>Nourishing & quickly absorbed</li><li>With Purified Bee Venom for anti-bacterial properties</li></ul><p>With Purified Bee Venom & UMF 18+ Manuka, this lotion is a light and nutritious emulsion that quickly absorbs and refreshes the skin. Whilst enhancing the skins innate shine, it also maintains optimal balance of natural oil and moisture levels. Manuka Doctor Facial Moisturising lotion helps eliminate the cause of blemishes and provides support for troubled skin.</p><br><p>Made with Pure Manuka Honey and Purified Bee Venom which has proven anti-bacterial and anti-inflammatory properties.</p>",
    points: 64,
    promotions: [],
    name: "Manuka Doctor Bee Venom Facial Moisturiser Lotion 100ml",
    id: "077028",
    brand: {
      name: "Manuka Doctor",
      description:
        "Shop the Manuka Doctor range of Manuka Honey and Skincare. Loved by Kourtney Kardashian and Holland & Barrett!",
      id: "753",
      slug: "manuka-doctor",
    },
    price: 16.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048839_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048839_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048839_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048839_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048839_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048839_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£13.33/100 g",
    quantity: {
      unit: "g",
      value: 375,
    },
    review_count: 0,
    description:
      "<ul><li>Natural, unmodified Manuka Honey</li><li>100% New Zealand Manuka Honey with a delicious, natural taste.</li><li>Flavourful and versitile. Use as a beneficial ingredient in cooking.</li></ul><p>Pure Gold Manuka Honey is tested by an internationally accredited New Zealand Government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxal, the component that endows Manuka Honey with its unique antibacterial properties. The higher the number, the greater the activity. </p><br><p>Manuka Honey is formed in the rural pastures of New Zealand by bees that pollinate the ancient manuka bush. The manuka bush has been used medicinally by the indigenous Maori's for over 4000 years. Today, Manuka Honey is reowned for its unique properties, and is used as a natural alternative to artificial sweeteners and sugars, or taken right off the spoon as part of a healthy diet. </p>",
    points: 196,
    promotions: [],
    name: "Pure Gold Premium Select Manuka Honey MGO 85 375g",
    id: "048839",
    brand: {
      name: "Pure Gold",
      id: "299",
      slug: "pure-gold",
    },
    price: 49.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/007060_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/007060_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/007060_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/007060_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/007060_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/007060_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£0.28/Caplet",
    quantity: {
      unit: "Caplets",
      value: 60,
    },
    rating: 4.375,
    review_count: 8,
    description:
      "<ul><li><b>MGO 525 - Recommended if you previously bought 15+ UMF</b></li><li>Can be used as a natural alternative to sugar and artificial sweetener</li><li>Can be used in cooking or consumed right off the spoon as part of a healthy, balanced diet</li></ul><p>Manuka Honey is farmed and harvested exclusively in the rural pastures of New Zealand. Manuka has been used by the indigenous Maori population for centuries. By boiling the leaves and inhaling the vapour, or by burning the bark and using the ashes on their skin, the Maori would utilise Manuka. </p><br><p>Each batch of Manuka Honey is tested by an internationally accredited New Zealand government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxa. The higher the number, the greater the level of activity. </p>",
    points: 64,
    promotions: [],
    name: "Holland & Barrett Extra Strength Glucosamine Chondroitin Complex 60 Caplets",
    id: "007060",
    brand: {
      name: "Manuka Lab",
      id: "8731",
      slug: "manuka-lab",
    },
    price: 16.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048842_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048842_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048842_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048842_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048842_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048842_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048842_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048842_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048842_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048842_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048842_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048842_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048842_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048842_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048842_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048842_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048842_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048842_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£24.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.9565,
    review_count: 23,
    description:
      "<ul><li><b>MGO 525 - Recommended if you previously bought 15+ UMF</b></li><li>100% New Zealand Manuka Honey with a delicious, natural taste.</li><li>Flavourful and versitile. Use as a beneficial ingredient in cooking.</li></ul><p>Pure Gold Manuka Honey is tested by an internationally accredited New Zealand Government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxal, the component that endows Manuka Honey with its unique antibacterial properties. The higher the number, the greater the activity. </p><br><F7p>Manuka Honey is formed in the rural pastures of New Zealand by bees that pollinate the ancient manuka bush. The manuka bush has been used medicinally by the indigenous Maori's for over 4000 years. Today, Manuka Honey is reowned for its unique properties, and is used as a natural alternative to artificial sweeteners and sugars, or taken right off the spoon as part of a healthy diet. </p>",
    points: 236,
    promotions: [],
    name: "Pure Gold Premium Select Manuka Honey MGO 525 250g",
    id: "048842",
    brand: {
      name: "Pure Gold",
      id: "299",
      slug: "pure-gold",
    },
    price: 59.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048843_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048843_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048843_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048843_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048843_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048843_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048843_B.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048843_B.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048843_B.jpg",
            resolution: 724,
          },
        ],
        group: "3",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048843_C.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048843_C.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048843_C.jpg",
            resolution: 724,
          },
        ],
        group: "4",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048843_D.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048843_D.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048843_D.jpg",
            resolution: 724,
          },
        ],
        group: "5",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048843_E.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048843_E.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048843_E.jpg",
            resolution: 724,
          },
        ],
        group: "6",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£13.00/100 g",
    quantity: {
      unit: "g",
      value: 500,
    },
    rating: 4.9565,
    review_count: 23,
    description:
      "<ul><li><b>MGO 525 - Recommended if you previously bought 15+ UMF</b></li><li>100% New Zealand Manuka Honey with a delicious, natural taste.</li><li>Flavourful and versitile. Use as a beneficial ingredient in cooking.</li></ul><p>Pure Gold Manuka Honey is tested by an internationally accredited New Zealand Government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxal, the component that endows Manuka Honey with its unique antibacterial properties. The higher the number, the greater the activity. </p><br><F7p>Manuka Honey is formed in the rural pastures of New Zealand by bees that pollinate the ancient manuka bush. The manuka bush has been used medicinally by the indigenous Maori's for over 4000 years. Today, Manuka Honey is reowned for its unique properties, and is used as a natural alternative to artificial sweeteners and sugars, or taken right off the spoon as part of a healthy diet. </p>",
    points: 256,
    promotions: [],
    name: "Pure Gold Premium Select Manuka Honey MGO 525 500g",
    id: "048843",
    brand: {
      name: "Pure Gold",
      id: "299",
      slug: "pure-gold",
    },
    price: 64.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/048840_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/048840_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/048840_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/048840_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/048840_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/048840_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£22.00/100 g",
    quantity: {
      unit: "g",
      value: 250,
    },
    rating: 4.8571,
    review_count: 28,
    description:
      "<ul><li><b>MGO 300 - Recommended if you previously bought 10+ UMF</b></li><li>100% New Zealand Manuka Honey with a delicious, natural taste.</li><li>Flavourful and versitile. Use as a beneficial ingredient in cooking.</li></ul><p>Pure Gold Manuka Honey is tested by an internationally accredited New Zealand Government approved laboratory for non-peroxide activity (NPA) and dietary methylglyoxal, the component that endows Manuka Honey with its unique antibacterial properties. The higher the number, the greater the activity. </p><br><p>Manuka Honey is formed in the rural pastures of New Zealand by bees that pollinate the ancient manuka bush. The manuka bush has been used medicinally by the indigenous Maori's for over 4000 years. Today, Manuka Honey is reowned for its unique properties, and is used as a natural alternative to artificial sweeteners and sugars, or taken right off the spoon as part of a healthy diet. </p>",
    points: 216,
    promotions: [],
    name: "Pure Gold Premium Select Manuka Honey MGO 300 250g",
    id: "048840",
    brand: {
      name: "Pure Gold",
      id: "299",
      slug: "pure-gold",
    },
    price: 54.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/014922_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/014922_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/014922_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/014922_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/014922_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/014922_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.20/100 ml",
    quantity: {
      unit: "ml",
      value: 250,
    },
    rating: 4.7778,
    review_count: 9,
    description:
      "<ul><li>Infusion of New Zealand Manuka Honey, Apple Cider Vinegar & Purified Water</li><li>2 teaspoons of Apple Cider Vinegar and Manuka Honey in every bottle</li><li>Contains \"The Mother\"</li></ul><p>Enjoy the benefits of Comvita's Manuka Honey & Apple Cider Vinegar in a refreshing, convenient drink with all natural ingredients.</p><p>Apple Cider Vinegar has been used for centuries and Manuka Honey is adored all over the world for it's unique properties. Using a simple recipe, Comvita has carefully crafted these natural ingredients into a great-tasting drink that is perfect after meals, or to refresh any time of day or night.</p>",
    points: 8,
    promotions: [],
    name: "Comvita Manuka Honey & Apple Cider Drinking Vinegar Natural 250ml",
    id: "014922",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 2.99,
  },
  {
    images: [
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/120/014921_A.jpg",
            resolution: 120,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/180/014921_A.jpg",
            resolution: 180,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/252/014921_A.jpg",
            resolution: 252,
          },
        ],
        group: "1",
      },
      {
        list: [
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/014921_A.jpg",
            resolution: 370,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/70/014921_A.jpg",
            resolution: 70,
          },
          {
            path: "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/014921_A.jpg",
            resolution: 724,
          },
        ],
        group: "2",
      },
    ],
    stock_status: "INSTOCK",
    price_per_uom: "£1.20/100 ml",
    quantity: {
      unit: "ml",
      value: 250,
    },
    rating: 4.3333,
    review_count: 6,
    description:
      "<ul><li>A simple infusion of New Zealand Manuka Honey, Apple Cider Vinegar, Purified Water & Natural Golden Kiwifruit Flavour</li><li>3 teaspoons of Apple Cider Vinegar and Manuka Honey in every bottle. </li><li>All natural ingredients, with no articifical sweeteners and no additives</li></ul><p>Enjoy the benefits of Comvita's Manuka Honey and Apple Cider Vinegar in a refreshing, convenient drink.</p><br><p>Apple Cider Vinegar has been used for centuries and Manuka Honey is adored all over the world for it's unique properties. Using a simple recipe, Comvita has carefully crafted these natural ingredients into a great-tasting drink that is perfect after meals, or to refresh any time of day or night.</p>",
    points: 8,
    promotions: [],
    name: "Comvita Apple Cider & Manuka Honey Drink Golden Kiwifruit 250ml",
    id: "014921",
    brand: {
      name: "Comvita",
      id: "261",
      slug: "comvita",
    },
    price: 2.99,
  },
];
