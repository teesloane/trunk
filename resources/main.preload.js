var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$electron.js");
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

$CLJS.SHADOW_ENV.setLoaded("main.preload.js");

goog.provide('main.preload');
main.preload.hi = (function main$preload$hi(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.js.shim.module$electron.contextBridge,shadow.js.shim.module$electron.ipcRenderer], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hi there! i am preloaded"], 0));
});
main.preload.toMainChans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toMain","other-channels"], null);
main.preload.fromMainChans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toMain","other-channels"], null);
main.preload.send = (function main$preload$send(channel,data){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([channel]),main.preload.toMainChans))){
return shadow.js.shim.module$electron.ipcRenderer.send(channel,data);
} else {
return null;
}
});
main.preload.receive = (function main$preload$receive(channel,func){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([channel]),main.preload.fromMainChans))){
return shadow.js.shim.module$electron.ipcRenderer.on(channel,(function (event,data){
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(data) : func.call(null,data));
}));
} else {
return null;
}
});
cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(101),null], null), null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(101),(102)], null));
main.preload.main = (function main$preload$main(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDE47\u200D\uFE0F Establishing renderer's api from preload..."], 0));

return shadow.js.shim.module$electron.contextBridge.exposeInMainWorld("api",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"send","send",-652151114),main.preload.send,new cljs.core.Keyword(null,"receive","receive",1830053389),main.preload.receive], null)));
});
Object.defineProperty(module.exports, "hi", { enumerable: false, get: function() { return main.preload.hi; } });
Object.defineProperty(module.exports, "toMainChans", { enumerable: false, get: function() { return main.preload.toMainChans; } });
Object.defineProperty(module.exports, "fromMainChans", { enumerable: false, get: function() { return main.preload.fromMainChans; } });
Object.defineProperty(module.exports, "send", { enumerable: false, get: function() { return main.preload.send; } });
Object.defineProperty(module.exports, "receive", { enumerable: false, get: function() { return main.preload.receive; } });
Object.defineProperty(module.exports, "main", { enumerable: false, get: function() { return main.preload.main; } });
//# sourceMappingURL=main.preload.js.map
