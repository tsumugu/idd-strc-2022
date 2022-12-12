<template>
  <div class="other-classes">
    <img :src="imgs.img" v-for="imgs in classes" :key="imgs.className">
  </div>
</template>

<script>
export default {
  name: 'OtherClassesComponent',
  props: ["classNames"],
  data() {
    return {
      classes: [
        {
          className: "UI/UXデザイン",
          img: require("@/assets/imgs/shindan/class/ui.png")
        },
        {
          className: "情報設計演習",
          img: require("@/assets/imgs/shindan/class/jouhou.png")
        },
        {
          className: "インフォグラフィック演習",
          img: require("@/assets/imgs/shindan/class/info.png")
        },
        {
          className: "文字表現演習",
          img: require("@/assets/imgs/shindan/class/moji.png")
        },
        {
          className: "インタラクティブ演習",
          img: require("@/assets/imgs/shindan/class/intara.png")
        },
        {
          className: "プログラミング演習",
          img: require("@/assets/imgs/shindan/class/programing.png")
        },
        {
          className: "演出表現演習",
          img: require("@/assets/imgs/shindan/class/ensyutu.png")
        },
        {
          className: "ストーリーテリング演習",
          img: require("@/assets/imgs/shindan/class/sutoteri.png")
        },
        {
          className: "コンテンツデザイン演習",
          img: require("@/assets/imgs/shindan/class/kondeza.png")
        },
        {
          className: "知識と表現演習",
          img: require("@/assets/imgs/shindan/class/tisiki.png")
        },
        {
          className: "3D表現演習",
          img: require("@/assets/imgs/shindan/class/3d.png")
        },
        {
          className: "展示計画演習",
          img: require("@/assets/imgs/shindan/class/tenji.png")
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.other-classes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  img {
    width: 30%;
  }
}
</style>
