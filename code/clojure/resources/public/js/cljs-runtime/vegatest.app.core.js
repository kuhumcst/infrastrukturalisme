goog.provide('vegatest.app.core');
if((typeof vegatest !== 'undefined') && (typeof vegatest.app !== 'undefined') && (typeof vegatest.app.core !== 'undefined') && (typeof vegatest.app.core.state !== 'undefined')){
} else {
vegatest.app.core.state = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((0));
}
vegatest.app.core.on_click_handler = (function vegatest$app$core$on_click_handler(e){
console.log(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(vegatest.app.core.state,cljs.core._PLUS_,(6));
});
vegatest.app.core.komponent = (function vegatest$app$core$komponent(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),vegatest.app.core.on_click_handler], null),"Knap"], null);
});
vegatest.app.core.app_state = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Hello from app-state",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 3"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 4"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 5"], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
vegatest.app.core.items_list = (function vegatest$app$core$items_list(items,active_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__4529__auto__ = (function vegatest$app$core$items_list_$_iter__55214(s__55215){
return (new cljs.core.LazySeq(null,(function (){
var s__55215__$1 = s__55215;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55215__$1);
if(temp__5735__auto__){
var s__55215__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55215__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55215__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55217 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55216 = (0);
while(true){
if((i__55216 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__55216);
cljs.core.chunk_append(b__55217,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55216,item,c__4527__auto__,size__4528__auto__,b__55217,s__55215__$2,temp__5735__auto__){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vegatest.app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),item);
});})(i__55216,item,c__4527__auto__,size__4528__auto__,b__55217,s__55215__$2,temp__5735__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__55218 = (i__55216 + (1));
i__55216 = G__55218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55217),vegatest$app$core$items_list_$_iter__55214(cljs.core.chunk_rest(s__55215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55217),null);
}
} else {
var item = cljs.core.first(s__55215__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__55215__$2,temp__5735__auto__){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vegatest.app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),item);
});})(item,s__55215__$2,temp__5735__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)),vegatest$app$core$items_list_$_iter__55214(cljs.core.rest(s__55215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null);
});
vegatest.app.core.timeline = (oz.core.load.cljs$core$IFn$_invoke$arity$1 ? oz.core.load.cljs$core$IFn$_invoke$arity$1("https://raw.githubusercontent.com/SofieVonge/infrastrukturalisme/master/data/timeline/timeline.vg.json") : oz.core.load.call(null,"https://raw.githubusercontent.com/SofieVonge/infrastrukturalisme/master/data/timeline/timeline.vg.json"));
vegatest.app.core.app = (function vegatest$app$core$app(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.deref(vegatest.app.core.state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hej verden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vegatest.app.core.items_list,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vegatest.app.core.app_state)),new cljs.core.Keyword(null,"active-item","active-item",-1265645988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vegatest.app.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vegatest.app.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oz.core","vega","oz.core/vega",1505822769),vegatest.app.core.timeline], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vegatest.app.core.komponent], null)], null);
});
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vegatest.app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444)], null),"new message");
}),(2000));
vegatest.app.core.root = document.getElementById("app");
vegatest.app.core.render = (function vegatest$app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vegatest.app.core.app], null),vegatest.app.core.root);
});
vegatest.app.core.init = (function vegatest$app$core$init(){
console.log("Hello world");

return vegatest.app.core.render();
});

//# sourceMappingURL=vegatest.app.core.js.map
