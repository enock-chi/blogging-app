"use strict";
exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S3": () => (/* reexport */ components_Author),
  "Rj": () => (/* reexport */ components_Categories),
  "HW": () => (/* reexport */ components_Comments),
  "tV": () => (/* reexport */ components_CommentsForm),
  "Cp": () => (/* reexport */ components_FeaturedPostCard),
  "h4": () => (/* reexport */ components_Header),
  "Ar": () => (/* reexport */ components_Layout),
  "aN": () => (/* reexport */ components_Loader),
  "y4": () => (/* reexport */ components_PostCard),
  "Zx": () => (/* reexport */ components_PostDetail),
  "c_": () => (/* reexport */ components_PostWidget)
});

// UNUSED EXPORTS: AdjacentPostCard

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/PostCard.jsx




const PostCard = ({ post  })=>{
    const { 0: readMore , 1: setReadMore  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative overflow-hidden shadow-md pb-80 mb-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: post.featuredImage.url,
                    alt: post.title,
                    className: "object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/post/${post.slug}`,
                    children: post.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "block lg:flex text-center items center justify-center mb-8 w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: post.author.name,
                                height: "30px",
                                width: "30px",
                                className: "align-middle rounded-full",
                                src: post.author.photo.url
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "inline align-middle text-gray-700 ml-2 text-lg",
                                children: post.author.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "font-medium text-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 inline mr-2 text-pink-500",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: external_moment_default()(post.createdAt).format('MMM DD,YYYY')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8",
                children: [
                    readMore ? post.excerpt : post.excerpt.substring(0, 150),
                    "...",
                    '',
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "text-blue",
                        onClick: ()=>setReadMore(!readMore)
                        ,
                        children: readMore ? 'Show less' : 'Read more'
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center ",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/post/${post.slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "transtion duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer",
                        children: "Continue Reading"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_PostCard = (PostCard);

// EXTERNAL MODULE: ./services/index.js
var services = __webpack_require__(802);
;// CONCATENATED MODULE: ./components/Categories.jsx




const Categories = ()=>{
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        (0,services/* getCategories */.CP)().then((newCategories)=>setCategories(newCategories)
        );
        return ()=>{
        };
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white shadow-lg rounded-lg p-8 mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-xl mb-8 font-semibold border-b pb-4 ",
                children: "Categories"
            }),
            categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/category/${category.slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "cursor-pointer block pb-3 mb-3",
                        children: category.name
                    })
                }, category.slug)
            )
        ]
    }));
};
/* harmony default export */ const components_Categories = (Categories);

;// CONCATENATED MODULE: ./components/PostWidget.jsx






const PostWidget = ({ categories , slug  })=>{
    const { 0: relatedPosts , 1: setRelatedPosts  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (slug) {
            (0,services/* getSimilarPosts */.IQ)(categories, slug).then((result)=>setRelatedPosts(result)
            );
        } else {
            (0,services/* getRecentPosts */.no)().then((result)=>setRelatedPosts(result)
            );
        }
        return ()=>{
        };
    }, [
        slug
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white shadow-lg rounded-lg p-8 mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-xl mb-8 font-semibold border-b pb-4 ",
                children: slug ? 'Related posts' : 'Recent Posts'
            }),
            relatedPosts.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center w-full mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-16 flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: post.title,
                                height: "60px",
                                width: "60px",
                                className: "align-middle rounded-full",
                                src: post.featuredImage.url
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-row ml-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-500 font-xs",
                                    children: external_moment_default()(post.createdAt).format('MMM DD, YYYY')
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/post/${post.slug}`,
                                    className: "text-md",
                                    children: post.title
                                }, post.title)
                            ]
                        })
                    ]
                }, post.title)
            )
        ]
    }));
};
/* harmony default export */ const components_PostWidget = (PostWidget);

;// CONCATENATED MODULE: ./components/Header.jsx




const Header = ()=>{
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        (0,services/* getCategories */.CP)().then((newCategories)=>setCategories(newCategories)
        );
        return ()=>{
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container mx-auto px-10 mb-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "border-b w-full inline-block border-blue-400 py-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:float-left block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "cursor-pointer font-bold text-4xl text-white",
                            children: "Escape Designs."
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden md:float-left md:contents",
                    children: categories.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/category/${category.slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer",
                                children: category.name
                            })
                        }, category.slug)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.jsx



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
            }),
            children
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Author.jsx



const Author = ({ author  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute left-0 right-0 -top-14",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    alt: author.name,
                    unoptimized: true,
                    height: "100px",
                    width: "100px",
                    className: "align-middle rounded-full",
                    src: author.photo.url
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-white my-4 text-xl font-bold",
                children: author.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-white text-lg",
                children: author.bio
            })
        ]
    }));
};
/* harmony default export */ const components_Author = (Author);

;// CONCATENATED MODULE: ./components/CommentsForm.jsx



const CommentsForm = ({ slug  })=>{
    const { 0: error , 1: setError  } = (0,external_react_.useState)(false);
    const { 0: localStorage , 1: setLocalStorage  } = (0,external_react_.useState)(null);
    const { 0: showSuccessMessage , 1: setShowSuccessMessage  } = (0,external_react_.useState)(false);
    const commentElement = (0,external_react_.useRef)();
    const nameElement = (0,external_react_.useRef)();
    const emailElement = (0,external_react_.useRef)();
    const storeDataElement = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        nameElement.current.value = window.localStorage.getItem('name');
        emailElement.current.value = window.localStorage.getItem('email');
        return ()=>{
        };
    }, []);
    const handleCommentSubmission = ()=>{
        setError(false);
        const { value: comment  } = commentElement.current;
        const { value: name  } = nameElement.current;
        const { value: email  } = emailElement.current;
        const { checked: storeData  } = storeDataElement.current;
        if (!comment || !name || !email) {
            setError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            comment,
            slug
        };
        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }
        (0,services/* submitComment */.rd)(commentObj).then((res)=>{
            setShowSuccessMessage(true);
            setTimeout(()=>{
                setShowSuccessMessage(false);
            }, 3000);
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-xl mb-8 font-semibold border-b pb-4",
                children: "Leave a comment"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 gap-4 mb-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    ref: commentElement,
                    className: "p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700",
                    placeholder: "Comment...",
                    name: "comment"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        ref: nameElement,
                        className: "py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700",
                        placeholder: "Name?",
                        name: "name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        ref: emailElement,
                        className: "py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700",
                        placeholder: "Email?",
                        name: "email"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 gap-4 mb-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            ref: storeDataElement,
                            id: "storeData",
                            name: "storeData",
                            value: "true"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "text-gray-500 cursor-pointer ml-2",
                            htmlFor: "storeData",
                            children: ": Save e-email and name for next comment."
                        })
                    ]
                })
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs text-red-500",
                children: "All fields are required."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: handleCommentSubmission,
                        className: "transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer",
                        children: " Post Comment"
                    }),
                    showSuccessMessage && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xl float-right font-semibold mt-3 text-green-500",
                        children: "Comment submitted for review"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_CommentsForm = (CommentsForm);

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(264);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
;// CONCATENATED MODULE: ./components/Comments.jsx





const Comments = ({ slug  })=>{
    const { 0: comments , 1: setComments  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        (0,services/* getComments */.li)(slug).then((result)=>setComments(result)
        );
        return ()=>{
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: comments.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    className: "text-xl mb-8 font-semibold border-b pb-4",
                    children: [
                        comments.length,
                        ' ',
                        "Comments"
                    ]
                }),
                comments.map((comment)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-b border-gray-100 mb-4 pb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-semibold",
                                        children: comment.name
                                    }),
                                    ' ',
                                    'on',
                                    ' ',
                                    external_moment_default()(comment.createdAt).format('MMM DD, YYYY')
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "whitespace-pre-line text-gray-600 w-full",
                                children: [
                                    external_html_react_parser_default()(comment.comment),
                                    " "
                                ]
                            })
                        ]
                    }, comment.createdAt)
                )
            ]
        })
    }));
};
/* harmony default export */ const components_Comments = (Comments);

;// CONCATENATED MODULE: ./components/PostDetail.jsx



const PostDetail = ({ post  })=>{
    const getContentFragment = (index, text, obj, type)=>{
        let modifiedText = text;
        if (obj) {
            if (obj.bold) {
                modifiedText = /*#__PURE__*/ jsx_runtime_.jsx("b", {
                    children: text
                }, index);
            }
            if (obj.italic) {
                modifiedText = /*#__PURE__*/ jsx_runtime_.jsx("em", {
                    children: text
                }, index);
            }
            if (obj.underline) {
                modifiedText = /*#__PURE__*/ jsx_runtime_.jsx("u", {
                    children: text
                }, index);
            }
        }
        switch(type){
            case 'heading-three':
                return(/*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "text-xl font-semibold mb-4",
                    children: modifiedText.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: item
                        }, i)
                    )
                }, index));
            case 'paragraph':
                return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mb-8",
                    children: modifiedText.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: item
                        }, i)
                    )
                }, index));
            case 'heading-four':
                return(/*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "text-md font-semibold mb-4",
                    children: modifiedText.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: item
                        }, i)
                    )
                }, index));
            case 'image':
                return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    alt: obj.title,
                    height: obj.height,
                    width: obj.width,
                    src: obj.src
                }, index));
            default:
                return modifiedText;
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative overflow-hidden shadow-md mb-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: post.featuredImage.url,
                        alt: post.title,
                        className: "object-top h-full w-full rounded-t-lg"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "px-4 lg:px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center mb-8 w-full",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            alt: post.author.name,
                                            height: "30px",
                                            width: "30px",
                                            className: "align-middle rounded-full",
                                            src: post.author.photo.url
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "inline align-middle text-gray-700 ml-2 text-lg",
                                            children: post.author.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "font-medium text-gray-700",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6 inline mr-2 text-pink-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: external_moment_default()(post.createdAt).format('MMM DD,YYYY')
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "mb-8 text-3xl font-semibold",
                            children: post.title
                        }),
                        post.content.raw.children.map((typeObj, index)=>{
                            const children = typeObj.children.map((item, itemIndex)=>getContentFragment(itemIndex, item.text, item)
                            );
                            return getContentFragment(index, children, typeObj, typeObj.type);
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_PostDetail = (PostDetail);

;// CONCATENATED MODULE: ./components/FeaturedPostCard.jsx





const FeaturedPostCard = ({ post  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative h-72",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72",
                style: {
                    backgroundImage: `url('${post.featuredImage.url}')`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white mb-4 text-shadow font-semibold text-xs",
                        children: external_moment_default()(post.createdAt).format('MMM DD, YYYY')
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white mb-4 text-shadow font-semibold text-2xl text-center",
                        children: post.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center absolute bottom-5 w-full justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                unoptimized: true,
                                alt: post.author.name,
                                height: "30px",
                                width: "30px",
                                className: "align-middle drop-shadow-lg rounded-full",
                                src: post.author.photo.url
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "inline align-middle text-white text-shadow ml-2 font-medium",
                                children: post.author.name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/post/${post.slug}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "cursor-pointer absolute w-full h-full"
                })
            })
        ]
    })
;
/* harmony default export */ const components_FeaturedPostCard = (FeaturedPostCard);

;// CONCATENATED MODULE: ./components/AdjacentPostCard.jsx




const AdjacentPostCard = ({ post , position  })=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72",
                style: {
                    backgroundImage: `url('${post.featuredImage.url}')`
                }
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-white text-shadow font-semibold text-xs",
                        children: moment(post.createdAt).format('MMM DD, YYYY')
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-white text-shadow font-semibold text-2xl text-center",
                        children: post.title
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Link, {
                href: `/post/${post.slug}`,
                children: /*#__PURE__*/ _jsx("span", {
                    className: "z-10 cursor-pointer absolute w-full h-full"
                })
            }),
            position === 'LEFT' && /*#__PURE__*/ _jsx("div", {
                className: "absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full",
                children: /*#__PURE__*/ _jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6 text-white w-full",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ _jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                    })
                })
            }),
            position === 'RIGHT' && /*#__PURE__*/ _jsx("div", {
                className: "absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full",
                children: /*#__PURE__*/ _jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6 text-white w-full",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ _jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    })
                })
            })
        ]
    })
;
/* harmony default export */ const components_AdjacentPostCard = ((/* unused pure expression or super */ null && (AdjacentPostCard)));

;// CONCATENATED MODULE: ./components/Loader.jsx


const Loader = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            type: "button",
            className: "inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed",
            disabled: "",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })
                    ]
                }),
                "Loading"
            ]
        })
    })
;
/* harmony default export */ const components_Loader = (Loader);

;// CONCATENATED MODULE: ./components/index.js














/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "zb": () => (/* binding */ getPostDetails),
/* harmony export */   "IQ": () => (/* binding */ getSimilarPosts),
/* harmony export */   "zn": () => (/* binding */ getCategoryPost),
/* harmony export */   "mH": () => (/* binding */ getFeaturedPosts),
/* harmony export */   "rd": () => (/* binding */ submitComment),
/* harmony export */   "li": () => (/* binding */ getComments),
/* harmony export */   "no": () => (/* binding */ getRecentPosts)
/* harmony export */ });
/* unused harmony export getAdjacentPosts */
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const graphqlAPI = "https://api-eu-central-1.graphcms.com/v2/ckvv9zotn1mig01za1dic8ei4/master";
const getPosts = async ()=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
    return result.postsConnection.edges;
};
const getCategories = async ()=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
    return result.categories;
};
const getPostDetails = async (slug)=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
        slug
    });
    return result.post;
};
const getSimilarPosts = async (categories, slug)=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
        slug,
        categories
    });
    return result.posts;
};
const getAdjacentPosts = async (createdAt, slug)=>{
    const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const result = await request(graphqlAPI, query, {
        slug,
        createdAt
    });
    return {
        next: result.next[0],
        previous: result.previous[0]
    };
};
const getCategoryPost = async (slug)=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
        slug
    });
    return result.postsConnection.edges;
};
const getFeaturedPosts = async ()=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
    return result.posts;
};
const submitComment = async (obj)=>{
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    return result.json();
};
const getComments = async (slug)=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query, {
        slug
    });
    return result.comments;
};
const getRecentPosts = async ()=>{
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const result = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(graphqlAPI, query);
    return result.posts;
};


/***/ })

};
;