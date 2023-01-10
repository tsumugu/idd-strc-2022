<template>
  <main class="event">
    <TopPlanetComponent :imgPath='require("@/assets/imgs/event/top5.png")' title="イベント情報" />
    <div class="circles">
      <div class="circle circle0 font-bunkyu-midashi"><a href="/event-detail/oc">オープンキャンパス</a></div>
      <div class="circle circle1 font-bunkyu-midashi"><a href="/event-detail/geisai">多摩美術大学<br>芸術祭</a></div>
      <div class="circle circle2 font-bunkyu-midashi"><a href="/event-detail/sotsusei">卒業制作展</a></div>
      <div class="circle circle3 font-bunkyu-midashi"><a href="/access">アクセス</a></div>
    </div>
    <BottomSpacer />
    <HeaderComponent />
    <FooterComponent />
    <!--
    <section class="event-top" v-show="isShowTop">
      <TopPlanetComponent :imgPath='require("@/assets/imgs/event/top5.png")' title="" />
      <p class="title">ー イベント情報 ー</p>

      <div class="circle1"></div>

      <div class="text1"></div>
      <p class="text1"><a href="/event/detail/oc">オープンキャンパス</a></p>

      <div class="circle2"></div>

      <p class="text2"><a href="/event/detail/geisai">多摩美術大学<br>芸術祭</a></p>

      <div class="circle3"></div>

      <p class="text3"><a href="/event/detail/sotsusei">卒業制作展</a></p>

      <div class="circle4"></div>

      <p class="text4"><a href="/event/access">アクセス</a></p>
    </section>
    <section class="event-details" v-show="isShowDetail">
      <section class="event-oc" v-show="isShowDetailOC">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">

        <div class="title"></div>
        <p class="title">ー イベント情報 ー</p>

        <div class="subtitle"></div>
        <p class="subtitle">オープンキャンパス</p>

        <div class="int"></div>
        <p class="int"></p>

        <div class="text1"></div>
        <p class="text1">
          今年の多摩美術大学オープンキャンパスは、夏と秋の2回にわたって開催。さらにWEB版オープンキャンパスも開催します。<br>本学で学ぶ分野を理解する機会、また進路学習の一環としてご活用ください。<br><br>（コロナ感染症の状況によって予定が変更となる可能性があります。必ず事前にオープンキャンパス特設サイトをご確認下さい）情報デザインコースでは授業で制作した作品の展示をメインに、情報デザインコース進学相談会も開催されました。<br><br>

          またオンラインの学科紹介、入試解説（2021）はいつでも閲覧することができます。
        </p>

        <div class="left"></div>
        <p class="left"></p>

        <div class="right"></div>
        <p class="right"></p>

        <div class="text2"></div>
        <p class="text2">その他のイベント</p>

        <div class="text4"></div>
        <p class="text4"><a href="/event/access">アクセス</a></p>

        <div class="circle1"></div>

        <div class="a"></div>
        <p class="a"><a href="/event/detail/geisai">芸術祭</a></p>

        <div class="circle2"></div>

        <div class="b"></div>
        <p class="b"><a href="/event/detail/sotsusei">卒業制作展</a></p>
      </section>
      <section class="event-geisai" v-show="isShowDetailGeisai">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">

        <div class="title"></div>
        <p class="title">ー イベント情報 ー</p>

        <div class="subtitle"></div>
        <p class="subtitle">多摩美術大学芸術祭</p>

        <div class="png1"></div>
        <p class="png1"></p>

        <div class="text1"></div>
        <p class="text1">
          本学の学園祭は、その特質から「芸術祭」と称して、毎秋、全学生の自主的な創意と協力によって行われています。日頃の制作の成果を発表する展示や、内装外装にも力の入った模擬店は一般の方々にも人気を呼んでいます。その他、特設ステージでのゲストによる講演やパフォーマンス、学生の企画したイベントも行われています。

          <br><br>（開催内容は年度により異なります。詳しくは下記「芸術祭の公式サイト」をご覧ください）

          <br><br><br><br>情報デザインコースの学生が開催しているフリーマーケットもありますのでぜひお立ち寄りください。
        </p>

        <div class="text2"></div>
        <p class="text2">進学相談会 in 芸術祭</p>

        <div class="text3"></div>
        <p class="text3">芸術祭期間中、進学相談コーナーを設けます。入試参考作品展示、大学職員による入試概要や奨学金などの進学に関する個別相談、各種資料の配布を行います。
          <br>（教員の参加がないため、持参作品等の講評は行いません）
        </p>

        <div class="png2"></div>
        <p class="png2"></p>

        <div class="png3"></div>
        <p class="png3"></p>

        <div class="text4"></div>
        <p class="text4">その他のイベント</p>

        <p class="text5"><a href="/event/detail/oc">オープンキャンパス</a></p>

        <div class="circle1"></div>

        <p class="text6"><a href="/event/detail/sotsusei">卒業制作展</a></p>

        <div class="circle2"></div>
      </section>
      <section class="event-sotsusei" v-show="isShowDetailSotsusei">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">

        <div class="title"></div>

        <p class="title">ー イベント情報 ー</p>

        <div class="subtitle"></div>
        <p class="subtitle">卒業制作展</p>

        <div class="png1"></div>
        <p class="png1"></p>

        <div class="text1"></div>
        <p class="text1">
          本年度の卒業・修了制作展は、学科･専攻ごとに1月と3月の2回に分けて、八王子キャンパスにて開催いたします。<br>また、学生たちが自主的に企画した独自の展示や個人･グループによる展示が、都内および神奈川県内のアートスペース<br>各所で行われる予定です（スケジュールは今後随時公開します）。<br>現代社会へ向けて発信する学生たちのデビュー作を、ぜひ会場で体感してください。<br>みなさまのご来場を心よりお待ちしております。
        </p>

        <div class="png2"></div>
        <p class="png2"></p>

        <div class="png3"></div>
        <p class="png3"></p>

        <div class="sub2"></div>
        <p class="sub2">その他のイベント</p>

        <div class="leftmaru"></div>

        <div class="lefttext"></div>
        <p class="lefttext"><a href="/event/detail/oc">オープンキャンパス</a></p>

        <div class="rightmaru"></div>

        <div class="righttext"></div>
        <p class="righttext"><a href="/event/detail/geisai">芸術祭</a></p>

      </section>
    </section>
    <section class="event-access" v-show="isShowAccess">
      <div class="wakusei"></div>
      <img src="@/assets/imgs/event/boke.png">
      <p class="title">－ アクセス －</p>

      <div class="rec1"></div>
      <p class="rec1"></p>

      <div class="map1"></div>
      <p class="map1"></p>

      <div class="map2"></div>
      <p class="map2"></p>

      <div class="midashi1"></div>
      <p class="midashi1">八王子キャンパス</p>

      <div class="text1"></div>
      <p class="text1">
        新宿駅から京王線で橋本駅まで<br>最短３２分（京王ライナー利用の場合）<br>新宿駅からJR中央線で八王子駅まで<br>最短３８分（中央特快利用の場合）<br>橋本駅北口バスロータリー6番<br>乗り場から神奈川中央交通バス<br>「多摩美術大学行」で約8分。<br>現金運賃＝180円／IC運賃＝178円
      </p>

      <div class="midashi2"></div>
      <p class="midashi2">八王子キャンパスへの交通</p>

      <div class="text2"></div>
      <p class="text2">JR横浜線・京王相模原線橋本駅北口から<br>神奈川中央交通バス「多摩美術大学行」で約8分。<br>または、
        JR八王子駅南口から京王バスで約20分。<br><br><br>八王子キャンパス（大学院・美術学部）<br>192-0394 東京都八王子市鑓水2-1723<br>Tel. 042-676-8611（代）</p>

      <div class="midashi3"></div>
      <p class="midashi3">路線バス利用案内は下記ページをご覧ください</p>

      <div class="maru1"></div>

      <div class="left1"></div>
      <p class="left1"><a href="/event/bus/fromhashimoto">橋本駅<br>バスダイヤ</a></p>

      <div class="maru2"></div>

      <div class="right1"></div>
      <p class="right1"><a href="/event/bus/fromhachioji">八王子駅<br>バスダイヤ</a></p>

      <div class="midashi4"></div>
      <p class="midashi4">ー イベント －</p>

      <div class="maru3"></div>

      <p class="l1"><a href="/event/detail/oc">オープン<br>キャンパス</a></p>

      <div class="maru4"></div>

      <p class="center"><a href="/event/detail/geisai">芸術祭</a></p>

      <div class="maru5"></div>

      <p class="r1"><a href="/event/detail/sotsusei">卒業制作展</a></p>
    </section>
    <section class="event-bus" v-show="isShowBus">
      <section class="event-bus-from-hachioji" v-show="isShowBusFromHachioji">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">


        <div class="title"></div>
        <p class="title">－ 路線バス利用案内 －</p>

        <div class="subtitle"></div>
        <p class="subtitle">八王子駅バスダイヤ</p>

        <div class="maru1"></div>

        <div class="l1text"></div>
        <p class="l1text">八王子駅発</p>

        <div class="maru2"></div>

        <div class="r1text"></div>
        <p class="r1text"><a href="/event/bus/tohachioji">多摩美術<br>大学発</a></p>

        <div class="midashi1"></div>
        <p class="midashi1">八王子駅南口発→急行 多摩美術大学行（八70系統）</p>

        <div class="png1"></div>

        <div class="midashi2"></div>
        <p class="midashi2">八王子駅バス乗り場</p>

        <div class="map"></div>

        <div class="text"></div>
        <p class="text">※橋本駅北口－多摩美術大学間は、リーフィア町田小山ヶ丘を経由する別系統も運行しています。<br>［所要時間＝15分］
          <br>※橋本駅北口－多摩美術大学間の定期券をお持ちの場合でも、リーフィア町田小山ヶ丘経由の系統を
          <br>ご利用の場合は、久保ヶ谷戸・坂下・リーフィア町田小山ヶ丘のバス停での途中下車は出来ません。
        </p>

        <div class="bottomtitle"></div>
        <p class="bottomtitle">ー イベント －</p>

        <div class="sitamaru1"></div>

        <div class="marutext1"></div>
        <p class="marutext1"><a href="/event/detail/oc">オープン<br>キャンパス</a></p>

        <div class="sitamaru2"></div>

        <div class="marutext2"></div>
        <p class="marutext2"><a href="/event/detail/geisai">芸術祭</a></p>

        <div class="sitamaru3"></div>

        <div class="marutext3"></div>
        <p class="marutext3"><a href="/event/detail/sotsusei">卒業制作展</a></p>
      </section>
      <section class="event-bus-from-hashimoto" v-show="isShowBusFromHashimoto">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">

        <div class="title"></div>
        <p class="title">－ 路線バス利用案内 －</p>

        <div class="subtitle"></div>
        <p class="subtitle">橋本駅バスダイヤ</p>

        <div class="maru1"></div>

        <div class="l1text"></div>
        <p class="l1text">橋本駅発</p>

        <div class="maru2"></div>

        <div class="r1text"></div>
        <p class="r1text"><a href="/event/bus/tohashimoto">多摩美術<br>大学発</a></p>

        <div class="midashi1"></div>
        <p class="midashi1">橋本駅北口発→多摩美術大学行（橋75系統）</p>

        <div class="png1"></div>

        <div class="midashi2"></div>
        <p class="midashi2">橋本駅バス乗り場</p>

        <div class="map"></div>

        <div class="text"></div>
        <p class="text">※橋本駅北口－多摩美術大学間は、リーフィア町田小山ヶ丘を経由する別系統も運行しています。<br>［所要時間＝15分］
          <br>※橋本駅北口－多摩美術大学間の定期券をお持ちの場合でも、リーフィア町田小山ヶ丘経由の系統を
          <br>ご利用の場合は、久保ヶ谷戸・坂下・リーフィア町田小山ヶ丘のバス停での途中下車は出来ません。
        </p>

        <div class="bottomtitle"></div>
        <p class="bottomtitle">ー イベント －</p>

        <div class="sitamaru1"></div>

        <div class="marutext1"></div>
        <p class="marutext1"><a href="/event/detail/oc">オープン<br>キャンパス</a></p>

        <div class="sitamaru2"></div>

        <div class="marutext2"></div>
        <p class="marutext2"><a href="/event/detail/geisai">芸術祭</a></p>

        <div class="sitamaru3"></div>

        <div class="marutext3"></div>
        <p class="marutext3"><a href="/event/detail/sotsusei">卒業制作展</a></p>
      </section>
      <section class="event-bus-to-hachioji" v-show="isShowBusToHachioji">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">


        <div class="title"></div>
        <p class="title">－ 路線バス利用案内 －</p>

        <div class="subtitle"></div>
        <p class="subtitle">八王子駅バスダイヤ</p>

        <div class="maru1"></div>

        <div class="l1text"></div>
        <p class="l1text"><a href="/event/bus/fromhachioji">八王子駅発</a></p>

        <div class="maru2"></div>

        <div class="r1text"></div>
        <p class="r1text">多摩美術<br>大学発</p>

        <div class="midashi1"></div>
        <p class="midashi1">多摩美術大学発→急行 八王子駅南口行き（八70系統）</p>

        <div class="png1"></div>

        <div class="text"></div>
        <p class="text">※橋本駅北口－多摩美術大学間は、リーフィア町田小山ヶ丘を経由する別系統も運行しています。<br>［所要時間＝15分］
          <br>※橋本駅北口－多摩美術大学間の定期券をお持ちの場合でも、リーフィア町田小山ヶ丘経由の系統を
          <br>ご利用の場合は、久保ヶ谷戸・坂下・リーフィア町田小山ヶ丘のバス停での途中下車は出来ません。
        </p>

        <div class="bottomtitle"></div>
        <p class="bottomtitle">ー イベント －</p>

        <div class="sitamaru1"></div>

        <div class="marutext1"></div>
        <p class="marutext1"><a href="/event/detail/oc">オープン<br>キャンパス</a></p>

        <div class="sitamaru2"></div>

        <div class="marutext2"></div>
        <p class="marutext2"><a href="/event/detail/geisai">芸術祭</a></p>

        <div class="sitamaru3"></div>

        <div class="marutext3"></div>
        <p class="marutext3"><a href="/event/detail/sotsusei">卒業制作展</a></p>
      </section>
      <section class="event-bus-to-hashimoto" v-show="isShowBusToHashimoto">
        <div class="wakusei"></div>
        <p class="wakusei"></p>
        <img src="@/assets/imgs/event/boke.png">


        <div class="title"></div>
        <p class="title">－ 路線バス利用案内 －</p>

        <div class="subtitle"></div>
        <p class="subtitle">橋本駅バスダイヤ</p>

        <div class="maru1"></div>

        <div class="l1text"></div>
        <p class="l1text"><a href="/event/bus/fromhashimoto">橋本駅発</a></p>

        <div class="maru2"></div>

        <div class="r1text"></div>
        <p class="r1text">多摩美術<br>大学発</p>

        <div class="midashi1"></div>
        <p class="midashi1">多摩美術大学発→橋本駅北口行（橋75系統）</p>

        <div class="png1"></div>

        <div class="text"></div>
        <p class="text">※橋本駅北口－多摩美術大学間は、リーフィア町田小山ヶ丘を経由する別系統も運行しています。<br>［所要時間＝15分］
          <br>※橋本駅北口－多摩美術大学間の定期券をお持ちの場合でも、リーフィア町田小山ヶ丘経由の系統を
          <br>ご利用の場合は、久保ヶ谷戸・坂下・リーフィア町田小山ヶ丘のバス停での途中下車は出来ません。
        </p>

        <div class="bottomtitle"></div>
        <p class="bottomtitle">ー イベント －</p>

        <div class="sitamaru1"></div>
        <div class="marutext1"></div>
        <p class="marutext1"><a href="/event/detail/oc">オープン<br>キャンパス</a></p>

        <div class="sitamaru2"></div>

        <div class="marutext2"></div>
        <p class="marutext2"><a href="/event/detail/geisai">芸術祭</a></p>

        <div class="sitamaru3"></div>

        <div class="marutext3"></div>
        <p class="marutext3"><a href="/event/detail/sotsusei">卒業制作展</a></p>
      </section>
    </section>
    -->
  </main>
</template>

<script>
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BottomSpacer from '@/components/BottomSpacer.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'EventView',
  components: {
    TopPlanetComponent,
    HeaderComponent,
    BottomSpacer,
    FooterComponent
  },
  /*
  data() {
    return {
      isShowTop: false,
      isShowDetail: false,
      isShowDetailOC: false,
      isShowDetailGeisai: false,
      isShowDetailSotsusei: false,
      isShowAccess: false,
      isShowBus: false,
      isShowBusFromHachioji: false,
      isShowBusFromHashimoto: false,
      isShowBusToHachioji: false,
      isShowBusToHashimoto: false,
    };
  },
  methods: {
    selectDetailPage: function () {
      this.isShowDetail = true;
      switch (this.$route.params.sectionName) {
        case "oc":
          this.isShowDetailOC = true;
          this.isShowDetailGeisai = false;
          this.isShowDetailSotsusei = false;
          break;
        case "geisai":
          this.isShowDetailOC = false;
          this.isShowDetailGeisai = true;
          this.isShowDetailSotsusei = false;
          break;
        case "sotsusei":
          this.isShowDetailOC = false;
          this.isShowDetailGeisai = false;
          this.isShowDetailSotsusei = true;
          break;
        default:
          // TODO: 404ページを表示する
          this.isShowDetailOC = true;
          this.isShowDetailGeisai = false;
          this.isShowDetailSotsusei = false;
      }
    },
    selectBusPage: function () {
      this.isShowBus = true;
      switch (this.$route.params.sectionName) {
        case "fromhachioji":
          this.isShowBusFromHachioji = true;
          this.isShowBusFromHashimoto = false;
          this.isShowBusToHachioji = false;
          this.isShowBusToHashimoto = false;
          break;
        case "fromhashimoto":
          this.isShowBusFromHachioji = false;
          this.isShowBusFromHashimoto = true;
          this.isShowBusToHachioji = false;
          this.isShowBusToHashimoto = false;
          break;
        case "tohachioji":
          this.isShowBusFromHachioji = false;
          this.isShowBusFromHashimoto = false;
          this.isShowBusToHachioji = true;
          this.isShowBusToHashimoto = false;
          break;
        case "tohashimoto":
          this.isShowBusFromHachioji = false;
          this.isShowBusFromHashimoto = false;
          this.isShowBusToHachioji = false;
          this.isShowBusToHashimoto = true;
          break;
        default:
          // TODO: 404ページを表示する
          this.isShowBusFromHachioji = true;
          this.isShowBusFromHashimoto = false;
          this.isShowBusToHachioji = false;
          this.isShowBusToHashimoto = false;
      }
    },
  },
  mounted: function () {
    // console.log(this.$route.params.pageName);
    // console.log(this.$route.params.sectionName);
    switch (this.$route.params.pageName) {
      case "detail":
        this.selectDetailPage();
        break;
      case "access":
        this.isShowAccess = true;
        break;
      case "bus":
        this.selectBusPage();
        break;
      default:
        this.isShowTop = true;
    }
  }
  */
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
        background-color: $color-about-shindan;
      }
    }

    .circle0,
    .circle2 {
      margin-left: 750px;
    }
  }
}

/*
.event {
  width: 100vw;
  height: 350vh;

  .event-top {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: $color-bg;

    .title {
      position: absolute;
      width: 303px;
      height: 54px;
      left: 551px;
      top: 127px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;
      


      color: #FFFFFF;
    }

    .circle1 {
      box-sizing: border-box;

      position: absolute;
      width: 517px;
      height: 517px;
      left: 689.64px;
      top: 292px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .text1 {
      position: absolute;
      width: 481px;
      height: 123px;
      left: 789px;
      top: 490px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;
      display: flex;
      align-items: center;

      color: #FFFFFF;
    }

    .circle2 {
      box-sizing: border-box;

      position: absolute;
      width: 517px;
      height: 518px;
      left: 247px;
      top: 761.06px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .text2 {
      position: absolute;
      width: 419px;
      height: 122px;
      left: 395px;
      top: 974.06px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;
      display: flex;
      align-items: center;
      text-align: center;

      color: #FFFFFF;
    }

    .circle3 {
      box-sizing: border-box;

      position: absolute;
      width: 517px;
      height: 518px;
      left: 689.66px;
      top: 1212.72px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .text3 {
      position: absolute;
      width: 419px;
      height: 122px;
      left: 863px;
      top: 1421.72px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;
      display: flex;
      align-items: center;
      text-align: center;

      color: #FFFFFF;
    }

    .circle4 {
      box-sizing: border-box;

      position: absolute;
      width: 517px;
      height: 517px;
      left: 248px;
      top: 1652px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .text4 {
      position: absolute;
      width: 227px;
      height: 51px;
      left: 394px;
      top: 1885px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;

      color: #FFFFFF;
    }
  }

  .event-details {

    .event-oc {
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: $color-bg;

      .title {
        position: absolute;
        width: 303px;
        height: 54px;
        left: 551px;
        top: 127px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 323px;
        height: 54px;
        left: 211px;
        top: 314px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .int {
        position: absolute;
        width: 1147px;
        height: 382px;
        left: 157px;
        top: 425px;

        background: url("@/assets/imgs/event/int.png");
      }

      .text1 {
        position: absolute;
        width: 1157px;
        height: 150px;
        left: 176px;
        top: 916px;
        text-align: left;

        font-family: 'Toppan Bunkyu Gothic';
        font-style: normal;
        font-weight: 600;
        font-size: $font-sm;
        line-height: $font-m;

        color: #FFFFFF;
      }

      .left {
        position: absolute;
        width: 641px;
        height: 428px;
        left: 157px;
        top: 1268px;

        background: url("@/assets/imgs/event/left.png");
      }

      .right {
        position: absolute;
        width: 393px;
        height: 590px;
        left: 869px;
        top: 1183px;

        background: url("@/assets/imgs/event/right.png");
      }

      .text2 {
        position: absolute;
        width: 429px;
        height: 54px;
        left: 211px;
        top: 1835px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .circle1 {
        box-sizing: border-box;

        position: absolute;
        width: 343px;
        height: 344px;
        left: 282px;
        top: 2001px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .a {
        position: absolute;
        width: 120px;
        height: 60px;
        left: 394px;
        top: 2143px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .circle2 {
        box-sizing: border-box;

        position: absolute;
        width: 343px;
        height: 344px;
        left: 806px;
        top: 2001px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .b {
        position: absolute;
        width: 200px;
        height: 60px;
        left: 878px;
        top: 2143px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF
      }
    }

    .event-geisai {
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: $color-bg;

      .title {
        position: absolute;
        width: 303px;
        height: 54px;
        left: 551px;
        top: 127px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 324px;
        height: 54px;
        left: 211px;
        top: 314px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .png1 {
        position: absolute;
        width: 1037px;
        height: 346px;
        left: 211px;
        top: 449px;

        background: url("@/assets/imgs/event/png1.png");
      }

      .text1 {
        position: absolute;
        width: 1035px;
        height: 240px;
        left: 214px;
        top: 888px;

        text-align: left;
        font-family: 'Toppan Bunkyu Gothic';
        font-style: normal;
        font-weight: 400;
        font-size: $font-sm;
        line-height: $font-m;
        display: flex;
        align-items: center;

        color: #FFFFFF
      }

      .text2 {
        position: absolute;
        width: 300px;
        height: 48px;
        left: 211px;
        top: 1182px;

        text-align: left;
        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        display: flex;
        align-items: center;

        color: #FFFFFF;
      }

      .text3 {
        position: absolute;
        width: 1078px;
        height: 216px;
        left: 207px;
        top: 1194px;

        text-align: left;
        font-family: 'Toppan Bunkyu Gothic';
        font-style: normal;
        font-weight: 400;
        font-size: $font-sm;
        line-height: $font-m;
        display: flex;
        align-items: center;

        color: #FFFFFF;
      }

      .png2 {
        position: absolute;
        width: 372px;
        height: 372px;
        left: 211px;
        top: 1368px;

        background: url("@/assets/imgs/event/png2.png");
      }

      .png3 {
        position: absolute;
        width: 498px;
        height: 373px;
        left: 762px;
        top: 1367px;

        background: url("@/assets/imgs/event/png3.png");
      }

      .text4 {
        position: absolute;
        width: 429px;
        height: 54px;
        left: 211px;
        top: 1835px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .text5 {
        position: absolute;
        width: 287px;
        height: 48px;
        left: 277px;
        top: 2175px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        


        color: #FFFFFF;
      }

      .circle1 {
        box-sizing: border-box;

        position: absolute;
        width: 343px;
        height: 344px;
        left: 249px;
        top: 2023px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .text6 {
        position: absolute;
        width: 160px;
        height: 48px;
        left: 940px;
        top: 2175px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        


        color: #FFFFFF;
      }

      .circle2 {
        box-sizing: border-box;

        position: absolute;
        width: 343px;
        height: 344px;
        left: 848px;
        top: 2023px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }
    }

    .event-sotsusei {
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: $color-bg;

      .title {
        position: absolute;
        width: 303px;
        height: 54px;
        left: 551px;
        top: 127px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 180px;
        height: 54px;
        left: 211px;
        top: 314px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .png1 {
        position: absolute;
        width: 1022px;
        height: 341px;
        left: 211px;
        top: 444px;

        background: url("@/assets/imgs/event/sotsusei1.png");
      }

      .text1 {
        position: absolute;
        width: 1067px;
        height: 180px;
        left: 211px;
        top: 893px;

        text-align: left;
        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;

        color: #FFFFFF;
      }

      .png2 {
        position: absolute;
        width: 357px;
        height: 634px;
        left: 189px;
        top: 1096px;

        background: url("@/assets/imgs/event/sotsusei2.png");
      }

      .png3 {
        position: absolute;
        width: 688px;
        height: 387px;
        left: 627px;
        top: 1219px;

        background: url("@/assets/imgs/event/sotsusei3.png");
      }

      .sub2 {
        position: absolute;
        width: 429px;
        height: 54px;
        left: 211px;
        top: 1835px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .leftmaru {
        box-sizing: border-box;

        position: absolute;
        width: 343px;
        height: 344px;
        left: 273px;
        top: 2019px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .lefttext {
        position: absolute;
        width: 287px;
        height: 48px;
        left: 301px;
        top: 2171px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        


        color: #FFFFFF;
      }

      .rightmaru {
        box-sizing: border-box;

        position: absolute;
        width: 343px;
        height: 344px;
        left: 872px;
        top: 2019px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .righttext {
        position: absolute;
        width: 96px;
        height: 48px;
        left: 996px;
        top: 2171px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        


        color: #FFFFFF;
      }
    }
  }

  .event-access {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: $color-bg;

    .title {
      position: absolute;
      width: 288px;
      height: 54px;
      left: 600px;
      top: 104px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;
      


      color: #FFFFFF;
    }

    .map1 {
      position: absolute;
      width: 586px;
      height: 291px;
      left: 225px;
      top: 401px;

      background: url("@/assets/imgs/event/map1.png");
    }

    .midashi1 {
      position: absolute;
      width: 255px;
      height: 48px;
      left: 906px;
      top: 413px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-xm;
      


      color: #FFFFFF;
    }

    .text1 {
      position: absolute;
      width: 582px;
      height: 120px;
      left: 906px;
      top: 502px;

      text-align: left;
      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-sm;
      line-height: $font-m;

      color: #FFFFFF;
    }

    .map2 {
      position: absolute;
      width: 591px;
      height: 301px;
      left: 699px;
      top: 988px;

      background: url("@/assets/imgs/event/map2.png");
    }

    .rec1 {
      position: absolute;
      width: 633px;
      height: 337px;
      left: 195px;
      top: 380px;

      background: #FFFFFF;
    }

    .midashi2 {
      position: absolute;
      width: 383px;
      height: 48px;
      left: 198px;
      top: 1004px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-xm;
      


      color: #FFFFFF;
    }

    .text2 {
      position: absolute;
      width: 582px;
      height: 300px;
      left: 182px;
      top: 1102px;

      text-align: left;
      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-sm;
      line-height: $font-m;

      color: #FFFFFF;
    }

    .midashi3 {
      position: absolute;
      width: 436px;
      height: 27px;
      left: 502px;
      top: 1452px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-sm;
      line-height: $font-m;

      color: #FFFFFF;
    }

    .maru1 {
      box-sizing: border-box;

      position: absolute;
      width: 195px;
      height: 196px;
      left: 435px;
      top: 1559px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .left1 {
      position: absolute;
      width: 136px;
      height: 67px;
      left: 464px;
      top: 1623px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-sm;
      line-height: $font-m;
      text-align: center;

      color: #FFFFFF;
    }

    .maru2 {
      box-sizing: border-box;

      position: absolute;
      width: 195px;
      height: 196px;
      left: 768px;
      top: 1559px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .right1 {
      position: absolute;
      width: 136px;
      height: 67px;
      left: 798px;
      top: 1623px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-sm;
      line-height: $font-m;
      text-align: center;

      color: #FFFFFF;
    }

    .midashi4 {
      position: absolute;
      width: 287px;
      height: 54px;
      left: 580px;
      top: 1972px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-x;
      


      color: #FFFFFF;
    }

    .maru3 {
      box-sizing: border-box;

      position: absolute;
      width: 287px;
      height: 288px;
      left: 247px;
      top: 2161px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .l1 {
      position: absolute;
      width: 159px;
      height: 96px;
      left: 312px;
      top: 2266px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-xm;
      text-align: center;

      color: #FFFFFF;
    }

    .maru4 {
      box-sizing: border-box;

      position: absolute;
      width: 287px;
      height: 288px;
      left: 579px;
      top: 2161px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .center {
      position: absolute;
      width: 96px;
      height: 48px;
      left: 676px;
      top: 2285px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-xm;
      

      text-align: center;

      color: #FFFFFF;
    }

    .maru5 {
      box-sizing: border-box;

      position: absolute;
      width: 287px;
      height: 288px;
      left: 906px;
      top: 2161px;

      border-radius: 50%;
      border: 4px solid #FFFFFF;
    }

    .r1 {
      position: absolute;
      width: 160px;
      height: 48px;
      left: 970px;
      top: 2285px;

      font-family: 'Toppan Bunkyu Midashi Gothic';
      font-style: normal;
      font-weight: 900;
      font-size: $font-m;
      line-height: $font-xm;
      

      text-align: center;

      color: #FFFFFF;
    }
  }

  .event-bus {

    width: 100%;
    height: 100%;
    text-align: center;
    background-color: $color-bg;

    .event-bus-from-hachioji {
      .title {
        position: absolute;
        width: 432px;
        height: 54px;
        left: 504px;
        top: 140px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 322px;
        height: 54px;
        left: 239px;
        top: 228px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru1 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 257px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .l1text {
        position: absolute;
        width: 100px;
        height: 30px;
        left: 303px;
        top: 407px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru2 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 506px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .r1text {
        position: absolute;
        width: 80px;
        height: 60px;
        left: 564px;
        top: 396px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        text-align: center;

        color: #FFFFFF;
      }

      .midashi1 {
        position: absolute;
        width: 376px;
        height: 48px;
        left: 532px;
        top: 633px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-s;
        line-height: $font-sm;
        text-align: center;

        color: #FFFFFF;
      }

      .png1 {
        position: absolute;
        width: 660px;
        height: 743px;
        left: 395px;
        top: 784px;

        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("@/assets/imgs/event/bus_from_hachioji.png")
      }

      .midashi2 {
        position: absolute;
        width: 567px;
        height: 139px;
        left: 195px;
        top: 1862px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        text-align: center;

        color: #FFFFFF;
      }

      .map {
        position: absolute;
        width: 474px;
        height: 311px;
        left: 771px;
        top: 1932px;

        background: url("@/assets/imgs/event/map_hachiouji.png");
      }

      .text {
        position: absolute;
        width: 907px;
        height: 141px;
        left: 290px;
        top: 2353px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;

        color: #FFFFFF;
      }

      .bottomtitle {
        position: absolute;
        width: 287px;
        height: 54px;
        left: 584px;
        top: 2682px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .sitamaru1 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 247px;
        top: 2818px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext1 {
        position: absolute;
        width: 159px;
        height: 96px;
        left: 311px;
        top: 2914px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru2 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 579px;
        top: 2818px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext2 {
        position: absolute;
        width: 96px;
        height: 48px;
        left: 676px;
        top: 2942px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru3 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 906px;
        top: 2818px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext3 {
        position: absolute;
        width: 160px;
        height: 48px;
        left: 970px;
        top: 2942px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }

    }

    .event-bus-from-hashimoto {
      .title {
        position: absolute;
        width: 432px;
        height: 54px;
        left: 504px;
        top: 140px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 286px;
        height: 54px;
        left: 257px;
        top: 228px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru1 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 257px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .l1text {
        position: absolute;
        width: 80px;
        height: 30px;
        left: 315px;
        top: 411px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru2 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 506px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .r1text {
        position: absolute;
        width: 80px;
        height: 60px;
        left: 564px;
        top: 396px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        text-align: center;

        color: #FFFFFF;
      }

      .midashi1 {
        position: absolute;
        width: 325px;
        height: 24px;
        left: 563px;
        top: 632px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-s;
        line-height: $font-sm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .png1 {
        position: absolute;
        width: 660px;
        height: 743px;
        left: 395px;
        top: 784px;

        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("@/assets/imgs/event/bus_from_hashimoto.png")
      }

      .midashi2 {
        position: absolute;
        width: 567px;
        height: 139px;
        left: 195px;
        top: 1862px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        text-align: center;

        color: #FFFFFF;
      }

      .map {
        position: absolute;
        width: 474px;
        height: 311px;
        left: 771px;
        top: 1932px;

        background: url("@/assets/imgs/event/map1.png");
      }

      .text {
        position: absolute;
        width: 907px;
        height: 141px;
        left: 290px;
        top: 2353px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;

        color: #FFFFFF;
      }

      .bottomtitle {
        position: absolute;
        width: 287px;
        height: 54px;
        left: 584px;
        top: 2682px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .sitamaru1 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 247px;
        top: 2818px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext1 {
        position: absolute;
        width: 159px;
        height: 96px;
        left: 311px;
        top: 2914px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru2 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 579px;
        top: 2818px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext2 {
        position: absolute;
        width: 96px;
        height: 48px;
        left: 676px;
        top: 2942px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru3 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 906px;
        top: 2818px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext3 {
        position: absolute;
        width: 160px;
        height: 48px;
        left: 970px;
        top: 2942px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }
    }

    .event-bus-to-hachioji {
      .title {
        position: absolute;
        width: 432px;
        height: 54px;
        left: 504px;
        top: 140px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 322px;
        height: 54px;
        left: 239px;
        top: 228px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru1 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 257px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .l1text {
        position: absolute;
        width: 80px;
        height: 30px;
        left: 315px;
        top: 411px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru2 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 506px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .r1text {
        position: absolute;
        width: 80px;
        height: 60px;
        left: 564px;
        top: 396px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        text-align: center;

        color: #FFFFFF;
      }

      .midashi1 {
        position: absolute;
        width: 392px;
        height: 24px;
        left: 524px;
        top: 632px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-s;
        line-height: $font-sm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .png1 {
        position: absolute;
        width: 789.17px;
        height: 743px;
        left: 325px;
        top: 784px;

        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("@/assets/imgs/event/bus_to_hachioji.png")
      }

      .text {
        position: absolute;
        width: 907px;
        height: 141px;
        left: 290px;
        top: 1614px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;

        color: #FFFFFF;
      }

      .bottomtitle {
        position: absolute;
        width: 287px;
        height: 54px;
        left: 584px;
        top: 1959px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .sitamaru1 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 247px;
        top: 2100px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext1 {
        position: absolute;
        width: 159px;
        height: 96px;
        left: 312px;
        top: 2205px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru2 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 579px;
        top: 2100px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext2 {
        position: absolute;
        width: 96px;
        height: 48px;
        left: 676px;
        top: 2224px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru3 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 906px;
        top: 2100px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext3 {
        position: absolute;
        width: 160px;
        height: 48px;
        left: 970px;
        top: 2224px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }
    }

    .event-bus-to-hashimoto {
      .title {
        position: absolute;
        width: 432px;
        height: 54px;
        left: 504px;
        top: 140px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .subtitle {
        position: absolute;
        width: 286px;
        height: 54px;
        left: 257px;
        top: 228px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru1 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 257px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .l1text {
        position: absolute;
        width: 80px;
        height: 30px;
        left: 315px;
        top: 411px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        

        text-align: center;

        color: #FFFFFF;
      }

      .maru2 {
        box-sizing: border-box;

        position: absolute;
        width: 195px;
        height: 196px;
        left: 506px;
        top: 328px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .r1text {
        position: absolute;
        width: 80px;
        height: 60px;
        left: 564px;
        top: 396px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;
        text-align: center;

        color: #FFFFFF;
      }

      .midashi1 {
        position: absolute;
        width: 325px;
        height: 24px;
        left: 557px;
        top: 632px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-s;
        line-height: $font-sm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .png1 {
        position: absolute;
        width: 789.08px;
        height: 743px;
        left: 325px;
        top: 784px;

        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("@/assets/imgs/event/bus_to_hashimoto.png")
      }

      .text {
        position: absolute;
        width: 907px;
        height: 141px;
        left: 290px;
        top: 1614px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-sm;
        line-height: $font-m;

        color: #FFFFFF;
      }

      .bottomtitle {
        position: absolute;
        width: 287px;
        height: 54px;
        left: 584px;
        top: 1959px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-x;
        


        color: #FFFFFF;
      }

      .sitamaru1 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 247px;
        top: 2100px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext1 {
        position: absolute;
        width: 159px;
        height: 96px;
        left: 312px;
        top: 2205px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru2 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 579px;
        top: 2100px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext2 {
        position: absolute;
        width: 96px;
        height: 48px;
        left: 676px;
        top: 2224px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }

      .sitamaru3 {
        box-sizing: border-box;

        position: absolute;
        width: 287px;
        height: 288px;
        left: 906px;
        top: 2100px;

        border-radius: 50%;
        border: 4px solid #FFFFFF;
      }

      .marutext3 {
        position: absolute;
        width: 160px;
        height: 48px;
        left: 970px;
        top: 2224px;

        font-family: 'Toppan Bunkyu Midashi Gothic';
        font-style: normal;
        font-weight: 900;
        font-size: $font-m;
        line-height: $font-xm;
        

        text-align: center;

        color: #FFFFFF;
      }
    }
  } 
}
*/
</style>
