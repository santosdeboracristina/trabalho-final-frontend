<template>
   <form @submit.prevent="auth"> <!--@submit.prevent impede a submissão do formulário e chama o método auth.-->
        <h2> Login </h2>
        <div class="form-group">
            <label for="username">Usuário</label>
            <input type="text" id="username" class="form-control"
            required autofocus v-model="nome"> <!-- AS ENTRADAS INPUTS SAO LIGADAS AS VARIAVEIS DO VUE, POR CAUSA DA DIRETIVA v-MODEL-->
        </div>
        <div class="form-group">
            <label for="inputPassword">Senha</label>
            <input type="password" id="inputPassword" class="form-control"
            required v-model="senha">
        </div>
        <button class="btn btn-primary"
        type="submit">Entrar</button>
        </form>    
</template>

<script>
    import { mapActions } from "vuex";  //O método de autenticação ("login") é mapeado da laaa da store com mapActions.
    export default { 
        name: "login", 
        data() {
            return{
                nome: "",
                senha: ""
            };
        },
        methods: {
            ...mapActions(["login"]),
            auth(){
                this.login({ usuario: this.nome, senha: this.senha });
                alert('Bem vindo(a) ' + this.nome + '!')
            }
        }
    }
</script>