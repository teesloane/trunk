goog.provide('cljs.core.async.impl.timers');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var G__31525 = arguments.length;
switch (G__31525) {
case 0:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((0));
}));

(cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if((((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))){
var G__31645 = (level + (1));
level = G__31645;
continue;
} else {
return level;
}
break;
}
}));

(cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = 1);


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(null,self__.key,(new cljs.core.List(null,self__.val,null,(1),null)),(2),null));
}));

(cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
}));

(cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"forward","forward",1083186224,null)], null);
}));

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true);

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode");

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async.impl.timers/SkipListNode");
}));

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipListNode.
 */
cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var G__31541 = arguments.length;
switch (G__31541) {
case 1:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3(null,null,level);
}));

(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_31656 = (0);
while(true){
if((i_31656 < arr.length)){
(arr[i_31656] = null);

var G__31658 = (i_31656 + (1));
i_31656 = G__31658;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
}));

(cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = 3);

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var G__31569 = arguments.length;
switch (G__31569) {
case 3:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(x,k,level,null);
}));

(cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if((!((level < (0))))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__5751__auto__ = (((level < x__$1.forward.length))?(x__$1.forward[level]):null);
if(cljs.core.truth_(temp__5751__auto__)){
var x_SINGLEQUOTE_ = temp__5751__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__31663 = x_SINGLEQUOTE_;
x__$1 = G__31663;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__31664 = x__$1;
var G__31665 = k;
var G__31666 = (level - (1));
var G__31667 = update;
x = G__31664;
k = G__31665;
level = G__31666;
update = G__31667;
continue;
} else {
return x;
}
break;
}
}));

(cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
return (x__$1.val = v);
} else {
var new_level = cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();
if((new_level > self__.level)){
var i_31672 = (self__.level + (1));
while(true){
if((i_31672 <= (new_level + (1)))){
(update[i_31672] = self__.header);

var G__31673 = (i_31672 + (1));
i_31672 = G__31673;
continue;
} else {
}
break;
}

(self__.level = new_level);
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3(k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links_31674 = (update[i]).forward;
if((i < x__$2.forward.length)){
(x__$2.forward[i] = (links_31674[i]));
} else {
x__$2.forward.push((((i < links_31674.length))?(links_31674[i]):null));
}

if((i < links_31674.length)){
(links_31674[i] = x__$2);
} else {
links_31674.push(x__$2);
}

var G__31679 = (i + (1));
i = G__31679;
continue;
} else {
return null;
}
break;
}
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (((x.forward.length === (0)))?null:(x.forward[(0)]));
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
var i_31685 = (0);
while(true){
if((i_31685 <= self__.level)){
var links_31687 = (update[i_31685]).forward;
if((x__$1 === (((i_31685 < links_31687.length))?(links_31687[i_31685]):null))){
(links_31687[i_31685] = (x__$1.forward[i_31685]));

var G__31688 = (i_31685 + (1));
i_31685 = G__31688;
continue;
} else {
var G__31689 = (i_31685 + (1));
i_31685 = G__31689;
continue;
}
} else {
}
break;
}

while(true){
if(((((((0) < self__.level)) && ((self__.level < self__.header.forward.length)))) && (((self__.header.forward[self__.level]) == null)))){
(self__.level = (self__.level - (1)));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__31691 = x_SINGLEQUOTE_;
x__$1 = G__31691;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__31694 = nx;
var G__31695 = (level__$1 - (1));
x = G__31694;
level__$1 = G__31695;
continue;
} else {
var G__31696 = x;
var G__31697 = (level__$1 - (1));
x = G__31696;
level__$1 = G__31697;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x.key,k)){
return x;
} else {
return (x.forward[(0)]);
}
}
break;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__31702 = x_SINGLEQUOTE_;
x__$1 = G__31702;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__31703 = nx;
var G__31704 = (level__$1 - (1));
x = G__31703;
level__$1 = G__31704;
continue;
} else {
var G__31705 = x;
var G__31706 = (level__$1 - (1));
x = G__31705;
level__$1 = G__31706;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,(function (){
if((node == null)){
return null;
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter((node.forward[(0)])));
}
}),null,null));
});
return iter((self__.header.forward[(0)]));
}));

(cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll__$1);
}));

(cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.core.async.impl.timers.SkipList.cljs$lang$type = true);

(cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList");

(cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async.impl.timers/SkipList");
}));

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipList.
 */
cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list();
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__4212__auto__ = (cljs.core.truth_((function (){var and__4210__auto__ = me;
if(cljs.core.truth_(and__4210__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__4210__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay((function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_(timeout_channel);
}),msecs);

return timeout_channel;
}
});

//# sourceMappingURL=cljs.core.async.impl.timers.js.map
