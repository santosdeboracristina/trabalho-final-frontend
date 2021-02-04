<template>
<div id="app" class="container">
<div id="nav" class="row text-center">
<router-link to="/">HOME </router-link> 
<router-link to="/livros">LIVROS </router-link>
<router-link to="/login">LOGIN</router-link> 
</div>
<router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color:lightgray;
  background-color: rgba(0, 0, 0, 0.644);
}
#nav {
  padding: 30px;
}
#nav a {
padding: 14px 16px;
font-size: 20px;
font-weight: bold;
color: whitesmoke;
}

#nav a:hover{
    color:orange;
}
#nav a.router-link-exact-active {
  color:springgreen;
}
  
</style>