__twttrll([7],{95:function(t,e,n){function r(t){return i.isType("string",t)}var i=n(11);t.exports=r},191:function(t,e){function n(t){return r.test(t)}var r=/^(dark|light)$/;t.exports=n},196:function(t,e,n){function r(t){t.selectors({fullTimestampToLocalize:".long-permalink time",relativeTimestampToLocalize:".permalink time"}),t.after("prepForInsertion",function(t){var e=o(this.el);e&&(this.select(t,"fullTimestampToLocalize").forEach(function(t){var n=t.getAttribute("datetime"),r=n&&e.localTimeStamp(n);r&&(t.innerHTML=r)}),this.select(t,"relativeTimestampToLocalize").forEach(function(t){var n=t.getAttribute("datetime"),r=n&&e.timeAgo(n);r&&(t.innerHTML=r)}))}),t.define("updateRelativeTimestamps",function(){var t=o(this.el);if(t){var e=this.select("relativeTimestampToLocalize").reduce(function(e,n){var r=n.getAttribute("datetime"),i=r&&t.timeAgo(r);return i&&e.push(function(){n.innerHTML=i}),e},[]);return i.all(e.map(a.write))}}),t.after("render",function(){var t=this;s.setInterval(function(){t.updateRelativeTimestamps()},d)})}var i=n(2),a=n(45),s=n(7),o=n(197),d=6e4;t.exports=r},197:function(t,e,n){function r(t){return new a(i.compact({months:(t.getAttribute("data-dt-months")||"").split("|"),phrases:{AM:t.getAttribute("data-dt-am"),PM:t.getAttribute("data-dt-pm"),now:t.getAttribute("data-dt-now"),s:t.getAttribute("data-dt-s"),m:t.getAttribute("data-dt-m"),h:t.getAttribute("data-dt-h"),second:t.getAttribute("data-dt-second"),seconds:t.getAttribute("data-dt-seconds"),minute:t.getAttribute("data-dt-minute"),minutes:t.getAttribute("data-dt-minutes"),hour:t.getAttribute("data-dt-hour"),hours:t.getAttribute("data-dt-hours")},formats:{full:t.getAttribute("data-dt-full"),abbr:t.getAttribute("data-dt-abbr"),shortdate:t.getAttribute("data-dt-short"),longdate:t.getAttribute("data-dt-long")}}))}var i=n(11),a=n(198);t.exports=r},198:function(t,e){function n(t){return t<10?"0"+t:t}function r(t){function e(t,e){return i&&i[t]&&(t=i[t]),t.replace(/%\{([\w_]+)\}/g,function(t,n){return void 0!==e[n]?e[n]:t})}var i=t&&t.phrases,a=t&&t.months||o,s=t&&t.formats||d;this.timeAgo=function(t){var n,i=r.parseDate(t),o=+new Date,d=o-i;return i?isNaN(d)||d<2*u?e("now"):d<c?(n=Math.floor(d/u),e(s.abbr,{number:n,symbol:e(f,{abbr:e("s"),expanded:e(n>1?"seconds":"second")})})):d<l?(n=Math.floor(d/c),e(s.abbr,{number:n,symbol:e(f,{abbr:e("m"),expanded:e(n>1?"minutes":"minute")})})):d<h?(n=Math.floor(d/l),e(s.abbr,{number:n,symbol:e(f,{abbr:e("h"),expanded:e(n>1?"hours":"hour")})})):d<365*h?e(s.shortdate,{day:i.getDate(),month:e(a[i.getMonth()])}):e(s.longdate,{day:i.getDate(),month:e(a[i.getMonth()]),year:i.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(t){var i=r.parseDate(t),o=i&&i.getHours();return i?e(s.full,{day:i.getDate(),month:e(a[i.getMonth()]),year:i.getFullYear(),hours24:n(o),hours12:o<13?o?o:"12":o-12,minutes:n(i.getMinutes()),seconds:n(i.getSeconds()),amPm:e(o<12?"AM":"PM")}):""}}var i=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,a=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,s=/^\d+$/,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},u=1e3,c=60*u,l=60*c,h=24*l,f='<abbr title="%{expanded}">%{abbr}</abbr>';r.parseDate=function(t){var e,n,r=t||"",d=r.toString();return!!(e=function(){var t;return s.test(d)?parseInt(d,10):(t=d.match(a))?Date.UTC(t[7],o.indexOf(t[1]),t[2],t[3],t[4],t[5]):(t=d.match(i))?Date.UTC(t[1],t[2]-1,t[3],t[4],t[5],t[6]):void 0}())&&(n=new Date(e),!isNaN(n.getTime())&&n)},t.exports=r},199:function(t,e,n){function r(t){t.selectors({followButton:".follow-button"}),t.define("handleFollowButtonClick",function(t,e){var n=a.intentForFollowURL(e.href),r=s.asBoolean(e.getAttribute("data-age-gate"));r||i.open(n,this.sandbox.sandboxEl,t)}),t.after("render",function(){this.on("click","followButton",function(t,e){this.handleFollowButtonClick(t,e)})})}var i=n(22),a=n(23),s=n(25);t.exports=r},200:function(t,e,n){function r(t){t.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),t.define("dismissNsfwWarning",function(t,e){var n=i.closest(this.selectors.mediaCard,e,this.el);n&&a.remove(n,"is-nsfw")}),t.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}var i=n(21),a=n(20);t.exports=r},201:function(t,e,n){function r(t){function e(t){var e=t.createElement("div");return e.className="MediaCard-mediaAsset",e}function n(t){return h.url(t,p)}t.params({lang:{required:!0,transform:c.matchLanguage,fallback:"en"}}),t.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",sourceIdInfo:".js-tweetIdInfo"}),t.define("replaceInterstitialWithMedia",function(t,e){return m.all([this.restoreLastMediaInterstitial(),l.write(function(){i=t,a=t.parentNode,t.parentNode.replaceChild(e,t)})])}),t.define("restoreLastMediaInterstitial",function(){var t;return i&&a?(t=a.firstElementChild,f.remove(t),l.write(function(){a.replaceChild(i,t)})):m.resolve()}),t.define("playWebVideoPlayerMediaAsset",function(t,e){var n=u.closest(this.selectors.sourceIdInfo,e,this.el),r=n.getAttribute("data-tweet-id"),i=f.insertForTweet;if(r||(r=n.getAttribute("data-event-id"),i=f.insertForEvent),!r)return m.reject(new Error("No source id found for player"));t.preventDefault();var a=this.selectOne(n,this.selectors.wvpInterstitial);return this.getConsent(n,a).then(function(){this.displayWebVideoPlayerMediaAsset(n,r,i)}.bind(this))}),t.define("displayWebVideoPlayerMediaAsset",function(t,n,r){var i=this.selectOne(t,this.selectors.mediaAsset),a=(this.scribeNamespace()||{}).page,s=(this.scribeData()||{}).widget_origin,o=this.params.lang,d=e(this.sandbox),u=this.sandbox.createElement("div"),c={widgetOrigin:s};return u.className="wvp-player-container",d.appendChild(u),this.replaceInterstitialWithMedia(i,d).then(function(){return r.call(this,d,n,a,o,c)}).then(function(t){t&&t.on("ready",t.play)})}),t.define("displayIframeMediaAsset",function(t,r){var i,a,d=u.closest(this.selectors.mediaAsset,r,this.el),c=u.closest(this.selectors.cardInterstitial,r,this.el),h=c.getAttribute("data-player-src"),f=c.getAttribute("data-player-width"),p=c.getAttribute("data-player-height"),g=c.getAttribute("data-player-title");return h?(t.preventDefault(),h=n(h),i=e(this.sandbox),a=o({src:h,allowfullscreen:"true",width:f,height:p,title:g||""}),a.className="FilledIframe",i.appendChild(a),this.replaceInterstitialWithMedia(d,i).then(function(){a.focus(),l.write(function(){s.add(i,b),s.add(a,b)})})):m.reject(new Error("No Player frame source"))}),t.after("render",function(){var t=this.selectOne(this.selectors.wvpInterstitial);t&&s.remove(t,"u-hidden"),this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})}var i,a,s=n(20),o=n(52),d=n(84),u=n(21),c=n(90),l=n(45),h=n(24),f=n(144),m=n(2),p={autoplay:"1"},b="js-forceRedraw";t.exports=d.couple(n(202),r)},202:function(t,e,n){function r(t){t.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),t.define("getConsent",function(t,e){var n=this.selectOne(t,this.selectors.interstitial);return n?l.shouldObtainCookieConsent().catch(function(){return c.resolve(!0)}).then(function(t){if(!t)return c.resolve();var r=new s,i=function(){this.handleCookieConsentClick(e,n),r.resolve()}.bind(this);return d.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(n,e),this.attachConsentListener(n,i)},this),r.promise}.bind(this)):c.resolve()}),t.define("attachConsentListener",function(t,e){var n=this.selectOne(t,this.selectors.cookieConsentButton);n&&n.addEventListener("click",e,{once:!0})}),t.define("showConsentInterstitial",function(t,e){i.remove(t,"u-hidden"),e&&i.add(e,"is-backgrounded")}),t.define("hideConsentInterstitial",function(t,e){i.add(t,"u-hidden"),e&&i.remove(e,"is-backgrounded")}),t.define("setCookieConsentCookie",function(){return a.request(o.cookieConsent()).catch(function(t){throw new Error("CORS request failed: "+t)})}),t.define("handleCookieConsentClick",function(t,e){return u.allSettled([d.write(this.hideConsentInterstitial.bind(this,e,t)),this.setCookieConsentCookie()])})}var i=n(20),a=n(203),s=n(1),o=n(132),d=n(45),u=n(42),c=n(2),l=n(204);t.exports=r},203:function(t,e,n){function r(t,e){e=h.aug({},m,e||{});var n=l.url(t,e.params),r=f.fetch;return r?r(n,e).then(function(t){if(e.isSuccess(t.status))return t.text().then(function(e){var n=t.headers.get("content-type");return e&&h.contains(n,p.JSON)?c.parse(e):e});throw new Error("Request failed with status: "+t.status)}):i(n,e)}function i(t,e){function n(){var t=i?c.contentType:c.getResponseHeader("content-type"),n=h.contains(t,p.JSON)?s(c.responseText):c.responseText;i||e.isSuccess(c.status)?r.resolve(n):r.reject(n)}var r=new o,i=u.ie9(),a=i?f.XDomainRequest:f.XMLHttpRequest;if(!a)return d.reject(b.NO_XHR);var c=new a;return c.onreadystatechange=function(){4===c.readyState&&n()},c.onload=n,c.onerror=function(){r.reject(b.REQUEST_FAILED)},c.onabort=function(){r.reject(b.REQUEST_ABORTED)},c.ontimeout=function(){r.reject(b.REQUEST_TIMED_OUT)},c.open(e.method,t),"include"===e.credentials&&(c.withCredentials=!0),c.setRequestHeader&&h.forIn(e.headers,function(t){c.setRequestHeader(t,e.headers[t])}),c.send(),r.promise}function a(t){return t>=200&&t<300}function s(t){return t?c.parse(t):t}var o=n(1),d=n(2),u=n(8),c=n(39),l=n(24),h=n(11),f=n(7),m={method:"GET",params:{},headers:{},credentials:"include",isSuccess:a},p={JSON:"application/json",TEXT:"text/plain"},b={NO_XHR:new Error("No suitable XHR implementation available."),REQUEST_FAILED:new Error("XHR request failed."),REQUEST_ABORTED:new Error("XHR request aborted."),REQUEST_TIMED_OUT:new Error("XHR request timed out.")};t.exports={request:r,mimeTypes:p,errors:b}},204:function(t,e,n){function r(t){return i().then(function(e){return e[t]})}var i=n(205);t.exports={shouldObtainCookieConsent:r.bind(null,"should_obtain_cookie_consent")}},205:function(t,e,n){var r=n(203),i=n(132);t.exports=r.request.bind(null,i.settings())},207:function(t,e,n){function r(t){for(var e="",n=Math.floor(t/h),r=n;r>0;r--)e+="w"+r*h+" ";return e}function i(t){t.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),t.define("scribeCardShown",function(t){var e=2;this.scribe({component:"card",action:"shown"},{items:[{card_name:t.getAttribute("data-card-name")}]},e)}),t.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),t.define("markCardElAsLoaded",function(t){function e(){r&&n.resizeSandboxDueToCardChange()}var n=this,r=!1;return this.select(t,"img").forEach(function(t){t.addEventListener("load",e,!1)}),this.scribeCardShown(t),s.write(function(){a.add(t,p)}).then(function(){r=!0,n.resizeSandboxDueToCardChange()})}),t.define("updateCardWidthConstraints",function(){var t=this;return u.all(this.select("prerenderedCard").map(function(e){var n=t.selectOne(e,"rootCardEl");return s.defer(function(){var t,i=0;d.ios()?(a.remove(e,b),i=o(e.parentElement).width,e.style.maxWidth=i+"px"):i=o(e.parentElement).width,t=r(i),n.setAttribute(f,t),a.add(e,b)}).then(function(){return t.resizeSandboxDueToCardChange()})}))}),t.define("setCardTheme",function(t){var e=this.selectOne(t,"rootCardEl");this.params.theme&&e.setAttribute(m,this.params.theme)}),t.after("prepForInsertion",function(t){var e=this,n=this.select(t,"prerenderedCard").reduce(function(t,e){var n=e.getAttribute("data-css");return n&&(t[n]=t[n]||[],t[n].push(e)),t},{});c.forIn(n,function(t,n){e.sandbox.prependStyleSheet(t).then(function(){n.forEach(function(t){e.setCardTheme(t),e.markCardElAsLoaded(t)})})})}),t.after("show",function(){var t;return d.anyIE()&&(t=this.selectOne("periscopeVideo"),t&&(t.style.display="none")),this.updateCardWidthConstraints()}),t.after("resize",function(){return this.updateCardWidthConstraints()})}var a=n(20),s=n(45),o=n(69),d=n(8),u=n(2),c=n(11),l=n(84),h=50,f="data-card-breakpoints",m="data-theme",p="is-loaded",b="is-constrainedByMaxWidth";t.exports=l.couple(n(98),i)},213:function(t,e){function n(t){return r.test(t)}var r=/^#(?:[a-f\d]{3}){1,2}$/i;t.exports=n},215:function(t,e,n){function r(t){return d.parseInt(t,16)}function i(t){return u.isType("string",t)?(t=t.replace(c,""),t+=3===t.length?t:""):null}function a(t,e){var n,a,s,o;if(t=i(t),e=e||0,t)return n=e<0?0:255,e=e<0?-Math.max(e,-1):Math.min(e,1),a=r(t.substring(0,2)),s=r(t.substring(2,4)),o=r(t.substring(4,6)),"#"+(16777216+65536*(Math.round((n-a)*e)+a)+256*(Math.round((n-s)*e)+s)+(Math.round((n-o)*e)+o)).toString(16).slice(1)}function s(t,e){return a(t,-e)}function o(t,e){return a(t,e)}var d=n(7),u=n(11),c=/^#/;t.exports={darken:s,lighten:o}},216:function(t,e,n){function r(t){t.after("render",function(){var t,e=this.sandbox.sandboxEl,n=e.tagName;if(a(e,"td "+n))return t=i.closest("td",e),this.sandbox.styleSelf({maxWidth:t.clientWidth+"px"})})}var i=n(21),a=n(79);t.exports=r},220:function(t,e,n){var r=n(84);t.exports=r.build([n(221),n(149),n(150),n(100),n(96),n(196),n(227),n(139),n(140),n(135),n(138),n(199),n(207),n(201),n(200),n(228),n(148),n(146),n(141),n(142),n(152),n(216)],{pageForAudienceImpression:"tweet",productName:"tweetembed",breakpoints:[350]})},221:function(t,e,n){function r(t){var e={item_ids:[],item_details:{}};return e.item_ids.push(t),e.item_details[t]={item_type:C.TWEET},e}function i(t,e){var n={item_ids:[],item_details:{},associations:{}};return n.item_ids.push(e),n.item_details[e]={item_type:C.TWEET},n.associations[w.CONVERSATION_ORIGIN]={association_id:t,association_type:C.TWEET},n}function a(t){t.params({tweetId:{required:!0,validate:m},lang:{required:!0,transform:p.matchLanguage,fallback:"en"},width:{required:!0,fallback:"500px",validate:f,transform:f},theme:{fallback:[h(d.val,d,"widgets:theme"),"light"],validate:b},hideCard:{fallback:!1,transform:u.asBoolean},hideThread:{fallback:!1,transform:u.asBoolean},partner:{fallback:h(d.val,d,"partner")}}),t.selectors({ancestorTweet:".EmbeddedTweet-ancestor .Tweet",subjectTweet:".EmbeddedTweet-tweet .Tweet"}),t.around("scribeNamespace",function(t){return c.aug(t(),{page:"tweet"})}),t.around("scribeData",function(t){return c.aug(t(),{message:this.params.partner})}),t.around("widgetDataAttributes",function(t){return c.aug({"tweet-id":this.params.tweetId},t())}),t.define("scribeImpressionForTweets",function(){var t=this.selectOne("subjectTweet"),e=this.selectOne("ancestorTweet"),n=t&&t.getAttribute("data-tweet-id"),a=e&&e.getAttribute("data-tweet-id");n&&this.scribe({section:"subject",component:"tweet",action:"results"},r(n)),n&&a&&this.scribe({section:"conversation",component:"tweet",action:"results"},i(n,a))}),t.override("hydrate",function(){function t(t){i.html=t}function e(t){return i.scribe({section:"subject",component:"rawembedcode",action:"no_result"},r(i.params.tweetId)),s.reject(t)}var n,i=this;return n={lang:this.params.lang,hideCard:this.params.hideCard,hideThread:this.params.hideThread},g(this.params.tweetId,n).then(t,e)}),t.override("render",function(){var t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.id=this.id,this.el.lang=this.params.lang,this.scribeImpressionForTweets(),v.insertForTweet(this.el,this.params.tweetId,this.scribeNamespace().page,this.params.lang,{widgetOrigin:this.scribeData().widget_origin}),s.all([this.sandbox.appendStyleSheet(o.tweet(this.params.lang,this.params.theme)),this.sandbox.styleSelf({maxWidth:x,width:this.params.width,minWidth:T,marginTop:A,marginBottom:A})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):s.reject(new Error("unable to render"))}),t.override("show",function(){var t=this.sandbox;return this.sandbox.makeVisible().then(function(){return t.matchHeightToContent()})}),t.last("resize",function(){return this.sandbox.matchHeightToContent()})}var s=n(2),o=n(89),d=n(37),u=n(25),c=n(11),l=n(84),h=n(13),f=n(133),m=n(95),p=n(90),b=n(191),g=n(222),v=n(144),w=n(226),C=n(102),T="220px",x="100%",A="10px";t.exports=l.couple(n(98),n(114),a)},222:function(t,e,n){function r(t,e,n){var r="";return e&&(r+="c"),n&&(r+="t"),r?t+"-"+r:t}function i(t,e){return e=e||{},t=r(t,e.hideCard,e.hideThread),o.fetch(t,e.lang)}var a=n(223),s=n(132),o=new a(s.tweetBatch());t.exports=i},226:function(t,e){t.exports={CONVERSATION_ORIGIN:4}},227:function(t,e,n){function r(t){return[u+"{color:"+t+";}",c+"{color:"+s.lighten(t,.2)+";}"].join("")}function i(t){t.params({linkColor:{fallback:d(a.val,a,"widgets:link-color"),validate:o}}),t.after("render",function(){this.params.linkColor&&this.sandbox.appendCss(r(this.params.linkColor))})}var a=n(37),s=n(215),o=n(213),d=n(13),u="a, a:visited",c="a:hover, a:focus, a:active";t.exports=i},228:function(t,e,n){function r(t){t.params({align:{required:!1},width:{required:!1},floatedWidth:{fallback:"350px",validate:i},centeredWidth:{fallback:"70%",validate:i}}),t.before("render",function(){var t,e,n,r,i=this.params.align;switch(i&&i.toLowerCase()){case"center":t=this.params.width||this.params.centeredWidth,e="auto",n="auto";break;case"left":t=this.params.width||this.params.floatedWidth,n="10px",r="left";break;case"right":t=this.params.width||this.params.floatedWidth,e="10px",r="right";break;default:return}return this.sandbox.styleSelf({width:t,marginLeft:e,marginRight:n,cssFloat:r})})}var i=n(95);t.exports=r},237:function(t,e,n){var r=n(84);t.exports=r.build([n(238),n(141),n(150),n(100),n(152),n(201)],{pageForAudienceImpression:"video"})},238:function(t,e,n){function r(t,e){var n={item_ids:[],item_details:{}};return n.item_ids.push(t),n.item_details[t]={item_type:e},n}function i(t){t.params({dataSource:{required:!0},lang:{required:!0,transform:d.matchLanguage,fallback:"en"},partner:{fallback:l(c.val,c,"partner")}}),t.around("scribeNamespace",function(t){return u.aug(t,{page:"video"})}),t.around("scribeData",function(t){return u.aug(t(),{message:this.params.partner})}),t.around("widgetDataAttributes",function(t){var e={};return e[this.params.dataSource.name+"-id"]=this.params.dataSource.identifier,u.aug(e,t())}),t.define("scribeImpression",function(){var t=this.params.dataSource;this.scribe({component:this.params.dataSource.name,action:"results"},r(t.identifier,t.scribeItemType))}),t.override("hydrate",function(){function t(t){n.html=t}function e(t){return n.scribe({component:"rawembedcode",action:"no_result"},r(n.params.dataSource.identifier,n.params.dataSource.scribeItemType)),a.reject(t)}var n=this;return this.params.dataSource.fetch().then(t,e)}),t.override("render",function(){var t,e,n,r=this;return this.el=this.sandbox.htmlToElement(this.html),this.scribeImpression(),this.el?(t=this.el.children[0],e=t&&t.getAttribute("data-width")||this.el.getAttribute("data-width"),n=t&&t.getAttribute("data-height")||this.el.getAttribute("data-height"),a.all([this.sandbox.setWrapperSize(e,n),this.sandbox.appendStyleSheet(s.video(this.params.lang))]).then(function(){return r.prepForInsertion(r.el),r.sandbox.injectWidgetEl(r.el)})):a.reject(new Error("unable to render"))}),t.override("show",function(){return this.sandbox.makeVisible()})}var a=n(2),s=n(89),o=n(84),d=n(90),u=n(11),c=n(37),l=n(13);t.exports=o.couple(n(98),n(114),i)}});