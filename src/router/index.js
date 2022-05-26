import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Checkout from '../views/Checkout.vue'
import Signup from '../views/Signup.vue'
import Products from'../views/ProductsListView.vue'
import Product from'../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component:Recipe
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/products',
    name: 'Products',
    component:Products
  },
  {
    path: '/products/:productId',
    name: 'Product',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
