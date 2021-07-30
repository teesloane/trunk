var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.debug.js");

goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36064__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36065__i = 0, G__36065__a = new Array(arguments.length -  0);
while (G__36065__i < G__36065__a.length) {G__36065__a[G__36065__i] = arguments[G__36065__i + 0]; ++G__36065__i;}
  args = new cljs.core.IndexedSeq(G__36065__a,0,null);
} 
return G__36064__delegate.call(this,args);};
G__36064.cljs$lang$maxFixedArity = 0;
G__36064.cljs$lang$applyTo = (function (arglist__36066){
var args = cljs.core.seq(arglist__36066);
return G__36064__delegate(args);
});
G__36064.cljs$core$IFn$_invoke$arity$variadic = G__36064__delegate;
return G__36064;
})()
);

(o.error = (function() { 
var G__36067__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36068__i = 0, G__36068__a = new Array(arguments.length -  0);
while (G__36068__i < G__36068__a.length) {G__36068__a[G__36068__i] = arguments[G__36068__i + 0]; ++G__36068__i;}
  args = new cljs.core.IndexedSeq(G__36068__a,0,null);
} 
return G__36067__delegate.call(this,args);};
G__36067.cljs$lang$maxFixedArity = 0;
G__36067.cljs$lang$applyTo = (function (arglist__36069){
var args = cljs.core.seq(arglist__36069);
return G__36067__delegate(args);
});
G__36067.cljs$core$IFn$_invoke$arity$variadic = G__36067__delegate;
return G__36067;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
Object.defineProperty(module.exports, "has_console", { enumerable: false, get: function() { return reagent.debug.has_console; } });
Object.defineProperty(module.exports, "tracking", { enumerable: false, get: function() { return reagent.debug.tracking; } });
Object.defineProperty(module.exports, "warnings", { enumerable: false, get: function() { return reagent.debug.warnings; } });
Object.defineProperty(module.exports, "track_console", { enumerable: false, get: function() { return reagent.debug.track_console; } });
Object.defineProperty(module.exports, "track_warnings", { enumerable: false, get: function() { return reagent.debug.track_warnings; } });
//# sourceMappingURL=reagent.debug.js.map
