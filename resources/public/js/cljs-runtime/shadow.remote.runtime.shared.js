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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48008,res){
var map__48010 = p__48008;
var map__48010__$1 = cljs.core.__destructure_map(map__48010);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48011 = res;
var G__48011__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48011,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48011);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48011__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48011__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48014 = arguments.length;
switch (G__48014) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48015,msg,handlers,timeout_after_ms){
var map__48016 = p__48015;
var map__48016__$1 = cljs.core.__destructure_map(map__48016);
var runtime = map__48016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48302 = arguments.length;
var i__4819__auto___48303 = (0);
while(true){
if((i__4819__auto___48303 < len__4818__auto___48302)){
args__4824__auto__.push((arguments[i__4819__auto___48303]));

var G__48304 = (i__4819__auto___48303 + (1));
i__4819__auto___48303 = G__48304;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48027,ev,args){
var map__48028 = p__48027;
var map__48028__$1 = cljs.core.__destructure_map(map__48028);
var runtime = map__48028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48030 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48033 = null;
var count__48034 = (0);
var i__48035 = (0);
while(true){
if((i__48035 < count__48034)){
var ext = chunk__48033.cljs$core$IIndexed$_nth$arity$2(null,i__48035);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48313 = seq__48030;
var G__48314 = chunk__48033;
var G__48315 = count__48034;
var G__48316 = (i__48035 + (1));
seq__48030 = G__48313;
chunk__48033 = G__48314;
count__48034 = G__48315;
i__48035 = G__48316;
continue;
} else {
var G__48317 = seq__48030;
var G__48318 = chunk__48033;
var G__48319 = count__48034;
var G__48320 = (i__48035 + (1));
seq__48030 = G__48317;
chunk__48033 = G__48318;
count__48034 = G__48319;
i__48035 = G__48320;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48030);
if(temp__5753__auto__){
var seq__48030__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48030__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48030__$1);
var G__48326 = cljs.core.chunk_rest(seq__48030__$1);
var G__48327 = c__4638__auto__;
var G__48328 = cljs.core.count(c__4638__auto__);
var G__48329 = (0);
seq__48030 = G__48326;
chunk__48033 = G__48327;
count__48034 = G__48328;
i__48035 = G__48329;
continue;
} else {
var ext = cljs.core.first(seq__48030__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48330 = cljs.core.next(seq__48030__$1);
var G__48331 = null;
var G__48332 = (0);
var G__48333 = (0);
seq__48030 = G__48330;
chunk__48033 = G__48331;
count__48034 = G__48332;
i__48035 = G__48333;
continue;
} else {
var G__48335 = cljs.core.next(seq__48030__$1);
var G__48336 = null;
var G__48337 = (0);
var G__48338 = (0);
seq__48030 = G__48335;
chunk__48033 = G__48336;
count__48034 = G__48337;
i__48035 = G__48338;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48018){
var G__48019 = cljs.core.first(seq48018);
var seq48018__$1 = cljs.core.next(seq48018);
var G__48020 = cljs.core.first(seq48018__$1);
var seq48018__$2 = cljs.core.next(seq48018__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48019,G__48020,seq48018__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48080,p__48081){
var map__48083 = p__48080;
var map__48083__$1 = cljs.core.__destructure_map(map__48083);
var runtime = map__48083__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48083__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48084 = p__48081;
var map__48084__$1 = cljs.core.__destructure_map(map__48084);
var msg = map__48084__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48084__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48088 = cljs.core.deref(state_ref);
var map__48088__$1 = cljs.core.__destructure_map(map__48088);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48088__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48088__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48102){
var map__48105 = p__48102;
var map__48105__$1 = cljs.core.__destructure_map(map__48105);
var runtime = map__48105__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48105__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48111,msg){
var map__48112 = p__48111;
var map__48112__$1 = cljs.core.__destructure_map(map__48112);
var runtime = map__48112__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48134,key,p__48135){
var map__48137 = p__48134;
var map__48137__$1 = cljs.core.__destructure_map(map__48137);
var state = map__48137__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48137__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48138 = p__48135;
var map__48138__$1 = cljs.core.__destructure_map(map__48138);
var spec = map__48138__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48138__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48146,key,spec){
var map__48147 = p__48146;
var map__48147__$1 = cljs.core.__destructure_map(map__48147);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48147__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48151_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48151_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48152_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48152_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48153_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48153_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48154_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48154_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48155_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48155_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48183,key){
var map__48184 = p__48183;
var map__48184__$1 = cljs.core.__destructure_map(map__48184);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48194,msg){
var map__48195 = p__48194;
var map__48195__$1 = cljs.core.__destructure_map(map__48195);
var runtime = map__48195__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48195__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48205,p__48206){
var map__48207 = p__48205;
var map__48207__$1 = cljs.core.__destructure_map(map__48207);
var runtime = map__48207__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48208 = p__48206;
var map__48208__$1 = cljs.core.__destructure_map(map__48208);
var msg = map__48208__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48208__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48208__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__48226 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48228 = null;
var count__48229 = (0);
var i__48230 = (0);
while(true){
if((i__48230 < count__48229)){
var map__48250 = chunk__48228.cljs$core$IIndexed$_nth$arity$2(null,i__48230);
var map__48250__$1 = cljs.core.__destructure_map(map__48250);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48250__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48444 = seq__48226;
var G__48445 = chunk__48228;
var G__48446 = count__48229;
var G__48447 = (i__48230 + (1));
seq__48226 = G__48444;
chunk__48228 = G__48445;
count__48229 = G__48446;
i__48230 = G__48447;
continue;
} else {
var G__48449 = seq__48226;
var G__48450 = chunk__48228;
var G__48451 = count__48229;
var G__48452 = (i__48230 + (1));
seq__48226 = G__48449;
chunk__48228 = G__48450;
count__48229 = G__48451;
i__48230 = G__48452;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48226);
if(temp__5753__auto__){
var seq__48226__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48226__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48226__$1);
var G__48456 = cljs.core.chunk_rest(seq__48226__$1);
var G__48457 = c__4638__auto__;
var G__48458 = cljs.core.count(c__4638__auto__);
var G__48459 = (0);
seq__48226 = G__48456;
chunk__48228 = G__48457;
count__48229 = G__48458;
i__48230 = G__48459;
continue;
} else {
var map__48266 = cljs.core.first(seq__48226__$1);
var map__48266__$1 = cljs.core.__destructure_map(map__48266);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48266__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48460 = cljs.core.next(seq__48226__$1);
var G__48461 = null;
var G__48462 = (0);
var G__48463 = (0);
seq__48226 = G__48460;
chunk__48228 = G__48461;
count__48229 = G__48462;
i__48230 = G__48463;
continue;
} else {
var G__48464 = cljs.core.next(seq__48226__$1);
var G__48465 = null;
var G__48466 = (0);
var G__48467 = (0);
seq__48226 = G__48464;
chunk__48228 = G__48465;
count__48229 = G__48466;
i__48230 = G__48467;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
