!function(){"use strict";let n;const e=new Array(32).fill(void 0);function t(n){return e[n]}e.push(void 0,null,!0,!1);let r=e.length;function o(n){const o=t(n);return function(n){n<36||(e[n]=r,r=n)}(n),o}function _(n){r===e.length&&e.push(e.length+1);const t=r;return r=e[t],e[t]=n,t}const c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let i=null;function a(){return null!==i&&i.buffer===n.memory.buffer||(i=new Uint8Array(n.memory.buffer)),i}function u(n,e){return c.decode(a().subarray(n,n+e))}function b(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=b(n[0]));for(let r=1;r<e;r++)t+=", "+b(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}let f=0;const l=new TextEncoder("utf-8"),s="function"==typeof l.encodeInto?function(n,e){return l.encodeInto(n,e)}:function(n,e){const t=l.encode(n);return e.set(t),{read:n.length,written:t.length}};function w(n,e,t){if(void 0===t){const t=l.encode(n),r=e(t.length);return a().subarray(r,r+t.length).set(t),f=t.length,r}let r=n.length,o=e(r);const _=a();let c=0;for(;c<r;c++){const e=n.charCodeAt(c);if(e>127)break;_[o+c]=e}if(c!==r){0!==c&&(n=n.slice(c)),o=t(o,r,r=c+3*n.length);const e=a().subarray(o+c,o+r);c+=s(n,e).written}return f=c,o}let g=null;function d(){return null!==g&&g.buffer===n.memory.buffer||(g=new Int32Array(n.memory.buffer)),g}function m(n){return null==n}let y=null;function p(e,t,r){n._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb452f4169c7fce4d(e,t,_(r))}function h(n){return()=>{throw new Error(`${n} is not defined`)}}let v=null;function x(e,t){const r=(null!==v&&v.buffer===n.memory.buffer||(v=new Uint32Array(n.memory.buffer)),v).subarray(e/4,e/4+t),_=[];for(let n=0;n<r.length;n++)_.push(o(r[n]));return _}function L(e,t){try{return e.apply(this,t)}catch(e){n.__wbindgen_exn_store(_(e))}}async function A(e){void 0===e&&(e=new URL("index_bg.wasm",document.currentScript&&document.currentScript.src||new URL("index.js",document.baseURI).href));const r={wbg:{}};r.wbg.__wbindgen_object_drop_ref=function(n){o(n)},r.wbg.__wbg_trgsMax_97caf9a588807dc3="function"==typeof LP.trgsMax?LP.trgsMax:h("LP.trgsMax"),r.wbg.__wbg_evtsMax_b5b4445bedadafa1="function"==typeof LP.evtsMax?LP.evtsMax:h("LP.evtsMax"),r.wbg.__wbg_rnd_8ae60b8d9990b4a0=function(n){return LP.rnd(n>>>0)},r.wbg.__wbg_genProphetie_a69f8a1f46ace59a=function(e,t,r){const _=w(LP.genProphetie(o(t),o(r)),n.__wbindgen_malloc,n.__wbindgen_realloc),c=f;d()[e/4+1]=c,d()[e/4+0]=_},r.wbg.__wbg_showVeil_e7a40d08ec4b0ad2="function"==typeof LP.showVeil?LP.showVeil:h("LP.showVeil"),r.wbg.__wbg_lastChild_84687239bfef7d2f=function(n){const e=t(n).lastChild;return m(e)?0:_(e)},r.wbg.__wbg_createTextNode_72cf3c22f1eed9ee=function(n,e,r){return _(t(n).createTextNode(u(e,r)))},r.wbg.__wbindgen_object_clone_ref=function(n){return _(t(n))},r.wbg.__wbindgen_json_parse=function(n,e){return _(JSON.parse(u(n,e)))},r.wbg.__wbg_new_693216e109162396=function(){return _(new Error)},r.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,r){const o=w(t(r).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),_=f;d()[e/4+1]=_,d()[e/4+0]=o},r.wbg.__wbg_error_09919627ac0992f5=function(e,t){try{console.error(u(e,t))}finally{n.__wbindgen_free(e,t)}},r.wbg.__wbg_warn_2aa0e7178e1d35f6=function(e,t){var r=x(e,t).slice();n.__wbindgen_free(e,4*t),console.warn(...r)},r.wbg.__wbg_instanceof_Window_0e6c0f1096d66c3c=function(n){return t(n)instanceof Window},r.wbg.__wbg_document_99eddbbc11ec831e=function(n){const e=t(n).document;return m(e)?0:_(e)},r.wbg.__wbg_self_99737b4dcdf6f0d8=function(){return L((function(){return _(self.self)}),arguments)},r.wbg.__wbg_window_9b61fbbf3564c4fb=function(){return L((function(){return _(window.window)}),arguments)},r.wbg.__wbg_globalThis_8e275ef40caea3a3=function(){return L((function(){return _(globalThis.globalThis)}),arguments)},r.wbg.__wbg_global_5de1e0f82bddcd27=function(){return L((function(){return _(global.global)}),arguments)},r.wbg.__wbindgen_is_undefined=function(n){return void 0===t(n)},r.wbg.__wbg_newnoargs_e23b458e372830de=function(n,e){return _(new Function(u(n,e)))},r.wbg.__wbg_call_ae78342adc33730a=function(){return L((function(n,e){return _(t(n).call(t(e)))}),arguments)},r.wbg.__wbg_is_40969b082b54c84d=function(n,e){return Object.is(t(n),t(e))},r.wbg.__wbg_set_93b1c87ee2af852e=function(){return L((function(n,e,r){return Reflect.set(t(n),t(e),t(r))}),arguments)},r.wbg.__wbindgen_debug_string=function(e,r){const o=w(b(t(r)),n.__wbindgen_malloc,n.__wbindgen_realloc),_=f;d()[e/4+1]=_,d()[e/4+0]=o},r.wbg.__wbindgen_throw=function(n,e){throw new Error(u(n,e))},r.wbg.__wbg_setAttribute_8d90e00d652037be=function(){return L((function(n,e,r,o,_){t(n).setAttribute(u(e,r),u(o,_))}),arguments)},r.wbg.__wbg_setchecked_e37cbc4fab363e71=function(n,e){t(n).checked=0!==e},r.wbg.__wbg_removeChild_b4ce6c8d6e5d47be=function(){return L((function(n,e){return _(t(n).removeChild(t(e)))}),arguments)},r.wbg.__wbg_new_36359baae5a47e27=function(){return _(new Object)},r.wbg.__wbindgen_string_new=function(n,e){return _(u(n,e))},r.wbg.__wbg_addEventListener_be0c061a1359c1dd=function(){return L((function(n,e,r,o,_){t(n).addEventListener(u(e,r),t(o),t(_))}),arguments)},r.wbg.__wbg_target_46fd3a29f64b0e43=function(n){const e=t(n).target;return m(e)?0:_(e)},r.wbg.__wbg_instanceof_Element_4fafc1ceb4cdee77=function(n){return t(n)instanceof Element},r.wbg.__wbg_cancelBubble_7446704fccad1780=function(n){return t(n).cancelBubble},r.wbg.__wbg_parentElement_d078cf0bd5c4b641=function(n){const e=t(n).parentElement;return m(e)?0:_(e)},r.wbg.__wbg_get_a9cab131e3152c49=function(){return L((function(n,e){return _(Reflect.get(t(n),t(e)))}),arguments)},r.wbg.__wbindgen_number_get=function(e,r){const o=t(r),_="number"==typeof o?o:void 0;(null!==y&&y.buffer===n.memory.buffer||(y=new Float64Array(n.memory.buffer)),y)[e/8+1]=m(_)?0:_,d()[e/4+0]=!m(_)},r.wbg.__wbg_valueOf_a08afc4df5d92043=function(n){return t(n).valueOf()},r.wbg.__wbg_body_2a1ff14b05042a51=function(n){const e=t(n).body;return m(e)?0:_(e)},r.wbg.__wbindgen_number_new=function(n){return _(n)},r.wbg.__wbg_appendChild_a86c0da8d152eae4=function(){return L((function(n,e){return _(t(n).appendChild(t(e)))}),arguments)},r.wbg.__wbg_insertBefore_4df558a2aa0435c1=function(){return L((function(n,e,r){return _(t(n).insertBefore(t(e),t(r)))}),arguments)},r.wbg.__wbg_setnodeValue_77a78d32cf9e9152=function(n,e,r){t(n).nodeValue=0===e?void 0:u(e,r)},r.wbg.__wbg_setvalue_8efcd1f77232ee9b=function(n,e,r){t(n).value=u(e,r)},r.wbg.__wbg_setvalue_649eb7de76d4a493=function(n,e,r){t(n).value=u(e,r)},r.wbg.__wbg_value_14b43f7df5bd6160=function(e,r){const o=w(t(r).value,n.__wbindgen_malloc,n.__wbindgen_realloc),_=f;d()[e/4+1]=_,d()[e/4+0]=o},r.wbg.__wbg_value_f232184bd0e27b00=function(e,r){const o=w(t(r).value,n.__wbindgen_malloc,n.__wbindgen_realloc),_=f;d()[e/4+1]=_,d()[e/4+0]=o},r.wbg.__wbg_namespaceURI_3bb5841c365214c8=function(e,r){const o=t(r).namespaceURI;var _=m(o)?0:w(o,n.__wbindgen_malloc,n.__wbindgen_realloc),c=f;d()[e/4+1]=c,d()[e/4+0]=_},r.wbg.__wbg_createElementNS_a0904ea4c02292f4=function(){return L((function(n,e,r,o,c){return _(t(n).createElementNS(0===e?void 0:u(e,r),u(o,c)))}),arguments)},r.wbg.__wbg_createElement_3c9b5f3aa42457a1=function(){return L((function(n,e,r){return _(t(n).createElement(u(e,r)))}),arguments)},r.wbg.__wbg_removeAttribute_8a8f459a4b627ec4=function(){return L((function(n,e,r){t(n).removeAttribute(u(e,r))}),arguments)},r.wbg.__wbindgen_closure_wrapper3191=function(e,t,r){const o=function(e,t,r,o){const _={a:e,b:t,cnt:1,dtor:r},c=(...e)=>{_.cnt++;try{return o(_.a,_.b,...e)}finally{0==--_.cnt&&(n.__wbindgen_export_2.get(_.dtor)(_.a,_.b),_.a=0)}};return c.original=_,c}(e,t,39,p);return _(o)},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:c,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await e,r);return n=c.exports,A.__wbindgen_wasm_module=i,n}var E,P,M,j,k,R,O=Object.freeze({__proto__:null,main_js:function(e){n.main_js(_(e))},default:A});M=function(n){return document.getElementById(n)},k=function(n){return new Promise((e=>setTimeout(e,n)))},P=[],R=[],E={evtsMax:function(){return P.length},genProphetie:function(n,e){var t,r,o;return r=R[n[0]],n.length>1&&(r=r+" et "+(o=R[n[1]])[0].toLowerCase()+o.substring(1)),r+=", ",1===(e=e.map((n=>P[n]))).length?r+e[0]:(t=function(){var n,t,r;for(r=[],n=t=e.length-2;t<=0?n<=0:n>=0;t<=0?++n:--n)r.push(E.rnd(3));return r}().map((n=>0===n?", ":", et ")),r+e.flatMap(((n,e)=>e>=t.length?[n,""]:[n,t[e]])).join(""))},rnd:function(n){return Math.floor(Math.random()*n)},showVeil:function(){M("lp-veil").style.display="block"},trgsMax:function(){return R.length}},j=async function(){var n,e,t,r;M("lp-thanks-close").addEventListener("click",(()=>M("lp-veil").style.display="none")),n=await fetch("devin/events.txt"),e=await fetch("devin/triggers.txt"),1===(P=(await n.text()).split("\r\n")).length&&(P=P[0].split("\n")),1===(R=(await e.text()).split("\r\n")).length&&(R=R[0].split("\n")),r=1500,await k(r),t=!1,5===E.rnd(5)&&(t=r,M("lp-waiter1").style.display="block",await k(1500)),t&&10===E.rnd(10)&&(M("lp-waiter2").style.display="block",await k(r)),(await(async(n={})=>{let{importHook:e,serverPath:t}=n,r="wasm/legendary_pancake.wasm";return null!=t&&(r=t+/[^\/\\]*$/.exec(r)[0]),null!=e&&(r=e(r)),await A(r),O})()).main_js(M("lp-core"))},window.LP=E,window.launchLP=j}();
