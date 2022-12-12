<template>
  <main class="top">
    <div class="menu">
      <a href="/">
        <img src="@/assets/imgs/menu.svg" />
      </a>
    </div>
    <div class="text">
      <p class="in4u-logo font-bely">
        <router-link to="/select">IN4U</router-link>
      </p>
      <p class="about about-1 font-bunkyu-midashi">0から情デを知れる</p>
      <p class="about about-2 font-bunkyu-midashi">WEBサービス</p>
      <p class="rotate-text rotate-text-1 font-bely">2022. info x for you</p>
      <p class="rotate-text rotate-text-2 font-bely">Tama Art University</p>
    </div>
    <div class="planet"></div>
  </main>
</template>

<script>
export default {
  name: 'TopView'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

* {
  color: $white;
}

p {
  white-space: nowrap;
}

a {
  text-decoration: none;
}

.top {
  width: 100vw;
  height: 100vh;
  background-color: $color-bg;
  overflow: hidden;

  .menu {
    position: absolute;
    top: 5%;
    left: 89%;
    z-index: 3;

    img {
      width: 96px;
      height: 96px;
    }
  }

  .menu:hover {
    animation: menuScaleOn 0.5s forwards;
  }

  .menu {
    animation: menuScaleOut 0.5s forwards;
  }

  .text {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;

    .in4u-logo {
      font-size: $font-xl;

      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 22;

      a {
        padding: 29vw 89vh 29vw 89vh;
      }
    }

    .about {
      font-size: $font-x;
      color: transparent;
      -webkit-text-stroke: 0.5px $white;

      position: absolute;
      transform: translate(-50%, -50%);
    }

    .about-1 {
      top: 10%;
      left: 25%;
    }

    .about-2 {
      top: 71%;
      left: 78%;
    }

    .rotate-text {
      font-size: $font-m;

      position: absolute;
      transform: translate(-50%, -50%);
    }

    .rotate-text-1 {
      font-size: $font-m;

      transform: rotate(-90deg);

      top: 58%;
      left: -5%;
    }

    .rotate-text-2 {
      font-size: $font-m;
      transform: rotate(90deg);

      top: 35%;
      left: 82%;
    }
  }

  .text:hover+.planet {
    animation: planetScaleOn 1s forwards;
  }

  .text+.planet {
    animation: planetScaleOut 1s forwards;
  }

  .planet {
    height: 100vh;
    background-image: url(@/assets/imgs/top.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
