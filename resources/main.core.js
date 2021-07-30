var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$electron.js");
require("./shadow.js.shim.module$path.js");
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

$CLJS.SHADOW_ENV.setLoaded("main.core.js");

goog.provide('main.core');
main.core.main_window = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
main.core.init_browser = (function main$core$init_browser(){
cljs.core.reset_BANG_(main.core.main_window,(new shadow.js.shim.module$electron.BrowserWindow(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),false,new cljs.core.Keyword(null,"preload","preload",1646824722),shadow.js.shim.module$path.join([cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/preload.js"].join(''))], null)], null)))));

cljs.core.deref(main.core.main_window).loadURL(["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/public/index.html"].join(''));

return cljs.core.deref(main.core.main_window).on("closed",(function (){
return cljs.core.reset_BANG_(main.core.main_window,null);
}));
});
main.core.main = (function main$core$main(){
shadow.js.shim.module$electron.app.on("window-all-closed",(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(process.platform,"darwin")){
return null;
} else {
return shadow.js.shim.module$electron.app.quit();
}
}));

return shadow.js.shim.module$electron.app.on("ready",main.core.init_browser);
});
Object.defineProperty(module.exports, "main_window", { enumerable: false, get: function() { return main.core.main_window; } });
Object.defineProperty(module.exports, "init_browser", { enumerable: false, get: function() { return main.core.init_browser; } });
Object.defineProperty(module.exports, "main", { enumerable: false, get: function() { return main.core.main; } });
//# sourceMappingURL=main.core.js.map
