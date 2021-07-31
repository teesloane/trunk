goog.provide('renderer.ipc');
renderer.ipc.send_BANG_ = (function renderer$ipc$send_BANG_(channel,data){
var ipcRenderer = require("electron").ipcRenderer;
var _ = ipcRenderer.send(channel,cljs.core.clj__GT_js(data));
return null;
});
if((typeof renderer !== 'undefined') && (typeof renderer.ipc !== 'undefined') && (typeof renderer.ipc.ipcHandlers !== 'undefined')){
} else {
renderer.ipc.ipcHandlers = new cljs.core.PersistentArrayMap(null, 1, ["->article-created",(function (event,data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["->article-created",event,data], 0));
})], null);
}
/**
 * Load ipcRenderer and loop through defined handlers,
 *   then 
 */
renderer.ipc.init = (function renderer$ipc$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initing renderer ipc handlers."], 0));

var ipcRenderer = require("electron").ipcRenderer;
var seq__27052 = cljs.core.seq(renderer.ipc.ipcHandlers);
var chunk__27053 = null;
var count__27054 = (0);
var i__27055 = (0);
while(true){
if((i__27055 < count__27054)){
var vec__27066 = chunk__27053.cljs$core$IIndexed$_nth$arity$2(null,i__27055);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27066,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27066,(1),null);
ipcRenderer.on(key,((function (seq__27052,chunk__27053,count__27054,i__27055,vec__27066,key,handler,ipcRenderer){
return (function (event,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[IPC]: ",key], 0));

var G__27069 = event;
var G__27070 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__27069,G__27070) : handler.call(null,G__27069,G__27070));
});})(seq__27052,chunk__27053,count__27054,i__27055,vec__27066,key,handler,ipcRenderer))
);


var G__27076 = seq__27052;
var G__27077 = chunk__27053;
var G__27078 = count__27054;
var G__27079 = (i__27055 + (1));
seq__27052 = G__27076;
chunk__27053 = G__27077;
count__27054 = G__27078;
i__27055 = G__27079;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__27052);
if(temp__5753__auto__){
var seq__27052__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27052__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__27052__$1);
var G__27080 = cljs.core.chunk_rest(seq__27052__$1);
var G__27081 = c__4638__auto__;
var G__27082 = cljs.core.count(c__4638__auto__);
var G__27083 = (0);
seq__27052 = G__27080;
chunk__27053 = G__27081;
count__27054 = G__27082;
i__27055 = G__27083;
continue;
} else {
var vec__27071 = cljs.core.first(seq__27052__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27071,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27071,(1),null);
ipcRenderer.on(key,((function (seq__27052,chunk__27053,count__27054,i__27055,vec__27071,key,handler,seq__27052__$1,temp__5753__auto__,ipcRenderer){
return (function (event,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[IPC]: ",key], 0));

var G__27074 = event;
var G__27075 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__27074,G__27075) : handler.call(null,G__27074,G__27075));
});})(seq__27052,chunk__27053,count__27054,i__27055,vec__27071,key,handler,seq__27052__$1,temp__5753__auto__,ipcRenderer))
);


var G__27084 = cljs.core.next(seq__27052__$1);
var G__27085 = null;
var G__27086 = (0);
var G__27087 = (0);
seq__27052 = G__27084;
chunk__27053 = G__27085;
count__27054 = G__27086;
i__27055 = G__27087;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=renderer.ipc.js.map
