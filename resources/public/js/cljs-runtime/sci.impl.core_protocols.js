goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31923 = cljs.core.get_global_hierarchy;
return (fexpr__31923.cljs$core$IFn$_invoke$arity$0 ? fexpr__31923.cljs$core$IFn$_invoke$arity$0() : fexpr__31923.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__31926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__31926.cljs$core$IFn$_invoke$arity$1 ? fexpr__31926.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__31926.call(null,ref));
}));
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31937 = cljs.core.get_global_hierarchy;
return (fexpr__31937.cljs$core$IFn$_invoke$arity$0 ? fexpr__31937.cljs$core$IFn$_invoke$arity$0() : fexpr__31937.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31939 = cljs.core.get_global_hierarchy;
return (fexpr__31939.cljs$core$IFn$_invoke$arity$0 ? fexpr__31939.cljs$core$IFn$_invoke$arity$0() : fexpr__31939.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__32049 = null;
var G__32049__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__31943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__31943.cljs$core$IFn$_invoke$arity$2 ? fexpr__31943.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__31943.call(null,ref,f));
});
var G__32049__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__31947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__31947.cljs$core$IFn$_invoke$arity$3 ? fexpr__31947.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__31947.call(null,ref,f,a1));
});
var G__32049__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__31948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__31948.cljs$core$IFn$_invoke$arity$4 ? fexpr__31948.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__31948.call(null,ref,f,a1,a2));
});
var G__32049__5 = (function() { 
var G__32078__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__32078 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__32079__i = 0, G__32079__a = new Array(arguments.length -  4);
while (G__32079__i < G__32079__a.length) {G__32079__a[G__32079__i] = arguments[G__32079__i + 4]; ++G__32079__i;}
  args = new cljs.core.IndexedSeq(G__32079__a,0,null);
} 
return G__32078__delegate.call(this,ref,f,a1,a2,args);};
G__32078.cljs$lang$maxFixedArity = 4;
G__32078.cljs$lang$applyTo = (function (arglist__32081){
var ref = cljs.core.first(arglist__32081);
arglist__32081 = cljs.core.next(arglist__32081);
var f = cljs.core.first(arglist__32081);
arglist__32081 = cljs.core.next(arglist__32081);
var a1 = cljs.core.first(arglist__32081);
arglist__32081 = cljs.core.next(arglist__32081);
var a2 = cljs.core.first(arglist__32081);
var args = cljs.core.rest(arglist__32081);
return G__32078__delegate(ref,f,a1,a2,args);
});
G__32078.cljs$core$IFn$_invoke$arity$variadic = G__32078__delegate;
return G__32078;
})()
;
G__32049 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__32049__2.call(this,ref,f);
case 3:
return G__32049__3.call(this,ref,f,a1);
case 4:
return G__32049__4.call(this,ref,f,a1,a2);
default:
var G__32082 = null;
if (arguments.length > 4) {
var G__32083__i = 0, G__32083__a = new Array(arguments.length -  4);
while (G__32083__i < G__32083__a.length) {G__32083__a[G__32083__i] = arguments[G__32083__i + 4]; ++G__32083__i;}
G__32082 = new cljs.core.IndexedSeq(G__32083__a,0,null);
}
return G__32049__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__32082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32049.cljs$lang$maxFixedArity = 4;
G__32049.cljs$lang$applyTo = G__32049__5.cljs$lang$applyTo;
G__32049.cljs$core$IFn$_invoke$arity$2 = G__32049__2;
G__32049.cljs$core$IFn$_invoke$arity$3 = G__32049__3;
G__32049.cljs$core$IFn$_invoke$arity$4 = G__32049__4;
G__32049.cljs$core$IFn$_invoke$arity$variadic = G__32049__5.cljs$core$IFn$_invoke$arity$variadic;
return G__32049;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__31956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__31956.cljs$core$IFn$_invoke$arity$2 ? fexpr__31956.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__31956.call(null,ref,v));
}));
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__32084__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__32084 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__32085__i = 0, G__32085__a = new Array(arguments.length -  2);
while (G__32085__i < G__32085__a.length) {G__32085__a[G__32085__i] = arguments[G__32085__i + 2]; ++G__32085__i;}
  args = new cljs.core.IndexedSeq(G__32085__a,0,null);
} 
return G__32084__delegate.call(this,ref,f,args);};
G__32084.cljs$lang$maxFixedArity = 2;
G__32084.cljs$lang$applyTo = (function (arglist__32086){
var ref = cljs.core.first(arglist__32086);
arglist__32086 = cljs.core.next(arglist__32086);
var f = cljs.core.first(arglist__32086);
var args = cljs.core.rest(arglist__32086);
return G__32084__delegate(ref,f,args);
});
G__32084.cljs$core$IFn$_invoke$arity$variadic = G__32084__delegate;
return G__32084;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}));
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32087 = arguments.length;
var i__4819__auto___32088 = (0);
while(true){
if((i__4819__auto___32088 < len__4818__auto___32087)){
args__4824__auto__.push((arguments[i__4819__auto___32088]));

var G__32089 = (i__4819__auto___32088 + (1));
i__4819__auto___32088 = G__32089;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq31965){
var G__31966 = cljs.core.first(seq31965);
var seq31965__$1 = cljs.core.next(seq31965);
var G__31967 = cljs.core.first(seq31965__$1);
var seq31965__$2 = cljs.core.next(seq31965__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31966,G__31967,seq31965__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));

//# sourceMappingURL=sci.impl.core_protocols.js.map
