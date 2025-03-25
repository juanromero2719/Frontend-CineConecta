(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_69b51270._.js", {

"[project]/hooks/useFetchAndLoad.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFetchAndLoad = ()=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let controller;
    const callEndpoint = async (axiosCall)=>{
        if (axiosCall.controller) controller = axiosCall.controller;
        setLoading(true);
        let result = {};
        try {
            result = await axiosCall.call;
        } catch (err) {
            setLoading(false);
            throw err;
        }
        setLoading(false);
        return result;
    };
    const cancelEndpoint = ()=>{
        setLoading(false);
        controller && controller.abort();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetchAndLoad.useEffect": ()=>{
            return ({
                "useFetchAndLoad.useEffect": ()=>{
                    cancelEndpoint();
                }
            })["useFetchAndLoad.useEffect"];
        }
    }["useFetchAndLoad.useEffect"], []);
    return {
        loading,
        callEndpoint
    };
};
_s(useFetchAndLoad, "bp7W7BLZaxNmS0ceaCBH82+KoGQ=");
const __TURBOPACK__default__export__ = useFetchAndLoad;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/hooks/useUser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLoginUser": (()=>useLoginUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFetchAndLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFetchAndLoad.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useLoginUser = ()=>{
    _s();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { loading, callEndpoint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFetchAndLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const getUsers = async ()=>{
        const result = await callEndpoint({
            call: loginAdapter.loginUser()
        });
        setUserData(result.data || null);
        return result.data;
    };
    return {
        getUsers,
        loading,
        userData
    };
};
_s(useLoginUser, "DJIhPiyI9h9l9ndTr7aCrwiK7RI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFetchAndLoad$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/dashboard/components/dashboardUsers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/hooks/useUser.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const DashboardUsers = ()=>{
    _s();
    const { getUsers, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-users",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Dashboard Users"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/dashboardUsers.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "User data will be displayed here"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/components/dashboardUsers.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/components/dashboardUsers.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/dashboard/components/dashboardUsers.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
_s(DashboardUsers, "IEl0sk75zdi/n06tgpWrOX4JiC0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$dashboard$2f$hooks$2f$useUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"]
    ];
});
_c = DashboardUsers;
const __TURBOPACK__default__export__ = DashboardUsers;
var _c;
__turbopack_context__.k.register(_c, "DashboardUsers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_69b51270._.js.map