var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

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

$CLJS.SHADOW_ENV.setLoaded("goog.debug.error.js");

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.debug.Error");
  goog.module.declareLegacyNamespace();
  function DebugError(opt_msg) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DebugError);
    } else {
      const stack = (new Error).stack;
      if (stack) {
        this.stack = stack;
      }
    }
    if (opt_msg) {
      this.message = String(opt_msg);
    }
    this.reportErrorToServer = true;
  }
  goog.inherits(DebugError, Error);
  DebugError.prototype.name = "CustomError";
  exports = DebugError;
  return exports;
});

module.exports = goog.debug.Error;

//# sourceMappingURL=goog.debug.error.js.map
