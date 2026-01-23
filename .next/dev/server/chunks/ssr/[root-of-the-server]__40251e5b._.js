module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/knowly/locales/uz.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"header":{"nav":{"curriculums":"O'quv Dasturlari","mission":"Missiyamiz","teachers":"Ustozlar"},"cta":"Boshlash","language":{"uz":"O'zb","en":"Eng"}},"hero":{"headline":{"main":"Cambridge Ta'limi.","highlight":"Ona Tilida."},"subheadline":"Dunyo Bilimlari — Ona Tilida","search":{"placeholder":"Mavzuni qidiring...","examples":["Qidirish: IGCSE Fizika...","Qidirish: Algebra...","Qidirish: Biologiya...","Qidirish: Kimyo..."]},"cta":"Hoziroq Boshlash"},"bentoGrid":{"title":"O'quv Dasturlarini Tanlang","cards":{"igcse":{"title":"Cambridge IGCSE","description":"14-16 yosh o'quvchilar uchun xalqaro tan olingan dastur","badge":"Eng Mashhur","subjects":"40+ fan"},"aLevels":{"title":"Cambridge A-Levels","description":"Universitetga tayyorgarlik ko'rish uchun eng yaxshi tanlov","badge":"Universitet","subjects":"25+ fan"},"edexcel":{"title":"Pearson Edexcel","description":"Britaniya milliy o'quv dasturi asosida","subjects":"30+ fan"},"lowerSecondary":{"title":"Lower Secondary","description":"11-14 yosh o'quvchilar uchun poydevor","subjects":"Asosiy fanlar"}}},"magicTranslation":{"title":"Biz Mantiqni Tarjima Qilamiz","subtitle":"Faqat So'zlarni Emas","english":{"title":"Murakkab Inglizcha","example":"The mitochondria is the powerhouse of the cell, responsible for producing ATP through cellular respiration."},"uzbek":{"title":"Tushunarli O'zbekcha","example":"Mitoxondriya — hujayraning energiya zavodi. U nafas olish jarayonida ATP (energiya) ishlab chiqaradi."},"bulbText":"Bilim Nuri"},"footer":{"tagline":"Cambridge va Pearson ta'limini O'zbekiston yoshlariga yetkazamiz","copyright":"© 2026 KNOWLY. Barcha huquqlar himoyalangan."}});}),
"[project]/knowly/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"header":{"nav":{"curriculums":"Curriculums","mission":"Our Mission","teachers":"Teachers"},"cta":"Get Started","language":{"uz":"O'zb","en":"Eng"}},"hero":{"headline":{"main":"Cambridge Education.","highlight":"Native Tongue."},"subheadline":"World-Class Knowledge — In Your Language","search":{"placeholder":"Search for a topic...","examples":["Search: IGCSE Physics...","Search: Algebra...","Search: Biology...","Search: Chemistry..."]},"cta":"Start Learning Now"},"bentoGrid":{"title":"Choose Your Curriculum","cards":{"igcse":{"title":"Cambridge IGCSE","description":"Internationally recognized program for ages 14-16","badge":"Most Popular","subjects":"40+ subjects"},"aLevels":{"title":"Cambridge A-Levels","description":"The gold standard for university preparation","badge":"University","subjects":"25+ subjects"},"edexcel":{"title":"Pearson Edexcel","description":"Based on the UK national curriculum","subjects":"30+ subjects"},"lowerSecondary":{"title":"Lower Secondary","description":"Foundation for ages 11-14","subjects":"Core subjects"}}},"magicTranslation":{"title":"We Translate Logic","subtitle":"Not Just Words","english":{"title":"Complex English","example":"The mitochondria is the powerhouse of the cell, responsible for producing ATP through cellular respiration."},"uzbek":{"title":"Clear Uzbek","example":"Mitochondria is the cell's energy factory. It produces ATP (energy) through the breathing process."},"bulbText":"Knowledge Light"},"footer":{"tagline":"Bringing Cambridge & Pearson education to Uzbekistan's youth","copyright":"© 2026 KNOWLY. All rights reserved."}});}),
"[project]/knowly/lib/i18n.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$locales$2f$uz$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/knowly/locales/uz.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/knowly/locales/en.json (json)");
"use client";
;
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
    uz: __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$locales$2f$uz$2e$json__$28$json$29$__["default"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$locales$2f$en$2e$json__$28$json$29$__["default"]
};
function LanguageProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('uz');
    // Load language from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLanguage = localStorage.getItem('knowly-language');
        if (savedLanguage && (savedLanguage === 'uz' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage);
        }
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('knowly-language', lang);
    };
    const value = {
        language,
        setLanguage,
        t: translations[language]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/knowly/lib/i18n.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
}),
"[project]/knowly/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/knowly/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/knowly/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40251e5b._.js.map