<template>
  <main class="about">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/about_idd/top1.png")' title="情報デザイン学科とは？" />
    <div class="about-item">
      <div class="about-item-img">
        <img src="@/assets/imgs/about_idd/image1.png">
      </div>
      <div class="about-item-text">
        <p class="about-item-title font-bunkyu-midashi">情報デザイン学科とは？</p>
        <p class="about-item-description">
          常日頃から情報に囲まれて生活している中から特に重要で伝えたい情報を受け手により分かりやすく、早く届くように情報を整理し、提供することである。主に伝える、届けることを重要視し、また、人とメディアとの中間役をも担う。</p>
      </div>
    </div>
    <div class="about-item">
      <div class="about-item-img">
        <img src="@/assets/imgs/about_idd/image2.png">
      </div>
      <div class="about-item-text">
        <p class="about-item-title font-bunkyu-midashi">何を学べるのか</p>
        <p class="about-item-description">
          情報デザインコースではプログラミング、グラフィック、展示・企画デザイン、UI/UXデザイン、映像の５つに大きく分けることができる。情報をただ伝えるのではなく、伝え方や何を通して届けるかについて学べる。伝えたい内容を深く掘り下げ、下調べを重ねたうえで自分の意見も交えてオリジナルを生み出す場となっている。
        </p>
      </div>
    </div>
    <div class="about-item">
      <div class="about-item-img">
        <img src="@/assets/imgs/about_idd/image3.png">
      </div>
      <div class="about-item-text">
        <p class="about-item-title font-bunkyu-midashi">授業の実態</p>
        <p class="about-item-description">
          演習コマと実習コマに分かれており、演習コマでは先生からポイントでデザインするうえでの重要事項を学べる。演習コマで学んだことを実践し、形にする。仕上がった課題を発表し、先生からアドバイスやフィードバックを貰い、更に良いものへと仕上げていく。
        </p>
      </div>
    </div>
    <BottomSpacer />
    <!--
    <p class="r1title">情報デザイン学科とは？</p>

    <p class="circle"></p>

    <p class="png1"></p>

    <p class="txt1">
      常日頃から情報に囲まれて生活している中から特に重要で伝えたい情報を受け手により分かりやすく、早く届くように情報を整理し、提供することである。主に伝える、届けることを重要視し、また、人とメディアとの中間役をも担う。</p>

    <p class="rec1"></p>

    <p class="l1title">何を学べるのか</p>

    <p class="txt2">
      情報デザインコースではプログラミング、グラフィック、展示・企画デザイン、UI/UXデザイン、映像の５つに大きく分けることができる。情報をただ伝えるのではなく、伝え方や何を通して届けるかについて学べる。伝えたい内容を深く掘り下げ、下調べを重ねたうえで自分の意見も交えてオリジナルを生み出す場となっている。
    </p>

    <p class="rec2"></p>

    <p class="circle2"></p>

    <p class="png2"></p>

    <p class="r2title">授業の実態</p>

    <p class="rec3"></p>

    <p class="txt3">
      演習コマと実習コマに分かれており、演習コマでは先生からポイントでデザインするうえでの重要事項を学べる。演習コマで学んだことを実践し、形にする。仕上がった課題を発表し、先生からアドバイスやフィードバックを貰い、更に良いものへと仕上げていく。
    </p>

    <p class="circle3"></p>

    <p class="png3"></p>
  -->
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
import BottomSpacer from '@/components/BottomSpacer.vue';

export default {
  name: 'AboutView',
  components: {
    HeaderComponent,
    FooterComponent,
    TopPlanetComponent,
    BottomSpacer
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.about {
  background-color: $color-bg;
  width: 100vw;

  .about-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;

    width: 80%;
    margin: 0 auto;
    padding: 32px;

    .about-item-img {
      width: 100%;
      max-width: $mid-width;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: $color-about-circle-bg;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
      }
    }

    .about-item-text {
      display: flex;
      flex-flow: column;

      border: 4px solid $white;
      border-radius: 70px;

      margin: 33px 0 33px 54px;
      padding: 0 54px 54px 54px;

      width: 100%;
      max-width: $mid-width;


      .about-item-title {
        font-size: $font-sm;
        margin: 15px 0 20px 0;
        text-align: left;
      }

      .about-item-description {
        font-size: $font-s;
        margin: 0;
        line-height: $font-m;
        text-align: left;
      }
    }
  }

  /*

  .bg {
    left: 100px
  }

  .circle {
    position: absolute;
    width: 507px;
    height: 517px;
    left: 137px;
    top: 541px;
    border-radius: 50%;
    background: #F0F9FA;
  }

  .png1 {
    position: absolute;
    width: 459px;
    height: 327px;
    left: 161px;
    top: 638px;

    background: url(../assets/imgs/about_idd/image1.png);
    opacity: 0.7;
    border-radius: 73px;
  }

  .r1title {
    position: absolute;
    width: 421px;
    height: 83px;
    left: 734px;
    top: 534px;

    font-family: 'Toppan Bunkyu Midashi Gothic';
    font-style: normal;
    font-weight: 900;
    font-size: $font-m;
    line-height: $font-m;

    display: flex;
    align-items: center;

    color: $white;
  }

  .txt1 {
    position: absolute;
    width: 470px;
    height: 470px;
    left: 777px;
    top: 565px;

    font-family: 'Toppan Bunkyu Gothic';
    font-style: normal;
    font-weight: 600;
    font-size: $font-sm;
    line-height: $font-m;
    display: flex;
    align-items: center;

    color: $white;
  }

  .rec1 {
    position: absolute;
    width: 580px;
    height: 365px;
    left: 716px;
    top: 617px;

    border: 4px solid $white;
    border-radius: 70px;
  }

  .l1title {
    position: absolute;
    width: 421px;
    height: 83px;
    left: 152px;
    top: 1087px;

    font-family: 'Toppan Bunkyu Midashi Gothic';
    font-style: normal;
    font-weight: 900;
    font-size: $font-m;
    line-height: $font-x;
    display: flex;
    align-items: center;

    color: $white;
  }

  .txt2 {
    position: absolute;
    width: 470px;
    height: 470px;
    left: 195px;
    top: 1118px;

    font-family: 'Toppan Bunkyu Gothic';
    font-style: normal;
    font-weight: 600;
    font-size: $font-sm;
    line-height: $font-m;
    display: flex;
    align-items: center;

    color: $white;
  }

  .rec2 {
    position: absolute;
    width: 580px;
    height: 365px;
    left: 134px;
    top: 1170px;

    border: 4px solid $white;
    border-radius: 70px;
  }

  .circle2 {
    position: absolute;
    width: 507px;
    height: 517px;
    left: 787px;
    top: 1112px;
    border-radius: 50%;

    background: #F0EBF4;
    mix-blend-mode: luminosity;
  }

  .png2 {
    position: absolute;
    width: 459px;
    height: 327px;
    left: 811px;
    top: 1207px;

    background: url(../assets/imgs/about_idd/image2.png);
    opacity: 0.7;
    border-radius: 73px;
  }

  .r2title {
    position: absolute;
    width: 351px;
    height: 28px;
    left: 735px;
    top: 1683px;

    font-family: 'Toppan Bunkyu Midashi Gothic';
    font-style: normal;
    font-weight: 900;
    font-size: $font-m;
    line-height: $font-x;
    display: flex;
    align-items: center;

    color: $white;
  }

  .rec3 {
    position: absolute;
    width: 580px;
    height: 365px;
    left: 717px;
    top: 1741px;

    border: 4px solid $white;
    border-radius: 70px;
  }

  .txt3 {
    position: absolute;
    width: 470px;
    height: 470px;
    left: 774px;
    top: 1680px;

    font-family: 'Toppan Bunkyu Gothic';
    font-style: normal;
    font-weight: 600;
    font-size: $font-sm;
    line-height: $font-m;
    display: flex;
    align-items: center;

    color: $white;
  }

  .circle3 {
    position: absolute;
    width: 507px;
    height: 517px;
    left: 138px;
    top: 1641px;
    border-radius: 50%;

    background: #E7DAD3;
    mix-blend-mode: normal;
  }

  .png3 {
    position: absolute;
    width: 459px;
    height: 327px;
    left: 162px;
    top: 1736px;

    background: url(../assets/imgs/about_idd/image33.png);
    opacity: 0.7;
    border-radius: 73px;
  }
  */
}
</style>
