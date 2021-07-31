goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45003 = arguments.length;
switch (G__45003) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45014 = (function (f,blockable,meta45015){
this.f = f;
this.blockable = blockable;
this.meta45015 = meta45015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45016,meta45015__$1){
var self__ = this;
var _45016__$1 = this;
return (new cljs.core.async.t_cljs$core$async45014(self__.f,self__.blockable,meta45015__$1));
}));

(cljs.core.async.t_cljs$core$async45014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45016){
var self__ = this;
var _45016__$1 = this;
return self__.meta45015;
}));

(cljs.core.async.t_cljs$core$async45014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45015","meta45015",1033074460,null)], null);
}));

(cljs.core.async.t_cljs$core$async45014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45014");

(cljs.core.async.t_cljs$core$async45014.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45014.
 */
cljs.core.async.__GT_t_cljs$core$async45014 = (function cljs$core$async$__GT_t_cljs$core$async45014(f__$1,blockable__$1,meta45015){
return (new cljs.core.async.t_cljs$core$async45014(f__$1,blockable__$1,meta45015));
});

}

return (new cljs.core.async.t_cljs$core$async45014(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45097 = arguments.length;
switch (G__45097) {
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
var G__45108 = arguments.length;
switch (G__45108) {
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
var G__45117 = arguments.length;
switch (G__45117) {
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
var val_48003 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48003) : fn1.call(null,val_48003));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48003) : fn1.call(null,val_48003));
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
var G__45151 = arguments.length;
switch (G__45151) {
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
var n__4695__auto___48006 = n;
var x_48007 = (0);
while(true){
if((x_48007 < n__4695__auto___48006)){
(a[x_48007] = x_48007);

var G__48009 = (x_48007 + (1));
x_48007 = G__48009;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45174 = (function (flag,meta45175){
this.flag = flag;
this.meta45175 = meta45175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45176,meta45175__$1){
var self__ = this;
var _45176__$1 = this;
return (new cljs.core.async.t_cljs$core$async45174(self__.flag,meta45175__$1));
}));

(cljs.core.async.t_cljs$core$async45174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45176){
var self__ = this;
var _45176__$1 = this;
return self__.meta45175;
}));

(cljs.core.async.t_cljs$core$async45174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45175","meta45175",-120603543,null)], null);
}));

(cljs.core.async.t_cljs$core$async45174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45174");

(cljs.core.async.t_cljs$core$async45174.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45174.
 */
cljs.core.async.__GT_t_cljs$core$async45174 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45174(flag__$1,meta45175){
return (new cljs.core.async.t_cljs$core$async45174(flag__$1,meta45175));
});

}

return (new cljs.core.async.t_cljs$core$async45174(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45182 = (function (flag,cb,meta45183){
this.flag = flag;
this.cb = cb;
this.meta45183 = meta45183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45184,meta45183__$1){
var self__ = this;
var _45184__$1 = this;
return (new cljs.core.async.t_cljs$core$async45182(self__.flag,self__.cb,meta45183__$1));
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45184){
var self__ = this;
var _45184__$1 = this;
return self__.meta45183;
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45183","meta45183",-1662055727,null)], null);
}));

(cljs.core.async.t_cljs$core$async45182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45182");

(cljs.core.async.t_cljs$core$async45182.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async45182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45182.
 */
cljs.core.async.__GT_t_cljs$core$async45182 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45182(flag__$1,cb__$1,meta45183){
return (new cljs.core.async.t_cljs$core$async45182(flag__$1,cb__$1,meta45183));
});

}

return (new cljs.core.async.t_cljs$core$async45182(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45205_SHARP_){
var G__45214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45205_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45214) : fret.call(null,G__45214));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45207_SHARP_){
var G__45219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45207_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45219) : fret.call(null,G__45219));
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
var G__48021 = (i + (1));
i = G__48021;
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
var len__4818__auto___48024 = arguments.length;
var i__4819__auto___48025 = (0);
while(true){
if((i__4819__auto___48025 < len__4818__auto___48024)){
args__4824__auto__.push((arguments[i__4819__auto___48025]));

var G__48026 = (i__4819__auto___48025 + (1));
i__4819__auto___48025 = G__48026;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45237){
var map__45239 = p__45237;
var map__45239__$1 = cljs.core.__destructure_map(map__45239);
var opts = map__45239__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45227){
var G__45228 = cljs.core.first(seq45227);
var seq45227__$1 = cljs.core.next(seq45227);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45228,seq45227__$1);
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
var G__45250 = arguments.length;
switch (G__45250) {
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
var c__35759__auto___48041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45295){
var state_val_45296 = (state_45295[(1)]);
if((state_val_45296 === (7))){
var inst_45287 = (state_45295[(2)]);
var state_45295__$1 = state_45295;
var statearr_45307_48043 = state_45295__$1;
(statearr_45307_48043[(2)] = inst_45287);

(statearr_45307_48043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (1))){
var state_45295__$1 = state_45295;
var statearr_45311_48044 = state_45295__$1;
(statearr_45311_48044[(2)] = null);

(statearr_45311_48044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (4))){
var inst_45265 = (state_45295[(7)]);
var inst_45265__$1 = (state_45295[(2)]);
var inst_45266 = (inst_45265__$1 == null);
var state_45295__$1 = (function (){var statearr_45316 = state_45295;
(statearr_45316[(7)] = inst_45265__$1);

return statearr_45316;
})();
if(cljs.core.truth_(inst_45266)){
var statearr_45318_48048 = state_45295__$1;
(statearr_45318_48048[(1)] = (5));

} else {
var statearr_45319_48049 = state_45295__$1;
(statearr_45319_48049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (13))){
var state_45295__$1 = state_45295;
var statearr_45322_48050 = state_45295__$1;
(statearr_45322_48050[(2)] = null);

(statearr_45322_48050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (6))){
var inst_45265 = (state_45295[(7)]);
var state_45295__$1 = state_45295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45295__$1,(11),to,inst_45265);
} else {
if((state_val_45296 === (3))){
var inst_45292 = (state_45295[(2)]);
var state_45295__$1 = state_45295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45295__$1,inst_45292);
} else {
if((state_val_45296 === (12))){
var state_45295__$1 = state_45295;
var statearr_45327_48054 = state_45295__$1;
(statearr_45327_48054[(2)] = null);

(statearr_45327_48054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (2))){
var state_45295__$1 = state_45295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45295__$1,(4),from);
} else {
if((state_val_45296 === (11))){
var inst_45280 = (state_45295[(2)]);
var state_45295__$1 = state_45295;
if(cljs.core.truth_(inst_45280)){
var statearr_45328_48055 = state_45295__$1;
(statearr_45328_48055[(1)] = (12));

} else {
var statearr_45329_48057 = state_45295__$1;
(statearr_45329_48057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (9))){
var state_45295__$1 = state_45295;
var statearr_45330_48058 = state_45295__$1;
(statearr_45330_48058[(2)] = null);

(statearr_45330_48058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (5))){
var state_45295__$1 = state_45295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45333_48060 = state_45295__$1;
(statearr_45333_48060[(1)] = (8));

} else {
var statearr_45334_48061 = state_45295__$1;
(statearr_45334_48061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (14))){
var inst_45285 = (state_45295[(2)]);
var state_45295__$1 = state_45295;
var statearr_45338_48064 = state_45295__$1;
(statearr_45338_48064[(2)] = inst_45285);

(statearr_45338_48064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (10))){
var inst_45275 = (state_45295[(2)]);
var state_45295__$1 = state_45295;
var statearr_45339_48065 = state_45295__$1;
(statearr_45339_48065[(2)] = inst_45275);

(statearr_45339_48065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45296 === (8))){
var inst_45270 = cljs.core.async.close_BANG_(to);
var state_45295__$1 = state_45295;
var statearr_45340_48066 = state_45295__$1;
(statearr_45340_48066[(2)] = inst_45270);

(statearr_45340_48066[(1)] = (10));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_45341 = [null,null,null,null,null,null,null,null];
(statearr_45341[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_45341[(1)] = (1));

return statearr_45341;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_45295){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45295);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45342){var ex__35549__auto__ = e45342;
var statearr_45344_48070 = state_45295;
(statearr_45344_48070[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45295[(4)]))){
var statearr_45347_48071 = state_45295;
(statearr_45347_48071[(1)] = cljs.core.first((state_45295[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48073 = state_45295;
state_45295 = G__48073;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_45295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_45295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45349 = f__35760__auto__();
(statearr_45349[(6)] = c__35759__auto___48041);

return statearr_45349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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
var process = (function (p__45370){
var vec__45371 = p__45370;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45371,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45371,(1),null);
var job = vec__45371;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35759__auto___48079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45381){
var state_val_45382 = (state_45381[(1)]);
if((state_val_45382 === (1))){
var state_45381__$1 = state_45381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45381__$1,(2),res,v);
} else {
if((state_val_45382 === (2))){
var inst_45378 = (state_45381[(2)]);
var inst_45379 = cljs.core.async.close_BANG_(res);
var state_45381__$1 = (function (){var statearr_45394 = state_45381;
(statearr_45394[(7)] = inst_45378);

return statearr_45394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45381__$1,inst_45379);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0 = (function (){
var statearr_45400 = [null,null,null,null,null,null,null,null];
(statearr_45400[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__);

(statearr_45400[(1)] = (1));

return statearr_45400;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1 = (function (state_45381){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45381);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45401){var ex__35549__auto__ = e45401;
var statearr_45402_48089 = state_45381;
(statearr_45402_48089[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45381[(4)]))){
var statearr_45403_48090 = state_45381;
(statearr_45403_48090[(1)] = cljs.core.first((state_45381[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48091 = state_45381;
state_45381 = G__48091;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = function(state_45381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1.call(this,state_45381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45405 = f__35760__auto__();
(statearr_45405[(6)] = c__35759__auto___48079);

return statearr_45405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45406){
var vec__45411 = p__45406;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45411,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45411,(1),null);
var job = vec__45411;
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
var n__4695__auto___48096 = n;
var __48097 = (0);
while(true){
if((__48097 < n__4695__auto___48096)){
var G__45414_48098 = type;
var G__45414_48099__$1 = (((G__45414_48098 instanceof cljs.core.Keyword))?G__45414_48098.fqn:null);
switch (G__45414_48099__$1) {
case "compute":
var c__35759__auto___48101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48097,c__35759__auto___48101,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async){
return (function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = ((function (__48097,c__35759__auto___48101,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async){
return (function (state_45427){
var state_val_45428 = (state_45427[(1)]);
if((state_val_45428 === (1))){
var state_45427__$1 = state_45427;
var statearr_45431_48103 = state_45427__$1;
(statearr_45431_48103[(2)] = null);

(statearr_45431_48103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (2))){
var state_45427__$1 = state_45427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45427__$1,(4),jobs);
} else {
if((state_val_45428 === (3))){
var inst_45425 = (state_45427[(2)]);
var state_45427__$1 = state_45427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45427__$1,inst_45425);
} else {
if((state_val_45428 === (4))){
var inst_45417 = (state_45427[(2)]);
var inst_45418 = process(inst_45417);
var state_45427__$1 = state_45427;
if(cljs.core.truth_(inst_45418)){
var statearr_45432_48122 = state_45427__$1;
(statearr_45432_48122[(1)] = (5));

} else {
var statearr_45433_48123 = state_45427__$1;
(statearr_45433_48123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (5))){
var state_45427__$1 = state_45427;
var statearr_45434_48124 = state_45427__$1;
(statearr_45434_48124[(2)] = null);

(statearr_45434_48124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (6))){
var state_45427__$1 = state_45427;
var statearr_45437_48126 = state_45427__$1;
(statearr_45437_48126[(2)] = null);

(statearr_45437_48126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45428 === (7))){
var inst_45423 = (state_45427[(2)]);
var state_45427__$1 = state_45427;
var statearr_45441_48127 = state_45427__$1;
(statearr_45441_48127[(2)] = inst_45423);

(statearr_45441_48127[(1)] = (3));


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
});})(__48097,c__35759__auto___48101,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async))
;
return ((function (__48097,switch__35545__auto__,c__35759__auto___48101,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0 = (function (){
var statearr_45442 = [null,null,null,null,null,null,null];
(statearr_45442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__);

(statearr_45442[(1)] = (1));

return statearr_45442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1 = (function (state_45427){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45427);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45443){var ex__35549__auto__ = e45443;
var statearr_45444_48129 = state_45427;
(statearr_45444_48129[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45427[(4)]))){
var statearr_45445_48130 = state_45427;
(statearr_45445_48130[(1)] = cljs.core.first((state_45427[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48131 = state_45427;
state_45427 = G__48131;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = function(state_45427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1.call(this,state_45427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__;
})()
;})(__48097,switch__35545__auto__,c__35759__auto___48101,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async))
})();
var state__35761__auto__ = (function (){var statearr_45447 = f__35760__auto__();
(statearr_45447[(6)] = c__35759__auto___48101);

return statearr_45447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
});})(__48097,c__35759__auto___48101,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async))
);


break;
case "async":
var c__35759__auto___48142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48097,c__35759__auto___48142,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async){
return (function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = ((function (__48097,c__35759__auto___48142,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async){
return (function (state_45463){
var state_val_45464 = (state_45463[(1)]);
if((state_val_45464 === (1))){
var state_45463__$1 = state_45463;
var statearr_45465_48143 = state_45463__$1;
(statearr_45465_48143[(2)] = null);

(statearr_45465_48143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45464 === (2))){
var state_45463__$1 = state_45463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45463__$1,(4),jobs);
} else {
if((state_val_45464 === (3))){
var inst_45461 = (state_45463[(2)]);
var state_45463__$1 = state_45463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45463__$1,inst_45461);
} else {
if((state_val_45464 === (4))){
var inst_45453 = (state_45463[(2)]);
var inst_45454 = async(inst_45453);
var state_45463__$1 = state_45463;
if(cljs.core.truth_(inst_45454)){
var statearr_45466_48148 = state_45463__$1;
(statearr_45466_48148[(1)] = (5));

} else {
var statearr_45467_48149 = state_45463__$1;
(statearr_45467_48149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45464 === (5))){
var state_45463__$1 = state_45463;
var statearr_45468_48150 = state_45463__$1;
(statearr_45468_48150[(2)] = null);

(statearr_45468_48150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45464 === (6))){
var state_45463__$1 = state_45463;
var statearr_45469_48156 = state_45463__$1;
(statearr_45469_48156[(2)] = null);

(statearr_45469_48156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45464 === (7))){
var inst_45459 = (state_45463[(2)]);
var state_45463__$1 = state_45463;
var statearr_45470_48159 = state_45463__$1;
(statearr_45470_48159[(2)] = inst_45459);

(statearr_45470_48159[(1)] = (3));


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
});})(__48097,c__35759__auto___48142,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async))
;
return ((function (__48097,switch__35545__auto__,c__35759__auto___48142,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0 = (function (){
var statearr_45471 = [null,null,null,null,null,null,null];
(statearr_45471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__);

(statearr_45471[(1)] = (1));

return statearr_45471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1 = (function (state_45463){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45463);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45472){var ex__35549__auto__ = e45472;
var statearr_45474_48163 = state_45463;
(statearr_45474_48163[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45463[(4)]))){
var statearr_45476_48164 = state_45463;
(statearr_45476_48164[(1)] = cljs.core.first((state_45463[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48168 = state_45463;
state_45463 = G__48168;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = function(state_45463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1.call(this,state_45463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__;
})()
;})(__48097,switch__35545__auto__,c__35759__auto___48142,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async))
})();
var state__35761__auto__ = (function (){var statearr_45481 = f__35760__auto__();
(statearr_45481[(6)] = c__35759__auto___48142);

return statearr_45481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
});})(__48097,c__35759__auto___48142,G__45414_48098,G__45414_48099__$1,n__4695__auto___48096,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45414_48099__$1)].join('')));

}

var G__48172 = (__48097 + (1));
__48097 = G__48172;
continue;
} else {
}
break;
}

var c__35759__auto___48173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45506){
var state_val_45507 = (state_45506[(1)]);
if((state_val_45507 === (7))){
var inst_45502 = (state_45506[(2)]);
var state_45506__$1 = state_45506;
var statearr_45518_48174 = state_45506__$1;
(statearr_45518_48174[(2)] = inst_45502);

(statearr_45518_48174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45507 === (1))){
var state_45506__$1 = state_45506;
var statearr_45519_48175 = state_45506__$1;
(statearr_45519_48175[(2)] = null);

(statearr_45519_48175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45507 === (4))){
var inst_45487 = (state_45506[(7)]);
var inst_45487__$1 = (state_45506[(2)]);
var inst_45488 = (inst_45487__$1 == null);
var state_45506__$1 = (function (){var statearr_45522 = state_45506;
(statearr_45522[(7)] = inst_45487__$1);

return statearr_45522;
})();
if(cljs.core.truth_(inst_45488)){
var statearr_45525_48181 = state_45506__$1;
(statearr_45525_48181[(1)] = (5));

} else {
var statearr_45527_48182 = state_45506__$1;
(statearr_45527_48182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45507 === (6))){
var inst_45487 = (state_45506[(7)]);
var inst_45492 = (state_45506[(8)]);
var inst_45492__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45494 = [inst_45487,inst_45492__$1];
var inst_45495 = (new cljs.core.PersistentVector(null,2,(5),inst_45493,inst_45494,null));
var state_45506__$1 = (function (){var statearr_45528 = state_45506;
(statearr_45528[(8)] = inst_45492__$1);

return statearr_45528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45506__$1,(8),jobs,inst_45495);
} else {
if((state_val_45507 === (3))){
var inst_45504 = (state_45506[(2)]);
var state_45506__$1 = state_45506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45506__$1,inst_45504);
} else {
if((state_val_45507 === (2))){
var state_45506__$1 = state_45506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45506__$1,(4),from);
} else {
if((state_val_45507 === (9))){
var inst_45499 = (state_45506[(2)]);
var state_45506__$1 = (function (){var statearr_45532 = state_45506;
(statearr_45532[(9)] = inst_45499);

return statearr_45532;
})();
var statearr_45533_48185 = state_45506__$1;
(statearr_45533_48185[(2)] = null);

(statearr_45533_48185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45507 === (5))){
var inst_45490 = cljs.core.async.close_BANG_(jobs);
var state_45506__$1 = state_45506;
var statearr_45535_48186 = state_45506__$1;
(statearr_45535_48186[(2)] = inst_45490);

(statearr_45535_48186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45507 === (8))){
var inst_45492 = (state_45506[(8)]);
var inst_45497 = (state_45506[(2)]);
var state_45506__$1 = (function (){var statearr_45537 = state_45506;
(statearr_45537[(10)] = inst_45497);

return statearr_45537;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45506__$1,(9),results,inst_45492);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0 = (function (){
var statearr_45542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__);

(statearr_45542[(1)] = (1));

return statearr_45542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1 = (function (state_45506){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45506);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45543){var ex__35549__auto__ = e45543;
var statearr_45545_48212 = state_45506;
(statearr_45545_48212[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45506[(4)]))){
var statearr_45546_48213 = state_45506;
(statearr_45546_48213[(1)] = cljs.core.first((state_45506[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48217 = state_45506;
state_45506 = G__48217;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = function(state_45506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1.call(this,state_45506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45550 = f__35760__auto__();
(statearr_45550[(6)] = c__35759__auto___48173);

return statearr_45550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


var c__35759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45588){
var state_val_45589 = (state_45588[(1)]);
if((state_val_45589 === (7))){
var inst_45584 = (state_45588[(2)]);
var state_45588__$1 = state_45588;
var statearr_45591_48222 = state_45588__$1;
(statearr_45591_48222[(2)] = inst_45584);

(statearr_45591_48222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (20))){
var state_45588__$1 = state_45588;
var statearr_45592_48224 = state_45588__$1;
(statearr_45592_48224[(2)] = null);

(statearr_45592_48224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (1))){
var state_45588__$1 = state_45588;
var statearr_45593_48225 = state_45588__$1;
(statearr_45593_48225[(2)] = null);

(statearr_45593_48225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (4))){
var inst_45553 = (state_45588[(7)]);
var inst_45553__$1 = (state_45588[(2)]);
var inst_45554 = (inst_45553__$1 == null);
var state_45588__$1 = (function (){var statearr_45595 = state_45588;
(statearr_45595[(7)] = inst_45553__$1);

return statearr_45595;
})();
if(cljs.core.truth_(inst_45554)){
var statearr_45596_48232 = state_45588__$1;
(statearr_45596_48232[(1)] = (5));

} else {
var statearr_45597_48233 = state_45588__$1;
(statearr_45597_48233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (15))){
var inst_45566 = (state_45588[(8)]);
var state_45588__$1 = state_45588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45588__$1,(18),to,inst_45566);
} else {
if((state_val_45589 === (21))){
var inst_45579 = (state_45588[(2)]);
var state_45588__$1 = state_45588;
var statearr_45598_48235 = state_45588__$1;
(statearr_45598_48235[(2)] = inst_45579);

(statearr_45598_48235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (13))){
var inst_45581 = (state_45588[(2)]);
var state_45588__$1 = (function (){var statearr_45599 = state_45588;
(statearr_45599[(9)] = inst_45581);

return statearr_45599;
})();
var statearr_45600_48237 = state_45588__$1;
(statearr_45600_48237[(2)] = null);

(statearr_45600_48237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (6))){
var inst_45553 = (state_45588[(7)]);
var state_45588__$1 = state_45588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45588__$1,(11),inst_45553);
} else {
if((state_val_45589 === (17))){
var inst_45574 = (state_45588[(2)]);
var state_45588__$1 = state_45588;
if(cljs.core.truth_(inst_45574)){
var statearr_45601_48238 = state_45588__$1;
(statearr_45601_48238[(1)] = (19));

} else {
var statearr_45602_48239 = state_45588__$1;
(statearr_45602_48239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (3))){
var inst_45586 = (state_45588[(2)]);
var state_45588__$1 = state_45588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45588__$1,inst_45586);
} else {
if((state_val_45589 === (12))){
var inst_45563 = (state_45588[(10)]);
var state_45588__$1 = state_45588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45588__$1,(14),inst_45563);
} else {
if((state_val_45589 === (2))){
var state_45588__$1 = state_45588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45588__$1,(4),results);
} else {
if((state_val_45589 === (19))){
var state_45588__$1 = state_45588;
var statearr_45603_48243 = state_45588__$1;
(statearr_45603_48243[(2)] = null);

(statearr_45603_48243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (11))){
var inst_45563 = (state_45588[(2)]);
var state_45588__$1 = (function (){var statearr_45605 = state_45588;
(statearr_45605[(10)] = inst_45563);

return statearr_45605;
})();
var statearr_45607_48248 = state_45588__$1;
(statearr_45607_48248[(2)] = null);

(statearr_45607_48248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (9))){
var state_45588__$1 = state_45588;
var statearr_45611_48249 = state_45588__$1;
(statearr_45611_48249[(2)] = null);

(statearr_45611_48249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (5))){
var state_45588__$1 = state_45588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45612_48252 = state_45588__$1;
(statearr_45612_48252[(1)] = (8));

} else {
var statearr_45613_48253 = state_45588__$1;
(statearr_45613_48253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (14))){
var inst_45566 = (state_45588[(8)]);
var inst_45568 = (state_45588[(11)]);
var inst_45566__$1 = (state_45588[(2)]);
var inst_45567 = (inst_45566__$1 == null);
var inst_45568__$1 = cljs.core.not(inst_45567);
var state_45588__$1 = (function (){var statearr_45618 = state_45588;
(statearr_45618[(8)] = inst_45566__$1);

(statearr_45618[(11)] = inst_45568__$1);

return statearr_45618;
})();
if(inst_45568__$1){
var statearr_45619_48256 = state_45588__$1;
(statearr_45619_48256[(1)] = (15));

} else {
var statearr_45620_48259 = state_45588__$1;
(statearr_45620_48259[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (16))){
var inst_45568 = (state_45588[(11)]);
var state_45588__$1 = state_45588;
var statearr_45621_48265 = state_45588__$1;
(statearr_45621_48265[(2)] = inst_45568);

(statearr_45621_48265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (10))){
var inst_45560 = (state_45588[(2)]);
var state_45588__$1 = state_45588;
var statearr_45622_48267 = state_45588__$1;
(statearr_45622_48267[(2)] = inst_45560);

(statearr_45622_48267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (18))){
var inst_45571 = (state_45588[(2)]);
var state_45588__$1 = state_45588;
var statearr_45623_48271 = state_45588__$1;
(statearr_45623_48271[(2)] = inst_45571);

(statearr_45623_48271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45589 === (8))){
var inst_45557 = cljs.core.async.close_BANG_(to);
var state_45588__$1 = state_45588;
var statearr_45625_48272 = state_45588__$1;
(statearr_45625_48272[(2)] = inst_45557);

(statearr_45625_48272[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0 = (function (){
var statearr_45630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__);

(statearr_45630[(1)] = (1));

return statearr_45630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1 = (function (state_45588){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45588);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45631){var ex__35549__auto__ = e45631;
var statearr_45632_48285 = state_45588;
(statearr_45632_48285[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45588[(4)]))){
var statearr_45633_48286 = state_45588;
(statearr_45633_48286[(1)] = cljs.core.first((state_45588[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48287 = state_45588;
state_45588 = G__48287;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__ = function(state_45588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1.call(this,state_45588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45638 = f__35760__auto__();
(statearr_45638[(6)] = c__35759__auto__);

return statearr_45638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));

return c__35759__auto__;
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
var G__45652 = arguments.length;
switch (G__45652) {
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
var G__45664 = arguments.length;
switch (G__45664) {
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
var G__45685 = arguments.length;
switch (G__45685) {
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
var c__35759__auto___48334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45723){
var state_val_45724 = (state_45723[(1)]);
if((state_val_45724 === (7))){
var inst_45718 = (state_45723[(2)]);
var state_45723__$1 = state_45723;
var statearr_45728_48341 = state_45723__$1;
(statearr_45728_48341[(2)] = inst_45718);

(statearr_45728_48341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (1))){
var state_45723__$1 = state_45723;
var statearr_45730_48343 = state_45723__$1;
(statearr_45730_48343[(2)] = null);

(statearr_45730_48343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (4))){
var inst_45697 = (state_45723[(7)]);
var inst_45697__$1 = (state_45723[(2)]);
var inst_45698 = (inst_45697__$1 == null);
var state_45723__$1 = (function (){var statearr_45732 = state_45723;
(statearr_45732[(7)] = inst_45697__$1);

return statearr_45732;
})();
if(cljs.core.truth_(inst_45698)){
var statearr_45733_48344 = state_45723__$1;
(statearr_45733_48344[(1)] = (5));

} else {
var statearr_45735_48348 = state_45723__$1;
(statearr_45735_48348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (13))){
var state_45723__$1 = state_45723;
var statearr_45742_48349 = state_45723__$1;
(statearr_45742_48349[(2)] = null);

(statearr_45742_48349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (6))){
var inst_45697 = (state_45723[(7)]);
var inst_45705 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45697) : p.call(null,inst_45697));
var state_45723__$1 = state_45723;
if(cljs.core.truth_(inst_45705)){
var statearr_45744_48351 = state_45723__$1;
(statearr_45744_48351[(1)] = (9));

} else {
var statearr_45745_48352 = state_45723__$1;
(statearr_45745_48352[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (3))){
var inst_45720 = (state_45723[(2)]);
var state_45723__$1 = state_45723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45723__$1,inst_45720);
} else {
if((state_val_45724 === (12))){
var state_45723__$1 = state_45723;
var statearr_45752_48358 = state_45723__$1;
(statearr_45752_48358[(2)] = null);

(statearr_45752_48358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (2))){
var state_45723__$1 = state_45723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45723__$1,(4),ch);
} else {
if((state_val_45724 === (11))){
var inst_45697 = (state_45723[(7)]);
var inst_45709 = (state_45723[(2)]);
var state_45723__$1 = state_45723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45723__$1,(8),inst_45709,inst_45697);
} else {
if((state_val_45724 === (9))){
var state_45723__$1 = state_45723;
var statearr_45759_48360 = state_45723__$1;
(statearr_45759_48360[(2)] = tc);

(statearr_45759_48360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (5))){
var inst_45700 = cljs.core.async.close_BANG_(tc);
var inst_45701 = cljs.core.async.close_BANG_(fc);
var state_45723__$1 = (function (){var statearr_45761 = state_45723;
(statearr_45761[(8)] = inst_45700);

return statearr_45761;
})();
var statearr_45762_48373 = state_45723__$1;
(statearr_45762_48373[(2)] = inst_45701);

(statearr_45762_48373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (14))){
var inst_45716 = (state_45723[(2)]);
var state_45723__$1 = state_45723;
var statearr_45763_48377 = state_45723__$1;
(statearr_45763_48377[(2)] = inst_45716);

(statearr_45763_48377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (10))){
var state_45723__$1 = state_45723;
var statearr_45766_48381 = state_45723__$1;
(statearr_45766_48381[(2)] = fc);

(statearr_45766_48381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45724 === (8))){
var inst_45711 = (state_45723[(2)]);
var state_45723__$1 = state_45723;
if(cljs.core.truth_(inst_45711)){
var statearr_45768_48382 = state_45723__$1;
(statearr_45768_48382[(1)] = (12));

} else {
var statearr_45769_48384 = state_45723__$1;
(statearr_45769_48384[(1)] = (13));

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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_45772 = [null,null,null,null,null,null,null,null,null];
(statearr_45772[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_45772[(1)] = (1));

return statearr_45772;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_45723){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45723);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45773){var ex__35549__auto__ = e45773;
var statearr_45774_48385 = state_45723;
(statearr_45774_48385[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45723[(4)]))){
var statearr_45779_48386 = state_45723;
(statearr_45779_48386[(1)] = cljs.core.first((state_45723[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48387 = state_45723;
state_45723 = G__48387;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_45723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_45723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45780 = f__35760__auto__();
(statearr_45780[(6)] = c__35759__auto___48334);

return statearr_45780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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
var c__35759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45818){
var state_val_45819 = (state_45818[(1)]);
if((state_val_45819 === (7))){
var inst_45814 = (state_45818[(2)]);
var state_45818__$1 = state_45818;
var statearr_45823_48404 = state_45818__$1;
(statearr_45823_48404[(2)] = inst_45814);

(statearr_45823_48404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (1))){
var inst_45793 = init;
var inst_45794 = inst_45793;
var state_45818__$1 = (function (){var statearr_45824 = state_45818;
(statearr_45824[(7)] = inst_45794);

return statearr_45824;
})();
var statearr_45825_48407 = state_45818__$1;
(statearr_45825_48407[(2)] = null);

(statearr_45825_48407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (4))){
var inst_45797 = (state_45818[(8)]);
var inst_45797__$1 = (state_45818[(2)]);
var inst_45799 = (inst_45797__$1 == null);
var state_45818__$1 = (function (){var statearr_45826 = state_45818;
(statearr_45826[(8)] = inst_45797__$1);

return statearr_45826;
})();
if(cljs.core.truth_(inst_45799)){
var statearr_45827_48408 = state_45818__$1;
(statearr_45827_48408[(1)] = (5));

} else {
var statearr_45829_48409 = state_45818__$1;
(statearr_45829_48409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (6))){
var inst_45797 = (state_45818[(8)]);
var inst_45803 = (state_45818[(9)]);
var inst_45794 = (state_45818[(7)]);
var inst_45803__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45794,inst_45797) : f.call(null,inst_45794,inst_45797));
var inst_45805 = cljs.core.reduced_QMARK_(inst_45803__$1);
var state_45818__$1 = (function (){var statearr_45833 = state_45818;
(statearr_45833[(9)] = inst_45803__$1);

return statearr_45833;
})();
if(inst_45805){
var statearr_45834_48422 = state_45818__$1;
(statearr_45834_48422[(1)] = (8));

} else {
var statearr_45835_48423 = state_45818__$1;
(statearr_45835_48423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (3))){
var inst_45816 = (state_45818[(2)]);
var state_45818__$1 = state_45818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45818__$1,inst_45816);
} else {
if((state_val_45819 === (2))){
var state_45818__$1 = state_45818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45818__$1,(4),ch);
} else {
if((state_val_45819 === (9))){
var inst_45803 = (state_45818[(9)]);
var inst_45794 = inst_45803;
var state_45818__$1 = (function (){var statearr_45836 = state_45818;
(statearr_45836[(7)] = inst_45794);

return statearr_45836;
})();
var statearr_45837_48424 = state_45818__$1;
(statearr_45837_48424[(2)] = null);

(statearr_45837_48424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (5))){
var inst_45794 = (state_45818[(7)]);
var state_45818__$1 = state_45818;
var statearr_45838_48425 = state_45818__$1;
(statearr_45838_48425[(2)] = inst_45794);

(statearr_45838_48425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (10))){
var inst_45812 = (state_45818[(2)]);
var state_45818__$1 = state_45818;
var statearr_45839_48426 = state_45818__$1;
(statearr_45839_48426[(2)] = inst_45812);

(statearr_45839_48426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45819 === (8))){
var inst_45803 = (state_45818[(9)]);
var inst_45808 = cljs.core.deref(inst_45803);
var state_45818__$1 = state_45818;
var statearr_45841_48427 = state_45818__$1;
(statearr_45841_48427[(2)] = inst_45808);

(statearr_45841_48427[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35546__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35546__auto____0 = (function (){
var statearr_45848 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45848[(0)] = cljs$core$async$reduce_$_state_machine__35546__auto__);

(statearr_45848[(1)] = (1));

return statearr_45848;
});
var cljs$core$async$reduce_$_state_machine__35546__auto____1 = (function (state_45818){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45818);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45849){var ex__35549__auto__ = e45849;
var statearr_45850_48440 = state_45818;
(statearr_45850_48440[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45818[(4)]))){
var statearr_45851_48442 = state_45818;
(statearr_45851_48442[(1)] = cljs.core.first((state_45818[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48443 = state_45818;
state_45818 = G__48443;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35546__auto__ = function(state_45818){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35546__auto____1.call(this,state_45818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35546__auto____0;
cljs$core$async$reduce_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35546__auto____1;
return cljs$core$async$reduce_$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45852 = f__35760__auto__();
(statearr_45852[(6)] = c__35759__auto__);

return statearr_45852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));

return c__35759__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45858){
var state_val_45859 = (state_45858[(1)]);
if((state_val_45859 === (1))){
var inst_45853 = cljs.core.async.reduce(f__$1,init,ch);
var state_45858__$1 = state_45858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45858__$1,(2),inst_45853);
} else {
if((state_val_45859 === (2))){
var inst_45855 = (state_45858[(2)]);
var inst_45856 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45855) : f__$1.call(null,inst_45855));
var state_45858__$1 = state_45858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45858__$1,inst_45856);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35546__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35546__auto____0 = (function (){
var statearr_45864 = [null,null,null,null,null,null,null];
(statearr_45864[(0)] = cljs$core$async$transduce_$_state_machine__35546__auto__);

(statearr_45864[(1)] = (1));

return statearr_45864;
});
var cljs$core$async$transduce_$_state_machine__35546__auto____1 = (function (state_45858){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45858);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45866){var ex__35549__auto__ = e45866;
var statearr_45868_48448 = state_45858;
(statearr_45868_48448[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45858[(4)]))){
var statearr_45869_48453 = state_45858;
(statearr_45869_48453[(1)] = cljs.core.first((state_45858[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48455 = state_45858;
state_45858 = G__48455;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35546__auto__ = function(state_45858){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35546__auto____1.call(this,state_45858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35546__auto____0;
cljs$core$async$transduce_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35546__auto____1;
return cljs$core$async$transduce_$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45871 = f__35760__auto__();
(statearr_45871[(6)] = c__35759__auto__);

return statearr_45871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));

return c__35759__auto__;
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
var G__45879 = arguments.length;
switch (G__45879) {
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
var c__35759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_45917){
var state_val_45918 = (state_45917[(1)]);
if((state_val_45918 === (7))){
var inst_45894 = (state_45917[(2)]);
var state_45917__$1 = state_45917;
var statearr_45924_48479 = state_45917__$1;
(statearr_45924_48479[(2)] = inst_45894);

(statearr_45924_48479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (1))){
var inst_45885 = cljs.core.seq(coll);
var inst_45889 = inst_45885;
var state_45917__$1 = (function (){var statearr_45927 = state_45917;
(statearr_45927[(7)] = inst_45889);

return statearr_45927;
})();
var statearr_45928_48481 = state_45917__$1;
(statearr_45928_48481[(2)] = null);

(statearr_45928_48481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (4))){
var inst_45889 = (state_45917[(7)]);
var inst_45892 = cljs.core.first(inst_45889);
var state_45917__$1 = state_45917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45917__$1,(7),ch,inst_45892);
} else {
if((state_val_45918 === (13))){
var inst_45909 = (state_45917[(2)]);
var state_45917__$1 = state_45917;
var statearr_45932_48485 = state_45917__$1;
(statearr_45932_48485[(2)] = inst_45909);

(statearr_45932_48485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (6))){
var inst_45900 = (state_45917[(2)]);
var state_45917__$1 = state_45917;
if(cljs.core.truth_(inst_45900)){
var statearr_45934_48486 = state_45917__$1;
(statearr_45934_48486[(1)] = (8));

} else {
var statearr_45935_48487 = state_45917__$1;
(statearr_45935_48487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (3))){
var inst_45913 = (state_45917[(2)]);
var state_45917__$1 = state_45917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45917__$1,inst_45913);
} else {
if((state_val_45918 === (12))){
var state_45917__$1 = state_45917;
var statearr_45938_48494 = state_45917__$1;
(statearr_45938_48494[(2)] = null);

(statearr_45938_48494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (2))){
var inst_45889 = (state_45917[(7)]);
var state_45917__$1 = state_45917;
if(cljs.core.truth_(inst_45889)){
var statearr_45941_48497 = state_45917__$1;
(statearr_45941_48497[(1)] = (4));

} else {
var statearr_45942_48498 = state_45917__$1;
(statearr_45942_48498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (11))){
var inst_45906 = cljs.core.async.close_BANG_(ch);
var state_45917__$1 = state_45917;
var statearr_45943_48499 = state_45917__$1;
(statearr_45943_48499[(2)] = inst_45906);

(statearr_45943_48499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (9))){
var state_45917__$1 = state_45917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45951_48500 = state_45917__$1;
(statearr_45951_48500[(1)] = (11));

} else {
var statearr_45954_48501 = state_45917__$1;
(statearr_45954_48501[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (5))){
var inst_45889 = (state_45917[(7)]);
var state_45917__$1 = state_45917;
var statearr_45957_48502 = state_45917__$1;
(statearr_45957_48502[(2)] = inst_45889);

(statearr_45957_48502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (10))){
var inst_45911 = (state_45917[(2)]);
var state_45917__$1 = state_45917;
var statearr_45962_48504 = state_45917__$1;
(statearr_45962_48504[(2)] = inst_45911);

(statearr_45962_48504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45918 === (8))){
var inst_45889 = (state_45917[(7)]);
var inst_45902 = cljs.core.next(inst_45889);
var inst_45889__$1 = inst_45902;
var state_45917__$1 = (function (){var statearr_45963 = state_45917;
(statearr_45963[(7)] = inst_45889__$1);

return statearr_45963;
})();
var statearr_45965_48508 = state_45917__$1;
(statearr_45965_48508[(2)] = null);

(statearr_45965_48508[(1)] = (2));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_45970 = [null,null,null,null,null,null,null,null];
(statearr_45970[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_45970[(1)] = (1));

return statearr_45970;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_45917){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_45917);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e45971){var ex__35549__auto__ = e45971;
var statearr_45972_48517 = state_45917;
(statearr_45972_48517[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_45917[(4)]))){
var statearr_45974_48524 = state_45917;
(statearr_45974_48524[(1)] = cljs.core.first((state_45917[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48525 = state_45917;
state_45917 = G__48525;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_45917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_45917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_45977 = f__35760__auto__();
(statearr_45977[(6)] = c__35759__auto__);

return statearr_45977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));

return c__35759__auto__;
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
var G__45984 = arguments.length;
switch (G__45984) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_48534 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_48534(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48555 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_48555(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48562 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_48562(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48564 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_48564(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46015 = (function (ch,cs,meta46016){
this.ch = ch;
this.cs = cs;
this.meta46016 = meta46016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46017,meta46016__$1){
var self__ = this;
var _46017__$1 = this;
return (new cljs.core.async.t_cljs$core$async46015(self__.ch,self__.cs,meta46016__$1));
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46017){
var self__ = this;
var _46017__$1 = this;
return self__.meta46016;
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46016","meta46016",194401731,null)], null);
}));

(cljs.core.async.t_cljs$core$async46015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46015");

(cljs.core.async.t_cljs$core$async46015.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46015.
 */
cljs.core.async.__GT_t_cljs$core$async46015 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46015(ch__$1,cs__$1,meta46016){
return (new cljs.core.async.t_cljs$core$async46015(ch__$1,cs__$1,meta46016));
});

}

return (new cljs.core.async.t_cljs$core$async46015(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35759__auto___48584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_46187){
var state_val_46188 = (state_46187[(1)]);
if((state_val_46188 === (7))){
var inst_46180 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46201_48585 = state_46187__$1;
(statearr_46201_48585[(2)] = inst_46180);

(statearr_46201_48585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (20))){
var inst_46079 = (state_46187[(7)]);
var inst_46093 = cljs.core.first(inst_46079);
var inst_46094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46093,(0),null);
var inst_46095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46093,(1),null);
var state_46187__$1 = (function (){var statearr_46205 = state_46187;
(statearr_46205[(8)] = inst_46094);

return statearr_46205;
})();
if(cljs.core.truth_(inst_46095)){
var statearr_46206_48586 = state_46187__$1;
(statearr_46206_48586[(1)] = (22));

} else {
var statearr_46207_48587 = state_46187__$1;
(statearr_46207_48587[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (27))){
var inst_46046 = (state_46187[(9)]);
var inst_46127 = (state_46187[(10)]);
var inst_46134 = (state_46187[(11)]);
var inst_46125 = (state_46187[(12)]);
var inst_46134__$1 = cljs.core._nth(inst_46125,inst_46127);
var inst_46135 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46134__$1,inst_46046,done);
var state_46187__$1 = (function (){var statearr_46211 = state_46187;
(statearr_46211[(11)] = inst_46134__$1);

return statearr_46211;
})();
if(cljs.core.truth_(inst_46135)){
var statearr_46214_48588 = state_46187__$1;
(statearr_46214_48588[(1)] = (30));

} else {
var statearr_46215_48589 = state_46187__$1;
(statearr_46215_48589[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (1))){
var state_46187__$1 = state_46187;
var statearr_46217_48590 = state_46187__$1;
(statearr_46217_48590[(2)] = null);

(statearr_46217_48590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (24))){
var inst_46079 = (state_46187[(7)]);
var inst_46100 = (state_46187[(2)]);
var inst_46103 = cljs.core.next(inst_46079);
var inst_46055 = inst_46103;
var inst_46056 = null;
var inst_46057 = (0);
var inst_46058 = (0);
var state_46187__$1 = (function (){var statearr_46220 = state_46187;
(statearr_46220[(13)] = inst_46100);

(statearr_46220[(14)] = inst_46055);

(statearr_46220[(15)] = inst_46058);

(statearr_46220[(16)] = inst_46057);

(statearr_46220[(17)] = inst_46056);

return statearr_46220;
})();
var statearr_46221_48594 = state_46187__$1;
(statearr_46221_48594[(2)] = null);

(statearr_46221_48594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (39))){
var state_46187__$1 = state_46187;
var statearr_46225_48601 = state_46187__$1;
(statearr_46225_48601[(2)] = null);

(statearr_46225_48601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (4))){
var inst_46046 = (state_46187[(9)]);
var inst_46046__$1 = (state_46187[(2)]);
var inst_46047 = (inst_46046__$1 == null);
var state_46187__$1 = (function (){var statearr_46227 = state_46187;
(statearr_46227[(9)] = inst_46046__$1);

return statearr_46227;
})();
if(cljs.core.truth_(inst_46047)){
var statearr_46228_48602 = state_46187__$1;
(statearr_46228_48602[(1)] = (5));

} else {
var statearr_46229_48603 = state_46187__$1;
(statearr_46229_48603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (15))){
var inst_46055 = (state_46187[(14)]);
var inst_46058 = (state_46187[(15)]);
var inst_46057 = (state_46187[(16)]);
var inst_46056 = (state_46187[(17)]);
var inst_46075 = (state_46187[(2)]);
var inst_46076 = (inst_46058 + (1));
var tmp46222 = inst_46055;
var tmp46223 = inst_46057;
var tmp46224 = inst_46056;
var inst_46055__$1 = tmp46222;
var inst_46056__$1 = tmp46224;
var inst_46057__$1 = tmp46223;
var inst_46058__$1 = inst_46076;
var state_46187__$1 = (function (){var statearr_46231 = state_46187;
(statearr_46231[(18)] = inst_46075);

(statearr_46231[(14)] = inst_46055__$1);

(statearr_46231[(15)] = inst_46058__$1);

(statearr_46231[(16)] = inst_46057__$1);

(statearr_46231[(17)] = inst_46056__$1);

return statearr_46231;
})();
var statearr_46232_48610 = state_46187__$1;
(statearr_46232_48610[(2)] = null);

(statearr_46232_48610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (21))){
var inst_46106 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46236_48612 = state_46187__$1;
(statearr_46236_48612[(2)] = inst_46106);

(statearr_46236_48612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (31))){
var inst_46134 = (state_46187[(11)]);
var inst_46138 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46134);
var state_46187__$1 = state_46187;
var statearr_46239_48613 = state_46187__$1;
(statearr_46239_48613[(2)] = inst_46138);

(statearr_46239_48613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (32))){
var inst_46126 = (state_46187[(19)]);
var inst_46124 = (state_46187[(20)]);
var inst_46127 = (state_46187[(10)]);
var inst_46125 = (state_46187[(12)]);
var inst_46140 = (state_46187[(2)]);
var inst_46141 = (inst_46127 + (1));
var tmp46233 = inst_46126;
var tmp46234 = inst_46124;
var tmp46235 = inst_46125;
var inst_46124__$1 = tmp46234;
var inst_46125__$1 = tmp46235;
var inst_46126__$1 = tmp46233;
var inst_46127__$1 = inst_46141;
var state_46187__$1 = (function (){var statearr_46242 = state_46187;
(statearr_46242[(19)] = inst_46126__$1);

(statearr_46242[(20)] = inst_46124__$1);

(statearr_46242[(21)] = inst_46140);

(statearr_46242[(10)] = inst_46127__$1);

(statearr_46242[(12)] = inst_46125__$1);

return statearr_46242;
})();
var statearr_46243_48614 = state_46187__$1;
(statearr_46243_48614[(2)] = null);

(statearr_46243_48614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (40))){
var inst_46153 = (state_46187[(22)]);
var inst_46157 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46153);
var state_46187__$1 = state_46187;
var statearr_46244_48615 = state_46187__$1;
(statearr_46244_48615[(2)] = inst_46157);

(statearr_46244_48615[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (33))){
var inst_46144 = (state_46187[(23)]);
var inst_46146 = cljs.core.chunked_seq_QMARK_(inst_46144);
var state_46187__$1 = state_46187;
if(inst_46146){
var statearr_46245_48616 = state_46187__$1;
(statearr_46245_48616[(1)] = (36));

} else {
var statearr_46247_48617 = state_46187__$1;
(statearr_46247_48617[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (13))){
var inst_46069 = (state_46187[(24)]);
var inst_46072 = cljs.core.async.close_BANG_(inst_46069);
var state_46187__$1 = state_46187;
var statearr_46251_48618 = state_46187__$1;
(statearr_46251_48618[(2)] = inst_46072);

(statearr_46251_48618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (22))){
var inst_46094 = (state_46187[(8)]);
var inst_46097 = cljs.core.async.close_BANG_(inst_46094);
var state_46187__$1 = state_46187;
var statearr_46252_48619 = state_46187__$1;
(statearr_46252_48619[(2)] = inst_46097);

(statearr_46252_48619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (36))){
var inst_46144 = (state_46187[(23)]);
var inst_46148 = cljs.core.chunk_first(inst_46144);
var inst_46149 = cljs.core.chunk_rest(inst_46144);
var inst_46150 = cljs.core.count(inst_46148);
var inst_46124 = inst_46149;
var inst_46125 = inst_46148;
var inst_46126 = inst_46150;
var inst_46127 = (0);
var state_46187__$1 = (function (){var statearr_46253 = state_46187;
(statearr_46253[(19)] = inst_46126);

(statearr_46253[(20)] = inst_46124);

(statearr_46253[(10)] = inst_46127);

(statearr_46253[(12)] = inst_46125);

return statearr_46253;
})();
var statearr_46260_48620 = state_46187__$1;
(statearr_46260_48620[(2)] = null);

(statearr_46260_48620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (41))){
var inst_46144 = (state_46187[(23)]);
var inst_46159 = (state_46187[(2)]);
var inst_46160 = cljs.core.next(inst_46144);
var inst_46124 = inst_46160;
var inst_46125 = null;
var inst_46126 = (0);
var inst_46127 = (0);
var state_46187__$1 = (function (){var statearr_46262 = state_46187;
(statearr_46262[(19)] = inst_46126);

(statearr_46262[(20)] = inst_46124);

(statearr_46262[(10)] = inst_46127);

(statearr_46262[(12)] = inst_46125);

(statearr_46262[(25)] = inst_46159);

return statearr_46262;
})();
var statearr_46264_48622 = state_46187__$1;
(statearr_46264_48622[(2)] = null);

(statearr_46264_48622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (43))){
var state_46187__$1 = state_46187;
var statearr_46265_48623 = state_46187__$1;
(statearr_46265_48623[(2)] = null);

(statearr_46265_48623[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (29))){
var inst_46168 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46266_48624 = state_46187__$1;
(statearr_46266_48624[(2)] = inst_46168);

(statearr_46266_48624[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (44))){
var inst_46177 = (state_46187[(2)]);
var state_46187__$1 = (function (){var statearr_46267 = state_46187;
(statearr_46267[(26)] = inst_46177);

return statearr_46267;
})();
var statearr_46268_48625 = state_46187__$1;
(statearr_46268_48625[(2)] = null);

(statearr_46268_48625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (6))){
var inst_46116 = (state_46187[(27)]);
var inst_46115 = cljs.core.deref(cs);
var inst_46116__$1 = cljs.core.keys(inst_46115);
var inst_46117 = cljs.core.count(inst_46116__$1);
var inst_46118 = cljs.core.reset_BANG_(dctr,inst_46117);
var inst_46123 = cljs.core.seq(inst_46116__$1);
var inst_46124 = inst_46123;
var inst_46125 = null;
var inst_46126 = (0);
var inst_46127 = (0);
var state_46187__$1 = (function (){var statearr_46273 = state_46187;
(statearr_46273[(19)] = inst_46126);

(statearr_46273[(20)] = inst_46124);

(statearr_46273[(10)] = inst_46127);

(statearr_46273[(12)] = inst_46125);

(statearr_46273[(28)] = inst_46118);

(statearr_46273[(27)] = inst_46116__$1);

return statearr_46273;
})();
var statearr_46277_48626 = state_46187__$1;
(statearr_46277_48626[(2)] = null);

(statearr_46277_48626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (28))){
var inst_46144 = (state_46187[(23)]);
var inst_46124 = (state_46187[(20)]);
var inst_46144__$1 = cljs.core.seq(inst_46124);
var state_46187__$1 = (function (){var statearr_46288 = state_46187;
(statearr_46288[(23)] = inst_46144__$1);

return statearr_46288;
})();
if(inst_46144__$1){
var statearr_46289_48627 = state_46187__$1;
(statearr_46289_48627[(1)] = (33));

} else {
var statearr_46291_48628 = state_46187__$1;
(statearr_46291_48628[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (25))){
var inst_46126 = (state_46187[(19)]);
var inst_46127 = (state_46187[(10)]);
var inst_46129 = (inst_46127 < inst_46126);
var inst_46130 = inst_46129;
var state_46187__$1 = state_46187;
if(cljs.core.truth_(inst_46130)){
var statearr_46293_48629 = state_46187__$1;
(statearr_46293_48629[(1)] = (27));

} else {
var statearr_46294_48630 = state_46187__$1;
(statearr_46294_48630[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (34))){
var state_46187__$1 = state_46187;
var statearr_46297_48631 = state_46187__$1;
(statearr_46297_48631[(2)] = null);

(statearr_46297_48631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (17))){
var state_46187__$1 = state_46187;
var statearr_46299_48632 = state_46187__$1;
(statearr_46299_48632[(2)] = null);

(statearr_46299_48632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (3))){
var inst_46182 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46187__$1,inst_46182);
} else {
if((state_val_46188 === (12))){
var inst_46111 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46301_48633 = state_46187__$1;
(statearr_46301_48633[(2)] = inst_46111);

(statearr_46301_48633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (2))){
var state_46187__$1 = state_46187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46187__$1,(4),ch);
} else {
if((state_val_46188 === (23))){
var state_46187__$1 = state_46187;
var statearr_46303_48634 = state_46187__$1;
(statearr_46303_48634[(2)] = null);

(statearr_46303_48634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (35))){
var inst_46166 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46304_48635 = state_46187__$1;
(statearr_46304_48635[(2)] = inst_46166);

(statearr_46304_48635[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (19))){
var inst_46079 = (state_46187[(7)]);
var inst_46085 = cljs.core.chunk_first(inst_46079);
var inst_46086 = cljs.core.chunk_rest(inst_46079);
var inst_46087 = cljs.core.count(inst_46085);
var inst_46055 = inst_46086;
var inst_46056 = inst_46085;
var inst_46057 = inst_46087;
var inst_46058 = (0);
var state_46187__$1 = (function (){var statearr_46309 = state_46187;
(statearr_46309[(14)] = inst_46055);

(statearr_46309[(15)] = inst_46058);

(statearr_46309[(16)] = inst_46057);

(statearr_46309[(17)] = inst_46056);

return statearr_46309;
})();
var statearr_46310_48637 = state_46187__$1;
(statearr_46310_48637[(2)] = null);

(statearr_46310_48637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (11))){
var inst_46055 = (state_46187[(14)]);
var inst_46079 = (state_46187[(7)]);
var inst_46079__$1 = cljs.core.seq(inst_46055);
var state_46187__$1 = (function (){var statearr_46314 = state_46187;
(statearr_46314[(7)] = inst_46079__$1);

return statearr_46314;
})();
if(inst_46079__$1){
var statearr_46315_48638 = state_46187__$1;
(statearr_46315_48638[(1)] = (16));

} else {
var statearr_46316_48639 = state_46187__$1;
(statearr_46316_48639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (9))){
var inst_46113 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46318_48640 = state_46187__$1;
(statearr_46318_48640[(2)] = inst_46113);

(statearr_46318_48640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (5))){
var inst_46053 = cljs.core.deref(cs);
var inst_46054 = cljs.core.seq(inst_46053);
var inst_46055 = inst_46054;
var inst_46056 = null;
var inst_46057 = (0);
var inst_46058 = (0);
var state_46187__$1 = (function (){var statearr_46319 = state_46187;
(statearr_46319[(14)] = inst_46055);

(statearr_46319[(15)] = inst_46058);

(statearr_46319[(16)] = inst_46057);

(statearr_46319[(17)] = inst_46056);

return statearr_46319;
})();
var statearr_46324_48641 = state_46187__$1;
(statearr_46324_48641[(2)] = null);

(statearr_46324_48641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (14))){
var state_46187__$1 = state_46187;
var statearr_46328_48647 = state_46187__$1;
(statearr_46328_48647[(2)] = null);

(statearr_46328_48647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (45))){
var inst_46174 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46329_48648 = state_46187__$1;
(statearr_46329_48648[(2)] = inst_46174);

(statearr_46329_48648[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (26))){
var inst_46116 = (state_46187[(27)]);
var inst_46170 = (state_46187[(2)]);
var inst_46171 = cljs.core.seq(inst_46116);
var state_46187__$1 = (function (){var statearr_46330 = state_46187;
(statearr_46330[(29)] = inst_46170);

return statearr_46330;
})();
if(inst_46171){
var statearr_46331_48650 = state_46187__$1;
(statearr_46331_48650[(1)] = (42));

} else {
var statearr_46333_48651 = state_46187__$1;
(statearr_46333_48651[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (16))){
var inst_46079 = (state_46187[(7)]);
var inst_46083 = cljs.core.chunked_seq_QMARK_(inst_46079);
var state_46187__$1 = state_46187;
if(inst_46083){
var statearr_46334_48652 = state_46187__$1;
(statearr_46334_48652[(1)] = (19));

} else {
var statearr_46335_48653 = state_46187__$1;
(statearr_46335_48653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (38))){
var inst_46163 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46342_48654 = state_46187__$1;
(statearr_46342_48654[(2)] = inst_46163);

(statearr_46342_48654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (30))){
var state_46187__$1 = state_46187;
var statearr_46343_48655 = state_46187__$1;
(statearr_46343_48655[(2)] = null);

(statearr_46343_48655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (10))){
var inst_46058 = (state_46187[(15)]);
var inst_46056 = (state_46187[(17)]);
var inst_46066 = cljs.core._nth(inst_46056,inst_46058);
var inst_46069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46066,(0),null);
var inst_46070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46066,(1),null);
var state_46187__$1 = (function (){var statearr_46353 = state_46187;
(statearr_46353[(24)] = inst_46069);

return statearr_46353;
})();
if(cljs.core.truth_(inst_46070)){
var statearr_46355_48656 = state_46187__$1;
(statearr_46355_48656[(1)] = (13));

} else {
var statearr_46360_48657 = state_46187__$1;
(statearr_46360_48657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (18))){
var inst_46109 = (state_46187[(2)]);
var state_46187__$1 = state_46187;
var statearr_46361_48658 = state_46187__$1;
(statearr_46361_48658[(2)] = inst_46109);

(statearr_46361_48658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (42))){
var state_46187__$1 = state_46187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46187__$1,(45),dchan);
} else {
if((state_val_46188 === (37))){
var inst_46046 = (state_46187[(9)]);
var inst_46153 = (state_46187[(22)]);
var inst_46144 = (state_46187[(23)]);
var inst_46153__$1 = cljs.core.first(inst_46144);
var inst_46154 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46153__$1,inst_46046,done);
var state_46187__$1 = (function (){var statearr_46362 = state_46187;
(statearr_46362[(22)] = inst_46153__$1);

return statearr_46362;
})();
if(cljs.core.truth_(inst_46154)){
var statearr_46363_48659 = state_46187__$1;
(statearr_46363_48659[(1)] = (39));

} else {
var statearr_46364_48661 = state_46187__$1;
(statearr_46364_48661[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46188 === (8))){
var inst_46058 = (state_46187[(15)]);
var inst_46057 = (state_46187[(16)]);
var inst_46060 = (inst_46058 < inst_46057);
var inst_46061 = inst_46060;
var state_46187__$1 = state_46187;
if(cljs.core.truth_(inst_46061)){
var statearr_46365_48662 = state_46187__$1;
(statearr_46365_48662[(1)] = (10));

} else {
var statearr_46366_48663 = state_46187__$1;
(statearr_46366_48663[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35546__auto__ = null;
var cljs$core$async$mult_$_state_machine__35546__auto____0 = (function (){
var statearr_46367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46367[(0)] = cljs$core$async$mult_$_state_machine__35546__auto__);

(statearr_46367[(1)] = (1));

return statearr_46367;
});
var cljs$core$async$mult_$_state_machine__35546__auto____1 = (function (state_46187){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_46187);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e46368){var ex__35549__auto__ = e46368;
var statearr_46369_48665 = state_46187;
(statearr_46369_48665[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_46187[(4)]))){
var statearr_46370_48666 = state_46187;
(statearr_46370_48666[(1)] = cljs.core.first((state_46187[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48667 = state_46187;
state_46187 = G__48667;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35546__auto__ = function(state_46187){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35546__auto____1.call(this,state_46187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35546__auto____0;
cljs$core$async$mult_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35546__auto____1;
return cljs$core$async$mult_$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_46371 = f__35760__auto__();
(statearr_46371[(6)] = c__35759__auto___48584);

return statearr_46371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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
var G__46380 = arguments.length;
switch (G__46380) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_48678 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_48678(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48680 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_48680(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48684 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48684(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48690 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_48690(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48697 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48697(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48703 = arguments.length;
var i__4819__auto___48704 = (0);
while(true){
if((i__4819__auto___48704 < len__4818__auto___48703)){
args__4824__auto__.push((arguments[i__4819__auto___48704]));

var G__48705 = (i__4819__auto___48704 + (1));
i__4819__auto___48704 = G__48705;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46441){
var map__46442 = p__46441;
var map__46442__$1 = cljs.core.__destructure_map(map__46442);
var opts = map__46442__$1;
var statearr_46443_48706 = state;
(statearr_46443_48706[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46444_48708 = state;
(statearr_46444_48708[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46449_48709 = state;
(statearr_46449_48709[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46425){
var G__46426 = cljs.core.first(seq46425);
var seq46425__$1 = cljs.core.next(seq46425);
var G__46427 = cljs.core.first(seq46425__$1);
var seq46425__$2 = cljs.core.next(seq46425__$1);
var G__46428 = cljs.core.first(seq46425__$2);
var seq46425__$3 = cljs.core.next(seq46425__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46426,G__46427,G__46428,seq46425__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46472 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46473){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46473 = meta46473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46474,meta46473__$1){
var self__ = this;
var _46474__$1 = this;
return (new cljs.core.async.t_cljs$core$async46472(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46473__$1));
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46474){
var self__ = this;
var _46474__$1 = this;
return self__.meta46473;
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46472.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46473","meta46473",1950365451,null)], null);
}));

(cljs.core.async.t_cljs$core$async46472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46472");

(cljs.core.async.t_cljs$core$async46472.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46472.
 */
cljs.core.async.__GT_t_cljs$core$async46472 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46472(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46473){
return (new cljs.core.async.t_cljs$core$async46472(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46473));
});

}

return (new cljs.core.async.t_cljs$core$async46472(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35759__auto___48717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_46553){
var state_val_46554 = (state_46553[(1)]);
if((state_val_46554 === (7))){
var inst_46513 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
if(cljs.core.truth_(inst_46513)){
var statearr_46555_48718 = state_46553__$1;
(statearr_46555_48718[(1)] = (8));

} else {
var statearr_46556_48719 = state_46553__$1;
(statearr_46556_48719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (20))){
var inst_46506 = (state_46553[(7)]);
var state_46553__$1 = state_46553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46553__$1,(23),out,inst_46506);
} else {
if((state_val_46554 === (1))){
var inst_46489 = calc_state();
var inst_46490 = cljs.core.__destructure_map(inst_46489);
var inst_46491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46490,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46490,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46490,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46494 = inst_46489;
var state_46553__$1 = (function (){var statearr_46560 = state_46553;
(statearr_46560[(8)] = inst_46494);

(statearr_46560[(9)] = inst_46493);

(statearr_46560[(10)] = inst_46492);

(statearr_46560[(11)] = inst_46491);

return statearr_46560;
})();
var statearr_46561_48720 = state_46553__$1;
(statearr_46561_48720[(2)] = null);

(statearr_46561_48720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (24))){
var inst_46497 = (state_46553[(12)]);
var inst_46494 = inst_46497;
var state_46553__$1 = (function (){var statearr_46562 = state_46553;
(statearr_46562[(8)] = inst_46494);

return statearr_46562;
})();
var statearr_46563_48721 = state_46553__$1;
(statearr_46563_48721[(2)] = null);

(statearr_46563_48721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (4))){
var inst_46508 = (state_46553[(13)]);
var inst_46506 = (state_46553[(7)]);
var inst_46505 = (state_46553[(2)]);
var inst_46506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46505,(0),null);
var inst_46507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46505,(1),null);
var inst_46508__$1 = (inst_46506__$1 == null);
var state_46553__$1 = (function (){var statearr_46564 = state_46553;
(statearr_46564[(14)] = inst_46507);

(statearr_46564[(13)] = inst_46508__$1);

(statearr_46564[(7)] = inst_46506__$1);

return statearr_46564;
})();
if(cljs.core.truth_(inst_46508__$1)){
var statearr_46569_48723 = state_46553__$1;
(statearr_46569_48723[(1)] = (5));

} else {
var statearr_46570_48724 = state_46553__$1;
(statearr_46570_48724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (15))){
var inst_46527 = (state_46553[(15)]);
var inst_46498 = (state_46553[(16)]);
var inst_46527__$1 = cljs.core.empty_QMARK_(inst_46498);
var state_46553__$1 = (function (){var statearr_46571 = state_46553;
(statearr_46571[(15)] = inst_46527__$1);

return statearr_46571;
})();
if(inst_46527__$1){
var statearr_46572_48728 = state_46553__$1;
(statearr_46572_48728[(1)] = (17));

} else {
var statearr_46573_48729 = state_46553__$1;
(statearr_46573_48729[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (21))){
var inst_46497 = (state_46553[(12)]);
var inst_46494 = inst_46497;
var state_46553__$1 = (function (){var statearr_46574 = state_46553;
(statearr_46574[(8)] = inst_46494);

return statearr_46574;
})();
var statearr_46576_48731 = state_46553__$1;
(statearr_46576_48731[(2)] = null);

(statearr_46576_48731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (13))){
var inst_46520 = (state_46553[(2)]);
var inst_46521 = calc_state();
var inst_46494 = inst_46521;
var state_46553__$1 = (function (){var statearr_46582 = state_46553;
(statearr_46582[(8)] = inst_46494);

(statearr_46582[(17)] = inst_46520);

return statearr_46582;
})();
var statearr_46583_48733 = state_46553__$1;
(statearr_46583_48733[(2)] = null);

(statearr_46583_48733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (22))){
var inst_46547 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46584_48735 = state_46553__$1;
(statearr_46584_48735[(2)] = inst_46547);

(statearr_46584_48735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (6))){
var inst_46507 = (state_46553[(14)]);
var inst_46511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46507,change);
var state_46553__$1 = state_46553;
var statearr_46588_48738 = state_46553__$1;
(statearr_46588_48738[(2)] = inst_46511);

(statearr_46588_48738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (25))){
var state_46553__$1 = state_46553;
var statearr_46592_48743 = state_46553__$1;
(statearr_46592_48743[(2)] = null);

(statearr_46592_48743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (17))){
var inst_46507 = (state_46553[(14)]);
var inst_46499 = (state_46553[(18)]);
var inst_46529 = (inst_46499.cljs$core$IFn$_invoke$arity$1 ? inst_46499.cljs$core$IFn$_invoke$arity$1(inst_46507) : inst_46499.call(null,inst_46507));
var inst_46530 = cljs.core.not(inst_46529);
var state_46553__$1 = state_46553;
var statearr_46593_48747 = state_46553__$1;
(statearr_46593_48747[(2)] = inst_46530);

(statearr_46593_48747[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (3))){
var inst_46551 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46553__$1,inst_46551);
} else {
if((state_val_46554 === (12))){
var state_46553__$1 = state_46553;
var statearr_46594_48749 = state_46553__$1;
(statearr_46594_48749[(2)] = null);

(statearr_46594_48749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (2))){
var inst_46494 = (state_46553[(8)]);
var inst_46497 = (state_46553[(12)]);
var inst_46497__$1 = cljs.core.__destructure_map(inst_46494);
var inst_46498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46497__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46497__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46497__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46553__$1 = (function (){var statearr_46595 = state_46553;
(statearr_46595[(18)] = inst_46499);

(statearr_46595[(16)] = inst_46498);

(statearr_46595[(12)] = inst_46497__$1);

return statearr_46595;
})();
return cljs.core.async.ioc_alts_BANG_(state_46553__$1,(4),inst_46500);
} else {
if((state_val_46554 === (23))){
var inst_46538 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
if(cljs.core.truth_(inst_46538)){
var statearr_46596_48754 = state_46553__$1;
(statearr_46596_48754[(1)] = (24));

} else {
var statearr_46597_48755 = state_46553__$1;
(statearr_46597_48755[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (19))){
var inst_46533 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46602_48756 = state_46553__$1;
(statearr_46602_48756[(2)] = inst_46533);

(statearr_46602_48756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (11))){
var inst_46507 = (state_46553[(14)]);
var inst_46517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46507);
var state_46553__$1 = state_46553;
var statearr_46609_48762 = state_46553__$1;
(statearr_46609_48762[(2)] = inst_46517);

(statearr_46609_48762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (9))){
var inst_46524 = (state_46553[(19)]);
var inst_46507 = (state_46553[(14)]);
var inst_46498 = (state_46553[(16)]);
var inst_46524__$1 = (inst_46498.cljs$core$IFn$_invoke$arity$1 ? inst_46498.cljs$core$IFn$_invoke$arity$1(inst_46507) : inst_46498.call(null,inst_46507));
var state_46553__$1 = (function (){var statearr_46623 = state_46553;
(statearr_46623[(19)] = inst_46524__$1);

return statearr_46623;
})();
if(cljs.core.truth_(inst_46524__$1)){
var statearr_46625_48765 = state_46553__$1;
(statearr_46625_48765[(1)] = (14));

} else {
var statearr_46626_48766 = state_46553__$1;
(statearr_46626_48766[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (5))){
var inst_46508 = (state_46553[(13)]);
var state_46553__$1 = state_46553;
var statearr_46627_48772 = state_46553__$1;
(statearr_46627_48772[(2)] = inst_46508);

(statearr_46627_48772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (14))){
var inst_46524 = (state_46553[(19)]);
var state_46553__$1 = state_46553;
var statearr_46628_48779 = state_46553__$1;
(statearr_46628_48779[(2)] = inst_46524);

(statearr_46628_48779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (26))){
var inst_46543 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46638_48781 = state_46553__$1;
(statearr_46638_48781[(2)] = inst_46543);

(statearr_46638_48781[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (16))){
var inst_46535 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
if(cljs.core.truth_(inst_46535)){
var statearr_46640_48782 = state_46553__$1;
(statearr_46640_48782[(1)] = (20));

} else {
var statearr_46641_48787 = state_46553__$1;
(statearr_46641_48787[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (10))){
var inst_46549 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46644_48788 = state_46553__$1;
(statearr_46644_48788[(2)] = inst_46549);

(statearr_46644_48788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (18))){
var inst_46527 = (state_46553[(15)]);
var state_46553__$1 = state_46553;
var statearr_46645_48807 = state_46553__$1;
(statearr_46645_48807[(2)] = inst_46527);

(statearr_46645_48807[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (8))){
var inst_46506 = (state_46553[(7)]);
var inst_46515 = (inst_46506 == null);
var state_46553__$1 = state_46553;
if(cljs.core.truth_(inst_46515)){
var statearr_46646_48812 = state_46553__$1;
(statearr_46646_48812[(1)] = (11));

} else {
var statearr_46647_48813 = state_46553__$1;
(statearr_46647_48813[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__35546__auto__ = null;
var cljs$core$async$mix_$_state_machine__35546__auto____0 = (function (){
var statearr_46655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46655[(0)] = cljs$core$async$mix_$_state_machine__35546__auto__);

(statearr_46655[(1)] = (1));

return statearr_46655;
});
var cljs$core$async$mix_$_state_machine__35546__auto____1 = (function (state_46553){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_46553);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e46663){var ex__35549__auto__ = e46663;
var statearr_46669_48827 = state_46553;
(statearr_46669_48827[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_46553[(4)]))){
var statearr_46675_48830 = state_46553;
(statearr_46675_48830[(1)] = cljs.core.first((state_46553[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48831 = state_46553;
state_46553 = G__48831;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35546__auto__ = function(state_46553){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35546__auto____1.call(this,state_46553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35546__auto____0;
cljs$core$async$mix_$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35546__auto____1;
return cljs$core$async$mix_$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_46676 = f__35760__auto__();
(statearr_46676[(6)] = c__35759__auto___48717);

return statearr_46676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_48834 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_48834(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48840 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_48840(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48842 = (function() {
var G__48843 = null;
var G__48843__1 = (function (p){
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
var G__48843__2 = (function (p,v){
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
G__48843 = function(p,v){
switch(arguments.length){
case 1:
return G__48843__1.call(this,p);
case 2:
return G__48843__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48843.cljs$core$IFn$_invoke$arity$1 = G__48843__1;
G__48843.cljs$core$IFn$_invoke$arity$2 = G__48843__2;
return G__48843;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46745 = arguments.length;
switch (G__46745) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48842(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48842(p,v);
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
var G__46752 = arguments.length;
switch (G__46752) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46749_SHARP_){
if(cljs.core.truth_((p1__46749_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46749_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46749_SHARP_.call(null,topic)))){
return p1__46749_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46749_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46754 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46755){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46755 = meta46755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46756,meta46755__$1){
var self__ = this;
var _46756__$1 = this;
return (new cljs.core.async.t_cljs$core$async46754(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46755__$1));
}));

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46756){
var self__ = this;
var _46756__$1 = this;
return self__.meta46755;
}));

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46754.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46755","meta46755",-784986850,null)], null);
}));

(cljs.core.async.t_cljs$core$async46754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46754");

(cljs.core.async.t_cljs$core$async46754.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46754.
 */
cljs.core.async.__GT_t_cljs$core$async46754 = (function cljs$core$async$__GT_t_cljs$core$async46754(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46755){
return (new cljs.core.async.t_cljs$core$async46754(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46755));
});

}

return (new cljs.core.async.t_cljs$core$async46754(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35759__auto___48899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_46844){
var state_val_46845 = (state_46844[(1)]);
if((state_val_46845 === (7))){
var inst_46839 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
var statearr_46879_48903 = state_46844__$1;
(statearr_46879_48903[(2)] = inst_46839);

(statearr_46879_48903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (20))){
var state_46844__$1 = state_46844;
var statearr_46880_48905 = state_46844__$1;
(statearr_46880_48905[(2)] = null);

(statearr_46880_48905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (1))){
var state_46844__$1 = state_46844;
var statearr_46881_48906 = state_46844__$1;
(statearr_46881_48906[(2)] = null);

(statearr_46881_48906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (24))){
var inst_46822 = (state_46844[(7)]);
var inst_46831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46822);
var state_46844__$1 = state_46844;
var statearr_46888_48912 = state_46844__$1;
(statearr_46888_48912[(2)] = inst_46831);

(statearr_46888_48912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (4))){
var inst_46774 = (state_46844[(8)]);
var inst_46774__$1 = (state_46844[(2)]);
var inst_46775 = (inst_46774__$1 == null);
var state_46844__$1 = (function (){var statearr_46892 = state_46844;
(statearr_46892[(8)] = inst_46774__$1);

return statearr_46892;
})();
if(cljs.core.truth_(inst_46775)){
var statearr_46893_48915 = state_46844__$1;
(statearr_46893_48915[(1)] = (5));

} else {
var statearr_46894_48916 = state_46844__$1;
(statearr_46894_48916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (15))){
var inst_46816 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
var statearr_46895_48918 = state_46844__$1;
(statearr_46895_48918[(2)] = inst_46816);

(statearr_46895_48918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (21))){
var inst_46836 = (state_46844[(2)]);
var state_46844__$1 = (function (){var statearr_46896 = state_46844;
(statearr_46896[(9)] = inst_46836);

return statearr_46896;
})();
var statearr_46897_48919 = state_46844__$1;
(statearr_46897_48919[(2)] = null);

(statearr_46897_48919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (13))){
var inst_46798 = (state_46844[(10)]);
var inst_46800 = cljs.core.chunked_seq_QMARK_(inst_46798);
var state_46844__$1 = state_46844;
if(inst_46800){
var statearr_46899_48920 = state_46844__$1;
(statearr_46899_48920[(1)] = (16));

} else {
var statearr_46900_48921 = state_46844__$1;
(statearr_46900_48921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (22))){
var inst_46828 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
if(cljs.core.truth_(inst_46828)){
var statearr_46902_48922 = state_46844__$1;
(statearr_46902_48922[(1)] = (23));

} else {
var statearr_46904_48923 = state_46844__$1;
(statearr_46904_48923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (6))){
var inst_46824 = (state_46844[(11)]);
var inst_46774 = (state_46844[(8)]);
var inst_46822 = (state_46844[(7)]);
var inst_46822__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46774) : topic_fn.call(null,inst_46774));
var inst_46823 = cljs.core.deref(mults);
var inst_46824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46823,inst_46822__$1);
var state_46844__$1 = (function (){var statearr_46907 = state_46844;
(statearr_46907[(11)] = inst_46824__$1);

(statearr_46907[(7)] = inst_46822__$1);

return statearr_46907;
})();
if(cljs.core.truth_(inst_46824__$1)){
var statearr_46908_48925 = state_46844__$1;
(statearr_46908_48925[(1)] = (19));

} else {
var statearr_46910_48928 = state_46844__$1;
(statearr_46910_48928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (25))){
var inst_46833 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
var statearr_46912_48930 = state_46844__$1;
(statearr_46912_48930[(2)] = inst_46833);

(statearr_46912_48930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (17))){
var inst_46798 = (state_46844[(10)]);
var inst_46807 = cljs.core.first(inst_46798);
var inst_46808 = cljs.core.async.muxch_STAR_(inst_46807);
var inst_46809 = cljs.core.async.close_BANG_(inst_46808);
var inst_46810 = cljs.core.next(inst_46798);
var inst_46784 = inst_46810;
var inst_46785 = null;
var inst_46786 = (0);
var inst_46787 = (0);
var state_46844__$1 = (function (){var statearr_46916 = state_46844;
(statearr_46916[(12)] = inst_46787);

(statearr_46916[(13)] = inst_46785);

(statearr_46916[(14)] = inst_46809);

(statearr_46916[(15)] = inst_46784);

(statearr_46916[(16)] = inst_46786);

return statearr_46916;
})();
var statearr_46917_48935 = state_46844__$1;
(statearr_46917_48935[(2)] = null);

(statearr_46917_48935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (3))){
var inst_46841 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46844__$1,inst_46841);
} else {
if((state_val_46845 === (12))){
var inst_46818 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
var statearr_46921_48937 = state_46844__$1;
(statearr_46921_48937[(2)] = inst_46818);

(statearr_46921_48937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (2))){
var state_46844__$1 = state_46844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46844__$1,(4),ch);
} else {
if((state_val_46845 === (23))){
var state_46844__$1 = state_46844;
var statearr_46922_48939 = state_46844__$1;
(statearr_46922_48939[(2)] = null);

(statearr_46922_48939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (19))){
var inst_46824 = (state_46844[(11)]);
var inst_46774 = (state_46844[(8)]);
var inst_46826 = cljs.core.async.muxch_STAR_(inst_46824);
var state_46844__$1 = state_46844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46844__$1,(22),inst_46826,inst_46774);
} else {
if((state_val_46845 === (11))){
var inst_46798 = (state_46844[(10)]);
var inst_46784 = (state_46844[(15)]);
var inst_46798__$1 = cljs.core.seq(inst_46784);
var state_46844__$1 = (function (){var statearr_46924 = state_46844;
(statearr_46924[(10)] = inst_46798__$1);

return statearr_46924;
})();
if(inst_46798__$1){
var statearr_46925_48945 = state_46844__$1;
(statearr_46925_48945[(1)] = (13));

} else {
var statearr_46926_48946 = state_46844__$1;
(statearr_46926_48946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (9))){
var inst_46820 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
var statearr_46928_48947 = state_46844__$1;
(statearr_46928_48947[(2)] = inst_46820);

(statearr_46928_48947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (5))){
var inst_46781 = cljs.core.deref(mults);
var inst_46782 = cljs.core.vals(inst_46781);
var inst_46783 = cljs.core.seq(inst_46782);
var inst_46784 = inst_46783;
var inst_46785 = null;
var inst_46786 = (0);
var inst_46787 = (0);
var state_46844__$1 = (function (){var statearr_46930 = state_46844;
(statearr_46930[(12)] = inst_46787);

(statearr_46930[(13)] = inst_46785);

(statearr_46930[(15)] = inst_46784);

(statearr_46930[(16)] = inst_46786);

return statearr_46930;
})();
var statearr_46931_48949 = state_46844__$1;
(statearr_46931_48949[(2)] = null);

(statearr_46931_48949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (14))){
var state_46844__$1 = state_46844;
var statearr_46935_48950 = state_46844__$1;
(statearr_46935_48950[(2)] = null);

(statearr_46935_48950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (16))){
var inst_46798 = (state_46844[(10)]);
var inst_46802 = cljs.core.chunk_first(inst_46798);
var inst_46803 = cljs.core.chunk_rest(inst_46798);
var inst_46804 = cljs.core.count(inst_46802);
var inst_46784 = inst_46803;
var inst_46785 = inst_46802;
var inst_46786 = inst_46804;
var inst_46787 = (0);
var state_46844__$1 = (function (){var statearr_46936 = state_46844;
(statearr_46936[(12)] = inst_46787);

(statearr_46936[(13)] = inst_46785);

(statearr_46936[(15)] = inst_46784);

(statearr_46936[(16)] = inst_46786);

return statearr_46936;
})();
var statearr_46937_48953 = state_46844__$1;
(statearr_46937_48953[(2)] = null);

(statearr_46937_48953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (10))){
var inst_46787 = (state_46844[(12)]);
var inst_46785 = (state_46844[(13)]);
var inst_46784 = (state_46844[(15)]);
var inst_46786 = (state_46844[(16)]);
var inst_46792 = cljs.core._nth(inst_46785,inst_46787);
var inst_46793 = cljs.core.async.muxch_STAR_(inst_46792);
var inst_46794 = cljs.core.async.close_BANG_(inst_46793);
var inst_46795 = (inst_46787 + (1));
var tmp46932 = inst_46785;
var tmp46933 = inst_46784;
var tmp46934 = inst_46786;
var inst_46784__$1 = tmp46933;
var inst_46785__$1 = tmp46932;
var inst_46786__$1 = tmp46934;
var inst_46787__$1 = inst_46795;
var state_46844__$1 = (function (){var statearr_46938 = state_46844;
(statearr_46938[(17)] = inst_46794);

(statearr_46938[(12)] = inst_46787__$1);

(statearr_46938[(13)] = inst_46785__$1);

(statearr_46938[(15)] = inst_46784__$1);

(statearr_46938[(16)] = inst_46786__$1);

return statearr_46938;
})();
var statearr_46939_48956 = state_46844__$1;
(statearr_46939_48956[(2)] = null);

(statearr_46939_48956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (18))){
var inst_46813 = (state_46844[(2)]);
var state_46844__$1 = state_46844;
var statearr_46940_48958 = state_46844__$1;
(statearr_46940_48958[(2)] = inst_46813);

(statearr_46940_48958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46845 === (8))){
var inst_46787 = (state_46844[(12)]);
var inst_46786 = (state_46844[(16)]);
var inst_46789 = (inst_46787 < inst_46786);
var inst_46790 = inst_46789;
var state_46844__$1 = state_46844;
if(cljs.core.truth_(inst_46790)){
var statearr_46941_48959 = state_46844__$1;
(statearr_46941_48959[(1)] = (10));

} else {
var statearr_46942_48960 = state_46844__$1;
(statearr_46942_48960[(1)] = (11));

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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_46955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46955[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_46955[(1)] = (1));

return statearr_46955;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_46844){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_46844);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e46959){var ex__35549__auto__ = e46959;
var statearr_46960_48965 = state_46844;
(statearr_46960_48965[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_46844[(4)]))){
var statearr_46969_48966 = state_46844;
(statearr_46969_48966[(1)] = cljs.core.first((state_46844[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48969 = state_46844;
state_46844 = G__48969;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_46844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_46844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_46970 = f__35760__auto__();
(statearr_46970[(6)] = c__35759__auto___48899);

return statearr_46970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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
var G__46973 = arguments.length;
switch (G__46973) {
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
var G__46979 = arguments.length;
switch (G__46979) {
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
var G__46993 = arguments.length;
switch (G__46993) {
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
var c__35759__auto___48985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47052){
var state_val_47053 = (state_47052[(1)]);
if((state_val_47053 === (7))){
var state_47052__$1 = state_47052;
var statearr_47056_48986 = state_47052__$1;
(statearr_47056_48986[(2)] = null);

(statearr_47056_48986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (1))){
var state_47052__$1 = state_47052;
var statearr_47057_48988 = state_47052__$1;
(statearr_47057_48988[(2)] = null);

(statearr_47057_48988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (4))){
var inst_47013 = (state_47052[(7)]);
var inst_47012 = (state_47052[(8)]);
var inst_47015 = (inst_47013 < inst_47012);
var state_47052__$1 = state_47052;
if(cljs.core.truth_(inst_47015)){
var statearr_47062_48992 = state_47052__$1;
(statearr_47062_48992[(1)] = (6));

} else {
var statearr_47063_48994 = state_47052__$1;
(statearr_47063_48994[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (15))){
var inst_47038 = (state_47052[(9)]);
var inst_47043 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47038);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47052__$1,(17),out,inst_47043);
} else {
if((state_val_47053 === (13))){
var inst_47038 = (state_47052[(9)]);
var inst_47038__$1 = (state_47052[(2)]);
var inst_47039 = cljs.core.some(cljs.core.nil_QMARK_,inst_47038__$1);
var state_47052__$1 = (function (){var statearr_47066 = state_47052;
(statearr_47066[(9)] = inst_47038__$1);

return statearr_47066;
})();
if(cljs.core.truth_(inst_47039)){
var statearr_47067_48996 = state_47052__$1;
(statearr_47067_48996[(1)] = (14));

} else {
var statearr_47068_48997 = state_47052__$1;
(statearr_47068_48997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (6))){
var state_47052__$1 = state_47052;
var statearr_47069_48998 = state_47052__$1;
(statearr_47069_48998[(2)] = null);

(statearr_47069_48998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (17))){
var inst_47045 = (state_47052[(2)]);
var state_47052__$1 = (function (){var statearr_47072 = state_47052;
(statearr_47072[(10)] = inst_47045);

return statearr_47072;
})();
var statearr_47073_48999 = state_47052__$1;
(statearr_47073_48999[(2)] = null);

(statearr_47073_48999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (3))){
var inst_47050 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47052__$1,inst_47050);
} else {
if((state_val_47053 === (12))){
var _ = (function (){var statearr_47075 = state_47052;
(statearr_47075[(4)] = cljs.core.rest((state_47052[(4)])));

return statearr_47075;
})();
var state_47052__$1 = state_47052;
var ex47070 = (state_47052__$1[(2)]);
var statearr_47079_49000 = state_47052__$1;
(statearr_47079_49000[(5)] = ex47070);


if((ex47070 instanceof Object)){
var statearr_47080_49001 = state_47052__$1;
(statearr_47080_49001[(1)] = (11));

(statearr_47080_49001[(5)] = null);

} else {
throw ex47070;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (2))){
var inst_47011 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47012 = cnt;
var inst_47013 = (0);
var state_47052__$1 = (function (){var statearr_47082 = state_47052;
(statearr_47082[(7)] = inst_47013);

(statearr_47082[(11)] = inst_47011);

(statearr_47082[(8)] = inst_47012);

return statearr_47082;
})();
var statearr_47083_49002 = state_47052__$1;
(statearr_47083_49002[(2)] = null);

(statearr_47083_49002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (11))){
var inst_47017 = (state_47052[(2)]);
var inst_47018 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47052__$1 = (function (){var statearr_47084 = state_47052;
(statearr_47084[(12)] = inst_47017);

return statearr_47084;
})();
var statearr_47087_49004 = state_47052__$1;
(statearr_47087_49004[(2)] = inst_47018);

(statearr_47087_49004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (9))){
var inst_47013 = (state_47052[(7)]);
var _ = (function (){var statearr_47088 = state_47052;
(statearr_47088[(4)] = cljs.core.cons((12),(state_47052[(4)])));

return statearr_47088;
})();
var inst_47024 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47013) : chs__$1.call(null,inst_47013));
var inst_47025 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47013) : done.call(null,inst_47013));
var inst_47026 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47024,inst_47025);
var ___$1 = (function (){var statearr_47093 = state_47052;
(statearr_47093[(4)] = cljs.core.rest((state_47052[(4)])));

return statearr_47093;
})();
var state_47052__$1 = state_47052;
var statearr_47094_49006 = state_47052__$1;
(statearr_47094_49006[(2)] = inst_47026);

(statearr_47094_49006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (5))){
var inst_47036 = (state_47052[(2)]);
var state_47052__$1 = (function (){var statearr_47095 = state_47052;
(statearr_47095[(13)] = inst_47036);

return statearr_47095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47052__$1,(13),dchan);
} else {
if((state_val_47053 === (14))){
var inst_47041 = cljs.core.async.close_BANG_(out);
var state_47052__$1 = state_47052;
var statearr_47096_49007 = state_47052__$1;
(statearr_47096_49007[(2)] = inst_47041);

(statearr_47096_49007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (16))){
var inst_47048 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47097_49008 = state_47052__$1;
(statearr_47097_49008[(2)] = inst_47048);

(statearr_47097_49008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (10))){
var inst_47013 = (state_47052[(7)]);
var inst_47029 = (state_47052[(2)]);
var inst_47030 = (inst_47013 + (1));
var inst_47013__$1 = inst_47030;
var state_47052__$1 = (function (){var statearr_47098 = state_47052;
(statearr_47098[(7)] = inst_47013__$1);

(statearr_47098[(14)] = inst_47029);

return statearr_47098;
})();
var statearr_47099_49011 = state_47052__$1;
(statearr_47099_49011[(2)] = null);

(statearr_47099_49011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47053 === (8))){
var inst_47034 = (state_47052[(2)]);
var state_47052__$1 = state_47052;
var statearr_47100_49012 = state_47052__$1;
(statearr_47100_49012[(2)] = inst_47034);

(statearr_47100_49012[(1)] = (5));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47101[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47101[(1)] = (1));

return statearr_47101;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47052){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47052);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47102){var ex__35549__auto__ = e47102;
var statearr_47103_49013 = state_47052;
(statearr_47103_49013[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47052[(4)]))){
var statearr_47106_49014 = state_47052;
(statearr_47106_49014[(1)] = cljs.core.first((state_47052[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49016 = state_47052;
state_47052 = G__49016;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47110 = f__35760__auto__();
(statearr_47110[(6)] = c__35759__auto___48985);

return statearr_47110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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
var G__47113 = arguments.length;
switch (G__47113) {
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
var c__35759__auto___49020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47160){
var state_val_47161 = (state_47160[(1)]);
if((state_val_47161 === (7))){
var inst_47137 = (state_47160[(7)]);
var inst_47136 = (state_47160[(8)]);
var inst_47136__$1 = (state_47160[(2)]);
var inst_47137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47136__$1,(0),null);
var inst_47138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47136__$1,(1),null);
var inst_47139 = (inst_47137__$1 == null);
var state_47160__$1 = (function (){var statearr_47180 = state_47160;
(statearr_47180[(7)] = inst_47137__$1);

(statearr_47180[(9)] = inst_47138);

(statearr_47180[(8)] = inst_47136__$1);

return statearr_47180;
})();
if(cljs.core.truth_(inst_47139)){
var statearr_47182_49024 = state_47160__$1;
(statearr_47182_49024[(1)] = (8));

} else {
var statearr_47183_49025 = state_47160__$1;
(statearr_47183_49025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (1))){
var inst_47126 = cljs.core.vec(chs);
var inst_47127 = inst_47126;
var state_47160__$1 = (function (){var statearr_47184 = state_47160;
(statearr_47184[(10)] = inst_47127);

return statearr_47184;
})();
var statearr_47186_49026 = state_47160__$1;
(statearr_47186_49026[(2)] = null);

(statearr_47186_49026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (4))){
var inst_47127 = (state_47160[(10)]);
var state_47160__$1 = state_47160;
return cljs.core.async.ioc_alts_BANG_(state_47160__$1,(7),inst_47127);
} else {
if((state_val_47161 === (6))){
var inst_47154 = (state_47160[(2)]);
var state_47160__$1 = state_47160;
var statearr_47188_49028 = state_47160__$1;
(statearr_47188_49028[(2)] = inst_47154);

(statearr_47188_49028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (3))){
var inst_47156 = (state_47160[(2)]);
var state_47160__$1 = state_47160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47160__$1,inst_47156);
} else {
if((state_val_47161 === (2))){
var inst_47127 = (state_47160[(10)]);
var inst_47129 = cljs.core.count(inst_47127);
var inst_47130 = (inst_47129 > (0));
var state_47160__$1 = state_47160;
if(cljs.core.truth_(inst_47130)){
var statearr_47202_49029 = state_47160__$1;
(statearr_47202_49029[(1)] = (4));

} else {
var statearr_47203_49030 = state_47160__$1;
(statearr_47203_49030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (11))){
var inst_47127 = (state_47160[(10)]);
var inst_47146 = (state_47160[(2)]);
var tmp47189 = inst_47127;
var inst_47127__$1 = tmp47189;
var state_47160__$1 = (function (){var statearr_47204 = state_47160;
(statearr_47204[(10)] = inst_47127__$1);

(statearr_47204[(11)] = inst_47146);

return statearr_47204;
})();
var statearr_47205_49033 = state_47160__$1;
(statearr_47205_49033[(2)] = null);

(statearr_47205_49033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (9))){
var inst_47137 = (state_47160[(7)]);
var state_47160__$1 = state_47160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47160__$1,(11),out,inst_47137);
} else {
if((state_val_47161 === (5))){
var inst_47152 = cljs.core.async.close_BANG_(out);
var state_47160__$1 = state_47160;
var statearr_47213_49034 = state_47160__$1;
(statearr_47213_49034[(2)] = inst_47152);

(statearr_47213_49034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (10))){
var inst_47149 = (state_47160[(2)]);
var state_47160__$1 = state_47160;
var statearr_47214_49035 = state_47160__$1;
(statearr_47214_49035[(2)] = inst_47149);

(statearr_47214_49035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47161 === (8))){
var inst_47127 = (state_47160[(10)]);
var inst_47137 = (state_47160[(7)]);
var inst_47138 = (state_47160[(9)]);
var inst_47136 = (state_47160[(8)]);
var inst_47141 = (function (){var cs = inst_47127;
var vec__47132 = inst_47136;
var v = inst_47137;
var c = inst_47138;
return (function (p1__47111_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47111_SHARP_);
});
})();
var inst_47142 = cljs.core.filterv(inst_47141,inst_47127);
var inst_47127__$1 = inst_47142;
var state_47160__$1 = (function (){var statearr_47215 = state_47160;
(statearr_47215[(10)] = inst_47127__$1);

return statearr_47215;
})();
var statearr_47216_49037 = state_47160__$1;
(statearr_47216_49037[(2)] = null);

(statearr_47216_49037[(1)] = (2));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47219[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47219[(1)] = (1));

return statearr_47219;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47160){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47160);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47222){var ex__35549__auto__ = e47222;
var statearr_47223_49040 = state_47160;
(statearr_47223_49040[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47160[(4)]))){
var statearr_47224_49041 = state_47160;
(statearr_47224_49041[(1)] = cljs.core.first((state_47160[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49042 = state_47160;
state_47160 = G__49042;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47225 = f__35760__auto__();
(statearr_47225[(6)] = c__35759__auto___49020);

return statearr_47225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
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
var G__47231 = arguments.length;
switch (G__47231) {
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
var c__35759__auto___49053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47259){
var state_val_47260 = (state_47259[(1)]);
if((state_val_47260 === (7))){
var inst_47238 = (state_47259[(7)]);
var inst_47238__$1 = (state_47259[(2)]);
var inst_47242 = (inst_47238__$1 == null);
var inst_47243 = cljs.core.not(inst_47242);
var state_47259__$1 = (function (){var statearr_47267 = state_47259;
(statearr_47267[(7)] = inst_47238__$1);

return statearr_47267;
})();
if(inst_47243){
var statearr_47268_49056 = state_47259__$1;
(statearr_47268_49056[(1)] = (8));

} else {
var statearr_47269_49057 = state_47259__$1;
(statearr_47269_49057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (1))){
var inst_47232 = (0);
var state_47259__$1 = (function (){var statearr_47270 = state_47259;
(statearr_47270[(8)] = inst_47232);

return statearr_47270;
})();
var statearr_47271_49058 = state_47259__$1;
(statearr_47271_49058[(2)] = null);

(statearr_47271_49058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (4))){
var state_47259__$1 = state_47259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47259__$1,(7),ch);
} else {
if((state_val_47260 === (6))){
var inst_47254 = (state_47259[(2)]);
var state_47259__$1 = state_47259;
var statearr_47272_49060 = state_47259__$1;
(statearr_47272_49060[(2)] = inst_47254);

(statearr_47272_49060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (3))){
var inst_47256 = (state_47259[(2)]);
var inst_47257 = cljs.core.async.close_BANG_(out);
var state_47259__$1 = (function (){var statearr_47273 = state_47259;
(statearr_47273[(9)] = inst_47256);

return statearr_47273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47259__$1,inst_47257);
} else {
if((state_val_47260 === (2))){
var inst_47232 = (state_47259[(8)]);
var inst_47234 = (inst_47232 < n);
var state_47259__$1 = state_47259;
if(cljs.core.truth_(inst_47234)){
var statearr_47275_49062 = state_47259__$1;
(statearr_47275_49062[(1)] = (4));

} else {
var statearr_47276_49063 = state_47259__$1;
(statearr_47276_49063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (11))){
var inst_47232 = (state_47259[(8)]);
var inst_47246 = (state_47259[(2)]);
var inst_47247 = (inst_47232 + (1));
var inst_47232__$1 = inst_47247;
var state_47259__$1 = (function (){var statearr_47277 = state_47259;
(statearr_47277[(10)] = inst_47246);

(statearr_47277[(8)] = inst_47232__$1);

return statearr_47277;
})();
var statearr_47278_49066 = state_47259__$1;
(statearr_47278_49066[(2)] = null);

(statearr_47278_49066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (9))){
var state_47259__$1 = state_47259;
var statearr_47279_49067 = state_47259__$1;
(statearr_47279_49067[(2)] = null);

(statearr_47279_49067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (5))){
var state_47259__$1 = state_47259;
var statearr_47280_49078 = state_47259__$1;
(statearr_47280_49078[(2)] = null);

(statearr_47280_49078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (10))){
var inst_47251 = (state_47259[(2)]);
var state_47259__$1 = state_47259;
var statearr_47281_49079 = state_47259__$1;
(statearr_47281_49079[(2)] = inst_47251);

(statearr_47281_49079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47260 === (8))){
var inst_47238 = (state_47259[(7)]);
var state_47259__$1 = state_47259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47259__$1,(11),out,inst_47238);
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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47283[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47283[(1)] = (1));

return statearr_47283;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47259){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47259);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47285){var ex__35549__auto__ = e47285;
var statearr_47286_49080 = state_47259;
(statearr_47286_49080[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47259[(4)]))){
var statearr_47289_49082 = state_47259;
(statearr_47289_49082[(1)] = cljs.core.first((state_47259[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49083 = state_47259;
state_47259 = G__49083;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47294 = f__35760__auto__();
(statearr_47294[(6)] = c__35759__auto___49053);

return statearr_47294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47296 = (function (f,ch,meta47297){
this.f = f;
this.ch = ch;
this.meta47297 = meta47297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47298,meta47297__$1){
var self__ = this;
var _47298__$1 = this;
return (new cljs.core.async.t_cljs$core$async47296(self__.f,self__.ch,meta47297__$1));
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47298){
var self__ = this;
var _47298__$1 = this;
return self__.meta47297;
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47306 = (function (f,ch,meta47297,_,fn1,meta47307){
this.f = f;
this.ch = ch;
this.meta47297 = meta47297;
this._ = _;
this.fn1 = fn1;
this.meta47307 = meta47307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47308,meta47307__$1){
var self__ = this;
var _47308__$1 = this;
return (new cljs.core.async.t_cljs$core$async47306(self__.f,self__.ch,self__.meta47297,self__._,self__.fn1,meta47307__$1));
}));

(cljs.core.async.t_cljs$core$async47306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47308){
var self__ = this;
var _47308__$1 = this;
return self__.meta47307;
}));

(cljs.core.async.t_cljs$core$async47306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47295_SHARP_){
var G__47318 = (((p1__47295_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47295_SHARP_) : self__.f.call(null,p1__47295_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47318) : f1.call(null,G__47318));
});
}));

(cljs.core.async.t_cljs$core$async47306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47297","meta47297",-1961766147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47296","cljs.core.async/t_cljs$core$async47296",-1443961093,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47307","meta47307",2045143223,null)], null);
}));

(cljs.core.async.t_cljs$core$async47306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47306");

(cljs.core.async.t_cljs$core$async47306.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47306.
 */
cljs.core.async.__GT_t_cljs$core$async47306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47306(f__$1,ch__$1,meta47297__$1,___$2,fn1__$1,meta47307){
return (new cljs.core.async.t_cljs$core$async47306(f__$1,ch__$1,meta47297__$1,___$2,fn1__$1,meta47307));
});

}

return (new cljs.core.async.t_cljs$core$async47306(self__.f,self__.ch,self__.meta47297,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47323 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47323) : self__.f.call(null,G__47323));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47297","meta47297",-1961766147,null)], null);
}));

(cljs.core.async.t_cljs$core$async47296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47296");

(cljs.core.async.t_cljs$core$async47296.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47296.
 */
cljs.core.async.__GT_t_cljs$core$async47296 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47296(f__$1,ch__$1,meta47297){
return (new cljs.core.async.t_cljs$core$async47296(f__$1,ch__$1,meta47297));
});

}

return (new cljs.core.async.t_cljs$core$async47296(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47333 = (function (f,ch,meta47334){
this.f = f;
this.ch = ch;
this.meta47334 = meta47334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47335,meta47334__$1){
var self__ = this;
var _47335__$1 = this;
return (new cljs.core.async.t_cljs$core$async47333(self__.f,self__.ch,meta47334__$1));
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47335){
var self__ = this;
var _47335__$1 = this;
return self__.meta47334;
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47334","meta47334",-916633124,null)], null);
}));

(cljs.core.async.t_cljs$core$async47333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47333");

(cljs.core.async.t_cljs$core$async47333.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47333.
 */
cljs.core.async.__GT_t_cljs$core$async47333 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47333(f__$1,ch__$1,meta47334){
return (new cljs.core.async.t_cljs$core$async47333(f__$1,ch__$1,meta47334));
});

}

return (new cljs.core.async.t_cljs$core$async47333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47350 = (function (p,ch,meta47351){
this.p = p;
this.ch = ch;
this.meta47351 = meta47351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47352,meta47351__$1){
var self__ = this;
var _47352__$1 = this;
return (new cljs.core.async.t_cljs$core$async47350(self__.p,self__.ch,meta47351__$1));
}));

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47352){
var self__ = this;
var _47352__$1 = this;
return self__.meta47351;
}));

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47351","meta47351",-179946639,null)], null);
}));

(cljs.core.async.t_cljs$core$async47350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47350");

(cljs.core.async.t_cljs$core$async47350.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47350.
 */
cljs.core.async.__GT_t_cljs$core$async47350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47350(p__$1,ch__$1,meta47351){
return (new cljs.core.async.t_cljs$core$async47350(p__$1,ch__$1,meta47351));
});

}

return (new cljs.core.async.t_cljs$core$async47350(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47379 = arguments.length;
switch (G__47379) {
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
var c__35759__auto___49115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47401){
var state_val_47402 = (state_47401[(1)]);
if((state_val_47402 === (7))){
var inst_47397 = (state_47401[(2)]);
var state_47401__$1 = state_47401;
var statearr_47407_49116 = state_47401__$1;
(statearr_47407_49116[(2)] = inst_47397);

(statearr_47407_49116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (1))){
var state_47401__$1 = state_47401;
var statearr_47411_49118 = state_47401__$1;
(statearr_47411_49118[(2)] = null);

(statearr_47411_49118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (4))){
var inst_47382 = (state_47401[(7)]);
var inst_47382__$1 = (state_47401[(2)]);
var inst_47384 = (inst_47382__$1 == null);
var state_47401__$1 = (function (){var statearr_47413 = state_47401;
(statearr_47413[(7)] = inst_47382__$1);

return statearr_47413;
})();
if(cljs.core.truth_(inst_47384)){
var statearr_47414_49120 = state_47401__$1;
(statearr_47414_49120[(1)] = (5));

} else {
var statearr_47416_49121 = state_47401__$1;
(statearr_47416_49121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (6))){
var inst_47382 = (state_47401[(7)]);
var inst_47388 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47382) : p.call(null,inst_47382));
var state_47401__$1 = state_47401;
if(cljs.core.truth_(inst_47388)){
var statearr_47417_49122 = state_47401__$1;
(statearr_47417_49122[(1)] = (8));

} else {
var statearr_47418_49123 = state_47401__$1;
(statearr_47418_49123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (3))){
var inst_47399 = (state_47401[(2)]);
var state_47401__$1 = state_47401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47401__$1,inst_47399);
} else {
if((state_val_47402 === (2))){
var state_47401__$1 = state_47401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47401__$1,(4),ch);
} else {
if((state_val_47402 === (11))){
var inst_47391 = (state_47401[(2)]);
var state_47401__$1 = state_47401;
var statearr_47420_49124 = state_47401__$1;
(statearr_47420_49124[(2)] = inst_47391);

(statearr_47420_49124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (9))){
var state_47401__$1 = state_47401;
var statearr_47421_49125 = state_47401__$1;
(statearr_47421_49125[(2)] = null);

(statearr_47421_49125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (5))){
var inst_47386 = cljs.core.async.close_BANG_(out);
var state_47401__$1 = state_47401;
var statearr_47422_49126 = state_47401__$1;
(statearr_47422_49126[(2)] = inst_47386);

(statearr_47422_49126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (10))){
var inst_47394 = (state_47401[(2)]);
var state_47401__$1 = (function (){var statearr_47423 = state_47401;
(statearr_47423[(8)] = inst_47394);

return statearr_47423;
})();
var statearr_47424_49127 = state_47401__$1;
(statearr_47424_49127[(2)] = null);

(statearr_47424_49127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47402 === (8))){
var inst_47382 = (state_47401[(7)]);
var state_47401__$1 = state_47401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47401__$1,(11),out,inst_47382);
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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47426 = [null,null,null,null,null,null,null,null,null];
(statearr_47426[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47426[(1)] = (1));

return statearr_47426;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47401){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47401);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47427){var ex__35549__auto__ = e47427;
var statearr_47428_49130 = state_47401;
(statearr_47428_49130[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47401[(4)]))){
var statearr_47429_49132 = state_47401;
(statearr_47429_49132[(1)] = cljs.core.first((state_47401[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49133 = state_47401;
state_47401 = G__49133;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47430 = f__35760__auto__();
(statearr_47430[(6)] = c__35759__auto___49115);

return statearr_47430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47432 = arguments.length;
switch (G__47432) {
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
var c__35759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47514){
var state_val_47515 = (state_47514[(1)]);
if((state_val_47515 === (7))){
var inst_47510 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
var statearr_47519_49135 = state_47514__$1;
(statearr_47519_49135[(2)] = inst_47510);

(statearr_47519_49135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (20))){
var inst_47478 = (state_47514[(7)]);
var inst_47491 = (state_47514[(2)]);
var inst_47492 = cljs.core.next(inst_47478);
var inst_47459 = inst_47492;
var inst_47460 = null;
var inst_47461 = (0);
var inst_47462 = (0);
var state_47514__$1 = (function (){var statearr_47520 = state_47514;
(statearr_47520[(8)] = inst_47460);

(statearr_47520[(9)] = inst_47459);

(statearr_47520[(10)] = inst_47462);

(statearr_47520[(11)] = inst_47491);

(statearr_47520[(12)] = inst_47461);

return statearr_47520;
})();
var statearr_47521_49136 = state_47514__$1;
(statearr_47521_49136[(2)] = null);

(statearr_47521_49136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (1))){
var state_47514__$1 = state_47514;
var statearr_47522_49137 = state_47514__$1;
(statearr_47522_49137[(2)] = null);

(statearr_47522_49137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (4))){
var inst_47448 = (state_47514[(13)]);
var inst_47448__$1 = (state_47514[(2)]);
var inst_47449 = (inst_47448__$1 == null);
var state_47514__$1 = (function (){var statearr_47524 = state_47514;
(statearr_47524[(13)] = inst_47448__$1);

return statearr_47524;
})();
if(cljs.core.truth_(inst_47449)){
var statearr_47525_49139 = state_47514__$1;
(statearr_47525_49139[(1)] = (5));

} else {
var statearr_47526_49140 = state_47514__$1;
(statearr_47526_49140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (15))){
var state_47514__$1 = state_47514;
var statearr_47530_49141 = state_47514__$1;
(statearr_47530_49141[(2)] = null);

(statearr_47530_49141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (21))){
var state_47514__$1 = state_47514;
var statearr_47531_49143 = state_47514__$1;
(statearr_47531_49143[(2)] = null);

(statearr_47531_49143[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (13))){
var inst_47460 = (state_47514[(8)]);
var inst_47459 = (state_47514[(9)]);
var inst_47462 = (state_47514[(10)]);
var inst_47461 = (state_47514[(12)]);
var inst_47472 = (state_47514[(2)]);
var inst_47473 = (inst_47462 + (1));
var tmp47527 = inst_47460;
var tmp47528 = inst_47459;
var tmp47529 = inst_47461;
var inst_47459__$1 = tmp47528;
var inst_47460__$1 = tmp47527;
var inst_47461__$1 = tmp47529;
var inst_47462__$1 = inst_47473;
var state_47514__$1 = (function (){var statearr_47534 = state_47514;
(statearr_47534[(8)] = inst_47460__$1);

(statearr_47534[(9)] = inst_47459__$1);

(statearr_47534[(10)] = inst_47462__$1);

(statearr_47534[(12)] = inst_47461__$1);

(statearr_47534[(14)] = inst_47472);

return statearr_47534;
})();
var statearr_47536_49144 = state_47514__$1;
(statearr_47536_49144[(2)] = null);

(statearr_47536_49144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (22))){
var state_47514__$1 = state_47514;
var statearr_47537_49145 = state_47514__$1;
(statearr_47537_49145[(2)] = null);

(statearr_47537_49145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (6))){
var inst_47448 = (state_47514[(13)]);
var inst_47457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47448) : f.call(null,inst_47448));
var inst_47458 = cljs.core.seq(inst_47457);
var inst_47459 = inst_47458;
var inst_47460 = null;
var inst_47461 = (0);
var inst_47462 = (0);
var state_47514__$1 = (function (){var statearr_47538 = state_47514;
(statearr_47538[(8)] = inst_47460);

(statearr_47538[(9)] = inst_47459);

(statearr_47538[(10)] = inst_47462);

(statearr_47538[(12)] = inst_47461);

return statearr_47538;
})();
var statearr_47539_49146 = state_47514__$1;
(statearr_47539_49146[(2)] = null);

(statearr_47539_49146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (17))){
var inst_47478 = (state_47514[(7)]);
var inst_47484 = cljs.core.chunk_first(inst_47478);
var inst_47485 = cljs.core.chunk_rest(inst_47478);
var inst_47486 = cljs.core.count(inst_47484);
var inst_47459 = inst_47485;
var inst_47460 = inst_47484;
var inst_47461 = inst_47486;
var inst_47462 = (0);
var state_47514__$1 = (function (){var statearr_47549 = state_47514;
(statearr_47549[(8)] = inst_47460);

(statearr_47549[(9)] = inst_47459);

(statearr_47549[(10)] = inst_47462);

(statearr_47549[(12)] = inst_47461);

return statearr_47549;
})();
var statearr_47550_49151 = state_47514__$1;
(statearr_47550_49151[(2)] = null);

(statearr_47550_49151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (3))){
var inst_47512 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47514__$1,inst_47512);
} else {
if((state_val_47515 === (12))){
var inst_47500 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
var statearr_47556_49152 = state_47514__$1;
(statearr_47556_49152[(2)] = inst_47500);

(statearr_47556_49152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (2))){
var state_47514__$1 = state_47514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47514__$1,(4),in$);
} else {
if((state_val_47515 === (23))){
var inst_47508 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
var statearr_47557_49154 = state_47514__$1;
(statearr_47557_49154[(2)] = inst_47508);

(statearr_47557_49154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (19))){
var inst_47495 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
var statearr_47558_49156 = state_47514__$1;
(statearr_47558_49156[(2)] = inst_47495);

(statearr_47558_49156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (11))){
var inst_47478 = (state_47514[(7)]);
var inst_47459 = (state_47514[(9)]);
var inst_47478__$1 = cljs.core.seq(inst_47459);
var state_47514__$1 = (function (){var statearr_47559 = state_47514;
(statearr_47559[(7)] = inst_47478__$1);

return statearr_47559;
})();
if(inst_47478__$1){
var statearr_47560_49160 = state_47514__$1;
(statearr_47560_49160[(1)] = (14));

} else {
var statearr_47561_49161 = state_47514__$1;
(statearr_47561_49161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (9))){
var inst_47502 = (state_47514[(2)]);
var inst_47503 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47514__$1 = (function (){var statearr_47562 = state_47514;
(statearr_47562[(15)] = inst_47502);

return statearr_47562;
})();
if(cljs.core.truth_(inst_47503)){
var statearr_47563_49162 = state_47514__$1;
(statearr_47563_49162[(1)] = (21));

} else {
var statearr_47564_49163 = state_47514__$1;
(statearr_47564_49163[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (5))){
var inst_47451 = cljs.core.async.close_BANG_(out);
var state_47514__$1 = state_47514;
var statearr_47565_49164 = state_47514__$1;
(statearr_47565_49164[(2)] = inst_47451);

(statearr_47565_49164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (14))){
var inst_47478 = (state_47514[(7)]);
var inst_47482 = cljs.core.chunked_seq_QMARK_(inst_47478);
var state_47514__$1 = state_47514;
if(inst_47482){
var statearr_47567_49167 = state_47514__$1;
(statearr_47567_49167[(1)] = (17));

} else {
var statearr_47568_49168 = state_47514__$1;
(statearr_47568_49168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (16))){
var inst_47498 = (state_47514[(2)]);
var state_47514__$1 = state_47514;
var statearr_47569_49169 = state_47514__$1;
(statearr_47569_49169[(2)] = inst_47498);

(statearr_47569_49169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47515 === (10))){
var inst_47460 = (state_47514[(8)]);
var inst_47462 = (state_47514[(10)]);
var inst_47467 = cljs.core._nth(inst_47460,inst_47462);
var state_47514__$1 = state_47514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47514__$1,(13),out,inst_47467);
} else {
if((state_val_47515 === (18))){
var inst_47478 = (state_47514[(7)]);
var inst_47489 = cljs.core.first(inst_47478);
var state_47514__$1 = state_47514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47514__$1,(20),out,inst_47489);
} else {
if((state_val_47515 === (8))){
var inst_47462 = (state_47514[(10)]);
var inst_47461 = (state_47514[(12)]);
var inst_47464 = (inst_47462 < inst_47461);
var inst_47465 = inst_47464;
var state_47514__$1 = state_47514;
if(cljs.core.truth_(inst_47465)){
var statearr_47570_49176 = state_47514__$1;
(statearr_47570_49176[(1)] = (10));

} else {
var statearr_47571_49177 = state_47514__$1;
(statearr_47571_49177[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35546__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35546__auto____0 = (function (){
var statearr_47572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47572[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35546__auto__);

(statearr_47572[(1)] = (1));

return statearr_47572;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35546__auto____1 = (function (state_47514){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47514);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47573){var ex__35549__auto__ = e47573;
var statearr_47574_49182 = state_47514;
(statearr_47574_49182[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47514[(4)]))){
var statearr_47575_49183 = state_47514;
(statearr_47575_49183[(1)] = cljs.core.first((state_47514[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49188 = state_47514;
state_47514 = G__49188;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35546__auto__ = function(state_47514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35546__auto____1.call(this,state_47514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35546__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35546__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47576 = f__35760__auto__();
(statearr_47576[(6)] = c__35759__auto__);

return statearr_47576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));

return c__35759__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47578 = arguments.length;
switch (G__47578) {
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
var G__47589 = arguments.length;
switch (G__47589) {
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
var G__47609 = arguments.length;
switch (G__47609) {
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
var c__35759__auto___49212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47633){
var state_val_47634 = (state_47633[(1)]);
if((state_val_47634 === (7))){
var inst_47628 = (state_47633[(2)]);
var state_47633__$1 = state_47633;
var statearr_47637_49218 = state_47633__$1;
(statearr_47637_49218[(2)] = inst_47628);

(statearr_47637_49218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (1))){
var inst_47610 = null;
var state_47633__$1 = (function (){var statearr_47639 = state_47633;
(statearr_47639[(7)] = inst_47610);

return statearr_47639;
})();
var statearr_47644_49219 = state_47633__$1;
(statearr_47644_49219[(2)] = null);

(statearr_47644_49219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (4))){
var inst_47613 = (state_47633[(8)]);
var inst_47613__$1 = (state_47633[(2)]);
var inst_47614 = (inst_47613__$1 == null);
var inst_47615 = cljs.core.not(inst_47614);
var state_47633__$1 = (function (){var statearr_47646 = state_47633;
(statearr_47646[(8)] = inst_47613__$1);

return statearr_47646;
})();
if(inst_47615){
var statearr_47651_49221 = state_47633__$1;
(statearr_47651_49221[(1)] = (5));

} else {
var statearr_47652_49222 = state_47633__$1;
(statearr_47652_49222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (6))){
var state_47633__$1 = state_47633;
var statearr_47655_49223 = state_47633__$1;
(statearr_47655_49223[(2)] = null);

(statearr_47655_49223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (3))){
var inst_47630 = (state_47633[(2)]);
var inst_47631 = cljs.core.async.close_BANG_(out);
var state_47633__$1 = (function (){var statearr_47662 = state_47633;
(statearr_47662[(9)] = inst_47630);

return statearr_47662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47633__$1,inst_47631);
} else {
if((state_val_47634 === (2))){
var state_47633__$1 = state_47633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47633__$1,(4),ch);
} else {
if((state_val_47634 === (11))){
var inst_47613 = (state_47633[(8)]);
var inst_47622 = (state_47633[(2)]);
var inst_47610 = inst_47613;
var state_47633__$1 = (function (){var statearr_47663 = state_47633;
(statearr_47663[(10)] = inst_47622);

(statearr_47663[(7)] = inst_47610);

return statearr_47663;
})();
var statearr_47666_49225 = state_47633__$1;
(statearr_47666_49225[(2)] = null);

(statearr_47666_49225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (9))){
var inst_47613 = (state_47633[(8)]);
var state_47633__$1 = state_47633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47633__$1,(11),out,inst_47613);
} else {
if((state_val_47634 === (5))){
var inst_47613 = (state_47633[(8)]);
var inst_47610 = (state_47633[(7)]);
var inst_47617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47613,inst_47610);
var state_47633__$1 = state_47633;
if(inst_47617){
var statearr_47671_49226 = state_47633__$1;
(statearr_47671_49226[(1)] = (8));

} else {
var statearr_47674_49227 = state_47633__$1;
(statearr_47674_49227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (10))){
var inst_47625 = (state_47633[(2)]);
var state_47633__$1 = state_47633;
var statearr_47680_49228 = state_47633__$1;
(statearr_47680_49228[(2)] = inst_47625);

(statearr_47680_49228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47634 === (8))){
var inst_47610 = (state_47633[(7)]);
var tmp47670 = inst_47610;
var inst_47610__$1 = tmp47670;
var state_47633__$1 = (function (){var statearr_47681 = state_47633;
(statearr_47681[(7)] = inst_47610__$1);

return statearr_47681;
})();
var statearr_47682_49229 = state_47633__$1;
(statearr_47682_49229[(2)] = null);

(statearr_47682_49229[(1)] = (2));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47686[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47686[(1)] = (1));

return statearr_47686;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47633){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47633);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47688){var ex__35549__auto__ = e47688;
var statearr_47689_49230 = state_47633;
(statearr_47689_49230[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47633[(4)]))){
var statearr_47693_49231 = state_47633;
(statearr_47693_49231[(1)] = cljs.core.first((state_47633[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49232 = state_47633;
state_47633 = G__49232;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47696 = f__35760__auto__();
(statearr_47696[(6)] = c__35759__auto___49212);

return statearr_47696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47703 = arguments.length;
switch (G__47703) {
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
var c__35759__auto___49235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47752){
var state_val_47753 = (state_47752[(1)]);
if((state_val_47753 === (7))){
var inst_47748 = (state_47752[(2)]);
var state_47752__$1 = state_47752;
var statearr_47754_49236 = state_47752__$1;
(statearr_47754_49236[(2)] = inst_47748);

(statearr_47754_49236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (1))){
var inst_47715 = (new Array(n));
var inst_47716 = inst_47715;
var inst_47717 = (0);
var state_47752__$1 = (function (){var statearr_47755 = state_47752;
(statearr_47755[(7)] = inst_47717);

(statearr_47755[(8)] = inst_47716);

return statearr_47755;
})();
var statearr_47756_49238 = state_47752__$1;
(statearr_47756_49238[(2)] = null);

(statearr_47756_49238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (4))){
var inst_47720 = (state_47752[(9)]);
var inst_47720__$1 = (state_47752[(2)]);
var inst_47721 = (inst_47720__$1 == null);
var inst_47722 = cljs.core.not(inst_47721);
var state_47752__$1 = (function (){var statearr_47762 = state_47752;
(statearr_47762[(9)] = inst_47720__$1);

return statearr_47762;
})();
if(inst_47722){
var statearr_47764_49239 = state_47752__$1;
(statearr_47764_49239[(1)] = (5));

} else {
var statearr_47765_49240 = state_47752__$1;
(statearr_47765_49240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (15))){
var inst_47742 = (state_47752[(2)]);
var state_47752__$1 = state_47752;
var statearr_47766_49241 = state_47752__$1;
(statearr_47766_49241[(2)] = inst_47742);

(statearr_47766_49241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (13))){
var state_47752__$1 = state_47752;
var statearr_47768_49242 = state_47752__$1;
(statearr_47768_49242[(2)] = null);

(statearr_47768_49242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (6))){
var inst_47717 = (state_47752[(7)]);
var inst_47738 = (inst_47717 > (0));
var state_47752__$1 = state_47752;
if(cljs.core.truth_(inst_47738)){
var statearr_47773_49243 = state_47752__$1;
(statearr_47773_49243[(1)] = (12));

} else {
var statearr_47774_49245 = state_47752__$1;
(statearr_47774_49245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (3))){
var inst_47750 = (state_47752[(2)]);
var state_47752__$1 = state_47752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47752__$1,inst_47750);
} else {
if((state_val_47753 === (12))){
var inst_47716 = (state_47752[(8)]);
var inst_47740 = cljs.core.vec(inst_47716);
var state_47752__$1 = state_47752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47752__$1,(15),out,inst_47740);
} else {
if((state_val_47753 === (2))){
var state_47752__$1 = state_47752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47752__$1,(4),ch);
} else {
if((state_val_47753 === (11))){
var inst_47732 = (state_47752[(2)]);
var inst_47733 = (new Array(n));
var inst_47716 = inst_47733;
var inst_47717 = (0);
var state_47752__$1 = (function (){var statearr_47775 = state_47752;
(statearr_47775[(10)] = inst_47732);

(statearr_47775[(7)] = inst_47717);

(statearr_47775[(8)] = inst_47716);

return statearr_47775;
})();
var statearr_47776_49246 = state_47752__$1;
(statearr_47776_49246[(2)] = null);

(statearr_47776_49246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (9))){
var inst_47716 = (state_47752[(8)]);
var inst_47730 = cljs.core.vec(inst_47716);
var state_47752__$1 = state_47752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47752__$1,(11),out,inst_47730);
} else {
if((state_val_47753 === (5))){
var inst_47720 = (state_47752[(9)]);
var inst_47725 = (state_47752[(11)]);
var inst_47717 = (state_47752[(7)]);
var inst_47716 = (state_47752[(8)]);
var inst_47724 = (inst_47716[inst_47717] = inst_47720);
var inst_47725__$1 = (inst_47717 + (1));
var inst_47726 = (inst_47725__$1 < n);
var state_47752__$1 = (function (){var statearr_47782 = state_47752;
(statearr_47782[(12)] = inst_47724);

(statearr_47782[(11)] = inst_47725__$1);

return statearr_47782;
})();
if(cljs.core.truth_(inst_47726)){
var statearr_47785_49252 = state_47752__$1;
(statearr_47785_49252[(1)] = (8));

} else {
var statearr_47787_49253 = state_47752__$1;
(statearr_47787_49253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (14))){
var inst_47745 = (state_47752[(2)]);
var inst_47746 = cljs.core.async.close_BANG_(out);
var state_47752__$1 = (function (){var statearr_47791 = state_47752;
(statearr_47791[(13)] = inst_47745);

return statearr_47791;
})();
var statearr_47792_49256 = state_47752__$1;
(statearr_47792_49256[(2)] = inst_47746);

(statearr_47792_49256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (10))){
var inst_47736 = (state_47752[(2)]);
var state_47752__$1 = state_47752;
var statearr_47793_49259 = state_47752__$1;
(statearr_47793_49259[(2)] = inst_47736);

(statearr_47793_49259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (8))){
var inst_47725 = (state_47752[(11)]);
var inst_47716 = (state_47752[(8)]);
var tmp47790 = inst_47716;
var inst_47716__$1 = tmp47790;
var inst_47717 = inst_47725;
var state_47752__$1 = (function (){var statearr_47794 = state_47752;
(statearr_47794[(7)] = inst_47717);

(statearr_47794[(8)] = inst_47716__$1);

return statearr_47794;
})();
var statearr_47797_49261 = state_47752__$1;
(statearr_47797_49261[(2)] = null);

(statearr_47797_49261[(1)] = (2));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47802[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47802[(1)] = (1));

return statearr_47802;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47752){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47752);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47803){var ex__35549__auto__ = e47803;
var statearr_47804_49265 = state_47752;
(statearr_47804_49265[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47752[(4)]))){
var statearr_47806_49266 = state_47752;
(statearr_47806_49266[(1)] = cljs.core.first((state_47752[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49267 = state_47752;
state_47752 = G__49267;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47807 = f__35760__auto__();
(statearr_47807[(6)] = c__35759__auto___49235);

return statearr_47807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47825 = arguments.length;
switch (G__47825) {
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
var c__35759__auto___49275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35760__auto__ = (function (){var switch__35545__auto__ = (function (state_47875){
var state_val_47878 = (state_47875[(1)]);
if((state_val_47878 === (7))){
var inst_47871 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
var statearr_47886_49278 = state_47875__$1;
(statearr_47886_49278[(2)] = inst_47871);

(statearr_47886_49278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (1))){
var inst_47826 = [];
var inst_47827 = inst_47826;
var inst_47828 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47875__$1 = (function (){var statearr_47888 = state_47875;
(statearr_47888[(7)] = inst_47828);

(statearr_47888[(8)] = inst_47827);

return statearr_47888;
})();
var statearr_47889_49286 = state_47875__$1;
(statearr_47889_49286[(2)] = null);

(statearr_47889_49286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (4))){
var inst_47832 = (state_47875[(9)]);
var inst_47832__$1 = (state_47875[(2)]);
var inst_47834 = (inst_47832__$1 == null);
var inst_47835 = cljs.core.not(inst_47834);
var state_47875__$1 = (function (){var statearr_47890 = state_47875;
(statearr_47890[(9)] = inst_47832__$1);

return statearr_47890;
})();
if(inst_47835){
var statearr_47892_49290 = state_47875__$1;
(statearr_47892_49290[(1)] = (5));

} else {
var statearr_47893_49291 = state_47875__$1;
(statearr_47893_49291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (15))){
var inst_47827 = (state_47875[(8)]);
var inst_47863 = cljs.core.vec(inst_47827);
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47875__$1,(18),out,inst_47863);
} else {
if((state_val_47878 === (13))){
var inst_47858 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
var statearr_47894_49292 = state_47875__$1;
(statearr_47894_49292[(2)] = inst_47858);

(statearr_47894_49292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (6))){
var inst_47827 = (state_47875[(8)]);
var inst_47860 = inst_47827.length;
var inst_47861 = (inst_47860 > (0));
var state_47875__$1 = state_47875;
if(cljs.core.truth_(inst_47861)){
var statearr_47895_49296 = state_47875__$1;
(statearr_47895_49296[(1)] = (15));

} else {
var statearr_47896_49297 = state_47875__$1;
(statearr_47896_49297[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (17))){
var inst_47868 = (state_47875[(2)]);
var inst_47869 = cljs.core.async.close_BANG_(out);
var state_47875__$1 = (function (){var statearr_47898 = state_47875;
(statearr_47898[(10)] = inst_47868);

return statearr_47898;
})();
var statearr_47899_49303 = state_47875__$1;
(statearr_47899_49303[(2)] = inst_47869);

(statearr_47899_49303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (3))){
var inst_47873 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47875__$1,inst_47873);
} else {
if((state_val_47878 === (12))){
var inst_47827 = (state_47875[(8)]);
var inst_47848 = cljs.core.vec(inst_47827);
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47875__$1,(14),out,inst_47848);
} else {
if((state_val_47878 === (2))){
var state_47875__$1 = state_47875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47875__$1,(4),ch);
} else {
if((state_val_47878 === (11))){
var inst_47827 = (state_47875[(8)]);
var inst_47837 = (state_47875[(11)]);
var inst_47832 = (state_47875[(9)]);
var inst_47845 = inst_47827.push(inst_47832);
var tmp47908 = inst_47827;
var inst_47827__$1 = tmp47908;
var inst_47828 = inst_47837;
var state_47875__$1 = (function (){var statearr_47913 = state_47875;
(statearr_47913[(12)] = inst_47845);

(statearr_47913[(7)] = inst_47828);

(statearr_47913[(8)] = inst_47827__$1);

return statearr_47913;
})();
var statearr_47914_49316 = state_47875__$1;
(statearr_47914_49316[(2)] = null);

(statearr_47914_49316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (9))){
var inst_47828 = (state_47875[(7)]);
var inst_47841 = cljs.core.keyword_identical_QMARK_(inst_47828,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47875__$1 = state_47875;
var statearr_47915_49317 = state_47875__$1;
(statearr_47915_49317[(2)] = inst_47841);

(statearr_47915_49317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (5))){
var inst_47828 = (state_47875[(7)]);
var inst_47837 = (state_47875[(11)]);
var inst_47832 = (state_47875[(9)]);
var inst_47838 = (state_47875[(13)]);
var inst_47837__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47832) : f.call(null,inst_47832));
var inst_47838__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47837__$1,inst_47828);
var state_47875__$1 = (function (){var statearr_47918 = state_47875;
(statearr_47918[(11)] = inst_47837__$1);

(statearr_47918[(13)] = inst_47838__$1);

return statearr_47918;
})();
if(inst_47838__$1){
var statearr_47920_49321 = state_47875__$1;
(statearr_47920_49321[(1)] = (8));

} else {
var statearr_47921_49322 = state_47875__$1;
(statearr_47921_49322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (14))){
var inst_47837 = (state_47875[(11)]);
var inst_47832 = (state_47875[(9)]);
var inst_47850 = (state_47875[(2)]);
var inst_47854 = [];
var inst_47855 = inst_47854.push(inst_47832);
var inst_47827 = inst_47854;
var inst_47828 = inst_47837;
var state_47875__$1 = (function (){var statearr_47925 = state_47875;
(statearr_47925[(14)] = inst_47855);

(statearr_47925[(7)] = inst_47828);

(statearr_47925[(15)] = inst_47850);

(statearr_47925[(8)] = inst_47827);

return statearr_47925;
})();
var statearr_47926_49328 = state_47875__$1;
(statearr_47926_49328[(2)] = null);

(statearr_47926_49328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (16))){
var state_47875__$1 = state_47875;
var statearr_47927_49329 = state_47875__$1;
(statearr_47927_49329[(2)] = null);

(statearr_47927_49329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (10))){
var inst_47843 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
if(cljs.core.truth_(inst_47843)){
var statearr_47928_49334 = state_47875__$1;
(statearr_47928_49334[(1)] = (11));

} else {
var statearr_47929_49340 = state_47875__$1;
(statearr_47929_49340[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (18))){
var inst_47865 = (state_47875[(2)]);
var state_47875__$1 = state_47875;
var statearr_47930_49341 = state_47875__$1;
(statearr_47930_49341[(2)] = inst_47865);

(statearr_47930_49341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47878 === (8))){
var inst_47838 = (state_47875[(13)]);
var state_47875__$1 = state_47875;
var statearr_47931_49343 = state_47875__$1;
(statearr_47931_49343[(2)] = inst_47838);

(statearr_47931_49343[(1)] = (10));


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
var cljs$core$async$state_machine__35546__auto__ = null;
var cljs$core$async$state_machine__35546__auto____0 = (function (){
var statearr_47934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47934[(0)] = cljs$core$async$state_machine__35546__auto__);

(statearr_47934[(1)] = (1));

return statearr_47934;
});
var cljs$core$async$state_machine__35546__auto____1 = (function (state_47875){
while(true){
var ret_value__35547__auto__ = (function (){try{while(true){
var result__35548__auto__ = switch__35545__auto__(state_47875);
if(cljs.core.keyword_identical_QMARK_(result__35548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35548__auto__;
}
break;
}
}catch (e47939){var ex__35549__auto__ = e47939;
var statearr_47942_49344 = state_47875;
(statearr_47942_49344[(2)] = ex__35549__auto__);


if(cljs.core.seq((state_47875[(4)]))){
var statearr_47944_49345 = state_47875;
(statearr_47944_49345[(1)] = cljs.core.first((state_47875[(4)])));

} else {
throw ex__35549__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49346 = state_47875;
state_47875 = G__49346;
continue;
} else {
return ret_value__35547__auto__;
}
break;
}
});
cljs$core$async$state_machine__35546__auto__ = function(state_47875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35546__auto____1.call(this,state_47875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35546__auto____0;
cljs$core$async$state_machine__35546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35546__auto____1;
return cljs$core$async$state_machine__35546__auto__;
})()
})();
var state__35761__auto__ = (function (){var statearr_47948 = f__35760__auto__();
(statearr_47948[(6)] = c__35759__auto___49275);

return statearr_47948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35761__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
