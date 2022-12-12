<template>
  <div class="top-planet">
    <img :src="imgPath">
    <div class="title-wrapper">
      <p class="title font-bunkyu-midashi">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPlanetComponent',
  props: ["imgPath", "title"],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

img {
  width: 100%;
  filter: blur(10px);
}

.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  aspect-ratio: 3.8 / 1;
  z-index: 888;
}

.title {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;

  font-size: $font-m;
  line-height: $font-m;
  color: $white;
}
</style>
