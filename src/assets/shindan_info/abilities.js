import { classes } from "./classes";

export const abilities = [
  {
    genreName: "プログラミング",
    score: {
      "0": 1, // 画力は5段階中の1という意味
      "1": 5,
      "2": 3,
      "3": 5,
      "4": 1
    },
    classes: [
      classes.intara,
      classes.jouhou,
      classes.programing,
      classes.tisiki,
      classes["3d"]
    ]
  },
  {
    genreName: "平面的なグラフィックデザイン",
    score: {
      "0": 5,
      "1": 2,
      "2": 2,
      "3": 3,
      "4": 4
    },
    classes: [
      classes.ui,
      classes.moji,
      classes.info,
      classes.programing,
      classes.tenji
    ]
  },
  {
    genreName: "UI/UX",
    score: {
      "0": 2,
      "1": 4,
      "2": 4,
      "3": 5,
      "4": 4
    },
    classes: [
      classes.ui,
      classes.tenji,
      classes.jouhou
    ]
  },
  {
    genreName: "立体的な表現",
    score: {
      "0": 3,
      "1": 4,
      "2": 2,
      "3": 5,
      "4": 5
    },
    classes: [
      classes.intara,
      classes.tenji,
      classes.kondeza,
      classes.tisiki,
      classes["3d"]
    ]
  },
  {
    genreName: "映像制作",
    score: {
      "0": 1,
      "1": 3,
      "2": 3,
      "3": 3,
      "4": 5
    },
    classes: [
      classes.sutoteri,
      classes.ensyutu,
      classes.kondeza
    ]
  },
  {
    genreName: "展示",
    score: {
      "0": 3,
      "1": 5,
      "2": 5,
      "3": 3,
      "4": 5
    },
    classes: [
      classes.tenji,
      classes.tisiki,
      classes.intara
    ]
  },
  {
    genreName: "視覚伝達表現",
    score: {
      "0": 5,
      "1": 4,
      "2": 2,
      "3": 4,
      "4": 5
    },
    classes: [
      classes.tisiki,
      classes.sutoteri,
      classes.tenji,
      classes.info
    ]
  }
];