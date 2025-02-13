import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import vuetify from './plugins/vuetify' // Import Vuetify plugin
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'



import NavBar from "./NavBar.vue"

import AboutModal from "./components/Modals/AboutModal.vue"
import Mass from "./components/converters/mass.vue"
import Distance from "./components/converters/distance.vue"
import Temperature from './components/converters/temperature.vue'
import Text from "./components/text.vue"
import linear from "./components/solvers/linear.vue"
import quadratic from "./components/solvers/quadratic.vue"
import NumberBase from "./components/converters/numberbase.vue"

import Footer from "./components/footer.vue"
const app = createApp(App);
const head = createHead();
const pinia = createPinia();
app.use(vuetify);
app.use(router);
app.use(head);
app.use(pinia);

app.component('nav-bar',NavBar);
app.component('temperature',Temperature);
app.component('about-modal',AboutModal);

app.component('distance',Distance);
app.component('mass',Mass)
app.component('number',NumberBase);
app.component('linear',linear);
app.component('quadratic',quadratic);
app.component('my-text',Text);

app.component('footer-my',Footer);
app.mount('#app')
