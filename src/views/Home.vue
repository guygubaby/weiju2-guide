<template>
  <div class="home-wrapper">
    <body>
      <van-cell-group title='引导项'>
        <van-cell @click='handleClickCell' v-for='item in menuItems' :key="item.id" :title="item.title" is-link :to="item.viewName" />
      </van-cell-group>
    </body>
  </div>
</template>
<script>
export default {
  name: 'home',
  computed: {
    menuItems () {
      return this.$store.getters.menuItems
    }
  },
  methods: {
    handleClickCell (e) {
      this.$store.commit('setNavbarTitle', e.target.innerText || '指引')
    }
  }
}
</script>
