<template>
  <main class="event">
    <TopPlanetComponent :imgPath='require("@/assets/imgs/event/top5.png")' title="イベント情報" />
    <div class="circles">
      <div class="circle circle0 font-bunkyu-midashi"><a href="/event-detail/oc">オープンキャンパス</a></div>
      <div class="circle circle1 font-bunkyu-midashi"><a href="/event-detail/geisai">多摩美術大学<br>芸術祭</a></div>
      <div class="circle circle2 font-bunkyu-midashi"><a href="/event-detail/sotsusei">卒業制作展</a></div>
      <div class="circle circle3 font-bunkyu-midashi"><a href="/access">アクセス</a></div>
    </div>
    <HeaderComponent />
    <FooterComponent />
  </main>
</template>

<script>
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'EventView',
  components: {
    TopPlanetComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.event {
  width: 100vw;
  background-color: $color-bg;
  color: $white;

  .circles {
    position: relative;
    z-index: 2;
    display: flex;
    flex-flow: column;
    align-items: center;

    margin-top: -200px;
    margin-left: -250px;
    margin-bottom: 56px;

    .circle {
      animation: eventFocusScaleOut 0.5s forwards;

      a {
        width: 500px;
        height: 500px;
        border: 4px solid $white;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        color: $white;
        text-decoration: none;
        font-size: $font-m;
      }
    }

    .circle:hover {
      animation: eventFocusScaleOn 0.5s forwards;
    }

    .circle0,
    .circle2 {
      margin-left: 750px;
    }
  }
}
</style>
