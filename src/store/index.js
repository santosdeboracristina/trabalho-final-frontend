import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,  //1 - Esse token precisa ser enviado com toda requisição e, portanto, precisa estar acessível em qualquer lugar da aplicação. Para conseguir isso, iremos deixá-lo aqui! (na store do Vuex.)
    usuario: null,
    role: null //Variável que eu adicionei pra poder usar o v-if la no Home.vue
  },
  mutations: { /*Assim como getters, as mutations recebem o state como parâmetro, mas podem receber um parâmetro extra, passado manualmente em sua chamada
  Mutations meio que solicita as alterações.
    Não é possível realizar operações assíncronas (como requisições
    HTTP) dentro de mutations*/

    setUsuario(state, usuario){ //3 - Uma mutation para cada variavel acima (dentro de state)
      state.usuario = usuario;
    },
    setToken(state, token){
      state.token = token;
    },
    setRole(state, role){
      state.role = role;
    },
    logout(state){
      state.token = null;
      state.usuario = null;
    }
  }, 
  actions: {  /* 4 - a action de autenticação, 
    que usa o Axios para realizar uma requisição HTTP assíncrona.
     Depois de realizar a autenticação carregamos as variáveis "usuario", "token" E "ROLE"
      com o resultado e redirecionamos para a página inicial usando o Vue-Router.*/
    
    /*Actions, comita as alteracoes que o mutations solicitou. E ao contrario de mutations, é possível realizar operações
                assíncronas dentro de actions*/
    login(context, { usuario, senha }){ //2 - O método que realiza o processo de login está como uma action, visto que todas as variáveis envolvidas estão na store.
      axios
      .post("login", { 
        nome: usuario, 
        senha: senha
      })
      .then(res => {
        console.log(res);
        context.commit('setUsuario', usuario);
        context.commit('setToken', res.data.token);
        context.commit('setRole', res.data.autorizacao);
        console.log(res.data.autorizacao) //esse log eu coloquei pra ver pq a autorizacao do usuario tava vindo NULL do backend
        router.push('/'); //mando pra pagina inicial
      }).catch(error => console.log(error)); //trato o erro mostrando a mensagem no console do browser
    }
  },
  modules: {
  }
})
