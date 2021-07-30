goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26771 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26772 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26772);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26773 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26774 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26774);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26773);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26771);
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
var G__26786 = arguments.length;
switch (G__26786) {
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

var vec__26796 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26796,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26796,(1),null);
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
return module$node_modules$react_dom$index.findDOMNode(this$);
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

var seq__26811_26834 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26812_26835 = null;
var count__26813_26836 = (0);
var i__26814_26837 = (0);
while(true){
if((i__26814_26837 < count__26813_26836)){
var vec__26822_26838 = chunk__26812_26835.cljs$core$IIndexed$_nth$arity$2(null,i__26814_26837);
var container_26839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26822_26838,(0),null);
var comp_26840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26822_26838,(1),null);
reagent.dom.re_render_component(comp_26840,container_26839);


var G__26841 = seq__26811_26834;
var G__26842 = chunk__26812_26835;
var G__26843 = count__26813_26836;
var G__26844 = (i__26814_26837 + (1));
seq__26811_26834 = G__26841;
chunk__26812_26835 = G__26842;
count__26813_26836 = G__26843;
i__26814_26837 = G__26844;
continue;
} else {
var temp__5753__auto___26845 = cljs.core.seq(seq__26811_26834);
if(temp__5753__auto___26845){
var seq__26811_26846__$1 = temp__5753__auto___26845;
if(cljs.core.chunked_seq_QMARK_(seq__26811_26846__$1)){
var c__4638__auto___26847 = cljs.core.chunk_first(seq__26811_26846__$1);
var G__26848 = cljs.core.chunk_rest(seq__26811_26846__$1);
var G__26849 = c__4638__auto___26847;
var G__26850 = cljs.core.count(c__4638__auto___26847);
var G__26851 = (0);
seq__26811_26834 = G__26848;
chunk__26812_26835 = G__26849;
count__26813_26836 = G__26850;
i__26814_26837 = G__26851;
continue;
} else {
var vec__26827_26852 = cljs.core.first(seq__26811_26846__$1);
var container_26853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26827_26852,(0),null);
var comp_26854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26827_26852,(1),null);
reagent.dom.re_render_component(comp_26854,container_26853);


var G__26855 = cljs.core.next(seq__26811_26846__$1);
var G__26856 = null;
var G__26857 = (0);
var G__26858 = (0);
seq__26811_26834 = G__26855;
chunk__26812_26835 = G__26856;
count__26813_26836 = G__26857;
i__26814_26837 = G__26858;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
