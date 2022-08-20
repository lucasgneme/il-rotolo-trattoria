"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 1641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Layout = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-[100%] max-w-5xl mx-auto border-none p-2 pb-0 bg-transparent font-crete",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 4581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/HamburgerIcon/HamburgerIcon.tsx


const HamburgerIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        id: "barMenuBtn",
        className: "hamburger hamburger--collapse",
        type: "button",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "hamburger-box",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "hamburger-inner"
            })
        })
    });
};
/* harmony default export */ const HamburgerIcon_HamburgerIcon = (HamburgerIcon);

;// CONCATENATED MODULE: ./components/MobileIcons/FacebookIconMobile.tsx


const FacebookIconMobile = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-2 -2 24 24",
        width: 32,
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            })
        ]
    });
/* harmony default export */ const MobileIcons_FacebookIconMobile = (FacebookIconMobile);

;// CONCATENATED MODULE: ./components/MobileIcons/InstagramIconMobile.tsx


const InstagramIconMobile = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-2 -2 24 24",
        width: 32,
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 15.156,
                cy: 4.858,
                r: 1.237
            })
        ]
    });
/* harmony default export */ const MobileIcons_InstagramIconMobile = (InstagramIconMobile);

;// CONCATENATED MODULE: ./components/MobileIcons/WhatsAppIconMobile.tsx


const WhatsAppIconMobile = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-2 -2 24 24",
        width: 32,
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m14.842 12.045-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z"
            })
        ]
    });
/* harmony default export */ const MobileIcons_WhatsAppIconMobile = (WhatsAppIconMobile);

;// CONCATENATED MODULE: ./components/Navbar.tsx







const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed md:hidden flex items-center justify-evenly bottom-0 h-10 w-full m-0 bg-[#162d0cd3] text-white rounded-t-lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://www.facebook.com/saborsalud01/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MobileIcons_FacebookIconMobile, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://www.instagram.com/ilrotolotrattoria/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MobileIcons_InstagramIconMobile, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://wa.me/c/5492657291033",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MobileIcons_WhatsAppIconMobile, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HamburgerIcon_HamburgerIcon, {})
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;