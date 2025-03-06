<script setup lang="ts">

import KartaProduktu from "../components/KartaProduktu.vue";
import KartaClanku from "../components/KartaClanku.vue";
import Monsory from "../components/Monsory.vue";

import { useDataLoader } from "@/services/dataService";

const { produkty, karty } = useDataLoader();
</script>

<template>
  <div class="flex">
    <KartaProduktu v-for="(item, index) in produkty" :key="index" :index="index" :cesta="item.src" :cesta2="item.src2" :nadpis="item.nadpis" :title="item.title" />
  </div>
<Monsory :karty="karty" />
</template>


<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
</style>
