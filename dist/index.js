"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(c,i){
var s=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-sqrt/dist'),a=require('@stdlib/constants-float64-pinf/dist'),q=require('@stdlib/constants-float64-ninf/dist');function v(r){return s(r)||r<0||r>1?NaN:r===0?a:r===1?q:(1-2*r)/n(r*(1-r))}i.exports=v
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
