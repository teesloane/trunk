var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_dom.js");
require("./reagent.impl.util.js");
require("./reagent.impl.template.js");
require("./reagent.impl.input.js");
require("./reagent.impl.batching.js");
require("./reagent.impl.protocols.js");
require("./reagent.ratom.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.dom.js");

goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38077 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38078 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38078);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38080 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38081 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38081);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38080);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38077);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__38101 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return shadow.js.shim.module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__38125_38195 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38126_38196 = null;
var count__38127_38197 = (0);
var i__38128_38198 = (0);
while(true){
if((i__38128_38198 < count__38127_38197)){
var vec__38162_38199 = chunk__38126_38196.cljs$core$IIndexed$_nth$arity$2(null,i__38128_38198);
var container_38200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162_38199,(0),null);
var comp_38201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162_38199,(1),null);
reagent.dom.re_render_component(comp_38201,container_38200);


var G__38205 = seq__38125_38195;
var G__38206 = chunk__38126_38196;
var G__38207 = count__38127_38197;
var G__38208 = (i__38128_38198 + (1));
seq__38125_38195 = G__38205;
chunk__38126_38196 = G__38206;
count__38127_38197 = G__38207;
i__38128_38198 = G__38208;
continue;
} else {
var temp__5753__auto___38210 = cljs.core.seq(seq__38125_38195);
if(temp__5753__auto___38210){
var seq__38125_38213__$1 = temp__5753__auto___38210;
if(cljs.core.chunked_seq_QMARK_(seq__38125_38213__$1)){
var c__4638__auto___38215 = cljs.core.chunk_first(seq__38125_38213__$1);
var G__38216 = cljs.core.chunk_rest(seq__38125_38213__$1);
var G__38217 = c__4638__auto___38215;
var G__38218 = cljs.core.count(c__4638__auto___38215);
var G__38219 = (0);
seq__38125_38195 = G__38216;
chunk__38126_38196 = G__38217;
count__38127_38197 = G__38218;
i__38128_38198 = G__38219;
continue;
} else {
var vec__38173_38221 = cljs.core.first(seq__38125_38213__$1);
var container_38222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38173_38221,(0),null);
var comp_38223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38173_38221,(1),null);
reagent.dom.re_render_component(comp_38223,container_38222);


var G__38225 = cljs.core.next(seq__38125_38213__$1);
var G__38226 = null;
var G__38227 = (0);
var G__38228 = (0);
seq__38125_38195 = G__38225;
chunk__38126_38196 = G__38226;
count__38127_38197 = G__38227;
i__38128_38198 = G__38228;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
Object.defineProperty(module.exports, "roots", { enumerable: false, get: function() { return reagent.dom.roots; } });
Object.defineProperty(module.exports, "unmount_comp", { enumerable: false, get: function() { return reagent.dom.unmount_comp; } });
Object.defineProperty(module.exports, "render_comp", { enumerable: false, get: function() { return reagent.dom.render_comp; } });
Object.defineProperty(module.exports, "re_render_component", { enumerable: false, get: function() { return reagent.dom.re_render_component; } });
Object.defineProperty(module.exports, "render", { enumerable: false, get: function() { return reagent.dom.render; } });
Object.defineProperty(module.exports, "unmount_component_at_node", { enumerable: false, get: function() { return reagent.dom.unmount_component_at_node; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: false, get: function() { return reagent.dom.dom_node; } });
Object.defineProperty(module.exports, "force_update_all", { enumerable: false, get: function() { return reagent.dom.force_update_all; } });
//# sourceMappingURL=reagent.dom.js.map
