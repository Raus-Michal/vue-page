
<script setup lang="ts">

import KartaClanku from '../components/KartaClanku.vue';
import Monsory from '../components/Monsory.vue';

import { useDataLoader } from "@/services/dataService";

const { produkty, karty } = useDataLoader();

const name = 'Seznam';

</script>

<template>
<Monsory :karty="karty" />
</template>

<style scoped>


</style>
