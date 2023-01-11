<template>
  <div class="header font-bely">
    <div class="logo_position"><a href="/" class="logo_text">IN4U</a>
      <img src="@/assets/imgs/header_footer/menu.png" alt="menu" class="menu_pc"
        v-on:click="() => { this.isShowMenu = !this.isShowMenu }">
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
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
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

/* https://kasumiblog.org/vue-js-fadein-fadeout/ */
.menu-enter-active,
.menu-leave-active {
  transition: all .3s;
}

.menu-enter,
.menu-leave-to {
  scale: 0;
}

.header {
  position: fixed;
  /* ヘッダーを固定する */
  margin: 0;
  top: -50px;
  /* 上部から配置の基準位置を決める */
  left: 0;
  /* 左から配置の基準位置を決める */
  width: 100%;
  /* ヘッダーの横幅を指定する */
  height: 150px;
  /* ヘッダーの高さを指定する */
  padding: 0px;
  /* ヘッダーの余白を指定する(上下左右) */
  background-color: $header-bg;
  /* ヘッダーの背景色を指定する */
  z-index: 999;

  .header-menu-wrapper {
    width: 100%;
    height: 100%;
    position: relative;

    .header-menu {
      transform-origin: top right;
      backdrop-filter: blur(40px);
      background-color: $top-headermenu-bg;
      display: inline-block;
      border-radius: 31px;
      position: absolute;
      top: 105px;
      right: 80px;
      z-index: 1001;

      @include mq(lg) {
        top: 105px;
        right: 0;
        width: 100%;
      }

      .header-menu-items {
        .header-menu-item {
          font-size: $font-m;

          @include mq(lg) {
            font-size: $font-sm;
          }

          font-family: toppan-bunkyu-midashi-go-std,
          sans-serif;
          font-weight: 900;
          font-style: normal;

          position: relative;
          list-style: none;

          text-align: left;
          padding: 23px 46px 23px 46px;

          a {
            -webkit-text-stroke: 1px $white;
            color: transparent;
            text-decoration: none;
          }
        }

        .header-menu-item::before {
          content: "";
          display: inline-block;
          width: calc($font-lm * 2 / 3);
          height: calc($font-lm * 2 / 3);
          position: absolute;
          top: calc($font-lm*1.6);
          margin-left: calc(-1 * $font-lm - 10px);
          background-image: url(../assets/imgs/shindan/radiobutton/button1.svg);
          background-size: cover;
        }
      }
    }
  }
}

.logo_position {
  position: fixed;
  left: 30px;
  top: 20px;
  z-index: 1000;

  .menu_pc {
    position: fixed;
    z-index: 100;
    /* 重なり順 */
    height: 100px;
    /* 縮小 */
    right: 30px;
    top: 0px;

    animation: menuScaleOut 0.5s forwards;
  }

  .menu_pc:hover {
    animation: menuScaleOn 0.5s forwards;
  }

  .logo_text {
    font-family: bely-display, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: $font-xsm;
    color: $white;
    text-decoration: none;
    transform-origin: center;
    animation: menuTextScaleOut 0.5s forwards;
  }

  .logo_text:hover {
    animation: menuTextScaleOn 0.5s forwards;
  }
}
</style>
