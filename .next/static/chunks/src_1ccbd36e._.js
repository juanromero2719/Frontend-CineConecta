(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1ccbd36e._.js", {

"[project]/src/app/(dashboard)/dashboard/components/MessageWelcome.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const MessageWelcome = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl md:text-5xl font-bold mb-8 text-center text-[rgb(var(--gray))]",
                children: "Bienvenido a CineConecta"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/MessageWelcome.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-sm md:text-justify md:text-2xl text-[rgb(var(--gray))]",
                children: "En un mundo donde las opiniones de los usuarios guían nuestras decisiones, CineConecta te invita a ser parte de una comunidad vibrante de cinéfilos. Aquí podrás compartir tus reseñas, descubrir nuevas películas y recibir recomendaciones personalizadas gracias a nuestro sistema de análisis de sentimientos e inteligencia artificial."
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/MessageWelcome.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-10 text-2xl italic text-[rgb(var(--gray))]",
                children: "¡Conéctate, comenta y descubre el cine como nunca antes!"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/MessageWelcome.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_c = MessageWelcome;
const __TURBOPACK__default__export__ = MessageWelcome;
var _c;
__turbopack_context__.k.register(_c, "MessageWelcome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utilities/handleApiError.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// handleApiError.ts
__turbopack_context__.s({
    "handleApiError": (()=>handleApiError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
const handleApiError = (statusCode, serverMessage)=>{
    if (serverMessage) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Error', serverMessage, 'error');
        return;
    }
    switch(statusCode){
        case 400:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Solicitud incorrecta', 'Verifica los datos enviados.', 'warning');
            break;
        case 401:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('No autorizado', 'Tu sesión ha expirado o es inválida.', 'error');
            break;
        case 403:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Prohibido', 'No tienes permisos para esta acción.', 'error');
            break;
        case 404:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('No encontrado', 'Recurso no disponible o incorrecto.', 'info');
            break;
        case 500:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Error del servidor', 'Intenta más tarde.', 'error');
            break;
        default:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Error inesperado', 'Ocurrió un error no controlado.', 'error');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/handleApiError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].interceptors.response.use((response)=>response, (error)=>{
    if (error?.response?.status) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error.response.status, error.response.data?.error);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Sin conexión', 'Revisa tu internet o intenta más tarde.', 'error');
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/adapters/top-rated.adapter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "topRated": (()=>topRated)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interceptors$2f$axiosInterceptor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
;
;
const topRated = {
    async getTopRated () {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('movies/top-rated', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            if (error && typeof error === 'object' && error.isAxiosError) {
                const axiosError = error;
                const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
                throw new Error(message);
            }
            throw new Error('Ocurrió un error inesperado.');
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/hooks/useTopRated.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// hooks/useTopRatedMovies.ts
__turbopack_context__.s({
    "useTopRated": (()=>useTopRated)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$top$2d$rated$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/adapters/top-rated.adapter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useTopRated() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTopRated.useEffect": ()=>{
            let isMounted = true;
            const fetchTopRated = {
                "useTopRated.useEffect.fetchTopRated": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$top$2d$rated$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["topRated"].getTopRated();
                        if (isMounted) {
                            setData(response.data);
                        }
                    } catch (err) {
                        if (isMounted) {
                            setError(err.message);
                        }
                    } finally{
                        if (isMounted) {
                            setLoading(false);
                        }
                    }
                }
            }["useTopRated.useEffect.fetchTopRated"];
            fetchTopRated();
            return ({
                "useTopRated.useEffect": ()=>{
                    isMounted = false;
                }
            })["useTopRated.useEffect"];
        }
    }["useTopRated.useEffect"], []);
    return {
        data,
        loading,
        error
    };
}
_s(useTopRated, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useTopRated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/hooks/useTopRated.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const FeaturedFilms = ()=>{
    _s();
    const { data, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useTopRated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTopRated"])();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedFilms.useEffect": ()=>{
            if (!data || !data.movies || data.movies.length === 0) return;
            const interval = setInterval({
                "FeaturedFilms.useEffect.interval": ()=>{
                    setCurrent({
                        "FeaturedFilms.useEffect.interval": (prev)=>prev === data.movies.length - 1 ? 0 : prev + 1
                    }["FeaturedFilms.useEffect.interval"]);
                }
            }["FeaturedFilms.useEffect.interval"], 5000);
            return ({
                "FeaturedFilms.useEffect": ()=>clearInterval(interval)
            })["FeaturedFilms.useEffect"];
        }
    }["FeaturedFilms.useEffect"], [
        data
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center",
        children: "Cargando..."
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
        lineNumber: 18,
        columnNumber: 25
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
        lineNumber: 19,
        columnNumber: 23
    }, this);
    if (!data || !data.movies || !data.movies.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center",
        children: "No hay películas destacadas."
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
        lineNumber: 20,
        columnNumber: 62
    }, this);
    const total = data.movies.length;
    const goPrev = ()=>setCurrent((prev)=>prev === 0 ? total - 1 : prev - 1);
    const goNext = ()=>setCurrent((prev)=>prev === total - 1 ? 0 : prev + 1);
    const { movie, average_score } = data.movies[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-semibold mb-6 text-center text-[rgb(var(--gray))]",
                children: "Películas Destacadas"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goPrev,
                        className: "p-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center",
                        "aria-label": "Anterior",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#c07b3e",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "15 18 9 12 15 6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                lineNumber: 37,
                                columnNumber: 159
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 rounded-2xl p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: movie.poster_url,
                                alt: movie.title,
                                width: 128,
                                height: 192,
                                className: "w-64 h-96 object-cover rounded-2xl shadow-md"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl text-center font-bold text-[rgb(var(--gray))]",
                                        children: movie.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center mt-1 text-yellow-600 text-4xl text-center",
                                        children: Array.from({
                                            length: 5
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: i < Math.round(average_score) ? '★' : '☆'
                                            }, i, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                                lineNumber: 51,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-4xl font-semibold mt-1 text-center text-[#ba7c3a]",
                                        children: average_score.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goNext,
                        className: "p-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center",
                        "aria-label": "Siguiente",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#c07b3e",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "9 18 15 12 9 6"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                                lineNumber: 63,
                                columnNumber: 159
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(FeaturedFilms, "FMd3piRZrxeUW3UtYKWa7IVlDCo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useTopRated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTopRated"]
    ];
});
_c = FeaturedFilms;
const __TURBOPACK__default__export__ = FeaturedFilms;
var _c;
__turbopack_context__.k.register(_c, "FeaturedFilms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/adapters/genres.adapter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "genres": (()=>genres)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interceptors$2f$axiosInterceptor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
;
;
const genres = {
    async getGenres () {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/movies/genres', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            if (error && typeof error === 'object' && error.isAxiosError) {
                const axiosError = error;
                const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
                throw new Error(message);
            }
            throw new Error('Ocurrió un error inesperado.');
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/hooks/useGenres.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useGenres": (()=>useGenres)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$genres$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/adapters/genres.adapter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useGenres() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGenres.useEffect": ()=>{
            const fetchGenres = {
                "useGenres.useEffect.fetchGenres": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$genres$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genres"].getGenres();
                        setData(response.data);
                    } catch (err) {
                        const message = err instanceof Error ? err.message : 'Error desconocido al obtener géneros.';
                        setError(message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useGenres.useEffect.fetchGenres"];
            fetchGenres();
        }
    }["useGenres.useEffect"], []);
    return {
        data,
        loading,
        error
    };
}
_s(useGenres, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/adapters/filterByGenres.adapter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterByGenres": (()=>filterByGenres)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interceptors$2f$axiosInterceptor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
;
;
const filterByGenres = {
    async getMoviesFilterByGenres (params, token) {
        try {
            // Construir la query string manualmente
            const query = new URLSearchParams();
            if (params.genre) query.append('genre', params.genre);
            if (params.title) query.append('title', params.title);
            const url = `/movies/search${query.toString() ? '?' + query.toString() : ''}`;
            const headers = {
                'Content-Type': 'application/json'
            };
            if (token) headers['Authorization'] = `Bearer ${token}`;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(url, {
                withCredentials: true,
                headers
            });
            return response;
        } catch (error) {
            console.log(error);
            if (error && typeof error === 'object' && error.isAxiosError) {
                const axiosError = error;
                const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
                throw new Error(message);
            }
            throw new Error('Ocurrió un error inesperado.');
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/hooks/useFilterByGenres.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFilterByGenres": (()=>useFilterByGenres)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$filterByGenres$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/adapters/filterByGenres.adapter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useFilterByGenres(filters) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilterByGenres.useEffect": ()=>{
            let isMounted = true;
            setLoading(true);
            setError(null);
            const fetchFilteredMovies = {
                "useFilterByGenres.useEffect.fetchFilteredMovies": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$filterByGenres$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterByGenres"].getMoviesFilterByGenres(filters);
                        if (isMounted) {
                            setData(response.data);
                        }
                    } catch (err) {
                        if (isMounted) {
                            setError(err.message);
                        }
                    } finally{
                        if (isMounted) {
                            setLoading(false);
                        }
                    }
                }
            }["useFilterByGenres.useEffect.fetchFilteredMovies"];
            fetchFilteredMovies();
            return ({
                "useFilterByGenres.useEffect": ()=>{
                    isMounted = false;
                }
            })["useFilterByGenres.useEffect"];
        }
    }["useFilterByGenres.useEffect"], [
        filters
    ]);
    return {
        data,
        loading,
        error
    };
}
_s(useFilterByGenres, "v5inua6mCP5CN8A+E7ULWpnNGvM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useGenres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/hooks/useGenres.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useFilterByGenres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/hooks/useFilterByGenres.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const BestMoviesMonth = ()=>{
    _s();
    // Generos
    const { data: genres, loading: loadingGenres, error: errorGenres } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useGenres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGenres"])();
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BestMoviesMonth.useMemo[filters]": ()=>selectedGenre ? {
                genre: selectedGenre
            } : {}
    }["BestMoviesMonth.useMemo[filters]"], [
        selectedGenre
    ]);
    // Hook de filtro
    const { data: filteredData, loading: loadingFiltered, error: errorFiltered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useFilterByGenres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterByGenres"])(filters);
    const handleGenreChange = (e)=>{
        setSelectedGenre(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-5 shadow-md w-[55%] min-w-[400px] min-h-[550px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-bold mb-12 text-center text-[rgb(var(--gray))]",
                    children: "Mejor calificadas en el último mes"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                loadingGenres && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mb-2",
                    children: "Cargando géneros..."
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 27,
                    columnNumber: 35
                }, this),
                errorGenres && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mb-2",
                    children: errorGenres
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 28,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "w-full border border-gray-300 rounded px-2 py-1 text-2xl mb-12 text-[rgb(var(--gray))]",
                    onChange: handleGenreChange,
                    value: selectedGenre,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Filtrar por género"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        genres?.genres.map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: genre,
                                children: genre
                            }, genre, false, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                loadingFiltered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Cargando películas..."
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 37,
                    columnNumber: 37
                }, this),
                errorFiltered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: errorFiltered
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 38,
                    columnNumber: 35
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "space-y-4 text-sm",
                    children: filteredData && filteredData.results && filteredData.results.length > 0 ? filteredData.results.slice(0, 5).map((movie, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-2 px-6 space-y-4 text-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-[#c07b3e] text-2xl",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                                    lineNumber: 43,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[rgb(var(--gray))] text-2xl",
                                    children: movie.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                                    lineNumber: 44,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, movie.id, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                            lineNumber: 42,
                            columnNumber: 29
                        }, this)) : !loadingFiltered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-gray-500 px-6",
                        children: "No hay películas para este género."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
_s(BestMoviesMonth, "DQcI4rFX7QVhCom57c9YZpA73Bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useGenres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGenres"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useFilterByGenres$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterByGenres"]
    ];
});
_c = BestMoviesMonth;
const __TURBOPACK__default__export__ = BestMoviesMonth;
var _c;
__turbopack_context__.k.register(_c, "BestMoviesMonth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/movies/MovieCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ITEM_WIDTH = 208;
const DISPLAY_FACTOR = 3;
const SPEED_PX_PER_FRAME = 0.5;
const MovieCarousel = ({ title, movies, loading, error })=>{
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const renderMovies = movies ? Array(DISPLAY_FACTOR).fill(movies).flat() : [];
    const autoScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MovieCarousel.useCallback[autoScroll]": ()=>{
            const el = scrollRef.current;
            if (!el || !movies?.length) return;
            const listWidth = ITEM_WIDTH * movies.length;
            if (!hovering.current) {
                el.scrollLeft += SPEED_PX_PER_FRAME;
            }
            if (el.scrollLeft >= listWidth) {
                el.style.scrollBehavior = 'auto';
                el.scrollLeft = el.scrollLeft - listWidth;
                el.style.scrollBehavior = 'smooth';
            }
            rafId.current = requestAnimationFrame(autoScroll);
        }
    }["MovieCarousel.useCallback[autoScroll]"], [
        movies
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MovieCarousel.useEffect": ()=>{
            rafId.current = requestAnimationFrame(autoScroll);
            return ({
                "MovieCarousel.useEffect": ()=>{
                    if (rafId.current) cancelAnimationFrame(rafId.current);
                }
            })["MovieCarousel.useEffect"];
        }
    }["MovieCarousel.useEffect"], [
        autoScroll
    ]);
    /* ---------- UI states ---------- */ if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center text-red-700",
        children: error.message
    }, void 0, false, {
        fileName: "[project]/src/components/movies/MovieCarousel.tsx",
        lineNumber: 58,
        columnNumber: 24
    }, this);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center",
        children: "Cargando…"
    }, void 0, false, {
        fileName: "[project]/src/components/movies/MovieCarousel.tsx",
        lineNumber: 59,
        columnNumber: 24
    }, this);
    if (!movies?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-center text-3xl font-bold text-[rgb(var(--gray))]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: "hide-scrollbar flex gap-6 overflow-x-auto px-10 py-2",
                    onMouseEnter: ()=>hovering.current = true,
                    onMouseLeave: ()=>hovering.current = false,
                    children: renderMovies.map((movie, i)=>{
                        // Si no hay poster_url, usa una imagen por defecto
                        const poster = movie.poster_url && movie.poster_url.trim() !== '' ? movie.poster_url : '/images/default-movie.png';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 rounded-md bg-white text-center shadow-md",
                            style: {
                                width: ITEM_WIDTH
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: poster,
                                    alt: movie.title,
                                    width: ITEM_WIDTH,
                                    height: 256,
                                    className: "h-64 w-full rounded-t-md object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-yellow-600",
                                            children: '★'.repeat(Math.floor(movie.rating)) + '☆'.repeat(5 - Math.floor(movie.rating))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-[#ba7c3a]",
                                            children: movie.rating.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/movie/${movie.title}`,
                                            className: "hover:underline",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-[rgb(var(--gray))] hover:underline ",
                                                children: movie.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `${movie.id}-${i}`, true, {
                            fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/movies/MovieCarousel.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/movies/MovieCarousel.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(MovieCarousel, "CwyS3y7QXBgNgANlFkds9Uxjt50=");
_c = MovieCarousel;
const __TURBOPACK__default__export__ = MovieCarousel;
var _c;
__turbopack_context__.k.register(_c, "MovieCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/adapters/recentMovies.adapter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "recentMovies": (()=>recentMovies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interceptors$2f$axiosInterceptor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
;
;
const recentMovies = {
    async getRecentMovies () {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get('/movies/recent', {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            if (error && typeof error === 'object' && error.isAxiosError) {
                const axiosError = error;
                const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
                throw new Error(message);
            }
            throw new Error('Ocurrió un error inesperado.');
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/hooks/useRecentMovies.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useRecentMovies": (()=>useRecentMovies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$recentMovies$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/adapters/recentMovies.adapter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useRecentMovies() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRecentMovies.useEffect": ()=>{
            const fetchRecentMovies = {
                "useRecentMovies.useEffect.fetchRecentMovies": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$recentMovies$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recentMovies"].getRecentMovies();
                        setData(response.data);
                    } catch (err) {
                        const message = err instanceof Error ? err.message : 'Error desconocido al obtener películas recientes.';
                        setError(message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useRecentMovies.useEffect.fetchRecentMovies"];
            fetchRecentMovies();
        }
    }["useRecentMovies.useEffect"], []);
    return {
        data,
        loading,
        error
    };
}
_s(useRecentMovies, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$components$2f$MessageWelcome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/components/MessageWelcome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$components$2f$FeaturedFilms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/components/FeaturedFilms.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$components$2f$BestMoviesMonth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/components/BestMoviesMonth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$movies$2f$MovieCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/movies/MovieCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useRecentMovies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/hooks/useRecentMovies.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// import { useUsers } from '@/app/(dashboard)/dashboard/hooks/useUser';
const HomePage = ()=>{
    _s();
    // Peliculas recientes
    const { data: recentMovies, loading: loadingRecentMovies, error: errorRecentMovies } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useRecentMovies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentMovies"])();
    const error = errorRecentMovies ? new Error(errorRecentMovies) : null;
    const moviesData = [
        {
            id: 1,
            title: 'Thunderbolts',
            description: 'Descripción de la película',
            genre: 'Acción',
            director: 'Director 1',
            release_date: '2024-01-01',
            rating: 2.0,
            poster_url: '/images/thunderbolts.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 2,
            title: 'Thunderbolts',
            description: 'Descripción de la película',
            genre: 'Acción',
            director: 'Director 2',
            release_date: '2024-01-01',
            rating: 2.0,
            poster_url: '/images/thunderbolts.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 3,
            title: 'Thunderbolts',
            description: 'Descripción de la película',
            genre: 'Acción',
            director: 'Director 3',
            release_date: '2024-01-01',
            rating: 2.0,
            poster_url: '/images/thunderbolts.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 4,
            title: 'Thunderbolts',
            description: 'Descripción de la película',
            genre: 'Acción',
            director: 'Director 4',
            release_date: '2024-01-01',
            rating: 2.0,
            poster_url: '/images/thunderbolts.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        {
            id: 5,
            title: 'Thunderbolts',
            description: 'Descripción de la película',
            genre: 'Acción',
            director: 'Director 5',
            release_date: '2024-01-01',
            rating: 2.0,
            poster_url: '/images/thunderbolts.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-8 px-6 py-8 min-h-screen text-[#3d3d3d]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "basis-2/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$components$2f$MessageWelcome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$components$2f$FeaturedFilms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "basis-1/3 flex justify-center items-start mt-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$components$2f$BestMoviesMonth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$movies$2f$MovieCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Películas Nuevas",
                        movies: recentMovies?.results || [],
                        loading: loadingRecentMovies,
                        error: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$movies$2f$MovieCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Recomendaciones para ti",
                        movies: moviesData,
                        loading: loadingRecentMovies,
                        error: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/HomePage.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(HomePage, "RD+APel/RAotJ3OFY0H9G03qKZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useRecentMovies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentMovies"]
    ];
});
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1ccbd36e._.js.map