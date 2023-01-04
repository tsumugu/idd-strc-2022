<template>
  <div class="top-planet">
    <div class="img-wrapper">
      <img :src="imgPath">
    </div>
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

.img-wrapper {
  img {
    width: 100%;
    filter: blur(10px);
  }
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
  text-align: center;

  font-size: $font-m;
  /*line-height: $font-m;*/
  color: $white;


  backdrop-filter: blur(40px);
  background-color: rgba(57, 76, 89, 0.32);

  padding: 10px 30px 10px 30px;
  border-radius: 40px;

  display: inline-block;
}
</style>
