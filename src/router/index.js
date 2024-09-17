import { createRouter, createWebHistory } from 'vue-router'
import EnterView from '@/views/EnterView.vue'
import MenuView from '@/views/MenuView.vue'
import MakePizzaView from '@/views/MakePizzaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'enter',
      component: EnterView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/make-pizza',
      name: 'make-pizza',
      component: MakePizzaView
    }
  ]
})

export default router
