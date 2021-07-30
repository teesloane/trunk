goog.provide('sci.impl.read');
/**
 * Added for compatibility. Does not support all of the options from the original yet.
 */
sci.impl.read.read = (function sci$impl$read$read(var_args){
var G__34297 = arguments.length;
switch (G__34297) {
case 1:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$1 = (function (sci_ctx){
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$2(sci_ctx,cljs.core.deref(sci.impl.io.in$));
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$2 = (function (sci_ctx,stream){
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$4(sci_ctx,stream,true,null);
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$4 = (function (sci_ctx,stream,eof_error_QMARK_,eof_value){
return sci.impl.read.read.cljs$core$IFn$_invoke$arity$5(sci_ctx,stream,eof_error_QMARK_,eof_value,false);
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$5 = (function (sci_ctx,stream,_eof_error_QMARK_,eof_value,_recursive_QMARK_){
var v = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(sci_ctx,stream,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof_value], null));
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v)))){
return eof_value;
} else {
return v;
}
}));

(sci.impl.read.read.cljs$core$IFn$_invoke$arity$3 = (function (sci_ctx,_opts,stream){
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(sci_ctx,stream);
}));

(sci.impl.read.read.cljs$lang$maxFixedArity = 5);

sci.impl.read.read_string = (function sci$impl$read$read_string(sci_ctx,s){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(sci_ctx,reader);
});
sci.impl.read.eval = (function sci$impl$read$eval(sci_ctx,form){
var fexpr__34308 = cljs.core.deref(sci.impl.utils.eval_form_state);
return (fexpr__34308.cljs$core$IFn$_invoke$arity$2 ? fexpr__34308.cljs$core$IFn$_invoke$arity$2(sci_ctx,form) : fexpr__34308.call(null,sci_ctx,form));
});
sci.impl.read.load_string = (function sci$impl$read$load_string(sci_ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var x = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(sci_ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),x) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),x)))){
return ret;
} else {
var G__34310 = sci.impl.read.eval(sci_ctx,x);
ret = G__34310;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.read.source_logging_reader = (function sci$impl$read$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});

//# sourceMappingURL=sci.impl.read.js.map
