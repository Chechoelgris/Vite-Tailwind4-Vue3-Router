import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: Home
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../views/About.vue')
            }
        ]
    },
     // Ruta para 404 - debe estar al final
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: MainLayout,
    children: [
      {
        path: '',
        component: NotFound
      }
    ]
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router