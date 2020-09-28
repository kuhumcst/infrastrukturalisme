goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54070){
var map__54071 = p__54070;
var map__54071__$1 = (((((!((map__54071 == null))))?(((((map__54071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54071):map__54071);
var m = map__54071__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54073_54174 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54074_54175 = null;
var count__54075_54176 = (0);
var i__54076_54177 = (0);
while(true){
if((i__54076_54177 < count__54075_54176)){
var f_54178 = chunk__54074_54175.cljs$core$IIndexed$_nth$arity$2(null,i__54076_54177);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54178], 0));


var G__54179 = seq__54073_54174;
var G__54180 = chunk__54074_54175;
var G__54181 = count__54075_54176;
var G__54182 = (i__54076_54177 + (1));
seq__54073_54174 = G__54179;
chunk__54074_54175 = G__54180;
count__54075_54176 = G__54181;
i__54076_54177 = G__54182;
continue;
} else {
var temp__5735__auto___54183 = cljs.core.seq(seq__54073_54174);
if(temp__5735__auto___54183){
var seq__54073_54184__$1 = temp__5735__auto___54183;
if(cljs.core.chunked_seq_QMARK_(seq__54073_54184__$1)){
var c__4556__auto___54185 = cljs.core.chunk_first(seq__54073_54184__$1);
var G__54186 = cljs.core.chunk_rest(seq__54073_54184__$1);
var G__54187 = c__4556__auto___54185;
var G__54188 = cljs.core.count(c__4556__auto___54185);
var G__54189 = (0);
seq__54073_54174 = G__54186;
chunk__54074_54175 = G__54187;
count__54075_54176 = G__54188;
i__54076_54177 = G__54189;
continue;
} else {
var f_54190 = cljs.core.first(seq__54073_54184__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54190], 0));


var G__54191 = cljs.core.next(seq__54073_54184__$1);
var G__54192 = null;
var G__54193 = (0);
var G__54194 = (0);
seq__54073_54174 = G__54191;
chunk__54074_54175 = G__54192;
count__54075_54176 = G__54193;
i__54076_54177 = G__54194;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54195 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54195], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54195)))?cljs.core.second(arglists_54195):arglists_54195)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54077_54196 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54078_54197 = null;
var count__54079_54198 = (0);
var i__54080_54199 = (0);
while(true){
if((i__54080_54199 < count__54079_54198)){
var vec__54091_54200 = chunk__54078_54197.cljs$core$IIndexed$_nth$arity$2(null,i__54080_54199);
var name_54201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54091_54200,(0),null);
var map__54094_54202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54091_54200,(1),null);
var map__54094_54203__$1 = (((((!((map__54094_54202 == null))))?(((((map__54094_54202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54094_54202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54094_54202):map__54094_54202);
var doc_54204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094_54203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094_54203__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54201], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54205], 0));

if(cljs.core.truth_(doc_54204)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54204], 0));
} else {
}


var G__54206 = seq__54077_54196;
var G__54207 = chunk__54078_54197;
var G__54208 = count__54079_54198;
var G__54209 = (i__54080_54199 + (1));
seq__54077_54196 = G__54206;
chunk__54078_54197 = G__54207;
count__54079_54198 = G__54208;
i__54080_54199 = G__54209;
continue;
} else {
var temp__5735__auto___54210 = cljs.core.seq(seq__54077_54196);
if(temp__5735__auto___54210){
var seq__54077_54211__$1 = temp__5735__auto___54210;
if(cljs.core.chunked_seq_QMARK_(seq__54077_54211__$1)){
var c__4556__auto___54212 = cljs.core.chunk_first(seq__54077_54211__$1);
var G__54213 = cljs.core.chunk_rest(seq__54077_54211__$1);
var G__54214 = c__4556__auto___54212;
var G__54215 = cljs.core.count(c__4556__auto___54212);
var G__54216 = (0);
seq__54077_54196 = G__54213;
chunk__54078_54197 = G__54214;
count__54079_54198 = G__54215;
i__54080_54199 = G__54216;
continue;
} else {
var vec__54096_54217 = cljs.core.first(seq__54077_54211__$1);
var name_54218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54096_54217,(0),null);
var map__54099_54219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54096_54217,(1),null);
var map__54099_54220__$1 = (((((!((map__54099_54219 == null))))?(((((map__54099_54219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54099_54219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54099_54219):map__54099_54219);
var doc_54221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54099_54220__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54099_54220__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54218], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54222], 0));

if(cljs.core.truth_(doc_54221)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54221], 0));
} else {
}


var G__54223 = cljs.core.next(seq__54077_54211__$1);
var G__54224 = null;
var G__54225 = (0);
var G__54226 = (0);
seq__54077_54196 = G__54223;
chunk__54078_54197 = G__54224;
count__54079_54198 = G__54225;
i__54080_54199 = G__54226;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54101 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54102 = null;
var count__54103 = (0);
var i__54104 = (0);
while(true){
if((i__54104 < count__54103)){
var role = chunk__54102.cljs$core$IIndexed$_nth$arity$2(null,i__54104);
var temp__5735__auto___54227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54227__$1)){
var spec_54228 = temp__5735__auto___54227__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54228)], 0));
} else {
}


var G__54229 = seq__54101;
var G__54230 = chunk__54102;
var G__54231 = count__54103;
var G__54232 = (i__54104 + (1));
seq__54101 = G__54229;
chunk__54102 = G__54230;
count__54103 = G__54231;
i__54104 = G__54232;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54101);
if(temp__5735__auto____$1){
var seq__54101__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54101__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54101__$1);
var G__54233 = cljs.core.chunk_rest(seq__54101__$1);
var G__54234 = c__4556__auto__;
var G__54235 = cljs.core.count(c__4556__auto__);
var G__54236 = (0);
seq__54101 = G__54233;
chunk__54102 = G__54234;
count__54103 = G__54235;
i__54104 = G__54236;
continue;
} else {
var role = cljs.core.first(seq__54101__$1);
var temp__5735__auto___54237__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54237__$2)){
var spec_54238 = temp__5735__auto___54237__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54238)], 0));
} else {
}


var G__54239 = cljs.core.next(seq__54101__$1);
var G__54240 = null;
var G__54241 = (0);
var G__54242 = (0);
seq__54101 = G__54239;
chunk__54102 = G__54240;
count__54103 = G__54241;
i__54104 = G__54242;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54244 = cljs.core.ex_cause(t);
via = G__54243;
t = G__54244;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54107 = datafied_throwable;
var map__54107__$1 = (((((!((map__54107 == null))))?(((((map__54107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54107):map__54107);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54107__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54108 = cljs.core.last(via);
var map__54108__$1 = (((((!((map__54108 == null))))?(((((map__54108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54108):map__54108);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54109 = data;
var map__54109__$1 = (((((!((map__54109 == null))))?(((((map__54109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54109):map__54109);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54110 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54110__$1 = (((((!((map__54110 == null))))?(((((map__54110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54110):map__54110);
var top_data = map__54110__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54110__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54115 = phase;
var G__54115__$1 = (((G__54115 instanceof cljs.core.Keyword))?G__54115.fqn:null);
switch (G__54115__$1) {
case "read-source":
var map__54116 = data;
var map__54116__$1 = (((((!((map__54116 == null))))?(((((map__54116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54116):map__54116);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54116__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54116__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54118 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54118__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54118,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54118);
var G__54118__$2 = (cljs.core.truth_((function (){var fexpr__54119 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54119.cljs$core$IFn$_invoke$arity$1 ? fexpr__54119.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54119.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54118__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54118__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54118__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54120 = top_data;
var G__54120__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54120,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54120);
var G__54120__$2 = (cljs.core.truth_((function (){var fexpr__54121 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54121.cljs$core$IFn$_invoke$arity$1 ? fexpr__54121.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54121.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54120__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54120__$1);
var G__54120__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54120__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54120__$2);
var G__54120__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54120__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54120__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54120__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54120__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54122 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54122,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54122,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54122,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54122,(3),null);
var G__54125 = top_data;
var G__54125__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54125,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54125);
var G__54125__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54125__$1);
var G__54125__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54125__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54125__$2);
var G__54125__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54125__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54125__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54125__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54125__$4;
}

break;
case "execution":
var vec__54126 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54126,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54126,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54126,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54126,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54106_SHARP_){
var or__4126__auto__ = (p1__54106_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54130 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54130.cljs$core$IFn$_invoke$arity$1 ? fexpr__54130.cljs$core$IFn$_invoke$arity$1(p1__54106_SHARP_) : fexpr__54130.call(null,p1__54106_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54131 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54131__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54131,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54131);
var G__54131__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54131__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54131__$1);
var G__54131__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54131__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54131__$2);
var G__54131__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54131__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54131__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54131__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54131__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54115__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54134){
var map__54135 = p__54134;
var map__54135__$1 = (((((!((map__54135 == null))))?(((((map__54135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54135):map__54135);
var triage_data = map__54135__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54137 = phase;
var G__54137__$1 = (((G__54137 instanceof cljs.core.Keyword))?G__54137.fqn:null);
switch (G__54137__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54138 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54140 = loc;
var G__54141 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54142_54247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54143_54248 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54144_54249 = true;
var _STAR_print_fn_STAR__temp_val__54145_54250 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54144_54249);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54145_54250);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54132_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54132_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54143_54248);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54142_54247);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54138,G__54139,G__54140,G__54141) : format.call(null,G__54138,G__54139,G__54140,G__54141));

break;
case "macroexpansion":
var G__54146 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54147 = cause_type;
var G__54148 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54149 = loc;
var G__54150 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54146,G__54147,G__54148,G__54149,G__54150) : format.call(null,G__54146,G__54147,G__54148,G__54149,G__54150));

break;
case "compile-syntax-check":
var G__54151 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54152 = cause_type;
var G__54153 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54154 = loc;
var G__54155 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54151,G__54152,G__54153,G__54154,G__54155) : format.call(null,G__54151,G__54152,G__54153,G__54154,G__54155));

break;
case "compilation":
var G__54156 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54157 = cause_type;
var G__54158 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54159 = loc;
var G__54160 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54156,G__54157,G__54158,G__54159,G__54160) : format.call(null,G__54156,G__54157,G__54158,G__54159,G__54160));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54161 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54162 = symbol;
var G__54163 = loc;
var G__54164 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54165_54251 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54166_54252 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54167_54253 = true;
var _STAR_print_fn_STAR__temp_val__54168_54254 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54167_54253);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54168_54254);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54133_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54133_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54166_54252);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54165_54251);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54161,G__54162,G__54163,G__54164) : format.call(null,G__54161,G__54162,G__54163,G__54164));
} else {
var G__54169 = "Execution error%s at %s(%s).\n%s\n";
var G__54170 = cause_type;
var G__54171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54172 = loc;
var G__54173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54169,G__54170,G__54171,G__54172,G__54173) : format.call(null,G__54169,G__54170,G__54171,G__54172,G__54173));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54137__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
