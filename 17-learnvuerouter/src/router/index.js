import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home.vue')
const Message = () => import('../components/HomeMessage.vue')
const News = () => import('../components/Homenews.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const ProFile = () => import('../components/ProFile.vue')

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: ProFile,
    meta: {
      title: '档案'
    }
  }
]

export default router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
});
