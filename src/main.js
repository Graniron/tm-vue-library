import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import Books from './components/Books.vue';
import BookForm from './components/BookForm.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/books'},
    {path: '/books', component: Books},
    {path: '/add-book', component: BookForm},
    {path: '/books/:id', component: BookForm},
    {path: '*', redirect: '/books'}
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
