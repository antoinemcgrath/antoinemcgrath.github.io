webshims.register("form-validation",function(e,t,n,r,i,s){var o="webkitURL"in n,u=o&&Modernizr.formvalidation&&!t.bugs.bustedValidity,a=u&&parseFloat((navigator.userAgent.match(/Safari\/([\d\.]+)/)||["","999999"])[1],10),f="user-error",l="user-success",c={checkbox:1,radio:1},h=e([]),p=function(t){return(e.prop(t,"validity")||{valid:1}).valid},d=function(){return!e.prop(this,"form")},v=function(t){t=e(t);var n,i,s=h;return t[0].type=="radio"&&(i=t.prop("form"),n=t[0].name,n?i?s=e(i).jProp(n):s=e(r.getElementsByName(n)).filter(d):s=t,s=s.filter('[type="radio"]')),s},m=function(t,n){var r;return e.each(t,function(t,i){if(i)return r=t+e.prop(n,"validationMessage"),!1}),r},g=function(e){var t;try{t=r.activeElement.name===e}catch(n){}return t},y={radio:1,checkbox:1,"select-one":1,"select-multiple":1,file:1,date:1,month:1,week:1,text:1},b={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},w=function(n){var r,i,s,o;if(!n.target)return;r=e(n.target).getNativeElement()[0],s=e(r).getShadowElement();if(r.type=="submit"||!e.prop(r,"willValidate")||n.type=="change"&&!y[o=s.prop("type")])return;i=e.data(r,"webshimsswitchvalidityclass");var h=function(){o||(o=s.prop("type"));if(u&&(n.type=="change"||a<537.36)&&b[o]&&e(n.target).is(":focus")||n.type=="focusout"&&r.type=="radio"&&g(r.name))return;var i=e.prop(r,"validity"),h,p,d,y,w;t.refreshCustomValidityRules&&t.refreshCustomValidityRules(r),i.valid?s.hasClass(l)||(h=l,p=f,y="changedvaliditystate",d="changedvalid",c[r.type]&&r.checked&&v(r).not(r).removeClass(p).addClass(h).removeAttr("aria-invalid"),s.removeAttr("aria-invalid"),e.removeData(r,"webshimsinvalidcause")):(w=m(i,r),e.data(r,"webshimsinvalidcause")!=w&&(e.data(r,"webshimsinvalidcause",w),y="changedvaliditystate"),s.hasClass(f)||(h=f,p=l,c[r.type]&&!r.checked&&v(r).not(r).removeClass(p).addClass(h).attr("aria-invalid","true"),s.attr("aria-invalid","true"),d="changedinvalid")),h&&(s.addClass(h).removeClass(p),setTimeout(function(){e(r).trigger(d)},0)),y&&setTimeout(function(){e(r).trigger(y)},0),e.removeData(r,"webshimsswitchvalidityclass")};i&&clearTimeout(i),n.type=="refreshvalidityui"?h():e.data(r,"webshimsswitchvalidityclass",setTimeout(h,9))};e(r.body).on(s.validityUIEvents||"focusout change refreshvalidityui invalid",w).on("reset resetvalui",function(t){var n=e(t.target);t.type=="reset"&&(n=n.filter("form").jProp("elements")),n.filter(".user-error, .user-success").removeAttr("aria-invalid").removeClass("user-error").removeClass("user-success").getNativeElement().each(function(){e.removeData(this,"webshimsinvalidcause")}).trigger("resetvalidityui")});var E=function(){t.scrollRoot=o||r.compatMode=="BackCompat"?e(r.body):e(r.documentElement)},S=Modernizr.boxSizing||Modernizr["display-table"]||e.support.getSetAttribute?"minWidth":"width",x="transitionDelay"in r.documentElement.style;E(),t.ready("DOM",E),t.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),r.top-=i.top,r.left-=i.left,r},e.extend(t.wsPopover,{isInElement:function(t,n){return t==n||e.contains(t,n)},show:function(t){var i=e.Event("wspopoverbeforeshow");this.element.trigger(i);if(i.isDefaultPrevented()||this.isVisible)return;this.isVisible=!0,t=e(t||this.options.prepareFor).getNativeElement();var s=this,o=e(t).getShadowElement();this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(t,o),this.position(o),s.timers.show=setTimeout(function(){s.element.css("display",""),s.timers.show=setTimeout(function(){s.element.addClass("ws-po-visible").trigger("wspopovershow")},9)},9),this.element.on("remove",function(e){e.originalEvent||s.destroy()}),e(r).on("focusin"+this.eventns+" mousedown"+this.eventns,function(e){s.options.hideOnBlur&&!s.stopBlur&&!s.isInElement(s.lastElement[0]||r.body,e.target)&&!s.isInElement(t[0]||r.body,e.target)&&!s.isInElement(s.element[0],e.target)&&s.hide()}),e(n).on("resize"+this.eventns+" pospopover"+this.eventns,function(){clearTimeout(s.timers.repos),s.timers.repos=setTimeout(function(){s.position(o)},900)})},prepareFor:function(t,n){var r,i=e.extend({},this.options,e(t.prop("form")||[]).data("wspopover")||{},t.data("wspopover")),s=this,o={};this.lastElement=e(t).getShadowFocusElement();if(!this.prepared||!this.options.prepareFor)i.appendTo=="element"?this.element.insertAfter(t):this.element.appendTo(i.appendTo);this.element.attr({"data-class":t.prop("className"),"data-id":t.prop("id")}),o[S]=i.constrainWidth?n.outerWidth():"",this.element.css(o),i.hideOnBlur&&(r=function(e){s.stopBlur?e.stopImmediatePropagation():s.hide()},s.timers.bindBlur=setTimeout(function(){s.lastElement.off(s.eventns).on("focusout"+s.eventns+" blur"+s.eventns,r),s.lastElement.getNativeElement().off(s.eventns)},10)),!this.prepared&&e.fn.bgIframe&&this.element.bgIframe(),this.prepared=!0},clear:function(){e(n).off(this.eventns),e(r).off(this.eventns),this.element.off("transitionend"+this.eventns),this.stopBlur=!1,e.each(this.timers,function(e,t){clearTimeout(t)})},hide:function(){var t=e.Event("wspopoverbeforehide");this.element.trigger(t);if(t.isDefaultPrevented()||!this.isVisible)return;this.isVisible=!1;var r=this,i=function(t){if(!t||t.type!="transitionend"||!(t=t.originalEvent)||t.target!=r.element[0]||r.element.css("visibility")!="hidden")r.element.off("transitionend"+r.eventns).css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(r.timers.forcehide),e(n).off("resize"+r.eventns)};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),e(n).on("resize"+this.eventns,i),x&&this.element.off("transitionend"+this.eventns).on("transitionend"+this.eventns,i),r.timers.forcehide=setTimeout(i,x?600:40)},position:function(e){var n=t.getRelOffset(this.element.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0}).removeAttr("hidden"),e);n.top+=e.outerHeight(),this.element.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(n)}}),t.validityAlert=function(){var r=!1,i=t.objectCreate(t.wsPopover,{},s.messagePopover),o=i.hide.bind(i);return i.element.addClass("validity-alert").attr({role:"alert"}),e.extend(i,{hideDelay:5e3,showFor:function(t,n,r,i){t=e(t).getNativeElement(),this.clear(),this.hide(),i||(this.getMessage(t,n),this.show(t),this.hideDelay&&(this.timers.delayedHide=setTimeout(o,this.hideDelay))),r||this.setFocus(t)},setFocus:function(r){var i=e(r).getShadowFocusElement(),s=t.scrollRoot.scrollTop(),o=i.offset().top-30,u=function(){try{i[0].focus()}catch(t){}e(n).triggerHandler("pospopover"+this.eventns)};s>o?t.scrollRoot.animate({scrollTop:o-5},{queue:!1,duration:Math.max(Math.min(600,(s-o)*1.5),80),complete:u}):u()},getMessage:function(e,t){t||(t=e.getErrorMessage()),t?i.contentElement.text(t):this.hide()}}),i}();var T={slide:{show:"slideDown",hide:"slideUp"},fade:{show:"fadeIn",hide:"fadeOut"}};T[s.iVal.fx]||(s.iVal.fx="slide"),t.errorbox={create:function(t,n){n||(n=this.getFieldWrapper(t));var r=e("div.ws-errorbox",n);return r.length||(r=e('<div class="ws-errorbox" hidden="hidden">'),n.append(r)),n.data("errorbox",r),r},getFieldWrapper:function(n){var r;return s.iVal.fieldWrapper&&(r=typeof s.iVal.fieldWrapper=="function"?s.iVal.fieldWrapper.apply(this,arguments):e(n).parent().closest(s.iVal.fieldWrapper),r.length||(r=!1,t.error("could not find fieldwrapper: "+s.iVal.fieldWrapper))),r||(r=e(n).parent().closest(":not(span, label, em, strong, b, mark, p)")),r},get:function(t,n){n||(n=this.getFieldWrapper(t));var r=n.data("errorbox");return r?typeof r=="string"&&(r=e("#"+r),e.data(t,"errorbox",r)):r=this.create(t,n),r},addSuccess:function(t,n){var r=e.prop(t,"type"),i=function(){var i=c[r]?e.prop(t,"checked"):e(t).val();n[i?"addClass":"removeClass"]("ws-success")},s=y[r]?"change":"blur";e(t).off(".recheckvalid").on(s+".recheckinvalid",i),i()},hideError:function(t,n){var r=this.getFieldWrapper(t),i=r.data("errorbox");return i&&i.jquery&&(r.removeClass("ws-invalid"),i.message="",e(t).filter("input").off(".recheckinvalid"),i.slideUp(function(){e(this).attr({hidden:"hidden"})})),n||this.addSuccess(t,r),r},recheckInvalidInput:function(t){if(s.iVal.recheckDelay&&s.iVal.recheckDelay>90){var n,r=function(){w({type:"input",target:t})};e(t).filter('input:not([type="checkbox"], [type="radio"])').off(".recheckinvalid").on("input.recheckinvalid",function(){clearTimeout(n),n=setTimeout(r,s.iVal.recheckDelay)})}},showError:function(t,n){var r=this.getFieldWrapper(t),i=this.get(t,r);return i.message!=n&&(i.stop(!0,!0).html("<p>"+n+"</p>"),i.message=n,r.addClass("ws-invalid").removeClass("ws-success"),i.is("[hidden]")&&(this.recheckInvalidInput(t),i.css({display:"none"}).removeAttr("hidden")[T[s.iVal.fx].show]())),r.removeClass("ws-success"),e(t).off(".recheckvalid"),r},reset:function(e){this.hideError(e,!0).removeClass("ws-success")},toggle:function(t){var n=e(t).getErrorMessage();n?this.showError(t,n):this.hideError(t,n)}},e(r.body).on({changedvaliditystate:function(n){if(s.iVal.sel){var r=e(n.target).jProp("form");r.is(s.iVal.sel)&&t.errorbox.toggle(n.target)}},resetvalidityui:function(n){if(s.iVal.sel){var r=e(n.target).jProp("form");r.is(s.iVal.sel)&&t.errorbox.reset(n.target)}},firstinvalid:function(n){if(s.iVal.sel&&s.iVal.handleBubble){var r=e(n.target).jProp("form");r.is(s.iVal.sel)&&(n.preventDefault(),s.iVal.handleBubble!="none"&&t.validityAlert.showFor(n.target,!1,!1,s.iVal.handleBubble=="hide"))}},submit:function(t){if(s.iVal.sel&&e(t.target).is(s.iVal.sel)&&e.prop(t.target,"noValidate")&&!e(t.target).checkValidity())return!1}}),t.modules["form-core"].getGroupElements=v,u&&a<540&&function(){var t=/^(?:textarea|input)$/i,i=!1;r.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(i=e.target.form)&&setTimeout(function(){i=!1},1)},!1),e(n).on("invalid",function(e){e.originalEvent&&i&&i==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()});