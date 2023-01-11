<template>
  <div class="otherevent font-bunkyu-midashi">
    <p>イベント</p>
    <div class="circles">
      <div><a href="/event-detail/oc">オープンキャンパス</a></div>
      <div><a href="/event-detail/geisai">芸術祭</a></div>
      <div><a href="/event-detail/sotsusei">卒業制作展</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherEventComponent'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.otherevent {
  p {
    font-size: $font-m;
  }

  .circles {
    display: flex;
    justify-content: center;
    gap: 45px;

    a {
      width: 300px;
      height: 300px;
      border: 4px solid $white;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      color: $white;
      text-decoration: none;
      font-size: $font-m;

      animation: eventFocusScaleOut 0.5s forwards;
    }

    a:hover {
      animation: eventFocusScaleOn 0.5s forwards;
    }
  }
}
</style>
