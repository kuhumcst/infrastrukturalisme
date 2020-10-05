goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48701 = arguments.length;
var i__4737__auto___48702 = (0);
while(true){
if((i__4737__auto___48702 < len__4736__auto___48701)){
args__4742__auto__.push((arguments[i__4737__auto___48702]));

var G__48703 = (i__4737__auto___48702 + (1));
i__4737__auto___48702 = G__48703;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48534){
var G__48535 = cljs.core.first(seq48534);
var seq48534__$1 = cljs.core.next(seq48534);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48535,seq48534__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48544 = cljs.core.seq(sources);
var chunk__48545 = null;
var count__48546 = (0);
var i__48547 = (0);
while(true){
if((i__48547 < count__48546)){
var map__48567 = chunk__48545.cljs$core$IIndexed$_nth$arity$2(null,i__48547);
var map__48567__$1 = (((((!((map__48567 == null))))?(((((map__48567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48567):map__48567);
var src = map__48567__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48569){var e_48704 = e48569;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48704);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48704.message)].join('')));
}

var G__48705 = seq__48544;
var G__48706 = chunk__48545;
var G__48707 = count__48546;
var G__48708 = (i__48547 + (1));
seq__48544 = G__48705;
chunk__48545 = G__48706;
count__48546 = G__48707;
i__48547 = G__48708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48544);
if(temp__5735__auto__){
var seq__48544__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48544__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48544__$1);
var G__48709 = cljs.core.chunk_rest(seq__48544__$1);
var G__48710 = c__4556__auto__;
var G__48711 = cljs.core.count(c__4556__auto__);
var G__48712 = (0);
seq__48544 = G__48709;
chunk__48545 = G__48710;
count__48546 = G__48711;
i__48547 = G__48712;
continue;
} else {
var map__48570 = cljs.core.first(seq__48544__$1);
var map__48570__$1 = (((((!((map__48570 == null))))?(((((map__48570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48570):map__48570);
var src = map__48570__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48572){var e_48713 = e48572;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48713);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48713.message)].join('')));
}

var G__48714 = cljs.core.next(seq__48544__$1);
var G__48715 = null;
var G__48716 = (0);
var G__48717 = (0);
seq__48544 = G__48714;
chunk__48545 = G__48715;
count__48546 = G__48716;
i__48547 = G__48717;
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
var seq__48577 = cljs.core.seq(js_requires);
var chunk__48578 = null;
var count__48579 = (0);
var i__48580 = (0);
while(true){
if((i__48580 < count__48579)){
var js_ns = chunk__48578.cljs$core$IIndexed$_nth$arity$2(null,i__48580);
var require_str_48718 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48718);


var G__48719 = seq__48577;
var G__48720 = chunk__48578;
var G__48721 = count__48579;
var G__48722 = (i__48580 + (1));
seq__48577 = G__48719;
chunk__48578 = G__48720;
count__48579 = G__48721;
i__48580 = G__48722;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48577);
if(temp__5735__auto__){
var seq__48577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48577__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48577__$1);
var G__48723 = cljs.core.chunk_rest(seq__48577__$1);
var G__48724 = c__4556__auto__;
var G__48725 = cljs.core.count(c__4556__auto__);
var G__48726 = (0);
seq__48577 = G__48723;
chunk__48578 = G__48724;
count__48579 = G__48725;
i__48580 = G__48726;
continue;
} else {
var js_ns = cljs.core.first(seq__48577__$1);
var require_str_48727 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48727);


var G__48728 = cljs.core.next(seq__48577__$1);
var G__48729 = null;
var G__48730 = (0);
var G__48731 = (0);
seq__48577 = G__48728;
chunk__48578 = G__48729;
count__48579 = G__48730;
i__48580 = G__48731;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48586){
var map__48587 = p__48586;
var map__48587__$1 = (((((!((map__48587 == null))))?(((((map__48587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48587):map__48587);
var msg = map__48587__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48589(s__48590){
return (new cljs.core.LazySeq(null,(function (){
var s__48590__$1 = s__48590;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48590__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__48596 = cljs.core.first(xs__6292__auto__);
var map__48596__$1 = (((((!((map__48596 == null))))?(((((map__48596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48596):map__48596);
var src = map__48596__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__48590__$1,map__48596,map__48596__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48587,map__48587__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48589_$_iter__48591(s__48592){
return (new cljs.core.LazySeq(null,((function (s__48590__$1,map__48596,map__48596__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48587,map__48587__$1,msg,info,reload_info){
return (function (){
var s__48592__$1 = s__48592;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__48592__$1);
if(temp__5735__auto____$1){
var s__48592__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48592__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__48592__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__48594 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__48593 = (0);
while(true){
if((i__48593 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__48593);
cljs.core.chunk_append(b__48594,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48732 = (i__48593 + (1));
i__48593 = G__48732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48594),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48589_$_iter__48591(cljs.core.chunk_rest(s__48592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48594),null);
}
} else {
var warning = cljs.core.first(s__48592__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48589_$_iter__48591(cljs.core.rest(s__48592__$2)));
}
} else {
return null;
}
break;
}
});})(s__48590__$1,map__48596,map__48596__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48587,map__48587__$1,msg,info,reload_info))
,null,null));
});})(s__48590__$1,map__48596,map__48596__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__48587,map__48587__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48589(cljs.core.rest(s__48590__$1)));
} else {
var G__48733 = cljs.core.rest(s__48590__$1);
s__48590__$1 = G__48733;
continue;
}
} else {
var G__48734 = cljs.core.rest(s__48590__$1);
s__48590__$1 = G__48734;
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
var seq__48600_48735 = cljs.core.seq(warnings);
var chunk__48601_48736 = null;
var count__48602_48737 = (0);
var i__48603_48738 = (0);
while(true){
if((i__48603_48738 < count__48602_48737)){
var map__48608_48739 = chunk__48601_48736.cljs$core$IIndexed$_nth$arity$2(null,i__48603_48738);
var map__48608_48740__$1 = (((((!((map__48608_48739 == null))))?(((((map__48608_48739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48608_48739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48608_48739):map__48608_48739);
var w_48741 = map__48608_48740__$1;
var msg_48742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48608_48740__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48608_48740__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48608_48740__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48608_48740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48745)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48743),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48744),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48742__$1)].join(''));


var G__48746 = seq__48600_48735;
var G__48747 = chunk__48601_48736;
var G__48748 = count__48602_48737;
var G__48749 = (i__48603_48738 + (1));
seq__48600_48735 = G__48746;
chunk__48601_48736 = G__48747;
count__48602_48737 = G__48748;
i__48603_48738 = G__48749;
continue;
} else {
var temp__5735__auto___48750 = cljs.core.seq(seq__48600_48735);
if(temp__5735__auto___48750){
var seq__48600_48751__$1 = temp__5735__auto___48750;
if(cljs.core.chunked_seq_QMARK_(seq__48600_48751__$1)){
var c__4556__auto___48752 = cljs.core.chunk_first(seq__48600_48751__$1);
var G__48753 = cljs.core.chunk_rest(seq__48600_48751__$1);
var G__48754 = c__4556__auto___48752;
var G__48755 = cljs.core.count(c__4556__auto___48752);
var G__48756 = (0);
seq__48600_48735 = G__48753;
chunk__48601_48736 = G__48754;
count__48602_48737 = G__48755;
i__48603_48738 = G__48756;
continue;
} else {
var map__48610_48757 = cljs.core.first(seq__48600_48751__$1);
var map__48610_48758__$1 = (((((!((map__48610_48757 == null))))?(((((map__48610_48757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48610_48757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48610_48757):map__48610_48757);
var w_48759 = map__48610_48758__$1;
var msg_48760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48610_48758__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48610_48758__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48610_48758__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48610_48758__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48763)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48761),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48762),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48760__$1)].join(''));


var G__48764 = cljs.core.next(seq__48600_48751__$1);
var G__48765 = null;
var G__48766 = (0);
var G__48767 = (0);
seq__48600_48735 = G__48764;
chunk__48601_48736 = G__48765;
count__48602_48737 = G__48766;
i__48603_48738 = G__48767;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48585_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48585_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48612){
var map__48613 = p__48612;
var map__48613__$1 = (((((!((map__48613 == null))))?(((((map__48613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48613):map__48613);
var msg = map__48613__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48613__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48615 = cljs.core.seq(updates);
var chunk__48617 = null;
var count__48618 = (0);
var i__48619 = (0);
while(true){
if((i__48619 < count__48618)){
var path = chunk__48617.cljs$core$IIndexed$_nth$arity$2(null,i__48619);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48645_48768 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48648_48769 = null;
var count__48649_48770 = (0);
var i__48650_48771 = (0);
while(true){
if((i__48650_48771 < count__48649_48770)){
var node_48772 = chunk__48648_48769.cljs$core$IIndexed$_nth$arity$2(null,i__48650_48771);
var path_match_48773 = shadow.cljs.devtools.client.browser.match_paths(node_48772.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48773)){
var new_link_48774 = (function (){var G__48655 = node_48772.cloneNode(true);
G__48655.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48773),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48655;
})();
(new_link_48774.onload = ((function (seq__48645_48768,chunk__48648_48769,count__48649_48770,i__48650_48771,seq__48615,chunk__48617,count__48618,i__48619,new_link_48774,path_match_48773,node_48772,path,map__48613,map__48613__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_48772);
});})(seq__48645_48768,chunk__48648_48769,count__48649_48770,i__48650_48771,seq__48615,chunk__48617,count__48618,i__48619,new_link_48774,path_match_48773,node_48772,path,map__48613,map__48613__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48773], 0));

goog.dom.insertSiblingAfter(new_link_48774,node_48772);


var G__48775 = seq__48645_48768;
var G__48776 = chunk__48648_48769;
var G__48777 = count__48649_48770;
var G__48778 = (i__48650_48771 + (1));
seq__48645_48768 = G__48775;
chunk__48648_48769 = G__48776;
count__48649_48770 = G__48777;
i__48650_48771 = G__48778;
continue;
} else {
var G__48779 = seq__48645_48768;
var G__48780 = chunk__48648_48769;
var G__48781 = count__48649_48770;
var G__48782 = (i__48650_48771 + (1));
seq__48645_48768 = G__48779;
chunk__48648_48769 = G__48780;
count__48649_48770 = G__48781;
i__48650_48771 = G__48782;
continue;
}
} else {
var temp__5735__auto___48783 = cljs.core.seq(seq__48645_48768);
if(temp__5735__auto___48783){
var seq__48645_48784__$1 = temp__5735__auto___48783;
if(cljs.core.chunked_seq_QMARK_(seq__48645_48784__$1)){
var c__4556__auto___48785 = cljs.core.chunk_first(seq__48645_48784__$1);
var G__48786 = cljs.core.chunk_rest(seq__48645_48784__$1);
var G__48787 = c__4556__auto___48785;
var G__48788 = cljs.core.count(c__4556__auto___48785);
var G__48789 = (0);
seq__48645_48768 = G__48786;
chunk__48648_48769 = G__48787;
count__48649_48770 = G__48788;
i__48650_48771 = G__48789;
continue;
} else {
var node_48790 = cljs.core.first(seq__48645_48784__$1);
var path_match_48791 = shadow.cljs.devtools.client.browser.match_paths(node_48790.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48791)){
var new_link_48792 = (function (){var G__48656 = node_48790.cloneNode(true);
G__48656.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48791),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48656;
})();
(new_link_48792.onload = ((function (seq__48645_48768,chunk__48648_48769,count__48649_48770,i__48650_48771,seq__48615,chunk__48617,count__48618,i__48619,new_link_48792,path_match_48791,node_48790,seq__48645_48784__$1,temp__5735__auto___48783,path,map__48613,map__48613__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_48790);
});})(seq__48645_48768,chunk__48648_48769,count__48649_48770,i__48650_48771,seq__48615,chunk__48617,count__48618,i__48619,new_link_48792,path_match_48791,node_48790,seq__48645_48784__$1,temp__5735__auto___48783,path,map__48613,map__48613__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48791], 0));

goog.dom.insertSiblingAfter(new_link_48792,node_48790);


var G__48793 = cljs.core.next(seq__48645_48784__$1);
var G__48794 = null;
var G__48795 = (0);
var G__48796 = (0);
seq__48645_48768 = G__48793;
chunk__48648_48769 = G__48794;
count__48649_48770 = G__48795;
i__48650_48771 = G__48796;
continue;
} else {
var G__48797 = cljs.core.next(seq__48645_48784__$1);
var G__48798 = null;
var G__48799 = (0);
var G__48800 = (0);
seq__48645_48768 = G__48797;
chunk__48648_48769 = G__48798;
count__48649_48770 = G__48799;
i__48650_48771 = G__48800;
continue;
}
}
} else {
}
}
break;
}


var G__48801 = seq__48615;
var G__48802 = chunk__48617;
var G__48803 = count__48618;
var G__48804 = (i__48619 + (1));
seq__48615 = G__48801;
chunk__48617 = G__48802;
count__48618 = G__48803;
i__48619 = G__48804;
continue;
} else {
var G__48805 = seq__48615;
var G__48806 = chunk__48617;
var G__48807 = count__48618;
var G__48808 = (i__48619 + (1));
seq__48615 = G__48805;
chunk__48617 = G__48806;
count__48618 = G__48807;
i__48619 = G__48808;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48615);
if(temp__5735__auto__){
var seq__48615__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48615__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48615__$1);
var G__48809 = cljs.core.chunk_rest(seq__48615__$1);
var G__48810 = c__4556__auto__;
var G__48811 = cljs.core.count(c__4556__auto__);
var G__48812 = (0);
seq__48615 = G__48809;
chunk__48617 = G__48810;
count__48618 = G__48811;
i__48619 = G__48812;
continue;
} else {
var path = cljs.core.first(seq__48615__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48657_48813 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48660_48814 = null;
var count__48661_48815 = (0);
var i__48662_48816 = (0);
while(true){
if((i__48662_48816 < count__48661_48815)){
var node_48817 = chunk__48660_48814.cljs$core$IIndexed$_nth$arity$2(null,i__48662_48816);
var path_match_48818 = shadow.cljs.devtools.client.browser.match_paths(node_48817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48818)){
var new_link_48819 = (function (){var G__48667 = node_48817.cloneNode(true);
G__48667.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48818),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48667;
})();
(new_link_48819.onload = ((function (seq__48657_48813,chunk__48660_48814,count__48661_48815,i__48662_48816,seq__48615,chunk__48617,count__48618,i__48619,new_link_48819,path_match_48818,node_48817,path,seq__48615__$1,temp__5735__auto__,map__48613,map__48613__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_48817);
});})(seq__48657_48813,chunk__48660_48814,count__48661_48815,i__48662_48816,seq__48615,chunk__48617,count__48618,i__48619,new_link_48819,path_match_48818,node_48817,path,seq__48615__$1,temp__5735__auto__,map__48613,map__48613__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48818], 0));

goog.dom.insertSiblingAfter(new_link_48819,node_48817);


var G__48820 = seq__48657_48813;
var G__48821 = chunk__48660_48814;
var G__48822 = count__48661_48815;
var G__48823 = (i__48662_48816 + (1));
seq__48657_48813 = G__48820;
chunk__48660_48814 = G__48821;
count__48661_48815 = G__48822;
i__48662_48816 = G__48823;
continue;
} else {
var G__48824 = seq__48657_48813;
var G__48825 = chunk__48660_48814;
var G__48826 = count__48661_48815;
var G__48827 = (i__48662_48816 + (1));
seq__48657_48813 = G__48824;
chunk__48660_48814 = G__48825;
count__48661_48815 = G__48826;
i__48662_48816 = G__48827;
continue;
}
} else {
var temp__5735__auto___48828__$1 = cljs.core.seq(seq__48657_48813);
if(temp__5735__auto___48828__$1){
var seq__48657_48829__$1 = temp__5735__auto___48828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48657_48829__$1)){
var c__4556__auto___48830 = cljs.core.chunk_first(seq__48657_48829__$1);
var G__48831 = cljs.core.chunk_rest(seq__48657_48829__$1);
var G__48832 = c__4556__auto___48830;
var G__48833 = cljs.core.count(c__4556__auto___48830);
var G__48834 = (0);
seq__48657_48813 = G__48831;
chunk__48660_48814 = G__48832;
count__48661_48815 = G__48833;
i__48662_48816 = G__48834;
continue;
} else {
var node_48835 = cljs.core.first(seq__48657_48829__$1);
var path_match_48836 = shadow.cljs.devtools.client.browser.match_paths(node_48835.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48836)){
var new_link_48837 = (function (){var G__48668 = node_48835.cloneNode(true);
G__48668.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48836),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48668;
})();
(new_link_48837.onload = ((function (seq__48657_48813,chunk__48660_48814,count__48661_48815,i__48662_48816,seq__48615,chunk__48617,count__48618,i__48619,new_link_48837,path_match_48836,node_48835,seq__48657_48829__$1,temp__5735__auto___48828__$1,path,seq__48615__$1,temp__5735__auto__,map__48613,map__48613__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_48835);
});})(seq__48657_48813,chunk__48660_48814,count__48661_48815,i__48662_48816,seq__48615,chunk__48617,count__48618,i__48619,new_link_48837,path_match_48836,node_48835,seq__48657_48829__$1,temp__5735__auto___48828__$1,path,seq__48615__$1,temp__5735__auto__,map__48613,map__48613__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48836], 0));

goog.dom.insertSiblingAfter(new_link_48837,node_48835);


var G__48838 = cljs.core.next(seq__48657_48829__$1);
var G__48839 = null;
var G__48840 = (0);
var G__48841 = (0);
seq__48657_48813 = G__48838;
chunk__48660_48814 = G__48839;
count__48661_48815 = G__48840;
i__48662_48816 = G__48841;
continue;
} else {
var G__48842 = cljs.core.next(seq__48657_48829__$1);
var G__48843 = null;
var G__48844 = (0);
var G__48845 = (0);
seq__48657_48813 = G__48842;
chunk__48660_48814 = G__48843;
count__48661_48815 = G__48844;
i__48662_48816 = G__48845;
continue;
}
}
} else {
}
}
break;
}


var G__48846 = cljs.core.next(seq__48615__$1);
var G__48847 = null;
var G__48848 = (0);
var G__48849 = (0);
seq__48615 = G__48846;
chunk__48617 = G__48847;
count__48618 = G__48848;
i__48619 = G__48849;
continue;
} else {
var G__48850 = cljs.core.next(seq__48615__$1);
var G__48851 = null;
var G__48852 = (0);
var G__48853 = (0);
seq__48615 = G__48850;
chunk__48617 = G__48851;
count__48618 = G__48852;
i__48619 = G__48853;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48669){
var map__48670 = p__48669;
var map__48670__$1 = (((((!((map__48670 == null))))?(((((map__48670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48670):map__48670);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48670__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48672){
var map__48673 = p__48672;
var map__48673__$1 = (((((!((map__48673 == null))))?(((((map__48673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48673):map__48673);
var _ = map__48673__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48675,done,error){
var map__48676 = p__48675;
var map__48676__$1 = (((((!((map__48676 == null))))?(((((map__48676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48676):map__48676);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48676__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48678,done,error){
var map__48679 = p__48678;
var map__48679__$1 = (((((!((map__48679 == null))))?(((((map__48679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48679):map__48679);
var msg = map__48679__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48679__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48679__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48679__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48681){
var map__48682 = p__48681;
var map__48682__$1 = (((((!((map__48682 == null))))?(((((map__48682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48682):map__48682);
var src = map__48682__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48682__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48684 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48684) : done.call(null,G__48684));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48685){
var map__48686 = p__48685;
var map__48686__$1 = (((((!((map__48686 == null))))?(((((map__48686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48686):map__48686);
var msg__$1 = map__48686__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48686__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48688){var ex = e48688;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48689){
var map__48690 = p__48689;
var map__48690__$1 = (((((!((map__48690 == null))))?(((((map__48690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48690):map__48690);
var env = map__48690__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48692){
var map__48693 = p__48692;
var map__48693__$1 = (((((!((map__48693 == null))))?(((((map__48693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48693):map__48693);
var msg = map__48693__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48693__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48695){
var map__48696 = p__48695;
var map__48696__$1 = (((((!((map__48696 == null))))?(((((map__48696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48696):map__48696);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48696__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48696__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__48698){
var map__48699 = p__48698;
var map__48699__$1 = (((((!((map__48699 == null))))?(((((map__48699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48699):map__48699);
var svc = map__48699__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48699__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
