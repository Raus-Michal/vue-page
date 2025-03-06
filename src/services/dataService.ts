// src/services/dataService.ts
import { ref, onMounted } from "vue";

// Definujeme rozhraní pro data
export interface Produkt {
  id: number;
  src: string;
  src2: string;
  title: string;
  nadpis: string;
}

export interface Karty {
  id: number;
  src: string;
  src2: string;
  title: string;
  nadpis: string;
}

// Reaktivní reference pro produkty a karty
export const produkty = ref<Produkt[]>([]);
export const karty = ref<Karty[]>([]);

// Funkce pro načtení JSON souboru
export const fetchJSON = async (src_json: string): Promise<Produkt[]> => {
  try {
    const response = await fetch(src_json);
    if (!response.ok) throw new Error("Síťová odpověď nebyla v pořádku");

    const jsonData: { data: Produkt[] } = await response.json();
    return jsonData.data || [];
  } catch (error) {
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
