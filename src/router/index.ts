import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Seznam from '../views/Seznam.vue';
import Details from '../views/Details.vue';

// Definice cest a jejich komponent
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/seznam-clanku/',
    name: 'Seznam',
    component: Seznam
  },
  {
    path: '/details',  // Opravený překlep
    name: 'Details',
    component: Details
  }
];

// Vytvoření routeru
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Používá HTML5 History API
  routes
});

export default router;
