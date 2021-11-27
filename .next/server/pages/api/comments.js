"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ comments)
});

;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
;// CONCATENATED MODULE: ./pages/api/comments.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const graphqlAPI = "https://api-eu-central-1.graphcms.com/v2/ckvv9zotn1mig01za1dic8ei4/master";
const escapeDesignsToken = process.env.ESCAPE_DESIGNS_TOKEN;
async function comments(req, res) {
    const graphQLClient = new external_graphql_request_namespaceObject.GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${escapeDesignsToken}`
        }
    });
    const query = external_graphql_request_namespaceObject.gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
  }
 `;
    try {
        const result = await graphQLClient.request(query, req.body);
        return res.status(200).send(result);
    } catch (error) {
        console.log('start here==============');
        console.log(error);
        return res.status(500).send(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(597));
module.exports = __webpack_exports__;

})();