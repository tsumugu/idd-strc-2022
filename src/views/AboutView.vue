<template>
  <main class="about">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/about_idd/top1.png")' title="情報デザインとは？" />
    <div class="about-item">
      <div class="about-item-img">
        <img src="@/assets/imgs/about_idd/image1.png">
      </div>
      <div class="about-item-text font-bunkyu-midashi">
        <div>
          <p class="about-item-title">情報デザインとは？</p>
        </div>
        <p class="about-item-description">
          常日頃から情報に囲まれて生活している中から特に重要で伝えたい情報を受け手により分かりやすく、早く届くように情報を整理し、提供することである。主に伝える、届けることを重要視し、また、人とメディアとの中間役をも担う。</p>
      </div>
    </div>
    <div class="about-item">
      <div class="about-item-img">
        <img src="@/assets/imgs/about_idd/image2.png">
      </div>
      <div class="about-item-text font-bunkyu-midashi">
        <div>
          <p class="about-item-title">何を学べるのか</p>
        </div>
        <p class="about-item-description">
          情報デザインコースではプログラミング、グラフィック、展示・企画デザイン、UI/UXデザイン、映像の５つに大きく分けることができる。情報をただ伝えるのではなく、伝え方や何を通して届けるかについて学べる。伝えたい内容を深く掘り下げ、下調べを重ねたうえで自分の意見も交えてオリジナルを生み出す場となっている。
        </p>
      </div>
    </div>
    <div class="about-item">
      <div class="about-item-img">
        <img src="@/assets/imgs/about_idd/image3.png">
      </div>
      <div class="about-item-text font-bunkyu-midashi">
        <div>
          <p class="about-item-title">授業の実態</p>
        </div>
        <p class="about-item-description">
          演習コマと実習コマに分かれており、演習コマでは先生からポイントでデザインするうえでの重要事項を学べる。演習コマで学んだことを実践し、形にする。仕上がった課題を発表し、先生からアドバイスやフィードバックを貰い、更に良いものへと仕上げていく。
        </p>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';

export default {
  name: 'AboutView',
  components: {
    HeaderComponent,
    FooterComponent,
    TopPlanetComponent
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import "@/assets/scss/_breakpoint.scss";
@import "@/assets/scss/_mixin.scss";

.about {
  background-color: $color-bg;
  width: 100vw;

  .about-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;

    text-align: left;

    width: 80%;
    margin: 0 auto;
    padding: 32px;

    @include mq(lg) {
      margin-bottom: 64px;
    }

    @include mq(lg) {
      padding: 0;
      flex-flow: column;
    }

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

      @include mq(lg) {
        width: 80%;
      }
    }

    .about-item-text {
      display: flex;
      flex-flow: column;

      border-radius: 70px;

      margin: 33px 0 33px 54px;
      padding: 0 54px 54px 54px;

      @include mq(lg) {
        margin: 0;
        padding: 0;
      }

      width: 100%;
      max-width: $mid-width;


      .about-item-title {
        display: inline-block;
        font-size: $font-m;
        margin: 15px 0 20px 0;
        text-align: left;
        border-bottom: 4px solid #ffffff;
        margin-bottom: 32px;

        @include mq(lg) {
          font-size: $font-sm;
        }
      }

      .about-item-description {
        font-size: $font-sm;

        @include mq(lg) {
          font-size: $font-s;
        }

        margin: 0;
        line-height: $font-m;
        text-align: left;
      }
    }
  }
}
</style>
