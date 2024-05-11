type figureskater = {
  id: number;
  name: string;
  sex?: string;
  country?: string;
  favProgram?: string;
};

export const dataFigureskaters: figureskater[] = [
  {
    id: 1,
    name: "Yuzuru Hanyu",
    sex: "Men",
    country: "Japan",
    favProgram: "Hope and Legacy",
  },
  {
    id: 2,
    name: "Keegan Messing",
    sex: "Men",
    country: "Canadia",
    favProgram: "Home by Phillip Phillips",
  },
  {
    id: 3,
    name: "Kaori Sakamoto",
    sex: "Women",
    country: "Japan",
    favProgram: "Elastic Heart",
  },
  {
    id: 4,
    name: "Yuna Kim",
    sex: "Women",
    country: "Republic of Korea",
    favProgram: "Someone Like You",
  },
];
