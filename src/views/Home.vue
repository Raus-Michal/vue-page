<template>
  <div class="flex">
    <KartaProduktu v-for="(item, index) in produkty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>

<div class="cen">
  <div class="con-clanky">
    <KartaClanku  v-for="(item, index) in karty" :key="index" :cesta="item.src" :nadpis="item.nadpis" :title="item.title" />
  </div>
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
  column-width:300px; /* Sloupce budou mít min. šířku 300px */
  column-gap:0; /* Mezera mezi sloupci */
  margin:0;
  max-width:300px; /* Maximální šířka kontejneru */
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 660px) {
  .con-clanky {
    max-width:630px; /* Maximální šířka kontejneru */
     padding-left:10px;
  }
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 990px) {
  .con-clanky {
  max-width:970px; /* Maximální šířka kontejneru */
  padding-left:15px;
  }
}

.cen
{
display:flex;
justify-content:center;
}

</style>
