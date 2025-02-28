<template>

<div class="flex">
<KartaProduktu />
<KartaProduktu />
<KartaProduktu />
<KartaProduktu /> 
</div>


</template>

<script setup lang="ts">
import KartaProduktu from '../components/KartaProduktu.vue'

const name = 'Home';

</script>

<style scoped>
.flex
{
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:1rem;
margin-bottom:1rem;
}

</style>
