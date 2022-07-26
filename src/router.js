import { createApp, createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Vue from 'vue'
import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'

const routes = [
  {
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/sobre',
		name: 'Sobre',
		component: Sobre,
	},
  /* {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  } */
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//createApp(App).use(router).mount('#app')

export default router
