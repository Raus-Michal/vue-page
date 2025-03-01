




<template>
<div class="karta">
<div class="con">

<div class="img-box">
<img class="img-produktu" width="300" height="500" :src="cesta" alt="test">
</div>

<div class="con-other">
<p>TRAVEL</p>
<p>Nadpis - bude dodán z JSON API</p>
<p class="text">Popisek bude dodán z JSON API - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>

<div class="con-button">
<button type="button" title="Číst víc" ><span>Read More</span></button>
</div>
</div>


</div>

</div>


</template>

<script setup lang="ts">

import { toRefs } from 'vue';

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

.karta
{
display:flex;
width:300px;
height:auto;
background-color:transparent;
margin-bottom:1rem;
}

.img-box /* tato class nejspíš zanikne jakmile se tam dodá obrázek */
{
width:100%;
min-width:100%;
height:300px; /* pouze dočasně - jakmile to bude img - bude výška auto */
background-color:aqua;
margin-bottom:1rem;
}


.con
{
display:flex;
flex-wrap:wrap;
margin-bottom:3rem;
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
</style>
