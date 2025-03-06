<script setup lang="ts">
defineProps({
  index: String,
  cesta: String,
  cesta2: String,
  title: String,
  nadpis: String
});
</script>


<template>
  <div class="con-h">    
    <h1>{{ nadpis }}</h1>
  </div>

  <div class="con-c">
    <div class="con-max">
      <figure class="img-box">
        <picture>
          <source media="(max-width:400px)" :srcset="`${cesta}.avif`" type="image/avif">
          <source media="(min-width:400px)" :srcset="`${cesta2}.avif`" type="image/avif">
          <source media="(max-width:400px)" :srcset="`${cesta}.webp`" type="image/webp">
          <source media="(min-width:400px)" :srcset="`${cesta2}.webp`" type="image/webp">
          <source media="(max-width:400px)" :srcset="`${cesta}.jpg`" type="image/jpg">
          <source media="(min-width:400px)" :srcset="`${cesta2}.jpg`" type="image/jpg">
          <img width="400" height="200" :src="`${cesta2}.jpg`" :alt="`Obrázek ${nadpis}`" loading="lazy">
        </picture>
      </figure>

      <p>{{ title }}</p>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit.</p>

      <div class="box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae harum quibusdam reprehenderit consequuntur!</p>
      </div>

      <figure class="img-box">
        <picture>
          <source media="(max-width:400px)" :srcset="`${cesta}.avif`" type="image/avif">
          <source media="(min-width:400px)" :srcset="`${cesta2}.avif`" type="image/avif">
          <source media="(max-width:400px)" :srcset="`${cesta}.webp`" type="image/webp">
          <source media="(min-width:400px)" :srcset="`${cesta2}.webp`" type="image/webp">
          <source media="(max-width:400px)" :srcset="`${cesta}.jpg`" type="image/jpg">
          <source media="(min-width:400px)" :srcset="`${cesta2}.jpg`" type="image/jpg">
          <img width="400" height="200" :src="`${cesta2}.jpg`" :alt="`Obrázek ${nadpis}`" loading="lazy">
        </picture>
      </figure>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nam similique aliquam sequi qui esse vero ad eveniet, eum laboriosam soluta quia nesciunt rem. Quisquam rem tenetur magni odit suscipit.</p>
    </div>
  </div>
</template>



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
