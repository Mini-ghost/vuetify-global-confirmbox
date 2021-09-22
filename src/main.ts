import Vue from 'vue'
import App from './App.vue'

// Plugin
import vuetify from './plugins/vuetify'
import globalConfirmbox from './plugins/global-confirmbox'


Vue.config.productionTip = false

Vue.use(globalConfirmbox)

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
