<template>
<div class="karta">

<figure class="img-produktu">
<picture>
<source :srcset="`${cesta}.avif`" type="image/avif">
<source :srcset="`${cesta}.webp`" type="image/webp">
<img :src="`${cesta}.jpg`" width="400" height="500" :alt="`Obrázek ${title}`" loading="lazy">
</picture>
</figure>

<div class="con">
<p class="podnadpis">{{ nadpis }}</p>
<p>{{ title }}</p>
<div>
<button type="button" title="Číst víc" ><span>Read More</span></button>
</div>

</div>

</div>


</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps<{
cesta: string;
title: string;
nadpis: string;
}>();

// Zajistí reaktivitu props
const state = reactive({ ...props });



const name = 'KartaProduktu';
</script>

<style scoped>

.karta
{
position:relative;
display:flex;
align-items:flex-end;
justify-content:center;
width:100%;
min-width:280px;
max-width:400px;
height:500px;
background-color:transparent;
}

.img-produktu
{
position:absolute;
min-width:280px;
max-width:400px;
height:auto;
z-index:-1;
aspect-ratio:1/1.25;
}

.con
{
display:flex;
flex-direction:column;
align-items:center;
padding:1rem;
margin-bottom:3rem;
}

.con p
{
color:white;
font-size:1.5rem;
font-weight:500;
text-align:center;
margin-bottom:2rem;
}

.con p:first-child
{
font-size:.8rem;
text-transform:uppercase;
margin-bottom:1rem;
font-weight:200;
}

.con button
{
font-size:.9rem;
color:white;
background:none;
border:1px solid white;
width:auto;
padding:.7rem 1rem;
filter:transformY(-0.25rem);
}

.con button span
{
display:block;
transform: translateY(0.1rem);
}

.podnadpis
{
font-family:"nadpis",sans-serif;
}
</style>
