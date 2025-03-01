<template>

<div class="flex">
<KartaProduktu />
<KartaProduktu />
<KartaProduktu />
<KartaProduktu /> 
</div>


<div class="con-clanky">
<KartaClanku />
<KartaClanku />
<KartaClanku />
<KartaClanku />
<KartaClanku />
<KartaClanku />
<KartaClanku />
<KartaClanku />
<KartaClanku />
</div>

</template>

<script setup lang="ts">
import KartaProduktu from '../components/KartaProduktu.vue'
import KartaClanku from '../components/KartaClanku.vue'

class Produkty{

loadData()
{
// načtení z JSON časy, které jsou již rezervované

// Asynchronní funkce pro načtení JSON souboru pomocí fetch
const fetchJSON=async():Promise<any> => {
const jsonFilePath="./data/produkty.json"; // cesta k JSON souboru
try{
const response=await fetch(jsonFilePath); // načítání dat ze souboru JSON
if(!response.ok){
throw new Error("Síťová odpověď nebyla v pořádku"); // chyba při načítání
}
let jsonData=await response.json(); // převzetí dat do proměnné

// Pokud JSON neobsahuje pole 'data' nebo pokud je prázdné, nastavíme prázdné pole
if(!jsonData||!jsonData.data||!Array.isArray(jsonData.data))
{
jsonData={data:[]};  // Zajistíme, že data budou vždy pole
}
return jsonData; // vrací načtená data
}catch(error) {
console.error("Chyba při načítání JSON:", error);
return {data:[]}; // Vrátí prázdný objekt, pokud dojde k chybě
}
};

setTimeout(async()=>{
// Načtení JSON dat ze serveru

const jsonData=await fetchJSON(); // Načtení JSON dat z servru

// Pokud byla data úspěšně načtena, pokračuj ve zpracování
if(jsonData){
jsonData.data.forEach((item:{id:number,src:string,title:string,nadpis:string})=>{
const dateArray:[number,string,string,string]=[item.id,item.src,item.title,item.nadpis];

console.log(dateArray);

});
}

// zde budou případná operace po zpracování JSON

},0);  // Použití setTimeout k oddělení asynchronní operace

};

};

const produkty=new Produkty;

produkty.loadData();

const name = 'Home';

</script>

<style scoped>
.flex
{
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:.5rem;
margin-bottom:1rem;
}


.con-clanky
{
display:flex;
flex-wrap:wrap;
justify-content:center;
height:auto;
margin:5rem 0;
}

/* pokud je obrazovka větší než */
@media only screen and (min-width:600px)
{
.con-clanky
{
columns:2;
height:auto;
gap:1rem;
}
}

/* pokud je obrazovka větší než */
@media only screen and (min-width:900px)
{
.con-clanky
{
columns:3;
}
}

/* pokud je obrazovka větší než */
@media only screen and (min-width:1000px)
{
.con-clanky
{
margin:5rem 15vw;
}
}



</style>
