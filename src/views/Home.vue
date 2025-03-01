<template>
  <div class="flex">
    <KartaProduktu v-for="(item, index) in produkty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>

  <div class="con-clanky">
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
    <KartaClanku />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import KartaProduktu from '../components/KartaProduktu.vue';
import KartaClanku from '../components/KartaClanku.vue';

const produkty = ref<{ id: number; src: string; title: string; nadpis: string }[]>([]);

const fetchJSON = async (): Promise<any> => {
  const jsonFilePath = "./data/produkty.json"; // Opravená cesta (NE `./public/...`)
  try {
    const response = await fetch(jsonFilePath);
    if (!response.ok) throw new Error("Síťová odpověď nebyla v pořádku");

    const jsonData = await response.json();
    return jsonData.data || []; // Vrátí prázdné pole, pokud není data
  } catch (error) {
    console.error("Chyba při načítání JSON:", error);
    return [];
  }
};

onMounted(async () => {
  produkty.value = await fetchJSON();
  console.log("Načtená data:", produkty.value);
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
