goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__20510 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20511 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20511);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__20515 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20516 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20516);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20515);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20510);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__20522 = arguments.length;
switch (G__20522) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__20528 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20528,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20528,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__20543_20582 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__20544_20583 = null;
var count__20545_20584 = (0);
var i__20546_20585 = (0);
while(true){
if((i__20546_20585 < count__20545_20584)){
var vec__20559_20586 = chunk__20544_20583.cljs$core$IIndexed$_nth$arity$2(null,i__20546_20585);
var container_20587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20559_20586,(0),null);
var comp_20588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20559_20586,(1),null);
reagent.dom.re_render_component(comp_20588,container_20587);


var G__20590 = seq__20543_20582;
var G__20591 = chunk__20544_20583;
var G__20592 = count__20545_20584;
var G__20593 = (i__20546_20585 + (1));
seq__20543_20582 = G__20590;
chunk__20544_20583 = G__20591;
count__20545_20584 = G__20592;
i__20546_20585 = G__20593;
continue;
} else {
var temp__5735__auto___20594 = cljs.core.seq(seq__20543_20582);
if(temp__5735__auto___20594){
var seq__20543_20595__$1 = temp__5735__auto___20594;
if(cljs.core.chunked_seq_QMARK_(seq__20543_20595__$1)){
var c__4556__auto___20596 = cljs.core.chunk_first(seq__20543_20595__$1);
var G__20597 = cljs.core.chunk_rest(seq__20543_20595__$1);
var G__20598 = c__4556__auto___20596;
var G__20599 = cljs.core.count(c__4556__auto___20596);
var G__20600 = (0);
seq__20543_20582 = G__20597;
chunk__20544_20583 = G__20598;
count__20545_20584 = G__20599;
i__20546_20585 = G__20600;
continue;
} else {
var vec__20562_20601 = cljs.core.first(seq__20543_20595__$1);
var container_20602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562_20601,(0),null);
var comp_20603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20562_20601,(1),null);
reagent.dom.re_render_component(comp_20603,container_20602);


var G__20604 = cljs.core.next(seq__20543_20595__$1);
var G__20605 = null;
var G__20606 = (0);
var G__20607 = (0);
seq__20543_20582 = G__20604;
chunk__20544_20583 = G__20605;
count__20545_20584 = G__20606;
i__20546_20585 = G__20607;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
