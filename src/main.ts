import Vue from 'vue'
import App from './App.vue'
//--- GOLDEN LAYOUT ---
import vgl from "vue-golden-layout";
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-light-theme.css";
Vue.use(vgl);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
