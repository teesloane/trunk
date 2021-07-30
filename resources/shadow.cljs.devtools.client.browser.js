var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./goog.dom.dom.js");
require("./goog.useragent.useragent.js");
require("./goog.useragent.product.js");
require("./goog.uri.uri.js");
require("./shadow.json.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
require("./shadow.cljs.devtools.client.websocket.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.browser.js");

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39705 = arguments.length;
var i__4819__auto___39706 = (0);
while(true){
if((i__4819__auto___39706 < len__4818__auto___39705)){
args__4824__auto__.push((arguments[i__4819__auto___39706]));

var G__39707 = (i__4819__auto___39706 + (1));
i__4819__auto___39706 = G__39707;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39578){
var G__39579 = cljs.core.first(seq39578);
var seq39578__$1 = cljs.core.next(seq39578);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39579,seq39578__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39583 = cljs.core.seq(sources);
var chunk__39584 = null;
var count__39585 = (0);
var i__39586 = (0);
while(true){
if((i__39586 < count__39585)){
var map__39591 = chunk__39584.cljs$core$IIndexed$_nth$arity$2(null,i__39586);
var map__39591__$1 = cljs.core.__destructure_map(map__39591);
var src = map__39591__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39592){var e_39708 = e39592;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39708);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39708.message)].join('')));
}

var G__39709 = seq__39583;
var G__39710 = chunk__39584;
var G__39711 = count__39585;
var G__39712 = (i__39586 + (1));
seq__39583 = G__39709;
chunk__39584 = G__39710;
count__39585 = G__39711;
i__39586 = G__39712;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39583);
if(temp__5753__auto__){
var seq__39583__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39583__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39583__$1);
var G__39713 = cljs.core.chunk_rest(seq__39583__$1);
var G__39714 = c__4638__auto__;
var G__39715 = cljs.core.count(c__4638__auto__);
var G__39716 = (0);
seq__39583 = G__39713;
chunk__39584 = G__39714;
count__39585 = G__39715;
i__39586 = G__39716;
continue;
} else {
var map__39594 = cljs.core.first(seq__39583__$1);
var map__39594__$1 = cljs.core.__destructure_map(map__39594);
var src = map__39594__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39594__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39596){var e_39717 = e39596;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39717);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39717.message)].join('')));
}

var G__39718 = cljs.core.next(seq__39583__$1);
var G__39719 = null;
var G__39720 = (0);
var G__39721 = (0);
seq__39583 = G__39718;
chunk__39584 = G__39719;
count__39585 = G__39720;
i__39586 = G__39721;
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
var seq__39597 = cljs.core.seq(js_requires);
var chunk__39598 = null;
var count__39599 = (0);
var i__39600 = (0);
while(true){
if((i__39600 < count__39599)){
var js_ns = chunk__39598.cljs$core$IIndexed$_nth$arity$2(null,i__39600);
var require_str_39722 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39722);


var G__39723 = seq__39597;
var G__39724 = chunk__39598;
var G__39725 = count__39599;
var G__39726 = (i__39600 + (1));
seq__39597 = G__39723;
chunk__39598 = G__39724;
count__39599 = G__39725;
i__39600 = G__39726;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39597);
if(temp__5753__auto__){
var seq__39597__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39597__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39597__$1);
var G__39727 = cljs.core.chunk_rest(seq__39597__$1);
var G__39728 = c__4638__auto__;
var G__39729 = cljs.core.count(c__4638__auto__);
var G__39730 = (0);
seq__39597 = G__39727;
chunk__39598 = G__39728;
count__39599 = G__39729;
i__39600 = G__39730;
continue;
} else {
var js_ns = cljs.core.first(seq__39597__$1);
var require_str_39731 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39731);


var G__39732 = cljs.core.next(seq__39597__$1);
var G__39733 = null;
var G__39734 = (0);
var G__39735 = (0);
seq__39597 = G__39732;
chunk__39598 = G__39733;
count__39599 = G__39734;
i__39600 = G__39735;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39602){
var map__39603 = p__39602;
var map__39603__$1 = cljs.core.__destructure_map(map__39603);
var msg = map__39603__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39603__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39603__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39604(s__39605){
return (new cljs.core.LazySeq(null,(function (){
var s__39605__$1 = s__39605;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39605__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__39610 = cljs.core.first(xs__6308__auto__);
var map__39610__$1 = cljs.core.__destructure_map(map__39610);
var src = map__39610__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39610__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39610__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__39605__$1,map__39610,map__39610__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39603,map__39603__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39604_$_iter__39606(s__39607){
return (new cljs.core.LazySeq(null,((function (s__39605__$1,map__39610,map__39610__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39603,map__39603__$1,msg,info,reload_info){
return (function (){
var s__39607__$1 = s__39607;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39607__$1);
if(temp__5753__auto____$1){
var s__39607__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39607__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39607__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39609 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39608 = (0);
while(true){
if((i__39608 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__39608);
cljs.core.chunk_append(b__39609,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39736 = (i__39608 + (1));
i__39608 = G__39736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39609),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39604_$_iter__39606(cljs.core.chunk_rest(s__39607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39609),null);
}
} else {
var warning = cljs.core.first(s__39607__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39604_$_iter__39606(cljs.core.rest(s__39607__$2)));
}
} else {
return null;
}
break;
}
});})(s__39605__$1,map__39610,map__39610__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39603,map__39603__$1,msg,info,reload_info))
,null,null));
});})(s__39605__$1,map__39610,map__39610__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39603,map__39603__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39604(cljs.core.rest(s__39605__$1)));
} else {
var G__39737 = cljs.core.rest(s__39605__$1);
s__39605__$1 = G__39737;
continue;
}
} else {
var G__39738 = cljs.core.rest(s__39605__$1);
s__39605__$1 = G__39738;
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
var seq__39611_39739 = cljs.core.seq(warnings);
var chunk__39612_39740 = null;
var count__39613_39741 = (0);
var i__39614_39742 = (0);
while(true){
if((i__39614_39742 < count__39613_39741)){
var map__39617_39743 = chunk__39612_39740.cljs$core$IIndexed$_nth$arity$2(null,i__39614_39742);
var map__39617_39744__$1 = cljs.core.__destructure_map(map__39617_39743);
var w_39745 = map__39617_39744__$1;
var msg_39746__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39617_39744__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39617_39744__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39617_39744__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39617_39744__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39749)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39747),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39748),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39746__$1)].join(''));


var G__39750 = seq__39611_39739;
var G__39751 = chunk__39612_39740;
var G__39752 = count__39613_39741;
var G__39753 = (i__39614_39742 + (1));
seq__39611_39739 = G__39750;
chunk__39612_39740 = G__39751;
count__39613_39741 = G__39752;
i__39614_39742 = G__39753;
continue;
} else {
var temp__5753__auto___39754 = cljs.core.seq(seq__39611_39739);
if(temp__5753__auto___39754){
var seq__39611_39755__$1 = temp__5753__auto___39754;
if(cljs.core.chunked_seq_QMARK_(seq__39611_39755__$1)){
var c__4638__auto___39756 = cljs.core.chunk_first(seq__39611_39755__$1);
var G__39757 = cljs.core.chunk_rest(seq__39611_39755__$1);
var G__39758 = c__4638__auto___39756;
var G__39759 = cljs.core.count(c__4638__auto___39756);
var G__39760 = (0);
seq__39611_39739 = G__39757;
chunk__39612_39740 = G__39758;
count__39613_39741 = G__39759;
i__39614_39742 = G__39760;
continue;
} else {
var map__39618_39761 = cljs.core.first(seq__39611_39755__$1);
var map__39618_39762__$1 = cljs.core.__destructure_map(map__39618_39761);
var w_39763 = map__39618_39762__$1;
var msg_39764__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618_39762__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618_39762__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618_39762__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618_39762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39767)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39765),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39766),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39764__$1)].join(''));


var G__39768 = cljs.core.next(seq__39611_39755__$1);
var G__39769 = null;
var G__39770 = (0);
var G__39771 = (0);
seq__39611_39739 = G__39768;
chunk__39612_39740 = G__39769;
count__39613_39741 = G__39770;
i__39614_39742 = G__39771;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39601_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39601_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39619){
var map__39620 = p__39619;
var map__39620__$1 = cljs.core.__destructure_map(map__39620);
var msg = map__39620__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39621 = cljs.core.seq(updates);
var chunk__39623 = null;
var count__39624 = (0);
var i__39625 = (0);
while(true){
if((i__39625 < count__39624)){
var path = chunk__39623.cljs$core$IIndexed$_nth$arity$2(null,i__39625);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39655_39772 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39659_39773 = null;
var count__39660_39774 = (0);
var i__39661_39775 = (0);
while(true){
if((i__39661_39775 < count__39660_39774)){
var node_39776 = chunk__39659_39773.cljs$core$IIndexed$_nth$arity$2(null,i__39661_39775);
if(cljs.core.not(node_39776.shadow$old)){
var path_match_39777 = shadow.cljs.devtools.client.browser.match_paths(node_39776.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39777)){
var new_link_39778 = (function (){var G__39667 = node_39776.cloneNode(true);
G__39667.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39777),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39667;
})();
(node_39776.shadow$old = true);

(new_link_39778.onload = ((function (seq__39655_39772,chunk__39659_39773,count__39660_39774,i__39661_39775,seq__39621,chunk__39623,count__39624,i__39625,new_link_39778,path_match_39777,node_39776,path,map__39620,map__39620__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39776);
});})(seq__39655_39772,chunk__39659_39773,count__39660_39774,i__39661_39775,seq__39621,chunk__39623,count__39624,i__39625,new_link_39778,path_match_39777,node_39776,path,map__39620,map__39620__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39777], 0));

goog.dom.insertSiblingAfter(new_link_39778,node_39776);


var G__39779 = seq__39655_39772;
var G__39780 = chunk__39659_39773;
var G__39781 = count__39660_39774;
var G__39782 = (i__39661_39775 + (1));
seq__39655_39772 = G__39779;
chunk__39659_39773 = G__39780;
count__39660_39774 = G__39781;
i__39661_39775 = G__39782;
continue;
} else {
var G__39783 = seq__39655_39772;
var G__39784 = chunk__39659_39773;
var G__39785 = count__39660_39774;
var G__39786 = (i__39661_39775 + (1));
seq__39655_39772 = G__39783;
chunk__39659_39773 = G__39784;
count__39660_39774 = G__39785;
i__39661_39775 = G__39786;
continue;
}
} else {
var G__39787 = seq__39655_39772;
var G__39788 = chunk__39659_39773;
var G__39789 = count__39660_39774;
var G__39790 = (i__39661_39775 + (1));
seq__39655_39772 = G__39787;
chunk__39659_39773 = G__39788;
count__39660_39774 = G__39789;
i__39661_39775 = G__39790;
continue;
}
} else {
var temp__5753__auto___39791 = cljs.core.seq(seq__39655_39772);
if(temp__5753__auto___39791){
var seq__39655_39792__$1 = temp__5753__auto___39791;
if(cljs.core.chunked_seq_QMARK_(seq__39655_39792__$1)){
var c__4638__auto___39793 = cljs.core.chunk_first(seq__39655_39792__$1);
var G__39794 = cljs.core.chunk_rest(seq__39655_39792__$1);
var G__39795 = c__4638__auto___39793;
var G__39796 = cljs.core.count(c__4638__auto___39793);
var G__39797 = (0);
seq__39655_39772 = G__39794;
chunk__39659_39773 = G__39795;
count__39660_39774 = G__39796;
i__39661_39775 = G__39797;
continue;
} else {
var node_39798 = cljs.core.first(seq__39655_39792__$1);
if(cljs.core.not(node_39798.shadow$old)){
var path_match_39799 = shadow.cljs.devtools.client.browser.match_paths(node_39798.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39799)){
var new_link_39800 = (function (){var G__39668 = node_39798.cloneNode(true);
G__39668.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39799),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39668;
})();
(node_39798.shadow$old = true);

(new_link_39800.onload = ((function (seq__39655_39772,chunk__39659_39773,count__39660_39774,i__39661_39775,seq__39621,chunk__39623,count__39624,i__39625,new_link_39800,path_match_39799,node_39798,seq__39655_39792__$1,temp__5753__auto___39791,path,map__39620,map__39620__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39798);
});})(seq__39655_39772,chunk__39659_39773,count__39660_39774,i__39661_39775,seq__39621,chunk__39623,count__39624,i__39625,new_link_39800,path_match_39799,node_39798,seq__39655_39792__$1,temp__5753__auto___39791,path,map__39620,map__39620__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39799], 0));

goog.dom.insertSiblingAfter(new_link_39800,node_39798);


var G__39801 = cljs.core.next(seq__39655_39792__$1);
var G__39802 = null;
var G__39803 = (0);
var G__39804 = (0);
seq__39655_39772 = G__39801;
chunk__39659_39773 = G__39802;
count__39660_39774 = G__39803;
i__39661_39775 = G__39804;
continue;
} else {
var G__39805 = cljs.core.next(seq__39655_39792__$1);
var G__39806 = null;
var G__39807 = (0);
var G__39808 = (0);
seq__39655_39772 = G__39805;
chunk__39659_39773 = G__39806;
count__39660_39774 = G__39807;
i__39661_39775 = G__39808;
continue;
}
} else {
var G__39809 = cljs.core.next(seq__39655_39792__$1);
var G__39810 = null;
var G__39811 = (0);
var G__39812 = (0);
seq__39655_39772 = G__39809;
chunk__39659_39773 = G__39810;
count__39660_39774 = G__39811;
i__39661_39775 = G__39812;
continue;
}
}
} else {
}
}
break;
}


var G__39813 = seq__39621;
var G__39814 = chunk__39623;
var G__39815 = count__39624;
var G__39816 = (i__39625 + (1));
seq__39621 = G__39813;
chunk__39623 = G__39814;
count__39624 = G__39815;
i__39625 = G__39816;
continue;
} else {
var G__39817 = seq__39621;
var G__39818 = chunk__39623;
var G__39819 = count__39624;
var G__39820 = (i__39625 + (1));
seq__39621 = G__39817;
chunk__39623 = G__39818;
count__39624 = G__39819;
i__39625 = G__39820;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39621);
if(temp__5753__auto__){
var seq__39621__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39621__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39621__$1);
var G__39821 = cljs.core.chunk_rest(seq__39621__$1);
var G__39822 = c__4638__auto__;
var G__39823 = cljs.core.count(c__4638__auto__);
var G__39824 = (0);
seq__39621 = G__39821;
chunk__39623 = G__39822;
count__39624 = G__39823;
i__39625 = G__39824;
continue;
} else {
var path = cljs.core.first(seq__39621__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39669_39825 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39673_39826 = null;
var count__39674_39827 = (0);
var i__39675_39828 = (0);
while(true){
if((i__39675_39828 < count__39674_39827)){
var node_39829 = chunk__39673_39826.cljs$core$IIndexed$_nth$arity$2(null,i__39675_39828);
if(cljs.core.not(node_39829.shadow$old)){
var path_match_39830 = shadow.cljs.devtools.client.browser.match_paths(node_39829.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39830)){
var new_link_39831 = (function (){var G__39681 = node_39829.cloneNode(true);
G__39681.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39830),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39681;
})();
(node_39829.shadow$old = true);

(new_link_39831.onload = ((function (seq__39669_39825,chunk__39673_39826,count__39674_39827,i__39675_39828,seq__39621,chunk__39623,count__39624,i__39625,new_link_39831,path_match_39830,node_39829,path,seq__39621__$1,temp__5753__auto__,map__39620,map__39620__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39829);
});})(seq__39669_39825,chunk__39673_39826,count__39674_39827,i__39675_39828,seq__39621,chunk__39623,count__39624,i__39625,new_link_39831,path_match_39830,node_39829,path,seq__39621__$1,temp__5753__auto__,map__39620,map__39620__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39830], 0));

goog.dom.insertSiblingAfter(new_link_39831,node_39829);


var G__39832 = seq__39669_39825;
var G__39833 = chunk__39673_39826;
var G__39834 = count__39674_39827;
var G__39835 = (i__39675_39828 + (1));
seq__39669_39825 = G__39832;
chunk__39673_39826 = G__39833;
count__39674_39827 = G__39834;
i__39675_39828 = G__39835;
continue;
} else {
var G__39836 = seq__39669_39825;
var G__39837 = chunk__39673_39826;
var G__39838 = count__39674_39827;
var G__39839 = (i__39675_39828 + (1));
seq__39669_39825 = G__39836;
chunk__39673_39826 = G__39837;
count__39674_39827 = G__39838;
i__39675_39828 = G__39839;
continue;
}
} else {
var G__39840 = seq__39669_39825;
var G__39841 = chunk__39673_39826;
var G__39842 = count__39674_39827;
var G__39843 = (i__39675_39828 + (1));
seq__39669_39825 = G__39840;
chunk__39673_39826 = G__39841;
count__39674_39827 = G__39842;
i__39675_39828 = G__39843;
continue;
}
} else {
var temp__5753__auto___39844__$1 = cljs.core.seq(seq__39669_39825);
if(temp__5753__auto___39844__$1){
var seq__39669_39845__$1 = temp__5753__auto___39844__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39669_39845__$1)){
var c__4638__auto___39846 = cljs.core.chunk_first(seq__39669_39845__$1);
var G__39847 = cljs.core.chunk_rest(seq__39669_39845__$1);
var G__39848 = c__4638__auto___39846;
var G__39849 = cljs.core.count(c__4638__auto___39846);
var G__39850 = (0);
seq__39669_39825 = G__39847;
chunk__39673_39826 = G__39848;
count__39674_39827 = G__39849;
i__39675_39828 = G__39850;
continue;
} else {
var node_39851 = cljs.core.first(seq__39669_39845__$1);
if(cljs.core.not(node_39851.shadow$old)){
var path_match_39852 = shadow.cljs.devtools.client.browser.match_paths(node_39851.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39852)){
var new_link_39853 = (function (){var G__39682 = node_39851.cloneNode(true);
G__39682.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39852),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39682;
})();
(node_39851.shadow$old = true);

(new_link_39853.onload = ((function (seq__39669_39825,chunk__39673_39826,count__39674_39827,i__39675_39828,seq__39621,chunk__39623,count__39624,i__39625,new_link_39853,path_match_39852,node_39851,seq__39669_39845__$1,temp__5753__auto___39844__$1,path,seq__39621__$1,temp__5753__auto__,map__39620,map__39620__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39851);
});})(seq__39669_39825,chunk__39673_39826,count__39674_39827,i__39675_39828,seq__39621,chunk__39623,count__39624,i__39625,new_link_39853,path_match_39852,node_39851,seq__39669_39845__$1,temp__5753__auto___39844__$1,path,seq__39621__$1,temp__5753__auto__,map__39620,map__39620__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39852], 0));

goog.dom.insertSiblingAfter(new_link_39853,node_39851);


var G__39854 = cljs.core.next(seq__39669_39845__$1);
var G__39855 = null;
var G__39856 = (0);
var G__39857 = (0);
seq__39669_39825 = G__39854;
chunk__39673_39826 = G__39855;
count__39674_39827 = G__39856;
i__39675_39828 = G__39857;
continue;
} else {
var G__39858 = cljs.core.next(seq__39669_39845__$1);
var G__39859 = null;
var G__39860 = (0);
var G__39861 = (0);
seq__39669_39825 = G__39858;
chunk__39673_39826 = G__39859;
count__39674_39827 = G__39860;
i__39675_39828 = G__39861;
continue;
}
} else {
var G__39862 = cljs.core.next(seq__39669_39845__$1);
var G__39863 = null;
var G__39864 = (0);
var G__39865 = (0);
seq__39669_39825 = G__39862;
chunk__39673_39826 = G__39863;
count__39674_39827 = G__39864;
i__39675_39828 = G__39865;
continue;
}
}
} else {
}
}
break;
}


var G__39866 = cljs.core.next(seq__39621__$1);
var G__39867 = null;
var G__39868 = (0);
var G__39869 = (0);
seq__39621 = G__39866;
chunk__39623 = G__39867;
count__39624 = G__39868;
i__39625 = G__39869;
continue;
} else {
var G__39870 = cljs.core.next(seq__39621__$1);
var G__39871 = null;
var G__39872 = (0);
var G__39873 = (0);
seq__39621 = G__39870;
chunk__39623 = G__39871;
count__39624 = G__39872;
i__39625 = G__39873;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39683){
var map__39684 = p__39683;
var map__39684__$1 = cljs.core.__destructure_map(map__39684);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39685){
var map__39686 = p__39685;
var map__39686__$1 = cljs.core.__destructure_map(map__39686);
var _ = map__39686__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39686__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39687,done,error){
var map__39688 = p__39687;
var map__39688__$1 = cljs.core.__destructure_map(map__39688);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39688__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39689,done,error){
var map__39690 = p__39689;
var map__39690__$1 = cljs.core.__destructure_map(map__39690);
var msg = map__39690__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39690__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39690__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39690__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39691){
var map__39692 = p__39691;
var map__39692__$1 = cljs.core.__destructure_map(map__39692);
var src = map__39692__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39692__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39693 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39693) : done.call(null,G__39693));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39694){
var map__39695 = p__39694;
var map__39695__$1 = cljs.core.__destructure_map(map__39695);
var msg__$1 = map__39695__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39695__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39696){var ex = e39696;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39697){
var map__39698 = p__39697;
var map__39698__$1 = cljs.core.__destructure_map(map__39698);
var env = map__39698__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39698__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39699){
var map__39700 = p__39699;
var map__39700__$1 = cljs.core.__destructure_map(map__39700);
var msg = map__39700__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39700__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39701){
var map__39702 = p__39701;
var map__39702__$1 = cljs.core.__destructure_map(map__39702);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39702__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39702__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39703){
var map__39704 = p__39703;
var map__39704__$1 = cljs.core.__destructure_map(map__39704);
var svc = map__39704__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39704__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}
Object.defineProperty(module.exports, "script_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.script_eval; } });
Object.defineProperty(module.exports, "global_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.global_eval; } });
Object.defineProperty(module.exports, "repl_init", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.repl_init; } });
Object.defineProperty(module.exports, "do_js_load", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_load; } });
Object.defineProperty(module.exports, "handle_asset_update", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_asset_update; } });
Object.defineProperty(module.exports, "page_load_uri", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.page_load_uri; } });
Object.defineProperty(module.exports, "do_js_requires", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_requires; } });
Object.defineProperty(module.exports, "client_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.client_info; } });
Object.defineProperty(module.exports, "runtime_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.runtime_info; } });
Object.defineProperty(module.exports, "match_paths", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.match_paths; } });
Object.defineProperty(module.exports, "devtools_msg", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.devtools_msg; } });
Object.defineProperty(module.exports, "do_js_reload", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_reload; } });
Object.defineProperty(module.exports, "ws_was_welcome_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.ws_was_welcome_ref; } });
Object.defineProperty(module.exports, "handle_build_complete", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_build_complete; } });
//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
