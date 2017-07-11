import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Books from './components/Books.vue';
import BookForm from './components/BookForm.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/books', component: Books},
    {path: '/add-book', component: BookForm},
    {path: '/books/:id', component: BookForm}
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
