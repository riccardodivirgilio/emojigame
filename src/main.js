
import ua     from 'universal-analytics'
import Vue    from 'vue'
import App    from '@/App'
import router from '@/Router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

var visitor = ua('UA-137873567-1');

visitor.pageview(router.currentRoute.path).send()

router.afterEach(to => visitor.pageview(to.path).send());