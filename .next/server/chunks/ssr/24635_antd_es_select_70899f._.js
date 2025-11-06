module.exports = {

"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/single.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>genSingleStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs@1.24.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs@1.24.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
;
;
;
function genSizeStyle(token, suffix) {
    const { componentCls, inputPaddingHorizontalBase, borderRadius } = token;
    const selectHeightWithoutBorder = token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal();
    const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
    return {
        [`${componentCls}-single${suffixCls}`]: {
            fontSize: token.fontSize,
            height: token.controlHeight,
            // ========================= Selector =========================
            [`${componentCls}-selector`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token, true)), {
                display: 'flex',
                borderRadius,
                flex: '1 1 auto',
                [`${componentCls}-selection-wrap:after`]: {
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(selectHeightWithoutBorder)
                },
                [`${componentCls}-selection-search`]: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    '&-input': {
                        width: '100%',
                        WebkitAppearance: 'textfield'
                    }
                },
                [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
                    display: 'block',
                    padding: 0,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(selectHeightWithoutBorder),
                    transition: `all ${token.motionDurationSlow}, visibility 0s`,
                    alignSelf: 'center'
                },
                [`${componentCls}-selection-placeholder`]: {
                    transition: 'none',
                    pointerEvents: 'none'
                },
                // For common baseline align
                [[
                    '&:after',
                    /* For '' value baseline align */ `${componentCls}-selection-item:empty:after`,
                    /* For undefined value baseline align */ `${componentCls}-selection-placeholder:empty:after`
                ].join(',')]: {
                    display: 'inline-block',
                    width: 0,
                    visibility: 'hidden',
                    content: '"\\a0"'
                }
            }),
            [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-search,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
                paddingInlineEnd: token.showArrowPaddingInlineEnd
            },
            // Opacity selection if open
            [`&${componentCls}-open ${componentCls}-selection-item`]: {
                color: token.colorTextPlaceholder
            },
            // ========================== Input ==========================
            // We only change the style of non-customize input which is only support by `combobox` mode.
            // Not customize
            [`&:not(${componentCls}-customize-input)`]: {
                [`${componentCls}-selector`]: {
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(inputPaddingHorizontalBase)}`,
                    [`${componentCls}-selection-search-input`]: {
                        height: selectHeightWithoutBorder,
                        fontSize: token.fontSize
                    },
                    '&:after': {
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(selectHeightWithoutBorder)
                    }
                }
            },
            [`&${componentCls}-customize-input`]: {
                [`${componentCls}-selector`]: {
                    '&:after': {
                        display: 'none'
                    },
                    [`${componentCls}-selection-search`]: {
                        position: 'static',
                        width: '100%'
                    },
                    [`${componentCls}-selection-placeholder`]: {
                        position: 'absolute',
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(inputPaddingHorizontalBase)}`,
                        '&:after': {
                            display: 'none'
                        }
                    }
                }
            }
        }
    };
}
function genSingleStyle(token) {
    const { componentCls } = token;
    const inputPaddingHorizontalSM = token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal();
    return [
        genSizeStyle(token),
        // ======================== Small ========================
        // Shared
        genSizeStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            controlHeight: token.controlHeightSM,
            borderRadius: token.borderRadiusSM
        }), 'sm'),
        // padding
        {
            [`${componentCls}-single${componentCls}-sm`]: {
                [`&:not(${componentCls}-customize-input)`]: {
                    [`${componentCls}-selector`]: {
                        padding: `0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(inputPaddingHorizontalSM)}`
                    },
                    // With arrow should provides `padding-right` to show the arrow
                    [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
                        insetInlineEnd: token.calc(inputPaddingHorizontalSM).add(token.calc(token.fontSize).mul(1.5)).equal()
                    },
                    [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
                        paddingInlineEnd: token.calc(token.fontSize).mul(1.5).equal()
                    }
                }
            }
        },
        // ======================== Large ========================
        // Shared
        genSizeStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            controlHeight: token.singleItemHeightLG,
            fontSize: token.fontSizeLG,
            borderRadius: token.borderRadiusLG
        }), 'lg')
    ];
}
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/multiple.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "genOverflowStyle": (()=>genOverflowStyle),
    "getMultipleSelectorUnit": (()=>getMultipleSelectorUnit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs@1.24.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs@1.24.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
;
;
;
const getMultipleSelectorUnit = (token)=>{
    const { multipleSelectItemHeight, paddingXXS, lineWidth, INTERNAL_FIXED_ITEM_MARGIN } = token;
    const basePadding = token.max(token.calc(paddingXXS).sub(lineWidth).equal(), 0);
    const containerPadding = token.max(token.calc(basePadding).sub(INTERNAL_FIXED_ITEM_MARGIN).equal(), 0);
    return {
        basePadding,
        containerPadding,
        itemHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(multipleSelectItemHeight),
        itemLineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.calc(multipleSelectItemHeight).sub(token.calc(token.lineWidth).mul(2)).equal())
    };
};
const getSelectItemStyle = (token)=>{
    const { multipleSelectItemHeight, selectHeight, lineWidth } = token;
    const selectItemDist = token.calc(selectHeight).sub(multipleSelectItemHeight).div(2).sub(lineWidth).equal();
    return selectItemDist;
};
const genOverflowStyle = (token)=>{
    const { componentCls, iconCls, borderRadiusSM, motionDurationSlow, paddingXS, multipleItemColorDisabled, multipleItemBorderColorDisabled, colorIcon, colorIconHover, INTERNAL_FIXED_ITEM_MARGIN } = token;
    const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
    return {
        /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */ // =========================== Overflow ===========================
        [selectOverflowPrefixCls]: {
            position: 'relative',
            display: 'flex',
            flex: 'auto',
            flexWrap: 'wrap',
            maxWidth: '100%',
            '&-item': {
                flex: 'none',
                alignSelf: 'center',
                // https://github.com/ant-design/ant-design/issues/54179
                maxWidth: 'calc(100% - 4px)',
                display: 'inline-flex'
            },
            // ======================== Selections ==========================
            [`${componentCls}-selection-item`]: {
                display: 'flex',
                alignSelf: 'center',
                flex: 'none',
                boxSizing: 'border-box',
                maxWidth: '100%',
                marginBlock: INTERNAL_FIXED_ITEM_MARGIN,
                borderRadius: borderRadiusSM,
                cursor: 'default',
                transition: `font-size ${motionDurationSlow}, line-height ${motionDurationSlow}, height ${motionDurationSlow}`,
                marginInlineEnd: token.calc(INTERNAL_FIXED_ITEM_MARGIN).mul(2).equal(),
                paddingInlineStart: paddingXS,
                paddingInlineEnd: token.calc(paddingXS).div(2).equal(),
                [`${componentCls}-disabled&`]: {
                    color: multipleItemColorDisabled,
                    borderColor: multipleItemBorderColorDisabled,
                    cursor: 'not-allowed'
                },
                // It's ok not to do this, but 24px makes bottom narrow in view should adjust
                '&-content': {
                    display: 'inline-block',
                    marginInlineEnd: token.calc(paddingXS).div(2).equal(),
                    overflow: 'hidden',
                    whiteSpace: 'pre',
                    // fix whitespace wrapping. custom tags display all whitespace within.
                    textOverflow: 'ellipsis'
                },
                '&-remove': Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetIcon"])()), {
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: colorIcon,
                    fontWeight: 'bold',
                    fontSize: 10,
                    lineHeight: 'inherit',
                    cursor: 'pointer',
                    [`> ${iconCls}`]: {
                        verticalAlign: '-0.2em'
                    },
                    '&:hover': {
                        color: colorIconHover
                    }
                })
            }
        }
    };
};
const genSelectionStyle = (token, suffix)=>{
    const { componentCls, INTERNAL_FIXED_ITEM_MARGIN } = token;
    const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
    const selectItemHeight = token.multipleSelectItemHeight;
    const selectItemDist = getSelectItemStyle(token);
    const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
    const multipleSelectorUnit = getMultipleSelectorUnit(token);
    return {
        [`${componentCls}-multiple${suffixCls}`]: Object.assign(Object.assign({}, genOverflowStyle(token)), {
            // ========================= Selector =========================
            [`${componentCls}-selector`]: {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                // Multiple is little different that horizontal is follow the vertical
                paddingInline: multipleSelectorUnit.basePadding,
                paddingBlock: multipleSelectorUnit.containerPadding,
                borderRadius: token.borderRadius,
                [`${componentCls}-disabled&`]: {
                    background: token.multipleSelectorBgDisabled,
                    cursor: 'not-allowed'
                },
                '&:after': {
                    display: 'inline-block',
                    width: 0,
                    margin: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(INTERNAL_FIXED_ITEM_MARGIN)} 0`,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(selectItemHeight),
                    visibility: 'hidden',
                    content: '"\\a0"'
                }
            },
            // ======================== Selections ========================
            [`${componentCls}-selection-item`]: {
                height: multipleSelectorUnit.itemHeight,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(multipleSelectorUnit.itemLineHeight)
            },
            // ========================== Wrap ===========================
            [`${componentCls}-selection-wrap`]: {
                alignSelf: 'flex-start',
                '&:after': {
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(selectItemHeight),
                    marginBlock: INTERNAL_FIXED_ITEM_MARGIN
                }
            },
            // ========================== Input ==========================
            [`${componentCls}-prefix`]: {
                marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(multipleSelectorUnit.basePadding).equal()
            },
            [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item,
        ${componentCls}-prefix + ${componentCls}-selection-wrap
      `]: {
                [`${componentCls}-selection-search`]: {
                    marginInlineStart: 0
                },
                [`${componentCls}-selection-placeholder`]: {
                    insetInlineStart: 0
                }
            },
            // https://github.com/ant-design/ant-design/issues/44754
            // Same as `wrap:after`
            [`${selectOverflowPrefixCls}-item-suffix`]: {
                minHeight: multipleSelectorUnit.itemHeight,
                marginBlock: INTERNAL_FIXED_ITEM_MARGIN
            },
            [`${componentCls}-selection-search`]: {
                display: 'inline-flex',
                position: 'relative',
                maxWidth: '100%',
                marginInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(selectItemDist).equal(),
                [`
          &-input,
          &-mirror
        `]: {
                    height: selectItemHeight,
                    fontFamily: token.fontFamily,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(selectItemHeight),
                    transition: `all ${token.motionDurationSlow}`
                },
                '&-input': {
                    width: '100%',
                    minWidth: 4.1 // fix search cursor missing
                },
                '&-mirror': {
                    position: 'absolute',
                    top: 0,
                    insetInlineStart: 0,
                    insetInlineEnd: 'auto',
                    zIndex: 999,
                    whiteSpace: 'pre',
                    // fix whitespace wrapping caused width calculation bug
                    visibility: 'hidden'
                }
            },
            // ======================= Placeholder =======================
            [`${componentCls}-selection-placeholder`]: {
                position: 'absolute',
                top: '50%',
                insetInlineStart: token.calc(token.inputPaddingHorizontalBase).sub(multipleSelectorUnit.basePadding).equal(),
                insetInlineEnd: token.inputPaddingHorizontalBase,
                transform: 'translateY(-50%)',
                transition: `all ${token.motionDurationSlow}`
            }
        })
    };
};
function genSizeStyle(token, suffix) {
    const { componentCls } = token;
    const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
    const rawStyle = {
        [`${componentCls}-multiple${suffixCls}`]: {
            fontSize: token.fontSize,
            // ========================= Selector =========================
            [`${componentCls}-selector`]: {
                [`${componentCls}-show-search&`]: {
                    cursor: 'text'
                }
            },
            [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
                paddingInlineEnd: token.calc(token.fontSizeIcon).add(token.controlPaddingHorizontal).equal()
            }
        }
    };
    return [
        genSelectionStyle(token, suffix),
        rawStyle
    ];
}
const genMultipleStyle = (token)=>{
    const { componentCls } = token;
    const smallToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        selectHeight: token.controlHeightSM,
        multipleSelectItemHeight: token.multipleItemHeightSM,
        borderRadius: token.borderRadiusSM,
        borderRadiusSM: token.borderRadiusXS
    });
    const largeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        fontSize: token.fontSizeLG,
        selectHeight: token.controlHeightLG,
        multipleSelectItemHeight: token.multipleItemHeightLG,
        borderRadius: token.borderRadiusLG,
        borderRadiusSM: token.borderRadius
    });
    return [
        genSizeStyle(token),
        // ======================== Small ========================
        genSizeStyle(smallToken, 'sm'),
        // Padding
        {
            [`${componentCls}-multiple${componentCls}-sm`]: {
                [`${componentCls}-selection-placeholder`]: {
                    insetInline: token.calc(token.controlPaddingHorizontalSM).sub(token.lineWidth).equal()
                },
                // https://github.com/ant-design/ant-design/issues/29559
                [`${componentCls}-selection-search`]: {
                    marginInlineStart: 2 // Magic Number
                }
            }
        },
        // ======================== Large ========================
        genSizeStyle(largeToken, 'lg')
    ];
};
const __TURBOPACK__default__export__ = genMultipleStyle;
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/dropdown.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/motion/slide.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/motion/move.js [app-ssr] (ecmascript)");
;
;
const genItemStyle = (token)=>{
    const { optionHeight, optionFontSize, optionLineHeight, optionPadding } = token;
    return {
        position: 'relative',
        display: 'block',
        minHeight: optionHeight,
        padding: optionPadding,
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: optionFontSize,
        lineHeight: optionLineHeight,
        boxSizing: 'border-box'
    };
};
const genSingleStyle = (token)=>{
    const { antCls, componentCls } = token;
    const selectItemCls = `${componentCls}-item`;
    const slideUpEnterActive = `&${antCls}-slide-up-enter${antCls}-slide-up-enter-active`;
    const slideUpAppearActive = `&${antCls}-slide-up-appear${antCls}-slide-up-appear-active`;
    const slideUpLeaveActive = `&${antCls}-slide-up-leave${antCls}-slide-up-leave-active`;
    const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
    const selectedItemCls = `${selectItemCls}-option-selected`;
    return [
        {
            [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
                position: 'absolute',
                top: -9999,
                zIndex: token.zIndexPopup,
                boxSizing: 'border-box',
                padding: token.paddingXXS,
                overflow: 'hidden',
                fontSize: token.fontSize,
                // Fix select render lag of long text in chrome
                // https://github.com/ant-design/ant-design/issues/11456
                // https://github.com/ant-design/ant-design/issues/11843
                fontVariant: 'initial',
                backgroundColor: token.colorBgElevated,
                borderRadius: token.borderRadiusLG,
                outline: 'none',
                boxShadow: token.boxShadowSecondary,
                [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slideUpIn"]
                },
                [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slideDownIn"]
                },
                [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slideUpOut"]
                },
                [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
                    animationName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slideDownOut"]
                },
                '&-hidden': {
                    display: 'none'
                },
                [selectItemCls]: Object.assign(Object.assign({}, genItemStyle(token)), {
                    cursor: 'pointer',
                    transition: `background ${token.motionDurationSlow} ease`,
                    borderRadius: token.borderRadiusSM,
                    // =========== Group ============
                    '&-group': {
                        color: token.colorTextDescription,
                        fontSize: token.fontSizeSM,
                        cursor: 'default'
                    },
                    // =========== Option ===========
                    '&-option': {
                        display: 'flex',
                        '&-content': Object.assign({
                            flex: 'auto'
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]),
                        '&-state': {
                            flex: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        [`&-active:not(${selectItemCls}-option-disabled)`]: {
                            backgroundColor: token.optionActiveBg
                        },
                        [`&-selected:not(${selectItemCls}-option-disabled)`]: {
                            color: token.optionSelectedColor,
                            fontWeight: token.optionSelectedFontWeight,
                            backgroundColor: token.optionSelectedBg,
                            [`${selectItemCls}-option-state`]: {
                                color: token.colorPrimary
                            }
                        },
                        '&-disabled': {
                            [`&${selectItemCls}-option-selected`]: {
                                backgroundColor: token.colorBgContainerDisabled
                            },
                            color: token.colorTextDisabled,
                            cursor: 'not-allowed'
                        },
                        '&-grouped': {
                            paddingInlineStart: token.calc(token.controlPaddingHorizontal).mul(2).equal()
                        }
                    },
                    '&-empty': Object.assign(Object.assign({}, genItemStyle(token)), {
                        color: token.colorTextDisabled
                    })
                }),
                // https://github.com/ant-design/ant-design/pull/46646
                [`${selectedItemCls}:has(+ ${selectedItemCls})`]: {
                    borderEndStartRadius: 0,
                    borderEndEndRadius: 0,
                    [`& + ${selectedItemCls}`]: {
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0
                    }
                },
                // =========================== RTL ===========================
                '&-rtl': {
                    direction: 'rtl'
                }
            })
        },
        // Follow code may reuse in other components
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-up'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-down'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-up'),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initMoveMotion"])(token, 'move-down')
    ];
};
const __TURBOPACK__default__export__ = genSingleStyle;
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/token.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "prepareComponentToken": (()=>prepareComponentToken)
});
const prepareComponentToken = (token)=>{
    const { fontSize, lineHeight, lineWidth, controlHeight, controlHeightSM, controlHeightLG, paddingXXS, controlPaddingHorizontal, zIndexPopupBase, colorText, fontWeightStrong, controlItemBgActive, controlItemBgHover, colorBgContainer, colorFillSecondary, colorBgContainerDisabled, colorTextDisabled, colorPrimaryHover, colorPrimary, controlOutline } = token;
    // Item height default use `controlHeight - 2 * paddingXXS`,
    // but some case `paddingXXS=0`.
    // Let's fallback it.
    const dblPaddingXXS = paddingXXS * 2;
    const dblLineWidth = lineWidth * 2;
    const multipleItemHeight = Math.min(controlHeight - dblPaddingXXS, controlHeight - dblLineWidth);
    const multipleItemHeightSM = Math.min(controlHeightSM - dblPaddingXXS, controlHeightSM - dblLineWidth);
    const multipleItemHeightLG = Math.min(controlHeightLG - dblPaddingXXS, controlHeightLG - dblLineWidth);
    // FIXED_ITEM_MARGIN is a hardcode calculation since calc not support rounding
    const INTERNAL_FIXED_ITEM_MARGIN = Math.floor(paddingXXS / 2);
    return {
        INTERNAL_FIXED_ITEM_MARGIN,
        zIndexPopup: zIndexPopupBase + 50,
        optionSelectedColor: colorText,
        optionSelectedFontWeight: fontWeightStrong,
        optionSelectedBg: controlItemBgActive,
        optionActiveBg: controlItemBgHover,
        optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
        optionFontSize: fontSize,
        optionLineHeight: lineHeight,
        optionHeight: controlHeight,
        selectorBg: colorBgContainer,
        clearBg: colorBgContainer,
        singleItemHeightLG: controlHeightLG,
        multipleItemBg: colorFillSecondary,
        multipleItemBorderColor: 'transparent',
        multipleItemHeight,
        multipleItemHeightSM,
        multipleItemHeightLG,
        multipleSelectorBgDisabled: colorBgContainerDisabled,
        multipleItemColorDisabled: colorTextDisabled,
        multipleItemBorderColorDisabled: 'transparent',
        showArrowPaddingInlineEnd: Math.ceil(token.fontSize * 1.25),
        hoverBorderColor: colorPrimaryHover,
        activeBorderColor: colorPrimary,
        activeOutlineColor: controlOutline,
        selectAffixPadding: paddingXXS
    };
};
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/variants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs@1.24.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs@1.24.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs/es/util/index.js [app-ssr] (ecmascript)");
;
// =====================================================
// ==                  Outlined                       ==
// =====================================================
const genBaseOutlinedStyle = (token, options)=>{
    const { componentCls, antCls, controlOutlineWidth } = token;
    return {
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${options.borderColor}`,
            background: token.selectorBg
        },
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`&:hover ${componentCls}-selector`]: {
                borderColor: options.hoverBorderHover
            },
            [`${componentCls}-focused& ${componentCls}-selector`]: {
                borderColor: options.activeBorderColor,
                boxShadow: `0 0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(controlOutlineWidth)} ${options.activeOutlineColor}`,
                outline: 0
            },
            [`${componentCls}-prefix`]: {
                color: options.color
            }
        }
    };
};
const genOutlinedStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseOutlinedStyle(token, options))
    });
const genOutlinedStyle = (token)=>({
        '&-outlined': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
            borderColor: token.colorBorder,
            hoverBorderHover: token.hoverBorderColor,
            activeBorderColor: token.activeBorderColor,
            activeOutlineColor: token.activeOutlineColor,
            color: token.colorText
        })), genOutlinedStatusStyle(token, {
            status: 'error',
            borderColor: token.colorError,
            hoverBorderHover: token.colorErrorHover,
            activeBorderColor: token.colorError,
            activeOutlineColor: token.colorErrorOutline,
            color: token.colorError
        })), genOutlinedStatusStyle(token, {
            status: 'warning',
            borderColor: token.colorWarning,
            hoverBorderHover: token.colorWarningHover,
            activeBorderColor: token.colorWarning,
            activeOutlineColor: token.colorWarningOutline,
            color: token.colorWarning
        })), {
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    background: token.colorBgContainerDisabled,
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.multipleItemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
            }
        })
    });
// =====================================================
// ==                   Filled                        ==
// =====================================================
const genBaseFilledStyle = (token, options)=>{
    const { componentCls, antCls } = token;
    return {
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
            background: options.bg,
            border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`,
            color: options.color
        },
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`&:hover ${componentCls}-selector`]: {
                background: options.hoverBg
            },
            [`${componentCls}-focused& ${componentCls}-selector`]: {
                background: token.selectorBg,
                borderColor: options.activeBorderColor,
                outline: 0
            }
        }
    };
};
const genFilledStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseFilledStyle(token, options))
    });
const genFilledStyle = (token)=>({
        '&-filled': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
            bg: token.colorFillTertiary,
            hoverBg: token.colorFillSecondary,
            activeBorderColor: token.activeBorderColor,
            color: token.colorText
        })), genFilledStatusStyle(token, {
            status: 'error',
            bg: token.colorErrorBg,
            hoverBg: token.colorErrorBgHover,
            activeBorderColor: token.colorError,
            color: token.colorError
        })), genFilledStatusStyle(token, {
            status: 'warning',
            bg: token.colorWarningBg,
            hoverBg: token.colorWarningBgHover,
            activeBorderColor: token.colorWarning,
            color: token.colorWarning
        })), {
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    borderColor: token.colorBorder,
                    background: token.colorBgContainerDisabled,
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.colorBgContainer,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
            }
        })
    });
// =====================================================
// ==                 Borderless                      ==
// =====================================================
const genBorderlessStyle = (token)=>({
        '&-borderless': {
            [`${token.componentCls}-selector`]: {
                background: 'transparent',
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} transparent`
            },
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.multipleItemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
            },
            // Status
            [`&${token.componentCls}-status-error`]: {
                [`${token.componentCls}-prefix, ${token.componentCls}-selection-item`]: {
                    color: token.colorError
                }
            },
            [`&${token.componentCls}-status-warning`]: {
                [`${token.componentCls}-prefix, ${token.componentCls}-selection-item`]: {
                    color: token.colorWarning
                }
            }
        }
    });
// =====================================================
// ==                 Underlined                      ==
// =====================================================
const genBaseUnderlinedStyle = (token, options)=>{
    const { componentCls, antCls } = token;
    return {
        [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
            borderWidth: `0 0 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} 0`,
            borderStyle: `none none ${token.lineType} none`,
            borderColor: options.borderColor,
            background: token.selectorBg,
            borderRadius: 0
        },
        [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`&:hover ${componentCls}-selector`]: {
                borderColor: options.hoverBorderHover
            },
            [`${componentCls}-focused& ${componentCls}-selector`]: {
                borderColor: options.activeBorderColor,
                outline: 0
            },
            [`${componentCls}-prefix`]: {
                color: options.color
            }
        }
    };
};
const genUnderlinedStatusStyle = (token, options)=>({
        [`&${token.componentCls}-status-${options.status}`]: Object.assign({}, genBaseUnderlinedStyle(token, options))
    });
const genUnderlinedStyle = (token)=>({
        '&-underlined': Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseUnderlinedStyle(token, {
            borderColor: token.colorBorder,
            hoverBorderHover: token.hoverBorderColor,
            activeBorderColor: token.activeBorderColor,
            activeOutlineColor: token.activeOutlineColor,
            color: token.colorText
        })), genUnderlinedStatusStyle(token, {
            status: 'error',
            borderColor: token.colorError,
            hoverBorderHover: token.colorErrorHover,
            activeBorderColor: token.colorError,
            activeOutlineColor: token.colorErrorOutline,
            color: token.colorError
        })), genUnderlinedStatusStyle(token, {
            status: 'warning',
            borderColor: token.colorWarning,
            hoverBorderHover: token.colorWarningHover,
            activeBorderColor: token.colorWarning,
            activeOutlineColor: token.colorWarningOutline,
            color: token.colorWarning
        })), {
            [`&${token.componentCls}-disabled`]: {
                [`&:not(${token.componentCls}-customize-input) ${token.componentCls}-selector`]: {
                    color: token.colorTextDisabled
                }
            },
            [`&${token.componentCls}-multiple ${token.componentCls}-selection-item`]: {
                background: token.multipleItemBg,
                border: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$40$1$2e$24$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth)} ${token.lineType} ${token.multipleItemBorderColor}`
            }
        })
    });
const genVariantsStyle = (token)=>({
        [token.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedStyle(token)), genFilledStyle(token)), genBorderlessStyle(token)), genUnderlinedStyle(token))
    });
const __TURBOPACK__default__export__ = genVariantsStyle;
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$single$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/single.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$multiple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/multiple.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/dropdown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/style/compact-item.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/theme/util/genStyleUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-ssr] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$variants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/variants.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// ============================= Selector =============================
const genSelectorStyle = (token)=>{
    const { componentCls } = token;
    return {
        position: 'relative',
        transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
        input: {
            cursor: 'pointer'
        },
        [`${componentCls}-show-search&`]: {
            cursor: 'text',
            input: {
                cursor: 'auto',
                color: 'inherit',
                height: '100%'
            }
        },
        [`${componentCls}-disabled&`]: {
            cursor: 'not-allowed',
            input: {
                cursor: 'not-allowed'
            }
        }
    };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = (token)=>{
    const { componentCls } = token;
    return {
        [`${componentCls}-selection-search-input`]: {
            margin: 0,
            padding: 0,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            appearance: 'none',
            fontFamily: 'inherit',
            '&::-webkit-search-cancel-button': {
                display: 'none',
                appearance: 'none'
            }
        }
    };
};
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { antCls, componentCls, inputPaddingHorizontalBase, iconCls } = token;
    const hoverShowClearStyle = {
        [`${componentCls}-clear`]: {
            opacity: 1,
            background: token.colorBgBase,
            borderRadius: '50%'
        }
    };
    return {
        [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            position: 'relative',
            display: 'inline-flex',
            cursor: 'pointer',
            [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
            // ======================== Selection ========================
            [`${componentCls}-selection-item`]: Object.assign(Object.assign({
                flex: 1,
                fontWeight: 'normal',
                position: 'relative',
                userSelect: 'none'
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                // https://github.com/ant-design/ant-design/issues/40421
                [`> ${antCls}-typography`]: {
                    display: 'inline'
                }
            }),
            // ======================= Placeholder =======================
            [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textEllipsis"]), {
                flex: 1,
                color: token.colorTextPlaceholder,
                pointerEvents: 'none'
            }),
            // ========================== Arrow ==========================
            [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetIcon"])()), {
                position: 'absolute',
                top: '50%',
                insetInlineStart: 'auto',
                insetInlineEnd: inputPaddingHorizontalBase,
                height: token.fontSizeIcon,
                marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
                color: token.colorTextQuaternary,
                fontSize: token.fontSizeIcon,
                lineHeight: 1,
                textAlign: 'center',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                transition: `opacity ${token.motionDurationSlow} ease`,
                [iconCls]: {
                    verticalAlign: 'top',
                    transition: `transform ${token.motionDurationSlow}`,
                    '> svg': {
                        verticalAlign: 'top'
                    },
                    [`&:not(${componentCls}-suffix)`]: {
                        pointerEvents: 'auto'
                    }
                },
                [`${componentCls}-disabled &`]: {
                    cursor: 'not-allowed'
                },
                '> *:not(:last-child)': {
                    marginInlineEnd: 8 // FIXME: magic
                }
            }),
            // ========================== Wrap ===========================
            [`${componentCls}-selection-wrap`]: {
                display: 'flex',
                width: '100%',
                position: 'relative',
                minWidth: 0,
                // https://github.com/ant-design/ant-design/issues/51669
                '&:after': {
                    content: '"\\a0"',
                    width: 0,
                    overflow: 'hidden'
                }
            },
            // ========================= Prefix ==========================
            [`${componentCls}-prefix`]: {
                flex: 'none',
                marginInlineEnd: token.selectAffixPadding
            },
            // ========================== Clear ==========================
            [`${componentCls}-clear`]: {
                position: 'absolute',
                top: '50%',
                insetInlineStart: 'auto',
                insetInlineEnd: inputPaddingHorizontalBase,
                zIndex: 1,
                display: 'inline-block',
                width: token.fontSizeIcon,
                height: token.fontSizeIcon,
                marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
                color: token.colorTextQuaternary,
                fontSize: token.fontSizeIcon,
                fontStyle: 'normal',
                lineHeight: 1,
                textAlign: 'center',
                textTransform: 'none',
                cursor: 'pointer',
                opacity: 0,
                transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
                textRendering: 'auto',
                // https://github.com/ant-design/ant-design/issues/54205
                // Force GPU compositing on Safari to prevent flickering on opacity/transform transitions
                transform: 'translateZ(0)',
                '&:before': {
                    display: 'block'
                },
                '&:hover': {
                    color: token.colorIcon
                }
            },
            '@media(hover:none)': hoverShowClearStyle,
            '&:hover': hoverShowClearStyle
        }),
        // ========================= Feedback ==========================
        [`${componentCls}-status`]: {
            '&-error, &-warning, &-success, &-validating': {
                [`&${componentCls}-has-feedback`]: {
                    [`${componentCls}-clear`]: {
                        insetInlineEnd: token.calc(inputPaddingHorizontalBase).add(token.fontSize).add(token.paddingXS).equal()
                    }
                }
            }
        }
    };
};
// ============================== Styles ==============================
const genSelectStyle = (token)=>{
    const { componentCls } = token;
    return [
        {
            [componentCls]: {
                // ==================== In Form ====================
                [`&${componentCls}-in-form-item`]: {
                    width: '100%'
                }
            }
        },
        // =====================================================
        // ==                       LTR                       ==
        // =====================================================
        // Base
        genBaseStyle(token),
        // Single
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$single$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // Multiple
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$multiple$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // Dropdown
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$dropdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(token),
        // =====================================================
        // ==                       RTL                       ==
        // =====================================================
        {
            [`${componentCls}-rtl`]: {
                direction: 'rtl'
            }
        },
        // =====================================================
        // ==             Space Compact                       ==
        // =====================================================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(token, {
            borderElCls: `${componentCls}-selector`,
            focusElCls: `${componentCls}-focused`
        })
    ];
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["genStyleHooks"])('Select', (token, { rootPrefixCls })=>{
    const selectToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$cssinjs$2d$utils$40$1$2e$1$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        rootPrefixCls,
        inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: token.multipleItemHeight,
        selectHeight: token.controlHeight
    });
    return [
        genSelectStyle(selectToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$variants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(selectToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    unitless: {
        optionLineHeight: true,
        optionSelectedFontWeight: true
    }
});
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/useShowArrow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Since Select, TreeSelect, Cascader is same Select like component.
 * We just use same hook to handle this logic.
 *
 * If `suffixIcon` is not equal to `null`, always show it.
 */ __turbopack_esm__({
    "default": (()=>useShowArrow)
});
function useShowArrow(suffixIcon, showArrow) {
    return showArrow !== undefined ? showArrow : suffixIcon !== null;
}
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/usePopupRender.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/ContextIsolator.js [app-ssr] (ecmascript)");
"use client";
;
;
function usePopupRender(renderFn) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!renderFn) {
            return undefined;
        }
        return (...args)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                space: true
            }, renderFn.apply(void 0, args));
    }, [
        renderFn
    ]);
}
const __TURBOPACK__default__export__ = usePopupRender;
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/useIcons.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useIcons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/icons/es/icons/DownOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/icons/es/icons/CheckOutlined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function useIcons({ suffixIcon, clearIcon, menuItemSelectedIcon, removeIcon, loading, multiple, hasFeedback, prefixCls, showSuffixIcon, feedbackIcon, showArrow, componentName }) {
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])(componentName);
        warning.deprecated(!clearIcon, 'clearIcon', 'allowClear={{ clearIcon: React.ReactNode }}');
    }
    // Clear Icon
    const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null);
    // Validation Feedback Icon
    const getSuffixIconNode = (arrowIcon)=>{
        if (suffixIcon === null && !hasFeedback && !showArrow) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
    };
    // Arrow item icon
    let mergedSuffixIcon = null;
    if (suffixIcon !== undefined) {
        mergedSuffixIcon = getSuffixIconNode(suffixIcon);
    } else if (loading) {
        mergedSuffixIcon = getSuffixIconNode(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            spin: true
        }));
    } else {
        const iconCls = `${prefixCls}-suffix`;
        mergedSuffixIcon = ({ open, showSearch })=>{
            if (open && showSearch) {
                return getSuffixIconNode(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: iconCls
                }));
            }
            return getSuffixIconNode(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DownOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: iconCls
            }));
        };
    }
    // Checked item icon
    let mergedItemIcon = null;
    if (menuItemSelectedIcon !== undefined) {
        mergedItemIcon = menuItemSelectedIcon;
    } else if (multiple) {
        mergedItemIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null);
    } else {
        mergedItemIcon = null;
    }
    let mergedRemoveIcon = null;
    if (removeIcon !== undefined) {
        mergedRemoveIcon = removeIcon;
    } else {
        mergedRemoveIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ant$2d$design$2b$icons$40$5$2e$6$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], null);
    }
    return {
        clearIcon: mergedClearIcon,
        suffixIcon: mergedSuffixIcon,
        itemIcon: mergedItemIcon,
        removeIcon: mergedRemoveIcon
    };
}
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/mergedBuiltinPlacements.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const getBuiltInPlacements = (popupOverflow)=>{
    const htmlRegion = popupOverflow === 'scroll' ? 'scroll' : 'visible';
    const sharedConfig = {
        overflow: {
            adjustX: true,
            adjustY: true,
            shiftY: true
        },
        htmlRegion,
        dynamicInset: true
    };
    return {
        bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'tl',
                'bl'
            ],
            offset: [
                0,
                4
            ]
        }),
        bottomRight: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'tr',
                'br'
            ],
            offset: [
                0,
                4
            ]
        }),
        topLeft: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'bl',
                'tl'
            ],
            offset: [
                0,
                -4
            ]
        }),
        topRight: Object.assign(Object.assign({}, sharedConfig), {
            points: [
                'br',
                'tr'
            ],
            offset: [
                0,
                -4
            ]
        })
    };
};
function mergedBuiltinPlacements(buildInPlacements, popupOverflow) {
    return buildInPlacements || getBuiltInPlacements(popupOverflow);
}
const __TURBOPACK__default__export__ = mergedBuiltinPlacements;
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-select@14.16.8_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-select/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-util@5.44.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-util/es/omit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/config-provider/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/theme/useToken.js [app-ssr] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/space/Compact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/form/hooks/useVariants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/style/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$useShowArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/useShowArrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$usePopupRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/usePopupRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/form/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/statusUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$defaultRenderEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/config-provider/defaultRenderEmpty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$useIcons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/useIcons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/config-provider/hooks/useSize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/config-provider/DisabledContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/hooks/useZIndex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-select@14.16.8_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-select/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/motion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$mergedBuiltinPlacements$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/mergedBuiltinPlacements.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/_util/PurePanel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Option$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-select@14.16.8_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-select/es/Option.js [app-ssr] (ecmascript) <export default as Option>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OptGroup$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/rc-select@14.16.8_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/rc-select/es/OptGroup.js [app-ssr] (ecmascript) <export default as OptGroup>");
"use client";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
;
;
;
;
;
;
const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (props, ref)=>{
    var _a, _b, _c, _d, _e;
    const { prefixCls: customizePrefixCls, bordered, className, rootClassName, getPopupContainer, popupClassName, dropdownClassName, listHeight = 256, placement, listItemHeight: customListItemHeight, size: customizeSize, disabled: customDisabled, notFoundContent, status: customStatus, builtinPlacements, dropdownMatchSelectWidth, popupMatchSelectWidth, direction: propDirection, style, allowClear, variant: customizeVariant, dropdownStyle, transitionName, tagRender, maxCount, prefix, dropdownRender, popupRender, onDropdownVisibleChange, onOpenChange, styles, classNames } = props, rest = __rest(props, [
        "prefixCls",
        "bordered",
        "className",
        "rootClassName",
        "getPopupContainer",
        "popupClassName",
        "dropdownClassName",
        "listHeight",
        "placement",
        "listItemHeight",
        "size",
        "disabled",
        "notFoundContent",
        "status",
        "builtinPlacements",
        "dropdownMatchSelectWidth",
        "popupMatchSelectWidth",
        "direction",
        "style",
        "allowClear",
        "variant",
        "dropdownStyle",
        "transitionName",
        "tagRender",
        "maxCount",
        "prefix",
        "dropdownRender",
        "popupRender",
        "onDropdownVisibleChange",
        "onOpenChange",
        "styles",
        "classNames"
    ]);
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, renderEmpty, direction: contextDirection, virtual, popupMatchSelectWidth: contextPopupMatchSelectWidth, popupOverflow } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { showSearch, style: contextStyle, styles: contextStyles, className: contextClassName, classNames: contextClassNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentConfig"])('select');
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const listItemHeight = customListItemHeight !== null && customListItemHeight !== void 0 ? customListItemHeight : token === null || token === void 0 ? void 0 : token.controlHeight;
    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const [variant, enableVariantCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('select', customizeVariant, bordered);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$style$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const { mode: m } = props;
        if (m === 'combobox') {
            return undefined;
        }
        if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
            return 'combobox';
        }
        return m;
    }, [
        props.mode
    ]);
    const isMultiple = mode === 'multiple' || mode === 'tags';
    const showSuffixIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$useShowArrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.suffixIcon, props.showArrow);
    const mergedPopupMatchSelectWidth = (_a = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : contextPopupMatchSelectWidth;
    const mergedPopupStyle = ((_b = styles === null || styles === void 0 ? void 0 : styles.popup) === null || _b === void 0 ? void 0 : _b.root) || ((_c = contextStyles.popup) === null || _c === void 0 ? void 0 : _c.root) || dropdownStyle;
    const mergedPopupRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$usePopupRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(popupRender || dropdownRender);
    const mergedOnOpenChange = onOpenChange || onDropdownVisibleChange;
    // ===================== Form Status =====================
    const { status: contextStatus, hasFeedback, isFormItemInput, feedbackIcon } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMergedStatus"])(contextStatus, customStatus);
    // ===================== Empty =====================
    let mergedNotFound;
    if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
    } else if (mode === 'combobox') {
        mergedNotFound = null;
    } else {
        mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$defaultRenderEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            componentName: "Select"
        });
    }
    // ===================== Icons =====================
    const { suffixIcon, itemIcon, removeIcon, clearIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$useIcons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Object.assign(Object.assign({}, rest), {
        multiple: isMultiple,
        hasFeedback,
        feedbackIcon,
        showSuffixIcon,
        prefixCls,
        componentName: 'Select'
    }));
    const mergedAllowClear = allowClear === true ? {
        clearIcon
    } : allowClear;
    const selectProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$util$40$5$2e$44$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$util$2f$es$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rest, [
        'suffixIcon',
        'itemIcon'
    ]);
    const mergedPopupClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(((_d = classNames === null || classNames === void 0 ? void 0 : classNames.popup) === null || _d === void 0 ? void 0 : _d.root) || ((_e = contextClassNames === null || contextClassNames === void 0 ? void 0 : contextClassNames.popup) === null || _e === void 0 ? void 0 : _e.root) || popupClassName || dropdownClassName, {
        [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl'
    }, rootClassName, contextClassNames.root, classNames === null || classNames === void 0 ? void 0 : classNames.root, cssVarCls, rootCls, hashId);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((ctx)=>{
        var _a;
        return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
    });
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        [`${prefixCls}-lg`]: mergedSize === 'large',
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-${variant}`]: enableVariantCls,
        [`${prefixCls}-in-form-item`]: isFormItemInput
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, contextClassName, className, contextClassNames.root, classNames === null || classNames === void 0 ? void 0 : classNames.root, rootClassName, cssVarCls, rootCls, hashId);
    // ===================== Placement =====================
    const memoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (placement !== undefined) {
            return placement;
        }
        return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }, [
        placement,
        direction
    ]);
    // ====================== Warning ======================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devUseWarning"])('Select');
        const deprecatedProps = {
            dropdownMatchSelectWidth: 'popupMatchSelectWidth',
            dropdownStyle: 'styles.popup.root',
            dropdownClassName: 'classNames.popup.root',
            popupClassName: 'classNames.popup.root',
            dropdownRender: 'popupRender',
            onDropdownVisibleChange: 'onOpenChange',
            bordered: 'variant'
        };
        Object.entries(deprecatedProps).forEach(([oldProp, newProp])=>{
            warning.deprecated(!(oldProp in props), oldProp, newProp);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!('showArrow' in props), 'deprecated', '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.') : ("TURBOPACK unreachable", undefined);
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof maxCount !== 'undefined' && !isMultiple), 'usage', '`maxCount` only works with mode `multiple` or `tags`') : ("TURBOPACK unreachable", undefined);
    }
    // ====================== zIndex =========================
    const [zIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useZIndex"])('SelectLike', mergedPopupStyle === null || mergedPopupStyle === void 0 ? void 0 : mergedPopupStyle.zIndex);
    // ====================== Render =======================
    return wrapCSSVar(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], Object.assign({
        ref: ref,
        virtual: virtual,
        showSearch: showSearch
    }, selectProps, {
        style: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.root), styles === null || styles === void 0 ? void 0 : styles.root), contextStyle), style),
        dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
        transitionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'slide-up', transitionName),
        builtinPlacements: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$mergedBuiltinPlacements$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(builtinPlacements, popupOverflow),
        listHeight: listHeight,
        listItemHeight: listItemHeight,
        mode: mode,
        prefixCls: prefixCls,
        placement: memoPlacement,
        direction: direction,
        prefix: prefix,
        suffixIcon: suffixIcon,
        menuItemSelectedIcon: itemIcon,
        removeIcon: removeIcon,
        allowClear: mergedAllowClear,
        notFoundContent: mergedNotFound,
        className: mergedClassName,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        dropdownClassName: mergedPopupClassName,
        disabled: mergedDisabled,
        dropdownStyle: Object.assign(Object.assign({}, mergedPopupStyle), {
            zIndex
        }),
        maxCount: isMultiple ? maxCount : undefined,
        tagRender: isMultiple ? tagRender : undefined,
        dropdownRender: mergedPopupRender,
        onDropdownVisibleChange: mergedOnOpenChange
    })));
};
if ("TURBOPACK compile-time truthy", 1) {
    InternalSelect.displayName = 'Select';
}
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(InternalSelect);
// We don't care debug panel
/* istanbul ignore next */ const PurePanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$_util$2f$PurePanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Select, 'dropdownAlign');
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$Option$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Option$3e$__["Option"];
Select.OptGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rc$2d$select$40$14$2e$16$2e$8_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$rc$2d$select$2f$es$2f$OptGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__OptGroup$3e$__["OptGroup"];
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if ("TURBOPACK compile-time truthy", 1) {
    Select.displayName = 'Select';
}
const __TURBOPACK__default__export__ = Select;
}}),
"[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/index.js [app-ssr] (ecmascript) <export default as Select>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Select": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$antd$40$5$2e$27$2e$6_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/antd@5.27.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/antd/es/select/index.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=24635_antd_es_select_70899f._.js.map