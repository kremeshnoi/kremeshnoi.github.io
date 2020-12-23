import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './registerServiceWorker';
import VueLazyload from "vue-lazyload";
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import "./assets/styles/index.scss"

library.add(faGithub);
library.add(faLinkedinIn);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueLazyload);
Vue.use(BootstrapVue);

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
