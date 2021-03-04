import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import BlogArchive from '../views/BlogArchive.vue';
import BlogSingle from '../views/BlogSingle.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
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
  // {
  //   path: '/blog/category/:category',
  //   name: 'blogCategory',
  //   props: true,
  //   component: () => import(/* webpackChunkName: "blogArchive" */ '../views/blogArchive.vue'),
  // },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   props: true,
  //   component: () => import(/* webpackChunkName: "blog" */ '../views/blogArchive.vue'),
  // },
  // {
  //   path: '/blog/article:id',
  //   name: 'blogSingle',
  //   props: true,
  //   component: () => import(/* webpackChunkName: "blogSingle" */ '../views/blogSingle.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
