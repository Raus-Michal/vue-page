<template>
  <div class="flex">
    <KartaProduktu v-for="(item, index) in produkty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>

  <div class="con-clanky">
    <KartaClanku  v-for="(item, index) in karty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import KartaProduktu from '../components/KartaProduktu.vue';
import KartaClanku from '../components/KartaClanku.vue';


interface Produkt{
id:number;
src:string;
title:string;
nadpis:string;
}

interface Karty{
id:number;
src:string;
title:string;
nadpis:string;
}

const produkty = ref<Produkt[]>([]);
const karty = ref<Produkt[]>([]);

const fetchJSON = async (src_json:string): Promise<Produkt[]> => {
  const jsonFilePath = src_json; // Opravená cesta (NE `./public/...`)
  try {
    const response = await fetch(jsonFilePath);
    if (!response.ok) throw new Error("Síťová odpověď nebyla v pořádku");

    const jsonData: { data: Produkt[] } = await response.json();
    return jsonData.data || []; // Vrátí prázdné pole, pokud není data
  } catch (error) {
    console.error("Chyba při načítání JSON:", error);
    return [];
  }
};

onMounted(async () => {
  produkty.value = await fetchJSON("/data/produkty.json");
  karty.value = await fetchJSON("/data/karty.json");
  console.log("Načtené produkti:", produkty.value);
  console.log("Načtené karty:", karty.value);
});
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.con-clanky {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  margin: 5rem 0;
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 600px) {
  .con-clanky {
    columns: 2;
    height: auto;
    gap: 1rem;
  }
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 900px) {
  .con-clanky {
    columns: 3;
  }
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 1000px) {
  .con-clanky {
    margin: 5rem 15vw;
  }
}
</style>
