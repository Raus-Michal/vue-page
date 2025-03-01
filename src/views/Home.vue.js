import { ref, onMounted } from 'vue';
import KartaProduktu from '../components/KartaProduktu.vue';
import KartaClanku from '../components/KartaClanku.vue';
const produkty = ref([]);
const fetchJSON = async () => {
    const jsonFilePath = "/data/produkty.json"; // Opravená cesta (NE `./public/...`)
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok)
            throw new Error("Síťová odpověď nebyla v pořádku");
        const jsonData = await response.json();
        return jsonData.data || []; // Vrátí prázdné pole, pokud není data
    }
    catch (error) {
        console.error("Chyba při načítání JSON:", error);
        return [];
    }
};
onMounted(async () => {
    produkty.value = await fetchJSON();
    console.log("Načtená data:", produkty.value);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.produkty))) {
    /** @type {[typeof KartaProduktu, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(KartaProduktu, new KartaProduktu({
        key: (index),
        cesta: (item.src),
        nadpis: (item.nadpis),
        title: (item.title),
    }));
    const __VLS_1 = __VLS_0({
        key: (index),
        cesta: (item.src),
        nadpis: (item.nadpis),
        title: (item.title),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-clanky" },
});
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {[typeof KartaClanku, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({}));
const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            KartaProduktu: KartaProduktu,
            KartaClanku: KartaClanku,
            produkty: produkty,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
