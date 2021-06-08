import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/icon/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// 导入element-ui组件库
import Element, { Message, MessageBox } from 'element-ui'
// 注册element-ui到Vue原形中
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Element)

// 导入axios
import axios from 'axios'
// 注册axios到Vue原形中
Vue.prototype.$http = axios
// axios拦截器
axios.interceptors.request.use(
    function(config) {
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)

// 导入组件，并全局注册
import bookCard from '@/components/book-card.vue'
Vue.component('book-card', bookCard)
import comment from '@/components/comment.vue'
Vue.component('comment', comment)
import tag from '@/components/tag.vue'
Vue.component('tag', tag)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
