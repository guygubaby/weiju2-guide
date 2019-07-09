import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [
      {
        id: 1,
        title: '注册登录',
        viewName: 'signupAndLogin'
      },
      {
        id: 2,
        title: '绑定房屋',
        viewName: 'bindHouse'
      },
      {
        id: 3,
        title: '声波开锁',
        viewName: 'voiceUnlock'
      },
      {
        id: 4,
        title: '门禁监控',
        viewName: 'entranceGuard'
      },
      {
        id: 5,
        title: '密码开锁',
        viewName: 'passwordUnlock'
      },
      {
        id: 6,
        title: '声波邀请',
        viewName: 'voiceInvite'
      },
      {
        id: 7,
        title: '查看我的二维码',
        viewName: 'myQRCode'
      },
      {
        id: 8,
        title: '人脸录入',
        viewName: 'faceEntering'
      }
    ],
    navbarTitle: '指引'
  },
  mutations: {
    setNavbarTitle (state, value) {
      state.navbarTitle = value
      sessionStorage.setItem('navbarTitle', value)
    }
  },
  getters
})
