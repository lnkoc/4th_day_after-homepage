import { createRouter, createWebHistory } from 'vue-router'
import Home from '../layouts/Home.vue'
import UBlog from '../views/Home/UBlog.vue'
import { useSessionStore } from '../stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'uBlog',
          component: UBlog,
          children: [
            {
              path: '/articles/:date',
              name: 'ShowArticle',
              props: true,
              component: () => import('../components/HomeComponents/ShowArticle.vue')
            }
          ]
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/Home/About.vue')
        },
        {
          path: '/hobby',
          name: 'Hobby',
          component: () => import('../views/Home/Hobby.vue')
        },
        {
          path: '/projects',
          name: 'Projects',
          component: () => import('../views/Home/Projects.vue')
        },
        {
          path: '/contact',
          name: 'Contact',
          component: () => import('../views/Home/Contact.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../layouts/Dashboard.vue'),
      meta: { requiesAuth: true },
      children: [
        {
          path: '',
          redirect: '/dashboard/summary'
        },
        {
          path: '/dashboard/summary',
          name: 'Summary',
          // props: true,
          component: () => import('../views/Dashboard/Summary.vue')
        },
        {
          path: '/dashboard/create',
          name: 'CreateArticle',
          // props: true,
          component: () => import('../views/Dashboard/CreateArticle.vue')
        },
        {
          path: '/dashboard/list',
          name: 'ListArticles',
          component: () => import('../views/Dashboard/ListArticles.vue'),
          children: [
            {
              path: '/dashboard/edit/:id',
              name: 'EditArticle',
              props: true,
              component: () => import('../components/DashboardComponents/EditArticle.vue')
            }
          ]
        },
      ]
    },
    
  ]
})


// sprawdzenie autoryzacji do Dashboard
// TODO (wishlist) dopisać przywracanie przekierowania i uzupełnienie danych po zalogowaniu 

router.beforeEach((to, from) => {

  const store = useSessionStore()

  if ((to.meta.requiesAuth === true) && !store.isAuth) {
    return {
      path: '/login'
    }
  }
})

export default router
