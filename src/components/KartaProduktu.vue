<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  index: number;
  cesta: string;
  cesta2: string;
  title: string;
  nadpis: string;
}>();

const router = useRouter();

const goToNewPage = () => {
  router.push({
    name: 'Detail',
    params: { id: String(props.index) },
    query: { index: props.index, cesta: props.cesta, cesta2: props.cesta2, title: props.title, nadpis: props.nadpis }
  });
};

</script>

<template>
  <div class="karta">
    <figure class="img-produktu">
      <picture>
        <source :srcset="`${cesta ?? ''}.avif`" type="image/avif">
        <source :srcset="`${cesta ?? ''}.webp`" type="image/webp">
        <img :src="`${cesta ?? ''}.jpg`" width="400" height="500" :alt="`Obrázek ${props.title}`" loading="lazy">
      </picture>
    </figure>
    <div class="con">
      <p class="podnadpis">{{ nadpis }}</p>
      <p>{{ title }}</p>
      <div>
        <button type="button" @click="goToNewPage" title="Číst víc"><span>Read More</span></button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.karta {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  max-width: 400px;
  height: auto;
  aspect-ratio:1/1.25;
  background-color: transparent;
}

.img-produktu {
  position: absolute;
  min-width: 280px;
  max-width: 400px;
  height: auto;
  z-index: -1;
  aspect-ratio: 1/1.25;
}

.con {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;
}

.con p {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
}

.con p:first-child {
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 200;
}

.con button {
  font-size: 0.9rem;
  color: white;
  background: none;
  border: 1px solid white;
  width: auto;
  padding: 0.7rem 1rem;
  filter: transformY(-0.25rem);
}

.con button span {
  display: block;
  transform: translateY(0.1rem);
}

.podnadpis {
  font-family: "nadpis", sans-serif;
}
</style>
