import Vue from 'vue';
import VueRouter, { RouteConfig, RouterOptions } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const routeOptions: RouterOptions = {
  routes,
};

const router = new VueRouter(routeOptions);

export default router;
