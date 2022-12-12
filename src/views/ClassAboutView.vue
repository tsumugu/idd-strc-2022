<template>
  <main class="class-about font-bunkyu-midashi">
    <HeaderComponent />
    <div class="class-about-bg">
      <img :src=planetImg>
    </div>
    <div class="class-about-topmargin">
      <div class="class-about-inner">
        <div class="class-about-description-area">
          <div class="class-about-description-area-inner wide-width">
            <p class="midashi">授業説明</p>
            <p>AdobeのXDを使って自分の理想のアプリをデザインすることができる授業<br>XDの使い方を知らなくても、授業内で丁寧に説明してくれる為、使い方で困る事はあまり無い</p>
          </div>
        </div>
        <div class="class-about-description-area">
          <div class="class-about-description-area-inner min-width">
            <p class="midashi">経験者は語る</p>
            <p>
              商業用にデザインするには何を気を付けたら良いのか、どうやってデザインされているのかも教えてくれる為、デザインがあまり得意ではない人でも何処さえ気を付けていれば良いのか分かることができる<br><br>操作ボタンや細かい物をデザインするのが好きな人、スマホアプリを一度作ってみたいと思った人にはオススメ
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="class-about-facility-topmargin">
      <p class="midashi">この授業で使用できる施設や機材</p>
      <p>
        <img src="@/assets/imgs/shindan/facilities/camera.png">
      </p>
    </div>
    <div class="other-class">
      <p class="midashi">他の授業も見てみる？</p>
      <OtherClassesComponent />
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import OtherClassesComponent from '@/components/OtherClassesComponent.vue';

export default {
  name: 'ClassAboutView',
  components: {
    OtherClassesComponent,
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      planetImg: require("@/assets/imgs/shindan/class/ui.png")
    };
  },
  mounted: function () {
    console.log(this.$route.params.classname);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.class-about {
  color: $white;
  background-color: $color-bg;
  width: 100vw;
  height: 400vh;

  display: flex;
  justify-content: center;

  .class-about-topmargin {
    width: 75vw;
    position: absolute;
    top: 30vh;
  }

  .class-about-facility-topmargin {
    position: absolute;
    top: 110vh;

    width: 100vw;

    background-color: rgba(163, 136, 199, 0.35);

    .midashi {
      font-size: $font-sm;
    }
  }

  .other-class {
    position: absolute;
    top: 150vh;

    .midashi {
      font-size: $font-m;
    }
  }

  .class-about-bg {
    position: relative;
    top: -100vh;

    img {
      width: 100%;
    }
  }

  .class-about-description-area {

    .midashi {
      font-size: $font-sm;
    }

    .min-width {
      width: 45vw;
    }

    .wide-width {
      width: 75vw;
    }

    margin: 30px;

    .class-about-description-area-inner {
      border-radius: 120px;
      padding: 30px;
      background-color: rgba(163, 136, 199, 0.35);
    }
  }
}
</style>
