import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import App from './App.vue'
import SignIn from './views/SignIn.vue'
import Ratings from './views/Ratings.vue'
import User from './views/User.vue'
import Countries from './views/Countries.vue'
import Bags from './views/Bags.vue'
import store from './store';


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: App

    },
    {
      path: '/login',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/ratings',
      name: 'rating',
      component: Ratings
    },
    {
      path: '/info',
      name: 'user',
      component: User
    },
    {
      path: '/countries',
      name: 'countries',
      component: Countries
    },
    {
      path: '/bags',
      name: 'bags',
      component: Bags
    },
  ],
})
router.beforeEach((to, from, next) => {
  const user  = store.state.user;
  if (to.path !== '/login' && !user) {
    next({path : '/login'});
  } else if (to.path === '/login' && user) {
    next({ path: '/' });
  } else {
    next();
  }
});


export default router;