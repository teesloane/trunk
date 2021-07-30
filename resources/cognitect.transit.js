var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./com.cognitect.transit.js");
require("./com.cognitect.transit.types.js");
require("./com.cognitect.transit.eq.js");
require("./goog.math.long.js");
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

$CLJS.SHADOW_ENV.setLoaded("cognitect.transit.js");

goog.provide('cognitect.transit');
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));
(goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return other.cljs$core$IEquiv$_equiv$arity$2(null,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash(this$__$1.toString());
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__34976_35247 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__34977_35248 = null;
var count__34978_35249 = (0);
var i__34979_35250 = (0);
while(true){
if((i__34979_35250 < count__34978_35249)){
var k_35251 = chunk__34977_35248.cljs$core$IIndexed$_nth$arity$2(null,i__34979_35250);
var v_35253 = (b[k_35251]);
(a[k_35251] = v_35253);


var G__35254 = seq__34976_35247;
var G__35255 = chunk__34977_35248;
var G__35256 = count__34978_35249;
var G__35257 = (i__34979_35250 + (1));
seq__34976_35247 = G__35254;
chunk__34977_35248 = G__35255;
count__34978_35249 = G__35256;
i__34979_35250 = G__35257;
continue;
} else {
var temp__5753__auto___35259 = cljs.core.seq(seq__34976_35247);
if(temp__5753__auto___35259){
var seq__34976_35260__$1 = temp__5753__auto___35259;
if(cljs.core.chunked_seq_QMARK_(seq__34976_35260__$1)){
var c__4638__auto___35263 = cljs.core.chunk_first(seq__34976_35260__$1);
var G__35264 = cljs.core.chunk_rest(seq__34976_35260__$1);
var G__35265 = c__4638__auto___35263;
var G__35266 = cljs.core.count(c__4638__auto___35263);
var G__35267 = (0);
seq__34976_35247 = G__35264;
chunk__34977_35248 = G__35265;
count__34978_35249 = G__35266;
i__34979_35250 = G__35267;
continue;
} else {
var k_35269 = cljs.core.first(seq__34976_35260__$1);
var v_35270 = (b[k_35269]);
(a[k_35269] = v_35270);


var G__35272 = cljs.core.next(seq__34976_35260__$1);
var G__35273 = null;
var G__35274 = (0);
var G__35275 = (0);
seq__34976_35247 = G__35272;
chunk__34977_35248 = G__35273;
count__34978_35249 = G__35274;
i__34979_35250 = G__35275;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from string tag to a decoder function of one
 * argument which returns the in-memory representation of the semantic transit
 * value. If a :default handler is provided, it will be used when no matching
 * read handler can be found.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__35036 = arguments.length;
switch (G__35036) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name(type),cognitect.transit.opts_merge(({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}),":",(function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
}),"set",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__35288 = (i + (2));
var G__35289 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__35288;
ret = G__35289;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta((v[(0)]),(v[(1)]));
})], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328))], 0))), "defaultHandler": new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35084_35296 = cljs.core.seq(v);
var chunk__35085_35297 = null;
var count__35087_35298 = (0);
var i__35088_35299 = (0);
while(true){
if((i__35088_35299 < count__35087_35298)){
var x_35300 = chunk__35085_35297.cljs$core$IIndexed$_nth$arity$2(null,i__35088_35299);
ret.push(x_35300);


var G__35301 = seq__35084_35296;
var G__35302 = chunk__35085_35297;
var G__35303 = count__35087_35298;
var G__35304 = (i__35088_35299 + (1));
seq__35084_35296 = G__35301;
chunk__35085_35297 = G__35302;
count__35087_35298 = G__35303;
i__35088_35299 = G__35304;
continue;
} else {
var temp__5753__auto___35305 = cljs.core.seq(seq__35084_35296);
if(temp__5753__auto___35305){
var seq__35084_35306__$1 = temp__5753__auto___35305;
if(cljs.core.chunked_seq_QMARK_(seq__35084_35306__$1)){
var c__4638__auto___35307 = cljs.core.chunk_first(seq__35084_35306__$1);
var G__35308 = cljs.core.chunk_rest(seq__35084_35306__$1);
var G__35309 = c__4638__auto___35307;
var G__35310 = cljs.core.count(c__4638__auto___35307);
var G__35311 = (0);
seq__35084_35296 = G__35308;
chunk__35085_35297 = G__35309;
count__35087_35298 = G__35310;
i__35088_35299 = G__35311;
continue;
} else {
var x_35312 = cljs.core.first(seq__35084_35306__$1);
ret.push(x_35312);


var G__35316 = cljs.core.next(seq__35084_35306__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__35084_35296 = G__35316;
chunk__35085_35297 = G__35317;
count__35087_35298 = G__35318;
i__35088_35299 = G__35319;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35121_35323 = cljs.core.seq(v);
var chunk__35122_35324 = null;
var count__35123_35325 = (0);
var i__35124_35326 = (0);
while(true){
if((i__35124_35326 < count__35123_35325)){
var x_35327 = chunk__35122_35324.cljs$core$IIndexed$_nth$arity$2(null,i__35124_35326);
ret.push(x_35327);


var G__35328 = seq__35121_35323;
var G__35329 = chunk__35122_35324;
var G__35330 = count__35123_35325;
var G__35331 = (i__35124_35326 + (1));
seq__35121_35323 = G__35328;
chunk__35122_35324 = G__35329;
count__35123_35325 = G__35330;
i__35124_35326 = G__35331;
continue;
} else {
var temp__5753__auto___35332 = cljs.core.seq(seq__35121_35323);
if(temp__5753__auto___35332){
var seq__35121_35333__$1 = temp__5753__auto___35332;
if(cljs.core.chunked_seq_QMARK_(seq__35121_35333__$1)){
var c__4638__auto___35334 = cljs.core.chunk_first(seq__35121_35333__$1);
var G__35335 = cljs.core.chunk_rest(seq__35121_35333__$1);
var G__35336 = c__4638__auto___35334;
var G__35337 = cljs.core.count(c__4638__auto___35334);
var G__35338 = (0);
seq__35121_35323 = G__35335;
chunk__35122_35324 = G__35336;
count__35123_35325 = G__35337;
i__35124_35326 = G__35338;
continue;
} else {
var x_35339 = cljs.core.first(seq__35121_35333__$1);
ret.push(x_35339);


var G__35340 = cljs.core.next(seq__35121_35333__$1);
var G__35341 = null;
var G__35342 = (0);
var G__35343 = (0);
seq__35121_35323 = G__35340;
chunk__35122_35324 = G__35341;
count__35123_35325 = G__35342;
i__35124_35326 = G__35343;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35132_35345 = cljs.core.seq(v);
var chunk__35133_35346 = null;
var count__35134_35347 = (0);
var i__35135_35348 = (0);
while(true){
if((i__35135_35348 < count__35134_35347)){
var x_35349 = chunk__35133_35346.cljs$core$IIndexed$_nth$arity$2(null,i__35135_35348);
ret.push(x_35349);


var G__35350 = seq__35132_35345;
var G__35351 = chunk__35133_35346;
var G__35352 = count__35134_35347;
var G__35353 = (i__35135_35348 + (1));
seq__35132_35345 = G__35350;
chunk__35133_35346 = G__35351;
count__35134_35347 = G__35352;
i__35135_35348 = G__35353;
continue;
} else {
var temp__5753__auto___35357 = cljs.core.seq(seq__35132_35345);
if(temp__5753__auto___35357){
var seq__35132_35358__$1 = temp__5753__auto___35357;
if(cljs.core.chunked_seq_QMARK_(seq__35132_35358__$1)){
var c__4638__auto___35359 = cljs.core.chunk_first(seq__35132_35358__$1);
var G__35360 = cljs.core.chunk_rest(seq__35132_35358__$1);
var G__35361 = c__4638__auto___35359;
var G__35362 = cljs.core.count(c__4638__auto___35359);
var G__35363 = (0);
seq__35132_35345 = G__35360;
chunk__35133_35346 = G__35361;
count__35134_35347 = G__35362;
i__35135_35348 = G__35363;
continue;
} else {
var x_35364 = cljs.core.first(seq__35132_35358__$1);
ret.push(x_35364);


var G__35365 = cljs.core.next(seq__35132_35358__$1);
var G__35366 = null;
var G__35367 = (0);
var G__35368 = (0);
seq__35132_35345 = G__35365;
chunk__35133_35346 = G__35366;
count__35134_35347 = G__35367;
i__35135_35348 = G__35368;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

(cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cognitect.transit.WithMeta.cljs$lang$type = true);

(cognitect.transit.WithMeta.cljs$lang$ctorStr = "cognitect.transit/WithMeta");

(cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/WithMeta");
}));

/**
 * Positional factory function for cognitect.transit/WithMeta.
 */
cognitect.transit.__GT_WithMeta = (function cognitect$transit$__GT_WithMeta(value,meta){
return (new cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
*/
cognitect.transit.WithMetaHandler = (function (){
});
(cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
}));

(cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
}));

(cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.WithMetaHandler.cljs$lang$type = true);

(cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "cognitect.transit/WithMetaHandler");

(cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/WithMetaHandler");
}));

/**
 * Positional factory function for cognitect.transit/WithMetaHandler.
 */
cognitect.transit.__GT_WithMetaHandler = (function cognitect$transit$__GT_WithMetaHandler(){
return (new cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances. Can optionally
 *               provide a :default write handler which will be used if no
 *               matching handler can be found.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__35155 = arguments.length;
switch (G__35155) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var meta_handler = (new cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));
return com.cognitect.transit.writer(cljs.core.name(type),cognitect.transit.opts_merge(({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv((function (obj,k,v){
var G__35164 = obj;
G__35164.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__35164;
}),["^ "],m);
}), "handlers": (function (){var x35165 = cljs.core.clone(handlers);
(x35165.forEach = (function (f){
var coll = this;
var seq__35166 = cljs.core.seq(coll);
var chunk__35167 = null;
var count__35168 = (0);
var i__35169 = (0);
while(true){
if((i__35169 < count__35168)){
var vec__35180 = chunk__35167.cljs$core$IIndexed$_nth$arity$2(null,i__35169);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35180,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35180,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__35394 = seq__35166;
var G__35395 = chunk__35167;
var G__35396 = count__35168;
var G__35397 = (i__35169 + (1));
seq__35166 = G__35394;
chunk__35167 = G__35395;
count__35168 = G__35396;
i__35169 = G__35397;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35166);
if(temp__5753__auto__){
var seq__35166__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35166__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35166__$1);
var G__35399 = cljs.core.chunk_rest(seq__35166__$1);
var G__35400 = c__4638__auto__;
var G__35401 = cljs.core.count(c__4638__auto__);
var G__35402 = (0);
seq__35166 = G__35399;
chunk__35167 = G__35400;
count__35168 = G__35401;
i__35169 = G__35402;
continue;
} else {
var vec__35185 = cljs.core.first(seq__35166__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35185,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),k)){
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,"default") : f.call(null,v,"default"));
} else {
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));
}


var G__35404 = cljs.core.next(seq__35166__$1);
var G__35405 = null;
var G__35406 = (0);
var G__35407 = (0);
seq__35166 = G__35404;
chunk__35167 = G__35405;
count__35168 = G__35406;
i__35169 = G__35407;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x35165;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__35201 = arguments.length;
switch (G__35201) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit35210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit35210 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta35211){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta35211 = meta35211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit35210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35212,meta35211__$1){
var self__ = this;
var _35212__$1 = this;
return (new cognitect.transit.t_cognitect$transit35210(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta35211__$1));
}));

(cognitect.transit.t_cognitect$transit35210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35212){
var self__ = this;
var _35212__$1 = this;
return self__.meta35211;
}));

(cognitect.transit.t_cognitect$transit35210.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit35210.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
}));

(cognitect.transit.t_cognitect$transit35210.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit35210.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit35210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta35211","meta35211",-2087334459,null)], null);
}));

(cognitect.transit.t_cognitect$transit35210.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit35210.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit35210");

(cognitect.transit.t_cognitect$transit35210.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cognitect.transit/t_cognitect$transit35210");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit35210.
 */
cognitect.transit.__GT_t_cognitect$transit35210 = (function cognitect$transit$__GT_t_cognitect$transit35210(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35211){
return (new cognitect.transit.t_cognitect$transit35210(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta35211));
});

}

return (new cognitect.transit.t_cognitect$transit35210(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4212__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
cognitect.transit.write_meta = (function cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = x.cljs$core$IMeta$_meta$arity$1(null);
if((!((m == null)))){
return (new cognitect.transit.WithMeta(x.cljs$core$IWithMeta$_with_meta$arity$2(null,null),m));
} else {
return x;
}
} else {
return x;
}
});
Object.defineProperty(module.exports, "uri", { enumerable: false, get: function() { return cognitect.transit.uri; } });
Object.defineProperty(module.exports, "uuid", { enumerable: false, get: function() { return cognitect.transit.uuid; } });
Object.defineProperty(module.exports, "KeywordHandler", { enumerable: false, get: function() { return cognitect.transit.KeywordHandler; } });
Object.defineProperty(module.exports, "VectorHandler", { enumerable: false, get: function() { return cognitect.transit.VectorHandler; } });
Object.defineProperty(module.exports, "write_meta", { enumerable: false, get: function() { return cognitect.transit.write_meta; } });
Object.defineProperty(module.exports, "bigint_QMARK_", { enumerable: false, get: function() { return cognitect.transit.bigint_QMARK_; } });
Object.defineProperty(module.exports, "MapBuilder", { enumerable: false, get: function() { return cognitect.transit.MapBuilder; } });
Object.defineProperty(module.exports, "__GT_UUIDHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_UUIDHandler; } });
Object.defineProperty(module.exports, "__GT_MapBuilder", { enumerable: false, get: function() { return cognitect.transit.__GT_MapBuilder; } });
Object.defineProperty(module.exports, "__GT_KeywordHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_KeywordHandler; } });
Object.defineProperty(module.exports, "binary", { enumerable: false, get: function() { return cognitect.transit.binary; } });
Object.defineProperty(module.exports, "__GT_SymbolHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_SymbolHandler; } });
Object.defineProperty(module.exports, "write_handler", { enumerable: false, get: function() { return cognitect.transit.write_handler; } });
Object.defineProperty(module.exports, "VectorBuilder", { enumerable: false, get: function() { return cognitect.transit.VectorBuilder; } });
Object.defineProperty(module.exports, "WithMeta", { enumerable: false, get: function() { return cognitect.transit.WithMeta; } });
Object.defineProperty(module.exports, "read", { enumerable: false, get: function() { return cognitect.transit.read; } });
Object.defineProperty(module.exports, "uri_QMARK_", { enumerable: false, get: function() { return cognitect.transit.uri_QMARK_; } });
Object.defineProperty(module.exports, "binary_QMARK_", { enumerable: false, get: function() { return cognitect.transit.binary_QMARK_; } });
Object.defineProperty(module.exports, "__GT_MapHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_MapHandler; } });
Object.defineProperty(module.exports, "MapHandler", { enumerable: false, get: function() { return cognitect.transit.MapHandler; } });
Object.defineProperty(module.exports, "bigint", { enumerable: false, get: function() { return cognitect.transit.bigint; } });
Object.defineProperty(module.exports, "bigdec_QMARK_", { enumerable: false, get: function() { return cognitect.transit.bigdec_QMARK_; } });
Object.defineProperty(module.exports, "SetHandler", { enumerable: false, get: function() { return cognitect.transit.SetHandler; } });
Object.defineProperty(module.exports, "SymbolHandler", { enumerable: false, get: function() { return cognitect.transit.SymbolHandler; } });
Object.defineProperty(module.exports, "tagged_value", { enumerable: false, get: function() { return cognitect.transit.tagged_value; } });
Object.defineProperty(module.exports, "__GT_ListHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_ListHandler; } });
Object.defineProperty(module.exports, "__GT_VectorHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_VectorHandler; } });
Object.defineProperty(module.exports, "t_cognitect$transit35210", { enumerable: false, get: function() { return cognitect.transit.t_cognitect$transit35210; } });
Object.defineProperty(module.exports, "ListHandler", { enumerable: false, get: function() { return cognitect.transit.ListHandler; } });
Object.defineProperty(module.exports, "__GT_SetHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_SetHandler; } });
Object.defineProperty(module.exports, "__GT_WithMetaHandler", { enumerable: false, get: function() { return cognitect.transit.__GT_WithMetaHandler; } });
Object.defineProperty(module.exports, "UUIDHandler", { enumerable: false, get: function() { return cognitect.transit.UUIDHandler; } });
Object.defineProperty(module.exports, "__GT_t_cognitect$transit35210", { enumerable: false, get: function() { return cognitect.transit.__GT_t_cognitect$transit35210; } });
Object.defineProperty(module.exports, "__GT_WithMeta", { enumerable: false, get: function() { return cognitect.transit.__GT_WithMeta; } });
Object.defineProperty(module.exports, "tagged_value_QMARK_", { enumerable: false, get: function() { return cognitect.transit.tagged_value_QMARK_; } });
Object.defineProperty(module.exports, "read_handler", { enumerable: false, get: function() { return cognitect.transit.read_handler; } });
Object.defineProperty(module.exports, "write", { enumerable: false, get: function() { return cognitect.transit.write; } });
Object.defineProperty(module.exports, "integer_QMARK_", { enumerable: false, get: function() { return cognitect.transit.integer_QMARK_; } });
Object.defineProperty(module.exports, "link_QMARK_", { enumerable: false, get: function() { return cognitect.transit.link_QMARK_; } });
Object.defineProperty(module.exports, "integer", { enumerable: false, get: function() { return cognitect.transit.integer; } });
Object.defineProperty(module.exports, "WithMetaHandler", { enumerable: false, get: function() { return cognitect.transit.WithMetaHandler; } });
Object.defineProperty(module.exports, "uuid_QMARK_", { enumerable: false, get: function() { return cognitect.transit.uuid_QMARK_; } });
Object.defineProperty(module.exports, "bigdec", { enumerable: false, get: function() { return cognitect.transit.bigdec; } });
Object.defineProperty(module.exports, "writer", { enumerable: false, get: function() { return cognitect.transit.writer; } });
Object.defineProperty(module.exports, "link", { enumerable: false, get: function() { return cognitect.transit.link; } });
Object.defineProperty(module.exports, "quoted_QMARK_", { enumerable: false, get: function() { return cognitect.transit.quoted_QMARK_; } });
Object.defineProperty(module.exports, "__GT_VectorBuilder", { enumerable: false, get: function() { return cognitect.transit.__GT_VectorBuilder; } });
Object.defineProperty(module.exports, "reader", { enumerable: false, get: function() { return cognitect.transit.reader; } });
Object.defineProperty(module.exports, "opts_merge", { enumerable: false, get: function() { return cognitect.transit.opts_merge; } });
Object.defineProperty(module.exports, "quoted", { enumerable: false, get: function() { return cognitect.transit.quoted; } });
//# sourceMappingURL=cognitect.transit.js.map
