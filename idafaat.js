<!-- كود حماية المقالة عبر وضع رابط تلقائي للمقالة و المدونة أثناء النسخ -->
<b:if cond='data:blog.isMobileRequest == &quot;false&quot;'>
<script type='text/javascript'>
//<![CDATA[
!function(e,t){var n="getSelection",o="removeAllRanges",i="addRange",l="parentNode",a="firstChild",d="appendChild",r="removeChild",s="test",c="innerHTML";if(e[n]){var p,g,f,h,u,y;t.addEventListener("copy",function(C){for(g=C.target;3===g.nodeType;)g=g[l];if(h=t.createElement("div"),(p=e[n]())&&p.rangeCount&&(p=p.getRangeAt(0))&&(f=p.cloneRange(),p=p.cloneContents())){for(;u=p[a];)h[d](u);if(!/^(pre|code)$/i[s](g.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[s](g.className||"")){var v=e.location.href;h[c]+="<br><br>&copy; "+t.title+'<br> المصدر محمي بحقوق النشر لايمكنك نشره دون رابط : <a href="'+v+'">'+v+"</a>"}y=t.createRange(),t.body[d](h),y.selectNodeContents(h),p=e[n](),p[o](),p[i](y),setTimeout(function(){h[l][r](h),p[o](),p[i](f)})}},!1)}}(window,document);
//]]>
</script>
</b:if>
<!-- كود حماية المقالة عبر وضع رابط تلقائي للمقالة و المدونة أثناء النسخ -->


<!-- سكربت منع نسخ الصور -->
<b:if cond='data:blog.isMobileRequest == &quot;false&quot;'>
<script type='text/javascript'>
//<![CDATA[
function nocontext(e) {var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
if (clickedTag == "IMG") {alert(alertMsg);return false;}}
var alertMsg = "ممنوع نسخ الصور";document.oncontextmenu = nocontext;
//]]></script>
</b:if>
<!-- سكربت منع نسخ الصور -->


<!-- onesignal- الاشعارات  -->
<script async='async' src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'/>
<script>
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: &quot;6d6f073b-f18c-47a5-a9c1-d190e4fbc3d7&quot;,
    });
  });
</script>
<!-- onesignal- الاشعارات  -->


<!-- تسريع المدونة -->
<script type='text/javascript'>//<![CDATA[ /*! Lazy Load XT | (C)2014 RESS.io | MIT License * BLOGGER Implementation by Muntasir Minhaz //www.techinfoknow.com/2014/08/lazy-load-blogger.html */(function($,window,document,undefined){var lazyLoadXT='lazyLoadXT',dataLazied='lazied',load_error='load error',classLazyHidden='lazy-hidden',docElement=document.documentElement||document.body,forceLoad=(window.onscroll===undefined||!!window.operamini||!docElement.getBoundingClientRect),options={autoInit:true,selector:'img[data-src]',blankImage:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',throttle:99,forceLoad:forceLoad,loadEvent:'pageshow',updateEvent:'load orientationchange resize scroll touchmove focus',forceEvent:'',oninit:{removeClass:'lazy'},onshow:{addClass:classLazyHidden},onload:{removeClass:classLazyHidden,addClass:'lazy-loaded'},onerror:{removeClass:classLazyHidden},checkDuplicates:true},elementOptions={srcAttr:'data-src',edgeX:0,edgeY:0,visibleOnly:true},$window=$(window),$isFunction=$.isFunction,$extend=$.extend,$data=$.data||function(el,name){return $(el).data(name)},$contains=$.contains||function(parent,el){while(el=el.parentNode){if(el===parent){return true}}return false},elements=[],topLazy=0,waitingMode=0;$[lazyLoadXT]=$extend(options,elementOptions,$[lazyLoadXT]);function getOrDef(obj,prop){return obj[prop]===undefined?options[prop]:obj[prop]}function scrollTop(){var scroll=window.pageYOffset;return(scroll===undefined)?docElement.scrollTop:scroll}$.fn[lazyLoadXT]=function(overrides){overrides=overrides||{};var blankImage=getOrDef(overrides,'blankImage'),checkDuplicates=getOrDef(overrides,'checkDuplicates'),scrollContainer=getOrDef(overrides,'scrollContainer'),elementOptionsOverrides={},prop;$(scrollContainer).on('scroll',queueCheckLazyElements);for(prop in elementOptions){elementOptionsOverrides[prop]=getOrDef(overrides,prop)}return this.each(function(index,el){if(el===window){$(options.selector).lazyLoadXT(overrides)}else{if(checkDuplicates&&$data(el,dataLazied)){return}var $el=$(el).data(dataLazied,1);if(blankImage&&el.tagName==='IMG'&&!el.src){el.src=blankImage}$el[lazyLoadXT]=$extend({},elementOptionsOverrides);triggerEvent('init',$el);elements.push($el)}})};function triggerEvent(event,$el){var handler=options['on'+event];if(handler){if($isFunction(handler)){handler.call($el[0])}else{if(handler.addClass){$el.addClass(handler.addClass)}if(handler.removeClass){$el.removeClass(handler.removeClass)}}}$el.trigger('lazy'+event,[$el]);queueCheckLazyElements()}function triggerLoadOrError(e){triggerEvent(e.type,$(this).off(load_error,triggerLoadOrError))}function checkLazyElements(force){if(!elements.length){return}force=force||options.forceLoad;topLazy=Infinity;var viewportTop=scrollTop(),viewportHeight=window.innerHeight||docElement.clientHeight,viewportWidth=window.innerWidth||docElement.clientWidth,i,length;for(i=0,length=elements.length;i<length;i++){var $el=elements[i],el=$el[0],objData=$el[lazyLoadXT],removeNode=false,visible=force,topEdge;if(!$contains(docElement,el)){removeNode=true}else if(force||!objData.visibleOnly||el.offsetWidth||el.offsetHeight){if(!visible){var elPos=el.getBoundingClientRect(),edgeX=objData.edgeX,edgeY=objData.edgeY;topEdge=(elPos.top+viewportTop-edgeY)-viewportHeight;visible=(topEdge<=viewportTop&&elPos.bottom>-edgeY&&elPos.left<=viewportWidth+edgeX&&elPos.right>-edgeX)}if(visible){triggerEvent('show',$el);var srcAttr=objData.srcAttr,src=$isFunction(srcAttr)?srcAttr($el):el.getAttribute(srcAttr);if(src){$el.on(load_error,triggerLoadOrError);el.src=src}removeNode=true}else{if(topEdge<topLazy){topLazy=topEdge}}}if(removeNode){elements.splice(i--,1);length--}}if(!length){triggerEvent('complete',$(docElement))}}function timeoutLazyElements(){if(waitingMode>1){waitingMode=1;checkLazyElements();setTimeout(timeoutLazyElements,options.throttle)}else{waitingMode=0}}function queueCheckLazyElements(e){if(!elements.length){return}if(e&&e.type==='scroll'&&e.currentTarget===window){if(topLazy>=scrollTop()){return}}if(!waitingMode){setTimeout(timeoutLazyElements,0)}waitingMode=2}function initLazyElements(){$window.lazyLoadXT()}function forceLoadAll(){checkLazyElements(true)}$(document).ready(function(){triggerEvent('start',$window);$window.on(options.loadEvent,initLazyElements).on(options.updateEvent,queueCheckLazyElements).on(options.forceEvent,forceLoadAll);$(document).on(options.updateEvent,queueCheckLazyElements);if(options.autoInit){initLazyElements()}})})(window.jQuery||window.Zepto||window.$,window,document);(function($){var options=$.lazyLoadXT;options.selector+=',video,iframe[data-src]';options.videoPoster='data-poster';$(document).on('lazyshow','video',function(e,$el){var srcAttr=$el.lazyLoadXT.srcAttr,isFuncSrcAttr=$.isFunction(srcAttr);$el.attr('poster',$el.attr(options.videoPoster)).children('source,track').each(function(index,el){var $child=$(el);$child.attr('src',isFuncSrcAttr?srcAttr($child):$child.attr(srcAttr))});this.load()})})(window.jQuery||window.Zepto||window.$); //]]></script>
<!-- تسريع المدونة -->


<!-- طريقة تثبيت أداة معينة فى مدونات بلوجر -->
<b:if cond='data:blog.isMobileRequest == &quot;false&quot;'>
<script>
//<![CDATA[
bs_makeSticky("HTML4"); // enter your widget ID here
function bs_makeSticky(elem) {
    var bs_sticky = document.getElementById(elem);
    var scrollee = document.createElement("div");
    bs_sticky.parentNode.insertBefore(scrollee, bs_sticky);
    var width = bs_sticky.offsetWidth;
    var iniClass = bs_sticky.className + ' bs_sticky';
    window.addEventListener('scroll', bs_sticking, false);
    function bs_sticking() {
        var rect = scrollee.getBoundingClientRect();
        if (rect.top < 0) {
            bs_sticky.className = iniClass + ' bs_sticking';
            bs_sticky.style.width = width + "px";
        } else {
            bs_sticky.className = iniClass;
        }
    }
}
//]]>
</script>
<style>
.bs_sticking {background:#f2f2f2 !important; position:fixed !important; top:0; z-index:9999; box-shadow:0px 10px 4px -5px rgba(0,0,0,0.3); margin-top: 0; position:relative\9 !important;}
</style>
</b:if>
<!-- طريقة تثبيت أداة معينة فى مدونات بلوجر -->
