goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__32032 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32033 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32033);

try{var G__32035 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__32035);

return G__32035;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32032);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__32046 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32047 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32047);

try{var G__32048 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__32048);

return G__32048;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32046);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__32050 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32052 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32052);

try{var G__32053 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__32053);

return G__32053;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32050);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32505 = arguments.length;
var i__4819__auto___32506 = (0);
while(true){
if((i__4819__auto___32506 < len__4818__auto___32505)){
args__4824__auto__.push((arguments[i__4819__auto___32506]));

var G__32507 = (i__4819__auto___32506 + (1));
i__4819__auto___32506 = G__32507;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32137 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32138 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32139 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32140 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32141 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32142 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32143 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32144 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32141);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32142);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32143);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32144);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32140);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32139);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32138);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32137);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq32120){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32120));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32508 = arguments.length;
var i__4819__auto___32509 = (0);
while(true){
if((i__4819__auto___32509 < len__4818__auto___32508)){
args__4824__auto__.push((arguments[i__4819__auto___32509]));

var G__32510 = (i__4819__auto___32509 + (1));
i__4819__auto___32509 = G__32510;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32165 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32166 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32167 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32168 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32169 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32170 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32171 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32172 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32169);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32170);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32171);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32172);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32168);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32167);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32166);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32165);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq32161){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32161));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32511 = arguments.length;
var i__4819__auto___32512 = (0);
while(true){
if((i__4819__auto___32512 < len__4818__auto___32511)){
args__4824__auto__.push((arguments[i__4819__auto___32512]));

var G__32513 = (i__4819__auto___32512 + (1));
i__4819__auto___32512 = G__32513;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32192 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32194 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32195 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32196 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32197 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32198 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32199 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32200 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32197);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32198);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32199);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32200);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32196);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32195);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32194);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32192);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq32191){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32191));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32544 = arguments.length;
var i__4819__auto___32545 = (0);
while(true){
if((i__4819__auto___32545 < len__4818__auto___32544)){
args__4824__auto__.push((arguments[i__4819__auto___32545]));

var G__32547 = (i__4819__auto___32545 + (1));
i__4819__auto___32545 = G__32547;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32229 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32230 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32231 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32232 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32233 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32234 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32235 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32236 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32233);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32234);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32235);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32236);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32232);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32231);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32230);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32229);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq32228){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32228));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32548 = arguments.length;
var i__4819__auto___32549 = (0);
while(true){
if((i__4819__auto___32549 < len__4818__auto___32548)){
args__4824__auto__.push((arguments[i__4819__auto___32549]));

var G__32550 = (i__4819__auto___32549 + (1));
i__4819__auto___32549 = G__32550;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32264 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32265 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32266 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32267 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32268 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__32269 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32267);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32268);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32269);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32266);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32265);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32264);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq32258){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32258));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32551 = arguments.length;
var i__4819__auto___32552 = (0);
while(true){
if((i__4819__auto___32552 < len__4818__auto___32551)){
args__4824__auto__.push((arguments[i__4819__auto___32552]));

var G__32553 = (i__4819__auto___32552 + (1));
i__4819__auto___32552 = G__32553;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32297 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32298 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32299 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32300 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32301 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32302 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32303 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32304 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32301);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32302);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32303);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32304);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32300);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32299);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32298);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32297);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq32293){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32293));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32554 = arguments.length;
var i__4819__auto___32555 = (0);
while(true){
if((i__4819__auto___32555 < len__4818__auto___32554)){
args__4824__auto__.push((arguments[i__4819__auto___32555]));

var G__32556 = (i__4819__auto___32555 + (1));
i__4819__auto___32555 = G__32556;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32310 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32311 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32312 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32313 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__32314 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32315 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32316 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32317 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32314);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32315);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32316);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32317);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32313);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32312);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32311);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32310);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq32309){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32309));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32557 = arguments.length;
var i__4819__auto___32558 = (0);
while(true){
if((i__4819__auto___32558 < len__4818__auto___32557)){
args__4824__auto__.push((arguments[i__4819__auto___32558]));

var G__32559 = (i__4819__auto___32558 + (1));
i__4819__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__32318__auto__","s__32318__auto__",-213999864,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32318__auto__","s__32318__auto__",-213999864,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32318__auto__","s__32318__auto__",-213999864,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq32319){
var G__32320 = cljs.core.first(seq32319);
var seq32319__$1 = cljs.core.next(seq32319);
var G__32321 = cljs.core.first(seq32319__$1);
var seq32319__$2 = cljs.core.next(seq32319__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32320,G__32321,seq32319__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
