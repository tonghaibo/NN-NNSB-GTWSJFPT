/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

function FastClick(t,e){"use strict";function i(t,e){return function(){return t.apply(e,arguments)}}var n;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,!FastClick.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,s=0,c=o.length;c>s;s++)r[o[s]]=i(r[o[s]],r);deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,i,n){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,i.hijacked||i,n):o.call(t,e,i,n)},t.addEventListener=function(e,i,n){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,i.hijacked||(i.hijacked=function(t){t.propagationStopped||i(t)}),n):o.call(t,e,i,n)}),"function"==typeof t.onclick&&(n=t.onclick,t.addEventListener("click",function(t){n(t)},!1),t.onclick=null)}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var i,n;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),n=e.changedTouches[0],i=document.createEvent("MouseEvents"),i.initMouseEvent(this.determineEventType(t),!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},FastClick.prototype.determineEventType=function(t){"use strict";return deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(t){"use strict";var e;deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,i;if(e=t.fastClickScrollParent,!e||!e.contains(t)){i=t;do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i;break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,i,n;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],deviceIsIOS){if(n=window.getSelection(),n.rangeCount&&!n.isCollapsed)return!0;if(!deviceIsIOS4){if(i.identifier&&i.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=i.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],i=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i?!0:!1},FastClick.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,i,n,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),n=s.tagName.toLowerCase(),"label"===n){if(e=this.findControl(s)){if(this.focus(s),deviceIsAndroid)return!1;s=e}}else if(this.needsFocus(s))return t.timeStamp-i>100||deviceIsIOS&&window.top!==window&&"input"===n?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,t),deviceIsIOS&&"select"===n||(this.targetElement=null,t.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(t){"use strict";var e,i,n;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(n=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),n[1]>=10&&n[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction?!0:!1},FastClick.attach=function(t,e){"use strict";return new FastClick(t,e)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;

/*! intel-appframework - v3.0.0 - 2015-04-02 */

/**
 * af.shim.js
 * @copyright Intel 2014
 * @author Ian Maffett
 * @description jQuery helper functions for App Framework
 */
/* jshint eqeqeq:false */
(function($,window){
    "use strict";
    jQuery.event.props.push("touches");
    jQuery.event.props.push("originalTouches");
    jQuery.event.props.push("changedTouches");
    var nundefined, document = window.document,classCache = {},isWin8=(typeof(MSApp)==="object");

    function classRE(name) {
        return name in classCache ? classCache[name] : (classCache[name] = new RegExp("(^|\\s)" + name + "(\\s|$)"));
    }
    function _shimNodes(nodes, obj) {
        if (!nodes)
            return;
        if (nodes.nodeType) {
            obj[obj.length++] = nodes;
            return;
        }
        for (var i = 0, iz = nodes.length; i < iz; i++)
            obj[obj.length++] = nodes[i];
    }
    $.extend($.fn,{
        /**
         * Get/Set vendor specific CSS
         * Also set the vendor neutral version
         * @param {String} attribute to get
         * @param {String} value to set as
         * @return {Object} an appframework object
         * @title $().css(attribute,[value])
        */
        vendorCss: function (attribute, value, obj) {
            this.css(attribute.toLowerCase(),value,obj);
            return this.css($.feat.cssPrefix + attribute, value, obj);
        },
        /**
         * Performs a css vendor specific transform:translate operation on the collection.
         *
         ```
            $("#main").cssTranslate('200px,0,0');
         ```
         * @param {String} Transform values
         * @return {Object} an appframework object
         * @title $().vendorCss(value)
         */
        cssTranslate: function (val) {
            this.vendorCss("Transform", "translate" + $.feat.cssTransformStart + val + $.feat.cssTransformEnd);
        },
        /**
         * Gets the computed style of CSS values
         *
        ```
           $("#main").computedStyle('display');
        ```
         * @param {String} css property
         * @return {Int|String|Float|} css vlaue
         * @title $().computedStyle()
         */
        computedStyle:function(val){
            if(this.length===0||val==nundefined) return;
            return window.getComputedStyle(this[0],"")[val];
        },
        replaceClass: function(name, newName) {
            if (name == nundefined || newName == nundefined) return this;
            var replaceClassFn=function(cname) {
                classList = classList.replace(classRE(cname), " ");
            };
            for (var i = 0; i < this.length; i++) {
                var classList = this[i].className;

                name.split(/\s+/g).concat(newName.split(/\s+/g)).forEach(replaceClassFn);
                classList = classList.trim();
                if (classList.length > 0) {
                    this[i].className = (classList + " " + newName).trim();
                } else
                    this[i].className = newName;
            }
            return this;
        }
    });
    function detectUA($, userAgent) {
        $.os = {};

        $.os.webkit = userAgent.match(/WebKit\/([\d.]+)/) ? true : false;
        $.os.android = userAgent.match(/(Android)\s+([\d.]+)/) || userAgent.match(/Silk-Accelerated/) ? true : false;
        $.os.androidICS = $.os.android && userAgent.match(/(Android)\s4/) ? true : false;
        $.os.ipad = userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false;
        $.os.iphone = !$.os.ipad && userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false;
        $.os.ios7 = ($.os.ipad||$.os.iphone)&&(userAgent.match(/7_/)||userAgent.match(/8_/)) ? true : false;
        $.os.webos = userAgent.match(/(webOS|hpwOS)[\s\/]([\d.]+)/) ? true : false;
        $.os.touchpad = $.os.webos && userAgent.match(/TouchPad/) ? true : false;
        $.os.ios = $.os.ipad || $.os.iphone;
        $.os.playbook = userAgent.match(/PlayBook/) ? true : false;
        $.os.blackberry10 = userAgent.match(/BB10/) ? true : false;
        $.os.blackberry = $.os.playbook || $.os.blackberry10|| userAgent.match(/BlackBerry/) ? true : false;
        $.os.chrome = userAgent.match(/Chrome/) ? true : false;
        $.os.opera = userAgent.match(/Opera/) ? true : false;
        $.os.fennec = userAgent.match(/fennec/i) ? true : userAgent.match(/Firefox/) ? true : false;
        $.os.ie = userAgent.match(/MSIE 10.0/i)||userAgent.match(/Trident\/7/i) ? true : false;
        $.os.ieTouch = $.os.ie && userAgent.toLowerCase().match(/touch/i) ? true : false;
        $.os.tizen = userAgent.match(/Tizen/i)?true:false;
        $.os.supportsTouch = ((window.DocumentTouch && document instanceof window.DocumentTouch) || "ontouchstart" in window);
        $.os.kindle=userAgent.match(/Silk-Accelerated/)?true:false;
        //features
        $.feat = {};

        $.feat.cssTransformStart = !$.os.opera ? "3d(" : "(";
        $.feat.cssTransformEnd = !$.os.opera ? ",0)" : ")";
        if ($.os.android && !$.os.webkit)
            $.os.android = false;


        //IE tries to be webkit
        if(userAgent.match(/IEMobile/i)){
            $.each($.os,function(ind){
                $.os[ind]=false;
            });
            $.os.ie=true;
            $.os.ieTouch=true;
        }
        var items=["Webkit","Moz","ms","O"];
        for(var j=0;j<items.length;j++){
            if(document.documentElement.style[items[j]+"Transform"]==="")
                $.feat.cssPrefix=items[j];
        }

    }

    detectUA($, navigator.userAgent);
    $.__detectUA = detectUA; //needed for unit tests

    /**
     * Utility function to create a psuedo GUID
       ```
       var id= $.uuid();
       ```
     * @title $.uuid
     */
    $.uuid = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    /**
     * Gets the css matrix, or creates a fake one
       ```
       $.getCssMatrix(domElement)
       ```
       @returns matrix with postion
       */
    $.getCssMatrix = function(ele) {
        if ($.is$(ele)) ele = ele.get(0);

        var MatrixFN = window.WebKitCSSMatrix || window.MSCSSMatrix;

        if (ele === nundefined) {
            if (MatrixFN) {
                return new MatrixFN();
            }
            else {
                return {
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0,
                    e: 0,
                    f: 0
                };
            }
        }

        var computedStyle = window.getComputedStyle(ele);

        var transform = computedStyle.webkitTransform ||
                        computedStyle.transform ||
                        computedStyle[$.feat.cssPrefix + "Transform"];

        if (MatrixFN)
            return new MatrixFN(transform);
        else if (transform) {
            //fake css matrix
            var mat = transform.replace(/[^0-9\-.,]/g, "").split(",");
            return {
                a: +mat[0],
                b: +mat[1],
                c: +mat[2],
                d: +mat[3],
                e: +mat[4],
                f: +mat[5]
            };
        }
        else {
            return {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: 0,
                f: 0
            };
        }
    };

    /**
     * $.create - a faster alertnative to $("<div id='main'>this is some text</div>");
      ```
      $.create("div",{id:'main',innerHTML:'this is some text'});
      $.create("<div id='main'>this is some text</div>");
      ```
      * @param {String} DOM Element type or html
      * @param [{Object}] properties to apply to the element
      * @return {Object} Returns an appframework object
      * @title $.create(type,[params])
      */
    $.create = function(type, props) {
        var elem;
        var f = new $();
        if (props || type[0] !== "<") {
            if (props.html){
                props.innerHTML = props.html;
                delete props.html;
            }

            elem = document.createElement(type);
            for (var j in props) {
                elem[j] = props[j];
            }
            f[f.length++] = elem;
        } else {
            elem = document.createElement("div");
            if (isWin8) {
                MSApp.execUnsafeLocalFunction(function() {
                    elem.innerHTML = type.trim();
                });
            } else
                elem.innerHTML = type;
            _shimNodes(elem.childNodes, f);
        }
        return f;
    };
    /**
     * $.query  - a no longer faster alertnative to $("div") (App Framework was faster)
      ```
      $.query(".panel");
      ```
      * @param {String} selector
      * @param {Object} [context]
      * @return {Object} Returns an appframework object
      * @title $.query(selector,[context])
      */
    $.query = function (sel, what) {
        try {
            return $(sel,what);
        }
        catch(e) {
            return $();
        }
    };

    $.isObject = function (obj) {
        return typeof obj === "object";
    };


    $.is$ = function (obj) {
        return obj instanceof $;
    };
    //Shim to put touch events on the jQuery special event

    window.$afm=$;

    $.feat.TouchList=function(){
        this.length=0;
    };

    $.feat.TouchList.prototype = {
        item:function(ind){
            return this[ind];
        },
        _add:function(touch){
            this[this.length]=touch;
            this.length++;
        }
    };
    var identifier=1000;
    $.feat.Touch = function() {
        this.identifier=identifier++;
    };

    $.feat.Touch.prototype = {
        "clientX":0,
        "clientY":0,
        "screenX":0,
        "screenY":0,
        "pageX":0,
        "pageY":0,
        "identifier":0
    };

})(jQuery,window);

window.af=window.jq=jQuery;

/**
 * appframework.ui - A User Interface library for App Framework applications
 *
 * @copyright 2011-2014 Intel
 * @author Intel
 * @version 3.0
 */
/* global FastClick*/

 /* jshint camelcase:false*/
(function($) {
    "use strict";
    var startPath = window.location.pathname + window.location.search;
    var defaultHash = window.location.hash;
    var previousTarget = defaultHash;
    var AFUi = function() {
        // Init the page
        var that = this;


        if (typeof define === "function" && define.amd) {
            that.autoLaunch=false;
            define("appframeworkui", [], function() {
                return $.afui;
            });
        } else if (typeof module !== "undefined" && module.exports) {
            that.autoLaunch=false;
            $.afui = that;
        }

        var setupAFDom = function() {
            setupCustomTheme();
            if(window.FastClick)
                FastClick.attach(document.documentElement);
        };

        if (document.readyState === "complete" || document.readyState === "loaded") {
            setupAFDom();
            if(that.init)
                that.autoBoot();
            else{
                $(window).one("afui:init", function() {
                    that.autoBoot();
                });
            }
        } else $(document).ready(
            function() {
                setupAFDom();
                if(that.init)
                    that.autoBoot();
                else{
                    $(window).one("afui:init", function() {
                        that.autoBoot();
                    });
                }
            },
        false);

        //click back event
        window.addEventListener("popstate", function() {

            if(!that.useInternalRouting) return;
            var id = that.getPanelId(document.location.hash);
            var hashChecker = document.location.href.replace(document.location.origin + "/", "");
            //make sure we allow hash changes outside afui

            if (hashChecker === "#") return;
            if (id === "" && that.history.length === 1) //Fix going back to first panel and an empty hash
                id = "#" + that.firstPanel.id;
            if (id === "") return;
            if (af(id).filter(".panel").length === 0) return;

            if (id !== "#" + that.activeDiv.id) that.goBack();

        }, false);


        window.addEventListener("orientationchange",function(){
            window.scrollTo(0, 0);
        });

        function setupCustomTheme() {

            if (that.useOSThemes) {

                var $el=$(document.body);
                $el.removeClass("ios ios7 win8 tizen bb android light dark firefox");
                if ($.os.android)
                    $el.addClass("android");
                else if ($.os.ie) {
                    $el.addClass("win8");
                } else if ($.os.blackberry||$.os.blackberry10||$.os.playbook) {
                    $el.addClass("bb");
                    that.backButtonText = "Back";
                } else if ($.os.ios7){
                    $el.addClass("ios7");
                } else if ($.os.ios)
                    $el.addClass("ios7");
                else if($.os.tizen)
                    $el.addClass("tizen");
                else if($.os.fennec)
                    $el.addClass("firefox");
            }
            if($.os.ios7&&that.overlayStatusbar){
                that.ready(function(){
                    $(document.body).addClass("overlayStatusbar");
                });
            }
        }
    };


    var clickHandlers=[];
    AFUi.prototype = {
        init:false,
        showLoading: true,
        loadingText: "Loading Content",
        remotePages: {},
        history: [],
        views:{},
        _readyFunc: null,
        doingTransition: false,
        ajaxUrl: "",
        transitionType: "slide",
        firstPanel: "",
        hasLaunched: false,
        isLaunching:false,
        launchCompleted: false,
        activeDiv: "",
        customClickHandler: "",
        useOSThemes: true,
        overlayStatusbar: false,
        useAutoPressed: true,
        useInternalRouting:true,
        autoBoot: function() {
            this.hasLaunched = true;
            if (this.autoLaunch) {
                this.launch();
            }
        },
        /**
         * This blocks the page from bouncing on iOS
         * @api private
         */
        blockPageBounce:function(enable){
            if(enable===false){
                window.removeEventListener("touchmove",this.handlePageBounce,false);
                window.removeEventListener("touchstart",this.handlePageBounce,false);
                return;
            }

            window.addEventListener("touchmove",this.handlePageBounce,false);
            window.addEventListener("touchstart",this.handlePageBounce,false);

        },
        /**
         * Handle touch events for scrolling divs
         * @api private
         */
        handlePageBounce:function(evt){
            if(evt.type==="touchstart"){
                this._startTouchY=evt.touches[0].screenY;
                return;
            }
            var panel=$(evt.target).closest(".panel");
            if(panel.length===0) return evt.preventDefault();
            var el=panel.get(0);

            var canScroll=el.scrollHeight>el.clientHeight;
            var hasTouchOverflow=$(el).computedStyle("-webkit-overflow-scrolling")==="touch";
            var hasOverflow=$(el).computedStyle("overflowY")!=="hidden";
            var height=parseInt($(el).computedStyle("height"),10);
            if(canScroll&&hasTouchOverflow&&hasOverflow){

                var currY=evt.touches[0].screenY;
                var scrollAtTop=((this._startTouchY<=currY)&&(el.scrollTop===0));
                var scrollAtBottom=((this._startTouchY>=currY)&&((el.scrollHeight-el.scrollTop)===height));
                if(scrollAtTop||scrollAtBottom)
                    evt.preventDefault();
                return;
            }

        },
        /**
         * Register a data directive for a click event.  Plugins use this to allow
         * html based execution (see af.popup.js)
         ```
         $.afui.registerDataDirective("[data-foo]",function(){
            console.log("foo was clicked");
         })
         ```
         * @param {string} selector
         * @param {function} callback to execute
         * @title $.afui.registerDataDirective
         */
        registerDataDirective:function(selector,cb){
            clickHandlers.push({sel:selector,cb:cb});
        },
        /**
         * This enables the tab bar ability to keep pressed states on elements
           ```
           $.afui.enableTabBar();
           ```
           @title $.afui.enableTabBar
         */
        enableTabBar:function(){
            $(document).on("click",".button-grouped.tabbed",function(e){
                var $el=$(e.target);
                $el.closest(".tabbed").find(".button").data("ignore-pressed","true").removeClass("pressed");
                //this is a hack, but the touchEvents plugin will remove pressed
                $el.closest(".button").addClass("pressed");
                setTimeout(function(){
                    $el.closest(".button").addClass("pressed");
                });
            });
        },
         /**
         * This disables the tab bar ability to keep pressed states on elements
           ```
           $.afui.disableTabBar();
           ```
         * @title $.afui.disableTabBar
         */
        disableTabBar:function(){
            $(document).off("click",".button-grouped.tabbed");
            $(".button-grouped.tabbed .button").removeAttr("data-ignore-pressed");
        },

        /**
          * This is a boolean property.   When set to true, we manage history and update the hash
             ```
            $.afui.manageHistory=false;//Don't manage for apps using Backbone
            ```
          *@title $.afui.manageHistory
          */
        manageHistory: true,

        /**
         * This is a boolean property.  When set to true (default) it will load that panel when the app is started
           ```
           $.afui.loadDefaultHash=false; //Never load the page from the hash when the app is started
           $.afui.loadDefaultHash=true; //Default
           ```
         *@title $.afui.loadDefaultHash
         */
        loadDefaultHash: true,
        /**
         * This is a shorthand call to the $.actionsheet plugin.  We wire it to the afui div automatically
           ```
           $.afui.actionsheet("<a href='javascript:;' class='button'>Settings</a> <a href='javascript:;' class='button red'>Logout</a>")
           $.afui.actionsheet("[{
                        text: 'back',
                        cssClasses: 'red',
                        handler: function () { $.afui.goBack(); ; }
                    }, {
                        text: 'show alert 5',
                        cssClasses: 'blue',
                        handler: function () { alert("hi"); }
                    }, {
                        text: 'show alert 6',
                        cssClasses: '',
                        handler: function () { alert("goodbye"); }
                    }]");
           ```
         * @param {(string|Array.<string>)} links
         * @title $.afui.actionsheet()
         */
        actionsheet: function(opts) {
            return $.query(document.body).actionsheet(opts);
        },
        /**
         * This is a wrapper to $.popup.js plugin.  If you pass in a text string, it acts like an alert box and just gives a message
           ```
           $.afui.popup(opts);
           $.afui.popup( {
                        title:"Alert! Alert!",
                        message:"This is a test of the emergency alert system!! Don't PANIC!",
                        cancelText:"Cancel me",
                        cancelCallback: function(){console.log("cancelled");},
                        doneText:"I'm done!",
                        doneCallback: function(){console.log("Done for!");},
                        cancelOnly:false
                      });
           $.afui.popup('Hi there');
           ```
         * @param {(object|string)} options
         * @title $.afui.popup(opts)
         */
        popup: function(opts) {
            return $.query(document.body).popup(opts);
        },

        /**
         * This is a reference to the drawer plugin.
           ```
            $.afui.drawer.show('#left','left','reveal')
           ```
        * @param {string} id of drawer
        * @param {string} position (left|right)
        * @param {string} transition (push, cover, reveal)
        * @title $.afui.drawer.show
        */

         /**
         * This is a reference to the drawer plugin.
           ```
            $.afui.drawer.hide('#left','left')
           ```
        * @param {string} id of drawer
        * @param {string} position (left|right)
        * @title $.afui.drawer.hide
        */


        /**
         *This will throw up a mask and block the UI
         ```
         $.afui.blockUI(.9)
         ````
         * @param {number} opacity
         * @title $.afui.blockUI(opacity)
         */
        blockUI: function(opacity) {
            $.blockUI(opacity);
        },
        /**
         *This will remove the UI mask
         ```
         $.afui.unblockUI()
         ````
         * @title $.afui.unblockUI()
         */
        unblockUI: function() {
            $.unblockUI();
        },

        /**
         * Boolean if you want to auto launch afui
           ```
           $.afui.autoLaunch = false; //
           ```
         * @title $.afui.autoLaunch
         */
        autoLaunch: true,
        /**
         * function to fire when afui is ready and completed launch
           ```
           $.afui.ready(function(){console.log('afui is ready');});
           ```
         * @param {function} param function to execute
         * @title $.afui.ready
         */
        ready: function(param) {
            if (this.launchCompleted)
                param();
            else {
                $(document).one("afui:ready", function() {
                    param();
                });
            }
        },

        /**
         * Initiate a back transition
           ```
           $.afui.goBack()
           ```

         * @title $.afui.goBack()
         * @param {number=} delta relative position from the last element (> 0)
         */
        goBack: function(e) {
            //find the view
            var view=$(this.activeDiv).closest(".view");
            if(e&&e.target)
                view=$(e.target).closest(".view");

            if(view.length===0) return;

            //history entry
            if(!this.views[view.prop("id")]) return;
            var hist=this.views[view.prop("id")];

            if(hist.length===0) return;
            var item=hist.pop();

            if(item.length===0) return;
            if(hist.length>0){

                var toTarget=hist[hist.length-1].target;
                if(!toTarget||item.target===toTarget) return;
                this.runTransition(item.transition,item.target,toTarget,true);
                this.loadContentData(toTarget,view,true);

                this.updateHash(toTarget.id);
            }
            else {
                //try to dismiss the view
                try{
                    this.dismissView(item.target,item.transition);
                }
                catch(ex){
                }

            }
        },
        /**
         * Clear the history queue for the current view based off the active div
           ```
           $.afui.clearHistory()
           ```

         * @title $.afui.clearHistory()
         */
        clearHistory: function() {
            //find the view
            var view=this.findViewTarget(this.activeDiv);
            this.views[view.prop("id")]=[];
            this.setBackButtonVisibility(false);
        },

        /**
         * PushHistory
           ```
           $.afui.pushHistory(previousPage, newPage, transition, hashExtras)
           ```
         * @api private
         * @title $.afui.pushHistory()
         */
        pushHistory: function(previousPage, newPage, transition, hashExtras) {
            //push into local history


            //push into the browser history
            try {
                if (!this.manageHistory) return;
                window.history.pushState(newPage, newPage, startPath + "#" + newPage + hashExtras);
                $(window).trigger("hashchange", null, {
                    newUrl: startPath + "#" + newPage + hashExtras,
                    oldUrl: startPath + previousPage
                });
            } catch (e) {}
        },


        /**
         * Updates the current window hash
         *
         * @param {string} newHash New Hash value
         * @title $.afui.updateHash(newHash)
         * @api private
         */
        updateHash: function(newHash) {
            if (!this.manageHistory) return;
            newHash = newHash.indexOf("#") === -1 ? "#" + newHash : newHash; //force having the # in the begginning as a standard
            previousTarget = newHash;

            var previousHash = window.location.hash;
            var panelName = this.getPanelId(newHash).substring(1); //remove the #
            try {
                window.history.replaceState(panelName, panelName, startPath + newHash);
                $(window).trigger("hashchange", null, {
                    newUrl: startPath + newHash,
                    oldUrl: startPath + previousHash
                });
            } catch (e) {}
        },
        /**
        * gets the panel name from an hash
        * @api private
        */
        getPanelId: function(hash) {
            var firstSlash = hash.indexOf("/");
            return firstSlash === -1 ? hash : hash.substring(0, firstSlash);
        },

        /**
        * set the back button text
           ```
           $.afui.setBackButtonText("about");
           ```
        * @param {string} text
        * @title $.afui.setBackButtonText(title)
        */
        setBackButtonText:function(text){
            $(this.activeDiv).closest(".view").find("header .backButton").html(text);
        },
        /**
         * Set the title of the active header from
         ```
         $.afui.setTitle("New Title")
         ```
         * @param {string|object} String or DOM node to get the title from
         * @title $.afui.setTitle
         */
        setTitle:function(item){
            //find the header
            var title="";
            if(typeof(item)==="string"){
                title=item;
                item=$(this.activeDiv).closest(".view");
            }
            else if($(item).attr("data-title"))
                title=$(item).attr("data-title");
            else if($(item).attr("title"))
                title=$(item).attr("title");

            if(title)
                $(item).closest(".view").children("header").find("h1").html(title);

        },
        /**
         * Get the title of the active header
         ```
         $.afui.getTitle()
         ```
         * @title $.afui.getTitle
         */
        getTitle:function(){
            return $(this.activeDiv).closest(".view").children("header").find("h1").html();
        },
         /**
         * Set the visibility of the back button for the current header
         ```
         $.afui.setBackButtonVisbility(true)
         ```
         * @param {boolean} Boolean to set the visibility. true show, false hide
         * @title $.afui.setBackButtonVisbility
         */
        setBackButtonVisibility:function(what){
            var visibility=what?"visible":"hidden";
            $(this.activeDiv).closest(".view").children("header").find(".backButton").css("visibility",visibility);
        },

        /**
         * Update a badge on the selected target.  Position can be
            bl = bottom left
            tl = top left
            br = bottom right
            tr = top right (default)
           ```
           $.afui.updateBadge("#mydiv","3","bl","green");
           ```
         * @param {string} target
         * @param {string} value
         * @param {string=} position
         * @param {(string=|object)} color Color or CSS hash
         * @title $.afui.updateBadge(target,value,[position],[color])
         */
        updateBadge: function(target, value, position, color) {
            if (position === undefined) position = "";

            var $target = $(target);
            var badge = $target.find("span.af-badge");

            if (badge.length === 0) {
                if ($target.css("position") !== "absolute") $target.css("position", "relative");
                badge = $.create("span", {
                    className: "af-badge " + position,
                    html: value
                });
                $target.append(badge);
            } else badge.html(value);
            badge.removeClass("tl bl br tr");
            badge.addClass(position);
            if (color === undefined)
                color = "red";
            if ($.isObject(color)) {
                badge.css(color);
            } else if (color) {
                badge.css("background", color);
            }
            badge.data("ignore-pressed", "true");


        },
        /**
         * Removes a badge from the selected target.
           ```
           $.afui.removeBadge("#mydiv");
           ```
         * @param {string} target
         * @title $.afui.removeBadge(target)
         */
        removeBadge: function(target) {
            $(target).find("span.af-badge").remove();
        },
        /**
         * Show the loading mask with specificed text
           ```
           $.afui.showMask()
           $.afui.showMask('Fetching data...')
           ```

         * @param {string=} text
         * @title $.afui.showMask(text);
         */
        showMask: function(text) {
            if (!text) text = this.loadingText || "";
            $.query("#afui_mask>h1").html(text);
            $.query("#afui_mask").show();
        },
        /**
         * Hide the loading mask
            ```
            $.afui.hideMask();
            ```
         * @title $.afui.hideMask();
         */
        hideMask: function() {
            $.query("#afui_mask").hide();
        },
        /**
         * @api private
         */

        dismissView:function(target,transition){
            transition=transition.replace(":dismiss","");
            var theView=$(target).closest(".view");
            this.runTransition(transition,theView,null,true,$(target.hash).addClass("active").closest(".view"));
            //this.activeDiv=target;
            this.activeDiv=$(".view").not(theView).find(".panel.active").get(0);
            this.updateHash(this.activeDiv.id);
        },
        /**
         * This is called to initiate a transition or load content via ajax.
         * We can pass in a hash+id or URL.
           ```
           $.afui.loadContent("#main",false,false,"up");
           ```
         * @param {string} target
         * @param {boolean=} newtab (resets history)
         * @param {boolean=} go back (initiate the back click)
         * @param {string=} transition
         * @param {object=} anchor
         * @title $.afui.loadContent(target, newTab, goBack, transition, anchor);
         * @api public
         */
        loadContent: function(target, newView, back, transition, anchor) {

            if (this.doingTransition) {
                return;
            }

            if (target.length === 0) return;
            if(target.indexOf("#")!==-1){
                this.loadDiv(target, newView, back, transition,anchor);
            }
            else{
                this.loadAjax(target, newView, back, transition,anchor);
            }
        },
        /**
         * This is called internally by loadContent.  Here we are loading a div instead of an Ajax link
           ```
           $.afui.loadDiv("#main",false,false,"up");
           ```
         * @param {string} target
         * @param {boolean=} newview (resets history)
         * @param {boolean=} back Go back (initiate the back click)
         * @param {string=} transition
         * @title $.afui.loadDiv(target,newTab,goBack,transition);
         * @api private
         */
        loadDiv: function(target, newView, back, transition,anchor) {
            // load a div
            var newDiv = target;

            var hashIndex = newDiv.indexOf("#");
            var slashIndex = newDiv.indexOf("/");
            if ((slashIndex !== -1)&&(hashIndex !== -1)) {
                //Ignore everything after the slash in the hash part of a URL
                //For example: app.com/#panelid/option1/option2  will become -> app.com/#panelid
                //For example: app.com/path/path2/path3  will still be -> app.com/path/path2/path3
                if (slashIndex > hashIndex) {
                    newDiv = newDiv.substr(0, slashIndex);
                }
            }
            newDiv = newDiv.replace("#", "");

            newDiv = $.query("#" + newDiv).get(0);
            if (!newDiv) {
                $(document).trigger("missingpanel", null, {missingTarget: target});
                this.doingTransition=false;
                return;
            }

            if (newDiv === this.activeDiv && !back) {
                //toggle the menu if applicable
                this.doingTransition=false;
                return;
            }

            this.transitionType = transition;

            var view=this.findViewTarget(newDiv);
            var previous=this.findPreviousPanel(newDiv,view);



            //check current view
            var currentView;
            if(anchor){
                currentView=this.findViewTarget(anchor);
            }
            else
                currentView=this.findViewTarget(this.activeDiv);

            //Check if we are dealing with the same view

            var isSplitViewParent=(currentView&&currentView.get(0)!==view.get(0)&&currentView.closest(".splitview").get(0)===view.closest(".splitview").get(0)&&currentView.closest(".splitview").length!==0);
            if(isSplitViewParent){
                newView=false;
            }
            $(newDiv).trigger("panelbeforeload");
            $(previous).trigger("panelbeforeunload");
            var isNewView=false;
            //check nested views
            if(!isSplitViewParent)
                isSplitViewParent=currentView.parent().closest(".view").length===1;

            if(isSplitViewParent&&currentView&&currentView.get(0)!==view.get(0))
                $(currentView).trigger("nestedviewunload");


            if(!isSplitViewParent&&(newView||currentView&&currentView.get(0)!==view.get(0))){
                //Need to transition the view
                newView=currentView||newView;
                this.runViewTransition(transition,view,newView,newDiv,back);

                this.updateViewHistory(view,newDiv,transition,target);
                isNewView=true;
            }
            else{
                this.runTransition(transition,previous, newDiv, back);
                this.updateViewHistory(view,newDiv,transition,target);
            }

            //Let's check if it has a function to run to update the data
            //Need to call after parsePanelFunctions, since new headers can override
            this.loadContentData(newDiv,view,false,isNewView);

        },
        /**
         * @api private
         */
        findViewTarget:function(panel){
            var view=$(panel).closest(".view");
            if(!view) return false;
            if(!this.views[view.prop("id")])
                this.views[view.prop("id")]=[];
            return view;
        },
       /**
         * @api private
         */
        findPreviousPanel:function(div,view){
            var item=$(view).find(">.pages .panel.active").not(div);
            if(item.length===0)
                item=$(view).find(">.pages .panel:first-of-type");
            return item.get(0);
        },
        /**
         * This is called internally by loadDiv.  This sets up the back button in the header and scroller for the panel
           ```
           $.afui.loadContentData("#main",false,false,"up");
           ```
         * @param {string} target
         * @param {boolean=} newtab (resets history)
         * @param {boolean=} go back (initiate the back click)
         * @title $.afui.loadContentData(target,newTab,goBack);
         * @api private
         */
        loadContentData: function(what,view,back,isNewView) {
            this.activeDiv = what;
            this.setTitle(what,view,back,isNewView);
            this.showBackButton(view,isNewView);
            this.setActiveTab(what,view);
        },

        /**
         * Set the active tab in the footer
         ```
         $.afui.setActiveTab("main",currView)
         ```
         @param {string|Node} id or DOM node for footer tab
         @param {Node} DOM node of the current view to set the footer
         @title $.afui.setActiveTab
         */
        setActiveTab:function(ele,view){
            var elementId;
            if(typeof(ele)!=="string")
                elementId=$(ele).prop("id");
            /*
            Check if an item exists:
            Note that footer hrefs' may point to elements preceded by a # when trying to load a div (f.ex.: <footer><a href="#panelId">).
            But in some other cases footer hrefs' may point to elements not preceded by a #
                F.ex.: <footer><a href="ajaxRequest"> when doing ajax calls
                F.ex.: <footer><a href="listX/itemY"> when using pushState routers - read more here: https://github.com/01org/appframework/issues/837
            We check whether an item exists including both options here (note the &&):
            */
            if((view.find("footer").find("a").filter("[href='"+elementId+"']").length===0)&&(view.find("footer").find("a").filter("[href='#"+elementId+"']").length===0)) return;
            var tmp = view.find("footer").find("a").removeClass("pressed").attr("data-ignore-pressed","true");
            /*
            Now we need to activate the elementId. We have to do this twice again. Once in case of loading a div using AF's router and once again in case of pushState routers or loading Ajax.
            */
            //In case of an Ajax call or if using a pushState router:
            tmp.filter("[href='"+elementId+"']").addClass("pressed");
            //In case of an loading a div with AF's internal router:
            tmp.filter("[href='#"+elementId+"']").addClass("pressed");
        },

         /**
         * Show or hide the back button
         ```
         $.afui.showBackButton(view,isNewView)
         ```
         @param {Node} DOM node of current view
         @param {boolean} Are we loading a new view (hide the back button)
         @title $.afui.showBackButton
         */
        showBackButton:function(view,isNewView) {
            var items=(this.views[view.prop("id")].length);
            var hdr=view.children("header");
            if(hdr.length===0) return;

            if(items>=2&&isNewView!==true){
                //Add the back button if it's not there
                if(hdr.find(".backButton").length===1) return;
                hdr.prepend("<a class='backButton back'>Back</a>");
            }
            else {
                hdr.find(".backButton").remove();
            }
        },
        /**
         * This is called internally by loadContent.  Here we are using Ajax to fetch the data
           ```
           $.afui.loadDiv("page.html",false,false,"up");
           ```
         * @param {string} target
         * @param {boolean=} newtab (resets history)
         * @param {boolean=} go back (initiate the back click)
         * @param {string=} transition
         * @param {object=} anchor
         * @title $.afui.loadDiv(target,newTab,goBack,transition);
         * @api private
         */
        loadAjax: function(target, newTab, back, transition, anchor) {
            var that=this;
            var crc=crc32(target);
            var found=$(".panel[data-crc='"+crc+"']");
            var forceRefresh=anchor.getAttribute("data-refresh");

            if(found.length>0){

                if(forceRefresh){
                    that.showLoading&&that.showMask("Loading Content");
                    $.ajax(target).then(function(res){
                        found.html(res);
                        that.showLoading&&that.hideMask();
                        return that.loadContent("#"+found.prop("id"),newTab,back,transition,anchor);
                    });
                }
                else
                    return that.loadContent("#"+found.prop("id"),newTab,back,transition,anchor);
            }
            that.showLoading&&that.showMask("Loading Content");
            $.ajax(target).then(function(res){
                var $res=$.create("div",{html:res});
                if(!$res.hasClass(".panel")){
                    $res=$res.attr("data-title",(target));
                    $res.prop("id",crc);
                    $res.addClass("panel");
                }
                else {
                    $res=$res.find(".panel");
                }
                $(that.activeDiv).closest(".pages").append($res);
                $res.attr("data-crc",crc);
                that.showLoading&&that.hideMask();
                that.loadContent("#"+$res.prop("id"),newTab,back,transition,anchor);
            }).fail(function(res){
                that.showLoading&&that.hideMask();
                console.log("Error with ajax request",res);
            });

        },
        /**
         * This executes the transition for the panel
            ```
            $.afui.runTransition(transition,oldDiv,currDiv,back)
            ```
         * @api private
         * @title $.afui.runTransition(transition,oldDiv,currDiv,back)
         */
        runTransition: function(transition,previous,target, back,noTrans) {

            if(!transition)
                transition="slide";

            if(transition.indexOf(":back")!==-1){
                transition=transition.replace(":back","");
                back=true;
            }

            var that=this;
            var show=back?previous:target;
            var hide=back?target:previous;
            var doPush=false;
            if(transition.indexOf("-reveal")!==-1){
                transition=transition.replace("-reveal","");
                doPush=true;
            }


            $(show).css("zIndex","10");
            $(hide).css("zIndex","1");
            $(noTrans).css("zIndex","1").addClass("active");

            var from=$(hide).animation().remove(transition+"-in");
            if(!doPush&&from){
                if(back)
                    from.reverse();
                from.end(function(){
                    if(!back){
                        this.classList.remove("active");
                        $(this).trigger("panelunload");
                    }
                    else{

                        this.classList.add("active");
                        $(this).trigger("panelload");
                    }
                    that.doingTransition=false;
                }).run(transition+"-out");
            }
            else {
                if(!back){
                    $(hide).trigger("panelunload");
                }
                else{
                    $(hide).trigger("panelload");
                    $(hide).addClass("activeDiv");

                }
            }

            var to=$(show).animation().remove(transition+"-out");
            if(back)
                to.reverse();
            to.end(function(){
                that.doingTransition=false;
                if(!back){

                    this.classList.add("active");
                    $(this).trigger("panelload");
                    $(noTrans).trigger("panelload");
                }
                else{
                    if(noTrans){
                        $(noTrans).css("zIndex","10");

                    }

                    this.classList.remove("active");
                    $(this).trigger("panelunload");
                }
            }).run(transition+"-in");
        },

         /**
         * This executes the transition of a view
            ```
            $.afui.runViewTransition(transition,view, active, newDiv,back)
            ```
         * @api private
         * @title $.afui.runViewTransition(transition,view, active, newDiv,back)
         */
        runViewTransition:function(transition,view,active,newDiv,back){
            //find the active

            view.addClass("active");
            //view.find(".panel").removeClass("active");
            $(newDiv).addClass("active");

            if(transition==="none"){
                this.doingTransition=false;

                setTimeout(function(){
                    active.removeClass("active");
                    //Try to add the active class again (even though in most cases the class will already be set).
                    //This solves an issue when swapping panels A->B->A by QUICKLY tapping footer buttons on slow devices.
                    //Under these circumstances the timeout sometimes comes after the active classes to panels A and B have been set.
                    //You may end up having no active panels (blank page).
                    view.addClass("active");
                    $(newDiv).addClass("active");
                },50);

                return;
            }
            this.runTransition(transition,active,view,back,newDiv);
        },
         /**
         * This updates the history of the view cache
            ```
            $.afui.updateViewHistory(view, div, transition, target)
            ```
         * @param {Node} DOM node for view
         * @param {Node} DOM node for div adding to the history
         * @param {string} string for the transition
         * @param {string} string of the hash for the div
         * @api private
         * @title $.afui.updateViewHistory(view, div, transition, target)
         */

        updateViewHistory:function(view,div,transition,target){
            var ref=this.views[view.prop("id")];
            if(!ref)
                ref=this.views[view.prop("id")]=[];
            if(ref.length>=1&&ref[ref.length-1].target===div) return;
            //pushHistory: function(previousPage, newPage, transition, hashExtras) {)
            this.pushHistory(div.id,div.id,transition,target.replace(div.id,"").replace("#",""));
            this.views[view.prop("id")].push({
                target:div,
                transition:transition
            });
        },

        /**
         * This is callled when you want to launch afui.  If autoLaunch is set to true, it gets called on DOMContentLoaded.
         * If autoLaunch is set to false, you can manually invoke it.
           ```
           $.afui.autoLaunch=false;
           $.afui.launch();
           ```
         * @title $.afui.launch();
         */
        launch: function() {
            if (this.hasLaunched === false || this.launchCompleted) {
                this.hasLaunched = true;
                return;
            }
            if(this.isLaunching)
                return true;
            this.isLaunching=true;
            this.blockPageBounce();
            var that = this;

            var maskDiv = $.create("div", {
                id: "afui_mask",
                className: "ui-loader",
                html: "<span class='ui-icon ui-icon-loading spin'></span><h1>Loading Content</h1>"
            }).css({
                "z-index": 20000,
                display: "none"
            });
            document.body.appendChild(maskDiv.get(0));
            //setup modalDiv
            //get first div, defer

            var first=$(".view[data-default='true']");
            if(first.length===0)
                first=$(".view").eq(0);
            else
                throw ("You need to create a view");

            first.addClass("active");
            //history
            this.views[first.prop("id")]=[];
            var firsthash=window.location.hash;
            var firstPanel=first.find(".panel[data-selected='true']").length===0?first.find(".panel").eq(0):first.find(".panel[data-selected='true']");
            firstPanel.addClass("active");
            this.activeDiv=firstPanel.get(0);
            this.views[first.prop("id")].push({
                target:firstPanel.get(0),
                transition:this.transitionType
            });
            this.defaultPanel=firstPanel.get(0);
            this.loadContentData(firstPanel.get(0),first,false,true);
            this.updateHash(firstPanel.get(0).id);

            if(this.loadDefaultHash){
                //delay launch so events can be registered/handled

                setTimeout(function(){
                    this.loadContent(firsthash,false,0,"none");

                }.bind(this));
            }
            this.enableTabBar();

            $(document).on("click", "a", function(e) {
                if(that.useInternalRouting)
                    checkAnchorClick(e, e.currentTarget);
            });

            /**
             * This is our data directive processor
             */
            $(document).on("click",function(e){

                var len=clickHandlers.length;
                var $el=$(e.target);
                for(var i=0;i<len;i++){
                    var handler=clickHandlers[i];
                    var checker=$el.closest(handler.sel);
                    if(checker.length>0)
                        handler.cb.call(that,checker.get(0),e);
                }
            });

            $(document).on("click", ".backButton, [data-back]", function() {
                if(that.useInternalRouting)
                    that.goBack(that);
            });
            //Check for includes

            var items=$("[data-include]");
            if(items.length===0){
                this.launchCompleted=true;
                $(document).trigger("afui:ready");
            }
            else{
                var deferred=[];
                items.each(function(){
                    var url=this.getAttribute("data-include");
                    var self=$(this);
                    deferred.push($.get(url,function(res){
                        self.append(res);
                    }));
                });
                $.when.apply($,deferred).then(function(){
                    this.launchCompleted=true;
                    $(document).trigger("afui:ready");
                }).fail(function(){
                    this.launchCompleted=true;
                    $(document).trigger("afui:ready");
                });
            }

            $(document).on("click","footer a:not(.button)",function(e){
                var $item=$(e.target);
                var footer=$item.closest("footer");
                $item.parent().find("a:not(.button)").attr("data-ignore-pressed","true").removeClass("pressed");
                if(footer.attr("data-ignore-pressed")==="true") return;
                $item.addClass("pressed");
            });
        }

        /**
         * END
         * @api private
         */
    };


    //lookup for a clicked anchor recursively and fire UI own actions when applicable
    var checkAnchorClick = function(e, theTarget) {
        theTarget=theTarget||e.currentTarget;
        if (theTarget === document) {
            return;
        }
        var custom = (typeof $.afui.customClickHandler === "function") ? $.afui.customClickHandler : false;
        if (custom !== false) {
            if ($.afui.customClickHandler(theTarget.getAttribute("href"),e)) return e.preventDefault();

        }
        
        //this technique fails when considerable content exists inside anchor, should be recursive ?
        if (theTarget.tagName.toLowerCase() !== "a" && theTarget.parentNode) return checkAnchorClick(e, theTarget.parentNode); //let's try the parent (recursive)
        //anchors
        if (theTarget.tagName !== "undefined" && theTarget.tagName.toLowerCase() === "a") {
            if (theTarget.href.toLowerCase().indexOf("javascript:") !== -1 || theTarget.getAttribute("data-ignore")) {
                return;
            }

            /* IE 10 fixes*/

            var href = theTarget.href,
                prefix = location.protocol + "//" + location.hostname + ":" + location.port + location.pathname;
            if (href.indexOf(prefix) === 0) {
                href = href.substring(prefix.length);
            }
            //empty links
            if (href === "#" || (href.indexOf("#") === href.length - 1) || (href.length === 0 && theTarget.hash.length === 0)) return e.preventDefault();

            //internal links
            //http urls
            var urlRegex=/^((http|https|file):\/\/)/;
            //only call prevent default on http/fileurls.  If it's a protocol handler, do not call prevent default.
            //It will fall through to the ajax call and fail
            if(theTarget.href.indexOf(":") !== -1 &&urlRegex.test(theTarget.href))
                e.preventDefault();

            var mytransition = theTarget.getAttribute("data-transition");
            if(!mytransition&&$(theTarget).closest("footer").length>0)
                mytransition="none";

            if(mytransition&&mytransition.indexOf(":dismiss")!==-1){
                return $.afui.dismissView(theTarget,mytransition);
            }
            href = theTarget.hash.length > 0 ? theTarget.hash : href;
            $.afui.loadContent(href, false, 0, mytransition, theTarget);
            return;
        }
    };

    var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"; /* Number */
    var crc32 = function( /* String */ str, /* Number */ crc) {
        if (crc === undefined) crc = 0;
        var n = 0; //a number between 0 and 255
        var x = 0; //an hex number
        crc = crc ^ (-1);
        for (var i = 0, iTop = str.length; i < iTop; i++) {
            n = (crc ^ str.charCodeAt(i)) & 0xFF;
            x = "0x" + table.substr(n * 9, 8);
            crc = (crc >>> 8) ^ x;
        }
        return (crc ^ (-1))>>>0;
    };

    $.afui = new AFUi();
    $.afui.init=true;

    $(window).trigger("afui:preinit");
    $(window).trigger("afui:init");
})(jQuery);

/**
 * af.actionsheet - an actionsheet for html5 mobile apps
 * Copyright 2014 - Intel
 */
/* EXAMPLE
  You can pass in an HTML string that will get rendered

  $(document.body).actionsheet('<a >Back</a><a onclick="alert(\'hi\');" >Show Alert 3</a><a onclick="alert(\'goodbye\');">Show Alert 4</a>');

  You can also use an arra of objects to show each item.  There are three propertyes
    text - the text to display
    cssClasses - extra css classes
    handler - click handler function

  $(document.body).actionsheet(
    [{
        text: 'back',
        cssClasses: 'red',
        handler: function () {
            $.ui.goBack();
        }
    }, {
        text: 'show alert 5',
        cssClasses: 'blue',
        handler: function () {
            alert("hi");
        }
    }, {
        text: 'show alert 6',
        cssClasses: '',
        handler: function () {
            alert("goodbye");
        }
    }]
  );

 */
 
(function($) {
    "use strict";
    $.fn.actionsheet = function(opts) {
        var tmp;
        for (var i = 0; i < this.length; i++) {
            tmp = new actionsheet(this[i], opts);
        }
        return this.length === 1 ? tmp : this;
    };
    var actionsheet = function(elID, opts) {
        if (typeof elID === "string" || elID instanceof String) {
            this.el = document.getElementById(elID);
        } else {
            this.el = elID;
        }
        if (!this.el) {
            window.alert("Could not find element for actionsheet " + elID);
            return;
        }

        if (this instanceof actionsheet) {
            if (typeof(opts) === "object") {
                for (var j in opts) {
                    this[j] = opts[j];
                }
            }
        } else {
            return new actionsheet(elID, opts);
        }

        var markStart = "<div id='af_actionsheet'><div style='width:100%'>";
        var markEnd = "</div></div>";
        var markup;
        var noop=function(){};
        if (typeof opts === "string") {
            markup = $(markStart + opts + "<a href='javascript:;' class='cancel'>Cancel</a>" + markEnd);
        } else if (typeof opts === "object") {
            markup = $(markStart + markEnd);
            var container = $(markup.children().get(0));
            opts.push({
                text: "Cancel",
                cssClasses: "cancel"
            });
            for (var i = 0; i < opts.length; i++) {
                var item = $("<a href='javascript:;'>" + (opts[i].text || "TEXT NOT ENTERED") + "</a>");
                item[0].onclick = (opts[i].handler || noop);
                if (opts[i].cssClasses && opts[i].cssClasses.length > 0)
                    item.addClass(opts[i].cssClasses);
                container.append(item);
            }
        }
        $(elID).find("#af_actionsheet").remove();
        $(elID).find("#af_action_mask").remove();
        $(elID).append(markup);

        markup.vendorCss("Transition", "all 0ms");
        this.el.style.overflow = "hidden";
        markup.on("click", "a", this.sheetClickHandler.bind(this));
        this.activeSheet = markup;
        markup.cssTranslate("0," + ((markup.height())) + "px");
        $(elID).append("<div id='af_action_mask' style='position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:9998;background:rgba(0,0,0,.4)'/>");
        setTimeout(function() {
            markup.vendorCss("Transition", "all 300ms");
            markup.cssTranslate("0,0");
        }, 10);
        $("#af_action_mask").bind("touchstart touchmove touchend click",function(e){
            e.preventDefault();
            e.stopPropagation();
        });

    };
    actionsheet.prototype = {
        activeSheet: null,
        sheetClickHandler:function(){
            this.hideSheet();
            return false;
        },
        hideSheet: function() {
            this.activeSheet.off("click", "a", this.sheetClickHandler);
            $(this.el).find("#af_action_mask").unbind("click").remove();
            this.activeSheet.vendorCss("Transition", "all 0ms");
            var markup = this.activeSheet;
            var theEl = this.el;
            setTimeout(function() {
                markup.vendorCss("Transition", "all 300ms");
                markup.cssTranslate("0,"+(markup.height()+60)+"px");
                setTimeout(function() {
                    markup.remove();
                    markup = null;
                    theEl.style.overflow = "none";
                }, 350);
            }, 10);
        }
    };
    $.afui.actionsheet=function(opts){
        return $(document.body).actionsheet(opts);
    };
})(jQuery);

/** 
 * This plugin creates a "grow" transition using scaling and transforms
 * @author Ian Maffett
 * @copyright 2014 Intel
 */


(function($){
    "use strict";


    $.afui.registerDataDirective("[data-grower]",function(item,e){
        var $el=$(item).closest("[data-grower]");
        var items=$el.offset();
        var view=$el.closest(".view");
        var toPanel=e.target.hash||$el.attr("data-grower");
        view.css("zIndex","1");
        var growView=$(toPanel).closest(".view");

        var scaleX=($el.width()/window.innerWidth);
        var scaleY=($el.height()/window.innerHeight);

        var transProps={
            left:items.left,
            top:items.top,
            x:scaleX,
            y:scaleY
        };
        $(toPanel).trigger("panelgrowstart",[$el.get(0)]);
        growView.addClass("active").css("zIndex","10");
        growView.vendorCss("TransformOrigin","0 0");
        growView.data("growTransProps",transProps);
        growView.vendorCss("TransitionDuration","0");
        growView.vendorCss("Transform","translate3d("+items.left+"px,"+items.top+"px,0) scale("+scaleX+","+scaleY+")");
        growView.data("growTarget",$el.closest(".panel"));
        growView.data("growFrom",$(toPanel).attr("id"));
        $.afui.loadContent(toPanel,view,false,"stretch");
        $(toPanel).one("panelload",function(){
            growView.vendorCss("Transform","");
            $(toPanel).trigger("panelgrowcomplete",[$el.get(0)]);
        });
    });

    $.afui.registerDataDirective("[data-grower-back]",function(item){

        var growView=$(item).closest(".view");
        var fromPanel=$("#"+growView.data("growFrom"));
        fromPanel.trigger("panelgrowendstart");
        var trans=growView.data("growTransProps");
        var toPanel="#"+growView.data("growTarget").prop("id");
        $(toPanel).closest(".view").addClass("active");
        growView.addClass("animation-active");

        growView.transition().end(function(){
            growView.removeClass("active");
            fromPanel.trigger("panelgrowendstart");
            $.afui.loadContent(toPanel,false,false,"none");
        }).run("translate3d("+trans.left+"px,"+trans.top+"px,0) scale("+trans.x+","+trans.y+")","300ms");
    });
})(jQuery);
//Touch events are based from zepto/touch.js
//Many modifications and enhancements made
/**
 * Simply include this in your project to get access to the following touch events on an element
 * tap
 * doubleTap
 * singleTap
 * longPress
 * swipe(Left,Right,Up,Down)
* swipeStart(Left,Right,Up,Down)
 */

(function($) {
    "use strict";
    var touch = {}, touchTimeout;

    function parentIfText(node) {
        return "tagName" in node ? node : node.parentNode;
    }

    function swipeDirection(x1, x2, y1, y2) {
        var xDelta = Math.abs(x1 - x2), yDelta = Math.abs(y1 - y2);
        if (xDelta >= yDelta) {
            return (x1 - x2 > 0 ? "Left" : "Right");
        } else {
            return (y1 - y2 > 0 ? "Up" : "Down");
        }
    }

    var longTapDelay = 750;
    function longTap() {
        if (touch.last && (Date.now() - touch.last >= longTapDelay)) {
            touch.el.trigger("longTap");
            touch = {};
        }
    }
    var swipeCounter;
    var longTapTimer;
    var parentChecker=false;
    var didParentCheck=false;
    $(document).ready(function() {
        var prevEl;
        $(document.body).bind("touchstart", function(e) {
            swipeCounter=0;
            if (e.originalEvent)
                e = e.originalEvent;
            if (!e.touches || e.touches.length === 0) return;
            var now = Date.now(), delta = now - (touch.last || now);
            if (!e.touches || e.touches.length === 0) return;
            touch.el = $(parentIfText(e.touches[0].target));
            touchTimeout && clearTimeout(touchTimeout);
            touch.x1 = e.touches[0].pageX;
            touch.y1 = e.touches[0].pageY;
            touch.x2 = touch.y2 = 0;
            if (delta > 0 && delta <= 250)
                touch.isDoubleTap = true;
            touch.last = now;
            longTapTimer = setTimeout(longTap, longTapDelay);

            if ($.afui.useAutoPressed && !touch.el.attr("data-ignore-pressed"))
                touch.el.addClass("pressed");
            if (prevEl && $.afui.useAutoPressed && !prevEl.attr("data-ignore-pressed") && prevEl[0] !== touch.el[0])
                prevEl.removeClass("pressed");
            prevEl = touch.el;
            parentChecker=false;
            didParentCheck=false;
        }).bind("touchmove", function(e) {
            if(e.originalEvent)
                e = e.originalEvent;
            touch.x2 = e.touches[0].pageX;
            touch.y2 = e.touches[0].pageY;
            if(!didParentCheck&&(Math.abs(touch.x2-touch.x1)>5||Math.abs(touch.y2-touch.y1)>5))
            {
                var moveX=Math.abs(touch.x2-touch.x1)>5;
                var moveY=Math.abs(touch.y2-touch.y1)>5;

                didParentCheck=true;
                touch.el.trigger("swipeStart",[e]);
                touch.el.trigger("swipeStart" + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)), [touch,e]);
                var parentContainers=touch.el.closest(".swipe, .swipe-reveal, .swipe-x, .swipe-y");
                var elScroller=touch.el.closest(".x-scroll, .y-scroll, .scroll");


                parentChecker=touch.el.closest(".swipe, .swipe-reveal").length!==0;
                if(elScroller.parent(parentContainers).length!==0)
                {
                    parentChecker=false;
                }
                else if(moveX&&touch.el.closest(".swipe-x").length!==0)
                    parentChecker=true;
                else if(moveY&&touch.el.closest(".swipe-y").length!==0)
                    parentChecker=true;
            }

            if($.os.android){
                if(didParentCheck&&parentChecker)
                    e.preventDefault();
            }
            clearTimeout(longTapTimer);
        }).bind("touchend", function(e) {
            if(e.originalEvent)
                e=e.originalEvent;
            if (!touch.el)
                return;
            if ($.afui.useAutoPressed && !touch.el.attr("data-ignore-pressed"))
                touch.el.removeClass("pressed");
            if (touch.isDoubleTap) {
                touch.el.trigger("doubleTap");
                touch = {};
            } else if (touch.x2 > 0 || touch.y2 > 0) {
                (Math.abs(touch.x1 - touch.x2) > 30 || Math.abs(touch.y1 - touch.y2) > 30) &&
                touch.el.trigger("swipe");
                //touch.el.trigger("swipe" + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)), touch);
                //@TODO - don't dispatch when you need to block it (scrolling areas)
                var direction= (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                var scrollDir=".x-scroll";
                var swipeDir=".swipe-x";
                if(direction.toLowerCase()==="up"||direction.toLowerCase()==="down"){
                    scrollDir=".y-scroll";
                    swipeDir=".swipe-y";
                }
                var swipe=touch.el.closest(swipeDir);
                var scroller=touch.el.closest(scrollDir);

                if((swipe.length===0||scroller.length===0)||swipe.find(scroller).length===0)
                {
                    touch.el.trigger("swipe"+direction);
                }

                touch.x1 = touch.x2 = touch.y1 = touch.y2 = touch.last = 0;
            } else if ("last" in touch) {
                touch.el.trigger("tap");
                touchTimeout = setTimeout(function() {
                    touchTimeout = null;
                    if (touch.el)
                        touch.el.trigger("singleTap");
                    touch = {};
                }, 250);
            }

        }).bind("touchcancel", function() {
            if(touch.el && $.afui.useAutoPressed && !touch.el.attr("data-ignore-pressed"))
                touch.el.removeClass("pressed");
            touch = {};
            clearTimeout(longTapTimer);
        });
    });

    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(m) {
        $.fn[m] = function(callback) {
            return this.bind(m, callback);
        };
    });
})(jQuery);

/**
 * af.animateheader
 * @copyright Intel 2014
 *
 */

(function($){
    "use strict";
    //animate the headers on transtion
    var oldTitle=$.afui.setTitle;
    $.afui.animateHeader=function(what){
        if(what!==false){
            $.afui.setTitle=function(item,view,back,newView){

                var title;
                if(typeof(item)==="string"){
                    title=item;
                }
                else if($(item).attr("data-title"))
                    title=$(item).attr("data-title");
                else if($(item).attr("title"))
                    title=$(item).attr("title");

                if(!title||title.length===0) return;

                var header=$(this.activeDiv).closest(".view").children("header").eq(0);
                var cssClass=back?"header-unload":"header-load";

                var old=header.find("h1").eq(0).html();

                //update the current header h1 so we keep the DOM node for events, etc
                header.find("h1").eq(0).html(title).removeClass("header-unload header-load");
                if(newView) return;
                header.find("h1").animation().run(cssClass+"-to");

                //append a second for animation
                var second=$("<h1>"+old+"</h1>");
                header.append(second);
                second.animation().end(function(){
                    $(this).remove();
                }).run(cssClass);
            };
        }
        else{
            $.afui.setTitle=oldTitle;
        }
    };

})(jQuery);
/**
 * af.popup - a popup/alert library for html5 mobile apps
 * copyright Indiepath 2011 - Tim Fisher
 * Modifications/enhancements by Intel for App Framework
 *
 */
/* EXAMPLE
 $.query("body").popup({
        title:"Alert! Alert!",
        message:"This is a test of the emergency alert system!! Don't PANIC!",
        cancelText:"Cancel me",
        cancelCallback: function(){console.log("cancelled");},
        doneText:"I'm done!",
        doneCallback: function(){console.log("Done for!");},
        cancelOnly:false,
        doneClass:'button',
        cancelClass:'button',
        onShow:function(){console.log("showing popup");}
        autoCloseDone:true, //default is true will close the popup when done is clicked.
        suppressTitle:false //Do not show the title if set to true
  });

  You can programatically trigger a close by dispatching a "close" event to it.

 $.query("body").popup({title:'Alert',id:'myTestPopup'});
 $("#myTestPopup").trigger("close");

 */

(function ($) {
    "use strict";
    $.fn.popup = function (opts) {
        return new popup(this[0], opts);
    };
    var queue = [];
    var popup = function (containerEl, opts) {

        if (typeof containerEl === "string" || containerEl instanceof String) {
            this.container = document.getElementById(containerEl);
        } else {
            this.container = containerEl;
        }
        if (!this.container) {
            window.alert("Error finding container for popup " + containerEl);
            return;
        }

        try {
            if (typeof (opts) === "string" || typeof (opts) === "number")
                opts = {
                    message: opts,
                    cancelOnly: "true",
                    cancelText: "OK"
                };
            this.id = opts.id = opts.id || $.uuid(); //opts is passed by reference
            this.addCssClass = opts.addCssClass ? opts.addCssClass : "";
            this.suppressTitle = opts.suppressTitle || this.suppressTitle;
            this.title = opts.suppressTitle ? "" : (opts.title || "Alert");
            this.message = opts.message || "";
            this.cancelText = opts.cancelText || "Cancel";
            this.cancelCallback = opts.cancelCallback || function () {};
            this.cancelClass = opts.cancelClass || "button";
            this.doneText = opts.doneText || "Done";
            this.doneCallback = opts.doneCallback || function () {
                // no action by default
            };
            this.doneClass = opts.doneClass || "button";
            this.cancelOnly = opts.cancelOnly || false;
            this.onShow = opts.onShow || function () {};
            this.autoCloseDone = opts.autoCloseDone !== undefined ? opts.autoCloseDone : true;

            queue.push(this);
            if (queue.length === 1)
                this.show();
        } catch (e) {
            console.log("error adding popup " + e);
        }

    };

    popup.prototype = {
        id: null,
        addCssClass: null,
        title: null,
        message: null,
        cancelText: null,
        cancelCallback: null,
        cancelClass: null,
        doneText: null,
        doneCallback: null,
        doneClass: null,
        cancelOnly: false,
        onShow: null,
        autoCloseDone: true,
        suppressTitle: false,
        show: function () {
            var self = this;
            var markup = "<div id='" + this.id + "' class='afPopup hidden "+ this.addCssClass + "'>"+
                        "<header>" + this.title + "</header>"+
                        "<div>" + this.message + "</div>"+
                        "<footer>"+
                             "<a href='javascript:;' class='" + this.cancelClass + "' id='cancel'>" + this.cancelText + "</a>"+
                             "<a href='javascript:;' class='" + this.doneClass + "' id='action'>" + this.doneText + "</a>"+
                             "<div style='clear:both'></div>"+
                        "</footer>"+
                        "</div>";

            var $el=$(markup);
            $(this.container).append($el);
            $el.bind("close", function () {
                self.hide();
            });

            if (this.cancelOnly) {
                $el.find("A#action").hide();
                $el.find("A#cancel").addClass("center");
            }
            $el.find("A").each(function () {
                var button = $(this);
                button.bind("click", function (e) {
                    if (button.attr("id") === "cancel") {
                        self.cancelCallback.call(self.cancelCallback, self);
                        self.hide();
                    } else {
                        self.doneCallback.call(self.doneCallback, self);
                        if (self.autoCloseDone)
                            self.hide();
                    }
                    e.preventDefault();
                });
            });
            self.positionPopup();
            $.blockUI(0.5);

            $el.bind("orientationchange", function () {
                self.positionPopup();
            });

            //force header/footer showing to fix CSS style bugs
            $el.find("header").show();
            $el.find("footer").show();
            setTimeout(function(){
                $el.removeClass("hidden").addClass("show");
                self.onShow(self);
            },50);
        },

        hide: function () {
            var self = this;
            $.query("#" + self.id).addClass("hidden");
            $.unblockUI();
            if(!$.os.ie&&!$.os.android){
                setTimeout(function () {
                    self.remove();
                }, 250);
            }
            else
                self.remove();
        },

        remove: function () {
            var self = this;
            var $el = $.query("#" + self.id);
            $el.unbind("close");
            $el.find("BUTTON#action").unbind("click");
            $el.find("BUTTON#cancel").unbind("click");
            $el.unbind("orientationchange").remove();
            queue.splice(0, 1);
            if (queue.length > 0)
                queue[0].show();
        },

        positionPopup: function () {
            var popup = $.query("#" + this.id);

            popup.css("top", ((window.innerHeight / 2.5) + window.pageYOffset) - (popup[0].clientHeight / 2) + "px");
            popup.css("left", (window.innerWidth / 2) - (popup[0].clientWidth / 2) + "px");
        }
    };
    var uiBlocked = false;
    $.blockUI = function (opacity) {
        if (uiBlocked)
            return;
        opacity = opacity ? " style='opacity:" + opacity + ";'" : "";
        $.query("BODY").prepend($("<div id='mask'" + opacity + "></div>"));
        $.query("BODY DIV#mask").bind("touchstart", function (e) {
            e.preventDefault();
        });
        $.query("BODY DIV#mask").bind("touchmove", function (e) {
            e.preventDefault();
        });
        uiBlocked = true;
    };

    $.unblockUI = function () {
        uiBlocked = false;
        $.query("BODY DIV#mask").unbind("touchstart");
        $.query("BODY DIV#mask").unbind("touchmove");
        $("BODY DIV#mask").remove();
    };


    $.afui.registerDataDirective("[data-alert]",function(item){
        var $item=$(item);
        var message=$item.attr("data-message");
        if(message.length===0) return;
        $(document.body).popup(message);
    });

    $.afui.popup=function(opts){
        return $(document.body).popup(opts);
    };

})(jQuery);

/**
 * af.animation
 * @copyright Intel 2014 
 * 
 */
/* jshint strict:false*/
(function ($) {

    $.fn.animation = function () {
        var item = this;
        this.each(function () {
            item = new Animator(this);
        });
        return item;
    };

    function Animator(element) {
        this.element = element;
        this.element.classList.remove("animation-reverse");
        this.keepClass = false;
    }

    var animEnd = function (evt) {
        this.element.removeEventListener("webkitAnimationEnd", this.endCBCache, false);
        this.element.removeEventListener("animationend", this.endCBCache, false);
        this.element.removeEventListener("MSAnimationEnd", this.endCBCache, false);
        if (this.endcb)
            this.endcb.call(this.element, evt);
        this.element.classList.remove("animation-reverse");
        this.element.classList.remove("animation-active");
        if (!this.keepClass)
            this.element.classList.remove(this.animClass);
    };
    Animator.prototype = {
        element: null,
        animClass: null,
        runEnd: false,
        keepClass: false,
        keep: function () {
            this.keepClass = true;
            return this;
        },
        remove: function (item) {
            this.element.classList.remove(item);
            this.element.offsetWidth = this.element.offsetWidth;
            return this;
        },
        endCBCache: null,
        run: function (item, duration) {
            this.runEnd = false;
            this.element.classList.add("animation-active");
            //Hack to trigger reflow
            this.element.offsetWidth = this.element.offsetWidth;
            this.element.classList.add(item);
            this.animClass = item;
            //check if it exists..if not trigger end 
            var computedStyle = window.getComputedStyle(this.element, null);
            var time = computedStyle.animation - duration;
            if (!time)
                time = computedStyle.animationDuration;
            if (!time)
                time = computedStyle.MozAnimationDuration;
            if (!time)
                time = computedStyle.webkitAnimationDuration;
            time = parseFloat(time);
            if (time <= 0.01 || isNaN(time))
                this.runEnd = true;

            //Due to calling .bind, we need to cache a reference to the function to remove it
            this.endCBCache = animEnd.bind(this);

            if (this.runEnd) {
                this.endCBCache();
                return this;
            }
            this.element.addEventListener("webkitAnimationEnd", this.endCBCache, false);
            this.element.addEventListener("animationend", this.endCBCache, false);
            this.element.addEventListener("MSAnimationEnd", this.endCBCache, false);
            return this;
        },
        reverse: function () {
            this.element.classList.add("animation-reverse");
            return this;
        },
        reRun: function (item) {
            this.remove(item);
            return this.run(item);
        },
        endcb: function () {},
        end: function (cb) {
            this.endcb = cb;
            return this;
        }
    };


    $.fn.transition = function () {
        var item = this;
        this.each(function () {
            item = new Transition(this);
        });
        return item;
    };

    function Transition(element) {
        this.element = element;
        this.element;
    }

    var transitionEnd = function (evt) {

        clearTimeout(this.timer);
        this.element.removeEventListener("webkitTransitionEnd", this.endCBCache, false);
        this.element.removeEventListener("transitionend", this.endCBCache, false);
        this.element.removeEventListener("MSTransitionEnd", this.endCBCache, false);
        if (this.endcb)
            this.endcb.call(this.element, evt);
        if (!this.keepEnd) {
            $(this.element).vendorCss("TransitionDuration", "");
            $(this.element).vendorCss("Transform", "");
        }

    };
    Transition.prototype = {
        element: null,
        runEnd: false,
        keepEnd: false,
        keep: function () {
            this.keepEnd = true;
            return this;
        },
        endCBCache: null,
        timer: null,
        run: function (trans, duration) {

            this.endCBCache = transitionEnd.bind(this);
            this.element.addEventListener("webkitTransitionEnd", this.endCBCache, false);
            this.element.addEventListener("transitionend", this.endCBCache, false);
            this.element.addEventListener("MSTransitionEnd", this.endCBCache, false);
            //$(this.element).vendorCss("TransitionProperty","all");
            $(this.element).vendorCss("TransitionDuration", duration);
            $(this.element).vendorCss("Transform", trans);
            this.timer = setTimeout(function () {
                this.endCBCache();
            }.bind(this), parseInt(duration,10) + 50);
            return this;
        },
        endcb: function () {},
        end: function (cb) {
            this.endcb = cb;
            return this;
        }
    };
})(jQuery);

/**
 * af.splashscreen 
 * @copyright Intel 2014 
 * 
 */
(function($){
    "use strict";
    $.afui.ready(function(){
        //delay to hide the splashscreen
        setTimeout(function(){
            $("#splashscreen").remove();
        },250);
    });
})(jQuery);
/**
 * af.drawer
 * @copyright Intel 2014
 *
 */

(function($){
    "use strict";
    var activePosition=null;
    var activeEl;
    function Drawer(){
        return this;
    }

    var transitionTypes = {
        push:function(elem,reverse,position){
            var item=$(elem).closest(".view").children().filter(":not(nav):not(aside)");
            position=position||activePosition;
            for(var i=0;i<item.length;i++){
                var anim=$(item[i]).show().animation();
                if(reverse){
                    anim.remove("slide-"+position+"-out").reverse();
                }
                else
                    anim.keep();

                anim.run("slide-"+position+"-out");
            }

        },
        cover:function(){},
        reveal:function(elem,reverse){
            return this.push(elem,reverse);
        }
    };


    Drawer.prototype= {
        defaultTransition:"slide",
        defaultAnimation:"cover",
        isTransitioning:false,
        autoHide:function(event){
            event.preventDefault();
            this.hide();
        },
        checkViewToClose:function(e){
            this.autoHide(e);
        },
        autoHideCheck:null,
        selfCheckViewToClose:null,
        show:function(id,position,animation){
            if(this.isTransitioning) return;
            var self=this;
            activePosition=position==="right"?"right":"left";
            animation=transitionTypes[animation]?animation:this.defaultAnimation;
            var currEl=document.getElementById(id.replace("#",""));
            if(!currEl) return;
            //Let"s find the view
            activeEl=currEl;
            if(currEl.classList.contains("active")) {
                return;
            }
            this.isTransitioning=true;
            this.autoHideCheck=this.autoHide.bind(this);
            $(currEl).closest(".view").children().filter(":not(nav):not(aside)").off("touchstart",this.autoHideCheck);
            currEl.classList.add(activePosition);
            //Let"s remove the other animation types
            var anim=$(currEl).show();
            var other=activePosition==="right"?"left":"right";


            if($(currEl).closest(".view").find(".slide-"+other+"-out").length>0){
                $(currEl).closest(".view").find(".slide-"+other+"-out").removeClass("slide-"+other+"-out");
                $(currEl).closest(".view").find("aside.active, nav.active").removeClass("left right active").hide();
            }
            if(animation!=="reveal"){
                anim.css("zIndex","999").animation().run("slide-"+activePosition+"-in").end(function(){
                    this.classList.add("active");
                    self.isTransitioning=false;
                });
            }
            else {
                anim.animation().run("blank").end(function(){
                    $(this).css("zIndex","999");
                    this.classList.add("active");
                    self.isTransitioning=false;
                });
            }
            currEl.activeAnimation=animation;
            currEl.activePosition=activePosition;
            currEl.toggled=true;
            transitionTypes[animation](currEl,false);
            //fix bug with synthetic events bubbling up
            setTimeout(function(){
                $(currEl).closest(".view").children().filter(":not(nav):not(aside)").on("touchstart",self.autoHideCheck);
            });
            this.selfCheckViewToClose=self.checkViewToClose.bind(this);
            $(currEl).bind("nestedviewunload",this.selfCheckViewToClose);
        },
        hide:function(id,position){
            if(this.isTransitioning) return;
            var self=this;
            var currEl=id&&document.getElementById(id.replace("#",""))||activeEl;
            $(currEl).unbind("nestedviewunload",this.selfCheckViewToClose);

            if(!currEl||!currEl.toggled) return;
            $(currEl).closest(".view").children().filter(":not(nav):not(aside)").off("touchstart",this.autoHideCheck);
            var activePosition=position||currEl.activePosition;
            var anim=$(currEl).animation();
            if(currEl.activeAnimation==="reveal")
                $(currEl).css("zIndex","1");
            var theTransition=currEl.activeAnimation==="reveal"?"blank":"slide-"+activePosition+"-in";
            anim.reverse().reRun(theTransition).end(function(){
                this.classList.remove("active");
                this.classList.remove(activePosition);
                this.style.display="none";
                this.style.zIndex="";
                self.isTransitioning=false;
            });


            if(transitionTypes[currEl.activeAnimation]){
                transitionTypes[currEl.activeAnimation](currEl,true);
            }
            currEl.toggled=false;
            activeEl=null;
        }
    };

    $.afui.drawer =new Drawer();



    //Register the handler for opening

    $.afui.registerDataDirective("[data-left-menu]:not([data-menu-close]),[data-right-menu]:not([data-menu-close])",function(item){
        var $item=$(item);
        var position=$item.attr("data-left-menu")?"left":"right";
        var obj=position==="left"?$item.attr("data-left-menu"):$item.attr("data-right-menu");
        var transition=$item.attr("data-transition");
        this.drawer.show(obj,position,transition);
    });

    //Register the handler for closing
    $.afui.registerDataDirective("[data-menu-close]",function(item){
        var $item=$(item);
        var position=null;
        if($item.attr("data-left-menu"))
            position="left";
        if($item.attr("data-right-menu"))
            position="right";
        var obj=position==="left"?$item.attr("data-left-menu"):$item.attr("data-right-menu");
        if(!obj)
        {
            //Am i dismissing from a drawer?
            obj=$(item).closest("nav").prop("id");
            //let"s find the visible item in the container
            if(!obj||obj.length===0)
                obj=$(item).closest(".view").find("nav.active,aside.active").prop("id");
        }
        this.drawer.hide(obj,position);
    });

})(jQuery);
/**
 * af.swipereveal
 * @copyright Intel 2014
 *
 */
(function($){
    "use strict";

    //Register the handler for opening
    var target;
    var pos=0;
    var end;
    var width;
    $.afui.swipeThreshold=0.3;
    $(document).on("swipeStartLeft",".swipe-reveal",function(e,touch,originalE){

        originalE.preventDefault();
        target=$(e.target).closest(".swipe-content");
        pos=touch.x2;
        width=target.closest(".swipe-reveal").find(".swipe-hidden").width();
        if($.getCssMatrix(e.target).e!==0)
            return ;

        target.bind("touchmove",tracker);
        target.one("touchend",function(){
            target.unbind("touchmove",tracker);
            if(Math.abs(end)/width<$.afui.swipeThreshold)
            {
                width=0;
            }
            target.transition().keep().end(function(){
                width=null;
                target=null;
            }).run("translate3d("+(-width)+"px,0px,0)","100ms");
        });
    });

    $(document).on("swipeStartRight",".swipe-reveal",function(e,touch,originalE){
        originalE.preventDefault();
        target=$(e.target).closest(".swipe-content");

        width=target.closest(".swipe-reveal").find(".swipe-hidden").width();
        if($.getCssMatrix(e.target).e===0)
            return ;
        pos=touch.x2+width;
        target.bind("touchmove",tracker);
        target.one("touchend",function(){
            target.unbind("touchmove",tracker);
            if((1-Math.abs(end)/width)>$.afui.swipeThreshold)
            {
                width=0;
            }
            target.transition().keep().end(function(){
                width=null;
                target=null;
            }).run("translate3d("+(-width)+"px,0px,0)","100ms");
        });
    });


    var tracker=function(e){
        var to=-(pos-(e.touches[0].pageX));
        if((to)<-width)
            to="-"+width;
        else if(to>0)
            to=0;
        end=to;

        target.cssTranslate(to+"px,0");
    };

})(jQuery);
/**
 * desktopBrowsers contributed by Carlos Ouro @ Badoo
 * translates desktop browsers events to touch events and prevents defaults
 * It can be used independently in other apps but it is required for using the touchLayer in the desktop
 *
 * @param {Function} $ The appframework selector function
 */
 
(function ($) {
    "use strict";
    var cancelClickMove = false;
    //See if we can create a touch event
    var tmp;
    if($.os.supportsTouch) return;
    try {
        tmp = document.createEvent("TouchEvent");
        return;
    } catch (ex) {

    }
    $.os.supportsTouch=true;
    var preventAll = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    var ieThreshold=navigator.userAgent.match(/Phone/i)?2:7;
    /**
     * Stop propagation, and remove default behavior for everything but INPUT, TEXTAREA & SELECT fields
     *
     * @param {Event} event
     * @param {HTMLElement} target
     */
    var preventAllButInputs = function(event, target) {
        var tag = target.tagName.toUpperCase();
        if (tag.indexOf("SELECT") > -1 || tag.indexOf("TEXTAREA") > -1 || tag.indexOf("INPUT") > -1) {
            return;
        }
        preventAll(event);
    };



    var redirectMouseToTouch = function (type, originalEvent, newTarget,skipPrevent) {

        var theTarget = newTarget ? newTarget : originalEvent.target;
        if(!skipPrevent)
            preventAllButInputs(originalEvent, theTarget);

        var touchevt = document.createEvent("MouseEvent");

        touchevt.initEvent(type, true, true);
        touchevt.initMouseEvent(type, true, true, window, originalEvent.detail, originalEvent.screenX, originalEvent.screenY, originalEvent.clientX, originalEvent.clientY, originalEvent.ctrlKey, originalEvent.shiftKey, originalEvent.altKey, originalEvent.metaKey, originalEvent.button, originalEvent.relatedTarget);
        touchevt.touches=  new $.feat.TouchList();
        touchevt.changedTouches = new $.feat.TouchList();
        touchevt.targetTouches = new $.feat.TouchList();
        var thetouch=new $.feat.Touch();
        thetouch.pageX=originalEvent.pageX;
        thetouch.pageY=originalEvent.pageY;
        thetouch.target=originalEvent.target;
        touchevt.changedTouches._add(thetouch);
        if (type !== "touchend") {
            touchevt.touches = touchevt.changedTouches;
            touchevt.targetTouches = touchevt.changedTouches;
        }
        //target

        touchevt.mouseToTouch = true;
        if ($.os.ie) {
            // handle inline event handlers for target and parents (for bubbling)
            var elem = originalEvent.target;
            while (elem !== null) {
                if (elem.hasAttribute("on" + type)) {
                    eval(elem.getAttribute("on" + type));
                }
                elem = elem.parentElement;
            }
        }
        theTarget.dispatchEvent(touchevt);
    };

    var mouseDown = false,
        lastTarget = null,
        prevX=0,
        prevY=0;
    if (!window.navigator.msPointerEnabled) {

        document.addEventListener("mousedown", function (e) {
            mouseDown = true;
            lastTarget = e.target;
            if (e.target.nodeName.toLowerCase() === "a" && e.target.href.toLowerCase() === "javascript:;")
                e.target.href = "#";
            redirectMouseToTouch("touchstart", e);
            cancelClickMove = false;
            prevX=e.clientX;
            prevY=e.clientY;
        }, true);

        document.addEventListener("mouseup", function (e) {
            if (!mouseDown) return;
            redirectMouseToTouch("touchend", e, lastTarget); //bind it to initial mousedown target
            lastTarget = null;
            mouseDown = false;
        }, true);

        document.addEventListener("mousemove", function (e) {
            if(e.clientX===prevX&&e.clientY===prevY) return;
            if (!mouseDown) return;
            redirectMouseToTouch("touchmove", e, lastTarget);
            cancelClickMove = true;
        }, true);
    } else { //Win8
        var skipMove=false;
        document.addEventListener("MSPointerDown", function (e) {
            mouseDown = true;
            skipMove=true;
            lastTarget = e.target;
            if (e.target.nodeName.toLowerCase() === "a" && e.target.href.toLowerCase() === "javascript:;")
                e.target.href = "";
            redirectMouseToTouch("touchstart", e,null,true);
            cancelClickMove = false;
            prevX=e.clientX;
            prevY=e.clientY;
            return true;
        }, true);

        document.addEventListener("MSPointerUp", function (e) {
            if (!mouseDown) return;
            redirectMouseToTouch("touchend", e, lastTarget,true); // bind it to initial mousedown target
            lastTarget = null;
            mouseDown = false;
            return true;
        }, true);
        document.addEventListener("MSPointerMove", function (e) {
            //IE is very flakey...we need 7 pixel movement before we trigger it

            if(Math.abs(e.clientX-prevX)<=ieThreshold||Math.abs(e.clientY-prevY)<=ieThreshold) return;
            if (!mouseDown) return;
            redirectMouseToTouch("touchmove", e, lastTarget,true);

            cancelClickMove = true;
            return true;
        }, true);
    }

    // prevent all mouse events which don't exist on touch devices
    document.addEventListener("drag", preventAll, true);
    document.addEventListener("dragstart", preventAll, true);
    document.addEventListener("dragenter", preventAll, true);
    document.addEventListener("dragover", preventAll, true);
    document.addEventListener("dragleave", preventAll, true);
    document.addEventListener("dragend", preventAll, true);
    document.addEventListener("drop", preventAll, true);
    // Allow selection of input elements
    document.addEventListener("selectstart", function(e){
        preventAllButInputs(e, e.target);
    }, true);
    document.addEventListener("click", function (e) {
        if (!e.mouseToTouch && e.target === lastTarget) {
            preventAll(e);
        }
        if (cancelClickMove) {
            preventAll(e);
            cancelClickMove = false;
        }
    }, true);
})(jQuery,window);



 

(function ($) {
    "use strict";
    $.fn.toast = function (opts) {
        return new Toast(this[0], opts);
    };
    var Toast = (function () {
        var Toast = function (containerEl, opts) {

            if (typeof containerEl === "string" || containerEl instanceof String) {
                this.container = document.getElementById(containerEl);
            } else {
                this.container = containerEl;
            }
            if (!this.container) {
                window.alert("Error finding container for toast " + containerEl);
                return;
            }
            if (typeof (opts) === "string" || typeof (opts) === "number") {
                opts = {
                    message: opts
                };
            }
            this.addCssClass = opts.addCssClass ? opts.addCssClass : "";
            this.message = opts.message || "";
            this.delay=opts.delay||this.delay;
            this.position=opts.position||"";
            this.addCssClass+=" "+this.position;
            this.type=opts.type||"";
            //Check if the container exists
            this.container=$(this.container);
            if(this.container.find(".afToastContainer").length===0)
            {
                this.container.append("<div class='afToastContainer'></div>");
            }
            this.container=this.container.find(".afToastContainer");
            this.container.removeClass("tr br tl bl tc bc").addClass(this.addCssClass);
            if(opts.autoClose===false)
                this.autoClose=false;
            this.show();
        };

        Toast.prototype = {
            addCssClass: null,
            message: null,
            delay:5000,
            el:null,
            container:null,
            timer:null,
            autoClose:true,
            show: function () {
                var self = this;
                var markup = "<div  class='afToast "+this.type+"'>"+
                            "<div>" + this.message + "</div>"+
                            "</div>";
                this.el=$(markup).get(0);
                this.container.append(this.el);
                var $el=$(this.el);
                var height=this.el.clientHeight;
                $el.addClass("hidden");
                setTimeout(function(){
                    $el.css("height",height);
                    $el.removeClass("hidden");
                },20);
                if(this.autoClose){
                    this.timer=setTimeout(function(){
                        self.hide();
                    },this.delay);
                }
                $el.bind("click",function(){
                    self.hide();
                });
            },

            hide: function () {
                var self = this;
                clearTimeout(this.timer);
                $(this.el).unbind("click").addClass("hidden");
                $(this.el).css("height","0px");
                if(!$.os.ie&&!$.os.android){
                    setTimeout(function () {
                        self.remove();
                    }, 300);
                }
                else
                    self.remove();
            },

            remove: function () {
                var $el = $(this.el);
                $el.remove();
            }
        };
        return Toast;
    })();


    $.afui.toast=function(opts){
        $(document.body).toast(opts);
    };

    $.afui.registerDataDirective("[data-toast]",function(item){
        var $item=$(item);
        var message=$item.attr("data-message")||"";
        if(message.length===0) return;
        var position=$item.attr("data-position")||"tr";
        var type=$item.attr("data-type");
        var autoClose=$item.attr("data-auto-close")==="false"?false:true;
        var delay=$item.attr("data-delay")||0;
        var opts={
            message:message,
            position:position,
            delay:delay,
            autoClose:autoClose,
            type:type
        };
        $(document.body).toast(opts);
    });

})(jQuery);

/*! intel-appframework - v3.0.0 - 2015-04-02 */

/*
 Intel 2014
 @author Ian Maffett
 @description jQuery helper functions for App Framework
 2011-2014 Intel
 @author Intel
 @version 3.0
 2014 Intel
 Intel 2014

 Intel 2014 

 Intel 2014 

 Intel 2014

 Intel 2014

*/
(function(a,g){function h(a,c){if(a)if(a.nodeType)c[c.length++]=a;else for(var d=0,b=a.length;d<b;d++)c[c.length++]=a[d]}function b(a,c){a.os={};a.os.webkit=c.match(/WebKit\/([\d.]+)/)?!0:!1;a.os.android=c.match(/(Android)\s+([\d.]+)/)||c.match(/Silk-Accelerated/)?!0:!1;a.os.androidICS=a.os.android&&c.match(/(Android)\s4/)?!0:!1;a.os.ipad=c.match(/(iPad).*OS\s([\d_]+)/)?!0:!1;a.os.iphone=!a.os.ipad&&c.match(/(iPhone\sOS)\s([\d_]+)/)?!0:!1;a.os.ios7=(a.os.ipad||a.os.iphone)&&(c.match(/7_/)||c.match(/8_/))?
!0:!1;a.os.webos=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)?!0:!1;a.os.touchpad=a.os.webos&&c.match(/TouchPad/)?!0:!1;a.os.ios=a.os.ipad||a.os.iphone;a.os.playbook=c.match(/PlayBook/)?!0:!1;a.os.blackberry10=c.match(/BB10/)?!0:!1;a.os.blackberry=a.os.playbook||a.os.blackberry10||c.match(/BlackBerry/)?!0:!1;a.os.chrome=c.match(/Chrome/)?!0:!1;a.os.opera=c.match(/Opera/)?!0:!1;a.os.fennec=c.match(/fennec/i)?!0:c.match(/Firefox/)?!0:!1;a.os.ie=c.match(/MSIE 10.0/i)||c.match(/Trident\/7/i)?!0:!1;a.os.ieTouch=
a.os.ie&&c.toLowerCase().match(/touch/i)?!0:!1;a.os.tizen=c.match(/Tizen/i)?!0:!1;a.os.supportsTouch=g.DocumentTouch&&f instanceof g.DocumentTouch||"ontouchstart"in g;a.os.kindle=c.match(/Silk-Accelerated/)?!0:!1;a.feat={};a.feat.cssTransformStart=!a.os.opera?"3d(":"(";a.feat.cssTransformEnd=!a.os.opera?",0)":")";a.os.android&&!a.os.webkit&&(a.os.android=!1);c.match(/IEMobile/i)&&(a.each(a.os,function(c){a.os[c]=!1}),a.os.ie=!0,a.os.ieTouch=!0);for(var d=["Webkit","Moz","ms","O"],b=0;b<d.length;b++)""===
f.documentElement.style[d[b]+"Transform"]&&(a.feat.cssPrefix=d[b])}jQuery.event.props.push("touches");jQuery.event.props.push("originalTouches");jQuery.event.props.push("changedTouches");var f=g.document,e={},c="object"===typeof MSApp;a.extend(a.fn,{vendorCss:function(c,d,b){this.css(c.toLowerCase(),d,b);return this.css(a.feat.cssPrefix+c,d,b)},cssTranslate:function(c){this.vendorCss("Transform","translate"+a.feat.cssTransformStart+c+a.feat.cssTransformEnd)},computedStyle:function(a){if(!(0===this.length||
void 0==a))return g.getComputedStyle(this[0],"")[a]},replaceClass:function(a,c){if(void 0==a||void 0==c)return this;var d=function(a){f=f.replace(a in e?e[a]:e[a]=RegExp("(^|\\s)"+a+"(\\s|$)")," ")},b=0;for(;b<this.length;b++){var f=this[b].className;a.split(/\s+/g).concat(c.split(/\s+/g)).forEach(d);f=f.trim();this[b].className=0<f.length?(f+" "+c).trim():c}return this}});b(a,navigator.userAgent);a.__detectUA=b;a.uuid=function(){var a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};
return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()};a.getCssMatrix=function(c){a.is$(c)&&(c=c.get(0));var d=g.WebKitCSSMatrix||g.MSCSSMatrix;if(void 0===c)return d?new d:{a:0,b:0,c:0,d:0,e:0,f:0};c=g.getComputedStyle(c);c=c.webkitTransform||c.transform||c[a.feat.cssPrefix+"Transform"];return d?new d(c):c?(d=c.replace(/[^0-9\-.,]/g,"").split(","),{a:+d[0],b:+d[1],c:+d[2],d:+d[3],e:+d[4],f:+d[5]}):{a:0,b:0,c:0,d:0,e:0,f:0}};a.create=function(d,b){var e,k=new a;if(b||"<"!==d[0]){b.html&&(b.innerHTML=
b.html,delete b.html);e=f.createElement(d);for(var g in b)e[g]=b[g];k[k.length++]=e}else e=f.createElement("div"),c?MSApp.execUnsafeLocalFunction(function(){e.innerHTML=d.trim()}):e.innerHTML=d,h(e.childNodes,k);return k};a.query=function(c,d){try{return a(c,d)}catch(b){return a()}};a.isObject=function(a){return"object"===typeof a};a.is$=function(c){return c instanceof a};g.$afm=a;a.feat.TouchList=function(){this.length=0};a.feat.TouchList.prototype={item:function(a){return this[a]},_add:function(a){this[this.length]=
a;this.length++}};var d=1E3;a.feat.Touch=function(){this.identifier=d++};a.feat.Touch.prototype={clientX:0,clientY:0,screenX:0,screenY:0,pageX:0,pageY:0,identifier:0}})(jQuery,window);window.af=window.jq=jQuery;
(function(a){var g=window.location.pathname+window.location.search,h=function(){function c(){if(d.useOSThemes){var c=a(document.body);c.removeClass("ios ios7 win8 tizen bb android light dark firefox");a.os.android?c.addClass("android"):a.os.ie?c.addClass("win8"):a.os.blackberry||a.os.blackberry10||a.os.playbook?(c.addClass("bb"),d.backButtonText="Back"):a.os.ios7?c.addClass("ios7"):a.os.ios?c.addClass("ios7"):a.os.tizen?c.addClass("tizen"):a.os.fennec&&c.addClass("firefox")}a.os.ios7&&d.overlayStatusbar&&
d.ready(function(){a(document.body).addClass("overlayStatusbar")})}var d=this;"function"===typeof define&&define.amd?(d.autoLaunch=!1,define("appframeworkui",[],function(){return a.afui})):"undefined"!==typeof module&&module.exports&&(d.autoLaunch=!1,a.afui=d);var b=function(){c();window.FastClick&&FastClick.attach(document.documentElement)};if("complete"===document.readyState||"loaded"===document.readyState)if(b(),d.init)d.autoBoot();else a(window).one("afui:init",function(){d.autoBoot()});else a(document).ready(function(){b();
if(d.init)d.autoBoot();else a(window).one("afui:init",function(){d.autoBoot()})},!1);window.addEventListener("popstate",function(){if(d.useInternalRouting){var a=d.getPanelId(document.location.hash);"#"!==document.location.href.replace(document.location.origin+"/","")&&(""===a&&1===d.history.length&&(a="#"+d.firstPanel.id),""!==a&&0!==af(a).filter(".panel").length&&a!=="#"+d.activeDiv.id&&d.goBack())}},!1);window.addEventListener("orientationchange",function(){window.scrollTo(0,0)})},b=[];h.prototype=
{init:!1,showLoading:!0,loadingText:"Loading Content",remotePages:{},history:[],views:{},_readyFunc:null,doingTransition:!1,ajaxUrl:"",transitionType:"slide",firstPanel:"",hasLaunched:!1,isLaunching:!1,launchCompleted:!1,activeDiv:"",customClickHandler:"",useOSThemes:!0,overlayStatusbar:!1,useAutoPressed:!0,useInternalRouting:!0,autoBoot:function(){this.hasLaunched=!0;this.autoLaunch&&this.launch()},blockPageBounce:function(a){!1===a?(window.removeEventListener("touchmove",this.handlePageBounce,!1),
window.removeEventListener("touchstart",this.handlePageBounce,!1)):(window.addEventListener("touchmove",this.handlePageBounce,!1),window.addEventListener("touchstart",this.handlePageBounce,!1))},handlePageBounce:function(c){if("touchstart"===c.type)this._startTouchY=c.touches[0].screenY;else{var d=a(c.target).closest(".panel");if(0===d.length)return c.preventDefault();var d=d.get(0),b=d.scrollHeight>d.clientHeight,e="touch"===a(d).computedStyle("-webkit-overflow-scrolling"),f="hidden"!==a(d).computedStyle("overflowY"),
k=parseInt(a(d).computedStyle("height"),10);b&&(e&&f)&&(b=c.touches[0].screenY,k=this._startTouchY>=b&&d.scrollHeight-d.scrollTop===k,(this._startTouchY<=b&&0===d.scrollTop||k)&&c.preventDefault())}},registerDataDirective:function(a,d){b.push({sel:a,cb:d})},enableTabBar:function(){a(document).on("click",".button-grouped.tabbed",function(c){var d=a(c.target);d.closest(".tabbed").find(".button").data("ignore-pressed","true").removeClass("pressed");d.closest(".button").addClass("pressed");setTimeout(function(){d.closest(".button").addClass("pressed")})})},
disableTabBar:function(){a(document).off("click",".button-grouped.tabbed");a(".button-grouped.tabbed .button").removeAttr("data-ignore-pressed")},manageHistory:!0,loadDefaultHash:!0,actionsheet:function(c){return a.query(document.body).actionsheet(c)},popup:function(c){return a.query(document.body).popup(c)},blockUI:function(c){a.blockUI(c)},unblockUI:function(){a.unblockUI()},autoLaunch:!0,ready:function(c){if(this.launchCompleted)c();else a(document).one("afui:ready",function(){c()})},goBack:function(c){var d=
a(this.activeDiv).closest(".view");c&&c.target&&(d=a(c.target).closest(".view"));if(0!==d.length&&this.views[d.prop("id")]){var b=this.views[d.prop("id")];if(0!==b.length&&(c=b.pop(),0!==c.length))if(0<b.length){if((b=b[b.length-1].target)&&c.target!==b)this.runTransition(c.transition,c.target,b,!0),this.loadContentData(b,d,!0),this.updateHash(b.id)}else try{this.dismissView(c.target,c.transition)}catch(e){}}},clearHistory:function(){var a=this.findViewTarget(this.activeDiv);this.views[a.prop("id")]=
[];this.setBackButtonVisibility(!1)},pushHistory:function(c,d,b,e){try{this.manageHistory&&(window.history.pushState(d,d,g+"#"+d+e),a(window).trigger("hashchange",null,{newUrl:g+"#"+d+e,oldUrl:g+c}))}catch(f){}},updateHash:function(c){if(this.manageHistory){c=-1===c.indexOf("#")?"#"+c:c;var d=window.location.hash,b=this.getPanelId(c).substring(1);try{window.history.replaceState(b,b,g+c),a(window).trigger("hashchange",null,{newUrl:g+c,oldUrl:g+d})}catch(e){}}},getPanelId:function(a){var d=a.indexOf("/");
return-1===d?a:a.substring(0,d)},setBackButtonText:function(c){a(this.activeDiv).closest(".view").find("header .backButton").html(c)},setTitle:function(c){var d="";"string"===typeof c?(d=c,c=a(this.activeDiv).closest(".view")):a(c).attr("data-title")?d=a(c).attr("data-title"):a(c).attr("title")&&(d=a(c).attr("title"));d&&a(c).closest(".view").children("header").find("h1").html(d)},getTitle:function(){return a(this.activeDiv).closest(".view").children("header").find("h1").html()},setBackButtonVisibility:function(c){a(this.activeDiv).closest(".view").children("header").find(".backButton").css("visibility",
c?"visible":"hidden")},updateBadge:function(c,d,b,e){void 0===b&&(b="");c=a(c);var f=c.find("span.af-badge");0===f.length?("absolute"!==c.css("position")&&c.css("position","relative"),f=a.create("span",{className:"af-badge "+b,html:d}),c.append(f)):f.html(d);f.removeClass("tl bl br tr");f.addClass(b);void 0===e&&(e="red");a.isObject(e)?f.css(e):e&&f.css("background",e);f.data("ignore-pressed","true")},removeBadge:function(c){a(c).find("span.af-badge").remove()},showMask:function(c){c||(c=this.loadingText||
"");a.query("#afui_mask>h1").html(c);a.query("#afui_mask").show()},hideMask:function(){a.query("#afui_mask").hide()},dismissView:function(c,d){d=d.replace(":dismiss","");var b=a(c).closest(".view");this.runTransition(d,b,null,!0,a(c.hash).addClass("active").closest(".view"));this.activeDiv=a(".view").not(b).find(".panel.active").get(0);this.updateHash(this.activeDiv.id)},loadContent:function(a,d,b,e,f){this.doingTransition||0!==a.length&&(-1!==a.indexOf("#")?this.loadDiv(a,d,b,e,f):this.loadAjax(a,
d,b,e,f))},loadDiv:function(c,d,b,e,f){var k=c,g=k.indexOf("#"),h=k.indexOf("/");-1!==h&&-1!==g&&h>g&&(k=k.substr(0,h));k=k.replace("#","");if(k=a.query("#"+k).get(0))if(k===this.activeDiv&&!b)this.doingTransition=!1;else{this.transitionType=e;var g=this.findViewTarget(k),h=this.findPreviousPanel(k,g),n=(f=f?this.findViewTarget(f):this.findViewTarget(this.activeDiv))&&f.get(0)!==g.get(0)&&f.closest(".splitview").get(0)===g.closest(".splitview").get(0)&&0!==f.closest(".splitview").length;n&&(d=!1);
a(k).trigger("panelbeforeload");a(h).trigger("panelbeforeunload");var s=!1;n||(n=1===f.parent().closest(".view").length);n&&(f&&f.get(0)!==g.get(0))&&a(f).trigger("nestedviewunload");!n&&(d||f&&f.get(0)!==g.get(0))?(this.runViewTransition(e,g,f||d,k,b),this.updateViewHistory(g,k,e,c),s=!0):(this.runTransition(e,h,k,b),this.updateViewHistory(g,k,e,c));this.loadContentData(k,g,!1,s)}else a(document).trigger("missingpanel",null,{missingTarget:c}),this.doingTransition=!1},findViewTarget:function(c){c=
a(c).closest(".view");if(!c)return!1;this.views[c.prop("id")]||(this.views[c.prop("id")]=[]);return c},findPreviousPanel:function(c,d){var b=a(d).find(">.pages .panel.active").not(c);0===b.length&&(b=a(d).find(">.pages .panel:first-of-type"));return b.get(0)},loadContentData:function(a,d,b,e){this.activeDiv=a;this.setTitle(a,d,b,e);this.showBackButton(d,e);this.setActiveTab(a,d)},setActiveTab:function(c,d){var b;"string"!==typeof c&&(b=a(c).prop("id"));if(!(0===d.find("footer").find("a").filter("[href='"+
b+"']").length&&0===d.find("footer").find("a").filter("[href='#"+b+"']").length)){var e=d.find("footer").find("a").removeClass("pressed").attr("data-ignore-pressed","true");e.filter("[href='"+b+"']").addClass("pressed");e.filter("[href='#"+b+"']").addClass("pressed")}},showBackButton:function(a,d){var b=this.views[a.prop("id")].length,e=a.children("header");0!==e.length&&(2<=b&&!0!==d?1!==e.find(".backButton").length&&e.prepend("<a class='backButton back'>Back</a>"):e.find(".backButton").remove())},
loadAjax:function(c,d,b,f,g){var k=this,h=e(c),q=a(".panel[data-crc='"+h+"']"),n=g.getAttribute("data-refresh");if(0<q.length)if(n)k.showLoading&&k.showMask("Loading Content"),a.ajax(c).then(function(a){q.html(a);k.showLoading&&k.hideMask();return k.loadContent("#"+q.prop("id"),d,b,f,g)});else return k.loadContent("#"+q.prop("id"),d,b,f,g);k.showLoading&&k.showMask("Loading Content");a.ajax(c).then(function(e){e=a.create("div",{html:e});e.hasClass(".panel")?e=e.find(".panel"):(e=e.attr("data-title",
c),e.prop("id",h),e.addClass("panel"));a(k.activeDiv).closest(".pages").append(e);e.attr("data-crc",h);k.showLoading&&k.hideMask();k.loadContent("#"+e.prop("id"),d,b,f,g)}).fail(function(a){k.showLoading&&k.hideMask();console.log("Error with ajax request",a)})},runTransition:function(c,d,b,e,f){c||(c="slide");-1!==c.indexOf(":back")&&(c=c.replace(":back",""),e=!0);var k=this,g=e?d:b;d=e?b:d;b=!1;-1!==c.indexOf("-reveal")&&(c=c.replace("-reveal",""),b=!0);a(g).css("zIndex","10");a(d).css("zIndex",
"1");a(f).css("zIndex","1").addClass("active");var h=a(d).animation().remove(c+"-in");!b&&h?(e&&h.reverse(),h.end(function(){e?(this.classList.add("active"),a(this).trigger("panelload")):(this.classList.remove("active"),a(this).trigger("panelunload"));k.doingTransition=!1}).run(c+"-out")):e?(a(d).trigger("panelload"),a(d).addClass("activeDiv")):a(d).trigger("panelunload");g=a(g).animation().remove(c+"-out");e&&g.reverse();g.end(function(){k.doingTransition=!1;e?(f&&a(f).css("zIndex","10"),this.classList.remove("active"),
a(this).trigger("panelunload")):(this.classList.add("active"),a(this).trigger("panelload"),a(f).trigger("panelload"))}).run(c+"-in")},runViewTransition:function(c,d,b,e,f){d.addClass("active");a(e).addClass("active");"none"===c?(this.doingTransition=!1,setTimeout(function(){b.removeClass("active");d.addClass("active");a(e).addClass("active")},50)):this.runTransition(c,b,d,f,e)},updateViewHistory:function(a,d,b,e){var f=this.views[a.prop("id")];f||(f=this.views[a.prop("id")]=[]);1<=f.length&&f[f.length-
1].target===d||(this.pushHistory(d.id,d.id,b,e.replace(d.id,"").replace("#","")),this.views[a.prop("id")].push({target:d,transition:b}))},launch:function(){if(!1===this.hasLaunched||this.launchCompleted)this.hasLaunched=!0;else{if(this.isLaunching)return!0;this.isLaunching=!0;this.blockPageBounce();var c=this,d=a.create("div",{id:"afui_mask",className:"ui-loader",html:"<span class='ui-icon ui-icon-loading spin'></span><h1>Loading Content</h1>"}).css({"z-index":2E4,display:"none"});document.body.appendChild(d.get(0));
d=a(".view[data-default='true']");if(0===d.length)d=a(".view").eq(0);else throw"You need to create a view";d.addClass("active");this.views[d.prop("id")]=[];var e=window.location.hash,g=0===d.find(".panel[data-selected='true']").length?d.find(".panel").eq(0):d.find(".panel[data-selected='true']");g.addClass("active");this.activeDiv=g.get(0);this.views[d.prop("id")].push({target:g.get(0),transition:this.transitionType});this.defaultPanel=g.get(0);this.loadContentData(g.get(0),d,!1,!0);this.updateHash(g.get(0).id);
this.loadDefaultHash&&setTimeout(function(){this.loadContent(e,!1,0,"none")}.bind(this));this.enableTabBar();a(document).on("click","a",function(a){c.useInternalRouting&&f(a,a.currentTarget)});a(document).on("click",function(d){for(var e=b.length,f=a(d.target),g=0;g<e;g++){var h=b[g],m=f.closest(h.sel);0<m.length&&h.cb.call(c,m.get(0),d)}});a(document).on("click",".backButton, [data-back]",function(){c.useInternalRouting&&c.goBack(c)});d=a("[data-include]");if(0===d.length)this.launchCompleted=!0,
a(document).trigger("afui:ready");else{var h=[];d.each(function(){var c=this.getAttribute("data-include"),d=a(this);h.push(a.get(c,function(a){d.append(a)}))});a.when.apply(a,h).then(function(){this.launchCompleted=!0;a(document).trigger("afui:ready")}).fail(function(){this.launchCompleted=!0;a(document).trigger("afui:ready")})}a(document).on("click","footer a:not(.button)",function(c){c=a(c.target);var d=c.closest("footer");c.parent().find("a:not(.button)").attr("data-ignore-pressed","true").removeClass("pressed");
"true"!==d.attr("data-ignore-pressed")&&c.addClass("pressed")})}}};var f=function(c,d){d=d||c.currentTarget;if(d!==document){if(!1!==("function"===typeof a.afui.customClickHandler?a.afui.customClickHandler:!1)&&a.afui.customClickHandler(d.getAttribute("href"),c))return c.preventDefault();if("a"!==d.tagName.toLowerCase()&&d.parentNode)return f(c,d.parentNode);if("undefined"!==d.tagName&&"a"===d.tagName.toLowerCase()&&!(-1!==d.href.toLowerCase().indexOf("javascript:")||d.getAttribute("data-ignore"))){var b=
d.href,e=location.protocol+"//"+location.hostname+":"+location.port+location.pathname;0===b.indexOf(e)&&(b=b.substring(e.length));if("#"===b||b.indexOf("#")===b.length-1||0===b.length&&0===d.hash.length)return c.preventDefault();e=/^((http|https|file):\/\/)/;-1!==d.href.indexOf(":")&&e.test(d.href)&&c.preventDefault();e=d.getAttribute("data-transition");!e&&0<a(d).closest("footer").length&&(e="none");if(e&&-1!==e.indexOf(":dismiss"))return a.afui.dismissView(d,e);b=0<d.hash.length?d.hash:b;a.afui.loadContent(b,
!1,0,e,d)}}},e=function(a,b){void 0===b&&(b=0);var e=0,e=0;b^=-1;for(var f=0,g=a.length;f<g;f++)e=(b^a.charCodeAt(f))&255,e="0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9*
e,8),b=b>>>8^e;return(b^-1)>>>0};a.afui=new h;a.afui.init=!0;a(window).trigger("afui:preinit");a(window).trigger("afui:init")})(jQuery);
(function(a){a.fn.actionsheet=function(a){for(var b,f=0;f<this.length;f++)b=new g(this[f],a);return 1===this.length?b:this};var g=function(h,b){if(this.el="string"===typeof h||h instanceof String?document.getElementById(h):h){if(this instanceof g){if("object"===typeof b)for(var f in b)this[f]=b[f]}else return new g(h,b);var e;f=function(){};if("string"===typeof b)e=a("<div id='af_actionsheet'><div style='width:100%'>"+b+"<a href='javascript:;' class='cancel'>Cancel</a></div></div>");else if("object"===
typeof b){e=a("<div id='af_actionsheet'><div style='width:100%'></div></div>");var c=a(e.children().get(0));b.push({text:"Cancel",cssClasses:"cancel"});for(var d=0;d<b.length;d++){var m=a("<a href='javascript:;'>"+(b[d].text||"TEXT NOT ENTERED")+"</a>");m[0].onclick=b[d].handler||f;b[d].cssClasses&&0<b[d].cssClasses.length&&m.addClass(b[d].cssClasses);c.append(m)}}a(h).find("#af_actionsheet").remove();a(h).find("#af_action_mask").remove();a(h).append(e);e.vendorCss("Transition","all 0ms");this.el.style.overflow=
"hidden";e.on("click","a",this.sheetClickHandler.bind(this));this.activeSheet=e;e.cssTranslate("0,"+e.height()+"px");a(h).append("<div id='af_action_mask' style='position:absolute;top:0px;left:0px;right:0px;bottom:0px;z-index:9998;background:rgba(0,0,0,.4)'/>");setTimeout(function(){e.vendorCss("Transition","all 300ms");e.cssTranslate("0,0")},10);a("#af_action_mask").bind("touchstart touchmove touchend click",function(a){a.preventDefault();a.stopPropagation()})}else window.alert("Could not find element for actionsheet "+
h)};g.prototype={activeSheet:null,sheetClickHandler:function(){this.hideSheet();return!1},hideSheet:function(){this.activeSheet.off("click","a",this.sheetClickHandler);a(this.el).find("#af_action_mask").unbind("click").remove();this.activeSheet.vendorCss("Transition","all 0ms");var g=this.activeSheet,b=this.el;setTimeout(function(){g.vendorCss("Transition","all 300ms");g.cssTranslate("0,"+(g.height()+60)+"px");setTimeout(function(){g.remove();g=null;b.style.overflow="none"},350)},10)}};a.afui.actionsheet=
function(g){return a(document.body).actionsheet(g)}})(jQuery);
(function(a){a.afui.registerDataDirective("[data-grower]",function(g,h){var b=a(g).closest("[data-grower]"),f=b.offset(),e=b.closest(".view"),c=h.target.hash||b.attr("data-grower");e.css("zIndex","1");var d=a(c).closest(".view"),m=b.width()/window.innerWidth,l=b.height()/window.innerHeight,p={left:f.left,top:f.top,x:m,y:l};a(c).trigger("panelgrowstart",[b.get(0)]);d.addClass("active").css("zIndex","10");d.vendorCss("TransformOrigin","0 0");d.data("growTransProps",p);d.vendorCss("TransitionDuration",
"0");d.vendorCss("Transform","translate3d("+f.left+"px,"+f.top+"px,0) scale("+m+","+l+")");d.data("growTarget",b.closest(".panel"));d.data("growFrom",a(c).attr("id"));a.afui.loadContent(c,e,!1,"stretch");a(c).one("panelload",function(){d.vendorCss("Transform","");a(c).trigger("panelgrowcomplete",[b.get(0)])})});a.afui.registerDataDirective("[data-grower-back]",function(g){var h=a(g).closest(".view"),b=a("#"+h.data("growFrom"));b.trigger("panelgrowendstart");g=h.data("growTransProps");var f="#"+h.data("growTarget").prop("id");
a(f).closest(".view").addClass("active");h.addClass("animation-active");h.transition().end(function(){h.removeClass("active");b.trigger("panelgrowendstart");a.afui.loadContent(f,!1,!1,"none")}).run("translate3d("+g.left+"px,"+g.top+"px,0) scale("+g.x+","+g.y+")","300ms")})})(jQuery);
(function(a){function g(a,c,b,d){var e=Math.abs(a-c),f=Math.abs(b-d);return e>=f?0<a-c?"Left":"Right":0<b-d?"Up":"Down"}function h(){b.last&&Date.now()-b.last>=e&&(b.el.trigger("longTap"),b={})}var b={},f,e=750,c,d=!1,m=!1;a(document).ready(function(){var l;a(document.body).bind("touchstart",function(g){g.originalEvent&&(g=g.originalEvent);if(g.touches&&0!==g.touches.length){var k=Date.now(),r=k-(b.last||k);g.touches&&0!==g.touches.length&&(b.el=a("tagName"in g.touches[0].target?g.touches[0].target:
g.touches[0].target.parentNode),f&&clearTimeout(f),b.x1=g.touches[0].pageX,b.y1=g.touches[0].pageY,b.x2=b.y2=0,0<r&&250>=r&&(b.isDoubleTap=!0),b.last=k,c=setTimeout(h,e),a.afui.useAutoPressed&&!b.el.attr("data-ignore-pressed")&&b.el.addClass("pressed"),l&&(a.afui.useAutoPressed&&!l.attr("data-ignore-pressed")&&l[0]!==b.el[0])&&l.removeClass("pressed"),l=b.el,m=d=!1)}}).bind("touchmove",function(e){e.originalEvent&&(e=e.originalEvent);b.x2=e.touches[0].pageX;b.y2=e.touches[0].pageY;if(!m&&(5<Math.abs(b.x2-
b.x1)||5<Math.abs(b.y2-b.y1))){var f=5<Math.abs(b.x2-b.x1),h=5<Math.abs(b.y2-b.y1);m=!0;b.el.trigger("swipeStart",[e]);b.el.trigger("swipeStart"+g(b.x1,b.x2,b.y1,b.y2),[b,e]);var l=b.el.closest(".swipe, .swipe-reveal, .swipe-x, .swipe-y"),n=b.el.closest(".x-scroll, .y-scroll, .scroll");d=0!==b.el.closest(".swipe, .swipe-reveal").length;0!==n.parent(l).length?d=!1:f&&0!==b.el.closest(".swipe-x").length?d=!0:h&&0!==b.el.closest(".swipe-y").length&&(d=!0)}a.os.android&&m&&d&&e.preventDefault();clearTimeout(c)}).bind("touchend",
function(c){c.originalEvent&&(c=c.originalEvent);if(b.el)if(a.afui.useAutoPressed&&!b.el.attr("data-ignore-pressed")&&b.el.removeClass("pressed"),b.isDoubleTap)b.el.trigger("doubleTap"),b={};else if(0<b.x2||0<b.y2){(30<Math.abs(b.x1-b.x2)||30<Math.abs(b.y1-b.y2))&&b.el.trigger("swipe");c=g(b.x1,b.x2,b.y1,b.y2);var d=".x-scroll",e=".swipe-x";if("up"===c.toLowerCase()||"down"===c.toLowerCase())d=".y-scroll",e=".swipe-y";e=b.el.closest(e);d=b.el.closest(d);(0===e.length||0===d.length||0===e.find(d).length)&&
b.el.trigger("swipe"+c);b.x1=b.x2=b.y1=b.y2=b.last=0}else"last"in b&&(b.el.trigger("tap"),f=setTimeout(function(){f=null;b.el&&b.el.trigger("singleTap");b={}},250))}).bind("touchcancel",function(){b.el&&(a.afui.useAutoPressed&&!b.el.attr("data-ignore-pressed"))&&b.el.removeClass("pressed");b={};clearTimeout(c)})});"swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function(c){a.fn[c]=function(a){return this.bind(c,a)}})})(jQuery);
(function(a){var g=a.afui.setTitle;a.afui.animateHeader=function(h){a.afui.setTitle=!1!==h?function(b,f,e,c){var d;"string"===typeof b?d=b:a(b).attr("data-title")?d=a(b).attr("data-title"):a(b).attr("title")&&(d=a(b).attr("title"));d&&0!==d.length&&(b=a(this.activeDiv).closest(".view").children("header").eq(0),e=e?"header-unload":"header-load",f=b.find("h1").eq(0).html(),b.find("h1").eq(0).html(d).removeClass("header-unload header-load"),c||(b.find("h1").animation().run(e+"-to"),c=a("<h1>"+f+"</h1>"),
b.append(c),c.animation().end(function(){a(this).remove()}).run(e)))}:g}})(jQuery);
(function(a){a.fn.popup=function(a){return new h(this[0],a)};var g=[],h=function(b,e){if(this.container="string"===typeof b||b instanceof String?document.getElementById(b):b)try{if("string"===typeof e||"number"===typeof e)e={message:e,cancelOnly:"true",cancelText:"OK"};this.id=e.id=e.id||a.uuid();this.addCssClass=e.addCssClass?e.addCssClass:"";this.suppressTitle=e.suppressTitle||this.suppressTitle;this.title=e.suppressTitle?"":e.title||"Alert";this.message=e.message||"";this.cancelText=e.cancelText||
"Cancel";this.cancelCallback=e.cancelCallback||function(){};this.cancelClass=e.cancelClass||"button";this.doneText=e.doneText||"Done";this.doneCallback=e.doneCallback||function(){};this.doneClass=e.doneClass||"button";this.cancelOnly=e.cancelOnly||!1;this.onShow=e.onShow||function(){};this.autoCloseDone=void 0!==e.autoCloseDone?e.autoCloseDone:!0;g.push(this);1===g.length&&this.show()}catch(c){console.log("error adding popup "+c)}else window.alert("Error finding container for popup "+b)};h.prototype=
{id:null,addCssClass:null,title:null,message:null,cancelText:null,cancelCallback:null,cancelClass:null,doneText:null,doneCallback:null,doneClass:null,cancelOnly:!1,onShow:null,autoCloseDone:!0,suppressTitle:!1,show:function(){var b=this,e=a("<div id='"+this.id+"' class='afPopup hidden "+this.addCssClass+"'><header>"+this.title+"</header><div>"+this.message+"</div><footer><a href='javascript:;' class='"+this.cancelClass+"' id='cancel'>"+this.cancelText+"</a><a href='javascript:;' class='"+this.doneClass+
"' id='action'>"+this.doneText+"</a><div style='clear:both'></div></footer></div>");a(this.container).append(e);e.bind("close",function(){b.hide()});this.cancelOnly&&(e.find("A#action").hide(),e.find("A#cancel").addClass("center"));e.find("A").each(function(){var c=a(this);c.bind("click",function(a){"cancel"===c.attr("id")?(b.cancelCallback.call(b.cancelCallback,b),b.hide()):(b.doneCallback.call(b.doneCallback,b),b.autoCloseDone&&b.hide());a.preventDefault()})});b.positionPopup();a.blockUI(0.5);e.bind("orientationchange",
function(){b.positionPopup()});e.find("header").show();e.find("footer").show();setTimeout(function(){e.removeClass("hidden").addClass("show");b.onShow(b)},50)},hide:function(){var b=this;a.query("#"+b.id).addClass("hidden");a.unblockUI();!a.os.ie&&!a.os.android?setTimeout(function(){b.remove()},250):b.remove()},remove:function(){var b=a.query("#"+this.id);b.unbind("close");b.find("BUTTON#action").unbind("click");b.find("BUTTON#cancel").unbind("click");b.unbind("orientationchange").remove();g.splice(0,
1);0<g.length&&g[0].show()},positionPopup:function(){var b=a.query("#"+this.id);b.css("top",window.innerHeight/2.5+window.pageYOffset-b[0].clientHeight/2+"px");b.css("left",window.innerWidth/2-b[0].clientWidth/2+"px")}};var b=!1;a.blockUI=function(f){b||(f=f?" style='opacity:"+f+";'":"",a.query("BODY").prepend(a("<div id='mask'"+f+"></div>")),a.query("BODY DIV#mask").bind("touchstart",function(a){a.preventDefault()}),a.query("BODY DIV#mask").bind("touchmove",function(a){a.preventDefault()}),b=!0)};
a.unblockUI=function(){b=!1;a.query("BODY DIV#mask").unbind("touchstart");a.query("BODY DIV#mask").unbind("touchmove");a("BODY DIV#mask").remove()};a.afui.registerDataDirective("[data-alert]",function(b){b=a(b).attr("data-message");0!==b.length&&a(document.body).popup(b)});a.afui.popup=function(b){return a(document.body).popup(b)}})(jQuery);
(function(a){function g(a){this.element=a;this.element.classList.remove("animation-reverse");this.keepClass=!1}function h(a){this.element=a;this.element}a.fn.animation=function(){var a=this;this.each(function(){a=new g(this)});return a};var b=function(a){this.element.removeEventListener("webkitAnimationEnd",this.endCBCache,!1);this.element.removeEventListener("animationend",this.endCBCache,!1);this.element.removeEventListener("MSAnimationEnd",this.endCBCache,!1);this.endcb&&this.endcb.call(this.element,
a);this.element.classList.remove("animation-reverse");this.element.classList.remove("animation-active");this.keepClass||this.element.classList.remove(this.animClass)};g.prototype={element:null,animClass:null,runEnd:!1,keepClass:!1,keep:function(){this.keepClass=!0;return this},remove:function(a){this.element.classList.remove(a);this.element.offsetWidth=this.element.offsetWidth;return this},endCBCache:null,run:function(a,c){this.runEnd=!1;this.element.classList.add("animation-active");this.element.offsetWidth=
this.element.offsetWidth;this.element.classList.add(a);this.animClass=a;var d=window.getComputedStyle(this.element,null),f=d.animation-c;f||(f=d.animationDuration);f||(f=d.MozAnimationDuration);f||(f=d.webkitAnimationDuration);f=parseFloat(f);if(0.01>=f||isNaN(f))this.runEnd=!0;this.endCBCache=b.bind(this);if(this.runEnd)return this.endCBCache(),this;this.element.addEventListener("webkitAnimationEnd",this.endCBCache,!1);this.element.addEventListener("animationend",this.endCBCache,!1);this.element.addEventListener("MSAnimationEnd",
this.endCBCache,!1);return this},reverse:function(){this.element.classList.add("animation-reverse");return this},reRun:function(a){this.remove(a);return this.run(a)},endcb:function(){},end:function(a){this.endcb=a;return this}};a.fn.transition=function(){var a=this;this.each(function(){a=new h(this)});return a};var f=function(b){clearTimeout(this.timer);this.element.removeEventListener("webkitTransitionEnd",this.endCBCache,!1);this.element.removeEventListener("transitionend",this.endCBCache,!1);this.element.removeEventListener("MSTransitionEnd",
this.endCBCache,!1);this.endcb&&this.endcb.call(this.element,b);this.keepEnd||(a(this.element).vendorCss("TransitionDuration",""),a(this.element).vendorCss("Transform",""))};h.prototype={element:null,runEnd:!1,keepEnd:!1,keep:function(){this.keepEnd=!0;return this},endCBCache:null,timer:null,run:function(b,c){this.endCBCache=f.bind(this);this.element.addEventListener("webkitTransitionEnd",this.endCBCache,!1);this.element.addEventListener("transitionend",this.endCBCache,!1);this.element.addEventListener("MSTransitionEnd",
this.endCBCache,!1);a(this.element).vendorCss("TransitionDuration",c);a(this.element).vendorCss("Transform",b);this.timer=setTimeout(function(){this.endCBCache()}.bind(this),parseInt(c,10)+50);return this},endcb:function(){},end:function(a){this.endcb=a;return this}}})(jQuery);(function(a){a.afui.ready(function(){setTimeout(function(){a("#splashscreen").remove()},250)})})(jQuery);
(function(a){function g(){return this}var h=null,b,f={push:function(b,c,d){b=a(b).closest(".view").children().filter(":not(nav):not(aside)");d=d||h;for(var f=0;f<b.length;f++){var g=a(b[f]).show().animation();c?g.remove("slide-"+d+"-out").reverse():g.keep();g.run("slide-"+d+"-out")}},cover:function(){},reveal:function(a,b){return this.push(a,b)}};g.prototype={defaultTransition:"slide",defaultAnimation:"cover",isTransitioning:!1,autoHide:function(a){a.preventDefault();this.hide()},checkViewToClose:function(a){this.autoHide(a)},
autoHideCheck:null,selfCheckViewToClose:null,show:function(e,c,d){if(!this.isTransitioning){var g=this;h="right"===c?"right":"left";d=f[d]?d:this.defaultAnimation;var l=document.getElementById(e.replace("#",""));l&&(b=l,l.classList.contains("active")||(this.isTransitioning=!0,this.autoHideCheck=this.autoHide.bind(this),a(l).closest(".view").children().filter(":not(nav):not(aside)").off("touchstart",this.autoHideCheck),l.classList.add(h),e=a(l).show(),c="right"===h?"left":"right",0<a(l).closest(".view").find(".slide-"+
c+"-out").length&&(a(l).closest(".view").find(".slide-"+c+"-out").removeClass("slide-"+c+"-out"),a(l).closest(".view").find("aside.active, nav.active").removeClass("left right active").hide()),"reveal"!==d?e.css("zIndex","999").animation().run("slide-"+h+"-in").end(function(){this.classList.add("active");g.isTransitioning=!1}):e.animation().run("blank").end(function(){a(this).css("zIndex","999");this.classList.add("active");g.isTransitioning=!1}),l.activeAnimation=d,l.activePosition=h,l.toggled=!0,
f[d](l,!1),setTimeout(function(){a(l).closest(".view").children().filter(":not(nav):not(aside)").on("touchstart",g.autoHideCheck)}),this.selfCheckViewToClose=g.checkViewToClose.bind(this),a(l).bind("nestedviewunload",this.selfCheckViewToClose)))}},hide:function(e,c){if(!this.isTransitioning){var d=this,g=e&&document.getElementById(e.replace("#",""))||b;a(g).unbind("nestedviewunload",this.selfCheckViewToClose);if(g&&g.toggled){a(g).closest(".view").children().filter(":not(nav):not(aside)").off("touchstart",
this.autoHideCheck);var h=c||g.activePosition,p=a(g).animation();"reveal"===g.activeAnimation&&a(g).css("zIndex","1");var k="reveal"===g.activeAnimation?"blank":"slide-"+h+"-in";p.reverse().reRun(k).end(function(){this.classList.remove("active");this.classList.remove(h);this.style.display="none";this.style.zIndex="";d.isTransitioning=!1});if(f[g.activeAnimation])f[g.activeAnimation](g,!0);g.toggled=!1;b=null}}}};a.afui.drawer=new g;a.afui.registerDataDirective("[data-left-menu]:not([data-menu-close]),[data-right-menu]:not([data-menu-close])",
function(b){var c=a(b);b=c.attr("data-left-menu")?"left":"right";var d="left"===b?c.attr("data-left-menu"):c.attr("data-right-menu"),c=c.attr("data-transition");this.drawer.show(d,b,c)});a.afui.registerDataDirective("[data-menu-close]",function(b){var c=a(b),d=null;c.attr("data-left-menu")&&(d="left");c.attr("data-right-menu")&&(d="right");c="left"===d?c.attr("data-left-menu"):c.attr("data-right-menu");if(!c&&(c=a(b).closest("nav").prop("id"),!c||0===c.length))c=a(b).closest(".view").find("nav.active,aside.active").prop("id");
this.drawer.hide(c,d)})})(jQuery);
(function(a){var g,h=0,b,f;a.afui.swipeThreshold=0.3;a(document).on("swipeStartLeft",".swipe-reveal",function(c,d,m){m.preventDefault();g=a(c.target).closest(".swipe-content");h=d.x2;f=g.closest(".swipe-reveal").find(".swipe-hidden").width();0===a.getCssMatrix(c.target).e&&(g.bind("touchmove",e),g.one("touchend",function(){g.unbind("touchmove",e);Math.abs(b)/f<a.afui.swipeThreshold&&(f=0);g.transition().keep().end(function(){g=f=null}).run("translate3d("+-f+"px,0px,0)","100ms")}))});a(document).on("swipeStartRight",
".swipe-reveal",function(c,d,m){m.preventDefault();g=a(c.target).closest(".swipe-content");f=g.closest(".swipe-reveal").find(".swipe-hidden").width();0!==a.getCssMatrix(c.target).e&&(h=d.x2+f,g.bind("touchmove",e),g.one("touchend",function(){g.unbind("touchmove",e);1-Math.abs(b)/f>a.afui.swipeThreshold&&(f=0);g.transition().keep().end(function(){g=f=null}).run("translate3d("+-f+"px,0px,0)","100ms")}))});var e=function(a){a=-(h-a.touches[0].pageX);a<-f?a="-"+f:0<a&&(a=0);b=a;g.cssTranslate(a+"px,0")}})(jQuery);
(function(a){var g=!1;if(!a.os.supportsTouch){try{document.createEvent("TouchEvent");return}catch(h){}a.os.supportsTouch=!0;var b=function(a){a.preventDefault();a.stopPropagation()},f=navigator.userAgent.match(/Phone/i)?2:7,e=function(a,c){var d=c.tagName.toUpperCase();-1<d.indexOf("SELECT")||(-1<d.indexOf("TEXTAREA")||-1<d.indexOf("INPUT"))||b(a)},c=function(b,c,d,f){d=d?d:c.target;f||e(c,d);f=document.createEvent("MouseEvent");f.initEvent(b,!0,!0);f.initMouseEvent(b,!0,!0,window,c.detail,c.screenX,
c.screenY,c.clientX,c.clientY,c.ctrlKey,c.shiftKey,c.altKey,c.metaKey,c.button,c.relatedTarget);f.touches=new a.feat.TouchList;f.changedTouches=new a.feat.TouchList;f.targetTouches=new a.feat.TouchList;var g=new a.feat.Touch;g.pageX=c.pageX;g.pageY=c.pageY;g.target=c.target;f.changedTouches._add(g);"touchend"!==b&&(f.touches=f.changedTouches,f.targetTouches=f.changedTouches);f.mouseToTouch=!0;if(a.os.ie)for(c=c.target;null!==c;)c.hasAttribute("on"+b)&&eval(c.getAttribute("on"+b)),c=c.parentElement;
d.dispatchEvent(f)},d=!1,m=null,l=0,p=0;window.navigator.msPointerEnabled?(document.addEventListener("MSPointerDown",function(a){d=!0;m=a.target;"a"===a.target.nodeName.toLowerCase()&&"javascript:;"===a.target.href.toLowerCase()&&(a.target.href="");c("touchstart",a,null,!0);g=!1;l=a.clientX;p=a.clientY;return!0},!0),document.addEventListener("MSPointerUp",function(a){if(d)return c("touchend",a,m,!0),m=null,d=!1,!0},!0),document.addEventListener("MSPointerMove",function(a){if(!(Math.abs(a.clientX-
l)<=f||Math.abs(a.clientY-p)<=f)&&d)return c("touchmove",a,m,!0),g=!0},!0)):(document.addEventListener("mousedown",function(a){d=!0;m=a.target;"a"===a.target.nodeName.toLowerCase()&&"javascript:;"===a.target.href.toLowerCase()&&(a.target.href="#");c("touchstart",a);g=!1;l=a.clientX;p=a.clientY},!0),document.addEventListener("mouseup",function(a){d&&(c("touchend",a,m),m=null,d=!1)},!0),document.addEventListener("mousemove",function(a){!(a.clientX===l&&a.clientY===p)&&d&&(c("touchmove",a,m),g=!0)},
!0));document.addEventListener("drag",b,!0);document.addEventListener("dragstart",b,!0);document.addEventListener("dragenter",b,!0);document.addEventListener("dragover",b,!0);document.addEventListener("dragleave",b,!0);document.addEventListener("dragend",b,!0);document.addEventListener("drop",b,!0);document.addEventListener("selectstart",function(a){e(a,a.target)},!0);document.addEventListener("click",function(a){!a.mouseToTouch&&a.target===m&&b(a);g&&(b(a),g=!1)},!0)}})(jQuery,window);
(function(a){a.fn.toast=function(a){return new g(this[0],a)};var g=function(){var g=function(b,f){if(this.container="string"===typeof b||b instanceof String?document.getElementById(b):b){if("string"===typeof f||"number"===typeof f)f={message:f};this.addCssClass=f.addCssClass?f.addCssClass:"";this.message=f.message||"";this.delay=f.delay||this.delay;this.position=f.position||"";this.addCssClass+=" "+this.position;this.type=f.type||"";this.container=a(this.container);0===this.container.find(".afToastContainer").length&&
this.container.append("<div class='afToastContainer'></div>");this.container=this.container.find(".afToastContainer");this.container.removeClass("tr br tl bl tc bc").addClass(this.addCssClass);!1===f.autoClose&&(this.autoClose=!1);this.show()}else window.alert("Error finding container for toast "+b)};g.prototype={addCssClass:null,message:null,delay:5E3,el:null,container:null,timer:null,autoClose:!0,show:function(){var b=this;this.el=a("<div  class='afToast "+this.type+"'><div>"+this.message+"</div></div>").get(0);
this.container.append(this.el);var f=a(this.el),e=this.el.clientHeight;f.addClass("hidden");setTimeout(function(){f.css("height",e);f.removeClass("hidden")},20);this.autoClose&&(this.timer=setTimeout(function(){b.hide()},this.delay));f.bind("click",function(){b.hide()})},hide:function(){var b=this;clearTimeout(this.timer);a(this.el).unbind("click").addClass("hidden");a(this.el).css("height","0px");!a.os.ie&&!a.os.android?setTimeout(function(){b.remove()},300):b.remove()},remove:function(){a(this.el).remove()}};
return g}();a.afui.toast=function(g){a(document.body).toast(g)};a.afui.registerDataDirective("[data-toast]",function(g){var b=a(g);g=b.attr("data-message")||"";if(0!==g.length){var f=b.attr("data-position")||"tr",e=b.attr("data-type"),c="false"===b.attr("data-auto-close")?!1:!0,b=b.attr("data-delay")||0;g={message:g,position:f,delay:b,autoClose:c,type:e};a(document.body).toast(g)}})})(jQuery);

