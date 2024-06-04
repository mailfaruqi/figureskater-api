export type FigureSkater = {
  id: number;
  name: string;
  country?: string;
  freePrograms?: string[];
};

export const dataFigureskaters: FigureSkater[] = [
  {
    id: 1,
    name: "Yuzuru Hanyu",
    country: "Japan",
    freePrograms: [
      "Ten to Chi to (Heaven and Earth) by Isao Tomita",
      "Hope and Legacy by Joe Hisaishi",
    ],
  },
  {
    id: 2,
    name: "Keegan Messing",
    country: "Canada",
    freePrograms: [
      "Home by Drew Pearson, Greg Holden",
      "Lullaby for an Angel by Karl Hugo",
    ],
  },
  {
    id: 3,
    name: "Kaori Sakamoto",
    country: "Japan",
    freePrograms: ["Elastic Heart by Sia", "Lauryn Hill Medley by Lauryn"],
  },
  {
    id: 4,
    name: "Yuna Kim",
    country: "South Korea",
    freePrograms: [
      "Les Misérables by Claude-Michel Schönberg",
      "Homage to Korea",
    ],
  },
];
