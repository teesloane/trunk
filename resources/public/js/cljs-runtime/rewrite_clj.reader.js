goog.provide('rewrite_clj.reader');
rewrite_clj.reader.read_char = cljs.tools.reader.reader_types.read_char;
rewrite_clj.reader.get_column_number = cljs.tools.reader.reader_types.get_column_number;
rewrite_clj.reader.get_line_number = cljs.tools.reader.reader_types.get_line_number;
rewrite_clj.reader.peek_char = cljs.tools.reader.reader_types.peek_char;
rewrite_clj.reader.indexing_push_back_reader = cljs.tools.reader.reader_types.indexing_push_back_reader;
rewrite_clj.reader.unread = cljs.tools.reader.reader_types.unread;
rewrite_clj.reader.read_string = cljs.tools.reader.read_string;
/**
 * Throw reader exception, including line/column.
 */
rewrite_clj.reader.throw_reader = (function rewrite_clj$reader$throw_reader(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29741 = arguments.length;
var i__4819__auto___29742 = (0);
while(true){
if((i__4819__auto___29742 < len__4818__auto___29741)){
args__4824__auto__.push((arguments[i__4819__auto___29742]));

var G__29743 = (i__4819__auto___29742 + (1));
i__4819__auto___29742 = G__29743;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = (rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_column_number.call(null,reader));
var l = (rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_line_number.call(null,reader));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join('')));
}));

(rewrite_clj.reader.throw_reader.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.reader.throw_reader.cljs$lang$applyTo = (function (seq29716){
var G__29717 = cljs.core.first(seq29716);
var seq29716__$1 = cljs.core.next(seq29716);
var G__29718 = cljs.core.first(seq29716__$1);
var seq29716__$2 = cljs.core.next(seq29716__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29717,G__29718,seq29716__$2);
}));

/**
 * Check whether a given char is a token boundary.
 */
rewrite_clj.reader.boundary_QMARK_ = (function rewrite_clj$reader$boundary_QMARK_(c){
return ((-1) < ["\"",":",";","'","@","^","`","~","(",")","[","]","{","}","\\",null].indexOf(c));
});
/**
 * Checks whether a given character is whitespace
 */
rewrite_clj.reader.whitespace_QMARK_ = (function rewrite_clj$reader$whitespace_QMARK_(ch){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(ch));
});
/**
 * Checks whether the character is a newline
 */
rewrite_clj.reader.linebreak_QMARK_ = (function rewrite_clj$reader$linebreak_QMARK_(c){
return ((-1) < ["\r","\n"].indexOf(c));
});
/**
 * Checks whether the character is a space
 */
rewrite_clj.reader.space_QMARK_ = (function rewrite_clj$reader$space_QMARK_(c){
return ((-1) < ["\t"," ",","].indexOf(c));
});
rewrite_clj.reader.whitespace_or_boundary_QMARK_ = (function rewrite_clj$reader$whitespace_or_boundary_QMARK_(c){
return ((rewrite_clj.reader.whitespace_QMARK_(c)) || (rewrite_clj.reader.boundary_QMARK_(c)));
});
rewrite_clj.reader.buf = (new goog.string.StringBuffer(""));
/**
 * Read while the chars fulfill the given condition. Ignores
 *   the unmatching char.
 */
rewrite_clj.reader.read_while = (function rewrite_clj$reader$read_while(var_args){
var G__29720 = arguments.length;
switch (G__29720) {
case 2:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2 = (function (reader,p_QMARK_){
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,p_QMARK_,cljs.core.not((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null))));
}));

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3 = (function (reader,p_QMARK_,eof_QMARK_){
rewrite_clj.reader.buf.clear();

while(true){
var temp__5751__auto__ = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(c) : p_QMARK_.call(null,c)))){
rewrite_clj.reader.buf.append(c);

continue;
} else {
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(reader,c) : rewrite_clj.reader.unread.call(null,reader,c));

return rewrite_clj.reader.buf.toString();
}
} else {
if(cljs.core.truth_(eof_QMARK_)){
return rewrite_clj.reader.buf.toString();
} else {
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
}
}
break;
}
}));

(rewrite_clj.reader.read_while.cljs$lang$maxFixedArity = 3);

/**
 * Read until a char fulfills the given condition. Ignores the
 * matching char.
 */
rewrite_clj.reader.read_until = (function rewrite_clj$reader$read_until(reader,p_QMARK_){
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,cljs.core.complement(p_QMARK_),(p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null)));
});
/**
 * Read until linebreak and include it.
 */
rewrite_clj.reader.read_include_linebreak = (function rewrite_clj$reader$read_include_linebreak(reader){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.reader.read_until(reader,(function (p1__29721_SHARP_){
return (((p1__29721_SHARP_ == null)) || (rewrite_clj.reader.linebreak_QMARK_(p1__29721_SHARP_)));
}))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader)))].join('');
});
/**
 * Convert string to EDN value.
 */
rewrite_clj.reader.string__GT_edn = (function rewrite_clj$reader$string__GT_edn(s){
return (rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_string.cljs$core$IFn$_invoke$arity$1(s) : rewrite_clj.reader.read_string.call(null,s));
});
/**
 * Ignore the next character.
 */
rewrite_clj.reader.ignore = (function rewrite_clj$reader$ignore(reader){
(rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));

return null;
});
/**
 * Read next char.
 */
rewrite_clj.reader.next = (function rewrite_clj$reader$next(reader){
return (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
});
/**
 * Peek next char.
 */
rewrite_clj.reader.peek = (function rewrite_clj$reader$peek(reader){
return (rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader));
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
rewrite_clj.reader.read_with_meta = (function rewrite_clj$reader$read_with_meta(reader,read_fn){
var row = (rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_line_number.call(null,reader));
var col = (rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_column_number.call(null,reader));
var entry = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(entry)){
var end_row = (rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_line_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_line_number.call(null,reader));
var end_col = (rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.get_column_number.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.get_column_number.call(null,reader));
var end_col__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),end_col))?(col + entry.rewrite_clj$node$protocols$Node$string$arity$1(null).length):end_col);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),col)){
return entry;
} else {
return entry.cljs$core$IWithMeta$_with_meta$arity$2(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"end-row","end-row",-545103581),end_row,new cljs.core.Keyword(null,"end-col","end-col",-724155879),end_col__$1], null));
}
} else {
return null;
}
});
/**
 * Call the given function on the given reader until it returns
 * a non-truthy value.
 */
rewrite_clj.reader.read_repeatedly = (function rewrite_clj$reader$read_repeatedly(reader,read_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
}))));
});
/**
 * Call the given function on the given reader until `n` values matching `p?` have been
 * collected.
 */
rewrite_clj.reader.read_n = (function rewrite_clj$reader$read_n(reader,node_tag,read_fn,p_QMARK_,n){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var c = (0);
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if((c < n)){
var temp__5751__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
var G__29749 = (cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : p_QMARK_.call(null,v)))?(c + (1)):c);
var G__29750 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vs,v);
c = G__29749;
vs = G__29750;
continue;
} else {
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"%s node expects %d value%s.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_tag,n,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?"":"s")], 0));
}
} else {
return vs;
}
break;
}
});
rewrite_clj.reader.re_matches_STAR_ = (function rewrite_clj$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if((((!((matches == null)))) && (((matches[(0)]) === s)))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
rewrite_clj.reader.read_keyword = (function rewrite_clj$reader$read_keyword(reader,initch){
var tok = (function (){var G__29738 = reader;
var G__29739 = new cljs.core.Keyword(null,"keyword","keyword",811389747);
var G__29740 = (rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));
var fexpr__29737 = new cljs.core.Var(function(){return cljs.tools.reader.read_token;},new cljs.core.Symbol("cljs.tools.reader","read-token","cljs.tools.reader/read-token",-1324527411,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader","cljs.tools.reader",-831293977,null),new cljs.core.Symbol(null,"read-token","read-token",392624627,null),"cljs/tools/reader.cljs",(18),(1),(48),(48),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null)),"Read in a single logical token from the reader",(cljs.core.truth_(cljs.tools.reader.read_token)?cljs.tools.reader.read_token.cljs$lang$test:null)]));
return (fexpr__29737.cljs$core$IFn$_invoke$arity$3 ? fexpr__29737.cljs$core$IFn$_invoke$arity$3(G__29738,G__29739,G__29740) : fexpr__29737.call(null,G__29738,G__29739,G__29740));
})();
var a = rewrite_clj.reader.re_matches_STAR_(cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$"),tok);
var token = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if((((((!((void 0 === ns)))) && ((ns.substring((ns.length - (2)),ns.length) === ":/")))) || (((((name[(name.length - (1))]) === ":")) || ((!((token.indexOf("::",(1)) === (-1))))))))){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid token: ",token], 0));
} else {
if((((!((ns == null)))) && ((ns.length > (0))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token.substring((1)));
}
}
});

//# sourceMappingURL=rewrite_clj.reader.js.map
