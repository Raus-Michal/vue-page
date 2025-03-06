<script setup lang="ts">

import KartaClanku from "./KartaClanku.vue";


defineProps<{
  karty: Array<{ src: string; src2: string; nadpis: string; title: string }>;
}>();

</script>

<template>
<div class="cen">
 <div class="con-clanky">
   <KartaClanku v-for="(item, index) in karty" :key="index" :index="index" :cesta="item.src" :cesta2="item.src2" :nadpis="item.nadpis" :title="item.title" />
  </div>
</div>
</template>

<style scoped>
.con-clanky {
  column-width:300px; /* Sloupce budou mít min. šířku 300px */
  column-gap:0; /* Mezera mezi sloupci */
  margin:0;
  max-width:300px; /* Maximální šířka kontejneru */
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 660px) {
  .con-clanky {
    max-width:630px; /* Maximální šířka kontejneru */
     padding-left:10px;
  }
}

/* pokud je obrazovka větší než */
@media only screen and (min-width: 990px) {
  .con-clanky {
  max-width:970px; /* Maximální šířka kontejneru */
  padding-left:15px;
  }
}

.cen
{
display:flex;
justify-content:center;
}
</style>