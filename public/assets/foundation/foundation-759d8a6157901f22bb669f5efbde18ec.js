var libFuncName=null;if("undefined"==typeof jQuery&&"undefined"==typeof Zepto&&"function"==typeof $)libFuncName=$;else if("function"==typeof jQuery)libFuncName=jQuery;else{if("function"!=typeof Zepto)throw new TypeError;libFuncName=Zepto}!function(t,n,e){"use strict";n.matchMedia=n.matchMedia||function(t){var n,e=t.documentElement,i=e.firstElementChild||e.firstChild,r=t.createElement("body"),o=t.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(o),function(t){return o.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',e.insertBefore(r,i),n=42===o.offsetWidth,e.removeChild(r),{matches:n,media:t}}}(e),Array.prototype.filter||(Array.prototype.filter=function(t){if(null==this)throw new TypeError;var n=Object(this),e=n.length>>>0;if("function"==typeof t){for(var i=[],r=arguments[1],o=0;e>o;o++)if(o in n){var a=n[o];t&&t.call(r,a,o,n)&&i.push(a)}return i}}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),e=this,i=function(){},r=function(){return e.apply(this instanceof i&&t?this:t,n.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,r.prototype=new i,r}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(null==this)throw new TypeError;var n=Object(this),e=n.length>>>0;if(0===e)return-1;var i=0;if(arguments.length>1&&(i=Number(arguments[1]),i!=i?i=0:0!=i&&1/0!=i&&i!=-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=e)return-1;for(var r=i>=0?i:Math.max(e-Math.abs(i),0);e>r;r++)if(r in n&&n[r]===t)return r;return-1}),t.fn.stop=t.fn.stop||function(){return this},n.Foundation={name:"Foundation",version:"4.3.1",cache:{},init:function(n,e,i,r,o,a){var s,u=[n,i,r,o],f=[],a=a||!1;if(a&&(this.nc=a),this.rtl=/rtl/i.test(t("html").attr("dir")),this.scope=n||this.scope,e&&"string"==typeof e&&!/reflow/i.test(e)){if(/off/i.test(e))return this.off();if(s=e.split(" "),s.length>0)for(var h=s.length-1;h>=0;h--)f.push(this.init_lib(s[h],u))}else{/reflow/i.test(e)&&(u[1]="reflow");for(var l in this.libs)f.push(this.init_lib(l,u))}return"function"==typeof e&&u.unshift(e),this.response_obj(f,u)},response_obj:function(t,n){for(var e=0,i=n.length;i>e;e++)if("function"==typeof n[e])return n[e]({errors:t.filter(function(t){return"string"==typeof t?t:void 0})});return t},init_lib:function(t,n){return this.trap(function(){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),this.libs[t].init.apply(this.libs[t],n)):function(){}}.bind(this),t)},trap:function(t,n){if(!this.nc)try{return t()}catch(e){return this.error({name:n,message:"could not be initialized",more:e.name+" "+e.message})}return t()},patch:function(t){this.fix_outer(t),t.scope=this.scope,t.rtl=this.rtl},inherit:function(t,n){for(var e=n.split(" "),i=e.length-1;i>=0;i--)this.lib_methods.hasOwnProperty(e[i])&&(this.libs[t.name][e[i]]=this.lib_methods[e[i]])},random_str:function(t){var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*n.length));for(var e="",i=0;t>i;i++)e+=n[Math.floor(Math.random()*n.length)];return e},libs:{},lib_methods:{set_data:function(t,n){var e=[this.name,+new Date,Foundation.random_str(5)].join("-");return Foundation.cache[e]=n,t.attr("data-"+this.name+"-id",e),n},get_data:function(t){return Foundation.cache[t.attr("data-"+this.name+"-id")]},remove_data:function(n){n?(delete Foundation.cache[n.attr("data-"+this.name+"-id")],n.attr("data-"+this.name+"-id","")):t("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[t(this).attr("data-"+this.name+"-id")],t(this).attr("data-"+this.name+"-id","")})},throttle:function(t,n){var e=null;return function(){var i=this,r=arguments;clearTimeout(e),e=setTimeout(function(){t.apply(i,r)},n)}},data_options:function(n){function e(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function i(n){return"string"==typeof n?t.trim(n):n}var r,o,a={},s=(n.attr("data-options")||":").split(";"),u=s.length;for(r=u-1;r>=0;r--)o=s[r].split(":"),/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),e(o[1])&&(o[1]=parseInt(o[1],10)),2===o.length&&o[0].length>0&&(a[i(o[0])]=i(o[1]));return a},delay:function(t,n){return setTimeout(t,n)},scrollTo:function(e,i,r){if(!(0>r)){var o=i-t(n).scrollTop(),a=10*(o/r);this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(a,10))||(n.scrollTo(0,t(n).scrollTop()+a),this.scrollTo(e,i,r-10))}.bind(this),10)}},scrollLeft:function(t){return t.length?"scrollLeft"in t[0]?t[0].scrollLeft:t[0].pageXOffset:void 0},empty:function(t){if(t.length&&t.length>0)return!1;if(t.length&&0===t.length)return!0;for(var n in t)if(hasOwnProperty.call(t,n))return!1;return!0}},fix_outer:function(t){t.outerHeight=function(t,n){return"function"==typeof Zepto?t.height():"undefined"!=typeof n?t.outerHeight(n):t.outerHeight()},t.outerWidth=function(t,n){return"function"==typeof Zepto?t.width():"undefined"!=typeof n?t.outerWidth(n):t.outerWidth()}},error:function(t){return t.name+" "+t.message+"; "+t.more},off:function(){return t(this.scope).off(".fndtn"),t(n).off(".fndtn"),!0},zj:t},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(libFuncName,this,this.document);