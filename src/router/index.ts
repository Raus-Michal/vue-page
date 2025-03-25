import { createRouter, createWebHistory , RouteLocationNormalizedLoaded } from 'vue-router';
import Home from '../views/Home.vue';
import Seznam from '../views/Seznam.vue';
import Details from '../views/Details.vue';
import Detail from '../views/Detail.vue';


interface ImportMetaEnv {
  readonly BASE_URL: string; // Definujte BASE_URL jako string
  // Přidejte další vlastní proměnné prostředí, pokud je používáte:
  readonly VITE_API_URL?: string; // Příklad
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


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
    props: (route: RouteLocationNormalizedLoaded) => ({ index: route.query.index as number, cesta: route.query.cesta as string, cesta2: route.query.cesta2 as string, title: route.query.title as string, nadpis: route.query.nadpis as string}) // Definujte props jako query parameters
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
