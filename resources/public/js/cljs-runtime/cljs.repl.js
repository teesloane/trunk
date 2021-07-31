goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51263){
var map__51264 = p__51263;
var map__51264__$1 = cljs.core.__destructure_map(map__51264);
var m = map__51264__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51265_51478 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51266_51479 = null;
var count__51267_51480 = (0);
var i__51268_51481 = (0);
while(true){
if((i__51268_51481 < count__51267_51480)){
var f_51482 = chunk__51266_51479.cljs$core$IIndexed$_nth$arity$2(null,i__51268_51481);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51482], 0));


var G__51483 = seq__51265_51478;
var G__51484 = chunk__51266_51479;
var G__51485 = count__51267_51480;
var G__51486 = (i__51268_51481 + (1));
seq__51265_51478 = G__51483;
chunk__51266_51479 = G__51484;
count__51267_51480 = G__51485;
i__51268_51481 = G__51486;
continue;
} else {
var temp__5753__auto___51487 = cljs.core.seq(seq__51265_51478);
if(temp__5753__auto___51487){
var seq__51265_51488__$1 = temp__5753__auto___51487;
if(cljs.core.chunked_seq_QMARK_(seq__51265_51488__$1)){
var c__4638__auto___51489 = cljs.core.chunk_first(seq__51265_51488__$1);
var G__51490 = cljs.core.chunk_rest(seq__51265_51488__$1);
var G__51491 = c__4638__auto___51489;
var G__51492 = cljs.core.count(c__4638__auto___51489);
var G__51493 = (0);
seq__51265_51478 = G__51490;
chunk__51266_51479 = G__51491;
count__51267_51480 = G__51492;
i__51268_51481 = G__51493;
continue;
} else {
var f_51494 = cljs.core.first(seq__51265_51488__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51494], 0));


var G__51495 = cljs.core.next(seq__51265_51488__$1);
var G__51496 = null;
var G__51497 = (0);
var G__51498 = (0);
seq__51265_51478 = G__51495;
chunk__51266_51479 = G__51496;
count__51267_51480 = G__51497;
i__51268_51481 = G__51498;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51499 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51499], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51499)))?cljs.core.second(arglists_51499):arglists_51499)], 0));
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
var seq__51276_51500 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51277_51501 = null;
var count__51278_51502 = (0);
var i__51279_51503 = (0);
while(true){
if((i__51279_51503 < count__51278_51502)){
var vec__51290_51504 = chunk__51277_51501.cljs$core$IIndexed$_nth$arity$2(null,i__51279_51503);
var name_51505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290_51504,(0),null);
var map__51293_51506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290_51504,(1),null);
var map__51293_51507__$1 = cljs.core.__destructure_map(map__51293_51506);
var doc_51508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293_51507__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293_51507__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51505], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51509], 0));

if(cljs.core.truth_(doc_51508)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51508], 0));
} else {
}


var G__51510 = seq__51276_51500;
var G__51511 = chunk__51277_51501;
var G__51512 = count__51278_51502;
var G__51513 = (i__51279_51503 + (1));
seq__51276_51500 = G__51510;
chunk__51277_51501 = G__51511;
count__51278_51502 = G__51512;
i__51279_51503 = G__51513;
continue;
} else {
var temp__5753__auto___51514 = cljs.core.seq(seq__51276_51500);
if(temp__5753__auto___51514){
var seq__51276_51515__$1 = temp__5753__auto___51514;
if(cljs.core.chunked_seq_QMARK_(seq__51276_51515__$1)){
var c__4638__auto___51516 = cljs.core.chunk_first(seq__51276_51515__$1);
var G__51517 = cljs.core.chunk_rest(seq__51276_51515__$1);
var G__51518 = c__4638__auto___51516;
var G__51519 = cljs.core.count(c__4638__auto___51516);
var G__51520 = (0);
seq__51276_51500 = G__51517;
chunk__51277_51501 = G__51518;
count__51278_51502 = G__51519;
i__51279_51503 = G__51520;
continue;
} else {
var vec__51295_51521 = cljs.core.first(seq__51276_51515__$1);
var name_51522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51295_51521,(0),null);
var map__51298_51523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51295_51521,(1),null);
var map__51298_51524__$1 = cljs.core.__destructure_map(map__51298_51523);
var doc_51525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298_51524__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298_51524__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51522], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51526], 0));

if(cljs.core.truth_(doc_51525)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51525], 0));
} else {
}


var G__51527 = cljs.core.next(seq__51276_51515__$1);
var G__51528 = null;
var G__51529 = (0);
var G__51530 = (0);
seq__51276_51500 = G__51527;
chunk__51277_51501 = G__51528;
count__51278_51502 = G__51529;
i__51279_51503 = G__51530;
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

var seq__51301 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51302 = null;
var count__51303 = (0);
var i__51304 = (0);
while(true){
if((i__51304 < count__51303)){
var role = chunk__51302.cljs$core$IIndexed$_nth$arity$2(null,i__51304);
var temp__5753__auto___51531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51531__$1)){
var spec_51532 = temp__5753__auto___51531__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51532)], 0));
} else {
}


var G__51533 = seq__51301;
var G__51534 = chunk__51302;
var G__51535 = count__51303;
var G__51536 = (i__51304 + (1));
seq__51301 = G__51533;
chunk__51302 = G__51534;
count__51303 = G__51535;
i__51304 = G__51536;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__51301);
if(temp__5753__auto____$1){
var seq__51301__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51301__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51301__$1);
var G__51537 = cljs.core.chunk_rest(seq__51301__$1);
var G__51538 = c__4638__auto__;
var G__51539 = cljs.core.count(c__4638__auto__);
var G__51540 = (0);
seq__51301 = G__51537;
chunk__51302 = G__51538;
count__51303 = G__51539;
i__51304 = G__51540;
continue;
} else {
var role = cljs.core.first(seq__51301__$1);
var temp__5753__auto___51541__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51541__$2)){
var spec_51542 = temp__5753__auto___51541__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51542)], 0));
} else {
}


var G__51543 = cljs.core.next(seq__51301__$1);
var G__51544 = null;
var G__51545 = (0);
var G__51546 = (0);
seq__51301 = G__51543;
chunk__51302 = G__51544;
count__51303 = G__51545;
i__51304 = G__51546;
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
var G__51552 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51553 = cljs.core.ex_cause(t);
via = G__51552;
t = G__51553;
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
var map__51403 = datafied_throwable;
var map__51403__$1 = cljs.core.__destructure_map(map__51403);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51403__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51403__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51403__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51405 = cljs.core.last(via);
var map__51405__$1 = cljs.core.__destructure_map(map__51405);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51405__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51405__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51405__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51406 = data;
var map__51406__$1 = cljs.core.__destructure_map(map__51406);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51406__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51406__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51406__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51407 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51407__$1 = cljs.core.__destructure_map(map__51407);
var top_data = map__51407__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51408 = phase;
var G__51408__$1 = (((G__51408 instanceof cljs.core.Keyword))?G__51408.fqn:null);
switch (G__51408__$1) {
case "read-source":
var map__51409 = data;
var map__51409__$1 = cljs.core.__destructure_map(map__51409);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51411 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51411__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51411,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51411);
var G__51411__$2 = (cljs.core.truth_((function (){var fexpr__51412 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51412.cljs$core$IFn$_invoke$arity$1 ? fexpr__51412.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51412.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51411__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51411__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51411__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51413 = top_data;
var G__51413__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51413,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51413);
var G__51413__$2 = (cljs.core.truth_((function (){var fexpr__51415 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51415.cljs$core$IFn$_invoke$arity$1 ? fexpr__51415.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51415.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51413__$1);
var G__51413__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51413__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51413__$2);
var G__51413__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51413__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51413__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51413__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51413__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51417 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51417,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51417,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51417,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51417,(3),null);
var G__51420 = top_data;
var G__51420__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51420,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51420);
var G__51420__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51420__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51420__$1);
var G__51420__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51420__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51420__$2);
var G__51420__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51420__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51420__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51420__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51420__$4;
}

break;
case "execution":
var vec__51422 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51422,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51422,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51422,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51422,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51402_SHARP_){
var or__4212__auto__ = (p1__51402_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__51425 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51425.cljs$core$IFn$_invoke$arity$1 ? fexpr__51425.cljs$core$IFn$_invoke$arity$1(p1__51402_SHARP_) : fexpr__51425.call(null,p1__51402_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__51426 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51426__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51426,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51426);
var G__51426__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51426__$1);
var G__51426__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51426__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51426__$2);
var G__51426__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51426__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51426__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51426__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51426__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51408__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51433){
var map__51434 = p__51433;
var map__51434__$1 = cljs.core.__destructure_map(map__51434);
var triage_data = map__51434__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51434__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__51439 = phase;
var G__51439__$1 = (((G__51439 instanceof cljs.core.Keyword))?G__51439.fqn:null);
switch (G__51439__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51440 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51441 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51442 = loc;
var G__51443 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51444_51568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51445_51569 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51446_51570 = true;
var _STAR_print_fn_STAR__temp_val__51447_51571 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51446_51570);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51447_51571);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51429_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51429_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51445_51569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51444_51568);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51440,G__51441,G__51442,G__51443) : format.call(null,G__51440,G__51441,G__51442,G__51443));

break;
case "macroexpansion":
var G__51448 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51449 = cause_type;
var G__51450 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51451 = loc;
var G__51452 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51448,G__51449,G__51450,G__51451,G__51452) : format.call(null,G__51448,G__51449,G__51450,G__51451,G__51452));

break;
case "compile-syntax-check":
var G__51453 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51454 = cause_type;
var G__51455 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51456 = loc;
var G__51457 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51453,G__51454,G__51455,G__51456,G__51457) : format.call(null,G__51453,G__51454,G__51455,G__51456,G__51457));

break;
case "compilation":
var G__51458 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51459 = cause_type;
var G__51460 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51461 = loc;
var G__51462 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51458,G__51459,G__51460,G__51461,G__51462) : format.call(null,G__51458,G__51459,G__51460,G__51461,G__51462));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51464 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51465 = symbol;
var G__51466 = loc;
var G__51467 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51468_51572 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51469_51573 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51470_51574 = true;
var _STAR_print_fn_STAR__temp_val__51471_51575 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51470_51574);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51471_51575);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51432_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51432_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51469_51573);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51468_51572);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51464,G__51465,G__51466,G__51467) : format.call(null,G__51464,G__51465,G__51466,G__51467));
} else {
var G__51472 = "Execution error%s at %s(%s).\n%s\n";
var G__51473 = cause_type;
var G__51474 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51475 = loc;
var G__51476 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51472,G__51473,G__51474,G__51475,G__51476) : format.call(null,G__51472,G__51473,G__51474,G__51475,G__51476));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51439__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
