<template>
  <main class="select" ref="body">
    <HeaderComponent />
    <div id="mouse-stalker-wrapper" ref="mousestalker">
      <div id="mouse-stalker">
        <div id="mouse-stalker-inner">
          &lt; &gt;
        </div>
      </div>
    </div>
    <div class="select-wrapper">
      <div class="planet-img">
        <img :src=planetImgUrl>
      </div>
      <div class="class-title">
        <div class="class-title-text font-bunkyu-midashi">{{ classTitle }}</div>
        <!--
        参考：https://www.conifer.jp/csstest/svg-path-text.html
        -->
        <div class="class-title-svg">
          <svg width="1000px" height="500px" viewBox="0 0 1000 500">
            <defs>
              <path id="st0"
                d="M6.77,15.35C0,148.53,211.99,300.86,550.89,309.96c328.57,8.82,541.99-118.12,548.56-251.76" />
            </defs>
            <router-link :to=routerTo>
              <text font-size="64" font-family="toppan-bunkyu-midashi-go-std" letter-spacing="1.2" stroke="white"
                stroke-width="0.5px" font-weight="900" fill="none" dx="-15" dy="0">
                <textPath xlink:href="#st0" startOffset="50%" text-anchor="middle">{{ classTitle }}</textPath>
              </text>
            </router-link>
          </svg>
        </div>
      </div>
      <div class="planet-selector-wrapper">
        <IndicatorComponent class="planet-selector" :propsPageNum="currPageNum" @onPageSelected="onPageSelected" />
      </div>
    </div>
  </main>
</template>

<script>
import IndicatorComponent from '@/components/IndicatorComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { WaitCertainIntervalExecutor } from '@/utils/waitCertainIntervalExecutor';

const classes = [
  {
    title: "情報デザイン学科とは",
    imgUrl: require('@/assets/imgs/select/about_idd.png'),
    routerTo: "about-idd"
  },
  {
    title: "情報デザイン診断",
    imgUrl: require('@/assets/imgs/select/shindan.png'),
    routerTo: "shindan"
  },
  {
    title: "就職・資格",
    imgUrl: require('@/assets/imgs/select/job.png'),
    routerTo: "job"
  },
  {
    title: "入試情報",
    imgUrl: require('@/assets/imgs/select/admission.png'),
    routerTo: "admission"
  },
  {
    title: "イベント・アクセス",
    imgUrl: require('@/assets/imgs/select/event.png'),
    routerTo: "event"
  }
];

export default {
  name: "SelectView",
  components: {
    IndicatorComponent,
    HeaderComponent
  },
  data() {
    return {
      currPageNum: 0,
      classTitle: classes[0].title,
      planetImgUrl: classes[0].imgUrl,
      routerTo: classes[0].routerTo
    };
  },
  methods: {
    onPageSelected: function (pageNum) {
      this.currPageNum = pageNum;
      this.classTitle = classes[pageNum].title;
      this.planetImgUrl = classes[pageNum].imgUrl;
      this.routerTo = classes[pageNum].routerTo;
    },
    move: function (direction) {
      this.currPageNum += direction;
      if (this.currPageNum > classes.length - 1) {
        this.currPageNum = 0;
      } else if (0 > this.currPageNum) {
        this.currPageNum = classes.length - 1;
      }
      this.onPageSelected(this.currPageNum);
    }
  },
  mounted: function () {
    const waitCertainIntervalExecutor = new WaitCertainIntervalExecutor();
    const deltaXThreshold = 50;
    const deltaYThreshold = 50;
    const mouseStalkerVisibleStatus = document.getElementById("mouse-stalker");
    console.log(mouseStalkerVisibleStatus, mouseStalkerVisibleStatus.style.display);
    window.addEventListener('wheel', (e) => {
      // Macの場合は、設定 > トラックパッド > その他のジェスチャー > ページ間をスワイプ をオフにする必要あり
      const deltaX = e.deltaX;
      const deltaY = e.deltaY;
      if (Math.abs(deltaX) > deltaXThreshold | Math.abs(deltaY) > deltaYThreshold) {
        waitCertainIntervalExecutor.exec(1000, () => {
          if (deltaX > 0 | deltaY > 0) {
            this.move(1);
          } else if (deltaX < 0 | deltaY < 0) {
            this.move(-1);
          }
        });
      }
    });
    const stalker = this.$refs.mousestalker;

    window.addEventListener('mousemove', function (e) {
      if (["textPath", "BUTTON"].includes(e.target.tagName) || ["header-menu-wrapper", "logo_position", "menu_pc", "header-menu", "header-menu-wrapper", "header-menu-items", "header-menu-item"].includes(e.target.className)) {
        stalker.style.display = "none";
      } else {
        stalker.style.display = "block";
      }
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import "@/assets/scss/_breakpoint.scss";
@import "@/assets/scss/_mixin.scss";

.select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $color-bg;
  overflow: hidden;

  #mouse-stalker-wrapper {
    position: fixed;
    top: -75px;
    left: -75px;
    z-index: 999;
    width: 150px;
    height: 150px;
    transform: translate(0, 0);
    transition: transform 0.2s;
    transition-timing-function: ease-out;
    pointer-events: none;

    #mouse-stalker {
      width: 150px;
      height: 150px;
      backdrop-filter: blur(40px);
      background-color: rgba(57, 76, 89, 0.32);
      border-radius: 50%;

      @include mq(lg) {
        display: none;
      }

      #mouse-stalker-inner {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        backdrop-filter: blur(40px);
        background-color: rgba(57, 76, 89, 0.1);
        transform: translate(25%, 25%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: $white;
        font-size: $font-xsm;
      }
    }
  }

  .select-wrapper {
    position: relative;
    max-width: $large-width;
    margin: 0 auto;

    @include mq(lg) {
      height: 100%;
    }
  }

  .planet-img {
    img {
      position: absolute;
      left: 0;
      top: -60%;
      width: 100%;

      @include mq(lg) {
        top: 50%;
        left: 35%;
        width: auto;
        height: 70%;
        transform: translate(0, -50%)
      }
    }
  }

  .class-title {
    margin: auto;

    .class-title-text {
      position: absolute;
      top: 120px;
      left: 40px;

      writing-mode: vertical-rl;
      font-size: $font-xsm;

      -webkit-text-stroke: 1px $white;
      color: transparent;

      display: none;

      @include mq(lg) {
        display: block;
      }
    }

    .class-title-svg {
      position: relative;
      width: 100%;
      padding-top: 100%;
      z-index: 3;

      @include mq(lg) {
        display: none;
      }

      svg {
        transform: rotate(-4.5deg);
        position: absolute;
        top: -7%;
        left: 0;
        width: 100%;
        height: 100%;

        /*
        a {
          transform-origin: center center;
          animation: selectTextScaleOut 0.5s forwards;
        }

        a:hover {
          animation: selectTextScaleOn 0.5s forwards;
        }
        */
      }
    }
  }

  .planet-selector-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1.8 / 1;

    @include mq(lg) {
      aspect-ratio: auto;
      /*top: auto;
      bottom: 250px;*/
      top: 650px;
      bottom: auto;
      left: -50px;
    }

    .planet-selector {
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: 5;
      transform: translate(-35%, 0);

      @include mq(lg) {
        top: 0;
        bottom: auto;
        left: 30px;
        transform: rotate(90deg);
      }

    }
  }

}
</style>
