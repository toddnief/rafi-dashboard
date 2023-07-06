"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/ControlPanel.js":
/*!************************************!*\
  !*** ./components/ControlPanel.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ControlPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! valtio */ \"(app-client)/./node_modules/valtio/esm/react.mjs\");\n/* harmony import */ var _lib_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/state */ \"(app-client)/./lib/state.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"(app-client)/./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.css */ \"(app-client)/./styles/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// app.js\n\n\n\n\n\nfunction ControlPanel() {\n    _s();\n    const snapshot = (0,valtio__WEBPACK_IMPORTED_MODULE_5__.useSnapshot)(_lib_state__WEBPACK_IMPORTED_MODULE_2__.state.stateData);\n    //TODO: still not totally confident on when to use state vs snapshot and what triggers a reload\n    if (!snapshot.isDataLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    const handleCheckboxChange = (event)=>{\n        const { checked, value } = event.target;\n        // adjust filtered states\n        if (checked) {\n            _lib_state__WEBPACK_IMPORTED_MODULE_2__.state.stateData.filteredStates.push(value);\n        } else {\n            const index = _lib_state__WEBPACK_IMPORTED_MODULE_2__.state.filteredStates.indexOf(value);\n            if (index !== -1) {\n                _lib_state__WEBPACK_IMPORTED_MODULE_2__.state.stateData.filteredStates.splice(index, 1);\n            }\n        }\n        (0,_lib_state__WEBPACK_IMPORTED_MODULE_2__.updateFilteredData)();\n    };\n    const selectAll = ()=>{\n        _lib_state__WEBPACK_IMPORTED_MODULE_2__.state.stateData.filteredStates = [\n            ..._lib_state__WEBPACK_IMPORTED_MODULE_2__.state.stateData.allStates\n        ];\n        (0,_lib_state__WEBPACK_IMPORTED_MODULE_2__.updateFilteredData)();\n    };\n    const selectNone = ()=>{\n        _lib_state__WEBPACK_IMPORTED_MODULE_2__.state.stateData.filteredStates.length = 0;\n        (0,_lib_state__WEBPACK_IMPORTED_MODULE_2__.updateFilteredData)();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-xs mx-auto\",\n        children: [\n            snapshot.allStates.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block mt-4 checkbox-label\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-700\",\n                            children: option\n                        }, void 0, false, {\n                            fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"mt-1 block w-full rounded-md bg-gray-100 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500\",\n                            value: option,\n                            type: \"checkbox\",\n                            checked: snapshot.filteredStates.includes(option),\n                            onChange: handleCheckboxChange\n                        }, void 0, false, {\n                            fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: selectAll,\n                children: \"Select All\"\n            }, void 0, false, {\n                fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: selectNone,\n                children: \"Select None\"\n            }, void 0, false, {\n                fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/ControlPanel.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ControlPanel, \"nwkezjGz9Ut5VL+UehrpIKP3jU8=\", false, function() {\n    return [\n        valtio__WEBPACK_IMPORTED_MODULE_5__.useSnapshot\n    ];\n});\n_c = ControlPanel;\nvar _c;\n$RefreshReg$(_c, \"ControlPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250cm9sUGFuZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVM7QUFDMEM7QUFDZDtBQUVvQjtBQUV2QjtBQUNKO0FBRWYsU0FBU007O0lBQ3RCLE1BQU1DLFdBQVdKLG1EQUFXQSxDQUFDQyw2Q0FBS0EsQ0FBQ0k7SUFFbkMsK0ZBQStGO0lBRS9GLElBQUksQ0FBQ0QsU0FBU0UsY0FBYztRQUMxQixxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNkO0lBRUEsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzVCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUc7UUFFakMseUJBQXlCO1FBQ3pCLElBQUlGLFNBQVM7WUFDWFQsNkNBQUtBLENBQUNJLFVBQVVRLGVBQWVDLEtBQUtIO1FBQ3RDLE9BQU87WUFDTCxNQUFNSSxRQUFRZCw2Q0FBS0EsQ0FBQ1ksZUFBZUcsUUFBUUw7WUFDM0MsSUFBSUksVUFBVSxDQUFDLEdBQUc7Z0JBQ2hCZCw2Q0FBS0EsQ0FBQ0ksVUFBVVEsZUFBZUksT0FBT0YsT0FBTztZQUMvQztRQUNGO1FBRUFiLDhEQUFrQkE7SUFDcEI7SUFFQSxNQUFNZ0IsWUFBWTtRQUNoQmpCLDZDQUFLQSxDQUFDSSxVQUFVUSxpQkFBaUI7ZUFBSVosNkNBQUtBLENBQUNJLFVBQVVjO1NBQVU7UUFDL0RqQiw4REFBa0JBO0lBQ3BCO0lBRUEsTUFBTWtCLGFBQWE7UUFDakJuQiw2Q0FBS0EsQ0FBQ0ksVUFBVVEsZUFBZVEsU0FBUztRQUN4Q25CLDhEQUFrQkE7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSWUsV0FBVTs7WUFDWmxCLFNBQVNlLFVBQVVJLElBQUksQ0FBQ0MsUUFBUVQsc0JBQy9CLDhEQUFDVTtvQkFBa0JILFdBQVU7O3NDQUMzQiw4REFBQ0k7NEJBQUtKLFdBQVU7c0NBQWlCRTs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQ0NMLFdBQVU7NEJBQ1ZYLE9BQU9hOzRCQUNQSSxNQUFLOzRCQUNMbEIsU0FBU04sU0FBU1MsZUFBZWdCLFNBQVNMOzRCQUMxQ00sVUFBVXRCOzs7Ozs7O21CQVBGTzs7Ozs7MEJBV2QsOERBQUNnQjtnQkFBT0MsU0FBU2Q7MEJBQVc7Ozs7OzswQkFDNUIsOERBQUNhO2dCQUFPQyxTQUFTWjswQkFBWTs7Ozs7Ozs7Ozs7O0FBR25DO0dBckR3QmpCOztRQUNMSCwrQ0FBV0E7OztLQURORyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC5qcz9iNjIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gYXBwLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU25hcHNob3QgfSBmcm9tIFwidmFsdGlvXCI7XG5cbmltcG9ydCB7IHN0YXRlLCB1cGRhdGVGaWx0ZXJlZERhdGEgfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XG5cbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJvbFBhbmVsKCkge1xuICBjb25zdCBzbmFwc2hvdCA9IHVzZVNuYXBzaG90KHN0YXRlLnN0YXRlRGF0YSk7XG5cbiAgLy9UT0RPOiBzdGlsbCBub3QgdG90YWxseSBjb25maWRlbnQgb24gd2hlbiB0byB1c2Ugc3RhdGUgdnMgc25hcHNob3QgYW5kIHdoYXQgdHJpZ2dlcnMgYSByZWxvYWRcblxuICBpZiAoIXNuYXBzaG90LmlzRGF0YUxvYWRlZCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgY2hlY2tlZCwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIGFkanVzdCBmaWx0ZXJlZCBzdGF0ZXNcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgc3RhdGUuc3RhdGVEYXRhLmZpbHRlcmVkU3RhdGVzLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmZpbHRlcmVkU3RhdGVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzdGF0ZS5zdGF0ZURhdGEuZmlsdGVyZWRTdGF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVGaWx0ZXJlZERhdGEoKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RBbGwgPSAoKSA9PiB7XG4gICAgc3RhdGUuc3RhdGVEYXRhLmZpbHRlcmVkU3RhdGVzID0gWy4uLnN0YXRlLnN0YXRlRGF0YS5hbGxTdGF0ZXNdO1xuICAgIHVwZGF0ZUZpbHRlcmVkRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdE5vbmUgPSAoKSA9PiB7XG4gICAgc3RhdGUuc3RhdGVEYXRhLmZpbHRlcmVkU3RhdGVzLmxlbmd0aCA9IDA7XG4gICAgdXBkYXRlRmlsdGVyZWREYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14cyBteC1hdXRvXCI+XG4gICAgICB7c25hcHNob3QuYWxsU3RhdGVzLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGFiZWwga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBjaGVja2JveC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57b3B0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbn1cbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtzbmFwc2hvdC5maWx0ZXJlZFN0YXRlcy5pbmNsdWRlcyhvcHRpb24pfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17c2VsZWN0QWxsfT5TZWxlY3QgQWxsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbGVjdE5vbmV9PlNlbGVjdCBOb25lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNuYXBzaG90Iiwic3RhdGUiLCJ1cGRhdGVGaWx0ZXJlZERhdGEiLCJDb250cm9sUGFuZWwiLCJzbmFwc2hvdCIsInN0YXRlRGF0YSIsImlzRGF0YUxvYWRlZCIsImRpdiIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwiZXZlbnQiLCJjaGVja2VkIiwidmFsdWUiLCJ0YXJnZXQiLCJmaWx0ZXJlZFN0YXRlcyIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzZWxlY3RBbGwiLCJhbGxTdGF0ZXMiLCJzZWxlY3ROb25lIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwibWFwIiwib3B0aW9uIiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwiaW5jbHVkZXMiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/ControlPanel.js\n"));

/***/ })

});