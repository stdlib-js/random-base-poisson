// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorialln@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-signum@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-sqrt-two-pi@v0.2.1-esm/index.mjs";var y=1/12,w=1/360;function L(t,e){return e<30?function(t,e){for(var s=t(),n=1;s>j(-e);)n+=1,s*=t();return n-1}(t,e):function(t,e){var s,n,r,i,o,m,d,l,p,a;for(m=.02483*(d=2.53*(s=u(e))+.931)-.059,n=1.1328/(d-3.4)+1.1239,r=.86*(o=-3.6224/(d-2)+.9277);;){if((a=t())<=r)return p=a/o-.43,p*=2*m/(.5-g(p))+d,v(p+=e+.445);if(a>=o?p=t()-.5:(p=.5*c(p=a/o-.93)-p,a=o*t()),(i=.5-g(p))>=.013||i>=a){if(a*=n/(m/(i*i)+d),p=((l=v((2*m/i+d)*p+e+.445))+.5)*b(e/l),p+=-e-x+l,p-=(y-w/(l*l))/l,l>=10&&p>=b(a*s))return l;if(p=l*b(e)-e-f(l),l>=0&&l<=9&&p>=b(a))return l}}}(t,e)}function N(){var j,f,v,c;if(0===arguments.length)v=l();else if(1===arguments.length&&r(arguments[0]))if(o(f=arguments[0],"prng")){if(!i(f.prng))throw new TypeError(h("0ov6u","prng",f.prng));v=f.prng}else v=l(f);else{if(!n(j=arguments[0]))throw new TypeError(h("0ov71",j));if(arguments.length>1){if(!r(f=arguments[1]))throw new TypeError(h("0ov2V",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(h("0ov6u","prng",f.prng));v=f.prng}else v=l(f)}else v=l()}return t(c=void 0===j?function(t){if(p(t)||t<=0)return NaN;return L(v,t)}:function(){return L(v,j)},"NAME","poisson"),f&&f.prng?(t(c,"seed",null),t(c,"seedLength",null),s(c,"state",m(null),d),t(c,"stateLength",null),t(c,"byteLength",null),t(c,"toJSON",m(null)),t(c,"PRNG",v)):(e(c,"seed",(function(){return v.seed})),e(c,"seedLength",(function(){return v.seedLength})),s(c,"state",(function(){return v.state}),(function(t){v.state=t})),e(c,"stateLength",(function(){return v.stateLength})),e(c,"byteLength",(function(){return v.byteLength})),t(c,"toJSON",(function(){var t={type:"PRNG"};t.name=c.NAME,t.state=a(v.state),t.params=void 0===j?[]:[j];return t})),t(c,"PRNG",v),v=v.normalized),c}var E=N();t(E,"factory",N);export{E as default,N as factory};
//# sourceMappingURL=index.mjs.map
