// src/services/dataService.ts
import { ref, onMounted } from "vue";
// Reaktivní reference pro produkty a karty
export const produkty = ref([]);
export const karty = ref([]);
// Funkce pro načtení JSON souboru
export const fetchJSON = async (src_json) => {
    try {
        const response = await fetch(src_json);
        if (!response.ok)
            throw new Error("Síťová odpověď nebyla v pořádku");
        const jsonData = await response.json();
        return jsonData.data || [];
    }
    catch (error) {
        console.error("Chyba při načítání JSON:", error);
        return [];
    }
};
// Funkce pro spuštění při načtení komponenty
export const useDataLoader = () => {
    onMounted(async () => {
        produkty.value = await fetchJSON("/data/produkty.json");
        karty.value = await fetchJSON("/data/karty.json");
        console.log("Načtené produkty:", produkty.value);
        console.log("Načtené karty:", karty.value);
    });
    return { produkty, karty };
};
