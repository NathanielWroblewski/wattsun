!function(t,i,s,e){"use strict";Foundation.libs.joyride={name:"joyride",version:"4.2.2",defaults:{expose:!1,modal:!1,tipLocation:"bottom",nubPosition:"auto",scrollSpeed:300,timer:0,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],exposed:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,cookieExpires:365,tipContainer:"body",postRideCallback:function(){},postStepCallback:function(){},preStepCallback:function(){},preRideCallback:function(){},postExposeCallback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',exposeCover:'<div class="joyride-expose-cover"></div>'},exposeAddClass:""},settings:{},init:function(i,s,e){return this.scope=i||this.scope,Foundation.inherit(this,"throttle data_options scrollTo scrollLeft delay"),"object"==typeof s?t.extend(!0,this.settings,this.defaults,s):t.extend(!0,this.settings,this.defaults,e),"string"!=typeof s?(this.settings.init||this.events(),this.settings.init):this[s].call(this,e)},events:function(){var s=this;t(this.scope).on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())}.bind(this)).on("click.joyride",".joyride-close-tip",function(t){t.preventDefault(),this.end()}.bind(this)),t(i).on("resize.fndtn.joyride",s.throttle(function(){if(t("[data-joyride]").length>0&&s.settings.$next_tip){if(s.settings.exposed.length>0){var i=t(s.settings.exposed);i.each(function(){var i=t(this);s.un_expose(i),s.expose(i)})}s.is_phone()?s.pos_phone():s.pos_default(!1,!0)}},100)),this.settings.init=!0},start:function(){var i=this,s=t(this.scope).find("[data-joyride]"),e=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],n=e.length;this.settings.init||this.init(),this.settings.$content_el=s,this.settings.$body=t(this.settings.tipContainer),this.settings.body_offset=t(this.settings.tipContainer).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},"function"!=typeof t.cookie&&(this.settings.cookieMonster=!1),(!this.settings.cookieMonster||this.settings.cookieMonster&&null===t.cookie(this.settings.cookieName))&&(this.settings.$tip_content.each(function(s){var o=t(this);t.extend(!0,i.settings,i.data_options(o));for(var h=n-1;h>=0;h--)i.settings[e[h]]=parseInt(i.settings[e[h]],10);i.create({$li:o,index:s})}),!this.settings.startTimerOnClick&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init"))},resume:function(){this.set_li(),this.show()},tip_template:function(i){var s,e;return i.tip_class=i.tip_class||"",s=t(this.settings.template.tip).addClass(i.tip_class),e=t.trim(t(i.li).html())+this.button_text(i.button_text)+this.settings.template.link+this.timer_instance(i.index),s.append(t(this.settings.template.wrapper)),s.first().attr("data-index",i.index),t(".joyride-content-wrapper",s).append(e),s[0]},timer_instance:function(i){var s;return s=0===i&&this.settings.startTimerOnClick&&this.settings.timer>0||0===this.settings.timer?"":this.outerHTML(t(this.settings.template.timer)[0])},button_text:function(i){return this.settings.nextButton?(i=t.trim(i)||"Next",i=this.outerHTML(t(this.settings.template.button).append(i)[0])):i="",i},create:function(i){var s=i.$li.attr("data-button")||i.$li.attr("data-text"),e=i.$li.attr("class"),n=t(this.tip_template({tip_class:e,index:i.index,button_text:s,li:i.$li}));t(this.settings.tipContainer).append(n)},show:function(i){var s=null;this.settings.$li===e||-1===t.inArray(this.settings.$li.index(),this.settings.pauseAfter)?(this.settings.paused?this.settings.paused=!1:this.set_li(i),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(i&&(this.settings.preRideCallback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.preStepCallback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tipSettings=t.extend(this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tipSettings.tipLocationPattern=this.settings.tipLocationPatterns[this.settings.tipSettings.tipLocation],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),s=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tipAnimation)?(s.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),this.delay(function(){s.animate({width:s.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tipAnimationFadeSpeed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tipAnimation)&&(s.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tipAnimationFadeSpeed).show(),this.delay(function(){s.animate({width:s.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tipAnimationFadeSpeed)):this.settings.$next_tip.fadeIn(this.settings.tipAnimationFadeSpeed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return Modernizr?Modernizr.mq("only screen and (max-width: 767px)")||t(".lt-ie9").length>0:this.settings.$window.width()<767},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||t(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(t.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.postStepCallback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(t){t?(this.settings.$li=this.settings.$tip_content.eq(this.settings.startOffset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=t(".joyride-tip-guide[data-index='"+this.settings.$li.index()+"']"),this.settings.$next_tip.data("closed","")},set_target:function(){var i=this.settings.$li.attr("data-class"),e=this.settings.$li.attr("data-id"),n=function(){return e?t(s.getElementById(e)):i?t("."+i).first():t("body")};this.settings.$target=n()},scroll_to:function(){var s,e;s=t(i).height()/2,e=Math.ceil(this.settings.$target.offset().top-s+this.outerHeight(this.settings.$next_tip)),e>0&&this.scrollTo(t("html, body"),e,this.settings.scrollSpeed)},paused:function(){return-1===t.inArray(this.settings.$li.index()+1,this.settings.pauseAfter)},restart:function(){this.hide(),this.settings.$li=e,this.show("init")},pos_default:function(s,e){var n=(Math.ceil(t(i).height()/2),this.settings.$next_tip.offset(),this.settings.$next_tip.find(".joyride-nub")),o=Math.ceil(this.outerWidth(n)/2),h=Math.ceil(this.outerHeight(n)/2),a=s||!1;if(a&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),"undefined"==typeof e&&(e=!1),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(n);else{if(this.bottom()){var r=this.settings.$target.offset().left;Foundation.rtl&&(r=this.settings.$target.offset().width-this.settings.$next_tip.width()+r),this.settings.$next_tip.css({top:this.settings.$target.offset().top+h+this.outerHeight(this.settings.$target),left:r}),this.nub_position(n,this.settings.tipSettings.nubPosition,"top")}else if(this.top()){var r=this.settings.$target.offset().left;Foundation.rtl&&(r=this.settings.$target.offset().width-this.settings.$next_tip.width()+r),this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.outerHeight(this.settings.$next_tip)-h,left:r}),this.nub_position(n,this.settings.tipSettings.nubPosition,"bottom")}else this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.outerWidth(this.settings.$target)+this.settings.$target.offset().left+o}),this.nub_position(n,this.settings.tipSettings.nubPosition,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.settings.$target.offset().left-this.outerWidth(this.settings.$next_tip)-o}),this.nub_position(n,this.settings.tipSettings.nubPosition,"right"));!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tipSettings.tipLocationPattern.length&&(n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tipSettings.tipLocation=this.settings.tipSettings.tipLocationPattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}a&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(i){var s=this.outerHeight(this.settings.$next_tip),e=(this.settings.$next_tip.offset(),this.outerHeight(this.settings.$target)),n=t(".joyride-nub",this.settings.$next_tip),o=Math.ceil(this.outerHeight(n)/2),h=i||!1;n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),h&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(n):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-s-o}),n.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+e+o}),n.addClass("top")),h&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(t){this.center(),t.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var i=t(".joyride-modal-bg");i.length<1&&t("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tipAnimation)?i.show():i.fadeIn(this.settings.tipAnimationFadeSpeed)}},expose:function(){var s,e,n,o,h,a="expose-"+Math.floor(1e4*Math.random());if(arguments.length>0&&arguments[0]instanceof t)n=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;n=this.settings.$target}return n.length<1?(i.console&&console.error("element not valid",n),!1):(s=t(this.settings.template.expose),this.settings.$body.append(s),s.css({top:n.offset().top,left:n.offset().left,width:this.outerWidth(n,!0),height:this.outerHeight(n,!0)}),e=t(this.settings.template.exposeCover),o={zIndex:n.css("z-index"),position:n.css("position")},h=null==n.attr("class")?"":n.attr("class"),n.css("z-index",parseInt(s.css("z-index"))+1),"static"==o.position&&n.css("position","relative"),n.data("expose-css",o),n.data("orig-class",h),n.attr("class",h+" "+this.settings.exposeAddClass),e.css({top:n.offset().top,left:n.offset().left,width:this.outerWidth(n,!0),height:this.outerHeight(n,!0)}),this.settings.$body.append(e),s.addClass(a),e.addClass(a),n.data("expose",a),this.settings.postExposeCallback(this.settings.$li.index(),this.settings.$next_tip,n),this.add_exposed(n),void 0)},un_expose:function(){var s,e,n,o,h,a=!1;if(arguments.length>0&&arguments[0]instanceof t)e=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;e=this.settings.$target}return e.length<1?(i.console&&console.error("element not valid",e),!1):(s=e.data("expose"),n=t("."+s),arguments.length>1&&(a=arguments[1]),a===!0?t(".joyride-expose-wrapper,.joyride-expose-cover").remove():n.remove(),o=e.data("expose-css"),"auto"==o.zIndex?e.css("z-index",""):e.css("z-index",o.zIndex),o.position!=e.css("position")&&("static"==o.position?e.css("position",""):e.css("position",o.position)),h=e.data("orig-class"),e.attr("class",h),e.removeData("orig-classes"),e.removeData("expose"),e.removeData("expose-z-index"),this.remove_exposed(e),void 0)},add_exposed:function(i){this.settings.exposed=this.settings.exposed||[],i instanceof t||"object"==typeof i?this.settings.exposed.push(i[0]):"string"==typeof i&&this.settings.exposed.push(i)},remove_exposed:function(i){var s,e;i instanceof t?s=i[0]:"string"==typeof i&&(s=i),this.settings.exposed=this.settings.exposed||[],e=this.settings.exposed.length;for(var n=0;e>n;n++)if(this.settings.exposed[n]==s)return this.settings.exposed.splice(n,1),void 0},center:function(){var s=t(i);return this.settings.$next_tip.css({top:(s.height()-this.outerHeight(this.settings.$next_tip))/2+s.scrollTop(),left:(s.width()-this.outerWidth(this.settings.$next_tip))/2+this.scrollLeft(s)}),!0},bottom:function(){return/bottom/i.test(this.settings.tipSettings.tipLocation)},top:function(){return/top/i.test(this.settings.tipSettings.tipLocation)},right:function(){return/right/i.test(this.settings.tipSettings.tipLocation)},left:function(){return/left/i.test(this.settings.tipSettings.tipLocation)},corners:function(s){var e=t(i),n=e.height()/2,o=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),h=e.width()+this.scrollLeft(e),a=e.height()+o,r=e.height()+e.scrollTop(),g=e.scrollTop();return g>o&&(g=0>o?0:o),a>r&&(r=a),[s.offset().top<g,h<s.offset().left+s.outerWidth(),r<s.offset().top+s.outerHeight(),this.scrollLeft(e)>s.offset().left]},visible:function(t){for(var i=t.length;i--;)if(t[i])return!1;return!0},nub_position:function(t,i,s){"auto"===i?t.addClass(s):t.addClass(i)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(){this.settings.cookieMonster&&t.cookie(this.settings.cookieName,"ridden",{expires:this.settings.cookieExpires,domain:this.settings.cookieDomain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.$next_tip.data("closed",!0),t(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),this.settings.postStepCallback(this.settings.$li.index(),this.settings.$current_tip),this.settings.postRideCallback(this.settings.$li.index(),this.settings.$current_tip),t(".joyride-tip-guide").remove()},outerHTML:function(t){return t.outerHTML||(new XMLSerializer).serializeToString(t)},off:function(){t(this.scope).off(".joyride"),t(i).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(Foundation.zj,this,this.document);