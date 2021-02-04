<template>
  <div class="text-center">
    <h1> BOOKWORM </h1>
  <h2  v-if='role === "[ROLE_ADMIN]"'> BEM VINDO, ADMIN </h2>  
<img v-if='role === "[ROLE_ADMIN]"' src="https://media.giphy.com/media/gfO1UMUVlM6i1BmKD2/giphy.gif" width="50%" height="50%">
  <h2  v-if='role === "[ROLE_USER]"'> BEM VINDO, USER</h2> 

  </div>
</template>

<script> 
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: { /*Para se acessar um atributo do state a partir de um componente é preciso utilizar atributos computados (mapState)- Inclusive, aqui em computed, eu poderia passar um vetor cheio de atributos que eu gostaria de mapear, por exemplo, se eu quisesse mapear o token e o usuario, eu poderia.*/
    ...mapState(['role'])
  }
}
</script>

