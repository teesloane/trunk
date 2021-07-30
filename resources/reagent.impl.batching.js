var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.debug.js");
require("./reagent.impl.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.impl.batching.js");

goog.provide('reagent.impl.batching');
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.mount_count !== 'undefined')){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return (reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1)));
});
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = (((!(reagent.impl.util.is_client)))?reagent.impl.batching.fake_raf:(function (){var w = window;
return (function (){var or__4212__auto__ = w.requestAnimationFrame;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = w.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = w.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var or__4212__auto____$3 = w.msRequestAnimationFrame;
if(cljs.core.truth_(or__4212__auto____$3)){
return or__4212__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})().bind(w);
})());
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return (c1.cljsMountOrder - c2.cljsMountOrder);
});
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__4695__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4695__auto__)){
var c_36378 = (a[i]);
if(c_36378.cljsIsDirty === true){
c_36378.forceUpdate();
} else {
}

var G__36379 = (i + (1));
i = G__36379;
continue;
} else {
return null;
}
break;
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
reagent.impl.batching.ratom_flush = (function reagent$impl$batching$ratom_flush(){
return null;
});
}
reagent.impl.batching.run_funs = (function reagent$impl$batching$run_funs(fs){
var n__4695__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__4695__auto__)){
var fexpr__36328_36381 = (fs[i]);
(fexpr__36328_36381.cljs$core$IFn$_invoke$arity$0 ? fexpr__36328_36381.cljs$core$IFn$_invoke$arity$0() : fexpr__36328_36381.call(null));

var G__36382 = (i + (1));
i = G__36382;
continue;
} else {
return null;
}
break;
}
});
reagent.impl.batching.enqueue = (function reagent$impl$batching$enqueue(queue,fs,f){
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

fs.push(f);

return queue.schedule();
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
var temp__5757__auto__ = this$.afterRender;
if((temp__5757__auto__ == null)){
return null;
} else {
var fs = temp__5757__auto__;
(this$.afterRender = null);

return reagent.impl.batching.run_funs(fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
if((this$.componentQueue == null)){
(this$.componentQueue = []);
} else {
}

return reagent.impl.batching.enqueue(this$,this$.componentQueue,c);
}));

(reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

var G__36338 = (function (){
return this$.run_queues();
});
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__36338) : reagent.impl.batching.next_tick.call(null,G__36338));
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_before_flush = (function (){
var self__ = this;
var this$ = this;
var temp__5757__auto__ = this$.beforeFlush;
if((temp__5757__auto__ == null)){
return null;
} else {
var fs = temp__5757__auto__;
(this$.beforeFlush = null);

return reagent.impl.batching.run_funs(fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.flush_before_flush();

reagent.impl.batching.ratom_flush();

this$.flush_render();

return this$.flush_after_render();
}));

(reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
if((this$.beforeFlush == null)){
(this$.beforeFlush = []);
} else {
}

return reagent.impl.batching.enqueue(this$,this$.beforeFlush,f);
}));

(reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
if((this$.afterRender == null)){
(this$.afterRender = []);
} else {
}

return reagent.impl.batching.enqueue(this$,this$.afterRender,f);
}));

(reagent.impl.batching.RenderQueue.prototype.flush_render = (function (){
var self__ = this;
var this$ = this;
var temp__5757__auto__ = this$.componentQueue;
if((temp__5757__auto__ == null)){
return null;
} else {
var fs = temp__5757__auto__;
(this$.componentQueue = null);

return reagent.impl.batching.run_queue(fs);
}
}));

(reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue");

(reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for reagent.impl.batching/RenderQueue.
 */
reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.render_queue !== 'undefined')){
} else {
reagent.impl.batching.render_queue = reagent.impl.batching.__GT_RenderQueue(false);
}
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.flush_queues();
});
reagent.impl.batching.flush_after_render = (function reagent$impl$batching$flush_after_render(){
return reagent.impl.batching.render_queue.flush_after_render();
});
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
if(cljs.core.truth_(c.cljsIsDirty)){
return null;
} else {
(c.cljsIsDirty = true);

return reagent.impl.batching.render_queue.queue_render(c);
}
});
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c.cljsIsDirty = false);
});
reagent.impl.batching.do_before_flush = (function reagent$impl$batching$do_before_flush(f){
return reagent.impl.batching.render_queue.add_before_flush(f);
});
reagent.impl.batching.do_after_render = (function reagent$impl$batching$do_after_render(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.schedule = (function reagent$impl$batching$schedule(){
if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});
Object.defineProperty(module.exports, "fake_raf", { enumerable: false, get: function() { return reagent.impl.batching.fake_raf; } });
Object.defineProperty(module.exports, "run_funs", { enumerable: false, get: function() { return reagent.impl.batching.run_funs; } });
Object.defineProperty(module.exports, "do_before_flush", { enumerable: false, get: function() { return reagent.impl.batching.do_before_flush; } });
Object.defineProperty(module.exports, "flush_after_render", { enumerable: false, get: function() { return reagent.impl.batching.flush_after_render; } });
Object.defineProperty(module.exports, "queue_render", { enumerable: false, get: function() { return reagent.impl.batching.queue_render; } });
Object.defineProperty(module.exports, "next_tick", { enumerable: false, get: function() { return reagent.impl.batching.next_tick; } });
Object.defineProperty(module.exports, "flush", { enumerable: false, get: function() { return reagent.impl.batching.flush; } });
Object.defineProperty(module.exports, "mark_rendered", { enumerable: false, get: function() { return reagent.impl.batching.mark_rendered; } });
Object.defineProperty(module.exports, "schedule", { enumerable: false, get: function() { return reagent.impl.batching.schedule; } });
Object.defineProperty(module.exports, "render_queue", { enumerable: false, get: function() { return reagent.impl.batching.render_queue; } });
Object.defineProperty(module.exports, "RenderQueue", { enumerable: false, get: function() { return reagent.impl.batching.RenderQueue; } });
Object.defineProperty(module.exports, "compare_mount_order", { enumerable: false, get: function() { return reagent.impl.batching.compare_mount_order; } });
Object.defineProperty(module.exports, "enqueue", { enumerable: false, get: function() { return reagent.impl.batching.enqueue; } });
Object.defineProperty(module.exports, "mount_count", { enumerable: false, get: function() { return reagent.impl.batching.mount_count; } });
Object.defineProperty(module.exports, "next_mount_count", { enumerable: false, get: function() { return reagent.impl.batching.next_mount_count; } });
Object.defineProperty(module.exports, "__GT_RenderQueue", { enumerable: false, get: function() { return reagent.impl.batching.__GT_RenderQueue; } });
Object.defineProperty(module.exports, "do_after_render", { enumerable: false, get: function() { return reagent.impl.batching.do_after_render; } });
Object.defineProperty(module.exports, "run_queue", { enumerable: false, get: function() { return reagent.impl.batching.run_queue; } });
Object.defineProperty(module.exports, "ratom_flush", { enumerable: false, get: function() { return reagent.impl.batching.ratom_flush; } });
//# sourceMappingURL=reagent.impl.batching.js.map
