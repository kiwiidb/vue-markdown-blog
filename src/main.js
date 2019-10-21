import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// import the library
import VueNavigationBar from "vue-navigation-bar";
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
Vue.component("vue-navigation-bar", VueNavigationBar);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
