import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import BookDetails from '@/components/BookDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    meta: { title: '传智书城' }
  },
  {
    path: '/signin',
    component: SignIn,
    meta: { title: '传智书城 - 登陆' }
  },
  {
    path: '/signup',
    component: SignUp,
    meta: { title: '传智书城 - 注册' }
  },
  {
    path: '/book/details/:bookId',
    component: BookDetails,
    meta: { title: '传智书城 - 书籍详细' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
