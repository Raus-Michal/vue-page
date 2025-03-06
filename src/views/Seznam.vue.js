import Monsory from '../components/Monsory.vue';
import { useDataLoader } from "@/services/dataService";
const { produkty, karty } = useDataLoader();
const name = 'Seznam';
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Monsory, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Monsory, new Monsory({
    karty: (__VLS_ctx.karty),
}));
const __VLS_1 = __VLS_0({
    karty: (__VLS_ctx.karty),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
var __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Monsory: Monsory,
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
