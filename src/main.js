import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css from assets folder
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'

// element-ui
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import Element, { Message, MessageBox } from 'element-ui'

// axios
import axios from 'axios'

Vue.use(Element)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
