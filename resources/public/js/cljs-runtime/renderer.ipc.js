goog.provide('renderer.ipc');
renderer.ipc.send_BANG_ = (function renderer$ipc$send_BANG_(channel,data){
var send_fn = window.api.send;
var G__51941 = channel;
var G__51942 = cljs.core.clj__GT_js(data);
return (send_fn.cljs$core$IFn$_invoke$arity$2 ? send_fn.cljs$core$IFn$_invoke$arity$2(G__51941,G__51942) : send_fn.call(null,G__51941,G__51942));
});
renderer.ipc.receive_BANG_ = (function renderer$ipc$receive_BANG_(channel,func){
var receive_fn = window.api.receive;
return (receive_fn.cljs$core$IFn$_invoke$arity$2 ? receive_fn.cljs$core$IFn$_invoke$arity$2(channel,func) : receive_fn.call(null,channel,func));
});
renderer.ipc.init = (function renderer$ipc$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initing renderer ipc handlers."], 0));

return renderer.ipc.receive_BANG_("my-reply",(function (data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["received stuff",data], 0));
}));
});

//# sourceMappingURL=renderer.ipc.js.map
