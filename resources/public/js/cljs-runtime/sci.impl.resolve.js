goog.provide('sci.impl.resolve');
sci.impl.resolve.throw_error_with_location = (function sci$impl$resolve$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});
sci.impl.resolve.mark_resolve_sym = (function sci$impl$resolve$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260));
}));
});
sci.impl.resolve.check_permission_BANG_ = (function sci$impl$resolve$check_permission_BANG_(p__31924,check_sym,sym,v){
var map__31925 = p__31924;
var map__31925__$1 = cljs.core.__destructure_map(map__31925);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31925__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31925__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
var or__4212__auto__ = (sci.impl.utils.allowed_loop === sym);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (sci.impl.utils.allowed_recur === sym);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
if((cljs.core.truth_(allow)?((((sci.impl.vars.var_QMARK_(v)) && (cljs.core.not(new cljs.core.Keyword("sci.impl","built-in","sci.impl/built-in",1011824843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))))) || (cljs.core.contains_QMARK_(allow,check_sym__$1))):true)){
} else {
sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
}
});
sci.impl.resolve.lookup_STAR_ = (function sci$impl$resolve$lookup_STAR_(p__31934,sym,call_QMARK_){
var map__31935 = p__31934;
var map__31935__$1 = cljs.core.__destructure_map(map__31935);
var ctx = map__31935__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31935__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var sym_ns = (function (){var G__31936 = cljs.core.namespace(sym);
if((G__31936 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__31936);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__31938 = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__31938) : cnn.call(null,G__31938));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4212__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),sym_ns], null));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return sym_ns;
}
})():null);
var or__4212__auto__ = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = sym_ns__$1;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))));
} else {
return and__4210__auto__;
}
})())){
var or__4212__auto____$1 = (function (){var G__31940 = env__$1;
var G__31940__$1 = (((G__31940 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__31940));
var G__31940__$2 = (((G__31940__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31940__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__31940__$2 == null)){
return null;
} else {
return cljs.core.find(G__31940__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var temp__5753__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym_name):null);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(sym_ns__$1)){
var or__4212__auto____$1 = (function (){var G__31945 = env__$1;
var G__31945__$1 = (((G__31945 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__31945));
var G__31945__$2 = (((G__31945__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__31945__$1) : sym_ns__$1.call(null,G__31945__$1)));
if((G__31945__$2 == null)){
return null;
} else {
return cljs.core.find(G__31945__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var temp__5753__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var clazz = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"static-access","static-access",-1860919441)], null))], null);
} else {
return null;
}
}
} else {
var or__4212__auto____$1 = (function (){var kv = (function (){var G__31949 = env__$1;
var G__31949__$1 = (((G__31949 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__31949));
var G__31949__$2 = (((G__31949__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31949__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
if((G__31949__$2 == null)){
return null;
} else {
return cljs.core.find(G__31949__$2,sym_name);
}
})();
if(cljs.core.truth_((function (){var G__31950 = the_current_ns;
var G__31950__$1 = (((G__31950 == null))?null:new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(G__31950));
var G__31950__$2 = (((G__31950__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__31950__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)));
var G__31950__$3 = (((G__31950__$2 == null))?null:new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(G__31950__$2));
if((G__31950__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__31950__$3,sym_name);
}
})())){
return null;
} else {
return kv;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var or__4212__auto____$3 = (function (){var temp__5753__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto____$3)){
return or__4212__auto____$3;
} else {
var temp__5753__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var x = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,x], null);
} else {
return null;
}
}
}
}

}
}
}
});
sci.impl.resolve.tag = (function sci$impl$resolve$tag(_ctx,expr){
var temp__5753__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
});
sci.impl.resolve.lookup = (function sci$impl$resolve$lookup(p__31974,sym,call_QMARK_){
var map__31975 = p__31974;
var map__31975__$1 = cljs.core.__destructure_map(map__31975);
var ctx = map__31975__$1;
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31975__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var vec__31982 = (function (){var or__4212__auto__ = (function (){var temp__5753__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__31985 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31985,(1),null);
var t = sci.impl.resolve.tag(ctx,v);
var v__$1 = sci.impl.resolve.mark_resolve_sym(k);
var v__$2 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v__$1,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):v__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$2], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var temp__5753__auto__ = sci.impl.resolve.lookup_STAR_(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__31994 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31994,(1),null);
var kv = vec__31994;
sci.impl.resolve.check_permission_BANG_(ctx,k,sym,v);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31982,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31982,(1),null);
var kv = vec__31982;
var temp__5751__auto__ = (function (){var and__4210__auto__ = cljs.core.not(new cljs.core.Keyword("sci.impl","prevent-deref","sci.impl/prevent-deref",-1401491385).cljs$core$IFn$_invoke$arity$1(ctx));
if(and__4210__auto__){
return cljs.core.meta(k);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","deref!","sci.impl/deref!",599653178).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"deref!","deref!",153059469)], null))], null);
} else {
return kv;
}
} else {
return kv;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.lookup,sci.impl.resolve.lookup);
sci.impl.resolve.resolve_symbol = (function sci$impl$resolve$resolve_symbol(var_args){
var G__32030 = arguments.length;
switch (G__32030) {
case 2:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,sym,false);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
var sym__$1 = sym;
var res = cljs.core.second((function (){var or__4212__auto__ = sci.impl.resolve.lookup(ctx,sym__$1,call_QMARK_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var n = cljs.core.name(sym__$1);
if(cljs.core.truth_((function (){var and__4210__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null)], null);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null)], null);
} else {
if(clojure.string.starts_with_QMARK_(n,"'")){
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return sci.impl.resolve.throw_error_with_location(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),sym__$1);

}
}
}
}
})());
return res;
}));

(sci.impl.resolve.resolve_symbol.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.resolve.js.map
