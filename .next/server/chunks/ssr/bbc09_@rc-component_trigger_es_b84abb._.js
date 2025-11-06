module.exports = {

"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/Arrow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Arrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function Arrow(props) {
    var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
    var _ref = arrow || {}, className = _ref.className, content = _ref.content;
    var _arrowPos$x = arrowPos.x, x = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
    var arrowRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    // Skip if no align
    if (!align || !align.points) {
        return null;
    }
    var alignStyle = {
        position: 'absolute'
    };
    // Skip if no need to align
    if (align.autoArrow !== false) {
        var popupPoints = align.points[0];
        var targetPoints = align.points[1];
        var popupTB = popupPoints[0];
        var popupLR = popupPoints[1];
        var targetTB = targetPoints[0];
        var targetLR = targetPoints[1];
        // Top & Bottom
        if (popupTB === targetTB || ![
            't',
            'b'
        ].includes(popupTB)) {
            alignStyle.top = y;
        } else if (popupTB === 't') {
            alignStyle.top = 0;
        } else {
            alignStyle.bottom = 0;
        }
        // Left & Right
        if (popupLR === targetLR || ![
            'l',
            'r'
        ].includes(popupLR)) {
            alignStyle.left = x;
        } else if (popupLR === 'l') {
            alignStyle.left = 0;
        } else {
            alignStyle.right = 0;
        }
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: arrowRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-arrow"), className),
        style: alignStyle
    }, content);
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/Mask.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Mask)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-motion/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-motion/es/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
function Mask(props) {
    var prefixCls = props.prefixCls, open = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
    if (!mask) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, motion, {
        motionAppear: true,
        visible: open,
        removeOnLeave: true
    }), function(_ref) {
        var className = _ref.className;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
            style: {
                zIndex: zIndex
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(prefixCls, "-mask"), className)
        });
    });
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/PopupContent.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var PopupContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.memo(function(_ref) {
    var children = _ref.children;
    return children;
}, function(_, next) {
    return next.cache;
});
if ("TURBOPACK compile-time truthy", 1) {
    PopupContent.displayName = 'PopupContent';
}
const __TURBOPACK__default__export__ = PopupContent;
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-motion/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$resize$2d$observer$40$1$2e$4$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/ref.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Arrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/Arrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Mask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/Mask.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$PopupContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/PopupContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$resize$2d$observer$40$1$2e$4$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-motion@2.9.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-motion/es/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
var Popup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, onPointerDownCapture = props.onPointerDownCapture, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
    var childNode = typeof popup === 'function' ? popup() : popup;
    // We can not remove holder only when motion finished.
    var isNodeVisible = open || keepDom;
    // ======================= Container ========================
    var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
    // Delay to show since `getPopupContainer` need target element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (!show && getPopupContainerNeedParams && target) {
            setShow(true);
        }
    }, [
        show,
        getPopupContainerNeedParams,
        target
    ]);
    // ========================= Render =========================
    if (!show) {
        return null;
    }
    // >>>>> Offset
    var AUTO = 'auto';
    var offsetStyle = {
        left: '-1000vw',
        top: '-1000vh',
        right: AUTO,
        bottom: AUTO
    };
    // Set align style
    if (ready || !open) {
        var _experimental;
        var points = align.points;
        var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
        var alignRight = dynamicInset && points[0][1] === 'r';
        var alignBottom = dynamicInset && points[0][0] === 'b';
        if (alignRight) {
            offsetStyle.right = offsetR;
            offsetStyle.left = AUTO;
        } else {
            offsetStyle.left = offsetX;
            offsetStyle.right = AUTO;
        }
        if (alignBottom) {
            offsetStyle.bottom = offsetB;
            offsetStyle.top = AUTO;
        } else {
            offsetStyle.top = offsetY;
            offsetStyle.bottom = AUTO;
        }
    }
    // >>>>> Misc
    var miscStyle = {};
    if (stretch) {
        if (stretch.includes('height') && targetHeight) {
            miscStyle.height = targetHeight;
        } else if (stretch.includes('minHeight') && targetHeight) {
            miscStyle.minHeight = targetHeight;
        }
        if (stretch.includes('width') && targetWidth) {
            miscStyle.width = targetWidth;
        } else if (stretch.includes('minWidth') && targetWidth) {
            miscStyle.minWidth = targetWidth;
        }
    }
    if (!open) {
        miscStyle.pointerEvents = 'none';
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(Portal, {
        open: forceRender || isNodeVisible,
        getContainer: getPopupContainer && function() {
            return getPopupContainer(target);
        },
        autoDestroy: autoDestroy
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Mask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        open: open,
        zIndex: zIndex,
        mask: mask,
        motion: maskMotion
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$resize$2d$observer$40$1$2e$4$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onAlign,
        disabled: !open
    }, function(resizeObserverRef) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$motion$40$2$2e$9$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$motion$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            motionAppear: true,
            motionEnter: true,
            motionLeave: true,
            removeOnLeave: false,
            forceRender: forceRender,
            leavedClassName: "".concat(prefixCls, "-hidden")
        }, motion, {
            onAppearPrepare: onPrepare,
            onEnterPrepare: onPrepare,
            visible: open,
            onVisibleChanged: function onVisibleChanged(nextVisible) {
                var _motion$onVisibleChan;
                motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
                _onVisibleChanged(nextVisible);
            }
        }), function(_ref, motionRef) {
            var motionClassName = _ref.className, motionStyle = _ref.style;
            var cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, motionClassName, className);
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRef"])(resizeObserverRef, ref, motionRef),
                className: cls,
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    '--arrow-x': "".concat(arrowPos.x || 0, "px"),
                    '--arrow-y': "".concat(arrowPos.y || 0, "px")
                }, offsetStyle), miscStyle), motionStyle), {}, {
                    boxSizing: 'border-box',
                    zIndex: zIndex
                }, style),
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onPointerEnter: onPointerEnter,
                onClick: onClick,
                onPointerDownCapture: onPointerDownCapture
            }, arrow && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$Arrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                prefixCls: prefixCls,
                arrow: arrow,
                arrowPos: arrowPos,
                align: align
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$PopupContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                cache: !open && !fresh
            }, childNode));
        });
    }));
});
if ("TURBOPACK compile-time truthy", 1) {
    Popup.displayName = 'Popup';
}
const __TURBOPACK__default__export__ = Popup;
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/TriggerWrapper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/ref.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var TriggerWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
    var canUseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportRef"])(children);
    // When use `getTriggerDOMNode`, we should do additional work to get the real dom
    var setRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fillRef"])(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
    }, [
        getTriggerDOMNode
    ]);
    var mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposeRef"])(setRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$ref$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeRef"])(children));
    return canUseRef ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(children, {
        ref: mergedRef
    }) : children;
});
if ("TURBOPACK compile-time truthy", 1) {
    TriggerWrapper.displayName = 'TriggerWrapper';
}
const __TURBOPACK__default__export__ = TriggerWrapper;
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/context.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var TriggerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
const __TURBOPACK__default__export__ = TriggerContext;
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useAction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function toArray(val) {
    return val ? Array.isArray(val) ? val : [
        val
    ] : [];
}
function useAction(mobile, action, showAction, hideAction) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
        var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
        var showActionSet = new Set(mergedShowAction);
        var hideActionSet = new Set(mergedHideAction);
        if (mobile) {
            if (showActionSet.has('hover')) {
                showActionSet.delete('hover');
                showActionSet.add('click');
            }
            if (hideActionSet.has('hover')) {
                hideActionSet.delete('hover');
                hideActionSet.add('click');
            }
        }
        return [
            showActionSet,
            hideActionSet
        ];
    }, [
        mobile,
        action,
        showAction,
        hideAction
    ]);
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/util.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "collectScroller": (()=>collectScroller),
    "getAlignPopupClassName": (()=>getAlignPopupClassName),
    "getMotion": (()=>getMotion),
    "getVisibleArea": (()=>getVisibleArea),
    "getWin": (()=>getWin),
    "toNum": (()=>toNum)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
;
function isPointsEq() {
    var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var isAlignPoint = arguments.length > 2 ? arguments[2] : undefined;
    if (isAlignPoint) {
        return a1[0] === a2[0];
    }
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements = Object.keys(builtinPlacements);
    for(var i = 0; i < placements.length; i += 1){
        var _builtinPlacements$pl;
        var placement = placements[i];
        if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
            return "".concat(prefixCls, "-placement-").concat(placement);
        }
    }
    return '';
}
function getMotion(prefixCls, motion, animation, transitionName) {
    if (motion) {
        return motion;
    }
    if (animation) {
        return {
            motionName: "".concat(prefixCls, "-").concat(animation)
        };
    }
    if (transitionName) {
        return {
            motionName: transitionName
        };
    }
    return null;
}
function getWin(ele) {
    return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
    var scrollerList = [];
    var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
    var scrollStyle = [
        'hidden',
        'scroll',
        'clip',
        'auto'
    ];
    while(current){
        var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
        if ([
            overflowX,
            overflowY,
            overflow
        ].some(function(o) {
            return scrollStyle.includes(o);
        })) {
            scrollerList.push(current);
        }
        current = current.parentElement;
    }
    return scrollerList;
}
function toNum(num) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
    return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
    var visibleArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, initArea);
    (scrollerList || []).forEach(function(ele) {
        if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
            return;
        }
        // Skip if static position which will not affect visible area
        var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
        var eleRect = ele.getBoundingClientRect();
        var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
        var borderTopNum = getPxValue(borderTopWidth);
        var borderBottomNum = getPxValue(borderBottomWidth);
        var borderLeftNum = getPxValue(borderLeftWidth);
        var borderRightNum = getPxValue(borderRightWidth);
        var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
        var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);
        // Original visible area
        var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
        var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
        // Cut border size
        var scaledBorderTopWidth = borderTopNum * scaleY;
        var scaledBorderBottomWidth = borderBottomNum * scaleY;
        var scaledBorderLeftWidth = borderLeftNum * scaleX;
        var scaledBorderRightWidth = borderRightNum * scaleX;
        // Clip margin
        var clipMarginWidth = 0;
        var clipMarginHeight = 0;
        if (overflow === 'clip') {
            var clipNum = getPxValue(overflowClipMargin);
            clipMarginWidth = clipNum * scaleX;
            clipMarginHeight = clipNum * scaleY;
        }
        // Region
        var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
        var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
        var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
        var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
        visibleArea.left = Math.max(visibleArea.left, eleLeft);
        visibleArea.top = Math.max(visibleArea.top, eleTop);
        visibleArea.right = Math.min(visibleArea.right, eleRight);
        visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useAlign.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useAlign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/Dom/findDOMNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/Dom/isVisible.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function getUnitOffset(size) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var offsetStr = "".concat(offset);
    var cells = offsetStr.match(/^(.*)\%$/);
    if (cells) {
        return size * (parseFloat(cells[1]) / 100);
    }
    return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
    var _ref = offset || [], _ref2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
    return [
        getUnitOffset(rect.width, offsetX),
        getUnitOffset(rect.height, offsetY)
    ];
}
function splitPoints() {
    var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return [
        points[0],
        points[1]
    ];
}
function getAlignPoint(rect, points) {
    var topBottom = points[0];
    var leftRight = points[1];
    var x;
    var y;
    // Top & Bottom
    if (topBottom === 't') {
        y = rect.y;
    } else if (topBottom === 'b') {
        y = rect.y + rect.height;
    } else {
        y = rect.y + rect.height / 2;
    }
    // Left & Right
    if (leftRight === 'l') {
        x = rect.x;
    } else if (leftRight === 'r') {
        x = rect.x + rect.width;
    } else {
        x = rect.x + rect.width / 2;
    }
    return {
        x: x,
        y: y
    };
}
function reversePoints(points, index) {
    var reverseMap = {
        t: 'b',
        b: 't',
        l: 'r',
        r: 'l'
    };
    return points.map(function(point, i) {
        if (i === index) {
            return reverseMap[point] || 'c';
        }
        return point;
    }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState({
        ready: false,
        offsetX: 0,
        offsetY: 0,
        offsetR: 0,
        offsetB: 0,
        arrowX: 0,
        arrowY: 0,
        scaleX: 1,
        scaleY: 1,
        align: builtinPlacements[placement] || {}
    }), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
    var alignCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(0);
    var scrollerList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (!popupEle) {
            return [];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectScroller"])(popupEle);
    }, [
        popupEle
    ]);
    // ========================= Flip ==========================
    // We will memo flip info.
    // If size change to make flip, it will memo the flip info and use it in next align.
    var prevFlipRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef({});
    var resetFlipCache = function resetFlipCache() {
        prevFlipRef.current = {};
    };
    if (!open) {
        resetFlipCache();
    }
    // ========================= Align =========================
    var onAlign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (popupEle && target && open) {
            var _popupElement$parentE, _popupRect$x, _popupRect$y, _popupElement$parentE2;
            var popupElement = popupEle;
            var doc = popupElement.ownerDocument;
            var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWin"])(popupElement);
            var _win$getComputedStyle = win.getComputedStyle(popupElement), popupPosition = _win$getComputedStyle.position;
            var originLeft = popupElement.style.left;
            var originTop = popupElement.style.top;
            var originRight = popupElement.style.right;
            var originBottom = popupElement.style.bottom;
            var originOverflow = popupElement.style.overflow;
            // Placement
            var placementInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, builtinPlacements[placement]), popupAlign);
            // placeholder element
            var placeholderElement = doc.createElement('div');
            (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
            placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
            placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
            placeholderElement.style.position = popupPosition;
            placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
            placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
            // Reset first
            popupElement.style.left = '0';
            popupElement.style.top = '0';
            popupElement.style.right = 'auto';
            popupElement.style.bottom = 'auto';
            popupElement.style.overflow = 'hidden';
            // Calculate align style, we should consider `transform` case
            var targetRect;
            if (Array.isArray(target)) {
                targetRect = {
                    x: target[0],
                    y: target[1],
                    width: 0,
                    height: 0
                };
            } else {
                var _rect$x, _rect$y;
                var rect = target.getBoundingClientRect();
                rect.x = (_rect$x = rect.x) !== null && _rect$x !== void 0 ? _rect$x : rect.left;
                rect.y = (_rect$y = rect.y) !== null && _rect$y !== void 0 ? _rect$y : rect.top;
                targetRect = {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height
                };
            }
            var popupRect = popupElement.getBoundingClientRect();
            var _win$getComputedStyle2 = win.getComputedStyle(popupElement), height = _win$getComputedStyle2.height, width = _win$getComputedStyle2.width;
            popupRect.x = (_popupRect$x = popupRect.x) !== null && _popupRect$x !== void 0 ? _popupRect$x : popupRect.left;
            popupRect.y = (_popupRect$y = popupRect.y) !== null && _popupRect$y !== void 0 ? _popupRect$y : popupRect.top;
            var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
            var popupHeight = popupRect.height;
            var popupWidth = popupRect.width;
            var targetHeight = targetRect.height;
            var targetWidth = targetRect.width;
            // Get bounding of visible area
            var visibleRegion = {
                left: 0,
                top: 0,
                right: clientWidth,
                bottom: clientHeight
            };
            var scrollRegion = {
                left: -scrollLeft,
                top: -scrollTop,
                right: scrollWidth - scrollLeft,
                bottom: scrollHeight - scrollTop
            };
            var htmlRegion = placementInfo.htmlRegion;
            var VISIBLE = 'visible';
            var VISIBLE_FIRST = 'visibleFirst';
            if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
                htmlRegion = VISIBLE;
            }
            var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
            var scrollRegionArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVisibleArea"])(scrollRegion, scrollerList);
            var visibleRegionArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVisibleArea"])(visibleRegion, scrollerList);
            var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
            // When set to `visibleFirst`,
            // the check `adjust` logic will use `visibleRegion` for check first.
            var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
            // Record right & bottom align data
            popupElement.style.left = 'auto';
            popupElement.style.top = 'auto';
            popupElement.style.right = '0';
            popupElement.style.bottom = '0';
            var popupMirrorRect = popupElement.getBoundingClientRect();
            // Reset back
            popupElement.style.left = originLeft;
            popupElement.style.top = originTop;
            popupElement.style.right = originRight;
            popupElement.style.bottom = originBottom;
            popupElement.style.overflow = originOverflow;
            (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);
            // Calculate scale
            var _scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNum"])(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
            var _scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNum"])(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);
            // No need to align since it's not visible in view
            if (_scaleX === 0 || _scaleY === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOM"])(target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(target)) {
                return;
            }
            // Offset
            var offset = placementInfo.offset, targetOffset = placementInfo.targetOffset;
            var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
            var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset), _getNumberOffset4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
            targetRect.x -= targetOffsetX;
            targetRect.y -= targetOffsetY;
            // Points
            var _ref3 = placementInfo.points || [], _ref4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
            var targetPoints = splitPoints(targetPoint);
            var popupPoints = splitPoints(popupPoint);
            var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
            var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
            // Real align info may not same as origin one
            var nextAlignInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, placementInfo);
            // Next Offset
            var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
            var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
            // ============== Intersection ===============
            // Get area by position. Used for check if flip area is better
            function getIntersectionVisibleArea(offsetX, offsetY) {
                var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : visibleArea;
                var l = popupRect.x + offsetX;
                var t = popupRect.y + offsetY;
                var r = l + popupWidth;
                var b = t + popupHeight;
                var visibleL = Math.max(l, area.left);
                var visibleT = Math.max(t, area.top);
                var visibleR = Math.min(r, area.right);
                var visibleB = Math.min(b, area.bottom);
                return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
            }
            var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
            // As `visibleFirst`, we prepare this for check
            var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
            // ========================== Overflow ===========================
            var targetAlignPointTL = getAlignPoint(targetRect, [
                't',
                'l'
            ]);
            var popupAlignPointTL = getAlignPoint(popupRect, [
                't',
                'l'
            ]);
            var targetAlignPointBR = getAlignPoint(targetRect, [
                'b',
                'r'
            ]);
            var popupAlignPointBR = getAlignPoint(popupRect, [
                'b',
                'r'
            ]);
            var overflow = placementInfo.overflow || {};
            var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
            var supportAdjust = function supportAdjust(val) {
                if (typeof val === 'boolean') {
                    return val;
                }
                return val >= 0;
            };
            // Prepare position
            var nextPopupY;
            var nextPopupBottom;
            var nextPopupX;
            var nextPopupRight;
            function syncNextPopupPosition() {
                nextPopupY = popupRect.y + nextOffsetY;
                nextPopupBottom = nextPopupY + popupHeight;
                nextPopupX = popupRect.x + nextOffsetX;
                nextPopupRight = nextPopupX + popupWidth;
            }
            syncNextPopupPosition();
            // >>>>>>>>>> Top & Bottom
            var needAdjustY = supportAdjust(adjustY);
            var sameTB = popupPoints[0] === targetPoints[0];
            // Bottom to Top
            if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
                var tmpNextOffsetY = nextOffsetY;
                if (sameTB) {
                    tmpNextOffsetY -= popupHeight - targetHeight;
                } else {
                    tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
                }
                var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
                var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
                if (// Of course use larger one
                newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.bt = true;
                    nextOffsetY = tmpNextOffsetY;
                    popupOffsetY = -popupOffsetY;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 0),
                        reversePoints(targetPoints, 0)
                    ];
                } else {
                    prevFlipRef.current.bt = false;
                }
            }
            // Top to Bottom
            if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
                var _tmpNextOffsetY = nextOffsetY;
                if (sameTB) {
                    _tmpNextOffsetY += popupHeight - targetHeight;
                } else {
                    _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
                }
                var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
                var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
                if (// Of course use larger one
                _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                _newVisibleRecommendArea >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.tb = true;
                    nextOffsetY = _tmpNextOffsetY;
                    popupOffsetY = -popupOffsetY;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 0),
                        reversePoints(targetPoints, 0)
                    ];
                } else {
                    prevFlipRef.current.tb = false;
                }
            }
            // >>>>>>>>>> Left & Right
            var needAdjustX = supportAdjust(adjustX);
            // >>>>> Flip
            var sameLR = popupPoints[1] === targetPoints[1];
            // Right to Left
            if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
                var tmpNextOffsetX = nextOffsetX;
                if (sameLR) {
                    tmpNextOffsetX -= popupWidth - targetWidth;
                } else {
                    tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
                }
                var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
                var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
                if (// Of course use larger one
                _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                _newVisibleRecommendArea2 >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.rl = true;
                    nextOffsetX = tmpNextOffsetX;
                    popupOffsetX = -popupOffsetX;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 1),
                        reversePoints(targetPoints, 1)
                    ];
                } else {
                    prevFlipRef.current.rl = false;
                }
            }
            // Left to Right
            if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
                var _tmpNextOffsetX = nextOffsetX;
                if (sameLR) {
                    _tmpNextOffsetX += popupWidth - targetWidth;
                } else {
                    _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
                }
                var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
                var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
                if (// Of course use larger one
                _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
                _newVisibleRecommendArea3 >= originIntersectionRecommendArea)) {
                    prevFlipRef.current.lr = true;
                    nextOffsetX = _tmpNextOffsetX;
                    popupOffsetX = -popupOffsetX;
                    nextAlignInfo.points = [
                        reversePoints(popupPoints, 1),
                        reversePoints(targetPoints, 1)
                    ];
                } else {
                    prevFlipRef.current.lr = false;
                }
            }
            // ============================ Shift ============================
            syncNextPopupPosition();
            var numShiftX = shiftX === true ? 0 : shiftX;
            if (typeof numShiftX === 'number') {
                // Left
                if (nextPopupX < visibleRegionArea.left) {
                    nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
                    if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
                        nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
                    }
                }
                // Right
                if (nextPopupRight > visibleRegionArea.right) {
                    nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
                    if (targetRect.x > visibleRegionArea.right - numShiftX) {
                        nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
                    }
                }
            }
            var numShiftY = shiftY === true ? 0 : shiftY;
            if (typeof numShiftY === 'number') {
                // Top
                if (nextPopupY < visibleRegionArea.top) {
                    nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
                    // When target if far away from visible area
                    // Stop shift
                    if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
                        nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
                    }
                }
                // Bottom
                if (nextPopupBottom > visibleRegionArea.bottom) {
                    nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
                    if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
                        nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
                    }
                }
            }
            // ============================ Arrow ============================
            // Arrow center align
            var popupLeft = popupRect.x + nextOffsetX;
            var popupRight = popupLeft + popupWidth;
            var popupTop = popupRect.y + nextOffsetY;
            var popupBottom = popupTop + popupHeight;
            var targetLeft = targetRect.x;
            var targetRight = targetLeft + targetWidth;
            var targetTop = targetRect.y;
            var targetBottom = targetTop + targetHeight;
            var maxLeft = Math.max(popupLeft, targetLeft);
            var minRight = Math.min(popupRight, targetRight);
            var xCenter = (maxLeft + minRight) / 2;
            var nextArrowX = xCenter - popupLeft;
            var maxTop = Math.max(popupTop, targetTop);
            var minBottom = Math.min(popupBottom, targetBottom);
            var yCenter = (maxTop + minBottom) / 2;
            var nextArrowY = yCenter - popupTop;
            onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);
            // Additional calculate right & bottom position
            var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
            var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
            if (_scaleX === 1) {
                nextOffsetX = Math.round(nextOffsetX);
                offsetX4Right = Math.round(offsetX4Right);
            }
            if (_scaleY === 1) {
                nextOffsetY = Math.round(nextOffsetY);
                offsetY4Bottom = Math.round(offsetY4Bottom);
            }
            var nextOffsetInfo = {
                ready: true,
                offsetX: nextOffsetX / _scaleX,
                offsetY: nextOffsetY / _scaleY,
                offsetR: offsetX4Right / _scaleX,
                offsetB: offsetY4Bottom / _scaleY,
                arrowX: nextArrowX / _scaleX,
                arrowY: nextArrowY / _scaleY,
                scaleX: _scaleX,
                scaleY: _scaleY,
                align: nextAlignInfo
            };
            setOffsetInfo(nextOffsetInfo);
        }
    });
    var triggerAlign = function triggerAlign() {
        alignCountRef.current += 1;
        var id = alignCountRef.current;
        // Merge all align requirement into one frame
        Promise.resolve().then(function() {
            if (alignCountRef.current === id) {
                onAlign();
            }
        });
    };
    // Reset ready status when placement & open changed
    var resetReady = function resetReady() {
        setOffsetInfo(function(ori) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ori), {}, {
                ready: false
            });
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(resetReady, [
        placement
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (!open) {
            resetReady();
        }
    }, [
        open
    ]);
    return [
        offsetInfo.ready,
        offsetInfo.offsetX,
        offsetInfo.offsetY,
        offsetInfo.offsetR,
        offsetInfo.offsetB,
        offsetInfo.arrowX,
        offsetInfo.arrowY,
        offsetInfo.scaleX,
        offsetInfo.scaleY,
        offsetInfo.align,
        triggerAlign
    ];
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useWatch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useWatch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/util.js [app-ssr] (ecmascript)");
;
;
;
function useWatch(open, target, popup, onAlign, onScroll) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (open && target && popup) {
            var targetElement = target;
            var popupElement = popup;
            var targetScrollList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectScroller"])(targetElement);
            var popupScrollList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectScroller"])(popupElement);
            var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWin"])(popupElement);
            var mergedList = new Set([
                win
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(targetScrollList), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(popupScrollList)));
            function notifyScroll() {
                onAlign();
                onScroll();
            }
            mergedList.forEach(function(scroller) {
                scroller.addEventListener('scroll', notifyScroll, {
                    passive: true
                });
            });
            win.addEventListener('resize', notifyScroll, {
                passive: true
            });
            // First time always do align
            onAlign();
            return function() {
                mergedList.forEach(function(scroller) {
                    scroller.removeEventListener('scroll', notifyScroll);
                    win.removeEventListener('resize', notifyScroll);
                });
            };
        }
    }, [
        open,
        target,
        popup
    ]);
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useWinClick.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useWinClick)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/Dom/shadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/util.js [app-ssr] (ecmascript)");
;
;
;
;
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
    var openRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(open);
    openRef.current = open;
    var popupPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(false);
    // Click to hide is special action since click popup element should not hide
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (clickToHide && popupEle && (!mask || maskClosable)) {
            var onPointerDown = function onPointerDown() {
                popupPointerDownRef.current = false;
            };
            var onTriggerClose = function onTriggerClose(e) {
                var _e$composedPath;
                if (openRef.current && !inPopupOrChild(((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 || (_e$composedPath = _e$composedPath.call(e)) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath[0]) || e.target) && !popupPointerDownRef.current) {
                    triggerOpen(false);
                }
            };
            var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWin"])(popupEle);
            win.addEventListener('pointerdown', onPointerDown, true);
            win.addEventListener('mousedown', onTriggerClose, true);
            win.addEventListener('contextmenu', onTriggerClose, true);
            // shadow root
            var targetShadowRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShadowRoot"])(targetEle);
            if (targetShadowRoot) {
                targetShadowRoot.addEventListener('mousedown', onTriggerClose, true);
                targetShadowRoot.addEventListener('contextmenu', onTriggerClose, true);
            }
            // Warning if target and popup not in same root
            if ("TURBOPACK compile-time truthy", 1) {
                var _targetEle$getRootNod, _popupEle$getRootNode;
                var targetRoot = targetEle === null || targetEle === void 0 || (_targetEle$getRootNod = targetEle.getRootNode) === null || _targetEle$getRootNod === void 0 ? void 0 : _targetEle$getRootNod.call(targetEle);
                var popupRoot = (_popupEle$getRootNode = popupEle.getRootNode) === null || _popupEle$getRootNode === void 0 ? void 0 : _popupEle$getRootNode.call(popupEle);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warning"])(targetRoot === popupRoot, "trigger element and popup element should in same shadow root.");
            }
            return function() {
                win.removeEventListener('pointerdown', onPointerDown, true);
                win.removeEventListener('mousedown', onTriggerClose, true);
                win.removeEventListener('contextmenu', onTriggerClose, true);
                if (targetShadowRoot) {
                    targetShadowRoot.removeEventListener('mousedown', onTriggerClose, true);
                    targetShadowRoot.removeEventListener('contextmenu', onTriggerClose, true);
                }
            };
        }
    }, [
        clickToHide,
        targetEle,
        popupEle,
        mask,
        maskClosable
    ]);
    function onPopupPointerDown() {
        popupPointerDownRef.current = true;
    }
    return onPopupPointerDown;
}
}}),
"[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "generateTrigger": (()=>generateTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+portal@1.1.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/portal/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$resize$2d$observer$40$1$2e$4$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/Dom/findDOMNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/Dom/shadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/isMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/Popup/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$TriggerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/TriggerWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAlign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useAlign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useWatch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWinClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/hooks/useWinClick.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+trigger@2.3.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/trigger/es/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@rc-component+portal@1.1.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@rc-component/portal/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$resize$2d$observer$40$1$2e$4$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
var _excluded = [
    "prefixCls",
    "children",
    "action",
    "showAction",
    "hideAction",
    "popupVisible",
    "defaultPopupVisible",
    "onPopupVisibleChange",
    "afterPopupVisibleChange",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "focusDelay",
    "blurDelay",
    "mask",
    "maskClosable",
    "getPopupContainer",
    "forceRender",
    "autoDestroy",
    "destroyPopupOnHide",
    "popup",
    "popupClassName",
    "popupStyle",
    "popupPlacement",
    "builtinPlacements",
    "popupAlign",
    "zIndex",
    "stretch",
    "getPopupClassNameFromAlign",
    "fresh",
    "alignPoint",
    "onPopupClick",
    "onPopupAlign",
    "arrow",
    "popupMotion",
    "maskMotion",
    "popupTransitionName",
    "popupAnimation",
    "maskTransitionName",
    "maskAnimation",
    "className",
    "getTriggerDOMNode"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function generateTrigger() {
    var PortalComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
    var Trigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
        var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-trigger-popup' : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? 'hover' : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
        var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
        // =========================== Mobile ===========================
        var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            setMobile((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])());
        }, []);
        // ========================== Context ===========================
        var subPopupElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef({});
        var parentContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
        var context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
            return {
                registerSubPopup: function registerSubPopup(id, subPopupEle) {
                    subPopupElements.current[id] = subPopupEle;
                    parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, subPopupEle);
                }
            };
        }, [
            parentContext
        ]);
        // =========================== Popup ============================
        var id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
        // Used for forwardRef popup. Not use internal
        var externalPopupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
        var setPopupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(node) {
            externalPopupRef.current = node;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOM"])(node) && popupEle !== node) {
                setPopupEle(node);
            }
            parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node);
        });
        // =========================== Target ===========================
        // Use state to control here since `useRef` update not trigger render
        var _React$useState5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
        // Used for forwardRef target. Not use internal
        var externalForwardRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
        var setTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(node) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOM"])(node) && targetEle !== node) {
                setTargetEle(node);
                externalForwardRef.current = node;
            }
        });
        // ========================== Children ==========================
        var child = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.only(children);
        var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
        var cloneProps = {};
        var inPopupOrChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(ele) {
            var _getShadowRoot, _getShadowRoot2;
            var childDOM = targetEle;
            return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShadowRoot"])(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$shadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShadowRoot"])(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
                return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
            });
        });
        // =========================== Motion ===========================
        var mergePopupMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMotion"])(prefixCls, popupMotion, popupAnimation, popupTransitionName);
        var mergeMaskMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMotion"])(prefixCls, maskMotion, maskAnimation, maskTransitionName);
        // ============================ Open ============================
        var _React$useState7 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(defaultPopupVisible || false), _React$useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
        // Render still use props as first priority
        var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
        // We use effect sync here in case `popupVisible` back to `undefined`
        var setMergedOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(nextOpen) {
            if (popupVisible === undefined) {
                setInternalOpen(nextOpen);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            setInternalOpen(popupVisible || false);
        }, [
            popupVisible
        ]);
        var openRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(mergedOpen);
        openRef.current = mergedOpen;
        var lastTriggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef([]);
        lastTriggerRef.current = [];
        var internalTriggerOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(nextOpen) {
            var _lastTriggerRef$curre;
            setMergedOpen(nextOpen);
            // Enter or Pointer will both trigger open state change
            // We only need take one to avoid duplicated change event trigger
            // Use `lastTriggerRef` to record last open type
            if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
                lastTriggerRef.current.push(nextOpen);
                onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
            }
        });
        // Trigger for delay
        var delayRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
        var clearDelay = function clearDelay() {
            clearTimeout(delayRef.current);
        };
        var triggerOpen = function triggerOpen(nextOpen) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            clearDelay();
            if (delay === 0) {
                internalTriggerOpen(nextOpen);
            } else {
                delayRef.current = setTimeout(function() {
                    internalTriggerOpen(nextOpen);
                }, delay * 1000);
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
            return clearDelay;
        }, []);
        // ========================== Motion ============================
        var _React$useState9 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(firstMount) {
            if (!firstMount || mergedOpen) {
                setInMotion(true);
            }
        }, [
            mergedOpen
        ]);
        var _React$useState11 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
        // =========================== Align ============================
        var _React$useState13 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
        var setMousePosByEvent = function setMousePosByEvent(event) {
            setMousePos([
                event.clientX,
                event.clientY
            ]);
        };
        var _useAlign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAlign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
        var _useAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mobile, action, showAction, hideAction), _useAction2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
        var clickToShow = showActions.has('click');
        var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
        var triggerAlign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            if (!inMotion) {
                onAlign();
            }
        });
        var onScroll = function onScroll() {
            if (openRef.current && alignPoint && clickToHide) {
                triggerOpen(false);
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            triggerAlign();
        }, [
            mousePos,
            popupPlacement
        ]);
        // When no builtinPlacements and popupAlign changed
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
                triggerAlign();
            }
        }, [
            JSON.stringify(popupAlign)
        ]);
        var alignedClassName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
            var baseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignPopupClassName"])(builtinPlacements, prefixCls, alignInfo, alignPoint);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
        }, [
            alignInfo,
            getPopupClassNameFromAlign,
            builtinPlacements,
            prefixCls,
            alignPoint
        ]);
        // ============================ Refs ============================
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
            return {
                nativeElement: externalForwardRef.current,
                popupElement: externalPopupRef.current,
                forceAlign: triggerAlign
            };
        });
        // ========================== Stretch ===========================
        var _React$useState15 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(0), _React$useState16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
        var _React$useState17 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(0), _React$useState18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
        var syncTargetSize = function syncTargetSize() {
            if (stretch && targetEle) {
                var rect = targetEle.getBoundingClientRect();
                setTargetWidth(rect.width);
                setTargetHeight(rect.height);
            }
        };
        var onTargetResize = function onTargetResize() {
            syncTargetSize();
            triggerAlign();
        };
        // ========================== Motion ============================
        var onVisibleChanged = function onVisibleChanged(visible) {
            setInMotion(false);
            onAlign();
            afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
        };
        // We will trigger align when motion is in prepare
        var onPrepare = function onPrepare() {
            return new Promise(function(resolve) {
                syncTargetSize();
                setMotionPrepareResolve(function() {
                    return resolve;
                });
            });
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            if (motionPrepareResolve) {
                onAlign();
                motionPrepareResolve();
                setMotionPrepareResolve(null);
            }
        }, [
            motionPrepareResolve
        ]);
        // =========================== Action ===========================
        /**
     * Util wrapper for trigger action
     */ function wrapperAction(eventName, nextOpen, delay, preEvent) {
            cloneProps[eventName] = function(event) {
                var _originChildProps$eve;
                preEvent === null || preEvent === void 0 || preEvent(event);
                triggerOpen(nextOpen, delay);
                // Pass to origin
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [
                    originChildProps,
                    event
                ].concat(args));
            };
        }
        // ======================= Action: Click ========================
        if (clickToShow || clickToHide) {
            cloneProps.onClick = function(event) {
                var _originChildProps$onC;
                if (openRef.current && clickToHide) {
                    triggerOpen(false);
                } else if (!openRef.current && clickToShow) {
                    setMousePosByEvent(event);
                    triggerOpen(true);
                }
                // Pass to origin
                for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                    args[_key2 - 1] = arguments[_key2];
                }
                (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [
                    originChildProps,
                    event
                ].concat(args));
            };
        }
        // Click to hide is special action since click popup element should not hide
        var onPopupPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$hooks$2f$useWinClick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
        // ======================= Action: Hover ========================
        var hoverToShow = showActions.has('hover');
        var hoverToHide = hideActions.has('hover');
        var onPopupMouseEnter;
        var onPopupMouseLeave;
        if (hoverToShow) {
            // Compatible with old browser which not support pointer event
            wrapperAction('onMouseEnter', true, mouseEnterDelay, function(event) {
                setMousePosByEvent(event);
            });
            wrapperAction('onPointerEnter', true, mouseEnterDelay, function(event) {
                setMousePosByEvent(event);
            });
            onPopupMouseEnter = function onPopupMouseEnter(event) {
                // Only trigger re-open when popup is visible
                if ((mergedOpen || inMotion) && popupEle !== null && popupEle !== void 0 && popupEle.contains(event.target)) {
                    triggerOpen(true, mouseEnterDelay);
                }
            };
            // Align Point
            if (alignPoint) {
                cloneProps.onMouseMove = function(event) {
                    var _originChildProps$onM;
                    // setMousePosByEvent(event);
                    (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
                };
            }
        }
        if (hoverToHide) {
            wrapperAction('onMouseLeave', false, mouseLeaveDelay);
            wrapperAction('onPointerLeave', false, mouseLeaveDelay);
            onPopupMouseLeave = function onPopupMouseLeave() {
                triggerOpen(false, mouseLeaveDelay);
            };
        }
        // ======================= Action: Focus ========================
        if (showActions.has('focus')) {
            wrapperAction('onFocus', true, focusDelay);
        }
        if (hideActions.has('focus')) {
            wrapperAction('onBlur', false, blurDelay);
        }
        // ==================== Action: ContextMenu =====================
        if (showActions.has('contextMenu')) {
            cloneProps.onContextMenu = function(event) {
                var _originChildProps$onC2;
                if (openRef.current && hideActions.has('contextMenu')) {
                    triggerOpen(false);
                } else {
                    setMousePosByEvent(event);
                    triggerOpen(true);
                }
                event.preventDefault();
                // Pass to origin
                for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++){
                    args[_key3 - 1] = arguments[_key3];
                }
                (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [
                    originChildProps,
                    event
                ].concat(args));
            };
        }
        // ========================= ClassName ==========================
        if (className) {
            cloneProps.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(originChildProps.className, className);
        }
        // ============================ Perf ============================
        var renderedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(false);
        renderedRef.current || (renderedRef.current = forceRender || mergedOpen || inMotion);
        // =========================== Render ===========================
        var mergedChildrenProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, originChildProps), cloneProps);
        // Pass props into cloneProps for nest usage
        var passedProps = {};
        var passedEventList = [
            'onContextMenu',
            'onClick',
            'onMouseDown',
            'onTouchStart',
            'onMouseEnter',
            'onMouseLeave',
            'onFocus',
            'onBlur'
        ];
        passedEventList.forEach(function(eventName) {
            if (restProps[eventName]) {
                passedProps[eventName] = function() {
                    var _mergedChildrenProps$;
                    for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
                        args[_key4] = arguments[_key4];
                    }
                    (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [
                        mergedChildrenProps
                    ].concat(args));
                    restProps[eventName].apply(restProps, args);
                };
            }
        });
        // Child Node
        var triggerNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(child, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, mergedChildrenProps), passedProps));
        var arrowPos = {
            x: arrowX,
            y: arrowY
        };
        var innerArrow = arrow ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, arrow !== true ? arrow : {}) : null;
        // Render
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$resize$2d$observer$40$1$2e$4$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            disabled: !mergedOpen,
            ref: setTargetRef,
            onResize: onTargetResize
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$TriggerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            getTriggerDOMNode: getTriggerDOMNode
        }, triggerNode)), renderedRef.current && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: context
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$trigger$40$2$2e$3$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$Popup$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            portal: PortalComponent,
            ref: setPopupRef,
            prefixCls: prefixCls,
            popup: popup,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(popupClassName, alignedClassName),
            style: popupStyle,
            target: targetEle,
            onMouseEnter: onPopupMouseEnter,
            onMouseLeave: onPopupMouseLeave,
            onPointerEnter: onPopupMouseEnter,
            zIndex: zIndex,
            open: mergedOpen,
            keepDom: inMotion,
            fresh: fresh,
            onClick: onPopupClick,
            onPointerDownCapture: onPopupPointerDown,
            mask: mask,
            motion: mergePopupMotion,
            maskMotion: mergeMaskMotion,
            onVisibleChanged: onVisibleChanged,
            onPrepare: onPrepare,
            forceRender: forceRender,
            autoDestroy: mergedAutoDestroy,
            getPopupContainer: getPopupContainer,
            align: alignInfo,
            arrow: innerArrow,
            arrowPos: arrowPos,
            ready: ready,
            offsetX: offsetX,
            offsetY: offsetY,
            offsetR: offsetR,
            offsetB: offsetB,
            onAlign: triggerAlign,
            stretch: stretch,
            targetWidth: targetWidth / scaleX,
            targetHeight: targetHeight / scaleY
        })));
    });
    if ("TURBOPACK compile-time truthy", 1) {
        Trigger.displayName = 'Trigger';
    }
    return Trigger;
}
const __TURBOPACK__default__export__ = generateTrigger(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$rc$2d$component$2b$portal$40$1$2e$1$2e$2_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$rc$2d$component$2f$portal$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]);
}}),

};

//# sourceMappingURL=bbc09_%40rc-component_trigger_es_b84abb._.js.map