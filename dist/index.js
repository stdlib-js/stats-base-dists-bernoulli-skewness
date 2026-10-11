"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=s(function(o,i){
var n=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/constants-float64-pinf/dist'),v=require('@stdlib/constants-float64-ninf/dist');function N(r){return n(r)||r<0||r>1?NaN:r===0?q:r===1?v:(1-2*r)/a(r*(1-r))}i.exports=N
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
