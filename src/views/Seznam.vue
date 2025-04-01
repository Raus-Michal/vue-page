<script setup lang="ts">
import { computed } from "vue";
import Monsory from '../components/Monsory.vue';
import { useDataLoader } from "@/services/dataService";
const { karty } = useDataLoader("../data/");

// Úprava cesty src a src2 přímo v template
const upraveneKarty = computed(() =>
  karty.value.map((karta) => ({
    ...karta,
    src: `../${karta.src}`,
    src2: `../${karta.src2}`,
  })) // Metoda map upraví cesty src a src2 přidáním prefixu ../
);

</script>

<template>
<Monsory :karty="upraveneKarty" />
</template>