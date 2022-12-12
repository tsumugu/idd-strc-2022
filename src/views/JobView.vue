<template>
  <main class="job">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/job/top3.png")' title="就職" />
    <div class="job-inner">
      <div class="job-graph">
        <div class="job-graph-img">
          <img src="@/assets/imgs/job/graph.png">
        </div>
        <div class="job-graph-text">
          <p class="job-graph-text-title font-bunkyu-midashi">就職率</p>
          <p class="job-graph-text-per font-bunkyu-midashi">44.3%</p>
        </div>
      </div>
      <div class="job-company-wrapper">
        <div class="job-company">
          <p class="job-company-main-title font-bunkyu-midashi">就職先一覧</p>
          <p class="job-company-description">
            ウェブデザイン、ゲーム、IT情報サービス、メーカー、広告、出版などの分野で幅広く活動しています。また、企業への就職に限らず、自ら会社を起業したり、フリーランスのクリエイターとして活躍する卒業生が多いのも特徴です。
          </p>
          <p class="job-company-title font-bunkyu-midashi">主な就職先（過去3年 ※2019年5月1日現在）</p>
          <div class="job-company-companies">
            <div class="job-company-companies-column">
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">情報・IT（WEBデザイン含む）</p>
                <p class="job-company-companies-column-text">アイ・エム・ジェイ／アイレップ／あとらす二十一／ALIZE
                  DESIGN／アンドロボティクス／VIPソフトウェア／ウィズコープ／ウェイブ／H.R.I／エイチアイ／エイデン／M&C／オールコネクト／カヤック／クオリティア／グッドプランニング／グリー／クリコ／クレヴァシステムズ／コロプラ／サイバーエージェント／さくらインターネット／GMOインターネット／GMOメディア／シープアンドフォックス／スカイリンク／スパイスワークス／セブン&アイ・ネットメディア／DMM.com
                  Labo／Tastemade
                  Japan／ディライトワークス／Towastela／ドワンゴ／南国ソフト／日本情報通信／博報堂アイ・スタジオ／パズル／PDトウキョウ／ピラミッドフィルムクアドラ／ビズリーチ／マイネット／ミクシィ／ミツエーリンクス／ヤフー／ユニックスホールディングス／LIFULL
                </p>
              </div>
            </div>
            <div class="job-company-companies-column">
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">ゲーム・玩具・キャラクター</p>
                <p class="job-company-companies-column-text">
                  エイチエムエー／カプコン／カミオジャパン／クーリア／ケーツーブレインズ／コーエーテクモホールディングス／コナミデジタルエンタテインメント／東栄社／トゥエンティイレブン／パイロットインキ／ビサイド／ユークス／レイアップ
                </p>
              </div>
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">広告代理店・制作プロダクション</p>
                <p class="job-company-companies-column-text">
                  アームズ／アイル企画／アイレップ／アルバカーキフィルム／ADKインターナショナル／キュー／Grand
                  Design／コンセント／C.C.レマン／ジェイツ・コンプレックス／スパイス／セブンブルックス／TMC／ティ・ディ・エス／ドットゼロ／日本デザインセンター／ニトリパブリック／博報堂プロダクツ／プラスディ／ブレーンセンター／YUIDEA／リード
                </p>
              </div>
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">メーカー（家電・自動車）</p>
                <p class="job-company-companies-column-text">日本電気（NEC）／日置電機／日立製作所</p>
              </div>
            </div>
            <div class="job-company-companies-column">
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">出版・印刷</p>
                <p class="job-company-companies-column-text">共同通信社／共立印刷／手紙社／凸版印刷／日美印刷／ピークス／フジシール／光村印刷</p>
              </div>
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">アニメーション・映像</p>
                <p class="job-company-companies-column-text">赤坂グラフィックスアート／A-1Pictures／ボンズ／MAPPA／ラダック</p>
              </div>
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">コンサルティング</p>
                <p class="job-company-companies-column-text">大王製作所／Deloitte Digital</p>
              </div>
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">サービス</p>
                <p class="job-company-companies-column-text">
                  アートフリーク／アポローン／インソース／SCRAP／北原国際病院／チュチュアンナ／トーマツイノベーション／トリビュー／ナビット／ヒタチネジ／FLace／ミトライフデザイン／ユザワヤ商事／レザーアート
                </p>
              </div>
              <div class="job-company-companies-column-item">
                <p class="job-company-companies-column-title font-bunkyu-midashi">教育・美術館・博物館</p>
                <p class="job-company-companies-column-text">山口情報芸術センター</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="job-shikaku">
        <p class="job-shikaku-title font-bunkyu-midashi">取得可能な資格</p>
        <img src="@/assets/imgs/job/shikaku.png" class="job-shikaku-img">
      </div>
    </div>
    <BottomSpacer />
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
import BottomSpacer from '@/components/BottomSpacer.vue';

export default {
  name: 'JobView',
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

.job {
  color: $white;
  background-color: #0C184E;
  width: 100vw;

  .job-inner {
    position: relative;
    z-index: 10;
    margin-top: -20%;
  }

  .job-graph {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    margin: 0 auto;
    padding: 32px;

    .job-graph-img {
      width: 100%;
      max-width: $large-width;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
      }
    }

    .job-graph-text {
      display: flex;
      flex-flow: column;

      .job-graph-text-title {
        font-size: $font-m;
        line-height: $font-x;
        text-align: left;
      }

      .job-graph-text-per {
        font-size: $font-xl;
        line-height: $font-xsl;
        color: $color-graph-text;
      }
    }
  }

  .job-company-wrapper {
    width: 100%;

    padding: 32px;

    background: $color-job-company-bg;
    backdrop-filter: blur(2px);

    .job-company {
      display: grid;
      width: 70%;

      border: 1px solid $white;
      border-radius: 26px;

      margin: 0 auto;
      padding: 32px 64px 32px 64px;

      .job-company-main-title {
        font-size: $font-sm;
        width: 100%;
      }

      .job-company-description {
        font-size: $font-s;
        width: 100%;
        text-align: left;
      }

      .job-company-title {
        font-size: $font-s;
        font-weight: bold;
        width: 100%;
        text-align: left;
      }

      .job-company-companies {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 64px;
        text-align: left;


        .job-company-companies-column {
          .job-company-companies-column-item {
            margin-top: 16px;

            .job-company-companies-column-title {
              font-size: $font-s;
              font-weight: bold;
            }

            .job-company-companies-column-text {}
          }
        }
      }
    }
  }

  .job-shikaku {
    margin: 64px;

    .job-shikaku-title {
      font-size: $font-sm;
      margin: 64px;
    }

    .job-shikaku-img {}
  }
}

* {
  margin: 0px;
}
</style>
