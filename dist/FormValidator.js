!function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t){const i=e=>"object"==typeof e&&!Array.isArray(e),s=e=>e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),r=(e,t)=>{const s={...t};if([null,void 0].includes(s))return e;const a=Object.keys(e);for(let t=0;t<a.length;t+=1){const n=a[t];i(e[n])&&i(s[n])?s[n]=r(e[n],s[n]):s[n]=e[n]}return s},a=(e,t)=>{t=t.split(".");for(let i=0;i<t.length;i+=1){if([null,void 0].includes(e))return;e=e[t[i]]}return e},n=e=>Array.isArray(e)?(e=>{const t=[];for(let i=0;i<e;i+=1)t.push(i);return t})(e.length):Object.keys(e),l=(e={},t="{}",i=2)=>({in:(...r)=>{const o=s(t[0]||"").repeat(i),d=s(t[1]||"").repeat(i),h=[];for(let s=0;s<r.length;s+=1){const u=Array.isArray(r[s])?[...r[s]]:{...r[s]},c=n(u);for(let s=0;s<c.length;s+=1){const r=c[s];"object"==typeof u[r]?[u[r]]=l(e,t,i).in(u[r]):"string"==typeof u[r]&&(u[r]=u[r].replace(new RegExp(`${o}[^${o}]*${d}`,"g"),t=>{const i=t.replace(new RegExp(`${o} *| *${d}`,"g"),"");return a(e,i)}))}h.push(u)}return h}});e.exports={deepSpread:r,inject:e=>({to:t=>r(e,t)}),injectN:e=>{const t=(i=e)=>e=>(result=r(i,e),{result:result,to:t(result)});return{result:e,to:t()}},replace:l}},function(e,t,i){var s,r;void 0===(r="function"==typeof(s=function(){var e=[9,16,17,18,36,37,38,39,40,91,92,93],t=function(e){return(e={delimiter:(e=e||{}).delimiter||".",lastOutput:e.lastOutput,precision:e.hasOwnProperty("precision")?e.precision:2,separator:e.separator||",",showSignal:e.showSignal,suffixUnit:e.suffixUnit&&" "+e.suffixUnit.replace(/[\s]/g,"")||"",unit:e.unit&&e.unit.replace(/[\s]/g,"")+" "||"",zeroCents:e.zeroCents}).moneyPrecision=e.zeroCents?0:e.precision,e},i=function(e,t,i){for(;t<e.length;t++)"9"!==e[t]&&"A"!==e[t]&&"S"!==e[t]||(e[t]=i);return e},s=function(e){this.elements=e};s.prototype.unbindElementToMask=function(){for(var e=0,t=this.elements.length;e<t;e++)this.elements[e].lastOutput="",this.elements[e].onkeyup=!1,this.elements[e].onkeydown=!1,this.elements[e].value.length&&(this.elements[e].value=this.elements[e].value.replace(/\D/g,""))},s.prototype.bindElementToMask=function(t){for(var i=this,s=function(s){var a=(s=s||window.event).target||s.srcElement;(function(t){for(var i=0,s=e.length;i<s;i++)if(t==e[i])return!1;return!0})(s.keyCode)&&setTimeout((function(){i.opts.lastOutput=a.lastOutput,a.value=r[t](a.value,i.opts),a.lastOutput=a.value,a.setSelectionRange&&i.opts.suffixUnit&&a.setSelectionRange(a.value.length,a.value.length-i.opts.suffixUnit.length)}),0)},a=0,n=this.elements.length;a<n;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=s,this.elements[a].value.length&&(this.elements[a].value=r[t](this.elements[a].value,this.opts))},s.prototype.maskMoney=function(e){this.opts=t(e),this.bindElementToMask("toMoney")},s.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},s.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},s.prototype.maskPattern=function(e){this.opts={pattern:e},this.bindElementToMask("toPattern")},s.prototype.unMask=function(){this.unbindElementToMask()};var r=function(e){if(!e)throw new Error("VanillaMasker: There is no element to bind.");var t="length"in e?e.length?e:[]:[e];return new s(t)};return r.toMoney=function(e,i){if((i=t(i)).zeroCents){i.lastOutput=i.lastOutput||"";var s="("+i.separator+"[0]{0,"+i.precision+"})",r=new RegExp(s,"g"),a=e.toString().replace(/[\D]/g,"").length||0,n=i.lastOutput.toString().replace(/[\D]/g,"").length||0;e=e.toString().replace(r,""),a<n&&(e=e.slice(0,e.length-1))}for(var l=e.toString().replace(/[\D]/g,""),o=new RegExp("^(0|\\"+i.delimiter+")"),d=new RegExp("(\\"+i.separator+")$"),h=l.substr(0,l.length-i.moneyPrecision),u=h.substr(0,h.length%3),c=new Array(i.precision+1).join("0"),p=0,f=(h=h.substr(h.length%3,h.length)).length;p<f;p++)p%3==0&&(u+=i.delimiter),u+=h[p];u=(u=u.replace(o,"")).length?u:"0";var g="";if(!0===i.showSignal&&(g=e<0||e.startsWith&&e.startsWith("-")?"-":""),!i.zeroCents){var v=l.length-i.precision,m=l.substr(v,i.precision),b=m.length,y=i.precision>b?i.precision:b;c=(c+m).slice(-y)}return(i.unit+g+u+i.separator+c).replace(d,"")+i.suffixUnit},r.toPattern=function(e,t){var s,r="object"==typeof t?t.pattern:t,a=r.replace(/\W/g,""),n=r.split(""),l=e.toString().replace(/\W/g,""),o=l.replace(/\W/g,""),d=0,h=n.length,u="object"==typeof t?t.placeholder:void 0;for(s=0;s<h;s++){if(d>=l.length){if(a.length==o.length)return n.join("");if(void 0!==u&&a.length>o.length)return i(n,s,u).join("");break}if("9"===n[s]&&l[d].match(/[0-9]/)||"A"===n[s]&&l[d].match(/[a-zA-Z]/)||"S"===n[s]&&l[d].match(/[0-9a-zA-Z]/))n[s]=l[d++];else if("9"===n[s]||"A"===n[s]||"S"===n[s])return void 0!==u?i(n,s,u).join(""):n.slice(0,s).join("")}return n.join("").substr(0,s)},r.toNumber=function(e){return e.toString().replace(/(?!^-)[^0-9]/g,"")},r.toAlphaNumeric=function(e){return e.toString().replace(/[^a-z0-9 ]+/i,"")},r})?s.call(t,i,t,e):s)||(e.exports=r)},function(e,t,i){var s=function(e){"use strict";var t=Object.prototype,i=t.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},r=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",n=s.toStringTag||"@@toStringTag";function l(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,i){return e[t]=i}}function o(e,t,i,s){var r=t&&t.prototype instanceof u?t:u,a=Object.create(r.prototype),n=new A(s||[]);return a._invoke=function(e,t,i){var s="suspendedStart";return function(r,a){if("executing"===s)throw new Error("Generator is already running");if("completed"===s){if("throw"===r)throw a;return V()}for(i.method=r,i.arg=a;;){var n=i.delegate;if(n){var l=F(n,i);if(l){if(l===h)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===s)throw s="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);s="executing";var o=d(e,t,i);if("normal"===o.type){if(s=i.done?"completed":"suspendedYield",o.arg===h)continue;return{value:o.arg,done:i.done}}"throw"===o.type&&(s="completed",i.method="throw",i.arg=o.arg)}}}(e,i,n),a}function d(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(e){return{type:"throw",arg:e}}}e.wrap=o;var h={};function u(){}function c(){}function p(){}var f={};l(f,r,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(_([])));v&&v!==t&&i.call(v,r)&&(f=v);var m=p.prototype=u.prototype=Object.create(f);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var s;this._invoke=function(r,a){function n(){return new t((function(s,n){!function s(r,a,n,l){var o=d(e[r],e,a);if("throw"!==o.type){var h=o.arg,u=h.value;return u&&"object"==typeof u&&i.call(u,"__await")?t.resolve(u.__await).then((function(e){s("next",e,n,l)}),(function(e){s("throw",e,n,l)})):t.resolve(u).then((function(e){h.value=e,n(h)}),(function(e){return s("throw",e,n,l)}))}l(o.arg)}(r,a,s,n)}))}return s=s?s.then(n,n):n()}}function F(e,t){var i=e.iterator[t.method];if(void 0===i){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,F(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var s=d(i,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,h;var r=s.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,a=function t(){for(;++s<e.length;)if(i.call(e,s))return t.value=e[s],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:V}}function V(){return{value:void 0,done:!0}}return c.prototype=p,l(m,"constructor",p),l(p,"constructor",c),c.displayName=l(p,n,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===c||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,n,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},b(y.prototype),l(y.prototype,a,(function(){return this})),e.AsyncIterator=y,e.async=function(t,i,s,r,a){void 0===a&&(a=Promise);var n=new y(o(t,i,s,r),a);return e.isGeneratorFunction(i)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},b(m),l(m,n,"Generator"),l(m,r,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){for(;t.length;){var s=t.pop();if(s in e)return i.value=s,i.done=!1,i}return i.done=!0,i}},e.values=_,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function s(i,s){return n.type="throw",n.arg=e,t.next=i,s&&(t.method="next",t.arg=void 0),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],n=a.completion;if("root"===a.tryLoc)return s("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),o=i.call(a,"finallyLoc");if(l&&o){if(this.prev<a.catchLoc)return s(a.catchLoc,!0);if(this.prev<a.finallyLoc)return s(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return s(a.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return s(a.finallyLoc)}}}},abrupt:function(e,t){for(var s=this.tryEntries.length-1;s>=0;--s){var r=this.tryEntries[s];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var n=a?a.completion:{};return n.type=e,n.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),w(i),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var s=i.completion;if("throw"===s.type){var r=s.arg;w(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:_(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),h}},e}(e.exports);try{regeneratorRuntime=s}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}},function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p})),i.d(t,"FormValidatorStepsHandler",(function(){return f}));i(2);var s={INITIALIZED_FIELD_DATA_ATTRIBUTE:"data-form-validator-initialized-field",GROUP_WRAPPER_DATA_ATTRIBUTE:"data-form-validator-group-wrapper",DEFAULT_OPTIONS:{debug:!1,enableDataRestore:!1,enableValidateAfterDataRestore:!0,resetFieldValidationOnChange:!0,validateFieldOnInput:!1,validateFieldOnBlur:!0,groupWrapperHiddenClass:"d-none",groupWrapperVisibleClass:"d-block",fieldRenderPreferences:{wrapperClass:"form-group",wrapperHiddenClass:"d-none",wrapperVisibleClass:"d-block",showUnvalidatedMessage:!1,unvalidatedMessage:"Unvalidated",unvalidatedMessageHTML:'<div class="valid-feedback text-muted d-block">{{message}}</div>',addUnvalidatedClass:!0,unvalidatedClass:"is-unvalidated",addWrapperUnvalidatedClass:!0,wrapperUnvalidatedClass:"is-unvalidated",showValidatingMessage:!0,validatingMessage:"Validating...",validatingMessageHTML:'<div class="valid-feedback text-muted d-block">{{message}}</div>',addValidatingClass:!0,validatingClass:"is-validating",addWrapperValidatingClass:!0,wrapperValidatingClass:"is-validating",showInvalidMessage:!0,invalidMessageHTML:'<div class="invalid-feedback text-danger d-block">{{message}}</div>',addInvalidClass:!0,invalidClass:"is-invalid",addWrapperInvalidClass:!0,wrapperInvalidClass:"is-invalid",showValidMessage:!0,validMessage:"Field is valid",validMessageHTML:'<div class="valid-feedback text-success d-block">{{message}}</div>',addValidClass:!0,validClass:"is-valid",addWrapperValidClass:!0,wrapperValidClass:"is-valid"},fields:[],showLoadingFn:void 0,hideLoadingFn:void 0,submitFn:void 0,events:{onInit:void 0,onBeforeReset:void 0,onReset:void 0,onTrySubmit:void 0,onBeforeSubmit:void 0,onSubmitFail:void 0,onSubmit:void 0,onBeforeValidate:void 0,onValidate:void 0,onBeforeValidateField:void 0,onValidateField:void 0,onFieldInput:void 0,onBeforeShowDependentFields:void 0,onShowDependentFields:void 0,onBeforeHideDependentFields:void 0,onHideDependentFields:void 0}},REPEATABLE_WRAPPER_DATA_ATTRIBUTE:"data-form-validator-repeatable-wrapper",REPEATABLE_LIMIT_DATA_ATTRIBUTE:"data-form-validator-repeatable-limit",REPEATABLE_ITEM_DATA_ATTRIBUTE:"data-form-validator-repeatable-item"},r={required:{name:"required",parameter:null,message:"Campo obrigatório",async:!1,fn:(e,t)=>e&&e.length>0},minLength:{name:"minLength",parameter:null,message:"Valor pequeno demais",async:!1,fn:(e,t)=>!t||e.length>=t},maxLength:{name:"maxLength",parameter:null,message:"Valor grande demais",async:!1,fn:(e,t)=>!t||e.length<=Number(t)},regex:{name:"regex",parameter:null,message:"Valor inválido",async:!1,fn:(e,t)=>{if(!t)return!0;let i=!0;var s=new RegExp(t);return e.forEach(e=>{s.test(e)||(i=!1)}),i}},email:{name:"email",parameter:null,message:"Invalid email address",async:!1,fn:(e,t)=>/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)||!e.length},equal:{name:"equal",parameter:null,message:"Campo inválido",async:!1,fn:(e,t)=>{let i=!0;return"object"==typeof t?t.forEach(s=>{e.includes(s)||(i=!1),t.length!==e.length&&(i=!1)}):e.includes(t)||(i=!1),i}},hasValues:{name:"hasValues",parameter:null,message:"Campo inválido",async:!1,fn:(e,t)=>{let i=!0;return"object"==typeof t?(0===t.length&&(i=!1),t.forEach(t=>{e.includes(t)||(i=!1)})):e.includes(t)&&(i=!0),i}},cpf:{name:"cpf",parameter:null,message:"CPF inválido",async:!1,fn:e=>function(e){if("string"!=typeof e)return!1;if(11!==(e=e.replace(/[\s.-]*/gim,"")).length||!Array.from(e).filter(t=>t!==e[0]).length)return!1;for(var t,i=0,s=1;s<=9;s++)i+=parseInt(e.substring(s-1,s))*(11-s);if(10!=(t=10*i%11)&&11!=t||(t=0),t!=parseInt(e.substring(9,10)))return!1;for(i=0,s=1;s<=10;s++)i+=parseInt(e.substring(s-1,s))*(12-s);return 10!=(t=10*i%11)&&11!=t||(t=0),t==parseInt(e.substring(10,11))}(e)},date:{name:"date",parameter:null,message:"Data inválida",async:!1,fn:(e,t)=>/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(e)},phone:{name:"phone",parameter:null,message:"Telefone inválido",async:!1,fn:(e,t)=>{if(e.length){return/^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/.test(e)}return!0}},length:{name:"length",parameter:null,message:"Quantidade de itens inválida",async:!1,fn:(e,t)=>!t||e.length===t}};class a{constructor(e){return this.name=e.name,this.parameter=e.parameter,this.message=e.message,this.async=e.async,this.fn=e.fn,this}test(e){var t=this.message;return new Promise((i,s)=>{void 0===this.fn?i():!0===this.async?this.fn(e,this.parameter,(function(e){e?i():s(t)})):this.fn(e,this.parameter)?i():s(t)})}}var n=class{constructor(e=!1){this.showLogs=!!e}log(e,t){if(!this.showLogs)return;let i=t||"";console.log(e,i)}logWarning(e,t){if(!this.showLogs)return;let i=t||"";console.warn(e,i)}logError(e,t){let i=t||"";console.error(e,i)}},l=i(1),o=i.n(l),d=i(0);const h=e=>(Object.keys(e).forEach(t=>{void 0===e[t]&&delete e[t]}),e);Promise.series=function(e){var t=[];return e.reduce((function(e,i){return e.then((function(){return i.then((function(e){t.push(e)}))}))}),Promise.resolve()).then((function(){return t}))};class u{constructor(e,t=!1){this.logger=new n(t),e._validator.$form.querySelectorAll('[name="'+e.name+'"]').length&&(this._validator=e._validator,this.name=e.name,this.group=e.group,this.elements=Array.from(e._validator.$form.querySelectorAll('[name="'+e.name+'"]')),this.interactive=e.interactive,this.mask=e.mask,this.dependencyRules=e.dependencyRules,this.useRules=!0,this.rules=e.rules||[],this.events=e.events,this.fieldRenderPreferences=e.fieldRenderPreferences,this.resetFieldValidationOnChange=e.resetFieldValidationOnChange,this.validateFieldOnInput=e.validateFieldOnInput,this.validateFieldOnBlur=e.validateFieldOnBlur,this.getValueFn=e.getValueFn,this.setValueFn=e.setValueFn,this.register())}getFieldRenderPreferences(){let e=this._validator.fieldRenderPreferences;return void 0!==this.fieldRenderPreferences&&(e=Object(d.deepSpread)(this.fieldRenderPreferences,this._validator.fieldRenderPreferences)),e}getEvents(){let e;return e=void 0!==this.events?{...this._validator.events,...h(this.events)}:this._validator.events,e}getValidateFieldOnBlur(){return void 0===this.validateFieldOnBlur?this._validator.validateFieldOnBlur:this.validateFieldOnBlur}getResetFieldValidationOnChange(){return void 0===this.resetFieldValidationOnChange?this._validator.resetFieldValidationOnChange:this.resetFieldValidationOnChange}getValidateFieldOnInput(){return void 0===this.validateFieldOnInput?this._validator.validateFieldOnInput:this.validateFieldOnInput}register(){if(this.registered)return;var e=[];this.registered=!0,this.status=void 0,this._status=void 0,this.message=void 0,this.validationElements=[];var t=this.getFieldRenderPreferences();t.wrapperClass&&t.wrapperClass.length?this.$wrapper=this.elements[0].closest("."+t.wrapperClass):this.$wrapper=void 0;let i=this.getEvents();return this.elements.forEach(t=>{t.setAttribute(s.INITIALIZED_FIELD_DATA_ATTRIBUTE,"true"),t.hasAttribute("readonly")&&t.setAttribute("data-originally-readonly","");let r=e=>{if(this.status=void 0,this._status=void 0,this.getResetFieldValidationOnChange()&&(this.setUnvalidated(),t.focus()),this.getValidateFieldOnInput()){(()=>{this._validate().then(e=>{}).catch(e=>{}).finally(()=>{t.focus()})})()}i&&i.onFieldInput&&i.onFieldInput(this)};t.addEventListener("input",r);let a="blur";var n;"radio"!==t.getAttribute("type")&&"checkbox"!==t.getAttribute("type")||(a="change");let l=()=>{if(this.getValidateFieldOnBlur()&&this.interactive){"change"===a&&(this.setUnvalidated(),t.focus());let e=()=>{this._validate().then(e=>{}).catch(e=>{}).finally(()=>{"change"===a&&t.focus()})};clearTimeout(n),n=setTimeout(e,1)}};t.addEventListener(a,l),e.push(()=>{t.removeEventListener("input",r),t.removeEventListener(a,l),t.removeAttribute(s.INITIALIZED_FIELD_DATA_ATTRIBUTE)})}),this.mask&&this.setMask(this.mask),this.unregister=()=>{this.setUnvalidated(),e.forEach(e=>{e()}),this.unsetMask(),this.registered=!1,delete this._validator.fields[this.name]},this}getValue(){if(this.getValueFn&&"function"==typeof this.getValueFn)return this.getValueFn(this);if(this.elements.length>1){let e=[];return"radio"!==this.elements[0].getAttribute("type")&&"checkbox"!==this.elements[0].getAttribute("type")||this.elements.forEach(t=>{t.checked&&e.push(t.value)}),e}return this.elements[0].value}setValue(e){this.setValueFn&&"function"==typeof this.setValueFn?(this.setValueFn(this),this._validator.updateDependencyRules()):("object"==typeof e?this.elements.forEach((t,i)=>{t.hasAttribute("readonly")||t.hasAttribute("disabled")||("radio"===t.getAttribute("type")||"checkbox"===t.getAttribute("type")?e.includes(t.value)?t.checked=!0:t.checked=!1:(e[i]||(e[i]=""),t.value=e[i]))}):this.elements.forEach((t,i)=>{t.hasAttribute("readonly")||t.hasAttribute("disabled")||("radio"===t.getAttribute("type")||"checkbox"===t.getAttribute("type")?e===t.value?t.checked=!0:t.checked=!1:(e||(e=""),t.value=e))}),this._validator.updateDependencyRules())}disableRules(){this.useRules=!1}enableRules(){this.useRules=!0}getRules(){let e=[];return this.rules.forEach(t=>{"string"==typeof t&&(t=-1!==t.indexOf(":")?{name:t.split(":")[0],parameter:t.split(":")[1]}:{name:t}),this._validator.defaultRules[t.name]&&(t={...this._validator.defaultRules[t.name],...h(t)});let i=new a(t);e.push(i)}),e}setMask(e){this.unsetMask(),o()(this.elements).maskPattern(e)}unsetMask(){o()(this.elements)&&o()(this.elements).unMask()}handlePreventingDefault(e){e.preventDefault()}disableInteraction(){this.elements.forEach(e=>{e.setAttribute("readonly","readonly"),e.addEventListener("input",this.handlePreventingDefault),e.addEventListener("click",this.handlePreventingDefault)}),this.interactive=!1}enableInteraction(){this.elements.forEach(e=>{e.hasAttribute("data-originally-readonly")||e.removeAttribute("readonly"),e.removeEventListener("input",this.handlePreventingDefault),e.removeEventListener("click",this.handlePreventingDefault)}),this.interactive=!0}_setFieldValidationStatus(e,t,i=!1){var s,r=e.charAt(0).toUpperCase()+e.slice(1);if("validating"===e?(this._status=-1,this.disableInteraction(),i||(this.status=-1)):"valid"===e?(this._status=1,this.enableInteraction(),i||(this.status=1)):"invalid"===e?(this._status=0,this.enableInteraction(),i||(this.status=0)):(this._status=void 0,this.enableInteraction(),i||(this.status=void 0)),this.message=t,!i){this.removeValidationElements();var a=this.getFieldRenderPreferences();if(a["add"+r+"Class"]&&this.elements.forEach(t=>{"object"==typeof this.getValue()&&this.getValue().length>0?this.getValue().includes(t.value)&&t.classList.add(a[e+"Class"]):t.classList.add(a[e+"Class"])}),a["addWrapper"+r+"Class"]&&this.$wrapper.classList.add(a["wrapper"+r+"Class"]),a["show"+r+"Message"]&&t&&t.length){this.message=t;let i=a[e+"MessageHTML"].replace("{{message}}",t),r=(s=i,(new DOMParser).parseFromString(s.trim(),"text/html").body.firstChild);this.$wrapper.appendChild(r),this.validationElements.push(r)}}}setUnvalidated(e,t){e&&e.length||(e=this.getFieldRenderPreferences().unvalidatedMessage),this._setFieldValidationStatus("unvalidated",e,t)}setValidating(e,t){this._setFieldValidationStatus("validating",e,t)}setValid(e,t){this._setFieldValidationStatus("valid",e,t)}setInvalid(e,t){this._setFieldValidationStatus("invalid",e,t)}removeValidationElements(){let e=this.getFieldRenderPreferences();this.$wrapper.classList.remove(e.wrapperUnvalidatedClass),this.elements.forEach(t=>{t.classList.remove(e.unvalidatedClass)}),this.$wrapper.classList.remove(e.wrapperValidatingClass),this.elements.forEach(t=>{t.classList.remove(e.validatingClass)}),this.$wrapper.classList.remove(e.wrapperValidClass),this.elements.forEach(t=>{t.classList.remove(e.validClass)}),this.$wrapper.classList.remove(e.wrapperInvalidClass),this.elements.forEach(t=>{t.classList.remove(e.invalidClass)}),this.validationElements.forEach(e=>{e.remove()}),this.validationElements=[]}isValid(){return 1===this._status}validate(e=(()=>{})){this._validate().then(t=>{e(!0)}).catch(t=>{e(!1)})}_validate(e=!1){var t=this.getFieldRenderPreferences();let i=t.validatingMessage,s=t.validMessage;if(-1===this._status)return this.logger.logWarning('validate(): Field "#'+this.name+'" is still being validated'),new Promise((t,s)=>{this.setValidating(i,e),s()});if(1===this._status||0===this._status){let t=this._status;return this.logger.logWarning('validate(): Field "#'+this.name+"\" hasn't changed since last validation"),new Promise((i,r)=>{1===t?(this.setValid(s,e),i()):(this.setInvalid(this.message,e),r())})}if(!this.useRules&&!this.interactive)return new Promise((e,t)=>{e()});this.logger.log('validate(): Field "#'+this.name+'" will be validated',this);var r=this.getEvents();r&&r.onBeforeValidateField&&r.onBeforeValidateField(this),this.setValidating(i,e);return new Promise(async(t,i)=>{var a=this.getValue(),n=this.getRules(),l=!0;function o(e,t){return e.test(t)}for(const t of n){if(!l)break;await o(t,a).then(()=>{}).catch(t=>{l=!1,this.logger.log('validate(): Field "#'+this.name+'" is not valid',this),this.setInvalid(t,e),i(),r&&r.onValidateField&&r.onValidateField(this),this._validator.updateDependencyRules(),this._validator.updateFormState()})}l&&(this.logger.log('validate(): Field "#'+this.name+'" is valid',this),this.setValid(s,e),t(),r&&r.onValidateField&&r.onValidateField(this),this._validator.updateDependencyRules(),this._validator.updateFormState())})}}var c=r;class p{static setDefaultOptions(e){s.DEFAULT_OPTIONS=Object(d.deepSpread)(e,s.DEFAULT_OPTIONS)}static setDefaultRules(e){e.forEach(e=>{e.name&&(c[e.name]&&(e=Object(d.deepSpread)(e,c[e.name])),c[e.name]=e)})}constructor(e,t={}){if(this.logger=new n(t.debug),this.logger.log("constructor(): New validator instance"),this.formId=e,this.options=Object(d.deepSpread)(t,s.DEFAULT_OPTIONS),document.getElementById(e))return this.logger.log('constructor(): Validator will be initialized to "#'+e+'"'),window.formValidator_instances||(window.formValidator_instances={}),window.formValidator_instances[this.formId]?void this.logger.logError('init(): A FormValidator instance has already been initialized for the form "#'+this.formId+'"'):(window.formValidator_instances[this.formId]=this,this.init());this.logger.logError("constructor(): Couldn't find form element \"#"+e+'"')}init(){if(this.logger.log("init(): Initializing validator..."),this.$form=document.getElementById(this.formId),this.fieldRenderPreferences=this.options.fieldRenderPreferences,this.events=this.options.events,this.validateFieldOnBlur=this.options.validateFieldOnBlur,this.validateFieldOnInput=this.options.validateFieldOnInput,this.resetFieldValidationOnChange=this.options.resetFieldValidationOnChange,this.submitFn=this.options.submitFn,this.showLoadingFn=this.options.showLoadingFn,this.hideLoadingFn=this.options.hideLoadingFn,this.groupWrapperHiddenClass=this.options.groupWrapperHiddenClass,this.groupWrapperVisibleClass=this.options.groupWrapperVisibleClass,this.enableDataRestore=this.options.enableDataRestore,this.enableValidateAfterDataRestore=this.options.enableValidateAfterDataRestore,this.submitting=!1,this.fields={},this._repeatables={},this.defaultRules=c,!this.$form)return this.logger.logError("init(): Couldn't find a form with id '"+this.formId+"'"),!1;this.logger.log("init(): Registering fields..."),this.options.fields.forEach(e=>{this.registerField(e)});var e=e=>{e.preventDefault(),this.submit(e)};this.$form.addEventListener("submit",e);var t=e=>{this.enableDataRestore&&this.updateFormState(),this.updateDependencyRules(!0)};this.$form.addEventListener("change",t),this._options=this.options,delete this.options,delete this.formId,this.enableDataRestore?(this.applyFormState(),this.updateFormState()):this.resetForm(),this.updateDependencyRules(),this.events.onInit&&this.events.onInit(this),this.logger.log("init(): Validator has been initialized",this),this.destroy=()=>{this.logger.log("destroy(): Destroying validator..."),this.deleteFormState(),this.resetValidation(),this.eachField(e=>{e.unregister()}),this.$form.removeEventListener("submit",e),this.$form.removeEventListener("change",t)}}registerField(e){this.fields[e.name]&&this.unregisterField(e.name);var t=this,i=e=>{e.name&&this.$form.querySelector('[name="'+e.name+'"]')?(e._validator=t,this.fields[e.name]=new u(e,this.logger.showLogs)):this.logger.logError("registerField(): Couldn't find a field with name '"+e.name+"'")};if("object"==typeof e.name)e.name.forEach(t=>{let s=e;s.name=t,i(s)});else{i(e)}}unregisterField(e){this.fields[e].unregister()}eachField(e){Object.keys(this.fields).forEach(t=>e(this.fields[t]))}isValid(e=[]){let t=!1;return e.length?e.forEach(e=>{1!==this.fields[e]._status&&(t=!0)}):this.eachField(e=>{1!==e._status&&(t=!0)}),!t}getFirstInvalidField(){let e=void 0;return Object.keys(this.fields).every(t=>{let i=this.fields[t];return 0!==i._status||(e=i,!1)}),e}isValidating(){let e=!1;return this.eachField(t=>{-1===t._status&&(e=!0)}),e}getGroupWrapper(e){return this.$form.querySelector("["+s.GROUP_WRAPPER_DATA_ATTRIBUTE+'="'+e+'"]')}getGroupFields(e){var t=[];return this.eachField(i=>{i.group==e&&t.push(i)}),t}validate(e=[],t=(()=>{})){setTimeout(()=>{this._validate(e).then(e=>{t(!0)}).catch(e=>{t(!1)})},1)}_validate(e=[],t=!1){this.logger.log("validate(): Form will be validated"),this.events.onBeforeValidate&&this.events.onBeforeValidate(this);return new Promise((i,s)=>{let r=[];e.length?e.forEach(e=>{r.push(this.fields[e]._validate(t))}):this.eachField(e=>{r.push(e._validate(t))}),Promise.all(r).then(()=>{i()}).catch(()=>{s()}).finally(()=>{this.events.onValidate&&this.events.onValidate(this)})})}resetValidation(e=[]){this.submitting||this.isValidating()||(e.length?e.forEach(e=>{this.fields[e].setUnvalidated()}):this.eachField(e=>{e.setUnvalidated()}),this.updateDependencyRules(),this.logger.log("resetForm(): Form validation has been reset"))}resetForm(){this.submitting||this.isValidating()||(this.events.onBeforeReset&&this.events.onBeforeReset(this),this.deleteFormState(),this.$form.reset(),this.resetValidation(),this._repeatables&&Object.keys(this._repeatables).forEach(e=>{let t=this._repeatables[e];for(let i=0;i<t;i++)this.removeRepeatable(e)}),this.logger.log("resetForm(): Form has been reset"),this.events.onReset&&this.events.onReset(this))}deleteFormState(){window.localStorage["FORMVALIDATOR_FORMDATA_"+this.$form.getAttribute("id")]&&delete window.localStorage["FORMVALIDATOR_FORMDATA_"+this.$form.getAttribute("id")]}updateFormState(){let e={};Object.keys(this.fields).forEach(t=>{if(!this.fields[t])return;let i=this.fields[t];e[i.name]={_status:i._status,status:i.status,message:i.message}}),window.localStorage.setItem("FORMVALIDATOR_FORMDATA_"+this.$form.getAttribute("id"),JSON.stringify({data:this.getSerializedFormData(),repeatables:this._repeatables,validation:e}))}applyFormState(){let e=window.localStorage["FORMVALIDATOR_FORMDATA_"+this.$form.getAttribute("id")];if(e){let t=JSON.parse(e);if(t.repeatables&&Object.keys(t.repeatables).forEach(e=>{let i=t.repeatables[e];for(let t=0;t<i;t++)this.addRepeatable(e,!1)}),t.data){let e=t.data;Object.keys(e).forEach(i=>{let s=e[i],r=this.fields[i];if(r&&(r.setValue(s),this.enableValidateAfterDataRestore&&t.validation&&void 0!==t.validation[i])){let e=t.validation[i];1===e.status?r.setValid(e.message):0===e.status?r.setInvalid(e.message):r.setUnvalidated()}}),this.enableValidateAfterDataRestore||this.resetValidation()}}else this.resetValidation()}handlePreventingDefault(e){e.preventDefault()}disableForm(){this.eachField(e=>{e.disableInteraction()}),this.$form.style.opacity="0.7",this.logger.log("disableForm(): Form has been disabled")}enableForm(){this.eachField(e=>{e.enableInteraction()}),this.$form.style.opacity="1",this.logger.log("enableForm(): Form has been enabled")}getDependencyRuleTargetFields(e){let t=[];return e.groups.forEach(e=>{this.getGroupFields(e).forEach(e=>{t.push(e)})}),e.fields.forEach(e=>{let i=this.fields[e];t.push(i)}),t}updateDependencyRules(e=!1){this.logger.log("updateDependencyRules(): Updating...",this),Object.keys(this.fields).forEach(t=>{var i=this.fields[t];void 0!==i.dependencyRules&&i.dependencyRules.forEach(t=>{t.fields||(t.fields=[]),t.groups||(t.groups=[]);let s=this.getDependencyRuleTargetFields(t),r=()=>{t.groups.forEach(e=>{let t=this.getGroupWrapper(e);t&&(t.classList.add(this.groupWrapperHiddenClass),t.classList.remove(this.groupWrapperVisibleClass))}),s.forEach(e=>{let t=e.getFieldRenderPreferences();Array.from(e.$wrapper.classList).includes(t.wrapperHiddenClass)||(e.$wrapper.classList.add(t.wrapperHiddenClass),e.$wrapper.classList.remove(t.wrapperVisibleClass),e.disableRules(),e.status=1,e._status=1)})},n=()=>{t.groups.forEach(e=>{let t=this.getGroupWrapper(e);t&&(t.classList.remove(this.groupWrapperHiddenClass),t.classList.add(this.groupWrapperVisibleClass))}),s.forEach(t=>{let i=t.getFieldRenderPreferences();Array.from(t.$wrapper.classList).includes(i.wrapperHiddenClass)&&(t.$wrapper.classList.remove(i.wrapperHiddenClass),t.$wrapper.classList.add(i.wrapperVisibleClass),t.enableRules(),t.status=void 0,t._status=void 0,e&&t.setValue(""))})};var l;c[t.name]&&(t={...c[t.name],...(l=t,Object.keys(l).forEach(e=>{void 0===l[e]&&delete l[e]}),l)}),new a(t).test(i.getValue()).then(()=>{this.events.onBeforeShowDependentFields&&this.events.onBeforeShowDependentFields(s),n(),this.events.onShowDependentFields&&this.events.onShowDependentFields(s)}).catch(()=>{this.events.onBeforeHideDependentFields&&this.events.onBeforeHideDependentFields(s),r(),this.events.onHideDependentFields&&this.events.onHideDependentFields(s)})})}),this._onUpdate&&this._onUpdate()}showLoading(){void 0!==this.showLoadingFn&&this.showLoadingFn(this)}hideLoading(){void 0!==this.hideLoadingFn&&this.hideLoadingFn(this)}getFormData(){return new FormData(this.$form)}getSerializedFormData(){let e={};for(let[t,i]of this.getFormData())void 0!==e[t]?(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(i)):e[t]=i;return e}submit(e){let t=()=>{if(this.events.onBeforeSubmit&&this.events.onBeforeSubmit(this),this.logger.log("submit(): Submitting form",this),this.showLoading(),this.submitFn){this.disableForm();let e=e=>{this.submitting=!1,this.hideLoading(),e?(this.events.onSubmit&&this.events.onSubmit(this),this.resetForm()):(this.submitting=!1,this.logger.log("submit(): Form can't be submitted",this),this.events.onSubmitFail&&this.events.onSubmitFail(this)),this.enableForm()};this.submitFn(this,e)}else this.submitting=!1,this.hideLoading(),this.$form.submit(),this.events.onSubmit&&this.events.onSubmit(this),this.resetForm()};this.events.onTrySubmit&&this.events.onTrySubmit(this),this.getFirstInvalidField()&&this.getFirstInvalidField().elements[0].focus(),!0===this.submitting||this.isValidating()||(this.submitting=!0,this._validate().then(()=>{this.isValid()?t():this.submitting=!1}).catch(()=>{this.submitting=!1,this.getFirstInvalidField()&&this.getFirstInvalidField().elements[0].focus()}))}getNodeChildrenFieldsNames(e){let t={},i=[];return Array.from(e.querySelectorAll("["+s.INITIALIZED_FIELD_DATA_ATTRIBUTE+"]")).forEach(e=>{e.hasAttribute("name")&&this.fields[e.getAttribute("name")]&&(t[e.getAttribute("name")]=!0)}),Object.keys(t).forEach(e=>{i.push(e)}),i}addRepeatable(e,t=!0){var i=document.querySelector("["+s.REPEATABLE_WRAPPER_DATA_ATTRIBUTE+'="'+e+'"]'),r=i.querySelectorAll("["+s.REPEATABLE_ITEM_DATA_ATTRIBUTE+"]")[0],a=i.querySelectorAll("["+s.REPEATABLE_ITEM_DATA_ATTRIBUTE+"]").length,n=Number(i.getAttribute(s.REPEATABLE_LIMIT_DATA_ATTRIBUTE));if(n>1&&a>=n)return;this._repeatables[e]=a;let l=this.getNodeChildrenFieldsNames(r),o=[],d=[];l.forEach(e=>{this.fields[e].removeValidationElements(),0===this.fields[e].status||1===this.fields[e].status||-1===this.fields[e].status?o.push(e):d.push(e)});let h=r.cloneNode(!0);l.forEach(e=>{let s=e+a;h.querySelectorAll('[name="'+e+'"]').forEach(e=>{e.setAttribute("id",e.getAttribute("id")+a),e.setAttribute("name",e.getAttribute("name")+a)}),h.querySelectorAll('label[for="'+e+'"]').forEach(e=>{e.hasAttribute("for")&&(e.setAttribute("for",e.getAttribute("for")+a),e.innerHTML=e.innerHTML+" ("+(a+1)+")")}),i.appendChild(h);this.registerField({...this.fields[e],name:s});t&&this.fields[s].setValue(""),this.fields[s].setUnvalidated()}),o.forEach(e=>{this.fields[e].validate()}),d.forEach(e=>{this.fields[e].setUnvalidated()}),this.updateFormState()}removeRepeatable(e,t=-1){var i=document.querySelector("["+s.REPEATABLE_WRAPPER_DATA_ATTRIBUTE+'="'+e+'"]').querySelectorAll("["+s.REPEATABLE_ITEM_DATA_ATTRIBUTE+"]");if(i.length<=1)return;let r;t=-1!==t?Number(t):i.length-1,r=this.getNodeChildrenFieldsNames(i[t]),r.forEach(e=>{this.unregisterField(e)}),i[t].remove(),this._repeatables[e]=this._repeatables[e]-1,this._repeatables[e]<1&&delete this._repeatables[e],this.updateFormState()}}var f=class{constructor(e){return this.steps=e.steps,this.currentStepIndex=void 0,this.onUpdate=e.onUpdate,this.enableStrictStepsOrder=e.enableStrictStepsOrder,this.init()}init(){if(!(this.steps.length<=1)){for(let e=0;e<this.steps.length;e++){let t=this.steps[e],i=t.formValidatorInstance.$form,s=e=>{};t.formValidatorInstance._onUpdate=()=>{this.update()},t.formValidatorInstance&&t.formValidatorInstance.$form&&(i.addEventListener("change",s),t.formValidatorInstance.submitFn=e=>{console.log("enviando o step ",e)})}return this.start(),this.update(),this}}update(){for(let e=0;e<this.steps.length;e++){let t,i,s=this.steps[e],r=s.formValidatorInstance;t=r.isValid()?1:r.isValidating()?-1:0,i="function"==typeof s.enabled&&!s.enabled(),s._state={active:this.currentStepIndex===e,status:t,enabled:i}}this.onUpdate&&this.onUpdate()}setStep(e){if(e<0||e>=this.steps.length||!this.steps[e])return;let t=()=>{for(let e=0;e<this.steps.length;e++){this.steps[e].formValidatorInstance.$form.classList.add("d-none")}this.steps[e].formValidatorInstance.$form.classList.remove("d-none"),this.currentStepIndex=e,this.update()};if(this.enableStrictStepsOrder){let i=[];for(let t=e-1;t>=0;t--)i.push(this.steps[t].formValidatorInstance._validate());Promise.all(i).then(()=>{t()}).catch(()=>{this.steps[e].formValidatorInstance.isValid()&&t()})}else t()}next(){this.steps[this.currentStepIndex].formValidatorInstance._validate().then(()=>{this.setStep(this.currentStepIndex+1)}).catch(()=>{})}previous(){this.setStep(this.currentStepIndex-1)}forEachStep(e,t){}reset(){for(let e=0;e<this.steps.length;e++){this.steps[e].formValidatorInstance.resetForm()}this.setStep(0)}start(){this.setStep(0)}};window.FormValidator=p,window.FormValidatorStepsHandler=f}]);