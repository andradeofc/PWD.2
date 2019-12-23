<template>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
    <title>Da um UP!</title>
  </head>
  <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    
    <!-- Inicio MENU -->
     <Navbar> </Navbar>

<!-- Inicio Login -->
<div class="page">
    <!--Login & Signup in single row-->
    <div class="row">
        <!--Column for signin-->
        <div class="col-sm-8 text-center signin">
            <!-- Default form login -->
            <form action="#!">
                <p class="h4 mb-4 text-center signintext top"><strong>Faça seu Cadastro</strong></p>
                <!--Login with Social Media Buttons-->
                <div class="social-btn text-center"> <a href="#" class="btn btn-primary btn-lg" title="Facebook"><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-info btn-lg" title="Twitter"><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-danger btn-lg" title="Pinterest"><i class="fa fa-pinterest"></i></a> </div>
                <p class="text-center signintext">Use suas redes sociais para fazer seu cadastro</p> <!-- Email --> <input type="email" class="form-control mb-4" placeholder="Usuario ou Email" style="font-family:Arial, FontAwesome"> <!-- Password --> <input type="password" class="form-control mb-4" placeholder="Senha" style="font-family:Arial, FontAwesome"> <!-- Sign in button --> <a class="ForgotPassBtn" href="">Esqueceu sua senha?</a> <button class="btn btn-info btn-block LoginBtn" type="submit">Entrar</button>
            </form>
        </div>
        <!--Column for signin-->
        <div class="col-sm-4 signup text-center">
            <h2 class="HelloFriend">Olá, bem vindo!</h2>
            <h4 class="SignupText">Se você já é parceiro basta fazer seu login. </h4>
            <a href="#" @click="login">
             <button class="btn btn-info btn-block signupbtn" type="submit">Login</button>
            </a>
        </div>
    </div>
</div>
<!-- Inicio Login-->
</body>

</html>

</template>

<script>
import Navbar from "@/components/common/Navbar";
export default {
  components: {
    Navbar
  },
  data() {
    return {
    };
  },
  methods: {
    login: function() {
      this.$router.push("/login"); 
    }
  }
};


/* eslint-disable */
</script>


<style scoped>
  .row {
     margin-left: 2%;
     margin-right: 2%;
     margin-top: 5%
 }

 .page {
     width: 100%;
     height: auto;
     min-height: 100vh;
     background-color: #ede7e6;
     background-size: 100% 100%;
     background-position: top center;
     padding: 10px
 }

 .signintext {
     margin-right: 20% !important;
     color: #969799
 }

 .top {
     color: rgb(119, 119, 119)
 }

 .btn {
     width: 30%;
     margin-top: 5%;
     margin-bottom: 5%;
     margin-left: 25%
 }

 .ForgotPassBtn {
     background-color: white;
     color: black;
     border-bottom: 1px solid #c7c5c5;
     padding-bottom: 3px;
     text-decoration: none !important;
     margin-right: 20%;
     border-top-color: none
 }

 .LoginBtn {
     border-radius: 25px;
     background-color: rgb(119, 119, 119);
     border: none
 }

 .signupbtn {
     border-radius: 25px;
     width: 25%;
     margin: auto;
     background-color: rgb(119, 119, 119);
     border: solid 1px white;
     font-size: 10px
 }

 form {
     padding: 0;
     margin-left: 15%
 }

 .signin {
     background-color: white;
     padding: 2%;
     margin: auto
 }

 .signup {
     background-image: url("../../assets/img/backcadastre-se.png");
     background-position: 100% 75%;
     background-repeat: no-repeat;
     padding: 2%
 }

 .form-control {
     width: 40%;
     margin: 20%;
     margin-bottom: 5%;
     margin-top: 5%;
     background-color: #ebe8e8
 }

 .custom-control {
     margin-bottom: 2%
 }

 h2.HelloFriend {
     color: rgb(255, 255, 255) !important;
     font-weight: 200px;
     margin-top: 45%;
     margin-bottom: 10%
 }

 .SignupText {
     color: rgb(255, 255, 255);
     margin-bottom: 15%;
     font-size: 16px;
     font-weight: 10px !important;
     font-family: Garamond
 }

 @media only screen and (max-width: 600px) {
     row {
         margin-top: 5%;
         margin-left: 1%;
         margin-right: 1%
     }
 }

 input,
 input:focus {
     border-width: 0px;
     outline: 0;
     -webkit-appearance: none;
     box-shadow: none;
     -moz-box-shadow: none;
     -webkit-box-shadow: none
     
 }

 .social-btn .btn {
     color: #fff;
     margin: 8px 0 0 30px;
     font-size: 15px;
     width: 45px;
     height: 40px;
     line-height: 25px;
     border-radius: 50%;
     font-weight: normal;
     text-align: center;
     border: solid 0.5px grey;
     transition: all 0.4s
 }

 .social-btn .btn:first-child {
     margin-left: 0
 }

 .social-btn .btn:hover {
     opacity: 0.8
 }

 .social-btn .btn i {
     font-size: 20px
 }

 .social-btn {
     margin-right: 20%;
     margin-bottom: 7%;
     margin-top: 5%
 }
</style>
