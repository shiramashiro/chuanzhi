import Vue from 'vue'
import VueRouter from 'vue-router'
import trolley from '@/views/trolley.vue'
import index from '@/views/index.vue'
import signin from '@/views/signin.vue'
import signup from '@/views/signup.vue'
import verbose from '@/views/verbose.vue'
import category from '@/views/category.vue'
import indents from '@/views/indents.vue'
import settlement from '@/views/success/settlement.vue'
import collectBookshelf from '@/views/collect-bookshelf.vue'
import press from '@/views/press.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: index,
        meta: { title: '传智书城' }
    },
    {
        path: '/signin',
        component: signin,
        meta: { title: '传智书城 - 登陆' }
    },
    {
        path: '/signup',
        component: signup,
        meta: { title: '传智书城 - 注册' }
    },
    {
        path: '/verbose/:id',
        component: verbose,
        meta: { title: '传智书城 - 书籍详细' }
    },
    {
        path: '/trolley',
        component: trolley,
        meta: { title: '传智书城 - 购物车' }
    },
    {
        path: '/indents',
        component: indents,
        meta: { title: '传智书城 - 我的订单' }
    },
    {
        path: '/category/:types',
        component: category,
        meta: { title: '传智书城 - 分类' }
    },
    {
        path: '/success/settlement',
        component: settlement,
        meta: { title: '传智书城 - 结算成功' }
    },
    {
        path: '/collection',
        component: collectBookshelf,
        meta: { title: '传智书城 - 我的收藏' }
    },
    {
        path: '/press/:pressId',
        component: press,
        meta: { title: '传智书城 - 出版社' }
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
