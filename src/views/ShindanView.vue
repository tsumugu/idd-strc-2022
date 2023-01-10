<template>
  <main class="shindan">
    <div class="result-section-classes-bg"
      v-bind:class="{ 'result-section-classes-bg-3': resultClasses.length == 3, 'result-section-classes-bg-4': resultClasses.length == 4, 'result-section-classes-bg-5': resultClasses.length == 5 }"
      v-show="currPageNumber == 2"></div>
    <div class="shindan-inner">
      <HeaderComponent />
      <div class="shindan-dialog-wrapper" v-show="isShowDialog">
        <div class="shindan-dialog">
          <p class="shindan-dialog-title font-bely">ERROR!</p>
          <p class="shindan-dialog-text font-bunkyu-midashi">選択されていない項目があります<br>全ての項目を選択してください</p>
          <button class="shindan-dialog-button" v-on:click="() => { this.isShowDialog = false; }">×</button>
        </div>
      </div>
      <div class="top-bg" v-show="currPageNumber == 0"><img src="@/assets/imgs/shindan/top2.png"></div>
      <div class="shindan-main">
        <section class="about-section" v-show="currPageNumber == 0">
          <p class="tategaki tategaki-1 font-bunkyu-midashi drop-shadow">どんな授業がある？</p>
          <p class="tategaki tategaki-2 font-bunkyu-midashi drop-shadow">自分に合う授業って？</p>
          <div class="about-shindan">
            <p class="about-shindan-title font-bunkyu-midashi">情デ診断とは...</p>
            <p class="about-shindan-text">美大って絵だけじゃない！<br>
              あなたの好きなことが活かせる授業が見つかるかも？<br>
              質問に答えて自分に合う情デの授業を知ってみよう<br>
              他にもどんな授業があるか見れる！<br>
              授業は大学２年生の時の内容です</p>
          </div>
          <p class="tategaki tategaki-3 font-bunkyu-midashi">全部で<span class="number">１２</span>種類！</p>
          <div class="about-img"><img src="@/assets/imgs/shindan/classes.png"></div>
          <div class="start-button"><button class="font-blenny-black" v-on:click="gotoPage('1')">start</button></div>
        </section>
        <section class="shindan-section" v-show="currPageNumber == 1">
          <ul>
            <li v-for="question in questions" :key="question.index">
              <p class="shindan-text">Q<span class="shindan-index-number font-bunkyu-db">{{
                question.index + 1
              }}</span><span class="shindan-text-spacer"></span>{{ question.questionTexts[0] }}</p>
              <div class="answer-select">
                <div class="answer-select-item">
                  <span class="answer-select-item-inner answer-select-item-inner-1">
                    <input type="radio" :name=question.index :id='`${question.index}option0`' value="1"
                      v-model="$data['answer' + question.index]" />
                    <label :for='`${question.index}option0`'>とても思う</label>
                  </span>
                </div>
                <div class="answer-select-item">
                  <span class="answer-select-item-inner answer-select-item-inner-2">
                    <input type="radio" :name=question.index :id='`${question.index}option1`' value="2"
                      v-model="$data['answer' + question.index]" />
                    <label :for='`${question.index}option1`'>まあ思う</label>
                  </span>
                </div>
                <div class="answer-select-item">
                  <span class="answer-select-item-inner answer-select-item-inner-3">
                    <input type="radio" :name=question.index :id='`${question.index}option2`' value="3"
                      v-model="$data['answer' + question.index]" />
                    <label :for='`${question.index}option2`'>わからない</label>
                  </span>
                </div>
                <div class="answer-select-item">
                  <span class="answer-select-item-inner answer-select-item-inner-4">
                    <input type="radio" :name=question.index :id='`${question.index}option3`' value="4"
                      v-model="$data['answer' + question.index]" />
                    <label :for='`${question.index}option3`'>あまり思わない</label>
                  </span>
                </div>
                <div class="answer-select-item">
                  <span class="answer-select-item-inner answer-select-item-inner-5">
                    <input type="radio" :name=question.index :id='`${question.index}option4`' value="5"
                      v-model="$data['answer' + question.index]" />
                    <label :for='`${question.index}option4`'>全く思わない</label>
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <button v-on:click="calcResult" class="answer-result-button">結果を見る</button>
        </section>
        <section class="result-section" v-show="currPageNumber == 2">
          <h2 class="result-section-title font-bunkyu-midashi">おすすめ授業</h2>
          <ul class="result-section-classes"
            v-bind:class="{ 'result-section-classes-pos-3': resultClasses.length == 3, 'result-section-classes-pos-4': resultClasses.length == 4, 'result-section-classes-pos-5': resultClasses.length == 5 }">
            <li v-for="(classinfo, index) in resultClasses" :key=index class="result-section-classes-contents"
              v-bind:class="['result-section-classes-item-' + resultClasses.length + '-' + index]">
              <router-link :to="'/class-about/' + classinfo.key"><img :src=classinfo.img></router-link>
            </li>
          </ul>
          <div class="result-section-area2"
            v-bind:class="{ 'result-section-area2-3': resultClasses.length == 3, 'result-section-area2-4': resultClasses.length == 4, 'result-section-area2-5': resultClasses.length == 5 }">
            <div class="result-section-area2-message">
              <p class="font-bunkyu-midashi"><span>{{ resultGenreName }}</span>に興味があるあなたは</p>
              <p class="font-bunkyu-midashi">この授業を履修するのがオススメ！</p>
            </div>
            <div class="result-section-area2-retryandshare">
              <div class="result-section-area2-retryandshare-retry">
                <button class="font-bunkyu-midashi" v-on:click="retry">もう一度やり直す</button>
              </div>
              <div class="result-section-area2-retryandshare-share">
                <button class="font-bunkyu-midashi" v-on:click="share">
                  <img src="@/assets/imgs/shindan/share.svg">
                  <p>結果をシェアする</p>
                </button>
              </div>
            </div>
            <div class="result-section-area2-more">
              <OtherClassesComponent :result-classes="resultClasses" />
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  </main>
</template>

<script>
import { abilities } from "../assets/shindan_info/abilities";
import { questions } from "../assets/shindan_info/questions";
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import OtherClassesComponent from '@/components/OtherClassesComponent.vue';
export default {
  name: 'ShindanView',
  components: {
    HeaderComponent,
    FooterComponent,
    OtherClassesComponent
  },
  methods: {
    getOneAtRandom: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    gotoPage: function (pageNumber) {
      this.currPageNumber = parseInt(pageNumber, 10);
      window.scrollTo(0, 0);
    },
    calcResult: function () {
      // 回答チェック
      for (const index of Object.keys(questions)) {
        if (isNaN(this.$data['answer' + index]) || this.$data['answer' + index] == null) {
          this.isShowDialog = true;
          return;
        }
      }
      // ページ遷移
      this.gotoPage(2);
      // 結果の集計
      const resMap = new Map();
      for (const index of Object.keys(abilities)) {
        const ability = abilities[index];
        let resSum = 0;
        for (const abilityIndex of Object.keys(ability.score)) {
          const score = ability.score[abilityIndex];
          const myScore = this.$data['answer' + abilityIndex];
          const res = Math.abs(score - myScore);
          resSum += res;
        }
        resMap.set(ability, resSum);
      }
      const sortedResMap = new Map([...resMap].sort((a, b) => a[1] - b[1]));
      // 数字が低ければ低いほど適正がある
      //console.log(sortedResMap, Array.from(sortedResMap)[0][0]);
      const topRes = Array.from(sortedResMap)[0][0];
      this.resultClasses = topRes.classes;
      this.resultGenreName = topRes.genreName;
    },
    retry: function () {
      this.resultClasses = [];
      this.otherClasses = [];
      this.otherClassesDisp = [];
      this.resultGenreName = null;
      this.answer0 = null;
      this.answer1 = null;
      this.answer2 = null;
      this.answer3 = null;
      this.answer4 = null;
      this.gotoPage(1);
    },
    share: async function () {
      // httpsでしか使えないっぽい
      // TODO: ここいい感じに
      await navigator.share({
        title: 'IN4U',
        text: `おすすめの授業は\n
        ・\n
        ・\n
        ・\n
        でした！`,
        url: 'https://example.com/',
      });
    }
  },
  data() {
    return {
      questions: questions,
      resultClasses: [],
      resultGenreName: null,
      currPageNumber: 0,
      answer0: null,
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      isShowDialog: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.shindan {
  position: absolute;
  top: 0;
  left: 0;
  background-color: $color-bg;
  color: $white;
  width: 100vw;

  .shindan-inner {
    display: flex;
    justify-content: center;
  }

  ul,
  li {
    list-style: none;
  }

  .top-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;

    img {
      width: 80vw;
      filter: blur(12px);
    }
  }

  .shindan-dialog-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 30;

    .shindan-dialog {
      backdrop-filter: blur(40px);
      background-color: rgba(57, 76, 89, 0.32);
      display: inline-block;
      margin-top: 120px;
      padding: 86px 96px 0 96px;
      border-radius: 332.5px;

      .shindan-dialog-title {
        font-size: $font-xm;
        margin: 64px;
      }

      .shindan-dialog-title:before,
      .shindan-dialog-title:after {
        content: url(../assets/imgs/shindan/radiobutton/button1.svg);
        vertical-align: middle;
        padding: 5px;
        transform: scale(10);
      }

      .shindan-dialog-text {
        font-size: $font-xsm;
        line-height: 1.5;
        color: transparent;
        -webkit-text-stroke: 0.5px $white;
      }

      .shindan-dialog-button {
        width: 80px;
        height: 80px;
        font-size: $font-x;
        margin: 64px;
        border-radius: 50%;
        border: 1px solid $white;
        background: transparent;
        color: $white;
        position: relative;
      }

      .shindan-dialog-button:after {
        content: "CLOSE";
        font-size: $font-s;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 0);

        padding: 4px;

        border-radius: 50px;

        backdrop-filter: blur(40px);
        background-color: rgba(57, 76, 89);

        font-family: bely-display, sans-serif;
        font-weight: 400;
        font-style: normal;
      }

      .shindan-dialog-button:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }

  .result-section-classes-bg {
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, 0);
    width: 130vw;
    height: 160vh;
    border-radius: 50%;
    background-color: #093c69;
    /*rgba(104, 255, 237, 0.15);*/
  }

  .result-section-classes-bg-3 {
    top: -80vh;
  }

  .result-section-classes-bg-4 {
    top: -80vh;
  }

  .result-section-classes-bg-5 {
    top: -50vh;
  }

  .shindan-main {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    width: 70vw;

    img {
      width: 100%;
    }

    .about-section {
      height: 200vh;

      .tategaki {
        writing-mode: vertical-rl;
        font-size: $font-m;

        position: absolute;
        padding: 7px;
        border-radius: 5px;

        .number {
          text-combine-upright: all;
          font-size: $font-x;
        }

      }

      .drop-shadow {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      }

      .tategaki-1 {
        top: 13%;
        left: 5%;

        background-color: $color-tategaki1;
      }

      .tategaki-2 {
        top: 6%;
        right: 5%;

        background-color: $color-tategaki2;
      }

      .tategaki-3 {
        top: 31%;
        right: -15%;

        border-radius: 0;
        padding: 0;

        line-height: 1.3;
        border-right: 4px solid $white;
      }

      .about-shindan {
        position: absolute;
        top: 20%;
        transform: translate(-50%, -50%);

        display: inline-block;
        padding: 30px;
        background-color: $color-about-shindan;
        border-radius: 25px;

        p {
          margin: 0;
        }

        .about-shindan-title {
          display: block;
          font-size: $font-m;
          margin-bottom: 18px;
          color: $black;
        }

        .about-shindan-text {
          display: inline-block;
          font-weight: bold;
        }
      }

      .about-img {
        position: absolute;
        top: 35%;
      }

      .start-button {
        position: absolute;
        top: 83%;
        left: 50%;
        transform: translate(-50%, -50%);

        button {
          margin: 0;
          padding-top: 16px;
          padding-bottom: 16px;
          padding-left: 32px;
          padding-right: 32px;
          font-size: $font-m;
          border-radius: 52px;
          border: none;
          color: $white;
          background-color: $color-about-shindan;
          cursor: pointer;
        }

        button:hover {
          background-color: $color-about-shindan-selected;
        }
      }
    }

    .shindan-section {
      height: 300vh;

      .shindan-text {
        font-size: $font-sm;
      }

      .shindan-index-number {
        font-size: $font-xm;
      }

      .shindan-text-spacer {
        margin-left: 16px;
      }

      .answer-select {
        position: relative;

        .answer-select-item {
          position: relative;
          height: 32px;

          .answer-select-item-inner {
            position: absolute;
            transform: translate(50%, -50%);
            display: inline-block;
          }

          .answer-select-item-inner-1 {
            left: 20%;
          }

          .answer-select-item-inner-2 {
            left: 40%;
          }

          .answer-select-item-inner-3 {
            left: 60%;
          }

          .answer-select-item-inner-4 {
            left: 38%;
          }

          .answer-select-item-inner-5 {
            left: 65%;
          }
        }

        input[type=radio]+label:before {
          content: "";
          position: relative;
          display: inline-block;
          background-size: contain;
          background-repeat: no-repeat;
          width: 32px;
          height: 32px;
          padding-left: 10px;
        }

        input[type=radio][value="1"]+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button1.svg);
        }

        input[type=radio][value="2"]+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button2.svg);
        }

        input[type=radio][value="3"]+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button3.svg);
        }

        input[type=radio][value="4"]+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button1.svg);
        }

        input[type=radio][value="5"]+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button2.svg);
        }

        input[type=radio][value="1"]:checked+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button1_selected.svg);
        }

        input[type=radio][value="2"]:checked+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button2_selected.svg);
        }

        input[type=radio][value="3"]:checked+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button3_selected.svg);
        }

        input[type=radio][value="4"]:checked+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button1_selected.svg);
        }

        input[type=radio][value="5"]:checked+label:before {
          position: absolute;
          top: 0;
          left: -38px;
          background-image: url(../assets/imgs/shindan/radiobutton/button2_selected.svg);
        }

        input[type=radio] {
          display: none;
        }
      }

      .answer-result-button {
        width: 180px;
        height: 180px;

        margin-top: 100px;

        color: $white;
        background-color: rgba(217, 217, 217, 0.35);
        border: none;
        border-radius: 50%;
        font-size: $font-sm;
      }

      .answer-result-button:hover {
        background-color: rgba(217, 217, 217, 0.5);
      }
    }

    .result-section {
      h2 {
        position: relative;
        z-index: 2;
        font-size: $font-m;
      }

      .result-section-title {
        margin-top: 126px;
      }

      .result-section-classes-pos-3 {
        position: absolute;
        top: 200px;
        left: calc(360px / -2 + 32px);
      }

      .result-section-classes-pos-4 {
        position: absolute;
        top: 300px;
        left: calc(360px / -2 + 32px);
      }

      .result-section-classes-pos-5 {
        position: absolute;
        top: 200px;
        left: calc(360px / -2 + 32px);
      }

      .result-section-classes {

        /* 共通設定 */
        .result-section-classes-contents {
          position: absolute;
          top: 0;
          left: 0;

          img {
            width: 360px;
          }

          p {
            position: absolute;
            writing-mode: vertical-rl;
            font-size: $font-sm;
          }
        }

        /* 3つのとき */
        $item-offset-left: calc(360px + 16px);
        $item-offset-top: calc(360px - 30px);

        .result-section-classes-item-3-0 {
          top: 0;
          left: 0;
        }

        .result-section-classes-item-3-1 {
          top: 0;
          left: $item-offset-left;
        }

        .result-section-classes-item-3-2 {
          top: 0;
          left: calc($item-offset-left * 2);
        }

        /* 4つのとき */

        .result-section-classes-item-4-0 {
          top: calc(360px / -2);
          left: 0;
        }

        .result-section-classes-item-4-1 {
          top: 0;
          left: 360px - 16px;
        }

        .result-section-classes-item-4-2 {
          top: 0;
          left: calc($item-offset-left * 2 - 16px);
        }

        .result-section-classes-item-4-3 {
          top: calc(360px / -2);
          left: calc($item-offset-left * 3 - 48px);
        }

        /* 5つのとき */

        .result-section-classes-item-5-0 {
          top: 0;
          left: 0;
        }

        .result-section-classes-item-5-1 {
          top: 0;
          left: $item-offset-left;
        }

        .result-section-classes-item-5-2 {
          top: 0;
          left: calc($item-offset-left * 2);
        }

        .result-section-classes-item-5-3 {
          top: $item-offset-top;
          left: calc($item-offset-left / 2);
        }

        .result-section-classes-item-5-4 {
          top: calc(360px - 30px);
          left: calc(($item-offset-left * 2) - ($item-offset-left / 2));
        }

      }

      .result-section-area2-3 {
        margin-top: 625px;
      }

      .result-section-area2-4 {
        margin-top: 625px;
      }

      .result-section-area2-5 {
        margin-top: 925px;
      }

      .result-section-area2 {
        .result-section-area2-message {
          margin-bottom: 75px;

          p {
            font-size: $font-m;
            margin: 0;
            padding: 0;
          }

          span {
            padding-bottom: 2px;
            border-bottom: 3px solid $white;
          }
        }

        .result-section-area2-retryandshare {

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;

          margin-bottom: 75px;

          .result-section-area2-retryandshare-retry {
            button {
              color: $white;
              background-color: rgba(217, 217, 217, 0.35);
              border: none;
              padding: 36px;
              border-radius: 100px;
              font-size: $font-sm;
            }

            button:hover {
              background-color: rgba(217, 217, 217, 0.5);
            }
          }

          .result-section-area2-retryandshare-share {
            button {
              background-color: transparent;
              border: none;
              color: $white;
              font-size: $font-s;
            }

            img {
              width: 80px;
              height: 80px;
            }

            p {
              margin: 0;
              padding: 0;
              font-size: $font-s;
            }
          }
        }
      }
    }
  }
}
</style>
