import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/views/Products.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'category',
          name: 'category',
          component: Products
        },
        {
          path: 'cart',
          name: 'cart',
          component: ShoppingCart
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login', 
      name: 'login',
      component: Login
    }
  ],
})

export default router
