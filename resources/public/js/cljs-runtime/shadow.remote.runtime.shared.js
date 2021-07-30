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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36080,res){
var map__36082 = p__36080;
var map__36082__$1 = cljs.core.__destructure_map(map__36082);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36082__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36082__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36090 = res;
var G__36090__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36090,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36090);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36090__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36090__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36096 = arguments.length;
switch (G__36096) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36101,msg,handlers,timeout_after_ms){
var map__36102 = p__36101;
var map__36102__$1 = cljs.core.__destructure_map(map__36102);
var runtime = map__36102__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36102__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36290 = arguments.length;
var i__4819__auto___36291 = (0);
while(true){
if((i__4819__auto___36291 < len__4818__auto___36290)){
args__4824__auto__.push((arguments[i__4819__auto___36291]));

var G__36292 = (i__4819__auto___36291 + (1));
i__4819__auto___36291 = G__36292;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36135,ev,args){
var map__36136 = p__36135;
var map__36136__$1 = cljs.core.__destructure_map(map__36136);
var runtime = map__36136__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36137 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36140 = null;
var count__36141 = (0);
var i__36142 = (0);
while(true){
if((i__36142 < count__36141)){
var ext = chunk__36140.cljs$core$IIndexed$_nth$arity$2(null,i__36142);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36299 = seq__36137;
var G__36300 = chunk__36140;
var G__36301 = count__36141;
var G__36302 = (i__36142 + (1));
seq__36137 = G__36299;
chunk__36140 = G__36300;
count__36141 = G__36301;
i__36142 = G__36302;
continue;
} else {
var G__36307 = seq__36137;
var G__36308 = chunk__36140;
var G__36309 = count__36141;
var G__36310 = (i__36142 + (1));
seq__36137 = G__36307;
chunk__36140 = G__36308;
count__36141 = G__36309;
i__36142 = G__36310;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36137);
if(temp__5753__auto__){
var seq__36137__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36137__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36137__$1);
var G__36316 = cljs.core.chunk_rest(seq__36137__$1);
var G__36317 = c__4638__auto__;
var G__36318 = cljs.core.count(c__4638__auto__);
var G__36319 = (0);
seq__36137 = G__36316;
chunk__36140 = G__36317;
count__36141 = G__36318;
i__36142 = G__36319;
continue;
} else {
var ext = cljs.core.first(seq__36137__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36326 = cljs.core.next(seq__36137__$1);
var G__36327 = null;
var G__36328 = (0);
var G__36329 = (0);
seq__36137 = G__36326;
chunk__36140 = G__36327;
count__36141 = G__36328;
i__36142 = G__36329;
continue;
} else {
var G__36330 = cljs.core.next(seq__36137__$1);
var G__36331 = null;
var G__36332 = (0);
var G__36334 = (0);
seq__36137 = G__36330;
chunk__36140 = G__36331;
count__36141 = G__36332;
i__36142 = G__36334;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36120){
var G__36121 = cljs.core.first(seq36120);
var seq36120__$1 = cljs.core.next(seq36120);
var G__36122 = cljs.core.first(seq36120__$1);
var seq36120__$2 = cljs.core.next(seq36120__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36121,G__36122,seq36120__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36163,p__36164){
var map__36166 = p__36163;
var map__36166__$1 = cljs.core.__destructure_map(map__36166);
var runtime = map__36166__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36166__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36167 = p__36164;
var map__36167__$1 = cljs.core.__destructure_map(map__36167);
var msg = map__36167__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36167__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36170 = cljs.core.deref(state_ref);
var map__36170__$1 = cljs.core.__destructure_map(map__36170);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36175){
var map__36176 = p__36175;
var map__36176__$1 = cljs.core.__destructure_map(map__36176);
var runtime = map__36176__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36181,msg){
var map__36182 = p__36181;
var map__36182__$1 = cljs.core.__destructure_map(map__36182);
var runtime = map__36182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36196,key,p__36197){
var map__36198 = p__36196;
var map__36198__$1 = cljs.core.__destructure_map(map__36198);
var state = map__36198__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36199 = p__36197;
var map__36199__$1 = cljs.core.__destructure_map(map__36199);
var spec = map__36199__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36206,key,spec){
var map__36207 = p__36206;
var map__36207__$1 = cljs.core.__destructure_map(map__36207);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36208_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36208_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36209_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36209_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36210_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36210_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36211_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36211_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36212_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36212_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36219,key){
var map__36220 = p__36219;
var map__36220__$1 = cljs.core.__destructure_map(map__36220);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36221,msg){
var map__36222 = p__36221;
var map__36222__$1 = cljs.core.__destructure_map(map__36222);
var runtime = map__36222__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36246,p__36247){
var map__36248 = p__36246;
var map__36248__$1 = cljs.core.__destructure_map(map__36248);
var runtime = map__36248__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36248__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36249 = p__36247;
var map__36249__$1 = cljs.core.__destructure_map(map__36249);
var msg = map__36249__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36249__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36249__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__36266 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36268 = null;
var count__36269 = (0);
var i__36270 = (0);
while(true){
if((i__36270 < count__36269)){
var map__36286 = chunk__36268.cljs$core$IIndexed$_nth$arity$2(null,i__36270);
var map__36286__$1 = cljs.core.__destructure_map(map__36286);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36423 = seq__36266;
var G__36424 = chunk__36268;
var G__36425 = count__36269;
var G__36426 = (i__36270 + (1));
seq__36266 = G__36423;
chunk__36268 = G__36424;
count__36269 = G__36425;
i__36270 = G__36426;
continue;
} else {
var G__36428 = seq__36266;
var G__36429 = chunk__36268;
var G__36430 = count__36269;
var G__36431 = (i__36270 + (1));
seq__36266 = G__36428;
chunk__36268 = G__36429;
count__36269 = G__36430;
i__36270 = G__36431;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36266);
if(temp__5753__auto__){
var seq__36266__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36266__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36266__$1);
var G__36441 = cljs.core.chunk_rest(seq__36266__$1);
var G__36442 = c__4638__auto__;
var G__36443 = cljs.core.count(c__4638__auto__);
var G__36444 = (0);
seq__36266 = G__36441;
chunk__36268 = G__36442;
count__36269 = G__36443;
i__36270 = G__36444;
continue;
} else {
var map__36287 = cljs.core.first(seq__36266__$1);
var map__36287__$1 = cljs.core.__destructure_map(map__36287);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36287__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36445 = cljs.core.next(seq__36266__$1);
var G__36446 = null;
var G__36447 = (0);
var G__36448 = (0);
seq__36266 = G__36445;
chunk__36268 = G__36446;
count__36269 = G__36447;
i__36270 = G__36448;
continue;
} else {
var G__36456 = cljs.core.next(seq__36266__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__36266 = G__36456;
chunk__36268 = G__36457;
count__36269 = G__36458;
i__36270 = G__36459;
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
