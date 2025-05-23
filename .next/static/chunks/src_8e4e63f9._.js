(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_8e4e63f9._.js", {

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
"[project]/src/app/(dashboard)/movie/[title]/adapters/commentsPerMovie.adapter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "commentsPerMovie": (()=>commentsPerMovie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interceptors$2f$axiosInterceptor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
;
;
const commentsPerMovie = {
    async getCommentsPerMovie (id) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/movies/public-comments/${id}`, {
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
"[project]/src/app/(dashboard)/movie/[title]/hooks/useCommentsPerMovie.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCommentsPerMovie": (()=>useCommentsPerMovie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$adapters$2f$commentsPerMovie$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/adapters/commentsPerMovie.adapter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useCommentsPerMovie(movieId) {
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCommentsPerMovie.useEffect": ()=>{
            if (!movieId) return;
            const fetchComments = {
                "useCommentsPerMovie.useEffect.fetchComments": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$adapters$2f$commentsPerMovie$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commentsPerMovie"].getCommentsPerMovie(movieId);
                        setComments(response.data);
                        setError(null);
                    } catch (err) {
                        const axiosError = err;
                        setError(axiosError.message);
                        setComments(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useCommentsPerMovie.useEffect.fetchComments"];
            fetchComments();
        }
    }["useCommentsPerMovie.useEffect"], [
        movieId
    ]);
    return {
        comments,
        loading,
        error
    };
}
_s(useCommentsPerMovie, "lPdkPNpopvwJ0FmUylFQVaFHeo8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MovieComments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$hooks$2f$useCommentsPerMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/hooks/useCommentsPerMovie.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function MovieComments() {
    _s();
    const { title } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { comments, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$hooks$2f$useCommentsPerMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCommentsPerMovie"])(title);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-[60vh] w-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-[rgba(var(--gray))] px-6 py-3",
                        children: "Reseñas"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 font-semibold",
                                children: "Ordenar por:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white text-gray-700 px-3 py-1 font-semibold focus:outline-none",
                                children: "Mas recientes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center min-h-[20vh] text-lg text-gray-500",
                children: "Cargando comentarios..."
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                lineNumber: 22,
                columnNumber: 17
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center min-h-[20vh] text-lg text-red-500",
                children: "Error al cargar comentarios"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, this),
            !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: comments && comments.length > 0 ? comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 bg-white px-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 flex flex-col items-center pt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                                    className: "text-5xl text-black/60"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                    lineNumber: 36,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                lineNumber: 35,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[#a06a2b] text-lg",
                                                children: comment.user?.name || 'Usuario'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                                lineNumber: 41,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                                                        className: i < Math.round(comment.rating) ? 'text-[#a06a2b] text-xl' : 'text-gray-300 text-xl'
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                                lineNumber: 42,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[#a06a2b] ml-2",
                                                children: comment.rating?.toFixed(1) || '0.0'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                                lineNumber: 47,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                        lineNumber: 40,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-700 mb-2",
                                        children: comment.rating_text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                        lineNumber: 49,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-gray-700 mb-2",
                                        children: comment.sentiment_text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                        lineNumber: 50,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mb-2",
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                        lineNumber: 51,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-700",
                                        children: new Date(comment.created_at).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                        lineNumber: 52,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                                lineNumber: 39,
                                columnNumber: 33
                            }, this)
                        ]
                    }, comment.id, true, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                        lineNumber: 33,
                        columnNumber: 29
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center min-h-[20vh] text-lg text-gray-500",
                    children: "no hay comentarios"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
                    lineNumber: 57,
                    columnNumber: 25
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(MovieComments, "RbEudBnT227sl//8psjGnNdgTSE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$hooks$2f$useCommentsPerMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCommentsPerMovie"]
    ];
});
_c = MovieComments;
var _c;
__turbopack_context__.k.register(_c, "MovieComments");
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
"[project]/src/app/(dashboard)/movie/[title]/adapters/createComment.adapter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCommentAdapter": (()=>createCommentAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interceptors$2f$axiosInterceptor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interceptors/axiosInterceptor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/axiosInstance.ts [app-client] (ecmascript)");
;
;
const createCommentAdapter = {
    async createComment (payload) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/comments/', payload, {
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
"[project]/src/app/(dashboard)/movie/[title]/hooks/useCreateComment.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCreateComment": (()=>useCreateComment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$adapters$2f$createComment$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/adapters/createComment.adapter.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useCreateComment() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const createComment = async (payload)=>{
        setLoading(true);
        setError(null);
        setResponse(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$adapters$2f$createComment$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommentAdapter"].createComment(payload);
            setResponse(res.data);
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    return {
        createComment,
        loading,
        error,
        response
    };
}
_s(useCreateComment, "SaQtc5ZMPEgUjX1ySrLshr/qizs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateComment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$hooks$2f$useCreateComment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/hooks/useCreateComment.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CreateComment({ isOpen, onClose, userName = 'Yarlinson Barranco', movieName }) {
    _s();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { createComment, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$hooks$2f$useCreateComment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateComment"])();
    const [, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const handleSend = async ()=>{
        await createComment({
            movie_name: movieName || '',
            content: comment
        });
        setSuccess(true);
        setComment('');
        setRating(4);
        setTimeout(()=>{
            setSuccess(false);
            onClose();
        }, 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm bg-opacity-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#f8f6f4] rounded-2xl p-8 w-[400px] shadow-lg relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-[rgba(var(--gray))] mb-4",
                    children: "Reseñas"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                            className: "text-4xl text-black/60"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[#a06a2b] text-lg",
                            children: userName
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                        Array.from({
                            length: 5
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                                className: (hover !== null ? i < hover : i < rating) ? 'text-[#a06a2b] text-2xl cursor-pointer' : 'text-gray-300 text-2xl cursor-pointer',
                                onMouseEnter: ()=>setHover(i + 1),
                                onMouseLeave: ()=>setHover(null),
                                onClick: ()=>setRating(i + 1)
                            }, i, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 bg-[#f8f6f4] border border-[#a06a2b] text-[#a06a2b] font-bold rounded-full px-4 py-1 text-md",
                            children: rating.toFixed(1)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "w-full h-24 rounded-xl border-2 border-[#a06a2b] p-3 mb-4 text-[rgba(var(--gray))] font-semibold focus:outline-none resize-none bg-[#f8f6f4]",
                    placeholder: "Escribe tu comentario ...",
                    value: comment,
                    onChange: (e)=>setComment(e.target.value),
                    disabled: loading
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full bg-[#a06a2b] text-white font-bold py-2 rounded-xl text-lg hover:bg-[#8a531a] transition disabled:opacity-60",
                    onClick: handleSend,
                    disabled: loading || !comment.trim(),
                    children: loading ? 'Enviando...' : 'Enviar'
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(CreateComment, "ZIHWdwLILQU4IQDIiOknwVVfnm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$hooks$2f$useCreateComment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateComment"]
    ];
});
_c = CreateComment;
var _c;
__turbopack_context__.k.register(_c, "CreateComment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MovieDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$filterByGenres$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/adapters/filterByGenres.adapter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$components$2f$createComment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/components/createComment.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function MovieDetails() {
    _s();
    const { title } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [movie, setMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCommentModal, setShowCommentModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MovieDetails.useEffect": ()=>{
            const fetchMovie = {
                "MovieDetails.useEffect.fetchMovie": async ()=>{
                    setLoading(true);
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$adapters$2f$filterByGenres$2e$adapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterByGenres"].getMoviesFilterByGenres({
                            title: decodeURIComponent(title)
                        });
                        setMovie(response.data.results?.[0] || null);
                    } catch  {
                        setMovie(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["MovieDetails.useEffect.fetchMovie"];
            fetchMovie();
        }
    }["MovieDetails.useEffect"], [
        title
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[60vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Cargando..."
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                lineNumber: 32,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
            lineNumber: 32,
            columnNumber: 16
        }, this);
    }
    if (!movie) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[60vh] ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold mb-4 text-[rgb(var(--gray))]",
                    children: "Película no encontrada"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-[rgb(var(--gray))] text-center",
                    children: [
                        "No se encontró información para la película ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: decodeURIComponent(title)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                            lineNumber: 39,
                            columnNumber: 116
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-[rgb(var(--gray))] text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "hover:underline",
                        children: "Volver a la página principal"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
            lineNumber: 37,
            columnNumber: 11
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row gap-8 px-8 py-20 mx-auto bg-[rgba(var(--latte))]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: movie.poster_url || '/images/default-movie.png',
                alt: movie.title || '',
                width: 500,
                height: 650,
                className: "rounded-xl object-cover shadow-lg"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col gap-2  px-[100px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl font-bold text-[rgb(var(--gray))] mb-6 text-center",
                        children: movie.title || ''
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-2 justify-center",
                        children: movie.genre?.split(',').map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-[#c07b3e]  text-white px-3 py-1 rounded-full text-3xl font-semibold",
                                children: g.trim()
                            }, g, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-10 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-600 text-6xl",
                                children: Array.from({
                                    length: 5
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: i < Math.round(movie.rating || 0) ? '★' : '☆'
                                    }, i, false, {
                                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-10 text-4xl font-bold text-[#ba7c3a]",
                                children: [
                                    movie.rating?.toFixed(1) || '',
                                    "/5.0"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#ba7c3a] text-4xl mr-6",
                                children: "Director:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[rgb(var(--gray))] text-4xl",
                                children: movie.director || ''
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 72,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#ba7c3a] text-4xl mr-6",
                                children: "Año:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[rgb(var(--gray))] text-4xl",
                                children: movie.release_date ? new Date(movie.release_date).getFullYear() : ''
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                                lineNumber: 75,
                                columnNumber: 82
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-4xl text-[rgb(var(--gray))]",
                        children: movie.description || ''
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mt-6 bg-white text-[rgb(var(--gray))] font-bold px-6 py-2 rounded-lg shadow hover:bg-[#c07b3e] hover:text-white transition text-3xl",
                        onClick: ()=>setShowCommentModal(true),
                        children: "Añadir Reseña"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$components$2f$createComment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCommentModal,
                onClose: ()=>setShowCommentModal(false),
                movieName: movie.title
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(MovieDetails, "O/hyEhIhnUAqMGFAtDMC8pKsam4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = MovieDetails;
var _c;
__turbopack_context__.k.register(_c, "MovieDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/movie/[title]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MovieDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$components$2f$movieComments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/components/movieComments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$components$2f$movieDestails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/movie/[title]/components/movieDestails.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function MovieDetailPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$components$2f$movieDestails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$movie$2f5b$title$5d2f$components$2f$movieComments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/movie/[title]/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = MovieDetailPage;
var _c;
__turbopack_context__.k.register(_c, "MovieDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_8e4e63f9._.js.map