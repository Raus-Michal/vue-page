<script setup lang="ts">
import Monsory from '../components/Monsory.vue';
import { useDataLoader } from "@/services/dataService";
const { karty } = useDataLoader();
</script>

<template>
<Monsory :karty="karty" />
</template>