import { useRouter } from 'vue-router';
const props = defineProps();
const router = useRouter();
const goToNewPage = () => {
    router.push({
        name: 'Detail',
        params: { id: String(props.index) },
        query: { index: props.index, cesta: props.cesta, cesta2: props.cesta2, title: props.title, nadpis: props.nadpis }
    });
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['delic']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "obal" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "karta" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    srcset: (`${__VLS_ctx.cesta ?? ''}.avif`),
    type: "image/avif",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    srcset: (`${__VLS_ctx.cesta ?? ''}.webp`),
    type: "image/webp",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: (`${__VLS_ctx.cesta ?? ''}.jpg`),
    width: "400",
    height: "500",
    alt: (`Obrázek ${__VLS_ctx.nadpis}`),
    loading: "lazy",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-other" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "big" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "podnadpis" },
});
(__VLS_ctx.nadpis);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "delic" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text" },
});
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.goToNewPage) },
    type: "button",
    title: "Číst víc",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
/** @type {__VLS_StyleScopedClasses['obal']} */ ;
/** @type {__VLS_StyleScopedClasses['karta']} */ ;
/** @type {__VLS_StyleScopedClasses['con']} */ ;
/** @type {__VLS_StyleScopedClasses['con-other']} */ ;
/** @type {__VLS_StyleScopedClasses['big']} */ ;
/** @type {__VLS_StyleScopedClasses['podnadpis']} */ ;
/** @type {__VLS_StyleScopedClasses['delic']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
/** @type {__VLS_StyleScopedClasses['con-button']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            goToNewPage: goToNewPage,
        };
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
