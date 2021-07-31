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
var G__51917__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51918__i = 0, G__51918__a = new Array(arguments.length -  0);
while (G__51918__i < G__51918__a.length) {G__51918__a[G__51918__i] = arguments[G__51918__i + 0]; ++G__51918__i;}
  args = new cljs.core.IndexedSeq(G__51918__a,0,null);
} 
return G__51917__delegate.call(this,args);};
G__51917.cljs$lang$maxFixedArity = 0;
G__51917.cljs$lang$applyTo = (function (arglist__51919){
var args = cljs.core.seq(arglist__51919);
return G__51917__delegate(args);
});
G__51917.cljs$core$IFn$_invoke$arity$variadic = G__51917__delegate;
return G__51917;
})()
);

(o.error = (function() { 
var G__51920__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51921__i = 0, G__51921__a = new Array(arguments.length -  0);
while (G__51921__i < G__51921__a.length) {G__51921__a[G__51921__i] = arguments[G__51921__i + 0]; ++G__51921__i;}
  args = new cljs.core.IndexedSeq(G__51921__a,0,null);
} 
return G__51920__delegate.call(this,args);};
G__51920.cljs$lang$maxFixedArity = 0;
G__51920.cljs$lang$applyTo = (function (arglist__51922){
var args = cljs.core.seq(arglist__51922);
return G__51920__delegate(args);
});
G__51920.cljs$core$IFn$_invoke$arity$variadic = G__51920__delegate;
return G__51920;
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

//# sourceMappingURL=reagent.debug.js.map
