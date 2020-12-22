import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './registerServiceWorker';
import Argon from "./plugins/argon-kit";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedinIn);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
