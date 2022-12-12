<template>
  <main class="admission">
    <TopPlanetComponent :imgPath='require("@/assets/imgs/admission/top4.png")' title="" />
    <div class="v244_13">
      <div class="v244_14"></div>
      <div class="v286_104"></div>
      <div class="v517_1920"></div><span class="v244_15">入試方法 </span>
      <div class="v244_292"></div>
      <div class="v244_293"></div>
      <div class="v244_294"></div>
      <div class="v244_295"></div><span class="v244_296">一般入試</span><span
        class="v244_300">美大といえばこの入試方法<br>実技と学科で入学できる</span><span
        class="v244_301">一般入試の学科試験が<br>共通テストに<br>置き換わったイメージ</span><span class="v244_156">入試方法は４種類！</span><span
        class="v244_302">共通テストのみで<br>合否が出る<br>一般大学との<br>併願にもおすすめ</span><span
        class="v244_303">ポートフォリオなどで<br>作品を見て判断してもらえる</span><span class="v244_297">共通テストⅠ方式</span><span
        class="v244_298">共通テストⅡ方式</span><span class="v244_299">推薦方式</span>
      <div class="v455_1731"></div>
      <div class="v508_1682"></div>
      <div class="v508_1684"></div>
      <div class="v508_1685"></div>
      <div class="v508_1686"></div><span class="v455_1732">日程</span><span class="v455_1733">人数</span><span
        class="v455_1734">科目</span><span class="v455_1735">編入学・転科</span>
      <div class="v455_1736">
        <div class="v455_1737"></div>
        <div class="v455_1738"></div>
        <div class="v455_1739"></div>
        <div class="v455_1740"></div><span class="v455_1741">一般</span><span class="v455_1742">共通テストⅠ</span><span
          class="v455_1743">共通テストⅡ</span><span class="v455_1744">総合型</span>
        <div class="v455_1745"></div>
        <div class="v455_1746"></div>
        <div class="v455_1747"></div>
        <div class="v455_1748"></div><span class="v455_1749">2/6(月)</span><span class="v455_1750">1月くらい</span><span
          class="v455_1751">11/20</span><span class="v508_1679"></span><span class="v455_1752">2/9(木)</span>
        <div class="v455_1753"></div>
        <div class="v455_1754"></div>
        <div class="v455_1755"></div>
        <div class="v455_1756"></div>
        <div class="v455_1757"></div>
        <div class="v455_1758"></div><span class="v455_1759">国語・英語10:00-12:30</span><span
          class="v455_1760">共通テスト<br>(5科目)</span><span class="v455_1761">ポートフォリオ 作品 <br>面接10:00-</span><span
          class="v455_1762">共通テスト<br>(2科目)</span><span class="v455_1763">視覚表現10:00-16:00</span><span
          class="v455_1764">鉛筆デッサン14:00-17:00</span><span class="v508_1678"></span><span class="v508_1680"></span>
      </div>
      <div class="v455_1765"></div><span class="v455_1766">推薦14人</span><span class="v455_1767">共テⅡ10人</span><span
        class="v455_1768">共テⅠ16人</span><span class="v455_1769">一般21人</span>
      <div class="v487_1319">
        <div class="v487_1320"></div>
        <div class="name"></div>
        <div class="name"></div>
      </div>
      <div class="name"></div>
      <div class="name"></div>
      <div class="name"></div>
      <div class="name"></div>
      <div class="name"></div>
      <div class="name"></div>
      <div class="name"></div>
    </div>
  </main>
</template>

<script>
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
export default {
  name: 'AdmissionView',
  components: {
    TopPlanetComponent
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

* {
  box-sizing: border-box;
}

body {
  font-size: $font-s;
}

.wakusei {
  position: absolute;
  width: 1305px;
  height: 1305px;
  left: 67px;
  top: -846px;

  background: url(../assets/imgs/admission/bg1.png);
  mix-blend-mode: normal;
  filter: blur(17.5px);
  border-radius: 50%;
}

.v244_13 {
  width: 100%;
  height: 4884px;
  background: rgba(12, 24, 78, 1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

.v244_14 {
  width: 100%;
  height: 100%;
  background: rgba(18, 11, 58, 0.10000000149011612);
  opacity: 1;
  position: absolute;
  top: 15px;
  left: 195px;
  overflow: hidden;
}

.bg1 {
  position: absolute;
  width: 1305px;
  height: 1305px;
  left: 67px;
  top: -846px;
  background: url(../assets/imgs/admission/bg1.png);
  mix-blend-mode: normal;
  filter: blur(17.5px);
}


.v517_1920 {
  width: 220px;
  height: 86px;
  background: rgba(124, 136, 187, 0.47999998927116394);
  opacity: 1;
  position: absolute;
  top: 137px;
  left: 610px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-top-left-radius: 53px;
  border-top-right-radius: 53px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
  overflow: hidden;
}

.v244_15 {
  position: absolute;
  width: 144px;
  height: 54px;
  left: 648px;
  top: 153px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  /* ボックスの高さと同一 */


  color: #FFFFFF;

}

.v244_292 {
  width: 493px;
  height: 493px;
  background: rgba(255, 255, 255, 0.20000000298023224);
  opacity: 1;
  position: absolute;
  top: 277px;
  left: 260px;
  border-radius: 50%;
}

.v244_293 {
  width: 493px;
  height: 493px;
  background: rgba(255, 255, 255, 0.20000000298023224);
  opacity: 1;
  position: absolute;
  top: 612px;
  left: 673px;
  border-radius: 50%;
}

.v244_294 {
  width: 493px;
  height: 493px;
  background: rgba(255, 255, 255, 0.20000000298023224);
  opacity: 1;
  position: absolute;
  top: 960px;
  left: 260px;
  border-radius: 50%;
}

.v244_295 {
  width: 493px;
  height: 493px;
  background: rgba(255, 255, 255, 0.20000000298023224);
  opacity: 1;
  position: absolute;
  top: 1280px;
  left: 673px;
  border-radius: 50%;
}

.v244_296 {
  position: absolute;
  width: 144px;
  height: 54px;
  left: 435px;
  top: 399px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  /* ボックスの高さと同一 */


  color: #FFFFFF;

}

.v244_300 {
  position: absolute;
  width: 384px;
  height: 104px;
  left: 315px;
  top: 498px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-xm;
  text-align: center;

  color: #FFFFFF;

}

.v244_301 {
  position: absolute;
  width: 320px;
  height: 150px;
  left: 760px;
  top: 823px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-xm;
  text-align: center;

  color: #FFFFFF;

}

.v244_156 {
  width: 37px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 276px;
  left: 1104px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-m;
  opacity: 1;
  text-align: left;
}

.v244_302 {
  position: absolute;
  width: 456px;
  height: 108px;
  left: 279px;
  top: 1185px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  text-align: center;

  color: #FFFFFF;
}

.v244_303 {
  position: absolute;
  width: 443px;
  height: 101px;
  left: 698px;
  top: 1493px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  text-align: center;

  color: #FFFFFF;

}

.v244_297 {
  position: absolute;
  width: 288px;
  height: 54px;
  left: 776px;
  top: 729px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  /* ボックスの高さと同一 */


  color: #FFFFFF;

}

.v244_298 {
  position: absolute;
  width: 288px;
  height: 54px;
  left: 363px;
  top: 1093px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  /* ボックスの高さと同一 */


  color: #FFFFFF;
}

.v244_299 {
  position: absolute;
  width: 144px;
  height: 54px;
  left: 845px;
  top: 1399px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;
  /* ボックスの高さと同一 */


  color: #FFFFFF;

}

.v455_1731 {
  width: 685px;
  height: 537px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 3227px;
  left: 503px;
  border-top-left-radius: 52px;
  border-top-right-radius: 52px;
  border-bottom-left-radius: 52px;
  border-bottom-right-radius: 52px;
  overflow: hidden;
}

.v508_1682 {
  width: 159px;
  height: 86px;
  background: rgba(53, 63, 106, 1);
  opacity: 1;
  position: absolute;
  top: 1879px;
  left: 239px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-top-left-radius: 53px;
  border-top-right-radius: 53px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
  overflow: hidden;
}

.v508_1684 {
  width: 159px;
  height: 86px;
  background: rgba(53, 63, 106, 1);
  opacity: 1;
  position: absolute;
  top: 2459px;
  left: 257px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-top-left-radius: 53px;
  border-top-right-radius: 53px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
  overflow: hidden;
}

.v508_1685 {
  width: 159px;
  height: 86px;
  background: rgba(53, 63, 106, 1);
  opacity: 1;
  position: absolute;
  top: 3169px;
  left: 254px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-top-left-radius: 53px;
  border-top-right-radius: 53px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
  overflow: hidden;
}

.v508_1686 {
  width: 260px;
  height: 86px;
  background: rgba(53, 63, 106, 1);
  opacity: 1;
  position: absolute;
  top: 3807px;
  left: 273px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-top-left-radius: 53px;
  border-top-right-radius: 53px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
  overflow: hidden;
}

.v455_1732 {
  position: absolute;
  width: 132.63px;
  height: 40.43px;
  left: 281px;
  top: 1893px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;

  color: #FFFFFF;

}

.v455_1733 {
  position: absolute;
  width: 132.63px;
  height: 40.43px;
  left: 299px;
  top: 2475px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;

  color: #FFFFFF;

}

.v455_1734 {
  position: absolute;
  width: 132.63px;
  height: 40.43px;
  left: 299px;
  top: 3186px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;

  color: #FFFFFF;

}

.v455_1735 {
  position: absolute;
  width: 355px;
  height: 40px;
  left: 299px;
  top: 3820px;

  font-family: 'Toppan Bunkyu Midashi Gothic';
  font-style: normal;
  font-weight: 900;
  font-size: $font-m;
  line-height: $font-x;

  color: #FFFFFF;

}

.v455_1736 {
  width: 100%;
  height: 391px;
  /* background: url(../assets/imgs/admission/v455_1736.png); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 2000px;
  left: 117px;
  overflow: hidden;
}

.v455_1737 {
  width: 241px;
  height: 391px;
  background: rgba(168, 138, 218, 0.6700000166893005);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 238px;
  overflow: hidden;
}

.v455_1738 {
  width: 240px;
  height: 391px;
  background: rgba(127, 212, 216, 0.6800000071525574);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 480px;
  overflow: hidden;
}

.v455_1739 {
  width: 241px;
  height: 391px;
  background: rgba(87, 143, 195, 0.7599999904632568);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 719px;
  overflow: hidden;
}

.v455_1740 {
  width: 240px;
  height: 391px;
  background: rgba(178, 103, 179, 0.5699999928474426);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 959px;
  overflow: hidden;
}

.v455_1741 {
  width: 120px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 16px;
  left: 292px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1742 {
  width: 155px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 5px;
  left: 517px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1743 {
  width: 121px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 22px;
  left: 778px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1744 {
  width: 121px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 22px;
  left: 1018px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1745 {
  width: 240px;
  height: 133px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 193px;
  left: 0px;
  overflow: hidden;
}

.v455_1746 {
  width: 240px;
  height: 66px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 130px;
  left: 0px;
  overflow: hidden;
}

.v455_1747 {
  width: 240px;
  height: 65px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 67px;
  left: 0px;
  overflow: hidden;
}

.v455_1748 {
  width: 240px;
  height: 66px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  top: 324px;
  left: 0px;
  overflow: hidden;
}

.v455_1749 {
  width: 148px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 250px;
  left: 45px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1750 {
  width: 126px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 153px;
  left: 56px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1751 {
  width: 125px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 89px;
  left: 55px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v508_1679 {
  width: 10px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 80px;
  left: 113px;
  font-family: Adelle Sans Devanagari;
  font-weight: Bold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1752 {
  width: 143px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 348px;
  left: 50px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1753 {
  width: 238px;
  height: 62px;
  background: rgba(232, 232, 232, 1);
  opacity: 1;
  position: absolute;
  top: 197px;
  left: 240px;
  overflow: hidden;
}

.v455_1754 {
  width: 241px;
  height: 65px;
  background: rgba(232, 232, 232, 1);
  opacity: 1;
  position: absolute;
  top: 133px;
  left: 719px;
  overflow: hidden;
}

.v455_1755 {
  width: 240px;
  height: 65px;
  background: rgba(232, 232, 232, 1);
  opacity: 1;
  position: absolute;
  top: 67px;
  left: 959px;
  overflow: hidden;
}

.v455_1756 {
  width: 240px;
  height: 65px;
  background: rgba(232, 232, 232, 1);
  opacity: 1;
  position: absolute;
  top: 133px;
  left: 479px;
  overflow: hidden;
}

.v455_1757 {
  width: 238px;
  height: 66px;
  background: rgba(232, 232, 232, 1);
  opacity: 1;
  position: absolute;
  top: 324px;
  left: 240px;
  overflow: hidden;
}

.v455_1758 {
  width: 479px;
  height: 64px;
  background: rgba(232, 232, 232, 1);
  opacity: 1;
  position: absolute;
  top: 260px;
  left: 240px;
  overflow: hidden;
}

.v455_1759 {
  width: 130px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 202px;
  left: 294px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1760 {
  width: 109px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 144px;
  left: 784px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1761 {
  width: 257px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 76px;
  left: 949px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1762 {
  width: 111px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 144px;
  left: 543px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1763 {
  width: 124px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 336px;
  left: 296px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1764 {
  width: 192px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 272px;
  left: 384px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v508_1676 {
  width: 59px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 240px;
  left: 99px;
  font-family: Adelle Sans Devanagari;
  font-weight: Bold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v508_1677 {
  width: 59px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 339px;
  left: 100px;
  font-family: Adelle Sans Devanagari;
  font-weight: Bold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v508_1681 {
  width: 59px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 73px;
  left: 1088px;
  font-family: Adelle Sans Devanagari;
  font-weight: Bold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v508_1678 {
  width: 72px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 157px;
  left: 563px;
  font-family: Adelle Sans Devanagari;
  font-weight: Bold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v508_1680 {
  width: 72px;
  color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 157px;
  left: 803px;
  font-family: Adelle Sans Devanagari;
  font-weight: Bold;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1765 {
  width: 563px;
  height: 540px;
  /*background: url(../assets/imgs/admission/v455_1765.png);*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 2553px;
  left: 535px;
  overflow: hidden;
}

.v455_1766 {
  width: 86px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 2699px;
  left: 686px;
  font-family: Inter;
  font-weight: Regular;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1767 {
  width: 85px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 2881px;
  left: 628px;
  font-family: Inter;
  font-weight: Regular;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1768 {
  width: 86px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 2971px;
  left: 803px;
  font-family: Inter;
  font-weight: Regular;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v455_1769 {
  width: 85px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 2740px;
  left: 894px;
  font-family: Inter;
  font-weight: Regular;
  font-size: $font-s;
  opacity: 1;
  text-align: center;
}

.v487_1319 {
  width: 100%;
  height: 100px;
  /* background: url(../assets/imgs/admission/v487_1319.png); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

.v487_1320 {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.name {
  color: #fff;
}

.v517_1917 {
  width: 55px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 496px;
  left: 1095px;
  font-family: Toppan Bunkyu Midashi Gothic;
  font-weight: Extrabold;
  font-size: $font-xl;
  opacity: 1;
  text-align: left;
}

.name {
  color: #fff;
}
</style>
