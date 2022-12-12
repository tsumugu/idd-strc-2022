<template>
  <div class="footer">
    <div id="button"></div>
    <div id="container">
      <div id="cont">
        <div class="footer_center">
          <h1>SITE MAP</h1>
          <h2>-情報デザイン学科とは</h2>
          <h3>-情報デザイン診断</h3>
          <h4>-就職・資格</h4>
          <h5>-入試方法</h5>
          <h6>-イベント・アクセス</h6>
          <div>
            <img src="@/assets/imgs/header_footer/twitter.png" class="share1">
            <div>
              <img src="@/assets/imgs/header_footer/instagram.png" class="share2">

              <div>
                <img src="@/assets/imgs/header_footer/nekoyanagi.png" class="nekoyanagi">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

/* ここにCSSを書く */
* {
  margin: 0px;
  padding: 0px;
}

.footer {
  position: absolute;
  width: 1735px;
  height: 988px;
  left: -144px;
  border: #486888 12px solid;
  border-top-left-radius: 50%100%;
  border-top-right-radius: 50%100%;
  background: #486888;
  margin: 0 auto;
  position: relative;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

.footer #button:hover {
  width: 35px;
  height: 35px;
  border: #486888 12px solid;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
}

.footer {
  bottom: 0;
  left: -15px;
  position: fixed;
  width: 100%;
  height: 60px;
  /*下から最初どれだけ出てるか*/
  overflow: hidden;
  margin: 0 auto;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 999;
}

.footer:hover {
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  height: 330px;
  /*縦にビヨーンてなる高さ*/
}

.footer #container {
  position: relative;
  /*width: 1735px;
      height: 988px;*/
  left: -144px;
  /*
      border: #486888 12px solid;
      border-top-left-radius:50%100%;
      border-top-right-radius:50%100%;
      */
  position: relative;
  top: 0;
  left: 0;
  /*background: #486888;*/
}

.footer #cont {
  position: relative;
  top: -45px;
  right: 190px;
  width: 150px;
  height: auto;
  margin: 0 auto;
}

.footer_center {
  width: 500px;
  float: left;
  text-align: center;
}

.footer h1 {
  font-family: bely-display, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: $font-m;
  font-weight: 100;
  margin-top: 60px;
  margin-left: 40px;
  color: white;
}

.footer h2,
h3,
h4,
h5,
h6 {

  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: $font-s;
  font-weight: 100;
  margin-left: 40px;
  color: white;
}

.share1 {
  width: 30px;
  margin-left: -10px;
}

.share2 {
  position: absolute;
  width: 30px;
  margin-left: 30px;
  top: 265px;
}

.nekoyanagi {
  margin-left: 35px;
  width: 80px;
}
</style>
