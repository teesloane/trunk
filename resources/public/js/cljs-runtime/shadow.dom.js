goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49433 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_49433(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49434 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_49434(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47997 = coll;
var G__47998 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47997,G__47998) : shadow.dom.lazy_native_coll_seq.call(null,G__47997,G__47998));
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
var G__48023 = arguments.length;
switch (G__48023) {
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
var G__48042 = arguments.length;
switch (G__48042) {
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
var G__48059 = arguments.length;
switch (G__48059) {
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
var G__48078 = arguments.length;
switch (G__48078) {
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
var G__48106 = arguments.length;
switch (G__48106) {
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
var G__48136 = arguments.length;
switch (G__48136) {
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
}catch (e48158){if((e48158 instanceof Object)){
var e = e48158;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48158;

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
var seq__48177 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48178 = null;
var count__48179 = (0);
var i__48180 = (0);
while(true){
if((i__48180 < count__48179)){
var el = chunk__48178.cljs$core$IIndexed$_nth$arity$2(null,i__48180);
var handler_49444__$1 = ((function (seq__48177,chunk__48178,count__48179,i__48180,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48177,chunk__48178,count__48179,i__48180,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49444__$1);


var G__49445 = seq__48177;
var G__49446 = chunk__48178;
var G__49447 = count__48179;
var G__49448 = (i__48180 + (1));
seq__48177 = G__49445;
chunk__48178 = G__49446;
count__48179 = G__49447;
i__48180 = G__49448;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48177);
if(temp__5753__auto__){
var seq__48177__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48177__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48177__$1);
var G__49450 = cljs.core.chunk_rest(seq__48177__$1);
var G__49451 = c__4638__auto__;
var G__49452 = cljs.core.count(c__4638__auto__);
var G__49453 = (0);
seq__48177 = G__49450;
chunk__48178 = G__49451;
count__48179 = G__49452;
i__48180 = G__49453;
continue;
} else {
var el = cljs.core.first(seq__48177__$1);
var handler_49454__$1 = ((function (seq__48177,chunk__48178,count__48179,i__48180,el,seq__48177__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48177,chunk__48178,count__48179,i__48180,el,seq__48177__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49454__$1);


var G__49455 = cljs.core.next(seq__48177__$1);
var G__49456 = null;
var G__49457 = (0);
var G__49458 = (0);
seq__48177 = G__49455;
chunk__48178 = G__49456;
count__48179 = G__49457;
i__48180 = G__49458;
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
var G__48215 = arguments.length;
switch (G__48215) {
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
var seq__48261 = cljs.core.seq(events);
var chunk__48262 = null;
var count__48263 = (0);
var i__48264 = (0);
while(true){
if((i__48264 < count__48263)){
var vec__48281 = chunk__48262.cljs$core$IIndexed$_nth$arity$2(null,i__48264);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48281,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49460 = seq__48261;
var G__49461 = chunk__48262;
var G__49462 = count__48263;
var G__49463 = (i__48264 + (1));
seq__48261 = G__49460;
chunk__48262 = G__49461;
count__48263 = G__49462;
i__48264 = G__49463;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48261);
if(temp__5753__auto__){
var seq__48261__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48261__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48261__$1);
var G__49464 = cljs.core.chunk_rest(seq__48261__$1);
var G__49465 = c__4638__auto__;
var G__49466 = cljs.core.count(c__4638__auto__);
var G__49467 = (0);
seq__48261 = G__49464;
chunk__48262 = G__49465;
count__48263 = G__49466;
i__48264 = G__49467;
continue;
} else {
var vec__48297 = cljs.core.first(seq__48261__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48297,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48297,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49468 = cljs.core.next(seq__48261__$1);
var G__49469 = null;
var G__49470 = (0);
var G__49471 = (0);
seq__48261 = G__49468;
chunk__48262 = G__49469;
count__48263 = G__49470;
i__48264 = G__49471;
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
var seq__48308 = cljs.core.seq(styles);
var chunk__48309 = null;
var count__48310 = (0);
var i__48311 = (0);
while(true){
if((i__48311 < count__48310)){
var vec__48354 = chunk__48309.cljs$core$IIndexed$_nth$arity$2(null,i__48311);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48354,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49472 = seq__48308;
var G__49473 = chunk__48309;
var G__49474 = count__48310;
var G__49475 = (i__48311 + (1));
seq__48308 = G__49472;
chunk__48309 = G__49473;
count__48310 = G__49474;
i__48311 = G__49475;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48308);
if(temp__5753__auto__){
var seq__48308__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48308__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48308__$1);
var G__49477 = cljs.core.chunk_rest(seq__48308__$1);
var G__49478 = c__4638__auto__;
var G__49479 = cljs.core.count(c__4638__auto__);
var G__49480 = (0);
seq__48308 = G__49477;
chunk__48309 = G__49478;
count__48310 = G__49479;
i__48311 = G__49480;
continue;
} else {
var vec__48362 = cljs.core.first(seq__48308__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48362,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49483 = cljs.core.next(seq__48308__$1);
var G__49484 = null;
var G__49485 = (0);
var G__49486 = (0);
seq__48308 = G__49483;
chunk__48309 = G__49484;
count__48310 = G__49485;
i__48311 = G__49486;
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
var G__48368_49487 = key;
var G__48368_49488__$1 = (((G__48368_49487 instanceof cljs.core.Keyword))?G__48368_49487.fqn:null);
switch (G__48368_49488__$1) {
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
var ks_49490 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_49490,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_49490,"aria-");
}
})())){
el.setAttribute(ks_49490,value);
} else {
(el[ks_49490] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48428){
var map__48429 = p__48428;
var map__48429__$1 = cljs.core.__destructure_map(map__48429);
var props = map__48429__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48429__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48433 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48433,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48433,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48433,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48436 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48436,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48436;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48438 = arguments.length;
switch (G__48438) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48480){
var vec__48482 = p__48480;
var seq__48483 = cljs.core.seq(vec__48482);
var first__48484 = cljs.core.first(seq__48483);
var seq__48483__$1 = cljs.core.next(seq__48483);
var nn = first__48484;
var first__48484__$1 = cljs.core.first(seq__48483__$1);
var seq__48483__$2 = cljs.core.next(seq__48483__$1);
var np = first__48484__$1;
var nc = seq__48483__$2;
var node = vec__48482;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48488 = nn;
var G__48489 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48488,G__48489) : create_fn.call(null,G__48488,G__48489));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48495 = nn;
var G__48496 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48495,G__48496) : create_fn.call(null,G__48495,G__48496));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48505 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48505,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48505,(1),null);
var seq__48509_49499 = cljs.core.seq(node_children);
var chunk__48510_49500 = null;
var count__48511_49501 = (0);
var i__48512_49502 = (0);
while(true){
if((i__48512_49502 < count__48511_49501)){
var child_struct_49503 = chunk__48510_49500.cljs$core$IIndexed$_nth$arity$2(null,i__48512_49502);
var children_49504 = shadow.dom.dom_node(child_struct_49503);
if(cljs.core.seq_QMARK_(children_49504)){
var seq__48575_49505 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49504));
var chunk__48577_49506 = null;
var count__48578_49507 = (0);
var i__48579_49508 = (0);
while(true){
if((i__48579_49508 < count__48578_49507)){
var child_49509 = chunk__48577_49506.cljs$core$IIndexed$_nth$arity$2(null,i__48579_49508);
if(cljs.core.truth_(child_49509)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49509);


var G__49510 = seq__48575_49505;
var G__49511 = chunk__48577_49506;
var G__49512 = count__48578_49507;
var G__49513 = (i__48579_49508 + (1));
seq__48575_49505 = G__49510;
chunk__48577_49506 = G__49511;
count__48578_49507 = G__49512;
i__48579_49508 = G__49513;
continue;
} else {
var G__49514 = seq__48575_49505;
var G__49515 = chunk__48577_49506;
var G__49516 = count__48578_49507;
var G__49517 = (i__48579_49508 + (1));
seq__48575_49505 = G__49514;
chunk__48577_49506 = G__49515;
count__48578_49507 = G__49516;
i__48579_49508 = G__49517;
continue;
}
} else {
var temp__5753__auto___49518 = cljs.core.seq(seq__48575_49505);
if(temp__5753__auto___49518){
var seq__48575_49519__$1 = temp__5753__auto___49518;
if(cljs.core.chunked_seq_QMARK_(seq__48575_49519__$1)){
var c__4638__auto___49520 = cljs.core.chunk_first(seq__48575_49519__$1);
var G__49521 = cljs.core.chunk_rest(seq__48575_49519__$1);
var G__49522 = c__4638__auto___49520;
var G__49523 = cljs.core.count(c__4638__auto___49520);
var G__49524 = (0);
seq__48575_49505 = G__49521;
chunk__48577_49506 = G__49522;
count__48578_49507 = G__49523;
i__48579_49508 = G__49524;
continue;
} else {
var child_49525 = cljs.core.first(seq__48575_49519__$1);
if(cljs.core.truth_(child_49525)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49525);


var G__49526 = cljs.core.next(seq__48575_49519__$1);
var G__49527 = null;
var G__49528 = (0);
var G__49529 = (0);
seq__48575_49505 = G__49526;
chunk__48577_49506 = G__49527;
count__48578_49507 = G__49528;
i__48579_49508 = G__49529;
continue;
} else {
var G__49530 = cljs.core.next(seq__48575_49519__$1);
var G__49531 = null;
var G__49532 = (0);
var G__49533 = (0);
seq__48575_49505 = G__49530;
chunk__48577_49506 = G__49531;
count__48578_49507 = G__49532;
i__48579_49508 = G__49533;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49504);
}


var G__49536 = seq__48509_49499;
var G__49537 = chunk__48510_49500;
var G__49538 = count__48511_49501;
var G__49539 = (i__48512_49502 + (1));
seq__48509_49499 = G__49536;
chunk__48510_49500 = G__49537;
count__48511_49501 = G__49538;
i__48512_49502 = G__49539;
continue;
} else {
var temp__5753__auto___49540 = cljs.core.seq(seq__48509_49499);
if(temp__5753__auto___49540){
var seq__48509_49541__$1 = temp__5753__auto___49540;
if(cljs.core.chunked_seq_QMARK_(seq__48509_49541__$1)){
var c__4638__auto___49542 = cljs.core.chunk_first(seq__48509_49541__$1);
var G__49543 = cljs.core.chunk_rest(seq__48509_49541__$1);
var G__49544 = c__4638__auto___49542;
var G__49545 = cljs.core.count(c__4638__auto___49542);
var G__49546 = (0);
seq__48509_49499 = G__49543;
chunk__48510_49500 = G__49544;
count__48511_49501 = G__49545;
i__48512_49502 = G__49546;
continue;
} else {
var child_struct_49547 = cljs.core.first(seq__48509_49541__$1);
var children_49548 = shadow.dom.dom_node(child_struct_49547);
if(cljs.core.seq_QMARK_(children_49548)){
var seq__48604_49549 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49548));
var chunk__48606_49550 = null;
var count__48607_49551 = (0);
var i__48608_49552 = (0);
while(true){
if((i__48608_49552 < count__48607_49551)){
var child_49553 = chunk__48606_49550.cljs$core$IIndexed$_nth$arity$2(null,i__48608_49552);
if(cljs.core.truth_(child_49553)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49553);


var G__49554 = seq__48604_49549;
var G__49555 = chunk__48606_49550;
var G__49556 = count__48607_49551;
var G__49557 = (i__48608_49552 + (1));
seq__48604_49549 = G__49554;
chunk__48606_49550 = G__49555;
count__48607_49551 = G__49556;
i__48608_49552 = G__49557;
continue;
} else {
var G__49559 = seq__48604_49549;
var G__49560 = chunk__48606_49550;
var G__49561 = count__48607_49551;
var G__49562 = (i__48608_49552 + (1));
seq__48604_49549 = G__49559;
chunk__48606_49550 = G__49560;
count__48607_49551 = G__49561;
i__48608_49552 = G__49562;
continue;
}
} else {
var temp__5753__auto___49563__$1 = cljs.core.seq(seq__48604_49549);
if(temp__5753__auto___49563__$1){
var seq__48604_49565__$1 = temp__5753__auto___49563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48604_49565__$1)){
var c__4638__auto___49567 = cljs.core.chunk_first(seq__48604_49565__$1);
var G__49568 = cljs.core.chunk_rest(seq__48604_49565__$1);
var G__49569 = c__4638__auto___49567;
var G__49570 = cljs.core.count(c__4638__auto___49567);
var G__49571 = (0);
seq__48604_49549 = G__49568;
chunk__48606_49550 = G__49569;
count__48607_49551 = G__49570;
i__48608_49552 = G__49571;
continue;
} else {
var child_49573 = cljs.core.first(seq__48604_49565__$1);
if(cljs.core.truth_(child_49573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49573);


var G__49574 = cljs.core.next(seq__48604_49565__$1);
var G__49575 = null;
var G__49576 = (0);
var G__49577 = (0);
seq__48604_49549 = G__49574;
chunk__48606_49550 = G__49575;
count__48607_49551 = G__49576;
i__48608_49552 = G__49577;
continue;
} else {
var G__49578 = cljs.core.next(seq__48604_49565__$1);
var G__49579 = null;
var G__49580 = (0);
var G__49581 = (0);
seq__48604_49549 = G__49578;
chunk__48606_49550 = G__49579;
count__48607_49551 = G__49580;
i__48608_49552 = G__49581;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49548);
}


var G__49582 = cljs.core.next(seq__48509_49541__$1);
var G__49583 = null;
var G__49584 = (0);
var G__49585 = (0);
seq__48509_49499 = G__49582;
chunk__48510_49500 = G__49583;
count__48511_49501 = G__49584;
i__48512_49502 = G__49585;
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
var seq__48643 = cljs.core.seq(node);
var chunk__48644 = null;
var count__48645 = (0);
var i__48646 = (0);
while(true){
if((i__48646 < count__48645)){
var n = chunk__48644.cljs$core$IIndexed$_nth$arity$2(null,i__48646);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49601 = seq__48643;
var G__49602 = chunk__48644;
var G__49603 = count__48645;
var G__49604 = (i__48646 + (1));
seq__48643 = G__49601;
chunk__48644 = G__49602;
count__48645 = G__49603;
i__48646 = G__49604;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48643);
if(temp__5753__auto__){
var seq__48643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48643__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48643__$1);
var G__49619 = cljs.core.chunk_rest(seq__48643__$1);
var G__49620 = c__4638__auto__;
var G__49621 = cljs.core.count(c__4638__auto__);
var G__49622 = (0);
seq__48643 = G__49619;
chunk__48644 = G__49620;
count__48645 = G__49621;
i__48646 = G__49622;
continue;
} else {
var n = cljs.core.first(seq__48643__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49625 = cljs.core.next(seq__48643__$1);
var G__49626 = null;
var G__49627 = (0);
var G__49628 = (0);
seq__48643 = G__49625;
chunk__48644 = G__49626;
count__48645 = G__49627;
i__48646 = G__49628;
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
var G__48664 = arguments.length;
switch (G__48664) {
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
var G__48674 = arguments.length;
switch (G__48674) {
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
var G__48710 = arguments.length;
switch (G__48710) {
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
var len__4818__auto___49650 = arguments.length;
var i__4819__auto___49651 = (0);
while(true){
if((i__4819__auto___49651 < len__4818__auto___49650)){
args__4824__auto__.push((arguments[i__4819__auto___49651]));

var G__49652 = (i__4819__auto___49651 + (1));
i__4819__auto___49651 = G__49652;
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
var seq__48739_49656 = cljs.core.seq(nodes);
var chunk__48740_49657 = null;
var count__48741_49658 = (0);
var i__48742_49659 = (0);
while(true){
if((i__48742_49659 < count__48741_49658)){
var node_49660 = chunk__48740_49657.cljs$core$IIndexed$_nth$arity$2(null,i__48742_49659);
fragment.appendChild(shadow.dom._to_dom(node_49660));


var G__49661 = seq__48739_49656;
var G__49662 = chunk__48740_49657;
var G__49663 = count__48741_49658;
var G__49664 = (i__48742_49659 + (1));
seq__48739_49656 = G__49661;
chunk__48740_49657 = G__49662;
count__48741_49658 = G__49663;
i__48742_49659 = G__49664;
continue;
} else {
var temp__5753__auto___49665 = cljs.core.seq(seq__48739_49656);
if(temp__5753__auto___49665){
var seq__48739_49666__$1 = temp__5753__auto___49665;
if(cljs.core.chunked_seq_QMARK_(seq__48739_49666__$1)){
var c__4638__auto___49667 = cljs.core.chunk_first(seq__48739_49666__$1);
var G__49668 = cljs.core.chunk_rest(seq__48739_49666__$1);
var G__49669 = c__4638__auto___49667;
var G__49670 = cljs.core.count(c__4638__auto___49667);
var G__49671 = (0);
seq__48739_49656 = G__49668;
chunk__48740_49657 = G__49669;
count__48741_49658 = G__49670;
i__48742_49659 = G__49671;
continue;
} else {
var node_49672 = cljs.core.first(seq__48739_49666__$1);
fragment.appendChild(shadow.dom._to_dom(node_49672));


var G__49673 = cljs.core.next(seq__48739_49666__$1);
var G__49674 = null;
var G__49675 = (0);
var G__49676 = (0);
seq__48739_49656 = G__49673;
chunk__48740_49657 = G__49674;
count__48741_49658 = G__49675;
i__48742_49659 = G__49676;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48725){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48725));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48789_49677 = cljs.core.seq(scripts);
var chunk__48790_49678 = null;
var count__48791_49679 = (0);
var i__48792_49680 = (0);
while(true){
if((i__48792_49680 < count__48791_49679)){
var vec__48808_49681 = chunk__48790_49678.cljs$core$IIndexed$_nth$arity$2(null,i__48792_49680);
var script_tag_49682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48808_49681,(0),null);
var script_body_49683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48808_49681,(1),null);
eval(script_body_49683);


var G__49684 = seq__48789_49677;
var G__49685 = chunk__48790_49678;
var G__49686 = count__48791_49679;
var G__49687 = (i__48792_49680 + (1));
seq__48789_49677 = G__49684;
chunk__48790_49678 = G__49685;
count__48791_49679 = G__49686;
i__48792_49680 = G__49687;
continue;
} else {
var temp__5753__auto___49688 = cljs.core.seq(seq__48789_49677);
if(temp__5753__auto___49688){
var seq__48789_49689__$1 = temp__5753__auto___49688;
if(cljs.core.chunked_seq_QMARK_(seq__48789_49689__$1)){
var c__4638__auto___49690 = cljs.core.chunk_first(seq__48789_49689__$1);
var G__49691 = cljs.core.chunk_rest(seq__48789_49689__$1);
var G__49692 = c__4638__auto___49690;
var G__49693 = cljs.core.count(c__4638__auto___49690);
var G__49694 = (0);
seq__48789_49677 = G__49691;
chunk__48790_49678 = G__49692;
count__48791_49679 = G__49693;
i__48792_49680 = G__49694;
continue;
} else {
var vec__48816_49695 = cljs.core.first(seq__48789_49689__$1);
var script_tag_49696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48816_49695,(0),null);
var script_body_49701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48816_49695,(1),null);
eval(script_body_49701);


var G__49706 = cljs.core.next(seq__48789_49689__$1);
var G__49707 = null;
var G__49708 = (0);
var G__49709 = (0);
seq__48789_49677 = G__49706;
chunk__48790_49678 = G__49707;
count__48791_49679 = G__49708;
i__48792_49680 = G__49709;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48820){
var vec__48824 = p__48820;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(1),null);
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
var G__48845 = arguments.length;
switch (G__48845) {
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
var seq__48941 = cljs.core.seq(style_keys);
var chunk__48942 = null;
var count__48943 = (0);
var i__48944 = (0);
while(true){
if((i__48944 < count__48943)){
var it = chunk__48942.cljs$core$IIndexed$_nth$arity$2(null,i__48944);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49713 = seq__48941;
var G__49714 = chunk__48942;
var G__49715 = count__48943;
var G__49716 = (i__48944 + (1));
seq__48941 = G__49713;
chunk__48942 = G__49714;
count__48943 = G__49715;
i__48944 = G__49716;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48941);
if(temp__5753__auto__){
var seq__48941__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48941__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48941__$1);
var G__49717 = cljs.core.chunk_rest(seq__48941__$1);
var G__49718 = c__4638__auto__;
var G__49719 = cljs.core.count(c__4638__auto__);
var G__49720 = (0);
seq__48941 = G__49717;
chunk__48942 = G__49718;
count__48943 = G__49719;
i__48944 = G__49720;
continue;
} else {
var it = cljs.core.first(seq__48941__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49722 = cljs.core.next(seq__48941__$1);
var G__49723 = null;
var G__49724 = (0);
var G__49725 = (0);
seq__48941 = G__49722;
chunk__48942 = G__49723;
count__48943 = G__49724;
i__48944 = G__49725;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k48973,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__48984 = k48973;
var G__48984__$1 = (((G__48984 instanceof cljs.core.Keyword))?G__48984.fqn:null);
switch (G__48984__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48973,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__48987){
var vec__48989 = p__48987;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48989,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48989,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48972){
var self__ = this;
var G__48972__$1 = this;
return (new cljs.core.RecordIter((0),G__48972__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48974,other48975){
var self__ = this;
var this48974__$1 = this;
return (((!((other48975 == null)))) && ((((this48974__$1.constructor === other48975.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48974__$1.x,other48975.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48974__$1.y,other48975.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48974__$1.__extmap,other48975.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k48973){
var self__ = this;
var this__4468__auto____$1 = this;
var G__49017 = k48973;
var G__49017__$1 = (((G__49017 instanceof cljs.core.Keyword))?G__49017.fqn:null);
switch (G__49017__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48973);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__48972){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__49021 = cljs.core.keyword_identical_QMARK_;
var expr__49022 = k__4470__auto__;
if(cljs.core.truth_((pred__49021.cljs$core$IFn$_invoke$arity$2 ? pred__49021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49022) : pred__49021.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49022)))){
return (new shadow.dom.Coordinate(G__48972,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49021.cljs$core$IFn$_invoke$arity$2 ? pred__49021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49022) : pred__49021.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49022)))){
return (new shadow.dom.Coordinate(self__.x,G__48972,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__48972),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__48972){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48972,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48977){
var extmap__4501__auto__ = (function (){var G__49038 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48977,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48977)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49038);
} else {
return G__49038;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48977),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48977),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k49050,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__49061 = k49050;
var G__49061__$1 = (((G__49061 instanceof cljs.core.Keyword))?G__49061.fqn:null);
switch (G__49061__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49050,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__49068){
var vec__49069 = p__49068;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49069,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49069,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49049){
var self__ = this;
var G__49049__$1 = this;
return (new cljs.core.RecordIter((0),G__49049__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49051,other49052){
var self__ = this;
var this49051__$1 = this;
return (((!((other49052 == null)))) && ((((this49051__$1.constructor === other49052.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49051__$1.w,other49052.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49051__$1.h,other49052.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49051__$1.__extmap,other49052.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k49050){
var self__ = this;
var this__4468__auto____$1 = this;
var G__49093 = k49050;
var G__49093__$1 = (((G__49093 instanceof cljs.core.Keyword))?G__49093.fqn:null);
switch (G__49093__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49050);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__49049){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__49094 = cljs.core.keyword_identical_QMARK_;
var expr__49095 = k__4470__auto__;
if(cljs.core.truth_((pred__49094.cljs$core$IFn$_invoke$arity$2 ? pred__49094.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49095) : pred__49094.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49095)))){
return (new shadow.dom.Size(G__49049,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49094.cljs$core$IFn$_invoke$arity$2 ? pred__49094.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49095) : pred__49094.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49095)))){
return (new shadow.dom.Size(self__.w,G__49049,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__49049),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__49049){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49049,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49054){
var extmap__4501__auto__ = (function (){var G__49119 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49054,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49054)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49119);
} else {
return G__49119;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49054),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49054),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__49923 = (i + (1));
var G__49924 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49923;
ret = G__49924;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49155){
var vec__49157 = p__49155;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49157,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49166 = arguments.length;
switch (G__49166) {
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
var G__49938 = ps;
var G__49939 = (i + (1));
el__$1 = G__49938;
i = G__49939;
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
var vec__49272 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49272,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49279_49957 = cljs.core.seq(props);
var chunk__49280_49958 = null;
var count__49281_49959 = (0);
var i__49282_49960 = (0);
while(true){
if((i__49282_49960 < count__49281_49959)){
var vec__49318_49961 = chunk__49280_49958.cljs$core$IIndexed$_nth$arity$2(null,i__49282_49960);
var k_49962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49318_49961,(0),null);
var v_49963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49318_49961,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_49962);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49962),v_49963);


var G__49974 = seq__49279_49957;
var G__49975 = chunk__49280_49958;
var G__49976 = count__49281_49959;
var G__49977 = (i__49282_49960 + (1));
seq__49279_49957 = G__49974;
chunk__49280_49958 = G__49975;
count__49281_49959 = G__49976;
i__49282_49960 = G__49977;
continue;
} else {
var temp__5753__auto___49981 = cljs.core.seq(seq__49279_49957);
if(temp__5753__auto___49981){
var seq__49279_49984__$1 = temp__5753__auto___49981;
if(cljs.core.chunked_seq_QMARK_(seq__49279_49984__$1)){
var c__4638__auto___49987 = cljs.core.chunk_first(seq__49279_49984__$1);
var G__49988 = cljs.core.chunk_rest(seq__49279_49984__$1);
var G__49989 = c__4638__auto___49987;
var G__49990 = cljs.core.count(c__4638__auto___49987);
var G__49991 = (0);
seq__49279_49957 = G__49988;
chunk__49280_49958 = G__49989;
count__49281_49959 = G__49990;
i__49282_49960 = G__49991;
continue;
} else {
var vec__49335_49992 = cljs.core.first(seq__49279_49984__$1);
var k_49993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49335_49992,(0),null);
var v_49994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49335_49992,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_49993);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49993),v_49994);


var G__50000 = cljs.core.next(seq__49279_49984__$1);
var G__50001 = null;
var G__50002 = (0);
var G__50003 = (0);
seq__49279_49957 = G__50000;
chunk__49280_49958 = G__50001;
count__49281_49959 = G__50002;
i__49282_49960 = G__50003;
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
var vec__49350 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49350,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49350,(1),null);
var seq__49353_50009 = cljs.core.seq(node_children);
var chunk__49355_50010 = null;
var count__49356_50011 = (0);
var i__49357_50012 = (0);
while(true){
if((i__49357_50012 < count__49356_50011)){
var child_struct_50016 = chunk__49355_50010.cljs$core$IIndexed$_nth$arity$2(null,i__49357_50012);
if((!((child_struct_50016 == null)))){
if(typeof child_struct_50016 === 'string'){
var text_50018 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50018),child_struct_50016].join(''));
} else {
var children_50019 = shadow.dom.svg_node(child_struct_50016);
if(cljs.core.seq_QMARK_(children_50019)){
var seq__49377_50020 = cljs.core.seq(children_50019);
var chunk__49379_50021 = null;
var count__49380_50022 = (0);
var i__49381_50023 = (0);
while(true){
if((i__49381_50023 < count__49380_50022)){
var child_50026 = chunk__49379_50021.cljs$core$IIndexed$_nth$arity$2(null,i__49381_50023);
if(cljs.core.truth_(child_50026)){
node.appendChild(child_50026);


var G__50028 = seq__49377_50020;
var G__50029 = chunk__49379_50021;
var G__50030 = count__49380_50022;
var G__50031 = (i__49381_50023 + (1));
seq__49377_50020 = G__50028;
chunk__49379_50021 = G__50029;
count__49380_50022 = G__50030;
i__49381_50023 = G__50031;
continue;
} else {
var G__50032 = seq__49377_50020;
var G__50033 = chunk__49379_50021;
var G__50034 = count__49380_50022;
var G__50035 = (i__49381_50023 + (1));
seq__49377_50020 = G__50032;
chunk__49379_50021 = G__50033;
count__49380_50022 = G__50034;
i__49381_50023 = G__50035;
continue;
}
} else {
var temp__5753__auto___50036 = cljs.core.seq(seq__49377_50020);
if(temp__5753__auto___50036){
var seq__49377_50038__$1 = temp__5753__auto___50036;
if(cljs.core.chunked_seq_QMARK_(seq__49377_50038__$1)){
var c__4638__auto___50039 = cljs.core.chunk_first(seq__49377_50038__$1);
var G__50040 = cljs.core.chunk_rest(seq__49377_50038__$1);
var G__50041 = c__4638__auto___50039;
var G__50042 = cljs.core.count(c__4638__auto___50039);
var G__50043 = (0);
seq__49377_50020 = G__50040;
chunk__49379_50021 = G__50041;
count__49380_50022 = G__50042;
i__49381_50023 = G__50043;
continue;
} else {
var child_50048 = cljs.core.first(seq__49377_50038__$1);
if(cljs.core.truth_(child_50048)){
node.appendChild(child_50048);


var G__50051 = cljs.core.next(seq__49377_50038__$1);
var G__50052 = null;
var G__50053 = (0);
var G__50054 = (0);
seq__49377_50020 = G__50051;
chunk__49379_50021 = G__50052;
count__49380_50022 = G__50053;
i__49381_50023 = G__50054;
continue;
} else {
var G__50055 = cljs.core.next(seq__49377_50038__$1);
var G__50056 = null;
var G__50057 = (0);
var G__50058 = (0);
seq__49377_50020 = G__50055;
chunk__49379_50021 = G__50056;
count__49380_50022 = G__50057;
i__49381_50023 = G__50058;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50019);
}
}


var G__50059 = seq__49353_50009;
var G__50060 = chunk__49355_50010;
var G__50061 = count__49356_50011;
var G__50062 = (i__49357_50012 + (1));
seq__49353_50009 = G__50059;
chunk__49355_50010 = G__50060;
count__49356_50011 = G__50061;
i__49357_50012 = G__50062;
continue;
} else {
var G__50067 = seq__49353_50009;
var G__50068 = chunk__49355_50010;
var G__50069 = count__49356_50011;
var G__50070 = (i__49357_50012 + (1));
seq__49353_50009 = G__50067;
chunk__49355_50010 = G__50068;
count__49356_50011 = G__50069;
i__49357_50012 = G__50070;
continue;
}
} else {
var temp__5753__auto___50072 = cljs.core.seq(seq__49353_50009);
if(temp__5753__auto___50072){
var seq__49353_50073__$1 = temp__5753__auto___50072;
if(cljs.core.chunked_seq_QMARK_(seq__49353_50073__$1)){
var c__4638__auto___50074 = cljs.core.chunk_first(seq__49353_50073__$1);
var G__50077 = cljs.core.chunk_rest(seq__49353_50073__$1);
var G__50078 = c__4638__auto___50074;
var G__50079 = cljs.core.count(c__4638__auto___50074);
var G__50080 = (0);
seq__49353_50009 = G__50077;
chunk__49355_50010 = G__50078;
count__49356_50011 = G__50079;
i__49357_50012 = G__50080;
continue;
} else {
var child_struct_50081 = cljs.core.first(seq__49353_50073__$1);
if((!((child_struct_50081 == null)))){
if(typeof child_struct_50081 === 'string'){
var text_50082 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50082),child_struct_50081].join(''));
} else {
var children_50085 = shadow.dom.svg_node(child_struct_50081);
if(cljs.core.seq_QMARK_(children_50085)){
var seq__49393_50086 = cljs.core.seq(children_50085);
var chunk__49395_50087 = null;
var count__49396_50088 = (0);
var i__49397_50089 = (0);
while(true){
if((i__49397_50089 < count__49396_50088)){
var child_50092 = chunk__49395_50087.cljs$core$IIndexed$_nth$arity$2(null,i__49397_50089);
if(cljs.core.truth_(child_50092)){
node.appendChild(child_50092);


var G__50094 = seq__49393_50086;
var G__50095 = chunk__49395_50087;
var G__50096 = count__49396_50088;
var G__50097 = (i__49397_50089 + (1));
seq__49393_50086 = G__50094;
chunk__49395_50087 = G__50095;
count__49396_50088 = G__50096;
i__49397_50089 = G__50097;
continue;
} else {
var G__50098 = seq__49393_50086;
var G__50099 = chunk__49395_50087;
var G__50100 = count__49396_50088;
var G__50101 = (i__49397_50089 + (1));
seq__49393_50086 = G__50098;
chunk__49395_50087 = G__50099;
count__49396_50088 = G__50100;
i__49397_50089 = G__50101;
continue;
}
} else {
var temp__5753__auto___50102__$1 = cljs.core.seq(seq__49393_50086);
if(temp__5753__auto___50102__$1){
var seq__49393_50103__$1 = temp__5753__auto___50102__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49393_50103__$1)){
var c__4638__auto___50104 = cljs.core.chunk_first(seq__49393_50103__$1);
var G__50105 = cljs.core.chunk_rest(seq__49393_50103__$1);
var G__50106 = c__4638__auto___50104;
var G__50107 = cljs.core.count(c__4638__auto___50104);
var G__50108 = (0);
seq__49393_50086 = G__50105;
chunk__49395_50087 = G__50106;
count__49396_50088 = G__50107;
i__49397_50089 = G__50108;
continue;
} else {
var child_50110 = cljs.core.first(seq__49393_50103__$1);
if(cljs.core.truth_(child_50110)){
node.appendChild(child_50110);


var G__50112 = cljs.core.next(seq__49393_50103__$1);
var G__50113 = null;
var G__50114 = (0);
var G__50115 = (0);
seq__49393_50086 = G__50112;
chunk__49395_50087 = G__50113;
count__49396_50088 = G__50114;
i__49397_50089 = G__50115;
continue;
} else {
var G__50117 = cljs.core.next(seq__49393_50103__$1);
var G__50118 = null;
var G__50119 = (0);
var G__50120 = (0);
seq__49393_50086 = G__50117;
chunk__49395_50087 = G__50118;
count__49396_50088 = G__50119;
i__49397_50089 = G__50120;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50085);
}
}


var G__50123 = cljs.core.next(seq__49353_50073__$1);
var G__50124 = null;
var G__50125 = (0);
var G__50126 = (0);
seq__49353_50009 = G__50123;
chunk__49355_50010 = G__50124;
count__49356_50011 = G__50125;
i__49357_50012 = G__50126;
continue;
} else {
var G__50128 = cljs.core.next(seq__49353_50073__$1);
var G__50129 = null;
var G__50130 = (0);
var G__50131 = (0);
seq__49353_50009 = G__50128;
chunk__49355_50010 = G__50129;
count__49356_50011 = G__50130;
i__49357_50012 = G__50131;
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
var len__4818__auto___50137 = arguments.length;
var i__4819__auto___50140 = (0);
while(true){
if((i__4819__auto___50140 < len__4818__auto___50137)){
args__4824__auto__.push((arguments[i__4819__auto___50140]));

var G__50141 = (i__4819__auto___50140 + (1));
i__4819__auto___50140 = G__50141;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49401){
var G__49402 = cljs.core.first(seq49401);
var seq49401__$1 = cljs.core.next(seq49401);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49402,seq49401__$1);
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
var G__49416 = arguments.length;
switch (G__49416) {
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
var c__35759__auto___50144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_49422){
var state_val_49423 = (state_49422[(1)]);
if((state_val_49423 === (1))){
var state_49422__$1 = state_49422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49422__$1,(2),once_or_cleanup);
} else {
if((state_val_49423 === (2))){
var inst_49419 = (state_49422[(2)]);
var inst_49420 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49422__$1 = (function (){var statearr_49424 = state_49422;
(statearr_49424[(7)] = inst_49419);

return statearr_49424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49422__$1,inst_49420);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35546__auto__ = null;
var shadow$dom$state_machine__35546__auto____0 = (function (){
var statearr_49425 = [null,null,null,null,null,null,null,null];
(statearr_49425[(0)] = shadow$dom$state_machine__35546__auto__);

(statearr_49425[(1)] = (1));

return statearr_49425;
});
var shadow$dom$state_machine__35546__auto____1 = (function (state_49422){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_49422);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e49427){var ex__35549__auto__ = e49427;
var statearr_49428_50146 = state_49422;
(statearr_49428_50146[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_49422[(4)]))){
var statearr_49429_50147 = state_49422;
(statearr_49429_50147[(1)] = cljs.core.first((state_49422[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50148 = state_49422;
state_49422 = G__50148;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
shadow$dom$state_machine__35546__auto__ = function(state_49422){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35546__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35546__auto____1.call(this,state_49422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35546__auto____0;
shadow$dom$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35546__auto____1;
return shadow$dom$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_49430 = f__35760__auto__();
(statearr_49430[(6)] = c__35759__auto___50144);

return statearr_49430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
