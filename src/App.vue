<template>
<div id="app">

<header>

<div class="logo-box">
<img src="./assets/logo.svg" alt="logo webu">
</div>

<nav>
<router-link to="/">Home</router-link>
<router-link to="/seznam-clanku/">Seznam</router-link>
<router-link to="/details/">Detail</router-link>
</nav>
</header>

<router-view /> <!-- Zde se vykreslí aktuální stránka podle URL -->


</div>
</template>


<script setup lang="ts">
const name = 'App';

</script>


<style scoped>



</style>
