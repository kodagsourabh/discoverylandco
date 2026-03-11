import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import gallery from '../views/gallery/gallery.vue'
import worldgall from '../views/ourWorld/worldgallerymain.vue'
import home from '../views/home/Home.vue'
import about from '../views/about/About.vue'
import experience from '../views/experience/experience.vue'
import press from '../views/press/press.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/gallery',
    name: 'Gallery',
    component: gallery
  },
  {
    path: '/ourworlds',
    name: 'ourWorlds',
    component: worldgall
  },
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/experiences',
    name: 'experience',
    component: experience
  },
  {
    path: '/press',
    name: 'press',
    component: press
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
