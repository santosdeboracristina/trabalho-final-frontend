<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Livros</h2>
      <div class="form-group">
        <label for="titulo">Título do Livro</label>
        <input
          type="text"
          id="titulo"
          class="form-control"
          required
          autofocus
          v-model="titulo">
      </div>
      <button class="btn btn-success" type="submit">
        Salvar
      </button>
    </form>
    <br>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Livros Cadastrados</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.id">
          <td>{{ livro.titulo }}</td> <!-- Uso do v-for pra preencher as linhas da tabela com o conteudo da variavel do tipo vetor "livros"-->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: 'anotacoes',
  data() {
    return {
      titulo: '',
      livros: []
    }
  },
  computed: {
    ...mapState(['usuario']) 
    },
  methods: {
    cadastrar() {
      axios
        .post( //Utilizando o axios com metodo POST pra criar um novo livro
          '/livro/novo',
          {
            titulo: this.titulo,
            usuario: this.usuario
          })
        .then((res) => {
          console.log(res);
          this.titulo = "";
          this.atualizar();
        })
        .catch((error) => console.log(error))
    },
    atualizar() {
      axios.get('/livro/busca/' + this.usuario, //Utilizando o axios com metodo GET pra buscar os livros criados pelo usuario
       { headers: { Accept: 'application/json' }
       })
        .then(res => {
          console.log(res)
          this.livros = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created() { //O é chamado antes da renderização da tela e inicializa a variável "livros".
    this.atualizar()
  }
}
</script>