import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import * as VueGoogleMaps from 'vue2-google-maps'



import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCttu5xfB41OA1PDX0l4ZvaDiFelpA6bL0',
    libraries: 'places', 

  },
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
