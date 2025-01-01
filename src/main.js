// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Import MDI CSS
import 'material-design-icons-iconfont/dist/material-design-icons.css'
const app = createApp(App);

app.use(router); // Use the router
app.use(vuetify); // Use Vuetify

app.mount('#app');
