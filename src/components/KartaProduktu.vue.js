const props = defineProps();
const name = 'KartaProduktu';
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "karta" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
    ...{ class: "img-produktu" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    srcset: (`${props.cesta ?? ''}.avif`),
    type: "image/avif",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    srcset: (`${props.cesta ?? ''}.webp`),
    type: "image/webp",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: (`${props.cesta ?? ''}.jpg`),
    width: "400",
    height: "500",
    alt: (`Obrázek ${props.title}`),
    loading: "lazy",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "podnadpis" },
});
(props.nadpis);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(props.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "button",
    title: "Číst víc",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
/** @type {__VLS_StyleScopedClasses['karta']} */ ;
/** @type {__VLS_StyleScopedClasses['img-produktu']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['podnadpis']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
