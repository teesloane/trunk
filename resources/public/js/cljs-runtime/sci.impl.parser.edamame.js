goog.provide('sci.impl.parser.edamame');
sci.impl.parser.edamame.edn_read = (function sci$impl$parser$edamame$edn_read(ctx,reader){
var tools_reader_opts = new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(tools_reader_opts,reader);
});
sci.impl.parser.edamame.dispatch_macro_QMARK_ = (function sci$impl$parser$edamame$dispatch_macro_QMARK_(ch){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["!",null,"\"",null,"#",null,"'",null,"(",null,":",null,"{",null,"^",null,"?",null,"_",null], null), null),ch);
});
sci.impl.parser.edamame.read_token = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},new cljs.core.Symbol("cljs.tools.reader.edn","read-token","cljs.tools.reader.edn/read-token",-1809266548,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-token","read-token",392624627,null),"cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),4,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),4,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"initch","initch",946908919,null),new cljs.core.Symbol(null,"validate-leading?","validate-leading?",1185429770,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
sci.impl.parser.edamame.parse_symbol = new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","parse-symbol","cljs.tools.reader.impl.commons/parse-symbol",-903976395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"parse-symbol","parse-symbol",1608073451,null),"cljs/tools/reader/impl/commons.cljs",(19),(1),(97),(97),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.parser.edamame.Loc = (function (line,column,__meta,__extmap,__hash){
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.parser.edamame.Loc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k32691,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__32695 = k32691;
var G__32695__$1 = (((G__32695 instanceof cljs.core.Keyword))?G__32695.fqn:null);
switch (G__32695__$1) {
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32691,else__4464__auto__);

}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__32696){
var vec__32699 = p__32696;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#sci.impl.parser.edamame.Loc{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32690){
var self__ = this;
var G__32690__$1 = this;
return (new cljs.core.RecordIter((0),G__32690__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-952826147 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32692,other32693){
var self__ = this;
var this32692__$1 = this;
return (((!((other32693 == null)))) && ((((this32692__$1.constructor === other32693.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32692__$1.line,other32693.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32692__$1.column,other32693.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32692__$1.__extmap,other32693.__extmap)))))))));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k32691){
var self__ = this;
var this__4468__auto____$1 = this;
var G__32743 = k32691;
var G__32743__$1 = (((G__32743 instanceof cljs.core.Keyword))?G__32743.fqn:null);
switch (G__32743__$1) {
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32691);

}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__32690){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__32778 = cljs.core.keyword_identical_QMARK_;
var expr__32779 = k__4470__auto__;
if(cljs.core.truth_((pred__32778.cljs$core$IFn$_invoke$arity$2 ? pred__32778.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__32779) : pred__32778.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__32779)))){
return (new sci.impl.parser.edamame.Loc(G__32690,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32778.cljs$core$IFn$_invoke$arity$2 ? pred__32778.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__32779) : pred__32778.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__32779)))){
return (new sci.impl.parser.edamame.Loc(self__.line,G__32690,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__32690),null));
}
}
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__32690){
var self__ = this;
var this__4460__auto____$1 = this;
return (new sci.impl.parser.edamame.Loc(self__.line,self__.column,G__32690,self__.__extmap,self__.__hash));
}));

(sci.impl.parser.edamame.Loc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(sci.impl.parser.edamame.Loc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"column","column",-576213674,null)], null);
}));

(sci.impl.parser.edamame.Loc.cljs$lang$type = true);

(sci.impl.parser.edamame.Loc.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"sci.impl.parser.edamame/Loc",null,(1),null));
}));

(sci.impl.parser.edamame.Loc.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"sci.impl.parser.edamame/Loc");
}));

/**
 * Positional factory function for sci.impl.parser.edamame/Loc.
 */
sci.impl.parser.edamame.__GT_Loc = (function sci$impl$parser$edamame$__GT_Loc(line,column){
return (new sci.impl.parser.edamame.Loc(line,column,null,null,null));
});

/**
 * Factory function for sci.impl.parser.edamame/Loc, taking a map of keywords to field values.
 */
sci.impl.parser.edamame.map__GT_Loc = (function sci$impl$parser$edamame$map__GT_Loc(G__32694){
var extmap__4501__auto__ = (function (){var G__32829 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32694,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__32694)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32829);
} else {
return G__32829;
}
})();
return (new sci.impl.parser.edamame.Loc(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__32694),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__32694),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

sci.impl.parser.edamame.location = (function sci$impl$parser$edamame$location(reader){
return sci.impl.parser.edamame.__GT_Loc(reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null));
});
sci.impl.parser.edamame.kw_identical_QMARK_ = (function sci$impl$parser$edamame$kw_identical_QMARK_(kw,v){
return cljs.core.keyword_identical_QMARK_(kw,v);
});
sci.impl.parser.edamame.parse_comment = (function sci$impl$parser$edamame$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
sci.impl.parser.edamame.whitespace_QMARK_ = (function sci$impl$parser$edamame$whitespace_QMARK_(c){
var and__4210__auto__ = c;
if(cljs.core.truth_(and__4210__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4210__auto__;
}
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
sci.impl.parser.edamame.skip_whitespace = (function sci$impl$parser$edamame$skip_whitespace(_ctx,reader){
while(true){
var temp__5753__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
if(cljs.core.truth_(sci.impl.parser.edamame.whitespace_QMARK_(c))){
continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return reader;
}
} else {
return null;
}
break;
}
});
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
sci.impl.parser.edamame.throw_reader = (function sci$impl$parser$edamame$throw_reader(var_args){
var G__32873 = arguments.length;
switch (G__32873) {
case 3:
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,msg,null);
}));

(sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,msg,data,null);
}));

(sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (_ctx,reader,msg,data,loc){
var c = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader));
var l = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("edamame","error","edamame/error",882529634),new cljs.core.Keyword(null,"line","line",212345235),l,new cljs.core.Keyword(null,"column","column",2078222095),c], null),data], 0)));
}));

(sci.impl.parser.edamame.throw_reader.cljs$lang$maxFixedArity = 5);

sci.impl.parser.edamame.non_match = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("non-match");
sci.impl.parser.edamame.non_match_QMARK_ = (function sci$impl$parser$edamame$non_match_QMARK_(v){
return (v === sci.impl.parser.edamame.non_match);
});
sci.impl.parser.edamame.throw_eof_while_reading = (function sci$impl$parser$edamame$throw_eof_while_reading(ctx,reader){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"EOF while reading");
});
sci.impl.parser.edamame.parse_to_delimiter = (function sci$impl$parser$edamame$parse_to_delimiter(var_args){
var G__32878 = arguments.length;
switch (G__32878) {
case 3:
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var line = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var column = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),delimiter),new cljs.core.Keyword("sci.impl.parser.edamame","opened-delimiter","sci.impl.parser.edamame/opened-delimiter",-1411217799),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx__$1,reader));
var cond_splice_QMARK_ = (function (){var G__32960 = next_val;
var G__32960__$1 = (((G__32960 == null))?null:cljs.core.meta(G__32960));
if((G__32960__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl.parser.edamame","cond-splice","sci.impl.parser.edamame/cond-splice",1998093786).cljs$core$IFn$_invoke$arity$1(G__32960__$1);
}
})();
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),next_val)){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)], null));
} else {
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__32961_33832 = cljs.core.seq(next_val);
var chunk__32962_33833 = null;
var count__32963_33834 = (0);
var i__32964_33835 = (0);
while(true){
if((i__32964_33835 < count__32963_33834)){
var v_33837 = chunk__32962_33833.cljs$core$IIndexed$_nth$arity$2(null,i__32964_33835);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_33837);


var G__33839 = seq__32961_33832;
var G__33840 = chunk__32962_33833;
var G__33841 = count__32963_33834;
var G__33842 = (i__32964_33835 + (1));
seq__32961_33832 = G__33839;
chunk__32962_33833 = G__33840;
count__32963_33834 = G__33841;
i__32964_33835 = G__33842;
continue;
} else {
var temp__5753__auto___33845 = cljs.core.seq(seq__32961_33832);
if(temp__5753__auto___33845){
var seq__32961_33846__$1 = temp__5753__auto___33845;
if(cljs.core.chunked_seq_QMARK_(seq__32961_33846__$1)){
var c__4638__auto___33847 = cljs.core.chunk_first(seq__32961_33846__$1);
var G__33848 = cljs.core.chunk_rest(seq__32961_33846__$1);
var G__33849 = c__4638__auto___33847;
var G__33850 = cljs.core.count(c__4638__auto___33847);
var G__33851 = (0);
seq__32961_33832 = G__33848;
chunk__32962_33833 = G__33849;
count__32963_33834 = G__33850;
i__32964_33835 = G__33851;
continue;
} else {
var v_33852 = cljs.core.first(seq__32961_33846__$1);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_33852);


var G__33853 = cljs.core.next(seq__32961_33846__$1);
var G__33854 = null;
var G__33855 = (0);
var G__33856 = (0);
seq__32961_33832 = G__33853;
chunk__32962_33833 = G__33854;
count__32963_33834 = G__33855;
i__32964_33835 = G__33856;
continue;
}
} else {
}
}
break;
}

var G__33857 = vals;
vals = G__33857;
continue;
} else {
if(sci.impl.parser.edamame.non_match_QMARK_(next_val)){
var G__33858 = vals;
vals = G__33858;
continue;
} else {
var G__33859 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__33859;
continue;

}
}
}
}
break;
}
}));

(sci.impl.parser.edamame.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

sci.impl.parser.edamame.parse_list = (function sci$impl$parser$edamame$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
sci.impl.parser.edamame.read_regex_pattern = (function sci$impl$parser$edamame$read_regex_pattern(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_33863__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_33863__$1 == null)){
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_33863__$1);
} else {
}

var G__33865 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__33865;
continue;
}
}
break;
}
});
sci.impl.parser.edamame.duplicate_keys_error = (function sci$impl$parser$edamame$duplicate_keys_error(msg,coll){
var duplicates = (function sci$impl$parser$edamame$duplicate_keys_error_$_duplicates(seq){
var iter__4611__auto__ = (function sci$impl$parser$edamame$duplicate_keys_error_$_duplicates_$_iter__32993(s__32994){
return (new cljs.core.LazySeq(null,(function (){
var s__32994__$1 = s__32994;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32994__$1);
if(temp__5753__auto__){
var s__32994__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32994__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__32994__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__32996 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__32995 = (0);
while(true){
if((i__32995 < size__4610__auto__)){
var vec__33001 = cljs.core._nth(c__4609__auto__,i__32995);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__32996,id);

var G__33867 = (i__32995 + (1));
i__32995 = G__33867;
continue;
} else {
var G__33869 = (i__32995 + (1));
i__32995 = G__33869;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32996),sci$impl$parser$edamame$duplicate_keys_error_$_duplicates_$_iter__32993(cljs.core.chunk_rest(s__32994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32996),null);
}
} else {
var vec__33007 = cljs.core.first(s__32994__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007,(1),null);
if((freq > (1))){
return cljs.core.cons(id,sci$impl$parser$edamame$duplicate_keys_error_$_duplicates_$_iter__32993(cljs.core.rest(s__32994__$2)));
} else {
var G__33892 = cljs.core.rest(s__32994__$2);
s__32994__$1 = G__33892;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
sci.impl.parser.edamame.throw_dup_keys = (function sci$impl$parser$edamame$throw_dup_keys(ctx,reader,loc,kind,ks){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,sci.impl.parser.edamame.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
sci.impl.parser.edamame.parse_set = (function sci$impl$parser$edamame$parse_set(ctx,reader){
var start_loc = sci.impl.parser.edamame.location(reader);
var coll = sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
sci.impl.parser.edamame.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
sci.impl.parser.edamame.parse_first_matching_condition = (function sci$impl$parser$edamame$parse_first_matching_condition(ctx,reader){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var match = sci.impl.parser.edamame.non_match;
while(true){
var k = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(k,new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032))){
return match;
} else {
var next_is_match_QMARK_ = ((sci.impl.parser.edamame.non_match_QMARK_(match)) && (((cljs.core.contains_QMARK_(features,k)) || (sci.impl.parser.edamame.kw_identical_QMARK_(k,new cljs.core.Keyword(null,"default","default",-1987822328))))));
if(next_is_match_QMARK_){
var match__$1 = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl.parser.edamame","suppress","sci.impl.parser.edamame/suppress",1305195112),true);
while(true){
var next_val_34084 = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx__$1,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),next_val_34084)){
} else {
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),next_val_34084)){
var delimiter_34085 = new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__33032_34086 = new cljs.core.Keyword("sci.impl.parser.edamame","opened-delimiter","sci.impl.parser.edamame/opened-delimiter",-1411217799).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__33032_34087__$1 = cljs.core.__destructure_map(map__33032_34086);
var line_34088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032_34087__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032_34087__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var char_34090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032_34087__$1,new cljs.core.Keyword(null,"char","char",-641587586));
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_34085)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_34090)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34088),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34089),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_34085),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_34090)], null));
} else {
continue;
}
}
break;
}

return match__$1;
} else {
var G__33033_34110 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl.parser.edamame","suppress","sci.impl.parser.edamame/suppress",1305195112),true);
var G__33034_34111 = reader;
(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(G__33033_34110,G__33034_34111) : sci.impl.parser.edamame.parse_next.call(null,G__33033_34110,G__33034_34111));

var G__34115 = match;
match = G__34115;
continue;
}
}
break;
}
});
sci.impl.parser.edamame.parse_reader_conditional = (function sci$impl$parser$edamame$parse_reader_conditional(ctx,reader){
sci.impl.parser.edamame.skip_whitespace(ctx,reader);

var opt = new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(splice_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

sci.impl.parser.edamame.skip_whitespace(ctx,reader);

if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword(null,"preserve","preserve",1276846509),opt)){
return cljs.tools.reader.impl.utils.reader_conditional((sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader)),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_(opt)){
var G__33036 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader)),cljs.core.assoc,new cljs.core.Keyword("edamame","read-cond-splicing","edamame/read-cond-splicing",-1992728777),splice_QMARK_);
return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__33036) : opt.call(null,G__33036));
} else {
var line = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var column = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),")"),new cljs.core.Keyword("sci.impl.parser.edamame","opened-delimiter","sci.impl.parser.edamame/opened-delimiter",-1411217799),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
var match = sci.impl.parser.edamame.parse_first_matching_condition(ctx__$1,reader);
if(sci.impl.parser.edamame.non_match_QMARK_(match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(match,(function (p1__33035_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33035_SHARP_,new cljs.core.Keyword("sci.impl.parser.edamame","cond-splice","sci.impl.parser.edamame/cond-splice",1998093786),true);
}));
} else {
return match;

}
}

}
}
});
sci.impl.parser.edamame.get_auto_resolve = (function sci$impl$parser$edamame$get_auto_resolve(var_args){
var G__33047 = arguments.length;
switch (G__33047) {
case 3:
return sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,next_val,null);
}));

(sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5751__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var v = temp__5751__auto__;
return v;
} else {
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4212__auto__ = msg;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(sci.impl.parser.edamame.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
sci.impl.parser.edamame.auto_resolve = (function sci$impl$parser$edamame$auto_resolve(var_args){
var G__33071 = arguments.length;
switch (G__33071) {
case 5:
return sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,m,kns,reader,next_val,null);
}));

(sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5751__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(kns) : m.call(null,kns));
if(cljs.core.truth_(temp__5751__auto__)){
var kns__$1 = temp__5751__auto__;
return kns__$1;
} else {
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__4212__auto__ = msg;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(sci.impl.parser.edamame.auto_resolve.cljs$lang$maxFixedArity = 6);

sci.impl.parser.edamame.parse_namespaced_map = (function sci$impl$parser$edamame$parse_namespaced_map(ctx,reader){
var auto_resolved_QMARK_ = (((":" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)))?(function (){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return true;
})()
:null);
var current_ns_QMARK_ = (cljs.core.truth_(auto_resolved_QMARK_)?("{" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)):null);
var prefix = (cljs.core.truth_(auto_resolved_QMARK_)?(cljs.core.truth_(current_ns_QMARK_)?null:sci.impl.parser.edamame.edn_read(ctx,reader)):sci.impl.parser.edamame.edn_read(ctx,reader));
var the_map = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(cljs.core.truth_(auto_resolved_QMARK_)){
var ns = (cljs.core.truth_(current_ns_QMARK_)?new cljs.core.Keyword(null,"current","current",-1088038603):cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prefix)));
var f = sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,ns);
var resolved_ns = sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,ns,reader,prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys(the_map)),cljs.core.vals(the_map));
} else {
var resolved_ns = cljs.core.name(prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(resolved_ns,cljs.core.keys(the_map)),cljs.core.vals(the_map));
}
});
sci.impl.parser.edamame.parse_sharp = (function sci$impl$parser$edamame$parse_sharp(ctx,reader){
var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var G__33116 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__33116)){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__33116)){
sci.impl.parser.edamame.parse_comment(reader);

return reader;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__33116)){
var pat = sci.impl.parser.edamame.read_regex_pattern(ctx,reader);
return cljs.core.re_pattern(pat);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__33116)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),next_val)){
sci.impl.parser.edamame.throw_eof_while_reading(ctx,reader);
} else {
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__33116)){
var fn_expr = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return edamame.impl.read_fn.read_fn(fn_expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__33116)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.parse_namespaced_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__33116)){
return sci.impl.parser.edamame.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__33116)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__33116)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Conditional read not allowed.");
}

reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.parse_reader_conditional(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__33116)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));

return reader;
} else {
if(sci.impl.parser.edamame.dispatch_macro_QMARK_(c)){
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return sci.impl.parser.edamame.edn_read(ctx,reader);
} else {
var suppress_QMARK_ = new cljs.core.Keyword("sci.impl.parser.edamame","suppress","sci.impl.parser.edamame/suppress",1305195112).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));

return (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
} else {
var sym = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var data = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var f = (function (){var or__4212__auto__ = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var readers = temp__5753__auto__;
return (readers.cljs$core$IFn$_invoke$arity$1 ? readers.cljs$core$IFn$_invoke$arity$1(sym) : readers.call(null,sym));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var fexpr__33144 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (fexpr__33144.cljs$core$IFn$_invoke$arity$1 ? fexpr__33144.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__33144.call(null,sym));
}
})();
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
} else {
throw (new Error(["No reader function for tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
}
}
}

}
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
sci.impl.parser.edamame.throw_odd_map = (function sci$impl$parser$edamame$throw_odd_map(ctx,reader,loc,elements){
return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
sci.impl.parser.edamame.parse_map = (function sci$impl$parser$edamame$parse_map(ctx,reader){
var start_loc = sci.impl.parser.edamame.location(reader);
var elements = sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
sci.impl.parser.edamame.throw_odd_map(ctx,reader,start_loc,elements);
} else {
}

var ks_34220 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_34220))){
} else {
sci.impl.parser.edamame.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_34220);
}
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
});
sci.impl.parser.edamame.parse_keyword = (function sci$impl$parser$edamame$parse_keyword(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var init_c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(sci.impl.parser.edamame.whitespace_QMARK_(init_c))){
sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Invalid token: :");
} else {
}

var token = (sci.impl.parser.edamame.read_token.cljs$core$IFn$_invoke$arity$3 ? sci.impl.parser.edamame.read_token.cljs$core$IFn$_invoke$arity$3(reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c) : sci.impl.parser.edamame.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c));
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)):token);
var vec__33188 = (sci.impl.parser.edamame.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? sci.impl.parser.edamame.parse_symbol.cljs$core$IFn$_invoke$arity$1(token__$1) : sci.impl.parser.edamame.parse_symbol.call(null,token__$1));
var token_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33188,(0),null);
var token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33188,(1),null);
if(cljs.core.truth_(token_ns)){
var f = sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,token__$1);
var kns = sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token_ns),reader,token_ns);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = sci.impl.parser.edamame.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = sci.impl.parser.edamame.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,f,new cljs.core.Keyword(null,"current","current",-1088038603),reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
}
});
sci.impl.parser.edamame.dispatch = (function sci$impl$parser$edamame$dispatch(ctx,reader,c){
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c);
if(sharp_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.parse_sharp(ctx,reader);
} else {
var G__33209 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__33209)){
return new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",G__33209)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__33209)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
var ret = sci.impl.parser.edamame.syntax_quote.syntax_quote(ctx__$1,reader,next_val);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__33209)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),next_val)){
sci.impl.parser.edamame.throw_eof_while_reading(ctx,reader);
} else {
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__33209)){
return sci.impl.parser.edamame.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__33209)){
var expected = new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = sci.impl.parser.edamame.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("sci.impl.parser.edamame","opened-delimiter","sci.impl.parser.edamame/opened-delimiter",-1411217799).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__33334 = temp__5753__auto__;
var map__33334__$1 = cljs.core.__destructure_map(map__33334);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33334__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33334__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33334__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__33209)){
return sci.impl.parser.edamame.parse_keyword(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__33209)){
return sci.impl.parser.edamame.parse_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__33209)){
return sci.impl.parser.edamame.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__33209)){
return sci.impl.parser.edamame.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__33209)){
var expected = new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = sci.impl.parser.edamame.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("sci.impl.parser.edamame","opened-delimiter","sci.impl.parser.edamame/opened-delimiter",-1411217799).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__33394 = temp__5753__auto__;
var map__33394__$1 = cljs.core.__destructure_map(map__33394);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33394__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__33209)){
var expected = new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = sci.impl.parser.edamame.location(reader);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return sci.impl.parser.edamame.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("sci.impl.parser.edamame","opened-delimiter","sci.impl.parser.edamame/opened-delimiter",-1411217799).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__33437 = temp__5753__auto__;
var map__33437__$1 = cljs.core.__destructure_map(map__33437);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx,loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__33209)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var meta_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,true) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader,true));
var val_val = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3((sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader)),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__33209)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var nc = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((nc === "@")){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
var next_val = (sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 ? sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : sci.impl.parser.edamame.parse_next.call(null,ctx,reader));
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return sci.impl.parser.edamame.edn_read(ctx,reader);

}
}
}
}
}
}
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
/**
 * Resolves syntactical sugar in metadata
 */
sci.impl.parser.edamame.desugar_meta = (function sci$impl$parser$edamame$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
sci.impl.parser.edamame.iobj_QMARK_ = (function sci$impl$parser$edamame$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
}
});
sci.impl.parser.edamame.parse_next = (function sci$impl$parser$edamame$parse_next(var_args){
var G__33513 = arguments.length;
switch (G__33513) {
case 2:
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,null);
}));

(sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var temp__5751__auto__ = (function (){var and__4210__auto__ = sci.impl.parser.edamame.skip_whitespace(ctx,reader);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.tools.reader.reader_types.peek_char(reader);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
var loc = sci.impl.parser.edamame.location(reader);
var log_QMARK_ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(ctx);
var buf = ((function (ctx,reader,desugar,loc,log_QMARK_,c,temp__5751__auto__){
return (function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reader.frames)));
});})(ctx,reader,desugar,loc,log_QMARK_,c,temp__5751__auto__))
;
var offset = (cljs.core.truth_(log_QMARK_)?((buf()).length):null);
var obj = (cljs.core.truth_(log_QMARK_)?cljs.tools.reader.reader_types.log_source_STAR_(reader,((function (ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5751__auto__){
return (function (){
return sci.impl.parser.edamame.dispatch(ctx,reader,c);
});})(ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5751__auto__))
):sci.impl.parser.edamame.dispatch(ctx,reader,c));
if((reader === obj)){
var G__34226 = ctx;
var G__34227 = reader;
var G__34228 = desugar;
ctx = G__34226;
reader = G__34227;
desugar = G__34228;
continue;
} else {
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),obj)){
return obj;
} else {
var iobj_QMARK__QMARK_ = sci.impl.parser.edamame.iobj_QMARK_(obj);
var src = (cljs.core.truth_(log_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(buf(),offset).trim():null);
var loc_QMARK_ = ((iobj_QMARK__QMARK_) && ((((obj instanceof cljs.core.Symbol)) || (cljs.core.seq_QMARK_(obj)))));
var line = ((loc_QMARK_)?loc.line:null);
var column = ((loc_QMARK_)?loc.column:null);
var obj__$1 = (cljs.core.truth_(desugar)?sci.impl.parser.edamame.desugar_meta(obj):obj);
var obj__$2 = ((loc_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(obj__$1,((function (ctx,reader,desugar,iobj_QMARK__QMARK_,src,loc_QMARK_,line,column,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5751__auto__){
return (function (p1__33504_SHARP_){
var G__33579 = p1__33504_SHARP_;
var G__33579__$1 = ((loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33579,new cljs.core.Keyword(null,"line","line",212345235),line),new cljs.core.Keyword(null,"column","column",2078222095),column):G__33579);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33579__$1,new cljs.core.Keyword(null,"source","source",-433931539),src);
} else {
return G__33579__$1;
}
});})(ctx,reader,desugar,iobj_QMARK__QMARK_,src,loc_QMARK_,line,column,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5751__auto__))
):obj__$1
);
return obj__$2;
}
}
} else {
return new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517);
}
break;
}
}));

(sci.impl.parser.edamame.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
sci.impl.parser.edamame.string_reader = (function sci$impl$parser$edamame$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
});
sci.impl.parser.edamame.parse_string = (function sci$impl$parser$edamame$parse_string(s,opts){
var src_QMARK_ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(opts);
var r = (cljs.core.truth_(src_QMARK_)?cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(s):sci.impl.parser.edamame.string_reader(s));
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),null);
var v = sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),v)){
return null;
} else {
return v;
}
});
sci.impl.parser.edamame.parse_string_all = (function sci$impl$parser$edamame$parse_string_all(s,opts){
var r = sci.impl.parser.edamame.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("sci.impl.parser.edamame","expected-delimiter","sci.impl.parser.edamame/expected-delimiter",-687160032),null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = sci.impl.parser.edamame.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if(sci.impl.parser.edamame.kw_identical_QMARK_(new cljs.core.Keyword("sci.impl.parser.edamame","eof","sci.impl.parser.edamame/eof",-917261517),next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__34230 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__34230;
continue;
}
break;
}
});
sci.impl.parser.edamame.reader = (function sci$impl$parser$edamame$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
sci.impl.parser.edamame.get_line_number = (function sci$impl$parser$edamame$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
sci.impl.parser.edamame.get_column_number = (function sci$impl$parser$edamame$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
sci.impl.parser.edamame.source_logging_reader = (function sci$impl$parser$edamame$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});

//# sourceMappingURL=sci.impl.parser.edamame.js.map
