goog.provide('zprint.range');
/**
 * If a line number n is in a particular edamame row, return the row map.
 *   If it is not in the row, return +1 or -1 to indicate which direction
 *   to look.
 */
zprint.range.in_row_QMARK_ = (function zprint$range$in_row_QMARK_(n,row){
if(cljs.core.truth_(row)){
if((((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row) <= n)) && ((n <= new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row))))){
return row;
} else {
if((n < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row))){
return (-1);
} else {
return (1);
}
}
} else {
return null;
}
});
/**
 * Given two rows, is the first before the second?
 */
zprint.range.row_before_QMARK_ = (function zprint$range$row_before_QMARK_(row_a,row_b){
return (new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row_a) < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row_b));
});
/**
 * Given two rows, if the linenumber is between the rows, return true, else
 *   nil.
 */
zprint.range.between_rows_QMARK_ = (function zprint$range$between_rows_QMARK_(linenumber,row_a,row_b){
if(((cljs.core.map_QMARK_(row_a)) && (cljs.core.map_QMARK_(row_b)))){
if(zprint.range.row_before_QMARK_(row_a,row_b)){
return (((new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row_a) < linenumber)) && ((linenumber < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row_b))));
} else {
return (((new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(row_b) < linenumber)) && ((linenumber < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(row_a))));
}
} else {
return null;
}
});
/**
 * Given a row-vec, and a current index into the row-vec, if the
 *   linenumber is within that row, return the index to that row.   If
 *   the linenumber is not in that row, then scan either way for
 *   max-tries looking for a match for this linenumber.  Return the
 *   row index if a row is found containing this linenumber. If it is
 *   between two rows, return the row after.  If we fall off the either
 *   end of the row-vec, then return :before-beginning or :beyone-end.  
 *   If we don't find anything after trying for max-tries, :before or
 *   :after, depending on which way we should try next.
 */
zprint.range.scan_for_row = (function zprint$range$scan_for_row(row_vec,row_vec_index,linenumber,max_tries){
var current_index = row_vec_index;
var previous_index = null;
var tries = (0);
while(true){
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_vec,current_index);
var row_or_direction = zprint.range.in_row_QMARK_(linenumber,row);
if(cljs.core.map_QMARK_(row_or_direction)){
return current_index;
} else {
if((row_or_direction == null)){
if((current_index > (0))){
return new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285);
} else {
return new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715);
}
} else {
if((tries >= max_tries)){
if((row_or_direction > (0))){
return new cljs.core.Keyword(null,"after","after",594996914);
} else {
return new cljs.core.Keyword(null,"before","before",-1633692388);
}
} else {
var next_index = (current_index + row_or_direction);
var next_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_vec,next_index);
var row_or_direction__$1 = zprint.range.in_row_QMARK_(linenumber,next_row);
if(cljs.core.map_QMARK_(row_or_direction__$1)){
return next_index;
} else {
if((row_or_direction__$1 == null)){
if((next_index > (0))){
return new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285);
} else {
return new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715);
}
} else {
if(cljs.core.truth_(zprint.range.between_rows_QMARK_(linenumber,row,next_row))){
if(zprint.range.row_before_QMARK_(row,next_row)){
return next_index;
} else {
return current_index;
}
} else {
var G__40902 = (current_index + row_or_direction__$1);
var G__40903 = current_index;
var G__40904 = (tries + (1));
current_index = G__40902;
previous_index = G__40903;
tries = G__40904;
continue;
}

}
}
}

}
}
break;
}
});
/**
 * Return the absolute value of a number.
 */
zprint.range.abs = (function zprint$range$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
 * Given a vector of rows, find the row that contains a line number,
 *   linenumber, and return the number of that row in the vector.
 *   row-vec looks like this: 
 *   [{:row 2, :col 1, :end-row 7, :end-col 21}
 * {:row 9, :col 1, :end-row 18, :end-col 6} 
 * {:row 20, :col 1, :end-row 29, :end-col 6}]
 *   If none exists, return the next row. Note that line numbers are 1
 *   based, not zero based for this routine and the information in
 *   row-vec, but the index into row-vec that this routine returns is
 *   zero based.  Uses a binary search. If the line number is before the
 *   first information in the row-vec, returns :before-beginning, and
 *   if it is after the last information in the row-vec, returns
 *   :beyond-end. Note that the row-vec as returned from edamame
 *   parse-string-all contains not only maps like {:row 5 :end-row 10}
 *   but also nils for things that didn't have paired delimiters around
 *   them (e.g., keywords, strings, etc.).  You must remove those
 *   from row-vec before calling find-row.  Note that find-row returns an 
 *   index into row-vec, and it must be the row-vec that has had nils 
 *   removed from it (or this routine would do that for you).
 */
zprint.range.find_row = (function zprint$range$find_row(var_args){
var G__40878 = arguments.length;
switch (G__40878) {
case 4:
return zprint.range.find_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.range.find_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.range.find_row.cljs$core$IFn$_invoke$arity$4 = (function (row_vec,linenumber,dbg_QMARK_,scan_size){
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["find-row: linenumber:",linenumber,"scan-size:",scan_size], 0));
} else {
}

var size = cljs.core.count(row_vec);
var row_vec_index = ((size / (2)) | (0));
var previous_index = (0);
var tries = (0);
while(true){
if((tries > (10))){
return new cljs.core.Keyword(null,"fail","fail",1706214930);
} else {
var maybe_index = zprint.range.scan_for_row(row_vec,row_vec_index,linenumber,scan_size);
if(typeof maybe_index === 'number'){
return maybe_index;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_index,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_index,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285))))){
return maybe_index;
} else {
var G__40907 = (function (){var G__40886 = row_vec_index;
var G__40887 = ((zprint.range.abs((row_vec_index - previous_index)) / (2)) | (0));
var fexpr__40885 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_index,new cljs.core.Keyword(null,"before","before",-1633692388)))?cljs.core._:cljs.core._PLUS_);
return (fexpr__40885.cljs$core$IFn$_invoke$arity$2 ? fexpr__40885.cljs$core$IFn$_invoke$arity$2(G__40886,G__40887) : fexpr__40885.call(null,G__40886,G__40887));
})();
var G__40908 = row_vec_index;
var G__40909 = (tries + (1));
row_vec_index = G__40907;
previous_index = G__40908;
tries = G__40909;
continue;

}
}
}
break;
}
}));

(zprint.range.find_row.cljs$core$IFn$_invoke$arity$3 = (function (row_vec,n,dbg_QMARK_){
return zprint.range.find_row.cljs$core$IFn$_invoke$arity$4(row_vec,n,dbg_QMARK_,(4));
}));

(zprint.range.find_row.cljs$lang$maxFixedArity = 4);

/**
 * Given a sequence of lines and a starting line index in that sequence,
 *   return the index of the first non-blank line including or after that
 *   starting line index.
 */
zprint.range.next_non_blank_line = (function zprint$range$next_non_blank_line(line_vec,index){
var max_idx = (cljs.core.count(line_vec) - (1));
var idx = index;
while(true){
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(line_vec,idx);
if((((!(cljs.core.empty_QMARK_(clojure.string.trim(line))))) || ((idx >= max_idx)))){
return idx;
} else {
var G__40911 = (idx + (1));
idx = G__40911;
continue;
}
break;
}
});
/**
 * Given a sequence of lines and a starting line index in that sequence,
 *   return the index of the first previous non-blank line including or before
 *   that starting line index.  Returns -1 if no non-blank line found.
 */
zprint.range.previous_non_blank_line = (function zprint$range$previous_non_blank_line(line_vec,index){
var idx = index;
while(true){
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(line_vec,idx);
if((!(cljs.core.empty_QMARK_(clojure.string.trim(line))))){
return idx;
} else {
if((idx === (0))){
return (-1);
} else {
var G__40912 = (idx - (1));
idx = G__40912;
continue;

}
}
break;
}
});
/**
 * Given a string which contains lines and a vector of those lines,
 *   and a range of lines inside of them, expand the range such that
 *   it covers everything from the first non-blank line beyond the
 *   previous top level expression before the start to the end of the
 *   top level expression containing the end of the range.  Returns
 *   [actual-start actual-end].  Note that start, end, actual-start
 *   and actual-end are all zero based line numbers.
 */
zprint.range.expand_range_to_top_level = (function zprint$range$expand_range_to_top_level(filestring,lines,start,end,dbg_QMARK_){
if(cljs.core.truth_(dbg_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand-range-to-top-level: start:",start,"end:",end], 0));
} else {
}

var line_count = cljs.core.count(lines);
var start__$1 = ((typeof start === 'number')?start:(0));
var end__$1 = ((typeof end === 'number')?end:line_count);
var end__$2 = (((end__$1 < start__$1))?start__$1:end__$1);
var row_vec = (function (){try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2(filestring,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all","all",892129742),true,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null),new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),(function (expr){
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(expr));
}),new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core._STAR_ns_STAR_], null)], null)));
}catch (e40893){var e = e40893;
return null;
}})();
var row_vec__$1 = (cljs.core.truth_(row_vec)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,row_vec)):null);
var _ = (cljs.core.truth_(dbg_QMARK_)?cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row_vec__$1], 0)):null);
var start_row_idx = (cljs.core.truth_(row_vec__$1)?zprint.range.find_row.cljs$core$IFn$_invoke$arity$3(row_vec__$1,(start__$1 + (1)),dbg_QMARK_):new cljs.core.Keyword(null,"fail","fail",1706214930));
var ___$1 = (cljs.core.truth_(dbg_QMARK_)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand-range-to-top-level start-row-idx:",start_row_idx,((typeof start_row_idx === 'number')?["row:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_vec__$1,start_row_idx)),"previous row:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_vec__$1,(function (){var x__4295__auto__ = (0);
var y__4296__auto__ = (start_row_idx - (1));
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()))].join(''):"")], 0)):null);
var actual_start = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row_idx,new cljs.core.Keyword(null,"fail","fail",1706214930)))?(-1):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row_idx,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715))) && ((!((start__$1 < (0)))))))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row_idx,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715)))?(-1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row_idx,(0)))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_row_idx,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285)))?line_count:new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_vec__$1,(start_row_idx - (1))))
)))));
var actual_start__$1 = (((((actual_start < (1))) || ((actual_start >= line_count))))?actual_start:zprint.range.next_non_blank_line(lines,actual_start));
var end_row_idx = (cljs.core.truth_(row_vec__$1)?zprint.range.find_row.cljs$core$IFn$_invoke$arity$3(row_vec__$1,(end__$2 + (1)),dbg_QMARK_):new cljs.core.Keyword(null,"fail","fail",1706214930));
var ___$2 = (cljs.core.truth_(dbg_QMARK_)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand-range-to-top-level end-row-idx:",end_row_idx,((typeof end_row_idx === 'number')?["row:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_vec__$1,end_row_idx))].join(''):"")], 0)):null);
var actual_end = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row_idx,new cljs.core.Keyword(null,"fail","fail",1706214930))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row_idx,new cljs.core.Keyword(null,"beyond-end","beyond-end",487000285)))))?line_count:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row_idx,new cljs.core.Keyword(null,"before-beginning","before-beginning",485705715)))?new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282):(function (){var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_vec__$1,end_row_idx);
if(((end__$2 + (1)) < new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_row))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_row_idx,start_row_idx)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
return zprint.range.previous_non_blank_line(lines,end__$2);
}
} else {
return (new cljs.core.Keyword(null,"end-row","end-row",-545103581).cljs$core$IFn$_invoke$arity$1(end_row) - (1));
}
})()
));
var actual_start__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actual_end,new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282)))?(-1):actual_start__$1);
var actual_end__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actual_end,new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282)))?(-1):actual_end);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actual_start__$2,actual_end__$1], null);
});
/**
 * Given lines, a sequence of lines, and a start and end of a range,
 *   split the sequence of lines into three parts: [before-lines range
 *   after-lines].  If any of these collections would be empty, return
 *   an empty sequence. End must be equal to or greater than start. If
 *   end is neg?, there will be no range.
 */
zprint.range.split_out_range = (function zprint$range$split_out_range(lines,start,end){
var start__$1 = (function (){var x__4295__auto__ = start;
var y__4296__auto__ = (0);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
var before = start__$1;
var range = (((end < (0)))?(0):((end - start__$1) + (1)));
var after = ((cljs.core.count(lines) - (1)) - end);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(before,lines),cljs.core.take.cljs$core$IFn$_invoke$arity$2(range,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(before,lines)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(after,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((before + range),lines))], null);
});
/**
 * Given before-lines, range, and after-lines where before-lines
 *   and after-lines are sequences of lines, and range is a string
 *   which has been formatted, reassemble these three chunks into a
 *   single string with appropriate newlines joining them together.
 *   Note that this is *not* an inverse to split-out-range, because
 *   in that routine range is a seq of lines, and in this routine
 *   range is a string.  Note also that we only join them with a 
 *   newline if there are two pieces, otherwise we get extra lines.
 */
zprint.range.reassemble_range = (function zprint$range$reassemble_range(before_lines,range,after_lines){
var before_QMARK_ = (!(cljs.core.empty_QMARK_(before_lines)));
var before_lines__$1 = ((before_QMARK_)?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",before_lines):"");
var range_QMARK_ = (!(cljs.core.empty_QMARK_(range)));
var after_QMARK_ = (!(cljs.core.empty_QMARK_(after_lines)));
var after_lines__$1 = ((after_QMARK_)?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",after_lines):"");
var before_range = ((((before_QMARK_) && (range_QMARK_)))?"\n":"");
var range_after = ((((range_QMARK_) && (after_QMARK_)))?"\n":"");
var range_after__$1 = (((((!(range_QMARK_))) && (((before_QMARK_) && (after_QMARK_)))))?"\n":range_after);
return [before_lines__$1,before_range,cljs.core.str.cljs$core$IFn$_invoke$arity$1(range),range_after__$1,after_lines__$1].join('');
});

//# sourceMappingURL=zprint.range.js.map
