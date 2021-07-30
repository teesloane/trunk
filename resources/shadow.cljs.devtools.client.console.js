var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.console.js");

goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__35829 = cljs.core.seq(item);
var chunk__35830 = null;
var count__35831 = (0);
var i__35832 = (0);
while(true){
if((i__35832 < count__35831)){
var it = chunk__35830.cljs$core$IIndexed$_nth$arity$2(null,i__35832);
arr.push(it);


var G__35879 = seq__35829;
var G__35880 = chunk__35830;
var G__35881 = count__35831;
var G__35882 = (i__35832 + (1));
seq__35829 = G__35879;
chunk__35830 = G__35880;
count__35831 = G__35881;
i__35832 = G__35882;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35829);
if(temp__5753__auto__){
var seq__35829__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35829__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35829__$1);
var G__35883 = cljs.core.chunk_rest(seq__35829__$1);
var G__35884 = c__4638__auto__;
var G__35885 = cljs.core.count(c__4638__auto__);
var G__35886 = (0);
seq__35829 = G__35883;
chunk__35830 = G__35884;
count__35831 = G__35885;
i__35832 = G__35886;
continue;
} else {
var it = cljs.core.first(seq__35829__$1);
arr.push(it);


var G__35887 = cljs.core.next(seq__35829__$1);
var G__35888 = null;
var G__35889 = (0);
var G__35890 = (0);
seq__35829 = G__35887;
chunk__35830 = G__35888;
count__35831 = G__35889;
i__35832 = G__35890;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35833){
var vec__35835 = p__35833;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__35838 = struct;
var seq__35839 = cljs.core.seq(vec__35838);
var first__35840 = cljs.core.first(seq__35839);
var seq__35839__$1 = cljs.core.next(seq__35839);
var tag = first__35840;
var first__35840__$1 = cljs.core.first(seq__35839__$1);
var seq__35839__$2 = cljs.core.next(seq__35839__$1);
var attrs = first__35840__$1;
var children = seq__35839__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__35841_35891 = cljs.core.seq(children);
var chunk__35842_35892 = null;
var count__35843_35893 = (0);
var i__35844_35894 = (0);
while(true){
if((i__35844_35894 < count__35843_35893)){
var child_35895 = chunk__35842_35892.cljs$core$IIndexed$_nth$arity$2(null,i__35844_35894);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_35895) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_35895)));


var G__35896 = seq__35841_35891;
var G__35897 = chunk__35842_35892;
var G__35898 = count__35843_35893;
var G__35899 = (i__35844_35894 + (1));
seq__35841_35891 = G__35896;
chunk__35842_35892 = G__35897;
count__35843_35893 = G__35898;
i__35844_35894 = G__35899;
continue;
} else {
var temp__5753__auto___35900 = cljs.core.seq(seq__35841_35891);
if(temp__5753__auto___35900){
var seq__35841_35901__$1 = temp__5753__auto___35900;
if(cljs.core.chunked_seq_QMARK_(seq__35841_35901__$1)){
var c__4638__auto___35902 = cljs.core.chunk_first(seq__35841_35901__$1);
var G__35903 = cljs.core.chunk_rest(seq__35841_35901__$1);
var G__35904 = c__4638__auto___35902;
var G__35905 = cljs.core.count(c__4638__auto___35902);
var G__35906 = (0);
seq__35841_35891 = G__35903;
chunk__35842_35892 = G__35904;
count__35843_35893 = G__35905;
i__35844_35894 = G__35906;
continue;
} else {
var child_35907 = cljs.core.first(seq__35841_35901__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_35907) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_35907)));


var G__35909 = cljs.core.next(seq__35841_35901__$1);
var G__35910 = null;
var G__35911 = (0);
var G__35912 = (0);
seq__35841_35891 = G__35909;
chunk__35842_35892 = G__35910;
count__35843_35893 = G__35911;
i__35844_35894 = G__35912;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$console$iter__35845(s__35846){
return (new cljs.core.LazySeq(null,(function (){
var s__35846__$1 = s__35846;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35846__$1);
if(temp__5753__auto__){
var s__35846__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35846__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35846__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35848 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35847 = (0);
while(true){
if((i__35847 < size__4610__auto__)){
var value = cljs.core._nth(c__4609__auto__,i__35847);
cljs.core.chunk_append(b__35848,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__35916 = (i__35847 + (1));
i__35847 = G__35916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35848),shadow$cljs$devtools$client$console$iter__35845(cljs.core.chunk_rest(s__35846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35848),null);
}
} else {
var value = cljs.core.first(s__35846__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__35845(cljs.core.rest(s__35846__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$console$iter__35851(s__35852){
return (new cljs.core.LazySeq(null,(function (){
var s__35852__$1 = s__35852;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35852__$1);
if(temp__5753__auto__){
var s__35852__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35852__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35852__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35854 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35853 = (0);
while(true){
if((i__35853 < size__4610__auto__)){
var key = cljs.core._nth(c__4609__auto__,i__35853);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__35854,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__35917 = (i__35853 + (1));
i__35853 = G__35917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35854),shadow$cljs$devtools$client$console$iter__35851(cljs.core.chunk_rest(s__35852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35854),null);
}
} else {
var key = cljs.core.first(s__35852__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__35851(cljs.core.rest(s__35852__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e35857){var e = e35857;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5753__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__35877 = f;
G__35877.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__35877.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__35877.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__35877.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__35877.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__35877;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35878_SHARP_){
return goog.object.get(p1__35878_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();
Object.defineProperty(module.exports, "SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SymbolFormatter; } });
Object.defineProperty(module.exports, "KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.KeywordFormatter; } });
Object.defineProperty(module.exports, "__GT_SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SeqFormatter; } });
Object.defineProperty(module.exports, "clj__GT_jsonml", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.clj__GT_jsonml; } });
Object.defineProperty(module.exports, "keyword_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.keyword_style; } });
Object.defineProperty(module.exports, "__GT_SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SymbolFormatter; } });
Object.defineProperty(module.exports, "push_all", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.push_all; } });
Object.defineProperty(module.exports, "map__GT_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.map__GT_style; } });
Object.defineProperty(module.exports, "object_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.object_ref; } });
Object.defineProperty(module.exports, "DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.DerefFormatter; } });
Object.defineProperty(module.exports, "remove_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.remove_all_BANG_; } });
Object.defineProperty(module.exports, "MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.MapFormatter; } });
Object.defineProperty(module.exports, "SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SeqFormatter; } });
Object.defineProperty(module.exports, "__GT_KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_KeywordFormatter; } });
Object.defineProperty(module.exports, "install_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.install_all_BANG_; } });
Object.defineProperty(module.exports, "__GT_MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_MapFormatter; } });
Object.defineProperty(module.exports, "__GT_DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_DerefFormatter; } });
//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
