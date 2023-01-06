<template>
  <main class="class-about font-bunkyu-midashi">
    <HeaderComponent />
    <div class="class-about-bg">
      <img :src=bgImg>
      <p>{{ className }}</p>
    </div>
    <div class="class-about-description">
      <p class="midashi">授業説明</p>
      <p>{{ about }}</p>
    </div>
    <div class="class-about-kataru">
      <p class="midashi">経験者は語る</p>
      <p>{{ kataru }}</p>
    </div>
    <div class="class-about-teachers">
      <div class="class-about-teacher" v-for="(teacher, index) in teachers" :key=index>
        <div class="class-about-teacher-description" v-show="teacher.about != undefined">
          <p class="midashi">この授業の教員紹介</p>
          <p>{{ teacher.about }}</p>
        </div>
        <div class="class-about-teacher-inner"
          v-bind:class="{ 'layout-normal': teacher.about != undefined, 'layout-noabout': teacher.about == undefined }">
          <div class="class-about-teacher-kamoku">
            <p>担当科目</p>
            <ul>
              <li v-for="(kamoku, index2) in   teacher.kamoku" :key=index2>
                {{ kamoku }}
              </li>
            </ul>
          </div>
          <div class="class-about-teacher-nameandimg">
            <img :src=teacher.img>
            <p>{{ teacher.name }}</p>
          </div>
          <div class="class-about-teacher-igaina" v-bind:class="{ 'igaina-hide': teacher.igaina == undefined }">
            <p>意外な一面</p>
            <ul>
              <li v-for="(igaina, index3) in teacher.igaina" :key=index3>
                {{ igaina }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="class-about-facilities" v-show="facilities.length >= 1">
      <p class="midashi">この授業で使用できる施設や機材</p>
      <div class="class-about-facilities-items">
        <div class="class-about-facilities-item" v-for="(facility, index) in facilities" :key=index>
          <img :src=facility.img>
          <p>{{ facility.name }}</p>
        </div>
      </div>
    </div>
    <div class="other-class">
      <OtherClassesComponent :result-class-name="this.$route.params.classname" />
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import OtherClassesComponent from '@/components/OtherClassesComponent.vue';
import { classes } from '@/assets/shindan_info/classes';

export default {
  name: 'ClassAboutView',
  components: {
    OtherClassesComponent,
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      className: null,
      bgImg: null,
      about: null,
      kataru: null,
      teachers: [],
      facilities: []
      /*planetImg: require("@/assets/imgs/shindan/class_notext/ui.png")*/
    };
  },
  mounted: function () {
    if (this.$route.params.classname != undefined && classes[this.$route.params.classname] != undefined) {
      const classInfo = classes[this.$route.params.classname];
      this.className = classInfo.className;
      this.bgImg = classInfo.notextImg;
      this.about = classInfo.about;
      this.kataru = classInfo.kataru;
      this.teachers = [...classInfo.teachers];
      if (classInfo.facilities != undefined) {
        this.facilities = [...classInfo.facilities];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.class-about {
  color: $white;
  background-color: $color-bg;
  width: 100vw;

  display: flex;
  align-items: center;
  flex-direction: column;

  .class-about-bg {
    position: relative;
    margin-top: -35vh;
    margin-bottom: 56px;

    img {
      width: 50vw;
    }

    p {
      position: absolute;
      top: calc(35vh + 80px);
      left: 50%;
      transform: translate(-50%, 0);

      font-size: $font-xsm;

    }
  }

  .class-about-description,
  .class-about-kataru,
  .class-about-teacher-description {
    border-radius: 120px;
    margin: 28px;
    padding: 30px;
    background-color: rgba(163, 136, 199, 0.35);

    .midashi {
      margin-top: 0;
      font-size: $font-sm;
    }

    p {
      font-size: $font-s;
    }
  }

  .class-about-kataru {
    width: 45vw;
  }

  .class-about-description,
  .class-about-teacher-description {
    width: 75vw;
  }

  .class-about-teachers {
    .class-about-teacher {
      display: flex;
      align-items: center;
      flex-direction: column;

      margin-bottom: 56px;

      .class-about-teacher-inner {

        .class-about-teacher-nameandimg {
          img {
            border-radius: 50%;
            width: 145px;
            height: 145px;
          }

          p {
            font-size: $font-sm;
            margin: 0;
          }
        }

        .class-about-teacher-kamoku,
        .class-about-teacher-igaina {
          width: 35vw;
          border-radius: 54px;
          margin: 28px;
          padding: 30px;
          background-color: rgba(163, 136, 199, 0.35);

          display: inline-block;

          p {
            font-size: $font-sm;
            margin: 0;
          }

          ul,
          li {
            list-style: none;
            font-size: $font-s;
            padding: 0;
          }
        }

        .igaina-hide {
          opacity: 0;
        }
      }

      .layout-normal {
        display: flex;
        flex-direction: row;

        margin-top: -40px;

        .class-about-teacher-kamoku,
        .class-about-teacher-igaina {
          margin-top: 72px;
        }

        /* 左上にしっぽを表示 */
        .class-about-teacher-igaina {
          position: relative;
        }

        .class-about-teacher-igaina::before {
          position: absolute;
          border-right: 18px solid transparent;
          border-bottom: calc(18px * 1.41421356) solid rgba(163, 136, 199, 0.35);
          border-left: 18px solid transparent;
          transform: rotate(-55deg);
          content: "";
          top: 0px;
          left: -26px;
        }
      }

      .layout-noabout {
        .class-about-teacher-kamoku {
          margin-bottom: 0;
          width: 35vw;
          border-radius: 120px;
          padding: 30px;
        }

        .class-about-teacher-nameandimg {
          margin-top: -20px;
        }

        .igaina-hide {
          display: none;
        }

        /* 真上にしっぽを表示 */
        .class-about-teacher-igaina {
          position: relative;
          margin-top: calc(54px - 15px);
        }

        .class-about-teacher-igaina::before {
          position: absolute;
          border-right: 18px solid transparent;
          border-bottom: calc(18px * 1.41421356) solid rgba(163, 136, 199, 0.35);
          border-left: 18px solid transparent;
          content: "";
          top: calc(-18px * 2);
          left: calc(50% - 18px);
        }

      }

    }
  }

  .class-about-facilities {
    width: 100vw;
    background-color: rgba(163, 136, 199, 0.35);
    padding: 60px;
    margin-bottom: 56px;

    .midashi {
      font-size: $font-m;
      border-bottom: 5px solid $white;
      margin-top: 0;
      padding-bottom: -2px;
      display: inline-block;
    }

    .class-about-facilities-items {
      display: flex;
      justify-content: center;
      gap: 60px;

      .class-about-facilities-item {
        img {
          width: 280px;
        }

        p {
          font-size: $font-sm;
          margin: 0;
          padding: 0;
        }
      }
    }
  }

}
</style>
