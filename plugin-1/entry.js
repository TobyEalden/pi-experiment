import React from "react";
import ReactDOM from "react-dom";
import Plugin from "./index";

let libConfig = null;

export {Plugin};

// export default {
//   config: function(cfg) {
//     libConfig = cfg;
//   },

//   plugins: {
//     plugin1: {
//       new: (cfg) => {
//         return {
//           render: (args) => {
//             ReactDOM.render(<Plugin />, document.querySelector(cfg.selector));
//           },
//         };
//       }
//     },
//   },
// };

