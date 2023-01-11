<template>
  <main class="event-detail">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/event/top5.png")' title="イベント情報" />
    <div class="event-detail-inner">
      <p class="event-detail-inner-title font-bunkyu-midashi">{{ eventName }}</p>
      <img :src=bannerImg class="event-detail-inner-banner" />
      <div class="event-detail-inner-about font-bunkyu-midashi">
        <!-- OC -->
        <section class="about-oc" v-show="event == 'oc'">
          <div>
            <p>
              今年の多摩美術大学オープンキャンパスは、夏と秋の2回にわたって開催。さらにWEB版オープンキャンパスも開催します。
              本学で学ぶ分野を理解する機会、また進路学習の一環としてご活用ください。
              （コロナ感染症の状況によって予定が変更となる可能性があります。必ず事前にオープンキャンパス特設サイトをご確認下さい）
            </p>
            <p>
              情報デザインコースでは授業で制作した作品の展示をメインに、情報デザインコース進学相談会も開催されました。
              またオンラインの学科紹介、入試解説（2021）はいつでも閲覧することができます。
            </p>
          </div>
          <div class="img-area">
            <div><img src="@/assets/imgs/event/imgs/oc1.jpg"></div>
            <div><img src="@/assets/imgs/event/imgs/oc2.jpg"></div>
          </div>
        </section>
        <!-- 芸祭 -->
        <section class="about-geisai" v-show="event == 'geisai'">
          <div>
            <p>
              本学の学園祭は、その特質から「芸術祭」と称して、毎秋、全学生の自主的な創意と協力によって行われています。
              日頃の制作の成果を発表する展示や、内装外装にも力の入った模擬店は一般の方々にも人気を呼んでいます。
              その他、特設ステージでのゲストによる講演やパフォーマンス、学生の企画したイベントも行われています。
              （開催内容は年度により異なります。詳しくは下記「芸術祭の公式サイト」をご覧ください）
            </p>
            <p>
              情報デザインコースの学生が開催しているフリーマーケットもありますのでぜひお立ち寄りください。
            </p>
          </div>
          <div>
            <p>進学相談会 in 芸術祭</p>
            <p>
              芸術祭期間中、進学相談コーナーを設けます。入試参考作品展示、大学職員による入試概要や奨学金などの進学に関する個別相談、各種資料の配布を行います。
              （教員の参加がないため、持参作品等の講評は行いません）
            </p>
          </div>
          <div class="img-area">
            <div><img src="@/assets/imgs/event/imgs/geisai1.jpg"></div>
            <div><img src="@/assets/imgs/event/imgs/geisai2.jpg"></div>
          </div>
        </section>
        <!-- 卒制展 -->
        <section class="about-sotsusei" v-show="event == 'sotsusei'">
          <div>
            <p>
              本年度の卒業・修了制作展は、学科･専攻ごとに1月と3月の2回に分けて、八王子キャンパスにて開催いたします。
              また、学生たちが自主的に企画した独自の展示や個人･グループによる展示が、都内および神奈川県内のアートスペース
              各所で行われる予定です（スケジュールは今後随時公開します）。
              現代社会へ向けて発信する学生たちのデビュー作を、ぜひ会場で体感してください。
              みなさまのご来場を心よりお待ちしております。
            </p>
          </div>
          <div class="img-area">
            <div><img src="@/assets/imgs/event/imgs/sotsusei1.jpg"></div>
            <div><img src="@/assets/imgs/event/imgs/sotsusei2.jpg"></div>
          </div>
        </section>
      </div>
      <div class="event-detail-inner-otherevent font-bunkyu-midashi">
        <p class="otherevent-title">その他のイベント</p>
        <div class="circles">
          <div class="circle-wrapper" v-show="event != 'oc'">
            <div class="circle"><a href="/event-detail/oc">オープンキャンパス</a></div>
          </div>
          <div class="circle-wrapper" v-show="event != 'sotsusei'">
            <div class="circle"><a href="/event-detail/sotsusei">卒業制作展</a></div>
          </div>
          <div class="circle-wrapper" v-show="event != 'geisai'">
            <div class="circle"><a href="/event-detail/geisai">芸術祭</a></div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';

const events = {
  "oc": {
    name: "オープンキャンパス",
    img: require("@/assets/imgs/event/imgs/oc_banner.png")
  },
  "geisai": {
    name: "芸術祭",
    img: require("@/assets/imgs/event/imgs/geisai_banner.png")
  },
  "sotsusei": {
    name: "卒業制作展",
    img: require("@/assets/imgs/event/imgs/sotsusei_banner.png")
  },
};

export default {
  name: 'EventDetailView',
  components: {
    HeaderComponent,
    FooterComponent,
    TopPlanetComponent
  },
  data() {
    return {
      event: null,
      eventName: null,
      bannerImg: null
    };
  },
  mounted: function () {
    this.event = this.$route.params.eventname;
    if (this.event != undefined) {
      const eventInfo = events[this.event];
      if (eventInfo != undefined) {
        this.eventName = eventInfo.name;
        this.bannerImg = eventInfo.img;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.event-detail {
  width: 100vw;
  background-color: $color-bg;
  color: $white;
  display: flex;
  align-items: center;
  flex-flow: column;

  .event-detail-inner {
    position: relative;
    z-index: 2;

    width: 70vw;

    margin-top: -200px;

    .event-detail-inner-title,
    .otherevent-title {
      font-size: $font-m;
      margin: 0 0 56px 56px;
      text-align: left;
    }

    .event-detail-inner-banner {
      width: 100%;
    }

    .event-detail-inner-about {
      text-align: left;

      margin-bottom: 56px;

      p {
        font-size: $font-s;
        margin: calc($font-s * 2) 0 calc($font-s * 2) 0;
      }

      .img-area {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 70px;
        margin: calc($font-s * 3) 0 calc($font-s * 3) 0;

        div {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 100%;
          }
        }
      }
    }

    .event-detail-inner-otherevent {
      .circles {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .circle-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;

          .circle {
            animation: eventFocusScaleOut 0.5s forwards;

            a {
              width: 345px;
              height: 345px;
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
        }
      }
    }
  }
}
</style>
