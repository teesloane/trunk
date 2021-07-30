var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
require("./goog.array.array.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36029 = arguments.length;
switch (G__36029) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36033 = (function (f,blockable,meta36034){
this.f = f;
this.blockable = blockable;
this.meta36034 = meta36034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36035,meta36034__$1){
var self__ = this;
var _36035__$1 = this;
return (new cljs.core.async.t_cljs$core$async36033(self__.f,self__.blockable,meta36034__$1));
}));

(cljs.core.async.t_cljs$core$async36033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36035){
var self__ = this;
var _36035__$1 = this;
return self__.meta36034;
}));

(cljs.core.async.t_cljs$core$async36033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36034","meta36034",-1176019581,null)], null);
}));

(cljs.core.async.t_cljs$core$async36033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36033");

(cljs.core.async.t_cljs$core$async36033.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36033.
 */
cljs.core.async.__GT_t_cljs$core$async36033 = (function cljs$core$async$__GT_t_cljs$core$async36033(f__$1,blockable__$1,meta36034){
return (new cljs.core.async.t_cljs$core$async36033(f__$1,blockable__$1,meta36034));
});

}

return (new cljs.core.async.t_cljs$core$async36033(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36061 = arguments.length;
switch (G__36061) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36063 = arguments.length;
switch (G__36063) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36071 = arguments.length;
switch (G__36071) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37748 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37748) : fn1.call(null,val_37748));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37748) : fn1.call(null,val_37748));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36073 = arguments.length;
switch (G__36073) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___37756 = n;
var x_37757 = (0);
while(true){
if((x_37757 < n__4695__auto___37756)){
(a[x_37757] = x_37757);

var G__37758 = (x_37757 + (1));
x_37757 = G__37758;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36074 = (function (flag,meta36075){
this.flag = flag;
this.meta36075 = meta36075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36076,meta36075__$1){
var self__ = this;
var _36076__$1 = this;
return (new cljs.core.async.t_cljs$core$async36074(self__.flag,meta36075__$1));
}));

(cljs.core.async.t_cljs$core$async36074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36076){
var self__ = this;
var _36076__$1 = this;
return self__.meta36075;
}));

(cljs.core.async.t_cljs$core$async36074.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36074.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36075","meta36075",2126660749,null)], null);
}));

(cljs.core.async.t_cljs$core$async36074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36074");

(cljs.core.async.t_cljs$core$async36074.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36074.
 */
cljs.core.async.__GT_t_cljs$core$async36074 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36074(flag__$1,meta36075){
return (new cljs.core.async.t_cljs$core$async36074(flag__$1,meta36075));
});

}

return (new cljs.core.async.t_cljs$core$async36074(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36077 = (function (flag,cb,meta36078){
this.flag = flag;
this.cb = cb;
this.meta36078 = meta36078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36079,meta36078__$1){
var self__ = this;
var _36079__$1 = this;
return (new cljs.core.async.t_cljs$core$async36077(self__.flag,self__.cb,meta36078__$1));
}));

(cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36079){
var self__ = this;
var _36079__$1 = this;
return self__.meta36078;
}));

(cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36078","meta36078",1300500087,null)], null);
}));

(cljs.core.async.t_cljs$core$async36077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36077");

(cljs.core.async.t_cljs$core$async36077.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36077.
 */
cljs.core.async.__GT_t_cljs$core$async36077 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36077(flag__$1,cb__$1,meta36078){
return (new cljs.core.async.t_cljs$core$async36077(flag__$1,cb__$1,meta36078));
});

}

return (new cljs.core.async.t_cljs$core$async36077(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36087_SHARP_){
var G__36089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36087_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36089) : fret.call(null,G__36089));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36088_SHARP_){
var G__36090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36088_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36090) : fret.call(null,G__36090));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37763 = (i + (1));
i = G__37763;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37764 = arguments.length;
var i__4819__auto___37765 = (0);
while(true){
if((i__4819__auto___37765 < len__4818__auto___37764)){
args__4824__auto__.push((arguments[i__4819__auto___37765]));

var G__37766 = (i__4819__auto___37765 + (1));
i__4819__auto___37765 = G__37766;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36095){
var map__36096 = p__36095;
var map__36096__$1 = cljs.core.__destructure_map(map__36096);
var opts = map__36096__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36093){
var G__36094 = cljs.core.first(seq36093);
var seq36093__$1 = cljs.core.next(seq36093);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36094,seq36093__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36098 = arguments.length;
switch (G__36098) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32782__auto___37770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36122){
var state_val_36123 = (state_36122[(1)]);
if((state_val_36123 === (7))){
var inst_36118 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36124_37771 = state_36122__$1;
(statearr_36124_37771[(2)] = inst_36118);

(statearr_36124_37771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (1))){
var state_36122__$1 = state_36122;
var statearr_36125_37772 = state_36122__$1;
(statearr_36125_37772[(2)] = null);

(statearr_36125_37772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (4))){
var inst_36101 = (state_36122[(7)]);
var inst_36101__$1 = (state_36122[(2)]);
var inst_36102 = (inst_36101__$1 == null);
var state_36122__$1 = (function (){var statearr_36126 = state_36122;
(statearr_36126[(7)] = inst_36101__$1);

return statearr_36126;
})();
if(cljs.core.truth_(inst_36102)){
var statearr_36127_37773 = state_36122__$1;
(statearr_36127_37773[(1)] = (5));

} else {
var statearr_36128_37774 = state_36122__$1;
(statearr_36128_37774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (13))){
var state_36122__$1 = state_36122;
var statearr_36129_37775 = state_36122__$1;
(statearr_36129_37775[(2)] = null);

(statearr_36129_37775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (6))){
var inst_36101 = (state_36122[(7)]);
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36122__$1,(11),to,inst_36101);
} else {
if((state_val_36123 === (3))){
var inst_36120 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36122__$1,inst_36120);
} else {
if((state_val_36123 === (12))){
var state_36122__$1 = state_36122;
var statearr_36130_37776 = state_36122__$1;
(statearr_36130_37776[(2)] = null);

(statearr_36130_37776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (2))){
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36122__$1,(4),from);
} else {
if((state_val_36123 === (11))){
var inst_36111 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
if(cljs.core.truth_(inst_36111)){
var statearr_36131_37777 = state_36122__$1;
(statearr_36131_37777[(1)] = (12));

} else {
var statearr_36132_37778 = state_36122__$1;
(statearr_36132_37778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (9))){
var state_36122__$1 = state_36122;
var statearr_36133_37779 = state_36122__$1;
(statearr_36133_37779[(2)] = null);

(statearr_36133_37779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (5))){
var state_36122__$1 = state_36122;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36134_37780 = state_36122__$1;
(statearr_36134_37780[(1)] = (8));

} else {
var statearr_36135_37781 = state_36122__$1;
(statearr_36135_37781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (14))){
var inst_36116 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36136_37782 = state_36122__$1;
(statearr_36136_37782[(2)] = inst_36116);

(statearr_36136_37782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (10))){
var inst_36108 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36137_37784 = state_36122__$1;
(statearr_36137_37784[(2)] = inst_36108);

(statearr_36137_37784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (8))){
var inst_36105 = cljs.core.async.close_BANG_(to);
var state_36122__$1 = state_36122;
var statearr_36138_37786 = state_36122__$1;
(statearr_36138_37786[(2)] = inst_36105);

(statearr_36138_37786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_36139 = [null,null,null,null,null,null,null,null];
(statearr_36139[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_36139[(1)] = (1));

return statearr_36139;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_36122){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36122);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36140){var ex__32716__auto__ = e36140;
var statearr_36141_37790 = state_36122;
(statearr_36141_37790[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36122[(4)]))){
var statearr_36142_37791 = state_36122;
(statearr_36142_37791[(1)] = cljs.core.first((state_36122[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37792 = state_36122;
state_36122 = G__37792;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_36122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_36122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36143 = f__32783__auto__();
(statearr_36143[(6)] = c__32782__auto___37770);

return statearr_36143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__36144){
var vec__36148 = p__36144;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(1),null);
var job = vec__36148;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32782__auto___37796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36157){
var state_val_36158 = (state_36157[(1)]);
if((state_val_36158 === (1))){
var state_36157__$1 = state_36157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36157__$1,(2),res,v);
} else {
if((state_val_36158 === (2))){
var inst_36154 = (state_36157[(2)]);
var inst_36155 = cljs.core.async.close_BANG_(res);
var state_36157__$1 = (function (){var statearr_36159 = state_36157;
(statearr_36159[(7)] = inst_36154);

return statearr_36159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36157__$1,inst_36155);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0 = (function (){
var statearr_36160 = [null,null,null,null,null,null,null,null];
(statearr_36160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__);

(statearr_36160[(1)] = (1));

return statearr_36160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1 = (function (state_36157){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36157);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36161){var ex__32716__auto__ = e36161;
var statearr_36162_37805 = state_36157;
(statearr_36162_37805[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36157[(4)]))){
var statearr_36163_37806 = state_36157;
(statearr_36163_37806[(1)] = cljs.core.first((state_36157[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37807 = state_36157;
state_36157 = G__37807;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = function(state_36157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1.call(this,state_36157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36164 = f__32783__auto__();
(statearr_36164[(6)] = c__32782__auto___37796);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36165){
var vec__36166 = p__36165;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36166,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36166,(1),null);
var job = vec__36166;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___37817 = n;
var __37818 = (0);
while(true){
if((__37818 < n__4695__auto___37817)){
var G__36169_37820 = type;
var G__36169_37821__$1 = (((G__36169_37820 instanceof cljs.core.Keyword))?G__36169_37820.fqn:null);
switch (G__36169_37821__$1) {
case "compute":
var c__32782__auto___37823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37818,c__32782__auto___37823,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async){
return (function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = ((function (__37818,c__32782__auto___37823,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async){
return (function (state_36182){
var state_val_36183 = (state_36182[(1)]);
if((state_val_36183 === (1))){
var state_36182__$1 = state_36182;
var statearr_36184_37824 = state_36182__$1;
(statearr_36184_37824[(2)] = null);

(statearr_36184_37824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (2))){
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36182__$1,(4),jobs);
} else {
if((state_val_36183 === (3))){
var inst_36180 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36182__$1,inst_36180);
} else {
if((state_val_36183 === (4))){
var inst_36172 = (state_36182[(2)]);
var inst_36173 = process(inst_36172);
var state_36182__$1 = state_36182;
if(cljs.core.truth_(inst_36173)){
var statearr_36185_37825 = state_36182__$1;
(statearr_36185_37825[(1)] = (5));

} else {
var statearr_36186_37826 = state_36182__$1;
(statearr_36186_37826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (5))){
var state_36182__$1 = state_36182;
var statearr_36189_37827 = state_36182__$1;
(statearr_36189_37827[(2)] = null);

(statearr_36189_37827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (6))){
var state_36182__$1 = state_36182;
var statearr_36193_37829 = state_36182__$1;
(statearr_36193_37829[(2)] = null);

(statearr_36193_37829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36183 === (7))){
var inst_36178 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
var statearr_36194_37830 = state_36182__$1;
(statearr_36194_37830[(2)] = inst_36178);

(statearr_36194_37830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37818,c__32782__auto___37823,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async))
;
return ((function (__37818,switch__32712__auto__,c__32782__auto___37823,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0 = (function (){
var statearr_36195 = [null,null,null,null,null,null,null];
(statearr_36195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__);

(statearr_36195[(1)] = (1));

return statearr_36195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1 = (function (state_36182){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36182);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36196){var ex__32716__auto__ = e36196;
var statearr_36197_37835 = state_36182;
(statearr_36197_37835[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36182[(4)]))){
var statearr_36198_37836 = state_36182;
(statearr_36198_37836[(1)] = cljs.core.first((state_36182[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37840 = state_36182;
state_36182 = G__37840;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = function(state_36182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1.call(this,state_36182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__;
})()
;})(__37818,switch__32712__auto__,c__32782__auto___37823,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async))
})();
var state__32784__auto__ = (function (){var statearr_36199 = f__32783__auto__();
(statearr_36199[(6)] = c__32782__auto___37823);

return statearr_36199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
});})(__37818,c__32782__auto___37823,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async))
);


break;
case "async":
var c__32782__auto___37841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37818,c__32782__auto___37841,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async){
return (function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = ((function (__37818,c__32782__auto___37841,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async){
return (function (state_36212){
var state_val_36213 = (state_36212[(1)]);
if((state_val_36213 === (1))){
var state_36212__$1 = state_36212;
var statearr_36214_37842 = state_36212__$1;
(statearr_36214_37842[(2)] = null);

(statearr_36214_37842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (2))){
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36212__$1,(4),jobs);
} else {
if((state_val_36213 === (3))){
var inst_36210 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36212__$1,inst_36210);
} else {
if((state_val_36213 === (4))){
var inst_36202 = (state_36212[(2)]);
var inst_36203 = async(inst_36202);
var state_36212__$1 = state_36212;
if(cljs.core.truth_(inst_36203)){
var statearr_36215_37843 = state_36212__$1;
(statearr_36215_37843[(1)] = (5));

} else {
var statearr_36216_37844 = state_36212__$1;
(statearr_36216_37844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (5))){
var state_36212__$1 = state_36212;
var statearr_36217_37845 = state_36212__$1;
(statearr_36217_37845[(2)] = null);

(statearr_36217_37845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (6))){
var state_36212__$1 = state_36212;
var statearr_36218_37846 = state_36212__$1;
(statearr_36218_37846[(2)] = null);

(statearr_36218_37846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36213 === (7))){
var inst_36208 = (state_36212[(2)]);
var state_36212__$1 = state_36212;
var statearr_36221_37848 = state_36212__$1;
(statearr_36221_37848[(2)] = inst_36208);

(statearr_36221_37848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37818,c__32782__auto___37841,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async))
;
return ((function (__37818,switch__32712__auto__,c__32782__auto___37841,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0 = (function (){
var statearr_36222 = [null,null,null,null,null,null,null];
(statearr_36222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__);

(statearr_36222[(1)] = (1));

return statearr_36222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1 = (function (state_36212){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36212);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36223){var ex__32716__auto__ = e36223;
var statearr_36224_37853 = state_36212;
(statearr_36224_37853[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36212[(4)]))){
var statearr_36225_37854 = state_36212;
(statearr_36225_37854[(1)] = cljs.core.first((state_36212[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_36212;
state_36212 = G__37855;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = function(state_36212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1.call(this,state_36212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__;
})()
;})(__37818,switch__32712__auto__,c__32782__auto___37841,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async))
})();
var state__32784__auto__ = (function (){var statearr_36226 = f__32783__auto__();
(statearr_36226[(6)] = c__32782__auto___37841);

return statearr_36226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
});})(__37818,c__32782__auto___37841,G__36169_37820,G__36169_37821__$1,n__4695__auto___37817,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36169_37821__$1)].join('')));

}

var G__37856 = (__37818 + (1));
__37818 = G__37856;
continue;
} else {
}
break;
}

var c__32782__auto___37858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36249){
var state_val_36250 = (state_36249[(1)]);
if((state_val_36250 === (7))){
var inst_36244 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36251_37863 = state_36249__$1;
(statearr_36251_37863[(2)] = inst_36244);

(statearr_36251_37863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (1))){
var state_36249__$1 = state_36249;
var statearr_36252_37867 = state_36249__$1;
(statearr_36252_37867[(2)] = null);

(statearr_36252_37867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (4))){
var inst_36229 = (state_36249[(7)]);
var inst_36229__$1 = (state_36249[(2)]);
var inst_36230 = (inst_36229__$1 == null);
var state_36249__$1 = (function (){var statearr_36254 = state_36249;
(statearr_36254[(7)] = inst_36229__$1);

return statearr_36254;
})();
if(cljs.core.truth_(inst_36230)){
var statearr_36255_37868 = state_36249__$1;
(statearr_36255_37868[(1)] = (5));

} else {
var statearr_36257_37870 = state_36249__$1;
(statearr_36257_37870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (6))){
var inst_36229 = (state_36249[(7)]);
var inst_36234 = (state_36249[(8)]);
var inst_36234__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36235 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36236 = [inst_36229,inst_36234__$1];
var inst_36237 = (new cljs.core.PersistentVector(null,2,(5),inst_36235,inst_36236,null));
var state_36249__$1 = (function (){var statearr_36258 = state_36249;
(statearr_36258[(8)] = inst_36234__$1);

return statearr_36258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36249__$1,(8),jobs,inst_36237);
} else {
if((state_val_36250 === (3))){
var inst_36246 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36249__$1,inst_36246);
} else {
if((state_val_36250 === (2))){
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36249__$1,(4),from);
} else {
if((state_val_36250 === (9))){
var inst_36241 = (state_36249[(2)]);
var state_36249__$1 = (function (){var statearr_36260 = state_36249;
(statearr_36260[(9)] = inst_36241);

return statearr_36260;
})();
var statearr_36261_37875 = state_36249__$1;
(statearr_36261_37875[(2)] = null);

(statearr_36261_37875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (5))){
var inst_36232 = cljs.core.async.close_BANG_(jobs);
var state_36249__$1 = state_36249;
var statearr_36262_37876 = state_36249__$1;
(statearr_36262_37876[(2)] = inst_36232);

(statearr_36262_37876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (8))){
var inst_36234 = (state_36249[(8)]);
var inst_36239 = (state_36249[(2)]);
var state_36249__$1 = (function (){var statearr_36263 = state_36249;
(statearr_36263[(10)] = inst_36239);

return statearr_36263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36249__$1,(9),results,inst_36234);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0 = (function (){
var statearr_36265 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__);

(statearr_36265[(1)] = (1));

return statearr_36265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1 = (function (state_36249){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36249);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36266){var ex__32716__auto__ = e36266;
var statearr_36267_37883 = state_36249;
(statearr_36267_37883[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36249[(4)]))){
var statearr_36271_37884 = state_36249;
(statearr_36271_37884[(1)] = cljs.core.first((state_36249[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37885 = state_36249;
state_36249 = G__37885;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = function(state_36249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1.call(this,state_36249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36272 = f__32783__auto__();
(statearr_36272[(6)] = c__32782__auto___37858);

return statearr_36272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


var c__32782__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36310){
var state_val_36311 = (state_36310[(1)]);
if((state_val_36311 === (7))){
var inst_36306 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
var statearr_36312_37890 = state_36310__$1;
(statearr_36312_37890[(2)] = inst_36306);

(statearr_36312_37890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (20))){
var state_36310__$1 = state_36310;
var statearr_36313_37894 = state_36310__$1;
(statearr_36313_37894[(2)] = null);

(statearr_36313_37894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (1))){
var state_36310__$1 = state_36310;
var statearr_36314_37895 = state_36310__$1;
(statearr_36314_37895[(2)] = null);

(statearr_36314_37895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (4))){
var inst_36275 = (state_36310[(7)]);
var inst_36275__$1 = (state_36310[(2)]);
var inst_36276 = (inst_36275__$1 == null);
var state_36310__$1 = (function (){var statearr_36315 = state_36310;
(statearr_36315[(7)] = inst_36275__$1);

return statearr_36315;
})();
if(cljs.core.truth_(inst_36276)){
var statearr_36316_37896 = state_36310__$1;
(statearr_36316_37896[(1)] = (5));

} else {
var statearr_36317_37897 = state_36310__$1;
(statearr_36317_37897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (15))){
var inst_36288 = (state_36310[(8)]);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36310__$1,(18),to,inst_36288);
} else {
if((state_val_36311 === (21))){
var inst_36301 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
var statearr_36318_37901 = state_36310__$1;
(statearr_36318_37901[(2)] = inst_36301);

(statearr_36318_37901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (13))){
var inst_36303 = (state_36310[(2)]);
var state_36310__$1 = (function (){var statearr_36319 = state_36310;
(statearr_36319[(9)] = inst_36303);

return statearr_36319;
})();
var statearr_36320_37902 = state_36310__$1;
(statearr_36320_37902[(2)] = null);

(statearr_36320_37902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (6))){
var inst_36275 = (state_36310[(7)]);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36310__$1,(11),inst_36275);
} else {
if((state_val_36311 === (17))){
var inst_36296 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
if(cljs.core.truth_(inst_36296)){
var statearr_36321_37906 = state_36310__$1;
(statearr_36321_37906[(1)] = (19));

} else {
var statearr_36322_37907 = state_36310__$1;
(statearr_36322_37907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (3))){
var inst_36308 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36310__$1,inst_36308);
} else {
if((state_val_36311 === (12))){
var inst_36285 = (state_36310[(10)]);
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36310__$1,(14),inst_36285);
} else {
if((state_val_36311 === (2))){
var state_36310__$1 = state_36310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36310__$1,(4),results);
} else {
if((state_val_36311 === (19))){
var state_36310__$1 = state_36310;
var statearr_36323_37908 = state_36310__$1;
(statearr_36323_37908[(2)] = null);

(statearr_36323_37908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (11))){
var inst_36285 = (state_36310[(2)]);
var state_36310__$1 = (function (){var statearr_36324 = state_36310;
(statearr_36324[(10)] = inst_36285);

return statearr_36324;
})();
var statearr_36325_37909 = state_36310__$1;
(statearr_36325_37909[(2)] = null);

(statearr_36325_37909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (9))){
var state_36310__$1 = state_36310;
var statearr_36327_37913 = state_36310__$1;
(statearr_36327_37913[(2)] = null);

(statearr_36327_37913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (5))){
var state_36310__$1 = state_36310;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36329_37914 = state_36310__$1;
(statearr_36329_37914[(1)] = (8));

} else {
var statearr_36330_37915 = state_36310__$1;
(statearr_36330_37915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (14))){
var inst_36290 = (state_36310[(11)]);
var inst_36288 = (state_36310[(8)]);
var inst_36288__$1 = (state_36310[(2)]);
var inst_36289 = (inst_36288__$1 == null);
var inst_36290__$1 = cljs.core.not(inst_36289);
var state_36310__$1 = (function (){var statearr_36331 = state_36310;
(statearr_36331[(11)] = inst_36290__$1);

(statearr_36331[(8)] = inst_36288__$1);

return statearr_36331;
})();
if(inst_36290__$1){
var statearr_36332_37916 = state_36310__$1;
(statearr_36332_37916[(1)] = (15));

} else {
var statearr_36333_37918 = state_36310__$1;
(statearr_36333_37918[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (16))){
var inst_36290 = (state_36310[(11)]);
var state_36310__$1 = state_36310;
var statearr_36334_37919 = state_36310__$1;
(statearr_36334_37919[(2)] = inst_36290);

(statearr_36334_37919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (10))){
var inst_36282 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
var statearr_36335_37920 = state_36310__$1;
(statearr_36335_37920[(2)] = inst_36282);

(statearr_36335_37920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (18))){
var inst_36293 = (state_36310[(2)]);
var state_36310__$1 = state_36310;
var statearr_36336_37921 = state_36310__$1;
(statearr_36336_37921[(2)] = inst_36293);

(statearr_36336_37921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36311 === (8))){
var inst_36279 = cljs.core.async.close_BANG_(to);
var state_36310__$1 = state_36310;
var statearr_36337_37922 = state_36310__$1;
(statearr_36337_37922[(2)] = inst_36279);

(statearr_36337_37922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0 = (function (){
var statearr_36339 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__);

(statearr_36339[(1)] = (1));

return statearr_36339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1 = (function (state_36310){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36310);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36340){var ex__32716__auto__ = e36340;
var statearr_36341_37925 = state_36310;
(statearr_36341_37925[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36310[(4)]))){
var statearr_36342_37926 = state_36310;
(statearr_36342_37926[(1)] = cljs.core.first((state_36310[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37927 = state_36310;
state_36310 = G__37927;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__ = function(state_36310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1.call(this,state_36310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36343 = f__32783__auto__();
(statearr_36343[(6)] = c__32782__auto__);

return statearr_36343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));

return c__32782__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36345 = arguments.length;
switch (G__36345) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36347 = arguments.length;
switch (G__36347) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36349 = arguments.length;
switch (G__36349) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32782__auto___37931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36375){
var state_val_36376 = (state_36375[(1)]);
if((state_val_36376 === (7))){
var inst_36371 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
var statearr_36377_37932 = state_36375__$1;
(statearr_36377_37932[(2)] = inst_36371);

(statearr_36377_37932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (1))){
var state_36375__$1 = state_36375;
var statearr_36380_37933 = state_36375__$1;
(statearr_36380_37933[(2)] = null);

(statearr_36380_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (4))){
var inst_36352 = (state_36375[(7)]);
var inst_36352__$1 = (state_36375[(2)]);
var inst_36353 = (inst_36352__$1 == null);
var state_36375__$1 = (function (){var statearr_36383 = state_36375;
(statearr_36383[(7)] = inst_36352__$1);

return statearr_36383;
})();
if(cljs.core.truth_(inst_36353)){
var statearr_36384_37934 = state_36375__$1;
(statearr_36384_37934[(1)] = (5));

} else {
var statearr_36386_37935 = state_36375__$1;
(statearr_36386_37935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (13))){
var state_36375__$1 = state_36375;
var statearr_36390_37936 = state_36375__$1;
(statearr_36390_37936[(2)] = null);

(statearr_36390_37936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (6))){
var inst_36352 = (state_36375[(7)]);
var inst_36358 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36352) : p.call(null,inst_36352));
var state_36375__$1 = state_36375;
if(cljs.core.truth_(inst_36358)){
var statearr_36391_37937 = state_36375__$1;
(statearr_36391_37937[(1)] = (9));

} else {
var statearr_36392_37938 = state_36375__$1;
(statearr_36392_37938[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (3))){
var inst_36373 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36375__$1,inst_36373);
} else {
if((state_val_36376 === (12))){
var state_36375__$1 = state_36375;
var statearr_36393_37939 = state_36375__$1;
(statearr_36393_37939[(2)] = null);

(statearr_36393_37939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (2))){
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36375__$1,(4),ch);
} else {
if((state_val_36376 === (11))){
var inst_36352 = (state_36375[(7)]);
var inst_36362 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36375__$1,(8),inst_36362,inst_36352);
} else {
if((state_val_36376 === (9))){
var state_36375__$1 = state_36375;
var statearr_36394_37940 = state_36375__$1;
(statearr_36394_37940[(2)] = tc);

(statearr_36394_37940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (5))){
var inst_36355 = cljs.core.async.close_BANG_(tc);
var inst_36356 = cljs.core.async.close_BANG_(fc);
var state_36375__$1 = (function (){var statearr_36395 = state_36375;
(statearr_36395[(8)] = inst_36355);

return statearr_36395;
})();
var statearr_36397_37941 = state_36375__$1;
(statearr_36397_37941[(2)] = inst_36356);

(statearr_36397_37941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (14))){
var inst_36369 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
var statearr_36401_37946 = state_36375__$1;
(statearr_36401_37946[(2)] = inst_36369);

(statearr_36401_37946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (10))){
var state_36375__$1 = state_36375;
var statearr_36402_37947 = state_36375__$1;
(statearr_36402_37947[(2)] = fc);

(statearr_36402_37947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (8))){
var inst_36364 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
if(cljs.core.truth_(inst_36364)){
var statearr_36403_37949 = state_36375__$1;
(statearr_36403_37949[(1)] = (12));

} else {
var statearr_36404_37950 = state_36375__$1;
(statearr_36404_37950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_36405 = [null,null,null,null,null,null,null,null,null];
(statearr_36405[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_36405[(1)] = (1));

return statearr_36405;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_36375){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36375);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36406){var ex__32716__auto__ = e36406;
var statearr_36407_37951 = state_36375;
(statearr_36407_37951[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36375[(4)]))){
var statearr_36408_37952 = state_36375;
(statearr_36408_37952[(1)] = cljs.core.first((state_36375[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37953 = state_36375;
state_36375 = G__37953;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_36375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_36375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36411 = f__32783__auto__();
(statearr_36411[(6)] = c__32782__auto___37931);

return statearr_36411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32782__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36437){
var state_val_36438 = (state_36437[(1)]);
if((state_val_36438 === (7))){
var inst_36432 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
var statearr_36439_37959 = state_36437__$1;
(statearr_36439_37959[(2)] = inst_36432);

(statearr_36439_37959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (1))){
var inst_36413 = init;
var inst_36414 = inst_36413;
var state_36437__$1 = (function (){var statearr_36440 = state_36437;
(statearr_36440[(7)] = inst_36414);

return statearr_36440;
})();
var statearr_36441_37961 = state_36437__$1;
(statearr_36441_37961[(2)] = null);

(statearr_36441_37961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (4))){
var inst_36417 = (state_36437[(8)]);
var inst_36417__$1 = (state_36437[(2)]);
var inst_36418 = (inst_36417__$1 == null);
var state_36437__$1 = (function (){var statearr_36442 = state_36437;
(statearr_36442[(8)] = inst_36417__$1);

return statearr_36442;
})();
if(cljs.core.truth_(inst_36418)){
var statearr_36443_37964 = state_36437__$1;
(statearr_36443_37964[(1)] = (5));

} else {
var statearr_36444_37965 = state_36437__$1;
(statearr_36444_37965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (6))){
var inst_36421 = (state_36437[(9)]);
var inst_36414 = (state_36437[(7)]);
var inst_36417 = (state_36437[(8)]);
var inst_36421__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36414,inst_36417) : f.call(null,inst_36414,inst_36417));
var inst_36422 = cljs.core.reduced_QMARK_(inst_36421__$1);
var state_36437__$1 = (function (){var statearr_36445 = state_36437;
(statearr_36445[(9)] = inst_36421__$1);

return statearr_36445;
})();
if(inst_36422){
var statearr_36446_37966 = state_36437__$1;
(statearr_36446_37966[(1)] = (8));

} else {
var statearr_36447_37968 = state_36437__$1;
(statearr_36447_37968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (3))){
var inst_36434 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36437__$1,inst_36434);
} else {
if((state_val_36438 === (2))){
var state_36437__$1 = state_36437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36437__$1,(4),ch);
} else {
if((state_val_36438 === (9))){
var inst_36421 = (state_36437[(9)]);
var inst_36414 = inst_36421;
var state_36437__$1 = (function (){var statearr_36448 = state_36437;
(statearr_36448[(7)] = inst_36414);

return statearr_36448;
})();
var statearr_36449_37973 = state_36437__$1;
(statearr_36449_37973[(2)] = null);

(statearr_36449_37973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (5))){
var inst_36414 = (state_36437[(7)]);
var state_36437__$1 = state_36437;
var statearr_36450_37974 = state_36437__$1;
(statearr_36450_37974[(2)] = inst_36414);

(statearr_36450_37974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (10))){
var inst_36430 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
var statearr_36451_37975 = state_36437__$1;
(statearr_36451_37975[(2)] = inst_36430);

(statearr_36451_37975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (8))){
var inst_36421 = (state_36437[(9)]);
var inst_36426 = cljs.core.deref(inst_36421);
var state_36437__$1 = state_36437;
var statearr_36452_37976 = state_36437__$1;
(statearr_36452_37976[(2)] = inst_36426);

(statearr_36452_37976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32713__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32713__auto____0 = (function (){
var statearr_36453 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36453[(0)] = cljs$core$async$reduce_$_state_machine__32713__auto__);

(statearr_36453[(1)] = (1));

return statearr_36453;
});
var cljs$core$async$reduce_$_state_machine__32713__auto____1 = (function (state_36437){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36437);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36454){var ex__32716__auto__ = e36454;
var statearr_36455_37977 = state_36437;
(statearr_36455_37977[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36437[(4)]))){
var statearr_36456_37978 = state_36437;
(statearr_36456_37978[(1)] = cljs.core.first((state_36437[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37979 = state_36437;
state_36437 = G__37979;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32713__auto__ = function(state_36437){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32713__auto____1.call(this,state_36437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32713__auto____0;
cljs$core$async$reduce_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32713__auto____1;
return cljs$core$async$reduce_$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36457 = f__32783__auto__();
(statearr_36457[(6)] = c__32782__auto__);

return statearr_36457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));

return c__32782__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32782__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36463){
var state_val_36464 = (state_36463[(1)]);
if((state_val_36464 === (1))){
var inst_36458 = cljs.core.async.reduce(f__$1,init,ch);
var state_36463__$1 = state_36463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36463__$1,(2),inst_36458);
} else {
if((state_val_36464 === (2))){
var inst_36460 = (state_36463[(2)]);
var inst_36461 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36460) : f__$1.call(null,inst_36460));
var state_36463__$1 = state_36463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36463__$1,inst_36461);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32713__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32713__auto____0 = (function (){
var statearr_36465 = [null,null,null,null,null,null,null];
(statearr_36465[(0)] = cljs$core$async$transduce_$_state_machine__32713__auto__);

(statearr_36465[(1)] = (1));

return statearr_36465;
});
var cljs$core$async$transduce_$_state_machine__32713__auto____1 = (function (state_36463){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36463);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36466){var ex__32716__auto__ = e36466;
var statearr_36467_37988 = state_36463;
(statearr_36467_37988[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36463[(4)]))){
var statearr_36468_37992 = state_36463;
(statearr_36468_37992[(1)] = cljs.core.first((state_36463[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37994 = state_36463;
state_36463 = G__37994;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32713__auto__ = function(state_36463){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32713__auto____1.call(this,state_36463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32713__auto____0;
cljs$core$async$transduce_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32713__auto____1;
return cljs$core$async$transduce_$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36469 = f__32783__auto__();
(statearr_36469[(6)] = c__32782__auto__);

return statearr_36469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));

return c__32782__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__36471 = arguments.length;
switch (G__36471) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32782__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36496){
var state_val_36497 = (state_36496[(1)]);
if((state_val_36497 === (7))){
var inst_36478 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
var statearr_36498_38009 = state_36496__$1;
(statearr_36498_38009[(2)] = inst_36478);

(statearr_36498_38009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (1))){
var inst_36472 = cljs.core.seq(coll);
var inst_36473 = inst_36472;
var state_36496__$1 = (function (){var statearr_36499 = state_36496;
(statearr_36499[(7)] = inst_36473);

return statearr_36499;
})();
var statearr_36500_38010 = state_36496__$1;
(statearr_36500_38010[(2)] = null);

(statearr_36500_38010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (4))){
var inst_36473 = (state_36496[(7)]);
var inst_36476 = cljs.core.first(inst_36473);
var state_36496__$1 = state_36496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36496__$1,(7),ch,inst_36476);
} else {
if((state_val_36497 === (13))){
var inst_36490 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
var statearr_36501_38011 = state_36496__$1;
(statearr_36501_38011[(2)] = inst_36490);

(statearr_36501_38011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (6))){
var inst_36481 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
if(cljs.core.truth_(inst_36481)){
var statearr_36502_38014 = state_36496__$1;
(statearr_36502_38014[(1)] = (8));

} else {
var statearr_36503_38015 = state_36496__$1;
(statearr_36503_38015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (3))){
var inst_36494 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36496__$1,inst_36494);
} else {
if((state_val_36497 === (12))){
var state_36496__$1 = state_36496;
var statearr_36504_38016 = state_36496__$1;
(statearr_36504_38016[(2)] = null);

(statearr_36504_38016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (2))){
var inst_36473 = (state_36496[(7)]);
var state_36496__$1 = state_36496;
if(cljs.core.truth_(inst_36473)){
var statearr_36505_38017 = state_36496__$1;
(statearr_36505_38017[(1)] = (4));

} else {
var statearr_36506_38018 = state_36496__$1;
(statearr_36506_38018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (11))){
var inst_36487 = cljs.core.async.close_BANG_(ch);
var state_36496__$1 = state_36496;
var statearr_36507_38019 = state_36496__$1;
(statearr_36507_38019[(2)] = inst_36487);

(statearr_36507_38019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (9))){
var state_36496__$1 = state_36496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36508_38020 = state_36496__$1;
(statearr_36508_38020[(1)] = (11));

} else {
var statearr_36509_38021 = state_36496__$1;
(statearr_36509_38021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (5))){
var inst_36473 = (state_36496[(7)]);
var state_36496__$1 = state_36496;
var statearr_36510_38022 = state_36496__$1;
(statearr_36510_38022[(2)] = inst_36473);

(statearr_36510_38022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (10))){
var inst_36492 = (state_36496[(2)]);
var state_36496__$1 = state_36496;
var statearr_36512_38023 = state_36496__$1;
(statearr_36512_38023[(2)] = inst_36492);

(statearr_36512_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36497 === (8))){
var inst_36473 = (state_36496[(7)]);
var inst_36483 = cljs.core.next(inst_36473);
var inst_36473__$1 = inst_36483;
var state_36496__$1 = (function (){var statearr_36514 = state_36496;
(statearr_36514[(7)] = inst_36473__$1);

return statearr_36514;
})();
var statearr_36515_38024 = state_36496__$1;
(statearr_36515_38024[(2)] = null);

(statearr_36515_38024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_36517 = [null,null,null,null,null,null,null,null];
(statearr_36517[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_36517[(1)] = (1));

return statearr_36517;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_36496){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36496);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36518){var ex__32716__auto__ = e36518;
var statearr_36519_38025 = state_36496;
(statearr_36519_38025[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36496[(4)]))){
var statearr_36520_38028 = state_36496;
(statearr_36520_38028[(1)] = cljs.core.first((state_36496[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38029 = state_36496;
state_36496 = G__38029;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_36496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_36496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36522 = f__32783__auto__();
(statearr_36522[(6)] = c__32782__auto__);

return statearr_36522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));

return c__32782__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36524 = arguments.length;
switch (G__36524) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_38037 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_38037(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38041 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_38041(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38042 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_38042(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38049 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_38049(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36527 = (function (ch,cs,meta36528){
this.ch = ch;
this.cs = cs;
this.meta36528 = meta36528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36529,meta36528__$1){
var self__ = this;
var _36529__$1 = this;
return (new cljs.core.async.t_cljs$core$async36527(self__.ch,self__.cs,meta36528__$1));
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36529){
var self__ = this;
var _36529__$1 = this;
return self__.meta36528;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36527.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36528","meta36528",-1748862714,null)], null);
}));

(cljs.core.async.t_cljs$core$async36527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36527");

(cljs.core.async.t_cljs$core$async36527.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36527.
 */
cljs.core.async.__GT_t_cljs$core$async36527 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36527(ch__$1,cs__$1,meta36528){
return (new cljs.core.async.t_cljs$core$async36527(ch__$1,cs__$1,meta36528));
});

}

return (new cljs.core.async.t_cljs$core$async36527(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32782__auto___38061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36668){
var state_val_36669 = (state_36668[(1)]);
if((state_val_36669 === (7))){
var inst_36664 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36670_38062 = state_36668__$1;
(statearr_36670_38062[(2)] = inst_36664);

(statearr_36670_38062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (20))){
var inst_36567 = (state_36668[(7)]);
var inst_36581 = cljs.core.first(inst_36567);
var inst_36582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36581,(0),null);
var inst_36583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36581,(1),null);
var state_36668__$1 = (function (){var statearr_36671 = state_36668;
(statearr_36671[(8)] = inst_36582);

return statearr_36671;
})();
if(cljs.core.truth_(inst_36583)){
var statearr_36672_38064 = state_36668__$1;
(statearr_36672_38064[(1)] = (22));

} else {
var statearr_36673_38065 = state_36668__$1;
(statearr_36673_38065[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (27))){
var inst_36611 = (state_36668[(9)]);
var inst_36536 = (state_36668[(10)]);
var inst_36613 = (state_36668[(11)]);
var inst_36618 = (state_36668[(12)]);
var inst_36618__$1 = cljs.core._nth(inst_36611,inst_36613);
var inst_36619 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36618__$1,inst_36536,done);
var state_36668__$1 = (function (){var statearr_36674 = state_36668;
(statearr_36674[(12)] = inst_36618__$1);

return statearr_36674;
})();
if(cljs.core.truth_(inst_36619)){
var statearr_36675_38066 = state_36668__$1;
(statearr_36675_38066[(1)] = (30));

} else {
var statearr_36676_38067 = state_36668__$1;
(statearr_36676_38067[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (1))){
var state_36668__$1 = state_36668;
var statearr_36677_38068 = state_36668__$1;
(statearr_36677_38068[(2)] = null);

(statearr_36677_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (24))){
var inst_36567 = (state_36668[(7)]);
var inst_36588 = (state_36668[(2)]);
var inst_36589 = cljs.core.next(inst_36567);
var inst_36545 = inst_36589;
var inst_36546 = null;
var inst_36547 = (0);
var inst_36548 = (0);
var state_36668__$1 = (function (){var statearr_36678 = state_36668;
(statearr_36678[(13)] = inst_36547);

(statearr_36678[(14)] = inst_36588);

(statearr_36678[(15)] = inst_36546);

(statearr_36678[(16)] = inst_36548);

(statearr_36678[(17)] = inst_36545);

return statearr_36678;
})();
var statearr_36679_38069 = state_36668__$1;
(statearr_36679_38069[(2)] = null);

(statearr_36679_38069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (39))){
var state_36668__$1 = state_36668;
var statearr_36683_38072 = state_36668__$1;
(statearr_36683_38072[(2)] = null);

(statearr_36683_38072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (4))){
var inst_36536 = (state_36668[(10)]);
var inst_36536__$1 = (state_36668[(2)]);
var inst_36537 = (inst_36536__$1 == null);
var state_36668__$1 = (function (){var statearr_36684 = state_36668;
(statearr_36684[(10)] = inst_36536__$1);

return statearr_36684;
})();
if(cljs.core.truth_(inst_36537)){
var statearr_36685_38073 = state_36668__$1;
(statearr_36685_38073[(1)] = (5));

} else {
var statearr_36686_38074 = state_36668__$1;
(statearr_36686_38074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (15))){
var inst_36547 = (state_36668[(13)]);
var inst_36546 = (state_36668[(15)]);
var inst_36548 = (state_36668[(16)]);
var inst_36545 = (state_36668[(17)]);
var inst_36563 = (state_36668[(2)]);
var inst_36564 = (inst_36548 + (1));
var tmp36680 = inst_36547;
var tmp36681 = inst_36546;
var tmp36682 = inst_36545;
var inst_36545__$1 = tmp36682;
var inst_36546__$1 = tmp36681;
var inst_36547__$1 = tmp36680;
var inst_36548__$1 = inst_36564;
var state_36668__$1 = (function (){var statearr_36687 = state_36668;
(statearr_36687[(13)] = inst_36547__$1);

(statearr_36687[(15)] = inst_36546__$1);

(statearr_36687[(16)] = inst_36548__$1);

(statearr_36687[(18)] = inst_36563);

(statearr_36687[(17)] = inst_36545__$1);

return statearr_36687;
})();
var statearr_36688_38075 = state_36668__$1;
(statearr_36688_38075[(2)] = null);

(statearr_36688_38075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (21))){
var inst_36592 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36692_38076 = state_36668__$1;
(statearr_36692_38076[(2)] = inst_36592);

(statearr_36692_38076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (31))){
var inst_36618 = (state_36668[(12)]);
var inst_36622 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36618);
var state_36668__$1 = state_36668;
var statearr_36693_38079 = state_36668__$1;
(statearr_36693_38079[(2)] = inst_36622);

(statearr_36693_38079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (32))){
var inst_36610 = (state_36668[(19)]);
var inst_36611 = (state_36668[(9)]);
var inst_36612 = (state_36668[(20)]);
var inst_36613 = (state_36668[(11)]);
var inst_36624 = (state_36668[(2)]);
var inst_36625 = (inst_36613 + (1));
var tmp36689 = inst_36610;
var tmp36690 = inst_36611;
var tmp36691 = inst_36612;
var inst_36610__$1 = tmp36689;
var inst_36611__$1 = tmp36690;
var inst_36612__$1 = tmp36691;
var inst_36613__$1 = inst_36625;
var state_36668__$1 = (function (){var statearr_36694 = state_36668;
(statearr_36694[(19)] = inst_36610__$1);

(statearr_36694[(9)] = inst_36611__$1);

(statearr_36694[(21)] = inst_36624);

(statearr_36694[(20)] = inst_36612__$1);

(statearr_36694[(11)] = inst_36613__$1);

return statearr_36694;
})();
var statearr_36695_38083 = state_36668__$1;
(statearr_36695_38083[(2)] = null);

(statearr_36695_38083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (40))){
var inst_36637 = (state_36668[(22)]);
var inst_36641 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36637);
var state_36668__$1 = state_36668;
var statearr_36700_38085 = state_36668__$1;
(statearr_36700_38085[(2)] = inst_36641);

(statearr_36700_38085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (33))){
var inst_36628 = (state_36668[(23)]);
var inst_36630 = cljs.core.chunked_seq_QMARK_(inst_36628);
var state_36668__$1 = state_36668;
if(inst_36630){
var statearr_36701_38090 = state_36668__$1;
(statearr_36701_38090[(1)] = (36));

} else {
var statearr_36702_38091 = state_36668__$1;
(statearr_36702_38091[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (13))){
var inst_36557 = (state_36668[(24)]);
var inst_36560 = cljs.core.async.close_BANG_(inst_36557);
var state_36668__$1 = state_36668;
var statearr_36703_38092 = state_36668__$1;
(statearr_36703_38092[(2)] = inst_36560);

(statearr_36703_38092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (22))){
var inst_36582 = (state_36668[(8)]);
var inst_36585 = cljs.core.async.close_BANG_(inst_36582);
var state_36668__$1 = state_36668;
var statearr_36706_38093 = state_36668__$1;
(statearr_36706_38093[(2)] = inst_36585);

(statearr_36706_38093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (36))){
var inst_36628 = (state_36668[(23)]);
var inst_36632 = cljs.core.chunk_first(inst_36628);
var inst_36633 = cljs.core.chunk_rest(inst_36628);
var inst_36634 = cljs.core.count(inst_36632);
var inst_36610 = inst_36633;
var inst_36611 = inst_36632;
var inst_36612 = inst_36634;
var inst_36613 = (0);
var state_36668__$1 = (function (){var statearr_36707 = state_36668;
(statearr_36707[(19)] = inst_36610);

(statearr_36707[(9)] = inst_36611);

(statearr_36707[(20)] = inst_36612);

(statearr_36707[(11)] = inst_36613);

return statearr_36707;
})();
var statearr_36708_38094 = state_36668__$1;
(statearr_36708_38094[(2)] = null);

(statearr_36708_38094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (41))){
var inst_36628 = (state_36668[(23)]);
var inst_36643 = (state_36668[(2)]);
var inst_36644 = cljs.core.next(inst_36628);
var inst_36610 = inst_36644;
var inst_36611 = null;
var inst_36612 = (0);
var inst_36613 = (0);
var state_36668__$1 = (function (){var statearr_36709 = state_36668;
(statearr_36709[(19)] = inst_36610);

(statearr_36709[(9)] = inst_36611);

(statearr_36709[(25)] = inst_36643);

(statearr_36709[(20)] = inst_36612);

(statearr_36709[(11)] = inst_36613);

return statearr_36709;
})();
var statearr_36710_38097 = state_36668__$1;
(statearr_36710_38097[(2)] = null);

(statearr_36710_38097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (43))){
var state_36668__$1 = state_36668;
var statearr_36711_38098 = state_36668__$1;
(statearr_36711_38098[(2)] = null);

(statearr_36711_38098[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (29))){
var inst_36652 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36712_38099 = state_36668__$1;
(statearr_36712_38099[(2)] = inst_36652);

(statearr_36712_38099[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (44))){
var inst_36661 = (state_36668[(2)]);
var state_36668__$1 = (function (){var statearr_36716 = state_36668;
(statearr_36716[(26)] = inst_36661);

return statearr_36716;
})();
var statearr_36717_38100 = state_36668__$1;
(statearr_36717_38100[(2)] = null);

(statearr_36717_38100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (6))){
var inst_36602 = (state_36668[(27)]);
var inst_36601 = cljs.core.deref(cs);
var inst_36602__$1 = cljs.core.keys(inst_36601);
var inst_36603 = cljs.core.count(inst_36602__$1);
var inst_36604 = cljs.core.reset_BANG_(dctr,inst_36603);
var inst_36609 = cljs.core.seq(inst_36602__$1);
var inst_36610 = inst_36609;
var inst_36611 = null;
var inst_36612 = (0);
var inst_36613 = (0);
var state_36668__$1 = (function (){var statearr_36718 = state_36668;
(statearr_36718[(19)] = inst_36610);

(statearr_36718[(9)] = inst_36611);

(statearr_36718[(27)] = inst_36602__$1);

(statearr_36718[(28)] = inst_36604);

(statearr_36718[(20)] = inst_36612);

(statearr_36718[(11)] = inst_36613);

return statearr_36718;
})();
var statearr_36719_38104 = state_36668__$1;
(statearr_36719_38104[(2)] = null);

(statearr_36719_38104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (28))){
var inst_36610 = (state_36668[(19)]);
var inst_36628 = (state_36668[(23)]);
var inst_36628__$1 = cljs.core.seq(inst_36610);
var state_36668__$1 = (function (){var statearr_36720 = state_36668;
(statearr_36720[(23)] = inst_36628__$1);

return statearr_36720;
})();
if(inst_36628__$1){
var statearr_36721_38110 = state_36668__$1;
(statearr_36721_38110[(1)] = (33));

} else {
var statearr_36722_38111 = state_36668__$1;
(statearr_36722_38111[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (25))){
var inst_36612 = (state_36668[(20)]);
var inst_36613 = (state_36668[(11)]);
var inst_36615 = (inst_36613 < inst_36612);
var inst_36616 = inst_36615;
var state_36668__$1 = state_36668;
if(cljs.core.truth_(inst_36616)){
var statearr_36723_38113 = state_36668__$1;
(statearr_36723_38113[(1)] = (27));

} else {
var statearr_36724_38114 = state_36668__$1;
(statearr_36724_38114[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (34))){
var state_36668__$1 = state_36668;
var statearr_36725_38115 = state_36668__$1;
(statearr_36725_38115[(2)] = null);

(statearr_36725_38115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (17))){
var state_36668__$1 = state_36668;
var statearr_36726_38116 = state_36668__$1;
(statearr_36726_38116[(2)] = null);

(statearr_36726_38116[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (3))){
var inst_36666 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36668__$1,inst_36666);
} else {
if((state_val_36669 === (12))){
var inst_36597 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36727_38118 = state_36668__$1;
(statearr_36727_38118[(2)] = inst_36597);

(statearr_36727_38118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (2))){
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36668__$1,(4),ch);
} else {
if((state_val_36669 === (23))){
var state_36668__$1 = state_36668;
var statearr_36728_38120 = state_36668__$1;
(statearr_36728_38120[(2)] = null);

(statearr_36728_38120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (35))){
var inst_36650 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36729_38123 = state_36668__$1;
(statearr_36729_38123[(2)] = inst_36650);

(statearr_36729_38123[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (19))){
var inst_36567 = (state_36668[(7)]);
var inst_36571 = cljs.core.chunk_first(inst_36567);
var inst_36572 = cljs.core.chunk_rest(inst_36567);
var inst_36573 = cljs.core.count(inst_36571);
var inst_36545 = inst_36572;
var inst_36546 = inst_36571;
var inst_36547 = inst_36573;
var inst_36548 = (0);
var state_36668__$1 = (function (){var statearr_36730 = state_36668;
(statearr_36730[(13)] = inst_36547);

(statearr_36730[(15)] = inst_36546);

(statearr_36730[(16)] = inst_36548);

(statearr_36730[(17)] = inst_36545);

return statearr_36730;
})();
var statearr_36731_38124 = state_36668__$1;
(statearr_36731_38124[(2)] = null);

(statearr_36731_38124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (11))){
var inst_36567 = (state_36668[(7)]);
var inst_36545 = (state_36668[(17)]);
var inst_36567__$1 = cljs.core.seq(inst_36545);
var state_36668__$1 = (function (){var statearr_36732 = state_36668;
(statearr_36732[(7)] = inst_36567__$1);

return statearr_36732;
})();
if(inst_36567__$1){
var statearr_36733_38130 = state_36668__$1;
(statearr_36733_38130[(1)] = (16));

} else {
var statearr_36734_38131 = state_36668__$1;
(statearr_36734_38131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (9))){
var inst_36599 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36735_38132 = state_36668__$1;
(statearr_36735_38132[(2)] = inst_36599);

(statearr_36735_38132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (5))){
var inst_36543 = cljs.core.deref(cs);
var inst_36544 = cljs.core.seq(inst_36543);
var inst_36545 = inst_36544;
var inst_36546 = null;
var inst_36547 = (0);
var inst_36548 = (0);
var state_36668__$1 = (function (){var statearr_36736 = state_36668;
(statearr_36736[(13)] = inst_36547);

(statearr_36736[(15)] = inst_36546);

(statearr_36736[(16)] = inst_36548);

(statearr_36736[(17)] = inst_36545);

return statearr_36736;
})();
var statearr_36740_38133 = state_36668__$1;
(statearr_36740_38133[(2)] = null);

(statearr_36740_38133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (14))){
var state_36668__$1 = state_36668;
var statearr_36741_38134 = state_36668__$1;
(statearr_36741_38134[(2)] = null);

(statearr_36741_38134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (45))){
var inst_36658 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36743_38135 = state_36668__$1;
(statearr_36743_38135[(2)] = inst_36658);

(statearr_36743_38135[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (26))){
var inst_36602 = (state_36668[(27)]);
var inst_36654 = (state_36668[(2)]);
var inst_36655 = cljs.core.seq(inst_36602);
var state_36668__$1 = (function (){var statearr_36745 = state_36668;
(statearr_36745[(29)] = inst_36654);

return statearr_36745;
})();
if(inst_36655){
var statearr_36746_38136 = state_36668__$1;
(statearr_36746_38136[(1)] = (42));

} else {
var statearr_36747_38137 = state_36668__$1;
(statearr_36747_38137[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (16))){
var inst_36567 = (state_36668[(7)]);
var inst_36569 = cljs.core.chunked_seq_QMARK_(inst_36567);
var state_36668__$1 = state_36668;
if(inst_36569){
var statearr_36748_38138 = state_36668__$1;
(statearr_36748_38138[(1)] = (19));

} else {
var statearr_36749_38139 = state_36668__$1;
(statearr_36749_38139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (38))){
var inst_36647 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36750_38141 = state_36668__$1;
(statearr_36750_38141[(2)] = inst_36647);

(statearr_36750_38141[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (30))){
var state_36668__$1 = state_36668;
var statearr_36751_38145 = state_36668__$1;
(statearr_36751_38145[(2)] = null);

(statearr_36751_38145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (10))){
var inst_36546 = (state_36668[(15)]);
var inst_36548 = (state_36668[(16)]);
var inst_36556 = cljs.core._nth(inst_36546,inst_36548);
var inst_36557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36556,(0),null);
var inst_36558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36556,(1),null);
var state_36668__$1 = (function (){var statearr_36754 = state_36668;
(statearr_36754[(24)] = inst_36557);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36558)){
var statearr_36755_38146 = state_36668__$1;
(statearr_36755_38146[(1)] = (13));

} else {
var statearr_36756_38147 = state_36668__$1;
(statearr_36756_38147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (18))){
var inst_36595 = (state_36668[(2)]);
var state_36668__$1 = state_36668;
var statearr_36757_38148 = state_36668__$1;
(statearr_36757_38148[(2)] = inst_36595);

(statearr_36757_38148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (42))){
var state_36668__$1 = state_36668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36668__$1,(45),dchan);
} else {
if((state_val_36669 === (37))){
var inst_36628 = (state_36668[(23)]);
var inst_36536 = (state_36668[(10)]);
var inst_36637 = (state_36668[(22)]);
var inst_36637__$1 = cljs.core.first(inst_36628);
var inst_36638 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36637__$1,inst_36536,done);
var state_36668__$1 = (function (){var statearr_36758 = state_36668;
(statearr_36758[(22)] = inst_36637__$1);

return statearr_36758;
})();
if(cljs.core.truth_(inst_36638)){
var statearr_36759_38154 = state_36668__$1;
(statearr_36759_38154[(1)] = (39));

} else {
var statearr_36760_38155 = state_36668__$1;
(statearr_36760_38155[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36669 === (8))){
var inst_36547 = (state_36668[(13)]);
var inst_36548 = (state_36668[(16)]);
var inst_36550 = (inst_36548 < inst_36547);
var inst_36551 = inst_36550;
var state_36668__$1 = state_36668;
if(cljs.core.truth_(inst_36551)){
var statearr_36761_38160 = state_36668__$1;
(statearr_36761_38160[(1)] = (10));

} else {
var statearr_36762_38161 = state_36668__$1;
(statearr_36762_38161[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32713__auto__ = null;
var cljs$core$async$mult_$_state_machine__32713__auto____0 = (function (){
var statearr_36763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36763[(0)] = cljs$core$async$mult_$_state_machine__32713__auto__);

(statearr_36763[(1)] = (1));

return statearr_36763;
});
var cljs$core$async$mult_$_state_machine__32713__auto____1 = (function (state_36668){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36668);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36766){var ex__32716__auto__ = e36766;
var statearr_36767_38166 = state_36668;
(statearr_36767_38166[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36668[(4)]))){
var statearr_36768_38170 = state_36668;
(statearr_36768_38170[(1)] = cljs.core.first((state_36668[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38171 = state_36668;
state_36668 = G__38171;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32713__auto__ = function(state_36668){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32713__auto____1.call(this,state_36668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32713__auto____0;
cljs$core$async$mult_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32713__auto____1;
return cljs$core$async$mult_$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36769 = f__32783__auto__();
(statearr_36769[(6)] = c__32782__auto___38061);

return statearr_36769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36771 = arguments.length;
switch (G__36771) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_38180 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38180(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38184 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38184(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38188 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38188(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38190 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38190(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38194 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38194(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38203 = arguments.length;
var i__4819__auto___38204 = (0);
while(true){
if((i__4819__auto___38204 < len__4818__auto___38203)){
args__4824__auto__.push((arguments[i__4819__auto___38204]));

var G__38209 = (i__4819__auto___38204 + (1));
i__4819__auto___38204 = G__38209;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36785){
var map__36786 = p__36785;
var map__36786__$1 = cljs.core.__destructure_map(map__36786);
var opts = map__36786__$1;
var statearr_36787_38220 = state;
(statearr_36787_38220[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36788_38224 = state;
(statearr_36788_38224[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36789_38229 = state;
(statearr_36789_38229[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36781){
var G__36782 = cljs.core.first(seq36781);
var seq36781__$1 = cljs.core.next(seq36781);
var G__36783 = cljs.core.first(seq36781__$1);
var seq36781__$2 = cljs.core.next(seq36781__$1);
var G__36784 = cljs.core.first(seq36781__$2);
var seq36781__$3 = cljs.core.next(seq36781__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36782,G__36783,G__36784,seq36781__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36790 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36791){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36791 = meta36791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36792,meta36791__$1){
var self__ = this;
var _36792__$1 = this;
return (new cljs.core.async.t_cljs$core$async36790(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36791__$1));
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36792){
var self__ = this;
var _36792__$1 = this;
return self__.meta36791;
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36791","meta36791",-56374917,null)], null);
}));

(cljs.core.async.t_cljs$core$async36790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36790");

(cljs.core.async.t_cljs$core$async36790.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36790.
 */
cljs.core.async.__GT_t_cljs$core$async36790 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36790(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36791){
return (new cljs.core.async.t_cljs$core$async36790(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36791));
});

}

return (new cljs.core.async.t_cljs$core$async36790(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32782__auto___38248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_36871){
var state_val_36872 = (state_36871[(1)]);
if((state_val_36872 === (7))){
var inst_36831 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
if(cljs.core.truth_(inst_36831)){
var statearr_36875_38252 = state_36871__$1;
(statearr_36875_38252[(1)] = (8));

} else {
var statearr_36876_38253 = state_36871__$1;
(statearr_36876_38253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (20))){
var inst_36824 = (state_36871[(7)]);
var state_36871__$1 = state_36871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36871__$1,(23),out,inst_36824);
} else {
if((state_val_36872 === (1))){
var inst_36806 = calc_state();
var inst_36807 = cljs.core.__destructure_map(inst_36806);
var inst_36808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36807,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36807,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36807,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36811 = inst_36806;
var state_36871__$1 = (function (){var statearr_36877 = state_36871;
(statearr_36877[(8)] = inst_36810);

(statearr_36877[(9)] = inst_36811);

(statearr_36877[(10)] = inst_36808);

(statearr_36877[(11)] = inst_36809);

return statearr_36877;
})();
var statearr_36878_38257 = state_36871__$1;
(statearr_36878_38257[(2)] = null);

(statearr_36878_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (24))){
var inst_36814 = (state_36871[(12)]);
var inst_36811 = inst_36814;
var state_36871__$1 = (function (){var statearr_36883 = state_36871;
(statearr_36883[(9)] = inst_36811);

return statearr_36883;
})();
var statearr_36884_38258 = state_36871__$1;
(statearr_36884_38258[(2)] = null);

(statearr_36884_38258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (4))){
var inst_36824 = (state_36871[(7)]);
var inst_36826 = (state_36871[(13)]);
var inst_36823 = (state_36871[(2)]);
var inst_36824__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36823,(0),null);
var inst_36825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36823,(1),null);
var inst_36826__$1 = (inst_36824__$1 == null);
var state_36871__$1 = (function (){var statearr_36885 = state_36871;
(statearr_36885[(7)] = inst_36824__$1);

(statearr_36885[(14)] = inst_36825);

(statearr_36885[(13)] = inst_36826__$1);

return statearr_36885;
})();
if(cljs.core.truth_(inst_36826__$1)){
var statearr_36886_38259 = state_36871__$1;
(statearr_36886_38259[(1)] = (5));

} else {
var statearr_36887_38260 = state_36871__$1;
(statearr_36887_38260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (15))){
var inst_36815 = (state_36871[(15)]);
var inst_36845 = (state_36871[(16)]);
var inst_36845__$1 = cljs.core.empty_QMARK_(inst_36815);
var state_36871__$1 = (function (){var statearr_36888 = state_36871;
(statearr_36888[(16)] = inst_36845__$1);

return statearr_36888;
})();
if(inst_36845__$1){
var statearr_36889_38264 = state_36871__$1;
(statearr_36889_38264[(1)] = (17));

} else {
var statearr_36890_38265 = state_36871__$1;
(statearr_36890_38265[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (21))){
var inst_36814 = (state_36871[(12)]);
var inst_36811 = inst_36814;
var state_36871__$1 = (function (){var statearr_36891 = state_36871;
(statearr_36891[(9)] = inst_36811);

return statearr_36891;
})();
var statearr_36892_38266 = state_36871__$1;
(statearr_36892_38266[(2)] = null);

(statearr_36892_38266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (13))){
var inst_36838 = (state_36871[(2)]);
var inst_36839 = calc_state();
var inst_36811 = inst_36839;
var state_36871__$1 = (function (){var statearr_36893 = state_36871;
(statearr_36893[(9)] = inst_36811);

(statearr_36893[(17)] = inst_36838);

return statearr_36893;
})();
var statearr_36894_38271 = state_36871__$1;
(statearr_36894_38271[(2)] = null);

(statearr_36894_38271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (22))){
var inst_36865 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36895_38272 = state_36871__$1;
(statearr_36895_38272[(2)] = inst_36865);

(statearr_36895_38272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (6))){
var inst_36825 = (state_36871[(14)]);
var inst_36829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36825,change);
var state_36871__$1 = state_36871;
var statearr_36896_38273 = state_36871__$1;
(statearr_36896_38273[(2)] = inst_36829);

(statearr_36896_38273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (25))){
var state_36871__$1 = state_36871;
var statearr_36898_38274 = state_36871__$1;
(statearr_36898_38274[(2)] = null);

(statearr_36898_38274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (17))){
var inst_36825 = (state_36871[(14)]);
var inst_36816 = (state_36871[(18)]);
var inst_36847 = (inst_36816.cljs$core$IFn$_invoke$arity$1 ? inst_36816.cljs$core$IFn$_invoke$arity$1(inst_36825) : inst_36816.call(null,inst_36825));
var inst_36848 = cljs.core.not(inst_36847);
var state_36871__$1 = state_36871;
var statearr_36899_38275 = state_36871__$1;
(statearr_36899_38275[(2)] = inst_36848);

(statearr_36899_38275[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (3))){
var inst_36869 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36871__$1,inst_36869);
} else {
if((state_val_36872 === (12))){
var state_36871__$1 = state_36871;
var statearr_36900_38276 = state_36871__$1;
(statearr_36900_38276[(2)] = null);

(statearr_36900_38276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (2))){
var inst_36814 = (state_36871[(12)]);
var inst_36811 = (state_36871[(9)]);
var inst_36814__$1 = cljs.core.__destructure_map(inst_36811);
var inst_36815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36814__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36814__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36814__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36871__$1 = (function (){var statearr_36901 = state_36871;
(statearr_36901[(12)] = inst_36814__$1);

(statearr_36901[(15)] = inst_36815);

(statearr_36901[(18)] = inst_36816);

return statearr_36901;
})();
return cljs.core.async.ioc_alts_BANG_(state_36871__$1,(4),inst_36817);
} else {
if((state_val_36872 === (23))){
var inst_36856 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
if(cljs.core.truth_(inst_36856)){
var statearr_36902_38277 = state_36871__$1;
(statearr_36902_38277[(1)] = (24));

} else {
var statearr_36904_38278 = state_36871__$1;
(statearr_36904_38278[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (19))){
var inst_36851 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36907_38279 = state_36871__$1;
(statearr_36907_38279[(2)] = inst_36851);

(statearr_36907_38279[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (11))){
var inst_36825 = (state_36871[(14)]);
var inst_36835 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36825);
var state_36871__$1 = state_36871;
var statearr_36911_38280 = state_36871__$1;
(statearr_36911_38280[(2)] = inst_36835);

(statearr_36911_38280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (9))){
var inst_36842 = (state_36871[(19)]);
var inst_36815 = (state_36871[(15)]);
var inst_36825 = (state_36871[(14)]);
var inst_36842__$1 = (inst_36815.cljs$core$IFn$_invoke$arity$1 ? inst_36815.cljs$core$IFn$_invoke$arity$1(inst_36825) : inst_36815.call(null,inst_36825));
var state_36871__$1 = (function (){var statearr_36912 = state_36871;
(statearr_36912[(19)] = inst_36842__$1);

return statearr_36912;
})();
if(cljs.core.truth_(inst_36842__$1)){
var statearr_36913_38281 = state_36871__$1;
(statearr_36913_38281[(1)] = (14));

} else {
var statearr_36914_38282 = state_36871__$1;
(statearr_36914_38282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (5))){
var inst_36826 = (state_36871[(13)]);
var state_36871__$1 = state_36871;
var statearr_36915_38284 = state_36871__$1;
(statearr_36915_38284[(2)] = inst_36826);

(statearr_36915_38284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (14))){
var inst_36842 = (state_36871[(19)]);
var state_36871__$1 = state_36871;
var statearr_36916_38285 = state_36871__$1;
(statearr_36916_38285[(2)] = inst_36842);

(statearr_36916_38285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (26))){
var inst_36861 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36917_38287 = state_36871__$1;
(statearr_36917_38287[(2)] = inst_36861);

(statearr_36917_38287[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (16))){
var inst_36853 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
if(cljs.core.truth_(inst_36853)){
var statearr_36918_38288 = state_36871__$1;
(statearr_36918_38288[(1)] = (20));

} else {
var statearr_36919_38289 = state_36871__$1;
(statearr_36919_38289[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (10))){
var inst_36867 = (state_36871[(2)]);
var state_36871__$1 = state_36871;
var statearr_36920_38290 = state_36871__$1;
(statearr_36920_38290[(2)] = inst_36867);

(statearr_36920_38290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (18))){
var inst_36845 = (state_36871[(16)]);
var state_36871__$1 = state_36871;
var statearr_36921_38291 = state_36871__$1;
(statearr_36921_38291[(2)] = inst_36845);

(statearr_36921_38291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36872 === (8))){
var inst_36824 = (state_36871[(7)]);
var inst_36833 = (inst_36824 == null);
var state_36871__$1 = state_36871;
if(cljs.core.truth_(inst_36833)){
var statearr_36922_38292 = state_36871__$1;
(statearr_36922_38292[(1)] = (11));

} else {
var statearr_36923_38293 = state_36871__$1;
(statearr_36923_38293[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32713__auto__ = null;
var cljs$core$async$mix_$_state_machine__32713__auto____0 = (function (){
var statearr_36924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36924[(0)] = cljs$core$async$mix_$_state_machine__32713__auto__);

(statearr_36924[(1)] = (1));

return statearr_36924;
});
var cljs$core$async$mix_$_state_machine__32713__auto____1 = (function (state_36871){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_36871);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e36925){var ex__32716__auto__ = e36925;
var statearr_36926_38294 = state_36871;
(statearr_36926_38294[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_36871[(4)]))){
var statearr_36927_38295 = state_36871;
(statearr_36927_38295[(1)] = cljs.core.first((state_36871[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38296 = state_36871;
state_36871 = G__38296;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32713__auto__ = function(state_36871){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32713__auto____1.call(this,state_36871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32713__auto____0;
cljs$core$async$mix_$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32713__auto____1;
return cljs$core$async$mix_$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_36928 = f__32783__auto__();
(statearr_36928[(6)] = c__32782__auto___38248);

return statearr_36928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_38297 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38297(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38298 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38298(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38299 = (function() {
var G__38300 = null;
var G__38300__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38300__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38300 = function(p,v){
switch(arguments.length){
case 1:
return G__38300__1.call(this,p);
case 2:
return G__38300__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38300.cljs$core$IFn$_invoke$arity$1 = G__38300__1;
G__38300.cljs$core$IFn$_invoke$arity$2 = G__38300__2;
return G__38300;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36934 = arguments.length;
switch (G__36934) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38299(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38299(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36939 = arguments.length;
switch (G__36939) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36937_SHARP_){
if(cljs.core.truth_((p1__36937_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36937_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36937_SHARP_.call(null,topic)))){
return p1__36937_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36937_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36940 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36941){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36941 = meta36941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36942,meta36941__$1){
var self__ = this;
var _36942__$1 = this;
return (new cljs.core.async.t_cljs$core$async36940(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36941__$1));
}));

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36942){
var self__ = this;
var _36942__$1 = this;
return self__.meta36941;
}));

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36940.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36941","meta36941",198999878,null)], null);
}));

(cljs.core.async.t_cljs$core$async36940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36940");

(cljs.core.async.t_cljs$core$async36940.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36940.
 */
cljs.core.async.__GT_t_cljs$core$async36940 = (function cljs$core$async$__GT_t_cljs$core$async36940(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36941){
return (new cljs.core.async.t_cljs$core$async36940(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36941));
});

}

return (new cljs.core.async.t_cljs$core$async36940(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32782__auto___38311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37014){
var state_val_37015 = (state_37014[(1)]);
if((state_val_37015 === (7))){
var inst_37010 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37016_38312 = state_37014__$1;
(statearr_37016_38312[(2)] = inst_37010);

(statearr_37016_38312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (20))){
var state_37014__$1 = state_37014;
var statearr_37017_38313 = state_37014__$1;
(statearr_37017_38313[(2)] = null);

(statearr_37017_38313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (1))){
var state_37014__$1 = state_37014;
var statearr_37018_38314 = state_37014__$1;
(statearr_37018_38314[(2)] = null);

(statearr_37018_38314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (24))){
var inst_36993 = (state_37014[(7)]);
var inst_37002 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36993);
var state_37014__$1 = state_37014;
var statearr_37019_38315 = state_37014__$1;
(statearr_37019_38315[(2)] = inst_37002);

(statearr_37019_38315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (4))){
var inst_36945 = (state_37014[(8)]);
var inst_36945__$1 = (state_37014[(2)]);
var inst_36946 = (inst_36945__$1 == null);
var state_37014__$1 = (function (){var statearr_37020 = state_37014;
(statearr_37020[(8)] = inst_36945__$1);

return statearr_37020;
})();
if(cljs.core.truth_(inst_36946)){
var statearr_37021_38317 = state_37014__$1;
(statearr_37021_38317[(1)] = (5));

} else {
var statearr_37022_38318 = state_37014__$1;
(statearr_37022_38318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (15))){
var inst_36987 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37023_38319 = state_37014__$1;
(statearr_37023_38319[(2)] = inst_36987);

(statearr_37023_38319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (21))){
var inst_37007 = (state_37014[(2)]);
var state_37014__$1 = (function (){var statearr_37024 = state_37014;
(statearr_37024[(9)] = inst_37007);

return statearr_37024;
})();
var statearr_37025_38320 = state_37014__$1;
(statearr_37025_38320[(2)] = null);

(statearr_37025_38320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (13))){
var inst_36969 = (state_37014[(10)]);
var inst_36971 = cljs.core.chunked_seq_QMARK_(inst_36969);
var state_37014__$1 = state_37014;
if(inst_36971){
var statearr_37026_38321 = state_37014__$1;
(statearr_37026_38321[(1)] = (16));

} else {
var statearr_37027_38322 = state_37014__$1;
(statearr_37027_38322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (22))){
var inst_36999 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
if(cljs.core.truth_(inst_36999)){
var statearr_37028_38323 = state_37014__$1;
(statearr_37028_38323[(1)] = (23));

} else {
var statearr_37029_38324 = state_37014__$1;
(statearr_37029_38324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (6))){
var inst_36995 = (state_37014[(11)]);
var inst_36993 = (state_37014[(7)]);
var inst_36945 = (state_37014[(8)]);
var inst_36993__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36945) : topic_fn.call(null,inst_36945));
var inst_36994 = cljs.core.deref(mults);
var inst_36995__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36994,inst_36993__$1);
var state_37014__$1 = (function (){var statearr_37031 = state_37014;
(statearr_37031[(11)] = inst_36995__$1);

(statearr_37031[(7)] = inst_36993__$1);

return statearr_37031;
})();
if(cljs.core.truth_(inst_36995__$1)){
var statearr_37032_38326 = state_37014__$1;
(statearr_37032_38326[(1)] = (19));

} else {
var statearr_37033_38327 = state_37014__$1;
(statearr_37033_38327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (25))){
var inst_37004 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37034_38328 = state_37014__$1;
(statearr_37034_38328[(2)] = inst_37004);

(statearr_37034_38328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (17))){
var inst_36969 = (state_37014[(10)]);
var inst_36978 = cljs.core.first(inst_36969);
var inst_36979 = cljs.core.async.muxch_STAR_(inst_36978);
var inst_36980 = cljs.core.async.close_BANG_(inst_36979);
var inst_36981 = cljs.core.next(inst_36969);
var inst_36955 = inst_36981;
var inst_36956 = null;
var inst_36957 = (0);
var inst_36958 = (0);
var state_37014__$1 = (function (){var statearr_37035 = state_37014;
(statearr_37035[(12)] = inst_36958);

(statearr_37035[(13)] = inst_36957);

(statearr_37035[(14)] = inst_36956);

(statearr_37035[(15)] = inst_36980);

(statearr_37035[(16)] = inst_36955);

return statearr_37035;
})();
var statearr_37036_38329 = state_37014__$1;
(statearr_37036_38329[(2)] = null);

(statearr_37036_38329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (3))){
var inst_37012 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37014__$1,inst_37012);
} else {
if((state_val_37015 === (12))){
var inst_36989 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37037_38331 = state_37014__$1;
(statearr_37037_38331[(2)] = inst_36989);

(statearr_37037_38331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (2))){
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37014__$1,(4),ch);
} else {
if((state_val_37015 === (23))){
var state_37014__$1 = state_37014;
var statearr_37040_38335 = state_37014__$1;
(statearr_37040_38335[(2)] = null);

(statearr_37040_38335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (19))){
var inst_36995 = (state_37014[(11)]);
var inst_36945 = (state_37014[(8)]);
var inst_36997 = cljs.core.async.muxch_STAR_(inst_36995);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37014__$1,(22),inst_36997,inst_36945);
} else {
if((state_val_37015 === (11))){
var inst_36969 = (state_37014[(10)]);
var inst_36955 = (state_37014[(16)]);
var inst_36969__$1 = cljs.core.seq(inst_36955);
var state_37014__$1 = (function (){var statearr_37042 = state_37014;
(statearr_37042[(10)] = inst_36969__$1);

return statearr_37042;
})();
if(inst_36969__$1){
var statearr_37043_38336 = state_37014__$1;
(statearr_37043_38336[(1)] = (13));

} else {
var statearr_37044_38337 = state_37014__$1;
(statearr_37044_38337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (9))){
var inst_36991 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37045_38338 = state_37014__$1;
(statearr_37045_38338[(2)] = inst_36991);

(statearr_37045_38338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (5))){
var inst_36952 = cljs.core.deref(mults);
var inst_36953 = cljs.core.vals(inst_36952);
var inst_36954 = cljs.core.seq(inst_36953);
var inst_36955 = inst_36954;
var inst_36956 = null;
var inst_36957 = (0);
var inst_36958 = (0);
var state_37014__$1 = (function (){var statearr_37046 = state_37014;
(statearr_37046[(12)] = inst_36958);

(statearr_37046[(13)] = inst_36957);

(statearr_37046[(14)] = inst_36956);

(statearr_37046[(16)] = inst_36955);

return statearr_37046;
})();
var statearr_37047_38339 = state_37014__$1;
(statearr_37047_38339[(2)] = null);

(statearr_37047_38339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (14))){
var state_37014__$1 = state_37014;
var statearr_37051_38340 = state_37014__$1;
(statearr_37051_38340[(2)] = null);

(statearr_37051_38340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (16))){
var inst_36969 = (state_37014[(10)]);
var inst_36973 = cljs.core.chunk_first(inst_36969);
var inst_36974 = cljs.core.chunk_rest(inst_36969);
var inst_36975 = cljs.core.count(inst_36973);
var inst_36955 = inst_36974;
var inst_36956 = inst_36973;
var inst_36957 = inst_36975;
var inst_36958 = (0);
var state_37014__$1 = (function (){var statearr_37052 = state_37014;
(statearr_37052[(12)] = inst_36958);

(statearr_37052[(13)] = inst_36957);

(statearr_37052[(14)] = inst_36956);

(statearr_37052[(16)] = inst_36955);

return statearr_37052;
})();
var statearr_37053_38341 = state_37014__$1;
(statearr_37053_38341[(2)] = null);

(statearr_37053_38341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (10))){
var inst_36958 = (state_37014[(12)]);
var inst_36957 = (state_37014[(13)]);
var inst_36956 = (state_37014[(14)]);
var inst_36955 = (state_37014[(16)]);
var inst_36963 = cljs.core._nth(inst_36956,inst_36958);
var inst_36964 = cljs.core.async.muxch_STAR_(inst_36963);
var inst_36965 = cljs.core.async.close_BANG_(inst_36964);
var inst_36966 = (inst_36958 + (1));
var tmp37048 = inst_36957;
var tmp37049 = inst_36956;
var tmp37050 = inst_36955;
var inst_36955__$1 = tmp37050;
var inst_36956__$1 = tmp37049;
var inst_36957__$1 = tmp37048;
var inst_36958__$1 = inst_36966;
var state_37014__$1 = (function (){var statearr_37055 = state_37014;
(statearr_37055[(12)] = inst_36958__$1);

(statearr_37055[(13)] = inst_36957__$1);

(statearr_37055[(17)] = inst_36965);

(statearr_37055[(14)] = inst_36956__$1);

(statearr_37055[(16)] = inst_36955__$1);

return statearr_37055;
})();
var statearr_37056_38342 = state_37014__$1;
(statearr_37056_38342[(2)] = null);

(statearr_37056_38342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (18))){
var inst_36984 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37057_38343 = state_37014__$1;
(statearr_37057_38343[(2)] = inst_36984);

(statearr_37057_38343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (8))){
var inst_36958 = (state_37014[(12)]);
var inst_36957 = (state_37014[(13)]);
var inst_36960 = (inst_36958 < inst_36957);
var inst_36961 = inst_36960;
var state_37014__$1 = state_37014;
if(cljs.core.truth_(inst_36961)){
var statearr_37059_38344 = state_37014__$1;
(statearr_37059_38344[(1)] = (10));

} else {
var statearr_37060_38345 = state_37014__$1;
(statearr_37060_38345[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37065[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37065[(1)] = (1));

return statearr_37065;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37014){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37014);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37066){var ex__32716__auto__ = e37066;
var statearr_37067_38346 = state_37014;
(statearr_37067_38346[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37014[(4)]))){
var statearr_37068_38347 = state_37014;
(statearr_37068_38347[(1)] = cljs.core.first((state_37014[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38348 = state_37014;
state_37014 = G__38348;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37071 = f__32783__auto__();
(statearr_37071[(6)] = c__32782__auto___38311);

return statearr_37071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37073 = arguments.length;
switch (G__37073) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37079 = arguments.length;
switch (G__37079) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37086 = arguments.length;
switch (G__37086) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32782__auto___38356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37132){
var state_val_37133 = (state_37132[(1)]);
if((state_val_37133 === (7))){
var state_37132__$1 = state_37132;
var statearr_37134_38357 = state_37132__$1;
(statearr_37134_38357[(2)] = null);

(statearr_37134_38357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (1))){
var state_37132__$1 = state_37132;
var statearr_37135_38358 = state_37132__$1;
(statearr_37135_38358[(2)] = null);

(statearr_37135_38358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (4))){
var inst_37091 = (state_37132[(7)]);
var inst_37092 = (state_37132[(8)]);
var inst_37094 = (inst_37092 < inst_37091);
var state_37132__$1 = state_37132;
if(cljs.core.truth_(inst_37094)){
var statearr_37136_38359 = state_37132__$1;
(statearr_37136_38359[(1)] = (6));

} else {
var statearr_37137_38360 = state_37132__$1;
(statearr_37137_38360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (15))){
var inst_37118 = (state_37132[(9)]);
var inst_37123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37118);
var state_37132__$1 = state_37132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37132__$1,(17),out,inst_37123);
} else {
if((state_val_37133 === (13))){
var inst_37118 = (state_37132[(9)]);
var inst_37118__$1 = (state_37132[(2)]);
var inst_37119 = cljs.core.some(cljs.core.nil_QMARK_,inst_37118__$1);
var state_37132__$1 = (function (){var statearr_37139 = state_37132;
(statearr_37139[(9)] = inst_37118__$1);

return statearr_37139;
})();
if(cljs.core.truth_(inst_37119)){
var statearr_37142_38361 = state_37132__$1;
(statearr_37142_38361[(1)] = (14));

} else {
var statearr_37143_38362 = state_37132__$1;
(statearr_37143_38362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (6))){
var state_37132__$1 = state_37132;
var statearr_37144_38363 = state_37132__$1;
(statearr_37144_38363[(2)] = null);

(statearr_37144_38363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (17))){
var inst_37125 = (state_37132[(2)]);
var state_37132__$1 = (function (){var statearr_37147 = state_37132;
(statearr_37147[(10)] = inst_37125);

return statearr_37147;
})();
var statearr_37148_38364 = state_37132__$1;
(statearr_37148_38364[(2)] = null);

(statearr_37148_38364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (3))){
var inst_37130 = (state_37132[(2)]);
var state_37132__$1 = state_37132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37132__$1,inst_37130);
} else {
if((state_val_37133 === (12))){
var _ = (function (){var statearr_37149 = state_37132;
(statearr_37149[(4)] = cljs.core.rest((state_37132[(4)])));

return statearr_37149;
})();
var state_37132__$1 = state_37132;
var ex37146 = (state_37132__$1[(2)]);
var statearr_37150_38365 = state_37132__$1;
(statearr_37150_38365[(5)] = ex37146);


if((ex37146 instanceof Object)){
var statearr_37156_38366 = state_37132__$1;
(statearr_37156_38366[(1)] = (11));

(statearr_37156_38366[(5)] = null);

} else {
throw ex37146;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (2))){
var inst_37090 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37091 = cnt;
var inst_37092 = (0);
var state_37132__$1 = (function (){var statearr_37182 = state_37132;
(statearr_37182[(11)] = inst_37090);

(statearr_37182[(7)] = inst_37091);

(statearr_37182[(8)] = inst_37092);

return statearr_37182;
})();
var statearr_37187_38367 = state_37132__$1;
(statearr_37187_38367[(2)] = null);

(statearr_37187_38367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (11))){
var inst_37097 = (state_37132[(2)]);
var inst_37098 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37132__$1 = (function (){var statearr_37188 = state_37132;
(statearr_37188[(12)] = inst_37097);

return statearr_37188;
})();
var statearr_37189_38368 = state_37132__$1;
(statearr_37189_38368[(2)] = inst_37098);

(statearr_37189_38368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (9))){
var inst_37092 = (state_37132[(8)]);
var _ = (function (){var statearr_37190 = state_37132;
(statearr_37190[(4)] = cljs.core.cons((12),(state_37132[(4)])));

return statearr_37190;
})();
var inst_37104 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37092) : chs__$1.call(null,inst_37092));
var inst_37105 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37092) : done.call(null,inst_37092));
var inst_37106 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37104,inst_37105);
var ___$1 = (function (){var statearr_37191 = state_37132;
(statearr_37191[(4)] = cljs.core.rest((state_37132[(4)])));

return statearr_37191;
})();
var state_37132__$1 = state_37132;
var statearr_37192_38370 = state_37132__$1;
(statearr_37192_38370[(2)] = inst_37106);

(statearr_37192_38370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (5))){
var inst_37116 = (state_37132[(2)]);
var state_37132__$1 = (function (){var statearr_37193 = state_37132;
(statearr_37193[(13)] = inst_37116);

return statearr_37193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37132__$1,(13),dchan);
} else {
if((state_val_37133 === (14))){
var inst_37121 = cljs.core.async.close_BANG_(out);
var state_37132__$1 = state_37132;
var statearr_37194_38371 = state_37132__$1;
(statearr_37194_38371[(2)] = inst_37121);

(statearr_37194_38371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (16))){
var inst_37128 = (state_37132[(2)]);
var state_37132__$1 = state_37132;
var statearr_37200_38372 = state_37132__$1;
(statearr_37200_38372[(2)] = inst_37128);

(statearr_37200_38372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (10))){
var inst_37092 = (state_37132[(8)]);
var inst_37109 = (state_37132[(2)]);
var inst_37110 = (inst_37092 + (1));
var inst_37092__$1 = inst_37110;
var state_37132__$1 = (function (){var statearr_37207 = state_37132;
(statearr_37207[(14)] = inst_37109);

(statearr_37207[(8)] = inst_37092__$1);

return statearr_37207;
})();
var statearr_37209_38373 = state_37132__$1;
(statearr_37209_38373[(2)] = null);

(statearr_37209_38373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37133 === (8))){
var inst_37114 = (state_37132[(2)]);
var state_37132__$1 = state_37132;
var statearr_37215_38374 = state_37132__$1;
(statearr_37215_38374[(2)] = inst_37114);

(statearr_37215_38374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37220[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37220[(1)] = (1));

return statearr_37220;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37132){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37132);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37223){var ex__32716__auto__ = e37223;
var statearr_37224_38375 = state_37132;
(statearr_37224_38375[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37132[(4)]))){
var statearr_37225_38376 = state_37132;
(statearr_37225_38376[(1)] = cljs.core.first((state_37132[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38377 = state_37132;
state_37132 = G__38377;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37226 = f__32783__auto__();
(statearr_37226[(6)] = c__32782__auto___38356);

return statearr_37226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37229 = arguments.length;
switch (G__37229) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32782__auto___38379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37265){
var state_val_37266 = (state_37265[(1)]);
if((state_val_37266 === (7))){
var inst_37240 = (state_37265[(7)]);
var inst_37241 = (state_37265[(8)]);
var inst_37240__$1 = (state_37265[(2)]);
var inst_37241__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37240__$1,(0),null);
var inst_37242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37240__$1,(1),null);
var inst_37243 = (inst_37241__$1 == null);
var state_37265__$1 = (function (){var statearr_37267 = state_37265;
(statearr_37267[(9)] = inst_37242);

(statearr_37267[(7)] = inst_37240__$1);

(statearr_37267[(8)] = inst_37241__$1);

return statearr_37267;
})();
if(cljs.core.truth_(inst_37243)){
var statearr_37272_38384 = state_37265__$1;
(statearr_37272_38384[(1)] = (8));

} else {
var statearr_37274_38386 = state_37265__$1;
(statearr_37274_38386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (1))){
var inst_37230 = cljs.core.vec(chs);
var inst_37231 = inst_37230;
var state_37265__$1 = (function (){var statearr_37277 = state_37265;
(statearr_37277[(10)] = inst_37231);

return statearr_37277;
})();
var statearr_37279_38387 = state_37265__$1;
(statearr_37279_38387[(2)] = null);

(statearr_37279_38387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (4))){
var inst_37231 = (state_37265[(10)]);
var state_37265__$1 = state_37265;
return cljs.core.async.ioc_alts_BANG_(state_37265__$1,(7),inst_37231);
} else {
if((state_val_37266 === (6))){
var inst_37261 = (state_37265[(2)]);
var state_37265__$1 = state_37265;
var statearr_37280_38388 = state_37265__$1;
(statearr_37280_38388[(2)] = inst_37261);

(statearr_37280_38388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (3))){
var inst_37263 = (state_37265[(2)]);
var state_37265__$1 = state_37265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37265__$1,inst_37263);
} else {
if((state_val_37266 === (2))){
var inst_37231 = (state_37265[(10)]);
var inst_37233 = cljs.core.count(inst_37231);
var inst_37234 = (inst_37233 > (0));
var state_37265__$1 = state_37265;
if(cljs.core.truth_(inst_37234)){
var statearr_37282_38389 = state_37265__$1;
(statearr_37282_38389[(1)] = (4));

} else {
var statearr_37283_38390 = state_37265__$1;
(statearr_37283_38390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (11))){
var inst_37231 = (state_37265[(10)]);
var inst_37253 = (state_37265[(2)]);
var tmp37281 = inst_37231;
var inst_37231__$1 = tmp37281;
var state_37265__$1 = (function (){var statearr_37284 = state_37265;
(statearr_37284[(11)] = inst_37253);

(statearr_37284[(10)] = inst_37231__$1);

return statearr_37284;
})();
var statearr_37285_38392 = state_37265__$1;
(statearr_37285_38392[(2)] = null);

(statearr_37285_38392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (9))){
var inst_37241 = (state_37265[(8)]);
var state_37265__$1 = state_37265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37265__$1,(11),out,inst_37241);
} else {
if((state_val_37266 === (5))){
var inst_37259 = cljs.core.async.close_BANG_(out);
var state_37265__$1 = state_37265;
var statearr_37286_38393 = state_37265__$1;
(statearr_37286_38393[(2)] = inst_37259);

(statearr_37286_38393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (10))){
var inst_37256 = (state_37265[(2)]);
var state_37265__$1 = state_37265;
var statearr_37287_38398 = state_37265__$1;
(statearr_37287_38398[(2)] = inst_37256);

(statearr_37287_38398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37266 === (8))){
var inst_37242 = (state_37265[(9)]);
var inst_37240 = (state_37265[(7)]);
var inst_37231 = (state_37265[(10)]);
var inst_37241 = (state_37265[(8)]);
var inst_37248 = (function (){var cs = inst_37231;
var vec__37236 = inst_37240;
var v = inst_37241;
var c = inst_37242;
return (function (p1__37227_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37227_SHARP_);
});
})();
var inst_37249 = cljs.core.filterv(inst_37248,inst_37231);
var inst_37231__$1 = inst_37249;
var state_37265__$1 = (function (){var statearr_37288 = state_37265;
(statearr_37288[(10)] = inst_37231__$1);

return statearr_37288;
})();
var statearr_37289_38399 = state_37265__$1;
(statearr_37289_38399[(2)] = null);

(statearr_37289_38399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37290 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37290[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37290[(1)] = (1));

return statearr_37290;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37265){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37265);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37291){var ex__32716__auto__ = e37291;
var statearr_37292_38400 = state_37265;
(statearr_37292_38400[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37265[(4)]))){
var statearr_37293_38401 = state_37265;
(statearr_37293_38401[(1)] = cljs.core.first((state_37265[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38402 = state_37265;
state_37265 = G__38402;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37294 = f__32783__auto__();
(statearr_37294[(6)] = c__32782__auto___38379);

return statearr_37294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37296 = arguments.length;
switch (G__37296) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32782__auto___38404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37320){
var state_val_37321 = (state_37320[(1)]);
if((state_val_37321 === (7))){
var inst_37302 = (state_37320[(7)]);
var inst_37302__$1 = (state_37320[(2)]);
var inst_37303 = (inst_37302__$1 == null);
var inst_37304 = cljs.core.not(inst_37303);
var state_37320__$1 = (function (){var statearr_37322 = state_37320;
(statearr_37322[(7)] = inst_37302__$1);

return statearr_37322;
})();
if(inst_37304){
var statearr_37323_38405 = state_37320__$1;
(statearr_37323_38405[(1)] = (8));

} else {
var statearr_37324_38406 = state_37320__$1;
(statearr_37324_38406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (1))){
var inst_37297 = (0);
var state_37320__$1 = (function (){var statearr_37325 = state_37320;
(statearr_37325[(8)] = inst_37297);

return statearr_37325;
})();
var statearr_37326_38407 = state_37320__$1;
(statearr_37326_38407[(2)] = null);

(statearr_37326_38407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (4))){
var state_37320__$1 = state_37320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37320__$1,(7),ch);
} else {
if((state_val_37321 === (6))){
var inst_37315 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37327_38408 = state_37320__$1;
(statearr_37327_38408[(2)] = inst_37315);

(statearr_37327_38408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (3))){
var inst_37317 = (state_37320[(2)]);
var inst_37318 = cljs.core.async.close_BANG_(out);
var state_37320__$1 = (function (){var statearr_37328 = state_37320;
(statearr_37328[(9)] = inst_37317);

return statearr_37328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37320__$1,inst_37318);
} else {
if((state_val_37321 === (2))){
var inst_37297 = (state_37320[(8)]);
var inst_37299 = (inst_37297 < n);
var state_37320__$1 = state_37320;
if(cljs.core.truth_(inst_37299)){
var statearr_37329_38410 = state_37320__$1;
(statearr_37329_38410[(1)] = (4));

} else {
var statearr_37330_38411 = state_37320__$1;
(statearr_37330_38411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (11))){
var inst_37297 = (state_37320[(8)]);
var inst_37307 = (state_37320[(2)]);
var inst_37308 = (inst_37297 + (1));
var inst_37297__$1 = inst_37308;
var state_37320__$1 = (function (){var statearr_37331 = state_37320;
(statearr_37331[(10)] = inst_37307);

(statearr_37331[(8)] = inst_37297__$1);

return statearr_37331;
})();
var statearr_37332_38415 = state_37320__$1;
(statearr_37332_38415[(2)] = null);

(statearr_37332_38415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (9))){
var state_37320__$1 = state_37320;
var statearr_37333_38416 = state_37320__$1;
(statearr_37333_38416[(2)] = null);

(statearr_37333_38416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (5))){
var state_37320__$1 = state_37320;
var statearr_37334_38417 = state_37320__$1;
(statearr_37334_38417[(2)] = null);

(statearr_37334_38417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (10))){
var inst_37312 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37335_38418 = state_37320__$1;
(statearr_37335_38418[(2)] = inst_37312);

(statearr_37335_38418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (8))){
var inst_37302 = (state_37320[(7)]);
var state_37320__$1 = state_37320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37320__$1,(11),out,inst_37302);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37338[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37338[(1)] = (1));

return statearr_37338;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37320){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37320);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37339){var ex__32716__auto__ = e37339;
var statearr_37340_38419 = state_37320;
(statearr_37340_38419[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37320[(4)]))){
var statearr_37341_38420 = state_37320;
(statearr_37341_38420[(1)] = cljs.core.first((state_37320[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38421 = state_37320;
state_37320 = G__38421;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37342 = f__32783__auto__();
(statearr_37342[(6)] = c__32782__auto___38404);

return statearr_37342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37347 = (function (f,ch,meta37348){
this.f = f;
this.ch = ch;
this.meta37348 = meta37348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37349,meta37348__$1){
var self__ = this;
var _37349__$1 = this;
return (new cljs.core.async.t_cljs$core$async37347(self__.f,self__.ch,meta37348__$1));
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37349){
var self__ = this;
var _37349__$1 = this;
return self__.meta37348;
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37352 = (function (f,ch,meta37348,_,fn1,meta37353){
this.f = f;
this.ch = ch;
this.meta37348 = meta37348;
this._ = _;
this.fn1 = fn1;
this.meta37353 = meta37353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37354,meta37353__$1){
var self__ = this;
var _37354__$1 = this;
return (new cljs.core.async.t_cljs$core$async37352(self__.f,self__.ch,self__.meta37348,self__._,self__.fn1,meta37353__$1));
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37354){
var self__ = this;
var _37354__$1 = this;
return self__.meta37353;
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37343_SHARP_){
var G__37355 = (((p1__37343_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37343_SHARP_) : self__.f.call(null,p1__37343_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37355) : f1.call(null,G__37355));
});
}));

(cljs.core.async.t_cljs$core$async37352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37348","meta37348",-882657328,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37347","cljs.core.async/t_cljs$core$async37347",-388749895,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37353","meta37353",594000621,null)], null);
}));

(cljs.core.async.t_cljs$core$async37352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37352");

(cljs.core.async.t_cljs$core$async37352.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37352.
 */
cljs.core.async.__GT_t_cljs$core$async37352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37352(f__$1,ch__$1,meta37348__$1,___$2,fn1__$1,meta37353){
return (new cljs.core.async.t_cljs$core$async37352(f__$1,ch__$1,meta37348__$1,___$2,fn1__$1,meta37353));
});

}

return (new cljs.core.async.t_cljs$core$async37352(self__.f,self__.ch,self__.meta37348,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37356 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37356) : self__.f.call(null,G__37356));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37348","meta37348",-882657328,null)], null);
}));

(cljs.core.async.t_cljs$core$async37347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37347");

(cljs.core.async.t_cljs$core$async37347.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37347.
 */
cljs.core.async.__GT_t_cljs$core$async37347 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37347(f__$1,ch__$1,meta37348){
return (new cljs.core.async.t_cljs$core$async37347(f__$1,ch__$1,meta37348));
});

}

return (new cljs.core.async.t_cljs$core$async37347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37363 = (function (f,ch,meta37364){
this.f = f;
this.ch = ch;
this.meta37364 = meta37364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37365,meta37364__$1){
var self__ = this;
var _37365__$1 = this;
return (new cljs.core.async.t_cljs$core$async37363(self__.f,self__.ch,meta37364__$1));
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37365){
var self__ = this;
var _37365__$1 = this;
return self__.meta37364;
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37364","meta37364",1439717857,null)], null);
}));

(cljs.core.async.t_cljs$core$async37363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37363");

(cljs.core.async.t_cljs$core$async37363.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37363.
 */
cljs.core.async.__GT_t_cljs$core$async37363 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37363(f__$1,ch__$1,meta37364){
return (new cljs.core.async.t_cljs$core$async37363(f__$1,ch__$1,meta37364));
});

}

return (new cljs.core.async.t_cljs$core$async37363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37368 = (function (p,ch,meta37369){
this.p = p;
this.ch = ch;
this.meta37369 = meta37369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37370,meta37369__$1){
var self__ = this;
var _37370__$1 = this;
return (new cljs.core.async.t_cljs$core$async37368(self__.p,self__.ch,meta37369__$1));
}));

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37370){
var self__ = this;
var _37370__$1 = this;
return self__.meta37369;
}));

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37369","meta37369",-77317040,null)], null);
}));

(cljs.core.async.t_cljs$core$async37368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37368");

(cljs.core.async.t_cljs$core$async37368.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37368.
 */
cljs.core.async.__GT_t_cljs$core$async37368 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37368(p__$1,ch__$1,meta37369){
return (new cljs.core.async.t_cljs$core$async37368(p__$1,ch__$1,meta37369));
});

}

return (new cljs.core.async.t_cljs$core$async37368(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37374 = arguments.length;
switch (G__37374) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32782__auto___38434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37395){
var state_val_37396 = (state_37395[(1)]);
if((state_val_37396 === (7))){
var inst_37391 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37402_38435 = state_37395__$1;
(statearr_37402_38435[(2)] = inst_37391);

(statearr_37402_38435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (1))){
var state_37395__$1 = state_37395;
var statearr_37403_38436 = state_37395__$1;
(statearr_37403_38436[(2)] = null);

(statearr_37403_38436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (4))){
var inst_37377 = (state_37395[(7)]);
var inst_37377__$1 = (state_37395[(2)]);
var inst_37378 = (inst_37377__$1 == null);
var state_37395__$1 = (function (){var statearr_37404 = state_37395;
(statearr_37404[(7)] = inst_37377__$1);

return statearr_37404;
})();
if(cljs.core.truth_(inst_37378)){
var statearr_37405_38437 = state_37395__$1;
(statearr_37405_38437[(1)] = (5));

} else {
var statearr_37406_38438 = state_37395__$1;
(statearr_37406_38438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (6))){
var inst_37377 = (state_37395[(7)]);
var inst_37382 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37377) : p.call(null,inst_37377));
var state_37395__$1 = state_37395;
if(cljs.core.truth_(inst_37382)){
var statearr_37407_38439 = state_37395__$1;
(statearr_37407_38439[(1)] = (8));

} else {
var statearr_37408_38440 = state_37395__$1;
(statearr_37408_38440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (3))){
var inst_37393 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37395__$1,inst_37393);
} else {
if((state_val_37396 === (2))){
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37395__$1,(4),ch);
} else {
if((state_val_37396 === (11))){
var inst_37385 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37409_38441 = state_37395__$1;
(statearr_37409_38441[(2)] = inst_37385);

(statearr_37409_38441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (9))){
var state_37395__$1 = state_37395;
var statearr_37410_38442 = state_37395__$1;
(statearr_37410_38442[(2)] = null);

(statearr_37410_38442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (5))){
var inst_37380 = cljs.core.async.close_BANG_(out);
var state_37395__$1 = state_37395;
var statearr_37411_38443 = state_37395__$1;
(statearr_37411_38443[(2)] = inst_37380);

(statearr_37411_38443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (10))){
var inst_37388 = (state_37395[(2)]);
var state_37395__$1 = (function (){var statearr_37412 = state_37395;
(statearr_37412[(8)] = inst_37388);

return statearr_37412;
})();
var statearr_37413_38444 = state_37395__$1;
(statearr_37413_38444[(2)] = null);

(statearr_37413_38444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (8))){
var inst_37377 = (state_37395[(7)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37395__$1,(11),out,inst_37377);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37414 = [null,null,null,null,null,null,null,null,null];
(statearr_37414[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37414[(1)] = (1));

return statearr_37414;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37395){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37395);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37415){var ex__32716__auto__ = e37415;
var statearr_37416_38445 = state_37395;
(statearr_37416_38445[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37395[(4)]))){
var statearr_37417_38446 = state_37395;
(statearr_37417_38446[(1)] = cljs.core.first((state_37395[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38447 = state_37395;
state_37395 = G__38447;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37418 = f__32783__auto__();
(statearr_37418[(6)] = c__32782__auto___38434);

return statearr_37418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37420 = arguments.length;
switch (G__37420) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32782__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37482){
var state_val_37483 = (state_37482[(1)]);
if((state_val_37483 === (7))){
var inst_37478 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37484_38449 = state_37482__$1;
(statearr_37484_38449[(2)] = inst_37478);

(statearr_37484_38449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (20))){
var inst_37448 = (state_37482[(7)]);
var inst_37459 = (state_37482[(2)]);
var inst_37460 = cljs.core.next(inst_37448);
var inst_37434 = inst_37460;
var inst_37435 = null;
var inst_37436 = (0);
var inst_37437 = (0);
var state_37482__$1 = (function (){var statearr_37485 = state_37482;
(statearr_37485[(8)] = inst_37434);

(statearr_37485[(9)] = inst_37437);

(statearr_37485[(10)] = inst_37436);

(statearr_37485[(11)] = inst_37459);

(statearr_37485[(12)] = inst_37435);

return statearr_37485;
})();
var statearr_37486_38450 = state_37482__$1;
(statearr_37486_38450[(2)] = null);

(statearr_37486_38450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (1))){
var state_37482__$1 = state_37482;
var statearr_37487_38451 = state_37482__$1;
(statearr_37487_38451[(2)] = null);

(statearr_37487_38451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (4))){
var inst_37423 = (state_37482[(13)]);
var inst_37423__$1 = (state_37482[(2)]);
var inst_37424 = (inst_37423__$1 == null);
var state_37482__$1 = (function (){var statearr_37488 = state_37482;
(statearr_37488[(13)] = inst_37423__$1);

return statearr_37488;
})();
if(cljs.core.truth_(inst_37424)){
var statearr_37489_38452 = state_37482__$1;
(statearr_37489_38452[(1)] = (5));

} else {
var statearr_37490_38453 = state_37482__$1;
(statearr_37490_38453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (15))){
var state_37482__$1 = state_37482;
var statearr_37494_38454 = state_37482__$1;
(statearr_37494_38454[(2)] = null);

(statearr_37494_38454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (21))){
var state_37482__$1 = state_37482;
var statearr_37495_38455 = state_37482__$1;
(statearr_37495_38455[(2)] = null);

(statearr_37495_38455[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (13))){
var inst_37434 = (state_37482[(8)]);
var inst_37437 = (state_37482[(9)]);
var inst_37436 = (state_37482[(10)]);
var inst_37435 = (state_37482[(12)]);
var inst_37444 = (state_37482[(2)]);
var inst_37445 = (inst_37437 + (1));
var tmp37491 = inst_37434;
var tmp37492 = inst_37436;
var tmp37493 = inst_37435;
var inst_37434__$1 = tmp37491;
var inst_37435__$1 = tmp37493;
var inst_37436__$1 = tmp37492;
var inst_37437__$1 = inst_37445;
var state_37482__$1 = (function (){var statearr_37497 = state_37482;
(statearr_37497[(8)] = inst_37434__$1);

(statearr_37497[(9)] = inst_37437__$1);

(statearr_37497[(10)] = inst_37436__$1);

(statearr_37497[(14)] = inst_37444);

(statearr_37497[(12)] = inst_37435__$1);

return statearr_37497;
})();
var statearr_37499_38456 = state_37482__$1;
(statearr_37499_38456[(2)] = null);

(statearr_37499_38456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (22))){
var state_37482__$1 = state_37482;
var statearr_37500_38457 = state_37482__$1;
(statearr_37500_38457[(2)] = null);

(statearr_37500_38457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (6))){
var inst_37423 = (state_37482[(13)]);
var inst_37432 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37423) : f.call(null,inst_37423));
var inst_37433 = cljs.core.seq(inst_37432);
var inst_37434 = inst_37433;
var inst_37435 = null;
var inst_37436 = (0);
var inst_37437 = (0);
var state_37482__$1 = (function (){var statearr_37501 = state_37482;
(statearr_37501[(8)] = inst_37434);

(statearr_37501[(9)] = inst_37437);

(statearr_37501[(10)] = inst_37436);

(statearr_37501[(12)] = inst_37435);

return statearr_37501;
})();
var statearr_37502_38458 = state_37482__$1;
(statearr_37502_38458[(2)] = null);

(statearr_37502_38458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (17))){
var inst_37448 = (state_37482[(7)]);
var inst_37452 = cljs.core.chunk_first(inst_37448);
var inst_37453 = cljs.core.chunk_rest(inst_37448);
var inst_37454 = cljs.core.count(inst_37452);
var inst_37434 = inst_37453;
var inst_37435 = inst_37452;
var inst_37436 = inst_37454;
var inst_37437 = (0);
var state_37482__$1 = (function (){var statearr_37503 = state_37482;
(statearr_37503[(8)] = inst_37434);

(statearr_37503[(9)] = inst_37437);

(statearr_37503[(10)] = inst_37436);

(statearr_37503[(12)] = inst_37435);

return statearr_37503;
})();
var statearr_37504_38459 = state_37482__$1;
(statearr_37504_38459[(2)] = null);

(statearr_37504_38459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (3))){
var inst_37480 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37482__$1,inst_37480);
} else {
if((state_val_37483 === (12))){
var inst_37468 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37505_38463 = state_37482__$1;
(statearr_37505_38463[(2)] = inst_37468);

(statearr_37505_38463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (2))){
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37482__$1,(4),in$);
} else {
if((state_val_37483 === (23))){
var inst_37476 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37506_38468 = state_37482__$1;
(statearr_37506_38468[(2)] = inst_37476);

(statearr_37506_38468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (19))){
var inst_37463 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37507_38469 = state_37482__$1;
(statearr_37507_38469[(2)] = inst_37463);

(statearr_37507_38469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (11))){
var inst_37434 = (state_37482[(8)]);
var inst_37448 = (state_37482[(7)]);
var inst_37448__$1 = cljs.core.seq(inst_37434);
var state_37482__$1 = (function (){var statearr_37508 = state_37482;
(statearr_37508[(7)] = inst_37448__$1);

return statearr_37508;
})();
if(inst_37448__$1){
var statearr_37509_38473 = state_37482__$1;
(statearr_37509_38473[(1)] = (14));

} else {
var statearr_37510_38474 = state_37482__$1;
(statearr_37510_38474[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (9))){
var inst_37470 = (state_37482[(2)]);
var inst_37471 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37482__$1 = (function (){var statearr_37512 = state_37482;
(statearr_37512[(15)] = inst_37470);

return statearr_37512;
})();
if(cljs.core.truth_(inst_37471)){
var statearr_37513_38475 = state_37482__$1;
(statearr_37513_38475[(1)] = (21));

} else {
var statearr_37514_38476 = state_37482__$1;
(statearr_37514_38476[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (5))){
var inst_37426 = cljs.core.async.close_BANG_(out);
var state_37482__$1 = state_37482;
var statearr_37515_38477 = state_37482__$1;
(statearr_37515_38477[(2)] = inst_37426);

(statearr_37515_38477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (14))){
var inst_37448 = (state_37482[(7)]);
var inst_37450 = cljs.core.chunked_seq_QMARK_(inst_37448);
var state_37482__$1 = state_37482;
if(inst_37450){
var statearr_37516_38478 = state_37482__$1;
(statearr_37516_38478[(1)] = (17));

} else {
var statearr_37517_38479 = state_37482__$1;
(statearr_37517_38479[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (16))){
var inst_37466 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37518_38480 = state_37482__$1;
(statearr_37518_38480[(2)] = inst_37466);

(statearr_37518_38480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (10))){
var inst_37437 = (state_37482[(9)]);
var inst_37435 = (state_37482[(12)]);
var inst_37442 = cljs.core._nth(inst_37435,inst_37437);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37482__$1,(13),out,inst_37442);
} else {
if((state_val_37483 === (18))){
var inst_37448 = (state_37482[(7)]);
var inst_37457 = cljs.core.first(inst_37448);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37482__$1,(20),out,inst_37457);
} else {
if((state_val_37483 === (8))){
var inst_37437 = (state_37482[(9)]);
var inst_37436 = (state_37482[(10)]);
var inst_37439 = (inst_37437 < inst_37436);
var inst_37440 = inst_37439;
var state_37482__$1 = state_37482;
if(cljs.core.truth_(inst_37440)){
var statearr_37519_38484 = state_37482__$1;
(statearr_37519_38484[(1)] = (10));

} else {
var statearr_37520_38485 = state_37482__$1;
(statearr_37520_38485[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32713__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32713__auto____0 = (function (){
var statearr_37521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37521[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32713__auto__);

(statearr_37521[(1)] = (1));

return statearr_37521;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32713__auto____1 = (function (state_37482){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37482);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37523){var ex__32716__auto__ = e37523;
var statearr_37524_38486 = state_37482;
(statearr_37524_38486[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37482[(4)]))){
var statearr_37525_38487 = state_37482;
(statearr_37525_38487[(1)] = cljs.core.first((state_37482[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38488 = state_37482;
state_37482 = G__38488;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32713__auto__ = function(state_37482){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32713__auto____1.call(this,state_37482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32713__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32713__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37526 = f__32783__auto__();
(statearr_37526[(6)] = c__32782__auto__);

return statearr_37526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));

return c__32782__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37528 = arguments.length;
switch (G__37528) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37530 = arguments.length;
switch (G__37530) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37533 = arguments.length;
switch (G__37533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32782__auto___38498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37557){
var state_val_37558 = (state_37557[(1)]);
if((state_val_37558 === (7))){
var inst_37552 = (state_37557[(2)]);
var state_37557__$1 = state_37557;
var statearr_37559_38499 = state_37557__$1;
(statearr_37559_38499[(2)] = inst_37552);

(statearr_37559_38499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (1))){
var inst_37534 = null;
var state_37557__$1 = (function (){var statearr_37560 = state_37557;
(statearr_37560[(7)] = inst_37534);

return statearr_37560;
})();
var statearr_37561_38500 = state_37557__$1;
(statearr_37561_38500[(2)] = null);

(statearr_37561_38500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (4))){
var inst_37537 = (state_37557[(8)]);
var inst_37537__$1 = (state_37557[(2)]);
var inst_37538 = (inst_37537__$1 == null);
var inst_37539 = cljs.core.not(inst_37538);
var state_37557__$1 = (function (){var statearr_37562 = state_37557;
(statearr_37562[(8)] = inst_37537__$1);

return statearr_37562;
})();
if(inst_37539){
var statearr_37563_38501 = state_37557__$1;
(statearr_37563_38501[(1)] = (5));

} else {
var statearr_37564_38502 = state_37557__$1;
(statearr_37564_38502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (6))){
var state_37557__$1 = state_37557;
var statearr_37565_38503 = state_37557__$1;
(statearr_37565_38503[(2)] = null);

(statearr_37565_38503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (3))){
var inst_37554 = (state_37557[(2)]);
var inst_37555 = cljs.core.async.close_BANG_(out);
var state_37557__$1 = (function (){var statearr_37566 = state_37557;
(statearr_37566[(9)] = inst_37554);

return statearr_37566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37557__$1,inst_37555);
} else {
if((state_val_37558 === (2))){
var state_37557__$1 = state_37557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37557__$1,(4),ch);
} else {
if((state_val_37558 === (11))){
var inst_37537 = (state_37557[(8)]);
var inst_37546 = (state_37557[(2)]);
var inst_37534 = inst_37537;
var state_37557__$1 = (function (){var statearr_37567 = state_37557;
(statearr_37567[(7)] = inst_37534);

(statearr_37567[(10)] = inst_37546);

return statearr_37567;
})();
var statearr_37568_38505 = state_37557__$1;
(statearr_37568_38505[(2)] = null);

(statearr_37568_38505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (9))){
var inst_37537 = (state_37557[(8)]);
var state_37557__$1 = state_37557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37557__$1,(11),out,inst_37537);
} else {
if((state_val_37558 === (5))){
var inst_37534 = (state_37557[(7)]);
var inst_37537 = (state_37557[(8)]);
var inst_37541 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37537,inst_37534);
var state_37557__$1 = state_37557;
if(inst_37541){
var statearr_37570_38506 = state_37557__$1;
(statearr_37570_38506[(1)] = (8));

} else {
var statearr_37571_38507 = state_37557__$1;
(statearr_37571_38507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (10))){
var inst_37549 = (state_37557[(2)]);
var state_37557__$1 = state_37557;
var statearr_37572_38511 = state_37557__$1;
(statearr_37572_38511[(2)] = inst_37549);

(statearr_37572_38511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (8))){
var inst_37534 = (state_37557[(7)]);
var tmp37569 = inst_37534;
var inst_37534__$1 = tmp37569;
var state_37557__$1 = (function (){var statearr_37573 = state_37557;
(statearr_37573[(7)] = inst_37534__$1);

return statearr_37573;
})();
var statearr_37574_38518 = state_37557__$1;
(statearr_37574_38518[(2)] = null);

(statearr_37574_38518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37575[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37575[(1)] = (1));

return statearr_37575;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37557){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37557);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37576){var ex__32716__auto__ = e37576;
var statearr_37577_38519 = state_37557;
(statearr_37577_38519[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37557[(4)]))){
var statearr_37578_38526 = state_37557;
(statearr_37578_38526[(1)] = cljs.core.first((state_37557[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38527 = state_37557;
state_37557 = G__38527;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37580 = f__32783__auto__();
(statearr_37580[(6)] = c__32782__auto___38498);

return statearr_37580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37582 = arguments.length;
switch (G__37582) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32782__auto___38529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37620){
var state_val_37621 = (state_37620[(1)]);
if((state_val_37621 === (7))){
var inst_37616 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37623_38530 = state_37620__$1;
(statearr_37623_38530[(2)] = inst_37616);

(statearr_37623_38530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (1))){
var inst_37583 = (new Array(n));
var inst_37584 = inst_37583;
var inst_37585 = (0);
var state_37620__$1 = (function (){var statearr_37624 = state_37620;
(statearr_37624[(7)] = inst_37585);

(statearr_37624[(8)] = inst_37584);

return statearr_37624;
})();
var statearr_37625_38531 = state_37620__$1;
(statearr_37625_38531[(2)] = null);

(statearr_37625_38531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (4))){
var inst_37588 = (state_37620[(9)]);
var inst_37588__$1 = (state_37620[(2)]);
var inst_37589 = (inst_37588__$1 == null);
var inst_37590 = cljs.core.not(inst_37589);
var state_37620__$1 = (function (){var statearr_37626 = state_37620;
(statearr_37626[(9)] = inst_37588__$1);

return statearr_37626;
})();
if(inst_37590){
var statearr_37627_38532 = state_37620__$1;
(statearr_37627_38532[(1)] = (5));

} else {
var statearr_37628_38533 = state_37620__$1;
(statearr_37628_38533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (15))){
var inst_37610 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37629_38534 = state_37620__$1;
(statearr_37629_38534[(2)] = inst_37610);

(statearr_37629_38534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (13))){
var state_37620__$1 = state_37620;
var statearr_37631_38535 = state_37620__$1;
(statearr_37631_38535[(2)] = null);

(statearr_37631_38535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (6))){
var inst_37585 = (state_37620[(7)]);
var inst_37606 = (inst_37585 > (0));
var state_37620__$1 = state_37620;
if(cljs.core.truth_(inst_37606)){
var statearr_37632_38536 = state_37620__$1;
(statearr_37632_38536[(1)] = (12));

} else {
var statearr_37633_38537 = state_37620__$1;
(statearr_37633_38537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (3))){
var inst_37618 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37620__$1,inst_37618);
} else {
if((state_val_37621 === (12))){
var inst_37584 = (state_37620[(8)]);
var inst_37608 = cljs.core.vec(inst_37584);
var state_37620__$1 = state_37620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37620__$1,(15),out,inst_37608);
} else {
if((state_val_37621 === (2))){
var state_37620__$1 = state_37620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37620__$1,(4),ch);
} else {
if((state_val_37621 === (11))){
var inst_37600 = (state_37620[(2)]);
var inst_37601 = (new Array(n));
var inst_37584 = inst_37601;
var inst_37585 = (0);
var state_37620__$1 = (function (){var statearr_37634 = state_37620;
(statearr_37634[(10)] = inst_37600);

(statearr_37634[(7)] = inst_37585);

(statearr_37634[(8)] = inst_37584);

return statearr_37634;
})();
var statearr_37635_38538 = state_37620__$1;
(statearr_37635_38538[(2)] = null);

(statearr_37635_38538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (9))){
var inst_37584 = (state_37620[(8)]);
var inst_37598 = cljs.core.vec(inst_37584);
var state_37620__$1 = state_37620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37620__$1,(11),out,inst_37598);
} else {
if((state_val_37621 === (5))){
var inst_37588 = (state_37620[(9)]);
var inst_37585 = (state_37620[(7)]);
var inst_37584 = (state_37620[(8)]);
var inst_37593 = (state_37620[(11)]);
var inst_37592 = (inst_37584[inst_37585] = inst_37588);
var inst_37593__$1 = (inst_37585 + (1));
var inst_37594 = (inst_37593__$1 < n);
var state_37620__$1 = (function (){var statearr_37636 = state_37620;
(statearr_37636[(12)] = inst_37592);

(statearr_37636[(11)] = inst_37593__$1);

return statearr_37636;
})();
if(cljs.core.truth_(inst_37594)){
var statearr_37637_38545 = state_37620__$1;
(statearr_37637_38545[(1)] = (8));

} else {
var statearr_37638_38546 = state_37620__$1;
(statearr_37638_38546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (14))){
var inst_37613 = (state_37620[(2)]);
var inst_37614 = cljs.core.async.close_BANG_(out);
var state_37620__$1 = (function (){var statearr_37641 = state_37620;
(statearr_37641[(13)] = inst_37613);

return statearr_37641;
})();
var statearr_37642_38547 = state_37620__$1;
(statearr_37642_38547[(2)] = inst_37614);

(statearr_37642_38547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (10))){
var inst_37604 = (state_37620[(2)]);
var state_37620__$1 = state_37620;
var statearr_37643_38548 = state_37620__$1;
(statearr_37643_38548[(2)] = inst_37604);

(statearr_37643_38548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37621 === (8))){
var inst_37584 = (state_37620[(8)]);
var inst_37593 = (state_37620[(11)]);
var tmp37640 = inst_37584;
var inst_37584__$1 = tmp37640;
var inst_37585 = inst_37593;
var state_37620__$1 = (function (){var statearr_37644 = state_37620;
(statearr_37644[(7)] = inst_37585);

(statearr_37644[(8)] = inst_37584__$1);

return statearr_37644;
})();
var statearr_37646_38549 = state_37620__$1;
(statearr_37646_38549[(2)] = null);

(statearr_37646_38549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37647[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37647[(1)] = (1));

return statearr_37647;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37620){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37620);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37648){var ex__32716__auto__ = e37648;
var statearr_37649_38550 = state_37620;
(statearr_37649_38550[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37620[(4)]))){
var statearr_37650_38551 = state_37620;
(statearr_37650_38551[(1)] = cljs.core.first((state_37620[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38552 = state_37620;
state_37620 = G__38552;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37651 = f__32783__auto__();
(statearr_37651[(6)] = c__32782__auto___38529);

return statearr_37651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37656 = arguments.length;
switch (G__37656) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32782__auto___38554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32783__auto__ = (function (){var switch__32712__auto__ = (function (state_37701){
var state_val_37702 = (state_37701[(1)]);
if((state_val_37702 === (7))){
var inst_37697 = (state_37701[(2)]);
var state_37701__$1 = state_37701;
var statearr_37703_38555 = state_37701__$1;
(statearr_37703_38555[(2)] = inst_37697);

(statearr_37703_38555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (1))){
var inst_37657 = [];
var inst_37658 = inst_37657;
var inst_37659 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37701__$1 = (function (){var statearr_37704 = state_37701;
(statearr_37704[(7)] = inst_37658);

(statearr_37704[(8)] = inst_37659);

return statearr_37704;
})();
var statearr_37705_38556 = state_37701__$1;
(statearr_37705_38556[(2)] = null);

(statearr_37705_38556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (4))){
var inst_37662 = (state_37701[(9)]);
var inst_37662__$1 = (state_37701[(2)]);
var inst_37663 = (inst_37662__$1 == null);
var inst_37664 = cljs.core.not(inst_37663);
var state_37701__$1 = (function (){var statearr_37706 = state_37701;
(statearr_37706[(9)] = inst_37662__$1);

return statearr_37706;
})();
if(inst_37664){
var statearr_37707_38557 = state_37701__$1;
(statearr_37707_38557[(1)] = (5));

} else {
var statearr_37708_38558 = state_37701__$1;
(statearr_37708_38558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (15))){
var inst_37658 = (state_37701[(7)]);
var inst_37689 = cljs.core.vec(inst_37658);
var state_37701__$1 = state_37701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37701__$1,(18),out,inst_37689);
} else {
if((state_val_37702 === (13))){
var inst_37684 = (state_37701[(2)]);
var state_37701__$1 = state_37701;
var statearr_37709_38559 = state_37701__$1;
(statearr_37709_38559[(2)] = inst_37684);

(statearr_37709_38559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (6))){
var inst_37658 = (state_37701[(7)]);
var inst_37686 = inst_37658.length;
var inst_37687 = (inst_37686 > (0));
var state_37701__$1 = state_37701;
if(cljs.core.truth_(inst_37687)){
var statearr_37710_38566 = state_37701__$1;
(statearr_37710_38566[(1)] = (15));

} else {
var statearr_37711_38567 = state_37701__$1;
(statearr_37711_38567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (17))){
var inst_37694 = (state_37701[(2)]);
var inst_37695 = cljs.core.async.close_BANG_(out);
var state_37701__$1 = (function (){var statearr_37712 = state_37701;
(statearr_37712[(10)] = inst_37694);

return statearr_37712;
})();
var statearr_37713_38568 = state_37701__$1;
(statearr_37713_38568[(2)] = inst_37695);

(statearr_37713_38568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (3))){
var inst_37699 = (state_37701[(2)]);
var state_37701__$1 = state_37701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37701__$1,inst_37699);
} else {
if((state_val_37702 === (12))){
var inst_37658 = (state_37701[(7)]);
var inst_37677 = cljs.core.vec(inst_37658);
var state_37701__$1 = state_37701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37701__$1,(14),out,inst_37677);
} else {
if((state_val_37702 === (2))){
var state_37701__$1 = state_37701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37701__$1,(4),ch);
} else {
if((state_val_37702 === (11))){
var inst_37658 = (state_37701[(7)]);
var inst_37662 = (state_37701[(9)]);
var inst_37666 = (state_37701[(11)]);
var inst_37674 = inst_37658.push(inst_37662);
var tmp37714 = inst_37658;
var inst_37658__$1 = tmp37714;
var inst_37659 = inst_37666;
var state_37701__$1 = (function (){var statearr_37715 = state_37701;
(statearr_37715[(7)] = inst_37658__$1);

(statearr_37715[(8)] = inst_37659);

(statearr_37715[(12)] = inst_37674);

return statearr_37715;
})();
var statearr_37716_38569 = state_37701__$1;
(statearr_37716_38569[(2)] = null);

(statearr_37716_38569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (9))){
var inst_37659 = (state_37701[(8)]);
var inst_37670 = cljs.core.keyword_identical_QMARK_(inst_37659,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37701__$1 = state_37701;
var statearr_37717_38570 = state_37701__$1;
(statearr_37717_38570[(2)] = inst_37670);

(statearr_37717_38570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (5))){
var inst_37659 = (state_37701[(8)]);
var inst_37662 = (state_37701[(9)]);
var inst_37667 = (state_37701[(13)]);
var inst_37666 = (state_37701[(11)]);
var inst_37666__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37662) : f.call(null,inst_37662));
var inst_37667__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37666__$1,inst_37659);
var state_37701__$1 = (function (){var statearr_37718 = state_37701;
(statearr_37718[(13)] = inst_37667__$1);

(statearr_37718[(11)] = inst_37666__$1);

return statearr_37718;
})();
if(inst_37667__$1){
var statearr_37719_38571 = state_37701__$1;
(statearr_37719_38571[(1)] = (8));

} else {
var statearr_37720_38572 = state_37701__$1;
(statearr_37720_38572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (14))){
var inst_37662 = (state_37701[(9)]);
var inst_37666 = (state_37701[(11)]);
var inst_37679 = (state_37701[(2)]);
var inst_37680 = [];
var inst_37681 = inst_37680.push(inst_37662);
var inst_37658 = inst_37680;
var inst_37659 = inst_37666;
var state_37701__$1 = (function (){var statearr_37721 = state_37701;
(statearr_37721[(7)] = inst_37658);

(statearr_37721[(8)] = inst_37659);

(statearr_37721[(14)] = inst_37679);

(statearr_37721[(15)] = inst_37681);

return statearr_37721;
})();
var statearr_37722_38573 = state_37701__$1;
(statearr_37722_38573[(2)] = null);

(statearr_37722_38573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (16))){
var state_37701__$1 = state_37701;
var statearr_37723_38574 = state_37701__$1;
(statearr_37723_38574[(2)] = null);

(statearr_37723_38574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (10))){
var inst_37672 = (state_37701[(2)]);
var state_37701__$1 = state_37701;
if(cljs.core.truth_(inst_37672)){
var statearr_37724_38575 = state_37701__$1;
(statearr_37724_38575[(1)] = (11));

} else {
var statearr_37725_38576 = state_37701__$1;
(statearr_37725_38576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (18))){
var inst_37691 = (state_37701[(2)]);
var state_37701__$1 = state_37701;
var statearr_37726_38577 = state_37701__$1;
(statearr_37726_38577[(2)] = inst_37691);

(statearr_37726_38577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37702 === (8))){
var inst_37667 = (state_37701[(13)]);
var state_37701__$1 = state_37701;
var statearr_37727_38578 = state_37701__$1;
(statearr_37727_38578[(2)] = inst_37667);

(statearr_37727_38578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32713__auto__ = null;
var cljs$core$async$state_machine__32713__auto____0 = (function (){
var statearr_37729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37729[(0)] = cljs$core$async$state_machine__32713__auto__);

(statearr_37729[(1)] = (1));

return statearr_37729;
});
var cljs$core$async$state_machine__32713__auto____1 = (function (state_37701){
while(true){
var ret_value__32714__auto__ = (function (){try{while(true){
var result__32715__auto__ = switch__32712__auto__(state_37701);
if(cljs.core.keyword_identical_QMARK_(result__32715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32715__auto__;
}
break;
}
}catch (e37730){var ex__32716__auto__ = e37730;
var statearr_37731_38579 = state_37701;
(statearr_37731_38579[(2)] = ex__32716__auto__);


if(cljs.core.seq((state_37701[(4)]))){
var statearr_37732_38580 = state_37701;
(statearr_37732_38580[(1)] = cljs.core.first((state_37701[(4)])));

} else {
throw ex__32716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38581 = state_37701;
state_37701 = G__38581;
continue;
} else {
return ret_value__32714__auto__;
}
break;
}
});
cljs$core$async$state_machine__32713__auto__ = function(state_37701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32713__auto____1.call(this,state_37701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32713__auto____0;
cljs$core$async$state_machine__32713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32713__auto____1;
return cljs$core$async$state_machine__32713__auto__;
})()
})();
var state__32784__auto__ = (function (){var statearr_37733 = f__32783__auto__();
(statearr_37733[(6)] = c__32782__auto___38554);

return statearr_37733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32784__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "Pub", { enumerable: false, get: function() { return cljs.core.async.Pub; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async37352", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async37352; } });
Object.defineProperty(module.exports, "reduce", { enumerable: false, get: function() { return cljs.core.async.reduce; } });
Object.defineProperty(module.exports, "remove_GT_", { enumerable: false, get: function() { return cljs.core.async.remove_GT_; } });
Object.defineProperty(module.exports, "timeout", { enumerable: false, get: function() { return cljs.core.async.timeout; } });
Object.defineProperty(module.exports, "unsub_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_STAR_; } });
Object.defineProperty(module.exports, "admix_STAR_", { enumerable: false, get: function() { return cljs.core.async.admix_STAR_; } });
Object.defineProperty(module.exports, "unmix_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async37347", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async37347; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36074", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36074; } });
Object.defineProperty(module.exports, "mapcat_STAR_", { enumerable: false, get: function() { return cljs.core.async.mapcat_STAR_; } });
Object.defineProperty(module.exports, "t_cljs$core$async36074", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36074; } });
Object.defineProperty(module.exports, "mix", { enumerable: false, get: function() { return cljs.core.async.mix; } });
Object.defineProperty(module.exports, "pub", { enumerable: false, get: function() { return cljs.core.async.pub; } });
Object.defineProperty(module.exports, "take", { enumerable: false, get: function() { return cljs.core.async.take; } });
Object.defineProperty(module.exports, "unsub_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unsub_all_STAR_; } });
Object.defineProperty(module.exports, "_LT__BANG_", { enumerable: false, get: function() { return cljs.core.async._LT__BANG_; } });
Object.defineProperty(module.exports, "map", { enumerable: false, get: function() { return cljs.core.async.map; } });
Object.defineProperty(module.exports, "Mux", { enumerable: false, get: function() { return cljs.core.async.Mux; } });
Object.defineProperty(module.exports, "mapcat_GT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_GT_; } });
Object.defineProperty(module.exports, "fhnop", { enumerable: false, get: function() { return cljs.core.async.fhnop; } });
Object.defineProperty(module.exports, "buffer", { enumerable: false, get: function() { return cljs.core.async.buffer; } });
Object.defineProperty(module.exports, "close_BANG_", { enumerable: false, get: function() { return cljs.core.async.close_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async36033", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36033; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36527", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36527; } });
Object.defineProperty(module.exports, "offer_BANG_", { enumerable: false, get: function() { return cljs.core.async.offer_BANG_; } });
Object.defineProperty(module.exports, "chan", { enumerable: false, get: function() { return cljs.core.async.chan; } });
Object.defineProperty(module.exports, "solo_mode_STAR_", { enumerable: false, get: function() { return cljs.core.async.solo_mode_STAR_; } });
Object.defineProperty(module.exports, "onto_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.onto_chan_BANG_; } });
Object.defineProperty(module.exports, "tap", { enumerable: false, get: function() { return cljs.core.async.tap; } });
Object.defineProperty(module.exports, "admix", { enumerable: false, get: function() { return cljs.core.async.admix; } });
Object.defineProperty(module.exports, "promise_chan", { enumerable: false, get: function() { return cljs.core.async.promise_chan; } });
Object.defineProperty(module.exports, "unique", { enumerable: false, get: function() { return cljs.core.async.unique; } });
Object.defineProperty(module.exports, "muxch_STAR_", { enumerable: false, get: function() { return cljs.core.async.muxch_STAR_; } });
Object.defineProperty(module.exports, "solo_mode", { enumerable: false, get: function() { return cljs.core.async.solo_mode; } });
Object.defineProperty(module.exports, "transduce", { enumerable: false, get: function() { return cljs.core.async.transduce; } });
Object.defineProperty(module.exports, "onto_chan", { enumerable: false, get: function() { return cljs.core.async.onto_chan; } });
Object.defineProperty(module.exports, "to_chan", { enumerable: false, get: function() { return cljs.core.async.to_chan; } });
Object.defineProperty(module.exports, "dropping_buffer", { enumerable: false, get: function() { return cljs.core.async.dropping_buffer; } });
Object.defineProperty(module.exports, "untap_all", { enumerable: false, get: function() { return cljs.core.async.untap_all; } });
Object.defineProperty(module.exports, "into", { enumerable: false, get: function() { return cljs.core.async.into; } });
Object.defineProperty(module.exports, "to_chan_BANG_", { enumerable: false, get: function() { return cljs.core.async.to_chan_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async37363", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async37363; } });
Object.defineProperty(module.exports, "pipeline", { enumerable: false, get: function() { return cljs.core.async.pipeline; } });
Object.defineProperty(module.exports, "sub", { enumerable: false, get: function() { return cljs.core.async.sub; } });
Object.defineProperty(module.exports, "t_cljs$core$async36940", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36940; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async37368", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async37368; } });
Object.defineProperty(module.exports, "alt_flag", { enumerable: false, get: function() { return cljs.core.async.alt_flag; } });
Object.defineProperty(module.exports, "map_GT_", { enumerable: false, get: function() { return cljs.core.async.map_GT_; } });
Object.defineProperty(module.exports, "pipeline_STAR_", { enumerable: false, get: function() { return cljs.core.async.pipeline_STAR_; } });
Object.defineProperty(module.exports, "t_cljs$core$async37347", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async37347; } });
Object.defineProperty(module.exports, "pipe", { enumerable: false, get: function() { return cljs.core.async.pipe; } });
Object.defineProperty(module.exports, "t_cljs$core$async37352", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async37352; } });
Object.defineProperty(module.exports, "unmix", { enumerable: false, get: function() { return cljs.core.async.unmix; } });
Object.defineProperty(module.exports, "filter_LT_", { enumerable: false, get: function() { return cljs.core.async.filter_LT_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36940", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36940; } });
Object.defineProperty(module.exports, "sub_STAR_", { enumerable: false, get: function() { return cljs.core.async.sub_STAR_; } });
Object.defineProperty(module.exports, "remove_LT_", { enumerable: false, get: function() { return cljs.core.async.remove_LT_; } });
Object.defineProperty(module.exports, "t_cljs$core$async36790", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36790; } });
Object.defineProperty(module.exports, "untap_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_STAR_; } });
Object.defineProperty(module.exports, "toggle", { enumerable: false, get: function() { return cljs.core.async.toggle; } });
Object.defineProperty(module.exports, "untap_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.untap_all_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36790", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36790; } });
Object.defineProperty(module.exports, "sliding_buffer", { enumerable: false, get: function() { return cljs.core.async.sliding_buffer; } });
Object.defineProperty(module.exports, "partition", { enumerable: false, get: function() { return cljs.core.async.partition; } });
Object.defineProperty(module.exports, "Mult", { enumerable: false, get: function() { return cljs.core.async.Mult; } });
Object.defineProperty(module.exports, "merge", { enumerable: false, get: function() { return cljs.core.async.merge; } });
Object.defineProperty(module.exports, "partition_by", { enumerable: false, get: function() { return cljs.core.async.partition_by; } });
Object.defineProperty(module.exports, "t_cljs$core$async37363", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async37363; } });
Object.defineProperty(module.exports, "unsub_all", { enumerable: false, get: function() { return cljs.core.async.unsub_all; } });
Object.defineProperty(module.exports, "_GT__BANG_", { enumerable: false, get: function() { return cljs.core.async._GT__BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36033", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36033; } });
Object.defineProperty(module.exports, "unmix_all_STAR_", { enumerable: false, get: function() { return cljs.core.async.unmix_all_STAR_; } });
Object.defineProperty(module.exports, "t_cljs$core$async36527", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36527; } });
Object.defineProperty(module.exports, "nop", { enumerable: false, get: function() { return cljs.core.async.nop; } });
Object.defineProperty(module.exports, "split", { enumerable: false, get: function() { return cljs.core.async.split; } });
Object.defineProperty(module.exports, "unmix_all", { enumerable: false, get: function() { return cljs.core.async.unmix_all; } });
Object.defineProperty(module.exports, "filter_GT_", { enumerable: false, get: function() { return cljs.core.async.filter_GT_; } });
Object.defineProperty(module.exports, "tap_STAR_", { enumerable: false, get: function() { return cljs.core.async.tap_STAR_; } });
Object.defineProperty(module.exports, "untap", { enumerable: false, get: function() { return cljs.core.async.untap; } });
Object.defineProperty(module.exports, "t_cljs$core$async36077", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async36077; } });
Object.defineProperty(module.exports, "alt_handler", { enumerable: false, get: function() { return cljs.core.async.alt_handler; } });
Object.defineProperty(module.exports, "alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.alts_BANG_; } });
Object.defineProperty(module.exports, "unsub", { enumerable: false, get: function() { return cljs.core.async.unsub; } });
Object.defineProperty(module.exports, "poll_BANG_", { enumerable: false, get: function() { return cljs.core.async.poll_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async37368", { enumerable: false, get: function() { return cljs.core.async.t_cljs$core$async37368; } });
Object.defineProperty(module.exports, "map_LT_", { enumerable: false, get: function() { return cljs.core.async.map_LT_; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: false, get: function() { return cljs.core.async.fn_handler; } });
Object.defineProperty(module.exports, "do_alts", { enumerable: false, get: function() { return cljs.core.async.do_alts; } });
Object.defineProperty(module.exports, "random_array", { enumerable: false, get: function() { return cljs.core.async.random_array; } });
Object.defineProperty(module.exports, "pipeline_async", { enumerable: false, get: function() { return cljs.core.async.pipeline_async; } });
Object.defineProperty(module.exports, "Mix", { enumerable: false, get: function() { return cljs.core.async.Mix; } });
Object.defineProperty(module.exports, "toggle_STAR_", { enumerable: false, get: function() { return cljs.core.async.toggle_STAR_; } });
Object.defineProperty(module.exports, "mult", { enumerable: false, get: function() { return cljs.core.async.mult; } });
Object.defineProperty(module.exports, "mapcat_LT_", { enumerable: false, get: function() { return cljs.core.async.mapcat_LT_; } });
Object.defineProperty(module.exports, "ioc_alts_BANG_", { enumerable: false, get: function() { return cljs.core.async.ioc_alts_BANG_; } });
Object.defineProperty(module.exports, "unblocking_buffer_QMARK_", { enumerable: false, get: function() { return cljs.core.async.unblocking_buffer_QMARK_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async36077", { enumerable: false, get: function() { return cljs.core.async.__GT_t_cljs$core$async36077; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: false, get: function() { return cljs.core.async.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: false, get: function() { return cljs.core.async.take_BANG_; } });
//# sourceMappingURL=cljs.core.async.js.map
