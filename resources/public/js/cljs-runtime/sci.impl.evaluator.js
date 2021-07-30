goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__35330 = xs;
args__$2 = G__35330;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.evaluator.eval.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__35333 = xs;
args__$2 = G__35333;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,let_val));
var bindings = ctx__$1.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,let_name,v);
var ctx__$2 = cljs.core._assoc(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__35334 = ctx__$2;
var G__35335 = rest_let_bindings;
ctx__$1 = G__35334;
let_bindings__$1 = G__35335;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__35336 = nexprs;
exprs__$1 = G__35336;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.eval_if = (function sci$impl$evaluator$eval_if(ctx,cond,then,else$){
if(cljs.core.truth_((sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.evaluator.eval.call(null,ctx,cond)))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.evaluator.eval.call(null,ctx,then));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.evaluator.eval.call(null,ctx,else$));
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,p__34257){
var vec__34258 = p__34257;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34258,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.evaluator.eval.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__34261 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34261,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__34261;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.evaluator.handle_refer_all = (function sci$impl$evaluator$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__34262){
var vec__34263 = p__34262;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34263,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = (k instanceof cljs.core.Symbol);
if(and__4210__auto__){
var and__4210__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4210__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.evaluator.handle_require_libspec_env = (function sci$impl$evaluator$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__34270){
var map__34271 = p__34270;
var map__34271__$1 = cljs.core.__destructure_map(map__34271);
var _parsed_libspec = map__34271__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4212__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4212__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return use;
}
})())?sci.impl.evaluator.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__34277 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.evaluator.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5753__auto___35357 = (function (){var G__34280 = the_loaded_ns;
var G__34280__$1 = (((G__34280 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__34280));
var G__34280__$2 = (((G__34280__$1 == null))?null:cljs.core.meta(G__34280__$1));
if((G__34280__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__34280__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___35357)){
var on_loaded_35361 = temp__5753__auto___35357;
var G__34283_35363 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_35361.cljs$core$IFn$_invoke$arity$1 ? on_loaded_35361.cljs$core$IFn$_invoke$arity$1(G__34283_35363) : on_loaded_35361.call(null,G__34283_35363));
} else {
}

return env__$1;
});
sci.impl.evaluator.handle_require_libspec = (function sci$impl$evaluator$handle_require_libspec(ctx,lib,opts){
var map__34291 = opts;
var map__34291__$1 = cljs.core.__destructure_map(map__34291);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34291__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__4212__auto__ = reload;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return uberscript;
}
})();
var temp__5751__auto__ = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5751__auto__)){
var the_loaded_ns = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.evaluator.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
var temp__5751__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto____$1)){
var load_fn = temp__5751__auto____$1;
var temp__5751__auto____$2 = (function (){var G__34298 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),reload], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__34298) : load_fn.call(null,G__34298));
})();
if(cljs.core.truth_(temp__5751__auto____$2)){
var map__34299 = temp__5751__auto____$2;
var map__34299__$1 = cljs.core.__destructure_map(map__34299);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__34302_35367 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__34303_35368 = source;
var fexpr__34301_35369 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__34301_35369.cljs$core$IFn$_invoke$arity$2 ? fexpr__34301_35369.cljs$core$IFn$_invoke$arity$2(G__34302_35367,G__34303_35368) : fexpr__34301_35369.call(null,G__34302_35367,G__34303_35368));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e34300){if((e34300 instanceof Error)){
var e_35370 = e34300;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_35370;
} else {
throw e34300;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.evaluator.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__4212__auto__ = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.evaluator.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
});
sci.impl.evaluator.load_lib = (function sci$impl$evaluator$load_lib(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35371 = arguments.length;
var i__4819__auto___35372 = (0);
while(true){
if((i__4819__auto___35372 < len__4818__auto___35371)){
args__4824__auto__.push((arguments[i__4819__auto___35372]));

var G__35373 = (i__4819__auto___35372 + (1));
i__4819__auto___35372 = G__35373;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return sci.impl.evaluator.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(sci.impl.evaluator.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4210__auto__ = prefix;
if(cljs.core.truth_(and__4210__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4210__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.evaluator.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.evaluator.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.evaluator.load_lib.cljs$lang$applyTo = (function (seq34304){
var G__34305 = cljs.core.first(seq34304);
var seq34304__$1 = cljs.core.next(seq34304);
var G__34306 = cljs.core.first(seq34304__$1);
var seq34304__$2 = cljs.core.next(seq34304__$1);
var G__34307 = cljs.core.first(seq34304__$2);
var seq34304__$3 = cljs.core.next(seq34304__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34305,G__34306,G__34307,seq34304__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.evaluator.prependss = (function sci$impl$evaluator$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.evaluator.libspec_QMARK_ = (function sci$impl$evaluator$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.evaluator.load_libs = (function sci$impl$evaluator$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_35381 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_35382 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_35381,flags));
if(unsupported_35382){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_35382)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__34311 = cljs.core.seq(args_STAR___$1);
var chunk__34312 = null;
var count__34313 = (0);
var i__34314 = (0);
while(true){
if((i__34314 < count__34313)){
var arg = chunk__34312.cljs$core$IIndexed$_nth$arity$2(null,i__34314);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__34337_35384 = arg;
var seq__34338_35385 = cljs.core.seq(vec__34337_35384);
var first__34339_35386 = cljs.core.first(seq__34338_35385);
var seq__34338_35387__$1 = cljs.core.next(seq__34338_35385);
var prefix_35388 = first__34339_35386;
var args_STAR__35389__$2 = seq__34338_35387__$1;
if((prefix_35388 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__34340_35391 = cljs.core.seq(args_STAR__35389__$2);
var chunk__34341_35392 = null;
var count__34342_35393 = (0);
var i__34343_35394 = (0);
while(true){
if((i__34343_35394 < count__34342_35393)){
var arg_35397__$1 = chunk__34341_35392.cljs$core$IIndexed$_nth$arity$2(null,i__34343_35394);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_35388,sci.impl.evaluator.prependss(arg_35397__$1,opts));


var G__35398 = seq__34340_35391;
var G__35399 = chunk__34341_35392;
var G__35400 = count__34342_35393;
var G__35401 = (i__34343_35394 + (1));
seq__34340_35391 = G__35398;
chunk__34341_35392 = G__35399;
count__34342_35393 = G__35400;
i__34343_35394 = G__35401;
continue;
} else {
var temp__5753__auto___35402 = cljs.core.seq(seq__34340_35391);
if(temp__5753__auto___35402){
var seq__34340_35403__$1 = temp__5753__auto___35402;
if(cljs.core.chunked_seq_QMARK_(seq__34340_35403__$1)){
var c__4638__auto___35404 = cljs.core.chunk_first(seq__34340_35403__$1);
var G__35405 = cljs.core.chunk_rest(seq__34340_35403__$1);
var G__35406 = c__4638__auto___35404;
var G__35407 = cljs.core.count(c__4638__auto___35404);
var G__35408 = (0);
seq__34340_35391 = G__35405;
chunk__34341_35392 = G__35406;
count__34342_35393 = G__35407;
i__34343_35394 = G__35408;
continue;
} else {
var arg_35409__$1 = cljs.core.first(seq__34340_35403__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_35388,sci.impl.evaluator.prependss(arg_35409__$1,opts));


var G__35410 = cljs.core.next(seq__34340_35403__$1);
var G__35411 = null;
var G__35412 = (0);
var G__35413 = (0);
seq__34340_35391 = G__35410;
chunk__34341_35392 = G__35411;
count__34342_35393 = G__35412;
i__34343_35394 = G__35413;
continue;
}
} else {
}
}
break;
}
}


var G__35414 = seq__34311;
var G__35415 = chunk__34312;
var G__35416 = count__34313;
var G__35417 = (i__34314 + (1));
seq__34311 = G__35414;
chunk__34312 = G__35415;
count__34313 = G__35416;
i__34314 = G__35417;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34311);
if(temp__5753__auto__){
var seq__34311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34311__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34311__$1);
var G__35418 = cljs.core.chunk_rest(seq__34311__$1);
var G__35419 = c__4638__auto__;
var G__35420 = cljs.core.count(c__4638__auto__);
var G__35421 = (0);
seq__34311 = G__35418;
chunk__34312 = G__35419;
count__34313 = G__35420;
i__34314 = G__35421;
continue;
} else {
var arg = cljs.core.first(seq__34311__$1);
if(sci.impl.evaluator.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,null,sci.impl.evaluator.prependss(arg,opts));
} else {
var vec__34356_35422 = arg;
var seq__34357_35423 = cljs.core.seq(vec__34356_35422);
var first__34358_35424 = cljs.core.first(seq__34357_35423);
var seq__34357_35425__$1 = cljs.core.next(seq__34357_35423);
var prefix_35426 = first__34358_35424;
var args_STAR__35427__$2 = seq__34357_35425__$1;
if((prefix_35426 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__34363_35428 = cljs.core.seq(args_STAR__35427__$2);
var chunk__34364_35429 = null;
var count__34365_35430 = (0);
var i__34366_35431 = (0);
while(true){
if((i__34366_35431 < count__34365_35430)){
var arg_35435__$1 = chunk__34364_35429.cljs$core$IIndexed$_nth$arity$2(null,i__34366_35431);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_35426,sci.impl.evaluator.prependss(arg_35435__$1,opts));


var G__35436 = seq__34363_35428;
var G__35437 = chunk__34364_35429;
var G__35438 = count__34365_35430;
var G__35439 = (i__34366_35431 + (1));
seq__34363_35428 = G__35436;
chunk__34364_35429 = G__35437;
count__34365_35430 = G__35438;
i__34366_35431 = G__35439;
continue;
} else {
var temp__5753__auto___35440__$1 = cljs.core.seq(seq__34363_35428);
if(temp__5753__auto___35440__$1){
var seq__34363_35441__$1 = temp__5753__auto___35440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34363_35441__$1)){
var c__4638__auto___35442 = cljs.core.chunk_first(seq__34363_35441__$1);
var G__35443 = cljs.core.chunk_rest(seq__34363_35441__$1);
var G__35444 = c__4638__auto___35442;
var G__35445 = cljs.core.count(c__4638__auto___35442);
var G__35446 = (0);
seq__34363_35428 = G__35443;
chunk__34364_35429 = G__35444;
count__34365_35430 = G__35445;
i__34366_35431 = G__35446;
continue;
} else {
var arg_35447__$1 = cljs.core.first(seq__34363_35441__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.evaluator.load_lib,ctx,prefix_35426,sci.impl.evaluator.prependss(arg_35447__$1,opts));


var G__35448 = cljs.core.next(seq__34363_35441__$1);
var G__35449 = null;
var G__35450 = (0);
var G__35451 = (0);
seq__34363_35428 = G__35448;
chunk__34364_35429 = G__35449;
count__34365_35430 = G__35450;
i__34366_35431 = G__35451;
continue;
}
} else {
}
}
break;
}
}


var G__35452 = cljs.core.next(seq__34311__$1);
var G__35453 = null;
var G__35454 = (0);
var G__35455 = (0);
seq__34311 = G__35452;
chunk__34312 = G__35453;
count__34313 = G__35454;
i__34314 = G__35455;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.evaluator.eval_require = (function sci$impl$evaluator$eval_require(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35456 = arguments.length;
var i__4819__auto___35457 = (0);
while(true){
if((i__4819__auto___35457 < len__4818__auto___35456)){
args__4824__auto__.push((arguments[i__4819__auto___35457]));

var G__35458 = (i__4819__auto___35457 + (1));
i__4819__auto___35457 = G__35458;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.evaluator.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.evaluator.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.evaluator.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_require.cljs$lang$applyTo = (function (seq34380){
var G__34381 = cljs.core.first(seq34380);
var seq34380__$1 = cljs.core.next(seq34380);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34381,seq34380__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.evaluator.eval_require);
sci.impl.evaluator.eval_use = (function sci$impl$evaluator$eval_use(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35460 = arguments.length;
var i__4819__auto___35461 = (0);
while(true){
if((i__4819__auto___35461 < len__4818__auto___35460)){
args__4824__auto__.push((arguments[i__4819__auto___35461]));

var G__35462 = (i__4819__auto___35461 + (1));
i__4819__auto___35461 = G__35462;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.evaluator.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.evaluator.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.evaluator.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_use.cljs$lang$applyTo = (function (seq34395){
var G__34397 = cljs.core.first(seq34395);
var seq34395__$1 = cljs.core.next(seq34395);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34397,seq34395__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.evaluator.eval_use);
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(ctx,p__34407){
var vec__34409 = p__34407;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34409,(0),null);
var map__34412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34409,(1),null);
var map__34412__$1 = cljs.core.__destructure_map(map__34412);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34412__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34412__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34412__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.evaluator.eval.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__34418 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.evaluator.eval.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__34422 = ctx;
var G__34423 = cljs.core.second(case_default);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34422,G__34423) : sci.impl.evaluator.eval.call(null,G__34422,G__34423));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,expr){
var map__34427 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__34427__$1 = cljs.core.__destructure_map(map__34427);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34427__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34427__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34427__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__34445 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__34446 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__34446);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.evaluator.eval.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__34445);
}}catch (e34431){if((e34431 instanceof Error)){
var e = e34431;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__34436 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__34437 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34436,G__34437) : sci.impl.evaluator.eval.call(null,G__34436,G__34437));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__34439 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34439,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34439,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e34431;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.evaluator.eval.call(null,ctx,finally$));
}});
sci.impl.evaluator.eval_throw = (function sci$impl$evaluator$eval_throw(ctx,p__34450){
var vec__34452 = p__34450;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452,(1),null);
var ex__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.evaluator.eval.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34457_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__34457_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__34457_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_constructor_invocation = (function sci$impl$evaluator$eval_constructor_invocation(ctx,p__34466){
var vec__34467 = p__34466;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34464_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__34464_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__34464_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(p__34476,p__34477){
var map__34478 = p__34476;
var map__34478__$1 = cljs.core.__destructure_map(map__34478);
var ctx = map__34478__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34478__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__34479 = p__34477;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34479,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34479,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34479,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34479,(3),null);
var _expr = vec__34479;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4212__auto__ = tag_class;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34474_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__34474_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__34474_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_in_ns = (function sci$impl$evaluator$eval_in_ns(ctx,p__34490){
var vec__34492 = p__34490;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(1),null);
var ns_sym = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.evaluator.eval.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.evaluator.eval_refer = (function sci$impl$evaluator$eval_refer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35469 = arguments.length;
var i__4819__auto___35470 = (0);
while(true){
if((i__4819__auto___35470 < len__4818__auto___35469)){
args__4824__auto__.push((arguments[i__4819__auto___35470]));

var G__35471 = (i__4819__auto___35470 + (1));
i__4819__auto___35470 = G__35471;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return sci.impl.evaluator.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(sci.impl.evaluator.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.evaluator.eval.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__34505 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,(1),null);
var G__34508_35472 = k;
var G__34508_35473__$1 = (((G__34508_35472 instanceof cljs.core.Keyword))?G__34508_35472.fqn:null);
switch (G__34508_35473__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__34508_35472,G__34508_35473__$1,vec__34505,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__34508_35472,G__34508_35473__$1,vec__34505,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__34508_35472,G__34508_35473__$1,vec__34505,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__34508_35472,G__34508_35473__$1,vec__34505,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34508_35473__$1)].join('')));

}

var G__35481 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__35481;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.evaluator.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.evaluator.eval_refer.cljs$lang$applyTo = (function (seq34498){
var G__34499 = cljs.core.first(seq34498);
var seq34498__$1 = cljs.core.next(seq34498);
var G__34500 = cljs.core.first(seq34498__$1);
var seq34498__$2 = cljs.core.next(seq34498__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34499,G__34500,seq34498__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.evaluator.eval_refer);
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__34517 = arguments.length;
switch (G__34517) {
case 2:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__34520 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__34520.cljs$core$IFn$_invoke$arity$3 ? fexpr__34520.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__34520.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.evaluator.eval.call(null,ctx,sym));
return cljs.core.second((function (){var fexpr__34524 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__34524.cljs$core$IFn$_invoke$arity$3 ? fexpr__34524.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__34524.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35485 = arguments.length;
var i__4819__auto___35486 = (0);
while(true){
if((i__4819__auto___35486 < len__4818__auto___35485)){
args__4824__auto__.push((arguments[i__4819__auto___35486]));

var G__35487 = (i__4819__auto___35486 + (1));
i__4819__auto___35486 = G__35487;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34528_SHARP_){
if(((cljs.core.seq_QMARK_(p1__34528_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__34528_SHARP_))))){
return cljs.core.second(p1__34528_SHARP_);
} else {
return p1__34528_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__34537 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34537,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34537,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto____$1)){
var rec = temp__5751__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq34529){
var G__34530 = cljs.core.first(seq34529);
var seq34529__$1 = cljs.core.next(seq34529);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34530,seq34529__$1);
}));

sci.impl.evaluator.eval_set_BANG_ = (function sci$impl$evaluator$eval_set_BANG_(ctx,p__34552){
var vec__34554 = p__34552;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(2),null);
var obj__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.evaluator.eval.call(null,ctx,obj));
var v__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.evaluator.eval.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.evaluator.eval_do_STAR_ = (function sci$impl$evaluator$eval_do_STAR_(ctx,exprs){
var G__34564 = exprs;
var vec__34565 = G__34564;
var seq__34566 = cljs.core.seq(vec__34565);
var first__34567 = cljs.core.first(seq__34566);
var seq__34566__$1 = cljs.core.next(seq__34566);
var expr = first__34567;
var exprs__$1 = seq__34566__$1;
var G__34564__$1 = G__34564;
while(true){
var vec__34568 = G__34564__$1;
var seq__34569 = cljs.core.seq(vec__34568);
var first__34570 = cljs.core.first(seq__34569);
var seq__34569__$1 = cljs.core.next(seq__34569);
var expr__$1 = first__34570;
var exprs__$2 = seq__34569__$1;
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.evaluator.eval.call(null,ctx,expr__$1));
var temp__5751__auto__ = cljs.core.seq(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__35494 = exprs__$3;
G__34564__$1 = G__35494;
continue;
} else {
return ret;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do_STAR_);
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,expr){
var temp__5753__auto__ = cljs.core.next(expr);
if(temp__5753__auto__){
var exprs = temp__5753__auto__;
return sci.impl.evaluator.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,f,args){
var G__34770 = cljs.core.count(args);
switch (G__34770) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg34580 = (function (){var G__34773 = ctx;
var G__34774 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34773,G__34774) : sci.impl.evaluator.eval.call(null,G__34773,G__34774));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg34580) : f.call(null,arg34580));

break;
case (2):
var arg34581 = (function (){var G__34776 = ctx;
var G__34777 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34776,G__34777) : sci.impl.evaluator.eval.call(null,G__34776,G__34777));
})();
var args__$1 = cljs.core.rest(args);
var arg34582 = (function (){var G__34778 = ctx;
var G__34779 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34778,G__34779) : sci.impl.evaluator.eval.call(null,G__34778,G__34779));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg34581,arg34582) : f.call(null,arg34581,arg34582));

break;
case (3):
var arg34583 = (function (){var G__34781 = ctx;
var G__34782 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34781,G__34782) : sci.impl.evaluator.eval.call(null,G__34781,G__34782));
})();
var args__$1 = cljs.core.rest(args);
var arg34584 = (function (){var G__34783 = ctx;
var G__34784 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34783,G__34784) : sci.impl.evaluator.eval.call(null,G__34783,G__34784));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34585 = (function (){var G__34785 = ctx;
var G__34786 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34785,G__34786) : sci.impl.evaluator.eval.call(null,G__34785,G__34786));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg34583,arg34584,arg34585) : f.call(null,arg34583,arg34584,arg34585));

break;
case (4):
var arg34586 = (function (){var G__34788 = ctx;
var G__34789 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34788,G__34789) : sci.impl.evaluator.eval.call(null,G__34788,G__34789));
})();
var args__$1 = cljs.core.rest(args);
var arg34587 = (function (){var G__34791 = ctx;
var G__34792 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34791,G__34792) : sci.impl.evaluator.eval.call(null,G__34791,G__34792));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34588 = (function (){var G__34793 = ctx;
var G__34794 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34793,G__34794) : sci.impl.evaluator.eval.call(null,G__34793,G__34794));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34589 = (function (){var G__34796 = ctx;
var G__34797 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34796,G__34797) : sci.impl.evaluator.eval.call(null,G__34796,G__34797));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg34586,arg34587,arg34588,arg34589) : f.call(null,arg34586,arg34587,arg34588,arg34589));

break;
case (5):
var arg34590 = (function (){var G__34799 = ctx;
var G__34800 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34799,G__34800) : sci.impl.evaluator.eval.call(null,G__34799,G__34800));
})();
var args__$1 = cljs.core.rest(args);
var arg34591 = (function (){var G__34801 = ctx;
var G__34802 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34801,G__34802) : sci.impl.evaluator.eval.call(null,G__34801,G__34802));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34592 = (function (){var G__34804 = ctx;
var G__34805 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34804,G__34805) : sci.impl.evaluator.eval.call(null,G__34804,G__34805));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34593 = (function (){var G__34806 = ctx;
var G__34807 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34806,G__34807) : sci.impl.evaluator.eval.call(null,G__34806,G__34807));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34594 = (function (){var G__34808 = ctx;
var G__34809 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34808,G__34809) : sci.impl.evaluator.eval.call(null,G__34808,G__34809));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg34590,arg34591,arg34592,arg34593,arg34594) : f.call(null,arg34590,arg34591,arg34592,arg34593,arg34594));

break;
case (6):
var arg34595 = (function (){var G__34811 = ctx;
var G__34812 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34811,G__34812) : sci.impl.evaluator.eval.call(null,G__34811,G__34812));
})();
var args__$1 = cljs.core.rest(args);
var arg34596 = (function (){var G__34813 = ctx;
var G__34814 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34813,G__34814) : sci.impl.evaluator.eval.call(null,G__34813,G__34814));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34597 = (function (){var G__34815 = ctx;
var G__34816 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34815,G__34816) : sci.impl.evaluator.eval.call(null,G__34815,G__34816));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34598 = (function (){var G__34817 = ctx;
var G__34818 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34817,G__34818) : sci.impl.evaluator.eval.call(null,G__34817,G__34818));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34599 = (function (){var G__34819 = ctx;
var G__34820 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34819,G__34820) : sci.impl.evaluator.eval.call(null,G__34819,G__34820));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34600 = (function (){var G__34823 = ctx;
var G__34824 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34823,G__34824) : sci.impl.evaluator.eval.call(null,G__34823,G__34824));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg34595,arg34596,arg34597,arg34598,arg34599,arg34600) : f.call(null,arg34595,arg34596,arg34597,arg34598,arg34599,arg34600));

break;
case (7):
var arg34601 = (function (){var G__34827 = ctx;
var G__34828 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34827,G__34828) : sci.impl.evaluator.eval.call(null,G__34827,G__34828));
})();
var args__$1 = cljs.core.rest(args);
var arg34602 = (function (){var G__34830 = ctx;
var G__34831 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34830,G__34831) : sci.impl.evaluator.eval.call(null,G__34830,G__34831));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34603 = (function (){var G__34833 = ctx;
var G__34834 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34833,G__34834) : sci.impl.evaluator.eval.call(null,G__34833,G__34834));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34604 = (function (){var G__34836 = ctx;
var G__34837 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34836,G__34837) : sci.impl.evaluator.eval.call(null,G__34836,G__34837));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34605 = (function (){var G__34839 = ctx;
var G__34840 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34839,G__34840) : sci.impl.evaluator.eval.call(null,G__34839,G__34840));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34606 = (function (){var G__34841 = ctx;
var G__34842 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34841,G__34842) : sci.impl.evaluator.eval.call(null,G__34841,G__34842));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34607 = (function (){var G__34844 = ctx;
var G__34845 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34844,G__34845) : sci.impl.evaluator.eval.call(null,G__34844,G__34845));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg34601,arg34602,arg34603,arg34604,arg34605,arg34606,arg34607) : f.call(null,arg34601,arg34602,arg34603,arg34604,arg34605,arg34606,arg34607));

break;
case (8):
var arg34608 = (function (){var G__34849 = ctx;
var G__34850 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34849,G__34850) : sci.impl.evaluator.eval.call(null,G__34849,G__34850));
})();
var args__$1 = cljs.core.rest(args);
var arg34609 = (function (){var G__34852 = ctx;
var G__34853 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34852,G__34853) : sci.impl.evaluator.eval.call(null,G__34852,G__34853));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34610 = (function (){var G__34855 = ctx;
var G__34856 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34855,G__34856) : sci.impl.evaluator.eval.call(null,G__34855,G__34856));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34611 = (function (){var G__34858 = ctx;
var G__34859 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34858,G__34859) : sci.impl.evaluator.eval.call(null,G__34858,G__34859));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34612 = (function (){var G__34860 = ctx;
var G__34861 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34860,G__34861) : sci.impl.evaluator.eval.call(null,G__34860,G__34861));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34613 = (function (){var G__34862 = ctx;
var G__34863 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34862,G__34863) : sci.impl.evaluator.eval.call(null,G__34862,G__34863));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34614 = (function (){var G__34866 = ctx;
var G__34867 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34866,G__34867) : sci.impl.evaluator.eval.call(null,G__34866,G__34867));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34615 = (function (){var G__34868 = ctx;
var G__34869 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34868,G__34869) : sci.impl.evaluator.eval.call(null,G__34868,G__34869));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg34608,arg34609,arg34610,arg34611,arg34612,arg34613,arg34614,arg34615) : f.call(null,arg34608,arg34609,arg34610,arg34611,arg34612,arg34613,arg34614,arg34615));

break;
case (9):
var arg34616 = (function (){var G__34871 = ctx;
var G__34872 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34871,G__34872) : sci.impl.evaluator.eval.call(null,G__34871,G__34872));
})();
var args__$1 = cljs.core.rest(args);
var arg34617 = (function (){var G__34873 = ctx;
var G__34874 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34873,G__34874) : sci.impl.evaluator.eval.call(null,G__34873,G__34874));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34618 = (function (){var G__34875 = ctx;
var G__34876 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34875,G__34876) : sci.impl.evaluator.eval.call(null,G__34875,G__34876));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34619 = (function (){var G__34882 = ctx;
var G__34883 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34882,G__34883) : sci.impl.evaluator.eval.call(null,G__34882,G__34883));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34620 = (function (){var G__34884 = ctx;
var G__34885 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34884,G__34885) : sci.impl.evaluator.eval.call(null,G__34884,G__34885));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34621 = (function (){var G__34886 = ctx;
var G__34887 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34886,G__34887) : sci.impl.evaluator.eval.call(null,G__34886,G__34887));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34622 = (function (){var G__34888 = ctx;
var G__34889 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34888,G__34889) : sci.impl.evaluator.eval.call(null,G__34888,G__34889));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34623 = (function (){var G__34890 = ctx;
var G__34891 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34890,G__34891) : sci.impl.evaluator.eval.call(null,G__34890,G__34891));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34624 = (function (){var G__34892 = ctx;
var G__34893 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34892,G__34893) : sci.impl.evaluator.eval.call(null,G__34892,G__34893));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg34616,arg34617,arg34618,arg34619,arg34620,arg34621,arg34622,arg34623,arg34624) : f.call(null,arg34616,arg34617,arg34618,arg34619,arg34620,arg34621,arg34622,arg34623,arg34624));

break;
case (10):
var arg34625 = (function (){var G__34894 = ctx;
var G__34895 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34894,G__34895) : sci.impl.evaluator.eval.call(null,G__34894,G__34895));
})();
var args__$1 = cljs.core.rest(args);
var arg34626 = (function (){var G__34897 = ctx;
var G__34898 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34897,G__34898) : sci.impl.evaluator.eval.call(null,G__34897,G__34898));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34627 = (function (){var G__34899 = ctx;
var G__34900 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34899,G__34900) : sci.impl.evaluator.eval.call(null,G__34899,G__34900));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34628 = (function (){var G__34901 = ctx;
var G__34902 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34901,G__34902) : sci.impl.evaluator.eval.call(null,G__34901,G__34902));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34629 = (function (){var G__34903 = ctx;
var G__34904 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34903,G__34904) : sci.impl.evaluator.eval.call(null,G__34903,G__34904));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34630 = (function (){var G__34905 = ctx;
var G__34906 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34905,G__34906) : sci.impl.evaluator.eval.call(null,G__34905,G__34906));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34631 = (function (){var G__34907 = ctx;
var G__34908 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34907,G__34908) : sci.impl.evaluator.eval.call(null,G__34907,G__34908));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34632 = (function (){var G__34910 = ctx;
var G__34911 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34910,G__34911) : sci.impl.evaluator.eval.call(null,G__34910,G__34911));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34633 = (function (){var G__34912 = ctx;
var G__34913 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34912,G__34913) : sci.impl.evaluator.eval.call(null,G__34912,G__34913));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34634 = (function (){var G__34914 = ctx;
var G__34915 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34914,G__34915) : sci.impl.evaluator.eval.call(null,G__34914,G__34915));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg34625,arg34626,arg34627,arg34628,arg34629,arg34630,arg34631,arg34632,arg34633,arg34634) : f.call(null,arg34625,arg34626,arg34627,arg34628,arg34629,arg34630,arg34631,arg34632,arg34633,arg34634));

break;
case (11):
var arg34635 = (function (){var G__34917 = ctx;
var G__34918 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34917,G__34918) : sci.impl.evaluator.eval.call(null,G__34917,G__34918));
})();
var args__$1 = cljs.core.rest(args);
var arg34636 = (function (){var G__34919 = ctx;
var G__34920 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34919,G__34920) : sci.impl.evaluator.eval.call(null,G__34919,G__34920));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34637 = (function (){var G__34921 = ctx;
var G__34922 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34921,G__34922) : sci.impl.evaluator.eval.call(null,G__34921,G__34922));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34638 = (function (){var G__34923 = ctx;
var G__34924 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34923,G__34924) : sci.impl.evaluator.eval.call(null,G__34923,G__34924));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34639 = (function (){var G__34926 = ctx;
var G__34927 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34926,G__34927) : sci.impl.evaluator.eval.call(null,G__34926,G__34927));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34640 = (function (){var G__34928 = ctx;
var G__34929 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34928,G__34929) : sci.impl.evaluator.eval.call(null,G__34928,G__34929));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34641 = (function (){var G__34930 = ctx;
var G__34931 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34930,G__34931) : sci.impl.evaluator.eval.call(null,G__34930,G__34931));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34642 = (function (){var G__34932 = ctx;
var G__34933 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34932,G__34933) : sci.impl.evaluator.eval.call(null,G__34932,G__34933));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34643 = (function (){var G__34935 = ctx;
var G__34936 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34935,G__34936) : sci.impl.evaluator.eval.call(null,G__34935,G__34936));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34644 = (function (){var G__34937 = ctx;
var G__34938 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34937,G__34938) : sci.impl.evaluator.eval.call(null,G__34937,G__34938));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34645 = (function (){var G__34939 = ctx;
var G__34940 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34939,G__34940) : sci.impl.evaluator.eval.call(null,G__34939,G__34940));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg34635,arg34636,arg34637,arg34638,arg34639,arg34640,arg34641,arg34642,arg34643,arg34644,arg34645) : f.call(null,arg34635,arg34636,arg34637,arg34638,arg34639,arg34640,arg34641,arg34642,arg34643,arg34644,arg34645));

break;
case (12):
var arg34646 = (function (){var G__34941 = ctx;
var G__34942 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34941,G__34942) : sci.impl.evaluator.eval.call(null,G__34941,G__34942));
})();
var args__$1 = cljs.core.rest(args);
var arg34647 = (function (){var G__34943 = ctx;
var G__34944 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34943,G__34944) : sci.impl.evaluator.eval.call(null,G__34943,G__34944));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34648 = (function (){var G__34947 = ctx;
var G__34948 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34947,G__34948) : sci.impl.evaluator.eval.call(null,G__34947,G__34948));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34649 = (function (){var G__34950 = ctx;
var G__34951 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34950,G__34951) : sci.impl.evaluator.eval.call(null,G__34950,G__34951));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34650 = (function (){var G__34953 = ctx;
var G__34954 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34953,G__34954) : sci.impl.evaluator.eval.call(null,G__34953,G__34954));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34651 = (function (){var G__34957 = ctx;
var G__34958 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34957,G__34958) : sci.impl.evaluator.eval.call(null,G__34957,G__34958));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34652 = (function (){var G__34960 = ctx;
var G__34961 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34960,G__34961) : sci.impl.evaluator.eval.call(null,G__34960,G__34961));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34653 = (function (){var G__34963 = ctx;
var G__34964 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34963,G__34964) : sci.impl.evaluator.eval.call(null,G__34963,G__34964));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34654 = (function (){var G__34965 = ctx;
var G__34966 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34965,G__34966) : sci.impl.evaluator.eval.call(null,G__34965,G__34966));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34655 = (function (){var G__34967 = ctx;
var G__34968 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34967,G__34968) : sci.impl.evaluator.eval.call(null,G__34967,G__34968));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34656 = (function (){var G__34969 = ctx;
var G__34970 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34969,G__34970) : sci.impl.evaluator.eval.call(null,G__34969,G__34970));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34657 = (function (){var G__34971 = ctx;
var G__34972 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34971,G__34972) : sci.impl.evaluator.eval.call(null,G__34971,G__34972));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg34646,arg34647,arg34648,arg34649,arg34650,arg34651,arg34652,arg34653,arg34654,arg34655,arg34656,arg34657) : f.call(null,arg34646,arg34647,arg34648,arg34649,arg34650,arg34651,arg34652,arg34653,arg34654,arg34655,arg34656,arg34657));

break;
case (13):
var arg34658 = (function (){var G__34973 = ctx;
var G__34974 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34973,G__34974) : sci.impl.evaluator.eval.call(null,G__34973,G__34974));
})();
var args__$1 = cljs.core.rest(args);
var arg34659 = (function (){var G__34975 = ctx;
var G__34976 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34975,G__34976) : sci.impl.evaluator.eval.call(null,G__34975,G__34976));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34660 = (function (){var G__34977 = ctx;
var G__34978 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34977,G__34978) : sci.impl.evaluator.eval.call(null,G__34977,G__34978));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34661 = (function (){var G__34979 = ctx;
var G__34980 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34979,G__34980) : sci.impl.evaluator.eval.call(null,G__34979,G__34980));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34662 = (function (){var G__34981 = ctx;
var G__34982 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34981,G__34982) : sci.impl.evaluator.eval.call(null,G__34981,G__34982));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34663 = (function (){var G__34983 = ctx;
var G__34984 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34983,G__34984) : sci.impl.evaluator.eval.call(null,G__34983,G__34984));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34664 = (function (){var G__34985 = ctx;
var G__34986 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34985,G__34986) : sci.impl.evaluator.eval.call(null,G__34985,G__34986));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34665 = (function (){var G__34989 = ctx;
var G__34990 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34989,G__34990) : sci.impl.evaluator.eval.call(null,G__34989,G__34990));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34666 = (function (){var G__34992 = ctx;
var G__34993 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34992,G__34993) : sci.impl.evaluator.eval.call(null,G__34992,G__34993));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34667 = (function (){var G__34995 = ctx;
var G__34996 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34995,G__34996) : sci.impl.evaluator.eval.call(null,G__34995,G__34996));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34668 = (function (){var G__34999 = ctx;
var G__35000 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__34999,G__35000) : sci.impl.evaluator.eval.call(null,G__34999,G__35000));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34669 = (function (){var G__35002 = ctx;
var G__35003 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35002,G__35003) : sci.impl.evaluator.eval.call(null,G__35002,G__35003));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34670 = (function (){var G__35005 = ctx;
var G__35006 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35005,G__35006) : sci.impl.evaluator.eval.call(null,G__35005,G__35006));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg34658,arg34659,arg34660,arg34661,arg34662,arg34663,arg34664,arg34665,arg34666,arg34667,arg34668,arg34669,arg34670) : f.call(null,arg34658,arg34659,arg34660,arg34661,arg34662,arg34663,arg34664,arg34665,arg34666,arg34667,arg34668,arg34669,arg34670));

break;
case (14):
var arg34671 = (function (){var G__35007 = ctx;
var G__35008 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35007,G__35008) : sci.impl.evaluator.eval.call(null,G__35007,G__35008));
})();
var args__$1 = cljs.core.rest(args);
var arg34672 = (function (){var G__35009 = ctx;
var G__35010 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35009,G__35010) : sci.impl.evaluator.eval.call(null,G__35009,G__35010));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34673 = (function (){var G__35012 = ctx;
var G__35013 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35012,G__35013) : sci.impl.evaluator.eval.call(null,G__35012,G__35013));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34674 = (function (){var G__35015 = ctx;
var G__35016 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35015,G__35016) : sci.impl.evaluator.eval.call(null,G__35015,G__35016));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34675 = (function (){var G__35019 = ctx;
var G__35020 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35019,G__35020) : sci.impl.evaluator.eval.call(null,G__35019,G__35020));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34676 = (function (){var G__35021 = ctx;
var G__35022 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35021,G__35022) : sci.impl.evaluator.eval.call(null,G__35021,G__35022));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34677 = (function (){var G__35025 = ctx;
var G__35026 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35025,G__35026) : sci.impl.evaluator.eval.call(null,G__35025,G__35026));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34678 = (function (){var G__35028 = ctx;
var G__35029 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35028,G__35029) : sci.impl.evaluator.eval.call(null,G__35028,G__35029));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34679 = (function (){var G__35031 = ctx;
var G__35032 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35031,G__35032) : sci.impl.evaluator.eval.call(null,G__35031,G__35032));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34680 = (function (){var G__35033 = ctx;
var G__35034 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35033,G__35034) : sci.impl.evaluator.eval.call(null,G__35033,G__35034));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34681 = (function (){var G__35035 = ctx;
var G__35036 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35035,G__35036) : sci.impl.evaluator.eval.call(null,G__35035,G__35036));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34682 = (function (){var G__35038 = ctx;
var G__35039 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35038,G__35039) : sci.impl.evaluator.eval.call(null,G__35038,G__35039));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34683 = (function (){var G__35042 = ctx;
var G__35043 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35042,G__35043) : sci.impl.evaluator.eval.call(null,G__35042,G__35043));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg34684 = (function (){var G__35045 = ctx;
var G__35046 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35045,G__35046) : sci.impl.evaluator.eval.call(null,G__35045,G__35046));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg34671,arg34672,arg34673,arg34674,arg34675,arg34676,arg34677,arg34678,arg34679,arg34680,arg34681,arg34682,arg34683,arg34684) : f.call(null,arg34671,arg34672,arg34673,arg34674,arg34675,arg34676,arg34677,arg34678,arg34679,arg34680,arg34681,arg34682,arg34683,arg34684));

break;
case (15):
var arg34685 = (function (){var G__35047 = ctx;
var G__35048 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35047,G__35048) : sci.impl.evaluator.eval.call(null,G__35047,G__35048));
})();
var args__$1 = cljs.core.rest(args);
var arg34686 = (function (){var G__35049 = ctx;
var G__35050 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35049,G__35050) : sci.impl.evaluator.eval.call(null,G__35049,G__35050));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34687 = (function (){var G__35053 = ctx;
var G__35054 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35053,G__35054) : sci.impl.evaluator.eval.call(null,G__35053,G__35054));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34688 = (function (){var G__35056 = ctx;
var G__35057 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35056,G__35057) : sci.impl.evaluator.eval.call(null,G__35056,G__35057));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34689 = (function (){var G__35058 = ctx;
var G__35059 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35058,G__35059) : sci.impl.evaluator.eval.call(null,G__35058,G__35059));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34690 = (function (){var G__35060 = ctx;
var G__35061 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35060,G__35061) : sci.impl.evaluator.eval.call(null,G__35060,G__35061));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34691 = (function (){var G__35062 = ctx;
var G__35063 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35062,G__35063) : sci.impl.evaluator.eval.call(null,G__35062,G__35063));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34692 = (function (){var G__35064 = ctx;
var G__35065 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35064,G__35065) : sci.impl.evaluator.eval.call(null,G__35064,G__35065));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34693 = (function (){var G__35066 = ctx;
var G__35067 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35066,G__35067) : sci.impl.evaluator.eval.call(null,G__35066,G__35067));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34694 = (function (){var G__35068 = ctx;
var G__35069 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35068,G__35069) : sci.impl.evaluator.eval.call(null,G__35068,G__35069));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34695 = (function (){var G__35070 = ctx;
var G__35071 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35070,G__35071) : sci.impl.evaluator.eval.call(null,G__35070,G__35071));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34696 = (function (){var G__35072 = ctx;
var G__35073 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35072,G__35073) : sci.impl.evaluator.eval.call(null,G__35072,G__35073));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34697 = (function (){var G__35074 = ctx;
var G__35075 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35074,G__35075) : sci.impl.evaluator.eval.call(null,G__35074,G__35075));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg34698 = (function (){var G__35077 = ctx;
var G__35078 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35077,G__35078) : sci.impl.evaluator.eval.call(null,G__35077,G__35078));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg34699 = (function (){var G__35079 = ctx;
var G__35080 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35079,G__35080) : sci.impl.evaluator.eval.call(null,G__35079,G__35080));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg34685,arg34686,arg34687,arg34688,arg34689,arg34690,arg34691,arg34692,arg34693,arg34694,arg34695,arg34696,arg34697,arg34698,arg34699) : f.call(null,arg34685,arg34686,arg34687,arg34688,arg34689,arg34690,arg34691,arg34692,arg34693,arg34694,arg34695,arg34696,arg34697,arg34698,arg34699));

break;
case (16):
var arg34700 = (function (){var G__35083 = ctx;
var G__35084 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35083,G__35084) : sci.impl.evaluator.eval.call(null,G__35083,G__35084));
})();
var args__$1 = cljs.core.rest(args);
var arg34701 = (function (){var G__35086 = ctx;
var G__35087 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35086,G__35087) : sci.impl.evaluator.eval.call(null,G__35086,G__35087));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34702 = (function (){var G__35091 = ctx;
var G__35092 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35091,G__35092) : sci.impl.evaluator.eval.call(null,G__35091,G__35092));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34703 = (function (){var G__35093 = ctx;
var G__35094 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35093,G__35094) : sci.impl.evaluator.eval.call(null,G__35093,G__35094));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34704 = (function (){var G__35096 = ctx;
var G__35098 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35096,G__35098) : sci.impl.evaluator.eval.call(null,G__35096,G__35098));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34705 = (function (){var G__35099 = ctx;
var G__35100 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35099,G__35100) : sci.impl.evaluator.eval.call(null,G__35099,G__35100));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34706 = (function (){var G__35103 = ctx;
var G__35104 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35103,G__35104) : sci.impl.evaluator.eval.call(null,G__35103,G__35104));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34707 = (function (){var G__35106 = ctx;
var G__35107 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35106,G__35107) : sci.impl.evaluator.eval.call(null,G__35106,G__35107));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34708 = (function (){var G__35108 = ctx;
var G__35109 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35108,G__35109) : sci.impl.evaluator.eval.call(null,G__35108,G__35109));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34709 = (function (){var G__35110 = ctx;
var G__35111 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35110,G__35111) : sci.impl.evaluator.eval.call(null,G__35110,G__35111));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34710 = (function (){var G__35112 = ctx;
var G__35113 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35112,G__35113) : sci.impl.evaluator.eval.call(null,G__35112,G__35113));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34711 = (function (){var G__35114 = ctx;
var G__35115 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35114,G__35115) : sci.impl.evaluator.eval.call(null,G__35114,G__35115));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34712 = (function (){var G__35116 = ctx;
var G__35117 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35116,G__35117) : sci.impl.evaluator.eval.call(null,G__35116,G__35117));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg34713 = (function (){var G__35118 = ctx;
var G__35119 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35118,G__35119) : sci.impl.evaluator.eval.call(null,G__35118,G__35119));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg34714 = (function (){var G__35120 = ctx;
var G__35121 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35120,G__35121) : sci.impl.evaluator.eval.call(null,G__35120,G__35121));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg34715 = (function (){var G__35122 = ctx;
var G__35123 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35122,G__35123) : sci.impl.evaluator.eval.call(null,G__35122,G__35123));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg34700,arg34701,arg34702,arg34703,arg34704,arg34705,arg34706,arg34707,arg34708,arg34709,arg34710,arg34711,arg34712,arg34713,arg34714,arg34715) : f.call(null,arg34700,arg34701,arg34702,arg34703,arg34704,arg34705,arg34706,arg34707,arg34708,arg34709,arg34710,arg34711,arg34712,arg34713,arg34714,arg34715));

break;
case (17):
var arg34716 = (function (){var G__35126 = ctx;
var G__35127 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35126,G__35127) : sci.impl.evaluator.eval.call(null,G__35126,G__35127));
})();
var args__$1 = cljs.core.rest(args);
var arg34717 = (function (){var G__35129 = ctx;
var G__35130 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35129,G__35130) : sci.impl.evaluator.eval.call(null,G__35129,G__35130));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34718 = (function (){var G__35132 = ctx;
var G__35133 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35132,G__35133) : sci.impl.evaluator.eval.call(null,G__35132,G__35133));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34719 = (function (){var G__35134 = ctx;
var G__35135 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35134,G__35135) : sci.impl.evaluator.eval.call(null,G__35134,G__35135));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34720 = (function (){var G__35137 = ctx;
var G__35138 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35137,G__35138) : sci.impl.evaluator.eval.call(null,G__35137,G__35138));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34721 = (function (){var G__35140 = ctx;
var G__35141 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35140,G__35141) : sci.impl.evaluator.eval.call(null,G__35140,G__35141));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34722 = (function (){var G__35143 = ctx;
var G__35144 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35143,G__35144) : sci.impl.evaluator.eval.call(null,G__35143,G__35144));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34723 = (function (){var G__35146 = ctx;
var G__35147 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35146,G__35147) : sci.impl.evaluator.eval.call(null,G__35146,G__35147));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34724 = (function (){var G__35148 = ctx;
var G__35149 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35148,G__35149) : sci.impl.evaluator.eval.call(null,G__35148,G__35149));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34725 = (function (){var G__35150 = ctx;
var G__35151 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35150,G__35151) : sci.impl.evaluator.eval.call(null,G__35150,G__35151));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34726 = (function (){var G__35152 = ctx;
var G__35153 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35152,G__35153) : sci.impl.evaluator.eval.call(null,G__35152,G__35153));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34727 = (function (){var G__35155 = ctx;
var G__35156 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35155,G__35156) : sci.impl.evaluator.eval.call(null,G__35155,G__35156));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34728 = (function (){var G__35159 = ctx;
var G__35160 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35159,G__35160) : sci.impl.evaluator.eval.call(null,G__35159,G__35160));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg34729 = (function (){var G__35162 = ctx;
var G__35163 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35162,G__35163) : sci.impl.evaluator.eval.call(null,G__35162,G__35163));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg34730 = (function (){var G__35164 = ctx;
var G__35165 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35164,G__35165) : sci.impl.evaluator.eval.call(null,G__35164,G__35165));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg34731 = (function (){var G__35166 = ctx;
var G__35167 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35166,G__35167) : sci.impl.evaluator.eval.call(null,G__35166,G__35167));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg34732 = (function (){var G__35168 = ctx;
var G__35169 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35168,G__35169) : sci.impl.evaluator.eval.call(null,G__35168,G__35169));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg34716,arg34717,arg34718,arg34719,arg34720,arg34721,arg34722,arg34723,arg34724,arg34725,arg34726,arg34727,arg34728,arg34729,arg34730,arg34731,arg34732) : f.call(null,arg34716,arg34717,arg34718,arg34719,arg34720,arg34721,arg34722,arg34723,arg34724,arg34725,arg34726,arg34727,arg34728,arg34729,arg34730,arg34731,arg34732));

break;
case (18):
var arg34733 = (function (){var G__35172 = ctx;
var G__35173 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35172,G__35173) : sci.impl.evaluator.eval.call(null,G__35172,G__35173));
})();
var args__$1 = cljs.core.rest(args);
var arg34734 = (function (){var G__35174 = ctx;
var G__35175 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35174,G__35175) : sci.impl.evaluator.eval.call(null,G__35174,G__35175));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34735 = (function (){var G__35178 = ctx;
var G__35179 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35178,G__35179) : sci.impl.evaluator.eval.call(null,G__35178,G__35179));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34736 = (function (){var G__35180 = ctx;
var G__35181 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35180,G__35181) : sci.impl.evaluator.eval.call(null,G__35180,G__35181));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34737 = (function (){var G__35182 = ctx;
var G__35183 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35182,G__35183) : sci.impl.evaluator.eval.call(null,G__35182,G__35183));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34738 = (function (){var G__35184 = ctx;
var G__35185 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35184,G__35185) : sci.impl.evaluator.eval.call(null,G__35184,G__35185));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34739 = (function (){var G__35186 = ctx;
var G__35187 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35186,G__35187) : sci.impl.evaluator.eval.call(null,G__35186,G__35187));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34740 = (function (){var G__35189 = ctx;
var G__35190 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35189,G__35190) : sci.impl.evaluator.eval.call(null,G__35189,G__35190));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34741 = (function (){var G__35191 = ctx;
var G__35192 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35191,G__35192) : sci.impl.evaluator.eval.call(null,G__35191,G__35192));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34742 = (function (){var G__35193 = ctx;
var G__35194 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35193,G__35194) : sci.impl.evaluator.eval.call(null,G__35193,G__35194));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34743 = (function (){var G__35195 = ctx;
var G__35196 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35195,G__35196) : sci.impl.evaluator.eval.call(null,G__35195,G__35196));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34744 = (function (){var G__35197 = ctx;
var G__35198 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35197,G__35198) : sci.impl.evaluator.eval.call(null,G__35197,G__35198));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34745 = (function (){var G__35199 = ctx;
var G__35200 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35199,G__35200) : sci.impl.evaluator.eval.call(null,G__35199,G__35200));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg34746 = (function (){var G__35201 = ctx;
var G__35202 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35201,G__35202) : sci.impl.evaluator.eval.call(null,G__35201,G__35202));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg34747 = (function (){var G__35203 = ctx;
var G__35204 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35203,G__35204) : sci.impl.evaluator.eval.call(null,G__35203,G__35204));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg34748 = (function (){var G__35206 = ctx;
var G__35207 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35206,G__35207) : sci.impl.evaluator.eval.call(null,G__35206,G__35207));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg34749 = (function (){var G__35208 = ctx;
var G__35209 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35208,G__35209) : sci.impl.evaluator.eval.call(null,G__35208,G__35209));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg34750 = (function (){var G__35210 = ctx;
var G__35211 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35210,G__35211) : sci.impl.evaluator.eval.call(null,G__35210,G__35211));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg34733,arg34734,arg34735,arg34736,arg34737,arg34738,arg34739,arg34740,arg34741,arg34742,arg34743,arg34744,arg34745,arg34746,arg34747,arg34748,arg34749,arg34750) : f.call(null,arg34733,arg34734,arg34735,arg34736,arg34737,arg34738,arg34739,arg34740,arg34741,arg34742,arg34743,arg34744,arg34745,arg34746,arg34747,arg34748,arg34749,arg34750));

break;
case (19):
var arg34751 = (function (){var G__35214 = ctx;
var G__35215 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35214,G__35215) : sci.impl.evaluator.eval.call(null,G__35214,G__35215));
})();
var args__$1 = cljs.core.rest(args);
var arg34752 = (function (){var G__35216 = ctx;
var G__35217 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35216,G__35217) : sci.impl.evaluator.eval.call(null,G__35216,G__35217));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg34753 = (function (){var G__35218 = ctx;
var G__35219 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35218,G__35219) : sci.impl.evaluator.eval.call(null,G__35218,G__35219));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg34754 = (function (){var G__35220 = ctx;
var G__35221 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35220,G__35221) : sci.impl.evaluator.eval.call(null,G__35220,G__35221));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg34755 = (function (){var G__35222 = ctx;
var G__35223 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35222,G__35223) : sci.impl.evaluator.eval.call(null,G__35222,G__35223));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg34756 = (function (){var G__35224 = ctx;
var G__35225 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35224,G__35225) : sci.impl.evaluator.eval.call(null,G__35224,G__35225));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg34757 = (function (){var G__35228 = ctx;
var G__35229 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35228,G__35229) : sci.impl.evaluator.eval.call(null,G__35228,G__35229));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg34758 = (function (){var G__35230 = ctx;
var G__35231 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35230,G__35231) : sci.impl.evaluator.eval.call(null,G__35230,G__35231));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg34759 = (function (){var G__35232 = ctx;
var G__35233 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35232,G__35233) : sci.impl.evaluator.eval.call(null,G__35232,G__35233));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg34760 = (function (){var G__35234 = ctx;
var G__35235 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35234,G__35235) : sci.impl.evaluator.eval.call(null,G__35234,G__35235));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg34761 = (function (){var G__35236 = ctx;
var G__35237 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35236,G__35237) : sci.impl.evaluator.eval.call(null,G__35236,G__35237));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg34762 = (function (){var G__35238 = ctx;
var G__35239 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35238,G__35239) : sci.impl.evaluator.eval.call(null,G__35238,G__35239));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg34763 = (function (){var G__35240 = ctx;
var G__35241 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35240,G__35241) : sci.impl.evaluator.eval.call(null,G__35240,G__35241));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg34764 = (function (){var G__35242 = ctx;
var G__35243 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35242,G__35243) : sci.impl.evaluator.eval.call(null,G__35242,G__35243));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg34765 = (function (){var G__35244 = ctx;
var G__35245 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35244,G__35245) : sci.impl.evaluator.eval.call(null,G__35244,G__35245));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg34766 = (function (){var G__35250 = ctx;
var G__35251 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35250,G__35251) : sci.impl.evaluator.eval.call(null,G__35250,G__35251));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg34767 = (function (){var G__35258 = ctx;
var G__35259 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35258,G__35259) : sci.impl.evaluator.eval.call(null,G__35258,G__35259));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg34768 = (function (){var G__35260 = ctx;
var G__35261 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35260,G__35261) : sci.impl.evaluator.eval.call(null,G__35260,G__35261));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg34769 = (function (){var G__35262 = ctx;
var G__35263 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35262,G__35263) : sci.impl.evaluator.eval.call(null,G__35262,G__35263));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg34751,arg34752,arg34753,arg34754,arg34755,arg34756,arg34757,arg34758,arg34759,arg34760,arg34761,arg34762,arg34763,arg34764,arg34765,arg34766,arg34767,arg34768,arg34769) : f.call(null,arg34751,arg34752,arg34753,arg34754,arg34755,arg34756,arg34757,arg34758,arg34759,arg34760,arg34761,arg34762,arg34763,arg34764,arg34765,arg34766,arg34767,arg34768,arg34769));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33838_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__33838_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__33838_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval_special_call = (function sci$impl$evaluator$eval_special_call(ctx,f_sym,expr){
var G__35266 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__35266)){
return sci.impl.evaluator.eval_instance_method_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__35266)){
return sci.impl.evaluator.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__35266)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__35266)){
return sci.impl.evaluator.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__35266)){
return sci.impl.evaluator.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__35266)){
return sci.impl.evaluator.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__35266)){
return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__35266)){
return sci.impl.evaluator.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__35266)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_use,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__35266)){
return sci.impl.evaluator.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__35266)){
return sci.impl.evaluator.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__35266)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_require,ctx,cljs.core.with_meta(cljs.core.rest(expr),cljs.core.meta(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__35266)){
return sci.impl.evaluator.eval_constructor_invocation(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__35266)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__35266)){
return (new cljs.core.LazySeq(null,(function (){var G__35275 = ctx;
var G__35276 = cljs.core.second(expr);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(G__35275,G__35276) : sci.impl.evaluator.eval.call(null,G__35275,G__35276));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__35266)){
return sci.impl.evaluator.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__35266)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__35266)){
return sci.impl.evaluator.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35266)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.evaluator.eval_call = (function sci$impl$evaluator$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.evaluator.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
return sci.impl.evaluator.eval_static_method_invocation(ctx,expr);
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.evaluator.eval.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
return sci.impl.evaluator.fn_call(ctx,f__$1,cljs.core.rest(expr));
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e35280){if((e35280 instanceof Error)){
var e = e35280;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e35280;

}
}});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5751__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5751__auto__)){
var mm = temp__5751__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.evaluator.eval.call(null,ctx,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,expr){
try{if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
return cljs.core._deref(v);
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__35307 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),G__35307)){
return sci.impl.evaluator.eval_call(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"try","try",1380742522),G__35307)){
return sci.impl.evaluator.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),G__35307)){
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(expr);
var the_fn = sci.impl.fns.eval_fn(ctx,sci.impl.evaluator.eval,sci.impl.evaluator.eval_do_STAR_,expr);
var fn_meta__$1 = (cljs.core.truth_(fn_meta)?sci.impl.evaluator.handle_meta(ctx,fn_meta):null);
if(cljs.core.truth_(fn_meta__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(the_fn,cljs.core.merge,fn_meta__$1);
} else {
return the_fn;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"static-access","static-access",-1860919441),G__35307)){
return sci.impl.interop.get_static_field(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref!","deref!",153059469),G__35307)){
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__35307)){
return ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192)).get(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__35307)){
if((op === sci.impl.utils.needs_ctx)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"eval","eval",536963622,null),G__35307)){
if((op === sci.impl.utils.evaluate)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(ctx) : expr.call(null,ctx));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));
}
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35289_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__35289_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__35289_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35291_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__35291_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__35291_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,m));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35292_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$2(ctx,p1__35292_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,p1__35292_SHARP_));
}),expr)),sci.impl.evaluator.handle_meta(ctx,m));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
}
}
}
}
}
}
}
})());
return ret;
}
}catch (e35301){if((e35301 instanceof Error)){
var e = e35301;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var G__35302 = e;
var G__35302__$1 = (((G__35302 == null))?null:cljs.core.ex_data(G__35302));
if((G__35302__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__35302__$1);
}
})(),new cljs.core.Keyword("sci","error","sci/error",-979082803))){
throw e;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
}
} else {
throw e35301;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
