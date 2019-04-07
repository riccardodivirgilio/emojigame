import Vue    from 'vue'
import App    from '@/App'
import router from '@/Router'

import bulma  from 'bulma/bulma.sass'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
