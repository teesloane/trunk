var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
require("./shadow.remote.runtime.obj_support.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.tap_support.js");

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39045,p__39046){
var map__39047 = p__39045;
var map__39047__$1 = cljs.core.__destructure_map(map__39047);
var svc = map__39047__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39048 = p__39046;
var map__39048__$1 = cljs.core.__destructure_map(map__39048);
var msg = map__39048__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39048__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39048__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39048__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39048__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39056,p__39057){
var map__39058 = p__39056;
var map__39058__$1 = cljs.core.__destructure_map(map__39058);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39058__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39059 = p__39057;
var map__39059__$1 = cljs.core.__destructure_map(map__39059);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39062,p__39063){
var map__39065 = p__39062;
var map__39065__$1 = cljs.core.__destructure_map(map__39065);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39065__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39065__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39066 = p__39063;
var map__39066__$1 = cljs.core.__destructure_map(map__39066);
var msg = map__39066__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39066__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39082,tid){
var map__39083 = p__39082;
var map__39083__$1 = cljs.core.__destructure_map(map__39083);
var svc = map__39083__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39104 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39105 = null;
var count__39106 = (0);
var i__39107 = (0);
while(true){
if((i__39107 < count__39106)){
var vec__39117 = chunk__39105.cljs$core$IIndexed$_nth$arity$2(null,i__39107);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39117,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39117,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39154 = seq__39104;
var G__39155 = chunk__39105;
var G__39156 = count__39106;
var G__39157 = (i__39107 + (1));
seq__39104 = G__39154;
chunk__39105 = G__39155;
count__39106 = G__39156;
i__39107 = G__39157;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39104);
if(temp__5753__auto__){
var seq__39104__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39104__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39104__$1);
var G__39158 = cljs.core.chunk_rest(seq__39104__$1);
var G__39159 = c__4638__auto__;
var G__39160 = cljs.core.count(c__4638__auto__);
var G__39161 = (0);
seq__39104 = G__39158;
chunk__39105 = G__39159;
count__39106 = G__39160;
i__39107 = G__39161;
continue;
} else {
var vec__39122 = cljs.core.first(seq__39104__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39162 = cljs.core.next(seq__39104__$1);
var G__39163 = null;
var G__39164 = (0);
var G__39165 = (0);
seq__39104 = G__39162;
chunk__39105 = G__39163;
count__39106 = G__39164;
i__39107 = G__39165;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39090_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39090_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39091_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39091_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39092_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39092_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39093_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39093_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39137){
var map__39138 = p__39137;
var map__39138__$1 = cljs.core.__destructure_map(map__39138);
var svc = map__39138__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39138__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});
Object.defineProperty(module.exports, "tap_subscribe", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tap_subscribe; } });
Object.defineProperty(module.exports, "tap_unsubscribe", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tap_unsubscribe; } });
Object.defineProperty(module.exports, "request_tap_history", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.request_tap_history; } });
Object.defineProperty(module.exports, "tool_disconnect", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tool_disconnect; } });
Object.defineProperty(module.exports, "start", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.start; } });
Object.defineProperty(module.exports, "stop", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.stop; } });
//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
