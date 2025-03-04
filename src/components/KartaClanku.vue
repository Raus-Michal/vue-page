<template>
<div class="obal">
<div class="karta">
<div class="con">

<figure>
<picture>
<source :srcset="`${cesta}.avif`" type="image/avif">
<source :srcset="`${cesta}.webp`" type="image/webp">
<img :src="`${cesta}.jpg`" width="400" height="500" :alt="`Obrázek ${nadpis}`" loading="lazy">
</picture>
</figure>

<div class="con-other">
<p class="big">Travel</p>
<p class="podnadpis">{{ nadpis }}</p>
<p class="text">{{ title }}</p>

<div class="con-button">
<button type="button" title="Číst víc" ><span>Read More</span></button>
</div>
</div>


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

const name = 'KartaClanku';
</script>

<style scoped>

.obal
{
  display: inline-block; /* Zajistí, že karta zůstane celá v jednom sloupci */
  width: 300px; /* Přizpůsobení šířce sloupce */
  break-inside: avoid; /* Zabraňuje zalomení */
  margin-bottom: 1.5rem; /* Mezera mezi kartami */
}

.karta
{
display:flex;
width:100%;
height:auto;
background-color:transparent;
margin-bottom:1rem;
}

.big
{
text-transform:uppercase;
}

.con
{
display:flex;
flex-wrap:wrap;
}

.con-other
{
align-self:flex-end;
}

.con div p
{
color:black;
font-size:1.5rem;
font-weight:500;
text-align:center;
margin-bottom:2rem;
}

.con div p:first-child
{
font-size:.8rem;
text-transform:uppercase;
margin-bottom:1rem;
font-weight:200;
}

.con div p.text
{
font-size:.9rem;
margin-bottom:1rem;
font-weight:200;
text-align:justify;
}

.con-button
{
display:flex;
justify-content:center;
}

.con div button
{
font-size:.9rem;
color:black;
background:none;
border:none;
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
