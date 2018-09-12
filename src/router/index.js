import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VideoPlayer from '@/components/VideoPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoPlayer',
      component: VideoPlayer
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
