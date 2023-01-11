<template>
  <main class="access">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/event/top5.png")' title="アクセス" />
    <div class="access-inner">
      <div class="access-inner-campus">
        <div class="access-inner-campus-imgwrapper">
          <img src="@/assets/imgs/event/imgs/map1.png">
        </div>
        <div class="access-inner-campus-texts font-bunkyu-midashi">
          <p class="access-inner-campus-title">八王子キャンパス</p>
          <p>
            新宿駅から京王線で橋本駅まで<br>
            最短３２分（京王ライナー利用の場合）<br>
            新宿駅からJR中央線で八王子駅まで<br>
            最短３８分（中央特快利用の場合）
          </p>
          <p>
            橋本駅北口バスロータリー6番<br>
            乗り場から神奈川中央交通バス<br>
            「多摩美術大学行」で約8分。<br>
            現金運賃＝180円／IC運賃＝178円
          </p>
        </div>
      </div>
      <div class="access-inner-campusaccess">
        <div class="access-inner-campusaccess-texts font-bunkyu-midashi">
          <p class="access-inner-campusaccess-title">八王子キャンパスへの交通</p>
          <p>
            JR横浜線・京王相模原線橋本駅北口から<br>
            神奈川中央交通バス「多摩美術大学行」で約8分。<br>
            または、 JR八王子駅南口から京王バスで約20分。
          </p>
          <p>
            八王子キャンパス（大学院・美術学部）<br>
            192-0394 東京都八王子市鑓水2-1723<br>
            Tel. 042-676-8611（代）
          </p>
        </div>
        <div class="access-inner-campusaccess-imgwrapper">
          <img src="@/assets/imgs/event/imgs/map2.png">
        </div>
      </div>
      <div class="access-inner-bus font-bunkyu-midashi">
        <p>路線バス利用案内は下記ページをご覧ください</p>
        <div class="circles">
          <div><a href="/bus/hashimoto/from">橋本駅<br>バスダイヤ</a></div>
          <div><a href="/bus/hachioji/from">八王子駅<br>バスダイヤ</a></div>
        </div>
      </div>
      <OtherEventComponent class="access-inner-event" />
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
import OtherEventComponent from '@/components/OtherEventComponent.vue';

export default {
  name: 'AccessView',
  components: {
    HeaderComponent,
    FooterComponent,
    TopPlanetComponent,
    OtherEventComponent
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.access {
  width: 100vw;
  background-color: $color-bg;
  color: $white;

  .access-inner {

    position: relative;
    z-index: 2;
    margin-top: -100px;

    .access-inner-campus {
      grid-template-columns: 1fr 30%;
      margin: 0 auto 120px auto;
    }

    .access-inner-campusaccess {
      grid-template-columns: 30% 1fr;
      margin-bottom: 60px;
      margin: 0 auto 60px auto;
    }

    .access-inner-campus,
    .access-inner-campusaccess {
      width: 85%;
      display: grid;
      gap: 70px;

      .access-inner-campus-imgwrapper,
      .access-inner-campusaccess-imgwrapper,
      .access-inner-campusaccess {
        img {
          width: 100%;
          background-color: $white;
        }
      }

      .access-inner-campus-texts,
      .access-inner-campusaccess-texts {
        text-align: left;

        .access-inner-campus-title,
        .access-inner-campusaccess-title {
          font-size: $font-m;
          margin: 0 0 32px 0;
        }

        p {
          font-size: $font-s;
          margin: 0;
        }
      }
    }

    .access-inner-bus {
      top: 120px;

      p {
        font-size: $font-s;
        margin: 32px;
      }

      .circles {
        display: flex;
        justify-content: center;
        gap: 60px;

        a {
          width: 200px;
          height: 200px;
          border: 4px solid $white;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;

          color: $white;
          text-decoration: none;
          font-size: $font-sm;

          background-color: $color-about-shindan;
        }

        a:hover {
          background-color: $color-about-shindan-selected;
        }
      }
    }

    .access-inner-event {
      margin-top: 120px;
      margin-bottom: 60px;
    }
  }
}
</style>
