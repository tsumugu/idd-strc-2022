<template>
  <div class="header font-bely">
    <div class="logo_position">IN4U
      <img src="@/assets/imgs/header_footer/menu.png" alt="menu" class="menu_pc"
        v-on:click="() => { this.isShowMenu = !this.isShowMenu }">
    </div>
    <div class="header-menu-wrapper">
      <div class="header-menu" v-show="isShowMenu">
        <ul class="header-menu-items">
          <li class="header-menu-item">情報デザイン学科とは</li>
          <li class="header-menu-item">情報デザイン診断</li>
          <li class="header-menu-item">就職・視覚</li>
          <li class="header-menu-item">入試情報</li>
          <li class="header-menu-item">イベント・アクセス</li>
        </ul>
      </div>
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
  background-color: rgba(0, 19, 49, 0.2);
  /* ヘッダーの背景色を指定する */
  z-index: 999;

  .header-menu-wrapper {
    width: 100%;
    height: 100%;
    position: relative;

    .header-menu {
      backdrop-filter: blur(40px);
      background-color: rgba(57, 76, 89, 0.32);
      display: inline-block;
      border-radius: 31px;
      position: absolute;
      top: 105px;
      right: 80px;
      z-index: 1001;

      .header-menu-items {
        .header-menu-item {
          font-size: $font-m;
          font-family: toppan-bunkyu-midashi-go-std, sans-serif;
          font-weight: 900;
          font-style: normal;
          -webkit-text-stroke: 1px $white;
          color: transparent;

          position: relative;
          list-style: none;

          text-align: left;
          padding: 23px 46px 23px 46px;
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
  font-family: bely-display, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: $font-xsm;
  position: fixed;
  left: 30px;
  top: 20px;
  z-index: 1000;
}

.menu_pc {
  position: fixed;
  z-index: 100;
  /* 重なり順 */
  height: 100px;
  /* 縮小 */
  right: 30px;
  top: 0px;
}
</style>
