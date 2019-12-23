<template>

<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Da um UP!</title>
  </head>
  <body>
    
    <!-- Inicio MENU -->
    <Navbar> </Navbar>
    <!-- Fim MENU -->

    <!-- Inicio Carousel -->
    <Carousel> </Carousel>
    <!-- Fim Carousel -->
    
    <!-- Inicio NavbarLocalização -->
    <NavbarMap> </NavbarMap>
    <!-- Fim NavbarLocalização -->
    
    

      <div class="container">
        <div class="row">
          <div class="col-12 text-center my-5">
            <h1 class="display-3">DÁ UM UP</h1>
            <p>Aqui você encontra o melhor da beleza e bem-estar cada vez mais perto de você! </p>
          </div>
        </div>

        <div class="row">
          <div class="col-3"></div>
          <div class="col-9"></div>
        </div>

        <div class="row mb-5">
          <div class="col-sm-4">
            <div class="card">

              <img src="../../assets/img/img-card-0.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Salões de Beleza</h4>
                <h6 class="sub-title mb-2 text-muted">Melhores cabeleireiros de sua região!</h6>
                  <p class="card-text">Hair stylists, manicure, pedicure e muito mais</p>
                  <a href="#" class="card-link">Mais...</a>               
                </div>
            </div>
          </div>

          <div class="col-sm-4">
              <div class="card">

                  <img src="../../assets/img/ESTETICISTA.png" class="card-img-top">
                  <div class="card-body">
                    <h4 class="card-title">Clínicas de Estética</h4>
                    <h6 class="sub-title mb-2 text-muted">Melhores clínicas de estética mais próximas a você!</h6>
                      <p class="card-text">Limpezas faciais, peelings e muito mais</p>
                      <a href="#" class="card-link">Mais...</a>               
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">

                    <img src="../../assets/img/makeup.jpg" class="card-img-top">
                    <div class="card-body">
                      <h4 class="card-title">Studios de Maquiagem</h4>
                      <h6 class="sub-title mb-2 text-muted">Melhores maquiadores!</h6>
                        <p class="card-text">Maquiagens de todos os tipos e penteados</p>
                        <a href="#" class="card-link">Mais...</a>               
                      </div>
                  </div>
              </div>
        </div>

      </div>

      <div class="jumbotron jumbotron-fluid " id="jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="display-4">Cadastre-se como cliente e receba descontos exclusivos!</h1>
              <p class="lead">Esperar horas para marcar um horário e ser atendido? <br>
                Nunca mais! Com o Dá Um Up, você economiza tempo e dinheiro! <br>
              Disponível para Android e IOS</p>
              <img src="../../assets/img/Celular.png" > 
              <hr>
            </div>
          </div>

          <div class="row ">
            <div class="col-12 ">
              <ul class="nav nav-pills justify-content-sm-center text-dark"  id="pills-nav" role="tablist">
                <li nav-item>
                    <a href="#nav-item-01" class="nav-link active" id="nav-pills-01" data-toggle="pill">Playstore</a>
                </li>
                <li nav-item>
                    <a href="#nav-item-02" class="nav-link" id="nav-pills-02" data-toggle="pill">App Store</a>
                </li>
                <li nav-item>
                    <a href="#nav-item-03" class="nav-link" id="nav-pills-03" data-toggle="pill">WindowsPhone</a>
                </li>

              </ul>
            </div>
          </div>
          <br>
          <br>
              <div class= "col-12 text-center" id="jumbotron2">
               <h1 class="display-4">Cadastre seu estabelecimento e conheça as vantagens!</h1> 
               <p class="lead">Anotar e agendar horários de clientes manualmente? Nunca mais!<br>
              O Dá Um Up, registra todos os horários marcados pelos clientes, realiza descontos
              e parcerias com seu estabelecimento! </p>    
                <img src="../../assets/img/telapc.png" class="mt-5">
                

                </div>
                <hr class="mt-5">
                

                
        </div>
       
      </div>
  </body>
</html>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import NavbarMap from "@/components/common/NavbarMap";
import Carousel from "@/components/common/Carousel";

export default {
  
  components: {
    Navbar, Carousel, NavbarMap
  },
  data() {
    return {
    };
  },
  methods: {
    login: function() {
      this.$router.push("/login"); 
    },
    home: function() {
      this.$router.push("/"); 
    },
    map: function() {
      this.$router.push("/map"); 
    },
    cadastro: function() {
      this.$router.push("/cadastro"); 
    }
  }
};
</script>


<style scoped>

</style>