import Vue from 'vue'
import Router from 'vue-router'
import StartGame from '@/components/StartGame'
import Answer from '@/components/Answer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartGame',
      component: StartGame
    },
    { 
      path: '/:dump', 
      name: 'Answer',
      component: Answer 
    }
  ]
})
