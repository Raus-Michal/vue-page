<template>

<div class="con-h">    
<h1>Detaily našeho blogu o&nbsp;cestování městy</h1>
</div>

<div class="con-c">
<div class="con-max">

<figure class="img-box">
<picture>
<source media="(max-width:400px)" srcset="/img-details/img-1-400.avif" type="image/avif">
<source media="(min-width:400px)" srcset="/img-details/img-1-600.avif" type="image/avif">
<source media="(max-width:400px)" srcset="/img-details/img-1-400.webp" type="image/webp">
<source media="(min-width:400px)" srcset="/img-details/img-1-600.webp" type="image/webp">
<source media="(max-width:400px)" srcset="/img-details/img-1-400.jpg" type="image/jpg">
<source media="(min-width:400px)" srcset="/img-details/img-1-600.jpg" type="image/jpg">
<img width="400" height="200" src="/img-details/img-1-400.jpg" alt="Velko-město-z-ulice" loading="lazy">
</picture>
</figure>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit.</p>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit.</p>

<div class="box">
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae harum quibusdam reprehenderit consequuntur! Quod quas sint laudantium maiores corrupti quam, laborum unde voluptatum officia rerum necessitatibus labore distinctio esse! </p>
</div>

<figure class="img-box">
<picture>
<source media="(max-width:400px)" srcset="/img-details/img-2-400.avif" type="image/avif">
<source media="(min-width:400px)" srcset="/img-details/img-2-600.avif" type="image/avif">
<source media="(max-width:400px)" srcset="/img-details/img-2-400.webp" type="image/webp">
<source media="(min-width:400px)" srcset="/img-details/img-2-600.webp" type="image/webp">
<source media="(max-width:400px)" srcset="/img-details/img-2-400.jpg" type="image/jpg">
<source media="(min-width:400px)" srcset="/img-details/img-2-600.jpg" type="image/jpg">
<img width="400" height="200" src="/img-details/img-2-400.jpg" alt="Velko-město-z-výšky" loading="lazy">
</picture>
</figure>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

</div>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped>

.con-h
{
padding:3rem 1rem;
background-color:rgb(255,212,197);
margin-bottom:3rem;
}

/* pokud je obrazovka větší než 700 px */
@media only screen and (min-width:43.75em)
{
.con-h
{
padding-left:15%;
}
}

.con-c
{
padding:1rem;
display:flex;
flex-direction:column;
align-items:center;
}

.con-max
{
width:100%;
max-width:37.5rem; /* 600 px */
}

.box
{
background-color:rgb(255,212,197);
padding:2rem;
margin-bottom:1rem;
}

.box p
{
font-style:italic;
font-weight:bold;
margin-bottom:0;
}

.img-box
{
aspect-ratio:2/1;
}

</style>
