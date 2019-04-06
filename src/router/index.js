import Vue from 'vue'
import Router from 'vue-router'
import StartGame from '@/components/StartGame'
import Answer from '@/components/Answer'

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
      path: '/:answer/:encoded_solution', 
      name: 'Answer',
      component: Answer,
      props: route => ({
        answer: route.params.answer, 
        encoded_solution: route.params.encoded_solution
      }),
    }
  ]
})
