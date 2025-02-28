<template>
<div id="app">

<header>

<div class="logo-box">
<img src="./assets/logo.svg" alt="logo webu">
</div>

<nav>
<router-link to="/">Domů</router-link> |
<router-link to="/seznam-clanku/">Seznam článků</router-link> |
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

header
{
display:flex;
flex-wrap:wrap;
gap:1rem;
padding:1rem 12% 1rem 2%;
margin-bottom:1rem;
justify-content:space-between;
align-items:center;
background:pink;
border:2px solid red;
}

img
{
width:100%;
height:auto;
}

.logo-box
{
width:3rem;
height:auto;
}

</style>
