var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react.js");
require("./clojure.string.js");
require("./reagent.impl.util.js");
require("./reagent.impl.component.js");
require("./reagent.impl.batching.js");
require("./reagent.impl.input.js");
require("./reagent.impl.protocols.js");
require("./reagent.ratom.js");
require("./reagent.debug.js");
require("./goog.object.object.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.impl.template.js");

goog.provide('reagent.impl.template');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (((cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)))));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
goog.object.set(reagent.impl.template.prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__37579 = o;
goog.object.set(G__37579,reagent.impl.template.cached_prop_name(k),(reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v)));

return G__37579;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__37787__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__37787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37788__i = 0, G__37788__a = new Array(arguments.length -  0);
while (G__37788__i < G__37788__a.length) {G__37788__a[G__37788__i] = arguments[G__37788__i + 0]; ++G__37788__i;}
  args = new cljs.core.IndexedSeq(G__37788__a,0,null);
} 
return G__37787__delegate.call(this,args);};
G__37787.cljs$lang$maxFixedArity = 0;
G__37787.cljs$lang$applyTo = (function (arglist__37789){
var args = cljs.core.seq(arglist__37789);
return G__37787__delegate(args);
});
G__37787.cljs$core$IFn$_invoke$arity$variadic = G__37787__delegate;
return G__37787;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = reagent.impl.template.cache_get(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
goog.object.set(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__37622 = o;
goog.object.set(G__37622,reagent.impl.template.cached_custom_prop_name(k),reagent.impl.template.convert_prop_value(v));

return G__37622;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__37793__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__37793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37794__i = 0, G__37794__a = new Array(arguments.length -  0);
while (G__37794__i < G__37794__a.length) {G__37794__a[G__37794__i] = arguments[G__37794__i + 0]; ++G__37794__i;}
  args = new cljs.core.IndexedSeq(G__37794__a,0,null);
} 
return G__37793__delegate.call(this,args);};
G__37793.cljs$lang$maxFixedArity = 0;
G__37793.cljs$lang$applyTo = (function (arglist__37795){
var args = cljs.core.seq(arglist__37795);
return G__37793__delegate(args);
});
G__37793.cljs$core$IFn$_invoke$arity$variadic = G__37793__delegate;
return G__37793;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__37630 = props;
var G__37630__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__37630);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37630__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__37630__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class((function (){var G__37639 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37639,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__37639;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return reagent.impl.template.convert_prop_value(props__$1);
}
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__37645 = (cljs.core.count(argv) - first_child);
switch (G__37645) {
case (0):
return shadow.js.shim.module$react.createElement(component,jsprops);

break;
case (1):
return shadow.js.shim.module$react.createElement(component,jsprops,reagent.impl.protocols.as_element(this$,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return shadow.js.shim.module$react.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element(this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(reagent.impl.template.HiccupTag.cljs$lang$type = true);

(reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag");

(reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__37652 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37652,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37652,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37652,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__5757__auto___37812 = reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___37812 == null)){
} else {
var key_37813 = temp__5757__auto___37812;
(jsprops.key = key_37813);
}

return shadow.js.shim.module$react.createElement(c,jsprops);
});
reagent.impl.template.function_element = (function reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_arg));

var temp__5757__auto___37814 = reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___37814 == null)){
} else {
var key_37815 = temp__5757__auto___37814;
(jsprops.key = key_37815);
}

return shadow.js.shim.module$react.createElement(reagent.impl.component.functional_render_fn(compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
reagent.impl.template.maybe_function_element = (function reagent$impl$template$maybe_function_element(tag,v,compiler){
if(reagent.impl.component.react_class_QMARK_(tag)){
return reagent.impl.template.reag_element(tag,v,compiler);
} else {
return reagent.impl.template.function_element(tag,v,(1),compiler);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4212__auto__ = reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5757__auto___37816 = reagent.impl.util.react_key_from_vec(argv);
if((temp__5757__auto___37816 == null)){
} else {
var key_37819 = temp__5757__auto___37816;
(jsprops.key = key_37819);
}

return reagent.impl.protocols.make_element(compiler,argv,shadow.js.shim.module$react.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(this$,x,_){
var temp__5755__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5755__auto__ == null)){
var v = reagent.impl.template.parse_tag(x);
goog.object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5755__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4212__auto__ = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_(component)){
var react_key = reagent.impl.util.get_react_key(props);
var input_class = (function (){var or__4212__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var x = reagent.impl.component.create_class(reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return reagent.impl.protocols.as_element(compiler,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(react_key)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),react_key], null):null),cljs.core.meta(argv)], 0))));
} else {
var temp__5757__auto___37832 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___37832 == null)){
} else {
var key_37833 = temp__5757__auto___37832;
(jsprops.key = key_37833);
}

return reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.raw_element = (function reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(2),null);
var jsprops = (function (){var or__4212__auto__ = props;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ({});
}
})();
var temp__5757__auto___37837 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___37837 == null)){
} else {
var key_37839 = temp__5757__auto___37837;
(jsprops.key = key_37839);
}

return reagent.impl.protocols.make_element(compiler,argv,comp,jsprops,(3));
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37728_SHARP_){
return reagent.impl.protocols.as_element(compiler,p1__37728_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((reagent.impl.util.react_key_from_vec(val) == null)))){
(o.no_key = true);
} else {
}

return reagent.impl.protocols.as_element(compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__37734 = reagent.ratom.check_derefs((function (){
return reagent.impl.template.expand_seq_dev(x,ctx,compiler);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37734,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37734,(1),null);
if(cljs.core.truth_(derefed)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__37737 = pos;
switch (G__37737) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.protocols.parse_tag(compiler,n,tag),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__37850 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
var G__37851 = compiler;
v = G__37850;
compiler = G__37851;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
}

if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

var G__37738 = tag;
var G__37738__$1 = (((G__37738 instanceof cljs.core.Keyword))?G__37738.fqn:null);
switch (G__37738__$1) {
case ">":
return reagent.impl.template.native_element(reagent.impl.template.__GT_HiccupTag(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return reagent.impl.template.raw_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,compiler);

break;
case "f>":
return reagent.impl.template.function_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,(2),compiler);

break;
case "<>":
return reagent.impl.template.fragment_element(v,compiler);

break;
default:
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
return reagent.impl.template.hiccup_element(v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1),compiler);
} else {
return (fn_to_element.cljs$core$IFn$_invoke$arity$3 ? fn_to_element.cljs$core$IFn$_invoke$arity$3(tag,v,compiler) : fn_to_element.call(null,tag,v,compiler));

}
}

}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(this$,x,fn_to_element){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_(x)){
return reagent.impl.template.expand_seq_check(x,this$);

} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",1492814963).cljs$core$IFn$_invoke$arity$1(opts))?reagent.impl.template.maybe_function_element:reagent.impl.template.reag_element);
var parse_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"parse-tag","parse-tag",1427313738),reagent.impl.template.cached_parse);
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.t_reagent$impl$template37751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagent.impl.template.t_reagent$impl$template37751 = (function (opts,id,fn_to_element,parse_fn,meta37752){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.parse_fn = parse_fn;
this.meta37752 = meta37752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.template.t_reagent$impl$template37751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37753,meta37752__$1){
var self__ = this;
var _37753__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template37751(self__.opts,self__.id,self__.fn_to_element,self__.parse_fn,meta37752__$1));
}));

(reagent.impl.template.t_reagent$impl$template37751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37753){
var self__ = this;
var _37753__$1 = this;
return self__.meta37752;
}));

(reagent.impl.template.t_reagent$impl$template37751.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.template.t_reagent$impl$template37751.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(reagent.impl.template.t_reagent$impl$template37751.prototype.reagent$impl$protocols$Compiler$parse_tag$arity$3 = (function (this$,tag_name,tag_value){
var self__ = this;
var this$__$1 = this;
return (self__.parse_fn.cljs$core$IFn$_invoke$arity$3 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$3(this$__$1,tag_name,tag_value) : self__.parse_fn.call(null,this$__$1,tag_name,tag_value));
}));

(reagent.impl.template.t_reagent$impl$template37751.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element(this$__$1,x,self__.fn_to_element);
}));

(reagent.impl.template.t_reagent$impl$template37751.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element(this$__$1,argv,component,jsprops,first_child);
}));

(reagent.impl.template.t_reagent$impl$template37751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",-1764467095,null),new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"meta37752","meta37752",-897838269,null)], null);
}));

(reagent.impl.template.t_reagent$impl$template37751.cljs$lang$type = true);

(reagent.impl.template.t_reagent$impl$template37751.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template37751");

(reagent.impl.template.t_reagent$impl$template37751.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reagent.impl.template/t_reagent$impl$template37751");
}));

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template37751.
 */
reagent.impl.template.__GT_t_reagent$impl$template37751 = (function reagent$impl$template$create_compiler_$___GT_t_reagent$impl$template37751(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta37752){
return (new reagent.impl.template.t_reagent$impl$template37751(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta37752));
});

}

return (new reagent.impl.template.t_reagent$impl$template37751(opts,id,fn_to_element,parse_fn,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.default_compiler_STAR_ = reagent.impl.template.create_compiler(cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template.default_compiler = reagent.impl.template.default_compiler_STAR_;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return (reagent.impl.template.default_compiler = compiler);
});
Object.defineProperty(module.exports, "valid_tag_QMARK_", { enumerable: false, get: function() { return reagent.impl.template.valid_tag_QMARK_; } });
Object.defineProperty(module.exports, "__GT_t_reagent$impl$template37751", { enumerable: false, get: function() { return reagent.impl.template.__GT_t_reagent$impl$template37751; } });
Object.defineProperty(module.exports, "adapt_react_class", { enumerable: false, get: function() { return reagent.impl.template.adapt_react_class; } });
Object.defineProperty(module.exports, "default_compiler_STAR_", { enumerable: false, get: function() { return reagent.impl.template.default_compiler_STAR_; } });
Object.defineProperty(module.exports, "re_tag", { enumerable: false, get: function() { return reagent.impl.template.re_tag; } });
Object.defineProperty(module.exports, "function_element", { enumerable: false, get: function() { return reagent.impl.template.function_element; } });
Object.defineProperty(module.exports, "t_reagent$impl$template37751", { enumerable: false, get: function() { return reagent.impl.template.t_reagent$impl$template37751; } });
Object.defineProperty(module.exports, "reag_element", { enumerable: false, get: function() { return reagent.impl.template.reag_element; } });
Object.defineProperty(module.exports, "as_element", { enumerable: false, get: function() { return reagent.impl.template.as_element; } });
Object.defineProperty(module.exports, "default_compiler", { enumerable: false, get: function() { return reagent.impl.template.default_compiler; } });
Object.defineProperty(module.exports, "HiccupTag", { enumerable: false, get: function() { return reagent.impl.template.HiccupTag; } });
Object.defineProperty(module.exports, "NativeWrapper", { enumerable: false, get: function() { return reagent.impl.template.NativeWrapper; } });
Object.defineProperty(module.exports, "__GT_NativeWrapper", { enumerable: false, get: function() { return reagent.impl.template.__GT_NativeWrapper; } });
Object.defineProperty(module.exports, "custom_kv_conv", { enumerable: false, get: function() { return reagent.impl.template.custom_kv_conv; } });
Object.defineProperty(module.exports, "maybe_function_element", { enumerable: false, get: function() { return reagent.impl.template.maybe_function_element; } });
Object.defineProperty(module.exports, "hiccup_tag_QMARK_", { enumerable: false, get: function() { return reagent.impl.template.hiccup_tag_QMARK_; } });
Object.defineProperty(module.exports, "set_id_class", { enumerable: false, get: function() { return reagent.impl.template.set_id_class; } });
Object.defineProperty(module.exports, "tag_name_cache", { enumerable: false, get: function() { return reagent.impl.template.tag_name_cache; } });
Object.defineProperty(module.exports, "prop_name_cache", { enumerable: false, get: function() { return reagent.impl.template.prop_name_cache; } });
Object.defineProperty(module.exports, "convert_props", { enumerable: false, get: function() { return reagent.impl.template.convert_props; } });
Object.defineProperty(module.exports, "set_default_compiler_BANG_", { enumerable: false, get: function() { return reagent.impl.template.set_default_compiler_BANG_; } });
Object.defineProperty(module.exports, "custom_prop_name_cache", { enumerable: false, get: function() { return reagent.impl.template.custom_prop_name_cache; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return reagent.impl.template.parse_tag; } });
Object.defineProperty(module.exports, "kv_conv", { enumerable: false, get: function() { return reagent.impl.template.kv_conv; } });
Object.defineProperty(module.exports, "hiccup_element", { enumerable: false, get: function() { return reagent.impl.template.hiccup_element; } });
Object.defineProperty(module.exports, "convert_custom_prop_value", { enumerable: false, get: function() { return reagent.impl.template.convert_custom_prop_value; } });
Object.defineProperty(module.exports, "native_element", { enumerable: false, get: function() { return reagent.impl.template.native_element; } });
Object.defineProperty(module.exports, "fragment_element", { enumerable: false, get: function() { return reagent.impl.template.fragment_element; } });
Object.defineProperty(module.exports, "create_compiler", { enumerable: false, get: function() { return reagent.impl.template.create_compiler; } });
Object.defineProperty(module.exports, "vec_to_elem", { enumerable: false, get: function() { return reagent.impl.template.vec_to_elem; } });
Object.defineProperty(module.exports, "cache_get", { enumerable: false, get: function() { return reagent.impl.template.cache_get; } });
Object.defineProperty(module.exports, "raw_element", { enumerable: false, get: function() { return reagent.impl.template.raw_element; } });
Object.defineProperty(module.exports, "make_element", { enumerable: false, get: function() { return reagent.impl.template.make_element; } });
Object.defineProperty(module.exports, "expand_seq_dev", { enumerable: false, get: function() { return reagent.impl.template.expand_seq_dev; } });
Object.defineProperty(module.exports, "convert_prop_value", { enumerable: false, get: function() { return reagent.impl.template.convert_prop_value; } });
Object.defineProperty(module.exports, "cached_prop_name", { enumerable: false, get: function() { return reagent.impl.template.cached_prop_name; } });
Object.defineProperty(module.exports, "cached_custom_prop_name", { enumerable: false, get: function() { return reagent.impl.template.cached_custom_prop_name; } });
Object.defineProperty(module.exports, "expand_seq", { enumerable: false, get: function() { return reagent.impl.template.expand_seq; } });
Object.defineProperty(module.exports, "__GT_HiccupTag", { enumerable: false, get: function() { return reagent.impl.template.__GT_HiccupTag; } });
Object.defineProperty(module.exports, "expand_seq_check", { enumerable: false, get: function() { return reagent.impl.template.expand_seq_check; } });
Object.defineProperty(module.exports, "cached_parse", { enumerable: false, get: function() { return reagent.impl.template.cached_parse; } });
//# sourceMappingURL=reagent.impl.template.js.map
