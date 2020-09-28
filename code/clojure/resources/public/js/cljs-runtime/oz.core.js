goog.provide('oz.core');
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
var module$node_modules$vega$build$vega_node=shadow.js.require("module$node_modules$vega$build$vega_node", {});
cljs.core.enable_console_print_BANG_();
oz.core.apply_log_level = (function oz$core$apply_log_level(p__53818){
var map__53819 = p__53818;
var map__53819__$1 = (((((!((map__53819 == null))))?(((((map__53819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53819):map__53819);
var opts = map__53819__$1;
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
if((((log_level instanceof cljs.core.Keyword)) || (typeof log_level === 'string'))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"log-level","log-level",862121670)),new cljs.core.Keyword(null,"logLevel","logLevel",1131406165),(function (){var G__53823 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(log_level);
var G__53823__$1 = (((G__53823 instanceof cljs.core.Keyword))?G__53823.fqn:null);
switch (G__53823__$1) {
case "debug":
return module$node_modules$vega$build$vega_node.Debug;

break;
case "info":
return module$node_modules$vega$build$vega_node.Info;

break;
case "warn":
return module$node_modules$vega$build$vega_node.Warn;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53823__$1)].join('')));

}
})());
} else {
return opts;
}
});
oz.core.embed_vega = (function oz$core$embed_vega(var_args){
var G__53827 = arguments.length;
switch (G__53827) {
case 2:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$2 = (function (elem,doc){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(elem,doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3 = (function (elem,doc,opts){
if(cljs.core.truth_(doc)){
var doc__$1 = cljs.core.clj__GT_js(doc);
var opts__$1 = oz.core.apply_log_level(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null),opts], 0)));
var opts__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),opts__$1], 0));
return module$node_modules$vega_embed$build$vega_embed(elem,doc__$1,cljs.core.clj__GT_js(opts__$2)).catch((function (err){
return console.log(err);
}));
} else {
return null;
}
}));

(oz.core.embed_vega.cljs$lang$maxFixedArity = 3);

oz.core.update_vega = (function oz$core$update_vega(elem,old_doc,new_doc,old_opts,new_opts){
var G__53831 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"always-rerender","always-rerender",1736797242).cljs$core$IFn$_invoke$arity$1(new_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_doc,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_doc,new cljs.core.Keyword(null,"data","data",-232669377)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_opts,new_opts)));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"embed-vega","embed-vega",-617762446,null),G__53831)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"elem","elem",-2035804713,null),G__53831)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-doc","new-doc",795331265,null),G__53831)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new-opts","new-opts",-1018023265,null),G__53831)){
return new cljs.core.Keyword(null,"else","else",-1508377146);
} else {
return null;

}
}
}
}
});
/**
 * Reagent component that renders vega
 */
oz.core.vega = (function oz$core$vega(var_args){
var G__53835 = arguments.length;
switch (G__53835) {
case 1:
return oz.core.vega.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega"], null),opts], 0));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),doc,opts__$1);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__53837){
var vec__53838 = p__53837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53838,(0),null);
var new_doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53838,(1),null);
var new_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53838,(2),null);
return oz.core.embed_vega.cljs$core$IFn$_invoke$arity$3(reagent.dom.dom_node(this$),new_doc,new_opts);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (doc__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viz","div.viz",1155063891)], null);
})], null));
}));

(oz.core.vega.cljs$lang$maxFixedArity = 2);

/**
 * Reagent component that renders vega-lite.
 */
oz.core.vega_lite = (function oz$core$vega_lite(var_args){
var G__53843 = arguments.length;
switch (G__53843) {
case 1:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.vega_lite.cljs$core$IFn$_invoke$arity$2 = (function (doc,opts){
return oz.core.vega.cljs$core$IFn$_invoke$arity$2(doc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"vega-lite"], null)], 0)));
}));

(oz.core.vega_lite.cljs$lang$maxFixedArity = 2);

oz.core.live_viewers_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite], null));
oz.core.register_live_view = (function oz$core$register_live_view(key,component){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(oz.core.live_viewers_state,cljs.core.assoc,key,component);
});
oz.core.register_live_views = (function oz$core$register_live_views(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53996 = arguments.length;
var i__4737__auto___53997 = (0);
while(true){
if((i__4737__auto___53997 < len__4736__auto___53996)){
args__4742__auto__.push((arguments[i__4737__auto___53997]));

var G__53998 = (i__4737__auto___53997 + (1));
i__4737__auto___53997 = G__53998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic = (function (p__53863){
var map__53864 = p__53863;
var map__53864__$1 = (((((!((map__53864 == null))))?(((((map__53864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53864):map__53864);
var live_views = map__53864__$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(oz.core.live_viewers_state,cljs.core.merge,live_views);
}));

(oz.core.register_live_views.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oz.core.register_live_views.cljs$lang$applyTo = (function (seq53845){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53845));
}));

oz.core.default_data_table_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"per-page","per-page",-54905429),(50),new cljs.core.Keyword(null,"tr-style","tr-style",1853585605),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"td-style","td-style",1948769874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10)], null),new cljs.core.Keyword(null,"th-style","th-style",-1504296072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null);
oz.core.data_table = (function oz$core$data_table(var_args){
var G__53888 = arguments.length;
switch (G__53888) {
case 1:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(oz.core.data_table.cljs$core$IFn$_invoke$arity$1 = (function (data){
return oz.core.data_table.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(oz.core.data_table.cljs$core$IFn$_invoke$arity$2 = (function (data,p__53913){
var map__53914 = p__53913;
var map__53914__$1 = (((((!((map__53914 == null))))?(((((map__53914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53914):map__53914);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__4126__auto__ = page;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),sort_key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),(function (){var or__4126__auto__ = sort_order;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"ascending","ascending",-988350486);
}
})()], null));
var header = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),data)));
return (function (data__$1,opts){
var map__53930 = cljs.core.deref(state);
var map__53930__$1 = (((((!((map__53930 == null))))?(((((map__53930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53930):map__53930);
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"page","page",849072397));
var sort_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__53935 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (opt1,opt2){
if(((cljs.core.map_QMARK_(opt1)) && (cljs.core.map_QMARK_(opt2)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt1,opt2], 0));
} else {
return opt2;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oz.core.default_data_table_opts,opts], 0));
var map__53935__$1 = (((((!((map__53935 == null))))?(((((map__53935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53935):map__53935);
var per_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"per-page","per-page",-54905429));
var tr_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"tr-style","tr-style",1853585605));
var td_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"td-style","td-style",1948769874));
var th_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"th-style","th-style",-1504296072));
var scoped_data = (function (){var G__53953 = data__$1;
var G__53953__$1 = (cljs.core.truth_(sort_key__$1)?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key__$1,G__53953):G__53953);
var G__53953__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"descending","descending",-24766135),sort_order__$1))?cljs.core.reverse(G__53953__$1):G__53953__$1);
var G__53953__$3 = (cljs.core.truth_(per_page)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((per_page * page__$1),G__53953__$2):G__53953__$2);
if(cljs.core.truth_(per_page)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(per_page,G__53953__$3);
} else {
return G__53953__$3;
}
})();
var last_page = cljs.core.quot(cljs.core.count(data__$1),per_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.count(data__$1) > per_page))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),"Current page: ",(page__$1 + (1))], null),(((page__$1 > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__54002__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
};
var G__54002 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__54003__i = 0, G__54003__a = new Array(arguments.length -  0);
while (G__54003__i < G__54003__a.length) {G__54003__a[G__54003__i] = arguments[G__54003__i + 0]; ++G__54003__i;}
  _ = new cljs.core.IndexedSeq(G__54003__a,0,null);
} 
return G__54002__delegate.call(this,_);};
G__54002.cljs$lang$maxFixedArity = 0;
G__54002.cljs$lang$applyTo = (function (arglist__54004){
var _ = cljs.core.seq(arglist__54004);
return G__54002__delegate(_);
});
G__54002.cljs$core$IFn$_invoke$arity$variadic = G__54002__delegate;
return G__54002;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"prev"], null):null),(((page__$1 < last_page))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__54006__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
};
var G__54006 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__54007__i = 0, G__54007__a = new Array(arguments.length -  0);
while (G__54007__i < G__54007__a.length) {G__54007__a[G__54007__i] = arguments[G__54007__i + 0]; ++G__54007__i;}
  _ = new cljs.core.IndexedSeq(G__54007__a,0,null);
} 
return G__54006__delegate.call(this,_);};
G__54006.cljs$lang$maxFixedArity = 0;
G__54006.cljs$lang$applyTo = (function (arglist__54008){
var _ = cljs.core.seq(arglist__54008);
return G__54006__delegate(_);
});
G__54006.cljs$core$IFn$_invoke$arity$variadic = G__54006__delegate;
return G__54006;
})()
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(10),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"next"], null):null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4529__auto__ = (function oz$core$iter__53956(s__53957){
return (new cljs.core.LazySeq(null,(function (){
var s__53957__$1 = s__53957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53957__$1);
if(temp__5735__auto__){
var s__53957__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53957__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53957__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53959 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53958 = (0);
while(true){
if((i__53958 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__53958);
cljs.core.chunk_append(b__53959,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53958,key,c__4527__auto__,size__4528__auto__,b__53959,s__53957__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order){
return (function() { 
var G__54009__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__54009 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__54010__i = 0, G__54010__a = new Array(arguments.length -  0);
while (G__54010__i < G__54010__a.length) {G__54010__a[G__54010__i] = arguments[G__54010__i + 0]; ++G__54010__i;}
  _ = new cljs.core.IndexedSeq(G__54010__a,0,null);
} 
return G__54009__delegate.call(this,_);};
G__54009.cljs$lang$maxFixedArity = 0;
G__54009.cljs$lang$applyTo = (function (arglist__54011){
var _ = cljs.core.seq(arglist__54011);
return G__54009__delegate(_);
});
G__54009.cljs$core$IFn$_invoke$arity$variadic = G__54009__delegate;
return G__54009;
})()
;})(i__53958,key,c__4527__auto__,size__4528__auto__,b__53959,s__53957__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__53961 = sort_order__$1;
var G__53961__$1 = (((G__53961 instanceof cljs.core.Keyword))?G__53961.fqn:null);
switch (G__53961__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53961__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__54013 = (i__53958 + (1));
i__53958 = G__54013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53959),oz$core$iter__53956(cljs.core.chunk_rest(s__53957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53959),null);
}
} else {
var key = cljs.core.first(s__53957__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),th_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (key,s__53957__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order){
return (function() { 
var G__54014__delegate = function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),key,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sort_key__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order__$1,new cljs.core.Keyword(null,"ascending","ascending",-988350486)))))?new cljs.core.Keyword(null,"descending","descending",-24766135):new cljs.core.Keyword(null,"ascending","ascending",-988350486))], null));
};
var G__54014 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__54015__i = 0, G__54015__a = new Array(arguments.length -  0);
while (G__54015__i < G__54015__a.length) {G__54015__a[G__54015__i] = arguments[G__54015__i + 0]; ++G__54015__i;}
  _ = new cljs.core.IndexedSeq(G__54015__a,0,null);
} 
return G__54014__delegate.call(this,_);};
G__54014.cljs$lang$maxFixedArity = 0;
G__54014.cljs$lang$applyTo = (function (arglist__54016){
var _ = cljs.core.seq(arglist__54016);
return G__54014__delegate(_);
});
G__54014.cljs$core$IFn$_invoke$arity$variadic = G__54014__delegate;
return G__54014;
})()
;})(key,s__53957__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order))
], null),cljs.core.name(key),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key__$1,key))?(function (){var G__53964 = sort_order__$1;
var G__53964__$1 = (((G__53964 instanceof cljs.core.Keyword))?G__53964.fqn:null);
switch (G__53964__$1) {
case "ascending":
return "\u2303";

break;
case "descending":
return "\u2304";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53964__$1)].join('')));

}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__53956(cljs.core.rest(s__53957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(header);
})()], null),(function (){var iter__4529__auto__ = (function oz$core$iter__53965(s__53966){
return (new cljs.core.LazySeq(null,(function (){
var s__53966__$1 = s__53966;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53966__$1);
if(temp__5735__auto__){
var s__53966__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53966__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53966__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53968 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53967 = (0);
while(true){
if((i__53967 < size__4528__auto__)){
var row = cljs.core._nth(c__4527__auto__,i__53967);
cljs.core.chunk_append(b__53968,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4529__auto__ = ((function (i__53967,row,c__4527__auto__,size__4528__auto__,b__53968,s__53966__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order){
return (function oz$core$iter__53965_$_iter__53970(s__53971){
return (new cljs.core.LazySeq(null,((function (i__53967,row,c__4527__auto__,size__4528__auto__,b__53968,s__53966__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order){
return (function (){
var s__53971__$1 = s__53971;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53971__$1);
if(temp__5735__auto____$1){
var s__53971__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53971__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__53971__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__53973 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__53972 = (0);
while(true){
if((i__53972 < size__4528__auto____$1)){
var key = cljs.core._nth(c__4527__auto____$1,i__53972);
cljs.core.chunk_append(b__53973,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__54019 = (i__53972 + (1));
i__53972 = G__54019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53973),oz$core$iter__53965_$_iter__53970(cljs.core.chunk_rest(s__53971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53973),null);
}
} else {
var key = cljs.core.first(s__53971__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__53965_$_iter__53970(cljs.core.rest(s__53971__$2)));
}
} else {
return null;
}
break;
}
});})(i__53967,row,c__4527__auto__,size__4528__auto__,b__53968,s__53966__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order))
,null,null));
});})(i__53967,row,c__4527__auto__,size__4528__auto__,b__53968,s__53966__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order))
;
return iter__4529__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__54020 = (i__53967 + (1));
i__53967 = G__54020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53968),oz$core$iter__53965(cljs.core.chunk_rest(s__53966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53968),null);
}
} else {
var row = cljs.core.first(s__53966__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tr_style], null),(function (){var iter__4529__auto__ = ((function (row,s__53966__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order){
return (function oz$core$iter__53965_$_iter__53974(s__53975){
return (new cljs.core.LazySeq(null,(function (){
var s__53975__$1 = s__53975;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53975__$1);
if(temp__5735__auto____$1){
var s__53975__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53975__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53975__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53977 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53976 = (0);
while(true){
if((i__53976 < size__4528__auto__)){
var key = cljs.core._nth(c__4527__auto__,i__53976);
cljs.core.chunk_append(b__53977,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__54023 = (i__53976 + (1));
i__53976 = G__54023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53977),oz$core$iter__53965_$_iter__53974(cljs.core.chunk_rest(s__53975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53977),null);
}
} else {
var key = cljs.core.first(s__53975__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),td_style], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),oz$core$iter__53965_$_iter__53974(cljs.core.rest(s__53975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__53966__$2,temp__5735__auto__,map__53930,map__53930__$1,page__$1,sort_key__$1,sort_order__$1,map__53935,map__53935__$1,per_page,tr_style,td_style,th_style,scoped_data,last_page,state,header,map__53914,map__53914__$1,page,sort_key,sort_order))
;
return iter__4529__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),oz$core$iter__53965(cljs.core.rest(s__53966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(scoped_data);
})()], null)], null);
});
}));

(oz.core.data_table.cljs$lang$maxFixedArity = 2);

oz.core.register_live_views.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vega","vega",-1657843081),oz.core.vega,new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),oz.core.vega_lite,new cljs.core.Keyword(null,"data-table","data-table",-149582774),oz.core.data_table], 0));
oz.core.live_view = (function oz$core$live_view(doc){
var live_viewers = cljs.core.deref(oz.core.live_viewers_state);
var live_viewer_keys = cljs.core.set(cljs.core.keys(live_viewers));
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_(((cljs.core.coll_QMARK_(x))?(function (){var G__53983 = cljs.core.first(x);
return (live_viewer_keys.cljs$core$IFn$_invoke$arity$1 ? live_viewer_keys.cljs$core$IFn$_invoke$arity$1(G__53983) : live_viewer_keys.call(null,G__53983));
})():false))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(live_viewers,cljs.core.first(x))], null),cljs.core.rest(x));
} else {
return x;
}
}),doc);
});
oz.core.view_spec = oz.core.live_view;

//# sourceMappingURL=oz.core.js.map
