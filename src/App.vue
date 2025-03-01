<template>
<div id="app">

<header>

<div class="logo-box">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
<path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
<path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
</svg>
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
