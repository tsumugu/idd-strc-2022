<template>
  <main class="admission">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/admission/top4.png")' title="入試方法" />
    <div class="admission-inner">
      <div class="types">
        <div class="circles">
          <div class="type-circle circle-1">
            <p class="type-circle-title">一般入試</p>
            <p>美大といえばこの入試方法<br><span>実技</span>と<span>学科</span>で入学できる</p>
          </div>
          <div class="type-circle circle-2">
            <p class="type-circle-title">共通テストⅠ方式</p>
            <p>一般入試の学科試験が<br><span>共通テスト</span>に<br>置き換わったイメージ</p>
          </div>
          <div class="type-circle circle-3">
            <p class="type-circle-title">共通テストⅡ方式</p>
            <p><span>共通テストのみ</span>で合否が出る<br>一般大学との<span>併願</span>にもおすすめ</p>
          </div>
          <div class="type-circle circle-4">
            <p class="type-circle-title">推薦方式</p>
            <p><span>ポートフォリオ</span>などで作品を<br>見て判断してもらえる</p>
          </div>
        </div>
        <div class="title">
          <div class="tategaki">入試方法は<span>４</span>種類！</div>
        </div>
      </div>
      <div class="schedule">
        <div class="section-title">日程</div>
        <table class="font-bunkyu-midashi">
          <tbody>
            <tr>
              <td class="transparent_cell"></td>
              <td class="title_row">一般</td>
              <td class="title_row">共通テストⅠ</td>
              <td class="title_row">共通テストⅡ</td>
              <td class="title_row">総合型</td>
            </tr>
            <tr>
              <td class="title_column">11/20</td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
              <td class="cell">ポートフォリオ・作品 + 面接<br>10:00-</td>
            </tr>
            <tr>
              <td class="title_column">1月頃</td>
              <td class="empty_cell"></td>
              <td class="cell">共通テスト<br>(2科目)</td>
              <td class="cell">共通テスト<br>(5科目)</td>
              <td class="empty_cell"></td>
            </tr>
            <tr>
              <td class="title_column" rowspan="2">2/6 (月)</td>
              <td class="cell">国語・英語<br>10:00-12:30</td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
            </tr>
            <tr>
              <td class="cell" colspan="2">鉛筆デッサン<br>14:00-17:00</td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
            </tr>
            <tr>
              <td class="title_column">2/9 (木)</td>
              <td class="cell">視覚表現<br>10:00-16:00</td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
              <td class="empty_cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ninzu">
        <div class="section-title">人数</div>
        <div><img src="@/assets/imgs/admission/graph.png"></div>
      </div>
      <div class="kamoku">
        <div class="font-bunkyu-midashi kamoku-item">
          <div class="section-title">科目</div>
          <p class="kamoku-title">一般選抜</p>
          <p class="kamoku-body">国語｜国語総合（古文、漢文を除く）、国語表現、なお小論文を課す。<br>英語｜コミュニケーション英語 I・II専門試験｜鉛筆デッサン、視覚表現</p>
          <p class="kamoku-title">一般選抜［共通テスト併用方式］</p>
          <p class="kamoku-body">［共通テスト］下記より2教科2科目選択国語｜国語（近代以降の文章のみを
            評価）地理・歴史｜世界史A、世界史B、日本史A、日本史B、地理A、
            地理B公民｜現代社会、倫理、政治・経済、「倫理、政治・経済」数学｜数学Ⅰ、
            数学Ⅰ・数学A、数学Ⅱ、数学Ⅱ・数学B、簿記・会計、情報関係基礎理科｜物理基礎、
            化学基礎、生物基礎、地学基礎から選択した2つ（本学一般選抜
            ［共通テスト併用方式］ではこれを理科の「1科目」として扱います）、
            物理、化学、生物、地学外国語｜英語、ドイツ語、フランス語、中国語、
            韓国語※国語、地理歴史、公民、数学、理科、外国語において3科目以上受験した
            場合は得点の高い2教科2科目を評価します。注意：同一教科内で2科目以上受験
            しても2教科2科目にはなりません。
          </p>
        </div>
      </div>
      <div class="hennyu">
        <div class="section-title">編入学・転科</div>
        <div class="font-bunkyu-midashi">
          <p class="hennyu-title">募集人数 若干名</p>
          <p class="hennyu-title">出願資格</p>
          <p class="hennyu-body">
            次のいずれかに該当する者または2023年3月31日までにこれに該当する見込の者。<br>
            1. 日本国内の大学を卒業した者。<br>
            2. 日本国内の大学に2年次以上在学（休学期間を除く）し、62単位以上を修得した者。<br>
            3. 日本国内の短期大学を卒業した者。<br>
            4. 日本国内の高等専門学校を卒業した者。<br>
            5. 日本国内の専修学校の専門課程（修業年限が2年以上で、かつ課程の修了に必要な総授業時間数が1,700時間以上であること）を修了した者<br>
            （ただし学校教育法第90条に規定する大学入学資格を有する者に限る）。<br>
            6. 日本国内の高等学校専攻科の課程（修業年限が2年以上でその他の文部科学大臣の定める基準を満たすものに限る）を修了した者<br>
            （ただし学校教育法第90条に規定する大学入学資格を有する者に限る）。<br>
            7. 外国の4年制大学を卒業し、学士号（Bachelor's degree等）を取得した者。<br>
            8. 外国の4年制大学（卒業時に学士号が取得可）に2年以上在学（休学期間を除く）し、卒業に必要な単位数の半分以上を修得した者。<br>
            9. 外国の短期大学を卒業し、短期大学士（Associate degree等）を取得した者。
          </p>
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
export default {
  name: 'AdmissionView',
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

.schedule,
.ninzu,
.kamoku,
.hennyu {
  text-align: left;
}

.admission {
  color: $white;
  background-color: $color-bg;
  width: 100vw;

  .admission-inner {
    display: inline-block;
    position: relative;
    margin-top: -200px;
    z-index: 888;

    @include mq(lg) {
      width: 100%;
    }

    .section-title {
      font-family: toppan-bunkyu-midashi-go-std, sans-serif;
      font-weight: 900;
      font-style: normal;

      font-size: $font-m;

      background: $color-job-company-bg;
      backdrop-filter: blur(2px);

      display: inline-block;

      margin-top: 130px;
      margin-bottom: $font-x;

      padding: 10px 30px 10px 30px;
      border-radius: 40px;
    }

    .types {
      display: grid;
      grid-template-columns: 800px 100px;
      justify-content: center;
      align-items: center;

      @include mq(lg) {
        display: block;
      }

      .circles {
        @include mq(lg) {
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          align-items: center;
          place-items: center;
        }
      }


      .circle-2,
      .circle-4 {
        margin-top: -100px;
        margin-left: 340px;

        @include mq(lg) {
          margin-top: 0;
          margin-left: 0;
        }
      }

      .circle-2,
      .circle-3,
      .circle-4 {
        margin-top: -100px;

        @include mq(lg) {
          margin-top: 0;
        }
      }

      .title {
        @include mq(lg) {
          display: none;
        }
      }

      .tategaki {
        display: inline-block;

        /*margin-left: -220px;*/

        font-family: toppan-bunkyu-midashi-go-std, sans-serif;
        font-weight: 900;
        font-style: normal;
        writing-mode: vertical-rl;
        font-size: $font-m;
        padding-bottom: 2px;
        border-right: solid 3px $white;
        line-height: 1;

        span {
          font-size: $font-xl;
        }
      }

      .type-circle {
        font-family: toppan-bunkyu-midashi-go-std, sans-serif;
        font-weight: 900;
        font-style: normal;

        font-size: $font-sm;
        line-height: calc($font-m * 1.2);

        width: 340px;
        height: 340px;

        @include mq(lg) {
          width: 240px;
          height: 240px;
        }

        background: $color-job-company-bg;
        backdrop-filter: blur(2px);

        border-radius: 50%;

        padding: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .type-circle-title {
          margin: $font-m;

          @include mq(lg) {
            margin: $font-s;
          }
        }

        p {
          margin: 0;
          padding: 0;
        }

        span {
          padding-bottom: 2px;
          border-bottom: solid 3px $white;
        }
      }
    }

    .schedule {
      display: inline-block;

      table,
      td,
      th {
        border: none;
        border-collapse: collapse;
        text-align: center;
      }

      td,
      th {
        padding: 3px;
        width: 220px;
        height: 25px;
      }

      th {
        background: $admission-th-bg;
      }

      .even {
        background: $admission-even-bg;
      }

      .odd {
        background: $admission-odd-bg;
      }

      .title_column,
      .title_row {
        background: $admission-tabletitle-bg;
      }

      .title_column {
        color: $black;
      }

      .title_row {
        color: $white;
      }

      .transparent_cell {
        background: transparent;
      }

      .cell {
        background: $admission-cell-bg;
      }

      .empty_cell {
        background: $admission-empty-cell-bg;
      }
    }

    .ninzu {
      display: inline-block;
    }

    .kamoku {
      display: inline-block;

      .kamoku-title {
        margin-top: 35px;
        font-size: $font-sm;
      }

      .kamoku-body {
        margin-top: 30px;
        font-size: $font-s;
      }

      .kamoku-item {
        width: 80%;
        margin: 0 auto;

        .section-title {
          margin-top: 130px;
        }
      }
    }

    .hennyu {
      display: inline-block;

      .hennyu-title {
        margin: 0;
        font-size: $font-sm;
      }

      .hennyu-body {
        margin-top: 13px;
        font-size: $font-s;
      }
    }
  }
}
</style>
