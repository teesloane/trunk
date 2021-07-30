goog.provide('rewrite_clj.parser.whitespace');
/**
 * Parse as much whitespace as possible. The created node can either contain
 * only linebreaks or only space/tabs.
 */
rewrite_clj.parser.whitespace.parse_whitespace = (function rewrite_clj$parser$whitespace$parse_whitespace(reader){
if(rewrite_clj.reader.linebreak_QMARK_((rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader)))){
var G__29773 = rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_clj.reader.linebreak_QMARK_);
return (rewrite_clj.node.newline_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.newline_node.cljs$core$IFn$_invoke$arity$1(G__29773) : rewrite_clj.node.newline_node.call(null,G__29773));
} else {
var G__29774 = rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2(reader,rewrite_clj.reader.space_QMARK_);
return (rewrite_clj.node.whitespace_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.whitespace_node.cljs$core$IFn$_invoke$arity$1(G__29774) : rewrite_clj.node.whitespace_node.call(null,G__29774));
}
});

//# sourceMappingURL=rewrite_clj.parser.whitespace.js.map
