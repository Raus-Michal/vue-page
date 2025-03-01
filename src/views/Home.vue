<template>

<div class="flex">
<KartaProduktu />
<KartaProduktu />
<KartaProduktu />
<KartaProduktu /> 
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
import KartaProduktu from '../components/KartaProduktu.vue'
import KartaClanku from '../components/KartaClanku.vue'


const name = 'Home';

</script>

<style scoped>
.flex
{
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:.5rem;
margin-bottom:1rem;
}


.con-clanky
{
display:flex;
flex-wrap:wrap;
justify-content:center;
height:auto;
margin:5rem 0;
}

/* pokud je obrazovka větší než */
@media only screen and (min-width:600px)
{
.con-clanky
{
columns:2;
height:auto;
gap:1rem;
}
}

/* pokud je obrazovka větší než */
@media only screen and (min-width:900px)
{
.con-clanky
{
columns:3;
}
}

/* pokud je obrazovka větší než */
@media only screen and (min-width:1000px)
{
.con-clanky
{
margin:5rem 15vw;
}
}



</style>
