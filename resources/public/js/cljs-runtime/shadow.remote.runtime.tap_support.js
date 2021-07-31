goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51719,p__51720){
var map__51721 = p__51719;
var map__51721__$1 = cljs.core.__destructure_map(map__51721);
var svc = map__51721__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51721__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51721__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51721__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51722 = p__51720;
var map__51722__$1 = cljs.core.__destructure_map(map__51722);
var msg = map__51722__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51722__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51727,p__51728){
var map__51729 = p__51727;
var map__51729__$1 = cljs.core.__destructure_map(map__51729);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51729__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51730 = p__51728;
var map__51730__$1 = cljs.core.__destructure_map(map__51730);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51733,p__51734){
var map__51735 = p__51733;
var map__51735__$1 = cljs.core.__destructure_map(map__51735);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51736 = p__51734;
var map__51736__$1 = cljs.core.__destructure_map(map__51736);
var msg = map__51736__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51736__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51738,tid){
var map__51739 = p__51738;
var map__51739__$1 = cljs.core.__destructure_map(map__51739);
var svc = map__51739__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51749 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51750 = null;
var count__51751 = (0);
var i__51752 = (0);
while(true){
if((i__51752 < count__51751)){
var vec__51763 = chunk__51750.cljs$core$IIndexed$_nth$arity$2(null,i__51752);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51763,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51763,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51775 = seq__51749;
var G__51776 = chunk__51750;
var G__51777 = count__51751;
var G__51778 = (i__51752 + (1));
seq__51749 = G__51775;
chunk__51750 = G__51776;
count__51751 = G__51777;
i__51752 = G__51778;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51749);
if(temp__5753__auto__){
var seq__51749__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51749__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51749__$1);
var G__51779 = cljs.core.chunk_rest(seq__51749__$1);
var G__51780 = c__4638__auto__;
var G__51781 = cljs.core.count(c__4638__auto__);
var G__51782 = (0);
seq__51749 = G__51779;
chunk__51750 = G__51780;
count__51751 = G__51781;
i__51752 = G__51782;
continue;
} else {
var vec__51767 = cljs.core.first(seq__51749__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51767,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51767,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51783 = cljs.core.next(seq__51749__$1);
var G__51784 = null;
var G__51785 = (0);
var G__51786 = (0);
seq__51749 = G__51783;
chunk__51750 = G__51784;
count__51751 = G__51785;
i__51752 = G__51786;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51742_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51742_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51743_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51743_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51746_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51746_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51747_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51747_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51770){
var map__51774 = p__51770;
var map__51774__$1 = cljs.core.__destructure_map(map__51774);
var svc = map__51774__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51774__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51774__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
