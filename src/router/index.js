import Vue from 'vue'
import Router from 'vue-router'
import StartGame from '@/components/StartGame'
import Answer from '@/components/Answer'
import {loads}  from '../utils/encode'

import {remove_text, normalize_solution} from '../utils/text'

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
        answer: remove_text(route.params.answer), 
        solution: normalize_solution(loads(route.params.solution))
      }),
    }
  ]
})


