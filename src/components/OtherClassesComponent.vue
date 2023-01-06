<template>
  <div class="other-classes">
    <div class="title font-bunkyu-midashi">他の授業も見てみる<span>？</span></div>
    <div class="other-classes-inner"
      v-bind:class="{ 'layout-11': otherClasses.length == 11, 'layout-9': otherClasses.length == 9, 'layout-8': otherClasses.length == 8, 'layout-7': otherClasses.length == 7 }">
      <div v-for="(columnItems, index) in otherClassesDisp" :key=index class="column"
        v-bind:class="['column-' + index]">
        <div v-for="(classinfo, index2) in columnItems" :key=index2 class="item">
          <router-link :to="'/class-about/' + classinfo.key"><img :src=classinfo.img></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { classes } from '@/assets/shindan_info/classes';

export default {
  name: 'OtherClassesComponent',
  props: ["resultClasses", "resultClassName"],
  watch: {
    resultClasses: function () {
      if (this.resultClasses == undefined && this.resultClassName == undefined) {
        return;
      }
      // その他の授業を取り出す
      const classesNames = Object.keys(classes);
      const resultClassesNames = this.resultClassName == undefined
        ? this.resultClasses.map(e => e.key)
        : [this.resultClassName];
      const resultClassesNamesDiff = classesNames.filter(e => !resultClassesNames.includes(e));
      this.otherClasses = resultClassesNamesDiff.map(name => classes[name]);
    },
    otherClasses: function () {
      const length = this.otherClasses.length;
      if (length == 9) {
        // 3-3-3
        this.otherClassesDisp = [this.otherClasses.slice(0, 3), this.otherClasses.slice(3, 6), this.otherClasses.slice(6, 9)]
      } else if (length == 8) {
        // 3-2-3
        this.otherClassesDisp = [this.otherClasses.slice(0, 3), this.otherClasses.slice(3, 5), this.otherClasses.slice(5, 8)]
      } else if (length == 7) {
        // 2-3-2
        this.otherClassesDisp = [this.otherClasses.slice(0, 2), this.otherClasses.slice(2, 5), this.otherClasses.slice(5, 7)]
      } else if (length == 11) {
        // 4-3-4
        this.otherClassesDisp = [this.otherClasses.slice(0, 4), this.otherClasses.slice(4, 7), this.otherClasses.slice(7, 11)]
      }
    }
  },
  data() {
    return {
      otherClasses: [],
      otherClassesDisp: [],
    };
  },
  mounted: function () {
    if (this.resultClasses == undefined && this.resultClassName == undefined) {
      return;
    }
    // その他の授業を取り出す
    const classesNames = Object.keys(classes);
    const resultClassesNames = this.resultClassName == undefined
      ? this.resultClasses.map(e => e.key)
      : [this.resultClassName];
    const resultClassesNamesDiff = classesNames.filter(e => !resultClassesNames.includes(e));
    this.otherClasses = resultClassesNamesDiff.map(name => classes[name]);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.other-classes {
  .other-classes-inner {
    display: flex;
    margin-left: calc(360px / -2 + 72px);
    margin-bottom: 100px;
  }

  .title {
    font-size: $font-m;

    span {
      font-size: $font-xm;
      vertical-align: -4px;
    }
  }
}

.layout-11 {
  .column-1 {
    margin-top: calc(360px / 2);
    margin-left: -36px;
  }

  .column-2 {
    margin-left: -36px;
  }
}

.layout-8 {

  .column-1 {
    margin-top: calc(360px / 2);
    margin-left: -36px;
  }

  .column-2 {
    margin-left: -36px;
  }
}

.layout-7 {
  .column-0 {
    margin-top: calc(360px / 2);
  }

  .column-1 {
    margin-left: -36px;
  }

  .column-2 {
    margin-top: calc(360px / 2);
    margin-left: -36px;
  }
}

.column {
  div {
    margin: 16px;
  }
}

.item {
  img {
    width: 360px;
  }

  p {
    position: absolute;
    writing-mode: vertical-rl;
    font-size: $font-sm;
  }
}
</style>
