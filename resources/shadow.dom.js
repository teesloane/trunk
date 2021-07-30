var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.dom.dom.js");
require("./goog.dom.forms.js");
require("./goog.dom.classlist.js");
require("./goog.style.style.js");
require("./goog.style.transition.js");
require("./goog.string.string.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var renderer=$CLJS.renderer || ($CLJS.renderer = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$electron=$CLJS.module$shadow_js_shim_module$electron || ($CLJS.module$shadow_js_shim_module$electron = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var main=$CLJS.main || ($CLJS.main = {});
var module$shadow_js_shim_module$path=$CLJS.module$shadow_js_shim_module$path || ($CLJS.module$shadow_js_shim_module$path = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.dom.js");

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38604 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38604(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38605 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38605(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37739 = coll;
var G__37740 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37739,G__37740) : shadow.dom.lazy_native_coll_seq.call(null,G__37739,G__37740));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37749 = arguments.length;
switch (G__37749) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37755 = arguments.length;
switch (G__37755) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37760 = arguments.length;
switch (G__37760) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37762 = arguments.length;
switch (G__37762) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37768 = arguments.length;
switch (G__37768) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37785 = arguments.length;
switch (G__37785) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37798){if((e37798 instanceof Object)){
var e = e37798;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37798;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37808 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37809 = null;
var count__37810 = (0);
var i__37811 = (0);
while(true){
if((i__37811 < count__37810)){
var el = chunk__37809.cljs$core$IIndexed$_nth$arity$2(null,i__37811);
var handler_38612__$1 = ((function (seq__37808,chunk__37809,count__37810,i__37811,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37808,chunk__37809,count__37810,i__37811,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38612__$1);


var G__38613 = seq__37808;
var G__38614 = chunk__37809;
var G__38615 = count__37810;
var G__38616 = (i__37811 + (1));
seq__37808 = G__38613;
chunk__37809 = G__38614;
count__37810 = G__38615;
i__37811 = G__38616;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37808);
if(temp__5753__auto__){
var seq__37808__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37808__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37808__$1);
var G__38617 = cljs.core.chunk_rest(seq__37808__$1);
var G__38618 = c__4638__auto__;
var G__38619 = cljs.core.count(c__4638__auto__);
var G__38620 = (0);
seq__37808 = G__38617;
chunk__37809 = G__38618;
count__37810 = G__38619;
i__37811 = G__38620;
continue;
} else {
var el = cljs.core.first(seq__37808__$1);
var handler_38621__$1 = ((function (seq__37808,chunk__37809,count__37810,i__37811,el,seq__37808__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37808,chunk__37809,count__37810,i__37811,el,seq__37808__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38621__$1);


var G__38622 = cljs.core.next(seq__37808__$1);
var G__38623 = null;
var G__38624 = (0);
var G__38625 = (0);
seq__37808 = G__38622;
chunk__37809 = G__38623;
count__37810 = G__38624;
i__37811 = G__38625;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37838 = arguments.length;
switch (G__37838) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37859 = cljs.core.seq(events);
var chunk__37860 = null;
var count__37861 = (0);
var i__37862 = (0);
while(true){
if((i__37862 < count__37861)){
var vec__37877 = chunk__37860.cljs$core$IIndexed$_nth$arity$2(null,i__37862);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37877,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38627 = seq__37859;
var G__38628 = chunk__37860;
var G__38629 = count__37861;
var G__38630 = (i__37862 + (1));
seq__37859 = G__38627;
chunk__37860 = G__38628;
count__37861 = G__38629;
i__37862 = G__38630;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37859);
if(temp__5753__auto__){
var seq__37859__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37859__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37859__$1);
var G__38631 = cljs.core.chunk_rest(seq__37859__$1);
var G__38632 = c__4638__auto__;
var G__38633 = cljs.core.count(c__4638__auto__);
var G__38634 = (0);
seq__37859 = G__38631;
chunk__37860 = G__38632;
count__37861 = G__38633;
i__37862 = G__38634;
continue;
} else {
var vec__37880 = cljs.core.first(seq__37859__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37880,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38635 = cljs.core.next(seq__37859__$1);
var G__38636 = null;
var G__38637 = (0);
var G__38638 = (0);
seq__37859 = G__38635;
chunk__37860 = G__38636;
count__37861 = G__38637;
i__37862 = G__38638;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37886 = cljs.core.seq(styles);
var chunk__37887 = null;
var count__37888 = (0);
var i__37889 = (0);
while(true){
if((i__37889 < count__37888)){
var vec__37903 = chunk__37887.cljs$core$IIndexed$_nth$arity$2(null,i__37889);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38639 = seq__37886;
var G__38640 = chunk__37887;
var G__38641 = count__37888;
var G__38642 = (i__37889 + (1));
seq__37886 = G__38639;
chunk__37887 = G__38640;
count__37888 = G__38641;
i__37889 = G__38642;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37886);
if(temp__5753__auto__){
var seq__37886__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37886__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37886__$1);
var G__38644 = cljs.core.chunk_rest(seq__37886__$1);
var G__38645 = c__4638__auto__;
var G__38646 = cljs.core.count(c__4638__auto__);
var G__38647 = (0);
seq__37886 = G__38644;
chunk__37887 = G__38645;
count__37888 = G__38646;
i__37889 = G__38647;
continue;
} else {
var vec__37910 = cljs.core.first(seq__37886__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38649 = cljs.core.next(seq__37886__$1);
var G__38650 = null;
var G__38651 = (0);
var G__38652 = (0);
seq__37886 = G__38649;
chunk__37887 = G__38650;
count__37888 = G__38651;
i__37889 = G__38652;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37917_38653 = key;
var G__37917_38654__$1 = (((G__37917_38653 instanceof cljs.core.Keyword))?G__37917_38653.fqn:null);
switch (G__37917_38654__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38656 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_38656,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_38656,"aria-");
}
})())){
el.setAttribute(ks_38656,value);
} else {
(el[ks_38656] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37954){
var map__37955 = p__37954;
var map__37955__$1 = cljs.core.__destructure_map(map__37955);
var props = map__37955__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37956 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37956,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37960 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37960,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37960;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37963 = arguments.length;
switch (G__37963) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37980){
var vec__37981 = p__37980;
var seq__37982 = cljs.core.seq(vec__37981);
var first__37983 = cljs.core.first(seq__37982);
var seq__37982__$1 = cljs.core.next(seq__37982);
var nn = first__37983;
var first__37983__$1 = cljs.core.first(seq__37982__$1);
var seq__37982__$2 = cljs.core.next(seq__37982__$1);
var np = first__37983__$1;
var nc = seq__37982__$2;
var node = vec__37981;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37984 = nn;
var G__37985 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37984,G__37985) : create_fn.call(null,G__37984,G__37985));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37986 = nn;
var G__37987 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37986,G__37987) : create_fn.call(null,G__37986,G__37987));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37996 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(1),null);
var seq__37999_38659 = cljs.core.seq(node_children);
var chunk__38000_38660 = null;
var count__38001_38661 = (0);
var i__38002_38662 = (0);
while(true){
if((i__38002_38662 < count__38001_38661)){
var child_struct_38663 = chunk__38000_38660.cljs$core$IIndexed$_nth$arity$2(null,i__38002_38662);
var children_38664 = shadow.dom.dom_node(child_struct_38663);
if(cljs.core.seq_QMARK_(children_38664)){
var seq__38043_38665 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38664));
var chunk__38045_38666 = null;
var count__38046_38667 = (0);
var i__38047_38668 = (0);
while(true){
if((i__38047_38668 < count__38046_38667)){
var child_38670 = chunk__38045_38666.cljs$core$IIndexed$_nth$arity$2(null,i__38047_38668);
if(cljs.core.truth_(child_38670)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38670);


var G__38671 = seq__38043_38665;
var G__38672 = chunk__38045_38666;
var G__38673 = count__38046_38667;
var G__38674 = (i__38047_38668 + (1));
seq__38043_38665 = G__38671;
chunk__38045_38666 = G__38672;
count__38046_38667 = G__38673;
i__38047_38668 = G__38674;
continue;
} else {
var G__38675 = seq__38043_38665;
var G__38676 = chunk__38045_38666;
var G__38677 = count__38046_38667;
var G__38678 = (i__38047_38668 + (1));
seq__38043_38665 = G__38675;
chunk__38045_38666 = G__38676;
count__38046_38667 = G__38677;
i__38047_38668 = G__38678;
continue;
}
} else {
var temp__5753__auto___38679 = cljs.core.seq(seq__38043_38665);
if(temp__5753__auto___38679){
var seq__38043_38680__$1 = temp__5753__auto___38679;
if(cljs.core.chunked_seq_QMARK_(seq__38043_38680__$1)){
var c__4638__auto___38681 = cljs.core.chunk_first(seq__38043_38680__$1);
var G__38682 = cljs.core.chunk_rest(seq__38043_38680__$1);
var G__38683 = c__4638__auto___38681;
var G__38684 = cljs.core.count(c__4638__auto___38681);
var G__38685 = (0);
seq__38043_38665 = G__38682;
chunk__38045_38666 = G__38683;
count__38046_38667 = G__38684;
i__38047_38668 = G__38685;
continue;
} else {
var child_38686 = cljs.core.first(seq__38043_38680__$1);
if(cljs.core.truth_(child_38686)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38686);


var G__38687 = cljs.core.next(seq__38043_38680__$1);
var G__38688 = null;
var G__38689 = (0);
var G__38690 = (0);
seq__38043_38665 = G__38687;
chunk__38045_38666 = G__38688;
count__38046_38667 = G__38689;
i__38047_38668 = G__38690;
continue;
} else {
var G__38691 = cljs.core.next(seq__38043_38680__$1);
var G__38692 = null;
var G__38693 = (0);
var G__38694 = (0);
seq__38043_38665 = G__38691;
chunk__38045_38666 = G__38692;
count__38046_38667 = G__38693;
i__38047_38668 = G__38694;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38664);
}


var G__38696 = seq__37999_38659;
var G__38697 = chunk__38000_38660;
var G__38698 = count__38001_38661;
var G__38699 = (i__38002_38662 + (1));
seq__37999_38659 = G__38696;
chunk__38000_38660 = G__38697;
count__38001_38661 = G__38698;
i__38002_38662 = G__38699;
continue;
} else {
var temp__5753__auto___38700 = cljs.core.seq(seq__37999_38659);
if(temp__5753__auto___38700){
var seq__37999_38701__$1 = temp__5753__auto___38700;
if(cljs.core.chunked_seq_QMARK_(seq__37999_38701__$1)){
var c__4638__auto___38702 = cljs.core.chunk_first(seq__37999_38701__$1);
var G__38703 = cljs.core.chunk_rest(seq__37999_38701__$1);
var G__38704 = c__4638__auto___38702;
var G__38705 = cljs.core.count(c__4638__auto___38702);
var G__38706 = (0);
seq__37999_38659 = G__38703;
chunk__38000_38660 = G__38704;
count__38001_38661 = G__38705;
i__38002_38662 = G__38706;
continue;
} else {
var child_struct_38707 = cljs.core.first(seq__37999_38701__$1);
var children_38708 = shadow.dom.dom_node(child_struct_38707);
if(cljs.core.seq_QMARK_(children_38708)){
var seq__38055_38709 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38708));
var chunk__38057_38710 = null;
var count__38058_38711 = (0);
var i__38059_38712 = (0);
while(true){
if((i__38059_38712 < count__38058_38711)){
var child_38713 = chunk__38057_38710.cljs$core$IIndexed$_nth$arity$2(null,i__38059_38712);
if(cljs.core.truth_(child_38713)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38713);


var G__38714 = seq__38055_38709;
var G__38715 = chunk__38057_38710;
var G__38716 = count__38058_38711;
var G__38717 = (i__38059_38712 + (1));
seq__38055_38709 = G__38714;
chunk__38057_38710 = G__38715;
count__38058_38711 = G__38716;
i__38059_38712 = G__38717;
continue;
} else {
var G__38718 = seq__38055_38709;
var G__38719 = chunk__38057_38710;
var G__38720 = count__38058_38711;
var G__38721 = (i__38059_38712 + (1));
seq__38055_38709 = G__38718;
chunk__38057_38710 = G__38719;
count__38058_38711 = G__38720;
i__38059_38712 = G__38721;
continue;
}
} else {
var temp__5753__auto___38722__$1 = cljs.core.seq(seq__38055_38709);
if(temp__5753__auto___38722__$1){
var seq__38055_38723__$1 = temp__5753__auto___38722__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38055_38723__$1)){
var c__4638__auto___38724 = cljs.core.chunk_first(seq__38055_38723__$1);
var G__38725 = cljs.core.chunk_rest(seq__38055_38723__$1);
var G__38726 = c__4638__auto___38724;
var G__38727 = cljs.core.count(c__4638__auto___38724);
var G__38728 = (0);
seq__38055_38709 = G__38725;
chunk__38057_38710 = G__38726;
count__38058_38711 = G__38727;
i__38059_38712 = G__38728;
continue;
} else {
var child_38729 = cljs.core.first(seq__38055_38723__$1);
if(cljs.core.truth_(child_38729)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38729);


var G__38730 = cljs.core.next(seq__38055_38723__$1);
var G__38731 = null;
var G__38732 = (0);
var G__38733 = (0);
seq__38055_38709 = G__38730;
chunk__38057_38710 = G__38731;
count__38058_38711 = G__38732;
i__38059_38712 = G__38733;
continue;
} else {
var G__38734 = cljs.core.next(seq__38055_38723__$1);
var G__38735 = null;
var G__38736 = (0);
var G__38737 = (0);
seq__38055_38709 = G__38734;
chunk__38057_38710 = G__38735;
count__38058_38711 = G__38736;
i__38059_38712 = G__38737;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38708);
}


var G__38738 = cljs.core.next(seq__37999_38701__$1);
var G__38739 = null;
var G__38740 = (0);
var G__38741 = (0);
seq__37999_38659 = G__38738;
chunk__38000_38660 = G__38739;
count__38001_38661 = G__38740;
i__38002_38662 = G__38741;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38086 = cljs.core.seq(node);
var chunk__38087 = null;
var count__38088 = (0);
var i__38089 = (0);
while(true){
if((i__38089 < count__38088)){
var n = chunk__38087.cljs$core$IIndexed$_nth$arity$2(null,i__38089);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38743 = seq__38086;
var G__38744 = chunk__38087;
var G__38745 = count__38088;
var G__38746 = (i__38089 + (1));
seq__38086 = G__38743;
chunk__38087 = G__38744;
count__38088 = G__38745;
i__38089 = G__38746;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38086);
if(temp__5753__auto__){
var seq__38086__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38086__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38086__$1);
var G__38747 = cljs.core.chunk_rest(seq__38086__$1);
var G__38748 = c__4638__auto__;
var G__38749 = cljs.core.count(c__4638__auto__);
var G__38750 = (0);
seq__38086 = G__38747;
chunk__38087 = G__38748;
count__38088 = G__38749;
i__38089 = G__38750;
continue;
} else {
var n = cljs.core.first(seq__38086__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38751 = cljs.core.next(seq__38086__$1);
var G__38752 = null;
var G__38753 = (0);
var G__38754 = (0);
seq__38086 = G__38751;
chunk__38087 = G__38752;
count__38088 = G__38753;
i__38089 = G__38754;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38112 = arguments.length;
switch (G__38112) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38121 = arguments.length;
switch (G__38121) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38159 = arguments.length;
switch (G__38159) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38762 = arguments.length;
var i__4819__auto___38764 = (0);
while(true){
if((i__4819__auto___38764 < len__4818__auto___38762)){
args__4824__auto__.push((arguments[i__4819__auto___38764]));

var G__38765 = (i__4819__auto___38764 + (1));
i__4819__auto___38764 = G__38765;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38230_38766 = cljs.core.seq(nodes);
var chunk__38231_38767 = null;
var count__38232_38768 = (0);
var i__38233_38769 = (0);
while(true){
if((i__38233_38769 < count__38232_38768)){
var node_38771 = chunk__38231_38767.cljs$core$IIndexed$_nth$arity$2(null,i__38233_38769);
fragment.appendChild(shadow.dom._to_dom(node_38771));


var G__38772 = seq__38230_38766;
var G__38773 = chunk__38231_38767;
var G__38774 = count__38232_38768;
var G__38775 = (i__38233_38769 + (1));
seq__38230_38766 = G__38772;
chunk__38231_38767 = G__38773;
count__38232_38768 = G__38774;
i__38233_38769 = G__38775;
continue;
} else {
var temp__5753__auto___38776 = cljs.core.seq(seq__38230_38766);
if(temp__5753__auto___38776){
var seq__38230_38777__$1 = temp__5753__auto___38776;
if(cljs.core.chunked_seq_QMARK_(seq__38230_38777__$1)){
var c__4638__auto___38779 = cljs.core.chunk_first(seq__38230_38777__$1);
var G__38780 = cljs.core.chunk_rest(seq__38230_38777__$1);
var G__38781 = c__4638__auto___38779;
var G__38782 = cljs.core.count(c__4638__auto___38779);
var G__38783 = (0);
seq__38230_38766 = G__38780;
chunk__38231_38767 = G__38781;
count__38232_38768 = G__38782;
i__38233_38769 = G__38783;
continue;
} else {
var node_38784 = cljs.core.first(seq__38230_38777__$1);
fragment.appendChild(shadow.dom._to_dom(node_38784));


var G__38785 = cljs.core.next(seq__38230_38777__$1);
var G__38786 = null;
var G__38787 = (0);
var G__38788 = (0);
seq__38230_38766 = G__38785;
chunk__38231_38767 = G__38786;
count__38232_38768 = G__38787;
i__38233_38769 = G__38788;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38202){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38202));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38241_38790 = cljs.core.seq(scripts);
var chunk__38242_38791 = null;
var count__38243_38792 = (0);
var i__38244_38793 = (0);
while(true){
if((i__38244_38793 < count__38243_38792)){
var vec__38254_38794 = chunk__38242_38791.cljs$core$IIndexed$_nth$arity$2(null,i__38244_38793);
var script_tag_38795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38254_38794,(0),null);
var script_body_38796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38254_38794,(1),null);
eval(script_body_38796);


var G__38797 = seq__38241_38790;
var G__38798 = chunk__38242_38791;
var G__38799 = count__38243_38792;
var G__38800 = (i__38244_38793 + (1));
seq__38241_38790 = G__38797;
chunk__38242_38791 = G__38798;
count__38243_38792 = G__38799;
i__38244_38793 = G__38800;
continue;
} else {
var temp__5753__auto___38801 = cljs.core.seq(seq__38241_38790);
if(temp__5753__auto___38801){
var seq__38241_38802__$1 = temp__5753__auto___38801;
if(cljs.core.chunked_seq_QMARK_(seq__38241_38802__$1)){
var c__4638__auto___38803 = cljs.core.chunk_first(seq__38241_38802__$1);
var G__38804 = cljs.core.chunk_rest(seq__38241_38802__$1);
var G__38805 = c__4638__auto___38803;
var G__38806 = cljs.core.count(c__4638__auto___38803);
var G__38807 = (0);
seq__38241_38790 = G__38804;
chunk__38242_38791 = G__38805;
count__38243_38792 = G__38806;
i__38244_38793 = G__38807;
continue;
} else {
var vec__38261_38808 = cljs.core.first(seq__38241_38802__$1);
var script_tag_38809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38261_38808,(0),null);
var script_body_38810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38261_38808,(1),null);
eval(script_body_38810);


var G__38811 = cljs.core.next(seq__38241_38802__$1);
var G__38812 = null;
var G__38813 = (0);
var G__38814 = (0);
seq__38241_38790 = G__38811;
chunk__38242_38791 = G__38812;
count__38243_38792 = G__38813;
i__38244_38793 = G__38814;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38267){
var vec__38268 = p__38267;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38268,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38268,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38286 = arguments.length;
switch (G__38286) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38302 = cljs.core.seq(style_keys);
var chunk__38303 = null;
var count__38304 = (0);
var i__38305 = (0);
while(true){
if((i__38305 < count__38304)){
var it = chunk__38303.cljs$core$IIndexed$_nth$arity$2(null,i__38305);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38819 = seq__38302;
var G__38820 = chunk__38303;
var G__38821 = count__38304;
var G__38822 = (i__38305 + (1));
seq__38302 = G__38819;
chunk__38303 = G__38820;
count__38304 = G__38821;
i__38305 = G__38822;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38302);
if(temp__5753__auto__){
var seq__38302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38302__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38302__$1);
var G__38823 = cljs.core.chunk_rest(seq__38302__$1);
var G__38824 = c__4638__auto__;
var G__38825 = cljs.core.count(c__4638__auto__);
var G__38826 = (0);
seq__38302 = G__38823;
chunk__38303 = G__38824;
count__38304 = G__38825;
i__38305 = G__38826;
continue;
} else {
var it = cljs.core.first(seq__38302__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38827 = cljs.core.next(seq__38302__$1);
var G__38828 = null;
var G__38829 = (0);
var G__38830 = (0);
seq__38302 = G__38827;
chunk__38303 = G__38828;
count__38304 = G__38829;
i__38305 = G__38830;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38308,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38325 = k38308;
var G__38325__$1 = (((G__38325 instanceof cljs.core.Keyword))?G__38325.fqn:null);
switch (G__38325__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38308,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38330){
var vec__38332 = p__38330;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38332,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38307){
var self__ = this;
var G__38307__$1 = this;
return (new cljs.core.RecordIter((0),G__38307__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38309,other38310){
var self__ = this;
var this38309__$1 = this;
return (((!((other38310 == null)))) && ((((this38309__$1.constructor === other38310.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38309__$1.x,other38310.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38309__$1.y,other38310.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38309__$1.__extmap,other38310.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38308){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38350 = k38308;
var G__38350__$1 = (((G__38350 instanceof cljs.core.Keyword))?G__38350.fqn:null);
switch (G__38350__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38308);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38307){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38352 = cljs.core.keyword_identical_QMARK_;
var expr__38353 = k__4470__auto__;
if(cljs.core.truth_((pred__38352.cljs$core$IFn$_invoke$arity$2 ? pred__38352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38353) : pred__38352.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38353)))){
return (new shadow.dom.Coordinate(G__38307,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38352.cljs$core$IFn$_invoke$arity$2 ? pred__38352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38353) : pred__38352.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38353)))){
return (new shadow.dom.Coordinate(self__.x,G__38307,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38307),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38307){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38307,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38316){
var extmap__4501__auto__ = (function (){var G__38369 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38316,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38369);
} else {
return G__38369;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38316),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38316),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38381,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38391 = k38381;
var G__38391__$1 = (((G__38391 instanceof cljs.core.Keyword))?G__38391.fqn:null);
switch (G__38391__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38381,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38394){
var vec__38395 = p__38394;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38395,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38395,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38380){
var self__ = this;
var G__38380__$1 = this;
return (new cljs.core.RecordIter((0),G__38380__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38382,other38383){
var self__ = this;
var this38382__$1 = this;
return (((!((other38383 == null)))) && ((((this38382__$1.constructor === other38383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38382__$1.w,other38383.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38382__$1.h,other38383.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38382__$1.__extmap,other38383.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38381){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38409 = k38381;
var G__38409__$1 = (((G__38409 instanceof cljs.core.Keyword))?G__38409.fqn:null);
switch (G__38409__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38381);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38380){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38412 = cljs.core.keyword_identical_QMARK_;
var expr__38413 = k__4470__auto__;
if(cljs.core.truth_((pred__38412.cljs$core$IFn$_invoke$arity$2 ? pred__38412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38413) : pred__38412.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38413)))){
return (new shadow.dom.Size(G__38380,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38412.cljs$core$IFn$_invoke$arity$2 ? pred__38412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38413) : pred__38412.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38413)))){
return (new shadow.dom.Size(self__.w,G__38380,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38380),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38380){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38380,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38385){
var extmap__4501__auto__ = (function (){var G__38422 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38385,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38385)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38422);
} else {
return G__38422;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38385),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38385),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__38849 = (i + (1));
var G__38850 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38849;
ret = G__38850;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38427){
var vec__38428 = p__38427;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38428,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38432 = arguments.length;
switch (G__38432) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38852 = ps;
var G__38853 = (i + (1));
el__$1 = G__38852;
i = G__38853;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38460 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38460,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38460,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38460,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38464_38857 = cljs.core.seq(props);
var chunk__38465_38858 = null;
var count__38466_38859 = (0);
var i__38467_38860 = (0);
while(true){
if((i__38467_38860 < count__38466_38859)){
var vec__38489_38861 = chunk__38465_38858.cljs$core$IIndexed$_nth$arity$2(null,i__38467_38860);
var k_38862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38489_38861,(0),null);
var v_38863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38489_38861,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_38862);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38862),v_38863);


var G__38864 = seq__38464_38857;
var G__38865 = chunk__38465_38858;
var G__38866 = count__38466_38859;
var G__38867 = (i__38467_38860 + (1));
seq__38464_38857 = G__38864;
chunk__38465_38858 = G__38865;
count__38466_38859 = G__38866;
i__38467_38860 = G__38867;
continue;
} else {
var temp__5753__auto___38868 = cljs.core.seq(seq__38464_38857);
if(temp__5753__auto___38868){
var seq__38464_38869__$1 = temp__5753__auto___38868;
if(cljs.core.chunked_seq_QMARK_(seq__38464_38869__$1)){
var c__4638__auto___38870 = cljs.core.chunk_first(seq__38464_38869__$1);
var G__38871 = cljs.core.chunk_rest(seq__38464_38869__$1);
var G__38872 = c__4638__auto___38870;
var G__38873 = cljs.core.count(c__4638__auto___38870);
var G__38874 = (0);
seq__38464_38857 = G__38871;
chunk__38465_38858 = G__38872;
count__38466_38859 = G__38873;
i__38467_38860 = G__38874;
continue;
} else {
var vec__38495_38875 = cljs.core.first(seq__38464_38869__$1);
var k_38876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38495_38875,(0),null);
var v_38877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38495_38875,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_38876);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38876),v_38877);


var G__38878 = cljs.core.next(seq__38464_38869__$1);
var G__38879 = null;
var G__38880 = (0);
var G__38881 = (0);
seq__38464_38857 = G__38878;
chunk__38465_38858 = G__38879;
count__38466_38859 = G__38880;
i__38467_38860 = G__38881;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38508 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38508,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38508,(1),null);
var seq__38512_38882 = cljs.core.seq(node_children);
var chunk__38514_38883 = null;
var count__38515_38884 = (0);
var i__38516_38885 = (0);
while(true){
if((i__38516_38885 < count__38515_38884)){
var child_struct_38886 = chunk__38514_38883.cljs$core$IIndexed$_nth$arity$2(null,i__38516_38885);
if((!((child_struct_38886 == null)))){
if(typeof child_struct_38886 === 'string'){
var text_38887 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38887),child_struct_38886].join(''));
} else {
var children_38888 = shadow.dom.svg_node(child_struct_38886);
if(cljs.core.seq_QMARK_(children_38888)){
var seq__38560_38889 = cljs.core.seq(children_38888);
var chunk__38562_38890 = null;
var count__38563_38891 = (0);
var i__38564_38892 = (0);
while(true){
if((i__38564_38892 < count__38563_38891)){
var child_38893 = chunk__38562_38890.cljs$core$IIndexed$_nth$arity$2(null,i__38564_38892);
if(cljs.core.truth_(child_38893)){
node.appendChild(child_38893);


var G__38894 = seq__38560_38889;
var G__38895 = chunk__38562_38890;
var G__38896 = count__38563_38891;
var G__38897 = (i__38564_38892 + (1));
seq__38560_38889 = G__38894;
chunk__38562_38890 = G__38895;
count__38563_38891 = G__38896;
i__38564_38892 = G__38897;
continue;
} else {
var G__38898 = seq__38560_38889;
var G__38899 = chunk__38562_38890;
var G__38900 = count__38563_38891;
var G__38901 = (i__38564_38892 + (1));
seq__38560_38889 = G__38898;
chunk__38562_38890 = G__38899;
count__38563_38891 = G__38900;
i__38564_38892 = G__38901;
continue;
}
} else {
var temp__5753__auto___38902 = cljs.core.seq(seq__38560_38889);
if(temp__5753__auto___38902){
var seq__38560_38903__$1 = temp__5753__auto___38902;
if(cljs.core.chunked_seq_QMARK_(seq__38560_38903__$1)){
var c__4638__auto___38904 = cljs.core.chunk_first(seq__38560_38903__$1);
var G__38905 = cljs.core.chunk_rest(seq__38560_38903__$1);
var G__38906 = c__4638__auto___38904;
var G__38907 = cljs.core.count(c__4638__auto___38904);
var G__38908 = (0);
seq__38560_38889 = G__38905;
chunk__38562_38890 = G__38906;
count__38563_38891 = G__38907;
i__38564_38892 = G__38908;
continue;
} else {
var child_38909 = cljs.core.first(seq__38560_38903__$1);
if(cljs.core.truth_(child_38909)){
node.appendChild(child_38909);


var G__38910 = cljs.core.next(seq__38560_38903__$1);
var G__38911 = null;
var G__38912 = (0);
var G__38913 = (0);
seq__38560_38889 = G__38910;
chunk__38562_38890 = G__38911;
count__38563_38891 = G__38912;
i__38564_38892 = G__38913;
continue;
} else {
var G__38914 = cljs.core.next(seq__38560_38903__$1);
var G__38915 = null;
var G__38916 = (0);
var G__38917 = (0);
seq__38560_38889 = G__38914;
chunk__38562_38890 = G__38915;
count__38563_38891 = G__38916;
i__38564_38892 = G__38917;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38888);
}
}


var G__38918 = seq__38512_38882;
var G__38919 = chunk__38514_38883;
var G__38920 = count__38515_38884;
var G__38921 = (i__38516_38885 + (1));
seq__38512_38882 = G__38918;
chunk__38514_38883 = G__38919;
count__38515_38884 = G__38920;
i__38516_38885 = G__38921;
continue;
} else {
var G__38922 = seq__38512_38882;
var G__38923 = chunk__38514_38883;
var G__38924 = count__38515_38884;
var G__38925 = (i__38516_38885 + (1));
seq__38512_38882 = G__38922;
chunk__38514_38883 = G__38923;
count__38515_38884 = G__38924;
i__38516_38885 = G__38925;
continue;
}
} else {
var temp__5753__auto___38926 = cljs.core.seq(seq__38512_38882);
if(temp__5753__auto___38926){
var seq__38512_38927__$1 = temp__5753__auto___38926;
if(cljs.core.chunked_seq_QMARK_(seq__38512_38927__$1)){
var c__4638__auto___38928 = cljs.core.chunk_first(seq__38512_38927__$1);
var G__38929 = cljs.core.chunk_rest(seq__38512_38927__$1);
var G__38930 = c__4638__auto___38928;
var G__38931 = cljs.core.count(c__4638__auto___38928);
var G__38932 = (0);
seq__38512_38882 = G__38929;
chunk__38514_38883 = G__38930;
count__38515_38884 = G__38931;
i__38516_38885 = G__38932;
continue;
} else {
var child_struct_38933 = cljs.core.first(seq__38512_38927__$1);
if((!((child_struct_38933 == null)))){
if(typeof child_struct_38933 === 'string'){
var text_38934 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38934),child_struct_38933].join(''));
} else {
var children_38935 = shadow.dom.svg_node(child_struct_38933);
if(cljs.core.seq_QMARK_(children_38935)){
var seq__38582_38936 = cljs.core.seq(children_38935);
var chunk__38584_38937 = null;
var count__38585_38938 = (0);
var i__38586_38939 = (0);
while(true){
if((i__38586_38939 < count__38585_38938)){
var child_38940 = chunk__38584_38937.cljs$core$IIndexed$_nth$arity$2(null,i__38586_38939);
if(cljs.core.truth_(child_38940)){
node.appendChild(child_38940);


var G__38941 = seq__38582_38936;
var G__38942 = chunk__38584_38937;
var G__38943 = count__38585_38938;
var G__38944 = (i__38586_38939 + (1));
seq__38582_38936 = G__38941;
chunk__38584_38937 = G__38942;
count__38585_38938 = G__38943;
i__38586_38939 = G__38944;
continue;
} else {
var G__38945 = seq__38582_38936;
var G__38946 = chunk__38584_38937;
var G__38947 = count__38585_38938;
var G__38948 = (i__38586_38939 + (1));
seq__38582_38936 = G__38945;
chunk__38584_38937 = G__38946;
count__38585_38938 = G__38947;
i__38586_38939 = G__38948;
continue;
}
} else {
var temp__5753__auto___38949__$1 = cljs.core.seq(seq__38582_38936);
if(temp__5753__auto___38949__$1){
var seq__38582_38950__$1 = temp__5753__auto___38949__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38582_38950__$1)){
var c__4638__auto___38951 = cljs.core.chunk_first(seq__38582_38950__$1);
var G__38952 = cljs.core.chunk_rest(seq__38582_38950__$1);
var G__38953 = c__4638__auto___38951;
var G__38954 = cljs.core.count(c__4638__auto___38951);
var G__38955 = (0);
seq__38582_38936 = G__38952;
chunk__38584_38937 = G__38953;
count__38585_38938 = G__38954;
i__38586_38939 = G__38955;
continue;
} else {
var child_38958 = cljs.core.first(seq__38582_38950__$1);
if(cljs.core.truth_(child_38958)){
node.appendChild(child_38958);


var G__38959 = cljs.core.next(seq__38582_38950__$1);
var G__38960 = null;
var G__38961 = (0);
var G__38962 = (0);
seq__38582_38936 = G__38959;
chunk__38584_38937 = G__38960;
count__38585_38938 = G__38961;
i__38586_38939 = G__38962;
continue;
} else {
var G__38963 = cljs.core.next(seq__38582_38950__$1);
var G__38964 = null;
var G__38965 = (0);
var G__38966 = (0);
seq__38582_38936 = G__38963;
chunk__38584_38937 = G__38964;
count__38585_38938 = G__38965;
i__38586_38939 = G__38966;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38935);
}
}


var G__38967 = cljs.core.next(seq__38512_38927__$1);
var G__38968 = null;
var G__38969 = (0);
var G__38970 = (0);
seq__38512_38882 = G__38967;
chunk__38514_38883 = G__38968;
count__38515_38884 = G__38969;
i__38516_38885 = G__38970;
continue;
} else {
var G__38971 = cljs.core.next(seq__38512_38927__$1);
var G__38972 = null;
var G__38973 = (0);
var G__38974 = (0);
seq__38512_38882 = G__38971;
chunk__38514_38883 = G__38972;
count__38515_38884 = G__38973;
i__38516_38885 = G__38974;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38977 = arguments.length;
var i__4819__auto___38978 = (0);
while(true){
if((i__4819__auto___38978 < len__4818__auto___38977)){
args__4824__auto__.push((arguments[i__4819__auto___38978]));

var G__38979 = (i__4819__auto___38978 + (1));
i__4819__auto___38978 = G__38979;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38588){
var G__38589 = cljs.core.first(seq38588);
var seq38588__$1 = cljs.core.next(seq38588);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38589,seq38588__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38591 = arguments.length;
switch (G__38591) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__32782__auto___38985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_38596){
var state_val_38597 = (state_38596[(1)]);
if((state_val_38597 === (1))){
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38596__$1,(2),once_or_cleanup);
} else {
if((state_val_38597 === (2))){
var inst_38593 = (state_38596[(2)]);
var inst_38594 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38596__$1 = (function (){var statearr_38598 = state_38596;
(statearr_38598[(7)] = inst_38593);

return statearr_38598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38596__$1,inst_38594);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32713__auto__ = null;
var shadow$dom$state_machine__32713__auto____0 = (function (){
var statearr_38599 = [null,null,null,null,null,null,null,null];
(statearr_38599[(0)] = shadow$dom$state_machine__32713__auto__);

(statearr_38599[(1)] = (1));

return statearr_38599;
});
var shadow$dom$state_machine__32713__auto____1 = (function (state_38596){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_38596);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e38600){var ex__32716__auto__ = e38600;
var statearr_38601_38989 = state_38596;
(statearr_38601_38989[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_38596[(4)]))){
var statearr_38602_38990 = state_38596;
(statearr_38602_38990[(1)] = cljs.core.first((state_38596[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38991 = state_38596;
state_38596 = G__38991;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
shadow$dom$state_machine__32713__auto__ = function(state_38596){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32713__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32713__auto____1.call(this,state_38596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32713__auto____0;
shadow$dom$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32713__auto____1;
return shadow$dom$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_38603 = f__32783__auto__();
(statearr_38603[(6)] = c__32782__auto___38985);

return statearr_38603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "contains_QMARK_", { enumerable: false, get: function() { return shadow.dom.contains_QMARK_; } });
Object.defineProperty(module.exports, "eval_scripts", { enumerable: false, get: function() { return shadow.dom.eval_scripts; } });
Object.defineProperty(module.exports, "redirect", { enumerable: false, get: function() { return shadow.dom.redirect; } });
Object.defineProperty(module.exports, "native_coll", { enumerable: false, get: function() { return shadow.dom.native_coll; } });
Object.defineProperty(module.exports, "NativeColl", { enumerable: false, get: function() { return shadow.dom.NativeColl; } });
Object.defineProperty(module.exports, "query", { enumerable: false, get: function() { return shadow.dom.query; } });
Object.defineProperty(module.exports, "make_svg_node", { enumerable: false, get: function() { return shadow.dom.make_svg_node; } });
Object.defineProperty(module.exports, "str__GT_fragment", { enumerable: false, get: function() { return shadow.dom.str__GT_fragment; } });
Object.defineProperty(module.exports, "_to_svg", { enumerable: false, get: function() { return shadow.dom._to_svg; } });
Object.defineProperty(module.exports, "child_nodes", { enumerable: false, get: function() { return shadow.dom.child_nodes; } });
Object.defineProperty(module.exports, "insert_before", { enumerable: false, get: function() { return shadow.dom.insert_before; } });
Object.defineProperty(module.exports, "merge_class_string", { enumerable: false, get: function() { return shadow.dom.merge_class_string; } });
Object.defineProperty(module.exports, "has_class_QMARK_", { enumerable: false, get: function() { return shadow.dom.has_class_QMARK_; } });
Object.defineProperty(module.exports, "map__GT_Size", { enumerable: false, get: function() { return shadow.dom.map__GT_Size; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return shadow.dom.text; } });
Object.defineProperty(module.exports, "data", { enumerable: false, get: function() { return shadow.dom.data; } });
Object.defineProperty(module.exports, "transition_supported_QMARK_", { enumerable: false, get: function() { return shadow.dom.transition_supported_QMARK_; } });
Object.defineProperty(module.exports, "attr", { enumerable: false, get: function() { return shadow.dom.attr; } });
Object.defineProperty(module.exports, "remove_styles", { enumerable: false, get: function() { return shadow.dom.remove_styles; } });
Object.defineProperty(module.exports, "remove_event_handler", { enumerable: false, get: function() { return shadow.dom.remove_event_handler; } });
Object.defineProperty(module.exports, "remove_class", { enumerable: false, get: function() { return shadow.dom.remove_class; } });
Object.defineProperty(module.exports, "select_option_values", { enumerable: false, get: function() { return shadow.dom.select_option_values; } });
Object.defineProperty(module.exports, "insert_after", { enumerable: false, get: function() { return shadow.dom.insert_after; } });
Object.defineProperty(module.exports, "svg_node", { enumerable: false, get: function() { return shadow.dom.svg_node; } });
Object.defineProperty(module.exports, "children", { enumerable: false, get: function() { return shadow.dom.children; } });
Object.defineProperty(module.exports, "first_child", { enumerable: false, get: function() { return shadow.dom.first_child; } });
Object.defineProperty(module.exports, "get_html", { enumerable: false, get: function() { return shadow.dom.get_html; } });
Object.defineProperty(module.exports, "remove", { enumerable: false, get: function() { return shadow.dom.remove; } });
Object.defineProperty(module.exports, "__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.__GT_Coordinate; } });
Object.defineProperty(module.exports, "dom_listen_remove", { enumerable: false, get: function() { return shadow.dom.dom_listen_remove; } });
Object.defineProperty(module.exports, "by_id", { enumerable: false, get: function() { return shadow.dom.by_id; } });
Object.defineProperty(module.exports, "checked_QMARK_", { enumerable: false, get: function() { return shadow.dom.checked_QMARK_; } });
Object.defineProperty(module.exports, "tag_name", { enumerable: false, get: function() { return shadow.dom.tag_name; } });
Object.defineProperty(module.exports, "get_size", { enumerable: false, get: function() { return shadow.dom.get_size; } });
Object.defineProperty(module.exports, "dom_listen", { enumerable: false, get: function() { return shadow.dom.dom_listen; } });
Object.defineProperty(module.exports, "get_viewport_size", { enumerable: false, get: function() { return shadow.dom.get_viewport_size; } });
Object.defineProperty(module.exports, "add_event_listeners", { enumerable: false, get: function() { return shadow.dom.add_event_listeners; } });
Object.defineProperty(module.exports, "set_attr", { enumerable: false, get: function() { return shadow.dom.set_attr; } });
Object.defineProperty(module.exports, "reset", { enumerable: false, get: function() { return shadow.dom.reset; } });
Object.defineProperty(module.exports, "IElement", { enumerable: false, get: function() { return shadow.dom.IElement; } });
Object.defineProperty(module.exports, "make_dom_node", { enumerable: false, get: function() { return shadow.dom.make_dom_node; } });
Object.defineProperty(module.exports, "SVGElement", { enumerable: false, get: function() { return shadow.dom.SVGElement; } });
Object.defineProperty(module.exports, "form_elements", { enumerable: false, get: function() { return shadow.dom.form_elements; } });
Object.defineProperty(module.exports, "Size", { enumerable: false, get: function() { return shadow.dom.Size; } });
Object.defineProperty(module.exports, "lazy_native_coll_seq", { enumerable: false, get: function() { return shadow.dom.lazy_native_coll_seq; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: false, get: function() { return shadow.dom.get_parent; } });
Object.defineProperty(module.exports, "get_height", { enumerable: false, get: function() { return shadow.dom.get_height; } });
Object.defineProperty(module.exports, "event_chan", { enumerable: false, get: function() { return shadow.dom.event_chan; } });
Object.defineProperty(module.exports, "fragment", { enumerable: false, get: function() { return shadow.dom.fragment; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return shadow.dom.check; } });
Object.defineProperty(module.exports, "Coordinate", { enumerable: false, get: function() { return shadow.dom.Coordinate; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return shadow.dom.parse_tag; } });
Object.defineProperty(module.exports, "del_attr", { enumerable: false, get: function() { return shadow.dom.del_attr; } });
Object.defineProperty(module.exports, "reload_BANG_", { enumerable: false, get: function() { return shadow.dom.reload_BANG_; } });
Object.defineProperty(module.exports, "destructure_node", { enumerable: false, get: function() { return shadow.dom.destructure_node; } });
Object.defineProperty(module.exports, "remove_style", { enumerable: false, get: function() { return shadow.dom.remove_style; } });
Object.defineProperty(module.exports, "append", { enumerable: false, get: function() { return shadow.dom.append; } });
Object.defineProperty(module.exports, "px", { enumerable: false, get: function() { return shadow.dom.px; } });
Object.defineProperty(module.exports, "get_value", { enumerable: false, get: function() { return shadow.dom.get_value; } });
Object.defineProperty(module.exports, "ev_stop", { enumerable: false, get: function() { return shadow.dom.ev_stop; } });
Object.defineProperty(module.exports, "_to_dom", { enumerable: false, get: function() { return shadow.dom._to_dom; } });
Object.defineProperty(module.exports, "xmlns", { enumerable: false, get: function() { return shadow.dom.xmlns; } });
Object.defineProperty(module.exports, "matches", { enumerable: false, get: function() { return shadow.dom.matches; } });
Object.defineProperty(module.exports, "insert_first", { enumerable: false, get: function() { return shadow.dom.insert_first; } });
Object.defineProperty(module.exports, "map__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.map__GT_Coordinate; } });
Object.defineProperty(module.exports, "create_dom_node", { enumerable: false, get: function() { return shadow.dom.create_dom_node; } });
Object.defineProperty(module.exports, "__GT_NativeColl", { enumerable: false, get: function() { return shadow.dom.__GT_NativeColl; } });
Object.defineProperty(module.exports, "get_position", { enumerable: false, get: function() { return shadow.dom.get_position; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: false, get: function() { return shadow.dom.dom_node; } });
Object.defineProperty(module.exports, "set_data", { enumerable: false, get: function() { return shadow.dom.set_data; } });
Object.defineProperty(module.exports, "get_client_position", { enumerable: false, get: function() { return shadow.dom.get_client_position; } });
Object.defineProperty(module.exports, "get_page_offset", { enumerable: false, get: function() { return shadow.dom.get_page_offset; } });
Object.defineProperty(module.exports, "query_one", { enumerable: false, get: function() { return shadow.dom.query_one; } });
Object.defineProperty(module.exports, "get_next_sibling", { enumerable: false, get: function() { return shadow.dom.get_next_sibling; } });
Object.defineProperty(module.exports, "set_style", { enumerable: false, get: function() { return shadow.dom.set_style; } });
Object.defineProperty(module.exports, "pct", { enumerable: false, get: function() { return shadow.dom.pct; } });
Object.defineProperty(module.exports, "get_previous_sibling", { enumerable: false, get: function() { return shadow.dom.get_previous_sibling; } });
Object.defineProperty(module.exports, "ancestor_by_tag", { enumerable: false, get: function() { return shadow.dom.ancestor_by_tag; } });
Object.defineProperty(module.exports, "build", { enumerable: false, get: function() { return shadow.dom.build; } });
Object.defineProperty(module.exports, "set_html", { enumerable: false, get: function() { return shadow.dom.set_html; } });
Object.defineProperty(module.exports, "build_url", { enumerable: false, get: function() { return shadow.dom.build_url; } });
Object.defineProperty(module.exports, "ancestor_by_class", { enumerable: false, get: function() { return shadow.dom.ancestor_by_class; } });
Object.defineProperty(module.exports, "__GT_Size", { enumerable: false, get: function() { return shadow.dom.__GT_Size; } });
Object.defineProperty(module.exports, "add_class", { enumerable: false, get: function() { return shadow.dom.add_class; } });
Object.defineProperty(module.exports, "node_name", { enumerable: false, get: function() { return shadow.dom.node_name; } });
Object.defineProperty(module.exports, "parents", { enumerable: false, get: function() { return shadow.dom.parents; } });
Object.defineProperty(module.exports, "on_query", { enumerable: false, get: function() { return shadow.dom.on_query; } });
Object.defineProperty(module.exports, "create_svg_node", { enumerable: false, get: function() { return shadow.dom.create_svg_node; } });
Object.defineProperty(module.exports, "set_attrs", { enumerable: false, get: function() { return shadow.dom.set_attrs; } });
Object.defineProperty(module.exports, "svg", { enumerable: false, get: function() { return shadow.dom.svg; } });
Object.defineProperty(module.exports, "index_of", { enumerable: false, get: function() { return shadow.dom.index_of; } });
Object.defineProperty(module.exports, "replace_node", { enumerable: false, get: function() { return shadow.dom.replace_node; } });
Object.defineProperty(module.exports, "size__GT_clj", { enumerable: false, get: function() { return shadow.dom.size__GT_clj; } });
Object.defineProperty(module.exports, "set_attr_STAR_", { enumerable: false, get: function() { return shadow.dom.set_attr_STAR_; } });
Object.defineProperty(module.exports, "on", { enumerable: false, get: function() { return shadow.dom.on; } });
Object.defineProperty(module.exports, "remove_style_STAR_", { enumerable: false, get: function() { return shadow.dom.remove_style_STAR_; } });
Object.defineProperty(module.exports, "toggle_class", { enumerable: false, get: function() { return shadow.dom.toggle_class; } });
Object.defineProperty(module.exports, "set_value", { enumerable: false, get: function() { return shadow.dom.set_value; } });
//# sourceMappingURL=shadow.dom.js.map
