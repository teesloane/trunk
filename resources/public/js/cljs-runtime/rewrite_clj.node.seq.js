goog.provide('rewrite_clj.node.seq');
rewrite_clj.node.seq.wrap_vec = (function rewrite_clj$node$seq$wrap_vec(s){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"]"].join('');
});
rewrite_clj.node.seq.wrap_list = (function rewrite_clj$node$seq$wrap_list(s){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('');
});
rewrite_clj.node.seq.wrap_set = (function rewrite_clj$node$seq$wrap_set(s){
return ["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});
rewrite_clj.node.seq.wrap_map = (function rewrite_clj$node$seq$wrap_map(s){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"}"].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.seq.SeqNode = (function (tag,wrap_fn,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.wrap_fn = wrap_fn;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k29600,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__29611 = k29600;
var G__29611__$1 = (((G__29611 instanceof cljs.core.Keyword))?G__29611.fqn:null);
switch (G__29611__$1) {
case "tag":
return self__.tag;

break;
case "wrap-fn":
return self__.wrap_fn;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29600,else__4464__auto__);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__29612){
var vec__29614 = p__29612;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29614,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29614,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),self__.wrap_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29599){
var self__ = this;
var G__29599__$1 = this;
return (new cljs.core.RecordIter((0),G__29599__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (580297420 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29601,other29602){
var self__ = this;
var this29601__$1 = this;
return (((!((other29602 == null)))) && ((((this29601__$1.constructor === other29602.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29601__$1.tag,other29602.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29601__$1.wrap_fn,other29602.wrap_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29601__$1.wrap_length,other29602.wrap_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29601__$1.seq_fn,other29602.seq_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29601__$1.children,other29602.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29601__$1.__extmap,other29602.__extmap)))))))))))))));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__29635 = rewrite_clj.node.protocols.sexprs(self__.children);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__29635) : self__.seq_fn.call(null,G__29635));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__29648 = rewrite_clj.node.protocols.concat_strings(self__.children);
return (self__.wrap_fn.cljs$core$IFn$_invoke$arity$1 ? self__.wrap_fn.cljs$core$IFn$_invoke$arity$1(G__29648) : self__.wrap_fn.call(null,G__29648));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),null,new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k29600){
var self__ = this;
var this__4468__auto____$1 = this;
var G__29652 = k29600;
var G__29652__$1 = (((G__29652 instanceof cljs.core.Keyword))?G__29652.fqn:null);
switch (G__29652__$1) {
case "tag":
case "wrap-fn":
case "wrap-length":
case "seq-fn":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29600);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__29599){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__29657 = cljs.core.keyword_identical_QMARK_;
var expr__29658 = k__4470__auto__;
if(cljs.core.truth_((pred__29657.cljs$core$IFn$_invoke$arity$2 ? pred__29657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29658) : pred__29657.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29658)))){
return (new rewrite_clj.node.seq.SeqNode(G__29599,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29657.cljs$core$IFn$_invoke$arity$2 ? pred__29657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),expr__29658) : pred__29657.call(null,new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),expr__29658)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__29599,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29657.cljs$core$IFn$_invoke$arity$2 ? pred__29657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__29658) : pred__29657.call(null,new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),expr__29658)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,G__29599,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29657.cljs$core$IFn$_invoke$arity$2 ? pred__29657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__29658) : pred__29657.call(null,new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),expr__29658)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,G__29599,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29657.cljs$core$IFn$_invoke$arity$2 ? pred__29657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__29658) : pred__29657.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__29658)))){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,G__29599,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__29599),null));
}
}
}
}
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),self__.wrap_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),self__.wrap_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),self__.seq_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__29599){
var self__ = this;
var this__4460__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.wrap_fn,self__.wrap_length,self__.seq_fn,self__.children,G__29599,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(rewrite_clj.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"wrap-fn","wrap-fn",1370298397,null),new cljs.core.Symbol(null,"wrap-length","wrap-length",1372423008,null),new cljs.core.Symbol(null,"seq-fn","seq-fn",649518296,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$type = true);

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.seq/SeqNode",null,(1),null));
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"rewrite-clj.node.seq/SeqNode");
}));

/**
 * Positional factory function for rewrite-clj.node.seq/SeqNode.
 */
rewrite_clj.node.seq.__GT_SeqNode = (function rewrite_clj$node$seq$__GT_SeqNode(tag,wrap_fn,wrap_length,seq_fn,children){
return (new rewrite_clj.node.seq.SeqNode(tag,wrap_fn,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_clj.node.seq.map__GT_SeqNode = (function rewrite_clj$node$seq$map__GT_SeqNode(G__29606){
var extmap__4501__auto__ = (function (){var G__29666 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29606,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__29606)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29666);
} else {
return G__29666;
}
})();
return (new rewrite_clj.node.seq.SeqNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__29606),new cljs.core.Keyword(null,"wrap-fn","wrap-fn",-270233130).cljs$core$IFn$_invoke$arity$1(G__29606),new cljs.core.Keyword(null,"wrap-length","wrap-length",-268108519).cljs$core$IFn$_invoke$arity$1(G__29606),new cljs.core.Keyword(null,"seq-fn","seq-fn",-991013231).cljs$core$IFn$_invoke$arity$1(G__29606),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__29606),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Create a node representing an EDN list.
 */
rewrite_clj.node.seq.list_node = (function rewrite_clj$node$seq$list_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"list","list",765357683),rewrite_clj.node.seq.wrap_list,(2),(function (p1__29668_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__29668_SHARP_);
}),children);
});
/**
 * Create a node representing an EDN vector.
 */
rewrite_clj.node.seq.vector_node = (function rewrite_clj$node$seq$vector_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"vector","vector",1902966158),rewrite_clj.node.seq.wrap_vec,(2),cljs.core.vec,children);
});
/**
 * Create a node representing an EDN set.
 */
rewrite_clj.node.seq.set_node = (function rewrite_clj$node$seq$set_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"set","set",304602554),rewrite_clj.node.seq.wrap_set,(3),cljs.core.set,children);
});
/**
 * Create a node representing an EDN map.
 */
rewrite_clj.node.seq.map_node = (function rewrite_clj$node$seq$map_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_clj.node.seq.wrap_map,(2),(function (p1__29677_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__29677_SHARP_);
}),children);
});

//# sourceMappingURL=rewrite_clj.node.seq.js.map
