import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Seznam from '../views/Seznam.vue';
import Details from '../views/Details.vue';
import Detail from '../views/Detail.vue';


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
    path: '/details/',  // Opravený překlep
    name: 'Details',
    component: Details
  },
  {
    path: '/detail/:id', // Definujte dynamickou trasu s parametrem
    name: 'Detail',
    component: Detail,
    props: route => ({ index: route.query.index, cesta: route.query.cesta, cesta2: route.query.cesta2 , title: route.query.title , nadpis: route.query.nadpis }) // Definujte props jako query parameters
  }
];

// Vytvoření routeru
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Používá HTML5 History API
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }; // Posun na začátek s animací
  }
});

export default router;
