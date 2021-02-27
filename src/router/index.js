import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog/category/:category',
    name: 'blogCategory',
    props: true,
    component: () => import(/* webpackChunkName: "blogArchive" */ '../views/blogArchive.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    props: true,
    component: () => import(/* webpackChunkName: "blog" */ '../views/blogArchive.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
