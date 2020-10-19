goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47054 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_47054(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47059 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_47059(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46181 = coll;
var G__46182 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46181,G__46182) : shadow.dom.lazy_native_coll_seq.call(null,G__46181,G__46182));
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
var G__46215 = arguments.length;
switch (G__46215) {
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
var G__46224 = arguments.length;
switch (G__46224) {
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
var G__46229 = arguments.length;
switch (G__46229) {
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
var G__46243 = arguments.length;
switch (G__46243) {
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
var G__46258 = arguments.length;
switch (G__46258) {
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
var G__46271 = arguments.length;
switch (G__46271) {
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
}catch (e46277){if((e46277 instanceof Object)){
var e = e46277;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46277;

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
var seq__46290 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46291 = null;
var count__46292 = (0);
var i__46293 = (0);
while(true){
if((i__46293 < count__46292)){
var el = chunk__46291.cljs$core$IIndexed$_nth$arity$2(null,i__46293);
var handler_47099__$1 = ((function (seq__46290,chunk__46291,count__46292,i__46293,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46290,chunk__46291,count__46292,i__46293,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47099__$1);


var G__47100 = seq__46290;
var G__47101 = chunk__46291;
var G__47102 = count__46292;
var G__47103 = (i__46293 + (1));
seq__46290 = G__47100;
chunk__46291 = G__47101;
count__46292 = G__47102;
i__46293 = G__47103;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46290);
if(temp__5735__auto__){
var seq__46290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46290__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46290__$1);
var G__47104 = cljs.core.chunk_rest(seq__46290__$1);
var G__47105 = c__4556__auto__;
var G__47106 = cljs.core.count(c__4556__auto__);
var G__47107 = (0);
seq__46290 = G__47104;
chunk__46291 = G__47105;
count__46292 = G__47106;
i__46293 = G__47107;
continue;
} else {
var el = cljs.core.first(seq__46290__$1);
var handler_47109__$1 = ((function (seq__46290,chunk__46291,count__46292,i__46293,el,seq__46290__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46290,chunk__46291,count__46292,i__46293,el,seq__46290__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47109__$1);


var G__47112 = cljs.core.next(seq__46290__$1);
var G__47113 = null;
var G__47114 = (0);
var G__47115 = (0);
seq__46290 = G__47112;
chunk__46291 = G__47113;
count__46292 = G__47114;
i__46293 = G__47115;
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
var G__46310 = arguments.length;
switch (G__46310) {
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
var seq__46323 = cljs.core.seq(events);
var chunk__46324 = null;
var count__46325 = (0);
var i__46326 = (0);
while(true){
if((i__46326 < count__46325)){
var vec__46337 = chunk__46324.cljs$core$IIndexed$_nth$arity$2(null,i__46326);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46337,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47125 = seq__46323;
var G__47126 = chunk__46324;
var G__47127 = count__46325;
var G__47128 = (i__46326 + (1));
seq__46323 = G__47125;
chunk__46324 = G__47126;
count__46325 = G__47127;
i__46326 = G__47128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46323);
if(temp__5735__auto__){
var seq__46323__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46323__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46323__$1);
var G__47132 = cljs.core.chunk_rest(seq__46323__$1);
var G__47133 = c__4556__auto__;
var G__47134 = cljs.core.count(c__4556__auto__);
var G__47135 = (0);
seq__46323 = G__47132;
chunk__46324 = G__47133;
count__46325 = G__47134;
i__46326 = G__47135;
continue;
} else {
var vec__46344 = cljs.core.first(seq__46323__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46344,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47140 = cljs.core.next(seq__46323__$1);
var G__47141 = null;
var G__47142 = (0);
var G__47143 = (0);
seq__46323 = G__47140;
chunk__46324 = G__47141;
count__46325 = G__47142;
i__46326 = G__47143;
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
var seq__46350 = cljs.core.seq(styles);
var chunk__46351 = null;
var count__46352 = (0);
var i__46353 = (0);
while(true){
if((i__46353 < count__46352)){
var vec__46374 = chunk__46351.cljs$core$IIndexed$_nth$arity$2(null,i__46353);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46374,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47145 = seq__46350;
var G__47146 = chunk__46351;
var G__47147 = count__46352;
var G__47148 = (i__46353 + (1));
seq__46350 = G__47145;
chunk__46351 = G__47146;
count__46352 = G__47147;
i__46353 = G__47148;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46350);
if(temp__5735__auto__){
var seq__46350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46350__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46350__$1);
var G__47150 = cljs.core.chunk_rest(seq__46350__$1);
var G__47151 = c__4556__auto__;
var G__47152 = cljs.core.count(c__4556__auto__);
var G__47153 = (0);
seq__46350 = G__47150;
chunk__46351 = G__47151;
count__46352 = G__47152;
i__46353 = G__47153;
continue;
} else {
var vec__46378 = cljs.core.first(seq__46350__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46378,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47154 = cljs.core.next(seq__46350__$1);
var G__47155 = null;
var G__47156 = (0);
var G__47157 = (0);
seq__46350 = G__47154;
chunk__46351 = G__47155;
count__46352 = G__47156;
i__46353 = G__47157;
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
var G__46384_47159 = key;
var G__46384_47160__$1 = (((G__46384_47159 instanceof cljs.core.Keyword))?G__46384_47159.fqn:null);
switch (G__46384_47160__$1) {
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
var ks_47169 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_47169,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_47169,"aria-");
}
})())){
el.setAttribute(ks_47169,value);
} else {
(el[ks_47169] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46420){
var map__46422 = p__46420;
var map__46422__$1 = (((((!((map__46422 == null))))?(((((map__46422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46422):map__46422);
var props = map__46422__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46422__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46425 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46425,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46425,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46425,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46429 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46429,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46429;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46438 = arguments.length;
switch (G__46438) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46454){
var vec__46455 = p__46454;
var seq__46456 = cljs.core.seq(vec__46455);
var first__46457 = cljs.core.first(seq__46456);
var seq__46456__$1 = cljs.core.next(seq__46456);
var nn = first__46457;
var first__46457__$1 = cljs.core.first(seq__46456__$1);
var seq__46456__$2 = cljs.core.next(seq__46456__$1);
var np = first__46457__$1;
var nc = seq__46456__$2;
var node = vec__46455;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46459 = nn;
var G__46460 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46459,G__46460) : create_fn.call(null,G__46459,G__46460));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46461 = nn;
var G__46462 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46461,G__46462) : create_fn.call(null,G__46461,G__46462));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46471 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46471,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46471,(1),null);
var seq__46475_47194 = cljs.core.seq(node_children);
var chunk__46476_47195 = null;
var count__46477_47196 = (0);
var i__46478_47197 = (0);
while(true){
if((i__46478_47197 < count__46477_47196)){
var child_struct_47201 = chunk__46476_47195.cljs$core$IIndexed$_nth$arity$2(null,i__46478_47197);
var children_47204 = shadow.dom.dom_node(child_struct_47201);
if(cljs.core.seq_QMARK_(children_47204)){
var seq__46522_47205 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47204));
var chunk__46524_47206 = null;
var count__46525_47207 = (0);
var i__46526_47208 = (0);
while(true){
if((i__46526_47208 < count__46525_47207)){
var child_47210 = chunk__46524_47206.cljs$core$IIndexed$_nth$arity$2(null,i__46526_47208);
if(cljs.core.truth_(child_47210)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47210);


var G__47212 = seq__46522_47205;
var G__47213 = chunk__46524_47206;
var G__47214 = count__46525_47207;
var G__47215 = (i__46526_47208 + (1));
seq__46522_47205 = G__47212;
chunk__46524_47206 = G__47213;
count__46525_47207 = G__47214;
i__46526_47208 = G__47215;
continue;
} else {
var G__47217 = seq__46522_47205;
var G__47218 = chunk__46524_47206;
var G__47219 = count__46525_47207;
var G__47220 = (i__46526_47208 + (1));
seq__46522_47205 = G__47217;
chunk__46524_47206 = G__47218;
count__46525_47207 = G__47219;
i__46526_47208 = G__47220;
continue;
}
} else {
var temp__5735__auto___47222 = cljs.core.seq(seq__46522_47205);
if(temp__5735__auto___47222){
var seq__46522_47224__$1 = temp__5735__auto___47222;
if(cljs.core.chunked_seq_QMARK_(seq__46522_47224__$1)){
var c__4556__auto___47225 = cljs.core.chunk_first(seq__46522_47224__$1);
var G__47226 = cljs.core.chunk_rest(seq__46522_47224__$1);
var G__47227 = c__4556__auto___47225;
var G__47228 = cljs.core.count(c__4556__auto___47225);
var G__47229 = (0);
seq__46522_47205 = G__47226;
chunk__46524_47206 = G__47227;
count__46525_47207 = G__47228;
i__46526_47208 = G__47229;
continue;
} else {
var child_47230 = cljs.core.first(seq__46522_47224__$1);
if(cljs.core.truth_(child_47230)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47230);


var G__47231 = cljs.core.next(seq__46522_47224__$1);
var G__47232 = null;
var G__47233 = (0);
var G__47234 = (0);
seq__46522_47205 = G__47231;
chunk__46524_47206 = G__47232;
count__46525_47207 = G__47233;
i__46526_47208 = G__47234;
continue;
} else {
var G__47235 = cljs.core.next(seq__46522_47224__$1);
var G__47236 = null;
var G__47237 = (0);
var G__47238 = (0);
seq__46522_47205 = G__47235;
chunk__46524_47206 = G__47236;
count__46525_47207 = G__47237;
i__46526_47208 = G__47238;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47204);
}


var G__47240 = seq__46475_47194;
var G__47241 = chunk__46476_47195;
var G__47242 = count__46477_47196;
var G__47243 = (i__46478_47197 + (1));
seq__46475_47194 = G__47240;
chunk__46476_47195 = G__47241;
count__46477_47196 = G__47242;
i__46478_47197 = G__47243;
continue;
} else {
var temp__5735__auto___47245 = cljs.core.seq(seq__46475_47194);
if(temp__5735__auto___47245){
var seq__46475_47247__$1 = temp__5735__auto___47245;
if(cljs.core.chunked_seq_QMARK_(seq__46475_47247__$1)){
var c__4556__auto___47248 = cljs.core.chunk_first(seq__46475_47247__$1);
var G__47250 = cljs.core.chunk_rest(seq__46475_47247__$1);
var G__47251 = c__4556__auto___47248;
var G__47252 = cljs.core.count(c__4556__auto___47248);
var G__47253 = (0);
seq__46475_47194 = G__47250;
chunk__46476_47195 = G__47251;
count__46477_47196 = G__47252;
i__46478_47197 = G__47253;
continue;
} else {
var child_struct_47254 = cljs.core.first(seq__46475_47247__$1);
var children_47255 = shadow.dom.dom_node(child_struct_47254);
if(cljs.core.seq_QMARK_(children_47255)){
var seq__46536_47257 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47255));
var chunk__46538_47258 = null;
var count__46539_47259 = (0);
var i__46540_47260 = (0);
while(true){
if((i__46540_47260 < count__46539_47259)){
var child_47262 = chunk__46538_47258.cljs$core$IIndexed$_nth$arity$2(null,i__46540_47260);
if(cljs.core.truth_(child_47262)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47262);


var G__47264 = seq__46536_47257;
var G__47265 = chunk__46538_47258;
var G__47266 = count__46539_47259;
var G__47267 = (i__46540_47260 + (1));
seq__46536_47257 = G__47264;
chunk__46538_47258 = G__47265;
count__46539_47259 = G__47266;
i__46540_47260 = G__47267;
continue;
} else {
var G__47268 = seq__46536_47257;
var G__47269 = chunk__46538_47258;
var G__47270 = count__46539_47259;
var G__47271 = (i__46540_47260 + (1));
seq__46536_47257 = G__47268;
chunk__46538_47258 = G__47269;
count__46539_47259 = G__47270;
i__46540_47260 = G__47271;
continue;
}
} else {
var temp__5735__auto___47273__$1 = cljs.core.seq(seq__46536_47257);
if(temp__5735__auto___47273__$1){
var seq__46536_47274__$1 = temp__5735__auto___47273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46536_47274__$1)){
var c__4556__auto___47275 = cljs.core.chunk_first(seq__46536_47274__$1);
var G__47276 = cljs.core.chunk_rest(seq__46536_47274__$1);
var G__47277 = c__4556__auto___47275;
var G__47278 = cljs.core.count(c__4556__auto___47275);
var G__47279 = (0);
seq__46536_47257 = G__47276;
chunk__46538_47258 = G__47277;
count__46539_47259 = G__47278;
i__46540_47260 = G__47279;
continue;
} else {
var child_47283 = cljs.core.first(seq__46536_47274__$1);
if(cljs.core.truth_(child_47283)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47283);


var G__47285 = cljs.core.next(seq__46536_47274__$1);
var G__47286 = null;
var G__47287 = (0);
var G__47288 = (0);
seq__46536_47257 = G__47285;
chunk__46538_47258 = G__47286;
count__46539_47259 = G__47287;
i__46540_47260 = G__47288;
continue;
} else {
var G__47289 = cljs.core.next(seq__46536_47274__$1);
var G__47290 = null;
var G__47291 = (0);
var G__47292 = (0);
seq__46536_47257 = G__47289;
chunk__46538_47258 = G__47290;
count__46539_47259 = G__47291;
i__46540_47260 = G__47292;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47255);
}


var G__47293 = cljs.core.next(seq__46475_47247__$1);
var G__47294 = null;
var G__47295 = (0);
var G__47296 = (0);
seq__46475_47194 = G__47293;
chunk__46476_47195 = G__47294;
count__46477_47196 = G__47295;
i__46478_47197 = G__47296;
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
var seq__46564 = cljs.core.seq(node);
var chunk__46565 = null;
var count__46566 = (0);
var i__46567 = (0);
while(true){
if((i__46567 < count__46566)){
var n = chunk__46565.cljs$core$IIndexed$_nth$arity$2(null,i__46567);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47308 = seq__46564;
var G__47309 = chunk__46565;
var G__47310 = count__46566;
var G__47311 = (i__46567 + (1));
seq__46564 = G__47308;
chunk__46565 = G__47309;
count__46566 = G__47310;
i__46567 = G__47311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46564);
if(temp__5735__auto__){
var seq__46564__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46564__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46564__$1);
var G__47314 = cljs.core.chunk_rest(seq__46564__$1);
var G__47315 = c__4556__auto__;
var G__47316 = cljs.core.count(c__4556__auto__);
var G__47317 = (0);
seq__46564 = G__47314;
chunk__46565 = G__47315;
count__46566 = G__47316;
i__46567 = G__47317;
continue;
} else {
var n = cljs.core.first(seq__46564__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47320 = cljs.core.next(seq__46564__$1);
var G__47321 = null;
var G__47322 = (0);
var G__47323 = (0);
seq__46564 = G__47320;
chunk__46565 = G__47321;
count__46566 = G__47322;
i__46567 = G__47323;
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
var G__46592 = arguments.length;
switch (G__46592) {
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
var G__46599 = arguments.length;
switch (G__46599) {
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
var G__46625 = arguments.length;
switch (G__46625) {
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
var len__4736__auto___47346 = arguments.length;
var i__4737__auto___47348 = (0);
while(true){
if((i__4737__auto___47348 < len__4736__auto___47346)){
args__4742__auto__.push((arguments[i__4737__auto___47348]));

var G__47350 = (i__4737__auto___47348 + (1));
i__4737__auto___47348 = G__47350;
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
var seq__46654_47354 = cljs.core.seq(nodes);
var chunk__46655_47355 = null;
var count__46656_47356 = (0);
var i__46657_47357 = (0);
while(true){
if((i__46657_47357 < count__46656_47356)){
var node_47359 = chunk__46655_47355.cljs$core$IIndexed$_nth$arity$2(null,i__46657_47357);
fragment.appendChild(shadow.dom._to_dom(node_47359));


var G__47360 = seq__46654_47354;
var G__47361 = chunk__46655_47355;
var G__47362 = count__46656_47356;
var G__47363 = (i__46657_47357 + (1));
seq__46654_47354 = G__47360;
chunk__46655_47355 = G__47361;
count__46656_47356 = G__47362;
i__46657_47357 = G__47363;
continue;
} else {
var temp__5735__auto___47364 = cljs.core.seq(seq__46654_47354);
if(temp__5735__auto___47364){
var seq__46654_47365__$1 = temp__5735__auto___47364;
if(cljs.core.chunked_seq_QMARK_(seq__46654_47365__$1)){
var c__4556__auto___47366 = cljs.core.chunk_first(seq__46654_47365__$1);
var G__47368 = cljs.core.chunk_rest(seq__46654_47365__$1);
var G__47369 = c__4556__auto___47366;
var G__47370 = cljs.core.count(c__4556__auto___47366);
var G__47371 = (0);
seq__46654_47354 = G__47368;
chunk__46655_47355 = G__47369;
count__46656_47356 = G__47370;
i__46657_47357 = G__47371;
continue;
} else {
var node_47372 = cljs.core.first(seq__46654_47365__$1);
fragment.appendChild(shadow.dom._to_dom(node_47372));


var G__47373 = cljs.core.next(seq__46654_47365__$1);
var G__47374 = null;
var G__47375 = (0);
var G__47376 = (0);
seq__46654_47354 = G__47373;
chunk__46655_47355 = G__47374;
count__46656_47356 = G__47375;
i__46657_47357 = G__47376;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46649){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46649));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46665_47380 = cljs.core.seq(scripts);
var chunk__46666_47381 = null;
var count__46667_47382 = (0);
var i__46668_47383 = (0);
while(true){
if((i__46668_47383 < count__46667_47382)){
var vec__46692_47384 = chunk__46666_47381.cljs$core$IIndexed$_nth$arity$2(null,i__46668_47383);
var script_tag_47385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46692_47384,(0),null);
var script_body_47386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46692_47384,(1),null);
eval(script_body_47386);


var G__47387 = seq__46665_47380;
var G__47388 = chunk__46666_47381;
var G__47389 = count__46667_47382;
var G__47390 = (i__46668_47383 + (1));
seq__46665_47380 = G__47387;
chunk__46666_47381 = G__47388;
count__46667_47382 = G__47389;
i__46668_47383 = G__47390;
continue;
} else {
var temp__5735__auto___47391 = cljs.core.seq(seq__46665_47380);
if(temp__5735__auto___47391){
var seq__46665_47393__$1 = temp__5735__auto___47391;
if(cljs.core.chunked_seq_QMARK_(seq__46665_47393__$1)){
var c__4556__auto___47394 = cljs.core.chunk_first(seq__46665_47393__$1);
var G__47400 = cljs.core.chunk_rest(seq__46665_47393__$1);
var G__47401 = c__4556__auto___47394;
var G__47402 = cljs.core.count(c__4556__auto___47394);
var G__47403 = (0);
seq__46665_47380 = G__47400;
chunk__46666_47381 = G__47401;
count__46667_47382 = G__47402;
i__46668_47383 = G__47403;
continue;
} else {
var vec__46698_47405 = cljs.core.first(seq__46665_47393__$1);
var script_tag_47406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46698_47405,(0),null);
var script_body_47407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46698_47405,(1),null);
eval(script_body_47407);


var G__47408 = cljs.core.next(seq__46665_47393__$1);
var G__47409 = null;
var G__47410 = (0);
var G__47411 = (0);
seq__46665_47380 = G__47408;
chunk__46666_47381 = G__47409;
count__46667_47382 = G__47410;
i__46668_47383 = G__47411;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46701){
var vec__46702 = p__46701;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46702,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46702,(1),null);
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
var G__46709 = arguments.length;
switch (G__46709) {
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
var seq__46717 = cljs.core.seq(style_keys);
var chunk__46718 = null;
var count__46719 = (0);
var i__46720 = (0);
while(true){
if((i__46720 < count__46719)){
var it = chunk__46718.cljs$core$IIndexed$_nth$arity$2(null,i__46720);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47422 = seq__46717;
var G__47423 = chunk__46718;
var G__47424 = count__46719;
var G__47425 = (i__46720 + (1));
seq__46717 = G__47422;
chunk__46718 = G__47423;
count__46719 = G__47424;
i__46720 = G__47425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46717);
if(temp__5735__auto__){
var seq__46717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46717__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46717__$1);
var G__47426 = cljs.core.chunk_rest(seq__46717__$1);
var G__47427 = c__4556__auto__;
var G__47428 = cljs.core.count(c__4556__auto__);
var G__47429 = (0);
seq__46717 = G__47426;
chunk__46718 = G__47427;
count__46719 = G__47428;
i__46720 = G__47429;
continue;
} else {
var it = cljs.core.first(seq__46717__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47430 = cljs.core.next(seq__46717__$1);
var G__47431 = null;
var G__47432 = (0);
var G__47433 = (0);
seq__46717 = G__47430;
chunk__46718 = G__47431;
count__46719 = G__47432;
i__46720 = G__47433;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46730,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46736 = k46730;
var G__46736__$1 = (((G__46736 instanceof cljs.core.Keyword))?G__46736.fqn:null);
switch (G__46736__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46730,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46737){
var vec__46738 = p__46737;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46738,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46738,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46729){
var self__ = this;
var G__46729__$1 = this;
return (new cljs.core.RecordIter((0),G__46729__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46731,other46732){
var self__ = this;
var this46731__$1 = this;
return (((!((other46732 == null)))) && ((this46731__$1.constructor === other46732.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46731__$1.x,other46732.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46731__$1.y,other46732.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46731__$1.__extmap,other46732.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46729){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46773 = cljs.core.keyword_identical_QMARK_;
var expr__46774 = k__4388__auto__;
if(cljs.core.truth_((pred__46773.cljs$core$IFn$_invoke$arity$2 ? pred__46773.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46774) : pred__46773.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46774)))){
return (new shadow.dom.Coordinate(G__46729,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46773.cljs$core$IFn$_invoke$arity$2 ? pred__46773.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46774) : pred__46773.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46774)))){
return (new shadow.dom.Coordinate(self__.x,G__46729,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46729),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46729){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46729,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46735){
var extmap__4419__auto__ = (function (){var G__46801 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46735,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46801);
} else {
return G__46801;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46735),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46735),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46810,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46818 = k46810;
var G__46818__$1 = (((G__46818 instanceof cljs.core.Keyword))?G__46818.fqn:null);
switch (G__46818__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46810,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46820){
var vec__46821 = p__46820;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46821,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46821,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46809){
var self__ = this;
var G__46809__$1 = this;
return (new cljs.core.RecordIter((0),G__46809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46811,other46812){
var self__ = this;
var this46811__$1 = this;
return (((!((other46812 == null)))) && ((this46811__$1.constructor === other46812.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46811__$1.w,other46812.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46811__$1.h,other46812.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46811__$1.__extmap,other46812.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46809){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46830 = cljs.core.keyword_identical_QMARK_;
var expr__46831 = k__4388__auto__;
if(cljs.core.truth_((pred__46830.cljs$core$IFn$_invoke$arity$2 ? pred__46830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46831) : pred__46830.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46831)))){
return (new shadow.dom.Size(G__46809,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46830.cljs$core$IFn$_invoke$arity$2 ? pred__46830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46831) : pred__46830.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46831)))){
return (new shadow.dom.Size(self__.w,G__46809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46809),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46809){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46809,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46813){
var extmap__4419__auto__ = (function (){var G__46844 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46813,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46813)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46844);
} else {
return G__46844;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46813),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46813),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__47470 = (i + (1));
var G__47471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47470;
ret = G__47471;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46862){
var vec__46863 = p__46862;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46863,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46871 = arguments.length;
switch (G__46871) {
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
var G__47476 = ps;
var G__47477 = (i + (1));
el__$1 = G__47476;
i = G__47477;
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
var vec__46890 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46890,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46890,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46890,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46895_47481 = cljs.core.seq(props);
var chunk__46896_47482 = null;
var count__46897_47483 = (0);
var i__46898_47484 = (0);
while(true){
if((i__46898_47484 < count__46897_47483)){
var vec__46910_47485 = chunk__46896_47482.cljs$core$IIndexed$_nth$arity$2(null,i__46898_47484);
var k_47486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46910_47485,(0),null);
var v_47487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46910_47485,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_47486);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47486),v_47487);


var G__47488 = seq__46895_47481;
var G__47489 = chunk__46896_47482;
var G__47490 = count__46897_47483;
var G__47491 = (i__46898_47484 + (1));
seq__46895_47481 = G__47488;
chunk__46896_47482 = G__47489;
count__46897_47483 = G__47490;
i__46898_47484 = G__47491;
continue;
} else {
var temp__5735__auto___47492 = cljs.core.seq(seq__46895_47481);
if(temp__5735__auto___47492){
var seq__46895_47493__$1 = temp__5735__auto___47492;
if(cljs.core.chunked_seq_QMARK_(seq__46895_47493__$1)){
var c__4556__auto___47497 = cljs.core.chunk_first(seq__46895_47493__$1);
var G__47498 = cljs.core.chunk_rest(seq__46895_47493__$1);
var G__47499 = c__4556__auto___47497;
var G__47500 = cljs.core.count(c__4556__auto___47497);
var G__47501 = (0);
seq__46895_47481 = G__47498;
chunk__46896_47482 = G__47499;
count__46897_47483 = G__47500;
i__46898_47484 = G__47501;
continue;
} else {
var vec__46916_47502 = cljs.core.first(seq__46895_47493__$1);
var k_47503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46916_47502,(0),null);
var v_47504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46916_47502,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_47503);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47503),v_47504);


var G__47510 = cljs.core.next(seq__46895_47493__$1);
var G__47511 = null;
var G__47512 = (0);
var G__47513 = (0);
seq__46895_47481 = G__47510;
chunk__46896_47482 = G__47511;
count__46897_47483 = G__47512;
i__46898_47484 = G__47513;
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
var vec__46925 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46925,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46925,(1),null);
var seq__46929_47514 = cljs.core.seq(node_children);
var chunk__46931_47515 = null;
var count__46932_47516 = (0);
var i__46933_47517 = (0);
while(true){
if((i__46933_47517 < count__46932_47516)){
var child_struct_47518 = chunk__46931_47515.cljs$core$IIndexed$_nth$arity$2(null,i__46933_47517);
if((!((child_struct_47518 == null)))){
if(typeof child_struct_47518 === 'string'){
var text_47519 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47519),child_struct_47518].join(''));
} else {
var children_47520 = shadow.dom.svg_node(child_struct_47518);
if(cljs.core.seq_QMARK_(children_47520)){
var seq__46973_47521 = cljs.core.seq(children_47520);
var chunk__46975_47522 = null;
var count__46976_47523 = (0);
var i__46977_47524 = (0);
while(true){
if((i__46977_47524 < count__46976_47523)){
var child_47525 = chunk__46975_47522.cljs$core$IIndexed$_nth$arity$2(null,i__46977_47524);
if(cljs.core.truth_(child_47525)){
node.appendChild(child_47525);


var G__47526 = seq__46973_47521;
var G__47527 = chunk__46975_47522;
var G__47528 = count__46976_47523;
var G__47529 = (i__46977_47524 + (1));
seq__46973_47521 = G__47526;
chunk__46975_47522 = G__47527;
count__46976_47523 = G__47528;
i__46977_47524 = G__47529;
continue;
} else {
var G__47530 = seq__46973_47521;
var G__47531 = chunk__46975_47522;
var G__47532 = count__46976_47523;
var G__47533 = (i__46977_47524 + (1));
seq__46973_47521 = G__47530;
chunk__46975_47522 = G__47531;
count__46976_47523 = G__47532;
i__46977_47524 = G__47533;
continue;
}
} else {
var temp__5735__auto___47534 = cljs.core.seq(seq__46973_47521);
if(temp__5735__auto___47534){
var seq__46973_47535__$1 = temp__5735__auto___47534;
if(cljs.core.chunked_seq_QMARK_(seq__46973_47535__$1)){
var c__4556__auto___47536 = cljs.core.chunk_first(seq__46973_47535__$1);
var G__47537 = cljs.core.chunk_rest(seq__46973_47535__$1);
var G__47538 = c__4556__auto___47536;
var G__47539 = cljs.core.count(c__4556__auto___47536);
var G__47540 = (0);
seq__46973_47521 = G__47537;
chunk__46975_47522 = G__47538;
count__46976_47523 = G__47539;
i__46977_47524 = G__47540;
continue;
} else {
var child_47543 = cljs.core.first(seq__46973_47535__$1);
if(cljs.core.truth_(child_47543)){
node.appendChild(child_47543);


var G__47544 = cljs.core.next(seq__46973_47535__$1);
var G__47545 = null;
var G__47546 = (0);
var G__47547 = (0);
seq__46973_47521 = G__47544;
chunk__46975_47522 = G__47545;
count__46976_47523 = G__47546;
i__46977_47524 = G__47547;
continue;
} else {
var G__47548 = cljs.core.next(seq__46973_47535__$1);
var G__47549 = null;
var G__47550 = (0);
var G__47551 = (0);
seq__46973_47521 = G__47548;
chunk__46975_47522 = G__47549;
count__46976_47523 = G__47550;
i__46977_47524 = G__47551;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47520);
}
}


var G__47552 = seq__46929_47514;
var G__47553 = chunk__46931_47515;
var G__47554 = count__46932_47516;
var G__47555 = (i__46933_47517 + (1));
seq__46929_47514 = G__47552;
chunk__46931_47515 = G__47553;
count__46932_47516 = G__47554;
i__46933_47517 = G__47555;
continue;
} else {
var G__47556 = seq__46929_47514;
var G__47557 = chunk__46931_47515;
var G__47558 = count__46932_47516;
var G__47559 = (i__46933_47517 + (1));
seq__46929_47514 = G__47556;
chunk__46931_47515 = G__47557;
count__46932_47516 = G__47558;
i__46933_47517 = G__47559;
continue;
}
} else {
var temp__5735__auto___47560 = cljs.core.seq(seq__46929_47514);
if(temp__5735__auto___47560){
var seq__46929_47561__$1 = temp__5735__auto___47560;
if(cljs.core.chunked_seq_QMARK_(seq__46929_47561__$1)){
var c__4556__auto___47562 = cljs.core.chunk_first(seq__46929_47561__$1);
var G__47563 = cljs.core.chunk_rest(seq__46929_47561__$1);
var G__47564 = c__4556__auto___47562;
var G__47565 = cljs.core.count(c__4556__auto___47562);
var G__47566 = (0);
seq__46929_47514 = G__47563;
chunk__46931_47515 = G__47564;
count__46932_47516 = G__47565;
i__46933_47517 = G__47566;
continue;
} else {
var child_struct_47567 = cljs.core.first(seq__46929_47561__$1);
if((!((child_struct_47567 == null)))){
if(typeof child_struct_47567 === 'string'){
var text_47568 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47568),child_struct_47567].join(''));
} else {
var children_47569 = shadow.dom.svg_node(child_struct_47567);
if(cljs.core.seq_QMARK_(children_47569)){
var seq__46984_47570 = cljs.core.seq(children_47569);
var chunk__46986_47571 = null;
var count__46987_47572 = (0);
var i__46988_47573 = (0);
while(true){
if((i__46988_47573 < count__46987_47572)){
var child_47574 = chunk__46986_47571.cljs$core$IIndexed$_nth$arity$2(null,i__46988_47573);
if(cljs.core.truth_(child_47574)){
node.appendChild(child_47574);


var G__47576 = seq__46984_47570;
var G__47577 = chunk__46986_47571;
var G__47578 = count__46987_47572;
var G__47579 = (i__46988_47573 + (1));
seq__46984_47570 = G__47576;
chunk__46986_47571 = G__47577;
count__46987_47572 = G__47578;
i__46988_47573 = G__47579;
continue;
} else {
var G__47580 = seq__46984_47570;
var G__47581 = chunk__46986_47571;
var G__47582 = count__46987_47572;
var G__47583 = (i__46988_47573 + (1));
seq__46984_47570 = G__47580;
chunk__46986_47571 = G__47581;
count__46987_47572 = G__47582;
i__46988_47573 = G__47583;
continue;
}
} else {
var temp__5735__auto___47584__$1 = cljs.core.seq(seq__46984_47570);
if(temp__5735__auto___47584__$1){
var seq__46984_47585__$1 = temp__5735__auto___47584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46984_47585__$1)){
var c__4556__auto___47586 = cljs.core.chunk_first(seq__46984_47585__$1);
var G__47587 = cljs.core.chunk_rest(seq__46984_47585__$1);
var G__47588 = c__4556__auto___47586;
var G__47589 = cljs.core.count(c__4556__auto___47586);
var G__47590 = (0);
seq__46984_47570 = G__47587;
chunk__46986_47571 = G__47588;
count__46987_47572 = G__47589;
i__46988_47573 = G__47590;
continue;
} else {
var child_47591 = cljs.core.first(seq__46984_47585__$1);
if(cljs.core.truth_(child_47591)){
node.appendChild(child_47591);


var G__47592 = cljs.core.next(seq__46984_47585__$1);
var G__47593 = null;
var G__47594 = (0);
var G__47595 = (0);
seq__46984_47570 = G__47592;
chunk__46986_47571 = G__47593;
count__46987_47572 = G__47594;
i__46988_47573 = G__47595;
continue;
} else {
var G__47596 = cljs.core.next(seq__46984_47585__$1);
var G__47597 = null;
var G__47598 = (0);
var G__47599 = (0);
seq__46984_47570 = G__47596;
chunk__46986_47571 = G__47597;
count__46987_47572 = G__47598;
i__46988_47573 = G__47599;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47569);
}
}


var G__47600 = cljs.core.next(seq__46929_47561__$1);
var G__47601 = null;
var G__47602 = (0);
var G__47603 = (0);
seq__46929_47514 = G__47600;
chunk__46931_47515 = G__47601;
count__46932_47516 = G__47602;
i__46933_47517 = G__47603;
continue;
} else {
var G__47604 = cljs.core.next(seq__46929_47561__$1);
var G__47605 = null;
var G__47606 = (0);
var G__47607 = (0);
seq__46929_47514 = G__47604;
chunk__46931_47515 = G__47605;
count__46932_47516 = G__47606;
i__46933_47517 = G__47607;
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
var len__4736__auto___47610 = arguments.length;
var i__4737__auto___47611 = (0);
while(true){
if((i__4737__auto___47611 < len__4736__auto___47610)){
args__4742__auto__.push((arguments[i__4737__auto___47611]));

var G__47612 = (i__4737__auto___47611 + (1));
i__4737__auto___47611 = G__47612;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47000){
var G__47001 = cljs.core.first(seq47000);
var seq47000__$1 = cljs.core.next(seq47000);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47001,seq47000__$1);
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
var G__47007 = arguments.length;
switch (G__47007) {
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
var c__43837__auto___47619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43838__auto__ = (function (){var switch__43735__auto__ = (function (state_47023){
var state_val_47024 = (state_47023[(1)]);
if((state_val_47024 === (1))){
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47023__$1,(2),once_or_cleanup);
} else {
if((state_val_47024 === (2))){
var inst_47020 = (state_47023[(2)]);
var inst_47021 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47023__$1 = (function (){var statearr_47031 = state_47023;
(statearr_47031[(7)] = inst_47020);

return statearr_47031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47023__$1,inst_47021);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43736__auto__ = null;
var shadow$dom$state_machine__43736__auto____0 = (function (){
var statearr_47036 = [null,null,null,null,null,null,null,null];
(statearr_47036[(0)] = shadow$dom$state_machine__43736__auto__);

(statearr_47036[(1)] = (1));

return statearr_47036;
});
var shadow$dom$state_machine__43736__auto____1 = (function (state_47023){
while(true){
var ret_value__43737__auto__ = (function (){try{while(true){
var result__43738__auto__ = switch__43735__auto__(state_47023);
if(cljs.core.keyword_identical_QMARK_(result__43738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43738__auto__;
}
break;
}
}catch (e47037){var ex__43739__auto__ = e47037;
var statearr_47039_47621 = state_47023;
(statearr_47039_47621[(2)] = ex__43739__auto__);


if(cljs.core.seq((state_47023[(4)]))){
var statearr_47041_47622 = state_47023;
(statearr_47041_47622[(1)] = cljs.core.first((state_47023[(4)])));

} else {
throw ex__43739__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47626 = state_47023;
state_47023 = G__47626;
continue;
} else {
return ret_value__43737__auto__;
}
break;
}
});
shadow$dom$state_machine__43736__auto__ = function(state_47023){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43736__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43736__auto____1.call(this,state_47023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43736__auto____0;
shadow$dom$state_machine__43736__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43736__auto____1;
return shadow$dom$state_machine__43736__auto__;
})()
})();
var state__43839__auto__ = (function (){var statearr_47044 = f__43838__auto__();
(statearr_47044[(6)] = c__43837__auto___47619);

return statearr_47044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43839__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
