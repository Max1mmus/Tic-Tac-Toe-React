(this["webpackJsonptictactoe-react"]=this["webpackJsonptictactoe-react"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),u=n(1);function o(e){var t=e.value,n=e.onClick;return r.a.createElement("button",{className:"square",onClick:n,style:{backgroundColor:null===t?null:"#d0ffb4"}},t)}var i=function(e){var t=e.squares,n=e.onClick;function a(e){return r.a.createElement(o,{key:e,value:t[e],onClick:function(){return n(e)}})}return r.a.createElement("div",{className:"board"},function(e,t){for(var n=[],l=0,c=0;c<e;c++){for(var u=[],o=0;o<t;o++)u.push(a(l++));n.push(r.a.createElement("div",{key:"row-".concat(c),className:"board-row"},u))}return n}(3,3))};function s(e){var t=e.onClick;return r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{className:"newGame",onClick:t},"New Game"))}function m(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(u.a)(t[n],3),r=a[0],l=a[1],c=a[2];if(e[r]&&e[r]===e[l]&&e[l]===e[c])return e[r]}return null}n(9);c.a.render(r.a.createElement((function(){var e=Object(a.useState)(Array(9).fill(null)),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!0),o=Object(u.a)(c,2),f=o[0],v=o[1];var b,d=m(n);return b=d?"Winner is: ".concat(d):function(e){var t=!0,n=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){if(null===r.value)return!1}}catch(c){n=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}return!0}(n)?"It's a draw!":"Next player : ".concat(f?"X":"O"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"player"},b),r.a.createElement(i,{squares:n,onClick:function(e){return function(e){var t=n;t[e]||m(t)||(t[e]=f?"X":"O",l(t),v(!f))}(e)}}),r.a.createElement(s,{onClick:function(){l(Array(9).fill(null)),v(!0)}})),r.a.createElement("footer",null,"Built with ",r.a.createElement("span",{id:"heart"}," \u2764 "),"By:",r.a.createElement("a",{id:"Max1mmus",href:"https://github.com/Max1mmus",rel:"noopener noreferrer",target:"_blank"},"Max1mmus")))}),null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.1e22d32f.chunk.js.map