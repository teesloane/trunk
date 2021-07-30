var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
require("./goog.string.string.js");
require("./goog.string.stringformat.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.repl.js");

goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38381){
var map__38382 = p__38381;
var map__38382__$1 = cljs.core.__destructure_map(map__38382);
var m = map__38382__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38384_38657 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38385_38658 = null;
var count__38386_38659 = (0);
var i__38387_38660 = (0);
while(true){
if((i__38387_38660 < count__38386_38659)){
var f_38661 = chunk__38385_38658.cljs$core$IIndexed$_nth$arity$2(null,i__38387_38660);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38661], 0));


var G__38662 = seq__38384_38657;
var G__38663 = chunk__38385_38658;
var G__38664 = count__38386_38659;
var G__38665 = (i__38387_38660 + (1));
seq__38384_38657 = G__38662;
chunk__38385_38658 = G__38663;
count__38386_38659 = G__38664;
i__38387_38660 = G__38665;
continue;
} else {
var temp__5753__auto___38666 = cljs.core.seq(seq__38384_38657);
if(temp__5753__auto___38666){
var seq__38384_38667__$1 = temp__5753__auto___38666;
if(cljs.core.chunked_seq_QMARK_(seq__38384_38667__$1)){
var c__4638__auto___38668 = cljs.core.chunk_first(seq__38384_38667__$1);
var G__38669 = cljs.core.chunk_rest(seq__38384_38667__$1);
var G__38670 = c__4638__auto___38668;
var G__38671 = cljs.core.count(c__4638__auto___38668);
var G__38672 = (0);
seq__38384_38657 = G__38669;
chunk__38385_38658 = G__38670;
count__38386_38659 = G__38671;
i__38387_38660 = G__38672;
continue;
} else {
var f_38673 = cljs.core.first(seq__38384_38667__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38673], 0));


var G__38674 = cljs.core.next(seq__38384_38667__$1);
var G__38675 = null;
var G__38676 = (0);
var G__38677 = (0);
seq__38384_38657 = G__38674;
chunk__38385_38658 = G__38675;
count__38386_38659 = G__38676;
i__38387_38660 = G__38677;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38678 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38678], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38678)))?cljs.core.second(arglists_38678):arglists_38678)], 0));
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
var seq__38396_38679 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38397_38680 = null;
var count__38398_38681 = (0);
var i__38399_38682 = (0);
while(true){
if((i__38399_38682 < count__38398_38681)){
var vec__38411_38683 = chunk__38397_38680.cljs$core$IIndexed$_nth$arity$2(null,i__38399_38682);
var name_38684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38411_38683,(0),null);
var map__38414_38685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38411_38683,(1),null);
var map__38414_38686__$1 = cljs.core.__destructure_map(map__38414_38685);
var doc_38687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414_38686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414_38686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38684], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38688], 0));

if(cljs.core.truth_(doc_38687)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38687], 0));
} else {
}


var G__38689 = seq__38396_38679;
var G__38690 = chunk__38397_38680;
var G__38691 = count__38398_38681;
var G__38692 = (i__38399_38682 + (1));
seq__38396_38679 = G__38689;
chunk__38397_38680 = G__38690;
count__38398_38681 = G__38691;
i__38399_38682 = G__38692;
continue;
} else {
var temp__5753__auto___38693 = cljs.core.seq(seq__38396_38679);
if(temp__5753__auto___38693){
var seq__38396_38694__$1 = temp__5753__auto___38693;
if(cljs.core.chunked_seq_QMARK_(seq__38396_38694__$1)){
var c__4638__auto___38695 = cljs.core.chunk_first(seq__38396_38694__$1);
var G__38696 = cljs.core.chunk_rest(seq__38396_38694__$1);
var G__38697 = c__4638__auto___38695;
var G__38698 = cljs.core.count(c__4638__auto___38695);
var G__38699 = (0);
seq__38396_38679 = G__38696;
chunk__38397_38680 = G__38697;
count__38398_38681 = G__38698;
i__38399_38682 = G__38699;
continue;
} else {
var vec__38416_38700 = cljs.core.first(seq__38396_38694__$1);
var name_38701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38416_38700,(0),null);
var map__38419_38702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38416_38700,(1),null);
var map__38419_38703__$1 = cljs.core.__destructure_map(map__38419_38702);
var doc_38704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419_38703__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419_38703__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38701], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38705], 0));

if(cljs.core.truth_(doc_38704)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38704], 0));
} else {
}


var G__38706 = cljs.core.next(seq__38396_38694__$1);
var G__38707 = null;
var G__38708 = (0);
var G__38709 = (0);
seq__38396_38679 = G__38706;
chunk__38397_38680 = G__38707;
count__38398_38681 = G__38708;
i__38399_38682 = G__38709;
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

var seq__38425 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38426 = null;
var count__38427 = (0);
var i__38428 = (0);
while(true){
if((i__38428 < count__38427)){
var role = chunk__38426.cljs$core$IIndexed$_nth$arity$2(null,i__38428);
var temp__5753__auto___38710__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___38710__$1)){
var spec_38715 = temp__5753__auto___38710__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38715)], 0));
} else {
}


var G__38716 = seq__38425;
var G__38717 = chunk__38426;
var G__38718 = count__38427;
var G__38719 = (i__38428 + (1));
seq__38425 = G__38716;
chunk__38426 = G__38717;
count__38427 = G__38718;
i__38428 = G__38719;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__38425);
if(temp__5753__auto____$1){
var seq__38425__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38425__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38425__$1);
var G__38720 = cljs.core.chunk_rest(seq__38425__$1);
var G__38721 = c__4638__auto__;
var G__38722 = cljs.core.count(c__4638__auto__);
var G__38723 = (0);
seq__38425 = G__38720;
chunk__38426 = G__38721;
count__38427 = G__38722;
i__38428 = G__38723;
continue;
} else {
var role = cljs.core.first(seq__38425__$1);
var temp__5753__auto___38724__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___38724__$2)){
var spec_38725 = temp__5753__auto___38724__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38725)], 0));
} else {
}


var G__38726 = cljs.core.next(seq__38425__$1);
var G__38727 = null;
var G__38728 = (0);
var G__38729 = (0);
seq__38425 = G__38726;
chunk__38426 = G__38727;
count__38427 = G__38728;
i__38428 = G__38729;
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
var G__38735 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38736 = cljs.core.ex_cause(t);
via = G__38735;
t = G__38736;
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
var map__38558 = datafied_throwable;
var map__38558__$1 = cljs.core.__destructure_map(map__38558);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38558__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38558__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38558__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38559 = cljs.core.last(via);
var map__38559__$1 = cljs.core.__destructure_map(map__38559);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38560 = data;
var map__38560__$1 = cljs.core.__destructure_map(map__38560);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38561 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38561__$1 = cljs.core.__destructure_map(map__38561);
var top_data = map__38561__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38569 = phase;
var G__38569__$1 = (((G__38569 instanceof cljs.core.Keyword))?G__38569.fqn:null);
switch (G__38569__$1) {
case "read-source":
var map__38572 = data;
var map__38572__$1 = cljs.core.__destructure_map(map__38572);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38572__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38574 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38574__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38574,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38574);
var G__38574__$2 = (cljs.core.truth_((function (){var fexpr__38575 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38575.cljs$core$IFn$_invoke$arity$1 ? fexpr__38575.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38575.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38574__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38574__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38574__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38574__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38576 = top_data;
var G__38576__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38576,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38576);
var G__38576__$2 = (cljs.core.truth_((function (){var fexpr__38581 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38581.cljs$core$IFn$_invoke$arity$1 ? fexpr__38581.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38581.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38576__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38576__$1);
var G__38576__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38576__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38576__$2);
var G__38576__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38576__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38576__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38576__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38576__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38582 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(3),null);
var G__38585 = top_data;
var G__38585__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38585,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38585);
var G__38585__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38585__$1);
var G__38585__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38585__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38585__$2);
var G__38585__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38585__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38585__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38585__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38585__$4;
}

break;
case "execution":
var vec__38592 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38546_SHARP_){
var or__4212__auto__ = (p1__38546_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__38596 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38596.cljs$core$IFn$_invoke$arity$1 ? fexpr__38596.cljs$core$IFn$_invoke$arity$1(p1__38546_SHARP_) : fexpr__38596.call(null,p1__38546_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__38598 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38598__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38598,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38598);
var G__38598__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38598__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38598__$1);
var G__38598__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38598__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38598__$2);
var G__38598__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38598__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38598__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38598__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38598__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38569__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38610){
var map__38611 = p__38610;
var map__38611__$1 = cljs.core.__destructure_map(map__38611);
var triage_data = map__38611__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38611__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38616 = phase;
var G__38616__$1 = (((G__38616 instanceof cljs.core.Keyword))?G__38616.fqn:null);
switch (G__38616__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38617 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38618 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38619 = loc;
var G__38620 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38621_38755 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38622_38756 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38623_38757 = true;
var _STAR_print_fn_STAR__temp_val__38624_38758 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38623_38757);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38624_38758);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38604_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38604_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38622_38756);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38621_38755);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38617,G__38618,G__38619,G__38620) : format.call(null,G__38617,G__38618,G__38619,G__38620));

break;
case "macroexpansion":
var G__38629 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38630 = cause_type;
var G__38631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38632 = loc;
var G__38633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38629,G__38630,G__38631,G__38632,G__38633) : format.call(null,G__38629,G__38630,G__38631,G__38632,G__38633));

break;
case "compile-syntax-check":
var G__38634 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38635 = cause_type;
var G__38636 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38637 = loc;
var G__38638 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38634,G__38635,G__38636,G__38637,G__38638) : format.call(null,G__38634,G__38635,G__38636,G__38637,G__38638));

break;
case "compilation":
var G__38639 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38640 = cause_type;
var G__38641 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38642 = loc;
var G__38643 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38639,G__38640,G__38641,G__38642,G__38643) : format.call(null,G__38639,G__38640,G__38641,G__38642,G__38643));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38644 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38645 = symbol;
var G__38646 = loc;
var G__38647 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38648_38762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38649_38763 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38650_38764 = true;
var _STAR_print_fn_STAR__temp_val__38651_38765 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38650_38764);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38651_38765);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38605_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38605_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38649_38763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38648_38762);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38644,G__38645,G__38646,G__38647) : format.call(null,G__38644,G__38645,G__38646,G__38647));
} else {
var G__38652 = "Execution error%s at %s(%s).\n%s\n";
var G__38653 = cause_type;
var G__38654 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38655 = loc;
var G__38656 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38652,G__38653,G__38654,G__38655,G__38656) : format.call(null,G__38652,G__38653,G__38654,G__38655,G__38656));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38616__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
Object.defineProperty(module.exports, "print_doc", { enumerable: false, get: function() { return cljs.repl.print_doc; } });
Object.defineProperty(module.exports, "Error__GT_map", { enumerable: false, get: function() { return cljs.repl.Error__GT_map; } });
Object.defineProperty(module.exports, "ex_triage", { enumerable: false, get: function() { return cljs.repl.ex_triage; } });
Object.defineProperty(module.exports, "ex_str", { enumerable: false, get: function() { return cljs.repl.ex_str; } });
Object.defineProperty(module.exports, "error__GT_str", { enumerable: false, get: function() { return cljs.repl.error__GT_str; } });
//# sourceMappingURL=cljs.repl.js.map
