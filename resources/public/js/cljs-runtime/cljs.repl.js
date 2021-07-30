goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40082){
var map__40086 = p__40082;
var map__40086__$1 = cljs.core.__destructure_map(map__40086);
var m = map__40086__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40086__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40088_40409 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40089_40410 = null;
var count__40090_40411 = (0);
var i__40091_40412 = (0);
while(true){
if((i__40091_40412 < count__40090_40411)){
var f_40415 = chunk__40089_40410.cljs$core$IIndexed$_nth$arity$2(null,i__40091_40412);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40415], 0));


var G__40416 = seq__40088_40409;
var G__40417 = chunk__40089_40410;
var G__40418 = count__40090_40411;
var G__40419 = (i__40091_40412 + (1));
seq__40088_40409 = G__40416;
chunk__40089_40410 = G__40417;
count__40090_40411 = G__40418;
i__40091_40412 = G__40419;
continue;
} else {
var temp__5753__auto___40425 = cljs.core.seq(seq__40088_40409);
if(temp__5753__auto___40425){
var seq__40088_40426__$1 = temp__5753__auto___40425;
if(cljs.core.chunked_seq_QMARK_(seq__40088_40426__$1)){
var c__4638__auto___40427 = cljs.core.chunk_first(seq__40088_40426__$1);
var G__40428 = cljs.core.chunk_rest(seq__40088_40426__$1);
var G__40429 = c__4638__auto___40427;
var G__40430 = cljs.core.count(c__4638__auto___40427);
var G__40431 = (0);
seq__40088_40409 = G__40428;
chunk__40089_40410 = G__40429;
count__40090_40411 = G__40430;
i__40091_40412 = G__40431;
continue;
} else {
var f_40433 = cljs.core.first(seq__40088_40426__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40433], 0));


var G__40434 = cljs.core.next(seq__40088_40426__$1);
var G__40435 = null;
var G__40436 = (0);
var G__40437 = (0);
seq__40088_40409 = G__40434;
chunk__40089_40410 = G__40435;
count__40090_40411 = G__40436;
i__40091_40412 = G__40437;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40438 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40438], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40438)))?cljs.core.second(arglists_40438):arglists_40438)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40096_40441 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40097_40442 = null;
var count__40098_40443 = (0);
var i__40099_40444 = (0);
while(true){
if((i__40099_40444 < count__40098_40443)){
var vec__40111_40449 = chunk__40097_40442.cljs$core$IIndexed$_nth$arity$2(null,i__40099_40444);
var name_40450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40111_40449,(0),null);
var map__40114_40451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40111_40449,(1),null);
var map__40114_40452__$1 = cljs.core.__destructure_map(map__40114_40451);
var doc_40453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40114_40452__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40114_40452__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40450], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40454], 0));

if(cljs.core.truth_(doc_40453)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40453], 0));
} else {
}


var G__40455 = seq__40096_40441;
var G__40456 = chunk__40097_40442;
var G__40457 = count__40098_40443;
var G__40458 = (i__40099_40444 + (1));
seq__40096_40441 = G__40455;
chunk__40097_40442 = G__40456;
count__40098_40443 = G__40457;
i__40099_40444 = G__40458;
continue;
} else {
var temp__5753__auto___40459 = cljs.core.seq(seq__40096_40441);
if(temp__5753__auto___40459){
var seq__40096_40460__$1 = temp__5753__auto___40459;
if(cljs.core.chunked_seq_QMARK_(seq__40096_40460__$1)){
var c__4638__auto___40462 = cljs.core.chunk_first(seq__40096_40460__$1);
var G__40463 = cljs.core.chunk_rest(seq__40096_40460__$1);
var G__40464 = c__4638__auto___40462;
var G__40465 = cljs.core.count(c__4638__auto___40462);
var G__40466 = (0);
seq__40096_40441 = G__40463;
chunk__40097_40442 = G__40464;
count__40098_40443 = G__40465;
i__40099_40444 = G__40466;
continue;
} else {
var vec__40116_40467 = cljs.core.first(seq__40096_40460__$1);
var name_40468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40116_40467,(0),null);
var map__40119_40469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40116_40467,(1),null);
var map__40119_40470__$1 = cljs.core.__destructure_map(map__40119_40469);
var doc_40471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40119_40470__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40119_40470__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40468], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40472], 0));

if(cljs.core.truth_(doc_40471)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40471], 0));
} else {
}


var G__40476 = cljs.core.next(seq__40096_40460__$1);
var G__40477 = null;
var G__40478 = (0);
var G__40479 = (0);
seq__40096_40441 = G__40476;
chunk__40097_40442 = G__40477;
count__40098_40443 = G__40478;
i__40099_40444 = G__40479;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40120 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40121 = null;
var count__40122 = (0);
var i__40123 = (0);
while(true){
if((i__40123 < count__40122)){
var role = chunk__40121.cljs$core$IIndexed$_nth$arity$2(null,i__40123);
var temp__5753__auto___40480__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40480__$1)){
var spec_40481 = temp__5753__auto___40480__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40481)], 0));
} else {
}


var G__40482 = seq__40120;
var G__40483 = chunk__40121;
var G__40484 = count__40122;
var G__40485 = (i__40123 + (1));
seq__40120 = G__40482;
chunk__40121 = G__40483;
count__40122 = G__40484;
i__40123 = G__40485;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__40120);
if(temp__5753__auto____$1){
var seq__40120__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40120__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40120__$1);
var G__40486 = cljs.core.chunk_rest(seq__40120__$1);
var G__40487 = c__4638__auto__;
var G__40488 = cljs.core.count(c__4638__auto__);
var G__40489 = (0);
seq__40120 = G__40486;
chunk__40121 = G__40487;
count__40122 = G__40488;
i__40123 = G__40489;
continue;
} else {
var role = cljs.core.first(seq__40120__$1);
var temp__5753__auto___40490__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40490__$2)){
var spec_40491 = temp__5753__auto___40490__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40491)], 0));
} else {
}


var G__40492 = cljs.core.next(seq__40120__$1);
var G__40493 = null;
var G__40494 = (0);
var G__40495 = (0);
seq__40120 = G__40492;
chunk__40121 = G__40493;
count__40122 = G__40494;
i__40123 = G__40495;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40497 = cljs.core.ex_cause(t);
via = G__40496;
t = G__40497;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40168 = datafied_throwable;
var map__40168__$1 = cljs.core.__destructure_map(map__40168);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40168__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40168__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40168__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40169 = cljs.core.last(via);
var map__40169__$1 = cljs.core.__destructure_map(map__40169);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40169__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40170 = data;
var map__40170__$1 = cljs.core.__destructure_map(map__40170);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40171 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40171__$1 = cljs.core.__destructure_map(map__40171);
var top_data = map__40171__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40171__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40174 = phase;
var G__40174__$1 = (((G__40174 instanceof cljs.core.Keyword))?G__40174.fqn:null);
switch (G__40174__$1) {
case "read-source":
var map__40178 = data;
var map__40178__$1 = cljs.core.__destructure_map(map__40178);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40179 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40179__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40179,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40179);
var G__40179__$2 = (cljs.core.truth_((function (){var fexpr__40186 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40186.cljs$core$IFn$_invoke$arity$1 ? fexpr__40186.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40186.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40179__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40179__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40179__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40192 = top_data;
var G__40192__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40192,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40192);
var G__40192__$2 = (cljs.core.truth_((function (){var fexpr__40202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40202.cljs$core$IFn$_invoke$arity$1 ? fexpr__40202.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40202.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40192__$1);
var G__40192__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40192__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40192__$2);
var G__40192__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40192__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40192__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40192__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40192__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40205 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40205,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40205,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40205,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40205,(3),null);
var G__40208 = top_data;
var G__40208__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40208,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40208);
var G__40208__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40208__$1);
var G__40208__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40208__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40208__$2);
var G__40208__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40208__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40208__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40208__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40208__$4;
}

break;
case "execution":
var vec__40216 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40216,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40216,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40216,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40216,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40167_SHARP_){
var or__4212__auto__ = (p1__40167_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__40230 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40230.cljs$core$IFn$_invoke$arity$1 ? fexpr__40230.cljs$core$IFn$_invoke$arity$1(p1__40167_SHARP_) : fexpr__40230.call(null,p1__40167_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__40235 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40235__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40235,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40235);
var G__40235__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40235__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40235__$1);
var G__40235__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40235__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40235__$2);
var G__40235__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40235__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40235__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40235__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40235__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40174__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40268){
var map__40272 = p__40268;
var map__40272__$1 = cljs.core.__destructure_map(map__40272);
var triage_data = map__40272__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40301 = phase;
var G__40301__$1 = (((G__40301 instanceof cljs.core.Keyword))?G__40301.fqn:null);
switch (G__40301__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40307 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40308 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40309 = loc;
var G__40310 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40312_40549 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40313_40550 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40314_40551 = true;
var _STAR_print_fn_STAR__temp_val__40315_40552 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40314_40551);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40315_40552);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40260_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40260_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40313_40550);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40312_40549);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40307,G__40308,G__40309,G__40310) : format.call(null,G__40307,G__40308,G__40309,G__40310));

break;
case "macroexpansion":
var G__40342 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40343 = cause_type;
var G__40344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40345 = loc;
var G__40346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40342,G__40343,G__40344,G__40345,G__40346) : format.call(null,G__40342,G__40343,G__40344,G__40345,G__40346));

break;
case "compile-syntax-check":
var G__40350 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40351 = cause_type;
var G__40352 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40353 = loc;
var G__40354 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40350,G__40351,G__40352,G__40353,G__40354) : format.call(null,G__40350,G__40351,G__40352,G__40353,G__40354));

break;
case "compilation":
var G__40355 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40356 = cause_type;
var G__40357 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40358 = loc;
var G__40359 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40355,G__40356,G__40357,G__40358,G__40359) : format.call(null,G__40355,G__40356,G__40357,G__40358,G__40359));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40364 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40365 = symbol;
var G__40366 = loc;
var G__40367 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40372_40558 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40373_40559 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40374_40560 = true;
var _STAR_print_fn_STAR__temp_val__40378_40561 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40374_40560);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40378_40561);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40373_40559);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40372_40558);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40364,G__40365,G__40366,G__40367) : format.call(null,G__40364,G__40365,G__40366,G__40367));
} else {
var G__40380 = "Execution error%s at %s(%s).\n%s\n";
var G__40381 = cause_type;
var G__40382 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40383 = loc;
var G__40384 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40380,G__40381,G__40382,G__40383,G__40384) : format.call(null,G__40380,G__40381,G__40382,G__40383,G__40384));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40301__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
