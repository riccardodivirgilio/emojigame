import Vue from 'vue'
import Router from 'vue-router'
import StartGame from '@/components/StartGame'
import Answer from '@/components/Answer'
import {loads}  from '../utils/encode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartGame',
      component: StartGame
    },
    { 
      path: '/:answer/:solution', 
      name: 'Answer',
      component: Answer,
      props: route => ({
        answer: route.params.answer, 
        solution: loads(route.params.solution)
      }),
    }
  ]
})


