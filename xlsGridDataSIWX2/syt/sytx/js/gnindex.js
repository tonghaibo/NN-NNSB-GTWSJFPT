/**
 * 
 */

document.onkeydown = function(){
		if (event.keyCode == 8) { 
			if (document.activeElement.type == "text" || document.activeElement.type == "textarea" || document.activeElement.type == "password") {
				if (document.activeElement.readOnly == false)
					return true; 
				} 
				return false;
			}
	};
	
/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);

/*!
* jQuery JavaScript Library v1.6.2
* http://jquery.com/
*
* Copyright 2011, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* Includes Sizzle.js
* http://sizzlejs.com/
* Copyright 2011, The Dojo Foundation
* Released under the MIT, BSD, and GPL Licenses.
*
* Date: Thu Jun 30 14:16:56 2011 -0400
*/
(function (window, undefined) {

    // Use the correct document accordingly with window argument (sandbox)
    var document = window.document,
	navigator = window.navigator,
	location = window.location;
    var jQuery = (function () {

        // Define a local copy of jQuery
        var jQuery = function (selector, context) {
            // The jQuery object is actually just the init constructor 'enhanced'
            return new jQuery.fn.init(selector, context, rootjQuery);
        },

        // Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

        // Map over the $ in case of overwrite
	_$ = window.$,

        // A central reference to the root jQuery(document)
	rootjQuery,

        // A simple way to check for HTML strings or ID strings
        // (both of which we optimize for)
	quickExpr = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

        // Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

        // Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

        // Check for digits
	rdigit = /\d/,

        // Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

        // JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

        // Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

        // Matches dashed string for camelizing
	rdashAlpha = /-([a-z])/ig,

        // Used by jQuery.camelCase as callback to replace()
	fcamelCase = function (all, letter) {
	    return letter.toUpperCase();
	},

        // Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

        // For matching the engine and version of the browser
	browserMatch,

        // The deferred used on DOM ready
	readyList,

        // The ready event handler
	DOMContentLoaded,

        // Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

        // [[Class]] -> type pairs
	class2type = {};

        jQuery.fn = jQuery.prototype = {
            constructor: jQuery,
            init: function (selector, context, rootjQuery) {
                var match, elem, ret, doc;

                // Handle $(""), $(null), or $(undefined)
                if (!selector) {
                    return this;
                }

                // Handle $(DOMElement)
                if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                }

                // The body element only exists once, optimize finding it
                if (selector === "body" && !context && document.body) {
                    this.context = document;
                    this[0] = document.body;
                    this.selector = selector;
                    this.length = 1;
                    return this;
                }

                // Handle HTML strings
                if (typeof selector === "string") {
                    // Are we dealing with HTML string or an ID?
                    if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                        // Assume that strings that start and end with <> are HTML and skip the regex check
                        match = [null, selector, null];

                    } else {
                        match = quickExpr.exec(selector);
                    }

                    // Verify a match, and that no context was specified for #id
                    if (match && (match[1] || !context)) {

                        // HANDLE: $(html) -> $(array)
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            doc = (context ? context.ownerDocument || context : document);

                            // If a single string is passed in and it's a single tag
                            // just do a createElement and skip the rest
                            ret = rsingleTag.exec(selector);

                            if (ret) {
                                if (jQuery.isPlainObject(context)) {
                                    selector = [document.createElement(ret[1])];
                                    jQuery.fn.attr.call(selector, context, true);

                                } else {
                                    selector = [doc.createElement(ret[1])];
                                }

                            } else {
                                ret = jQuery.buildFragment([match[1]], [doc]);
                                selector = (ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment).childNodes;
                            }

                            return jQuery.merge(this, selector);

                            // HANDLE: $("#id")
                        } else {
                            elem = document.getElementById(match[2]);

                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            if (elem && elem.parentNode) {
                                // Handle the case where IE and Opera return items
                                // by name instead of ID
                                if (elem.id !== match[2]) {
                                    return rootjQuery.find(selector);
                                }

                                // Otherwise, we inject the element directly into the jQuery object
                                this.length = 1;
                                this[0] = elem;
                            }

                            this.context = document;
                            this.selector = selector;
                            return this;
                        }

                        // HANDLE: $(expr, $(...))
                    } else if (!context || context.jquery) {
                        return (context || rootjQuery).find(selector);

                        // HANDLE: $(expr, context)
                        // (which is just equivalent to: $(context).find(expr)
                    } else {
                        return this.constructor(context).find(selector);
                    }

                    // HANDLE: $(function)
                    // Shortcut for document ready
                } else if (jQuery.isFunction(selector)) {
                    return rootjQuery.ready(selector);
                }

                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }

                return jQuery.makeArray(selector, this);
            },

            // Start with an empty selector
            selector: "",

            // The current version of jQuery being used
            jquery: "1.6.2",

            // The default length of a jQuery object is 0
            length: 0,

            // The number of elements contained in the matched element set
            size: function () {
                return this.length;
            },

            toArray: function () {
                return slice.call(this, 0);
            },

            // Get the Nth element in the matched element set OR
            // Get the whole matched element set as a clean array
            get: function (num) {
                return num == null ?

                // Return a 'clean' array
			this.toArray() :

                // Return just the object
			(num < 0 ? this[this.length + num] : this[num]);
            },

            // Take an array of elements and push it onto the stack
            // (returning the new matched element set)
            pushStack: function (elems, name, selector) {
                // Build a new jQuery matched element set
                var ret = this.constructor();

                if (jQuery.isArray(elems)) {
                    push.apply(ret, elems);

                } else {
                    jQuery.merge(ret, elems);
                }

                // Add the old object onto the stack (as a reference)
                ret.prevObject = this;

                ret.context = this.context;

                if (name === "find") {
                    ret.selector = this.selector + (this.selector ? " " : "") + selector;
                } else if (name) {
                    ret.selector = this.selector + "." + name + "(" + selector + ")";
                }

                // Return the newly-formed element set
                return ret;
            },

            // Execute a callback for every element in the matched set.
            // (You can seed the arguments with an array of args, but this is
            // only used internally.)
            each: function (callback, args) {
                return jQuery.each(this, callback, args);
            },

            ready: function (fn) {
                // Attach the listeners
                jQuery.bindReady();

                // Add the callback
                readyList.done(fn);

                return this;
            },

            eq: function (i) {
                return i === -1 ?
			this.slice(i) :
			this.slice(i, +i + 1);
            },

            first: function () {
                return this.eq(0);
            },

            last: function () {
                return this.eq(-1);
            },

            slice: function () {
                return this.pushStack(slice.apply(this, arguments),
			"slice", slice.call(arguments).join(","));
            },

            map: function (callback) {
                return this.pushStack(jQuery.map(this, function (elem, i) {
                    return callback.call(elem, i, elem);
                }));
            },

            end: function () {
                return this.prevObject || this.constructor(null);
            },

            // For internal use only.
            // Behaves like an Array's method, not like a jQuery method.
            push: push,
            sort: [].sort,
            splice: [].splice
        };

        // Give the init function the jQuery prototype for later instantiation
        jQuery.fn.init.prototype = jQuery.fn;

        jQuery.extend = jQuery.fn.extend = function () {
            var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

            // Handle a deep copy situation
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[1] || {};
                // skip the boolean and the target
                i = 2;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {};
            }

            // extend jQuery itself if only one argument is passed
            if (length === i) {
                target = this;
                --i;
            }

            for (; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) != null) {
                    // Extend the base object
                    for (name in options) {
                        src = target[name];
                        copy = options[name];

                        // Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];

                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[name] = jQuery.extend(deep, clone, copy);

                            // Don't bring in undefined values
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        };

        jQuery.extend({
            noConflict: function (deep) {
                if (window.$ === jQuery) {
                    window.$ = _$;
                }

                if (deep && window.jQuery === jQuery) {
                    window.jQuery = _jQuery;
                }

                return jQuery;
            },

            // Is the DOM ready to be used? Set to true once it occurs.
            isReady: false,

            // A counter to track how many items to wait for before
            // the ready event fires. See #6781
            readyWait: 1,

            // Hold (or release) the ready event
            holdReady: function (hold) {
                if (hold) {
                    jQuery.readyWait++;
                } else {
                    jQuery.ready(true);
                }
            },

            // Handle when the DOM is ready
            ready: function (wait) {
                // Either a released hold or an DOMready/load event and not yet ready
                if ((wait === true && ! --jQuery.readyWait) || (wait !== true && !jQuery.isReady)) {
                    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                    if (!document.body) {
                        return setTimeout(jQuery.ready, 1);
                    }

                    // Remember that the DOM is ready
                    jQuery.isReady = true;

                    // If a normal DOM Ready event fired, decrement, and wait if need be
                    if (wait !== true && --jQuery.readyWait > 0) {
                        return;
                    }

                    // If there are functions bound, to execute
                    readyList.resolveWith(document, [jQuery]);

                    // Trigger any bound ready events
                    if (jQuery.fn.trigger) {
                        jQuery(document).trigger("ready").unbind("ready");
                    }
                }
            },

            bindReady: function () {
                if (readyList) {
                    return;
                }

                readyList = jQuery._Deferred();

                // Catch cases where $(document).ready() is called after the
                // browser event has already occurred.
                if (document.readyState === "complete") {
                    // Handle it asynchronously to allow scripts the opportunity to delay ready
                    return setTimeout(jQuery.ready, 1);
                }

                // Mozilla, Opera and webkit nightlies currently support this event
                if (document.addEventListener) {
                    // Use the handy event callback
                    document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

                    // A fallback to window.onload, that will always work
                    window.addEventListener("load", jQuery.ready, false);

                    // If IE event model is used
                } else if (document.attachEvent) {
                    // ensure firing before onload,
                    // maybe late but safe also for iframes
                    document.attachEvent("onreadystatechange", DOMContentLoaded);

                    // A fallback to window.onload, that will always work
                    window.attachEvent("onload", jQuery.ready);

                    // If IE and not a frame
                    // continually check to see if the document is ready
                    var toplevel = false;

                    try {
                        toplevel = window.frameElement == null;
                    } catch (e) { }

                    if (document.documentElement.doScroll && toplevel) {
                        doScrollCheck();
                    }
                }
            },

            // See test/unit/core.js for details concerning isFunction.
            // Since version 1.3, DOM methods and functions like alert
            // aren't supported. They return false on IE (#2968).
            isFunction: function (obj) {
                return jQuery.type(obj) === "function";
            },

            isArray: Array.isArray || function (obj) {
                return jQuery.type(obj) === "array";
            },

            // A crude way of determining if an object is a window
            isWindow: function (obj) {
                return obj && typeof obj === "object" && "setInterval" in obj;
            },

            isNaN: function (obj) {
                return obj == null || !rdigit.test(obj) || isNaN(obj);
            },

            type: function (obj) {
                return obj == null ?
			String(obj) :
			class2type[toString.call(obj)] || "object";
            },

            isPlainObject: function (obj) {
                // Must be an Object.
                // Because of IE, we also have to check the presence of the constructor property.
                // Make sure that DOM nodes and window objects don't pass through, as well
                if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return false;
                }

                // Not own constructor property must be Object
                if (obj.constructor &&
			!hasOwn.call(obj, "constructor") &&
			!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }

                // Own properties are enumerated firstly, so to speed up,
                // if last one is own, then all properties are own.

                var key;
                for (key in obj) { }

                return key === undefined || hasOwn.call(obj, key);
            },

            isEmptyObject: function (obj) {
                for (var name in obj) {
                    return false;
                }
                return true;
            },

            error: function (msg) {
                throw msg;
            },

            parseJSON: function (data) {
                if (typeof data !== "string" || !data) {
                    return null;
                }

                // Make sure leading/trailing whitespace is removed (IE can't handle it)
                data = jQuery.trim(data);

                // Attempt to parse using the native JSON parser first
                if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data);
                }

                // Make sure the incoming data is actual JSON
                // Logic borrowed from http://json.org/json2.js
                if (rvalidchars.test(data.replace(rvalidescape, "@")
			.replace(rvalidtokens, "]")
			.replace(rvalidbraces, ""))) {

                    return (new Function("return " + data))();

                }
                jQuery.error("Invalid JSON: " + data);
            },

            // Cross-browser xml parsing
            // (xml & tmp used internally)
            parseXML: function (data, xml, tmp) {

                if (window.DOMParser) { // Standard
                    tmp = new DOMParser();
                    xml = tmp.parseFromString(data, "text/xml");
                } else { // IE
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data);
                }

                tmp = xml.documentElement;

                if (!tmp || !tmp.nodeName || tmp.nodeName === "parsererror") {
                    jQuery.error("Invalid XML: " + data);
                }

                return xml;
            },

            noop: function () { },

            // Evaluates a script in a global context
            // Workarounds based on findings by Jim Driscoll
            // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
            globalEval: function (data) {
                if (data && rnotwhite.test(data)) {
                    // We use execScript on Internet Explorer
                    // We use an anonymous function so that context is window
                    // rather than jQuery in Firefox
                    (window.execScript || function (data) {
                        window["eval"].call(window, data);
                    })(data);
                }
            },

            // Converts a dashed string to camelCased string;
            // Used by both the css and data modules
            camelCase: function (string) {
                return string.replace(rdashAlpha, fcamelCase);
            },

            nodeName: function (elem, name) {
                return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
            },

            // args is for internal usage only
            each: function (object, callback, args) {
                var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction(object);

                if (args) {
                    if (isObj) {
                        for (name in object) {
                            if (callback.apply(object[name], args) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; i < length; ) {
                            if (callback.apply(object[i++], args) === false) {
                                break;
                            }
                        }
                    }

                    // A special, fast, case for the most common use of each
                } else {
                    if (isObj) {
                        for (name in object) {
                            if (callback.call(object[name], name, object[name]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; i < length; ) {
                            if (callback.call(object[i], i, object[i++]) === false) {
                                break;
                            }
                        }
                    }
                }

                return object;
            },

            // Use native String.trim function wherever possible
            trim: trim ?
		function (text) {
		    return text == null ?
				"" :
				trim.call(text);
		} :

            // Otherwise use our own trimming functionality
		function (text) {
		    return text == null ?
				"" :
				text.toString().replace(trimLeft, "").replace(trimRight, "");
		},

            // results is for internal usage only
            makeArray: function (array, results) {
                var ret = results || [];

                if (array != null) {
                    // The window, strings (and functions) also have 'length'
                    // The extra typeof function check is to prevent crashes
                    // in Safari 2 (See: #3039)
                    // Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
                    var type = jQuery.type(array);

                    if (array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow(array)) {
                        push.call(ret, array);
                    } else {
                        jQuery.merge(ret, array);
                    }
                }

                return ret;
            },

            inArray: function (elem, array) {

                if (indexOf) {
                    return indexOf.call(array, elem);
                }

                for (var i = 0, length = array.length; i < length; i++) {
                    if (array[i] === elem) {
                        return i;
                    }
                }

                return -1;
            },

            merge: function (first, second) {
                var i = first.length,
			j = 0;

                if (typeof second.length === "number") {
                    for (var l = second.length; j < l; j++) {
                        first[i++] = second[j];
                    }

                } else {
                    while (second[j] !== undefined) {
                        first[i++] = second[j++];
                    }
                }

                first.length = i;

                return first;
            },

            grep: function (elems, callback, inv) {
                var ret = [], retVal;
                inv = !!inv;

                // Go through the array, only saving the items
                // that pass the validator function
                for (var i = 0, length = elems.length; i < length; i++) {
                    retVal = !!callback(elems[i], i);
                    if (inv !== retVal) {
                        ret.push(elems[i]);
                    }
                }

                return ret;
            },

            // arg is for internal usage only
            map: function (elems, callback, arg) {
                var value, key, ret = [],
			i = 0,
			length = elems.length,
                // jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ((length > 0 && elems[0] && elems[length - 1]) || length === 0 || jQuery.isArray(elems));

                // Go through the array, translating each of the items to their
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);

                        if (value != null) {
                            ret[ret.length] = value;
                        }
                    }

                    // Go through every key on the object,
                } else {
                    for (key in elems) {
                        value = callback(elems[key], key, arg);

                        if (value != null) {
                            ret[ret.length] = value;
                        }
                    }
                }

                // Flatten any nested arrays
                return ret.concat.apply([], ret);
            },

            // A global GUID counter for objects
            guid: 1,

            // Bind a function to a context, optionally partially applying any
            // arguments.
            proxy: function (fn, context) {
                if (typeof context === "string") {
                    var tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }

                // Quick check to determine if target is callable, in the spec
                // this throws a TypeError, but we will just return undefined.
                if (!jQuery.isFunction(fn)) {
                    return undefined;
                }

                // Simulated bind
                var args = slice.call(arguments, 2),
			proxy = function () {
			    return fn.apply(context, args.concat(slice.call(arguments)));
			};

                // Set the guid of unique handler to the same of original handler, so it can be removed
                proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

                return proxy;
            },

            // Mutifunctional method to get and set values to a collection
            // The value/s can optionally be executed if it's a function
            access: function (elems, key, value, exec, fn, pass) {
                var length = elems.length;

                // Setting many attributes
                if (typeof key === "object") {
                    for (var k in key) {
                        jQuery.access(elems, k, key[k], exec, fn, value);
                    }
                    return elems;
                }

                // Setting one attribute
                if (value !== undefined) {
                    // Optionally, function values get executed if exec is true
                    exec = !pass && exec && jQuery.isFunction(value);

                    for (var i = 0; i < length; i++) {
                        fn(elems[i], key, exec ? value.call(elems[i], i, fn(elems[i], key)) : value, pass);
                    }

                    return elems;
                }

                // Getting an attribute
                return length ? fn(elems[0], key) : undefined;
            },

            now: function () {
                return (new Date()).getTime();
            },

            // Use of jQuery.browser is frowned upon.
            // More details: http://docs.jquery.com/Utilities/jQuery.browser
            uaMatch: function (ua) {
                ua = ua.toLowerCase();

                var match = rwebkit.exec(ua) ||
			ropera.exec(ua) ||
			rmsie.exec(ua) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec(ua) ||
			[];

                return { browser: match[1] || "", version: match[2] || "0" };
            },

            sub: function () {
                function jQuerySub(selector, context) {
                    return new jQuerySub.fn.init(selector, context);
                }
                jQuery.extend(true, jQuerySub, this);
                jQuerySub.superclass = this;
                jQuerySub.fn = jQuerySub.prototype = this();
                jQuerySub.fn.constructor = jQuerySub;
                jQuerySub.sub = this.sub;
                jQuerySub.fn.init = function init(selector, context) {
                    if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
                        context = jQuerySub(context);
                    }

                    return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
                };
                jQuerySub.fn.init.prototype = jQuerySub.fn;
                var rootjQuerySub = jQuerySub(document);
                return jQuerySub;
            },

            browser: {}
        });

        // Populate the class2type map
        jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

        browserMatch = jQuery.uaMatch(userAgent);
        if (browserMatch.browser) {
            jQuery.browser[browserMatch.browser] = true;
            jQuery.browser.version = browserMatch.version;
        }

        // Deprecated, use jQuery.browser.webkit instead
        if (jQuery.browser.webkit) {
            jQuery.browser.safari = true;
        }

        // IE doesn't match non-breaking spaces with \s
        if (rnotwhite.test("\xA0")) {
            trimLeft = /^[\s\xA0]+/;
            trimRight = /[\s\xA0]+$/;
        }

        // All jQuery objects should point back to these
        rootjQuery = jQuery(document);

        // Cleanup functions for the document ready method
        if (document.addEventListener) {
            DOMContentLoaded = function () {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                jQuery.ready();
            };

        } else if (document.attachEvent) {
            DOMContentLoaded = function () {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", DOMContentLoaded);
                    jQuery.ready();
                }
            };
        }

        // The DOM ready check for Internet Explorer
        function doScrollCheck() {
            if (jQuery.isReady) {
                return;
            }

            try {
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");
            } catch (e) {
                setTimeout(doScrollCheck, 1);
                return;
            }

            // and execute any waiting functions
            jQuery.ready();
        }

        return jQuery;

    })();


    var // Promise methods
	promiseMethods = "done fail isResolved isRejected promise then always pipe".split(" "),
    // Static reference to slice
	sliceDeferred = [].slice;

    jQuery.extend({
        // Create a simple deferred (one callbacks list)
        _Deferred: function () {
            var // callbacks list
			callbacks = [],
            // stored [ context , args ]
			fired,
            // to avoid firing when already doing so
			firing,
            // flag to know if the deferred has been cancelled
			cancelled,
            // the deferred itself
			deferred = {

			    // done( f1, f2, ...)
			    done: function () {
			        if (!cancelled) {
			            var args = arguments,
							i,
							length,
							elem,
							type,
							_fired;
			            if (fired) {
			                _fired = fired;
			                fired = 0;
			            }
			            for (i = 0, length = args.length; i < length; i++) {
			                elem = args[i];
			                type = jQuery.type(elem);
			                if (type === "array") {
			                    deferred.done.apply(deferred, elem);
			                } else if (type === "function") {
			                    callbacks.push(elem);
			                }
			            }
			            if (_fired) {
			                deferred.resolveWith(_fired[0], _fired[1]);
			            }
			        }
			        return this;
			    },

			    // resolve with given context and args
			    resolveWith: function (context, args) {
			        if (!cancelled && !fired && !firing) {
			            // make sure args are available (#8421)
			            args = args || [];
			            firing = 1;
			            //try {
			            while (callbacks[0]) {
			                callbacks.shift().apply(context, args);
			            }
			            //} 
			            //finally {
			            fired = [context, args];
			            firing = 0;
			            //}
			        }
			        return this;
			    },

			    // resolve with this as context and given arguments
			    resolve: function () {
			        deferred.resolveWith(this, arguments);
			        return this;
			    },

			    // Has this deferred been resolved?
			    isResolved: function () {
			        return !!(firing || fired);
			    },

			    // Cancel
			    cancel: function () {
			        cancelled = 1;
			        callbacks = [];
			        return this;
			    }
			};

            return deferred;
        },

        // Full fledged deferred (two callbacks list)
        Deferred: function (func) {
            var deferred = jQuery._Deferred(),
			failDeferred = jQuery._Deferred(),
			promise;
            // Add errorDeferred methods, then and promise
            jQuery.extend(deferred, {
                then: function (doneCallbacks, failCallbacks) {
                    deferred.done(doneCallbacks).fail(failCallbacks);
                    return this;
                },
                always: function () {
                    return deferred.done.apply(deferred, arguments).fail.apply(this, arguments);
                },
                fail: failDeferred.done,
                rejectWith: failDeferred.resolveWith,
                reject: failDeferred.resolve,
                isRejected: failDeferred.isResolved,
                pipe: function (fnDone, fnFail) {
                    return jQuery.Deferred(function (newDefer) {
                        jQuery.each({
                            done: [fnDone, "resolve"],
                            fail: [fnFail, "reject"]
                        }, function (handler, data) {
                            var fn = data[0],
							action = data[1],
							returned;
                            if (jQuery.isFunction(fn)) {
                                deferred[handler](function () {
                                    returned = fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().then(newDefer.resolve, newDefer.reject);
                                    } else {
                                        newDefer[action](returned);
                                    }
                                });
                            } else {
                                deferred[handler](newDefer[action]);
                            }
                        });
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function (obj) {
                    if (obj == null) {
                        if (promise) {
                            return promise;
                        }
                        promise = obj = {};
                    }
                    var i = promiseMethods.length;
                    while (i--) {
                        obj[promiseMethods[i]] = deferred[promiseMethods[i]];
                    }
                    return obj;
                }
            });
            // Make sure only one callback list will be used
            deferred.done(failDeferred.cancel).fail(deferred.cancel);
            // Unexpose cancel
            delete deferred.cancel;
            // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },

        // Deferred helper
        when: function (firstParam) {
            var args = arguments,
			i = 0,
			length = args.length,
			count = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction(firstParam.promise) ?
				firstParam :
				jQuery.Deferred();
            function resolveFunc(i) {
                return function (value) {
                    args[i] = arguments.length > 1 ? sliceDeferred.call(arguments, 0) : value;
                    if (!(--count)) {
                        // Strange bug in FF4:
                        // Values changed onto the arguments object sometimes end up as undefined values
                        // outside the $.when method. Cloning the object into a fresh array solves the issue
                        deferred.resolveWith(deferred, sliceDeferred.call(args, 0));
                    }
                };
            }
            if (length > 1) {
                for (; i < length; i++) {
                    if (args[i] && jQuery.isFunction(args[i].promise)) {
                        args[i].promise().then(resolveFunc(i), deferred.reject);
                    } else {
                        --count;
                    }
                }
                if (!count) {
                    deferred.resolveWith(deferred, args);
                }
            } else if (deferred !== firstParam) {
                deferred.resolveWith(deferred, length ? [firstParam] : []);
            }
            return deferred.promise();
        }
    });



    jQuery.support = (function () {

        var div = document.createElement("div"),
		documentElement = document.documentElement,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		support,
		fragment,
		body,
		testElementParent,
		testElement,
		testElementStyle,
		tds,
		events,
		eventName,
		i,
		isSupported;

        // Preliminary tests
        div.setAttribute("className", "t");
        div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

        all = div.getElementsByTagName("*");
        a = div.getElementsByTagName("a")[0];

        // Can't get basic test support
        if (!all || !all.length || !a) {
            return {};
        }

        // First batch of supports tests
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];

        support = {
            // IE strips leading whitespace when .innerHTML is used
            leadingWhitespace: (div.firstChild.nodeType === 3),

            // Make sure that tbody elements aren't automatically inserted
            // IE will insert them into empty tables
            tbody: !div.getElementsByTagName("tbody").length,

            // Make sure that link elements get serialized correctly by innerHTML
            // This requires a wrapper element in IE
            htmlSerialize: !!div.getElementsByTagName("link").length,

            // Get the style information from getAttribute
            // (IE uses .cssText instead)
            style: /top/.test(a.getAttribute("style")),

            // Make sure that URLs aren't manipulated
            // (IE normalizes it by default)
            hrefNormalized: (a.getAttribute("href") === "/a"),

            // Make sure that element opacity exists
            // (IE uses filter instead)
            // Use a regex to work around a WebKit issue. See #5145
            opacity: /^0.55$/.test(a.style.opacity),

            // Verify style float existence
            // (IE uses styleFloat instead of cssFloat)
            cssFloat: !!a.style.cssFloat,

            // Make sure that if no value is specified for a checkbox
            // that it defaults to "on".
            // (WebKit defaults to "" instead)
            checkOn: (input.value === "on"),

            // Make sure that a selected-by-default option has a working selected property.
            // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
            optSelected: opt.selected,

            // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
            getSetAttribute: div.className !== "t",

            // Will be defined later
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };

        // Make sure checked status is properly cloned
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;

        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        select.disabled = true;
        support.optDisabled = !opt.disabled;

        // Test to see if it's possible to delete an expando from an element
        // Fails in Internet Explorer
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }

        if (!div.addEventListener && div.attachEvent && div.fireEvent) {
            div.attachEvent("onclick", function () {
                // Cloning a node shouldn't copy over any
                // bound event handlers (IE does this)
                support.noCloneEvent = false;
            });
            div.cloneNode(true).fireEvent("onclick");
        }

        // Check if a radio maintains it's value
        // after being appended to the DOM
        input = document.createElement("input");
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";

        input.setAttribute("checked", "checked");
        div.appendChild(input);
        fragment = document.createDocumentFragment();
        fragment.appendChild(div.firstChild);

        // WebKit doesn't clone checked state correctly in fragments
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

        div.innerHTML = "";

        // Figure out if the W3C box model works as expected
        div.style.width = div.style.paddingLeft = "1px";

        body = document.getElementsByTagName("body")[0];
        // We use our own, invisible, body unless the body is already present
        // in which case we use a div (#9239)
        testElement = document.createElement(body ? "div" : "body");
        testElementStyle = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0
        };
        if (body) {
            jQuery.extend(testElementStyle, {
                position: "absolute",
                left: -1000,
                top: -1000
            });
        }
        for (i in testElementStyle) {
            testElement.style[i] = testElementStyle[i];
        }
        testElement.appendChild(div);
        testElementParent = body || documentElement;
        testElementParent.insertBefore(testElement, testElementParent.firstChild);

        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        support.appendChecked = input.checked;

        support.boxModel = div.offsetWidth === 2;

        if ("zoom" in div.style) {
            // Check if natively block-level elements act like inline-block
            // elements when setting their display to 'inline' and giving
            // them layout
            // (IE < 8 does this)
            div.style.display = "inline";
            div.style.zoom = 1;
            support.inlineBlockNeedsLayout = (div.offsetWidth === 2);

            // Check if elements with layout shrink-wrap their children
            // (IE 6 does this)
            div.style.display = "";
            div.innerHTML = "<div style='width:4px;'></div>";
            support.shrinkWrapBlocks = (div.offsetWidth !== 2);
        }

        div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        tds = div.getElementsByTagName("td");

        // Check if table cells still have offsetWidth/Height when they are set
        // to display:none and there are still other visible table cells in a
        // table row; if so, offsetWidth/Height are not reliable for use when
        // determining if an element has been hidden directly using
        // display:none (it is still safe to use offsets if a parent element is
        // hidden; don safety goggles and see bug #4512 for more information).
        // (only IE 8 fails this test)
        isSupported = (tds[0].offsetHeight === 0);

        tds[0].style.display = "";
        tds[1].style.display = "none";

        // Check if empty table cells still have offsetWidth/Height
        // (IE < 8 fail this test)
        support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);
        div.innerHTML = "";

        // Check if div with explicit width and no margin-right incorrectly
        // gets computed margin-right based on width of container. For more
        // info see bug #3333
        // Fails in WebKit before Feb 2011 nightlies
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        if (document.defaultView && document.defaultView.getComputedStyle) {
            marginDiv = document.createElement("div");
            marginDiv.style.width = "0";
            marginDiv.style.marginRight = "0";
            div.appendChild(marginDiv);
            support.reliableMarginRight =
			(parseInt((document.defaultView.getComputedStyle(marginDiv, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0;
        }

        // Remove the body element we added
        testElement.innerHTML = "";
        testElementParent.removeChild(testElement);

        // Technique from Juriy Zaytsev
        // http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
        // We only care about the case where non-standard event systems
        // are used, namely in IE. Short-circuiting here helps us to
        // avoid an eval call (in setAttribute) which can cause CSP
        // to go haywire. See: https://developer.mozilla.org/en/Security/CSP
        if (div.attachEvent) {
            for (i in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                eventName = "on" + i;
                isSupported = (eventName in div);
                if (!isSupported) {
                    div.setAttribute(eventName, "return;");
                    isSupported = (typeof div[eventName] === "function");
                }
                support[i + "Bubbles"] = isSupported;
            }
        }

        // Null connected elements to avoid leaks in IE
        testElement = fragment = select = opt = body = marginDiv = div = input = null;

        return support;
    })();

    // Keep track of boxModel
    jQuery.boxModel = jQuery.support.boxModel;




    var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([a-z])([A-Z])/g;

    jQuery.extend({
        cache: {},

        // Please use with caution
        uuid: 0,

        // Unique for each copy of jQuery on the page
        // Non-digits removed to match rinlinejQuery
        expando: "jQuery" + (jQuery.fn.jquery + Math.random()).replace(/\D/g, ""),

        // The following elements throw uncatchable exceptions if you
        // attempt to add expando properties to them.
        noData: {
            "embed": true,
            // Ban all objects except for Flash (which handle expandos)
            "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            "applet": true
        },

        hasData: function (elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];

            return !!elem && !isEmptyDataObject(elem);
        },

        data: function (elem, name, data, pvt /* Internal Use Only */) {
            if (!jQuery.acceptData(elem)) {
                return;
            }

            var internalKey = jQuery.expando, getByName = typeof name === "string", thisCache,

            // We have to handle DOM nodes and JS objects differently because IE6-7
            // can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

            // Only DOM nodes need the global jQuery cache; JS object data is
            // attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

            // Only defining an ID for JS objects if its cache already exists allows
            // the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[jQuery.expando] : elem[jQuery.expando] && jQuery.expando;

            // Avoid doing any more work than we need to when trying to get data on an
            // object that has no data at all
            if ((!id || (pvt && id && !cache[id][internalKey])) && getByName && data === undefined) {
                return;
            }

            if (!id) {
                // Only DOM nodes need a new unique ID for each element since their data
                // ends up in the global cache
                if (isNode) {
                    elem[jQuery.expando] = id = ++jQuery.uuid;
                } else {
                    id = jQuery.expando;
                }
            }

            if (!cache[id]) {
                cache[id] = {};

                // TODO: This is a hack for 1.5 ONLY. Avoids exposing jQuery
                // metadata on plain JS objects when the object is serialized using
                // JSON.stringify
                if (!isNode) {
                    cache[id].toJSON = jQuery.noop;
                }
            }

            // An object can be passed to jQuery.data instead of a key/value pair; this gets
            // shallow copied over onto the existing cache
            if (typeof name === "object" || typeof name === "function") {
                if (pvt) {
                    cache[id][internalKey] = jQuery.extend(cache[id][internalKey], name);
                } else {
                    cache[id] = jQuery.extend(cache[id], name);
                }
            }

            thisCache = cache[id];

            // Internal jQuery data is stored in a separate object inside the object's data
            // cache in order to avoid key collisions between internal data and user-defined
            // data
            if (pvt) {
                if (!thisCache[internalKey]) {
                    thisCache[internalKey] = {};
                }

                thisCache = thisCache[internalKey];
            }

            if (data !== undefined) {
                thisCache[jQuery.camelCase(name)] = data;
            }

            // TODO: This is a hack for 1.5 ONLY. It will be removed in 1.6. Users should
            // not attempt to inspect the internal events object using jQuery.data, as this
            // internal data object is undocumented and subject to change.
            if (name === "events" && !thisCache[name]) {
                return thisCache[internalKey] && thisCache[internalKey].events;
            }

            return getByName ?
            // Check for both converted-to-camel and non-converted data property names
			thisCache[jQuery.camelCase(name)] || thisCache[name] :
			thisCache;
        },

        removeData: function (elem, name, pvt /* Internal Use Only */) {
            if (!jQuery.acceptData(elem)) {
                return;
            }

            var internalKey = jQuery.expando, isNode = elem.nodeType,

            // See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

            // See jQuery.data for more information
			id = isNode ? elem[jQuery.expando] : jQuery.expando;

            // If there is already no cache entry for this object, there is no
            // purpose in continuing
            if (!cache[id]) {
                return;
            }

            if (name) {
                var thisCache = pvt ? cache[id][internalKey] : cache[id];

                if (thisCache) {
                    delete thisCache[name];

                    // If there is no data left in the cache, we want to continue
                    // and let the cache object itself get destroyed
                    if (!isEmptyDataObject(thisCache)) {
                        return;
                    }
                }
            }

            // See jQuery.data for more information
            if (pvt) {
                delete cache[id][internalKey];

                // Don't destroy the parent cache unless the internal data object
                // had been the only thing left in it
                if (!isEmptyDataObject(cache[id])) {
                    return;
                }
            }

            var internalCache = cache[id][internalKey];

            // Browsers that fail expando deletion also refuse to delete expandos on
            // the window, but it will allow it on all other JS objects; other browsers
            // don't care
            if (jQuery.support.deleteExpando || cache != window) {
                delete cache[id];
            } else {
                cache[id] = null;
            }

            // We destroyed the entire user cache at once because it's faster than
            // iterating through each key, but we need to continue to persist internal
            // data if it existed
            if (internalCache) {
                cache[id] = {};
                // TODO: This is a hack for 1.5 ONLY. Avoids exposing jQuery
                // metadata on plain JS objects when the object is serialized using
                // JSON.stringify
                if (!isNode) {
                    cache[id].toJSON = jQuery.noop;
                }

                cache[id][internalKey] = internalCache;

                // Otherwise, we need to eliminate the expando on the node to avoid
                // false lookups in the cache for entries that no longer exist
            } else if (isNode) {
                // IE does not allow us to delete expando properties from nodes,
                // nor does it have a removeAttribute function on Document nodes;
                // we must handle all of these cases
                if (jQuery.support.deleteExpando) {
                    delete elem[jQuery.expando];
                } else if (elem.removeAttribute) {
                    elem.removeAttribute(jQuery.expando);
                } else {
                    elem[jQuery.expando] = null;
                }
            }
        },

        // For internal use only.
        _data: function (elem, name, data) {
            return jQuery.data(elem, name, data, true);
        },

        // A method for determining if a DOM node can handle the data expando
        acceptData: function (elem) {
            if (elem.nodeName) {
                var match = jQuery.noData[elem.nodeName.toLowerCase()];

                if (match) {
                    return !(match === true || elem.getAttribute("classid") !== match);
                }
            }

            return true;
        }
    });

    jQuery.fn.extend({
        data: function (key, value) {
            var data = null;

            if (typeof key === "undefined") {
                if (this.length) {
                    data = jQuery.data(this[0]);

                    if (this[0].nodeType === 1) {
                        var attr = this[0].attributes, name;
                        for (var i = 0, l = attr.length; i < l; i++) {
                            name = attr[i].name;

                            if (name.indexOf("data-") === 0) {
                                name = jQuery.camelCase(name.substring(5));

                                dataAttr(this[0], name, data[name]);
                            }
                        }
                    }
                }

                return data;

            } else if (typeof key === "object") {
                return this.each(function () {
                    jQuery.data(this, key);
                });
            }

            var parts = key.split(".");
            parts[1] = parts[1] ? "." + parts[1] : "";

            if (value === undefined) {
                data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

                // Try to fetch any internally stored data first
                if (data === undefined && this.length) {
                    data = jQuery.data(this[0], key);
                    data = dataAttr(this[0], key, data);
                }

                return data === undefined && parts[1] ?
				this.data(parts[0]) :
				data;

            } else {
                return this.each(function () {
                    var $this = jQuery(this),
					args = [parts[0], value];

                    $this.triggerHandler("setData" + parts[1] + "!", args);
                    jQuery.data(this, key, value);
                    $this.triggerHandler("changeData" + parts[1] + "!", args);
                });
            }
        },

        removeData: function (key) {
            return this.each(function () {
                jQuery.removeData(this, key);
            });
        }
    });

    function dataAttr(elem, key, data) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "$1-$2").toLowerCase();

            data = elem.getAttribute(name);

            if (typeof data === "string") {
                try {
                    data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				!jQuery.isNaN(data) ? parseFloat(data) :
					rbrace.test(data) ? jQuery.parseJSON(data) :
					data;
                } catch (e) { }

                // Make sure we set the data so it isn't changed later
                jQuery.data(elem, key, data);

            } else {
                data = undefined;
            }
        }

        return data;
    }

    // TODO: This is a hack for 1.5 ONLY to allow objects with a single toJSON
    // property to be considered empty objects; this property always exists in
    // order to make sure JSON.stringify does not expose internal metadata
    function isEmptyDataObject(obj) {
        for (var name in obj) {
            if (name !== "toJSON") {
                return false;
            }
        }

        return true;
    }




    function handleQueueMarkDefer(elem, type, src) {
        var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery.data(elem, deferDataKey, undefined, true);
        if (defer &&
		(src === "queue" || !jQuery.data(elem, queueDataKey, undefined, true)) &&
		(src === "mark" || !jQuery.data(elem, markDataKey, undefined, true))) {
            // Give room for hard-coded callbacks to fire first
            // and eventually mark/queue something else on the element
            setTimeout(function () {
                if (!jQuery.data(elem, queueDataKey, undefined, true) &&
				!jQuery.data(elem, markDataKey, undefined, true)) {
                    jQuery.removeData(elem, deferDataKey, true);
                    defer.resolve();
                }
            }, 0);
        }
    }

    jQuery.extend({

        _mark: function (elem, type) {
            if (elem) {
                type = (type || "fx") + "mark";
                jQuery.data(elem, type, (jQuery.data(elem, type, undefined, true) || 0) + 1, true);
            }
        },

        _unmark: function (force, elem, type) {
            if (force !== true) {
                type = elem;
                elem = force;
                force = false;
            }
            if (elem) {
                type = type || "fx";
                var key = type + "mark",
				count = force ? 0 : ((jQuery.data(elem, key, undefined, true) || 1) - 1);
                if (count) {
                    jQuery.data(elem, key, count, true);
                } else {
                    jQuery.removeData(elem, key, true);
                    handleQueueMarkDefer(elem, type, "mark");
                }
            }
        },

        queue: function (elem, type, data) {
            if (elem) {
                type = (type || "fx") + "queue";
                var q = jQuery.data(elem, type, undefined, true);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!q || jQuery.isArray(data)) {
                        q = jQuery.data(elem, type, jQuery.makeArray(data), true);
                    } else {
                        q.push(data);
                    }
                }
                return q || [];
            }
        },

        dequeue: function (elem, type) {
            type = type || "fx";

            var queue = jQuery.queue(elem, type),
			fn = queue.shift(),
			defer;

            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
            }

            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                fn.call(elem, function () {
                    jQuery.dequeue(elem, type);
                });
            }

            if (!queue.length) {
                jQuery.removeData(elem, type + "queue", true);
                handleQueueMarkDefer(elem, type, "queue");
            }
        }
    });

    jQuery.fn.extend({
        queue: function (type, data) {
            if (typeof type !== "string") {
                data = type;
                type = "fx";
            }

            if (data === undefined) {
                return jQuery.queue(this[0], type);
            }
            return this.each(function () {
                var queue = jQuery.queue(this, type, data);

                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function (type) {
            return this.each(function () {
                jQuery.dequeue(this, type);
            });
        },
        // Based off of the plugin by Clint Helfers, with permission.
        // http://blindsignals.com/index.php/2009/07/jquery-delay/
        delay: function (time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";

            return this.queue(type, function () {
                var elem = this;
                setTimeout(function () {
                    jQuery.dequeue(elem, type);
                }, time);
            });
        },
        clearQueue: function (type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function (type, object) {
            if (typeof type !== "string") {
                object = type;
                type = undefined;
            }
            type = type || "fx";
            var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
            function resolve() {
                if (!(--count)) {
                    defer.resolveWith(elements, [elements]);
                }
            }
            while (i--) {
                if ((tmp = jQuery.data(elements[i], deferDataKey, undefined, true) ||
					(jQuery.data(elements[i], queueDataKey, undefined, true) ||
						jQuery.data(elements[i], markDataKey, undefined, true)) &&
					jQuery.data(elements[i], deferDataKey, jQuery._Deferred(), true))) {
                    count++;
                    tmp.done(resolve);
                }
            }
            resolve();
            return defer.promise();
        }
    });




    var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	rinvalidChar = /\:|^on/,
	formHook, boolHook;

    jQuery.fn.extend({
        attr: function (name, value) {
            return jQuery.access(this, name, value, true, jQuery.attr);
        },

        removeAttr: function (name) {
            return this.each(function () {
                jQuery.removeAttr(this, name);
            });
        },

        prop: function (name, value) {
            return jQuery.access(this, name, value, true, jQuery.prop);
        },

        removeProp: function (name) {
            name = jQuery.propFix[name] || name;
            return this.each(function () {
                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) { }
            });
        },

        addClass: function (value) {
            var classNames, i, l, elem,
			setClass, c, cl;

            if (jQuery.isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }

            if (value && typeof value === "string") {
                classNames = value.split(rspace);

                for (i = 0, l = this.length; i < l; i++) {
                    elem = this[i];

                    if (elem.nodeType === 1) {
                        if (!elem.className && classNames.length === 1) {
                            elem.className = value;

                        } else {
                            setClass = " " + elem.className + " ";

                            for (c = 0, cl = classNames.length; c < cl; c++) {
                                if (! ~setClass.indexOf(" " + classNames[c] + " ")) {
                                    setClass += classNames[c] + " ";
                                }
                            }
                            elem.className = jQuery.trim(setClass);
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function (value) {
            var classNames, i, l, elem, className, c, cl;

            if (jQuery.isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }

            if ((value && typeof value === "string") || value === undefined) {
                classNames = (value || "").split(rspace);

                for (i = 0, l = this.length; i < l; i++) {
                    elem = this[i];

                    if (elem.nodeType === 1 && elem.className) {
                        if (value) {
                            className = (" " + elem.className + " ").replace(rclass, " ");
                            for (c = 0, cl = classNames.length; c < cl; c++) {
                                className = className.replace(" " + classNames[c] + " ", " ");
                            }
                            elem.className = jQuery.trim(className);

                        } else {
                            elem.className = "";
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function (value, stateVal) {
            var type = typeof value,
			isBool = typeof stateVal === "boolean";

            if (jQuery.isFunction(value)) {
                return this.each(function (i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }

            return this.each(function () {
                if (type === "string") {
                    // toggle individual class names
                    var className,
					i = 0,
					self = jQuery(this),
					state = stateVal,
					classNames = value.split(rspace);

                    while ((className = classNames[i++])) {
                        // check each className given, space seperated list
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? "addClass" : "removeClass"](className);
                    }

                } else if (type === "undefined" || type === "boolean") {
                    if (this.className) {
                        // store className if set
                        jQuery._data(this, "__className__", this.className);
                    }

                    // toggle whole className
                    this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                }
            });
        },

        hasClass: function (selector) {
            var className = " " + selector + " ";
            for (var i = 0, l = this.length; i < l; i++) {
                if ((" " + this[i].className + " ").replace(rclass, " ").indexOf(className) > -1) {
                    return true;
                }
            }

            return false;
        },

        val: function (value) {
            var hooks, ret,
			elem = this[0];

            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.nodeName.toLowerCase()] || jQuery.valHooks[elem.type];

                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }

                    ret = elem.value;

                    return typeof ret === "string" ?
                    // handle most common string cases
					ret.replace(rreturn, "") :
                    // handle cases where value is null/undef or number
					ret == null ? "" : ret;
                }

                return undefined;
            }

            var isFunction = jQuery.isFunction(value);

            return this.each(function (i) {
                var self = jQuery(this), val;

                if (this.nodeType !== 1) {
                    return;
                }

                if (isFunction) {
                    val = value.call(this, i, self.val());
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[this.nodeName.toLowerCase()] || jQuery.valHooks[this.type];

                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function (elem) {
                    // attributes.value is undefined in Blackberry 4.7 but
                    // uses .value. See #6932
                    var val = elem.attributes.value;
                    return !val || val.specified ? elem.value : elem.text;
                }
            },
            select: {
                get: function (elem) {
                    var value,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

                    // Nothing was selected
                    if (index < 0) {
                        return null;
                    }

                    // Loop through all the selected options
                    for (var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++) {
                        var option = options[i];

                        // Don't return options that are disabled or in a disabled optgroup
                        if (option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

                            // Get the specific value for the option
                            value = jQuery(option).val();

                            // We don't need an array for one selects
                            if (one) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }

                    // Fixes Bug #2551 -- select.val() broken in IE after form.reset()
                    if (one && !values.length && options.length) {
                        return jQuery(options[index]).val();
                    }

                    return values;
                },

                set: function (elem, value) {
                    var values = jQuery.makeArray(value);

                    jQuery(elem).find("option").each(function () {
                        this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
                    });

                    if (!values.length) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },

        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },

        attrFix: {
            // Always normalize to ensure hook usage
            tabindex: "tabIndex"
        },

        attr: function (elem, name, value, pass) {
            var nType = elem.nodeType;

            // don't get/set attributes on text, comment and attribute nodes
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return undefined;
            }

            if (pass && name in jQuery.attrFn) {
                return jQuery(elem)[name](value);
            }

            // Fallback to prop when attributes are not supported
            if (!("getAttribute" in elem)) {
                return jQuery.prop(elem, name, value);
            }

            var ret, hooks,
			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

            // Normalize the name if needed
            if (notxml) {
                name = jQuery.attrFix[name] || name;

                hooks = jQuery.attrHooks[name];

                if (!hooks) {
                    // Use boolHook for boolean attributes
                    if (rboolean.test(name)) {

                        hooks = boolHook;

                        // Use formHook for forms and if the name contains certain characters
                    } else if (formHook && name !== "className" &&
					(jQuery.nodeName(elem, "form") || rinvalidChar.test(name))) {

                        hooks = formHook;
                    }
                }
            }

            if (value !== undefined) {

                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return undefined;

                } else if (hooks && "set" in hooks && notxml && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;

                } else {
                    elem.setAttribute(name, "" + value);
                    return value;
                }

            } else if (hooks && "get" in hooks && notxml && (ret = hooks.get(elem, name)) !== null) {
                return ret;

            } else {

                ret = elem.getAttribute(name);

                // Non-existent attributes return null, we normalize to undefined
                return ret === null ?
				undefined :
				ret;
            }
        },

        removeAttr: function (elem, name) {
            var propName;
            if (elem.nodeType === 1) {
                name = jQuery.attrFix[name] || name;

                if (jQuery.support.getSetAttribute) {
                    // Use removeAttribute in browsers that support it
                    elem.removeAttribute(name);
                } else {
                    jQuery.attr(elem, name, "");
                    elem.removeAttributeNode(elem.getAttributeNode(name));
                }

                // Set corresponding property to false for boolean attributes
                if (rboolean.test(name) && (propName = jQuery.propFix[name] || name) in elem) {
                    elem[propName] = false;
                }
            }
        },

        attrHooks: {
            type: {
                set: function (elem, value) {
                    // We can't allow the type property to be changed (since it causes problems in IE)
                    if (rtype.test(elem.nodeName) && elem.parentNode) {
                        jQuery.error("type property can't be changed");
                    } else if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to it's default in case type is set after value
                        // This is for element creation
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            },
            tabIndex: {
                get: function (elem) {
                    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    var attributeNode = elem.getAttributeNode("tabIndex");

                    return attributeNode && attributeNode.specified ?
					parseInt(attributeNode.value, 10) :
					rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ?
						0 :
						undefined;
                }
            },
            // Use the value property for back compat
            // Use the formHook for button elements in IE6/7 (#1954)
            value: {
                get: function (elem, name) {
                    if (formHook && jQuery.nodeName(elem, "button")) {
                        return formHook.get(elem, name);
                    }
                    return name in elem ?
					elem.value :
					null;
                },
                set: function (elem, value, name) {
                    if (formHook && jQuery.nodeName(elem, "button")) {
                        return formHook.set(elem, value, name);
                    }
                    // Does not return so that setAttribute is also used
                    elem.value = value;
                }
            }
        },

        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },

        prop: function (elem, name, value) {
            var nType = elem.nodeType;

            // don't get/set properties on text, comment and attribute nodes
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return undefined;
            }

            var ret, hooks,
			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

            if (notxml) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }

            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;

                } else {
                    return (elem[name] = value);
                }

            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== undefined) {
                    return ret;

                } else {
                    return elem[name];
                }
            }
        },

        propHooks: {}
    });

    // Hook for boolean attributes
    boolHook = {
        get: function (elem, name) {
            // Align boolean attributes with corresponding properties
            return jQuery.prop(elem, name) ?
			name.toLowerCase() :
			undefined;
        },
        set: function (elem, value, name) {
            var propName;
            if (value === false) {
                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                // value is true since we know at this point it's type boolean and not false
                // Set boolean attributes to the same name and set the DOM property
                propName = jQuery.propFix[name] || name;
                if (propName in elem) {
                    // Only set the IDL specifically if it already exists on the element
                    elem[propName] = true;
                }

                elem.setAttribute(name, name.toLowerCase());
            }
            return name;
        }
    };

    // IE6/7 do not support getting/setting some attributes with get/setAttribute
    if (!jQuery.support.getSetAttribute) {

        // propFix is more comprehensive and contains all fixes
        jQuery.attrFix = jQuery.propFix;

        // Use this for any attribute on a form in IE6/7
        formHook = jQuery.attrHooks.name = jQuery.attrHooks.title = jQuery.valHooks.button = {
            get: function (elem, name) {
                var ret;
                ret = elem.getAttributeNode(name);
                // Return undefined if nodeValue is empty string
                return ret && ret.nodeValue !== "" ?
				ret.nodeValue :
				undefined;
            },
            set: function (elem, value, name) {
                // Check form objects in IE (multiple bugs related)
                // Only use nodeValue if the attribute node exists on the form
                var ret = elem.getAttributeNode(name);
                if (ret) {
                    ret.nodeValue = value;
                    return value;
                }
            }
        };

        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        jQuery.each(["width", "height"], function (i, name) {
            jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                set: function (elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            });
        });
    }


    // Some attributes require a special call on IE
    if (!jQuery.support.hrefNormalized) {
        jQuery.each(["href", "src", "width", "height"], function (i, name) {
            jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                get: function (elem) {
                    var ret = elem.getAttribute(name, 2);
                    return ret === null ? undefined : ret;
                }
            });
        });
    }

    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function (elem) {
                // Return undefined in the case of empty string
                // Normalize to lowercase since IE uppercases css property names
                return elem.style.cssText.toLowerCase() || undefined;
            },
            set: function (elem, value) {
                return (elem.style.cssText = "" + value);
            }
        };
    }

    // Safari mis-reports the default selected property of an option
    // Accessing the parent's selectedIndex property fixes it
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
            get: function (elem) {
                var parent = elem.parentNode;

                if (parent) {
                    parent.selectedIndex;

                    // Make sure that it also works with optgroups, see #5701
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        });
    }

    // Radios and checkboxes getter/setter
    if (!jQuery.support.checkOn) {
        jQuery.each(["radio", "checkbox"], function () {
            jQuery.valHooks[this] = {
                get: function (elem) {
                    // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                }
            };
        });
    }
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
            set: function (elem, value) {
                if (jQuery.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
                }
            }
        });
    });




    var rnamespaces = /\.(.*)$/,
	rformElems = /^(?:textarea|input|select)$/i,
	rperiod = /\./g,
	rspaces = / /g,
	rescape = /[^\w\s.|`]/g,
	fcleanup = function (nm) {
	    return nm.replace(rescape, "\\$&");
	};

    /*
    * A number of helper functions used for managing events.
    * Many of the ideas behind this code originated from
    * Dean Edwards' addEvent library.
    */
    jQuery.event = {

        // Bind an event to an element
        // Original by Dean Edwards
        add: function (elem, types, handler, data) {
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            if (handler === false) {
                handler = returnFalse;
            } else if (!handler) {
                // Fixes bug #7229. Fix recommended by jdalton
                return;
            }

            var handleObjIn, handleObj;

            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
            }

            // Make sure that the function being executed has a unique ID
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure
            var elemData = jQuery._data(elem);

            // If no elemData is found then we must be trying to bind to one of the
            // banned noData elements
            if (!elemData) {
                return;
            }

            var events = elemData.events,
			eventHandle = elemData.handle;

            if (!events) {
                elemData.events = events = {};
            }

            if (!eventHandle) {
                elemData.handle = eventHandle = function (e) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.handle.apply(eventHandle.elem, arguments) :
					undefined;
                };
            }

            // Add elem as a property of the handle function
            // This is to prevent a memory leak with non-native events in IE.
            eventHandle.elem = elem;

            // Handle multiple events separated by a space
            // jQuery(...).bind("mouseover mouseout", fn);
            types = types.split(" ");

            var type, i = 0, namespaces;

            while ((type = types[i++])) {
                handleObj = handleObjIn ?
				jQuery.extend({}, handleObjIn) :
				{ handler: handler, data: data };

                // Namespaced event handlers
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    handleObj.namespace = namespaces.slice(0).sort().join(".");

                } else {
                    namespaces = [];
                    handleObj.namespace = "";
                }

                handleObj.type = type;
                if (!handleObj.guid) {
                    handleObj.guid = handler.guid;
                }

                // Get the current list of functions bound to this event
                var handlers = events[type],
				special = jQuery.event.special[type] || {};

                // Init the event handler queue
                if (!handlers) {
                    handlers = events[type] = [];

                    // Check for a special event handler
                    // Only use addEventListener/attachEvent if the special
                    // events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        // Bind the global event handler to the element
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);

                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }

                if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add the function to the element's handler list
                handlers.push(handleObj);

                // Keep track of which events have been used, for event optimization
                jQuery.event.global[type] = true;
            }

            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },

        global: {},

        // Detach an event or set of events from an element
        remove: function (elem, types, handler, pos) {
            // don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            if (handler === false) {
                handler = returnFalse;
            }

            var ret, type, fn, j, i = 0, all, namespaces, namespace, special, eventType, handleObj, origType,
			elemData = jQuery.hasData(elem) && jQuery._data(elem),
			events = elemData && elemData.events;

            if (!elemData || !events) {
                return;
            }

            // types is actually an event object here
            if (types && types.type) {
                handler = types.handler;
                types = types.type;
            }

            // Unbind all events for the element
            if (!types || typeof types === "string" && types.charAt(0) === ".") {
                types = types || "";

                for (type in events) {
                    jQuery.event.remove(elem, type + types);
                }

                return;
            }

            // Handle multiple events separated by a space
            // jQuery(...).unbind("mouseover mouseout", fn);
            types = types.split(" ");

            while ((type = types[i++])) {
                origType = type;
                handleObj = null;
                all = type.indexOf(".") < 0;
                namespaces = [];

                if (!all) {
                    // Namespaced event handlers
                    namespaces = type.split(".");
                    type = namespaces.shift();

                    namespace = new RegExp("(^|\\.)" +
					jQuery.map(namespaces.slice(0).sort(), fcleanup).join("\\.(?:.*\\.)?") + "(\\.|$)");
                }

                eventType = events[type];

                if (!eventType) {
                    continue;
                }

                if (!handler) {
                    for (j = 0; j < eventType.length; j++) {
                        handleObj = eventType[j];

                        if (all || namespace.test(handleObj.namespace)) {
                            jQuery.event.remove(elem, origType, handleObj.handler, j);
                            eventType.splice(j--, 1);
                        }
                    }

                    continue;
                }

                special = jQuery.event.special[type] || {};

                for (j = pos || 0; j < eventType.length; j++) {
                    handleObj = eventType[j];

                    if (handler.guid === handleObj.guid) {
                        // remove the given handler for the given type
                        if (all || namespace.test(handleObj.namespace)) {
                            if (pos == null) {
                                eventType.splice(j--, 1);
                            }

                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }

                        if (pos != null) {
                            break;
                        }
                    }
                }

                // remove generic event handler if no more handlers exist
                if (eventType.length === 0 || pos != null && eventType.length === 1) {
                    if (!special.teardown || special.teardown.call(elem, namespaces) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    ret = null;
                    delete events[type];
                }
            }

            // Remove the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                var handle = elemData.handle;
                if (handle) {
                    handle.elem = null;
                }

                delete elemData.events;
                delete elemData.handle;

                if (jQuery.isEmptyObject(elemData)) {
                    jQuery.removeData(elem, undefined, true);
                }
            }
        },

        // Events that are safe to short-circuit if no handlers are attached.
        // Native DOM events should not be added, they may have inline handlers.
        customEvent: {
            "getData": true,
            "setData": true,
            "changeData": true
        },

        trigger: function (event, data, elem, onlyHandlers) {
            // Event object or event type
            var type = event.type || event,
			namespaces = [],
			exclusive;

            if (type.indexOf("!") >= 0) {
                // Exclusive events trigger only for the exact event (no namespaces)
                type = type.slice(0, -1);
                exclusive = true;
            }

            if (type.indexOf(".") >= 0) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }

            if ((!elem || jQuery.event.customEvent[type]) && !jQuery.event.global[type]) {
                // No jQuery handlers for this event type, and it can't have inline handlers
                return;
            }

            // Caller can pass in an Event, Object, or just an event type string
            event = typeof event === "object" ?
            // jQuery.Event object
			event[jQuery.expando] ? event :
            // Object literal
			new jQuery.Event(type, event) :
            // Just the event type (string)
			new jQuery.Event(type);

            event.type = type;
            event.exclusive = exclusive;
            event.namespace = namespaces.join(".");
            event.namespace_re = new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)");

            // triggerHandler() and global events don't bubble or run the default action
            if (onlyHandlers || !elem) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Handle a global trigger
            if (!elem) {
                // TODO: Stop taunting the data cache; remove global events and always attach to document
                jQuery.each(jQuery.cache, function () {
                    // internalKey variable is just used to make it easier to find
                    // and potentially change this stuff later; currently it just
                    // points to jQuery.expando
                    var internalKey = jQuery.expando,
					internalCache = this[internalKey];
                    if (internalCache && internalCache.events && internalCache.events[type]) {
                        jQuery.event.trigger(event, data, internalCache.handle.elem);
                    }
                });
                return;
            }

            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            // Clean up the event in case it is being reused
            event.result = undefined;
            event.target = elem;

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data != null ? jQuery.makeArray(data) : [];
            data.unshift(event);

            var cur = elem,
            // IE doesn't like method names with a colon (#3533, #8272)
			ontype = type.indexOf(":") < 0 ? "on" + type : "";

            // Fire event on the current element, then bubble up the DOM tree
            do {
                var handle = jQuery._data(cur, "handle");

                event.currentTarget = cur;
                if (handle) {
                    handle.apply(cur, data);
                }

                // Trigger an inline bound script
                if (ontype && jQuery.acceptData(cur) && cur[ontype] && cur[ontype].apply(cur, data) === false) {
                    event.result = false;
                    event.preventDefault();
                }

                // Bubble up to document, then to window
                cur = cur.parentNode || cur.ownerDocument || cur === event.target.ownerDocument && window;
            } while (cur && !event.isPropagationStopped());

            // If nobody prevented the default action, do it now
            if (!event.isDefaultPrevented()) {
                var old,
				special = jQuery.event.special[type] || {};

                if ((!special._default || special._default.call(elem.ownerDocument, event) === false) &&
				!(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {

                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction)() check here because IE6/7 fails that test.
                    // IE<9 dies on focus to hidden element (#1486), may want to revisit a try/catch.
                    try {
                        if (ontype && elem[type]) {
                            // Don't re-trigger an onFOO event when we call its FOO() method
                            old = elem[ontype];

                            if (old) {
                                elem[ontype] = null;
                            }

                            jQuery.event.triggered = type;
                            elem[type]();
                        }
                    } catch (ieError) { }

                    if (old) {
                        elem[ontype] = old;
                    }

                    jQuery.event.triggered = undefined;
                }
            }

            return event.result;
        },

        handle: function (event) {
            event = jQuery.event.fix(event || window.event);
            // Snapshot the handlers list since a called handler may add/remove events.
            var handlers = ((jQuery._data(this, "events") || {})[event.type] || []).slice(0),
			run_all = !event.exclusive && !event.namespace,
			args = Array.prototype.slice.call(arguments, 0);

            // Use the fix-ed Event rather than the (read-only) native event
            args[0] = event;
            event.currentTarget = this;

            for (var j = 0, l = handlers.length; j < l; j++) {
                var handleObj = handlers[j];

                // Triggered event must 1) be non-exclusive and have no namespace, or
                // 2) have namespace(s) a subset or equal to those in the bound event.
                if (run_all || event.namespace_re.test(handleObj.namespace)) {
                    // Pass in a reference to the handler function itself
                    // So that we can later remove it
                    event.handler = handleObj.handler;
                    event.data = handleObj.data;
                    event.handleObj = handleObj;

                    var ret = handleObj.handler.apply(this, args);

                    if (ret !== undefined) {
                        event.result = ret;
                        if (ret === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }

                    if (event.isImmediatePropagationStopped()) {
                        break;
                    }
                }
            }
            return event.result;
        },

        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

        fix: function (event) {
            if (event[jQuery.expando]) {
                return event;
            }

            // store a copy of the original event object
            // and "clone" to set read-only properties
            var originalEvent = event;
            event = jQuery.Event(originalEvent);

            for (var i = this.props.length, prop; i; ) {
                prop = this.props[--i];
                event[prop] = originalEvent[prop];
            }

            // Fix target property, if necessary
            if (!event.target) {
                // Fixes #1925 where srcElement might not be defined either
                event.target = event.srcElement || document;
            }

            // check if target is a textnode (safari)
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }

            // Add relatedTarget, if necessary
            if (!event.relatedTarget && event.fromElement) {
                event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
            }

            // Calculate pageX/Y if missing and clientX/Y available
            if (event.pageX == null && event.clientX != null) {
                var eventDocument = event.target.ownerDocument || document,
				doc = eventDocument.documentElement,
				body = eventDocument.body;

                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            }

            // Add which for key events
            if (event.which == null && (event.charCode != null || event.keyCode != null)) {
                event.which = event.charCode != null ? event.charCode : event.keyCode;
            }

            // Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
            if (!event.metaKey && event.ctrlKey) {
                event.metaKey = event.ctrlKey;
            }

            // Add which for click: 1 === left; 2 === middle; 3 === right
            // Note: button is not normalized, so don't use it
            if (!event.which && event.button !== undefined) {
                event.which = (event.button & 1 ? 1 : (event.button & 2 ? 3 : (event.button & 4 ? 2 : 0)));
            }

            return event;
        },

        // Deprecated, use jQuery.guid instead
        guid: 1E8,

        // Deprecated, use jQuery.proxy instead
        proxy: jQuery.proxy,

        special: {
            ready: {
                // Make sure the ready event is setup
                setup: jQuery.bindReady,
                teardown: jQuery.noop
            },

            live: {
                add: function (handleObj) {
                    jQuery.event.add(this,
					liveConvert(handleObj.origType, handleObj.selector),
					jQuery.extend({}, handleObj, { handler: liveHandler, guid: handleObj.handler.guid }));
                },

                remove: function (handleObj) {
                    jQuery.event.remove(this, liveConvert(handleObj.origType, handleObj.selector), handleObj);
                }
            },

            beforeunload: {
                setup: function (data, namespaces, eventHandle) {
                    // We only want to do this special case on windows
                    if (jQuery.isWindow(this)) {
                        this.onbeforeunload = eventHandle;
                    }
                },

                teardown: function (namespaces, eventHandle) {
                    if (this.onbeforeunload === eventHandle) {
                        this.onbeforeunload = null;
                    }
                }
            }
        }
    };

    jQuery.removeEvent = document.removeEventListener ?
	function (elem, type, handle) {
	    if (elem.removeEventListener) {
	        elem.removeEventListener(type, handle, false);
	    }
	} :
	function (elem, type, handle) {
	    if (elem.detachEvent) {
	        elem.detachEvent("on" + type, handle);
	    }
	};

    jQuery.Event = function (src, props) {
        // Allow instantiation without the 'new' keyword
        if (!this.preventDefault) {
            return new jQuery.Event(src, props);
        }

        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        }

        // timeStamp is buggy for some events on Firefox(#3843)
        // So we won't rely on the native value
        this.timeStamp = jQuery.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
    };

    function returnFalse() {
        return false;
    }
    function returnTrue() {
        return true;
    }

    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = returnTrue;

            var e = this.originalEvent;
            if (!e) {
                return;
            }

            // if preventDefault exists run it on the original event
            if (e.preventDefault) {
                e.preventDefault();

                // otherwise set the returnValue property of the original event to false (IE)
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function () {
            this.isPropagationStopped = returnTrue;

            var e = this.originalEvent;
            if (!e) {
                return;
            }
            // if stopPropagation exists run it on the original event
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            // otherwise set the cancelBubble property of the original event to true (IE)
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };

    // Checks if an event happened on an element within another element
    // Used in jQuery.event.special.mouseenter and mouseleave handlers
    var withinElement = function (event) {

        // Check if mouse(over|out) are still within the same parent element
        var related = event.relatedTarget,
		inside = false,
		eventType = event.type;

        event.type = event.data;

        if (related !== this) {

            if (related) {
                inside = jQuery.contains(this, related);
            }

            if (!inside) {

                jQuery.event.handle.apply(this, arguments);

                event.type = eventType;
            }
        }
    },

    // In case of event delegation, we only need to rename the event.type,
    // liveHandler will take care of the rest.
delegate = function (event) {
    event.type = event.data;
    jQuery.event.handle.apply(this, arguments);
};

    // Create mouseenter and mouseleave events
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (orig, fix) {
        jQuery.event.special[orig] = {
            setup: function (data) {
                jQuery.event.add(this, fix, data && data.selector ? delegate : withinElement, orig);
            },
            teardown: function (data) {
                jQuery.event.remove(this, fix, data && data.selector ? delegate : withinElement);
            }
        };
    });

    // submit delegation
    if (!jQuery.support.submitBubbles) {

        jQuery.event.special.submit = {
            setup: function (data, namespaces) {
                if (!jQuery.nodeName(this, "form")) {
                    jQuery.event.add(this, "click.specialSubmit", function (e) {
                        var elem = e.target,
						type = elem.type;

                        if ((type === "submit" || type === "image") && jQuery(elem).closest("form").length) {
                            trigger("submit", this, arguments);
                        }
                    });

                    jQuery.event.add(this, "keypress.specialSubmit", function (e) {
                        var elem = e.target,
						type = elem.type;

                        if ((type === "text" || type === "password") && jQuery(elem).closest("form").length && e.keyCode === 13) {
                            trigger("submit", this, arguments);
                        }
                    });

                } else {
                    return false;
                }
            },

            teardown: function (namespaces) {
                jQuery.event.remove(this, ".specialSubmit");
            }
        };

    }

    // change delegation, happens here so we have bind.
    if (!jQuery.support.changeBubbles) {

        var changeFilters,

	getVal = function (elem) {
	    var type = elem.type, val = elem.value;

	    if (type === "radio" || type === "checkbox") {
	        val = elem.checked;

	    } else if (type === "select-multiple") {
	        val = elem.selectedIndex > -1 ?
				jQuery.map(elem.options, function (elem) {
				    return elem.selected;
				}).join("-") :
				"";

	    } else if (jQuery.nodeName(elem, "select")) {
	        val = elem.selectedIndex;
	    }

	    return val;
	},

	testChange = function testChange(e) {
	    var elem = e.target, data, val;

	    if (!rformElems.test(elem.nodeName) || elem.readOnly) {
	        return;
	    }

	    data = jQuery._data(elem, "_change_data");
	    val = getVal(elem);

	    // the current data will be also retrieved by beforeactivate
	    if (e.type !== "focusout" || elem.type !== "radio") {
	        jQuery._data(elem, "_change_data", val);
	    }

	    if (data === undefined || val === data) {
	        return;
	    }

	    if (data != null || val) {
	        e.type = "change";
	        e.liveFired = undefined;
	        jQuery.event.trigger(e, arguments[1], elem);
	    }
	};

        jQuery.event.special.change = {
            filters: {
                focusout: testChange,

                beforedeactivate: testChange,

                click: function (e) {
                    var elem = e.target, type = jQuery.nodeName(elem, "input") ? elem.type : "";

                    if (type === "radio" || type === "checkbox" || jQuery.nodeName(elem, "select")) {
                        testChange.call(this, e);
                    }
                },

                // Change has to be called before submit
                // Keydown will be called before keypress, which is used in submit-event delegation
                keydown: function (e) {
                    var elem = e.target, type = jQuery.nodeName(elem, "input") ? elem.type : "";

                    if ((e.keyCode === 13 && !jQuery.nodeName(elem, "textarea")) ||
					(e.keyCode === 32 && (type === "checkbox" || type === "radio")) ||
					type === "select-multiple") {
                        testChange.call(this, e);
                    }
                },

                // Beforeactivate happens also before the previous element is blurred
                // with this event you can't trigger a change event, but you can store
                // information
                beforeactivate: function (e) {
                    var elem = e.target;
                    jQuery._data(elem, "_change_data", getVal(elem));
                }
            },

            setup: function (data, namespaces) {
                if (this.type === "file") {
                    return false;
                }

                for (var type in changeFilters) {
                    jQuery.event.add(this, type + ".specialChange", changeFilters[type]);
                }

                return rformElems.test(this.nodeName);
            },

            teardown: function (namespaces) {
                jQuery.event.remove(this, ".specialChange");

                return rformElems.test(this.nodeName);
            }
        };

        changeFilters = jQuery.event.special.change.filters;

        // Handle when the input is .focus()'d
        changeFilters.focus = changeFilters.beforeactivate;
    }

    function trigger(type, elem, args) {
        // Piggyback on a donor event to simulate a different one.
        // Fake originalEvent to avoid donor's stopPropagation, but if the
        // simulated event prevents default then we do the same on the donor.
        // Don't pass args or remember liveFired; they apply to the donor event.
        var event = jQuery.extend({}, args[0]);
        event.type = type;
        event.originalEvent = {};
        event.liveFired = undefined;
        jQuery.event.handle.call(elem, event);
        if (event.isDefaultPrevented()) {
            args[0].preventDefault();
        }
    }

    // Create "bubbling" focus and blur events
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

            // Attach a single capturing handler while someone wants focusin/focusout
            var attaches = 0;

            jQuery.event.special[fix] = {
                setup: function () {
                    if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function () {
                    if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };

            function handler(donor) {
                // Donor event is always a native one; fix it and switch its type.
                // Let focusin/out handler cancel the donor focus/blur event.
                var e = jQuery.event.fix(donor);
                e.type = fix;
                e.originalEvent = {};
                jQuery.event.trigger(e, null, e.target);
                if (e.isDefaultPrevented()) {
                    donor.preventDefault();
                }
            }
        });
    }

    jQuery.each(["bind", "one"], function (i, name) {
        jQuery.fn[name] = function (type, data, fn) {
            var handler;

            // Handle object literals
            if (typeof type === "object") {
                for (var key in type) {
                    this[name](key, data, type[key], fn);
                }
                return this;
            }

            if (arguments.length === 2 || data === false) {
                fn = data;
                data = undefined;
            }

            if (name === "one") {
                handler = function (event) {
                    jQuery(this).unbind(event, handler);
                    return fn.apply(this, arguments);
                };
                handler.guid = fn.guid || jQuery.guid++;
            } else {
                handler = fn;
            }

            if (type === "unload" && name !== "one") {
                this.one(type, data, fn);

            } else {
                for (var i = 0, l = this.length; i < l; i++) {
                    jQuery.event.add(this[i], type, handler, data);
                }
            }

            return this;
        };
    });

    jQuery.fn.extend({
        unbind: function (type, fn) {
            // Handle object literals
            if (typeof type === "object" && !type.preventDefault) {
                for (var key in type) {
                    this.unbind(key, type[key]);
                }

            } else {
                for (var i = 0, l = this.length; i < l; i++) {
                    jQuery.event.remove(this[i], type, fn);
                }
            }

            return this;
        },

        delegate: function (selector, types, data, fn) {
            return this.live(types, data, fn, selector);
        },

        undelegate: function (selector, types, fn) {
            if (arguments.length === 0) {
                return this.unbind("live");

            } else {
                return this.die(types, null, fn, selector);
            }
        },

        trigger: function (type, data) {
            return this.each(function () {
                jQuery.event.trigger(type, data, this);
            });
        },

        triggerHandler: function (type, data) {
            if (this[0]) {
                return jQuery.event.trigger(type, data, this[0], true);
            }
        },

        toggle: function (fn) {
            // Save reference to arguments for access in closure
            var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function (event) {
			    // Figure out which function to execute
			    var lastToggle = (jQuery.data(this, "lastToggle" + fn.guid) || 0) % i;
			    jQuery.data(this, "lastToggle" + fn.guid, lastToggle + 1);

			    // Make sure that clicks stop
			    event.preventDefault();

			    // and execute the function
			    return args[lastToggle].apply(this, arguments) || false;
			};

            // link all the functions, so any of them can unbind this click handler
            toggler.guid = guid;
            while (i < args.length) {
                args[i++].guid = guid;
            }

            return this.click(toggler);
        },

        hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });

    var liveMap = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };

    jQuery.each(["live", "die"], function (i, name) {
        jQuery.fn[name] = function (types, data, fn, origSelector /* Internal Use Only */) {
            var type, i = 0, match, namespaces, preType,
			selector = origSelector || this.selector,
			context = origSelector ? this : jQuery(this.context);

            if (typeof types === "object" && !types.preventDefault) {
                for (var key in types) {
                    context[name](key, data, types[key], selector);
                }

                return this;
            }

            if (name === "die" && !types &&
					origSelector && origSelector.charAt(0) === ".") {

                context.unbind(origSelector);

                return this;
            }

            if (data === false || jQuery.isFunction(data)) {
                fn = data || returnFalse;
                data = undefined;
            }

            types = (types || "").split(" ");

            while ((type = types[i++]) != null) {
                match = rnamespaces.exec(type);
                namespaces = "";

                if (match) {
                    namespaces = match[0];
                    type = type.replace(rnamespaces, "");
                }

                if (type === "hover") {
                    types.push("mouseenter" + namespaces, "mouseleave" + namespaces);
                    continue;
                }

                preType = type;

                if (liveMap[type]) {
                    types.push(liveMap[type] + namespaces);
                    type = type + namespaces;

                } else {
                    type = (liveMap[type] || type) + namespaces;
                }

                if (name === "live") {
                    // bind live handler
                    for (var j = 0, l = context.length; j < l; j++) {
                        jQuery.event.add(context[j], "live." + liveConvert(type, selector),
						{ data: data, selector: selector, handler: fn, origType: type, origHandler: fn, preType: preType });
                    }

                } else {
                    // unbind live handler
                    context.unbind("live." + liveConvert(type, selector), fn);
                }
            }

            return this;
        };
    });

    function liveHandler(event) {
        var stop, maxLevel, related, match, handleObj, elem, j, i, l, data, close, namespace, ret,
		elems = [],
		selectors = [],
		events = jQuery._data(this, "events");

        // Make sure we avoid non-left-click bubbling in Firefox (#3861) and disabled elements in IE (#6911)
        if (event.liveFired === this || !events || !events.live || event.target.disabled || event.button && event.type === "click") {
            return;
        }

        if (event.namespace) {
            namespace = new RegExp("(^|\\.)" + event.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
        }

        event.liveFired = this;

        var live = events.live.slice(0);

        for (j = 0; j < live.length; j++) {
            handleObj = live[j];

            if (handleObj.origType.replace(rnamespaces, "") === event.type) {
                selectors.push(handleObj.selector);

            } else {
                live.splice(j--, 1);
            }
        }

        match = jQuery(event.target).closest(selectors, event.currentTarget);

        for (i = 0, l = match.length; i < l; i++) {
            close = match[i];

            for (j = 0; j < live.length; j++) {
                handleObj = live[j];

                if (close.selector === handleObj.selector && (!namespace || namespace.test(handleObj.namespace)) && !close.elem.disabled) {
                    elem = close.elem;
                    related = null;

                    // Those two events require additional checking
                    if (handleObj.preType === "mouseenter" || handleObj.preType === "mouseleave") {
                        event.type = handleObj.preType;
                        related = jQuery(event.relatedTarget).closest(handleObj.selector)[0];

                        // Make sure not to accidentally match a child element with the same selector
                        if (related && jQuery.contains(elem, related)) {
                            related = elem;
                        }
                    }

                    if (!related || related !== elem) {
                        elems.push({ elem: elem, handleObj: handleObj, level: close.level });
                    }
                }
            }
        }

        for (i = 0, l = elems.length; i < l; i++) {
            match = elems[i];

            if (maxLevel && match.level > maxLevel) {
                break;
            }

            event.currentTarget = match.elem;
            event.data = match.handleObj.data;
            event.handleObj = match.handleObj;

            ret = match.handleObj.origHandler.apply(match.elem, arguments);

            if (ret === false || event.isPropagationStopped()) {
                maxLevel = match.level;

                if (ret === false) {
                    stop = false;
                }
                if (event.isImmediatePropagationStopped()) {
                    break;
                }
            }
        }

        return stop;
    }

    function liveConvert(type, selector) {
        return (type && type !== "*" ? type + "." : "") + selector.replace(rperiod, "`").replace(rspaces, "&");
    }

    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error").split(" "), function (i, name) {

	    // Handle event binding
	    jQuery.fn[name] = function (data, fn) {
	        if (fn == null) {
	            fn = data;
	            data = null;
	        }

	        return arguments.length > 0 ?
			this.bind(name, data, fn) :
			this.trigger(name);
	    };

	    if (jQuery.attrFn) {
	        jQuery.attrFn[name] = true;
	    }
	});



    /*!
    * Sizzle CSS Selector Engine
    *  Copyright 2011, The Dojo Foundation
    *  Released under the MIT, BSD, and GPL Licenses.
    *  More information: http://sizzlejs.com/
    */
    (function () {

        var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rNonWord = /\W/;

        // Here we check if the JavaScript engine is using some sort of
        // optimization where it does not always call our comparision
        // function. If that is the case, discard the hasDuplicate value.
        //   Thus far that includes Google Chrome.
        [0, 0].sort(function () {
            baseHasDuplicate = false;
            return 0;
        });

        var Sizzle = function (selector, context, results, seed) {
            results = results || [];
            context = context || document;

            var origContext = context;

            if (context.nodeType !== 1 && context.nodeType !== 9) {
                return [];
            }

            if (!selector || typeof selector !== "string") {
                return results;
            }

            var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML(context),
		parts = [],
		soFar = selector;

            // Reset the position of the chunker regexp (start from head)
            do {
                chunker.exec("");
                m = chunker.exec(soFar);

                if (m) {
                    soFar = m[3];

                    parts.push(m[1]);

                    if (m[2]) {
                        extra = m[3];
                        break;
                    }
                }
            } while (m);

            if (parts.length > 1 && origPOS.exec(selector)) {

                if (parts.length === 2 && Expr.relative[parts[0]]) {
                    set = posProcess(parts[0] + parts[1], context);

                } else {
                    set = Expr.relative[parts[0]] ?
				[context] :
				Sizzle(parts.shift(), context);

                    while (parts.length) {
                        selector = parts.shift();

                        if (Expr.relative[selector]) {
                            selector += parts.shift();
                        }

                        set = posProcess(selector, set);
                    }
                }

            } else {
                // Take a shortcut and set the context if the root selector is an ID
                // (but not if it'll be faster if the inner selector is an ID)
                if (!seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1])) {

                    ret = Sizzle.find(parts.shift(), context, contextXML);
                    context = ret.expr ?
				Sizzle.filter(ret.expr, ret.set)[0] :
				ret.set[0];
                }

                if (context) {
                    ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed)} :
				Sizzle.find(parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML);

                    set = ret.expr ?
				Sizzle.filter(ret.expr, ret.set) :
				ret.set;

                    if (parts.length > 0) {
                        checkSet = makeArray(set);

                    } else {
                        prune = false;
                    }

                    while (parts.length) {
                        cur = parts.pop();
                        pop = cur;

                        if (!Expr.relative[cur]) {
                            cur = "";
                        } else {
                            pop = parts.pop();
                        }

                        if (pop == null) {
                            pop = context;
                        }

                        Expr.relative[cur](checkSet, pop, contextXML);
                    }

                } else {
                    checkSet = parts = [];
                }
            }

            if (!checkSet) {
                checkSet = set;
            }

            if (!checkSet) {
                Sizzle.error(cur || selector);
            }

            if (toString.call(checkSet) === "[object Array]") {
                if (!prune) {
                    results.push.apply(results, checkSet);

                } else if (context && context.nodeType === 1) {
                    for (i = 0; checkSet[i] != null; i++) {
                        if (checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i]))) {
                            results.push(set[i]);
                        }
                    }

                } else {
                    for (i = 0; checkSet[i] != null; i++) {
                        if (checkSet[i] && checkSet[i].nodeType === 1) {
                            results.push(set[i]);
                        }
                    }
                }

            } else {
                makeArray(checkSet, results);
            }

            if (extra) {
                Sizzle(extra, origContext, results, seed);
                Sizzle.uniqueSort(results);
            }

            return results;
        };

        Sizzle.uniqueSort = function (results) {
            if (sortOrder) {
                hasDuplicate = baseHasDuplicate;
                results.sort(sortOrder);

                if (hasDuplicate) {
                    for (var i = 1; i < results.length; i++) {
                        if (results[i] === results[i - 1]) {
                            results.splice(i--, 1);
                        }
                    }
                }
            }

            return results;
        };

        Sizzle.matches = function (expr, set) {
            return Sizzle(expr, null, null, set);
        };

        Sizzle.matchesSelector = function (node, expr) {
            return Sizzle(expr, null, null, [node]).length > 0;
        };

        Sizzle.find = function (expr, context, isXML) {
            var set;

            if (!expr) {
                return [];
            }

            for (var i = 0, l = Expr.order.length; i < l; i++) {
                var match,
			type = Expr.order[i];

                if ((match = Expr.leftMatch[type].exec(expr))) {
                    var left = match[1];
                    match.splice(1, 1);

                    if (left.substr(left.length - 1) !== "\\") {
                        match[1] = (match[1] || "").replace(rBackslash, "");
                        set = Expr.find[type](match, context, isXML);

                        if (set != null) {
                            expr = expr.replace(Expr.match[type], "");
                            break;
                        }
                    }
                }
            }

            if (!set) {
                set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName("*") :
			[];
            }

            return { set: set, expr: expr };
        };

        Sizzle.filter = function (expr, set, inplace, not) {
            var match, anyFound,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML(set[0]);

            while (expr && set.length) {
                for (var type in Expr.filter) {
                    if ((match = Expr.leftMatch[type].exec(expr)) != null && match[2]) {
                        var found, item,
					filter = Expr.filter[type],
					left = match[1];

                        anyFound = false;

                        match.splice(1, 1);

                        if (left.substr(left.length - 1) === "\\") {
                            continue;
                        }

                        if (curLoop === result) {
                            result = [];
                        }

                        if (Expr.preFilter[type]) {
                            match = Expr.preFilter[type](match, curLoop, inplace, result, not, isXMLFilter);

                            if (!match) {
                                anyFound = found = true;

                            } else if (match === true) {
                                continue;
                            }
                        }

                        if (match) {
                            for (var i = 0; (item = curLoop[i]) != null; i++) {
                                if (item) {
                                    found = filter(item, match, i, curLoop);
                                    var pass = not ^ !!found;

                                    if (inplace && found != null) {
                                        if (pass) {
                                            anyFound = true;

                                        } else {
                                            curLoop[i] = false;
                                        }

                                    } else if (pass) {
                                        result.push(item);
                                        anyFound = true;
                                    }
                                }
                            }
                        }

                        if (found !== undefined) {
                            if (!inplace) {
                                curLoop = result;
                            }

                            expr = expr.replace(Expr.match[type], "");

                            if (!anyFound) {
                                return [];
                            }

                            break;
                        }
                    }
                }

                // Improper expression
                if (expr === old) {
                    if (anyFound == null) {
                        Sizzle.error(expr);

                    } else {
                        break;
                    }
                }

                old = expr;
            }

            return curLoop;
        };

        Sizzle.error = function (msg) {
            throw "Syntax error, unrecognized expression: " + msg;
        };

        var Expr = Sizzle.selectors = {
            order: ["ID", "NAME", "TAG"],

            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },

            leftMatch: {},

            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },

            attrHandle: {
                href: function (elem) {
                    return elem.getAttribute("href");
                },
                type: function (elem) {
                    return elem.getAttribute("type");
                }
            },

            relative: {
                "+": function (checkSet, part) {
                    var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test(part),
				isPartStrNotTag = isPartStr && !isTag;

                    if (isTag) {
                        part = part.toLowerCase();
                    }

                    for (var i = 0, l = checkSet.length, elem; i < l; i++) {
                        if ((elem = checkSet[i])) {
                            while ((elem = elem.previousSibling) && elem.nodeType !== 1) { }

                            checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
                        }
                    }

                    if (isPartStrNotTag) {
                        Sizzle.filter(part, checkSet, true);
                    }
                },

                ">": function (checkSet, part) {
                    var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

                    if (isPartStr && !rNonWord.test(part)) {
                        part = part.toLowerCase();

                        for (; i < l; i++) {
                            elem = checkSet[i];

                            if (elem) {
                                var parent = elem.parentNode;
                                checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
                            }
                        }

                    } else {
                        for (; i < l; i++) {
                            elem = checkSet[i];

                            if (elem) {
                                checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
                            }
                        }

                        if (isPartStr) {
                            Sizzle.filter(part, checkSet, true);
                        }
                    }
                },

                "": function (checkSet, part, isXML) {
                    var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

                    if (typeof part === "string" && !rNonWord.test(part)) {
                        part = part.toLowerCase();
                        nodeCheck = part;
                        checkFn = dirNodeCheck;
                    }

                    checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
                },

                "~": function (checkSet, part, isXML) {
                    var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

                    if (typeof part === "string" && !rNonWord.test(part)) {
                        part = part.toLowerCase();
                        nodeCheck = part;
                        checkFn = dirNodeCheck;
                    }

                    checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
                }
            },

            find: {
                ID: function (match, context, isXML) {
                    if (typeof context.getElementById !== "undefined" && !isXML) {
                        var m = context.getElementById(match[1]);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        return m && m.parentNode ? [m] : [];
                    }
                },

                NAME: function (match, context) {
                    if (typeof context.getElementsByName !== "undefined") {
                        var ret = [],
					results = context.getElementsByName(match[1]);

                        for (var i = 0, l = results.length; i < l; i++) {
                            if (results[i].getAttribute("name") === match[1]) {
                                ret.push(results[i]);
                            }
                        }

                        return ret.length === 0 ? null : ret;
                    }
                },

                TAG: function (match, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(match[1]);
                    }
                }
            },
            preFilter: {
                CLASS: function (match, curLoop, inplace, result, not, isXML) {
                    match = " " + match[1].replace(rBackslash, "") + " ";

                    if (isXML) {
                        return match;
                    }

                    for (var i = 0, elem; (elem = curLoop[i]) != null; i++) {
                        if (elem) {
                            if (not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0)) {
                                if (!inplace) {
                                    result.push(elem);
                                }

                            } else if (inplace) {
                                curLoop[i] = false;
                            }
                        }
                    }

                    return false;
                },

                ID: function (match) {
                    return match[1].replace(rBackslash, "");
                },

                TAG: function (match, curLoop) {
                    return match[1].replace(rBackslash, "").toLowerCase();
                },

                CHILD: function (match) {
                    if (match[1] === "nth") {
                        if (!match[2]) {
                            Sizzle.error(match[0]);
                        }

                        match[2] = match[2].replace(/^\+|\s*/g, '');

                        // parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
                        var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test(match[2]) && "0n+" + match[2] || match[2]);

                        // calculate the numbers (first)n+(last) including if they are negative
                        match[2] = (test[1] + (test[2] || 1)) - 0;
                        match[3] = test[3] - 0;
                    }
                    else if (match[2]) {
                        Sizzle.error(match[0]);
                    }

                    // TODO: Move to normal caching system
                    match[0] = done++;

                    return match;
                },

                ATTR: function (match, curLoop, inplace, result, not, isXML) {
                    var name = match[1] = match[1].replace(rBackslash, "");

                    if (!isXML && Expr.attrMap[name]) {
                        match[1] = Expr.attrMap[name];
                    }

                    // Handle if an un-quoted value was used
                    match[4] = (match[4] || match[5] || "").replace(rBackslash, "");

                    if (match[2] === "~=") {
                        match[4] = " " + match[4] + " ";
                    }

                    return match;
                },

                PSEUDO: function (match, curLoop, inplace, result, not) {
                    if (match[1] === "not") {
                        // If we're dealing with a complex expression, or a simple one
                        if ((chunker.exec(match[3]) || "").length > 1 || /^\w/.test(match[3])) {
                            match[3] = Sizzle(match[3], null, null, curLoop);

                        } else {
                            var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

                            if (!inplace) {
                                result.push.apply(result, ret);
                            }

                            return false;
                        }

                    } else if (Expr.match.POS.test(match[0]) || Expr.match.CHILD.test(match[0])) {
                        return true;
                    }

                    return match;
                },

                POS: function (match) {
                    match.unshift(true);

                    return match;
                }
            },

            filters: {
                enabled: function (elem) {
                    return elem.disabled === false && elem.type !== "hidden";
                },

                disabled: function (elem) {
                    return elem.disabled === true;
                },

                checked: function (elem) {
                    return elem.checked === true;
                },

                selected: function (elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }

                    return elem.selected === true;
                },

                parent: function (elem) {
                    return !!elem.firstChild;
                },

                empty: function (elem) {
                    return !elem.firstChild;
                },

                has: function (elem, i, match) {
                    return !!Sizzle(match[3], elem).length;
                },

                header: function (elem) {
                    return (/h\d/i).test(elem.nodeName);
                },

                text: function (elem) {
                    var attr = elem.getAttribute("type"), type = elem.type;
                    // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc) 
                    // use getAttribute instead to test this case
                    return elem.nodeName.toLowerCase() === "input" && "text" === type && (attr === type || attr === null);
                },

                radio: function (elem) {
                    return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
                },

                checkbox: function (elem) {
                    return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
                },

                file: function (elem) {
                    return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
                },

                password: function (elem) {
                    return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
                },

                submit: function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && "submit" === elem.type;
                },

                image: function (elem) {
                    return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
                },

                reset: function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && "reset" === elem.type;
                },

                button: function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && "button" === elem.type || name === "button";
                },

                input: function (elem) {
                    return (/input|select|textarea|button/i).test(elem.nodeName);
                },

                focus: function (elem) {
                    return elem === elem.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function (elem, i) {
                    return i === 0;
                },

                last: function (elem, i, match, array) {
                    return i === array.length - 1;
                },

                even: function (elem, i) {
                    return i % 2 === 0;
                },

                odd: function (elem, i) {
                    return i % 2 === 1;
                },

                lt: function (elem, i, match) {
                    return i < match[3] - 0;
                },

                gt: function (elem, i, match) {
                    return i > match[3] - 0;
                },

                nth: function (elem, i, match) {
                    return match[3] - 0 === i;
                },

                eq: function (elem, i, match) {
                    return match[3] - 0 === i;
                }
            },
            filter: {
                PSEUDO: function (elem, match, i, array) {
                    var name = match[1],
				filter = Expr.filters[name];

                    if (filter) {
                        return filter(elem, i, match, array);

                    } else if (name === "contains") {
                        return (elem.textContent || elem.innerText || Sizzle.getText([elem]) || "").indexOf(match[3]) >= 0;

                    } else if (name === "not") {
                        var not = match[3];

                        for (var j = 0, l = not.length; j < l; j++) {
                            if (not[j] === elem) {
                                return false;
                            }
                        }

                        return true;

                    } else {
                        Sizzle.error(name);
                    }
                },

                CHILD: function (elem, match) {
                    var type = match[1],
				node = elem;

                    switch (type) {
                        case "only":
                        case "first":
                            while ((node = node.previousSibling)) {
                                if (node.nodeType === 1) {
                                    return false;
                                }
                            }

                            if (type === "first") {
                                return true;
                            }

                            node = elem;

                        case "last":
                            while ((node = node.nextSibling)) {
                                if (node.nodeType === 1) {
                                    return false;
                                }
                            }

                            return true;

                        case "nth":
                            var first = match[2],
						last = match[3];

                            if (first === 1 && last === 0) {
                                return true;
                            }

                            var doneName = match[0],
						parent = elem.parentNode;

                            if (parent && (parent.sizcache !== doneName || !elem.nodeIndex)) {
                                var count = 0;

                                for (node = parent.firstChild; node; node = node.nextSibling) {
                                    if (node.nodeType === 1) {
                                        node.nodeIndex = ++count;
                                    }
                                }

                                parent.sizcache = doneName;
                            }

                            var diff = elem.nodeIndex - last;

                            if (first === 0) {
                                return diff === 0;

                            } else {
                                return (diff % first === 0 && diff / first >= 0);
                            }
                    }
                },

                ID: function (elem, match) {
                    return elem.nodeType === 1 && elem.getAttribute("id") === match;
                },

                TAG: function (elem, match) {
                    return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
                },

                CLASS: function (elem, match) {
                    return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf(match) > -1;
                },

                ATTR: function (elem, match) {
                    var name = match[1],
				result = Expr.attrHandle[name] ?
					Expr.attrHandle[name](elem) :
					elem[name] != null ?
						elem[name] :
						elem.getAttribute(name),
				value = result + "",
				type = match[2],
				check = match[4];

                    return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
                },

                POS: function (elem, match, i, array) {
                    var name = match[2],
				filter = Expr.setFilters[name];

                    if (filter) {
                        return filter(elem, i, match, array);
                    }
                }
            }
        };

        var origPOS = Expr.match.POS,
	fescape = function (all, num) {
	    return "\\" + (num - 0 + 1);
	};

        for (var type in Expr.match) {
            Expr.match[type] = new RegExp(Expr.match[type].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            Expr.leftMatch[type] = new RegExp(/(^(?:.|\r|\n)*?)/.source + Expr.match[type].source.replace(/\\(\d+)/g, fescape));
        }

        var makeArray = function (array, results) {
            array = Array.prototype.slice.call(array, 0);

            if (results) {
                results.push.apply(results, array);
                return results;
            }

            return array;
        };

        // Perform a simple check to determine if the browser is capable of
        // converting a NodeList to an array using builtin methods.
        // Also verifies that the returned array holds DOM nodes
        // (which is not the case in the Blackberry browser)
        try {
            Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType;

            // Provide a fallback method if it does not work
        } catch (e) {
            makeArray = function (array, results) {
                var i = 0,
			ret = results || [];

                if (toString.call(array) === "[object Array]") {
                    Array.prototype.push.apply(ret, array);

                } else {
                    if (typeof array.length === "number") {
                        for (var l = array.length; i < l; i++) {
                            ret.push(array[i]);
                        }

                    } else {
                        for (; array[i]; i++) {
                            ret.push(array[i]);
                        }
                    }
                }

                return ret;
            };
        }

        var sortOrder, siblingCheck;

        if (document.documentElement.compareDocumentPosition) {
            sortOrder = function (a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                    return a.compareDocumentPosition ? -1 : 1;
                }

                return a.compareDocumentPosition(b) & 4 ? -1 : 1;
            };

        } else {
            sortOrder = function (a, b) {
                // The nodes are identical, we can exit early
                if (a === b) {
                    hasDuplicate = true;
                    return 0;

                    // Fallback to using sourceIndex (in IE) if it's available on both nodes
                } else if (a.sourceIndex && b.sourceIndex) {
                    return a.sourceIndex - b.sourceIndex;
                }

                var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

                // If the nodes are siblings (or identical) we can do a quick check
                if (aup === bup) {
                    return siblingCheck(a, b);

                    // If no parents were found then the nodes are disconnected
                } else if (!aup) {
                    return -1;

                } else if (!bup) {
                    return 1;
                }

                // Otherwise they're somewhere else in the tree so we need
                // to build up a full list of the parentNodes for comparison
                while (cur) {
                    ap.unshift(cur);
                    cur = cur.parentNode;
                }

                cur = bup;

                while (cur) {
                    bp.unshift(cur);
                    cur = cur.parentNode;
                }

                al = ap.length;
                bl = bp.length;

                // Start walking down the tree looking for a discrepancy
                for (var i = 0; i < al && i < bl; i++) {
                    if (ap[i] !== bp[i]) {
                        return siblingCheck(ap[i], bp[i]);
                    }
                }

                // We ended someplace up the tree so do a sibling check
                return i === al ?
			siblingCheck(a, bp[i], -1) :
			siblingCheck(ap[i], b, 1);
            };

            siblingCheck = function (a, b, ret) {
                if (a === b) {
                    return ret;
                }

                var cur = a.nextSibling;

                while (cur) {
                    if (cur === b) {
                        return -1;
                    }

                    cur = cur.nextSibling;
                }

                return 1;
            };
        }

        // Utility function for retreiving the text value of an array of DOM nodes
        Sizzle.getText = function (elems) {
            var ret = "", elem;

            for (var i = 0; elems[i]; i++) {
                elem = elems[i];

                // Get the text from text nodes and CDATA nodes
                if (elem.nodeType === 3 || elem.nodeType === 4) {
                    ret += elem.nodeValue;

                    // Traverse everything else, except comment nodes
                } else if (elem.nodeType !== 8) {
                    ret += Sizzle.getText(elem.childNodes);
                }
            }

            return ret;
        };

        // Check to see if the browser returns elements by name when
        // querying by getElementById (and provide a workaround)
        (function () {
            // We're going to inject a fake input element with a specified name
            var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

            form.innerHTML = "<a name='" + id + "'/>";

            // Inject it into the root element, check its status, and remove it quickly
            root.insertBefore(form, root.firstChild);

            // The workaround has to do additional checks after a getElementById
            // Which slows things down for other browsers (hence the branching)
            if (document.getElementById(id)) {
                Expr.find.ID = function (match, context, isXML) {
                    if (typeof context.getElementById !== "undefined" && !isXML) {
                        var m = context.getElementById(match[1]);

                        return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
                    }
                };

                Expr.filter.ID = function (elem, match) {
                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

                    return elem.nodeType === 1 && node && node.nodeValue === match;
                };
            }

            root.removeChild(form);

            // release memory in IE
            root = form = null;
        })();

        (function () {
            // Check to see if the browser returns only elements
            // when doing getElementsByTagName("*")

            // Create a fake element
            var div = document.createElement("div");
            div.appendChild(document.createComment(""));

            // Make sure no comments are found
            if (div.getElementsByTagName("*").length > 0) {
                Expr.find.TAG = function (match, context) {
                    var results = context.getElementsByTagName(match[1]);

                    // Filter out possible comments
                    if (match[1] === "*") {
                        var tmp = [];

                        for (var i = 0; results[i]; i++) {
                            if (results[i].nodeType === 1) {
                                tmp.push(results[i]);
                            }
                        }

                        results = tmp;
                    }

                    return results;
                };
            }

            // Check to see if an attribute returns normalized href attributes
            div.innerHTML = "<a href='#'></a>";

            if (div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#") {

                Expr.attrHandle.href = function (elem) {
                    return elem.getAttribute("href", 2);
                };
            }

            // release memory in IE
            div = null;
        })();

        if (document.querySelectorAll) {
            (function () {
                var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

                div.innerHTML = "<p class='TEST'></p>";

                // Safari can't handle uppercase or unicode characters when
                // in quirks mode.
                if (div.querySelectorAll && div.querySelectorAll(".TEST").length === 0) {
                    return;
                }

                Sizzle = function (query, context, extra, seed) {
                    context = context || document;

                    // Only use querySelectorAll on non-XML documents
                    // (ID selectors don't work in non-HTML documents)
                    if (!seed && !Sizzle.isXML(context)) {
                        // See if we find a selector to speed up
                        var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);

                        if (match && (context.nodeType === 1 || context.nodeType === 9)) {
                            // Speed-up: Sizzle("TAG")
                            if (match[1]) {
                                return makeArray(context.getElementsByTagName(query), extra);

                                // Speed-up: Sizzle(".CLASS")
                            } else if (match[2] && Expr.find.CLASS && context.getElementsByClassName) {
                                return makeArray(context.getElementsByClassName(match[2]), extra);
                            }
                        }

                        if (context.nodeType === 9) {
                            // Speed-up: Sizzle("body")
                            // The body element only exists once, optimize finding it
                            if (query === "body" && context.body) {
                                return makeArray([context.body], extra);

                                // Speed-up: Sizzle("#ID")
                            } else if (match && match[3]) {
                                var elem = context.getElementById(match[3]);

                                // Check parentNode to catch when Blackberry 4.6 returns
                                // nodes that are no longer in the document #6963
                                if (elem && elem.parentNode) {
                                    // Handle the case where IE and Opera return items
                                    // by name instead of ID
                                    if (elem.id === match[3]) {
                                        return makeArray([elem], extra);
                                    }

                                } else {
                                    return makeArray([], extra);
                                }
                            }

                            try {
                                return makeArray(context.querySelectorAll(query), extra);
                            } catch (qsaError) { }

                            // qSA works strangely on Element-rooted queries
                            // We can work around this by specifying an extra ID on the root
                            // and working up from there (Thanks to Andrew Dupont for the technique)
                            // IE 8 doesn't work on object elements
                        } else if (context.nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                            var oldContext = context,
						old = context.getAttribute("id"),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test(query);

                            if (!old) {
                                context.setAttribute("id", nid);
                            } else {
                                nid = nid.replace(/'/g, "\\$&");
                            }
                            if (relativeHierarchySelector && hasParent) {
                                context = context.parentNode;
                            }

                            try {
                                if (!relativeHierarchySelector || hasParent) {
                                    return makeArray(context.querySelectorAll("[id='" + nid + "'] " + query), extra);
                                }

                            } catch (pseudoError) {
                            } finally {
                                if (!old) {
                                    oldContext.removeAttribute("id");
                                }
                            }
                        }
                    }

                    return oldSizzle(query, context, extra, seed);
                };

                for (var prop in oldSizzle) {
                    Sizzle[prop] = oldSizzle[prop];
                }

                // release memory in IE
                div = null;
            })();
        }

        (function () {
            var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

            if (matches) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9 fails this)
                var disconnectedMatch = !matches.call(document.createElement("div"), "div"),
			pseudoWorks = false;

                try {
                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    matches.call(document.documentElement, "[test!='']:sizzle");

                } catch (pseudoError) {
                    pseudoWorks = true;
                }

                Sizzle.matchesSelector = function (node, expr) {
                    // Make sure that attribute selectors are quoted
                    expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

                    if (!Sizzle.isXML(node)) {
                        try {
                            if (pseudoWorks || !Expr.match.PSEUDO.test(expr) && !/!=/.test(expr)) {
                                var ret = matches.call(node, expr);

                                // IE 9's matchesSelector returns false on disconnected nodes
                                if (ret || !disconnectedMatch ||
                                // As well, disconnected nodes are said to be in a document
                                // fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11) {
                                    return ret;
                                }
                            }
                        } catch (e) { }
                    }

                    return Sizzle(expr, null, null, [node]).length > 0;
                };
            }
        })();

        (function () {
            var div = document.createElement("div");

            div.innerHTML = "<div class='test e'></div><div class='test'></div>";

            // Opera can't find a second classname (in 9.6)
            // Also, make sure that getElementsByClassName actually exists
            if (!div.getElementsByClassName || div.getElementsByClassName("e").length === 0) {
                return;
            }

            // Safari caches class attributes, doesn't catch changes (in 3.2)
            div.lastChild.className = "e";

            if (div.getElementsByClassName("e").length === 1) {
                return;
            }

            Expr.order.splice(1, 0, "CLASS");
            Expr.find.CLASS = function (match, context, isXML) {
                if (typeof context.getElementsByClassName !== "undefined" && !isXML) {
                    return context.getElementsByClassName(match[1]);
                }
            };

            // release memory in IE
            div = null;
        })();

        function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
            for (var i = 0, l = checkSet.length; i < l; i++) {
                var elem = checkSet[i];

                if (elem) {
                    var match = false;

                    elem = elem[dir];

                    while (elem) {
                        if (elem.sizcache === doneName) {
                            match = checkSet[elem.sizset];
                            break;
                        }

                        if (elem.nodeType === 1 && !isXML) {
                            elem.sizcache = doneName;
                            elem.sizset = i;
                        }

                        if (elem.nodeName.toLowerCase() === cur) {
                            match = elem;
                            break;
                        }

                        elem = elem[dir];
                    }

                    checkSet[i] = match;
                }
            }
        }

        function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
            for (var i = 0, l = checkSet.length; i < l; i++) {
                var elem = checkSet[i];

                if (elem) {
                    var match = false;

                    elem = elem[dir];

                    while (elem) {
                        if (elem.sizcache === doneName) {
                            match = checkSet[elem.sizset];
                            break;
                        }

                        if (elem.nodeType === 1) {
                            if (!isXML) {
                                elem.sizcache = doneName;
                                elem.sizset = i;
                            }

                            if (typeof cur !== "string") {
                                if (elem === cur) {
                                    match = true;
                                    break;
                                }

                            } else if (Sizzle.filter(cur, [elem]).length > 0) {
                                match = elem;
                                break;
                            }
                        }

                        elem = elem[dir];
                    }

                    checkSet[i] = match;
                }
            }
        }

        if (document.documentElement.contains) {
            Sizzle.contains = function (a, b) {
                return a !== b && (a.contains ? a.contains(b) : true);
            };

        } else if (document.documentElement.compareDocumentPosition) {
            Sizzle.contains = function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16);
            };

        } else {
            Sizzle.contains = function () {
                return false;
            };
        }

        Sizzle.isXML = function (elem) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833) 
            var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };

        var posProcess = function (selector, context) {
            var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

            // Position selectors must be done after the filter
            // And so must :not(positional) so we move all PSEUDOs to the end
            while ((match = Expr.match.PSEUDO.exec(selector))) {
                later += match[0];
                selector = selector.replace(Expr.match.PSEUDO, "");
            }

            selector = Expr.relative[selector] ? selector + "*" : selector;

            for (var i = 0, l = root.length; i < l; i++) {
                Sizzle(selector, root[i], tmpSet);
            }

            return Sizzle.filter(later, tmpSet);
        };

        // EXPOSE
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.filters;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;


    })();


    var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
    // Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS,
    // methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
	    children: true,
	    contents: true,
	    next: true,
	    prev: true
	};

    jQuery.fn.extend({
        find: function (selector) {
            var self = this,
			i, l;

            if (typeof selector !== "string") {
                return jQuery(selector).filter(function () {
                    for (i = 0, l = self.length; i < l; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                });
            }

            var ret = this.pushStack("", "find", selector),
			length, n, r;

            for (i = 0, l = this.length; i < l; i++) {
                length = ret.length;
                jQuery.find(selector, this[i], ret);

                if (i > 0) {
                    // Make sure that the results are unique
                    for (n = length; n < ret.length; n++) {
                        for (r = 0; r < length; r++) {
                            if (ret[r] === ret[n]) {
                                ret.splice(n--, 1);
                                break;
                            }
                        }
                    }
                }
            }

            return ret;
        },

        has: function (target) {
            var targets = jQuery(target);
            return this.filter(function () {
                for (var i = 0, l = targets.length; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },

        not: function (selector) {
            return this.pushStack(winnow(this, selector, false), "not", selector);
        },

        filter: function (selector) {
            return this.pushStack(winnow(this, selector, true), "filter", selector);
        },

        is: function (selector) {
            return !!selector && (typeof selector === "string" ?
			jQuery.filter(selector, this).length > 0 :
			this.filter(selector).length > 0);
        },

        closest: function (selectors, context) {
            var ret = [], i, l, cur = this[0];

            // Array
            if (jQuery.isArray(selectors)) {
                var match, selector,
				matches = {},
				level = 1;

                if (cur && selectors.length) {
                    for (i = 0, l = selectors.length; i < l; i++) {
                        selector = selectors[i];

                        if (!matches[selector]) {
                            matches[selector] = POS.test(selector) ?
							jQuery(selector, context || this.context) :
							selector;
                        }
                    }

                    while (cur && cur.ownerDocument && cur !== context) {
                        for (selector in matches) {
                            match = matches[selector];

                            if (match.jquery ? match.index(cur) > -1 : jQuery(cur).is(match)) {
                                ret.push({ selector: selector, elem: cur, level: level });
                            }
                        }

                        cur = cur.parentNode;
                        level++;
                    }
                }

                return ret;
            }

            // String
            var pos = POS.test(selectors) || typeof selectors !== "string" ?
				jQuery(selectors, context || this.context) :
				0;

            for (i = 0, l = this.length; i < l; i++) {
                cur = this[i];

                while (cur) {
                    if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
                        ret.push(cur);
                        break;

                    } else {
                        cur = cur.parentNode;
                        if (!cur || !cur.ownerDocument || cur === context || cur.nodeType === 11) {
                            break;
                        }
                    }
                }
            }

            ret = ret.length > 1 ? jQuery.unique(ret) : ret;

            return this.pushStack(ret, "closest", selectors);
        },

        // Determine the position of an element within
        // the matched set of elements
        index: function (elem) {
            if (!elem || typeof elem === "string") {
                return jQuery.inArray(this[0],
                // If it receives a string, the selector is used
                // If it receives nothing, the siblings are used
				elem ? jQuery(elem) : this.parent().children());
            }
            // Locate the position of the desired element
            return jQuery.inArray(
            // If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this);
        },

        add: function (selector, context) {
            var set = typeof selector === "string" ?
				jQuery(selector, context) :
				jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
			all = jQuery.merge(this.get(), set);

            return this.pushStack(isDisconnected(set[0]) || isDisconnected(all[0]) ?
			all :
			jQuery.unique(all));
        },

        andSelf: function () {
            return this.add(this.prevObject);
        }
    });

    // A painfully simple check to see if an element is disconnected
    // from a document (should be improved, where feasible).
    function isDisconnected(node) {
        return !node || !node.parentNode || node.parentNode.nodeType === 11;
    }

    jQuery.each({
        parent: function (elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function (elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function (elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function (elem) {
            return jQuery.nth(elem, 2, "nextSibling");
        },
        prev: function (elem) {
            return jQuery.nth(elem, 2, "previousSibling");
        },
        nextAll: function (elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function (elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function (elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function (elem) {
            return jQuery.sibling(elem.parentNode.firstChild, elem);
        },
        children: function (elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function (elem) {
            return jQuery.nodeName(elem, "iframe") ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray(elem.childNodes);
        }
    }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
            var ret = jQuery.map(this, fn, until),
            // The variable 'args' was introduced in
            // https://github.com/jquery/jquery/commit/52a0238
            // to work around a bug in Chrome 10 (Dev) and should be removed when the bug is fixed.
            // http://code.google.com/p/v8/issues/detail?id=1050
			args = slice.call(arguments);

            if (!runtil.test(name)) {
                selector = until;
            }

            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }

            ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;

            if ((this.length > 1 || rmultiselector.test(selector)) && rparentsprev.test(name)) {
                ret = ret.reverse();
            }

            return this.pushStack(ret, name, args.join(","));
        };
    });

    jQuery.extend({
        filter: function (expr, elems, not) {
            if (not) {
                expr = ":not(" + expr + ")";
            }

            return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] :
			jQuery.find.matches(expr, elems);
        },

        dir: function (elem, dir, until) {
            var matched = [],
			cur = elem[dir];

            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },

        nth: function (cur, result, dir, elem) {
            result = result || 1;
            var num = 0;

            for (; cur; cur = cur[dir]) {
                if (cur.nodeType === 1 && ++num === result) {
                    break;
                }
            }

            return cur;
        },

        sibling: function (n, elem) {
            var r = [];

            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n);
                }
            }

            return r;
        }
    });

    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, keep) {

        // Can't pass null or undefined to indexOf in Firefox 4
        // Set to 0 to skip string check
        qualifier = qualifier || 0;

        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) {
                var retVal = !!qualifier.call(elem, i, elem);
                return retVal === keep;
            });

        } else if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem, i) {
                return (elem === qualifier) === keep;
            });

        } else if (typeof qualifier === "string") {
            var filtered = jQuery.grep(elements, function (elem) {
                return elem.nodeType === 1;
            });

            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, filtered, !keep);
            } else {
                qualifier = jQuery.filter(qualifier, filtered);
            }
        }

        return jQuery.grep(elements, function (elem, i) {
            return (jQuery.inArray(elem, qualifier) >= 0) === keep;
        });
    }




    var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnocache = /<(?:script|object|embed|option|style)/i,
    // checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
	    option: [1, "<select multiple='multiple'>", "</select>"],
	    legend: [1, "<fieldset>", "</fieldset>"],
	    thead: [1, "<table>", "</table>"],
	    tr: [2, "<table><tbody>", "</tbody></table>"],
	    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
	    area: [1, "<map>", "</map>"],
	    _default: [0, "", ""]
	};

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    // IE can't serialize <link> and <script> tags normally
    if (!jQuery.support.htmlSerialize) {
        wrapMap._default = [1, "div<div>", "</div>"];
    }

    jQuery.fn.extend({
        text: function (text) {
            if (jQuery.isFunction(text)) {
                return this.each(function (i) {
                    var self = jQuery(this);

                    self.text(text.call(this, i, self.text()));
                });
            }

            if (typeof text !== "object" && text !== undefined) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(text));
            }

            return jQuery.text(this);
        },

        wrapAll: function (html) {
            if (jQuery.isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }

            if (this[0]) {
                // The elements to wrap the target around
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }

                wrap.map(function () {
                    var elem = this;

                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }

                    return elem;
                }).append(this);
            }

            return this;
        },

        wrapInner: function (html) {
            if (jQuery.isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }

            return this.each(function () {
                var self = jQuery(this),
				contents = self.contents();

                if (contents.length) {
                    contents.wrapAll(html);

                } else {
                    self.append(html);
                }
            });
        },

        wrap: function (html) {
            return this.each(function () {
                jQuery(this).wrapAll(html);
            });
        },

        unwrap: function () {
            return this.parent().each(function () {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        },

        append: function () {
            return this.domManip(arguments, true, function (elem) {
                if (this.nodeType === 1) {
                    this.appendChild(elem);
                }
            });
        },

        prepend: function () {
            return this.domManip(arguments, true, function (elem) {
                if (this.nodeType === 1) {
                    this.insertBefore(elem, this.firstChild);
                }
            });
        },

        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (elem) {
                    this.parentNode.insertBefore(elem, this);
                });
            } else if (arguments.length) {
                var set = jQuery(arguments[0]);
                set.push.apply(set, this.toArray());
                return this.pushStack(set, "before", arguments);
            }
        },

        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (elem) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                });
            } else if (arguments.length) {
                var set = this.pushStack(this, "after", arguments);
                set.push.apply(set, jQuery(arguments[0]).toArray());
                return set;
            }
        },

        // keepData is for internal use only--do not document
        remove: function (selector, keepData) {
            for (var i = 0, elem; (elem = this[i]) != null; i++) {
                if (!selector || jQuery.filter(selector, [elem]).length) {
                    if (!keepData && elem.nodeType === 1) {
                        jQuery.cleanData(elem.getElementsByTagName("*"));
                        jQuery.cleanData([elem]);
                    }

                    if (elem.parentNode) {
                        elem.parentNode.removeChild(elem);
                    }
                }
            }

            return this;
        },

        empty: function () {
            for (var i = 0, elem; (elem = this[i]) != null; i++) {
                // Remove element nodes and prevent memory leaks
                if (elem.nodeType === 1) {
                    jQuery.cleanData(elem.getElementsByTagName("*"));
                }

                // Remove any remaining nodes
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
            }

            return this;
        },

        clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },

        html: function (value) {
            if (value === undefined) {
                return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

                // See if we can take a shortcut and just use innerHTML
            } else if (typeof value === "string" && !rnocache.test(value) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
			!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                value = value.replace(rxhtmlTag, "<$1></$2>");

                try {
                    for (var i = 0, l = this.length; i < l; i++) {
                        // Remove element nodes and prevent memory leaks
                        if (this[i].nodeType === 1) {
                            jQuery.cleanData(this[i].getElementsByTagName("*"));
                            this[i].innerHTML = value;
                        }
                    }

                    // If using innerHTML throws an exception, use the fallback method
                } catch (e) {
                    this.empty().append(value);
                }

            } else if (jQuery.isFunction(value)) {
                this.each(function (i) {
                    var self = jQuery(this);

                    self.html(value.call(this, i, self.html()));
                });

            } else {
                this.empty().append(value);
            }

            return this;
        },

        replaceWith: function (value) {
            if (this[0] && this[0].parentNode) {
                // Make sure that the elements are removed from the DOM before they are inserted
                // this can help fix replacing a parent with child elements
                if (jQuery.isFunction(value)) {
                    return this.each(function (i) {
                        var self = jQuery(this), old = self.html();
                        self.replaceWith(value.call(this, i, old));
                    });
                }

                if (typeof value !== "string") {
                    value = jQuery(value).detach();
                }

                return this.each(function () {
                    var next = this.nextSibling,
					parent = this.parentNode;

                    jQuery(this).remove();

                    if (next) {
                        jQuery(next).before(value);
                    } else {
                        jQuery(parent).append(value);
                    }
                });
            } else {
                return this.length ?
				this.pushStack(jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value) :
				this;
            }
        },

        detach: function (selector) {
            return this.remove(selector, true);
        },

        domManip: function (args, table, callback) {
            var results, first, fragment, parent,
			value = args[0],
			scripts = [];

            // We can't cloneNode fragments that contain checked, in WebKit
            if (!jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test(value)) {
                return this.each(function () {
                    jQuery(this).domManip(args, table, callback, true);
                });
            }

            if (jQuery.isFunction(value)) {
                return this.each(function (i) {
                    var self = jQuery(this);
                    args[0] = value.call(this, i, table ? self.html() : undefined);
                    self.domManip(args, table, callback);
                });
            }

            if (this[0]) {
                parent = value && value.parentNode;

                // If we're in a fragment, just use that instead of building a new one
                if (jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length) {
                    results = { fragment: parent };

                } else {
                    results = jQuery.buildFragment(args, this, scripts);
                }

                fragment = results.fragment;

                if (fragment.childNodes.length === 1) {
                    first = fragment = fragment.firstChild;
                } else {
                    first = fragment.firstChild;
                }

                if (first) {
                    table = table && jQuery.nodeName(first, "tr");

                    for (var i = 0, l = this.length, lastIndex = l - 1; i < l; i++) {
                        callback.call(
						table ?
							root(this[i], first) :
							this[i],
                        // Make sure that we do not leak memory by inadvertently discarding
                        // the original fragment (which might have attached data) instead of
                        // using it; in addition, use the original fragment object for the last
                        // item instead of first because it can end up being emptied incorrectly
                        // in certain situations (Bug #8070).
                        // Fragments from the fragment cache must always be cloned and never used
                        // in place.
						results.cacheable || (l > 1 && i < lastIndex) ?
							jQuery.clone(fragment, true, true) :
							fragment
					);
                    }
                }

                if (scripts.length) {
                    jQuery.each(scripts, evalScript);
                }
            }

            return this;
        }
    });

    function root(elem, cur) {
        return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
    }

    function cloneCopyEvent(src, dest) {

        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }

        var internalKey = jQuery.expando,
		oldData = jQuery.data(src),
		curData = jQuery.data(dest, oldData);

        // Switch to use the internal data object, if it exists, for the next
        // stage of data copying
        if ((oldData = oldData[internalKey])) {
            var events = oldData.events;
            curData = curData[internalKey] = jQuery.extend({}, oldData);

            if (events) {
                delete curData.handle;
                curData.events = {};

                for (var type in events) {
                    for (var i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type + (events[type][i].namespace ? "." : "") + events[type][i].namespace, events[type][i], events[type][i].data);
                    }
                }
            }
        }
    }

    function cloneFixAttributes(src, dest) {
        var nodeName;

        // We do not need to do anything for non-Elements
        if (dest.nodeType !== 1) {
            return;
        }

        // clearAttributes removes the attributes, which we don't want,
        // but also removes the attachEvent events, which we *do* want
        if (dest.clearAttributes) {
            dest.clearAttributes();
        }

        // mergeAttributes, in contrast, only merges back on the
        // original attributes, not the events
        if (dest.mergeAttributes) {
            dest.mergeAttributes(src);
        }

        nodeName = dest.nodeName.toLowerCase();

        // IE6-8 fail to clone children inside object elements that use
        // the proprietary classid attribute value (rather than the type
        // attribute) to identify the type of content to display
        if (nodeName === "object") {
            dest.outerHTML = src.outerHTML;

        } else if (nodeName === "input" && (src.type === "checkbox" || src.type === "radio")) {
            // IE6-8 fails to persist the checked state of a cloned checkbox
            // or radio button. Worse, IE6-7 fail to give the cloned element
            // a checked appearance if the defaultChecked value isn't also set
            if (src.checked) {
                dest.defaultChecked = dest.checked = src.checked;
            }

            // IE6-7 get confused and end up setting the value of a cloned
            // checkbox/radio button to an empty string instead of "on"
            if (dest.value !== src.value) {
                dest.value = src.value;
            }

            // IE6-8 fails to return the selected option to the default selected
            // state when cloning options
        } else if (nodeName === "option") {
            dest.selected = src.defaultSelected;

            // IE6-8 fails to set the defaultValue to the correct value when
            // cloning other types of input fields
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }

        // Event data gets referenced instead of copied if the expando
        // gets copied too
        dest.removeAttribute(jQuery.expando);
    }

    jQuery.buildFragment = function (args, nodes, scripts) {
        var fragment, cacheable, cacheresults, doc;

        // nodes may contain either an explicit document object,
        // a jQuery collection or context object.
        // If nodes[0] contains a valid object to assign to doc
        if (nodes && nodes[0]) {
            doc = nodes[0].ownerDocument || nodes[0];
        }

        // Ensure that an attr object doesn't incorrectly stand in as a document object
        // Chrome and Firefox seem to allow this to occur and will throw exception
        // Fixes #8950
        if (!doc.createDocumentFragment) {
            doc = document;
        }

        // Only cache "small" (1/2 KB) HTML strings that are associated with the main document
        // Cloning options loses the selected state, so don't cache them
        // IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
        // Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
        if (args.length === 1 && typeof args[0] === "string" && args[0].length < 512 && doc === document &&
		args[0].charAt(0) === "<" && !rnocache.test(args[0]) && (jQuery.support.checkClone || !rchecked.test(args[0]))) {

            cacheable = true;

            cacheresults = jQuery.fragments[args[0]];
            if (cacheresults && cacheresults !== 1) {
                fragment = cacheresults;
            }
        }

        if (!fragment) {
            fragment = doc.createDocumentFragment();
            jQuery.clean(args, doc, fragment, scripts);
        }

        if (cacheable) {
            jQuery.fragments[args[0]] = cacheresults ? fragment : 1;
        }

        return { fragment: fragment, cacheable: cacheable };
    };

    jQuery.fragments = {};

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var ret = [],
			insert = jQuery(selector),
			parent = this.length === 1 && this[0].parentNode;

            if (parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1) {
                insert[original](this[0]);
                return this;

            } else {
                for (var i = 0, l = insert.length; i < l; i++) {
                    var elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery(insert[i])[original](elems);
                    ret = ret.concat(elems);
                }

                return this.pushStack(ret, name, insert.selector);
            }
        };
    });

    function getAll(elem) {
        if ("getElementsByTagName" in elem) {
            return elem.getElementsByTagName("*");

        } else if ("querySelectorAll" in elem) {
            return elem.querySelectorAll("*");

        } else {
            return [];
        }
    }

    // Used in clean, fixes the defaultChecked property
    function fixDefaultChecked(elem) {
        if (elem.type === "checkbox" || elem.type === "radio") {
            elem.defaultChecked = elem.checked;
        }
    }
    // Finds all inputs and passes them to fixDefaultChecked
    function findInputs(elem) {
        if (jQuery.nodeName(elem, "input")) {
            fixDefaultChecked(elem);
        } else if ("getElementsByTagName" in elem) {
            jQuery.grep(elem.getElementsByTagName("input"), fixDefaultChecked);
        }
    }

    jQuery.extend({
        clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var clone = elem.cloneNode(true),
				srcElements,
				destElements,
				i;

            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // IE copies events bound via attachEvent when using cloneNode.
                // Calling detachEvent on the clone will also remove the events
                // from the original. In order to get around this, we use some
                // proprietary methods to clear the events. Thanks to MooTools
                // guys for this hotness.

                cloneFixAttributes(elem, clone);

                // Using Sizzle here is crazy slow, so we use getElementsByTagName
                // instead
                srcElements = getAll(elem);
                destElements = getAll(clone);

                // Weird iteration because IE will replace the length property
                // with an element if you are cloning the body and one of the
                // elements on the page has a name or id of "length"
                for (i = 0; srcElements[i]; ++i) {
                    cloneFixAttributes(srcElements[i], destElements[i]);
                }
            }

            // Copy the events from the original to the clone
            if (dataAndEvents) {
                cloneCopyEvent(elem, clone);

                if (deepDataAndEvents) {
                    srcElements = getAll(elem);
                    destElements = getAll(clone);

                    for (i = 0; srcElements[i]; ++i) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                }
            }

            srcElements = destElements = null;

            // Return the cloned set
            return clone;
        },

        clean: function (elems, context, fragment, scripts) {
            var checkScriptType;

            context = context || document;

            // !context.createElement fails in IE with an error but returns typeof 'object'
            if (typeof context.createElement === "undefined") {
                context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
            }

            var ret = [], j;

            for (var i = 0, elem; (elem = elems[i]) != null; i++) {
                if (typeof elem === "number") {
                    elem += "";
                }

                if (!elem) {
                    continue;
                }

                // Convert html string into DOM nodes
                if (typeof elem === "string") {
                    if (!rhtml.test(elem)) {
                        elem = context.createTextNode(elem);
                    } else {
                        // Fix "XHTML"-style tags in all browsers
                        elem = elem.replace(rxhtmlTag, "<$1></$2>");

                        // Trim whitespace, otherwise indexOf won't work as expected
                        var tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(),
						wrap = wrapMap[tag] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div");

                        // Go to html and back, then peel off extra wrappers
                        div.innerHTML = wrap[1] + elem + wrap[2];

                        // Move to the right depth
                        while (depth--) {
                            div = div.lastChild;
                        }

                        // Remove IE's autoinserted <tbody> from table fragments
                        if (!jQuery.support.tbody) {

                            // String was a <table>, *may* have spurious <tbody>
                            var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

                            // String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

                            for (j = tbody.length - 1; j >= 0; --j) {
                                if (jQuery.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) {
                                    tbody[j].parentNode.removeChild(tbody[j]);
                                }
                            }
                        }

                        // IE completely kills leading whitespace when innerHTML is used
                        if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                            div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
                        }

                        elem = div.childNodes;
                    }
                }

                // Resets defaultChecked for any radios and checkboxes
                // about to be appended to the DOM in IE 6/7 (#8060)
                var len;
                if (!jQuery.support.appendChecked) {
                    if (elem[0] && typeof (len = elem.length) === "number") {
                        for (j = 0; j < len; j++) {
                            findInputs(elem[j]);
                        }
                    } else {
                        findInputs(elem);
                    }
                }

                if (elem.nodeType) {
                    ret.push(elem);
                } else {
                    ret = jQuery.merge(ret, elem);
                }
            }

            if (fragment) {
                checkScriptType = function (elem) {
                    return !elem.type || rscriptType.test(elem.type);
                };
                for (i = 0; ret[i]; i++) {
                    if (scripts && jQuery.nodeName(ret[i], "script") && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript")) {
                        scripts.push(ret[i].parentNode ? ret[i].parentNode.removeChild(ret[i]) : ret[i]);

                    } else {
                        if (ret[i].nodeType === 1) {
                            var jsTags = jQuery.grep(ret[i].getElementsByTagName("script"), checkScriptType);

                            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                        }
                        fragment.appendChild(ret[i]);
                    }
                }
            }

            return ret;
        },

        cleanData: function (elems) {
            var data, id, cache = jQuery.cache, internalKey = jQuery.expando, special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

            for (var i = 0, elem; (elem = elems[i]) != null; i++) {
                if (elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()]) {
                    continue;
                }

                id = elem[jQuery.expando];

                if (id) {
                    data = cache[id] && cache[id][internalKey];

                    if (data && data.events) {
                        for (var type in data.events) {
                            if (special[type]) {
                                jQuery.event.remove(elem, type);

                                // This is a shortcut to avoid jQuery.event.remove's overhead
                            } else {
                                jQuery.removeEvent(elem, type, data.handle);
                            }
                        }

                        // Null the DOM reference to avoid IE6/7/8 leak (#7054)
                        if (data.handle) {
                            data.handle.elem = null;
                        }
                    }

                    if (deleteExpando) {
                        delete elem[jQuery.expando];

                    } else if (elem.removeAttribute) {
                        elem.removeAttribute(jQuery.expando);
                    }

                    delete cache[id];
                }
            }
        }
    });

    function evalScript(i, elem) {
        if (elem.src) {
            jQuery.ajax({
                url: elem.src,
                async: false,
                dataType: "script"
            });
        } else {
            jQuery.globalEval((elem.text || elem.textContent || elem.innerHTML || "").replace(rcleanScript, "/*$0*/"));
        }

        if (elem.parentNode) {
            elem.parentNode.removeChild(elem);
        }
    }



    var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
    // fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	rrelNum = /^[+\-]=/,
	rrelNumFilter = /[^+\-\.\de]+/g,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = ["Left", "Right"],
	cssHeight = ["Top", "Bottom"],
	curCSS,

	getComputedStyle,
	currentStyle;

    jQuery.fn.css = function (name, value) {
        // Setting 'undefined' is a no-op
        if (arguments.length === 2 && value === undefined) {
            return this;
        }

        return jQuery.access(this, name, value, true, function (elem, name, value) {
            return value !== undefined ?
			jQuery.style(elem, name, value) :
			jQuery.css(elem, name);
        });
    };

    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function (elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity", "opacity");
                        return ret === "" ? "1" : ret;

                    } else {
                        return elem.style.opacity;
                    }
                }
            }
        },

        // Exclude the following css properties to add px
        cssNumber: {
            "fillOpacity": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },

        // Get and set the style property on a DOM Node
        style: function (elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, origName = jQuery.camelCase(name),
			style = elem.style, hooks = jQuery.cssHooks[origName];

            name = jQuery.cssProps[origName] || origName;

            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;

                // Make sure that NaN and null values aren't set. See: #7116
                if (type === "number" && isNaN(value) || value == null) {
                    return;
                }

                // convert relative number strings (+= or -=) to relative numbers. #7345
                if (type === "string" && rrelNum.test(value)) {
                    value = +value.replace(rrelNumFilter, "") + parseFloat(jQuery.css(elem, name));
                    // Fixes bug #9237
                    type = "number";
                }

                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value)) !== undefined) {
                    // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
                    // Fixes bug #5509
                    try {
                        style[name] = value;
                    } catch (e) { }
                }

            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
            }
        },

        css: function (elem, name, extra) {
            var ret, hooks;

            // Make sure that we're working with the right name
            name = jQuery.camelCase(name);
            hooks = jQuery.cssHooks[name];
            name = jQuery.cssProps[name] || name;

            // cssFloat needs a special treatment
            if (name === "cssFloat") {
                name = "float";
            }

            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks && (ret = hooks.get(elem, true, extra)) !== undefined) {
                return ret;

                // Otherwise, if a way to get the computed value exists, use that
            } else if (curCSS) {
                return curCSS(elem, name);
            }
        },

        // A method for quickly swapping in/out CSS properties to get correct calculations
        swap: function (elem, options, callback) {
            var old = {};

            // Remember the old values, and insert the new ones
            for (var name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }

            callback.call(elem);

            // Revert the old values
            for (name in options) {
                elem.style[name] = old[name];
            }
        }
    });

    // DEPRECATED, Use jQuery.css() instead
    jQuery.curCSS = jQuery.css;

    jQuery.each(["height", "width"], function (i, name) {
        jQuery.cssHooks[name] = {
            get: function (elem, computed, extra) {
                var val;

                if (computed) {
                    if (elem.offsetWidth !== 0) {
                        return getWH(elem, name, extra);
                    } else {
                        jQuery.swap(elem, cssShow, function () {
                            val = getWH(elem, name, extra);
                        });
                    }

                    return val;
                }
            },

            set: function (elem, value) {
                if (rnumpx.test(value)) {
                    // ignore negative width and height values #1599
                    value = parseFloat(value);

                    if (value >= 0) {
                        return value + "px";
                    }

                } else {
                    return value;
                }
            }
        };
    });

    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function (elem, computed) {
                // IE uses filters for opacity
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ?
				(parseFloat(RegExp.$1) / 100) + "" :
				computed ? "1" : "";
            },

            set: function (elem, value) {
                var style = elem.style,
				currentStyle = elem.currentStyle;

                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;

                // Set the alpha filter to set the opacity
                var opacity = jQuery.isNaN(value) ?
				"" :
				"alpha(opacity=" + value * 100 + ")",
				filter = currentStyle && currentStyle.filter || style.filter || "";

                style.filter = ralpha.test(filter) ?
				filter.replace(ralpha, opacity) :
				filter + " " + opacity;
            }
        };
    }

    jQuery(function () {
        // This hook cannot be added until DOM ready because the support test
        // for it is not run until after DOM ready
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function (elem, computed) {
                    // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                    // Work around by temporarily setting element display to inline-block
                    var ret;
                    jQuery.swap(elem, { "display": "inline-block" }, function () {
                        if (computed) {
                            ret = curCSS(elem, "margin-right", "marginRight");
                        } else {
                            ret = elem.style.marginRight;
                        }
                    });
                    return ret;
                }
            };
        }
    });

    if (document.defaultView && document.defaultView.getComputedStyle) {
        getComputedStyle = function (elem, name) {
            var ret, defaultView, computedStyle;

            name = name.replace(rupper, "-$1").toLowerCase();

            if (!(defaultView = elem.ownerDocument.defaultView)) {
                return undefined;
            }

            if ((computedStyle = defaultView.getComputedStyle(elem, null))) {
                ret = computedStyle.getPropertyValue(name);
                if (ret === "" && !jQuery.contains(elem.ownerDocument.documentElement, elem)) {
                    ret = jQuery.style(elem, name);
                }
            }

            return ret;
        };
    }

    if (document.documentElement.currentStyle) {
        currentStyle = function (elem, name) {
            var left,
			ret = elem.currentStyle && elem.currentStyle[name],
			rsLeft = elem.runtimeStyle && elem.runtimeStyle[name],
			style = elem.style;

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            if (!rnumpx.test(ret) && rnum.test(ret)) {
                // Remember the original values
                left = style.left;

                // Put in the new values to get a computed value out
                if (rsLeft) {
                    elem.runtimeStyle.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : (ret || 0);
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                if (rsLeft) {
                    elem.runtimeStyle.left = rsLeft;
                }
            }

            return ret === "" ? "auto" : ret;
        };
    }

    curCSS = getComputedStyle || currentStyle;

    function getWH(elem, name, extra) {

        // Start with offset property
        var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		which = name === "width" ? cssWidth : cssHeight;

        if (val > 0) {
            if (extra !== "border") {
                jQuery.each(which, function () {
                    if (!extra) {
                        val -= parseFloat(jQuery.css(elem, "padding" + this)) || 0;
                    }
                    if (extra === "margin") {
                        val += parseFloat(jQuery.css(elem, extra + this)) || 0;
                    } else {
                        val -= parseFloat(jQuery.css(elem, "border" + this + "Width")) || 0;
                    }
                });
            }

            return val + "px";
        }

        // Fall back to computed then uncomputed css if necessary
        val = curCSS(elem, name, name);
        if (val < 0 || val == null) {
            val = elem.style[name] || 0;
        }
        // Normalize "", auto, and prepare for extra
        val = parseFloat(val) || 0;

        // Add padding, border, margin
        if (extra) {
            jQuery.each(which, function () {
                val += parseFloat(jQuery.css(elem, "padding" + this)) || 0;
                if (extra !== "padding") {
                    val += parseFloat(jQuery.css(elem, "border" + this + "Width")) || 0;
                }
                if (extra === "margin") {
                    val += parseFloat(jQuery.css(elem, extra + this)) || 0;
                }
            });
        }

        return val + "px";
    }

    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function (elem) {
            var width = elem.offsetWidth,
			height = elem.offsetHeight;

            return (width === 0 && height === 0) || (!jQuery.support.reliableHiddenOffsets && (elem.style.display || jQuery.css(elem, "display")) === "none");
        };

        jQuery.expr.filters.visible = function (elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
    }




    var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    // #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

    // Keep a copy of the old load method
	_load = jQuery.fn.load,

    /* Prefilters
    * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
    * 2) These are called:
    *    - BEFORE asking for a transport
    *    - AFTER param serialization (s.data is a string if s.processData is true)
    * 3) key is the dataType
    * 4) the catchall symbol "*" can be used
    * 5) execution will start with transport dataType and THEN continue down to "*" if needed
    */
	prefilters = {},

    /* Transports bindings
    * 1) key is the dataType
    * 2) the catchall symbol "*" can be used
    * 3) selection will start with transport dataType and THEN go to "*" if needed
    */
	transports = {},

    // Document location
	ajaxLocation,

    // Document location segments
	ajaxLocParts;

    // #8138, IE may throw an exception when accessing
    // a field from window.location if document.domain has been set
    try {
        ajaxLocation = location.href;
    } catch (e) {
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }

    // Segment location into parts
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            if (jQuery.isFunction(func)) {
                var dataTypes = dataTypeExpression.toLowerCase().split(rspacesAjax),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

                // For each dataType in the dataTypeExpression
                for (; i < length; i++) {
                    dataType = dataTypes[i];
                    // We control if we're asked to add before
                    // any existing element
                    placeBefore = /^\+/.test(dataType);
                    if (placeBefore) {
                        dataType = dataType.substr(1) || "*";
                    }
                    list = structure[dataType] = structure[dataType] || [];
                    // then we add to the structure accordingly
                    list[placeBefore ? "unshift" : "push"](func);
                }
            }
        };
    }

    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */) {

        dataType = dataType || options.dataTypes[0];
        inspected = inspected || {};

        inspected[dataType] = true;

        var list = structure[dataType],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = (structure === prefilters),
		selection;

        for (; i < length && (executeOnly || !selection); i++) {
            selection = list[i](options, originalOptions, jqXHR);
            // If we got redirected to another dataType
            // we try there if executing only and not done already
            if (typeof selection === "string") {
                if (!executeOnly || inspected[selection]) {
                    selection = undefined;
                } else {
                    options.dataTypes.unshift(selection);
                    selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected);
                }
            }
        }
        // If we're only executing or nothing was selected
        // we try the catchall dataType if not done already
        if ((executeOnly || !selection) && !inspected["*"]) {
            selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected);
        }
        // unnecessary when only executing (prefilters)
        // but it'll be ignored by the caller in that case
        return selection;
    }

    jQuery.fn.extend({
        load: function (url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments);

                // Don't do a request if no elements are being requested
            } else if (!this.length) {
                return this;
            }

            var off = url.indexOf(" ");
            if (off >= 0) {
                var selector = url.slice(off, url.length);
                url = url.slice(0, off);
            }

            // Default to a GET request
            var type = "GET";

            // If the second parameter was provided
            if (params) {
                // If it's a function
                if (jQuery.isFunction(params)) {
                    // We assume that it's the callback
                    callback = params;
                    params = undefined;

                    // Otherwise, build a param string
                } else if (typeof params === "object") {
                    params = jQuery.param(params, jQuery.ajaxSettings.traditional);
                    type = "POST";
                }
            }

            var self = this;

            // Request the remote document
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params,
                // Complete callback (responseText is used internally)
                complete: function (jqXHR, status, responseText) {
                    // Store the response as specified by the jqXHR object
                    responseText = jqXHR.responseText;
                    // If successful, inject the HTML into all the matched elements
                    if (jqXHR.isResolved()) {
                        // #4825: Get the actual response in case
                        // a dataFilter is present in ajaxSettings
                        jqXHR.done(function (r) {
                            responseText = r;
                        });
                        // See if a selector was specified
                        self.html(selector ?
                        // Create a dummy div to hold the results
						jQuery("<div>")
                        // inject the contents of the document in, removing the scripts
                        // to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

                        // Locate the specified elements
							.find(selector) :

                        // If not, just inject the full result
						responseText);
                    }

                    if (callback) {
                        self.each(callback, [responseText, status, jqXHR]);
                    }
                }
            });

            return this;
        },

        serialize: function () {
            return jQuery.param(this.serializeArray());
        },

        serializeArray: function () {
            return this.map(function () {
                return this.elements ? jQuery.makeArray(this.elements) : this;
            })
		.filter(function () {
		    return this.name && !this.disabled &&
				(this.checked || rselectTextarea.test(this.nodeName) ||
					rinput.test(this.type));
		})
		.map(function (i, elem) {
		    var val = jQuery(this).val();

		    return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map(val, function (val, i) {
					    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) :
					{ name: elem.name, value: val.replace(rCRLF, "\r\n") };
		}).get();
        }
    });

    // Attach a bunch of functions for handling common AJAX events
    jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (i, o) {
        jQuery.fn[o] = function (f) {
            return this.bind(o, f);
        };
    });

    jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {
            // shift arguments if data argument was omitted
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return jQuery.ajax({
                type: method,
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        };
    });

    jQuery.extend({

        getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        },

        getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function (target, settings) {
            if (!settings) {
                // Only one parameter, we extend ajaxSettings
                settings = target;
                target = jQuery.extend(true, jQuery.ajaxSettings, settings);
            } else {
                // target was provided, we extend into it
                jQuery.extend(true, target, jQuery.ajaxSettings, settings);
            }
            // Flatten fields we don't want deep extended
            for (var field in { context: 1, url: 1 }) {
                if (field in settings) {
                    target[field] = settings[field];
                } else if (field in jQuery.ajaxSettings) {
                    target[field] = jQuery.ajaxSettings[field];
                }
            }
            return target;
        },

        ajaxSettings: {
            url: ajaxLocation,
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            traditional: false,
            headers: {},
            */

            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },

            // List of data converters
            // 1) key format is "source_type destination_type" (a single space in-between)
            // 2) the catchall symbol "*" can be used for source_type
            converters: {

                // Convert anything to text
                "* text": window.String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,

                // Parse text as xml
                "text xml": jQuery.parseXML
            }
        },

        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        // Main method
        ajax: function (url, options) {

            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var // Create the final options object
			s = jQuery.ajaxSetup({}, options),
            // Callbacks context
			callbackContext = s.context || s,
            // Context for global events
            // It's the callbackContext if one was provided in the options
            // and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				(callbackContext.nodeType || callbackContext instanceof jQuery) ?
						jQuery(callbackContext) : jQuery.event,
            // Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery._Deferred(),
            // Status-dependent callbacks
			statusCode = s.statusCode || {},
            // ifModified key
			ifModifiedKey,
            // Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
            // Response headers
			responseHeadersString,
			responseHeaders,
            // transport
			transport,
            // timeout handle
			timeoutTimer,
            // Cross-domain detection vars
			parts,
            // The jqXHR state
			state = 0,
            // To know if global events are to be dispatched
			fireGlobals,
            // Loop variable
			i,
            // Fake xhr
			jqXHR = {

			    readyState: 0,

			    // Caches the header
			    setRequestHeader: function (name, value) {
			        if (!state) {
			            var lname = name.toLowerCase();
			            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
			            requestHeaders[name] = value;
			        }
			        return this;
			    },

			    // Raw string
			    getAllResponseHeaders: function () {
			        return state === 2 ? responseHeadersString : null;
			    },

			    // Builds headers hashtable if needed
			    getResponseHeader: function (key) {
			        var match;
			        if (state === 2) {
			            if (!responseHeaders) {
			                responseHeaders = {};
			                while ((match = rheaders.exec(responseHeadersString))) {
			                    responseHeaders[match[1].toLowerCase()] = match[2];
			                }
			            }
			            match = responseHeaders[key.toLowerCase()];
			        }
			        return match === undefined ? null : match;
			    },

			    // Overrides response content-type header
			    overrideMimeType: function (type) {
			        if (!state) {
			            s.mimeType = type;
			        }
			        return this;
			    },

			    // Cancel the request
			    abort: function (statusText) {
			        statusText = statusText || "abort";
			        if (transport) {
			            transport.abort(statusText);
			        }
			        done(0, statusText);
			        return this;
			    }
			};

            // Callback for when everything is done
            // It is defined here because jslint complains if it is declared
            // at the end of the function (which would be more logical and readable)
            function done(status, statusText, responses, headers) {

                // Called once
                if (state === 2) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status ? 4 : 0;

                var isSuccess,
				success,
				error,
				response = responses ? ajaxHandleResponses(s, jqXHR, responses) : undefined,
				lastModified,
				etag;

                // If successful, handle type chaining
                if (status >= 200 && status < 300 || status === 304) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {

                        if ((lastModified = jqXHR.getResponseHeader("Last-Modified"))) {
                            jQuery.lastModified[ifModifiedKey] = lastModified;
                        }
                        if ((etag = jqXHR.getResponseHeader("Etag"))) {
                            jQuery.etag[ifModifiedKey] = etag;
                        }
                    }

                    // If not modified
                    if (status === 304) {

                        statusText = "notmodified";
                        isSuccess = true;

                        // If we have data
                    } else {

                        try {
                            success = ajaxConvert(s, response);
                            statusText = "success";
                            isSuccess = true;
                        } catch (e) {
                            // We have a parsererror
                            statusText = "parsererror";
                            error = e;
                        }
                    }
                } else {
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    error = statusText;
                    if (!statusText || status) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = statusText;

                // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;

                if (fireGlobals) {
                    globalEventContext.trigger("ajax" + (isSuccess ? "Success" : "Error"),
						[jqXHR, s, isSuccess ? success : error]);
                }

                // Complete
                completeDeferred.resolveWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                    // Handle the global AJAX counter
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            // Attach deferreds
            deferred.promise(jqXHR);
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            jqXHR.complete = completeDeferred.done;

            // Status-dependent callbacks
            jqXHR.statusCode = function (map) {
                if (map) {
                    var tmp;
                    if (state < 2) {
                        for (tmp in map) {
                            statusCode[tmp] = [statusCode[tmp], map[tmp]];
                        }
                    } else {
                        tmp = map[jqXHR.status];
                        jqXHR.then(tmp, tmp);
                    }
                }
                return this;
            };

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // We also use the url parameter if available
            s.url = ((url || s.url) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

            // Extract dataTypes list
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().split(rspacesAjax);

            // Determine if a cross-domain request is in order
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts &&
				(parts[1] != ajaxLocParts[1] || parts[2] != ajaxLocParts[2] ||
					(parts[3] || (parts[1] === "http:" ? 80 : 443)) !=
						(ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443)))
			);
            }

            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }

            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

            // If request was aborted inside a prefiler, stop there
            if (state === 2) {
                return false;
            }

            // We can fire global events as of now if asked to
            fireGlobals = s.global;

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);

            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }

            // More options handling for requests with no content
            if (!s.hasContent) {

                // If data is available, append data to url
                if (s.data) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
                }

                // Get ifModifiedKey before adding the anti-cache parameter
                ifModifiedKey = s.url;

                // Add anti-cache in url if needed
                if (s.cache === false) {

                    var ts = jQuery.now(),
                    // try replacing _= if it is there
					ret = s.url.replace(rts, "$1_=" + ts);

                    // if nothing was replaced, add timestamp to the end
                    s.url = ret + ((ret === s.url) ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
                }
            }

            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                ifModifiedKey = ifModifiedKey || s.url;
                if (jQuery.lastModified[ifModifiedKey]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[ifModifiedKey]);
                }
                if (jQuery.etag[ifModifiedKey]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[ifModifiedKey]);
                }
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
				s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") :
				s.accepts["*"]
		);

            // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                // Abort if not done already
                jqXHR.abort();
                return false;

            }

            // Install callbacks on deferreds
            for (i in { success: 1, error: 1, complete: 1 }) {
                jqXHR[i](s[i]);
            }

            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

            // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                }
                // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function () {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }

                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Propagate exception as error if not done
                    if (status < 2) {
                        done(-1, e);
                        // Simply rethrow otherwise
                    } else {
                        jQuery.error(e);
                    }
                }
            }

            return jqXHR;
        },

        // Serialize an array of form elements or a set of
        // key/values into a query string
        param: function (a, traditional) {
            var s = [],
			add = function (key, value) {
			    // If value is a function, invoke it and return its value
			    value = jQuery.isFunction(value) ? value() : value;
			    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

            // Set traditional to true for jQuery <= 1.3.2 behavior.
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings.traditional;
            }

            // If an array was passed in, assume that it is an array of form elements.
            if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
                // Serialize the form elements
                jQuery.each(a, function () {
                    add(this.name, this.value);
                });

            } else {
                // If traditional, encode the "old" way (the way 1.3.2 or older
                // did it), otherwise encode params recursively.
                for (var prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }

            // Return the resulting serialization
            return s.join("&").replace(r20, "+");
        }
    });

    function buildParams(prefix, obj, traditional, add) {
        if (jQuery.isArray(obj)) {
            // Serialize array item.
            jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    add(prefix, v);

                } else {
                    // If array item is non-scalar (array or object), encode its
                    // numeric index to resolve deserialization ambiguity issues.
                    // Note that rack (as of 1.0.0) can't currently deserialize
                    // nested arrays properly, and attempting to do so may cause
                    // a server error. Possible fixes are to modify rack's
                    // deserialization algorithm or to provide an option or flag
                    // to force array serialization to be shallow.
                    buildParams(prefix + "[" + (typeof v === "object" || jQuery.isArray(v) ? i : "") + "]", v, traditional, add);
                }
            });

        } else if (!traditional && obj != null && typeof obj === "object") {
            // Serialize object item.
            for (var name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }

        } else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }

    // This is still on the jQuery object... for now
    // Want to move this to jQuery.ajax some day
    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {}

    });

    /* Handles responses to an ajax request:
    * - sets all responseXXX fields accordingly
    * - finds the right dataType (mediates between content-type and expected dataType)
    * - returns the corresponding response
    */
    function ajaxHandleResponses(s, jqXHR, responses) {

        var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

        // Fill responseXXX fields
        for (type in responseFields) {
            if (type in responses) {
                jqXHR[responseFields[type]] = responses[type];
            }
        }

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("content-type");
            }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

    // Chain conversions given the request and the original response
    function ajaxConvert(s, response) {

        // Apply the dataFilter if provided
        if (s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
        }

        var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
        // Current and previous dataTypes
		current = dataTypes[0],
		prev,
        // Conversion expression
		conversion,
        // Conversion function
		conv,
        // Conversion functions (transitive conversion)
		conv1,
		conv2;

        // For each dataType in the chain
        for (i = 1; i < length; i++) {

            // Create converters map
            // with lowercased keys
            if (i === 1) {
                for (key in s.converters) {
                    if (typeof key === "string") {
                        converters[key.toLowerCase()] = s.converters[key];
                    }
                }
            }

            // Get the dataTypes
            prev = current;
            current = dataTypes[i];

            // If current is auto dataType, update it to prev
            if (current === "*") {
                current = prev;
                // If no auto and dataTypes are actually different
            } else if (prev !== "*" && prev !== current) {

                // Get the converter
                conversion = prev + " " + current;
                conv = converters[conversion] || converters["* " + current];

                // If there is no direct converter, search transitively
                if (!conv) {
                    conv2 = undefined;
                    for (conv1 in converters) {
                        tmp = conv1.split(" ");
                        if (tmp[0] === prev || tmp[0] === "*") {
                            conv2 = converters[tmp[1] + " " + current];
                            if (conv2) {
                                conv1 = converters[conv1];
                                if (conv1 === true) {
                                    conv = conv2;
                                } else if (conv2 === true) {
                                    conv = conv1;
                                }
                                break;
                            }
                        }
                    }
                }
                // If we found no converter, dispatch an error
                if (!(conv || conv2)) {
                    jQuery.error("No conversion from " + conversion.replace(" ", " to "));
                }
                // If found converter is not an equivalence
                if (conv !== true) {
                    // Convert with 1 or 2 converters accordingly
                    response = conv ? conv(response) : conv2(conv1(response));
                }
            }
        }
        return response;
    }




    var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return jQuery.expando + "_" + (jsc++);
        }
    });

    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

        var inspectData = s.contentType === "application/x-www-form-urlencoded" &&
		(typeof s.data === "string");

        if (s.dataTypes[0] === "jsonp" ||
		s.jsonp !== false && (jsre.test(s.url) ||
				inspectData && jsre.test(s.data))) {

            var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[jsonpCallback],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

            if (s.jsonp !== false) {
                url = url.replace(jsre, replace);
                if (s.url === url) {
                    if (inspectData) {
                        data = data.replace(jsre, replace);
                    }
                    if (s.data === data) {
                        // Add callback manually
                        url += (/\?/.test(url) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
                    }
                }
            }

            s.url = url;
            s.data = data;

            // Install callback
            window[jsonpCallback] = function (response) {
                responseContainer = [response];
            };

            // Clean-up function
            jqXHR.always(function () {
                // Set callback back to previous value
                window[jsonpCallback] = previous;
                // Call if it was a function and we have a response
                if (responseContainer && jQuery.isFunction(previous)) {
                    window[jsonpCallback](responseContainer[0]);
                }
            });

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    jQuery.error(jsonpCallback + " was not called");
                }
                return responseContainer[0];
            };

            // force json dataType
            s.dataTypes[0] = "json";

            // Delegate to script
            return "script";
        }
    });




    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });

    // Handle cache's special case and global
    jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });

    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function (s) {

        // This transport only deals with cross domain requests
        if (s.crossDomain) {

            var script,
			head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;

            return {

                send: function (_, callback) {

                    script = document.createElement("script");

                    script.async = "async";

                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }

                    script.src = s.url;

                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function (_, isAbort) {

                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;

                            // Remove the script
                            if (head && script.parentNode) {
                                head.removeChild(script);
                            }

                            // Dereference the script
                            script = undefined;

                            // Callback if not abort
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };
                    // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
                    // This arises when a base node is used (#2709 and #4378).
                    head.insertBefore(script, head.firstChild);
                },

                abort: function () {
                    if (script) {
                        script.onload(0, 1);
                    }
                }
            };
        }
    });




    var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function () {
	    // Abort all pending requests
	    for (var key in xhrCallbacks) {
	        xhrCallbacks[key](0, 1);
	    }
	} : false,
	xhrId = 0,
	xhrCallbacks;

    // Functions to create xhrs
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) { }
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) { }
    }

    // Create the request object
    // (This is still attached to ajaxSettings for backward compatibility)
    jQuery.ajaxSettings.xhr = window.ActiveXObject ?
    /* Microsoft failed to properly
    * implement the XMLHttpRequest in IE7 (can't request local files),
    * so we use the ActiveXObject when it is available
    * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
    * we need a fallback.
    */
	function () {
	    return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
    // For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

    // Determine support properties
    (function (xhr) {
        jQuery.extend(jQuery.support, {
            ajax: !!xhr,
            cors: !!xhr && ("withCredentials" in xhr)
        });
    })(jQuery.ajaxSettings.xhr());

    // Create transport if the browser can provide an xhr
    if (jQuery.support.ajax) {

        jQuery.ajaxTransport(function (s) {
            // Cross domain only allowed if supported through XMLHttpRequest
            if (!s.crossDomain || jQuery.support.cors) {

                var callback;

                return {
                    send: function (headers, complete) {

                        // Get a new xhr
                        var xhr = s.xhr(),
						handle,
						i;

                        // Open the socket
                        // Passing null username, generates a login popup on Opera (#2865)
                        if (s.username) {
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                            xhr.open(s.type, s.url, s.async);
                        }

                        // Apply custom fields if provided
                        if (s.xhrFields) {
                            for (i in s.xhrFields) {
                                xhr[i] = s.xhrFields[i];
                            }
                        }

                        // Override mime type if needed
                        if (s.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(s.mimeType);
                        }

                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }

                        // Need an extra try/catch for cross domain requests in Firefox 3
                        try {
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } catch (_) { }

                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        xhr.send((s.hasContent && s.data) || null);

                        // Listener
                        callback = function (_, isAbort) {

                            var status,
							statusText,
							responseHeaders,
							responses,
							xml;

                            // Firefox throws exceptions when accessing properties
                            // of an xhr when a network error occured
                            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
                            try {

                                // Was never called and is aborted or complete
                                if (callback && (isAbort || xhr.readyState === 4)) {

                                    // Only called once
                                    callback = undefined;

                                    // Do not keep as active anymore
                                    if (handle) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            delete xhrCallbacks[handle];
                                        }
                                    }

                                    // If it's an abort
                                    if (isAbort) {
                                        // Abort it manually if needed
                                        if (xhr.readyState !== 4) {
                                            xhr.abort();
                                        }
                                    } else {
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        responses = {};
                                        xml = xhr.responseXML;

                                        // Construct response list
                                        if (xml && xml.documentElement /* #4958 */) {
                                            responses.xml = xml;
                                        }
                                        responses.text = xhr.responseText;

                                        // Firefox throws an exception when accessing
                                        // statusText for faulty cross-domain requests
                                        try {
                                            statusText = xhr.statusText;
                                        } catch (e) {
                                            // We normalize with Webkit giving an empty statusText
                                            statusText = "";
                                        }

                                        // Filter status for non standard behaviors

                                        // If the request is local and we have data: assume a success
                                        // (success with no data won't get notified, that's the best we
                                        // can do given current implementations)
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            status = responses.text ? 200 : 404;
                                            // IE - #1450: sometimes returns 1223 when it should be 204
                                        } else if (status === 1223) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                if (!isAbort) {
                                    complete(-1, firefoxAccessException);
                                }
                            }

                            // Call complete if needed
                            if (responses) {
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };

                        // if we're in sync mode or it's in cache
                        // and has been retrieved directly (IE6 & IE7)
                        // we need to manually fire the callback
                        if (!s.async || xhr.readyState === 4) {
                            callback();
                        } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                                // Create the active xhrs callbacks list if needed
                                // and attach the unload handler
                                if (!xhrCallbacks) {
                                    xhrCallbacks = {};
                                    jQuery(window).unload(xhrOnUnloadAbort);
                                }
                                // Add to list of active xhrs callbacks
                                xhrCallbacks[handle] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },

                    abort: function () {
                        if (callback) {
                            callback(0, 1);
                        }
                    }
                };
            }
        });
    }




    var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
    // height animations
		["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
    // width animations
		["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
    // opacity animations
		["opacity"]
	],
	fxNow,
	requestAnimationFrame = window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame;

    jQuery.fn.extend({
        show: function (speed, easing, callback) {
            var elem, display;

            if (speed || speed === 0) {
                return this.animate(genFx("show", 3), speed, easing, callback);

            } else {
                for (var i = 0, j = this.length; i < j; i++) {
                    elem = this[i];

                    if (elem.style) {
                        display = elem.style.display;

                        // Reset the inline display of this element to learn if it is
                        // being hidden by cascaded rules or not
                        if (!jQuery._data(elem, "olddisplay") && display === "none") {
                            display = elem.style.display = "";
                        }

                        // Set elements which have been overridden with display: none
                        // in a stylesheet to whatever the default browser style is
                        // for such an element
                        if (display === "" && jQuery.css(elem, "display") === "none") {
                            jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
                        }
                    }
                }

                // Set the display of most of the elements in a second loop
                // to avoid the constant reflow
                for (i = 0; i < j; i++) {
                    elem = this[i];

                    if (elem.style) {
                        display = elem.style.display;

                        if (display === "" || display === "none") {
                            elem.style.display = jQuery._data(elem, "olddisplay") || "";
                        }
                    }
                }

                return this;
            }
        },

        hide: function (speed, easing, callback) {
            if (speed || speed === 0) {
                return this.animate(genFx("hide", 3), speed, easing, callback);

            } else {
                for (var i = 0, j = this.length; i < j; i++) {
                    if (this[i].style) {
                        var display = jQuery.css(this[i], "display");

                        if (display !== "none" && !jQuery._data(this[i], "olddisplay")) {
                            jQuery._data(this[i], "olddisplay", display);
                        }
                    }
                }

                // Set the display of the elements in a second loop
                // to avoid the constant reflow
                for (i = 0; i < j; i++) {
                    if (this[i].style) {
                        this[i].style.display = "none";
                    }
                }

                return this;
            }
        },

        // Save the old toggle function
        _toggle: jQuery.fn.toggle,

        toggle: function (fn, fn2, callback) {
            var bool = typeof fn === "boolean";

            if (jQuery.isFunction(fn) && jQuery.isFunction(fn2)) {
                this._toggle.apply(this, arguments);

            } else if (fn == null || bool) {
                this.each(function () {
                    var state = bool ? fn : jQuery(this).is(":hidden");
                    jQuery(this)[state ? "show" : "hide"]();
                });

            } else {
                this.animate(genFx("toggle", 3), fn, fn2, callback);
            }

            return this;
        },

        fadeTo: function (speed, to, easing, callback) {
            return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({ opacity: to }, speed, easing, callback);
        },

        animate: function (prop, speed, easing, callback) {
            var optall = jQuery.speed(speed, easing, callback);

            if (jQuery.isEmptyObject(prop)) {
                return this.each(optall.complete, [false]);
            }

            // Do not change referenced properties as per-property easing will be lost
            prop = jQuery.extend({}, prop);

            return this[optall.queue === false ? "each" : "queue"](function () {
                // XXX 'this' does not always have a nodeName when running the
                // test suite

                if (optall.queue === false) {
                    jQuery._mark(this);
                }

                var opt = jQuery.extend({}, optall),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p,
				display, e,
				parts, start, end, unit;

                // will store per property easing and be used to determine when an animation is complete
                opt.animatedProperties = {};

                for (p in prop) {

                    // property name normalization
                    name = jQuery.camelCase(p);
                    if (p !== name) {
                        prop[name] = prop[p];
                        delete prop[p];
                    }

                    val = prop[name];

                    // easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
                    if (jQuery.isArray(val)) {
                        opt.animatedProperties[name] = val[1];
                        val = prop[name] = val[0];
                    } else {
                        opt.animatedProperties[name] = opt.specialEasing && opt.specialEasing[name] || opt.easing || 'swing';
                    }

                    if (val === "hide" && hidden || val === "show" && !hidden) {
                        return opt.complete.call(this);
                    }

                    if (isElement && (name === "height" || name === "width")) {
                        // Make sure that nothing sneaks out
                        // Record all 3 overflow attributes because IE does not
                        // change the overflow attribute when overflowX and
                        // overflowY are set to the same value
                        opt.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];

                        // Set display property to inline-block for height/width
                        // animations on inline elements that are having width/height
                        // animated
                        if (jQuery.css(this, "display") === "inline" &&
							jQuery.css(this, "float") === "none") {
                            if (!jQuery.support.inlineBlockNeedsLayout) {
                                this.style.display = "inline-block";

                            } else {
                                display = defaultDisplay(this.nodeName);

                                // inline-level elements accept inline-block;
                                // block-level elements need to be inline with layout
                                if (display === "inline") {
                                    this.style.display = "inline-block";

                                } else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1;
                                }
                            }
                        }
                    }
                }

                if (opt.overflow != null) {
                    this.style.overflow = "hidden";
                }

                for (p in prop) {
                    e = new jQuery.fx(this, opt, p);
                    val = prop[p];

                    if (rfxtypes.test(val)) {
                        e[val === "toggle" ? hidden ? "show" : "hide" : val]();

                    } else {
                        parts = rfxnum.exec(val);
                        start = e.cur();

                        if (parts) {
                            end = parseFloat(parts[2]);
                            unit = parts[3] || (jQuery.cssNumber[p] ? "" : "px");

                            // We need to compute starting value
                            if (unit !== "px") {
                                jQuery.style(this, p, (end || 1) + unit);
                                start = ((end || 1) / e.cur()) * start;
                                jQuery.style(this, p, start + unit);
                            }

                            // If a +=/-= token was provided, we're doing a relative animation
                            if (parts[1]) {
                                end = ((parts[1] === "-=" ? -1 : 1) * end) + start;
                            }

                            e.custom(start, end, unit);

                        } else {
                            e.custom(start, val, "");
                        }
                    }
                }

                // For JS strict compliance
                return true;
            });
        },

        stop: function (clearQueue, gotoEnd) {
            if (clearQueue) {
                this.queue([]);
            }

            this.each(function () {
                var timers = jQuery.timers,
				i = timers.length;
                // clear marker counters if we know they won't be
                if (!gotoEnd) {
                    jQuery._unmark(true, this);
                }
                while (i--) {
                    if (timers[i].elem === this) {
                        if (gotoEnd) {
                            // force the next step to be the last
                            timers[i](true);
                        }

                        timers.splice(i, 1);
                    }
                }
            });

            // start the next in the queue if the last step wasn't forced
            if (!gotoEnd) {
                this.dequeue();
            }

            return this;
        }

    });

    // Animations created synchronously will run synchronously
    function createFxNow() {
        setTimeout(clearFxNow, 0);
        return (fxNow = jQuery.now());
    }

    function clearFxNow() {
        fxNow = undefined;
    }

    // Generate parameters to create a standard animation
    function genFx(type, num) {
        var obj = {};

        jQuery.each(fxAttrs.concat.apply([], fxAttrs.slice(0, num)), function () {
            obj[this] = type;
        });

        return obj;
    }

    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show", 1),
        slideUp: genFx("hide", 1),
        slideToggle: genFx("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });

    jQuery.extend({
        speed: function (speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing ||
				jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };

            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

            // Queueing
            opt.old = opt.complete;
            opt.complete = function (noUnmark) {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this);
                }

                if (opt.queue !== false) {
                    jQuery.dequeue(this);
                } else if (noUnmark !== false) {
                    jQuery._unmark(this);
                }
            };

            return opt;
        },

        easing: {
            linear: function (p, n, firstNum, diff) {
                return firstNum + diff * p;
            },
            swing: function (p, n, firstNum, diff) {
                return ((-Math.cos(p * Math.PI) / 2) + 0.5) * diff + firstNum;
            }
        },

        timers: [],

        fx: function (elem, options, prop) {
            this.options = options;
            this.elem = elem;
            this.prop = prop;

            options.orig = options.orig || {};
        }

    });

    jQuery.fx.prototype = {
        // Simple function for setting a style value
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }

            (jQuery.fx.step[this.prop] || jQuery.fx.step._default)(this);
        },

        // Get the current size
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }

            var parsed,
			r = jQuery.css(this.elem, this.prop);
            // Empty strings, null, undefined and "auto" are converted to 0,
            // complex values such as "rotate(1rad)" are returned as is,
            // simple values such as "10px" are parsed to Float.
            return isNaN(parsed = parseFloat(r)) ? !r || r === "auto" ? 0 : r : parsed;
        },

        // Start an animation from one number to another
        custom: function (from, to, unit) {
            var self = this,
			fx = jQuery.fx,
			raf;

            this.startTime = fxNow || createFxNow();
            this.start = from;
            this.end = to;
            this.unit = unit || this.unit || (jQuery.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;

            function t(gotoEnd) {
                return self.step(gotoEnd);
            }

            t.elem = this.elem;

            if (t() && jQuery.timers.push(t) && !timerId) {
                // Use requestAnimationFrame instead of setInterval if available
                if (requestAnimationFrame) {
                    timerId = true;
                    raf = function () {
                        // When timerId gets set to null at any point, this stops
                        if (timerId) {
                            requestAnimationFrame(raf);
                            fx.tick();
                        }
                    };
                    requestAnimationFrame(raf);
                } else {
                    timerId = setInterval(fx.tick, fx.interval);
                }
            }
        },

        // Simple 'show' function
        show: function () {
            // Remember where we started, so that we can go back to it later
            this.options.orig[this.prop] = jQuery.style(this.elem, this.prop);
            this.options.show = true;

            // Begin the animation
            // Make sure that we start at a small width/height to avoid any
            // flash of content
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());

            // Start by showing the element
            jQuery(this.elem).show();
        },

        // Simple 'hide' function
        hide: function () {
            // Remember where we started, so that we can go back to it later
            this.options.orig[this.prop] = jQuery.style(this.elem, this.prop);
            this.options.hide = true;

            // Begin the animation
            this.custom(this.cur(), 0);
        },

        // Each step of an animation
        step: function (gotoEnd) {
            var t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options,
			i, n;

            if (gotoEnd || t >= options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();

                options.animatedProperties[this.prop] = true;

                for (i in options.animatedProperties) {
                    if (options.animatedProperties[i] !== true) {
                        done = false;
                    }
                }

                if (done) {
                    // Reset the overflow
                    if (options.overflow != null && !jQuery.support.shrinkWrapBlocks) {

                        jQuery.each(["", "X", "Y"], function (index, value) {
                            elem.style["overflow" + value] = options.overflow[index];
                        });
                    }

                    // Hide the element if the "hide" operation was done
                    if (options.hide) {
                        jQuery(elem).hide();
                    }

                    // Reset the properties, if the item has been hidden or shown
                    if (options.hide || options.show) {
                        for (var p in options.animatedProperties) {
                            jQuery.style(elem, p, options.orig[p]);
                        }
                    }

                    // Execute the complete function
                    options.complete.call(elem);
                }

                return false;

            } else {
                // classical easing cannot be used with an Infinity duration
                if (options.duration == Infinity) {
                    this.now = t;
                } else {
                    n = t - this.startTime;
                    this.state = n / options.duration;

                    // Perform the easing function, defaults to swing
                    this.pos = jQuery.easing[options.animatedProperties[this.prop]](this.state, n, 0, 1, options.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos);
                }
                // Perform the next step of the animation
                this.update();
            }

            return true;
        }
    };

    jQuery.extend(jQuery.fx, {
        tick: function () {
            for (var timers = jQuery.timers, i = 0; i < timers.length; ++i) {
                if (!timers[i]()) {
                    timers.splice(i--, 1);
                }
            }

            if (!timers.length) {
                jQuery.fx.stop();
            }
        },

        interval: 13,

        stop: function () {
            clearInterval(timerId);
            timerId = null;
        },

        speeds: {
            slow: 600,
            fast: 200,
            // Default speed
            _default: 400
        },

        step: {
            opacity: function (fx) {
                jQuery.style(fx.elem, "opacity", fx.now);
            },

            _default: function (fx) {
                if (fx.elem.style && fx.elem.style[fx.prop] != null) {
                    fx.elem.style[fx.prop] = (fx.prop === "width" || fx.prop === "height" ? Math.max(0, fx.now) : fx.now) + fx.unit;
                } else {
                    fx.elem[fx.prop] = fx.now;
                }
            }
        }
    });

    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function (elem) {
            return jQuery.grep(jQuery.timers, function (fn) {
                return elem === fn.elem;
            }).length;
        };
    }

    // Try to restore the default display value of an element
    function defaultDisplay(nodeName) {

        if (!elemdisplay[nodeName]) {

            var body = document.body,
			elem = jQuery("<" + nodeName + ">").appendTo(body),
			display = elem.css("display");

            elem.remove();

            // If the simple way fails,
            // get element's real default display by attaching it to a temp iframe
            if (display === "none" || display === "") {
                // No iframe to use yet, so create it
                if (!iframe) {
                    iframe = document.createElement("iframe");
                    iframe.frameBorder = iframe.width = iframe.height = 0;
                }

                body.appendChild(iframe);

                // Create a cacheable copy of the iframe document on first call.
                // IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
                // document to it; WebKit & Firefox won't allow reusing the iframe document.
                if (!iframeDoc || !iframe.createElement) {
                    iframeDoc = (iframe.contentWindow || iframe.contentDocument).document;
                    iframeDoc.write((document.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
                    iframeDoc.close();
                }

                elem = iframeDoc.createElement(nodeName);

                iframeDoc.body.appendChild(elem);

                display = jQuery.css(elem, "display");

                body.removeChild(iframe);
            }

            // Store the correct default display
            elemdisplay[nodeName] = display;
        }

        return elemdisplay[nodeName];
    }




    var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

    if ("getBoundingClientRect" in document.documentElement) {
        jQuery.fn.offset = function (options) {
            var elem = this[0], box;

            if (options) {
                return this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }

            if (!elem || !elem.ownerDocument) {
                return null;
            }

            if (elem === elem.ownerDocument.body) {
                return jQuery.offset.bodyOffset(elem);
            }

            try {
                box = elem.getBoundingClientRect();
            } catch (e) { }

            var doc = elem.ownerDocument,
			docElem = doc.documentElement;

            // Make sure we're not dealing with a disconnected DOM node
            if (!box || !jQuery.contains(docElem, elem)) {
                return box ? { top: box.top, left: box.left} : { top: 0, left: 0 };
            }

            var body = doc.body,
			win = getWindow(doc),
			clientTop = docElem.clientTop || body.clientTop || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top = box.top + scrollTop - clientTop,
			left = box.left + scrollLeft - clientLeft;

            return { top: top, left: left };
        };

    } else {
        jQuery.fn.offset = function (options) {
            var elem = this[0];

            if (options) {
                return this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }

            if (!elem || !elem.ownerDocument) {
                return null;
            }

            if (elem === elem.ownerDocument.body) {
                return jQuery.offset.bodyOffset(elem);
            }

            jQuery.offset.initialize();

            var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

            while ((elem = elem.parentNode) && elem !== body && elem !== docElem) {
                if (jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed") {
                    break;
                }

                computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
                top -= elem.scrollTop;
                left -= elem.scrollLeft;

                if (elem === offsetParent) {
                    top += elem.offsetTop;
                    left += elem.offsetLeft;

                    if (jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && rtable.test(elem.nodeName))) {
                        top += parseFloat(computedStyle.borderTopWidth) || 0;
                        left += parseFloat(computedStyle.borderLeftWidth) || 0;
                    }

                    prevOffsetParent = offsetParent;
                    offsetParent = elem.offsetParent;
                }

                if (jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible") {
                    top += parseFloat(computedStyle.borderTopWidth) || 0;
                    left += parseFloat(computedStyle.borderLeftWidth) || 0;
                }

                prevComputedStyle = computedStyle;
            }

            if (prevComputedStyle.position === "relative" || prevComputedStyle.position === "static") {
                top += body.offsetTop;
                left += body.offsetLeft;
            }

            if (jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed") {
                top += Math.max(docElem.scrollTop, body.scrollTop);
                left += Math.max(docElem.scrollLeft, body.scrollLeft);
            }

            return { top: top, left: left };
        };
    }

    jQuery.offset = {
        initialize: function () {
            var body = document.body, container = document.createElement("div"), innerDiv, checkDiv, table, td, bodyMarginTop = parseFloat(jQuery.css(body, "marginTop")) || 0,
			html = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";

            jQuery.extend(container.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" });

            container.innerHTML = html;
            body.insertBefore(container, body.firstChild);
            innerDiv = container.firstChild;
            checkDiv = innerDiv.firstChild;
            td = innerDiv.nextSibling.firstChild.firstChild;

            this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

            checkDiv.style.position = "fixed";
            checkDiv.style.top = "20px";

            // safari subtracts parent border width here which is 5px
            this.supportsFixedPosition = (checkDiv.offsetTop === 20 || checkDiv.offsetTop === 15);
            checkDiv.style.position = checkDiv.style.top = "";

            innerDiv.style.overflow = "hidden";
            innerDiv.style.position = "relative";

            this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

            this.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== bodyMarginTop);

            body.removeChild(container);
            jQuery.offset.initialize = jQuery.noop;
        },

        bodyOffset: function (body) {
            var top = body.offsetTop,
			left = body.offsetLeft;

            jQuery.offset.initialize();

            if (jQuery.offset.doesNotIncludeMarginInBodyOffset) {
                top += parseFloat(jQuery.css(body, "marginTop")) || 0;
                left += parseFloat(jQuery.css(body, "marginLeft")) || 0;
            }

            return { top: top, left: left };
        },

        setOffset: function (elem, options, i) {
            var position = jQuery.css(elem, "position");

            // set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }

            var curElem = jQuery(elem),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css(elem, "top"),
			curCSSLeft = jQuery.css(elem, "left"),
			calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

            // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }

            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }

            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }

            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };


    jQuery.fn.extend({
        position: function () {
            if (!this[0]) {
                return null;
            }

            var elem = this[0],

            // Get *real* offsetParent
		offsetParent = this.offsetParent(),

            // Get correct offsets
		offset = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0} : offsetParent.offset();

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top -= parseFloat(jQuery.css(elem, "marginTop")) || 0;
            offset.left -= parseFloat(jQuery.css(elem, "marginLeft")) || 0;

            // Add offsetParent borders
            parentOffset.top += parseFloat(jQuery.css(offsetParent[0], "borderTopWidth")) || 0;
            parentOffset.left += parseFloat(jQuery.css(offsetParent[0], "borderLeftWidth")) || 0;

            // Subtract the two offsets
            return {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        },

        offsetParent: function () {
            return this.map(function () {
                var offsetParent = this.offsetParent || document.body;
                while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent;
            });
        }
    });


    // Create scrollLeft and scrollTop methods
    jQuery.each(["Left", "Top"], function (i, name) {
        var method = "scroll" + name;

        jQuery.fn[method] = function (val) {
            var elem, win;

            if (val === undefined) {
                elem = this[0];

                if (!elem) {
                    return null;
                }

                win = getWindow(elem);

                // Return the scroll offset
                return win ? ("pageXOffset" in win) ? win[i ? "pageYOffset" : "pageXOffset"] :
				jQuery.support.boxModel && win.document.documentElement[method] ||
					win.document.body[method] :
				elem[method];
            }

            // Set the scroll offset
            return this.each(function () {
                win = getWindow(this);

                if (win) {
                    win.scrollTo(
					!i ? val : jQuery(win).scrollLeft(),
					 i ? val : jQuery(win).scrollTop()
				);

                } else {
                    this[method] = val;
                }
            });
        };
    });

    function getWindow(elem) {
        return jQuery.isWindow(elem) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
    }




    // Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
    jQuery.each(["Height", "Width"], function (i, name) {

        var type = name.toLowerCase();

        // innerHeight and innerWidth
        jQuery.fn["inner" + name] = function () {
            var elem = this[0];
            return elem && elem.style ?
			parseFloat(jQuery.css(elem, type, "padding")) :
			null;
        };

        // outerHeight and outerWidth
        jQuery.fn["outer" + name] = function (margin) {
            var elem = this[0];
            return elem && elem.style ?
			parseFloat(jQuery.css(elem, type, margin ? "margin" : "border")) :
			null;
        };

        jQuery.fn[type] = function (size) {
            // Get window width or height
            var elem = this[0];
            if (!elem) {
                return size == null ? null : this;
            }

            if (jQuery.isFunction(size)) {
                return this.each(function (i) {
                    var self = jQuery(this);
                    self[type](size.call(this, i, self[type]()));
                });
            }

            if (jQuery.isWindow(elem)) {
                // Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
                // 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
                var docElemProp = elem.document.documentElement["client" + name];
                return elem.document.compatMode === "CSS1Compat" && docElemProp ||
				elem.document.body["client" + name] || docElemProp;

                // Get document width or height
            } else if (elem.nodeType === 9) {
                // Either scroll[Width/Height] or offset[Width/Height], whichever is greater
                return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

                // Get or set width or height on the element
            } else if (size === undefined) {
                var orig = jQuery.css(elem, type),
				ret = parseFloat(orig);

                return jQuery.isNaN(ret) ? orig : ret;

                // Set the width or height on the element (default to pixels if value is unitless)
            } else {
                return this.css(type, typeof size === "string" ? size : size + "px");
            }
        };

    });


    // Expose jQuery to the global object
    window.jQuery = window.$ = jQuery;
})(window);


__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}

//bootPath
var bootPATH = __CreateJSPath("nui.js");

//debugger,�˱�����������ajax�����Ƿ񵯳�alert����ʾ��������
mini_debugger = true;   

window['nui_model']=window['nui_model']||'min';


//miniui
document.write('<script src="' + bootPATH + 'jquery/jquery-1.6.2.min.js" type="text/javascript"></sc' + 'ript>');
//document.write('<script src="' + bootPATH + 'jquery-1.8.1.min.js" type="text/javascript"></sc' + 'ript>');
//document.write('<script src="' + bootPATH + 'jquery-1.9.js" type="text/javascript"></sc' + 'ript>');

//Ĭ�ϼ���min
if(nui_model=='debug'){
	document.write('<script src="' + bootPATH + 'nui-debug.js" type="text/javascript" ></sc' + 'ript>');
}else if(nui_model=='source'){
	document.write('<script src="' + bootPATH + 'nui-source.js" type="text/javascript" ></sc' + 'ript>');
	document.write('<script src="' + bootPATH + 'source/ext/nui-ext.js" type="text/javascript" ></sc' + 'ript>');
}else{
    document.write('<script src="' + bootPATH + 'nui-min.js" type="text/javascript" ></sc' + 'ript>');
    document.write('<script src="' + bootPATH + 'zh_CN.js" type="text/javascript" ></sc' + 'ript>');
	document.write('<script src="' + bootPATH + 'houbao.js" type="text/javascript" ></sc' + 'ript>');
	//document.write('<script src="' + bootPATH + 'source/ext/nui-ext.js" type="text/javascript" ></sc' + 'ript>');
}
document.write('<link href="' + bootPATH + 'themes/default/miniui.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'themes/default/nui-ext.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'themes/icons.css" rel="stylesheet" type="text/css" />');
document.write('<script src="' + bootPATH + 'html5shiv.min.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'respond.min.js" type="text/javascript" ></sc' + 'ript>');
//skin
var skin = getCookie("miniuiSkin");
if (skin) {
    document.write('<link href="' + bootPATH + 'miniui/themes/' + skin + '/skin.css" rel="stylesheet" type="text/css" />');
}



////////////////////////////////////////////////////////////////////////////////////////
function getCookie(sName) {
    var aCookie = document.cookie.split("; ");
    var lastMatch = null;
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            lastMatch = aCrumb;
        }
    }
    if (lastMatch) {
        var v = lastMatch[1];
        if (v === undefined) return v;
        return unescape(v);
    }
    return null;
}

//window['nui']=window['mini'];

mini={components:{},uids:{},ux:{},doc:document,window:window,isReady:false,byClass:function(a,b){if(typeof b=="string"){b=mini.byId(b)}return jQuery("."+a,b)[0]},getComponents:function(){var a=[];for(var d in mini.components){var b=mini.components[d];if(b.isControl){a.push(b)}}return a},get:function(b){if(!b){return null}if(mini.isControl(b)){return b}if(typeof b=="string"){if(b.charAt(0)=="#"){b=b.substr(1)}}if(typeof b=="string"){return mini.components[b]}else{var a=mini.uids[b.uid];if(a&&a.el==b){return a}}return null},getbyUID:function(a){return mini.uids[a]},findControls:function(e,d){if(!e){return[]}d=d||mini;var a=[];var f=mini.uids;for(var c in f){var g=f[c];var b=e.call(d,g);if(b===true||b===1){a.push(g);if(b===1){break}}}return a},getChildControls:function(b){var c=b.el?b.el:b;var a=mini.findControls(function(d){if(!d.el||b==d){return false}if(mini.isAncestor(c,d.el)&&d.within){return true}return false});return a},emptyFn:function(){},createNameControls:function(h,g){if(!h||!h.el){return}if(!g){g="_"}var f=h.el;var b=mini.findControls(function(c){if(!c.el||!c.name){return false}if(mini.isAncestor(f,c.el)){return true}return false});for(var e=0,a=b.length;e<a;e++){var j=b[e];var d=g+j.name;if(g===true){d=j.name[0].toUpperCase()+j.name.substring(1,j.name.length)}h[d]=j}},getsbyName:function(d,a){var b=mini.isControl(a);var e=a;if(a&&b){a=a.el}a=mini.byId(a);a=a||document.body;var c=mini.findControls(function(g){if(!g.el){return false}if(g.name==d&&mini.isAncestor(a,g.el)){return true}return false},this);if(b&&c.length==0&&e&&e.getbyName){var f=e.getbyName(d);if(f){c.push(f)}}return c},getbyName:function(b,a){return mini.getsbyName(b,a)[0]},getParams:function(b){if(!b){b=location.href}b=b.split("?")[1];var g={};if(b){var e=b.split("&");for(var d=0,a=e.length;d<a;d++){var f=e[d].split("=");try{g[f[0]]=decodeURIComponent(unescape(f[1]))}catch(c){}}}return g},reg:function(a){this.components[a.id]=a;this.uids[a.uid]=a},unreg:function(a){delete mini.components[a.id];delete mini.uids[a.uid]},classes:{},uiClasses:{},getClass:function(a){if(!a){return null}return this.classes[a.toLowerCase()]},getClassByUICls:function(a){return this.uiClasses[a.toLowerCase()]},idPre:"mini-",idIndex:1,newId:function(a){return(a||this.idPre)+this.idIndex++},copyTo:function(c,b){if(c&&b){for(var a in b){c[a]=b[a]}}return c},copyIf:function(c,b){if(c&&b){for(var a in b){if(mini.isNull(c[a])){c[a]=b[a]}}}return c},createDelegate:function(b,a){if(!b){return function(){}}return function(){return b.apply(a,arguments)}},isControl:function(a){return !!(a&&a.isControl)},isElement:function(a){return a&&a.appendChild},isDate:function(a){return !!(a&&a.getFullYear)},isArray:function(a){return !!(a&&!!a.unshift)},isNull:function(a){return a===null||a===undefined},isNumber:function(a){return !isNaN(a)&&typeof a=="number"},isEquals:function(d,c){if(d!==0&&c!==0){if((mini.isNull(d)||d=="")&&(mini.isNull(c)||c=="")){return true}}if(d&&c&&d.getFullYear&&c.getFullYear){return d.getTime()===c.getTime()}if(typeof d=="object"&&typeof c=="object"){return d===c}return String(d)===String(c)},forEach:function(g,f,c){var d=g.clone();for(var b=0,a=d.length;b<a;b++){var e=d[b];if(f.call(c,e,b,g)===false){break}}},sort:function(c,b,a){a=a||c;c.sort(b)},removeNode:function(a){jQuery(a).remove()},elWarp:document.createElement("div")};if(typeof mini_debugger=="undefined"){mini_debugger=true}if(typeof mini_useShims=="undefined"){mini_useShims=false}mini_regClass=function(a,b){b=b.toLowerCase();if(!mini.classes[b]){mini.classes[b]=a;a.prototype.type=b}var c=a.prototype.uiCls;if(!mini.isNull(c)&&!mini.uiClasses[c]){mini.uiClasses[c]=a}};mini_extend=function(e,b,f){if(typeof b!="function"){return this}var g=e,d=g.prototype,a=b.prototype;if(g.superclass==a){return}g.superclass=a;g.superclass.constructor=b;for(var c in a){d[c]=a[c]}if(f){for(var c in f){d[c]=f[c]}}return g};mini.copyTo(mini,{extend:mini_extend,regClass:mini_regClass,debug:false});mini.namespace=function(f){if(typeof f!="string"){return}f=f.split(".");var d=window;for(var c=0,a=f.length;c<a;c++){var b=f[c];var e=d[b];if(!e){e=d[b]={}}d=e}};mini._BindCallbacks=[];mini._BindEvents=function(b,a){mini._BindCallbacks.push([b,a]);if(!mini._EventTimer){mini._EventTimer=setTimeout(function(){mini._FireBindEvents()},50)}};mini._FireBindEvents=function(){for(var b=0,a=mini._BindCallbacks.length;b<a;b++){var c=mini._BindCallbacks[b];c[0].call(c[1])}mini._BindCallbacks=[];mini._EventTimer=null};mini._getFunctoin=function(f){if(typeof f!="string"){return null}var e=f.split(".");var d=null;for(var c=0,a=e.length;c<a;c++){var b=e[c];if(!d){d=window[b]}else{d=d[b]}if(!d){break}}return d};mini._getMap=function(name,obj){if(!name){return null}var index=name.indexOf(".");if(index==-1&&name.indexOf("[")==-1){return obj[name]}if(index==(name.length-1)){return obj[name]}var s="obj."+name;try{var v=eval(s)}catch(e){return null}return v};mini._setMap=function(a,m,e){if(!e){return}if(typeof a!="string"){return}var k=a.split(".");function g(r,p,o,n){var l=r[p];if(!l){l=r[p]=[]}for(var q=0;q<=o;q++){var s=l[q];if(!s){if(n===null||n===undefined){s=l[q]={}}else{s=l[q]=n}}}return r[p][o]}var c=null;for(var f=0,d=k.length;f<=d-1;f++){var a=k[f];if(f==d-1){if(a.indexOf("]")==-1){e[a]=m}else{var b=a.split("[");var j=b[0],h=parseInt(b[1]);g(e,j,h,"");e[j][h]=m}break}if(a.indexOf("]")==-1){c=e[a];if(f<=d-2&&c==null){e[a]=c={}}e=c}else{var b=a.split("[");var j=b[0],h=parseInt(b[1]);e=g(e,j,h)}}return m};mini.getAndCreate=function(a){if(!a){return null}if(typeof a=="string"){return mini.components[a]}if(typeof a=="object"){if(mini.isControl(a)){return a}else{if(mini.isElement(a)){return mini.uids[a.uid]}else{return mini.create(a)}}}return null};mini.create=function(a){if(!a){return null}if(mini.get(a.id)===a){return a}var b=this.getClass(a.type);if(!b){return null}var c=new b();c.set(a);return c};mini.Component=function(){this._events={};this.uid=mini.newId(this._idPre);this._id=this.uid;if(!this.id){this.id=this.uid}mini.reg(this)};mini.Component.prototype={isControl:true,id:null,_idPre:"mini-",_idSet:false,_canFire:true,set:function(e){if(typeof e=="string"){return this}var d=this._allowLayout;this._allowLayout=false;var f=e.renderTo||e.render;delete e.renderTo;delete e.render;for(var b in e){if(b.toLowerCase().indexOf("on")==0){if(this["_$"+b]){continue}var c=e[b];this.on(b.substring(2,b.length).toLowerCase(),c);delete e[b]}}for(var b in e){var a=e[b];var h="set"+b.charAt(0).toUpperCase()+b.substring(1,b.length);var g=this[h];if(g){g.call(this,a)}else{this[b]=a}}if(f&&this.render){this.render(f)}this._allowLayout=d;if(this.doLayout){this.doLayout()}return this},fire:function(d,e){if(this._canFire==false){return}d=d.toLowerCase();var b=this._events[d];if(b){if(!e){e={}}if(e&&e!=this){e.source=e.sender=this;if(!e.type){e.type=d}}for(var c=0,a=b.length;c<a;c++){var f=b[c];if(f){f[0].apply(f[1],[e])}}}},on:function(type,fn,scope){if(typeof fn=="string"){var f=mini._getFunctoin(fn);if(!f){var id=mini.newId("__str_");window[id]=fn;eval("fn = function(e){var s = "+id+";var fn = mini._getFunctoin(s); if(fn) {fn.call(this, e)}else{eval(s);}}")}else{fn=f}}if(typeof fn!="function"||!type){return false}type=type.toLowerCase();var event=this._events[type];if(!event){event=this._events[type]=[]}scope=scope||this;if(!this.findListener(type,fn,scope)){event.push([fn,scope])}return this},un:function(c,b,a){if(typeof b!="function"){return false}c=c.toLowerCase();var d=this._events[c];if(d){a=a||this;var e=this.findListener(c,b,a);if(e){d.remove(e)}}return this},findListener:function(f,e,d){f=f.toLowerCase();d=d||this;var b=this._events[f];if(b){for(var c=0,a=b.length;c<a;c++){var g=b[c];if(g[0]===e&&g[1]===d){return g}}}},setId:function(a){if(!a){throw new Error("id not null")}if(this._idSet){throw new Error("id just set only one")}mini.unreg(this);this.id=a;if(this.el){this.el.id=a}if(this._valueEl){this._valueEl.id=a+"$value"}if(this._textEl){this._textEl.id=a+"$text"}this._idSet=true;mini.reg(this)},getId:function(){return this.id},destroy:function(){mini.unreg(this);this.fire("destroy")}};mini.Control=function(){mini.Control.superclass.constructor.call(this);this._create();this.el.uid=this.uid;this._initEvents();if(this._clearBorder){this.el.style.borderWidth="0"}this.addCls(this.uiCls);this.setWidth(this.width);this.setHeight(this.height);this.el.style.display=this.visible?this._displayStyle:"none"};mini.extend(mini.Control,mini.Component,{jsName:null,width:"",height:"",visible:true,readOnly:false,enabled:true,tooltip:"",_readOnlyCls:"mini-readonly",_disabledCls:"mini-disabled",_create:function(){this.el=document.createElement("div")},_initEvents:function(){},within:function(a){if(mini.isAncestor(this.el,a.target)){return true}return false},name:"",setName:function(a){this.name=a},getName:function(){return this.name},isAutoHeight:function(){var a=this.el.style.height;return a=="auto"||a==""},isAutoWidth:function(){var a=this.el.style.width;return a=="auto"||a==""},isFixedSize:function(){var b=this.width;var a=this.height;if(parseInt(b)+"px"==b&&parseInt(a)+"px"==a){return true}return false},isRender:function(a){return !!(this.el&&this.el.parentNode&&this.el.parentNode.tagName)},render:function(b,a){if(typeof b==="string"){if(b=="#body"){b=document.body}else{b=mini.byId(b)}}if(!b){return}if(!a){a="append"}a=a.toLowerCase();if(a=="before"){jQuery(b).before(this.el)}else{if(a=="preend"){jQuery(b).preend(this.el)}else{if(a=="after"){jQuery(b).after(this.el)}else{b.appendChild(this.el)}}}this.el.id=this.id;this.doLayout();this.fire("render")},getEl:function(){return this.el},setJsName:function(a){this.jsName=a;window[a]=this},getJsName:function(){return this.jsName},setTooltip:function(a){this.tooltip=a;this.el.title=a;if(this.tooltipPlacement){jQuery(this.el).attr("data-placement",this.tooltipPlacement)}},getTooltip:function(){return this.tooltip},_sizeChanged:function(){this.doLayout()},setWidth:function(a){if(parseInt(a)==a){a+="px"}this.width=a;this.el.style.width=a;this._sizeChanged()},getWidth:function(d){var c=this.el;var a=d?jQuery(c).width():jQuery(c).outerWidth();if(d&&this._borderEl){var b=mini.getBorders(this._borderEl);a=a-b.left-b.right}return a},setHeight:function(a){if(parseInt(a)==a){a+="px"}this.height=a;this.el.style.height=a;this._sizeChanged()},getHeight:function(c){var b=c?jQuery(this.el).height():jQuery(this.el).outerHeight();if(c&&this._borderEl){var a=mini.getBorders(this._borderEl);b=b-a.top-a.bottom}return b},getBox:function(){return mini.getBox(this.el)},setBorderStyle:function(b){var a=this._borderEl||this.el;mini.setStyle(a,b);this.doLayout()},getBorderStyle:function(){return this.borderStyle},_clearBorder:true,setStyle:function(a){this.style=a;mini.setStyle(this.el,a);if(this._clearBorder){this.el.style.borderWidth="0";this.el.style.padding="0px"}this.width=this.el.style.width;this.height=this.el.style.height;this._sizeChanged()},getStyle:function(){return this.style},setCls:function(a){this.addCls(a)},getCls:function(){return this.cls},addCls:function(a){mini.addClass(this.el,a)},removeCls:function(a){mini.removeClass(this.el,a)},_doReadOnly:function(){if(this.readOnly){this.addCls(this._readOnlyCls)}else{this.removeCls(this._readOnlyCls)}},setReadOnly:function(a){this.readOnly=a;this._doReadOnly()},getReadOnly:function(){return this.readOnly},getParent:function(d){var b=document;var a=this.el.parentNode;while(a!=b&&a!=null){var c=mini.get(a);if(c){if(!mini.isControl(c)){return null}if(!d||c.uiCls==d){return c}}a=a.parentNode}return null},isReadOnly:function(){if(this.readOnly||!this.enabled){return true}var a=this.getParent();if(a){return a.isReadOnly()}return false},setEnabled:function(a){this.enabled=a;if(this.enabled){this.removeCls(this._disabledCls)}else{this.addCls(this._disabledCls)}this._doReadOnly()},getEnabled:function(){return this.enabled},enable:function(){this.setEnabled(true)},disable:function(){this.setEnabled(false)},_displayStyle:"",setVisible:function(a){this.visible=a;if(this.el){this.el.style.display=a?this._displayStyle:"none";this.doLayout()}},getVisible:function(){return this.visible},show:function(){this.setVisible(true)},hide:function(){this.setVisible(false)},isDisplay:function(c){if(mini.WindowVisible==false||!this.el){return false}var b=document.body;var a=this.el;while(1){if(a==null||!a.style){return false}if(a&&a.style&&a.style.display=="none"){if(c){if(c(a)!==true){return false}}else{return false}}if(a==b){return true}a=a.parentNode}return true},_allowUpdate:true,beginUpdate:function(){this._allowUpdate=false},endUpdate:function(){this._allowUpdate=true;this.doUpdate()},doUpdate:function(){},canLayout:function(){if(this._allowLayout==false){return false}return this.isDisplay()},doLayout:function(){},layoutChanged:function(){if(this.canLayout()==false){return}this.doLayout()},_destroyChildren:function(d){if(this.el){var c=mini.getChildControls(this);for(var b=0,a=c.length;b<a;b++){var e=c[b];if(e.destroyed!==true){e.destroy(d)}}}},destroy:function(a){if(this.destroyed!==true){this._destroyChildren(a)}if(this.el){mini.clearEvent(this.el);if(a!==false){var b=this.el.parentNode;if(b){b.removeChild(this.el)}}}this._borderEl=null;this.el=null;mini.unreg(this);this.destroyed=true;this.fire("destroy")},focus:function(){try{var a=this;a.el.focus()}catch(b){}},blur:function(){try{var a=this;a.el.blur()}catch(b){}},allowAnim:true,setAllowAnim:function(a){this.allowAnim=a},getAllowAnim:function(){return this.allowAnim},_getMaskWrapEl:function(){return this.el},mask:function(a){if(typeof a=="string"){a={html:a}}a=a||{};a.el=this._getMaskWrapEl();if(!a.cls){a.cls=this._maskCls}mini.mask(a)},unmask:function(){mini.unmask(this._getMaskWrapEl());this.isLoading=false},_maskCls:"mini-mask-loading",loadingMsg:"Loading...",loading:function(a){this.mask(a||this.loadingMsg)},setLoadingMsg:function(a){this.loadingMsg=a},getLoadingMsg:function(){return this.loadingMsg},_getContextMenu:function(b){var a=b;if(typeof b=="string"){a=mini.get(b);if(!a){mini.parse(b);a=mini.get(b)}}else{if(mini.isArray(b)){a={type:"menu",items:b}}else{if(!mini.isControl(b)){a=mini.create(b)}}}return a},__OnHtmlContextMenu:function(b){var a={popupEl:this.el,htmlEvent:b,cancel:false};this.contextMenu.fire("BeforeOpen",a);if(a.cancel==true){return}this.contextMenu.fire("opening",a);if(a.cancel==true){return}this.contextMenu.showAtPos(b.pageX,b.pageY);this.contextMenu.fire("Open",a);return false},contextMenu:null,setContextMenu:function(b){var a=this._getContextMenu(b);if(!a){return}if(this.contextMenu!==a){this.contextMenu=a;this.contextMenu.owner=this;mini.on(this.el,"contextmenu",this.__OnHtmlContextMenu,this)}},getContextMenu:function(){return this.contextMenu},setDefaultValue:function(a){this.defaultValue=a},getDefaultValue:function(){return this.defaultValue},setValue:function(a){this.value=a},getValue:function(){return this.value},ajaxData:null,ajaxType:"",setAjaxData:function(a){this.ajaxData=a},getAjaxData:function(){return this.ajaxData},setAjaxType:function(a){this.ajaxType=a},getAjaxType:function(){return this.ajaxType},_afterApply:function(a){},dataField:"",setDataField:function(a){this.dataField=a},getDataField:function(){return this.dataField},tabIndex:0,setTabIndex:function(b){var a=this._textEl||this.el;a.tabIndex=b;this.tabIndex=b},getTabIndex:function(){return this.tabIndex},getAttrs:function(el){var attrs={};var cls=el.className;if(cls){attrs.cls=cls}if(el.value){attrs.value=el.value}mini._ParseString(el,attrs,["id","name","width","height","borderStyle","value","defaultValue","tabIndex","contextMenu","tooltip","ondestroy","data-options","ajaxData","ajaxType","dataField","ajaxOptions","data-placement"]);if(attrs["data-placement"]){this.tooltipPlacement=attrs["data-placement"]}mini._ParseBool(el,attrs,["visible","enabled","readOnly"]);if(el.readOnly&&el.readOnly!="false"){attrs.readOnly=true}var style=el.style.cssText;if(style){attrs.style=style}if(isIE9){var bg=el.style.background;if(bg){if(!attrs.style){attrs.style=""}attrs.style+=";background:"+bg}}if(this.style){if(attrs.style){attrs.style=this.style+";"+attrs.style}else{attrs.style=this.style}}if(this.borderStyle){if(attrs.borderStyle){attrs.borderStyle=this.borderStyle+";"+attrs.borderStyle}else{attrs.borderStyle=this.borderStyle}}if(typeof attrs.ajaxOptions=="string"){attrs.ajaxOptions=eval("("+attrs.ajaxOptions+")")}var ts=mini._attrs;if(ts){for(var i=0,l=ts.length;i<l;i++){var t=ts[i];var name=t[0];var type=t[1];if(!type){type="string"}if(type=="string"){mini._ParseString(el,attrs,[name])}else{if(type=="bool"){mini._ParseBool(el,attrs,[name])}else{if(type=="int"){mini._ParseInt(el,attrs,[name])}}}}}var options=attrs["data-options"];if(options){options=eval("("+options+")");if(options){mini.copyTo(attrs,options)}}return attrs}});mini._attrs=null;mini.regHtmlAttr=function(a,b){if(!a){return}if(!b){b="string"}if(!mini._attrs){mini._attrs=[]}mini._attrs.push([a,b])};__mini_setControls=function(b,f,e){f=f||this._contentEl;e=e||this;if(!b){b=[]}if(!mini.isArray(b)){b=[b]}for(var d=0,a=b.length;d<a;d++){var g=b[d];if(typeof g=="string"){if(g.indexOf("#")==0){g=mini.byId(g)}}else{if(mini.isElement(g)){}else{g=mini.getAndCreate(g);g=g.el}}if(!g){continue}mini.append(f,g)}mini.parse(f);e.doLayout();return e};mini.Container=function(){mini.Container.superclass.constructor.call(this);this._contentEl=this.el};mini.extend(mini.Container,mini.Control,{setControls:__mini_setControls,getContentEl:function(){return this._contentEl},getBodyEl:function(){return this._contentEl},within:function(f){if(mini.isAncestor(this.el,f.target)){return true}var b=mini.getChildControls(this);for(var d=0,a=b.length;d<a;d++){var g=b[d];if(g.within(f)){return true}}return false}});mini.ValidatorBase=function(){mini.ValidatorBase.superclass.constructor.call(this)};mini.extend(mini.ValidatorBase,mini.Control,{required:false,requiredErrorText:"This field is required.",_requiredCls:"mini-required",errorText:"",_errorCls:"mini-error",_invalidCls:"mini-invalid",errorMode:"icon",validateOnChanged:true,validateOnLeave:true,_IsValid:true,isEditable:function(){if(this.readOnly||!this.allowInput||!this.enabled){return false}return true},_tryValidate:function(){if(this._tryValidateTimer){clearTimeout(this._tryValidateTimer)}var a=this;this._tryValidateTimer=setTimeout(function(){a.validate()},30)},validate:function(){if(this.enabled==false){this.setIsValid(true);return true}var a={value:this.getValue(),errorText:"",isValid:true};if(this.required){if(mini.isNull(a.value)||String(a.value).trim()===""){a.isValid=false;a.errorText=this.requiredErrorText}}this.fire("validation",a);this.errorText=a.errorText;this.setIsValid(a.isValid);return this.isValid()},isValid:function(){return this._IsValid},setIsValid:function(a){this._IsValid=a;this.doUpdateValid()},getIsValid:function(){return this._IsValid},setValidateOnChanged:function(a){this.validateOnChanged=a},getValidateOnChanged:function(a){return this.validateOnChanged},setValidateOnLeave:function(a){this.validateOnLeave=a},getValidateOnLeave:function(a){return this.validateOnLeave},setErrorMode:function(a){if(!a){a="none"}this.errorMode=a.toLowerCase();if(this._IsValid==false){this.doUpdateValid()}},getErrorMode:function(){return this.errorMode},setErrorText:function(a){this.errorText=a;if(this._IsValid==false){this.doUpdateValid()}},getErrorText:function(){return this.errorText},setRequired:function(a){this.required=a;if(this.required){this.addCls(this._requiredCls)}else{this.removeCls(this._requiredCls)}},getRequired:function(){return this.required},setRequiredErrorText:function(a){this.requiredErrorText=a},getRequiredErrorText:function(){return this.requiredErrorText},errorIconEl:null,getErrorIconEl:function(){return this._errorIconEl},_RemoveErrorIcon:function(){},doUpdateValid:function(){var a=this;a.__doUpdateValid()},errorTooltipPlacement:"right",__doUpdateValid:function(){if(!this.el){return}this.removeCls(this._errorCls);this.removeCls(this._invalidCls);if(this._IsValid==false){switch(this.errorMode){case"icon":this.addCls(this._errorCls);var a=this.getErrorIconEl();if(a){a.title=this.errorText;jQuery(a).attr("data-placement",this.errorTooltipPlacement)}break;case"border":this.addCls(this._invalidCls);this.el.title=this.errorText;default:this._RemoveErrorIcon();break}}else{this._RemoveErrorIcon()}this.doLayout()},doValueChanged:function(){this._OnValueChanged()},_OnValueChanged:function(){if(this.validateOnChanged){this._tryValidate()}this.fire("valuechanged",{value:this.getValue()})},onValueChanged:function(b,a){this.on("valuechanged",b,a)},onValidation:function(b,a){this.on("validation",b,a)},getAttrs:function(b){var a=mini.ValidatorBase.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["onvaluechanged","onvalidation","label","labelStyle","requiredErrorText","errorMode","errorTooltipPlacement"]);mini._ParseBool(b,a,["validateOnChanged","validateOnLeave","labelField"]);var d=b.getAttribute("required");if(!d){d=b.required}if(!d){var c=b.attributes.required;if(c){d=c.value=="null"?null:"true"}}if(d){a.required=d!="false"?true:false}return a},_labelLayout:function(){var b=this._borderEl;if(!b){return}this._labelLayouted=true;if(this.labelField){var a=this._labelEl.offsetWidth;b.style.marginLeft=a+"px";this._doLabelLayout=a===0}else{b.style.marginLeft=0}},_labelFieldCls:"mini-labelfield",labelField:false,label:"",labelStyle:"",setLabelField:function(a){if(this.labelField!=a){this.labelField=a;if(!this._borderEl){return}if(!this._labelEl){this._labelEl=mini.append(this.el,'<label class="mini-labelfield-label"></label>');this._labelEl.innerHTML=this.label;mini.setStyle(this._labelEl,this.labelStyle)}this._labelEl.style.display=a?"block":"none";if(a){mini.addClass(this.el,this._labelFieldCls)}else{mini.removeClass(this.el,this._labelFieldCls)}this._labelLayout()}},getLabelField:function(){this.labelField},setLabel:function(a){if(this.label!=a){this.label=a;if(this._labelEl){this._labelEl.innerHTML=a}this._labelLayout()}},getLabel:function(){this.label},setLabelStyle:function(a){if(this.labelStyle!=a){this.labelStyle=a;if(this._labelEl){mini.setStyle(this._labelEl,a)}this._labelLayout()}},getLabelStyle:function(){this.labelStyle}});mini.ListControl=function(){this.data=[];this._selecteds=[];mini.ListControl.superclass.constructor.call(this);this.doUpdate()};mini.ListControl.ajaxType="get";mini.extend(mini.ListControl,mini.ValidatorBase,{defaultValue:"",value:"",valueField:"id",textField:"text",dataField:"",delimiter:",",data:null,url:"",_itemCls:"mini-list-item",_itemHoverCls:"mini-list-item-hover",_itemSelectedCls:"mini-list-item-selected",set:function(d){if(typeof d=="string"){return this}var c=d.value;delete d.value;var a=d.url;delete d.url;var b=d.data;delete d.data;mini.ListControl.superclass.set.call(this,d);if(!mini.isNull(b)){this.setData(b)}if(!mini.isNull(a)){this.setUrl(a)}if(!mini.isNull(c)){this.setValue(c)}return this},uiCls:"mini-list",_create:function(){},_initEvents:function(){mini._BindEvents(function(){mini_onOne(this.el,"click",this.__OnClick,this);mini_onOne(this.el,"dblclick",this.__OnDblClick,this);mini_onOne(this.el,"mousedown",this.__OnMouseDown,this);mini_onOne(this.el,"mouseup",this.__OnMouseUp,this);mini_onOne(this.el,"mousemove",this.__OnMouseMove,this);mini_onOne(this.el,"mouseover",this.__OnMouseOver,this);mini_onOne(this.el,"mouseout",this.__OnMouseOut,this);mini_onOne(this.el,"keydown",this.__OnKeyDown,this);mini_onOne(this.el,"keyup",this.__OnKeyUp,this);mini_onOne(this.el,"contextmenu",this.__OnContextMenu,this)},this)},destroy:function(a){if(this.el){this.el.onclick=null;this.el.ondblclick=null;this.el.onmousedown=null;this.el.onmouseup=null;this.el.onmousemove=null;this.el.onmouseover=null;this.el.onmouseout=null;this.el.onkeydown=null;this.el.onkeyup=null;this.el.oncontextmenu=null}mini.ListControl.superclass.destroy.call(this,a)},name:"",setName:function(a){this.name=a;if(this._valueEl){mini.setAttr(this._valueEl,"name",this.name)}},getItemByEvent:function(c){var b=mini.findParent(c.target,this._itemCls);if(b){var a=parseInt(mini.getAttr(b,"index"));return this.data[a]}},addItemCls:function(c,a){var b=this.getItemEl(c);if(b){mini.addClass(b,a)}},removeItemCls:function(c,a){var b=this.getItemEl(c);if(b){mini.removeClass(b,a)}},getItemEl:function(b){b=this.getItem(b);var a=this.data.indexOf(b);var c=this._createItemId(a);return document.getElementById(c)},_focusItem:function(b,a){b=this.getItem(b);if(!b){return}var c=this.getItemEl(b);if(a&&c){this.scrollIntoView(b)}if(this._focusedItem==b){if(c){mini.addClass(c,this._itemHoverCls)}return}this._blurItem();this._focusedItem=b;if(c){mini.addClass(c,this._itemHoverCls)}},_blurItem:function(){if(!this._focusedItem){return}var a=this.getItemEl(this._focusedItem);if(a){mini.removeClass(a,this._itemHoverCls)}this._focusedItem=null},getFocusedItem:function(){var a=this._focusedItem;return this.indexOf(a)==-1?null:a},getFocusedIndex:function(){return this.data.indexOf(this._focusedItem)},_scrollViewEl:null,scrollIntoView:function(c){try{var b=this.getItemEl(c);var a=this._scrollViewEl||this.el;mini.scrollIntoView(b,a,false)}catch(d){}},getItem:function(a){if(typeof a=="object"){return a}if(typeof a=="number"){return this.data[a]}return this.findItems(a)[0]},getCount:function(){return this.data.length},indexOf:function(a){return this.data.indexOf(a)},getAt:function(a){return this.data[a]},updateItem:function(b,a){b=this.getItem(b);if(!b){return}mini.copyTo(b,a);this.doUpdate()},load:function(a){if(typeof a=="string"){this.setUrl(a)}else{this.setData(a)}},loadData:function(a){this.setData(a)},setData:function(data){if(typeof data=="string"){data=eval(data)}if(!mini.isArray(data)){data=[]}this.data=data;this.doUpdate();if(this.value!=""){this.deselectAll();var records=this.findItems(this.value);this.selects(records)}},getData:function(){return this.data.clone()},setUrl:function(a){this.url=a;this._doLoad({})},getUrl:function(){return this.url},ajaxData:null,_doLoad:function(params){try{var url=eval(this.url);if(url!=undefined){this.url=url}}catch(e){}var url=this.url;var ajaxMethod=mini.ListControl.ajaxType;if(url){if(url.indexOf(".txt")!=-1||url.indexOf(".json")!=-1){ajaxMethod="get"}}var obj=mini._evalAjaxData(this.ajaxData,this);mini.copyTo(params,obj);var e={url:this.url,async:false,type:this.ajaxType?this.ajaxType:ajaxMethod,data:params,params:params,cache:false,cancel:false};this.fire("beforeload",e);if(e.data!=e.params&&e.params!=params){e.data=e.params}if(e.cancel==true){return}var sf=me=this;var url=e.url;mini.copyTo(e,{success:function(text,textStatus,xhr){delete e.params;var obj={text:text,result:null,sender:me,options:e,xhr:xhr};var result=null;try{mini_doload(obj);result=obj.result;if(!result){result=mini.decode(text)}}catch(ex){if(mini_debugger==true){alert(url+"\njson is error.")}}if(mini.isArray(result)){result={data:result}}if(sf.dataField){result.data=mini._getMap(sf.dataField,result)}if(!result.data){result.data=[]}var ex={data:result.data,cancel:false};sf.fire("preload",ex);if(ex.cancel==true){return}sf.setData(ex.data);sf.fire("load");setTimeout(function(){sf.doLayout()},100)},error:function(xhr,textStatus,errorThrown){var e={xhr:xhr,text:xhr.responseText,textStatus:textStatus,errorMsg:xhr.responseText,errorCode:xhr.status};if(mini_debugger==true){alert(url+"\n"+e.errorCode+"\n"+e.errorMsg)}sf.fire("loaderror",e)}});this._ajaxer=mini.ajax(e)},setValue:function(b){if(mini.isNull(b)){b=""}if(this.value!==b){this.deselectAll();this.value=b;if(this._valueEl){this._valueEl.value=b}var a=this.findItems(this.value);this.selects(a);this.setSelected(a[0])}},getValue:function(){return this.value},getFormValue:function(){return this.value},setValueField:function(a){this.valueField=a},getValueField:function(){return this.valueField},setTextField:function(a){this.textField=a},getTextField:function(){return this.textField},getItemValue:function(a){return String(mini._getMap(this.valueField,a))},getItemText:function(b){var a=mini._getMap(this.textField,b);return mini.isNull(a)?"":String(a)},getValueAndText:function(d){if(mini.isNull(d)){d=[]}if(!mini.isArray(d)){d=this.findItems(d)}var c=[];var f=[];for(var e=0,b=d.length;e<b;e++){var a=d[e];if(a){c.push(this.getItemValue(a));f.push(this.getItemText(a))}}return[c.join(this.delimiter),f.join(this.delimiter)]},findItems:function(o){if(mini.isNull(o)||o===""){return[]}if(typeof o=="function"){var n=o;var h=[];var f=this.data;for(var d=0,c=f.length;d<c;d++){var g=f[d];if(n(g,d)===true){h.push(g)}}return h}var q=String(o).split(this.delimiter);var f=this.data;var m={};for(var d=0,c=f.length;d<c;d++){var g=f[d];var p=g[this.valueField];m[p]=g}var a=[];for(var e=0,b=q.length;e<b;e++){var p=q[e];var g=m[p];if(g){a.push(g)}}return a},removeAll:function(){var a=this.getData();this.removeItems(a)},addItems:function(a,b){if(!mini.isArray(a)){return}if(mini.isNull(b)){b=this.data.length}this.data.insertRange(b,a);this.doUpdate()},addItem:function(b,a){if(!b){return}if(this.data.indexOf(b)!=-1){return}if(mini.isNull(a)){a=this.data.length}this.data.insert(a,b);this.doUpdate()},removeItems:function(a){if(!mini.isArray(a)){return}this.data.removeRange(a);this._checkSelecteds();this.doUpdate()},removeItem:function(b){var a=this.data.indexOf(b);if(a!=-1){this.data.removeAt(a);this._checkSelecteds();this.doUpdate()}},moveItem:function(b,a){if(!b||!mini.isNumber(a)){return}if(a<0){a=0}if(a>this.data.length){a=this.data.length}this.data.remove(b);this.data.insert(a,b);this.doUpdate()},_selected:null,_selecteds:[],multiSelect:false,_checkSelecteds:function(){for(var b=this._selecteds.length-1;b>=0;b--){var a=this._selecteds[b];if(this.data.indexOf(a)==-1){this._selecteds.removeAt(b)}}var c=this.getValueAndText(this._selecteds);this.value=c[0];if(this._valueEl){this._valueEl.value=this.value}},setMultiSelect:function(a){this.multiSelect=a},getMultiSelect:function(){return this.multiSelect},isSelected:function(a){if(!a){return false}return this._selecteds.indexOf(a)!=-1},getSelecteds:function(){var a=this._selecteds.clone();var b=this;mini.sort(a,function(d,c){var f=b.indexOf(d);var e=b.indexOf(c);if(f>e){return 1}if(f<e){return -1}return 0});return a},setSelected:function(a){if(a){this._selected=a;this.select(a)}},getSelected:function(){return this._selected},select:function(a){a=this.getItem(a);if(!a){return}if(this.isSelected(a)){return}this.selects([a])},deselect:function(a){a=this.getItem(a);if(!a){return}if(!this.isSelected(a)){return}this.deselects([a])},selectAll:function(){var a=this.data.clone();this.selects(a)},deselectAll:function(){this.deselects(this._selecteds)},clearSelect:function(){this.deselectAll()},selects:function(c){if(!c||c.length==0){return}c=c.clone();if(this.multiSelect==false&&c.length>1){c.length=1}for(var d=0,b=c.length;d<b;d++){var a=c[d];if(!this.isSelected(a)){this._selecteds.push(a)}}var e=this;e._doSelects()},deselects:function(b){if(!b||b.length==0){return}b=b.clone();for(var c=b.length-1;c>=0;c--){var a=b[c];if(this.isSelected(a)){this._selecteds.remove(a)}}var d=this;d._doSelects()},_doSelects:function(){var g=this.getValueAndText(this._selecteds);this.value=g[0];if(this._valueEl){this._valueEl.value=this.value}for(var e=0,c=this.data.length;e<c;e++){var b=this.data[e];var a=this.isSelected(b);if(a){this.addItemCls(b,this._itemSelectedCls)}else{this.removeItemCls(b,this._itemSelectedCls)}var d=this.data.indexOf(b);var h=this._createCheckId(d);var f=document.getElementById(h);if(f){f.checked=!!a}}},_OnSelectionChanged:function(b,a){var c=this.getValueAndText(this._selecteds);this.value=c[0];if(this._valueEl){this._valueEl.value=this.value}var d={selecteds:this.getSelecteds(),selected:this.getSelected(),value:this.getValue()};this.fire("SelectionChanged",d)},_createCheckId:function(a){return this.uid+"$ck$"+a},_createItemId:function(a){return this.uid+"$"+a},__OnClick:function(a){this._fireEvent(a,"Click")},__OnDblClick:function(a){this._fireEvent(a,"Dblclick")},__OnMouseDown:function(a){this._fireEvent(a,"MouseDown")},__OnMouseUp:function(a){this._fireEvent(a,"MouseUp")},__OnMouseMove:function(a){this._fireEvent(a,"MouseMove")},__OnMouseOver:function(a){this._fireEvent(a,"MouseOver")},__OnMouseOut:function(a){this._fireEvent(a,"MouseOut")},__OnKeyDown:function(a){this._fireEvent(a,"KeyDown")},__OnKeyUp:function(a){this._fireEvent(a,"KeyUp")},__OnContextMenu:function(a){this._fireEvent(a,"ContextMenu")},_fireEvent:function(f,a){if(!this.enabled){return}var d=this.getItemByEvent(f);if(!d){return}var c=this["_OnItem"+a];if(c){c.call(this,d,f)}else{var b={item:d,htmlEvent:f};this.fire("item"+a,b)}},_OnItemClick:function(a,c){if(this.isReadOnly()||this.enabled==false||a.enabled===false){c.preventDefault();return}var b=this.getValue();if(this.multiSelect){if(this.isSelected(a)){this.deselect(a);if(this._selected==a){this._selected=null}}else{this.select(a);this._selected=a}this._OnSelectionChanged()}else{if(!this.isSelected(a)){this.deselectAll();this.select(a);this._selected=a;this._OnSelectionChanged()}}if(b!=this.getValue()){this._OnValueChanged()}var c={item:a,htmlEvent:c};this.fire("itemclick",c)},_blurOnOut:true,_OnItemMouseOut:function(a,b){if(!this.enabled){return}if(this._blurOnOut){this._blurItem()}var b={item:a,htmlEvent:b};this.fire("itemmouseout",b)},_OnItemMouseMove:function(a,b){if(!this.enabled||a.enabled===false){return}this._focusItem(a);var b={item:a,htmlEvent:b};this.fire("itemmousemove",b)},onItemClick:function(b,a){this.on("itemclick",b,a)},onItemMouseDown:function(b,a){this.on("itemmousedown",b,a)},onBeforeLoad:function(b,a){this.on("beforeload",b,a)},onLoad:function(b,a){this.on("load",b,a)},onLoadError:function(b,a){this.on("loaderror",b,a)},onPreLoad:function(b,a){this.on("preload",b,a)},getAttrs:function(b){var h=mini.ListControl.superclass.getAttrs.call(this,b);mini._ParseString(b,h,["url","data","value","textField","valueField","onitemclick","onitemmousemove","onselectionchanged","onitemdblclick","onbeforeload","onload","onloaderror","ondataload"]);mini._ParseBool(b,h,["multiSelect"]);var j=h.valueField||this.valueField;var c=h.textField||this.textField;if(b.nodeName.toLowerCase()=="select"){var e=[];for(var f=0,d=b.length;f<d;f++){var g=b.options[f];var a={};a[c]=g.text;a[j]=g.value;e.push(a)}if(e.length>0){h.data=e}}return h}});mini._Layouts={};mini.layout=function(b,a){if(!document.body){return}function c(h){if(!h){return}var j=mini.get(h);if(j){if(j.doLayout){if(!mini._Layouts[j.uid]){mini._Layouts[j.uid]=j;if(a!==false||j.isFixedSize()==false){j.doLayout(false)}delete mini._Layouts[j.uid]}}}else{var g=h.childNodes;if(g){for(var e=0,d=g.length;e<d;e++){var f=g[e];c(f)}}}}if(!b){b=document.body}c(b);if(b==document.body){mini.layoutIFrames()}};mini.applyTo=function(b){b=mini.byId(b);if(!b){return this}if(mini.get(b)){throw new Error("not applyTo a mini control")}var a=this.getAttrs(b);delete a._applyTo;if(mini.isNull(a.defaultValue)&&!mini.isNull(a.value)){a.defaultValue=a.value}if(mini.isNull(a.defaultText)&&!mini.isNull(a.text)){a.defaultText=a.text}var c=b.parentNode;if(c&&this.el!=b){c.replaceChild(this.el,b)}this.set(a);this._afterApply(b);return this};mini._doParse=function(b){if(!b){return}var m=b.nodeName.toLowerCase();if(!m){return}var j=String(b.className);if(j){var f=mini.get(b);if(!f){var d=j.split(" ");for(var g=0,e=d.length;g<e;g++){var n=d[g];var h=mini.getClassByUICls(n);if(h){mini.removeClass(b,n);var k=new h();mini.applyTo.call(k,b);b=k.el;break}}}}if(m=="select"||mini.hasClass(b,"mini-menu")||mini.hasClass(b,"mini-datagrid")||mini.hasClass(b,"mini-treegrid")||mini.hasClass(b,"mini-tree")||mini.hasClass(b,"mini-button")||mini.hasClass(b,"mini-textbox")||mini.hasClass(b,"mini-buttonedit")){return}var a=mini.getChildNodes(b,true);for(var g=0,e=a.length;g<e;g++){var c=a[g];if(c.nodeType==1){if(c.parentNode==b){mini._doParse(c)}}}};mini._Removes=[];mini._firstParse=true;mini.parse=function(e,j){if(mini._firstParse){mini._firstParse=false;var m=document.getElementsByTagName("iframe");var c=[];for(var h=0,g=m.length;h<g;h++){var k=m[h];c.push(k)}for(var h=0,g=c.length;h<g;h++){var k=c[h];var a=$(k).attr("src");if(!a){continue}k.loaded=false;k._onload=k.onload;k._src=a;k.onload=function(){};k.src=""}setTimeout(function(){for(var o=0,n=c.length;o<n;o++){var p=c[o];if(p._src&&$(p).attr("src")==""){p.loaded=true;p.onload=p._onload;p.src=p._src;p._src=p._onload=null}}},20)}if(typeof e=="string"){var b=e;e=mini.byId(b);if(!e){e=document.body}}if(e&&!mini.isElement(e)){e=e.el}if(!e){e=document.body}var f=mini.WindowVisible;if(isIE){mini.WindowVisible=false}mini._doParse(e);mini.WindowVisible=f;if(j!==false){mini.layout(e)}};mini._ParseString=function(e,c,b){for(var d=0,a=b.length;d<a;d++){var g=b[d];var f=mini.getAttr(e,g);if(f){c[g]=f}}};mini._ParseBool=function(e,c,b){for(var d=0,a=b.length;d<a;d++){var g=b[d];var f=mini.getAttr(e,g);if(f){c[g]=f=="true"?true:false}}};mini._ParseInt=function(e,c,b){for(var d=0,a=b.length;d<a;d++){var g=b[d];var f=parseInt(mini.getAttr(e,g));if(!isNaN(f)){c[g]=f}}};mini._ParseColumns=function(el){var columns=[];var cs=mini.getChildNodes(el);for(var i=0,l=cs.length;i<l;i++){var node=cs[i];var jq=jQuery(node);var column={};var editor=null,filter=null;var subCs=mini.getChildNodes(node);if(subCs){for(var ii=0,li=subCs.length;ii<li;ii++){var subNode=subCs[ii];var property=jQuery(subNode).attr("property");if(!property){continue}property=property.toLowerCase();if(property=="columns"){column.columns=mini._ParseColumns(subNode);jQuery(subNode).remove()}if(property=="editor"||property=="filter"){var className=subNode.className;var classes=className.split(" ");for(var i3=0,l3=classes.length;i3<l3;i3++){var cls=classes[i3];var clazz=mini.getClassByUICls(cls);if(clazz){var ui=new clazz();if(property=="filter"){filter=ui.getAttrs(subNode);filter.type=ui.type}else{editor=ui.getAttrs(subNode);editor.type=ui.type}break}}jQuery(subNode).remove()}}}column.header=node.innerHTML;mini._ParseString(node,column,["name","header","field","editor","filter","renderer","width","type","renderer","headerAlign","align","headerCls","cellCls","headerStyle","cellStyle","displayField","dateFormat","listFormat","mapFormat","trueValue","falseValue","dataType","vtype","currencyUnit","summaryType","summaryRenderer","groupSummaryType","groupSummaryRenderer","defaultValue","defaultText","decimalPlaces","data-options"]);mini._ParseBool(node,column,["visible","readOnly","allowSort","allowResize","allowMove","allowDrag","autoShowPopup","unique","autoEscape","enabled","hideable"]);if(editor){column.editor=editor}if(filter){column.filter=filter}if(column.dataType){column.dataType=column.dataType.toLowerCase()}if(column.defaultValue==="true"){column.defaultValue=true}if(column.defaultValue==="false"){column.defaultValue=false}columns.push(column);var options=column["data-options"];if(options){options=eval("("+options+")");if(options){mini.copyTo(column,options)}}}return columns};mini._Columns={};mini._getColumn=function(b){var a=mini._Columns[b.toLowerCase()];if(!a){return{}}return a()};mini.IndexColumn=function(a){return mini.copyTo({width:30,cellCls:"",align:"center",draggable:false,allowDrag:true,hideable:true,init:function(b){b.on("addrow",this.__OnIndexChanged,this);b.on("removerow",this.__OnIndexChanged,this);b.on("moverow",this.__OnIndexChanged,this);if(b.isTree){b.on("addnode",this.__OnIndexChanged,this);b.on("removenode",this.__OnIndexChanged,this);b.on("movenode",this.__OnIndexChanged,this);b.on("loadnode",this.__OnIndexChanged,this);this._gridUID=b.uid;this._rowIdField="_id"}},getNumberId:function(b){return this._gridUID+"$number$"+b[this._rowIdField]},createNumber:function(b,c){if(mini.isNull(b.pageIndex)){return c+1}else{return(b.pageIndex*b.pageSize)+c+1}},renderer:function(d){var b=d.sender;if(this.draggable){if(!d.cellStyle){d.cellStyle=""}d.cellStyle+=";cursor:move;"}var c='<div id="'+this.getNumberId(d.record)+'">';if(mini.isNull(b.getPageIndex)){c+=d.rowIndex+1}else{c+=(b.getPageIndex()*b.getPageSize())+d.rowIndex+1}c+="</div>";return c},__OnIndexChanged:function(j){var h=j.sender;var f=h.getDataView();for(var g=0,c=f.length;g<c;g++){var b=f[g];var k=this.getNumberId(b);var d=document.getElementById(k);if(d){d.innerHTML=this.createNumber(h,g)}}}},a)};mini._Columns.indexcolumn=mini.IndexColumn;mini.CheckColumn=function(a){return mini.copyTo({width:30,cellCls:"mini-checkcolumn",headerCls:"mini-checkcolumn",hideable:true,_multiRowSelect:true,header:function(c){var d=this.uid+"checkall";var b='<input type="checkbox" id="'+d+'" />';if(this.multiSelect==false){b=""}return b},getCheckId:function(b,c){return this._gridUID+"$checkcolumn$"+b[this._rowIdField]+"$"+c._id},init:function(b){b.on("selectionchanged",this.__OnSelectionChanged,this);b.on("HeaderCellClick",this.__OnHeaderCellClick,this)},renderer:function(g){var h=this.getCheckId(g.record,g.column);var f=g.sender.isSelected?g.sender.isSelected(g.record):false;var d="checkbox";var c=g.sender;if(c.getMultiSelect()==false){d="radio"}var b='<input type="'+d+'" id="'+h+'" '+(f?"checked":"")+' hidefocus style="outline:none;" onclick="return false"/>';b+='<div class="mini-grid-radio-mask"></div>';return b},__OnHeaderCellClick:function(f){var c=f.sender;if(f.column!=this){return}var g=c.uid+"checkall";var b=document.getElementById(g);if(b){if(c.getMultiSelect()){if(b.checked){c.deselectAll();var d=c.getDataView();c.selects(d)}else{c.deselectAll()}}else{c.deselectAll();if(b.checked){c.select(0)}}c.fire("checkall")}},__OnSelectionChanged:function(j){var b=j.sender;var d=b.toArray();var k=this;for(var g=0,f=d.length;g<f;g++){var h=d[g];var m=b.isSelected(h);var c=k.getCheckId(h,k);var n=document.getElementById(c);if(n){n.checked=m}}if(!this._timer){this._timer=setTimeout(function(){k._doCheckState(b);k._timer=null},10)}},_doCheckState:function(c){var e=c.uid+"checkall";var b=document.getElementById(e);if(b&&c._getSelectAllCheckState){var d=c._getSelectAllCheckState();if(d=="has"){b.indeterminate=true;b.checked=true}else{b.indeterminate=false;b.checked=d}}}},a)};mini._Columns.checkcolumn=mini.CheckColumn;mini.ExpandColumn=function(a){return mini.copyTo({width:30,headerAlign:"center",align:"center",draggable:false,cellStyle:"padding:0",cellCls:"mini-grid-expandCell",hideable:true,renderer:function(b){return'<a class="mini-grid-ecIcon" href="javascript:#" onclick="return false"></a>'},init:function(b){b.on("cellclick",this.__OnCellClick,this)},__OnCellClick:function(d){var c=d.sender;if(d.column==this&&c.isShowRowDetail){if(mini.findParent(d.htmlEvent.target,"mini-grid-ecIcon")){var b=c.isShowRowDetail(d.record);if(!b){d.cancel=false;c.fire("beforeshowrowdetail",d);if(d.cancel===true){return}}else{d.cancel=false;c.fire("beforehiderowdetail",d);if(d.cancel===true){return}}if(c.autoHideRowDetail){c.hideAllRowDetail()}if(b){c.hideRowDetail(d.record)}else{c.showRowDetail(d.record)}}}}},a)};mini._Columns.expandcolumn=mini.ExpandColumn;mini.CheckBoxColumn=function(a){return mini.copyTo({_type:"checkboxcolumn",header:"",headerAlign:"center",cellCls:"mini-checkcolumn",trueValue:true,falseValue:false,readOnly:false,getCheckId:function(b,c){return this._gridUID+"$checkbox$"+b[this._rowIdField]+"$"+c._id},getCheckBoxEl:function(b,c){return document.getElementById(this.getCheckId(b,c))},renderer:function(f){var g=this.getCheckId(f.record,f.column);var b=mini._getMap(f.field,f.record);var d=b==this.trueValue?true:false;var c="checkbox";return'<input type="'+c+'" id="'+g+'" '+(d?"checked":"")+' hidefocus style="outline:none;" onclick="return false;"/>'},init:function(e){this.grid=e;function b(i){if(e.isReadOnly()||this.readOnly){return}i.value=mini._getMap(i.field,i.record);e.fire("cellbeginedit",i);if(i.cancel!==true){var g=mini._getMap(i.column.field,i.record);var h=g==this.trueValue?this.falseValue:this.trueValue;if(e._OnCellCommitEdit){e._OnCellCommitEdit(i.record,i.column,h);e._OnCellEndEdit(i.record,i.column)}}}function d(h){if(h.column==this){var i=this.getCheckId(h.record,h.column);var g=h.htmlEvent.target;if(g.id==i){if(e.allowCellEdit){h.cancel=false;b.call(this,h)}else{if(this.readOnly){return}h.value=mini._getMap(h.column.field,h.record);e.fire("cellbeginedit",h);if(h.cancel==true){return}if(e.isEditingRow&&e.isEditingRow(h.record)){setTimeout(function(){g.checked=!g.checked},1)}}}}}e.on("cellclick",d,this);mini.on(this.grid.el,"keydown",function(h){if(h.keyCode==32&&e.allowCellEdit){var i=e.getCurrentCell();if(!i){return}if(i[1]!=this){return}var g={record:i[0],column:i[1]};g.field=g.column.field;b.call(this,g);h.preventDefault()}},this);var c=parseInt(this.trueValue),f=parseInt(this.falseValue);if(!isNaN(c)){this.trueValue=c}if(!isNaN(f)){this.falseValue=f}}},a)};mini._Columns.checkboxcolumn=mini.CheckBoxColumn;mini.RadioButtonColumn=function(a){return mini.copyTo({_type:"radiobuttoncolumn",header:"",headerAlign:"center",cellCls:"mini-checkcolumn",trueValue:true,falseValue:false,readOnly:false,getCheckId:function(b,c){return this._gridUID+"$radio$"+b[this._rowIdField]+"$"+c._id},getCheckBoxEl:function(b,c){return document.getElementById(this.getCheckId(b,c))},renderer:function(g){var b=g.sender;var d=this.getCheckId(g.record,g.column);var j=mini._getMap(g.field,g.record);var i=j==this.trueValue?true:false;var h="radio";var c=b._id+g.column.field;var f="";var k='<div style="position:relative;">';k+='<input name="'+c+'" type="'+h+'" id="'+d+'" '+(i?"checked":"")+' hidefocus style="outline:none;" onclick="return false;" style="position:relative;z-index:1;"/>';if(!b.allowCellEdit){if(!b.isEditingRow(g.record)){k+='<div class="mini-grid-radio-mask"></div>'}}k+="</div>";return k},init:function(e){this.grid=e;function b(n){if(e.isReadOnly()||this.readOnly){return}n.value=mini._getMap(n.field,n.record);e.fire("cellbeginedit",n);if(n.cancel!==true){var h=mini._getMap(n.column.field,n.record);if(h==this.trueValue){return}var m=h==this.trueValue?this.falseValue:this.trueValue;var k=e.getData();for(var j=0,g=k.length;j<g;j++){var o=k[j];if(o==n.record){continue}var h=mini._getMap(n.column.field,o);if(h!=this.falseValue){e.updateRow(o,n.column.field,this.falseValue)}}if(e._OnCellCommitEdit){e._OnCellCommitEdit(n.record,n.column,m)}}}function d(i){if(i.column==this){var j=this.getCheckId(i.record,i.column);var g=i.htmlEvent.target;if(g.id==j){if(e.allowCellEdit){i.cancel=false;b.call(this,i)}else{if(e.isEditingRow&&e.isEditingRow(i.record)){var h=this;setTimeout(function(){g.checked=true;var p=e.getData();for(var n=0,k=p.length;n<k;n++){var s=p[n];if(s==i.record){continue}var q=i.column.field;var m=mini._getMap(q,s);if(m!=h.falseValue){if(s!=i.record){if(e._dataSource){mini._setMap(i.column.field,h.falseValue,s);e._dataSource._setModified(s,q,m)}else{var r={};mini._setMap(q,h.falseValue,r);e._doUpdateRow(s,r)}}}}},1)}}}}}e.on("cellclick",d,this);mini.on(this.grid.el,"keydown",function(h){if(h.keyCode==32&&e.allowCellEdit){var i=e.getCurrentCell();if(!i){return}if(i[1]!=this){return}var g={record:i[0],column:i[1]};g.field=g.column.field;b.call(this,g);h.preventDefault()}},this);var c=parseInt(this.trueValue),f=parseInt(this.falseValue);if(!isNaN(c)){this.trueValue=c}if(!isNaN(f)){this.falseValue=f}}},a)};mini._Columns.radiobuttoncolumn=mini.RadioButtonColumn;mini.ComboBoxColumn=function(a){return mini.copyTo({renderer:function(p){var q=!mini.isNull(p.value)?String(p.value):"";var r=q.split(",");var t="id",h="text";var j={};var n=p.column.editor;if(n&&n.type=="combobox"){var d=this.__editor;if(!d){if(mini.isControl(n)){d=n}else{n=mini.clone(n);d=mini.create(n)}this.__editor=d}t=d.getValueField();h=d.getTextField();j=this._valueMaps;if(!j){j={};var m=d.getData();for(var k=0,g=m.length;k<g;k++){var c=m[k];j[c[t]]=c}this._valueMaps=j}}var f=[];for(var k=0,g=r.length;k<g;k++){var b=r[k];var c=j[b];if(c){var s=c[h];if(s===null||s===undefined){s=""}f.push(s)}}return f.join(",")}},a)};mini._Columns.comboboxcolumn=mini.ComboBoxColumn;mini._Resizer=function(a){this.owner=a;mini.on(this.owner.el,"mousedown",this.__OnMouseDown,this)};mini._Resizer.prototype={__OnMouseDown:function(c){var a=mini.hasClass(c.target,"mini-resizer-trigger");if(a&&this.owner.allowResize){var b=this._getResizeDrag();b.start(c)}},_getResizeDrag:function(){if(!this._resizeDragger){this._resizeDragger=new mini.Drag({capture:true,onStart:mini.createDelegate(this._OnDragStart,this),onMove:mini.createDelegate(this._OnDragMove,this),onStop:mini.createDelegate(this._OnDragStop,this)})}return this._resizeDragger},_OnDragStart:function(a){this.mask=mini.append(document.body,'<div class="mini-resizer-mask mini-fixed"></div>');this.proxy=mini.append(document.body,'<div class="mini-resizer-proxy"></div>');this.proxy.style.cursor="se-resize";this.elBox=mini.getBox(this.owner.el);mini.setBox(this.proxy,this.elBox)},_OnDragMove:function(e){var b=this.owner;var d=e.now[0]-e.init[0];var f=e.now[1]-e.init[1];var a=this.elBox.width+d;var c=this.elBox.height+f;if(a<b.minWidth){a=b.minWidth}if(c<b.minHeight){c=b.minHeight}if(a>b.maxWidth){a=b.maxWidth}if(c>b.maxHeight){c=b.maxHeight}mini.setSize(this.proxy,a,c)},_OnDragStop:function(a,c){if(!this.proxy){return}var b=mini.getBox(this.proxy);jQuery(this.mask).remove();jQuery(this.proxy).remove();this.proxy=null;this.elBox=null;if(c){this.owner.setWidth(b.width);this.owner.setHeight(b.height);this.owner.fire("resize")}}};mini._topWindow=null;mini._getTopWindow=function(a){if(mini._topWindow){return mini._topWindow}var c=[];function b(e){try{e.___try=1;c.push(e)}catch(d){}if(e.parent&&e.parent!=e){b(e.parent)}}b(window);mini._topWindow=c[c.length-1];return mini._topWindow};var __ps=mini.getParams();if(__ps._winid){try{window.Owner=mini._getTopWindow()[__ps._winid]}catch(ex){}}mini._WindowID="w"+Math.floor(Math.random()*10000);mini._getTopWindow()[mini._WindowID]=window;mini.__IFrameCreateCount=1;mini.createIFrame=function(c,j){var d="__iframe_onload"+mini.__IFrameCreateCount++;window[d]=e;if(!c){c=""}var i=c.split("#");c=i[0];var l="_t="+Math.floor(Math.random()*1000000);if(c.indexOf("?")==-1){c+="?"+l}else{c+="&"+l}if(c&&c.indexOf("_winid")==-1){var l="_winid="+mini._WindowID;if(c.indexOf("?")==-1){c+="?"+l}else{c+="&"+l}}if(i[1]){c=c+"#"+i[1]}var k=c.indexOf(".mht")!=-1;var a=k?c:"";var m='<iframe src="'+a+'" style="width:100%;height:100%;" onload="'+d+'()"  frameborder="0"></iframe>';var b=document.createElement("div");var g=mini.append(b,m);var f=false;if(k){f=true}else{setTimeout(function(){if(g){g.src=c;f=true}},5)}var h=true;function e(){if(f==false){return}setTimeout(function(){if(j){j(g,h)}h=false},1)}g._ondestroy=function(){window[d]=mini.emptyFn;g.src="";try{g.contentWindow.document.write("");g.contentWindow.document.close()}catch(n){}g._ondestroy=null;g=null};return g};mini._doOpen=function(c){if(typeof c=="string"){c={url:c}}c=mini.copyTo({width:700,height:400,allowResize:true,allowModal:true,closeAction:"destroy",title:"",titleIcon:"",iconCls:"",iconStyle:"",bodyStyle:"padding: 0",url:"",showCloseButton:true,showFooter:false},c);c.closeAction="destroy";var i=c.onload;delete c.onload;var g=c.ondestroy;delete c.ondestroy;var b=c.url;delete c.url;var e=mini.getViewportBox();if(c.width&&String(c.width).indexOf("%")!=-1){var a=parseInt(c.width);c.width=parseInt(e.width*(a/100))}if(c.height&&String(c.height).indexOf("%")!=-1){var d=parseInt(c.height);c.height=parseInt(e.height*(d/100))}var f=new mini.Window();f.set(c);f.load(b,i,g);f.show();return f};mini.open=function(b){if(!b){return}var a=b.url;if(!a){a=""}var f=a.split("#");var a=f[0];if(a&&a.indexOf("_winid")==-1){var c="_winid="+mini._WindowID;if(a.indexOf("?")==-1){a+="?"+c}else{a+="&"+c}if(f[1]){a=a+"#"+f[1]}}b.url=a;b.Owner=window;var g=[];function d(i){try{if(i.mini){g.push(i)}if(i.parent&&i.parent!=i){d(i.parent)}}catch(h){}}d(window);var e=g[g.length-1];return e.mini._doOpen(b)};mini.openTop=mini.open;mini._getResult=function(a,b,g,f,e,k){var i=null;var h=mini.getText(a,b,function(m,l){i=l;if(g){if(g){g(m,l)}}},f,e);var c={text:h,result:null,sender:{type:""},options:{url:a,data:b,type:e},xhr:i};var j=null;try{mini_doload(c);j=c.result;if(!j){j=mini.decode(h)}}catch(d){if(mini_debugger==true){alert(a+"\njson is error")}}if(!mini.isArray(j)&&k){j=mini._getMap(k,j)}if(mini.isArray(j)){j={data:j}}return j?j.data:null};mini.getData=function(b,g,f,a,c){var e=mini.getText(b,g,f,a,c);var d=mini.decode(e);return d};mini.getText=function(b,f,e,a,c){var d=null;mini.ajax({url:b,data:f,async:false,type:c?c:"get",cache:false,dataType:"text",success:function(h,i,g){d=h;if(e){e(h,g)}},error:a});return d};if(!window.mini_RootPath){mini_RootPath="/"}mini_CreateJSPath=function(g){var a=document.getElementsByTagName("script");var f="";for(var e=0,b=a.length;e<b;e++){var h=a[e].src;if(h.indexOf(g)!=-1){var d=h.split(g);f=d[0];break}}var c=location.href;c=c.split("#")[0];c=c.split("?")[0];var d=c.split("/");d.length=d.length-1;c=d.join("/");if(f.indexOf("http:")==-1&&f.indexOf("file:")==-1){f=c+"/"+f}return f};if(!window.mini_JSPath){mini_JSPath=mini_CreateJSPath("miniui.js")}mini.update=function(a,c){if(typeof a=="string"){a={url:a}}if(c){a.el=c}var b=mini.loadText(a.url);mini.innerHTML(a.el,b);mini.parse(a.el)};mini.createSingle=function(a){if(typeof a=="string"){a=mini.getClass(a)}if(typeof a!="function"){return}var b=a.single;if(!b){b=a.single=new a()}return b};mini.createTopSingle=function(b){if(typeof b!="function"){return}var a=b.prototype.type;if(top&&top!=window&&top.mini&&top.mini.getClass(a)){return top.mini.createSingle(a)}else{return mini.createSingle(b)}};mini.sortTypes={string:function(a){return String(a).toUpperCase()},date:function(a){if(!a){return 0}if(mini.isDate(a)){return a.getTime()}return mini.parseDate(String(a))},"float":function(a){var b=parseFloat(String(a).replace(/,/g,""));return isNaN(b)?0:b},"int":function(a){var b=parseInt(String(a).replace(/,/g,""),10);return isNaN(b)?0:b},currency:function(a){var b=parseFloat(String(a).replace(/,/g,""));return isNaN(b)?0:b}};mini._ValidateVType=function(b,k,d,p){var j=b.split(";");for(var c=0,a=j.length;c<a;c++){var b=j[c].trim();var m=b.split(":");var n=m[0];var g=b.substr(n.length+1,1000);if(g){g=g.split(",")}else{g=[]}var h=mini.VTypes[n];if(h){var o=h(k,g);if(o!==true){d.isValid=false;var f=m[0]+"ErrorText";d.errorText=p[f]||mini.VTypes[f]||"";d.errorText=String.format(d.errorText,g[0],g[1],g[2],g[3],g[4]);break}}}};mini._getErrorText=function(b,a){if(b&&b[a]){return b[a]}else{return mini.VTypes[a]}};mini.VTypes={minDateErrorText:"ʱ�䲻����С�� {0}",maxDateErrorText:"ʱ�䲻���Դ��� {0}",uniqueErrorText:"This field is unique.",requiredErrorText:"This field is required.",emailErrorText:"Please enter a valid email address.",urlErrorText:"Please enter a valid URL.",floatErrorText:"Please enter a valid number.",intErrorText:"Please enter only digits",dateErrorText:"Please enter a valid date. Date format is {0}",maxLengthErrorText:"Please enter no more than {0} characters.",minLengthErrorText:"Please enter at least {0} characters.",maxErrorText:"Please enter a value less than or equal to {0}.",minErrorText:"Please enter a value greater than or equal to {0}.",rangeLengthErrorText:"Please enter a value between {0} and {1} characters long.",rangeCharErrorText:"Please enter a value between {0} and {1} characters long.",rangeErrorText:"Please enter a value between {0} and {1}.",required:function(a,b){if(mini.isNull(a)||a===""){return false}return true},email:function(a,b){if(mini.isNull(a)||a===""){return true}if(a.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)!=-1){return true}else{return false}},url:function(a,b){if(mini.isNull(a)||a===""){return true}function c(f){f=f.toLowerCase().split("?")[0];var e="^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,5})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";var d=new RegExp(e);if(d.test(f)){return(true)}else{return(false)}}return c(a)},"int":function(a,b){if(mini.isNull(a)||a===""){return true}function c(d){if(d<0){d=-d}var e=String(d);return e.length>0&&!(/[^0-9]/).test(e)}return c(a)},"float":function(b,c){if(mini.isNull(b)||b===""){return true}function a(d){if(d<0){d=-d}var e=String(d);if(e.split(".").length>2){return false}return e.length>0&&!(/[^0-9.]/).test(e)}return a(b)},date:function(a,b){if(mini.isNull(a)||a===""){return true}if(!a){return false}var e=null;var c=b[0];if(c){e=mini.parseDate(a,c);if(e&&e.getFullYear){if(mini.formatDate(e,c)==a){return true}}}else{e=mini.parseDate(a,"yyyy-MM-dd");if(!e){e=mini.parseDate(a,"yyyy/MM/dd")}if(!e){e=mini.parseDate(a,"MM/dd/yyyy")}if(e&&e.getFullYear){return true}}return false},maxLength:function(a,b){if(mini.isNull(a)||a===""){return true}var c=parseInt(b);if(!a||isNaN(c)){return true}if(a.length<=c){return true}else{return false}},minLength:function(a,b){if(mini.isNull(a)||a===""){return true}var c=parseInt(b);if(isNaN(c)){return true}if(a.length>=c){return true}else{return false}},rangeLength:function(b,c){if(mini.isNull(b)||b===""){return true}if(!b){return false}var d=parseFloat(c[0]),a=parseFloat(c[1]);if(isNaN(d)||isNaN(a)){return true}if(d<=b.length&&b.length<=a){return true}return false},rangeChar:function(h,e){if(mini.isNull(h)||h===""){return true}var b=parseFloat(e[0]),f=parseFloat(e[1]);if(isNaN(b)||isNaN(f)){return true}function g(i){var k=new RegExp("^[\u4e00-\u9fa5]+$");if(k.test(i)){return true}return false}var d=0;var j=String(h).split("");for(var c=0,a=j.length;c<a;c++){if(g(j[c])){d+=2}else{d+=1}}if(b<=d&&d<=f){return true}return false},range:function(b,c){if(mini.VTypes["float"](b,c)==false){return false}if(mini.isNull(b)||b===""){return true}b=parseFloat(b);if(isNaN(b)){return false}var d=parseFloat(c[0]),a=parseFloat(c[1]);if(isNaN(d)||isNaN(a)){return true}if(d<=b&&b<=a){return true}return false},min:function(a,b){if(mini.VTypes["float"](a,b)==false){return false}if(mini.isNull(a)||a===""){return true}a=parseFloat(a);if(isNaN(a)){return false}var c=parseFloat(b[0]);if(isNaN(c)){return true}if(c<=a){return true}return false},max:function(b,c){if(mini.VTypes["float"](b,c)==false){return false}if(mini.isNull(b)||b===""){return true}b=parseFloat(b);if(isNaN(b)){return false}var a=parseFloat(c[0]);if(isNaN(a)){return true}if(b<=a){return true}return false}};mini.summaryTypes={count:function(a){if(!a){a=[]}return a.length},max:function(e,f){if(!e){e=[]}var a=null;for(var c=0,b=e.length;c<b;c++){var g=e[c];var d=parseFloat(g[f]);if(d===null||d===undefined||isNaN(d)){continue}if(a==null||a<d){a=d}}return a},min:function(e,f){if(!e){e=[]}var c=null;for(var b=0,a=e.length;b<a;b++){var g=e[b];var d=parseFloat(g[f]);if(d===null||d===undefined||isNaN(d)){continue}if(c==null||c>d){c=d}}return c},avg:function(f,g){if(!f){f=[]}if(f.length==0){return 0}var d=0;for(var c=0,a=f.length;c<a;c++){var h=f[c];var e=parseFloat(h[g]);if(e===null||e===undefined||isNaN(e)){continue}d+=e}var b=d/f.length;return b},sum:function(e,f){if(!e){e=[]}var c=0;for(var b=0,a=e.length;b<a;b++){var g=e[b];var d=parseFloat(g[f]);if(d===null||d===undefined||isNaN(d)){continue}c+=d}return c}};mini.formatCurrency=function(a,c){if(a===null||a===undefined){null==""}a=String(a).replace(/\$|\,/g,"");if(isNaN(a)){a="0"}sign=(a==(a=Math.abs(a)));a=Math.floor(a*100+0.50000000001);cents=a%100;a=Math.floor(a/100).toString();if(cents<10){cents="0"+cents}for(var b=0;b<Math.floor((a.length-(1+b))/3);b++){a=a.substring(0,a.length-(4*b+3))+","+a.substring(a.length-(4*b+3))}c=c||"";return c+(((sign)?"":"-")+a+"."+cents)};mini.emptyFn=function(){};mini.Drag=function(a){mini.copyTo(this,a)};mini.Drag.prototype={onStart:mini.emptyFn,onMove:mini.emptyFn,onStop:mini.emptyFn,capture:false,fps:20,event:null,delay:80,start:function(b){b.preventDefault();if(b){this.event=b}this.now=this.init=[this.event.pageX,this.event.pageY];var a=document;mini.on(a,"mousemove",this.move,this);mini.on(a,"mouseup",this.stop,this);mini.on(a,"contextmenu",this.contextmenu,this);if(this.context){mini.on(this.context,"contextmenu",this.contextmenu,this)}this.trigger=b.target;mini.selectable(this.trigger,false);mini.selectable(a.body,false);if(this.capture){if(isIE){this.trigger.setCapture(true)}else{if(document.captureEvents){document.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP|Event.MOUSEDOWN)}}}this.started=false;this.startTime=new Date()},contextmenu:function(a){if(this.context){mini.un(this.context,"contextmenu",this.contextmenu,this)}mini.un(document,"contextmenu",this.contextmenu,this);a.preventDefault();a.stopPropagation()},move:function(b){if(this.delay){if(new Date()-this.startTime<this.delay){return}}if(!this.started){this.started=true;this.onStart(this)}var a=this;if(!this.timer){this.timer=setTimeout(function(){a.now=[b.pageX,b.pageY];a.event=b;a.onMove(a);a.timer=null},5)}},stop:function(c){this.now=[c.pageX,c.pageY];this.event=c;if(this.timer){clearTimeout(this.timer);this.timer=null}var b=document;mini.selectable(this.trigger,true);mini.selectable(b.body,true);if(isIE){this.trigger.setCapture(false);this.trigger.releaseCapture()}var d=mini.MouseButton.Right!=c.button;if(d==false){c.preventDefault()}mini.un(b,"mousemove",this.move,this);mini.un(b,"mouseup",this.stop,this);var a=this;setTimeout(function(){mini.un(document,"contextmenu",a.contextmenu,a);if(a.context){mini.un(a.context,"contextmenu",a.contextmenu,a)}},1);if(this.started){this.onStop(this,d)}}};mini.JSON=new (function(){var sb=[];var _dateFormat=null;var useHasOwn=!!{}.hasOwnProperty,replaceString=function(a,b){var c=m[b];if(c){return c}c=b.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)},doEncode=function(o,field){if(o===null){sb[sb.length]="null";return}var t=typeof o;if(t=="undefined"){sb[sb.length]="null";return}else{if(o.push){sb[sb.length]="[";var b,i,l=o.length,v;for(i=0;i<l;i+=1){v=o[i];t=typeof v;if(t=="undefined"||t=="function"||t=="unknown"){}else{if(b){sb[sb.length]=","}doEncode(v);b=true}}sb[sb.length]="]";return}else{if(o.getFullYear){if(_dateFormat){sb[sb.length]='"';if(typeof _dateFormat=="function"){sb[sb.length]=_dateFormat(o,field)}else{sb[sb.length]=mini.formatDate(o,_dateFormat)}sb[sb.length]='"'}else{var n;sb[sb.length]='"';sb[sb.length]=o.getFullYear();sb[sb.length]="-";n=o.getMonth()+1;sb[sb.length]=n<10?"0"+n:n;sb[sb.length]="-";n=o.getDate();sb[sb.length]=n<10?"0"+n:n;sb[sb.length]="T";n=o.getHours();sb[sb.length]=n<10?"0"+n:n;sb[sb.length]=":";n=o.getMinutes();sb[sb.length]=n<10?"0"+n:n;sb[sb.length]=":";n=o.getSeconds();sb[sb.length]=n<10?"0"+n:n;sb[sb.length]='"'}return}else{if(t=="string"){if(strReg1.test(o)){sb[sb.length]='"';sb[sb.length]=o.replace(strReg2,replaceString);sb[sb.length]='"';return}sb[sb.length]='"'+o+'"';return}else{if(t=="number"){sb[sb.length]=o;return}else{if(t=="boolean"){sb[sb.length]=String(o);return}else{sb[sb.length]="{";var b,i,v;for(i in o){if(!useHasOwn||Object.prototype.hasOwnProperty.call(o,i)){v=o[i];t=typeof v;if(t=="undefined"||t=="function"||t=="unknown"){}else{if(b){sb[sb.length]=","}doEncode(i);sb[sb.length]=":";doEncode(v,i);b=true}}}sb[sb.length]="}";return}}}}}}},m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},strReg1=/["\\\x00-\x1f]/,strReg2=/([\x00-\x1f\\"])/g;this.encode=function(){var ec;return function(o,dateFormat){sb=[];_dateFormat=dateFormat;doEncode(o);_dateFormat=null;return sb.join("")}}();this.decode=function(){var dateRe1=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2}(?:\.*\d*)?)Z*$/;var dateRe2=new RegExp("^/+Date\\((-?[0-9]+).*\\)/+$","g");var re=/[\"\'](\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})[\"\']/g;return function(json,parseDate){if(json===""||json===null||json===undefined){return json}if(typeof json=="object"){json=this.encode(json)}function evalParse(json){if(parseDate!==false){json=json.replace(__js_dateRegEx,"$1new Date($2)");json=json.replace(re,"new Date($1,$2-1,$3,$4,$5,$6)");json=json.replace(__js_dateRegEx2,"new Date($1)")}return eval("("+json+")")}var data=null;if(window.JSON&&window.JSON.parse){var dateReviver=function(key,value){if(typeof value==="string"&&parseDate!==false){dateRe1.lastIndex=0;var a=dateRe1.exec(value);if(a){value=new Date(a[1],a[2]-1,a[3],a[4],a[5],a[6]);return value}dateRe2.lastIndex=0;var a=dateRe2.exec(value);if(a){value=new Date(parseInt(a[1]));return value}}return value};try{var json2=json.replace(__js_dateRegEx,'$1"/Date($2)/"');data=window.JSON.parse(json2,dateReviver)}catch(ex){data=evalParse(json)}}else{data=evalParse(json)}return data}}()})();__js_dateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"',"g");__js_dateRegEx2=new RegExp("[\"']/Date\\(([0-9]+)\\)/[\"']","g");mini.encode=mini.JSON.encode;mini.decode=mini.JSON.decode;mini.clone=function(e,c){if(e===null||e===undefined){return e}var b=mini.encode(e);var d=mini.decode(b);function a(f){for(var j=0,g=f.length;j<g;j++){var m=f[j];delete m._state;delete m._id;delete m._pid;delete m._uid;for(var k in m){var h=m[k];if(h instanceof Array){a(h)}}}}if(c!==false){a(d instanceof Array?d:[d])}return d};var DAY_MS=86400000,HOUR_MS=3600000,MINUTE_MS=60000;mini.copyTo(mini,{clearTime:function(a){if(!a){return null}return new Date(a.getFullYear(),a.getMonth(),a.getDate())},maxTime:function(a){if(!a){return null}return new Date(a.getFullYear(),a.getMonth(),a.getDate(),23,59,59)},cloneDate:function(a){if(!a){return null}return new Date(a.getTime())},addDate:function(b,a,c){if(!c){c="D"}b=new Date(b.getTime());switch(c.toUpperCase()){case"Y":b.setFullYear(b.getFullYear()+a);break;case"MO":b.setMonth(b.getMonth()+a);break;case"D":b.setDate(b.getDate()+a);break;case"H":b.setHours(b.getHours()+a);break;case"M":b.setMinutes(b.getMinutes()+a);break;case"S":b.setSeconds(b.getSeconds()+a);break;case"MS":b.setMilliseconds(b.getMilliseconds()+a);break}return b},getWeek:function(f,d,h){var i=Math.floor((14-(d))/12);var g=f+4800-i;var c=(d)+(12*i)-3;var j=h+Math.floor(((153*c)+2)/5)+(365*g)+Math.floor(g/4)-Math.floor(g/100)+Math.floor(g/400)-32045;var k=(j+31741-(j%7))%146097%36524%1461;var e=Math.floor(k/1460);var b=((k-e)%365)+e;NumberOfWeek=Math.floor(b/7)+1;return NumberOfWeek},getWeekStartDate:function(c,e){if(!e){e=0}if(e>6||e<0){throw new Error("out of weekday")}var a=c.getDay();var b=e-a;if(a<e){b-=7}var f=new Date(c.getFullYear(),c.getMonth(),c.getDate()+b);return f},getShortWeek:function(a){var b=this.dateInfo.daysShort;return b[a]},getLongWeek:function(a){var b=this.dateInfo.daysLong;return b[a]},getShortMonth:function(b){var a=this.dateInfo.monthsShort;return a[b]},getLongMonth:function(b){var a=this.dateInfo.monthsLong;return a[b]},dateInfo:{monthsLong:["January","Febraury","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],daysLong:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Su","Mo","Tu","We","Th","Fr","Sa"],quarterLong:["Q1","Q2","Q3","Q4"],quarterShort:["Q1","Q2","Q3","Q4"],halfYearLong:["first half","second half"],patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",f:"dddd, MMMM dd, yyyy H:mm tt",F:"dddd, MMMM dd, yyyy H:mm:ss tt",g:"M/d/yyyy H:mm tt",G:"M/d/yyyy H:mm:ss tt",m:"MMMM dd",o:"yyyy-MM-ddTHH:mm:ss.fff",s:"yyyy-MM-ddTHH:mm:ss",t:"H:mm tt",T:"H:mm:ss tt",U:"dddd, MMMM dd, yyyy HH:mm:ss tt",y:"MMM, yyyy"},tt:{AM:"AM",PM:"PM"},ten:{Early:"Early",Mid:"Mid",Late:"Late"},today:"Today",clockType:24}});Date.prototype.getHalfYear=function(){if(!this.getMonth){return null}var a=this.getMonth();if(a<6){return 0}return 1};Date.prototype.getQuarter=function(){if(!this.getMonth){return null}var a=this.getMonth();if(a<3){return 0}if(a<6){return 1}if(a<9){return 2}return 3};mini.formatDate=function(e,r,p){if(!e||!e.getFullYear||isNaN(e)){return""}var b=e.toString();var a=mini.dateInfo;if(!a){a=mini.dateInfo}if(typeof(a)!=="undefined"){var j=typeof(a.patterns[r])!=="undefined"?a.patterns[r]:r;var k=e.getFullYear();var i=e.getMonth();var l=e.getDate();if(r=="yyyy-MM-dd"){i=i+1<10?"0"+(i+1):i+1;l=l<10?"0"+l:l;return k+"-"+i+"-"+l}if(r=="MM/dd/yyyy"){i=i+1<10?"0"+(i+1):i+1;l=l<10?"0"+l:l;return i+"/"+l+"/"+k}b=j.replace(/yyyy/g,k);b=b.replace(/yy/g,(k+"").substring(2));var o=e.getHalfYear();b=b.replace(/hy/g,a.halfYearLong[o]);var c=e.getQuarter();b=b.replace(/Q/g,a.quarterLong[c]);b=b.replace(/q/g,a.quarterShort[c]);b=b.replace(/MMMM/g,a.monthsLong[i].escapeDateTimeTokens());b=b.replace(/MMM/g,a.monthsShort[i].escapeDateTimeTokens());b=b.replace(/MM/g,i+1<10?"0"+(i+1):i+1);b=b.replace(/(\\)?M/g,function(t,s){return s?t:i+1});var d=e.getDay();b=b.replace(/dddd/g,a.daysLong[d].escapeDateTimeTokens());b=b.replace(/ddd/g,a.daysShort[d].escapeDateTimeTokens());b=b.replace(/dd/g,l<10?"0"+l:l);b=b.replace(/(\\)?d/g,function(t,s){return s?t:l});var g=e.getHours();var n=g>12?g-12:g;if(a.clockType==12){if(g>12){g-=12}}b=b.replace(/HH/g,g<10?"0"+g:g);b=b.replace(/(\\)?H/g,function(t,s){return s?t:g});b=b.replace(/hh/g,n<10?"0"+n:n);b=b.replace(/(\\)?h/g,function(t,s){return s?t:n});var f=e.getMinutes();b=b.replace(/mm/g,f<10?"0"+f:f);b=b.replace(/(\\)?m/g,function(t,s){return s?t:f});var q=e.getSeconds();b=b.replace(/ss/g,q<10?"0"+q:q);b=b.replace(/(\\)?s/g,function(t,s){return s?t:q});b=b.replace(/fff/g,e.getMilliseconds());b=b.replace(/tt/g,e.getHours()>12||e.getHours()==0?a.tt.PM:a.tt.AM);var e=e.getDate();var h="";if(e<=10){h=a.ten.Early}else{if(e<=20){h=a.ten.Mid}else{h=a.ten.Late}}b=b.replace(/ten/g,h)}return b.replace(/\\/g,"")};String.prototype.escapeDateTimeTokens=function(){return this.replace(/([dMyHmsft])/g,"\\$1")};mini.fixDate=function(b,a){if(+b){while(b.getDate()!=a.getDate()){b.setTime(+b+(b<a?1:-1)*HOUR_MS)}}};mini.parseDate=function(s,ignoreTimezone){try{var d=eval(s);if(d&&d.getFullYear){return d}}catch(ex){}if(typeof s=="object"){return isNaN(s)?null:s}if(typeof s=="number"){var d=new Date(s*1000);if(d.getTime()!=s){return null}return isNaN(d)?null:d}if(typeof s=="string"){m=s.match(/^([0-9]{4})([0-9]{2})([0-9]{2})$/);if(m){var date=new Date(m[1],m[2]-1,m[3]);return date}m=s.match(/^([0-9]{4}).([0-9]*)$/);if(m){var date=new Date(m[1],m[2]-1);return date}if(s.match(/^\d+(\.\d+)?$/)){var d=new Date(parseFloat(s)*1000);if(d.getTime()!=s){return null}else{return d}}if(ignoreTimezone===undefined){ignoreTimezone=true}var d=mini.parseISO8601(s,ignoreTimezone)||(s?new Date(s):null);return isNaN(d)?null:d}return null};mini.parseISO8601=function(e,b){var a=e.match(/^([0-9]{4})([-\/]([0-9]{1,2})([-\/]([0-9]{1,2})([T ]([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!a){a=e.match(/^([0-9]{4})[-\/]([0-9]{2})[-\/]([0-9]{2})[T ]([0-9]{1,2})/);if(a){var d=new Date(a[1],a[2]-1,a[3],a[4]);return d}a=e.match(/^([0-9]{4}).([0-9]*)/);if(a){var d=new Date(a[1],a[2]-1);return d}a=e.match(/^([0-9]{4}).([0-9]*).([0-9]*)/);if(a){var d=new Date(a[1],a[2]-1,a[3]);return d}a=e.match(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/);if(!a){return null}else{var d=new Date(a[3],a[1]-1,a[2]);return d}}var d=new Date(a[1],0,1);if(b||!a[14]){var c=new Date(a[1],0,1,9,0);if(a[3]){d.setMonth(a[3]-1);c.setMonth(a[3]-1)}if(a[5]){d.setDate(a[5]);c.setDate(a[5])}mini.fixDate(d,c);if(a[7]){d.setHours(a[7])}if(a[8]){d.setMinutes(a[8])}if(a[10]){d.setSeconds(a[10])}if(a[12]){d.setMilliseconds(Number("0."+a[12])*1000)}mini.fixDate(d,c)}else{d.setUTCFullYear(a[1],a[3]?a[3]-1:0,a[5]||1);d.setUTCHours(a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1000:0);var f=Number(a[16])*60+(a[18]?Number(a[18]):0);f*=a[15]=="-"?1:-1;d=new Date(+d+(f*60*1000))}return d};mini.parseTime=function(e,g){if(!e){return null}var i=parseInt(e);if(i==e&&g){h=new Date(0);if(g[0]=="H"){h.setHours(i)}else{if(g[0]=="m"){h.setMinutes(i)}else{if(g[0]=="s"){h.setSeconds(i)}}}return h}var h=mini.parseDate(e);if(!h){var b=e.split(":");var f=parseInt(parseFloat(b[0]));var c=parseInt(parseFloat(b[1]));var a=parseInt(parseFloat(b[2]));if(!isNaN(f)&&!isNaN(c)&&!isNaN(a)){h=new Date(0);h.setHours(f);h.setMinutes(c);h.setSeconds(a)}if(!isNaN(f)&&(g=="H"||g=="HH")){h=new Date(0);h.setHours(f)}else{if(!isNaN(f)&&!isNaN(c)&&(g=="H:mm"||g=="HH:mm")){h=new Date(0);h.setHours(f);h.setMinutes(c)}else{if(!isNaN(f)&&!isNaN(c)&&g=="mm:ss"){h=new Date(0);h.setMinutes(f);h.setSeconds(c)}}}}return h};mini.dateInfo={monthsLong:["һ��","����","����","����","����","����","����","����","����","ʮ��","ʮһ��","ʮ����"],monthsShort:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],daysLong:["������","����һ","���ڶ�","������","������","������","������"],daysShort:["��","һ","��","��","��","��","��"],quarterLong:["һ����","������","������","�ļ���"],quarterShort:["Q1","Q2","Q2","Q4"],halfYearLong:["�ϰ���","�°���"],patterns:{d:"yyyy-M-d",D:"yyyy��M��d��",f:"yyyy��M��d�� H:mm",F:"yyyy��M��d�� H:mm:ss",g:"yyyy-M-d H:mm",G:"yyyy-M-d H:mm:ss",m:"MMMd��",o:"yyyy-MM-ddTHH:mm:ss.fff",s:"yyyy-MM-ddTHH:mm:ss",t:"H:mm",T:"H:mm:ss",U:"yyyy��M��d�� HH:mm:ss",y:"yyyy��MM��"},tt:{AM:"����",PM:"����"},ten:{Early:"��Ѯ",Mid:"��Ѯ",Late:"��Ѯ"},today:"����",clockType:24};mini.append=function(c,a){c=mini.byId(c);if(!a||!c){return}if(typeof a=="string"){if(a.charAt(0)=="#"){a=mini.byId(a);if(!a){return}c.appendChild(a);return a}else{if(a.indexOf("<tr")==0){return jQuery(c).append(a)[0].lastChild;return}var b=document.createElement("div");b.innerHTML=a;a=b.firstChild;while(b.firstChild){c.appendChild(b.firstChild)}return a}}else{c.appendChild(a);return a}};mini.prepend=function(c,a){if(typeof a=="string"){if(a.charAt(0)=="#"){a=mini.byId(a)}else{var b=document.createElement("div");b.innerHTML=a;a=b.firstChild}}return jQuery(c).prepend(a)[0].firstChild};mini.after=function(c,a){if(typeof a=="string"){if(a.charAt(0)=="#"){a=mini.byId(a)}else{var b=document.createElement("div");b.innerHTML=a;a=b.firstChild}}if(!a||!c){return}c.nextSibling?c.parentNode.insertBefore(a,c.nextSibling):c.parentNode.appendChild(a);return a};mini.before=function(c,a){if(typeof a=="string"){if(a.charAt(0)=="#"){a=mini.byId(a)}else{var b=document.createElement("div");b.innerHTML=a;a=b.firstChild}}if(!a||!c){return}c.parentNode.insertBefore(a,c);return a};mini.__wrap=document.createElement("div");mini.createElements=function(b){mini.removeChilds(mini.__wrap);var a=b.indexOf("<tr")==0;if(a){b="<table>"+b+"</table>"}mini.__wrap.innerHTML=b;return a?mini.__wrap.firstChild.rows:mini.__wrap.childNodes};mini_byId=function(g,d){if(typeof g=="string"){if(g.charAt(0)=="#"){g=g.substr(1)}var f=document.getElementById(g);if(f){return f}if(d&&!mini.isAncestor(document.body,d)){var c=d.getElementsByTagName("*");for(var b=0,a=c.length;b<a;b++){var f=c[b];if(f.id==g){return f}}f=null}return f}else{return g}};mini_hasClass=function(c,b){c=mini.byId(c);if(!c){return}if(!c.className){return false}var a=String(c.className).split(" ");return a.indexOf(b)!=-1};mini_addClass=function(b,a){if(!a){return}if(mini.hasClass(b,a)==false){jQuery(b).addClass(a)}};mini_removeClass=function(b,a){if(!a){return}jQuery(b).removeClass(a)};mini_getMargins=function(a){a=mini.byId(a);var b=jQuery(a);return{top:parseInt(b.css("margin-top"),10)||0,left:parseInt(b.css("margin-left"),10)||0,bottom:parseInt(b.css("margin-bottom"),10)||0,right:parseInt(b.css("margin-right"),10)||0}};mini_getBorders=function(a){a=mini.byId(a);var b=jQuery(a);return{top:parseInt(b.css("border-top-width"),10)||0,left:parseInt(b.css("border-left-width"),10)||0,bottom:parseInt(b.css("border-bottom-width"),10)||0,right:parseInt(b.css("border-right-width"),10)||0}};mini_getPaddings=function(a){a=mini.byId(a);var b=jQuery(a);return{top:parseInt(b.css("padding-top"),10)||0,left:parseInt(b.css("padding-left"),10)||0,bottom:parseInt(b.css("padding-bottom"),10)||0,right:parseInt(b.css("padding-right"),10)||0}};mini_setWidth=function(d,c){d=mini.byId(d);c=parseInt(c);if(isNaN(c)||!d){return}if(jQuery.boxModel){var f=mini.getPaddings(d);var a=mini.getBorders(d);c=c-f.left-f.right-a.left-a.right}if(c<0){c=0}d.style.width=c+"px"};mini_setHeight=function(d,c){d=mini.byId(d);c=parseInt(c);if(isNaN(c)||!d){return}if(jQuery.boxModel){var f=mini.getPaddings(d);var a=mini.getBorders(d);c=c-f.top-f.bottom-a.top-a.bottom}if(c<0){c=0}d.style.height=c+"px"};mini_getWidth=function(a,b){a=mini.byId(a);if(a.style.display=="none"||a.type=="text/javascript"){return 0}return b?jQuery(a).width():jQuery(a).outerWidth()};mini_getHeight=function(a,b){a=mini.byId(a);if(a.style.display=="none"||a.type=="text/javascript"){return 0}return b?jQuery(a).height():jQuery(a).outerHeight()};mini_setBox=function(d,b,f,c,a){if(f===undefined){f=b.y;c=b.width;a=b.height;b=b.x}mini.setXY(d,b,f);mini.setWidth(d,c);mini.setHeight(d,a)};mini_getBox=function(a){var c=mini.getXY(a);var b={x:c[0],y:c[1],width:mini.getWidth(a),height:mini.getHeight(a)};b.left=b.x;b.top=b.y;b.right=b.x+b.width;b.bottom=b.y+b.height;return b};mini_setStyle=function(b,a){b=mini.byId(b);if(!b||typeof a!="string"){return}var c=jQuery(b);var j=a.toLowerCase().split(";");for(var f=0,d=j.length;f<d;f++){var k=j[f];var m=k.split(":");if(m.length>1){if(m.length>2){var h=m[0].trim();m.removeAt(0);var g=m.join(":").trim();c.css(h,g)}else{c.css(m[0].trim(),m[1].trim())}}}};mini_getStyle=function(){var a=document.defaultView;return new Function("el","style",["style.indexOf('-')>-1 && (style=style.replace(/-(\\w)/g,function(m,a){return a.toUpperCase()}));","style=='float' && (style='",a?"cssFloat":"styleFloat","');return el.style[style] || ",a?"window.getComputedStyle(el, null)[style]":"el.currentStyle[style]"," || null;"].join(""))}();mini_isAncestor=function(d,f){var a=false;d=mini.byId(d);f=mini.byId(f);if(d===f){return true}if(d&&f){if(d.contains){try{return d.contains(f)}catch(b){return false}}else{if(d.compareDocumentPosition){return !!(d.compareDocumentPosition(f)&16)}else{while(f=f.parentNode){a=f==d||a}}}}return a};mini_findParent=function(f,c,h){f=mini.byId(f);var a=document.body,g=0,d;h=h||50;if(typeof h!="number"){d=mini.byId(h);h=10}while(f&&f.nodeType==1&&g<h&&f!=a&&f!=d){if(mini.hasClass(f,c)){return f}g++;f=f.parentNode}return null};mini.copyTo(mini,{byId:mini_byId,hasClass:mini_hasClass,addClass:mini_addClass,removeClass:mini_removeClass,getMargins:mini_getMargins,getBorders:mini_getBorders,getPaddings:mini_getPaddings,setWidth:mini_setWidth,setHeight:mini_setHeight,getWidth:mini_getWidth,getHeight:mini_getHeight,setBox:mini_setBox,getBox:mini_getBox,setStyle:mini_setStyle,getStyle:mini_getStyle,repaint:function(a){if(!a){a=document.body}mini.addClass(a,"mini-repaint");setTimeout(function(){mini.removeClass(a,"mini-repaint")},1)},getSize:function(a,b){return{width:mini.getWidth(a,b),height:mini.getHeight(a,b)}},setSize:function(c,b,a){mini.setWidth(c,b);mini.setHeight(c,a)},setX:function(b,a){a=parseInt(a);var c=jQuery(b).offset();var d=parseInt(c.top);if(d===undefined){d=c[1]}mini.setXY(b,a,d)},setY:function(b,d){d=parseInt(d);var c=jQuery(b).offset();var a=parseInt(c.left);if(a===undefined){a=c[0]}mini.setXY(b,a,d)},setXY:function(b,a,d){var c={left:parseInt(a),top:parseInt(d)};jQuery(b).offset(c);jQuery(b).offset(c)},getXY:function(a){var b=jQuery(a).offset();return[parseInt(b.left),parseInt(b.top)]},getViewportBox:function(){var b=jQuery(window).width(),c=jQuery(window).height();var a=jQuery(document).scrollLeft(),d=jQuery(document.body).scrollTop();if(d==0&&document.documentElement){d=document.documentElement.scrollTop}return{x:a,y:d,top:d,left:a,width:b,height:c,right:a+b,bottom:d+c}},showAt:function(m){var g=jQuery;m=g.extend({el:null,x:"center",y:"center",offset:[0,0],fixed:false,zindex:mini.zindex(),timeout:0,timeoutHandler:null,animation:false},m);var c=g(m.el)[0],i=m.x,h=m.y,b=m.offset[0],a=m.offset[1],j=m.zindex,f=m.fixed,d=m.animation;if(!c){return}if(m.timeout){setTimeout(function(){if(m.timeoutHandler){m.timeoutHandler()}},m.timeout)}var l=";position:absolute;display:block;left:auto;top:auto;right:auto;bottom:auto;margin:0;z-index:"+j+";";mini.setStyle(c,l);var l="";if(m&&mini.isNumber(m.x)&&mini.isNumber(m.y)){if(m.fixed&&!mini.isIE6){l+=";position:fixed;"}mini.setStyle(c,l);mini.setXY(m.el,m.x,m.y);return}if(i=="left"){l+="left:"+b+"px;"}else{if(i=="right"){l+="right:"+b+"px;"}else{var k=mini.getSize(c);l+="left:50%;margin-left:"+(-k.width*0.5)+"px;"}}if(h=="top"){l+="top:"+a+"px;"}else{if(h=="bottom"){l+="bottom:"+a+"px;"}else{var k=mini.getSize(c);l+="top:50%;margin-top:"+(-k.height*0.5)+"px;"}}if(f&&!mini.isIE6){l+="position:fixed"}mini.setStyle(c,l)},getChildNodes:function(h,g){h=mini.byId(h);if(!h){return}var b=h.childNodes;var f=[];for(var d=0,a=b.length;d<a;d++){var j=b[d];if(j.nodeType==1||g===true){f.push(j)}}return f},removeChilds:function(g,a){g=mini.byId(g);if(!g){return}var f=mini.getChildNodes(g,true);for(var d=0,b=f.length;d<b;d++){var h=f[d];if(a&&h==a){}else{g.removeChild(f[d])}}},isAncestor:mini_isAncestor,findParent:mini_findParent,findChild:function(f,b){f=mini.byId(f);var d=f.getElementsByTagName("*");for(var c=0,a=d.length;c<a;c++){var f=d[c];if(mini.hasClass(f,b)){return f}}},isAncestor:function(d,f){var a=false;d=mini.byId(d);f=mini.byId(f);if(d===f){return true}if(d&&f){if(d.contains){try{return d.contains(f)}catch(b){return false}}else{if(d.compareDocumentPosition){return !!(d.compareDocumentPosition(f)&16)}else{while(f=f.parentNode){a=f==d||a}}}}return a},getOffsetsTo:function(a,c){var d=this.getXY(a),b=this.getXY(c);return[d[0]-b[0],d[1]-b[1]]},scrollIntoView:function(h,f,i){var p=mini.byId(f)||document.body,g=this.getOffsetsTo(h,p),k=g[0]+p.scrollLeft,u=g[1]+p.scrollTop,q=u+h.offsetHeight,d=k+h.offsetWidth,a=p.clientHeight,m=parseInt(p.scrollTop,10),s=parseInt(p.scrollLeft,10),j=m+a,n=s+p.clientWidth;if(h.offsetHeight>a||u<m){p.scrollTop=u}else{if(q>j){p.scrollTop=q-a}}p.scrollTop=p.scrollTop;if(i!==false){if(h.offsetWidth>p.clientWidth||k<s){p.scrollLeft=k}else{if(d>n){p.scrollLeft=d-p.clientWidth}}p.scrollLeft=p.scrollLeft}return this},setOpacity:function(b,a){jQuery(b).css({opacity:a})},selectable:function(b,a){b=mini.byId(b);if(!!a){jQuery(b).removeClass("mini-unselectable");if(isIE){b.unselectable="off"}else{b.style.MozUserSelect="";b.style.KhtmlUserSelect="";b.style.UserSelect=""}}else{jQuery(b).addClass("mini-unselectable");if(isIE){b.unselectable="on"}else{b.style.MozUserSelect="none";b.style.UserSelect="none";b.style.KhtmlUserSelect="none"}}},selectRange:function(c,b,a){if(c.createTextRange){var f=c.createTextRange();f.moveStart("character",b);f.moveEnd("character",a-c.value.length);f.select()}else{if(c.setSelectionRange){c.setSelectionRange(b,a)}}try{c.focus()}catch(d){}},getSelectRange:function(b){b=mini.byId(b);if(!b){return}try{b.focus()}catch(d){}var f=0,a=0;if(b.createTextRange&&document.selection){var c=document.selection.createRange().duplicate();c.moveEnd("character",b.value.length);if(c.text===""){f=b.value.length}else{f=b.value.lastIndexOf(c.text)}var c=document.selection.createRange().duplicate();c.moveStart("character",-b.value.length);a=c.text.length}else{f=b.selectionStart;a=b.selectionEnd}return[f,a]}});(function(){var a={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};var c=document.createElement("div");c.setAttribute("class","t");var b=c.className==="t";mini.setAttr=function(f,d,g){f.setAttribute(b?d:(a[d]||d),g)};mini.getAttr=function(h,g){if(g=="value"&&(isIE6||isIE7)){var d=h.attributes[g];return d?d.value:null}var f=h.getAttribute(b?g:(a[g]||g));if(typeof f=="function"){f=h.attributes[g].value}if(!f&&g=="onload"){var i=h.getAttributeNode?h.getAttributeNode(g):null;if(i){f=i.nodeValue}}return f}})();mini_preventDefault=function(){if(window.event){window.event.returnValue=false}};mini_stopPropogation=function(){if(window.event){window.event.cancelBubble=true}};mini_onOne=function(f,d,c,b){if(!f){return}var a="on"+d.toLowerCase();f[a]=function(h){h=h||window.event;if(!h.target){h.target=h.srcElement}if(!h.preventDefault){h.preventDefault=mini_preventDefault}if(!h.stopPropogation){h.stopPropogation=mini_stopPropogation}var g=c.call(b,h);if(g===false){return false}}};mini_on=function(d,c,b,a){d=mini.byId(d);a=a||d;if(!d||!c||!b||!a){return false}var f=mini.findListener(d,c,b,a);if(f){return false}var g=mini.createDelegate(b,a);mini.listeners.push([d,c,b,a,g]);if(mini.isFirefox&&c=="mousewheel"){c="DOMMouseScroll"}jQuery(d).bind(c,g)};mini_un=function(d,c,b,a){d=mini.byId(d);a=a||d;if(!d||!c||!b||!a){return false}var f=mini.findListener(d,c,b,a);if(!f){return false}mini.listeners.remove(f);if(mini.isFirefox&&c=="mousewheel"){c="DOMMouseScroll"}jQuery(d).unbind(c,f[4])};mini.copyTo(mini,{listeners:[],on:mini_on,un:mini_un,_getListeners:function(){var d=mini.listeners;for(var c=d.length-1;c>=0;c--){var f=d[c];try{if(f[0]==1&&f[1]==1&&f[2]==1&&f[3]==1){var a=1}}catch(b){d.removeAt(c)}}return d},findListener:function(h,g,f,d){h=mini.byId(h);d=d||h;if(!h||!g||!f||!d){return false}var c=mini._getListeners();for(var b=c.length-1;b>=0;b--){var j=c[b];try{if(j[0]==h&&j[1]==g&&j[2]==f&&j[3]==d){return j}}catch(a){}}},clearEvent:function(d,c){d=mini.byId(d);if(!d){return false}var b=mini._getListeners();for(var a=b.length-1;a>=0;a--){var f=b[a];if(f[0]==d){if(!c||c==f[1]){mini.un(d,f[1],f[2],f[3])}}}d.onmouseover=d.onmousedown=null}});mini.__windowResizes=[];mini.onWindowResize=function(b,a){mini.__windowResizes.push([b,a])};mini.on(window,"resize",function(f){var c=mini.__windowResizes;for(var b=0,a=c.length;b<a;b++){var d=c[b];d[0].call(d[1],f)}});mini.htmlEncode=function(b){if(typeof b!=="string"){return b}var a="";if(b.length==0){return""}a=b;a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");a=a.replace(/ /g,"&nbsp;");a=a.replace(/\'/g,"&#39;");a=a.replace(/\"/g,"&quot;");return a};mini.htmlDecode=function(b){if(typeof b!=="string"){return b}var a="";if(b.length==0){return""}a=b.replace(/&gt;/g,"&");a=a.replace(/&lt;/g,"<");a=a.replace(/&gt;/g,">");a=a.replace(/&nbsp;/g," ");a=a.replace(/&#39;/g,"'");a=a.replace(/&quot;/g,'"');return a};mini.copyTo(Array.prototype,{add:Array.prototype.enqueue=function(a){this[this.length]=a;return this},getRange:function(f,b){var a=[];for(var c=f;c<=b;c++){var d=this[c];if(d){a[a.length]=d}}return a},addRange:function(c){for(var b=0,a=c.length;b<a;b++){this[this.length]=c[b]}return this},clear:function(){this.length=0;return this},clone:function(){if(this.length===1){return[this[0]]}else{return Array.apply(null,this)}},contains:function(a){return(this.indexOf(a)>=0)},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b}}return -1},dequeue:function(){return this.shift()},insert:function(a,b){this.splice(a,0,b);return this},insertRange:function(b,a){for(var c=a.length-1;c>=0;c--){var d=a[c];this.splice(b,0,d)}return this},remove:function(b){var a=this.indexOf(b);if(a>=0){this.splice(a,1)}return(a>=0)},removeAt:function(a){var b=this[a];this.splice(a,1);return b},removeRange:function(b){b=b.clone();for(var c=0,a=b.length;c<a;c++){this.remove(b[c])}}});mini.Keyboard={Left:37,Top:38,Right:39,Bottom:40,PageUp:33,PageDown:34,End:35,Home:36,Enter:13,ESC:27,Space:32,Tab:9,Del:46,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123};var ua=navigator.userAgent.toLowerCase(),check=function(a){return a.test(ua)},DOC=document,isStrict=document.compatMode=="CSS1Compat",version=function(c,b){var a;return(c&&(a=b.exec(ua)))?parseFloat(a[1]):0},docMode=document.documentMode,isOpera=check(/opera/),isOpera10_5=isOpera&&check(/version\/10\.5/),isChrome=check(/\bchrome\b/),isWebKit=check(/webkit/),isSafari=!isChrome&&check(/safari/),isSafari2=isSafari&&check(/applewebkit\/4/),isSafari3=isSafari&&check(/version\/3/),isSafari4=isSafari&&check(/version\/4/),isSafari5_0=isSafari&&check(/version\/5\.0/),isSafari5=isSafari&&check(/version\/5/),isIE=!isOpera&&check(/msie/),isIE7=isIE&&((check(/msie 7/)&&docMode!=8&&docMode!=9&&docMode!=10)||docMode==7),isIE8=isIE&&((check(/msie 8/)&&docMode!=7&&docMode!=9&&docMode!=10)||docMode==8),isIE9=isIE&&((check(/msie 9/)&&docMode!=7&&docMode!=8&&docMode!=10)||docMode==9),isIE10=isIE&&((check(/msie 10/)&&docMode!=7&&docMode!=8&&docMode!=9)||docMode==10),isIE6=isIE&&!isIE7&&!isIE8&&!isIE9&&!isIE10,isIE11=(ua.indexOf("trident")>-1&&ua.indexOf("rv")>-1),isFirefox=navigator.userAgent.indexOf("Firefox")>0,isGecko=!isWebKit&&check(/gecko/),isGecko3=isGecko&&check(/rv:1\.9/),isGecko4=isGecko&&check(/rv:2\.0/),isGecko5=isGecko&&check(/rv:5\./),isGecko10=isGecko&&check(/rv:10\./),isFF3_0=isGecko3&&check(/rv:1\.9\.0/),isFF3_5=isGecko3&&check(/rv:1\.9\.1/),isFF3_6=isGecko3&&check(/rv:1\.9\.2/),isWindows=check(/windows|win32/),isMac=check(/macintosh|mac os x/),isAir=check(/adobeair/),isLinux=check(/linux/),scrollbarSize=null,chromeVersion=version(true,/\bchrome\/(\d+\.\d+)/),firefoxVersion=version(true,/\bfirefox\/(\d+\.\d+)/),ieVersion=version(isIE,/msie (\d+\.\d+)/),operaVersion=version(isOpera,/version\/(\d+\.\d+)/),safariVersion=version(isSafari,/version\/(\d+\.\d+)/),webKitVersion=version(isWebKit,/webkit\/(\d+\.\d+)/),isSecure=/^https/i.test(window.location.protocol),isBorderBox=isIE&&!isStrict;if(isIE6){try{DOC.execCommand("BackgroundImageCache",false,true)}catch(e){}}mini.boxModel=!isBorderBox;mini.isIE=isIE;mini.isIE6=isIE6;mini.isIE7=isIE7;mini.isIE8=isIE8;mini.isIE9=isIE9;mini.isIE10=isIE10;mini.isIE11=isIE11;mini.isFirefox=isFirefox;mini.isOpera=isOpera;mini.isSafari=isSafari;mini.isChrome=isChrome;if(jQuery){jQuery.boxModel=mini.boxModel}mini.noBorderBox=false;if(jQuery.boxModel==false&&isIE&&isIE9==false){mini.noBorderBox=true}mini.MouseButton={Left:0,Middle:1,Right:2};if(isIE&&!isIE9&&!isIE10){mini.MouseButton={Left:1,Middle:4,Right:2}}mini._MaskID=1;mini._MaskObjects={};mini.mask=function(c){var d=mini.byId(c);if(mini.isElement(d)){c={el:d}}else{if(typeof c=="string"){c={html:c}}}c=mini.copyTo({html:"",cls:"",style:"",backStyle:"background:#ccc"},c);c.el=mini.byId(c.el);if(!c.el){c.el=document.body}var d=c.el;mini.unmask(c.el);d._maskid=mini._MaskID++;mini._MaskObjects[d._maskid]=c;var f=mini.append(d,'<div class="mini-mask"><div class="mini-mask-background" style="'+c.backStyle+'"></div><div class="mini-mask-msg '+c.cls+'" style="'+c.style+'">'+c.html+"</div></div>");if(d==document.body){mini.addClass(f,"mini-fixed")}c.maskEl=f;if(!mini.isNull(c.opacity)){mini.setOpacity(f.firstChild,c.opacity)}function a(){b.style.display="block";var g=mini.getSize(b);b.style.marginLeft=-g.width/2+"px";b.style.marginTop=-g.height/2+"px"}var b=f.lastChild;b.style.display="none";setTimeout(function(){a()},0)};mini.unmask=function(b){b=mini.byId(b);if(!b){b=document.body}var a=mini._MaskObjects[b._maskid];if(!a){return}delete mini._MaskObjects[b._maskid];var c=a.maskEl;a.maskEl=null;if(c&&c.parentNode){c.parentNode.removeChild(c)}};mini.Cookie={get:function(f){var c=document.cookie.split("; ");var g=null;for(var d=0;d<c.length;d++){var a=c[d].split("=");if(f==a[0]){g=a}}if(g){var b=g[1];if(b===undefined){return b}return unescape(b)}return null},set:function(b,f,a,d){var c=new Date();if(a!=null){c=new Date(c.getTime()+(a*1000*3600*24))}document.cookie=b+"="+escape(f)+((a==null)?"":("; expires="+c.toGMTString()))+";path=/"+(d?"; domain="+d:"")},del:function(a,b){this.set(a,null,-100,b)}};mini.copyTo(mini,{treeToArray:function(a,n,c,k,j){if(!n){n="children"}var m=[];for(var g=0,f=a.length;g<f;g++){var d=a[g];m[m.length]=d;if(k){d[k]=j}var o=d[n];if(o&&o.length>0){var b=d[c];var h=this.treeToArray(o,n,c,k,b);m.addRange(h)}}return m},arrayToTree:function(j,n,d,m){if(!n){n="children"}d=d||"_id";m=m||"_pid";var a=[];var g={};for(var k=0,h=j.length;k<h;k++){var f=j[k];if(!f){continue}var c=f[d];if(c!==null&&c!==undefined){g[c]=f}delete f[n]}for(var k=0,h=j.length;k<h;k++){var f=j[k];var b=g[f[m]];if(!b){a.push(f);continue}if(!b[n]){b[n]=[]}b[n].push(f)}return a}});mini.treeToList=mini.treeToArray;mini.listToTree=mini.arrayToTree;function UUID(){var b=[],c="0123456789ABCDEF".split("");for(var a=0;a<36;a++){b[a]=Math.floor(Math.random()*16)}b[14]=4;b[19]=(b[19]&3)|8;for(var a=0;a<36;a++){b[a]=c[b[a]]}b[8]=b[13]=b[18]=b[23]="-";return b.join("")}String.format=function(b){var a=Array.prototype.slice.call(arguments,1);b=b||"";return b.replace(/\{(\d+)\}/g,function(c,d){return a[d]})};String.prototype.trim=function(){var a=/^\s+|\s+$/g;return function(){return this.replace(a,"")}}();mini.copyTo(mini,{measureText:function(b,h,a){if(!this.measureEl){this.measureEl=mini.append(document.body,"<div></div>")}this.measureEl.style.cssText="position:absolute;left:-1000px;top:-1000px;visibility:hidden;";if(typeof b=="string"){this.measureEl.className=b}else{this.measureEl.className="";var k=jQuery(b);var j=jQuery(this.measureEl);var c=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(var f=0,d=c.length;f<d;f++){var g=c[f];j.css(g,k.css(g))}}if(a){mini.setStyle(this.measureEl,a)}this.measureEl.innerHTML=h;return mini.getSize(this.measureEl)}});if(typeof mini_layoutOnParse=="undefined"){mini_layoutOnParse=true}jQuery(function(){var a=new Date();mini.isReady=true;mini.parse(null,mini_layoutOnParse);mini._FireBindEvents();if((mini.getStyle(document.body,"overflow")=="hidden"||mini.getStyle(document.documentElement,"overflow")=="hidden")&&(isIE6||isIE7)){jQuery(document.body).css("overflow","visible");jQuery(document.documentElement).css("overflow","visible")}mini.__LastWindowWidth=document.documentElement.clientWidth;mini.__LastWindowHeight=document.documentElement.clientHeight});mini_onload=function(a){mini.layout(null,mini_layoutOnParse?false:true);mini.on(window,"resize",mini_onresize)};mini.on(window,"load",mini_onload);mini.__LastWindowWidth=document.documentElement.clientWidth;mini.__LastWindowHeight=document.documentElement.clientHeight;mini.doWindowResizeTimer=null;mini.allowLayout=true;mini_onresize=function(c){if(mini.doWindowResizeTimer){clearTimeout(mini.doWindowResizeTimer)}mini.WindowVisible=mini.isWindowDisplay();if(mini.WindowVisible==false||mini.allowLayout==false){return}if(typeof Ext!="undefined"){mini.doWindowResizeTimer=setTimeout(function(){var f=document.documentElement.clientWidth;var d=document.documentElement.clientHeight;if(mini.__LastWindowWidth==f&&mini.__LastWindowHeight==d){}else{mini.__LastWindowWidth=f;mini.__LastWindowHeight=d;mini.layout(null,false)}mini.doWindowResizeTimer=null},300)}else{var a=100;try{if(parent&&parent!=window&&parent.mini){a=0}}catch(b){}mini.doWindowResizeTimer=setTimeout(function(){var f=document.documentElement.clientWidth;var d=document.documentElement.clientHeight;if(mini.__LastWindowWidth==f&&mini.__LastWindowHeight==d){}else{mini.__LastWindowWidth=f;mini.__LastWindowHeight=d;mini.layout(null,false)}mini.doWindowResizeTimer=null},a)}};mini.isDisplay=function(c,a){var b=a||document.body;while(1){if(c==null||!c.style){return false}if(c&&c.style&&c.style.display=="none"){return false}if(c==b){return true}c=c.parentNode}return true};mini.isWindowDisplay=function(){try{var c=window.parent;var m=c!=window;if(m){var g=c.document.getElementsByTagName("iframe");var a=c.document.getElementsByTagName("frame");var j=[];for(var h=0,d=g.length;h<d;h++){j.push(g[h])}for(var h=0,d=a.length;h<d;h++){j.push(a[h])}var f=null;for(var h=0,d=j.length;h<d;h++){var b=j[h];if(b.contentWindow==window){f=b;break}}if(!f){return false}return mini.isDisplay(f,c.document.body)}else{return true}}catch(k){return true}};mini.WindowVisible=mini.isWindowDisplay();mini.layoutIFrames=function(a){if(!document.body){return}if(!a){a=document.body}var b=a.getElementsByTagName("iframe");setTimeout(function(){for(var f=0,c=b.length;f<c;f++){var g=b[f];try{if(mini.isDisplay(g)&&mini.isAncestor(a,g)){if(g.contentWindow.mini){if(g.contentWindow.mini.WindowVisible==false){g.contentWindow.mini.WindowVisible=g.contentWindow.mini.isWindowDisplay();g.contentWindow.mini.layout()}else{g.contentWindow.mini.layout(null,false)}}g.contentWindow.mini.layoutIFrames()}}catch(d){}}},30)};$.ajaxSetup({cache:false});if(isIE){setInterval(function(){},20000)}mini_unload=function(k){try{var j=mini._getTopWindow();j[mini._WindowID]="";delete j[mini._WindowID]}catch(m){}var g=document.body.getElementsByTagName("iframe");if(g.length>0){var f=[];for(var d=0,a=g.length;d<a;d++){f.push(g[d])}for(var d=0,a=f.length;d<a;d++){try{var b=f[d];b._ondestroy=null;b.onload=function(){};jQuery(b).unbind("load");b.src="";try{b.contentWindow.document.write("");b.contentWindow.document.close()}catch(m){}if(b.parentNode){b.parentNode.removeChild(b)}}catch(k){}}}var h=mini.getComponents();for(var d=0,a=h.length;d<a;d++){var c=h[d];if(c.destroyed!==true){c.destroy(false)}}h.length=0;h=null;mini.un(window,"unload",mini_unload);mini.un(window,"load",mini_onload);mini.un(window,"resize",mini_onresize);mini.components={};mini.classes={};mini.uiClasses={};mini.uids={};mini._topWindow=null;window.mini=null;window.Owner=null;window.CloseOwnerWindow=null;try{}catch(k){}};mini.on(window,"unload",mini_unload);function __OnIFrameMouseDown(){jQuery(document).trigger("mousedown")}function __BindIFrames(){if(mini.isIE10){return}var g=document.getElementsByTagName("iframe");for(var b=0,a=g.length;b<a;b++){var c=g[b];try{if(c.contentWindow&&c.contentWindow.document&&!c.contentWindow.__mousedownbinded){c.contentWindow.__mousedownbinded=true;var f=c.contentWindow.document}}catch(d){}}}setInterval(function(){__BindIFrames()},1500);mini.zIndex=1000;mini.zindex=mini.getMaxZIndex=function(){return mini.zIndex++};function js_isTouchDevice(){try{document.createEvent("TouchEvent");return true}catch(a){return false}}function js_touchScroll(c){if(js_isTouchDevice()){var a=typeof c=="string"?document.getElementById(c):c;var b=0;a.addEventListener("touchstart",function(d){b=this.scrollTop+d.touches[0].pageY;d.preventDefault()},false);a.addEventListener("touchmove",function(d){this.scrollTop=b-d.touches[0].pageY;d.preventDefault()},false)}}mini._placeholder=function(b){b=mini.byId(b);if(!b||!isIE||isIE10){return}function c(){var d=b._placeholder_label;if(!d){return}var f=b.getAttribute("placeholder");if(!f){f=b.placeholder}if(!b.value&&!b.disabled){d.innerHTML=f;d.style.display=""}else{d.style.display="none"}}if(b._placeholder){c();return}b._placeholder=true;var a=document.createElement("label");a.className="mini-placeholder-label";b.parentNode.appendChild(a);b._placeholder_label=a;a.onmousedown=function(){b.focus()};b.onpropertychange=function(d){d=d||window.event;if(d.propertyName=="value"){c()}};c();mini.on(b,"focus",function(d){if(!b.readOnly){a.style.display="none"}});mini.on(b,"blur",function(d){c()})};mini.ajax=function(a){if(!a.dataType){a.dataType="text"}return window.jQuery.ajax(a)};mini._evalAjaxData=function(ajaxData,scope){var obj=ajaxData;var t=typeof ajaxData;if(t=="string"){obj=eval("("+ajaxData+")");if(typeof obj=="function"){obj=obj.call(scope)}}return obj};if(!jQuery.fn.on){jQuery.fn.on=function(c,a,d,b){return this.delegate(a,c,d,b)}};if(typeof window.rootpath=="undefined"){rootpath="/"}mini.loadJS=function(a,b){if(!a){return}if(typeof b=="function"){return loadJS._async(a,b)}else{return loadJS._sync(a)}};mini.loadJS._js={};mini.loadJS._async=function(e,f){var c=mini.loadJS._js[e];if(!c){c=mini.loadJS._js[e]={create:false,loaded:false,callbacks:[]}}if(c.loaded){setTimeout(function(){f()},1);return}else{c.callbacks.push(f);if(c.create){return}}c.create=true;var a=document.getElementsByTagName("head")[0];var d=document.createElement("script");d.src=e;d.type="text/javascript";function b(){for(var g=0;g<c.callbacks.length;g++){var h=c.callbacks[g];if(h){h()}}c.callbacks.length=0}setTimeout(function(){if(document.all){d.onreadystatechange=function(){if(d.readyState=="loaded"||d.readyState=="complete"){b();c.loaded=true}}}else{d.onload=function(){b();c.loaded=true}}a.appendChild(d)},1);return d};mini.loadJS._sync=function(c){if(loadJS._js[c]){return}loadJS._js[c]={create:true,loaded:true,callbacks:[]};var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.text=loadText(c);a.appendChild(b);return b};mini.loadText=function(a){var g="";var c=document.all&&location.protocol=="file:";var b=null;if(c){b=new ActiveXObject("Microsoft.XMLHTTP")}else{if(window.XMLHttpRequest){b=new XMLHttpRequest()}else{if(window.ActiveXObject){b=new ActiveXObject("Microsoft.XMLHTTP")}}}b.onreadystatechange=e;var f="_t="+new Date().getTime();if(a.indexOf("?")==-1){f="?"+f}else{f="&"+f}a+=f;b.open("GET",a,false);b.send(null);function e(){if(b.readyState==4){var d=c?0:200;if(b.status==d){g=b.responseText}else{}}}return g};mini.loadJSON=function(url){var text=loadText(url);var o=eval("("+text+")");return o};mini.loadCSS=function(c,d){if(!c){return}if(loadCSS._css[c]){return}var a=document.getElementsByTagName("head")[0];var b=document.createElement("link");if(d){b.id=d}b.href=c;b.rel="stylesheet";b.type="text/css";a.appendChild(b);return b};mini.loadCSS._css={};mini.innerHTML=function(b,a){if(typeof b=="string"){b=document.getElementById(b)}if(!b){return}a='<div style="display:none">&nbsp;</div>'+a;b.innerHTML=a;mini.__executeScripts(b);var c=b.firstChild};mini.__executeScripts=function(h){var a=h.getElementsByTagName("script");for(var c=0,b=a.length;c<b;c++){var g=a[c];var f=g.src;if(f){mini.loadJS(f)}else{var e=document.createElement("script");e.type="text/javascript";e.text=g.text;h.appendChild(e)}}for(var c=a.length-1;c>=0;c--){var g=a[c];g.parentNode.removeChild(g)}};mini.Hidden=function(){mini.Hidden.superclass.constructor.call(this)};mini.extend(mini.Hidden,mini.Control,{_clearBorder:false,formField:true,value:"",uiCls:"mini-hidden",_create:function(){this.el=document.createElement("input");this.el.type="hidden";this.el.className="mini-hidden"},setName:function(a){this.name=a;this.el.name=a},setValue:function(b){if(b===null||b===undefined){b=""}this.value=b;if(mini.isDate(b)){var e=b.getFullYear();var a=b.getMonth()+1;var c=b.getDate();a=a<10?"0"+a:a;c=c<10?"0"+c:c;this.el.value=e+"-"+a+"-"+c}else{this.el.value=b}},getValue:function(){return this.value},getFormValue:function(){return this.el.value}});mini.regClass(mini.Hidden,"hidden");mini.Popup=function(){mini.Popup.superclass.constructor.call(this);this.setVisible(false);this.setAllowDrag(this.allowDrag);this.setAllowResize(this.allowResize)};mini.extend(mini.Popup,mini.Container,{_clearBorder:false,uiCls:"mini-popup",_create:function(){var a=this.el=document.createElement("div");this.el.className="mini-popup";this._contentEl=this.el},_initEvents:function(){mini._BindEvents(function(){mini_onOne(this.el,"mouseover",this.__OnMouseOver,this)},this)},doLayout:function(){if(!this.canLayout()){return}mini.Popup.superclass.doLayout.call(this);this._doShadow();var d=this.el.childNodes;if(d){for(var b=0,a=d.length;b<a;b++){var c=d[b];mini.layout(c)}}},destroy:function(a){if(this.el){this.el.onmouseover=null}mini.un(document,"mousedown",this.__OnBodyMouseDown,this);mini.un(window,"resize",this.__OnWindowResize,this);if(this._modalEl){jQuery(this._modalEl).remove();this._modalEl=null}if(this.shadowEl){jQuery(this.shadowEl).remove();this.shadowEl=null}if(this._shim){jQuery(this._shim).remove();this._shim=null}mini.Popup.superclass.destroy.call(this,a)},setWidth:function(a){if(parseInt(a)==a){a+="px"}this.width=a;if(a.indexOf("px")!=-1){mini.setWidth(this.el,a)}else{this.el.style.width=a}this._sizeChanged()},setHeight:function(a){if(parseInt(a)==a){a+="px"}this.height=a;if(a.indexOf("px")!=-1){mini.setHeight(this.el,a)}else{this.el.style.height=a}this._sizeChanged()},setBody:function(c){if(!c){return}if(!mini.isArray(c)){c=[c]}for(var b=0,a=c.length;b<a;b++){mini.append(this._contentEl,c[b])}},getAttrs:function(c){var a=mini.Popup.superclass.getAttrs.call(this,c);mini._ParseString(c,a,["popupEl","popupCls","showAction","hideAction","xAlign","yAlign","modalStyle","onbeforeopen","open","onbeforeclose","onclose"]);mini._ParseBool(c,a,["showModal","showShadow","allowDrag","allowResize"]);mini._ParseInt(c,a,["showDelay","hideDelay","xOffset","yOffset","minWidth","minHeight","maxWidth","maxHeight"]);var b=mini.getChildNodes(c,true);a.body=b;return a}});mini.regClass(mini.Popup,"popup");mini.Popup_prototype={isPopup:false,popupEl:null,popupCls:"",showAction:"mouseover",hideAction:"outerclick",showDelay:300,hideDelay:500,xAlign:"left",yAlign:"below",xOffset:0,yOffset:0,minWidth:50,minHeight:25,maxWidth:2000,maxHeight:2000,showModal:false,showShadow:true,modalStyle:"opacity:0.2",_dragCls:"mini-popup-drag",_resizeCls:"mini-popup-resize",allowDrag:false,allowResize:false,_unbindPopupEl:function(){if(!this.popupEl){return}mini.un(this.popupEl,"click",this.__OnLeftClick,this);mini.un(this.popupEl,"contextmenu",this.__OnRightClick,this);mini.un(this.popupEl,"mouseover",this.__OnMouseOver,this)},_bindPopupEl:function(){if(!this.popupEl){return}mini.on(this.popupEl,"click",this.__OnLeftClick,this);mini.on(this.popupEl,"contextmenu",this.__OnRightClick,this);mini.on(this.popupEl,"mouseover",this.__OnMouseOver,this)},doShow:function(c){var b={popupEl:this.popupEl,htmlEvent:c,cancel:false};this.fire("BeforeOpen",b);if(b.cancel==true){return}this.fire("opening",b);if(b.cancel==true){return}if(!this.popupEl){this.show()}else{var a={};if(c){a.xy=[c.pageX,c.pageY]}this.showAtEl(this.popupEl,a)}},doHide:function(b){var a={popupEl:this.popupEl,htmlEvent:b,cancel:false};this.fire("BeforeClose",a);if(a.cancel==true){return}this.close()},show:function(b,a){this.showAtPos(b,a)},showAtPos:function(a,d){this.render(document.body);if(!a){a="center"}if(!d){d="middle"}this.el.style.position="absolute";this.el.style.left="-2000px";this.el.style.top="-2000px";this.el.style.display="";this._measureSize();var b=mini.getViewportBox();var c=mini.getBox(this.el);if(a=="left"){a=0}if(a=="center"){a=b.width/2-c.width/2}if(a=="right"){a=b.width-c.width}if(d=="top"){d=0}if(d=="middle"){d=b.y+b.height/2-c.height/2}if(d=="bottom"){d=b.height-c.height}if(a+c.width>b.right){a=b.right-c.width}if(d+c.height>b.bottom){d=b.bottom-c.height-20}this._Show(a,d)},_doModal:function(){jQuery(this._modalEl).remove();if(!this.showModal){return}if(this.visible==false){return}var b=document.documentElement;var c=parseInt(Math.max(document.body.scrollWidth,b?b.scrollWidth:0));var f=parseInt(Math.max(document.body.scrollHeight,b?b.scrollHeight:0));var d=mini.getViewportBox();var a=d.height;if(a<f){a=f}var e=d.width;if(e<c){e=c}this._modalEl=mini.append(document.body,'<div class="mini-modal"></div>');this._modalEl.style.height=a+"px";this._modalEl.style.width=e+"px";this._modalEl.style.zIndex=mini.getStyle(this.el,"zIndex")-1;mini.setStyle(this._modalEl,this.modalStyle)},_doShim:function(){if(!mini.isIE||!mini_useShims){return}if(!this._shimEl){var b="<iframe frameborder='0' style='position: absolute; z-index: -1; width: 0; height: 0; top: 0;left:0;scrolling:no;'></iframe>";this._shimEl=mini.append(document.body,b)}function a(){this._shimEl.style.display="";var f=mini.getBox(this.el);var e=this._shimEl.style;e.width=f.width+"px";e.height=f.height+"px";e.left=f.x+"px";e.top=f.y+"px";var d=mini.getStyle(this.el,"zIndex");if(!isNaN(d)){this._shimEl.style.zIndex=d-3}}this._shimEl.style.display="none";if(this._doShimTimer){clearTimeout(this._doShimTimer);this._doShimTimer=null}var c=this;this._doShimTimer=setTimeout(function(){c._doShimTimer=null;a.call(c)},20)},_doShadow:function(){if(!this.shadowEl){this.shadowEl=mini.append(document.body,'<div class="mini-shadow"></div>')}this.shadowEl.style.display=this.showShadow?"":"none";if(this.showShadow){function b(){this.shadowEl.style.display="";var e=mini.getBox(this.el);var d=this.shadowEl.style;d.width=e.width+"px";d.height=e.height+"px";d.left=e.x+"px";d.top=e.y+"px";var c=mini.getStyle(this.el,"zIndex");if(!isNaN(c)){this.shadowEl.style.zIndex=c-2}}this.shadowEl.style.display="none";if(this._doShadowTimer){clearTimeout(this._doShadowTimer);this._doShadowTimer=null}var a=this;this._doShadowTimer=setTimeout(function(){a._doShadowTimer=null;b.call(a)},20)}},_measureSize:function(){this.el.style.display="";var a=mini.getBox(this.el);if(a.width>this.maxWidth){mini.setWidth(this.el,this.maxWidth);a=mini.getBox(this.el)}if(a.height>this.maxHeight){mini.setHeight(this.el,this.maxHeight);a=mini.getBox(this.el)}if(a.width<this.minWidth){mini.setWidth(this.el,this.minWidth);a=mini.getBox(this.el)}if(a.height<this.minHeight){mini.setHeight(this.el,this.minHeight);a=mini.getBox(this.el)}},_getWindowOffset:function(a){return[0,0]},showAtEl:function(b,r){b=mini.byId(b);if(!b){return}if(!this.isRender()||this.el.parentNode!=document.body){this.render(document.body)}var i={atEl:b,popupEl:this.el,xAlign:this.xAlign,yAlign:this.yAlign,xOffset:this.xOffset,yOffset:this.yOffset,popupCls:this.popupCls};mini.copyTo(i,r);mini.addClass(b,i.popupCls);b.popupCls=i.popupCls;this._popupEl=b;this.el.style.position="absolute";this.el.style.left="-2000px";this.el.style.top="-2000px";this.el.style.display="";this.doLayout();this._measureSize();var j=mini.getViewportBox();var f=mini.getBox(this.el);var e=mini.getBox(b);var q=i.xy;var g=i.xAlign,p=i.yAlign;var m=j.width/2-f.width/2,l=0;if(q){m=q[0];l=q[1]}switch(i.xAlign){case"outleft":m=e.x-f.width;break;case"left":m=e.x;break;case"center":m=e.x+e.width/2-f.width/2;break;case"right":m=e.right-f.width;break;case"outright":m=e.right;break;default:break}switch(i.yAlign){case"above":l=e.y-f.height;break;case"top":l=e.y;break;case"middle":l=e.y+e.height/2-f.height/2;break;case"bottom":l=e.bottom-f.height;break;case"below":l=e.bottom;break;default:break}m=parseInt(m);l=parseInt(l);var n=this._getWindowOffset(r);if(i.outYAlign||i.outXAlign){if(i.outYAlign=="above"){if(l+f.height>j.bottom){var k=e.y-j.y;var a=j.bottom-e.bottom;if(k>a){l=e.y-f.height}}}if(i.outYAlign=="below"){if(l+f.height>j.bottom){var k=e.y-j.y;var a=j.bottom-e.bottom;if(k>a){l=e.y+e.height-f.height}}}if(i.outXAlign=="outleft"){if(m+f.width>j.right){var d=e.x-j.x;var o=j.right-e.right;if(d>o){m=e.x-f.width}}}if(i.outXAlign=="right"){if(m+f.width>j.right){m=e.right-f.width}}this._Show(m+n[0],l+n[1])}else{this.showAtPos(m+i.xOffset+n[0],l+i.yOffset+n[1])}},_Show:function(a,c){this.el.style.display="";this.el.style.zIndex=mini.getMaxZIndex();mini.setX(this.el,a);mini.setY(this.el,c);this.setVisible(true);if(this.hideAction=="mouseout"){mini.on(document,"mousemove",this.__OnBodyMouseMove,this)}var b=this;this._doShadow();this._doModal();this._doShim();mini.layoutIFrames(this.el);this.isPopup=true;mini.on(document,"mousedown",this.__OnBodyMouseDown,this);mini.on(window,"resize",this.__OnWindowResize,this);this.fire("Open")},open:function(){this.show()},close:function(){this.hide()},hide:function(){if(!this.el){return}if(this.popupEl){mini.removeClass(this.popupEl,this.popupEl.popupCls)}if(this._popupEl){mini.removeClass(this._popupEl,this._popupEl.popupCls)}this._popupEl=null;jQuery(this._modalEl).remove();if(this.shadowEl){this.shadowEl.style.display="none"}if(this._shimEl){this._shimEl.style.display="none"}mini.un(document,"mousemove",this.__OnBodyMouseMove,this);mini.un(document,"mousedown",this.__OnBodyMouseDown,this);mini.un(window,"resize",this.__OnWindowResize,this);this.setVisible(false);this.isPopup=false;this.fire("Close")},setPopupEl:function(a){a=mini.byId(a);if(!a){return}this._unbindPopupEl();this.popupEl=a;this._bindPopupEl()},setPopupCls:function(a){this.popupCls=a},setShowAction:function(a){this.showAction=a},setHideAction:function(a){this.hideAction=a},setShowDelay:function(a){this.showDelay=a},setHideDelay:function(a){this.hideDelay=a},setXAlign:function(a){this.xAlign=a},setYAlign:function(a){this.yAlign=a},setxOffset:function(a){a=parseInt(a);if(isNaN(a)){a=0}this.xOffset=a},setyOffset:function(a){a=parseInt(a);if(isNaN(a)){a=0}this.yOffset=a},setShowModal:function(a){this.showModal=a},setShowShadow:function(a){this.showShadow=a},setMinWidth:function(a){if(isNaN(a)){return}this.minWidth=a},setMinHeight:function(a){if(isNaN(a)){return}this.minHeight=a},setMaxWidth:function(a){if(isNaN(a)){return}this.maxWidth=a},setMaxHeight:function(a){if(isNaN(a)){return}this.maxHeight=a},setAllowDrag:function(a){this.allowDrag=a;mini.removeClass(this.el,this._dragCls);if(a){mini.addClass(this.el,this._dragCls)}},setAllowResize:function(a){this.allowResize=a;mini.removeClass(this.el,this._resizeCls);if(a){mini.addClass(this.el,this._resizeCls)}},__OnLeftClick:function(b){if(this._inAniming){return}if(this.showAction!="leftclick"){return}var a=jQuery(this.popupEl).attr("allowPopup");if(String(a)=="false"){return}this.doShow(b)},__OnRightClick:function(b){if(this._inAniming){return}if(this.showAction!="rightclick"){return}var a=jQuery(this.popupEl).attr("allowPopup");if(String(a)=="false"){return}b.preventDefault();this.doShow(b)},__OnMouseOver:function(c){if(this._inAniming){return}if(this.showAction!="mouseover"){return}var a=jQuery(this.popupEl).attr("allowPopup");if(String(a)=="false"){return}clearTimeout(this._hideTimer);this._hideTimer=null;if(this.isPopup){return}var b=this;this._showTimer=setTimeout(function(){b.doShow(c)},this.showDelay)},__OnBodyMouseMove:function(a){if(this.hideAction!="mouseout"){return}this._tryHide(a)},__OnBodyMouseDown:function(a){if(this.hideAction!="outerclick"){return}if(!this.isPopup){return}if(this.within(a)||(this.popupEl&&mini.isAncestor(this.popupEl,a.target))){}else{this.doHide(a)}},_tryHide:function(b){if(mini.isAncestor(this.el,b.target)||(this.popupEl&&mini.isAncestor(this.popupEl,b.target))){}else{clearTimeout(this._showTimer);this._showTimer=null;if(this._hideTimer){return}var a=this;this._hideTimer=setTimeout(function(){a.doHide(b)},this.hideDelay)}},__OnWindowResize:function(a){if(this.isDisplay()&&!mini.isIE6){this._doModal()}},within:function(f){if(mini.isAncestor(this.el,f.target)){return true}var b=mini.getChildControls(this);for(var d=0,a=b.length;d<a;d++){var g=b[d];if(g.within(f)){return true}}return false}};mini.copyTo(mini.Popup.prototype,mini.Popup_prototype);mini.Button=function(){mini.Button.superclass.constructor.call(this)};mini.extend(mini.Button,mini.Control,{text:"",iconCls:"",iconStyle:"",plain:false,checkOnClick:false,checked:false,groupName:"",_plainCls:"mini-button-plain",_hoverCls:"mini-button-hover",_pressedCls:"mini-button-pressed",_checkedCls:"mini-button-checked",_disabledCls:"mini-button-disabled",allowCls:"",_clearBorder:false,set:function(a){if(typeof a=="string"){return this}this._allowUpdate=a.text||a.iconStyle||a.iconCls||a.iconPosition;mini.Button.superclass.set.call(this,a);if(this._allowUpdate===false){this._allowUpdate=true;this.doUpdate()}return this},uiCls:"mini-button",_create:function(){this.el=document.createElement("a");this.el.className="mini-button";this.el.hideFocus=true;this.el.href="javascript:void(0)";this.doUpdate()},_initEvents:function(){mini._BindEvents(function(){mini_onOne(this.el,"mousedown",this.__OnMouseDown,this);mini_onOne(this.el,"click",this.__OnClick,this)},this)},destroy:function(a){if(this.el){this.el.onclick=null;this.el.onmousedown=null}if(this.menu){this.menu.owner=null}this.menu=null;mini.Button.superclass.destroy.call(this,a)},doUpdate:function(){if(this._allowUpdate===false){return}var b="",e=this.text;var a=this.iconStyle||this.iconCls||this.img;if(a&&e){b=" mini-button-icon "+this.iconCls}else{if(a&&e===""){b=" mini-button-iconOnly "+this.iconCls;e="&nbsp;"}else{if(e==""){e="&nbsp;"}}}var d=this.iconStyle||"";if(!d&&this.img){d="background-image:url("+this.img+")"}var c='<span class="mini-button-text '+b+'" style="'+d+'">'+e+"</span>";if(this.allowCls){c=c+'<span class="mini-button-allow '+this.allowCls+'"></span>'}this.el.innerHTML=c},href:"",setHref:function(b){this.href=b;this.el.href=b;var a=this.el;setTimeout(function(){a.onclick=null},100)},getHref:function(){return this.href},target:"",setTarget:function(a){this.target=a;this.el.target=a},getTarget:function(){return this.target},setText:function(a){if(this.text!=a){this.text=a;this.doUpdate()}},getText:function(){return this.text},setIconCls:function(a){this.iconCls=a;this.doUpdate()},getIconCls:function(){return this.iconCls},setIconStyle:function(a){this.iconStyle=a;this.doUpdate()},getIconStyle:function(){return this.iconStyle},img:"",setImg:function(a){this.img=a;this.doUpdate()},getImg:function(){return this.img},setIconPosition:function(a){this.iconPosition="left";this.doUpdate()},getIconPosition:function(){return this.iconPosition},setPlain:function(a){this.plain=a;if(a){this.addCls(this._plainCls)}else{this.removeCls(this._plainCls)}},getPlain:function(){return this.plain},setGroupName:function(a){this.groupName=a},getGroupName:function(){return this.groupName},setCheckOnClick:function(a){this.checkOnClick=a},getCheckOnClick:function(){return this.checkOnClick},setChecked:function(b){var a=this.checked!=b;this.checked=b;if(b){this.addCls(this._checkedCls)}else{this.removeCls(this._checkedCls)}if(a){this.fire("CheckedChanged")}},getChecked:function(){return this.checked},doClick:function(){this.__OnClick(null)},__OnClick:function(f){if(!this.href&&f){f.preventDefault()}if(this.readOnly||this.enabled==false){return}this.focus();if(this.checkOnClick){if(this.groupName){var g=this.groupName;var d=mini.findControls(function(e){if(e.type=="button"&&e.groupName==g){return true}});if(d.length>0){for(var c=0,a=d.length;c<a;c++){var b=d[c];if(b!=this){b.setChecked(false)}}this.setChecked(true)}else{this.setChecked(!this.checked)}}else{this.setChecked(!this.checked)}}this.fire("click",{htmlEvent:f})},__OnMouseDown:function(a){if(this.isReadOnly()){return}this.addCls(this._pressedCls);mini.on(document,"mouseup",this.__OnDocMouseUp,this)},__OnDocMouseUp:function(a){this.removeCls(this._pressedCls);mini.un(document,"mouseup",this.__OnDocMouseUp,this)},onClick:function(b,a){this.on("click",b,a)},getAttrs:function(b){var a=mini.Button.superclass.getAttrs.call(this,b);a.text=b.innerHTML;mini._ParseString(b,a,["text","href","iconCls","iconStyle","iconPosition","groupName","menu","onclick","oncheckedchanged","target","img"]);mini._ParseBool(b,a,["plain","checkOnClick","checked"]);return a}});mini.regClass(mini.Button,"button");mini.MenuButton=function(){mini.MenuButton.superclass.constructor.call(this)};mini.extend(mini.MenuButton,mini.Button,{uiCls:"mini-menubutton",allowCls:"mini-button-menu",setMenu:function(b){if(mini.isArray(b)){b={type:"menu",items:b}}if(typeof b=="string"){var a=mini.byId(b);if(!a){return}mini.parse(b);b=mini.get(b)}if(this.menu!==b){this.menu=mini.getAndCreate(b);this.menu.setPopupEl(this.el);this.menu.setPopupCls("mini-button-popup");this.menu.setShowAction("leftclick");this.menu.setHideAction("outerclick");this.menu.setXAlign("left");this.menu.setYAlign("below");this.menu.hide();this.menu.owner=this}},setEnabled:function(a){this.enabled=a;if(a){this.removeCls(this._disabledCls)}else{this.addCls(this._disabledCls)}jQuery(this.el).attr("allowPopup",!!a)}});mini.regClass(mini.MenuButton,"menubutton");mini.SplitButton=function(){mini.SplitButton.superclass.constructor.call(this)};mini.extend(mini.SplitButton,mini.MenuButton,{uiCls:"mini-splitbutton",allowCls:"mini-button-split"});mini.regClass(mini.SplitButton,"splitbutton");mini.CheckBox=function(){mini.CheckBox.superclass.constructor.call(this)};mini.extend(mini.CheckBox,mini.Control,{formField:true,_clearText:false,text:"",checked:false,defaultValue:false,trueValue:true,falseValue:false,uiCls:"mini-checkbox",_create:function(){var a=this.uid+"$check";this.el=document.createElement("span");this.el.className="mini-checkbox";this.el.innerHTML='<input id="'+a+'" name="'+this.id+'" type="checkbox" class="mini-checkbox-check"><label for="'+a+'" onclick="return false;">'+this.text+"</label>";this._checkEl=this.el.firstChild;this._labelEl=this.el.lastChild},destroy:function(a){if(this._checkEl){this._checkEl.onmouseup=null;this._checkEl.onclick=null;this._checkEl=null}mini.CheckBox.superclass.destroy.call(this,a)},_initEvents:function(){mini._BindEvents(function(){mini.on(this.el,"click",this.__onClick,this);this._checkEl.onmouseup=function(){return false};var a=this;this._checkEl.onclick=function(){if(a.isReadOnly()){return false}}},this)},setName:function(a){this.name=a;mini.setAttr(this._checkEl,"name",this.name)},setText:function(a){if(this.text!==a){this.text=a;this._labelEl.innerHTML=a}},getText:function(){return this.text},setChecked:function(a){if(a===true){a=true}else{if(a==this.trueValue){a=true}else{if(a=="true"){a=true}else{if(a===1){a=true}else{if(a=="Y"){a=true}else{a=false}}}}}if(this.checked!==a){this.checked=!!a;this._checkEl.checked=this.checked;this.value=this.getValue()}},getChecked:function(){return this.checked},setValue:function(a){if(this.checked!==a){this.setChecked(a);this.value=this.getValue()}},getValue:function(){return String(this.checked==true?this.trueValue:this.falseValue)},getFormValue:function(){return this.getValue()},setTrueValue:function(a){this._checkEl.value=a;this.trueValue=a},getTrueValue:function(){return this.trueValue},setFalseValue:function(a){this.falseValue=a},getFalseValue:function(){return this.falseValue},__onClick:function(a){if(this.isReadOnly()){return}this.setChecked(!this.checked);this.fire("checkedchanged",{checked:this.checked});this.fire("valuechanged",{value:this.getValue()});this.fire("click",a,this)},getAttrs:function(c){var b=mini.CheckBox.superclass.getAttrs.call(this,c);var f=jQuery(c);b.text=c.innerHTML;mini._ParseString(c,b,["text","oncheckedchanged","onclick","onvaluechanged"]);mini._ParseBool(c,b,["enabled"]);var e=mini.getAttr(c,"checked");if(e){b.checked=(e=="true"||e=="checked")?true:false}var a=f.attr("trueValue");if(a){b.trueValue=a;a=parseInt(a);if(!isNaN(a)){b.trueValue=a}}var d=f.attr("falseValue");if(d){b.falseValue=d;d=parseInt(d);if(!isNaN(d)){b.falseValue=d}}return b}});mini.regClass(mini.CheckBox,"checkbox");mini.ButtonEdit=function(){mini.ButtonEdit.superclass.constructor.call(this);var a=this.isReadOnly();if(a||this.allowInput==false){this._textEl.readOnly=true}if(this.enabled==false){this.addCls(this._disabledCls)}if(a){this.addCls(this._readOnlyCls)}if(this.required){this.addCls(this._requiredCls)}};mini.extend(mini.ButtonEdit,mini.ValidatorBase,{name:"",formField:true,selectOnFocus:false,showClose:false,emptyText:"",defaultValue:"",defaultText:"",value:"",text:"",maxLength:1000,minLength:0,height:21,inputAsValue:false,allowInput:true,_noInputCls:"mini-buttonedit-noInput",_readOnlyCls:"mini-buttonedit-readOnly",_disabledCls:"mini-buttonedit-disabled",_emptyCls:"mini-buttonedit-empty",_focusCls:"mini-buttonedit-focus",_buttonCls:"mini-buttonedit-button",_buttonHoverCls:"mini-buttonedit-button-hover",_buttonPressedCls:"mini-buttonedit-button-pressed",_closeCls:"mini-buttonedit-close",set:function(b){if(typeof b=="string"){return this}var a=b.value;delete b.value;var c=b.text;delete b.text;this._allowUpdate=!(b.enabled==false||b.allowInput==false||b.readOnly);mini.ButtonEdit.superclass.set.call(this,b);if(this._allowUpdate===false){this._allowUpdate=true;this.doUpdate()}if(!mini.isNull(c)){this.setText(c)}if(!mini.isNull(a)){this.setValue(a)}return this},uiCls:"mini-buttonedit",_getButtonsHTML:function(){var a='<span class="mini-buttonedit-close"></span>'+this._getButtonHtml();return'<span class="mini-buttonedit-buttons">'+a+"</span>"},_getButtonHtml:function(){var a="onmouseover=\"mini.addClass(this, '"+this._buttonHoverCls+"');\" onmouseout=\"mini.removeClass(this, '"+this._buttonHoverCls+"');\"";return'<span class="mini-buttonedit-button" '+a+'><span class="mini-buttonedit-icon"></span></span>'},_create:function(){this.el=document.createElement("span");this.el.className="mini-buttonedit";var a=this._getButtonsHTML();this.el.innerHTML='<span class="mini-buttonedit-border"><input type="input" class="mini-buttonedit-input" autocomplete="off"/>'+a+'</span><input name="'+this.name+'" type="hidden"/>';this._borderEl=this.el.firstChild;this._textEl=this._borderEl.firstChild;this._valueEl=this.el.lastChild;this._buttonsEl=this._borderEl.lastChild;this._buttonEl=this._buttonsEl.lastChild;this._closeEl=this._buttonEl.previousSibling;this._doEmpty()},destroy:function(a){if(this.el){this.el.onmousedown=null;this.el.onmousewheel=null;this.el.onmouseover=null;this.el.onmouseout=null}if(this._textEl){this._textEl.onchange=null;this._textEl.onfocus=null;mini.clearEvent(this._textEl);this._textEl=null}mini.ButtonEdit.superclass.destroy.call(this,a)},_initEvents:function(){mini._BindEvents(function(){mini_onOne(this.el,"mousedown",this.__OnMouseDown,this);mini_onOne(this._textEl,"focus",this.__OnFocus,this);mini_onOne(this._textEl,"change",this.__OnInputTextChanged,this);var a=this.text;this.text=null;if(this.el){this.setText(a)}},this)},_inputEventsInited:false,_initInputEvents:function(){if(this._inputEventsInited){return}this._inputEventsInited=true;mini.on(this.el,"click",this.__OnClick,this);mini.on(this._textEl,"blur",this.__OnBlur,this);mini.on(this._textEl,"keydown",this.__OnInputKeyDown,this);mini.on(this._textEl,"keyup",this.__OnInputKeyUp,this);mini.on(this._textEl,"keypress",this.__OnInputKeyPress,this)},_buttonWidth:20,_closeWidth:20,_doInputLayout:function(b){if(this._closeEl){this._closeEl.style.display=this.showClose?"inline-block":"none"}var a=this._buttonsEl.offsetWidth+2;if(a==2){this._noLayout=true}else{this._noLayout=false}this._borderEl.style.paddingRight=a+"px";if(b!==false){this.doLayout()}},doLayout:function(){if(this._noLayout){this._doInputLayout(false)}if(this._doLabelLayout){this._labelLayout()}},setHeight:function(a){if(parseInt(a)==a){a+="px"}this.height=a},focus:function(){try{this._textEl.focus();var a=this;setTimeout(function(){if(a._focused){a._textEl.focus()}},10)}catch(b){}},blur:function(){try{this._textEl.blur()}catch(a){}},selectText:function(){this._textEl.select()},getTextEl:function(){return this._textEl},setName:function(a){this.name=a;if(this._valueEl){mini.setAttr(this._valueEl,"name",this.name)}},setText:function(b){if(b===null||b===undefined){b=""}var a=this.text!==b;this.text=b;this._textEl.value=b;this._doEmpty()},getText:function(){var a=this._textEl.value;return a},setValue:function(b){if(b===null||b===undefined){b=""}var a=this.value!==b;this.value=b;this._valueEl.value=this.getFormValue()},getValue:function(){return this.value},getFormValue:function(){var a=this.value;if(a===null||a===undefined){a=""}return String(a)},_doEmpty:function(){this._textEl.placeholder=this.emptyText;if(this.emptyText){mini._placeholder(this._textEl)}},setEmptyText:function(a){if(this.emptyText!=a){this.emptyText=a;this._doEmpty()}},getEmptyText:function(){return this.emptyText},setMaxLength:function(a){a=parseInt(a);if(isNaN(a)){return}this.maxLength=a;this._textEl.maxLength=a},getMaxLength:function(){return this.maxLength},setMinLength:function(a){a=parseInt(a);if(isNaN(a)){return}this.minLength=a},getMinLength:function(){return this.minLength},setEnabled:function(a){mini.ButtonEdit.superclass.setEnabled.call(this,a)},_doReadOnly:function(){var a=this.isReadOnly();if(a||this.allowInput==false){this._textEl.readOnly=true}else{this._textEl.readOnly=false}if(a){this.addCls(this._readOnlyCls)}else{this.removeCls(this._readOnlyCls)}if(this.allowInput){this.removeCls(this._noInputCls)}else{this.addCls(this._noInputCls)}if(this.enabled){this._textEl.disabled=false}else{this._textEl.disabled=true}},setAllowInput:function(a){this.allowInput=a;this._doReadOnly()},getAllowInput:function(){return this.allowInput},setInputAsValue:function(a){this.inputAsValue=a},getInputAsValue:function(){return this.inputAsValue},_errorIconEl:null,getErrorIconEl:function(){if(!this._errorIconEl){this._errorIconEl=mini.append(this.el,'<span class="mini-errorIcon"></span>')}return this._errorIconEl},_RemoveErrorIcon:function(){if(this._errorIconEl){var a=this._errorIconEl;jQuery(a).remove()}this._errorIconEl=null},__OnClick:function(b){if(this.enabled==false){return}this.fire("click",{htmlEvent:b});if(this.isReadOnly()){return}if(!mini.isAncestor(this._borderEl,b.target)){return}var a=new Date();if(mini.isAncestor(this._buttonEl,b.target)){this._OnButtonClick(b)}if(mini.findParent(b.target,this._closeCls)){this.fire("closeclick",{htmlEvent:b})}},__OnMouseDown:function(c){if(this.isReadOnly()||this.enabled==false){return}if(!mini.isAncestor(this._borderEl,c.target)){return}if(!mini.isAncestor(this._textEl,c.target)){this._clickTarget=c.target;var b=this;setTimeout(function(){b.focus();mini.selectRange(b._textEl,1000,1000)},1);if(mini.isAncestor(this._buttonEl,c.target)){var a=mini.findParent(c.target,"mini-buttonedit-up");var d=mini.findParent(c.target,"mini-buttonedit-down");if(a){mini.addClass(a,this._buttonPressedCls);this._OnButtonMouseDown(c,"up")}else{if(d){mini.addClass(d,this._buttonPressedCls);this._OnButtonMouseDown(c,"down")}else{mini.addClass(this._buttonEl,this._buttonPressedCls);this._OnButtonMouseDown(c)}}mini.on(document,"mouseup",this.__OnDocMouseUp,this)}}},__OnDocMouseUp:function(b){this._clickTarget=null;var a=this;setTimeout(function(){var e=a._buttonEl.getElementsByTagName("*");for(var d=0,c=e.length;d<c;d++){mini.removeClass(e[d],a._buttonPressedCls)}mini.removeClass(a._buttonEl,a._buttonPressedCls);mini.removeClass(a.el,a._pressedCls)},80);mini.un(document,"mouseup",this.__OnDocMouseUp,this)},__OnFocus:function(a){this.doUpdate();this._initInputEvents();if(this.isReadOnly()){return}this._focused=true;this.addCls(this._focusCls);if(this.selectOnFocus){this.selectText()}this.fire("focus",{htmlEvent:a})},__doFocusCls:function(){if(this._focused==false){this.removeCls(this._focusCls)}},__fireBlur:function(c){var a=this;function b(){if(a._focused==false){a.removeCls(a._focusCls);if(a.validateOnLeave&&a.isEditable()){a._tryValidate()}this.fire("blur",{htmlEvent:c})}}setTimeout(function(){b.call(a)},2)},__OnBlur:function(b){var a=this;a._focused=false;setTimeout(function(){a.__fireBlur(b)},10)},__OnInputKeyDown:function(d){var a={htmlEvent:d};this.fire("keydown",a);if(d.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(d.keyCode==27||d.keyCode==13||d.keyCode==9){var c=this;c.__OnInputTextChanged(null);if(d.keyCode==13){var b=this;b.fire("enter",a)}}if(d.keyCode==27){d.preventDefault()}},__OnInputTextChanged:function(){var a=this._textEl.value;if(a==this.text){return}var b=this.getValue();this.setText(a);this.setValue(a);if(b!==this.getFormValue()){this._OnValueChanged()}},__OnInputKeyUp:function(a){this.fire("keyup",{htmlEvent:a})},__OnInputKeyPress:function(a){this.fire("keypress",{htmlEvent:a})},_OnButtonClick:function(a){var b={htmlEvent:a,cancel:false};this.fire("beforebuttonclick",b);if(b.cancel==true){return}this.fire("buttonclick",b)},_OnButtonMouseDown:function(a,b){this.focus();this.addCls(this._focusCls);this.fire("buttonmousedown",{htmlEvent:a,spinType:b})},onButtonClick:function(b,a){this.on("buttonclick",b,a)},onButtonMouseDown:function(b,a){this.on("buttonmousedown",b,a)},onTextChanged:function(b,a){this.on("textchanged",b,a)},textName:"",setTextName:function(a){this.textName=a;if(this._textEl){mini.setAttr(this._textEl,"name",this.textName)}},getTextName:function(){return this.textName},setSelectOnFocus:function(a){this.selectOnFocus=a},getSelectOnFocus:function(a){return this.selectOnFocus},setShowClose:function(a){this.showClose=a;this._doInputLayout()},getShowClose:function(a){return this.showClose},inputStyle:"",setInputStyle:function(a){this.inputStyle=a;mini.setStyle(this._textEl,a)},getAttrs:function(b){var a=mini.ButtonEdit.superclass.getAttrs.call(this,b);var c=jQuery(b);mini._ParseString(b,a,["value","text","textName","emptyText","inputStyle","defaultText","onenter","onkeydown","onkeyup","onkeypress","onbuttonclick","onbuttonmousedown","ontextchanged","onfocus","onblur","oncloseclick","onclick"]);mini._ParseBool(b,a,["allowInput","inputAsValue","selectOnFocus","showClose"]);mini._ParseInt(b,a,["maxLength","minLength"]);return a}});mini.regClass(mini.ButtonEdit,"buttonedit");mini.TextBox=function(){mini.TextBox.superclass.constructor.call(this)};mini.extend(mini.TextBox,mini.ValidatorBase,{name:"",formField:true,selectOnFocus:false,allowInput:true,minWidth:10,minHeight:15,maxLength:5000,emptyText:"",text:"",value:"",defaultValue:"",height:21,_emptyCls:"mini-textbox-empty",_focusCls:"mini-textbox-focus",_disabledCls:"mini-textbox-disabled",uiCls:"mini-textbox",_InputType:"text",_create:function(){var a='<input  type="'+this._InputType+'" class="mini-textbox-input" autocomplete="off"/>';if(this._InputType=="textarea"){a='<textarea  class="mini-textbox-input" autocomplete="off"/></textarea>'}a='<span class="mini-textbox-border">'+a+"</span>";a+='<input type="hidden"/>';this.el=document.createElement("span");this.el.className="mini-textbox";this.el.innerHTML=a;this._borderEl=this.el.firstChild;this._textEl=this._borderEl.firstChild;this._valueEl=this._borderEl.lastChild;this._doEmpty()},_initEvents:function(){mini._BindEvents(function(){mini_onOne(this._textEl,"drop",this.__OnDropText,this);mini_onOne(this._textEl,"change",this.__OnInputTextChanged,this);mini_onOne(this._textEl,"focus",this.__OnFocus,this);mini_onOne(this.el,"mousedown",this.__OnMouseDown,this);var a=this.value;this.value=null;if(this.el){this.setValue(a)}},this);this.on("validation",this.__OnValidation,this)},_inputEventsInited:false,_initInputEvents:function(){if(this._inputEventsInited){return}this._inputEventsInited=true;mini.on(this._textEl,"blur",this.__OnBlur,this);mini.on(this._textEl,"keydown",this.__OnInputKeyDown,this);mini.on(this._textEl,"keyup",this.__OnInputKeyUp,this);mini.on(this._textEl,"keypress",this.__OnInputKeyPress,this)},destroy:function(a){if(this.el){this.el.onmousedown=null}if(this._textEl){this._textEl.ondrop=null;this._textEl.onchange=null;this._textEl.onfocus=null;mini.clearEvent(this._textEl);this._textEl=null}if(this._valueEl){mini.clearEvent(this._valueEl);this._valueEl=null}mini.TextBox.superclass.destroy.call(this,a)},doLayout:function(){if(this._doLabelLayout){this._labelLayout()}},setHeight:function(a){if(parseInt(a)==a){a+="px"}this.height=a;if(this._InputType=="textarea"){this.el.style.height=a;this.doLayout()}},setName:function(a){if(this.name!=a){this.name=a;if(this._valueEl){mini.setAttr(this._valueEl,"name",this.name)}}},setValue:function(a){if(a===null||a===undefined){a=""}a=String(a);if(a.length>this.maxLength){a=a.substring(0,this.maxLength)}if(this.value!==a){this.value=a;this._valueEl.value=this._textEl.value=a;this._doEmpty()}},getValue:function(){return this.value},getFormValue:function(){var a=this.value;if(a===null||a===undefined){a=""}return String(a)},setAllowInput:function(a){if(this.allowInput!=a){this.allowInput=a;this.doUpdate()}},getAllowInput:function(){return this.allowInput},_placeholdered:false,_doEmpty:function(){this._textEl.placeholder=this.emptyText;if(this.emptyText){mini._placeholder(this._textEl)}},setEmptyText:function(a){if(this.emptyText!=a){this.emptyText=a;this._doEmpty()}},getEmptyText:function(){return this.emptyText},setMaxLength:function(a){this.maxLength=a;mini.setAttr(this._textEl,"maxLength",a);if(this._InputType=="textarea"&&mini.isIE){mini.on(this._textEl,"keypress",this.__OnMaxLengthKeyUp,this)}},__OnMaxLengthKeyUp:function(a){if(this._textEl.value.length>=this.maxLength){a.preventDefault()}},getMaxLength:function(){return this.maxLength},setReadOnly:function(a){if(this.readOnly!=a){this.readOnly=a;this.doUpdate()}},setEnabled:function(a){if(this.enabled!=a){this.enabled=a;this.doUpdate()}},doUpdate:function(){if(this.enabled){this.removeCls(this._disabledCls)}else{this.addCls(this._disabledCls)}if(this.isReadOnly()||this.allowInput==false){this._textEl.readOnly=true;mini.addClass(this.el,"mini-textbox-readOnly")}else{this._textEl.readOnly=false;mini.removeClass(this.el,"mini-textbox-readOnly")}if(this.required){this.addCls(this._requiredCls)}else{this.removeCls(this._requiredCls)}if(this.enabled){this._textEl.disabled=false}else{this._textEl.disabled=true}},focus:function(){var a=this;setTimeout(function(){try{a._textEl.focus()}catch(b){}},10)},blur:function(){try{this._textEl.blur()}catch(a){}},selectText:function(){var b=this;function a(){try{b._textEl.select()}catch(c){}}a();setTimeout(function(){a()},30)},getTextEl:function(){return this._textEl},getInputText:function(){return this._textEl.value},setSelectOnFocus:function(a){this.selectOnFocus=a},getSelectOnFocus:function(a){return this.selectOnFocus},_errorIconEl:null,getErrorIconEl:function(){if(!this._errorIconEl){this._errorIconEl=mini.append(this.el,'<span class="mini-errorIcon"></span>')}return this._errorIconEl},_RemoveErrorIcon:function(){if(this._errorIconEl){var a=this._errorIconEl;jQuery(a).remove()}this._errorIconEl=null},__OnMouseDown:function(b){var a=this;if(!mini.isAncestor(this._textEl,b.target)){setTimeout(function(){a.focus();mini.selectRange(a._textEl,1000,1000)},1)}else{setTimeout(function(){try{a._textEl.focus()}catch(c){}},1)}},__OnInputTextChanged:function(c,a){var b=this.value;this.setValue(this._textEl.value);if(b!==this.getValue()||a===true){this._OnValueChanged()}},__OnDropText:function(b){var a=this;setTimeout(function(){a.__OnInputTextChanged(b)},0)},__OnInputKeyDown:function(c){var a={htmlEvent:c};this.fire("keydown",a);if(c.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(c.keyCode==27||c.keyCode==13||c.keyCode==9){if(this._InputType=="textarea"&&c.keyCode==13){}else{this.__OnInputTextChanged(null,true);if(c.keyCode==13){var b=this;b.fire("enter",a)}}}if(c.keyCode==27){c.preventDefault()}},__OnInputKeyUp:function(a){this.fire("keyup",{htmlEvent:a})},__OnInputKeyPress:function(a){this.fire("keypress",{htmlEvent:a})},__OnFocus:function(a){this.doUpdate();if(this.isReadOnly()){return}this._focused=true;this.addCls(this._focusCls);this._initInputEvents();if(this.selectOnFocus){this.selectText()}this.fire("focus",{htmlEvent:a})},__OnBlur:function(b){this._focused=false;var a=this;setTimeout(function(){if(a._focused==false){a.removeCls(a._focusCls)}},2);this.fire("blur",{htmlEvent:b});if(this.validateOnLeave&&this.isEditable()){this._tryValidate()}},inputStyle:"",setInputStyle:function(a){this.inputStyle=a;mini.setStyle(this._textEl,a)},getAttrs:function(b){var a=mini.TextBox.superclass.getAttrs.call(this,b);var c=jQuery(b);mini._ParseString(b,a,["value","text","emptyText","inputStyle","onenter","onkeydown","onkeyup","onkeypress","maxLengthErrorText","minLengthErrorText","onfocus","onblur","vtype","emailErrorText","urlErrorText","floatErrorText","intErrorText","dateErrorText","minErrorText","maxErrorText","rangeLengthErrorText","rangeErrorText","rangeCharErrorText"]);mini._ParseBool(b,a,["allowInput","selectOnFocus"]);mini._ParseInt(b,a,["maxLength","minLength","minHeight","minWidth"]);return a},vtype:"",setVtype:function(a){this.vtype=a},getVtype:function(){return this.vtype},__OnValidation:function(a){if(a.isValid==false){return}mini._ValidateVType(this.vtype,a.value,a,this)},setEmailErrorText:function(a){this.emailErrorText=a},getEmailErrorText:function(){return this.emailErrorText},setUrlErrorText:function(a){this.urlErrorText=a},getUrlErrorText:function(){return this.urlErrorText},setFloatErrorText:function(a){this.floatErrorText=a},getFloatErrorText:function(){return this.floatErrorText},setIntErrorText:function(a){this.intErrorText=a},getIntErrorText:function(){return this.intErrorText},setDateErrorText:function(a){this.dateErrorText=a},getDateErrorText:function(){return this.dateErrorText},setMaxLengthErrorText:function(a){this.maxLengthErrorText=a},getMaxLengthErrorText:function(){return this.maxLengthErrorText},setMinLengthErrorText:function(a){this.minLengthErrorText=a},getMinLengthErrorText:function(){return this.minLengthErrorText},setMaxErrorText:function(a){this.maxErrorText=a},getMaxErrorText:function(){return this.maxErrorText},setMinErrorText:function(a){this.minErrorText=a},getMinErrorText:function(){return this.minErrorText},setRangeLengthErrorText:function(a){this.rangeLengthErrorText=a},getRangeLengthErrorText:function(){return this.rangeLengthErrorText},setRangeCharErrorText:function(a){this.rangeCharErrorText=a},getRangeCharErrorText:function(){return this.rangeCharErrorText},setRangeErrorText:function(a){this.rangeErrorText=a},getRangeErrorText:function(){return this.rangeErrorText}});mini.regClass(mini.TextBox,"textbox");mini.Password=function(){mini.Password.superclass.constructor.call(this)};mini.extend(mini.Password,mini.TextBox,{uiCls:"mini-password",_InputType:"password",setEmptyText:function(a){this.emptyText=""},getValue:function(){return this._textEl.value}});mini.regClass(mini.Password,"password");mini.TextArea=function(){mini.TextArea.superclass.constructor.call(this)};mini.extend(mini.TextArea,mini.TextBox,{maxLength:10000000,height:"",minHeight:50,_InputType:"textarea",uiCls:"mini-textarea",doLayout:function(){if(!this.canLayout()){return}mini.TextArea.superclass.doLayout.call(this);var a=mini.getHeight(this.el);if(mini.isIE6){mini.setHeight(this._borderEl,a)}a-=2;if(a<0){a=0}this._textEl.style.height=a+"px"}});mini.regClass(mini.TextArea,"textarea");mini.PopupEdit=function(){mini.PopupEdit.superclass.constructor.call(this);this._createPopup();this.el.className+=" mini-popupedit"};mini.extend(mini.PopupEdit,mini.ButtonEdit,{uiCls:"mini-popupedit",popup:null,popupCls:"mini-buttonedit-popup",_hoverCls:"mini-buttonedit-hover",_pressedCls:"mini-buttonedit-pressed",_destroyPopup:true,destroy:function(a){if(this.isShowPopup()){this.hidePopup()}if(this.popup){if(this._destroyPopup){this.popup.destroy()}this.popup=null}if(this._popupInner){this._popupInner.owner=null;this._popupInner=null}mini.PopupEdit.superclass.destroy.call(this,a)},_initEvents:function(){mini.PopupEdit.superclass._initEvents.call(this);mini._BindEvents(function(){mini_onOne(this.el,"mouseover",this.__OnMouseOver,this);mini_onOne(this.el,"mouseout",this.__OnMouseOut,this)},this)},_initButtons:function(){this.buttons=[];var a=this.createButton({cls:"mini-buttonedit-popup",iconCls:"mini-buttonedit-icons-popup",name:"popup"});this.buttons.push(a)},__OnBlur:function(a){this._focused=false;if(this._clickTarget&&mini.isAncestor(this.el,this._clickTarget)){return}if(this.isShowPopup()){return}mini.PopupEdit.superclass.__OnBlur.call(this,a)},__OnMouseOver:function(a){if(this.isReadOnly()||this.allowInput){return}if(mini.findParent(a.target,"mini-buttonedit-border")){this.addCls(this._hoverCls)}},__OnMouseOut:function(a){if(this.isReadOnly()||this.allowInput){return}this.removeCls(this._hoverCls)},__OnMouseDown:function(a){if(this.isReadOnly()){return}mini.PopupEdit.superclass.__OnMouseDown.call(this,a);if(this.allowInput==false&&mini.findParent(a.target,"mini-buttonedit-border")){mini.addClass(this.el,this._pressedCls);mini.on(document,"mouseup",this.__OnDocMouseUp,this)}},__OnInputKeyDown:function(a){this.fire("keydown",{htmlEvent:a});if(a.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(a.keyCode==9){this.hidePopup();return}if(a.keyCode==27){this.hidePopup();return}if(a.keyCode==13){this.fire("enter")}if(this.isShowPopup()){if(a.keyCode==13||a.keyCode==27){a.stopPropagation()}}},within:function(a){if(mini.isAncestor(this.el,a.target)){return true}if(this.popup.within(a)){return true}return false},popupWidth:"100%",popupMinWidth:50,popupMaxWidth:2000,popupHeight:"",popupMinHeight:30,popupMaxHeight:2000,setPopup:function(a){if(typeof a=="string"){mini.parse(a);a=mini.get(a)}var b=mini.getAndCreate(a);if(!b){return}b.setVisible(false);this._popupInner=b;b.owner=this;b.on("beforebuttonclick",this.__OnPopupButtonClick,this)},getPopup:function(){if(!this.popup){this._createPopup()}return this.popup},_createPopup:function(){this.popup=new mini.Popup();this.popup.setShowAction("none");this.popup.setHideAction("outerclick");this.popup.setPopupEl(this.el);this.popup.on("BeforeClose",this.__OnPopupBeforeClose,this);mini.on(this.popup.el,"keydown",this.__OnPopupKeyDown,this)},__OnPopupBeforeClose:function(a){if(this.within(a.htmlEvent)){a.cancel=true}else{this._unDocumentMousewheel()}},__OnPopupKeyDown:function(a){},showPopup:function(){var b={cancel:false};if(this._firebeforeshowpopup!==false){this.fire("beforeshowpopup",b);if(b.cancel==true){return false}}var a=this.getPopup();this._syncShowPopup();a.on("Close",this.__OnPopupHide,this);this._onDocumentMousewheel();this.fire("showpopup")},_unDocumentMousewheel:function(){mini.un(document,"mousewheel",this.__OnDocumentMousewheel,this);this._mousewheelXY=null},_onDocumentMousewheel:function(){this._unDocumentMousewheel();this._mousewheelXY=mini.getXY(this.el);mini.on(document,"mousewheel",this.__OnDocumentMousewheel,this)},__OnDocumentMousewheel:function(c){var b=this;function a(){if(!b.isShowPopup()){return}var d=b._mousewheelXY;var e=mini.getXY(b.el);if(d[0]!=e[0]||d[1]!=e[1]){b.hidePopup()}else{setTimeout(a,300)}}setTimeout(a,300)},doLayout:function(){mini.PopupEdit.superclass.doLayout.call(this);if(this.isShowPopup()){}},_syncShowPopup:function(){var b=this.getPopup();if(this._popupInner&&this._popupInner.el.parentNode!=this.popup._contentEl){this.popup._contentEl.appendChild(this._popupInner.el);this._popupInner.setVisible(true)}var e=mini.getBox(this._borderEl);var a=this.popupWidth;if(this.popupWidth=="100%"){a=e.width}b.setWidth(a);var d=parseInt(this.popupHeight);if(!isNaN(d)){b.setHeight(d)}else{b.setHeight("auto")}b.setMinWidth(this.popupMinWidth);b.setMinHeight(this.popupMinHeight);b.setMaxWidth(this.popupMaxWidth);b.setMaxHeight(this.popupMaxHeight);var c={xAlign:"left",yAlign:"below",outYAlign:"above",outXAlign:"right",popupCls:this.popupCls};this._doShowAtEl(this._borderEl,c)},_doShowAtEl:function(c,b){var a=this.getPopup();a.showAtEl(c,b)},__OnPopupHide:function(a){this.__doFocusCls();this.fire("hidepopup")},hidePopup:function(){if(this.isShowPopup()){var a=this.getPopup();a.close();this.blur()}},isShowPopup:function(){if(this.popup&&this.popup.isDisplay()){return true}else{return false}},setPopupWidth:function(a){this.popupWidth=a},setPopupMaxWidth:function(a){this.popupMaxWidth=a},setPopupMinWidth:function(a){this.popupMinWidth=a},getPopupWidth:function(a){return this.popupWidth},getPopupMaxWidth:function(a){return this.popupMaxWidth},getPopupMinWidth:function(a){return this.popupMinWidth},setPopupHeight:function(a){this.popupHeight=a},setPopupMaxHeight:function(a){this.popupMaxHeight=a},setPopupMinHeight:function(a){this.popupMinHeight=a},getPopupHeight:function(a){return this.popupHeight},getPopupMaxHeight:function(a){return this.popupMaxHeight},getPopupMinHeight:function(a){return this.popupMinHeight},__OnClick:function(b){if(this.enabled==false){return}this.fire("click",{htmlEvent:b});if(this.isReadOnly()){return}if(mini.isAncestor(this._buttonEl,b.target)){this._OnButtonClick(b)}if(mini.findParent(b.target,this._closeCls)){if(this.isShowPopup()){this.hidePopup()}this.fire("closeclick",{htmlEvent:b});return}if(this.allowInput==false||mini.isAncestor(this._buttonEl,b.target)){if(this.isShowPopup()){this.hidePopup()}else{var a=this;setTimeout(function(){a.showPopup()},1)}}},__OnPopupButtonClick:function(a){if(a.name=="close"){this.hidePopup()}a.cancel=true},getAttrs:function(b){var a=mini.PopupEdit.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["popupWidth","popupHeight","popup","onshowpopup","onhidepopup","onbeforeshowpopup"]);mini._ParseInt(b,a,["popupMinWidth","popupMaxWidth","popupMinHeight","popupMaxHeight"]);return a}});mini.regClass(mini.PopupEdit,"popupedit");mini.ComboBox=function(){this.data=[];this.columns=[];mini.ComboBox.superclass.constructor.call(this);var a=this;if(isFirefox){this._textEl.oninput=function(){a._tryQuery()}}};mini.extend(mini.ComboBox,mini.PopupEdit,{text:"",value:"",valueField:"id",textField:"text",dataField:"",delimiter:",",multiSelect:false,data:[],url:"",columns:[],allowInput:false,valueFromSelect:false,popupMaxHeight:200,set:function(d){if(typeof d=="string"){return this}var c=d.value;delete d.value;var a=d.url;delete d.url;var b=d.data;delete d.data;mini.ComboBox.superclass.set.call(this,d);if(!mini.isNull(b)){this.setData(b);d.data=b}if(!mini.isNull(a)){this.setUrl(a);d.url=a}if(!mini.isNull(c)){this.setValue(c);d.value=c}return this},uiCls:"mini-combobox",_createPopup:function(){mini.ComboBox.superclass._createPopup.call(this);this._listbox=new mini.ListBox();this._listbox.setBorderStyle("border:0;");this._listbox.setStyle("width:100%;height:auto;");this._listbox.render(this.popup._contentEl);this._listbox.on("itemclick",this.__OnItemClick,this);this._listbox.on("drawcell",this.__OnItemDrawCell,this);var a=this;this._listbox.on("beforeload",function(b){a.fire("beforeload",b)},this);this._listbox.on("preload",function(b){a.fire("preload",b)},this);this._listbox.on("load",function(b){a.fire("load",b)},this);this._listbox.on("loaderror",function(b){a.fire("loaderror",b)},this)},showPopup:function(){var a={cancel:false};this.fire("beforeshowpopup",a);this._firebeforeshowpopup=false;if(a.cancel==true){return}this._listbox.setHeight("auto");mini.ComboBox.superclass.showPopup.call(this);var b=this.popup.el.style.height;if(b==""||b=="auto"){this._listbox.setHeight("auto")}else{this._listbox.setHeight("100%")}this._listbox.setValue(this.value)},select:function(a){this._listbox.deselectAll();a=this.getItem(a);if(a){this._listbox.select(a);this.__OnItemClick({item:a})}},selects:function(a){if(!a){return}var b=this._listbox.getValueAndText(a);this.setValue(b[0])},getItem:function(a){return typeof a=="object"?a:this.data[a]},indexOf:function(a){return this.data.indexOf(a)},getAt:function(a){return this.data[a]},load:function(a){if(typeof a=="string"){this.setUrl(a)}else{this.setData(a)}},_eval:function(_){return eval("("+_+")")},setData:function(b){if(typeof b=="string"){b=this._eval(b)}if(!mini.isArray(b)){b=[]}this._listbox.setData(b);this.data=this._listbox.data;var a=this._listbox.getValueAndText(this.value);this.text=this._textEl.value=a[1]},getData:function(){return this.data},setUrl:function(a){this.getPopup();this._listbox.setUrl(a);this.url=this._listbox.url;this.data=this._listbox.data;var b=this._listbox.getValueAndText(this.value);this.text=this._textEl.value=b[1]},getUrl:function(){return this.url},setValueField:function(a){this.valueField=a;if(this._listbox){this._listbox.setValueField(a)}},getValueField:function(){return this.valueField},setTextField:function(a){if(this._listbox){this._listbox.setTextField(a)}this.textField=a},getTextField:function(){return this.textField},pinyinField:"tag",setPinyinField:function(a){this.pinyinField=a},getPinyinField:function(){return this.pinyinField},setDisplayField:function(a){this.setTextField(a)},setDataField:function(a){if(this._listbox){this._listbox.setDataField(a)}this.dataField=a},getDataField:function(){return this.dataField},setValue:function(b){if(this.value!==b){var a=this._listbox.getValueAndText(b);this.value=b;this._valueEl.value=this.value;this.text=this._textEl.value=a[1];this._doEmpty()}else{var a=this._listbox.getValueAndText(b);this.text=this._textEl.value=a[1]}},setMultiSelect:function(a){if(this.multiSelect!=a){this.multiSelect=a;if(this._listbox){this._listbox.setMultiSelect(a);this._listbox.setShowCheckBox(a)}}},getMultiSelect:function(){return this.multiSelect},setColumns:function(a){if(!mini.isArray(a)){a=[]}this.columns=a;this._listbox.setColumns(a)},getColumns:function(){return this.columns},showNullItem:false,setShowNullItem:function(a){if(this.showNullItem!=a){this.showNullItem=a;this._listbox.setShowNullItem(a)}},getShowNullItem:function(){return this.showNullItem},setNullItemText:function(a){if(this.nullItemText!=a){this.nullItemText=a;this._listbox.setNullItemText(a)}},getNullItemText:function(){return this.nullItemText},setValueFromSelect:function(a){this.valueFromSelect=a},getValueFromSelect:function(){return this.valueFromSelect},_OnValueChanged:function(){if(this.validateOnChanged){this._tryValidate()}var d=this.getValue();var b=this.getSelecteds();var a=b[0];var c=this;c.fire("valuechanged",{value:d,selecteds:b,selected:a})},getSelecteds:function(){return this._listbox.findItems(this.value)},getSelected:function(){return this.getSelecteds()[0]},__OnItemDrawCell:function(a){this.fire("drawcell",a)},__OnItemClick:function(g){var c={item:g.item,cancel:false};this.fire("beforeitemclick",c);if(c.cancel){return}var a=this._listbox.getSelecteds();var f=this._listbox.getValueAndText(a);var d=this.getValue();this.setValue(f[0]);this.setText(f[1]);if(g){if(d!=this.getValue()){var b=this;setTimeout(function(){b._OnValueChanged()},1)}if(!this.multiSelect){this.hidePopup()}this.focus();this.fire("itemclick",{item:g.item})}},__OnInputKeyDown:function(i,g){var c={htmlEvent:i};this.fire("keydown",c);if(i.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(i.keyCode==9){if(this.isShowPopup()){this.hidePopup()}return}if(this.isReadOnly()){return}switch(i.keyCode){case 27:i.preventDefault();if(this.isShowPopup()){i.stopPropagation()}this.hidePopup();this.focus();break;case 13:if(this.isShowPopup()){i.preventDefault();i.stopPropagation();var b=this._listbox.getFocusedIndex();if(b!=-1){var f=this._listbox.getAt(b);var d={item:f,cancel:false};this.fire("beforeitemclick",d);if(d.cancel==false){if(this.multiSelect){}else{this._listbox.deselectAll();this._listbox.select(f)}var a=this._listbox.getSelecteds();var h=this._listbox.getValueAndText(a);this.setValue(h[0]);this.setText(h[1]);this._OnValueChanged()}}this.hidePopup();this.focus()}else{this.fire("enter",c)}break;case 37:break;case 38:i.preventDefault();var b=this._listbox.getFocusedIndex();if(b==-1){b=0;if(!this.multiSelect){var f=this._listbox.findItems(this.value)[0];if(f){b=this._listbox.indexOf(f)}}}if(this.isShowPopup()){if(!this.multiSelect){b-=1;if(b<0){b=0}this._listbox._focusItem(b,true)}}break;case 39:break;case 40:i.preventDefault();var b=this._listbox.getFocusedIndex();if(b==-1){b=0;if(!this.multiSelect){var f=this._listbox.findItems(this.value)[0];if(f){b=this._listbox.indexOf(f)}}}if(this.isShowPopup()){if(!this.multiSelect){b+=1;if(b>this._listbox.getCount()-1){b=this._listbox.getCount()-1}this._listbox._focusItem(b,true)}}else{this.showPopup();if(!this.multiSelect){this._listbox._focusItem(b,true)}}break;default:if(this.allowInput==false){}else{this._tryQuery(this._textEl.value)}break}},__OnInputKeyUp:function(a){this.fire("keyup",{htmlEvent:a})},__OnInputKeyPress:function(a){this.fire("keypress",{htmlEvent:a})},_tryQuery:function(a){var b=this;setTimeout(function(){var c=b._textEl.value;if(c!=a){b._doQuery(c)}},10)},_doQuery:function(h){if(this.multiSelect==true){return}var g=[];h=h.toUpperCase();for(var c=0,b=this.data.length;c<b;c++){var a=this.data[c];var j=mini._getMap(this.textField,a);var d=mini._getMap(this.pinyinField,a);j=j?String(j).toUpperCase():"";d=d?String(d).toUpperCase():"";if(j.indexOf(h)!=-1||d.indexOf(h)!=-1){g.push(a)}}this._listbox.setData(g);this._filtered=true;if(h!==""||this.isShowPopup()){this.showPopup();var e=0;if(this._listbox.getShowNullItem()){e=1}var f=this;f._listbox._focusItem(e,true)}},__OnPopupHide:function(a){if(this._filtered){this._filtered=false;if(this._listbox.el){this._listbox.setData(this.data)}}this.__doFocusCls();this.fire("hidepopup")},findItems:function(a){return this._listbox.findItems(a)},__OnInputTextChanged:function(h){if(this.multiSelect==false){var n=this._textEl.value;var d=this.getData();var c=null;for(var f=0,b=d.length;f<b;f++){var o=d[f];var k=o[this.textField];if(k==n){c=o;break}}if(c){this._listbox.setValue(c?c[this.valueField]:"");var m=this._listbox.getValue();var a=this._listbox.getValueAndText(m);var j=this.getValue();this.setValue(m);this.setText(a[1])}else{if(this.valueFromSelect){this.setValue("");this.setText("")}else{this.setValue(n);this.setText(n)}}if(j!=this.getValue()){var g=this;g._OnValueChanged()}}},setAjaxData:function(a){this.ajaxData=a;this._listbox.setAjaxData(a)},setAjaxType:function(a){this.ajaxType=a;this._listbox.setAjaxType(a)},getAttrs:function(b){var m=mini.ComboBox.superclass.getAttrs.call(this,b);mini._ParseString(b,m,["url","data","textField","valueField","displayField","nullItemText","pinyinField","ondrawcell","onbeforeload","onpreload","onload","onloaderror","onitemclick","onbeforeitemclick"]);mini._ParseBool(b,m,["multiSelect","showNullItem","valueFromSelect"]);if(m.displayField){m.textField=m.displayField}var n=m.valueField||this.valueField;var d=m.textField||this.textField;if(b.nodeName.toLowerCase()=="select"){var f=[];for(var g=0,e=b.length;g<e;g++){var h=b.options[g];var a={};a[d]=h.text;a[n]=h.value;f.push(a)}if(f.length>0){m.data=f}}else{var j=mini.getChildNodes(b);for(var g=0,e=j.length;g<e;g++){var c=j[g];var k=jQuery(c).attr("property");if(!k){continue}k=k.toLowerCase();if(k=="columns"){m.columns=mini._ParseColumns(c)}else{if(k=="data"){m.data=c.innerHTML}}}}return m}});mini.regClass(mini.ComboBox,"combobox");mini.DatePicker=function(){mini.DatePicker.superclass.constructor.call(this);mini.addClass(this.el,"mini-datepicker");this.on("validation",this.__OnValidation,this)};mini.extend(mini.DatePicker,mini.PopupEdit,{valueFormat:"",format:"yyyy-MM-dd",maxDate:null,minDate:null,popupWidth:"",viewDate:new Date(),showTime:false,timeFormat:"H:mm",showTodayButton:true,showClearButton:true,showOkButton:false,uiCls:"mini-datepicker",_getCalendar:function(){if(!mini.DatePicker._Calendar){var a=mini.DatePicker._Calendar=new mini.Calendar();a.setStyle("border:0;")}return mini.DatePicker._Calendar},destroy:function(a){if(this._destroyPopup){mini.DatePicker._Calendar=null}mini.DatePicker.superclass.destroy.call(this,a)},_createPopup:function(){mini.DatePicker.superclass._createPopup.call(this);this._calendar=this._getCalendar()},_monthPicker:false,showPopup:function(){var a={cancel:false};this.fire("beforeshowpopup",a);if(a.cancel==true){return}this._calendar=this._getCalendar();this._calendar.beginUpdate();this._calendar._allowLayout=false;if(this._calendar.el.parentNode!=this.popup._contentEl){this._calendar.render(this.popup._contentEl)}this._calendar.set({monthPicker:this._monthPicker,showTime:this.showTime,timeFormat:this.timeFormat,showClearButton:this.showClearButton,showTodayButton:this.showTodayButton,showOkButton:this.showOkButton,showWeekNumber:this.showWeekNumber});this._calendar.setValue(this.value);if(this.value){this._calendar.setViewDate(this.value)}else{this._calendar.setViewDate(this.viewDate)}function c(){if(this._calendar._target){var d=this._calendar._target;this._calendar.un("timechanged",d.__OnTimeChanged,d);this._calendar.un("dateclick",d.__OnDateClick,d);this._calendar.un("drawdate",d.__OnDrawDate,d)}this._calendar.on("timechanged",this.__OnTimeChanged,this);this._calendar.on("dateclick",this.__OnDateClick,this);this._calendar.on("drawdate",this.__OnDrawDate,this);this._calendar.endUpdate();this._calendar._allowLayout=true;this._calendar.doLayout();this._calendar.focus();this._calendar._target=this}var b=this;c.call(b);mini.DatePicker.superclass.showPopup.call(this)},hidePopup:function(){mini.DatePicker.superclass.hidePopup.call(this);this._calendar.un("timechanged",this.__OnTimeChanged,this);this._calendar.un("dateclick",this.__OnDateClick,this);this._calendar.un("drawdate",this.__OnDrawDate,this)},within:function(a){if(mini.isAncestor(this.el,a.target)){return true}if(this._calendar.within(a)){return true}return false},__OnPopupKeyDown:function(a){if(a.keyCode==13){this.__OnDateClick()}if(a.keyCode==27){this.hidePopup();this.focus()}},minDateErrorText:"",maxDateErrorText:"",__OnValidation:function(d){if(d.isValid==false){return}var b=this.value;if(!mini.isDate(b)){return}var g=mini.parseDate(this.maxDate);var c=mini.parseDate(this.minDate);var a=this.maxDateErrorText||mini.VTypes.maxDateErrorText;var f=this.minDateErrorText||mini.VTypes.minDateErrorText;if(mini.isDate(g)){if(b.getTime()>g.getTime()){d.isValid=false;d.errorText=String.format(a,mini.formatDate(g,this.format))}}if(mini.isDate(c)){if(b.getTime()<c.getTime()){d.isValid=false;d.errorText=String.format(f,mini.formatDate(c,this.format))}}},__OnDrawDate:function(c){var a=c.date;var d=mini.parseDate(this.maxDate);var b=mini.parseDate(this.minDate);if(mini.isDate(d)){if(a.getTime()>d.getTime()){c.allowSelect=false}}if(mini.isDate(b)){if(a.getTime()<b.getTime()){c.allowSelect=false}}this.fire("drawdate",c)},__OnDateClick:function(c){if(this.showOkButton&&c.action!="ok"){return}var a=this._calendar.getValue();var b=this.getFormValue("U");this.setValue(a);if(b!==this.getFormValue("U")){this._OnValueChanged()}this.hidePopup();this.focus()},__OnTimeChanged:function(b){if(this.showOkButton){return}var a=this._calendar.getValue();this.setValue(a);this._OnValueChanged()},setFormat:function(a){if(typeof a!="string"){return}if(this.format!=a){this.format=a;this._textEl.value=this._valueEl.value=this.getFormValue()}},getFormat:function(){return this.format},setValueFormat:function(a){if(typeof a!="string"){return}if(this.valueFormat!=a){this.valueFormat=a}},getValueFormat:function(){return this.valueFormat},setValue:function(a){a=mini.parseDate(a);if(mini.isNull(a)){a=""}if(mini.isDate(a)){a=new Date(a.getTime())}if(this.value!=a){this.value=a;this.text=this._textEl.value=this._valueEl.value=this.getFormValue()}},nullValue:"",setNullValue:function(a){if(a=="null"){a=null}this.nullValue=a},getNullValue:function(){return this.nullValue},getValue:function(){if(!mini.isDate(this.value)){return this.nullValue}var a=this.value;if(this.valueFormat){a=mini.formatDate(a,this.valueFormat)}return a},getFormValue:function(a){if(!mini.isDate(this.value)){return""}a=a||this.format;return mini.formatDate(this.value,a)},setViewDate:function(a){a=mini.parseDate(a);if(!mini.isDate(a)){return}this.viewDate=a},getViewDate:function(){return this._calendar.getViewDate()},setShowTime:function(a){if(this.showTime!=a){this.showTime=a}},getShowTime:function(){return this.showTime},setTimeFormat:function(a){if(this.timeFormat!=a){this.timeFormat=a}},getTimeFormat:function(){return this.timeFormat},setShowTodayButton:function(a){this.showTodayButton=a},getShowTodayButton:function(){return this.showTodayButton},setShowClearButton:function(a){this.showClearButton=a},getShowClearButton:function(){return this.showClearButton},setShowOkButton:function(a){this.showOkButton=a},getShowOkButton:function(){return this.showOkButton},setShowWeekNumber:function(a){this.showWeekNumber=a},getShowWeekNumber:function(){return this.showWeekNumber},setMaxDate:function(a){this.maxDate=a},getMaxDate:function(){return this.maxDate},setMinDate:function(a){this.minDate=a},getMinDate:function(){return this.minDate},setMaxDateErrorText:function(a){this.maxDateErrorText=a},getMaxDateErrorText:function(){return this.maxDateErrorText},setMinDateErrorText:function(a){this.minDateErrorText=a},getMinDateErrorText:function(){return this.minDateErrorText},__OnInputTextChanged:function(c){var a=this._textEl.value;var f=mini.parseDate(a);if(!f||isNaN(f)||f.getFullYear()==1970){f=null}var b=this.getFormValue("U");this.setValue(f);if(f==null){this._textEl.value=""}if(b!==this.getFormValue("U")){this._OnValueChanged()}},__OnInputKeyDown:function(c){var a={htmlEvent:c};this.fire("keydown",a);if(c.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(c.keyCode==9){if(this.isShowPopup()){this.hidePopup()}return}if(this.isReadOnly()){return}switch(c.keyCode){case 27:c.preventDefault();if(this.isShowPopup()){c.stopPropagation()}this.hidePopup();break;case 9:case 13:if(this.isShowPopup()){c.preventDefault();c.stopPropagation();this.hidePopup()}else{this.__OnInputTextChanged(null);var b=this;setTimeout(function(){b.fire("enter",a)},10)}break;case 37:break;case 38:c.preventDefault();break;case 39:break;case 40:c.preventDefault();this.showPopup();break;default:break}},getAttrs:function(b){var a=mini.DatePicker.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["format","viewDate","timeFormat","ondrawdate","minDate","maxDate","valueFormat","nullValue","minDateErrorText","maxDateErrorText"]);mini._ParseBool(b,a,["showTime","showTodayButton","showClearButton","showOkButton","showWeekNumber"]);return a}});mini.regClass(mini.DatePicker,"datepicker");mini.MonthPicker=function(){mini.MonthPicker.superclass.constructor.call(this)};mini.extend(mini.MonthPicker,mini.DatePicker,{uiCls:"mini-monthpicker",valueFormat:"",format:"yyyy-MM",_monthPicker:true});mini.regClass(mini.MonthPicker,"monthpicker");mini.Calendar=function(){this.viewDate=new Date();this._selectedDates=[];mini.Calendar.superclass.constructor.call(this)};mini.extend(mini.Calendar,mini.Control,{width:220,height:160,monthPicker:false,_clearBorder:false,viewDate:null,_selectedDate:"",_selectedDates:[],multiSelect:false,firstDayOfWeek:0,todayText:"Today",clearText:"Clear",okText:"OK",cancelText:"Cancel",daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],format:"MMM, yyyy",timeFormat:"H:mm",showTime:false,currentTime:true,rows:1,columns:1,headerCls:"",bodyCls:"",footerCls:"",_todayCls:"mini-calendar-today",_weekendCls:"mini-calendar-weekend",_otherMonthCls:"mini-calendar-othermonth",_selectedDateCls:"mini-calendar-selected",showHeader:true,showFooter:true,showWeekNumber:false,showDaysHeader:true,showMonthButtons:true,showYearButtons:true,showTodayButton:true,showClearButton:true,showOkButton:false,isWeekend:function(b){var a=b.getDay();return a==0||a==6},getFirstDateOfMonth:function(a){var a=new Date(a.getFullYear(),a.getMonth(),1);return mini.getWeekStartDate(a,this.firstDayOfWeek)},getShortWeek:function(a){return this.daysShort[a]},uiCls:"mini-calendar",_create:function(){var e='<tr style="width:100%;"><td style="width:100%;"></td></tr>';e+='<tr ><td><div class="mini-calendar-footer"><span style="display:inline-block;"><input name="time" class="mini-timespinner" style="width:80px" format="'+this.timeFormat+'"/><span class="mini-calendar-footerSpace"></span></span><span class="mini-calendar-tadayButton">'+this.todayText+'</span><span class="mini-calendar-footerSpace"></span><span class="mini-calendar-clearButton">'+this.clearText+'</span><span class="mini-calendar-okButton">'+this.okText+'</span><a href="#" class="mini-calendar-focus" style="position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none" hideFocus></a></div></td></tr>';var b='<table class="mini-calendar" cellpadding="0" cellspacing="0">'+e+"</table>";var f=document.createElement("div");f.innerHTML=b;this.el=f.firstChild;var a=this.el.getElementsByTagName("tr");var c=this.el.getElementsByTagName("td");this._innerEl=c[0];this._footerEl=mini.byClass("mini-calendar-footer",this.el);this.timeWrapEl=this._footerEl.childNodes[0];this.todayButtonEl=this._footerEl.childNodes[1];this.footerSpaceEl=this._footerEl.childNodes[2];this.closeButtonEl=this._footerEl.childNodes[3];this.okButtonEl=this._footerEl.childNodes[4];this._focusEl=this._footerEl.lastChild;mini.parse(this._footerEl);this.timeSpinner=mini.getbyName("time",this.el);this.doUpdate()},focus:function(){try{this._focusEl.focus()}catch(a){}},destroy:function(a){this._innerEl=this._footerEl=this.timeWrapEl=this.todayButtonEl=this.footerSpaceEl=this.closeButtonEl=null;mini.Calendar.superclass.destroy.call(this,a)},_initEvents:function(){if(this.timeSpinner){this.timeSpinner.on("valuechanged",this.__OnTimeChanged,this)}mini._BindEvents(function(){mini.on(this.el,"click",this.__OnClick,this);mini.on(this.el,"mousedown",this.__OnMouseDown,this);mini.on(this.el,"keydown",this.__OnKeyDown,this)},this)},getDateEl:function(a){if(!a){return null}var b=this.uid+"$"+mini.clearTime(a).getTime();return document.getElementById(b)},within:function(a){if(mini.isAncestor(this.el,a.target)){return true}if(this.menuEl&&mini.isAncestor(this.menuEl,a.target)){return true}return false},setShowHeader:function(a){this.showHeader=a;this.doUpdate()},getShowHeader:function(){return this.showHeader},setShowFooter:function(a){this.showFooter=a;this.doUpdate()},getShowFooter:function(){return this.showFooter},setShowWeekNumber:function(a){this.showWeekNumber=a;this.doUpdate()},getShowWeekNumber:function(){return this.showWeekNumber},setShowDaysHeader:function(a){this.showDaysHeader=a;this.doUpdate()},getShowDaysHeader:function(){return this.showDaysHeader},setShowMonthButtons:function(a){this.showMonthButtons=a;this.doUpdate()},getShowMonthButtons:function(){return this.showMonthButtons},setShowYearButtons:function(a){this.showYearButtons=a;this.doUpdate()},getShowYearButtons:function(){return this.showYearButtons},setShowTodayButton:function(a){this.showTodayButton=a;this.todayButtonEl.style.display=this.showTodayButton?"":"none";this.doUpdate()},getShowTodayButton:function(){return this.showTodayButton},setShowClearButton:function(a){this.showClearButton=a;this.closeButtonEl.style.display=this.showClearButton?"":"none";this.doUpdate()},getShowClearButton:function(){return this.showClearButton},setShowOkButton:function(a){this.showOkButton=a;this.okButtonEl.style.display=this.showOkButton?"":"none";this.doUpdate()},getShowOkButton:function(){return this.showOkButton},setViewDate:function(a){a=mini.parseDate(a);if(!a){a=new Date()}if(mini.isDate(a)){a=new Date(a.getTime())}this.viewDate=a;this.doUpdate()},getViewDate:function(){return this.viewDate},setSelectedDate:function(b){b=mini.parseDate(b);if(!mini.isDate(b)){b=""}else{b=new Date(b.getTime())}var a=this.getDateEl(this._selectedDate);if(a){mini.removeClass(a,this._selectedDateCls)}this._selectedDate=b;if(this._selectedDate){this._selectedDate=mini.cloneDate(this._selectedDate)}var a=this.getDateEl(this._selectedDate);if(a){mini.addClass(a,this._selectedDateCls)}this.fire("datechanged")},setSelectedDates:function(a){if(!mini.isArray(a)){a=[]}this._selectedDates=a;this.doUpdate()},getSelectedDate:function(){return this._selectedDate?this._selectedDate:""},setTime:function(a){this.timeSpinner.setValue(a)},getTime:function(){return this.timeSpinner.getFormValue()},setValue:function(a){this.setSelectedDate(a);if(!a){a=new Date()}this.setTime(a)},getValue:function(){var b=this._selectedDate;if(b){b=mini.clearTime(b);if(this.showTime){var a=this.timeSpinner.getValue();if(a){b.setHours(a.getHours());b.setMinutes(a.getMinutes());b.setSeconds(a.getSeconds())}}}return b?b:""},getFormValue:function(){var a=this.getValue();if(a){return mini.formatDate(a,"yyyy-MM-dd HH:mm:ss")}return""},isSelectedDate:function(a){if(!a||!this._selectedDate){return false}return mini.clearTime(a).getTime()==mini.clearTime(this._selectedDate).getTime()},setMultiSelect:function(a){this.multiSelect=a;this.doUpdate()},getMultiSelect:function(){return this.multiSelect},setRows:function(a){if(isNaN(a)){return}if(a<1){a=1}this.rows=a;this.doUpdate()},getRows:function(){return this.rows},setColumns:function(a){if(isNaN(a)){return}if(a<1){a=1}this.columns=a;this.doUpdate()},getColumns:function(){return this.columns},setShowTime:function(a){if(this.showTime!=a){this.showTime=a;this.timeWrapEl.style.display=this.showTime?"":"none";this.doLayout()}},getShowTime:function(){return this.showTime},setTimeFormat:function(a){if(this.timeFormat!=a){this.timeSpinner.setFormat(a);this.timeFormat=this.timeSpinner.format}},getTimeFormat:function(){return this.timeFormat},doLayout:function(){if(!this.canLayout()){return}this.timeWrapEl.style.display=this.showTime?"":"none";this.todayButtonEl.style.display=this.showTodayButton?"":"none";this.closeButtonEl.style.display=this.showClearButton?"":"none";this.okButtonEl.style.display=this.showOkButton?"":"none";this.footerSpaceEl.style.display=(this.showClearButton&&this.showTodayButton)?"":"none";this._footerEl.style.display=this.showFooter?"":"none";var a=this._innerEl.firstChild;var b=this.isAutoHeight();if(!b){a.parentNode.style.height="100px";h=jQuery(this.el).height();h-=jQuery(this._footerEl).outerHeight();a.parentNode.style.height=h+"px"}else{a.parentNode.style.height=""}mini.layout(this._footerEl);if(this.monthPicker){this._tryShowMenu()}},doUpdate:function(){if(!this._allowUpdate){return}var m=new Date(this.viewDate.getTime());var d=this.rows==1&&this.columns==1;var g=100/this.rows;var n='<table class="mini-calendar-views" border="0" cellpadding="0" cellspacing="0">';for(var f=0,b=this.rows;f<b;f++){n+="<tr >";for(var e=0,c=this.columns;e<c;e++){n+='<td style="height:'+g+'%">';n+=this._CreateView(m,f,e);n+="</td>";m=new Date(m.getFullYear(),m.getMonth()+1,1)}n+="</tr>"}n+="</table>";this._innerEl.innerHTML=n;var a=this.el;setTimeout(function(){mini.repaint(a)},100);this.doLayout()},_CreateView:function(m,d,a){var x=m.getMonth();var w=this.getFirstDateOfMonth(m);var o=new Date(w.getTime());var c=mini.clearTime(new Date()).getTime();var l=this.value?mini.clearTime(this.value).getTime():-1;var q=this.rows>1||this.columns>1;var n="";n+='<table class="mini-calendar-view" border="0" cellpadding="0" cellspacing="0">';if(this.showHeader){n+='<tr ><td colSpan="10" class="mini-calendar-header"><div class="mini-calendar-headerInner">';if(d==0&&a==0){n+='<div class="mini-calendar-prev">';if(this.showYearButtons){n+='<span class="mini-calendar-yearPrev"></span>'}if(this.showMonthButtons){n+='<span class="mini-calendar-monthPrev"></span>'}n+="</div>"}if(d==0&&a==this.columns-1){n+='<div class="mini-calendar-next">';if(this.showMonthButtons){n+='<span class="mini-calendar-monthNext"></span>'}if(this.showYearButtons){n+='<span class="mini-calendar-yearNext"></span>'}n+="</div>"}n+='<span class="mini-calendar-title">'+mini.formatDate(m,this.format);+"</span>";n+="</div></td></tr>"}if(this.showDaysHeader){n+='<tr class="mini-calendar-daysheader"><td class="mini-calendar-space"></td>';if(this.showWeekNumber){n+='<td sclass="mini-calendar-weeknumber"></td>'}for(var t=this.firstDayOfWeek,r=t+7;t<r;t++){var z=this.getShortWeek(t);n+='<td yAlign="middle">';n+=z;n+="</td>";w=new Date(w.getFullYear(),w.getMonth(),w.getDate()+1)}n+='<td class="mini-calendar-space"></td></tr>'}w=o;for(var u=0;u<=5;u++){n+='<tr class="mini-calendar-days"><td class="mini-calendar-space"></td>';if(this.showWeekNumber){var f=mini.getWeek(w.getFullYear(),w.getMonth()+1,w.getDate());if(String(f).length==1){f="0"+f}n+='<td class="mini-calendar-weeknumber" yAlign="middle">'+f+"</td>"}for(var t=this.firstDayOfWeek,r=t+7;t<r;t++){var p=this.isWeekend(w);var b=mini.clearTime(w).getTime();var y=b==c;var g=this.isSelectedDate(w);if(x!=w.getMonth()&&q){b=-1}var v=this._OnDrawDate(w);n+='<td yAlign="middle" id="';n+=this.uid+"$"+b;n+='" class="mini-calendar-date ';if(p){n+=" mini-calendar-weekend "}if(v.allowSelect==false){n+=" mini-calendar-disabled "}if(x!=w.getMonth()&&q){}else{if(g){n+=" "+this._selectedDateCls+" "}if(y){n+=" mini-calendar-today "}}if(x!=w.getMonth()){n+=" mini-calendar-othermonth "}if(v.dateCls){n+=" "+v.dateCls}n+='" style="';if(v.dateStyle){n+=v.dateStyle}n+='">';if(x!=w.getMonth()&&q){}else{n+=v.dateHtml}n+="</td>";w=new Date(w.getFullYear(),w.getMonth(),w.getDate()+1)}n+='<td class="mini-calendar-space"></td></tr>'}n+='<tr class="mini-calendar-bottom" colSpan="10"><td ></td></tr>';n+="</table>";return n},_OnDrawDate:function(a){var b={date:a,dateCls:"",dateStyle:"",dateHtml:a.getDate(),allowSelect:true};this.fire("drawdate",b);return b},_OnDateClick:function(a,b){this.hideMenu();var c={date:a,action:b};this.fire("dateclick",c);this._OnValueChanged()},menuEl:null,menuYear:null,menuSelectMonth:null,menuSelectYear:null,_tryShowMenu:function(){if(!this.menuEl){var a=this;setTimeout(function(){a.showMenu()},1)}},showMenu:function(){this.hideMenu();this.menuYear=parseInt(this.viewDate.getFullYear()/10)*10;this._menuselectMonth=this.viewDate.getMonth();this._menuselectYear=this.viewDate.getFullYear();var a='<div class="mini-calendar-menu"></div>';this.menuEl=mini.append(document.body,a);this.updateMenu(this.viewDate);var b=this.getBox();if(this.el.style.borderWidth=="0px"){this.menuEl.style.border="0"}mini.setBox(this.menuEl,b);mini.on(this.menuEl,"click",this.__OnMenuClick,this);mini.on(document,"mousedown",this.__OnBodyMenuMouseDown,this)},hideMenu:function(){if(this.menuEl){mini.un(this.menuEl,"click",this.__OnMenuClick,this);mini.un(document,"mousedown",this.__OnBodyMenuMouseDown,this);jQuery(this.menuEl).remove();this.menuEl=null}},updateMenu:function(){var d='<div class="mini-calendar-menu-months">';for(var c=0,b=12;c<b;c++){var e=mini.getShortMonth(c);var a="";if(this._menuselectMonth==c){a="mini-calendar-menu-selected"}d+='<a id="'+c+'" class="mini-calendar-menu-month '+a+'" href="javascript:void(0);" hideFocus onclick="return false">'+e+"</a>"}d+='<div style="clear:both;"></div></div>';d+='<div class="mini-calendar-menu-years">';for(var c=this.menuYear,b=this.menuYear+10;c<b;c++){var e=c;var a="";if(this._menuselectYear==c){a="mini-calendar-menu-selected"}d+='<a id="'+c+'" class="mini-calendar-menu-year '+a+'" href="javascript:void(0);" hideFocus onclick="return false">'+e+"</a>"}d+='<div class="mini-calendar-menu-prevYear"></div><div class="mini-calendar-menu-nextYear"></div><div style="clear:both;"></div></div>';d+='<div class="mini-calendar-footer"><span class="mini-calendar-okButton">'+this.okText+'</span><span class="mini-calendar-footerSpace"></span><span class="mini-calendar-cancelButton">'+this.cancelText+'</span></div><div style="clear:both;"></div>';this.menuEl.innerHTML=d},__OnMenuClick:function(f){var d=f.target;var c=mini.findParent(d,"mini-calendar-menu-month");var a=mini.findParent(d,"mini-calendar-menu-year");if(c){this._menuselectMonth=parseInt(c.id);this.updateMenu()}else{if(a){this._menuselectYear=parseInt(a.id);this.updateMenu()}else{if(mini.findParent(d,"mini-calendar-menu-prevYear")){this.menuYear=this.menuYear-1;this.menuYear=parseInt(this.menuYear/10)*10;this.updateMenu()}else{if(mini.findParent(d,"mini-calendar-menu-nextYear")){this.menuYear=this.menuYear+11;this.menuYear=parseInt(this.menuYear/10)*10;this.updateMenu()}else{if(mini.findParent(d,"mini-calendar-okButton")){var b=new Date(this._menuselectYear,this._menuselectMonth,1);if(this.monthPicker){this.setViewDate(b);this.setSelectedDate(b);this._OnDateClick(b)}else{this.setViewDate(b);this.hideMenu()}}else{if(mini.findParent(d,"mini-calendar-cancelButton")){if(this.monthPicker){this._OnDateClick(null,"cancel")}else{this.hideMenu()}}}}}}}},__OnBodyMenuMouseDown:function(a){if(!mini.findParent(a.target,"mini-calendar-menu")){this.hideMenu()}},__OnClick:function(j){var m=this.viewDate;if(this.enabled==false){return}var l=j.target;var b=mini.findParent(j.target,"mini-calendar-title");if(mini.findParent(l,"mini-calendar-monthNext")){m.setMonth(m.getMonth()+1);this.setViewDate(m)}else{if(mini.findParent(l,"mini-calendar-yearNext")){m.setFullYear(m.getFullYear()+1);this.setViewDate(m)}else{if(mini.findParent(l,"mini-calendar-monthPrev")){m.setMonth(m.getMonth()-1);this.setViewDate(m)}else{if(mini.findParent(l,"mini-calendar-yearPrev")){m.setFullYear(m.getFullYear()-1);this.setViewDate(m)}else{if(mini.findParent(l,"mini-calendar-tadayButton")){var k=new Date();this.setViewDate(k);this.setSelectedDate(k);if(this.currentTime){var i=new Date();this.setTime(i)}this._OnDateClick(k,"today")}else{if(mini.findParent(l,"mini-calendar-clearButton")){this.setSelectedDate(null);this.setTime(null);this._OnDateClick(null,"clear")}else{if(mini.findParent(l,"mini-calendar-okButton")){this._OnDateClick(null,"ok")}else{if(b){this.showMenu()}}}}}}}}var g=mini.findParent(j.target,"mini-calendar-date");if(g&&!mini.hasClass(g,"mini-calendar-disabled")){var a=g.id.split("$");var f=parseInt(a[a.length-1]);if(f==-1){return}var c=new Date(f);this._OnDateClick(c)}},__OnMouseDown:function(f){if(this.enabled==false){return}var b=mini.findParent(f.target,"mini-calendar-date");if(b&&!mini.hasClass(b,"mini-calendar-disabled")){var c=b.id.split("$");var d=parseInt(c[c.length-1]);if(d==-1){return}var a=new Date(d);this.setSelectedDate(a)}},__OnTimeChanged:function(a){this.fire("timechanged");this._OnValueChanged()},__OnKeyDown:function(d){if(this.enabled==false){return}var b=this.getSelectedDate();if(!b){b=new Date(this.viewDate.getTime())}switch(d.keyCode){case 27:break;case 13:break;case 37:b=mini.addDate(b,-1,"D");break;case 38:b=mini.addDate(b,-7,"D");break;case 39:b=mini.addDate(b,1,"D");break;case 40:b=mini.addDate(b,7,"D");break;default:break}var c=this;if(b.getMonth()!=c.viewDate.getMonth()){c.setViewDate(mini.cloneDate(b));c.focus()}var a=this.getDateEl(b);if(a&&mini.hasClass(a,"mini-calendar-disabled")){return}c.setSelectedDate(b);if(d.keyCode==37||d.keyCode==38||d.keyCode==39||d.keyCode==40){d.preventDefault()}},_OnValueChanged:function(){this.fire("valuechanged")},getAttrs:function(b){var a=mini.Calendar.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["viewDate","rows","columns","ondateclick","ondrawdate","ondatechanged","timeFormat","ontimechanged","onvaluechanged"]);mini._ParseBool(b,a,["multiSelect","showHeader","showFooter","showWeekNumber","showDaysHeader","showMonthButtons","showYearButtons","showTodayButton","showClearButton","showTime","showOkButton"]);return a}});mini.regClass(mini.Calendar,"calendar");mini.ListBox=function(){mini.ListBox.superclass.constructor.call(this)};mini.extend(mini.ListBox,mini.ListControl,{formField:true,columns:null,columnWidth:80,showNullItem:false,nullItemText:"",showEmpty:false,emptyText:"",showCheckBox:false,showAllCheckBox:true,multiSelect:false,_itemCls:"mini-listbox-item",_itemHoverCls:"mini-listbox-item-hover",_itemSelectedCls:"mini-listbox-item-selected",uiCls:"mini-listbox",_create:function(){var a=this.el=document.createElement("div");this.el.className="mini-listbox";this.el.innerHTML='<div class="mini-listbox-border"><div class="mini-listbox-header"></div><div class="mini-listbox-view"></div><input type="hidden"/></div><div class="mini-errorIcon"></div>';this._borderEl=this.el.firstChild;this._headerEl=this._borderEl.firstChild;this._viewEl=this._borderEl.childNodes[1];this._valueEl=this._borderEl.childNodes[2];this._errorIconEl=this.el.lastChild;this._scrollViewEl=this._viewEl;this._viewEl.innerHTML='<div class="mini-grid-rows-content"></div>'},_initEvents:function(){mini.ListBox.superclass._initEvents.call(this);mini._BindEvents(function(){mini_onOne(this._viewEl,"scroll",this.__OnScroll,this)},this)},destroy:function(a){if(this._viewEl){this._viewEl.onscroll=null;mini.clearEvent(this._viewEl);this._viewEl=null}this._borderEl=null;this._headerEl=null;this._viewEl=null;this._valueEl=null;mini.ListBox.superclass.destroy.call(this,a)},setColumns:function(f){if(!mini.isArray(f)){f=[]}this.columns=f;for(var c=0,a=this.columns.length;c<a;c++){var e=this.columns[c];if(e.type){if(!mini.isNull(e.header)&&typeof e.header!=="function"){if(e.header.trim()==""){delete e.header}}var b=mini._getColumn(e.type);if(b){var g=mini.copyTo({},e);mini.copyTo(e,b);mini.copyTo(e,g)}}var d=parseInt(e.width);if(mini.isNumber(d)&&String(d)==e.width){e.width=d+"px"}if(mini.isNull(e.width)){e.width=this.columnWidth+"px"}}this.doUpdate()},getColumns:function(){return this.columns},doUpdate:function(){if(this._allowUpdate===false){return}var m=this.columns&&this.columns.length>0;if(m){mini.addClass(this.el,"mini-listbox-showColumns")}else{mini.removeClass(this.el,"mini-listbox-showColumns")}this._headerEl.style.display=m?"":"none";var a=[];if(m){a[a.length]='<table class="mini-listbox-headerInner" cellspacing="0" cellpadding="0"><tr>';var A=this.uid+"$ck$all";a[a.length]='<td class="mini-listbox-checkbox"><input type="checkbox" id="'+A+'"></td>';for(var u=0,t=this.columns.length;u<t;u++){var d=this.columns[u];var v=d.header;if(mini.isNull(v)){v="&nbsp;"}var p=d.width;if(mini.isNumber(p)){p=p+"px"}a[a.length]='<td class="';if(d.headerCls){a[a.length]=d.headerCls}a[a.length]='" style="';if(d.headerStyle){a[a.length]=d.headerStyle+";"}if(p){a[a.length]="width:"+p+";"}if(d.headerAlign){a[a.length]="text-align:"+d.headerAlign+";"}a[a.length]='">';a[a.length]=v;a[a.length]="</td>"}a[a.length]="</tr></table>"}this._headerEl.innerHTML=a.join("");var a=[];var C=this.data;a[a.length]='<table class="mini-listbox-items" cellspacing="0" cellpadding="0">';if(this.showEmpty&&C.length==0){a[a.length]='<tr><td colspan="20">'+this.emptyText+"</td></tr>"}else{this._doNullItem();for(var x=0,s=C.length;x<s;x++){var z=C[x];var g=-1;var r=" ";var f=-1;var B=" ";a[a.length]='<tr id="';a[a.length]=this._createItemId(x);a[a.length]='" index="';a[a.length]=x;a[a.length]='" class="mini-listbox-item ';if(z.enabled===false){a[a.length]=" mini-disabled "}g=a.length;a[a.length]=r;a[a.length]='" style="';f=a.length;a[a.length]=B;a[a.length]='">';var q=this._createCheckId(x);var o=this.name;var c=this.getItemValue(z);var b="";if(z.enabled===false){b="disabled"}a[a.length]='<td class="mini-listbox-checkbox"><input '+b+' id="'+q+'" type="checkbox" ></td>';if(m){for(var u=0,t=this.columns.length;u<t;u++){var d=this.columns[u];var y=this._OnDrawCell(z,x,d);var p=d.width;if(typeof p=="number"){p=p+"px"}a[a.length]='<td class="';if(y.cellCls){a[a.length]=y.cellCls}a[a.length]='" style="';if(y.cellStyle){a[a.length]=y.cellStyle+";"}if(p){a[a.length]="width:"+p+";"}if(d.align){a[a.length]="text-align:"+d.align+";"}a[a.length]='">';a[a.length]=y.cellHtml;a[a.length]="</td>";if(y.rowCls){r=y.rowCls}if(y.rowStyle){B=y.rowStyle}}}else{var y=this._OnDrawCell(z,x,null);a[a.length]='<td class="';if(y.cellCls){a[a.length]=y.cellCls}a[a.length]='" style="';if(y.cellStyle){a[a.length]=y.cellStyle}a[a.length]='">';a[a.length]=y.cellHtml;a[a.length]="</td>";if(y.rowCls){r=y.rowCls}if(y.rowStyle){B=y.rowStyle}}a[g]=r;a[f]=B;a[a.length]="</tr>"}}a[a.length]="</table>";var n=a.join("");this._viewEl.firstChild.innerHTML=n;this._doSelects();this.doLayout()},doLayout:function(){if(!this.canLayout()){return}if(this.columns&&this.columns.length>0){mini.addClass(this.el,"mini-listbox-showcolumns")}else{mini.removeClass(this.el,"mini-listbox-showcolumns")}if(this.showCheckBox){mini.removeClass(this.el,"mini-listbox-hideCheckBox")}else{mini.addClass(this.el,"mini-listbox-hideCheckBox")}var a=this.uid+"$ck$all";var j=document.getElementById(a);if(j){j.style.display=this.showAllCheckBox?"":"none"}var g=this.isAutoHeight();h=this.getHeight(true);e=mini.getWidth(this._borderEl,true);var i=e;var f=this._viewEl;f.style.width=e+"px";if(!g){var b=mini.getHeight(this._headerEl);h=h-b;f.style.height=h+"px"}else{f.style.height="auto"}if(isIE){var d=this._headerEl.firstChild,c=this._viewEl.firstChild.firstChild;if(this._viewEl.offsetHeight>=this._viewEl.scrollHeight){c.style.width="100%";if(d){d.style.width="100%"}}else{var e=parseInt(c.parentNode.offsetWidth)+"px";if(d){d.style.width=e}}}if(this._viewEl.offsetHeight<this._viewEl.scrollHeight){this._headerEl.style.width=(i-17)+"px"}else{this._headerEl.style.width="100%"}},setShowCheckBox:function(a){this.showCheckBox=a;this.doLayout()},getShowCheckBox:function(){return this.showCheckBox},setShowAllCheckBox:function(a){this.showAllCheckBox=a;this.doLayout()},getShowAllCheckBox:function(){return this.showAllCheckBox},setShowNullItem:function(a){if(this.showNullItem!=a){this.showNullItem=a;this._doNullItem();this.doUpdate()}},getShowNullItem:function(){return this.showNullItem},setNullItemText:function(a){if(this.nullItemText!=a){this.nullItemText=a;this._doNullItem();this.doUpdate()}},getNullItemText:function(){return this.nullItemText},_doNullItem:function(){for(var b=0,a=this.data.length;b<a;b++){var c=this.data[b];if(c.__NullItem){this.data.removeAt(b);break}}if(this.showNullItem){var c={__NullItem:true};c[this.textField]="";c[this.valueField]="";this.data.insert(0,c)}},_OnDrawCell:function(a,b,c){var f=c?mini._getMap(c.field,a):this.getItemText(a);var g={sender:this,index:b,rowIndex:b,record:a,item:a,column:c,field:c?c.field:null,value:f,cellHtml:f,rowCls:null,cellCls:c?(c.cellCls||""):"",rowStyle:null,cellStyle:c?(c.cellStyle||""):""};var i=this.columns&&this.columns.length>0;if(!i){if(b==0&&this.showNullItem){g.cellHtml=this.nullItemText}}if(g.autoEscape==true){g.cellHtml=mini.htmlEncode(g.cellHtml)}if(c){if(c.dateFormat){if(mini.isDate(g.value)){g.cellHtml=mini.formatDate(f,c.dateFormat)}else{g.cellHtml=f}}var d=c.renderer;if(d){fn=typeof d=="function"?d:window[d];if(fn){g.cellHtml=fn.call(c,g)}}}this.fire("drawcell",g);if(g.cellHtml===null||g.cellHtml===undefined||g.cellHtml===""){g.cellHtml="&nbsp;"}return g},__OnScroll:function(a){this._headerEl.scrollLeft=this._viewEl.scrollLeft},__OnClick:function(f){var d=this.uid+"$ck$all";if(f.target.id==d){var a=document.getElementById(d);if(a){var b=a.checked;var c=this.getValue();if(b){this.selectAll()}else{this.deselectAll()}this._OnSelectionChanged();if(c!=this.getValue()){this._OnValueChanged();this.fire("itemclick",{htmlEvent:f})}}return}this._fireEvent(f,"Click")},getAttrs:function(e){var b=mini.ListBox.superclass.getAttrs.call(this,e);mini._ParseString(e,b,["nullItemText","ondrawcell"]);mini._ParseBool(e,b,["showCheckBox","showAllCheckBox","showNullItem"]);if(e.nodeName.toLowerCase()!="select"){var d=mini.getChildNodes(e);for(var c=0,a=d.length;c<a;c++){var f=d[c];var g=jQuery(f).attr("property");if(!g){continue}g=g.toLowerCase();if(g=="columns"){b.columns=mini._ParseColumns(f)}else{if(g=="data"){b.data=f.innerHTML}}}}return b}});mini.regClass(mini.ListBox,"listbox");mini.CheckBoxList=function(){mini.CheckBoxList.superclass.constructor.call(this)};mini.extend(mini.CheckBoxList,mini.ListControl,{formField:true,_labelFieldCls:"mini-labelfield-checkboxlist",multiSelect:true,repeatItems:0,repeatLayout:"none",repeatDirection:"horizontal",_itemCls:"mini-checkboxlist-item",_itemHoverCls:"mini-checkboxlist-item-hover",_itemSelectedCls:"mini-checkboxlist-item-selected",_tableCls:"mini-checkboxlist-table",_tdCls:"mini-checkboxlist-td",_checkType:"checkbox",uiCls:"mini-checkboxlist",_create:function(){var a=this.el=document.createElement("div");this.el.className=this.uiCls;this.el.innerHTML='<table cellpadding="0" border="0" cellspacing="0" style="display:table;"><tr><td><div class="mini-list-inner"></div><div class="mini-errorIcon"></div><input type="hidden" /></td></tr></table>';this.cellEl=a.getElementsByTagName("td")[0];this._innerEl=this.cellEl.firstChild;this._valueEl=this.cellEl.lastChild;this._errorIconEl=this.cellEl.childNodes[1];this._borderEl=this.el.firstChild},_getRepeatTable:function(){var f=[];if(this.repeatItems>0){if(this.repeatDirection=="horizontal"){var g=[];for(var d=0,b=this.data.length;d<b;d++){var e=this.data[d];if(g.length==this.repeatItems){f.push(g);g=[]}g.push(e)}f.push(g)}else{var a=this.repeatItems>this.data.length?this.data.length:this.repeatItems;for(var d=0,b=a;d<b;d++){f.push([])}for(var d=0,b=this.data.length;d<b;d++){var e=this.data[d];var c=d%this.repeatItems;f[c].push(e)}}}else{f=[this.data.clone()]}return f},doUpdate:function(){var d=this.data;var m="";for(var e=0,a=d.length;e<a;e++){var f=d[e];f._i=e}if(this.repeatLayout=="flow"){var g=this._getRepeatTable();for(var e=0,a=g.length;e<a;e++){var h=g[e];for(var c=0,b=h.length;c<b;c++){var f=h[c];m+=this._createItemHtml(f,f._i)}if(e!=a-1){m+="<br/>"}}}else{if(this.repeatLayout=="table"){var g=this._getRepeatTable();m+='<table class="'+this._tableCls+'" cellpadding="0" cellspacing="1">';for(var e=0,a=g.length;e<a;e++){var h=g[e];m+="<tr>";for(var c=0,b=h.length;c<b;c++){var f=h[c];m+='<td class="'+this._tdCls+'">';m+=this._createItemHtml(f,f._i);m+="</td>"}m+="</tr>"}m+="</table>"}else{for(var e=0,a=d.length;e<a;e++){var f=d[e];m+=this._createItemHtml(f,e)}}}this._innerEl.innerHTML=m;for(var e=0,a=d.length;e<a;e++){var f=d[e];delete f._i}},_createItemHtml:function(i,d){var f=this._OnDrawItem(i,d);var a=this._createItemId(d);var g=this._createCheckId(d);var b=this.getItemValue(i);var c="";var j='<div id="'+a+'" index="'+d+'" class="'+this._itemCls+" ";if(i.enabled===false){j+=" mini-disabled ";c="disabled"}var h='onclick="return false"';h='onmousedown="this._checked = this.checked;" onclick="this.checked = this._checked"';j+=f.itemCls+'" style="'+f.itemStyle+'"><input '+h+" "+c+' value="'+b+'" id="'+g+'" type="'+this._checkType+'" /><label for="'+g+'" onclick="return false;">';j+=f.itemHtml+"</label></div>";return j},_OnDrawItem:function(b,a){var c=this.getItemText(b);var d={index:a,item:b,itemHtml:c,itemCls:"",itemStyle:""};this.fire("drawitem",d);if(d.itemHtml===null||d.itemHtml===undefined){d.itemHtml=""}return d},setRepeatItems:function(a){a=parseInt(a);if(isNaN(a)){a=0}if(this.repeatItems!=a){this.repeatItems=a;this.doUpdate()}},getRepeatItems:function(){return this.repeatItems},setRepeatLayout:function(a){if(a!="flow"&&a!="table"){a="none"}if(this.repeatLayout!=a){this.repeatLayout=a;this.doUpdate()}},getRepeatLayout:function(){return this.repeatLayout},setRepeatDirection:function(a){if(a!="vertical"){a="horizontal"}if(this.repeatDirection!=a){this.repeatDirection=a;this.doUpdate()}},getRepeatDirection:function(){return this.repeatDirection},getAttrs:function(d){var b=mini.CheckBoxList.superclass.getAttrs.call(this,d);var f=jQuery(d);mini._ParseString(d,b,["ondrawitem"]);var e=parseInt(f.attr("repeatItems"));if(!isNaN(e)){b.repeatItems=e}var a=f.attr("repeatLayout");if(a){b.repeatLayout=a}var c=f.attr("repeatDirection");if(c){b.repeatDirection=c}return b}});mini.regClass(mini.CheckBoxList,"checkboxlist");mini.RadioButtonList=function(){mini.RadioButtonList.superclass.constructor.call(this)};mini.extend(mini.RadioButtonList,mini.CheckBoxList,{multiSelect:false,_itemCls:"mini-radiobuttonlist-item",_itemHoverCls:"mini-radiobuttonlist-item-hover",_itemSelectedCls:"mini-radiobuttonlist-item-selected",_tableCls:"mini-radiobuttonlist-table",_tdCls:"mini-radiobuttonlist-td",_checkType:"radio",uiCls:"mini-radiobuttonlist"});mini.regClass(mini.RadioButtonList,"radiobuttonlist");mini.TreeSelect=function(){this.data=[];mini.TreeSelect.superclass.constructor.call(this)};mini.extend(mini.TreeSelect,mini.PopupEdit,{valueFromSelect:false,text:"",value:"",autoCheckParent:false,expandOnLoad:false,valueField:"id",textField:"text",nodesField:"children",dataField:"",delimiter:",",multiSelect:false,data:[],url:"",allowInput:false,showTreeIcon:false,showTreeLines:true,resultAsTree:false,parentField:"pid",checkRecursive:false,showFolderCheckBox:false,showRadioButton:false,popupHeight:200,popupWidth:"100%",popupMaxHeight:250,popupMinWidth:100,set:function(d){if(typeof d=="string"){return this}var c=d.value;delete d.value;var e=d.text;delete d.text;var a=d.url;delete d.url;var b=d.data;delete d.data;mini.TreeSelect.superclass.set.call(this,d);if(!mini.isNull(b)){this.setData(b)}if(!mini.isNull(a)){this.setUrl(a)}if(!mini.isNull(c)){this.setValue(c)}if(!mini.isNull(e)){this.setText(e)}return this},uiCls:"mini-treeselect",_createPopup:function(){mini.TreeSelect.superclass._createPopup.call(this);this.tree=new mini.Tree();this.tree.setShowTreeIcon(true);this.tree.setStyle("border:0;width:100%;height:100%;overflow:hidden;");this.tree.setResultAsTree(this.resultAsTree);this.tree.render(this.popup._contentEl);this.tree.setCheckRecursive(this.checkRecursive);this.tree.setShowFolderCheckBox(this.showFolderCheckBox);this.tree.setShowRadioButton(this.showRadioButton);this.tree.setExpandOnNodeClick(this.expandOnNodeClick);this.tree.on("nodeclick",this.__OnNodeClick,this);this.tree.on("nodecheck",this.__OnCheckedChanged,this);this.tree.on("expand",this.__OnTreeExpand,this);this.tree.on("collapse",this.__OnTreeCollapse,this);this.tree.on("beforenodecheck",this.__OnTreeBeforeNodeCheck,this);this.tree.on("beforenodeselect",this.__OnTreeBeforeNodeSelect,this);this.tree.on("drawnode",this.__OnDrawNode,this);this.tree.useAnimation=false;var a=this;this.tree.on("beforeload",function(b){a.fire("beforeload",b)},this);this.tree.on("load",function(b){a.fire("load",b)},this);this.tree.on("loaderror",function(b){a.fire("loaderror",b)},this)},__OnDrawNode:function(a){this.fire("drawnode",a)},__OnTreeBeforeNodeCheck:function(a){a.tree=a.sender;this.fire("beforenodecheck",a)},__OnTreeBeforeNodeSelect:function(a){a.tree=a.sender;this.fire("beforenodeselect",a);if(a.cancel){this._nohide=true}},__OnTreeExpand:function(a){},__OnTreeCollapse:function(a){},findItems:function(a){return this.tree.findNodes(this.tree.getIdField(),a)},findNodes:function(a){return this.tree.getNodesByValue(a)},getSelectedNode:function(){return this.getSelectedNodes()[0]},getCheckedNodes:function(a){return this.tree.getNodesByValue(this.value)},getSelectedNodes:function(){return this.tree.getNodesByValue(this.value)},getParentNode:function(a){return this.tree.getParentNode(a)},getChildNodes:function(a){return this.tree.getChildNodes(a)},showPopup:function(){var a={cancel:false};this.fire("beforeshowpopup",a);this._firebeforeshowpopup=false;if(a.cancel==true){return}var b=this.popup.el.style.height;mini.TreeSelect.superclass.showPopup.call(this);this.tree.setValue(this.value);this._nohide=false},__OnPopupHide:function(a){this.__doFocusCls();this.tree.clearFilter();this.fire("hidepopup")},getItem:function(a){return typeof a=="object"?a:this.data[a]},indexOf:function(a){return this.data.indexOf(a)},getAt:function(a){return this.data[a]},loadList:function(b,a,c){this.tree.loadList(b,a,c);this.data=this.tree.getData();this._getCheckedValue()},getList:function(){return this.tree.getList()},load:function(a){this.tree.load(a);this.data=this.tree.data;this._getCheckedValue()},_eval:function(_){return eval("("+_+")")},setData:function(a){if(typeof a=="string"){a=this._eval(a)}if(!mini.isArray(a)){a=[]}this.tree.setData(a);this.data=this.tree.data;this._getCheckedValue()},getData:function(){return this.data},_getCheckedValue:function(){var a=this.tree.getValue();this.setValue(a)},setUrl:function(a){this.getPopup();this.tree.setUrl(a);this.url=this.tree.url;this.data=this.tree.data;this._getCheckedValue()},getUrl:function(){return this.url},virtualScroll:false,setVirtualScroll:function(a){if(this.tree){this.tree.setVirtualScroll(a)}this.virtualScroll=a},getVirtualScroll:function(){return this.virtualScroll},pinyinField:"tag",setPinyinField:function(a){this.pinyinField=a},getPinyinField:function(){return this.pinyinField},setTextField:function(a){if(this.tree){this.tree.setTextField(a)}this.textField=a},getTextField:function(){return this.textField},setNodesField:function(a){if(this.tree){this.tree.setNodesField(a)}this.nodesField=a},getNodesField:function(){return this.nodesField},setDataField:function(a){if(this.tree){this.tree.setDataField(a)}this.dataField=a},getDataField:function(){return this.dataField},getValue:function(){var a=mini.TreeSelect.superclass.getValue.call(this);if(this.valueFromSelect&&a&&this.findItems(a).length==0){return""}return a},setValue:function(b){var a=this.tree.getValueAndText(b);if(a[1]==""&&!this.valueFromSelect){a[0]=b;a[1]=b}this.value=b;this._valueEl.value=b;this.text=this._textEl.value=a[1];this._doEmpty()},setMultiSelect:function(a){if(this.multiSelect!=a){this.multiSelect=a;this.tree.setShowCheckBox(a);this.tree.setAllowSelect(!a);this.tree.setEnableHotTrack(!a)}},getMultiSelect:function(){return this.multiSelect},__OnNodeClick:function(f){if(this.multiSelect){return}var b=this.tree.getSelectedNode();var d=this.tree.getValueAndText(b);var a=d[0];var c=this.getValue();this.setValue(a);if(c!=this.getValue()){this._OnValueChanged()}if(this._nohide!==true){this.hidePopup();this.focus()}this._nohide=false;this.fire("nodeclick",{node:f.node})},__OnCheckedChanged:function(c){if(!this.multiSelect){return}var a=this.tree.getValue();var b=this.getValue();this.setValue(a);if(b!=this.getValue()){this._OnValueChanged()}this.focus()},__OnInputKeyDown:function(c){var a={htmlEvent:c};this.fire("keydown",a);if(c.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(c.keyCode==9){if(this.isShowPopup()){this.hidePopup()}return}if(this.isReadOnly()){return}switch(c.keyCode){case 27:if(this.isShowPopup()){c.stopPropagation()}this.hidePopup();break;case 13:var b=this;setTimeout(function(){b.fire("enter",a)},10);break;case 37:break;case 38:c.preventDefault();break;case 39:break;case 40:c.preventDefault();this.showPopup();break;default:if(this.allowInput==false){}else{var b=this;setTimeout(function(){b._doQuery()},10)}break}},_doQuery:function(){if(this.multiSelect){return}var c=this.textField,a=this.pinyinField;var b=this._textEl.value.toLowerCase();this.tree.filter(function(e){var f=String(e[c]?e[c]:"").toLowerCase();var d=String(e[a]?e[a]:"").toLowerCase();if(f.indexOf(b)!=-1||d.indexOf(b)!=-1){return true}else{return false}});this.tree.expandAll();this.showPopup()},setCheckRecursive:function(a){this.checkRecursive=a;if(this.tree){this.tree.setCheckRecursive(a)}},getCheckRecursive:function(){return this.checkRecursive},setResultAsTree:function(a){this.resultAsTree=a;if(this.tree){this.tree.setResultAsTree(a)}},getResultAsTree:function(){return this.resultAsTree},setParentField:function(a){this.parentField=a;if(this.tree){this.tree.setParentField(a)}},getParentField:function(){return this.parentField},setValueField:function(a){if(this.tree){this.tree.setIdField(a)}this.valueField=a},getValueField:function(){return this.valueField},setShowTreeIcon:function(a){this.showTreeIcon=a;if(this.tree){this.tree.setShowTreeIcon(a)}},getShowTreeIcon:function(){return this.showTreeIcon},setShowTreeLines:function(a){this.showTreeLines=a;if(this.tree){this.tree.setShowTreeLines(a)}},getShowTreeLines:function(){return this.showTreeLines},setShowFolderCheckBox:function(a){this.showFolderCheckBox=a;if(this.tree){this.tree.setShowFolderCheckBox(a)}},getShowFolderCheckBox:function(){return this.showFolderCheckBox},setShowRadioButton:function(a){this.showRadioButton=a;if(this.tree){this.tree.setShowRadioButton(a)}},getShowRadioButton:function(){return this.showRadioButton},setAutoCheckParent:function(a){this.autoCheckParent=a;if(this.tree){this.tree.setAutoCheckParent(a)}},getAutoCheckParent:function(){return this.autoCheckParent},setExpandOnLoad:function(a){this.expandOnLoad=a;if(this.tree){this.tree.setExpandOnLoad(a)}},getExpandOnLoad:function(){return this.expandOnLoad},setValueFromSelect:function(a){this.valueFromSelect=a},getValueFromSelect:function(){return this.valueFromSelect},setAjaxData:function(a){this.ajaxData=a;this.tree.setAjaxData(a)},setAjaxType:function(a){this.ajaxType=a;this.tree.setAjaxType(a)},expandOnNodeClick:false,setExpandOnNodeClick:function(a){this.expandOnNodeClick=a;if(this.tree){this.tree.setExpandOnNodeClick(a)}},getExpandOnNodeClick:function(){return this.expandOnNodeClick},getAttrs:function(b){var a=mini.ComboBox.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["url","data","textField","pinyinField","valueField","nodesField","parentField","onbeforenodecheck","onbeforenodeselect","expandOnLoad","onnodeclick","onbeforeload","onload","onloaderror","ondrawnode"]);mini._ParseBool(b,a,["expandOnNodeClick","multiSelect","resultAsTree","checkRecursive","showTreeIcon","showTreeLines","showFolderCheckBox","showRadioButton","autoCheckParent","valueFromSelect","virtualScroll"]);if(a.expandOnLoad){var c=parseInt(a.expandOnLoad);if(mini.isNumber(c)){a.expandOnLoad=c}else{a.expandOnLoad=a.expandOnLoad=="true"?true:false}}return a}});mini.regClass(mini.TreeSelect,"TreeSelect");mini.Spinner=function(){mini.Spinner.superclass.constructor.call(this);this.setValue(this.minValue)};mini.extend(mini.Spinner,mini.ButtonEdit,{value:0,minValue:0,maxValue:100,increment:1,decimalPlaces:0,changeOnMousewheel:true,allowLimitValue:true,set:function(b){if(typeof b=="string"){return this}var a=b.value;delete b.value;mini.Spinner.superclass.set.call(this,b);if(!mini.isNull(a)){this.setValue(a)}return this},uiCls:"mini-spinner",_getButtonHtml:function(){var a="onmouseover=\"mini.addClass(this, '"+this._buttonHoverCls+"');\" onmouseout=\"mini.removeClass(this, '"+this._buttonHoverCls+"');\"";return'<span class="mini-buttonedit-button" '+a+'><span class="mini-buttonedit-up"><span></span></span><span class="mini-buttonedit-down"><span></span></span></span>'},_initEvents:function(){mini.Spinner.superclass._initEvents.call(this);mini._BindEvents(function(){this.on("buttonmousedown",this.__OnButtonMouseDown,this);mini.on(this.el,"mousewheel",this.__OnMousewheel,this)},this)},_ValueLimit:function(){if(this.allowLimitValue==false){return}if(mini.isNull(this.value)&&this.allowNull){return}if(this.minValue>this.maxValue){this.maxValue=this.minValue+100}if(this.value<this.minValue){this.setValue(this.minValue)}if(this.value>this.maxValue){this.setValue(this.maxValue)}},getFormValue:function(){var b=this.value;b=parseFloat(b);if(this.allowNull&&isNaN(b)){return""}if(isNaN(b)){b=0}var f=String(b).split(".");var e=f[0],c=f[1];if(!c){c=""}if(this.decimalPlaces>0){for(var d=c.length,a=this.decimalPlaces;d<a;d++){c+="0"}c="."+c}return e+c},allowNull:false,setValue:function(a){a=parseFloat(a);if(isNaN(a)){a=this.defaultValue}a=parseFloat(a);if(isNaN(a)&&!this.allowNull){a=this.minValue}if(isNaN(a)&&this.allowNull){a=null}if(a){a=parseFloat(a.toFixed(this.decimalPlaces))}if(this.value!=a){this.value=a;this._ValueLimit();this._valueEl.value=this.value;this.text=this._textEl.value=this.getFormValue()}else{this.text=this._textEl.value=this.getFormValue()}},setMaxValue:function(a){a=parseFloat(a);if(isNaN(a)){return}a=parseFloat(a.toFixed(this.decimalPlaces));if(this.maxValue!=a){this.maxValue=a;this._ValueLimit()}},getMaxValue:function(a){return this.maxValue},setMinValue:function(a){a=parseFloat(a);if(isNaN(a)){return}a=parseFloat(a.toFixed(this.decimalPlaces));if(this.minValue!=a){this.minValue=a;this._ValueLimit()}},getMinValue:function(a){return this.minValue},setIncrement:function(a){a=parseFloat(a);if(isNaN(a)){return}if(this.increment!=a){this.increment=a}},getIncrement:function(a){return this.increment},setDecimalPlaces:function(a){a=parseInt(a);if(isNaN(a)||a<0){return}this.decimalPlaces=a},getDecimalPlaces:function(a){return this.decimalPlaces},setChangeOnMousewheel:function(a){this.changeOnMousewheel=a},getChangeOnMousewheel:function(a){return this.changeOnMousewheel},setAllowLimitValue:function(a){this.allowLimitValue=a},getAllowLimitValue:function(a){return this.allowLimitValue},setAllowNull:function(a){this.allowNull=a},getAllowNull:function(a){return this.allowNull},_SpinTimer:null,_StartSpin:function(a,f,e){this._StopSpin();this.setValue(this.value+a);var d=this;var c=e;var b=new Date();this._SpinTimer=setInterval(function(){d.setValue(d.value+a);d._OnValueChanged();e--;if(e==0&&f>50){d._StartSpin(a,f-100,c+3)}var g=new Date();if(g-b>500){d._StopSpin()}b=g},f);mini.on(document,"mouseup",this._OnDocumentMouseUp,this)},_StopSpin:function(){clearInterval(this._SpinTimer);this._SpinTimer=null},__OnButtonMouseDown:function(a){this._DownValue=this.getValue();this.__OnInputTextChanged();if(a.spinType=="up"){this._StartSpin(this.increment,230,2)}else{this._StartSpin(-this.increment,230,2)}},__OnInputKeyDown:function(b){mini.Spinner.superclass.__OnInputKeyDown.call(this,b);var a=mini.Keyboard;switch(b.keyCode){case a.Top:this.setValue(this.value+this.increment);this._OnValueChanged();break;case a.Bottom:this.setValue(this.value-this.increment);this._OnValueChanged();break}},__OnMousewheel:function(c){if(this.isReadOnly()){return}if(this.changeOnMousewheel==false){return}var b=c.wheelDelta||c.originalEvent.wheelDelta;if(mini.isNull(b)){b=-c.detail*24}var a=this.increment;if(b<0){a=-a}this.setValue(this.value+a);this._OnValueChanged();return false},_OnDocumentMouseUp:function(a){this._StopSpin();mini.un(document,"mouseup",this._OnDocumentMouseUp,this);if(this._DownValue!=this.getValue()){this._OnValueChanged()}},__OnInputTextChanged:function(c){var a=this.getValue();var b=parseFloat(this._textEl.value);this.setValue(b);if(a!=this.getValue()){this._OnValueChanged()}},getAttrs:function(b){var a=mini.Spinner.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["minValue","maxValue","increment","decimalPlaces"]);mini._ParseBool(b,a,["allowLimitValue","allowNull","changeOnMousewheel"]);return a}});mini.regClass(mini.Spinner,"spinner");mini.TimeSpinner=function(){mini.TimeSpinner.superclass.constructor.call(this);this.setValue("00:00:00")};mini.extend(mini.TimeSpinner,mini.ButtonEdit,{value:null,format:"H:mm:ss",uiCls:"mini-timespinner",_getButtonHtml:function(){var a="onmouseover=\"mini.addClass(this, '"+this._buttonHoverCls+"');\" onmouseout=\"mini.removeClass(this, '"+this._buttonHoverCls+"');\"";return'<span class="mini-buttonedit-button" '+a+'><span class="mini-buttonedit-up"><span></span></span><span class="mini-buttonedit-down"><span></span></span></span>'},_initEvents:function(){mini.TimeSpinner.superclass._initEvents.call(this);mini._BindEvents(function(){this.on("buttonmousedown",this.__OnButtonMouseDown,this);mini.on(this.el,"mousewheel",this.__OnMousewheel,this);mini.on(this._textEl,"keydown",this.__OnKeyDown,this)},this)},setFormat:function(b){if(typeof b!="string"){return}var a=["H:mm:ss","HH:mm:ss","H:mm","HH:mm","H","HH","mm:ss"];if(this.format!=b){this.format=b;this.text=this._textEl.value=this.getFormattedValue()}},getFormat:function(){return this.format},setValue:function(a){a=mini.parseTime(a,this.format);if(!a){a=null}if(mini.isDate(a)){a=new Date(a.getTime())}this.value=a;this.text=this._textEl.value=this.getFormattedValue();this._valueEl.value=this.getFormValue()},getValue:function(){return this.value==null?null:new Date(this.value.getTime())},getFormValue:function(){if(!this.value){return""}return mini.formatDate(this.value,this.format)},getFormattedValue:function(){if(!this.value){return""}return mini.formatDate(this.value,this.format)},_ChangeValue:function(a,e){var d=this.getValue();if(d){switch(e){case"hours":var b=d.getHours()+a;if(b>23){b=23}if(b<0){b=0}d.setHours(b);break;case"minutes":var c=d.getMinutes()+a;if(c>59){c=59}if(c<0){c=0}d.setMinutes(c);break;case"seconds":var f=d.getSeconds()+a;if(f>59){f=59}if(f<0){f=0}d.setSeconds(f);break}}else{d="00:00:00"}this.setValue(d)},_SpinTimer:null,_StartSpin:function(a,f,e){this._StopSpin();this._ChangeValue(a,this._timeType);var d=this;var c=e;var b=new Date();this._SpinTimer=setInterval(function(){d._ChangeValue(a,d._timeType);e--;if(e==0&&f>50){d._StartSpin(a,f-100,c+3)}var g=new Date();if(g-b>500){d._StopSpin()}b=g},f);mini.on(document,"mouseup",this._OnDocumentMouseUp,this)},_StopSpin:function(){clearInterval(this._SpinTimer);this._SpinTimer=null},__OnButtonMouseDown:function(a){this._DownValue=this.getFormValue();this._timeType="hours";if(a.spinType=="up"){this._StartSpin(1,230,2)}else{this._StartSpin(-1,230,2)}},_OnDocumentMouseUp:function(a){this._StopSpin();mini.un(document,"mouseup",this._OnDocumentMouseUp,this);if(this._DownValue!=this.getFormValue()){this._OnValueChanged()}},__OnInputTextChanged:function(b){var a=this.getFormValue();this.setValue(this._textEl.value);if(a!=this.getFormValue()){this._OnValueChanged()}},getAttrs:function(b){var a=mini.TimeSpinner.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["format"]);return a}});mini.regClass(mini.TimeSpinner,"timespinner");mini.HtmlFile=function(){mini.HtmlFile.superclass.constructor.call(this);this.on("validation",this.__OnValidation,this)};mini.extend(mini.HtmlFile,mini.ButtonEdit,{buttonText:"���...",_buttonWidth:56,limitType:"",limitTypeErrorText:"�ϴ��ļ���ʽΪ��",allowInput:false,readOnly:true,_cellSpacing:0,uiCls:"mini-htmlfile",_create:function(){mini.HtmlFile.superclass._create.call(this);this._fileEl=mini.append(this.el,'<input type="file" hideFocus class="mini-htmlfile-file" name="'+this.name+'" ContentEditable=false/>');mini.on(this._borderEl,"mousemove",this.__OnMouseMove,this);mini.on(this._fileEl,"change",this.__OnFileChange,this)},_getButtonHtml:function(){var a="onmouseover=\"mini.addClass(this, '"+this._buttonHoverCls+"');\" onmouseout=\"mini.removeClass(this, '"+this._buttonHoverCls+"');\"";return'<span class="mini-buttonedit-button" '+a+">"+this.buttonText+"</span>"},__OnFileChange:function(a){this.value=this._textEl.value=this._fileEl.value;this._OnValueChanged();a={htmlEvent:a};this.fire("fileselect",a)},__OnMouseMove:function(c){var a=c.pageX,d=c.pageY;var b=mini.getBox(this.el);a=(a-b.x-5);d=(d-b.y-5);if(this.enabled==false){a=-20;d=-20}this._fileEl.style.display="";this._fileEl.style.left=a+"px";this._fileEl.style.top=d+"px"},__OnValidation:function(c){if(!this.limitType){return}if(c.isValid==false){return}if(this.required==false&&c.value==""){return}var d=c.value.split(".");var a=("*."+d[d.length-1]).toLowerCase();var b=this.limitType.split(";");if(b.length>0&&b.indexOf(a)==-1){c.errorText=this.limitTypeErrorText+this.limitType;c.isValid=false}},setName:function(a){this.name=a;mini.setAttr(this._fileEl,"name",this.name)},getValue:function(){return this._textEl.value},setButtonText:function(b){this.buttonText=b;var a=mini.byClass("mini-buttonedit-button",this.el);if(a){a.innerHTML=b}},getButtonText:function(){return this.buttonText},setLimitType:function(a){this.limitType=a},getLimitType:function(){return this.limitType},getAttrs:function(b){var a=mini.HtmlFile.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["limitType","buttonText","limitTypeErrorText","onfileselect"]);return a}});mini.regClass(mini.HtmlFile,"htmlfile");mini.FileUpload=function(a){this.postParam={};mini.FileUpload.superclass.constructor.call(this,a);this.on("validation",this.__OnValidation,this)};mini.extend(mini.FileUpload,mini.ButtonEdit,{buttonText:"���...",_buttonWidth:56,limitTypeErrorText:"�ϴ��ļ���ʽΪ��",readOnly:true,_cellSpacing:0,limitSize:"",limitType:"",typesDescription:"�ϴ��ļ���ʽ",uploadLimit:0,queueLimit:"",flashUrl:"",uploadUrl:"",showUploadProgress:true,postParam:null,uploadOnSelect:false,uiCls:"mini-fileupload",_create:function(){mini.FileUpload.superclass._create.call(this);mini.addClass(this.el,"mini-htmlfile");this._progressbarEl=mini.append(this._borderEl,'<div id="'+this._id+'$progressbar"  class="mini-fileupload-progressbar"><div id="'+this._id+'$complete" class="mini-fileupload-complete"></div></div>');this._completeEl=this._progressbarEl.firstChild;this._uploadId=this._id+"$button_placeholder";this._fileEl=mini.append(this.el,'<span id="'+this._uploadId+'"></span>');this.uploadEl=this._fileEl;mini.on(this._borderEl,"mousemove",this.__OnMouseMove,this)},_getButtonHtml:function(){var a="onmouseover=\"mini.addClass(this, '"+this._buttonHoverCls+"');\" onmouseout=\"mini.removeClass(this, '"+this._buttonHoverCls+"');\"";return'<span class="mini-buttonedit-button" '+a+">"+this.buttonText+"</span>"},destroy:function(a){if(this._innerEl){mini.clearEvent(this._innerEl);this._innerEl=null}if(this.swfUpload){this.swfUpload.destroy();this.swfUpload=null}mini.FileUpload.superclass.destroy.call(this,a)},__OnMouseMove:function(a){if(this.enabled==false){return}var d=this;if(!this.swfUpload){var b=new SWFUpload({file_post_name:this.name,upload_url:d.uploadUrl,flash_url:d.flashUrl,file_size_limit:d.limitSize,file_types:d.limitType,file_types_description:d.typesDescription,file_upload_limit:parseInt(d.uploadLimit),file_queue_limit:d.queueLimit,file_queued_handler:mini.createDelegate(this.__on_file_queued,this),upload_error_handler:mini.createDelegate(this.__on_upload_error,this),upload_success_handler:mini.createDelegate(this.__on_upload_success,this),upload_complete_handler:mini.createDelegate(this.__on_upload_complete,this),upload_progress_handler:mini.createDelegate(this.__on_upload_progress,this),button_placeholder_id:this._uploadId,button_width:1000,button_height:50,button_window_mode:"transparent",button_action:SWFUpload.BUTTON_ACTION.SELECT_FILE,debug:false});b.flashReady();this.swfUpload=b;var c=this.swfUpload.movieElement;c.style.zIndex=1000;c.style.position="absolute";c.style.left="0px";c.style.top="0px";c.style.width="100%";c.style.height="50px"}else{}},addPostParam:function(a){mini.copyTo(this.postParam,a)},setPostParam:function(a){this.addPostParam(a)},getPostParam:function(){return this.postParam},setLimitType:function(a){this.limitType=a;if(this.swfUpload){this.swfUpload.setFileTypes(this.limitType,this.typesDescription)}},getLimitType:function(){return this.limitType},setTypesDescription:function(a){this.typesDescription=a;if(this.swfUpload){this.swfUpload.setFileTypes(this.limitType,this.typesDescription)}},getTypesDescription:function(){return this.typesDescription},setButtonText:function(a){this.buttonText=a;this._buttonEl.innerHTML=a},getButtonText:function(){return this.buttonText},setUploadLimit:function(a){this.uploadLimit=a},setQueueLimit:function(a){this.queueLimit=a},setFlashUrl:function(a){this.flashUrl=a},setUploadUrl:function(a){if(this.swfUpload){this.swfUpload.setUploadURL(a)}this.uploadUrl=a},setName:function(a){this.name=a},startUpload:function(b){var a={cancel:false};this.fire("beforeupload",a);if(a.cancel==true){return}if(this.swfUpload){this.swfUpload.setPostParams(this.postParam);this.swfUpload.startUpload()}},setShowUploadProgress:function(a){this.showUploadProgress=a;this._progressbarEl.style.display=a?"block":"none"},getShowUploadProgress:function(){return this.showUploadProgress},__on_upload_progress:function(c,b,f){if(this.showUploadProgress){var a=mini.getWidth(this._progressbarEl);var d=a*b/f;mini.setWidth(this._completeEl,d)}this._progressbarEl.style.display=this.showUploadProgress?"block":"none";var g={file:c,complete:b,total:f};this.fire("uploadprogress",g)},__on_file_queued:function(c){var a=this.swfUpload.getStats().files_queued;if(a>1){for(var b=0;b<a-1;b++){this.swfUpload.cancelUpload()}}var d={file:c};if(this.uploadOnSelect){this.startUpload()}this.setText(c.name);this.fire("fileselect",d)},__on_upload_success:function(b,a){var c={file:b,serverData:a};this.fire("uploadsuccess",c);this._progressbarEl.style.display="none"},__on_upload_error:function(a,c,b){this._progressbarEl.style.display="none";var d={file:a,code:c,message:b};this.fire("uploaderror",d)},__on_upload_complete:function(a){this._progressbarEl.style.display="none";this.fire("uploadcomplete",a)},__fileError:function(){},getAttrs:function(b){var a=mini.FileUpload.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["limitType","limitSize","flashUrl","uploadUrl","uploadLimit","buttonText","showUploadProgress","onuploadsuccess","onuploaderror","onuploadcomplete","onfileselect","onuploadprogress"]);mini._ParseBool(b,a,["uploadOnSelect"]);return a}});mini.regClass(mini.FileUpload,"fileupload");mini.Lookup=function(){this.data=[];mini.Lookup.superclass.constructor.call(this);mini.on(this._textEl,"mouseup",this.__OnMouseUp,this);this.on("showpopup",this.__OnShowPopup,this)};mini.extend(mini.Lookup,mini.PopupEdit,{allowInput:true,valueField:"id",textField:"text",delimiter:",",multiSelect:false,data:[],grid:null,_destroyPopup:false,uiCls:"mini-lookup",destroy:function(a){if(this.grid){this.grid.un("rowclick",this.__OnGridRowClickChanged,this);this.grid.un("load",this.__OnGridLoad,this);this.grid=null}mini.Lookup.superclass.destroy.call(this,a)},setMultiSelect:function(a){this.multiSelect=a;if(this.grid){this.grid.setMultiSelect(a)}},setGrid:function(a){if(typeof a=="string"){mini.parse(a);a=mini.get(a)}this.grid=mini.getAndCreate(a);if(this.grid){this.grid.setMultiSelect(this.multiSelect);this.grid.setCheckSelectOnLoad(false);this.grid.on("rowclick",this.__OnGridRowClickChanged,this);this.grid.on("load",this.__OnGridLoad,this);this.grid.on("checkall",this.__OnGridRowClickChanged,this)}},getGrid:function(){return this.grid},setValueField:function(a){this.valueField=a},getValueField:function(){return this.valueField},setTextField:function(a){this.textField=a},getTextField:function(){return this.textField},deselectAll:function(){this.data=[];this.setValue("");this.setText("");if(this.grid){this.grid.deselectAll()}},getItemValue:function(a){return String(a[this.valueField])},getItemText:function(b){var a=b[this.textField];return mini.isNull(a)?"":String(a)},getValueAndText:function(d){if(mini.isNull(d)){d=[]}var c=[];var f=[];for(var e=0,b=d.length;e<b;e++){var a=d[e];if(a){c.push(this.getItemValue(a));f.push(this.getItemText(a))}}return[c.join(this.delimiter),f.join(this.delimiter)]},_createData:function(){this.value=mini.isNull(this.value)?"":String(this.value);this.text=mini.isNull(this.text)?"":String(this.text);var d=[];var g=this.value.split(this.delimiter);var b=this.text.split(this.delimiter);var f=g.length;if(this.value){for(var e=0,c=f;e<c;e++){var j={};var a=g[e];var h=b[e];j[this.valueField]=a?a:"";j[this.textField]=h?h:"";d.push(j)}}this.data=d},_getValueMaps:function(c){var f={};for(var b=0,a=c.length;b<a;b++){var d=c[b];var e=d[this.valueField];f[e]=d}return f},setValue:function(a){mini.Lookup.superclass.setValue.call(this,a);this._createData()},setText:function(a){mini.Lookup.superclass.setText.call(this,a);this._createData()},__OnGridRowClickChanged:function(g){var k=this._getValueMaps(this.grid.getData());var d=this._getValueMaps(this.grid.getSelecteds());var j=this._getValueMaps(this.data);if(this.multiSelect==false){j={};this.data=[]}var h={};for(var a in j){var b=j[a];if(k[a]){if(d[a]){}else{h[a]=b}}}for(var f=this.data.length-1;f>=0;f--){var b=this.data[f];var a=b[this.valueField];if(h[a]){this.data.removeAt(f)}}for(var a in d){var b=d[a];if(!j[a]){this.data.push(b)}}var c=this.getValueAndText(this.data);this.setValue(c[0]);this.setText(c[1]);this._OnValueChanged()},__OnGridLoad:function(a){this.__OnShowPopup(a)},__OnShowPopup:function(g){var c=String(this.value).split(this.delimiter);var j={};for(var f=0,b=c.length;f<b;f++){var h=c[f];j[h]=1}var m=this.grid.getData();var d=[];for(var f=0,b=m.length;f<b;f++){var k=m[f];var a=k[this.valueField];if(j[a]){d.push(k)}}this.grid.selects(d)},doUpdate:function(){mini.Lookup.superclass.doUpdate.call(this);this._textEl.readOnly=true;this.el.style.cursor="default"},__OnInputKeyDown:function(a){mini.Lookup.superclass.__OnInputKeyDown.call(this,a);switch(a.keyCode){case 46:case 8:break;case 37:break;case 39:break}},__OnMouseUp:function(d){if(this.isReadOnly()){return}var c=mini.getSelectRange(this._textEl);var f=c[0],a=c[1];var b=this._findTextIndex(f)},_findTextIndex:function(g){var c=-1;if(this.text==""){return c}var e=String(this.text).split(this.delimiter);var a=0;for(var d=0,b=e.length;d<b;d++){var f=e[d];if(a<g&&g<=a+f.length){c=d;break}a=a+f.length+1}return c},getAttrs:function(b){var a=mini.Lookup.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["grid","valueField","textField"]);mini._ParseBool(b,a,["multiSelect"]);return a}});mini.regClass(mini.Lookup,"lookup");mini.TextBoxList=function(){mini.TextBoxList.superclass.constructor.call(this);this.data=[];this.doUpdate()};mini.extend(mini.TextBoxList,mini.ValidatorBase,{formField:true,value:"",text:"",valueField:"id",textField:"text",data:"",url:"",delay:150,allowInput:true,editIndex:0,_focusCls:"mini-textboxlist-focus",_itemHoverClass:"mini-textboxlist-item-hover",_itemSelectedClass:"mini-textboxlist-item-selected",_closeHoverClass:"mini-textboxlist-close-hover",textName:"",setTextName:function(a){this.textName=a},getTextName:function(){return this.textName},uiCls:"mini-textboxlist",_create:function(){var a='<table class="mini-textboxlist" cellpadding="0" cellspacing="0"><tr ><td class="mini-textboxlist-border"><ul></ul><a href="#"></a><input type="hidden"/></td></tr></table>';var b=document.createElement("div");b.innerHTML=a;this.el=b.firstChild;var c=this.el.getElementsByTagName("td")[0];this.ulEl=c.firstChild;this._valueEl=c.lastChild;this.focusEl=c.childNodes[1]},destroy:function(a){if(this.isShowPopup){this.hidePopup()}mini.un(document,"mousedown",this.__OnDocMouseDown,this);mini.TextBoxList.superclass.destroy.call(this,a)},_initEvents:function(){mini.TextBoxList.superclass._initEvents.call(this);mini.on(this.el,"mousemove",this.__OnMouseMove,this);mini.on(this.el,"mouseout",this.__OnMouseOut,this);mini.on(this.el,"mousedown",this.__OnMouseDown,this);mini.on(this.el,"click",this.__OnClick,this);mini.on(this.el,"keydown",this.__OnKeyDown,this);mini.on(document,"mousedown",this.__OnDocMouseDown,this)},__OnDocMouseDown:function(a){if(this.isReadOnly()){return}if(this.isShowPopup){if(!mini.isAncestor(this.popup.el,a.target)){this.hidePopup()}}if(this._focused){if(this.within(a)==false){this.select(null,false);this.showInput(false);this.removeCls(this._focusCls);this._focused=false}}},errorIconEl:null,getErrorIconEl:function(){if(!this._errorIconEl){var a=this.el.rows[0];var b=a.insertCell(1);b.style.cssText="width:18px;vertical-align:top;";b.innerHTML='<div class="mini-errorIcon"></div>';this._errorIconEl=b.firstChild}return this._errorIconEl},_RemoveErrorIcon:function(){if(this._errorIconEl){jQuery(this._errorIconEl.parentNode).remove()}this._errorIconEl=null},doLayout:function(){if(this.canLayout()==false){return}mini.TextBoxList.superclass.doLayout.call(this);if(this.isReadOnly()||this.allowInput==false){this._inputEl.readOnly=true}else{this._inputEl.readOnly=false}},doUpdate:function(){if(this._ValueChangeTimer){clearInterval(this._ValueChangeTimer)}if(this._inputEl){mini.un(this._inputEl,"keydown",this.__OnInputKeyDown,this)}var g=[];var a=this.uid;for(var d=0,c=this.data.length;d<c;d++){var b=this.data[d];var j=a+"$text$"+d;var h=mini._getMap(this.textField,b);if(mini.isNull(h)){h=""}g[g.length]='<li id="'+j+'" class="mini-textboxlist-item">';g[g.length]=h;g[g.length]='<span class="mini-textboxlist-close"></span></li>'}var f=a+"$input";g[g.length]='<li id="'+f+'" class="mini-textboxlist-inputLi"><input class="mini-textboxlist-input" type="text" autocomplete="off"></li>';this.ulEl.innerHTML=g.join("");this.editIndex=this.data.length;if(this.editIndex<0){this.editIndex=0}this.inputLi=this.ulEl.lastChild;this._inputEl=this.inputLi.firstChild;mini.on(this._inputEl,"keydown",this.__OnInputKeyDown,this);var e=this;this._inputEl.onkeyup=function(){e._syncInputSize()};e._ValueChangeTimer=null;e._LastInputText=e._inputEl.value;this._inputEl.onfocus=function(){e._ValueChangeTimer=setInterval(function(){if(e._LastInputText!=e._inputEl.value){e._startQuery();e._LastInputText=e._inputEl.value}},10);e.addCls(e._focusCls);e._focused=true;e.fire("focus")};this._inputEl.onblur=function(){clearInterval(e._ValueChangeTimer);e.fire("blur")}},getItemByEvent:function(c){var b=mini.findParent(c.target,"mini-textboxlist-item");if(b){var a=b.id.split("$");var d=a[a.length-1];return this.data[d]}},getItem:function(a){if(typeof a=="number"){return this.data[a]}if(typeof a=="object"){return a}},getItemEl:function(c){var a=this.data.indexOf(c);var b=this.uid+"$text$"+a;return document.getElementById(b)},hoverItem:function(b,c){if(this.isReadOnly()||this.enabled==false){return}this.blurItem();var a=this.getItemEl(b);mini.addClass(a,this._itemHoverClass);if(c&&mini.hasClass(c.target,"mini-textboxlist-close")){mini.addClass(c.target,this._closeHoverClass)}},blurItem:function(){var b=this.data.length;for(var d=0,c=b;d<c;d++){var e=this.data[d];var a=this.getItemEl(e);if(a){mini.removeClass(a,this._itemHoverClass);mini.removeClass(a.lastChild,this._closeHoverClass)}}},showInput:function(b){this.select(null);if(mini.isNumber(b)){this.editIndex=b}else{this.editIndex=this.data.length}if(this.editIndex<0){this.editIndex=0}if(this.editIndex>this.data.length){this.editIndex=this.data.length}var a=this.inputLi;a.style.display="block";if(mini.isNumber(b)&&b<this.data.length){var d=this.data[b];var c=this.getItemEl(d);jQuery(c).before(a)}else{this.ulEl.appendChild(a)}if(b!==false){setTimeout(function(){try{a.firstChild.focus();mini.selectRange(a.firstChild,100)}catch(f){}},10)}else{this.lastInputText="";this._inputEl.value=""}return a},select:function(d){d=this.getItem(d);if(this._selected){var a=this.getItemEl(this._selected);mini.removeClass(a,this._itemSelectedClass)}this._selected=d;if(this._selected){var a=this.getItemEl(this._selected);mini.addClass(a,this._itemSelectedClass)}var c=this;if(this._selected){this.focusEl.focus();var b=this;setTimeout(function(){try{b.focusEl.focus()}catch(e){}},50)}if(this._selected){c.addCls(c._focusCls);c._focused=true}},_doInsertSelectValue:function(){var b=this._listbox.getSelected();var a=this.editIndex;if(b){b=mini.clone(b);this.insertItem(a,b)}},insertItem:function(a,b){this.data.insert(a,b);var d=this.getText();var c=this.getValue();this.setValue(c,false);this.setText(d,false);this._createData();this.doUpdate();this.showInput(a+1);this._OnValueChanged()},removeItem:function(b){if(!b){return}var a=this.getItemEl(b);mini.removeNode(a);this.data.remove(b);var d=this.getText();var c=this.getValue();this.setValue(c,false);this.setText(d,false);this._OnValueChanged()},_createData:function(){var f=(this.text?this.text:"").split(",");var c=(this.value?this.value:"").split(",");if(c[0]==""){c=[]}var a=c.length;this.data.length=a;for(var d=0,b=a;d<b;d++){var h=this.data[d];if(!h){h={};this.data[d]=h}var g=!mini.isNull(f[d])?f[d]:"";var e=!mini.isNull(c[d])?c[d]:"";mini._setMap(this.textField,g,h);mini._setMap(this.valueField,e,h)}this.value=this.getValue();this.text=this.getText()},getInputText:function(){return this._inputEl?this._inputEl.value:""},getText:function(){var e=[];for(var c=0,a=this.data.length;c<a;c++){var d=this.data[c];var b=mini._getMap(this.textField,d);if(mini.isNull(b)){b=""}b=b.replace(",","��");e.push(b)}return e.join(",")},getValue:function(){var e=[];for(var c=0,a=this.data.length;c<a;c++){var d=this.data[c];var b=mini._getMap(this.valueField,d);e.push(b)}return e.join(",")},setName:function(a){if(this.name!=a){this.name=a;this._valueEl.name=a}},setValue:function(a){if(mini.isNull(a)){a=""}if(this.value!=a){this.value=a;this._valueEl.value=a;this._createData();this.doUpdate()}},setText:function(a){if(mini.isNull(a)){a=""}if(this.text!==a){this.text=a;this._createData();this.doUpdate()}},setValueField:function(a){this.valueField=a;this._createData()},getValueField:function(){return this.valueField},setTextField:function(a){this.textField=a;this._createData()},getTextField:function(){return this.textField},setAllowInput:function(a){this.allowInput=a;this.doLayout()},getAllowInput:function(){return this.allowInput},setUrl:function(a){this.url=a},getUrl:function(){return this.url},setPopupHeight:function(a){this.popupHeight=a},getPopupHeight:function(){return this.popupHeight},setPopupMinHeight:function(a){this.popupMinHeight=a},getPopupMinHeight:function(){return this.popupMinHeight},setPopupMaxHeight:function(a){this.popupMaxHeight=a},getPopupMaxHeight:function(){return this.popupMaxHeight},doQuery:function(){this._startQuery(true)},_syncInputSize:function(){if(this.isDisplay()==false){return}var d=this.getInputText();var b=mini.measureText(this._inputEl,d);var c=b.width>20?b.width+4:20;var a=mini.getWidth(this.el,true);if(c>a-15){c=a-15}this._inputEl.style.width=c+"px"},_startQuery:function(a){var b=this;setTimeout(function(){b._syncInputSize()},1);this.showPopup("loading");this._stopQuery();this._loading=true;this.delayTimer=setTimeout(function(){var c=b._inputEl.value;b._doQuery()},this.delay)},ajaxDataType:"text",ajaxContentType:"application/x-www-form-urlencoded; charset=UTF-8",_doQuery:function(){if(this.isDisplay()==false){return}var j=this.getInputText();var d=this;var a=this._listbox.getData();var c={value:this.getValue(),text:this.getText()};c[this.searchField]=j;var b=this.url;var i=typeof b=="function"?b:window[b];if(typeof i=="function"){b=i(this)}if(!b){return}var g="post";if(b){if(b.indexOf(".txt")!=-1||b.indexOf(".json")!=-1){g="get"}}var f={url:b,async:true,params:c,data:c,type:this.ajaxType?this.ajaxType:g,cache:false,cancel:false};this.fire("beforeload",f);if(f.cancel){return}var h=this;mini.copyTo(f,{success:function(n,o,m){delete f.params;var l={text:n,result:null,sender:h,options:f,xhr:m};var e=null;try{mini_doload(l);e=l.result;if(!e){e=mini.decode(n)}}catch(k){if(mini_debugger==true){throw new Error("textboxlist json is error")}}if(mini.isArray(e)){e={data:e}}if(h.dataField){e.data=mini._getMap(h.dataField,e)}if(!e.data){e.data=[]}d._listbox.setData(e.data);d.showPopup();d._listbox._focusItem(0,true);d.fire("load",{data:e.data,result:e});d._loading=false;if(d._selectOnLoad){d.__doSelectValue();d._selectOnLoad=null}},error:function(e,l,k){d.showPopup("error")}});d._ajaxer=mini.ajax(f)},_stopQuery:function(){if(this.delayTimer){clearTimeout(this.delayTimer);this.delayTimer=null}if(this._ajaxer){this._ajaxer.abort()}this._loading=false},within:function(a){if(mini.isAncestor(this.el,a.target)){return true}if(this.showPopup&&this.popup&&this.popup.within(a)){return true}return false},popupLoadingText:"<span class='mini-textboxlist-popup-loading'>Loading...</span>",popupErrorText:"<span class='mini-textboxlist-popup-error'>Error</span>",popupEmptyText:"<span class='mini-textboxlist-popup-noresult'>No Result</span>",isShowPopup:false,popupHeight:"",popupMinHeight:30,popupMaxHeight:150,_createPopup:function(){if(!this.popup){this.popup=new mini.ListBox();this.popup.addCls("mini-textboxlist-popup");this.popup.setStyle("position:absolute;left:0;top:0;");this.popup.showEmpty=true;this.popup.setValueField(this.valueField);this.popup.setTextField(this.textField);this.popup.render(document.body);this.popup.on("itemclick",function(a){this.hidePopup();this._doInsertSelectValue()},this)}this._listbox=this.popup;return this.popup},showPopup:function(d){if(this.isDisplay()==false){return}this.isShowPopup=true;var b=this._createPopup();b.el.style.zIndex=mini.getMaxZIndex();var e=this._listbox;e.emptyText=this.popupEmptyText;if(d=="loading"){e.emptyText=this.popupLoadingText;this._listbox.setData([])}else{if(d=="error"){e.emptyText=this.popupLoadingText;this._listbox.setData([])}}this._listbox.doUpdate();var c=this.getBox();var a=c.x,f=c.y+c.height;this.popup.el.style.display="block";mini.setXY(b.el,-1000,-1000);this.popup.setWidth(c.width);this.popup.setHeight(this.popupHeight);if(this.popup.getHeight()<this.popupMinHeight){this.popup.setHeight(this.popupMinHeight)}if(this.popup.getHeight()>this.popupMaxHeight){this.popup.setHeight(this.popupMaxHeight)}mini.setXY(b.el,a,f)},hidePopup:function(){this.isShowPopup=false;if(this.popup){this.popup.el.style.display="none"}},__OnMouseMove:function(b){if(this.enabled==false){return}var a=this.getItemByEvent(b);if(!a){this.blurItem();return}this.hoverItem(a,b)},__OnMouseOut:function(a){this.blurItem()},__OnClick:function(b){if(this.isReadOnly()||this.enabled==false){return}if(this.enabled==false){return}var a=this.getItemByEvent(b);if(!a){if(mini.findParent(b.target,"mini-textboxlist-input")){}else{this.showInput()}return}this.focusEl.focus();this.select(a);if(b&&mini.hasClass(b.target,"mini-textboxlist-close")){this.removeItem(a)}},__OnKeyDown:function(d){if(this.isReadOnly()||this.allowInput==false){return false}var b=this.data.indexOf(this._selected);var c=this;function a(){var e=c.data[b];c.removeItem(e);e=c.data[b];if(!e){e=c.data[b-1]}c.select(e);if(!e){c.showInput()}}switch(d.keyCode){case 8:d.preventDefault();a();break;case 37:case 38:this.select(null);this.showInput(b);break;case 39:case 40:b+=1;this.select(null);this.showInput(b);break;case 46:a();break}},__doSelectValue:function(){var a=this._listbox.getFocusedItem();if(a){this._listbox.setSelected(a)}this.lastInputText=this.text;this.hidePopup();this._doInsertSelectValue()},__OnInputKeyDown:function(h){this._selectOnLoad=null;if(this.isReadOnly()||this.allowInput==false){return false}h.stopPropagation();if(this.isReadOnly()||this.allowInput==false){return}var f=mini.getSelectRange(this._inputEl);var a=f[0],b=f[1],i=this._inputEl.value.length;var c=a==b&&a==0;var d=a==b&&b==i;if(this.isReadOnly()||this.allowInput==false){h.preventDefault()}if(h.keyCode==9){this.hidePopup();return}if(h.keyCode==16||h.keyCode==17||h.keyCode==18){return}switch(h.keyCode){case 13:if(this.isShowPopup){h.preventDefault();if(this._loading){this._selectOnLoad=true;return}this.__doSelectValue()}break;case 27:h.preventDefault();this.hidePopup();break;case 8:if(c){h.preventDefault()}case 37:if(c){if(this.isShowPopup){this.hidePopup()}else{if(this.editIndex>0){var g=this.editIndex-1;if(g<0){g=0}if(g>=this.data.length){g=this.data.length-1}this.showInput(false);this.select(g)}}}break;case 39:if(d){if(this.isShowPopup){this.hidePopup()}else{if(this.editIndex<=this.data.length-1){var g=this.editIndex;this.showInput(false);this.select(g)}}}break;case 38:h.preventDefault();if(this.isShowPopup){var g=-1;var j=this._listbox.getFocusedItem();if(j){g=this._listbox.indexOf(j)}g--;if(g<0){g=0}this._listbox._focusItem(g,true)}break;case 40:h.preventDefault();if(this.isShowPopup){var g=-1;var j=this._listbox.getFocusedItem();if(j){g=this._listbox.indexOf(j)}g++;if(g<0){g=0}if(g>=this._listbox.getCount()){g=this._listbox.getCount()-1}this._listbox._focusItem(g,true)}else{this._startQuery(true)}break;default:break}},focus:function(){try{this._inputEl.focus()}catch(a){}},blur:function(){try{this._inputEl.blur()}catch(a){}},searchField:"key",setSearchField:function(a){this.searchField=a},getSearchField:function(){return this.searchField},getAttrs:function(b){var a=mini.TextBox.superclass.getAttrs.call(this,b);var c=jQuery(b);mini._ParseString(b,a,["value","text","valueField","textField","url","popupHeight","textName","onfocus","onbeforeload","onload","searchField"]);mini._ParseBool(b,a,["allowInput"]);mini._ParseInt(b,a,["popupMinHeight","popupMaxHeight"]);return a}});mini.regClass(mini.TextBoxList,"textboxlist");mini.AutoComplete=function(){mini.AutoComplete.superclass.constructor.call(this);var a=this;a._ValueChangeTimer=null;this._textEl.onfocus=function(){a._LastInputText=a._textEl.value;a._ValueChangeTimer=setInterval(function(){if(a._LastInputText!=a._textEl.value){a._tryQuery();a._LastInputText=a._textEl.value;if(a._textEl.value==""&&a.value!=""){a.setValue("");a._OnValueChanged()}}},10)};this._textEl.onblur=function(){clearInterval(a._ValueChangeTimer);if(!a.isShowPopup()){if(a._LastInputText!=a._textEl.value){if(a._textEl.value==""&&a.value!=""){a.setValue("");a._OnValueChanged()}}}};this._buttonEl.style.display="none";this._doInputLayout()};mini.extend(mini.AutoComplete,mini.ComboBox,{url:"",allowInput:true,delay:150,searchField:"key",minChars:0,_buttonWidth:0,uiCls:"mini-autocomplete",setUrl:function(a){this.url=a},setValue:function(a){if(mini.isNull(a)){a=""}if(this.value!=a){this.value=a;this._valueEl.value=this.value}},setText:function(a){if(mini.isNull(a)){a=""}if(this.text!=a){this.text=a;this._LastInputText=a}this._textEl.value=this.text},setMinChars:function(a){this.minChars=a},getMinChars:function(){return this.minChars},setSearchField:function(a){this.searchField=a},getSearchField:function(){return this.searchField},popupLoadingText:"<span class='mini-textboxlist-popup-loading'>Loading...</span>",popupErrorText:"<span class='mini-textboxlist-popup-error'>Error</span>",popupEmptyText:"<span class='mini-textboxlist-popup-noresult'>No Result</span>",showPopup:function(b){var a=this.getPopup();var c=this._listbox;c.showEmpty=true;c.emptyText=this.popupEmptyText;if(b=="loading"){c.emptyText=this.popupLoadingText;this._listbox.setData([])}else{if(b=="error"){c.emptyText=this.popupLoadingText;this._listbox.setData([])}}this._listbox.doUpdate();mini.AutoComplete.superclass.showPopup.call(this)},__OnInputKeyDown:function(g){var b={htmlEvent:g};this.fire("keydown",b);if(g.keyCode==8&&(this.isReadOnly()||this.allowInput==false)){return false}if(g.keyCode==9){this.hidePopup();return}if(g.keyCode==16||g.keyCode==17||g.keyCode==18){return}if(this.isReadOnly()){return}switch(g.keyCode){case 27:if(this.isShowPopup()){g.stopPropagation()}this.hidePopup();break;case 13:if(this.isShowPopup()){g.preventDefault();g.stopPropagation();var a=this._listbox.getFocusedIndex();if(a!=-1){var c=this._listbox.getAt(a);var f=this._listbox.getValueAndText([c]);var d=f[0];this.setText(f[1]);this.setValue(d);this._OnValueChanged();this.hidePopup();this.focus()}}else{this.fire("enter",b)}break;case 37:break;case 38:var a=this._listbox.getFocusedIndex();if(a==-1){a=0;if(!this.multiSelect){var c=this._listbox.findItems(this.value)[0];if(c){a=this._listbox.indexOf(c)}}}if(this.isShowPopup()){if(!this.multiSelect){a-=1;if(a<0){a=0}this._listbox._focusItem(a,true)}}break;case 39:break;case 40:var a=this._listbox.getFocusedIndex();if(this.isShowPopup()){if(!this.multiSelect){a+=1;if(a>this._listbox.getCount()-1){a=this._listbox.getCount()-1}this._listbox._focusItem(a,true)}}else{this._tryQuery(this._textEl.value)}break;default:this._tryQuery(this._textEl.value);break}},doQuery:function(){this._tryQuery()},_tryQuery:function(a){var b=this;if(this._queryTimer){clearTimeout(this._queryTimer);this._queryTimer=null}this._queryTimer=setTimeout(function(){var c=b._textEl.value;b._doQuery(c)},this.delay);this.showPopup("loading")},_doQuery:function(c){if(this._ajaxer){this._ajaxer.abort()}var b=this.url;var i="post";if(b){if(b.indexOf(".txt")!=-1||b.indexOf(".json")!=-1){i="get"}}var h={};h[this.searchField]=c;var g={url:b,async:true,params:h,data:h,type:this.ajaxType?this.ajaxType:i,cache:false,cancel:false};this.fire("beforeload",g);var d=this;function a(j,e){d._listbox.setData(j);d.showPopup();d._listbox._focusItem(0,true);d.data=j;d.fire("load",{data:j,result:e})}if(g.cancel){var f=g.result||[];a(f,f);return}mini.copyTo(g,{success:function(m,n,l){delete g.params;var k={text:m,result:null,sender:d,options:g,xhr:l};var e=null;try{mini_doload(k);e=k.result;if(!e){e=mini.decode(m)}}catch(j){if(mini_debugger==true){throw new Error("autocomplete json is error")}}if(mini.isArray(e)){e={data:e}}if(d.dataField){e.data=mini._getMap(d.dataField,e)}if(!e.data){e.data=[]}a(e.data,e)},error:function(e,k,j){d.showPopup("error")}});this._ajaxer=mini.ajax(g)},getAttrs:function(b){var a=mini.AutoComplete.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["searchField"]);return a}});mini.regClass(mini.AutoComplete,"autocomplete");mini.Form=function(a){this.el=mini.byId(a);if(!this.el){throw new Error("form element not null")}mini.Form.superclass.constructor.call(this)};mini.extend(mini.Form,mini.Component,{el:null,getFields:function(){if(!this.el){return[]}var a=mini.findControls(function(b){if(!b.el||b.formField!=true){return false}if(mini.isAncestor(this.el,b.el)){return true}return false},this);return a},getFieldsMap:function(){var a=this.getFields();var e={};for(var c=0,b=a.length;c<b;c++){var d=a[c];if(d.name){e[d.name]=d}}return e},getField:function(a){if(!this.el){return null}return mini.getbyName(a,this.el)},getData:function(c,j){if(mini.isNull(j)){j=true}var g=c?"getFormValue":"getValue";var h=this.getFields();var d={};for(var e=0,a=h.length;e<a;e++){var b=h[e];var f=b[g];if(!f){continue}if(b.name){if(j==true){mini._setMap(b.name,f.call(b),d)}else{d[b.name]=f.call(b)}}if(b.textName&&b.getText){if(j==true){mini._setMap(b.textName,b.getText(),d)}else{d[b.textName]=b.getText()}}}return d},setData:function(d,e,a){if(mini.isNull(a)){a=true}if(typeof d!="object"){d={}}var g=this.getFieldsMap();for(var c in g){var f=g[c];if(!f){continue}if(f.setValue){var b=d[c];if(a==true){b=mini._getMap(c,d)}if(b===undefined&&e===false){continue}if(b===null){b=""}f.setValue(b)}if(f.setText&&f.textName){var h=d[f.textName];if(a==true){h=mini._getMap(f.textName,d)}if(mini.isNull(h)){h=""}f.setText(h)}}},reset:function(){var b=this.getFields();for(var c=0,a=b.length;c<a;c++){var d=b[c];if(!d.setValue){continue}if(d.setText&&d._clearText!==false){var e=d.defaultText;if(mini.isNull(e)){e=""}d.setText(e)}d.setValue(d.defaultValue)}this.setIsValid(true)},clear:function(){var b=this.getFields();for(var c=0,a=b.length;c<a;c++){var d=b[c];if(!d.setValue){continue}if(d.setText&&d._clearText!==false){d.setText("")}d.setValue("")}this.setIsValid(true)},getValidateFields:function(){function c(g){return g.isDisplay(function(h){if(mini.hasClass(h,"mini-tabs-body")){return true}})}var a=[];var d=this.getFields();for(var e=0,b=d.length;e<b;e++){var f=d[e];if(!f.validate||!f.isDisplay){continue}if(c(f)){a.push(f)}}return a},validate:function(e){var c=this.getValidateFields();for(var d=0,b=c.length;d<b;d++){var f=c[d];var a=f.validate();if(a==false&&e===false){break}}return this.isValid()},isValid:function(){var b=this.getValidateFields();for(var c=0,a=b.length;c<a;c++){var d=b[c];if(d.isValid()==false){return false}}return true},setIsValid:function(e){var b=this.getFields();for(var c=0,a=b.length;c<a;c++){var d=b[c];if(!d.setIsValid){continue}d.setIsValid(e)}},getErrorTexts:function(){var a=[];var e=this.getErrors();for(var c=0,b=e.length;c<b;c++){var d=e[c];a.push(d.errorText)}return a},getErrors:function(){var e=[];var b=this.getFields();for(var c=0,a=b.length;c<a;c++){var d=b[c];if(!d.isValid){continue}if(d.isValid()==false){e.push(d)}}return e},mask:function(a){if(typeof a=="string"){a={html:a}}a=a||{};a.el=this.el;if(!a.cls){a.cls=this._maskCls}mini.mask(a)},unmask:function(){mini.unmask(this.el)},_maskCls:"mini-mask-loading",loadingMsg:"���ݼ����У����Ժ�...",loading:function(a){this.mask(a||this.loadingMsg)},__OnValueChanged:function(a){this._changed=true},_changed:false,setChanged:function(d){this._changed=d;var b=this.getFields();for(var c=0,a=b.length;c<a;c++){var e=b[c];e.on("valuechanged",this.__OnValueChanged,this)}},isChanged:function(){return this._changed},setEnabled:function(d){var b=this.getFields();for(var c=0,a=b.length;c<a;c++){var e=b[c];e.setEnabled(d)}}});mini.Fit=function(){mini.Fit.superclass.constructor.call(this)};mini.extend(mini.Fit,mini.Container,{style:"",_clearBorder:false,uiCls:"mini-fit",_create:function(){this.el=document.createElement("div");this.el.className="mini-fit";this._bodyEl=this.el},_initEvents:function(){},isFixedSize:function(){return false},doLayout:function(){if(!this.canLayout()){return}var k=this.el.parentNode;var p=mini.getChildNodes(k);if(k==document.body){this.el.style.height="0px"}var q=mini.getHeight(k,true);for(var g=0,c=p.length;g<c;g++){var b=p[g];var a=b.tagName?b.tagName.toLowerCase():"";if(b==this.el||(a=="style"||a=="script")){continue}var n=mini.getStyle(b,"position");if(n=="absolute"||n=="fixed"){continue}var j=mini.getHeight(b);var f=mini.getMargins(b);q=q-j-f.top-f.bottom}var d=mini.getBorders(this.el);var o=mini.getPaddings(this.el);var f=mini.getMargins(this.el);q=q-f.top-f.bottom;if(jQuery.boxModel){q=q-o.top-o.bottom-d.top-d.bottom}if(q<0){q=0}this.el.style.height=q+"px";try{p=mini.getChildNodes(this.el);for(var g=0,c=p.length;g<c;g++){var b=p[g];mini.layout(b)}}catch(m){}},set_bodyParent:function(b){if(!b){return}var a=this._bodyEl;var d=b;while(d.firstChild){try{a.appendChild(d.firstChild)}catch(c){}}this.doLayout()},getAttrs:function(b){var a=mini.Fit.superclass.getAttrs.call(this,b);a._bodyParent=b;return a}});mini.regClass(mini.Fit,"fit");mini.Panel=function(){this._initButtons();mini.Panel.superclass.constructor.call(this);if(this.url){this.setUrl(this.url)}this._contentEl=this._bodyEl;this._doVisibleEls();this._Resizer=new mini._Resizer(this);this._doTools()};mini.extend(mini.Panel,mini.Container,{width:250,title:"",iconCls:"",iconStyle:"",allowResize:false,url:"",refreshOnExpand:false,maskOnLoad:true,collapseOnTitleClick:false,showCollapseButton:false,showCloseButton:false,closeAction:"display",showHeader:true,showToolbar:false,showFooter:false,headerCls:"",headerStyle:"",bodyCls:"",bodyStyle:"",footerCls:"",footerStyle:"",toolbarCls:"",toolbarStyle:"",minWidth:180,minHeight:100,maxWidth:5000,maxHeight:3000,set:function(e){if(typeof e=="string"){return this}var b=this._allowLayout;this._allowLayout=false;var d=e.toolbar;delete e.toolbar;var f=e.footer;delete e.footer;var a=e.url;delete e.url;var c=e.buttons;delete e.buttons;mini.Panel.superclass.set.call(this,e);if(c){this.setButtons(c)}if(d){this.setToolbar(d)}if(f){this.setFooter(f)}if(a){this.setUrl(a)}this._allowLayout=b;this.doLayout();return this},uiCls:"mini-panel",_create:function(){this.el=document.createElement("div");this.el.className="mini-panel";this.el.tabIndex=0;var b='<div class="mini-panel-border"><div class="mini-panel-header" ><div class="mini-panel-header-inner" ><span class="mini-panel-icon"></span><div class="mini-panel-title" ></div><div class="mini-tools" ></div></div></div><div class="mini-panel-viewport"><div class="mini-panel-toolbar"></div><div class="mini-panel-body" ></div><div class="mini-panel-footer"></div><div class="mini-resizer-trigger"></div></div></div>';this.el.innerHTML=b;this._borderEl=this.el.firstChild;this._headerEl=this._borderEl.firstChild;this._viewportEl=this._borderEl.lastChild;this._toolbarEl=mini.byClass("mini-panel-toolbar",this.el);this._bodyEl=mini.byClass("mini-panel-body",this.el);this._footerEl=mini.byClass("mini-panel-footer",this.el);this._resizeGridEl=mini.byClass("mini-resizer-trigger",this.el);var a=mini.byClass("mini-panel-header-inner",this.el);this._iconEl=mini.byClass("mini-panel-icon",this.el);this._titleEl=mini.byClass("mini-panel-title",this.el);this._toolsEl=mini.byClass("mini-tools",this.el);mini.setStyle(this._bodyEl,this.bodyStyle);this._doTitle()},destroy:function(a){this._doRemoveIFrame();this._iframeEl=null;this._viewportEl=this._borderEl=this._bodyEl=this._footerEl=this._toolbarEl=null;this._toolsEl=this._titleEl=this._iconEl=this._resizeGridEl=null;mini.Panel.superclass.destroy.call(this,a)},_initEvents:function(){mini._BindEvents(function(){mini.on(this.el,"click",this.__OnClick,this)},this)},_doVisibleEls:function(){this._headerEl.style.display=this.showHeader?"":"none";this._toolbarEl.style.display=this.showToolbar?"":"none";this._footerEl.style.display=this.showFooter?"":"none"},_setBodyWidth:true,doLayout:function(){if(!this.canLayout()){return}this._resizeGridEl.style.display=this.allowResize?"":"none";var c=this.isAutoHeight();var e=this.isAutoWidth();var a=this.getWidth(true);var d=a;if(mini.isIE6){mini.setWidth(this._bodyEl,a)}if(!c){var f=this.getViewportHeight();mini.setHeight(this._viewportEl,f);var b=this.getBodyHeight();mini.setHeight(this._bodyEl,b)}else{this._viewportEl.style.height="auto";this._bodyEl.style.height="auto"}mini.layout(this._borderEl);this.fire("layout")},deferLayout:function(b){if(!b){b=10}if(this._layoutTimer){return}var a=this;this._layoutTimer=setTimeout(function(){a._layoutTimer=null;a.doLayout()},b)},_stopLayout:function(){clearTimeout(this._layoutTimer);this._layoutTimer=null},getViewportWidth:function(a){return this.getWidth(true)},getViewportHeight:function(c){var b=this.getHeight(true)-this.getHeaderHeight();if(c){var a=mini.getPaddings(this._viewportEl);var e=mini.getBorders(this._viewportEl);var d=mini.getMargins(this._viewportEl);if(jQuery.boxModel){b=b-a.top-a.bottom-e.top-e.bottom}b=b-d.top-d.bottom}return b},getBodyHeight:function(c){var b=this.getViewportHeight();var b=b-this.getToolbarHeight()-this.getFooterHeight();if(c){var e=mini.getPaddings(this._bodyEl);var a=mini.getBorders(this._bodyEl);var d=mini.getMargins(this._bodyEl);if(jQuery.boxModel){b=b-e.top-e.bottom-a.top-a.bottom}b=b-d.top-d.bottom}if(b<0){b=0}return b},getHeaderHeight:function(){var a=this.showHeader?jQuery(this._headerEl).outerHeight():0;return a},getToolbarHeight:function(){var a=this.showToolbar?jQuery(this._toolbarEl).outerHeight():0;return a},getFooterHeight:function(){var a=this.showFooter?jQuery(this._footerEl).outerHeight():0;return a},setHeaderStyle:function(a){this.headerStyle=a;mini.setStyle(this._headerEl,a);this.doLayout()},getHeaderStyle:function(){return this.headerStyle},setBodyStyle:function(a){this.bodyStyle=a;mini.setStyle(this._bodyEl,a);this.doLayout()},getBodyStyle:function(){return this.bodyStyle},setToolbarStyle:function(a){this.toolbarStyle=a;mini.setStyle(this._toolbarEl,a);this.doLayout()},getToolbarStyle:function(){return this.toolbarStyle},setFooterStyle:function(a){this.footerStyle=a;mini.setStyle(this._footerEl,a);this.doLayout()},getFooterStyle:function(){return this.footerStyle},setHeaderCls:function(a){jQuery(this._headerEl).removeClass(this.headerCls);jQuery(this._headerEl).addClass(a);this.headerCls=a;this.doLayout()},getHeaderCls:function(){return this.headerCls},setBodyCls:function(a){jQuery(this._bodyEl).removeClass(this.bodyCls);jQuery(this._bodyEl).addClass(a);this.bodyCls=a;this.doLayout()},getBodyCls:function(){return this.bodyCls},setToolbarCls:function(a){jQuery(this._toolbarEl).removeClass(this.toolbarCls);jQuery(this._toolbarEl).addClass(a);this.toolbarCls=a;this.doLayout()},getToolbarCls:function(){return this.toolbarCls},setFooterCls:function(a){jQuery(this._footerEl).removeClass(this.footerCls);jQuery(this._footerEl).addClass(a);this.footerCls=a;this.doLayout()},getFooterCls:function(){return this.footerCls},_doTitle:function(){this._titleEl.innerHTML=this.title;this._iconEl.style.display=(this.iconCls||this.iconStyle)?"inline":"none";this._iconEl.className="mini-panel-icon "+this.iconCls;mini.setStyle(this._iconEl,this.iconStyle)},setTitle:function(a){this.title=a;this._doTitle()},getTitle:function(){return this.title},setIconCls:function(a){this.iconCls=a;this._doTitle()},getIconCls:function(){return this.iconCls},setIconStyle:function(a){this.iconStyle=a;this._doTitle()},getIconStyle:function(){return this.iconStyle},_doTools:function(){var d="";for(var c=0,a=this.buttons.length;c<a;c++){var b=this.buttons[c];if(b.html){d+=b.html}else{d+='<span id="'+c+'" class="'+b.cls+" "+(b.enabled?"":"mini-disabled")+'" style="'+b.style+";"+(b.visible?"":"display:none;")+'"></span>'}}this._toolsEl.innerHTML=d},setShowCloseButton:function(b){this.showCloseButton=b;var a=this.getButton("close");if(!a){return}a.visible=b;this._doTools()},getShowCloseButton:function(){return this.showCloseButton},setCloseAction:function(a){this.closeAction=a},getCloseAction:function(){return this.closeAction},setShowCollapseButton:function(b){this.showCollapseButton=b;var a=this.getButton("collapse");if(!a){return}a.visible=b;this._doTools()},getShowCollapseButton:function(){return this.showCollapseButton},setShowHeader:function(a){this.showHeader=a;this._doVisibleEls();this.deferLayout()},getShowHeader:function(){return this.showHeader},setShowToolbar:function(a){this.showToolbar=a;this._doVisibleEls();this.deferLayout()},getShowToolbar:function(){return this.showToolbar},setShowFooter:function(a){this.showFooter=a;this._doVisibleEls();this.deferLayout()},getShowFooter:function(){return this.showFooter},__OnClick:function(b){if(mini.isAncestor(this._headerEl,b.target)){var c=mini.findParent(b.target,"mini-tools");if(c){var a=this.getButton(parseInt(b.target.id));if(a){this._OnButtonClick(a,b)}}else{if(this.collapseOnTitleClick){this.toggle()}}}},_OnButtonClick:function(d,a){var f={button:d,index:this.buttons.indexOf(d),name:d.name.toLowerCase(),htmlEvent:a,cancel:false};this.fire("beforebuttonclick",f);try{if(f.name=="close"&&this.closeAction=="destroy"&&this._iframeEl&&this._iframeEl.contentWindow){var b=true;if(this._iframeEl.contentWindow.CloseWindow){b=this._iframeEl.contentWindow.CloseWindow("close")}else{if(this._iframeEl.contentWindow.CloseOwnerWindow){b=this._iframeEl.contentWindow.CloseOwnerWindow("close")}}if(b===false){f.cancel=true}}}catch(c){}if(f.cancel==true){return f}this.fire("buttonclick",f);if(f.name=="close"){if(this.closeAction=="destroy"){this.__HideAction="close";this.destroy()}else{this.hide()}}if(f.name=="collapse"){this.toggle();if(this.refreshOnExpand&&this.expanded&&this.url){this.reload()}}return f},onButtonClick:function(b,a){this.on("buttonclick",b,a)},_initButtons:function(){this.buttons=[];var b=this.createButton({name:"collapse",cls:"mini-tools-collapse",visible:this.showCollapseButton});this.buttons.push(b);var a=this.createButton({name:"close",cls:"mini-tools-close",visible:this.showCloseButton});this.buttons.push(a)},createButton:function(a){var b=mini.copyTo({name:"",cls:"",style:"",visible:true,enabled:true,html:""},a);return b},setButtons:function(e){if(typeof e=="string"){e=e.split(" ")}if(!mini.isArray(e)){e=[]}var d=[];for(var c=0,a=e.length;c<a;c++){var b=e[c];if(typeof b=="string"){b=b.trim();if(!b){continue}b={name:b,cls:"mini-tools-"+b,html:""}}b=this.createButton(b);d.push(b)}this.buttons=d;this._doTools()},getButtons:function(){return this.buttons},addButton:function(b,a){if(typeof b=="string"){b={iconCls:b}}b=this.createButton(b);if(typeof a!="number"){a=this.buttons.length}this.buttons.insert(a,b);this._doTools()},updateButton:function(b,a){var c=this.getButton(b);if(!c){return}mini.copyTo(c,a);this._doTools()},removeButton:function(a){var b=this.getButton(a);if(!b){return}this.buttons.remove(b);this._doTools()},getButton:function(b){if(typeof b=="number"){return this.buttons[b]}else{for(var d=0,a=this.buttons.length;d<a;d++){var c=this.buttons[d];if(c.name==b){return c}}}},setBody:function(a){__mini_setControls(a,this._bodyEl,this)},set_bodyParent:function(a){},setToolbar:function(a){__mini_setControls(a,this._toolbarEl,this)},setFooter:function(a){__mini_setControls(a,this._footerEl,this)},getHeaderEl:function(){return this._headerEl},getToolbarEl:function(){return this._toolbarEl},getBodyEl:function(){return this._bodyEl},getFooterEl:function(){return this._footerEl},getIFrameEl:function(a){return this._iframeEl},_getMaskWrapEl:function(){return this._bodyEl},_doRemoveIFrame:function(c){if(this._iframeEl){var b=this._iframeEl;b.onload=function(){};jQuery(b).unbind("load");b.src="";try{b.contentWindow.document.write("");b.contentWindow.document.close()}catch(a){}if(b._ondestroy){b._ondestroy()}try{this._iframeEl.parentNode.removeChild(this._iframeEl);this._iframeEl.removeNode(true)}catch(a){}}this._iframeEl=null;if(c===true){mini.removeChilds(this._bodyEl)}},_deferLoadingTime:80,_doLoad:function(){if(!this.url){return}this._doRemoveIFrame(true);var a=new Date();var c=this;this.loadedUrl=this.url;if(this.maskOnLoad){this.loading()}jQuery(this._bodyEl).css("overflow","hidden");var b=mini.createIFrame(this.url,function(h,g){var d=(a-new Date())+c._deferLoadingTime;if(d<0){d=0}setTimeout(function(){c.unmask()},d);try{c._iframeEl.contentWindow.Owner=c.Owner;c._iframeEl.contentWindow.CloseOwnerWindow=function(j){c.__HideAction=j;var i=true;if(c.__onDestroy){i=c.__onDestroy(j)}if(i===false){return false}var k={iframe:c._iframeEl,action:j};c.fire("unload",k);setTimeout(function(){c.destroy()},10)}}catch(f){}if(g){if(c.__onLoad){c.__onLoad()}var f={iframe:c._iframeEl};c.fire("load",f)}});this._bodyEl.appendChild(b);this._iframeEl=b},load:function(a,c,b){this.setUrl(a,c,b)},reload:function(){this.setUrl(this.url)},setUrl:function(a,c,b){this.url=a;this.__onLoad=c;this.__onDestroy=b;if(this.expanded&&a){this._doLoad()}},getUrl:function(){return this.url},setRefreshOnExpand:function(a){this.refreshOnExpand=a},getRefreshOnExpand:function(){return this.refreshOnExpand},setMaskOnLoad:function(a){this.maskOnLoad=a},getMaskOnLoad:function(a){return this.maskOnLoad},setAllowResize:function(a){if(this.allowResize!=a){this.allowResize=a;this.doLayout()}},getAllowResize:function(){return this.allowResize},expanded:true,setExpanded:function(a){if(this.expanded!=a){this.expanded=a;if(this.expanded){this.expand()}else{this.collapse()}}},getExpanded:function(){return this.expanded},toggle:function(){if(this.expanded){this.collapse()}else{this.expand()}},collapse:function(){this.expanded=false;if(this.state!="max"){this._height=this.el.style.height}this.el.style.height="auto";this._viewportEl.style.display="none";mini.addClass(this.el,"mini-panel-collapse");this.doLayout()},expand:function(){this.expanded=true;if(this._height){this.el.style.height=this._height}this._viewportEl.style.display="block";if(this.state!="max"){delete this._height}mini.removeClass(this.el,"mini-panel-collapse");if(this.url&&this.url!=this.loadedUrl){this._doLoad()}this.doLayout()},setCollapseOnTitleClick:function(a){this.collapseOnTitleClick=a;mini.removeClass(this.el,"mini-panel-titleclick");if(a){mini.addClass(this.el,"mini-panel-titleclick")}},getCollapseOnTitleClick:function(){return this.collapseOnTitleClick},getAttrs:function(d){var a=mini.Panel.superclass.getAttrs.call(this,d);mini._ParseString(d,a,["title","iconCls","iconStyle","headerCls","headerStyle","bodyCls","bodyStyle","footerCls","footerStyle","toolbarCls","toolbarStyle","footer","toolbar","url","closeAction","loadingMsg","onbeforebuttonclick","onbuttonclick","onload","buttons"]);mini._ParseBool(d,a,["allowResize","showCloseButton","showHeader","showToolbar","showFooter","showCollapseButton","refreshOnExpand","maskOnLoad","expanded","collapseOnTitleClick"]);var c=mini.getChildNodes(d,true);for(var b=c.length-1;b>=0;b--){var e=c[b];var f=jQuery(e).attr("property");if(!f){continue}f=f.toLowerCase();if(f=="toolbar"){a.toolbar=e}else{if(f=="footer"){a.footer=e}}}a.body=c;return a}});mini.regClass(mini.Panel,"panel");mini.Window=function(){mini.Window.superclass.constructor.call(this);this.addCls("mini-window");this.setVisible(false);this.setAllowDrag(this.allowDrag);this.setAllowResize(this.allowResize)};mini.extend(mini.Window,mini.Panel,{x:0,y:0,state:"restore",_dragCls:"mini-window-drag",_resizeCls:"mini-window-resize",allowDrag:true,showCloseButton:true,showMaxButton:false,showMinButton:false,showCollapseButton:false,showModal:true,minWidth:150,minHeight:80,maxWidth:2000,maxHeight:2000,uiCls:"mini-window",_create:function(){mini.Window.superclass._create.call(this);if(mini.isIE&&mini_useShims){var a="<iframe frameborder='0' style='position: absolute; z-index: -1; width: 100%; height: 100%; top: 0;left:0;scrolling:no;'></iframe>";mini.append(this.el,a)}},_initButtons:function(){this.buttons=[];var d=this.createButton({name:"collapse",cls:"mini-tools-collapse",visible:this.showCollapseButton});this.buttons.push(d);var b=this.createButton({name:"min",cls:"mini-tools-min",visible:this.showMinButton});this.buttons.push(b);var a=this.createButton({name:"max",cls:"mini-tools-max",visible:this.showMaxButton});this.buttons.push(a);var c=this.createButton({name:"close",cls:"mini-tools-close",visible:this.showCloseButton});this.buttons.push(c)},_initEvents:function(){mini.Window.superclass._initEvents.call(this);mini._BindEvents(function(){mini.on(this.el,"mouseover",this.__OnMouseOver,this);mini.on(window,"resize",this.__OnWindowResize,this);mini.on(this.el,"mousedown",this.__OnWindowMouseDown,this)},this)},doLayout:function(){if(!this.canLayout()){return}if(this.state=="max"){var a=this.getParentBox();this.el.style.left="0px";this.el.style.top="0px";mini.setSize(this.el,a.width,a.height)}mini.Window.superclass.doLayout.call(this);if(this.allowDrag){mini.addClass(this.el,this._dragCls)}if(this.state=="max"){this._resizeGridEl.style.display="none";mini.removeClass(this.el,this._dragCls)}this._doModal()},_doModal:function(){if(!this.el){if(this._modalEl){mini.removeNode(this._modalEl)}return}var a=this.showModal&&this.isDisplay()&&this.visible;if(!this._modalEl&&this.showModal==false){if(this._modalEl){mini.removeNode(this._modalEl)}return}if(!this._modalEl){var c="__modal"+this._id;var b="<iframe frameborder='0' style='position: absolute; z-index: -1; width: 100%; height: 100%; top: 0;left:0;scrolling:no;'></iframe>";this._modalEl=mini.append(document.body,'<div id="'+c+'" class="mini-modal" style="display:none">'+b+"</div>")}if(a){this._modalEl.style.display="block";this._modalEl.style.zIndex=mini.getStyle(this.el,"zIndex")-1}else{this._modalEl.style.display="none"}},getParentBox:function(){var a=mini.getViewportBox();var b=this._containerEl||document.body;if(b!=document.body){a=mini.getBox(b)}return a},setShowModal:function(a){this.showModal=a},getShowModal:function(){return this.showModal},setMinWidth:function(a){if(isNaN(a)){return}this.minWidth=a},getMinWidth:function(){return this.minWidth},setMinHeight:function(a){if(isNaN(a)){return}this.minHeight=a},getMinHeight:function(){return this.minHeight},setMaxWidth:function(a){if(isNaN(a)){return}this.maxWidth=a},getMaxWidth:function(){return this.maxWidth},setMaxHeight:function(a){if(isNaN(a)){return}this.maxHeight=a},getMaxHeight:function(){return this.maxHeight},setAllowDrag:function(a){this.allowDrag=a;mini.removeClass(this.el,this._dragCls);if(a){mini.addClass(this.el,this._dragCls)}},getAllowDrag:function(){return this.allowDrag},setShowMaxButton:function(b){this.showMaxButton=b;var a=this.getButton("max");if(!a){return}a.visible=b;this._doTools()},getShowMaxButton:function(){return this.showMaxButton},setShowMinButton:function(b){this.showMinButton=b;var a=this.getButton("min");if(!a){return}a.visible=b;this._doTools()},getShowMinButton:function(){return this.showMinButton},max:function(){this.state="max";this.show();var a=this.getButton("max");if(a){a.cls="mini-tools-restore";this._doTools()}},restore:function(){this.state="restore";this.show(this.x,this.y);var a=this.getButton("max");if(a){a.cls="mini-tools-max";this._doTools()}},showInBody:true,setShowInBody:function(a){this.showInBody=a},getShowInBody:function(){return this.showInBody},containerEl:null,showAtPos:function(a,c,b){this.show(a,c,b)},show:function(a,g,b){this._allowLayout=false;var d=this._containerEl||document.body;if(!this.isRender()||(this.el.parentNode!=d&&this.showInBody)){this.render(d)}this.el.style.zIndex=mini.getMaxZIndex();this._doShow(a,g);this._allowLayout=true;this.setVisible(true);if(this.state!="max"){var c=this.getBox();this.x=c.x;this.y=c.y}try{this.el.focus()}catch(f){}},hide:function(){this.setVisible(false);this._doModal()},getWidth:function(){this._headerEl.style.width="50px";var a=mini.getWidth(this.el);this._headerEl.style.width="auto";return a},getBox:function(){this._headerEl.style.width="50px";this.el.style.display="";var a=mini.getWidth(this.el);this._headerEl.style.width="auto";var b=mini.getBox(this.el);b.width=a;b.right=b.x+a;return b},_measureSize:function(){this.el.style.display="";var a=this.getBox();if(a.width>this.maxWidth){mini.setWidth(this.el,this.maxWidth);a=this.getBox()}if(a.height>this.maxHeight){mini.setHeight(this.el,this.maxHeight);a=this.getBox()}if(a.width<this.minWidth){mini.setWidth(this.el,this.minWidth);a=this.getBox()}if(a.height<this.minHeight){mini.setHeight(this.el,this.minHeight);a=this.getBox()}},_doShow:function(a,d){var b=this.getParentBox();if(this.state=="max"){if(!this._width){var c=this.getBox();this._width=c.width;if(this.expanded){this._height=c.height}this.x=c.x;this.y=c.y}}else{if(mini.isNull(a)){a="center"}if(mini.isNull(d)){d="middle"}this.el.style.position="absolute";this.el.style.left="-2000px";this.el.style.top="-2000px";this.el.style.display="";if(this._width){this.setWidth(this._width);this.setHeight(this._height);delete this._width;delete this._height}else{}this._measureSize();var c=this.getBox();if(a=="left"){a=0}if(a=="center"){a=b.width/2-c.width/2}if(a=="right"){a=b.width-c.width}if(d=="top"){d=0}if(d=="middle"){d=b.y+b.height/2-c.height/2}if(d=="bottom"){d=b.height-c.height}if(a+c.width>b.right){a=b.right-c.width}if(d+c.height>b.bottom){d=b.bottom-c.height}if(a<0){a=0}if(d<0){d=0}this.el.style.display="";mini.setX(this.el,a);mini.setY(this.el,d)}this.doLayout()},_OnButtonClick:function(b,a){var c=mini.Window.superclass._OnButtonClick.call(this,b,a);if(c.cancel==true){return c}if(c.name=="max"){if(this.state=="max"){this.restore()}else{this.max()}}return c},__OnWindowResize:function(a){if(this.state=="max"){this.doLayout()}if(!mini.isIE6){this._doModal()}},enableDragProxy:true,setEnableDragProxy:function(a){this.enableDragProxy=a},getEnableDragProxy:function(a){return this.enableDragProxy},__OnWindowMouseDown:function(f){var d=this;if(f.button!=mini.MouseButton.Left){return}if(this.state!="max"&&this.allowDrag&&mini.isAncestor(this._headerEl,f.target)&&!mini.findParent(f.target,"mini-tools")){var d=this;if(this.el){this.el.style.zIndex=mini.getMaxZIndex()}var c=this.getBox();var b=new mini.Drag({capture:false,onStart:function(){d._maskProxy=mini.append(document.body,'<div class="mini-resizer-mask" style=""></div>');if(d.enableDragProxy){d._dragProxy=mini.append(document.body,'<div class="mini-drag-proxy"></div>');d.el.style.display="none"}else{d._dragProxy=d.el}},onMove:function(k){var e=k.now[0]-k.init[0],l=k.now[1]-k.init[1];e=c.x+e;l=c.y+l;var j=d.getParentBox();var i=e+c.width;var g=l+c.height;if(i>j.width){e=j.width-c.width}if(e<0){e=0}if(l<0){l=0}d.x=e;d.y=l;var h={x:e,y:l,width:c.width,height:c.height};mini.setBox(d._dragProxy,h);this.moved=true},onStop:function(){if(d.el){d.el.style.display="block";if(this.moved){var e=mini.getBox(d._dragProxy);mini.setBox(d.el,e)}}jQuery(d._maskProxy).remove();d._maskProxy=null;if(d.enableDragProxy){jQuery(d._dragProxy).remove()}d._dragProxy=null}});b.start(f);var a=mini.append(document.body,'<div class="mini-resizer-mask"></div>');setTimeout(function(){mini.removeNode(a)},300)}},destroy:function(a){mini.un(window,"resize",this.__OnWindowResize,this);if(this._modalEl){jQuery(this._modalEl).remove();this._modalEl=null}if(this.shadowEl){jQuery(this.shadowEl).remove();this.shadowEl=null}var b="__modal"+this._id;jQuery("[id='"+b+"']").remove();mini.Window.superclass.destroy.call(this,a)},getAttrs:function(b){var a=mini.Window.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["modalStyle"]);mini._ParseBool(b,a,["showModal","showShadow","allowDrag","allowResize","showMaxButton","showMinButton","showInBody","enableDragProxy"]);mini._ParseInt(b,a,["minWidth","minHeight","maxWidth","maxHeight"]);return a},showAtEl:function(b,q){b=mini.byId(b);if(!b){return}if(!this.isRender()||this.el.parentNode!=document.body){this.render(document.body)}var i={xAlign:this.xAlign,yAlign:this.yAlign,xOffset:0,yOffset:0,popupCls:this.popupCls};mini.copyTo(i,q);this._popupEl=b;this.el.style.position="absolute";this.el.style.left="-2000px";this.el.style.top="-2000px";this.el.style.display="";this.doLayout();this._measureSize();var j=mini.getViewportBox();var f=this.getBox();var e=mini.getBox(b);var p=i.xy;var g=i.xAlign,o=i.yAlign;var m=j.width/2-f.width/2,l=0;if(p){m=p[0];l=p[1]}switch(i.xAlign){case"outleft":m=e.x-f.width;break;case"left":m=e.x;break;case"center":m=e.x+e.width/2-f.width/2;break;case"right":m=e.right-f.width;break;case"outright":m=e.right;break;default:break}switch(i.yAlign){case"above":l=e.y-f.height;break;case"top":l=e.y;break;case"middle":l=e.y+e.height/2-f.height/2;break;case"bottom":l=e.bottom-f.height;break;case"below":l=e.bottom;break;default:break}m=parseInt(m);l=parseInt(l);if(i.outYAlign||i.outXAlign){if(i.outYAlign=="above"){if(l+f.height>j.bottom){var k=e.y-j.y;var a=j.bottom-e.bottom;if(k>a){l=e.y-f.height}}}if(i.outXAlign=="outleft"){if(m+f.width>j.right){var d=e.x-j.x;var n=j.right-e.right;if(d>n){m=e.x-f.width}}}if(i.outXAlign=="right"){if(m+f.width>j.right){m=e.right-f.width}}this._Show(m,l)}else{this.showAtPos(m+i.xOffset,l+i.yOffset)}}});mini.regClass(mini.Window,"window");mini.MessageBox={alertTitle:"����",confirmTitle:"ȷ��",prompTitle:"����",prompMessage:"���������ݣ�",buttonText:{ok:"ȷ��",cancel:"ȡ��",yes:"��",no:"��"},show:function(e){e=mini.copyTo({width:"auto",height:"auto",showModal:true,timeout:0,minWidth:150,maxWidth:800,minHeight:50,maxHeight:350,showHeader:true,title:"",titleIcon:"",iconCls:"",iconStyle:"",message:"",html:"",spaceStyle:"margin-right:15px",showCloseButton:true,buttons:null,buttonWidth:58,callback:null},e);e.message=String(e.message);var f=e.callback;var m=new mini.Window();m.setBodyStyle("overflow:hidden");m.setShowModal(e.showModal);m.setTitle(e.title||"");m.setIconCls(e.titleIcon);m.setShowHeader(e.showHeader);m.setShowCloseButton(e.showCloseButton);var d=m.uid+"$table",b=m.uid+"$content";var v='<div class="'+e.iconCls+'" style="'+e.iconStyle+'"></div>';var o='<table class="mini-messagebox-table" id="'+d+'" style="" cellspacing="0" cellpadding="0"><tr><td>'+v+'</td><td id="'+b+'" class="mini-messagebox-content-text">'+(e.message||"")+"</td></tr></table>";var c='<div class="mini-messagebox-content"></div><div class="mini-messagebox-buttons"></div>';m._bodyEl.innerHTML=c;var g=m._bodyEl.firstChild;if(e.html){if(typeof e.html=="string"){g.innerHTML=e.html}else{if(mini.isElement(e.html)){g.appendChild(e.html)}}}else{g.innerHTML=o}m._Buttons=[];var w=m._bodyEl.lastChild;if(e.buttons&&e.buttons.length>0){for(var t=0,r=e.buttons.length;t<r;t++){var a=e.buttons[t];var n=mini.MessageBox.buttonText[a];if(!n){n=a}var j=new mini.Button();j.setText(n);j.setWidth(e.buttonWidth);j.render(w);j.action=a;j.on("click",function(l){var i=l.sender;if(f){if(f(i.action)===false){return}}mini.MessageBox.hide(m)});if(t!=r-1){j.setStyle(e.spaceStyle)}m._Buttons.push(j)}}else{w.style.display="none"}m.setMinWidth(e.minWidth);m.setMinHeight(e.minHeight);m.setMaxWidth(e.maxWidth);m.setMaxHeight(e.maxHeight);m.setWidth(e.width);m.setHeight(e.height);m.show(e.x,e.y,{animType:e.animType});var q=m.getWidth();m.setWidth(q);var p=m.getHeight();m.setHeight(p);var k=document.getElementById(d);if(k){k.style.width="100%"}var h=document.getElementById(b);if(h){h.style.width="100%"}var u=m._Buttons[0];if(u){u.focus()}else{m.focus()}m.on("beforebuttonclick",function(i){if(f){f("close")}i.cancel=true;mini.MessageBox.hide(m)});mini.on(m.el,"keydown",function(i){});if(e.timeout){setTimeout(function(){mini.MessageBox.hide(m.uid)},e.timeout)}return m.uid},hide:function(e){if(!e){return}var d=typeof e=="object"?e:mini.getbyUID(e);if(!d){return}for(var c=0,a=d._Buttons.length;c<a;c++){var b=d._Buttons[c];b.destroy()}d._Buttons=null;d.destroy()},alert:function(a,b,c){return mini.MessageBox.show({minWidth:250,title:b||mini.MessageBox.alertTitle,buttons:["ok"],message:a,iconCls:"mini-messagebox-info",callback:c})},confirm:function(a,b,c){return mini.MessageBox.show({minWidth:250,title:b||mini.MessageBox.confirmTitle,buttons:["ok","cancel"],message:a,iconCls:"mini-messagebox-question",callback:c})},prompt:function(d,f,h,e){var g="prompt$"+new Date().getTime();var c=d||mini.MessageBox.promptMessage;if(e){c=c+'<br/><textarea id="'+g+'" style="width:200px;height:60px;margin-top:3px;"></textarea>'}else{c=c+'<br/><input id="'+g+'" type="text" style="width:200px;margin-top:3px;"/>'}var b=mini.MessageBox.show({title:f||mini.MessageBox.promptTitle,buttons:["ok","cancel"],width:250,html:'<div style="padding:5px;padding-left:10px;">'+c+"</div>",callback:function(j){var i=document.getElementById(g);if(h){return h(j,i.value)}}});var a=document.getElementById(g);a.focus();return b},loading:function(a,b){return mini.MessageBox.show({minHeight:50,title:b,showCloseButton:false,message:a,iconCls:"mini-messagebox-waiting"})},showTips:function(b){var d=jQuery;b=d.extend({content:"",state:"",x:"center",y:"top",offset:[10,10],fixed:true,timeout:2000},b);var a="mini-tips-"+b.state;var c='<div class="mini-tips '+a+'">'+b.content+"</div>";var e=d(c).appendTo(document.body);b.el=e[0];b.timeoutHandler=function(){e.slideUp();setTimeout(function(){e.remove()},2000)};mini.showAt(b);e.hide().slideDown()}};mini.alert=mini.MessageBox.alert;mini.confirm=mini.MessageBox.confirm;mini.prompt=mini.MessageBox.prompt;mini.loading=mini.MessageBox.loading;mini.showMessageBox=mini.MessageBox.show;mini.hideMessageBox=mini.MessageBox.hide;mini.showTips=mini.MessageBox.showTips;mini.Splitter=function(){this._initPanes();mini.Splitter.superclass.constructor.call(this)};mini.extend(mini.Splitter,mini.Control,{width:300,height:180,vertical:false,allowResize:true,pane1:null,pane2:null,showHandleButton:true,handlerStyle:"",handlerCls:"",handlerSize:5,uiCls:"mini-splitter",_create:function(){this.el=document.createElement("div");this.el.className="mini-splitter";this.el.innerHTML='<div class="mini-splitter-border"><div id="1" class="mini-splitter-pane mini-splitter-pane1"></div><div id="2" class="mini-splitter-pane mini-splitter-pane2"></div><div class="mini-splitter-handler"></div></div>';this._borderEl=this.el.firstChild;this._pane1El=this._borderEl.firstChild;this._pane2El=this._borderEl.childNodes[1];this._handlerEl=this._borderEl.lastChild},_initEvents:function(){mini._BindEvents(function(){mini.on(this.el,"click",this.__OnClick,this);mini.on(this.el,"mousedown",this.__OnMouseDown,this)},this)},_initPanes:function(){this.pane1={id:"",index:1,minSize:30,maxSize:3000,size:"",showCollapseButton:false,cls:"",style:"",visible:true,expanded:true};this.pane2=mini.copyTo({},this.pane1);this.pane2.index=2},doUpdate:function(){this.doLayout()},doLayout:function(){if(!this.canLayout()){return}this._handlerEl.style.cursor=this.allowResize?"":"default";mini.removeClass(this.el,"mini-splitter-vertical");if(this.vertical){mini.addClass(this.el,"mini-splitter-vertical")}mini.removeClass(this._pane1El,"mini-splitter-pane1-vertical");mini.removeClass(this._pane2El,"mini-splitter-pane2-vertical");if(this.vertical){mini.addClass(this._pane1El,"mini-splitter-pane1-vertical");mini.addClass(this._pane2El,"mini-splitter-pane2-vertical")}mini.removeClass(this._handlerEl,"mini-splitter-handler-vertical");if(this.vertical){mini.addClass(this._handlerEl,"mini-splitter-handler-vertical")}var t=this.getHeight(true);var k=this.getWidth(true);if(!jQuery.boxModel){var f=mini.getBorders(this._borderEl);t=t+f.top+f.bottom;k=k+f.left+f.right}if(k<0){k=0}if(t<0){t=0}this._borderEl.style.width=k+"px";this._borderEl.style.height=t+"px";var b=this._pane1El,a=this._pane2El;var m=jQuery(b),j=jQuery(a);b.style.display=a.style.display=this._handlerEl.style.display="";var y=this.handlerSize;this.pane1.size=String(this.pane1.size);this.pane2.size=String(this.pane2.size);var v=parseFloat(this.pane1.size),n=parseFloat(this.pane2.size);var r=isNaN(v),g=isNaN(n);var x=!isNaN(v)&&this.pane1.size.indexOf("%")!=-1;var l=!isNaN(n)&&this.pane2.size.indexOf("%")!=-1;var e=!r&&!x;var d=!g&&!l;var p=this.vertical?t-this.handlerSize:k-this.handlerSize;var u=p2Size=0;if(r||g){if(r&&g){u=parseInt(p/2);p2Size=p-u}else{if(e){u=v;p2Size=p-u}else{if(x){u=parseInt(p*v/100);p2Size=p-u}else{if(d){p2Size=n;u=p-p2Size}else{if(l){p2Size=parseInt(p*n/100);u=p-p2Size}}}}}}else{if(x&&d){p2Size=n;u=p-p2Size}else{if(e&&l){u=v;p2Size=p-u}else{var c=v+n;u=parseInt(p*v/c);p2Size=p-u}}}if(u>this.pane1.maxSize){u=this.pane1.maxSize;p2Size=p-u}if(p2Size>this.pane2.maxSize){p2Size=this.pane2.maxSize;u=p-p2Size}if(u<this.pane1.minSize){u=this.pane1.minSize;p2Size=p-u}if(p2Size<this.pane2.minSize){p2Size=this.pane2.minSize;u=p-p2Size}if(this.pane1.expanded==false){p2Size=p;u=0;b.style.display="none"}else{if(this.pane2.expanded==false){u=p;p2Size=0;a.style.display="none"}}if(this.pane1.visible==false){p2Size=p+y;u=y=0;b.style.display="none";this._handlerEl.style.display="none"}else{if(this.pane2.visible==false){u=p+y;p2Size=y=0;a.style.display="none";this._handlerEl.style.display="none"}}if(this.vertical){mini.setWidth(b,k);mini.setWidth(a,k);mini.setHeight(b,u);mini.setHeight(a,p2Size);a.style.top=(u+y)+"px";this._handlerEl.style.left="0px";this._handlerEl.style.top=u+"px";mini.setWidth(this._handlerEl,k);mini.setHeight(this._handlerEl,this.handlerSize);b.style.left="0px";a.style.left="0px"}else{mini.setWidth(b,u);mini.setWidth(a,p2Size);mini.setHeight(b,t);mini.setHeight(a,t);a.style.left=(u+y)+"px";this._handlerEl.style.top="0px";this._handlerEl.style.left=u+"px";mini.setWidth(this._handlerEl,this.handlerSize);mini.setHeight(this._handlerEl,t);b.style.top="0px";a.style.top="0px"}var o='<div class="mini-splitter-handler-buttons">';if(!this.pane1.expanded||!this.pane2.expanded){if(!this.pane1.expanded){if(this.pane1.showCollapseButton){o+='<a id="1" class="mini-splitter-pane2-button"></a>'}}else{if(this.pane2.showCollapseButton){o+='<a id="2" class="mini-splitter-pane1-button"></a>'}}}else{if(this.pane1.showCollapseButton){o+='<a id="1" class="mini-splitter-pane1-button"></a>'}if(this.allowResize){if((!this.pane1.showCollapseButton&&!this.pane2.showCollapseButton)){o+='<span class="mini-splitter-resize-button"></span>'}}if(this.pane2.showCollapseButton){o+='<a id="2" class="mini-splitter-pane2-button"></a>'}}o+="</div>";this._handlerEl.innerHTML=o;var q=this._handlerEl.firstChild;q.style.display=this.showHandleButton?"":"none";var i=mini.getBox(q);if(this.vertical){q.style.marginLeft=-i.width/2+"px"}else{q.style.marginTop=-i.height/2+"px"}if(!this.pane1.visible||!this.pane2.visible||!this.pane1.expanded||!this.pane2.expanded){mini.addClass(this._handlerEl,"mini-splitter-nodrag")}else{mini.removeClass(this._handlerEl,"mini-splitter-nodrag")}mini.layout(this._borderEl);this.fire("layout")},getPaneBox:function(a){var b=this.getPaneEl(a);if(!b){return null}return mini.getBox(b)},getPane:function(a){if(a==1){return this.pane1}else{if(a==2){return this.pane2}}return a},setPanes:function(b){if(!mini.isArray(b)){return}for(var a=0;a<2;a++){var c=b[a];this.updatePane(a+1,c)}},setPaneControls:function(a,c){var d=this.getPane(a);if(!d){return}var b=this.getPaneEl(a);__mini_setControls(c,b,this)},getPaneEl:function(a){if(a==1){return this._pane1El}return this._pane2El},updatePane:function(c,b){var h=this.getPane(c);if(!h){return}mini.copyTo(h,b);var f=this.getPaneEl(c);var e=h.body;delete h.body;if(e){if(!mini.isArray(e)){e=[e]}for(var d=0,a=e.length;d<a;d++){mini.append(f,e[d])}}if(h.bodyParent){var g=h.bodyParent;while(g.firstChild){f.appendChild(g.firstChild)}}delete h.bodyParent;f.id=h.id;mini.setStyle(f,h.style);mini.addClass(f,h["class"]);if(h.cls){mini.addClass(f,h.cls)}if(h.controls){var c=h==this.pane1?1:2;this.setPaneControls(c,h.controls);delete h.controls}this.doUpdate()},setShowHandleButton:function(a){this.showHandleButton=a;this.doUpdate()},getShowHandleButton:function(a){return this.showHandleButton},setVertical:function(a){this.vertical=a;this.doUpdate()},getVertical:function(){return this.vertical},expandPane:function(a){var c=this.getPane(a);if(!c){return}c.expanded=true;this.doUpdate();var b={pane:c,paneIndex:this.pane1==c?1:2};this.fire("expand",b)},collapsePane:function(a){var d=this.getPane(a);if(!d){return}d.expanded=false;var b=d==this.pane1?this.pane2:this.pane1;if(b.expanded==false){b.expanded=true;b.visible=true}this.doUpdate();var c={pane:d,paneIndex:this.pane1==d?1:2};this.fire("collapse",c)},togglePane:function(a){var b=this.getPane(a);if(!b){return}if(b.expanded){this.collapsePane(b)}else{this.expandPane(b)}},showPane:function(a){var b=this.getPane(a);if(!b){return}b.visible=true;this.doUpdate()},hidePane:function(a){var c=this.getPane(a);if(!c){return}c.visible=false;var b=c==this.pane1?this.pane2:this.pane1;if(b.visible==false){b.expanded=true;b.visible=true}this.doUpdate()},setAllowResize:function(a){if(this.allowResize!=a){this.allowResize=a;this.doLayout()}},getAllowResize:function(){return this.allowResize},setHandlerSize:function(a){if(this.handlerSize!=a){this.handlerSize=a;this.doLayout()}},getHandlerSize:function(){return this.handlerSize},__OnClick:function(c){var b=c.target;if(!mini.isAncestor(this._handlerEl,b)){return}var a=parseInt(b.id);var d=this.getPane(a);var c={pane:d,paneIndex:a,cancel:false};if(d.expanded){this.fire("beforecollapse",c)}else{this.fire("beforeexpand",c)}if(c.cancel==true){return}if(b.className=="mini-splitter-pane1-button"){this.togglePane(a)}else{if(b.className=="mini-splitter-pane2-button"){this.togglePane(a)}}},_OnButtonClick:function(b,a){this.fire("buttonclick",{pane:b,index:this.pane1==b?1:2,htmlEvent:a})},onButtonClick:function(b,a){this.on("buttonclick",b,a)},__OnMouseDown:function(c){var a=c.target;if(!this.allowResize){return}if(!this.pane1.visible||!this.pane2.visible||!this.pane1.expanded||!this.pane2.expanded){return}if(mini.isAncestor(this._handlerEl,a)){if(a.className=="mini-splitter-pane1-button"||a.className=="mini-splitter-pane2-button"){}else{var b=this._getDrag();b.start(c)}}},_getDrag:function(){if(!this.drag){this.drag=new mini.Drag({capture:true,onStart:mini.createDelegate(this._OnDragStart,this),onMove:mini.createDelegate(this._OnDragMove,this),onStop:mini.createDelegate(this._OnDragStop,this)})}return this.drag},_OnDragStart:function(a){this._maskProxy=mini.append(document.body,'<div class="mini-resizer-mask"></div>');this._dragProxy=mini.append(document.body,'<div class="mini-proxy"></div>');this._dragProxy.style.cursor=this.vertical?"n-resize":"w-resize";this.handlerBox=mini.getBox(this._handlerEl);this.elBox=mini.getBox(this._borderEl,true);mini.setBox(this._dragProxy,this.handlerBox)},_OnDragMove:function(d){if(!this.handlerBox){return}if(!this.elBox){this.elBox=mini.getBox(this._borderEl,true)}var k=this.elBox.width,e=this.elBox.height;var c=this.handlerSize;var n=this.vertical?e-this.handlerSize:k-this.handlerSize;var l=this.pane1.minSize,a=this.pane1.maxSize;var g=this.pane2.minSize,m=this.pane2.maxSize;if(this.vertical==true){var b=d.now[1]-d.init[1];var i=this.handlerBox.y+b;if(i-this.elBox.y>a){i=this.elBox.y+a}if(i+this.handlerBox.height<this.elBox.bottom-m){i=this.elBox.bottom-m-this.handlerBox.height}if(i-this.elBox.y<l){i=this.elBox.y+l}if(i+this.handlerBox.height>this.elBox.bottom-g){i=this.elBox.bottom-g-this.handlerBox.height}mini.setY(this._dragProxy,i)}else{var f=d.now[0]-d.init[0];var j=this.handlerBox.x+f;if(j-this.elBox.x>a){j=this.elBox.x+a}if(j+this.handlerBox.width<this.elBox.right-m){j=this.elBox.right-m-this.handlerBox.width}if(j-this.elBox.x<l){j=this.elBox.x+l}if(j+this.handlerBox.width>this.elBox.right-g){j=this.elBox.right-g-this.handlerBox.width}mini.setX(this._dragProxy,j)}},_OnDragStop:function(g){var m=this.elBox.width,i=this.elBox.height;var b=this.handlerSize;var q=parseFloat(this.pane1.size),o=parseFloat(this.pane2.size);var n=isNaN(q),l=isNaN(o);var k=!isNaN(q)&&this.pane1.size.indexOf("%")!=-1;var j=!isNaN(o)&&this.pane2.size.indexOf("%")!=-1;var a=!n&&!k;var f=!l&&!j;var p=this.vertical?i-this.handlerSize:m-this.handlerSize;var e=mini.getBox(this._dragProxy);var d=e.x-this.elBox.x,c=p-d;if(this.vertical){d=e.y-this.elBox.y;c=p-d}if(n||l){if(n&&l){q=parseFloat(d/p*100).toFixed(1);this.pane1.size=q+"%"}else{if(a){q=d;this.pane1.size=q}else{if(k){q=parseFloat(d/p*100).toFixed(1);this.pane1.size=q+"%"}else{if(f){o=c;this.pane2.size=o}else{if(j){o=parseFloat(c/p*100).toFixed(1);this.pane2.size=o+"%"}}}}}}else{if(k&&f){this.pane2.size=c}else{if(a&&j){this.pane1.size=d}else{this.pane1.size=parseFloat(d/p*100).toFixed(1);this.pane2.size=100-this.pane1.size}}}jQuery(this._dragProxy).remove();jQuery(this._maskProxy).remove();this._maskProxy=null;this._dragProxy=null;this.elBox=this.handlerBox=null;this.doLayout();this.fire("resize")},getAttrs:function(c){var k=mini.Splitter.superclass.getAttrs.call(this,c);mini._ParseString(c,k,["onexpand","oncollapse","onresize"]);mini._ParseBool(c,k,["allowResize","vertical","showHandleButton"]);mini._ParseInt(c,k,["handlerSize"]);var j=[];var a=mini.getChildNodes(c);for(var f=0,e=2;f<e;f++){var d=a[f];var h=jQuery(d);var b={};j.push(b);if(!d){continue}b.style=d.style.cssText;mini._ParseString(d,b,["cls","size","id","class"]);mini._ParseBool(d,b,["visible","expanded","showCollapseButton"]);mini._ParseInt(d,b,["minSize","maxSize","handlerSize"]);b.bodyParent=d}k.panes=j;return k}});mini.regClass(mini.Splitter,"splitter");mini.Layout=function(){this.regions=[];this.regionMap={};mini.Layout.superclass.constructor.call(this)};mini.extend(mini.Layout,mini.Control,{regions:[],splitSize:5,collapseWidth:28,collapseHeight:25,regionWidth:150,regionHeight:80,regionMinWidth:50,regionMinHeight:25,regionMaxWidth:2000,regionMaxHeight:2000,uiCls:"mini-layout",_create:function(){this.el=document.createElement("div");this.el.className="mini-layout";this.el.innerHTML='<div class="mini-layout-border"></div>';this._borderEl=this.el.firstChild;this.doUpdate()},_initEvents:function(){mini._BindEvents(function(){mini.on(this.el,"click",this.__OnClick,this);mini.on(this.el,"mousedown",this.__OnMouseDown,this);mini.on(this.el,"mouseover",this.__OnMouseOver,this);mini.on(this.el,"mouseout",this.__OnMouseOut,this);mini.on(document,"mousedown",this.__OnDocMouseDown,this)},this)},getRegionEl:function(a){var a=this.getRegion(a);if(!a){return null}return a._el},getRegionHeaderEl:function(a){var a=this.getRegion(a);if(!a){return null}return a._header},getRegionBodyEl:function(a){var a=this.getRegion(a);if(!a){return null}return a._body},getRegionSplitEl:function(a){var a=this.getRegion(a);if(!a){return null}return a._split},getRegionProxyEl:function(a){var a=this.getRegion(a);if(!a){return null}return a._proxy},getRegionBox:function(b){var a=this.getRegionEl(b);if(a){return mini.getBox(a)}return null},getRegion:function(a){if(typeof a=="string"){return this.regionMap[a]}return a},_getButton:function(f,b){var e=f.buttons;for(var d=0,a=e.length;d<a;d++){var c=e[d];if(c.name==b){return c}}},_createRegion:function(a){var b=mini.copyTo({region:"",title:"",iconCls:"",iconStyle:"",showCloseButton:false,showCollapseButton:true,buttons:[{name:"close",cls:"mini-tools-close",html:"",visible:false},{name:"collapse",cls:"mini-tools-collapse",html:"",visible:true}],showSplitIcon:false,showSplit:true,showHeader:true,splitSize:this.splitSize,collapseSize:this.collapseWidth,width:this.regionWidth,height:this.regionHeight,minWidth:this.regionMinWidth,minHeight:this.regionMinHeight,maxWidth:this.regionMaxWidth,maxHeight:this.regionMaxHeight,allowResize:true,cls:"",style:"",headerCls:"",headerStyle:"",bodyCls:"",bodyStyle:"",visible:true,expanded:true},a);return b},_CreateRegionEl:function(a){var a=this.getRegion(a);if(!a){return}mini.append(this._borderEl,'<div id="'+a.region+'" class="mini-layout-region"><div class="mini-layout-region-header" style="'+a.headerStyle+'"></div><div class="mini-layout-region-body '+a.bodyCls+'" style="'+a.bodyStyle+'"></div></div>');a._el=this._borderEl.lastChild;a._header=a._el.firstChild;a._body=a._el.lastChild;if(a.cls){mini.addClass(a._el,a.cls)}if(a.style){mini.setStyle(a._el,a.style)}if(a.headerCls){mini.addClass(a._el.firstChild,a.headerCls)}mini.addClass(a._el,"mini-layout-region-"+a.region);if(a.region!="center"){mini.append(this._borderEl,'<div uid="'+this.uid+'" id="'+a.region+'" class="mini-layout-split"><div class="mini-layout-spliticon"></div></div>');a._split=this._borderEl.lastChild;mini.addClass(a._split,"mini-layout-split-"+a.region)}if(a.region!="center"){mini.append(this._borderEl,'<div id="'+a.region+'" class="mini-layout-proxy"></div>');a._proxy=this._borderEl.lastChild;mini.addClass(a._proxy,"mini-layout-proxy-"+a.region)}},setRegionControls:function(c,b){var c=this.getRegion(c);if(!c){return}var a=this.getRegionBodyEl(c);__mini_setControls(b,a,this)},setRegions:function(c){if(!mini.isArray(c)){return}for(var b=0,a=c.length;b<a;b++){this.addRegion(c[b])}},addRegion:function(k,j){var d=k;k=this._createRegion(k);if(!k.region){k.region="center"}k.region=k.region.toLowerCase();if(k.region=="center"&&d&&!d.showHeader){k.showHeader=false}if(k.region=="north"||k.region=="south"){if(!d.collapseSize){k.collapseSize=this.collapseHeight}}this._measureRegion(k);if(typeof j!="number"){j=this.regions.length}var a=this.regionMap[k.region];if(a){return}this.regions.insert(j,k);this.regionMap[k.region]=k;this._CreateRegionEl(k);var c=this.getRegionBodyEl(k);var h=k.body;delete k.body;if(h){if(!mini.isArray(h)){h=[h]}for(var g=0,e=h.length;g<e;g++){mini.append(c,h[g])}}if(k.bodyParent){var b=k.bodyParent;while(b.firstChild){var f=b.firstChild;c.appendChild(f)}}delete k.bodyParent;if(k.controls){this.setRegionControls(k,k.controls);delete k.controls}this.doUpdate()},removeRegion:function(a){var a=this.getRegion(a);if(!a){return}this.regions.remove(a);delete this.regionMap[a.region];jQuery(a._el).remove();jQuery(a._split).remove();jQuery(a._proxy).remove();this.doUpdate()},moveRegion:function(c,a){var c=this.getRegion(c);if(!c){return}var b=this.regions[a];if(!b||b==c){return}this.regions.remove(c);var a=this.region.indexOf(b);this.regions.insert(a,c);this.doUpdate()},_measureRegion:function(b){var a=this._getButton(b,"close");a.visible=b.showCloseButton;var a=this._getButton(b,"collapse");a.visible=b.showCollapseButton;if(b.width<b.minWidth){b.width=mini.minWidth}if(b.width>b.maxWidth){b.width=mini.maxWidth}if(b.height<b.minHeight){b.height=mini.minHeight}if(b.height>b.maxHeight){b.height=mini.maxHeight}},updateRegion:function(b,a){b=this.getRegion(b);if(!b){return}if(a){delete a.region}mini.copyTo(b,a);this._measureRegion(b);this.doUpdate()},expandRegion:function(a){a=this.getRegion(a);if(!a){return}a.expanded=true;this.doUpdate()},collapseRegion:function(a){a=this.getRegion(a);if(!a){return}a.expanded=false;this.doUpdate()},toggleRegion:function(a){a=this.getRegion(a);if(!a){return}if(a.expanded){this.collapseRegion(a)}else{this.expandRegion(a)}},showRegion:function(a){a=this.getRegion(a);if(!a){return}a.visible=true;this.doUpdate()},hideRegion:function(a){a=this.getRegion(a);if(!a){return}a.visible=false;this.doUpdate()},isExpandRegion:function(a){a=this.getRegion(a);if(!a){return null}return a.expanded},isVisibleRegion:function(a){a=this.getRegion(a);if(!a){return null}return a.visible},_tryToggleRegion:function(b){b=this.getRegion(b);var a={region:b,cancel:false};if(b.expanded){this.fire("BeforeCollapse",a);if(a.cancel==false){this.collapseRegion(b)}}else{this.fire("BeforeExpand",a);if(a.cancel==false){this.expandRegion(b)}}},_getProxyElByEvent:function(b){var a=mini.findParent(b.target,"mini-layout-proxy");return a},_getRegionElByEvent:function(b){var a=mini.findParent(b.target,"mini-layout-region");return a},__OnClick:function(f){if(this._inAniming){return}var a=this._getProxyElByEvent(f);if(a){var d=a.id;var c=mini.findParent(f.target,"mini-tools-collapse");if(c){this._tryToggleRegion(d)}else{this._VirtualToggle(d)}}var b=this._getRegionElByEvent(f);if(b&&mini.findParent(f.target,"mini-layout-region-header")){var d=b.id;var c=mini.findParent(f.target,"mini-tools-collapse");if(c){this._tryToggleRegion(d)}var g=mini.findParent(f.target,"mini-tools-close");if(g){this.updateRegion(d,{visible:false})}}if(mini.hasClass(f.target,"mini-layout-spliticon")){var d=f.target.parentNode.id;this._tryToggleRegion(d)}},_OnButtonClick:function(c,b,a){this.fire("buttonclick",{htmlEvent:a,region:c,button:b,index:this.buttons.indexOf(b),name:b.name})},_OnButtonMouseDown:function(c,b,a){this.fire("buttonmousedown",{htmlEvent:a,region:c,button:b,index:this.buttons.indexOf(b),name:b.name})},hoverProxyEl:null,__OnMouseOver:function(b){var a=this._getProxyElByEvent(b);if(a){mini.addClass(a,"mini-layout-proxy-hover");this.hoverProxyEl=a}},__OnMouseOut:function(a){if(this.hoverProxyEl){mini.removeClass(this.hoverProxyEl,"mini-layout-proxy-hover")}this.hoverProxyEl=null},onButtonClick:function(b,a){this.on("buttonclick",b,a)},onButtonMouseDown:function(b,a){this.on("buttonmousedown",b,a)}});mini.copyTo(mini.Layout.prototype,{_createHeader:function(e,c){var d='<div class="mini-tools">';if(c){d+='<span class="mini-tools-collapse"></span>'}else{for(var b=e.buttons.length-1;b>=0;b--){var a=e.buttons[b];d+='<span class="'+a.cls+'" style="';d+=a.style+";"+(a.visible?"":"display:none;")+'">'+a.html+"</span>"}}d+="</div>";d+='<div class="mini-layout-region-icon '+e.iconCls+'" style="'+e.iconStyle+";"+((e.iconStyle||e.iconCls)?"":"display:none;")+'"></div>';d+='<div class="mini-layout-region-title">'+e.title+"</div>";return d},doUpdate:function(){for(var d=0,a=this.regions.length;d<a;d++){var g=this.regions[d];var f=g.region;var e=g._el,c=g._split,b=g._proxy;if(g.cls){mini.addClass(e,g.cls)}if(g.headerCls){mini.addClass(e.firstChild,g.headerCls)}g._header.style.display=g.showHeader?"":"none";g._header.innerHTML=this._createHeader(g);if(g._proxy){g._proxy.innerHTML=this._createHeader(g,true)}if(c){mini.removeClass(c,"mini-layout-split-nodrag");if(g.expanded==false||!g.allowResize){mini.addClass(c,"mini-layout-split-nodrag")}}}this.doLayout()},doLayout:function(){if(!this.canLayout()){return}if(this._inAniming){return}var t=mini.getHeight(this.el,true);var n=mini.getWidth(this.el,true);var m={x:0,y:0,width:n,height:t};mini.setHeight(this._borderEl,t);var b=this.regions.clone();var z=this.getRegion("center");b.remove(z);if(z){b.push(z)}for(var s=0,q=b.length;s<q;s++){var f=b[s];f._Expanded=false;mini.removeClass(f._el,"mini-layout-popup");var g=f.region;var c=f._el,p=f._split,r=f._proxy;if(f.visible==false){c.style.display="none";if(g!="center"){p.style.display=r.style.display="none"}continue}c.style.display="";if(g!="center"){p.style.display=r.style.display=""}var k=m.x,j=m.y,n=m.width,t=m.height;var e=f.width,o=f.height;if(!f.expanded){if(g=="west"||g=="east"){e=f.collapseSize;mini.setWidth(c,f.width)}else{if(g=="north"||g=="south"){o=f.collapseSize;mini.setHeight(c,f.height)}}}switch(g){case"north":t=o;m.y+=o;m.height-=o;break;case"south":t=o;j=m.y+m.height-o;m.height-=o;break;case"west":n=e;m.x+=e;m.width-=e;break;case"east":n=e;k=m.x+m.width-e;m.width-=e;break;case"center":break;default:continue}if(n<0){n=0}if(t<0){t=0}if(g=="west"||g=="east"){mini.setHeight(c,t)}if(g=="north"||g=="south"){mini.setWidth(c,n)}var u="left:"+k+"px;top:"+j+"px;";var v=c;if(!f.expanded){v=r;c.style.top="-100px";c.style.left="-1500px"}else{if(r){r.style.left="-1500px";r.style.top="-100px"}}v.style.left=k+"px";v.style.top=j+"px";mini.setWidth(v,n);mini.setHeight(v,t);var A=jQuery(f._el).height();var a=f.showHeader?jQuery(f._header).outerHeight():0;mini.setHeight(f._body,A-a);if(g=="center"){continue}e=o=f.splitSize;var k=m.x,j=m.y,n=m.width,t=m.height;switch(g){case"north":t=o;m.y+=o;m.height-=o;break;case"south":t=o;j=m.y+m.height-o;m.height-=o;break;case"west":n=e;m.x+=e;m.width-=e;break;case"east":n=e;k=m.x+m.width-e;m.width-=e;break;case"center":break}if(n<0){n=0}if(t<0){t=0}p.style.left=k+"px";p.style.top=j+"px";mini.setWidth(p,n);mini.setHeight(p,t);if(f.showSplit&&f.expanded&&f.allowResize==true){mini.removeClass(p,"mini-layout-split-nodrag")}else{mini.addClass(p,"mini-layout-split-nodrag")}p.firstChild.style.display=f.showSplitIcon?"block":"none";if(f.expanded){mini.removeClass(p.firstChild,"mini-layout-spliticon-collapse")}else{mini.addClass(p.firstChild,"mini-layout-spliticon-collapse")}}mini.layout(this._borderEl);this.fire("layout")},__OnMouseDown:function(d){if(this._inAniming){return}if(mini.findParent(d.target,"mini-layout-split")){var a=jQuery(d.target).attr("uid");if(a!=this.uid){return}var c=this.getRegion(d.target.id);if(c.expanded==false||!c.allowResize||!c.showSplit){return}this.dragRegion=c;var b=this._getDrag();b.start(d)}},_getDrag:function(){if(!this.drag){this.drag=new mini.Drag({capture:true,onStart:mini.createDelegate(this._OnDragStart,this),onMove:mini.createDelegate(this._OnDragMove,this),onStop:mini.createDelegate(this._OnDragStop,this)})}return this.drag},_OnDragStart:function(a){this._maskProxy=mini.append(document.body,'<div class="mini-resizer-mask"></div>');this._dragProxy=mini.append(document.body,'<div class="mini-proxy"></div>');this._dragProxy.style.cursor="n-resize";if(this.dragRegion.region=="west"||this.dragRegion.region=="east"){this._dragProxy.style.cursor="w-resize"}this.splitBox=mini.getBox(this.dragRegion._split);mini.setBox(this._dragProxy,this.splitBox);this.elBox=mini.getBox(this.el,true)},_OnDragMove:function(s){var z=s.now[0]-s.init[0];var l=this.splitBox.x+z;var i=s.now[1]-s.init[1];var j=this.splitBox.y+i;var u=l+this.splitBox.width;var g=j+this.splitBox.height;var e=this.getRegion("west"),h=this.getRegion("east"),q=this.getRegion("north"),n=this.getRegion("south"),v=this.getRegion("center");var w=e&&e.visible?e.width:0;var f=h&&h.visible?h.width:0;var a=q&&q.visible?q.height:0;var k=n&&n.visible?n.height:0;var p=e&&e.showSplit?mini.getWidth(e._split):0;var m=h&&h.showSplit?mini.getWidth(h._split):0;var d=q&&q.showSplit?mini.getHeight(q._split):0;var r=n&&n.showSplit?mini.getHeight(n._split):0;var c=this.dragRegion,b=c.region;if(b=="west"){var t=this.elBox.width-f-m-p-v.minWidth;if(l-this.elBox.x>t){l=t+this.elBox.x}if(l-this.elBox.x<c.minWidth){l=c.minWidth+this.elBox.x}if(l-this.elBox.x>c.maxWidth){l=c.maxWidth+this.elBox.x}mini.setX(this._dragProxy,l)}else{if(b=="east"){var t=this.elBox.width-w-p-m-v.minWidth;if(this.elBox.right-(l+this.splitBox.width)>t){l=this.elBox.right-t-this.splitBox.width}if(this.elBox.right-(l+this.splitBox.width)<c.minWidth){l=this.elBox.right-c.minWidth-this.splitBox.width}if(this.elBox.right-(l+this.splitBox.width)>c.maxWidth){l=this.elBox.right-c.maxWidth-this.splitBox.width}mini.setX(this._dragProxy,l)}else{if(b=="north"){var o=this.elBox.height-k-r-d-v.minHeight;if(j-this.elBox.y>o){j=o+this.elBox.y}if(j-this.elBox.y<c.minHeight){j=c.minHeight+this.elBox.y}if(j-this.elBox.y>c.maxHeight){j=c.maxHeight+this.elBox.y}mini.setY(this._dragProxy,j)}else{if(b=="south"){var o=this.elBox.height-a-d-r-v.minHeight;if(this.elBox.bottom-(j+this.splitBox.height)>o){j=this.elBox.bottom-o-this.splitBox.height}if(this.elBox.bottom-(j+this.splitBox.height)<c.minHeight){j=this.elBox.bottom-c.minHeight-this.splitBox.height}if(this.elBox.bottom-(j+this.splitBox.height)>c.maxHeight){j=this.elBox.bottom-c.maxHeight-this.splitBox.height}mini.setY(this._dragProxy,j)}}}}},_OnDragStop:function(d){var e=mini.getBox(this._dragProxy);var f=this.dragRegion,c=f.region;if(c=="west"){var b=e.x-this.elBox.x;this.updateRegion(f,{width:b})}else{if(c=="east"){var b=this.elBox.right-e.right;this.updateRegion(f,{width:b})}else{if(c=="north"){var a=e.y-this.elBox.y;this.updateRegion(f,{height:a})}else{if(c=="south"){var a=this.elBox.bottom-e.bottom;this.updateRegion(f,{height:a})}}}}jQuery(this._dragProxy).remove();this._dragProxy=null;this.elBox=this.handlerBox=null;jQuery(this._maskProxy).remove();this._maskProxy=null},_VirtualToggle:function(a){a=this.getRegion(a);if(a._Expanded===true){this._VirtualCollapse(a)}else{this._VirtualExpand(a)}},_VirtualExpand:function(m){if(this._inAniming){return}this.doLayout();var j=m.region,a=m._el;m._Expanded=true;mini.addClass(a,"mini-layout-popup");var e=mini.getBox(m._proxy);var g=mini.getBox(m._el);var c={};if(j=="east"){var n=e.x;var l=e.y;var f=e.height;mini.setHeight(a,f);mini.setX(a,n);a.style.top=m._proxy.style.top;var d=parseInt(a.style.left);c={left:d-g.width}}else{if(j=="west"){var n=e.right-g.width;var l=e.y;var f=e.height;mini.setHeight(a,f);mini.setX(a,n);a.style.top=m._proxy.style.top;var d=parseInt(a.style.left);c={left:d+g.width}}else{if(j=="north"){var n=e.x;var l=e.bottom-g.height;var o=e.width;mini.setWidth(a,o);mini.setXY(a,n,l);var k=parseInt(a.style.top);c={top:k+g.height}}else{if(j=="south"){var n=e.x;var l=e.y;var o=e.width;mini.setWidth(a,o);mini.setXY(a,n,l);var k=parseInt(a.style.top);c={top:k-g.height}}}}}mini.addClass(m._proxy,"mini-layout-maxZIndex");this._inAniming=true;var i=this;var b=jQuery(a);b.animate(c,250,function(){mini.removeClass(m._proxy,"mini-layout-maxZIndex");i._inAniming=false})},_VirtualCollapse:function(h){if(this._inAniming){return}h._Expanded=false;var g=h.region,a=h._el;var e=mini.getBox(a);var c={};if(g=="east"){var d=parseInt(a.style.left);c={left:d+e.width}}else{if(g=="west"){var d=parseInt(a.style.left);c={left:d-e.width}}else{if(g=="north"){var i=parseInt(a.style.top);c={top:i-e.height}}else{if(g=="south"){var i=parseInt(a.style.top);c={top:i+e.height}}}}}mini.addClass(h._proxy,"mini-layout-maxZIndex");this._inAniming=true;var f=this;var b=jQuery(a);b.animate(c,250,function(){mini.removeClass(h._proxy,"mini-layout-maxZIndex");f._inAniming=false;f.doLayout()})},__OnDocMouseDown:function(d){if(this._inAniming){return}for(var b=0,a=this.regions.length;b<a;b++){var c=this.regions[b];if(!c._Expanded){continue}if(mini.isAncestor(c._el,d.target)||mini.isAncestor(c._proxy,d.target)||d.target.location){}else{this._VirtualCollapse(c)}}},getAttrs:function(c){var k=mini.Layout.superclass.getAttrs.call(this,c);var d=jQuery(c);var j=parseInt(d.attr("splitSize"));if(!isNaN(j)){k.splitSize=j}var g=[];var a=mini.getChildNodes(c);for(var h=0,f=a.length;h<f;h++){var e=a[h];var b={};g.push(b);b.cls=e.className;b.style=e.style.cssText;mini._ParseString(e,b,["region","title","iconCls","iconStyle","cls","headerCls","headerStyle","bodyCls","bodyStyle"]);mini._ParseBool(e,b,["allowResize","visible","showCloseButton","showCollapseButton","showSplit","showHeader","expanded","showSplitIcon"]);mini._ParseInt(e,b,["splitSize","collapseSize","width","height","minWidth","minHeight","maxWidth","maxHeight"]);b.bodyParent=e}k.regions=g;return k}});mini.regClass(mini.Layout,"layout");mini.Box=function(){mini.Box.superclass.constructor.call(this)};mini.extend(mini.Box,mini.Container,{style:"",borderStyle:"",bodyStyle:"",uiCls:"mini-box",_create:function(){this.el=document.createElement("div");this.el.className="mini-box";this.el.innerHTML='<div class="mini-box-border"></div>';this._bodyEl=this._borderEl=this.el.firstChild;this._contentEl=this._bodyEl},_initEvents:function(){},doLayout:function(){if(!this.canLayout()){return}var b=this.isAutoHeight();var g=this.isAutoWidth();var f=mini.getPaddings(this._bodyEl);var e=mini.getMargins(this._bodyEl);if(!b){var d=this.getHeight(true);if(jQuery.boxModel){d=d-f.top-f.bottom}d=d-e.top-e.bottom;if(d<0){d=0}this._bodyEl.style.height=d+"px"}else{this._bodyEl.style.height=""}var a=this.getWidth(true);var c=a;a=a-e.left-e.right;if(jQuery.boxModel){a=a-f.left-f.right}if(a<0){a=0}this._bodyEl.style.width=a+"px";mini.layout(this._borderEl);this.fire("layout")},setBody:function(c){if(!c){return}if(!mini.isArray(c)){c=[c]}for(var b=0,a=c.length;b<a;b++){mini.append(this._bodyEl,c[b])}mini.parse(this._bodyEl);this.doLayout()},set_bodyParent:function(b){if(!b){return}var a=this._bodyEl;var c=b;while(c.firstChild){a.appendChild(c.firstChild)}this.doLayout()},setBodyStyle:function(a){mini.setStyle(this._bodyEl,a);this.doLayout()},getAttrs:function(b){var a=mini.Box.superclass.getAttrs.call(this,b);a._bodyParent=b;mini._ParseString(b,a,["bodyStyle"]);return a}});mini.regClass(mini.Box,"box");mini.Include=function(){mini.Include.superclass.constructor.call(this)};mini.extend(mini.Include,mini.Control,{url:"",uiCls:"mini-include",_create:function(){this.el=document.createElement("div");this.el.className="mini-include"},_initEvents:function(){},doLayout:function(){if(!this.canLayout()){return}var d=this.el.childNodes;if(d){for(var b=0,a=d.length;b<a;b++){var c=d[b];mini.layout(c)}}},setUrl:function(a){this.url=a;mini.update({url:this.url,el:this.el,async:this.async});this.doLayout()},getUrl:function(a){return this.url},getAttrs:function(b){var a=mini.Include.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["url"]);return a}});mini.regClass(mini.Include,"include");mini.Tabs=function(){this._initTabs();mini.Tabs.superclass.constructor.call(this)};mini.extend(mini.Tabs,mini.Control,{activeIndex:-1,tabAlign:"left",tabPosition:"top",showBody:true,showHeader:true,nameField:"name",titleField:"title",urlField:"url",url:"",maskOnLoad:true,plain:true,bodyStyle:"",_tabHoverCls:"mini-tab-hover",_tabActiveCls:"mini-tab-active",set:function(d){if(typeof d=="string"){return this}var c=this._allowLayout;this._allowLayout=false;var a=d.activeIndex;delete d.activeIndex;var b=d.url;delete d.url;mini.Tabs.superclass.set.call(this,d);if(b){this.setUrl(b)}if(mini.isNumber(a)){this.setActiveIndex(a)}this._allowLayout=c;this.doLayout();return this},uiCls:"mini-tabs",_create:function(){this.el=document.createElement("div");this.el.className="mini-tabs";var b='<table class="mini-tabs-table" cellspacing="0" cellpadding="0"><tr style="width:100%;"><td></td><td style="text-align:left;vertical-align:top;width:100%;"><div class="mini-tabs-bodys"></div></td><td></td></tr></table>';this.el.innerHTML=b;this._tableEl=this.el.firstChild;var a=this.el.getElementsByTagName("td");this._td1El=a[0];this._td2El=a[1];this._td3El=a[2];this._bodyEl=this._td2El.firstChild;this._borderEl=this._bodyEl;this.doUpdate()},destroy:function(a){this._tableEl=this._td1El=this._td2El=this._td3El=null;this._bodyEl=this._borderEl=this.headerEl=null;this.tabs=[];mini.Tabs.superclass.destroy.call(this,a)},_doClearElement:function(){mini.removeClass(this._td1El,"mini-tabs-header");mini.removeClass(this._td3El,"mini-tabs-header");this._td1El.innerHTML="";this._td3El.innerHTML="";mini.removeChilds(this._td2El,this._bodyEl)},_initEvents:function(){mini._BindEvents(function(){mini.on(this.el,"mousedown",this.__OnMouseDown,this);mini.on(this.el,"click",this.__OnClick,this);mini.on(this.el,"mouseover",this.__OnMouseOver,this);mini.on(this.el,"mouseout",this.__OnMouseOut,this)},this)},_initTabs:function(){this.tabs=[]},_TabID:1,createTab:function(a){var b=mini.copyTo({_id:this._TabID++,name:"",title:"",newLine:false,iconCls:"",iconStyle:"",headerCls:"",headerStyle:"",bodyCls:"",bodyStyle:"",visible:true,enabled:true,showCloseButton:false,active:false,url:"",loaded:false,refreshOnClick:false},a);if(a){a=mini.copyTo(a,b);b=a}return b},_doLoad:function(){var a=mini._getResult(this.url,null,null,null,null,this.dataField);if(this.dataField&&!mini.isArray(a)){a=mini._getMap(this.dataField,a)}if(!a){a=[]}this.setTabs(a);this.fire("load")},load:function(a){if(typeof a=="string"){this.setUrl(a)}else{this.setTabs(a)}},setUrl:function(a){this.url=a;this._doLoad()},getUrl:function(){return this.url},setNameField:function(a){this.nameField=a},getNameField:function(){return this.nameField},setTitleField:function(a){this.titleField=a},getTitleField:function(){return this.titleField},setUrlField:function(a){this.urlField=a},getUrlField:function(){return this.urlField},setButtons:function(b){this._buttons=mini.byId(b);if(this._buttons){var a=mini.byClass("mini-tabs-buttons",this.el);if(a){a.appendChild(this._buttons);mini.parse(a);this.doLayout()}}},setTabControls:function(b,c){var b=this.getTab(b);if(!b){return}var a=this.getTabBodyEl(b);__mini_setControls(c,a,this)},setTabs:function(c){if(!mini.isArray(c)){return}this.beginUpdate();this.removeAll();for(var b=0,a=c.length;b<a;b++){var d=c[b];d.title=mini._getMap(this.titleField,d);d.url=mini._getMap(this.urlField,d);d.name=mini._getMap(this.nameField,d)}for(var b=0,a=c.length;b<a;b++){this.addTab(c[b])}this.setActiveIndex(0);this.endUpdate()},getTabs:function(){return this.tabs},removeAll:function(c){var a=this.getActiveTab();if(mini.isNull(c)){c=[]}if(!mini.isArray(c)){c=[c]}for(var e=c.length-1;e>=0;e--){var d=this.getTab(c[e]);if(!d){c.removeAt(e)}else{c[e]=d}}var b=this.tabs;for(var e=b.length-1;e>=0;e--){var f=b[e];if(c.indexOf(f)==-1){this.removeTab(f)}}var g=c[0];if(a!=this.getActiveTab()){if(g){this.activeTab(g)}}},addTab:function(c,g){if(typeof c=="string"){c={title:c}}c=this.createTab(c);if(!c.name){c.name=""}if(typeof g!="number"){g=this.tabs.length}this.tabs.insert(g,c);var h=this._createTabBodyId(c);var j='<div id="'+h+'" class="mini-tabs-body '+c.bodyCls+'" style="'+c.bodyStyle+';display:none;"></div>';mini.append(this._bodyEl,j);var b=this.getTabBodyEl(c);var f=c.body;delete c.body;if(f){if(!mini.isArray(f)){f=[f]}for(var e=0,d=f.length;e<d;e++){mini.append(b,f[e])}}if(c.bodyParent){var a=c.bodyParent;while(a.firstChild){if(a.firstChild.nodeType==8){a.removeChild(a.firstChild)}else{b.appendChild(a.firstChild)}}}delete c.bodyParent;if(c.controls){this.setTabControls(c,c.controls);delete c.controls}this.doUpdate();return c},removeTab:function(f){f=this.getTab(f);if(!f||this.tabs.indexOf(f)==-1){return}var b=this.getActiveTab();var e=f==b;var a=this._OnTabDestroy(f);this.tabs.remove(f);this._doRemoveIFrame(f);var d=this.getTabBodyEl(f);if(d){this._bodyEl.removeChild(d)}if(a&&e){for(var c=this.activeIndex;c>=0;c--){var f=this.getTab(c);if(f&&f.enabled&&f.visible){this.activeIndex=c;break}}this.doUpdate();this.setActiveIndex(this.activeIndex);this.fire("activechanged")}else{this.activeIndex=this.tabs.indexOf(b);this.doUpdate()}return f},moveTab:function(c,a){c=this.getTab(c);if(!c){return}var b=this.tabs[a];if(b==c){return}this.tabs.remove(c);var a=this.tabs.indexOf(b);if(a==-1){this.tabs.add(c)}else{this.tabs.insert(a,c)}this.doUpdate()},updateTab:function(b,a){b=this.getTab(b);if(!b){return}mini.copyTo(b,a);this.doUpdate()},_getMaskWrapEl:function(){return this._bodyEl},_doRemoveIFrame:function(h,g){if(h._iframeEl&&h._iframeEl.parentNode){h._iframeEl.onload=function(){};jQuery(h._iframeEl).unbind("load");h._iframeEl.src="";try{iframe.contentWindow.document.write("");iframe.contentWindow.document.close()}catch(e){}if(h._iframeEl._ondestroy){h._iframeEl._ondestroy()}try{h._iframeEl.parentNode.removeChild(h._iframeEl);h._iframeEl.removeNode(true)}catch(e){}}h._iframeEl=null;h.loadedUrl=null;if(g===true){var b=this.getTabBodyEl(h);if(b){var f=mini.getChildNodes(b,true);for(var c=0,a=f.length;c<a;c++){var j=f[c];if(j&&j.parentNode){j.parentNode.removeChild(j)}}}}},_deferLoadingTime:180,_cancelLoadTabs:function(e){var d=this.tabs;for(var c=0,a=d.length;c<a;c++){var b=d[c];if(b!=e){if(b._loading&&b._iframeEl){b._loading=false;this._doRemoveIFrame(b,true)}}}if(e&&e==this.getActiveTab()&&e._loading){}else{this._loading=false;this.unmask()}},_doLoadTab:function(d){if(!d||d!=this.getActiveTab()){return}var a=this.getTabBodyEl(d);if(!a){return}this._cancelLoadTabs();this._doRemoveIFrame(d,true);this._loading=true;d._loading=true;this.unmask();if(this.maskOnLoad){this.loading()}var b=new Date();var e=this;e.isLoading=true;var c=mini.createIFrame(d.url,function(i,h){try{d._iframeEl.contentWindow.Owner=window;d._iframeEl.contentWindow.CloseOwnerWindow=function(k){d.removeAction=k;var j=true;if(d.ondestroy){if(typeof d.ondestroy=="string"){d.ondestroy=window[d.ondestroy]}if(d.ondestroy){j=d.ondestroy.call(this,g)}}if(j===false){return false}setTimeout(function(){e.removeTab(d)},10)}}catch(g){}if(d._loading!=true){return}var f=(b-new Date())+e._deferLoadingTime;d._loading=false;d.loadedUrl=d.url;if(f<0){f=0}setTimeout(function(){e.unmask();e.doLayout();e.isLoading=false},f);if(h){var g={sender:e,tab:d,index:e.tabs.indexOf(d),name:d.name,iframe:d._iframeEl};if(d.onload){if(typeof d.onload=="string"){d.onload=window[d.onload]}if(d.onload){d.onload.call(e,g)}}}if(e.getActiveTab()==d){e.fire("tabload",g)}});setTimeout(function(){if(d._iframeEl==c){a.appendChild(c)}},1);d._iframeEl=c},_OnTabDestroy:function(a){var b={sender:this,tab:a,index:this.tabs.indexOf(a),name:a.name,iframe:a._iframeEl,autoActive:true};this.fire("tabdestroy",b);return b.autoActive},loadTab:function(a,c,f,e){if(!a){return}c=this.getTab(c);if(!c){c=this.getActiveTab()}if(!c){return}var b=this.getTabBodyEl(c);if(b){mini.addClass(b,"mini-tabs-hideOverflow")}c.url=a;delete c.loadedUrl;if(f){c.onload=f}if(e){c.ondestroy=e}var d=this;clearTimeout(this._loadTabTimer);this._loadTabTimer=null;this._loadTabTimer=setTimeout(function(){d._doLoadTab(c)},1)},reloadTab:function(a){a=this.getTab(a);if(!a){a=this.getActiveTab()}if(!a){return}this.loadTab(a.url,a)},getTabRows:function(){var d=[];var e=[];for(var b=0,a=this.tabs.length;b<a;b++){var c=this.tabs[b];if(b!=0&&c.newLine){d.push(e);e=[]}e.push(c)}d.push(e);return d},doUpdate:function(){if(this._allowUpdate===false){return}if(this._buttons&&this._buttons.parentNode){this._buttons.parentNode.removeChild(this._buttons)}mini.removeClass(this.el,"mini-tabs-position-left");mini.removeClass(this.el,"mini-tabs-position-top");mini.removeClass(this.el,"mini-tabs-position-right");mini.removeClass(this.el,"mini-tabs-position-bottom");if(this.tabPosition=="bottom"){mini.addClass(this.el,"mini-tabs-position-bottom");this._doUpdateBottom()}else{if(this.tabPosition=="right"){mini.addClass(this.el,"mini-tabs-position-right");this._doUpdateRight()}else{if(this.tabPosition=="left"){mini.addClass(this.el,"mini-tabs-position-left");this._doUpdateLeft()}else{mini.addClass(this.el,"mini-tabs-position-top");this._doUpdateTop()}}}if(this._buttons){var a=mini.byClass("mini-tabs-buttons",this.el);if(a){a.appendChild(this._buttons);mini.parse(a)}}this.doLayout();this.setActiveIndex(this.activeIndex,false)},_handleIFrameOverflow:function(){var a=this.getTabBodyEl(this.activeIndex);if(a){mini.removeClass(a,"mini-tabs-hideOverflow");var b=mini.getChildNodes(a)[0];if(b&&b.tagName&&b.tagName.toUpperCase()=="IFRAME"){mini.addClass(a,"mini-tabs-hideOverflow")}}},doLayout:function(){if(!this.canLayout()){return}this._headerEl.style.display=this.showHeader?"":"none";this._handleIFrameOverflow();var C=this.isAutoHeight();G=this.getHeight(true);p=this.getWidth();var q=G;var x=p;if(this.showBody){this._bodyEl.style.display=""}else{this._bodyEl.style.display="none"}if(this.plain){mini.addClass(this.el,"mini-tabs-plain")}else{mini.removeClass(this.el,"mini-tabs-plain")}if(!C&&this.showBody){var B=jQuery(this._headerEl).outerHeight();var f=jQuery(this._headerEl).outerWidth();if(this.tabPosition=="top"){B=jQuery(this._headerEl.parentNode).outerHeight()}if(this.tabPosition=="left"||this.tabPosition=="right"){p=p-f}else{G=G-B}if(jQuery.boxModel){var s=mini.getPaddings(this._bodyEl);var z=mini.getBorders(this._bodyEl);G=G-s.top-s.bottom-z.top-z.bottom;p=p-s.left-s.right-z.left-z.right}margin=mini.getMargins(this._bodyEl);G=G-margin.top-margin.bottom;p=p-margin.left-margin.right;if(G<0){G=0}if(p<0){p=0}this._bodyEl.style.width=p+"px";this._bodyEl.style.height=G+"px";if(this.tabPosition=="left"||this.tabPosition=="right"){var a=this._headerEl.getElementsByTagName("tr")[0];var D=a.childNodes;var r=D[0].getElementsByTagName("tr");var g=last=all=0;for(var E=0,A=r.length;E<A;E++){var a=r[E];var o=jQuery(a).outerHeight();all+=o;if(E==0){g=o}if(E==A-1){last=o}}switch(this.tabAlign){case"center":var t=parseInt((q-(all-g-last))/2);for(var E=0,A=D.length;E<A;E++){D[E].firstChild.style.height=q+"px";var m=D[E].firstChild;var r=m.getElementsByTagName("tr");var J=r[0],I=r[r.length-1];J.style.height=t+"px";I.style.height=t+"px"}break;case"right":for(var E=0,A=D.length;E<A;E++){var m=D[E].firstChild;var r=m.getElementsByTagName("tr");var a=r[0];var u=q-(all-g);if(u>=0){a.style.height=u+"px"}}break;case"fit":for(var E=0,A=D.length;E<A;E++){D[E].firstChild.style.height=q+"px"}break;default:for(var E=0,A=D.length;E<A;E++){var m=D[E].firstChild;var r=m.getElementsByTagName("tr");var a=r[r.length-1];var u=q-(all-last);if(u>=0){a.style.height=u+"px"}}break}}}else{this._bodyEl.style.width="auto";this._bodyEl.style.height="auto"}var e=this.getTabBodyEl(this.activeIndex);if(e){if(!C&&this.showBody){var G=mini.getHeight(this._bodyEl,true);if(jQuery.boxModel){var s=mini.getPaddings(e);var z=mini.getBorders(e);G=G-s.top-s.bottom-z.top-z.bottom}e.style.height=G+"px"}else{e.style.height="auto"}}switch(this.tabPosition){case"bottom":var c=this._headerEl.childNodes;for(var E=0,A=c.length;E<A;E++){var m=c[E];mini.removeClass(m,"mini-tabs-header2");if(A>1&&E!=0){mini.addClass(m,"mini-tabs-header2")}}break;case"left":var D=this._headerEl.firstChild.rows[0].cells;for(var E=0,A=D.length;E<A;E++){var k=D[E];mini.removeClass(k,"mini-tabs-header2");if(A>1&&E==0){mini.addClass(k,"mini-tabs-header2")}}break;case"right":var D=this._headerEl.firstChild.rows[0].cells;for(var E=0,A=D.length;E<A;E++){var k=D[E];mini.removeClass(k,"mini-tabs-header2");if(A>1&&E!=0){mini.addClass(k,"mini-tabs-header2")}}break;default:var c=this._headerEl.childNodes;for(var E=0,A=c.length;E<A;E++){var m=c[E];mini.removeClass(m,"mini-tabs-header2");if(A>1&&E==0){mini.addClass(m,"mini-tabs-header2")}}break}mini.removeClass(this.el,"mini-tabs-scroll");var k=mini.byClass("mini-tabs-lastSpace",this.el);var F=mini.byClass("mini-tabs-buttons",this.el);var d=this._headerEl.parentNode;d.style.paddingRight="0px";if(this._navEl){this._navEl.style.display="none"}if(F){F.style.display="none"}mini.setWidth(d,x);if(this.tabPosition=="top"&&this.tabAlign=="left"){this._headerEl.style.width="auto";F.style.display="block";var y=x;var n=this._headerEl.firstChild.offsetWidth-k.offsetWidth;var H=F.firstChild?F.offsetWidth:0;if(n+H>y){this._navEl.style.display="block";this._navEl.style.right=H+"px";var v=this._navEl.offsetWidth;var p=y-H-v;mini.setWidth(this._headerEl,p)}}this._scrollToTab(this.activeIndex);this._doScrollButton();mini.layout(this._bodyEl);var j=this;var b=this.getActiveTab();if(b&&b.repaint&&e){var p=e.style.width;e.style.width="0px";setTimeout(function(){e.style.width=p},1)}this.fire("layout")},setTabAlign:function(a){this.tabAlign=a;this.doUpdate()},setTabPosition:function(a){this.tabPosition=a;this.doUpdate()},getTab:function(b){if(typeof b=="object"){return b}if(typeof b=="number"){return this.tabs[b]}else{for(var c=0,a=this.tabs.length;c<a;c++){var d=this.tabs[c];if(d.name==b){return d}}}},getHeaderEl:function(){return this._headerEl},getBodyEl:function(){return this._bodyEl},getTabEl:function(b){var f=this.getTab(b);if(!f){return null}var g=this._createTabId(f);var e=this.el.getElementsByTagName("*");for(var c=0,a=e.length;c<a;c++){var d=e[c];if(d.id==g){return d}}return null},getTabBodyEl:function(b){var f=this.getTab(b);if(!f){return null}var g=this._createTabBodyId(f);var e=this._bodyEl.childNodes;for(var c=0,a=e.length;c<a;c++){var d=e[c];if(d.id==g){return d}}return null},getTabIFrameEl:function(a){var b=this.getTab(a);if(!b){return null}return b._iframeEl},_createTabId:function(a){return this.uid+"$"+a._id},_createTabBodyId:function(a){return this.uid+"$body$"+a._id},_doScrollButton:function(){if(this.tabPosition=="top"){mini.removeClass(this._leftButtonEl,"mini-disabled");mini.removeClass(this._rightButtonEl,"mini-disabled");if(this._headerEl.scrollLeft==0){mini.addClass(this._leftButtonEl,"mini-disabled")}var c=this.getTabEl(this.tabs.length-1);if(c){var a=mini.getBox(c);var b=mini.getBox(this._headerEl);if(a.right<=b.right){mini.addClass(this._rightButtonEl,"mini-disabled")}}}},setActiveIndex:function(o,p){var d=this.getTab(o);var r=this.getTab(this.activeIndex);var a=d!=r;var b=this.getTabBodyEl(this.activeIndex);if(b){b.style.display="none"}if(d){this.activeIndex=this.tabs.indexOf(d)}else{this.activeIndex=-1}var b=this.getTabBodyEl(this.activeIndex);if(b){b.style.display=""}var b=this.getTabEl(r);if(b){mini.removeClass(b,this._tabActiveCls)}var b=this.getTabEl(d);if(b){mini.addClass(b,this._tabActiveCls)}if(b&&a){if(this.tabPosition=="bottom"){var j=mini.findParent(b,"mini-tabs-header");if(j){jQuery(this._headerEl).prepend(j)}}else{if(this.tabPosition=="left"){var h=mini.findParent(b,"mini-tabs-header").parentNode;if(h){h.parentNode.appendChild(h)}}else{if(this.tabPosition=="right"){var h=mini.findParent(b,"mini-tabs-header").parentNode;if(h){jQuery(h.parentNode).prepend(h)}}else{var j=mini.findParent(b,"mini-tabs-header");if(j){this._headerEl.appendChild(j)}}}}var g=this._headerEl.scrollLeft;this.doLayout();var q=this.getTabRows();if(q.length>1){}else{this._scrollToTab(this.activeIndex);this._doScrollButton()}for(var k=0,f=this.tabs.length;k<f;k++){var c=this.getTabEl(this.tabs[k]);if(c){mini.removeClass(c,this._tabHoverCls)}}}var n=this;if(a){var m={tab:d,index:this.tabs.indexOf(d),name:d?d.name:""};setTimeout(function(){n.fire("ActiveChanged",m)},1)}this._cancelLoadTabs(d);if(p!==false){if(d&&d.url&&!d.loadedUrl){var n=this;n.loadTab(d.url,d)}}else{}if(n.canLayout()){try{mini.layoutIFrames(n.el)}catch(m){}}},_scrollToTab:function(b){var f=this._headerEl.scrollLeft;if(this.tabPosition=="top"){this._headerEl.scrollLeft=f;var e=this.getTabEl(b);if(e){var d=this;var a=mini.getBox(e);var c=mini.getBox(d._headerEl);if(a.x<c.x){d._headerEl.scrollLeft-=(c.x-a.x)}else{if(a.right>c.right){d._headerEl.scrollLeft+=(a.right-c.right)}}}}},getActiveIndex:function(){return this.activeIndex},activeTab:function(a){this.setActiveIndex(a)},getActiveTab:function(){return this.getTab(this.activeIndex)},getActiveIndex:function(){return this.activeIndex},_tryActiveTab:function(b){b=this.getTab(b);if(!b){return}var a=this.tabs.indexOf(b);if(this.activeIndex==a){return}var c={tab:b,index:a,name:b.name,cancel:false};this.fire("BeforeActiveChanged",c);if(c.cancel==false){this.activeTab(b)}},setShowHeader:function(a){if(this.showHeader!=a){this.showHeader=a;this.doLayout()}},getShowHeader:function(){return this.showHeader},setShowBody:function(a){if(this.showBody!=a){this.showBody=a;this.doLayout()}},getShowBody:function(){return this.showBody},setBodyStyle:function(a){this.bodyStyle=a;mini.setStyle(this._bodyEl,a);this.doLayout()},getBodyStyle:function(){return this.bodyStyle},setMaskOnLoad:function(a){this.maskOnLoad=a},getMaskOnLoad:function(){return this.maskOnLoad},setPlain:function(a){this.plain=a;this.doLayout()},getPlain:function(){return this.plain},getTabByEvent:function(a){return this._getTabByEvent(a)},_getTabByEvent:function(d){var c=mini.findParent(d.target,"mini-tab");if(!c){return null}var b=c.id.split("$");if(b[0]!=this.uid){return null}var a=parseInt(jQuery(c).attr("index"));return this.getTab(a)},__OnClick:function(c){var a=this._getTabByEvent(c);if(!a){return}if(a.enabled){var b=this;setTimeout(function(){if(mini.findParent(c.target,"mini-tab-close")){b._OnCloseButtonClick(a,c)}else{var d=a.loadedUrl;b._tryActiveTab(a);if(a.refreshOnClick&&a.url==d){b.reloadTab(a)}}},10)}},hoverTab:null,__OnMouseOver:function(b){var a=this._getTabByEvent(b);if(a&&a.enabled){var c=this.getTabEl(a);mini.addClass(c,this._tabHoverCls);this.hoverTab=a}},__OnMouseOut:function(a){if(this.hoverTab){var b=this.getTabEl(this.hoverTab);mini.removeClass(b,this._tabHoverCls)}this.hoverTab=null},__OnMouseDown:function(d){clearInterval(this._scrollTimer);if(this.tabPosition=="top"){var c=this;var b=0,a=10;if(d.target==this._leftButtonEl){this._scrollTimer=setInterval(function(){c._headerEl.scrollLeft-=a;b++;if(b>5){a=18}if(b>10){a=25}c._doScrollButton()},25)}else{if(d.target==this._rightButtonEl){this._scrollTimer=setInterval(function(){c._headerEl.scrollLeft+=a;b++;if(b>5){a=18}if(b>10){a=25}c._doScrollButton()},25)}}mini.on(document,"mouseup",this.__OnDocMouseUp,this)}},__OnDocMouseUp:function(a){clearInterval(this._scrollTimer);this._scrollTimer=null;mini.un(document,"mouseup",this.__OnDocMouseUp,this)},_doUpdateTop:function(){var p=this.tabPosition=="top";var v="";if(p){v+='<div class="mini-tabs-scrollCt">';v+='<div class="mini-tabs-nav"><a class="mini-tabs-leftButton" href="javascript:void(0)" hideFocus onclick="return false"></a><a class="mini-tabs-rightButton" href="javascript:void(0)" hideFocus onclick="return false"></a></div>';v+='<div class="mini-tabs-buttons"></div>'}v+='<div class="mini-tabs-headers">';var u=this.getTabRows();for(var h=0,f=u.length;h<f;h++){var q=u[h];var t="";v+='<table class="mini-tabs-header" cellspacing="0" cellpadding="0"><tr><td class="mini-tabs-space mini-tabs-firstSpace"><div></div></td>';for(var n=0,e=q.length;n<e;n++){var c=q[n];var b=this._createTabId(c);if(!c.visible){continue}var o=this.tabs.indexOf(c);var t=c.headerCls||"";if(c.enabled==false){t+=" mini-disabled"}v+='<td id="'+b+'" index="'+o+'"  class="mini-tab '+t+'" style="'+c.headerStyle+'">';if(c.iconCls||c.iconStyle){v+='<span class="mini-tab-icon '+c.iconCls+'" style="'+c.iconStyle+'"></span>'}v+='<span class="mini-tab-text">'+c.title+"</span>";if(c.showCloseButton){var a="";if(c.enabled){a="onmouseover=\"mini.addClass(this, 'mini-tab-close-hover')\" onmouseout=\"mini.removeClass(this, 'mini-tab-close-hover')\""}v+='<span class="mini-tab-close" '+a+"></span>"}v+="</td>";if(n!=e-1){v+='<td class="mini-tabs-space2"><div></div></td>'}}v+='<td class="mini-tabs-space mini-tabs-lastSpace" ><div></div></td></tr></table>'}if(p){v+="</div>"}v+="</div>";this._doClearElement();mini.prepend(this._td2El,v);var d=this._td2El;this._headerEl=d.firstChild.lastChild;if(p){this._navEl=this._headerEl.parentNode.firstChild;this._leftButtonEl=this._navEl.firstChild;this._rightButtonEl=this._navEl.childNodes[1]}switch(this.tabAlign){case"center":var r=this._headerEl.childNodes;for(var n=0,e=r.length;n<e;n++){var g=r[n];var m=g.getElementsByTagName("td");m[0].style.width="50%";m[m.length-1].style.width="50%"}break;case"right":var r=this._headerEl.childNodes;for(var n=0,e=r.length;n<e;n++){var g=r[n];var m=g.getElementsByTagName("td");m[0].style.width="100%"}break;case"fit":break;default:var r=this._headerEl.childNodes;for(var n=0,e=r.length;n<e;n++){var g=r[n];var m=g.getElementsByTagName("td");m[m.length-1].style.width="100%"}break}},_doUpdateBottom:function(){this._doUpdateTop();var a=this._td2El;mini.append(a,a.firstChild);this._headerEl=a.lastChild},_doUpdateLeft:function(){var p='<table cellspacing="0" cellpadding="0"><tr>';var o=this.getTabRows();for(var f=0,e=o.length;f<e;f++){var m=o[f];var n="";if(e>1&&f!=e-1){n="mini-tabs-header2"}p+='<td class="'+n+'"><table class="mini-tabs-header" cellspacing="0" cellpadding="0">';p+='<tr ><td class="mini-tabs-space mini-tabs-firstSpace" ><div></div></td></tr>';for(var g=0,d=m.length;g<d;g++){var c=m[g];var b=this._createTabId(c);if(!c.visible){continue}var h=this.tabs.indexOf(c);var n=c.headerCls||"";if(c.enabled==false){n+=" mini-disabled"}p+='<tr><td id="'+b+'" index="'+h+'"  class="mini-tab '+n+'" style="'+c.headerStyle+'">';if(c.iconCls||c.iconStyle){p+='<span class="mini-tab-icon '+c.iconCls+'" style="'+c.iconStyle+'"></span>'}p+='<span class="mini-tab-text">'+c.title+"</span>";if(c.showCloseButton){var a="";if(c.enabled){a="onmouseover=\"mini.addClass(this, 'mini-tab-close-hover')\" onmouseout=\"mini.removeClass(this, 'mini-tab-close-hover')\""}p+='<span class="mini-tab-close" '+a+"></span>"}p+="</td></tr>";if(g!=d-1){p+='<tr><td class="mini-tabs-space2"><div></div></td></tr>'}}p+='<tr ><td class="mini-tabs-space mini-tabs-lastSpace" ><div></div></td></tr>';p+="</table></td>"}p+="</tr ></table>";this._doClearElement();mini.addClass(this._td1El,"mini-tabs-header");mini.append(this._td1El,p);this._headerEl=this._td1El},_doUpdateRight:function(){this._doUpdateLeft();mini.removeClass(this._td1El,"mini-tabs-header");mini.removeClass(this._td3El,"mini-tabs-header");mini.append(this._td3El,this._td1El.firstChild);this._headerEl=this._td3El},_OnCloseButtonClick:function(d,a){var f={tab:d,index:this.tabs.indexOf(d),name:d.name.toLowerCase(),htmlEvent:a,cancel:false};this.fire("beforecloseclick",f);if(f.cancel==true){return}try{if(d._iframeEl&&d._iframeEl.contentWindow){var b=true;if(d._iframeEl.contentWindow.CloseWindow){b=d._iframeEl.contentWindow.CloseWindow("close")}else{if(d._iframeEl.contentWindow.CloseOwnerWindow){b=d._iframeEl.contentWindow.CloseOwnerWindow("close")}}if(b===false){f.cancel=true}}}catch(c){}if(f.cancel==true){return}d.removeAction="close";this.removeTab(d);this.fire("closeclick",f)},onBeforeCloseClick:function(b,a){this.on("beforecloseclick",b,a)},onCloseClick:function(b,a){this.on("closeclick",b,a)},onActiveChanged:function(b,a){this.on("activechanged",b,a)},getAttrs:function(el){var attrs=mini.Tabs.superclass.getAttrs.call(this,el);mini._ParseString(el,attrs,["tabAlign","tabPosition","bodyStyle","onactivechanged","onbeforeactivechanged","url","ontabload","ontabdestroy","onbeforecloseclick","oncloseclick","titleField","urlField","nameField","loadingMsg","buttons"]);mini._ParseBool(el,attrs,["allowAnim","showBody","showHeader","maskOnLoad","plain"]);mini._ParseInt(el,attrs,["activeIndex"]);var tabs=[];var nodes=mini.getChildNodes(el);for(var i=0,l=nodes.length;i<l;i++){var node=nodes[i];var o={};tabs.push(o);o.style=node.style.cssText;mini._ParseString(node,o,["name","title","url","cls","iconCls","iconStyle","headerCls","headerStyle","bodyCls","bodyStyle","onload","ondestroy","data-options"]);mini._ParseBool(node,o,["newLine","visible","enabled","showCloseButton","refreshOnClick"]);o.bodyParent=node;var options=o["data-options"];if(options){options=eval("("+options+")");if(options){mini.copyTo(o,options)}}}attrs.tabs=tabs;return attrs}});mini.regClass(mini.Tabs,"tabs");mini.Menu=function(){this.items=[];mini.Menu.superclass.constructor.call(this)};mini.extend(mini.Menu,mini.Control);mini.copyTo(mini.Menu.prototype,mini.Popup_prototype);var mini_Popup_prototype_hide=mini.Popup_prototype.hide;mini.copyTo(mini.Menu.prototype,{height:"auto",width:"auto",minWidth:140,vertical:true,allowSelectItem:false,_selectedItem:null,_itemSelectedCls:"mini-menuitem-selected",textField:"text",resultAsTree:false,idField:"id",parentField:"pid",itemsField:"children",showNavArrow:true,imgPath:"",_clearBorder:false,showAction:"none",hideAction:"outerclick",getbyName:function(b){for(var c=0,a=this.items.length;c<a;c++){var d=this.items[c];if(d.name==b){return d}if(d.menu){var e=d.menu.getbyName(b);if(e){return e}}}return null},set:function(b){if(typeof b=="string"){return this}var a=b.url;delete b.url;if(b.imgPath){this.setImgPath(b.imgPath)}delete b.imgPath;this.ownerItem=b.ownerItem;delete b.ownerItem;mini.Menu.superclass.set.call(this,b);if(a){this.setUrl(a)}return this},uiCls:"mini-menu",_create:function(){this.el=document.createElement("div");this.el.className="mini-menu";this.el.innerHTML='<div class="mini-menu-border"><a class="mini-menu-topArrow" href="#" onclick="return false"></a><div class="mini-menu-inner"></div><a class="mini-menu-bottomArrow" href="#" onclick="return false"></a></div>';this._borderEl=this.el.firstChild;this._topArrowEl=this._borderEl.childNodes[0];this._bottomArrowEl=this._borderEl.childNodes[2];this._innerEl=this._borderEl.childNodes[1];this._innerEl.innerHTML='<div class="mini-menu-float"></div><div class="mini-menu-toolbar"></div><div style="clear:both;"></div>';this._contentEl=this._innerEl.firstChild;this._toolbarEl=this._innerEl.childNodes[1];if(this.isVertical()==false){mini.addClass(this.el,"mini-menu-horizontal")}},destroy:function(a){if(this._topArrowEl){this._topArrowEl.onmousedown=this._bottomArrowEl.onmousedown=null}this._popupEl=this.popupEl=this._borderEl=this._innerEl=this._contentEl=null;this._topArrowEl=this._bottomArrowEl=null;this.owner=null;this.window=null;mini.un(document,"mousedown",this.__OnBodyMouseDown,this);mini.un(window,"resize",this.__OnWindowResize,this);mini.Menu.superclass.destroy.call(this,a)},_disableContextMenu:false,_initEvents:function(){mini._BindEvents(function(){mini.on(document,"mousedown",this.__OnBodyMouseDown,this);mini_onOne(this.el,"mouseover",this.__OnMouseOver,this);mini.on(window,"resize",this.__OnWindowResize,this);if(this._disableContextMenu){mini_onOne(this.el,"contextmenu",function(a){a.preventDefault()},this)}mini_onOne(this._topArrowEl,"mousedown",this.__OnTopMouseDown,this);mini_onOne(this._bottomArrowEl,"mousedown",this.__OnBottomMouseDown,this)},this)},within:function(d){if(mini.isAncestor(this.el,d.target)){return true}for(var b=0,a=this.items.length;b<a;b++){var c=this.items[b];if(c.within(d)){return true}}return false},setVertical:function(a){this.vertical=a;if(!a){mini.addClass(this.el,"mini-menu-horizontal")}else{mini.removeClass(this.el,"mini-menu-horizontal")}},getVertical:function(){return this.vertical},isVertical:function(){return this.vertical},show:function(){this.setVisible(true)},hide:function(){this.hideItems();mini_Popup_prototype_hide.call(this)},hideItems:function(){for(var b=0,a=this.items.length;b<a;b++){var c=this.items[b];c.hideMenu()}},showItemMenu:function(c){for(var b=0,a=this.items.length;b<a;b++){var d=this.items[b];if(d==c){d.showMenu()}else{d.hideMenu()}}},hasShowItemMenu:function(){for(var b=0,a=this.items.length;b<a;b++){var c=this.items[b];if(c&&c.menu&&c.menu.isPopup){return true}}return false},setData:function(a){if(!mini.isArray(a)){a=[]}this.setItems(a)},getData:function(){return this.getItems()},setItems:function(b){if(!mini.isArray(b)){b=[]}this.removeAll();var d=new Date();for(var c=0,a=b.length;c<a;c++){this.addItem(b[c])}},getItems:function(){return this.items},_itemType:"menuitem",addItem:function(a){if(a=="-"||a=="|"||a.type=="separator"){mini.append(this._contentEl,'<span id="'+a.id+'" class="mini-separator"></span>');return}if(!mini.isControl(a)&&!mini.getClass(a.type)){a.type=this._itemType}a.ownerMenu=this;a=mini.getAndCreate(a);this.items.push(a);this._contentEl.appendChild(a.el);a.ownerMenu=this;this.fire("itemschanged")},removeItem:function(a){a=mini.get(a);if(!a){return}this.items.remove(a);this._contentEl.removeChild(a.el);this.fire("itemschanged")},removeItemAt:function(a){var b=this.items[a];this.removeItem(b)},removeAll:function(){var a=this.items.clone();for(var b=a.length-1;b>=0;b--){this.removeItem(a[b])}this._contentEl.innerHTML=""},getGroupItems:function(c){if(!c){return[]}var b=[];for(var d=0,a=this.items.length;d<a;d++){var e=this.items[d];if(e.groupName==c){b.push(e)}}return b},getItem:function(d){if(typeof d=="number"){return this.items[d]}if(typeof d=="string"){for(var b=0,a=this.items.length;b<a;b++){var c=this.items[b];if(c.id==d){return c}}return null}if(d&&this.items.indexOf(d)!=-1){return d}return null},setAllowSelectItem:function(a){this.allowSelectItem=a},getAllowSelectItem:function(){return this.allowSelectItem},setSelectedItem:function(a){a=this.getItem(a);this._OnItemSelect(a)},getSelectedItem:function(a){return this._selectedItem},setShowNavArrow:function(a){this.showNavArrow=a},getShowNavArrow:function(){return this.showNavArrow},setTextField:function(a){this.textField=a},getTextField:function(){return this.textField},setResultAsTree:function(a){this.resultAsTree=a},getResultAsTree:function(){return this.resultAsTree},setIdField:function(a){this.idField=a},getIdField:function(){return this.idField},setParentField:function(a){this.parentField=a},getParentField:function(){return this.parentField},doLayout:function(){if(!this.canLayout()){return}if(!this.isAutoHeight()){var a=mini.getHeight(this.el,true);mini.setHeight(this._borderEl,a);this._topArrowEl.style.display=this._bottomArrowEl.style.display="none";this._contentEl.style.height="auto";if(this.showNavArrow&&this._borderEl.scrollHeight>this._borderEl.clientHeight){this._topArrowEl.style.display=this._bottomArrowEl.style.display="block";a=mini.getHeight(this._borderEl,true);var e=mini.getHeight(this._topArrowEl);var b=mini.getHeight(this._bottomArrowEl);var d=a-e-b;if(d<0){d=0}mini.setHeight(this._contentEl,d);var c=mini.getWidth(this._borderEl,true);mini.setWidth(this._topArrowEl,c);mini.setWidth(this._bottomArrowEl,c)}else{this._contentEl.style.height="auto"}}else{this._borderEl.style.height="auto";this._contentEl.style.height="auto"}},_measureSize:function(){if(this.height=="auto"){this.el.style.height="auto";this._borderEl.style.height="auto";this._contentEl.style.height="auto";this._topArrowEl.style.display=this._bottomArrowEl.style.display="none";var a=mini.getViewportBox();var c=mini.getBox(this.el);this.maxHeight=a.height-25;if(this.ownerItem){var c=mini.getBox(this.ownerItem.el);var d=c.top;var e=a.height-c.bottom;var b=d>e?d:e;b-=10;this.maxHeight=b}}this.el.style.display="";var c=mini.getBox(this.el);if(c.width>this.maxWidth){mini.setWidth(this.el,this.maxWidth);c=mini.getBox(this.el)}if(c.height>this.maxHeight){mini.setHeight(this.el,this.maxHeight);c=mini.getBox(this.el)}if(c.width<this.minWidth){mini.setWidth(this.el,this.minWidth);c=mini.getBox(this.el)}if(c.height<this.minHeight){mini.setHeight(this.el,this.minHeight);c=mini.getBox(this.el)}},url:"",_doLoad:function(){var b=mini._getResult(this.url,null,null,null,null,this.dataField);if(this.dataField&&!mini.isArray(b)){b=mini._getMap(this.dataField,b)}if(!b){b=[]}if(this.resultAsTree==false){b=mini.arrayToTree(b,this.itemsField,this.idField,this.parentField)}var e=mini.treeToArray(b,this.itemsField,this.idField,this.parentField);for(var c=0,a=e.length;c<a;c++){var f=e[c];f.text=mini._getMap(this.textField,f);if(mini.isNull(f.text)){f.text=""}}var d=new Date();this.setItems(b);this.fire("load")},loadList:function(e,c,f){if(!e){return}c=c||this.idField;f=f||this.parentField;for(var d=0,b=e.length;d<b;d++){var g=e[d];g.text=mini._getMap(this.textField,g);if(mini.isNull(g.text)){g.text=""}}var a=mini.arrayToTree(e,this.itemsField,c,f);this.load(a)},load:function(a){if(typeof a=="string"){this.setUrl(a)}else{this.setItems(a)}},setUrl:function(a){this.url=a;this._doLoad()},getUrl:function(){return this.url},hideOnClick:true,setHideOnClick:function(a){this.hideOnClick=a},getHideOnClick:function(){return this.hideOnClick},hideOnClick:true,setImgPath:function(a){this.imgPath=a},getImgPath:function(){return this.imgPath},_OnItemClick:function(b,a){var c={item:b,isLeaf:!b.menu,htmlEvent:a};if(this.hideOnClick){if(this.isPopup){this.hide()}else{this.hideItems()}}if(this.allowSelectItem&&this._selectedItem!=b){this.setSelectedItem(b)}this.fire("itemclick",c);if(this.ownerItem){}},_OnItemSelect:function(a){if(this._selectedItem){this._selectedItem.removeCls(this._itemSelectedCls)}this._selectedItem=a;if(this._selectedItem){this._selectedItem.addCls(this._itemSelectedCls)}var b={item:this._selectedItem,isLeaf:this._selectedItem?!this._selectedItem.menu:false};this.fire("itemselect",b)},onItemClick:function(b,a){this.on("itemclick",b,a)},onItemSelect:function(b,a){this.on("itemselect",b,a)},__OnTopMouseDown:function(a){this._startScrollMove(-20)},__OnBottomMouseDown:function(a){this._startScrollMove(20)},_startScrollMove:function(c){clearInterval(this._scrollTimer);var a=function(){clearInterval(b._scrollTimer);mini.un(document,"mouseup",a)};mini.on(document,"mouseup",a);var b=this;this._scrollTimer=setInterval(function(){b._contentEl.scrollTop+=c},50)},setToolbar:function(a){__mini_setControls(a,this._toolbarEl,this)},parseItems:function(a){var f=[];for(var g=0,e=a.length;g<e;g++){var d=a[g];if(d.className=="separator"){var c={type:"separator",id:d.id,name:d.name};f.add(c);continue}var h=mini.getChildNodes(d);var j=h[0];var k=h[1];var c=new mini.MenuItem();if(!k){mini.applyTo.call(c,d);f.add(c);continue}mini.applyTo.call(c,j);c.render(document.body);var b=new mini.Menu();mini.applyTo.call(b,k);c.setMenu(b);b.render(document.body);f.add(c)}return f.clone()},getAttrs:function(b){var k=mini.Menu.superclass.getAttrs.call(this,b);var c=jQuery(b);mini._ParseString(b,k,["popupEl","popupCls","showAction","hideAction","xAlign","yAlign","modalStyle","onbeforeopen","open","onbeforeclose","onclose","url","onitemclick","onitemselect","textField","idField","parentField","toolbar","imgPath"]);mini._ParseBool(b,k,["resultAsTree","hideOnClick","showNavArrow","showShadow"]);var a=mini.getChildNodes(b);for(var g=a.length-1;g>=0;g--){var d=a[g];var j=jQuery(d).attr("property");if(!j){continue}j=j.toLowerCase();if(j=="toolbar"){k.toolbar=d;d.parentNode.removeChild(d)}}var a=mini.getChildNodes(b);var h=this.parseItems(a);if(h.length>0){k.items=h}var f=c.attr("vertical");if(f){k.vertical=f=="true"?true:false}var e=c.attr("allowSelectItem");if(e){k.allowSelectItem=e=="true"?true:false}return k}});mini.regClass(mini.Menu,"menu");mini.MenuBar=function(){mini.MenuBar.superclass.constructor.call(this)};mini.extend(mini.MenuBar,mini.Menu,{uiCls:"mini-menubar",vertical:false,setVertical:function(a){this.vertical=false}});mini.regClass(mini.MenuBar,"menubar");mini.ContextMenu=function(){mini.ContextMenu.superclass.constructor.call(this)};mini.extend(mini.ContextMenu,mini.Menu,{uiCls:"mini-contextmenu",vertical:true,visible:false,_disableContextMenu:true,setVertical:function(a){this.vertical=true}});mini.regClass(mini.ContextMenu,"contextmenu");mini.MenuItem=function(){mini.MenuItem.superclass.constructor.call(this)};mini.extend(mini.MenuItem,mini.Control,{text:"",iconCls:"",iconStyle:"",iconPosition:"left",img:"",showIcon:true,showAllow:true,checked:false,checkOnClick:false,groupName:"",_hoverCls:"mini-menuitem-hover",_pressedCls:"mini-menuitem-pressed",_checkedCls:"mini-menuitem-checked",_clearBorder:false,menu:null,set:function(a){if(typeof a=="string"){return this}this.ownerMenu=a.ownerMenu;delete a.ownerMenu;mini.MenuItem.superclass.set.call(this,a);return this},uiCls:"mini-menuitem",_create:function(){var a=this.el=document.createElement("div");this.el.className="mini-menuitem";this.el.innerHTML='<div class="mini-menuitem-inner"><div class="mini-menuitem-icon"></div><div class="mini-menuitem-text"></div><div class="mini-menuitem-allow"></div></div>';this._innerEl=this.el.firstChild;this._iconEl=this._innerEl.firstChild;this._textEl=this._innerEl.childNodes[1];this.allowEl=this._innerEl.lastChild},_initEvents:function(){mini._BindEvents(function(){mini_onOne(this.el,"mouseover",this.__OnMouseOver,this)},this)},_inputEventsInited:false,_initInputEvents:function(){if(this._inputEventsInited){return}this._inputEventsInited=true;mini_onOne(this.el,"click",this.__OnClick,this);mini_onOne(this.el,"mouseup",this.__OnMouseUp,this);mini_onOne(this.el,"mouseout",this.__OnMouseOut,this)},destroy:function(a){if(this.el){this.el.onmouseover=null}this.menu=this._innerEl=this._iconEl=this._textEl=this.allowEl=null;mini.MenuItem.superclass.destroy.call(this,a)},within:function(a){if(mini.isAncestor(this.el,a.target)){return true}if(this.menu&&this.menu.within(a)){return true}return false},_getIconImg:function(){return this.img&&this.getTopMenu()?this.getTopMenu().imgPath+this.img:this.img},_doUpdateIcon:function(){var b=this._getIconImg();var a=!!(this.iconStyle||this.iconCls||this.checkOnClick||b);if(this._iconEl){mini.setStyle(this._iconEl,this.iconStyle);mini.addClass(this._iconEl,this.iconCls);if(b&&!this.checked){var c="background-image:url("+b+")";mini.setStyle(this._iconEl,c)}if(this.checked){jQuery(this._iconEl).css({"background-image":""})}this._iconEl.style.display=a?"block":"none"}if(this.iconPosition=="top"){mini.addClass(this.el,"mini-menuitem-icontop")}else{mini.removeClass(this.el,"mini-menuitem-icontop")}},_hasChildMenu:function(){return this.menu&&this.menu.items.length>0},doUpdate:function(){if(this._textEl){this._textEl.innerHTML=this.text}this._doUpdateIcon();if(this.checked){mini.addClass(this.el,this._checkedCls);jQuery(this._iconEl).css({"background-image":""})}else{mini.removeClass(this.el,this._checkedCls)}if(this.allowEl){if(this._hasChildMenu()){this.allowEl.style.display="block"}else{this.allowEl.style.display="none"}}},setText:function(a){this.text=a;if(this._textEl){this._textEl.innerHTML=this.text}},getText:function(){return this.text},setIconCls:function(a){mini.removeClass(this._iconEl,this.iconCls);this.iconCls=a;this._doUpdateIcon()},getIconCls:function(){return this.iconCls},setImg:function(a){this.img=a;this._doUpdateIcon()},getImg:function(){return this.img},setIconStyle:function(a){this.iconStyle=a;this._doUpdateIcon()},getIconStyle:function(){return this.iconStyle},setIconPosition:function(a){this.iconPosition=a;this._doUpdateIcon()},getIconPosition:function(){return this.iconPosition},setCheckOnClick:function(a){this.checkOnClick=a;if(a){mini.addClass(this.el,"mini-menuitem-showcheck")}else{mini.removeClass(this.el,"mini-menuitem-showcheck")}this.doUpdate()},getCheckOnClick:function(){return this.checkOnClick},setChecked:function(a){if(this.checked!=a){this.checked=a;this.doUpdate();this.fire("checkedchanged")}},getChecked:function(){return this.checked},setGroupName:function(a){if(this.groupName!=a){this.groupName=a}},getGroupName:function(){return this.groupName},setChildren:function(a){this.setMenu(a)},setMenu:function(a){if(mini.isArray(a)){a={type:"menu",items:a}}if(this.menu!==a){a.ownerItem=this;this.menu=mini.getAndCreate(a);this.menu.hide();this.menu.ownerItem=this;this.doUpdate();this.menu.on("itemschanged",this.__OnItemsChanged,this)}},getMenu:function(){return this.menu},showMenu:function(){if(this.menu&&this.menu.isDisplay()==false){this.menu.setHideAction("outerclick");var a={xAlign:"outright",yAlign:"top",outXAlign:"outleft",outYAlign:"below",popupCls:"mini-menu-popup"};if(this.ownerMenu&&this.ownerMenu.vertical==false){a.xAlign="left";a.yAlign="below";a.outXAlign=null}this.menu.showAtEl(this.el,a)}},hideMenu:function(){if(this.menu){this.menu.hide()}},hide:function(){this.hideMenu();this.setVisible(false)},__OnItemsChanged:function(a){this.doUpdate()},getTopMenu:function(){if(this.ownerMenu){if(this.ownerMenu.ownerItem){return this.ownerMenu.ownerItem.getTopMenu()}else{return this.ownerMenu}}return null},__OnClick:function(g){if(this.isReadOnly()){return}if(this.checkOnClick){if(this.ownerMenu&&this.groupName){var a=this.ownerMenu.getGroupItems(this.groupName);if(a.length>0){if(this.checked==false){for(var c=0,b=a.length;c<b;c++){var f=a[c];if(f!=this){f.setChecked(false)}}this.setChecked(true)}}else{this.setChecked(!this.checked)}}else{this.setChecked(!this.checked)}}this.fire("click");var d=this.getTopMenu();if(d){d._OnItemClick(this,g)}},__OnMouseUp:function(b){if(this.isReadOnly()){return}if(this.ownerMenu){var a=this;setTimeout(function(){if(a.isDisplay()){a.ownerMenu.showItemMenu(a)}},1)}},__OnMouseOver:function(a){if(this.isReadOnly()){return}this._initInputEvents();mini.addClass(this.el,this._hoverCls);this.el.title=this.text;if(this._textEl.scrollWidth>this._textEl.clientWidth){this.el.title=this.text}else{this.el.title=""}if(this.ownerMenu){if(this.ownerMenu.isVertical()==true){this.ownerMenu.showItemMenu(this)}else{if(this.ownerMenu.hasShowItemMenu()){this.ownerMenu.showItemMenu(this)}}}},__OnMouseOut:function(a){mini.removeClass(this.el,this._hoverCls)},onClick:function(b,a){this.on("click",b,a)},onCheckedChanged:function(b,a){this.on("checkedchanged",b,a)},getAttrs:function(b){var a=mini.MenuItem.superclass.getAttrs.call(this,b);var c=jQuery(b);a.text=b.innerHTML;mini._ParseString(b,a,["text","iconCls","iconStyle","iconPosition","groupName","onclick","oncheckedchanged"]);mini._ParseBool(b,a,["checkOnClick","checked"]);return a}});mini.regClass(mini.MenuItem,"menuitem");mini.Separator=function(){mini.Separator.superclass.constructor.call(this)};mini.extend(mini.Separator,mini.Control,{_clearBorder:false,uiCls:"mini-separator",_create:function(){this.el=document.createElement("span");this.el.className="mini-separator"}});mini.regClass(mini.Separator,"separator");mini.OutlookBar=function(){this._initGroups();mini.OutlookBar.superclass.constructor.call(this)};mini.extend(mini.OutlookBar,mini.Control,{width:180,expandOnLoad:true,activeIndex:-1,autoCollapse:false,groupCls:"",groupStyle:"",groupHeaderCls:"",groupHeaderStyle:"",groupBodyCls:"",groupBodyStyle:"",groupHoverCls:"",groupActiveCls:"",allowAnim:true,set:function(c){if(typeof c=="string"){return this}var b=this._allowLayout;this._allowLayout=false;var a=c.activeIndex;delete c.activeIndex;mini.OutlookBar.superclass.set.call(this,c);if(mini.isNumber(a)){this.setActiveIndex(a)}this._allowLayout=b;this.doLayout();return this},uiCls:"mini-outlookbar",_create:function(){this.el=document.createElement("div");this.el.className="mini-outlookbar";this.el.innerHTML='<div class="mini-outlookbar-border"></div>';this._borderEl=this.el.firstChild},_initEvents:function(){mini._BindEvents(function(){mini.on(this.el,"click",this.__OnClick,this)},this)},_createGroupId:function(a){return this.uid+"$"+a._id},_GroupId:1,_initGroups:function(){this.groups=[]},_createGroupEl:function(h){var b=this._createGroupId(h);var k='<div id="'+b+'" class="mini-outlookbar-group '+h.cls+'" style="'+h.style+'"><div class="mini-outlookbar-groupHeader '+h.headerCls+'" style="'+h.headerStyle+';"></div><div class="mini-outlookbar-groupBody '+h.bodyCls+'" style="'+h.bodyStyle+';"></div></div>';var c=mini.append(this._borderEl,k);var j=c.lastChild;var g=h.body;delete h.body;if(g){if(!mini.isArray(g)){g=[g]}for(var f=0,e=g.length;f<e;f++){var d=g[f];mini.append(j,d)}g.length=0}if(h.bodyParent){var a=h.bodyParent;while(a.firstChild){j.appendChild(a.firstChild)}}delete h.bodyParent;return c},createGroup:function(a){var b=mini.copyTo({_id:this._GroupId++,name:"",title:"",cls:"",style:"",iconCls:"",iconStyle:"",headerCls:"",headerStyle:"",bodyCls:"",bodyStyle:"",visible:true,enabled:true,showCollapseButton:true,expanded:this.expandOnLoad},a);return b},setGroups:function(a){if(!mini.isArray(a)){return}this.removeAll();for(var c=0,b=a.length;c<b;c++){this.addGroup(a[c])}},getGroups:function(){return this.groups},addGroup:function(e,a){if(typeof e=="string"){e={title:e}}e=this.createGroup(e);if(typeof a!="number"){a=this.groups.length}this.groups.insert(a,e);var c=this._createGroupEl(e);e._el=c;var a=this.groups.indexOf(e);var d=this.groups[a+1];if(d){var b=this.getGroupEl(d);jQuery(b).before(c)}this.doUpdate();return e},updateGroup:function(b,a){var b=this.getGroup(b);if(!b){return}mini.copyTo(b,a);this.doUpdate()},removeGroup:function(a){a=this.getGroup(a);if(!a){return}var b=this.getGroupEl(a);if(b){b.parentNode.removeChild(b)}this.groups.remove(a);this.doUpdate()},removeAll:function(){for(var a=this.groups.length-1;a>=0;a--){this.removeGroup(a)}},moveGroup:function(c,a){c=this.getGroup(c);if(!c){return}target=this.getGroup(a);var d=this.getGroupEl(c);this.groups.remove(c);if(target){a=this.groups.indexOf(target);this.groups.insert(a,c);var b=this.getGroupEl(target);jQuery(b).before(d)}else{this.groups.add(c);this._borderEl.appendChild(d)}this.doUpdate()},doUpdate:function(){for(var c=0,a=this.groups.length;c<a;c++){var f=this.groups[c];var h=f._el;var g=h.firstChild;var e=h.lastChild;var b='<div class="mini-outlookbar-icon '+f.iconCls+'" style="'+f.iconStyle+';"></div>';var d='<div class="mini-tools"><span class="mini-tools-collapse" style="'+(f.showCollapseButton?"":"display:none;")+'"></span></div>'+((f.iconStyle||f.iconCls)?b:"")+'<div class="mini-outlookbar-groupTitle">'+f.title+'</div><div style="clear:both;"></div>';g.innerHTML=d;if(f.enabled){mini.removeClass(h,"mini-disabled")}else{mini.addClass(h,"mini-disabled")}mini.addClass(h,f.cls);mini.setStyle(h,f.style);mini.addClass(e,f.bodyCls);mini.setStyle(e,f.bodyStyle);mini.addClass(g,f.headerCls);mini.setStyle(g,f.headerStyle);mini.removeClass(h,"mini-outlookbar-firstGroup");mini.removeClass(h,"mini-outlookbar-lastGroup");if(c==0){mini.addClass(h,"mini-outlookbar-firstGroup")}if(c==a-1){mini.addClass(h,"mini-outlookbar-lastGroup")}}this.doLayout()},doLayout:function(){if(!this.canLayout()){return}if(this._inAniming){return}this._doLayoutInner();for(var d=0,a=this.groups.length;d<a;d++){var k=this.groups[d];var c=k._el;var g=c.lastChild;if(k.expanded){mini.addClass(c,"mini-outlookbar-expand");mini.removeClass(c,"mini-outlookbar-collapse")}else{mini.removeClass(c,"mini-outlookbar-expand");mini.addClass(c,"mini-outlookbar-collapse")}g.style.height="auto";g.style.display=k.expanded?"block":"none";c.style.display=k.visible?"":"none";var h=mini.getWidth(c,true);var f=mini.getPaddings(g);var b=mini.getBorders(g);if(jQuery.boxModel){h=h-f.left-f.right-b.left-b.right}g.style.width=h+"px"}var j=this.isAutoHeight();var e=this.getActiveGroup();if(!j&&this.autoCollapse&&e){var c=this.getGroupEl(this.activeIndex);c.lastChild.style.height=this._getFillGroupBodyHeight()+"px"}else{}mini.layout(this._borderEl)},_doLayoutInner:function(){if(this.isAutoHeight()){this._borderEl.style.height="auto"}else{var b=this.getHeight(true);if(!jQuery.boxModel){var a=mini.getBorders(this._borderEl);b=b+a.top+a.bottom}if(b<0){b=0}this._borderEl.style.height=b+"px"}},_getFillGroupBodyHeight:function(){var g=jQuery(this.el).height();var o=mini.getBorders(this._borderEl);g=g-o.top-o.bottom;var k=this.getActiveGroup();var m=0;for(var f=0,b=this.groups.length;f<b;f++){var q=this.groups[f];var a=this.getGroupEl(q);if(q.visible==false||q==k){continue}var j=a.lastChild.style.display;a.lastChild.style.display="none";var n=jQuery(a).outerHeight();a.lastChild.style.display=j;var d=mini.getMargins(a);n=n+d.top+d.bottom;m+=n}g=g-m;var e=this.getGroupEl(this.activeIndex);if(!e){return 0}g=g-jQuery(e.firstChild).outerHeight();if(jQuery.boxModel){var p=mini.getPaddings(e.lastChild);var c=mini.getBorders(e.lastChild);g=g-p.top-p.bottom-c.top-c.bottom}var p=mini.getPaddings(e);var c=mini.getBorders(e);var d=mini.getMargins(e);g=g-d.top-d.bottom;g=g-p.top-p.bottom-c.top-c.bottom;if(g<0){g=0}return g},getGroup:function(b){if(typeof b=="object"){return b}if(typeof b=="number"){return this.groups[b]}else{for(var c=0,a=this.groups.length;c<a;c++){var d=this.groups[c];if(d.name==b){return d}}}},_getGroupById:function(d){for(var b=0,a=this.groups.length;b<a;b++){var c=this.groups[b];if(c._id==d){return c}}},getGroupEl:function(a){var b=this.getGroup(a);if(!b){return null}return b._el},getGroupBodyEl:function(a){var b=this.getGroupEl(a);if(b){return b.lastChild}return null},setAutoCollapse:function(a){this.autoCollapse=a},getAutoCollapse:function(){return this.autoCollapse},setExpandOnLoad:function(a){this.expandOnLoad=a},getExpandOnLoad:function(){return this.expandOnLoad},setActiveIndex:function(e){var c=this.activeIndex;var f=this.getGroup(e);var a=this.getGroup(this.activeIndex);var b=f!=a;if(f){this.activeIndex=this.groups.indexOf(f)}else{this.activeIndex=-1}var f=this.getGroup(this.activeIndex);if(f){var d=this.allowAnim;this.allowAnim=false;this.expandGroup(f);this.allowAnim=d}if(this.activeIndex==-1&&c!=-1){this.collapseGroup(c)}},getActiveIndex:function(){return this.activeIndex},getActiveGroup:function(){return this.getGroup(this.activeIndex)},showGroup:function(a){a=this.getGroup(a);if(!a||a.visible==true){return}a.visible=true;this.doUpdate()},hideGroup:function(a){a=this.getGroup(a);if(!a||a.visible==false){return}a.visible=false;this.doUpdate()},toggleGroup:function(a){a=this.getGroup(a);if(!a){return}if(a.expanded){this.collapseGroup(a)}else{this.expandGroup(a)}},collapseGroup:function(k){k=this.getGroup(k);if(!k){return}var i=k.expanded;var f=0;if(this.autoCollapse&&!this.isAutoHeight()){f=this._getFillGroupBodyHeight()}var a=false;k.expanded=false;var h=this.groups.indexOf(k);if(h==this.activeIndex){this.activeIndex=-1;a=true}var b=this.getGroupBodyEl(k);if(this.allowAnim&&i){this._inAniming=true;b.style.display="block";b.style.height="auto";if(this.autoCollapse&&!this.isAutoHeight()){b.style.height=f+"px"}var d={height:"1px"};mini.addClass(b,"mini-outlookbar-overflow");var g=this;var c=jQuery(b);c.animate(d,180,function(){g._inAniming=false;mini.removeClass(b,"mini-outlookbar-overflow");g.doLayout()})}else{this.doLayout()}var j={group:k,index:this.groups.indexOf(k),name:k.name};this.fire("Collapse",j);if(a){this.fire("activechanged")}},expandGroup:function(r){r=this.getGroup(r);if(!r){return}var p=r.expanded;r.expanded=true;this.activeIndex=this.groups.indexOf(r);fire=true;if(this.autoCollapse){for(var j=0,f=this.groups.length;j<f;j++){var m=this.groups[j];if(m.expanded&&m!=r){this.collapseGroup(m)}}}var a=this.getGroupBodyEl(r);if(this.allowAnim&&p==false){this._inAniming=true;a.style.display="block";if(this.autoCollapse&&!this.isAutoHeight()){var o=this._getFillGroupBodyHeight();a.style.height=(o)+"px"}else{a.style.height="auto"}var k=mini.getHeight(a);a.style.height="1px";var c={height:k+"px"};var d=a.style.overflow;a.style.overflow="hidden";mini.addClass(a,"mini-outlookbar-overflow");var n=this;var b=jQuery(a);b.animate(c,180,function(){a.style.overflow=d;mini.removeClass(a,"mini-outlookbar-overflow");n._inAniming=false;n.doLayout()})}else{this.doLayout()}var q={group:r,index:this.groups.indexOf(r),name:r.name};this.fire("Expand",q);if(fire){this.fire("activechanged")}},_tryToggleGroup:function(b){b=this.getGroup(b);if(b.enabled==false){return}var a={group:b,groupIndex:this.groups.indexOf(b),groupName:b.name,cancel:false};if(b.expanded){this.fire("BeforeCollapse",a);if(a.cancel==false){this.collapseGroup(b)}}else{this.fire("BeforeExpand",a);if(a.cancel==false){this.expandGroup(b)}}},_getGroupByEvent:function(c){var b=mini.findParent(c.target,"mini-outlookbar-group");if(!b){return null}var a=b.id.split("$");var d=a[a.length-1];return this._getGroupById(d)},__OnClick:function(c){if(this._inAniming){return}var b=mini.findParent(c.target,"mini-outlookbar-groupHeader");if(!b){return}var a=this._getGroupByEvent(c);if(!a){return}this._tryToggleGroup(a)},parseGroups:function(c){var a=[];for(var d=0,b=c.length;d<b;d++){var e=c[d];var f={};a.push(f);f.style=e.style.cssText;mini._ParseString(e,f,["name","title","cls","iconCls","iconStyle","headerCls","headerStyle","bodyCls","bodyStyle"]);mini._ParseBool(e,f,["visible","enabled","showCollapseButton","expanded"]);f.bodyParent=e}return a},getAttrs:function(c){var b=mini.OutlookBar.superclass.getAttrs.call(this,c);mini._ParseString(c,b,["onactivechanged","oncollapse","onexpand"]);mini._ParseBool(c,b,["autoCollapse","allowAnim","expandOnLoad"]);mini._ParseInt(c,b,["activeIndex"]);var a=mini.getChildNodes(c);b.groups=this.parseGroups(a);return b}});mini.regClass(mini.OutlookBar,"outlookbar");mini.OutlookMenu=function(){mini.OutlookMenu.superclass.constructor.call(this);this.data=[]};mini.extend(mini.OutlookMenu,mini.OutlookBar,{url:"",textField:"text",iconField:"iconCls",urlField:"url",resultAsTree:false,itemsField:"children",idField:"id",parentField:"pid",style:"width:100%;height:100%;",set:function(c){if(typeof c=="string"){return this}var b=c.url;delete c.url;var a=c.activeIndex;delete c.activeIndex;if(mini.isNumber(a)){this.activeIndex=a}mini.OutlookMenu.superclass.set.call(this,c);if(b){this.setUrl(b)}if(mini.isNumber(a)){this.setActiveIndex(a)}return this},uiCls:"mini-outlookmenu",destroy:function(a){this._destroyTrees();mini.OutlookMenu.superclass.destroy.call(this,a)},_destroyTrees:function(){if(this._menus){var c=this._menus.clone();for(var b=0,a=c.length;b<a;b++){var d=c[b];d.destroy()}this._menus.length=0}},_doParseFields:function(c){for(var b=0,a=c.length;b<a;b++){var d=c[b];d.text=d[this.textField];d.url=d[this.urlField];d.iconCls=d[this.iconField]}},_doLoad:function(){var a=[];try{a=mini._getResult(this.url,null,null,null,null,this.dataField)}catch(b){if(mini_debugger==true){alert("outlooktree json is error.")}}if(this.dataField&&!mini.isArray(a)){a=mini._getMap(this.dataField,a)}if(!a){a=[]}if(this.resultAsTree==false){a=mini.arrayToTree(a,this.itemsField,this.idField,this.parentField)}var c=mini.treeToArray(a,this.itemsField,this.idField,this.parentField);this._doParseFields(c);this.createNavBarMenu(a);this.fire("load")},loadList:function(c,b,d){b=b||this.idField;d=d||this.parentField;this._doParseFields(c);var a=mini.arrayToTree(c,this.nodesField,b,d);this.load(a)},load:function(b){if(typeof b=="string"){this.setUrl(b)}else{var a=mini.treeToArray(b,this.itemsField,this.idField,this.parentField);this._doParseFields(a);this.createNavBarMenu(b)}},setData:function(a){this.load(a)},setUrl:function(a){this.url=a;this._doLoad()},getUrl:function(){return this.url},setTextField:function(a){this.textField=a},getTextField:function(){return this.textField},setIconField:function(a){this.iconField=a},getIconField:function(){return this.iconField},setUrlField:function(a){this.urlField=a},getUrlField:function(){return this.urlField},setResultAsTree:function(a){this.resultAsTree=a},getResultAsTree:function(){return this.resultAsTree},setNodesField:function(a){this.nodesField=a},getNodesField:function(){return this.nodesField},setIdField:function(a){this.idField=a},getIdField:function(){return this.idField},setParentField:function(a){this.parentField=a},getParentField:function(){return this.parentField},_selected:null,getSelected:function(){return this._selected},selectNode:function(a){a=this.getNode(a);if(!a){if(this._selected){var b=this._getOwnerMenu(this._selected);if(b){b.setSelectedItem(null)}}return}var b=this._getOwnerMenu(a);if(!b){return}this.expandGroup(b._ownerGroup);setTimeout(function(){try{b.setSelectedItem(a)}catch(c){}},100)},findNodes:function(h,n){var a=[];n=n||this;for(var f=0,c=this._menus.length;f<c;f++){var g=this._menus[f].getItems();var b=[];for(var e=0,d=g.length;e<d;e++){var m=g[e];if(h&&h.call(n,m)===true){b.push(m)}}a.addRange(b)}return a},getNode:function(c){for(var b=0,a=this._menus.length;b<a;b++){var d=this._menus[b];var e=d.getItem(c);if(e){return e}}return null},getList:function(){var d=[];for(var c=0,a=this._menus.length;c<a;c++){var e=this._menus[c];var b=e.getItems();d.addRange(b)}return d},_getOwnerMenu:function(c){if(!c){return}for(var b=0,a=this._menus.length;b<a;b++){var d=this._menus[b];var e=d.getItem(c);if(e){return d}}},getAttrs:function(b){var a=mini.OutlookMenu.superclass.getAttrs.call(this,b);a.text=b.innerHTML;mini._ParseString(b,a,["url","textField","urlField","idField","parentField","itemsField","iconField","onitemclick","onitemselect","ondrawnode","imgPath"]);mini._ParseBool(b,a,["resultAsTree"]);return a},imgPath:"",setImgPath:function(a){this.imgPath=a},getImgPath:function(){return this.imgPath},autoCollapse:true,activeIndex:0,createNavBarMenu:function(b){this._destroyTrees();if(!mini.isArray(b)){b=[]}this.data=b;var a=[];for(var d=0,c=this.data.length;d<c;d++){var h=this.data[d];var f={};f.title=h.text;f.iconCls=h.iconCls;a.push(f);f._children=h[this.itemsField]}this.setGroups(a);this.setActiveIndex(this.activeIndex);this._menus=[];for(var d=0,c=this.groups.length;d<c;d++){var f=this.groups[d];var e=this.getGroupBodyEl(f);var g=new mini.Menu();g._ownerGroup=f;g.set({expanded:false,imgPath:this.imgPath,showNavArrow:false,style:"width:100%;height:100%;border:0;background:none",borderStyle:"border:0",allowSelectItem:true,items:f._children});g.render(e);g.on("itemclick",this.__OnItemClick,this);g.on("itemselect",this.__OnItemSelect,this);this._onDrawNodes(g.getItems());this._menus.push(g);delete f._children}},_onDrawNodes:function(b){if(!b){return}for(var c=0,a=b.length;c<a;c++){var d=b[c];var f={node:d,img:d.img,nodeHtml:""};this.fire("drawnode",f);if(f.img!=d.img&&d.setImg){d.setImg(f.img)}if(f.nodeHtml!=""){d.setText(f.nodeHtml)}}},__OnItemClick:function(b){var a={item:b.item,htmlEvent:b.htmlEvent};this.fire("itemclick",a)},__OnItemSelect:function(d){if(!d.item){return}for(var b=0,a=this._menus.length;b<a;b++){var f=this._menus[b];if(f!=d.sender){f.setSelectedItem(null)}}var c={item:d.item,htmlEvent:d.htmlEvent};this._selected=d.item;this.fire("itemselect",c)}});mini.regClass(mini.OutlookMenu,"outlookmenu");mini.OutlookTree=function(){mini.OutlookTree.superclass.constructor.call(this);this.data=[]};mini.extend(mini.OutlookTree,mini.OutlookBar,{url:"",textField:"text",iconField:"iconCls",urlField:"url",resultAsTree:false,nodesField:"children",idField:"id",parentField:"pid",style:"width:100%;height:100%;",set:function(c){if(typeof c=="string"){return this}var b=c.url;delete c.url;var a=c.activeIndex;delete c.activeIndex;mini.OutlookTree.superclass.set.call(this,c);if(b){this.setUrl(b)}if(mini.isNumber(a)){this.setActiveIndex(a)}return this},uiCls:"mini-outlooktree",destroy:function(a){this._destroyTrees(a);mini.OutlookTree.superclass.destroy.call(this,a)},_destroyTrees:function(d){if(this._trees){var c=this._trees.clone();for(var b=0,a=c.length;b<a;b++){var e=c[b];e.destroy(d)}this._trees.length=0}},_doParseFields:function(c){for(var b=0,a=c.length;b<a;b++){var d=c[b];d.text=d[this.textField];d.url=d[this.urlField];d.iconCls=d[this.iconField]}},_doLoad:function(){var a=[];try{a=mini._getResult(this.url,null,null,null,null,this.dataField)}catch(b){if(mini_debugger==true){alert("outlooktree json is error.")}}if(this.dataField&&!mini.isArray(a)){a=mini._getMap(this.dataField,a)}if(!a){a=[]}if(this.resultAsTree==false){a=mini.arrayToTree(a,this.nodesField,this.idField,this.parentField)}var c=mini.treeToArray(a,this.nodesField,this.idField,this.parentField);this._doParseFields(c);this.createNavBarTree(a);this.fire("load")},loadList:function(c,b,d){b=b||this.idField;d=d||this.parentField;this._doParseFields(c);var a=mini.arrayToTree(c,this.nodesField,b,d);this.load(a)},load:function(b){if(typeof b=="string"){this.setUrl(b)}else{var a=mini.treeToArray(b,this.itemsField,this.idField,this.parentField);this._doParseFields(a);this.createNavBarTree(b)}},setData:function(a){this.load(a)},getData:function(){return this.data},setUrl:function(a){this.url=a;this._doLoad()},getUrl:function(){return this.url},setTextField:function(a){this.textField=a},getTextField:function(){return this.textField},setIconField:function(a){this.iconField=a},getIconField:function(){return this.iconField},setUrlField:function(a){this.urlField=a},getUrlField:function(){return this.urlField},setResultAsTree:function(a){this.resultAsTree=a},getResultAsTree:function(){return this.resultAsTree},setNodesField:function(a){this.nodesField=a},getNodesField:function(){return this.nodesField},setIdField:function(a){this.idField=a},getIdField:function(){return this.idField},setParentField:function(a){this.parentField=a},getParentField:function(){return this.parentField},_selected:null,getSelected:function(){return this._selected},isSelectedNode:function(b){b=this.getNode(b);if(!b){return false}var a=this._getOwnerTree(b);if(!a){return false}return a.isSelectedNode(b)},selectNode:function(b){b=this.getNode(b);if(!b){return}var a=this._getOwnerTree(b);a.selectNode(b)},expandPath:function(b){b=this.getNode(b);if(!b){return}var a=this._getOwnerTree(b);a.expandPath(b);this.expandGroup(a._ownerGroup)},findNodes:function(f,e){var c=[];e=e||this;for(var d=0,b=this._trees.length;d<b;d++){var a=this._trees[d];var g=a.findNodes(f,e);c.addRange(g)}return c},getNode:function(d){for(var c=0,b=this._trees.length;c<b;c++){var a=this._trees[c];var e=a.getNode(d);if(e){return e}}return null},getList:function(){var e=[];for(var d=0,b=this._trees.length;d<b;d++){var a=this._trees[d];var c=a.getList();e.addRange(c)}return e},_getOwnerTree:function(d){if(!d){return}for(var c=0,b=this._trees.length;c<b;c++){var a=this._trees[c];if(a.getby_id(d._id)){return a}}},expandOnLoad:false,setExpandOnLoad:function(a){this.expandOnLoad=a},getExpandOnLoad:function(){return this.expandOnLoad},showArrow:false,setShowArrow:function(a){this.showArrow=a},getShowArrow:function(){return this.showArrow},_handlerTree:function(b){b.tree=b.sender;b.sender=this;var a="node"+b.type;if(b.type.indexOf("before")==0){a="beforenode"+b.type.replace("before","")}this.fire(a,b)},getAttrs:function(b){var a=mini.OutlookTree.superclass.getAttrs.call(this,b);a.text=b.innerHTML;mini._ParseString(b,a,["url","textField","urlField","idField","parentField","nodesField","iconField","onnodeclick","onnodeselect","onnodemousedown","ondrawnode","expandOnLoad","imgPath","onbeforenodeexpand","onnodeexpand","onbeforenodecollapse","onnodecollapse"]);mini._ParseBool(b,a,["resultAsTree","showArrow"]);if(a.expandOnLoad){var c=parseInt(a.expandOnLoad);if(mini.isNumber(c)){a.expandOnLoad=c}else{a.expandOnLoad=a.expandOnLoad=="true"?true:false}}return a},imgPath:"",setImgPath:function(a){this.imgPath=a},getImgPath:function(){return this.imgPath},autoCollapse:true,activeIndex:0,createNavBarTree:function(b){this._destroyTrees();var f=this;if(!mini.isArray(b)){b=[]}this.data=b;var a=[];for(var d=0,c=this.data.length;d<c;d++){var h=this.data[d];var g={};g.title=h.text;g.iconCls=h.iconCls;a.push(g);g._children=h[this.nodesField]}this.setGroups(a);this.setActiveIndex(this.activeIndex);this._trees=[];for(var d=0,c=this.groups.length;d<c;d++){var g=this.groups[d];var e=this.getGroupBodyEl(g);var b=new mini.Tree();b.set({showArrow:this.showArrow,imgPath:this.imgPath,idField:this.idField,parentField:this.parentField,textField:this.textField,expandOnLoad:this.expandOnLoad,showTreeIcon:true,style:"width:100%;height:100%;border:0;background:none",data:g._children,onbeforeload:function(i){i.url=f.url}});b.render(e);b.on("nodeclick",this.__OnNodeClick,this);b.on("nodeselect",this.__OnNodeSelect,this);b.on("nodemousedown",this.__OnNodeMouseDown,this);b.on("drawnode",this.__OnDrawNode,this);b.on("beforeexpand",this._handlerTree,this);b.on("beforecollapse",this._handlerTree,this);b.on("expand",this._handlerTree,this);b.on("collapse",this._handlerTree,this);this._trees.push(b);delete g._children;b._ownerGroup=g}},__OnNodeMouseDown:function(b){var a={node:b.node,isLeaf:b.sender.isLeaf(b.node),htmlEvent:b.htmlEvent};this.fire("nodemousedown",a)},__OnNodeClick:function(b){var a={node:b.node,isLeaf:b.sender.isLeaf(b.node),htmlEvent:b.htmlEvent};this.fire("nodeclick",a)},__OnNodeSelect:function(f){if(!f.node){return}for(var c=0,b=this._trees.length;c<b;c++){var a=this._trees[c];if(a!=f.sender){a.selectNode(null)}}var d={node:f.node,isLeaf:f.sender.isLeaf(f.node),htmlEvent:f.htmlEvent};this._selected=f.node;this.fire("nodeselect",d)},__OnDrawNode:function(a){this.fire("drawnode",a)}});mini.regClass(mini.OutlookTree,"outlooktree");mini.NavBar=function(){mini.NavBar.superclass.constructor.call(this)};mini.extend(mini.NavBar,mini.OutlookBar,{uiCls:"mini-navbar"});mini.regClass(mini.NavBar,"navbar");mini.NavBarMenu=function(){mini.NavBarMenu.superclass.constructor.call(this)};mini.extend(mini.NavBarMenu,mini.OutlookMenu,{uiCls:"mini-navbarmenu"});mini.regClass(mini.NavBarMenu,"navbarmenu");mini.NavBarTree=function(){mini.NavBarTree.superclass.constructor.call(this)};mini.extend(mini.NavBarTree,mini.OutlookTree,{uiCls:"mini-navbartree"});mini.regClass(mini.NavBarTree,"navbartree");mini.ToolBar=function(){mini.ToolBar.superclass.constructor.call(this)};mini.extend(mini.ToolBar,mini.Container,{_clearBorder:false,style:"",uiCls:"mini-toolbar",_create:function(){this.el=document.createElement("div");this.el.className="mini-toolbar"},_initEvents:function(){},doLayout:function(){if(!this.canLayout()){return}var b=mini.getChildNodes(this.el,true);for(var c=0,a=b.length;c<a;c++){mini.layout(b[c])}},set_bodyParent:function(a){if(!a){return}this.el=a;this.doLayout()},getAttrs:function(el){var attrs={};mini._ParseString(el,attrs,["id","borderStyle","data-options"]);this.el=el;this.el.uid=this.uid;this.addCls(this.uiCls);var options=attrs["data-options"];if(options){options=eval("("+options+")");if(options){mini.copyTo(attrs,options)}}return attrs}});mini.regClass(mini.ToolBar,"toolbar");mini.Pager=function(){mini.Pager.superclass.constructor.call(this)};mini.extend(mini.Pager,mini.Control,{pageIndex:0,pageSize:10,totalCount:0,totalPage:0,showPageIndex:true,showPageSize:true,showTotalCount:true,showPageInfo:true,showReloadButton:true,_clearBorder:false,showButtonText:false,showButtonIcon:true,firstText:"��ҳ",prevText:"��һҳ",nextText:"��һҳ",lastText:"βҳ",pageInfoText:"ÿҳ {0} ��, �� {1} ��",sizeList:[10,20,50,100],set:function(b){if(typeof b=="string"){return this}var a=b.pageIndex;delete b.pageIndex;mini.Pager.superclass.set.call(this,b);if(!mini.isNull(a)){this.setPageIndex(a)}return this},uiCls:"mini-pager",_create:function(){this.el=document.createElement("div");this.el.className="mini-pager";var b='<div class="mini-pager-left"><table cellspacing="0" cellpadding="0" border="0"><tr><td></td><td></td></tr></table></div><div class="mini-pager-right"></div>';this.el.innerHTML=b;this._leftEl=this.el.childNodes[0];this._rightEl=this.el.childNodes[1];var a=this._leftEl.getElementsByTagName("td");this._barEl=a[0];this._barEl2=a[1];this.sizeEl=mini.append(this._barEl,'<span class="mini-pager-size"></span>');this.sizeCombo=new mini.ComboBox();this.sizeCombo.setName("pagesize");this.sizeCombo.setWidth(this.pageSizeWidth);this.sizeCombo.render(this.sizeEl);mini.append(this.sizeEl,'<span class="separator"></span>');this.firstButton=new mini.Button();this.firstButton.render(this._barEl);this.prevButton=new mini.Button();this.prevButton.render(this._barEl);this.indexEl=document.createElement("span");this.indexEl.className="mini-pager-index";this.indexEl.innerHTML='<input id="" type="text" class="mini-pager-num"/><span class="mini-pager-pages">/ 0</span>';this._barEl.appendChild(this.indexEl);this.numInput=this.indexEl.firstChild;this.pagesLabel=this.indexEl.lastChild;this.nextButton=new mini.Button();this.nextButton.render(this._barEl);this.lastButton=new mini.Button();this.lastButton.render(this._barEl);mini.append(this._barEl,'<span class="separator"></span>');this.reloadButton=new mini.Button();this.reloadButton.render(this._barEl);this.firstButton.setPlain(true);this.prevButton.setPlain(true);this.nextButton.setPlain(true);this.lastButton.setPlain(true);this.reloadButton.setPlain(true);this.buttonsEl=mini.append(this._barEl2,'<div class="mini-page-buttons"></div>');this.update()},setButtons:function(a){__mini_setControls(a,this.buttonsEl,this)},getButtonsEl:function(){return this.buttonsEl},destroy:function(a){if(this.pageSelect){mini.clearEvent(this.pageSelect);this.pageSelect=null}if(this.numInput){mini.clearEvent(this.numInput);this.numInput=null}this.sizeEl=null;this._leftEl=null;mini.Pager.superclass.destroy.call(this,a)},_initEvents:function(){mini.Pager.superclass._initEvents.call(this);this.firstButton.on("click",function(c){this._OnPageChanged(0)},this);this.prevButton.on("click",function(c){this._OnPageChanged(this.pageIndex-1)},this);this.nextButton.on("click",function(c){this._OnPageChanged(this.pageIndex+1)},this);this.lastButton.on("click",function(c){this._OnPageChanged(this.totalPage)},this);this.reloadButton.on("click",function(c){this._OnPageChanged()},this);function a(){if(b){return}b=true;var c=parseInt(this.numInput.value);if(isNaN(c)){this.update()}else{this._OnPageChanged(c-1)}setTimeout(function(){b=false},100)}var b=false;mini.on(this.numInput,"change",function(c){a.call(this)},this);mini.on(this.numInput,"keydown",function(c){if(c.keyCode==13){a.call(this);c.stopPropagation()}},this);this.sizeCombo.on("valuechanged",this.__OnPageSelectChanged,this)},doLayout:function(){if(!this.canLayout()){return}mini.layout(this._leftEl);mini.layout(this._rightEl)},setPageIndex:function(a){if(isNaN(a)){return}this.pageIndex=a;this.update()},getPageIndex:function(){return this.pageIndex},setPageSize:function(a){if(isNaN(a)){return}this.pageSize=a;this.update()},getPageSize:function(){return this.pageSize},setTotalCount:function(a){a=parseInt(a);if(isNaN(a)){return}this.totalCount=a;this.update()},getTotalCount:function(){return this.totalCount},setSizeList:function(a){if(!mini.isArray(a)){return}this.sizeList=a;this.update()},getSizeList:function(){return this.sizeList},pageSizeWidth:50,setPageSizeWidth:function(a){a=parseInt(a);if(isNaN(a)){return}if(this.pageSizeWidth!=a){this.pageSizeWidth=a;this.sizeCombo.setWidth(a)}},getPageSizeWidth:function(){return this.pageSizeWidth},setShowPageSize:function(a){this.showPageSize=a;this.update()},getShowPageSize:function(){return this.showPageSize},setShowPageIndex:function(a){this.showPageIndex=a;this.update()},getShowPageIndex:function(){return this.showPageIndex},setShowTotalCount:function(a){this.showTotalCount=a;this.update()},getShowTotalCount:function(){return this.showTotalCount},setShowPageInfo:function(a){this.showPageInfo=a;this.update()},getShowPageInfo:function(){return this.showPageInfo},setShowReloadButton:function(a){this.showReloadButton=a;this.update()},getShowReloadButton:function(){return this.showReloadButton},getTotalPage:function(){return this.totalPage},update:function(e,p,j){if(mini.isNumber(e)){this.pageIndex=parseInt(e)}if(mini.isNumber(p)){this.pageSize=parseInt(p)}if(mini.isNumber(j)){this.totalCount=parseInt(j)}this.totalPage=parseInt(this.totalCount/this.pageSize)+1;if((this.totalPage-1)*this.pageSize==this.totalCount){this.totalPage-=1}if(this.totalCount==0){this.totalPage=0}if(this.pageIndex>this.totalPage-1){this.pageIndex=this.totalPage-1}if(this.pageIndex<=0){this.pageIndex=0}if(this.totalPage<=0){this.totalPage=0}this.firstButton.enable();this.prevButton.enable();this.nextButton.enable();this.lastButton.enable();if(this.pageIndex==0){this.firstButton.disable();this.prevButton.disable()}if(this.pageIndex>=this.totalPage-1){this.nextButton.disable();this.lastButton.disable()}this.numInput.value=this.pageIndex>-1?this.pageIndex+1:0;this.pagesLabel.innerHTML="/ "+this.totalPage;var k=this.sizeList.clone();if(k.indexOf(this.pageSize)==-1){k.push(this.pageSize);k=k.sort(function(l,i){return l>i})}var o=[];for(var b=0,a=k.length;b<a;b++){var d=k[b];var c={};c.text=d;c.id=d;o.push(c)}this.sizeCombo.setData(o);this.sizeCombo.setValue(this.pageSize);var f=this.firstText,h=this.prevText,n=this.nextText,g=this.lastText;if(this.showButtonText==false){f=h=n=g=""}this.firstButton.setText(f);this.prevButton.setText(h);this.nextButton.setText(n);this.lastButton.setText(g);var f=this.firstText,h=this.prevText,n=this.nextText,g=this.lastText;if(this.showButtonText==true){f=h=n=g=""}this.firstButton.setTooltip(f);this.prevButton.setTooltip(h);this.nextButton.setTooltip(n);this.lastButton.setTooltip(g);this.firstButton.setIconCls(this.showButtonIcon?"mini-pager-first":"");this.prevButton.setIconCls(this.showButtonIcon?"mini-pager-prev":"");this.nextButton.setIconCls(this.showButtonIcon?"mini-pager-next":"");this.lastButton.setIconCls(this.showButtonIcon?"mini-pager-last":"");this.reloadButton.setIconCls(this.showButtonIcon?"mini-pager-reload":"");this.reloadButton.setVisible(this.showReloadButton);var m=this.reloadButton.el.previousSibling;if(m){m.style.display=this.showReloadButton?"":"none"}this._rightEl.innerHTML=String.format(this.pageInfoText,this.pageSize,this.totalCount);this.indexEl.style.display=this.showPageIndex?"":"none";this.sizeEl.style.display=this.showPageSize?"":"none";this._rightEl.style.display=this.showPageInfo?"":"none"},__OnPageSelectChanged:function(b){var a=parseInt(this.sizeCombo.getValue());this._OnPageChanged(0,a)},_OnPageChanged:function(a,b){var c={pageIndex:mini.isNumber(a)?a:this.pageIndex,pageSize:mini.isNumber(b)?b:this.pageSize,cancel:false};if(c.pageIndex>this.totalPage-1){c.pageIndex=this.totalPage-1}if(c.pageIndex<0){c.pageIndex=0}this.fire("beforepagechanged",c);if(c.cancel==true){return}this.fire("pagechanged",c);this.update(c.pageIndex,c.pageSize)},onPageChanged:function(b,a){this.on("pagechanged",b,a)},getAttrs:function(el){var attrs=mini.Pager.superclass.getAttrs.call(this,el);mini._ParseString(el,attrs,["onpagechanged","sizeList","onbeforepagechanged","buttons"]);mini._ParseBool(el,attrs,["showPageIndex","showPageSize","showTotalCount","showPageInfo","showReloadButton"]);mini._ParseInt(el,attrs,["pageIndex","pageSize","totalCount","pageSizeWidth"]);if(typeof attrs.sizeList=="string"){attrs.sizeList=eval(attrs.sizeList)}if(attrs.buttons){attrs.buttons=mini.byId(attrs.buttons)}return attrs}});mini.regClass(mini.Pager,"pager");mini.DataBinding=function(){this._bindFields=[];this._bindForms=[];mini.DataBinding.superclass.constructor.call(this)};mini.extend(mini.DataBinding,mini.Component,{bindField:function(d,a,c,e,b){d=mini.get(d);a=mini.get(a);if(!d||!a||!c){return}var f={control:d,source:a,field:c,convert:b,mode:e};this._bindFields.push(f);a.on("currentchanged",this.__OnCurrentChanged,this);d.on("valuechanged",this.__OnValueChanged,this)},bindForm:function(d,e,h,g){d=mini.byId(d);e=mini.get(e);if(!d||!e){return}var d=new mini.Form(d);var b=d.getFields();for(var c=0,a=b.length;c<a;c++){var f=b[c];this.bindField(f,e,f.getName(),h,g)}},__OnCurrentChanged:function(g){if(this._doSetting){return}this._doSetting=true;this._currentRecord=g.record;var a=g.sender;var f=g.record;for(var d=0,b=this._bindFields.length;d<b;d++){var h=this._bindFields[d];if(h.source!=a){continue}var c=h.control;var k=h.field;if(c.setValue){if(f){var m=f[k];c.setValue(m)}else{c.setValue("")}}if(c.setText&&c.textName){if(f){c.setText(f[c.textName])}else{c.setText("")}}}var j=this;setTimeout(function(){j._doSetting=false},10)},__OnValueChanged:function(g){if(this._doSetting){return}this._doSetting=true;var d=g.sender;var m=d.getValue();for(var f=0,b=this._bindFields.length;f<b;f++){var j=this._bindFields[f];if(j.control!=d||j.mode===false){continue}var a=j.source;var h=this._currentRecord;if(!h){continue}var c={};c[j.field]=m;if(d.getText&&d.textName){c[d.textName]=d.getText()}a.updateRow(h,c)}var k=this;setTimeout(function(){k._doSetting=false},10)}});mini.regClass(mini.DataBinding,"databinding");mini.DataSet=function(){this._sources={};this._data={};this._links=[];this._originals={};mini.DataSet.superclass.constructor.call(this)};mini.extend(mini.DataSet,mini.Component,{add:function(a,b){if(!a||!b){return}this._sources[a]=b;this._data[a]=[];b._set_autoCreateNewID(true);b._set_originalIdField(b.getIdField());b._set_clearOriginals(false);b.on("addrow",this.__OnRowChanged,this);b.on("updaterow",this.__OnRowChanged,this);b.on("deleterow",this.__OnRowChanged,this);b.on("removerow",this.__OnRowChanged,this);b.on("preload",this.__OnDataPreLoad,this);b.on("selectionchanged",this.__OnDataSelectionChanged,this)},addLink:function(b,a,d){if(!b||!a||!d){return}if(!this._sources[b]||!this._sources[a]){return}var c={parentName:b,childName:a,parentField:d};this._links.push(c)},clearData:function(){this._data={};this._originals={};for(var a in this._sources){this._data=[]}},getData:function(){return this._data},_getNameByListControl:function(b){for(var a in this._sources){var d=this._sources[a];if(d==b){return a}}},_getRecord:function(d,b,c){var f=this._data[d];if(!f){return false}for(var e=0,a=f.length;e<a;e++){var g=f[e];if(g[c]==b[c]){return g}}return null},__OnRowChanged:function(i){var f=i.type;var b=i.record;var d=this._getNameByListControl(i.sender);var c=this._getRecord(d,b,i.sender.getIdField());var g=this._data[d];if(c){var g=this._data[d];g.remove(c)}if(f=="removerow"&&b._state=="added"){}else{g.push(b)}this._originals[d]=i.sender._get_originals();if(b._state=="added"){var a=this._getParentSource(i.sender);if(a){var h=a.getSelected();if(h){b._parentId=h[a.getIdField()]}else{g.remove(b)}}}},__OnDataPreLoad:function(m){var b=m.sender;var c=this._getNameByListControl(b);var d=m.sender.getIdField();var s=this._data[c];var p={};for(var h=0,g=s.length;h<g;h++){var r=s[h];p[r[d]]=r}var j=this._originals[c];if(j){b._set_originals(j)}var a=m.data||[];for(var h=0,g=a.length;h<g;h++){var r=a[h];var f=p[r[d]];if(f){delete f._uid;mini.copyTo(r,f)}}var o=this._getParentSource(b);if(b.getPageIndex&&b.getPageIndex()==0){var n=[];for(var h=0,g=s.length;h<g;h++){var r=s[h];if(r._state=="added"){if(o){var k=o.getSelected();if(k&&k[o.getIdField()]==r._parentId){n.push(r)}}else{n.push(r)}}}n.reverse();a.insertRange(0,n)}var q=[];for(var h=a.length-1;h>=0;h--){var r=a[h];var f=p[r[d]];if(f&&f._state=="removed"){a.removeAt(h);q.push(f)}}},_getParentSource:function(e){var b=this._getNameByListControl(e);for(var c=0,a=this._links.length;c<a;c++){var d=this._links[c];if(d.childName==b){return this._sources[d.parentName]}}},_getLinks:function(f){var c=this._getNameByListControl(f);var b=[];for(var d=0,a=this._links.length;d<a;d++){var e=this._links[d];if(e.parentName==c){b.push(e)}}return b},__OnDataSelectionChanged:function(g){var b=g.sender;var f=b.getSelected();var k=this._getLinks(b);for(var d=0,c=k.length;d<c;d++){var j=k[d];var a=this._sources[j.childName];if(f){var h={};h[j.parentField]=f[b.getIdField()];a.load(h)}else{a.loadData([])}}}});mini.regClass(mini.DataSet,"dataset");if(typeof mini_doload=="undefined"){mini_doload=function(a){}}mini.DataSource=function(){mini.DataSource.superclass.constructor.call(this);this._init()};mini.extend(mini.DataSource,mini.Component,{idField:"id",textField:"text",_originalIdField:"_id",_clearOriginals:true,_autoCreateNewID:false,_init:function(){this.source=[];this.dataview=[];this.visibleRows=null;this._ids={};this._removeds=[];if(this._clearOriginals){this._originals={}}this._errors={};this._selected=null;this._selecteds=[];this._idSelecteds={};this.__changeCount=0},getSource:function(){return this.source},getList:function(){return this.source.clone()},getDataView:function(){return this.dataview.clone()},getVisibleRows:function(){if(!this.visibleRows){this.visibleRows=this.getDataView().clone()}return this.visibleRows},setData:function(a){this.loadData(a)},loadData:function(a){if(!mini.isArray(a)){a=[]}this._init();this._doLoadData(a);this._dataChanged();this.fire("loaddata");return true},_doLoadData:function(f){this.source=f;this.dataview=f;var e=this.source,d=this._ids;for(var c=0,b=e.length;c<b;c++){var a=e[c];a._id=mini.DataSource.RecordId++;d[a._id]=a;a._uid=a._id}},clearData:function(){this._init();this._dataChanged();this.fire("cleardata")},clear:function(){this.clearData()},updateRecord:function(a,g,e){if(mini.isNull(a)){return}var d=mini._getMap,c=mini._setMap;this.fire("beforeupdate",{record:a});if(typeof g=="string"){var b=d(g,a);if(mini.isEquals(b,e)){return false}this.beginChange();c(g,e,a);this._setModified(a,g,b);this.endChange()}else{this.beginChange();for(var f in g){var b=d(f,a);var e=g[f];if(mini.isEquals(b,e)){continue}c(f,e,a);this._setModified(a,f,b)}this.endChange()}this.fire("update",{record:a})},deleteRecord:function(a){this._setDeleted(a);this._dataChanged();this.fire("delete",{record:a})},getby_id:function(a){a=typeof a=="object"?a._id:a;return this._ids[a]},getbyId:function(g){var d=typeof g;if(d=="number"){return this.getAt(g)}if(typeof g=="object"){if(this.getby_id(g)){return g}g=g[this.idField]}var e=this.getList();g=String(g);for(var c=0,a=e.length;c<a;c++){var f=e[c];var b=!mini.isNull(f[this.idField])?String(f[this.idField]):null;if(b==g){return f}}return null},getsByIds:function(f){if(mini.isNull(f)){f=""}f=String(f);var b=[];var d=String(f).split(",");for(var c=0,a=d.length;c<a;c++){var e=this.getbyId(d[c]);if(e){b.push(e)}}return b},getRecord:function(a){return this.getRow(a)},getRow:function(a){var b=typeof a;if(b=="string"){return this.getbyId(a)}else{if(b=="number"){return this.getAt(a)}else{if(b=="object"){return a}}}},delimiter:",",getValueAndText:function(e,d){if(mini.isNull(e)){e=[]}d=d||this.delimiter;if(typeof e=="string"||typeof e=="number"){e=this.getsByIds(e)}else{if(!mini.isArray(e)){e=[e]}}var c=[];var g=[];for(var f=0,b=e.length;f<b;f++){var a=e[f];if(a){c.push(this.getItemValue(a));g.push(this.getItemText(a))}}return[c.join(d),g.join(d)]},getItemValue:function(b){if(!b){return""}var a=mini._getMap(this.idField,b);return mini.isNull(a)?"":String(a)},getItemText:function(b){if(!b){return""}var a=mini._getMap(this.textField,b);return mini.isNull(a)?"":String(a)},isModified:function(a,c){var b=this._originals[a[this._originalIdField]];if(!b){return false}if(mini.isNull(c)){return false}return b.hasOwnProperty(c)},hasRecord:function(a){return !!this.getby_id(a)},findRecords:function(k,j){var g=typeof k=="function";var h=k;var m=j||this;var d=this.source;var b=[];for(var e=0,c=d.length;e<c;e++){var a=d[e];if(g){var f=h.call(m,a);if(f==true){b[b.length]=a}if(f===1){break}}else{if(a[k]==j){b[b.length]=a}}}return b},findRecord:function(c,b){var a=this.findRecords(c,b);return a[0]},each:function(b,a){var c=this.getDataView().clone();a=a||this;mini.forEach(c,b,a)},getCount:function(){return this.getDataView().length},setIdField:function(a){this.idField=a},setTextField:function(a){this.textField=a},__changeCount:0,beginChange:function(){this.__changeCount++},endChange:function(a){this.__changeCount--;if(this.__changeCount<0){this.__changeCount=0}if((a!==false&&this.__changeCount==0)||a==true){this.__changeCount=0;this._dataChanged()}},_dataChanged:function(){this.visibleRows=null;if(this.__changeCount==0){this.fire("datachanged")}},_setAdded:function(a){a._id=mini.DataSource.RecordId++;if(this._autoCreateNewID&&!a[this.idField]){a[this.idField]=UUID()}a._uid=a._id;a._state="added";this._ids[a._id]=a;delete this._originals[a[this._originalIdField]]},_setModified:function(a,d,b){if(a._state!="added"&&a._state!="deleted"&&a._state!="removed"){a._state="modified";var c=this._getOriginal(a);if(!c.hasOwnProperty(d)){c[d]=b}}},_setDeleted:function(a){if(a._state!="added"&&a._state!="deleted"&&a._state!="removed"){a._state="deleted"}},_setRemoved:function(a){delete this._ids[a._id];if(a._state!="added"&&a._state!="removed"){a._state="removed";delete this._originals[a[this._originalIdField]];this._removeds.push(a)}},_getOriginal:function(a){var b=a[this._originalIdField];var c=this._originals[b];if(!c){c=this._originals[b]={}}return c},_selected:null,_selecteds:[],_idSelecteds:null,multiSelect:false,isSelected:function(a){if(!a){return false}if(typeof a!="string"){a=a._id}return !!this._idSelecteds[a]},setSelected:function(a){a=this.getby_id(a);var b=this.getSelected();if(b!=a){this._selected=a;if(a){this.select(a)}else{this.deselect(this.getSelected())}this._OnCurrentChanged(a)}},getSelected:function(){if(this.isSelected(this._selected)){return this._selected}return this._selecteds[0]},setCurrent:function(a){this.setSelected(a)},getCurrent:function(){return this.getSelected()},getSelecteds:function(){return this._selecteds.clone()},select:function(a,b){if(mini.isNull(a)){return}this.selects([a],b)},deselect:function(a,b){if(mini.isNull(a)){return}this.deselects([a],b)},selectAll:function(a){this.selects(this.getList())},deselectAll:function(a){this.deselects(this.getList())},_fireSelect:function(a,b){var c={record:a,cancel:false};this.fire(b,c);return !c.cancel},selects:function(c,e){if(!mini.isArray(c)){return}c=c.clone();if(this.multiSelect==false){this.deselects(this.getSelecteds());if(c.length>0){c.length=1}this._selecteds=[];this._idSelecteds={}}var f=[];for(var d=0,b=c.length;d<b;d++){var a=this.getbyId(c[d]);if(!a){continue}if(!this.isSelected(a)){if(e!==false){if(!this._fireSelect(a,"beforeselect")){continue}}this._selecteds.push(a);this._idSelecteds[a._id]=a;f.push(a);if(e!==false){this.fire("select",{record:a})}}}this._OnSelectionChanged(c,true,f,e)},deselects:function(c,e){if(!mini.isArray(c)){return}c=c.clone();var g=[];for(var d=c.length-1;d>=0;d--){var b=this.getbyId(c[d]);if(!b){continue}if(this.isSelected(b)){if(e!==false){if(!this._fireSelect(b,"beforedeselect")){continue}}delete this._idSelecteds[b._id];g.push(b)}}this._selecteds=[];var a=this._idSelecteds;for(var d in a){var f=a[d];if(f._id){this._selecteds.push(f)}}for(var d=c.length-1;d>=0;d--){var b=this.getbyId(c[d]);if(!b){continue}if(e!==false){this.fire("deselect",{record:b})}}this._OnSelectionChanged(c,false,g,e)},_OnSelectionChanged:function(b,a,h,d){var g={fireEvent:d,records:b,select:a,selected:this.getSelected(),selecteds:this.getSelecteds(),_records:h};this.fire("SelectionChanged",g);var f=this._current;var c=this.getCurrent();if(f!=c){this._current=c;this._OnCurrentChanged(c)}},_OnCurrentChanged:function(a){if(this._currentTimer){clearTimeout(this._currentTimer)}var b=this;this._currentTimer=setTimeout(function(){b._currentTimer=null;var c={record:a};b.fire("CurrentChanged",c)},30)},_checkSelecteds:function(){for(var b=this._selecteds.length-1;b>=0;b--){var a=this._selecteds[b];var c=this.getby_id(a._id);if(!c){this._selecteds.removeAt(b);delete this._idSelecteds[a._id]}}if(this._selected&&this.getby_id(this._selected._id)==null){this._selected=null}},setMultiSelect:function(a){if(this.multiSelect!=a){this.multiSelect=a;if(a==false){}}},getMultiSelect:function(){return this.multiSelect},selectPrev:function(){var a=this.getSelected();if(!a){a=this.getAt(0)}else{var b=this.indexOf(a);a=this.getAt(b-1)}if(a){this.deselectAll();this.select(a);this.setCurrent(a)}},selectNext:function(){var a=this.getSelected();if(!a){a=this.getAt(0)}else{var b=this.indexOf(a);a=this.getAt(b+1)}if(a){this.deselectAll();this.select(a);this.setCurrent(a)}},selectFirst:function(){var a=this.getAt(0);if(a){this.deselectAll();this.select(a);this.setCurrent(a)}},selectLast:function(){var b=this.getVisibleRows();var a=this.getAt(b.length-1);if(a){this.deselectAll();this.select(a);this.setCurrent(a)}},getSelectedsId:function(b){var a=this.getSelecteds();var c=this.getValueAndText(a,b);return c[0]},getSelectedsText:function(b){var a=this.getSelecteds();var c=this.getValueAndText(a,b);return c[1]},_filterInfo:null,_sortInfo:null,filter:function(b,a){if(typeof b!="function"){return}a=a||this;this._filterInfo=[b,a];this._doFilter();this._doSort();this._dataChanged();this.fire("filter")},clearFilter:function(){if(!this._filterInfo){return}this._filterInfo=null;this._doFilter();this._doSort();this._dataChanged();this.fire("filter")},sort:function(c,b,a){if(typeof c!="function"){return}b=b||this;this._sortInfo=[c,b,a];this._doSort();this._dataChanged();this.fire("sort")},clearSort:function(){this._sortInfo=null;this.sortField=this.sortOrder="";this._doFilter();this._dataChanged();if(this.sortMode=="server"){var a=this.getLoadParams();a.sortField="";a.sortOrder="";this.load(a)}else{}this.fire("filter")},_doClientSortField:function(b,d,a){var e=this._getSortFnByField(b,a);if(!e){return}this.sortField=b;this.sortOrder=d;var c=d=="desc";this.sort(e,this,c)},_getSortFnByField:function(c,d){if(!c){return null}var b=null;var a=mini.sortTypes[d];if(!a){a=mini.sortTypes.string}function e(h,f){var g=mini._getMap(c,h),i=mini._getMap(c,f);var k=mini.isNull(g)||g==="";var j=mini.isNull(i)||i==="";if(k){return -1}if(j){return 1}var m=a(g);var l=a(i);if(m>l){return 1}else{if(m==l){return 0}else{return -1}}}b=e;return b},ajaxOptions:null,autoLoad:false,url:"",pageSize:10,pageIndex:0,totalCount:0,totalPage:0,sortField:"",sortOrder:"",loadParams:null,getLoadParams:function(){return this.loadParams||{}},sortMode:"server",pageIndexField:"pageIndex",pageSizeField:"pageSize",sortFieldField:"sortField",sortOrderField:"sortOrder",totalField:"total",dataField:"data",startField:"",limitField:"",errorField:"error",errorMsgField:"errorMsg",stackTraceField:"stackTrace",load:function(e,d,b,a){if(typeof e=="string"){this.setUrl(e);return}if(this._loadTimer){clearTimeout(this._loadTimer)}this.loadParams=e||{};if(!mini.isNumber(this.loadParams.pageIndex)){this.loadParams.pageIndex=0}if(this._xhr){this._xhr.abort()}if(this.ajaxAsync){var c=this;this._loadTimer=setTimeout(function(){c._doLoadAjax(c.loadParams,d,b,a);c._loadTimer=null},1)}else{this._doLoadAjax(this.loadParams,d,b,a)}},reload:function(c,b,a){this.load(this.loadParams,c,b,a)},gotoPage:function(a,b){var c=this.loadParams||{};if(mini.isNumber(a)){c.pageIndex=a}if(mini.isNumber(b)){c.pageSize=b}this.load(c)},sortBy:function(a,b){this.sortField=a;this.sortOrder=b=="asc"?"asc":"desc";if(this.sortMode=="server"){var c=this.getLoadParams();c.sortField=a;c.sortOrder=b;c.pageIndex=this.pageIndex;this.load(c)}else{}},setSortField:function(a){this.sortField=a;if(this.sortMode=="server"){var b=this.getLoadParams();b.sortField=a}},setSortOrder:function(a){this.sortOrder=a;if(this.sortMode=="server"){var b=this.getLoadParams();b.sortOrder=a}},checkSelectOnLoad:true,selectOnLoad:false,ajaxData:null,ajaxAsync:true,ajaxType:"",_doLoadAjax:function(f,n,j,b,k){f=f||{};if(mini.isNull(f.pageIndex)){f.pageIndex=this.pageIndex}if(mini.isNull(f.pageSize)){f.pageSize=this.pageSize}if(f.sortField){this.sortField=f.sortField}if(f.sortOrder){this.sortOrder=f.sortOrder}f.sortField=this.sortField;f.sortOrder=this.sortOrder;this.loadParams=f;var a=this._evalUrl();var m=this._evalType(a);var h=mini._evalAjaxData(this.ajaxData,this);jQuery.extend(true,f,h);var i={url:a,async:this.ajaxAsync,type:m,data:f,params:f,cache:false,cancel:false};jQuery.extend(true,i,this.ajaxOptions);this._OnBeforeLoad(i);if(i.cancel==true){f.pageIndex=this.getPageIndex();f.pageSize=this.getPageSize();return}if(i.data!=i.params&&i.params!=f){i.data=i.params}if(i.url!=a&&i.type==m){i.type=this._evalType(i.url)}var c={};c[this.pageIndexField]=f.pageIndex;c[this.pageSizeField]=f.pageSize;if(f.sortField){c[this.sortFieldField]=f.sortField}if(f.sortOrder){c[this.sortOrderField]=f.sortOrder}if(this.startField&&this.limitField){c[this.startField]=f.pageIndex*f.pageSize;c[this.limitField]=f.pageSize}jQuery.extend(true,f,c);jQuery.extend(true,i.data,c);if(this.sortMode=="client"){f[this.sortFieldField]="";f[this.sortOrderField]=""}var g=this.getSelected();this._selectedValue=g?g[this.idField]:null;if(mini.isNumber(this._selectedValue)){this._selectedValue=String(this._selectedValue)}var l=this;l._resultObject=null;var d=i.async;mini.copyTo(i,{success:function(x,q,y){if(!x||x=="null"){x="{ tatal: 0, data: [] }"}delete i.params;var s={text:x,result:null,sender:l,options:i,xhr:y};var z=null;try{mini_doload(s);z=s.result;if(!z){z=mini.decode(x)}}catch(v){if(mini_debugger==true){alert(a+"\n json is error.")}}if(z&&!mini.isArray(z)){z.total=parseInt(mini._getMap(l.totalField,z));z.data=mini._getMap(l.dataField,z)}else{if(z==null){z={};z.data=[];z.total=0}else{if(mini.isArray(z)){var e={};e.data=z;e.total=z.length;z=e}}}if(!z.data){z.data=[]}if(!z.total){z.total=0}l._resultObject=z;if(!mini.isArray(z.data)){z.data=[z.data]}var v={xhr:y,text:x,textStatus:q,result:z,total:z.total,data:z.data.clone(),pageIndex:f[l.pageIndexField],pageSize:f[l.pageSizeField]};var w=mini._getMap(l.errorField,z);var t=mini._getMap(l.errorMsgField,z);var u=mini._getMap(l.stackTraceField,z);if(mini.isNumber(w)&&w!=0||w===false){v.textStatus="servererror";v.errorCode=w;v.stackTrace=u||"";v.errorMsg=t||"";if(mini_debugger==true){alert(a+"\n"+v.textStatus+"\n"+v.errorMsg+"\n"+v.stackTrace)}l.fire("loaderror",v);if(j){j.call(l,v)}}else{if(k){k(v)}else{l.pageIndex=v.pageIndex;l.pageSize=v.pageSize;l.setTotalCount(v.total);l._OnPreLoad(v);l.setData(v.data);if(l._selectedValue&&l.checkSelectOnLoad){var p=l.getbyId(l._selectedValue);if(p){l.select(p)}}if(l.getSelected()==null&&l.selectOnLoad&&l.getDataView().length>0){l.select(0)}l.fire("load",v);if(n){if(d){setTimeout(function(){n.call(l,v)},20)}else{n.call(l,v)}}}}},error:function(p,q,o){if(q=="abort"){return}var e={xhr:p,text:p.responseText,textStatus:q};e.errorMsg=p.responseText;e.errorCode=p.status;if(mini_debugger==true){alert(a+"\n"+e.errorCode+"\n"+e.errorMsg)}l.fire("loaderror",e);if(j){j.call(l,e)}},complete:function(o,p){var e={xhr:o,text:o.responseText,textStatus:p};l.fire("loadcomplete",e);if(b){b.call(l,e)}l._xhr=null}});if(this._xhr){}this._xhr=mini.ajax(i)},_OnBeforeLoad:function(a){this.fire("beforeload",a)},_OnPreLoad:function(a){this.fire("preload",a)},_evalUrl:function(){var url=this.url;if(typeof url=="function"){url=url()}else{try{url=eval(url)}catch(ex){url=this.url}if(!url){url=this.url}}return url},_evalType:function(a){var b=this.ajaxType;if(!b){b="post";if(a){if(a.indexOf(".txt")!=-1||a.indexOf(".json")!=-1){b="get"}}else{b="get"}}return b},setSortMode:function(a){this.sortMode=a},getSortMode:function(){return this.sortMode},setAjaxOptions:function(a){this.ajaxOptions=a},getAjaxOptions:function(){return this.ajaxOptions},setAutoLoad:function(a){this.autoLoad=a},getAutoLoad:function(){return this.autoLoad},setUrl:function(a){this.url=a;if(this.autoLoad){this.load()}},getUrl:function(){return this.url},setPageIndex:function(a){this.pageIndex=a;this.fire("pageinfochanged")},getPageIndex:function(){return this.pageIndex},setPageSize:function(a){this.pageSize=a;this.fire("pageinfochanged")},getPageSize:function(){return this.pageSize},setTotalCount:function(a){this.totalCount=parseInt(a);this.fire("pageinfochanged")},getTotalCount:function(){return this.totalCount},getTotalPage:function(){return this.totalPage},setCheckSelectOnLoad:function(a){this.checkSelectOnLoad=a},getCheckSelectOnLoad:function(){return this.checkSelectOnLoad},setSelectOnLoad:function(a){this.selectOnLoad=a},getSelectOnLoad:function(){return this.selectOnLoad}});mini.DataSource.RecordId=1;mini.DataTable=function(){mini.DataTable.superclass.constructor.call(this)};mini.extend(mini.DataTable,mini.DataSource,{_init:function(){mini.DataTable.superclass._init.call(this);this._filterInfo=null;this._sortInfo=null},add:function(a){return this.insert(this.source.length,a)},addRange:function(a){this.insertRange(this.source.length,a)},insert:function(d,b){if(!b){return null}var g={index:d,record:b};this.fire("beforeadd",g);if(!mini.isNumber(d)){var c=this.getRecord(d);if(c){d=this.indexOf(c)}else{d=this.getDataView().length}}var f=this.dataview[d];if(f){this.dataview.insert(d,b)}else{this.dataview.add(b)}if(this.dataview!=this.source){if(f){var a=this.source.indexOf(f);this.source.insert(a,b)}else{this.source.add(b)}}this._setAdded(b);this._dataChanged();this.fire("add",g)},insertRange:function(d,c){if(!mini.isArray(c)){return}this.beginChange();c=c.clone();for(var e=0,b=c.length;e<b;e++){var a=c[e];this.insert(d+e,a)}this.endChange()},remove:function(a,c){var b=this.indexOf(a);return this.removeAt(b,c)},removeAt:function(f,d){var b=this.getAt(f);if(!b){return null}var g={record:b};this.fire("beforeremove",g);var c=this.isSelected(b);this.source.removeAt(f);if(this.dataview!==this.source){this.dataview.removeAt(f)}this._setRemoved(b);this._checkSelecteds();this._dataChanged();this.fire("remove",g);if(c&&d){var a=this.getAt(f);if(!a){a=this.getAt(f-1)}this.deselectAll();this.select(a)}},removeRange:function(b,c){if(!mini.isArray(b)){return}this.beginChange();b=b.clone();for(var d=0,a=b.length;d<a;d++){var e=b[d];this.remove(e,c)}this.endChange()},move:function(g,o){if(!g||!mini.isNumber(o)){return}if(o<0){return}if(mini.isArray(g)){this.beginChange();var d=g,b=this.getAt(o);var j=this;mini.sort(d,function(i,e){return j.indexOf(i)>j.indexOf(e)},this);for(var f=0,c=d.length;f<c;f++){var a=d[f];var h=this.indexOf(b);this.move(a,h)}this.endChange();return}var m={index:o,record:g};this.fire("beforemove",m);var k=this.dataview[o];this.dataview.remove(g);var n=this.dataview.indexOf(k);if(n!=-1){o=n}if(k){this.dataview.insert(o,g)}else{this.dataview.add(g)}if(this.dataview!=this.source){this.source.remove(g);var n=this.source.indexOf(k);if(n!=-1){o=n}if(k){this.source.insert(o,g)}else{this.source.add(g)}}this._dataChanged();this.fire("move",m)},indexOf:function(a){return this.getVisibleRows().indexOf(a)},getAt:function(a){return this.getVisibleRows()[a]},getRange:function(g,b){if(g>b){var e=g;g=b;b=e}var c=[];for(var d=g,a=b;d<=a;d++){var f=this.dataview[d];c.push(f)}return c},selectRange:function(c,a){if(!mini.isNumber(c)){c=this.indexOf(c)}if(!mini.isNumber(a)){a=this.indexOf(a)}if(mini.isNull(c)||mini.isNull(a)){return}var b=this.getRange(c,a);this.selects(b)},toArray:function(){return this.source.clone()},isChanged:function(){return this.getChanges().length>0},getChanges:function(b,f){var j=[];if(b=="removed"||b==null){j.addRange(this._removeds.clone())}for(var d=0,c=this.source.length;d<c;d++){var e=this.source[d];if(!e._state){continue}if(e._state==b||b==null){j[j.length]=e}}var n=j;if(f){for(var d=0,c=n.length;d<c;d++){var m=n[d];if(m._state=="modified"){var k={};k._state=m._state;k[this.idField]=m[this.idField];for(var h in m){var g=this.isModified(m,h);if(g){k[h]=m[h]}}n[d]=k}}}var a=this;mini.sort(j,function(l,i){var p=a.indexOf(l);var o=a.indexOf(i);if(p>o){return 1}if(p<o){return -1}return 0});return j},accept:function(){this.beginChange();for(var c=0,b=this.source.length;c<b;c++){var a=this.source[c];this.acceptRecord(a)}this._removeds=[];this._originals={};this.endChange()},reject:function(){this.beginChange();for(var c=0,b=this.source.length;c<b;c++){var a=this.source[c];this.rejectRecord(a)}this._removeds=[];this._originals={};this.endChange()},acceptRecord:function(a){if(!a._state){return}delete this._originals[a[this._originalIdField]];if(a._state=="deleted"){this.remove(a)}else{delete a._state;delete this._originals[a[this._originalIdField]];this._dataChanged()}this.fire("update",{record:a})},rejectRecord:function(a){if(!a._state){return}if(a._state=="added"){this.remove(a)}else{if(a._state=="modified"||a._state=="deleted"){var b=this._getOriginal(a);mini.copyTo(a,b);delete a._state;delete this._originals[a[this._originalIdField]];this._dataChanged();this.fire("update",{record:a})}}},_doFilter:function(){if(!this._filterInfo){this.dataview=this.source;return}var e=this._filterInfo[0],d=this._filterInfo[1];var b=[];var g=this.source;for(var c=0,a=g.length;c<a;c++){var f=g[c];var h=e.call(d,f,c,this);if(h!==false){b.push(f)}}this.dataview=b},_doSort:function(){if(!this._sortInfo){return}var d=this._sortInfo[0],c=this._sortInfo[1],a=this._sortInfo[2];var b=this.getDataView().clone();mini.sort(b,d,c);if(a){b.reverse()}this.dataview=b}});mini.regClass(mini.DataTable,"datatable");mini.DataTree=function(){mini.DataTree.superclass.constructor.call(this)};mini.extend(mini.DataTree,mini.DataSource,{isTree:true,expandOnLoad:false,idField:"id",parentField:"pid",nodesField:"children",checkedField:"checked",resultAsTree:true,dataField:"",checkModel:"cascade",autoCheckParent:false,onlyLeafCheckable:false,setExpandOnLoad:function(a){this.expandOnLoad=a},getExpandOnLoad:function(){return this.expandOnLoad},setParentField:function(a){this.parentField=a},setNodesField:function(b){if(this.nodesField!=b){var a=this.root[this.nodesField];this.nodesField=b;this._doLoadData(a)}},setResultAsTree:function(a){this.resultAsTree=a},setCheckRecursive:function(a){this.checkModel=a?"cascade":"multiple"},getCheckRecursive:function(){return this.checkModel=="cascade"},setShowFolderCheckBox:function(a){this.onlyLeafCheckable=!a},getShowFolderCheckBox:function(){return !this.onlyLeafCheckable},_doExpandOnLoad:function(a){var d=this.nodesField;var c=this.expandOnLoad;function b(f,k){for(var g=0,e=f.length;g<e;g++){var h=f[g];if(mini.isNull(h.expanded)){if(c===true||(mini.isNumber(c)&&k<=c)){h.expanded=true}else{h.expanded=false}}else{}var j=h[d];if(j){b(j,k+1)}}}b(a,0)},_OnBeforeLoad:function(b){var a=this._loadingNode||this.root;b.node=a;if(this._isNodeLoading()){b.async=true;b.isRoot=b.node==this.root;if(!b.isRoot){b.data[this.idField]=this.getItemValue(b.node)}}this.fire("beforeload",b)},_OnPreLoad:function(a){if(this.resultAsTree==false){a.data=mini.arrayToTree(a.data,this.nodesField,this.idField,this.parentField)}this.fire("preload",a)},_init:function(){mini.DataTree.superclass._init.call(this);this.root={_id:-1,_level:-1};this.source=this.root[this.nodesField]=[];this.viewNodes=null;this.dataview=null;this.visibleRows=null;this._ids[this.root._id]=this.root},_doLoadData:function(e){e=e||[];this._doExpandOnLoad(e);this.source=this.root[this.nodesField]=e;this.viewNodes=null;this.dataview=null;this.visibleRows=null;var b=mini.treeToArray(e,this.nodesField);var a=this._ids;a[this.root._id]=this.root;for(var f=0,d=b.length;f<d;f++){var c=b[f];c._id=mini.DataSource.RecordId++;a[c._id]=c;c._uid=c._id}var j=this.checkedField;var b=mini.treeToArray(e,this.nodesField,"_id","_pid",this.root._id);for(var f=0,d=b.length;f<d;f++){var c=b[f];var g=this.getParentNode(c);c._pid=g._id;c._level=g._level+1;delete c._state;c.checked=c[j];if(c.checked){c.checked=c.checked!="false"}if(this.isLeafNode(c)==false){var h=c[this.nodesField];if(h&&h.length>0){}}}this._doUpdateLoadedCheckedNodes()},_setAdded:function(b){var a=this.getParentNode(b);b._id=mini.DataSource.RecordId++;if(this._autoCreateNewID&&!b[this.idField]){b[this.idField]=UUID()}b._uid=b._id;b._pid=a._id;if(a[this.idField]){b[this.parentField]=a[this.idField]}b._level=a._level+1;b._state="added";this._ids[b._id]=b;delete this._originals[b[this._originalIdField]]},_createNodes:function(b){var a=b[this.nodesField];if(!a){a=b[this.nodesField]=[]}if(this.viewNodes&&!this.viewNodes[b._id]){this.viewNodes[b._id]=[]}return a},addNode:function(b,a){if(!b){return}return this.insertNode(b,-1,a)},addNodes:function(c,a,f){if(!mini.isArray(c)){return}if(mini.isNull(f)){f="add"}for(var d=0,b=c.length;d<b;d++){var e=c[d];this.insertNode(e,f,a)}},insertNodes:function(d,e,a){if(!mini.isNumber(e)){return}if(!mini.isArray(d)){return}if(!a){a=this.root}this.beginChange();var c=this._createNodes(a);if(e<0||e>c.length){e=c.length}d=d.clone();for(var f=0,b=d.length;f<b;f++){this.insertNode(d[f],e+f,a)}this.endChange();return d},removeNode:function(c){var a=this.getParentNode(c);if(!a){return}var b=this.indexOfNode(c);return this.removeNodeAt(b,a)},removeNodes:function(b){if(!mini.isArray(b)){return}this.beginChange();b=b.clone();for(var c=0,a=b.length;c<a;c++){this.removeNode(b[c])}this.endChange()},moveNodes:function(b,g,f){if(!b||b.length==0||!g||!f){return}this.beginChange();var e=this;mini.sort(b,function(i,h){return e.indexOf(i)>e.indexOf(h)},this);for(var c=0,a=b.length;c<a;c++){var d=b[c];this.moveNode(d,g,f);if(c!=0){g=d;f="after"}}this.endChange()},moveNode:function(a,h,b){if(!a||!h||mini.isNull(b)){return}if(this.viewNodes){var d=h;var f=b;if(f=="before"){d=this.getParentNode(h);f=this.indexOfNode(h)}else{if(f=="after"){d=this.getParentNode(h);f=this.indexOfNode(h)+1}else{if(f=="add"||f=="append"){if(!d[this.nodesField]){d[this.nodesField]=[]}f=d[this.nodesField].length}else{if(!mini.isNumber(f)){return}}}}if(this.isAncestor(a,d)){return false}var j=this.getChildNodes(d);if(f<0||f>j.length){f=j.length}var i={};j.insert(f,i);var k=this.getParentNode(a);var c=this.getChildNodes(k);c.remove(a);f=j.indexOf(i);j[f]=a}var d=h;var f=b;var j=this._createNodes(d);if(f=="before"){d=this.getParentNode(h);j=this._createNodes(d);f=j.indexOf(h)}else{if(f=="after"){d=this.getParentNode(h);j=this._createNodes(d);f=j.indexOf(h)+1}else{if(f=="add"||f=="append"){f=j.length}else{if(!mini.isNumber(f)){return}}}}if(this.isAncestor(a,d)){return false}if(f<0||f>j.length){f=j.length}var i={};j.insert(f,i);var k=this.getParentNode(a);k[this.nodesField].remove(a);f=j.indexOf(i);j[f]=a;this._updateParentAndLevel(a,d);this._dataChanged();var g={parentNode:d,index:f,node:a};this.fire("movenode",g)},insertNode:function(f,d,b){if(!f){return}if(!b){b=this.root;d="add"}if(!mini.isNumber(d)){switch(d){case"before":d=this.indexOfNode(b);b=this.getParentNode(b);this.insertNode(f,d,b);break;case"after":d=this.indexOfNode(b);b=this.getParentNode(b);this.insertNode(f,d+1,b);break;case"append":case"add":this.addNode(f,b);break;default:break}return}var a=this._createNodes(b);var c=this.getChildNodes(b);if(d<0){d=c.length}c.insert(d,f);d=c.indexOf(f);if(this.viewNodes){var i=c[d-1];if(i){var h=a.indexOf(i);a.insert(h+1,f)}else{a.insert(0,f)}}f._pid=b._id;this._setAdded(f);this.cascadeChild(f,function(k,e,j){k._pid=j._id;this._setAdded(k)},this);this._dataChanged();var g={parentNode:b,index:d,node:f};this.fire("addnode",g);return f},removeNodeAt:function(d,b){if(!b){b=this.root}var c=this.getChildNodes(b);var f=c[d];if(!f){return null}c.removeAt(d);if(this.viewNodes){var a=b[this.nodesField];a.remove(f)}this._setRemoved(f);this.cascadeChild(f,function(j,e,h){this._setRemoved(j)},this);this._checkSelecteds();this._dataChanged();var g={parentNode:b,index:d,node:f};this.fire("removenode",g);return f},bubbleParent:function(d,c,b){b=b||this;if(d){c.call(this,d)}var a=this.getParentNode(d);if(a&&a!=this.root){this.bubbleParent(a,c,b)}},cascadeChild:function(g,f,e){if(!f){return}if(!g){g=this.root}var b=g[this.nodesField];if(b){b=b.clone();for(var d=0,a=b.length;d<a;d++){var h=b[d];if(f.call(e||this,h,d,g)===false){return}this.cascadeChild(h,f,e)}}},eachChild:function(f,e,d){if(!e||!f){return}var b=f[this.nodesField];if(b){var g=b.clone();for(var c=0,a=g.length;c<a;c++){var h=g[c];if(e.call(d||this,h,c,f)===false){break}}}},collapse:function(b,a){b=this.getNode(b);if(!b){return}this.beginChange();b.expanded=false;if(a){this.eachChild(b,function(d){if(d[this.nodesField]!=null){this.collapse(d,a)}},this)}this.endChange();var c={node:b};this.fire("collapse",c)},expand:function(b,a){b=this.getNode(b);if(!b){return}this.beginChange();b.expanded=true;if(a){this.eachChild(b,function(d){if(d[this.nodesField]!=null){this.expand(d,a)}},this)}this.endChange();var c={node:b};this.fire("expand",c)},toggle:function(a){if(this.isExpandedNode(a)){this.collapse(a)}else{this.expand(a)}},expandNode:function(a){this.expand(a)},collapseNode:function(a){this.collapse(a)},collapseAll:function(){this.collapse(this.root,true)},expandAll:function(){this.expand(this.root,true)},collapseLevel:function(b,a){this.beginChange();this.each(function(d){var c=this.getLevel(d);if(b==c){this.collapse(d,a)}},this);this.endChange()},expandLevel:function(b,a){this.beginChange();this.each(function(d){var c=this.getLevel(d);if(b==c){this.expand(d,a)}},this);this.endChange()},expandPath:function(d){d=this.getNode(d);if(!d){return}var b=this.getAncestors(d);for(var c=0,a=b.length;c<a;c++){this.expandNode(b[c])}},collapsePath:function(d){d=this.getNode(d);if(!d){return}var b=this.getAncestors(d);for(var c=0,a=b.length;c<a;c++){this.collapseNode(b[c])}},isAncestor:function(a,e){if(a==e){return true}if(!a||!e){return false}if(a==this.getRootNode()){return true}var c=this.getAncestors(e);for(var d=0,b=c.length;d<b;d++){if(c[d]==a){return true}}return false},getAncestors:function(c){var b=[];while(1){var a=this.getParentNode(c);if(!a||a==this.root){break}b[b.length]=a;c=a}b.reverse();return b},getNode:function(a){return this.getRecord(a)},getRootNode:function(){return this.root},getParentNode:function(a){if(!a){return null}return this.getby_id(a._pid)},getAllChildNodes:function(a){return this.getChildNodes(a,true)},getChildNodes:function(b,h,j){b=this.getNode(b);if(!b){b=this.getRootNode()}var a=b[this.nodesField];if(this.viewNodes&&j!==false){a=this.viewNodes[b._id]}if(h===true&&a){var g=[];for(var d=0,c=a.length;d<c;d++){var f=a[d];g[g.length]=f;var e=this.getChildNodes(f,h,j);if(e&&e.length>0){g.addRange(e)}}a=g}return a||[]},getChildNodeAt:function(b,c){var a=this.getChildNodes(c);if(a){return a[b]}return null},hasChildNodes:function(b){var a=this.getChildNodes(b);return a.length>0},getLevel:function(a){return a._level},_is_true:function(a){return a===true||a===1||a==="Y"||a==="y"},_is_false:function(a){return a===false||a===0||a==="N"||a==="n"},leafField:"isLeaf",isLeafNode:function(a){return this.isLeaf(a)},isLeaf:function(c){if(!c){return false}var b=c[this.leafField];if(!c||this._is_false(b)){return false}var a=this.getChildNodes(c,false,false);if(a.length>0){return false}return true},hasChildren:function(b){var a=this.getChildNodes(b);return !!(a&&a.length>0)},isFirstNode:function(b){if(b==this.root){return true}var a=this.getParentNode(b);if(!a){return false}return this.getFirstNode(a)==b},isLastNode:function(b){if(b==this.root){return true}var a=this.getParentNode(b);if(!a){return false}return this.getLastNode(a)==b},isCheckedNode:function(a){return a.checked===true},isExpandedNode:function(a){return a.expanded==true||a.expanded==1||mini.isNull(a.expanded)},isEnabledNode:function(a){return a.enabled!==false},isVisibleNode:function(a){if(a.visible==false){return false}var b=this._ids[a._pid];if(!b||b==this.root){return true}if(b.expanded===false){return false}return this.isVisibleNode(b)},getNextNode:function(c){var a=this.getby_id(c._pid);if(!a){return null}var b=this.indexOfNode(c);return this.getChildNodes(a)[b+1]},getPrevNode:function(c){var a=this.getby_id(c._pid);if(!a){return null}var b=this.indexOfNode(c);return this.getChildNodes(a)[b-1]},getFirstNode:function(a){return this.getChildNodes(a)[0]},getLastNode:function(a){var b=this.getChildNodes(a);return b[b.length-1]},indexOfNode:function(b){var a=this.getby_id(b._pid);if(a){return this.getChildNodes(a).indexOf(b)}return -1},indexOfList:function(a){return this.getList().indexOf(a)},getAt:function(a){return this.getVisibleRows()[a]},indexOf:function(a){return this.getVisibleRows().indexOf(a)},getRange:function(h,b){if(h>b){var e=h;h=b;b=e}var f=this.getChildNodes(this.root,true);var c=[];for(var d=h,a=b;d<=a;d++){var g=f[d];if(g){c.push(g)}}return c},selectRange:function(d,a){var c=this.getChildNodes(this.root,true);if(!mini.isNumber(d)){d=c.indexOf(d)}if(!mini.isNumber(a)){a=c.indexOf(a)}if(mini.isNull(d)||mini.isNull(a)){return}var b=this.getRange(d,a);this.selects(b)},findRecords:function(k,j){var d=this.toArray();var g=typeof k=="function";var h=k;var m=j||this;var b=[];for(var e=0,c=d.length;e<c;e++){var a=d[e];if(g){var f=h.call(m,a);if(f==true){b[b.length]=a}if(f===1){break}}else{if(a[k]==j){b[b.length]=a}}}return b},_dataChangedCount:0,_dataChanged:function(){this._dataChangedCount++;this.dataview=null;this.visibleRows=null;if(this.__changeCount==0){this.fire("datachanged")}},_createDataView:function(){var a=this.getChildNodes(this.root,true);return a},_createVisibleRows:function(){var e=this.getChildNodes(this.root,true);var b=[];for(var c=0,a=e.length;c<a;c++){var d=e[c];if(this.isVisibleNode(d)){b[b.length]=d}}return b},getList:function(){return mini.treeToList(this.source,this.nodesField)},getDataView:function(){if(!this.dataview){this.dataview=this._createDataView()}return this.dataview.clone()},getVisibleRows:function(){if(!this.visibleRows){this.visibleRows=this._createVisibleRows()}return this.visibleRows},_doFilter:function(){if(!this._filterInfo){this.viewNodes=null;return}var d=this._filterInfo[0],c=this._filterInfo[1];var a=this.viewNodes={},e=this.nodesField;function b(k){var g=k[e];if(!g){return false}var h=k._id;var o=a[h]=[];for(var n=0,m=g.length;n<m;n++){var f=g[n];var j=b(f);var p=d.call(c,f,n,this);if(p===true||j){o.push(f)}}return o.length>0}b(this.root)},_doSort:function(){if(!this._filterInfo&&!this._sortInfo){this.viewNodes=null;return}if(!this._sortInfo){return}var e=this._sortInfo[0],d=this._sortInfo[1],b=this._sortInfo[2];var g=this.nodesField;if(!this.viewNodes){var a=this.viewNodes={};a[this.root._id]=this.root[g].clone();this.cascadeChild(this.root,function(k,j,l){var h=k[g];if(h){a[k._id]=h.clone()}})}var f=this;function c(n){var j=f.getChildNodes(n);mini.sort(j,e,d);if(b){j.reverse()}for(var k=0,h=j.length;k<h;k++){var m=j[k];c(m)}}c(this.root)},toArray:function(){if(!this._array||this._dataChangedCount!=this._dataChangedCount2){this._dataChangedCount2=this._dataChangedCount;this._array=this.getChildNodes(this.root,true,false)}return this._array},toTree:function(){return this.root[this.nodesField]},isChanged:function(){return this.getChanges().length>0},getChanges:function(a,d){var g=[];if(a=="removed"||a==null){g.addRange(this._removeds.clone())}this.cascadeChild(this.root,function(l,m,n){if(l._state==null||l._state==""){return}if(l._state==a||a==null){g[g.length]=l}},this);var k=g;if(d){for(var c=0,b=k.length;c<b;c++){var j=k[c];if(j._state=="modified"){var h={};h[this.idField]=j[this.idField];for(var f in j){var e=this.isModified(j,f);if(e){h[f]=j[f]}}k[c]=h}}}return g},accept:function(a){a=a||this.root;this.beginChange();this.cascadeChild(this.root,function(b){this.acceptRecord(b)},this);this._removeds=[];this._originals={};this.endChange()},reject:function(a){this.beginChange();this.cascadeChild(this.root,function(b){this.rejectRecord(b)},this);this._removeds=[];this._originals={};this.endChange()},acceptRecord:function(a){if(!a._state){return}delete this._originals[a[this._originalIdField]];if(a._state=="deleted"){this.removeNode(a)}else{delete a._state;delete this._originals[a[this._originalIdField]];this._dataChanged();this.fire("update",{record:a})}},rejectRecord:function(a){if(!a._state){return}if(a._state=="added"){this.removeNode(a)}else{if(a._state=="modified"||a._state=="deleted"){var b=this._getOriginal(a);mini.copyTo(a,b);delete a._state;delete this._originals[a[this._originalIdField]];this._dataChanged();this.fire("update",{record:a})}}},upGrade:function(b){var e=this.getParentNode(b);if(e==this.root||b==this.root){return false}var c=e[this.nodesField];var g=c.indexOf(b);var h=b[this.nodesField]?b[this.nodesField].length:0;for(var f=c.length-1;f>=g;f--){var a=c[f];c.removeAt(f);if(a!=b){if(!b[this.nodesField]){b[this.nodesField]=[]}b[this.nodesField].insert(h,a)}}var d=this.getParentNode(e);var j=d[this.nodesField];var g=j.indexOf(e);j.insert(g+1,b);this._updateParentAndLevel(b,d);this._doFilter();this._dataChanged()},downGrade:function(e){if(this.isFirstNode(e)){return false}var d=this.getParentNode(e);var c=d[this.nodesField];var b=c.indexOf(e);var a=c[b-1];c.removeAt(b);if(!a[this.nodesField]){a[this.nodesField]=[]}a[this.nodesField].add(e);this._updateParentAndLevel(e,a);this._doFilter();this._dataChanged()},_updateParentAndLevel:function(c,a){var b=this;c._pid=a._id;c._level=a._level+1;c[b.parentField]=a[b.idField];this.cascadeChild(c,function(f,d,e){f._pid=e._id;f._level=e._level+1;f[b.parentField]=e[b.idField]},this);this._setModified(c)},setCheckModel:function(a){this.checkModel=a},getCheckModel:function(){return this.checkModel},setOnlyLeafCheckable:function(a){this.onlyLeafCheckable=a},getOnlyLeafCheckable:function(){return this.onlyLeafCheckable},setAutoCheckParent:function(a){this.autoCheckParent=a},getAutoCheckParent:function(){return this.autoCheckParent},_doUpdateLoadedCheckedNodes:function(){var b=this.getAllChildNodes(this.root);for(var c=0,a=b.length;c<a;c++){var d=b[c];if(d.checked==true){if(this.autoCheckParent==false||!this.hasChildNodes(d)){this._doUpdateNodeCheckState(d)}}}},_doUpdateNodeCheckState:function(a){if(!a){return}var j=this.isChecked(a);if(this.checkModel=="cascade"||this.autoCheckParent){this.cascadeChild(a,function(i){this.doCheckNodes(i,j)},this);if(!this.autoCheckParent){var k=this.getAncestors(a);k.reverse();for(var d=0,b=k.length;d<b;d++){var e=k[d];var n=this.getChildNodes(e);var o=true;for(var m=0,h=n.length;m<h;m++){var g=n[m];if(!this.isCheckedNode(g)){o=false}}if(o){this.doCheckNodes(e,true)}else{this.doCheckNodes(e,false)}this.fire("checkchanged",{nodes:[e],_nodes:[e]})}}}var f=this;function c(p){var r=f.getChildNodes(p);for(var i=0,q=r.length;i<q;i++){var l=r[i];if(f.isCheckedNode(l)){return true}}return false}if(this.autoCheckParent){var k=this.getAncestors(a);k.reverse();for(var d=0,b=k.length;d<b;d++){var e=k[d];e.checked=c(e);this.fire("checkchanged",{nodes:[e],_nodes:[e]})}}},doCheckNodes:function(b,f,a){if(!b){return}if(typeof b=="string"){b=b.split(",")}if(!mini.isArray(b)){b=[b]}b=b.clone();var g=[];f=f!==false;if(a===true){if(this.checkModel=="single"){this.uncheckAllNodes()}}for(var c=b.length-1;c>=0;c--){var e=this.getRecord(b[c]);if(!e||(f&&e.checked===true)||(!f&&e.checked!==true)){if(e){if(a===true){this._doUpdateNodeCheckState(e)}if(!f&&!this.isLeaf(e)){g.push(e)}}continue}e.checked=f;g.push(e);if(a===true){this._doUpdateNodeCheckState(e)}}var d=this;setTimeout(function(){d.fire("checkchanged",{nodes:b,_nodes:g,checked:f})},1)},checkNode:function(b,a){this.doCheckNodes([b],true,a!==false)},uncheckNode:function(b,a){this.doCheckNodes([b],false,a!==false)},checkNodes:function(b,a){if(!mini.isArray(b)){b=[]}this.doCheckNodes(b,true,a!==false)},uncheckNodes:function(b,a){if(!mini.isArray(b)){b=[]}this.doCheckNodes(b,false,a!==false)},checkAllNodes:function(){var a=this.getList();this.doCheckNodes(a,true,false)},uncheckAllNodes:function(){var a=this.getList();this.doCheckNodes(a,false,false)},getCheckedNodes:function(c){if(c===false){c="leaf"}var a=[];var b={};this.cascadeChild(this.root,function(j){if(j.checked==true){var f=this.isLeafNode(j);if(c===true){if(!b[j._id]){b[j._id]=j;a.push(j)}var e=this.getAncestors(j);for(var g=0,d=e.length;g<d;g++){var h=e[g];if(!b[h._id]){b[h._id]=h;a.push(h)}}}else{if(c==="parent"){if(!f){if(!b[j._id]){b[j._id]=j;a.push(j)}}}else{if(c==="leaf"){if(f){if(!b[j._id]){b[j._id]=j;a.push(j)}}}else{if(!b[j._id]){b[j._id]=j;a.push(j)}}}}}},this);return a},getCheckedNodesId:function(d,b){var a=this.getCheckedNodes(d);var c=this.getValueAndText(a,b);return c[0]},getCheckedNodesText:function(d,b){var a=this.getCheckedNodes(d);var c=this.getValueAndText(a,b);return c[1]},isChecked:function(a){a=this.getRecord(a);if(!a){return null}return a.checked===true||a.checked===1},getCheckState:function(d){d=this.getRecord(d);if(!d){return null}if(d.checked===true){return"checked"}if(!d[this.nodesField]){return"unchecked"}var c=this.getChildNodes(d,true);for(var b=0,a=c.length;b<a;b++){var d=c[b];if(d.checked===true){return"indeterminate"}}return"unchecked"},getUnCheckableNodes:function(){var a=[];this.cascadeChild(this.root,function(c){var b=this.getCheckable(c);if(b==false){a.push(c)}},this);return a},setCheckable:function(b,a){if(!b){return}if(!mini.isArray(b)){b=[b]}b=b.clone();a=!!a;for(var c=b.length-1;c>=0;c--){var d=this.getRecord(b[c]);if(!d){continue}d.checkable=checked}},getCheckable:function(a){a=this.getRecord(a);if(!a){return false}if(a.checkable===true){return true}if(a.checkable===false){return false}return this.isLeafNode(a)?true:!this.onlyLeafCheckable},showNodeCheckbox:function(b,a){},reload:function(c,b,a){this._loadingNode=null;this.load(this.loadParams,c,b,a)},_isNodeLoading:function(){return !!this._loadingNode},loadNode:function(c,a){this._loadingNode=c;var f={node:c};this.fire("beforeloadnode",f);var d=new Date();var b=this;b._doLoadAjax(b.loadParams,null,null,null,function(h){var g=new Date()-d;if(g<60){g=60-g}setTimeout(function(){h.node=c;b._OnPreLoad(h);h.node=b._loadingNode;b._loadingNode=null;var i=c[b.nodesField];b.removeNodes(i);var e=h.data;if(e&&e.length>0){b.addNodes(e,c);if(a!==false){b.expand(c,true)}else{b.collapse(c,true)}}else{delete c[b.leafField];b.expand(c,true)}b.fire("loadnode",h);b.fire("load",h)},g)},true)}});mini.regClass(mini.DataTree,"datatree");mini._DataTableApplys={idField:"id",textField:"text",setAjaxData:function(a){this._dataSource.ajaxData=a},getby_id:function(a){return this._dataSource.getby_id(a)},getValueAndText:function(b,a){return this._dataSource.getValueAndText(b,a)},setIdField:function(a){this._dataSource.setIdField(a);this.idField=a},getIdField:function(){return this._dataSource.idField},setTextField:function(a){this._dataSource.setTextField(a);this.textField=a},getTextField:function(){return this._dataSource.textField},clearData:function(){this._dataSource.clearData()},loadData:function(a){this._dataSource.loadData(a)},setData:function(a){this._dataSource.loadData(a)},getData:function(){return this._dataSource.getSource().clone()},getList:function(){return this._dataSource.getList()},getDataView:function(){return this._dataSource.getDataView()},getVisibleRows:function(){if(this._useEmptyView){return[]}return this._dataSource.getVisibleRows()},toArray:function(){return this._dataSource.toArray()},getRecord:function(a){return this._dataSource.getRecord(a)},getRow:function(a){return this._dataSource.getRow(a)},getRange:function(b,a){if(mini.isNull(b)||mini.isNull(a)){return}return this._dataSource.getRange(b,a)},getAt:function(a){return this._dataSource.getAt(a)},indexOf:function(a){return this._dataSource.indexOf(a)},getRowByUID:function(a){return this._dataSource.getby_id(a)},getRowById:function(a){return this._dataSource.getbyId(a)},clearRows:function(){this._dataSource.clearData()},updateRow:function(a,c,b){this._dataSource.updateRecord(a,c,b)},addRow:function(a,b){return this._dataSource.insert(b,a)},removeRow:function(a,b){return this._dataSource.remove(a,b)},removeRows:function(a,b){return this._dataSource.removeRange(a,b)},removeRowAt:function(b,a){return this._dataSource.removeAt(b,a)},moveRow:function(b,a){this._dataSource.move(b,a)},addRows:function(a,b){return this._dataSource.insertRange(b,a)},findRows:function(b,a){return this._dataSource.findRecords(b,a)},findRow:function(b,a){return this._dataSource.findRecord(b,a)},multiSelect:false,setMultiSelect:function(a){this._dataSource.setMultiSelect(a);this.multiSelect=a},getMultiSelect:function(){return this._dataSource.getMultiSelect()},setCurrent:function(a){this._dataSource.setCurrent(a)},getCurrent:function(){return this._dataSource.getCurrent()},isSelected:function(a){return this._dataSource.isSelected(a)},setSelected:function(a){this._dataSource.setSelected(a)},getSelected:function(){return this._dataSource.getSelected()},getSelecteds:function(){return this._dataSource.getSelecteds()},select:function(a,b){this._dataSource.select(a,b)},selects:function(a,b){this._dataSource.selects(a,b)},deselect:function(a,b){this._dataSource.deselect(a,b)},deselects:function(a,b){this._dataSource.deselects(a,b)},selectAll:function(a){this._dataSource.selectAll(a)},deselectAll:function(a){this._dataSource.deselectAll(a)},clearSelect:function(a){this.deselectAll(a)},selectPrev:function(){this._dataSource.selectPrev()},selectNext:function(){this._dataSource.selectNext()},selectFirst:function(){this._dataSource.selectFirst()},selectLast:function(){this._dataSource.selectLast()},selectRange:function(b,a){this._dataSource.selectRange(b,a)},filter:function(b,a){this._dataSource.filter(b,a)},clearFilter:function(){this._dataSource.clearFilter()},sort:function(b,a){this._dataSource.sort(b,a)},clearSort:function(){this._dataSource.clearSort()},findItems:function(e,d,f){return this._dataSource.findRecords(f,d,f)},getResultObject:function(){return this._dataSource._resultObject||{}},isChanged:function(){return this._dataSource.isChanged()},getChanges:function(b,a){return this._dataSource.getChanges(b,a)},accept:function(){this._dataSource.accept()},reject:function(){this._dataSource.reject()},acceptRecord:function(a){this._dataSource.acceptRecord(a)},rejectRecord:function(a){this._dataSource.rejectRecord(a)}};mini._DataTreeApplys={addRow:null,removeRow:null,removeRows:null,removeRowAt:null,moveRow:null,setExpandOnLoad:function(a){this._dataSource.setExpandOnLoad(a)},getExpandOnLoad:function(){return this._dataSource.getExpandOnLoad()},isSelectedNode:function(a){a=this.getNode(a);return this.getSelectedNode()===a},selectNode:function(b,a){if(b){this._dataSource.select(b,a)}else{this._dataSource.deselect(this.getSelectedNode(),a)}},getSelectedNode:function(){return this.getSelected()},getSelectedNodes:function(){return this.getSelecteds()},updateNode:function(a,c,b){this._dataSource.updateRecord(a,c,b)},addNode:function(b,c,a){return this._dataSource.insertNode(b,c,a)},removeNodeAt:function(b,a){return this._dataSource.removeNodeAt(b,a);this._changed=true},removeNode:function(a){return this._dataSource.removeNode(a)},moveNode:function(a,b,c){this._dataSource.moveNode(a,b,c)},addNodes:function(b,a,c){return this._dataSource.addNodes(b,a,c)},insertNodes:function(b,c,a){return this._dataSource.insertNodes(c,b,a)},moveNodes:function(a,c,b){this._dataSource.moveNodes(a,c,b)},removeNodes:function(a){return this._dataSource.removeNodes(a)},expandOnLoad:false,checkRecursive:true,autoCheckParent:false,showFolderCheckBox:true,idField:"id",textField:"text",parentField:"pid",nodesField:"children",checkedField:"checked",leafField:"isLeaf",resultAsTree:true,setShowFolderCheckBox:function(a){this._dataSource.setShowFolderCheckBox(a);if(this.doUpdate){this.doUpdate()}this.showFolderCheckBox=a},getShowFolderCheckBox:function(){return this._dataSource.getShowFolderCheckBox()},setCheckRecursive:function(a){this._dataSource.setCheckRecursive(a);this.checkRecursive=a},getCheckRecursive:function(){return this._dataSource.getCheckRecursive()},setResultAsTree:function(a){this._dataSource.setResultAsTree(a)},getResultAsTree:function(a){return this._dataSource.resultAsTree},setParentField:function(a){this._dataSource.setParentField(a);this.parentField=a},getParentField:function(){return this._dataSource.parentField},setLeafField:function(a){this._dataSource.leafField=a;this.leafField=a},getLeafField:function(){return this._dataSource.leafField},setNodesField:function(a){this._dataSource.setNodesField(a);this.nodesField=a},getNodesField:function(){return this._dataSource.nodesField},setCheckedField:function(a){this._dataSource.checkedField=a;this.checkedField=a},getCheckedField:function(){return this.checkedField},findNodes:function(b,a){return this._dataSource.findRecords(b,a)},getLevel:function(a){return this._dataSource.getLevel(a)},isVisibleNode:function(a){return this._dataSource.isVisibleNode(a)},isEnabledNode:function(a){return this._dataSource.isEnabledNode(a)},isExpandedNode:function(a){return this._dataSource.isExpandedNode(a)},isCheckedNode:function(a){return this._dataSource.isCheckedNode(a)},isLeaf:function(a){return this._dataSource.isLeafNode(a)},hasChildren:function(a){return this._dataSource.hasChildren(a)},isAncestor:function(b,a){return this._dataSource.isAncestor(b,a)},getNode:function(a){return this._dataSource.getRecord(a)},getRootNode:function(){return this._dataSource.getRootNode()},getParentNode:function(a){return this._dataSource.getParentNode.apply(this._dataSource,arguments)},getAncestors:function(a){return this._dataSource.getAncestors(a)},getAllChildNodes:function(a){return this._dataSource.getAllChildNodes.apply(this._dataSource,arguments)},getChildNodes:function(b,a){return this._dataSource.getChildNodes.apply(this._dataSource,arguments)},getChildNodeAt:function(a,b){return this._dataSource.getChildNodeAt.apply(this._dataSource,arguments)},indexOfNode:function(a){return this._dataSource.indexOfNode.apply(this._dataSource,arguments)},hasChildNodes:function(a){return this._dataSource.hasChildNodes.apply(this._dataSource,arguments)},isFirstNode:function(a){return this._dataSource.isFirstNode.apply(this._dataSource,arguments)},isLastNode:function(a){return this._dataSource.isLastNode.apply(this._dataSource,arguments)},getNextNode:function(a){return this._dataSource.getNextNode.apply(this._dataSource,arguments)},getPrevNode:function(a){return this._dataSource.getPrevNode.apply(this._dataSource,arguments)},getFirstNode:function(a){return this._dataSource.getFirstNode.apply(this._dataSource,arguments)},getLastNode:function(a){return this._dataSource.getLastNode.apply(this._dataSource,arguments)},toggleNode:function(a){this._dataSource.toggle(a)},collapseNode:function(b,a){this._dataSource.collapse(b,a)},expandNode:function(b,a){this._dataSource.expand(b,a)},collapseAll:function(){this.useAnimation=false;this._dataSource.collapseAll();this.useAnimation=true},expandAll:function(){this.useAnimation=false;this._dataSource.expandAll();this.useAnimation=true},expandLevel:function(a){this.useAnimation=false;this._dataSource.expandLevel(a);this.useAnimation=true},collapseLevel:function(a){this.useAnimation=false;this._dataSource.collapseLevel(a);this.useAnimation=true},expandPath:function(a){this.useAnimation=false;this._dataSource.expandPath(a);this.useAnimation=true},collapsePath:function(a){this.useAnimation=false;this._dataSource.collapsePath(a);this.useAnimation=true},loadNode:function(b,a){this._dataSource.loadNode(b,a)},setCheckModel:function(a){this._dataSource.setCheckModel(a)},getCheckModel:function(){return this._dataSource.getCheckModel()},setOnlyLeafCheckable:function(a){this._dataSource.setOnlyLeafCheckable(a)},getOnlyLeafCheckable:function(){return this._dataSource.getOnlyLeafCheckable()},setAutoCheckParent:function(a){this._dataSource.setAutoCheckParent(a)},getAutoCheckParent:function(){return this._dataSource.getAutoCheckParent()},checkNode:function(b,a){this._dataSource.checkNode(b,a)},uncheckNode:function(b,a){this._dataSource.uncheckNode(b,a)},checkNodes:function(b,a){this._dataSource.checkNodes(b,a)},uncheckNodes:function(b,a){this._dataSource.uncheckNodes(b,a)},checkAllNodes:function(){this._dataSource.checkAllNodes()},uncheckAllNodes:function(){this._dataSource.uncheckAllNodes()},getCheckedNodes:function(){return this._dataSource.getCheckedNodes.apply(this._dataSource,arguments)},getCheckedNodesId:function(){return this._dataSource.getCheckedNodesId.apply(this._dataSource,arguments)},getCheckedNodesText:function(){return this._dataSource.getCheckedNodesText.apply(this._dataSource,arguments)},getNodesByValue:function(f){if(mini.isNull(f)){f=""}f=String(f);var b=[];var d=String(f).split(",");for(var c=0,a=d.length;c<a;c++){var e=this.getNode(d[c]);if(e){b.push(e)}}return b},isChecked:function(a){return this._dataSource.isChecked.apply(this._dataSource,arguments)},getCheckState:function(a){return this._dataSource.getCheckState.apply(this._dataSource,arguments)},setCheckable:function(b,a){this._dataSource.setCheckable.apply(this._dataSource,arguments)},getCheckable:function(a){return this._dataSource.getCheckable.apply(this._dataSource,arguments)},bubbleParent:function(c,b,a){this._dataSource.bubbleParent.apply(this._dataSource,arguments)},cascadeChild:function(c,b,a){this._dataSource.cascadeChild.apply(this._dataSource,arguments)},eachChild:function(c,b,a){this._dataSource.eachChild.apply(this._dataSource,arguments)}};mini.ColumnModel=function(a){this.owner=a;mini.ColumnModel.superclass.constructor.call(this);this._init()};mini.ColumnModel_ColumnID=1;mini.extend(mini.ColumnModel,mini.Component,{_defaultColumnWidth:100,_init:function(){this.columns=[];this._columnsRow=[];this._visibleColumnsRow=[];this._bottomColumns=[];this._visibleColumns=[];this._idColumns={};this._nameColumns={};this._fieldColumns={}},getColumns:function(){return this.columns},getAllColumns:function(){var a=[];for(var c in this._idColumns){var b=this._idColumns[c];a.push(b)}return a},getColumnsRow:function(){return this._columnsRow},getVisibleColumnsRow:function(){return this._visibleColumnsRow},getBottomColumns:function(){return this._bottomColumns},getVisibleColumns:function(){return this._visibleColumns},_getBottomColumnsByColumn:function(f){f=this.getColumn(f);var d=this._bottomColumns;var e=[];for(var b=0,a=d.length;b<a;b++){var g=d[b];if(this.isAncestorColumn(f,g)){e.push(g)}}return e},_getVisibleColumnsByColumn:function(f){f=this.getColumn(f);var d=this._visibleColumns;var e=[];for(var b=0,a=d.length;b<a;b++){var g=d[b];if(this.isAncestorColumn(f,g)){e.push(g)}}return e},setColumns:function(a){if(!mini.isArray(a)){a=[]}this._init();this.columns=a;this._columnsChanged()},_columnsChanged:function(){this._updateColumnsView();this.fire("columnschanged")},_updateColumnsView:function(){this._maxColumnLevel=0;var level=0;function init(column,index,parentColumn){if(column.type){if(!mini.isNull(column.header)&&typeof column.header!=="function"){if(column.header.trim()==""){delete column.header}}var col=mini._getColumn(column.type);if(col){var _column=mini.copyTo({},column);mini.copyTo(column,col);mini.copyTo(column,_column)}}if(!column._id){column._id=mini.ColumnModel_ColumnID++}column._pid=parentColumn==this?-1:parentColumn._id;this._idColumns[column._id]=column;if(column.name){this._nameColumns[column.name]=column}column._level=level;level+=1;this.eachColumns(column,init,this);level-=1;if(column._level>this._maxColumnLevel){this._maxColumnLevel=column._level}var width=parseInt(column.width);if(mini.isNumber(width)&&String(width)==column.width){column.width=width+"px"}if(mini.isNull(column.width)){column.width=this._defaultColumnWidth+"px"}column.visible=column.visible!==false;column.allowResize=column.allowResize!==false;column.allowMove=column.allowMove!==false;column.allowSort=column.allowSort===true;column.allowDrag=!!column.allowDrag;column.readOnly=!!column.readOnly;column.autoEscape=!!column.autoEscape;column.enabled=column.enabled!==false;column.vtype=column.vtype||"";if(typeof column.filter=="string"){column.filter=eval("("+column.filter+")")}if(column.filter&&!column.filter.el){column.filter=mini.create(column.filter)}if(typeof column.init=="function"&&column.inited!=true){column.init(this.owner)}column.inited=true;column._gridUID=this.owner.uid;column._rowIdField=this.owner._rowIdField}this.eachColumns(this,init,this);this._createColumnsRow();var index=0;var view=this._visibleColumns=[];var bottoms=this._bottomColumns=[];this.cascadeColumns(this,function(column){if(!column.columns||column.columns.length==0){bottoms.push(column);if(this.isVisibleColumn(column)){view.push(column);column._index=index++}}},this);this._fieldColumns={};var columns=this.getAllColumns();for(var i=0,l=columns.length;i<l;i++){var column=columns[i];if(column.field&&!this._fieldColumns[column.field]){this._fieldColumns[column.field]=column}}this._createFrozenColSpan()},_frozenStartColumn:-1,_frozenEndColumn:-1,isFrozen:function(){return this._frozenStartColumn>=0&&this._frozenEndColumn>=this._frozenStartColumn},isFrozenColumn:function(b){if(!this.isFrozen()){return false}b=this.getColumn(b);if(!b){return false}var a=this.getVisibleColumns().indexOf(b);return this._frozenStartColumn<=a&&a<=this._frozenEndColumn},frozen:function(b,c){b=this.getColumn(b);c=this.getColumn(c);var a=this.getVisibleColumns();this._frozenStartColumn=a.indexOf(b);this._frozenEndColumn=a.indexOf(c);if(b&&c){this._columnsChanged()}},unFrozen:function(){this._frozenStartColumn=-1;this._frozenEndColumn=-1;this._columnsChanged()},setFrozenStartColumn:function(a){this.frozen(a,this._frozenEndColumn)},setFrozenEndColumn:function(a){this.frozen(this._frozenStartColumn,a)},getFrozenColumns:function(){var c=[],d=this.isFrozen();for(var b=0,a=this._visibleColumns.length;b<a;b++){if(d&&this._frozenStartColumn<=b&&b<=this._frozenEndColumn){c.push(this._visibleColumns[b])}}return c},getUnFrozenColumns:function(){var c=[],d=this.isFrozen();for(var b=0,a=this._visibleColumns.length;b<a;b++){if((d&&b>this._frozenEndColumn)||!d){c.push(this._visibleColumns[b])}}return c},getFrozenColumnsRow:function(){return this.isFrozen()?this._columnsRow1:[]},getUnFrozenColumnsRow:function(){return this.isFrozen()?this._columnsRow2:this.getVisibleColumnsRow()},_createFrozenColSpan:function(){var s=this;var u=this.getVisibleColumns();var a=this._frozenStartColumn,h=this._frozenEndColumn;function t(z,w){var y=s.isBottomColumn(z)?[z]:s._getVisibleColumnsByColumn(z);for(var x=0,j=y.length;x<j;x++){var A=y[x];var k=u.indexOf(A);if(w==0&&k<a){return true}if(w==1&&a<=k&&k<=h){return true}if(w==2&&k>h){return true}}return false}function b(x,w){var j=mini.treeToList(x.columns,"columns");var z=0;for(var y=0,k=j.length;y<k;y++){var A=j[y];if(s.isVisibleColumn(A)==false||t(A,w)==false){continue}if(!A.columns||A.columns.length==0){z+=1}}return z}var o=mini.treeToList(this.columns,"columns");for(var n=0,f=o.length;n<f;n++){var e=o[n];delete e.colspan0;delete e.colspan1;delete e.colspan2;delete e.viewIndex0;delete e.viewIndex1;delete e.viewIndex2;if(this.isFrozen()){if(e.columns&&e.columns.length>0){e.colspan1=b(e,1);e.colspan2=b(e,2);e.colspan0=b(e,0)}else{e.colspan1=1;e.colspan2=1;e.colspan0=1}if(t(e,0)){e["viewIndex"+0]=true}if(t(e,1)){e["viewIndex"+1]=true}if(t(e,2)){e["viewIndex"+2]=true}}}var v=this._getMaxColumnLevel();this._columnsRow1=[];this._columnsRow2=[];for(var n=0,f=this._visibleColumnsRow.length;n<f;n++){var d=this._visibleColumnsRow[n];var r=[];var p=[];this._columnsRow1.push(r);this._columnsRow2.push(p);for(var m=0,g=d.length;m<g;m++){var q=d[m];if(q.viewIndex1){r.push(q)}if(q.viewIndex2){p.push(q)}}}},_createColumnsRow:function(){var m=this._getMaxColumnLevel();var k=[];var a=[];for(var e=0,d=m;e<=d;e++){k.push([]);a.push([])}var h=this;function b(p){var n=mini.treeToList(p.columns,"columns");var r=0;for(var q=0,o=n.length;q<o;q++){var s=n[q];if(h.isVisibleColumn(s)==false){continue}if(!s.columns||s.columns.length==0){r+=1}}return r}var g=mini.treeToList(this.columns,"columns");for(var e=0,d=g.length;e<d;e++){var c=g[e];var j=k[c._level];var f=a[c._level];delete c.rowspan;delete c.colspan;if(c.columns&&c.columns.length>0){c.colspan=b(c)}if((!c.columns||c.columns.length==0)&&c._level<m){c.rowspan=m-c._level+1}j.push(c);if(this.isVisibleColumn(c)){f.push(c)}}this._columnsRow=k;this._visibleColumnsRow=a},_getMaxColumnLevel:function(){return this._maxColumnLevel},cascadeColumns:function(g,f,e){if(!f){return}var b=g.columns;if(b){b=b.clone();for(var d=0,a=b.length;d<a;d++){var h=b[d];if(f.call(e||this,h,d,g)===false){return}this.cascadeColumns(h,f,e)}}},eachColumns:function(f,e,d){var c=f.columns;if(c){var g=c.clone();for(var b=0,a=g.length;b<a;b++){var h=g[b];if(e.call(d,h,b,f)===false){break}}}},getColumn:function(a){var b=typeof a;if(b=="number"){return this._bottomColumns[a]}else{if(b=="object"){return a}else{return this._nameColumns[a]}}},getColumnByField:function(a){if(!a){return null}return this._fieldColumns[a]},_getColumnById:function(a){return this._idColumns[a]},_getDataTypeByField:function(e){var f="string";var c=this.getBottomColumns();for(var b=0,a=c.length;b<a;b++){var d=c[b];if(d.field==e){if(d.dataType){f=d.dataType.toLowerCase()}break}}return f},getParentColumn:function(b){b=this.getColumn(b);var a=b._pid;if(a==-1){return this}return this._idColumns[a]},getAncestorColumns:function(c){var b=[c];while(1){var a=this.getParentColumn(c);if(!a||a==this){break}b[b.length]=a;c=a}b.reverse();return b},isAncestorColumn:function(a,e){if(a==e){return true}if(!a||!e){return false}var c=this.getAncestorColumns(e);for(var d=0,b=c.length;d<b;d++){if(c[d]==a){return true}}return false},isVisibleColumn:function(f){f=this.getColumn(f);if(f.visible==false){return false}var e=this.getAncestorColumns(f);for(var d=0,a=e.length;d<a;d++){if(e[d].visible==false){return false}}var b=f.columns;if(b){var c=true;for(var d=0,a=b.length;d<a;d++){var g=b[d];if(this.isVisibleColumn(g)){c=false;break}}if(c){return false}}return true},isBottomColumn:function(a){a=this.getColumn(a);return !(a.columns&&a.columns.length>0)},updateColumn:function(b,a){b=this.getColumn(b);if(!b){return}mini.copyTo(b,a);this._columnsChanged()},moveColumn:function(d,c,e){d=this.getColumn(d);c=this.getColumn(c);if(!d||!c||!e||d==c){return}if(this.isAncestorColumn(d,c)){return}var a=this.getParentColumn(d);if(a){a.columns.remove(d)}var f=c;var b=e;if(b=="before"){f=this.getParentColumn(c);b=f.columns.indexOf(c)}else{if(b=="after"){f=this.getParentColumn(c);b=f.columns.indexOf(c)+1}else{if(b=="add"||b=="append"){if(!f.columns){f.columns=[]}b=f.columns.length}else{if(!mini.isNumber(b)){return}}}}f.columns.insert(b,d);this._columnsChanged()},addColumn:function(a){if(!a){return}delete a._id;this._columnsChanged()},removeColumn:function(){this._columnsChanged()}});mini.GridView=function(){this._createTime=new Date();this._createColumnModel();this._bindColumnModel();this.data=[];this._createSource();this._bindSource();this._initData();mini.GridView.superclass.constructor.call(this);this._doUpdateFilterRow();this._doUpdateSummaryRow();this.doUpdate()};mini.extend(mini.GridView,mini.Panel,{_displayStyle:"block",_rowIdField:"_id",width:"100%",showColumns:true,showFilterRow:false,showSummaryRow:false,showPager:false,allowCellWrap:false,allowHeaderWrap:false,showModified:true,showNewRow:true,showEmptyText:false,emptyText:"No data returned.",showHGridLines:true,showVGridLines:true,allowAlternating:false,_alternatingCls:"mini-grid-row-alt",_rowCls:"mini-grid-row",_cellCls:"mini-grid-cell",_headerCellCls:"mini-grid-headerCell",_rowSelectedCls:"mini-grid-row-selected",_rowHoverCls:"mini-grid-row-hover",_cellSelectedCls:"mini-grid-cell-selected",defaultRowHeight:21,fixedRowHeight:false,isFixedRowHeight:function(){return this.fixedRowHeight},fitColumns:true,isFitColumns:function(){return this.fitColumns},uiCls:"mini-gridview",_create:function(){mini.GridView.superclass._create.call(this);var f=this.el;mini.addClass(f,"mini-grid");mini.addClass(this._borderEl,"mini-grid-border");mini.addClass(this._viewportEl,"mini-grid-viewport");var a='<div class="mini-grid-pager"></div>';var e='<div class="mini-grid-filterRow"><div class="mini-grid-filterRow-view"></div><div class="mini-grid-scrollHeaderCell"></div></div>';var b='<div class="mini-grid-summaryRow"><div class="mini-grid-summaryRow-view"></div><div class="mini-grid-scrollHeaderCell"></div></div>';var c='<div class="mini-grid-columns"><div class="mini-grid-columns-view"></div><div class="mini-grid-scrollHeaderCell"></div></div>';this._columnsEl=mini.after(this._toolbarEl,c);this._filterEl=mini.after(this._columnsEl,e);this._rowsEl=this._bodyEl;mini.addClass(this._rowsEl,"mini-grid-rows");this._summaryEl=mini.after(this._rowsEl,b);this._bottomPagerEl=mini.after(this._summaryEl,a);this._columnsViewEl=this._columnsEl.childNodes[0];this._topRightCellEl=this._columnsEl.childNodes[1];this._rowsViewEl=mini.append(this._rowsEl,'<div class="mini-grid-rows-view"><div class="mini-grid-rows-content"></div></div>');this._rowsViewContentEl=this._rowsViewEl.firstChild;this._filterViewEl=this._filterEl.childNodes[0];this._summaryViewEl=this._summaryEl.childNodes[0];var d='<a href="#" class="mini-grid-focus" style="position:absolute;left:0px;top:0px;width:0px;height:0px;outline:none;" hideFocus onclick="return false" ></a>';this._focusEl=mini.append(this._borderEl,d)},destroy:function(c){if(this._dataSource){this._dataSource.destroy();this._dataSource=null}if(this._columnModel){this._columnModel.destroy();this._columnModel=null}if(this._pagers){var d=this._pagers.clone();for(var b=0,a=d.length;b<a;b++){d[b].destroy(c)}this._pagers=null}if(this._viewportEl){mini.clearEvent(this._viewportEl)}if(this._rowsViewEl){mini.clearEvent(this._rowsViewEl)}this._columnsEl=this._rowsEl=this._filterEl=this._summaryEl=this._bottomPagerEl=null;this._columnsViewEl=this._topRightCellEl=this._rowsViewEl=this._rowsViewContentEl=null;this._filterViewEl=this._summaryViewEl=this._focusEl=null;this._viewportEl=null;mini.GridView.superclass.destroy.call(this,c)},_initEvents:function(){mini.GridView.superclass._initEvents.call(this);mini.on(this._rowsViewEl,"scroll",this.__OnRowViewScroll,this)},_sizeChanged:function(){mini.GridView.superclass._sizeChanged.call(this)},_setBodyWidth:false,doLayout:function(){var f=this;if(!this.canLayout()){return}mini.GridView.superclass.doLayout.call(this);this._stopLayout();var c=this.isAutoHeight();var h=this._columnsViewEl.firstChild;var b=this._rowsViewContentEl.firstChild;var g=this._filterViewEl.firstChild;var a=this._summaryViewEl.firstChild;function e(i){if(this.isFitColumns()){b.style.width="100%";if(mini.isSafari||mini.isChrome||mini.isIE6){i.style.width=b.offsetWidth+"px"}else{if(this._rowsViewEl.scrollHeight>this._rowsViewEl.clientHeight+1){i.style.width="100%";i.parentNode.style.width="auto";i.parentNode.style.paddingRight="17px";if(mini.isIE8){mini.removeClass(this._rowsViewEl,"mini-grid-hidden-y")}}else{i.style.width="100%";i.parentNode.style.width="auto";i.parentNode.style.paddingRight="0px";if(mini.isIE8){mini.addClass(this._rowsViewEl,"mini-grid-hidden-y")}}}}else{b.style.width="0px";i.style.width="0px";if(mini.isSafari||mini.isChrome||mini.isIE6){}else{i.parentNode.style.width="100%";i.parentNode.style.paddingRight="0px"}}}e.call(this,h);e.call(this,g);e.call(this,a);this._syncScroll();var d=this;setTimeout(function(){mini.layout(d._filterEl);mini.layout(d._summaryEl)},10);if(mini.isIE10){setTimeout(function(){if(d.isFitColumns()){h.style.width="auto";h.offsetWidth;h.style.width="100%"}else{h.style.width="0px"}},0);mini.repaint(b)}},setBody:function(){},_createTopRowHTML:function(c){var f="";if(mini.isIE){if(mini.isIE6||mini.isIE7||!mini.boxModel){f+='<tr style="display:none;height:0px;">'}else{f+='<tr style="height:0px;">'}}else{f+='<tr style="height:0px;">'}for(var b=0,a=c.length;b<a;b++){var e=c[b];var d=e.width;var g=e._id;f+='<td id="'+g+'" style="padding:0;border:0;margin:0;height:0px;';if(e.width){f+="width:"+e.width}f+='" ></td>'}f+='<td style="width:0px;"></td>';f+="</tr>";return f},_createColumnsHTML:function(u,s,r){var r=r?r:this.getVisibleColumns();var q=['<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">'];q.push(this._createTopRowHTML(r));var p=this.getSortField();var c=this.getSortOrder();for(var m=0,g=u.length;m<g;m++){var f=u[m];q[q.length]="<tr>";for(var n=0,e=f.length;n<e;n++){var d=f[n];var o=this._createHeaderText(d,s);var a=this._createHeaderCellId(d,s);var h="";if(p&&p==d.field){h=c=="asc"?"mini-grid-asc":"mini-grid-desc"}var t="";if(this.allowHeaderWrap==false){t=" mini-grid-headerCell-nowrap "}q[q.length]='<td id="';q[q.length]=a;q[q.length]='" class="mini-grid-headerCell '+h+" "+(d.headerCls||"")+" ";var b=!(d.columns&&d.columns.length>0);if(b){q[q.length]=" mini-grid-bottomCell "}if(n==e-1){q[q.length]=" mini-grid-rightCell "}q[q.length]='" style="';if(d.headerStyle){q[q.length]=d.headerStyle+";"}if(d.headerAlign){q[q.length]="text-align:"+d.headerAlign+";"}q[q.length]='" ';if(d.rowspan){q[q.length]='rowspan="'+d.rowspan+'" '}this._createColumnColSpan(d,q,s);q[q.length]='><div class="mini-grid-headerCell-outer"><div class="mini-grid-headerCell-inner '+t+'">';q[q.length]=o;if(h){q[q.length]='<span class="mini-grid-sortIcon"></span>'}q[q.length]='</div><div id="'+d._id+'" class="mini-grid-column-splitter"></div>';q[q.length]="</div></td>"}if(this.isFrozen()&&s==1){q[q.length]='<td class="mini-grid-headerCell" style="width:0;"><div class="mini-grid-headerCell-inner" style="';q[q.length]='">0</div></td>'}q[q.length]="</tr>"}q.push("</table>");return q.join("")},_createHeaderText:function(b,a){var c=b.header;if(typeof c=="function"){c=c.call(this,b)}if(mini.isNull(c)||c===""){c="&nbsp;"}return c},_createColumnColSpan:function(b,c,a){if(b.colspan){c[c.length]='colspan="'+b.colspan+'" '}},doUpdateColumns:function(){var d=this._columnsViewEl.scrollLeft;var c=this.getVisibleColumnsRow();var a=this._createColumnsHTML(c,2);var b='<div class="mini-grid-topRightCell"></div>';a+=b;this._columnsViewEl.innerHTML=a;this._columnsViewEl.scrollLeft=d},doUpdate:function(){if(this.canUpdate()==false){return}var c=this;var e=this._isCreating();var b=new Date();this._doUpdateSummaryRow();var a=this;var d=this.getScrollLeft();function f(){if(!a.el){return}a.doUpdateColumns();a.doUpdateRows();a.doLayout();a._doUpdateTimer=null}a.doUpdateColumns();if(e){this._useEmptyView=true}if(this._rowsViewContentEl&&this._rowsViewContentEl.firstChild){this._rowsViewContentEl.removeChild(this._rowsViewContentEl.firstChild)}if(this._rowsLockContentEl&&this._rowsLockContentEl.firstChild){this._rowsLockContentEl.removeChild(this._rowsLockContentEl.firstChild)}a.doUpdateRows();if(d>0&&a.isVirtualScroll()){a.setScrollLeft(d)}if(e){this._useEmptyView=false}a.doLayout();if(e&&!this._doUpdateTimer){this._doUpdateTimer=setTimeout(f,15)}this.unmask();if(c._fireUpdateTimer){clearTimeout(c._fireUpdateTimer);c._fireUpdateTimer=null}c._fireUpdateTimer=setTimeout(function(){c._fireUpdateTimer=null;c.fire("update")},100)},_isCreating:function(){return(new Date()-this._createTime)<1000},deferUpdate:function(b){if(!b){b=5}if(this._updateTimer||this._doUpdateTimer){return}var a=this;this._updateTimer=setTimeout(function(){a._updateTimer=null;a.doUpdate()},b)},_pushUpdateCallback:function(c,b,a){var d=0;if(this._doUpdateTimer||this._updateTimer){d=20}if(d==0){c.apply(b,a)}else{setTimeout(function(){c.apply(b,a)},d)}},_updateCount:0,beginUpdate:function(){this._updateCount++},endUpdate:function(a){this._updateCount--;if(this._updateCount==0||a===true){this._updateCount=0;this.doUpdate()}},canUpdate:function(){return this._updateCount==0},setDefaultRowHeight:function(a){this.defaultRowHeight=a},getDefaultRowHeight:function(){return this.defaultRowHeight},_getRowHeight:function(a){var b=this.defaultRowHeight;if(a._height){b=parseInt(a._height);if(isNaN(parseInt(a._height))){b=rowHeight}}b-=4;b-=1;return b},_createGroupingHTML:function(g,s){var f=this.getGroupingView();var b=this._showGroupSummary;var n=this.isFrozen();var q=0;var o=this;function m(v,w){p.push('<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">');if(g.length>0){p.push(o._createTopRowHTML(g));for(var u=0,e=v.length;u<e;u++){var x=v[u];o._createRowHTML(x,q++,g,s,p)}}if(b){}p.push("</table>")}var p=['<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">'];p.push(this._createTopRowHTML(g));for(var i=0,h=f.length;i<h;i++){if(s==1&&!this.isFrozen()){continue}var r=f[i];var d=this._createRowGroupId(r,s);var c=this._createRowGroupRowsId(r,s);var l=this._OnDrawGroup(r);var t=r.expanded?"":" mini-grid-group-collapse ";p[p.length]='<tr id="';p[p.length]=d;p[p.length]='" class="mini-grid-groupRow';p[p.length]=t;p[p.length]='"><td class="mini-grid-groupCell" colspan="';p[p.length]=g.length;p[p.length]='"><div class="mini-grid-groupHeader">';if(!n||(n&&s==1)){p[p.length]='<div class="mini-grid-group-ecicon"></div>';p[p.length]='<div class="mini-grid-groupTitle">'+l.cellHtml+"</div>"}else{p[p.length]="&nbsp;"}p[p.length]="</div></td></tr>";var a=r.expanded?"":"display:none";p[p.length]='<tr class="mini-grid-groupRows-tr" style="';p[p.length]='"><td class="mini-grid-groupRows-td" colspan="';p[p.length]=g.length;p[p.length]='"><div id="';p[p.length]=c;p[p.length]='" class="mini-grid-groupRows" style="';p[p.length]=a;p[p.length]='">';m(r.rows,r);p[p.length]="</div></td></tr>"}p.push("</table>");return p.join("")},_isFastCreating:function(){var a=this.getVisibleRows();if(a.length>50){return this._isCreating()||this.getScrollTop()<50*this._defaultRowHeight}return false},isShowRowDetail:function(a){return false},isCellValid:function(a,b){return true},_createRowHTML:function(g,q,d,o,a){var n=!a;if(!a){a=[]}var f="";var v=this.isFixedRowHeight();if(v){f=this._getRowHeight(g)}var k=-1;var t=" ";var j=-1;var y=" ";a[a.length]='<tr class="mini-grid-row ';if(g._state=="added"&&this.showNewRow){a[a.length]="mini-grid-newRow "}if(this.isShowRowDetail(g)){a[a.length]="mini-grid-expandRow "}if(this.allowAlternating&&q%2==1){a[a.length]=this._alternatingCls;a[a.length]=" "}var p=this._dataSource.isSelected(g);if(p){a[a.length]=this._rowSelectedCls;a[a.length]=" "}k=a.length;a[a.length]=t;a[a.length]='" style="';j=a.length;a[a.length]=y;if(g.visible===false){a[a.length]=";display:none;"}a[a.length]='" id="';a[a.length]=this._createRowId(g,o);a[a.length]='">';var A=this._currentCell;for(var w=0,u=d.length;w<u;w++){var h=d[w];var z=this._createCellId(g,h);var c="";var x=this._OnDrawCell(g,h,q,h._index);if(x.cellHtml===null||x.cellHtml===undefined||x.cellHtml===""){x.cellHtml="&nbsp;"}a[a.length]="<td ";if(x.rowSpan){a[a.length]='rowspan="'+x.rowSpan+'"'}if(x.colSpan){a[a.length]='colspan="'+x.colSpan+'"'}a[a.length]=' id="';a[a.length]=z;a[a.length]='" class="mini-grid-cell ';if(!this.isCellValid(g,h)){a[a.length]=" mini-grid-cell-error "}if(w==u-1){a[a.length]=" mini-grid-rightCell "}if(x.cellCls){a[a.length]=" "+x.cellCls+" "}if(c){a[a.length]=c}if(A&&A[0]==g&&A[1]==h){a[a.length]=" ";a[a.length]=this._cellSelectedCls}a[a.length]='" style="';if(x.showHGridLines==false){a[a.length]="border-bottom:0;"}if(x.showVGridLines==false){a[a.length]="border-right:0;"}if(!x.visible){a[a.length]="display:none;"}if(h.align){a[a.length]="text-align:";a[a.length]=h.align;a[a.length]=";"}if(x.cellStyle){a[a.length]=x.cellStyle}a[a.length]='">';a[a.length]='<div class="mini-grid-cell-inner ';if(!x.allowCellWrap){a[a.length]=" mini-grid-cell-nowrap "}if(x.cellInnerCls){a[a.length]=x.cellInnerCls}var b=h.field?this._dataSource.isModified(g,h.field):false;if(b&&this.showModified){a[a.length]=" mini-grid-cell-dirty"}a[a.length]='" style="';if(v){a[a.length]="height:";a[a.length]=f;a[a.length]="px;";a[a.length]="line-height:";a[a.length]=f;a[a.length]="px;"}if(x.cellInnerStyle){a[a.length]=x.cellInnerStyle}a[a.length]='">';a[a.length]=x.cellHtml;a[a.length]="</div>";a[a.length]="</td>";if(x.rowCls){t=x.rowCls}if(x.rowStyle){y=x.rowStyle}}if(this.isFrozen()&&o==1){a[a.length]='<td class="mini-grid-cell" style="width:0;';if(this.showHGridLines==false){a[a.length]="border-bottom:0;"}a[a.length]='"><div class="mini-grid-cell-inner" style="';if(v){a[a.length]="height:";a[a.length]=f;a[a.length]="px;"}a[a.length]='">0</div></td>'}a[k]=t;a[j]=y;a[a.length]="</tr>";if(n){var r=a.join("");var m=/(<script(.*)<\/script(\s*)>)/i;r=r.replace(m,"");return r}},_createRowsHTML:function(b,o,e,l){e=e||this.getVisibleRows();var i=['<table class="mini-grid-table mini-grid-rowstable" cellspacing="0" cellpadding="0" border="0">'];i.push(this._createTopRowHTML(b));var m=this.uid+"$emptytext"+o;if(o==2){var a=(this.showEmptyText&&e.length==0)?"":"display:none;";i.push('<tr id="'+m+'" style="'+a+'"><td class="mini-grid-emptyText" colspan="'+b.length+'">'+this.emptyText+"</td></tr>")}var n=0;if(e.length>0){var g=e[0];n=this.getVisibleRows().indexOf(g)}for(var d=0,c=e.length;d<c;d++){var h=n+d;var f=e[d];this._createRowHTML(f,h,b,o,i)}if(l){i.push(l)}i.push("</table>");return i.join("")},doUpdateRows:function(){var c=this.getVisibleRows();var b=this.getVisibleColumns();if(this.isGrouping()){var a=this._createGroupingHTML(b,2);this._rowsViewContentEl.innerHTML=a}else{var a=this._createRowsHTML(b,2,c);this._rowsViewContentEl.innerHTML=a}},_createFilterRowHTML:function(d,b){var h=['<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">'];h.push(this._createTopRowHTML(d));h[h.length]="<tr>";for(var c=0,a=d.length;c<a;c++){var f=d[c];var g=this._createFilterCellId(f);h[h.length]='<td id="';h[h.length]=g;h[h.length]='" class="mini-grid-filterCell" style="';h[h.length]='">&nbsp;</td>'}h[h.length]='</tr></table><div class="mini-grid-scrollHeaderCell"></div>';var e=h.join("");return e},_doRenderFilters:function(){var d=this.getVisibleColumns();for(var c=0,a=d.length;c<a;c++){var e=d[c];if(e.filter){var b=this.getFilterCellEl(e);if(b){b.innerHTML="";e.filter.render(b)}}}},_doUpdateFilterRow:function(){if(this._filterViewEl.firstChild){this._filterViewEl.removeChild(this._filterViewEl.firstChild)}var c=this.isFrozen();var b=this.getVisibleColumns();var a=this._createFilterRowHTML(b,2);this._filterViewEl.innerHTML=a;this._doRenderFilters()},_createSummaryRowHTML:function(d,k){var b=this.getDataView();var j=['<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">'];j.push(this._createTopRowHTML(d));j[j.length]="<tr>";for(var g=0,f=d.length;g<f;g++){var c=d[g];var a=this._createSummaryCellId(c);var h=this._OnDrawSummaryCell(b,c);j[j.length]='<td id="';j[j.length]=a;j[j.length]='" class="mini-grid-summaryCell '+h.cellCls+'" style="'+h.cellStyle+";";j[j.length]='">';j[j.length]=h.cellHtml;j[j.length]="</td>"}j[j.length]='</tr></table><div class="mini-grid-scrollHeaderCell"></div>';var m=j.join("");return m},_doUpdateSummaryRow:function(){var b=this.getVisibleColumns();var a=this._createSummaryRowHTML(b,2);this._summaryViewEl.innerHTML=a},_doSortByField:function(b,c){if(!b){return null}var a=this._columnModel._getDataTypeByField(b);this._dataSource._doClientSortField(b,c,a)},_expandGroupOnLoad:true,_GroupID:1,_groupField:"",_groupDir:"",groupBy:function(b,a){if(!b){return}this._groupField=b;if(typeof a=="string"){a=a.toLowerCase()}this._groupDir=a;this._createGroupingView();this.deferUpdate()},clearGroup:function(){this._groupField="";this._groupDir="";this._groupDataView=null;this.deferUpdate()},setGroupField:function(a){this.groupBy(a)},setGroupDir:function(a){this._groupDir=field;this.groupBy(this._groupField,a)},isGrouping:function(){return this._groupField!=""},getGroupingView:function(){return this._groupDataView},_createGroupingView:function(){if(this.isGrouping()==false){return}this._groupDataView=null;var j=this._groupField,d=this._groupDir;this._doSortByField(j,d);var f=this.getVisibleRows();var c=[];var h={};for(var g=0,e=f.length;g<e;g++){var b=f[g];var m=b[j];var a=mini.isDate(m)?m.getTime():m;var k=h[a];if(!k){k=h[a]={};k.field=j,k.dir=d;k.value=m;k.rows=[];c.push(k);k.id="g"+this._GroupID++;k.expanded=this._expandGroupOnLoad}k.rows.push(b)}this._groupDataView=c},_OnDrawGroup:function(b){var a={group:b,rows:b.rows,field:b.field,dir:b.dir,value:b.value,cellHtml:b.field+" ("+b.rows.length+" Items)"};this.fire("drawgroup",a);return a},getRowGroup:function(b){var a=typeof b;if(a=="number"){return this.getGroupingView()[b]}if(a=="string"){return this._getRowGroupById(b)}return b},_getRowGroupByEvent:function(c){var a=mini.findParent(c.target,"mini-grid-groupRow");if(a){var b=a.id.split("$");if(b[0]!=this._id){return null}var d=b[b.length-1];return this._getRowGroupById(d)}return null},_getRowGroupById:function(e){var a=this.getGroupingView();for(var c=0,b=a.length;c<b;c++){var d=a[c];if(d.id==e){return d}}return null},_createRowGroupId:function(b,a){return this._id+"$group"+a+"$"+b.id},_createRowGroupRowsId:function(b,a){return this._id+"$grouprows"+a+"$"+b.id},_createRowId:function(b,a){var c=this._id+"$row"+a+"$"+b._id;return c},_createHeaderCellId:function(b,a){var c=this._id+"$headerCell"+a+"$"+b._id;return c},_createCellId:function(b,a){var c=b._id+"$cell$"+a._id;return c},_createFilterCellId:function(a){return this._id+"$filter$"+a._id},_createSummaryCellId:function(a){return this._id+"$summary$"+a._id},getFilterCellEl:function(a){a=this.getColumn(a);if(!a){return null}return document.getElementById(this._createFilterCellId(a))},getSummaryCellEl:function(a){a=this.getColumn(a);if(!a){return null}return document.getElementById(this._createSummaryCellId(a))},_doVisibleEls:function(){mini.GridView.superclass._doVisibleEls.call(this);this._columnsEl.style.display=this.showColumns?"block":"none";this._filterEl.style.display=this.showFilterRow?"block":"none";this._summaryEl.style.display=this.showSummaryRow?"block":"none";this._bottomPagerEl.style.display=this.showPager?"block":"none"},setShowColumns:function(a){this.showColumns=a;this._doVisibleEls();this.deferLayout()},setShowFilterRow:function(a){this.showFilterRow=a;this._doVisibleEls();this.deferLayout()},setShowSummaryRow:function(a){this.showSummaryRow=a;this._doVisibleEls();this.deferLayout()},setShowPager:function(a){this.showPager=a;this._doVisibleEls();this.deferLayout()},setFitColumns:function(a){this.fitColumns=a;mini.removeClass(this.el,"mini-grid-fixwidth");if(this.fitColumns==false){mini.addClass(this.el,"mini-grid-fixwidth")}this.deferLayout()},getBodyHeight:function(b){var a=mini.GridView.superclass.getBodyHeight.call(this,b);a=a-this.getColumnsHeight()-this.getFilterHeight()-this.getSummaryHeight()-this.getPagerHeight();return a},getColumnsHeight:function(){if(!this.showColumns){return 0}var a=mini.getHeight(this._columnsEl);return a},getFilterHeight:function(){return this.showFilterRow?mini.getHeight(this._filterEl):0},getSummaryHeight:function(){return this.showSummaryRow?mini.getHeight(this._summaryEl):0},getPagerHeight:function(){return this.showPager?mini.getHeight(this._bottomPagerEl):0},getGridViewBox:function(c){var b=mini.getBox(this._columnsEl);var a=mini.getBox(this._bodyEl);b.height=a.bottom-b.top;b.bottom=b.top+b.height;return b},getSortField:function(a){return this._dataSource.sortField},getSortOrder:function(a){return this._dataSource.sortOrder},_createSource:function(){this._dataSource=new mini.DataTable()},_bindSource:function(){var a=this._dataSource;a.on("loaddata",this.__OnSourceLoadData,this);a.on("cleardata",this.__OnSourceClearData,this)},__OnSourceLoadData:function(a){this._initData();this.doUpdate()},__OnSourceClearData:function(a){this._initData();this.doUpdate()},_initData:function(){},isFrozen:function(){var b=this._columnModel._frozenStartColumn,a=this._columnModel._frozenEndColumn;return this._columnModel.isFrozen()},_createColumnModel:function(){this._columnModel=new mini.ColumnModel(this)},_bindColumnModel:function(){this._columnModel.on("columnschanged",this.__OnColumnsChanged,this)},__OnColumnsChanged:function(a){this.columns=this._columnModel.columns;this._doUpdateFilterRow();this._doUpdateSummaryRow();this.doUpdate();this.fire("columnschanged")},setColumns:function(a){this._columnModel.setColumns(a);this.columns=this._columnModel.columns},getColumns:function(){return this._columnModel.getColumns()},getBottomColumns:function(){return this._columnModel.getBottomColumns()},getVisibleColumnsRow:function(){var a=this._columnModel.getVisibleColumnsRow().clone();return a},getVisibleColumns:function(){var a=this._columnModel.getVisibleColumns().clone();return a},getFrozenColumns:function(){var a=this._columnModel.getFrozenColumns().clone();return a},getUnFrozenColumns:function(){var a=this._columnModel.getUnFrozenColumns().clone();return a},getColumn:function(a){return this._columnModel.getColumn(a)},updateColumn:function(b,a){this._columnModel.updateColumn(b,a)},showColumns:function(c){for(var b=0,a=c.length;b<a;b++){var d=this.getColumn(c[b]);if(!d){continue}d.visible=true}this._columnModel._columnsChanged()},hideColumns:function(c){for(var b=0,a=c.length;b<a;b++){var d=this.getColumn(c[b]);if(!d){continue}d.visible=false}this._columnModel._columnsChanged()},showColumn:function(a){this.updateColumn(a,{visible:true})},hideColumn:function(a){this.updateColumn(a,{visible:false})},moveColumn:function(b,a,c){this._columnModel.moveColumn(b,a,c)},removeColumn:function(b){b=this.getColumn(b);if(!b){return}var a=this.getParentColumn(b);if(b&&a){a.columns.remove(b);this._columnModel._columnsChanged()}return b},setDefaultColumnWidth:function(a){this._columnModel._defaultColumnWidth=a},getDefaultColumnWidth:function(){return this._columnModel._defaultColumnWidth},setColumnWidth:function(b,a){this.updateColumn(b,{width:a})},getColumnWidth:function(a){var b=this.getColumnBox(a);return b.width},getParentColumn:function(a){return this._columnModel.getParentColumn(a)},getMaxColumnLevel:function(){return this._columnModel._getMaxColumnLevel()},_isCellVisible:function(b,a){return true},_createDrawCellEvent:function(b,d,h,c){var f=mini._getMap(d.field,b);var g={sender:this,rowIndex:h,columnIndex:c,record:b,row:b,column:d,field:d.field,value:f,cellHtml:f,rowCls:"",rowStyle:null,cellCls:d.cellCls||"",cellStyle:d.cellStyle||"",allowCellWrap:this.allowCellWrap,showHGridLines:this.showHGridLines,showVGridLines:this.showVGridLines,cellInnerCls:"",cellInnnerStyle:"",autoEscape:d.autoEscape};g.visible=this._isCellVisible(h,c);if(g.visible==true&&this._mergedCellMaps){var a=this._mergedCellMaps[h+":"+c];if(a){g.rowSpan=a.rowSpan;g.colSpan=a.colSpan}}return g},_OnDrawCell:function(a,d,i,c){var h=this._createDrawCellEvent(a,d,i,c);var g=h.value;if(d.dateFormat){if(mini.isDate(h.value)){h.cellHtml=mini.formatDate(g,d.dateFormat)}else{h.cellHtml=g}}if(d.dataType=="float"){var g=parseFloat(h.value);if(!isNaN(g)){decimalPlaces=parseInt(d.decimalPlaces);if(isNaN(decimalPlaces)){decimalPlaces=2}h.cellHtml=g.toFixed(decimalPlaces)}}if(d.dataType=="currency"){h.cellHtml=mini.formatCurrency(h.value,d.currencyUnit)}if(d.displayField){h.cellHtml=mini._getMap(d.displayField,a)}if(h.autoEscape==true){h.cellHtml=mini.htmlEncode(h.cellHtml)}var f=d.renderer;if(f){var b=typeof f=="function"?f:mini._getFunctoin(f);if(b){h.cellHtml=b.call(d,h)}}this.fire("drawcell",h);if(h.cellHtml&&!!h.cellHtml.unshift&&h.cellHtml.length==0){h.cellHtml="&nbsp;"}if(h.cellHtml===null||h.cellHtml===undefined||h.cellHtml===""){h.cellHtml="&nbsp;"}return h},_OnDrawSummaryCell:function(a,c){var g={result:this.getResultObject(),sender:this,data:a,column:c,field:c.field,value:"",cellHtml:"",cellCls:c.cellCls||"",cellStyle:c.cellStyle||"",allowCellWrap:this.allowCellWrap};if(c.summaryType){var b=mini.summaryTypes[c.summaryType];if(b){g.value=b(a,c.field)}}var f=g.value;g.cellHtml=g.value;if(g.value&&parseInt(g.value)!=g.value&&g.value.toFixed){decimalPlaces=parseInt(c.decimalPlaces);if(isNaN(decimalPlaces)){decimalPlaces=2}g.cellHtml=parseFloat(g.value.toFixed(decimalPlaces))}if(c.dateFormat){if(mini.isDate(g.value)){g.cellHtml=mini.formatDate(f,c.dateFormat)}else{g.cellHtml=f}}if(c.dataType=="currency"){g.cellHtml=mini.formatCurrency(g.cellHtml,c.currencyUnit)}var d=c.summaryRenderer;if(d){b=typeof d=="function"?d:window[d];if(b){g.cellHtml=b.call(c,g)}}c.summaryValue=g.value;this.fire("drawsummarycell",g);if(g.cellHtml===null||g.cellHtml===undefined||g.cellHtml===""){g.cellHtml="&nbsp;"}return g},getScrollTop:function(){return this._rowsViewEl.scrollTop},setScrollTop:function(a){this._rowsViewEl.scrollTop=a},getScrollLeft:function(){return this._rowsViewEl.scrollLeft},setScrollLeft:function(a){this._rowsViewEl.scrollLeft=a},_syncScroll:function(){var a=this._rowsViewEl.scrollLeft;this._filterViewEl.scrollLeft=a;this._summaryViewEl.scrollLeft=a;this._columnsViewEl.scrollLeft=a},__OnRowViewScroll:function(a){this._syncScroll()},_pagers:[],_createPagers:function(){this._pagers=[];var a=new mini.Pager();this._setBottomPager(a)},_setBottomPager:function(a){a=mini.create(a);if(!a){return}if(this._bottomPager){this.unbindPager(this._bottomPager);this._bottomPagerEl.removeChild(this._bottomPager.el)}this._bottomPager=a;a.render(this._bottomPagerEl);this.bindPager(a)},bindPager:function(a){this._pagers.add(a)},unbindPager:function(a){this._pagers.remove(a)},setShowEmptyText:function(a){this.showEmptyText=a;if(this.data.length==0){this.deferUpdate()}},getShowEmptyText:function(){return this.showEmptyText},setEmptyText:function(a){this.emptyText=a},getEmptyText:function(){return this.emptyText},setShowModified:function(a){this.showModified=a},getShowModified:function(){return this.showModified},setShowNewRow:function(a){this.showNewRow=a},getShowNewRow:function(){return this.showNewRow},setAllowCellWrap:function(a){this.allowCellWrap=a},getAllowCellWrap:function(){return this.allowCellWrap},setAllowHeaderWrap:function(a){this.allowHeaderWrap=a},getAllowHeaderWrap:function(){return this.allowHeaderWrap},setShowHGridLines:function(a){if(this.showHGridLines!=a){this.showHGridLines=a;this.deferUpdate()}},getShowHGridLines:function(){return this.showHGridLines},setShowVGridLines:function(a){if(this.showVGridLines!=a){this.showVGridLines=a;this.deferUpdate()}},getShowVGridLines:function(){return this.showVGridLines}});mini.copyTo(mini.GridView.prototype,mini._DataTableApplys);mini.regClass(mini.GridView,"gridview");mini.FrozenGridView=function(){mini.FrozenGridView.superclass.constructor.call(this)};mini.extend(mini.FrozenGridView,mini.GridView,{isFixedRowHeight:function(){return this.fixedRowHeight},frozenPosition:"left",isRightFrozen:function(){return this.frozenPosition=="right"},_create:function(){mini.FrozenGridView.superclass._create.call(this);var c=this.el;var b='<div class="mini-grid-columns-lock"></div>';var e='<div class="mini-grid-rows-lock"><div class="mini-grid-rows-content"></div></div>';this._columnsLockEl=mini.before(this._columnsViewEl,b);this._rowsLockEl=mini.before(this._rowsViewEl,e);this._rowsLockContentEl=this._rowsLockEl.firstChild;var d='<div class="mini-grid-filterRow-lock"></div>';this._filterLockEl=mini.before(this._filterViewEl,d);var a='<div class="mini-grid-summaryRow-lock"></div>';this._summaryLockEl=mini.before(this._summaryViewEl,a)},_initEvents:function(){mini.FrozenGridView.superclass._initEvents.call(this);mini.on(this._rowsEl,"mousewheel",this.__OnMouseWheel,this)},_createHeaderText:function(b,a){var c=b.header;if(typeof c=="function"){c=c.call(this,b)}if(mini.isNull(c)||c===""){c="&nbsp;"}if(this.isFrozen()&&a==2){if(b.viewIndex1){c="&nbsp;"}}return c},_createColumnColSpan:function(b,d,a){if(this.isFrozen()){var c=b["colspan"+a];if(c){d[d.length]='colspan="'+c+'" '}}else{if(b.colspan){d[d.length]='colspan="'+b.colspan+'" '}}},doUpdateColumns:function(){var d=this._columnsViewEl.scrollLeft;var h=this.isFrozen()?this.getFrozenColumnsRow():[];var f=this.isFrozen()?this.getUnFrozenColumnsRow():this.getVisibleColumnsRow();var b=this.isFrozen()?this.getFrozenColumns():[];var c=this.isFrozen()?this.getUnFrozenColumns():this.getVisibleColumns();var g=this._createColumnsHTML(h,1,b);var e=this._createColumnsHTML(f,2,c);var i='<div class="mini-grid-topRightCell"></div>';g+=i;e+=i;this._columnsLockEl.innerHTML=g;this._columnsViewEl.innerHTML=e;var a=this._columnsLockEl.firstChild;a.style.width="0px";this._columnsViewEl.scrollLeft=d},doUpdateRows:function(){var d=this.getVisibleRows();var f=this.getFrozenColumns();var e=this.getUnFrozenColumns();if(this.isGrouping()){var b=this._createGroupingHTML(f,1);var a=this._createGroupingHTML(e,2);this._rowsLockContentEl.innerHTML=b;this._rowsViewContentEl.innerHTML=a}else{var b=this._createRowsHTML(f,1,this.isFrozen()?d:[]);var a=this._createRowsHTML(e,2,d);this._rowsLockContentEl.innerHTML=b;this._rowsViewContentEl.innerHTML=a}var c=this._rowsLockContentEl.firstChild;c.style.width="0px"},_doUpdateFilterRow:function(){if(this._filterLockEl.firstChild){this._filterLockEl.removeChild(this._filterLockEl.firstChild)}if(this._filterViewEl.firstChild){this._filterViewEl.removeChild(this._filterViewEl.firstChild)}var d=this.getFrozenColumns();var c=this.getUnFrozenColumns();var b=this._createFilterRowHTML(d,1);var a=this._createFilterRowHTML(c,2);this._filterLockEl.innerHTML=b;this._filterViewEl.innerHTML=a;this._doRenderFilters()},_doUpdateSummaryRow:function(){var d=this.getFrozenColumns();var c=this.getUnFrozenColumns();var b=this._createSummaryRowHTML(d,1);var a=this._createSummaryRowHTML(c,2);this._summaryLockEl.innerHTML=b;this._summaryViewEl.innerHTML=a},_syncRowsHeightTimer:null,_syncRowsHeight:function(){var a=this;function b(){var h=document;var e=a.getDataView();for(var f=0,c=e.length;f<c;f++){var n=e[f];var m=a._getRowEl(n,1);var k=a._getRowEl(n,2);if(!m||!k){continue}m.style.height=k.style.height="auto";var j=m.offsetHeight;var g=k.offsetHeight;if(j<g){j=g}m.style.height=k.style.height=j+"px"}a._syncRowsHeightTimer=null}if(this.isFrozen()&&this.isFixedRowHeight()==false){if(this._syncRowsHeightTimer){clearTimeout(this._syncRowsHeightTimer)}this._syncRowsHeightTimer=setTimeout(b,2)}},_syncColumnHeight:function(){var c=this._columnsLockEl,a=this._columnsViewEl;c.style.height=a.style.height="auto";if(this.isFrozen()){var d=c.offsetHeight;var b=a.offsetHeight;d=d>b?d:b;c.style.height=a.style.height=d+"px"}var c=this._summaryLockEl,a=this._summaryViewEl;c.style.height=a.style.height="auto";if(this.isFrozen()){var d=c.offsetHeight;var b=a.offsetHeight;d=d>b?d:b;c.style.height=a.style.height=d+"px"}},_layoutColumns:function(){function e(i){return i.offsetHeight}function a(u){var t=[];for(var s=0,r=u.cells.length;s<r;s++){var v=u.cells[s];if(v.style.width=="0px"){continue}t.push(v)}return t}function m(u){var t=a(u);for(var s=0,r=t.length;s<r;s++){var v=t[s];v.style.height="auto"}}function k(){o.style.height=o.style.height="auto";for(var s=0,r=o.rows.length;s<r;s++){var u=o.rows[s];var t=n.rows[s];m(u);m(t)}}function f(y,z){var x=0;var v=a(y);for(var w=0,t=v.length;w<t;w++){var s=v[w];var u=parseInt(s.rowSpan)>1;if(u&&z){continue}var r=s.offsetHeight;if(r>x){x=r}}return x}if(!this.isFrozen()){return}var o=this._columnsLockEl.firstChild,n=this._columnsViewEl.firstChild;function b(v,y){var u=f(y,true);var t=a(v);for(var s=0,r=t.length;s<r;s++){var x=t[s];var w=parseInt(x.rowSpan)>1;if(w){}else{mini.setHeight(x,u)}}}function j(v,y){var u=f(y);var t=a(v);for(var s=0,r=t.length;s<r;s++){var x=t[s];var w=parseInt(x.rowSpan)>1;if(w){mini.setHeight(x,u)}else{}}}k();for(var d=0,c=o.rows.length;d<c;d++){var q=o.rows[d];var p=n.rows[d];var h=f(q),g=f(p);if(h==g){}else{if(h<g){b(q,p);j(q,p)}else{if(h>g){b(p,q);j(p,q)}}}}var h=e(o),g=e(n);if(h<g){mini.setHeight(o,g)}else{if(h>g){mini.setHeight(n,h)}}},doLayout:function(){if(this.canLayout()==false){return}this._doLayoutScroll=false;var c=this.isAutoHeight();var e=this.isFrozen();var a=this.getViewportWidth(true);var b=this.getLockedWidth();var d=a-b;this._doEmptyText();var g=this.isRightFrozen()?"marginRight":"marginLeft";var f=this.isRightFrozen()?"right":"left";if(e){this._filterViewEl.style[g]=b+"px";this._summaryViewEl.style[g]=b+"px";this._columnsViewEl.style[g]=b+"px";this._rowsViewEl.style[g]=b+"px";if(mini.isSafari||mini.isChrome||mini.isIE6){this._filterViewEl.style.width=d+"px";this._summaryViewEl.style.width=d+"px";this._columnsViewEl.style.width=d+"px"}else{this._filterViewEl.style.width="auto";this._summaryViewEl.style.width="auto";this._columnsViewEl.style.width="auto"}if(mini.isSafari||mini.isChrome||mini.isIE6){this._rowsViewEl.style.width=d+"px"}mini.setWidth(this._filterLockEl,b);mini.setWidth(this._summaryLockEl,b);mini.setWidth(this._columnsLockEl,b);mini.setWidth(this._rowsLockEl,b);this._filterLockEl.style[f]="0px";this._summaryLockEl.style[f]="0px";this._columnsLockEl.style[f]="0px";this._rowsLockEl.style[f]="0px"}else{this._doClearFrozen()}this._layoutColumns();this._syncColumnHeight();mini.FrozenGridView.superclass.doLayout.call(this);if(e){if(mini.isChrome||mini.isIE6){this._layoutColumns();this._syncColumnHeight();mini.FrozenGridView.superclass.doLayout.call(this)}}if(c){this._rowsLockEl.style.height="auto"}else{this._rowsLockEl.style.height="100%"}this._syncRowsHeight()},_doEmptyText:function(){},_getRowEl:function(c,a){c=this.getRecord(c);var d=this._createRowId(c,a);var b=document.getElementById(d);return b},_doClearFrozen:function(){var b=this.isRightFrozen()?"marginRight":"marginLeft";var a=this.isRightFrozen()?"right":"left";this._filterLockEl.style.left="-10px";this._summaryLockEl.style.left="-10px";this._columnsLockEl.style.left="-10px";this._rowsLockEl.style.left="-10px";this._filterLockEl.style.width="0px";this._summaryLockEl.style.width="0px";this._columnsLockEl.style.width="0px";this._rowsLockEl.style.width="0px";this._filterViewEl.style.marginLeft="0px";this._summaryViewEl.style.marginLeft="0px";this._columnsViewEl.style.marginLeft="0px";this._rowsViewEl.style.marginLeft="0px";this._filterViewEl.style.width="auto";this._summaryViewEl.style.width="auto";this._columnsViewEl.style.width="auto";this._rowsViewEl.style.width="auto";if(mini.isSafari||mini.isChrome||mini.isIE6){this._filterViewEl.style.width="100%";this._summaryViewEl.style.width="100%";this._columnsViewEl.style.width="100%";this._rowsViewEl.style.width="100%"}},frozenColumns:function(a,b){this.frozen(a,b)},unFrozenColumns:function(){this.unFrozen()},frozen:function(a,b){this._doClearFrozen();this._columnModel.frozen(a,b)},unFrozen:function(){this._doClearFrozen();this._columnModel.unFrozen()},setFrozenStartColumn:function(a){this._columnModel.setFrozenStartColumn(a)},setFrozenEndColumn:function(a){return this._columnModel.setFrozenEndColumn(a)},getFrozenStartColumn:function(a){return this._columnModel._frozenStartColumn},getFrozenEndColumn:function(a){return this._columnModel._frozenEndColumn},getFrozenColumnsRow:function(){return this._columnModel.getFrozenColumnsRow()},getUnFrozenColumnsRow:function(){return this._columnModel.getUnFrozenColumnsRow()},getLockedWidth:function(){if(!this.isFrozen()){return 0}var b=this._columnsLockEl.firstChild.firstChild;var a=b?b.offsetWidth:0;return a},_canDeferSyncScroll:function(){return this.isFrozen()},_syncScroll:function(){var c=this._rowsViewEl.scrollLeft;this._filterViewEl.scrollLeft=c;this._summaryViewEl.scrollLeft=c;this._columnsViewEl.scrollLeft=c;var a=this;var b=a._rowsViewEl.scrollTop;a._rowsLockEl.scrollTop=b;if(this._canDeferSyncScroll()){setTimeout(function(){a._rowsViewEl.scrollTop=a._rowsLockEl.scrollTop},50)}},__OnMouseWheel:function(c){var b=this.getScrollTop()-c.wheelDelta;var a=this.getScrollTop();this.setScrollTop(b);if(a!=this.getScrollTop()){c.preventDefault()}}});mini.regClass(mini.FrozenGridView,"FrozenGridView");mini.ScrollGridView=function(){mini.ScrollGridView.superclass.constructor.call(this)};mini.extend(mini.ScrollGridView,mini.FrozenGridView,{virtualScroll:true,virtualRows:25,defaultRowHeight:23,_canDeferSyncScroll:function(){return this.isFrozen()&&!this.isVirtualScroll()},setVirtualScroll:function(a){this.virtualScroll=a;this.doUpdate()},getVirtualScroll:function(a){return this.virtualScroll},isFixedRowHeight:function(){return this.fixedRowHeight||this.isVirtualScroll()},isVirtualScroll:function(){if(this.virtualScroll){return this.isAutoHeight()==false&&this.isGrouping()==false}return false},_getScrollView:function(){var a=this.getVisibleRows();return a},_getScrollViewCount:function(){return this._getScrollView().length},_getScrollRowHeight:function(a,c){if(c&&c._height){var b=parseInt(c._height);if(!isNaN(b)){return b}}return this.defaultRowHeight},_getRangeHeight:function(g,b){var a=0;var e=this._getScrollView();for(var c=g;c<b;c++){var f=e[c];var d=this._getScrollRowHeight(c,f);a+=d}return a},_getIndexByScrollTop:function(g){var a=0;var f=this._getScrollView();var e=this._getScrollViewCount();for(var c=0,b=e;c<b;c++){var j=f[c];var d=this._getScrollRowHeight(c,j);a+=d;if(a>=g){return c}}return e},__getScrollViewRange:function(c,a){var b=this._getScrollView();return b.getRange(c,a)},_getViewRegion:function(){var k=this._getScrollView();if(this.isVirtualScroll()==false){var o={top:0,bottom:0,rows:k,start:0,end:0};return o}var b=this.defaultRowHeight;var c=this._getViewNowRegion();var e=this.getScrollTop();var p=this._vscrollEl.offsetHeight;var m=this._getScrollViewCount();var d=c.start,h=c.end;for(var j=0,g=m;j<g;j+=this.virtualRows){var f=j+this.virtualRows;if(j<=d&&d<f){d=j}if(j<h&&h<=f){h=f}}if(h>m){h=m}if(h==0){h=this.virtualRows}var n=this._getRangeHeight(0,d);var a=this._getRangeHeight(h,this._getScrollViewCount());var k=this.__getScrollViewRange(d,h);var o={top:n,bottom:a,rows:k,start:d,end:h,viewStart:d,viewEnd:h};o.viewTop=this._getRangeHeight(0,o.viewStart);o.viewBottom=this._getRangeHeight(o.viewEnd,this._getScrollViewCount());return o},_getViewNowRegion:function(){var d=this.defaultRowHeight;var f=this.getScrollTop();var g=this._vscrollEl.offsetHeight;var b=this._getIndexByScrollTop(f);var a=this._getIndexByScrollTop(f+g+30);var c=this._getScrollViewCount();if(a>c){a=c}var e={start:b,end:a};return e},_canVirtualUpdate:function(){if(!this._viewRegion){return true}var a=this._getViewNowRegion();if(this._viewRegion.start<=a.start&&a.end<=this._viewRegion.end){return false}return true},__OnColumnsChanged:function(b){var a=this;this.columns=this._columnModel.columns;this._doUpdateFilterRow();this._doUpdateSummaryRow();if(this.getVisibleRows().length==0){this.doUpdate()}else{this.deferUpdate()}if(this.isVirtualScroll()){this.__OnVScroll()}this.fire("columnschanged")},doLayout:function(){if(this.canLayout()==false){return}mini.ScrollGridView.superclass.doLayout.call(this);this._layoutScroll()},_createRowsHTML:function(d,o,g,m,a,l){var c=this.isVirtualScroll();if(!c){return mini.ScrollGridView.superclass._createRowsHTML.apply(this,arguments)}var n=c?this._getViewRegion():null;var i=['<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">'];i.push(this._createTopRowHTML(d));if(this.isVirtualScroll()){var b=m==0?"display:none;":"";i.push('<tr class="mini-grid-virtualscroll-top" style="padding:0;border:0;'+b+'"><td colspan="'+d.length+'" style="height:'+m+"px;padding:0;border:0;"+b+'"></td></tr>')}if(o==1&&this.isFrozen()==false){}else{for(var f=0,e=g.length;f<e;f++){var h=g[f];this._createRowHTML(h,l,d,o,i);l++}}if(this.isVirtualScroll()){i.push('<tr class="mini-grid-virtualscroll-bottom" style="padding:0;border:0;"><td colspan="'+d.length+'" style="height:'+a+'px;padding:0;border:0;"></td></tr>')}i.push("</table>");return i.join("")},doUpdateRows:function(){if(this.isVirtualScroll()==false){mini.ScrollGridView.superclass.doUpdateRows.call(this);return}var j=this._getViewRegion();this._viewRegion=j;var h=this.getFrozenColumns();var g=this.getUnFrozenColumns();var i=j.viewStart;var b=j.start;var c=j.viewEnd;if(this._scrollPaging){var e=this.getPageIndex()*this.getPageSize();i-=e;b-=e;c-=e}var k=new Date();var f=this._createRowsHTML(h,1,j.rows,j.viewTop,j.viewBottom,i);var d=this._createRowsHTML(g,2,j.rows,j.viewTop,j.viewBottom,i);this._rowsLockContentEl.innerHTML=f;this._rowsViewContentEl.innerHTML=d;var a=this.getScrollTop();if(this._rowsViewEl.scrollTop!=a){this._rowsViewEl.scrollTop=a}},_create:function(){mini.ScrollGridView.superclass._create.call(this);this._vscrollEl=mini.append(this._rowsEl,'<div class="mini-grid-vscroll"><div class="mini-grid-vscroll-content"></div></div>');this._vscrollContentEl=this._vscrollEl.firstChild},_initEvents:function(){mini.ScrollGridView.superclass._initEvents.call(this);var a=this;mini.on(this._vscrollEl,"scroll",this.__OnVScroll,this);mini._onScrollDownUp(this._vscrollEl,function(b){a._VScrollMouseDown=true},function(b){a._VScrollMouseDown=false})},_layoutScroll:function(){var d=this.isVirtualScroll();if(d){var b=this.getScrollHeight();var c=b>this._rowsViewEl.offsetHeight;if(d&&c){this._vscrollEl.style.display="block";this._vscrollContentEl.style.height=b+"px"}else{this._vscrollEl.style.display="none"}if(this._rowsViewEl.scrollWidth>this._rowsViewEl.clientWidth+1){var a=this.getBodyHeight(true)-18;if(a<0){a=0}this._vscrollEl.style.height=a+"px"}else{this._vscrollEl.style.height="100%"}}else{this._vscrollEl.style.display="none"}},getScrollHeight:function(){var a=this.getVisibleRows();return this._getRangeHeight(0,a.length)},setScrollTop:function(a){if(this.isVirtualScroll()){this._vscrollEl.scrollTop=a}else{this._rowsViewEl.scrollTop=a}},getScrollTop:function(){if(this.isVirtualScroll()){return this._vscrollEl.scrollTop}else{return this._rowsViewEl.scrollTop}},__OnVScroll:function(b){var c=this.isVirtualScroll();if(c){this._scrollTop=this._vscrollEl.scrollTop;var a=this;setTimeout(function(){a._rowsViewEl.scrollTop=a._scrollTop;a.__scrollTimer=null},8);if(this._scrollTopTimer){clearTimeout(this._scrollTopTimer)}this._scrollTopTimer=setTimeout(function(){a._scrollTopTimer=null;a._tryUpdateScroll();a._rowsViewEl.scrollTop=a._scrollTop},80)}},__OnMouseWheel:function(f){var b=f.wheelDelta?f:f.originalEvent;var a=b.wheelDelta||-b.detail*24;var d=this.getScrollTop()-a;var c=this.getScrollTop();this.setScrollTop(d);if(c!=this.getScrollTop()||this.isVirtualScroll()){f.preventDefault()}},_tryUpdateScroll:function(){var c=this._canVirtualUpdate();if(c){if(this._scrollPaging){var b=this;this.reload(null,null,function(d){})}else{var a=new Date();this.doUpdateRows()}}else{}}});mini.regClass(mini.ScrollGridView,"ScrollGridView");mini._onScrollDownUp=function(e,d,f){function a(g){if(mini.isFirefox){mini.on(document,"mouseup",b)}else{mini.on(document,"mousemove",c)}d(g)}function c(g){mini.un(document,"mousemove",c);f(g)}function b(g){mini.un(document,"mouseup",b);f(g)}mini.on(e,"mousedown",a)};mini._Grid_Select=function(a){this.owner=a,el=a.el;a.on("rowmousemove",this.__OnRowMouseMove,this);mini.on(a._viewportEl,"mouseout",this.__OnMouseOut,this);mini.on(a._viewportEl,"mousewheel",this.__OnMouseWheel,this);a.on("cellmousedown",this.__OnCellMouseDown,this);a.on("cellclick",this.__OnGridCellClick,this);a.on("celldblclick",this.__OnGridCellClick,this);mini.on(a.el,"keydown",this.__OnGridKeyDown,this)};mini._Grid_Select.prototype={__OnGridKeyDown:function(l){var b=this.owner;var d=mini.findParent(l.target,"mini-grid-detailRow");var a=d?mini.isAncestor(b.el,d):false;if(mini.isAncestor(b._filterEl,l.target)||mini.isAncestor(b._summaryEl,l.target)||mini.isAncestor(b._toolbarEl,l.target)||mini.isAncestor(b._footerEl,l.target)||(mini.findParent(l.target,"mini-grid-detailRow")&&a)||mini.findParent(l.target,"mini-grid-rowEdit")||mini.findParent(l.target,"mini-tree-editinput")){return}var n=b.getCurrentCell();if(l.shiftKey||l.ctrlKey||l.altKey){return}if(l.keyCode==37||l.keyCode==38||l.keyCode==39||l.keyCode==40){l.preventDefault()}var h=b.getVisibleColumns();function f(e){return b.getVisibleRows()[e]}function o(e){return b.getVisibleRows().indexOf(e)}function c(){return b.getVisibleRows().length}var g=n?n[1]:null,i=n?n[0]:null;if(!n){i=b.getCurrent()}var k=h.indexOf(g);var m=o(i);var j=c();switch(l.keyCode){case 9:if(b.allowCellEdit&&b.editOnTabKey){l.preventDefault();b._beginEditNextCell(l.shiftKey==false,true);return}break;case 27:break;case 13:if(b.allowCellEdit&&b.editNextOnEnterKey){if(b.isEditingCell(n)||!g.editor){b._beginEditNextCell(l.shiftKey==false);return}}if(b.allowCellEdit&&n&&!g.readOnly){b.beginEditCell()}break;case 37:if(g){if(k>0){k-=1}}else{k=0}break;case 38:if(i){if(m>0){m-=1}}else{m=0}if(m!=0&&b.isVirtualScroll()){if(b._viewRegion.start>m){return}}break;case 39:if(g){if(k<h.length-1){k+=1}}else{k=0}break;case 40:if(i){if(m<j-1){m+=1}}else{m=0}if(b.isVirtualScroll()){if(b._viewRegion.end<m){return;b.setScrollTop(b.getScrollTop()+b.defaultRowHeight)}}break;default:return;break}g=h[k];i=f(m);if(g&&i&&b.allowCellSelect){var n=[i,g];b.setCurrentCell(n);b.scrollIntoView(i,g)}if(!b.onlyCheckSelection){if(i&&b.allowRowSelect){b.deselectAll();b.setCurrent(i);if(i){b.scrollIntoView(i)}}}},__OnMouseWheel:function(b){var a=this.owner;if(a.allowCellEdit){a.commitEdit()}},__OnGridCellClick:function(d){var b=this.owner;if(b.allowCellEdit==false){return}if(b.cellEditAction!=d.type){return}var a=d.record,c=d.column;if(!c.readOnly&&!b.isReadOnly()){if(d.htmlEvent.shiftKey||d.htmlEvent.ctrlKey){}else{b.beginEditCell()}}},__OnCellMouseDown:function(b){var a=this;a.__doSelect(b)},__OnRowMouseMove:function(c){var b=this.owner;var a=c.record;if(!b.enabled||b.enableHotTrack==false){return}b.focusRow(a)},__OnMouseOut:function(a){if(this.owner.allowHotTrackOut){this.owner.focusRow(null)}},__doSelect:function(h){var b=h.record,f=h.column;var d=this.owner;if(b.enabled===false){return}if(d.allowCellSelect){var a=[b,f];d.setCurrentCell(a)}if(d.onlyCheckSelection&&!f._multiRowSelect){return}if(d.allowRowSelect){var c={record:b,selected:b,cancel:false};if(b){d.fire("beforerowselect",c)}if(c.cancel){return}if(d.getMultiSelect()){d.el.onselectstart=function(){};if(h.htmlEvent.shiftKey){d.el.onselectstart=function(){return false};try{h.htmlEvent.preventDefault()}catch(c){}var g=d.getCurrent();if(g){d.deselectAll();d.selectRange(g,b);d.setCurrent(g)}else{d.select(b);d.setCurrent(b)}}else{d.el.onselectstart=function(){};if(h.htmlEvent.ctrlKey){d.el.onselectstart=function(){return false};try{h.htmlEvent.preventDefault()}catch(c){}}if(h.column._multiRowSelect===true||h.htmlEvent.ctrlKey||d.allowUnselect){if(d.isSelected(b)){d.deselect(b)}else{d.select(b);d.setCurrent(b)}}else{if(d.isSelected(b)){}else{d.deselectAll();d.select(b);d.setCurrent(b)}}}}else{if(!d.isSelected(b)){d.deselectAll();d.select(b)}else{if(h.htmlEvent.ctrlKey||d.allowUnselect){d.deselectAll()}}}}}};mini._Grid_RowGroup=function(a){this.owner=a,el=a.el;mini.on(a._bodyEl,"click",this.__OnClick,this)};mini._Grid_RowGroup.prototype={__OnClick:function(c){var a=this.owner;var b=a._getRowGroupByEvent(c);if(b){a.toggleRowGroup(b)}}};mini._Grid_ColumnsMenu=function(a){this.owner=a;this.menu=this.createMenu();mini.on(a.el,"contextmenu",this.__OnContextMenu,this);a.on("destroy",this.__OnGridDestroy,this)};mini._Grid_ColumnsMenu.prototype={__OnGridDestroy:function(a){if(this.menu){this.menu.destroy()}this.menu=null},createMenu:function(){var a=mini.create({type:"menu",hideOnClick:false});a.on("itemclick",this.__OnItemClick,this);return a},updateMenu:function(){var e=this.owner,h=this.menu;var d=e.getBottomColumns();var b=[];for(var c=0,a=d.length;c<a;c++){var f=d[c];if(f.hideable){continue}var g={};g.checked=f.visible;g.checkOnClick=true;g.text=e._createHeaderText(f);if(g.text=="&nbsp;"){if(f.type=="indexcolumn"){g.text="���"}if(f.type=="checkcolumn"){g.text="ѡ��"}}b.push(g);g.enabled=f.enabled;g._column=f}h.setItems(b)},__OnContextMenu:function(b){var a=this.owner;if(a.showColumnsMenu==false){return}if(mini.isAncestor(a._columnsEl,b.target)==false){return}this.updateMenu();this.menu.showAtPos(b.pageX,b.pageY);return false},__OnItemClick:function(k){var a=this.owner,b=this.menu;var f=a.getBottomColumns();var m=b.getItems();var o=k.item,d=o._column;var g=0;for(var j=0,c=m.length;j<c;j++){var h=m[j];if(h.getChecked()){g++}}if(g<1){o.setChecked(true)}var n=o.getChecked();if(n){a.showColumn(d)}else{a.hideColumn(d)}}};mini._Grid_CellToolTip=function(a){this.owner=a;mini.on(this.owner.el,"mousemove",this.__OnGridMouseMove,this)};mini._Grid_CellToolTip.prototype={__OnGridMouseMove:function(g){var d=this.owner;if(mini.hasClass(g.target,"mini-grid-headerCell-inner")){var b=g.target;if(b.scrollWidth>b.clientWidth){var f=b.innerText||b.textContent||"";b.title=f.trim()}else{b.title=""}return}var a=d._getCellByEvent(g);var b=d._getCellEl(a[0],a[1]);var c=d.getCellError(a[0],a[1]);if(b){if(c){setTimeout(function(){b.title=c.errorText},10);return}setTimeout(function(){var h=b;if(b.firstChild){if(mini.hasClass(b.firstChild,"mini-grid-cell-inner")){h=b.firstChild}if(mini.hasClass(b.firstChild,"mini-tree-nodetitle")){h=b.firstChild}}if(h.scrollWidth>h.clientWidth){var e=h.innerText||h.textContent||"";b.title=e.trim()}else{b.title=""}},10)}}};mini._Grid_Sorter=function(a){this.owner=a;this.owner.on("headercellclick",this.__OnGridHeaderCellClick,this);mini.on(a._headerEl,"mousemove",this.__OnGridHeaderMouseMove,this);mini.on(a._headerEl,"mouseout",this.__OnGridHeaderMouseOut,this)};mini._Grid_Sorter.prototype={__OnGridHeaderMouseOut:function(a){if(this._focusedColumnEl){mini.removeClass(this._focusedColumnEl,"mini-grid-headerCell-hover")}},__OnGridHeaderMouseMove:function(b){var a=mini.findParent(b.target,"mini-grid-headerCell");if(a){mini.addClass(a,"mini-grid-headerCell-hover");this._focusedColumnEl=a}},__OnGridHeaderCellClick:function(d){var a=this.owner;if(!mini.hasClass(d.htmlEvent.target,"mini-grid-column-splitter")){if(a.allowSortColumn&&a.isEditing()==false){var c=d.column;if(!c.columns||c.columns.length==0){if(c.field&&c.allowSort!==false){var b="asc";if(a.getSortField()==c.field){b=a.getSortOrder()=="asc"?"desc":"asc"}a.sortBy(c.field,b)}}}}}};mini._Grid_ColumnMove=function(a){this.owner=a;mini.on(this.owner.el,"mousedown",this.__onGridMouseDown,this)};mini._Grid_ColumnMove.prototype={__onGridMouseDown:function(d){var b=this.owner;if(b.isEditing()){return}if(mini.hasClass(d.target,"mini-grid-column-splitter")){return}if(d.button==mini.MouseButton.Right){return}var a=mini.findParent(d.target,b._headerCellCls);if(a){this._remove();var c=b._getColumnByEvent(d);if(b.allowMoveColumn&&c&&c.allowMove){this.dragColumn=c;this._columnEl=a;this.getDrag().start(d)}}},getDrag:function(){if(!this.drag){this.drag=new mini.Drag({capture:false,onStart:mini.createDelegate(this._OnDragStart,this),onMove:mini.createDelegate(this._OnDragMove,this),onStop:mini.createDelegate(this._OnDragStop,this)})}return this.drag},_OnDragStart:function(b){function c(d){var e=d.header;if(typeof e=="function"){e=e.call(a,d)}if(mini.isNull(e)||e===""){e="&nbsp;"}return e}var a=this.owner;this._dragProxy=mini.append(document.body,'<div class="mini-grid-columnproxy"></div>');this._dragProxy.innerHTML='<div class="mini-grid-columnproxy-inner" style="height:26px;">'+c(this.dragColumn)+"</div>";mini.setXY(this._dragProxy,b.now[0]+15,b.now[1]+18);mini.addClass(this._dragProxy,"mini-grid-no");this.moveTop=mini.append(document.body,'<div class="mini-grid-movetop"></div>');this.moveBottom=mini.append(document.body,'<div class="mini-grid-movebottom"></div>')},_OnDragMove:function(d){var a=this.owner;var e=d.now[0];mini.setXY(this._dragProxy,e+15,d.now[1]+18);this.targetColumn=this.insertAction=null;var i=mini.findParent(d.event.target,a._headerCellCls);if(i){var b=a._getColumnByEvent(d.event);if(b&&b!=this.dragColumn){var h=a.getParentColumn(this.dragColumn);var f=a.getParentColumn(b);if(h==f){this.targetColumn=b;this.insertAction="before";var g=a.getColumnBox(this.targetColumn);if(e>g.x+g.width/2){this.insertAction="after"}}}}if(this.targetColumn){mini.addClass(this._dragProxy,"mini-grid-ok");mini.removeClass(this._dragProxy,"mini-grid-no");var c=a.getColumnBox(this.targetColumn);this.moveTop.style.display="block";this.moveBottom.style.display="block";if(this.insertAction=="before"){mini.setXY(this.moveTop,c.x-4,c.y-9);mini.setXY(this.moveBottom,c.x-4,c.bottom)}else{mini.setXY(this.moveTop,c.right-4,c.y-9);mini.setXY(this.moveBottom,c.right-4,c.bottom)}}else{mini.removeClass(this._dragProxy,"mini-grid-ok");mini.addClass(this._dragProxy,"mini-grid-no");this.moveTop.style.display="none";this.moveBottom.style.display="none"}},_remove:function(){var a=this.owner;mini.removeNode(this._dragProxy);mini.removeNode(this.moveTop);mini.removeNode(this.moveBottom);this._dragProxy=this.moveTop=this.moveBottom=this.dragColumn=this.targetColumn=null},_OnDragStop:function(b){var a=this.owner;a.moveColumn(this.dragColumn,this.targetColumn,this.insertAction);this._remove()}};mini._Grid_ColumnSplitter=function(a){this.owner=a;mini.on(a.el,"mousedown",this.__OnMouseDown,this)};mini._Grid_ColumnSplitter.prototype={__OnMouseDown:function(d){var b=this.owner;var a=d.target;if(mini.hasClass(a,"mini-grid-column-splitter")){var c=b._getColumnById(a.id);if(b.isEditing()){return}if(b.allowResizeColumn&&c&&c.allowResize){this.splitterColumn=c;this.getDrag().start(d)}}},getDrag:function(){if(!this.drag){this.drag=new mini.Drag({capture:true,onStart:mini.createDelegate(this._OnDragStart,this),onMove:mini.createDelegate(this._OnDragMove,this),onStop:mini.createDelegate(this._OnDragStop,this)})}return this.drag},_OnDragStart:function(c){var b=this.owner;var a=b.getColumnBox(this.splitterColumn);this.columnBox=a;this._dragProxy=mini.append(document.body,'<div class="mini-grid-proxy"></div>');var d=b.getGridViewBox();d.x=a.x;d.width=a.width;d.right=a.right;mini.setBox(this._dragProxy,d)},_OnDragMove:function(c){var a=this.owner;var d=mini.copyTo({},this.columnBox);var b=d.width+(c.now[0]-c.init[0]);if(b<a.columnMinWidth){b=a.columnMinWidth}if(b>a.columnMaxWidth){b=a.columnMaxWidth}mini.setWidth(this._dragProxy,b)},_OnDragStop:function(f){var a=this.owner;var e=mini.getBox(this._dragProxy);var g=this;var h=a.allowSortColumn;a.allowSortColumn=false;setTimeout(function(){jQuery(g._dragProxy).remove();g._dragProxy=null;a.allowSortColumn=h},10);var d=this.splitterColumn;var c=parseInt(d.width);if(c+"%"!=d.width){var b=a.getColumnWidth(d);var i=parseInt(c/b*e.width);if(i<a.columnMinWidth){i=a.columnMinWidth}a.setColumnWidth(d,i)}}};mini._Grid_DragDrop=function(a){this.owner=a;this.owner.on("CellMouseDown",this.__OnGridCellMouseDown,this)};mini._Grid_DragDrop.prototype={__OnGridCellMouseDown:function(f){if(f.htmlEvent.button==mini.MouseButton.Right){return}var c=this.owner;if(c._dragging){return}this.dropObj=c;if(mini.findParent(f.htmlEvent.target,"mini-tree-editinput")){return}if(c.isReadOnly()||c.isAllowDrag(f.record,f.column)==false){return}var b=c._OnDragStart(f.record,f.column);if(b.cancel){return}this.dragText=b.dragText;var a=f.record;this.isTree=!!c.isTree;this.beginRecord=a;var d=this._getDrag();d.start(f.htmlEvent)},_OnDragStart:function(c){var b=this.owner;b._dragging=true;var a=this.beginRecord;this.dragData=b._getDragData();if(this.dragData.indexOf(a)==-1){this.dragData.push(a)}this.feedbackEl=mini.append(document.body,'<div class="mini-feedback"></div>');this.feedbackEl.innerHTML=this.dragText;this.lastFeedbackClass="";this.enableHotTrack=b.getEnableHotTrack();b.setEnableHotTrack(false)},_getDropTargetObj:function(a){var b=mini.findParent(a.target,"mini-grid",500);if(b){return mini.get(b)}},_OnDragMove:function(d){var c=this.owner;var e=this._getDropTargetObj(d.event);this.dropObj=e;var a=d.now[0],f=d.now[1];mini.setXY(this.feedbackEl,a+15,f+18);if(e&&e.allowDrop){this.isTree=e.isTree;var b=e._getRecordByEvent(d.event);this.dropRecord=b;if(b){if(this.isTree){this.dragAction=this.getFeedback(b,f,3)}else{this.dragAction=this.getFeedback(b,f,2)}}else{this.dragAction="no"}}else{this.dragAction="no"}if(e&&e.allowDrop&&!b&&e.getData().length==0){this.dragAction="add"}this.lastFeedbackClass="mini-feedback-"+this.dragAction;this.feedbackEl.className="mini-feedback "+this.lastFeedbackClass;if(this.dragAction=="no"){b=null}this.setRowFeedback(b,this.dragAction)},_OnDragStop:function(o){var a=this.owner;var s=this.dropObj;a._dragging=false;mini.removeNode(this.feedbackEl);a.setEnableHotTrack(this.enableHotTrack);this.feedbackEl=null;this.setRowFeedback(null);if(this.isTree){var c=[];for(var n=0,f=this.dragData.length;n<f;n++){var q=this.dragData[n];var t=false;for(var m=0,h=this.dragData.length;m<h;m++){var d=this.dragData[m];if(d!=q){t=a.isAncestor(d,q);if(t){break}}}if(!t){c.push(q)}}this.dragData=c}if(this.dragAction=="add"&&!this.dropRecord){this.dropRecord=s.getRootNode?s.getRootNode():{__root:true}}if(this.dropRecord&&s&&this.dragAction!="no"){var r=a._OnDragDrop(this.dragData,this.dropRecord,this.dragAction);if(!r.cancel){var c=r.dragNodes,b=r.targetNode,g=r.action;if(s.isTree){if(a==s){s.moveNodes(c,b,g)}else{a.removeNodes(c);s.addNodes(c,b,g)}}else{var p=s.indexOf(b);if(g=="after"){p+=1}if(a==s){s.moveRow(c,p)}else{a.removeRows(c);if(this.dragAction=="add"){s.addRows(c)}else{s.addRows(c,p)}}}var r={dragNode:r.dragNodes[0],dropNode:r.targetNode,dragAction:r.action,dragNodes:r.dragNodes,targetNode:r.targetNode};s.fire("drop",r)}}this.dropRecord=null;this.dragData=null},setRowFeedback:function(d,c){var e=this.owner;var g=this.dropObj;if(this.lastAddDomRow&&g){g.removeRowCls(this.lastAddDomRow,"mini-tree-feedback-add")}if(d==null||this.dragAction=="add"){mini.removeNode(this.feedbackLine);this.feedbackLine=null}this.lastRowFeedback=d;if(d!=null){if(c=="before"||c=="after"){if(!this.feedbackLine){this.feedbackLine=mini.append(document.body,"<div class='mini-feedback-line'></div>")}this.feedbackLine.style.display="block";var b=g.getRowBox(d);var a=b.x,h=b.y-1;if(c=="after"){h+=b.height}mini.setXY(this.feedbackLine,a,h);var f=g.getBox(true);mini.setWidth(this.feedbackLine,f.width)}else{g.addRowCls(d,"mini-tree-feedback-add");this.lastAddDomRow=d}}},getFeedback:function(q,m,p){var a=this.owner;var n=this.dropObj;var o=n.getRowBox(q);var g=o.height;var r=m-o.y;var s=null;if(this.dragData.indexOf(q)!=-1){return"no"}var f=false;if(p==3){f=n.isLeaf(q);for(var d=0,c=this.dragData.length;d<c;d++){var j=this.dragData[d];var b=n.isAncestor(j,q);if(b){s="no";break}}}if(s==null){if(p==2){if(r>g/2){s="after"}else{s="before"}}else{if(f&&n.allowLeafDropIn===false){if(r>g/2){s="after"}else{s="before"}}else{if(r>(g/3)*2){s="after"}else{if(g/3<=r&&r<=(g/3*2)){s="add"}else{s="before"}}}}}var k=n._OnGiveFeedback(s,this.dragData,q,a);return k.effect},_getDrag:function(){if(!this.drag){this.drag=new mini.Drag({onStart:mini.createDelegate(this._OnDragStart,this),onMove:mini.createDelegate(this._OnDragMove,this),onStop:mini.createDelegate(this._OnDragStop,this)})}return this.drag}};mini._Grid_Events=function(a){this.owner=a,el=a.el;mini.on(el,"click",this.__OnClick,this);mini.on(el,"dblclick",this.__OnDblClick,this);mini.on(el,"mousedown",this.__OnMouseDown,this);mini.on(el,"mouseup",this.__OnMouseUp,this);mini.on(el,"mousemove",this.__OnMouseMove,this);mini.on(el,"mouseover",this.__OnMouseOver,this);mini.on(el,"mouseout",this.__OnMouseOut,this);mini.on(el,"keydown",this.__OnKeyDown,this);mini.on(el,"keyup",this.__OnKeyUp,this);mini.on(el,"contextmenu",this.__OnContextMenu,this);a.on("rowmousemove",this.__OnRowMouseMove,this)};mini._Grid_Events.prototype={_row:null,__OnRowMouseMove:function(b){var a=this.owner;var c=b.record;if(this._row!=c){b.record=c;b.row=c;a.fire("rowmouseenter",b)}this._row=c},__OnClick:function(a){this._fireEvent(a,"Click")},__OnDblClick:function(a){this._fireEvent(a,"Dblclick")},__OnMouseDown:function(b){var a=this.owner;if(mini.findParent(b.target,"mini-tree-editinput")){return}this._fireEvent(b,"MouseDown");setTimeout(function(){var c=mini.findParent(b.target,"mini-grid-detailRow");if(mini.isAncestor(a.el,c)){return}a._tryFocus(b)},30)},__OnMouseUp:function(b){if(mini.findParent(b.target,"mini-tree-editinput")){return}var a=this.owner;if(mini.isAncestor(a.el,b.target)){this._fireEvent(b,"MouseUp")}},__OnMouseMove:function(a){this._fireEvent(a,"MouseMove")},__OnMouseOver:function(a){this._fireEvent(a,"MouseOver")},__OnMouseOut:function(a){this._fireEvent(a,"MouseOut")},__OnKeyDown:function(a){this._fireEvent(a,"KeyDown")},__OnKeyUp:function(a){this._fireEvent(a,"KeyUp")},__OnContextMenu:function(a){this._fireEvent(a,"ContextMenu")},_fireEvent:function(h,b){var a=this.owner;var j=a._getCellByEvent(h);var f=j[0],d=j[1];if(f){var g={record:f,row:f,htmlEvent:h};var i=a["_OnRow"+b];if(i){i.call(a,g)}else{a.fire("row"+b,g)}}if(d){var g={column:d,field:d.field,htmlEvent:h};var i=a["_OnColumn"+b];if(i){i.call(a,g)}else{a.fire("column"+b,g)}}if(f&&d){var g={sender:a,record:f,row:f,column:d,field:d.field,htmlEvent:h};var i=a["_OnCell"+b];if(i){i.call(a,g)}else{a.fire("cell"+b,g)}if(d["onCell"+b]){d["onCell"+b].call(d,g)}}if(!f&&d&&mini.findParent(h.target,"mini-grid-headerCell")){var g={column:d,htmlEvent:h};var i=a["_OnHeaderCell"+b];if(i){i.call(a,g)}else{var c="onheadercell"+b.toLowerCase();if(d[c]){g.sender=a;d[c](g)}a.fire("headercell"+b,g)}}}};mini.DataGrid=function(a){mini.DataGrid.superclass.constructor.call(this,a);this._Events=new mini._Grid_Events(this);this._Select=new mini._Grid_Select(this);this._DragDrop=new mini._Grid_DragDrop(this);this._RowGroup=new mini._Grid_RowGroup(this);this._Splitter=new mini._Grid_ColumnSplitter(this);this._ColumnMove=new mini._Grid_ColumnMove(this);this._Sorter=new mini._Grid_Sorter(this);this._CellToolTip=new mini._Grid_CellToolTip(this);this._ColumnsMenu=new mini._Grid_ColumnsMenu(this);this._createPagers()};mini.extend(mini.DataGrid,mini.ScrollGridView,{uiCls:"mini-datagrid",selectOnLoad:false,showHeader:false,showPager:true,onlyCheckSelection:false,_$onlyCheckSelection:true,allowUnselect:false,allowRowSelect:true,allowCellSelect:false,allowCellEdit:false,cellEditAction:"cellclick",allowCellValid:false,allowResizeColumn:true,allowSortColumn:true,allowMoveColumn:true,showColumnsMenu:false,virtualScroll:false,enableHotTrack:true,allowHotTrackOut:true,showLoading:true,columnMinWidth:8,set:function(e){if(typeof e=="string"){return this}var d=e.value;delete e.value;var a=e.url;delete e.url;var c=e.data;delete e.data;var b=e.columns;delete e.columns;var f=e.defaultColumnWidth;delete e.defaultColumnWidth;if(f){this.setDefaultColumnWidth(f)}if(!mini.isNull(b)){this.setColumns(b)}mini.DataGrid.superclass.set.call(this,e);if(!mini.isNull(c)){this.setData(c)}if(!mini.isNull(a)){this.setUrl(a)}if(!mini.isNull(d)){this.setValue(d)}return this},doUpdate:function(){this._destroyEditors();mini.DataGrid.superclass.doUpdate.apply(this,arguments)},_destroyEditors:function(){var b=mini.getChildControls(this);var d=[];for(var c=0,a=b.length;c<a;c++){var e=b[c];if(e.el&&mini.findParent(e.el,this._rowCls)){d.push(e);e.destroy()}}},_OnDrawCell:function(){var a=mini.DataGrid.superclass._OnDrawCell.apply(this,arguments);return a},_bindSource:function(){var a=this._dataSource;a.on("beforeload",this.__OnSourceBeforeLoad,this);a.on("preload",this.__OnSourcePreLoad,this);a.on("load",this.__OnSourceLoadSuccess,this);a.on("loaderror",this.__OnSourceLoadError,this);a.on("loaddata",this.__OnSourceLoadData,this);a.on("cleardata",this.__OnSourceClearData,this);a.on("sort",this.__OnSourceSort,this);a.on("filter",this.__OnSourceFilter,this);a.on("pageinfochanged",this.__OnPageInfoChanged,this);a.on("selectionchanged",this.__OnSelectionChanged,this);a.on("currentchanged",function(b){this.fire("currentchanged",b)},this);a.on("add",this.__OnSourceAdd,this);a.on("update",this.__OnSourceUpdate,this);a.on("remove",this.__OnSourceRemove,this);a.on("move",this.__OnSourceMove,this);a.on("beforeadd",function(b){this.fire("beforeaddrow",b)},this);a.on("beforeupdate",function(b){this.fire("beforeupdaterow",b)},this);a.on("beforeremove",function(b){this.fire("beforeremoverow",b)},this);a.on("beforemove",function(b){this.fire("beforemoverow",b)},this);a.on("beforeselect",function(b){this.fire("beforeselect",b)},this);a.on("beforedeselect",function(b){this.fire("beforedeselect",b)},this);a.on("select",function(b){this.fire("select",b)},this);a.on("deselect",function(b){this.fire("deselect",b)},this)},_getMaskWrapEl:function(){return this.el},_initData:function(){this.data=this._dataSource.getSource();this.pageIndex=this.getPageIndex();this.pageSize=this.getPageSize();this.totalCount=this.getTotalCount();this.totalPage=this.getTotalPage();this.sortField=this.getSortField();this.sortOrder=this.getSortOrder();this.url=this.getUrl();this._mergedCellMaps={};this._mergedCells={};this._cellErrors=[];this._cellMapErrors={};if(this.isGrouping()){this.groupBy(this._groupField,this._groupDir);if(this.collapseGroupOnLoad){this.collapseGroups()}}},__OnSourceBeforeLoad:function(a){this.fire("beforeload",a);if(a.cancel==true){return}if(this.showLoading){this.loading()}},__OnSourcePreLoad:function(a){this.fire("preload",a)},__OnSourceLoadSuccess:function(a){this.fire("load",a);this.unmask()},__OnSourceLoadError:function(a){this.fire("loaderror",a);this.unmask()},__OnSourceSort:function(a){this.deferUpdate();this.fire("sort",a)},__OnSourceFilter:function(a){this.deferUpdate();this.fire("filter",a)},__OnSourceAdd:function(a){this._doAddRowEl(a.record);this._doUpdateSummaryRow();this.fire("addrow",a)},__OnSourceUpdate:function(a){this._doUpdateRowEl(a.record);this._doUpdateSummaryRow();this.fire("updaterow",a)},__OnSourceRemove:function(a){this._doRemoveRowEl(a.record);this._doUpdateSummaryRow();this.fire("removerow",a);if(this.isVirtualScroll()){this.deferUpdate()}},__OnSourceMove:function(a){this._doMoveRowEl(a.record,a.index);this._doUpdateSummaryRow();this.fire("moverow",a)},__OnSelectionChanged:function(c){if(c.fireEvent!==false){if(c.select){this.fire("rowselect",c)}else{this.fire("rowdeselect",c)}}var b=this;if(this._selectionTimer){clearTimeout(this._selectionTimer);this._selectionTimer=null}this._selectionTimer=setTimeout(function(){b._selectionTimer=null;if(c.fireEvent!==false){b.fire("SelectionChanged",c)}},1);var a=new Date();this._doRowSelect(c._records,c.select)},__OnPageInfoChanged:function(a){this._updatePagesInfo()},_updatePagesInfo:function(){var a=this.getPageIndex();var e=this.getPageSize();var d=this.getTotalCount();var h=this.getTotalPage();var f=this._pagers;for(var g=0,c=f.length;g<c;g++){var b=f[g];b.update(a,e,d);this._dataSource.totalPage=b.totalPage}},setPagerButtons:function(a){this._bottomPager.setButtons(a)},setPager:function(b){if(typeof b=="string"){var a=mini.byId(b);if(!a){return}mini.parse(b);b=mini.get(b)}if(b){this.bindPager(b)}},bindPager:function(a){if(!a){return}this.unbindPager(a);this._pagers.add(a);a.on("beforepagechanged",this.__OnPageChanged,this)},unbindPager:function(a){if(!a){return}this._pagers.remove(a);a.un("pagechanged",this.__OnPageChanged,this)},__OnPageChanged:function(a){a.cancel=true;this.gotoPage(a.pageIndex,a.pageSize)},_canUpdateRowEl:true,_doUpdateRowEl:function(d){var f=this.getFrozenColumns();var c=this.getUnFrozenColumns();var e=this.indexOf(d);var b=this._createRowHTML(d,e,c,2);var a=this._getRowEl(d,2);if(!a){return}jQuery(a).before(b);if(a){a.parentNode.removeChild(a)}if(this.isFrozen()){var b=this._createRowHTML(d,e,f,1);var a=this._getRowEl(d,1);jQuery(a).before(b);a.parentNode.removeChild(a)}this.deferLayout()},_doAddRowEl:function(i){var d=this.getFrozenColumns();var c=this.getUnFrozenColumns();var g=this._rowsLockContentEl.firstChild;var e=this._rowsViewContentEl.firstChild;var f=this.indexOf(i);var h=this.getAt(f+1);function b(o,l,m,k){var n=this._createRowHTML(o,f,m,l);if(h){var j=this._getRowEl(h,l);jQuery(j).before(n)}else{mini.append(k,n)}}b.call(this,i,2,c,e);if(this.isFrozen()){b.call(this,i,1,d,g)}this.deferLayout();var a=jQuery(".mini-grid-emptyText",this._bodyEl)[0];if(a){a.style.display="none";a.parentNode.style.display="none"}},_doRemoveRowEl:function(e){var a=this._getRowEl(e,1);var d=this._getRowEl(e,2);if(a){a.parentNode.removeChild(a)}if(d){d.parentNode.removeChild(d)}if(!d){return}var c=this._getRowDetailEl(e,1);var f=this._getRowDetailEl(e,2);if(c){c.parentNode.removeChild(c)}if(f){f.parentNode.removeChild(f)}this.deferLayout();if(this.showEmptyText&&this.getVisibleRows().length==0){var b=jQuery(".mini-grid-emptyText",this._bodyEl)[0];if(b){b.style.display="";b.parentNode.style.display=""}}},_doMoveRowEl:function(b,a){this._doRemoveRowEl(b);this._doAddRowEl(b)},_getRowGroupEl:function(c,a){if(a==1&&!this.isFrozen()){return null}var d=this._createRowGroupId(c,a);var b=mini.byId(d,this.el);return b},_getRowGroupRowsEl:function(c,a){if(a==1&&!this.isFrozen()){return null}var d=this._createRowGroupRowsId(c,a);var b=mini.byId(d,this.el);return b},_getRowEl:function(c,a){if(a==1&&!this.isFrozen()){return null}c=this.getRecord(c);var d=this._createRowId(c,a);var b=mini.byId(d,this.el);return b},_getHeaderCellEl:function(c,a){if(a==1&&!this.isFrozen()){return null}c=this.getColumn(c);var d=this._createHeaderCellId(c,a);var b=mini.byId(d,this.el);return b},_getCellEl:function(c,b){c=this.getRecord(c);b=this.getColumn(b);if(!c||!b){return null}var d=this._createCellId(c,b);var a=mini.byId(d,this.el);return a},getRecordByEvent:function(a){return this._getRecordByEvent(a)},_getRecordByEvent:function(d){var b=mini.findParent(d.target,this._rowCls);if(!b){return null}var c=b.id.split("$");var a=c[c.length-1];return this._getRowByID(a)},getColumnByEvent:function(a){if(!a){return null}return this._getColumnByEvent(a)},_getColumnByEvent:function(c){var a=mini.findParent(c.target,this._cellCls);if(!a){a=mini.findParent(c.target,this._headerCellCls)}if(a){var b=a.id.split("$");var d=b[b.length-1];return this._getColumnById(d)}return null},_getCellByEvent:function(c){var a=this._getRecordByEvent(c);var b=this._getColumnByEvent(c);return[a,b]},_getRowByID:function(a){return this._dataSource.getby_id(a)},_getColumnById:function(a){return this._columnModel._getColumnById(a)},addRowCls:function(d,a){var c=this._getRowEl(d,1);var b=this._getRowEl(d,2);if(c){mini.addClass(c,a)}if(b){mini.addClass(b,a)}},removeRowCls:function(d,a){var c=this._getRowEl(d,1);var b=this._getRowEl(d,2);if(c){mini.removeClass(c,a)}if(b){mini.removeClass(b,a)}},getCellBox:function(c,b){c=this.getRow(c);b=this.getColumn(b);if(!c||!b){return null}var a=this._getCellEl(c,b);if(!a){return null}return mini.getBox(a)},getColumnBox:function(b){var d=this._createHeaderCellId(b,2);var a=document.getElementById(d);if(!a){d=this._createHeaderCellId(b,1);a=document.getElementById(d)}if(a){var c=mini.getBox(a);c.x-=1;c.left=c.x;c.right=c.x+c.width;return c}},getRowBox:function(e){var b=this._getRowEl(e,1);var d=this._getRowEl(e,2);if(!d){return null}var c=mini.getBox(d);if(b){var a=mini.getBox(b);c.x=c.left=a.left;c.width=c.right-c.x}return c},_doRowSelect:function(f,a){var e=new Date();for(var d=0,c=f.length;d<c;d++){var b=f[d];if(a){this.addRowCls(b,this._rowSelectedCls)}else{this.removeRowCls(b,this._rowSelectedCls)}}},_tryFocus:function(c){try{var b=c.target.tagName.toLowerCase();if(b=="input"||b=="textarea"||b=="select"){return}if(mini.hasClass(c.target,"mini-placeholder-label")){return}if(mini.findParent(c.target,"mini-grid-rows-content")){mini.setXY(this._focusEl,c.pageX,c.pageY);this.focus()}}catch(a){}},focus:function(){try{var f=this;var a=this.getCurrentCell();if(a){var d=this.getCellBox(a[0],a[1]);mini.setX(this._focusEl,d.x)}var h=this.getCurrent();if(h){var c=this._getRowEl(h,2);if(c){var b=mini.getBox(c);mini.setY(f._focusEl,b.top);if(mini.isIE||mini.isIE11){f._focusEl.focus()}else{f.el.focus()}}}else{if(mini.isIE||mini.isIE11){f._focusEl.focus()}else{f.el.focus()}}}catch(g){}},focusRow:function(a){if(this._focusRow==a){return}if(this._focusRow){this.removeRowCls(this._focusRow,this._rowHoverCls)}this._focusRow=a;if(a){this.addRowCls(a,this._rowHoverCls)}},scrollIntoView:function(i,d){i=this.getRow(i);if(!i){return}try{if(d){if(this._columnModel.isFrozenColumn(d)){d=null}}if(d){var a=this._getCellEl(i,d);mini.scrollIntoView(a,this._rowsViewEl,true)}else{if(this.isVirtualScroll()){var g=this._getViewRegion();var c=this.indexOf(i);if(g.start<=c&&c<=g.end){}else{var h=this._getRangeHeight(0,c);this.setScrollTop(h)}}else{var b=this._getRowEl(i,2);mini.scrollIntoView(b,this._rowsViewEl,false)}}}catch(f){}},setShowLoading:function(a){this.showLoading=a},getShowLoading:function(){return this.showLoading},setEnableHotTrack:function(a){this.enableHotTrack=a},getEnableHotTrack:function(){return this.enableHotTrack},setAllowHotTrackOut:function(a){this.allowHotTrackOut=a},getAllowHotTrackOut:function(){return this.allowHotTrackOut},setOnlyCheckSelection:function(a){this.onlyCheckSelection=a},getOnlyCheckSelection:function(){return this.onlyCheckSelection},setAllowUnselect:function(a){this.allowUnselect=a},getAllowUnselect:function(){return this.allowUnselect},setAllowRowSelect:function(a){this.allowRowSelect=a},getAllowRowSelect:function(){return this.allowRowSelect},setAllowCellSelect:function(a){this.allowCellSelect=a},getAllowCellSelect:function(){return this.allowCellSelect},setAllowCellEdit:function(a){this.allowCellEdit=a},getAllowCellEdit:function(){return this.allowCellEdit},setCellEditAction:function(a){this.cellEditAction=a},getCellEditAction:function(){return this.cellEditAction},setAllowCellValid:function(a){this.allowCellValid=a},getAllowCellValid:function(){return this.allowCellValid},setAllowResizeColumn:function(a){this.allowResizeColumn=a;mini.removeClass(this.el,"mini-grid-resizeColumns-no");if(!a){mini.addClass(this.el,"mini-grid-resizeColumns-no")}},getAllowResizeColumn:function(){return this.allowResizeColumn},setAllowSortColumn:function(a){this.allowSortColumn=a},getAllowSortColumn:function(){return this.allowSortColumn},setAllowMoveColumn:function(a){this.allowMoveColumn=a},getAllowMoveColumn:function(){return this.allowMoveColumn},setShowColumnsMenu:function(a){this.showColumnsMenu=a},getShowColumnsMenu:function(){return this.showColumnsMenu},setEditNextRowCell:function(a){this.editNextRowCell=a},getEditNextRowCell:function(){return this.editNextRowCell},setEditNextOnEnterKey:function(a){this.editNextOnEnterKey=a},getEditNextOnEnterKey:function(){return this.editNextOnEnterKey},setEditOnTabKey:function(a){this.editOnTabKey=a},getEditOnTabKey:function(){return this.editOnTabKey},setCreateOnEnter:function(a){this.createOnEnter=a},getCreateOnEnter:function(){return this.createOnEnter},_currentCell:null,_doCurrentCell:function(a){if(this._currentCell){var b=this._currentCell[0],d=this._currentCell[1];var c=this._getCellEl(b,d);if(c){if(a){mini.addClass(c,this._cellSelectedCls)}else{mini.removeClass(c,this._cellSelectedCls)}}}},setCurrentCell:function(a){if(this._currentCell!=a){this._doCurrentCell(false);this._currentCell=a;if(a){var d=this.getRow(a[0]);var b=this.getColumn(a[1]);if(d&&b){this._currentCell=[d,b]}else{this._currentCell=null}}this._doCurrentCell(true);if(a){var c=this._getAnchorCell(a[0],a[1]);if(!c){if(this.isFrozen()){this.scrollIntoView(a[0])}else{this.scrollIntoView(a[0],a[1])}}}this.fire("currentcellchanged")}},getCurrentCell:function(){var a=this._currentCell;if(a){if(this.indexOf(a[0])==-1){this._currentCell=null;a=null}}return a},_editingCell:null,isEditingCell:function(a){return this._editingCell&&this._editingCell[0]==a[0]&&this._editingCell[1]==a[1]},beginEditCell:function(c,a){function b(g,f){g=this.getRow(g);f=this.getColumn(f);var d=[g,f];if(g&&f){this.setCurrentCell(d)}var d=this.getCurrentCell();if(this._editingCell&&d){if(this._editingCell[0]==d[0]&&this._editingCell[1]==d[1]){return}}if(this._editingCell){this.commitEdit()}if(d){var g=d[0],f=d[1];var e=this._OnCellBeginEdit(g,f,this.getCellEditor(f));if(e!==false){this.scrollIntoView(g,f);this._editingCell=d;this._OnCellShowingEdit(g,f)}}}this._pushUpdateCallback(b,this,[c,a])},cancelEdit:function(){if(this.allowCellEdit){if(this._editingCell){this._OnCellEndEdit()}}else{if(this.isEditing()){this._allowLayout=false;var c=this.getDataView();for(var b=0,a=c.length;b<a;b++){var d=c[b];if(d._editing==true){this.cancelEditRow(b)}}this._allowLayout=true;this.doLayout()}}},commitEdit:function(){if(this.allowCellEdit){if(this._editingCell){this._OnCellCommitEdit(this._editingCell[0],this._editingCell[1]);this._OnCellEndEdit()}}else{if(this.isEditing()){this._allowLayout=false;var c=this.getDataView();for(var b=0,a=c.length;b<a;b++){var d=c[b];if(d._editing==true){this.commitEditRow(b)}}this._allowLayout=true;this.doLayout()}}},getCellEditor:function(b,c){b=this.getColumn(b);if(!b){return}if(this.allowCellEdit){var a=b.__editor;if(!a){a=mini.getAndCreate(b.editor)}if(a&&a!=b.editor){b.editor=a}return a}else{c=this.getRow(c);b=this.getColumn(b);if(!c){c=this.getEditingRow()}if(!c||!b){return null}var d=this.uid+"$"+c._uid+"$"+b._id+"$editor";return mini.get(d)}},_OnCellBeginEdit:function(b,d,c){var f=mini._getMap(d.field,b);var h={sender:this,rowIndex:this.indexOf(b),row:b,record:b,column:d,field:d.field,editor:c,value:f,cancel:false};this.fire("cellbeginedit",h);if(!mini.isNull(d.defaultValue)&&(mini.isNull(h.value)||h.value==="")){var a=d.defaultValue;var g=mini.clone({d:a});h.value=g.d}var c=h.editor;f=h.value;if(h.cancel){return false}if(!c){return false}if(mini.isNull(f)){f=""}if(c.setValue){c.setValue(f)}c.ownerRowID=b._uid;if(d.displayField&&c.setText){var i=mini._getMap(d.displayField,b);if(!mini.isNull(d.defaultText)&&(mini.isNull(i)||i==="")){var g=mini.clone({d:d.defaultText});i=g.d}c.setText(i)}if(this.allowCellEdit){this._editingControl=h.editor}return true},_OnCellCommitEdit:function(f,d,j,g){var h={sender:this,rowIndex:this.indexOf(f),record:f,row:f,column:d,field:d.field,editor:g?g:this.getCellEditor(d),value:mini.isNull(j)?"":j,text:"",cancel:false};if(h.editor&&h.editor.getValue){try{h.editor.blur()}catch(i){}h.value=h.editor.getValue()}if(h.editor&&h.editor.getText){h.text=h.editor.getText()}var a=mini._getMap(d.field,f),b=h.value;h.oldValue=a;if(mini.isEquals(a,b)){return h}this.fire("cellcommitedit",h);if(h.cancel==false){if(this.allowCellEdit){var c={};c[d.field]=h.value;if(d.displayField){c[d.displayField]=h.text}this.updateRow(f,c)}}return h},_OnCellEndEdit:function(a,f){if(!this._editingCell&&!a){return}if(!a){a=this._editingCell[0]}if(!f){f=this._editingCell[1]}var g={sender:this,rowIndex:this.indexOf(a),record:a,row:a,column:f,field:f.field,editor:this._editingControl,value:a[f.field]};this.fire("cellendedit",g);if(this.allowCellEdit&&g.editor){var d=g.editor;if(d&&d.setIsValid){d.setIsValid(true)}if(this._editWrap){this._editWrap.style.display="none"}var h=this._editWrap.childNodes;for(var b=h.length-1;b>=0;b--){var c=h[b];this._editWrap.removeChild(c)}if(d&&d.hidePopup){d.hidePopup()}if(d&&d.setValue){d.setValue("")}this._editingControl=null;this._editingCell=null;if(this.allowCellValid){this.validateCell(a,f)}}},_OnCellShowingEdit:function(d,b){if(!this._editingControl){return false}var i=this.getCellBox(d,b);var c=document.body.scrollWidth;if(i.right>c){i.width=c-i.left;if(i.width<10){i.width=10}i.right=i.left+i.width}var g={sender:this,rowIndex:this.indexOf(d),record:d,row:d,column:b,field:b.field,cellBox:i,editor:this._editingControl};this.fire("cellshowingedit",g);var f=g.editor;if(f&&f.setIsValid){f.setIsValid(true)}var h=this._getEditWrap(i);this._editWrap.style.zIndex=mini.getMaxZIndex();if(f.render){f.render(this._editWrap);setTimeout(function(){f.focus();if(f.selectText){f.selectText()}},50);if(f.setVisible){f.setVisible(true)}}else{if(f.el){this._editWrap.appendChild(f.el);setTimeout(function(){try{f.el.focus()}catch(k){}},50)}}if(f.setWidth){var a=i.width;if(a<20){a=20}f.setWidth(a)}if(f.setHeight&&f.type=="textarea"){var j=i.height-1;if(f.minHeight&&j<f.minHeight){j=f.minHeight}f.setHeight(j)}if(f.setWidth){var a=i.width-1;if(f.minWidth&&a<f.minWidth){a=f.minWidth}f.setWidth(a)}mini.on(document,"mousedown",this.__OnBodyMouseDown,this);if(b.autoShowPopup&&f.showPopup){f.showPopup()}},__OnBodyMouseDown:function(f){if(this._editingControl){var a=this._getCellByEvent(f);if(this._editingCell&&a){if(this._editingCell[0]==a.record&&this._editingCell[1]==a.column){return false}}var b=false;if(this._editingControl.within){b=this._editingControl.within(f)}else{b=mini.isAncestor(this._editWrap,f.target)}if(b==false){var d=this;if(mini.isAncestor(this._bodyEl,f.target)==false){setTimeout(function(){d.commitEdit()},1)}else{var c=d._editingCell;setTimeout(function(){var e=d._editingCell;if(c==e){d.commitEdit()}},70)}mini.un(document,"mousedown",this.__OnBodyMouseDown,this)}}},_getEditWrap:function(b){if(!this._editWrap){this._editWrap=mini.append(document.body,'<div class="mini-grid-editwrap" style="position:absolute;"></div>');mini.on(this._editWrap,"keydown",this.___OnEditControlKeyDown,this)}this._editWrap.style.zIndex=1000000000;this._editWrap.style.display="block";mini.setXY(this._editWrap,b.x,b.y);mini.setWidth(this._editWrap,b.width);var a=document.body.scrollWidth;if(b.x>a){mini.setX(this._editWrap,-1000)}return this._editWrap},___OnEditControlKeyDown:function(c){var b=this._editingControl;if(c.keyCode==13&&b&&b.type=="textarea"){return}if(c.keyCode==13){var a=this._editingCell;if(a&&a[1]&&a[1].enterCommit===false){return}this.commitEdit();this.focus();if(this.editNextOnEnterKey){this.fire("celleditenter",{record:a[0]});this._beginEditNextCell(c.shiftKey==false)}else{}}else{if(c.keyCode==27){this.cancelEdit();this.focus()}else{if(c.keyCode==9){this.commitEdit();if(this.editOnTabKey){c.preventDefault();this.commitEdit();this._beginEditNextCell(c.shiftKey==false,true)}else{}}}}},editNextRowCell:false,editNextOnEnterKey:false,editOnTabKey:true,createOnEnter:false,_beginEditNextCell:function(g,c){var a=this;var m=this.getCurrentCell();if(!m){return}this.focus();var f=a.getVisibleColumns();var e=m?m[1]:null,h=m?m[0]:null;function d(n){return a.getVisibleRows()[n]}function l(n){return a.getVisibleRows().indexOf(n)}function b(){return a.getVisibleRows().length}var j=f.indexOf(e);var k=l(h);var i=b();if(g===false){j-=1;e=f[j];if(!e){e=f[f.length-1];h=d(k-1);if(!h){return}}}else{if(this.editNextRowCell&&!c){if(k+1<i){h=d(k+1)}}else{j+=1;e=f[j];if(!e){e=f[0];h=a.getAt(k+1);if(!h){if(this.createOnEnter){h={};this.addRow(h)}else{return}}}}}var m=[h,e];a.setCurrentCell(m);if(!a.onlyCheckSelection){if(a.getCurrent()!=h){a.deselectAll();a.setCurrent(h)}}a.scrollIntoView(h,e);a.beginEditCell()},getEditorOwnerRow:function(b){var a=b.ownerRowID;return this.getRowByUID(a)},beginEditRow:function(row){if(this.allowCellEdit){return}function beginEdit(row){var sss=new Date();row=this.getRow(row);if(!row){return}var rowEl=this._getRowEl(row,2);if(!rowEl){return}row._editing=true;this._doUpdateRowEl(row);var rowEl=this._getRowEl(row,2);mini.addClass(rowEl,"mini-grid-rowEdit");var columns=this.getVisibleColumns();for(var i=0,l=columns.length;i<l;i++){var column=columns[i];var value=row[column.field];var cellEl=this._getCellEl(row,column);if(!cellEl){continue}if(typeof column.editor=="string"){column.editor=eval("("+column.editor+")")}var editorConfig=mini.copyTo({},column.editor);editorConfig.id=this.uid+"$"+row._uid+"$"+column._id+"$editor";var editor=mini.create(editorConfig);if(this._OnCellBeginEdit(row,column,editor)){if(editor){mini.addClass(cellEl,"mini-grid-cellEdit");cellEl.innerHTML="";cellEl.appendChild(editor.el);mini.addClass(editor.el,"mini-grid-editor")}}}this.doLayout()}this._pushUpdateCallback(beginEdit,this,[row])},cancelEditRow:function(k){if(this.allowCellEdit){return}k=this.getRow(k);if(!k||!k._editing){return}delete k._editing;var f=this._getRowEl(k);var e=this.getVisibleColumns();for(var h=0,g=e.length;h<g;h++){var d=e[h];var a=this._createCellId(k,e[h]);var b=document.getElementById(a);var c=b.firstChild;var j=mini.get(c);if(!j){continue}j.destroy()}this._doUpdateRowEl(k);this.doLayout()},commitEditRow:function(b){if(this.allowCellEdit){return}b=this.getRow(b);if(!b||!b._editing){return}var a=this.getEditRowData(b,false,false);this._canUpdateRowEl=false;this.updateRow(b,a);this._canUpdateRowEl=true;this.cancelEditRow(b)},isEditing:function(){var c=this.getDataView();for(var b=0,a=c.length;b<a;b++){var d=c[b];if(d._editing==true){return true}}return false},isEditingRow:function(a){a=this.getRow(a);if(!a){return false}return !!a._editing},isNewRow:function(a){return a._state=="added"},getEditingRows:function(){var d=[];var c=this.getDataView();for(var b=0,a=c.length;b<a;b++){var e=c[b];if(e._editing==true){d.push(e)}}return d},getEditingRow:function(){var a=this.getEditingRows();return a[0]},getEditData:function(c){var e=[];var e=this.getDataView();for(var b=0,a=e.length;b<a;b++){var f=e[b];if(f._editing==true){var d=this.getEditRowData(b,c);d._index=b;e.push(d)}}return e},getEditRowData:function(h,b,s){h=this.getRow(h);if(!h||!h._editing){return null}var g=this.getIdField();var r=this.getParentField?this.getParentField():null;var j={};var a=this.getVisibleColumns();for(var t=0,q=a.length;t<q;t++){var c=a[t];var v=this._createCellId(h,a[t]);var m=document.getElementById(v);var u=null;if(c.type=="checkboxcolumn"||c.type=="radiobuttoncolumn"){var k=c.getCheckBoxEl(h,c);var p=k.checked?c.trueValue:c.falseValue;u=this._OnCellCommitEdit(h,c,p)}else{var f=m.firstChild;var d=mini.get(f);if(!d){continue}u=this._OnCellCommitEdit(h,c,null,d)}if(s!==false){mini._setMap(c.field,u.value,j);if(c.displayField){mini._setMap(c.displayField,u.text,j)}}else{j[c.field]=u.value;if(c.displayField){j[c.displayField]=u.text}}}j[g]=h[g];if(r){j[r]=h[r]}if(b){var n=mini.copyTo({},h);j=mini.copyTo(n,j)}return j},collapseGroups:function(){if(!this.isGrouping()){return}this._allowLayout=false;var a=this.getGroupingView();for(var c=0,b=a.length;c<b;c++){var d=a[c];this.collapseRowGroup(d)}this._allowLayout=true;this.doLayout()},expandGroups:function(){if(!this.isGrouping()){return}this._allowLayout=false;var a=this.getGroupingView();for(var c=0,b=a.length;c<b;c++){var d=a[c];this.expandRowGroup(d)}this._allowLayout=true;this.doLayout()},toggleRowGroup:function(a){if(a.expanded){this.collapseRowGroup(a)}else{this.expandRowGroup(a)}},collapseRowGroup:function(d){d=this.getRowGroup(d);if(!d){return}d.expanded=false;var b=this._getRowGroupEl(d,1);var c=this._getRowGroupRowsEl(d,1);var a=this._getRowGroupEl(d,2);var e=this._getRowGroupRowsEl(d,2);if(c){c.style.display="none"}if(e){e.style.display="none"}if(b){mini.addClass(b,"mini-grid-group-collapse")}if(a){mini.addClass(a,"mini-grid-group-collapse")}this.doLayout()},expandRowGroup:function(d){d=this.getRowGroup(d);if(!d){return}d.expanded=true;var b=this._getRowGroupEl(d,1);var c=this._getRowGroupRowsEl(d,1);var a=this._getRowGroupEl(d,2);var e=this._getRowGroupRowsEl(d,2);if(c){c.style.display=""}if(e){e.style.display=""}if(b){mini.removeClass(b,"mini-grid-group-collapse")}if(a){mini.removeClass(a,"mini-grid-group-collapse")}this.doLayout()},showAllRowDetail:function(){this._allowLayout=false;var c=this.getDataView();for(var b=0,a=c.length;b<a;b++){var d=c[b];this.showRowDetail(d)}this._allowLayout=true;this.doLayout()},hideAllRowDetail:function(){this._allowLayout=false;var c=this.getDataView();for(var b=0,a=c.length;b<a;b++){var d=c[b];this.hideRowDetail(d)}this._allowLayout=true;this.doLayout()},isShowRowDetail:function(a){a=this.getRow(a);if(!a){return false}return !!a._showDetail},toggleRowDetail:function(a){a=this.getRow(a);if(!a){return}if(grid.isShowRowDetail(a)){grid.hideRowDetail(a)}else{grid.showRowDetail(a)}},showRowDetail:function(d){d=this.getRow(d);if(!d||d._showDetail==true){return}d._showDetail=true;var b=this._getRowDetailEl(d,1,true);var e=this._getRowDetailEl(d,2,true);if(b){b.style.display=""}if(e){e.style.display=""}var a=this._getRowEl(d,1);var c=this._getRowEl(d,2);if(a){mini.addClass(a,"mini-grid-expandRow")}if(c){mini.addClass(c,"mini-grid-expandRow")}this.fire("showrowdetail",{record:d});this.doLayout()},hideRowDetail:function(d){d=this.getRow(d);if(!d||d._showDetail!==true){return}d._showDetail=false;var b=this._getRowDetailEl(d,1);var e=this._getRowDetailEl(d,2);if(b){b.style.display="none"}if(e){e.style.display="none"}var a=this._getRowEl(d,1);var c=this._getRowEl(d,2);if(a){mini.removeClass(a,"mini-grid-expandRow")}if(c){mini.removeClass(c,"mini-grid-expandRow")}this.fire("hiderowdetail",{record:d});this.doLayout()},_getRowDetailEl:function(d,a,c){d=this.getRow(d);if(!d){return null}var e=this._createRowDetailId(d,a);var b=document.getElementById(e);if(!b&&c===true){b=this._createRowDetail(d,a)}return b},_createRowDetail:function(e,a){var h=this.getFrozenColumns();var d=this.getUnFrozenColumns();var g=h.length;if(a==2){g=d.length}var c=this._getRowEl(e,a);if(!c){return null}var f=this._createRowDetailId(e,a);var b='<tr id="'+f+'" class="mini-grid-detailRow"><td class="mini-grid-detailCell" colspan="'+g+'"></td></tr>';jQuery(c).after(b);return document.getElementById(f)},_createRowDetailId:function(b,a){return this._id+"$detail"+a+"$"+b._id},getRowDetailCellEl:function(c,a){if(!a){a=2}var b=this._getRowDetailEl(c,a);if(b){return b.cells[0]}},autoHideRowDetail:true,setAutoHideRowDetail:function(a){this.autoHideRowDetail=a},getAutoHideRowDetail:function(){return this.autoHideRowDetail},mergeColumns:function(d){if(d&&mini.isArray(d)==false){d=[d]}var a=this;var b=a.getVisibleColumns();if(!d){d=b}var f=a.getDataView();f.push({});var h=[];for(var g=0,e=d.length;g<e;g++){var c=d[g];c=a.getColumn(c);if(!c){continue}var k=j(c);h.addRange(k)}function j(m){if(!m.field){return}var v=[];var r=-1,q=1,p=b.indexOf(m);var u=null;for(var o=0,n=f.length;o<n;o++){var w=f[o];var s=mini._getMap(m.field,w);if(r==-1||!mini.isEquals(s,u)){if(q>1){var t={rowIndex:r,columnIndex:p,rowSpan:q,colSpan:1};v.push(t)}r=o;q=1;u=s}else{q++}}return v}a.mergeCells(h)},mergeCells:function(c){if(!mini.isArray(c)){return}this._mergedCells=c;var e=this._mergedCellMaps={};function f(r,p,q,o,s){for(var n=r,g=r+q;n<g;n++){for(var m=p,h=p+o;m<h;m++){if(n==r&&m==p){e[n+":"+m]=s}else{e[n+":"+m]=true}}}}var c=this._mergedCells;if(c){for(var d=0,b=c.length;d<b;d++){var a=c[d];if(!a.rowSpan){a.rowSpan=1}if(!a.colSpan){a.colSpan=1}f(a.rowIndex,a.columnIndex,a.rowSpan,a.colSpan,a)}}this.deferUpdate()},margeCells:function(a){this.mergeCells(a)},_isCellVisible:function(c,b){if(!this._mergedCellMaps){return true}var a=this._mergedCellMaps[c+":"+b];return !(a===true)},_getAnchorCell:function(c,b){if(!this._mergedCellMaps){return null}var d=this.indexOf(c),a=this.getBottomColumns().indexOf(b);return this._mergedCellMaps[d+":"+a]},_getCellEls:function(n,h,m,g){var p=[];if(!mini.isNumber(n)){return[]}if(!mini.isNumber(h)){return[]}var b=this.getVisibleColumns();var e=this.getDataView();for(var f=n,a=n+m;f<a;f++){for(var d=h,c=h+g;d<c;d++){var o=this._getCellEl(f,d);if(o){p.push(o)}}}return p},_getDragData:function(){var b=this.getSelecteds().clone();var a=this;mini.sort(b,function(d,c){var f=a.indexOf(d);var e=a.indexOf(c);if(f>e){return 1}if(f<e){return -1}return 0},this);return b},_getDragText:function(a){return"Records "+a.length},allowDrag:false,allowDrop:false,allowLeafDropIn:false,setAllowLeafDropIn:function(a){this.allowLeafDropIn=a},getAllowLeafDropIn:function(){return this.allowLeafDropIn},setAllowDrag:function(a){this.allowDrag=a},getAllowDrag:function(){return this.allowDrag},setAllowDrop:function(a){this.allowDrop=a},getAllowDrop:function(){return this.allowDrop},isAllowDrag:function(b,a){if(this.isReadOnly()||this.enabled==false){return false}if(!this.allowDrag||!a.allowDrag){return false}if(b.allowDrag===false){return false}return true},_OnDragStart:function(b,a){var c={node:b,nodes:this._getDragData(),column:a,cancel:false};c.record=c.node;c.records=c.nodes;c.dragText=this._getDragText(c.nodes);this.fire("dragstart",c);return c},_OnGiveFeedback:function(c,b,a,f){var d={};d.from=f;d.effect=c;d.nodes=b;d.node=d.nodes[0];d.targetNode=a;d.dragNodes=b;d.dragNode=d.dragNodes[0];d.dropNode=d.targetNode;d.dragAction=d.action;this.fire("givefeedback",d);return d},_OnDragDrop:function(c,b,a){c=c.clone();var d={dragNodes:c,targetNode:b,action:a,cancel:false};d.dragNode=d.dragNodes[0];d.dropNode=d.targetNode;d.dragAction=d.action;this.fire("beforedrop",d);this.fire("dragdrop",d);return d},moveUp:function(b){if(!mini.isArray(b)){return}var f=this;b=b.sort(function(h,g){var j=f.indexOf(h);var i=f.indexOf(g);if(j>i){return 1}return -1});for(var d=0,a=b.length;d<a;d++){var e=b[d];var c=this.indexOf(e);this.moveRow(e,c-1)}},moveDown:function(b){if(!mini.isArray(b)){return}var f=this;b=b.sort(function(h,g){var j=f.indexOf(h);var i=f.indexOf(g);if(j>i){return 1}return -1});b.reverse();for(var d=0,a=b.length;d<a;d++){var e=b[d];var c=this.indexOf(e);this.moveRow(e,c+2)}},pageSize:20,pageIndex:0,totalCount:0,totalPage:0,sortField:"",sortOrder:"",url:"",setAjaxAsync:function(a){this._dataSource.ajaxAsync=a;this.ajaxAsync=a},getAjaxAsync:function(){return this._dataSource.ajaxAsync},setAjaxMethod:function(a){this._dataSource.ajaxMethod=a;this.ajaxMethod=a},getAjaxMethod:function(){return this._dataSource.ajaxMethod},setAjaxType:function(a){this._dataSource.ajaxType=a;this.ajaxType=a},getAjaxType:function(){return this._dataSource.ajaxType},setAjaxOptions:function(a){this._dataSource.setAjaxOptions(a)},getAjaxOptions:function(){return this._dataSource.getAjaxOptions()},setAutoLoad:function(a){this._dataSource.setAutoLoad(a)},getAutoLoad:function(){return this._dataSource.getAutoLoad()},setUrl:function(a){this._dataSource.setUrl(a);this.url=a},getUrl:function(){return this._dataSource.getUrl()},load:function(d,c,b,a){this._dataSource.load(d,c,b,a)},reload:function(c,b,a){this.accept();this._dataSource.reload(c,b,a)},gotoPage:function(a,b){this._dataSource.gotoPage(a,b)},sortBy:function(b,c){if(!b){return null}if(this._dataSource.sortMode=="server"){this._dataSource.sortBy(b,c)}else{var a=this._columnModel._getDataTypeByField(b);this._dataSource._doClientSortField(b,c,a)}},setCheckSelectOnLoad:function(a){this._dataSource.setCheckSelectOnLoad(a);this.checkSelectOnLoad=a},getCheckSelectOnLoad:function(){return this._dataSource.getCheckSelectOnLoad()},setSelectOnLoad:function(a){this._dataSource.setSelectOnLoad(a);this.selectOnLoad=a},getSelectOnLoad:function(){return this._dataSource.getSelectOnLoad()},setSortMode:function(a){this._dataSource.setSortMode(a);this.sortMode=a},getSortMode:function(){return this._dataSource.getSortMode()},setPageIndex:function(a){this._dataSource.setPageIndex(a);this.pageIndex=a},getPageIndex:function(){return this._dataSource.getPageIndex()},setPageSize:function(a){this._dataSource.setPageSize(a);this._virtualRows=a;this.pageSize=a},getPageSize:function(){return this._dataSource.getPageSize()},setTotalCount:function(a){this._dataSource.setTotalCount(a);this.totalCount=a},getTotalCount:function(){return this._dataSource.getTotalCount()},getTotalPage:function(){return this._dataSource.getTotalPage()},setSortField:function(a){this._dataSource.setSortField(a);this.sortField=a},getSortField:function(){return this._dataSource.sortField},setSortOrder:function(a){this._dataSource.setSortOrder(a);this.sortOrder=a},getSortOrder:function(){return this._dataSource.sortOrder},setPageIndexField:function(a){this._dataSource.pageIndexField=a;this.pageIndexField=a},getPageIndexField:function(){return this._dataSource.pageIndexField},setPageSizeField:function(a){this._dataSource.pageSizeField=a;this.pageSizeField=a},getPageSizeField:function(){return this._dataSource.pageSizeField},setStartField:function(a){this._dataSource.startField=a;this.startField=a},getStartField:function(){return this._dataSource.startField},setLimitField:function(a){this._dataSource.limitField=a;this.limitField=a},getLimitField:function(){return this._dataSource.limitField},setSortFieldField:function(a){this._dataSource.sortFieldField=a;this.sortFieldField=a},getSortFieldField:function(){return this._dataSource.sortFieldField},setSortOrderField:function(a){this._dataSource.sortOrderField=a;this.sortOrderField=a},getSortOrderField:function(){return this._dataSource.sortOrderField},setTotalField:function(a){this._dataSource.totalField=a;this.totalField=a},getTotalField:function(){return this._dataSource.totalField},setDataField:function(a){this._dataSource.dataField=a;this.dataField=a},getDataField:function(){return this._dataSource.dataField},setErrorField:function(a){this._dataSource.errorField=a;this.errorField=a},getErrorField:function(){return this._dataSource.errorField},setErrorMsgField:function(a){this._dataSource.errorMsgField=a;this.errorMsgField=a},getErrorMsgField:function(){return this._dataSource.errorMsgField},setStackTraceField:function(a){this._dataSource.stackTraceField=a;this.stackTraceField=a},getStackTraceField:function(){return this._dataSource.stackTraceField},setShowReloadButton:function(a){this._bottomPager.setShowReloadButton(a)},getShowReloadButton:function(){return this._bottomPager.getShowReloadButton()},setShowPageInfo:function(a){this._bottomPager.setShowPageInfo(a)},getShowPageInfo:function(){return this._bottomPager.getShowPageInfo()},setSizeList:function(a){if(!mini.isArray(a)){return}this._bottomPager.setSizeList(a)},getSizeList:function(){return this._bottomPager.getSizeList()},setShowPageSize:function(a){this._bottomPager.setShowPageSize(a)},getShowPageSize:function(){return this._bottomPager.getShowPageSize()},setShowPageIndex:function(a){this.showPageIndex=a;this._bottomPager.setShowPageIndex(a)},getShowPageIndex:function(){return this._bottomPager.getShowPageIndex()},setShowTotalCount:function(a){this._bottomPager.setShowTotalCount(a)},getShowTotalCount:function(){return this._bottomPager.getShowTotalCount()},setPagerStyle:function(a){this.pagerStyle=a;mini.setStyle(this._bottomPager.el,a)},setPagerCls:function(a){this.pagerCls=a;mini.addClass(this._bottomPager.el,a)},_beforeOpenContentMenu:function(c,b){var a=mini.isAncestor(this._bodyEl,b.htmlEvent.target);if(a){c.fire("BeforeOpen",b)}else{b.cancel=true}},__OnHtmlContextMenu:function(b){var a={popupEl:this.el,htmlEvent:b,cancel:false};if(mini.isAncestor(this._columnsEl,b.target)){if(this.headerContextMenu){this.headerContextMenu.fire("BeforeOpen",a);if(a.cancel==true){return}this.headerContextMenu.fire("opening",a);if(a.cancel==true){return}this.headerContextMenu.showAtPos(b.pageX,b.pageY);this.headerContextMenu.fire("Open",a)}}else{var c=mini.findParent(b.target,"mini-grid-detailRow");if(c&&mini.isAncestor(this.el,c)){return}if(this.contextMenu){this._beforeOpenContentMenu(this.contextMenu,a);if(a.cancel==true){return}this.contextMenu.fire("opening",a);if(a.cancel==true){return}this.contextMenu.showAtPos(b.pageX,b.pageY);this.contextMenu.fire("Open",a)}}return false},headerContextMenu:null,setHeaderContextMenu:function(b){var a=this._getContextMenu(b);if(!a){return}if(this.headerContextMenu!==a){this.headerContextMenu=a;this.headerContextMenu.owner=this;mini.on(this.el,"contextmenu",this.__OnHtmlContextMenu,this)}},getHeaderContextMenu:function(){return this.headerContextMenu},_get_originals:function(){return this._dataSource._originals},_set_originals:function(a){this._dataSource._originals=a},_set_clearOriginals:function(a){this._dataSource._clearOriginals=a},_set_originalIdField:function(a){this._dataSource._originalIdField=a},_set_autoCreateNewID:function(a){this._dataSource._autoCreateNewID=a},getAttrs:function(el){var attrs=mini.DataGrid.superclass.getAttrs.call(this,el);var cs=mini.getChildNodes(el);for(var i=0,l=cs.length;i<l;i++){var node=cs[i];var property=jQuery(node).attr("property");if(!property){continue}property=property.toLowerCase();if(property=="columns"){attrs.columns=mini._ParseColumns(node);mini.removeNode(node)}else{if(property=="data"){attrs.data=node.innerHTML;mini.removeNode(node)}}}mini._ParseString(el,attrs,["oncelleditenter","onselect","ondeselect","onbeforeselect","onbeforedeselect","url","sizeList","bodyCls","bodyStyle","footerCls","footerStyle","pagerCls","pagerStyle","onheadercellclick","onheadercellmousedown","onheadercellcontextmenu","onrowdblclick","onrowclick","onrowmousedown","onrowcontextmenu","onrowmouseenter","onrowmouseleave","oncellclick","oncellmousedown","oncellcontextmenu","oncelldblclick","onbeforeload","onpreload","onloaderror","onload","onupdate","ondrawcell","oncellbeginedit","onselectionchanged","ondrawgroup","onbeforeshowrowdetail","onbeforehiderowdetail","onshowrowdetail","onhiderowdetail","idField","valueField","pager","oncellcommitedit","oncellendedit","headerContextMenu","loadingMsg","emptyText","cellEditAction","sortMode","oncellvalidation","onsort","ondrawsummarycell","ondrawgroupsummarycell","onresize","oncolumnschanged","ajaxMethod","ajaxOptions","onaddrow","onupdaterow","onremoverow","onmoverow","onbeforeaddrow","onbeforeupdaterow","onbeforeremoverow","onbeforemoverow","pageIndexField","pageSizeField","sortFieldField","sortOrderField","startField","limitField","totalField","dataField","sortField","sortOrder","stackTraceField","errorField","errorMsgField","pagerButtons"]);mini._ParseBool(el,attrs,["showColumns","showFilterRow","showSummaryRow","showPager","showFooter","showHGridLines","showVGridLines","allowSortColumn","allowMoveColumn","allowResizeColumn","fitColumns","showLoading","multiSelect","allowAlternating","resultAsData","allowRowSelect","allowUnselect","onlyCheckSelection","allowHotTrackOut","enableHotTrack","showPageIndex","showPageSize","showTotalCount","checkSelectOnLoad","allowResize","autoLoad","autoHideRowDetail","allowCellSelect","allowCellEdit","allowCellWrap","allowHeaderWrap","selectOnLoad","virtualScroll","collapseGroupOnLoad","showGroupSummary","showEmptyText","allowCellValid","showModified","showColumnsMenu","showPageInfo","showReloadButton","showNewRow","editNextOnEnterKey","createOnEnter","ajaxAsync","allowDrag","allowDrop","allowLeafDropIn","editNextRowCell"]);mini._ParseInt(el,attrs,["frozenStartColumn","frozenEndColumn","pageIndex","pageSize","defaultRowHeight","defaultColumnWidth"]);if(typeof attrs.ajaxOptions=="string"){attrs.ajaxOptions=eval("("+attrs.ajaxOptions+")")}if(typeof attrs.sizeList=="string"){attrs.sizeList=eval("("+attrs.sizeList+")")}if(!attrs.idField&&attrs.valueField){attrs.idField=attrs.valueField}if(attrs.pagerButtons){attrs.pagerButtons=mini.byId(attrs.pagerButtons)}return attrs}});mini.regClass(mini.DataGrid,"datagrid");mini_DataGrid_CellValidator_Prototype={getCellErrors:function(){var h=this._cellErrors.clone();var e=this.getDataView();for(var c=0,a=h.length;c<a;c++){var b=h[c];var f=b.record;var d=b.column;if(e.indexOf(f)==-1){var g=f[this._rowIdField]+"$"+d._id;delete this._cellMapErrors[g];this._cellErrors.remove(b)}}return this._cellErrors},getCellError:function(b,a){b=this.getNode?this.getNode(b):this.getRow(b);a=this.getColumn(a);if(!b||!a){return}var c=b[this._rowIdField]+"$"+a._id;return this._cellMapErrors?this._cellMapErrors[c]:null},isValid:function(){return this.getCellErrors().length==0},isCellValid:function(a,b){if(!this._cellMapErrors){return true}var c=a[this._rowIdField]+"$"+b._id;return !this._cellMapErrors[c]},validate:function(c){c=c||this.getDataView();if(!mini.isArray(c)){c=[]}for(var b=0,a=c.length;b<a;b++){var d=c[b];this.validateRow(d)}},validateRow:function(e){var c=this.getBottomColumns();for(var b=0,a=c.length;b<a;b++){var d=c[b];this.validateCell(e,d)}},validateCell:function(p,d){p=this.getNode?this.getNode(p):this.getRow(p);d=this.getColumn(d);if(!p||!d||d.visible==false){return}var m=mini._getMap(d.field,p);var h={record:p,row:p,node:p,column:d,field:d.field,value:m,isValid:true,errorText:""};if(d.vtype){mini._ValidateVType(d.vtype,h.value,h,d)}if(h.isValid==true&&d.unique&&d.field){var j={};var f=this.data,k=d.field;for(var g=0,c=f.length;g<c;g++){var a=f[g];var n=a[k];if(mini.isNull(n)||n===""){}else{var b=j[n];if(b&&a==p){h.isValid=false;h.errorText=mini._getErrorText(d,"uniqueErrorText");this.setCellIsValid(b,d,h.isValid,h.errorText);break}j[n]=a}}}this.fire("cellvalidation",h);this.setCellIsValid(p,d,h.isValid,h.errorText)},setIsValid:function(d){if(d){var e=this._cellErrors.clone();for(var c=0,a=e.length;c<a;c++){var b=e[c];this.setCellIsValid(b.record,b.column,true)}}},_removeRowError:function(f){var d=this.getColumns();for(var c=0,a=d.length;c<a;c++){var e=d[c];var g=f[this._rowIdField]+"$"+e._id;var b=this._cellMapErrors[g];if(b){delete this._cellMapErrors[g];this._cellErrors.remove(b)}}},setCellIsValid:function(f,d,e,a){f=this.getRow(f);d=this.getColumn(d);if(!f||!d){return}var g=f[this._rowIdField]+"$"+d._id;var b=this._getCellEl(f,d);var c=this._cellMapErrors[g];delete this._cellMapErrors[g];this._cellErrors.remove(c);if(e===true){if(b&&c){mini.removeClass(b,"mini-grid-cell-error")}}else{c={record:f,column:d,isValid:e,errorText:a};this._cellMapErrors[g]=c;this._cellErrors.add(c);if(b){mini.addClass(b,"mini-grid-cell-error")}}}};mini.copyTo(mini.DataGrid.prototype,mini_DataGrid_CellValidator_Prototype);mini.TreeGrid=function(){mini.TreeGrid.superclass.constructor.call(this);mini.addClass(this.el,"mini-tree");this.setAjaxAsync(false);this.setAutoLoad(true);if(this.showTreeLines==true){mini.addClass(this.el,"mini-tree-treeLine")}this._AsyncLoader=new mini._Tree_AsyncLoader(this);this._Expander=new mini._Tree_Expander(this)};mini.copyTo(mini.TreeGrid.prototype,mini._DataTreeApplys);mini.extend(mini.TreeGrid,mini.DataGrid,{isTree:true,uiCls:"mini-treegrid",showPager:false,showNewRow:false,showCheckBox:false,showRadioButton:false,showTreeIcon:true,showExpandButtons:true,showTreeLines:false,showArrow:false,expandOnDblClick:true,expandOnNodeClick:false,loadOnExpand:true,_checkBoxType:"checkbox",iconField:"iconCls",_treeColumn:null,leafIconCls:"mini-tree-leaf",folderIconCls:"mini-tree-folder",fixedRowHeight:false,_checkBoxCls:"mini-tree-checkbox",_expandNodeCls:"mini-tree-expand",_collapseNodeCls:"mini-tree-collapse",_eciconCls:"mini-tree-node-ecicon",_inNodeCls:"mini-tree-nodeshow",indexOf:function(a){return this._dataSource.indexOfList(a)},_getDragText:function(a){return"Nodes "+a.length},_initEvents:function(){mini.TreeGrid.superclass._initEvents.call(this);this.on("nodedblclick",this.__OnNodeDblClick,this);this.on("nodeclick",this.__OnNodeClick,this);this.on("cellclick",function(a){a.node=a.record;a.isLeaf=this.isLeaf(a.node);this.fire("nodeclick",a)},this);this.on("cellmousedown",function(a){a.node=a.record;a.isLeaf=this.isLeaf(a.node);this.fire("nodemousedown",a)},this);this.on("celldblclick",function(a){a.node=a.record;a.isLeaf=this.isLeaf(a.node);this.fire("nodedblclick",a)},this);this.on("beforerowselect",function(a){a.node=a.selected;a.isLeaf=this.isLeaf(a.node);this.fire("beforenodeselect",a)},this);this.on("rowselect",function(a){a.node=a.selected;a.isLeaf=this.isLeaf(a.node);this.fire("nodeselect",a)},this)},setValue:function(d,b){if(mini.isNull(d)){d=""}d=String(d);if(this.getValue()!=d){var a=this.getCheckedNodes();this.uncheckNodes(a);this.value=d;if(this.showCheckBox){var c=String(d).split(",");this._dataSource.doCheckNodes(c,true,b!==false)}else{this.selectNode(d,false)}}},getValue:function(a){if(this.showCheckBox){if(a===false){a="leaf"}return this._dataSource.getCheckedNodesId(a)}else{return this._dataSource.getSelectedsId()}},getText:function(){var c=[];if(this.showCheckBox){c=this.getCheckedNodes()}else{var e=this.getSelectedNode();if(e){c.push(e)}}var f=[],b=this.getTextField();for(var d=0,a=c.length;d<a;d++){var e=c[d];f.push(e[b])}return f.join(",")},isGrouping:function(){return false},_createSource:function(){this._dataSource=new mini.DataTree()},_bindSource:function(){mini.TreeGrid.superclass._bindSource.call(this);var a=this._dataSource;a.on("expand",this.__OnTreeExpand,this);a.on("collapse",this.__OnTreeCollapse,this);a.on("checkchanged",this.__OnCheckChanged,this);a.on("addnode",this.__OnSourceAddNode,this);a.on("removenode",this.__OnSourceRemoveNode,this);a.on("movenode",this.__OnSourceMoveNode,this);a.on("beforeloadnode",this.__OnBeforeLoadNode,this);a.on("loadnode",this.__OnLoadNode,this)},__OnBeforeLoadNode:function(a){this.__showLoading=this.showLoading;this.showLoading=false;this.addNodeCls(a.node,"mini-tree-loading");this.fire("beforeloadnode",a)},__OnLoadNode:function(a){this.showLoading=this.__showLoading;this.removeNodeCls(a.node,"mini-tree-loading");this.fire("loadnode",a)},_virtualUpdate:function(){var a=this;if(a._updateNodeTimer){clearTimeout(a._updateNodeTimer);a._updateNodeTimer=null}a._updateNodeTimer=setTimeout(function(){a._updateNodeTimer=null;a.doUpdateRows();a.deferLayout(50)},5)},__OnSourceAddNode:function(b){var a=new Date();if(this.isVirtualScroll()==true){this._virtualUpdate()}else{this._doAddNodeEl(b.node)}this.fire("addnode",b)},__OnSourceRemoveNode:function(c){if(this.isVirtualScroll()==true){this._virtualUpdate()}else{this._doRemoveNodeEl(c.node);var a=this.getParentNode(c.node);var b=this.getChildNodes(a);if(b.length==0){this._doUpdateTreeNodeEl(a)}}this.fire("removenode",c)},__OnSourceMoveNode:function(a){this._doMoveNodeEl(a.node);this.fire("movenode",a)},_doAddNodeEl:function(c){var g=this.getFrozenColumns();var e=this.getUnFrozenColumns();var a=this.getParentNode(c);var f=this.indexOf(c);var b=false;function d(m,k,j){var l=this._createRowHTML(m,f,k,j);var i=this.indexOfNode(m)+1;var n=this.getChildNodeAt(i,a);if(n){var o=this._getNodeEl(n,j);jQuery(o).before(l)}else{var h=this._getNodesEl(a,j);if(h){mini.append(h.firstChild,l)}else{b=true}}}d.call(this,c,e,2);d.call(this,c,g,1);if(b){this._doUpdateTreeNodeEl(a)}},_doRemoveNodeEl:function(c){this._doRemoveRowEl(c);var a=this._getNodesEl(c,1);var b=this._getNodesEl(c,2);if(a){a.parentNode.removeChild(a)}if(b){b.parentNode.removeChild(b)}},_doMoveNodeEl:function(b){this._doRemoveNodeEl(b);var a=this.getParentNode(b);this._doUpdateTreeNodeEl(a)},_doUpdateNodeTitle:function(a){this._doUpdateTreeNodeEl(a,false)},_doUpdateTreeNodeEl:function(e,f){f=f!==false;var d=this.getRootNode();if(d==e){this.doUpdate();return}if(!this.isVisibleNode(e)){return}var l=e;var a=this.getFrozenColumns();var c=this.getUnFrozenColumns();var j=this._createNodeHTML(e,a,1,null,f);var h=this._createNodeHTML(e,c,2,null,f);var o=this._getNodeEl(e,1);var m=this._getNodeEl(e,2);var k=this._getNodesTr(e,1);var i=this._getNodesTr(e,2);var p=this._getRowDetailEl(e,1);var n=this._getRowDetailEl(e,2);var g=mini.createElements(j);var e=g[0];var b=g[1];if(o){mini.before(o,e);if(f){if(p){mini.after(p,b)}else{mini.before(o,b)}}mini.removeNode(o);if(f){mini.removeNode(k)}}var g=mini.createElements(h);var e=g[0];var b=g[1];if(m){mini.before(m,e);if(f){if(n){mini.after(n,b)}else{mini.before(m,b)}}mini.removeNode(m);if(f){mini.removeNode(i)}}if(e.checked!=true&&!this.isLeaf(e)){this._doCheckNodeEl(l)}},addNodeCls:function(b,a){this.addRowCls(b,a)},removeNodeCls:function(b,a){this.removeRowCls(b,a)},doUpdate:function(){mini.TreeGrid.superclass.doUpdate.apply(this,arguments)},setData:function(a){if(!a){a=[]}this._dataSource.setData(a)},loadList:function(c,b,d){b=b||this.getIdField();d=d||this.getParentField();var a=mini.listToTree(c,this.getNodesField(),b,d);this.setData(a)},_createDrawCellEvent:function(a,c,f,b){var d=mini.TreeGrid.superclass._createDrawCellEvent.call(this,a,c,f,b);d.node=d.record;d.isLeaf=this.isLeaf(d.node);if(this._treeColumn&&this._treeColumn==c.name){d.isTreeCell=true;d.img=a[this.imgField];d.iconCls=this._getNodeIcon(a);d.nodeCls="";d.nodeStyle="";d.nodeHtml="";d.showTreeIcon=this.showTreeIcon;d.checkBoxType=this._checkBoxType;d.showCheckBox=this.showCheckBox;d.showRadioButton=this.showRadioButton;if(d.showCheckBox&&!d.isLeaf){d.showCheckBox=this.showFolderCheckBox}if(d.showRadioButton&&!d.isLeaf){d.showRadioButton=this.showFolderCheckBox}d.checkable=this.getCheckable(d.node)}return d},_OnDrawCell:function(a,c,f,b){var d=mini.TreeGrid.superclass._OnDrawCell.call(this,a,c,f,b);if(this._treeColumn&&this._treeColumn==c.name){this.fire("drawnode",d);if(d.nodeStyle){d.cellStyle=d.nodeStyle}if(d.nodeCls){d.cellCls=d.nodeCls}if(d.nodeHtml){d.cellHtml=d.nodeHtml}this._createTreeColumn(d)}return d},_isViewFirstNode:function(b){if(this._viewNodes){var c=this.getParentNode(b);var a=this._getViewChildNodes(c);return a[0]===b}else{return this.isFirstNode(b)}},_isViewLastNode:function(b){if(this._viewNodes){var c=this.getParentNode(b);var a=this._getViewChildNodes(c);return a[a.length-1]===b}else{return this.isLastNode(b)}},_isInViewLastNode:function(f,h){if(this._viewNodes){var g=null;var d=this.getAncestors(f);for(var e=0,c=d.length;e<c;e++){var b=d[e];if(this.getLevel(b)==h){g=b}}if(!g||g==this.root){return false}return this._isViewLastNode(g)}else{return this.isInLastNode(f,h)}},isInLastNode:function(f,h){var g=null;var d=this.getAncestors(f);for(var e=0,c=d.length;e<c;e++){var b=d[e];if(this.getLevel(b)==h){g=b}}if(!g||g==this.root){return false}return this.isLastNode(g)},_createNodeTitle:function(q,b,t){var f=!b;if(!b){b=[]}var u=this.isLeaf(q);var a=this.getLevel(q);var c=t.nodeCls;if(!u){c=this.isExpandedNode(q)?this._expandNodeCls:this._collapseNodeCls}if(q.enabled===false){c+=" mini-disabled"}if(!u){c+=" mini-tree-parentNode"}var d=this.getChildNodes(q);var r=d&&d.length>0;b[b.length]='<div class="mini-tree-nodetitle '+c+'" style="'+t.nodeStyle+'">';var h=this.getParentNode(q);var m=0;for(var s=m;s<=a;s++){if(s==a){continue}if(u){if(s>a-1){continue}}var k="";if(this._isInViewLastNode(q,s)){k="background:none"}b[b.length]='<span class="mini-tree-indent " style="'+k+'"></span>'}var l="";if(this._isViewFirstNode(q)&&a==0){l="mini-tree-node-ecicon-first"}else{if(this._isViewLastNode(q)){l="mini-tree-node-ecicon-last"}}if(this._isViewFirstNode(q)&&this._isViewLastNode(q)){l="mini-tree-node-ecicon-last";if(h==this.root){l="mini-tree-node-ecicon-firstLast"}}if(!u){b[b.length]='<a class="'+this._eciconCls+" "+l+'" style="'+(this.showExpandButtons?"":"display:none")+'" href="javascript:void(0);" onclick="return false;" hidefocus></a>'}else{b[b.length]='<span class="'+this._eciconCls+" "+l+'" style="'+(this.showExpandButtons?"":"display:none")+'"></span>'}b[b.length]='<span class="mini-tree-nodeshow">';if(t.showTreeIcon){if(t.img){var v=this.imgPath+t.img;b[b.length]='<span class="mini-tree-icon" style="background-image:url('+v+');"></span>'}else{b[b.length]='<span class="'+t.iconCls+' mini-tree-icon"></span>'}}if(t.showRadioButton&&!t.showCheckBox){b[b.length]='<span class="mini-tree-radio" ></span>'}if(t.showCheckBox){var o=this._createCheckNodeId(q);var g=this.isCheckedNode(q);var j=t.enabled===false?"disabled":"";if(t.enabled!==false){j=t.checkable===false?"disabled":""}b[b.length]='<input type="checkbox" id="'+o+'" class="'+this._checkBoxCls+'" hidefocus '+(g?"checked":"")+" "+(j)+' onclick="return false;"/>'}b[b.length]='<span class="mini-tree-nodetext">';if(this._editingNode==q){var p=this._id+"$edit$"+q._id;var n=t.value;b[b.length]='<input id="'+p+'" type="text" class="mini-tree-editinput" value="'+n+'"/>'}else{b[b.length]=t.cellHtml}b[b.length]="</span>";b[b.length]="</span>";b[b.length]="</div>";if(f){return b.join("")}},_createTreeColumn:function(f){var d=f.record,c=f.column;f.headerCls+=" mini-tree-treecolumn";f.cellCls+=" mini-tree-treecell";f.cellStyle+=";padding:0;";var a=this.isLeaf(d);f.cellHtml=this._createNodeTitle(d,null,f);if(d.checked!=true&&!a){var b=this.getCheckState(d);if(b=="indeterminate"){this._renderCheckState(d)}}},_createCheckNodeId:function(a){return this._id+"$checkbox$"+a._id},_renderCheckState:function(b){if(!this._renderCheckStateNodes){this._renderCheckStateNodes=[]}this._renderCheckStateNodes.push(b);if(this._renderCheckStateTimer){return}var a=this;this._renderCheckStateTimer=setTimeout(function(){a._renderCheckStateTimer=null;var d=a._renderCheckStateNodes;a._renderCheckStateNodes=null;for(var e=0,c=d.length;e<c;e++){a._doCheckNodeEl(d[e])}},1)},_createNodeHTML:function(c,e,m,j,d){var i=!j;if(!j){j=[]}var a=this._dataSource;var k=a.getDataView().indexOf(c);this._createRowHTML(c,k,e,m,j);if(d!==false){var h=a.getChildNodes(c);var g=this.isVisibleNode(c);if(h&&h.length>0){var f=this.isExpandedNode(c);if(f==true){var b=(f&&g)?"":"display:none";var l=this._createNodesId(c,m);j[j.length]='<tr class="mini-tree-nodes-tr" style="';if(mini.isIE){j[j.length]=b}j[j.length]='" ><td class="mini-tree-nodes-td" colspan="';j[j.length]=e.length;j[j.length]='" >';j[j.length]='<div class="mini-tree-nodes" id="';j[j.length]=l;j[j.length]='" style="';j[j.length]=b;j[j.length]='">';this._createNodesHTML(h,e,m,j);j[j.length]="</div>";j[j.length]="</td></tr>"}}}if(i){return j.join("")}},_createNodesHTML:function(c,f,e,h){if(!c){return""}var a=!h;if(!h){h=[]}h.push('<table class="mini-grid-table" cellspacing="0" cellpadding="0" border="0">');h.push(this._createTopRowHTML(f));if(f.length>0){for(var d=0,b=c.length;d<b;d++){var g=c[d];this._createNodeHTML(g,f,e,h)}}h.push("</table>");if(a){return h.join("")}},_createRowsHTML:function(e,d){if(this.isVirtualScroll()){return mini.TreeGrid.superclass._createRowsHTML.apply(this,arguments)}var g=this._dataSource,f=this;var h=[];var c=[];var b=g.getRootNode();if(this._useEmptyView!==true){c=g.getChildNodes(b)}var a=d==2?this._rowsViewEl.firstChild:this._rowsLockEl.firstChild;a.id=this._createNodesId(b,d);this._createNodesHTML(c,e,d,h);return h.join("")},_createNodesId:function(b,a){var c=this._id+"$nodes"+a+"$"+b._id;return c},_getNodeEl:function(b,a){return this._getRowEl(b,a)},_getNodesEl:function(b,a){b=this.getNode(b);var c=this._createNodesId(b,a);return document.getElementById(c)},_getNodesTr:function(c,a){var b=this._getNodesEl(c,a);if(b){return b.parentNode.parentNode}},setTreeColumn:function(a){this._treeColumn=a;this.deferUpdate()},getTreeColumn:function(){return this._treeColumn},setShowTreeIcon:function(a){this.showTreeIcon=a;this.deferUpdate()},getShowTreeIcon:function(){return this.showTreeIcon},setShowCheckBox:function(a){this.showCheckBox=a;this.deferUpdate()},getShowCheckBox:function(){return this.showCheckBox},setShowRadioButton:function(a){this.showRadioButton=a;this.deferUpdate()},getShowRadioButton:function(){return this.showRadioButton},setCheckBoxType:function(a){this._checkBoxType=a;this._doUpdateCheckState()},getCheckBoxType:function(){return this._checkBoxType},setIconsField:function(a){this._iconsField=a},getIconsField:function(){return this._iconsField},_getNodeIcon:function(b){var a=b[this.iconField];if(!a){if(this.isLeaf(b)){a=this.leafIconCls}else{a=this.folderIconCls}}return a},_getCheckBoxEl:function(a){if(this.isVisibleNode(a)==false){return null}var b=this._id+"$checkbox$"+a._id;return mini.byId(b,this.el)},useAnimation:true,_updateNodeTimer:null,_doExpandCollapseNode:function(f){var e=this;if(e._updateNodeTimer){clearTimeout(e._updateNodeTimer);e._updateNodeTimer=null}var d=new Date();if(this.isVirtualScroll()==true){e._updateNodeTimer=setTimeout(function(){e._updateNodeTimer=null;e.doUpdateRows();e.deferLayout(50)},5);return}function c(){this._doUpdateTreeNodeEl(f);this.deferLayout(20)}if(false||mini.isIE6||!this.useAnimation){c.call(this)}else{var a=this.isExpandedNode(f);function g(o,k,n){var i=this._getNodesEl(o,k);if(i){var l=mini.getHeight(i);i.style.overflow="hidden";i.style.height="0px";var j={height:l+"px"};var m=this;m._inAniming=true;var p=jQuery(i);p.animate(j,250,function(){i.style.height="auto";m._inAniming=false;m.doLayout();mini.repaint(i)})}else{}}function b(o,k,n){var i=this._getNodesEl(o,k);if(i){var l=mini.getHeight(i);var j={height:0+"px"};var m=this;m._inAniming=true;var p=jQuery(i);p.animate(j,180,function(){i.style.height="auto";m._inAniming=false;if(n){n.call(m)}m.doLayout();mini.repaint(i)})}else{if(n){n.call(this)}}}var e=this;if(a){c.call(this);g.call(this,f,2);g.call(this,f,1)}else{b.call(this,f,2,c);b.call(this,f,1)}}},__OnTreeCollapse:function(a){this._doExpandCollapseNode(a.node)},__OnTreeExpand:function(a){this._doExpandCollapseNode(a.node)},_doCheckNodeEl:function(d){var b=this._getCheckBoxEl(d);if(b){var a=this.getCheckModel();b.checked=d.checked;b.indeterminate=false;if(a=="cascade"){var c=this.getCheckState(d);if(c=="indeterminate"){b.indeterminate=true}else{b.indeterminate=false}}}},__OnCheckChanged:function(f){for(var b=0,a=f._nodes.length;b<a;b++){var d=f._nodes[b];this._doCheckNodeEl(d)}if(this._checkChangedTimer){clearTimeout(this._checkChangedTimer);this._checkChangedTimer=null}var c=this;this._checkChangedTimer=setTimeout(function(){c._checkChangedTimer=null;c.fire("checkchanged")},1)},_tryToggleCheckNode:function(c){var a=this.getCheckable(c);if(a==false){return}var b=this.isCheckedNode(c);var d={node:c,cancel:false,checked:b,isLeaf:this.isLeaf(c)};this.fire("beforenodecheck",d);if(d.cancel){return}this._dataSource.doCheckNodes(c,!b,true);this.fire("nodecheck",d)},_tryToggleNode:function(a){var c=this.isExpandedNode(a);var b={node:a,cancel:false};if(c){this.fire("beforecollapse",b);if(b.cancel==true){return}this.collapseNode(a);b.type="collapse";this.fire("collapse",b)}else{this.fire("beforeexpand",b);if(b.cancel==true){return}this.expandNode(a);b.type="expand";this.fire("expand",b)}},_OnCellMouseDown:function(a){if(mini.findParent(a.htmlEvent.target,this._eciconCls)){}else{if(mini.findParent(a.htmlEvent.target,"mini-tree-checkbox")){}else{this.fire("cellmousedown",a)}}},_OnCellClick:function(a){if(mini.findParent(a.htmlEvent.target,this._eciconCls)){return}if(mini.findParent(a.htmlEvent.target,"mini-tree-checkbox")){this._tryToggleCheckNode(a.record)}else{this.fire("cellclick",a)}},__OnNodeDblClick:function(a){},__OnNodeClick:function(a){},setIconField:function(a){this.iconField=a},getIconField:function(){return this.iconField},setAllowSelect:function(a){this.setAllowRowSelect(a)},getAllowSelect:function(){return this.getAllowRowSelect()},setShowExpandButtons:function(a){if(this.showExpandButtons!=a){this.showExpandButtons=a;this.doUpdate()}},getShowExpandButtons:function(){return this.showExpandButtons},setShowTreeLines:function(a){this.showTreeLines=a;if(a==true){mini.addClass(this.el,"mini-tree-treeLine")}else{mini.removeClass(this.el,"mini-tree-treeLine")}},getShowTreeLines:function(){return this.showTreeLines},setShowArrow:function(a){this.showArrow=a;if(a==true){mini.addClass(this.el,"mini-tree-showArrows")}else{mini.removeClass(this.el,"mini-tree-showArrows")}},getShowArrow:function(){return this.showArrow},setLeafIcon:function(a){this.leafIcon=a},getLeafIcon:function(){return this.leafIcon},setFolderIcon:function(a){this.folderIcon=a},getFolderIcon:function(){return this.folderIcon},getExpandOnDblClick:function(){return this.expandOnDblClick},setExpandOnNodeClick:function(a){this.expandOnNodeClick=a;if(a){mini.addClass(this.el,"mini-tree-nodeclick")}else{mini.removeClass(this.el,"mini-tree-nodeclick")}},getExpandOnNodeClick:function(){return this.expandOnNodeClick},setLoadOnExpand:function(a){this.loadOnExpand=a},getLoadOnExpand:function(){return this.loadOnExpand},hideNode:function(c){c=this.getNode(c);if(!c){return}c.visible=false;this._doUpdateTreeNodeEl(c);var b=this._getNodeEl(c,1);var a=this._getNodeEl(c,2);if(b){b.style.display="none"}if(a){a.style.display="none"}},showNode:function(a){a=this.getNode(a);if(!a){return}a.visible=true;this._doUpdateTreeNodeEl(a)},enableNode:function(d){d=this.getNode(d);if(!d){return}d.enabled=true;var c=this._getNodeEl(d,1);var b=this._getNodeEl(d,2);if(c){mini.removeClass(c,"mini-disabled")}if(b){mini.removeClass(b,"mini-disabled")}var a=this._getCheckBoxEl(d);if(a){a.disabled=false}},disableNode:function(d){d=this.getNode(d);if(!d){return}d.enabled=false;var c=this._getNodeEl(d,1);var b=this._getNodeEl(d,2);if(c){mini.addClass(c,"mini-disabled")}if(b){mini.addClass(b,"mini-disabled")}var a=this._getCheckBoxEl(d);if(a){a.disabled=true}},imgPath:"",setImgPath:function(a){this.imgPath=a},getImgPath:function(){return this.imgPath},imgField:"img",setImgField:function(a){this.imgField=a},getImgField:function(){return this.imgField},getAttrs:function(c){var i=mini.TreeGrid.superclass.getAttrs.call(this,c);mini._ParseString(c,i,["value","url","idField","textField","iconField","nodesField","parentField","valueField","checkedField","leafIcon","folderIcon","leafField","ondrawnode","onbeforenodeselect","onnodeselect","onnodemousedown","onnodeclick","onnodedblclick","onbeforenodecheck","onnodecheck","onbeforeexpand","onexpand","onbeforecollapse","oncollapse","dragGroupName","dropGroupName","onendedit","expandOnLoad","ondragstart","onbeforedrop","ondrop","ongivefeedback","treeColumn","onaddnode","onremovenode","onmovenode","imgPath","imgField"]);mini._ParseBool(c,i,["allowSelect","showCheckBox","showRadioButton","showExpandButtons","showTreeIcon","showTreeLines","checkRecursive","enableHotTrack","showFolderCheckBox","resultAsTree","allowDrag","allowDrop","showArrow","expandOnDblClick","removeOnCollapse","autoCheckParent","loadOnExpand","expandOnNodeClick"]);if(i.expandOnLoad){var a=parseInt(i.expandOnLoad);if(mini.isNumber(a)){i.expandOnLoad=a}else{i.expandOnLoad=i.expandOnLoad=="true"?true:false}}var b=i.idField||this.getIdField();var e=i.textField||this.getTextField();var d=i.iconField||this.getIconField();var h=i.nodesField||this.getNodesField();function g(j){var r=[];for(var s=0,q=j.length;s<q;s++){var n=j[s];var t=mini.getChildNodes(n);var u=t[0];var z=t[1];if(!u||!z){u=n}var x=jQuery(u);var m={};var k=m[b]=u.getAttribute("value");m[d]=x.attr("iconCls");m[e]=u.innerHTML;r.add(m);var w=x.attr("expanded");if(w){m.expanded=w=="false"?false:true}var p=x.attr("allowSelect");if(p){m.allowSelect=p=="false"?false:true}if(!z){continue}var v=mini.getChildNodes(z);var y=g(v);if(y.length>0){m[h]=y}}return r}var f=g(mini.getChildNodes(c));if(f.length>0){i.data=f}if(!i.idField&&i.valueField){i.idField=i.valueField}return i}});mini.regClass(mini.TreeGrid,"TreeGrid");mini.Tree=function(){mini.Tree.superclass.constructor.call(this);var a=[{name:"node",header:"",field:this.getTextField(),width:"auto",allowDrag:true,editor:{type:"textbox"}}];this._columnModel.setColumns(a);this._column=this._columnModel.getColumn("node");mini.removeClass(this.el,"mini-treegrid");mini.addClass(this.el,"mini-tree-nowrap");this.setBorderStyle("border:0")};mini.extend(mini.Tree,mini.TreeGrid,{setTextField:function(a){this._dataSource.setTextField(a);this._columnModel.updateColumn("node",{field:a});this.textField=a},uiCls:"mini-tree",_rowHoverCls:"mini-tree-node-hover",_rowSelectedCls:"mini-tree-selectedNode",_getRecordByEvent:function(a,c){var b=mini.Tree.superclass._getRecordByEvent.call(this,a);if(c===false){return b}if(b&&mini.findParent(a.target,"mini-tree-nodeshow")){return b}return null},_treeColumn:"node",defaultRowHeight:22,_getRowHeight:function(a){var b=this.defaultRowHeight;if(a._height){b=parseInt(a._height);if(isNaN(parseInt(a._height))){b=rowHeight}}return b},showHeader:false,showTopbar:false,showFooter:false,showColumns:false,showHGridLines:false,showVGridLines:false,showTreeLines:true,setTreeColumn:null,setColumns:null,getColumns:null,frozen:null,unFrozen:null,showModified:false,setNodeText:function(a,c){a=this.getNode(a);if(!a){return}var b={};b[this.getTextField()]=c;this.updateNode(a,b)},setNodeIconCls:function(b,a){b=this.getNode(b);if(!b){return}var c={};c[this.iconField]=a;this.updateNode(b,c)},_OnCellMouseDown:function(a){if(this._editInput){this._editInput.blur()}this.fire("cellmousedown",a)},isEditingNode:function(a){return this._editingNode==a},beginEdit:function(c){c=this.getNode(c);if(!c){return}var a=this.getColumn(0);var d=mini._getMap(a.field,c);var f={record:c,node:c,column:a,field:a.field,value:d,cancel:false};this.fire("cellbeginedit",f);if(f.cancel==true){return}this._editingNode=c;this._doUpdateNodeTitle(c);var b=this;function g(){var e=b._id+"$edit$"+c._id;b._editInput=document.getElementById(e);b._editInput.focus();mini.selectRange(b._editInput,0,1000);mini.on(b._editInput,"keydown",b.__OnEditInputKeyDown,b);mini.on(b._editInput,"blur",b.__OnEditInputBlur,b)}setTimeout(function(){g()},100);g()},cancelEdit:function(b){var a=this._editingNode;this._editingNode=null;if(a){if(b!==false){this._doUpdateNodeTitle(a)}mini.un(this._editInput,"keydown",this.__OnEditInputKeyDown,this);mini.un(this._editInput,"blur",this.__OnEditInputBlur,this)}this._editInput=null},__OnEditInputKeyDown:function(b){if(b.keyCode==13){var a=this._editingNode;var c=this._editInput.value;this._editingNode=null;this.setNodeText(a,c);this.cancelEdit(false);this.fire("endedit",{node:a,text:c})}else{if(b.keyCode==27){this.cancelEdit()}}},__OnEditInputBlur:function(b){var a=this._editingNode;if(a){var c=this._editInput.value;this.cancelEdit();this.setNodeText(a,c);this.fire("endedit",{node:a,text:c})}},addRowCls:function(d,a){var c=this._getRowEl(d,1);var b=this._getRowEl(d,2);if(c){mini.addClass(c.firstChild,a)}if(b){mini.addClass(b.firstChild,a)}},removeRowCls:function(d,a){var c=this._getRowEl(d,1);var b=this._getRowEl(d,2);if(c){mini.removeClass(c,a);mini.removeClass(c.firstChild,a)}if(b){mini.removeClass(b,a);mini.removeClass(b.firstChild,a)}},scrollIntoView:function(b){b=this.getNode(b);if(!b){return}if(!this.isVisibleNode(b)){this.expandPath(b)}var a=this;setTimeout(function(){var c=a._getNodeEl(b,2);mini.scrollIntoView(c,a._rowsViewEl,false)},10)}});mini.regClass(mini.Tree,"Tree");mini._Tree_Expander=function(a){this.owner=a;mini.on(a.el,"click",this.__OnClick,this);mini.on(a.el,"dblclick",this.__OnDblClick,this)};mini._Tree_Expander.prototype={_canToggle:function(){return !this.owner._dataSource._isNodeLoading()},__OnClick:function(d){var a=this.owner;var c=a._getRecordByEvent(d,false);if(!c||c.enabled===false){return}if(mini.findParent(d.target,"mini-tree-checkbox")){return}var b=a.isLeaf(c);if(mini.findParent(d.target,a._eciconCls)){if(this._canToggle()==false){return}a._tryToggleNode(c)}else{if(a.expandOnNodeClick&&!b&&!a._inAniming){if(this._canToggle()==false){return}a._tryToggleNode(c)}}},__OnDblClick:function(d){var a=this.owner;var c=a._getRecordByEvent(d,false);if(!c||c.enabled===false){return}var b=a.isLeaf(c);if(a._inAniming){return}if(mini.findParent(d.target,a._eciconCls)){return}if(a.expandOnNodeClick){return}if(a.expandOnDblClick&&!b){if(this._canToggle()==false){return}d.preventDefault();a._tryToggleNode(c)}}};mini._Tree_AsyncLoader=function(a){this.owner=a;a.on("beforeexpand",this.__OnBeforeNodeExpand,this)};mini._Tree_AsyncLoader.prototype={__OnBeforeNodeExpand:function(f){var a=this.owner;var d=f.node;var b=a.isLeaf(d);var c=d[a.getNodesField()];if(!b&&(!c||c.length==0)){if(a.loadOnExpand&&d.asyncLoad!==false){f.cancel=true;a.loadNode(d)}}}};mini.Uploadify=function(a){this.postParam={};mini.Uploadify.superclass.constructor.call(this,a);this.on("validation",this.__OnValidation,this)};mini.extend(mini.Uploadify,mini.ButtonEdit,{buttonText:"���...",_buttonWidth:56,limitTypeErrorText:"�ϴ��ļ���ʽΪ��",readOnly:true,_cellSpacing:0,limitSize:"",limitType:"",typesDescription:"�ϴ��ļ���ʽ",uploadLimit:0,queueLimit:"",flashUrl:"",uploadUrl:"",showUploadProgress:true,postParam:null,uploadOnSelect:false,_selectedFild:null,uiCls:"mini-uploadify",_create:function(){mini.Uploadify.superclass._create.call(this);mini.addClass(this.el,"mini-htmlfile");this._progressbarEl=mini.append(this._borderEl,'<div id="'+this._id+'$progressbar"  class="mini-fileupload-progressbar"><div id="'+this._id+'$complete" class="mini-fileupload-complete"></div></div>');this._completeEl=this._progressbarEl.firstChild;this._fileEl=mini.append(this.el,'<input type="file" id="'+this._id+'_file" hideFocus class="mini-htmlfile-file" name="'+this.name+'" ContentEditable=false/>');mini.on(this._borderEl,"mousemove",this.__OnMouseMove,this)},_getButtonHtml:function(){var a="onmouseover=\"mini.addClass(this, '"+this._buttonHoverCls+"');\" onmouseout=\"mini.removeClass(this, '"+this._buttonHoverCls+"');\"";return'<span class="mini-buttonedit-button" '+a+">"+this.buttonText+"</span>"},destroy:function(a){if(this._innerEl){mini.clearEvent(this._innerEl);this._innerEl=null}mini.Uploadify.superclass.destroy.call(this,a)},__OnMouseMove:function(a){if(this.enabled==false){return}var c=this;if(!this.uploadify){var b=$("#"+this._id+"_file");if(b){b.uploadify({swf:c.flashUrl,uploader:c.uploadUrl,fileObjName:this.name,fileSizeLimit:c.limitSize,fileTypeDesc:c.typesDescription,uploadLimit:parseInt(c.uploadLimit),queueSizeLimit:c.queueLimit,auto:c.uploadOnSelect,hideButton:true,multi:false,onSelect:mini.createDelegate(this.__on_file_queued,this),onUploadProgress:mini.createDelegate(this.__on_upload_progress,this),onUploadSuccess:mini.createDelegate(this.__on_upload_success,this),onError:mini.createDelegate(this.__on_upload_error,this),onUploadComplete:mini.createDelegate(this.__on_upload_complete,this)})}}this.uploadify=b},addPostParam:function(a){mini.copyTo(this.postParam,a)},setUploadOnSelect:function(a){this.uploadOnSelect=a;this.uploadify.uploadify("settings","auto",this.uploadOnSelect)},getUploadOnSelect:function(){return this.uploadOnSelect},setPostParam:function(a){this.addPostParam(a)},getPostParam:function(){return this.postParam},setLimitType:function(a){this.limitType=a;if(this.uploadify){this.uploadify.uploadify("settings","fileTypeExts",this.limitType)}},getTypesDescription:function(){return this.typesDescription},setButtonText:function(a){this.buttonText=a;this._buttonEl.innerHTML=a},getButtonText:function(){return this.buttonText},setUploadLimit:function(a){this.uploadLimit=a},setQueueLimit:function(a){this.queueLimit=a},setFlashUrl:function(a){this.flashUrl=a;if(this.uploadify){this.uploadify.uploadify("settings","swf",a)}},setUploadUrl:function(a){if(this.uploadify){this.uploadify.uploadify("settings","uploader",a)}this.uploadUrl=a},setName:function(a){this.name=a},startUpload:function(b){var a={cancel:false};this.fire("beforeupload",a);if(a.cancel==true){return}if(this.uploadify){this.uploadify.uploadify("settings","formData",this.postParam);this.uploadify.uploadify("upload",this._selectedFild.id)}},setShowUploadProgress:function(a){this.showUploadProgress=a;this._progressbarEl.style.display=a?"block":"none"},getShowUploadProgress:function(){return this.showUploadProgress},__on_upload_progress:function(d,b,h,c,g){if(this.showUploadProgress){var a=mini.getWidth(this._progressbarEl);var f=a*b/h;mini.setWidth(this._completeEl,f)}this._progressbarEl.style.display=this.showUploadProgress?"block":"none";var i={file:d,complete:b,total:h};this.fire("uploadprogress",i)},__on_file_queued:function(a){this._selectedFild=a;var b={file:a};if(this.uploadOnSelect){this.startUpload()}this.setText(a.name);this.fire("fileselect",b)},__on_upload_success:function(c,b,a){var d={file:c,serverData:b};this.fire("uploadsuccess",d);this._progressbarEl.style.display="none";this.uploadify.uploadify("cancel","*")},__on_upload_error:function(a,c,b){this._progressbarEl.style.display="none";var d={file:a,code:c,message:b};this.fire("uploaderror",d)},__on_upload_complete:function(a){this._progressbarEl.style.display="none";this.fire("uploadcomplete",a)},getAttrs:function(b){var a=mini.Uploadify.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["limitType","limitSize","flashUrl","uploadUrl","uploadLimit","buttonText","showUploadProgress","onuploadsuccess","onuploaderror","onuploadcomplete","onfileselect","onuploadprogress"]);mini._ParseBool(b,a,["uploadOnSelect"]);return a}});mini.regClass(mini.Uploadify,"uploadify");mini.ToolTip=function(){mini.ToolTip.superclass.constructor.call(this)};mini.extend(mini.ToolTip,mini.Control,{selector:"[title]",placement:"bottom",trigger:"hover focus",uiCls:"mini-tooltip",_create:function(){this.el=jQuery('<div class="mini-tooltip"><div class="mini-tooltip-arrow"></div><div class="mini-tooltip-inner"></div></div>')[0];this.$element=jQuery(this.el);this.$element.appendTo(document.body)},_initEvents:function(){},_bindTooltip:function(){var h=jQuery(document),a=this.selector,f="tooltip";var e=this.trigger.split(" ");for(var d=e.length;d--;){var c=e[d];if(c=="click"){h.on("click."+f,a,$.proxy(this._toggle,this))}else{if(c!="manual"){var g=c=="hover"?"mouseenter":"focus";var b=c=="hover"?"mouseleave":"blur";h.on(g+"."+f,a,$.proxy(this._enter,this));h.on(b+"."+f,a,$.proxy(this._leave,this))}}}},setSelector:function(a){this.selector=a;this._bindTooltip()},getSelector:function(){return this.selector},setPlacement:function(a){this.placement=a},getPlacement:function(){return this.placement},_enter:function(a){this.open(a.currentTarget)},_leave:function(a){this.close()},_toggle:function(a){if(this._getTip().css("display")=="none"){this.enter(a)}else{this.leave(a)}},open:function(c){var c=$(c)[0]||this.target,d=$(c),a=this.getContent(c);var b={element:c,content:a,cancel:!a};this.fire("beforeopen",b);if(b.cancel){return}this.$element.show();this._target=c;this.setContent(b.content);this.fire("open",{element:c})},close:function(){this._target=null;this.$element.hide()},showLoading:function(){this.setContent('<div class="mini-tooltip-loading"></div>')},setContent:function(a){this.$element.children(".mini-tooltip-inner").html(a||"&nbsp;");this.applyPlacement()},getContent:function(a){var b=a.title;if(b){$(a).attr("data-tooltip",b).attr("title","")}if(!b){b=$(a).attr("data-tooltip")}return b},applyPlacement:function(){if(!this._target){return}if(this.$element.css("display")=="none"){return}var e=this._target,a=jQuery(e),b=a.attr("data-placement")||this.placement,k=this.$element;k.show().css({left:"-2000px",top:"-2000px"});function i(m){k.removeClass("mini-tooltip-left mini-tooltip-top mini-tooltip-right mini-tooltip-bottom mini-tooltip-bottomleft mini-tooltip-topleft mini-tooltip-bottomright mini-tooltip-topright").addClass("mini-tooltip-"+m)}function d(m){k.offset(m)}var c=mini.getBox(e);var g=mini.getViewportBox();var j=c.top-g.top,l=g.bottom-c.bottom;i(b);var f=mini.getBox(k[0]);var h=mini.getCalculatedOffset(b,c,f.width,f.height);if(b=="left"){}else{if(b=="right"){}else{if(b=="top"){}else{if(b=="bottom"){}else{if(b=="bottomleft"&&j>l){if(h.top+f.height>g.bottom){b="topleft"}}else{if(b=="topleft"){}}}}}}i(b);h=mini.getCalculatedOffset(b,c,f.width,f.height);d(h)},getAttrs:function(b){var a=mini.ToolTip.superclass.getAttrs.call(this,b);mini._ParseString(b,a,["selector","placement","onbeforeopen","onopen","onclose"]);return a}});mini.regClass(mini.ToolTip,"tooltip");mini.getCalculatedOffset=function(a,d,b,c){if(a=="bottom"){return{top:d.top+d.height,left:d.left+d.width/2-b/2}}if(a=="top"){return{top:d.top-c,left:d.left+d.width/2-b/2}}if(a=="left"){return{top:d.top+d.height/2-c/2,left:d.left-b}}if(a=="bottomleft"){return{top:d.top+d.height,left:d.left}}if(a=="bottomright"){return{top:d.top+d.height,left:d.left+d.width-b}}if(a=="topleft"){return{top:d.top-c,left:d.left}}if(a=="topright"){return{top:d.top-c,left:d.left+d.width-b}}return{top:d.top+d.height/2-c/2,left:d.left+d.width}};mini.Richtext=function(){mini.Richtext.superclass.constructor.call(this)};mini.extend(mini.Richtext,mini.Control,{width:"100%",height:300,uiCls:"mini-richtext",_create:function(){this.el=document.createElement("div");this.el.innerHTML='<textarea style="display:none"></textarea>';this._fromEditor=this.el.firstChild;this._editor=new mini.TextArea();this._editor.setVisible(false);this._editor.render(this.el);var a=this;mini.loadRes("ckeditor",function(){a._initEditor()})},render:function(a){mini.Richtext.superclass.constructor.call(this,a)},_initEditor:function(){var a=this;setTimeout(function(){a._doInitEditor()},1)},_doInitEditor:function(){if(this.isRender()==false){return}if(this.editor){return}var a=this;this._editor.set({name:a.name,id:a.id+"_editor"});this._fromEditor.id=this.id+"_fromEditor";this.editor=CKEDITOR.replace(a._fromEditor.id,{width:a.width.replace("px",""),height:a.height.replace("px","")-100,readOnly:a.readOnly});this.editor.isReady=false;this.editor.on("instanceReady",function(b){b.editor.resize(b.editor.config.width,a.height.replace("px",""));b.editor.isReady=true;a.setValue(a.value);a.fire("initeditor")});this.editor.on("resize",function(c){var b=c.editor.container.$.clientHeight;mini.Richtext.superclass.setHeight.call(a,b)})},setValue:function(a){if(this.editor&&this.editor.isReady){this.editor.setData(a);this._editor.setValue(a)}else{this.value=a}},getValue:function(){if(this.editor){return this.editor.getData()}return this.value},setSubmitData:function(){if(this._editor){this._editor.setValue(this.getValue())}},getSubmitData:function(){if(this._editor){return this._editor.getValue()}return this.getValue()},setWidth:function(a){mini.Richtext.superclass.setWidth.call(this,a);if(this.editor){this.editor.resize(a,this.getHeight())}},setHeight:function(a){mini.Richtext.superclass.setHeight.call(this,a);if(this.editor){this.editor.resize(this.getWidth(),a)}},setReadOnly:function(a){if(this.editor){this.editor.setReadOnly(a);this.readOnly=a}else{this.readOnly=a}},getReadOnly:function(){if(this.editor){return this.editor.readOnly}return this.readOnly}});mini.regClass(mini.Richtext,"richtext");(function(){mini.DictCheckboxGroup=function(){mini.DictCheckboxGroup.superclass.constructor.call(this)};mini.DictRadioGroup=function(){mini.DictRadioGroup.superclass.constructor.call(this)};mini.DictComboBox=function(){mini.DictComboBox.superclass.constructor.call(this)};var a={map:{},loadingMap:{},removeEmpty:function(e){for(var d=0,c=e.length;d<c;d++){if(e[d]&&e[d].__NullItem){e.splice(d,1)}}},getDictName:function(f,d){var e=[];for(var g=0,c=f.length;g<c;g++){var h=f[g];if(nui.fn.contains(d,h.dictID)){e.push(h.dictName)}}return e.join(",")},ajaxLoad:function(d){var c={dictTypeId:d.dictTypeId};mini.ajax({url:"com.primeton.components.nui.DictLoader.getDictData.biz.ext",data:c,type:"POST",async:false,success:function(f){var e=f.dictList;a.map[dictTypeId]=e;d._setDictData(e)}})},getDictText:function(c,e){var d=a.map[c];if(d){return a.getDictName(d,e)}var f="";mini.ajax({url:"com.primeton.components.nui.DictLoader.getDictData.biz.ext",data:{dictTypeId:c},type:"POST",async:false,success:function(h){var g=h.dictList;a.map[c]=g;f=a.getDictName(g,e)}});return f},loadData:function(){var c=this.dictTypeId;if(!c){return}var d=a.map[c];if(!d){mini.ajax({url:"com.primeton.components.nui.DictLoader.getDictData.biz.ext",data:{dictTypeId:c},type:"POST",async:false,success:function(f){var e=f.dictList;a.map[c]=e}});d=a.map[c]}a.removeEmpty(d);this._setDictData(d)}};mini.getDictText=a.getDictText;var b={dictTypeId:"",textField:"dictName",valueField:"dictID",_initData:function(){a.loadData.call(this)},_setDictData:function(c){this.loadData(c);if(this.value){this.setValue(this.value)}}};b.uiCls="mini-dictcheckboxgroup";jQuery.extend(b,{uiCls:"mini-dictcheckboxgroup",set:function(c){mini.DictCheckboxGroup.superclass.set.call(this,c);this._initData()},getAttrs:function(d){var c=mini.DictCheckboxGroup.superclass.getAttrs.call(this,d);var e=jQuery(d);mini._ParseString(d,c,["dictTypeId"]);return c}});mini.extend(mini.DictCheckboxGroup,mini.CheckBoxList,b);jQuery.extend(b,{uiCls:"mini-dictradiogroup",set:function(c){mini.DictRadioGroup.superclass.set.call(this,c);this._initData()},getAttrs:function(d){var c=mini.DictRadioGroup.superclass.getAttrs.call(this,d);var e=jQuery(d);mini._ParseString(d,c,["dictTypeId"]);return c}});mini.extend(mini.DictRadioGroup,mini.RadioButtonList,b);jQuery.extend(b,{uiCls:"mini-dictcombobox",_afterApply:function(c){mini.DictComboBox.superclass._afterApply.call(this,c);this._initData()},getAttrs:function(d){var c=mini.DictComboBox.superclass.getAttrs.call(this,d);var e=jQuery(d);mini._ParseString(d,c,["dictTypeId"]);return c},_setDictData:function(d){this.setValueField(this.valueField);this.setTextField(this.textField);this.setData(d);if(this.value){var c=this.value;this.value="";this.setValue(c)}}});mini.extend(mini.DictComboBox,mini.ComboBox,b);mini.regClass(mini.DictCheckboxGroup,"dictcheckboxgroup");mini.regClass(mini.DictRadioGroup,"dictradiogroup");mini.regClass(mini.DictComboBox,"dictcombobox")})(mini);(function(a){a.ajax=function(c){var b=c.url;if(b&&b.length>4&&b.lastIndexOf(".ext")==b.length-4){if(!c.dataType){c.dataType="json"}if(!c.contentType){c.contentType="application/json; charset=UTF-8"}if(c.data&&mini.isNull(c.data.pageIndex)==false){var d=c.data.page={};d.begin=c.data.pageIndex*c.data.pageSize;d.length=c.data.pageSize}if(c.dataType=="json"&&typeof(c.data)=="object"){c.data=mini.encode(c.data);if(c.data=="{}"){delete c.data}c.type="POST"}}return window.jQuery.ajax(c)}})(mini);(function(c){c.getClassByUICls=function(e){e=e.toLowerCase();var d=this.uiClasses[e];if(!d){e=e.replace("nui-","mini-");d=this.uiClasses[e]}return d};c.DatePicker.prototype.valueFormat="yyyy-MM-dd HH:mm:ss";c.ajax=function(e){var d=e.url;if(d&&d.length>4&&d.lastIndexOf(".ext")==d.length-4){if(!e.dataType){e.dataType="json"}if(!e.contentType){e.contentType="application/json; charset=UTF-8"}if(e.data&&mini.isNull(e.data.pageIndex)==false){var f=e.data.page={};f.begin=e.data.pageIndex*e.data.pageSize;f.length=e.data.pageSize}if(e.dataType=="json"&&typeof(e.data)=="object"){e.data=mini.encode(e.data);if(e.data=="{}"){delete e.data}e.type="POST"}}return window.jQuery.ajax(e)};c.fn={contains:function(d,e){return(","+d+",").indexOf(","+e+",")!=-1},endWidth:function(d,e){if(d.length<e.length){return false}return d.substr(d.length-e.length)===e},startWidth:function(d,e){return d.substr(0,e.length)===e}};var b=jQuery;var a={map:{},loaded:{},timeSeed:true,path:"",isAbsolutePath:function(d){return c.fn.startWidth(d,"http")||c.fn.startWidth(d,"/")},getJSPath:function(h){var e=document.scripts;for(var g=0,d=e.length;g<d;g++){var j=e[g].src;j=j.split("?")[0];var f=c.fn.endWidth(j,h);if(f){return j.substr(0,j.lastIndexOf("/"))+"/"}}return""},hasLoaded:function(d){return this.loaded[d]},getLoadInfo:function(d){return this.loaded[d]},loadCSS:function(e){if(!b.isArray(e)){e=[e]}for(var f=0,d=e.length;f<d;f++){this.loadCSS(e[f])}},loadJS:function(k,f,e){if(!b.isArray(k)){k=[k]}var d=k.length;var j=0;if(e){var h=function(m,l){a._loadJS(k[m],function(){m++;if(m<d){h(m,l)}else{l()}})};h(0,f)}else{for(var g=0;g<d;g++){a._loadJS(k[g],function(){j++;if(j==d){f()}})}}},_loadCSS:function(e,f){if(this.getLoadInfo(e)){return}f=f||document;var d=f.createElement("link");d.type="text/css";if(NUI.timeSeed){d.href=e+"?"+(new Date())}else{d.href=e}d.rel="stylesheet";f.getElementsByTagName("head")[0].appendChild(d);this.loaded[e]=true;return d},_loadJS:function(h,d,g){d=d||function(){};if(!a.isAbsolutePath(h)){h=a.path+h}var e=this.getLoadInfo(h);if(e){switch(e.status){case"loading":e.handler.push(d);break;case"loaded":d();break}return}else{this.loaded[h]={status:"loading",handler:[d]}}g=g||document;var f=g.createElement("script");f.type="text/javascript";if(this.timeSeed){f.src=h+"?"+(new Date())}else{f.src=h}f.onreadystatechange=f.onload=function(){if(!this.readyState||(this.readyState=="complete"||this.readyState=="loaded")){a.loaded[h]=a.loaded[h]||{};a.loaded[h].status="loaded";var k=a.loaded[h].handler;for(var l=0,j=k.length;l<j;l++){var m=k[l];if(m&&typeof(m)=="function"){m()}}}};g.getElementsByTagName("head")[0].appendChild(f);return f}};a.path=a.getJSPath("nui.js");c.res={hasLoaded:function(d){return a.loaded[d]},add:function(d,e){e=e||{};e.js=e.js||[];e.css=e.css||[];e.order=e.order||false;a.map[d]=e},remove:function(d){delete a.map[d]},get:function(d){return a.map[d]},load:function(f,d){var e=this.get(f);if(!e){d();return}a.loadCSS(e.css);a.loadJS(e.js,d,e.order)}};c.loadRes=function(e,d){c.res.load(e,d)};c.res.add("ckeditor",{js:["resource/ckeditor/ckeditor.js"]});c.res.add("swfupload",{});window.nui=c})(mini);mini.MenuBarX=function(){mini.MenuBarX.superclass.constructor.call(this)};mini.extend(mini.MenuBarX,mini.MenuBar,{uiCls:"mini-menubarx",_itemType:"menuitemx"});mini.regClass(mini.MenuBarX,"menubarx");mini.MenuItemX=function(){mini.MenuItemX.superclass.constructor.call(this)};mini.extend(mini.MenuItemX,mini.MenuItem,{setMenu:function(b){if(mini.isArray(b)){b={type:"menu",items:b}}if(this.menu!==b){var a=mini._getTopMINI();this.menu=a.getAndCreate(b);this.menu.hide();this.menu.ownerItem=this;this.doUpdate();this.menu.on("itemschanged",this.__OnItemsChanged,this);this.menu.window=a.window}},showMenu:function(){if(this.menu&&this.menu.isDisplay()==false){this.menu.setHideAction("outerclick");var a={xAlign:"outright",yAlign:"top",outXAlign:"outleft",popupCls:"mini-menu-popup"};if(this.ownerMenu&&this.ownerMenu.vertical==false){a.xAlign="left";a.yAlign="below";a.outXAlign=null}a.window=window;a.topWindow=this.menu.window;this.menu.showAtEl(this.el,a)}}});mini.regClass(mini.MenuItemX,"menuitemx");mini.Menu.prototype._getWindowOffset=function(b){var c=b.window,a=b.topWindow;if(c&&a&&c!=a){return mini._getWindowOffset(c,a)}else{return[0,0]}};mini._getTopMINI=function(){var b=[];function a(d){try{d.___try=1;if(!d.mini){return}b.push(d)}catch(c){}if(d.parent&&d.parent!=d){a(d.parent)}}a(window);return b[b.length-1].mini};mini._getWindowOffset=function(h,d){var g=[];function b(u){var t=u.parent;var r=t.document.getElementsByTagName("iframe");for(var q=0,o=r.length;q<o;q++){var s=r[q];if(s.contentWindow==u){g.add(s);break}}if(t!=d){b(t)}}b(h);g.reverse();var n=0,m=0;var j=d.mini;for(var e=0,c=g.length;e<c;e++){var a=g[e];var f=j.getBox(a);n+=f.x;m+=f.y;var k=j.getBorders(a);n+=k.left;m+=k.top;j=a.contentWindow.mini}return[n,m]};var __TopMINI=mini._getTopMINI();mini.DatePickerX=function(){mini.DatePickerX.superclass.constructor.call(this)};mini.extend(mini.DatePickerX,mini.DatePicker,{uiCls:"mini-datepickerx",destroy:function(b){if(this._calendar){this._calendar.destroy();this._calendar=null}var a=__TopMINI;a.DatePicker._Calendar=null;mini.DatePickerX.superclass.destroy.call(this,b)},_createPopup:function(){var a=__TopMINI;this.popup=new a.Popup();this.popup.setShowAction("none");this.popup.setHideAction("outerclick");this.popup.setPopupEl(this.el);this.popup.on("BeforeClose",this.__OnPopupBeforeClose,this);a.on(this.popup.el,"keydown",this.__OnPopupKeyDown,this);this._calendar=this._getCalendar()},_getCalendar:function(){var a=__TopMINI;if(!a.DatePicker._Calendar){var b=a.DatePicker._Calendar=new a.Calendar();b.setStyle("border:0;")}return a.DatePicker._Calendar},_doShowAtEl:function(c,b){var a=this.getPopup();a._getWindowOffset=mini.Menu.prototype._getWindowOffset;b.window=window;b.topWindow=__TopMINI.window;a.showAtEl(c,b)}});mini.regClass(mini.DatePickerX,"DatePickerX");nui.Tabs.prototype._doUpdateBottom=function(){var p=this.tabPosition=="bottom";var v="";if(p){v+='<div class="mini-tabs-scrollCt">';v+='<div class="mini-tabs-nav"><a class="mini-tabs-leftButton" href="javascript:void(0)" hideFocus onclick="return false"></a><a class="mini-tabs-rightButton" href="javascript:void(0)" hideFocus onclick="return false"></a></div>';v+='<div class="mini-tabs-buttons"></div>'}v+='<div class="mini-tabs-headers">';var u=this.getTabRows();for(var h=0,f=u.length;h<f;h++){var q=u[h];var t="";v+='<table class="mini-tabs-header" cellspacing="0" cellpadding="0"><tr><td class="mini-tabs-space mini-tabs-firstSpace"><div></div></td>';for(var n=0,e=q.length;n<e;n++){var c=q[n];var b=this._createTabId(c);if(!c.visible){continue}var o=this.tabs.indexOf(c);var t=c.headerCls||"";if(c.enabled==false){t+=" mini-disabled"}v+='<td id="'+b+'" index="'+o+'"  class="mini-tab '+t+'" style="'+c.headerStyle+'">';if(c.iconCls||c.iconStyle){v+='<span class="mini-tab-icon '+c.iconCls+'" style="'+c.iconStyle+'"></span>'}v+='<span class="mini-tab-text">'+c.title+"</span>";if(c.showCloseButton){var a="";if(c.enabled){a="onmouseover=\"mini.addClass(this, 'mini-tab-close-hover')\" onmouseout=\"mini.removeClass(this, 'mini-tab-close-hover')\""}v+='<span class="mini-tab-close" '+a+"></span>"}v+="</td>";if(n!=e-1){v+='<td class="mini-tabs-space2"><div></div></td>'}}v+='<td class="mini-tabs-space mini-tabs-lastSpace" ><div></div></td></tr></table>'}if(p){v+="</div>"}v+="</div>";this._doClearElement();mini.append(this._td2El,v);var d=this._td2El;this._headerEl=d.lastChild.lastChild;if(p){this._navEl=this._headerEl.parentNode.firstChild;this._leftButtonEl=this._navEl.firstChild;this._rightButtonEl=this._navEl.childNodes[1]}switch(this.tabAlign){case"center":var r=this._headerEl.childNodes;for(var n=0,e=r.length;n<e;n++){var g=r[n];var m=g.getElementsByTagName("td");m[0].style.width="50%";m[m.length-1].style.width="50%"}break;case"right":var r=this._headerEl.childNodes;for(var n=0,e=r.length;n<e;n++){var g=r[n];var m=g.getElementsByTagName("td");m[0].style.width="100%"}break;case"fit":break;default:var r=this._headerEl.childNodes;for(var n=0,e=r.length;n<e;n++){var g=r[n];var m=g.getElementsByTagName("td");m[m.length-1].style.width="100%"}break}};nui.Tabs.prototype.doLayout=function(){if(!this.canLayout()){return}this._handleIFrameOverflow();var A=this.isAutoHeight();E=this.getHeight(true);n=this.getWidth();var o=E;var u=n;if(this.showBody){this._bodyEl.style.display=""}else{this._bodyEl.style.display="none"}if(this.plain){mini.addClass(this.el,"mini-tabs-plain")}else{mini.removeClass(this.el,"mini-tabs-plain")}if(!A&&this.showBody){var z=jQuery(this._headerEl).outerHeight();var e=jQuery(this._headerEl).outerWidth();if(this.tabPosition=="top"||this.tabPosition=="bottom"){z=jQuery(this._headerEl.parentNode).outerHeight()}if(this.tabPosition=="left"||this.tabPosition=="right"){n=n-e}else{E=E-z}if(jQuery.boxModel){var q=mini.getPaddings(this._bodyEl);var x=mini.getBorders(this._bodyEl);E=E-q.top-q.bottom-x.top-x.bottom;n=n-q.left-q.right-x.left-x.right}margin=mini.getMargins(this._bodyEl);E=E-margin.top-margin.bottom;n=n-margin.left-margin.right;if(E<0){E=0}if(n<0){n=0}this._bodyEl.style.width=n+"px";this._bodyEl.style.height=E+"px";if(this.tabPosition=="left"||this.tabPosition=="right"){var a=this._headerEl.getElementsByTagName("tr")[0];var B=a.childNodes;var p=B[0].getElementsByTagName("tr");var f=last=all=0;for(var C=0,y=p.length;C<y;C++){var a=p[C];var m=jQuery(a).outerHeight();all+=m;if(C==0){f=m}if(C==y-1){last=m}}switch(this.tabAlign){case"center":var r=parseInt((o-(all-f-last))/2);for(var C=0,y=B.length;C<y;C++){B[C].firstChild.style.height=o+"px";var j=B[C].firstChild;var p=j.getElementsByTagName("tr");var H=p[0],G=p[p.length-1];H.style.height=r+"px";G.style.height=r+"px"}break;case"right":for(var C=0,y=B.length;C<y;C++){var j=B[C].firstChild;var p=j.getElementsByTagName("tr");var a=p[0];var s=o-(all-f);if(s>=0){a.style.height=s+"px"}}break;case"fit":for(var C=0,y=B.length;C<y;C++){B[C].firstChild.style.height=o+"px"}break;default:for(var C=0,y=B.length;C<y;C++){var j=B[C].firstChild;var p=j.getElementsByTagName("tr");var a=p[p.length-1];var s=o-(all-last);if(s>=0){a.style.height=s+"px"}}break}}}else{this._bodyEl.style.width="auto";this._bodyEl.style.height="auto"}var d=this.getTabBodyEl(this.activeIndex);if(d){if(!A&&this.showBody){var E=mini.getHeight(this._bodyEl,true);if(jQuery.boxModel){var q=mini.getPaddings(d);var x=mini.getBorders(d);E=E-q.top-q.bottom-x.top-x.bottom}d.style.height=E+"px"}else{d.style.height="auto"}}switch(this.tabPosition){case"bottom":var b=this._headerEl.childNodes;for(var C=0,y=b.length;C<y;C++){var j=b[C];mini.removeClass(j,"mini-tabs-header2");if(y>1&&C!=0){mini.addClass(j,"mini-tabs-header2")}}break;case"left":var B=this._headerEl.firstChild.rows[0].cells;for(var C=0,y=B.length;C<y;C++){var g=B[C];mini.removeClass(g,"mini-tabs-header2");if(y>1&&C==0){mini.addClass(g,"mini-tabs-header2")}}break;case"right":var B=this._headerEl.firstChild.rows[0].cells;for(var C=0,y=B.length;C<y;C++){var g=B[C];mini.removeClass(g,"mini-tabs-header2");if(y>1&&C!=0){mini.addClass(g,"mini-tabs-header2")}}break;default:var b=this._headerEl.childNodes;for(var C=0,y=b.length;C<y;C++){var j=b[C];mini.removeClass(j,"mini-tabs-header2");if(y>1&&C==0){mini.addClass(j,"mini-tabs-header2")}}break}mini.removeClass(this.el,"mini-tabs-scroll");var g=mini.byClass("mini-tabs-lastSpace",this.el);var D=mini.byClass("mini-tabs-buttons",this.el);var c=this._headerEl.parentNode;c.style.paddingRight="0px";if(this._navEl){this._navEl.style.display="none"}if(D){D.style.display="none"}mini.setWidth(c,u);if((this.tabPosition=="top"||this.tabPosition=="bottom")&&this.tabAlign=="left"){this._headerEl.style.width="auto";D.style.display="block";var v=u;var k=this._headerEl.firstChild.offsetWidth-g.offsetWidth;var F=D.firstChild?D.offsetWidth:0;if(k+F>v){this._navEl.style.display="block";this._navEl.style.right=F+"px";var t=this._navEl.offsetWidth;var n=v-F-t;mini.setWidth(this._headerEl,n)}}this._scrollToTab(this.activeIndex);this._doScrollButton();mini.layout(this._bodyEl);this.fire("layout")};nui.Tabs.prototype._doScrollButton=function(){if(this.tabPosition=="top"||this.tabPosition=="bottom"){mini.removeClass(this._leftButtonEl,"mini-disabled");mini.removeClass(this._rightButtonEl,"mini-disabled");if(this._headerEl.scrollLeft==0){mini.addClass(this._leftButtonEl,"mini-disabled")}var c=this.getTabEl(this.tabs.length-1);if(c){var a=mini.getBox(c);var b=mini.getBox(this._headerEl);if(a.right<=b.right){mini.addClass(this._rightButtonEl,"mini-disabled")}}}};nui.Tabs.prototype._scrollToTab=function(b){var f=this._headerEl.scrollLeft;if(this.tabPosition=="top"||this.tabPosition=="bottom"){this._headerEl.scrollLeft=f;var e=this.getTabEl(b);if(e){var d=this;var a=mini.getBox(e);var c=mini.getBox(d._headerEl);if(a.x<c.x){d._headerEl.scrollLeft-=(c.x-a.x)}else{if(a.right>c.right){d._headerEl.scrollLeft+=(a.right-c.right)}}}}};nui.Tabs.prototype.__OnMouseDown=function(d){clearInterval(this._scrollTimer);if(this.tabPosition=="top"||this.tabPosition=="bottom"){var c=this;var b=0,a=10;if(d.target==this._leftButtonEl){this._scrollTimer=setInterval(function(){c._headerEl.scrollLeft-=a;b++;if(b>5){a=18}if(b>10){a=25}c._doScrollButton()},25)}else{if(d.target==this._rightButtonEl){this._scrollTimer=setInterval(function(){c._headerEl.scrollLeft+=a;b++;if(b>5){a=18}if(b>10){a=25}c._doScrollButton()},25)}}mini.on(document,"mouseup",this.__OnDocMouseUp,this)}};
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
/**
* jQuery MiniUI v3.0
* 
* Web Site : http://www.miniui.com
*
* Commercial License : http://www.miniui.com/license
*
* Copyright(c) 2012 All Rights Reserved. Shanghai PusSoft Co., Ltd (�Ϻ��ռ�������޹�˾) [ services@plusoft.com.cn ]. 
* 
*/


mini.locale = "zh_CN";


/* Date
-----------------------------------------------------------------------------*/

mini.dateInfo = {
    monthsLong: ["һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"],
    monthsShort: ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"],
    daysLong: ["������", "����һ", "���ڶ�", "������", "������", "������", "������"],
    daysShort: ["��", "һ", "��", "��", "��", "��", "��"],
    quarterLong: ['һ����', '������', '������', '�ļ���'],
    quarterShort: ['Q1', 'Q2', 'Q2', 'Q4'],
    halfYearLong: ['�ϰ���', '�°���'],
    patterns: {
        "d": "yyyy-M-d",
        "D": "yyyy��M��d��",
        "f": "yyyy��M��d�� H:mm",
        "F": "yyyy��M��d�� H:mm:ss",
        "g": "yyyy-M-d H:mm",
        "G": "yyyy-M-d H:mm:ss",
        "m": "MMMd��",
        "o": "yyyy-MM-ddTHH:mm:ss.fff",
        "s": "yyyy-MM-ddTHH:mm:ss",
        "t": "H:mm",
        "T": "H:mm:ss",
        "U": "yyyy��M��d�� HH:mm:ss",
        "y": "yyyy��MM��"
    },
    tt: {
        "AM": "����",
        "PM": "����"
    },
    ten: {
        "Early": "��Ѯ",
        "Mid": "��Ѯ",
        "Late": "��Ѯ"
    },
    today: '����',
    clockType: 24
};

/* MessageBox
-----------------------------------------------------------------------------*/
if(mini.MessageBox){
    mini.copyTo(mini.MessageBox, {
        alertTitle: "����",
        confirmTitle: "ȷ��",
        prompTitle: "����",
        prompMessage: "���������ݣ�",
        buttonText: {
            ok: "ȷ��", //"OK",
            cancel: "ȡ��", //"Cancel",
            yes: "��", //"Yes",
            no: "��"//"No"
        }
    });
};

/* Calendar
-----------------------------------------------------------------------------*/
if (mini.Calendar) {
    mini.copyTo(mini.Calendar.prototype, {
        firstDayOfWeek: 0,
        todayText: "����",
        clearText: "���",
        okText: "ȷ��",
        cancelText: "ȡ��",
        daysShort: ["��", "һ", "��", "��", "��", "��", "��"],
        format: "yyyy��MM��",

        timeFormat: 'H:mm'
    });
}


/* required | loadingMsg
-----------------------------------------------------------------------------*/
for (var id in mini) {
    var clazz = mini[id];
    if (clazz && clazz.prototype && clazz.prototype.isControl) {
        clazz.prototype.requiredErrorText = "����Ϊ��";
        clazz.prototype.loadingMsg = "Loading...";
    }

}
/* VTypes
-----------------------------------------------------------------------------*/
if (mini.VTypes) {
    mini.copyTo(mini.VTypes, {
        minDateErrorText: '����С������ {0}',
        maxDateErrorText: '���ܴ������� {0}',

        uniqueErrorText: "�ֶβ����ظ�",
        requiredErrorText: "����Ϊ��",
        emailErrorText: "�������ʼ���ʽ",
        urlErrorText: "������URL��ʽ",
        floatErrorText: "����������",
        intErrorText: "����������",
        dateErrorText: "���������ڸ�ʽ {0}",
        maxLengthErrorText: "���ܳ��� {0} ���ַ�",
        minLengthErrorText: "�������� {0} ���ַ�",
        maxErrorText: "���ֲ��ܴ��� {0} ",
        minErrorText: "���ֲ���С�� {0} ",
        rangeLengthErrorText: "�ַ����ȱ����� {0} �� {1} ֮��",
        rangeCharErrorText: "�ַ��������� {0} �� {1} ֮��",
        rangeErrorText: "���ֱ����� {0} �� {1} ֮��"
    });
}

/* Pager
-----------------------------------------------------------------------------*/
if (mini.Pager) {
    mini.copyTo(mini.Pager.prototype, {
        firstText: "��ҳ",
        prevText: "��һҳ",
        nextText: "��һҳ",
        lastText: "βҳ",
        pageInfoText: "ÿҳ {0} ��, �� {1} ��"
    });
}

/* DataGrid
-----------------------------------------------------------------------------*/
if (mini.DataGrid) {
    mini.copyTo(mini.DataGrid.prototype, {
        emptyText: "û�з��ص�����"
    });
}

if (mini.FileUpload) {
    mini.FileUpload.prototype.buttonText = "���..."
}
if (mini.HtmlFile) {
    mini.HtmlFile.prototype.buttonText = "���..."
}

/* Gantt
-----------------------------------------------------------------------------*/
if (window.mini.Gantt) {
    mini.GanttView.ShortWeeks = [
        '��', 'һ', '��', '��', '��', '��', '��'
    ];
    mini.GanttView.LongWeeks = [
        '������', '����һ', '���ڶ�', '������', '������', '������', '������'
    ];

    mini.Gantt.PredecessorLinkType = [
        { ID: 0, Name: '���-���(FF)', Short: 'FF' },
        { ID: 1, Name: '���-��ʼ(FS)', Short: 'FS' },
        { ID: 2, Name: '��ʼ-���(SF)', Short: 'SF' },
        { ID: 3, Name: '��ʼ-��ʼ(SS)', Short: 'SS' }
    ];

    mini.Gantt.ConstraintType = [
        { ID: 0, Name: 'Խ��Խ��' },
        { ID: 1, Name: 'Խ��Խ��' },
        { ID: 2, Name: '���뿪ʼ��' },
        { ID: 3, Name: '���������' },
        { ID: 4, Name: '��������...��ʼ' },
        { ID: 5, Name: '��������...��ʼ' },
        { ID: 6, Name: '��������...���' },
        { ID: 7, Name: '��������...���' }
    ];

    mini.copyTo(mini.Gantt, {
        ID_Text: "��ʶ��",
        Name_Text: "��������",
        PercentComplete_Text: "����",
        Duration_Text: "����",
        Start_Text: "��ʼ����",
        Finish_Text: "�������",
        Critical_Text: "�ؼ�����",

        PredecessorLink_Text: "ǰ������",
        Work_Text: "��ʱ",
        Priority_Text: "��Ҫ����",
        Weight_Text: "Ȩ��",
        OutlineNumber_Text: "����ֶ�",
        OutlineLevel_Text: "����㼶",
        ActualStart_Text: "ʵ�ʿ�ʼ����",
        ActualFinish_Text: "ʵ���������",
        WBS_Text: "WBS",
        ConstraintType_Text: "��������",
        ConstraintDate_Text: "��������",
        Department_Text: "����",
        Principal_Text: "������",
        Assignments_Text: "��Դ����",

        Summary_Text: "ժҪ����",
        Task_Text: "����",
        Baseline_Text: "�Ƚϻ�׼",
        LinkType_Text: "��������",
        LinkLag_Text: "�Ӹ�ʱ��",
        From_Text: "��",
        To_Text: "��",

        Goto_Text: "ת������",
        UpGrade_Text: "����",
        DownGrade_Text: "����",
        Add_Text: "����",
        Edit_Text: "�༭",
        Remove_Text: "ɾ��",
        Move_Text: "�ƶ�",
        ZoomIn_Text: "�Ŵ�",
        ZoomOut_Text: "��С",
        Deselect_Text: "ȡ��ѡ��",
        Split_Text: "�������"


    });

}	