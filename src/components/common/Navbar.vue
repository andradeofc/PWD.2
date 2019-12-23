<template>
<nav class="navbar navbar-expand-md navbar-dark bg-info ">

      <div class="container">
        <img width="10%" src="../../assets/img/logo.png" class="navbar-brand  img-fluid ">
        

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSite">

          <ul class="navbar-nav mr-auto">

            <li class="nav-item">
              <a href="" @click="home" class="nav-link">Início</a>
            </li>
            

          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mr-4" href="#" data-toggle="dropdown" id="navDrop">Conheça</a>
              <div class="dropdown-menu">
                <a href="#jumbotron" class="dropdown-item">Cliente</a>
                <a href="#jumbotron2" class="dropdown-item">Estabelecimento</a>
              
              </div>
            </li>
          </ul>

          <form class="form-inline" action="">
            <a href="#" @click="login">
              <button class="btn btn-dark mr-3" type="submit">LOGIN</button>
            </a>
            <a href="#" @click="cadastro">
            <button class="btn btn-dark" type="submit">CADASTRO</button>
            </a>
          </form>

        </div>
      </div>
    </nav>
  
</template>

<script>
export default {
  methods: {
    login: function() {
      this.$router.push("/login"); 
    },
    home: function() {
      this.$router.push("/"); 
    },
    cadastro: function() {
      this.$router.push("/cadastro"); 
    }
  }
};
</script>

<style scoped>

</style>
