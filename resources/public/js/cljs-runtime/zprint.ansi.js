goog.provide('zprint.ansi');
zprint.ansi.ansi_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bright-magenta","bright-magenta",-1322676896),new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"bright-cyan","bright-cyan",-818637375),new cljs.core.Keyword(null,"back-magenta","back-magenta",1900361441),new cljs.core.Keyword(null,"bright-blue","bright-blue",-1256551583),new cljs.core.Keyword(null,"italic-off","italic-off",879408323),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"bright-green","bright-green",-105033853),new cljs.core.Keyword(null,"bright-yellow","bright-yellow",-1656998459),new cljs.core.Keyword(null,"back-green","back-green",1691074021),new cljs.core.Keyword(null,"back-bright-blue","back-bright-blue",74539653),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"back-blue","back-blue",-548906873),new cljs.core.Keyword(null,"hidden-off","hidden-off",1291018855),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"back-bright-cyan","back-bright-cyan",1639794696),new cljs.core.Keyword(null,"bright-purple","bright-purple",-107980376),new cljs.core.Keyword(null,"back-yellow","back-yellow",432707272),new cljs.core.Keyword(null,"back-bright-magenta","back-bright-magenta",922071785),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"back-purple","back-purple",-1009092470),new cljs.core.Keyword(null,"blink-off","blink-off",-1034590038),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"bright-white","bright-white",-1928690644),new cljs.core.Keyword(null,"back-bright-red","back-bright-red",-338175956),new cljs.core.Keyword(null,"strike-off","strike-off",1305584716),new cljs.core.Keyword(null,"underline-off","underline-off",-1119988244),new cljs.core.Keyword(null,"back-bright-white","back-bright-white",-1262651828),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"back-bright-green","back-bright-green",317582575),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"xsf","xsf",1294187664),new cljs.core.Keyword(null,"back-black","back-black",315083216),new cljs.core.Keyword(null,"back-cyan","back-cyan",-1507796336),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"back-white","back-white",-281756174),new cljs.core.Keyword(null,"back-red","back-red",-1985566158),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"back-bright-purple","back-bright-purple",-707323372),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"reverse-off","reverse-off",917935542),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"italic","italic",32599196),new cljs.core.Keyword(null,"faint","faint",636165182),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"back-bright-black","back-bright-black",428345118),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"bright-black","bright-black",-1152416834),new cljs.core.Keyword(null,"back-bright-yellow","back-bright-yellow",1264629663),new cljs.core.Keyword(null,"black","black",1294279647)],[(95),(91),(1),(96),(45),(94),(23),(5),(92),(93),(42),(104),(37),(0),(44),(28),(33),(106),(95),(43),(105),(32),(45),(25),(36),(97),(101),(29),(24),(107),(22),(102),(4),(38),(40),(46),(9),(47),(41),(8),(105),(31),(34),(0),(27),(35),(35),(3),(2),(30),(100),(7),(90),(103),(30)]);
/**
 * Wraps a string with ANSI escape codes.
 */
zprint.ansi.color_str = (function zprint$ansi$color_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___29160 = arguments.length;
var i__4819__auto___29161 = (0);
while(true){
if((i__4819__auto___29161 < len__4818__auto___29160)){
args__4824__auto__.push((arguments[i__4819__auto___29161]));

var G__29162 = (i__4819__auto___29161 + (1));
i__4819__auto___29161 = G__29162;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic = (function (s,ansi){
var ansi_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.ansi.ansi_codes,ansi)));
return ["\u001B","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ansi_str),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\u001B","[","0","m"].join('');
}));

(zprint.ansi.color_str.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.ansi.color_str.cljs$lang$applyTo = (function (seq29141){
var G__29142 = cljs.core.first(seq29141);
var seq29141__$1 = cljs.core.next(seq29141);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29142,seq29141__$1);
}));


//# sourceMappingURL=zprint.ansi.js.map
