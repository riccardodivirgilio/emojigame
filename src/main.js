

import Vue     from 'vue'
import App     from '@/App'
import router  from '@/Router'
import visitor from '@/utils/analytics'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

visitor.pageview(router.currentRoute.path).send()

router.afterEach(to => visitor.pageview(to.path).send());