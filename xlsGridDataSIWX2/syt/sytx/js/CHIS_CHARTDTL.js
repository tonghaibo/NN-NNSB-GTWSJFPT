

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.2",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+xt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function pt(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function ft(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",ft,"#"===e.firstChild.getAttribute("href")),ct(R,pt,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),p=bt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[bt(wt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}f.push(n)}return wt(f)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=Tt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,p,f=vt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");
try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);


(function ( root, doc, factory ) {
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define( [ "jquery" ], function ( $ ) {
			factory( $, root, doc );
			return $.mobile;
		});
	} else {
		// Browser globals
		factory( root.jQuery, root, doc );
	}
}( this, document, function ( jQuery, window, document, undefined ) {
(function( $ ) {
	$.mobile = {};
}( jQuery ));

(function( $, window, undefined ) {
	$.extend( $.mobile, {

		// Version of the jQuery Mobile Framework
		version: "1.4.0-rc.1",

		// Deprecated and no longer used in 1.4 remove in 1.5
		// Define the url parameter used for referencing widget-generated sub-pages.
		// Translates to example.html&ui-page=subpageIdentifier
		// hash segment before &ui-page= is used to make Ajax request
		subPageUrlKey: "ui-page",

		hideUrlBar: true,

		// Keepnative Selector
		keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",

		// Deprecated in 1.4 remove in 1.5
		// Class assigned to page currently in view, and during transitions
		activePageClass: "ui-page-active",

		// Deprecated in 1.4 remove in 1.5
		// Class used for "active" button state, from CSS framework
		activeBtnClass: "ui-btn-active",

		// Deprecated in 1.4 remove in 1.5
		// Class used for "focus" form element state, from CSS framework
		focusClass: "ui-focus",

		// Automatically handle clicks and form submissions through Ajax, when same-domain
		ajaxEnabled: true,

		// Automatically load and show pages based on location.hash
		hashListeningEnabled: true,

		// disable to prevent jquery from bothering with links
		linkBindingEnabled: true,

		// Set default page transition - 'none' for no transitions
		defaultPageTransition: "fade",

		// Set maximum window width for transitions to apply - 'false' for no limit
		maxTransitionWidth: false,

		// Minimum scroll distance that will be remembered when returning to a page
		// Deprecated remove in 1.5
		minScrollBack: 0,

		// Set default dialog transition - 'none' for no transitions
		defaultDialogTransition: "pop",

		// Error response message - appears when an Ajax page request fails
		pageLoadErrorMessage: "Error Loading Page",

		// For error messages, which theme does the box uses?
		pageLoadErrorMessageTheme: "a",

		// replace calls to window.history.back with phonegaps navigation helper
		// where it is provided on the window object
		phonegapNavigationEnabled: false,

		//automatically initialize the DOM when it's ready
		autoInitializePage: true,

		pushStateEnabled: true,

		// allows users to opt in to ignoring content by marking a parent element as
		// data-ignored
		ignoreContentEnabled: false,

		buttonMarkup: {
			hoverDelay: 200
		},

		// disable the alteration of the dynamic base tag or links in the case
		// that a dynamic base tag isn't supported
		dynamicBaseEnabled: true,

		// default the property to remove dependency on assignment in init module
		pageContainer: $(),

		//enable cross-domain page support
		allowCrossDomainPages: false,

		dialogHashKey: "&ui-state=dialog"
	});
})( jQuery, this );

(function( $, window, undefined ) {
	var nsNormalizeDict = {},
		oldFind = $.find,
		rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		jqmDataRE = /:jqmData\(([^)]*)\)/g;

	$.extend( $.mobile, {

		// Namespace used framework-wide for data-attrs. Default is no namespace

		ns: "",

		// Retrieve an attribute from an element and perform some massaging of the value

		getAttribute: function( element, key ) {
			var data;

			element = element.jquery ? element[0] : element;

			if ( element && element.getAttribute ) {
				data = element.getAttribute( "data-" + $.mobile.ns + key );
			}

			// Copied from core's src/data.js:dataAttr()
			// Convert from a string to a proper data type
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch( err ) {}

			return data;
		},

		// Expose our cache for testing purposes.
		nsNormalizeDict: nsNormalizeDict,

		// Take a data attribute property, prepend the namespace
		// and then camel case the attribute string. Add the result
		// to our nsNormalizeDict so we don't have to do this again.
		nsNormalize: function( prop ) {
			return nsNormalizeDict[ prop ] ||
				( nsNormalizeDict[ prop ] = $.camelCase( $.mobile.ns + prop ) );
		},

		// Find the closest javascript page element to gather settings data jsperf test
		// http://jsperf.com/single-complex-selector-vs-many-complex-selectors/edit
		// possibly naive, but it shows that the parsing overhead for *just* the page selector vs
		// the page and dialog selector is negligable. This could probably be speed up by
		// doing a similar parent node traversal to the one found in the inherited theme code above
		closestPageData: function( $target ) {
			return $target
				.closest( ":jqmData(role='page'), :jqmData(role='dialog')" )
				.data( "mobile-page" );
		}

	});

	// Mobile version of data and removeData and hasData methods
	// ensures all data is set and retrieved using jQuery Mobile's data namespace
	$.fn.jqmData = function( prop, value ) {
		var result;
		if ( typeof prop !== "undefined" ) {
			if ( prop ) {
				prop = $.mobile.nsNormalize( prop );
			}

			// undefined is permitted as an explicit input for the second param
			// in this case it returns the value and does not set it to undefined
			if ( arguments.length < 2 || value === undefined ) {
				result = this.data( prop );
			} else {
				result = this.data( prop, value );
			}
		}
		return result;
	};

	$.jqmData = function( elem, prop, value ) {
		var result;
		if ( typeof prop !== "undefined" ) {
			result = $.data( elem, prop ? $.mobile.nsNormalize( prop ) : prop, value );
		}
		return result;
	};

	$.fn.jqmRemoveData = function( prop ) {
		return this.removeData( $.mobile.nsNormalize( prop ) );
	};

	$.jqmRemoveData = function( elem, prop ) {
		return $.removeData( elem, $.mobile.nsNormalize( prop ) );
	};

	$.find = function( selector, context, ret, extra ) {
		if ( selector.indexOf( ":jqmData" ) > -1 ) {
			selector = selector.replace( jqmDataRE, "[data-" + ( $.mobile.ns || "" ) + "$1]" );
		}

		return oldFind.call( this, selector, context, ret, extra );
	};

	$.extend( $.find, oldFind );

})( jQuery, this );

/*!
 * jQuery UI Core @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function( $, undefined ) {

var uuid = 0,
	runiqueId = /^ui-id-\d+$/;

// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "@VERSION",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	scrollParent: function() {
		var scrollParent;
		if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
			}).eq(0);
		}

		return ( /fixed/ ).test( this.css( "position") ) || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
	},

	uniqueId: function() {
		return this.each(function() {
			if ( !this.id ) {
				this.id = "ui-id-" + (++uuid);
			}
		});
	},

	removeUniqueId: function() {
		return this.each(function() {
			if ( runiqueId.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}





// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.support.selectstart = "onselectstart" in document.createElement( "div" );
$.fn.extend({
	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	}
});

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

})( jQuery );
(function( $, window, undefined ) {

	$.extend( $.mobile, {
		// define the window and the document objects
		window: $( window ),
		document: $( document ),

		// TODO: Remove and use $.ui.keyCode directly
		keyCode: $.ui.keyCode,

		// Place to store various widget extensions
		behaviors: {},

		// Scroll page vertically: scroll to 0 to hide iOS address bar, or pass a Y value
		silentScroll: function( ypos ) {
			if ( $.type( ypos ) !== "number" ) {
				ypos = $.mobile.defaultHomeScroll;
			}

			// prevent scrollstart and scrollstop events
			$.event.special.scrollstart.enabled = false;

			setTimeout(function() {
				window.scrollTo( 0, ypos );
				$.mobile.document.trigger( "silentscroll", { x: 0, y: ypos });
			}, 20 );

			setTimeout(function() {
				$.event.special.scrollstart.enabled = true;
			}, 150 );
		},

		getClosestBaseUrl: function( ele )	{
			// Find the closest page and extract out its url.
			var url = $( ele ).closest( ".ui-page" ).jqmData( "url" ),
				base = $.mobile.path.documentBase.hrefNoHash;

			if ( !$.mobile.dynamicBaseEnabled || !url || !$.mobile.path.isPath( url ) ) {
				url = base;
			}

			return $.mobile.path.makeUrlAbsolute( url, base );
		},
		removeActiveLinkClass: function( forceRemoval ) {
			if ( !!$.mobile.activeClickedLink &&
				( !$.mobile.activeClickedLink.closest( "." + $.mobile.activePageClass ).length ||
					forceRemoval ) ) {

				$.mobile.activeClickedLink.removeClass( $.mobile.activeBtnClass );
			}
			$.mobile.activeClickedLink = null;
		},

		// DEPRECATED in 1.4
		// Find the closest parent with a theme class on it. Note that
		// we are not using $.fn.closest() on purpose here because this
		// method gets called quite a bit and we need it to be as fast
		// as possible.
		getInheritedTheme: function( el, defaultTheme ) {
			var e = el[ 0 ],
				ltr = "",
				re = /ui-(bar|body|overlay)-([a-z])\b/,
				c, m;
			while ( e ) {
				c = e.className || "";
				if ( c && ( m = re.exec( c ) ) && ( ltr = m[ 2 ] ) ) {
					// We found a parent with a theme class
					// on it so bail from this loop.
					break;
				}

				e = e.parentNode;
			}
			// Return the theme letter we found, if none, return the
			// specified default.
			return ltr || defaultTheme || "a";
		},

		enhanceable: function( elements ) {
			return this.haveParents( elements, "enhance" );
		},

		hijackable: function( elements ) {
			return this.haveParents( elements, "ajax" );
		},

		haveParents: function( elements, attr ) {
			if ( !$.mobile.ignoreContentEnabled ) {
				return elements;
			}

			var count = elements.length,
				$newSet = $(),
				e, $element, excluded,
				i, c;

			for ( i = 0; i < count; i++ ) {
				$element = elements.eq( i );
				excluded = false;
				e = elements[ i ];

				while ( e ) {
					c = e.getAttribute ? e.getAttribute( "data-" + $.mobile.ns + attr ) : "";

					if ( c === "false" ) {
						excluded = true;
						break;
					}

					e = e.parentNode;
				}

				if ( !excluded ) {
					$newSet = $newSet.add( $element );
				}
			}

			return $newSet;
		},

		getScreenHeight: function() {
			// Native innerHeight returns more accurate value for this across platforms,
			// jQuery version is here as a normalized fallback for platforms like Symbian
			return window.innerHeight || $.mobile.window.height();
		},

		//simply set the active page's minimum height to screen height, depending on orientation
		resetActivePageHeight: function( height ) {
			var page = $( "." + $.mobile.activePageClass ),
				pageHeight = page.height(),
				pageOuterHeight = page.outerHeight( true );

			height = ( typeof height === "number" ) ? height : $.mobile.getScreenHeight();

			page.css( "min-height", height - ( pageOuterHeight - pageHeight ) );
		},

		loading: function() {
			// If this is the first call to this function, instantiate a loader widget
			var loader = this.loading._widget || $( $.mobile.loader.prototype.defaultHtml ).loader(),

				// Call the appropriate method on the loader
				returnValue = loader.loader.apply( loader, arguments );

			// Make sure the loader is retained for future calls to this function.
			this.loading._widget = loader;

			return returnValue;
		}
	});

	$.addDependents = function( elem, newDependents ) {
		var $elem = $( elem ),
			dependents = $elem.jqmData( "dependents" ) || $();

		$elem.jqmData( "dependents", $( dependents ).add( newDependents ) );
	};

	// plugins
	$.fn.extend({
		removeWithDependents: function() {
			$.removeWithDependents( this );
		},

		// Enhance child elements
		enhanceWithin: function() {
			var index,
				widgetElements = {},
				keepNative = $.mobile.page.prototype.keepNativeSelector(),
				that = this;

			// Add no js class to elements
			if ( $.mobile.nojs ) {
				$.mobile.nojs( this );
			}

			// Bind links for ajax nav
			if ( $.mobile.links ) {
				$.mobile.links( this );
			}

			// Degrade inputs for styleing
			if ( $.mobile.degradeInputsWithin ) {
				$.mobile.degradeInputsWithin( this );
			}

			// Run buttonmarkup
			if ( $.fn.buttonMarkup ) {
				this.find( $.fn.buttonMarkup.initSelector ).not( keepNative )
				.jqmEnhanceable().buttonMarkup();
			}

			// Add classes for fieldContain
			if ( $.fn.fieldcontain ) {
				this.find( ":jqmData(role='fieldcontain')" ).not( keepNative )
				.jqmEnhanceable().fieldcontain();
			}

			// Enhance widgets
			$.each( $.mobile.widgets, function( name, constructor ) {

				// If initSelector not false find elements
				if ( constructor.initSelector ) {

					// Filter elements that should not be enhanced based on parents
					var elements = $.mobile.enhanceable( that.find( constructor.initSelector ) );

					// If any matching elements remain filter ones with keepNativeSelector
					if ( elements.length > 0 ) {

						// $.mobile.page.prototype.keepNativeSelector is deprecated this is just for backcompat
						// Switch to $.mobile.keepNative in 1.5 which is just a value not a function
						elements = elements.not( keepNative );
					}

					// Enhance whatever is left
					if ( elements.length > 0 ) {
						widgetElements[ constructor.prototype.widgetName ] = elements;
					}
				}
			});

			for ( index in widgetElements ) {
				widgetElements[ index ][ index ]();
			}

			return this;
		},

		addDependents: function( newDependents ) {
			$.addDependents( this, newDependents );
		},

		// note that this helper doesn't attempt to handle the callback
		// or setting of an html element's text, its only purpose is
		// to return the html encoded version of the text in all cases. (thus the name)
		getEncodedText: function() {
			return $( "<a>" ).text( this.text() ).html();
		},

		// fluent helper function for the mobile namespaced equivalent
		jqmEnhanceable: function() {
			return $.mobile.enhanceable( this );
		},

		jqmHijackable: function() {
			return $.mobile.hijackable( this );
		}
	});

	$.removeWithDependents = function( nativeElement ) {
		var element = $( nativeElement );

		( element.jqmData( "dependents" ) || $() ).remove();
		element.remove();
	};
	$.addDependents = function( nativeElement, newDependents ) {
		var element = $( nativeElement ),
			dependents = element.jqmData( "dependents" ) || $();

		element.jqmData( "dependents", $( dependents ).add( newDependents ) );
	};

	$.find.matches = function( expr, set ) {
		return $.find( expr, null, null, set );
	};

	$.find.matchesSelector = function( node, expr ) {
		return $.find( expr, null, null, [ node ] ).length > 0;
	};

})( jQuery, this );


/*!
 * jQuery UI Widget @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function( $, undefined ) {

var uuid = 0,
	slice = Array.prototype.slice,
	_cleanData = $.cleanData;
$.cleanData = function( elems ) {
	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
		try {
			$( elem ).triggerHandler( "remove" );
		// http://bugs.jquery.com/ticket/8235
		} catch( e ) {}
	}
	_cleanData( elems );
};

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( value === undefined ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( value === undefined ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			// accept selectors, DOM elements
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^(\w+)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

})( jQuery );

(function( $, undefined ) {

var rcapitals = /[A-Z]/g,
	replaceFunction = function( c ) {
		return "-" + c.toLowerCase();
	};

$.extend( $.Widget.prototype, {
	_getCreateOptions: function() {
		var option, value,
			elem = this.element[ 0 ],
			options = {};

		//
		if ( !$.mobile.getAttribute( elem, "defaults" ) ) {
			for ( option in this.options ) {
				value = $.mobile.getAttribute( elem, option.replace( rcapitals, replaceFunction ) );

				if ( value != null ) {
					options[ option ] = value;
				}
			}
		}

		return options;
	}
});

//TODO: Remove in 1.5 for backcompat only
$.mobile.widget = $.Widget;

})( jQuery );


(function( $ ) {
	// TODO move loader class down into the widget settings
	var loaderClass = "ui-loader", $html = $( "html" );

	$.widget( "mobile.loader", {
		// NOTE if the global config settings are defined they will override these
		//      options
		options: {
			// the theme for the loading message
			theme: "a",

			// whether the text in the loading message is shown
			textVisible: false,

			// custom html for the inner content of the loading message
			html: "",

			// the text to be displayed when the popup is shown
			text: "loading"
		},

		defaultHtml: "<div class='" + loaderClass + "'>" +
			"<span class='ui-icon-loading'></span>" +
			"<h1></h1>" +
			"</div>",

		// For non-fixed supportin browsers. Position at y center (if scrollTop supported), above the activeBtn (if defined), or just 100px from top
		fakeFixLoader: function() {
			var activeBtn = $( "." + $.mobile.activeBtnClass ).first();

			this.element
				.css({
					top: $.support.scrollTop && this.window.scrollTop() + this.window.height() / 2 ||
						activeBtn.length && activeBtn.offset().top || 100
				});
		},

		// check position of loader to see if it appears to be "fixed" to center
		// if not, use abs positioning
		checkLoaderPosition: function() {
			var offset = this.element.offset(),
				scrollTop = this.window.scrollTop(),
				screenHeight = $.mobile.getScreenHeight();

			if ( offset.top < scrollTop || ( offset.top - scrollTop ) > screenHeight ) {
				this.element.addClass( "ui-loader-fakefix" );
				this.fakeFixLoader();
				this.window
					.unbind( "scroll", this.checkLoaderPosition )
					.bind( "scroll", $.proxy( this.fakeFixLoader, this ) );
			}
		},

		resetHtml: function() {
			this.element.html( $( this.defaultHtml ).html() );
		},

		// Turn on/off page loading message. Theme doubles as an object argument
		// with the following shape: { theme: '', text: '', html: '', textVisible: '' }
		// NOTE that the $.mobile.loading* settings and params past the first are deprecated
		// TODO sweet jesus we need to break some of this out
		show: function( theme, msgText, textonly ) {
			var textVisible, message, loadSettings;

			this.resetHtml();

			// use the prototype options so that people can set them globally at
			// mobile init. Consistency, it's what's for dinner
			if ( $.type( theme ) === "object" ) {
				loadSettings = $.extend( {}, this.options, theme );

				theme = loadSettings.theme;
			} else {
				loadSettings = this.options;

				// here we prefer the theme value passed as a string argument, then
				// we prefer the global option because we can't use undefined default
				// prototype options, then the prototype option
				theme = theme || loadSettings.theme;
			}

			// set the message text, prefer the param, then the settings object
			// then loading message
			message = msgText || ( loadSettings.text === false ? "" : loadSettings.text );

			// prepare the dom
			$html.addClass( "ui-loading" );

			textVisible = loadSettings.textVisible;

			// add the proper css given the options (theme, text, etc)
			// Force text visibility if the second argument was supplied, or
			// if the text was explicitly set in the object args
			this.element.attr("class", loaderClass +
				" ui-corner-all ui-body-" + theme +
				" ui-loader-" + ( textVisible || msgText || theme.text ? "verbose" : "default" ) +
				( loadSettings.textonly || textonly ? " ui-loader-textonly" : "" ) );

			// TODO verify that jquery.fn.html is ok to use in both cases here
			//      this might be overly defensive in preventing unknowing xss
			// if the html attribute is defined on the loading settings, use that
			// otherwise use the fallbacks from above
			if ( loadSettings.html ) {
				this.element.html( loadSettings.html );
			} else {
				this.element.find( "h1" ).text( message );
			}

			// attach the loader to the DOM
			this.element.appendTo( $.mobile.pageContainer );

			// check that the loader is visible
			this.checkLoaderPosition();

			// on scroll check the loader position
			this.window.bind( "scroll", $.proxy( this.checkLoaderPosition, this ) );
		},

		hide: function() {
			$html.removeClass( "ui-loading" );

			if ( this.options.text ) {
				this.element.removeClass( "ui-loader-fakefix" );
			}

			$.mobile.window.unbind( "scroll", this.fakeFixLoader );
			$.mobile.window.unbind( "scroll", this.checkLoaderPosition );
		}
	});

})(jQuery, this);


// Script: jQuery hashchange event
// 
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function( $, window, undefined ) {
  // Reused string.
  var str_hashchange = 'hashchange',
    
    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,
    
    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );
  
  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };
  
  // Method: jQuery.fn.hashchange
  // 
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  // 
  // Usage:
  // 
  // > jQuery(window).hashchange( [ handler ] );
  // 
  // Arguments:
  // 
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };
  
  // Property: jQuery.fn.hashchange.delay
  // 
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.
  
  // Property: jQuery.fn.hashchange.domain
  // 
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  // 
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.domain = document.domain;
  
  // Property: jQuery.fn.hashchange.src
  // 
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  // 
  // Usage:
  // 
  // jQuery.fn.hashchange.src = 'path/to/file.html';
  
  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */
  
  // Event: hashchange event
  // 
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  // 
  // Usage as described in <jQuery.fn.hashchange>:
  // 
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  // 
  // A more verbose usage that allows for event namespacing:
  // 
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // > 
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  // 
  // Additional Notes:
  // 
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose 
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.
  
  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {
    
    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },
    
    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }
      
      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }
    
  });
  
  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function() {
    var self = {},
      timeout_id,
      
      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),
      
      fn_retval = function( val ) { return val; },
      history_set = fn_retval,
      history_get = fn_retval;
    
    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };
    
    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };
    
    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );
      
      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );
        
        $(window).trigger( str_hashchange );
        
      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }
      
      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };
    
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    window.attachEvent && !window.addEventListener && !supports_onhashchange && (function() {
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.
      
      var iframe,
        iframe_src;
      
      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function() {
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();
          
          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()
            
            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function() {
              iframe_src || history_set( get_fragment() );
              poll();
            })
            
            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )
            
            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;
          
          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function() {
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };
          
        }
      };
      
      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;
      
      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };
      
      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document,
          domain = $.fn[ str_hashchange ].domain;
        
        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;
          
          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();
          
          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"<\/script>' );
          
          iframe_doc.close();
          
          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };
      
    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    return self;
  })();
  
})(jQuery,this);

(function( $, undefined ) {

	/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
	window.matchMedia = window.matchMedia || (function( doc, undefined ) {

		

		var bool,
			docElem = doc.documentElement,
			refNode = docElem.firstElementChild || docElem.firstChild,
			// fakeBody required for <FF4 when executed in <head>
			fakeBody = doc.createElement( "body" ),
			div = doc.createElement( "div" );

		div.id = "mq-test-1";
		div.style.cssText = "position:absolute;top:-100em";
		fakeBody.style.background = "none";
		fakeBody.appendChild(div);

		return function(q){

			div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

			docElem.insertBefore( fakeBody, refNode );
			bool = div.offsetWidth === 42;
			docElem.removeChild( fakeBody );

			return {
				matches: bool,
				media: q
			};

		};

	}( document ));

	// $.mobile.media uses matchMedia to return a boolean.
	$.mobile.media = function( q ) {
		return window.matchMedia( q ).matches;
	};

})(jQuery);

	(function( $, undefined ) {
		var support = {
			touch: "ontouchend" in document
		};

		$.mobile.support = $.mobile.support || {};
		$.extend( $.support, support );
		$.extend( $.mobile.support, support );
	}( jQuery ));

	(function( $, undefined ) {
		$.extend( $.support, {
			orientation: "orientation" in window && "onorientationchange" in window
		});
	}( jQuery ));

(function( $, undefined ) {

// thx Modernizr
function propExists( prop ) {
	var uc_prop = prop.charAt( 0 ).toUpperCase() + prop.substr( 1 ),
		props = ( prop + " " + vendors.join( uc_prop + " " ) + uc_prop ).split( " " ),
		v;

	for ( v in props ) {
		if ( fbCSS[ props[ v ] ] !== undefined ) {
			return true;
		}
	}
}

var fakeBody = $( "<body>" ).prependTo( "html" ),
	fbCSS = fakeBody[ 0 ].style,
	vendors = [ "Webkit", "Moz", "O" ],
	webos = "palmGetResource" in window, //only used to rule out scrollTop
	opera = window.opera,
	operamini = window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]",
	bb = window.blackberry && !propExists( "-webkit-transform" ), //only used to rule out box shadow, as it's filled opaque on BB 5 and lower
	nokiaLTE7_3;

function validStyle( prop, value, check_vend ) {
	var div = document.createElement( "div" ),
		uc = function( txt ) {
			return txt.charAt( 0 ).toUpperCase() + txt.substr( 1 );
		},
		vend_pref = function( vend ) {
			if ( vend === "" ) {
				return "";
			} else {
				return  "-" + vend.charAt( 0 ).toLowerCase() + vend.substr( 1 ) + "-";
			}
		},
		check_style = function( vend ) {
			var vend_prop = vend_pref( vend ) + prop + ": " + value + ";",
				uc_vend = uc( vend ),
				propStyle = uc_vend + ( uc_vend === "" ? prop : uc( prop ) );

			div.setAttribute( "style", vend_prop );

			if ( !!div.style[ propStyle ] ) {
				ret = true;
			}
		},
		check_vends = check_vend ? check_vend : vendors,
		i, ret;

	for( i = 0; i < check_vends.length; i++ ) {
		check_style( check_vends[i] );
	}
	return !!ret;
}

// inline SVG support test
function inlineSVG() {
	// Thanks Modernizr & Erik Dahlstrom
	var w = window,
		svg = !!w.document.createElementNS && !!w.document.createElementNS( "http://www.w3.org/2000/svg", "svg" ).createSVGRect && !( w.opera && navigator.userAgent.indexOf( "Chrome" ) === -1 ),
		support = function( data ) {
			if ( !( data && svg ) ) {
				$( "html" ).addClass( "ui-nosvg" );
			}
		},
		img = new w.Image();

	img.onerror = function() {
		support( false );
	};
	img.onload = function() {
		support( img.width === 1 && img.height === 1 );
	};
	img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
}

function transform3dTest() {
	var mqProp = "transform-3d",
		// Because the `translate3d` test below throws false positives in Android:
		ret = $.mobile.media( "(-" + vendors.join( "-" + mqProp + "),(-" ) + "-" + mqProp + "),(" + mqProp + ")" ),
		el, transforms, t;

	if ( ret ) {
		return !!ret;
	}

	el = document.createElement( "div" );
	transforms = {
		// We¡¯re omitting Opera for the time being; MS uses unprefixed.
		"MozTransform": "-moz-transform",
		"transform": "transform"
	};

	fakeBody.append( el );

	for ( t in transforms ) {
		if ( el.style[ t ] !== undefined ) {
			el.style[ t ] = "translate3d( 100px, 1px, 1px )";
			ret = window.getComputedStyle( el ).getPropertyValue( transforms[ t ] );
		}
	}
	return ( !!ret && ret !== "none" );
}

// Test for dynamic-updating base tag support ( allows us to avoid href,src attr rewriting )
function baseTagTest() {
	var fauxBase = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
		base = $( "head base" ),
		fauxEle = null,
		href = "",
		link, rebase;

	if ( !base.length ) {
		base = fauxEle = $( "<base>", { "href": fauxBase }).appendTo( "head" );
	} else {
		href = base.attr( "href" );
	}

	link = $( "<a href='testurl' />" ).prependTo( fakeBody );
	rebase = link[ 0 ].href;
	base[ 0 ].href = href || location.pathname;

	if ( fauxEle ) {
		fauxEle.remove();
	}
	return rebase.indexOf( fauxBase ) === 0;
}

// Thanks Modernizr
function cssPointerEventsTest() {
	var element = document.createElement( "x" ),
		documentElement = document.documentElement,
		getComputedStyle = window.getComputedStyle,
		supports;

	if ( !( "pointerEvents" in element.style ) ) {
		return false;
	}

	element.style.pointerEvents = "auto";
	element.style.pointerEvents = "x";
	documentElement.appendChild( element );
	supports = getComputedStyle &&
	getComputedStyle( element, "" ).pointerEvents === "auto";
	documentElement.removeChild( element );
	return !!supports;
}

function boundingRect() {
	var div = document.createElement( "div" );
	return typeof div.getBoundingClientRect !== "undefined";
}

// non-UA-based IE version check by James Padolsey, modified by jdalton - from http://gist.github.com/527683
// allows for inclusion of IE 6+, including Windows Mobile 7
$.extend( $.mobile, { browser: {} } );
$.mobile.browser.oldIE = (function() {
	var v = 3,
		div = document.createElement( "div" ),
		a = div.all || [];

	do {
		div.innerHTML = "<!--[if gt IE " + ( ++v ) + "]><br><![endif]-->";
	} while( a[0] );

	return v > 4 ? v : !v;
})();

function fixedPosition() {
	var w = window,
		ua = navigator.userAgent,
		platform = navigator.platform,
		// Rendering engine is Webkit, and capture major version
		wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ ),
		wkversion = !!wkmatch && wkmatch[ 1 ],
		ffmatch = ua.match( /Fennec\/([0-9]+)/ ),
		ffversion = !!ffmatch && ffmatch[ 1 ],
		operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ ),
		omversion = !!operammobilematch && operammobilematch[ 1 ];

	if (
		// iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
		( ( platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534 ) ||
		// Opera Mini
		( w.operamini && ({}).toString.call( w.operamini ) === "[object OperaMini]" ) ||
		( operammobilematch && omversion < 7458 )	||
		//Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
		( ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 533 ) ||
		// Firefox Mobile before 6.0 -
		( ffversion && ffversion < 6 ) ||
		// WebOS less than 3
		( "palmGetResource" in window && wkversion && wkversion < 534 )	||
		// MeeGo
		( ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1 ) ) {
		return false;
	}

	return true;
}

$.extend( $.support, {
	cssTransitions: "WebKitTransitionEvent" in window ||
		validStyle( "transition", "height 100ms linear", [ "Webkit", "Moz", "" ] ) &&
		!$.mobile.browser.oldIE && !opera,

	// Note, Chrome for iOS has an extremely quirky implementation of popstate.
	// We've chosen to take the shortest path to a bug fix here for issue #5426
	// See the following link for information about the regex chosen
	// https://developers.google.com/chrome/mobile/docs/user-agent#chrome_for_ios_user-agent
	pushState: "pushState" in history &&
		"replaceState" in history &&
		// When running inside a FF iframe, calling replaceState causes an error
		!( window.navigator.userAgent.indexOf( "Firefox" ) >= 0 && window.top !== window ) &&
		( window.navigator.userAgent.search(/CriOS/) === -1 ),

	mediaquery: $.mobile.media( "only all" ),
	cssPseudoElement: !!propExists( "content" ),
	touchOverflow: !!propExists( "overflowScrolling" ),
	cssTransform3d: transform3dTest(),
	cssAnimations: !!propExists( "animationName" ),
	boxShadow: !!propExists( "boxShadow" ) && !bb,
	fixedPosition: fixedPosition(),
	scrollTop: ("pageXOffset" in window ||
		"scrollTop" in document.documentElement ||
		"scrollTop" in fakeBody[ 0 ]) && !webos && !operamini,

	dynamicBaseTag: baseTagTest(),
	cssPointerEvents: cssPointerEventsTest(),
	boundingRect: boundingRect(),
	inlineSVG: inlineSVG
});

fakeBody.remove();

// $.mobile.ajaxBlacklist is used to override ajaxEnabled on platforms that have known conflicts with hash history updates (BB5, Symbian)
// or that generally work better browsing in regular http for full page refreshes (Opera Mini)
// Note: This detection below is used as a last resort.
// We recommend only using these detection methods when all other more reliable/forward-looking approaches are not possible
nokiaLTE7_3 = (function() {

	var ua = window.navigator.userAgent;

	//The following is an attempt to match Nokia browsers that are running Symbian/s60, with webkit, version 7.3 or older
	return ua.indexOf( "Nokia" ) > -1 &&
			( ua.indexOf( "Symbian/3" ) > -1 || ua.indexOf( "Series60/5" ) > -1 ) &&
			ua.indexOf( "AppleWebKit" ) > -1 &&
			ua.match( /(BrowserNG|NokiaBrowser)\/7\.[0-3]/ );
})();

// Support conditions that must be met in order to proceed
// default enhanced qualifications are media query support OR IE 7+

$.mobile.gradeA = function() {
	return ( ( $.support.mediaquery && $.support.cssPseudoElement ) || $.mobile.browser.oldIE && $.mobile.browser.oldIE >= 8 ) && ( $.support.boundingRect || $.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/) !== null );
};

$.mobile.ajaxBlacklist =
			// BlackBerry browsers, pre-webkit
			window.blackberry && !window.WebKitPoint ||
			// Opera Mini
			operamini ||
			// Symbian webkits pre 7.3
			nokiaLTE7_3;

// Lastly, this workaround is the only way we've found so far to get pre 7.3 Symbian webkit devices
// to render the stylesheets when they're referenced before this script, as we'd recommend doing.
// This simply reappends the CSS in place, which for some reason makes it apply
if ( nokiaLTE7_3 ) {
	$(function() {
		$( "head link[rel='stylesheet']" ).attr( "rel", "alternate stylesheet" ).attr( "rel", "stylesheet" );
	});
}

// For ruling out shadows via css
if ( !$.support.boxShadow ) {
	$( "html" ).addClass( "ui-noboxshadow" );
}

})( jQuery );


(function( $, undefined ) {
	var $win = $.mobile.window, self,
		dummyFnToInitNavigate = function() {
		};

	$.event.special.beforenavigate = {
		setup: function() {
			$win.on( "navigate", dummyFnToInitNavigate );
		},

		teardown: function() {
			$win.off( "navigate", dummyFnToInitNavigate );
		}
	};

	$.event.special.navigate = self = {
		bound: false,

		pushStateEnabled: true,

		originalEventName: undefined,

		// If pushstate support is present and push state support is defined to
		// be true on the mobile namespace.
		isPushStateEnabled: function() {
			return $.support.pushState &&
				$.mobile.pushStateEnabled === true &&
				this.isHashChangeEnabled();
		},

		// !! assumes mobile namespace is present
		isHashChangeEnabled: function() {
			return $.mobile.hashListeningEnabled === true;
		},

		// TODO a lot of duplication between popstate and hashchange
		popstate: function( event ) {
			var newEvent = new $.Event( "navigate" ),
				beforeNavigate = new $.Event( "beforenavigate" ),
				state = event.originalEvent.state || {};

			beforeNavigate.originalEvent = event;
			$win.trigger( beforeNavigate );

			if ( beforeNavigate.isDefaultPrevented() ) {
				return;
			}

			if ( event.historyState ) {
				$.extend(state, event.historyState);
			}

			// Make sure the original event is tracked for the end
			// user to inspect incase they want to do something special
			newEvent.originalEvent = event;

			// NOTE we let the current stack unwind because any assignment to
			//      location.hash will stop the world and run this event handler. By
			//      doing this we create a similar behavior to hashchange on hash
			//      assignment
			setTimeout(function() {
				$win.trigger( newEvent, {
					state: state
				});
			}, 0);
		},

		hashchange: function( event /*, data */ ) {
			var newEvent = new $.Event( "navigate" ),
				beforeNavigate = new $.Event( "beforenavigate" );

			beforeNavigate.originalEvent = event;
			$win.trigger( beforeNavigate );

			if ( beforeNavigate.isDefaultPrevented() ) {
				return;
			}

			// Make sure the original event is tracked for the end
			// user to inspect incase they want to do something special
			newEvent.originalEvent = event;

			// Trigger the hashchange with state provided by the user
			// that altered the hash
			$win.trigger( newEvent, {
				// Users that want to fully normalize the two events
				// will need to do history management down the stack and
				// add the state to the event before this binding is fired
				// TODO consider allowing for the explicit addition of callbacks
				//      to be fired before this value is set to avoid event timing issues
				state: event.hashchangeState || {}
			});
		},

		// TODO We really only want to set this up once
		//      but I'm not clear if there's a beter way to achieve
		//      this with the jQuery special event structure
		setup: function( /* data, namespaces */ ) {
			if ( self.bound ) {
				return;
			}

			self.bound = true;

			if ( self.isPushStateEnabled() ) {
				self.originalEventName = "popstate";
				$win.bind( "popstate.navigate", self.popstate );
			} else if ( self.isHashChangeEnabled() ) {
				self.originalEventName = "hashchange";
				$win.bind( "hashchange.navigate", self.hashchange );
			}
		}
	};
})( jQuery );



(function( $, undefined ) {
		var path, $base, dialogHashKey = "&ui-state=dialog";

		$.mobile.path = path = {
			uiStateKey: "&ui-state",

			// This scary looking regular expression parses an absolute URL or its relative
			// variants (protocol, site, document, query, and hash), into the various
			// components (protocol, host, path, query, fragment, etc that make up the
			// URL as well as some other commonly used sub-parts. When used with RegExp.exec()
			// or String.match, it parses the URL into a results array that looks like this:
			//
			//     [0]: http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread#msg-content
			//     [1]: http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread
			//     [2]: http://jblas:password@mycompany.com:8080/mail/inbox
			//     [3]: http://jblas:password@mycompany.com:8080
			//     [4]: http:
			//     [5]: //
			//     [6]: jblas:password@mycompany.com:8080
			//     [7]: jblas:password
			//     [8]: jblas
			//     [9]: password
			//    [10]: mycompany.com:8080
			//    [11]: mycompany.com
			//    [12]: 8080
			//    [13]: /mail/inbox
			//    [14]: /mail/
			//    [15]: inbox
			//    [16]: ?msg=1234&type=unread
			//    [17]: #msg-content
			//
			urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,

			// Abstraction to address xss (Issue #4787) by removing the authority in
			// browsers that auto	decode it. All references to location.href should be
			// replaced with a call to this method so that it can be dealt with properly here
			getLocation: function( url ) {
				var uri = url ? this.parseUrl( url ) : location,
					hash = this.parseUrl( url || location.href ).hash;

				// mimic the browser with an empty string when the hash is empty
				hash = hash === "#" ? "" : hash;

				// Make sure to parse the url or the location object for the hash because using location.hash
				// is autodecoded in firefox, the rest of the url should be from the object (location unless
				// we're testing) to avoid the inclusion of the authority
				return uri.protocol + "//" + uri.host + uri.pathname + uri.search + hash;
			},

			//return the original document url
			getDocumentUrl: function( asParsedObject ) {
				return asParsedObject ? $.extend( {}, path.documentUrl ) : path.documentUrl.href;
			},

			parseLocation: function() {
				return this.parseUrl( this.getLocation() );
			},

			//Parse a URL into a structure that allows easy access to
			//all of the URL components by name.
			parseUrl: function( url ) {
				// If we're passed an object, we'll assume that it is
				// a parsed url object and just return it back to the caller.
				if ( $.type( url ) === "object" ) {
					return url;
				}

				var matches = path.urlParseRE.exec( url || "" ) || [];

					// Create an object that allows the caller to access the sub-matches
					// by name. Note that IE returns an empty string instead of undefined,
					// like all other browsers do, so we normalize everything so its consistent
					// no matter what browser we're running on.
					return {
						href:         matches[  0 ] || "",
						hrefNoHash:   matches[  1 ] || "",
						hrefNoSearch: matches[  2 ] || "",
						domain:       matches[  3 ] || "",
						protocol:     matches[  4 ] || "",
						doubleSlash:  matches[  5 ] || "",
						authority:    matches[  6 ] || "",
						username:     matches[  8 ] || "",
						password:     matches[  9 ] || "",
						host:         matches[ 10 ] || "",
						hostname:     matches[ 11 ] || "",
						port:         matches[ 12 ] || "",
						pathname:     matches[ 13 ] || "",
						directory:    matches[ 14 ] || "",
						filename:     matches[ 15 ] || "",
						search:       matches[ 16 ] || "",
						hash:         matches[ 17 ] || ""
					};
			},

			//Turn relPath into an asbolute path. absPath is
			//an optional absolute path which describes what
			//relPath is relative to.
			makePathAbsolute: function( relPath, absPath ) {
				var absStack,
					relStack,
					i, d;

				if ( relPath && relPath.charAt( 0 ) === "/" ) {
					return relPath;
				}

				relPath = relPath || "";
				absPath = absPath ? absPath.replace( /^\/|(\/[^\/]*|[^\/]+)$/g, "" ) : "";

				absStack = absPath ? absPath.split( "/" ) : [];
				relStack = relPath.split( "/" );

				for ( i = 0; i < relStack.length; i++ ) {
					d = relStack[ i ];
					switch ( d ) {
						case ".":
							break;
						case "..":
							if ( absStack.length ) {
								absStack.pop();
							}
							break;
						default:
							absStack.push( d );
							break;
					}
				}
				return "/" + absStack.join( "/" );
			},

			//Returns true if both urls have the same domain.
			isSameDomain: function( absUrl1, absUrl2 ) {
				return path.parseUrl( absUrl1 ).domain === path.parseUrl( absUrl2 ).domain;
			},

			//Returns true for any relative variant.
			isRelativeUrl: function( url ) {
				// All relative Url variants have one thing in common, no protocol.
				return path.parseUrl( url ).protocol === "";
			},

			//Returns true for an absolute url.
			isAbsoluteUrl: function( url ) {
				return path.parseUrl( url ).protocol !== "";
			},

			//Turn the specified realtive URL into an absolute one. This function
			//can handle all relative variants (protocol, site, document, query, fragment).
			makeUrlAbsolute: function( relUrl, absUrl ) {
				if ( !path.isRelativeUrl( relUrl ) ) {
					return relUrl;
				}

				if ( absUrl === undefined ) {
					absUrl = this.documentBase;
				}

				var relObj = path.parseUrl( relUrl ),
					absObj = path.parseUrl( absUrl ),
					protocol = relObj.protocol || absObj.protocol,
					doubleSlash = relObj.protocol ? relObj.doubleSlash : ( relObj.doubleSlash || absObj.doubleSlash ),
					authority = relObj.authority || absObj.authority,
					hasPath = relObj.pathname !== "",
					pathname = path.makePathAbsolute( relObj.pathname || absObj.filename, absObj.pathname ),
					search = relObj.search || ( !hasPath && absObj.search ) || "",
					hash = relObj.hash;

				return protocol + doubleSlash + authority + pathname + search + hash;
			},

			//Add search (aka query) params to the specified url.
			addSearchParams: function( url, params ) {
				var u = path.parseUrl( url ),
					p = ( typeof params === "object" ) ? $.param( params ) : params,
					s = u.search || "?";
				return u.hrefNoSearch + s + ( s.charAt( s.length - 1 ) !== "?" ? "&" : "" ) + p + ( u.hash || "" );
			},

			convertUrlToDataUrl: function( absUrl ) {
				var u = path.parseUrl( absUrl );
				if ( path.isEmbeddedPage( u ) ) {
					// For embedded pages, remove the dialog hash key as in getFilePath(),
					// and remove otherwise the Data Url won't match the id of the embedded Page.
					return u.hash
						.split( dialogHashKey )[0]
						.replace( /^#/, "" )
						.replace( /\?.*$/, "" );
				} else if ( path.isSameDomain( u, this.documentBase ) ) {
					return u.hrefNoHash.replace( this.documentBase.domain, "" ).split( dialogHashKey )[0];
				}

				return window.decodeURIComponent(absUrl);
			},

			//get path from current hash, or from a file path
			get: function( newPath ) {
				if ( newPath === undefined ) {
					newPath = path.parseLocation().hash;
				}
				return path.stripHash( newPath ).replace( /[^\/]*\.[^\/*]+$/, "" );
			},

			//set location hash to path
			set: function( path ) {
				location.hash = path;
			},

			//test if a given url (string) is a path
			//NOTE might be exceptionally naive
			isPath: function( url ) {
				return ( /\// ).test( url );
			},

			//return a url path with the window's location protocol/hostname/pathname removed
			clean: function( url ) {
				return url.replace( this.documentBase.domain, "" );
			},

			//just return the url without an initial #
			stripHash: function( url ) {
				return url.replace( /^#/, "" );
			},

			stripQueryParams: function( url ) {
				return url.replace( /\?.*$/, "" );
			},

			//remove the preceding hash, any query params, and dialog notations
			cleanHash: function( hash ) {
				return path.stripHash( hash.replace( /\?.*$/, "" ).replace( dialogHashKey, "" ) );
			},

			isHashValid: function( hash ) {
				return ( /^#[^#]+$/ ).test( hash );
			},

			//check whether a url is referencing the same domain, or an external domain or different protocol
			//could be mailto, etc
			isExternal: function( url ) {
				var u = path.parseUrl( url );
				return u.protocol && u.domain !== this.documentUrl.domain ? true : false;
			},

			hasProtocol: function( url ) {
				return ( /^(:?\w+:)/ ).test( url );
			},

			isEmbeddedPage: function( url ) {
				var u = path.parseUrl( url );

				//if the path is absolute, then we need to compare the url against
				//both the this.documentUrl and the documentBase. The main reason for this
				//is that links embedded within external documents will refer to the
				//application document, whereas links embedded within the application
				//document will be resolved against the document base.
				if ( u.protocol !== "" ) {
					return ( !this.isPath(u.hash) && u.hash && ( u.hrefNoHash === this.documentUrl.hrefNoHash || ( this.documentBaseDiffers && u.hrefNoHash === this.documentBase.hrefNoHash ) ) );
				}
				return ( /^#/ ).test( u.href );
			},

			squash: function( url, resolutionUrl ) {
				var href, cleanedUrl, search, stateIndex,
					isPath = this.isPath( url ),
					uri = this.parseUrl( url ),
					preservedHash = uri.hash,
					uiState = "";

				// produce a url against which we can resole the provided path
				resolutionUrl = resolutionUrl || (path.isPath(url) ? path.getLocation() : path.getDocumentUrl());

				// If the url is anything but a simple string, remove any preceding hash
				// eg #foo/bar -> foo/bar
				//    #foo -> #foo
				cleanedUrl = isPath ? path.stripHash( url ) : url;

				// If the url is a full url with a hash check if the parsed hash is a path
				// if it is, strip the #, and use it otherwise continue without change
				cleanedUrl = path.isPath( uri.hash ) ? path.stripHash( uri.hash ) : cleanedUrl;

				// Split the UI State keys off the href
				stateIndex = cleanedUrl.indexOf( this.uiStateKey );

				// store the ui state keys for use
				if ( stateIndex > -1 ) {
					uiState = cleanedUrl.slice( stateIndex );
					cleanedUrl = cleanedUrl.slice( 0, stateIndex );
				}

				// make the cleanedUrl absolute relative to the resolution url
				href = path.makeUrlAbsolute( cleanedUrl, resolutionUrl );

				// grab the search from the resolved url since parsing from
				// the passed url may not yield the correct result
				search = this.parseUrl( href ).search;

				// TODO all this crap is terrible, clean it up
				if ( isPath ) {
					// reject the hash if it's a path or it's just a dialog key
					if ( path.isPath( preservedHash ) || preservedHash.replace("#", "").indexOf( this.uiStateKey ) === 0) {
						preservedHash = "";
					}

					// Append the UI State keys where it exists and it's been removed
					// from the url
					if ( uiState && preservedHash.indexOf( this.uiStateKey ) === -1) {
						preservedHash += uiState;
					}

					// make sure that pound is on the front of the hash
					if ( preservedHash.indexOf( "#" ) === -1 && preservedHash !== "" ) {
						preservedHash = "#" + preservedHash;
					}

					// reconstruct each of the pieces with the new search string and hash
					href = path.parseUrl( href );
					href = href.protocol + "//" + href.host + href.pathname + search + preservedHash;
				} else {
					href += href.indexOf( "#" ) > -1 ? uiState : "#" + uiState;
				}

				return href;
			},

			isPreservableHash: function( hash ) {
				return hash.replace( "#", "" ).indexOf( this.uiStateKey ) === 0;
			},

			// Escape weird characters in the hash if it is to be used as a selector
			hashToSelector: function( hash ) {
				var hasHash = ( hash.substring( 0, 1 ) === "#" );
				if ( hasHash ) {
					hash = hash.substring( 1 );
				}
				return ( hasHash ? "#" : "" ) + hash.replace( /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, "\\$1" );
			},

			// return the substring of a filepath before the sub-page key, for making
			// a server request
			getFilePath: function( path ) {
				var splitkey = "&" + $.mobile.subPageUrlKey;
				return path && path.split( splitkey )[0].split( dialogHashKey )[0];
			},

			// check if the specified url refers to the first page in the main
			// application document.
			isFirstPageUrl: function( url ) {
				// We only deal with absolute paths.
				var u = path.parseUrl( path.makeUrlAbsolute( url, this.documentBase ) ),

					// Does the url have the same path as the document?
					samePath = u.hrefNoHash === this.documentUrl.hrefNoHash ||
						( this.documentBaseDiffers &&
							u.hrefNoHash === this.documentBase.hrefNoHash ),

					// Get the first page element.
					fp = $.mobile.firstPage,

					// Get the id of the first page element if it has one.
					fpId = fp && fp[0] ? fp[0].id : undefined;

				// The url refers to the first page if the path matches the document and
				// it either has no hash value, or the hash is exactly equal to the id
				// of the first page element.
				return samePath &&
					( !u.hash ||
						u.hash === "#" ||
						( fpId && u.hash.replace( /^#/, "" ) === fpId ) );
			},

			// Some embedded browsers, like the web view in Phone Gap, allow
			// cross-domain XHR requests if the document doing the request was loaded
			// via the file:// protocol. This is usually to allow the application to
			// "phone home" and fetch app specific data. We normally let the browser
			// handle external/cross-domain urls, but if the allowCrossDomainPages
			// option is true, we will allow cross-domain http/https requests to go
			// through our page loading logic.
			isPermittedCrossDomainRequest: function( docUrl, reqUrl ) {
				return $.mobile.allowCrossDomainPages &&
					(docUrl.protocol === "file:" || docUrl.protocol === "content:") &&
					reqUrl.search( /^https?:/ ) !== -1;
			}
		};

		path.documentUrl = path.parseLocation();

		$base = $( "head" ).find( "base" );

		path.documentBase = $base.length ?
			path.parseUrl( path.makeUrlAbsolute( $base.attr( "href" ), path.documentUrl.href ) ) :
			path.documentUrl;

		path.documentBaseDiffers = (path.documentUrl.hrefNoHash !== path.documentBase.hrefNoHash);

		//return the original document base url
		path.getDocumentBase = function( asParsedObject ) {
			return asParsedObject ? $.extend( {}, path.documentBase ) : path.documentBase.href;
		};

		// DEPRECATED as of 1.4.0 - remove in 1.5.0
		$.extend( $.mobile, {

			//return the original document url
			getDocumentUrl: path.getDocumentUrl,

			//return the original document base url
			getDocumentBase: path.getDocumentBase
		});
})( jQuery );



(function( $, undefined ) {
	$.mobile.History = function( stack, index ) {
		this.stack = stack || [];
		this.activeIndex = index || 0;
	};

	$.extend($.mobile.History.prototype, {
		getActive: function() {
			return this.stack[ this.activeIndex ];
		},

		getLast: function() {
			return this.stack[ this.previousIndex ];
		},

		getNext: function() {
			return this.stack[ this.activeIndex + 1 ];
		},

		getPrev: function() {
			return this.stack[ this.activeIndex - 1 ];
		},

		// addNew is used whenever a new page is added
		add: function( url, data ) {
			data = data || {};

			//if there's forward history, wipe it
			if ( this.getNext() ) {
				this.clearForward();
			}

			// if the hash is included in the data make sure the shape
			// is consistent for comparison
			if ( data.hash && data.hash.indexOf( "#" ) === -1) {
				data.hash = "#" + data.hash;
			}

			data.url = url;
			this.stack.push( data );
			this.activeIndex = this.stack.length - 1;
		},

		//wipe urls ahead of active index
		clearForward: function() {
			this.stack = this.stack.slice( 0, this.activeIndex + 1 );
		},

		find: function( url, stack, earlyReturn ) {
			stack = stack || this.stack;

			var entry, i, length = stack.length, index;

			for ( i = 0; i < length; i++ ) {
				entry = stack[i];

				if ( decodeURIComponent(url) === decodeURIComponent(entry.url) ||
					decodeURIComponent(url) === decodeURIComponent(entry.hash) ) {
					index = i;

					if ( earlyReturn ) {
						return index;
					}
				}
			}

			return index;
		},

		closest: function( url ) {
			var closest, a = this.activeIndex;

			// First, take the slice of the history stack before the current index and search
			// for a url match. If one is found, we'll avoid avoid looking through forward history
			// NOTE the preference for backward history movement is driven by the fact that
			//      most mobile browsers only have a dedicated back button, and users rarely use
			//      the forward button in desktop browser anyhow
			closest = this.find( url, this.stack.slice(0, a) );

			// If nothing was found in backward history check forward. The `true`
			// value passed as the third parameter causes the find method to break
			// on the first match in the forward history slice. The starting index
			// of the slice must then be added to the result to get the element index
			// in the original history stack :( :(
			//
			// TODO this is hyper confusing and should be cleaned up (ugh so bad)
			if ( closest === undefined ) {
				closest = this.find( url, this.stack.slice(a), true );
				closest = closest === undefined ? closest : closest + a;
			}

			return closest;
		},

		direct: function( opts ) {
			var newActiveIndex = this.closest( opts.url ), a = this.activeIndex;

			// save new page index, null check to prevent falsey 0 result
			// record the previous index for reference
			if ( newActiveIndex !== undefined ) {
				this.activeIndex = newActiveIndex;
				this.previousIndex = a;
			}

			// invoke callbacks where appropriate
			//
			// TODO this is also convoluted and confusing
			if ( newActiveIndex < a ) {
				( opts.present || opts.back || $.noop )( this.getActive(), "back" );
			} else if ( newActiveIndex > a ) {
				( opts.present || opts.forward || $.noop )( this.getActive(), "forward" );
			} else if ( newActiveIndex === undefined && opts.missing ) {
				opts.missing( this.getActive() );
			}
		}
	});
})( jQuery );



(function( $, undefined ) {
	var path = $.mobile.path,
		initialHref = location.href;

	$.mobile.Navigator = function( history ) {
		this.history = history;
		this.ignoreInitialHashChange = true;

		$.mobile.window.bind({
			"popstate.history": $.proxy( this.popstate, this ),
			"hashchange.history": $.proxy( this.hashchange, this )
		});
	};

	$.extend($.mobile.Navigator.prototype, {
		squash: function( url, data ) {
			var state, href, hash = path.isPath(url) ? path.stripHash(url) : url;

			href = path.squash( url );

			// make sure to provide this information when it isn't explicitly set in the
			// data object that was passed to the squash method
			state = $.extend({
				hash: hash,
				url: href
			}, data);

			// replace the current url with the new href and store the state
			// Note that in some cases we might be replacing an url with the
			// same url. We do this anyways because we need to make sure that
			// all of our history entries have a state object associated with
			// them. This allows us to work around the case where $.mobile.back()
			// is called to transition from an external page to an embedded page.
			// In that particular case, a hashchange event is *NOT* generated by the browser.
			// Ensuring each history entry has a state object means that onPopState()
			// will always trigger our hashchange callback even when a hashchange event
			// is not fired.
			window.history.replaceState( state, state.title || document.title, href );

			return state;
		},

		hash: function( url, href ) {
			var parsed, loc, hash, resolved;

			// Grab the hash for recording. If the passed url is a path
			// we used the parsed version of the squashed url to reconstruct,
			// otherwise we assume it's a hash and store it directly
			parsed = path.parseUrl( url );
			loc = path.parseLocation();

			if ( loc.pathname + loc.search === parsed.pathname + parsed.search ) {
				// If the pathname and search of the passed url is identical to the current loc
				// then we must use the hash. Otherwise there will be no event
				// eg, url = "/foo/bar?baz#bang", location.href = "http://example.com/foo/bar?baz"
				hash = parsed.hash ? parsed.hash : parsed.pathname + parsed.search;
			} else if ( path.isPath(url) ) {
				resolved = path.parseUrl( href );
				// If the passed url is a path, make it domain relative and remove any trailing hash
				hash = resolved.pathname + resolved.search + (path.isPreservableHash( resolved.hash )? resolved.hash.replace( "#", "" ) : "");
			} else {
				hash = url;
			}

			return hash;
		},

		// TODO reconsider name
		go: function( url, data, noEvents ) {
			var state, href, hash, popstateEvent,
				isPopStateEvent = $.event.special.navigate.isPushStateEnabled();

			// Get the url as it would look squashed on to the current resolution url
			href = path.squash( url );

			// sort out what the hash sould be from the url
			hash = this.hash( url, href );

			// Here we prevent the next hash change or popstate event from doing any
			// history management. In the case of hashchange we don't swallow it
			// if there will be no hashchange fired (since that won't reset the value)
			// and will swallow the following hashchange
			if ( noEvents && hash !== path.stripHash(path.parseLocation().hash) ) {
				this.preventNextHashChange = noEvents;
			}

			// IMPORTANT in the case where popstate is supported the event will be triggered
			//      directly, stopping further execution - ie, interupting the flow of this
			//      method call to fire bindings at this expression. Below the navigate method
			//      there is a binding to catch this event and stop its propagation.
			//
			//      We then trigger a new popstate event on the window with a null state
			//      so that the navigate events can conclude their work properly
			//
			// if the url is a path we want to preserve the query params that are available on
			// the current url.
			this.preventHashAssignPopState = true;
			window.location.hash = hash;

			// If popstate is enabled and the browser triggers `popstate` events when the hash
			// is set (this often happens immediately in browsers like Chrome), then the
			// this flag will be set to false already. If it's a browser that does not trigger
			// a `popstate` on hash assignement or `replaceState` then we need avoid the branch
			// that swallows the event created by the popstate generated by the hash assignment
			// At the time of this writing this happens with Opera 12 and some version of IE
			this.preventHashAssignPopState = false;

			state = $.extend({
				url: href,
				hash: hash,
				title: document.title
			}, data);

			if ( isPopStateEvent ) {
				popstateEvent = new $.Event( "popstate" );
				popstateEvent.originalEvent = {
					type: "popstate",
					state: null
				};

				this.squash( url, state );

				// Trigger a new faux popstate event to replace the one that we
				// caught that was triggered by the hash setting above.
				if ( !noEvents ) {
					this.ignorePopState = true;
					$.mobile.window.trigger( popstateEvent );
				}
			}

			// record the history entry so that the information can be included
			// in hashchange event driven navigate events in a similar fashion to
			// the state that's provided by popstate
			this.history.add( state.url, state );
		},

		// This binding is intended to catch the popstate events that are fired
		// when execution of the `$.navigate` method stops at window.location.hash = url;
		// and completely prevent them from propagating. The popstate event will then be
		// retriggered after execution resumes
		//
		// TODO grab the original event here and use it for the synthetic event in the
		//      second half of the navigate execution that will follow this binding
		popstate: function( event ) {
			var hash, state;

			// Partly to support our test suite which manually alters the support
			// value to test hashchange. Partly to prevent all around weirdness
			if ( !$.event.special.navigate.isPushStateEnabled() ) {
				return;
			}

			// If this is the popstate triggered by the actual alteration of the hash
			// prevent it completely. History is tracked manually
			if ( this.preventHashAssignPopState ) {
				this.preventHashAssignPopState = false;
				event.stopImmediatePropagation();
				return;
			}

			// if this is the popstate triggered after the `replaceState` call in the go
			// method, then simply ignore it. The history entry has already been captured
			if ( this.ignorePopState ) {
				this.ignorePopState = false;
				return;
			}

			// If there is no state, and the history stack length is one were
			// probably getting the page load popstate fired by browsers like chrome
			// avoid it and set the one time flag to false.
			// TODO: Do we really need all these conditions? Comparing location hrefs
			// should be sufficient.
			if ( !event.originalEvent.state &&
				this.history.stack.length === 1 &&
				this.ignoreInitialHashChange ) {
				this.ignoreInitialHashChange = false;

				if ( location.href === initialHref ) {
					event.preventDefault();
					return;
				}
			}

			// account for direct manipulation of the hash. That is, we will receive a popstate
			// when the hash is changed by assignment, and it won't have a state associated. We
			// then need to squash the hash. See below for handling of hash assignment that
			// matches an existing history entry
			// TODO it might be better to only add to the history stack
			//      when the hash is adjacent to the active history entry
			hash = path.parseLocation().hash;
			if ( !event.originalEvent.state && hash ) {
				// squash the hash that's been assigned on the URL with replaceState
				// also grab the resulting state object for storage
				state = this.squash( hash );

				// record the new hash as an additional history entry
				// to match the browser's treatment of hash assignment
				this.history.add( state.url, state );

				// pass the newly created state information
				// along with the event
				event.historyState = state;

				// do not alter history, we've added a new history entry
				// so we know where we are
				return;
			}

			// If all else fails this is a popstate that comes from the back or forward buttons
			// make sure to set the state of our history stack properly, and record the directionality
			this.history.direct({
				url: (event.originalEvent.state || {}).url || hash,

				// When the url is either forward or backward in history include the entry
				// as data on the event object for merging as data in the navigate event
				present: function( historyEntry, direction ) {
					// make sure to create a new object to pass down as the navigate event data
					event.historyState = $.extend({}, historyEntry);
					event.historyState.direction = direction;
				}
			});
		},

		// NOTE must bind before `navigate` special event hashchange binding otherwise the
		//      navigation data won't be attached to the hashchange event in time for those
		//      bindings to attach it to the `navigate` special event
		// TODO add a check here that `hashchange.navigate` is bound already otherwise it's
		//      broken (exception?)
		hashchange: function( event ) {
			var history, hash;

			// If hashchange listening is explicitly disabled or pushstate is supported
			// avoid making use of the hashchange handler.
			if (!$.event.special.navigate.isHashChangeEnabled() ||
				$.event.special.navigate.isPushStateEnabled() ) {
				return;
			}

			// On occasion explicitly want to prevent the next hash from propogating because we only
			// with to alter the url to represent the new state do so here
			if ( this.preventNextHashChange ) {
				this.preventNextHashChange = false;
				event.stopImmediatePropagation();
				return;
			}

			history = this.history;
			hash = path.parseLocation().hash;

			// If this is a hashchange caused by the back or forward button
			// make sure to set the state of our history stack properly
			this.history.direct({
				url: hash,

				// When the url is either forward or backward in history include the entry
				// as data on the event object for merging as data in the navigate event
				present: function( historyEntry, direction ) {
					// make sure to create a new object to pass down as the navigate event data
					event.hashchangeState = $.extend({}, historyEntry);
					event.hashchangeState.direction = direction;
				},

				// When we don't find a hash in our history clearly we're aiming to go there
				// record the entry as new for future traversal
				//
				// NOTE it's not entirely clear that this is the right thing to do given that we
				//      can't know the users intention. It might be better to explicitly _not_
				//      support location.hash assignment in preference to $.navigate calls
				// TODO first arg to add should be the href, but it causes issues in identifying
				//      embeded pages
				missing: function() {
					history.add( hash, {
						hash: hash,
						title: document.title
					});
				}
			});
		}
	});
})( jQuery );



(function( $, undefined ) {
	// TODO consider queueing navigation activity until previous activities have completed
	//      so that end users don't have to think about it. Punting for now
	// TODO !! move the event bindings into callbacks on the navigate event
	$.mobile.navigate = function( url, data, noEvents ) {
		$.mobile.navigate.navigator.go( url, data, noEvents );
	};

	// expose the history on the navigate method in anticipation of full integration with
	// existing navigation functionalty that is tightly coupled to the history information
	$.mobile.navigate.history = new $.mobile.History();

	// instantiate an instance of the navigator for use within the $.navigate method
	$.mobile.navigate.navigator = new $.mobile.Navigator( $.mobile.navigate.history );

	var loc = $.mobile.path.parseLocation();
	$.mobile.navigate.history.add( loc.href, {hash: loc.hash} );
})( jQuery );


// This plugin is an experiment for abstracting away the touch and mouse
// events so that developers don't have to worry about which method of input
// the device their document is loaded on supports.
//
// The idea here is to allow the developer to register listeners for the
// basic mouse events, such as mousedown, mousemove, mouseup, and click,
// and the plugin will take care of registering the correct listeners
// behind the scenes to invoke the listener at the fastest possible time
// for that device, while still retaining the order of event firing in
// the traditional mouse environment, should multiple handlers be registered
// on the same element for different events.
//
// The current version exposes the following virtual events to jQuery bind methods:
// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

(function( $, window, document, undefined ) {

var dataPropertyName = "virtualMouseBindings",
	touchTargetPropertyName = "virtualTouchID",
	virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
	touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
	mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
	mouseEventProps = $.event.props.concat( mouseHookProps ),
	activeDocHandlers = {},
	resetTimerID = 0,
	startX = 0,
	startY = 0,
	didScroll = false,
	clickBlockList = [],
	blockMouseTriggers = false,
	blockTouchTriggers = false,
	eventCaptureSupported = "addEventListener" in document,
	$document = $( document ),
	nextTouchID = 1,
	lastTouchID = 0, threshold,
	i;

$.vmouse = {
	moveDistanceThreshold: 10,
	clickDistanceThreshold: 10,
	resetTimerDuration: 1500
};

function getNativeEvent( event ) {

	while ( event && typeof event.originalEvent !== "undefined" ) {
		event = event.originalEvent;
	}
	return event;
}

function createVirtualEvent( event, eventType ) {

	var t = event.type,
		oe, props, ne, prop, ct, touch, i, j, len;

	event = $.Event( event );
	event.type = eventType;

	oe = event.originalEvent;
	props = $.event.props;

	// addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
	// https://github.com/jquery/jquery-mobile/issues/3280
	if ( t.search( /^(mouse|click)/ ) > -1 ) {
		props = mouseEventProps;
	}

	// copy original event properties over to the new event
	// this would happen if we could call $.event.fix instead of $.Event
	// but we don't have a way to force an event to be fixed multiple times
	if ( oe ) {
		for ( i = props.length, prop; i; ) {
			prop = props[ --i ];
			event[ prop ] = oe[ prop ];
		}
	}

	// make sure that if the mouse and click virtual events are generated
	// without a .which one is defined
	if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ) {
		event.which = 1;
	}

	if ( t.search(/^touch/) !== -1 ) {
		ne = getNativeEvent( oe );
		t = ne.touches;
		ct = ne.changedTouches;
		touch = ( t && t.length ) ? t[0] : ( ( ct && ct.length ) ? ct[ 0 ] : undefined );

		if ( touch ) {
			for ( j = 0, len = touchEventProps.length; j < len; j++) {
				prop = touchEventProps[ j ];
				event[ prop ] = touch[ prop ];
			}
		}
	}

	return event;
}

function getVirtualBindingFlags( element ) {

	var flags = {},
		b, k;

	while ( element ) {

		b = $.data( element, dataPropertyName );

		for (  k in b ) {
			if ( b[ k ] ) {
				flags[ k ] = flags.hasVirtualBinding = true;
			}
		}
		element = element.parentNode;
	}
	return flags;
}

function getClosestElementWithVirtualBinding( element, eventType ) {
	var b;
	while ( element ) {

		b = $.data( element, dataPropertyName );

		if ( b && ( !eventType || b[ eventType ] ) ) {
			return element;
		}
		element = element.parentNode;
	}
	return null;
}

function enableTouchBindings() {
	blockTouchTriggers = false;
}

function disableTouchBindings() {
	blockTouchTriggers = true;
}

function enableMouseBindings() {
	lastTouchID = 0;
	clickBlockList.length = 0;
	blockMouseTriggers = false;

	// When mouse bindings are enabled, our
	// touch bindings are disabled.
	disableTouchBindings();
}

function disableMouseBindings() {
	// When mouse bindings are disabled, our
	// touch bindings are enabled.
	enableTouchBindings();
}

function startResetTimer() {
	clearResetTimer();
	resetTimerID = setTimeout( function() {
		resetTimerID = 0;
		enableMouseBindings();
	}, $.vmouse.resetTimerDuration );
}

function clearResetTimer() {
	if ( resetTimerID ) {
		clearTimeout( resetTimerID );
		resetTimerID = 0;
	}
}

function triggerVirtualEvent( eventType, event, flags ) {
	var ve;

	if ( ( flags && flags[ eventType ] ) ||
				( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

		ve = createVirtualEvent( event, eventType );

		$( event.target).trigger( ve );
	}

	return ve;
}

function mouseEventCallback( event ) {
	var touchID = $.data( event.target, touchTargetPropertyName ),
		ve;

	if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ) {
		ve = triggerVirtualEvent( "v" + event.type, event );
		if ( ve ) {
			if ( ve.isDefaultPrevented() ) {
				event.preventDefault();
			}
			if ( ve.isPropagationStopped() ) {
				event.stopPropagation();
			}
			if ( ve.isImmediatePropagationStopped() ) {
				event.stopImmediatePropagation();
			}
		}
	}
}

function handleTouchStart( event ) {

	var touches = getNativeEvent( event ).touches,
		target, flags, t;

	if ( touches && touches.length === 1 ) {

		target = event.target;
		flags = getVirtualBindingFlags( target );

		if ( flags.hasVirtualBinding ) {

			lastTouchID = nextTouchID++;
			$.data( target, touchTargetPropertyName, lastTouchID );

			clearResetTimer();

			disableMouseBindings();
			didScroll = false;

			t = getNativeEvent( event ).touches[ 0 ];
			startX = t.pageX;
			startY = t.pageY;

			triggerVirtualEvent( "vmouseover", event, flags );
			triggerVirtualEvent( "vmousedown", event, flags );
		}
	}
}

function handleScroll( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	if ( !didScroll ) {
		triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
	}

	didScroll = true;
	startResetTimer();
}

function handleTouchMove( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	var t = getNativeEvent( event ).touches[ 0 ],
		didCancel = didScroll,
		moveThreshold = $.vmouse.moveDistanceThreshold,
		flags = getVirtualBindingFlags( event.target );

		didScroll = didScroll ||
			( Math.abs( t.pageX - startX ) > moveThreshold ||
				Math.abs( t.pageY - startY ) > moveThreshold );

	if ( didScroll && !didCancel ) {
		triggerVirtualEvent( "vmousecancel", event, flags );
	}

	triggerVirtualEvent( "vmousemove", event, flags );
	startResetTimer();
}

function handleTouchEnd( event ) {
	if ( blockTouchTriggers ) {
		return;
	}

	disableTouchBindings();

	var flags = getVirtualBindingFlags( event.target ),
		ve, t;
	triggerVirtualEvent( "vmouseup", event, flags );

	if ( !didScroll ) {
		ve = triggerVirtualEvent( "vclick", event, flags );
		if ( ve && ve.isDefaultPrevented() ) {
			// The target of the mouse events that follow the touchend
			// event don't necessarily match the target used during the
			// touch. This means we need to rely on coordinates for blocking
			// any click that is generated.
			t = getNativeEvent( event ).changedTouches[ 0 ];
			clickBlockList.push({
				touchID: lastTouchID,
				x: t.clientX,
				y: t.clientY
			});

			// Prevent any mouse events that follow from triggering
			// virtual event notifications.
			blockMouseTriggers = true;
		}
	}
	triggerVirtualEvent( "vmouseout", event, flags);
	didScroll = false;

	startResetTimer();
}

function hasVirtualBindings( ele ) {
	var bindings = $.data( ele, dataPropertyName ),
		k;

	if ( bindings ) {
		for ( k in bindings ) {
			if ( bindings[ k ] ) {
				return true;
			}
		}
	}
	return false;
}

function dummyMouseHandler() {}

function getSpecialEventObject( eventType ) {
	var realType = eventType.substr( 1 );

	return {
		setup: function(/* data, namespace */) {
			// If this is the first virtual mouse binding for this element,
			// add a bindings object to its data.

			if ( !hasVirtualBindings( this ) ) {
				$.data( this, dataPropertyName, {} );
			}

			// If setup is called, we know it is the first binding for this
			// eventType, so initialize the count for the eventType to zero.
			var bindings = $.data( this, dataPropertyName );
			bindings[ eventType ] = true;

			// If this is the first virtual mouse event for this type,
			// register a global handler on the document.

			activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

			if ( activeDocHandlers[ eventType ] === 1 ) {
				$document.bind( realType, mouseEventCallback );
			}

			// Some browsers, like Opera Mini, won't dispatch mouse/click events
			// for elements unless they actually have handlers registered on them.
			// To get around this, we register dummy handlers on the elements.

			$( this ).bind( realType, dummyMouseHandler );

			// For now, if event capture is not supported, we rely on mouse handlers.
			if ( eventCaptureSupported ) {
				// If this is the first virtual mouse binding for the document,
				// register our touchstart handler on the document.

				activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

				if ( activeDocHandlers[ "touchstart" ] === 1 ) {
					$document.bind( "touchstart", handleTouchStart )
						.bind( "touchend", handleTouchEnd )

						// On touch platforms, touching the screen and then dragging your finger
						// causes the window content to scroll after some distance threshold is
						// exceeded. On these platforms, a scroll prevents a click event from being
						// dispatched, and on some platforms, even the touchend is suppressed. To
						// mimic the suppression of the click event, we need to watch for a scroll
						// event. Unfortunately, some platforms like iOS don't dispatch scroll
						// events until *AFTER* the user lifts their finger (touchend). This means
						// we need to watch both scroll and touchmove events to figure out whether
						// or not a scroll happenens before the touchend event is fired.

						.bind( "touchmove", handleTouchMove )
						.bind( "scroll", handleScroll );
				}
			}
		},

		teardown: function(/* data, namespace */) {
			// If this is the last virtual binding for this eventType,
			// remove its global handler from the document.

			--activeDocHandlers[ eventType ];

			if ( !activeDocHandlers[ eventType ] ) {
				$document.unbind( realType, mouseEventCallback );
			}

			if ( eventCaptureSupported ) {
				// If this is the last virtual mouse binding in existence,
				// remove our document touchstart listener.

				--activeDocHandlers[ "touchstart" ];

				if ( !activeDocHandlers[ "touchstart" ] ) {
					$document.unbind( "touchstart", handleTouchStart )
						.unbind( "touchmove", handleTouchMove )
						.unbind( "touchend", handleTouchEnd )
						.unbind( "scroll", handleScroll );
				}
			}

			var $this = $( this ),
				bindings = $.data( this, dataPropertyName );

			// teardown may be called when an element was
			// removed from the DOM. If this is the case,
			// jQuery core may have already stripped the element
			// of any data bindings so we need to check it before
			// using it.
			if ( bindings ) {
				bindings[ eventType ] = false;
			}

			// Unregister the dummy event handler.

			$this.unbind( realType, dummyMouseHandler );

			// If this is the last virtual mouse binding on the
			// element, remove the binding data from the element.

			if ( !hasVirtualBindings( this ) ) {
				$this.removeData( dataPropertyName );
			}
		}
	};
}

// Expose our custom events to the jQuery bind/unbind mechanism.

for ( i = 0; i < virtualEventNames.length; i++ ) {
	$.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
}

// Add a capture click handler to block clicks.
// Note that we require event capture support for this so if the device
// doesn't support it, we punt for now and rely solely on mouse events.
if ( eventCaptureSupported ) {
	document.addEventListener( "click", function( e ) {
		var cnt = clickBlockList.length,
			target = e.target,
			x, y, ele, i, o, touchID;

		if ( cnt ) {
			x = e.clientX;
			y = e.clientY;
			threshold = $.vmouse.clickDistanceThreshold;

			// The idea here is to run through the clickBlockList to see if
			// the current click event is in the proximity of one of our
			// vclick events that had preventDefault() called on it. If we find
			// one, then we block the click.
			//
			// Why do we have to rely on proximity?
			//
			// Because the target of the touch event that triggered the vclick
			// can be different from the target of the click event synthesized
			// by the browser. The target of a mouse/click event that is synthesized
			// from a touch event seems to be implementation specific. For example,
			// some browsers will fire mouse/click events for a link that is near
			// a touch event, even though the target of the touchstart/touchend event
			// says the user touched outside the link. Also, it seems that with most
			// browsers, the target of the mouse/click event is not calculated until the
			// time it is dispatched, so if you replace an element that you touched
			// with another element, the target of the mouse/click will be the new
			// element underneath that point.
			//
			// Aside from proximity, we also check to see if the target and any
			// of its ancestors were the ones that blocked a click. This is necessary
			// because of the strange mouse/click target calculation done in the
			// Android 2.1 browser, where if you click on an element, and there is a
			// mouse/click handler on one of its ancestors, the target will be the
			// innermost child of the touched element, even if that child is no where
			// near the point of touch.

			ele = target;

			while ( ele ) {
				for ( i = 0; i < cnt; i++ ) {
					o = clickBlockList[ i ];
					touchID = 0;

					if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
								$.data( ele, touchTargetPropertyName ) === o.touchID ) {
						// XXX: We may want to consider removing matches from the block list
						//      instead of waiting for the reset timer to fire.
						e.preventDefault();
						e.stopPropagation();
						return;
					}
				}
				ele = ele.parentNode;
			}
		}
	}, true);
}
})( jQuery, window, document );


(function( $, window, undefined ) {
	var $document = $( document ),
		supportTouch = $.mobile.support.touch,
		scrollEvent = "touchmove scroll",
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

	// setup new event shortcuts
	$.each( ( "touchstart touchmove touchend " +
		"tap taphold " +
		"swipe swipeleft swiperight " +
		"scrollstart scrollstop" ).split( " " ), function( i, name ) {

		$.fn[ name ] = function( fn ) {
			return fn ? this.bind( name, fn ) : this.trigger( name );
		};

		// jQuery < 1.8
		if ( $.attrFn ) {
			$.attrFn[ name ] = true;
		}
	});

	function triggerCustomEvent( obj, eventType, event ) {
		var originalType = event.type;
		event.type = eventType;
		$.event.dispatch.call( obj, event );
		event.type = originalType;
	}

	// also handles scrollstop
	$.event.special.scrollstart = {

		enabled: true,
		setup: function() {

			var thisObject = this,
				$this = $( thisObject ),
				scrolling,
				timer;

			function trigger( event, state ) {
				scrolling = state;
				triggerCustomEvent( thisObject, scrolling ? "scrollstart" : "scrollstop", event );
			}

			// iPhone triggers scroll after a small delay; use touchmove instead
			$this.bind( scrollEvent, function( event ) {

				if ( !$.event.special.scrollstart.enabled ) {
					return;
				}

				if ( !scrolling ) {
					trigger( event, true );
				}

				clearTimeout( timer );
				timer = setTimeout( function() {
					trigger( event, false );
				}, 50 );
			});
		},
		teardown: function() {
			$( this ).unbind( scrollEvent );
		}
	};

	// also handles taphold
	$.event.special.tap = {
		tapholdThreshold: 750,
		emitTapOnTaphold: true,
		setup: function() {
			var thisObject = this,
				$this = $( thisObject ),
				isTaphold = false;

			$this.bind( "vmousedown", function( event ) {
				isTaphold = false;
				if ( event.which && event.which !== 1 ) {
					return false;
				}

				var origTarget = event.target,
					timer;

				function clearTapTimer() {
					clearTimeout( timer );
				}

				function clearTapHandlers() {
					clearTapTimer();

					$this.unbind( "vclick", clickHandler )
						.unbind( "vmouseup", clearTapTimer );
					$document.unbind( "vmousecancel", clearTapHandlers );
				}

				function clickHandler( event ) {
					clearTapHandlers();

					// ONLY trigger a 'tap' event if the start target is
					// the same as the stop target.
					if ( !isTaphold && origTarget === event.target ) {
						triggerCustomEvent( thisObject, "tap", event );
					} else if ( isTaphold ) {
						event.stopPropagation();
					}
				}

				$this.bind( "vmouseup", clearTapTimer )
					.bind( "vclick", clickHandler );
				$document.bind( "vmousecancel", clearTapHandlers );

				timer = setTimeout( function() {
					if ( !$.event.special.tap.emitTapOnTaphold ) {
						isTaphold = true;
					}
					triggerCustomEvent( thisObject, "taphold", $.Event( "taphold", { target: origTarget } ) );
				}, $.event.special.tap.tapholdThreshold );
			});
		},
		teardown: function() {
			$( this ).unbind( "vmousedown" ).unbind( "vclick" ).unbind( "vmouseup" );
			$document.unbind( "vmousecancel" );
		}
	};

	// also handles swipeleft, swiperight
	$.event.special.swipe = {
		scrollSupressionThreshold: 30, // More than this horizontal displacement, and we will suppress scrolling.

		durationThreshold: 1000, // More time than this, and it isn't a swipe.

		horizontalDistanceThreshold: 30,  // Swipe horizontal displacement must be more than this.

		verticalDistanceThreshold: 75,  // Swipe vertical displacement must be less than this.

		start: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event;
			return {
						time: ( new Date() ).getTime(),
						coords: [ data.pageX, data.pageY ],
						origin: $( event.target )
					};
		},

		stop: function( event ) {
			var data = event.originalEvent.touches ?
					event.originalEvent.touches[ 0 ] : event;
			return {
						time: ( new Date() ).getTime(),
						coords: [ data.pageX, data.pageY ]
					};
		},

		handleSwipe: function( start, stop, thisObject, origTarget ) {
			if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
				Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
				Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
				var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

				triggerCustomEvent( thisObject, "swipe", $.Event( "swipe", { target: origTarget, swipestart: start, swipestop: stop }) );
				triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ) );
				return true;
			}
			return false;

		},

		setup: function() {
			var thisObject = this,
				$this = $( thisObject );

			$this.bind( touchStartEvent, function( event ) {
				var stop,
					start = $.event.special.swipe.start( event ),
					origTarget = event.target,
					emitted = false;

				function moveHandler( event ) {
					if ( !start ) {
						return;
					}

					stop = $.event.special.swipe.stop( event );
					if ( !emitted ) {
						emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
					}
					// prevent scrolling
					if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
						event.preventDefault();
					}
				}

				$this.bind( touchMoveEvent, moveHandler )
					.one( touchStopEvent, function() {
						emitted = true;
						$this.unbind( touchMoveEvent, moveHandler );
				});
			});
		},

		teardown: function() {
			$( this ).unbind( touchStartEvent ).unbind( touchMoveEvent ).unbind( touchStopEvent );
		}
	};
	$.each({
		scrollstop: "scrollstart",
		taphold: "tap",
		swipeleft: "swipe",
		swiperight: "swipe"
	}, function( event, sourceEvent ) {

		$.event.special[ event ] = {
			setup: function() {
				$( this ).bind( sourceEvent, $.noop );
			},
			teardown: function() {
				$( this ).unbind( sourceEvent );
			}
		};
	});

})( jQuery, this );


	// throttled resize event
	(function( $ ) {
		$.event.special.throttledresize = {
			setup: function() {
				$( this ).bind( "resize", handler );
			},
			teardown: function() {
				$( this ).unbind( "resize", handler );
			}
		};

		var throttle = 250,
			handler = function() {
				curr = ( new Date() ).getTime();
				diff = curr - lastCall;

				if ( diff >= throttle ) {

					lastCall = curr;
					$( this ).trigger( "throttledresize" );

				} else {

					if ( heldCall ) {
						clearTimeout( heldCall );
					}

					// Promise a held call will still execute
					heldCall = setTimeout( handler, throttle - diff );
				}
			},
			lastCall = 0,
			heldCall,
			curr,
			diff;
	})( jQuery );


(function( $, window ) {
	var win = $( window ),
		event_name = "orientationchange",
		get_orientation,
		last_orientation,
		initial_orientation_is_landscape,
		initial_orientation_is_default,
		portrait_map = { "0": true, "180": true },
		ww, wh, landscape_threshold;

	// It seems that some device/browser vendors use window.orientation values 0 and 180 to
	// denote the "default" orientation. For iOS devices, and most other smart-phones tested,
	// the default orientation is always "portrait", but in some Android and RIM based tablets,
	// the default orientation is "landscape". The following code attempts to use the window
	// dimensions to figure out what the current orientation is, and then makes adjustments
	// to the to the portrait_map if necessary, so that we can properly decode the
	// window.orientation value whenever get_orientation() is called.
	//
	// Note that we used to use a media query to figure out what the orientation the browser
	// thinks it is in:
	//
	//     initial_orientation_is_landscape = $.mobile.media("all and (orientation: landscape)");
	//
	// but there was an iPhone/iPod Touch bug beginning with iOS 4.2, up through iOS 5.1,
	// where the browser *ALWAYS* applied the landscape media query. This bug does not
	// happen on iPad.

	if ( $.support.orientation ) {

		// Check the window width and height to figure out what the current orientation
		// of the device is at this moment. Note that we've initialized the portrait map
		// values to 0 and 180, *AND* we purposely check for landscape so that if we guess
		// wrong, , we default to the assumption that portrait is the default orientation.
		// We use a threshold check below because on some platforms like iOS, the iPhone
		// form-factor can report a larger width than height if the user turns on the
		// developer console. The actual threshold value is somewhat arbitrary, we just
		// need to make sure it is large enough to exclude the developer console case.

		ww = window.innerWidth || win.width();
		wh = window.innerHeight || win.height();
		landscape_threshold = 50;

		initial_orientation_is_landscape = ww > wh && ( ww - wh ) > landscape_threshold;

		// Now check to see if the current window.orientation is 0 or 180.
		initial_orientation_is_default = portrait_map[ window.orientation ];

		// If the initial orientation is landscape, but window.orientation reports 0 or 180, *OR*
		// if the initial orientation is portrait, but window.orientation reports 90 or -90, we
		// need to flip our portrait_map values because landscape is the default orientation for
		// this device/browser.
		if ( ( initial_orientation_is_landscape && initial_orientation_is_default ) || ( !initial_orientation_is_landscape && !initial_orientation_is_default ) ) {
			portrait_map = { "-90": true, "90": true };
		}
	}

	$.event.special.orientationchange = $.extend( {}, $.event.special.orientationchange, {
		setup: function() {
			// If the event is supported natively, return false so that jQuery
			// will bind to the event using DOM methods.
			if ( $.support.orientation && !$.event.special.orientationchange.disabled ) {
				return false;
			}

			// Get the current orientation to avoid initial double-triggering.
			last_orientation = get_orientation();

			// Because the orientationchange event doesn't exist, simulate the
			// event by testing window dimensions on resize.
			win.bind( "throttledresize", handler );
		},
		teardown: function() {
			// If the event is not supported natively, return false so that
			// jQuery will unbind the event using DOM methods.
			if ( $.support.orientation && !$.event.special.orientationchange.disabled ) {
				return false;
			}

			// Because the orientationchange event doesn't exist, unbind the
			// resize event handler.
			win.unbind( "throttledresize", handler );
		},
		add: function( handleObj ) {
			// Save a reference to the bound event handler.
			var old_handler = handleObj.handler;

			handleObj.handler = function( event ) {
				// Modify event object, adding the .orientation property.
				event.orientation = get_orientation();

				// Call the originally-bound event handler and return its result.
				return old_handler.apply( this, arguments );
			};
		}
	});

	// If the event is not supported natively, this handler will be bound to
	// the window resize event to simulate the orientationchange event.
	function handler() {
		// Get the current orientation.
		var orientation = get_orientation();

		if ( orientation !== last_orientation ) {
			// The orientation has changed, so trigger the orientationchange event.
			last_orientation = orientation;
			win.trigger( event_name );
		}
	}

	// Get the current page orientation. This method is exposed publicly, should it
	// be needed, as jQuery.event.special.orientationchange.orientation()
	$.event.special.orientationchange.orientation = get_orientation = function() {
		var isPortrait = true, elem = document.documentElement;

		// prefer window orientation to the calculation based on screensize as
		// the actual screen resize takes place before or after the orientation change event
		// has been fired depending on implementation (eg android 2.3 is before, iphone after).
		// More testing is required to determine if a more reliable method of determining the new screensize
		// is possible when orientationchange is fired. (eg, use media queries + element + opacity)
		if ( $.support.orientation ) {
			// if the window orientation registers as 0 or 180 degrees report
			// portrait, otherwise landscape
			isPortrait = portrait_map[ window.orientation ];
		} else {
			isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
		}

		return isPortrait ? "portrait" : "landscape";
	};

	$.fn[ event_name ] = function( fn ) {
		return fn ? this.bind( event_name, fn ) : this.trigger( event_name );
	};

	// jQuery < 1.8
	if ( $.attrFn ) {
		$.attrFn[ event_name ] = true;
	}

}( jQuery, this ));




(function( $, undefined ) {

	// existing base tag?
	var baseElement = $( "head" ).children( "base" ),

	// base element management, defined depending on dynamic base tag support
	// TODO move to external widget
	base = {

		// define base element, for use in routing asset urls that are referenced
		// in Ajax-requested markup
		element: ( baseElement.length ? baseElement :
			$( "<base>", { href: $.mobile.path.documentBase.hrefNoHash } ).prependTo( $( "head" ) ) ),

		linkSelector: "[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",

		// set the generated BASE element's href to a new page's base path
		set: function( href ) {

			// we should do nothing if the user wants to manage their url base
			// manually
			if ( !$.mobile.dynamicBaseEnabled ) {
				return;
			}

			// we should use the base tag if we can manipulate it dynamically
			if ( $.support.dynamicBaseTag ) {
				base.element.attr( "href",
					$.mobile.path.makeUrlAbsolute( href, $.mobile.path.documentBase ) );
			}
		},

		rewrite: function( href, page ) {
			var newPath = $.mobile.path.get( href );

			page.find( base.linkSelector ).each(function( i, link ) {
				var thisAttr = $( link ).is( "[href]" ) ? "href" :
					$( link ).is( "[src]" ) ? "src" : "action",
				thisUrl = $( link ).attr( thisAttr );

				// XXX_jblas: We need to fix this so that it removes the document
				//            base URL, and then prepends with the new page URL.
				// if full path exists and is same, chop it - helps IE out
				thisUrl = thisUrl.replace( location.protocol + "//" +
					location.host + location.pathname, "" );

				if ( !/^(\w+:|#|\/)/.test( thisUrl ) ) {
					$( link ).attr( thisAttr, newPath + thisUrl );
				}
			});
		},

		// set the generated BASE element's href to a new page's base path
		reset: function(/* href */) {
			base.element.attr( "href", $.mobile.path.documentBase.hrefNoSearch );
		}
	};

	$.mobile.base = base;

})( jQuery );


(function( $, undefined ) {
$.mobile.widgets = {};

var originalWidget = $.widget,

	// Record the original, non-mobileinit-modified version of $.mobile.keepNative
	// so we can later determine whether someone has modified $.mobile.keepNative
	keepNativeFactoryDefault = $.mobile.keepNative;

$.widget = (function( orig ) {
	return function() {
		var constructor = orig.apply( this, arguments ),
			name = constructor.prototype.widgetName;

		constructor.initSelector = ( ( constructor.prototype.initSelector !== undefined ) ?
			constructor.prototype.initSelector : ":jqmData(role='" + name + "')" );

		$.mobile.widgets[ name ] = constructor;

		return constructor;
	};
})( $.widget );

// Make sure $.widget still has bridge and extend methods
$.extend( $.widget, originalWidget );

// For backcompat remove in 1.5
$.mobile.document.on( "create", function( event ) {
	$( event.target ).enhanceWithin();
});

$.widget( "mobile.page", {
	options: {
		theme: "a",
		domCache: false,

		// Deprecated in 1.4 remove in 1.5
		keepNativeDefault: $.mobile.keepNative,

		// Deprecated in 1.4 remove in 1.5
		contentTheme: null,
		enhanced: false
	},

	// DEPRECATED for > 1.4
	// TODO remove at 1.5
	_createWidget: function() {
		$.Widget.prototype._createWidget.apply( this, arguments );
		this._trigger( "init" );
	},

	_create: function() {
		// If false is returned by the callbacks do not create the page
		if ( this._trigger( "beforecreate" ) === false ) {
			return false;
		}

		if ( !this.options.enhanced ) {
			this._enhance();
		}

		this._on( this.element, {
			pagebeforehide: "removeContainerBackground",
			pagebeforeshow: "_handlePageBeforeShow"
		});

		this.element.enhanceWithin();
		// Dialog widget is deprecated in 1.4 remove this in 1.5
		if ( $.mobile.getAttribute( this.element[0], "role" ) === "dialog" && $.mobile.dialog ) {
			this.element.dialog();
		}
	},

	_enhance: function () {
		var attrPrefix = "data-" + $.mobile.ns,
			self = this;

		if ( this.options.role ) {
			this.element.attr( "data-" + $.mobile.ns + "role", this.options.role );
		}

		this.element
			.attr( "tabindex", "0" )
			.addClass( "ui-page ui-page-theme-" + this.options.theme );

		// Manipulation of content os Deprecated as of 1.4 remove in 1.5
		this.element.find( "[" + attrPrefix + "role='content']" ).each( function() {
			var $this = $( this ),
				theme = this.getAttribute( attrPrefix + "theme" ) || undefined;
				self.options.contentTheme = theme || self.options.contentTheme || ( self.options.dialog && self.options.theme ) || ( self.element.jqmData("role") === "dialog" &&  self.options.theme );
				$this.addClass( "ui-content" );
				if ( self.options.contentTheme ) {
					$this.addClass( "ui-body-" + ( self.options.contentTheme ) );
				}
				// Add ARIA role
				$this.attr( "role", "main" ).addClass( "ui-content" );
		});
	},

	bindRemove: function( callback ) {
		var page = this.element;

		// when dom caching is not enabled or the page is embedded bind to remove the page on hide
		if ( !page.data( "mobile-page" ).options.domCache &&
			page.is( ":jqmData(external-page='true')" ) ) {

			// TODO use _on - that is, sort out why it doesn't work in this case
			page.bind( "pagehide.remove", callback || function( e, data ) {

				//check if this is a same page transition and if so don't remove the page
				if( !data.samePage ){
					var $this = $( this ),
						prEvent = new $.Event( "pageremove" );

					$this.trigger( prEvent );

					if ( !prEvent.isDefaultPrevented() ) {
						$this.removeWithDependents();
					}
				}
			});
		}
	},

	_setOptions: function( o ) {
		if ( o.theme !== undefined ) {
			this.element.removeClass( "ui-body-" + this.options.theme ).addClass( "ui-body-" + o.theme );
		}

		if ( o.contentTheme !== undefined ) {
			this.element.find( "[data-" + $.mobile.ns + "='content']" ).removeClass( "ui-body-" + this.options.contentTheme )
				.addClass( "ui-body-" + o.contentTheme );
		}
	},

	_handlePageBeforeShow: function(/* e */) {
		this.setContainerBackground();
	},
	// Deprecated in 1.4 remove in 1.5
	removeContainerBackground: function() {
		this.element.closest( ":mobile-pagecontainer" ).pagecontainer({ "theme": "none" });
	},
	// Deprecated in 1.4 remove in 1.5
	// set the page container background to the page theme
	setContainerBackground: function( theme ) {
		this.element.parent().pagecontainer( { "theme": theme || this.options.theme } );
	},
	// Deprecated in 1.4 remove in 1.5
	keepNativeSelector: function() {
		var options = this.options,
			keepNative = $.trim( options.keepNative || "" ),
			globalValue = $.trim( $.mobile.keepNative ),
			optionValue = $.trim( options.keepNativeDefault ),

			// Check if $.mobile.keepNative has changed from the factory default
			newDefault = ( keepNativeFactoryDefault === globalValue ?
				"" : globalValue ),

			// If $.mobile.keepNative has not changed, use options.keepNativeDefault
			oldDefault = ( newDefault === "" ? optionValue : "" );

		// Concatenate keepNative selectors from all sources where the value has
		// changed or, if nothing has changed, return the default
		return ( ( keepNative ? [ keepNative ] : [] )
			.concat( newDefault ? [ newDefault ] : [] )
			.concat( oldDefault ? [ oldDefault ] : [] )
			.join( ", " ) );
	}
});
})( jQuery );

(function( $, undefined ) {

	$.widget( "mobile.pagecontainer", {
		options: {
			theme: "a"
		},

		initSelector: false,

		_create: function() {
			this.setLastScrollEnabled = true;

			// TODO consider moving the navigation handler OUT of widget into
			//      some other object as glue between the navigate event and the
			//      content widget load and change methods
			this._on( this.window, { navigate: "_filterNavigateEvents" });

			this._on( this.window, {
				// disable an scroll setting when a hashchange has been fired,
				// this only works because the recording of the scroll position
				// is delayed for 100ms after the browser might have changed the
				// position because of the hashchange
				navigate: "_disableRecordScroll",

				// bind to scrollstop for the first page, "pagechange" won't be
				// fired in that case
				scrollstop: "_delayedRecordScroll"
			});

			// TODO move from page* events to content* events
			this._on({ pagechange: "_afterContentChange" });

			// handle initial hashchange from chrome :(
			this.window.one( "navigate", $.proxy(function() {
				this.setLastScrollEnabled = true;
			}, this));
		},

		_setOptions: function( options ) {
			if ( options.theme !== undefined && options.theme !== "none" ) {
				this.element.removeClass( "ui-overlay-" + this.options.theme )
					.addClass( "ui-overlay-" + options.theme );
			} else if ( options.theme !== undefined ) {
				this.element.removeClass( "ui-overlay-" + this.options.theme );
			}

			this._super( options );
		},

		_disableRecordScroll: function() {
			this.setLastScrollEnabled = false;
		},

		_enableRecordScroll: function() {
			this.setLastScrollEnabled = true;
		},

		// TODO consider the name here, since it's purpose specific
		_afterContentChange: function() {
			// once the page has changed, re-enable the scroll recording
			this.setLastScrollEnabled = true;

			// remove any binding that previously existed on the get scroll
			// which may or may not be different than the scroll element
			// determined for this page previously
			this._off( this.window, "scrollstop" );

			// determine and bind to the current scoll element which may be the
			// window or in the case of touch overflow the element touch overflow
			this._on( this.window, { scrollstop: "_delayedRecordScroll" });
		},

		_recordScroll: function() {
			// this barrier prevents setting the scroll value based on
			// the browser scrolling the window based on a hashchange
			if ( !this.setLastScrollEnabled ) {
				return;
			}

			var active = this._getActiveHistory(),
				currentScroll, minScroll, defaultScroll;

			if ( active ) {
				currentScroll = this._getScroll();
				minScroll = this._getMinScroll();
				defaultScroll = this._getDefaultScroll();

				// Set active page's lastScroll prop. If the location we're
				// scrolling to is less than minScrollBack, let it go.
				active.lastScroll = currentScroll < minScroll ? defaultScroll : currentScroll;
			}
		},

		_delayedRecordScroll: function() {
			setTimeout( $.proxy(this, "_recordScroll"), 100 );
		},

		_getScroll: function() {
			return this.window.scrollTop();
		},

		_getMinScroll: function() {
			return $.mobile.minScrollBack;
		},

		_getDefaultScroll: function() {
			return $.mobile.defaultHomeScroll;
		},

		_filterNavigateEvents: function( e, data ) {
			var url;

			if ( e.originalEvent && e.originalEvent.isDefaultPrevented() ) {
				return;
			}

			url = e.originalEvent.type.indexOf( "hashchange" ) > -1 ? data.state.hash : data.state.url;

			if ( !url ) {
				url = this._getHash();
			}

			if ( !url || url === "#" || url.indexOf( "#" + $.mobile.path.uiStateKey ) === 0 ) {
				url = location.href;
			}

			this._handleNavigate( url, data.state );
		},

		_getHash: function() {
			return $.mobile.path.parseLocation().hash;
		},

		// TODO active page should be managed by the container (ie, it should be a property)
		getActivePage: function() {
			return this.activePage;
		},

		// TODO the first page should be a property set during _create using the logic
		//      that currently resides in init
		_getInitialContent: function() {
			return $.mobile.firstPage;
		},

		// TODO each content container should have a history object
		_getHistory: function() {
			return $.mobile.navigate.history;
		},

		// TODO use _getHistory
		_getActiveHistory: function() {
			return $.mobile.navigate.history.getActive();
		},

		// TODO the document base should be determined at creation
		_getDocumentBase: function() {
			return $.mobile.path.documentBase;
		},

		back: function() {
			this.go( -1 );
		},

		forward: function() {
			this.go( 1 );
		},

		go: function( steps ) {

			//if hashlistening is enabled use native history method
			if ( $.mobile.hashListeningEnabled ) {
				window.history.go( steps );
			} else {

				//we are not listening to the hash so handle history internally
				var activeIndex = $.mobile.navigate.history.activeIndex,
					index = activeIndex + parseInt( steps, 10 ),
					url = $.mobile.navigate.history.stack[ index ].url,
					direction = ( steps >= 1 )? "forward" : "back";

				//update the history object
				$.mobile.navigate.history.activeIndex = index;
				$.mobile.navigate.history.previousIndex = activeIndex;

				//change to the new page
				this.change( url, { direction: direction, changeHash: false, fromHashChange: true } );
			}
		},

		// TODO rename _handleDestination
		_handleDestination: function( to ) {
			var history;

			// clean the hash for comparison if it's a url
			if ( $.type(to) === "string" ) {
				to = $.mobile.path.stripHash( to );
			}

			if ( to ) {
				history = this._getHistory();

				// At this point, 'to' can be one of 3 things, a cached page
				// element from a history stack entry, an id, or site-relative /
				// absolute URL. If 'to' is an id, we need to resolve it against
				// the documentBase, not the location.href, since the hashchange
				// could've been the result of a forward/backward navigation
				// that crosses from an external page/dialog to an internal
				// page/dialog.
				//
				// TODO move check to history object or path object?
				to = !$.mobile.path.isPath( to ) ? ( $.mobile.path.makeUrlAbsolute( "#" + to, this._getDocumentBase() ) ) : to;

				// If we're about to go to an initial URL that contains a
				// reference to a non-existent internal page, go to the first
				// page instead. We know that the initial hash refers to a
				// non-existent page, because the initial hash did not end
				// up in the initial history entry
				// TODO move check to history object?
				if ( to === $.mobile.path.makeUrlAbsolute( "#" + history.initialDst, this._getDocumentBase() ) &&
					history.stack.length &&
					history.stack[0].url !== history.initialDst.replace( $.mobile.dialogHashKey, "" ) ) {
					to = this._getInitialContent();
				}
			}
			return to || this._getInitialContent();
		},

		_handleDialog: function( changePageOptions, data ) {
			var to, active, activeContent = this.getActivePage();

			// If current active page is not a dialog skip the dialog and continue
			// in the same direction
			if ( activeContent && !activeContent.hasClass( "ui-dialog" ) ) {
				// determine if we're heading forward or backward and continue
				// accordingly past the current dialog
				if ( data.direction === "back" ) {
					this.back();
				} else {
					this.forward();
				}

				// prevent changePage call
				return false;
			} else {
				// if the current active page is a dialog and we're navigating
				// to a dialog use the dialog objected saved in the stack
				to = data.pageUrl;
				active = this._getActiveHistory();

				// make sure to set the role, transition and reversal
				// as most of this is lost by the domCache cleaning
				$.extend( changePageOptions, {
					role: active.role,
					transition: active.transition,
					reverse: data.direction === "back"
				});
			}

			return to;
		},

		_handleNavigate: function( url, data ) {
			//find first page via hash
			// TODO stripping the hash twice with handleUrl
			var to = $.mobile.path.stripHash( url ), history = this._getHistory(),

				// transition is false if it's the first page, undefined
				// otherwise (and may be overridden by default)
				transition = history.stack.length === 0 ? "none" : undefined,

				// default options for the changPage calls made after examining
				// the current state of the page and the hash, NOTE that the
				// transition is derived from the previous history entry
				changePageOptions = {
					changeHash: false,
					fromHashChange: true,
					reverse: data.direction === "back"
				};

			$.extend( changePageOptions, data, {
				transition: ( history.getLast() || {} ).transition || transition
			});

			// TODO move to _handleDestination ?
			// If this isn't the first page, if the current url is a dialog hash
			// key, and the initial destination isn't equal to the current target
			// page, use the special dialog handling
			if ( history.activeIndex > 0 &&
				to.indexOf( $.mobile.dialogHashKey ) > -1 &&
				history.initialDst !== to ) {

				to = this._handleDialog( changePageOptions, data );

				if ( to === false ) {
					return;
				}
			}

			this._changeContent( this._handleDestination( to ), changePageOptions );
		},

		_changeContent: function( to, opts ) {
			$.mobile.changePage( to, opts );
		},

		_getBase: function() {
			return $.mobile.base;
		},

		_getNs: function() {
			return $.mobile.ns;
		},

		_enhance: function( content, role ) {
			// TODO consider supporting a custom callback, and passing in
			// the settings which includes the role
			return content.page({ role: role });
		},

		_include: function( page, settings ) {
			// append to page and enhance
			page.appendTo( this.element );

			// use the page widget to enhance
			this._enhance( page, settings.role );

			// remove page on hide
			page.page( "bindRemove" );
		},

		_find: function( absUrl ) {
			// TODO consider supporting a custom callback
			var fileUrl = this._createFileUrl( absUrl ),
				dataUrl = this._createDataUrl( absUrl ),
				page, initialContent = this._getInitialContent();

			// Check to see if the page already exists in the DOM.
			// NOTE do _not_ use the :jqmData pseudo selector because parenthesis
			//      are a valid url char and it breaks on the first occurence
			page = this.element
				.children( "[data-" + this._getNs() +"url='" + dataUrl + "']" );

			// If we failed to find the page, check to see if the url is a
			// reference to an embedded page. If so, it may have been dynamically
			// injected by a developer, in which case it would be lacking a
			// data-url attribute and in need of enhancement.
			if ( page.length === 0 && dataUrl && !$.mobile.path.isPath( dataUrl ) ) {
				page = this.element.children( $.mobile.path.hashToSelector("#" + dataUrl) )
					.attr( "data-" + this._getNs() + "url", dataUrl )
					.jqmData( "url", dataUrl );
			}

			// If we failed to find a page in the DOM, check the URL to see if it
			// refers to the first page in the application. Also check to make sure
			// our cached-first-page is actually in the DOM. Some user deployed
			// apps are pruning the first page from the DOM for various reasons.
			// We check for this case here because we don't want a first-page with
			// an id falling through to the non-existent embedded page error case.
			if ( page.length === 0 &&
				$.mobile.path.isFirstPageUrl( fileUrl ) &&
				initialContent &&
				initialContent.parent().length ) {
				page = $( initialContent );
			}

			return page;
		},

		_getLoader: function() {
			return $.mobile.loading();
		},

		_showLoading: function( delay, theme, msg, textonly ) {
			// This configurable timeout allows cached pages a brief
			// delay to load without showing a message
			if ( this._loadMsg ) {
				return;
			}

			this._loadMsg = setTimeout($.proxy(function() {
				this._getLoader().loader( "show", theme, msg, textonly );
				this._loadMsg = 0;
			}, this), delay );
		},

		_hideLoading: function() {
			// Stop message show timer
			clearTimeout( this._loadMsg );
			this._loadMsg = 0;

			// Hide loading message
			this._getLoader().loader( "hide" );
		},

		_showError: function() {
			// make sure to remove the current loading message
			this._hideLoading();

			// show the error message
			this._showLoading( 0, $.mobile.pageLoadErrorMessageTheme, $.mobile.pageLoadErrorMessage, true );

			// hide the error message after a delay
			// TODO configuration
			setTimeout( $.proxy(this, "_hideLoading"), 1500 );
		},

		_parse: function( html, fileUrl ) {
			// TODO consider allowing customization of this method. It's very JQM specific
			var page, all = $( "<div></div>" );

			//workaround to allow scripts to execute when included in page divs
			all.get( 0 ).innerHTML = html;

			page = all.find( ":jqmData(role='page'), :jqmData(role='dialog')" ).first();

			//if page elem couldn't be found, create one and insert the body element's contents
			if ( !page.length ) {
				page = $( "<div data-" + this._getNs() + "role='page'>" +
					( html.split( /<\/?body[^>]*>/gmi )[1] || "" ) +
					"</div>" );
			}

			// TODO tagging a page with external to make sure that embedded pages aren't
			// removed by the various page handling code is bad. Having page handling code
			// in many places is bad. Solutions post 1.0
			page.attr( "data-" + this._getNs() + "url", $.mobile.path.convertUrlToDataUrl(fileUrl) )
				.attr( "data-" + this._getNs() + "external-page", true );

			return page;
		},

		_setLoadedTitle: function( page, html ) {
			//page title regexp
			var newPageTitle = html.match( /<title[^>]*>([^<]*)/ ) && RegExp.$1;

			if ( newPageTitle && !page.jqmData("title") ) {
				newPageTitle = $( "<div>" + newPageTitle + "</div>" ).text();
				page.jqmData( "title", newPageTitle );
			}
		},

		_isRewritableBaseTag: function() {
			return $.mobile.dynamicBaseEnabled && !$.support.dynamicBaseTag;
		},

		_createDataUrl: function( absoluteUrl ) {
			return $.mobile.path.convertUrlToDataUrl( absoluteUrl );
		},

		_createFileUrl: function( absoluteUrl ) {
			return $.mobile.path.getFilePath( absoluteUrl );
		},

		_triggerWithDeprecated: function( name, data, page ) {
			var deprecatedEvent = $.Event( "page" + name ),
				newEvent = $.Event( this.widgetName + name );

			// DEPRECATED
			// trigger the old deprecated event on the page if it's provided
			( page || this.element ).trigger( deprecatedEvent, data );

			// use the widget trigger method for the new content* event
			this.element.trigger( newEvent, data );

			return {
				deprecatedEvent: deprecatedEvent,
				event: newEvent
			};
		},

		// TODO it would be nice to split this up more but everything appears to be "one off"
		//      or require ordering such that other bits are sprinkled in between parts that
		//      could be abstracted out as a group
		_loadSuccess: function( absUrl, triggerData, settings, deferred ) {
			var fileUrl = this._createFileUrl( absUrl ),
				dataUrl = this._createDataUrl( absUrl );

			return $.proxy(function( html, textStatus, xhr ) {
				//pre-parse html to check for a data-url,
				//use it as the new fileUrl, base path, etc
				var content,

					// TODO handle dialogs again
					pageElemRegex = new RegExp( "(<[^>]+\\bdata-" + this._getNs() + "role=[\"']?page[\"']?[^>]*>)" ),

					dataUrlRegex = new RegExp( "\\bdata-" + this._getNs() + "url=[\"']?([^\"'>]*)[\"']?" );

				// data-url must be provided for the base tag so resource requests
				// can be directed to the correct url. loading into a temprorary
				// element makes these requests immediately
				if ( pageElemRegex.test( html ) &&
					RegExp.$1 &&
					dataUrlRegex.test( RegExp.$1 ) &&
					RegExp.$1 ) {
					fileUrl = $.mobile.path.getFilePath( $("<div>" + RegExp.$1 + "</div>").text() );
				}

				//dont update the base tag if we are prefetching
				if ( settings.prefetch === undefined ) {
					this._getBase().set( fileUrl );
				}

				content = this._parse( html, fileUrl );

				this._setLoadedTitle( content, html );

				// Add the content reference and xhr to our triggerData.
				triggerData.xhr = xhr;
				triggerData.textStatus = textStatus;

				// DEPRECATED
				triggerData.page = content;

				triggerData.content = content;

				// If the default behavior is prevented, stop here!
				// Note that it is the responsibility of the listener/handler
				// that called preventDefault(), to resolve/reject the
				// deferred object within the triggerData.
				if ( !this._trigger( "load", undefined, triggerData ) ) {
					return;
				}

				// rewrite src and href attrs to use a base url if the base tag won't work
				if ( this._isRewritableBaseTag() && content ) {
					this._getBase().rewrite( fileUrl, content );
				}

				this._include( content, settings );

				// Enhancing the content may result in new dialogs/sub content being inserted
				// into the DOM. If the original absUrl refers to a sub-content, that is the
				// real content we are interested in.
				if ( absUrl.indexOf( "&" + $.mobile.subPageUrlKey ) > -1 ) {
					content = this.element.children( "[data-" + this._getNs() +"url='" + dataUrl + "']" );
				}

				// Remove loading message.
				if ( settings.showLoadMsg ) {
					this._hideLoading();
				}

				// BEGIN DEPRECATED ---------------------------------------------------
				// Let listeners know the content loaded successfully.
				this.element.trigger( "pageload" );
				// END DEPRECATED -----------------------------------------------------

				deferred.resolve( absUrl, settings, content );
			}, this);
		},

		_loadDefaults: {
			type: "get",
			data: undefined,

			// DEPRECATED
			reloadPage: false,

			reload: false,

			// By default we rely on the role defined by the @data-role attribute.
			role: undefined,

			showLoadMsg: false,

			// This delay allows loads that pull from browser cache to
			// occur without showing the loading message.
			loadMsgDelay: 50
		},

		load: function( url, options ) {
			// This function uses deferred notifications to let callers
			// know when the content is done loading, or if an error has occurred.
			var deferred = ( options && options.deferred ) || $.Deferred(),

				// The default load options with overrides specified by the caller.
				settings = $.extend( {}, this._loadDefaults, options ),

				// The DOM element for the content after it has been loaded.
				content = null,

				// The absolute version of the URL passed into the function. This
				// version of the URL may contain dialog/subcontent params in it.
				absUrl = $.mobile.path.makeUrlAbsolute( url, this._findBaseWithDefault() ),
				fileUrl, dataUrl, pblEvent, triggerData;

			// DEPRECATED reloadPage
			settings.reload = settings.reloadPage;

			// If the caller provided data, and we're using "get" request,
			// append the data to the URL.
			if ( settings.data && settings.type === "get" ) {
				absUrl = $.mobile.path.addSearchParams( absUrl, settings.data );
				settings.data = undefined;
			}

			// If the caller is using a "post" request, reload must be true
			if ( settings.data && settings.type === "post" ) {
				settings.reload = true;
			}

			// The absolute version of the URL minus any dialog/subcontent params.
			// In otherwords the real URL of the content to be loaded.
			fileUrl = this._createFileUrl( absUrl );

			// The version of the Url actually stored in the data-url attribute of
			// the content. For embedded content, it is just the id of the page. For
			// content within the same domain as the document base, it is the site
			// relative path. For cross-domain content (Phone Gap only) the entire
			// absolute Url is used to load the content.
			dataUrl = this._createDataUrl( absUrl );

			content = this._find( absUrl );

			// If it isn't a reference to the first content and refers to missing
			// embedded content reject the deferred and return
			if ( content.length === 0 &&
				$.mobile.path.isEmbeddedPage(fileUrl) &&
				!$.mobile.path.isFirstPageUrl(fileUrl) ) {
				deferred.reject( absUrl, settings );
				return;
			}

			// Reset base to the default document base
			// TODO figure out why we doe this
			this._getBase().reset();

			// If the content we are interested in is already in the DOM,
			// and the caller did not indicate that we should force a
			// reload of the file, we are done. Resolve the deferrred so that
			// users can bind to .done on the promise
			if ( content.length && !settings.reload ) {
				this._enhance( content, settings.role );
				deferred.resolve( absUrl, settings, content );

				//if we are reloading the content make sure we update
				// the base if its not a prefetch
				if ( !settings.prefetch ) {
					this._getBase().set(url);
				}

				return;
			}

			triggerData = {
				url: url,
				absUrl: absUrl,
				dataUrl: dataUrl,
				deferred: deferred,
				options: settings
			};

			// Let listeners know we're about to load content.
			pblEvent = this._triggerWithDeprecated( "beforeload", triggerData );

			// If the default behavior is prevented, stop here!
			if ( pblEvent.deprecatedEvent.isDefaultPrevented() ||
				pblEvent.event.isDefaultPrevented() ) {
				return;
			}

			if ( settings.showLoadMsg ) {
				this._showLoading( settings.loadMsgDelay );
			}

			// Reset base to the default document base.
			// only reset if we are not prefetching
			if ( settings.prefetch === undefined ) {
				this._getBase().reset();
			}

			if ( !( $.mobile.allowCrossDomainPages ||
				$.mobile.path.isSameDomain($.mobile.path.documentUrl, absUrl ) ) ) {
				deferred.reject( absUrl, settings );
				return;
			}

			// Load the new content.
			$.ajax({
				url: fileUrl,
				type: settings.type,
				data: settings.data,
				contentType: settings.contentType,
				dataType: "html",
				success: this._loadSuccess( absUrl, triggerData, settings, deferred ),
				error: this._loadError( absUrl, triggerData, settings, deferred )
			});
		},

		_loadError: function( absUrl, triggerData, settings, deferred ) {
			return $.proxy(function( xhr, textStatus, errorThrown ) {
				//set base back to current path
				this._getBase().set( $.mobile.path.get() );

				// Add error info to our triggerData.
				triggerData.xhr = xhr;
				triggerData.textStatus = textStatus;
				triggerData.errorThrown = errorThrown;

				// Let listeners know the page load failed.
				var plfEvent = this._triggerWithDeprecated( "loadfailed", triggerData );

				// If the default behavior is prevented, stop here!
				// Note that it is the responsibility of the listener/handler
				// that called preventDefault(), to resolve/reject the
				// deferred object within the triggerData.
				if ( plfEvent.deprecatedEvent.isDefaultPrevented() ||
					plfEvent.event.isDefaultPrevented() ) {
					return;
				}

				// Remove loading message.
				if ( settings.showLoadMsg ) {
					this._showError();
				}

				deferred.reject( absUrl, settings );
			}, this);
		},

		_getTransitionHandler: function( transition ) {
			transition = $.mobile._maybeDegradeTransition( transition );

			//find the transition handler for the specified transition. If there
			//isn't one in our transitionHandlers dictionary, use the default one.
			//call the handler immediately to kick-off the transition.
			return $.mobile.transitionHandlers[ transition ] || $.mobile.defaultTransitionHandler;
		},

		// TODO move into transition handlers?
		_triggerCssTransitionEvents: function( to, from, prefix ) {
			var samePage = false;

			prefix = prefix || "";

			// TODO decide if these events should in fact be triggered on the container
			if ( from ) {

				//Check if this is a same page transition and tell the handler in page
				if( to[0] === from[0] ){
					samePage = true;
				}

				//trigger before show/hide events
				// TODO deprecate nextPage in favor of next
				this._triggerWithDeprecated( prefix + "hide", { nextPage: to, samePage: samePage }, from );
			}

			// TODO deprecate prevPage in favor of previous
			this._triggerWithDeprecated( prefix + "show", { prevPage: from || $( "" ) }, to );
		},

		// TODO make private once change has been defined in the widget
		_cssTransition: function( to, from, options ) {
			var transition = options.transition,
				reverse = options.reverse,
				deferred = options.deferred,
				TransitionHandler,
				promise;

			this._triggerCssTransitionEvents( to, from, "before" );

			// TODO put this in a binding to events *outside* the widget
			this._hideLoading();

			TransitionHandler = this._getTransitionHandler( transition );

			promise = ( new TransitionHandler( transition, reverse, to, from ) ).transition();

			// TODO temporary accomodation of argument deferred
			promise.done(function() {
				deferred.resolve.apply( deferred, arguments );
			});

			promise.done($.proxy(function() {
				this._triggerCssTransitionEvents( to, from );
			}, this));
		},

		_releaseTransitionLock: function() {
			//release transition lock so navigation is free again
			isPageTransitioning = false;
			if ( pageTransitionQueue.length > 0 ) {
				$.mobile.changePage.apply( null, pageTransitionQueue.pop() );
			}
		},

		_removeActiveLinkClass: function( force ) {
			//clear out the active button state
			$.mobile.removeActiveLinkClass( force );
		},

		_loadUrl: function( to, triggerData, settings ) {
			// preserve the original target as the dataUrl value will be
			// simplified eg, removing ui-state, and removing query params
			// from the hash this is so that users who want to use query
			// params have access to them in the event bindings for the page
			// life cycle See issue #5085
			settings.target = to;
			settings.deferred = $.Deferred();

			this.load( to, settings );

			settings.deferred.done($.proxy(function( url, options, content ) {
				isPageTransitioning = false;

				// store the original absolute url so that it can be provided
				// to events in the triggerData of the subsequent changePage call
				options.absUrl = triggerData.absUrl;

				this.transition( content, triggerData, options );
			}, this));

			settings.deferred.fail($.proxy(function(/* url, options */) {
				this._removeActiveLinkClass( true );
				this._releaseTransitionLock();
				this._triggerWithDeprecated( "changefailed", triggerData );
			}, this));
		},

		_triggerPageBeforeChange: function( to, triggerData, settings ) {
			var pbcEvent = new $.Event( "pagebeforechange" );

			$.extend(triggerData, { toPage: to, options: settings });

			// NOTE: preserve the original target as the dataUrl value will be
			// simplified eg, removing ui-state, and removing query params from
			// the hash this is so that users who want to use query params have
			// access to them in the event bindings for the page life cycle
			// See issue #5085
			if ( $.type(to) === "string" ) {
				// if the toPage is a string simply convert it
				triggerData.absUrl = $.mobile.path.makeUrlAbsolute( to, this._findBaseWithDefault() );
			} else {
				// if the toPage is a jQuery object grab the absolute url stored
				// in the loadPage callback where it exists
				triggerData.absUrl = settings.absUrl;
			}

			// Let listeners know we're about to change the current page.
			this.element.trigger( pbcEvent, triggerData );

			// If the default behavior is prevented, stop here!
			if ( pbcEvent.isDefaultPrevented() ) {
				return false;
			}

			return true;
		},

		change: function( to, options ) {
			// If we are in the midst of a transition, queue the current request.
			// We'll call changePage() once we're done with the current transition
			// to service the request.
			if ( isPageTransitioning ) {
				pageTransitionQueue.unshift( arguments );
				return;
			}

			var settings = $.extend( {}, $.mobile.changePage.defaults, options ),
				triggerData = {};

			// Make sure we have a fromPage.
			settings.fromPage = settings.fromPage || this.activePage;

			// if the page beforechange default is prevented return early
			if ( !this._triggerPageBeforeChange(to, triggerData, settings) ) {
				return;
			}

			// We allow "pagebeforechange" observers to modify the to in
			// the trigger data to allow for redirects. Make sure our to is
			// updated. We also need to re-evaluate whether it is a string,
			// because an object can also be replaced by a string
			to = triggerData.toPage;

			// If the caller passed us a url, call loadPage()
			// to make sure it is loaded into the DOM. We'll listen
			// to the promise object it returns so we know when
			// it is done loading or if an error ocurred.
			if ( $.type(to) === "string" ) {
				// Set the isPageTransitioning flag to prevent any requests from
				// entering this method while we are in the midst of loading a page
				// or transitioning.
				isPageTransitioning = true;

				this._loadUrl( to, triggerData, settings );
			} else {
				this.transition( to, triggerData, settings );
			}
		},

		transition: function( toPage, triggerData, settings ) {
			var fromPage, url, pageUrl, fileUrl,
				active, activeIsInitialPage,
				historyDir, pageTitle, isDialog,
				alreadyThere, newPageTitle,
				params,	cssTransitionDeferred,
				beforeTransition;

			// If we are in the midst of a transition, queue the current request.
			// We'll call changePage() once we're done with the current transition
			// to service the request.
			if ( isPageTransitioning ) {
				// make sure to only queue the to and settings values so the arguments
				// work with a call to the change method
				pageTransitionQueue.unshift( [toPage, settings] );
				return;
			}

			// DEPRECATED - this call only, in favor of the before transition
			// if the page beforechange default is prevented return early
			if ( !this._triggerPageBeforeChange(toPage, triggerData, settings) ) {
				return;
			}

			// if the (content|page)beforetransition default is prevented return early
			// Note, we have to check for both the deprecated and new events
			beforeTransition = this._triggerWithDeprecated( "beforetransition", triggerData );
			if (beforeTransition.deprecatedEvent.isDefaultPrevented() ||
				beforeTransition.event.isDefaultPrevented() ) {
				return;
			}

			// Set the isPageTransitioning flag to prevent any requests from
			// entering this method while we are in the midst of loading a page
			// or transitioning.
			isPageTransitioning = true;

			// If we are going to the first-page of the application, we need to make
			// sure settings.dataUrl is set to the application document url. This allows
			// us to avoid generating a document url with an id hash in the case where the
			// first-page of the document has an id attribute specified.
			if ( toPage[ 0 ] === $.mobile.firstPage[ 0 ] && !settings.dataUrl ) {
				settings.dataUrl = $.mobile.path.documentUrl.hrefNoHash;
			}

			// The caller passed us a real page DOM element. Update our
			// internal state and then trigger a transition to the page.
			fromPage = settings.fromPage;
			url = ( settings.dataUrl && $.mobile.path.convertUrlToDataUrl(settings.dataUrl) ) ||
				toPage.jqmData( "url" );

			// The pageUrl var is usually the same as url, except when url is obscured
			// as a dialog url. pageUrl always contains the file path
			pageUrl = url;
			fileUrl = $.mobile.path.getFilePath( url );
			active = $.mobile.navigate.history.getActive();
			activeIsInitialPage = $.mobile.navigate.history.activeIndex === 0;
			historyDir = 0;
			pageTitle = document.title;
			isDialog = ( settings.role === "dialog" ||
				toPage.jqmData( "role" ) === "dialog" ) &&
				toPage.jqmData( "dialog" ) !== true;

			// By default, we prevent changePage requests when the fromPage and toPage
			// are the same element, but folks that generate content
			// manually/dynamically and reuse pages want to be able to transition to
			// the same page. To allow this, they will need to change the default
			// value of allowSamePageTransition to true, *OR*, pass it in as an
			// option when they manually call changePage(). It should be noted that
			// our default transition animations assume that the formPage and toPage
			// are different elements, so they may behave unexpectedly. It is up to
			// the developer that turns on the allowSamePageTransitiona option to
			// either turn off transition animations, or make sure that an appropriate
			// animation transition is used.
			if ( fromPage && fromPage[0] === toPage[0] &&
				!settings.allowSamePageTransition ) {

				isPageTransitioning = false;
				this._triggerWithDeprecated( "transition", triggerData );
				this.element.trigger( "pagechange", triggerData );

				// Even if there is no page change to be done, we should keep the
				// urlHistory in sync with the hash changes
				if ( settings.fromHashChange ) {
					$.mobile.navigate.history.direct({ url: url });
				}

				return;
			}

			// We need to make sure the page we are given has already been enhanced.
			toPage.page({ role: settings.role });

			// If the changePage request was sent from a hashChange event, check to
			// see if the page is already within the urlHistory stack. If so, we'll
			// assume the user hit the forward/back button and will try to match the
			// transition accordingly.
			if ( settings.fromHashChange ) {
				historyDir = settings.direction === "back" ? -1 : 1;
			}

			// Kill the keyboard.
			// XXX_jblas: We need to stop crawling the entire document to kill focus.
			//            Instead, we should be tracking focus with a delegate()
			//            handler so we already have the element in hand at this
			//            point.
			// Wrap this in a try/catch block since IE9 throw "Unspecified error" if
			// document.activeElement is undefined when we are in an IFrame.
			try {
				if ( document.activeElement &&
					document.activeElement.nodeName.toLowerCase() !== "body" ) {

					$( document.activeElement ).blur();
				} else {
					$( "input:focus, textarea:focus, select:focus" ).blur();
				}
			} catch( e ) {}

			// Record whether we are at a place in history where a dialog used to be -
			// if so, do not add a new history entry and do not change the hash either
			alreadyThere = false;

			// If we're displaying the page as a dialog, we don't want the url
			// for the dialog content to be used in the hash. Instead, we want
			// to append the dialogHashKey to the url of the current page.
			if ( isDialog && active ) {
				// on the initial page load active.url is undefined and in that case
				// should be an empty string. Moving the undefined -> empty string back
				// into urlHistory.addNew seemed imprudent given undefined better
				// represents the url state

				// If we are at a place in history that once belonged to a dialog, reuse
				// this state without adding to urlHistory and without modifying the
				// hash. However, if a dialog is already displayed at this point, and
				// we're about to display another dialog, then we must add another hash
				// and history entry on top so that one may navigate back to the
				// original dialog
				if ( active.url &&
					active.url.indexOf( $.mobile.dialogHashKey ) > -1 &&
					this.activePage &&
					!this.activePage.hasClass( "ui-dialog" ) &&
					$.mobile.navigate.history.activeIndex > 0 ) {

					settings.changeHash = false;
					alreadyThere = true;
				}

				// Normally, we tack on a dialog hash key, but if this is the location
				// of a stale dialog, we reuse the URL from the entry
				url = ( active.url || "" );

				// account for absolute urls instead of just relative urls use as hashes
				if ( !alreadyThere && url.indexOf("#") > -1 ) {
					url += $.mobile.dialogHashKey;
				} else {
					url += "#" + $.mobile.dialogHashKey;
				}

				// tack on another dialogHashKey if this is the same as the initial hash
				// this makes sure that a history entry is created for this dialog
				if ( $.mobile.navigate.history.activeIndex === 0 && url === $.mobile.navigate.history.initialDst ) {
					url += $.mobile.dialogHashKey;
				}
			}

			// if title element wasn't found, try the page div data attr too
			// If this is a deep-link or a reload ( active === undefined ) then just
			// use pageTitle
			newPageTitle = ( !active ) ? pageTitle : toPage.jqmData( "title" ) ||
				toPage.children( ":jqmData(role='header')" ).find( ".ui-title" ).text();
			if ( !!newPageTitle && pageTitle === document.title ) {
				pageTitle = newPageTitle;
			}
			if ( !toPage.jqmData( "title" ) ) {
				toPage.jqmData( "title", pageTitle );
			}

			// Make sure we have a transition defined.
			settings.transition = settings.transition ||
				( ( historyDir && !activeIsInitialPage ) ? active.transition : undefined ) ||
				( isDialog ? $.mobile.defaultDialogTransition : $.mobile.defaultPageTransition );

			//add page to history stack if it's not back or forward
			if ( !historyDir && alreadyThere ) {
				$.mobile.navigate.history.getActive().pageUrl = pageUrl;
			}

			// Set the location hash.
			if ( url && !settings.fromHashChange ) {

				// rebuilding the hash here since we loose it earlier on
				// TODO preserve the originally passed in path
				if ( !$.mobile.path.isPath( url ) && url.indexOf( "#" ) < 0 ) {
					url = "#" + url;
				}

				// TODO the property names here are just silly
				params = {
					transition: settings.transition,
					title: pageTitle,
					pageUrl: pageUrl,
					role: settings.role
				};

				if ( settings.changeHash !== false && $.mobile.hashListeningEnabled ) {
					$.mobile.navigate( url, params, true);
				} else if ( toPage[ 0 ] !== $.mobile.firstPage[ 0 ] ) {
					$.mobile.navigate.history.add( url, params );
				}
			}

			//set page title
			document.title = pageTitle;

			//set "toPage" as activePage deprecated in 1.4 remove in 1.5
			$.mobile.activePage = toPage;

			//new way to handle activePage
			this.activePage = toPage;

			// If we're navigating back in the URL history, set reverse accordingly.
			settings.reverse = settings.reverse || historyDir < 0;

			cssTransitionDeferred = $.Deferred();

			this._cssTransition(toPage, fromPage, {
				transition: settings.transition,
				reverse: settings.reverse,
				deferred: cssTransitionDeferred
			});

			cssTransitionDeferred.done($.proxy(function( name, reverse, $to, $from, alreadyFocused ) {
				$.mobile.removeActiveLinkClass();

				//if there's a duplicateCachedPage, remove it from the DOM now that it's hidden
				if ( settings.duplicateCachedPage ) {
					settings.duplicateCachedPage.remove();
				}

				// despite visibility: hidden addresses issue #2965
				// https://github.com/jquery/jquery-mobile/issues/2965
				if ( !alreadyFocused ) {
					$.mobile.focusPage( toPage );
				}

				this._releaseTransitionLock();
				this.element.trigger( "pagechange", triggerData );
				this._triggerWithDeprecated( "transition", triggerData );
			}, this));
		},

		// determine the current base url
		_findBaseWithDefault: function() {
			var closestBase = ( this.activePage &&
			$.mobile.getClosestBaseUrl( this.activePage ) );
		return closestBase || $.mobile.path.documentBase.hrefNoHash;
		}
	});

	// The following handlers should be bound after mobileinit has been triggered
	// the following deferred is resolved in the init file
	$.mobile.navreadyDeferred = $.Deferred();

	//these variables make all page containers use the same queue and only navigate one at a time
	// queue to hold simultanious page transitions
	var pageTransitionQueue = [],

		// indicates whether or not page is in process of transitioning
		isPageTransitioning = false;

})( jQuery );

(function( $, undefined ) {

		// resolved on domready
	var domreadyDeferred = $.Deferred(),
		documentUrl = $.mobile.path.documentUrl,

		// used to track last vclicked element to make sure its value is added to form data
		$lastVClicked = null;

	/* Event Bindings - hashchange, submit, and click */
	function findClosestLink( ele )	{
		while ( ele ) {
			// Look for the closest element with a nodeName of "a".
			// Note that we are checking if we have a valid nodeName
			// before attempting to access it. This is because the
			// node we get called with could have originated from within
			// an embedded SVG document where some symbol instance elements
			// don't have nodeName defined on them, or strings are of type
			// SVGAnimatedString.
			if ( ( typeof ele.nodeName === "string" ) && ele.nodeName.toLowerCase() === "a" ) {
				break;
			}
			ele = ele.parentNode;
		}
		return ele;
	}

	$.mobile.loadPage = function( url, opts ) {
		var container;

		opts = opts || {};
		container = ( opts.pageContainer || $.mobile.pageContainer );

		// create the deferred that will be supplied to loadPage callers
		// and resolved by the content widget's load method
		opts.deferred = $.Deferred();

		// Preferring to allow exceptions for uninitialized opts.pageContainer
		// widgets so we know if we need to force init here for users
		container.pagecontainer( "load", url, opts );

		// provide the deferred
		return opts.deferred.promise();
	};

	//define vars for interal use

	/* internal utility functions */

	// NOTE Issue #4950 Android phonegap doesn't navigate back properly
	//      when a full page refresh has taken place. It appears that hashchange
	//      and replacestate history alterations work fine but we need to support
	//      both forms of history traversal in our code that uses backward history
	//      movement
	$.mobile.back = function() {
		var nav = window.navigator;

		// if the setting is on and the navigator object is
		// available use the phonegap navigation capability
		if ( this.phonegapNavigationEnabled &&
			nav &&
			nav.app &&
			nav.app.backHistory ) {
			nav.app.backHistory();
		} else {
			$.mobile.pageContainer.pagecontainer( "back" );
		}
	};

	//direct focus to the page title, or otherwise first focusable element
	$.mobile.focusPage = function ( page ) {
		var autofocus = page.find( "[autofocus]" ),
			pageTitle = page.find( ".ui-title:eq(0)" );

		if ( autofocus.length ) {
			autofocus.focus();
			return;
		}

		if ( pageTitle.length ) {
			pageTitle.focus();
		} else{
			page.focus();
		}
	};

	// No-op implementation of transition degradation
	$.mobile._maybeDegradeTransition = $.mobile._maybeDegradeTransition || function( transition ) {
		return transition;
	};

	/* exposed $.mobile methods */

	//animation complete callback
	$.fn.animationComplete = function( callback ) {
		if ( $.support.cssTransitions ) {
			return $( this ).one( "webkitAnimationEnd animationend", callback );
		}
		else{
			// defer execution for consistency between webkit/non webkit
			setTimeout( callback, 0 );
			return $( this );
		}
	};

	$.mobile.changePage = function( to, options ) {
		$.mobile.pageContainer.pagecontainer( "change", to, options );
	};

	$.mobile.changePage.defaults = {
		transition: undefined,
		reverse: false,
		changeHash: true,
		fromHashChange: false,
		role: undefined, // By default we rely on the role defined by the @data-role attribute.
		duplicateCachedPage: undefined,
		pageContainer: undefined,
		showLoadMsg: true, //loading message shows by default when pages are being fetched during changePage
		dataUrl: undefined,
		fromPage: undefined,
		allowSamePageTransition: false
	};

	$.mobile._registerInternalEvents = function() {
		var getAjaxFormData = function( $form, calculateOnly ) {
			var url, ret = true, formData, vclickedName, method;
			if ( !$.mobile.ajaxEnabled ||
					// test that the form is, itself, ajax false
					$form.is( ":jqmData(ajax='false')" ) ||
					// test that $.mobile.ignoreContentEnabled is set and
					// the form or one of it's parents is ajax=false
					!$form.jqmHijackable().length ||
					$form.attr( "target" ) ) {
				return false;
			}

			url = ( $lastVClicked && $lastVClicked.attr( "formaction" ) ) ||
				$form.attr( "action" );
			method = ( $form.attr( "method" ) || "get" ).toLowerCase();

			// If no action is specified, browsers default to using the
			// URL of the document containing the form. Since we dynamically
			// pull in pages from external documents, the form should submit
			// to the URL for the source document of the page containing
			// the form.
			if ( !url ) {
				// Get the @data-url for the page containing the form.
				url = $.mobile.getClosestBaseUrl( $form );

				// NOTE: If the method is "get", we need to strip off the query string
				// because it will get replaced with the new form data. See issue #5710.
				if ( method === "get" ) {
					url = $.mobile.path.parseUrl( url ).hrefNoSearch;
				}

				if ( url === $.mobile.path.documentBase.hrefNoHash ) {
					// The url we got back matches the document base,
					// which means the page must be an internal/embedded page,
					// so default to using the actual document url as a browser
					// would.
					url = documentUrl.hrefNoSearch;
				}
			}

			url = $.mobile.path.makeUrlAbsolute(  url, $.mobile.getClosestBaseUrl( $form ) );

			if ( ( $.mobile.path.isExternal( url ) && !$.mobile.path.isPermittedCrossDomainRequest( documentUrl, url ) ) ) {
				return false;
			}

			if ( !calculateOnly ) {
				formData = $form.serializeArray();

				if ( $lastVClicked && $lastVClicked[ 0 ].form === $form[ 0 ] ) {
					vclickedName = $lastVClicked.attr( "name" );
					if ( vclickedName ) {
						// Make sure the last clicked element is included in the form
						$.each( formData, function( key, value ) {
							if ( value.name === vclickedName ) {
								// Unset vclickedName - we've found it in the serialized data already
								vclickedName = "";
								return false;
							}
						});
						if ( vclickedName ) {
							formData.push( { name: vclickedName, value: $lastVClicked.attr( "value" ) } );
						}
					}
				}

				ret = {
					url: url,
					options: {
						type:		method,
						data:		$.param( formData ),
						transition:	$form.jqmData( "transition" ),
						reverse:	$form.jqmData( "direction" ) === "reverse",
						reloadPage:	true
					}
				};
			}

			return ret;
		};

		//bind to form submit events, handle with Ajax
		$.mobile.document.delegate( "form", "submit", function( event ) {
			var formData;

			if ( !event.isDefaultPrevented() ) {
				formData = getAjaxFormData( $( this ) );
				if ( formData ) {
					$.mobile.changePage( formData.url, formData.options );
					event.preventDefault();
				}
			}
		});

		//add active state on vclick
		$.mobile.document.bind( "vclick", function( event ) {
			var $btn, btnEls, target = event.target, needClosest = false;
			// if this isn't a left click we don't care. Its important to note
			// that when the virtual event is generated it will create the which attr
			if ( event.which > 1 || !$.mobile.linkBindingEnabled ) {
				return;
			}

			// Record that this element was clicked, in case we need it for correct
			// form submission during the "submit" handler above
			$lastVClicked = $( target );

			// Try to find a target element to which the active class will be applied
			if ( $.data( target, "mobile-button" ) ) {
				// If the form will not be submitted via AJAX, do not add active class
				if ( !getAjaxFormData( $( target ).closest( "form" ), true ) ) {
					return;
				}
				// We will apply the active state to this button widget - the parent
				// of the input that was clicked will have the associated data
				if ( target.parentNode ) {
					target = target.parentNode;
				}
			} else {
				target = findClosestLink( target );
				if ( !( target && $.mobile.path.parseUrl( target.getAttribute( "href" ) || "#" ).hash !== "#" ) ) {
					return;
				}

				// TODO teach $.mobile.hijackable to operate on raw dom elements so the
				// link wrapping can be avoided
				if ( !$( target ).jqmHijackable().length ) {
					return;
				}
			}

			// Avoid calling .closest by using the data set during .buttonMarkup()
			// List items have the button data in the parent of the element clicked
			if ( !!~target.className.indexOf( "ui-link-inherit" ) ) {
				if ( target.parentNode ) {
					btnEls = $.data( target.parentNode, "buttonElements" );
				}
			// Otherwise, look for the data on the target itself
			} else {
				btnEls = $.data( target, "buttonElements" );
			}
			// If found, grab the button's outer element
			if ( btnEls ) {
				target = btnEls.outer;
			} else {
				needClosest = true;
			}

			$btn = $( target );
			// If the outer element wasn't found by the our heuristics, use .closest()
			if ( needClosest ) {
				$btn = $btn.closest( ".ui-btn" );
			}

			if ( $btn.length > 0 &&
				!( $btn.hasClass( "ui-state-disabled" ||

					// DEPRECATED as of 1.4.0 - remove after 1.4.0 release
					// only ui-state-disabled should be present thereafter
					$btn.hasClass( "ui-disabled" ) ) ) ) {
				$.mobile.removeActiveLinkClass( true );
				$.mobile.activeClickedLink = $btn;
				$.mobile.activeClickedLink.addClass( $.mobile.activeBtnClass );
			}
		});

		// click routing - direct to HTTP or Ajax, accordingly
		$.mobile.document.bind( "click", function( event ) {
			if ( !$.mobile.linkBindingEnabled || event.isDefaultPrevented() ) {
				return;
			}

			var link = findClosestLink( event.target ),
				$link = $( link ),

				//remove active link class if external (then it won't be there if you come back)
				httpCleanup = function() {
					window.setTimeout(function() { $.mobile.removeActiveLinkClass( true ); }, 200 );
				},
				baseUrl, href,
				useDefaultUrlHandling, isExternal,
				transition, reverse, role;

			// If a button was clicked, clean up the active class added by vclick above
			if ( $.mobile.activeClickedLink &&
				$.mobile.activeClickedLink[ 0 ] === event.target.parentNode ) {
				httpCleanup();
			}

			// If there is no link associated with the click or its not a left
			// click we want to ignore the click
			// TODO teach $.mobile.hijackable to operate on raw dom elements so the link wrapping
			// can be avoided
			if ( !link || event.which > 1 || !$link.jqmHijackable().length ) {
				return;
			}

			//if there's a data-rel=back attr, go back in history
			if ( $link.is( ":jqmData(rel='back')" ) ) {
				$.mobile.back();
				return false;
			}

			baseUrl = $.mobile.getClosestBaseUrl( $link );

			//get href, if defined, otherwise default to empty hash
			href = $.mobile.path.makeUrlAbsolute( $link.attr( "href" ) || "#", baseUrl );

			//if ajax is disabled, exit early
			if ( !$.mobile.ajaxEnabled && !$.mobile.path.isEmbeddedPage( href ) ) {
				httpCleanup();
				//use default click handling
				return;
			}

			// XXX_jblas: Ideally links to application pages should be specified as
			//            an url to the application document with a hash that is either
			//            the site relative path or id to the page. But some of the
			//            internal code that dynamically generates sub-pages for nested
			//            lists and select dialogs, just write a hash in the link they
			//            create. This means the actual URL path is based on whatever
			//            the current value of the base tag is at the time this code
			//            is called. For now we are just assuming that any url with a
			//            hash in it is an application page reference.
			if ( href.search( "#" ) !== -1 ) {
				href = href.replace( /[^#]*#/, "" );
				if ( !href ) {
					//link was an empty hash meant purely
					//for interaction, so we ignore it.
					event.preventDefault();
					return;
				} else if ( $.mobile.path.isPath( href ) ) {
					//we have apath so make it the href we want to load.
					href = $.mobile.path.makeUrlAbsolute( href, baseUrl );
				} else {
					//we have a simple id so use the documentUrl as its base.
					href = $.mobile.path.makeUrlAbsolute( "#" + href, documentUrl.hrefNoHash );
				}
			}

			// Should we handle this link, or let the browser deal with it?
			useDefaultUrlHandling = $link.is( "[rel='external']" ) || $link.is( ":jqmData(ajax='false')" ) || $link.is( "[target]" );

			// Some embedded browsers, like the web view in Phone Gap, allow cross-domain XHR
			// requests if the document doing the request was loaded via the file:// protocol.
			// This is usually to allow the application to "phone home" and fetch app specific
			// data. We normally let the browser handle external/cross-domain urls, but if the
			// allowCrossDomainPages option is true, we will allow cross-domain http/https
			// requests to go through our page loading logic.

			//check for protocol or rel and its not an embedded page
			//TODO overlap in logic from isExternal, rel=external check should be
			//     moved into more comprehensive isExternalLink
			isExternal = useDefaultUrlHandling || ( $.mobile.path.isExternal( href ) && !$.mobile.path.isPermittedCrossDomainRequest( documentUrl, href ) );

			if ( isExternal ) {
				httpCleanup();
				//use default click handling
				return;
			}

			//use ajax
			transition = $link.jqmData( "transition" );
			reverse = $link.jqmData( "direction" ) === "reverse" ||
						// deprecated - remove by 1.0
						$link.jqmData( "back" );

			//this may need to be more specific as we use data-rel more
			role = $link.attr( "data-" + $.mobile.ns + "rel" ) || undefined;

			$.mobile.changePage( href, { transition: transition, reverse: reverse, role: role, link: $link } );
			event.preventDefault();
		});

		//prefetch pages when anchors with data-prefetch are encountered
		$.mobile.document.delegate( ".ui-page", "pageshow.prefetch", function() {
			var urls = [];
			$( this ).find( "a:jqmData(prefetch)" ).each(function() {
				var $link = $( this ),
					url = $link.attr( "href" );

				if ( url && $.inArray( url, urls ) === -1 ) {
					urls.push( url );

					$.mobile.loadPage( url, { role: $link.attr( "data-" + $.mobile.ns + "rel" ),prefetch: true } );
				}
			});
		});

		// TODO ensure that the navigate binding in the content widget happens at the right time
		$.mobile.pageContainer.pagecontainer();

		//set page min-heights to be device specific
		$.mobile.document.bind( "pageshow", $.mobile.resetActivePageHeight );
		$.mobile.window.bind( "throttledresize", $.mobile.resetActivePageHeight );

	};//navreadyDeferred done callback

	$( function() { domreadyDeferred.resolve(); } );

	$.when( domreadyDeferred, $.mobile.navreadyDeferred ).done( function() { $.mobile._registerInternalEvents(); } );
})( jQuery );


(function( $, window, undefined ) {

	// TODO remove direct references to $.mobile and properties, we should
	//      favor injection with params to the constructor
	$.mobile.Transition = function() {
		this.init.apply( this, arguments );
	};

	$.extend($.mobile.Transition.prototype, {
		toPreClass: " ui-page-pre-in",

		init: function( name, reverse, $to, $from ) {
			$.extend(this, {
				name: name,
				reverse: reverse,
				$to: $to,
				$from: $from,
				deferred: new $.Deferred()
			});
		},

		cleanFrom: function() {
			this.$from
				.removeClass( $.mobile.activePageClass + " out in reverse " + this.name )
				.height( "" );
		},

		// NOTE overridden by child object prototypes, noop'd here as defaults
		beforeDoneIn: function() {},
		beforeDoneOut: function() {},
		beforeStartOut: function() {},

		doneIn: function() {
			this.beforeDoneIn();

			this.$to.removeClass( "out in reverse " + this.name ).height( "" );

			this.toggleViewportClass();

			// In some browsers (iOS5), 3D transitions block the ability to scroll to the desired location during transition
			// This ensures we jump to that spot after the fact, if we aren't there already.
			if ( $.mobile.window.scrollTop() !== this.toScroll ) {
				this.scrollPage();
			}
			if ( !this.sequential ) {
				this.$to.addClass( $.mobile.activePageClass );
			}
			this.deferred.resolve( this.name, this.reverse, this.$to, this.$from, true );
		},

		doneOut: function( screenHeight, reverseClass, none, preventFocus ) {
			this.beforeDoneOut();
			this.startIn( screenHeight, reverseClass, none, preventFocus );
		},

		hideIn: function( callback ) {
			// Prevent flickering in phonegap container: see comments at #4024 regarding iOS
			this.$to.css( "z-index", -10 );
			callback.call( this );
			this.$to.css( "z-index", "" );
		},

		scrollPage: function() {
			// By using scrollTo instead of silentScroll, we can keep things better in order
			// Just to be precautios, disable scrollstart listening like silentScroll would
			$.event.special.scrollstart.enabled = false;
			//if we are hiding the url bar or the page was previously scrolled scroll to hide or return to position
			if ( $.mobile.hideUrlBar || this.toScroll !== $.mobile.defaultHomeScroll ) {
				window.scrollTo( 0, this.toScroll );
			}

			// reenable scrollstart listening like silentScroll would
			setTimeout( function() {
				$.event.special.scrollstart.enabled = true;
			}, 150 );
		},

		startIn: function( screenHeight, reverseClass, none, preventFocus ) {
			this.hideIn(function() {
				this.$to.addClass( $.mobile.activePageClass + this.toPreClass );

				// Send focus to page as it is now display: block
				if ( !preventFocus ) {
					$.mobile.focusPage( this.$to );
				}

				// Set to page height
				this.$to.height( screenHeight + this.toScroll );

                if ( !none ) {
                    this.scrollPage();
                }
			});

			if ( !none ) {
				this.$to.animationComplete( $.proxy(function() {
					this.doneIn();
				}, this ));
			}

			this.$to
				.removeClass( this.toPreClass )
				.addClass( this.name + " in " + reverseClass );

			if ( none ) {
				this.doneIn();
			}

		},

		startOut: function( screenHeight, reverseClass, none ) {
			this.beforeStartOut( screenHeight, reverseClass, none );

			// Set the from page's height and start it transitioning out
			// Note: setting an explicit height helps eliminate tiling in the transitions
			this.$from
				.height( screenHeight + $.mobile.window.scrollTop() )
				.addClass( this.name + " out" + reverseClass );
		},

		toggleViewportClass: function() {
			$.mobile.pageContainer.toggleClass( "ui-mobile-viewport-transitioning viewport-" + this.name );
		},

		transition: function() {
			// NOTE many of these could be calculated/recorded in the constructor, it's my
			//      opinion that binding them as late as possible has value with regards to
			//      better transitions with fewer bugs. Ie, it's not guaranteed that the
			//      object will be created and transition will be run immediately after as
			//      it is today. So we wait until transition is invoked to gather the following
			var reverseClass = this.reverse ? " reverse" : "",
				screenHeight = $.mobile.getScreenHeight(),
				maxTransitionOverride = $.mobile.maxTransitionWidth !== false && $.mobile.window.width() > $.mobile.maxTransitionWidth,
				none = !$.support.cssTransitions || !$.support.cssAnimations || maxTransitionOverride || !this.name || this.name === "none" || Math.max( $.mobile.window.scrollTop(), this.toScroll ) > $.mobile.getMaxScrollForTransition();

			this.toScroll = $.mobile.navigate.history.getActive().lastScroll || $.mobile.defaultHomeScroll;
			this.toggleViewportClass();

			if ( this.$from && !none ) {
				this.startOut( screenHeight, reverseClass, none );
			} else {
				this.doneOut( screenHeight, reverseClass, none, true );
			}

			return this.deferred.promise();
		}
	});
})( jQuery, this );


(function( $ ) {

	$.mobile.SerialTransition = function() {
		this.init.apply(this, arguments);
	};

	$.extend($.mobile.SerialTransition.prototype, $.mobile.Transition.prototype, {
		sequential: true,

		beforeDoneOut: function() {
			if ( this.$from ) {
				this.cleanFrom();
			}
		},

		beforeStartOut: function( screenHeight, reverseClass, none ) {
			this.$from.animationComplete($.proxy(function() {
				this.doneOut( screenHeight, reverseClass, none );
			}, this ));
		}
	});

})( jQuery );


(function( $ ) {

	$.mobile.ConcurrentTransition = function() {
		this.init.apply(this, arguments);
	};

	$.extend($.mobile.ConcurrentTransition.prototype, $.mobile.Transition.prototype, {
		sequential: false,

		beforeDoneIn: function() {
			if ( this.$from ) {
				this.cleanFrom();
			}
		},

		beforeStartOut: function( screenHeight, reverseClass, none ) {
			this.doneOut( screenHeight, reverseClass, none );
		}
	});

})( jQuery );


(function( $ ) {

	// generate the handlers from the above
	var defaultGetMaxScrollForTransition = function() {
		return $.mobile.getScreenHeight() * 3;
	};

	//transition handler dictionary for 3rd party transitions
	$.mobile.transitionHandlers = {
		"sequential": $.mobile.SerialTransition,
		"simultaneous": $.mobile.ConcurrentTransition
	};

	// Make our transition handler the public default.
	$.mobile.defaultTransitionHandler = $.mobile.transitionHandlers.sequential;

	$.mobile.transitionFallbacks = {};

	// If transition is defined, check if css 3D transforms are supported, and if not, if a fallback is specified
	$.mobile._maybeDegradeTransition = function( transition ) {
		if ( transition && !$.support.cssTransform3d && $.mobile.transitionFallbacks[ transition ] ) {
			transition = $.mobile.transitionFallbacks[ transition ];
		}

		return transition;
	};

	// Set the getMaxScrollForTransition to default if no implementation was set by user
	$.mobile.getMaxScrollForTransition = $.mobile.getMaxScrollForTransition || defaultGetMaxScrollForTransition;

})( jQuery );

/*
* fallback transition for flip in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.flip = "fade";

})( jQuery, this );

/*
* fallback transition for flow in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.flow = "fade";

})( jQuery, this );

/*
* fallback transition for pop in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.pop = "fade";

})( jQuery, this );

/*
* fallback transition for slide in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

// Use the simultaneous transitions handler for slide transitions
$.mobile.transitionHandlers.slide = $.mobile.transitionHandlers.simultaneous;

// Set the slide transitions's fallback to "fade"
$.mobile.transitionFallbacks.slide = "fade";

})( jQuery, this );

/*
* fallback transition for slidedown in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.slidedown = "fade";

})( jQuery, this );

/*
* fallback transition for slidefade in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

// Set the slide transitions's fallback to "fade"
$.mobile.transitionFallbacks.slidefade = "fade";

})( jQuery, this );

/*
* fallback transition for slideup in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.slideup = "fade";

})( jQuery, this );

/*
* fallback transition for turn in non-3D supporting browsers (which tend to handle complex transitions poorly in general
*/

(function( $, window, undefined ) {

$.mobile.transitionFallbacks.turn = "fade";

})( jQuery, this );


(function( $, undefined ) {

$.mobile.degradeInputs = {
	color: false,
	date: false,
	datetime: false,
	"datetime-local": false,
	email: false,
	month: false,
	number: false,
	range: "number",
	search: "text",
	tel: false,
	time: false,
	url: false,
	week: false
};
// Backcompat remove in 1.5
$.mobile.page.prototype.options.degradeInputs = $.mobile.degradeInputs;

// Auto self-init widgets
$.mobile.degradeInputsWithin = function( target ) {

	target = $( target );

	// Degrade inputs to avoid poorly implemented native functionality
	target.find( "input" ).not( $.mobile.page.prototype.keepNativeSelector() ).each(function() {
		var element = $( this ),
			type = this.getAttribute( "type" ),
			optType = $.mobile.degradeInputs[ type ] || "text",
			html, hasType, findstr, repstr;

		if ( $.mobile.degradeInputs[ type ] ) {
			html = $( "<div>" ).html( element.clone() ).html();
			// In IE browsers, the type sometimes doesn't exist in the cloned markup, so we replace the closing tag instead
			hasType = html.indexOf( " type=" ) > -1;
			findstr = hasType ? /\s+type=["']?\w+['"]?/ : /\/?>/;
			repstr = " type=\"" + optType + "\" data-" + $.mobile.ns + "type=\"" + type + "\"" + ( hasType ? "" : ">" );

			element.replaceWith( html.replace( findstr, repstr ) );
		}
	});

};

})( jQuery );

(function( $, window, undefined ) {

$.widget( "mobile.page", $.mobile.page, {
	options: {

		// Accepts left, right and none
		closeBtn: "left",
		closeBtnText: "Close",
		overlayTheme: "a",
		corners: true,
		dialog: false
	},

	_create: function() {
		this._super();
		if ( this.options.dialog ) {

			$.extend( this, {
				_inner: this.element.children(),
				_headerCloseButton: null
			});

			if ( !this.options.enhanced ) {
				this._setCloseBtn( this.options.closeBtn );
			}
		}
	},

	_enhance: function() {
		this._super();

		// Class the markup for dialog styling and wrap interior
		if ( this.options.dialog ) {
			this.element.addClass( "ui-dialog" )
				.wrapInner( $( "<div/>", {

					// ARIA role
					"role" : "dialog",
					"class" : "ui-dialog-contain ui-overlay-shadow" +
						( this.options.corners ? " ui-corner-all" : "" )
				}));
		}
	},

	_setOptions: function( options ) {
		var closeButtonLocation, closeButtonText,
			currentOpts = this.options;

		if ( options.corners !== undefined ) {
			this._inner.toggleClass( "ui-corner-all", !!options.corners );
		}

		if ( options.overlayTheme !== undefined ) {
			if ( $.mobile.activePage[ 0 ] === this.element[ 0 ] ) {
				currentOpts.overlayTheme = options.overlayTheme;
				this._handlePageBeforeShow();
			}
		}

		if ( options.closeBtnText !== undefined ) {
			closeButtonLocation = currentOpts.closeBtn;
			closeButtonText = options.closeBtnText;
		}

		if ( options.closeBtn !== undefined ) {
			closeButtonLocation = options.closeBtn;
		}

		if ( closeButtonLocation ) {
			this._setCloseBtn( closeButtonLocation, closeButtonText );
		}

		this._super( options );
	},

	_handlePageBeforeShow: function () {
		if ( this.options.overlayTheme && this.options.dialog ) {
			this.removeContainerBackground();
			this.setContainerBackground( this.options.overlayTheme );
		} else {
			this._super();
		}
	},

	_setCloseBtn: function( location, text ) {
		var dst,
			btn = this._headerCloseButton;

		// Sanitize value
		location = "left" === location ? "left" : "right" === location ? "right" : "none";

		if ( "none" === location ) {
			if ( btn ) {
				btn.remove();
				btn = null;
			}
		} else if ( btn ) {
			btn.removeClass( "ui-btn-left ui-btn-right" ).addClass( "ui-btn-" + location );
			if ( text ) {
				btn.text( text );
			}
		} else {
			dst = this._inner.find( ":jqmData(role='header')" ).first();
			btn = $( "<a></a>", {
					"href": "#",
					"class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + location
				})
				.attr( "data-" + $.mobile.ns + "rel", "back" )
				.text( text || this.options.closeBtnText || "" )
				.prependTo( dst );
			this._on( btn, { click: "close" } );
		}

		this._headerCloseButton = btn;
	}
});

})( jQuery, this );

(function( $, window, undefined ) {

$.widget( "mobile.dialog", {
	options: {

		// Accepts left, right and none
		closeBtn: "left",
		closeBtnText: "Close",
		overlayTheme: "a",
		corners: true
	},

	// Override the theme set by the page plugin on pageshow
	_handlePageBeforeShow: function() {
		this._isCloseable = true;
		if ( this.options.overlayTheme ) {
			this.element
				.page( "removeContainerBackground" )
				.page( "setContainerBackground", this.options.overlayTheme );
		}
	},

	_handlePageBeforeHide: function() {
		this._isCloseable = false;
	},

	// click and submit events:
	// - clicks and submits should use the closing transition that the dialog
	//   opened with unless a data-transition is specified on the link/form
	// - if the click was on the close button, or the link has a data-rel="back"
	//   it'll go back in history naturally
	_handleVClickSubmit: function( event ) {
		var attrs,
			$target = $( event.target ).closest( event.type === "vclick" ? "a" : "form" );

		if ( $target.length && !$target.jqmData( "transition" ) ) {
			attrs = {};
			attrs[ "data-" + $.mobile.ns + "transition" ] =
				( $.mobile.navigate.history.getActive() || {} )[ "transition" ] ||
				$.mobile.defaultDialogTransition;
			attrs[ "data-" + $.mobile.ns + "direction" ] = "reverse";
			$target.attr( attrs );
		}
	},

	_create: function() {
		var elem = this.element,
			opts = this.options;

		// Class the markup for dialog styling and wrap interior
		elem.addClass( "ui-dialog" )
			.wrapInner( $( "<div/>", {

				// ARIA role
				"role" : "dialog",
				"class" : "ui-dialog-contain ui-overlay-shadow" +
					( !!opts.corners ? " ui-corner-all" : "" )
			}));

		$.extend( this, {
			_isCloseable: false,
			_inner: elem.children(),
			_headerCloseButton: null
		});

		this._on( elem, {
			vclick: "_handleVClickSubmit",
			submit: "_handleVClickSubmit",
			pagebeforeshow: "_handlePageBeforeShow",
			pagebeforehide: "_handlePageBeforeHide"
		});

		this._setCloseBtn( opts.closeBtn );
	},

	_setOptions: function( options ) {
		var closeButtonLocation, closeButtonText,
			currentOpts = this.options;

		if ( options.corners !== undefined ) {
			this._inner.toggleClass( "ui-corner-all", !!options.corners );
		}

		if ( options.overlayTheme !== undefined ) {
			if ( $.mobile.activePage[ 0 ] === this.element[ 0 ] ) {
				currentOpts.overlayTheme = options.overlayTheme;
				this._handlePageBeforeShow();
			}
		}

		if ( options.closeBtnText !== undefined ) {
			closeButtonLocation = currentOpts.closeBtn;
			closeButtonText = options.closeBtnText;
		}

		if ( options.closeBtn !== undefined ) {
			closeButtonLocation = options.closeBtn;
		}

		if ( closeButtonLocation ) {
			this._setCloseBtn( closeButtonLocation, closeButtonText );
		}

		this._super( options );
	},

	_setCloseBtn: function( location, text ) {
		var dst,
			btn = this._headerCloseButton;

		// Sanitize value
		location = "left" === location ? "left" : "right" === location ? "right" : "none";

		if ( "none" === location ) {
			if ( btn ) {
				btn.remove();
				btn = null;
			}
		} else if ( btn ) {
			btn.removeClass( "ui-btn-left ui-btn-right" ).addClass( "ui-btn-" + location );
			if ( text ) {
				btn.text( text );
			}
		} else {
			dst = this._inner.find( ":jqmData(role='header')" ).first();
			btn = $( "<a></a>", {
					"role": "button",
					"href": "#",
					"class": "ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-" + location
				})
				.text( text || this.options.closeBtnText || "" )
				.prependTo( dst );
			this._on( btn, { click: "close" } );
		}

		this._headerCloseButton = btn;
	},

	// Close method goes back in history
	close: function() {
		var hist = $.mobile.navigate.history;

		if ( this._isCloseable ) {
			this._isCloseable = false;
			// If the hash listening is enabled and there is at least one preceding history
			// entry it's ok to go back. Initial pages with the dialog hash state are an example
			// where the stack check is necessary
			if ( $.mobile.hashListeningEnabled && hist.activeIndex > 0 ) {
				$.mobile.back();
			} else {
				$.mobile.pageContainer.pagecontainer( "back" );
			}
		}
	}
});

})( jQuery, this );

(function( $, undefined ) {

var rInitialLetter = /([A-Z])/g;

$.widget( "mobile.collapsible", {
	options: {
		enhanced: false,
		expandCueText: null,
		collapseCueText: null,
		collapsed: true,
		heading: "h1,h2,h3,h4,h5,h6,legend",
		collapsedIcon: null,
		expandedIcon: null,
		iconpos: null,
		theme: null,
		contentTheme: null,
		inset: null,
		corners: null,
		mini: null
	},

	_create: function() {
		var elem = this.element,
			ui = {
				accordion: elem
					.closest( ":jqmData(role='collapsible-set')" +
						( $.mobile.collapsibleset ? ", :mobile-collapsibleset" : "" ) )
					.addClass( "ui-collapsible-set" )
			};

		$.extend( this, {
			_ui: ui
		});

		if ( this.options.enhanced ) {
			ui.heading = $( ".ui-collapsible-heading", this.element[ 0 ] );
			ui.content = ui.heading.next();
			ui.anchor = $( "a", ui.heading[ 0 ] ).first();
			ui.status = ui.anchor.children( ".ui-collapsible-heading-status" );
		} else {
			this._enhance( elem, ui );
		}

		this._on( ui.heading, {
			"tap": function() {
				ui.heading.find( "a" ).first().addClass( $.mobile.activeBtnClass );
			},

			"click": function( event ) {
				this._handleExpandCollapse( !ui.heading.hasClass( "ui-collapsible-heading-collapsed" ) );
				event.preventDefault();
				event.stopPropagation();
			}
		});
	},

	// Adjust the keys inside options for inherited values
	_getOptions: function( options ) {
		var key,
			accordion = this._ui.accordion,
			accordionWidget = this._ui.accordionWidget;

		// Copy options
		options = $.extend( {}, options );

		if ( accordion.length && !accordionWidget ) {
			this._ui.accordionWidget =
			accordionWidget = accordion.data( "mobile-collapsibleset" );
		}

		for ( key in options ) {

			// Retrieve the option value first from the options object passed in and, if
			// null, from the parent accordion or, if that's null too, or if there's no
			// parent accordion, then from the defaults.
			options[ key ] =
				( options[ key ] != null ) ? options[ key ] :
				( accordionWidget ) ? accordionWidget.options[ key ] :
				accordion.length ? $.mobile.getAttribute( accordion[ 0 ],
					key.replace( rInitialLetter, "-$1" ).toLowerCase() ):
				null;

			if ( null == options[ key ] ) {
				options[ key ] = $.mobile.collapsible.defaults[ key ];
			}
		}

		return options;
	},

	_themeClassFromOption: function( prefix, value ) {
		return ( value ? ( value === "none" ? "" : prefix + value ) : "" );
	},

	_enhance: function( elem, ui ) {
		var iconclass,
			opts = this._getOptions( this.options ),
			contentThemeClass = this._themeClassFromOption( "ui-body-", opts.contentTheme );

		elem.addClass( "ui-collapsible " +
			( opts.inset ? "ui-collapsible-inset " : "" ) +
			( opts.inset && opts.corners ? "ui-corner-all " : "" ) +
			( contentThemeClass ? "ui-collapsible-themed-content " : "" ) );
		ui.originalHeading = elem.children( this.options.heading ).first(),
		ui.content = elem
			.wrapInner( "<div " +
				"class='ui-collapsible-content " +
				contentThemeClass + "'></div>" )
			.children( ".ui-collapsible-content" ),
		ui.heading = ui.originalHeading;

		// Replace collapsibleHeading if it's a legend
		if ( ui.heading.is( "legend" ) ) {
			ui.heading = $( "<div role='heading'>"+ ui.heading.html() +"</div>" );
			ui.placeholder = $( "<div><!-- placeholder for legend --></div>" ).insertBefore( ui.originalHeading );
			ui.originalHeading.remove();
		}

		iconclass = ( opts.collapsed ? ( opts.collapsedIcon ? "ui-icon-" + opts.collapsedIcon : "" ):
			( opts.expandedIcon ? "ui-icon-" + opts.expandedIcon : "" ) );

		ui.status = $( "<span class='ui-collapsible-heading-status'></span>" );
		ui.anchor = ui.heading
			.detach()
			//modify markup & attributes
			.addClass( "ui-collapsible-heading" )
			.append( ui.status )
			.wrapInner( "<a href='#' class='ui-collapsible-heading-toggle'></a>" )
			.find( "a" )
				.first()
				.addClass( "ui-btn " +
					( iconclass ? iconclass + " " : "" ) +
					( iconclass ? ( "ui-btn-icon-" +
						( opts.iconpos === "right" ? "right" : "left" ) ) +
						" " : "" ) +
					this._themeClassFromOption( "ui-btn-", opts.theme ) + " " +
					( opts.mini ? "ui-mini " : "" ) );

		//drop heading in before content
		ui.heading.insertBefore( ui.content );

		this._handleExpandCollapse( this.options.collapsed );

		return ui;
	},

	refresh: function() {
		var key, options = {};

		for ( key in $.mobile.collapsible.defaults ) {
			options[ key ] = this.options[ key ];
		}

		this._setOptions( options );
	},

	_setOptions: function( options ) {
		var isCollapsed, newTheme, oldTheme, hasCorners,
			elem = this.element,
			currentOpts = this._getOptions( this.options ),
			ui = this._ui,
			anchor = ui.anchor,
			status = ui.status,
			opts = this._getOptions( options );

		// First and foremost we need to make sure the collapsible is in the proper
		// state, in case somebody decided to change the collapsed option at the
		// same time as another option
		if ( options.collapsed !== undefined ) {
			this._handleExpandCollapse( options.collapsed );
		}

		isCollapsed = elem.hasClass( "ui-collapsible-collapsed" );

		// Only options referring to the current state need to be applied right away
		// It is enough to store options covering the alternate in this.options.
		if ( isCollapsed ) {
			if ( opts.expandCueText !== undefined ) {
				status.text( opts.expandCueText );
			}
			if ( opts.collapsedIcon !== undefined ) {
				if ( currentOpts.collapsedIcon ) {
					anchor.removeClass( "ui-icon-" + currentOpts.collapsedIcon );
				}
				if ( opts.collapsedIcon ) {
					anchor.addClass( "ui-icon-" + opts.collapsedIcon );
				}
			}
		} else {
			if ( opts.collapseCueText !== undefined ) {
				status.text( opts.collapseCueText );
			}
			if ( opts.expandedIcon !== undefined ) {
				if ( currentOpts.expandedIcon ) {
					anchor.removeClass( "ui-icon-" + currentOpts.expandedIcon );
				}
				if ( opts.expandedIcon ) {
					anchor.addClass( "ui-icon-" + opts.expandedIcon );
				}
			}
		}

		if ( opts.iconpos !== undefined ) {
			anchor.removeClass( "ui-btn-icon-" + ( currentOpts.iconPos === "right" ? "right" : "left" ) );
			anchor.addClass( "ui-btn-icon-" + ( opts.iconPos === "right" ? "right" : "left" ) );
		}

		if ( opts.theme !== undefined ) {
			oldTheme = this._themeClassFromOption( "ui-btn-", currentOpts.theme );
			newTheme = this._themeClassFromOption( "ui-btn-", opts.theme );
			anchor.removeClass( oldTheme ).addClass( newTheme );
		}

		if ( opts.contentTheme !== undefined ) {
			oldTheme = this._themeClassFromOption( "ui-body-", currentOpts.theme );
			newTheme = this._themeClassFromOption( "ui-body-", opts.theme );
			ui.content.removeClass( oldTheme ).addClass( newTheme );
		}

		if ( opts.inset !== undefined ) {
			elem.toggleClass( "ui-collapsible-inset", opts.inset );
			hasCorners = !!( opts.inset && ( opts.corners || currentOpts.corners ) );
		}

		if ( opts.corners !== undefined ) {
			hasCorners = !!( opts.corners && ( opts.inset || currentOpts.inset ) );
		}

		if ( hasCorners !== undefined ) {
			elem.toggleClass( "ui-corner-all", hasCorners );
		}

		if ( opts.mini !== undefined ) {
			anchor.toggleClass( "ui-mini", opts.mini );
		}

		this._super( options );
	},

	_handleExpandCollapse: function( isCollapse ) {
		var opts = this._getOptions( this.options ),
			ui = this._ui;

		ui.status.text( isCollapse ? opts.expandCueText : opts.collapseCueText );
		ui.heading
			.toggleClass( "ui-collapsible-heading-collapsed", isCollapse )
			.find( "a" ).first()
			.toggleClass( "ui-icon-" + opts.expandedIcon, !isCollapse )

			// logic or cause same icon for expanded/collapsed state would remove the ui-icon-class
			.toggleClass( "ui-icon-" + opts.collapsedIcon, ( isCollapse || opts.expandedIcon === opts.collapsedIcon ) )
			.removeClass( $.mobile.activeBtnClass );

		this.element.toggleClass( "ui-collapsible-collapsed", isCollapse );
		ui.content
			.toggleClass( "ui-collapsible-content-collapsed", isCollapse )
			.attr( "aria-hidden", isCollapse )
			.trigger( "updatelayout" );
		this.options.collapsed = isCollapse;
		this._trigger( isCollapse ? "collapse" : "expand" );
	},

	expand: function() {
		this._handleExpandCollapse( false );
	},

	collapse: function() {
		this._handleExpandCollapse( true );
	},

	_destroy: function() {
		var ui = this._ui,
			opts = this.options;

		if ( opts.enhanced ) {
			return;
		}

		if ( ui.placeholder ) {
			ui.originalHeading.insertBefore( ui.placeholder );
			ui.placeholder.remove();
			ui.heading.remove();
		} else {
			ui.status.remove();
			ui.heading
				.removeClass( "ui-collapsible-heading ui-collapsible-heading-collapsed" )
				.children()
					.contents()
						.unwrap();
		}

		ui.anchor.contents().unwrap();
		ui.content.contents().unwrap();
		this.element
			.removeClass( "ui-collapsible ui-collapsible-collapsed " +
				"ui-collapsible-themed-content ui-collapsible-inset ui-corner-all" );
	}
});

// Defaults to be used by all instances of collapsible if per-instance values
// are unset or if nothing is specified by way of inheritance from an accordion.
// Note that this hash does not contain options "collapsed" or "heading",
// because those are not inheritable.
$.mobile.collapsible.defaults = {
	expandCueText: " click to expand contents",
	collapseCueText: " click to collapse contents",
	collapsedIcon: "plus",
	contentTheme: "inherit",
	expandedIcon: "minus",
	iconpos: "left",
	inset: true,
	corners: true,
	theme: "inherit",
	mini: false
};

})( jQuery );

(function( $, undefined ) {

$.mobile.behaviors.addFirstLastClasses = {
	_getVisibles: function( $els, create ) {
		var visibles;

		if ( create ) {
			visibles = $els.not( ".ui-screen-hidden" );
		} else {
			visibles = $els.filter( ":visible" );
			if ( visibles.length === 0 ) {
				visibles = $els.not( ".ui-screen-hidden" );
			}
		}

		return visibles;
	},

	_addFirstLastClasses: function( $els, $visibles, create ) {
		$els.removeClass( "ui-first-child ui-last-child" );
		$visibles.eq( 0 ).addClass( "ui-first-child" ).end().last().addClass( "ui-last-child" );
		if ( !create ) {
			this.element.trigger( "updatelayout" );
		}
	},

	_removeFirstLastClasses: function( $els ) {
		$els.removeClass( "ui-first-child ui-last-child" );
	}
};

})( jQuery );

(function( $, undefined ) {

var childCollapsiblesSelector = ":mobile-collapsible, " + $.mobile.collapsible.initSelector;

$.widget( "mobile.collapsibleset", $.extend( {

	// The initSelector is deprecated as of 1.4.0. In 1.5.0 we will use
	// :jqmData(role='collapsibleset') which will allow us to get rid of the line
	// below altogether, because the autoinit will generate such an initSelector
	initSelector: ":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",

	options: $.extend( {
		enhanced: false,
	}, $.mobile.collapsible.defaults ),

	_handleCollapsibleExpand: function( event ) {
		var closestCollapsible = $( event.target ).closest( ".ui-collapsible" );

		if ( closestCollapsible.parent().is( ":mobile-collapsibleset, :jqmData(role='collapsible-set')" ) ) {
			closestCollapsible
				.siblings( ".ui-collapsible:not(.ui-collapsible-collapsed)" )
				.collapsible( "collapse" );
		}
	},

	_create: function() {
		var elem = this.element,
			opts = this.options;

		$.extend( this, {
			_classes: ""
		});

		if ( !opts.enhanced ) {
			elem.addClass( "ui-collapsible-set " +
				this._themeClassFromOption( "ui-group-theme-", opts.theme ) + " " +
				( opts.corners && opts.inset ? "ui-corner-all " : "" ) );
			this.element.find( $.mobile.collapsible.initSelector ).collapsible();
		}

		this._on( elem, { collapsibleexpand: "_handleCollapsibleExpand" } );
	},

	_themeClassFromOption: function( prefix, value ) {
		return ( value ? ( value === "none" ? "" : prefix + value ) : "" );
	},

	_init: function() {
		this._refresh( true );

		// Because the corners are handled by the collapsible itself and the default state is collapsed
		// That was causing https://github.com/jquery/jquery-mobile/issues/4116
		this.element
			.children( childCollapsiblesSelector )
			.filter( ":jqmData(collapsed='false')" )
			.collapsible( "expand" );
	},

	_setOptions: function( options ) {
		var ret, hasCorners,
			elem = this.element,
			themeClass = this._themeClassFromOption( "ui-group-theme-", options.theme );

		if ( themeClass ) {
			elem
				.removeClass( this._themeClassFromOption( "ui-group-theme-", this.options.theme ) )
				.addClass( themeClass );
		}

		if ( options.inset !== undefined ) {
			hasCorners = !!( options.inset && ( options.corners || this.options.corners ) );
		}

		if ( options.corners !== undefined ) {
			hasCorners = !!( options.corners && ( options.inset || this.options.inset ) );
		}

		if ( hasCorners !== undefined ) {
			elem.toggleClass( "ui-corner-all", hasCorners );
		}

		ret = this._super( options );
		this.element.children( ":mobile-collapsible" ).collapsible( "refresh" );
		return ret;
	},

	_destroy: function() {
		var el = this.element;

		this._removeFirstLastClasses( el.children( childCollapsiblesSelector ) );
		el
			.removeClass( "ui-collapsible-set ui-corner-all " +
				this._themeClassFromOption( "ui-group-theme-", this.options.theme ) )
			.children( ":mobile-collapsible" )
			.collapsible( "destroy" );
	},

	_refresh: function( create ) {
		var collapsiblesInSet = this.element.children( childCollapsiblesSelector );

		this.element.find( $.mobile.collapsible.initSelector ).not( ".ui-collapsible" ).collapsible();

		this._addFirstLastClasses( collapsiblesInSet, this._getVisibles( collapsiblesInSet, create ), create );
	},

	refresh: function() {
		this._refresh( false );
	}
}, $.mobile.behaviors.addFirstLastClasses ) );

})( jQuery );

(function( $, undefined ) {

// Deprecated in 1.4
$.fn.fieldcontain = function(/* options */) {
	return this.addClass( "ui-field-contain" );
};

})( jQuery );

(function( $, undefined ) {

$.fn.grid = function( options ) {
	return this.each(function() {

		var $this = $( this ),
			o = $.extend({
				grid: null
			}, options ),
			$kids = $this.children(),
			gridCols = { solo:1, a:2, b:3, c:4, d:5 },
			grid = o.grid,
			iterator,
			letter;

			if ( !grid ) {
				if ( $kids.length <= 5 ) {
					for ( letter in gridCols ) {
						if ( gridCols[ letter ] === $kids.length ) {
							grid = letter;
						}
					}
				} else {
					grid = "a";
					$this.addClass( "ui-grid-duo" );
				}
			}
			iterator = gridCols[grid];

		$this.addClass( "ui-grid-" + grid );

		$kids.filter( ":nth-child(" + iterator + "n+1)" ).addClass( "ui-block-a" );

		if ( iterator > 1 ) {
			$kids.filter( ":nth-child(" + iterator + "n+2)" ).addClass( "ui-block-b" );
		}
		if ( iterator > 2 ) {
			$kids.filter( ":nth-child(" + iterator + "n+3)" ).addClass( "ui-block-c" );
		}
		if ( iterator > 3 ) {
			$kids.filter( ":nth-child(" + iterator + "n+4)" ).addClass( "ui-block-d" );
		}
		if ( iterator > 4 ) {
			$kids.filter( ":nth-child(" + iterator + "n+5)" ).addClass( "ui-block-e" );
		}
	});
};
})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.navbar", {
	options: {
		iconpos: "top",
		grid: null
	},

	_create: function() {

		var $navbar = this.element,
			$navbtns = $navbar.find( "a" ),
			iconpos = $navbtns.filter( ":jqmData(icon)" ).length ? this.options.iconpos : undefined;

		$navbar.addClass( "ui-navbar" )
			.attr( "role", "navigation" )
			.find( "ul" )
			.jqmEnhanceable()
			.grid({ grid: this.options.grid });

		$navbtns
			.each( function() {
				var icon = $.mobile.getAttribute( this, "icon" ),
					theme = $.mobile.getAttribute( this, "theme" ),
					classes = "ui-btn";

				if ( theme ) {
					classes += " ui-btn-" + theme;
				}
				if ( icon ) {
					classes += " ui-icon-" + icon + " ui-btn-icon-" + iconpos;
				}
				$( this ).addClass( classes );
			});

		$navbar.delegate( "a", "vclick", function( /* event */ ) {
			var activeBtn = $( this );

			if ( !( activeBtn.hasClass( "ui-state-disabled" ) ||

				// DEPRECATED as of 1.4.0 - remove after 1.4.0 release
				// only ui-state-disabled should be present thereafter
				activeBtn.hasClass( "ui-disabled" ) ||
				activeBtn.hasClass( $.mobile.activeBtnClass ) ) ) {

				$navbtns.removeClass( $.mobile.activeBtnClass );
				activeBtn.addClass( $.mobile.activeBtnClass );

				// The code below is a workaround to fix #1181
				$( document ).one( "pagehide", function() {
					activeBtn.removeClass( $.mobile.activeBtnClass );
				});
			}
		});

		// Buttons in the navbar with ui-state-persist class should regain their active state before page show
		$navbar.closest( ".ui-page" ).bind( "pagebeforeshow", function() {
			$navbtns.filter( ".ui-state-persist" ).addClass( $.mobile.activeBtnClass );
		});
	}
});

})( jQuery );

(function( $, undefined ) {

var getAttr = $.mobile.getAttribute;

$.widget( "mobile.listview", $.extend( {

	options: {
		theme: null,
		countTheme: null, /* Deprecated in 1.4 */
		dividerTheme: null,
		icon: "carat-r",
		splitIcon: "carat-r",
		splitTheme: null,
		corners: true,
		shadow: true,
		inset: false
	},

	_create: function() {
		var t = this,
			listviewClasses = "";

		listviewClasses += t.options.inset ? " ui-listview-inset" : "";

		if ( !!t.options.inset ) {
			listviewClasses += t.options.corners ? " ui-corner-all" : "";
			listviewClasses += t.options.shadow ? " ui-shadow" : "";
		}

		// create listview markup
		t.element.addClass( " ui-listview" + listviewClasses );

		t.refresh( true );
	},

	// TODO: Remove in 1.5
	_findFirstElementByTagName: function( ele, nextProp, lcName, ucName ) {
		var dict = {};
		dict[ lcName ] = dict[ ucName ] = true;
		while ( ele ) {
			if ( dict[ ele.nodeName ] ) {
				return ele;
			}
			ele = ele[ nextProp ];
		}
		return null;
	},
	// TODO: Remove in 1.5
	_addThumbClasses: function( containers ) {
		var i, img, len = containers.length;
		for ( i = 0; i < len; i++ ) {
			img = $( this._findFirstElementByTagName( containers[ i ].firstChild, "nextSibling", "img", "IMG" ) );
			if ( img.length ) {
				$( this._findFirstElementByTagName( img[ 0 ].parentNode, "parentNode", "li", "LI" ) ).addClass( img.hasClass( "ui-li-icon" ) ? "ui-li-has-icon" : "ui-li-has-thumb" );
			}
		}
	},

	_getChildrenByTagName: function( ele, lcName, ucName ) {
		var results = [],
			dict = {};
		dict[ lcName ] = dict[ ucName ] = true;
		ele = ele.firstChild;
		while ( ele ) {
			if ( dict[ ele.nodeName ] ) {
				results.push( ele );
			}
			ele = ele.nextSibling;
		}
		return $( results );
	},

	_beforeListviewRefresh: $.noop,
	_afterListviewRefresh: $.noop,

	refresh: function( create ) {
		var buttonClass, pos, numli, item, itemClass, itemTheme, itemIcon, icon, a,
			isDivider, startCount, newStartCount, value, last, splittheme, splitThemeClass, spliticon,
			altButtonClass, dividerTheme, li,
			o = this.options,
			$list = this.element,
			ol = !!$.nodeName( $list[ 0 ], "ol" ),
			start = $list.attr( "start" ),
			itemClassDict = {},
			countBubbles = $list.find( ".ui-li-count" ),
			countTheme = getAttr( $list[ 0 ], "counttheme" ) || this.options.countTheme,
			countThemeClass = countTheme ? "ui-body-" + countTheme : "ui-body-inherit";

		if ( o.theme ) {
			$list.addClass( "ui-group-theme-" + o.theme );
		}

		// Check if a start attribute has been set while taking a value of 0 into account
		if ( ol && ( start || start === 0 ) ) {
			startCount = parseInt( start, 10 ) - 1;
			$list.css( "counter-reset", "listnumbering " + startCount );
		}

		this._beforeListviewRefresh();

		li = this._getChildrenByTagName( $list[ 0 ], "li", "LI" );

		for ( pos = 0, numli = li.length; pos < numli; pos++ ) {
			item = li.eq( pos );
			itemClass = "";

			if ( create || item[ 0 ].className.search( /\bui-li-static\b|\bui-li-divider\b/ ) < 0 ) {
				a = this._getChildrenByTagName( item[ 0 ], "a", "A" );
				isDivider = ( getAttr( item[ 0 ], "role" ) === "list-divider" );
				value = item.attr( "value" );
				itemTheme = getAttr( item[ 0 ], "theme" );

				if ( a.length && a[ 0 ].className.search( /\bui-btn\b/ ) < 0 && !isDivider ) {
					itemIcon = getAttr( item[ 0 ], "icon" );
					icon = ( itemIcon === false ) ? false : ( itemIcon || o.icon );

					// TODO: Remove in 1.5 together with links.js (links.js / .ui-link deprecated in 1.4)
					a.removeClass( "ui-link" );

					buttonClass = "ui-btn";

					if ( itemTheme ) {
						buttonClass += " ui-btn-" + itemTheme;
					}

					if ( a.length > 1 ) {
						itemClass = "ui-li-has-alt";

						last = a.last();
						splittheme = getAttr( last[ 0 ], "theme" ) || o.splitTheme || getAttr( item[ 0 ], "theme", true );
						splitThemeClass = splittheme ? " ui-btn-" + splittheme : "";
						spliticon = getAttr( last[ 0 ], "icon" ) || getAttr( item[ 0 ], "icon" ) || o.splitIcon;
						altButtonClass = "ui-btn ui-btn-icon-notext ui-icon-" + spliticon + splitThemeClass;

						last
							.attr( "title", $.trim( last.getEncodedText() ) )
							.addClass( altButtonClass )
							.empty();
					} else if ( icon ) {
						buttonClass += " ui-btn-icon-right ui-icon-" + icon;
					}

					a.first().addClass( buttonClass );
				} else if ( isDivider ) {
					dividerTheme = ( getAttr( item[ 0 ], "theme" ) || o.dividerTheme || o.theme );

					itemClass = "ui-li-divider ui-bar-" + ( dividerTheme ? dividerTheme : "inherit" );

					item.attr( "role", "heading" );
				} else if ( a.length <= 0 ) {
					itemClass = "ui-li-static ui-body-" + ( itemTheme ? itemTheme : "inherit" );
				}
				if ( ol && value ) {
					newStartCount = parseInt( value , 10 ) - 1;

					item.css( "counter-reset", "listnumbering " + newStartCount );
				}
			}

			// Instead of setting item class directly on the list item
			// at this point in time, push the item into a dictionary
			// that tells us what class to set on it so we can do this after this
			// processing loop is finished.

			if ( !itemClassDict[ itemClass ] ) {
				itemClassDict[ itemClass ] = [];
			}

			itemClassDict[ itemClass ].push( item[ 0 ] );
		}

		// Set the appropriate listview item classes on each list item.
		// The main reason we didn't do this
		// in the for-loop above is because we can eliminate per-item function overhead
		// by calling addClass() and children() once or twice afterwards. This
		// can give us a significant boost on platforms like WP7.5.

		for ( itemClass in itemClassDict ) {
			$( itemClassDict[ itemClass ] ).addClass( itemClass );
		}

		countBubbles.each( function() {
			$( this ).closest( "li" ).addClass( "ui-li-has-count" );
		});
		if ( countThemeClass ) {
			countBubbles.addClass( countThemeClass );
		}

		// Deprecated in 1.4. From 1.5 you have to add class ui-li-has-thumb or ui-li-has-icon to the LI.
		this._addThumbClasses( li );
		this._addThumbClasses( li.find( ".ui-btn" ) );

		this._afterListviewRefresh();

		this._addFirstLastClasses( li, this._getVisibles( li, create ), create );
	}
}, $.mobile.behaviors.addFirstLastClasses ) );

})( jQuery );

(function( $, undefined ) {

function defaultAutodividersSelector( elt ) {
	// look for the text in the given element
	var text = $.trim( elt.text() ) || null;

	if ( !text ) {
		return null;
	}

	// create the text for the divider (first uppercased letter)
	text = text.slice( 0, 1 ).toUpperCase();

	return text;
}

$.widget( "mobile.listview", $.mobile.listview, {
	options: {
		autodividers: false,
		autodividersSelector: defaultAutodividersSelector
	},

	_beforeListviewRefresh: function() {
		if ( this.options.autodividers ) {
			this._replaceDividers();
			this._superApply( arguments );
		}
	},

	_replaceDividers: function() {
		var i, lis, li, dividerText,
			lastDividerText = null,
			list = this.element,
			divider;

		list.children( "li:jqmData(role='list-divider')" ).remove();

		lis = list.children( "li" );

		for ( i = 0; i < lis.length ; i++ ) {
			li = lis[ i ];
			dividerText = this.options.autodividersSelector( $( li ) );

			if ( dividerText && lastDividerText !== dividerText ) {
				divider = document.createElement( "li" );
				divider.appendChild( document.createTextNode( dividerText ) );
				divider.setAttribute( "data-" + $.mobile.ns + "role", "list-divider" );
				li.parentNode.insertBefore( divider, li );
			}

			lastDividerText = dividerText;
		}
	}
});

})( jQuery );

(function( $, undefined ) {

var rdivider = /(^|\s)ui-li-divider($|\s)/,
	rhidden = /(^|\s)ui-screen-hidden($|\s)/;

$.widget( "mobile.listview", $.mobile.listview, {
	options: {
		hideDividers: false
	},

	_afterListviewRefresh: function() {
		var items, idx, item, hideDivider = true;

		this._superApply( arguments );

		if ( this.options.hideDividers ) {
			items = this._getChildrenByTagName( this.element[ 0 ], "li", "LI" );
			for ( idx = items.length - 1 ; idx > -1 ; idx-- ) {
				item = items[ idx ];
				if ( item.className.match( rdivider ) ) {
					if ( hideDivider ) {
						item.className = item.className + " ui-screen-hidden";
					}
					hideDivider = true;
				} else {
					if ( !item.className.match( rhidden ) ) {
						hideDivider = false;
					}
				}
			}
		}
	}
});

})( jQuery );

(function( $, undefined ) {

$.mobile.nojs = function( target ) {
	$( ":jqmData(role='nojs')", target ).addClass( "ui-nojs" );
};

})( jQuery );

(function( $, undefined ) {

$.mobile.behaviors.formReset = {
	_handleFormReset: function() {
		this._on( this.element.closest( "form" ), {
			reset: function() {
				this._delay( "_reset" );
			}
		});
	}
};

})( jQuery );

/*
* "checkboxradio" plugin
*/

(function( $, undefined ) {

$.widget( "mobile.checkboxradio", $.extend( {

	initSelector: "input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",

	options: {
		theme: "inherit",
		mini: false,
		wrapperClass: null,
		enhanced: false,
		iconpos: "left"

	},
	_create: function() {
		var input = this.element,
			o = this.options,
			inheritAttr = function( input, dataAttr ) {
				return input.jqmData( dataAttr ) ||
					input.closest( "form, fieldset" ).jqmData( dataAttr );
			},
			// NOTE: Windows Phone could not find the label through a selector
			// filter works though.
			parentLabel = input.closest( "label" ),
			label = parentLabel.length ? parentLabel :
				input
					.closest( "form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')" )
					.find( "label" )
					.filter( "[for='" + $.mobile.path.hashToSelector( input[0].id ) + "']" )
					.first(),
			inputtype = input[0].type,
			checkedClass = "ui-" + inputtype + "-on",
			uncheckedClass = "ui-" + inputtype + "-off";

		if ( inputtype !== "checkbox" && inputtype !== "radio" ) {
			return;
		}

		if ( this.element[0].disabled ) {
			this.options.disabled = true;
		}

		o.iconpos = inheritAttr( input, "iconpos" ) || label.attr( "data-" + $.mobile.ns + "iconpos" ) || o.iconpos,

		// Establish options
		o.mini = inheritAttr( input, "mini" ) || o.mini;

		// Expose for other methods
		$.extend( this, {
			input: input,
			label: label,
			parentLabel: parentLabel,
			inputtype: inputtype,
			checkedClass: checkedClass,
			uncheckedClass: uncheckedClass
		});

		if ( !this.options.enhanced ) {
			this._enhance();
		}

		this._on( label, {
			vmouseover: "_handleLabelVMouseOver",
			vclick: "_handleLabelVClick"
		});

		this._on( input, {
			vmousedown: "_cacheVals",
			vclick: "_handleInputVClick",
			focus: "_handleInputFocus",
			blur: "_handleInputBlur"
		});

		this._handleFormReset();
		this.refresh();
	},

	_enhance: function() {
		this.label.addClass( "ui-btn ui-corner-all");

		if ( this.parentLabel.length > 0 ) {
			this.input.add( this.label ).wrapAll( this._wrapper() );
		} else {
			//this.element.replaceWith( this.input.add( this.label ).wrapAll( this._wrapper() ) );
			this.element.wrap( this._wrapper() );
			this.element.parent().prepend( this.label );
		}

		// Wrap the input + label in a div

		this._setOptions({
			"theme": this.options.theme,
			"iconpos": this.options.iconpos,
			"mini": this.options.mini
		});

	},

	_wrapper: function() {
		return $( "<div class='"  +
			( this.options.wrapperClass ? this.options.wrapperClass : "" ) +
			" ui-" + this.inputtype +
			( this.options.disabled ? " ui-state-disabled" : "" ) + "' >" );
	},

	_handleInputFocus: function() {
		this.label.addClass( $.mobile.focusClass );
	},

	_handleInputBlur: function() {
		this.label.removeClass( $.mobile.focusClass );
	},

	_handleInputVClick: function() {
		var $this = this.element;

		// Adds checked attribute to checked input when keyboard is used
		if ( $this.is( ":checked" ) ) {

			$this.prop( "checked", true);
			this._getInputSet().not( $this ).prop( "checked", false );
		} else {
			$this.prop( "checked", false );
		}

		this._updateAll();
	},

	_handleLabelVMouseOver: function( event ) {
		if ( this.label.parent().hasClass( "ui-state-disabled" ) ) {
			event.stopPropagation();
		}
	},

	_handleLabelVClick: function( event ) {
		var input = this.element;

		if ( input.is( ":disabled" ) ) {
			event.preventDefault();
			return;
		}

		this._cacheVals();

		input.prop( "checked", this.inputtype === "radio" && true || !input.prop( "checked" ) );

		// trigger click handler's bound directly to the input as a substitute for
		// how label clicks behave normally in the browsers
		// TODO: it would be nice to let the browser's handle the clicks and pass them
		//       through to the associate input. we can swallow that click at the parent
		//       wrapper element level
		input.triggerHandler( "click" );

		// Input set for common radio buttons will contain all the radio
		// buttons, but will not for checkboxes. clearing the checked status
		// of other radios ensures the active button state is applied properly
		this._getInputSet().not( input ).prop( "checked", false );

		this._updateAll();
		return false;
	},

	_cacheVals: function() {
		this._getInputSet().each( function() {
			$( this ).attr("data-" + $.mobile.ns + "cacheVal", this.checked );
		});
	},

	//returns either a set of radios with the same name attribute, or a single checkbox
	_getInputSet: function() {
		if ( this.inputtype === "checkbox" ) {
			return this.element;
		}

		return this.element.closest( "form, :jqmData(role='page'), :jqmData(role='dialog')" )
			.find( "input[name='" + this.element[ 0 ].name + "'][type='" + this.inputtype + "']" );
	},

	_updateAll: function() {
		var self = this;

		this._getInputSet().each( function() {
			var $this = $( this );

			if ( this.checked || self.inputtype === "checkbox" ) {
				$this.trigger( "change" );
			}
		})
		.checkboxradio( "refresh" );
	},

	_reset: function() {
		this.refresh();
	},

	// Is the widget supposed to display an icon?
	_hasIcon: function() {
		var controlgroup, controlgroupWidget,
			controlgroupConstructor = $.mobile.controlgroup;

		// If the controlgroup widget is defined ...
		if ( controlgroupConstructor ) {
			controlgroup = this.element.closest(
				":mobile-controlgroup," +
				controlgroupConstructor.prototype.initSelector );

			// ... and the checkbox is in a controlgroup ...
			if ( controlgroup.length > 0 ) {

				// ... look for a controlgroup widget instance, and ...
				controlgroupWidget = $.data( controlgroup[ 0 ], "mobile-controlgroup" );

				// ... if found, decide based on the option value, ...
				return ( ( controlgroupWidget ? controlgroupWidget.options.type :

					// ... otherwise decide based on the "type" data attribute.
					controlgroup.attr( "data-" + $.mobile.ns + "type" ) ) !== "horizontal" );
			}
		}

		// Normally, the widget displays an icon.
		return true;
	},

	refresh: function() {
		var hasIcon = this._hasIcon(),
			isChecked = this.element[ 0 ].checked,
			active = $.mobile.activeBtnClass,
			iconposClass = "ui-btn-icon-" + this.options.iconpos,
			addClasses = [],
			removeClasses = [];

		if ( hasIcon ) {
			removeClasses.push( active );
			addClasses.push( iconposClass );
		} else {
			removeClasses.push( iconposClass );
			( isChecked ? addClasses : removeClasses ).push( active );
		}

		if ( isChecked ) {
			addClasses.push( this.checkedClass );
			removeClasses.push( this.uncheckedClass );
		} else {
			addClasses.push( this.uncheckedClass );
			removeClasses.push( this.checkedClass );
		}

		this.label
			.addClass( addClasses.join( " " ) )
			.removeClass( removeClasses.join( " " ) );
	},

	widget: function() {
		return this.label.parent();
	},

	_setOptions: function( options ) {
		var label = this.label,
			currentOptions = this.options,
			outer = this.widget(),
			hasIcon = this._hasIcon();

		if ( options.disabled !== undefined ) {
			this.input.prop( "disabled", !!options.disabled );
			outer.toggleClass( "ui-state-disabled", !!options.disabled );
		}
		if ( options.mini !== undefined ) {
			outer.toggleClass( "ui-mini", !!options.mini );
		}
		if ( options.theme !== undefined ) {
			label
				.removeClass( "ui-btn-" + currentOptions.theme )
				.addClass( "ui-btn-" + options.theme );
		}
		if ( options.wrapperClass !== undefined ) {
			outer
				.removeClass( currentOptions.wrapperClass )
				.addClass( options.wrapperClass );
		}
		if ( options.iconpos !== undefined && hasIcon ) {
			label.removeClass( "ui-btn-icon-" + currentOptions.iconpos ).addClass( "ui-btn-icon-" + options.iconpos );
		} else if ( !hasIcon ) {
			label.removeClass( "ui-btn-icon-" + currentOptions.iconpos );
		}
		this._super( options );
	}

}, $.mobile.behaviors.formReset ) );

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.button", {

	initSelector: "input[type='button'], input[type='submit'], input[type='reset']",

	options: {
		theme: null,
		icon: null,
		iconpos: "left",
		iconshadow: false, /* TODO: Deprecated in 1.4, remove in 1.5. */
		corners: true,
		shadow: true,
		inline: null,
		mini: null,
		wrapperClass: null,
		enhanced: false
	},

	_create: function() {

		if ( this.element.is( ":disabled" ) ) {
			this.options.disabled = true;
		}

		if ( !this.options.enhanced ) {
			this._enhance();
		}

		$.extend( this, {
			wrapper: this.element.parent()
		});

		this._on( {
			focus: function() {
				this.widget().addClass( $.mobile.focusClass );
			},

			blur: function() {
				this.widget().removeClass( $.mobile.focusClass );
			}
		});

		this.refresh( true );
	},

	_enhance: function() {
		this.element.wrap( this._button() );
	},

	_button: function() {
		var options = this.options,
			iconClasses = this._getIconClasses( this.options );

		return $("<div class='ui-btn ui-input-btn" +
			( options.wrapperClass ? " " + options.wrapperClass : "" ) +
			( options.theme ? " ui-btn-" + options.theme : "" ) +
			( options.corners ? " ui-corner-all" : "" ) +
			( options.shadow ? " ui-shadow" : "" ) +
			( options.inline ? " ui-btn-inline" : "" ) +
			( options.mini ? " ui-mini" : "" ) +
			( options.disabled ? " ui-state-disabled" : "" ) +
			( iconClasses ? ( " " + iconClasses ) : "" ) +
			"' >" + this.element.val() + "</div>" );
	},

	widget: function() {
		return this.wrapper;
	},

	_destroy: function() {
			this.element.insertBefore( this.button );
			this.button.remove();
	},

	_getIconClasses: function( options ) {
		return ( options.icon ? ( "ui-icon-" + options.icon +
			( options.iconshadow ? " ui-shadow-icon" : "" ) + /* TODO: Deprecated in 1.4, remove in 1.5. */
			" ui-btn-icon-" + options.iconpos ) : "" );
	},

	_setOptions: function( options ) {
		var outer = this.widget();

		if ( options.theme !== undefined ) {
			outer
				.removeClass( this.options.theme )
				.addClass( "ui-btn-" + options.theme );
		}
		if ( options.corners !== undefined ) {
			outer.toggleClass( "ui-corner-all", options.corners );
		}
		if ( options.shadow !== undefined ) {
			outer.toggleClass( "ui-shadow", options.shadow );
		}
		if ( options.inline !== undefined ) {
			outer.toggleClass( "ui-btn-inline", options.inline );
		}
		if ( options.mini !== undefined ) {
			outer.toggleClass( "ui-mini", options.mini );
		}
		if ( options.disabled !== undefined ) {
			this.element.prop( "disabled", options.disabled );
			outer.toggleClass( "ui-state-disabled", options.disabled );
		}

		if ( options.icon !== undefined ||
				options.iconshadow !== undefined || /* TODO: Deprecated in 1.4, remove in 1.5. */
				options.iconpos !== undefined ) {
			outer
				.removeClass( this._getIconClasses( this.options ) )
				.addClass( this._getIconClasses(
					$.extend( {}, this.options, options ) ) );
		}

		this._super( options );
	},

	refresh: function( create ) {
		if ( this.options.icon && this.options.iconpos === "notext" && this.element.attr( "title" ) ) {
			this.element.attr( "title", this.element.val() );
		}
		if ( !create ) {
			var originalElement = this.element.detach();
			$( this.wrapper ).text( this.element.val() ).append( originalElement );
		}
	}
});

})( jQuery );

(function( $ ) {
	var	meta = $( "meta[name=viewport]" ),
		initialContent = meta.attr( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1, user-scalable=no",
		enabledZoom = initialContent + ",maximum-scale=10, user-scalable=yes",
		disabledInitially = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test( initialContent );

	$.mobile.zoom = $.extend( {}, {
		enabled: !disabledInitially,
		locked: false,
		disable: function( lock ) {
			if ( !disabledInitially && !$.mobile.zoom.locked ) {
				meta.attr( "content", disabledZoom );
				$.mobile.zoom.enabled = false;
				$.mobile.zoom.locked = lock || false;
			}
		},
		enable: function( unlock ) {
			if ( !disabledInitially && ( !$.mobile.zoom.locked || unlock === true ) ) {
				meta.attr( "content", enabledZoom );
				$.mobile.zoom.enabled = true;
				$.mobile.zoom.locked = false;
			}
		},
		restore: function() {
			if ( !disabledInitially ) {
				meta.attr( "content", initialContent );
				$.mobile.zoom.enabled = true;
			}
		}
	});

}( jQuery ));

(function( $, undefined ) {

$.widget( "mobile.textinput", {
	initSelector: "input[type='text']," +
		"input[type='search']," +
		":jqmData(type='search')," +
		"input[type='number']," +
		":jqmData(type='number')," +
		"input[type='password']," +
		"input[type='email']," +
		"input[type='url']," +
		"input[type='tel']," +
		"textarea," +
		"input[type='time']," +
		"input[type='date']," +
		"input[type='month']," +
		"input[type='week']," +
		"input[type='datetime']," +
		"input[type='datetime-local']," +
		"input[type='color']," +
		"input:not([type])," +
		"input[type='file']",

	options: {
		theme: null,
		corners: true,
		mini: false,
		// This option defaults to true on iOS devices.
		preventFocusZoom: /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1,
		wrapperClass: "",
		enhanced: false
	},

	_create: function() {

		var options = this.options,
			isSearch = this.element.is( "[type='search'], :jqmData(type='search')" ),
			isTextarea = this.element[ 0 ].tagName === "TEXTAREA",
			isRange = this.element.is( "[data-" + ( $.mobile.ns || "" ) + "type='range']" ),
			inputNeedsWrap = ( (this.element.is( "input" ) ||
				this.element.is( "[data-" + ( $.mobile.ns || "" ) + "type='search']" ) ) &&
					!isRange );

		if ( this.element.prop( "disabled" ) ) {
			options.disabled = true;
		}

		$.extend( this, {
			classes: this._classesFromOptions(),
			isSearch: isSearch,
			isTextarea: isTextarea,
			isRange: isRange,
			inputNeedsWrap: inputNeedsWrap
		});

		this._autoCorrect();

		if ( !options.enhanced ) {
			this._enhance();
		}

		this._on( {
			"focus": "_handleFocus",
			"blur": "_handleBlur"
		});

	},

	refresh: function() {
		this.setOptions({
			"disabled" : this.element.is( ":disabled" )
		});
	},

	_enhance: function() {
		var elementClasses = [];

		if ( this.isTextarea ) {
			elementClasses.push( "ui-input-text" );
		}

		if ( this.isTextarea || this.isRange ) {
			elementClasses.push( "ui-shadow-inset" );
		}

		//"search" and "text" input widgets
		if ( this.inputNeedsWrap ) {
			this.element.wrap( this._wrap() );
		} else {
			elementClasses = elementClasses.concat( this.classes );
		}

		this.element.addClass( elementClasses.join( " " ) );
	},

	widget: function() {
		return ( this.inputNeedsWrap ) ? this.element.parent() : this.element;
	},

	_classesFromOptions: function() {
		var options = this.options,
			classes = [];

		classes.push( "ui-body-" + ( ( options.theme === null ) ? "inherit" : options.theme ) );
		if ( options.corners ) {
			classes.push( "ui-corner-all" );
		}
		if ( options.mini ) {
			classes.push( "ui-mini" );
		}
		if ( options.disabled ) {
			classes.push( "ui-state-disabled" );
		}
		if ( options.wrapperClass ) {
			classes.push( options.wrapperClass );
		}

		return classes;
	},

	_wrap: function() {
		return $( "<div class='" +
			( this.isSearch ? "ui-input-search " : "ui-input-text " ) +
			this.classes.join( " " ) + " " +
			"ui-shadow-inset'></div>" );
	},

	_autoCorrect: function() {
		// XXX: Temporary workaround for issue 785 (Apple bug 8910589).
		//      Turn off autocorrect and autocomplete on non-iOS 5 devices
		//      since the popup they use can't be dismissed by the user. Note
		//      that we test for the presence of the feature by looking for
		//      the autocorrect property on the input element. We currently
		//      have no test for iOS 5 or newer so we're temporarily using
		//      the touchOverflow support flag for jQM 1.0. Yes, I feel dirty.
		//      - jblas
		if ( typeof this.element[0].autocorrect !== "undefined" &&
			!$.support.touchOverflow ) {

			// Set the attribute instead of the property just in case there
			// is code that attempts to make modifications via HTML.
			this.element[0].setAttribute( "autocorrect", "off" );
			this.element[0].setAttribute( "autocomplete", "off" );
		}
	},

	_handleBlur: function() {
		this.widget().removeClass( $.mobile.focusClass );
		if ( this.options.preventFocusZoom ) {
			$.mobile.zoom.enable( true );
		}
	},

	_handleFocus: function() {
		// In many situations, iOS will zoom into the input upon tap, this
		// prevents that from happening
		if ( this.options.preventFocusZoom ) {
			$.mobile.zoom.disable( true );
		}
		this.widget().addClass( $.mobile.focusClass );
	},

	_setOptions: function ( options ) {
		var outer = this.widget();

		this._super( options );

		if ( !( options.disabled === undefined &&
			options.mini === undefined &&
			options.corners === undefined &&
			options.theme === undefined &&
			options.wrapperClass === undefined ) ) {

			outer.removeClass( this.classes.join( " " ) );
			this.classes = this._classesFromOptions();
			outer.addClass( this.classes.join( " " ) );
		}

		if ( options.disabled !== undefined ) {
			this.element.prop( "disabled", !!options.disabled );
		}
	},

	_destroy: function() {
		if ( this.options.enhanced ) {
			return;
		}
		if ( this.inputNeedsWrap ) {
			this.element.unwrap();
		}
		this.element.removeClass( "ui-input-text " + this.classes.join( " " ) );
	}
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.slider", $.extend( {
	initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",

	widgetEventPrefix: "slide",

	options: {
		theme: null,
		trackTheme: null,
		corners: true,
		mini: false,
		highlight: false
	},

	_create: function() {

		// TODO: Each of these should have comments explain what they're for
		var self = this,
			control = this.element,
			trackTheme = this.options.trackTheme || $.mobile.getAttribute( control[ 0 ], "theme" ),
			trackThemeClass = trackTheme ? " ui-bar-" + trackTheme : " ui-bar-inherit",
			cornerClass = ( this.options.corners || control.jqmData( "corners" ) ) ? " ui-corner-all" : "",
			miniClass = ( this.options.mini || control.jqmData( "mini" ) ) ? " ui-mini" : "",
			cType = control[ 0 ].nodeName.toLowerCase(),
			isToggleSwitch = ( cType === "select" ),
			isRangeslider = control.parent().is( ":jqmData(role='rangeslider')" ),
			selectClass = ( isToggleSwitch ) ? "ui-slider-switch" : "",
			controlID = control.attr( "id" ),
			$label = $( "[for='" + controlID + "']" ),
			labelID = $label.attr( "id" ) || controlID + "-label",
			min = !isToggleSwitch ? parseFloat( control.attr( "min" ) ) : 0,
			max =  !isToggleSwitch ? parseFloat( control.attr( "max" ) ) : control.find( "option" ).length-1,
			step = window.parseFloat( control.attr( "step" ) || 1 ),
			domHandle = document.createElement( "a" ),
			handle = $( domHandle ),
			domSlider = document.createElement( "div" ),
			slider = $( domSlider ),
			valuebg = this.options.highlight && !isToggleSwitch ? (function() {
				var bg = document.createElement( "div" );
				bg.className = "ui-slider-bg " + $.mobile.activeBtnClass;
				return $( bg ).prependTo( slider );
			})() : false,
			options,
			wrapper,
			j, length,
			i, optionsCount, origTabIndex,
			side, activeClass, sliderImg;

		$label.attr( "id", labelID );
		this.isToggleSwitch = isToggleSwitch;

		domHandle.setAttribute( "href", "#" );
		domSlider.setAttribute( "role", "application" );
		domSlider.className = [ this.isToggleSwitch ? "ui-slider ui-slider-track ui-shadow-inset " : "ui-slider-track ui-shadow-inset ", selectClass, trackThemeClass, cornerClass, miniClass ].join( "" );
		domHandle.className = "ui-slider-handle";
		domSlider.appendChild( domHandle );

		handle.attr({
			"role": "slider",
			"aria-valuemin": min,
			"aria-valuemax": max,
			"aria-valuenow": this._value(),
			"aria-valuetext": this._value(),
			"title": this._value(),
			"aria-labelledby": labelID
		});

		$.extend( this, {
			slider: slider,
			handle: handle,
			control: control,
			type: cType,
			step: step,
			max: max,
			min: min,
			valuebg: valuebg,
			isRangeslider: isRangeslider,
			dragging: false,
			beforeStart: null,
			userModified: false,
			mouseMoved: false
		});

		if ( isToggleSwitch ) {
			// TODO: restore original tabindex (if any) in a destroy method
			origTabIndex = control.attr( "tabindex" );
			if ( origTabIndex ) {
				handle.attr( "tabindex", origTabIndex );
			}
			control.attr( "tabindex", "-1" ).focus(function() {
				$( this ).blur();
				handle.focus();
			});

			wrapper = document.createElement( "div" );
			wrapper.className = "ui-slider-inneroffset";

			for ( j = 0, length = domSlider.childNodes.length; j < length; j++ ) {
				wrapper.appendChild( domSlider.childNodes[j] );
			}

			domSlider.appendChild( wrapper );

			// slider.wrapInner( "<div class='ui-slider-inneroffset'></div>" );

			// make the handle move with a smooth transition
			handle.addClass( "ui-slider-handle-snapping" );

			options = control.find( "option" );

			for ( i = 0, optionsCount = options.length; i < optionsCount; i++ ) {
				side = !i ? "b" : "a";
				activeClass = !i ? "" : " " + $.mobile.activeBtnClass;
				sliderImg = document.createElement( "span" );

				sliderImg.className = [ "ui-slider-label ui-slider-label-", side, activeClass ].join( "" );
				sliderImg.setAttribute( "role", "img" );
				sliderImg.appendChild( document.createTextNode( options[i].innerHTML ) );
				$( sliderImg ).prependTo( slider );
			}

			self._labels = $( ".ui-slider-label", slider );

		}

		// monitor the input for updated values
		control.addClass( isToggleSwitch ? "ui-slider-switch" : "ui-slider-input" );

		this._on( control, {
			"change": "_controlChange",
			"keyup": "_controlKeyup",
			"blur": "_controlBlur",
			"vmouseup": "_controlVMouseUp"
		});

		slider.bind( "vmousedown", $.proxy( this._sliderVMouseDown, this ) )
			.bind( "vclick", false );

		// We have to instantiate a new function object for the unbind to work properly
		// since the method itself is defined in the prototype (causing it to unbind everything)
		this._on( document, { "vmousemove": "_preventDocumentDrag" });
		this._on( slider.add( document ), { "vmouseup": "_sliderVMouseUp" });

		slider.insertAfter( control );

		// wrap in a div for styling purposes
		if ( !isToggleSwitch && !isRangeslider ) {
			wrapper = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>";

			control.add( slider ).wrapAll( wrapper );
		}

		// bind the handle event callbacks and set the context to the widget instance
		this._on( this.handle, {
			"vmousedown": "_handleVMouseDown",
			"keydown": "_handleKeydown",
			"keyup": "_handleKeyup"
		});

		this.handle.bind( "vclick", false );

		this._handleFormReset();

		this.refresh( undefined, undefined, true );
	},

	_setOptions: function( options ) {
		if ( options.theme !== undefined ) {
			this._setTheme( options.theme );
		}

		if ( options.trackTheme !== undefined ) {
			this._setTrackTheme( options.trackTheme );
		}

		if ( options.corners !== undefined ) {
			this._setCorners( options.corners );
		}

		if ( options.mini !== undefined ) {
			this._setMini( options.mini );
		}

		if ( options.highlight !== undefined ) {
			this._setHighlight( options.highlight );
		}

		if ( options.disabled !== undefined ) {
			this._setDisabled( options.disabled );
		}
		this._super( options );
	},

	_controlChange: function( event ) {
		// if the user dragged the handle, the "change" event was triggered from inside refresh(); don't call refresh() again
		if ( this._trigger( "controlchange", event ) === false ) {
			return false;
		}
		if ( !this.mouseMoved ) {
			this.refresh( this._value(), true );
		}
	},

	_controlKeyup: function(/* event */) { // necessary?
		this.refresh( this._value(), true, true );
	},

	_controlBlur: function(/* event */) {
		this.refresh( this._value(), true );
	},

	// it appears the clicking the up and down buttons in chrome on
	// range/number inputs doesn't trigger a change until the field is
	// blurred. Here we check thif the value has changed and refresh
	_controlVMouseUp: function(/* event */) {
		this._checkedRefresh();
	},

	// NOTE force focus on handle
	_handleVMouseDown: function(/* event */) {
		this.handle.focus();
	},

	_handleKeydown: function( event ) {
		var index = this._value();
		if ( this.options.disabled ) {
			return;
		}

		// In all cases prevent the default and mark the handle as active
		switch ( event.keyCode ) {
			case $.mobile.keyCode.HOME:
			case $.mobile.keyCode.END:
			case $.mobile.keyCode.PAGE_UP:
			case $.mobile.keyCode.PAGE_DOWN:
			case $.mobile.keyCode.UP:
			case $.mobile.keyCode.RIGHT:
			case $.mobile.keyCode.DOWN:
			case $.mobile.keyCode.LEFT:
				event.preventDefault();

				if ( !this._keySliding ) {
					this._keySliding = true;
					this.handle.addClass( "ui-state-active" ); /* TODO: We don't use this class for styling. Do we need to add it? */
				}

				break;
		}

		// move the slider according to the keypress
		switch ( event.keyCode ) {
			case $.mobile.keyCode.HOME:
				this.refresh( this.min );
				break;
			case $.mobile.keyCode.END:
				this.refresh( this.max );
				break;
			case $.mobile.keyCode.PAGE_UP:
			case $.mobile.keyCode.UP:
			case $.mobile.keyCode.RIGHT:
				this.refresh( index + this.step );
				break;
			case $.mobile.keyCode.PAGE_DOWN:
			case $.mobile.keyCode.DOWN:
			case $.mobile.keyCode.LEFT:
				this.refresh( index - this.step );
				break;
		}
	}, // remove active mark

	_handleKeyup: function(/* event */) {
		if ( this._keySliding ) {
			this._keySliding = false;
			this.handle.removeClass( "ui-state-active" ); /* See comment above. */
		}
	},

	_sliderVMouseDown: function( event ) {
		// NOTE: we don't do this in refresh because we still want to
		//       support programmatic alteration of disabled inputs
		if ( this.options.disabled || !( event.which === 1 || event.which === 0 || event.which === undefined ) ) {
			return false;
		}
		if ( this._trigger( "beforestart", event ) === false ) {
			return false;
		}
		this.dragging = true;
		this.userModified = false;
		this.mouseMoved = false;

		if ( this.isToggleSwitch ) {
			this.beforeStart = this.element[0].selectedIndex;
		}

		this.refresh( event );
		this._trigger( "start" );
		return false;
	},

	_sliderVMouseUp: function() {
		if ( this.dragging ) {
			this.dragging = false;

			if ( this.isToggleSwitch ) {
				// make the handle move with a smooth transition
				this.handle.addClass( "ui-slider-handle-snapping" );

				if ( this.mouseMoved ) {
					// this is a drag, change the value only if user dragged enough
					if ( this.userModified ) {
						this.refresh( this.beforeStart === 0 ? 1 : 0 );
					} else {
						this.refresh( this.beforeStart );
					}
				} else {
					// this is just a click, change the value
					this.refresh( this.beforeStart === 0 ? 1 : 0 );
				}
			}

			this.mouseMoved = false;
			this._trigger( "stop" );
			return false;
		}
	},

	_preventDocumentDrag: function( event ) {
			// NOTE: we don't do this in refresh because we still want to
			//       support programmatic alteration of disabled inputs
			if ( this._trigger( "drag", event ) === false) {
				return false;
			}
			if ( this.dragging && !this.options.disabled ) {

				// this.mouseMoved must be updated before refresh() because it will be used in the control "change" event
				this.mouseMoved = true;

				if ( this.isToggleSwitch ) {
					// make the handle move in sync with the mouse
					this.handle.removeClass( "ui-slider-handle-snapping" );
				}

				this.refresh( event );

				// only after refresh() you can calculate this.userModified
				this.userModified = this.beforeStart !== this.element[0].selectedIndex;
				return false;
			}
		},

	_checkedRefresh: function() {
		if ( this.value !== this._value() ) {
			this.refresh( this._value() );
		}
	},

	_value: function() {
		return  this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat( this.element.val() ) ;
	},

	_reset: function() {
		this.refresh( undefined, false, true );
	},

	refresh: function( val, isfromControl, preventInputUpdate ) {
		// NOTE: we don't return here because we want to support programmatic
		//       alteration of the input value, which should still update the slider

		var self = this,
			parentTheme = $.mobile.getAttribute( this.element[ 0 ], "theme" ),
			theme = this.options.theme || parentTheme,
			themeClass =  theme ? " ui-btn-" + theme : "",
			trackTheme = this.options.trackTheme || parentTheme,
			trackThemeClass = trackTheme ? " ui-bar-" + trackTheme : " ui-bar-inherit",
			cornerClass = this.options.corners ? " ui-corner-all" : "",
			miniClass = this.options.mini ? " ui-mini" : "",
			left, width, data, tol,
			pxStep, percent,
			control, isInput, optionElements, min, max, step,
			newval, valModStep, alignValue, percentPerStep,
			handlePercent, aPercent, bPercent,
			valueChanged;

		self.slider[0].className = [ this.isToggleSwitch ? "ui-slider ui-slider-switch ui-slider-track ui-shadow-inset" : "ui-slider-track ui-shadow-inset", trackThemeClass, cornerClass, miniClass ].join( "" );
		if ( this.options.disabled || this.element.prop( "disabled" ) ) {
			this.disable();
		}

		// set the stored value for comparison later
		this.value = this._value();
		if ( this.options.highlight && !this.isToggleSwitch && this.slider.find( ".ui-slider-bg" ).length === 0 ) {
			this.valuebg = (function() {
				var bg = document.createElement( "div" );
				bg.className = "ui-slider-bg " + $.mobile.activeBtnClass;
				return $( bg ).prependTo( self.slider );
			})();
		}
		this.handle.addClass( "ui-btn" + themeClass + " ui-shadow" );

		control = this.element;
		isInput = !this.isToggleSwitch;
		optionElements = isInput ? [] : control.find( "option" );
		min =  isInput ? parseFloat( control.attr( "min" ) ) : 0;
		max = isInput ? parseFloat( control.attr( "max" ) ) : optionElements.length - 1;
		step = ( isInput && parseFloat( control.attr( "step" ) ) > 0 ) ? parseFloat( control.attr( "step" ) ) : 1;

		if ( typeof val === "object" ) {
			data = val;
			// a slight tolerance helped get to the ends of the slider
			tol = 8;

			left = this.slider.offset().left;
			width = this.slider.width();
			pxStep = width/((max-min)/step);
			if ( !this.dragging ||
					data.pageX < left - tol ||
					data.pageX > left + width + tol ) {
				return;
			}
			if ( pxStep > 1 ) {
				percent = ( ( data.pageX - left ) / width ) * 100;
			} else {
				percent = Math.round( ( ( data.pageX - left ) / width ) * 100 );
			}
		} else {
			if ( val == null ) {
				val = isInput ? parseFloat( control.val() || 0 ) : control[0].selectedIndex;
			}
			percent = ( parseFloat( val ) - min ) / ( max - min ) * 100;
		}

		if ( isNaN( percent ) ) {
			return;
		}

		newval = ( percent / 100 ) * ( max - min ) + min;

		//from jQuery UI slider, the following source will round to the nearest step
		valModStep = ( newval - min ) % step;
		alignValue = newval - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		percentPerStep = 100/((max-min)/step);
		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see jQueryUI: #4124)
		newval = parseFloat( alignValue.toFixed(5) );

		if ( typeof pxStep === "undefined" ) {
			pxStep = width / ( (max-min) / step );
		}
		if ( pxStep > 1 && isInput ) {
			percent = ( newval - min ) * percentPerStep * ( 1 / step );
		}
		if ( percent < 0 ) {
			percent = 0;
		}

		if ( percent > 100 ) {
			percent = 100;
		}

		if ( newval < min ) {
			newval = min;
		}

		if ( newval > max ) {
			newval = max;
		}

		this.handle.css( "left", percent + "%" );

		this.handle[0].setAttribute( "aria-valuenow", isInput ? newval : optionElements.eq( newval ).attr( "value" ) );

		this.handle[0].setAttribute( "aria-valuetext", isInput ? newval : optionElements.eq( newval ).getEncodedText() );

		this.handle[0].setAttribute( "title", isInput ? newval : optionElements.eq( newval ).getEncodedText() );

		if ( this.valuebg ) {
			this.valuebg.css( "width", percent + "%" );
		}

		// drag the label widths
		if ( this._labels ) {
			handlePercent = this.handle.width() / this.slider.width() * 100;
			aPercent = percent && handlePercent + ( 100 - handlePercent ) * percent / 100;
			bPercent = percent === 100 ? 0 : Math.min( handlePercent + 100 - aPercent, 100 );

			this._labels.each(function() {
				var ab = $( this ).hasClass( "ui-slider-label-a" );
				$( this ).width( ( ab ? aPercent : bPercent  ) + "%" );
			});
		}

		if ( !preventInputUpdate ) {
			valueChanged = false;

			// update control"s value
			if ( isInput ) {
				valueChanged = control.val() !== newval;
				control.val( newval );
			} else {
				valueChanged = control[ 0 ].selectedIndex !== newval;
				control[ 0 ].selectedIndex = newval;
			}
			if ( this._trigger( "beforechange", val ) === false) {
					return false;
			}
			if ( !isfromControl && valueChanged ) {
				control.trigger( "change" );
			}
		}
	},

	_setHighlight: function( value ) {
		value = !!value;
		if ( value ) {
			this.options.highlight = !!value;
			this.refresh();
		} else if ( this.valuebg ) {
			this.valuebg.remove();
			this.valuebg = false;
		}
	},

	_setTheme: function( value ) {
		this.handle
			.removeClass( "ui-btn-" + this.options.theme )
			.addClass( "ui-btn-" + value );

		var currentTheme = this.options.theme ? this.options.theme : "inherit",
			newTheme = value ? value : "inherit";

		this.control
			.removeClass( "ui-body-" + currentTheme )
			.addClass( "ui-body-" + newTheme );
	},

	_setTrackTheme: function( value ) {
		var currentTrackTheme = this.options.trackTheme ? this.options.trackTheme : "inherit",
			newTrackTheme = value ? value : "inherit";

		this.slider
			.removeClass( "ui-body-" + currentTrackTheme )
			.addClass( "ui-body-" + newTrackTheme );
	},

	_setMini: function( value ) {
		value = !!value;
		if ( !this.isToggleSwitch && !this.isRangeslider ) {
			this.slider.parent().toggleClass( "ui-mini", value );
			this.element.toggleClass( "ui-mini", value );
		}
		this.slider.toggleClass( "ui-mini", value );
	},

	_setCorners: function( value ) {
		this.slider.toggleClass( "ui-corner-all", value );

		if ( !this.isToggleSwitch ) {
			this.control.toggleClass( "ui-corner-all", value );
		}
	},

	_setDisabled: function( value ) {
		value = !!value;
		this.element.prop( "disabled", value );
		this.slider.toggleClass( "ui-state-disabled" ).attr( "aria-disabled", value );
	}

}, $.mobile.behaviors.formReset ) );

})( jQuery );

(function( $, undefined ) {

var popup;

function getPopup() {
	if ( !popup ) {
		popup = $( "<div></div>", {
			"class": "ui-slider-popup ui-shadow ui-corner-all"
		});
	}
	return popup.clone();
}

$.widget( "mobile.slider", $.mobile.slider, {
	options: {
		popupEnabled: false,
		showValue: false
	},

	_create: function() {
		this._super();

		$.extend( this, {
			_currentValue: null,
			_popup: null,
			_popupVisible: false
		});

		this._setOption( "popupEnabled", this.options.popupEnabled );

		this._on( this.handle, { "vmousedown" : "_showPopup" } );
		this._on( this.slider.add( this.document ), { "vmouseup" : "_hidePopup" } );
		this._refresh();
	},

	// position the popup centered 5px above the handle
	_positionPopup: function() {
		var dstOffset = this.handle.offset();

		this._popup.offset( {
			left: dstOffset.left + ( this.handle.width() - this._popup.width() ) / 2,
			top: dstOffset.top - this._popup.outerHeight() - 5
		});
	},

	_setOption: function( key, value ) {
		this._super( key, value );

		if ( key === "showValue" ) {
			this.handle.html( value && !this.options.mini ? this._value() : "" );
		} else if ( key === "popupEnabled" ) {
			if ( value && !this._popup ) {
				this._popup = getPopup()
					.addClass( "ui-body-" + ( this.options.theme || "a" ) )
					.insertBefore( this.element );
			}
		}
	},

	// show value on the handle and in popup
	refresh: function() {
		this._super.apply( this, arguments );
		this._refresh();
	},

	_refresh: function() {
		var o = this.options, newValue;

		if ( o.popupEnabled ) {
			// remove the title attribute from the handle (which is
			// responsible for the annoying tooltip); NB we have
			// to do it here as the jqm slider sets it every time
			// the slider's value changes :(
			this.handle.removeAttr( "title" );
		}

		newValue = this._value();
		if ( newValue === this._currentValue ) {
			return;
		}
		this._currentValue = newValue;

		if ( o.popupEnabled && this._popup ) {
			this._positionPopup();
			this._popup.html( newValue );
		} else if ( o.showValue && !this.options.mini ) {
			this.handle.html( newValue );
		}
	},

	_showPopup: function() {
		if ( this.options.popupEnabled && !this._popupVisible ) {
			this.handle.html( "" );
			this._popup.show();
			this._positionPopup();
			this._popupVisible = true;
		}
	},

	_hidePopup: function() {
		var o = this.options;

		if ( o.popupEnabled && this._popupVisible ) {
			if ( o.showValue && !o.mini ) {
				this.handle.html( this._value() );
			}
			this._popup.hide();
			this._popupVisible = false;
		}
	}
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.flipswitch", $.extend({

	options: {
		onText: "On",
		offText: "Off",
		theme: null,
		enhanced: false,
		wrapperClass: null,
		corners: true,
		mini: false
	},

	_create: function() {
			if ( !this.options.enhanced ) {
				this._enhance();
			} else {
				$.extend( this, {
					flipswitch: this.element.parent(),
					on: this.element.find( ".ui-flipswitch-on" ).eq( 0 ),
					off: this.element.find( ".ui-flipswitch-off" ).eq(0),
					type: this.element.get( 0 ).tagName
				});
			}

			this._handleFormReset();

			if ( this.element.is( ":disabled" ) ) {
				this._setOptions({
					"disabled": true
				});
			}

			this._on( this.flipswitch, {
				"click": "_toggle",
				"swipeleft": "_left",
				"swiperight": "_right"
			});

			this._on( this.on, {
				"keydown": "_keydown"
			});

			this._on( {
				"change": "refresh"
			});
	},

	widget: function() {
		return this.flipswitch;
	},

	_left: function() {
		this.flipswitch.removeClass( "ui-flipswitch-active" );
		if ( this.type === "SELECT" ) {
			this.element.get( 0 ).selectedIndex = 0;
		} else {
			this.element.prop( "checked", false );
		}
		this.element.trigger( "change" );
	},

	_right: function() {
		this.flipswitch.addClass( "ui-flipswitch-active" );
		if ( this.type === "SELECT" ) {
			this.element.get( 0 ).selectedIndex = 1;
		} else {
			this.element.prop( "checked", true );
		}
		this.element.trigger( "change" );
	},

	_enhance: function() {
		var flipswitch = $( "<div>" ),
			options = this.options,
			element = this.element,
			theme = options.theme ? options.theme : "inherit",
			on = $( "<span></span>", { tabindex: 1 } ),
			off = $( "<span></span>" ),
			type = element.get( 0 ).tagName,
			onText = ( type === "INPUT" ) ?
				options.onText : element.find( "option" ).eq( 1 ).text(),
			offText = ( type === "INPUT" ) ?
				options.offText : element.find( "option" ).eq( 0 ).text();

			on
				.addClass( "ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit" )
				.text( onText );
			off
				.addClass( "ui-flipswitch-off" )
				.text( offText );

			flipswitch
				.addClass( "ui-flipswitch ui-shadow-inset " +
					"ui-bar-" + theme + " " +
					( options.wrapperClass ? options.wrapperClass : "" ) + " " +
					( ( element.is( ":checked" ) ||
						element
							.find( "option" )
							.eq( 1 )
							.is( ":selected" ) ) ? "ui-flipswitch-active" : "" ) +
					( element.is(":disabled") ? " ui-state-disabled": "") +
					( options.corners ? " ui-corner-all": "" ) +
					( options.mini ? " ui-mini": "" ) )
				.append( on, off );

			element
				.addClass( "ui-flipswitch-input" )
				.after( flipswitch )
				.appendTo( flipswitch );

		$.extend( this, {
			flipswitch: flipswitch,
			on: on,
			off: off,
			type: type
		});
	},

	_reset: function() {
		this.refresh();
	},

	refresh: function() {
		var direction,
			existingDirection = this.flipswitch.hasClass( "ui-flipswitch-active" ) ? "_right" : "_left";

		if ( this.type === "SELECT" ) {
			direction = ( this.element.get( 0 ).selectedIndex > 0 ) ? "_right": "_left";
		} else {
			direction = this.element.prop( "checked" ) ? "_right": "_left";
		}

		if ( direction !== existingDirection ) {
			this[ direction ]();
		}
	},

	_toggle: function() {
		var direction = this.flipswitch.hasClass( "ui-flipswitch-active" ) ? "_left" : "_right";

		this[ direction ]();
	},

	_keydown: function( e ) {
		if ( e.which === $.mobile.keyCode.LEFT ) {
			this._left();
		} else if ( e.which === $.mobile.keyCode.RIGHT ) {
			this._right();
		} else if ( e.which === $.mobile.keyCode.SPACE ) {
			this._toggle();
			e.preventDefault();
		}
	},

	_setOptions: function( options ) {
		if ( options.theme !== undefined ) {
			var currentTheme = options.theme ? options.theme : "inherit",
				newTheme = options.theme ? options.theme : "inherit";

			this.widget()
				.removeClass( "ui-bar-" + currentTheme )
				.addClass( "ui-bar-" + newTheme );
		}
		if ( options.onText !== undefined ) {
			this.on.text( options.onText );
		}
		if ( options.offText !== undefined ) {
			this.off.text( options.offText );
		}
		if ( options.disabled !== undefined ) {
			this.widget().toggleClass( "ui-state-disabled", options.disabled );
		}
		if ( options.mini !== undefined ) {
			this.widget().toggleClass( "ui-mini", options.mini );
		}
		if ( options.corners !== undefined ) {
			this.widget().toggleClass( "ui-corner-all", options.corners );
		}

		this._super( options );
	},

	_destroy: function() {
		if ( this.options.enhanced ) {
			return;
		}
		this.on.remove();
		this.off.remove();
		this.element.unwrap();
		this.flipswitch.remove();
		this.removeClass( "ui-flipswitch-input" );
	}

}, $.mobile.behaviors.formReset ) );

})( jQuery );

(function( $, undefined ) {
	$.widget( "mobile.rangeslider", $.extend( {

		options: {
			theme: null,
			trackTheme: null,
			corners: true,
			mini: false,
			highlight: true
		},

		_create: function() {
			var $el = this.element,
			elClass = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
			_inputFirst = $el.find( "input" ).first(),
			_inputLast = $el.find( "input" ).last(),
			_label = $el.find( "label" ).first(),
			_sliderWidgetFirst = $.data( _inputFirst.get( 0 ), "mobile-slider" ) ||
				$.data( _inputFirst.slider().get( 0 ), "mobile-slider" ),
			_sliderWidgetLast = $.data( _inputLast.get(0), "mobile-slider" ) ||
				$.data( _inputLast.slider().get( 0 ), "mobile-slider" ),
			_sliderFirst = _sliderWidgetFirst.slider,
			_sliderLast = _sliderWidgetLast.slider,
			firstHandle = _sliderWidgetFirst.handle,
			_sliders = $( "<div class='ui-rangeslider-sliders' />" ).appendTo( $el );

			_inputFirst.addClass( "ui-rangeslider-first" );
			_inputLast.addClass( "ui-rangeslider-last" );
			$el.addClass( elClass );

			_sliderFirst.appendTo( _sliders );
			_sliderLast.appendTo( _sliders );
			_label.insertBefore( $el );
			firstHandle.prependTo( _sliderLast );

			$.extend( this, {
				_inputFirst: _inputFirst,
				_inputLast: _inputLast,
				_sliderFirst: _sliderFirst,
				_sliderLast: _sliderLast,
				_label: _label,
				_targetVal: null,
				_sliderTarget: false,
				_sliders: _sliders,
				_proxy: false
			});

			this.refresh();
			this._on( this.element.find( "input.ui-slider-input" ), {
				"slidebeforestart": "_slidebeforestart",
				"slidestop": "_slidestop",
				"slidedrag": "_slidedrag",
				"slidebeforechange": "_change",
				"blur": "_change",
				"keyup": "_change"
			});
			this._on({
				"mousedown":"_change"
			});
			this._on( this.element.closest( "form" ), {
				"reset":"_handleReset"
			});
			this._on( firstHandle, {
				"vmousedown": "_dragFirstHandle"
			});
		},
		_handleReset: function() {
			var self = this;
			//we must wait for the stack to unwind before updateing other wise sliders will not have updated yet
			setTimeout( function() {
				self._updateHighlight();
			},0);
		},

		_dragFirstHandle: function( event ) {
			//if the first handle is dragged send the event to the first slider
			$.data( this._inputFirst.get(0), "mobile-slider" ).dragging = true;
			$.data( this._inputFirst.get(0), "mobile-slider" ).refresh( event );
			return false;
		},

		_slidedrag: function( event ) {
			var first = $( event.target ).is( this._inputFirst ),
				otherSlider = ( first ) ? this._inputLast : this._inputFirst;

			this._sliderTarget = false;
			//if the drag was initiated on an extreme and the other handle is focused send the events to
			//the closest handle
			if ( ( this._proxy === "first" && first ) || ( this._proxy === "last" && !first ) ) {
				$.data( otherSlider.get(0), "mobile-slider" ).dragging = true;
				$.data( otherSlider.get(0), "mobile-slider" ).refresh( event );
				return false;
			}
		},

		_slidestop: function( event ) {
			var first = $( event.target ).is( this._inputFirst );

			this._proxy = false;
			//this stops dragging of the handle and brings the active track to the front
			//this makes clicks on the track go the the last handle used
			this.element.find( "input" ).trigger( "vmouseup" );
			this._sliderFirst.css( "z-index", first ? 1 : "" );
		},

		_slidebeforestart: function( event ) {
			this._sliderTarget = false;
			//if the track is the target remember this and the original value
			if ( $( event.originalEvent.target ).hasClass( "ui-slider-track" ) ) {
				this._sliderTarget = true;
				this._targetVal = $( event.target ).val();
			}
		},

		_setOptions: function( options ) {
			if ( options.theme !== undefined ) {
				this._setTheme( options.theme );
			}

			if ( options.trackTheme !== undefined ) {
				this._setTrackTheme( options.trackTheme );
			}

			if ( options.mini !== undefined ) {
				this._setMini( options.mini );
			}

			if ( options.highlight !== undefined ) {
				this._setHighlight( options.highlight );
			}
			this._super( options );
			this.refresh();
		},

		refresh: function() {
			var $el = this.element,
				o = this.options;

			if ( this._inputFirst.is( ":disabled" ) || this._inputLast.is( ":disabled" ) ) {
				this.options.disabled = true;
			}

			$el.find( "input" ).slider({
				theme: o.theme,
				trackTheme: o.trackTheme,
				disabled: o.disabled,
				corners: o.corners,
				mini: o.mini,
				highlight: o.highlight
			}).slider( "refresh" );
			this._updateHighlight();
		},

		_change: function( event ) {
			if ( event.type === "keyup" ) {
				this._updateHighlight();
				return false;
			}

			var self = this,
				min = parseFloat( this._inputFirst.val(), 10 ),
				max = parseFloat( this._inputLast.val(), 10 ),
				first = $( event.target ).hasClass( "ui-rangeslider-first" ),
				thisSlider = first ? this._inputFirst : this._inputLast,
				otherSlider = first ? this._inputLast : this._inputFirst;

			if ( ( this._inputFirst.val() > this._inputLast.val() && event.type === "mousedown" && !$(event.target).hasClass("ui-slider-handle")) ) {
				thisSlider.blur();
			} else if ( event.type === "mousedown" ) {
				return;
			}
			if ( min > max && !this._sliderTarget ) {
				//this prevents min from being greater then max
				thisSlider.val( first ? max: min ).slider( "refresh" );
				this._trigger( "normalize" );
			} else if ( min > max ) {
				//this makes it so clicks on the target on either extreme go to the closest handle
				thisSlider.val( this._targetVal ).slider( "refresh" );

				//You must wait for the stack to unwind so first slider is updated before updating second
				setTimeout( function() {
					otherSlider.val( first ? min: max ).slider( "refresh" );
					$.data( otherSlider.get(0), "mobile-slider" ).handle.focus();
					self._sliderFirst.css( "z-index", first ? "" : 1 );
					self._trigger( "normalize" );
				}, 0 );
				this._proxy = ( first ) ? "first" : "last";
			}
			//fixes issue where when both _sliders are at min they cannot be adjusted
			if ( min === max ) {
				$.data( thisSlider.get(0), "mobile-slider" ).handle.css( "z-index", 1 );
				$.data( otherSlider.get(0), "mobile-slider" ).handle.css( "z-index", 0 );
			} else {
				$.data( otherSlider.get(0), "mobile-slider" ).handle.css( "z-index", "" );
				$.data( thisSlider.get(0), "mobile-slider" ).handle.css( "z-index", "" );
			}

			this._updateHighlight();

			if ( min >= max ) {
				return false;
			}
		},

		_updateHighlight: function() {
			var min = parseInt( $.data( this._inputFirst.get(0), "mobile-slider" ).handle.get(0).style.left, 10 ),
				max = parseInt( $.data( this._inputLast.get(0), "mobile-slider" ).handle.get(0).style.left, 10 ),
				width = (max - min);

			this.element.find( ".ui-slider-bg" ).css({
				"margin-left": min + "%",
				"width": width + "%"
			});
		},

		_setTheme: function( value ) {
			this._inputFirst.slider( "option", "theme", value );
			this._inputLast.slider( "option", "theme", value );
		},

		_setTrackTheme: function( value ) {
			this._inputFirst.slider( "option", "trackTheme", value );
			this._inputLast.slider( "option", "trackTheme", value );
		},

		_setMini: function( value ) {
			this._inputFirst.slider( "option", "mini", value );
			this._inputLast.slider( "option", "mini", value );
			this.element.toggleClass( "ui-mini", !!value );
		},

		_setHighlight: function( value ) {
			this._inputFirst.slider( "option", "highlight", value );
			this._inputLast.slider( "option", "highlight", value );
		},

		_destroy: function() {
			this._label.prependTo( this.element );
			this.element.removeClass( "ui-rangeslider ui-mini" );
			this._inputFirst.after( this._sliderFirst );
			this._inputLast.after( this._sliderLast );
			this._sliders.remove();
			this.element.find( "input" ).removeClass( "ui-rangeslider-first ui-rangeslider-last" ).slider( "destroy" );
		}

	}, $.mobile.behaviors.formReset ) );

})( jQuery );

(function( $, undefined ) {

	$.widget( "mobile.textinput", $.mobile.textinput, {
		options: {
			clearBtn: false,
			clearBtnText: "Clear text"
		},

		_create: function() {
			this._super();

			if ( !!this.options.clearBtn || this.isSearch ) {
				this._addClearBtn();
			}
		},

		clearButton: function() {

			return $( "<a href='#' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all" +
    "' title='" + this.options.clearBtnText + "'>" + this.options.clearBtnText + "</a>" );

		},

		_clearBtnClick: function( event ) {
			this.element.val( "" )
					.focus()
					.trigger( "change" );

			this._clearBtn.addClass( "ui-input-clear-hidden" );
			event.preventDefault();
		},

		_addClearBtn: function() {

			if ( !this.options.enhanced ) {
				this._enhanceClear();
			}

			$.extend( this, {
				_clearBtn: this.widget().find("a.ui-input-clear")
			});

			this._bindClearEvents();

			this._toggleClear();

		},

		_enhanceClear: function() {

			this.clearButton().appendTo( this.widget() );
			this.widget().addClass( "ui-input-has-clear" );

		},

		_bindClearEvents: function() {

			this._on( this._clearBtn, {
				"click": "_clearBtnClick"
			});

			this._on({
				"keyup": "_toggleClear",
				"change": "_toggleClear",
				"input": "_toggleClear",
				"focus": "_toggleClear",
				"blur": "_toggleClear",
				"cut": "_toggleClear",
				"paste": "_toggleClear"

			});

		},

		_unbindClear: function() {
			this._off( this._clearBtn, "click");
			this._off( this.element, "keyup change input focus blur cut paste" );
		},

		_setOptions: function( options ) {
			this._super( options );

			if ( options.clearbtn !== undefined && !this.element.is( "textarea, :jqmData(type='range')" ) ) {
				if ( options.clearBtn ) {
					this._addClearBtn();
				} else {
					this._destroyClear();
				}
			}

			if ( options.clearBtnText !== undefined && this._clearBtn !== undefined ) {
				this._clearBtn.text( options.clearBtnText );
			}
		},

		_toggleClear: function() {
			this._delay( "_toggleClearClass", 0 );
		},

		_toggleClearClass: function() {
			this._clearBtn.toggleClass( "ui-input-clear-hidden", !this.element.val() );
		},

		_destroyClear: function() {
			this.element.removeClass( "ui-input-has-clear" );
			this._unbindClear()._clearBtn.remove();
		},

		_destroy: function() {
			this._super();
			this._destroyClear();
		}

	});

})( jQuery );

(function( $, undefined ) {

	$.widget( "mobile.textinput", $.mobile.textinput, {
		options: {
			autogrow:true,
			keyupTimeoutBuffer: 100
		},

		_create: function() {
			this._super();

			if ( this.options.autogrow && this.isTextarea ) {
				this._autogrow();
			}
		},

		_autogrow: function() {
			this._on({
				"keyup": "_timeout",
				"change": "_timeout",
				"input": "_timeout",
				"paste": "_timeout",
			});

			// Attach to the various you-have-become-visible notifications that the
			// various framework elements emit.
			// TODO: Remove all but the updatelayout handler once #6426 is fixed.
			this._on( true, this.document, {

				// TODO: Move to non-deprecated event
				"pageshow": "_handleShow",
				"popupbeforeposition": "_handleShow",
				"updatelayout": "_handleShow",
				"panelopen": "_handleShow"
			});
		},

		// Synchronously fix the widget height if this widget's parents are such
		// that they show/hide content at runtime. We still need to check whether
		// the widget is actually visible in case it is contained inside multiple
		// such containers. For example: panel contains collapsible contains
		// autogrow textinput. The panel may emit "panelopen" indicating that its
		// content has become visible, but the collapsible is still collapsed, so
		// the autogrow textarea is still not visible.
		_handleShow: function( event ) {
			if ( $.contains( event.target, this.element[ 0 ] ) &&
				this.element.is( ":visible" ) ) {

				if ( event.type !== "popupbeforeposition" ) {
					this.element
						.addClass( "ui-textinput-autogrow-resize" )
						.one( "transitionend webkitTransitionEnd oTransitionEnd",
							$.proxy( function() {
								this.element.removeClass( "ui-textinput-autogrow-resize" );
							}, this ) );
				}
				this._prepareHeightUpdate();
			}
		},

		_unbindAutogrow: function() {
			this._off( this.element, "keyup change input paste" );
			this._off( this.document,
				"pageshow popupbeforeposition updatelayout panelopen" );
		},

		keyupTimeout: null,

		_prepareHeightUpdate: function( delay ) {
			if ( this.keyupTimeout ) {
				clearTimeout( this.keyupTimeout );
			}
			if ( delay === undefined ) {
				this._updateHeight();
			} else {
				this.keyupTimeout = this._delay( "_updateHeight", delay );
			}
		},

		_timeout: function() {
			this._prepareHeightUpdate( this.options.keyupTimeoutBuffer );
		},

		_updateHeight: function() {

			this.keyupTimeout = 0;

			this.element.css({
				"height": 0,
				"min-height": 0,
				"max-height": 0
			});

			var paddingTop, paddingBottom, paddingHeight,
				scrollHeight = this.element[ 0 ].scrollHeight,
				clientHeight = this.element[ 0 ].clientHeight,
				borderTop = parseFloat( this.element.css( "border-top-width" ) ),
				borderBottom = parseFloat( this.element.css( "border-bottom-width" ) ),
				borderHeight = borderTop + borderBottom,
				height = scrollHeight + borderHeight + 15;

			// Issue 6179: Padding is not included in scrollHeight and
			// clientHeight by Firefox if no scrollbar is visible. Because
			// textareas use the border-box box-sizing model, padding should be
			// included in the new (assigned) height. Because the height is set
			// to 0, clientHeight == 0 in Firefox. Therefore, we can use this to
			// check if padding must be added.
			if ( clientHeight === 0 ) {
				paddingTop = parseFloat( this.element.css( "padding-top" ) );
				paddingBottom = parseFloat( this.element.css( "padding-bottom" ) );
				paddingHeight = paddingTop + paddingBottom;

				height += paddingHeight;
			}

			this.element.css({
				"height": height,
				"min-height": "",
				"max-height": ""
			});
		},

		refresh: function() {
			if ( this.options.autogrow && this.isTextarea ) {
				this._updateHeight();
			}
		},

		_setOptions: function( options ) {

			this._super( options );

			if ( options.autogrow !== undefined && this.isTextarea ) {
				if ( options.autogrow ) {
					this._autogrow();
				} else {
					this._unbindAutogrow();
				}
			}
		}

	});
})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.selectmenu", $.extend( {
	initSelector: "select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",

	options: {
		theme: null,
		icon: "carat-d",
		iconpos: "right",
		inline: false,
		corners: true,
		shadow: true,
		iconshadow: false, /* TODO: Deprecated in 1.4, remove in 1.5. */
		overlayTheme: null,
		dividerTheme: null,
		hidePlaceholderMenuItems: true,
		closeText: "Close",
		nativeMenu: true,
		// This option defaults to true on iOS devices.
		preventFocusZoom: /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1,
		mini: false
	},

	_button: function() {
		return $( "<div/>" );
	},

	_setDisabled: function( value ) {
		this.element.attr( "disabled", value );
		this.button.attr( "aria-disabled", value );
		return this._setOption( "disabled", value );
	},

	_focusButton : function() {
		var self = this;

		setTimeout( function() {
			self.button.focus();
		}, 40);
	},

	_selectOptions: function() {
		return this.select.find( "option" );
	},

	// setup items that are generally necessary for select menu extension
	_preExtension: function() {
		var inline = this.options.inline || this.element.jqmData( "inline" ),
			mini = this.options.mini || this.element.jqmData( "mini" ),
			classes = "";
		// TODO: Post 1.1--once we have time to test thoroughly--any classes manually applied to the original element should be carried over to the enhanced element, with an `-enhanced` suffix. See https://github.com/jquery/jquery-mobile/issues/3577
		/* if ( $el[0].className.length ) {
			classes = $el[0].className;
		} */
		if ( !!~this.element[0].className.indexOf( "ui-btn-left" ) ) {
			classes = " ui-btn-left";
		}

		if (  !!~this.element[0].className.indexOf( "ui-btn-right" ) ) {
			classes = " ui-btn-right";
		}

		if ( inline ) {
			classes += " ui-btn-inline";
		}
		if ( mini ) {
			classes += " ui-mini";
		}

		this.select = this.element.removeClass( "ui-btn-left ui-btn-right" ).wrap( "<div class='ui-select" + classes + "'>" );
		this.selectId  = this.select.attr( "id" ) || ( "select-" + this.uuid );
		this.buttonId = this.selectId + "-button";
		this.label = $( "label[for='"+ this.selectId +"']" );
		this.isMultiple = this.select[ 0 ].multiple;
	},

	_destroy: function() {
		var wrapper = this.element.parents( ".ui-select" );
		if ( wrapper.length > 0 ) {
			if ( wrapper.is( ".ui-btn-left, .ui-btn-right" ) ) {
				this.element.addClass( wrapper.hasClass( "ui-btn-left" ) ? "ui-btn-left" : "ui-btn-right" );
			}
			this.element.insertAfter( wrapper );
			wrapper.remove();
		}
	},

	_create: function() {
		this._preExtension();

		this.button = this._button();

		var self = this,

			options = this.options,

			iconpos = options.icon ? ( options.iconpos || this.select.jqmData( "iconpos" ) ) : false,

			button = this.button
				.insertBefore( this.select )
				.attr( "id", this.buttonId )
				.addClass( "ui-btn" +
					( options.icon ? ( " ui-icon-" + options.icon + " ui-btn-icon-" + iconpos +
					( options.iconshadow ? " ui-shadow-icon" : "" ) ) :	"" ) + /* TODO: Remove in 1.5. */
					( options.theme ? " ui-btn-" + options.theme : "" ) +
					( options.corners ? " ui-corner-all" : "" ) +
					( options.shadow ? " ui-shadow" : "" ) );

		this.setButtonText();

		// Opera does not properly support opacity on select elements
		// In Mini, it hides the element, but not its text
		// On the desktop,it seems to do the opposite
		// for these reasons, using the nativeMenu option results in a full native select in Opera
		if ( options.nativeMenu && window.opera && window.opera.version ) {
			button.addClass( "ui-select-nativeonly" );
		}

		// Add counter for multi selects
		if ( this.isMultiple ) {
			this.buttonCount = $( "<span>" )
				.addClass( "ui-li-count ui-body-inherit" )
				.hide()
				.appendTo( button.addClass( "ui-li-has-count" ) );
		}

		// Disable if specified
		if ( options.disabled || this.element.attr( "disabled" )) {
			this.disable();
		}

		// Events on native select
		this.select.change(function() {
			self.refresh();

			if ( !!options.nativeMenu ) {
				this.blur();
			}
		});

		this._handleFormReset();

		this._on( this.button, {
			keydown: "_handleKeydown"
		});

		this.build();
	},

	build: function() {
		var self = this;

		this.select
			.appendTo( self.button )
			.bind( "vmousedown", function() {
				// Add active class to button
				self.button.addClass( $.mobile.activeBtnClass );
			})
			.bind( "focus", function() {
				self.button.addClass( $.mobile.focusClass );
			})
			.bind( "blur", function() {
				self.button.removeClass( $.mobile.focusClass );
			})
			.bind( "focus vmouseover", function() {
				self.button.trigger( "vmouseover" );
			})
			.bind( "vmousemove", function() {
				// Remove active class on scroll/touchmove
				self.button.removeClass( $.mobile.activeBtnClass );
			})
			.bind( "change blur vmouseout", function() {
				self.button.trigger( "vmouseout" )
					.removeClass( $.mobile.activeBtnClass );
			});

		// In many situations, iOS will zoom into the select upon tap, this prevents that from happening
		self.button.bind( "vmousedown", function() {
			if ( self.options.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
			}
		});
		self.label.bind( "click focus", function() {
			if ( self.options.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
			}
		});
		self.select.bind( "focus", function() {
			if ( self.options.preventFocusZoom ) {
					$.mobile.zoom.disable( true );
			}
		});
		self.button.bind( "mouseup", function() {
			if ( self.options.preventFocusZoom ) {
				setTimeout(function() {
					$.mobile.zoom.enable( true );
				}, 0 );
			}
		});
		self.select.bind( "blur", function() {
			if ( self.options.preventFocusZoom ) {
				$.mobile.zoom.enable( true );
			}
		});

	},

	selected: function() {
		return this._selectOptions().filter( ":selected" );
	},

	selectedIndices: function() {
		var self = this;

		return this.selected().map(function() {
			return self._selectOptions().index( this );
		}).get();
	},

	setButtonText: function() {
		var self = this,
			selected = this.selected(),
			text = this.placeholder,
			span = $( document.createElement( "span" ) );

		this.button.children( "span" ).not( ".ui-li-count" ).remove().end().end().prepend( (function() {
			if ( selected.length ) {
				text = selected.map(function() {
					return $( this ).text();
				}).get().join( ", " );
			} else {
				text = self.placeholder;
			}

			if ( text ) {
				span.text( text );
			} else {
				span.html( "&nbsp;" );
			}

			// TODO possibly aggregate multiple select option classes
			return span
				.addClass( self.select.attr( "class" ) )
				.addClass( selected.attr( "class" ) )
				.removeClass( "ui-screen-hidden" );
		})());
	},

	setButtonCount: function() {
		var selected = this.selected();

		// multiple count inside button
		if ( this.isMultiple ) {
			this.buttonCount[ selected.length > 1 ? "show" : "hide" ]().text( selected.length );
		}
	},

	_handleKeydown: function( /* event */ ) {
		this._delay( "_refreshButton" );
	},

	_reset: function() {
		this.refresh();
	},

	_refreshButton: function() {
		this.setButtonText();
		this.setButtonCount();
	},

	refresh: function() {
		this._refreshButton();
	},

	// open and close preserved in native selects
	// to simplify users code when looping over selects
	open: $.noop,
	close: $.noop,

	disable: function() {
		this._setDisabled( true );
		this.button.addClass( "ui-state-disabled" );
	},

	enable: function() {
		this._setDisabled( false );
		this.button.removeClass( "ui-state-disabled" );
	}
}, $.mobile.behaviors.formReset ) );

})( jQuery );

(function( $, undefined ) {

$.mobile.links = function( target ) {

	//links within content areas, tests included with page
	$( target )
		.find( "a" )
		.jqmEnhanceable()
		.filter( ":jqmData(rel='popup')[href][href!='']" )
		.each( function() {
			// Accessibility info for popups
			var element = this,
				idref = element.getAttribute( "href" ).substring( 1 );

			if ( idref ) {
				element.setAttribute( "aria-haspopup", true );
				element.setAttribute( "aria-owns", idref );
				element.setAttribute( "aria-expanded", false );
			}
		})
		.end()
		.not( ".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')" )
		.addClass( "ui-link" );

};

})( jQuery );


(function( $, undefined ) {

function fitSegmentInsideSegment( windowSize, segmentSize, offset, desired ) {
	var returnValue = desired;

	if ( windowSize < segmentSize ) {
		// Center segment if it's bigger than the window
		returnValue = offset + ( windowSize - segmentSize ) / 2;
	} else {
		// Otherwise center it at the desired coordinate while keeping it completely inside the window
		returnValue = Math.min( Math.max( offset, desired - segmentSize / 2 ), offset + windowSize - segmentSize );
	}

	return returnValue;
}

function getWindowCoordinates( theWindow ) {
	return {
		x: theWindow.scrollLeft(),
		y: theWindow.scrollTop(),
		cx: ( theWindow[ 0 ].innerWidth || theWindow.width() ),
		cy: ( theWindow[ 0 ].innerHeight || theWindow.height() )
	};
}

$.widget( "mobile.popup", {
	options: {
		wrapperClass: null,
		theme: null,
		overlayTheme: null,
		shadow: true,
		corners: true,
		transition: "none",
		positionTo: "origin",
		tolerance: null,
		closeLinkSelector: "a:jqmData(rel='back')",
		closeLinkEvents: "click.popup",
		navigateEvents: "navigate.popup",
		closeEvents: "navigate.popup pagebeforechange.popup",
		dismissible: true,
		enhanced: false,

		// NOTE Windows Phone 7 has a scroll position caching issue that
		//      requires us to disable popup history management by default
		//      https://github.com/jquery/jquery-mobile/issues/4784
		//
		// NOTE this option is modified in _create!
		history: !$.mobile.browser.oldIE
	},

	_create: function() {
		var theElement = this.element,
			myId = theElement.attr( "id" ),
			currentOptions = this.options;

		// We need to adjust the history option to be false if there's no AJAX nav.
		// We can't do it in the option declarations because those are run before
		// it is determined whether there shall be AJAX nav.
		currentOptions.history = currentOptions.history && $.mobile.ajaxEnabled && $.mobile.hashListeningEnabled;

		// Define instance variables
		$.extend( this, {
			_scrollTop: 0,
			_page: theElement.closest( ".ui-page" ),
			_ui: null,
			_fallbackTransition: "",
			_currentTransition: false,
			_prerequisites: null,
			_isOpen: false,
			_tolerance: null,
			_resizeData: null,
			_ignoreResizeTo: 0,
			_orientationchangeInProgress: false
		});

		if ( this._page.length === 0 ) {
			this._page = $( "body" );
		}

		if ( currentOptions.enhanced ) {
			this._ui = {
				container: theElement.parent(),
				screen: theElement.parent().prev(),
				placeholder: $( this.document[ 0 ].getElementById( myId + "-placeholder" ) )
			};
		} else {
			this._ui = this._enhance( theElement, myId );
			this._applyTransition( currentOptions.transition );
		}
		this
			._setTolerance( currentOptions.tolerance )
			._ui.focusElement = this._ui.container;

		// Event handlers
		this._on( this._ui.screen, { "vclick": "_eatEventAndClose" } );
		this._on( this.window, {
			orientationchange: $.proxy( this, "_handleWindowOrientationchange" ),
			resize: $.proxy( this, "_handleWindowResize" ),
			keyup: $.proxy( this, "_handleWindowKeyUp" )
		});
		this._on( this.document, { "focusin": "_handleDocumentFocusIn" } );
	},

	_enhance: function( theElement, myId ) {
		var currentOptions = this.options,
			wrapperClass = currentOptions.wrapperClass,
			ui = {
				screen: $( "<div class='ui-screen-hidden ui-popup-screen " +
				this._themeClassFromOption( "ui-overlay-", currentOptions.overlayTheme ) + "'></div>" ),
				placeholder: $( "<div style='display: none;'><!-- placeholder --></div>" ),
				container: $( "<div class='ui-popup-container ui-popup-hidden ui-popup-truncate" +
					( wrapperClass ? ( " " + wrapperClass ) : "" ) + "'></div>" )
			},
			fragment = this.document[ 0 ].createDocumentFragment();

		fragment.appendChild( ui.screen[ 0 ] );
		fragment.appendChild( ui.container[ 0 ] );

		if ( myId ) {
			ui.screen.attr( "id", myId + "-screen" );
			ui.container.attr( "id", myId + "-popup" );
			ui.placeholder
				.attr( "id", myId + "-placeholder" )
				.html( "<!-- placeholder for " + myId + " -->" );
		}

		// Apply the proto
		this._page[ 0 ].appendChild( fragment );
		// Leave a placeholder where the element used to be
		ui.placeholder.insertAfter( theElement );
		theElement
			.detach()
			.addClass( "ui-popup " +
				this._themeClassFromOption( "ui-body-", currentOptions.theme ) + " " +
				( currentOptions.shadow ? "ui-overlay-shadow " : "" ) +
				( currentOptions.corners ? "ui-corner-all " : "" ) )
			.appendTo( ui.container );

		return ui;
	},

	_eatEventAndClose: function( theEvent ) {
		theEvent.preventDefault();
		theEvent.stopImmediatePropagation();
		if ( this.options.dismissible ) {
			this.close();
		}
		return false;
	},

	// Make sure the screen covers the entire document - CSS is sometimes not
	// enough to accomplish this.
	_resizeScreen: function() {
		var screen = this._ui.screen,
			popupHeight = this._ui.container.outerHeight( true ),
			screenHeight = screen.removeAttr( "style" ).height(),

			// Subtracting 1 here is necessary for an obscure Andrdoid 4.0 bug where
			// the browser hangs if the screen covers the entire document :/
			documentHeight = this.document.height() - 1;

		if ( screenHeight < documentHeight ) {
			screen.height( documentHeight );
		} else if ( popupHeight > screenHeight ) {
			screen.height( popupHeight );
		}
	},

	_handleWindowKeyUp: function( theEvent ) {
		if ( this._isOpen && theEvent.keyCode === $.mobile.keyCode.ESCAPE ) {
			return this._eatEventAndClose( theEvent );
		}
	},

	_expectResizeEvent: function() {
		var windowCoordinates = getWindowCoordinates( this.window );

		if ( this._resizeData ) {
			if ( windowCoordinates.x === this._resizeData.windowCoordinates.x &&
				windowCoordinates.y === this._resizeData.windowCoordinates.y &&
				windowCoordinates.cx === this._resizeData.windowCoordinates.cx &&
				windowCoordinates.cy === this._resizeData.windowCoordinates.cy ) {
				// timeout not refreshed
				return false;
			} else {
				// clear existing timeout - it will be refreshed below
				clearTimeout( this._resizeData.timeoutId );
			}
		}

		this._resizeData = {
			timeoutId: this._delay( "_resizeTimeout", 200 ),
			windowCoordinates: windowCoordinates
		};

		return true;
	},

	_resizeTimeout: function() {
		if ( this._isOpen ) {
			if ( !this._expectResizeEvent() ) {
				if ( this._ui.container.hasClass( "ui-popup-hidden" ) ) {
					// effectively rapid-open the popup while leaving the screen intact
					this._ui.container.removeClass( "ui-popup-hidden ui-popup-truncate" );
					this.reposition( { positionTo: "window" } );
					this._ignoreResizeEvents();
				}

				this._resizeScreen();
				this._resizeData = null;
				this._orientationchangeInProgress = false;
			}
		} else {
			this._resizeData = null;
			this._orientationchangeInProgress = false;
		}
	},

	_stopIgnoringResizeEvents: function() {
		this._ignoreResizeTo = 0;
	},

	_ignoreResizeEvents: function() {
		if ( this._ignoreResizeTo ) {
			clearTimeout( this._ignoreResizeTo );
		}
		this._ignoreResizeTo = this._delay( "_stopIgnoringResizeEvents", 1000 );
	},

	_handleWindowResize: function(/* theEvent */) {
		if ( this._isOpen && this._ignoreResizeTo === 0 ) {
			if ( ( this._expectResizeEvent() || this._orientationchangeInProgress ) &&
				!this._ui.container.hasClass( "ui-popup-hidden" ) ) {
				// effectively rapid-close the popup while leaving the screen intact
				this._ui.container
					.addClass( "ui-popup-hidden ui-popup-truncate" )
					.removeAttr( "style" );
			}
		}
	},

	_handleWindowOrientationchange: function(/* theEvent */) {
		if ( !this._orientationchangeInProgress && this._isOpen && this._ignoreResizeTo === 0 ) {
			this._expectResizeEvent();
			this._orientationchangeInProgress = true;
		}
	},

	// When the popup is open, attempting to focus on an element that is not a
	// child of the popup will redirect focus to the popup
	_handleDocumentFocusIn: function( theEvent ) {
		var target,
			targetElement = theEvent.target,
			ui = this._ui;

		if ( !this._isOpen ) {
			return;
		}

		if ( targetElement !== ui.container[ 0 ] ) {
			target = $( targetElement );
			if ( 0 === target.parents().filter( ui.container[ 0 ] ).length ) {
				$( this.document[ 0 ].activeElement ).one( "focus", function(/* theEvent */) {
					target.blur();
				});
				ui.focusElement.focus();
				theEvent.preventDefault();
				theEvent.stopImmediatePropagation();
				return false;
			} else if ( ui.focusElement[ 0 ] === ui.container[ 0 ] ) {
				ui.focusElement = target;
			}
		}

		this._ignoreResizeEvents();
	},

	_themeClassFromOption: function( prefix, value ) {
		return ( value ? ( value === "none" ? "" : ( prefix + value ) ) : ( prefix + "inherit" ) );
	},

	_applyTransition: function( value ) {
		if ( value ) {
			this._ui.container.removeClass( this._fallbackTransition );
			if ( value !== "none" ) {
				this._fallbackTransition = $.mobile._maybeDegradeTransition( value );
				if ( this._fallbackTransition === "none" ) {
					this._fallbackTransition = "";
				}
				this._ui.container.addClass( this._fallbackTransition );
			}
		}

		return this;
	},

	_setOptions: function( newOptions ) {
		var currentOptions = this.options,
			theElement = this.element,
			screen = this._ui.screen;

		if ( newOptions.wrapperClass !== undefined ) {
			this._ui.container
				.removeClass( currentOptions.wrapperClass )
				.addClass( newOptions.wrapperClass );
		}

		if ( newOptions.theme !== undefined ) {
			theElement
				.removeClass( this._themeClassFromOption( "ui-body-", currentOptions.theme ) )
				.addClass( this._themeClassFromOption( "ui-body-", newOptions.theme ) );
		}

		if ( newOptions.overlayTheme !== undefined ) {
			screen
				.removeClass( this._themeClassFromOption( "ui-overlay-", currentOptions.overlayTheme ) )
				.addClass( this._themeClassFromOption( "ui-overlay-", newOptions.overlayTheme ) );

			if ( this._isOpen ) {
				screen.addClass( "in" );
			}
		}

		if ( newOptions.shadow !== undefined ) {
			theElement.toggleClass( "ui-overlay-shadow", newOptions.shadow );
		}

		if ( newOptions.corners !== undefined ) {
			theElement.toggleClass( "ui-corner-all", newOptions.corners );
		}

		if ( newOptions.transition !== undefined ) {
			if ( !this._currentTransition ) {
				this._applyTransition( newOptions.transition );
			}
		}

		if ( newOptions.tolerance !== undefined ) {
			this._setTolerance( newOptions.tolerance );
		}

		if ( newOptions.disabled !== undefined ) {
			if ( newOptions.disabled ) {
				this.close();
			}
		}

		return this._super( newOptions );
	},

	_setTolerance: function( value ) {
		var tol = { t: 30, r: 15, b: 30, l: 15 },
			ar;

		if ( value !== undefined ) {
			ar = String( value ).split( "," );

			$.each( ar, function( idx, val ) { ar[ idx ] = parseInt( val, 10 ); } );

			switch( ar.length ) {
				// All values are to be the same
				case 1:
					if ( !isNaN( ar[ 0 ] ) ) {
						tol.t = tol.r = tol.b = tol.l = ar[ 0 ];
					}
					break;

				// The first value denotes top/bottom tolerance, and the second value denotes left/right tolerance
				case 2:
					if ( !isNaN( ar[ 0 ] ) ) {
						tol.t = tol.b = ar[ 0 ];
					}
					if ( !isNaN( ar[ 1 ] ) ) {
						tol.l = tol.r = ar[ 1 ];
					}
					break;

				// The array contains values in the order top, right, bottom, left
				case 4:
					if ( !isNaN( ar[ 0 ] ) ) {
						tol.t = ar[ 0 ];
					}
					if ( !isNaN( ar[ 1 ] ) ) {
						tol.r = ar[ 1 ];
					}
					if ( !isNaN( ar[ 2 ] ) ) {
						tol.b = ar[ 2 ];
					}
					if ( !isNaN( ar[ 3 ] ) ) {
						tol.l = ar[ 3 ];
					}
					break;

				default:
					break;
			}
		}

		this._tolerance = tol;
		return this;
	},

	_clampPopupWidth: function( infoOnly ) {
		var menuSize,
			windowCoordinates = getWindowCoordinates( this.window ),
			// rectangle within which the popup must fit
			rectangle = {
				x: this._tolerance.l,
				y: windowCoordinates.y + this._tolerance.t,
				cx: windowCoordinates.cx - this._tolerance.l - this._tolerance.r,
				cy: windowCoordinates.cy - this._tolerance.t - this._tolerance.b
			};

		if ( !infoOnly ) {
			// Clamp the width of the menu before grabbing its size
			this._ui.container.css( "max-width", rectangle.cx );
		}

		menuSize = {
			cx: this._ui.container.outerWidth( true ),
			cy: this._ui.container.outerHeight( true )
		};

		return { rc: rectangle, menuSize: menuSize };
	},

	_calculateFinalLocation: function( desired, clampInfo ) {
		var returnValue,
			rectangle = clampInfo.rc,
			menuSize = clampInfo.menuSize;

		// Center the menu over the desired coordinates, while not going outside
		// the window tolerances. This will center wrt. the window if the popup is
		// too large.
		returnValue = {
			left: fitSegmentInsideSegment( rectangle.cx, menuSize.cx, rectangle.x, desired.x ),
			top: fitSegmentInsideSegment( rectangle.cy, menuSize.cy, rectangle.y, desired.y )
		};

		// Make sure the top of the menu is visible
		returnValue.top = Math.max( 0, returnValue.top );

		// If the height of the menu is smaller than the height of the document
		// align the bottom with the bottom of the document

		returnValue.top -= Math.min( returnValue.top,
			Math.max( 0, returnValue.top + menuSize.cy - this.document.height() ) );

		return returnValue;
	},

	// Try and center the overlay over the given coordinates
	_placementCoords: function( desired ) {
		return this._calculateFinalLocation( desired, this._clampPopupWidth() );
	},

	_createPrerequisites: function( screenPrerequisite, containerPrerequisite, whenDone ) {
		var prerequisites,
			self = this;

		// It is important to maintain both the local variable prerequisites and
		// self._prerequisites. The local variable remains in the closure of the
		// functions which call the callbacks passed in. The comparison between the
		// local variable and self._prerequisites is necessary, because once a
		// function has been passed to .animationComplete() it will be called next
		// time an animation completes, even if that's not the animation whose end
		// the function was supposed to catch (for example, if an abort happens
		// during the opening animation, the .animationComplete handler is not
		// called for that animation anymore, but the handler remains attached, so
		// it is called the next time the popup is opened - making it stale.
		// Comparing the local variable prerequisites to the widget-level variable
		// self._prerequisites ensures that callbacks triggered by a stale
		// .animationComplete will be ignored.

		prerequisites = {
			screen: $.Deferred(),
			container: $.Deferred()
		};

		prerequisites.screen.then( function() {
			if ( prerequisites === self._prerequisites ) {
				screenPrerequisite();
			}
		});

		prerequisites.container.then( function() {
			if ( prerequisites === self._prerequisites ) {
				containerPrerequisite();
			}
		});

		$.when( prerequisites.screen, prerequisites.container ).done( function() {
			if ( prerequisites === self._prerequisites ) {
				self._prerequisites = null;
				whenDone();
			}
		});

		self._prerequisites = prerequisites;
	},

	_animate: function( args ) {
		// NOTE before removing the default animation of the screen
		//      this had an animate callback that would resolve the deferred
		//      now the deferred is resolved immediately
		// TODO remove the dependency on the screen deferred
		this._ui.screen
			.removeClass( args.classToRemove )
			.addClass( args.screenClassToAdd );

		args.prerequisites.screen.resolve();

		if ( args.transition && args.transition !== "none" ) {
			if ( args.applyTransition ) {
				this._applyTransition( args.transition );
			}
			if ( this._fallbackTransition ) {
				this._ui.container
					.animationComplete( $.proxy( args.prerequisites.container, "resolve" ) )
					.addClass( args.containerClassToAdd )
					.removeClass( args.classToRemove );
				return;
			}
		}
		this._ui.container.removeClass( args.classToRemove );
		args.prerequisites.container.resolve();
	},

	// The desired coordinates passed in will be returned untouched if no reference element can be identified via
	// desiredPosition.positionTo. Nevertheless, this function ensures that its return value always contains valid
	// x and y coordinates by specifying the center middle of the window if the coordinates are absent.
	// options: { x: coordinate, y: coordinate, positionTo: string: "origin", "window", or jQuery selector
	_desiredCoords: function( openOptions ) {
		var offset,
			dst = null,
			windowCoordinates = getWindowCoordinates( this.window ),
			x = openOptions.x,
			y = openOptions.y,
			pTo = openOptions.positionTo;

		// Establish which element will serve as the reference
		if ( pTo && pTo !== "origin" ) {
			if ( pTo === "window" ) {
				x = windowCoordinates.cx / 2 + windowCoordinates.x;
				y = windowCoordinates.cy / 2 + windowCoordinates.y;
			} else {
				try {
					dst = $( pTo );
				} catch( err ) {
					dst = null;
				}
				if ( dst ) {
					dst.filter( ":visible" );
					if ( dst.length === 0 ) {
						dst = null;
					}
				}
			}
		}

		// If an element was found, center over it
		if ( dst ) {
			offset = dst.offset();
			x = offset.left + dst.outerWidth() / 2;
			y = offset.top + dst.outerHeight() / 2;
		}

		// Make sure x and y are valid numbers - center over the window
		if ( $.type( x ) !== "number" || isNaN( x ) ) {
			x = windowCoordinates.cx / 2 + windowCoordinates.x;
		}
		if ( $.type( y ) !== "number" || isNaN( y ) ) {
			y = windowCoordinates.cy / 2 + windowCoordinates.y;
		}

		return { x: x, y: y };
	},

	_reposition: function( openOptions ) {
		// We only care about position-related parameters for repositioning
		openOptions = {
			x: openOptions.x,
			y: openOptions.y,
			positionTo: openOptions.positionTo
		};
		this._trigger( "beforeposition", undefined, openOptions );
		this._ui.container.offset( this._placementCoords( this._desiredCoords( openOptions ) ) );
	},

	reposition: function( openOptions ) {
		if ( this._isOpen ) {
			this._reposition( openOptions );
		}
	},

	_openPrerequisitesComplete: function() {
		var id = this.element.attr( "id" );

		this._ui.container.addClass( "ui-popup-active" );
		this._isOpen = true;
		this._resizeScreen();
		this._ui.container.attr( "tabindex", "0" ).focus();
		this._ignoreResizeEvents();
		if ( id ) {
			this.document.find( "[aria-haspopup='true'][aria-owns='" +  id + "']" ).attr( "aria-expanded", true );
		}
		this._trigger( "afteropen" );
	},

	_open: function( options ) {
		var openOptions = $.extend( {}, this.options, options ),
			// TODO move blacklist to private method
			androidBlacklist = ( function() {
				var ua = navigator.userAgent,
					// Rendering engine is Webkit, and capture major version
					wkmatch = ua.match( /AppleWebKit\/([0-9\.]+)/ ),
					wkversion = !!wkmatch && wkmatch[ 1 ],
					androidmatch = ua.match( /Android (\d+(?:\.\d+))/ ),
					andversion = !!androidmatch && androidmatch[ 1 ],
					chromematch = ua.indexOf( "Chrome" ) > -1;

				// Platform is Android, WebKit version is greater than 534.13 ( Android 3.2.1 ) and not Chrome.
				if ( androidmatch !== null && andversion === "4.0" && wkversion && wkversion > 534.13 && !chromematch ) {
					return true;
				}
				return false;
			}());

		// Count down to triggering "popupafteropen" - we have two prerequisites:
		// 1. The popup window animation completes (container())
		// 2. The screen opacity animation completes (screen())
		this._createPrerequisites(
			$.noop,
			$.noop,
			$.proxy( this, "_openPrerequisitesComplete" ) );

		this._currentTransition = openOptions.transition;
		this._applyTransition( openOptions.transition );

		this._ui.screen.removeClass( "ui-screen-hidden" );
		this._ui.container.removeClass( "ui-popup-truncate" );

		// Give applications a chance to modify the contents of the container before it appears
		this._reposition( openOptions );

		this._ui.container.removeClass( "ui-popup-hidden" );

		if ( this.options.overlayTheme && androidBlacklist ) {
			/* TODO: The native browser on Android 4.0.X ("Ice Cream Sandwich") suffers from an issue where the popup overlay appears to be z-indexed above the popup itself when certain other styles exist on the same page -- namely, any element set to `position: fixed` and certain types of input. These issues are reminiscent of previously uncovered bugs in older versions of Android's native browser: https://github.com/scottjehl/Device-Bugs/issues/3
			This fix closes the following bugs ( I use "closes" with reluctance, and stress that this issue should be revisited as soon as possible ):
			https://github.com/jquery/jquery-mobile/issues/4816
			https://github.com/jquery/jquery-mobile/issues/4844
			https://github.com/jquery/jquery-mobile/issues/4874
			*/

			// TODO sort out why this._page isn't working
			this.element.closest( ".ui-page" ).addClass( "ui-popup-open" );
		}
		this._animate({
			additionalCondition: true,
			transition: openOptions.transition,
			classToRemove: "",
			screenClassToAdd: "in",
			containerClassToAdd: "in",
			applyTransition: false,
			prerequisites: this._prerequisites
		});
	},

	_closePrerequisiteScreen: function() {
		this._ui.screen
			.removeClass( "out" )
			.addClass( "ui-screen-hidden" );
	},

	_closePrerequisiteContainer: function() {
		this._ui.container
			.removeClass( "reverse out" )
			.addClass( "ui-popup-hidden ui-popup-truncate" )
			.removeAttr( "style" );
	},

	_closePrerequisitesDone: function() {
		var container = this._ui.container,
			id = this.element.attr( "id" );

		container.removeAttr( "tabindex" );

		// remove the global mutex for popups
		$.mobile.popup.active = undefined;

		// Blur elements inside the container, including the container
		$( ":focus", container[ 0 ] ).add( container[ 0 ] ).blur();

		if ( id ) {
			this.document.find( "[aria-haspopup='true'][aria-owns='" +  id + "']" ).attr( "aria-expanded", false );
		}

		// alert users that the popup is closed
		this._trigger( "afterclose" );
	},

	_close: function( immediate ) {
		this._ui.container.removeClass( "ui-popup-active" );
		this._page.removeClass( "ui-popup-open" );

		this._isOpen = false;

		// Count down to triggering "popupafterclose" - we have two prerequisites:
		// 1. The popup window reverse animation completes (container())
		// 2. The screen opacity animation completes (screen())
		this._createPrerequisites(
			$.proxy( this, "_closePrerequisiteScreen" ),
			$.proxy( this, "_closePrerequisiteContainer" ),
			$.proxy( this, "_closePrerequisitesDone" ) );

		this._animate( {
			additionalCondition: this._ui.screen.hasClass( "in" ),
			transition: ( immediate ? "none" : ( this._currentTransition ) ),
			classToRemove: "in",
			screenClassToAdd: "out",
			containerClassToAdd: "reverse out",
			applyTransition: true,
			prerequisites: this._prerequisites
		});
	},

	_unenhance: function() {
		if ( this.options.enhanced ) {
			return;
		}

		// Put the element back to where the placeholder was and remove the "ui-popup" class
		this._setOptions( { theme: $.mobile.popup.prototype.options.theme } );
		this.element
			// Cannot directly insertAfter() - we need to detach() first, because
			// insertAfter() will do nothing if the payload div was not attached
			// to the DOM at the time the widget was created, and so the payload
			// will remain inside the container even after we call insertAfter().
			// If that happens and we remove the container a few lines below, we
			// will cause an infinite recursion - #5244
			.detach()
			.insertAfter( this._ui.placeholder )
			.removeClass( "ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit" );
		this._ui.screen.remove();
		this._ui.container.remove();
		this._ui.placeholder.remove();
	},

	_destroy: function() {
		if ( $.mobile.popup.active === this ) {
			this.element.one( "popupafterclose", $.proxy( this, "_unenhance" ) );
			this.close();
		} else {
			this._unenhance();
		}

		return this;
	},

	_closePopup: function( theEvent, data ) {
		var parsedDst, toUrl,
			currentOptions = this.options,
			immediate = false;

		if ( ( theEvent && theEvent.isDefaultPrevented() ) || $.mobile.popup.active !== this ) {
			return;
		}

		// restore location on screen
		window.scrollTo( 0, this._scrollTop );

		if ( theEvent && theEvent.type === "pagebeforechange" && data ) {
			// Determine whether we need to rapid-close the popup, or whether we can
			// take the time to run the closing transition
			if ( typeof data.toPage === "string" ) {
				parsedDst = data.toPage;
			} else {
				parsedDst = data.toPage.jqmData( "url" );
			}
			parsedDst = $.mobile.path.parseUrl( parsedDst );
			toUrl = parsedDst.pathname + parsedDst.search + parsedDst.hash;

			if ( this._myUrl !== $.mobile.path.makeUrlAbsolute( toUrl ) ) {
				// Going to a different page - close immediately
				immediate = true;
			} else {
				theEvent.preventDefault();
			}
		}

		// remove nav bindings
		this.window.off( currentOptions.closeEvents );
		// unbind click handlers added when history is disabled
		this.element.undelegate( currentOptions.closeLinkSelector, currentOptions.closeLinkEvents );

		this._close( immediate );
	},

	// any navigation event after a popup is opened should close the popup
	// NOTE the pagebeforechange is bound to catch navigation events that don't
	//      alter the url (eg, dialogs from popups)
	_bindContainerClose: function() {
		this.window
			.on( this.options.closeEvents, $.proxy( this, "_closePopup" ) );
	},

	widget: function() {
		return this._ui.container;
	},

	// TODO no clear deliniation of what should be here and
	// what should be in _open. Seems to be "visual" vs "history" for now
	open: function( options ) {
		var url, hashkey, activePage, currentIsDialog, hasHash, urlHistory,
			self = this,
			currentOptions = this.options;

		// make sure open is idempotent
		if ( $.mobile.popup.active || currentOptions.disabled ) {
			return this;
		}

		// set the global popup mutex
		$.mobile.popup.active = this;
		this._scrollTop = this.window.scrollTop();

		// if history alteration is disabled close on navigate events
		// and leave the url as is
		if ( !( currentOptions.history ) ) {
			self._open( options );
			self._bindContainerClose();

			// When histoy is disabled we have to grab the data-rel
			// back link clicks so we can close the popup instead of
			// relying on history to do it for us
			self.element
				.delegate( currentOptions.closeLinkSelector, currentOptions.closeLinkEvents, function( theEvent ) {
					self.close();
					theEvent.preventDefault();
				});

			return this;
		}

		// cache some values for min/readability
		urlHistory = $.mobile.navigate.history;
		hashkey = $.mobile.dialogHashKey;
		activePage = $.mobile.activePage;
		currentIsDialog = ( activePage ? activePage.hasClass( "ui-dialog" ) : false );
		this._myUrl = url = urlHistory.getActive().url;
		hasHash = ( url.indexOf( hashkey ) > -1 ) && !currentIsDialog && ( urlHistory.activeIndex > 0 );

		if ( hasHash ) {
			self._open( options );
			self._bindContainerClose();
			return this;
		}

		// if the current url has no dialog hash key proceed as normal
		// otherwise, if the page is a dialog simply tack on the hash key
		if ( url.indexOf( hashkey ) === -1 && !currentIsDialog ) {
			url = url + (url.indexOf( "#" ) > -1 ? hashkey : "#" + hashkey);
		} else {
			url = $.mobile.path.parseLocation().hash + hashkey;
		}

		// Tack on an extra hashkey if this is the first page and we've just reconstructed the initial hash
		if ( urlHistory.activeIndex === 0 && url === urlHistory.initialDst ) {
			url += hashkey;
		}

		// swallow the the initial navigation event, and bind for the next
		this.window.one( "beforenavigate", function( theEvent ) {
			theEvent.preventDefault();
			self._open( options );
			self._bindContainerClose();
		});

		this.urlAltered = true;
		$.mobile.navigate( url, { role: "dialog" } );

		return this;
	},

	close: function() {
		// make sure close is idempotent
		if ( $.mobile.popup.active !== this ) {
			return this;
		}

		this._scrollTop = this.window.scrollTop();

		if ( this.options.history && this.urlAltered ) {
			$.mobile.back();
			this.urlAltered = false;
		} else {
			// simulate the nav bindings having fired
			this._closePopup();
		}

		return this;
	}
});

// TODO this can be moved inside the widget
$.mobile.popup.handleLink = function( $link ) {
	var offset,
		path = $.mobile.path,

		// NOTE make sure to get only the hash from the href because ie7 (wp7)
		//      returns the absolute href in this case ruining the element selection
		popup = $( path.hashToSelector( path.parseUrl( $link.attr( "href" ) ).hash ) ).first();

	if ( popup.length > 0 && popup.data( "mobile-popup" ) ) {
		offset = $link.offset();
		popup.popup( "open", {
			x: offset.left + $link.outerWidth() / 2,
			y: offset.top + $link.outerHeight() / 2,
			transition: $link.jqmData( "transition" ),
			positionTo: $link.jqmData( "position-to" )
		});
	}

	//remove after delay
	setTimeout( function() {
		$link.removeClass( $.mobile.activeBtnClass );
	}, 300 );
};

// TODO move inside _create
$.mobile.document.on( "pagebeforechange", function( theEvent, data ) {
	if ( data.options.role === "popup" ) {
		$.mobile.popup.handleLink( data.options.link );
		theEvent.preventDefault();
	}
});

})( jQuery );

/*
* custom "selectmenu" plugin
*/

(function( $, undefined ) {

var unfocusableItemSelector = ".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",
	goToAdjacentItem = function( item, target, direction ) {
		var adjacent = item[ direction + "All" ]()
			.not( unfocusableItemSelector )
			.first();

		// if there's a previous option, focus it
		if ( adjacent.length ) {
			target
				.blur()
				.attr( "tabindex", "-1" );

			adjacent.find( "a" ).first().focus();
		}
	};

$.widget( "mobile.selectmenu", $.mobile.selectmenu, {
	_create: function() {
		var o = this.options;

		// Custom selects cannot exist inside popups, so revert the "nativeMenu"
		// option to true if a parent is a popup
		o.nativeMenu = o.nativeMenu || ( this.element.parents( ":jqmData(role='popup'),:mobile-popup" ).length > 0 );

		return this._super();
	},

	_handleSelectFocus: function() {
		this.element.blur();
		this.button.focus();
	},

	_handleKeydown: function( event ) {
		this._super( event );
		this._handleButtonVclickKeydown( event );
	},

	_handleButtonVclickKeydown: function( event ) {
		if ( this.options.disabled || this.isOpen ) {
			return;
		}

		if (event.type === "vclick" ||
				event.keyCode && (event.keyCode === $.mobile.keyCode.ENTER || event.keyCode === $.mobile.keyCode.SPACE)) {

			this._decideFormat();
			if ( this.menuType === "overlay" ) {
				this.button.attr( "href", "#" + this.popupId ).attr( "data-" + ( $.mobile.ns || "" ) + "rel", "popup" );
			} else {
				this.button.attr( "href", "#" + this.dialogId ).attr( "data-" + ( $.mobile.ns || "" ) + "rel", "dialog" );
			}
			this.isOpen = true;
			// Do not prevent default, so the navigation may have a chance to actually open the chosen format
		}
	},

	_handleListFocus: function( e ) {
		var params = ( e.type === "focusin" ) ?
			{ tabindex: "0", event: "vmouseover" }:
			{ tabindex: "-1", event: "vmouseout" };

		$( e.target )
			.attr( "tabindex", params.tabindex )
			.trigger( params.event );
	},

	_handleListKeydown: function( event ) {
		var target = $( event.target ),
			li = target.closest( "li" );

		// switch logic based on which key was pressed
		switch ( event.keyCode ) {
			// up or left arrow keys
		case 38:
			goToAdjacentItem( li, target, "prev" );
			return false;
			// down or right arrow keys
		case 40:
			goToAdjacentItem( li, target, "next" );
			return false;
			// If enter or space is pressed, trigger click
		case 13:
		case 32:
			target.trigger( "click" );
			return false;
		}
	},

	_handleMenuPageHide: function() {
		// TODO centralize page removal binding / handling in the page plugin.
		// Suggestion from @jblas to do refcounting
		//
		// TODO extremely confusing dependency on the open method where the pagehide.remove
		// bindings are stripped to prevent the parent page from disappearing. The way
		// we're keeping pages in the DOM right now sucks
		//
		// rebind the page remove that was unbound in the open function
		// to allow for the parent page removal from actions other than the use
		// of a dialog sized custom select
		//
		// doing this here provides for the back button on the custom select dialog
		this.thisPage.page( "bindRemove" );
	},

	_handleHeaderCloseClick: function() {
		if ( this.menuType === "overlay" ) {
			this.close();
			return false;
		}
	},

	build: function() {
		var selectId, popupId, dialogId, label, thisPage, isMultiple, menuId, themeAttr, overlayThemeAttr,
			dividerThemeAttr, menuPage, listbox, list, header, headerTitle, menuPageContent, menuPageClose, headerClose, self,
			o = this.options;

		if ( o.nativeMenu ) {
			return this._super();
		}

		self = this;
		selectId = this.selectId;
		popupId = selectId + "-listbox";
		dialogId = selectId + "-dialog";
		label = this.label;
		thisPage = this.element.closest( ".ui-page" );
		isMultiple = this.element[ 0 ].multiple;
		menuId = selectId + "-menu";
		themeAttr = o.theme ? ( " data-" + $.mobile.ns + "theme='" + o.theme + "'" ) : "";
		overlayThemeAttr = o.overlayTheme ? ( " data-" + $.mobile.ns + "theme='" + o.overlayTheme + "'" ) : "";
		dividerThemeAttr = ( o.dividerTheme && isMultiple ) ? ( " data-" + $.mobile.ns + "divider-theme='" + o.dividerTheme + "'" ) : "";
		menuPage = $( "<div data-" + $.mobile.ns + "role='dialog' class='ui-selectmenu' id='" + dialogId + "'" + themeAttr + overlayThemeAttr + ">" +
			"<div data-" + $.mobile.ns + "role='header'>" +
			"<div class='ui-title'>" + label.getEncodedText() + "</div>"+
			"</div>"+
			"<div data-" + $.mobile.ns + "role='content'></div>"+
			"</div>" );
		listbox = $( "<div id='" + popupId + "' class='ui-selectmenu'>" ).insertAfter( this.select ).popup({ theme: o.overlayTheme });
		list = $( "<ul class='ui-selectmenu-list' id='" + menuId + "' role='listbox' aria-labelledby='" + this.buttonId + "'" + themeAttr + dividerThemeAttr + ">" ).appendTo( listbox );
		header = $( "<div class='ui-header ui-bar-" + ( o.theme ? o.theme : "inherit" ) + "'>" ).prependTo( listbox );
		headerTitle = $( "<h1 class='ui-title'>" ).appendTo( header );

		if ( this.isMultiple ) {
			headerClose = $( "<a>", {
				"role": "button",
				"text": o.closeText,
				"href": "#",
				"class": "ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"
			}).appendTo( header );
		}

		$.extend( this, {
			selectId: selectId,
			menuId: menuId,
			popupId: popupId,
			dialogId: dialogId,
			thisPage: thisPage,
			menuPage: menuPage,
			label: label,
			isMultiple: isMultiple,
			theme: o.theme,
			listbox: listbox,
			list: list,
			header: header,
			headerTitle: headerTitle,
			headerClose: headerClose,
			menuPageContent: menuPageContent,
			menuPageClose: menuPageClose,
			placeholder: ""
		});

		// Create list from select, update state
		this.refresh();

		if ( this._origTabIndex === undefined ) {
			// Map undefined to false, because this._origTabIndex === undefined
			// indicates that we have not yet checked whether the select has
			// originally had a tabindex attribute, whereas false indicates that
			// we have checked the select for such an attribute, and have found
			// none present.
			this._origTabIndex = ( this.select[ 0 ].getAttribute( "tabindex" ) === null ) ? false : this.select.attr( "tabindex" );
		}
		this.select.attr( "tabindex", "-1" );
		this._on( this.select, { focus : "_handleSelectFocus" } );

		// Button events
		this._on( this.button, {
			vclick: "_handleButtonVclickKeydown"
		});

		// Events for list items
		this.list.attr( "role", "listbox" );
		this._on( this.list, {
			focusin : "_handleListFocus",
			focusout : "_handleListFocus",
			keydown: "_handleListKeydown"
		});
		this.list
			.delegate( "li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)", "click", function( event ) {

				// index of option tag to be selected
				var oldIndex = self.select[ 0 ].selectedIndex,
					newIndex = $.mobile.getAttribute( this, "option-index" ),
					option = self._selectOptions().eq( newIndex )[ 0 ];

				// toggle selected status on the tag for multi selects
				option.selected = self.isMultiple ? !option.selected : true;

				// toggle checkbox class for multiple selects
				if ( self.isMultiple ) {
					$( this ).find( "a" )
						.toggleClass( "ui-checkbox-on", option.selected )
						.toggleClass( "ui-checkbox-off", !option.selected );
				}

				// trigger change if value changed
				if ( self.isMultiple || oldIndex !== newIndex ) {
					self.select.trigger( "change" );
				}

				// hide custom select for single selects only - otherwise focus clicked item
				// We need to grab the clicked item the hard way, because the list may have been rebuilt
				if ( self.isMultiple ) {
					self.list.find( "li:not(.ui-li-divider)" ).eq( newIndex )
						.find( "a" ).first().focus();
				}
				else {
					self.close();
				}

				event.preventDefault();
			});

		// button refocus ensures proper height calculation
		// by removing the inline style and ensuring page inclusion
		this._on( this.menuPage, { pagehide: "_handleMenuPageHide" } );

		// Events on the popup
		this._on( this.listbox, { popupafterclose: "close" } );

		// Close button on small overlays
		if ( this.isMultiple ) {
			this._on( this.headerClose, { click: "_handleHeaderCloseClick" } );
		}

		return this;
	},

	_isRebuildRequired: function() {
		var list = this.list.find( "li" ),
			options = this._selectOptions().not( ".ui-screen-hidden" );

		// TODO exceedingly naive method to determine difference
		// ignores value changes etc in favor of a forcedRebuild
		// from the user in the refresh method
		return options.text() !== list.text();
	},

	selected: function() {
		return this._selectOptions().filter( ":selected:not( :jqmData(placeholder='true') )" );
	},

	refresh: function( force ) {
		var self, indices;

		if ( this.options.nativeMenu ) {
			return this._super( force );
		}

		self = this;
		if ( force || this._isRebuildRequired() ) {
			self._buildList();
		}

		indices = this.selectedIndices();

		self.setButtonText();
		self.setButtonCount();

		self.list.find( "li:not(.ui-li-divider)" )
			.find( "a" ).removeClass( $.mobile.activeBtnClass ).end()
			.attr( "aria-selected", false )
			.each(function( i ) {

				if ( $.inArray( i, indices ) > -1 ) {
					var item = $( this );

					// Aria selected attr
					item.attr( "aria-selected", true );

					// Multiple selects: add the "on" checkbox state to the icon
					if ( self.isMultiple ) {
						item.find( "a" ).removeClass( "ui-checkbox-off" ).addClass( "ui-checkbox-on" );
					} else {
						if ( item.hasClass( "ui-screen-hidden" ) ) {
							item.next().find( "a" ).addClass( $.mobile.activeBtnClass );
						} else {
							item.find( "a" ).addClass( $.mobile.activeBtnClass );
						}
					}
				}
			});
	},

	close: function() {
		if ( this.options.disabled || !this.isOpen ) {
			return;
		}

		var self = this;

		if ( self.menuType === "page" ) {
			self.menuPage.dialog( "close" );
			self.list.appendTo( self.listbox );
		} else {
			self.listbox.popup( "close" );
		}

		self._focusButton();
		// allow the dialog to be closed again
		self.isOpen = false;
	},

	open: function() {
		this.button.click();
	},

	_focusMenuItem: function() {
		var selector = this.list.find( "a." + $.mobile.activeBtnClass );
		if ( selector.length === 0 ) {
			selector = this.list.find( "li:not(" + unfocusableItemSelector + ") a.ui-btn" );
		}
		selector.first().focus();
	},

	_decideFormat: function() {
		var self = this,
			$window = this.window,
			selfListParent = self.list.parent(),
			menuHeight = selfListParent.outerHeight(),
			scrollTop = $window.scrollTop(),
			btnOffset = self.button.offset().top,
			screenHeight = $window.height();

		if ( menuHeight > screenHeight - 80 || !$.support.scrollTop ) {

			self.menuPage.appendTo( $.mobile.pageContainer ).page();
			self.menuPageContent = self.menuPage.find( ".ui-content" );
			self.menuPageClose = self.menuPage.find( ".ui-header a" );

			// prevent the parent page from being removed from the DOM,
			// otherwise the results of selecting a list item in the dialog
			// fall into a black hole
			self.thisPage.unbind( "pagehide.remove" );

			//for WebOS/Opera Mini (set lastscroll using button offset)
			if ( scrollTop === 0 && btnOffset > screenHeight ) {
				self.thisPage.one( "pagehide", function() {
					$( this ).jqmData( "lastScroll", btnOffset );
				});
			}

			self.menuPage.one( {
				pageshow: $.proxy( this, "_focusMenuItem" ),
				pagehide: $.proxy( this, "close" )
			});

			self.menuType = "page";
			self.menuPageContent.append( self.list );
			self.menuPage.find( "div .ui-title" ).text( self.label.text() );
		} else {
			self.menuType = "overlay";

			self.listbox.one( { popupafteropen: $.proxy( this, "_focusMenuItem" ) } );
		}
	},

	_buildList: function() {
		var self = this,
			o = this.options,
			placeholder = this.placeholder,
			needPlaceholder = true,
			dataIcon = "false",
			$options, numOptions, select,
			dataPrefix = "data-" + $.mobile.ns,
			dataIndexAttr = dataPrefix + "option-index",
			dataIconAttr = dataPrefix + "icon",
			dataRoleAttr = dataPrefix + "role",
			dataPlaceholderAttr = dataPrefix + "placeholder",
			fragment = document.createDocumentFragment(),
			isPlaceholderItem = false,
			optGroup,
			i,
			option, $option, parent, text, anchor, classes,
			optLabel, divider, item;

		self.list.empty().filter( ".ui-listview" ).listview( "destroy" );
		$options = this._selectOptions();
		numOptions = $options.length;
		select = this.select[ 0 ];

		for ( i = 0; i < numOptions;i++, isPlaceholderItem = false) {
			option = $options[i];
			$option = $( option );

			// Do not create options based on ui-screen-hidden select options
			if ( $option.hasClass( "ui-screen-hidden" ) ) {
				continue;
			}

			parent = option.parentNode;
			text = $option.text();
			anchor  = document.createElement( "a" );
			classes = [];

			anchor.setAttribute( "href", "#" );
			anchor.appendChild( document.createTextNode( text ) );

			// Are we inside an optgroup?
			if ( parent !== select && parent.nodeName.toLowerCase() === "optgroup" ) {
				optLabel = parent.getAttribute( "label" );
				if ( optLabel !== optGroup ) {
					divider = document.createElement( "li" );
					divider.setAttribute( dataRoleAttr, "list-divider" );
					divider.setAttribute( "role", "option" );
					divider.setAttribute( "tabindex", "-1" );
					divider.appendChild( document.createTextNode( optLabel ) );
					fragment.appendChild( divider );
					optGroup = optLabel;
				}
			}

			if ( needPlaceholder && ( !option.getAttribute( "value" ) || text.length === 0 || $option.jqmData( "placeholder" ) ) ) {
				needPlaceholder = false;
				isPlaceholderItem = true;

				// If we have identified a placeholder, record the fact that it was
				// us who have added the placeholder to the option and mark it
				// retroactively in the select as well
				if ( null === option.getAttribute( dataPlaceholderAttr ) ) {
					this._removePlaceholderAttr = true;
				}
				option.setAttribute( dataPlaceholderAttr, true );
				if ( o.hidePlaceholderMenuItems ) {
					classes.push( "ui-screen-hidden" );
				}
				if ( placeholder !== text ) {
					placeholder = self.placeholder = text;
				}
			}

			item = document.createElement( "li" );
			if ( option.disabled ) {
				classes.push( "ui-state-disabled" );
				item.setAttribute( "aria-disabled", true );
			}
			item.setAttribute( dataIndexAttr, i );
			item.setAttribute( dataIconAttr, dataIcon );
			if ( isPlaceholderItem ) {
				item.setAttribute( dataPlaceholderAttr, true );
			}
			item.className = classes.join( " " );
			item.setAttribute( "role", "option" );
			anchor.setAttribute( "tabindex", "-1" );
			if ( this.isMultiple ) {
				$( anchor ).addClass( "ui-btn ui-checkbox-off ui-btn-icon-right" );
			}

			item.appendChild( anchor );
			fragment.appendChild( item );
		}

		self.list[0].appendChild( fragment );

		// Hide header if it's not a multiselect and there's no placeholder
		if ( !this.isMultiple && !placeholder.length ) {
			this.header.addClass( "ui-screen-hidden" );
		} else {
			this.headerTitle.text( this.placeholder );
		}

		// Now populated, create listview
		self.list.listview();
	},

	_button: function() {
		return this.options.nativeMenu ?
			this._super() :
			$( "<a>", {
				"href": "#",
				"role": "button",
				// TODO value is undefined at creation
				"id": this.buttonId,
				"aria-haspopup": "true",

				// TODO value is undefined at creation
				"aria-owns": this.menuId
			});
	},

	_destroy: function() {

		if ( !this.options.nativeMenu ) {
			this.close();

			// Restore the tabindex attribute to its original value
			if ( this._origTabIndex !== undefined ) {
				if ( this._origTabIndex !== false ) {
					this.select.attr( "tabindex", this._origTabIndex );
				} else {
					this.select.removeAttr( "tabindex" );
				}
			}

			// Remove the placeholder attribute if we were the ones to add it
			if ( this._removePlaceholderAttr ) {
				this._selectOptions().removeAttr( "data-" + $.mobile.ns + "placeholder" );
			}

			// Remove the popup
			this.listbox.remove();

			// Remove the dialog
			this.menuPage.remove();
		}

		// Chain up
		this._super();
	}
});

})( jQuery );


// buttonMarkup is deprecated as of 1.4.0 and will be removed in 1.5.0.

(function( $, undefined ) {


// General policy: Do not access data-* attributes except during enhancement.
// In all other cases we determine the state of the button exclusively from its
// className. That's why optionsToClasses expects a full complement of options,
// and the jQuery plugin completes the set of options from the default values.

// Map classes to buttonMarkup boolean options - used in classNameToOptions()
var reverseBoolOptionMap = {
		"ui-shadow" : "shadow",
		"ui-corner-all" : "corners",
		"ui-btn-inline" : "inline",
		"ui-shadow-icon" : "iconshadow", /* TODO: Remove in 1.5 */
		"ui-mini" : "mini"
	},
	getAttrFixed = function() {
		var ret = $.mobile.getAttribute.apply( this, arguments );

		return ( ret == null ? undefined : ret );
	},
	capitalLettersRE = /[A-Z]/g;

// optionsToClasses:
// @options: A complete set of options to convert to class names.
// @existingClasses: extra classes to add to the result
//
// Converts @options to buttonMarkup classes and returns the result as an array
// that can be converted to an element's className with .join( " " ). All
// possible options must be set inside @options. Use $.fn.buttonMarkup.defaults
// to get a complete set and use $.extend to override your choice of options
// from that set.
function optionsToClasses( options, existingClasses ) {
	var classes = existingClasses ? existingClasses : [];

	// Add classes to the array - first ui-btn
	classes.push( "ui-btn" );

	// If there is a theme
	if ( options.theme ) {
		classes.push( "ui-btn-" + options.theme );
	}

	// If there's an icon, add the icon-related classes
	if ( options.icon ) {
		classes = classes.concat([
			"ui-icon-" + options.icon,
			"ui-btn-icon-" + options.iconpos
		]);
		if ( options.iconshadow ) {
			classes.push( "ui-shadow-icon" ); /* TODO: Remove in 1.5 */
		}
	}

	// Add the appropriate class for each boolean option
	if ( options.inline ) {
		classes.push( "ui-btn-inline" );
	}
	if ( options.shadow ) {
		classes.push( "ui-shadow" );
	}
	if ( options.corners ) {
		classes.push( "ui-corner-all" );
	}
	if ( options.mini ) {
		classes.push( "ui-mini" );
	}

	// Create a string from the array and return it
	return classes;
}

// classNameToOptions:
// @classes: A string containing a .className-style space-separated class list
//
// Loops over @classes and calculates an options object based on the
// buttonMarkup-related classes it finds. It records unrecognized classes in an
// array.
//
// Returns: An object containing the following items:
//
// "options": buttonMarkup options found to be present because of the
// presence/absence of corresponding classes
//
// "unknownClasses": a string containing all the non-buttonMarkup-related
// classes found in @classes
//
// "alreadyEnhanced": A boolean indicating whether the ui-btn class was among
// those found to be present
function classNameToOptions( classes ) {
	var idx, map, unknownClass,
		alreadyEnhanced = false,
		noIcon = true,
		o = {
			icon: "",
			inline: false,
			shadow: false,
			corners: false,
			iconshadow: false,
			mini: false
		},
		unknownClasses = [];

	classes = classes.split( " " );

	// Loop over the classes
	for ( idx = 0 ; idx < classes.length ; idx++ ) {

		// Assume it's an unrecognized class
		unknownClass = true;

		// Recognize boolean options from the presence of classes
		map = reverseBoolOptionMap[ classes[ idx ] ];
		if ( map !== undefined ) {
			unknownClass = false;
			o[ map ] = true;

		// Recognize the presence of an icon and establish the icon position
		} else if ( classes[ idx ].indexOf( "ui-btn-icon-" ) === 0 ) {
			unknownClass = false;
			noIcon = false;
			o.iconpos = classes[ idx ].substring( 12 );

		// Establish which icon is present
		} else if ( classes[ idx ].indexOf( "ui-icon-" ) === 0 ) {
			unknownClass = false;
			o.icon = classes[ idx ].substring( 8 );

		// Establish the theme - this recognizes one-letter theme swatch names
		} else if ( classes[ idx ].indexOf( "ui-btn-" ) === 0 && classes[ idx ].length === 8 ) {
			unknownClass = false;
			o.theme = classes[ idx ].substring( 7 );

		// Recognize that this element has already been buttonMarkup-enhanced
		} else if ( classes[ idx ] === "ui-btn" ) {
			unknownClass = false;
			alreadyEnhanced = true;
		}

		// If this class has not been recognized, add it to the list
		if ( unknownClass ) {
			unknownClasses.push( classes[ idx ] );
		}
	}

	// If a "ui-btn-icon-*" icon position class is absent there cannot be an icon
	if ( noIcon ) {
		o.icon = "";
	}

	return {
		options: o,
		unknownClasses: unknownClasses,
		alreadyEnhanced: alreadyEnhanced
	};
}

function camelCase2Hyphenated( c ) {
	return "-" + c.toLowerCase();
}

// $.fn.buttonMarkup:
// DOM: gets/sets .className
//
// @options: options to apply to the elements in the jQuery object
// @overwriteClasses: boolean indicating whether to honour existing classes
//
// Calculates the classes to apply to the elements in the jQuery object based on
// the options passed in. If @overwriteClasses is true, it sets the className
// property of each element in the jQuery object to the buttonMarkup classes
// it calculates based on the options passed in.
//
// If you wish to preserve any classes that are already present on the elements
// inside the jQuery object, including buttonMarkup-related classes that were
// added by a previous call to $.fn.buttonMarkup() or during page enhancement
// then you should omit @overwriteClasses or set it to false.
$.fn.buttonMarkup = function( options, overwriteClasses ) {
	var idx, data, el, retrievedOptions, optionKey,
		defaults = $.fn.buttonMarkup.defaults;

	for ( idx = 0 ; idx < this.length ; idx++ ) {
		el = this[ idx ];
		data = overwriteClasses ?

			// Assume this element is not enhanced and ignore its classes
			{ alreadyEnhanced: false, unknownClasses: [] } :

			// Otherwise analyze existing classes to establish existing options and
			// classes
			classNameToOptions( el.className );

		retrievedOptions = $.extend( {},

			// If the element already has the class ui-btn, then we assume that
			// it has passed through buttonMarkup before - otherwise, the options
			// returned by classNameToOptions do not correctly reflect the state of
			// the element
			( data.alreadyEnhanced ? data.options : {} ),

			// Finally, apply the options passed in
			options );

		// If this is the first call on this element, retrieve remaining options
		// from the data-attributes
		if ( !data.alreadyEnhanced ) {
			for ( optionKey in defaults ) {
				if ( retrievedOptions[ optionKey ] === undefined ) {
					retrievedOptions[ optionKey ] = getAttrFixed( el,
						optionKey.replace( capitalLettersRE, camelCase2Hyphenated )
					);
				}
			}
		}

		el.className = optionsToClasses(

			// Merge all the options and apply them as classes
			$.extend( {},

				// The defaults form the basis
				defaults,

				// Add the computed options
				retrievedOptions
			),

			// ... and re-apply any unrecognized classes that were found
			data.unknownClasses ).join( " " );
		if ( el.tagName.toLowerCase() !== "button" ) {
			el.setAttribute( "role", "button" );
		}
	}

	return this;
};

// buttonMarkup defaults. This must be a complete set, i.e., a value must be
// given here for all recognized options
$.fn.buttonMarkup.defaults = {
	icon: "",
	iconpos: "left",
	theme: null,
	inline: false,
	shadow: true,
	corners: true,
	iconshadow: false, /* TODO: Remove in 1.5. Option deprecated in 1.4. */
	mini: false
};

$.extend( $.fn.buttonMarkup, {
	initSelector: "a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button"
});

})( jQuery );


(function( $, undefined ) {

$.widget( "mobile.controlgroup", $.extend( {
	options: {
		enhanced: false,
		theme: null,
		shadow: false,
		corners: true,
		excludeInvisible: true,
		type: "vertical",
		mini: false
	},

	_create: function() {
		var elem = this.element,
			opts = this.options;

		// Run buttonmarkup
		if ( $.fn.buttonMarkup ) {
			this.element.find( $.fn.buttonMarkup.initSelector ).buttonMarkup();
		}
		// Enhance child widgets
		$.each( this._childWidgets, $.proxy( function( number, widgetName ) {
			if ( $.mobile[ widgetName ] ) {
				this.element.find( $.mobile[ widgetName ].initSelector ).not( $.mobile.page.prototype.keepNativeSelector() )[ widgetName ]();
			}
		}, this ));

		$.extend( this, {
			_ui: null,
			_initialRefresh: true
		});

		if ( opts.enhanced ) {
			this._ui = {
				groupLegend: elem.children( ".ui-controlgroup-label" ).children(),
				childWrapper: elem.children( ".ui-controlgroup-controls" )
			};
		} else {
			this._ui = this._enhance();
		}

	},

	_childWidgets: [ "checkboxradio", "selectmenu", "button" ],

	_themeClassFromOption: function( value ) {
		return ( value ? ( value === "none" ? "" : "ui-group-theme-" + value ) : "" );
	},

	_enhance: function() {
		var elem = this.element,
			opts = this.options,
			ui = {
				groupLegend: elem.children( "legend" ),
				childWrapper: elem
					.addClass( "ui-controlgroup " +
						"ui-controlgroup-" +
							( opts.type === "horizontal" ? "horizontal" : "vertical" ) + " " +
						this._themeClassFromOption( opts.theme ) + " " +
						( opts.corners ? "ui-corner-all " : "" ) +
						( opts.mini ? "ui-mini " : "" ) )
					.wrapInner( "<div " +
						"class='ui-controlgroup-controls " +
							( opts.shadow === true ? "ui-shadow" : "" ) + "'></div>" )
					.children()
			};

		if ( ui.groupLegend.length > 0 ) {
			$( "<div role='heading' class='ui-controlgroup-label'></div>" )
				.append( ui.groupLegend )
				.prependTo( elem );
		}

		return ui;
	},

	_init: function() {
		this.refresh();
	},

	_setOptions: function( options ) {
		var callRefresh, returnValue,
			elem = this.element;

		// Must have one of horizontal or vertical
		if ( options.type !== undefined ) {
			elem
				.removeClass( "ui-controlgroup-horizontal ui-controlgroup-vertical" )
				.addClass( "ui-controlgroup-" + ( options.type === "horizontal" ? "horizontal" : "vertical" ) );
			callRefresh = true;
		}

		if ( options.theme !== undefined ) {
			elem
				.removeClass( this._themeClassFromOption( this.options.theme ) )
				.addClass( this._themeClassFromOption( options.theme ) );
		}

		if ( options.corners !== undefined ) {
			elem.toggleClass( "ui-corner-all", options.corners );
		}

		if ( options.mini !== undefined ) {
			elem.toggleClass( "ui-mini", options.mini );
		}

		if ( options.shadow !== undefined ) {
			this._ui.childWrapper.toggleClass( "ui-shadow", options.shadow );
		}

		if ( options.excludeInvisible !== undefined ) {
			this.options.excludeInvisible = options.excludeInvisible;
			callRefresh = true;
		}

		returnValue = this._super( options );

		if ( callRefresh ) {
			this.refresh();
		}

		return returnValue;
	},

	container: function() {
		return this._ui.childWrapper;
	},

	refresh: function() {
		var $el = this.container(),
			els = $el.find( ".ui-btn" ).not( ".ui-slider-handle" ),
			create = this._initialRefresh;
		if ( $.mobile.checkboxradio ) {
			$el.find( ":mobile-checkboxradio" ).checkboxradio( "refresh" );
		}
		this._addFirstLastClasses( els,
			this.options.excludeInvisible ? this._getVisibles( els, create ) : els,
			create );
		this._initialRefresh = false;
	},

	// Caveat: If the legend is not the first child of the controlgroup at enhance
	// time, it will be after _destroy().
	_destroy: function() {
		var ui, buttons,
			opts = this.options;

		if ( opts.enhanced ) {
			return this;
		}

		ui = this._ui;
		buttons = this.element
			.removeClass( "ui-controlgroup " +
				"ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini " +
				this._themeClassFromOption( opts.theme ) )
			.find( ".ui-btn" )
			.not( ".ui-slider-handle" );

		this._removeFirstLastClasses( buttons );

		ui.groupLegend.unwrap();
		ui.childWrapper.children().unwrap();
	}
}, $.mobile.behaviors.addFirstLastClasses ) );

})(jQuery);

(function( $, undefined ) {

	$.widget( "mobile.toolbar", {
		initSelector: ":jqmData(role='footer'), :jqmData(role='header')",

		options: {
			theme: null,
			addBackBtn: false,
			backBtnTheme: null,
			backBtnText: "Back"
		},

		_create: function() {
			var leftbtn, rightbtn,
				role =  this.element.is( ":jqmData(role='header')" ) ? "header" : "footer",
				page = this.element.closest( ".ui-page" );
			if ( page.length === 0 ) {
				page = false;
				this._on( this.document, {
					"pageshow": "refresh"
				});
			}
			$.extend( this, {
				role: role,
				page: page,
				leftbtn: leftbtn,
				rightbtn: rightbtn,
				backBtn: null
			});
			this.element.attr( "role", role === "header" ? "banner" : "contentinfo" ).addClass( "ui-" + role );
			this.refresh();
			this._setOptions( this.options );
		},
		_setOptions: function( o ) {
			if ( o.addBackBtn !== undefined ) {
				if ( this.options.addBackBtn &&
					this.role === "header" &&
					$( ".ui-page" ).length > 1 &&
					this.page[ 0 ].getAttribute( "data-" + $.mobile.ns + "url" ) !== $.mobile.path.stripHash( location.hash ) &&
					!this.leftbtn ) {
						this._addBackButton();
				} else {
					this.element.find( ".ui-toolbar-back-btn" ).remove();
				}
			}
			if ( o.backBtnTheme != null ) {
				this.element
					.find( ".ui-toolbar-back-btn" )
					.addClass( "ui-btn ui-btn-" + o.backBtnTheme );
			}
			if ( o.backBtnText !== undefined ) {
				this.element.find( ".ui-toolbar-back-btn .ui-btn-text" ).text( o.backBtnText );
			}
			if ( o.theme !== undefined ) {
				var currentTheme = this.options.theme ? this.options.theme : "inherit",
					newTheme = o.theme ? o.theme : "inherit";

				this.element.removeClass( "ui-bar-" + currentTheme ).addClass( "ui-bar-" + newTheme );
			}

			this._super( o );
		},
		refresh: function() {
			if ( this.role === "header" ) {
				this._addHeaderButtonClasses();
			}
			if ( !this.page ) {
				this._setRelative();
				if ( this.role === "footer" ) {
					this.element.appendTo( "body" );
				}
			}
			this._addHeadingClasses();
			this._btnMarkup();
		},

		//we only want this to run on non fixed toolbars so make it easy to override
		_setRelative: function() {
			$( "[data-"+ $.mobile.ns + "role='page']" ).css({ "position": "relative" });
		},

		// Deprecated in 1.4. As from 1.5 button classes have to be present in the markup.
		_btnMarkup: function() {
			this.element.children( "a" ).attr( "data-" + $.mobile.ns + "role", "button" );
			this.element.trigger( "create" );
		},
		// Deprecated in 1.4. As from 1.5 ui-btn-left/right classes have to be present in the markup.
		_addHeaderButtonClasses: function() {
			var $headeranchors = this.element.children( "a, button" );
			this.leftbtn = $headeranchors.hasClass( "ui-btn-left" );
			this.rightbtn = $headeranchors.hasClass( "ui-btn-right" );

			this.leftbtn = this.leftbtn || $headeranchors.eq( 0 ).not( ".ui-btn-right" ).addClass( "ui-btn-left" ).length;

			this.rightbtn = this.rightbtn || $headeranchors.eq( 1 ).addClass( "ui-btn-right" ).length;

		},
		_addBackButton: function() {
			var theme,
				options = this.options;

			if ( !this.backBtn ) {
				theme = options.backBtnTheme || options.theme;
				this.backBtn = $( "<a role='button' href='javascript:void(0);' " +
					"class='ui-btn ui-corner-all ui-shadow ui-btn-left " +
						( theme ? "ui-btn-" + theme + " " : "" ) +
						"ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' " +
					"data-" + $.mobile.ns + "rel='back'>" + options.backBtnText + "</a>" )
						.prependTo( this.element );
			}
		},
		_addHeadingClasses: function() {
			this.element.children( "h1, h2, h3, h4, h5, h6" )
				.addClass( "ui-title" )
				// Regardless of h element number in src, it becomes h1 for the enhanced page
				.attr({
					"role": "heading",
					"aria-level": "1"
				});
		}
	});

})( jQuery );

(function( $, undefined ) {

	$.widget( "mobile.toolbar", $.mobile.toolbar, {
		options: {
			position:null,
			visibleOnPageShow: true,
			disablePageZoom: true,
			transition: "slide", //can be none, fade, slide (slide maps to slideup or slidedown)
			fullscreen: false,
			tapToggle: true,
			tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
			hideDuringFocus: "input, textarea, select",
			updatePagePadding: true,
			trackPersistentToolbars: true,

			// Browser detection! Weeee, here we go...
			// Unfortunately, position:fixed is costly, not to mention probably impossible, to feature-detect accurately.
			// Some tests exist, but they currently return false results in critical devices and browsers, which could lead to a broken experience.
			// Testing fixed positioning is also pretty obtrusive to page load, requiring injected elements and scrolling the window
			// The following function serves to rule out some popular browsers with known fixed-positioning issues
			// This is a plugin option like any other, so feel free to improve or overwrite it
			supportBlacklist: function() {
				return !$.support.fixedPosition;
			}
		},

		_create: function() {
			this._super();
			if ( this.options.position === "fixed" && !this.options.supportBlacklist() ) {
				this._makeFixed();
			}
		},

		_makeFixed: function() {
			this.element.addClass( "ui-"+ this.role +"-fixed" );
			this.updatePagePadding();
			this._addTransitionClass();
			this._bindPageEvents();
			this._bindToggleHandlers();
			this._setOptions( this.options );
		},

		_setOptions: function( o ) {
			if ( o.position === "fixed" && this.options.position !== "fixed" ) {
				this._makeFixed();
			}
			if ( this.options.position === "fixed" && !this.options.supportBlacklist() ) {
				var $page = ( !!this.page )? this.page: ( $(".ui-page-active").length > 0 )? $(".ui-page-active"): $(".ui-page").eq(0);

				if ( o.fullscreen !== undefined) {
					if ( o.fullscreen ) {
						this.element.addClass( "ui-"+ this.role +"-fullscreen" );
						$page.addClass( "ui-page-" + this.role + "-fullscreen" );
					}
					// If not fullscreen, add class to page to set top or bottom padding
					else {
						this.element.removeClass( "ui-"+ this.role +"-fullscreen" );
						$page.removeClass( "ui-page-" + this.role + "-fullscreen" ).addClass( "ui-page-" + this.role+ "-fixed" );
					}
				}
			}
			this._super(o);
		},

		_addTransitionClass: function() {
			var tclass = this.options.transition;

			if ( tclass && tclass !== "none" ) {
				// use appropriate slide for header or footer
				if ( tclass === "slide" ) {
					tclass = this.element.hasClass( "ui-header" ) ? "slidedown" : "slideup";
				}

				this.element.addClass( tclass );
			}
		},

		_bindPageEvents: function() {
			var page = ( !!this.page )? this.element.closest( ".ui-page" ): this.document;
			//page event bindings
			// Fixed toolbars require page zoom to be disabled, otherwise usability issues crop up
			// This method is meant to disable zoom while a fixed-positioned toolbar page is visible
			this._on( page , {
				"pagebeforeshow": "_handlePageBeforeShow",
				"webkitAnimationStart":"_handleAnimationStart",
				"animationstart":"_handleAnimationStart",
				"updatelayout": "_handleAnimationStart",
				"pageshow": "_handlePageShow",
				"pagebeforehide": "_handlePageBeforeHide"
			});
		},

		_handlePageBeforeShow: function( ) {
			var o = this.options;
			if ( o.disablePageZoom ) {
				$.mobile.zoom.disable( true );
			}
			if ( !o.visibleOnPageShow ) {
				this.hide( true );
			}
		},

		_handleAnimationStart: function() {
			if ( this.options.updatePagePadding ) {
				this.updatePagePadding( ( !!this.page )? this.page: ".ui-page-active" );
			}
		},

		_handlePageShow: function() {
			this.updatePagePadding( ( !!this.page )? this.page: ".ui-page-active" );
			if ( this.options.updatePagePadding ) {
				this._on( this.window, { "throttledresize": "updatePagePadding" } );
			}
		},

		_handlePageBeforeHide: function( e, ui ) {
			var o = this.options,
				thisFooter, thisHeader, nextFooter, nextHeader;

			if ( o.disablePageZoom ) {
				$.mobile.zoom.enable( true );
			}
			if ( o.updatePagePadding ) {
				this._off( this.window, "throttledresize" );
			}

			if ( o.trackPersistentToolbars ) {
				thisFooter = $( ".ui-footer-fixed:jqmData(id)", this.page );
				thisHeader = $( ".ui-header-fixed:jqmData(id)", this.page );
				nextFooter = thisFooter.length && ui.nextPage && $( ".ui-footer-fixed:jqmData(id='" + thisFooter.jqmData( "id" ) + "')", ui.nextPage ) || $();
				nextHeader = thisHeader.length && ui.nextPage && $( ".ui-header-fixed:jqmData(id='" + thisHeader.jqmData( "id" ) + "')", ui.nextPage ) || $();

				if ( nextFooter.length || nextHeader.length ) {

					nextFooter.add( nextHeader ).appendTo( $.mobile.pageContainer );

					ui.nextPage.one( "pageshow", function() {
						nextHeader.prependTo( this );
						nextFooter.appendTo( this );
					});
				}
			}
		},

		_visible: true,

		// This will set the content element's top or bottom padding equal to the toolbar's height
		updatePagePadding: function( tbPage ) {
			var $el = this.element,
				header = ( this.role ==="header" ),
				pos = parseFloat( $el.css( header ? "top" : "bottom" ) );

			// This behavior only applies to "fixed", not "fullscreen"
			if ( this.options.fullscreen ) { return; }
			// tbPage argument can be a Page object or an event, if coming from throttled resize.
			tbPage = ( tbPage && tbPage.type === undefined && tbPage ) || this.page || $el.closest( ".ui-page" );
			tbPage = ( !!this.page )? this.page: ".ui-page-active";
			$( tbPage ).css( "padding-" + ( header ? "top" : "bottom" ), $el.outerHeight() + pos );
		},

		_useTransition: function( notransition ) {
			var $win = this.window,
				$el = this.element,
				scroll = $win.scrollTop(),
				elHeight = $el.height(),
				pHeight = ( !!this.page )? $el.closest( ".ui-page" ).height():$(".ui-page-active").height(),
				viewportHeight = $.mobile.getScreenHeight();

			return !notransition &&
				( this.options.transition && this.options.transition !== "none" &&
				(
					( this.role === "header" && !this.options.fullscreen && scroll > elHeight ) ||
					( this.role === "footer" && !this.options.fullscreen && scroll + viewportHeight < pHeight - elHeight )
				) || this.options.fullscreen
				);
		},

		show: function( notransition ) {
			var hideClass = "ui-fixed-hidden",
				$el = this.element;

			if ( this._useTransition( notransition ) ) {
				$el
					.removeClass( "out " + hideClass )
					.addClass( "in" )
					.animationComplete(function () {
						$el.removeClass( "in" );
					});
			}
			else {
				$el.removeClass( hideClass );
			}
			this._visible = true;
		},

		hide: function( notransition ) {
			var hideClass = "ui-fixed-hidden",
				$el = this.element,
				// if it's a slide transition, our new transitions need the reverse class as well to slide outward
				outclass = "out" + ( this.options.transition === "slide" ? " reverse" : "" );

			if ( this._useTransition( notransition ) ) {
				$el
					.addClass( outclass )
					.removeClass( "in" )
					.animationComplete(function() {
						$el.addClass( hideClass ).removeClass( outclass );
					});
			}
			else {
				$el.addClass( hideClass ).removeClass( outclass );
			}
			this._visible = false;
		},

		toggle: function() {
			this[ this._visible ? "hide" : "show" ]();
		},

		_bindToggleHandlers: function() {
			var self = this,
				o = self.options,
				delayShow, delayHide,
				isVisible = true,
				page = ( !!this.page )? this.page: $(".ui-page");

			// tap toggle
			page
				.bind( "vclick", function( e ) {
					if ( o.tapToggle && !$( e.target ).closest( o.tapToggleBlacklist ).length ) {
						self.toggle();
					}
				})
				.bind( "focusin focusout", function( e ) {
					//this hides the toolbars on a keyboard pop to give more screen room and prevent ios bug which
					//positions fixed toolbars in the middle of the screen on pop if the input is near the top or
					//bottom of the screen addresses issues #4410 Footer navbar moves up when clicking on a textbox in an Android environment
					//and issue #4113 Header and footer change their position after keyboard popup - iOS
					//and issue #4410 Footer navbar moves up when clicking on a textbox in an Android environment
					if ( screen.width < 1025 && $( e.target ).is( o.hideDuringFocus ) && !$( e.target ).closest( ".ui-header-fixed, .ui-footer-fixed" ).length ) {
						//Fix for issue #4724 Moving through form in Mobile Safari with "Next" and "Previous" system
						//controls causes fixed position, tap-toggle false Header to reveal itself
						// isVisible instead of self._visible because the focusin and focusout events fire twice at the same time
						// Also use a delay for hiding the toolbars because on Android native browser focusin is direclty followed
						// by a focusout when a native selects opens and the other way around when it closes.
						if ( e.type === "focusout" && !isVisible ) {
							isVisible = true;
							//wait for the stack to unwind and see if we have jumped to another input
							clearTimeout( delayHide );
							delayShow = setTimeout( function() {
								self.show();
							}, 0 );
						} else if ( e.type === "focusin" && !!isVisible ) {
							//if we have jumped to another input clear the time out to cancel the show.
							clearTimeout( delayShow );
							isVisible = false;
							delayHide = setTimeout( function() {
								self.hide();
							}, 0 );
						}
					}
				});
		},

		_setRelative: function() {
			if( this.options.position !== "fixed" ){
				$( "[data-"+ $.mobile.ns + "role='page']" ).css({ "position": "relative" });
			}
		},

		_destroy: function() {
			var $el = this.element,
				header = $el.hasClass( "ui-header" );

			$el.closest( ".ui-page" ).css( "padding-" + ( header ? "top" : "bottom" ), "" );
			$el.removeClass( "ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden" );
			$el.closest( ".ui-page" ).removeClass( "ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen" );
		}

	});
})( jQuery );

(function( $, undefined ) {
	$.widget( "mobile.toolbar", $.mobile.toolbar, {

		_makeFixed: function() {
			this._super();
			this._workarounds();
		},

		//check the browser and version and run needed workarounds
		_workarounds: function() {
			var ua = navigator.userAgent,
			platform = navigator.platform,
			// Rendering engine is Webkit, and capture major version
			wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ ),
			wkversion = !!wkmatch && wkmatch[ 1 ],
			os = null,
			self = this;
			//set the os we are working in if it dosent match one with workarounds return
			if ( platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) {
				os = "ios";
			} else if ( ua.indexOf( "Android" ) > -1 ) {
				os = "android";
			} else {
				return;
			}
			//check os version if it dosent match one with workarounds return
			if ( os === "ios" ) {
				//iOS  workarounds
				self._bindScrollWorkaround();
			} else if ( os === "android" && wkversion && wkversion < 534 ) {
				//Android 2.3 run all Android 2.3 workaround
				self._bindScrollWorkaround();
				self._bindListThumbWorkaround();
			} else {
				return;
			}
		},

		//Utility class for checking header and footer positions relative to viewport
		_viewportOffset: function() {
			var $el = this.element,
				header = $el.hasClass( "ui-header" ),
				offset = Math.abs( $el.offset().top - this.window.scrollTop() );
			if ( !header ) {
				offset = Math.round( offset - this.window.height() + $el.outerHeight() ) - 60;
			}
			return offset;
		},

		//bind events for _triggerRedraw() function
		_bindScrollWorkaround: function() {
			var self = this;
			//bind to scrollstop and check if the toolbars are correctly positioned
			this._on( this.window, { scrollstop: function() {
				var viewportOffset = self._viewportOffset();
				//check if the header is visible and if its in the right place
				if ( viewportOffset > 2 && self._visible ) {
					self._triggerRedraw();
				}
			}});
		},

		//this addresses issue #4250 Persistent footer instability in v1.1 with long select lists in Android 2.3.3
		//and issue #3748 Android 2.x: Page transitions broken when fixed toolbars used
		//the absolutely positioned thumbnail in a list view causes problems with fixed position buttons above in a nav bar
		//setting the li's to -webkit-transform:translate3d(0,0,0); solves this problem to avoide potential issues in other
		//platforms we scope this with the class ui-android-2x-fix
		_bindListThumbWorkaround: function() {
			this.element.closest( ".ui-page" ).addClass( "ui-android-2x-fixed" );
		},
		//this addresses issues #4337 Fixed header problem after scrolling content on iOS and Android
		//and device bugs project issue #1 Form elements can lose click hit area in position: fixed containers.
		//this also addresses not on fixed toolbars page in docs
		//adding 1px of padding to the bottom then removing it causes a "redraw"
		//which positions the toolbars correctly (they will always be visually correct)
		_triggerRedraw: function() {
			var paddingBottom = parseFloat( $( ".ui-page-active" ).css( "padding-bottom" ) );
			//trigger page redraw to fix incorrectly positioned fixed elements
			$( ".ui-page-active" ).css( "padding-bottom", ( paddingBottom + 1 ) + "px" );
			//if the padding is reset with out a timeout the reposition will not occure.
			//this is independant of JQM the browser seems to need the time to react.
			setTimeout( function() {
				$( ".ui-page-active" ).css( "padding-bottom", paddingBottom + "px" );
			}, 0 );
		},

		destroy: function() {
			this._super();
			//Remove the class we added to the page previously in android 2.x
			this.element.closest( ".ui-page-active" ).removeClass( "ui-android-2x-fix" );
		}
	});

})( jQuery );


( function( $, undefined ) {

var ieHack = ( $.mobile.browser.oldIE && $.mobile.browser.oldIE <= 8 ),
	uiTemplate = $(
		"<div class='ui-popup-arrow-guide'></div>" +
		"<div class='ui-popup-arrow-container" + ( ieHack ? " ie" : "" ) + "'>" +
			"<div class='ui-popup-arrow'>" +
				"<div class='ui-popup-arrow-background'></div>" +
			"</div>" +
		"</div>"
	),
	// Needed for transforming coordinates from screen to arrow background
	txFactor = Math.sqrt( 2 ) / 2;

function getArrow() {
	var clone = uiTemplate.clone(),
		gd = clone.eq( 0 ),
		ct = clone.eq( 1 ),
		ar = ct.children(),
		bg = ar.children();

	return { arEls: ct.add( gd ), gd: gd, ct: ct, ar: ar, bg: bg };
}

$.widget( "mobile.popup", $.mobile.popup, {
	options: {

		arrow: ""
	},

	_create: function() {
		var ar,
			ret = this._super();

		if ( this.options.arrow ) {
			this._ui.arrow = ar = this._addArrow();
		}

		return ret;
	},

	_addArrow: function() {
		var theme,
			opts = this.options,
			ar = getArrow();

		theme = this._themeClassFromOption( "ui-body-", opts.theme );
		ar.ar.addClass( theme + ( opts.shadow ? " ui-overlay-shadow" : "" ) );
		ar.bg.addClass( theme );
		ar.arEls.hide().appendTo( this.element );

		return ar;
	},

	_unenhance: function() {
		var ar = this._ui.arrow;

		if ( ar ) {
			ar.arEls.remove();
		}

		return this._super();
	},

	// Pretend to show an arrow described by @p and @dir and calculate the
	// distance from the desired point. If a best-distance is passed in, return
	// the minimum of the one passed in and the one calculated.
	_tryAnArrow: function( p, dir, desired, s, best ) {
		var result, r, diff, desiredForArrow = {}, tip = {};

		// If the arrow has no wiggle room along the edge of the popup, it cannot
		// be displayed along the requested edge without it sticking out.
		if ( s.arFull[ p.dimKey ] > s.guideDims[ p.dimKey ] ) {
			return best;
		}

		desiredForArrow[ p.fst ] = desired[ p.fst ] +
			( s.arHalf[ p.oDimKey ] + s.menuHalf[ p.oDimKey ] ) * p.offsetFactor -
			s.contentBox[ p.fst ] + ( s.clampInfo.menuSize[ p.oDimKey ] - s.contentBox[ p.oDimKey ] ) * p.arrowOffsetFactor;
		desiredForArrow[ p.snd ] = desired[ p.snd ];

		result = s.result || this._calculateFinalLocation( desiredForArrow, s.clampInfo );
		r = { x: result.left, y: result.top };

		tip[ p.fst ] = r[ p.fst ] + s.contentBox[ p.fst ] + p.tipOffset;
		tip[ p.snd ] = Math.max( result[ p.prop ] + s.guideOffset[ p.prop ] + s.arHalf[ p.dimKey ],
			Math.min( result[ p.prop ] + s.guideOffset[ p.prop ] + s.guideDims[ p.dimKey ] - s.arHalf[ p.dimKey ],
				desired[ p.snd ] ) );

		diff = Math.abs( desired.x - tip.x ) + Math.abs( desired.y - tip.y );
		if ( !best || diff < best.diff ) {
			// Convert tip offset to coordinates inside the popup
			tip[ p.snd ] -= s.arHalf[ p.dimKey ] + result[ p.prop ] + s.contentBox[ p.snd ];
			best = { dir: dir, diff: diff, result: result, posProp: p.prop, posVal: tip[ p.snd ] };
		}

		return best;
	},

	_getPlacementState: function( clamp ) {
		var offset, gdOffset,
			ar = this._ui.arrow,
			state = {
				clampInfo: this._clampPopupWidth( !clamp ),
				arFull: { cx: ar.ct.width(), cy: ar.ct.height() },
				guideDims: { cx: ar.gd.width(), cy: ar.gd.height() },
				guideOffset: ar.gd.offset()
			};

		offset = this.element.offset();

		ar.gd.css( { left: 0, top: 0, right: 0, bottom: 0 } );
		gdOffset = ar.gd.offset();
		state.contentBox = {
			x: gdOffset.left - offset.left,
			y: gdOffset.top - offset.top,
			cx: ar.gd.width(),
			cy: ar.gd.height()
		};
		ar.gd.removeAttr( "style" );

		// The arrow box moves between guideOffset and guideOffset + guideDims - arFull
		state.guideOffset = { left: state.guideOffset.left - offset.left, top: state.guideOffset.top - offset.top };
		state.arHalf = { cx: state.arFull.cx / 2, cy: state.arFull.cy / 2 };
		state.menuHalf = { cx: state.clampInfo.menuSize.cx / 2, cy: state.clampInfo.menuSize.cy / 2 };

		return state;
	},

	_placementCoords: function( desired ) {
		var state, best, params, bgOffset, elOffset, diff, bgRef,
			optionValue = this.options.arrow,
			ar = this._ui.arrow;

		if ( !ar ) {
			return this._super( desired );
		}

		ar.arEls.show();

		bgRef = {};
		state = this._getPlacementState( true );
		params = {
			"l": { fst: "x", snd: "y", prop: "top", dimKey: "cy", oDimKey: "cx", offsetFactor: 1, tipOffset:  -state.arHalf.cx, arrowOffsetFactor: 0 },
			"r": { fst: "x", snd: "y", prop: "top", dimKey: "cy", oDimKey: "cx", offsetFactor: -1, tipOffset: state.arHalf.cx + state.contentBox.cx, arrowOffsetFactor: 1 },
			"b": { fst: "y", snd: "x", prop: "left", dimKey: "cx", oDimKey: "cy", offsetFactor: -1, tipOffset: state.arHalf.cy + state.contentBox.cy, arrowOffsetFactor: 1 },
			"t": { fst: "y", snd: "x", prop: "left", dimKey: "cx", oDimKey: "cy", offsetFactor: 1, tipOffset: -state.arHalf.cy, arrowOffsetFactor: 0 }
		};

		// Try each side specified in the options to see on which one the arrow
		// should be placed such that the distance between the tip of the arrow and
		// the desired coordinates is the shortest.
		$.each( ( optionValue === true ? "l,t,r,b" : optionValue ).split( "," ),
			$.proxy( function( key, value ) {
				best = this._tryAnArrow( params[ value ], value, desired, state, best );
			}, this ) );

		// Could not place the arrow along any of the edges - behave as if showing
		// the arrow was turned off.
		if ( !best ) {
			ar.arEls.hide();
			return this._super( desired );
		}

		// Move the arrow into place
		ar.ct
			.removeClass( "ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b" )
			.addClass( "ui-popup-arrow-" + best.dir )
			.removeAttr( "style" ).css( best.posProp, best.posVal )
			.show();

		// Do not move/size the background div on IE, because we use the arrow div for background as well.
		if ( !ieHack ) {
			elOffset = this.element.offset();
			bgRef[ params[ best.dir ].fst ] = ar.ct.offset();
			bgRef[ params[ best.dir ].snd ] = {
				left: elOffset.left + state.contentBox.x,
				top: elOffset.top + state.contentBox.y
			};
			bgOffset = ar.bg
				.removeAttr( "style" )
				.css( ( "cx" === params[ best.dir ].dimKey ? "width" : "height" ), state.contentBox[ params[ best.dir ].dimKey ] )
				.offset();
			diff = { dx: bgRef.x.left - bgOffset.left, dy: bgRef.y.top - bgOffset.top };
			ar.bg.css( { left: txFactor * diff.dy + txFactor * diff.dx, top: txFactor * diff.dy - txFactor * diff.dx } );
		}

		return best.result;
	},

	_setOptions: function( opts ) {
		var newTheme,
			oldTheme = this.options.theme,
			ar = this._ui.arrow,
			ret = this._super( opts );

		if ( opts.arrow !== undefined ) {
			if ( !ar && opts.arrow ) {
				this._ui.arrow = this._addArrow();

				// Important to return here so we don't set the same options all over
				// again below.
				return;
			} else if ( ar && !opts.arrow ) {
				ar.arEls.remove();
				this._ui.arrow = null;
			}
		}

		// Reassign with potentially new arrow
		ar = this._ui.arrow;

		if ( ar ) {
			if ( opts.theme !== undefined ) {
				oldTheme = this._themeClassFromOption( "ui-body-", oldTheme );
				newTheme = this._themeClassFromOption( "ui-body-", opts.theme );
				ar.ar.removeClass( oldTheme ).addClass( newTheme );
				ar.bg.removeClass( oldTheme ).addClass( newTheme );
			}

			if ( opts.shadow !== undefined ) {
				ar.ar.toggleClass( "ui-overlay-shadow", opts.shadow );
			}
		}

		return ret;
	},

	_destroy: function() {
		var ar = this._ui.arrow;

		if ( ar ) {
			ar.arEls.remove();
		}

		return this._super();
	}
});

})( jQuery );


(function( $, undefined ) {

$.widget( "mobile.panel", {
	options: {
		classes: {
			panel: "ui-panel",
			panelOpen: "ui-panel-open",
			panelClosed: "ui-panel-closed",
			panelFixed: "ui-panel-fixed",
			panelInner: "ui-panel-inner",
			modal: "ui-panel-dismiss",
			modalOpen: "ui-panel-dismiss-open",
			pageContainer: "ui-panel-page-container",
			pageWrapper: "ui-panel-wrapper",
			pageFixedToolbar: "ui-panel-fixed-toolbar",
			pageContentPrefix: "ui-panel-page-content", /* Used for wrapper and fixed toolbars position, display and open classes. */
			animate: "ui-panel-animate"
		},
		animate: true,
		theme: null,
		position: "left",
		dismissible: true,
		display: "reveal", //accepts reveal, push, overlay
		swipeClose: true,
		positionFixed: false
	},

	_panelID: null,
	_closeLink: null,
	_parentPage: null,
	_page: null,
	_modal: null,
	_panelInner: null,
	_wrapper: null,
	_fixedToolbars: null,

	_create: function() {
		var el = this.element,
			parentPage = el.closest( ":jqmData(role='page')" );

		// expose some private props to other methods
		$.extend( this, {
			_panelID: el.attr( "id" ),
			_closeLink: el.find( ":jqmData(rel='close')" ),
			_parentPage: ( parentPage.length > 0 ) ? parentPage : false,
			_page: this._getPage,
			_panelInner: this._getPanelInner(),
			_wrapper: this._getWrapper,
			_fixedToolbars: this._getFixedToolbars
		});

		this._addPanelClasses();

		// if animating, add the class to do so
		if ( $.support.cssTransform3d && !!this.options.animate ) {
			this.element.addClass( this.options.classes.animate );
		}

		this._bindUpdateLayout();
		this._bindCloseEvents();
		this._bindLinkListeners();
		this._bindPageEvents();

		if ( !!this.options.dismissible ) {
			this._createModal();
		}

		this._bindSwipeEvents();
	},

	_getPanelInner: function() {
		var panelInner = this.element.find( "." + this.options.classes.panelInner );

		if ( panelInner.length === 0 ) {
			panelInner = this.element.children().wrapAll( "<div class='" + this.options.classes.panelInner + "' />" ).parent();
		}

		return panelInner;
	},

	_createModal: function() {
		var self = this,
			target = self._parentPage ? self._parentPage.parent() : self.element.parent();

		self._modal = $( "<div class='" + self.options.classes.modal + "' data-panelid='" + self._panelID + "'></div>" )
			.on( "mousedown", function() {
				self.close();
			})
			.appendTo( target );
	},

	_getPage: function() {
		var page = this._parentPage ? this._parentPage : $( "." + $.mobile.activePageClass );

		return page;
	},

	_getWrapper: function() {
		var wrapper = this._page().find( "." + this.options.classes.pageWrapper );

		if ( wrapper.length === 0 ) {
			wrapper = this._page().children( ".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)" )
				.wrapAll( "<div class='" + this.options.classes.pageWrapper + "'></div>" )
				.parent();
		}

		return wrapper;
	},

	_getFixedToolbars: function() {
		var extFixedToolbars = $( "body" ).children( ".ui-header-fixed, .ui-footer-fixed" ),
			intFixedToolbars = this._page().find( ".ui-header-fixed, .ui-footer-fixed" ),
			fixedToolbars = extFixedToolbars.add( intFixedToolbars ).addClass( this.options.classes.pageFixedToolbar );

		return fixedToolbars;
	},

	_getPosDisplayClasses: function( prefix ) {
		return prefix + "-position-" + this.options.position + " " + prefix + "-display-" + this.options.display;
	},

	_getPanelClasses: function() {
		var panelClasses = this.options.classes.panel +
			" " + this._getPosDisplayClasses( this.options.classes.panel ) +
			" " + this.options.classes.panelClosed +
			" " + "ui-body-" + ( this.options.theme ? this.options.theme : "inherit" );

		if ( !!this.options.positionFixed ) {
			panelClasses += " " + this.options.classes.panelFixed;
		}

		return panelClasses;
	},

	_addPanelClasses: function() {
		this.element.addClass( this._getPanelClasses() );
	},

	_bindCloseEvents: function() {
		var self = this;

		self._closeLink.on( "click.panel" , function( e ) {
			e.preventDefault();
			self.close();
			return false;
		});
		self.element.on( "click.panel" , "a:jqmData(ajax='false')", function(/* e */) {
			self.close();
		});
	},

	_positionPanel: function() {
		var self = this,
			panelInnerHeight = self._panelInner.outerHeight(),
			expand = panelInnerHeight > $.mobile.getScreenHeight();

		if ( expand || !self.options.positionFixed ) {
			if ( expand ) {
				self._unfixPanel();
				$.mobile.resetActivePageHeight( panelInnerHeight );
			}
			window.scrollTo( 0, $.mobile.defaultHomeScroll );
		} else {
			self._fixPanel();
		}
	},

	_bindFixListener: function() {
		this._on( $( window ), { "throttledresize": "_positionPanel" });
	},

	_unbindFixListener: function() {
		this._off( $( window ), "throttledresize" );
	},

	_unfixPanel: function() {
		if ( !!this.options.positionFixed && $.support.fixedPosition ) {
			this.element.removeClass( this.options.classes.panelFixed );
		}
	},

	_fixPanel: function() {
		if ( !!this.options.positionFixed && $.support.fixedPosition ) {
			this.element.addClass( this.options.classes.panelFixed );
		}
	},

	_bindUpdateLayout: function() {
		var self = this;

		self.element.on( "updatelayout", function(/* e */) {
			if ( self._open ) {
				self._positionPanel();
			}
		});
	},

	_bindLinkListeners: function() {
		this._on( "body", {
			"click a": "_handleClick"
		});

	},

	_handleClick: function( e ) {
		if (  e.currentTarget.href.split( "#" )[ 1 ] === this._panelID && this._panelID !== undefined ) {
			e.preventDefault();
			var link = $( e.target );
			if ( link.hasClass( "ui-btn" ) ) {
				link.addClass( $.mobile.activeBtnClass );
				this.element.one( "panelopen panelclose", function() {
					link.removeClass( $.mobile.activeBtnClass );
				});
			}
			this.toggle();
			return false;
		}
	},

	_bindSwipeEvents: function() {
		var self = this,
			area = self._modal ? self.element.add( self._modal ) : self.element;

		// on swipe, close the panel
		if ( !!self.options.swipeClose ) {
			if ( self.options.position === "left" ) {
				area.on( "swipeleft.panel", function(/* e */) {
					self.close();
				});
			} else {
				area.on( "swiperight.panel", function(/* e */) {
					self.close();
				});
			}
		}
	},

	_bindPageEvents: function() {
		var self = this;

		this.document
			// Close the panel if another panel on the page opens
			.on( "panelbeforeopen", function( e ) {
				if ( self._open && e.target !== self.element[ 0 ] ) {
					self.close();
				}
			})
			// On escape, close? might need to have a target check too...
			.on( "keyup.panel", function( e ) {
				if ( e.keyCode === 27 && self._open ) {
					self.close();
				}
			});

		// Clean up open panels after page hide
		if ( self._parentPage ) {
			this.document.on( "pagehide", ":jqmData(role='page')", function() {
				if ( self._open ) {
					self.close( true );
				}
			});
		} else {
			this.document.on( "pagebeforehide", function() {
				if ( self._open ) {
					self.close( true );
				}
			});
		}
	},

	// state storage of open or closed
	_open: false,
	_pageContentOpenClasses: null,
	_modalOpenClasses: null,

	open: function( immediate ) {
		if ( !this._open ) {
			var self = this,
				o = self.options,

				_openPanel = function() {
					self.document.off( "panelclose" );
					self._page().jqmData( "panel", "open" );

					if ( $.support.cssTransform3d && !!o.animate && o.display !== "overlay" ) {
						self._wrapper().addClass( o.classes.animate );
						self._fixedToolbars().addClass( o.classes.animate );
					}

					if ( !immediate && $.support.cssTransform3d && !!o.animate ) {
						self.document.on( self._transitionEndEvents, complete );
					} else {
						setTimeout( complete, 0 );
					}

					if ( o.theme && o.display !== "overlay" ) {
						self._page().parent()
							.addClass( o.classes.pageContainer + "-themed " + o.classes.pageContainer + "-" + o.theme );
					}

					self.element
						.removeClass( o.classes.panelClosed )
						.addClass( o.classes.panelOpen );

					self._positionPanel();

					self._pageContentOpenClasses = self._getPosDisplayClasses( o.classes.pageContentPrefix );

					if ( o.display !== "overlay" ) {
						self._page().parent().addClass( o.classes.pageContainer );
						self._wrapper().addClass( self._pageContentOpenClasses );
						self._fixedToolbars().addClass( self._pageContentOpenClasses );
					}

					self._modalOpenClasses = self._getPosDisplayClasses( o.classes.modal ) + " " + o.classes.modalOpen;
					if ( self._modal ) {
						self._modal
							.addClass( self._modalOpenClasses )
							.height( Math.max( self._modal.height(), self.document.height() ) );
					}
				},
				complete = function() {
					self.document.off( self._transitionEndEvents, complete );

					if ( o.display !== "overlay" ) {
						self._wrapper().addClass( o.classes.pageContentPrefix + "-open" );
						self._fixedToolbars().addClass( o.classes.pageContentPrefix + "-open" );
					}

					self._bindFixListener();

					self._trigger( "open" );
				};

			self._trigger( "beforeopen" );

			if ( self._page().jqmData( "panel" ) === "open" ) {
				self.document.on( "panelclose", function() {
					_openPanel();
				});
			} else {
				_openPanel();
			}

			self._open = true;
		}
	},

	close: function( immediate ) {
		if ( this._open ) {
			var self = this,
				o = this.options,

				_closePanel = function() {
					if ( !immediate && $.support.cssTransform3d && !!o.animate ) {
						self.document.on( self._transitionEndEvents, complete );
					} else {
						setTimeout( complete, 0 );
					}

					self.element.removeClass( o.classes.panelOpen );

					if ( o.display !== "overlay" ) {
						self._wrapper().removeClass( self._pageContentOpenClasses );
						self._fixedToolbars().removeClass( self._pageContentOpenClasses );
					}

					if ( self._modal ) {
						self._modal.removeClass( self._modalOpenClasses );
					}
				},
				complete = function() {
					self.document.off( self._transitionEndEvents, complete );

					if ( o.theme && o.display !== "overlay" ) {
						self._page().parent().removeClass( o.classes.pageContainer + "-themed " + o.classes.pageContainer + "-" + o.theme );
					}

					self.element.addClass( o.classes.panelClosed );

					if ( o.display !== "overlay" ) {
						self._page().parent().removeClass( o.classes.pageContainer );
						self._wrapper().removeClass( o.classes.pageContentPrefix + "-open" );
						self._fixedToolbars().removeClass( o.classes.pageContentPrefix + "-open" );
					}

					if ( $.support.cssTransform3d && !!o.animate && o.display !== "overlay" ) {
						self._wrapper().removeClass( o.classes.animate );
						self._fixedToolbars().removeClass( o.classes.animate );
					}

					self._fixPanel();
					self._unbindFixListener();
					$.mobile.resetActivePageHeight();

					self._page().jqmRemoveData( "panel" );

					self._trigger( "close" );
				};

			self._trigger( "beforeclose" );

			_closePanel();

			self._open = false;
		}
	},

	toggle: function() {
		this[ this._open ? "close" : "open" ]();
	},

	_transitionEndEvents: "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",

	_destroy: function() {
		var otherPanels,
		o = this.options,
		multiplePanels = ( $( "body > :mobile-panel" ).length + $.mobile.activePage.find( ":mobile-panel" ).length ) > 1;

		if ( o.display !== "overlay" ) {

			//  remove the wrapper if not in use by another panel
			otherPanels = $( "body > :mobile-panel" ).add( $.mobile.activePage.find( ":mobile-panel" ) );
			if ( otherPanels.not( ".ui-panel-display-overlay" ).not( this.element ).length === 0 ) {
				this._wrapper().children().unwrap();
			}

			if ( this._open ) {

				this._fixedToolbars().removeClass( o.classes.pageContentPrefix + "-open" );

				if ( $.support.cssTransform3d && !!o.animate ) {
					this._fixedToolbars().removeClass( o.classes.animate );
				}

				this._page().parent().removeClass( o.classes.pageContainer );

				if ( o.theme ) {
					this._page().parent().removeClass( o.classes.pageContainer + "-themed " + o.classes.pageContainer + "-" + o.theme );
				}
			}
		}

		if ( !multiplePanels ) {

			this.document.off( "panelopen panelclose" );

			if ( this._open ) {
				this.document.off( this._transitionEndEvents );
				$.mobile.resetActivePageHeight();
			}
		}

		if ( this._open ) {
			this._page().jqmRemoveData( "panel" );
		}

		this._panelInner.children().unwrap();

		this.element
			.removeClass( [ this._getPanelClasses(), o.classes.panelOpen, o.classes.animate ].join( " " ) )
			.off( "swipeleft.panel swiperight.panel" )
			.off( "panelbeforeopen" )
			.off( "panelhide" )
			.off( "keyup.panel" )
			.off( "updatelayout" )
			.off( this._transitionEndEvents );

		this._closeLink.off( "click.panel" );

		if ( this._modal ) {
			this._modal.remove();
		}
	}
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.table", {
	options: {
		classes: {
			table: "ui-table"
		},
		enhanced: false
	},

	_create: function() {
		if ( !this.options.enhanced ) {
			this.element.addClass( this.options.classes.table );
		}

		// extend here, assign on refresh > _setHeaders
		$.extend( this, {

			// Expose headers and allHeaders properties on the widget
			// headers references the THs within the first TR in the table
			headers: undefined,

			// allHeaders references headers, plus all THs in the thead, which may
			// include several rows, or not
			allHeaders: undefined
		});

		this._refresh( true );
	},

	_setHeaders: function() {
		var trs = this.element.find( "thead tr" );

		this.headers = this.element.find( "tr:eq(0)" ).children();
		this.allHeaders = this.headers.add( trs.children() );
	},

	refresh: function() {
		this._refresh();
	},

	rebuild: $.noop,

	_refresh: function( /* create */ ) {
		var table = this.element,
			trs = table.find( "thead tr" );

		// updating headers on refresh (fixes #5880)
		this._setHeaders();

		// Iterate over the trs
		trs.each( function() {
			var columnCount = 0;

			// Iterate over the children of the tr
			$( this ).children().each( function() {
				var span = parseInt( this.getAttribute( "colspan" ), 10 ),
					selector = ":nth-child(" + ( columnCount + 1 ) + ")",
					j;

				this.setAttribute( "data-" + $.mobile.ns + "colstart", columnCount + 1 );

				if ( span ) {
					for( j = 0; j < span - 1; j++ ) {
						columnCount++;
						selector += ", :nth-child(" + ( columnCount + 1 ) + ")";
					}
				}

				// Store "cells" data on header as a reference to all cells in the
				// same column as this TH
				$( this ).jqmData( "cells", table.find( "tr" ).not( trs.eq( 0 ) ).not( this ).children( selector ) );

				columnCount++;
			});
		});
	}
});

})( jQuery );


(function( $, undefined ) {

$.widget( "mobile.table", $.mobile.table, {
	options: {
		mode: "columntoggle",
		columnBtnTheme: null,
		columnPopupTheme: null,
		columnBtnText: "Columns...",
		classes: $.extend( $.mobile.table.prototype.options.classes, {
			popup: "ui-table-columntoggle-popup",
			columnBtn: "ui-table-columntoggle-btn",
			priorityPrefix: "ui-table-priority-",
			columnToggleTable: "ui-table-columntoggle"
		})
	},

	_create: function() {
		this._super();

		if ( this.options.mode !== "columntoggle" ) {
			return;
		}

		$.extend( this, {
			_menu: null
		});

		if ( this.options.enhanced ) {
			this._menu = $( this.document[ 0 ].getElementById( this._id() + "-popup" ) ).children().first();
			this._addToggles( this._menu, true );
			this._bindToggles( this._menu );
		} else {
			this._menu = this._enhanceColToggle();
			this.element.addClass( this.options.classes.columnToggleTable );
		}

		this._setupEvents();

		this._setToggleState();
	},

	_id: function() {
		return ( this.element.attr( "id" ) || ( this.widgetName + this.uuid ) );
	},

	_setupEvents: function() {
		//NOTE: inputs are bound in bindToggles,
		// so it can be called on refresh, too

		// update column toggles on resize
		this._on( this.window, {
			throttledresize: "_setToggleState"
		});
	},

	_bindToggles: function( menu ) {
		var inputs = menu.find( "input" );

		this._on( inputs, {
			change: "_menuInputChange"
		});
	},

	_addToggles: function( menu, keep ) {
		var inputs,
			checkboxIndex = 0,
			opts = this.options,
			container = menu.controlgroup( "container" );

		// allow update of menu on refresh (fixes #5880)
		if ( keep ) {
			inputs = menu.find( "input" );
		} else {
			container.empty();
		}

		// create the hide/show toggles
		this.headers.not( "td" ).each( function() {
			var header = $( this ),
				priority = $.mobile.getAttribute( this, "priority" ),
				cells = header.add( header.jqmData( "cells" ) );

			if ( priority ) {
				cells.addClass( opts.classes.priorityPrefix + priority );

				( keep ? inputs.eq( checkboxIndex++ ) :
					$("<label><input type='checkbox' checked />" +
						( header.children( "abbr" ).first().attr( "title" ) ||
							header.text() ) +
						"</label>" )
						.appendTo( container )
						.children( 0 )
						.checkboxradio( {
							theme: opts.columnPopupTheme
						}) )
					.jqmData( "cells", cells );
			}
		});

		// set bindings here
		if ( !keep ) {
			menu.controlgroup( "refresh" );
			this._bindToggles( menu );
		}
	},

	_menuInputChange: function( evt ) {
		var input = $( evt.target ),
			checked = input[ 0 ].checked;

		input.jqmData( "cells" )
			.toggleClass( "ui-table-cell-hidden", !checked )
			.toggleClass( "ui-table-cell-visible", checked );

		if ( input[ 0 ].getAttribute( "locked" ) ) {
			input.removeAttr( "locked" );

			this._unlockCells( input.jqmData( "cells" ) );
		} else {
			input.attr( "locked", true );
		}
	},

	_unlockCells: function( cells ) {
		// allow hide/show via CSS only = remove all toggle-locks
		cells.removeClass( "ui-table-cell-hidden ui-table-cell-visible");
	},

	_enhanceColToggle: function() {
		var id , menuButton, popup, menu,
			table = this.element,
			opts = this.options,
			ns = $.mobile.ns,
			fragment = this.document[ 0 ].createDocumentFragment();

		id = this._id() + "-popup";
		menuButton = $( "<a href='#" + id + "' " +
			"class='" + opts.classes.columnBtn + " ui-btn " +
			"ui-btn-" + ( opts.columnBtnTheme || "a" ) +
			" ui-corner-all ui-shadow ui-mini' " +
			"data-" + ns + "rel='popup'>" + opts.columnBtnText + "</a>" );
		popup = $( "<div class='" + opts.classes.popup + "' id='" + id + "'></div>" );
		menu = $( "<fieldset></fieldset>" ).controlgroup();

		// set extension here, send "false" to trigger build/rebuild
		this._addToggles( menu, false );

		menu.appendTo( popup );

		fragment.appendChild( popup[ 0 ] );
		fragment.appendChild( menuButton[ 0 ] );
		table.before( fragment );

		popup.popup();

		return menu;
	},

	rebuild: function() {
		this._super();

		if ( this.options.mode === "columntoggle" ) {
			// NOTE: rebuild passes "false", while refresh passes "undefined"
			// both refresh the table, but inside addToggles, !false will be true,
			// so a rebuild call can be indentified
			this._refresh( false );
		}
	},

	_refresh: function( create ) {
		this._super( create );

		if ( !create && this.options.mode === "columntoggle" ) {
			// columns not being replaced must be cleared from input toggle-locks
			this._unlockCells( this.allHeaders );

			// update columntoggles and cells
			this._addToggles( this._menu, create );

			// check/uncheck
			this._setToggleState();
		}
	},

	_setToggleState: function() {
		this._menu.find( "input" ).each( function() {
			var checkbox = $( this );

			this.checked = checkbox.jqmData( "cells" ).eq( 0 ).css( "display" ) === "table-cell";
			checkbox.checkboxradio( "refresh" );
		});
	},

	_destroy: function() {
		this._super();
	}
});

})( jQuery );

(function( $, undefined ) {

$.widget( "mobile.table", $.mobile.table, {
	options: {
		mode: "reflow",
		classes: $.extend( $.mobile.table.prototype.options.classes, {
			reflowTable: "ui-table-reflow",
			cellLabels: "ui-table-cell-label"
		})
	},

	_create: function() {
		this._super();

		// If it's not reflow mode, return here.
		if ( this.options.mode !== "reflow" ) {
			return;
		}

		if ( !this.options.enhanced ) {
			this.element.addClass( this.options.classes.reflowTable );

			this._updateReflow();
		}
	},

	rebuild: function() {
		this._super();

		if ( this.options.mode === "reflow" ) {
			this._refresh( false );
		}
	},

	_refresh: function( create ) {
		this._super( create );
		if ( !create && this.options.mode === "reflow" ) {
			this._updateReflow( );
		}
	},

	_updateReflow: function() {
		var table = this,
			opts = this.options;

		// get headers in reverse order so that top-level headers are appended last
		$( table.allHeaders.get().reverse() ).each( function() {
			var cells = $( this ).jqmData( "cells" ),
				colstart = $.mobile.getAttribute( this, "colstart" ),
				hierarchyClass = cells.not( this ).filter( "thead th" ).length && " ui-table-cell-label-top",
				text = $( this ).text(),
				iteration, filter;

				if ( text !== ""  ) {

					if ( hierarchyClass ) {
						iteration = parseInt( this.getAttribute( "colspan" ), 10 );
						filter = "";

						if ( iteration ) {
							filter = "td:nth-child("+ iteration +"n + " + ( colstart ) +")";
						}

						table._addLabels( cells.filter( filter ), opts.classes.cellLabels + hierarchyClass, text );
					} else {
						table._addLabels( cells, opts.classes.cellLabels, text );
					}

				}
		});
	},

	_addLabels: function( cells, label, text ) {
		// .not fixes #6006
		cells.not( ":has(b." + label + ")" ).prepend( "<b class='" + label + "'>" + text + "</b>"  );
	}
});

})( jQuery );

(function( $, undefined ) {

// TODO rename filterCallback/deprecate and default to the item itself as the first argument
var defaultFilterCallback = function( index, searchValue ) {
	return ( ( "" + ( $.mobile.getAttribute( this, "filtertext" ) || $( this ).text() ) )
		.toLowerCase().indexOf( searchValue ) === -1 );
};

$.widget( "mobile.filterable", {

	initSelector: ":jqmData(filter='true')",

	options: {
		filterReveal: false,
		filterCallback: defaultFilterCallback,
		enhanced: false,
		input: null,
		children: "> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"
	},

	_create: function() {
		var opts = this.options;

		$.extend( this, {
			_search: null,
			_timer: 0
		});

		this._setInput( opts.input );
		if ( !opts.enhanced ) {
			this._filterItems( ( ( this._search && this._search.val() ) || "" ).toLowerCase() );
		}
	},

	_onKeyUp: function() {
		var val, lastval,
			search = this._search;

		if ( search ) {
			val = search.val().toLowerCase(),
			lastval = $.mobile.getAttribute( search[ 0 ], "lastval" ) + "";

			if ( lastval && lastval === val ) {
				// Execute the handler only once per value change
				return;
			}

			if ( this._timer ) {
				window.clearTimeout( this._timer );
				this._timer = 0;
			}

			this._timer = this._delay( function() {
				this._trigger( "beforefilter", "beforefilter", { input: search } );

				// Change val as lastval for next execution
				search[ 0 ].setAttribute( "data-" + $.mobile.ns + "lastval", val );

				this._filterItems( val );
				this._timer = 0;
			}, 250 );
		}
	},

	_getFilterableItems: function() {
		var elem = this.element,
			children = this.options.children,
			items = !children ? { length: 0 }:
				$.isFunction( children ) ? children():
				children.nodeName ? $( children ):
				children.jquery ? children:
				this.element.find( children );

		if ( items.length === 0 ) {
			items = elem.children();
		}

		return items;
	},

	_filterItems: function( val ) {
		var idx, callback, length, dst,
			show = [],
			hide = [],
			opts = this.options,
			filterItems = this._getFilterableItems();

		if ( val != null ) {
			callback = opts.filterCallback || defaultFilterCallback;
			length = filterItems.length;

			// Partition the items into those to be hidden and those to be shown
			for ( idx = 0 ; idx < length ; idx++ ) {
				dst = ( callback.call( filterItems[ idx ], idx, val ) ) ? hide : show;
				dst.push( filterItems[ idx ] );
			}
		}

		// If nothing is hidden, then the decision whether to hide or show the items
		// is based on the "filterReveal" option.
		if ( hide.length === 0 ) {
			filterItems[ opts.filterReveal ? "addClass" : "removeClass" ]( "ui-screen-hidden" );
		} else {
			$( hide ).addClass( "ui-screen-hidden" );
			$( show ).removeClass( "ui-screen-hidden" );
		}

		this._refreshChildWidget();
	},

	// The Default implementation of _refreshChildWidget attempts to call
	// refresh on collapsibleset, controlgroup, selectmenu, or listview
	_refreshChildWidget: function() {
		var widget, idx,
			recognizedWidgets = [ "collapsibleset", "selectmenu", "controlgroup", "listview" ];

		for ( idx = recognizedWidgets.length - 1 ; idx > -1 ; idx-- ) {
			widget = recognizedWidgets[ idx ];
			if ( $.mobile[ widget ] ) {
				widget = this.element.data( "mobile-" + widget );
				if ( widget && $.isFunction( widget.refresh ) ) {
					widget.refresh();
				}
			}
		}
	},

	// TODO: When the input is not internal, do not even store it in this._search
	_setInput: function ( selector ) {
		var search = this._search;

		// Stop a pending filter operation
		if ( this._timer ) {
			window.clearTimeout( this._timer );
			this._timer = 0;
		}

		if ( search ) {
			this._off( search, "keyup change input" );
			search = null;
		}

		if ( selector ) {
			search = selector.jquery ? selector:
				selector.nodeName ? $( selector ):
				this.document.find( selector );

			this._on( search, {
				keyup: "_onKeyUp",
				change: "_onKeyUp",
				input: "_onKeyUp"
			});
		}

		this._search = search;
	},

	_setOptions: function( options ) {
		var refilter = !( ( options.filterReveal === undefined ) &&
				( options.filterCallback === undefined ) &&
				( options.children === undefined ) );

		this._super( options );

		if ( options.input !== undefined ) {
			this._setInput( options.input );
			refilter = true;
		}

		if ( refilter ) {
			this.refresh();
		}
	},

	_destroy: function() {
		var opts = this.options,
			items = this._getFilterableItems();

		if ( opts.enhanced ) {
			items.toggleClass( "ui-screen-hidden", opts.filterReveal );
		} else {
			items.removeClass( "ui-screen-hidden" );
		}
	},

	refresh: function() {
		if ( this._timer ) {
			window.clearTimeout( this._timer );
			this._timer = 0;
		}
		this._filterItems( ( ( this._search && this._search.val() ) || "" ).toLowerCase() );
	}
});

})( jQuery );

(function( $, undefined ) {

// Create a function that will replace the _setOptions function of a widget,
// and will pass the options on to the input of the filterable.
var replaceSetOptions = function( self, orig ) {
		return function( options ) {
			orig.call( this, options );
			self._syncTextInputOptions( options );
		};
	},
	rDividerListItem = /(^|\s)ui-li-divider(\s|$)/,
	origDefaultFilterCallback = $.mobile.filterable.prototype.options.filterCallback;

// Override the default filter callback with one that does not hide list dividers
$.mobile.filterable.prototype.options.filterCallback = function( index, searchValue ) {
	return !this.className.match( rDividerListItem ) &&
		origDefaultFilterCallback.call( this, index, searchValue );
};

$.widget( "mobile.filterable", $.mobile.filterable, {
	options: {
		filterPlaceholder: "Filter items...",
		filterTheme: null
	},

	_create: function() {
		var idx, widgetName,
			elem = this.element,
			recognizedWidgets = [ "collapsibleset", "selectmenu", "controlgroup", "listview" ],
			createHandlers = {};

		this._super();

		$.extend( this, {
			_widget: null
		});

		for ( idx = recognizedWidgets.length - 1 ; idx > -1 ; idx-- ) {
			widgetName = recognizedWidgets[ idx ];
			if ( $.mobile[ widgetName ] ) {
				if ( this._setWidget( elem.data( "mobile-" + widgetName ) ) ) {
					break;
				} else {
					createHandlers[ widgetName + "create" ] = "_handleCreate";
				}
			}
		}

		if ( !this._widget ) {
			this._on( elem, createHandlers );
		}
	},

	_handleCreate: function( evt ) {
		this._setWidget( this.element.data( "mobile-" + evt.type.substring( 0, evt.type.length - 6 ) ) );
	},

	_setWidget: function( widget ) {
		if ( !this._widget && widget ) {
			this._widget = widget;
			this._widget._setOptions = replaceSetOptions( this, this._widget._setOptions );
		}

		if ( !!this._widget ) {
			this._syncTextInputOptions( this._widget.options );
			if ( this._widget.widgetName === "listview" ) {
				this._widget.options.hidedividers = true;
				this._widget.element.listview( "refresh" );
			}
		}

		return !!this._widget;
	},

	_isSearchInternal: function() {
		return ( this._search && this._search.jqmData( "ui-filterable-" + this.uuid + "-internal" ) );
	},

	_setInput: function( selector ) {
		var opts = this.options,
			updatePlaceholder = true,
			textinputOpts = {};

		if ( !selector ) {
			if ( this._isSearchInternal() ) {

				// Ignore the call to set a new input if the selector goes to falsy and
				// the current textinput is already of the internally generated variety.
				return;
			} else {

				// Generating a new textinput widget. No need to set the placeholder
				// further down the function.
				updatePlaceholder = false;
				selector = $( "<input " +
					"data-" + $.mobile.ns + "type='search' " +
					"placeholder='" + opts.filterPlaceholder + "'></input>" )
					.jqmData( "ui-filterable-" + this.uuid + "-internal", true );
				$( "<form class='ui-filterable'></form>" )
					.append( selector )
					.submit( function( evt ) {
						evt.preventDefault();
						selector.blur();
					})
					.insertBefore( this.element );
				if ( $.mobile.textinput ) {
					if ( this.options.filterTheme != null ) {
						textinputOpts[ "theme" ] = opts.filterTheme;
					}

					selector.textinput( textinputOpts );
				}
			}
		}

		this._super( selector );

		if ( this._isSearchInternal() && updatePlaceholder ) {
			this._search.attr( "placeholder", this.options.filterPlaceholder );
		}
	},

	_setOptions: function( options ) {
		var ret = this._super( options );

		// Need to set the filterPlaceholder after having established the search input
		if ( options.filterPlaceholder !== undefined ) {
			if ( this._isSearchInternal() ) {
				this._search.attr( "placeholder", options.filterPlaceholder );
			}
		}

		if ( options.filterTheme !== undefined && this._search && $.mobile.textinput ) {
			this._search.textinput( "option", "theme", options.filterTheme );
		}

		return ret;
	},

	_destroy: function() {
		if ( this._isSearchInternal() ) {
			this._search.remove();
		}
		this._super();
	},

	_syncTextInputOptions: function( options ) {
		var idx,
			textinputOptions = {};

		// We only sync options if the filterable's textinput is of the internally
		// generated variety, rather than one specified by the user.
		if ( this._isSearchInternal() && $.mobile.textinput ) {

			// Apply only the options understood by textinput
			for ( idx in $.mobile.textinput.prototype.options ) {
				if ( options[ idx ] !== undefined ) {
					if ( idx === "theme" && this.options.filterTheme != null ) {
						textinputOptions[ idx ] = this.options.filterTheme;
					} else {
						textinputOptions[ idx ] = options[ idx ];
					}
				}
			}
			this._search.textinput( "option", textinputOptions );
		}
	}
});

})( jQuery );

/*!
 * jQuery UI Tabs @VERSION
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var tabId = 0,
	rhash = /#.*$/;

function getNextTabId() {
	return ++tabId;
}

function isLocal( anchor ) {
	return anchor.hash.length > 1 &&
		decodeURIComponent( anchor.href.replace( rhash, "" ) ) ===
			decodeURIComponent( location.href.replace( rhash, "" ) );
}

$.widget( "ui.tabs", {
	version: "@VERSION",
	delay: 300,
	options: {
		active: null,
		collapsible: false,
		event: "click",
		heightStyle: "content",
		hide: null,
		show: null,

		// callbacks
		activate: null,
		beforeActivate: null,
		beforeLoad: null,
		load: null
	},

	_create: function() {
		var that = this,
			options = this.options;

		this.running = false;

		this.element
			.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
			.toggleClass( "ui-tabs-collapsible", options.collapsible )
			// Prevent users from focusing disabled tabs via click
			.delegate( ".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function( event ) {
				if ( $( this ).is( ".ui-state-disabled" ) ) {
					event.preventDefault();
				}
			})
			// support: IE <9
			// Preventing the default action in mousedown doesn't prevent IE
			// from focusing the element, so if the anchor gets focused, blur.
			// We don't have to worry about focusing the previously focused
			// element since clicking on a non-focusable element should focus
			// the body anyway.
			.delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
					this.blur();
				}
			});

		this._processTabs();
		options.active = this._initialActive();

		// Take disabling tabs via class attribute from HTML
		// into account and update option properly.
		if ( $.isArray( options.disabled ) ) {
			options.disabled = $.unique( options.disabled.concat(
				$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
					return that.tabs.index( li );
				})
			) ).sort();
		}

		// check for length avoids error when initializing empty list
		if ( this.options.active !== false && this.anchors.length ) {
			this.active = this._findActive( options.active );
		} else {
			this.active = $();
		}

		this._refresh();

		if ( this.active.length ) {
			this.load( options.active );
		}
	},

	_initialActive: function() {
		var active = this.options.active,
			collapsible = this.options.collapsible,
			locationHash = location.hash.substring( 1 );

		if ( active === null ) {
			// check the fragment identifier in the URL
			if ( locationHash ) {
				this.tabs.each(function( i, tab ) {
					if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
						active = i;
						return false;
					}
				});
			}

			// check for a tab marked active via a class
			if ( active === null ) {
				active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
			}

			// no active tab, set to false
			if ( active === null || active === -1 ) {
				active = this.tabs.length ? 0 : false;
			}
		}

		// handle numbers: negative, out of range
		if ( active !== false ) {
			active = this.tabs.index( this.tabs.eq( active ) );
			if ( active === -1 ) {
				active = collapsible ? false : 0;
			}
		}

		// don't allow collapsible: false and active: false
		if ( !collapsible && active === false && this.anchors.length ) {
			active = 0;
		}

		return active;
	},

	_getCreateEventData: function() {
		return {
			tab: this.active,
			panel: !this.active.length ? $() : this._getPanelForTab( this.active )
		};
	},

	_tabKeydown: function( event ) {
		var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
			selectedIndex = this.tabs.index( focusedTab ),
			goingForward = true;

		if ( this._handlePageNav( event ) ) {
			return;
		}

		switch ( event.keyCode ) {
			case $.ui.keyCode.RIGHT:
			case $.ui.keyCode.DOWN:
				selectedIndex++;
				break;
			case $.ui.keyCode.UP:
			case $.ui.keyCode.LEFT:
				goingForward = false;
				selectedIndex--;
				break;
			case $.ui.keyCode.END:
				selectedIndex = this.anchors.length - 1;
				break;
			case $.ui.keyCode.HOME:
				selectedIndex = 0;
				break;
			case $.ui.keyCode.SPACE:
				// Activate only, no collapsing
				event.preventDefault();
				clearTimeout( this.activating );
				this._activate( selectedIndex );
				return;
			case $.ui.keyCode.ENTER:
				// Toggle (cancel delayed activation, allow collapsing)
				event.preventDefault();
				clearTimeout( this.activating );
				// Determine if we should collapse or activate
				this._activate( selectedIndex === this.options.active ? false : selectedIndex );
				return;
			default:
				return;
		}

		// Focus the appropriate tab, based on which key was pressed
		event.preventDefault();
		clearTimeout( this.activating );
		selectedIndex = this._focusNextTab( selectedIndex, goingForward );

		// Navigating with control key will prevent automatic activation
		if ( !event.ctrlKey ) {
			// Update aria-selected immediately so that AT think the tab is already selected.
			// Otherwise AT may confuse the user by stating that they need to activate the tab,
			// but the tab will already be activated by the time the announcement finishes.
			focusedTab.attr( "aria-selected", "false" );
			this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

			this.activating = this._delay(function() {
				this.option( "active", selectedIndex );
			}, this.delay );
		}
	},

	_panelKeydown: function( event ) {
		if ( this._handlePageNav( event ) ) {
			return;
		}

		// Ctrl+up moves focus to the current tab
		if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
			event.preventDefault();
			this.active.focus();
		}
	},

	// Alt+page up/down moves focus to the previous/next tab (and activates)
	_handlePageNav: function( event ) {
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
			this._activate( this._focusNextTab( this.options.active - 1, false ) );
			return true;
		}
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
			this._activate( this._focusNextTab( this.options.active + 1, true ) );
			return true;
		}
	},

	_findNextTab: function( index, goingForward ) {
		var lastTabIndex = this.tabs.length - 1;

		function constrain() {
			if ( index > lastTabIndex ) {
				index = 0;
			}
			if ( index < 0 ) {
				index = lastTabIndex;
			}
			return index;
		}

		while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
			index = goingForward ? index + 1 : index - 1;
		}

		return index;
	},

	_focusNextTab: function( index, goingForward ) {
		index = this._findNextTab( index, goingForward );
		this.tabs.eq( index ).focus();
		return index;
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {
			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		if ( key === "disabled" ) {
			// don't use the widget factory's disabled handling
			this._setupDisabled( value );
			return;
		}

		this._super( key, value);

		if ( key === "collapsible" ) {
			this.element.toggleClass( "ui-tabs-collapsible", value );
			// Setting collapsible: false while collapsed; open first panel
			if ( !value && this.options.active === false ) {
				this._activate( 0 );
			}
		}

		if ( key === "event" ) {
			this._setupEvents( value );
		}

		if ( key === "heightStyle" ) {
			this._setupHeightStyle( value );
		}
	},

	_tabId: function( tab ) {
		return tab.attr( "aria-controls" ) || "ui-tabs-" + getNextTabId();
	},

	_sanitizeSelector: function( hash ) {
		return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
	},

	refresh: function() {
		var options = this.options,
			lis = this.tablist.children( ":has(a[href])" );

		// get disabled tabs from class attribute from HTML
		// this will get converted to a boolean if needed in _refresh()
		options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
			return lis.index( tab );
		});

		this._processTabs();

		// was collapsed or no tabs
		if ( options.active === false || !this.anchors.length ) {
			options.active = false;
			this.active = $();
		// was active, but active tab is gone
		} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
			// all remaining tabs are disabled
			if ( this.tabs.length === options.disabled.length ) {
				options.active = false;
				this.active = $();
			// activate previous tab
			} else {
				this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
			}
		// was active, active tab still exists
		} else {
			// make sure active index is correct
			options.active = this.tabs.index( this.active );
		}

		this._refresh();
	},

	_refresh: function() {
		this._setupDisabled( this.options.disabled );
		this._setupEvents( this.options.event );
		this._setupHeightStyle( this.options.heightStyle );

		this.tabs.not( this.active ).attr({
			"aria-selected": "false",
			tabIndex: -1
		});
		this.panels.not( this._getPanelForTab( this.active ) )
			.hide()
			.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});

		// Make sure one tab is in the tab order
		if ( !this.active.length ) {
			this.tabs.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active
				.addClass( "ui-tabs-active ui-state-active" )
				.attr({
					"aria-selected": "true",
					tabIndex: 0
				});
			this._getPanelForTab( this.active )
				.show()
				.attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				});
		}
	},

	_processTabs: function() {
		var that = this;

		this.tablist = this._getList()
			.addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
			.attr( "role", "tablist" );

		this.tabs = this.tablist.find( "> li:has(a[href])" )
			.addClass( "ui-state-default ui-corner-top" )
			.attr({
				role: "tab",
				tabIndex: -1
			});

		this.anchors = this.tabs.map(function() {
				return $( "a", this )[ 0 ];
			})
			.addClass( "ui-tabs-anchor" )
			.attr({
				role: "presentation",
				tabIndex: -1
			});

		this.panels = $();

		this.anchors.each(function( i, anchor ) {
			var selector, panel, panelId,
				anchorId = $( anchor ).uniqueId().attr( "id" ),
				tab = $( anchor ).closest( "li" ),
				originalAriaControls = tab.attr( "aria-controls" );

			// inline tab
			if ( isLocal( anchor ) ) {
				selector = anchor.hash;
				panel = that.element.find( that._sanitizeSelector( selector ) );
			// remote tab
			} else {
				panelId = that._tabId( tab );
				selector = "#" + panelId;
				panel = that.element.find( selector );
				if ( !panel.length ) {
					panel = that._createPanel( panelId );
					panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
				}
				panel.attr( "aria-live", "polite" );
			}

			if ( panel.length) {
				that.panels = that.panels.add( panel );
			}
			if ( originalAriaControls ) {
				tab.data( "ui-tabs-aria-controls", originalAriaControls );
			}
			tab.attr({
				"aria-controls": selector.substring( 1 ),
				"aria-labelledby": anchorId
			});
			panel.attr( "aria-labelledby", anchorId );
		});

		this.panels
			.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
			.attr( "role", "tabpanel" );
	},

	// allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: function() {
		return this.element.find( "ol,ul" ).eq( 0 );
	},

	_createPanel: function( id ) {
		return $( "<div>" )
			.attr( "id", id )
			.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
			.data( "ui-tabs-destroy", true );
	},

	_setupDisabled: function( disabled ) {
		if ( $.isArray( disabled ) ) {
			if ( !disabled.length ) {
				disabled = false;
			} else if ( disabled.length === this.anchors.length ) {
				disabled = true;
			}
		}

		// disable tabs
		for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
			if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
				$( li )
					.addClass( "ui-state-disabled" )
					.attr( "aria-disabled", "true" );
			} else {
				$( li )
					.removeClass( "ui-state-disabled" )
					.removeAttr( "aria-disabled" );
			}
		}

		this.options.disabled = disabled;
	},

	_setupEvents: function( event ) {
		var events = {
			click: function( event ) {
				event.preventDefault();
			}
		};
		if ( event ) {
			$.each( event.split(" "), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			});
		}

		this._off( this.anchors.add( this.tabs ).add( this.panels ) );
		this._on( this.anchors, events );
		this._on( this.tabs, { keydown: "_tabKeydown" } );
		this._on( this.panels, { keydown: "_panelKeydown" } );

		this._focusable( this.tabs );
		this._hoverable( this.tabs );
	},

	_setupHeightStyle: function( heightStyle ) {
		var maxHeight,
			parent = this.element.parent();

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			maxHeight -= this.element.outerHeight() - this.element.height();

			this.element.siblings( ":visible" ).each(function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			});

			this.element.children().not( this.panels ).each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.panels.each(function() {
				$( this ).height( Math.max( 0, maxHeight -
					$( this ).innerHeight() + $( this ).height() ) );
			})
			.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.panels.each(function() {
				maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
			}).height( maxHeight );
		}
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			anchor = $( event.currentTarget ),
			tab = anchor.closest( "li" ),
			clickedIsActive = tab[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : this._getPanelForTab( tab ),
			toHide = !active.length ? $() : this._getPanelForTab( active ),
			eventData = {
				oldTab: active,
				oldPanel: toHide,
				newTab: collapsing ? $() : tab,
				newPanel: toShow
			};

		event.preventDefault();

		if ( tab.hasClass( "ui-state-disabled" ) ||
				// tab is already loading
				tab.hasClass( "ui-tabs-loading" ) ||
				// can't switch durning an animation
				this.running ||
				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||
				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.tabs.index( tab );

		this.active = clickedIsActive ? $() : tab;
		if ( this.xhr ) {
			this.xhr.abort();
		}

		if ( !toHide.length && !toShow.length ) {
			$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
		}

		if ( toShow.length ) {
			this.load( this.tabs.index( tab ), event );
		}
		this._toggle( event, eventData );
	},

	// handles show/hide for selecting tabs
	_toggle: function( event, eventData ) {
		var that = this,
			toShow = eventData.newPanel,
			toHide = eventData.oldPanel;

		this.running = true;

		function complete() {
			that.running = false;
			that._trigger( "activate", event, eventData );
		}

		function show() {
			eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

			if ( toShow.length && that.options.show ) {
				that._show( toShow, that.options.show, complete );
			} else {
				toShow.show();
				complete();
			}
		}

		// start out by hiding, then showing, then completing
		if ( toHide.length && this.options.hide ) {
			this._hide( toHide, this.options.hide, function() {
				eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
				show();
			});
		} else {
			eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
			toHide.hide();
			show();
		}

		toHide.attr({
			"aria-expanded": "false",
			"aria-hidden": "true"
		});
		eventData.oldTab.attr( "aria-selected", "false" );
		// If we're switching tabs, remove the old tab from the tab order.
		// If we're opening from collapsed state, remove the previous tab from the tab order.
		// If we're collapsing, then keep the collapsing tab in the tab order.
		if ( toShow.length && toHide.length ) {
			eventData.oldTab.attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.tabs.filter(function() {
				return $( this ).attr( "tabIndex" ) === 0;
			})
			.attr( "tabIndex", -1 );
		}

		toShow.attr({
			"aria-expanded": "true",
			"aria-hidden": "false"
		});
		eventData.newTab.attr({
			"aria-selected": "true",
			tabIndex: 0
		});
	},

	_activate: function( index ) {
		var anchor,
			active = this._findActive( index );

		// trying to activate the already active panel
		if ( active[ 0 ] === this.active[ 0 ] ) {
			return;
		}

		// trying to collapse, simulate a click on the current active header
		if ( !active.length ) {
			active = this.active;
		}

		anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
		this._eventHandler({
			target: anchor,
			currentTarget: anchor,
			preventDefault: $.noop
		});
	},

	_findActive: function( index ) {
		return index === false ? $() : this.tabs.eq( index );
	},

	_getIndex: function( index ) {
		// meta-function to give users option to provide a href string instead of a numerical index.
		if ( typeof index === "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
		}

		return index;
	},

	_destroy: function() {
		if ( this.xhr ) {
			this.xhr.abort();
		}

		this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

		this.tablist
			.removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
			.removeAttr( "role" );

		this.anchors
			.removeClass( "ui-tabs-anchor" )
			.removeAttr( "role" )
			.removeAttr( "tabIndex" )
			.removeUniqueId();

		this.tabs.add( this.panels ).each(function() {
			if ( $.data( this, "ui-tabs-destroy" ) ) {
				$( this ).remove();
			} else {
				$( this )
					.removeClass( "ui-state-default ui-state-active ui-state-disabled " +
						"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
					.removeAttr( "tabIndex" )
					.removeAttr( "aria-live" )
					.removeAttr( "aria-busy" )
					.removeAttr( "aria-selected" )
					.removeAttr( "aria-labelledby" )
					.removeAttr( "aria-hidden" )
					.removeAttr( "aria-expanded" )
					.removeAttr( "role" );
			}
		});

		this.tabs.each(function() {
			var li = $( this ),
				prev = li.data( "ui-tabs-aria-controls" );
			if ( prev ) {
				li
					.attr( "aria-controls", prev )
					.removeData( "ui-tabs-aria-controls" );
			} else {
				li.removeAttr( "aria-controls" );
			}
		});

		this.panels.show();

		if ( this.options.heightStyle !== "content" ) {
			this.panels.css( "height", "" );
		}
	},

	enable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === false ) {
			return;
		}

		if ( index === undefined ) {
			disabled = false;
		} else {
			index = this._getIndex( index );
			if ( $.isArray( disabled ) ) {
				disabled = $.map( disabled, function( num ) {
					return num !== index ? num : null;
				});
			} else {
				disabled = $.map( this.tabs, function( li, num ) {
					return num !== index ? num : null;
				});
			}
		}
		this._setupDisabled( disabled );
	},

	disable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === true ) {
			return;
		}

		if ( index === undefined ) {
			disabled = true;
		} else {
			index = this._getIndex( index );
			if ( $.inArray( index, disabled ) !== -1 ) {
				return;
			}
			if ( $.isArray( disabled ) ) {
				disabled = $.merge( [ index ], disabled ).sort();
			} else {
				disabled = [ index ];
			}
		}
		this._setupDisabled( disabled );
	},

	load: function( index, event ) {
		index = this._getIndex( index );
		var that = this,
			tab = this.tabs.eq( index ),
			anchor = tab.find( ".ui-tabs-anchor" ),
			panel = this._getPanelForTab( tab ),
			eventData = {
				tab: tab,
				panel: panel
			};

		// not remote
		if ( isLocal( anchor[ 0 ] ) ) {
			return;
		}

		this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

		// support: jQuery <1.8
		// jQuery <1.8 returns false if the request is canceled in beforeSend,
		// but as of 1.8, $.ajax() always returns a jqXHR object.
		if ( this.xhr && this.xhr.statusText !== "canceled" ) {
			tab.addClass( "ui-tabs-loading" );
			panel.attr( "aria-busy", "true" );

			this.xhr
				.success(function( response ) {
					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout(function() {
						panel.html( response );
						that._trigger( "load", event, eventData );
					}, 1 );
				})
				.complete(function( jqXHR, status ) {
					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout(function() {
						if ( status === "abort" ) {
							that.panels.stop( false, true );
						}

						tab.removeClass( "ui-tabs-loading" );
						panel.removeAttr( "aria-busy" );

						if ( jqXHR === that.xhr ) {
							delete that.xhr;
						}
					}, 1 );
				});
		}
	},

	_ajaxSettings: function( anchor, event, eventData ) {
		var that = this;
		return {
			url: anchor.attr( "href" ),
			beforeSend: function( jqXHR, settings ) {
				return that._trigger( "beforeLoad", event,
					$.extend( { jqXHR : jqXHR, ajaxSettings: settings }, eventData ) );
			}
		};
	},

	_getPanelForTab: function( tab ) {
		var id = $( tab ).attr( "aria-controls" );
		return this.element.find( this._sanitizeSelector( "#" + id ) );
	}
});

})( jQuery );

(function( $, undefined ) {

})( jQuery );

(function( $, window ) {

	$.mobile.iosorientationfixEnabled = true;

	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	var ua = navigator.userAgent,
		zoom,
		evt, x, y, z, aig;
	if ( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test( ua ) && ua.indexOf( "AppleWebKit" ) > -1 ) ) {
		$.mobile.iosorientationfixEnabled = false;
		return;
	}

	zoom = $.mobile.zoom;

	function checkTilt( e ) {
		evt = e.originalEvent;
		aig = evt.accelerationIncludingGravity;

		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );

		// If portrait orientation and in one of the danger zones
		if ( !window.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ) {
				if ( zoom.enabled ) {
					zoom.disable();
				}
		}	else if ( !zoom.enabled ) {
				zoom.enable();
		}
	}

	$.mobile.document.on( "mobileinit", function() {
		if ( $.mobile.iosorientationfixEnabled ) {
			$.mobile.window
				.bind( "orientationchange.iosorientationfix", zoom.enable )
				.bind( "devicemotion.iosorientationfix", checkTilt );
		}
	});

}( jQuery, this ));

(function( $, window, undefined ) {
	var	$html = $( "html" ),
		$window = $.mobile.window;

	//remove initial build class (only present on first pageshow)
	function hideRenderingClass() {
		$html.removeClass( "ui-mobile-rendering" );
	}

	// trigger mobileinit event - useful hook for configuring $.mobile settings before they're used
	$( window.document ).trigger( "mobileinit" );

	// support conditions
	// if device support condition(s) aren't met, leave things as they are -> a basic, usable experience,
	// otherwise, proceed with the enhancements
	if ( !$.mobile.gradeA() ) {
		return;
	}

	// override ajaxEnabled on platforms that have known conflicts with hash history updates
	// or generally work better browsing in regular http for full page refreshes (BB5, Opera Mini)
	if ( $.mobile.ajaxBlacklist ) {
		$.mobile.ajaxEnabled = false;
	}

	// Add mobile, initial load "rendering" classes to docEl
	$html.addClass( "ui-mobile ui-mobile-rendering" );

	// This is a fallback. If anything goes wrong (JS errors, etc), or events don't fire,
	// this ensures the rendering class is removed after 5 seconds, so content is visible and accessible
	setTimeout( hideRenderingClass, 5000 );

	$.extend( $.mobile, {
		// find and enhance the pages in the dom and transition to the first page.
		initializePage: function() {
			// find present pages
			var path = $.mobile.path,
				$pages = $( ":jqmData(role='page'), :jqmData(role='dialog')" ),
				hash = path.stripHash( path.stripQueryParams(path.parseLocation().hash) ),
				hashPage = document.getElementById( hash );

			// if no pages are found, create one with body's inner html
			if ( !$pages.length ) {
				$pages = $( "body" ).wrapInner( "<div data-" + $.mobile.ns + "role='page'></div>" ).children( 0 );
			}

			// add dialogs, set data-url attrs
			$pages.each(function() {
				var $this = $( this );

				// unless the data url is already set set it to the pathname
				if ( !$this[ 0 ].getAttribute( "data-" + $.mobile.ns + "url" ) ) {
					$this.attr( "data-" + $.mobile.ns + "url", $this.attr( "id" ) || location.pathname + location.search );
				}
			});

			// define first page in dom case one backs out to the directory root (not always the first page visited, but defined as fallback)
			$.mobile.firstPage = $pages.first();

			// define page container
			$.mobile.pageContainer = $.mobile.firstPage
				.parent()
				.addClass( "ui-mobile-viewport" )
				.pagecontainer();

			// initialize navigation events now, after mobileinit has occurred and the page container
			// has been created but before the rest of the library is alerted to that fact
			$.mobile.navreadyDeferred.resolve();

			// alert listeners that the pagecontainer has been determined for binding
			// to events triggered on it
			$window.trigger( "pagecontainercreate" );

			// cue page loading message
			$.mobile.loading( "show" );

			//remove initial build class (only present on first pageshow)
			hideRenderingClass();

			// if hashchange listening is disabled, there's no hash deeplink,
			// the hash is not valid (contains more than one # or does not start with #)
			// or there is no page with that hash, change to the first page in the DOM
			// Remember, however, that the hash can also be a path!
			if ( ! ( $.mobile.hashListeningEnabled &&
				$.mobile.path.isHashValid( location.hash ) &&
				( $( hashPage ).is( ":jqmData(role='page')" ) ||
					$.mobile.path.isPath( hash ) ||
					hash === $.mobile.dialogHashKey ) ) ) {

				// Store the initial destination
				if ( $.mobile.path.isHashValid( location.hash ) ) {
					$.mobile.navigate.history.initialDst = hash.replace( "#", "" );
				}

				// make sure to set initial popstate state if it exists
				// so that navigation back to the initial page works properly
				if ( $.event.special.navigate.isPushStateEnabled() ) {
					$.mobile.navigate.navigator.squash( path.parseLocation().href );
				}

				$.mobile.changePage( $.mobile.firstPage, {
					transition: "none",
					reverse: true,
					changeHash: false,
					fromHashChange: true
				});
			} else {
				// trigger hashchange or navigate to squash and record the correct
				// history entry for an initial hash path
				if ( !$.event.special.navigate.isPushStateEnabled() ) {
					$window.trigger( "hashchange", [true] );
				} else {
					// TODO figure out how to simplify this interaction with the initial history entry
					// at the bottom js/navigate/navigate.js
					$.mobile.navigate.history.stack = [];
					$.mobile.navigate( $.mobile.path.isPath( location.hash ) ? location.hash : location.href );
				}
			}
		}
	});

	$(function() {
		//Run inlineSVG support test
		$.support.inlineSVG();

		// check which scrollTop value should be used by scrolling to 1 immediately at domready
		// then check what the scroll top is. Android will report 0... others 1
		// note that this initial scroll won't hide the address bar. It's just for the check.

		// hide iOS browser chrome on load if hideUrlBar is true this is to try and do it as soon as possible
		if ( $.mobile.hideUrlBar ) {
			window.scrollTo( 0, 1 );
		}

		// if defaultHomeScroll hasn't been set yet, see if scrollTop is 1
		// it should be 1 in most browsers, but android treats 1 as 0 (for hiding addr bar)
		// so if it's 1, use 0 from now on
		$.mobile.defaultHomeScroll = ( !$.support.scrollTop || $.mobile.window.scrollTop() === 1 ) ? 0 : 1;

		//dom-ready inits
		if ( $.mobile.autoInitializePage ) {
			$.mobile.initializePage();
		}

		// window load event
		// hide iOS browser chrome on load if hideUrlBar is true this is as fall back incase we were too early before
		if ( $.mobile.hideUrlBar ) {
			$window.load( $.mobile.silentScroll );
		}

		if ( !$.support.cssPointerEvents ) {
			// IE and Opera don't support CSS pointer-events: none that we use to disable link-based buttons
			// by adding the 'ui-disabled' class to them. Using a JavaScript workaround for those browser.
			// https://github.com/jquery/jquery-mobile/issues/3558

			// DEPRECATED as of 1.4.0 - remove ui-disabled after 1.4.0 release
			// only ui-state-disabled should be present thereafter
			$.mobile.document.delegate( ".ui-state-disabled,.ui-disabled", "vclick",
				function( e ) {
					e.preventDefault();
					e.stopImmediatePropagation();
				}
			);
		}
	});
}( jQuery, this ));


}));
