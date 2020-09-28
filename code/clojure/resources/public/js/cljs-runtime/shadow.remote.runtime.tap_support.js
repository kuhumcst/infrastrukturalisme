goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51448,p__51449){
var map__51450 = p__51448;
var map__51450__$1 = (((((!((map__51450 == null))))?(((((map__51450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51450):map__51450);
var svc = map__51450__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51451 = p__51449;
var map__51451__$1 = (((((!((map__51451 == null))))?(((((map__51451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51451):map__51451);
var msg = map__51451__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51451__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51451__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51457,p__51458){
var map__51459 = p__51457;
var map__51459__$1 = (((((!((map__51459 == null))))?(((((map__51459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51459):map__51459);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51460 = p__51458;
var map__51460__$1 = (((((!((map__51460 == null))))?(((((map__51460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51460):map__51460);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51469,p__51470){
var map__51471 = p__51469;
var map__51471__$1 = (((((!((map__51471 == null))))?(((((map__51471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51471):map__51471);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51471__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51472 = p__51470;
var map__51472__$1 = (((((!((map__51472 == null))))?(((((map__51472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51472):map__51472);
var msg = map__51472__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51472__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51482,tid){
var map__51485 = p__51482;
var map__51485__$1 = (((((!((map__51485 == null))))?(((((map__51485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51485):map__51485);
var svc = map__51485__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51485__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51499 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51500 = null;
var count__51501 = (0);
var i__51502 = (0);
while(true){
if((i__51502 < count__51501)){
var vec__51525 = chunk__51500.cljs$core$IIndexed$_nth$arity$2(null,i__51502);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51525,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51525,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51648 = seq__51499;
var G__51649 = chunk__51500;
var G__51650 = count__51501;
var G__51651 = (i__51502 + (1));
seq__51499 = G__51648;
chunk__51500 = G__51649;
count__51501 = G__51650;
i__51502 = G__51651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51499);
if(temp__5735__auto__){
var seq__51499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51499__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51499__$1);
var G__51659 = cljs.core.chunk_rest(seq__51499__$1);
var G__51660 = c__4556__auto__;
var G__51661 = cljs.core.count(c__4556__auto__);
var G__51662 = (0);
seq__51499 = G__51659;
chunk__51500 = G__51660;
count__51501 = G__51661;
i__51502 = G__51662;
continue;
} else {
var vec__51540 = cljs.core.first(seq__51499__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51540,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51670 = cljs.core.next(seq__51499__$1);
var G__51671 = null;
var G__51672 = (0);
var G__51673 = (0);
seq__51499 = G__51670;
chunk__51500 = G__51671;
count__51501 = G__51672;
i__51502 = G__51673;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51491_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51491_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51492_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51492_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51493_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51493_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51494_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51494_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51552){
var map__51554 = p__51552;
var map__51554__$1 = (((((!((map__51554 == null))))?(((((map__51554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51554):map__51554);
var svc = map__51554__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
