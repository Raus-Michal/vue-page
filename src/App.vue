<template>
<div id="app">

<header>

<div class="logo-box">
<img src="./assets/logo.svg" alt="logo webu">
</div>

<nav>
<router-link title="Homepage" to="/">Home</router-link>
<router-link title="Seznam článků" to="/seznam-clanku/">Seznam</router-link>
<router-link title="Detail produktu" to="/details/">Detail</router-link>
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
