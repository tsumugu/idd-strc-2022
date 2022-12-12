<template>
  <div class="header font-bely">
    <div class="logo_position">IN4U
      <img src="@/assets/imgs/header_footer/menu.png" alt="menu" class="menu_pc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
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
