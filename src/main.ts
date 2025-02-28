import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Použití Vue Router
app.use(router);

app.mount('#app');
