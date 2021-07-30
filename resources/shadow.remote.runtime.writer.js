var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.string.stringbuffer.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.writer.js");

goog.provide('shadow.remote.runtime.writer');

/**
* @constructor
 * @implements {cljs.core.IWriter}
*/
shadow.remote.runtime.writer.LimitWriter = (function (sb,limit){
this.sb = sb;
this.limit = limit;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.remote.runtime.writer.LimitWriter.prototype.getString = (function (){
var self__ = this;
var this$ = this;
return self__.sb.toString();
}));

(shadow.remote.runtime.writer.LimitWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
self__.sb.append(s);

if((self__.sb.getLength() >= self__.limit)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["The limit of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.limit)," bytes was reached while printing."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("shadow.remote.runtime.writer","limit-reached","shadow.remote.runtime.writer/limit-reached",1304350996),new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit], null));
} else {
return null;
}
}));

(shadow.remote.runtime.writer.LimitWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(shadow.remote.runtime.writer.LimitWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"StringBuffer","StringBuffer",864531538,null)], null)),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
}));

(shadow.remote.runtime.writer.LimitWriter.cljs$lang$type = true);

(shadow.remote.runtime.writer.LimitWriter.cljs$lang$ctorStr = "shadow.remote.runtime.writer/LimitWriter");

(shadow.remote.runtime.writer.LimitWriter.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.remote.runtime.writer/LimitWriter");
}));

/**
 * Positional factory function for shadow.remote.runtime.writer/LimitWriter.
 */
shadow.remote.runtime.writer.__GT_LimitWriter = (function shadow$remote$runtime$writer$__GT_LimitWriter(sb,limit){
return (new shadow.remote.runtime.writer.LimitWriter(sb,limit));
});

shadow.remote.runtime.writer.pr_str_limit = (function shadow$remote$runtime$writer$pr_str_limit(obj,limit){
var sb = (new goog.string.StringBuffer());
var writer = (new shadow.remote.runtime.writer.LimitWriter(sb,limit));
try{cljs.core.pr_writer(obj,writer,cljs.core.pr_opts());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,sb.toString()], null);
}catch (e34922){var e = e34922;
if((!(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("shadow.remote.runtime.writer","limit-reached","shadow.remote.runtime.writer/limit-reached",1304350996),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)))))){
throw e;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var s = sb.toString();
if((s.length > limit)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),limit);
} else {
return s;
}
})()], null);
}
}});
shadow.remote.runtime.writer.limit_writer = (function shadow$remote$runtime$writer$limit_writer(limit){
var sb = (new goog.string.StringBuffer());
return (new shadow.remote.runtime.writer.LimitWriter(sb,limit));
});
shadow.remote.runtime.writer.get_string = (function shadow$remote$runtime$writer$get_string(lw){
return lw.getString();
});
Object.defineProperty(module.exports, "LimitWriter", { enumerable: false, get: function() { return shadow.remote.runtime.writer.LimitWriter; } });
Object.defineProperty(module.exports, "__GT_LimitWriter", { enumerable: false, get: function() { return shadow.remote.runtime.writer.__GT_LimitWriter; } });
Object.defineProperty(module.exports, "pr_str_limit", { enumerable: false, get: function() { return shadow.remote.runtime.writer.pr_str_limit; } });
Object.defineProperty(module.exports, "limit_writer", { enumerable: false, get: function() { return shadow.remote.runtime.writer.limit_writer; } });
Object.defineProperty(module.exports, "get_string", { enumerable: false, get: function() { return shadow.remote.runtime.writer.get_string; } });
//# sourceMappingURL=shadow.remote.runtime.writer.js.map
