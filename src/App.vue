<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

#app {
  font-family: toppan-bunkyu-gothic-pr6n, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.font-bely {
  font-family: bely-display, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.font-bunkyu-midashi {
  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 900;
  font-style: normal;
}

.font-bely-bunkyu-midashi {
  font-family: bely-display, toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.font-blenny-black {
  font-family: blenny, sans-serif;
  font-weight: 900;
  font-style: normal;
}
</style>
