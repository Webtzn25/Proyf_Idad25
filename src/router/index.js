import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Contact from '@/views/Contact.vue'
import Products from '@/components/Products.vue'
import Cart from '@/components/Cart.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/Products', name: 'Products', component: Products },
  { path: '/Cart', name: 'Cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
