import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BlogArchive from '../views/BlogArchive.vue';
import BlogSingle from '../views/BlogSingle.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/category/:category',
    name: 'BlogCategory',
    component: BlogArchive,
    props: true,
  },
  {
    path: '/blog/article:id',
    name: 'BlogSingle',
    component: BlogSingle,
    props: true,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogArchive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
