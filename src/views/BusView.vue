<template>
  <main class="bus">
    <HeaderComponent />
    <TopPlanetComponent :imgPath='require("@/assets/imgs/about_idd/top1.png")' title="路線バス利用案内" />
    <div class="bus-inner font-bunkyu-midashi">
      <div class="bus-inner-selector">
        <div v-show="station == 'hashimoto'">
          <p class="title">橋本駅バスダイヤ</p>
          <div class="circles">
            <div class="circle" v-on:click="() => {
              this.station = 'hashimoto';
              this.direction = 'from';
              this.$router.push('/bus/hashimoto/from');
            }">橋本駅発</div>
            <div class="circle" v-on:click="() => {
              this.station = 'hashimoto';
              this.direction = 'to';
              this.$router.push('/bus/hashimoto/to');
            }">多摩美術<br>大学発</div>
          </div>
        </div>
        <div v-show="station == 'hachioji'">
          <p class="title">八王子駅バスダイヤ</p>
          <div>
            <div v-on:click="() => {
              this.station = 'hachioji';
              this.direction = 'from';
              this.$router.push('/bus/hachioji/from');
            }">八王子駅発</div>
            <div v-on:click="() => {
              this.station = 'hachioji';
              this.direction = 'to';
              this.$router.push('/bus/hachioji/to');
            }">多摩美術<br>大学発</div>
          </div>
        </div>
      </div>
      <div class="bus-inner-dia">
        <div v-show="station == 'hashimoto' && direction == 'from'">
          <p class="title">橋本駅北口発→多摩美術大学行（橋75系統）</p>
          <img src="@/assets/imgs/event/imgs/bus_from_hashimoto.png">
        </div>
        <div v-show="station == 'hashimoto' && direction == 'to'">
          <p class="title">多摩美術大学発→橋本駅北口行（橋75系統）</p>
          <img src="@/assets/imgs/event/imgs/bus_to_hashimoto.png">
        </div>
        <div v-show="station == 'hachioji' && direction == 'from'">
          <p class="title">八王子駅南口発→急行 多摩美術大学行（八70系統）</p>
          <img src="@/assets/imgs/event/imgs/bus_from_hachioji.png">
        </div>
        <div v-show="station == 'hachioji' && direction == 'to'">
          <p class="title">多摩美術大学発→急行 八王子駅南口行き（八70系統）</p>
          <img src="@/assets/imgs/event/imgs/bus_to_hachioji.png">
        </div>
      </div>
      <div>
        <p>※橋本駅北口－多摩美術大学間は、リーフィア町田小山ヶ丘を経由する別系統も運行しています。
          ［所要時間＝15分］
        </p>
        <p>
          ※橋本駅北口－多摩美術大学間の定期券をお持ちの場合でも、リーフィア町田小山ヶ丘経由の系統を
          ご利用の場合は、久保ヶ谷戸・坂下・リーフィア町田小山ヶ丘のバス停での途中下車は出来ません。
        </p>
      </div>
      <OtherEventComponent class="event" />
    </div>
    <BottomSpacer />
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import TopPlanetComponent from '@/components/TopPlanetComponent.vue';
import BottomSpacer from '@/components/BottomSpacer.vue';
import OtherEventComponent from '@/components/OtherEventComponent.vue';

export default {
  name: 'BusView',
  components: {
    HeaderComponent,
    FooterComponent,
    TopPlanetComponent,
    BottomSpacer,
    OtherEventComponent
  },
  data() {
    return {
      station: null,
      direction: null
    };
  },
  mounted: function () {
    if ((this.$route.params.busname == "hashimoto" || this.$route.params.busname == "hachioji") && (this.$route.params.direction == "from" || this.$route.params.direction == "to")) {
      this.station = this.$route.params.busname;
      this.direction = this.$route.params.direction;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.bus {
  width: 100vw;
  background-color: $color-bg;
  color: $white;

  display: flex;
  align-items: center;
  flex-flow: column;

  .bus-inner {
    width: 80%;
    text-align: left;
    margin-top: -250px;
    position: relative;
    z-index: 2;

    .bus-inner-selector {
      .title {
        font-size: $font-m;
        text-align: left;
      }

      .circles {
        font-size: $font-sm;
        display: flex;

        gap: 56px;

        .circle {
          width: 200px;
          height: 200px;
          border: 4px solid $white;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .bus-inner-dia {
      margin-top: 120px;

      .title {
        text-align: center;
      }
    }

    .event {
      margin-top: 120px;
      margin-bottom: 120px;
      text-align: center;
    }
  }
}
</style>
