import './assets/style/index.scss';
import App from './App.vue';
import router from "./router";
import  {store} from './store'
window.Vue = require('vue');

Vue.component('App',require('./App.vue').default)

new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount("#app");