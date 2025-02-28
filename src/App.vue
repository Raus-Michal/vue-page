



<template>
<div id="app">
<nav>
<router-link to="/">Domů</router-link> |
<router-link to="/seznam-clanku/">Seznam článků</router-link> |
<router-link to="/deatails/">Detail</router-link>
</nav>

<router-view /> <!-- Zde se vykreslí aktuální stránka podle URL -->


</div>
</template>


<script setup lang="ts">
const name = 'App';

</script>


<style scoped>

</style>
