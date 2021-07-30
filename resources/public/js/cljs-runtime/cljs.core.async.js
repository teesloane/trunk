goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31796 = arguments.length;
switch (G__31796) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31800 = (function (f,blockable,meta31801){
this.f = f;
this.blockable = blockable;
this.meta31801 = meta31801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31802,meta31801__$1){
var self__ = this;
var _31802__$1 = this;
return (new cljs.core.async.t_cljs$core$async31800(self__.f,self__.blockable,meta31801__$1));
}));

(cljs.core.async.t_cljs$core$async31800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31802){
var self__ = this;
var _31802__$1 = this;
return self__.meta31801;
}));

(cljs.core.async.t_cljs$core$async31800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31801","meta31801",-983357646,null)], null);
}));

(cljs.core.async.t_cljs$core$async31800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31800");

(cljs.core.async.t_cljs$core$async31800.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31800.
 */
cljs.core.async.__GT_t_cljs$core$async31800 = (function cljs$core$async$__GT_t_cljs$core$async31800(f__$1,blockable__$1,meta31801){
return (new cljs.core.async.t_cljs$core$async31800(f__$1,blockable__$1,meta31801));
});

}

return (new cljs.core.async.t_cljs$core$async31800(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31843 = arguments.length;
switch (G__31843) {
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
var G__31865 = arguments.length;
switch (G__31865) {
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
var G__31873 = arguments.length;
switch (G__31873) {
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
var val_35247 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35247) : fn1.call(null,val_35247));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35247) : fn1.call(null,val_35247));
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
var G__31910 = arguments.length;
switch (G__31910) {
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
var n__4695__auto___35254 = n;
var x_35255 = (0);
while(true){
if((x_35255 < n__4695__auto___35254)){
(a[x_35255] = x_35255);

var G__35256 = (x_35255 + (1));
x_35255 = G__35256;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31944 = (function (flag,meta31945){
this.flag = flag;
this.meta31945 = meta31945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31946,meta31945__$1){
var self__ = this;
var _31946__$1 = this;
return (new cljs.core.async.t_cljs$core$async31944(self__.flag,meta31945__$1));
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31946){
var self__ = this;
var _31946__$1 = this;
return self__.meta31945;
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31945","meta31945",1777524873,null)], null);
}));

(cljs.core.async.t_cljs$core$async31944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31944");

(cljs.core.async.t_cljs$core$async31944.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31944.
 */
cljs.core.async.__GT_t_cljs$core$async31944 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31944(flag__$1,meta31945){
return (new cljs.core.async.t_cljs$core$async31944(flag__$1,meta31945));
});

}

return (new cljs.core.async.t_cljs$core$async31944(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31973 = (function (flag,cb,meta31974){
this.flag = flag;
this.cb = cb;
this.meta31974 = meta31974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31975,meta31974__$1){
var self__ = this;
var _31975__$1 = this;
return (new cljs.core.async.t_cljs$core$async31973(self__.flag,self__.cb,meta31974__$1));
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31975){
var self__ = this;
var _31975__$1 = this;
return self__.meta31974;
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31974","meta31974",-1723485237,null)], null);
}));

(cljs.core.async.t_cljs$core$async31973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31973");

(cljs.core.async.t_cljs$core$async31973.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31973.
 */
cljs.core.async.__GT_t_cljs$core$async31973 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31973(flag__$1,cb__$1,meta31974){
return (new cljs.core.async.t_cljs$core$async31973(flag__$1,cb__$1,meta31974));
});

}

return (new cljs.core.async.t_cljs$core$async31973(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31982_SHARP_){
var G__31991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31982_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31991) : fret.call(null,G__31991));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31983_SHARP_){
var G__31992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31983_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31992) : fret.call(null,G__31992));
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
var G__35269 = (i + (1));
i = G__35269;
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
var len__4818__auto___35270 = arguments.length;
var i__4819__auto___35271 = (0);
while(true){
if((i__4819__auto___35271 < len__4818__auto___35270)){
args__4824__auto__.push((arguments[i__4819__auto___35271]));

var G__35272 = (i__4819__auto___35271 + (1));
i__4819__auto___35271 = G__35272;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32003){
var map__32005 = p__32003;
var map__32005__$1 = cljs.core.__destructure_map(map__32005);
var opts = map__32005__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32001){
var G__32002 = cljs.core.first(seq32001);
var seq32001__$1 = cljs.core.next(seq32001);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32002,seq32001__$1);
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
var G__32018 = arguments.length;
switch (G__32018) {
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
var c__31699__auto___35276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32055){
var state_val_32056 = (state_32055[(1)]);
if((state_val_32056 === (7))){
var inst_32051 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32059_35277 = state_32055__$1;
(statearr_32059_35277[(2)] = inst_32051);

(statearr_32059_35277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (1))){
var state_32055__$1 = state_32055;
var statearr_32060_35278 = state_32055__$1;
(statearr_32060_35278[(2)] = null);

(statearr_32060_35278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (4))){
var inst_32028 = (state_32055[(7)]);
var inst_32028__$1 = (state_32055[(2)]);
var inst_32032 = (inst_32028__$1 == null);
var state_32055__$1 = (function (){var statearr_32061 = state_32055;
(statearr_32061[(7)] = inst_32028__$1);

return statearr_32061;
})();
if(cljs.core.truth_(inst_32032)){
var statearr_32062_35280 = state_32055__$1;
(statearr_32062_35280[(1)] = (5));

} else {
var statearr_32063_35281 = state_32055__$1;
(statearr_32063_35281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (13))){
var state_32055__$1 = state_32055;
var statearr_32064_35283 = state_32055__$1;
(statearr_32064_35283[(2)] = null);

(statearr_32064_35283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (6))){
var inst_32028 = (state_32055[(7)]);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32055__$1,(11),to,inst_32028);
} else {
if((state_val_32056 === (3))){
var inst_32053 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32055__$1,inst_32053);
} else {
if((state_val_32056 === (12))){
var state_32055__$1 = state_32055;
var statearr_32071_35284 = state_32055__$1;
(statearr_32071_35284[(2)] = null);

(statearr_32071_35284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (2))){
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32055__$1,(4),from);
} else {
if((state_val_32056 === (11))){
var inst_32042 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
if(cljs.core.truth_(inst_32042)){
var statearr_32079_35285 = state_32055__$1;
(statearr_32079_35285[(1)] = (12));

} else {
var statearr_32080_35286 = state_32055__$1;
(statearr_32080_35286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (9))){
var state_32055__$1 = state_32055;
var statearr_32081_35287 = state_32055__$1;
(statearr_32081_35287[(2)] = null);

(statearr_32081_35287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (5))){
var state_32055__$1 = state_32055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32082_35288 = state_32055__$1;
(statearr_32082_35288[(1)] = (8));

} else {
var statearr_32083_35289 = state_32055__$1;
(statearr_32083_35289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (14))){
var inst_32049 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32085_35290 = state_32055__$1;
(statearr_32085_35290[(2)] = inst_32049);

(statearr_32085_35290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (10))){
var inst_32039 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32089_35292 = state_32055__$1;
(statearr_32089_35292[(2)] = inst_32039);

(statearr_32089_35292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (8))){
var inst_32035 = cljs.core.async.close_BANG_(to);
var state_32055__$1 = state_32055;
var statearr_32090_35294 = state_32055__$1;
(statearr_32090_35294[(2)] = inst_32035);

(statearr_32090_35294[(1)] = (10));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_32094 = [null,null,null,null,null,null,null,null];
(statearr_32094[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_32094[(1)] = (1));

return statearr_32094;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_32055){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32055);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32101){var ex__31482__auto__ = e32101;
var statearr_32105_35295 = state_32055;
(statearr_32105_35295[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32055[(4)]))){
var statearr_32109_35296 = state_32055;
(statearr_32109_35296[(1)] = cljs.core.first((state_32055[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35297 = state_32055;
state_32055 = G__35297;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_32055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_32055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32133 = f__31700__auto__();
(statearr_32133[(6)] = c__31699__auto___35276);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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
var process = (function (p__32147){
var vec__32148 = p__32147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32148,(1),null);
var job = vec__32148;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31699__auto___35299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32155){
var state_val_32156 = (state_32155[(1)]);
if((state_val_32156 === (1))){
var state_32155__$1 = state_32155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32155__$1,(2),res,v);
} else {
if((state_val_32156 === (2))){
var inst_32152 = (state_32155[(2)]);
var inst_32153 = cljs.core.async.close_BANG_(res);
var state_32155__$1 = (function (){var statearr_32158 = state_32155;
(statearr_32158[(7)] = inst_32152);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32155__$1,inst_32153);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0 = (function (){
var statearr_32159 = [null,null,null,null,null,null,null,null];
(statearr_32159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__);

(statearr_32159[(1)] = (1));

return statearr_32159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1 = (function (state_32155){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32155);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32160){var ex__31482__auto__ = e32160;
var statearr_32161_35302 = state_32155;
(statearr_32161_35302[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32155[(4)]))){
var statearr_32162_35303 = state_32155;
(statearr_32162_35303[(1)] = cljs.core.first((state_32155[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35304 = state_32155;
state_32155 = G__35304;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = function(state_32155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1.call(this,state_32155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32163 = f__31700__auto__();
(statearr_32163[(6)] = c__31699__auto___35299);

return statearr_32163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32164){
var vec__32166 = p__32164;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32166,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32166,(1),null);
var job = vec__32166;
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
var n__4695__auto___35305 = n;
var __35306 = (0);
while(true){
if((__35306 < n__4695__auto___35305)){
var G__32173_35307 = type;
var G__32173_35308__$1 = (((G__32173_35307 instanceof cljs.core.Keyword))?G__32173_35307.fqn:null);
switch (G__32173_35308__$1) {
case "compute":
var c__31699__auto___35310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35306,c__31699__auto___35310,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async){
return (function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = ((function (__35306,c__31699__auto___35310,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async){
return (function (state_32188){
var state_val_32189 = (state_32188[(1)]);
if((state_val_32189 === (1))){
var state_32188__$1 = state_32188;
var statearr_32192_35311 = state_32188__$1;
(statearr_32192_35311[(2)] = null);

(statearr_32192_35311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (2))){
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32188__$1,(4),jobs);
} else {
if((state_val_32189 === (3))){
var inst_32186 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32188__$1,inst_32186);
} else {
if((state_val_32189 === (4))){
var inst_32177 = (state_32188[(2)]);
var inst_32179 = process(inst_32177);
var state_32188__$1 = state_32188;
if(cljs.core.truth_(inst_32179)){
var statearr_32196_35313 = state_32188__$1;
(statearr_32196_35313[(1)] = (5));

} else {
var statearr_32197_35314 = state_32188__$1;
(statearr_32197_35314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (5))){
var state_32188__$1 = state_32188;
var statearr_32198_35316 = state_32188__$1;
(statearr_32198_35316[(2)] = null);

(statearr_32198_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (6))){
var state_32188__$1 = state_32188;
var statearr_32199_35317 = state_32188__$1;
(statearr_32199_35317[(2)] = null);

(statearr_32199_35317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (7))){
var inst_32184 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32203_35318 = state_32188__$1;
(statearr_32203_35318[(2)] = inst_32184);

(statearr_32203_35318[(1)] = (3));


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
});})(__35306,c__31699__auto___35310,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async))
;
return ((function (__35306,switch__31478__auto__,c__31699__auto___35310,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null];
(statearr_32204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1 = (function (state_32188){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32188);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32205){var ex__31482__auto__ = e32205;
var statearr_32206_35319 = state_32188;
(statearr_32206_35319[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32188[(4)]))){
var statearr_32207_35320 = state_32188;
(statearr_32207_35320[(1)] = cljs.core.first((state_32188[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35321 = state_32188;
state_32188 = G__35321;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = function(state_32188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1.call(this,state_32188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__;
})()
;})(__35306,switch__31478__auto__,c__31699__auto___35310,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async))
})();
var state__31701__auto__ = (function (){var statearr_32217 = f__31700__auto__();
(statearr_32217[(6)] = c__31699__auto___35310);

return statearr_32217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
});})(__35306,c__31699__auto___35310,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async))
);


break;
case "async":
var c__31699__auto___35322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35306,c__31699__auto___35322,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async){
return (function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = ((function (__35306,c__31699__auto___35322,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async){
return (function (state_32236){
var state_val_32237 = (state_32236[(1)]);
if((state_val_32237 === (1))){
var state_32236__$1 = state_32236;
var statearr_32239_35323 = state_32236__$1;
(statearr_32239_35323[(2)] = null);

(statearr_32239_35323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (2))){
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32236__$1,(4),jobs);
} else {
if((state_val_32237 === (3))){
var inst_32232 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32236__$1,inst_32232);
} else {
if((state_val_32237 === (4))){
var inst_32224 = (state_32236[(2)]);
var inst_32225 = async(inst_32224);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32225)){
var statearr_32242_35325 = state_32236__$1;
(statearr_32242_35325[(1)] = (5));

} else {
var statearr_32243_35326 = state_32236__$1;
(statearr_32243_35326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (5))){
var state_32236__$1 = state_32236;
var statearr_32244_35327 = state_32236__$1;
(statearr_32244_35327[(2)] = null);

(statearr_32244_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (6))){
var state_32236__$1 = state_32236;
var statearr_32245_35328 = state_32236__$1;
(statearr_32245_35328[(2)] = null);

(statearr_32245_35328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (7))){
var inst_32230 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32248_35329 = state_32236__$1;
(statearr_32248_35329[(2)] = inst_32230);

(statearr_32248_35329[(1)] = (3));


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
});})(__35306,c__31699__auto___35322,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async))
;
return ((function (__35306,switch__31478__auto__,c__31699__auto___35322,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0 = (function (){
var statearr_32251 = [null,null,null,null,null,null,null];
(statearr_32251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__);

(statearr_32251[(1)] = (1));

return statearr_32251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1 = (function (state_32236){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32236);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32252){var ex__31482__auto__ = e32252;
var statearr_32253_35330 = state_32236;
(statearr_32253_35330[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32236[(4)]))){
var statearr_32254_35331 = state_32236;
(statearr_32254_35331[(1)] = cljs.core.first((state_32236[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35332 = state_32236;
state_32236 = G__35332;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = function(state_32236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1.call(this,state_32236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__;
})()
;})(__35306,switch__31478__auto__,c__31699__auto___35322,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async))
})();
var state__31701__auto__ = (function (){var statearr_32255 = f__31700__auto__();
(statearr_32255[(6)] = c__31699__auto___35322);

return statearr_32255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
});})(__35306,c__31699__auto___35322,G__32173_35307,G__32173_35308__$1,n__4695__auto___35305,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32173_35308__$1)].join('')));

}

var G__35337 = (__35306 + (1));
__35306 = G__35337;
continue;
} else {
}
break;
}

var c__31699__auto___35338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32288){
var state_val_32293 = (state_32288[(1)]);
if((state_val_32293 === (7))){
var inst_32283 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32318_35339 = state_32288__$1;
(statearr_32318_35339[(2)] = inst_32283);

(statearr_32318_35339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (1))){
var state_32288__$1 = state_32288;
var statearr_32320_35340 = state_32288__$1;
(statearr_32320_35340[(2)] = null);

(statearr_32320_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (4))){
var inst_32261 = (state_32288[(7)]);
var inst_32261__$1 = (state_32288[(2)]);
var inst_32262 = (inst_32261__$1 == null);
var state_32288__$1 = (function (){var statearr_32324 = state_32288;
(statearr_32324[(7)] = inst_32261__$1);

return statearr_32324;
})();
if(cljs.core.truth_(inst_32262)){
var statearr_32325_35341 = state_32288__$1;
(statearr_32325_35341[(1)] = (5));

} else {
var statearr_32326_35342 = state_32288__$1;
(statearr_32326_35342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (6))){
var inst_32266 = (state_32288[(8)]);
var inst_32261 = (state_32288[(7)]);
var inst_32266__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32270 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32275 = [inst_32261,inst_32266__$1];
var inst_32276 = (new cljs.core.PersistentVector(null,2,(5),inst_32270,inst_32275,null));
var state_32288__$1 = (function (){var statearr_32327 = state_32288;
(statearr_32327[(8)] = inst_32266__$1);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(8),jobs,inst_32276);
} else {
if((state_val_32293 === (3))){
var inst_32286 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32288__$1,inst_32286);
} else {
if((state_val_32293 === (2))){
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32288__$1,(4),from);
} else {
if((state_val_32293 === (9))){
var inst_32280 = (state_32288[(2)]);
var state_32288__$1 = (function (){var statearr_32331 = state_32288;
(statearr_32331[(9)] = inst_32280);

return statearr_32331;
})();
var statearr_32332_35343 = state_32288__$1;
(statearr_32332_35343[(2)] = null);

(statearr_32332_35343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (5))){
var inst_32264 = cljs.core.async.close_BANG_(jobs);
var state_32288__$1 = state_32288;
var statearr_32335_35344 = state_32288__$1;
(statearr_32335_35344[(2)] = inst_32264);

(statearr_32335_35344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (8))){
var inst_32266 = (state_32288[(8)]);
var inst_32278 = (state_32288[(2)]);
var state_32288__$1 = (function (){var statearr_32338 = state_32288;
(statearr_32338[(10)] = inst_32278);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(9),results,inst_32266);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1 = (function (state_32288){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32288);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32340){var ex__31482__auto__ = e32340;
var statearr_32341_35347 = state_32288;
(statearr_32341_35347[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32288[(4)]))){
var statearr_32342_35348 = state_32288;
(statearr_32342_35348[(1)] = cljs.core.first((state_32288[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35349 = state_32288;
state_32288 = G__35349;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = function(state_32288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1.call(this,state_32288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32346 = f__31700__auto__();
(statearr_32346[(6)] = c__31699__auto___35338);

return statearr_32346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


var c__31699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32394){
var state_val_32395 = (state_32394[(1)]);
if((state_val_32395 === (7))){
var inst_32386 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
var statearr_32407_35350 = state_32394__$1;
(statearr_32407_35350[(2)] = inst_32386);

(statearr_32407_35350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (20))){
var state_32394__$1 = state_32394;
var statearr_32412_35351 = state_32394__$1;
(statearr_32412_35351[(2)] = null);

(statearr_32412_35351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (1))){
var state_32394__$1 = state_32394;
var statearr_32415_35352 = state_32394__$1;
(statearr_32415_35352[(2)] = null);

(statearr_32415_35352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (4))){
var inst_32351 = (state_32394[(7)]);
var inst_32351__$1 = (state_32394[(2)]);
var inst_32352 = (inst_32351__$1 == null);
var state_32394__$1 = (function (){var statearr_32417 = state_32394;
(statearr_32417[(7)] = inst_32351__$1);

return statearr_32417;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32418_35355 = state_32394__$1;
(statearr_32418_35355[(1)] = (5));

} else {
var statearr_32419_35356 = state_32394__$1;
(statearr_32419_35356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (15))){
var inst_32364 = (state_32394[(8)]);
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32394__$1,(18),to,inst_32364);
} else {
if((state_val_32395 === (21))){
var inst_32381 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
var statearr_32420_35357 = state_32394__$1;
(statearr_32420_35357[(2)] = inst_32381);

(statearr_32420_35357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (13))){
var inst_32383 = (state_32394[(2)]);
var state_32394__$1 = (function (){var statearr_32421 = state_32394;
(statearr_32421[(9)] = inst_32383);

return statearr_32421;
})();
var statearr_32422_35362 = state_32394__$1;
(statearr_32422_35362[(2)] = null);

(statearr_32422_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (6))){
var inst_32351 = (state_32394[(7)]);
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32394__$1,(11),inst_32351);
} else {
if((state_val_32395 === (17))){
var inst_32373 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
if(cljs.core.truth_(inst_32373)){
var statearr_32425_35365 = state_32394__$1;
(statearr_32425_35365[(1)] = (19));

} else {
var statearr_32426_35366 = state_32394__$1;
(statearr_32426_35366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (3))){
var inst_32388 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32394__$1,inst_32388);
} else {
if((state_val_32395 === (12))){
var inst_32361 = (state_32394[(10)]);
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32394__$1,(14),inst_32361);
} else {
if((state_val_32395 === (2))){
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32394__$1,(4),results);
} else {
if((state_val_32395 === (19))){
var state_32394__$1 = state_32394;
var statearr_32432_35369 = state_32394__$1;
(statearr_32432_35369[(2)] = null);

(statearr_32432_35369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (11))){
var inst_32361 = (state_32394[(2)]);
var state_32394__$1 = (function (){var statearr_32433 = state_32394;
(statearr_32433[(10)] = inst_32361);

return statearr_32433;
})();
var statearr_32434_35370 = state_32394__$1;
(statearr_32434_35370[(2)] = null);

(statearr_32434_35370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (9))){
var state_32394__$1 = state_32394;
var statearr_32437_35371 = state_32394__$1;
(statearr_32437_35371[(2)] = null);

(statearr_32437_35371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (5))){
var state_32394__$1 = state_32394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32438_35376 = state_32394__$1;
(statearr_32438_35376[(1)] = (8));

} else {
var statearr_32439_35377 = state_32394__$1;
(statearr_32439_35377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (14))){
var inst_32364 = (state_32394[(8)]);
var inst_32366 = (state_32394[(11)]);
var inst_32364__$1 = (state_32394[(2)]);
var inst_32365 = (inst_32364__$1 == null);
var inst_32366__$1 = cljs.core.not(inst_32365);
var state_32394__$1 = (function (){var statearr_32442 = state_32394;
(statearr_32442[(8)] = inst_32364__$1);

(statearr_32442[(11)] = inst_32366__$1);

return statearr_32442;
})();
if(inst_32366__$1){
var statearr_32443_35385 = state_32394__$1;
(statearr_32443_35385[(1)] = (15));

} else {
var statearr_32444_35386 = state_32394__$1;
(statearr_32444_35386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (16))){
var inst_32366 = (state_32394[(11)]);
var state_32394__$1 = state_32394;
var statearr_32447_35389 = state_32394__$1;
(statearr_32447_35389[(2)] = inst_32366);

(statearr_32447_35389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (10))){
var inst_32358 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
var statearr_32448_35390 = state_32394__$1;
(statearr_32448_35390[(2)] = inst_32358);

(statearr_32448_35390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (18))){
var inst_32370 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
var statearr_32451_35393 = state_32394__$1;
(statearr_32451_35393[(2)] = inst_32370);

(statearr_32451_35393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (8))){
var inst_32355 = cljs.core.async.close_BANG_(to);
var state_32394__$1 = state_32394;
var statearr_32455_35398 = state_32394__$1;
(statearr_32455_35398[(2)] = inst_32355);

(statearr_32455_35398[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1 = (function (state_32394){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32394);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32458){var ex__31482__auto__ = e32458;
var statearr_32459_35404 = state_32394;
(statearr_32459_35404[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32394[(4)]))){
var statearr_32460_35405 = state_32394;
(statearr_32460_35405[(1)] = cljs.core.first((state_32394[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35406 = state_32394;
state_32394 = G__35406;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__ = function(state_32394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1.call(this,state_32394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32467 = f__31700__auto__();
(statearr_32467[(6)] = c__31699__auto__);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));

return c__31699__auto__;
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
var G__32469 = arguments.length;
switch (G__32469) {
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
var G__32474 = arguments.length;
switch (G__32474) {
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
var G__32498 = arguments.length;
switch (G__32498) {
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
var c__31699__auto___35438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32544){
var state_val_32545 = (state_32544[(1)]);
if((state_val_32545 === (7))){
var inst_32538 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
var statearr_32558_35439 = state_32544__$1;
(statearr_32558_35439[(2)] = inst_32538);

(statearr_32558_35439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (1))){
var state_32544__$1 = state_32544;
var statearr_32559_35447 = state_32544__$1;
(statearr_32559_35447[(2)] = null);

(statearr_32559_35447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (4))){
var inst_32515 = (state_32544[(7)]);
var inst_32515__$1 = (state_32544[(2)]);
var inst_32516 = (inst_32515__$1 == null);
var state_32544__$1 = (function (){var statearr_32567 = state_32544;
(statearr_32567[(7)] = inst_32515__$1);

return statearr_32567;
})();
if(cljs.core.truth_(inst_32516)){
var statearr_32568_35448 = state_32544__$1;
(statearr_32568_35448[(1)] = (5));

} else {
var statearr_32569_35449 = state_32544__$1;
(statearr_32569_35449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (13))){
var state_32544__$1 = state_32544;
var statearr_32570_35450 = state_32544__$1;
(statearr_32570_35450[(2)] = null);

(statearr_32570_35450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (6))){
var inst_32515 = (state_32544[(7)]);
var inst_32523 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32515) : p.call(null,inst_32515));
var state_32544__$1 = state_32544;
if(cljs.core.truth_(inst_32523)){
var statearr_32571_35451 = state_32544__$1;
(statearr_32571_35451[(1)] = (9));

} else {
var statearr_32572_35455 = state_32544__$1;
(statearr_32572_35455[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (3))){
var inst_32540 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32544__$1,inst_32540);
} else {
if((state_val_32545 === (12))){
var state_32544__$1 = state_32544;
var statearr_32573_35459 = state_32544__$1;
(statearr_32573_35459[(2)] = null);

(statearr_32573_35459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (2))){
var state_32544__$1 = state_32544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32544__$1,(4),ch);
} else {
if((state_val_32545 === (11))){
var inst_32515 = (state_32544[(7)]);
var inst_32529 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32544__$1,(8),inst_32529,inst_32515);
} else {
if((state_val_32545 === (9))){
var state_32544__$1 = state_32544;
var statearr_32574_35460 = state_32544__$1;
(statearr_32574_35460[(2)] = tc);

(statearr_32574_35460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (5))){
var inst_32518 = cljs.core.async.close_BANG_(tc);
var inst_32520 = cljs.core.async.close_BANG_(fc);
var state_32544__$1 = (function (){var statearr_32585 = state_32544;
(statearr_32585[(8)] = inst_32518);

return statearr_32585;
})();
var statearr_32586_35461 = state_32544__$1;
(statearr_32586_35461[(2)] = inst_32520);

(statearr_32586_35461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (14))){
var inst_32536 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
var statearr_32587_35462 = state_32544__$1;
(statearr_32587_35462[(2)] = inst_32536);

(statearr_32587_35462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (10))){
var state_32544__$1 = state_32544;
var statearr_32588_35464 = state_32544__$1;
(statearr_32588_35464[(2)] = fc);

(statearr_32588_35464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (8))){
var inst_32531 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
if(cljs.core.truth_(inst_32531)){
var statearr_32589_35465 = state_32544__$1;
(statearr_32589_35465[(1)] = (12));

} else {
var statearr_32593_35466 = state_32544__$1;
(statearr_32593_35466[(1)] = (13));

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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_32544){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32544);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32595){var ex__31482__auto__ = e32595;
var statearr_32596_35472 = state_32544;
(statearr_32596_35472[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32544[(4)]))){
var statearr_32597_35474 = state_32544;
(statearr_32597_35474[(1)] = cljs.core.first((state_32544[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35477 = state_32544;
state_32544 = G__35477;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_32544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_32544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32598 = f__31700__auto__();
(statearr_32598[(6)] = c__31699__auto___35438);

return statearr_32598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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
var c__31699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32626){
var state_val_32627 = (state_32626[(1)]);
if((state_val_32627 === (7))){
var inst_32621 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32637_35485 = state_32626__$1;
(statearr_32637_35485[(2)] = inst_32621);

(statearr_32637_35485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (1))){
var inst_32603 = init;
var inst_32604 = inst_32603;
var state_32626__$1 = (function (){var statearr_32638 = state_32626;
(statearr_32638[(7)] = inst_32604);

return statearr_32638;
})();
var statearr_32639_35490 = state_32626__$1;
(statearr_32639_35490[(2)] = null);

(statearr_32639_35490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (4))){
var inst_32607 = (state_32626[(8)]);
var inst_32607__$1 = (state_32626[(2)]);
var inst_32609 = (inst_32607__$1 == null);
var state_32626__$1 = (function (){var statearr_32640 = state_32626;
(statearr_32640[(8)] = inst_32607__$1);

return statearr_32640;
})();
if(cljs.core.truth_(inst_32609)){
var statearr_32641_35495 = state_32626__$1;
(statearr_32641_35495[(1)] = (5));

} else {
var statearr_32642_35496 = state_32626__$1;
(statearr_32642_35496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (6))){
var inst_32604 = (state_32626[(7)]);
var inst_32607 = (state_32626[(8)]);
var inst_32612 = (state_32626[(9)]);
var inst_32612__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32604,inst_32607) : f.call(null,inst_32604,inst_32607));
var inst_32613 = cljs.core.reduced_QMARK_(inst_32612__$1);
var state_32626__$1 = (function (){var statearr_32643 = state_32626;
(statearr_32643[(9)] = inst_32612__$1);

return statearr_32643;
})();
if(inst_32613){
var statearr_32644_35500 = state_32626__$1;
(statearr_32644_35500[(1)] = (8));

} else {
var statearr_32645_35501 = state_32626__$1;
(statearr_32645_35501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (3))){
var inst_32623 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32626__$1,inst_32623);
} else {
if((state_val_32627 === (2))){
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32626__$1,(4),ch);
} else {
if((state_val_32627 === (9))){
var inst_32612 = (state_32626[(9)]);
var inst_32604 = inst_32612;
var state_32626__$1 = (function (){var statearr_32647 = state_32626;
(statearr_32647[(7)] = inst_32604);

return statearr_32647;
})();
var statearr_32648_35505 = state_32626__$1;
(statearr_32648_35505[(2)] = null);

(statearr_32648_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (5))){
var inst_32604 = (state_32626[(7)]);
var state_32626__$1 = state_32626;
var statearr_32649_35507 = state_32626__$1;
(statearr_32649_35507[(2)] = inst_32604);

(statearr_32649_35507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (10))){
var inst_32619 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32650_35510 = state_32626__$1;
(statearr_32650_35510[(2)] = inst_32619);

(statearr_32650_35510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (8))){
var inst_32612 = (state_32626[(9)]);
var inst_32615 = cljs.core.deref(inst_32612);
var state_32626__$1 = state_32626;
var statearr_32651_35512 = state_32626__$1;
(statearr_32651_35512[(2)] = inst_32615);

(statearr_32651_35512[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31479__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$reduce_$_state_machine__31479__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$reduce_$_state_machine__31479__auto____1 = (function (state_32626){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32626);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32654){var ex__31482__auto__ = e32654;
var statearr_32655_35515 = state_32626;
(statearr_32655_35515[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32626[(4)]))){
var statearr_32657_35517 = state_32626;
(statearr_32657_35517[(1)] = cljs.core.first((state_32626[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35520 = state_32626;
state_32626 = G__35520;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31479__auto__ = function(state_32626){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31479__auto____1.call(this,state_32626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31479__auto____0;
cljs$core$async$reduce_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31479__auto____1;
return cljs$core$async$reduce_$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32659 = f__31700__auto__();
(statearr_32659[(6)] = c__31699__auto__);

return statearr_32659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));

return c__31699__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32671){
var state_val_32672 = (state_32671[(1)]);
if((state_val_32672 === (1))){
var inst_32666 = cljs.core.async.reduce(f__$1,init,ch);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32671__$1,(2),inst_32666);
} else {
if((state_val_32672 === (2))){
var inst_32668 = (state_32671[(2)]);
var inst_32669 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32668) : f__$1.call(null,inst_32668));
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32671__$1,inst_32669);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31479__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31479__auto____0 = (function (){
var statearr_32674 = [null,null,null,null,null,null,null];
(statearr_32674[(0)] = cljs$core$async$transduce_$_state_machine__31479__auto__);

(statearr_32674[(1)] = (1));

return statearr_32674;
});
var cljs$core$async$transduce_$_state_machine__31479__auto____1 = (function (state_32671){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32671);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32675){var ex__31482__auto__ = e32675;
var statearr_32676_35527 = state_32671;
(statearr_32676_35527[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32671[(4)]))){
var statearr_32677_35528 = state_32671;
(statearr_32677_35528[(1)] = cljs.core.first((state_32671[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35533 = state_32671;
state_32671 = G__35533;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31479__auto__ = function(state_32671){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31479__auto____1.call(this,state_32671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31479__auto____0;
cljs$core$async$transduce_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31479__auto____1;
return cljs$core$async$transduce_$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32679 = f__31700__auto__();
(statearr_32679[(6)] = c__31699__auto__);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));

return c__31699__auto__;
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
var G__32688 = arguments.length;
switch (G__32688) {
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
var c__31699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32716){
var state_val_32717 = (state_32716[(1)]);
if((state_val_32717 === (7))){
var inst_32698 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
var statearr_32725_35539 = state_32716__$1;
(statearr_32725_35539[(2)] = inst_32698);

(statearr_32725_35539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (1))){
var inst_32692 = cljs.core.seq(coll);
var inst_32693 = inst_32692;
var state_32716__$1 = (function (){var statearr_32726 = state_32716;
(statearr_32726[(7)] = inst_32693);

return statearr_32726;
})();
var statearr_32730_35541 = state_32716__$1;
(statearr_32730_35541[(2)] = null);

(statearr_32730_35541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (4))){
var inst_32693 = (state_32716[(7)]);
var inst_32696 = cljs.core.first(inst_32693);
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32716__$1,(7),ch,inst_32696);
} else {
if((state_val_32717 === (13))){
var inst_32710 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
var statearr_32733_35546 = state_32716__$1;
(statearr_32733_35546[(2)] = inst_32710);

(statearr_32733_35546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (6))){
var inst_32701 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
if(cljs.core.truth_(inst_32701)){
var statearr_32734_35547 = state_32716__$1;
(statearr_32734_35547[(1)] = (8));

} else {
var statearr_32735_35548 = state_32716__$1;
(statearr_32735_35548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (3))){
var inst_32714 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32716__$1,inst_32714);
} else {
if((state_val_32717 === (12))){
var state_32716__$1 = state_32716;
var statearr_32738_35553 = state_32716__$1;
(statearr_32738_35553[(2)] = null);

(statearr_32738_35553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (2))){
var inst_32693 = (state_32716[(7)]);
var state_32716__$1 = state_32716;
if(cljs.core.truth_(inst_32693)){
var statearr_32739_35557 = state_32716__$1;
(statearr_32739_35557[(1)] = (4));

} else {
var statearr_32740_35558 = state_32716__$1;
(statearr_32740_35558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (11))){
var inst_32707 = cljs.core.async.close_BANG_(ch);
var state_32716__$1 = state_32716;
var statearr_32741_35562 = state_32716__$1;
(statearr_32741_35562[(2)] = inst_32707);

(statearr_32741_35562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (9))){
var state_32716__$1 = state_32716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32746_35563 = state_32716__$1;
(statearr_32746_35563[(1)] = (11));

} else {
var statearr_32748_35564 = state_32716__$1;
(statearr_32748_35564[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (5))){
var inst_32693 = (state_32716[(7)]);
var state_32716__$1 = state_32716;
var statearr_32753_35566 = state_32716__$1;
(statearr_32753_35566[(2)] = inst_32693);

(statearr_32753_35566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (10))){
var inst_32712 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
var statearr_32758_35569 = state_32716__$1;
(statearr_32758_35569[(2)] = inst_32712);

(statearr_32758_35569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (8))){
var inst_32693 = (state_32716[(7)]);
var inst_32703 = cljs.core.next(inst_32693);
var inst_32693__$1 = inst_32703;
var state_32716__$1 = (function (){var statearr_32763 = state_32716;
(statearr_32763[(7)] = inst_32693__$1);

return statearr_32763;
})();
var statearr_32764_35574 = state_32716__$1;
(statearr_32764_35574[(2)] = null);

(statearr_32764_35574[(1)] = (2));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_32767 = [null,null,null,null,null,null,null,null];
(statearr_32767[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_32767[(1)] = (1));

return statearr_32767;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_32716){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32716);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e32770){var ex__31482__auto__ = e32770;
var statearr_32771_35581 = state_32716;
(statearr_32771_35581[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32716[(4)]))){
var statearr_32772_35583 = state_32716;
(statearr_32772_35583[(1)] = cljs.core.first((state_32716[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35588 = state_32716;
state_32716 = G__35588;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_32716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_32716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_32773 = f__31700__auto__();
(statearr_32773[(6)] = c__31699__auto__);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));

return c__31699__auto__;
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
var G__32794 = arguments.length;
switch (G__32794) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35603 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35603(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35614 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35614(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35620 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35620(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35631 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35631(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32839 = (function (ch,cs,meta32840){
this.ch = ch;
this.cs = cs;
this.meta32840 = meta32840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32841,meta32840__$1){
var self__ = this;
var _32841__$1 = this;
return (new cljs.core.async.t_cljs$core$async32839(self__.ch,self__.cs,meta32840__$1));
}));

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32841){
var self__ = this;
var _32841__$1 = this;
return self__.meta32840;
}));

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32839.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32840","meta32840",-925935743,null)], null);
}));

(cljs.core.async.t_cljs$core$async32839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32839");

(cljs.core.async.t_cljs$core$async32839.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32839.
 */
cljs.core.async.__GT_t_cljs$core$async32839 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32839(ch__$1,cs__$1,meta32840){
return (new cljs.core.async.t_cljs$core$async32839(ch__$1,cs__$1,meta32840));
});

}

return (new cljs.core.async.t_cljs$core$async32839(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31699__auto___35648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_32993){
var state_val_32994 = (state_32993[(1)]);
if((state_val_32994 === (7))){
var inst_32986 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33004_35651 = state_32993__$1;
(statearr_33004_35651[(2)] = inst_32986);

(statearr_33004_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (20))){
var inst_32887 = (state_32993[(7)]);
var inst_32903 = cljs.core.first(inst_32887);
var inst_32904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32903,(0),null);
var inst_32905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32903,(1),null);
var state_32993__$1 = (function (){var statearr_33009 = state_32993;
(statearr_33009[(8)] = inst_32904);

return statearr_33009;
})();
if(cljs.core.truth_(inst_32905)){
var statearr_33010_35653 = state_32993__$1;
(statearr_33010_35653[(1)] = (22));

} else {
var statearr_33011_35654 = state_32993__$1;
(statearr_33011_35654[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (27))){
var inst_32850 = (state_32993[(9)]);
var inst_32935 = (state_32993[(10)]);
var inst_32933 = (state_32993[(11)]);
var inst_32940 = (state_32993[(12)]);
var inst_32940__$1 = cljs.core._nth(inst_32933,inst_32935);
var inst_32941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32940__$1,inst_32850,done);
var state_32993__$1 = (function (){var statearr_33012 = state_32993;
(statearr_33012[(12)] = inst_32940__$1);

return statearr_33012;
})();
if(cljs.core.truth_(inst_32941)){
var statearr_33013_35657 = state_32993__$1;
(statearr_33013_35657[(1)] = (30));

} else {
var statearr_33014_35658 = state_32993__$1;
(statearr_33014_35658[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (1))){
var state_32993__$1 = state_32993;
var statearr_33015_35659 = state_32993__$1;
(statearr_33015_35659[(2)] = null);

(statearr_33015_35659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (24))){
var inst_32887 = (state_32993[(7)]);
var inst_32910 = (state_32993[(2)]);
var inst_32911 = cljs.core.next(inst_32887);
var inst_32859 = inst_32911;
var inst_32860 = null;
var inst_32861 = (0);
var inst_32862 = (0);
var state_32993__$1 = (function (){var statearr_33016 = state_32993;
(statearr_33016[(13)] = inst_32859);

(statearr_33016[(14)] = inst_32861);

(statearr_33016[(15)] = inst_32860);

(statearr_33016[(16)] = inst_32910);

(statearr_33016[(17)] = inst_32862);

return statearr_33016;
})();
var statearr_33017_35670 = state_32993__$1;
(statearr_33017_35670[(2)] = null);

(statearr_33017_35670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (39))){
var state_32993__$1 = state_32993;
var statearr_33021_35671 = state_32993__$1;
(statearr_33021_35671[(2)] = null);

(statearr_33021_35671[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (4))){
var inst_32850 = (state_32993[(9)]);
var inst_32850__$1 = (state_32993[(2)]);
var inst_32851 = (inst_32850__$1 == null);
var state_32993__$1 = (function (){var statearr_33022 = state_32993;
(statearr_33022[(9)] = inst_32850__$1);

return statearr_33022;
})();
if(cljs.core.truth_(inst_32851)){
var statearr_33023_35678 = state_32993__$1;
(statearr_33023_35678[(1)] = (5));

} else {
var statearr_33024_35679 = state_32993__$1;
(statearr_33024_35679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (15))){
var inst_32859 = (state_32993[(13)]);
var inst_32861 = (state_32993[(14)]);
var inst_32860 = (state_32993[(15)]);
var inst_32862 = (state_32993[(17)]);
var inst_32880 = (state_32993[(2)]);
var inst_32884 = (inst_32862 + (1));
var tmp33018 = inst_32859;
var tmp33019 = inst_32861;
var tmp33020 = inst_32860;
var inst_32859__$1 = tmp33018;
var inst_32860__$1 = tmp33020;
var inst_32861__$1 = tmp33019;
var inst_32862__$1 = inst_32884;
var state_32993__$1 = (function (){var statearr_33035 = state_32993;
(statearr_33035[(13)] = inst_32859__$1);

(statearr_33035[(14)] = inst_32861__$1);

(statearr_33035[(15)] = inst_32860__$1);

(statearr_33035[(17)] = inst_32862__$1);

(statearr_33035[(18)] = inst_32880);

return statearr_33035;
})();
var statearr_33037_35682 = state_32993__$1;
(statearr_33037_35682[(2)] = null);

(statearr_33037_35682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (21))){
var inst_32914 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33041_35683 = state_32993__$1;
(statearr_33041_35683[(2)] = inst_32914);

(statearr_33041_35683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (31))){
var inst_32940 = (state_32993[(12)]);
var inst_32944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32940);
var state_32993__$1 = state_32993;
var statearr_33042_35684 = state_32993__$1;
(statearr_33042_35684[(2)] = inst_32944);

(statearr_33042_35684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (32))){
var inst_32932 = (state_32993[(19)]);
var inst_32935 = (state_32993[(10)]);
var inst_32933 = (state_32993[(11)]);
var inst_32934 = (state_32993[(20)]);
var inst_32946 = (state_32993[(2)]);
var inst_32947 = (inst_32935 + (1));
var tmp33038 = inst_32932;
var tmp33039 = inst_32933;
var tmp33040 = inst_32934;
var inst_32932__$1 = tmp33038;
var inst_32933__$1 = tmp33039;
var inst_32934__$1 = tmp33040;
var inst_32935__$1 = inst_32947;
var state_32993__$1 = (function (){var statearr_33049 = state_32993;
(statearr_33049[(19)] = inst_32932__$1);

(statearr_33049[(10)] = inst_32935__$1);

(statearr_33049[(21)] = inst_32946);

(statearr_33049[(11)] = inst_32933__$1);

(statearr_33049[(20)] = inst_32934__$1);

return statearr_33049;
})();
var statearr_33051_35690 = state_32993__$1;
(statearr_33051_35690[(2)] = null);

(statearr_33051_35690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (40))){
var inst_32959 = (state_32993[(22)]);
var inst_32963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32959);
var state_32993__$1 = state_32993;
var statearr_33054_35695 = state_32993__$1;
(statearr_33054_35695[(2)] = inst_32963);

(statearr_33054_35695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (33))){
var inst_32950 = (state_32993[(23)]);
var inst_32952 = cljs.core.chunked_seq_QMARK_(inst_32950);
var state_32993__$1 = state_32993;
if(inst_32952){
var statearr_33056_35696 = state_32993__$1;
(statearr_33056_35696[(1)] = (36));

} else {
var statearr_33057_35701 = state_32993__$1;
(statearr_33057_35701[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (13))){
var inst_32871 = (state_32993[(24)]);
var inst_32874 = cljs.core.async.close_BANG_(inst_32871);
var state_32993__$1 = state_32993;
var statearr_33058_35702 = state_32993__$1;
(statearr_33058_35702[(2)] = inst_32874);

(statearr_33058_35702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (22))){
var inst_32904 = (state_32993[(8)]);
var inst_32907 = cljs.core.async.close_BANG_(inst_32904);
var state_32993__$1 = state_32993;
var statearr_33059_35709 = state_32993__$1;
(statearr_33059_35709[(2)] = inst_32907);

(statearr_33059_35709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (36))){
var inst_32950 = (state_32993[(23)]);
var inst_32954 = cljs.core.chunk_first(inst_32950);
var inst_32955 = cljs.core.chunk_rest(inst_32950);
var inst_32956 = cljs.core.count(inst_32954);
var inst_32932 = inst_32955;
var inst_32933 = inst_32954;
var inst_32934 = inst_32956;
var inst_32935 = (0);
var state_32993__$1 = (function (){var statearr_33060 = state_32993;
(statearr_33060[(19)] = inst_32932);

(statearr_33060[(10)] = inst_32935);

(statearr_33060[(11)] = inst_32933);

(statearr_33060[(20)] = inst_32934);

return statearr_33060;
})();
var statearr_33061_35712 = state_32993__$1;
(statearr_33061_35712[(2)] = null);

(statearr_33061_35712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (41))){
var inst_32950 = (state_32993[(23)]);
var inst_32965 = (state_32993[(2)]);
var inst_32966 = cljs.core.next(inst_32950);
var inst_32932 = inst_32966;
var inst_32933 = null;
var inst_32934 = (0);
var inst_32935 = (0);
var state_32993__$1 = (function (){var statearr_33062 = state_32993;
(statearr_33062[(19)] = inst_32932);

(statearr_33062[(10)] = inst_32935);

(statearr_33062[(25)] = inst_32965);

(statearr_33062[(11)] = inst_32933);

(statearr_33062[(20)] = inst_32934);

return statearr_33062;
})();
var statearr_33063_35713 = state_32993__$1;
(statearr_33063_35713[(2)] = null);

(statearr_33063_35713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (43))){
var state_32993__$1 = state_32993;
var statearr_33064_35714 = state_32993__$1;
(statearr_33064_35714[(2)] = null);

(statearr_33064_35714[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (29))){
var inst_32974 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33066_35717 = state_32993__$1;
(statearr_33066_35717[(2)] = inst_32974);

(statearr_33066_35717[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (44))){
var inst_32983 = (state_32993[(2)]);
var state_32993__$1 = (function (){var statearr_33067 = state_32993;
(statearr_33067[(26)] = inst_32983);

return statearr_33067;
})();
var statearr_33068_35721 = state_32993__$1;
(statearr_33068_35721[(2)] = null);

(statearr_33068_35721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (6))){
var inst_32924 = (state_32993[(27)]);
var inst_32923 = cljs.core.deref(cs);
var inst_32924__$1 = cljs.core.keys(inst_32923);
var inst_32925 = cljs.core.count(inst_32924__$1);
var inst_32926 = cljs.core.reset_BANG_(dctr,inst_32925);
var inst_32931 = cljs.core.seq(inst_32924__$1);
var inst_32932 = inst_32931;
var inst_32933 = null;
var inst_32934 = (0);
var inst_32935 = (0);
var state_32993__$1 = (function (){var statearr_33070 = state_32993;
(statearr_33070[(19)] = inst_32932);

(statearr_33070[(10)] = inst_32935);

(statearr_33070[(27)] = inst_32924__$1);

(statearr_33070[(28)] = inst_32926);

(statearr_33070[(11)] = inst_32933);

(statearr_33070[(20)] = inst_32934);

return statearr_33070;
})();
var statearr_33071_35728 = state_32993__$1;
(statearr_33071_35728[(2)] = null);

(statearr_33071_35728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (28))){
var inst_32932 = (state_32993[(19)]);
var inst_32950 = (state_32993[(23)]);
var inst_32950__$1 = cljs.core.seq(inst_32932);
var state_32993__$1 = (function (){var statearr_33072 = state_32993;
(statearr_33072[(23)] = inst_32950__$1);

return statearr_33072;
})();
if(inst_32950__$1){
var statearr_33073_35731 = state_32993__$1;
(statearr_33073_35731[(1)] = (33));

} else {
var statearr_33074_35732 = state_32993__$1;
(statearr_33074_35732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (25))){
var inst_32935 = (state_32993[(10)]);
var inst_32934 = (state_32993[(20)]);
var inst_32937 = (inst_32935 < inst_32934);
var inst_32938 = inst_32937;
var state_32993__$1 = state_32993;
if(cljs.core.truth_(inst_32938)){
var statearr_33075_35733 = state_32993__$1;
(statearr_33075_35733[(1)] = (27));

} else {
var statearr_33076_35734 = state_32993__$1;
(statearr_33076_35734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (34))){
var state_32993__$1 = state_32993;
var statearr_33077_35737 = state_32993__$1;
(statearr_33077_35737[(2)] = null);

(statearr_33077_35737[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (17))){
var state_32993__$1 = state_32993;
var statearr_33078_35739 = state_32993__$1;
(statearr_33078_35739[(2)] = null);

(statearr_33078_35739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (3))){
var inst_32988 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32993__$1,inst_32988);
} else {
if((state_val_32994 === (12))){
var inst_32919 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33088_35741 = state_32993__$1;
(statearr_33088_35741[(2)] = inst_32919);

(statearr_33088_35741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (2))){
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32993__$1,(4),ch);
} else {
if((state_val_32994 === (23))){
var state_32993__$1 = state_32993;
var statearr_33093_35742 = state_32993__$1;
(statearr_33093_35742[(2)] = null);

(statearr_33093_35742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (35))){
var inst_32972 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33094_35743 = state_32993__$1;
(statearr_33094_35743[(2)] = inst_32972);

(statearr_33094_35743[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (19))){
var inst_32887 = (state_32993[(7)]);
var inst_32891 = cljs.core.chunk_first(inst_32887);
var inst_32892 = cljs.core.chunk_rest(inst_32887);
var inst_32893 = cljs.core.count(inst_32891);
var inst_32859 = inst_32892;
var inst_32860 = inst_32891;
var inst_32861 = inst_32893;
var inst_32862 = (0);
var state_32993__$1 = (function (){var statearr_33095 = state_32993;
(statearr_33095[(13)] = inst_32859);

(statearr_33095[(14)] = inst_32861);

(statearr_33095[(15)] = inst_32860);

(statearr_33095[(17)] = inst_32862);

return statearr_33095;
})();
var statearr_33096_35745 = state_32993__$1;
(statearr_33096_35745[(2)] = null);

(statearr_33096_35745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (11))){
var inst_32859 = (state_32993[(13)]);
var inst_32887 = (state_32993[(7)]);
var inst_32887__$1 = cljs.core.seq(inst_32859);
var state_32993__$1 = (function (){var statearr_33097 = state_32993;
(statearr_33097[(7)] = inst_32887__$1);

return statearr_33097;
})();
if(inst_32887__$1){
var statearr_33098_35746 = state_32993__$1;
(statearr_33098_35746[(1)] = (16));

} else {
var statearr_33099_35747 = state_32993__$1;
(statearr_33099_35747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (9))){
var inst_32921 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33100_35748 = state_32993__$1;
(statearr_33100_35748[(2)] = inst_32921);

(statearr_33100_35748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (5))){
var inst_32857 = cljs.core.deref(cs);
var inst_32858 = cljs.core.seq(inst_32857);
var inst_32859 = inst_32858;
var inst_32860 = null;
var inst_32861 = (0);
var inst_32862 = (0);
var state_32993__$1 = (function (){var statearr_33101 = state_32993;
(statearr_33101[(13)] = inst_32859);

(statearr_33101[(14)] = inst_32861);

(statearr_33101[(15)] = inst_32860);

(statearr_33101[(17)] = inst_32862);

return statearr_33101;
})();
var statearr_33102_35750 = state_32993__$1;
(statearr_33102_35750[(2)] = null);

(statearr_33102_35750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (14))){
var state_32993__$1 = state_32993;
var statearr_33103_35751 = state_32993__$1;
(statearr_33103_35751[(2)] = null);

(statearr_33103_35751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (45))){
var inst_32980 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33108_35754 = state_32993__$1;
(statearr_33108_35754[(2)] = inst_32980);

(statearr_33108_35754[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (26))){
var inst_32924 = (state_32993[(27)]);
var inst_32976 = (state_32993[(2)]);
var inst_32977 = cljs.core.seq(inst_32924);
var state_32993__$1 = (function (){var statearr_33114 = state_32993;
(statearr_33114[(29)] = inst_32976);

return statearr_33114;
})();
if(inst_32977){
var statearr_33119_35759 = state_32993__$1;
(statearr_33119_35759[(1)] = (42));

} else {
var statearr_33120_35760 = state_32993__$1;
(statearr_33120_35760[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (16))){
var inst_32887 = (state_32993[(7)]);
var inst_32889 = cljs.core.chunked_seq_QMARK_(inst_32887);
var state_32993__$1 = state_32993;
if(inst_32889){
var statearr_33133_35761 = state_32993__$1;
(statearr_33133_35761[(1)] = (19));

} else {
var statearr_33138_35762 = state_32993__$1;
(statearr_33138_35762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (38))){
var inst_32969 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33143_35763 = state_32993__$1;
(statearr_33143_35763[(2)] = inst_32969);

(statearr_33143_35763[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (30))){
var state_32993__$1 = state_32993;
var statearr_33146_35765 = state_32993__$1;
(statearr_33146_35765[(2)] = null);

(statearr_33146_35765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (10))){
var inst_32860 = (state_32993[(15)]);
var inst_32862 = (state_32993[(17)]);
var inst_32870 = cljs.core._nth(inst_32860,inst_32862);
var inst_32871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32870,(0),null);
var inst_32872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32870,(1),null);
var state_32993__$1 = (function (){var statearr_33153 = state_32993;
(statearr_33153[(24)] = inst_32871);

return statearr_33153;
})();
if(cljs.core.truth_(inst_32872)){
var statearr_33154_35766 = state_32993__$1;
(statearr_33154_35766[(1)] = (13));

} else {
var statearr_33155_35767 = state_32993__$1;
(statearr_33155_35767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (18))){
var inst_32917 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33156_35768 = state_32993__$1;
(statearr_33156_35768[(2)] = inst_32917);

(statearr_33156_35768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (42))){
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32993__$1,(45),dchan);
} else {
if((state_val_32994 === (37))){
var inst_32850 = (state_32993[(9)]);
var inst_32959 = (state_32993[(22)]);
var inst_32950 = (state_32993[(23)]);
var inst_32959__$1 = cljs.core.first(inst_32950);
var inst_32960 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32959__$1,inst_32850,done);
var state_32993__$1 = (function (){var statearr_33157 = state_32993;
(statearr_33157[(22)] = inst_32959__$1);

return statearr_33157;
})();
if(cljs.core.truth_(inst_32960)){
var statearr_33158_35769 = state_32993__$1;
(statearr_33158_35769[(1)] = (39));

} else {
var statearr_33159_35770 = state_32993__$1;
(statearr_33159_35770[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (8))){
var inst_32861 = (state_32993[(14)]);
var inst_32862 = (state_32993[(17)]);
var inst_32864 = (inst_32862 < inst_32861);
var inst_32865 = inst_32864;
var state_32993__$1 = state_32993;
if(cljs.core.truth_(inst_32865)){
var statearr_33160_35772 = state_32993__$1;
(statearr_33160_35772[(1)] = (10));

} else {
var statearr_33161_35773 = state_32993__$1;
(statearr_33161_35773[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31479__auto__ = null;
var cljs$core$async$mult_$_state_machine__31479__auto____0 = (function (){
var statearr_33171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33171[(0)] = cljs$core$async$mult_$_state_machine__31479__auto__);

(statearr_33171[(1)] = (1));

return statearr_33171;
});
var cljs$core$async$mult_$_state_machine__31479__auto____1 = (function (state_32993){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_32993);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e33173){var ex__31482__auto__ = e33173;
var statearr_33174_35776 = state_32993;
(statearr_33174_35776[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_32993[(4)]))){
var statearr_33181_35781 = state_32993;
(statearr_33181_35781[(1)] = cljs.core.first((state_32993[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35782 = state_32993;
state_32993 = G__35782;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31479__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31479__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31479__auto____0;
cljs$core$async$mult_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31479__auto____1;
return cljs$core$async$mult_$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_33193 = f__31700__auto__();
(statearr_33193[(6)] = c__31699__auto___35648);

return statearr_33193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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
var G__33202 = arguments.length;
switch (G__33202) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35793 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35793(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35795 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35795(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35796 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35796(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35797 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35797(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35798 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35798(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35799 = arguments.length;
var i__4819__auto___35800 = (0);
while(true){
if((i__4819__auto___35800 < len__4818__auto___35799)){
args__4824__auto__.push((arguments[i__4819__auto___35800]));

var G__35802 = (i__4819__auto___35800 + (1));
i__4819__auto___35800 = G__35802;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33279){
var map__33280 = p__33279;
var map__33280__$1 = cljs.core.__destructure_map(map__33280);
var opts = map__33280__$1;
var statearr_33284_35804 = state;
(statearr_33284_35804[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33287_35805 = state;
(statearr_33287_35805[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33289_35806 = state;
(statearr_33289_35806[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33272){
var G__33273 = cljs.core.first(seq33272);
var seq33272__$1 = cljs.core.next(seq33272);
var G__33274 = cljs.core.first(seq33272__$1);
var seq33272__$2 = cljs.core.next(seq33272__$1);
var G__33275 = cljs.core.first(seq33272__$2);
var seq33272__$3 = cljs.core.next(seq33272__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33273,G__33274,G__33275,seq33272__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33316 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33317){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33317 = meta33317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33318,meta33317__$1){
var self__ = this;
var _33318__$1 = this;
return (new cljs.core.async.t_cljs$core$async33316(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33317__$1));
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33318){
var self__ = this;
var _33318__$1 = this;
return self__.meta33317;
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33317","meta33317",837021047,null)], null);
}));

(cljs.core.async.t_cljs$core$async33316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33316");

(cljs.core.async.t_cljs$core$async33316.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33316.
 */
cljs.core.async.__GT_t_cljs$core$async33316 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33317){
return (new cljs.core.async.t_cljs$core$async33316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33317));
});

}

return (new cljs.core.async.t_cljs$core$async33316(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31699__auto___35812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_33456){
var state_val_33457 = (state_33456[(1)]);
if((state_val_33457 === (7))){
var inst_33400 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33400)){
var statearr_33461_35813 = state_33456__$1;
(statearr_33461_35813[(1)] = (8));

} else {
var statearr_33462_35814 = state_33456__$1;
(statearr_33462_35814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (20))){
var inst_33386 = (state_33456[(7)]);
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33456__$1,(23),out,inst_33386);
} else {
if((state_val_33457 === (1))){
var inst_33362 = calc_state();
var inst_33364 = cljs.core.__destructure_map(inst_33362);
var inst_33365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33364,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33364,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33364,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33368 = inst_33362;
var state_33456__$1 = (function (){var statearr_33468 = state_33456;
(statearr_33468[(8)] = inst_33367);

(statearr_33468[(9)] = inst_33366);

(statearr_33468[(10)] = inst_33368);

(statearr_33468[(11)] = inst_33365);

return statearr_33468;
})();
var statearr_33473_35815 = state_33456__$1;
(statearr_33473_35815[(2)] = null);

(statearr_33473_35815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (24))){
var inst_33376 = (state_33456[(12)]);
var inst_33368 = inst_33376;
var state_33456__$1 = (function (){var statearr_33478 = state_33456;
(statearr_33478[(10)] = inst_33368);

return statearr_33478;
})();
var statearr_33483_35816 = state_33456__$1;
(statearr_33483_35816[(2)] = null);

(statearr_33483_35816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (4))){
var inst_33386 = (state_33456[(7)]);
var inst_33395 = (state_33456[(13)]);
var inst_33385 = (state_33456[(2)]);
var inst_33386__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33385,(0),null);
var inst_33390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33385,(1),null);
var inst_33395__$1 = (inst_33386__$1 == null);
var state_33456__$1 = (function (){var statearr_33484 = state_33456;
(statearr_33484[(7)] = inst_33386__$1);

(statearr_33484[(13)] = inst_33395__$1);

(statearr_33484[(14)] = inst_33390);

return statearr_33484;
})();
if(cljs.core.truth_(inst_33395__$1)){
var statearr_33485_35817 = state_33456__$1;
(statearr_33485_35817[(1)] = (5));

} else {
var statearr_33486_35818 = state_33456__$1;
(statearr_33486_35818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (15))){
var inst_33426 = (state_33456[(15)]);
var inst_33377 = (state_33456[(16)]);
var inst_33426__$1 = cljs.core.empty_QMARK_(inst_33377);
var state_33456__$1 = (function (){var statearr_33487 = state_33456;
(statearr_33487[(15)] = inst_33426__$1);

return statearr_33487;
})();
if(inst_33426__$1){
var statearr_33488_35819 = state_33456__$1;
(statearr_33488_35819[(1)] = (17));

} else {
var statearr_33489_35820 = state_33456__$1;
(statearr_33489_35820[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (21))){
var inst_33376 = (state_33456[(12)]);
var inst_33368 = inst_33376;
var state_33456__$1 = (function (){var statearr_33492 = state_33456;
(statearr_33492[(10)] = inst_33368);

return statearr_33492;
})();
var statearr_33493_35821 = state_33456__$1;
(statearr_33493_35821[(2)] = null);

(statearr_33493_35821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (13))){
var inst_33411 = (state_33456[(2)]);
var inst_33412 = calc_state();
var inst_33368 = inst_33412;
var state_33456__$1 = (function (){var statearr_33496 = state_33456;
(statearr_33496[(17)] = inst_33411);

(statearr_33496[(10)] = inst_33368);

return statearr_33496;
})();
var statearr_33497_35822 = state_33456__$1;
(statearr_33497_35822[(2)] = null);

(statearr_33497_35822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (22))){
var inst_33446 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33502_35823 = state_33456__$1;
(statearr_33502_35823[(2)] = inst_33446);

(statearr_33502_35823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (6))){
var inst_33390 = (state_33456[(14)]);
var inst_33398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33390,change);
var state_33456__$1 = state_33456;
var statearr_33503_35824 = state_33456__$1;
(statearr_33503_35824[(2)] = inst_33398);

(statearr_33503_35824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (25))){
var state_33456__$1 = state_33456;
var statearr_33507_35825 = state_33456__$1;
(statearr_33507_35825[(2)] = null);

(statearr_33507_35825[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (17))){
var inst_33390 = (state_33456[(14)]);
var inst_33379 = (state_33456[(18)]);
var inst_33428 = (inst_33379.cljs$core$IFn$_invoke$arity$1 ? inst_33379.cljs$core$IFn$_invoke$arity$1(inst_33390) : inst_33379.call(null,inst_33390));
var inst_33429 = cljs.core.not(inst_33428);
var state_33456__$1 = state_33456;
var statearr_33509_35830 = state_33456__$1;
(statearr_33509_35830[(2)] = inst_33429);

(statearr_33509_35830[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (3))){
var inst_33450 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33456__$1,inst_33450);
} else {
if((state_val_33457 === (12))){
var state_33456__$1 = state_33456;
var statearr_33513_35834 = state_33456__$1;
(statearr_33513_35834[(2)] = null);

(statearr_33513_35834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (2))){
var inst_33368 = (state_33456[(10)]);
var inst_33376 = (state_33456[(12)]);
var inst_33376__$1 = cljs.core.__destructure_map(inst_33368);
var inst_33377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33376__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33376__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33376__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33456__$1 = (function (){var statearr_33515 = state_33456;
(statearr_33515[(16)] = inst_33377);

(statearr_33515[(18)] = inst_33379);

(statearr_33515[(12)] = inst_33376__$1);

return statearr_33515;
})();
return cljs.core.async.ioc_alts_BANG_(state_33456__$1,(4),inst_33380);
} else {
if((state_val_33457 === (23))){
var inst_33437 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33437)){
var statearr_33516_35835 = state_33456__$1;
(statearr_33516_35835[(1)] = (24));

} else {
var statearr_33517_35836 = state_33456__$1;
(statearr_33517_35836[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (19))){
var inst_33432 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33518_35840 = state_33456__$1;
(statearr_33518_35840[(2)] = inst_33432);

(statearr_33518_35840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (11))){
var inst_33390 = (state_33456[(14)]);
var inst_33408 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33390);
var state_33456__$1 = state_33456;
var statearr_33521_35844 = state_33456__$1;
(statearr_33521_35844[(2)] = inst_33408);

(statearr_33521_35844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (9))){
var inst_33377 = (state_33456[(16)]);
var inst_33390 = (state_33456[(14)]);
var inst_33419 = (state_33456[(19)]);
var inst_33419__$1 = (inst_33377.cljs$core$IFn$_invoke$arity$1 ? inst_33377.cljs$core$IFn$_invoke$arity$1(inst_33390) : inst_33377.call(null,inst_33390));
var state_33456__$1 = (function (){var statearr_33524 = state_33456;
(statearr_33524[(19)] = inst_33419__$1);

return statearr_33524;
})();
if(cljs.core.truth_(inst_33419__$1)){
var statearr_33527_35845 = state_33456__$1;
(statearr_33527_35845[(1)] = (14));

} else {
var statearr_33528_35846 = state_33456__$1;
(statearr_33528_35846[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (5))){
var inst_33395 = (state_33456[(13)]);
var state_33456__$1 = state_33456;
var statearr_33533_35847 = state_33456__$1;
(statearr_33533_35847[(2)] = inst_33395);

(statearr_33533_35847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (14))){
var inst_33419 = (state_33456[(19)]);
var state_33456__$1 = state_33456;
var statearr_33536_35848 = state_33456__$1;
(statearr_33536_35848[(2)] = inst_33419);

(statearr_33536_35848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (26))){
var inst_33442 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33539_35849 = state_33456__$1;
(statearr_33539_35849[(2)] = inst_33442);

(statearr_33539_35849[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (16))){
var inst_33434 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33434)){
var statearr_33544_35853 = state_33456__$1;
(statearr_33544_35853[(1)] = (20));

} else {
var statearr_33547_35854 = state_33456__$1;
(statearr_33547_35854[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (10))){
var inst_33448 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33548_35855 = state_33456__$1;
(statearr_33548_35855[(2)] = inst_33448);

(statearr_33548_35855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (18))){
var inst_33426 = (state_33456[(15)]);
var state_33456__$1 = state_33456;
var statearr_33550_35857 = state_33456__$1;
(statearr_33550_35857[(2)] = inst_33426);

(statearr_33550_35857[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (8))){
var inst_33386 = (state_33456[(7)]);
var inst_33402 = (inst_33386 == null);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33402)){
var statearr_33556_35861 = state_33456__$1;
(statearr_33556_35861[(1)] = (11));

} else {
var statearr_33558_35862 = state_33456__$1;
(statearr_33558_35862[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__31479__auto__ = null;
var cljs$core$async$mix_$_state_machine__31479__auto____0 = (function (){
var statearr_33559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33559[(0)] = cljs$core$async$mix_$_state_machine__31479__auto__);

(statearr_33559[(1)] = (1));

return statearr_33559;
});
var cljs$core$async$mix_$_state_machine__31479__auto____1 = (function (state_33456){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_33456);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e33560){var ex__31482__auto__ = e33560;
var statearr_33561_35863 = state_33456;
(statearr_33561_35863[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_33456[(4)]))){
var statearr_33563_35864 = state_33456;
(statearr_33563_35864[(1)] = cljs.core.first((state_33456[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35865 = state_33456;
state_33456 = G__35865;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31479__auto__ = function(state_33456){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31479__auto____1.call(this,state_33456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31479__auto____0;
cljs$core$async$mix_$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31479__auto____1;
return cljs$core$async$mix_$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_33564 = f__31700__auto__();
(statearr_33564[(6)] = c__31699__auto___35812);

return statearr_33564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35866 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35866(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35869 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35869(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35872 = (function() {
var G__35873 = null;
var G__35873__1 = (function (p){
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
var G__35873__2 = (function (p,v){
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
G__35873 = function(p,v){
switch(arguments.length){
case 1:
return G__35873__1.call(this,p);
case 2:
return G__35873__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35873.cljs$core$IFn$_invoke$arity$1 = G__35873__1;
G__35873.cljs$core$IFn$_invoke$arity$2 = G__35873__2;
return G__35873;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33613 = arguments.length;
switch (G__33613) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35872(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35872(p,v);
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
var G__33631 = arguments.length;
switch (G__33631) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33621_SHARP_){
if(cljs.core.truth_((p1__33621_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33621_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33621_SHARP_.call(null,topic)))){
return p1__33621_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33621_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33638 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33639){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33639 = meta33639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33640,meta33639__$1){
var self__ = this;
var _33640__$1 = this;
return (new cljs.core.async.t_cljs$core$async33638(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33639__$1));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33640){
var self__ = this;
var _33640__$1 = this;
return self__.meta33639;
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33639","meta33639",-1221976122,null)], null);
}));

(cljs.core.async.t_cljs$core$async33638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33638");

(cljs.core.async.t_cljs$core$async33638.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33638.
 */
cljs.core.async.__GT_t_cljs$core$async33638 = (function cljs$core$async$__GT_t_cljs$core$async33638(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33639){
return (new cljs.core.async.t_cljs$core$async33638(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33639));
});

}

return (new cljs.core.async.t_cljs$core$async33638(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31699__auto___35880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_33741){
var state_val_33743 = (state_33741[(1)]);
if((state_val_33743 === (7))){
var inst_33734 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33744_35881 = state_33741__$1;
(statearr_33744_35881[(2)] = inst_33734);

(statearr_33744_35881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (20))){
var state_33741__$1 = state_33741;
var statearr_33745_35882 = state_33741__$1;
(statearr_33745_35882[(2)] = null);

(statearr_33745_35882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (1))){
var state_33741__$1 = state_33741;
var statearr_33748_35883 = state_33741__$1;
(statearr_33748_35883[(2)] = null);

(statearr_33748_35883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (24))){
var inst_33717 = (state_33741[(7)]);
var inst_33726 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33717);
var state_33741__$1 = state_33741;
var statearr_33752_35884 = state_33741__$1;
(statearr_33752_35884[(2)] = inst_33726);

(statearr_33752_35884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (4))){
var inst_33656 = (state_33741[(8)]);
var inst_33656__$1 = (state_33741[(2)]);
var inst_33657 = (inst_33656__$1 == null);
var state_33741__$1 = (function (){var statearr_33757 = state_33741;
(statearr_33757[(8)] = inst_33656__$1);

return statearr_33757;
})();
if(cljs.core.truth_(inst_33657)){
var statearr_33758_35889 = state_33741__$1;
(statearr_33758_35889[(1)] = (5));

} else {
var statearr_33759_35890 = state_33741__$1;
(statearr_33759_35890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (15))){
var inst_33710 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33760_35891 = state_33741__$1;
(statearr_33760_35891[(2)] = inst_33710);

(statearr_33760_35891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (21))){
var inst_33731 = (state_33741[(2)]);
var state_33741__$1 = (function (){var statearr_33761 = state_33741;
(statearr_33761[(9)] = inst_33731);

return statearr_33761;
})();
var statearr_33763_35892 = state_33741__$1;
(statearr_33763_35892[(2)] = null);

(statearr_33763_35892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (13))){
var inst_33688 = (state_33741[(10)]);
var inst_33692 = cljs.core.chunked_seq_QMARK_(inst_33688);
var state_33741__$1 = state_33741;
if(inst_33692){
var statearr_33770_35894 = state_33741__$1;
(statearr_33770_35894[(1)] = (16));

} else {
var statearr_33771_35895 = state_33741__$1;
(statearr_33771_35895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (22))){
var inst_33723 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
if(cljs.core.truth_(inst_33723)){
var statearr_33772_35896 = state_33741__$1;
(statearr_33772_35896[(1)] = (23));

} else {
var statearr_33773_35897 = state_33741__$1;
(statearr_33773_35897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (6))){
var inst_33656 = (state_33741[(8)]);
var inst_33719 = (state_33741[(11)]);
var inst_33717 = (state_33741[(7)]);
var inst_33717__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33656) : topic_fn.call(null,inst_33656));
var inst_33718 = cljs.core.deref(mults);
var inst_33719__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33718,inst_33717__$1);
var state_33741__$1 = (function (){var statearr_33774 = state_33741;
(statearr_33774[(11)] = inst_33719__$1);

(statearr_33774[(7)] = inst_33717__$1);

return statearr_33774;
})();
if(cljs.core.truth_(inst_33719__$1)){
var statearr_33777_35898 = state_33741__$1;
(statearr_33777_35898[(1)] = (19));

} else {
var statearr_33778_35899 = state_33741__$1;
(statearr_33778_35899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (25))){
var inst_33728 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33779_35900 = state_33741__$1;
(statearr_33779_35900[(2)] = inst_33728);

(statearr_33779_35900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (17))){
var inst_33688 = (state_33741[(10)]);
var inst_33700 = cljs.core.first(inst_33688);
var inst_33701 = cljs.core.async.muxch_STAR_(inst_33700);
var inst_33702 = cljs.core.async.close_BANG_(inst_33701);
var inst_33703 = cljs.core.next(inst_33688);
var inst_33666 = inst_33703;
var inst_33667 = null;
var inst_33668 = (0);
var inst_33669 = (0);
var state_33741__$1 = (function (){var statearr_33781 = state_33741;
(statearr_33781[(12)] = inst_33667);

(statearr_33781[(13)] = inst_33669);

(statearr_33781[(14)] = inst_33666);

(statearr_33781[(15)] = inst_33668);

(statearr_33781[(16)] = inst_33702);

return statearr_33781;
})();
var statearr_33783_35901 = state_33741__$1;
(statearr_33783_35901[(2)] = null);

(statearr_33783_35901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (3))){
var inst_33736 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33741__$1,inst_33736);
} else {
if((state_val_33743 === (12))){
var inst_33712 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33784_35902 = state_33741__$1;
(statearr_33784_35902[(2)] = inst_33712);

(statearr_33784_35902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (2))){
var state_33741__$1 = state_33741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33741__$1,(4),ch);
} else {
if((state_val_33743 === (23))){
var state_33741__$1 = state_33741;
var statearr_33788_35904 = state_33741__$1;
(statearr_33788_35904[(2)] = null);

(statearr_33788_35904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (19))){
var inst_33656 = (state_33741[(8)]);
var inst_33719 = (state_33741[(11)]);
var inst_33721 = cljs.core.async.muxch_STAR_(inst_33719);
var state_33741__$1 = state_33741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33741__$1,(22),inst_33721,inst_33656);
} else {
if((state_val_33743 === (11))){
var inst_33688 = (state_33741[(10)]);
var inst_33666 = (state_33741[(14)]);
var inst_33688__$1 = cljs.core.seq(inst_33666);
var state_33741__$1 = (function (){var statearr_33793 = state_33741;
(statearr_33793[(10)] = inst_33688__$1);

return statearr_33793;
})();
if(inst_33688__$1){
var statearr_33794_35905 = state_33741__$1;
(statearr_33794_35905[(1)] = (13));

} else {
var statearr_33795_35906 = state_33741__$1;
(statearr_33795_35906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (9))){
var inst_33714 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33796_35907 = state_33741__$1;
(statearr_33796_35907[(2)] = inst_33714);

(statearr_33796_35907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (5))){
var inst_33663 = cljs.core.deref(mults);
var inst_33664 = cljs.core.vals(inst_33663);
var inst_33665 = cljs.core.seq(inst_33664);
var inst_33666 = inst_33665;
var inst_33667 = null;
var inst_33668 = (0);
var inst_33669 = (0);
var state_33741__$1 = (function (){var statearr_33801 = state_33741;
(statearr_33801[(12)] = inst_33667);

(statearr_33801[(13)] = inst_33669);

(statearr_33801[(14)] = inst_33666);

(statearr_33801[(15)] = inst_33668);

return statearr_33801;
})();
var statearr_33803_35909 = state_33741__$1;
(statearr_33803_35909[(2)] = null);

(statearr_33803_35909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (14))){
var state_33741__$1 = state_33741;
var statearr_33809_35913 = state_33741__$1;
(statearr_33809_35913[(2)] = null);

(statearr_33809_35913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (16))){
var inst_33688 = (state_33741[(10)]);
var inst_33695 = cljs.core.chunk_first(inst_33688);
var inst_33696 = cljs.core.chunk_rest(inst_33688);
var inst_33697 = cljs.core.count(inst_33695);
var inst_33666 = inst_33696;
var inst_33667 = inst_33695;
var inst_33668 = inst_33697;
var inst_33669 = (0);
var state_33741__$1 = (function (){var statearr_33814 = state_33741;
(statearr_33814[(12)] = inst_33667);

(statearr_33814[(13)] = inst_33669);

(statearr_33814[(14)] = inst_33666);

(statearr_33814[(15)] = inst_33668);

return statearr_33814;
})();
var statearr_33817_35914 = state_33741__$1;
(statearr_33817_35914[(2)] = null);

(statearr_33817_35914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (10))){
var inst_33667 = (state_33741[(12)]);
var inst_33669 = (state_33741[(13)]);
var inst_33666 = (state_33741[(14)]);
var inst_33668 = (state_33741[(15)]);
var inst_33677 = cljs.core._nth(inst_33667,inst_33669);
var inst_33678 = cljs.core.async.muxch_STAR_(inst_33677);
var inst_33679 = cljs.core.async.close_BANG_(inst_33678);
var inst_33683 = (inst_33669 + (1));
var tmp33805 = inst_33667;
var tmp33806 = inst_33666;
var tmp33807 = inst_33668;
var inst_33666__$1 = tmp33806;
var inst_33667__$1 = tmp33805;
var inst_33668__$1 = tmp33807;
var inst_33669__$1 = inst_33683;
var state_33741__$1 = (function (){var statearr_33823 = state_33741;
(statearr_33823[(12)] = inst_33667__$1);

(statearr_33823[(17)] = inst_33679);

(statearr_33823[(13)] = inst_33669__$1);

(statearr_33823[(14)] = inst_33666__$1);

(statearr_33823[(15)] = inst_33668__$1);

return statearr_33823;
})();
var statearr_33828_35915 = state_33741__$1;
(statearr_33828_35915[(2)] = null);

(statearr_33828_35915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (18))){
var inst_33706 = (state_33741[(2)]);
var state_33741__$1 = state_33741;
var statearr_33831_35916 = state_33741__$1;
(statearr_33831_35916[(2)] = inst_33706);

(statearr_33831_35916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33743 === (8))){
var inst_33669 = (state_33741[(13)]);
var inst_33668 = (state_33741[(15)]);
var inst_33671 = (inst_33669 < inst_33668);
var inst_33672 = inst_33671;
var state_33741__$1 = state_33741;
if(cljs.core.truth_(inst_33672)){
var statearr_33833_35917 = state_33741__$1;
(statearr_33833_35917[(1)] = (10));

} else {
var statearr_33834_35918 = state_33741__$1;
(statearr_33834_35918[(1)] = (11));

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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_33838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33838[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_33838[(1)] = (1));

return statearr_33838;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_33741){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_33741);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e33845){var ex__31482__auto__ = e33845;
var statearr_33847_35919 = state_33741;
(statearr_33847_35919[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_33741[(4)]))){
var statearr_33853_35920 = state_33741;
(statearr_33853_35920[(1)] = cljs.core.first((state_33741[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35921 = state_33741;
state_33741 = G__35921;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_33741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_33741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_33867 = f__31700__auto__();
(statearr_33867[(6)] = c__31699__auto___35880);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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
var G__33875 = arguments.length;
switch (G__33875) {
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
var G__33902 = arguments.length;
switch (G__33902) {
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
var G__33909 = arguments.length;
switch (G__33909) {
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
var c__31699__auto___35930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_33990){
var state_val_33991 = (state_33990[(1)]);
if((state_val_33991 === (7))){
var state_33990__$1 = state_33990;
var statearr_33992_35931 = state_33990__$1;
(statearr_33992_35931[(2)] = null);

(statearr_33992_35931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (1))){
var state_33990__$1 = state_33990;
var statearr_33993_35932 = state_33990__$1;
(statearr_33993_35932[(2)] = null);

(statearr_33993_35932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (4))){
var inst_33931 = (state_33990[(7)]);
var inst_33929 = (state_33990[(8)]);
var inst_33935 = (inst_33931 < inst_33929);
var state_33990__$1 = state_33990;
if(cljs.core.truth_(inst_33935)){
var statearr_33994_35933 = state_33990__$1;
(statearr_33994_35933[(1)] = (6));

} else {
var statearr_33995_35934 = state_33990__$1;
(statearr_33995_35934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (15))){
var inst_33975 = (state_33990[(9)]);
var inst_33980 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33975);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33990__$1,(17),out,inst_33980);
} else {
if((state_val_33991 === (13))){
var inst_33975 = (state_33990[(9)]);
var inst_33975__$1 = (state_33990[(2)]);
var inst_33976 = cljs.core.some(cljs.core.nil_QMARK_,inst_33975__$1);
var state_33990__$1 = (function (){var statearr_33996 = state_33990;
(statearr_33996[(9)] = inst_33975__$1);

return statearr_33996;
})();
if(cljs.core.truth_(inst_33976)){
var statearr_34000_35935 = state_33990__$1;
(statearr_34000_35935[(1)] = (14));

} else {
var statearr_34001_35936 = state_33990__$1;
(statearr_34001_35936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (6))){
var state_33990__$1 = state_33990;
var statearr_34003_35937 = state_33990__$1;
(statearr_34003_35937[(2)] = null);

(statearr_34003_35937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (17))){
var inst_33982 = (state_33990[(2)]);
var state_33990__$1 = (function (){var statearr_34018 = state_33990;
(statearr_34018[(10)] = inst_33982);

return statearr_34018;
})();
var statearr_34019_35939 = state_33990__$1;
(statearr_34019_35939[(2)] = null);

(statearr_34019_35939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (3))){
var inst_33988 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33990__$1,inst_33988);
} else {
if((state_val_33991 === (12))){
var _ = (function (){var statearr_34024 = state_33990;
(statearr_34024[(4)] = cljs.core.rest((state_33990[(4)])));

return statearr_34024;
})();
var state_33990__$1 = state_33990;
var ex34012 = (state_33990__$1[(2)]);
var statearr_34025_35940 = state_33990__$1;
(statearr_34025_35940[(5)] = ex34012);


if((ex34012 instanceof Object)){
var statearr_34031_35941 = state_33990__$1;
(statearr_34031_35941[(1)] = (11));

(statearr_34031_35941[(5)] = null);

} else {
throw ex34012;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (2))){
var inst_33928 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33929 = cnt;
var inst_33931 = (0);
var state_33990__$1 = (function (){var statearr_34048 = state_33990;
(statearr_34048[(7)] = inst_33931);

(statearr_34048[(8)] = inst_33929);

(statearr_34048[(11)] = inst_33928);

return statearr_34048;
})();
var statearr_34053_35942 = state_33990__$1;
(statearr_34053_35942[(2)] = null);

(statearr_34053_35942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (11))){
var inst_33946 = (state_33990[(2)]);
var inst_33947 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33990__$1 = (function (){var statearr_34055 = state_33990;
(statearr_34055[(12)] = inst_33946);

return statearr_34055;
})();
var statearr_34058_35943 = state_33990__$1;
(statearr_34058_35943[(2)] = inst_33947);

(statearr_34058_35943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (9))){
var inst_33931 = (state_33990[(7)]);
var _ = (function (){var statearr_34064 = state_33990;
(statearr_34064[(4)] = cljs.core.cons((12),(state_33990[(4)])));

return statearr_34064;
})();
var inst_33957 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33931) : chs__$1.call(null,inst_33931));
var inst_33958 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33931) : done.call(null,inst_33931));
var inst_33959 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33957,inst_33958);
var ___$1 = (function (){var statearr_34070 = state_33990;
(statearr_34070[(4)] = cljs.core.rest((state_33990[(4)])));

return statearr_34070;
})();
var state_33990__$1 = state_33990;
var statearr_34071_35944 = state_33990__$1;
(statearr_34071_35944[(2)] = inst_33959);

(statearr_34071_35944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (5))){
var inst_33969 = (state_33990[(2)]);
var state_33990__$1 = (function (){var statearr_34076 = state_33990;
(statearr_34076[(13)] = inst_33969);

return statearr_34076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33990__$1,(13),dchan);
} else {
if((state_val_33991 === (14))){
var inst_33978 = cljs.core.async.close_BANG_(out);
var state_33990__$1 = state_33990;
var statearr_34077_35949 = state_33990__$1;
(statearr_34077_35949[(2)] = inst_33978);

(statearr_34077_35949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (16))){
var inst_33986 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34081_35950 = state_33990__$1;
(statearr_34081_35950[(2)] = inst_33986);

(statearr_34081_35950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (10))){
var inst_33931 = (state_33990[(7)]);
var inst_33962 = (state_33990[(2)]);
var inst_33963 = (inst_33931 + (1));
var inst_33931__$1 = inst_33963;
var state_33990__$1 = (function (){var statearr_34084 = state_33990;
(statearr_34084[(7)] = inst_33931__$1);

(statearr_34084[(14)] = inst_33962);

return statearr_34084;
})();
var statearr_34087_35952 = state_33990__$1;
(statearr_34087_35952[(2)] = null);

(statearr_34087_35952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (8))){
var inst_33967 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34091_35953 = state_33990__$1;
(statearr_34091_35953[(2)] = inst_33967);

(statearr_34091_35953[(1)] = (5));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_34095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34095[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_34095[(1)] = (1));

return statearr_34095;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_33990){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_33990);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34099){var ex__31482__auto__ = e34099;
var statearr_34100_35954 = state_33990;
(statearr_34100_35954[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_33990[(4)]))){
var statearr_34103_35955 = state_33990;
(statearr_34103_35955[(1)] = cljs.core.first((state_33990[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35957 = state_33990;
state_33990 = G__35957;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_33990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_33990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34111 = f__31700__auto__();
(statearr_34111[(6)] = c__31699__auto___35930);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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
var G__34131 = arguments.length;
switch (G__34131) {
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
var c__31699__auto___35961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_34181){
var state_val_34182 = (state_34181[(1)]);
if((state_val_34182 === (7))){
var inst_34145 = (state_34181[(7)]);
var inst_34147 = (state_34181[(8)]);
var inst_34145__$1 = (state_34181[(2)]);
var inst_34147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34145__$1,(0),null);
var inst_34148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34145__$1,(1),null);
var inst_34151 = (inst_34147__$1 == null);
var state_34181__$1 = (function (){var statearr_34186 = state_34181;
(statearr_34186[(7)] = inst_34145__$1);

(statearr_34186[(8)] = inst_34147__$1);

(statearr_34186[(9)] = inst_34148);

return statearr_34186;
})();
if(cljs.core.truth_(inst_34151)){
var statearr_34187_35964 = state_34181__$1;
(statearr_34187_35964[(1)] = (8));

} else {
var statearr_34189_35965 = state_34181__$1;
(statearr_34189_35965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (1))){
var inst_34135 = cljs.core.vec(chs);
var inst_34136 = inst_34135;
var state_34181__$1 = (function (){var statearr_34193 = state_34181;
(statearr_34193[(10)] = inst_34136);

return statearr_34193;
})();
var statearr_34196_35966 = state_34181__$1;
(statearr_34196_35966[(2)] = null);

(statearr_34196_35966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (4))){
var inst_34136 = (state_34181[(10)]);
var state_34181__$1 = state_34181;
return cljs.core.async.ioc_alts_BANG_(state_34181__$1,(7),inst_34136);
} else {
if((state_val_34182 === (6))){
var inst_34171 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34202_35967 = state_34181__$1;
(statearr_34202_35967[(2)] = inst_34171);

(statearr_34202_35967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (3))){
var inst_34173 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34181__$1,inst_34173);
} else {
if((state_val_34182 === (2))){
var inst_34136 = (state_34181[(10)]);
var inst_34138 = cljs.core.count(inst_34136);
var inst_34139 = (inst_34138 > (0));
var state_34181__$1 = state_34181;
if(cljs.core.truth_(inst_34139)){
var statearr_34207_35968 = state_34181__$1;
(statearr_34207_35968[(1)] = (4));

} else {
var statearr_34208_35969 = state_34181__$1;
(statearr_34208_35969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (11))){
var inst_34136 = (state_34181[(10)]);
var inst_34164 = (state_34181[(2)]);
var tmp34205 = inst_34136;
var inst_34136__$1 = tmp34205;
var state_34181__$1 = (function (){var statearr_34214 = state_34181;
(statearr_34214[(11)] = inst_34164);

(statearr_34214[(10)] = inst_34136__$1);

return statearr_34214;
})();
var statearr_34216_35970 = state_34181__$1;
(statearr_34216_35970[(2)] = null);

(statearr_34216_35970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (9))){
var inst_34147 = (state_34181[(8)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34181__$1,(11),out,inst_34147);
} else {
if((state_val_34182 === (5))){
var inst_34169 = cljs.core.async.close_BANG_(out);
var state_34181__$1 = state_34181;
var statearr_34232_35971 = state_34181__$1;
(statearr_34232_35971[(2)] = inst_34169);

(statearr_34232_35971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (10))){
var inst_34167 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34234_35972 = state_34181__$1;
(statearr_34234_35972[(2)] = inst_34167);

(statearr_34234_35972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (8))){
var inst_34145 = (state_34181[(7)]);
var inst_34136 = (state_34181[(10)]);
var inst_34147 = (state_34181[(8)]);
var inst_34148 = (state_34181[(9)]);
var inst_34156 = (function (){var cs = inst_34136;
var vec__34141 = inst_34145;
var v = inst_34147;
var c = inst_34148;
return (function (p1__34119_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34119_SHARP_);
});
})();
var inst_34160 = cljs.core.filterv(inst_34156,inst_34136);
var inst_34136__$1 = inst_34160;
var state_34181__$1 = (function (){var statearr_34239 = state_34181;
(statearr_34239[(10)] = inst_34136__$1);

return statearr_34239;
})();
var statearr_34243_35973 = state_34181__$1;
(statearr_34243_35973[(2)] = null);

(statearr_34243_35973[(1)] = (2));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_34247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34247[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_34247[(1)] = (1));

return statearr_34247;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_34181){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_34181);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34251){var ex__31482__auto__ = e34251;
var statearr_34252_35974 = state_34181;
(statearr_34252_35974[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_34181[(4)]))){
var statearr_34253_35975 = state_34181;
(statearr_34253_35975[(1)] = cljs.core.first((state_34181[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35976 = state_34181;
state_34181 = G__35976;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_34181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_34181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34254 = f__31700__auto__();
(statearr_34254[(6)] = c__31699__auto___35961);

return statearr_34254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
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
var G__34257 = arguments.length;
switch (G__34257) {
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
var c__31699__auto___35979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_34282){
var state_val_34283 = (state_34282[(1)]);
if((state_val_34283 === (7))){
var inst_34264 = (state_34282[(7)]);
var inst_34264__$1 = (state_34282[(2)]);
var inst_34265 = (inst_34264__$1 == null);
var inst_34266 = cljs.core.not(inst_34265);
var state_34282__$1 = (function (){var statearr_34285 = state_34282;
(statearr_34285[(7)] = inst_34264__$1);

return statearr_34285;
})();
if(inst_34266){
var statearr_34286_35980 = state_34282__$1;
(statearr_34286_35980[(1)] = (8));

} else {
var statearr_34287_35981 = state_34282__$1;
(statearr_34287_35981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (1))){
var inst_34259 = (0);
var state_34282__$1 = (function (){var statearr_34288 = state_34282;
(statearr_34288[(8)] = inst_34259);

return statearr_34288;
})();
var statearr_34289_35985 = state_34282__$1;
(statearr_34289_35985[(2)] = null);

(statearr_34289_35985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (4))){
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34282__$1,(7),ch);
} else {
if((state_val_34283 === (6))){
var inst_34277 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34290_35986 = state_34282__$1;
(statearr_34290_35986[(2)] = inst_34277);

(statearr_34290_35986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (3))){
var inst_34279 = (state_34282[(2)]);
var inst_34280 = cljs.core.async.close_BANG_(out);
var state_34282__$1 = (function (){var statearr_34293 = state_34282;
(statearr_34293[(9)] = inst_34279);

return statearr_34293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34282__$1,inst_34280);
} else {
if((state_val_34283 === (2))){
var inst_34259 = (state_34282[(8)]);
var inst_34261 = (inst_34259 < n);
var state_34282__$1 = state_34282;
if(cljs.core.truth_(inst_34261)){
var statearr_34294_35987 = state_34282__$1;
(statearr_34294_35987[(1)] = (4));

} else {
var statearr_34295_35988 = state_34282__$1;
(statearr_34295_35988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (11))){
var inst_34259 = (state_34282[(8)]);
var inst_34269 = (state_34282[(2)]);
var inst_34270 = (inst_34259 + (1));
var inst_34259__$1 = inst_34270;
var state_34282__$1 = (function (){var statearr_34301 = state_34282;
(statearr_34301[(8)] = inst_34259__$1);

(statearr_34301[(10)] = inst_34269);

return statearr_34301;
})();
var statearr_34302_35989 = state_34282__$1;
(statearr_34302_35989[(2)] = null);

(statearr_34302_35989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (9))){
var state_34282__$1 = state_34282;
var statearr_34309_35990 = state_34282__$1;
(statearr_34309_35990[(2)] = null);

(statearr_34309_35990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (5))){
var state_34282__$1 = state_34282;
var statearr_34316_35991 = state_34282__$1;
(statearr_34316_35991[(2)] = null);

(statearr_34316_35991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (10))){
var inst_34274 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34321_35992 = state_34282__$1;
(statearr_34321_35992[(2)] = inst_34274);

(statearr_34321_35992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34283 === (8))){
var inst_34264 = (state_34282[(7)]);
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34282__$1,(11),out,inst_34264);
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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_34325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34325[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_34325[(1)] = (1));

return statearr_34325;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_34282){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_34282);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34326){var ex__31482__auto__ = e34326;
var statearr_34327_35994 = state_34282;
(statearr_34327_35994[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_34282[(4)]))){
var statearr_34328_35995 = state_34282;
(statearr_34328_35995[(1)] = cljs.core.first((state_34282[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_34282;
state_34282 = G__35996;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_34282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_34282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34330 = f__31700__auto__();
(statearr_34330[(6)] = c__31699__auto___35979);

return statearr_34330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34332 = (function (f,ch,meta34333){
this.f = f;
this.ch = ch;
this.meta34333 = meta34333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34334,meta34333__$1){
var self__ = this;
var _34334__$1 = this;
return (new cljs.core.async.t_cljs$core$async34332(self__.f,self__.ch,meta34333__$1));
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34334){
var self__ = this;
var _34334__$1 = this;
return self__.meta34333;
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34339 = (function (f,ch,meta34333,_,fn1,meta34340){
this.f = f;
this.ch = ch;
this.meta34333 = meta34333;
this._ = _;
this.fn1 = fn1;
this.meta34340 = meta34340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34341,meta34340__$1){
var self__ = this;
var _34341__$1 = this;
return (new cljs.core.async.t_cljs$core$async34339(self__.f,self__.ch,self__.meta34333,self__._,self__.fn1,meta34340__$1));
}));

(cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34341){
var self__ = this;
var _34341__$1 = this;
return self__.meta34340;
}));

(cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34331_SHARP_){
var G__34352 = (((p1__34331_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34331_SHARP_) : self__.f.call(null,p1__34331_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34352) : f1.call(null,G__34352));
});
}));

(cljs.core.async.t_cljs$core$async34339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34333","meta34333",-153325400,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34332","cljs.core.async/t_cljs$core$async34332",2064771566,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34340","meta34340",-156340725,null)], null);
}));

(cljs.core.async.t_cljs$core$async34339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34339");

(cljs.core.async.t_cljs$core$async34339.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34339.
 */
cljs.core.async.__GT_t_cljs$core$async34339 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34339(f__$1,ch__$1,meta34333__$1,___$2,fn1__$1,meta34340){
return (new cljs.core.async.t_cljs$core$async34339(f__$1,ch__$1,meta34333__$1,___$2,fn1__$1,meta34340));
});

}

return (new cljs.core.async.t_cljs$core$async34339(self__.f,self__.ch,self__.meta34333,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34357 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34357) : self__.f.call(null,G__34357));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34333","meta34333",-153325400,null)], null);
}));

(cljs.core.async.t_cljs$core$async34332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34332");

(cljs.core.async.t_cljs$core$async34332.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34332.
 */
cljs.core.async.__GT_t_cljs$core$async34332 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34332(f__$1,ch__$1,meta34333){
return (new cljs.core.async.t_cljs$core$async34332(f__$1,ch__$1,meta34333));
});

}

return (new cljs.core.async.t_cljs$core$async34332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34364 = (function (f,ch,meta34365){
this.f = f;
this.ch = ch;
this.meta34365 = meta34365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34366,meta34365__$1){
var self__ = this;
var _34366__$1 = this;
return (new cljs.core.async.t_cljs$core$async34364(self__.f,self__.ch,meta34365__$1));
}));

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34366){
var self__ = this;
var _34366__$1 = this;
return self__.meta34365;
}));

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34365","meta34365",2014471108,null)], null);
}));

(cljs.core.async.t_cljs$core$async34364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34364");

(cljs.core.async.t_cljs$core$async34364.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34364.
 */
cljs.core.async.__GT_t_cljs$core$async34364 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34364(f__$1,ch__$1,meta34365){
return (new cljs.core.async.t_cljs$core$async34364(f__$1,ch__$1,meta34365));
});

}

return (new cljs.core.async.t_cljs$core$async34364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34394 = (function (p,ch,meta34395){
this.p = p;
this.ch = ch;
this.meta34395 = meta34395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34396,meta34395__$1){
var self__ = this;
var _34396__$1 = this;
return (new cljs.core.async.t_cljs$core$async34394(self__.p,self__.ch,meta34395__$1));
}));

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34396){
var self__ = this;
var _34396__$1 = this;
return self__.meta34395;
}));

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34395","meta34395",1221526784,null)], null);
}));

(cljs.core.async.t_cljs$core$async34394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34394");

(cljs.core.async.t_cljs$core$async34394.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34394.
 */
cljs.core.async.__GT_t_cljs$core$async34394 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34394(p__$1,ch__$1,meta34395){
return (new cljs.core.async.t_cljs$core$async34394(p__$1,ch__$1,meta34395));
});

}

return (new cljs.core.async.t_cljs$core$async34394(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34459 = arguments.length;
switch (G__34459) {
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
var c__31699__auto___36009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_34483){
var state_val_34485 = (state_34483[(1)]);
if((state_val_34485 === (7))){
var inst_34479 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34514_36010 = state_34483__$1;
(statearr_34514_36010[(2)] = inst_34479);

(statearr_34514_36010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (1))){
var state_34483__$1 = state_34483;
var statearr_34519_36011 = state_34483__$1;
(statearr_34519_36011[(2)] = null);

(statearr_34519_36011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (4))){
var inst_34465 = (state_34483[(7)]);
var inst_34465__$1 = (state_34483[(2)]);
var inst_34466 = (inst_34465__$1 == null);
var state_34483__$1 = (function (){var statearr_34531 = state_34483;
(statearr_34531[(7)] = inst_34465__$1);

return statearr_34531;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34539_36012 = state_34483__$1;
(statearr_34539_36012[(1)] = (5));

} else {
var statearr_34541_36013 = state_34483__$1;
(statearr_34541_36013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var inst_34465 = (state_34483[(7)]);
var inst_34470 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34465) : p.call(null,inst_34465));
var state_34483__$1 = state_34483;
if(cljs.core.truth_(inst_34470)){
var statearr_34547_36014 = state_34483__$1;
(statearr_34547_36014[(1)] = (8));

} else {
var statearr_34548_36015 = state_34483__$1;
(statearr_34548_36015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (3))){
var inst_34481 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34483__$1,inst_34481);
} else {
if((state_val_34485 === (2))){
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(4),ch);
} else {
if((state_val_34485 === (11))){
var inst_34473 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34551_36016 = state_34483__$1;
(statearr_34551_36016[(2)] = inst_34473);

(statearr_34551_36016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (9))){
var state_34483__$1 = state_34483;
var statearr_34555_36017 = state_34483__$1;
(statearr_34555_36017[(2)] = null);

(statearr_34555_36017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var inst_34468 = cljs.core.async.close_BANG_(out);
var state_34483__$1 = state_34483;
var statearr_34560_36018 = state_34483__$1;
(statearr_34560_36018[(2)] = inst_34468);

(statearr_34560_36018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (10))){
var inst_34476 = (state_34483[(2)]);
var state_34483__$1 = (function (){var statearr_34561 = state_34483;
(statearr_34561[(8)] = inst_34476);

return statearr_34561;
})();
var statearr_34562_36019 = state_34483__$1;
(statearr_34562_36019[(2)] = null);

(statearr_34562_36019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (8))){
var inst_34465 = (state_34483[(7)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34483__$1,(11),out,inst_34465);
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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_34483){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_34483);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34566){var ex__31482__auto__ = e34566;
var statearr_34567_36020 = state_34483;
(statearr_34567_36020[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_34483[(4)]))){
var statearr_34568_36021 = state_34483;
(statearr_34568_36021[(1)] = cljs.core.first((state_34483[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36022 = state_34483;
state_34483 = G__36022;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34576 = f__31700__auto__();
(statearr_34576[(6)] = c__31699__auto___36009);

return statearr_34576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34585 = arguments.length;
switch (G__34585) {
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
var c__31699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_34660){
var state_val_34661 = (state_34660[(1)]);
if((state_val_34661 === (7))){
var inst_34654 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34663_36024 = state_34660__$1;
(statearr_34663_36024[(2)] = inst_34654);

(statearr_34663_36024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (20))){
var inst_34620 = (state_34660[(7)]);
var inst_34635 = (state_34660[(2)]);
var inst_34636 = cljs.core.next(inst_34620);
var inst_34604 = inst_34636;
var inst_34605 = null;
var inst_34606 = (0);
var inst_34607 = (0);
var state_34660__$1 = (function (){var statearr_34666 = state_34660;
(statearr_34666[(8)] = inst_34635);

(statearr_34666[(9)] = inst_34605);

(statearr_34666[(10)] = inst_34604);

(statearr_34666[(11)] = inst_34607);

(statearr_34666[(12)] = inst_34606);

return statearr_34666;
})();
var statearr_34668_36025 = state_34660__$1;
(statearr_34668_36025[(2)] = null);

(statearr_34668_36025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (1))){
var state_34660__$1 = state_34660;
var statearr_34670_36029 = state_34660__$1;
(statearr_34670_36029[(2)] = null);

(statearr_34670_36029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (4))){
var inst_34593 = (state_34660[(13)]);
var inst_34593__$1 = (state_34660[(2)]);
var inst_34594 = (inst_34593__$1 == null);
var state_34660__$1 = (function (){var statearr_34672 = state_34660;
(statearr_34672[(13)] = inst_34593__$1);

return statearr_34672;
})();
if(cljs.core.truth_(inst_34594)){
var statearr_34673_36030 = state_34660__$1;
(statearr_34673_36030[(1)] = (5));

} else {
var statearr_34674_36031 = state_34660__$1;
(statearr_34674_36031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (15))){
var state_34660__$1 = state_34660;
var statearr_34678_36036 = state_34660__$1;
(statearr_34678_36036[(2)] = null);

(statearr_34678_36036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (21))){
var state_34660__$1 = state_34660;
var statearr_34679_36037 = state_34660__$1;
(statearr_34679_36037[(2)] = null);

(statearr_34679_36037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (13))){
var inst_34605 = (state_34660[(9)]);
var inst_34604 = (state_34660[(10)]);
var inst_34607 = (state_34660[(11)]);
var inst_34606 = (state_34660[(12)]);
var inst_34616 = (state_34660[(2)]);
var inst_34617 = (inst_34607 + (1));
var tmp34675 = inst_34605;
var tmp34676 = inst_34604;
var tmp34677 = inst_34606;
var inst_34604__$1 = tmp34676;
var inst_34605__$1 = tmp34675;
var inst_34606__$1 = tmp34677;
var inst_34607__$1 = inst_34617;
var state_34660__$1 = (function (){var statearr_34681 = state_34660;
(statearr_34681[(14)] = inst_34616);

(statearr_34681[(9)] = inst_34605__$1);

(statearr_34681[(10)] = inst_34604__$1);

(statearr_34681[(11)] = inst_34607__$1);

(statearr_34681[(12)] = inst_34606__$1);

return statearr_34681;
})();
var statearr_34686_36041 = state_34660__$1;
(statearr_34686_36041[(2)] = null);

(statearr_34686_36041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (22))){
var state_34660__$1 = state_34660;
var statearr_34690_36042 = state_34660__$1;
(statearr_34690_36042[(2)] = null);

(statearr_34690_36042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (6))){
var inst_34593 = (state_34660[(13)]);
var inst_34602 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34593) : f.call(null,inst_34593));
var inst_34603 = cljs.core.seq(inst_34602);
var inst_34604 = inst_34603;
var inst_34605 = null;
var inst_34606 = (0);
var inst_34607 = (0);
var state_34660__$1 = (function (){var statearr_34692 = state_34660;
(statearr_34692[(9)] = inst_34605);

(statearr_34692[(10)] = inst_34604);

(statearr_34692[(11)] = inst_34607);

(statearr_34692[(12)] = inst_34606);

return statearr_34692;
})();
var statearr_34694_36046 = state_34660__$1;
(statearr_34694_36046[(2)] = null);

(statearr_34694_36046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (17))){
var inst_34620 = (state_34660[(7)]);
var inst_34624 = cljs.core.chunk_first(inst_34620);
var inst_34625 = cljs.core.chunk_rest(inst_34620);
var inst_34626 = cljs.core.count(inst_34624);
var inst_34604 = inst_34625;
var inst_34605 = inst_34624;
var inst_34606 = inst_34626;
var inst_34607 = (0);
var state_34660__$1 = (function (){var statearr_34695 = state_34660;
(statearr_34695[(9)] = inst_34605);

(statearr_34695[(10)] = inst_34604);

(statearr_34695[(11)] = inst_34607);

(statearr_34695[(12)] = inst_34606);

return statearr_34695;
})();
var statearr_34697_36047 = state_34660__$1;
(statearr_34697_36047[(2)] = null);

(statearr_34697_36047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (3))){
var inst_34658 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34660__$1,inst_34658);
} else {
if((state_val_34661 === (12))){
var inst_34644 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34702_36048 = state_34660__$1;
(statearr_34702_36048[(2)] = inst_34644);

(statearr_34702_36048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (2))){
var state_34660__$1 = state_34660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34660__$1,(4),in$);
} else {
if((state_val_34661 === (23))){
var inst_34652 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34705_36052 = state_34660__$1;
(statearr_34705_36052[(2)] = inst_34652);

(statearr_34705_36052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (19))){
var inst_34639 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34711_36053 = state_34660__$1;
(statearr_34711_36053[(2)] = inst_34639);

(statearr_34711_36053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (11))){
var inst_34604 = (state_34660[(10)]);
var inst_34620 = (state_34660[(7)]);
var inst_34620__$1 = cljs.core.seq(inst_34604);
var state_34660__$1 = (function (){var statearr_34712 = state_34660;
(statearr_34712[(7)] = inst_34620__$1);

return statearr_34712;
})();
if(inst_34620__$1){
var statearr_34714_36054 = state_34660__$1;
(statearr_34714_36054[(1)] = (14));

} else {
var statearr_34715_36055 = state_34660__$1;
(statearr_34715_36055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (9))){
var inst_34646 = (state_34660[(2)]);
var inst_34647 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34660__$1 = (function (){var statearr_34718 = state_34660;
(statearr_34718[(15)] = inst_34646);

return statearr_34718;
})();
if(cljs.core.truth_(inst_34647)){
var statearr_34721_36056 = state_34660__$1;
(statearr_34721_36056[(1)] = (21));

} else {
var statearr_34723_36060 = state_34660__$1;
(statearr_34723_36060[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (5))){
var inst_34596 = cljs.core.async.close_BANG_(out);
var state_34660__$1 = state_34660;
var statearr_34724_36061 = state_34660__$1;
(statearr_34724_36061[(2)] = inst_34596);

(statearr_34724_36061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (14))){
var inst_34620 = (state_34660[(7)]);
var inst_34622 = cljs.core.chunked_seq_QMARK_(inst_34620);
var state_34660__$1 = state_34660;
if(inst_34622){
var statearr_34725_36062 = state_34660__$1;
(statearr_34725_36062[(1)] = (17));

} else {
var statearr_34728_36063 = state_34660__$1;
(statearr_34728_36063[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (16))){
var inst_34642 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34729_36064 = state_34660__$1;
(statearr_34729_36064[(2)] = inst_34642);

(statearr_34729_36064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (10))){
var inst_34605 = (state_34660[(9)]);
var inst_34607 = (state_34660[(11)]);
var inst_34613 = cljs.core._nth(inst_34605,inst_34607);
var state_34660__$1 = state_34660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34660__$1,(13),out,inst_34613);
} else {
if((state_val_34661 === (18))){
var inst_34620 = (state_34660[(7)]);
var inst_34629 = cljs.core.first(inst_34620);
var state_34660__$1 = state_34660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34660__$1,(20),out,inst_34629);
} else {
if((state_val_34661 === (8))){
var inst_34607 = (state_34660[(11)]);
var inst_34606 = (state_34660[(12)]);
var inst_34610 = (inst_34607 < inst_34606);
var inst_34611 = inst_34610;
var state_34660__$1 = state_34660;
if(cljs.core.truth_(inst_34611)){
var statearr_34737_36066 = state_34660__$1;
(statearr_34737_36066[(1)] = (10));

} else {
var statearr_34738_36067 = state_34660__$1;
(statearr_34738_36067[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31479__auto____0 = (function (){
var statearr_34739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34739[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31479__auto__);

(statearr_34739[(1)] = (1));

return statearr_34739;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31479__auto____1 = (function (state_34660){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_34660);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34744){var ex__31482__auto__ = e34744;
var statearr_34749_36068 = state_34660;
(statearr_34749_36068[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_34660[(4)]))){
var statearr_34750_36072 = state_34660;
(statearr_34750_36072[(1)] = cljs.core.first((state_34660[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36079 = state_34660;
state_34660 = G__36079;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31479__auto__ = function(state_34660){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31479__auto____1.call(this,state_34660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34752 = f__31700__auto__();
(statearr_34752[(6)] = c__31699__auto__);

return statearr_34752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));

return c__31699__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34763 = arguments.length;
switch (G__34763) {
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
var G__34767 = arguments.length;
switch (G__34767) {
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
var G__34773 = arguments.length;
switch (G__34773) {
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
var c__31699__auto___36092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_34799){
var state_val_34800 = (state_34799[(1)]);
if((state_val_34800 === (7))){
var inst_34794 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34802_36093 = state_34799__$1;
(statearr_34802_36093[(2)] = inst_34794);

(statearr_34802_36093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (1))){
var inst_34776 = null;
var state_34799__$1 = (function (){var statearr_34803 = state_34799;
(statearr_34803[(7)] = inst_34776);

return statearr_34803;
})();
var statearr_34804_36095 = state_34799__$1;
(statearr_34804_36095[(2)] = null);

(statearr_34804_36095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (4))){
var inst_34779 = (state_34799[(8)]);
var inst_34779__$1 = (state_34799[(2)]);
var inst_34780 = (inst_34779__$1 == null);
var inst_34781 = cljs.core.not(inst_34780);
var state_34799__$1 = (function (){var statearr_34805 = state_34799;
(statearr_34805[(8)] = inst_34779__$1);

return statearr_34805;
})();
if(inst_34781){
var statearr_34806_36097 = state_34799__$1;
(statearr_34806_36097[(1)] = (5));

} else {
var statearr_34807_36098 = state_34799__$1;
(statearr_34807_36098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (6))){
var state_34799__$1 = state_34799;
var statearr_34809_36099 = state_34799__$1;
(statearr_34809_36099[(2)] = null);

(statearr_34809_36099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (3))){
var inst_34796 = (state_34799[(2)]);
var inst_34797 = cljs.core.async.close_BANG_(out);
var state_34799__$1 = (function (){var statearr_34811 = state_34799;
(statearr_34811[(9)] = inst_34796);

return statearr_34811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34799__$1,inst_34797);
} else {
if((state_val_34800 === (2))){
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34799__$1,(4),ch);
} else {
if((state_val_34800 === (11))){
var inst_34779 = (state_34799[(8)]);
var inst_34788 = (state_34799[(2)]);
var inst_34776 = inst_34779;
var state_34799__$1 = (function (){var statearr_34812 = state_34799;
(statearr_34812[(7)] = inst_34776);

(statearr_34812[(10)] = inst_34788);

return statearr_34812;
})();
var statearr_34813_36100 = state_34799__$1;
(statearr_34813_36100[(2)] = null);

(statearr_34813_36100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (9))){
var inst_34779 = (state_34799[(8)]);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34799__$1,(11),out,inst_34779);
} else {
if((state_val_34800 === (5))){
var inst_34779 = (state_34799[(8)]);
var inst_34776 = (state_34799[(7)]);
var inst_34783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34779,inst_34776);
var state_34799__$1 = state_34799;
if(inst_34783){
var statearr_34815_36103 = state_34799__$1;
(statearr_34815_36103[(1)] = (8));

} else {
var statearr_34816_36104 = state_34799__$1;
(statearr_34816_36104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (10))){
var inst_34791 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34817_36105 = state_34799__$1;
(statearr_34817_36105[(2)] = inst_34791);

(statearr_34817_36105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (8))){
var inst_34776 = (state_34799[(7)]);
var tmp34814 = inst_34776;
var inst_34776__$1 = tmp34814;
var state_34799__$1 = (function (){var statearr_34822 = state_34799;
(statearr_34822[(7)] = inst_34776__$1);

return statearr_34822;
})();
var statearr_34824_36112 = state_34799__$1;
(statearr_34824_36112[(2)] = null);

(statearr_34824_36112[(1)] = (2));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_34826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_34799){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_34799);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34827){var ex__31482__auto__ = e34827;
var statearr_34829_36113 = state_34799;
(statearr_34829_36113[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_34799[(4)]))){
var statearr_34830_36114 = state_34799;
(statearr_34830_36114[(1)] = cljs.core.first((state_34799[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36115 = state_34799;
state_34799 = G__36115;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34839 = f__31700__auto__();
(statearr_34839[(6)] = c__31699__auto___36092);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34868 = arguments.length;
switch (G__34868) {
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
var c__31699__auto___36117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_34920){
var state_val_34921 = (state_34920[(1)]);
if((state_val_34921 === (7))){
var inst_34916 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34923_36118 = state_34920__$1;
(statearr_34923_36118[(2)] = inst_34916);

(statearr_34923_36118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (1))){
var inst_34875 = (new Array(n));
var inst_34876 = inst_34875;
var inst_34877 = (0);
var state_34920__$1 = (function (){var statearr_34924 = state_34920;
(statearr_34924[(7)] = inst_34876);

(statearr_34924[(8)] = inst_34877);

return statearr_34924;
})();
var statearr_34925_36119 = state_34920__$1;
(statearr_34925_36119[(2)] = null);

(statearr_34925_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (4))){
var inst_34880 = (state_34920[(9)]);
var inst_34880__$1 = (state_34920[(2)]);
var inst_34886 = (inst_34880__$1 == null);
var inst_34887 = cljs.core.not(inst_34886);
var state_34920__$1 = (function (){var statearr_34926 = state_34920;
(statearr_34926[(9)] = inst_34880__$1);

return statearr_34926;
})();
if(inst_34887){
var statearr_34927_36123 = state_34920__$1;
(statearr_34927_36123[(1)] = (5));

} else {
var statearr_34928_36124 = state_34920__$1;
(statearr_34928_36124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (15))){
var inst_34907 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34929_36125 = state_34920__$1;
(statearr_34929_36125[(2)] = inst_34907);

(statearr_34929_36125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (13))){
var state_34920__$1 = state_34920;
var statearr_34932_36126 = state_34920__$1;
(statearr_34932_36126[(2)] = null);

(statearr_34932_36126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (6))){
var inst_34877 = (state_34920[(8)]);
var inst_34903 = (inst_34877 > (0));
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34903)){
var statearr_34933_36127 = state_34920__$1;
(statearr_34933_36127[(1)] = (12));

} else {
var statearr_34934_36128 = state_34920__$1;
(statearr_34934_36128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (3))){
var inst_34918 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34920__$1,inst_34918);
} else {
if((state_val_34921 === (12))){
var inst_34876 = (state_34920[(7)]);
var inst_34905 = cljs.core.vec(inst_34876);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34920__$1,(15),out,inst_34905);
} else {
if((state_val_34921 === (2))){
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34920__$1,(4),ch);
} else {
if((state_val_34921 === (11))){
var inst_34897 = (state_34920[(2)]);
var inst_34898 = (new Array(n));
var inst_34876 = inst_34898;
var inst_34877 = (0);
var state_34920__$1 = (function (){var statearr_34938 = state_34920;
(statearr_34938[(10)] = inst_34897);

(statearr_34938[(7)] = inst_34876);

(statearr_34938[(8)] = inst_34877);

return statearr_34938;
})();
var statearr_34939_36145 = state_34920__$1;
(statearr_34939_36145[(2)] = null);

(statearr_34939_36145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (9))){
var inst_34876 = (state_34920[(7)]);
var inst_34895 = cljs.core.vec(inst_34876);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34920__$1,(11),out,inst_34895);
} else {
if((state_val_34921 === (5))){
var inst_34876 = (state_34920[(7)]);
var inst_34877 = (state_34920[(8)]);
var inst_34880 = (state_34920[(9)]);
var inst_34890 = (state_34920[(11)]);
var inst_34889 = (inst_34876[inst_34877] = inst_34880);
var inst_34890__$1 = (inst_34877 + (1));
var inst_34891 = (inst_34890__$1 < n);
var state_34920__$1 = (function (){var statearr_34940 = state_34920;
(statearr_34940[(11)] = inst_34890__$1);

(statearr_34940[(12)] = inst_34889);

return statearr_34940;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34941_36146 = state_34920__$1;
(statearr_34941_36146[(1)] = (8));

} else {
var statearr_34942_36147 = state_34920__$1;
(statearr_34942_36147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (14))){
var inst_34910 = (state_34920[(2)]);
var inst_34914 = cljs.core.async.close_BANG_(out);
var state_34920__$1 = (function (){var statearr_34947 = state_34920;
(statearr_34947[(13)] = inst_34910);

return statearr_34947;
})();
var statearr_34948_36148 = state_34920__$1;
(statearr_34948_36148[(2)] = inst_34914);

(statearr_34948_36148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (10))){
var inst_34901 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34949_36149 = state_34920__$1;
(statearr_34949_36149[(2)] = inst_34901);

(statearr_34949_36149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (8))){
var inst_34876 = (state_34920[(7)]);
var inst_34890 = (state_34920[(11)]);
var tmp34946 = inst_34876;
var inst_34876__$1 = tmp34946;
var inst_34877 = inst_34890;
var state_34920__$1 = (function (){var statearr_34950 = state_34920;
(statearr_34950[(7)] = inst_34876__$1);

(statearr_34950[(8)] = inst_34877);

return statearr_34950;
})();
var statearr_34951_36150 = state_34920__$1;
(statearr_34951_36150[(2)] = null);

(statearr_34951_36150[(1)] = (2));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_34954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34954[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_34954[(1)] = (1));

return statearr_34954;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_34920){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_34920);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e34955){var ex__31482__auto__ = e34955;
var statearr_34956_36157 = state_34920;
(statearr_34956_36157[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_34920[(4)]))){
var statearr_34957_36158 = state_34920;
(statearr_34957_36158[(1)] = cljs.core.first((state_34920[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36159 = state_34920;
state_34920 = G__36159;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_34920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_34920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_34958 = f__31700__auto__();
(statearr_34958[(6)] = c__31699__auto___36117);

return statearr_34958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34963 = arguments.length;
switch (G__34963) {
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
var c__31699__auto___36161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31700__auto__ = (function (){var switch__31478__auto__ = (function (state_35013){
var state_val_35014 = (state_35013[(1)]);
if((state_val_35014 === (7))){
var inst_35009 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
var statearr_35015_36162 = state_35013__$1;
(statearr_35015_36162[(2)] = inst_35009);

(statearr_35015_36162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (1))){
var inst_34966 = [];
var inst_34967 = inst_34966;
var inst_34968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35013__$1 = (function (){var statearr_35016 = state_35013;
(statearr_35016[(7)] = inst_34968);

(statearr_35016[(8)] = inst_34967);

return statearr_35016;
})();
var statearr_35017_36165 = state_35013__$1;
(statearr_35017_36165[(2)] = null);

(statearr_35017_36165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (4))){
var inst_34971 = (state_35013[(9)]);
var inst_34971__$1 = (state_35013[(2)]);
var inst_34972 = (inst_34971__$1 == null);
var inst_34973 = cljs.core.not(inst_34972);
var state_35013__$1 = (function (){var statearr_35022 = state_35013;
(statearr_35022[(9)] = inst_34971__$1);

return statearr_35022;
})();
if(inst_34973){
var statearr_35027_36168 = state_35013__$1;
(statearr_35027_36168[(1)] = (5));

} else {
var statearr_35028_36169 = state_35013__$1;
(statearr_35028_36169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (15))){
var inst_34967 = (state_35013[(8)]);
var inst_35001 = cljs.core.vec(inst_34967);
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35013__$1,(18),out,inst_35001);
} else {
if((state_val_35014 === (13))){
var inst_34996 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
var statearr_35029_36171 = state_35013__$1;
(statearr_35029_36171[(2)] = inst_34996);

(statearr_35029_36171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (6))){
var inst_34967 = (state_35013[(8)]);
var inst_34998 = inst_34967.length;
var inst_34999 = (inst_34998 > (0));
var state_35013__$1 = state_35013;
if(cljs.core.truth_(inst_34999)){
var statearr_35030_36172 = state_35013__$1;
(statearr_35030_36172[(1)] = (15));

} else {
var statearr_35031_36173 = state_35013__$1;
(statearr_35031_36173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (17))){
var inst_35006 = (state_35013[(2)]);
var inst_35007 = cljs.core.async.close_BANG_(out);
var state_35013__$1 = (function (){var statearr_35033 = state_35013;
(statearr_35033[(10)] = inst_35006);

return statearr_35033;
})();
var statearr_35034_36174 = state_35013__$1;
(statearr_35034_36174[(2)] = inst_35007);

(statearr_35034_36174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (3))){
var inst_35011 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35013__$1,inst_35011);
} else {
if((state_val_35014 === (12))){
var inst_34967 = (state_35013[(8)]);
var inst_34989 = cljs.core.vec(inst_34967);
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35013__$1,(14),out,inst_34989);
} else {
if((state_val_35014 === (2))){
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35013__$1,(4),ch);
} else {
if((state_val_35014 === (11))){
var inst_34971 = (state_35013[(9)]);
var inst_34975 = (state_35013[(11)]);
var inst_34967 = (state_35013[(8)]);
var inst_34986 = inst_34967.push(inst_34971);
var tmp35035 = inst_34967;
var inst_34967__$1 = tmp35035;
var inst_34968 = inst_34975;
var state_35013__$1 = (function (){var statearr_35036 = state_35013;
(statearr_35036[(12)] = inst_34986);

(statearr_35036[(7)] = inst_34968);

(statearr_35036[(8)] = inst_34967__$1);

return statearr_35036;
})();
var statearr_35038_36177 = state_35013__$1;
(statearr_35038_36177[(2)] = null);

(statearr_35038_36177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (9))){
var inst_34968 = (state_35013[(7)]);
var inst_34982 = cljs.core.keyword_identical_QMARK_(inst_34968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35013__$1 = state_35013;
var statearr_35039_36178 = state_35013__$1;
(statearr_35039_36178[(2)] = inst_34982);

(statearr_35039_36178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (5))){
var inst_34971 = (state_35013[(9)]);
var inst_34975 = (state_35013[(11)]);
var inst_34979 = (state_35013[(13)]);
var inst_34968 = (state_35013[(7)]);
var inst_34975__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34971) : f.call(null,inst_34971));
var inst_34979__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34975__$1,inst_34968);
var state_35013__$1 = (function (){var statearr_35041 = state_35013;
(statearr_35041[(11)] = inst_34975__$1);

(statearr_35041[(13)] = inst_34979__$1);

return statearr_35041;
})();
if(inst_34979__$1){
var statearr_35042_36183 = state_35013__$1;
(statearr_35042_36183[(1)] = (8));

} else {
var statearr_35043_36184 = state_35013__$1;
(statearr_35043_36184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (14))){
var inst_34971 = (state_35013[(9)]);
var inst_34975 = (state_35013[(11)]);
var inst_34991 = (state_35013[(2)]);
var inst_34992 = [];
var inst_34993 = inst_34992.push(inst_34971);
var inst_34967 = inst_34992;
var inst_34968 = inst_34975;
var state_35013__$1 = (function (){var statearr_35044 = state_35013;
(statearr_35044[(14)] = inst_34993);

(statearr_35044[(15)] = inst_34991);

(statearr_35044[(7)] = inst_34968);

(statearr_35044[(8)] = inst_34967);

return statearr_35044;
})();
var statearr_35047_36185 = state_35013__$1;
(statearr_35047_36185[(2)] = null);

(statearr_35047_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (16))){
var state_35013__$1 = state_35013;
var statearr_35051_36186 = state_35013__$1;
(statearr_35051_36186[(2)] = null);

(statearr_35051_36186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (10))){
var inst_34984 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
if(cljs.core.truth_(inst_34984)){
var statearr_35053_36187 = state_35013__$1;
(statearr_35053_36187[(1)] = (11));

} else {
var statearr_35054_36188 = state_35013__$1;
(statearr_35054_36188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (18))){
var inst_35003 = (state_35013[(2)]);
var state_35013__$1 = state_35013;
var statearr_35055_36189 = state_35013__$1;
(statearr_35055_36189[(2)] = inst_35003);

(statearr_35055_36189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35014 === (8))){
var inst_34979 = (state_35013[(13)]);
var state_35013__$1 = state_35013;
var statearr_35056_36190 = state_35013__$1;
(statearr_35056_36190[(2)] = inst_34979);

(statearr_35056_36190[(1)] = (10));


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
var cljs$core$async$state_machine__31479__auto__ = null;
var cljs$core$async$state_machine__31479__auto____0 = (function (){
var statearr_35059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35059[(0)] = cljs$core$async$state_machine__31479__auto__);

(statearr_35059[(1)] = (1));

return statearr_35059;
});
var cljs$core$async$state_machine__31479__auto____1 = (function (state_35013){
while(true){
var ret_value__31480__auto__ = (function (){try{while(true){
var result__31481__auto__ = switch__31478__auto__(state_35013);
if(cljs.core.keyword_identical_QMARK_(result__31481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31481__auto__;
}
break;
}
}catch (e35061){var ex__31482__auto__ = e35061;
var statearr_35066_36192 = state_35013;
(statearr_35066_36192[(2)] = ex__31482__auto__);


if(cljs.core.seq((state_35013[(4)]))){
var statearr_35071_36194 = state_35013;
(statearr_35071_36194[(1)] = cljs.core.first((state_35013[(4)])));

} else {
throw ex__31482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36195 = state_35013;
state_35013 = G__36195;
continue;
} else {
return ret_value__31480__auto__;
}
break;
}
});
cljs$core$async$state_machine__31479__auto__ = function(state_35013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31479__auto____1.call(this,state_35013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31479__auto____0;
cljs$core$async$state_machine__31479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31479__auto____1;
return cljs$core$async$state_machine__31479__auto__;
})()
})();
var state__31701__auto__ = (function (){var statearr_35100 = f__31700__auto__();
(statearr_35100[(6)] = c__31699__auto___36161);

return statearr_35100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31701__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
