var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.dom.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./clojure.data.js");
require("./cljs.core.async.impl.protocols.js");
require("./shadow.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.object.js");

goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_39128 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._id[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._id["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_39128(this$);
}
});

var shadow$object$IObject$_type$dyn_39129 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._type[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._type["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_39129(this$);
}
});

var shadow$object$IObject$_data$dyn_39130 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._data[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._data["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_39130(this$);
}
});

var shadow$object$IObject$_update$dyn_39131 = (function (this$,update_fn){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._update[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4510__auto__.call(null,this$,update_fn));
} else {
var m__4508__auto__ = (shadow.object._update["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4508__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_39131(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_39132 = (function (this$,cause){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4510__auto__.call(null,this$,cause));
} else {
var m__4508__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4508__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_39132(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__38648 = arguments.length;
switch (G__38648) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4212__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5753__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5753__auto__)){
var oid = temp__5753__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5753__auto__)){
var parent_id = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__39134 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__39134;
continue;
}
} else {
return null;
}
break;
}
});
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38742_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__38742_SHARP_);
}),child_ids));
});
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__38757 = arguments.length;
switch (G__38757) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38760_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__38760_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__38761){
var map__38763 = p__38761;
var map__38763__$1 = cljs.core.__destructure_map(map__38763);
var oref = map__38763__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38763__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__38789 = arguments.length;
switch (G__38789) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38770_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__38770_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5751__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5751__auto__)){
var obj = temp__5751__auto__;
return obj;
} else {
var temp__5753__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__39137 = parent;
dom = G__39137;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39138 = arguments.length;
var i__4819__auto___39139 = (0);
while(true){
if((i__4819__auto___39139 < len__4818__auto___39138)){
args__4824__auto__.push((arguments[i__4819__auto___39139]));

var G__39140 = (i__4819__auto___39139 + (1));
i__4819__auto___39139 = G__39140;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5753__auto__)){
var reactions_to_trigger = temp__5753__auto__;
var seq__38832 = cljs.core.seq(reactions_to_trigger);
var chunk__38833 = null;
var count__38834 = (0);
var i__38835 = (0);
while(true){
if((i__38835 < count__38834)){
var rfn = chunk__38833.cljs$core$IIndexed$_nth$arity$2(null,i__38835);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__39141 = seq__38832;
var G__39142 = chunk__38833;
var G__39143 = count__38834;
var G__39144 = (i__38835 + (1));
seq__38832 = G__39141;
chunk__38833 = G__39142;
count__38834 = G__39143;
i__38835 = G__39144;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__38832);
if(temp__5753__auto____$1){
var seq__38832__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38832__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38832__$1);
var G__39145 = cljs.core.chunk_rest(seq__38832__$1);
var G__39146 = c__4638__auto__;
var G__39147 = cljs.core.count(c__4638__auto__);
var G__39148 = (0);
seq__38832 = G__39145;
chunk__38833 = G__39146;
count__38834 = G__39147;
i__38835 = G__39148;
continue;
} else {
var rfn = cljs.core.first(seq__38832__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__39149 = cljs.core.next(seq__38832__$1);
var G__39150 = null;
var G__39151 = (0);
var G__39152 = (0);
seq__38832 = G__39149;
chunk__38833 = G__39150;
count__38834 = G__39151;
i__38835 = G__39152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq38816){
var G__38817 = cljs.core.first(seq38816);
var seq38816__$1 = cljs.core.next(seq38816);
var G__38818 = cljs.core.first(seq38816__$1);
var seq38816__$2 = cljs.core.next(seq38816__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38817,G__38818,seq38816__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__38837_39153 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__38838_39154 = null;
var count__38839_39155 = (0);
var i__38840_39156 = (0);
while(true){
if((i__38840_39156 < count__38839_39155)){
var child_39157 = chunk__38838_39154.cljs$core$IIndexed$_nth$arity$2(null,i__38840_39156);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_39157,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_39157,ev,notify_fn));


var G__39158 = seq__38837_39153;
var G__39159 = chunk__38838_39154;
var G__39160 = count__38839_39155;
var G__39161 = (i__38840_39156 + (1));
seq__38837_39153 = G__39158;
chunk__38838_39154 = G__39159;
count__38839_39155 = G__39160;
i__38840_39156 = G__39161;
continue;
} else {
var temp__5753__auto___39162 = cljs.core.seq(seq__38837_39153);
if(temp__5753__auto___39162){
var seq__38837_39163__$1 = temp__5753__auto___39162;
if(cljs.core.chunked_seq_QMARK_(seq__38837_39163__$1)){
var c__4638__auto___39164 = cljs.core.chunk_first(seq__38837_39163__$1);
var G__39165 = cljs.core.chunk_rest(seq__38837_39163__$1);
var G__39166 = c__4638__auto___39164;
var G__39167 = cljs.core.count(c__4638__auto___39164);
var G__39168 = (0);
seq__38837_39153 = G__39165;
chunk__38838_39154 = G__39166;
count__38839_39155 = G__39167;
i__38840_39156 = G__39168;
continue;
} else {
var child_39169 = cljs.core.first(seq__38837_39163__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_39169,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_39169,ev,notify_fn));


var G__39170 = cljs.core.next(seq__38837_39163__$1);
var G__39171 = null;
var G__39172 = (0);
var G__39173 = (0);
seq__38837_39153 = G__39170;
chunk__38838_39154 = G__39171;
count__38839_39155 = G__39172;
i__38840_39156 = G__39173;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39175 = arguments.length;
var i__4819__auto___39179 = (0);
while(true){
if((i__4819__auto___39179 < len__4818__auto___39175)){
args__4824__auto__.push((arguments[i__4819__auto___39179]));

var G__39180 = (i__4819__auto___39179 + (1));
i__4819__auto___39179 = G__39180;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq38843){
var G__38844 = cljs.core.first(seq38843);
var seq38843__$1 = cljs.core.next(seq38843);
var G__38845 = cljs.core.first(seq38843__$1);
var seq38843__$2 = cljs.core.next(seq38843__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38844,G__38845,seq38843__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39181 = arguments.length;
var i__4819__auto___39182 = (0);
while(true){
if((i__4819__auto___39182 < len__4818__auto___39181)){
args__4824__auto__.push((arguments[i__4819__auto___39182]));

var G__39183 = (i__4819__auto___39182 + (1));
i__4819__auto___39182 = G__39183;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__39184 = shadow.object.get_parent(current);
current = G__39184;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq38846){
var G__38847 = cljs.core.first(seq38846);
var seq38846__$1 = cljs.core.next(seq38846);
var G__38848 = cljs.core.first(seq38846__$1);
var seq38846__$2 = cljs.core.next(seq38846__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38847,G__38848,seq38846__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39185 = arguments.length;
var i__4819__auto___39186 = (0);
while(true){
if((i__4819__auto___39186 < len__4818__auto___39185)){
args__4824__auto__.push((arguments[i__4819__auto___39186]));

var G__39187 = (i__4819__auto___39186 + (1));
i__4819__auto___39186 = G__39187;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq38854){
var G__38855 = cljs.core.first(seq38854);
var seq38854__$1 = cljs.core.next(seq38854);
var G__38856 = cljs.core.first(seq38854__$1);
var seq38854__$2 = cljs.core.next(seq38854__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38855,G__38856,seq38854__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5751__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5751__auto__)){
var custom_remove = temp__5751__auto__;
var G__38956 = this$;
var G__38957 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__38956,G__38957) : custom_remove.call(null,G__38956,G__38957));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__38976 = arguments.length;
switch (G__38976) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__38981 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__38982 = null;
var count__38983 = (0);
var i__38984 = (0);
while(true){
if((i__38984 < count__38983)){
var vec__38995 = chunk__38982.cljs$core$IIndexed$_nth$arity$2(null,i__38984);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38995,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38995,(1),null);
var ev_def = vec__38995;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_39189__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__38981,chunk__38982,count__38983,i__38984,vec__38995,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__38981,chunk__38982,count__38983,i__38984,vec__38995,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__38981,chunk__38982,count__38983,i__38984,handler_39189__$1,vec__38995,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_39189__$1.cljs$core$IFn$_invoke$arity$3 ? handler_39189__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_39189__$1.call(null,oref,e,el));
});})(seq__38981,chunk__38982,count__38983,i__38984,handler_39189__$1,vec__38995,ev,handler,ev_def))
);


var G__39190 = seq__38981;
var G__39191 = chunk__38982;
var G__39192 = count__38983;
var G__39193 = (i__38984 + (1));
seq__38981 = G__39190;
chunk__38982 = G__39191;
count__38983 = G__39192;
i__38984 = G__39193;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38981);
if(temp__5753__auto__){
var seq__38981__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38981__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38981__$1);
var G__39194 = cljs.core.chunk_rest(seq__38981__$1);
var G__39195 = c__4638__auto__;
var G__39196 = cljs.core.count(c__4638__auto__);
var G__39197 = (0);
seq__38981 = G__39194;
chunk__38982 = G__39195;
count__38983 = G__39196;
i__38984 = G__39197;
continue;
} else {
var vec__38998 = cljs.core.first(seq__38981__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38998,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38998,(1),null);
var ev_def = vec__38998;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_39198__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__38981,chunk__38982,count__38983,i__38984,vec__38998,ev,handler,ev_def,seq__38981__$1,temp__5753__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__38981,chunk__38982,count__38983,i__38984,vec__38998,ev,handler,ev_def,seq__38981__$1,temp__5753__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__38981,chunk__38982,count__38983,i__38984,handler_39198__$1,vec__38998,ev,handler,ev_def,seq__38981__$1,temp__5753__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_39198__$1.cljs$core$IFn$_invoke$arity$3 ? handler_39198__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_39198__$1.call(null,oref,e,el));
});})(seq__38981,chunk__38982,count__38983,i__38984,handler_39198__$1,vec__38998,ev,handler,ev_def,seq__38981__$1,temp__5753__auto__))
);


var G__39199 = cljs.core.next(seq__38981__$1);
var G__39200 = null;
var G__39201 = (0);
var G__39202 = (0);
seq__38981 = G__39199;
chunk__38982 = G__39200;
count__38983 = G__39201;
i__38984 = G__39202;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__39001){
var vec__39002 = p__39001;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39002,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39002,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = event;
if(cljs.core.truth_(and__4210__auto__)){
return handler;
} else {
return and__4210__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39203 = arguments.length;
var i__4819__auto___39204 = (0);
while(true){
if((i__4819__auto___39204 < len__4818__auto___39203)){
args__4824__auto__.push((arguments[i__4819__auto___39204]));

var G__39205 = (i__4819__auto___39204 + (1));
i__4819__auto___39204 = G__39205;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e39007){if((e39007 instanceof Object)){
var e = e39007;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e39007;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq39005){
var G__39006 = cljs.core.first(seq39005);
var seq39005__$1 = cljs.core.next(seq39005);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39006,seq39005__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__39009 = arguments.length;
switch (G__39009) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__39010 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__39010) : shadow.dom.build.call(null,G__39010));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k39012,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__39016 = k39012;
var G__39016__$1 = (((G__39016 instanceof cljs.core.Keyword))?G__39016.fqn:null);
switch (G__39016__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39012,else__4464__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__39017){
var vec__39018 = p__39017;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.object.Watch{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39011){
var self__ = this;
var G__39011__$1 = this;
return (new cljs.core.RecordIter((0),G__39011__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39013,other39014){
var self__ = this;
var this39013__$1 = this;
return (((!((other39014 == null)))) && ((((this39013__$1.constructor === other39014.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39013__$1.key,other39014.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39013__$1.handler,other39014.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39013__$1.__extmap,other39014.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k39012){
var self__ = this;
var this__4468__auto____$1 = this;
var G__39021 = k39012;
var G__39021__$1 = (((G__39021 instanceof cljs.core.Keyword))?G__39021.fqn:null);
switch (G__39021__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39012);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__39011){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__39022 = cljs.core.keyword_identical_QMARK_;
var expr__39023 = k__4470__auto__;
if(cljs.core.truth_((pred__39022.cljs$core$IFn$_invoke$arity$2 ? pred__39022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__39023) : pred__39022.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__39023)))){
return (new shadow.object.Watch(G__39011,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39022.cljs$core$IFn$_invoke$arity$2 ? pred__39022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__39023) : pred__39022.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__39023)))){
return (new shadow.object.Watch(self__.key,G__39011,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__39011),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__39011){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__39011,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__39015){
var extmap__4501__auto__ = (function (){var G__39025 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39015,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__39015)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39025);
} else {
return G__39025;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__39015),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__39015),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39026_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__39026_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__39027 = cljs.core.seq(self__.watches);
var chunk__39028 = null;
var count__39029 = (0);
var i__39030 = (0);
while(true){
if((i__39030 < count__39029)){
var map__39033 = chunk__39028.cljs$core$IIndexed$_nth$arity$2(null,i__39030);
var map__39033__$1 = cljs.core.__destructure_map(map__39033);
var watch = map__39033__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39033__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39033__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__39222 = seq__39027;
var G__39223 = chunk__39028;
var G__39224 = count__39029;
var G__39225 = (i__39030 + (1));
seq__39027 = G__39222;
chunk__39028 = G__39223;
count__39029 = G__39224;
i__39030 = G__39225;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39027);
if(temp__5753__auto__){
var seq__39027__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39027__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39027__$1);
var G__39226 = cljs.core.chunk_rest(seq__39027__$1);
var G__39227 = c__4638__auto__;
var G__39228 = cljs.core.count(c__4638__auto__);
var G__39229 = (0);
seq__39027 = G__39226;
chunk__39028 = G__39227;
count__39029 = G__39228;
i__39030 = G__39229;
continue;
} else {
var map__39034 = cljs.core.first(seq__39027__$1);
var map__39034__$1 = cljs.core.__destructure_map(map__39034);
var watch = map__39034__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__39230 = cljs.core.next(seq__39027__$1);
var G__39231 = null;
var G__39232 = (0);
var G__39233 = (0);
seq__39027 = G__39230;
chunk__39028 = G__39231;
count__39029 = G__39232;
i__39030 = G__39233;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__39035_39234 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__39036_39235 = null;
var count__39037_39236 = (0);
var i__39038_39237 = (0);
while(true){
if((i__39038_39237 < count__39037_39236)){
var child_39238 = chunk__39036_39235.cljs$core$IIndexed$_nth$arity$2(null,i__39038_39237);
shadow.object._destroy_BANG_(child_39238,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__39239 = seq__39035_39234;
var G__39240 = chunk__39036_39235;
var G__39241 = count__39037_39236;
var G__39242 = (i__39038_39237 + (1));
seq__39035_39234 = G__39239;
chunk__39036_39235 = G__39240;
count__39037_39236 = G__39241;
i__39038_39237 = G__39242;
continue;
} else {
var temp__5753__auto___39243 = cljs.core.seq(seq__39035_39234);
if(temp__5753__auto___39243){
var seq__39035_39244__$1 = temp__5753__auto___39243;
if(cljs.core.chunked_seq_QMARK_(seq__39035_39244__$1)){
var c__4638__auto___39245 = cljs.core.chunk_first(seq__39035_39244__$1);
var G__39246 = cljs.core.chunk_rest(seq__39035_39244__$1);
var G__39247 = c__4638__auto___39245;
var G__39248 = cljs.core.count(c__4638__auto___39245);
var G__39249 = (0);
seq__39035_39234 = G__39246;
chunk__39036_39235 = G__39247;
count__39037_39236 = G__39248;
i__39038_39237 = G__39249;
continue;
} else {
var child_39250 = cljs.core.first(seq__39035_39244__$1);
shadow.object._destroy_BANG_(child_39250,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__39251 = cljs.core.next(seq__39035_39244__$1);
var G__39252 = null;
var G__39253 = (0);
var G__39254 = (0);
seq__39035_39234 = G__39251;
chunk__39036_39235 = G__39252;
count__39037_39236 = G__39253;
i__39038_39237 = G__39254;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_39255 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_39255 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_39255);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__39040 = arguments.length;
switch (G__39040) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__39042 = arguments.length;
switch (G__39042) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39262 = arguments.length;
var i__4819__auto___39263 = (0);
while(true){
if((i__4819__auto___39263 < len__4818__auto___39262)){
args__4824__auto__.push((arguments[i__4819__auto___39263]));

var G__39264 = (i__4819__auto___39263 + (1));
i__4819__auto___39263 = G__39264;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_39265 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5751__auto___39266 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5751__auto___39266)){
var dom_39267 = temp__5751__auto___39266;
shadow.dom.set_data(dom_39267,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_39267,dom_events_39265);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_39267], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_39267], 0));
} else {
var temp__5753__auto___39268 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___39268)){
var dom_fn_39269 = temp__5753__auto___39268;
var dom_39270 = (function (){var G__39047 = (dom_fn_39269.cljs$core$IFn$_invoke$arity$2 ? dom_fn_39269.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_39269.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__39047) : shadow.dom.build.call(null,G__39047));
})();
shadow.dom.set_data(dom_39270,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_39270], 0));

shadow.object.bind_dom_events(oref,dom_39270,dom_events_39265);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_39270], 0));
} else {
}
}

var temp__5753__auto___39271 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___39271)){
var watches_39272 = temp__5753__auto___39271;
var seq__39048_39273 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_39272));
var chunk__39049_39274 = null;
var count__39050_39275 = (0);
var i__39051_39276 = (0);
while(true){
if((i__39051_39276 < count__39050_39275)){
var vec__39058_39277 = chunk__39049_39274.cljs$core$IIndexed$_nth$arity$2(null,i__39051_39276);
var attr_39278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058_39277,(0),null);
var handler_39279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058_39277,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_39278,((function (seq__39048_39273,chunk__39049_39274,count__39050_39275,i__39051_39276,vec__39058_39277,attr_39278,handler_39279,watches_39272,temp__5753__auto___39271,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_39279.cljs$core$IFn$_invoke$arity$3 ? handler_39279.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_39279.call(null,oref,old,new$));
});})(seq__39048_39273,chunk__39049_39274,count__39050_39275,i__39051_39276,vec__39058_39277,attr_39278,handler_39279,watches_39272,temp__5753__auto___39271,oid,parent,result_chan,odef,obj,oref))
);


var G__39280 = seq__39048_39273;
var G__39281 = chunk__39049_39274;
var G__39282 = count__39050_39275;
var G__39283 = (i__39051_39276 + (1));
seq__39048_39273 = G__39280;
chunk__39049_39274 = G__39281;
count__39050_39275 = G__39282;
i__39051_39276 = G__39283;
continue;
} else {
var temp__5753__auto___39284__$1 = cljs.core.seq(seq__39048_39273);
if(temp__5753__auto___39284__$1){
var seq__39048_39285__$1 = temp__5753__auto___39284__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39048_39285__$1)){
var c__4638__auto___39286 = cljs.core.chunk_first(seq__39048_39285__$1);
var G__39288 = cljs.core.chunk_rest(seq__39048_39285__$1);
var G__39289 = c__4638__auto___39286;
var G__39290 = cljs.core.count(c__4638__auto___39286);
var G__39291 = (0);
seq__39048_39273 = G__39288;
chunk__39049_39274 = G__39289;
count__39050_39275 = G__39290;
i__39051_39276 = G__39291;
continue;
} else {
var vec__39061_39292 = cljs.core.first(seq__39048_39285__$1);
var attr_39293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39061_39292,(0),null);
var handler_39294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39061_39292,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_39293,((function (seq__39048_39273,chunk__39049_39274,count__39050_39275,i__39051_39276,vec__39061_39292,attr_39293,handler_39294,seq__39048_39285__$1,temp__5753__auto___39284__$1,watches_39272,temp__5753__auto___39271,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_39294.cljs$core$IFn$_invoke$arity$3 ? handler_39294.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_39294.call(null,oref,old,new$));
});})(seq__39048_39273,chunk__39049_39274,count__39050_39275,i__39051_39276,vec__39061_39292,attr_39293,handler_39294,seq__39048_39285__$1,temp__5753__auto___39284__$1,watches_39272,temp__5753__auto___39271,oid,parent,result_chan,odef,obj,oref))
);


var G__39295 = cljs.core.next(seq__39048_39285__$1);
var G__39296 = null;
var G__39297 = (0);
var G__39298 = (0);
seq__39048_39273 = G__39295;
chunk__39049_39274 = G__39296;
count__39050_39275 = G__39297;
i__39051_39276 = G__39298;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq39044){
var G__39045 = cljs.core.first(seq39044);
var seq39044__$1 = cljs.core.next(seq39044);
var G__39046 = cljs.core.first(seq39044__$1);
var seq39044__$2 = cljs.core.next(seq39044__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39045,G__39046,seq39044__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__39066 = arguments.length;
switch (G__39066) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__39064_SHARP_){
var G__39067 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__39064_SHARP_) : node_gen.call(null,p1__39064_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__39067) : shadow.dom.build.call(null,G__39067));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__39068_39307 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__39069_39308 = null;
var count__39070_39309 = (0);
var i__39071_39310 = (0);
while(true){
if((i__39071_39310 < count__39070_39309)){
var obj_39312 = chunk__39069_39308.cljs$core$IIndexed$_nth$arity$2(null,i__39071_39310);
var obj_39313__$1 = shadow.object.get_from_dom(obj_39312);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_39313__$1);


var G__39314 = seq__39068_39307;
var G__39315 = chunk__39069_39308;
var G__39316 = count__39070_39309;
var G__39317 = (i__39071_39310 + (1));
seq__39068_39307 = G__39314;
chunk__39069_39308 = G__39315;
count__39070_39309 = G__39316;
i__39071_39310 = G__39317;
continue;
} else {
var temp__5753__auto___39318 = cljs.core.seq(seq__39068_39307);
if(temp__5753__auto___39318){
var seq__39068_39319__$1 = temp__5753__auto___39318;
if(cljs.core.chunked_seq_QMARK_(seq__39068_39319__$1)){
var c__4638__auto___39320 = cljs.core.chunk_first(seq__39068_39319__$1);
var G__39321 = cljs.core.chunk_rest(seq__39068_39319__$1);
var G__39322 = c__4638__auto___39320;
var G__39323 = cljs.core.count(c__4638__auto___39320);
var G__39324 = (0);
seq__39068_39307 = G__39321;
chunk__39069_39308 = G__39322;
count__39070_39309 = G__39323;
i__39071_39310 = G__39324;
continue;
} else {
var obj_39325 = cljs.core.first(seq__39068_39319__$1);
var obj_39326__$1 = shadow.object.get_from_dom(obj_39325);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_39326__$1);


var G__39327 = cljs.core.next(seq__39068_39319__$1);
var G__39328 = null;
var G__39329 = (0);
var G__39330 = (0);
seq__39068_39307 = G__39327;
chunk__39069_39308 = G__39328;
count__39070_39309 = G__39329;
i__39071_39310 = G__39330;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__39074 = arguments.length;
switch (G__39074) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__39072_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__39072_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__39075){
var vec__39076 = p__39075;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39076,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39076,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__39079_39336 = cljs.core.seq((function (){var G__39084 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__39084) : coll_transform.call(null,G__39084));
})());
var chunk__39080_39337 = null;
var count__39081_39338 = (0);
var i__39082_39339 = (0);
while(true){
if((i__39082_39339 < count__39081_39338)){
var item_39340 = chunk__39080_39337.cljs$core$IIndexed$_nth$arity$2(null,i__39082_39339);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39340));


var G__39341 = seq__39079_39336;
var G__39342 = chunk__39080_39337;
var G__39343 = count__39081_39338;
var G__39344 = (i__39082_39339 + (1));
seq__39079_39336 = G__39341;
chunk__39080_39337 = G__39342;
count__39081_39338 = G__39343;
i__39082_39339 = G__39344;
continue;
} else {
var temp__5753__auto___39345 = cljs.core.seq(seq__39079_39336);
if(temp__5753__auto___39345){
var seq__39079_39346__$1 = temp__5753__auto___39345;
if(cljs.core.chunked_seq_QMARK_(seq__39079_39346__$1)){
var c__4638__auto___39347 = cljs.core.chunk_first(seq__39079_39346__$1);
var G__39348 = cljs.core.chunk_rest(seq__39079_39346__$1);
var G__39349 = c__4638__auto___39347;
var G__39350 = cljs.core.count(c__4638__auto___39347);
var G__39351 = (0);
seq__39079_39336 = G__39348;
chunk__39080_39337 = G__39349;
count__39081_39338 = G__39350;
i__39082_39339 = G__39351;
continue;
} else {
var item_39352 = cljs.core.first(seq__39079_39346__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39352));


var G__39353 = cljs.core.next(seq__39079_39346__$1);
var G__39354 = null;
var G__39355 = (0);
var G__39356 = (0);
seq__39079_39336 = G__39353;
chunk__39080_39337 = G__39354;
count__39081_39338 = G__39355;
i__39082_39339 = G__39356;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4298__auto__ = count_new;
var y__4299__auto__ = count_children;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var n__4695__auto___39357 = count_children__$1;
var idx_39358 = (0);
while(true){
if((idx_39358 < n__4695__auto___39357)){
var cn_39359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_39358);
var cc_39360 = shadow.object.get_from_dom(cn_39359);
var ckey_39361 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_39360);
var cval_39362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_39360,item_key);
var vec__39085_39363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_39358);
var nkey_39364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39085_39363,(0),null);
var nval_39365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39085_39363,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_39361,nkey_39364)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_39362,nval_39365)))){
} else {
var new_obj_39374 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_39364,nval_39365], null));
shadow.dom.replace_node(cn_39359,new_obj_39374);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_39360);

shadow.object.notify_tree_BANG_(new_obj_39374,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__39375 = (idx_39358 + (1));
idx_39358 = G__39375;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__39088_39376 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__39089_39377 = null;
var count__39090_39378 = (0);
var i__39091_39379 = (0);
while(true){
if((i__39091_39379 < count__39090_39378)){
var item_39380 = chunk__39089_39377.cljs$core$IIndexed$_nth$arity$2(null,i__39091_39379);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39380));


var G__39381 = seq__39088_39376;
var G__39382 = chunk__39089_39377;
var G__39383 = count__39090_39378;
var G__39384 = (i__39091_39379 + (1));
seq__39088_39376 = G__39381;
chunk__39089_39377 = G__39382;
count__39090_39378 = G__39383;
i__39091_39379 = G__39384;
continue;
} else {
var temp__5753__auto___39385 = cljs.core.seq(seq__39088_39376);
if(temp__5753__auto___39385){
var seq__39088_39386__$1 = temp__5753__auto___39385;
if(cljs.core.chunked_seq_QMARK_(seq__39088_39386__$1)){
var c__4638__auto___39387 = cljs.core.chunk_first(seq__39088_39386__$1);
var G__39388 = cljs.core.chunk_rest(seq__39088_39386__$1);
var G__39389 = c__4638__auto___39387;
var G__39390 = cljs.core.count(c__4638__auto___39387);
var G__39391 = (0);
seq__39088_39376 = G__39388;
chunk__39089_39377 = G__39389;
count__39090_39378 = G__39390;
i__39091_39379 = G__39391;
continue;
} else {
var item_39393 = cljs.core.first(seq__39088_39386__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_39393));


var G__39394 = cljs.core.next(seq__39088_39386__$1);
var G__39395 = null;
var G__39396 = (0);
var G__39397 = (0);
seq__39088_39376 = G__39394;
chunk__39089_39377 = G__39395;
count__39090_39378 = G__39396;
i__39091_39379 = G__39397;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4210__auto__ = key;
if(cljs.core.truth_(and__4210__auto__)){
return path;
} else {
return and__4210__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__39092 = "inspect!";
var G__39093 = shadow.object._id(oref);
var G__39094 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__39095 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__39092,G__39093,G__39094,G__39095) : shadow.object.info.call(null,G__39092,G__39093,G__39094,G__39095));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__39096_39402 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__39097_39403 = null;
var count__39098_39404 = (0);
var i__39099_39405 = (0);
while(true){
if((i__39099_39405 < count__39098_39404)){
var vec__39114_39406 = chunk__39097_39403.cljs$core$IIndexed$_nth$arity$2(null,i__39099_39405);
var id_39407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114_39406,(0),null);
var oref_39408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114_39406,(1),null);
var G__39117_39410 = "dump";
var G__39118_39411 = id_39407;
var G__39119_39412 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_39408)], 0));
var G__39120_39413 = cljs.core.deref(shadow.object._data(oref_39408));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__39117_39410,G__39118_39411,G__39119_39412,G__39120_39413) : shadow.object.info.call(null,G__39117_39410,G__39118_39411,G__39119_39412,G__39120_39413));


var G__39414 = seq__39096_39402;
var G__39415 = chunk__39097_39403;
var G__39416 = count__39098_39404;
var G__39417 = (i__39099_39405 + (1));
seq__39096_39402 = G__39414;
chunk__39097_39403 = G__39415;
count__39098_39404 = G__39416;
i__39099_39405 = G__39417;
continue;
} else {
var temp__5753__auto___39418 = cljs.core.seq(seq__39096_39402);
if(temp__5753__auto___39418){
var seq__39096_39419__$1 = temp__5753__auto___39418;
if(cljs.core.chunked_seq_QMARK_(seq__39096_39419__$1)){
var c__4638__auto___39420 = cljs.core.chunk_first(seq__39096_39419__$1);
var G__39421 = cljs.core.chunk_rest(seq__39096_39419__$1);
var G__39422 = c__4638__auto___39420;
var G__39423 = cljs.core.count(c__4638__auto___39420);
var G__39424 = (0);
seq__39096_39402 = G__39421;
chunk__39097_39403 = G__39422;
count__39098_39404 = G__39423;
i__39099_39405 = G__39424;
continue;
} else {
var vec__39121_39425 = cljs.core.first(seq__39096_39419__$1);
var id_39426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39121_39425,(0),null);
var oref_39427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39121_39425,(1),null);
var G__39124_39428 = "dump";
var G__39125_39429 = id_39426;
var G__39126_39430 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_39427)], 0));
var G__39127_39431 = cljs.core.deref(shadow.object._data(oref_39427));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__39124_39428,G__39125_39429,G__39126_39430,G__39127_39431) : shadow.object.info.call(null,G__39124_39428,G__39125_39429,G__39126_39430,G__39127_39431));


var G__39432 = cljs.core.next(seq__39096_39419__$1);
var G__39433 = null;
var G__39434 = (0);
var G__39435 = (0);
seq__39096_39402 = G__39432;
chunk__39097_39403 = G__39433;
count__39098_39404 = G__39434;
i__39099_39405 = G__39435;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
Object.defineProperty(module.exports, "dump_BANG_", { enumerable: true, get: function() { return shadow.object.dump_BANG_; } });
Object.defineProperty(module.exports, "tree_seq", { enumerable: true, get: function() { return shadow.object.tree_seq; } });
Object.defineProperty(module.exports, "object_defs", { enumerable: false, get: function() { return shadow.object.object_defs; } });
Object.defineProperty(module.exports, "get_from_dom", { enumerable: true, get: function() { return shadow.object.get_from_dom; } });
Object.defineProperty(module.exports, "get_siblings", { enumerable: false, get: function() { return shadow.object.get_siblings; } });
Object.defineProperty(module.exports, "get_parent_of_type", { enumerable: true, get: function() { return shadow.object.get_parent_of_type; } });
Object.defineProperty(module.exports, "alive_QMARK_", { enumerable: false, get: function() { return shadow.object.alive_QMARK_; } });
Object.defineProperty(module.exports, "notify_down_BANG_", { enumerable: false, get: function() { return shadow.object.notify_down_BANG_; } });
Object.defineProperty(module.exports, "return_value", { enumerable: false, get: function() { return shadow.object.return_value; } });
Object.defineProperty(module.exports, "reaction_merge", { enumerable: false, get: function() { return shadow.object.reaction_merge; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return shadow.object.log; } });
Object.defineProperty(module.exports, "add_reaction_BANG_", { enumerable: false, get: function() { return shadow.object.add_reaction_BANG_; } });
Object.defineProperty(module.exports, "find_containing_object", { enumerable: false, get: function() { return shadow.object.find_containing_object; } });
Object.defineProperty(module.exports, "get_dom", { enumerable: true, get: function() { return shadow.object.get_dom; } });
Object.defineProperty(module.exports, "dom_enter", { enumerable: false, get: function() { return shadow.object.dom_enter; } });
Object.defineProperty(module.exports, "do_notify_tree", { enumerable: false, get: function() { return shadow.object.do_notify_tree; } });
Object.defineProperty(module.exports, "bind", { enumerable: false, get: function() { return shadow.object.bind; } });
Object.defineProperty(module.exports, "notify_tree_BANG_", { enumerable: false, get: function() { return shadow.object.notify_tree_BANG_; } });
Object.defineProperty(module.exports, "notify_BANG_", { enumerable: false, get: function() { return shadow.object.notify_BANG_; } });
Object.defineProperty(module.exports, "get_type", { enumerable: false, get: function() { return shadow.object.get_type; } });
Object.defineProperty(module.exports, "unmunge", { enumerable: false, get: function() { return shadow.object.unmunge; } });
Object.defineProperty(module.exports, "map__GT_Watch", { enumerable: false, get: function() { return shadow.object.map__GT_Watch; } });
Object.defineProperty(module.exports, "destroy_BANG_", { enumerable: false, get: function() { return shadow.object.destroy_BANG_; } });
Object.defineProperty(module.exports, "instance_parent", { enumerable: false, get: function() { return shadow.object.instance_parent; } });
Object.defineProperty(module.exports, "dom_destroy", { enumerable: false, get: function() { return shadow.object.dom_destroy; } });
Object.defineProperty(module.exports, "ObjectRef", { enumerable: false, get: function() { return shadow.object.ObjectRef; } });
Object.defineProperty(module.exports, "notify_up_BANG_", { enumerable: false, get: function() { return shadow.object.notify_up_BANG_; } });
Object.defineProperty(module.exports, "next_id", { enumerable: false, get: function() { return shadow.object.next_id; } });
Object.defineProperty(module.exports, "_type", { enumerable: false, get: function() { return shadow.object._type; } });
Object.defineProperty(module.exports, "remove_in_parent_BANG_", { enumerable: false, get: function() { return shadow.object.remove_in_parent_BANG_; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: true, get: function() { return shadow.object.get_parent; } });
Object.defineProperty(module.exports, "create", { enumerable: false, get: function() { return shadow.object.create; } });
Object.defineProperty(module.exports, "warn", { enumerable: false, get: function() { return shadow.object.warn; } });
Object.defineProperty(module.exports, "__GT_ObjectRef", { enumerable: false, get: function() { return shadow.object.__GT_ObjectRef; } });
Object.defineProperty(module.exports, "_update", { enumerable: false, get: function() { return shadow.object._update; } });
Object.defineProperty(module.exports, "get_children_of_type", { enumerable: false, get: function() { return shadow.object.get_children_of_type; } });
Object.defineProperty(module.exports, "coll_destroy_children", { enumerable: false, get: function() { return shadow.object.coll_destroy_children; } });
Object.defineProperty(module.exports, "define_event", { enumerable: false, get: function() { return shadow.object.define_event; } });
Object.defineProperty(module.exports, "events", { enumerable: false, get: function() { return shadow.object.events; } });
Object.defineProperty(module.exports, "_id", { enumerable: false, get: function() { return shadow.object._id; } });
Object.defineProperty(module.exports, "is_object_QMARK_", { enumerable: false, get: function() { return shadow.object.is_object_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Watch", { enumerable: false, get: function() { return shadow.object.__GT_Watch; } });
Object.defineProperty(module.exports, "_data", { enumerable: false, get: function() { return shadow.object._data; } });
Object.defineProperty(module.exports, "debug", { enumerable: false, get: function() { return shadow.object.debug; } });
Object.defineProperty(module.exports, "behavior_fns", { enumerable: false, get: function() { return shadow.object.behavior_fns; } });
Object.defineProperty(module.exports, "get_type_attr", { enumerable: false, get: function() { return shadow.object.get_type_attr; } });
Object.defineProperty(module.exports, "inspect_BANG_", { enumerable: false, get: function() { return shadow.object.inspect_BANG_; } });
Object.defineProperty(module.exports, "merge_behaviors", { enumerable: false, get: function() { return shadow.object.merge_behaviors; } });
Object.defineProperty(module.exports, "get_children", { enumerable: true, get: function() { return shadow.object.get_children; } });
Object.defineProperty(module.exports, "equal_QMARK_", { enumerable: false, get: function() { return shadow.object.equal_QMARK_; } });
Object.defineProperty(module.exports, "define", { enumerable: false, get: function() { return shadow.object.define; } });
Object.defineProperty(module.exports, "bind_children", { enumerable: false, get: function() { return shadow.object.bind_children; } });
Object.defineProperty(module.exports, "get_siblings_of_type", { enumerable: false, get: function() { return shadow.object.get_siblings_of_type; } });
Object.defineProperty(module.exports, "bind_change", { enumerable: false, get: function() { return shadow.object.bind_change; } });
Object.defineProperty(module.exports, "IObject", { enumerable: false, get: function() { return shadow.object.IObject; } });
Object.defineProperty(module.exports, "obj_id", { enumerable: false, get: function() { return shadow.object.obj_id; } });
Object.defineProperty(module.exports, "get_collection_item", { enumerable: false, get: function() { return shadow.object.get_collection_item; } });
Object.defineProperty(module.exports, "instances", { enumerable: false, get: function() { return shadow.object.instances; } });
Object.defineProperty(module.exports, "console_friendly", { enumerable: false, get: function() { return shadow.object.console_friendly; } });
Object.defineProperty(module.exports, "bind_simple", { enumerable: false, get: function() { return shadow.object.bind_simple; } });
Object.defineProperty(module.exports, "_destroy_BANG_", { enumerable: false, get: function() { return shadow.object._destroy_BANG_; } });
Object.defineProperty(module.exports, "update_BANG_", { enumerable: false, get: function() { return shadow.object.update_BANG_; } });
Object.defineProperty(module.exports, "bind_dom_events", { enumerable: false, get: function() { return shadow.object.bind_dom_events; } });
Object.defineProperty(module.exports, "info", { enumerable: false, get: function() { return shadow.object.info; } });
Object.defineProperty(module.exports, "merge_reactions", { enumerable: false, get: function() { return shadow.object.merge_reactions; } });
Object.defineProperty(module.exports, "make_dom", { enumerable: false, get: function() { return shadow.object.make_dom; } });
Object.defineProperty(module.exports, "set_parent_BANG_", { enumerable: false, get: function() { return shadow.object.set_parent_BANG_; } });
Object.defineProperty(module.exports, "instance_children", { enumerable: false, get: function() { return shadow.object.instance_children; } });
Object.defineProperty(module.exports, "merge_defaults", { enumerable: false, get: function() { return shadow.object.merge_defaults; } });
Object.defineProperty(module.exports, "get_by_id", { enumerable: true, get: function() { return shadow.object.get_by_id; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return shadow.object.error; } });
Object.defineProperty(module.exports, "Watch", { enumerable: false, get: function() { return shadow.object.Watch; } });
//# sourceMappingURL=shadow.object.js.map
