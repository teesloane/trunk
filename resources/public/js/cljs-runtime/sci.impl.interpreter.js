goog.provide('sci.impl.interpreter');
sci.impl.interpreter.stats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parse","parse",-1162164619),(0),new cljs.core.Keyword(null,"analysis","analysis",-1362593389),(0),new cljs.core.Keyword(null,"eval","eval",-1103567905),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null));
sci.impl.interpreter.update_stats = (function sci$impl$interpreter$update_stats(_ctx,k,t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sci.impl.interpreter.stats,(function (stats){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(stats,k,cljs.core._PLUS_,t),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core._PLUS_,t);
}));
});
sci.impl.interpreter.print_stats = (function sci$impl$interpreter$print_stats(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.zipmap(cljs.core.keys(cljs.core.deref(sci.impl.interpreter.stats)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41264_SHARP_){
return (p1__41264_SHARP_ / 1000000.0);
}),cljs.core.vals(cljs.core.deref(sci.impl.interpreter.stats))))], 0));
});
sci.impl.interpreter.eval_form_stats = (function sci$impl$interpreter$eval_form_stats(ctx,form){
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(form))){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__41316 = cljs.core.rest(exprs);
var G__41317 = (function (){var G__41267 = ctx;
var G__41268 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2(G__41267,G__41268) : sci.impl.interpreter.eval_form_stats.call(null,G__41267,G__41268));
})();
exprs = G__41316;
ret = G__41317;
continue;
} else {
return ret;
}
break;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.first(form))))))){
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,form,true);
var ret = (((analyzed instanceof sci.impl.types.EvalForm))?(function (){var G__41269 = ctx;
var G__41270 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form_stats.cljs$core$IFn$_invoke$arity$2(G__41269,G__41270) : sci.impl.interpreter.eval_form_stats.call(null,G__41269,G__41270));
})():(function (){var ret = sci.impl.evaluator.eval(ctx,analyzed);
return ret;
})());
return ret;
} else {
return null;
}
}
} else {
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,form);
var ret = sci.impl.evaluator.eval(ctx,analyzed);
return ret;
}
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(form))){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__41319 = cljs.core.rest(exprs);
var G__41320 = (function (){var G__41283 = ctx;
var G__41284 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__41283,G__41284) : sci.impl.interpreter.eval_form.call(null,G__41283,G__41284));
})();
exprs = G__41319;
ret = G__41320;
continue;
} else {
return ret;
}
break;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.first(form))))))){
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,form,true);
var ret = (((analyzed instanceof sci.impl.types.EvalForm))?(function (){var G__41289 = ctx;
var G__41290 = analyzed.sci$impl$types$IBox$getVal$arity$1(null);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__41289,G__41290) : sci.impl.interpreter.eval_form.call(null,G__41289,G__41290));
})():sci.impl.evaluator.eval(ctx,analyzed));
return ret;
} else {
return null;
}
}
} else {
var analyzed = sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,form);
var ret = sci.impl.evaluator.eval(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_stats = (function sci$impl$interpreter$eval_string_stats(ctx,s){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})());
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr)))){
sci.impl.interpreter.print_stats();

return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx__$1,expr);
var G__41321 = ret__$1;
ret = G__41321;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})());
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx__$1,expr);
var G__41326 = ret__$1;
ret = G__41326;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_string_STAR_,sci.impl.interpreter.eval_string_STAR_);
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__41310 = arguments.length;
switch (G__41310) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
