// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).skewness=n()}(this,(function(){"use strict";var e=function(e){return e!=e},n=Math.sqrt,t=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,f=e,u=n,i=t,r=o;return function(e){return f(e)||e<0||e>1?NaN:0===e?i:1===e?r:(1-2*e)/u(e*(1-e))}}));
//# sourceMappingURL=bundle.js.map
