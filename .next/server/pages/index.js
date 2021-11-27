"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/index.js + 12 modules
var components = __webpack_require__(543);
// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(802);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./sections/AdjacentPosts.jsx




const AdjacentPosts = ({ createdAt , slug  })=>{
    const { 0: adjacentPost , 1: setAdjacentPost  } = useState(null);
    const { 0: dataLoaded , 1: setDataLoaded  } = useState(false);
    useEffect(()=>{
        getAdjacentPosts(createdAt, slug).then((result)=>{
            setAdjacentPost(result);
            setDataLoaded(true);
        });
    }, [
        slug
    ]);
    return(/*#__PURE__*/ _jsx("div", {
        className: "grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8",
        children: dataLoaded && /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                adjacentPost.previous && /*#__PURE__*/ _jsx("div", {
                    className: `${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
                    children: /*#__PURE__*/ _jsx(AdjacentPostCard, {
                        post: adjacentPost.previous,
                        position: "LEFT"
                    })
                }),
                adjacentPost.next && /*#__PURE__*/ _jsx("div", {
                    className: `${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`,
                    children: /*#__PURE__*/ _jsx(AdjacentPostCard, {
                        post: adjacentPost.next,
                        position: "RIGHT"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const sections_AdjacentPosts = ((/* unused pure expression or super */ null && (AdjacentPosts)));

;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
;// CONCATENATED MODULE: ./sections/FeaturedPosts.jsx






const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 1024
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 1024,
            min: 768
        },
        items: 3
    },
    tablet: {
        breakpoint: {
            max: 768,
            min: 640
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 640,
            min: 0
        },
        items: 1
    }
};
const FeaturedPosts = ()=>{
    const { 0: featuredPosts , 1: setFeaturedPosts  } = (0,external_react_.useState)([]);
    const { 0: dataLoaded , 1: setDataLoaded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        (0,services/* getFeaturedPosts */.mH)().then((result)=>{
            setFeaturedPosts(result);
            setDataLoaded(true);
        });
    }, []);
    const customLeftArrow = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 text-white w-full",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
            })
        })
    });
    const customRightArrow = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 text-white w-full",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M14 5l7 7m0 0l-7 7m7-7H3"
            })
        })
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
            infinite: true,
            customLeftArrow: customLeftArrow,
            customRightArrow: customRightArrow,
            responsive: responsive,
            itemClass: "px-4",
            children: dataLoaded && featuredPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components/* FeaturedPostCard */.Cp, {
                    post: post
                }, index)
            )
        })
    }));
};
/* harmony default export */ const sections_FeaturedPosts = (FeaturedPosts);

;// CONCATENATED MODULE: ./sections/index.js



;// CONCATENATED MODULE: ./pages/index.js





function Home({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container mx-auto px-10 mb-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "CMS Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sections_FeaturedPosts, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:col-span-8 col-span-1",
                        children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components/* PostCard */.y4, {
                                post: post.node
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:col-span-4 col-span-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:sticky relative top-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* PostWidget */.c_, {
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* Categories */.Rj, {
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const posts = await (0,services/* getPosts */.Jq)() || [];
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 264:
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ 245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,543], () => (__webpack_exec__(688)));
module.exports = __webpack_exports__;

})();