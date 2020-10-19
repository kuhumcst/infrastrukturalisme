goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50413 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50413(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50417 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50417(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49429 = coll;
var G__49430 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49429,G__49430) : shadow.dom.lazy_native_coll_seq.call(null,G__49429,G__49430));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49458 = arguments.length;
switch (G__49458) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49471 = arguments.length;
switch (G__49471) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49481 = arguments.length;
switch (G__49481) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49492 = arguments.length;
switch (G__49492) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49516 = arguments.length;
switch (G__49516) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49532 = arguments.length;
switch (G__49532) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49551){if((e49551 instanceof Object)){
var e = e49551;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49551;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49560 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49561 = null;
var count__49562 = (0);
var i__49563 = (0);
while(true){
if((i__49563 < count__49562)){
var el = chunk__49561.cljs$core$IIndexed$_nth$arity$2(null,i__49563);
var handler_50447__$1 = ((function (seq__49560,chunk__49561,count__49562,i__49563,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49560,chunk__49561,count__49562,i__49563,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50447__$1);


var G__50449 = seq__49560;
var G__50450 = chunk__49561;
var G__50451 = count__49562;
var G__50452 = (i__49563 + (1));
seq__49560 = G__50449;
chunk__49561 = G__50450;
count__49562 = G__50451;
i__49563 = G__50452;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49560);
if(temp__5735__auto__){
var seq__49560__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49560__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49560__$1);
var G__50454 = cljs.core.chunk_rest(seq__49560__$1);
var G__50455 = c__4556__auto__;
var G__50456 = cljs.core.count(c__4556__auto__);
var G__50457 = (0);
seq__49560 = G__50454;
chunk__49561 = G__50455;
count__49562 = G__50456;
i__49563 = G__50457;
continue;
} else {
var el = cljs.core.first(seq__49560__$1);
var handler_50458__$1 = ((function (seq__49560,chunk__49561,count__49562,i__49563,el,seq__49560__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49560,chunk__49561,count__49562,i__49563,el,seq__49560__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50458__$1);


var G__50459 = cljs.core.next(seq__49560__$1);
var G__50460 = null;
var G__50461 = (0);
var G__50462 = (0);
seq__49560 = G__50459;
chunk__49561 = G__50460;
count__49562 = G__50461;
i__49563 = G__50462;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49579 = arguments.length;
switch (G__49579) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49587 = cljs.core.seq(events);
var chunk__49588 = null;
var count__49589 = (0);
var i__49590 = (0);
while(true){
if((i__49590 < count__49589)){
var vec__49598 = chunk__49588.cljs$core$IIndexed$_nth$arity$2(null,i__49590);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49598,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50469 = seq__49587;
var G__50470 = chunk__49588;
var G__50471 = count__49589;
var G__50472 = (i__49590 + (1));
seq__49587 = G__50469;
chunk__49588 = G__50470;
count__49589 = G__50471;
i__49590 = G__50472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49587);
if(temp__5735__auto__){
var seq__49587__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49587__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49587__$1);
var G__50473 = cljs.core.chunk_rest(seq__49587__$1);
var G__50474 = c__4556__auto__;
var G__50475 = cljs.core.count(c__4556__auto__);
var G__50476 = (0);
seq__49587 = G__50473;
chunk__49588 = G__50474;
count__49589 = G__50475;
i__49590 = G__50476;
continue;
} else {
var vec__49602 = cljs.core.first(seq__49587__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49602,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50477 = cljs.core.next(seq__49587__$1);
var G__50478 = null;
var G__50479 = (0);
var G__50480 = (0);
seq__49587 = G__50477;
chunk__49588 = G__50478;
count__49589 = G__50479;
i__49590 = G__50480;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49608 = cljs.core.seq(styles);
var chunk__49609 = null;
var count__49610 = (0);
var i__49611 = (0);
while(true){
if((i__49611 < count__49610)){
var vec__49628 = chunk__49609.cljs$core$IIndexed$_nth$arity$2(null,i__49611);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49628,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50483 = seq__49608;
var G__50484 = chunk__49609;
var G__50485 = count__49610;
var G__50486 = (i__49611 + (1));
seq__49608 = G__50483;
chunk__49609 = G__50484;
count__49610 = G__50485;
i__49611 = G__50486;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49608);
if(temp__5735__auto__){
var seq__49608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49608__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49608__$1);
var G__50488 = cljs.core.chunk_rest(seq__49608__$1);
var G__50489 = c__4556__auto__;
var G__50490 = cljs.core.count(c__4556__auto__);
var G__50491 = (0);
seq__49608 = G__50488;
chunk__49609 = G__50489;
count__49610 = G__50490;
i__49611 = G__50491;
continue;
} else {
var vec__49633 = cljs.core.first(seq__49608__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49633,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50492 = cljs.core.next(seq__49608__$1);
var G__50493 = null;
var G__50494 = (0);
var G__50495 = (0);
seq__49608 = G__50492;
chunk__49609 = G__50493;
count__49610 = G__50494;
i__49611 = G__50495;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49640_50498 = key;
var G__49640_50499__$1 = (((G__49640_50498 instanceof cljs.core.Keyword))?G__49640_50498.fqn:null);
switch (G__49640_50499__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50502 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_50502,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_50502,"aria-");
}
})())){
el.setAttribute(ks_50502,value);
} else {
(el[ks_50502] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49661){
var map__49662 = p__49661;
var map__49662__$1 = (((((!((map__49662 == null))))?(((((map__49662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49662):map__49662);
var props = map__49662__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49662__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49664 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49669 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49669,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49669;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49675 = arguments.length;
switch (G__49675) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49684){
var vec__49687 = p__49684;
var seq__49688 = cljs.core.seq(vec__49687);
var first__49689 = cljs.core.first(seq__49688);
var seq__49688__$1 = cljs.core.next(seq__49688);
var nn = first__49689;
var first__49689__$1 = cljs.core.first(seq__49688__$1);
var seq__49688__$2 = cljs.core.next(seq__49688__$1);
var np = first__49689__$1;
var nc = seq__49688__$2;
var node = vec__49687;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49695 = nn;
var G__49696 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49695,G__49696) : create_fn.call(null,G__49695,G__49696));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49699 = nn;
var G__49700 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49699,G__49700) : create_fn.call(null,G__49699,G__49700));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49704 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49704,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49704,(1),null);
var seq__49709_50521 = cljs.core.seq(node_children);
var chunk__49710_50522 = null;
var count__49711_50523 = (0);
var i__49712_50524 = (0);
while(true){
if((i__49712_50524 < count__49711_50523)){
var child_struct_50525 = chunk__49710_50522.cljs$core$IIndexed$_nth$arity$2(null,i__49712_50524);
var children_50527 = shadow.dom.dom_node(child_struct_50525);
if(cljs.core.seq_QMARK_(children_50527)){
var seq__49743_50529 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50527));
var chunk__49746_50530 = null;
var count__49747_50531 = (0);
var i__49748_50532 = (0);
while(true){
if((i__49748_50532 < count__49747_50531)){
var child_50534 = chunk__49746_50530.cljs$core$IIndexed$_nth$arity$2(null,i__49748_50532);
if(cljs.core.truth_(child_50534)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50534);


var G__50537 = seq__49743_50529;
var G__50538 = chunk__49746_50530;
var G__50539 = count__49747_50531;
var G__50540 = (i__49748_50532 + (1));
seq__49743_50529 = G__50537;
chunk__49746_50530 = G__50538;
count__49747_50531 = G__50539;
i__49748_50532 = G__50540;
continue;
} else {
var G__50541 = seq__49743_50529;
var G__50542 = chunk__49746_50530;
var G__50543 = count__49747_50531;
var G__50544 = (i__49748_50532 + (1));
seq__49743_50529 = G__50541;
chunk__49746_50530 = G__50542;
count__49747_50531 = G__50543;
i__49748_50532 = G__50544;
continue;
}
} else {
var temp__5735__auto___50545 = cljs.core.seq(seq__49743_50529);
if(temp__5735__auto___50545){
var seq__49743_50546__$1 = temp__5735__auto___50545;
if(cljs.core.chunked_seq_QMARK_(seq__49743_50546__$1)){
var c__4556__auto___50547 = cljs.core.chunk_first(seq__49743_50546__$1);
var G__50548 = cljs.core.chunk_rest(seq__49743_50546__$1);
var G__50549 = c__4556__auto___50547;
var G__50550 = cljs.core.count(c__4556__auto___50547);
var G__50551 = (0);
seq__49743_50529 = G__50548;
chunk__49746_50530 = G__50549;
count__49747_50531 = G__50550;
i__49748_50532 = G__50551;
continue;
} else {
var child_50552 = cljs.core.first(seq__49743_50546__$1);
if(cljs.core.truth_(child_50552)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50552);


var G__50553 = cljs.core.next(seq__49743_50546__$1);
var G__50554 = null;
var G__50555 = (0);
var G__50556 = (0);
seq__49743_50529 = G__50553;
chunk__49746_50530 = G__50554;
count__49747_50531 = G__50555;
i__49748_50532 = G__50556;
continue;
} else {
var G__50557 = cljs.core.next(seq__49743_50546__$1);
var G__50558 = null;
var G__50559 = (0);
var G__50560 = (0);
seq__49743_50529 = G__50557;
chunk__49746_50530 = G__50558;
count__49747_50531 = G__50559;
i__49748_50532 = G__50560;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50527);
}


var G__50562 = seq__49709_50521;
var G__50563 = chunk__49710_50522;
var G__50564 = count__49711_50523;
var G__50565 = (i__49712_50524 + (1));
seq__49709_50521 = G__50562;
chunk__49710_50522 = G__50563;
count__49711_50523 = G__50564;
i__49712_50524 = G__50565;
continue;
} else {
var temp__5735__auto___50566 = cljs.core.seq(seq__49709_50521);
if(temp__5735__auto___50566){
var seq__49709_50567__$1 = temp__5735__auto___50566;
if(cljs.core.chunked_seq_QMARK_(seq__49709_50567__$1)){
var c__4556__auto___50568 = cljs.core.chunk_first(seq__49709_50567__$1);
var G__50569 = cljs.core.chunk_rest(seq__49709_50567__$1);
var G__50570 = c__4556__auto___50568;
var G__50571 = cljs.core.count(c__4556__auto___50568);
var G__50572 = (0);
seq__49709_50521 = G__50569;
chunk__49710_50522 = G__50570;
count__49711_50523 = G__50571;
i__49712_50524 = G__50572;
continue;
} else {
var child_struct_50573 = cljs.core.first(seq__49709_50567__$1);
var children_50575 = shadow.dom.dom_node(child_struct_50573);
if(cljs.core.seq_QMARK_(children_50575)){
var seq__49813_50576 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50575));
var chunk__49815_50577 = null;
var count__49816_50578 = (0);
var i__49817_50579 = (0);
while(true){
if((i__49817_50579 < count__49816_50578)){
var child_50580 = chunk__49815_50577.cljs$core$IIndexed$_nth$arity$2(null,i__49817_50579);
if(cljs.core.truth_(child_50580)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50580);


var G__50581 = seq__49813_50576;
var G__50582 = chunk__49815_50577;
var G__50583 = count__49816_50578;
var G__50584 = (i__49817_50579 + (1));
seq__49813_50576 = G__50581;
chunk__49815_50577 = G__50582;
count__49816_50578 = G__50583;
i__49817_50579 = G__50584;
continue;
} else {
var G__50585 = seq__49813_50576;
var G__50586 = chunk__49815_50577;
var G__50587 = count__49816_50578;
var G__50588 = (i__49817_50579 + (1));
seq__49813_50576 = G__50585;
chunk__49815_50577 = G__50586;
count__49816_50578 = G__50587;
i__49817_50579 = G__50588;
continue;
}
} else {
var temp__5735__auto___50589__$1 = cljs.core.seq(seq__49813_50576);
if(temp__5735__auto___50589__$1){
var seq__49813_50590__$1 = temp__5735__auto___50589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49813_50590__$1)){
var c__4556__auto___50591 = cljs.core.chunk_first(seq__49813_50590__$1);
var G__50592 = cljs.core.chunk_rest(seq__49813_50590__$1);
var G__50593 = c__4556__auto___50591;
var G__50594 = cljs.core.count(c__4556__auto___50591);
var G__50595 = (0);
seq__49813_50576 = G__50592;
chunk__49815_50577 = G__50593;
count__49816_50578 = G__50594;
i__49817_50579 = G__50595;
continue;
} else {
var child_50596 = cljs.core.first(seq__49813_50590__$1);
if(cljs.core.truth_(child_50596)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50596);


var G__50597 = cljs.core.next(seq__49813_50590__$1);
var G__50598 = null;
var G__50599 = (0);
var G__50600 = (0);
seq__49813_50576 = G__50597;
chunk__49815_50577 = G__50598;
count__49816_50578 = G__50599;
i__49817_50579 = G__50600;
continue;
} else {
var G__50603 = cljs.core.next(seq__49813_50590__$1);
var G__50604 = null;
var G__50605 = (0);
var G__50606 = (0);
seq__49813_50576 = G__50603;
chunk__49815_50577 = G__50604;
count__49816_50578 = G__50605;
i__49817_50579 = G__50606;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50575);
}


var G__50608 = cljs.core.next(seq__49709_50567__$1);
var G__50609 = null;
var G__50610 = (0);
var G__50611 = (0);
seq__49709_50521 = G__50608;
chunk__49710_50522 = G__50609;
count__49711_50523 = G__50610;
i__49712_50524 = G__50611;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49854 = cljs.core.seq(node);
var chunk__49856 = null;
var count__49857 = (0);
var i__49858 = (0);
while(true){
if((i__49858 < count__49857)){
var n = chunk__49856.cljs$core$IIndexed$_nth$arity$2(null,i__49858);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50615 = seq__49854;
var G__50616 = chunk__49856;
var G__50617 = count__49857;
var G__50618 = (i__49858 + (1));
seq__49854 = G__50615;
chunk__49856 = G__50616;
count__49857 = G__50617;
i__49858 = G__50618;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49854);
if(temp__5735__auto__){
var seq__49854__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49854__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49854__$1);
var G__50619 = cljs.core.chunk_rest(seq__49854__$1);
var G__50620 = c__4556__auto__;
var G__50621 = cljs.core.count(c__4556__auto__);
var G__50622 = (0);
seq__49854 = G__50619;
chunk__49856 = G__50620;
count__49857 = G__50621;
i__49858 = G__50622;
continue;
} else {
var n = cljs.core.first(seq__49854__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50623 = cljs.core.next(seq__49854__$1);
var G__50624 = null;
var G__50625 = (0);
var G__50626 = (0);
seq__49854 = G__50623;
chunk__49856 = G__50624;
count__49857 = G__50625;
i__49858 = G__50626;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49875 = arguments.length;
switch (G__49875) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49886 = arguments.length;
switch (G__49886) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49904 = arguments.length;
switch (G__49904) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50640 = arguments.length;
var i__4737__auto___50641 = (0);
while(true){
if((i__4737__auto___50641 < len__4736__auto___50640)){
args__4742__auto__.push((arguments[i__4737__auto___50641]));

var G__50642 = (i__4737__auto___50641 + (1));
i__4737__auto___50641 = G__50642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49938_50643 = cljs.core.seq(nodes);
var chunk__49939_50644 = null;
var count__49940_50645 = (0);
var i__49941_50646 = (0);
while(true){
if((i__49941_50646 < count__49940_50645)){
var node_50647 = chunk__49939_50644.cljs$core$IIndexed$_nth$arity$2(null,i__49941_50646);
fragment.appendChild(shadow.dom._to_dom(node_50647));


var G__50648 = seq__49938_50643;
var G__50649 = chunk__49939_50644;
var G__50650 = count__49940_50645;
var G__50651 = (i__49941_50646 + (1));
seq__49938_50643 = G__50648;
chunk__49939_50644 = G__50649;
count__49940_50645 = G__50650;
i__49941_50646 = G__50651;
continue;
} else {
var temp__5735__auto___50652 = cljs.core.seq(seq__49938_50643);
if(temp__5735__auto___50652){
var seq__49938_50653__$1 = temp__5735__auto___50652;
if(cljs.core.chunked_seq_QMARK_(seq__49938_50653__$1)){
var c__4556__auto___50654 = cljs.core.chunk_first(seq__49938_50653__$1);
var G__50655 = cljs.core.chunk_rest(seq__49938_50653__$1);
var G__50656 = c__4556__auto___50654;
var G__50657 = cljs.core.count(c__4556__auto___50654);
var G__50658 = (0);
seq__49938_50643 = G__50655;
chunk__49939_50644 = G__50656;
count__49940_50645 = G__50657;
i__49941_50646 = G__50658;
continue;
} else {
var node_50659 = cljs.core.first(seq__49938_50653__$1);
fragment.appendChild(shadow.dom._to_dom(node_50659));


var G__50660 = cljs.core.next(seq__49938_50653__$1);
var G__50661 = null;
var G__50662 = (0);
var G__50663 = (0);
seq__49938_50643 = G__50660;
chunk__49939_50644 = G__50661;
count__49940_50645 = G__50662;
i__49941_50646 = G__50663;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49934){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49934));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49954_50664 = cljs.core.seq(scripts);
var chunk__49955_50665 = null;
var count__49956_50666 = (0);
var i__49957_50667 = (0);
while(true){
if((i__49957_50667 < count__49956_50666)){
var vec__49965_50668 = chunk__49955_50665.cljs$core$IIndexed$_nth$arity$2(null,i__49957_50667);
var script_tag_50669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49965_50668,(0),null);
var script_body_50670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49965_50668,(1),null);
eval(script_body_50670);


var G__50671 = seq__49954_50664;
var G__50672 = chunk__49955_50665;
var G__50673 = count__49956_50666;
var G__50674 = (i__49957_50667 + (1));
seq__49954_50664 = G__50671;
chunk__49955_50665 = G__50672;
count__49956_50666 = G__50673;
i__49957_50667 = G__50674;
continue;
} else {
var temp__5735__auto___50675 = cljs.core.seq(seq__49954_50664);
if(temp__5735__auto___50675){
var seq__49954_50676__$1 = temp__5735__auto___50675;
if(cljs.core.chunked_seq_QMARK_(seq__49954_50676__$1)){
var c__4556__auto___50677 = cljs.core.chunk_first(seq__49954_50676__$1);
var G__50678 = cljs.core.chunk_rest(seq__49954_50676__$1);
var G__50679 = c__4556__auto___50677;
var G__50680 = cljs.core.count(c__4556__auto___50677);
var G__50681 = (0);
seq__49954_50664 = G__50678;
chunk__49955_50665 = G__50679;
count__49956_50666 = G__50680;
i__49957_50667 = G__50681;
continue;
} else {
var vec__49970_50682 = cljs.core.first(seq__49954_50676__$1);
var script_tag_50683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49970_50682,(0),null);
var script_body_50684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49970_50682,(1),null);
eval(script_body_50684);


var G__50685 = cljs.core.next(seq__49954_50676__$1);
var G__50686 = null;
var G__50687 = (0);
var G__50688 = (0);
seq__49954_50664 = G__50685;
chunk__49955_50665 = G__50686;
count__49956_50666 = G__50687;
i__49957_50667 = G__50688;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49974){
var vec__49975 = p__49974;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49975,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49975,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49993 = arguments.length;
switch (G__49993) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50009 = cljs.core.seq(style_keys);
var chunk__50010 = null;
var count__50011 = (0);
var i__50012 = (0);
while(true){
if((i__50012 < count__50011)){
var it = chunk__50010.cljs$core$IIndexed$_nth$arity$2(null,i__50012);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50697 = seq__50009;
var G__50698 = chunk__50010;
var G__50699 = count__50011;
var G__50700 = (i__50012 + (1));
seq__50009 = G__50697;
chunk__50010 = G__50698;
count__50011 = G__50699;
i__50012 = G__50700;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50009);
if(temp__5735__auto__){
var seq__50009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50009__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50009__$1);
var G__50701 = cljs.core.chunk_rest(seq__50009__$1);
var G__50702 = c__4556__auto__;
var G__50703 = cljs.core.count(c__4556__auto__);
var G__50704 = (0);
seq__50009 = G__50701;
chunk__50010 = G__50702;
count__50011 = G__50703;
i__50012 = G__50704;
continue;
} else {
var it = cljs.core.first(seq__50009__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50705 = cljs.core.next(seq__50009__$1);
var G__50706 = null;
var G__50707 = (0);
var G__50708 = (0);
seq__50009 = G__50705;
chunk__50010 = G__50706;
count__50011 = G__50707;
i__50012 = G__50708;
continue;
}
} else {
return null;
}
}
break;
}
});

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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50027,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50035 = k50027;
var G__50035__$1 = (((G__50035 instanceof cljs.core.Keyword))?G__50035.fqn:null);
switch (G__50035__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50027,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50040){
var vec__50041 = p__50040;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50041,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50041,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50026){
var self__ = this;
var G__50026__$1 = this;
return (new cljs.core.RecordIter((0),G__50026__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50028,other50029){
var self__ = this;
var this50028__$1 = this;
return (((!((other50029 == null)))) && ((this50028__$1.constructor === other50029.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50028__$1.x,other50029.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50028__$1.y,other50029.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50028__$1.__extmap,other50029.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50026){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50076 = cljs.core.keyword_identical_QMARK_;
var expr__50077 = k__4388__auto__;
if(cljs.core.truth_((pred__50076.cljs$core$IFn$_invoke$arity$2 ? pred__50076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50077) : pred__50076.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50077)))){
return (new shadow.dom.Coordinate(G__50026,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50076.cljs$core$IFn$_invoke$arity$2 ? pred__50076.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50077) : pred__50076.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50077)))){
return (new shadow.dom.Coordinate(self__.x,G__50026,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50026),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50026){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50026,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50031){
var extmap__4419__auto__ = (function (){var G__50082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50031,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50031)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50082);
} else {
return G__50082;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50031),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50031),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50115,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50147 = k50115;
var G__50147__$1 = (((G__50147 instanceof cljs.core.Keyword))?G__50147.fqn:null);
switch (G__50147__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50115,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50166){
var vec__50172 = p__50166;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50172,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50172,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50114){
var self__ = this;
var G__50114__$1 = this;
return (new cljs.core.RecordIter((0),G__50114__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50116,other50117){
var self__ = this;
var this50116__$1 = this;
return (((!((other50117 == null)))) && ((this50116__$1.constructor === other50117.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50116__$1.w,other50117.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50116__$1.h,other50117.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50116__$1.__extmap,other50117.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50114){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50190 = cljs.core.keyword_identical_QMARK_;
var expr__50191 = k__4388__auto__;
if(cljs.core.truth_((pred__50190.cljs$core$IFn$_invoke$arity$2 ? pred__50190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50191) : pred__50190.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50191)))){
return (new shadow.dom.Size(G__50114,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50190.cljs$core$IFn$_invoke$arity$2 ? pred__50190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50191) : pred__50190.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50191)))){
return (new shadow.dom.Size(self__.w,G__50114,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50114),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50114){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50114,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50125){
var extmap__4419__auto__ = (function (){var G__50213 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50125,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50125)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50213);
} else {
return G__50213;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50125),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50125),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__50728 = (i + (1));
var G__50729 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50728;
ret = G__50729;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50237){
var vec__50238 = p__50237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50238,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50245 = arguments.length;
switch (G__50245) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50739 = ps;
var G__50740 = (i + (1));
el__$1 = G__50739;
i = G__50740;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50286 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50286,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50286,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50286,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50289_50741 = cljs.core.seq(props);
var chunk__50290_50742 = null;
var count__50291_50743 = (0);
var i__50292_50744 = (0);
while(true){
if((i__50292_50744 < count__50291_50743)){
var vec__50303_50745 = chunk__50290_50742.cljs$core$IIndexed$_nth$arity$2(null,i__50292_50744);
var k_50746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50303_50745,(0),null);
var v_50747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50303_50745,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50746);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50746),v_50747);


var G__50748 = seq__50289_50741;
var G__50749 = chunk__50290_50742;
var G__50750 = count__50291_50743;
var G__50751 = (i__50292_50744 + (1));
seq__50289_50741 = G__50748;
chunk__50290_50742 = G__50749;
count__50291_50743 = G__50750;
i__50292_50744 = G__50751;
continue;
} else {
var temp__5735__auto___50752 = cljs.core.seq(seq__50289_50741);
if(temp__5735__auto___50752){
var seq__50289_50753__$1 = temp__5735__auto___50752;
if(cljs.core.chunked_seq_QMARK_(seq__50289_50753__$1)){
var c__4556__auto___50754 = cljs.core.chunk_first(seq__50289_50753__$1);
var G__50755 = cljs.core.chunk_rest(seq__50289_50753__$1);
var G__50756 = c__4556__auto___50754;
var G__50757 = cljs.core.count(c__4556__auto___50754);
var G__50758 = (0);
seq__50289_50741 = G__50755;
chunk__50290_50742 = G__50756;
count__50291_50743 = G__50757;
i__50292_50744 = G__50758;
continue;
} else {
var vec__50306_50759 = cljs.core.first(seq__50289_50753__$1);
var k_50760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50306_50759,(0),null);
var v_50761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50306_50759,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50760);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50760),v_50761);


var G__50762 = cljs.core.next(seq__50289_50753__$1);
var G__50763 = null;
var G__50764 = (0);
var G__50765 = (0);
seq__50289_50741 = G__50762;
chunk__50290_50742 = G__50763;
count__50291_50743 = G__50764;
i__50292_50744 = G__50765;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50315 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50315,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50315,(1),null);
var seq__50319_50766 = cljs.core.seq(node_children);
var chunk__50321_50767 = null;
var count__50322_50768 = (0);
var i__50323_50769 = (0);
while(true){
if((i__50323_50769 < count__50322_50768)){
var child_struct_50773 = chunk__50321_50767.cljs$core$IIndexed$_nth$arity$2(null,i__50323_50769);
if((!((child_struct_50773 == null)))){
if(typeof child_struct_50773 === 'string'){
var text_50774 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50774),child_struct_50773].join(''));
} else {
var children_50775 = shadow.dom.svg_node(child_struct_50773);
if(cljs.core.seq_QMARK_(children_50775)){
var seq__50339_50776 = cljs.core.seq(children_50775);
var chunk__50341_50777 = null;
var count__50342_50778 = (0);
var i__50343_50779 = (0);
while(true){
if((i__50343_50779 < count__50342_50778)){
var child_50780 = chunk__50341_50777.cljs$core$IIndexed$_nth$arity$2(null,i__50343_50779);
if(cljs.core.truth_(child_50780)){
node.appendChild(child_50780);


var G__50781 = seq__50339_50776;
var G__50782 = chunk__50341_50777;
var G__50783 = count__50342_50778;
var G__50784 = (i__50343_50779 + (1));
seq__50339_50776 = G__50781;
chunk__50341_50777 = G__50782;
count__50342_50778 = G__50783;
i__50343_50779 = G__50784;
continue;
} else {
var G__50785 = seq__50339_50776;
var G__50786 = chunk__50341_50777;
var G__50787 = count__50342_50778;
var G__50788 = (i__50343_50779 + (1));
seq__50339_50776 = G__50785;
chunk__50341_50777 = G__50786;
count__50342_50778 = G__50787;
i__50343_50779 = G__50788;
continue;
}
} else {
var temp__5735__auto___50789 = cljs.core.seq(seq__50339_50776);
if(temp__5735__auto___50789){
var seq__50339_50790__$1 = temp__5735__auto___50789;
if(cljs.core.chunked_seq_QMARK_(seq__50339_50790__$1)){
var c__4556__auto___50791 = cljs.core.chunk_first(seq__50339_50790__$1);
var G__50792 = cljs.core.chunk_rest(seq__50339_50790__$1);
var G__50793 = c__4556__auto___50791;
var G__50794 = cljs.core.count(c__4556__auto___50791);
var G__50795 = (0);
seq__50339_50776 = G__50792;
chunk__50341_50777 = G__50793;
count__50342_50778 = G__50794;
i__50343_50779 = G__50795;
continue;
} else {
var child_50796 = cljs.core.first(seq__50339_50790__$1);
if(cljs.core.truth_(child_50796)){
node.appendChild(child_50796);


var G__50797 = cljs.core.next(seq__50339_50790__$1);
var G__50798 = null;
var G__50799 = (0);
var G__50800 = (0);
seq__50339_50776 = G__50797;
chunk__50341_50777 = G__50798;
count__50342_50778 = G__50799;
i__50343_50779 = G__50800;
continue;
} else {
var G__50801 = cljs.core.next(seq__50339_50790__$1);
var G__50802 = null;
var G__50803 = (0);
var G__50804 = (0);
seq__50339_50776 = G__50801;
chunk__50341_50777 = G__50802;
count__50342_50778 = G__50803;
i__50343_50779 = G__50804;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50775);
}
}


var G__50805 = seq__50319_50766;
var G__50806 = chunk__50321_50767;
var G__50807 = count__50322_50768;
var G__50808 = (i__50323_50769 + (1));
seq__50319_50766 = G__50805;
chunk__50321_50767 = G__50806;
count__50322_50768 = G__50807;
i__50323_50769 = G__50808;
continue;
} else {
var G__50812 = seq__50319_50766;
var G__50813 = chunk__50321_50767;
var G__50814 = count__50322_50768;
var G__50815 = (i__50323_50769 + (1));
seq__50319_50766 = G__50812;
chunk__50321_50767 = G__50813;
count__50322_50768 = G__50814;
i__50323_50769 = G__50815;
continue;
}
} else {
var temp__5735__auto___50816 = cljs.core.seq(seq__50319_50766);
if(temp__5735__auto___50816){
var seq__50319_50817__$1 = temp__5735__auto___50816;
if(cljs.core.chunked_seq_QMARK_(seq__50319_50817__$1)){
var c__4556__auto___50818 = cljs.core.chunk_first(seq__50319_50817__$1);
var G__50819 = cljs.core.chunk_rest(seq__50319_50817__$1);
var G__50820 = c__4556__auto___50818;
var G__50821 = cljs.core.count(c__4556__auto___50818);
var G__50822 = (0);
seq__50319_50766 = G__50819;
chunk__50321_50767 = G__50820;
count__50322_50768 = G__50821;
i__50323_50769 = G__50822;
continue;
} else {
var child_struct_50823 = cljs.core.first(seq__50319_50817__$1);
if((!((child_struct_50823 == null)))){
if(typeof child_struct_50823 === 'string'){
var text_50824 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50824),child_struct_50823].join(''));
} else {
var children_50825 = shadow.dom.svg_node(child_struct_50823);
if(cljs.core.seq_QMARK_(children_50825)){
var seq__50345_50826 = cljs.core.seq(children_50825);
var chunk__50347_50827 = null;
var count__50348_50828 = (0);
var i__50349_50829 = (0);
while(true){
if((i__50349_50829 < count__50348_50828)){
var child_50830 = chunk__50347_50827.cljs$core$IIndexed$_nth$arity$2(null,i__50349_50829);
if(cljs.core.truth_(child_50830)){
node.appendChild(child_50830);


var G__50832 = seq__50345_50826;
var G__50833 = chunk__50347_50827;
var G__50834 = count__50348_50828;
var G__50835 = (i__50349_50829 + (1));
seq__50345_50826 = G__50832;
chunk__50347_50827 = G__50833;
count__50348_50828 = G__50834;
i__50349_50829 = G__50835;
continue;
} else {
var G__50836 = seq__50345_50826;
var G__50837 = chunk__50347_50827;
var G__50838 = count__50348_50828;
var G__50839 = (i__50349_50829 + (1));
seq__50345_50826 = G__50836;
chunk__50347_50827 = G__50837;
count__50348_50828 = G__50838;
i__50349_50829 = G__50839;
continue;
}
} else {
var temp__5735__auto___50840__$1 = cljs.core.seq(seq__50345_50826);
if(temp__5735__auto___50840__$1){
var seq__50345_50841__$1 = temp__5735__auto___50840__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50345_50841__$1)){
var c__4556__auto___50842 = cljs.core.chunk_first(seq__50345_50841__$1);
var G__50846 = cljs.core.chunk_rest(seq__50345_50841__$1);
var G__50847 = c__4556__auto___50842;
var G__50848 = cljs.core.count(c__4556__auto___50842);
var G__50849 = (0);
seq__50345_50826 = G__50846;
chunk__50347_50827 = G__50847;
count__50348_50828 = G__50848;
i__50349_50829 = G__50849;
continue;
} else {
var child_50850 = cljs.core.first(seq__50345_50841__$1);
if(cljs.core.truth_(child_50850)){
node.appendChild(child_50850);


var G__50851 = cljs.core.next(seq__50345_50841__$1);
var G__50852 = null;
var G__50853 = (0);
var G__50854 = (0);
seq__50345_50826 = G__50851;
chunk__50347_50827 = G__50852;
count__50348_50828 = G__50853;
i__50349_50829 = G__50854;
continue;
} else {
var G__50855 = cljs.core.next(seq__50345_50841__$1);
var G__50856 = null;
var G__50857 = (0);
var G__50858 = (0);
seq__50345_50826 = G__50855;
chunk__50347_50827 = G__50856;
count__50348_50828 = G__50857;
i__50349_50829 = G__50858;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50825);
}
}


var G__50859 = cljs.core.next(seq__50319_50817__$1);
var G__50860 = null;
var G__50861 = (0);
var G__50862 = (0);
seq__50319_50766 = G__50859;
chunk__50321_50767 = G__50860;
count__50322_50768 = G__50861;
i__50323_50769 = G__50862;
continue;
} else {
var G__50863 = cljs.core.next(seq__50319_50817__$1);
var G__50864 = null;
var G__50865 = (0);
var G__50866 = (0);
seq__50319_50766 = G__50863;
chunk__50321_50767 = G__50864;
count__50322_50768 = G__50865;
i__50323_50769 = G__50866;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50867 = arguments.length;
var i__4737__auto___50869 = (0);
while(true){
if((i__4737__auto___50869 < len__4736__auto___50867)){
args__4742__auto__.push((arguments[i__4737__auto___50869]));

var G__50870 = (i__4737__auto___50869 + (1));
i__4737__auto___50869 = G__50870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50361){
var G__50362 = cljs.core.first(seq50361);
var seq50361__$1 = cljs.core.next(seq50361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50362,seq50361__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50370 = arguments.length;
switch (G__50370) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__46462__auto___50875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_50384){
var state_val_50385 = (state_50384[(1)]);
if((state_val_50385 === (1))){
var state_50384__$1 = state_50384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50384__$1,(2),once_or_cleanup);
} else {
if((state_val_50385 === (2))){
var inst_50380 = (state_50384[(2)]);
var inst_50382 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50384__$1 = (function (){var statearr_50387 = state_50384;
(statearr_50387[(7)] = inst_50380);

return statearr_50387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50384__$1,inst_50382);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46317__auto__ = null;
var shadow$dom$state_machine__46317__auto____0 = (function (){
var statearr_50389 = [null,null,null,null,null,null,null,null];
(statearr_50389[(0)] = shadow$dom$state_machine__46317__auto__);

(statearr_50389[(1)] = (1));

return statearr_50389;
});
var shadow$dom$state_machine__46317__auto____1 = (function (state_50384){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_50384);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e50392){var ex__46320__auto__ = e50392;
var statearr_50393_50876 = state_50384;
(statearr_50393_50876[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_50384[(4)]))){
var statearr_50395_50877 = state_50384;
(statearr_50395_50877[(1)] = cljs.core.first((state_50384[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50878 = state_50384;
state_50384 = G__50878;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
shadow$dom$state_machine__46317__auto__ = function(state_50384){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46317__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46317__auto____1.call(this,state_50384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46317__auto____0;
shadow$dom$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46317__auto____1;
return shadow$dom$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_50399 = f__46463__auto__();
(statearr_50399[(6)] = c__46462__auto___50875);

return statearr_50399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
