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
var G__26439__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26440__i = 0, G__26440__a = new Array(arguments.length -  0);
while (G__26440__i < G__26440__a.length) {G__26440__a[G__26440__i] = arguments[G__26440__i + 0]; ++G__26440__i;}
  args = new cljs.core.IndexedSeq(G__26440__a,0,null);
} 
return G__26439__delegate.call(this,args);};
G__26439.cljs$lang$maxFixedArity = 0;
G__26439.cljs$lang$applyTo = (function (arglist__26441){
var args = cljs.core.seq(arglist__26441);
return G__26439__delegate(args);
});
G__26439.cljs$core$IFn$_invoke$arity$variadic = G__26439__delegate;
return G__26439;
})()
);

(o.error = (function() { 
var G__26442__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26443__i = 0, G__26443__a = new Array(arguments.length -  0);
while (G__26443__i < G__26443__a.length) {G__26443__a[G__26443__i] = arguments[G__26443__i + 0]; ++G__26443__i;}
  args = new cljs.core.IndexedSeq(G__26443__a,0,null);
} 
return G__26442__delegate.call(this,args);};
G__26442.cljs$lang$maxFixedArity = 0;
G__26442.cljs$lang$applyTo = (function (arglist__26445){
var args = cljs.core.seq(arglist__26445);
return G__26442__delegate(args);
});
G__26442.cljs$core$IFn$_invoke$arity$variadic = G__26442__delegate;
return G__26442;
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
