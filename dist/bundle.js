!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=window.localStorage;document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=e.elements,r=n.name,u=n.email,a=n.phone,i=n.company,l=n.notes,c=n.twitter,f={id:Date.now(),name:r.value,email:u.value,phone:a.value,company:i.value,notes:l.value,twitter:c.value},s=JSON.parse(o.getItem("contacts"))||[];s.push(f),console.log("Saving the follow contact: "+JSON.stringify(f)),o.setItem("contacts",JSON.stringify([s]))})})}]);