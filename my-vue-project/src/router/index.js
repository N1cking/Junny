import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import Posts from '@/components/Posts'; // импортируйте компонент постов
import Forum from '@/components/Forum'; // импортируйте компонент форума

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/posts', // добавьте новый маршрут
      name: 'Posts',
      component: Posts
    },
    {
      path: '/forum', // добавьте новый маршрут для форума
      name: 'Forum',
      component: Forum
    }
  ]
});
