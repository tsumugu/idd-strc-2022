<template>
  <div class="indicator">
    <button v-on:click="select(0)" v-bind:class="{ selected: pageNum == 0 }"></button>
    <button v-on:click="select(1)" v-bind:class="{ selected: pageNum == 1 }"></button>
    <button v-on:click="select(2)" v-bind:class="{ selected: pageNum == 2 }"></button>
    <button v-on:click="select(3)" v-bind:class="{ selected: pageNum == 3 }"></button>
    <button v-on:click="select(4)" v-bind:class="{ selected: pageNum == 4 }"></button>
  </div>
</template>

<script>
export default {
  name: 'IndicatorComponent',
  props: ["propsPageNum"],
  methods: {
    select: function (pageNum) {
      this.pageNum = pageNum;
      this.$emit('onPageSelected', this.pageNum)
    }
  },
  data() {
    return {
      pageNum: 0
    };
  },
  watch: {
    propsPageNum: {
      handler: function () {
        this.pageNum = this.propsPageNum;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.indicator {
  display: flex;
  gap: 40px;

  button {
    width: 20px;
    height: 20px;

    background-color: transparent;
    color: $white;

    border: 1px solid $white;
    border-radius: 50%;

    cursor: pointer;
  }

  .selected {
    border: 5px solid $white;
  }
}
</style>
