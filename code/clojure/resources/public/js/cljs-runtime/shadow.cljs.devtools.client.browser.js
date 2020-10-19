goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52403 = arguments.length;
var i__4737__auto___52404 = (0);
while(true){
if((i__4737__auto___52404 < len__4736__auto___52403)){
args__4742__auto__.push((arguments[i__4737__auto___52404]));

var G__52405 = (i__4737__auto___52404 + (1));
i__4737__auto___52404 = G__52405;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52115){
var G__52116 = cljs.core.first(seq52115);
var seq52115__$1 = cljs.core.next(seq52115);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52116,seq52115__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52119 = cljs.core.seq(sources);
var chunk__52120 = null;
var count__52121 = (0);
var i__52122 = (0);
while(true){
if((i__52122 < count__52121)){
var map__52149 = chunk__52120.cljs$core$IIndexed$_nth$arity$2(null,i__52122);
var map__52149__$1 = (((((!((map__52149 == null))))?(((((map__52149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52149):map__52149);
var src = map__52149__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52149__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52152){var e_52406 = e52152;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52406);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52406.message)].join('')));
}

var G__52407 = seq__52119;
var G__52408 = chunk__52120;
var G__52409 = count__52121;
var G__52410 = (i__52122 + (1));
seq__52119 = G__52407;
chunk__52120 = G__52408;
count__52121 = G__52409;
i__52122 = G__52410;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52119);
if(temp__5735__auto__){
var seq__52119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52119__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52119__$1);
var G__52411 = cljs.core.chunk_rest(seq__52119__$1);
var G__52412 = c__4556__auto__;
var G__52413 = cljs.core.count(c__4556__auto__);
var G__52414 = (0);
seq__52119 = G__52411;
chunk__52120 = G__52412;
count__52121 = G__52413;
i__52122 = G__52414;
continue;
} else {
var map__52153 = cljs.core.first(seq__52119__$1);
var map__52153__$1 = (((((!((map__52153 == null))))?(((((map__52153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52153):map__52153);
var src = map__52153__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52155){var e_52415 = e52155;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52415);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52415.message)].join('')));
}

var G__52416 = cljs.core.next(seq__52119__$1);
var G__52417 = null;
var G__52418 = (0);
var G__52419 = (0);
seq__52119 = G__52416;
chunk__52120 = G__52417;
count__52121 = G__52418;
i__52122 = G__52419;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52156 = cljs.core.seq(js_requires);
var chunk__52157 = null;
var count__52158 = (0);
var i__52159 = (0);
while(true){
if((i__52159 < count__52158)){
var js_ns = chunk__52157.cljs$core$IIndexed$_nth$arity$2(null,i__52159);
var require_str_52420 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52420);


var G__52421 = seq__52156;
var G__52422 = chunk__52157;
var G__52423 = count__52158;
var G__52424 = (i__52159 + (1));
seq__52156 = G__52421;
chunk__52157 = G__52422;
count__52158 = G__52423;
i__52159 = G__52424;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52156);
if(temp__5735__auto__){
var seq__52156__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52156__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52156__$1);
var G__52425 = cljs.core.chunk_rest(seq__52156__$1);
var G__52426 = c__4556__auto__;
var G__52427 = cljs.core.count(c__4556__auto__);
var G__52428 = (0);
seq__52156 = G__52425;
chunk__52157 = G__52426;
count__52158 = G__52427;
i__52159 = G__52428;
continue;
} else {
var js_ns = cljs.core.first(seq__52156__$1);
var require_str_52429 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52429);


var G__52430 = cljs.core.next(seq__52156__$1);
var G__52431 = null;
var G__52432 = (0);
var G__52433 = (0);
seq__52156 = G__52430;
chunk__52157 = G__52431;
count__52158 = G__52432;
i__52159 = G__52433;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52172){
var map__52174 = p__52172;
var map__52174__$1 = (((((!((map__52174 == null))))?(((((map__52174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52174):map__52174);
var msg = map__52174__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52180(s__52182){
return (new cljs.core.LazySeq(null,(function (){
var s__52182__$1 = s__52182;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52182__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52190 = cljs.core.first(xs__6292__auto__);
var map__52190__$1 = (((((!((map__52190 == null))))?(((((map__52190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52190):map__52190);
var src = map__52190__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52190__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52190__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__52182__$1,map__52190,map__52190__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52174,map__52174__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52180_$_iter__52183(s__52184){
return (new cljs.core.LazySeq(null,((function (s__52182__$1,map__52190,map__52190__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52174,map__52174__$1,msg,info,reload_info){
return (function (){
var s__52184__$1 = s__52184;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52184__$1);
if(temp__5735__auto____$1){
var s__52184__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52184__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52184__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52186 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52185 = (0);
while(true){
if((i__52185 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__52185);
cljs.core.chunk_append(b__52186,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52434 = (i__52185 + (1));
i__52185 = G__52434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52186),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52180_$_iter__52183(cljs.core.chunk_rest(s__52184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52186),null);
}
} else {
var warning = cljs.core.first(s__52184__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52180_$_iter__52183(cljs.core.rest(s__52184__$2)));
}
} else {
return null;
}
break;
}
});})(s__52182__$1,map__52190,map__52190__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52174,map__52174__$1,msg,info,reload_info))
,null,null));
});})(s__52182__$1,map__52190,map__52190__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52174,map__52174__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52180(cljs.core.rest(s__52182__$1)));
} else {
var G__52435 = cljs.core.rest(s__52182__$1);
s__52182__$1 = G__52435;
continue;
}
} else {
var G__52436 = cljs.core.rest(s__52182__$1);
s__52182__$1 = G__52436;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52202_52437 = cljs.core.seq(warnings);
var chunk__52203_52438 = null;
var count__52204_52439 = (0);
var i__52205_52440 = (0);
while(true){
if((i__52205_52440 < count__52204_52439)){
var map__52228_52441 = chunk__52203_52438.cljs$core$IIndexed$_nth$arity$2(null,i__52205_52440);
var map__52228_52442__$1 = (((((!((map__52228_52441 == null))))?(((((map__52228_52441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52228_52441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52228_52441):map__52228_52441);
var w_52443 = map__52228_52442__$1;
var msg_52444__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228_52442__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228_52442__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228_52442__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228_52442__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52447)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52445),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52446),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52444__$1)].join(''));


var G__52448 = seq__52202_52437;
var G__52449 = chunk__52203_52438;
var G__52450 = count__52204_52439;
var G__52451 = (i__52205_52440 + (1));
seq__52202_52437 = G__52448;
chunk__52203_52438 = G__52449;
count__52204_52439 = G__52450;
i__52205_52440 = G__52451;
continue;
} else {
var temp__5735__auto___52452 = cljs.core.seq(seq__52202_52437);
if(temp__5735__auto___52452){
var seq__52202_52453__$1 = temp__5735__auto___52452;
if(cljs.core.chunked_seq_QMARK_(seq__52202_52453__$1)){
var c__4556__auto___52454 = cljs.core.chunk_first(seq__52202_52453__$1);
var G__52455 = cljs.core.chunk_rest(seq__52202_52453__$1);
var G__52456 = c__4556__auto___52454;
var G__52457 = cljs.core.count(c__4556__auto___52454);
var G__52458 = (0);
seq__52202_52437 = G__52455;
chunk__52203_52438 = G__52456;
count__52204_52439 = G__52457;
i__52205_52440 = G__52458;
continue;
} else {
var map__52236_52459 = cljs.core.first(seq__52202_52453__$1);
var map__52236_52460__$1 = (((((!((map__52236_52459 == null))))?(((((map__52236_52459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52236_52459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52236_52459):map__52236_52459);
var w_52461 = map__52236_52460__$1;
var msg_52462__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236_52460__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236_52460__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236_52460__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236_52460__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52465)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52463),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52464),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52462__$1)].join(''));


var G__52466 = cljs.core.next(seq__52202_52453__$1);
var G__52467 = null;
var G__52468 = (0);
var G__52469 = (0);
seq__52202_52437 = G__52466;
chunk__52203_52438 = G__52467;
count__52204_52439 = G__52468;
i__52205_52440 = G__52469;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52171_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52171_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52257){
var map__52260 = p__52257;
var map__52260__$1 = (((((!((map__52260 == null))))?(((((map__52260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52260):map__52260);
var msg = map__52260__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52260__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52264 = cljs.core.seq(updates);
var chunk__52266 = null;
var count__52267 = (0);
var i__52268 = (0);
while(true){
if((i__52268 < count__52267)){
var path = chunk__52266.cljs$core$IIndexed$_nth$arity$2(null,i__52268);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52326_52470 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52330_52471 = null;
var count__52331_52472 = (0);
var i__52332_52473 = (0);
while(true){
if((i__52332_52473 < count__52331_52472)){
var node_52474 = chunk__52330_52471.cljs$core$IIndexed$_nth$arity$2(null,i__52332_52473);
var path_match_52475 = shadow.cljs.devtools.client.browser.match_paths(node_52474.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52475)){
var new_link_52476 = (function (){var G__52340 = node_52474.cloneNode(true);
G__52340.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52475),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52340;
})();
(new_link_52476.onload = ((function (seq__52326_52470,chunk__52330_52471,count__52331_52472,i__52332_52473,seq__52264,chunk__52266,count__52267,i__52268,new_link_52476,path_match_52475,node_52474,path,map__52260,map__52260__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_52474);
});})(seq__52326_52470,chunk__52330_52471,count__52331_52472,i__52332_52473,seq__52264,chunk__52266,count__52267,i__52268,new_link_52476,path_match_52475,node_52474,path,map__52260,map__52260__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52475], 0));

goog.dom.insertSiblingAfter(new_link_52476,node_52474);


var G__52477 = seq__52326_52470;
var G__52478 = chunk__52330_52471;
var G__52479 = count__52331_52472;
var G__52480 = (i__52332_52473 + (1));
seq__52326_52470 = G__52477;
chunk__52330_52471 = G__52478;
count__52331_52472 = G__52479;
i__52332_52473 = G__52480;
continue;
} else {
var G__52481 = seq__52326_52470;
var G__52482 = chunk__52330_52471;
var G__52483 = count__52331_52472;
var G__52484 = (i__52332_52473 + (1));
seq__52326_52470 = G__52481;
chunk__52330_52471 = G__52482;
count__52331_52472 = G__52483;
i__52332_52473 = G__52484;
continue;
}
} else {
var temp__5735__auto___52485 = cljs.core.seq(seq__52326_52470);
if(temp__5735__auto___52485){
var seq__52326_52486__$1 = temp__5735__auto___52485;
if(cljs.core.chunked_seq_QMARK_(seq__52326_52486__$1)){
var c__4556__auto___52487 = cljs.core.chunk_first(seq__52326_52486__$1);
var G__52488 = cljs.core.chunk_rest(seq__52326_52486__$1);
var G__52489 = c__4556__auto___52487;
var G__52490 = cljs.core.count(c__4556__auto___52487);
var G__52491 = (0);
seq__52326_52470 = G__52488;
chunk__52330_52471 = G__52489;
count__52331_52472 = G__52490;
i__52332_52473 = G__52491;
continue;
} else {
var node_52492 = cljs.core.first(seq__52326_52486__$1);
var path_match_52493 = shadow.cljs.devtools.client.browser.match_paths(node_52492.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52493)){
var new_link_52494 = (function (){var G__52341 = node_52492.cloneNode(true);
G__52341.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52493),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52341;
})();
(new_link_52494.onload = ((function (seq__52326_52470,chunk__52330_52471,count__52331_52472,i__52332_52473,seq__52264,chunk__52266,count__52267,i__52268,new_link_52494,path_match_52493,node_52492,seq__52326_52486__$1,temp__5735__auto___52485,path,map__52260,map__52260__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_52492);
});})(seq__52326_52470,chunk__52330_52471,count__52331_52472,i__52332_52473,seq__52264,chunk__52266,count__52267,i__52268,new_link_52494,path_match_52493,node_52492,seq__52326_52486__$1,temp__5735__auto___52485,path,map__52260,map__52260__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52493], 0));

goog.dom.insertSiblingAfter(new_link_52494,node_52492);


var G__52495 = cljs.core.next(seq__52326_52486__$1);
var G__52496 = null;
var G__52497 = (0);
var G__52498 = (0);
seq__52326_52470 = G__52495;
chunk__52330_52471 = G__52496;
count__52331_52472 = G__52497;
i__52332_52473 = G__52498;
continue;
} else {
var G__52499 = cljs.core.next(seq__52326_52486__$1);
var G__52500 = null;
var G__52501 = (0);
var G__52502 = (0);
seq__52326_52470 = G__52499;
chunk__52330_52471 = G__52500;
count__52331_52472 = G__52501;
i__52332_52473 = G__52502;
continue;
}
}
} else {
}
}
break;
}


var G__52503 = seq__52264;
var G__52504 = chunk__52266;
var G__52505 = count__52267;
var G__52506 = (i__52268 + (1));
seq__52264 = G__52503;
chunk__52266 = G__52504;
count__52267 = G__52505;
i__52268 = G__52506;
continue;
} else {
var G__52507 = seq__52264;
var G__52508 = chunk__52266;
var G__52509 = count__52267;
var G__52510 = (i__52268 + (1));
seq__52264 = G__52507;
chunk__52266 = G__52508;
count__52267 = G__52509;
i__52268 = G__52510;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52264);
if(temp__5735__auto__){
var seq__52264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52264__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52264__$1);
var G__52511 = cljs.core.chunk_rest(seq__52264__$1);
var G__52512 = c__4556__auto__;
var G__52513 = cljs.core.count(c__4556__auto__);
var G__52514 = (0);
seq__52264 = G__52511;
chunk__52266 = G__52512;
count__52267 = G__52513;
i__52268 = G__52514;
continue;
} else {
var path = cljs.core.first(seq__52264__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52342_52515 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52345_52516 = null;
var count__52346_52517 = (0);
var i__52347_52518 = (0);
while(true){
if((i__52347_52518 < count__52346_52517)){
var node_52519 = chunk__52345_52516.cljs$core$IIndexed$_nth$arity$2(null,i__52347_52518);
var path_match_52520 = shadow.cljs.devtools.client.browser.match_paths(node_52519.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52520)){
var new_link_52521 = (function (){var G__52352 = node_52519.cloneNode(true);
G__52352.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52520),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52352;
})();
(new_link_52521.onload = ((function (seq__52342_52515,chunk__52345_52516,count__52346_52517,i__52347_52518,seq__52264,chunk__52266,count__52267,i__52268,new_link_52521,path_match_52520,node_52519,path,seq__52264__$1,temp__5735__auto__,map__52260,map__52260__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_52519);
});})(seq__52342_52515,chunk__52345_52516,count__52346_52517,i__52347_52518,seq__52264,chunk__52266,count__52267,i__52268,new_link_52521,path_match_52520,node_52519,path,seq__52264__$1,temp__5735__auto__,map__52260,map__52260__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52520], 0));

goog.dom.insertSiblingAfter(new_link_52521,node_52519);


var G__52522 = seq__52342_52515;
var G__52523 = chunk__52345_52516;
var G__52524 = count__52346_52517;
var G__52525 = (i__52347_52518 + (1));
seq__52342_52515 = G__52522;
chunk__52345_52516 = G__52523;
count__52346_52517 = G__52524;
i__52347_52518 = G__52525;
continue;
} else {
var G__52526 = seq__52342_52515;
var G__52527 = chunk__52345_52516;
var G__52528 = count__52346_52517;
var G__52529 = (i__52347_52518 + (1));
seq__52342_52515 = G__52526;
chunk__52345_52516 = G__52527;
count__52346_52517 = G__52528;
i__52347_52518 = G__52529;
continue;
}
} else {
var temp__5735__auto___52530__$1 = cljs.core.seq(seq__52342_52515);
if(temp__5735__auto___52530__$1){
var seq__52342_52531__$1 = temp__5735__auto___52530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52342_52531__$1)){
var c__4556__auto___52532 = cljs.core.chunk_first(seq__52342_52531__$1);
var G__52533 = cljs.core.chunk_rest(seq__52342_52531__$1);
var G__52534 = c__4556__auto___52532;
var G__52535 = cljs.core.count(c__4556__auto___52532);
var G__52536 = (0);
seq__52342_52515 = G__52533;
chunk__52345_52516 = G__52534;
count__52346_52517 = G__52535;
i__52347_52518 = G__52536;
continue;
} else {
var node_52537 = cljs.core.first(seq__52342_52531__$1);
var path_match_52538 = shadow.cljs.devtools.client.browser.match_paths(node_52537.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52538)){
var new_link_52539 = (function (){var G__52353 = node_52537.cloneNode(true);
G__52353.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52538),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52353;
})();
(new_link_52539.onload = ((function (seq__52342_52515,chunk__52345_52516,count__52346_52517,i__52347_52518,seq__52264,chunk__52266,count__52267,i__52268,new_link_52539,path_match_52538,node_52537,seq__52342_52531__$1,temp__5735__auto___52530__$1,path,seq__52264__$1,temp__5735__auto__,map__52260,map__52260__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_52537);
});})(seq__52342_52515,chunk__52345_52516,count__52346_52517,i__52347_52518,seq__52264,chunk__52266,count__52267,i__52268,new_link_52539,path_match_52538,node_52537,seq__52342_52531__$1,temp__5735__auto___52530__$1,path,seq__52264__$1,temp__5735__auto__,map__52260,map__52260__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52538], 0));

goog.dom.insertSiblingAfter(new_link_52539,node_52537);


var G__52540 = cljs.core.next(seq__52342_52531__$1);
var G__52541 = null;
var G__52542 = (0);
var G__52543 = (0);
seq__52342_52515 = G__52540;
chunk__52345_52516 = G__52541;
count__52346_52517 = G__52542;
i__52347_52518 = G__52543;
continue;
} else {
var G__52544 = cljs.core.next(seq__52342_52531__$1);
var G__52545 = null;
var G__52546 = (0);
var G__52547 = (0);
seq__52342_52515 = G__52544;
chunk__52345_52516 = G__52545;
count__52346_52517 = G__52546;
i__52347_52518 = G__52547;
continue;
}
}
} else {
}
}
break;
}


var G__52548 = cljs.core.next(seq__52264__$1);
var G__52549 = null;
var G__52550 = (0);
var G__52551 = (0);
seq__52264 = G__52548;
chunk__52266 = G__52549;
count__52267 = G__52550;
i__52268 = G__52551;
continue;
} else {
var G__52552 = cljs.core.next(seq__52264__$1);
var G__52553 = null;
var G__52554 = (0);
var G__52555 = (0);
seq__52264 = G__52552;
chunk__52266 = G__52553;
count__52267 = G__52554;
i__52268 = G__52555;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52354){
var map__52355 = p__52354;
var map__52355__$1 = (((((!((map__52355 == null))))?(((((map__52355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52355):map__52355);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52355__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52357){
var map__52358 = p__52357;
var map__52358__$1 = (((((!((map__52358 == null))))?(((((map__52358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52358):map__52358);
var _ = map__52358__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52360,done,error){
var map__52361 = p__52360;
var map__52361__$1 = (((((!((map__52361 == null))))?(((((map__52361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52361):map__52361);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52361__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52372,done,error){
var map__52374 = p__52372;
var map__52374__$1 = (((((!((map__52374 == null))))?(((((map__52374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52374):map__52374);
var msg = map__52374__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52374__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52374__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52374__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52378){
var map__52379 = p__52378;
var map__52379__$1 = (((((!((map__52379 == null))))?(((((map__52379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52379):map__52379);
var src = map__52379__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52379__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52381 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52381) : done.call(null,G__52381));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52382){
var map__52383 = p__52382;
var map__52383__$1 = (((((!((map__52383 == null))))?(((((map__52383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52383):map__52383);
var msg__$1 = map__52383__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52386){var ex = e52386;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52388){
var map__52389 = p__52388;
var map__52389__$1 = (((((!((map__52389 == null))))?(((((map__52389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52389):map__52389);
var env = map__52389__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52389__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52394){
var map__52395 = p__52394;
var map__52395__$1 = (((((!((map__52395 == null))))?(((((map__52395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52395):map__52395);
var msg = map__52395__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52395__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52397){
var map__52398 = p__52397;
var map__52398__$1 = (((((!((map__52398 == null))))?(((((map__52398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52398):map__52398);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52398__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52398__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52400){
var map__52401 = p__52400;
var map__52401__$1 = (((((!((map__52401 == null))))?(((((map__52401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52401):map__52401);
var svc = map__52401__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52401__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
