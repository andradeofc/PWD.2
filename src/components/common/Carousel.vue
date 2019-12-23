<template>
<div id="carouselSite" class="carousel slide " data-ride="carousel">

      <ol class="carousel-indicators">
        <li data-target="#carouselSite" data-slide-to="0" class="active"></li>
        <li data-target="#carouselSite" data-slide-to="1"></li>
      </ol>

      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src="../../assets/img/img-slide-0.png" class="img-fluid d-block  ">

          <div class="carousel-caption d-none d-md-block text-slide">
            <h1>A beleza cada vez mais ao seu alcance!</h1>
            <p class="lead">Agende seu horário com apenas um clique! </p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../../assets/img/img-slide-1.png" class="img-fluid d-block ">

          <div class="carousel-caption d-none d-md-block text-slide">
              <h1>Estabelecimentos de Qualidade!</h1>
              <p class="lead">Os melhores estabelecimentos da sua região estão conosco! </p>
            </div>

        </div>

      </div>

      <a class="carousel-control-prev" href="#carouselSite" role="buttom" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Anterior</span>
      </a>

      <a class="carousel-control-next" href="#carouselSite" role="buttom" data-slide="prev">
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Proximo</span>
      </a>

    </div>
  
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
