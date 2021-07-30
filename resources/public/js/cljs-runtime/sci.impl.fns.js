goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,interpret,eval_do_STAR_,p__70618,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__70619 = p__70618;
var map__70619__$1 = cljs.core.__destructure_map(map__70619);
var _m = map__70619__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70619__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70619__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70619__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70619__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var body_count = cljs.core.count(body);
var return$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),body_count))?(function (){var fst = cljs.core.first(body);
return (function (p1__70616_SHARP_){
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(p1__70616_SHARP_,fst) : interpret.call(null,p1__70616_SHARP_,fst));
});
})():(function (p1__70617_SHARP_){
return (eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(p1__70617_SHARP_,body) : eval_do_STAR_.call(null,p1__70617_SHARP_,body));
}));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__70620 = (fixed_arity | (0));
switch (G__70620) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = return$(ctx);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70622 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__70621){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70622,G__70621);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71403 = cljs.core._nth(recur_val,(0));
G__70621 = G__71403;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70624 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__70623){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70624,G__70623);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71404 = cljs.core._nth(recur_val,(0));
G__70623 = G__71404;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70627 = cljs.core._nth(params,(0));
var G__70628 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__70625,G__70626){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70627,G__70625);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70628,G__70626);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71405 = cljs.core._nth(recur_val,(0));
var G__71406 = cljs.core._nth(recur_val,(1));
G__70625 = G__71405;
G__70626 = G__71406;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70631 = cljs.core._nth(params,(0));
var G__70632 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__70629,G__70630){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70631,G__70629);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70632,G__70630);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$2);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71407 = cljs.core._nth(recur_val,(0));
var G__71408 = cljs.core._nth(recur_val,(1));
G__70629 = G__71407;
G__70630 = G__71408;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70636 = cljs.core._nth(params,(0));
var G__70637 = cljs.core._nth(params,(1));
var G__70638 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__70633,G__70634,G__70635){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70636,G__70633);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70637,G__70634);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70638,G__70635);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71409 = cljs.core._nth(recur_val,(0));
var G__71410 = cljs.core._nth(recur_val,(1));
var G__71411 = cljs.core._nth(recur_val,(2));
G__70633 = G__71409;
G__70634 = G__71410;
G__70635 = G__71411;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70642 = cljs.core._nth(params,(0));
var G__70643 = cljs.core._nth(params,(1));
var G__70644 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__70639,G__70640,G__70641){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70642,G__70639);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70643,G__70640);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70644,G__70641);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$3);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71412 = cljs.core._nth(recur_val,(0));
var G__71413 = cljs.core._nth(recur_val,(1));
var G__71414 = cljs.core._nth(recur_val,(2));
G__70639 = G__71412;
G__70640 = G__71413;
G__70641 = G__71414;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70649 = cljs.core._nth(params,(0));
var G__70650 = cljs.core._nth(params,(1));
var G__70651 = cljs.core._nth(params,(2));
var G__70652 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__70645,G__70646,G__70647,G__70648){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70649,G__70645);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70650,G__70646);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70651,G__70647);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70652,G__70648);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71415 = cljs.core._nth(recur_val,(0));
var G__71416 = cljs.core._nth(recur_val,(1));
var G__71417 = cljs.core._nth(recur_val,(2));
var G__71418 = cljs.core._nth(recur_val,(3));
G__70645 = G__71415;
G__70646 = G__71416;
G__70647 = G__71417;
G__70648 = G__71418;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70657 = cljs.core._nth(params,(0));
var G__70658 = cljs.core._nth(params,(1));
var G__70659 = cljs.core._nth(params,(2));
var G__70660 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__70653,G__70654,G__70655,G__70656){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70657,G__70653);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70658,G__70654);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70659,G__70655);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70660,G__70656);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$4);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71419 = cljs.core._nth(recur_val,(0));
var G__71420 = cljs.core._nth(recur_val,(1));
var G__71421 = cljs.core._nth(recur_val,(2));
var G__71422 = cljs.core._nth(recur_val,(3));
G__70653 = G__71419;
G__70654 = G__71420;
G__70655 = G__71421;
G__70656 = G__71422;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70666 = cljs.core._nth(params,(0));
var G__70667 = cljs.core._nth(params,(1));
var G__70668 = cljs.core._nth(params,(2));
var G__70669 = cljs.core._nth(params,(3));
var G__70670 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__70661,G__70662,G__70663,G__70664,G__70665){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70666,G__70661);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70667,G__70662);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70668,G__70663);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70669,G__70664);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70670,G__70665);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71423 = cljs.core._nth(recur_val,(0));
var G__71424 = cljs.core._nth(recur_val,(1));
var G__71425 = cljs.core._nth(recur_val,(2));
var G__71426 = cljs.core._nth(recur_val,(3));
var G__71427 = cljs.core._nth(recur_val,(4));
G__70661 = G__71423;
G__70662 = G__71424;
G__70663 = G__71425;
G__70664 = G__71426;
G__70665 = G__71427;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70676 = cljs.core._nth(params,(0));
var G__70677 = cljs.core._nth(params,(1));
var G__70678 = cljs.core._nth(params,(2));
var G__70679 = cljs.core._nth(params,(3));
var G__70680 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__70671,G__70672,G__70673,G__70674,G__70675){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70676,G__70671);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70677,G__70672);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70678,G__70673);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70679,G__70674);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70680,G__70675);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$5);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71428 = cljs.core._nth(recur_val,(0));
var G__71429 = cljs.core._nth(recur_val,(1));
var G__71430 = cljs.core._nth(recur_val,(2));
var G__71431 = cljs.core._nth(recur_val,(3));
var G__71432 = cljs.core._nth(recur_val,(4));
G__70671 = G__71428;
G__70672 = G__71429;
G__70673 = G__71430;
G__70674 = G__71431;
G__70675 = G__71432;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70687 = cljs.core._nth(params,(0));
var G__70688 = cljs.core._nth(params,(1));
var G__70689 = cljs.core._nth(params,(2));
var G__70690 = cljs.core._nth(params,(3));
var G__70691 = cljs.core._nth(params,(4));
var G__70692 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__70681,G__70682,G__70683,G__70684,G__70685,G__70686){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70687,G__70681);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70688,G__70682);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70689,G__70683);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70690,G__70684);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70691,G__70685);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70692,G__70686);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71433 = cljs.core._nth(recur_val,(0));
var G__71434 = cljs.core._nth(recur_val,(1));
var G__71435 = cljs.core._nth(recur_val,(2));
var G__71436 = cljs.core._nth(recur_val,(3));
var G__71437 = cljs.core._nth(recur_val,(4));
var G__71438 = cljs.core._nth(recur_val,(5));
G__70681 = G__71433;
G__70682 = G__71434;
G__70683 = G__71435;
G__70684 = G__71436;
G__70685 = G__71437;
G__70686 = G__71438;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70699 = cljs.core._nth(params,(0));
var G__70700 = cljs.core._nth(params,(1));
var G__70701 = cljs.core._nth(params,(2));
var G__70702 = cljs.core._nth(params,(3));
var G__70703 = cljs.core._nth(params,(4));
var G__70704 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__70693,G__70694,G__70695,G__70696,G__70697,G__70698){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70699,G__70693);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70700,G__70694);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70701,G__70695);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70702,G__70696);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70703,G__70697);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70704,G__70698);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$6);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71439 = cljs.core._nth(recur_val,(0));
var G__71440 = cljs.core._nth(recur_val,(1));
var G__71441 = cljs.core._nth(recur_val,(2));
var G__71442 = cljs.core._nth(recur_val,(3));
var G__71443 = cljs.core._nth(recur_val,(4));
var G__71444 = cljs.core._nth(recur_val,(5));
G__70693 = G__71439;
G__70694 = G__71440;
G__70695 = G__71441;
G__70696 = G__71442;
G__70697 = G__71443;
G__70698 = G__71444;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70712 = cljs.core._nth(params,(0));
var G__70713 = cljs.core._nth(params,(1));
var G__70714 = cljs.core._nth(params,(2));
var G__70715 = cljs.core._nth(params,(3));
var G__70716 = cljs.core._nth(params,(4));
var G__70717 = cljs.core._nth(params,(5));
var G__70718 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__70705,G__70706,G__70707,G__70708,G__70709,G__70710,G__70711){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70712,G__70705);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70713,G__70706);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70714,G__70707);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70715,G__70708);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70716,G__70709);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70717,G__70710);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70718,G__70711);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71445 = cljs.core._nth(recur_val,(0));
var G__71446 = cljs.core._nth(recur_val,(1));
var G__71447 = cljs.core._nth(recur_val,(2));
var G__71448 = cljs.core._nth(recur_val,(3));
var G__71449 = cljs.core._nth(recur_val,(4));
var G__71450 = cljs.core._nth(recur_val,(5));
var G__71451 = cljs.core._nth(recur_val,(6));
G__70705 = G__71445;
G__70706 = G__71446;
G__70707 = G__71447;
G__70708 = G__71448;
G__70709 = G__71449;
G__70710 = G__71450;
G__70711 = G__71451;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70726 = cljs.core._nth(params,(0));
var G__70727 = cljs.core._nth(params,(1));
var G__70728 = cljs.core._nth(params,(2));
var G__70729 = cljs.core._nth(params,(3));
var G__70730 = cljs.core._nth(params,(4));
var G__70731 = cljs.core._nth(params,(5));
var G__70732 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__70719,G__70720,G__70721,G__70722,G__70723,G__70724,G__70725){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70726,G__70719);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70727,G__70720);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70728,G__70721);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70729,G__70722);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70730,G__70723);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70731,G__70724);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70732,G__70725);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$7);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71452 = cljs.core._nth(recur_val,(0));
var G__71453 = cljs.core._nth(recur_val,(1));
var G__71454 = cljs.core._nth(recur_val,(2));
var G__71455 = cljs.core._nth(recur_val,(3));
var G__71456 = cljs.core._nth(recur_val,(4));
var G__71457 = cljs.core._nth(recur_val,(5));
var G__71458 = cljs.core._nth(recur_val,(6));
G__70719 = G__71452;
G__70720 = G__71453;
G__70721 = G__71454;
G__70722 = G__71455;
G__70723 = G__71456;
G__70724 = G__71457;
G__70725 = G__71458;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70741 = cljs.core._nth(params,(0));
var G__70742 = cljs.core._nth(params,(1));
var G__70743 = cljs.core._nth(params,(2));
var G__70744 = cljs.core._nth(params,(3));
var G__70745 = cljs.core._nth(params,(4));
var G__70746 = cljs.core._nth(params,(5));
var G__70747 = cljs.core._nth(params,(6));
var G__70748 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__70733,G__70734,G__70735,G__70736,G__70737,G__70738,G__70739,G__70740){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70741,G__70733);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70742,G__70734);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70743,G__70735);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70744,G__70736);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70745,G__70737);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70746,G__70738);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70747,G__70739);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70748,G__70740);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71459 = cljs.core._nth(recur_val,(0));
var G__71460 = cljs.core._nth(recur_val,(1));
var G__71461 = cljs.core._nth(recur_val,(2));
var G__71462 = cljs.core._nth(recur_val,(3));
var G__71463 = cljs.core._nth(recur_val,(4));
var G__71464 = cljs.core._nth(recur_val,(5));
var G__71465 = cljs.core._nth(recur_val,(6));
var G__71466 = cljs.core._nth(recur_val,(7));
G__70733 = G__71459;
G__70734 = G__71460;
G__70735 = G__71461;
G__70736 = G__71462;
G__70737 = G__71463;
G__70738 = G__71464;
G__70739 = G__71465;
G__70740 = G__71466;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70757 = cljs.core._nth(params,(0));
var G__70758 = cljs.core._nth(params,(1));
var G__70759 = cljs.core._nth(params,(2));
var G__70760 = cljs.core._nth(params,(3));
var G__70761 = cljs.core._nth(params,(4));
var G__70762 = cljs.core._nth(params,(5));
var G__70763 = cljs.core._nth(params,(6));
var G__70764 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__70749,G__70750,G__70751,G__70752,G__70753,G__70754,G__70755,G__70756){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70757,G__70749);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70758,G__70750);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70759,G__70751);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70760,G__70752);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70761,G__70753);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70762,G__70754);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70763,G__70755);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70764,G__70756);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$8);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71467 = cljs.core._nth(recur_val,(0));
var G__71468 = cljs.core._nth(recur_val,(1));
var G__71469 = cljs.core._nth(recur_val,(2));
var G__71470 = cljs.core._nth(recur_val,(3));
var G__71471 = cljs.core._nth(recur_val,(4));
var G__71472 = cljs.core._nth(recur_val,(5));
var G__71473 = cljs.core._nth(recur_val,(6));
var G__71474 = cljs.core._nth(recur_val,(7));
G__70749 = G__71467;
G__70750 = G__71468;
G__70751 = G__71469;
G__70752 = G__71470;
G__70753 = G__71471;
G__70754 = G__71472;
G__70755 = G__71473;
G__70756 = G__71474;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70774 = cljs.core._nth(params,(0));
var G__70775 = cljs.core._nth(params,(1));
var G__70776 = cljs.core._nth(params,(2));
var G__70777 = cljs.core._nth(params,(3));
var G__70778 = cljs.core._nth(params,(4));
var G__70779 = cljs.core._nth(params,(5));
var G__70780 = cljs.core._nth(params,(6));
var G__70781 = cljs.core._nth(params,(7));
var G__70782 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__70765,G__70766,G__70767,G__70768,G__70769,G__70770,G__70771,G__70772,G__70773){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70774,G__70765);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70775,G__70766);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70776,G__70767);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70777,G__70768);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70778,G__70769);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70779,G__70770);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70780,G__70771);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70781,G__70772);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70782,G__70773);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71475 = cljs.core._nth(recur_val,(0));
var G__71476 = cljs.core._nth(recur_val,(1));
var G__71477 = cljs.core._nth(recur_val,(2));
var G__71478 = cljs.core._nth(recur_val,(3));
var G__71479 = cljs.core._nth(recur_val,(4));
var G__71480 = cljs.core._nth(recur_val,(5));
var G__71481 = cljs.core._nth(recur_val,(6));
var G__71482 = cljs.core._nth(recur_val,(7));
var G__71483 = cljs.core._nth(recur_val,(8));
G__70765 = G__71475;
G__70766 = G__71476;
G__70767 = G__71477;
G__70768 = G__71478;
G__70769 = G__71479;
G__70770 = G__71480;
G__70771 = G__71481;
G__70772 = G__71482;
G__70773 = G__71483;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70792 = cljs.core._nth(params,(0));
var G__70793 = cljs.core._nth(params,(1));
var G__70794 = cljs.core._nth(params,(2));
var G__70795 = cljs.core._nth(params,(3));
var G__70796 = cljs.core._nth(params,(4));
var G__70797 = cljs.core._nth(params,(5));
var G__70798 = cljs.core._nth(params,(6));
var G__70799 = cljs.core._nth(params,(7));
var G__70800 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__70783,G__70784,G__70785,G__70786,G__70787,G__70788,G__70789,G__70790,G__70791){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70792,G__70783);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70793,G__70784);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70794,G__70785);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70795,G__70786);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70796,G__70787);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70797,G__70788);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70798,G__70789);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70799,G__70790);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70800,G__70791);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$9);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71484 = cljs.core._nth(recur_val,(0));
var G__71485 = cljs.core._nth(recur_val,(1));
var G__71486 = cljs.core._nth(recur_val,(2));
var G__71487 = cljs.core._nth(recur_val,(3));
var G__71488 = cljs.core._nth(recur_val,(4));
var G__71489 = cljs.core._nth(recur_val,(5));
var G__71490 = cljs.core._nth(recur_val,(6));
var G__71491 = cljs.core._nth(recur_val,(7));
var G__71492 = cljs.core._nth(recur_val,(8));
G__70783 = G__71484;
G__70784 = G__71485;
G__70785 = G__71486;
G__70786 = G__71487;
G__70787 = G__71488;
G__70788 = G__71489;
G__70789 = G__71490;
G__70790 = G__71491;
G__70791 = G__71492;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70811 = cljs.core._nth(params,(0));
var G__70812 = cljs.core._nth(params,(1));
var G__70813 = cljs.core._nth(params,(2));
var G__70814 = cljs.core._nth(params,(3));
var G__70815 = cljs.core._nth(params,(4));
var G__70816 = cljs.core._nth(params,(5));
var G__70817 = cljs.core._nth(params,(6));
var G__70818 = cljs.core._nth(params,(7));
var G__70819 = cljs.core._nth(params,(8));
var G__70820 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__70801,G__70802,G__70803,G__70804,G__70805,G__70806,G__70807,G__70808,G__70809,G__70810){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70811,G__70801);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70812,G__70802);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70813,G__70803);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70814,G__70804);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70815,G__70805);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70816,G__70806);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70817,G__70807);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70818,G__70808);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70819,G__70809);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70820,G__70810);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71493 = cljs.core._nth(recur_val,(0));
var G__71494 = cljs.core._nth(recur_val,(1));
var G__71495 = cljs.core._nth(recur_val,(2));
var G__71496 = cljs.core._nth(recur_val,(3));
var G__71497 = cljs.core._nth(recur_val,(4));
var G__71498 = cljs.core._nth(recur_val,(5));
var G__71499 = cljs.core._nth(recur_val,(6));
var G__71500 = cljs.core._nth(recur_val,(7));
var G__71501 = cljs.core._nth(recur_val,(8));
var G__71502 = cljs.core._nth(recur_val,(9));
G__70801 = G__71493;
G__70802 = G__71494;
G__70803 = G__71495;
G__70804 = G__71496;
G__70805 = G__71497;
G__70806 = G__71498;
G__70807 = G__71499;
G__70808 = G__71500;
G__70809 = G__71501;
G__70810 = G__71502;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70831 = cljs.core._nth(params,(0));
var G__70832 = cljs.core._nth(params,(1));
var G__70833 = cljs.core._nth(params,(2));
var G__70834 = cljs.core._nth(params,(3));
var G__70835 = cljs.core._nth(params,(4));
var G__70836 = cljs.core._nth(params,(5));
var G__70837 = cljs.core._nth(params,(6));
var G__70838 = cljs.core._nth(params,(7));
var G__70839 = cljs.core._nth(params,(8));
var G__70840 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__70821,G__70822,G__70823,G__70824,G__70825,G__70826,G__70827,G__70828,G__70829,G__70830){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70831,G__70821);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70832,G__70822);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70833,G__70823);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70834,G__70824);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70835,G__70825);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70836,G__70826);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70837,G__70827);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70838,G__70828);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70839,G__70829);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70840,G__70830);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$10);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71503 = cljs.core._nth(recur_val,(0));
var G__71504 = cljs.core._nth(recur_val,(1));
var G__71505 = cljs.core._nth(recur_val,(2));
var G__71506 = cljs.core._nth(recur_val,(3));
var G__71507 = cljs.core._nth(recur_val,(4));
var G__71508 = cljs.core._nth(recur_val,(5));
var G__71509 = cljs.core._nth(recur_val,(6));
var G__71510 = cljs.core._nth(recur_val,(7));
var G__71511 = cljs.core._nth(recur_val,(8));
var G__71512 = cljs.core._nth(recur_val,(9));
G__70821 = G__71503;
G__70822 = G__71504;
G__70823 = G__71505;
G__70824 = G__71506;
G__70825 = G__71507;
G__70826 = G__71508;
G__70827 = G__71509;
G__70828 = G__71510;
G__70829 = G__71511;
G__70830 = G__71512;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70852 = cljs.core._nth(params,(0));
var G__70853 = cljs.core._nth(params,(1));
var G__70854 = cljs.core._nth(params,(2));
var G__70855 = cljs.core._nth(params,(3));
var G__70856 = cljs.core._nth(params,(4));
var G__70857 = cljs.core._nth(params,(5));
var G__70858 = cljs.core._nth(params,(6));
var G__70859 = cljs.core._nth(params,(7));
var G__70860 = cljs.core._nth(params,(8));
var G__70861 = cljs.core._nth(params,(9));
var G__70862 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__70841,G__70842,G__70843,G__70844,G__70845,G__70846,G__70847,G__70848,G__70849,G__70850,G__70851){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70852,G__70841);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70853,G__70842);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70854,G__70843);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70855,G__70844);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70856,G__70845);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70857,G__70846);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70858,G__70847);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70859,G__70848);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70860,G__70849);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70861,G__70850);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__70862,G__70851);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71513 = cljs.core._nth(recur_val,(0));
var G__71514 = cljs.core._nth(recur_val,(1));
var G__71515 = cljs.core._nth(recur_val,(2));
var G__71516 = cljs.core._nth(recur_val,(3));
var G__71517 = cljs.core._nth(recur_val,(4));
var G__71518 = cljs.core._nth(recur_val,(5));
var G__71519 = cljs.core._nth(recur_val,(6));
var G__71520 = cljs.core._nth(recur_val,(7));
var G__71521 = cljs.core._nth(recur_val,(8));
var G__71522 = cljs.core._nth(recur_val,(9));
var G__71523 = cljs.core._nth(recur_val,(10));
G__70841 = G__71513;
G__70842 = G__71514;
G__70843 = G__71515;
G__70844 = G__71516;
G__70845 = G__71517;
G__70846 = G__71518;
G__70847 = G__71519;
G__70848 = G__71520;
G__70849 = G__71521;
G__70850 = G__71522;
G__70851 = G__71523;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70874 = cljs.core._nth(params,(0));
var G__70875 = cljs.core._nth(params,(1));
var G__70876 = cljs.core._nth(params,(2));
var G__70877 = cljs.core._nth(params,(3));
var G__70878 = cljs.core._nth(params,(4));
var G__70879 = cljs.core._nth(params,(5));
var G__70880 = cljs.core._nth(params,(6));
var G__70881 = cljs.core._nth(params,(7));
var G__70882 = cljs.core._nth(params,(8));
var G__70883 = cljs.core._nth(params,(9));
var G__70884 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__70863,G__70864,G__70865,G__70866,G__70867,G__70868,G__70869,G__70870,G__70871,G__70872,G__70873){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70874,G__70863);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70875,G__70864);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70876,G__70865);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70877,G__70866);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70878,G__70867);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70879,G__70868);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70880,G__70869);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70881,G__70870);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70882,G__70871);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70883,G__70872);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__70884,G__70873);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$11);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71524 = cljs.core._nth(recur_val,(0));
var G__71525 = cljs.core._nth(recur_val,(1));
var G__71526 = cljs.core._nth(recur_val,(2));
var G__71527 = cljs.core._nth(recur_val,(3));
var G__71528 = cljs.core._nth(recur_val,(4));
var G__71529 = cljs.core._nth(recur_val,(5));
var G__71530 = cljs.core._nth(recur_val,(6));
var G__71531 = cljs.core._nth(recur_val,(7));
var G__71532 = cljs.core._nth(recur_val,(8));
var G__71533 = cljs.core._nth(recur_val,(9));
var G__71534 = cljs.core._nth(recur_val,(10));
G__70863 = G__71524;
G__70864 = G__71525;
G__70865 = G__71526;
G__70866 = G__71527;
G__70867 = G__71528;
G__70868 = G__71529;
G__70869 = G__71530;
G__70870 = G__71531;
G__70871 = G__71532;
G__70872 = G__71533;
G__70873 = G__71534;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70897 = cljs.core._nth(params,(0));
var G__70898 = cljs.core._nth(params,(1));
var G__70899 = cljs.core._nth(params,(2));
var G__70900 = cljs.core._nth(params,(3));
var G__70901 = cljs.core._nth(params,(4));
var G__70902 = cljs.core._nth(params,(5));
var G__70903 = cljs.core._nth(params,(6));
var G__70904 = cljs.core._nth(params,(7));
var G__70905 = cljs.core._nth(params,(8));
var G__70906 = cljs.core._nth(params,(9));
var G__70907 = cljs.core._nth(params,(10));
var G__70908 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__70885,G__70886,G__70887,G__70888,G__70889,G__70890,G__70891,G__70892,G__70893,G__70894,G__70895,G__70896){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70897,G__70885);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70898,G__70886);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70899,G__70887);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70900,G__70888);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70901,G__70889);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70902,G__70890);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70903,G__70891);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70904,G__70892);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70905,G__70893);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70906,G__70894);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__70907,G__70895);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__70908,G__70896);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71535 = cljs.core._nth(recur_val,(0));
var G__71536 = cljs.core._nth(recur_val,(1));
var G__71537 = cljs.core._nth(recur_val,(2));
var G__71538 = cljs.core._nth(recur_val,(3));
var G__71539 = cljs.core._nth(recur_val,(4));
var G__71540 = cljs.core._nth(recur_val,(5));
var G__71541 = cljs.core._nth(recur_val,(6));
var G__71542 = cljs.core._nth(recur_val,(7));
var G__71543 = cljs.core._nth(recur_val,(8));
var G__71544 = cljs.core._nth(recur_val,(9));
var G__71545 = cljs.core._nth(recur_val,(10));
var G__71546 = cljs.core._nth(recur_val,(11));
G__70885 = G__71535;
G__70886 = G__71536;
G__70887 = G__71537;
G__70888 = G__71538;
G__70889 = G__71539;
G__70890 = G__71540;
G__70891 = G__71541;
G__70892 = G__71542;
G__70893 = G__71543;
G__70894 = G__71544;
G__70895 = G__71545;
G__70896 = G__71546;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70921 = cljs.core._nth(params,(0));
var G__70922 = cljs.core._nth(params,(1));
var G__70923 = cljs.core._nth(params,(2));
var G__70924 = cljs.core._nth(params,(3));
var G__70925 = cljs.core._nth(params,(4));
var G__70926 = cljs.core._nth(params,(5));
var G__70927 = cljs.core._nth(params,(6));
var G__70928 = cljs.core._nth(params,(7));
var G__70929 = cljs.core._nth(params,(8));
var G__70930 = cljs.core._nth(params,(9));
var G__70931 = cljs.core._nth(params,(10));
var G__70932 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__70909,G__70910,G__70911,G__70912,G__70913,G__70914,G__70915,G__70916,G__70917,G__70918,G__70919,G__70920){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70921,G__70909);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70922,G__70910);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70923,G__70911);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70924,G__70912);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70925,G__70913);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70926,G__70914);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70927,G__70915);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70928,G__70916);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70929,G__70917);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70930,G__70918);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__70931,G__70919);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__70932,G__70920);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$12);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71547 = cljs.core._nth(recur_val,(0));
var G__71548 = cljs.core._nth(recur_val,(1));
var G__71549 = cljs.core._nth(recur_val,(2));
var G__71550 = cljs.core._nth(recur_val,(3));
var G__71551 = cljs.core._nth(recur_val,(4));
var G__71552 = cljs.core._nth(recur_val,(5));
var G__71553 = cljs.core._nth(recur_val,(6));
var G__71554 = cljs.core._nth(recur_val,(7));
var G__71555 = cljs.core._nth(recur_val,(8));
var G__71556 = cljs.core._nth(recur_val,(9));
var G__71557 = cljs.core._nth(recur_val,(10));
var G__71558 = cljs.core._nth(recur_val,(11));
G__70909 = G__71547;
G__70910 = G__71548;
G__70911 = G__71549;
G__70912 = G__71550;
G__70913 = G__71551;
G__70914 = G__71552;
G__70915 = G__71553;
G__70916 = G__71554;
G__70917 = G__71555;
G__70918 = G__71556;
G__70919 = G__71557;
G__70920 = G__71558;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__70946 = cljs.core._nth(params,(0));
var G__70947 = cljs.core._nth(params,(1));
var G__70948 = cljs.core._nth(params,(2));
var G__70949 = cljs.core._nth(params,(3));
var G__70950 = cljs.core._nth(params,(4));
var G__70951 = cljs.core._nth(params,(5));
var G__70952 = cljs.core._nth(params,(6));
var G__70953 = cljs.core._nth(params,(7));
var G__70954 = cljs.core._nth(params,(8));
var G__70955 = cljs.core._nth(params,(9));
var G__70956 = cljs.core._nth(params,(10));
var G__70957 = cljs.core._nth(params,(11));
var G__70958 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__70933,G__70934,G__70935,G__70936,G__70937,G__70938,G__70939,G__70940,G__70941,G__70942,G__70943,G__70944,G__70945){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70946,G__70933);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70947,G__70934);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70948,G__70935);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70949,G__70936);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70950,G__70937);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70951,G__70938);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70952,G__70939);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70953,G__70940);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70954,G__70941);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70955,G__70942);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__70956,G__70943);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__70957,G__70944);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__70958,G__70945);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71559 = cljs.core._nth(recur_val,(0));
var G__71560 = cljs.core._nth(recur_val,(1));
var G__71561 = cljs.core._nth(recur_val,(2));
var G__71562 = cljs.core._nth(recur_val,(3));
var G__71563 = cljs.core._nth(recur_val,(4));
var G__71564 = cljs.core._nth(recur_val,(5));
var G__71565 = cljs.core._nth(recur_val,(6));
var G__71566 = cljs.core._nth(recur_val,(7));
var G__71567 = cljs.core._nth(recur_val,(8));
var G__71568 = cljs.core._nth(recur_val,(9));
var G__71569 = cljs.core._nth(recur_val,(10));
var G__71570 = cljs.core._nth(recur_val,(11));
var G__71571 = cljs.core._nth(recur_val,(12));
G__70933 = G__71559;
G__70934 = G__71560;
G__70935 = G__71561;
G__70936 = G__71562;
G__70937 = G__71563;
G__70938 = G__71564;
G__70939 = G__71565;
G__70940 = G__71566;
G__70941 = G__71567;
G__70942 = G__71568;
G__70943 = G__71569;
G__70944 = G__71570;
G__70945 = G__71571;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__70972 = cljs.core._nth(params,(0));
var G__70973 = cljs.core._nth(params,(1));
var G__70974 = cljs.core._nth(params,(2));
var G__70975 = cljs.core._nth(params,(3));
var G__70976 = cljs.core._nth(params,(4));
var G__70977 = cljs.core._nth(params,(5));
var G__70978 = cljs.core._nth(params,(6));
var G__70979 = cljs.core._nth(params,(7));
var G__70980 = cljs.core._nth(params,(8));
var G__70981 = cljs.core._nth(params,(9));
var G__70982 = cljs.core._nth(params,(10));
var G__70983 = cljs.core._nth(params,(11));
var G__70984 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__70959,G__70960,G__70961,G__70962,G__70963,G__70964,G__70965,G__70966,G__70967,G__70968,G__70969,G__70970,G__70971){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__70972,G__70959);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__70973,G__70960);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__70974,G__70961);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__70975,G__70962);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__70976,G__70963);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__70977,G__70964);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__70978,G__70965);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__70979,G__70966);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__70980,G__70967);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__70981,G__70968);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__70982,G__70969);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__70983,G__70970);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__70984,G__70971);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$13);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71572 = cljs.core._nth(recur_val,(0));
var G__71573 = cljs.core._nth(recur_val,(1));
var G__71574 = cljs.core._nth(recur_val,(2));
var G__71575 = cljs.core._nth(recur_val,(3));
var G__71576 = cljs.core._nth(recur_val,(4));
var G__71577 = cljs.core._nth(recur_val,(5));
var G__71578 = cljs.core._nth(recur_val,(6));
var G__71579 = cljs.core._nth(recur_val,(7));
var G__71580 = cljs.core._nth(recur_val,(8));
var G__71581 = cljs.core._nth(recur_val,(9));
var G__71582 = cljs.core._nth(recur_val,(10));
var G__71583 = cljs.core._nth(recur_val,(11));
var G__71584 = cljs.core._nth(recur_val,(12));
G__70959 = G__71572;
G__70960 = G__71573;
G__70961 = G__71574;
G__70962 = G__71575;
G__70963 = G__71576;
G__70964 = G__71577;
G__70965 = G__71578;
G__70966 = G__71579;
G__70967 = G__71580;
G__70968 = G__71581;
G__70969 = G__71582;
G__70970 = G__71583;
G__70971 = G__71584;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__71000 = cljs.core._nth(params,(0));
var G__71001 = cljs.core._nth(params,(1));
var G__71002 = cljs.core._nth(params,(2));
var G__71003 = cljs.core._nth(params,(3));
var G__71004 = cljs.core._nth(params,(4));
var G__71005 = cljs.core._nth(params,(5));
var G__71006 = cljs.core._nth(params,(6));
var G__71007 = cljs.core._nth(params,(7));
var G__71008 = cljs.core._nth(params,(8));
var G__71009 = cljs.core._nth(params,(9));
var G__71010 = cljs.core._nth(params,(10));
var G__71011 = cljs.core._nth(params,(11));
var G__71012 = cljs.core._nth(params,(12));
var G__71013 = cljs.core._nth(params,(13));
var G__71014 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__70985,G__70986,G__70987,G__70988,G__70989,G__70990,G__70991,G__70992,G__70993,G__70994,G__70995,G__70996,G__70997,G__70998,G__70999){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71000,G__70985);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71001,G__70986);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71002,G__70987);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71003,G__70988);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71004,G__70989);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71005,G__70990);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71006,G__70991);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71007,G__70992);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71008,G__70993);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71009,G__70994);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71010,G__70995);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71011,G__70996);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71012,G__70997);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71013,G__70998);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71014,G__70999);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71585 = cljs.core._nth(recur_val,(0));
var G__71586 = cljs.core._nth(recur_val,(1));
var G__71587 = cljs.core._nth(recur_val,(2));
var G__71588 = cljs.core._nth(recur_val,(3));
var G__71589 = cljs.core._nth(recur_val,(4));
var G__71590 = cljs.core._nth(recur_val,(5));
var G__71591 = cljs.core._nth(recur_val,(6));
var G__71592 = cljs.core._nth(recur_val,(7));
var G__71593 = cljs.core._nth(recur_val,(8));
var G__71594 = cljs.core._nth(recur_val,(9));
var G__71595 = cljs.core._nth(recur_val,(10));
var G__71596 = cljs.core._nth(recur_val,(11));
var G__71597 = cljs.core._nth(recur_val,(12));
var G__71598 = cljs.core._nth(recur_val,(13));
var G__71599 = cljs.core._nth(recur_val,(14));
G__70985 = G__71585;
G__70986 = G__71586;
G__70987 = G__71587;
G__70988 = G__71588;
G__70989 = G__71589;
G__70990 = G__71590;
G__70991 = G__71591;
G__70992 = G__71592;
G__70993 = G__71593;
G__70994 = G__71594;
G__70995 = G__71595;
G__70996 = G__71596;
G__70997 = G__71597;
G__70998 = G__71598;
G__70999 = G__71599;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__71030 = cljs.core._nth(params,(0));
var G__71031 = cljs.core._nth(params,(1));
var G__71032 = cljs.core._nth(params,(2));
var G__71033 = cljs.core._nth(params,(3));
var G__71034 = cljs.core._nth(params,(4));
var G__71035 = cljs.core._nth(params,(5));
var G__71036 = cljs.core._nth(params,(6));
var G__71037 = cljs.core._nth(params,(7));
var G__71038 = cljs.core._nth(params,(8));
var G__71039 = cljs.core._nth(params,(9));
var G__71040 = cljs.core._nth(params,(10));
var G__71041 = cljs.core._nth(params,(11));
var G__71042 = cljs.core._nth(params,(12));
var G__71043 = cljs.core._nth(params,(13));
var G__71044 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__71015,G__71016,G__71017,G__71018,G__71019,G__71020,G__71021,G__71022,G__71023,G__71024,G__71025,G__71026,G__71027,G__71028,G__71029){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71030,G__71015);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71031,G__71016);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71032,G__71017);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71033,G__71018);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71034,G__71019);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71035,G__71020);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71036,G__71021);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71037,G__71022);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71038,G__71023);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71039,G__71024);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71040,G__71025);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71041,G__71026);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71042,G__71027);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71043,G__71028);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71044,G__71029);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71600 = cljs.core._nth(recur_val,(0));
var G__71601 = cljs.core._nth(recur_val,(1));
var G__71602 = cljs.core._nth(recur_val,(2));
var G__71603 = cljs.core._nth(recur_val,(3));
var G__71604 = cljs.core._nth(recur_val,(4));
var G__71605 = cljs.core._nth(recur_val,(5));
var G__71606 = cljs.core._nth(recur_val,(6));
var G__71607 = cljs.core._nth(recur_val,(7));
var G__71608 = cljs.core._nth(recur_val,(8));
var G__71609 = cljs.core._nth(recur_val,(9));
var G__71610 = cljs.core._nth(recur_val,(10));
var G__71611 = cljs.core._nth(recur_val,(11));
var G__71612 = cljs.core._nth(recur_val,(12));
var G__71613 = cljs.core._nth(recur_val,(13));
var G__71614 = cljs.core._nth(recur_val,(14));
G__71015 = G__71600;
G__71016 = G__71601;
G__71017 = G__71602;
G__71018 = G__71603;
G__71019 = G__71604;
G__71020 = G__71605;
G__71021 = G__71606;
G__71022 = G__71607;
G__71023 = G__71608;
G__71024 = G__71609;
G__71025 = G__71610;
G__71026 = G__71611;
G__71027 = G__71612;
G__71028 = G__71613;
G__71029 = G__71614;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__71060 = cljs.core._nth(params,(0));
var G__71061 = cljs.core._nth(params,(1));
var G__71062 = cljs.core._nth(params,(2));
var G__71063 = cljs.core._nth(params,(3));
var G__71064 = cljs.core._nth(params,(4));
var G__71065 = cljs.core._nth(params,(5));
var G__71066 = cljs.core._nth(params,(6));
var G__71067 = cljs.core._nth(params,(7));
var G__71068 = cljs.core._nth(params,(8));
var G__71069 = cljs.core._nth(params,(9));
var G__71070 = cljs.core._nth(params,(10));
var G__71071 = cljs.core._nth(params,(11));
var G__71072 = cljs.core._nth(params,(12));
var G__71073 = cljs.core._nth(params,(13));
var G__71074 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__71045,G__71046,G__71047,G__71048,G__71049,G__71050,G__71051,G__71052,G__71053,G__71054,G__71055,G__71056,G__71057,G__71058,G__71059){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71060,G__71045);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71061,G__71046);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71062,G__71047);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71063,G__71048);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71064,G__71049);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71065,G__71050);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71066,G__71051);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71067,G__71052);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71068,G__71053);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71069,G__71054);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71070,G__71055);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71071,G__71056);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71072,G__71057);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71073,G__71058);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71074,G__71059);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71615 = cljs.core._nth(recur_val,(0));
var G__71616 = cljs.core._nth(recur_val,(1));
var G__71617 = cljs.core._nth(recur_val,(2));
var G__71618 = cljs.core._nth(recur_val,(3));
var G__71619 = cljs.core._nth(recur_val,(4));
var G__71620 = cljs.core._nth(recur_val,(5));
var G__71621 = cljs.core._nth(recur_val,(6));
var G__71622 = cljs.core._nth(recur_val,(7));
var G__71623 = cljs.core._nth(recur_val,(8));
var G__71624 = cljs.core._nth(recur_val,(9));
var G__71625 = cljs.core._nth(recur_val,(10));
var G__71626 = cljs.core._nth(recur_val,(11));
var G__71627 = cljs.core._nth(recur_val,(12));
var G__71628 = cljs.core._nth(recur_val,(13));
var G__71629 = cljs.core._nth(recur_val,(14));
G__71045 = G__71615;
G__71046 = G__71616;
G__71047 = G__71617;
G__71048 = G__71618;
G__71049 = G__71619;
G__71050 = G__71620;
G__71051 = G__71621;
G__71052 = G__71622;
G__71053 = G__71623;
G__71054 = G__71624;
G__71055 = G__71625;
G__71056 = G__71626;
G__71057 = G__71627;
G__71058 = G__71628;
G__71059 = G__71629;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__71090 = cljs.core._nth(params,(0));
var G__71091 = cljs.core._nth(params,(1));
var G__71092 = cljs.core._nth(params,(2));
var G__71093 = cljs.core._nth(params,(3));
var G__71094 = cljs.core._nth(params,(4));
var G__71095 = cljs.core._nth(params,(5));
var G__71096 = cljs.core._nth(params,(6));
var G__71097 = cljs.core._nth(params,(7));
var G__71098 = cljs.core._nth(params,(8));
var G__71099 = cljs.core._nth(params,(9));
var G__71100 = cljs.core._nth(params,(10));
var G__71101 = cljs.core._nth(params,(11));
var G__71102 = cljs.core._nth(params,(12));
var G__71103 = cljs.core._nth(params,(13));
var G__71104 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__71075,G__71076,G__71077,G__71078,G__71079,G__71080,G__71081,G__71082,G__71083,G__71084,G__71085,G__71086,G__71087,G__71088,G__71089){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71090,G__71075);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71091,G__71076);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71092,G__71077);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71093,G__71078);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71094,G__71079);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71095,G__71080);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71096,G__71081);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71097,G__71082);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71098,G__71083);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71099,G__71084);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71100,G__71085);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71101,G__71086);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71102,G__71087);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71103,G__71088);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71104,G__71089);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$15);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71630 = cljs.core._nth(recur_val,(0));
var G__71631 = cljs.core._nth(recur_val,(1));
var G__71632 = cljs.core._nth(recur_val,(2));
var G__71633 = cljs.core._nth(recur_val,(3));
var G__71634 = cljs.core._nth(recur_val,(4));
var G__71635 = cljs.core._nth(recur_val,(5));
var G__71636 = cljs.core._nth(recur_val,(6));
var G__71637 = cljs.core._nth(recur_val,(7));
var G__71638 = cljs.core._nth(recur_val,(8));
var G__71639 = cljs.core._nth(recur_val,(9));
var G__71640 = cljs.core._nth(recur_val,(10));
var G__71641 = cljs.core._nth(recur_val,(11));
var G__71642 = cljs.core._nth(recur_val,(12));
var G__71643 = cljs.core._nth(recur_val,(13));
var G__71644 = cljs.core._nth(recur_val,(14));
G__71075 = G__71630;
G__71076 = G__71631;
G__71077 = G__71632;
G__71078 = G__71633;
G__71079 = G__71634;
G__71080 = G__71635;
G__71081 = G__71636;
G__71082 = G__71637;
G__71083 = G__71638;
G__71084 = G__71639;
G__71085 = G__71640;
G__71086 = G__71641;
G__71087 = G__71642;
G__71088 = G__71643;
G__71089 = G__71644;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__71121 = cljs.core._nth(params,(0));
var G__71122 = cljs.core._nth(params,(1));
var G__71123 = cljs.core._nth(params,(2));
var G__71124 = cljs.core._nth(params,(3));
var G__71125 = cljs.core._nth(params,(4));
var G__71126 = cljs.core._nth(params,(5));
var G__71127 = cljs.core._nth(params,(6));
var G__71128 = cljs.core._nth(params,(7));
var G__71129 = cljs.core._nth(params,(8));
var G__71130 = cljs.core._nth(params,(9));
var G__71131 = cljs.core._nth(params,(10));
var G__71132 = cljs.core._nth(params,(11));
var G__71133 = cljs.core._nth(params,(12));
var G__71134 = cljs.core._nth(params,(13));
var G__71135 = cljs.core._nth(params,(14));
var G__71136 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__71105,G__71106,G__71107,G__71108,G__71109,G__71110,G__71111,G__71112,G__71113,G__71114,G__71115,G__71116,G__71117,G__71118,G__71119,G__71120){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71121,G__71105);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71122,G__71106);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71123,G__71107);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71124,G__71108);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71125,G__71109);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71126,G__71110);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71127,G__71111);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71128,G__71112);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71129,G__71113);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71130,G__71114);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71131,G__71115);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71132,G__71116);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71133,G__71117);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71134,G__71118);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71135,G__71119);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71136,G__71120);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71645 = cljs.core._nth(recur_val,(0));
var G__71646 = cljs.core._nth(recur_val,(1));
var G__71647 = cljs.core._nth(recur_val,(2));
var G__71648 = cljs.core._nth(recur_val,(3));
var G__71649 = cljs.core._nth(recur_val,(4));
var G__71650 = cljs.core._nth(recur_val,(5));
var G__71651 = cljs.core._nth(recur_val,(6));
var G__71652 = cljs.core._nth(recur_val,(7));
var G__71653 = cljs.core._nth(recur_val,(8));
var G__71654 = cljs.core._nth(recur_val,(9));
var G__71655 = cljs.core._nth(recur_val,(10));
var G__71656 = cljs.core._nth(recur_val,(11));
var G__71657 = cljs.core._nth(recur_val,(12));
var G__71658 = cljs.core._nth(recur_val,(13));
var G__71659 = cljs.core._nth(recur_val,(14));
var G__71660 = cljs.core._nth(recur_val,(15));
G__71105 = G__71645;
G__71106 = G__71646;
G__71107 = G__71647;
G__71108 = G__71648;
G__71109 = G__71649;
G__71110 = G__71650;
G__71111 = G__71651;
G__71112 = G__71652;
G__71113 = G__71653;
G__71114 = G__71654;
G__71115 = G__71655;
G__71116 = G__71656;
G__71117 = G__71657;
G__71118 = G__71658;
G__71119 = G__71659;
G__71120 = G__71660;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__71153 = cljs.core._nth(params,(0));
var G__71154 = cljs.core._nth(params,(1));
var G__71155 = cljs.core._nth(params,(2));
var G__71156 = cljs.core._nth(params,(3));
var G__71157 = cljs.core._nth(params,(4));
var G__71158 = cljs.core._nth(params,(5));
var G__71159 = cljs.core._nth(params,(6));
var G__71160 = cljs.core._nth(params,(7));
var G__71161 = cljs.core._nth(params,(8));
var G__71162 = cljs.core._nth(params,(9));
var G__71163 = cljs.core._nth(params,(10));
var G__71164 = cljs.core._nth(params,(11));
var G__71165 = cljs.core._nth(params,(12));
var G__71166 = cljs.core._nth(params,(13));
var G__71167 = cljs.core._nth(params,(14));
var G__71168 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__71137,G__71138,G__71139,G__71140,G__71141,G__71142,G__71143,G__71144,G__71145,G__71146,G__71147,G__71148,G__71149,G__71150,G__71151,G__71152){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71153,G__71137);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71154,G__71138);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71155,G__71139);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71156,G__71140);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71157,G__71141);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71158,G__71142);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71159,G__71143);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71160,G__71144);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71161,G__71145);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71162,G__71146);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71163,G__71147);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71164,G__71148);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71165,G__71149);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71166,G__71150);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71167,G__71151);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71168,G__71152);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$16);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71661 = cljs.core._nth(recur_val,(0));
var G__71662 = cljs.core._nth(recur_val,(1));
var G__71663 = cljs.core._nth(recur_val,(2));
var G__71664 = cljs.core._nth(recur_val,(3));
var G__71665 = cljs.core._nth(recur_val,(4));
var G__71666 = cljs.core._nth(recur_val,(5));
var G__71667 = cljs.core._nth(recur_val,(6));
var G__71668 = cljs.core._nth(recur_val,(7));
var G__71669 = cljs.core._nth(recur_val,(8));
var G__71670 = cljs.core._nth(recur_val,(9));
var G__71671 = cljs.core._nth(recur_val,(10));
var G__71672 = cljs.core._nth(recur_val,(11));
var G__71673 = cljs.core._nth(recur_val,(12));
var G__71674 = cljs.core._nth(recur_val,(13));
var G__71675 = cljs.core._nth(recur_val,(14));
var G__71676 = cljs.core._nth(recur_val,(15));
G__71137 = G__71661;
G__71138 = G__71662;
G__71139 = G__71663;
G__71140 = G__71664;
G__71141 = G__71665;
G__71142 = G__71666;
G__71143 = G__71667;
G__71144 = G__71668;
G__71145 = G__71669;
G__71146 = G__71670;
G__71147 = G__71671;
G__71148 = G__71672;
G__71149 = G__71673;
G__71150 = G__71674;
G__71151 = G__71675;
G__71152 = G__71676;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__71186 = cljs.core._nth(params,(0));
var G__71187 = cljs.core._nth(params,(1));
var G__71188 = cljs.core._nth(params,(2));
var G__71189 = cljs.core._nth(params,(3));
var G__71190 = cljs.core._nth(params,(4));
var G__71191 = cljs.core._nth(params,(5));
var G__71192 = cljs.core._nth(params,(6));
var G__71193 = cljs.core._nth(params,(7));
var G__71194 = cljs.core._nth(params,(8));
var G__71195 = cljs.core._nth(params,(9));
var G__71196 = cljs.core._nth(params,(10));
var G__71197 = cljs.core._nth(params,(11));
var G__71198 = cljs.core._nth(params,(12));
var G__71199 = cljs.core._nth(params,(13));
var G__71200 = cljs.core._nth(params,(14));
var G__71201 = cljs.core._nth(params,(15));
var G__71202 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__71169,G__71170,G__71171,G__71172,G__71173,G__71174,G__71175,G__71176,G__71177,G__71178,G__71179,G__71180,G__71181,G__71182,G__71183,G__71184,G__71185){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71186,G__71169);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71187,G__71170);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71188,G__71171);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71189,G__71172);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71190,G__71173);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71191,G__71174);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71192,G__71175);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71193,G__71176);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71194,G__71177);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71195,G__71178);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71196,G__71179);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71197,G__71180);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71198,G__71181);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71199,G__71182);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71200,G__71183);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71201,G__71184);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__71202,G__71185);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71677 = cljs.core._nth(recur_val,(0));
var G__71678 = cljs.core._nth(recur_val,(1));
var G__71679 = cljs.core._nth(recur_val,(2));
var G__71680 = cljs.core._nth(recur_val,(3));
var G__71681 = cljs.core._nth(recur_val,(4));
var G__71682 = cljs.core._nth(recur_val,(5));
var G__71683 = cljs.core._nth(recur_val,(6));
var G__71684 = cljs.core._nth(recur_val,(7));
var G__71685 = cljs.core._nth(recur_val,(8));
var G__71686 = cljs.core._nth(recur_val,(9));
var G__71687 = cljs.core._nth(recur_val,(10));
var G__71688 = cljs.core._nth(recur_val,(11));
var G__71689 = cljs.core._nth(recur_val,(12));
var G__71690 = cljs.core._nth(recur_val,(13));
var G__71691 = cljs.core._nth(recur_val,(14));
var G__71692 = cljs.core._nth(recur_val,(15));
var G__71693 = cljs.core._nth(recur_val,(16));
G__71169 = G__71677;
G__71170 = G__71678;
G__71171 = G__71679;
G__71172 = G__71680;
G__71173 = G__71681;
G__71174 = G__71682;
G__71175 = G__71683;
G__71176 = G__71684;
G__71177 = G__71685;
G__71178 = G__71686;
G__71179 = G__71687;
G__71180 = G__71688;
G__71181 = G__71689;
G__71182 = G__71690;
G__71183 = G__71691;
G__71184 = G__71692;
G__71185 = G__71693;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__71220 = cljs.core._nth(params,(0));
var G__71221 = cljs.core._nth(params,(1));
var G__71222 = cljs.core._nth(params,(2));
var G__71223 = cljs.core._nth(params,(3));
var G__71224 = cljs.core._nth(params,(4));
var G__71225 = cljs.core._nth(params,(5));
var G__71226 = cljs.core._nth(params,(6));
var G__71227 = cljs.core._nth(params,(7));
var G__71228 = cljs.core._nth(params,(8));
var G__71229 = cljs.core._nth(params,(9));
var G__71230 = cljs.core._nth(params,(10));
var G__71231 = cljs.core._nth(params,(11));
var G__71232 = cljs.core._nth(params,(12));
var G__71233 = cljs.core._nth(params,(13));
var G__71234 = cljs.core._nth(params,(14));
var G__71235 = cljs.core._nth(params,(15));
var G__71236 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__71203,G__71204,G__71205,G__71206,G__71207,G__71208,G__71209,G__71210,G__71211,G__71212,G__71213,G__71214,G__71215,G__71216,G__71217,G__71218,G__71219){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71220,G__71203);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71221,G__71204);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71222,G__71205);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71223,G__71206);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71224,G__71207);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71225,G__71208);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71226,G__71209);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71227,G__71210);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71228,G__71211);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71229,G__71212);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71230,G__71213);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71231,G__71214);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71232,G__71215);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71233,G__71216);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71234,G__71217);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71235,G__71218);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__71236,G__71219);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$17);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71694 = cljs.core._nth(recur_val,(0));
var G__71695 = cljs.core._nth(recur_val,(1));
var G__71696 = cljs.core._nth(recur_val,(2));
var G__71697 = cljs.core._nth(recur_val,(3));
var G__71698 = cljs.core._nth(recur_val,(4));
var G__71699 = cljs.core._nth(recur_val,(5));
var G__71700 = cljs.core._nth(recur_val,(6));
var G__71701 = cljs.core._nth(recur_val,(7));
var G__71702 = cljs.core._nth(recur_val,(8));
var G__71703 = cljs.core._nth(recur_val,(9));
var G__71704 = cljs.core._nth(recur_val,(10));
var G__71705 = cljs.core._nth(recur_val,(11));
var G__71706 = cljs.core._nth(recur_val,(12));
var G__71707 = cljs.core._nth(recur_val,(13));
var G__71708 = cljs.core._nth(recur_val,(14));
var G__71709 = cljs.core._nth(recur_val,(15));
var G__71710 = cljs.core._nth(recur_val,(16));
G__71203 = G__71694;
G__71204 = G__71695;
G__71205 = G__71696;
G__71206 = G__71697;
G__71207 = G__71698;
G__71208 = G__71699;
G__71209 = G__71700;
G__71210 = G__71701;
G__71211 = G__71702;
G__71212 = G__71703;
G__71213 = G__71704;
G__71214 = G__71705;
G__71215 = G__71706;
G__71216 = G__71707;
G__71217 = G__71708;
G__71218 = G__71709;
G__71219 = G__71710;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__71255 = cljs.core._nth(params,(0));
var G__71256 = cljs.core._nth(params,(1));
var G__71257 = cljs.core._nth(params,(2));
var G__71258 = cljs.core._nth(params,(3));
var G__71259 = cljs.core._nth(params,(4));
var G__71260 = cljs.core._nth(params,(5));
var G__71261 = cljs.core._nth(params,(6));
var G__71262 = cljs.core._nth(params,(7));
var G__71263 = cljs.core._nth(params,(8));
var G__71264 = cljs.core._nth(params,(9));
var G__71265 = cljs.core._nth(params,(10));
var G__71266 = cljs.core._nth(params,(11));
var G__71267 = cljs.core._nth(params,(12));
var G__71268 = cljs.core._nth(params,(13));
var G__71269 = cljs.core._nth(params,(14));
var G__71270 = cljs.core._nth(params,(15));
var G__71271 = cljs.core._nth(params,(16));
var G__71272 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__71237,G__71238,G__71239,G__71240,G__71241,G__71242,G__71243,G__71244,G__71245,G__71246,G__71247,G__71248,G__71249,G__71250,G__71251,G__71252,G__71253,G__71254){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71255,G__71237);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71256,G__71238);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71257,G__71239);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71258,G__71240);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71259,G__71241);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71260,G__71242);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71261,G__71243);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71262,G__71244);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71263,G__71245);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71264,G__71246);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71265,G__71247);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71266,G__71248);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71267,G__71249);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71268,G__71250);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71269,G__71251);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71270,G__71252);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__71271,G__71253);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__71272,G__71254);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71711 = cljs.core._nth(recur_val,(0));
var G__71712 = cljs.core._nth(recur_val,(1));
var G__71713 = cljs.core._nth(recur_val,(2));
var G__71714 = cljs.core._nth(recur_val,(3));
var G__71715 = cljs.core._nth(recur_val,(4));
var G__71716 = cljs.core._nth(recur_val,(5));
var G__71717 = cljs.core._nth(recur_val,(6));
var G__71718 = cljs.core._nth(recur_val,(7));
var G__71719 = cljs.core._nth(recur_val,(8));
var G__71720 = cljs.core._nth(recur_val,(9));
var G__71721 = cljs.core._nth(recur_val,(10));
var G__71722 = cljs.core._nth(recur_val,(11));
var G__71723 = cljs.core._nth(recur_val,(12));
var G__71724 = cljs.core._nth(recur_val,(13));
var G__71725 = cljs.core._nth(recur_val,(14));
var G__71726 = cljs.core._nth(recur_val,(15));
var G__71727 = cljs.core._nth(recur_val,(16));
var G__71728 = cljs.core._nth(recur_val,(17));
G__71237 = G__71711;
G__71238 = G__71712;
G__71239 = G__71713;
G__71240 = G__71714;
G__71241 = G__71715;
G__71242 = G__71716;
G__71243 = G__71717;
G__71244 = G__71718;
G__71245 = G__71719;
G__71246 = G__71720;
G__71247 = G__71721;
G__71248 = G__71722;
G__71249 = G__71723;
G__71250 = G__71724;
G__71251 = G__71725;
G__71252 = G__71726;
G__71253 = G__71727;
G__71254 = G__71728;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__71291 = cljs.core._nth(params,(0));
var G__71292 = cljs.core._nth(params,(1));
var G__71293 = cljs.core._nth(params,(2));
var G__71294 = cljs.core._nth(params,(3));
var G__71295 = cljs.core._nth(params,(4));
var G__71296 = cljs.core._nth(params,(5));
var G__71297 = cljs.core._nth(params,(6));
var G__71298 = cljs.core._nth(params,(7));
var G__71299 = cljs.core._nth(params,(8));
var G__71300 = cljs.core._nth(params,(9));
var G__71301 = cljs.core._nth(params,(10));
var G__71302 = cljs.core._nth(params,(11));
var G__71303 = cljs.core._nth(params,(12));
var G__71304 = cljs.core._nth(params,(13));
var G__71305 = cljs.core._nth(params,(14));
var G__71306 = cljs.core._nth(params,(15));
var G__71307 = cljs.core._nth(params,(16));
var G__71308 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__71273,G__71274,G__71275,G__71276,G__71277,G__71278,G__71279,G__71280,G__71281,G__71282,G__71283,G__71284,G__71285,G__71286,G__71287,G__71288,G__71289,G__71290){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71291,G__71273);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71292,G__71274);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71293,G__71275);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71294,G__71276);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71295,G__71277);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71296,G__71278);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71297,G__71279);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71298,G__71280);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71299,G__71281);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71300,G__71282);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71301,G__71283);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71302,G__71284);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71303,G__71285);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71304,G__71286);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71305,G__71287);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71306,G__71288);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__71307,G__71289);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__71308,G__71290);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$18);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71729 = cljs.core._nth(recur_val,(0));
var G__71730 = cljs.core._nth(recur_val,(1));
var G__71731 = cljs.core._nth(recur_val,(2));
var G__71732 = cljs.core._nth(recur_val,(3));
var G__71733 = cljs.core._nth(recur_val,(4));
var G__71734 = cljs.core._nth(recur_val,(5));
var G__71735 = cljs.core._nth(recur_val,(6));
var G__71736 = cljs.core._nth(recur_val,(7));
var G__71737 = cljs.core._nth(recur_val,(8));
var G__71738 = cljs.core._nth(recur_val,(9));
var G__71739 = cljs.core._nth(recur_val,(10));
var G__71740 = cljs.core._nth(recur_val,(11));
var G__71741 = cljs.core._nth(recur_val,(12));
var G__71742 = cljs.core._nth(recur_val,(13));
var G__71743 = cljs.core._nth(recur_val,(14));
var G__71744 = cljs.core._nth(recur_val,(15));
var G__71745 = cljs.core._nth(recur_val,(16));
var G__71746 = cljs.core._nth(recur_val,(17));
G__71273 = G__71729;
G__71274 = G__71730;
G__71275 = G__71731;
G__71276 = G__71732;
G__71277 = G__71733;
G__71278 = G__71734;
G__71279 = G__71735;
G__71280 = G__71736;
G__71281 = G__71737;
G__71282 = G__71738;
G__71283 = G__71739;
G__71284 = G__71740;
G__71285 = G__71741;
G__71286 = G__71742;
G__71287 = G__71743;
G__71288 = G__71744;
G__71289 = G__71745;
G__71290 = G__71746;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__71328 = cljs.core._nth(params,(0));
var G__71329 = cljs.core._nth(params,(1));
var G__71330 = cljs.core._nth(params,(2));
var G__71331 = cljs.core._nth(params,(3));
var G__71332 = cljs.core._nth(params,(4));
var G__71333 = cljs.core._nth(params,(5));
var G__71334 = cljs.core._nth(params,(6));
var G__71335 = cljs.core._nth(params,(7));
var G__71336 = cljs.core._nth(params,(8));
var G__71337 = cljs.core._nth(params,(9));
var G__71338 = cljs.core._nth(params,(10));
var G__71339 = cljs.core._nth(params,(11));
var G__71340 = cljs.core._nth(params,(12));
var G__71341 = cljs.core._nth(params,(13));
var G__71342 = cljs.core._nth(params,(14));
var G__71343 = cljs.core._nth(params,(15));
var G__71344 = cljs.core._nth(params,(16));
var G__71345 = cljs.core._nth(params,(17));
var G__71346 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__71309,G__71310,G__71311,G__71312,G__71313,G__71314,G__71315,G__71316,G__71317,G__71318,G__71319,G__71320,G__71321,G__71322,G__71323,G__71324,G__71325,G__71326,G__71327){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71328,G__71309);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71329,G__71310);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71330,G__71311);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71331,G__71312);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71332,G__71313);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71333,G__71314);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71334,G__71315);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71335,G__71316);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71336,G__71317);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71337,G__71318);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71338,G__71319);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71339,G__71320);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71340,G__71321);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71341,G__71322);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71342,G__71323);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71343,G__71324);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__71344,G__71325);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__71345,G__71326);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__71346,G__71327);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71747 = cljs.core._nth(recur_val,(0));
var G__71748 = cljs.core._nth(recur_val,(1));
var G__71749 = cljs.core._nth(recur_val,(2));
var G__71750 = cljs.core._nth(recur_val,(3));
var G__71751 = cljs.core._nth(recur_val,(4));
var G__71752 = cljs.core._nth(recur_val,(5));
var G__71753 = cljs.core._nth(recur_val,(6));
var G__71754 = cljs.core._nth(recur_val,(7));
var G__71755 = cljs.core._nth(recur_val,(8));
var G__71756 = cljs.core._nth(recur_val,(9));
var G__71757 = cljs.core._nth(recur_val,(10));
var G__71758 = cljs.core._nth(recur_val,(11));
var G__71759 = cljs.core._nth(recur_val,(12));
var G__71760 = cljs.core._nth(recur_val,(13));
var G__71761 = cljs.core._nth(recur_val,(14));
var G__71762 = cljs.core._nth(recur_val,(15));
var G__71763 = cljs.core._nth(recur_val,(16));
var G__71764 = cljs.core._nth(recur_val,(17));
var G__71765 = cljs.core._nth(recur_val,(18));
G__71309 = G__71747;
G__71310 = G__71748;
G__71311 = G__71749;
G__71312 = G__71750;
G__71313 = G__71751;
G__71314 = G__71752;
G__71315 = G__71753;
G__71316 = G__71754;
G__71317 = G__71755;
G__71318 = G__71756;
G__71319 = G__71757;
G__71320 = G__71758;
G__71321 = G__71759;
G__71322 = G__71760;
G__71323 = G__71761;
G__71324 = G__71762;
G__71325 = G__71763;
G__71326 = G__71764;
G__71327 = G__71765;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
} else {
var G__71366 = cljs.core._nth(params,(0));
var G__71367 = cljs.core._nth(params,(1));
var G__71368 = cljs.core._nth(params,(2));
var G__71369 = cljs.core._nth(params,(3));
var G__71370 = cljs.core._nth(params,(4));
var G__71371 = cljs.core._nth(params,(5));
var G__71372 = cljs.core._nth(params,(6));
var G__71373 = cljs.core._nth(params,(7));
var G__71374 = cljs.core._nth(params,(8));
var G__71375 = cljs.core._nth(params,(9));
var G__71376 = cljs.core._nth(params,(10));
var G__71377 = cljs.core._nth(params,(11));
var G__71378 = cljs.core._nth(params,(12));
var G__71379 = cljs.core._nth(params,(13));
var G__71380 = cljs.core._nth(params,(14));
var G__71381 = cljs.core._nth(params,(15));
var G__71382 = cljs.core._nth(params,(16));
var G__71383 = cljs.core._nth(params,(17));
var G__71384 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__71347,G__71348,G__71349,G__71350,G__71351,G__71352,G__71353,G__71354,G__71355,G__71356,G__71357,G__71358,G__71359,G__71360,G__71361,G__71362,G__71363,G__71364,G__71365){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = cljs.core._assoc(bindings,G__71366,G__71347);
var bindings__$2 = cljs.core._assoc(bindings__$1,G__71367,G__71348);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__71368,G__71349);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__71369,G__71350);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__71370,G__71351);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__71371,G__71352);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__71372,G__71353);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__71373,G__71354);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__71374,G__71355);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__71375,G__71356);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__71376,G__71357);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__71377,G__71358);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__71378,G__71359);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__71379,G__71360);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__71380,G__71361);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__71381,G__71362);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__71382,G__71363);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__71383,G__71364);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__71384,G__71365);
var ctx__31371__auto__ = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$19);
var ret__31372__auto__ = return$(ctx__31371__auto__);
var recur_QMARK___31373__auto__ = (ret__31372__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___31373__auto__){
var recur_val = sci.impl.types.getVal(ret__31372__auto__);
var G__71766 = cljs.core._nth(recur_val,(0));
var G__71767 = cljs.core._nth(recur_val,(1));
var G__71768 = cljs.core._nth(recur_val,(2));
var G__71769 = cljs.core._nth(recur_val,(3));
var G__71770 = cljs.core._nth(recur_val,(4));
var G__71771 = cljs.core._nth(recur_val,(5));
var G__71772 = cljs.core._nth(recur_val,(6));
var G__71773 = cljs.core._nth(recur_val,(7));
var G__71774 = cljs.core._nth(recur_val,(8));
var G__71775 = cljs.core._nth(recur_val,(9));
var G__71776 = cljs.core._nth(recur_val,(10));
var G__71777 = cljs.core._nth(recur_val,(11));
var G__71778 = cljs.core._nth(recur_val,(12));
var G__71779 = cljs.core._nth(recur_val,(13));
var G__71780 = cljs.core._nth(recur_val,(14));
var G__71781 = cljs.core._nth(recur_val,(15));
var G__71782 = cljs.core._nth(recur_val,(16));
var G__71783 = cljs.core._nth(recur_val,(17));
var G__71784 = cljs.core._nth(recur_val,(18));
G__71347 = G__71766;
G__71348 = G__71767;
G__71349 = G__71768;
G__71350 = G__71769;
G__71351 = G__71770;
G__71352 = G__71771;
G__71353 = G__71772;
G__71354 = G__71773;
G__71355 = G__71774;
G__71356 = G__71775;
G__71357 = G__71776;
G__71358 = G__71777;
G__71359 = G__71778;
G__71360 = G__71779;
G__71361 = G__71780;
G__71362 = G__71781;
G__71363 = G__71782;
G__71364 = G__71783;
G__71365 = G__71784;
continue;
} else {
return ret__31372__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
}

var G__71785 = cljs.core.next(args_STAR_);
var G__71786 = cljs.core.next(params__$1);
var G__71787 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__71785;
params__$1 = G__71786;
ret = G__71787;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = return$(ctx__$1);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__71385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71385,(0),null);
var vec__71388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71385,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71388,(0),null);
var G__71788 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__71788;
continue;
} else {
var G__71789 = recur_val;
args = G__71789;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71790__i = 0, G__71790__a = new Array(arguments.length -  0);
while (G__71790__i < G__71790__a.length) {G__71790__a[G__71790__i] = arguments[G__71790__i + 0]; ++G__71790__i;}
  args = new cljs.core.IndexedSeq(G__71790__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__71791){
var args = cljs.core.seq(arglist__71791);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var bindings__$1 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
}

var G__71792 = cljs.core.next(args_STAR_);
var G__71793 = cljs.core.next(params__$1);
var G__71794 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__71792;
params__$1 = G__71793;
ret = G__71794;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core._assoc(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = return$(ctx__$1);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
if(cljs.core.truth_(min_var_args_arity)){
var vec__71391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71391,(0),null);
var vec__71394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71391,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71394,(0),null);
var G__71795 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__71795;
continue;
} else {
var G__71796 = recur_val;
args = G__71796;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71797__i = 0, G__71797__a = new Array(arguments.length -  0);
while (G__71797__i < G__71797__a.length) {G__71797__a[G__71797__i] = arguments[G__71797__i + 0]; ++G__71797__i;}
  args = new cljs.core.IndexedSeq(G__71797__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__71798){
var args = cljs.core.seq(arglist__71798);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
if(cljs.core.truth_(with_meta_QMARK_)){
return cljs.core.with_meta(f,(cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721),min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity], null)));
} else {
return f;
}
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__71397 = cljs.core.meta(f);
var map__71397__$1 = cljs.core.__destructure_map(map__71397);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71397__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71397__$1,new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721));
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4210__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4210__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__71400){
var map__71401 = p__71400;
var map__71401__$1 = cljs.core.__destructure_map(map__71401);
var f = map__71401__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71401__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71401__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71401__$1,new cljs.core.Keyword("sci.impl","var","sci.impl/var",-2041185552));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ctx__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.not(var$);
if(and__4210__auto__){
return fn_name;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71799__i = 0, G__71799__a = new Array(arguments.length -  0);
while (G__71799__i < G__71799__a.length) {G__71799__a[G__71799__i] = arguments[G__71799__i + 0]; ++G__71799__i;}
  args = new cljs.core.IndexedSeq(G__71799__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__71800){
var args = cljs.core.seq(arglist__71800);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71398_SHARP_){
return sci.impl.fns.fun(ctx__$1,interpret,eval_do_STAR_,p1__71398_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__71801__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$1 = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__71801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71802__i = 0, G__71802__a = new Array(arguments.length -  0);
while (G__71802__i < G__71802__a.length) {G__71802__a[G__71802__i] = arguments[G__71802__i + 0]; ++G__71802__i;}
  args = new cljs.core.IndexedSeq(G__71802__a,0,null);
} 
return G__71801__delegate.call(this,args);};
G__71801.cljs$lang$maxFixedArity = 0;
G__71801.cljs$lang$applyTo = (function (arglist__71803){
var args = cljs.core.seq(arglist__71803);
return G__71801__delegate(args);
});
G__71801.cljs$core$IFn$_invoke$arity$variadic = G__71801__delegate;
return G__71801;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__71399_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71399_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
