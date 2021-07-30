goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33793 = arguments.length;
var i__4819__auto___33794 = (0);
while(true){
if((i__4819__auto___33794 < len__4818__auto___33793)){
args__4824__auto__.push((arguments[i__4819__auto___33794]));

var G__33795 = (i__4819__auto___33794 + (1));
i__4819__auto___33794 = G__33795;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__33023 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(1),null);
var vec__33026 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33026,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33045){
var vec__33048 = p__33045;
var seq__33049 = cljs.core.seq(vec__33048);
var first__33050 = cljs.core.first(seq__33049);
var seq__33049__$1 = cljs.core.next(seq__33049);
var method_name = first__33050;
var ___$2 = seq__33049__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__33004__auto__","x__33004__auto__",-1970408557,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33005__auto__","args__33005__auto__",2066250340,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__33006__auto__","methods__33006__auto__",-687365399,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33004__auto__","x__33004__auto__",-1970408557,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__33006__auto__","methods__33006__auto__",-687365399,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33004__auto__","x__33004__auto__",-1970408557,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33005__auto__","args__33005__auto__",2066250340,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__33011__auto__","x__33011__auto__",-1000867447,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33012__auto__","args__33012__auto__",1386245447,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__33013__auto__","meta__33013__auto__",801371196,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33011__auto__","x__33011__auto__",-1000867447,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33014__auto__","method__33014__auto__",677243842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__33013__auto__","meta__33013__auto__",801371196,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33014__auto__","method__33014__auto__",677243842,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__33014__auto__","method__33014__auto__",677243842,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33011__auto__","x__33011__auto__",-1000867447,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__33012__auto__","args__33012__auto__",1386245447,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33011__auto__","x__33011__auto__",-1000867447,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq33017){
var G__33018 = cljs.core.first(seq33017);
var seq33017__$1 = cljs.core.next(seq33017);
var G__33019 = cljs.core.first(seq33017__$1);
var seq33017__$2 = cljs.core.next(seq33017__$1);
var G__33020 = cljs.core.first(seq33017__$2);
var seq33017__$3 = cljs.core.next(seq33017__$2);
var G__33021 = cljs.core.first(seq33017__$3);
var seq33017__$4 = cljs.core.next(seq33017__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33018,G__33019,G__33020,G__33021,seq33017__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34112 = arguments.length;
var i__4819__auto___34113 = (0);
while(true){
if((i__4819__auto___34113 < len__4818__auto___34112)){
args__4824__auto__.push((arguments[i__4819__auto___34113]));

var G__34114 = (i__4819__auto___34113 + (1));
i__4819__auto___34113 = G__34114;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__33240_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__33240_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__33261 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__33261.cljs$core$IFn$_invoke$arity$2 ? fexpr__33261.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__33261.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__33241_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__33241_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33277){
var vec__33279 = p__33277;
var seq__33280 = cljs.core.seq(vec__33279);
var first__33281 = cljs.core.first(seq__33280);
var seq__33280__$1 = cljs.core.next(seq__33280);
var type = first__33281;
var meths = seq__33280__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq33253){
var G__33254 = cljs.core.first(seq33253);
var seq33253__$1 = cljs.core.next(seq33253);
var G__33255 = cljs.core.first(seq33253__$1);
var seq33253__$2 = cljs.core.next(seq33253__$1);
var G__33256 = cljs.core.first(seq33253__$2);
var seq33253__$3 = cljs.core.next(seq33253__$2);
var G__33257 = cljs.core.first(seq33253__$3);
var seq33253__$4 = cljs.core.next(seq33253__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33254,G__33255,G__33256,G__33257,seq33253__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34124 = arguments.length;
var i__4819__auto___34125 = (0);
while(true){
if((i__4819__auto___34125 < len__4818__auto___34124)){
args__4824__auto__.push((arguments[i__4819__auto___34125]));

var G__34126 = (i__4819__auto___34125 + (1));
i__4819__auto___34125 = G__34126;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__33327 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__33329 = null;
var count__33330 = (0);
var i__33331 = (0);
while(true){
if((i__33331 < count__33330)){
var vec__33490 = chunk__33329.cljs$core$IIndexed$_nth$arity$2(null,i__33331);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(1),null);
var proto_ns_34131 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_34132 = sci.impl.vars.getName(proto_ns_34131);
var seq__33497_34133 = cljs.core.seq(mmap);
var chunk__33498_34134 = null;
var count__33499_34135 = (0);
var i__33500_34136 = (0);
while(true){
if((i__33500_34136 < count__33499_34135)){
var vec__33539_34139 = chunk__33498_34134.cljs$core$IIndexed$_nth$arity$2(null,i__33500_34136);
var fn_name_34140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539_34139,(0),null);
var f_34141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539_34139,(1),null);
var fn_sym_34144 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_34140));
var env_34145 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_34146 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_34145,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_34132,fn_sym_34144], null));
var multi_method_34147 = cljs.core.deref(multi_method_var_34146);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_34147,atype,f_34141);


var G__34148 = seq__33497_34133;
var G__34149 = chunk__33498_34134;
var G__34150 = count__33499_34135;
var G__34151 = (i__33500_34136 + (1));
seq__33497_34133 = G__34148;
chunk__33498_34134 = G__34149;
count__33499_34135 = G__34150;
i__33500_34136 = G__34151;
continue;
} else {
var temp__5753__auto___34152 = cljs.core.seq(seq__33497_34133);
if(temp__5753__auto___34152){
var seq__33497_34153__$1 = temp__5753__auto___34152;
if(cljs.core.chunked_seq_QMARK_(seq__33497_34153__$1)){
var c__4638__auto___34154 = cljs.core.chunk_first(seq__33497_34153__$1);
var G__34155 = cljs.core.chunk_rest(seq__33497_34153__$1);
var G__34156 = c__4638__auto___34154;
var G__34157 = cljs.core.count(c__4638__auto___34154);
var G__34158 = (0);
seq__33497_34133 = G__34155;
chunk__33498_34134 = G__34156;
count__33499_34135 = G__34157;
i__33500_34136 = G__34158;
continue;
} else {
var vec__33546_34159 = cljs.core.first(seq__33497_34153__$1);
var fn_name_34160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33546_34159,(0),null);
var f_34161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33546_34159,(1),null);
var fn_sym_34162 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_34160));
var env_34163 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_34164 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_34163,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_34132,fn_sym_34162], null));
var multi_method_34165 = cljs.core.deref(multi_method_var_34164);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_34165,atype,f_34161);


var G__34166 = cljs.core.next(seq__33497_34153__$1);
var G__34167 = null;
var G__34168 = (0);
var G__34169 = (0);
seq__33497_34133 = G__34166;
chunk__33498_34134 = G__34167;
count__33499_34135 = G__34168;
i__33500_34136 = G__34169;
continue;
}
} else {
}
}
break;
}


var G__34170 = seq__33327;
var G__34171 = chunk__33329;
var G__34172 = count__33330;
var G__34173 = (i__33331 + (1));
seq__33327 = G__34170;
chunk__33329 = G__34171;
count__33330 = G__34172;
i__33331 = G__34173;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33327);
if(temp__5753__auto__){
var seq__33327__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33327__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33327__$1);
var G__34174 = cljs.core.chunk_rest(seq__33327__$1);
var G__34175 = c__4638__auto__;
var G__34176 = cljs.core.count(c__4638__auto__);
var G__34177 = (0);
seq__33327 = G__34174;
chunk__33329 = G__34175;
count__33330 = G__34176;
i__33331 = G__34177;
continue;
} else {
var vec__33574 = cljs.core.first(seq__33327__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(1),null);
var proto_ns_34178 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_34179 = sci.impl.vars.getName(proto_ns_34178);
var seq__33580_34180 = cljs.core.seq(mmap);
var chunk__33581_34181 = null;
var count__33582_34182 = (0);
var i__33583_34183 = (0);
while(true){
if((i__33583_34183 < count__33582_34182)){
var vec__33618_34184 = chunk__33581_34181.cljs$core$IIndexed$_nth$arity$2(null,i__33583_34183);
var fn_name_34185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33618_34184,(0),null);
var f_34186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33618_34184,(1),null);
var fn_sym_34187 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_34185));
var env_34188 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_34189 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_34188,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_34179,fn_sym_34187], null));
var multi_method_34190 = cljs.core.deref(multi_method_var_34189);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_34190,atype,f_34186);


var G__34191 = seq__33580_34180;
var G__34192 = chunk__33581_34181;
var G__34193 = count__33582_34182;
var G__34194 = (i__33583_34183 + (1));
seq__33580_34180 = G__34191;
chunk__33581_34181 = G__34192;
count__33582_34182 = G__34193;
i__33583_34183 = G__34194;
continue;
} else {
var temp__5753__auto___34195__$1 = cljs.core.seq(seq__33580_34180);
if(temp__5753__auto___34195__$1){
var seq__33580_34196__$1 = temp__5753__auto___34195__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33580_34196__$1)){
var c__4638__auto___34197 = cljs.core.chunk_first(seq__33580_34196__$1);
var G__34198 = cljs.core.chunk_rest(seq__33580_34196__$1);
var G__34199 = c__4638__auto___34197;
var G__34200 = cljs.core.count(c__4638__auto___34197);
var G__34201 = (0);
seq__33580_34180 = G__34198;
chunk__33581_34181 = G__34199;
count__33582_34182 = G__34200;
i__33583_34183 = G__34201;
continue;
} else {
var vec__33643_34202 = cljs.core.first(seq__33580_34196__$1);
var fn_name_34203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643_34202,(0),null);
var f_34204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643_34202,(1),null);
var fn_sym_34205 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_34203));
var env_34206 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_34207 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_34206,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_34179,fn_sym_34205], null));
var multi_method_34208 = cljs.core.deref(multi_method_var_34207);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_34208,atype,f_34204);


var G__34209 = cljs.core.next(seq__33580_34196__$1);
var G__34210 = null;
var G__34211 = (0);
var G__34212 = (0);
seq__33580_34180 = G__34209;
chunk__33581_34181 = G__34210;
count__33582_34182 = G__34211;
i__33583_34183 = G__34212;
continue;
}
} else {
}
}
break;
}


var G__34213 = cljs.core.next(seq__33327__$1);
var G__34214 = null;
var G__34215 = (0);
var G__34216 = (0);
seq__33327 = G__34213;
chunk__33329 = G__34214;
count__33330 = G__34215;
i__33331 = G__34216;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq33301){
var G__33302 = cljs.core.first(seq33301);
var seq33301__$1 = cljs.core.next(seq33301);
var G__33303 = cljs.core.first(seq33301__$1);
var seq33301__$2 = cljs.core.next(seq33301__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33302,G__33303,seq33301__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34217 = arguments.length;
var i__4819__auto___34218 = (0);
while(true){
if((i__4819__auto___34218 < len__4818__auto___34217)){
args__4824__auto__.push((arguments[i__4819__auto___34218]));

var G__34219 = (i__4819__auto___34218 + (1));
i__4819__auto___34218 = G__34219;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((4) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4825__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__33657_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__33657_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33692){
var vec__33693 = p__33692;
var seq__33694 = cljs.core.seq(vec__33693);
var first__33695 = cljs.core.first(seq__33694);
var seq__33694__$1 = cljs.core.next(seq__33694);
var proto = first__33695;
var meths = seq__33694__$1;
var protocol_var = (function (){var fexpr__33700 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__33700.cljs$core$IFn$_invoke$arity$2 ? fexpr__33700.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__33700.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__33658_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__33658_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq33661){
var G__33662 = cljs.core.first(seq33661);
var seq33661__$1 = cljs.core.next(seq33661);
var G__33663 = cljs.core.first(seq33661__$1);
var seq33661__$2 = cljs.core.next(seq33661__$1);
var G__33664 = cljs.core.first(seq33661__$2);
var seq33661__$3 = cljs.core.next(seq33661__$2);
var G__33665 = cljs.core.first(seq33661__$3);
var seq33661__$4 = cljs.core.next(seq33661__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33662,G__33663,G__33664,G__33665,seq33661__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.sci$impl$types$IReified$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj):false)):cljs.core.native_satisfies_QMARK_(sci.impl.types.IReified,obj))){
var temp__5751__auto__ = sci.impl.types.getInterface(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var obj_type = temp__5751__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,obj_type);
} else {
return false;
}
} else {
return cljs.core.boolean$(cljs.core.some((function (p1__33729_SHARP_){
return cljs.core.get_method(p1__33729_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__4210__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__4210__auto__){
var m = cljs.core.meta(clazz);
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__4210__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,(function (){var G__33758 = x;
var G__33758__$1 = (((G__33758 == null))?null:cljs.core.meta(G__33758));
if((G__33758__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","type","sci.impl/type",1797552241).cljs$core$IFn$_invoke$arity$1(G__33758__$1);
}
})());
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__33763_SHARP_){
return cljs.core.get_method(p1__33763_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
