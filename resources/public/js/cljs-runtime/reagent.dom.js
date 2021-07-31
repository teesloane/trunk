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
var _STAR_always_update_STAR__orig_val__52643 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52644 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52644);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__52645 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52646 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52646);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52645);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52643);
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
var G__52660 = arguments.length;
switch (G__52660) {
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

var vec__52666 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52666,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52666,(1),null);
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

var seq__52679_52709 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__52680_52710 = null;
var count__52681_52711 = (0);
var i__52682_52712 = (0);
while(true){
if((i__52682_52712 < count__52681_52711)){
var vec__52695_52714 = chunk__52680_52710.cljs$core$IIndexed$_nth$arity$2(null,i__52682_52712);
var container_52715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52695_52714,(0),null);
var comp_52716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52695_52714,(1),null);
reagent.dom.re_render_component(comp_52716,container_52715);


var G__52717 = seq__52679_52709;
var G__52718 = chunk__52680_52710;
var G__52719 = count__52681_52711;
var G__52720 = (i__52682_52712 + (1));
seq__52679_52709 = G__52717;
chunk__52680_52710 = G__52718;
count__52681_52711 = G__52719;
i__52682_52712 = G__52720;
continue;
} else {
var temp__5753__auto___52721 = cljs.core.seq(seq__52679_52709);
if(temp__5753__auto___52721){
var seq__52679_52722__$1 = temp__5753__auto___52721;
if(cljs.core.chunked_seq_QMARK_(seq__52679_52722__$1)){
var c__4638__auto___52723 = cljs.core.chunk_first(seq__52679_52722__$1);
var G__52724 = cljs.core.chunk_rest(seq__52679_52722__$1);
var G__52725 = c__4638__auto___52723;
var G__52726 = cljs.core.count(c__4638__auto___52723);
var G__52727 = (0);
seq__52679_52709 = G__52724;
chunk__52680_52710 = G__52725;
count__52681_52711 = G__52726;
i__52682_52712 = G__52727;
continue;
} else {
var vec__52698_52728 = cljs.core.first(seq__52679_52722__$1);
var container_52729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52698_52728,(0),null);
var comp_52730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52698_52728,(1),null);
reagent.dom.re_render_component(comp_52730,container_52729);


var G__52731 = cljs.core.next(seq__52679_52722__$1);
var G__52732 = null;
var G__52733 = (0);
var G__52734 = (0);
seq__52679_52709 = G__52731;
chunk__52680_52710 = G__52732;
count__52681_52711 = G__52733;
i__52682_52712 = G__52734;
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
