import Vue from 'vue'
import VueRouter from 'vue-router'
import TopView from '../views/TopView.vue'
import SelectView from '../views/SelectView.vue'
import AboutView from '../views/AboutView.vue'
import ShindanView from '../views/ShindanView.vue'
import ClassAboutView from '../views/ClassAboutView.vue'
import JobView from '../views/JobView.vue'
import AdmissionView from '../views/AdmissionView.vue'
import EventView from '../views/EventView.vue'
import EventDetailView from '../views/EventDetailView.vue'
import AccessView from '../views/AccessView.vue'
import BusView from '../views/BusView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TopView
  },
  {
    path: '/select',
    name: 'select',
    component: SelectView
  },
  {
    path: '/about-idd',
    name: 'about-idd',
    component: AboutView
  },
  {
    path: '/shindan',
    name: 'shindan',
    component: ShindanView
  },
  {
    path: '/class-about/:classname',
    name: 'class-about',
    component: ClassAboutView
  },
  {
    path: '/job',
    name: 'job',
    component: JobView
  },
  {
    path: '/admission',
    name: 'admission',
    component: AdmissionView
  },
  {
    path: '/event',
    name: 'event',
    component: EventView
  },
  {
    path: '/event-detail/:eventname',
    name: 'event-detail',
    component: EventDetailView
  },
  {
    path: '/access',
    name: 'access',
    component: AccessView
  },
  {
    path: '/bus/:busname/:direction',
    name: 'bus',
    component: BusView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
