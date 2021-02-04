import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

/* HA DOIS INTERCEPTORS AQUI, 
ESTE, ESPECIFICAMENTE SERVE PRA VER SE TEM UM TOKEN (Na store do vue)
 E INCLUIR O TOKEN NO CABECALHO DE TODAS AS REQUISICOES REALIZADAS */
axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})

/* JA ESTE SEGUNDO SERVE BASICAMENTE VER SE HA ALGUM ERRO E GERAR ALERTAS */
axios.interceptors.response.use(res => {
  return res
}, error => {
  if (error.response.status === 403) {
    alert('Não autorizado!')
  }
  else if (error.response.status === 401) {
    store.commit('logout')
    router.push('/login')
  }
  throw error
})

axios.defaults.baseURL = 'http://localhost:8082/livros'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
