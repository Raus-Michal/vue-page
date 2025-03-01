<template>
  <div class="flex">
    <KartaProduktu v-for="(item, index) in produkty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>

  <div class="con-clanky">
    <KartaClanku  v-for="(item, index) in karty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>
</template>

<script setup lang="ts">

import KartaProduktu from '../components/KartaProduktu.vue';
import KartaClanku from '../components/KartaClanku.vue';

import { useDataLoader } from "@/services/dataService";

const { produkty, karty } = useDataLoader();

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
