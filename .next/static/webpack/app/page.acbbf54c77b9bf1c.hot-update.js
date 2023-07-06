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

/***/ "(app-client)/./components/DeckGLMap.js":
/*!*********************************!*\
  !*** ./components/DeckGLMap.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeckGLMap: function() { return /* binding */ DeckGLMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var valtio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! valtio */ \"(app-client)/./node_modules/valtio/esm/react.mjs\");\n/* harmony import */ var _lib_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/state */ \"(app-client)/./lib/state.js\");\n/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @deck.gl/react */ \"(app-client)/./node_modules/@deck.gl/react/dist/esm/deckgl.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/layers */ \"(app-client)/./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-layer.js\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @deck.gl/layers */ \"(app-client)/./node_modules/@deck.gl/layers/dist/esm/icon-layer/icon-layer.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ \"(app-client)/./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var colorbrewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! colorbrewer */ \"(app-client)/./node_modules/colorbrewer/index.es.js\");\n/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinycolor2 */ \"(app-client)/./node_modules/tinycolor2/esm/tinycolor.js\");\n/* __next_internal_client_entry_do_not_use__ DeckGLMap auto */ \nvar _s = $RefreshSig$();\n// app.js\n\n\n\n\n\n\n\n\n// import bbox from \"@turf/bbox\";\n// Set your mapbox access token here\nconst MAPBOX_ACCESS_TOKEN = \"pk.eyJ1IjoidG9kZG5pZWYiLCJhIjoiY2xncGpwZnRtMHR0aTNxcDlkN3FzY3h0eiJ9.dGj0-yOWwF05hS7qeb_SVw\";\nconst plantColorPalette = (()=>{\n    const plantAccessColors = colorbrewer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Set3[4];\n    const plantAccess = [\n        \"One Plant\",\n        \"Two Plants\",\n        \"Three Plants\",\n        \"4+ Plants\"\n    ];\n    const hexPalette = Object.fromEntries(plantAccess.map((access, i)=>[\n            access,\n            plantAccessColors[i]\n        ]));\n    const rgbPalette = Object.entries(hexPalette).map((param)=>{\n        let [key, hex] = param;\n        return [\n            key,\n            Object.values((0,tinycolor2__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hex).toRgb())\n        ];\n    });\n    for(let key in rgbPalette){\n        let rgb = rgbPalette[key][1];\n        rgb[3] = 255;\n        rgbPalette[key][1] = rgb;\n    }\n    return Object.fromEntries(rgbPalette);\n})();\nconst markerPalette = {\n    farm: [\n        220,\n        220,\n        220,\n        255\n    ],\n    plant: [\n        255,\n        255,\n        255,\n        255\n    ],\n    default: [\n        140,\n        140,\n        140,\n        255\n    ]\n};\nconst colorPalette = (()=>{\n    // return Object.assign(plantColorPalette, corpColorPalette, markerPalette)\n    return Object.assign(plantColorPalette, markerPalette);\n})();\n// TODO: I'm unsure how to set this up so that it gets the size of the container that this is contained in\nfunction calculateZoom() {\n    const currentGeojson = {\n        type: \"FeatureCollection\",\n        features: _lib_state__WEBPACK_IMPORTED_MODULE_2__.state.filteredCaptureAreas\n    };\n    let bbox = bbox(currentGeojson);\n    let width = container.getBoundingClientRect().width;\n    let height = container.getBoundingClientRect().height;\n    let fittedViewport = new deck.WebMercatorViewport({\n        width,\n        height\n    });\n    let currentLatLonZoom = fittedViewport.fitBounds([\n        [\n            bbox[0],\n            bbox[1]\n        ],\n        [\n            bbox[2],\n            bbox[3]\n        ]\n    ], {\n        width,\n        height\n    });\n}\nfunction DeckGLMap() {\n    _s();\n    // Get a snapshot of the current state\n    const { dataSnap, mapSnap } = (0,valtio__WEBPACK_IMPORTED_MODULE_6__.useSnapshot)(_lib_state__WEBPACK_IMPORTED_MODULE_2__.state);\n    console.log((0,valtio__WEBPACK_IMPORTED_MODULE_6__.useSnapshot)(_lib_state__WEBPACK_IMPORTED_MODULE_2__.state));\n    console.log(dataSnap);\n    // Don't render the component until the data is loaded\n    if (!dataSnap.isDataLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/DeckGLMap.js\",\n            lineNumber: 80,\n            columnNumber: 12\n        }, this);\n    }\n    // console.log(snapshot.poultryPlants)\n    const plantAccessLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n        // data: snapshot.stateAccessShapes,\n        data: dataSnap.filteredCaptureAreas,\n        pickable: true,\n        // TODO: maybe add tooltip back\n        // onHover: onHoverPlantAccess,\n        getFillColor: function(dataRow) {\n            switch(dataRow.properties.plant_access){\n                case 1:\n                    return colorPalette[\"One Plant\"];\n                case 2:\n                    return colorPalette[\"Two Plants\"];\n                case 3:\n                    return colorPalette[\"Three Plants\"];\n                case 4:\n                    return colorPalette[\"4+ Plants\"];\n            }\n        }\n    });\n    // console.log(counterglowFarms)\n    const farmLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n        id: \"icon-layer\",\n        data: dataSnap.counterglowFarms.features,\n        pickable: true,\n        iconAtlas: \"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png\",\n        iconMapping: {\n            marker: {\n                x: 0,\n                y: 0,\n                width: 128,\n                height: 128,\n                mask: true\n            }\n        },\n        //TODO: Make farms less chaotic\n        getIcon: (d)=>\"marker\",\n        getPosition: (d)=>d.geometry.coordinates,\n        getSize: (d)=>10,\n        getColor: (d)=>colorPalette.farm\n    });\n    console.log(snapshot.poultryPlants.features[0].properties[\"Full Address\"]);\n    const plantLayer = new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n        id: \"icon-layer\",\n        data: dataSnap.poultryPlants.features,\n        iconAtlas: \"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png\",\n        iconMapping: {\n            marker: {\n                x: 0,\n                y: 0,\n                width: 128,\n                height: 128,\n                mask: true\n            }\n        },\n        getIcon: (d)=>\"marker\",\n        getPosition: (d)=>d.geometry.coordinates,\n        getSize: 35,\n        getColor: colorPalette.plant,\n        getTooltip: (d)=>\"Address: \".concat(d.properties[\"Full Address\"]),\n        pickable: true\n    });\n    const deck1 = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deck_gl_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        initialViewState: mapSnap.mapZoom,\n        controller: true,\n        layers: [\n            plantAccessLayer,\n            plantLayer,\n            farmLayer\n        ],\n        pickingRadius: 200,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Map, {\n            mapStyle: \"mapbox://styles/mapbox/dark-v9\",\n            mapboxAccessToken: MAPBOX_ACCESS_TOKEN\n        }, void 0, false, {\n            fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/DeckGLMap.js\",\n            lineNumber: 153,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/toddnief/Library/CloudStorage/Dropbox/1-Projects/dsi/rafi-poultry/todds-rafi-dashboard/components/DeckGLMap.js\",\n        lineNumber: 147,\n        columnNumber: 5\n    }, this);\n    return deck1;\n}\n_s(DeckGLMap, \"N41YbT7akca0pgmOQh9vN5rU8Xw=\", false, function() {\n    return [\n        valtio__WEBPACK_IMPORTED_MODULE_6__.useSnapshot,\n        valtio__WEBPACK_IMPORTED_MODULE_6__.useSnapshot\n    ];\n});\n_c = DeckGLMap;\nvar _c;\n$RefreshReg$(_c, \"DeckGLMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7WUFBQzlCO1lBQWtCeUI7WUFBWWxCO1NBQVU7UUFDakR3QixlQUFlO2tCQUVmLDRFQUFDaEYsNkNBQUdBO1lBQ0ZpRixVQUFTO1lBQ1RDLG1CQUFtQi9FOzs7Ozs7Ozs7OztJQUt6QixPQUFPbUM7QUFDVDtHQTNGZ0JJOztRQUVnQmhELCtDQUFXQTtRQUU3QkEsK0NBQVdBOzs7S0FKVGdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGVja0dMTWFwLmpzPzZmMDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4vLyBhcHAuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwcm94eSwgdXNlU25hcHNob3QgfSBmcm9tIFwidmFsdGlvXCI7XG5cbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xuXG5pbXBvcnQgRGVja0dMIGZyb20gXCJAZGVjay5nbC9yZWFjdFwiO1xuaW1wb3J0IHsgTGluZUxheWVyLCBJY29uTGF5ZXIsIEdlb0pzb25MYXllciB9IGZyb20gXCJAZGVjay5nbC9sYXllcnNcIjtcbmltcG9ydCB7IE1hcCB9IGZyb20gXCJyZWFjdC1tYXAtZ2xcIjtcblxuaW1wb3J0IGNvbG9yYnJld2VyIGZyb20gXCJjb2xvcmJyZXdlclwiO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tIFwidGlueWNvbG9yMlwiO1xuLy8gaW1wb3J0IGJib3ggZnJvbSBcIkB0dXJmL2Jib3hcIjtcblxuLy8gU2V0IHlvdXIgbWFwYm94IGFjY2VzcyB0b2tlbiBoZXJlXG5jb25zdCBNQVBCT1hfQUNDRVNTX1RPS0VOID1cbiAgXCJway5leUoxSWpvaWRHOWtaRzVwWldZaUxDSmhJam9pWTJ4bmNHcHdablJ0TUhSMGFUTnhjRGxrTjNGelkzaDBlaUo5LmRHajAteU9Xd0YwNWhTN3FlYl9TVndcIjtcblxuY29uc3QgcGxhbnRDb2xvclBhbGV0dGUgPSAoKCkgPT4ge1xuICBjb25zdCBwbGFudEFjY2Vzc0NvbG9ycyA9IGNvbG9yYnJld2VyLlNldDNbNF07XG4gIGNvbnN0IHBsYW50QWNjZXNzID0gW1wiT25lIFBsYW50XCIsIFwiVHdvIFBsYW50c1wiLCBcIlRocmVlIFBsYW50c1wiLCBcIjQrIFBsYW50c1wiXTtcblxuICBjb25zdCBoZXhQYWxldHRlID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIHBsYW50QWNjZXNzLm1hcCgoYWNjZXNzLCBpKSA9PiBbYWNjZXNzLCBwbGFudEFjY2Vzc0NvbG9yc1tpXV0pXG4gICk7XG4gIGNvbnN0IHJnYlBhbGV0dGUgPSBPYmplY3QuZW50cmllcyhoZXhQYWxldHRlKS5tYXAoKFtrZXksIGhleF0pID0+IHtcbiAgICByZXR1cm4gW2tleSwgT2JqZWN0LnZhbHVlcyh0aW55Y29sb3IoaGV4KS50b1JnYigpKV07XG4gIH0pO1xuXG4gIGZvciAobGV0IGtleSBpbiByZ2JQYWxldHRlKSB7XG4gICAgbGV0IHJnYiA9IHJnYlBhbGV0dGVba2V5XVsxXTtcbiAgICByZ2JbM10gPSAyNTU7XG4gICAgcmdiUGFsZXR0ZVtrZXldWzFdID0gcmdiO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhyZ2JQYWxldHRlKTtcbn0pKCk7XG5cbmNvbnN0IG1hcmtlclBhbGV0dGUgPSB7XG4gIGZhcm06IFsyMjAsIDIyMCwgMjIwLCAyNTVdLFxuICBwbGFudDogWzI1NSwgMjU1LCAyNTUsIDI1NV0sXG4gIGRlZmF1bHQ6IFsxNDAsIDE0MCwgMTQwLCAyNTVdLFxufTtcblxuY29uc3QgY29sb3JQYWxldHRlID0gKCgpID0+IHtcbiAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24ocGxhbnRDb2xvclBhbGV0dGUsIGNvcnBDb2xvclBhbGV0dGUsIG1hcmtlclBhbGV0dGUpXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHBsYW50Q29sb3JQYWxldHRlLCBtYXJrZXJQYWxldHRlKTtcbn0pKCk7XG5cbi8vIFRPRE86IEknbSB1bnN1cmUgaG93IHRvIHNldCB0aGlzIHVwIHNvIHRoYXQgaXQgZ2V0cyB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIHRoYXQgdGhpcyBpcyBjb250YWluZWQgaW5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVpvb20oKSB7XG4gIGNvbnN0IGN1cnJlbnRHZW9qc29uID0ge1xuICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICBmZWF0dXJlczogc3RhdGUuZmlsdGVyZWRDYXB0dXJlQXJlYXMsXG4gIH07XG4gIGxldCBiYm94ID0gYmJveChjdXJyZW50R2VvanNvbik7XG4gIGxldCB3aWR0aCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgbGV0IGhlaWdodCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGxldCBmaXR0ZWRWaWV3cG9ydCA9IG5ldyBkZWNrLldlYk1lcmNhdG9yVmlld3BvcnQoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICBsZXQgY3VycmVudExhdExvblpvb20gPSBmaXR0ZWRWaWV3cG9ydC5maXRCb3VuZHMoXG4gICAgW1xuICAgICAgW2Jib3hbMF0sIGJib3hbMV1dLFxuICAgICAgW2Jib3hbMl0sIGJib3hbM11dLFxuICAgIF0sXG4gICAgeyB3aWR0aCwgaGVpZ2h0IH1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlY2tHTE1hcCgpIHtcbiAgLy8gR2V0IGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgY29uc3QgeyBkYXRhU25hcCwgbWFwU25hcCB9ID0gdXNlU25hcHNob3Qoc3RhdGUpO1xuXG4gIGNvbnNvbGUubG9nKHVzZVNuYXBzaG90KHN0YXRlKSk7XG5cbiAgY29uc29sZS5sb2coZGF0YVNuYXApO1xuXG4gIC8vIERvbid0IHJlbmRlciB0aGUgY29tcG9uZW50IHVudGlsIHRoZSBkYXRhIGlzIGxvYWRlZFxuICBpZiAoIWRhdGFTbmFwLmlzRGF0YUxvYWRlZCkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhzbmFwc2hvdC5wb3VsdHJ5UGxhbnRzKVxuXG4gIGNvbnN0IHBsYW50QWNjZXNzTGF5ZXIgPSBuZXcgR2VvSnNvbkxheWVyKHtcbiAgICAvLyBkYXRhOiBzbmFwc2hvdC5zdGF0ZUFjY2Vzc1NoYXBlcyxcbiAgICBkYXRhOiBkYXRhU25hcC5maWx0ZXJlZENhcHR1cmVBcmVhcyxcblxuICAgIHBpY2thYmxlOiB0cnVlLFxuICAgIC8vIFRPRE86IG1heWJlIGFkZCB0b29sdGlwIGJhY2tcbiAgICAvLyBvbkhvdmVyOiBvbkhvdmVyUGxhbnRBY2Nlc3MsXG5cbiAgICBnZXRGaWxsQ29sb3I6IGZ1bmN0aW9uIChkYXRhUm93KSB7XG4gICAgICBzd2l0Y2ggKGRhdGFSb3cucHJvcGVydGllcy5wbGFudF9hY2Nlc3MpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBjb2xvclBhbGV0dGVbXCJPbmUgUGxhbnRcIl07XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gY29sb3JQYWxldHRlW1wiVHdvIFBsYW50c1wiXTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBjb2xvclBhbGV0dGVbXCJUaHJlZSBQbGFudHNcIl07XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gY29sb3JQYWxldHRlW1wiNCsgUGxhbnRzXCJdO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKGNvdW50ZXJnbG93RmFybXMpXG5cbiAgY29uc3QgZmFybUxheWVyID0gbmV3IEljb25MYXllcih7XG4gICAgaWQ6IFwiaWNvbi1sYXllclwiLFxuICAgIGRhdGE6IGRhdGFTbmFwLmNvdW50ZXJnbG93RmFybXMuZmVhdHVyZXMsXG4gICAgcGlja2FibGU6IHRydWUsXG4gICAgaWNvbkF0bGFzOlxuICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdmlzZ2wvZGVjay5nbC1kYXRhL21hc3Rlci93ZWJzaXRlL2ljb24tYXRsYXMucG5nXCIsXG4gICAgaWNvbk1hcHBpbmc6IHtcbiAgICAgIG1hcmtlcjogeyB4OiAwLCB5OiAwLCB3aWR0aDogMTI4LCBoZWlnaHQ6IDEyOCwgbWFzazogdHJ1ZSB9LFxuICAgIH0sXG5cbiAgICAvL1RPRE86IE1ha2UgZmFybXMgbGVzcyBjaGFvdGljXG4gICAgZ2V0SWNvbjogKGQpID0+IFwibWFya2VyXCIsXG4gICAgZ2V0UG9zaXRpb246IChkKSA9PiBkLmdlb21ldHJ5LmNvb3JkaW5hdGVzLFxuICAgIGdldFNpemU6IChkKSA9PiAxMCxcbiAgICBnZXRDb2xvcjogKGQpID0+IGNvbG9yUGFsZXR0ZS5mYXJtLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhzbmFwc2hvdC5wb3VsdHJ5UGxhbnRzLmZlYXR1cmVzWzBdLnByb3BlcnRpZXNbXCJGdWxsIEFkZHJlc3NcIl0pO1xuXG4gIGNvbnN0IHBsYW50TGF5ZXIgPSBuZXcgSWNvbkxheWVyKHtcbiAgICBpZDogXCJpY29uLWxheWVyXCIsXG4gICAgZGF0YTogZGF0YVNuYXAucG91bHRyeVBsYW50cy5mZWF0dXJlcyxcbiAgICBpY29uQXRsYXM6XG4gICAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS92aXNnbC9kZWNrLmdsLWRhdGEvbWFzdGVyL3dlYnNpdGUvaWNvbi1hdGxhcy5wbmdcIixcbiAgICBpY29uTWFwcGluZzoge1xuICAgICAgbWFya2VyOiB7IHg6IDAsIHk6IDAsIHdpZHRoOiAxMjgsIGhlaWdodDogMTI4LCBtYXNrOiB0cnVlIH0sXG4gICAgfSxcbiAgICBnZXRJY29uOiAoZCkgPT4gXCJtYXJrZXJcIixcbiAgICBnZXRQb3NpdGlvbjogKGQpID0+IGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsXG4gICAgZ2V0U2l6ZTogMzUsXG4gICAgZ2V0Q29sb3I6IGNvbG9yUGFsZXR0ZS5wbGFudCxcbiAgICBnZXRUb29sdGlwOiAoZCkgPT4gYEFkZHJlc3M6ICR7ZC5wcm9wZXJ0aWVzW1wiRnVsbCBBZGRyZXNzXCJdfWAsXG5cbiAgICBwaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBvbkhvdmVyOiBvbkhvdmVyUGxhbnRcbiAgfSk7XG5cbiAgY29uc3QgZGVjayA9IChcbiAgICA8RGVja0dMXG4gICAgICBpbml0aWFsVmlld1N0YXRlPXttYXBTbmFwLm1hcFpvb219XG4gICAgICBjb250cm9sbGVyPXt0cnVlfVxuICAgICAgbGF5ZXJzPXtbcGxhbnRBY2Nlc3NMYXllciwgcGxhbnRMYXllciwgZmFybUxheWVyXX1cbiAgICAgIHBpY2tpbmdSYWRpdXM9ezIwMH0gLy9UT0RPOiBpcyB0aGlzIHJpZ2h0P1xuICAgID5cbiAgICAgIDxNYXBcbiAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjlcIlxuICAgICAgICBtYXBib3hBY2Nlc3NUb2tlbj17TUFQQk9YX0FDQ0VTU19UT0tFTn1cbiAgICAgIC8+XG4gICAgPC9EZWNrR0w+XG4gICk7XG5cbiAgcmV0dXJuIGRlY2s7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb3h5IiwidXNlU25hcHNob3QiLCJzdGF0ZSIsIkRlY2tHTCIsIkxpbmVMYXllciIsIkljb25MYXllciIsIkdlb0pzb25MYXllciIsIk1hcCIsImNvbG9yYnJld2VyIiwidGlueWNvbG9yIiwiTUFQQk9YX0FDQ0VTU19UT0tFTiIsInBsYW50Q29sb3JQYWxldHRlIiwicGxhbnRBY2Nlc3NDb2xvcnMiLCJTZXQzIiwicGxhbnRBY2Nlc3MiLCJoZXhQYWxldHRlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJtYXAiLCJhY2Nlc3MiLCJpIiwicmdiUGFsZXR0ZSIsImVudHJpZXMiLCJrZXkiLCJoZXgiLCJ2YWx1ZXMiLCJ0b1JnYiIsInJnYiIsIm1hcmtlclBhbGV0dGUiLCJmYXJtIiwicGxhbnQiLCJkZWZhdWx0IiwiY29sb3JQYWxldHRlIiwiYXNzaWduIiwiY2FsY3VsYXRlWm9vbSIsImN1cnJlbnRHZW9qc29uIiwidHlwZSIsImZlYXR1cmVzIiwiZmlsdGVyZWRDYXB0dXJlQXJlYXMiLCJiYm94Iiwid2lkdGgiLCJjb250YWluZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJmaXR0ZWRWaWV3cG9ydCIsImRlY2siLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwiY3VycmVudExhdExvblpvb20iLCJmaXRCb3VuZHMiLCJEZWNrR0xNYXAiLCJkYXRhU25hcCIsIm1hcFNuYXAiLCJjb25zb2xlIiwibG9nIiwiaXNEYXRhTG9hZGVkIiwiZGl2IiwicGxhbnRBY2Nlc3NMYXllciIsImRhdGEiLCJwaWNrYWJsZSIsImdldEZpbGxDb2xvciIsImRhdGFSb3ciLCJwcm9wZXJ0aWVzIiwicGxhbnRfYWNjZXNzIiwiZmFybUxheWVyIiwiaWQiLCJjb3VudGVyZ2xvd0Zhcm1zIiwiaWNvbkF0bGFzIiwiaWNvbk1hcHBpbmciLCJtYXJrZXIiLCJ4IiwieSIsIm1hc2siLCJnZXRJY29uIiwiZCIsImdldFBvc2l0aW9uIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImdldFNpemUiLCJnZXRDb2xvciIsInNuYXBzaG90IiwicG91bHRyeVBsYW50cyIsInBsYW50TGF5ZXIiLCJnZXRUb29sdGlwIiwiaW5pdGlhbFZpZXdTdGF0ZSIsIm1hcFpvb20iLCJjb250cm9sbGVyIiwibGF5ZXJzIiwicGlja2luZ1JhZGl1cyIsIm1hcFN0eWxlIiwibWFwYm94QWNjZXNzVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/DeckGLMap.js\n"));

/***/ })

});