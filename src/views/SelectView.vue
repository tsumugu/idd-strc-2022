<template>
  <main class="select" ref="body">
    <HeaderComponent />
    <div id="mouse-stalker" ref="mousestalker">
      <div id="mouse-stalker-inner">
        &lt; &gt;
      </div>
    </div>
    <div class="select-wrapper">
      <div class="planet-img">
        <img :src=planetImgUrl>
      </div>
      <div class="class-title">
        <!--
      参考：https://www.conifer.jp/csstest/svg-path-text.html
      -->
        <div class="class-title-svg">
          <svg width="1000px" height="500px" viewBox="0 0 1000 500">
            <!--<svg preserveAspectRatio="xMinYMin meet">-->
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
      console.log(this.currPageNum);
      this.onPageSelected(this.currPageNum);
    }
  },
  mounted: function () {
    const waitCertainIntervalExecutor = new WaitCertainIntervalExecutor();
    const deltaYThreshold = 50;
    window.addEventListener('wheel', (e) => {
      const deltaY = e.deltaY;
      if (Math.abs(deltaY) > deltaYThreshold) {
        waitCertainIntervalExecutor.exec(1000, () => {
          if (deltaY > 0) {
            this.move(1);
          } else if (deltaY < 0) {
            this.move(-1);
          }
        });
      }
    });

    const stalker = this.$refs.mousestalker;
    //const body = this.$refs.body;

    window.addEventListener('mousemove', function (e) {
      if (e.target.tagName == "textPath" || e.target.tagName == "BUTTON") {
        stalker.style.display = "none";
        //body.style.cursor = "pointer";
      } else {
        stalker.style.display = "block";
        // body.style.cursor = "none";
      }
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $color-bg;
  overflow: hidden;

  #mouse-stalker {
    pointer-events: none;
    position: fixed;
    top: -75px;
    left: -75px;
    width: 150px;
    height: 150px;
    backdrop-filter: blur(40px);
    background-color: rgba(57, 76, 89, 0.32);
    border-radius: 50%;
    transform: translate(0, 0);
    transition: transform 0.2s;
    transition-timing-function: ease-out;
    z-index: 999;

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

  .select-wrapper {
    position: relative;
    max-width: $large-width;
    margin: 0 auto;
  }


  .planet-img {
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  .class-title {
    margin: auto;

    .class-title-svg {
      position: relative;
      width: 100%;
      padding-top: 100%;
      z-index: 3;

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

    .planet-selector {
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: 5;
      transform: translate(-35%, 0);
    }
  }

}
</style>
