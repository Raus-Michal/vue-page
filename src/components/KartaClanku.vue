<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  index: number;
  cesta: string;
  cesta2: string;
  title: string;
  nadpis: string;
}>();

const router = useRouter();

const goToNewPage = () => {
  router.push({
    name: 'Detail',
    params: { id: String(props.index) },
    query: { index: props.index, cesta: props.cesta, cesta2: props.cesta2, title: props.title, nadpis: props.nadpis }
  });
};
</script>

<template>
  <div class="obal">
    <div class="karta">
      <div class="con">
        <figure>
          <picture>
            <source :srcset="`${cesta ?? ''}.avif`" type="image/avif">
            <source :srcset="`${cesta ?? ''}.webp`" type="image/webp">
            <img :src="`${cesta ?? ''}.jpg`" width="400" height="500" :alt="`Obrázek ${nadpis}`" loading="lazy">
          </picture>
        </figure>
        <div class="con-other">
          <p class="big">Travel</p>
          <p class="podnadpis">{{ nadpis }}</p>
              <div class="delic">
                  <div> </div>
              </div>
          <p class="text">{{ title }}</p>
          <div class="con-button">
            <button type="button" @click="goToNewPage" title="Číst víc"><span>Read More</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.obal
{
display:inline-block; /* Zajistí, že karta zůstane celá v jednom sloupci */
width:300px; /* Přizpůsobení šířce sloupce */
break-inside:avoid; /* Zabraňuje zalomení */
margin-bottom:1.5rem; /* Mezera mezi kartami */
}

.karta
{
display:flex;
width:100%;
height:auto;
background-color:transparent;
margin-bottom: 1rem;
}

.big
{
text-transform: uppercase;
}

.con
{
display:flex;
flex-wrap:wrap;
}

.con-other
{
align-self: flex-end;
}

.con div p
{
color:black;
font-size:1.5rem;
font-weight:500;
text-align:center;
}

.con div p:first-child
{
font-size: 0.8rem;
text-transform: uppercase;
margin-bottom: 0;
font-weight: 200;
}

.con div p.text
{
font-size: 0.9rem;
margin-bottom: 1rem;
font-weight: 200;
text-align: justify;
}

.con-button {
  display: flex;
  justify-content: center;
}

.con div button {
  font-size: 0.9rem;
  color: black;
  background: none;
  border: none;
  width: auto;
  padding: 0.7rem 1rem;
  filter: transformY(-0.25rem);
}

.con button span {
  display: block;
  transform: translateY(0.1rem);
}

.podnadpis {
font-family: "nadpis", sans-serif;
}

.delic
{
margin:0 0 1rem 0;
display:flex;
justify-content:center;
}

.delic div
{
border-bottom:2px solid gray;
width:30%;
}

</style>
