import Router from "vue-router";
import Home from "@/views/home/Index";
import Login from "@/views/login/Index";
import Cadastro from "@/views/Cadastro/index";
import Perfil from "@/views/profile/Index";
import LoginEmpresarial from "@/views/LoginEmpresa/index";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: Cadastro
    },
    {
      path: "/loginempresarial",
      name: "LoginEmpresarial",
      component: LoginEmpresarial
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: Perfil
    }
  ]
});
