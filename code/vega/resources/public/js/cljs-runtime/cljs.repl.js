goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48854){
var map__48855 = p__48854;
var map__48855__$1 = (((((!((map__48855 == null))))?(((((map__48855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48855):map__48855);
var m = map__48855__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__48857_48958 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48858_48959 = null;
var count__48859_48960 = (0);
var i__48860_48961 = (0);
while(true){
if((i__48860_48961 < count__48859_48960)){
var f_48962 = chunk__48858_48959.cljs$core$IIndexed$_nth$arity$2(null,i__48860_48961);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48962], 0));


var G__48963 = seq__48857_48958;
var G__48964 = chunk__48858_48959;
var G__48965 = count__48859_48960;
var G__48966 = (i__48860_48961 + (1));
seq__48857_48958 = G__48963;
chunk__48858_48959 = G__48964;
count__48859_48960 = G__48965;
i__48860_48961 = G__48966;
continue;
} else {
var temp__5735__auto___48967 = cljs.core.seq(seq__48857_48958);
if(temp__5735__auto___48967){
var seq__48857_48968__$1 = temp__5735__auto___48967;
if(cljs.core.chunked_seq_QMARK_(seq__48857_48968__$1)){
var c__4556__auto___48969 = cljs.core.chunk_first(seq__48857_48968__$1);
var G__48970 = cljs.core.chunk_rest(seq__48857_48968__$1);
var G__48971 = c__4556__auto___48969;
var G__48972 = cljs.core.count(c__4556__auto___48969);
var G__48973 = (0);
seq__48857_48958 = G__48970;
chunk__48858_48959 = G__48971;
count__48859_48960 = G__48972;
i__48860_48961 = G__48973;
continue;
} else {
var f_48974 = cljs.core.first(seq__48857_48968__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48974], 0));


var G__48975 = cljs.core.next(seq__48857_48968__$1);
var G__48976 = null;
var G__48977 = (0);
var G__48978 = (0);
seq__48857_48958 = G__48975;
chunk__48858_48959 = G__48976;
count__48859_48960 = G__48977;
i__48860_48961 = G__48978;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48979 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48979], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48979)))?cljs.core.second(arglists_48979):arglists_48979)], 0));
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
var seq__48861_48980 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48862_48981 = null;
var count__48863_48982 = (0);
var i__48864_48983 = (0);
while(true){
if((i__48864_48983 < count__48863_48982)){
var vec__48875_48984 = chunk__48862_48981.cljs$core$IIndexed$_nth$arity$2(null,i__48864_48983);
var name_48985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48875_48984,(0),null);
var map__48878_48986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48875_48984,(1),null);
var map__48878_48987__$1 = (((((!((map__48878_48986 == null))))?(((((map__48878_48986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48878_48986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48878_48986):map__48878_48986);
var doc_48988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48878_48987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48878_48987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48985], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48989], 0));

if(cljs.core.truth_(doc_48988)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48988], 0));
} else {
}


var G__48990 = seq__48861_48980;
var G__48991 = chunk__48862_48981;
var G__48992 = count__48863_48982;
var G__48993 = (i__48864_48983 + (1));
seq__48861_48980 = G__48990;
chunk__48862_48981 = G__48991;
count__48863_48982 = G__48992;
i__48864_48983 = G__48993;
continue;
} else {
var temp__5735__auto___48994 = cljs.core.seq(seq__48861_48980);
if(temp__5735__auto___48994){
var seq__48861_48995__$1 = temp__5735__auto___48994;
if(cljs.core.chunked_seq_QMARK_(seq__48861_48995__$1)){
var c__4556__auto___48996 = cljs.core.chunk_first(seq__48861_48995__$1);
var G__48997 = cljs.core.chunk_rest(seq__48861_48995__$1);
var G__48998 = c__4556__auto___48996;
var G__48999 = cljs.core.count(c__4556__auto___48996);
var G__49000 = (0);
seq__48861_48980 = G__48997;
chunk__48862_48981 = G__48998;
count__48863_48982 = G__48999;
i__48864_48983 = G__49000;
continue;
} else {
var vec__48880_49001 = cljs.core.first(seq__48861_48995__$1);
var name_49002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48880_49001,(0),null);
var map__48883_49003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48880_49001,(1),null);
var map__48883_49004__$1 = (((((!((map__48883_49003 == null))))?(((((map__48883_49003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48883_49003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48883_49003):map__48883_49003);
var doc_49005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48883_49004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48883_49004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49002], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49006], 0));

if(cljs.core.truth_(doc_49005)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49005], 0));
} else {
}


var G__49007 = cljs.core.next(seq__48861_48995__$1);
var G__49008 = null;
var G__49009 = (0);
var G__49010 = (0);
seq__48861_48980 = G__49007;
chunk__48862_48981 = G__49008;
count__48863_48982 = G__49009;
i__48864_48983 = G__49010;
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

var seq__48885 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48886 = null;
var count__48887 = (0);
var i__48888 = (0);
while(true){
if((i__48888 < count__48887)){
var role = chunk__48886.cljs$core$IIndexed$_nth$arity$2(null,i__48888);
var temp__5735__auto___49011__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49011__$1)){
var spec_49012 = temp__5735__auto___49011__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49012)], 0));
} else {
}


var G__49013 = seq__48885;
var G__49014 = chunk__48886;
var G__49015 = count__48887;
var G__49016 = (i__48888 + (1));
seq__48885 = G__49013;
chunk__48886 = G__49014;
count__48887 = G__49015;
i__48888 = G__49016;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__48885);
if(temp__5735__auto____$1){
var seq__48885__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48885__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48885__$1);
var G__49017 = cljs.core.chunk_rest(seq__48885__$1);
var G__49018 = c__4556__auto__;
var G__49019 = cljs.core.count(c__4556__auto__);
var G__49020 = (0);
seq__48885 = G__49017;
chunk__48886 = G__49018;
count__48887 = G__49019;
i__48888 = G__49020;
continue;
} else {
var role = cljs.core.first(seq__48885__$1);
var temp__5735__auto___49021__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49021__$2)){
var spec_49022 = temp__5735__auto___49021__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49022)], 0));
} else {
}


var G__49023 = cljs.core.next(seq__48885__$1);
var G__49024 = null;
var G__49025 = (0);
var G__49026 = (0);
seq__48885 = G__49023;
chunk__48886 = G__49024;
count__48887 = G__49025;
i__48888 = G__49026;
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
var G__49027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49028 = cljs.core.ex_cause(t);
via = G__49027;
t = G__49028;
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
var map__48891 = datafied_throwable;
var map__48891__$1 = (((((!((map__48891 == null))))?(((((map__48891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48891):map__48891);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48891__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48891__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48891__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48892 = cljs.core.last(via);
var map__48892__$1 = (((((!((map__48892 == null))))?(((((map__48892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48892):map__48892);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48893 = data;
var map__48893__$1 = (((((!((map__48893 == null))))?(((((map__48893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48893):map__48893);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48894 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__48894__$1 = (((((!((map__48894 == null))))?(((((map__48894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48894):map__48894);
var top_data = map__48894__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48899 = phase;
var G__48899__$1 = (((G__48899 instanceof cljs.core.Keyword))?G__48899.fqn:null);
switch (G__48899__$1) {
case "read-source":
var map__48900 = data;
var map__48900__$1 = (((((!((map__48900 == null))))?(((((map__48900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48900):map__48900);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48900__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48900__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48902 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__48902__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48902,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48902);
var G__48902__$2 = (cljs.core.truth_((function (){var fexpr__48903 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48903.cljs$core$IFn$_invoke$arity$1 ? fexpr__48903.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48903.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48902__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48902__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48902__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48902__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48904 = top_data;
var G__48904__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48904,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48904);
var G__48904__$2 = (cljs.core.truth_((function (){var fexpr__48905 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48905.cljs$core$IFn$_invoke$arity$1 ? fexpr__48905.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48905.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48904__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48904__$1);
var G__48904__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48904__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48904__$2);
var G__48904__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48904__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48904__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48904__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48904__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48906 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(3),null);
var G__48909 = top_data;
var G__48909__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48909,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48909);
var G__48909__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48909__$1);
var G__48909__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48909__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48909__$2);
var G__48909__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48909__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48909__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48909__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48909__$4;
}

break;
case "execution":
var vec__48910 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48910,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48910,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48910,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48910,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48890_SHARP_){
var or__4126__auto__ = (p1__48890_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__48914 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48914.cljs$core$IFn$_invoke$arity$1 ? fexpr__48914.cljs$core$IFn$_invoke$arity$1(p1__48890_SHARP_) : fexpr__48914.call(null,p1__48890_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__48915 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48915__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48915,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48915);
var G__48915__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48915__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48915__$1);
var G__48915__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48915__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48915__$2);
var G__48915__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48915__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48915__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48915__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48915__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48899__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48918){
var map__48919 = p__48918;
var map__48919__$1 = (((((!((map__48919 == null))))?(((((map__48919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48919):map__48919);
var triage_data = map__48919__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__48921 = phase;
var G__48921__$1 = (((G__48921 instanceof cljs.core.Keyword))?G__48921.fqn:null);
switch (G__48921__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__48922 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__48923 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48924 = loc;
var G__48925 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48926_49031 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48927_49032 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48928_49033 = true;
var _STAR_print_fn_STAR__temp_val__48929_49034 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48928_49033);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48929_49034);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48916_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48916_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48927_49032);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48926_49031);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48922,G__48923,G__48924,G__48925) : format.call(null,G__48922,G__48923,G__48924,G__48925));

break;
case "macroexpansion":
var G__48930 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__48931 = cause_type;
var G__48932 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48933 = loc;
var G__48934 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48930,G__48931,G__48932,G__48933,G__48934) : format.call(null,G__48930,G__48931,G__48932,G__48933,G__48934));

break;
case "compile-syntax-check":
var G__48935 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__48936 = cause_type;
var G__48937 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48938 = loc;
var G__48939 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48935,G__48936,G__48937,G__48938,G__48939) : format.call(null,G__48935,G__48936,G__48937,G__48938,G__48939));

break;
case "compilation":
var G__48940 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__48941 = cause_type;
var G__48942 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48943 = loc;
var G__48944 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48940,G__48941,G__48942,G__48943,G__48944) : format.call(null,G__48940,G__48941,G__48942,G__48943,G__48944));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__48945 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__48946 = symbol;
var G__48947 = loc;
var G__48948 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48949_49035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48950_49036 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48951_49037 = true;
var _STAR_print_fn_STAR__temp_val__48952_49038 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48951_49037);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48952_49038);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48917_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48917_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48950_49036);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48949_49035);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48945,G__48946,G__48947,G__48948) : format.call(null,G__48945,G__48946,G__48947,G__48948));
} else {
var G__48953 = "Execution error%s at %s(%s).\n%s\n";
var G__48954 = cause_type;
var G__48955 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48956 = loc;
var G__48957 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48953,G__48954,G__48955,G__48956,G__48957) : format.call(null,G__48953,G__48954,G__48955,G__48956,G__48957));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48921__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
