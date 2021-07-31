goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52284 = arguments.length;
var i__4819__auto___52285 = (0);
while(true){
if((i__4819__auto___52285 < len__4818__auto___52284)){
args__4824__auto__.push((arguments[i__4819__auto___52285]));

var G__52286 = (i__4819__auto___52285 + (1));
i__4819__auto___52285 = G__52286;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52059){
var G__52060 = cljs.core.first(seq52059);
var seq52059__$1 = cljs.core.next(seq52059);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52060,seq52059__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52063 = cljs.core.seq(sources);
var chunk__52064 = null;
var count__52065 = (0);
var i__52066 = (0);
while(true){
if((i__52066 < count__52065)){
var map__52077 = chunk__52064.cljs$core$IIndexed$_nth$arity$2(null,i__52066);
var map__52077__$1 = cljs.core.__destructure_map(map__52077);
var src = map__52077__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52079){var e_52287 = e52079;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52287);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52287.message)].join('')));
}

var G__52288 = seq__52063;
var G__52289 = chunk__52064;
var G__52290 = count__52065;
var G__52291 = (i__52066 + (1));
seq__52063 = G__52288;
chunk__52064 = G__52289;
count__52065 = G__52290;
i__52066 = G__52291;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52063);
if(temp__5753__auto__){
var seq__52063__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52063__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52063__$1);
var G__52292 = cljs.core.chunk_rest(seq__52063__$1);
var G__52293 = c__4638__auto__;
var G__52294 = cljs.core.count(c__4638__auto__);
var G__52295 = (0);
seq__52063 = G__52292;
chunk__52064 = G__52293;
count__52065 = G__52294;
i__52066 = G__52295;
continue;
} else {
var map__52080 = cljs.core.first(seq__52063__$1);
var map__52080__$1 = cljs.core.__destructure_map(map__52080);
var src = map__52080__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52081){var e_52296 = e52081;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52296);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52296.message)].join('')));
}

var G__52297 = cljs.core.next(seq__52063__$1);
var G__52298 = null;
var G__52299 = (0);
var G__52300 = (0);
seq__52063 = G__52297;
chunk__52064 = G__52298;
count__52065 = G__52299;
i__52066 = G__52300;
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
var seq__52083 = cljs.core.seq(js_requires);
var chunk__52084 = null;
var count__52085 = (0);
var i__52086 = (0);
while(true){
if((i__52086 < count__52085)){
var js_ns = chunk__52084.cljs$core$IIndexed$_nth$arity$2(null,i__52086);
var require_str_52304 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52304);


var G__52305 = seq__52083;
var G__52306 = chunk__52084;
var G__52307 = count__52085;
var G__52308 = (i__52086 + (1));
seq__52083 = G__52305;
chunk__52084 = G__52306;
count__52085 = G__52307;
i__52086 = G__52308;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52083);
if(temp__5753__auto__){
var seq__52083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52083__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52083__$1);
var G__52311 = cljs.core.chunk_rest(seq__52083__$1);
var G__52312 = c__4638__auto__;
var G__52313 = cljs.core.count(c__4638__auto__);
var G__52314 = (0);
seq__52083 = G__52311;
chunk__52084 = G__52312;
count__52085 = G__52313;
i__52086 = G__52314;
continue;
} else {
var js_ns = cljs.core.first(seq__52083__$1);
var require_str_52315 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52315);


var G__52316 = cljs.core.next(seq__52083__$1);
var G__52317 = null;
var G__52318 = (0);
var G__52319 = (0);
seq__52083 = G__52316;
chunk__52084 = G__52317;
count__52085 = G__52318;
i__52086 = G__52319;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52094){
var map__52095 = p__52094;
var map__52095__$1 = cljs.core.__destructure_map(map__52095);
var msg = map__52095__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52096(s__52097){
return (new cljs.core.LazySeq(null,(function (){
var s__52097__$1 = s__52097;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52097__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52102 = cljs.core.first(xs__6308__auto__);
var map__52102__$1 = cljs.core.__destructure_map(map__52102);
var src = map__52102__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52102__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52102__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52097__$1,map__52102,map__52102__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52095,map__52095__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52096_$_iter__52098(s__52099){
return (new cljs.core.LazySeq(null,((function (s__52097__$1,map__52102,map__52102__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52095,map__52095__$1,msg,info,reload_info){
return (function (){
var s__52099__$1 = s__52099;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52099__$1);
if(temp__5753__auto____$1){
var s__52099__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52099__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52099__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52101 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52100 = (0);
while(true){
if((i__52100 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52100);
cljs.core.chunk_append(b__52101,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52320 = (i__52100 + (1));
i__52100 = G__52320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52101),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52096_$_iter__52098(cljs.core.chunk_rest(s__52099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52101),null);
}
} else {
var warning = cljs.core.first(s__52099__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52096_$_iter__52098(cljs.core.rest(s__52099__$2)));
}
} else {
return null;
}
break;
}
});})(s__52097__$1,map__52102,map__52102__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52095,map__52095__$1,msg,info,reload_info))
,null,null));
});})(s__52097__$1,map__52102,map__52102__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52095,map__52095__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52096(cljs.core.rest(s__52097__$1)));
} else {
var G__52321 = cljs.core.rest(s__52097__$1);
s__52097__$1 = G__52321;
continue;
}
} else {
var G__52322 = cljs.core.rest(s__52097__$1);
s__52097__$1 = G__52322;
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
var seq__52109_52323 = cljs.core.seq(warnings);
var chunk__52110_52324 = null;
var count__52111_52325 = (0);
var i__52112_52326 = (0);
while(true){
if((i__52112_52326 < count__52111_52325)){
var map__52123_52327 = chunk__52110_52324.cljs$core$IIndexed$_nth$arity$2(null,i__52112_52326);
var map__52123_52328__$1 = cljs.core.__destructure_map(map__52123_52327);
var w_52329 = map__52123_52328__$1;
var msg_52330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123_52328__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123_52328__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123_52328__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123_52328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52333)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52331),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52332),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52330__$1)].join(''));


var G__52334 = seq__52109_52323;
var G__52335 = chunk__52110_52324;
var G__52336 = count__52111_52325;
var G__52337 = (i__52112_52326 + (1));
seq__52109_52323 = G__52334;
chunk__52110_52324 = G__52335;
count__52111_52325 = G__52336;
i__52112_52326 = G__52337;
continue;
} else {
var temp__5753__auto___52338 = cljs.core.seq(seq__52109_52323);
if(temp__5753__auto___52338){
var seq__52109_52339__$1 = temp__5753__auto___52338;
if(cljs.core.chunked_seq_QMARK_(seq__52109_52339__$1)){
var c__4638__auto___52342 = cljs.core.chunk_first(seq__52109_52339__$1);
var G__52343 = cljs.core.chunk_rest(seq__52109_52339__$1);
var G__52344 = c__4638__auto___52342;
var G__52345 = cljs.core.count(c__4638__auto___52342);
var G__52346 = (0);
seq__52109_52323 = G__52343;
chunk__52110_52324 = G__52344;
count__52111_52325 = G__52345;
i__52112_52326 = G__52346;
continue;
} else {
var map__52126_52347 = cljs.core.first(seq__52109_52339__$1);
var map__52126_52348__$1 = cljs.core.__destructure_map(map__52126_52347);
var w_52349 = map__52126_52348__$1;
var msg_52350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126_52348__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126_52348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126_52348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126_52348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52353)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52351),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52352),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52350__$1)].join(''));


var G__52354 = cljs.core.next(seq__52109_52339__$1);
var G__52355 = null;
var G__52356 = (0);
var G__52357 = (0);
seq__52109_52323 = G__52354;
chunk__52110_52324 = G__52355;
count__52111_52325 = G__52356;
i__52112_52326 = G__52357;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52093_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52093_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52141){
var map__52142 = p__52141;
var map__52142__$1 = cljs.core.__destructure_map(map__52142);
var msg = map__52142__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52142__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52143 = cljs.core.seq(updates);
var chunk__52145 = null;
var count__52146 = (0);
var i__52147 = (0);
while(true){
if((i__52147 < count__52146)){
var path = chunk__52145.cljs$core$IIndexed$_nth$arity$2(null,i__52147);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52215_52358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52219_52359 = null;
var count__52220_52360 = (0);
var i__52221_52361 = (0);
while(true){
if((i__52221_52361 < count__52220_52360)){
var node_52362 = chunk__52219_52359.cljs$core$IIndexed$_nth$arity$2(null,i__52221_52361);
if(cljs.core.not(node_52362.shadow$old)){
var path_match_52363 = shadow.cljs.devtools.client.browser.match_paths(node_52362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52363)){
var new_link_52364 = (function (){var G__52227 = node_52362.cloneNode(true);
G__52227.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52227;
})();
(node_52362.shadow$old = true);

(new_link_52364.onload = ((function (seq__52215_52358,chunk__52219_52359,count__52220_52360,i__52221_52361,seq__52143,chunk__52145,count__52146,i__52147,new_link_52364,path_match_52363,node_52362,path,map__52142,map__52142__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52362);
});})(seq__52215_52358,chunk__52219_52359,count__52220_52360,i__52221_52361,seq__52143,chunk__52145,count__52146,i__52147,new_link_52364,path_match_52363,node_52362,path,map__52142,map__52142__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52363], 0));

goog.dom.insertSiblingAfter(new_link_52364,node_52362);


var G__52365 = seq__52215_52358;
var G__52366 = chunk__52219_52359;
var G__52367 = count__52220_52360;
var G__52368 = (i__52221_52361 + (1));
seq__52215_52358 = G__52365;
chunk__52219_52359 = G__52366;
count__52220_52360 = G__52367;
i__52221_52361 = G__52368;
continue;
} else {
var G__52369 = seq__52215_52358;
var G__52370 = chunk__52219_52359;
var G__52371 = count__52220_52360;
var G__52372 = (i__52221_52361 + (1));
seq__52215_52358 = G__52369;
chunk__52219_52359 = G__52370;
count__52220_52360 = G__52371;
i__52221_52361 = G__52372;
continue;
}
} else {
var G__52373 = seq__52215_52358;
var G__52374 = chunk__52219_52359;
var G__52375 = count__52220_52360;
var G__52376 = (i__52221_52361 + (1));
seq__52215_52358 = G__52373;
chunk__52219_52359 = G__52374;
count__52220_52360 = G__52375;
i__52221_52361 = G__52376;
continue;
}
} else {
var temp__5753__auto___52377 = cljs.core.seq(seq__52215_52358);
if(temp__5753__auto___52377){
var seq__52215_52378__$1 = temp__5753__auto___52377;
if(cljs.core.chunked_seq_QMARK_(seq__52215_52378__$1)){
var c__4638__auto___52379 = cljs.core.chunk_first(seq__52215_52378__$1);
var G__52380 = cljs.core.chunk_rest(seq__52215_52378__$1);
var G__52381 = c__4638__auto___52379;
var G__52382 = cljs.core.count(c__4638__auto___52379);
var G__52383 = (0);
seq__52215_52358 = G__52380;
chunk__52219_52359 = G__52381;
count__52220_52360 = G__52382;
i__52221_52361 = G__52383;
continue;
} else {
var node_52384 = cljs.core.first(seq__52215_52378__$1);
if(cljs.core.not(node_52384.shadow$old)){
var path_match_52385 = shadow.cljs.devtools.client.browser.match_paths(node_52384.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52385)){
var new_link_52386 = (function (){var G__52230 = node_52384.cloneNode(true);
G__52230.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52385),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52230;
})();
(node_52384.shadow$old = true);

(new_link_52386.onload = ((function (seq__52215_52358,chunk__52219_52359,count__52220_52360,i__52221_52361,seq__52143,chunk__52145,count__52146,i__52147,new_link_52386,path_match_52385,node_52384,seq__52215_52378__$1,temp__5753__auto___52377,path,map__52142,map__52142__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52384);
});})(seq__52215_52358,chunk__52219_52359,count__52220_52360,i__52221_52361,seq__52143,chunk__52145,count__52146,i__52147,new_link_52386,path_match_52385,node_52384,seq__52215_52378__$1,temp__5753__auto___52377,path,map__52142,map__52142__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52385], 0));

goog.dom.insertSiblingAfter(new_link_52386,node_52384);


var G__52387 = cljs.core.next(seq__52215_52378__$1);
var G__52388 = null;
var G__52389 = (0);
var G__52390 = (0);
seq__52215_52358 = G__52387;
chunk__52219_52359 = G__52388;
count__52220_52360 = G__52389;
i__52221_52361 = G__52390;
continue;
} else {
var G__52391 = cljs.core.next(seq__52215_52378__$1);
var G__52392 = null;
var G__52393 = (0);
var G__52394 = (0);
seq__52215_52358 = G__52391;
chunk__52219_52359 = G__52392;
count__52220_52360 = G__52393;
i__52221_52361 = G__52394;
continue;
}
} else {
var G__52395 = cljs.core.next(seq__52215_52378__$1);
var G__52396 = null;
var G__52397 = (0);
var G__52398 = (0);
seq__52215_52358 = G__52395;
chunk__52219_52359 = G__52396;
count__52220_52360 = G__52397;
i__52221_52361 = G__52398;
continue;
}
}
} else {
}
}
break;
}


var G__52399 = seq__52143;
var G__52400 = chunk__52145;
var G__52401 = count__52146;
var G__52402 = (i__52147 + (1));
seq__52143 = G__52399;
chunk__52145 = G__52400;
count__52146 = G__52401;
i__52147 = G__52402;
continue;
} else {
var G__52403 = seq__52143;
var G__52404 = chunk__52145;
var G__52405 = count__52146;
var G__52406 = (i__52147 + (1));
seq__52143 = G__52403;
chunk__52145 = G__52404;
count__52146 = G__52405;
i__52147 = G__52406;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52143);
if(temp__5753__auto__){
var seq__52143__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52143__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52143__$1);
var G__52407 = cljs.core.chunk_rest(seq__52143__$1);
var G__52408 = c__4638__auto__;
var G__52409 = cljs.core.count(c__4638__auto__);
var G__52410 = (0);
seq__52143 = G__52407;
chunk__52145 = G__52408;
count__52146 = G__52409;
i__52147 = G__52410;
continue;
} else {
var path = cljs.core.first(seq__52143__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52231_52413 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52235_52414 = null;
var count__52236_52415 = (0);
var i__52237_52416 = (0);
while(true){
if((i__52237_52416 < count__52236_52415)){
var node_52417 = chunk__52235_52414.cljs$core$IIndexed$_nth$arity$2(null,i__52237_52416);
if(cljs.core.not(node_52417.shadow$old)){
var path_match_52418 = shadow.cljs.devtools.client.browser.match_paths(node_52417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52418)){
var new_link_52419 = (function (){var G__52247 = node_52417.cloneNode(true);
G__52247.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52247;
})();
(node_52417.shadow$old = true);

(new_link_52419.onload = ((function (seq__52231_52413,chunk__52235_52414,count__52236_52415,i__52237_52416,seq__52143,chunk__52145,count__52146,i__52147,new_link_52419,path_match_52418,node_52417,path,seq__52143__$1,temp__5753__auto__,map__52142,map__52142__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52417);
});})(seq__52231_52413,chunk__52235_52414,count__52236_52415,i__52237_52416,seq__52143,chunk__52145,count__52146,i__52147,new_link_52419,path_match_52418,node_52417,path,seq__52143__$1,temp__5753__auto__,map__52142,map__52142__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52418], 0));

goog.dom.insertSiblingAfter(new_link_52419,node_52417);


var G__52420 = seq__52231_52413;
var G__52421 = chunk__52235_52414;
var G__52422 = count__52236_52415;
var G__52423 = (i__52237_52416 + (1));
seq__52231_52413 = G__52420;
chunk__52235_52414 = G__52421;
count__52236_52415 = G__52422;
i__52237_52416 = G__52423;
continue;
} else {
var G__52424 = seq__52231_52413;
var G__52425 = chunk__52235_52414;
var G__52426 = count__52236_52415;
var G__52427 = (i__52237_52416 + (1));
seq__52231_52413 = G__52424;
chunk__52235_52414 = G__52425;
count__52236_52415 = G__52426;
i__52237_52416 = G__52427;
continue;
}
} else {
var G__52428 = seq__52231_52413;
var G__52429 = chunk__52235_52414;
var G__52430 = count__52236_52415;
var G__52431 = (i__52237_52416 + (1));
seq__52231_52413 = G__52428;
chunk__52235_52414 = G__52429;
count__52236_52415 = G__52430;
i__52237_52416 = G__52431;
continue;
}
} else {
var temp__5753__auto___52432__$1 = cljs.core.seq(seq__52231_52413);
if(temp__5753__auto___52432__$1){
var seq__52231_52433__$1 = temp__5753__auto___52432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52231_52433__$1)){
var c__4638__auto___52434 = cljs.core.chunk_first(seq__52231_52433__$1);
var G__52435 = cljs.core.chunk_rest(seq__52231_52433__$1);
var G__52436 = c__4638__auto___52434;
var G__52437 = cljs.core.count(c__4638__auto___52434);
var G__52438 = (0);
seq__52231_52413 = G__52435;
chunk__52235_52414 = G__52436;
count__52236_52415 = G__52437;
i__52237_52416 = G__52438;
continue;
} else {
var node_52439 = cljs.core.first(seq__52231_52433__$1);
if(cljs.core.not(node_52439.shadow$old)){
var path_match_52440 = shadow.cljs.devtools.client.browser.match_paths(node_52439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52440)){
var new_link_52441 = (function (){var G__52250 = node_52439.cloneNode(true);
G__52250.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52250;
})();
(node_52439.shadow$old = true);

(new_link_52441.onload = ((function (seq__52231_52413,chunk__52235_52414,count__52236_52415,i__52237_52416,seq__52143,chunk__52145,count__52146,i__52147,new_link_52441,path_match_52440,node_52439,seq__52231_52433__$1,temp__5753__auto___52432__$1,path,seq__52143__$1,temp__5753__auto__,map__52142,map__52142__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52439);
});})(seq__52231_52413,chunk__52235_52414,count__52236_52415,i__52237_52416,seq__52143,chunk__52145,count__52146,i__52147,new_link_52441,path_match_52440,node_52439,seq__52231_52433__$1,temp__5753__auto___52432__$1,path,seq__52143__$1,temp__5753__auto__,map__52142,map__52142__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52440], 0));

goog.dom.insertSiblingAfter(new_link_52441,node_52439);


var G__52442 = cljs.core.next(seq__52231_52433__$1);
var G__52443 = null;
var G__52444 = (0);
var G__52445 = (0);
seq__52231_52413 = G__52442;
chunk__52235_52414 = G__52443;
count__52236_52415 = G__52444;
i__52237_52416 = G__52445;
continue;
} else {
var G__52446 = cljs.core.next(seq__52231_52433__$1);
var G__52447 = null;
var G__52448 = (0);
var G__52449 = (0);
seq__52231_52413 = G__52446;
chunk__52235_52414 = G__52447;
count__52236_52415 = G__52448;
i__52237_52416 = G__52449;
continue;
}
} else {
var G__52450 = cljs.core.next(seq__52231_52433__$1);
var G__52451 = null;
var G__52452 = (0);
var G__52453 = (0);
seq__52231_52413 = G__52450;
chunk__52235_52414 = G__52451;
count__52236_52415 = G__52452;
i__52237_52416 = G__52453;
continue;
}
}
} else {
}
}
break;
}


var G__52454 = cljs.core.next(seq__52143__$1);
var G__52455 = null;
var G__52456 = (0);
var G__52457 = (0);
seq__52143 = G__52454;
chunk__52145 = G__52455;
count__52146 = G__52456;
i__52147 = G__52457;
continue;
} else {
var G__52458 = cljs.core.next(seq__52143__$1);
var G__52459 = null;
var G__52460 = (0);
var G__52461 = (0);
seq__52143 = G__52458;
chunk__52145 = G__52459;
count__52146 = G__52460;
i__52147 = G__52461;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52251){
var map__52252 = p__52251;
var map__52252__$1 = cljs.core.__destructure_map(map__52252);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52252__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52255){
var map__52256 = p__52255;
var map__52256__$1 = cljs.core.__destructure_map(map__52256);
var _ = map__52256__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52256__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52257,done,error){
var map__52258 = p__52257;
var map__52258__$1 = cljs.core.__destructure_map(map__52258);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52258__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52259,done,error){
var map__52260 = p__52259;
var map__52260__$1 = cljs.core.__destructure_map(map__52260);
var msg = map__52260__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52260__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52260__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52260__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52261){
var map__52262 = p__52261;
var map__52262__$1 = cljs.core.__destructure_map(map__52262);
var src = map__52262__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52263 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52263) : done.call(null,G__52263));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52265){
var map__52268 = p__52265;
var map__52268__$1 = cljs.core.__destructure_map(map__52268);
var msg__$1 = map__52268__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52270){var ex = e52270;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52271){
var map__52272 = p__52271;
var map__52272__$1 = cljs.core.__destructure_map(map__52272);
var env = map__52272__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52275){
var map__52276 = p__52275;
var map__52276__$1 = cljs.core.__destructure_map(map__52276);
var msg = map__52276__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52276__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52280){
var map__52281 = p__52280;
var map__52281__$1 = cljs.core.__destructure_map(map__52281);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52281__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52281__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__52282){
var map__52283 = p__52282;
var map__52283__$1 = cljs.core.__destructure_map(map__52283);
var svc = map__52283__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52283__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
