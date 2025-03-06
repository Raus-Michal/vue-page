import { useRoute } from 'vue-router';
const route = useRoute();
// Přímé získání parametrů a dotazů z route s ošetřením proti undefined
const id = route.params.id ?? "";
const index = route.query.index ?? "";
const cesta = route.query.cesta ?? "";
const cesta2 = route.query.cesta2 ?? "";
const title = route.query.title ?? "";
const nadpis = route.query.nadpis ?? "";
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['con-h']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-h" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
(__VLS_ctx.nadpis);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-c" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "con-max" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
    ...{ class: "img-box" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(max-width:400px)",
    srcset: (`${__VLS_ctx.cesta}.avif`),
    type: "image/avif",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(min-width:400px)",
    srcset: (`${__VLS_ctx.cesta2}.avif`),
    type: "image/avif",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(max-width:400px)",
    srcset: (`${__VLS_ctx.cesta}.webp`),
    type: "image/webp",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(min-width:400px)",
    srcset: (`${__VLS_ctx.cesta2}.webp`),
    type: "image/webp",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(max-width:400px)",
    srcset: (`${__VLS_ctx.cesta}.jpg`),
    type: "image/jpg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(min-width:400px)",
    srcset: (`${__VLS_ctx.cesta2}.jpg`),
    type: "image/jpg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    width: "400",
    height: "200",
    src: (`${__VLS_ctx.cesta2}.jpg`),
    alt: (`Obrázek ${__VLS_ctx.nadpis}`),
    loading: "lazy",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "box" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
    ...{ class: "img-box" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(max-width:400px)",
    srcset: (`${__VLS_ctx.cesta}.avif`),
    type: "image/avif",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(min-width:400px)",
    srcset: (`${__VLS_ctx.cesta2}.avif`),
    type: "image/avif",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(max-width:400px)",
    srcset: (`${__VLS_ctx.cesta}.webp`),
    type: "image/webp",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(min-width:400px)",
    srcset: (`${__VLS_ctx.cesta2}.webp`),
    type: "image/webp",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(max-width:400px)",
    srcset: (`${__VLS_ctx.cesta}.jpg`),
    type: "image/jpg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({
    media: "(min-width:400px)",
    srcset: (`${__VLS_ctx.cesta2}.jpg`),
    type: "image/jpg",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    width: "400",
    height: "200",
    src: (`${__VLS_ctx.cesta2}.jpg`),
    alt: (`Obrázek ${__VLS_ctx.nadpis}`),
    loading: "lazy",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
/** @type {__VLS_StyleScopedClasses['con-h']} */ ;
/** @type {__VLS_StyleScopedClasses['con-c']} */ ;
/** @type {__VLS_StyleScopedClasses['con-max']} */ ;
/** @type {__VLS_StyleScopedClasses['img-box']} */ ;
/** @type {__VLS_StyleScopedClasses['box']} */ ;
/** @type {__VLS_StyleScopedClasses['img-box']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cesta: cesta,
            cesta2: cesta2,
            title: title,
            nadpis: nadpis,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
