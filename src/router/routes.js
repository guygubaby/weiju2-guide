const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/views/NotFound')
  },
  {
    path: '*',
    redirect: 'notFound'
  },
  {
    path: '/signupAndLogin',
    name: 'signupAndLogin',
    component: () => import('@/views/SignupAndLogin')
  },
  {
    path: '/bindHouse',
    name: 'bindHouse',
    component: () => import('@/views/BindHouse')
  },
  {
    path: '/voiceUnlock',
    name: 'voiceUnlock',
    component: () => import('@/views/VoiceUnlock')
  },
  {
    path: '/entranceGuard',
    name: 'entranceGuard',
    component: () => import('@/views/EntranceGuard')
  },
  {
    path: '/passwordUnlock',
    name: 'passwordUnlock',
    component: () => import('@/views/PasswordUnlock')
  },
  {
    path: '/voiceInvite',
    name: 'voiceInvite',
    component: () => import('@/views/VoiceInvite')
  },
  {
    path: '/myQRCode',
    name: 'myQRCode',
    component: () => import('@/views/MyQRCode')
  },
  {
    path: '/faceEntering',
    name: 'faceEntering',
    component: () => import('@/views/FaceEntering')
  }
]

export default routes
