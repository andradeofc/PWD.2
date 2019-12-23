<template>
<nav class="navbar navbar-dark bg-info">
        <div class="container ">
          <div class="row justify-content-sm-center text-dark">
          <h1>Verifique se já possui em sua localização!</h1>
          <div class="w-100"></div>
          
          <div class="navbar">
          <form class="form-inline" action="">
              <input type="search" class="form-control ml-0 mr-4" placeholder="Buscar Serviço">
              <input type="search" class="form-control ml-0 mr-4" placeholder="Buscar Localização">
              <a href="#" @click="map">
              <button class="btn btn-dark" type="submit">Pesquisar</button>
              </a>
          </form>
        </div>
          </div>
        </div>
      </nav>
  

  
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
