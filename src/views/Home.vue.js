import KartaProduktu from "../components/KartaProduktu.vue";
import Monsory from "../components/Monsory.vue";
import { useDataLoader } from "@/services/dataService";
const { produkty, karty } = useDataLoader();
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
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
        index: (index),
        cesta: (item.src),
        cesta2: (item.src2),
        nadpis: (item.nadpis),
        title: (item.title),
    }));
    const __VLS_1 = __VLS_0({
        key: (index),
        index: (index),
        cesta: (item.src),
        cesta2: (item.src2),
        nadpis: (item.nadpis),
        title: (item.title),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
/** @type {[typeof Monsory, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Monsory, new Monsory({
    karty: (__VLS_ctx.karty),
}));
const __VLS_4 = __VLS_3({
    karty: (__VLS_ctx.karty),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            KartaProduktu: KartaProduktu,
            Monsory: Monsory,
            produkty: produkty,
            karty: karty,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
