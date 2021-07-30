var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.tools.reader.impl.errors.js");
require("./cljs.tools.reader.reader_types.js");
require("./cljs.tools.reader.impl.utils.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.tools.reader.impl.commons.js");

goog.provide('cljs.tools.reader.impl.commons');
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.tools.reader.impl.commons.number_literal_QMARK_ = (function cljs$tools$reader$impl$commons$number_literal_QMARK_(reader,initch){
return ((cljs.tools.reader.impl.utils.numeric_QMARK_(initch)) || (((((("+" === initch)) || (("-" === initch)))) && (cljs.tools.reader.impl.utils.numeric_QMARK_(reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null))))));
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.tools.reader.impl.commons.read_past = (function cljs$tools$reader$impl$commons$read_past(pred,rdr){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(ch) : pred.call(null,ch))){
var G__34827 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__34827;
continue;
} else {
return ch;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.tools.reader.impl.commons.skip_line = (function cljs$tools$reader$impl$commons$skip_line(reader){
while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_(reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null))){
} else {
continue;
}
break;
}

return reader;
});
cljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
cljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
cljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
cljs.tools.reader.impl.commons.match_int = (function cljs$tools$reader$impl$commons$match_int(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.int_pattern,s));
if((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2))) == null)))){
return (0);
} else {
var negate_QMARK_ = ("-" === (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1))));
var a = (((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))),(10)], null):(((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))),(16)], null):(((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))),(8)], null):(((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))),parseInt((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((6)) : m.call(null,(6))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)
))));
var n = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0)));
if((n == null)){
return null;
} else {
var bn = parseInt(n,(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))));
var bn__$1 = ((negate_QMARK_)?((-1) * bn):bn);
if(cljs.core.truth_(isNaN(bn__$1))){
return null;
} else {
return bn__$1;
}
}
}
});
cljs.tools.reader.impl.commons.match_ratio = (function cljs$tools$reader$impl$commons$match_ratio(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.ratio_pattern,s));
var numerator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
var denominator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2)));
var numerator__$1 = (cljs.core.truth_(cljs.core.re_find(/^\+/,numerator))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(numerator,(1)):numerator);
return (parseInt(numerator__$1) / parseInt(denominator));
});
cljs.tools.reader.impl.commons.match_float = (function cljs$tools$reader$impl$commons$match_float(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.float_pattern,s));
if((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null)))){
return parseFloat((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1))));
} else {
return parseFloat(s);
}
});
cljs.tools.reader.impl.commons.matches_QMARK_ = (function cljs$tools$reader$impl$commons$matches_QMARK_(pattern,s){
var vec__34790 = cljs.core.re_find(pattern,s);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(0),null);
return (match === s);
});
cljs.tools.reader.impl.commons.match_number = (function cljs$tools$reader$impl$commons$match_number(s){
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.int_pattern,s)){
return cljs.tools.reader.impl.commons.match_int(s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.float_pattern,s)){
return cljs.tools.reader.impl.commons.match_float(s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.ratio_pattern,s)){
return cljs.tools.reader.impl.commons.match_ratio(s);
} else {
return null;
}
}
}
});
/**
 * Parses a string into a vector of the namespace and symbol
 */
cljs.tools.reader.impl.commons.parse_symbol = (function cljs$tools$reader$impl$commons$parse_symbol(token){
if(((("" === token)) || (((/:$/.test(token) === true) || (/^::/.test(token) === true))))){
return null;
} else {
var ns_idx = token.indexOf("/");
var ns = (((ns_idx > (0)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),ns_idx):null);
if((!((ns == null)))){
var ns_idx__$1 = (ns_idx + (1));
if((ns_idx__$1 === cljs.core.count(token))){
return null;
} else {
var sym = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,ns_idx__$1);
if((((!(cljs.tools.reader.impl.utils.numeric_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym,(0)))))) && ((((!(("" === sym)))) && (((/:$/.test(ns) === false) && ((((sym === "/")) || (((-1) === sym.indexOf("/"))))))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,sym], null);
} else {
return null;
}
}
} else {
if((((token === "/")) || (((-1) === token.indexOf("/"))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,token], null);
} else {
return null;
}
}
}
});
cljs.tools.reader.impl.commons.read_comment = (function cljs$tools$reader$impl$commons$read_comment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34838 = arguments.length;
var i__4819__auto___34839 = (0);
while(true){
if((i__4819__auto___34839 < len__4818__auto___34838)){
args__4824__auto__.push((arguments[i__4819__auto___34839]));

var G__34840 = (i__4819__auto___34839 + (1));
i__4819__auto___34839 = G__34840;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,_){
return cljs.tools.reader.impl.commons.skip_line(rdr);
}));

(cljs.tools.reader.impl.commons.read_comment.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = (function (seq34815){
var G__34816 = cljs.core.first(seq34815);
var seq34815__$1 = cljs.core.next(seq34815);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34816,seq34815__$1);
}));

cljs.tools.reader.impl.commons.throwing_reader = (function cljs$tools$reader$impl$commons$throwing_reader(msg){
return (function() { 
var G__34847__delegate = function (rdr,_){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
};
var G__34847 = function (rdr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__34849__i = 0, G__34849__a = new Array(arguments.length -  1);
while (G__34849__i < G__34849__a.length) {G__34849__a[G__34849__i] = arguments[G__34849__i + 1]; ++G__34849__i;}
  _ = new cljs.core.IndexedSeq(G__34849__a,0,null);
} 
return G__34847__delegate.call(this,rdr,_);};
G__34847.cljs$lang$maxFixedArity = 1;
G__34847.cljs$lang$applyTo = (function (arglist__34850){
var rdr = cljs.core.first(arglist__34850);
var _ = cljs.core.rest(arglist__34850);
return G__34847__delegate(rdr,_);
});
G__34847.cljs$core$IFn$_invoke$arity$variadic = G__34847__delegate;
return G__34847;
})()
;
});
Object.defineProperty(module.exports, "match_number", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.match_number; } });
Object.defineProperty(module.exports, "skip_line", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.skip_line; } });
Object.defineProperty(module.exports, "int_pattern", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.int_pattern; } });
Object.defineProperty(module.exports, "read_comment", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.read_comment; } });
Object.defineProperty(module.exports, "match_ratio", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.match_ratio; } });
Object.defineProperty(module.exports, "match_int", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.match_int; } });
Object.defineProperty(module.exports, "parse_symbol", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.parse_symbol; } });
Object.defineProperty(module.exports, "number_literal_QMARK_", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.number_literal_QMARK_; } });
Object.defineProperty(module.exports, "read_past", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.read_past; } });
Object.defineProperty(module.exports, "float_pattern", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.float_pattern; } });
Object.defineProperty(module.exports, "matches_QMARK_", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.matches_QMARK_; } });
Object.defineProperty(module.exports, "throwing_reader", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.throwing_reader; } });
Object.defineProperty(module.exports, "match_float", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.match_float; } });
Object.defineProperty(module.exports, "ratio_pattern", { enumerable: false, get: function() { return cljs.tools.reader.impl.commons.ratio_pattern; } });
//# sourceMappingURL=cljs.tools.reader.impl.commons.js.map
