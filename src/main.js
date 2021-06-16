import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './static/icon/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// 导入element-ui组件库
import Element, { Message, MessageBox } from 'element-ui'

axios.defaults.baseURL = 'http://localhost:9000/api/v1'
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

Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Element)

// 导入组件，并全局注册
import owlBookFiche from '@/components/owl-book-fiche.vue'
import owlComments from '@/components/owl-comments.vue'
import owlTag from '@/components/owl-tag.vue'
import owlCategoryBar from '@/components/owl-category-bar.vue'
import owlCustFooter from '@/components/owl-cust-footer.vue'
import owlNavigation from '@/components/owl-navigation.vue'
import owlProfilePhoto from '@/components/owl-profile-photo.vue'
Vue.component('owl-book-fiche', owlBookFiche)
Vue.component('owl-comments', owlComments)
Vue.component('owl-tag', owlTag)
Vue.component('owl-category-bar', owlCategoryBar)
Vue.component('owl-cust-footer', owlCustFooter)
Vue.component('owl-navigation', owlNavigation)
Vue.component('owl-profile-photo', owlProfilePhoto)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
