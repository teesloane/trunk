var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.impl.protocols.js");

goog.provide('reagent.impl.protocols');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

var reagent$impl$protocols$Compiler$get_id$dyn_36511 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Compiler.get-id",this$);
}
}
});
reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
return reagent$impl$protocols$Compiler$get_id$dyn_36511(this$);
}
});

var reagent$impl$protocols$Compiler$parse_tag$dyn_36513 = (function (this$,tag_name,tag_value){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reagent.impl.protocols.parse_tag[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag_name,tag_value) : m__4510__auto__.call(null,this$,tag_name,tag_value));
} else {
var m__4508__auto__ = (reagent.impl.protocols.parse_tag["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag_name,tag_value) : m__4508__auto__.call(null,this$,tag_name,tag_value));
} else {
throw cljs.core.missing_protocol("Compiler.parse-tag",this$);
}
}
});
reagent.impl.protocols.parse_tag = (function reagent$impl$protocols$parse_tag(this$,tag_name,tag_value){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$parse_tag$arity$3 == null)))))){
return this$.reagent$impl$protocols$Compiler$parse_tag$arity$3(this$,tag_name,tag_value);
} else {
return reagent$impl$protocols$Compiler$parse_tag$dyn_36513(this$,tag_name,tag_value);
}
});

var reagent$impl$protocols$Compiler$as_element$dyn_36516 = (function (this$,x){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4510__auto__.call(null,this$,x));
} else {
var m__4508__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__4508__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("Compiler.as-element",this$);
}
}
});
reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
return reagent$impl$protocols$Compiler$as_element$dyn_36516(this$,x);
}
});

var reagent$impl$protocols$Compiler$make_element$dyn_36521 = (function (this$,argv,component,jsprops,first_child){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$5(this$,argv,component,jsprops,first_child) : m__4510__auto__.call(null,this$,argv,component,jsprops,first_child));
} else {
var m__4508__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$5(this$,argv,component,jsprops,first_child) : m__4508__auto__.call(null,this$,argv,component,jsprops,first_child));
} else {
throw cljs.core.missing_protocol("Compiler.make-element",this$);
}
}
});
reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
return reagent$impl$protocols$Compiler$make_element$dyn_36521(this$,argv,component,jsprops,first_child);
}
});

Object.defineProperty(module.exports, "Compiler", { enumerable: false, get: function() { return reagent.impl.protocols.Compiler; } });
Object.defineProperty(module.exports, "get_id", { enumerable: false, get: function() { return reagent.impl.protocols.get_id; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return reagent.impl.protocols.parse_tag; } });
Object.defineProperty(module.exports, "as_element", { enumerable: false, get: function() { return reagent.impl.protocols.as_element; } });
Object.defineProperty(module.exports, "make_element", { enumerable: false, get: function() { return reagent.impl.protocols.make_element; } });
//# sourceMappingURL=reagent.impl.protocols.js.map
