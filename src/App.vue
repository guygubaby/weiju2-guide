<template>
  <div id="app">
    <header>
      <van-nav-bar
        v-show="currentRouteName==='home'"
        title="微居2 使用引导"
      />
      <van-nav-bar
        v-show="currentRouteName!=='home'"
        :title="navbarTitle"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <div class='router-wrapper'>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    navbarTitle () {
      return this.$store.getters.navbarTitle
    }
  },
  watch: {
    $route (to, from) {
      this.currentRouteName = to.name || 'home'
    }
  },
  data () {
    return {
      currentRouteName: 'home'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  created () {
    const navbarTitle = sessionStorage.getItem('navbarTitle')
    if (navbarTitle) {
      this.$store.commit('setNavbarTitle', navbarTitle)
    }
  },
  beforeDestroy () {
    sessionStorage.removeItem('navbarTitle')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-wrapper {
  margin: 0 2vw;
}
</style>
