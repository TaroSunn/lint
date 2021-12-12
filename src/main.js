import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
const num = 0.5;
console.log(num);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');