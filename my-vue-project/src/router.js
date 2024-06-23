import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Jobs from './components/Jobs.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Forum from './components/Forum.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/jobs', component: Jobs },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/forum', component: Forum },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
