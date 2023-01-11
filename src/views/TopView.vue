<template>
  <main class="top">
    <div class="menu">
      <img src="@/assets/imgs/menu.svg" v-on:click="() => { this.isShowMenu = !this.isShowMenu }" />
    </div>
    <div class="header-menu-wrapper">
      <transition name="menu">
        <div class="header-menu" v-show="isShowMenu">
          <ul class="header-menu-items">
            <li class="header-menu-item"><a href="/about-idd" class="header-menu-item-link">情報デザインとは</a></li>
            <li class="header-menu-item"><a href="/shindan" class="header-menu-item-link">情報デザイン診断</a></li>
            <li class="header-menu-item"><a href="/job" class="header-menu-item-link">就職・視覚</a></li>
            <li class="header-menu-item"><a href="/admission" class="header-menu-item-link">入試情報</a></li>
            <li class="header-menu-item"><a href="/event" class="header-menu-item-link">イベント・アクセス</a></li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="text">
      <p class="in4u-logo font-bely">
        <router-link to="/select">IN4U</router-link>
      </p>
      <p class="about about-1 font-bunkyu-midashi ">0から情デを知れる</p>
      <p class="about about-2 font-bunkyu-midashi ">WEBサービス</p>
      <p class="rotate-text rotate-text-1 font-bely">2022. info x for you</p>
      <p class="rotate-text rotate-text-2 font-bely">Tama Art University</p>
    </div>
    <div class="planet">
    </div>
    <div class="planet-contents">
      <div class="figure1"><img src="@/assets/imgs/top/top.png"></div>
      <div class="figure2"><img src="@/assets/imgs/top/middle.png"></div>
      <div class="figure3"><img src="@/assets/imgs/top/bottom.png"></div>
      <div class="stars"><img src="@/assets/imgs/top/stars.png"></div>
      <div class="wakusei"><img src="@/assets/imgs/top/wakusei.png"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'TopView',
  data() {
    return {
      isShowMenu: false
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import "@/assets/scss/_breakpoint.scss";
@import "@/assets/scss/_mixin.scss";

* {
  color: $white;
}

p {
  white-space: nowrap;
}

a {
  text-decoration: none;
}

.menu-enter-active,
.menu-leave-active {
  transition: all .3s;
}

.menu-enter,
.menu-leave-to {
  scale: 0;
}

.top {
  width: 100vw;
  height: 100vh;
  background-color: $color-bg;
  overflow: hidden;

  .header-menu-wrapper {
    position: relative;
    z-index: 999;

    .header-menu {
      backdrop-filter: blur(40px);
      background-color: $top-headermenu-bg;
      display: inline-block;
      border-radius: 31px;
      position: absolute;
      top: 105px;
      right: 15%;
      z-index: 1001;

      transform-origin: top right;

      @include mq(lg) {
        right: calc(11% + 20px);
      }

      @include mq(md) {
        //right: calc(11% + 20px);
        right: 0;
        width: 100%;
      }

      .header-menu-items {

        .header-menu-item {
          position: relative;
          list-style: none;

          text-align: left;
          padding: 23px 46px 23px 46px;

          a {
            font-size: $font-m;
            font-family: toppan-bunkyu-midashi-go-std, sans-serif;
            font-weight: 900;
            font-style: normal;
            -webkit-text-stroke: 1px $white;
            color: transparent;
          }
        }

        .header-menu-item::before {
          content: "";
          display: inline-block;
          width: calc($font-lm * 2 / 3);
          height: calc($font-lm * 2 / 3);
          position: absolute;
          top: calc($font-lm * 1.6);
          margin-left: calc(-1 * $font-lm - 10px);
          background-image: url(../assets/imgs/shindan/radiobutton/button1.svg);
          background-size: cover;
        }
      }
    }
  }

  .menu {
    position: absolute;
    top: 5%;
    right: 11%;
    z-index: 30;

    img {
      width: 96px;
      height: 96px;
    }

    @include mq(lg) {
      top: 5%;
      right: 5%;
    }

  }

  .menu:hover {
    animation: menuScaleOn 0.5s forwards;
  }

  .menu {
    animation: menuScaleOut 0.5s forwards;
  }

  .text {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 15;

    .in4u-logo {
      font-size: $font-xl;

      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 22;

      a {
        padding: 29vw 89vh 29vw 89vh;

        @include mq(lg) {
          font-size: $font-x;
          padding: 48vh 33vw 48vh 33vw;
        }
      }
    }

    .about {
      font-size: $font-x;
      color: transparent;
      -webkit-text-stroke: 0.5px $white;

      position: absolute;
      transform: translate(-50%, -50%);

      @include mq(lg) {
        writing-mode: vertical-rl;
        text-orientation: upright;
        margin: 0;
        padding: 0;
      }
    }

    .about-1 {
      top: 10%;
      left: 25%;

      @include mq(lg) {
        transform: translate(0, 0);
        top: 10%;
        left: 0;
      }
    }

    .about-2 {
      top: 71%;
      left: 78%;

      @include mq(lg) {
        transform: translate(0, -50%);
        bottom: -10%;
        right: 0;
      }
    }

    .rotate-text {
      font-size: $font-m;

      position: absolute;
      transform: translate(-50%, -50%);

      @include mq(lg) {
        display: none;
      }
    }

    .rotate-text-1 {
      font-size: $font-m;

      transform: rotate(-90deg);

      top: 58%;
      left: -5%;
    }

    .rotate-text-2 {
      font-size: $font-m;
      transform: rotate(90deg);

      top: 35%;
      left: 82%;
    }
  }

  .text:hover+.planet {
    animation: planetScaleOn 1s forwards;
  }

  .text+.planet {
    animation: planetScaleOut 1s forwards;
  }

  .planet {
    height: 100vh;
    background-image: url(@/assets/imgs/top.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @include mq(lg) {
      display: none;
    }
  }

  .planet-contents {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    .wakusei {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      z-index: 5;

      img {
        width: 90%;
      }
    }

    .figure1,
    .figure2,
    .figure3,
    .stars {
      position: absolute;
      z-index: 2;
      width: 100vw;
      max-width: 700px;

      img {
        width: 100%;
      }
    }

    .figure1 {
      top: -20%;
      left: -15%;
    }

    .figure2 {
      top: 50%;
      right: -30%;
      transform: translate(0, -50%);
    }

    .figure3 {
      bottom: -20%;
      left: 0;
    }

    .stars {
      width: 100vw;
      height: 100vh;

      z-index: 3;

      img {
        width: auto;
        height: 100%;
      }
    }

    display: none;

    @include mq(lg) {
      display: block;
    }
  }
}
</style>
