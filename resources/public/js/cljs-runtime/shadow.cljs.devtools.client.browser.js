goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42291 = arguments.length;
var i__4819__auto___42292 = (0);
while(true){
if((i__4819__auto___42292 < len__4818__auto___42291)){
args__4824__auto__.push((arguments[i__4819__auto___42292]));

var G__42293 = (i__4819__auto___42292 + (1));
i__4819__auto___42292 = G__42293;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41990){
var G__41991 = cljs.core.first(seq41990);
var seq41990__$1 = cljs.core.next(seq41990);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41991,seq41990__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41994 = cljs.core.seq(sources);
var chunk__41995 = null;
var count__41996 = (0);
var i__41997 = (0);
while(true){
if((i__41997 < count__41996)){
var map__42014 = chunk__41995.cljs$core$IIndexed$_nth$arity$2(null,i__41997);
var map__42014__$1 = cljs.core.__destructure_map(map__42014);
var src = map__42014__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42015){var e_42294 = e42015;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42294);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42294.message)].join('')));
}

var G__42295 = seq__41994;
var G__42296 = chunk__41995;
var G__42297 = count__41996;
var G__42298 = (i__41997 + (1));
seq__41994 = G__42295;
chunk__41995 = G__42296;
count__41996 = G__42297;
i__41997 = G__42298;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41994);
if(temp__5753__auto__){
var seq__41994__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41994__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41994__$1);
var G__42299 = cljs.core.chunk_rest(seq__41994__$1);
var G__42300 = c__4638__auto__;
var G__42301 = cljs.core.count(c__4638__auto__);
var G__42302 = (0);
seq__41994 = G__42299;
chunk__41995 = G__42300;
count__41996 = G__42301;
i__41997 = G__42302;
continue;
} else {
var map__42016 = cljs.core.first(seq__41994__$1);
var map__42016__$1 = cljs.core.__destructure_map(map__42016);
var src = map__42016__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42017){var e_42303 = e42017;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42303);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42303.message)].join('')));
}

var G__42304 = cljs.core.next(seq__41994__$1);
var G__42305 = null;
var G__42306 = (0);
var G__42307 = (0);
seq__41994 = G__42304;
chunk__41995 = G__42305;
count__41996 = G__42306;
i__41997 = G__42307;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42026 = cljs.core.seq(js_requires);
var chunk__42027 = null;
var count__42028 = (0);
var i__42029 = (0);
while(true){
if((i__42029 < count__42028)){
var js_ns = chunk__42027.cljs$core$IIndexed$_nth$arity$2(null,i__42029);
var require_str_42308 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42308);


var G__42309 = seq__42026;
var G__42310 = chunk__42027;
var G__42311 = count__42028;
var G__42312 = (i__42029 + (1));
seq__42026 = G__42309;
chunk__42027 = G__42310;
count__42028 = G__42311;
i__42029 = G__42312;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42026);
if(temp__5753__auto__){
var seq__42026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42026__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42026__$1);
var G__42313 = cljs.core.chunk_rest(seq__42026__$1);
var G__42314 = c__4638__auto__;
var G__42315 = cljs.core.count(c__4638__auto__);
var G__42316 = (0);
seq__42026 = G__42313;
chunk__42027 = G__42314;
count__42028 = G__42315;
i__42029 = G__42316;
continue;
} else {
var js_ns = cljs.core.first(seq__42026__$1);
var require_str_42317 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42317);


var G__42318 = cljs.core.next(seq__42026__$1);
var G__42319 = null;
var G__42320 = (0);
var G__42321 = (0);
seq__42026 = G__42318;
chunk__42027 = G__42319;
count__42028 = G__42320;
i__42029 = G__42321;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42037){
var map__42039 = p__42037;
var map__42039__$1 = cljs.core.__destructure_map(map__42039);
var msg = map__42039__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42039__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42039__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42042(s__42043){
return (new cljs.core.LazySeq(null,(function (){
var s__42043__$1 = s__42043;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42043__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__42050 = cljs.core.first(xs__6308__auto__);
var map__42050__$1 = cljs.core.__destructure_map(map__42050);
var src = map__42050__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42050__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42050__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__42043__$1,map__42050,map__42050__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42039,map__42039__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42042_$_iter__42044(s__42045){
return (new cljs.core.LazySeq(null,((function (s__42043__$1,map__42050,map__42050__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42039,map__42039__$1,msg,info,reload_info){
return (function (){
var s__42045__$1 = s__42045;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42045__$1);
if(temp__5753__auto____$1){
var s__42045__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42045__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42045__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42047 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42046 = (0);
while(true){
if((i__42046 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__42046);
cljs.core.chunk_append(b__42047,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42322 = (i__42046 + (1));
i__42046 = G__42322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42047),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42042_$_iter__42044(cljs.core.chunk_rest(s__42045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42047),null);
}
} else {
var warning = cljs.core.first(s__42045__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42042_$_iter__42044(cljs.core.rest(s__42045__$2)));
}
} else {
return null;
}
break;
}
});})(s__42043__$1,map__42050,map__42050__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42039,map__42039__$1,msg,info,reload_info))
,null,null));
});})(s__42043__$1,map__42050,map__42050__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42039,map__42039__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42042(cljs.core.rest(s__42043__$1)));
} else {
var G__42323 = cljs.core.rest(s__42043__$1);
s__42043__$1 = G__42323;
continue;
}
} else {
var G__42324 = cljs.core.rest(s__42043__$1);
s__42043__$1 = G__42324;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42053_42325 = cljs.core.seq(warnings);
var chunk__42054_42326 = null;
var count__42055_42327 = (0);
var i__42056_42328 = (0);
while(true){
if((i__42056_42328 < count__42055_42327)){
var map__42062_42329 = chunk__42054_42326.cljs$core$IIndexed$_nth$arity$2(null,i__42056_42328);
var map__42062_42330__$1 = cljs.core.__destructure_map(map__42062_42329);
var w_42331 = map__42062_42330__$1;
var msg_42332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42062_42330__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42062_42330__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42062_42330__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42062_42330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42335)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42333),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42334),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42332__$1)].join(''));


var G__42336 = seq__42053_42325;
var G__42337 = chunk__42054_42326;
var G__42338 = count__42055_42327;
var G__42339 = (i__42056_42328 + (1));
seq__42053_42325 = G__42336;
chunk__42054_42326 = G__42337;
count__42055_42327 = G__42338;
i__42056_42328 = G__42339;
continue;
} else {
var temp__5753__auto___42340 = cljs.core.seq(seq__42053_42325);
if(temp__5753__auto___42340){
var seq__42053_42341__$1 = temp__5753__auto___42340;
if(cljs.core.chunked_seq_QMARK_(seq__42053_42341__$1)){
var c__4638__auto___42342 = cljs.core.chunk_first(seq__42053_42341__$1);
var G__42343 = cljs.core.chunk_rest(seq__42053_42341__$1);
var G__42344 = c__4638__auto___42342;
var G__42345 = cljs.core.count(c__4638__auto___42342);
var G__42346 = (0);
seq__42053_42325 = G__42343;
chunk__42054_42326 = G__42344;
count__42055_42327 = G__42345;
i__42056_42328 = G__42346;
continue;
} else {
var map__42064_42347 = cljs.core.first(seq__42053_42341__$1);
var map__42064_42348__$1 = cljs.core.__destructure_map(map__42064_42347);
var w_42349 = map__42064_42348__$1;
var msg_42350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42348__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064_42348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42353)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42351),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42352),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42350__$1)].join(''));


var G__42354 = cljs.core.next(seq__42053_42341__$1);
var G__42355 = null;
var G__42356 = (0);
var G__42357 = (0);
seq__42053_42325 = G__42354;
chunk__42054_42326 = G__42355;
count__42055_42327 = G__42356;
i__42056_42328 = G__42357;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42035_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42035_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42085){
var map__42087 = p__42085;
var map__42087__$1 = cljs.core.__destructure_map(map__42087);
var msg = map__42087__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42087__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42088 = cljs.core.seq(updates);
var chunk__42090 = null;
var count__42091 = (0);
var i__42092 = (0);
while(true){
if((i__42092 < count__42091)){
var path = chunk__42090.cljs$core$IIndexed$_nth$arity$2(null,i__42092);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42153_42358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42157_42359 = null;
var count__42158_42360 = (0);
var i__42159_42361 = (0);
while(true){
if((i__42159_42361 < count__42158_42360)){
var node_42362 = chunk__42157_42359.cljs$core$IIndexed$_nth$arity$2(null,i__42159_42361);
if(cljs.core.not(node_42362.shadow$old)){
var path_match_42363 = shadow.cljs.devtools.client.browser.match_paths(node_42362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42363)){
var new_link_42364 = (function (){var G__42171 = node_42362.cloneNode(true);
G__42171.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42171;
})();
(node_42362.shadow$old = true);

(new_link_42364.onload = ((function (seq__42153_42358,chunk__42157_42359,count__42158_42360,i__42159_42361,seq__42088,chunk__42090,count__42091,i__42092,new_link_42364,path_match_42363,node_42362,path,map__42087,map__42087__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42362);
});})(seq__42153_42358,chunk__42157_42359,count__42158_42360,i__42159_42361,seq__42088,chunk__42090,count__42091,i__42092,new_link_42364,path_match_42363,node_42362,path,map__42087,map__42087__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42363], 0));

goog.dom.insertSiblingAfter(new_link_42364,node_42362);


var G__42365 = seq__42153_42358;
var G__42366 = chunk__42157_42359;
var G__42367 = count__42158_42360;
var G__42368 = (i__42159_42361 + (1));
seq__42153_42358 = G__42365;
chunk__42157_42359 = G__42366;
count__42158_42360 = G__42367;
i__42159_42361 = G__42368;
continue;
} else {
var G__42369 = seq__42153_42358;
var G__42370 = chunk__42157_42359;
var G__42371 = count__42158_42360;
var G__42372 = (i__42159_42361 + (1));
seq__42153_42358 = G__42369;
chunk__42157_42359 = G__42370;
count__42158_42360 = G__42371;
i__42159_42361 = G__42372;
continue;
}
} else {
var G__42373 = seq__42153_42358;
var G__42374 = chunk__42157_42359;
var G__42375 = count__42158_42360;
var G__42376 = (i__42159_42361 + (1));
seq__42153_42358 = G__42373;
chunk__42157_42359 = G__42374;
count__42158_42360 = G__42375;
i__42159_42361 = G__42376;
continue;
}
} else {
var temp__5753__auto___42377 = cljs.core.seq(seq__42153_42358);
if(temp__5753__auto___42377){
var seq__42153_42378__$1 = temp__5753__auto___42377;
if(cljs.core.chunked_seq_QMARK_(seq__42153_42378__$1)){
var c__4638__auto___42379 = cljs.core.chunk_first(seq__42153_42378__$1);
var G__42380 = cljs.core.chunk_rest(seq__42153_42378__$1);
var G__42381 = c__4638__auto___42379;
var G__42382 = cljs.core.count(c__4638__auto___42379);
var G__42383 = (0);
seq__42153_42358 = G__42380;
chunk__42157_42359 = G__42381;
count__42158_42360 = G__42382;
i__42159_42361 = G__42383;
continue;
} else {
var node_42384 = cljs.core.first(seq__42153_42378__$1);
if(cljs.core.not(node_42384.shadow$old)){
var path_match_42385 = shadow.cljs.devtools.client.browser.match_paths(node_42384.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42385)){
var new_link_42386 = (function (){var G__42174 = node_42384.cloneNode(true);
G__42174.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42385),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42174;
})();
(node_42384.shadow$old = true);

(new_link_42386.onload = ((function (seq__42153_42358,chunk__42157_42359,count__42158_42360,i__42159_42361,seq__42088,chunk__42090,count__42091,i__42092,new_link_42386,path_match_42385,node_42384,seq__42153_42378__$1,temp__5753__auto___42377,path,map__42087,map__42087__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42384);
});})(seq__42153_42358,chunk__42157_42359,count__42158_42360,i__42159_42361,seq__42088,chunk__42090,count__42091,i__42092,new_link_42386,path_match_42385,node_42384,seq__42153_42378__$1,temp__5753__auto___42377,path,map__42087,map__42087__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42385], 0));

goog.dom.insertSiblingAfter(new_link_42386,node_42384);


var G__42387 = cljs.core.next(seq__42153_42378__$1);
var G__42388 = null;
var G__42389 = (0);
var G__42390 = (0);
seq__42153_42358 = G__42387;
chunk__42157_42359 = G__42388;
count__42158_42360 = G__42389;
i__42159_42361 = G__42390;
continue;
} else {
var G__42391 = cljs.core.next(seq__42153_42378__$1);
var G__42392 = null;
var G__42393 = (0);
var G__42394 = (0);
seq__42153_42358 = G__42391;
chunk__42157_42359 = G__42392;
count__42158_42360 = G__42393;
i__42159_42361 = G__42394;
continue;
}
} else {
var G__42395 = cljs.core.next(seq__42153_42378__$1);
var G__42396 = null;
var G__42397 = (0);
var G__42398 = (0);
seq__42153_42358 = G__42395;
chunk__42157_42359 = G__42396;
count__42158_42360 = G__42397;
i__42159_42361 = G__42398;
continue;
}
}
} else {
}
}
break;
}


var G__42399 = seq__42088;
var G__42400 = chunk__42090;
var G__42401 = count__42091;
var G__42402 = (i__42092 + (1));
seq__42088 = G__42399;
chunk__42090 = G__42400;
count__42091 = G__42401;
i__42092 = G__42402;
continue;
} else {
var G__42403 = seq__42088;
var G__42404 = chunk__42090;
var G__42405 = count__42091;
var G__42406 = (i__42092 + (1));
seq__42088 = G__42403;
chunk__42090 = G__42404;
count__42091 = G__42405;
i__42092 = G__42406;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42088);
if(temp__5753__auto__){
var seq__42088__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42088__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42088__$1);
var G__42407 = cljs.core.chunk_rest(seq__42088__$1);
var G__42408 = c__4638__auto__;
var G__42409 = cljs.core.count(c__4638__auto__);
var G__42410 = (0);
seq__42088 = G__42407;
chunk__42090 = G__42408;
count__42091 = G__42409;
i__42092 = G__42410;
continue;
} else {
var path = cljs.core.first(seq__42088__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42179_42411 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42183_42412 = null;
var count__42184_42413 = (0);
var i__42185_42414 = (0);
while(true){
if((i__42185_42414 < count__42184_42413)){
var node_42415 = chunk__42183_42412.cljs$core$IIndexed$_nth$arity$2(null,i__42185_42414);
if(cljs.core.not(node_42415.shadow$old)){
var path_match_42416 = shadow.cljs.devtools.client.browser.match_paths(node_42415.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42416)){
var new_link_42417 = (function (){var G__42203 = node_42415.cloneNode(true);
G__42203.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42416),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42203;
})();
(node_42415.shadow$old = true);

(new_link_42417.onload = ((function (seq__42179_42411,chunk__42183_42412,count__42184_42413,i__42185_42414,seq__42088,chunk__42090,count__42091,i__42092,new_link_42417,path_match_42416,node_42415,path,seq__42088__$1,temp__5753__auto__,map__42087,map__42087__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42415);
});})(seq__42179_42411,chunk__42183_42412,count__42184_42413,i__42185_42414,seq__42088,chunk__42090,count__42091,i__42092,new_link_42417,path_match_42416,node_42415,path,seq__42088__$1,temp__5753__auto__,map__42087,map__42087__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42416], 0));

goog.dom.insertSiblingAfter(new_link_42417,node_42415);


var G__42418 = seq__42179_42411;
var G__42419 = chunk__42183_42412;
var G__42420 = count__42184_42413;
var G__42421 = (i__42185_42414 + (1));
seq__42179_42411 = G__42418;
chunk__42183_42412 = G__42419;
count__42184_42413 = G__42420;
i__42185_42414 = G__42421;
continue;
} else {
var G__42422 = seq__42179_42411;
var G__42423 = chunk__42183_42412;
var G__42424 = count__42184_42413;
var G__42425 = (i__42185_42414 + (1));
seq__42179_42411 = G__42422;
chunk__42183_42412 = G__42423;
count__42184_42413 = G__42424;
i__42185_42414 = G__42425;
continue;
}
} else {
var G__42426 = seq__42179_42411;
var G__42427 = chunk__42183_42412;
var G__42428 = count__42184_42413;
var G__42429 = (i__42185_42414 + (1));
seq__42179_42411 = G__42426;
chunk__42183_42412 = G__42427;
count__42184_42413 = G__42428;
i__42185_42414 = G__42429;
continue;
}
} else {
var temp__5753__auto___42430__$1 = cljs.core.seq(seq__42179_42411);
if(temp__5753__auto___42430__$1){
var seq__42179_42431__$1 = temp__5753__auto___42430__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42179_42431__$1)){
var c__4638__auto___42432 = cljs.core.chunk_first(seq__42179_42431__$1);
var G__42433 = cljs.core.chunk_rest(seq__42179_42431__$1);
var G__42434 = c__4638__auto___42432;
var G__42435 = cljs.core.count(c__4638__auto___42432);
var G__42436 = (0);
seq__42179_42411 = G__42433;
chunk__42183_42412 = G__42434;
count__42184_42413 = G__42435;
i__42185_42414 = G__42436;
continue;
} else {
var node_42437 = cljs.core.first(seq__42179_42431__$1);
if(cljs.core.not(node_42437.shadow$old)){
var path_match_42438 = shadow.cljs.devtools.client.browser.match_paths(node_42437.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42438)){
var new_link_42439 = (function (){var G__42221 = node_42437.cloneNode(true);
G__42221.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42438),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42221;
})();
(node_42437.shadow$old = true);

(new_link_42439.onload = ((function (seq__42179_42411,chunk__42183_42412,count__42184_42413,i__42185_42414,seq__42088,chunk__42090,count__42091,i__42092,new_link_42439,path_match_42438,node_42437,seq__42179_42431__$1,temp__5753__auto___42430__$1,path,seq__42088__$1,temp__5753__auto__,map__42087,map__42087__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42437);
});})(seq__42179_42411,chunk__42183_42412,count__42184_42413,i__42185_42414,seq__42088,chunk__42090,count__42091,i__42092,new_link_42439,path_match_42438,node_42437,seq__42179_42431__$1,temp__5753__auto___42430__$1,path,seq__42088__$1,temp__5753__auto__,map__42087,map__42087__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42438], 0));

goog.dom.insertSiblingAfter(new_link_42439,node_42437);


var G__42440 = cljs.core.next(seq__42179_42431__$1);
var G__42441 = null;
var G__42442 = (0);
var G__42443 = (0);
seq__42179_42411 = G__42440;
chunk__42183_42412 = G__42441;
count__42184_42413 = G__42442;
i__42185_42414 = G__42443;
continue;
} else {
var G__42444 = cljs.core.next(seq__42179_42431__$1);
var G__42445 = null;
var G__42446 = (0);
var G__42447 = (0);
seq__42179_42411 = G__42444;
chunk__42183_42412 = G__42445;
count__42184_42413 = G__42446;
i__42185_42414 = G__42447;
continue;
}
} else {
var G__42448 = cljs.core.next(seq__42179_42431__$1);
var G__42449 = null;
var G__42450 = (0);
var G__42451 = (0);
seq__42179_42411 = G__42448;
chunk__42183_42412 = G__42449;
count__42184_42413 = G__42450;
i__42185_42414 = G__42451;
continue;
}
}
} else {
}
}
break;
}


var G__42452 = cljs.core.next(seq__42088__$1);
var G__42453 = null;
var G__42454 = (0);
var G__42455 = (0);
seq__42088 = G__42452;
chunk__42090 = G__42453;
count__42091 = G__42454;
i__42092 = G__42455;
continue;
} else {
var G__42456 = cljs.core.next(seq__42088__$1);
var G__42457 = null;
var G__42458 = (0);
var G__42459 = (0);
seq__42088 = G__42456;
chunk__42090 = G__42457;
count__42091 = G__42458;
i__42092 = G__42459;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42269){
var map__42270 = p__42269;
var map__42270__$1 = cljs.core.__destructure_map(map__42270);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42270__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42271){
var map__42272 = p__42271;
var map__42272__$1 = cljs.core.__destructure_map(map__42272);
var _ = map__42272__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42272__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42273,done,error){
var map__42274 = p__42273;
var map__42274__$1 = cljs.core.__destructure_map(map__42274);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42274__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42275,done,error){
var map__42276 = p__42275;
var map__42276__$1 = cljs.core.__destructure_map(map__42276);
var msg = map__42276__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42276__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42276__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42276__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42277){
var map__42278 = p__42277;
var map__42278__$1 = cljs.core.__destructure_map(map__42278);
var src = map__42278__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42278__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42279 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42279) : done.call(null,G__42279));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42280){
var map__42281 = p__42280;
var map__42281__$1 = cljs.core.__destructure_map(map__42281);
var msg__$1 = map__42281__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42281__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42282){var ex = e42282;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42283){
var map__42284 = p__42283;
var map__42284__$1 = cljs.core.__destructure_map(map__42284);
var env = map__42284__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42284__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__42285){
var map__42286 = p__42285;
var map__42286__$1 = cljs.core.__destructure_map(map__42286);
var msg = map__42286__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42286__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42287){
var map__42288 = p__42287;
var map__42288__$1 = cljs.core.__destructure_map(map__42288);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42288__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42288__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42289){
var map__42290 = p__42289;
var map__42290__$1 = cljs.core.__destructure_map(map__42290);
var svc = map__42290__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
