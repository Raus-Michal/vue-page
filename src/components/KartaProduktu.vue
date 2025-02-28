




<template>
<div class="karta">
<div class="con">

<p>Lifestyle</p>
<p>Popisek - data budou dodána z JSON - API</p>

<div>
<button type="button" title="Číst víc" ><span>Read More</span></button>
</div>

</div>

</div>


</template>

<script setup lang="ts">
const name = 'KartaProduktu';
</script>

<style scoped>

.karta
{
display:flex;
align-items:flex-end;
width:100%;
min-width:280px;
max-width:400px;
height:500px;
background-color:grey;
}

.con
{
display:flex;
flex-direction:column;
align-items:center;
padding:1rem;
margin-bottom:3rem;
}

.con p
{
color:white;
font-size:1.5rem;
font-weight:500;
text-align:center;
margin-bottom:2rem;
}

.con p:first-child
{
font-size:.8rem;
text-transform:uppercase;
margin-bottom:1rem;
font-weight:200;
}

.con button
{
font-size:.9rem;
color:white;
background:none;
border:1px solid white;
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
