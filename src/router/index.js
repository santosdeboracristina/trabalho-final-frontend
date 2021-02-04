import Vue from 'vue'
import VueRouter from 'vue-router'


//AQUI, TODA VEZ QUE CRIAR UMA PAGINA NOVA, EU ATUALIZO AS ROTAS AQUI

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/login', //MAPEIO AQUI A PAGINA LOGIN, qual atende pelo path: /login
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/livros',
    name: 'Livros',
    component: () => import ('../views/Livros.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
