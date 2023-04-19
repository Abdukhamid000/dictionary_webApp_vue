import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '../views/MainComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainComponent',
      component: MainComponent
    }
  ]
})

export default router
