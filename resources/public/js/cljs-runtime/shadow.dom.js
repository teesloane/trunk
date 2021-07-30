goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36223 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_36223(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36224 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_36224(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35245 = coll;
var G__35246 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35245,G__35246) : shadow.dom.lazy_native_coll_seq.call(null,G__35245,G__35246));
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
var G__35268 = arguments.length;
switch (G__35268) {
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
var G__35274 = arguments.length;
switch (G__35274) {
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
var G__35282 = arguments.length;
switch (G__35282) {
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
var G__35293 = arguments.length;
switch (G__35293) {
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
var G__35301 = arguments.length;
switch (G__35301) {
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
var G__35315 = arguments.length;
switch (G__35315) {
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
}catch (e35324){if((e35324 instanceof Object)){
var e = e35324;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35324;

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
var seq__35333 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35334 = null;
var count__35335 = (0);
var i__35336 = (0);
while(true){
if((i__35336 < count__35335)){
var el = chunk__35334.cljs$core$IIndexed$_nth$arity$2(null,i__35336);
var handler_36231__$1 = ((function (seq__35333,chunk__35334,count__35335,i__35336,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35333,chunk__35334,count__35335,i__35336,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36231__$1);


var G__36232 = seq__35333;
var G__36233 = chunk__35334;
var G__36234 = count__35335;
var G__36235 = (i__35336 + (1));
seq__35333 = G__36232;
chunk__35334 = G__36233;
count__35335 = G__36234;
i__35336 = G__36235;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35333);
if(temp__5753__auto__){
var seq__35333__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35333__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35333__$1);
var G__36236 = cljs.core.chunk_rest(seq__35333__$1);
var G__36237 = c__4638__auto__;
var G__36238 = cljs.core.count(c__4638__auto__);
var G__36239 = (0);
seq__35333 = G__36236;
chunk__35334 = G__36237;
count__35335 = G__36238;
i__35336 = G__36239;
continue;
} else {
var el = cljs.core.first(seq__35333__$1);
var handler_36240__$1 = ((function (seq__35333,chunk__35334,count__35335,i__35336,el,seq__35333__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35333,chunk__35334,count__35335,i__35336,el,seq__35333__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36240__$1);


var G__36241 = cljs.core.next(seq__35333__$1);
var G__36242 = null;
var G__36243 = (0);
var G__36244 = (0);
seq__35333 = G__36241;
chunk__35334 = G__36242;
count__35335 = G__36243;
i__35336 = G__36244;
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
var G__35354 = arguments.length;
switch (G__35354) {
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
var seq__35372 = cljs.core.seq(events);
var chunk__35373 = null;
var count__35374 = (0);
var i__35375 = (0);
while(true){
if((i__35375 < count__35374)){
var vec__35401 = chunk__35373.cljs$core$IIndexed$_nth$arity$2(null,i__35375);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36250 = seq__35372;
var G__36251 = chunk__35373;
var G__36252 = count__35374;
var G__36253 = (i__35375 + (1));
seq__35372 = G__36250;
chunk__35373 = G__36251;
count__35374 = G__36252;
i__35375 = G__36253;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35372);
if(temp__5753__auto__){
var seq__35372__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35372__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35372__$1);
var G__36254 = cljs.core.chunk_rest(seq__35372__$1);
var G__36255 = c__4638__auto__;
var G__36256 = cljs.core.count(c__4638__auto__);
var G__36257 = (0);
seq__35372 = G__36254;
chunk__35373 = G__36255;
count__35374 = G__36256;
i__35375 = G__36257;
continue;
} else {
var vec__35411 = cljs.core.first(seq__35372__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35411,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36258 = cljs.core.next(seq__35372__$1);
var G__36259 = null;
var G__36260 = (0);
var G__36261 = (0);
seq__35372 = G__36258;
chunk__35373 = G__36259;
count__35374 = G__36260;
i__35375 = G__36261;
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
var seq__35424 = cljs.core.seq(styles);
var chunk__35425 = null;
var count__35426 = (0);
var i__35427 = (0);
while(true){
if((i__35427 < count__35426)){
var vec__35440 = chunk__35425.cljs$core$IIndexed$_nth$arity$2(null,i__35427);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36262 = seq__35424;
var G__36263 = chunk__35425;
var G__36264 = count__35426;
var G__36265 = (i__35427 + (1));
seq__35424 = G__36262;
chunk__35425 = G__36263;
count__35426 = G__36264;
i__35427 = G__36265;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35424);
if(temp__5753__auto__){
var seq__35424__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35424__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35424__$1);
var G__36272 = cljs.core.chunk_rest(seq__35424__$1);
var G__36273 = c__4638__auto__;
var G__36274 = cljs.core.count(c__4638__auto__);
var G__36275 = (0);
seq__35424 = G__36272;
chunk__35425 = G__36273;
count__35426 = G__36274;
i__35427 = G__36275;
continue;
} else {
var vec__35452 = cljs.core.first(seq__35424__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35452,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36277 = cljs.core.next(seq__35424__$1);
var G__36278 = null;
var G__36279 = (0);
var G__36280 = (0);
seq__35424 = G__36277;
chunk__35425 = G__36278;
count__35426 = G__36279;
i__35427 = G__36280;
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
var G__35463_36281 = key;
var G__35463_36282__$1 = (((G__35463_36281 instanceof cljs.core.Keyword))?G__35463_36281.fqn:null);
switch (G__35463_36282__$1) {
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
var ks_36285 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_36285,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_36285,"aria-");
}
})())){
el.setAttribute(ks_36285,value);
} else {
(el[ks_36285] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35522){
var map__35523 = p__35522;
var map__35523__$1 = cljs.core.__destructure_map(map__35523);
var props = map__35523__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35524 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35534 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35534,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35534;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35543 = arguments.length;
switch (G__35543) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35573){
var vec__35576 = p__35573;
var seq__35577 = cljs.core.seq(vec__35576);
var first__35578 = cljs.core.first(seq__35577);
var seq__35577__$1 = cljs.core.next(seq__35577);
var nn = first__35578;
var first__35578__$1 = cljs.core.first(seq__35577__$1);
var seq__35577__$2 = cljs.core.next(seq__35577__$1);
var np = first__35578__$1;
var nc = seq__35577__$2;
var node = vec__35576;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35586 = nn;
var G__35587 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35586,G__35587) : create_fn.call(null,G__35586,G__35587));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35589 = nn;
var G__35590 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35589,G__35590) : create_fn.call(null,G__35589,G__35590));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35592 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(1),null);
var seq__35599_36293 = cljs.core.seq(node_children);
var chunk__35600_36294 = null;
var count__35601_36295 = (0);
var i__35602_36296 = (0);
while(true){
if((i__35602_36296 < count__35601_36295)){
var child_struct_36297 = chunk__35600_36294.cljs$core$IIndexed$_nth$arity$2(null,i__35602_36296);
var children_36298 = shadow.dom.dom_node(child_struct_36297);
if(cljs.core.seq_QMARK_(children_36298)){
var seq__35664_36303 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36298));
var chunk__35666_36304 = null;
var count__35667_36305 = (0);
var i__35668_36306 = (0);
while(true){
if((i__35668_36306 < count__35667_36305)){
var child_36311 = chunk__35666_36304.cljs$core$IIndexed$_nth$arity$2(null,i__35668_36306);
if(cljs.core.truth_(child_36311)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36311);


var G__36312 = seq__35664_36303;
var G__36313 = chunk__35666_36304;
var G__36314 = count__35667_36305;
var G__36315 = (i__35668_36306 + (1));
seq__35664_36303 = G__36312;
chunk__35666_36304 = G__36313;
count__35667_36305 = G__36314;
i__35668_36306 = G__36315;
continue;
} else {
var G__36320 = seq__35664_36303;
var G__36321 = chunk__35666_36304;
var G__36322 = count__35667_36305;
var G__36323 = (i__35668_36306 + (1));
seq__35664_36303 = G__36320;
chunk__35666_36304 = G__36321;
count__35667_36305 = G__36322;
i__35668_36306 = G__36323;
continue;
}
} else {
var temp__5753__auto___36324 = cljs.core.seq(seq__35664_36303);
if(temp__5753__auto___36324){
var seq__35664_36325__$1 = temp__5753__auto___36324;
if(cljs.core.chunked_seq_QMARK_(seq__35664_36325__$1)){
var c__4638__auto___36333 = cljs.core.chunk_first(seq__35664_36325__$1);
var G__36335 = cljs.core.chunk_rest(seq__35664_36325__$1);
var G__36336 = c__4638__auto___36333;
var G__36337 = cljs.core.count(c__4638__auto___36333);
var G__36338 = (0);
seq__35664_36303 = G__36335;
chunk__35666_36304 = G__36336;
count__35667_36305 = G__36337;
i__35668_36306 = G__36338;
continue;
} else {
var child_36339 = cljs.core.first(seq__35664_36325__$1);
if(cljs.core.truth_(child_36339)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36339);


var G__36340 = cljs.core.next(seq__35664_36325__$1);
var G__36341 = null;
var G__36342 = (0);
var G__36343 = (0);
seq__35664_36303 = G__36340;
chunk__35666_36304 = G__36341;
count__35667_36305 = G__36342;
i__35668_36306 = G__36343;
continue;
} else {
var G__36344 = cljs.core.next(seq__35664_36325__$1);
var G__36345 = null;
var G__36346 = (0);
var G__36347 = (0);
seq__35664_36303 = G__36344;
chunk__35666_36304 = G__36345;
count__35667_36305 = G__36346;
i__35668_36306 = G__36347;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36298);
}


var G__36348 = seq__35599_36293;
var G__36349 = chunk__35600_36294;
var G__36350 = count__35601_36295;
var G__36351 = (i__35602_36296 + (1));
seq__35599_36293 = G__36348;
chunk__35600_36294 = G__36349;
count__35601_36295 = G__36350;
i__35602_36296 = G__36351;
continue;
} else {
var temp__5753__auto___36352 = cljs.core.seq(seq__35599_36293);
if(temp__5753__auto___36352){
var seq__35599_36353__$1 = temp__5753__auto___36352;
if(cljs.core.chunked_seq_QMARK_(seq__35599_36353__$1)){
var c__4638__auto___36354 = cljs.core.chunk_first(seq__35599_36353__$1);
var G__36355 = cljs.core.chunk_rest(seq__35599_36353__$1);
var G__36356 = c__4638__auto___36354;
var G__36357 = cljs.core.count(c__4638__auto___36354);
var G__36358 = (0);
seq__35599_36293 = G__36355;
chunk__35600_36294 = G__36356;
count__35601_36295 = G__36357;
i__35602_36296 = G__36358;
continue;
} else {
var child_struct_36359 = cljs.core.first(seq__35599_36353__$1);
var children_36360 = shadow.dom.dom_node(child_struct_36359);
if(cljs.core.seq_QMARK_(children_36360)){
var seq__35703_36361 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36360));
var chunk__35705_36362 = null;
var count__35706_36363 = (0);
var i__35707_36364 = (0);
while(true){
if((i__35707_36364 < count__35706_36363)){
var child_36365 = chunk__35705_36362.cljs$core$IIndexed$_nth$arity$2(null,i__35707_36364);
if(cljs.core.truth_(child_36365)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36365);


var G__36366 = seq__35703_36361;
var G__36367 = chunk__35705_36362;
var G__36368 = count__35706_36363;
var G__36369 = (i__35707_36364 + (1));
seq__35703_36361 = G__36366;
chunk__35705_36362 = G__36367;
count__35706_36363 = G__36368;
i__35707_36364 = G__36369;
continue;
} else {
var G__36370 = seq__35703_36361;
var G__36371 = chunk__35705_36362;
var G__36372 = count__35706_36363;
var G__36373 = (i__35707_36364 + (1));
seq__35703_36361 = G__36370;
chunk__35705_36362 = G__36371;
count__35706_36363 = G__36372;
i__35707_36364 = G__36373;
continue;
}
} else {
var temp__5753__auto___36374__$1 = cljs.core.seq(seq__35703_36361);
if(temp__5753__auto___36374__$1){
var seq__35703_36375__$1 = temp__5753__auto___36374__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35703_36375__$1)){
var c__4638__auto___36376 = cljs.core.chunk_first(seq__35703_36375__$1);
var G__36377 = cljs.core.chunk_rest(seq__35703_36375__$1);
var G__36378 = c__4638__auto___36376;
var G__36379 = cljs.core.count(c__4638__auto___36376);
var G__36380 = (0);
seq__35703_36361 = G__36377;
chunk__35705_36362 = G__36378;
count__35706_36363 = G__36379;
i__35707_36364 = G__36380;
continue;
} else {
var child_36381 = cljs.core.first(seq__35703_36375__$1);
if(cljs.core.truth_(child_36381)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36381);


var G__36382 = cljs.core.next(seq__35703_36375__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__35703_36361 = G__36382;
chunk__35705_36362 = G__36383;
count__35706_36363 = G__36384;
i__35707_36364 = G__36385;
continue;
} else {
var G__36386 = cljs.core.next(seq__35703_36375__$1);
var G__36387 = null;
var G__36388 = (0);
var G__36389 = (0);
seq__35703_36361 = G__36386;
chunk__35705_36362 = G__36387;
count__35706_36363 = G__36388;
i__35707_36364 = G__36389;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36360);
}


var G__36390 = cljs.core.next(seq__35599_36353__$1);
var G__36391 = null;
var G__36392 = (0);
var G__36393 = (0);
seq__35599_36293 = G__36390;
chunk__35600_36294 = G__36391;
count__35601_36295 = G__36392;
i__35602_36296 = G__36393;
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
var seq__35755 = cljs.core.seq(node);
var chunk__35756 = null;
var count__35757 = (0);
var i__35758 = (0);
while(true){
if((i__35758 < count__35757)){
var n = chunk__35756.cljs$core$IIndexed$_nth$arity$2(null,i__35758);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36394 = seq__35755;
var G__36395 = chunk__35756;
var G__36396 = count__35757;
var G__36397 = (i__35758 + (1));
seq__35755 = G__36394;
chunk__35756 = G__36395;
count__35757 = G__36396;
i__35758 = G__36397;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35755);
if(temp__5753__auto__){
var seq__35755__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35755__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35755__$1);
var G__36398 = cljs.core.chunk_rest(seq__35755__$1);
var G__36399 = c__4638__auto__;
var G__36400 = cljs.core.count(c__4638__auto__);
var G__36401 = (0);
seq__35755 = G__36398;
chunk__35756 = G__36399;
count__35757 = G__36400;
i__35758 = G__36401;
continue;
} else {
var n = cljs.core.first(seq__35755__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36402 = cljs.core.next(seq__35755__$1);
var G__36403 = null;
var G__36404 = (0);
var G__36405 = (0);
seq__35755 = G__36402;
chunk__35756 = G__36403;
count__35757 = G__36404;
i__35758 = G__36405;
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
var G__35775 = arguments.length;
switch (G__35775) {
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
var G__35794 = arguments.length;
switch (G__35794) {
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
var G__35803 = arguments.length;
switch (G__35803) {
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
var len__4818__auto___36409 = arguments.length;
var i__4819__auto___36410 = (0);
while(true){
if((i__4819__auto___36410 < len__4818__auto___36409)){
args__4824__auto__.push((arguments[i__4819__auto___36410]));

var G__36411 = (i__4819__auto___36410 + (1));
i__4819__auto___36410 = G__36411;
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
var seq__35808_36412 = cljs.core.seq(nodes);
var chunk__35809_36413 = null;
var count__35810_36414 = (0);
var i__35811_36415 = (0);
while(true){
if((i__35811_36415 < count__35810_36414)){
var node_36416 = chunk__35809_36413.cljs$core$IIndexed$_nth$arity$2(null,i__35811_36415);
fragment.appendChild(shadow.dom._to_dom(node_36416));


var G__36417 = seq__35808_36412;
var G__36418 = chunk__35809_36413;
var G__36419 = count__35810_36414;
var G__36420 = (i__35811_36415 + (1));
seq__35808_36412 = G__36417;
chunk__35809_36413 = G__36418;
count__35810_36414 = G__36419;
i__35811_36415 = G__36420;
continue;
} else {
var temp__5753__auto___36421 = cljs.core.seq(seq__35808_36412);
if(temp__5753__auto___36421){
var seq__35808_36422__$1 = temp__5753__auto___36421;
if(cljs.core.chunked_seq_QMARK_(seq__35808_36422__$1)){
var c__4638__auto___36427 = cljs.core.chunk_first(seq__35808_36422__$1);
var G__36432 = cljs.core.chunk_rest(seq__35808_36422__$1);
var G__36433 = c__4638__auto___36427;
var G__36434 = cljs.core.count(c__4638__auto___36427);
var G__36435 = (0);
seq__35808_36412 = G__36432;
chunk__35809_36413 = G__36433;
count__35810_36414 = G__36434;
i__35811_36415 = G__36435;
continue;
} else {
var node_36436 = cljs.core.first(seq__35808_36422__$1);
fragment.appendChild(shadow.dom._to_dom(node_36436));


var G__36437 = cljs.core.next(seq__35808_36422__$1);
var G__36438 = null;
var G__36439 = (0);
var G__36440 = (0);
seq__35808_36412 = G__36437;
chunk__35809_36413 = G__36438;
count__35810_36414 = G__36439;
i__35811_36415 = G__36440;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35807){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35807));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35826_36449 = cljs.core.seq(scripts);
var chunk__35827_36450 = null;
var count__35828_36451 = (0);
var i__35829_36452 = (0);
while(true){
if((i__35829_36452 < count__35828_36451)){
var vec__35841_36453 = chunk__35827_36450.cljs$core$IIndexed$_nth$arity$2(null,i__35829_36452);
var script_tag_36454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841_36453,(0),null);
var script_body_36455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841_36453,(1),null);
eval(script_body_36455);


var G__36460 = seq__35826_36449;
var G__36461 = chunk__35827_36450;
var G__36462 = count__35828_36451;
var G__36463 = (i__35829_36452 + (1));
seq__35826_36449 = G__36460;
chunk__35827_36450 = G__36461;
count__35828_36451 = G__36462;
i__35829_36452 = G__36463;
continue;
} else {
var temp__5753__auto___36464 = cljs.core.seq(seq__35826_36449);
if(temp__5753__auto___36464){
var seq__35826_36466__$1 = temp__5753__auto___36464;
if(cljs.core.chunked_seq_QMARK_(seq__35826_36466__$1)){
var c__4638__auto___36467 = cljs.core.chunk_first(seq__35826_36466__$1);
var G__36468 = cljs.core.chunk_rest(seq__35826_36466__$1);
var G__36469 = c__4638__auto___36467;
var G__36470 = cljs.core.count(c__4638__auto___36467);
var G__36471 = (0);
seq__35826_36449 = G__36468;
chunk__35827_36450 = G__36469;
count__35828_36451 = G__36470;
i__35829_36452 = G__36471;
continue;
} else {
var vec__35850_36473 = cljs.core.first(seq__35826_36466__$1);
var script_tag_36474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35850_36473,(0),null);
var script_body_36475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35850_36473,(1),null);
eval(script_body_36475);


var G__36476 = cljs.core.next(seq__35826_36466__$1);
var G__36477 = null;
var G__36478 = (0);
var G__36479 = (0);
seq__35826_36449 = G__36476;
chunk__35827_36450 = G__36477;
count__35828_36451 = G__36478;
i__35829_36452 = G__36479;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35856){
var vec__35858 = p__35856;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35858,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35858,(1),null);
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
var G__35870 = arguments.length;
switch (G__35870) {
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
var seq__35876 = cljs.core.seq(style_keys);
var chunk__35877 = null;
var count__35878 = (0);
var i__35879 = (0);
while(true){
if((i__35879 < count__35878)){
var it = chunk__35877.cljs$core$IIndexed$_nth$arity$2(null,i__35879);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36481 = seq__35876;
var G__36482 = chunk__35877;
var G__36483 = count__35878;
var G__36484 = (i__35879 + (1));
seq__35876 = G__36481;
chunk__35877 = G__36482;
count__35878 = G__36483;
i__35879 = G__36484;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35876);
if(temp__5753__auto__){
var seq__35876__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35876__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35876__$1);
var G__36485 = cljs.core.chunk_rest(seq__35876__$1);
var G__36486 = c__4638__auto__;
var G__36487 = cljs.core.count(c__4638__auto__);
var G__36488 = (0);
seq__35876 = G__36485;
chunk__35877 = G__36486;
count__35878 = G__36487;
i__35879 = G__36488;
continue;
} else {
var it = cljs.core.first(seq__35876__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36489 = cljs.core.next(seq__35876__$1);
var G__36490 = null;
var G__36491 = (0);
var G__36492 = (0);
seq__35876 = G__36489;
chunk__35877 = G__36490;
count__35878 = G__36491;
i__35879 = G__36492;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35886,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35903 = k35886;
var G__35903__$1 = (((G__35903 instanceof cljs.core.Keyword))?G__35903.fqn:null);
switch (G__35903__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35886,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35908){
var vec__35910 = p__35908;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35910,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35910,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35885){
var self__ = this;
var G__35885__$1 = this;
return (new cljs.core.RecordIter((0),G__35885__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35887,other35888){
var self__ = this;
var this35887__$1 = this;
return (((!((other35888 == null)))) && ((((this35887__$1.constructor === other35888.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35887__$1.x,other35888.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35887__$1.y,other35888.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35887__$1.__extmap,other35888.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35886){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35923 = k35886;
var G__35923__$1 = (((G__35923 instanceof cljs.core.Keyword))?G__35923.fqn:null);
switch (G__35923__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35886);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35885){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35924 = cljs.core.keyword_identical_QMARK_;
var expr__35925 = k__4470__auto__;
if(cljs.core.truth_((pred__35924.cljs$core$IFn$_invoke$arity$2 ? pred__35924.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35925) : pred__35924.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35925)))){
return (new shadow.dom.Coordinate(G__35885,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35924.cljs$core$IFn$_invoke$arity$2 ? pred__35924.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35925) : pred__35924.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35925)))){
return (new shadow.dom.Coordinate(self__.x,G__35885,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35885),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35885){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35885,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35893){
var extmap__4501__auto__ = (function (){var G__35938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35893,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35893)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35938);
} else {
return G__35938;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35893),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35893),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35946,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35956 = k35946;
var G__35956__$1 = (((G__35956 instanceof cljs.core.Keyword))?G__35956.fqn:null);
switch (G__35956__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35946,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35959){
var vec__35960 = p__35959;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35945){
var self__ = this;
var G__35945__$1 = this;
return (new cljs.core.RecordIter((0),G__35945__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35947,other35948){
var self__ = this;
var this35947__$1 = this;
return (((!((other35948 == null)))) && ((((this35947__$1.constructor === other35948.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35947__$1.w,other35948.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35947__$1.h,other35948.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35947__$1.__extmap,other35948.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35946){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35978 = k35946;
var G__35978__$1 = (((G__35978 instanceof cljs.core.Keyword))?G__35978.fqn:null);
switch (G__35978__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35946);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35945){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35982 = cljs.core.keyword_identical_QMARK_;
var expr__35983 = k__4470__auto__;
if(cljs.core.truth_((pred__35982.cljs$core$IFn$_invoke$arity$2 ? pred__35982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35983) : pred__35982.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35983)))){
return (new shadow.dom.Size(G__35945,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35982.cljs$core$IFn$_invoke$arity$2 ? pred__35982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35983) : pred__35982.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35983)))){
return (new shadow.dom.Size(self__.w,G__35945,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35945),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35945){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35945,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35951){
var extmap__4501__auto__ = (function (){var G__35993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35951,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35951)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35993);
} else {
return G__35993;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35951),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35951),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__36509 = (i + (1));
var G__36510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36509;
ret = G__36510;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36002){
var vec__36003 = p__36002;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36003,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36007 = arguments.length;
switch (G__36007) {
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
var G__36519 = ps;
var G__36520 = (i + (1));
el__$1 = G__36519;
i = G__36520;
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
var vec__36026 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36032_36521 = cljs.core.seq(props);
var chunk__36033_36522 = null;
var count__36034_36523 = (0);
var i__36035_36524 = (0);
while(true){
if((i__36035_36524 < count__36034_36523)){
var vec__36049_36525 = chunk__36033_36522.cljs$core$IIndexed$_nth$arity$2(null,i__36035_36524);
var k_36526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049_36525,(0),null);
var v_36527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049_36525,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36526);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36526),v_36527);


var G__36528 = seq__36032_36521;
var G__36529 = chunk__36033_36522;
var G__36530 = count__36034_36523;
var G__36531 = (i__36035_36524 + (1));
seq__36032_36521 = G__36528;
chunk__36033_36522 = G__36529;
count__36034_36523 = G__36530;
i__36035_36524 = G__36531;
continue;
} else {
var temp__5753__auto___36532 = cljs.core.seq(seq__36032_36521);
if(temp__5753__auto___36532){
var seq__36032_36533__$1 = temp__5753__auto___36532;
if(cljs.core.chunked_seq_QMARK_(seq__36032_36533__$1)){
var c__4638__auto___36534 = cljs.core.chunk_first(seq__36032_36533__$1);
var G__36535 = cljs.core.chunk_rest(seq__36032_36533__$1);
var G__36536 = c__4638__auto___36534;
var G__36537 = cljs.core.count(c__4638__auto___36534);
var G__36538 = (0);
seq__36032_36521 = G__36535;
chunk__36033_36522 = G__36536;
count__36034_36523 = G__36537;
i__36035_36524 = G__36538;
continue;
} else {
var vec__36057_36539 = cljs.core.first(seq__36032_36533__$1);
var k_36540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057_36539,(0),null);
var v_36541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057_36539,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36540);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36540),v_36541);


var G__36542 = cljs.core.next(seq__36032_36533__$1);
var G__36543 = null;
var G__36544 = (0);
var G__36545 = (0);
seq__36032_36521 = G__36542;
chunk__36033_36522 = G__36543;
count__36034_36523 = G__36544;
i__36035_36524 = G__36545;
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
var vec__36069 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36069,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36069,(1),null);
var seq__36073_36550 = cljs.core.seq(node_children);
var chunk__36075_36551 = null;
var count__36076_36552 = (0);
var i__36077_36553 = (0);
while(true){
if((i__36077_36553 < count__36076_36552)){
var child_struct_36554 = chunk__36075_36551.cljs$core$IIndexed$_nth$arity$2(null,i__36077_36553);
if((!((child_struct_36554 == null)))){
if(typeof child_struct_36554 === 'string'){
var text_36555 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36555),child_struct_36554].join(''));
} else {
var children_36556 = shadow.dom.svg_node(child_struct_36554);
if(cljs.core.seq_QMARK_(children_36556)){
var seq__36129_36557 = cljs.core.seq(children_36556);
var chunk__36131_36558 = null;
var count__36132_36559 = (0);
var i__36133_36560 = (0);
while(true){
if((i__36133_36560 < count__36132_36559)){
var child_36561 = chunk__36131_36558.cljs$core$IIndexed$_nth$arity$2(null,i__36133_36560);
if(cljs.core.truth_(child_36561)){
node.appendChild(child_36561);


var G__36562 = seq__36129_36557;
var G__36563 = chunk__36131_36558;
var G__36564 = count__36132_36559;
var G__36565 = (i__36133_36560 + (1));
seq__36129_36557 = G__36562;
chunk__36131_36558 = G__36563;
count__36132_36559 = G__36564;
i__36133_36560 = G__36565;
continue;
} else {
var G__36566 = seq__36129_36557;
var G__36567 = chunk__36131_36558;
var G__36568 = count__36132_36559;
var G__36569 = (i__36133_36560 + (1));
seq__36129_36557 = G__36566;
chunk__36131_36558 = G__36567;
count__36132_36559 = G__36568;
i__36133_36560 = G__36569;
continue;
}
} else {
var temp__5753__auto___36570 = cljs.core.seq(seq__36129_36557);
if(temp__5753__auto___36570){
var seq__36129_36571__$1 = temp__5753__auto___36570;
if(cljs.core.chunked_seq_QMARK_(seq__36129_36571__$1)){
var c__4638__auto___36572 = cljs.core.chunk_first(seq__36129_36571__$1);
var G__36573 = cljs.core.chunk_rest(seq__36129_36571__$1);
var G__36574 = c__4638__auto___36572;
var G__36575 = cljs.core.count(c__4638__auto___36572);
var G__36576 = (0);
seq__36129_36557 = G__36573;
chunk__36131_36558 = G__36574;
count__36132_36559 = G__36575;
i__36133_36560 = G__36576;
continue;
} else {
var child_36577 = cljs.core.first(seq__36129_36571__$1);
if(cljs.core.truth_(child_36577)){
node.appendChild(child_36577);


var G__36578 = cljs.core.next(seq__36129_36571__$1);
var G__36579 = null;
var G__36580 = (0);
var G__36581 = (0);
seq__36129_36557 = G__36578;
chunk__36131_36558 = G__36579;
count__36132_36559 = G__36580;
i__36133_36560 = G__36581;
continue;
} else {
var G__36582 = cljs.core.next(seq__36129_36571__$1);
var G__36583 = null;
var G__36584 = (0);
var G__36585 = (0);
seq__36129_36557 = G__36582;
chunk__36131_36558 = G__36583;
count__36132_36559 = G__36584;
i__36133_36560 = G__36585;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36556);
}
}


var G__36586 = seq__36073_36550;
var G__36587 = chunk__36075_36551;
var G__36588 = count__36076_36552;
var G__36589 = (i__36077_36553 + (1));
seq__36073_36550 = G__36586;
chunk__36075_36551 = G__36587;
count__36076_36552 = G__36588;
i__36077_36553 = G__36589;
continue;
} else {
var G__36590 = seq__36073_36550;
var G__36591 = chunk__36075_36551;
var G__36592 = count__36076_36552;
var G__36593 = (i__36077_36553 + (1));
seq__36073_36550 = G__36590;
chunk__36075_36551 = G__36591;
count__36076_36552 = G__36592;
i__36077_36553 = G__36593;
continue;
}
} else {
var temp__5753__auto___36594 = cljs.core.seq(seq__36073_36550);
if(temp__5753__auto___36594){
var seq__36073_36595__$1 = temp__5753__auto___36594;
if(cljs.core.chunked_seq_QMARK_(seq__36073_36595__$1)){
var c__4638__auto___36596 = cljs.core.chunk_first(seq__36073_36595__$1);
var G__36597 = cljs.core.chunk_rest(seq__36073_36595__$1);
var G__36598 = c__4638__auto___36596;
var G__36599 = cljs.core.count(c__4638__auto___36596);
var G__36600 = (0);
seq__36073_36550 = G__36597;
chunk__36075_36551 = G__36598;
count__36076_36552 = G__36599;
i__36077_36553 = G__36600;
continue;
} else {
var child_struct_36601 = cljs.core.first(seq__36073_36595__$1);
if((!((child_struct_36601 == null)))){
if(typeof child_struct_36601 === 'string'){
var text_36602 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36602),child_struct_36601].join(''));
} else {
var children_36603 = shadow.dom.svg_node(child_struct_36601);
if(cljs.core.seq_QMARK_(children_36603)){
var seq__36151_36605 = cljs.core.seq(children_36603);
var chunk__36153_36606 = null;
var count__36154_36607 = (0);
var i__36155_36608 = (0);
while(true){
if((i__36155_36608 < count__36154_36607)){
var child_36611 = chunk__36153_36606.cljs$core$IIndexed$_nth$arity$2(null,i__36155_36608);
if(cljs.core.truth_(child_36611)){
node.appendChild(child_36611);


var G__36612 = seq__36151_36605;
var G__36613 = chunk__36153_36606;
var G__36614 = count__36154_36607;
var G__36615 = (i__36155_36608 + (1));
seq__36151_36605 = G__36612;
chunk__36153_36606 = G__36613;
count__36154_36607 = G__36614;
i__36155_36608 = G__36615;
continue;
} else {
var G__36616 = seq__36151_36605;
var G__36617 = chunk__36153_36606;
var G__36618 = count__36154_36607;
var G__36619 = (i__36155_36608 + (1));
seq__36151_36605 = G__36616;
chunk__36153_36606 = G__36617;
count__36154_36607 = G__36618;
i__36155_36608 = G__36619;
continue;
}
} else {
var temp__5753__auto___36620__$1 = cljs.core.seq(seq__36151_36605);
if(temp__5753__auto___36620__$1){
var seq__36151_36621__$1 = temp__5753__auto___36620__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36151_36621__$1)){
var c__4638__auto___36622 = cljs.core.chunk_first(seq__36151_36621__$1);
var G__36623 = cljs.core.chunk_rest(seq__36151_36621__$1);
var G__36624 = c__4638__auto___36622;
var G__36625 = cljs.core.count(c__4638__auto___36622);
var G__36626 = (0);
seq__36151_36605 = G__36623;
chunk__36153_36606 = G__36624;
count__36154_36607 = G__36625;
i__36155_36608 = G__36626;
continue;
} else {
var child_36627 = cljs.core.first(seq__36151_36621__$1);
if(cljs.core.truth_(child_36627)){
node.appendChild(child_36627);


var G__36628 = cljs.core.next(seq__36151_36621__$1);
var G__36629 = null;
var G__36630 = (0);
var G__36631 = (0);
seq__36151_36605 = G__36628;
chunk__36153_36606 = G__36629;
count__36154_36607 = G__36630;
i__36155_36608 = G__36631;
continue;
} else {
var G__36632 = cljs.core.next(seq__36151_36621__$1);
var G__36633 = null;
var G__36634 = (0);
var G__36635 = (0);
seq__36151_36605 = G__36632;
chunk__36153_36606 = G__36633;
count__36154_36607 = G__36634;
i__36155_36608 = G__36635;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36603);
}
}


var G__36636 = cljs.core.next(seq__36073_36595__$1);
var G__36637 = null;
var G__36638 = (0);
var G__36639 = (0);
seq__36073_36550 = G__36636;
chunk__36075_36551 = G__36637;
count__36076_36552 = G__36638;
i__36077_36553 = G__36639;
continue;
} else {
var G__36640 = cljs.core.next(seq__36073_36595__$1);
var G__36641 = null;
var G__36642 = (0);
var G__36643 = (0);
seq__36073_36550 = G__36640;
chunk__36075_36551 = G__36641;
count__36076_36552 = G__36642;
i__36077_36553 = G__36643;
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
var len__4818__auto___36647 = arguments.length;
var i__4819__auto___36648 = (0);
while(true){
if((i__4819__auto___36648 < len__4818__auto___36647)){
args__4824__auto__.push((arguments[i__4819__auto___36648]));

var G__36649 = (i__4819__auto___36648 + (1));
i__4819__auto___36648 = G__36649;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36179){
var G__36180 = cljs.core.first(seq36179);
var seq36179__$1 = cljs.core.next(seq36179);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36180,seq36179__$1);
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
var G__36193 = arguments.length;
switch (G__36193) {
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
var c__31699__auto___36655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_36204){
var state_val_36205 = (state_36204[(1)]);
if((state_val_36205 === (1))){
var state_36204__$1 = state_36204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36204__$1,(2),once_or_cleanup);
} else {
if((state_val_36205 === (2))){
var inst_36201 = (state_36204[(2)]);
var inst_36202 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36204__$1 = (function (){var statearr_36213 = state_36204;
(statearr_36213[(7)] = inst_36201);

return statearr_36213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36204__$1,inst_36202);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31479__auto__ = null;
var shadow$dom$state_machine__31479__auto____0 = (function (){
var statearr_36214 = [null,null,null,null,null,null,null,null];
(statearr_36214[(0)] = shadow$dom$state_machine__31479__auto__);

(statearr_36214[(1)] = (1));

return statearr_36214;
});
var shadow$dom$state_machine__31479__auto____1 = (function (state_36204){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_36204);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e36215){var ex__31482__auto__ = e36215;
var statearr_36216_36656 = state_36204;
(statearr_36216_36656[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_36204[(4)]))){
var statearr_36217_36657 = state_36204;
(statearr_36217_36657[(1)] = cljs.core.first((state_36204[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36658 = state_36204;
state_36204 = G__36658;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
shadow$dom$state_machine__31479__auto__ = function(state_36204){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31479__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31479__auto____1.call(this,state_36204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31479__auto____0;
shadow$dom$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31479__auto____1;
return shadow$dom$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_36218 = f__31700__auto__();
(statearr_36218[(6)] = c__31699__auto___36655);

return statearr_36218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
