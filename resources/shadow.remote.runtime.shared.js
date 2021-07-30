var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.datafy.js");
require("./cljs.pprint.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.writer.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.shared.js");

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37724,res){
var map__37725 = p__37724;
var map__37725__$1 = cljs.core.__destructure_map(map__37725);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37726 = res;
var G__37726__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37726,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37726);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37726__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37726__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37728 = arguments.length;
switch (G__37728) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37729,msg,handlers,timeout_after_ms){
var map__37730 = p__37729;
var map__37730__$1 = cljs.core.__destructure_map(map__37730);
var runtime = map__37730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37983 = arguments.length;
var i__4819__auto___37984 = (0);
while(true){
if((i__4819__auto___37984 < len__4818__auto___37983)){
args__4824__auto__.push((arguments[i__4819__auto___37984]));

var G__37985 = (i__4819__auto___37984 + (1));
i__4819__auto___37984 = G__37985;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37742,ev,args){
var map__37743 = p__37742;
var map__37743__$1 = cljs.core.__destructure_map(map__37743);
var runtime = map__37743__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37743__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37747 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37750 = null;
var count__37751 = (0);
var i__37752 = (0);
while(true){
if((i__37752 < count__37751)){
var ext = chunk__37750.cljs$core$IIndexed$_nth$arity$2(null,i__37752);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37999 = seq__37747;
var G__38000 = chunk__37750;
var G__38001 = count__37751;
var G__38002 = (i__37752 + (1));
seq__37747 = G__37999;
chunk__37750 = G__38000;
count__37751 = G__38001;
i__37752 = G__38002;
continue;
} else {
var G__38003 = seq__37747;
var G__38004 = chunk__37750;
var G__38005 = count__37751;
var G__38006 = (i__37752 + (1));
seq__37747 = G__38003;
chunk__37750 = G__38004;
count__37751 = G__38005;
i__37752 = G__38006;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37747);
if(temp__5753__auto__){
var seq__37747__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37747__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37747__$1);
var G__38009 = cljs.core.chunk_rest(seq__37747__$1);
var G__38010 = c__4638__auto__;
var G__38011 = cljs.core.count(c__4638__auto__);
var G__38012 = (0);
seq__37747 = G__38009;
chunk__37750 = G__38010;
count__37751 = G__38011;
i__37752 = G__38012;
continue;
} else {
var ext = cljs.core.first(seq__37747__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38013 = cljs.core.next(seq__37747__$1);
var G__38014 = null;
var G__38015 = (0);
var G__38016 = (0);
seq__37747 = G__38013;
chunk__37750 = G__38014;
count__37751 = G__38015;
i__37752 = G__38016;
continue;
} else {
var G__38017 = cljs.core.next(seq__37747__$1);
var G__38018 = null;
var G__38019 = (0);
var G__38020 = (0);
seq__37747 = G__38017;
chunk__37750 = G__38018;
count__37751 = G__38019;
i__37752 = G__38020;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37734){
var G__37736 = cljs.core.first(seq37734);
var seq37734__$1 = cljs.core.next(seq37734);
var G__37737 = cljs.core.first(seq37734__$1);
var seq37734__$2 = cljs.core.next(seq37734__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37736,G__37737,seq37734__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37782,p__37783){
var map__37784 = p__37782;
var map__37784__$1 = cljs.core.__destructure_map(map__37784);
var runtime = map__37784__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37784__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37785 = p__37783;
var map__37785__$1 = cljs.core.__destructure_map(map__37785);
var msg = map__37785__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37787 = cljs.core.deref(state_ref);
var map__37787__$1 = cljs.core.__destructure_map(map__37787);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37787__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37787__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37790){
var map__37791 = p__37790;
var map__37791__$1 = cljs.core.__destructure_map(map__37791);
var runtime = map__37791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37796,msg){
var map__37797 = p__37796;
var map__37797__$1 = cljs.core.__destructure_map(map__37797);
var runtime = map__37797__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37804,key,p__37805){
var map__37807 = p__37804;
var map__37807__$1 = cljs.core.__destructure_map(map__37807);
var state = map__37807__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37807__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37808 = p__37805;
var map__37808__$1 = cljs.core.__destructure_map(map__37808);
var spec = map__37808__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37811,key,spec){
var map__37812 = p__37811;
var map__37812__$1 = cljs.core.__destructure_map(map__37812);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37816_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37816_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37817_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37817_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37818_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37818_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37819_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37819_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37829_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37829_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37843,key){
var map__37844 = p__37843;
var map__37844__$1 = cljs.core.__destructure_map(map__37844);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37846,msg){
var map__37847 = p__37846;
var map__37847__$1 = cljs.core.__destructure_map(map__37847);
var runtime = map__37847__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37847__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37851,p__37852){
var map__37853 = p__37851;
var map__37853__$1 = cljs.core.__destructure_map(map__37853);
var runtime = map__37853__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37853__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37854 = p__37852;
var map__37854__$1 = cljs.core.__destructure_map(map__37854);
var msg = map__37854__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37854__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37854__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37862 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37864 = null;
var count__37865 = (0);
var i__37866 = (0);
while(true){
if((i__37866 < count__37865)){
var map__37958 = chunk__37864.cljs$core$IIndexed$_nth$arity$2(null,i__37866);
var map__37958__$1 = cljs.core.__destructure_map(map__37958);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38036 = seq__37862;
var G__38037 = chunk__37864;
var G__38038 = count__37865;
var G__38039 = (i__37866 + (1));
seq__37862 = G__38036;
chunk__37864 = G__38037;
count__37865 = G__38038;
i__37866 = G__38039;
continue;
} else {
var G__38040 = seq__37862;
var G__38041 = chunk__37864;
var G__38042 = count__37865;
var G__38043 = (i__37866 + (1));
seq__37862 = G__38040;
chunk__37864 = G__38041;
count__37865 = G__38042;
i__37866 = G__38043;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37862);
if(temp__5753__auto__){
var seq__37862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37862__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37862__$1);
var G__38045 = cljs.core.chunk_rest(seq__37862__$1);
var G__38046 = c__4638__auto__;
var G__38047 = cljs.core.count(c__4638__auto__);
var G__38048 = (0);
seq__37862 = G__38045;
chunk__37864 = G__38046;
count__37865 = G__38047;
i__37866 = G__38048;
continue;
} else {
var map__37965 = cljs.core.first(seq__37862__$1);
var map__37965__$1 = cljs.core.__destructure_map(map__37965);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37965__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38049 = cljs.core.next(seq__37862__$1);
var G__38050 = null;
var G__38051 = (0);
var G__38052 = (0);
seq__37862 = G__38049;
chunk__37864 = G__38050;
count__37865 = G__38051;
i__37866 = G__38052;
continue;
} else {
var G__38053 = cljs.core.next(seq__37862__$1);
var G__38054 = null;
var G__38055 = (0);
var G__38056 = (0);
seq__37862 = G__38053;
chunk__37864 = G__38054;
count__37865 = G__38055;
i__37866 = G__38056;
continue;
}
}
} else {
return null;
}
}
break;
}
});
Object.defineProperty(module.exports, "request_supported_ops", { enumerable: false, get: function() { return shadow.remote.runtime.shared.request_supported_ops; } });
Object.defineProperty(module.exports, "unhandled_client_not_found", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_client_not_found; } });
Object.defineProperty(module.exports, "trigger_BANG_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.trigger_BANG_; } });
Object.defineProperty(module.exports, "add_defaults", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_defaults; } });
Object.defineProperty(module.exports, "reply", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply; } });
Object.defineProperty(module.exports, "add_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension_STAR_; } });
Object.defineProperty(module.exports, "ping", { enumerable: false, get: function() { return shadow.remote.runtime.shared.ping; } });
Object.defineProperty(module.exports, "del_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension; } });
Object.defineProperty(module.exports, "add_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return shadow.remote.runtime.shared.now; } });
Object.defineProperty(module.exports, "welcome", { enumerable: false, get: function() { return shadow.remote.runtime.shared.welcome; } });
Object.defineProperty(module.exports, "call", { enumerable: false, get: function() { return shadow.remote.runtime.shared.call; } });
Object.defineProperty(module.exports, "unhandled_call_result", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_call_result; } });
Object.defineProperty(module.exports, "process", { enumerable: false, get: function() { return shadow.remote.runtime.shared.process; } });
Object.defineProperty(module.exports, "init_state", { enumerable: false, get: function() { return shadow.remote.runtime.shared.init_state; } });
Object.defineProperty(module.exports, "unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_op; } });
Object.defineProperty(module.exports, "run_on_idle", { enumerable: false, get: function() { return shadow.remote.runtime.shared.run_on_idle; } });
Object.defineProperty(module.exports, "relay_msg", { enumerable: false, get: function() { return shadow.remote.runtime.shared.relay_msg; } });
Object.defineProperty(module.exports, "unknown_relay_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_relay_op; } });
Object.defineProperty(module.exports, "get_client_id", { enumerable: false, get: function() { return shadow.remote.runtime.shared.get_client_id; } });
Object.defineProperty(module.exports, "del_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension_STAR_; } });
Object.defineProperty(module.exports, "reply_unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply_unknown_op; } });
//# sourceMappingURL=shadow.remote.runtime.shared.js.map
