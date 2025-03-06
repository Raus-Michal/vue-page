import KartaClanku from '../components/KartaClanku.vue';
import { useDataLoader } from "@/services/dataService";
const { produkty, karty } = useDataLoader();
const name = 'Seznam';
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "cen" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-clanky" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.karty))) {
    /** @type {[typeof KartaClanku, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(KartaClanku, new KartaClanku({
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
/** @type {__VLS_StyleScopedClasses['cen']} */ ;
/** @type {__VLS_StyleScopedClasses['con-clanky']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            KartaClanku: KartaClanku,
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
