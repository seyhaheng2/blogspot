/* JS */ gapi.loaded_5(function(_){var window=this;
var Wg;var Tg;var Rg;var Qg;var Sg;_.Eg=function(a){return"rtl"==(0,_.ng)(a,"direction")};Sg={thin:2,medium:4,thick:6};Qg=function(a,c){if(/^\d+px?$/.test(c))return(0,window.parseInt)(c,10);var f=a.style.left,g=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;var h=a.style.pixelLeft;a.style.left=f;a.runtimeStyle.left=g;return h};Rg=function(a,c){if("none"==(0,_.mg)(a,c+"Style"))return 0;var f=(0,_.mg)(a,c+"Width");return f in Sg?Sg[f]:Qg(a,f)};
Tg=function(a,c){var f=(0,_.mg)(a,c);return f?Qg(a,f):0};_.Pg=function(a,c,f,g){this.top=a;this.right=c;this.bottom=f;this.left=g};_.k=_.Pg.prototype;_.k.clone=function(){return new _.Pg(this.top,this.right,this.bottom,this.left)};_.k.contains=function(a){return this&&a?"undefined"!=typeof _.Pg&&a instanceof _.Pg?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
_.k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};_.k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};_.k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
_.k.translate=(0,_.b)(5);_.Ug=function(a){if(_.W&&!(0,_.Te)(9)){var c=Rg(a,"borderLeft"),f=Rg(a,"borderRight"),g=Rg(a,"borderTop");a=Rg(a,"borderBottom");return new _.Pg(g,f,a,c)}c=(0,_.lg)(a,"borderLeftWidth");f=(0,_.lg)(a,"borderRightWidth");g=(0,_.lg)(a,"borderTopWidth");a=(0,_.lg)(a,"borderBottomWidth");return new _.Pg((0,window.parseFloat)(g),(0,window.parseFloat)(f),(0,window.parseFloat)(a),(0,window.parseFloat)(c))};
_.GG=function(a){if(_.W){var c=Tg(a,"paddingLeft"),f=Tg(a,"paddingRight"),g=Tg(a,"paddingTop");a=Tg(a,"paddingBottom");return new _.Pg(g,f,a,c)}c=(0,_.lg)(a,"paddingLeft");f=(0,_.lg)(a,"paddingRight");g=(0,_.lg)(a,"paddingTop");a=(0,_.lg)(a,"paddingBottom");return new _.Pg((0,window.parseFloat)(g),(0,window.parseFloat)(f),(0,window.parseFloat)(a),(0,window.parseFloat)(c))};
_.ug=function(a){if(1==a.nodeType)return(0,_.Kt)(a);var c=(0,_.vd)(a.Op),f=a;a.targetTouches?f=a.targetTouches[0]:c&&a.B.targetTouches&&(f=a.B.targetTouches[0]);return new _.X(f.clientX,f.clientY)};_.Ig=function(a,c,f,g){this.left=a;this.top=c;this.width=f;this.height=g};_.Ig.prototype.clone=function(){return new _.Ig(this.left,this.top,this.width,this.height)};_.Mh=function(a){return new _.Pg(a.top,a.left+a.width,a.top+a.height,a.left)};_.k=_.Ig.prototype;
_.k.contains=function(a){return"undefined"!=typeof _.Ig&&a instanceof _.Ig?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};_.k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_.k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_.k.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};_.k.translate=(0,_.b)(4);Wg=function(a,c){return new _.X(a.x-c.x,a.y-c.y)};_.Lg=function(a){var c=(0,_.sg)(a);a=(0,_.Nt)(a);return new _.Ig(c.x,c.y,a.width,a.height)};
_.Yg=function(a){for(var c=new _.Pg(0,window.Infinity,window.Infinity,0),f=(0,_.xf)(a),g=f.B.body,h=f.B.documentElement,l=(0,_.Kf)(f.B);a=(0,_.rg)(a);)if(!(_.W&&0==a.clientWidth||_.ef&&0==a.clientHeight&&a==g)&&a!=g&&a!=h&&"visible"!=(0,_.ng)(a,"overflow")){var n=(0,_.sg)(a),q;q=a;if(_.df&&!(0,_.sl)("1.9")){var t=(0,window.parseFloat)((0,_.lg)(q,"borderLeftWidth"));if((0,_.Eg)(q))var v=q.offsetWidth-q.clientWidth-t-(0,window.parseFloat)((0,_.lg)(q,"borderRightWidth")),t=t+v;q=new _.X(t,(0,window.parseFloat)((0,_.lg)(q,
"borderTopWidth")))}else q=new _.X(q.clientLeft,q.clientTop);n.x+=q.x;n.y+=q.y;c.top=Math.max(c.top,n.y);c.right=Math.min(c.right,n.x+a.clientWidth);c.bottom=Math.min(c.bottom,n.y+a.clientHeight);c.left=Math.max(c.left,n.x)}g=l.scrollLeft;l=l.scrollTop;c.left=Math.max(c.left,g);c.top=Math.max(c.top,l);f=(0,_.ig)(f.Aa());c.right=Math.min(c.right,g+f.width);c.bottom=Math.min(c.bottom,l+f.height);return 0<=c.top&&0<=c.left&&c.bottom>c.top&&c.right>c.left?c:null};
_.Zg=function(a,c,f){var g,h=_.df&&(_.$e||_.sk)&&(0,_.sl)("1.9");c instanceof _.X?(g=c.x,c=c.y):(g=c,c=f);a.style.left=(0,_.xg)(g,h);a.style.top=(0,_.xg)(c,h)};_.Nh=function(a,c,f){f||(a=a.parentNode);for(f=0;a;){if(c(a))return a;a=a.parentNode;f++}return null};_.IG=function(a,c,f){return Math.min(Math.max(a,c),f)};
_.bh=function(a,c,f,g,h,l,n,q,t){var v,w;if(v=f.offsetParent){var A="HTML"==v.tagName||"BODY"==v.tagName;A&&"static"==(0,_.og)(v)||(w=(0,_.sg)(v),A||(A=(A=(0,_.Eg)(v))&&_.df?-v.scrollLeft:!A||_.W&&(0,_.sl)("8")||"visible"==(0,_.ng)(v,"overflowX")?v.scrollLeft:v.scrollWidth-v.clientWidth-v.scrollLeft,w=Wg(w,new _.X(A,v.scrollTop))))}v=w||new _.X;w=(0,_.Lg)(a);if(A=(0,_.Yg)(a)){var F=new _.Ig(A.left,A.top,A.right-A.left,A.bottom-A.top),A=Math.max(w.left,F.left),z=Math.min(w.left+w.width,F.left+F.width);
if(A<=z){var I=Math.max(w.top,F.top),F=Math.min(w.top+w.height,F.top+F.height);I<=F&&(w.left=A,w.top=I,w.width=z-A,w.height=F-I)}}A=(0,_.xf)(a);I=(0,_.xf)(f);A.B!=I.B&&(z=A.B.body,I=(0,_.tg)(z,I.Aa()),I=Wg(I,(0,_.sg)(z)),_.W&&!(0,_.hg)(A)&&(I=Wg(I,(0,_.Hf)(A))),w.left+=I.x,w.top+=I.y);a=(0,_.JG)(a,c);c=new _.X(a&2?w.left+w.width:w.left,a&1?w.top+w.height:w.top);c=Wg(c,v);h&&(c.x+=(a&2?-1:1)*h.x,c.y+=(a&1?-1:1)*h.y);var E;if(n)if(t)E=t;else if(E=(0,_.Yg)(f))E.top-=v.y,E.right-=v.x,E.bottom-=v.y,E.left-=
v.x;t:{t=c.clone();h=0;a=(0,_.JG)(f,g);g=(0,_.Nt)(f);q=q?q.clone():g.clone();if(l||0!=a)a&2?t.x-=q.width+(l?l.right:0):l&&(t.x+=l.left),a&1?t.y-=q.height+(l?l.bottom:0):l&&(t.y+=l.top);if(n&&(E?(l=t,h=0,65==(n&65)&&(l.x<E.left||l.x>=E.right)&&(n&=-2),132==(n&132)&&(l.y<E.top||l.y>=E.bottom)&&(n&=-5),l.x<E.left&&n&1&&(l.x=E.left,h|=1),l.x<E.left&&l.x+q.width>E.right&&n&16&&(q.width=Math.max(q.width-(l.x+q.width-E.right),0),h|=4),l.x+q.width>E.right&&n&1&&(l.x=Math.max(E.right-q.width,E.left),h|=1),
n&2&&(h=h|(l.x<E.left?16:0)|(l.x+q.width>E.right?32:0)),l.y<E.top&&n&4&&(l.y=E.top,h|=2),l.y<=E.top&&l.y+q.height<E.bottom&&n&32&&(q.height=Math.max(q.height-(E.top-l.y),0),l.y=E.top,h|=8),l.y>=E.top&&l.y+q.height>E.bottom&&n&32&&(q.height=Math.max(q.height-(l.y+q.height-E.bottom),0),h|=8),l.y+q.height>E.bottom&&n&4&&(l.y=Math.max(E.bottom-q.height,E.top),h|=2),n&8&&(h=h|(l.y<E.top?64:0)|(l.y+q.height>E.bottom?128:0)),n=h):n=256,h=n,h&496)){f=h;break t}(0,_.Zg)(f,t);g==q||g&&q&&g.width==q.width&&
g.height==q.height||(l=(0,_.hg)((0,_.xf)((0,_.zf)(f))),!_.W||l&&(0,_.sl)("8")?(f=f.style,_.df?f.MozBoxSizing="border-box":_.ef?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(q.width,0)+"px",f.height=Math.max(q.height,0)+"px"):(n=f.style,l?(l=(0,_.GG)(f),f=(0,_.Ug)(f),n.pixelWidth=q.width-f.left-l.left-l.right-f.right,n.pixelHeight=q.height-f.top-l.top-l.bottom-f.bottom):(n.pixelWidth=q.width,n.pixelHeight=q.height)));f=h}return f}; _.JG=function(a,c){return(c&4&&(0,_.Eg)(a)?c^2:c)&-5};
_.Ep=function(){};_.Ep.prototype.Eb=function(){};
_.Rj=function(a,c){a.style.display=c?"":"none"};_.Ag=function(a,c){var f=a.style;"opacity"in f?f.opacity=c:"MozOpacity"in f?f.MozOpacity=c:"filter"in f&&(f.filter=""===c?"":"alpha(opacity="+100*c+")")};_.Op=function(a,c){c?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};_.ah=function(a,c){var f={},g;for(g in a)c.call(void 0,a[g],g,a)&&(f[g]=a[g]);return f};

_.JH=function(){var a=window,c=a.document,f=0;if(c){var f=c.body,g=c.documentElement;if(!f&&!g)return 0;a=(0,_.Ct)(a).height;if((0,_.Lf)(c)&&g.scrollHeight)f=g.scrollHeight!=a?g.scrollHeight:g.offsetHeight;else{var c=g.scrollHeight,h=g.offsetHeight;g.clientHeight!=h&&(c=f.scrollHeight,h=f.offsetHeight);f=c>a?c>h?c:h:c<h?c:h}}return f};_.Oh=function(a){this.wb=a;this.B=a.va()};_.Oh.prototype.eb=function(){Ph(this)};_.Oh.prototype.onBeforeParentOpen=_.Oh.prototype.eb;
var Ph=function(a){var c=a.wb.ci();if(a.B.anchorBox&&c&&c.rb())c=(0,_.sg)(c.rb()),a.B.anchorBox.left+=c.x,a.B.anchorBox.top+=c.y;else{c=a.B.anchor;if("_default"!=c&&"_iframe"!=c){var f=(0,_.kg)(c);if(f)a.B.anchorBox=(0,_.Lg)(f);else{(0,_.sa)("Anchor not found in DOM: "+c+'. Falling back to "_default".');a.B.anchor="_default";return}}"_iframe"==c&&(c=(0,_.ig)(),a.B.anchorBox=new _.Ig(0,0,c.width,c.height))}a.B.anchor=""};
_.Qh=function(a){_.Oh.call(this,a)};(0,_.J)(_.Qh,_.Oh);_.Qh.prototype.open=function(){var a=this.B,c=window.document.createElement("ins");window.document.getElementById(a.container).appendChild(c);c.style.display="block";(0,_.Mg)(c,a.containerCss);this.wb.qc(c);this.wb.Pa(c)};_.Qh.prototype.Oe=function(){window.document.getElementById(this.wb.id).style.height=this.wb.height+"px"};_.Qh.prototype.close=function(){(0,_.Tf)(this.wb.V());(0,_.Tf)(this.ye);this.ye=null};
_.LH=function(a){if(a.ye)return a.ye;var c=a.B;!c.anchorBox&&c.anchor&&Ph(a);var f=a.wb.ci();if("_default"==c.anchor&&f){var g=(0,_.Lg)((0,_.kg)(f.V()));c.anchorBox=g}if(!c.anchorBox)return(0,_.sa)("No anchor box defined."),null;c=new _.X(c.anchorBox.left,c.anchorBox.top);f&&(f=(0,_.tg)(f.rb(),window),a.zt=new _.X,a.zt.x=f.x,a.zt.y=f.y,c.x+=f.x,c.y+=f.y,(0,_.Sh)(c));a.te=c;f=(0,_.KH)(a,!0);a.ye=window.document.createElement("ins");a.ye.style.cssText=f;window.document.body.appendChild(a.ye);return a.ye};
_.KH=function(a,c){var f=a.B;return"position: absolute !important;background-color: transparent !important;left: "+a.te.x+"px !important;top: "+a.te.y+"px !important;width: "+f.anchorBox.width+"px !important;height: "+f.anchorBox.height+"px !important;z-index: -10000 !important;display: "+(c?"block":"none")+" !important;"};
_.Th=function(a,c){var f=0,g=0;if(c.pageX||c.pageY)f=c.pageX,g=c.pageY;else if(c.clientX||c.clientY){var f=c.target?c.target:c.srcElement,h;f.ownerDocument&&f.ownerDocument.parentWindow?h=f.ownerDocument.parentWindow:h=window;g=f=0;_.W?(f=h.document.documentElement.scrollLeft,g=h.document.documentElement.scrollTop):(f=h.pageXOffset,g=h.pageYOffset);f=c.clientX+f;g=c.clientY+g}h=new _.X(f,g);return(f=(0,_.Mh)((0,_.Lg)(a)))&&f.contains(h)};
_.Sh=function(a){var c=window,f=window.document.body,g=(0,_.sg)(f),c=f.currentStyle||c.getComputedStyle(f,"");c.position&&"static"!=c.position&&(a.x-=g.x,a.y-=g.y)};_.Uh=function(a){var c=a.wb.ci()&&a.wb.ci().V(),c=c&&c.style.zIndex?(0,window.parseInt)(c.style.zIndex,10)+1:0;return Math.min(2147483647,Math.max(2E9,a.B.zIndex||c))};
var Xh;var Wh;var Yh;Yh={"bottom-center":1,"bottom-end":7,"bottom-left":1,"bottom-right":3,"bottom-start":5,"left-bottom":1,"left-center":0,"left-top":0,"right-bottom":3,"right-center":2,"right-top":2,"top-center":0,"top-end":6,"top-left":0,"top-right":2,"top-start":4};Wh={"bottom-center":!0,"top-center":!0};Xh={"left-center":!0,"right-center":!0};
_.Vh=function(a,c,f,g,h){h=h||{x:0,y:0};if(Wh[c]){var l=(0,_.Nt)(a).width/2;h.x="top-right"==g||"bottom-right"==g?h.x+l:h.x-l}Wh[g]&&(l=(0,_.Nt)(f).width/2,h.x+=l);Xh[c]&&(l=(0,_.Nt)(a).height/2,h.y="right-bottom"==g||"left-bottom"==g?h.y+l:h.y-l);Xh[g]&&(h.y+=(0,_.Nt)(f).height/2);(0,_.bh)(f,Yh[g],a,Yh[c],new _.X(h.x,h.y));g=(0,_.Nh)(a,function(a){if(a==window.document)return!1;a=(0,_.og)(a);return!!a&&"static"!=a});f=c=0;g&&(f=(0,_.sg)(g),c=-f.x,f=-f.y);a=a.style;(0,window.parseInt)(a.left,10)< c&&(a.left=c+"px");(0,window.parseInt)(a.top,10)<f&&(a.top=f+"px")};
_.Zh=function(a){_.Oh.call(this,a.wb);this.qa=a;this.G=null};(0,_.J)(_.Zh,_.Qh);_.Zh.prototype.eb=function(){this.qa.eb()};_.Zh.prototype.onBeforeParentOpen=_.Zh.prototype.eb;_.Zh.prototype.open=function(){this.qa.open();if(this.B.closeClickDetection||this.B.hideClickDetection)this.G=(0,_.ph)(window.document,["click","touchstart"],(0,_.H)(this.ha,this),!1)};_.Zh.prototype.open=_.Zh.prototype.open;_.Zh.prototype.Oe=function(a){this.qa.Oe(a)};_.Zh.prototype.onready=_.Zh.prototype.Oe;
_.Zh.prototype.M=function(a){this.qa.onRenderStart&&this.qa.onRenderStart(a)};_.Zh.prototype.onRenderStart=_.Zh.prototype.M;_.Zh.prototype.close=function(){if(this.B.closeClickDetection||this.B.hideClickDetection)(0,_.Ch)(this.G),this.G=null;this.qa.close()};_.Zh.prototype.close=_.Zh.prototype.close;_.Zh.prototype.ha=function(a){(0,_.Th)(this.wb.V(),a)||(this.B.hideClickDetection&&this.qa.show?this.qa.show(!1):this.qa.close())};

_.Hk=function(a){_.Oh.call(this,a.wb);this.qa=a;this.G=null};(0,_.J)(_.Hk,_.Qh);_.Hk.prototype.open=function(){this.B.targetPos=this.B.targetPos||"top-start";this.B.anchorPos=this.B.anchorPos||"bottom-start";var a=(0,_.LH)(this),c=this.wb.V();c?(c.style.visibility="hidden",c.style.position="absolute",a.parentNode.appendChild(c)):this.qa.open()};_.Hk.prototype.open=_.Hk.prototype.open;
_.Hk.prototype.Oe=function(){if(this.B.closeClickDetection){var a=this,c=function(c){(0,_.Th)(a.wb.V(),c)||(a.wb.close(),a.G=null)};window.document.B?(window.document.B("click",c),this.G=function(){window.document.removeEventListener("click",c,!1)}):window.document.attachEvent&&(window.document.attachEvent("onclick",c),this.G=function(){window.document.detachEvent("onclick",c)})}var f=this.wb.V();window.document.getElementById(this.wb.id).style.height=this.wb.height+"px";var g=(0,_.LH)(this);g&&(0,_.Vh)(f,
this.B.targetPos,g,this.B.anchorPos,{x:this.B.leftOffset||0,y:this.B.topOffset||0});f.style.visibility="visible"};_.Hk.prototype.onready=_.Hk.prototype.Oe;_.Hk.prototype.close=function(){this.qa.close();this.G&&this.G()};_.Hk.prototype.close=_.Hk.prototype.close;
var aI;_.Ik=function(a){_.Oh.call(this,a)};(0,_.J)(_.Ik,_.Qh);aI=["transition","WebkitTransition","MozTransition","OTranstion","msTransition"];_.bI=function(a,c){a.G=window.document.createElement("div");var f={position:"absolute",top:"-10000px",zIndex:(0,_.Uh)(a)};a.B.width&&(f.width=a.B.width+"px");for(var g in f)a.G.style[g]=f[g];(c||window.document.body).appendChild(a.G)};_.Ik.prototype.open=function(a){this.wb.fg("updateContainer",(0,_.H)(this.ha,this));(0,_.bI)(this,a);this.wb.Pa(this.G);this.wb.qc(this.G)};
_.Ik.prototype.open=_.Ik.prototype.open;_.Ik.prototype.Oe=function(){var a=qw(this);if(a){var c=window.document.getElementById(this.wb.Hh());c.style.height=a.height+"px";c.style.width=a.width+"px";this.wb.width=a.width;this.wb.height=a.height;c.style.boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)"}};_.Ik.prototype.onready=_.Ik.prototype.Oe;_.Ik.prototype.close=function(){this.G.parentNode&&this.G.parentNode.removeChild(this.G)};_.Ik.prototype.close=_.Ik.prototype.close;
_.Ik.prototype.ha=function(a,c,f){var g=this.wb.V();g&&(a?(cI(this,c,f),g.style.opacity=0,g.style.display="",window.setTimeout((0,_.H)(function(){dI(g,!0);g.style.opacity=1},this),0)):(g.style.display="none",dI(g,!1),g.style.opacity=0))};
var dI=function(a,c){for(var f=0;f<aI.length;f++)a.style[aI[f]]=c?"opacity .13s linear":""},cI=function(a,c,f){var g=a.wb.ci();c+=10;f+=10;if(_.V.J&&(g&&(g=(0,_.tg)(g.V(),window),c+=g.x,f+=g.y),g=qw(a))){var h=(0,_.ig)(window),l=(0,_.Jf)(window.document);h.width&&(c=Math.min(c,h.width+l.x-g.width-8),f+g.height>h.height+l.y-8&&(f-=20+g.height,f=Math.max(f,Math.min(l.y+1,(0,_.JH)()-g.height))))}a=a.wb.V();a.style.left=c+"px";a.style.top=f+"px"},qw=function(a){return a.wb.width&&a.wb.height?{width:a.wb.width, height:a.wb.height}:(a=a.wb.rb())&&a.offsetWidth&&a.offsetHeight?{width:a.offsetWidth,height:a.offsetHeight}:null};
_.Jk=function(a){_.Oh.call(this,a)};(0,_.J)(_.Jk,_.Qh);_.Jk.prototype.ha=null;_.Jk.prototype.M=null;_.Jk.prototype.G=null;var Lk={end:"start",left:"right",right:"left",start:"end"},Mk={top:"bottom",bottom:"top"};_.Jk.prototype.open=function(){var a=window.document.createElement("div");(0,_.Mg)(a,{top:"-10000px",position:"absolute",zIndex:(0,_.Uh)(this)});(0,_.LH)(this).parentNode.appendChild(a);this.wb.qc(a);this.wb.Pa(a)};_.Jk.prototype.open=_.Jk.prototype.open;
_.Jk.prototype.Oe=function(){var a=window.document.getElementById(this.wb.id);a.style.height=this.wb.height+"px";a.style.width=this.wb.width+"px";a.style.boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)";var c=this.wb.V();c.style.lineHeight=0;var f=(0,_.LH)(this),g=this.B.targetPos||"top-start",h=this.B.anchorPos||"bottom-start",l=this.B.leftOffset||0,n=this.B.topOffset||0;(0,_.Vh)(c,g,f,h,{x:l,y:n});var q=(0,_.ig)(window),t=(0,_.Jf)(window.document),v=c.offsetLeft<t.x||c.offsetLeft+c.offsetWidth>q.width+
t.x,q=c.offsetTop<t.y||c.offsetTop+c.offsetHeight>q.height+t.y,g=Kk(g,v,q),h=Kk(h,v,q);(0,_.Vh)(c,g,f,h,{x:l*(v?-1:1),y:n*(q?-1:1)});c.style.visibility="visible";this.ha=(0,_.ph)(window.document,"mouseover",(0,_.H)(function(c){c.target===a&&this.G&&(window.clearTimeout(this.G),this.G=null)},this));this.M=(0,_.ph)(window.document,"mouseout",(0,_.H)(function(c){c.target===a&&(this.G=window.setTimeout((0,_.H)(this.wb.close,this.wb),1E3))},this))};_.Jk.prototype.onready=_.Jk.prototype.Oe;
var Kk=function(a,c,f){a=a.split("-");for(var g=0;2>g;g++)c&&Lk[a[g]]&&(a[g]=Lk[a[g]]),f&&Mk[a[g]]&&(a[g]=Mk[a[g]]);return a.join("-")};_.Jk.prototype.close=function(){this.ha&&((0,_.Ch)(this.ha),(0,_.Ch)(this.M),this.M=this.ha=null);this.G&&(window.clearTimeout(this.G),this.G=null);_.Jk.T.close.call(this)};_.Jk.prototype.close=_.Jk.prototype.close;

var Ju;var HC;var GC;for(_.FC=function(a){return{va:function(){return a},ci:function(){return a.openerIframe}}},GC=function(a){(new _.Oh((0,_.FC)(a))).eb()},HC="bubble circlepicker float hover hover-menu slide-menu".split(" "),Ju=0;Ju<HC.length;Ju++)_.eA[HC[Ju]]=GC;

_.hA.hover=function(a){var c=new _.Ik((0,_.FC)(a));(0,_.bI)(c,a.where);a.where=c.G;a.onClose=function(){c.close()};a.onRestyle=function(a){if(a.updateContainer){var g=a.updateContainer;c.ha(g.visible,g.x,g.y)}a.width&&(c.wb.width=a.width);a.height&&(c.wb.height=a.height)};a.onCreate=function(f){c.wb=f;f.ci=function(){return a.openerIframe};f.register("_ready",(0,_.H)(c.Oe,c),_.Vz);f.updateContainer=function(a,f,l){c.ha(a,f,l)}}};

var $k=function(a,c){this.B=a;this.Dc=c};$k.prototype.Ut=function(){this.B.oc(this.Dc)};_.bl=function(a){this.w=this.Ac=a;this.n=null;this.slf=0;this.ssh=!1;this.sen=!0;this.shl=this.itm=null};_.bl.prototype.sm=function(a,c){this.Ac.Pm(new $k(a,this));this.n=c};_.bl.prototype.sh=function(){this.Ac.show()};_.bl.prototype.hi=function(){this.Ac.Gl()};_.bl.prototype.cl=function(){this.Ac.close()};_.bl.prototype.en=function(){this.Ac.enable()};_.bl.prototype.di=function(){this.Ac.disable()};_.bl.prototype.hl=function(a){this.Ac.Nk(a)};_.bl.prototype.vr=function(a,c){this.Ac.Vk(a,c)};

_.Sm.qa("ytsubscribe",function(a,c){var f=_.Sm.G;f&&_.Sm.wc({role:"ytsubscribe",iframe:f,data:c},{role:"ytrelay",iframe:a})},void 0,_.Vz);
var al=function(a){a.B.os(a.Dc)},cl=function(a){this.Dc=a;this.$a=0;this.wf=!1;this.Ak=!0;this.ed=null};cl.prototype.hb=function(){return this.Dc};var dl=function(a){return 5==a.$a||4==a.$a};cl.prototype.isEnabled=function(){return this.Ak};cl.prototype.jn=function(a){this.Ak=a};
var el=function(a,c,f){this.B=a||{};this.G=c||0;this.M=f||0;a={};c=(0,_.H)(this.Lk,this);a.fc=c;c=(0,_.H)(this.Qg,this);a.rc=c;c=(0,_.H)(this.Zg,this);a.sc=c;c=(0,_.H)(this.fe,this);a.hc=c;c=(0,_.H)(this.Qd,this);a.cc=c;c=(0,_.H)(this.Cl,this);a.os=c;c=(0,_.H)(this.Bl,this);a.or=c;c=(0,_.H)(this.zl,this);a.oh=c;c=(0,_.H)(this.xl,this);a.oc=c;c=(0,_.H)(this.yl,this);a.oe=c;c=(0,_.H)(this.Al,this);a.oi=c;this.ha=a};_.k=el.prototype;
_.k.Qg=function(a,c,f){try{a=a+(null!=c?"_"+c:""),f.sm(this.ha,a),this.B[a]=new cl(f)}catch(g){return!1}return!0};_.k.Lk=function(a,c){var f=this.B[a+(null!=c?"_"+c:"")];return f?f.hb():null};_.k.Zg=function(a){var c=jl(this,a);if(c&&(2==c.$a||3==c.$a)&&c.isEnabled()&&!c.wf){try{a.sh()}catch(f){}c.wf=!0}};_.k.fe=function(a){var c=jl(this,a);if(c&&(2==c.$a||3==c.$a||dl(c))&&c.wf){try{a.hi()}catch(f){}c.wf=!1}};
_.k.Qd=function(a){var c=jl(this,a);if(c&&5!=c.$a){try{this.fe(a),a.cl()}catch(f){}il(this,c)}};_.k.Cl=function(a){(a=jl(this,a))&&0==a.$a&&(fl(this,a),a.$a=1)};var fl=function(a,c){if(a.G){var f=(0,window.setTimeout)((0,_.H)(function(){dl(c)||gl(this,c)},a),a.G);c.ed=f}else gl(a,c)},gl=function(a,c){var f=a.M-a.G;0<f&&(f=(0,window.setTimeout)((0,_.H)(function(){dl(c)||(c.$a=4,this.Qd(c.hb()))},a),f),c.ed=f)},hl=function(a){null!=a.ed&&((0,window.clearTimeout)(a.ed),a.ed=null)};_.k=el.prototype;
_.k.Bl=function(a){(a=jl(this,a))&&!dl(a)&&1==a.$a&&(hl(a),a.$a=3)};_.k.zl=function(a){(a=jl(this,a))&&!dl(a)&&(a.wf=!1)};_.k.xl=function(a){var c=jl(this,a);if(c&&!dl(c)){try{this.fe(a)}catch(f){}il(this,c)}};_.k.yl=function(a){(a=jl(this,a))&&!dl(a)&&(a.$a=4,this.Qd(a.hb()))};_.k.Al=function(a,c){var f=jl(this,a);f&&!dl(f)&&2<=c&&4>=c&&!dl(f)&&(hl(f),f.$a=2)};var il=function(a,c){hl(c);c.$a=5;var f=a.B,g;for(g in f)f[g]==c&&delete f[g]},jl=function(a,c){return a.B[c.n]},ll=function(){el.call(this)};
(0,_.J)(ll,el);var kl=function(a){this.B=a};_.k=kl.prototype;_.k.Qg=function(a,c,f){return this.B.rc(a,c,f)};_.k.Lk=function(a,c){return this.B.fc(a,c)};_.k.Zg=function(a){this.B.sc(a)};_.k.fe=function(a){this.B.hc(a)};_.k.Qd=function(a){this.B.cc(a)};_.k.Cl=function(a){this.B.os(a)};_.k.Bl=function(a,c){this.B.or(a,c)};_.k.zl=function(a){this.B.oh(a)};_.k.xl=function(a){this.B.oc(a)};_.k.yl=function(a,c,f,g,h,l){this.B.oe(a,c,f,g,h,l)};_.k.Al=function(a,c,f,g){this.B.oi(a,c,f,g)};
var nl=function(){return window.___jsl.man},ml=function(a){if(window.___jsl.man)a(window.___jsl.man);else{var c=function(){var c=new ll;window.___jsl.man=c;a(c)};if(window.gbar){var f=function(){if(window.gbar.wg){var f=new kl(window.gbar.wg);window.___jsl.man=f;a(f)}else c()};window.gbar.wg?f():window.gbar.qm(f)}else c()}};
var Fl=(0,_.uf)("contactid","cmp","email","hl","n","m","p","src","userid","sp","ytid");(0,_.uf)("hl","origin","ri","src","userid");var GN=(0,_.uf)("nm","s","pr","v");(0,_.sf)(GN,Fl);var Ll=/(?:^|\s)g-(?:hovercard|profile)(?:$|\s)/,Nl={loadHovercardDelay:250,loadDelay:150,hoverDelay:500,closeDelay:500},Jl=0,Hl=function(a){return window.document.body==a?"body":a.__cardid||null},Il=function(a){var c=Hl(a);c||(c=a.__cardid=Jl++);return c},Kl=function(a){var c=a.className||"getAttribute"in a&&a.getAttribute("class");return c&&Ll.test(c)||"getAttribute"in a&&a.getAttribute("oid")&&36==(0,_.P)("card/p")?!0:"G:HOVERCARD"==a.tagName.toUpperCase()},Ml=function(a,c){var f={};(0,_.sf)(f,
Nl,(0,_.P)("iframes/card")||{},(0,_.P)("card")||{});for(var g=[],h=a;h;h=h.parentNode){var l=Hl(h);l&&c[l]&&g.push(c[l])}(0,_.Be)(g.reverse(),function(a){(0,_.sf)(f,a)});g="G:HOVERCARD"==a.tagName.toUpperCase()?"":"data-";h=a.attributes;for(l=0;l<h.length;l++)(0,_.jd)(h[l].name,g)&&(f[h[l].name.substring(g.length)]=h[l].value);"getAttribute"in a&&a.getAttribute("oid")&&36==(0,_.P)("card/p")&&(f.ytid=a.getAttribute("oid"));!f.userid&&"A"==a.tagName.toUpperCase()&&a.pathname&&(g=a.pathname.match(/^\/?(\d+)$/), /\.google\.com$/.test(a.hostname)&&g&&(f.userid=g[1]));f.hl||(f.hl=(0,_.P)("lang")||_.R.dc().hl||void 0);f.m=f.entity;f.src=f.source;delete f.entity;delete f.source;return f},Ol=function(a,c){var f=c[a];(0,_.qe)(f)||(f=Nl[a]);return 0>f?0:f};
var Pl=function(a){this.G=a;this.Dc=new _.bl(this);this.ha=!1;this.M=0};_.k=Pl.prototype;_.k.hb=function(){return this.Dc};
_.k.load=function(a){al(this.Yf);a=(0,_.ah)(a,function(a,c){return Fl[c]&&null!=a});a.origin=window.location.protocol+"//"+window.location.host;var c=this,f=this.G,g={_event:function(a){if(!(a.timestamp<f.pa)){"sgcp_ams"==a.event?(f.Kh=!0,f.zt=!1):f.Kh&&"mouseover"==a.event?f.zt=!0:f.Kh&&"mouseout"==a.event?f.zt=!1:"sgcp_amh"==a.event&&(f.Kh=!1,f.zt||Vl(f));if("mouseover"==a.event||"sgcp_ams"==a.event)window.clearTimeout(f.qa),f.qa=null;if(a.cpid){for(var c=window.document.getElementById(a.cpid);c&&
"BODY"!=c.parentNode.tagName;)c=c.parentNode;f.Na=c}a.fromCard&&"mouseout"==a.event&&Vl(f)}},_ready:(0,_.H)(this.GE,this),version:function(a){HN(f,f.Ka,{type:"circles_changed",version:a.v})},loaded:function(a){a.ri==c.M&&c.qa()},rendered:function(){var a=c.G.wc,f=(0,_.Hf)((0,_.xf)((window||_.D||window).document));IN(c,!0,a.x+f.x,a.y+f.y);a=c.G;HN(a,a.Ka,{type:"show",frame:c.B})},renderfailed:function(){IN(c,!1,0,0)},disposed:function(){c.B.close()},cardAction:function(a){JN(f,a)}},h=":card";!(0,_.P)("iframes/card/url")&&
(0,_.P)("iframes/hovercard/url")&&(h=":hovercard");a=(0,_.IB)((0,_.DN)((0,_.CN)((0,_.AN)((0,_.BN)(new _.BB({disableMultiLevelParentRelay:!0,hover:!0}),g),_.Vz),a),"hover"),h);(0,_.P)("card/relayOpenTop")&&((0,_.Ko)(a,-1),(0,_.EN)(new _.FN(a.B),"_default"));_.Sm.open(a.value(),(0,_.H)(function(a){this.B=a},this))};_.k.GE=function(){this.ha=!0;var a=this.Yf;a.B.or(a.Dc,{});a=this.G;a.B&&a.Si(a.B)};_.k.Pm=function(a){this.Yf=a};_.k.Nk=function(a){this.B.send("getHealthc",void 0,a,_.Vz)};
_.k.Vk=function(a,c){this.B.send("getVarc",a,c,_.Vz)};var IN=function(a,c,f,g){a.B.updateContainer?a.B.updateContainer(c,f,g):a.B.sD({updateContainer:{visible:c,x:f,y:g}})};_.k=Pl.prototype;_.k.show=function(){IN(this,!0,0,-1E4);this.B.send("render",void 0,void 0,_.Vz)};_.k.Gl=function(){this.B.send("hide",void 0,void 0,_.Vz);IN(this,!1,0,0);var a=this.G;HN(a,a.Ka,{type:"hide"});a.Ka=null;a.fb=null};_.k.close=function(){this.B.send("dispose",void 0,void 0,_.Vz)};_.k.enable=function(){}; _.k.disable=function(){};
var Ql=function(){this.Kb=0;this.te=[];this.ye={};this.xu={};this.po={};this.pa=this.qa=this.G=this.Ld=this.fb=this.Ka=this.M=this.B=this.ha=null;this.wc={x:0,y:0};this.zt=this.Kh=!1;this.Na=null;this.Ei=new _.Pi;(0,_.fh)("gapi.load")("gapi.iframes.style.slide-menu")},Xl=0,LN=function(a,c,f,g){var h=Il(c),h=a.po[h]||(a.po[h]={});h[f]||(h[f]=g=(0,_.H)(g,a),c.addEventListener?c.addEventListener(f,g,"focus"==f||"blur"==f):("focus"==f?f="focusin":"blur"==f&&(f="focusout"),c.attachEvent("on"+f,g)))},MN=
function(a,c,f){(a=a.po[Il(c)])&&a[f]&&(c.addEventListener?c.removeEventListener(f,a[f],"focus"==f||"blur"==f):c.detachEvent("focus"==f?"onfocusin":"blur"==f?"onfocusout":"on"+f,a[f]),delete a[f])},NN=function(a,c){var f=a.po[c.id];if(f)for(var g in f)f.hasOwnProperty(g)&&MN(a,c,g)};
Ql.prototype.watch=function(a,c,f){if(a=a||window.document.body){this.Kb++;var g=Il(a);c&&(this.ye[g]=c);f&&(this.xu[g]=f);LN(this,a,"mouseover",this.Lp);LN(this,a,"mouseout",this.aA);LN(this,a,"mousedown",this.Gk);LN(this,a,"focus",this.Lp);LN(this,a,"blur",this.aA);LN(this,window.document.body,"mouseout",this.aA);LN(this,window.document.body,"mousedown",this.Gk)}else window.setTimeout((0,_.H)(this.watch,this),100)};
Ql.prototype.unwatch=function(a){if(a=a||window.document.body)if(Vl(this,0),a!=window.document.body?NN(this,a):MN(this,window.document.body,"mouseover"),a=Il(a),delete this.ye[a],delete this.xu[a],!(0<--this.Kb)){NN(this,window.document.body);var c=this.ha;this.ca();this.ha=null;window.setTimeout(function(){var a=nl();a&&a.Qd(c.hb())},100)}};Ql.prototype.ea=function(a){this.te.push(a)};Ql.prototype.Ub=function(a){(0,_.xe)(this.te,a)};
var HN=function(a,c,f){for(var g=[];c;){var h=Hl(c);h&&a.ye[h]&&g.push(a.ye[h]);c=c.parentNode}(0,_.Gl)(g,a.te);(0,_.Be)(g,function(a){a(f)})};_.k=Ql.prototype;
_.k.Lp=function(a){this.pa=(0,_.pa)();var c=a.target||a.srcElement;if(c&&"IFRAME"!=c.tagName){for(;c&&!Kl(c);)if(c=c.parentNode,1!=c.nodeType)return;if(c)if(this.Ka==c||this.B==c)this.qa&&(window.clearTimeout(this.qa),this.qa=null);else{this.B=c;LN(this,c,"mousemove",this.zJ);"focus"==a.type||"focusin"==a.type?(a=(0,_.ug)(c),this.wc.x=a.x,this.wc.y=a.y+c.offsetHeight):(this.wc.x=a.clientX,this.wc.y=a.clientY);this.Ld=(0,_.pa)();a=this.M=Ml(c,this.xu);var f=Ol("hoverDelay",a);this.ha?this.ha.ha&&(window.clearTimeout(this.G),
this.G=window.setTimeout((0,_.H)(this.Si,this,c),f-Ol("loadDelay",a))):(window.clearTimeout(this.G),this.G=window.setTimeout((0,_.H)(this.DK,this),f-Ol("loadHovercardDelay",a)))}}};_.k.aA=function(a){this.pa=(0,_.pa)();if("blur"!=a.type||a.target==this.Ka||a.target==this.B){if(a=a.relatedTarget||a.toElement){if("IFRAME"==a.tagName)return;if(this.Na)for(;a&&"BODY"!=a.tagName;){if(a==this.Na)return;a=a.parentNode}}Vl(this)}};_.k.Gk=function(){Vl(this,0)};
_.k.zJ=function(a){this.wc.x=a.clientX;this.wc.y=a.clientY};_.k.DK=function(){this.G&&(window.clearTimeout(this.G),this.G=null);if(this.B&&(HN(this,this.B,{type:"hover",config:this.M}),!this.ha)){var a=this.ha=new Pl(this);ml((0,_.H)(function(c){c.Qg("card",Xl++,a.hb())&&a.load(this.M)},this))}};
_.k.Si=function(a){this.G&&(window.clearTimeout(this.G),this.G=null);if(this.B==a){var c=Ol("hoverDelay",this.M)-Ol("loadDelay",this.M)-(0,_.pa)()+this.Ld;if(0<c)this.G=window.setTimeout((0,_.H)(this.Si,this,a),c);else{HN(this,a,{type:"hover",config:this.M});var c=this.ha,f=this.M;a=(0,_.H)(this.sF,this,a);c.ha&&(c.qa=a,f.ri=++c.M,c.B.send("loadData",f,void 0,_.Vz))}}};
_.k.sF=function(a){if(this.B===a&&this.ha&&this.ha.ha&&this.Ld){var c=Ol("hoverDelay",this.M)-(0,_.pa)()+this.Ld;0<c?window.setTimeout((0,_.H)(this.sF,this,a),c):(this.ca(),this.Ka=this.B,this.fb=this.M,MN(this,this.B,"mousemove"),this.Ld=this.M=this.B=null,nl().Zg(this.ha.hb()))}};var Vl=function(a,c){a.B&&MN(a,a.B,"mousemove");a.B=null;a.M=null;a.Ld=null;a.G&&(window.clearTimeout(a.G),a.G=null);!a.qa&&a.Ka&&(a.qa=window.setTimeout((0,_.H)(a.ca,a),(0,_.qe)(c)?c:Ol("closeDelay",a.fb)))};
Ql.prototype.ca=function(){this.qa&&(window.clearTimeout(this.qa),this.qa=null);this.Ka&&nl().fe(this.ha.hb())};var JN=function(a,c){HN(a,null,c);a.Za&&a.Za.send("cardAction",c,void 0,a.eb)};Ql.prototype.cz=function(a,c,f){var g={};g.frame=a;g.filter=c||_.Uz;g.Ga=f||_.gh;this.Ei.set((0,_.oe)(a),g);a.register("cardAction",(0,_.H)(function(a){JN(this,a);g.Ga(a)},this),g.filter)};
Ql.prototype.dz=function(a){this.eb=a||_.Uz;_.Sm.M((0,_.H)(function(a){this.Za=a;this.Za.register("cardAction",(0,_.H)(this.hu,this),this.eb)},this),void 0,this.eb)};Ql.prototype.hu=function(a){this.Ei.isEmpty()||(0,_.Be)(this.Ei.Va(),function(c){c.frame.send("cardAction",a,void 0,c.filter)});this.ha&&this.ha.B.send("cardAction",a,void 0,_.Vz)};
_.El=function(){var a={},c=new Ql;a.watch=function(a,g,h){c.watch(a,g,h)};a.unwatch=function(a){c.unwatch(a)};a.ea=function(a){c.ea(a)};a.Ub=function(a){c.Ub(a)};a.cz=function(a,g,h){c.cz(a,g,h)};a.dz=function(a){c.dz(a)};a.hu=function(a){c.hu(a)};a.S=function(a,c){c.origin=window.location.protocol+"//"+window.location.host;var h=_.Sm.cj({url:":card",where:window.document.getElementById(a),queryParams:c,messageHandlers:{_ready:function(){h.send("loadData",c,void 0,_.Vz)},loaded:function(){h.send("render", void 0,void 0,_.Vz)}},messageHandlersFilter:_.Vz})};return a}();
(0,_.Mu)("gapi.card.watch",_.El.watch);(0,_.Mu)("gapi.card.unwatch",_.El.unwatch);(0,_.Mu)("gapi.card.addCallback",_.El.ea);(0,_.Mu)("gapi.card.removeCallback",_.El.Ub);(0,_.Mu)("gapi.card.render",_.El.S);(0,_.Mu)("gapi.card.connectChild",_.El.cz);(0,_.Mu)("gapi.card.connectOpener",_.El.dz);(0,_.Mu)("gapi.card.broadcast",_.El.hu);

});
// Google Inc.