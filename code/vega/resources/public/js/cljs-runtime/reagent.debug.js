goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19777__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19778__i = 0, G__19778__a = new Array(arguments.length -  0);
while (G__19778__i < G__19778__a.length) {G__19778__a[G__19778__i] = arguments[G__19778__i + 0]; ++G__19778__i;}
  args = new cljs.core.IndexedSeq(G__19778__a,0,null);
} 
return G__19777__delegate.call(this,args);};
G__19777.cljs$lang$maxFixedArity = 0;
G__19777.cljs$lang$applyTo = (function (arglist__19779){
var args = cljs.core.seq(arglist__19779);
return G__19777__delegate(args);
});
G__19777.cljs$core$IFn$_invoke$arity$variadic = G__19777__delegate;
return G__19777;
})()
);

(o.error = (function() { 
var G__19780__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19781__i = 0, G__19781__a = new Array(arguments.length -  0);
while (G__19781__i < G__19781__a.length) {G__19781__a[G__19781__i] = arguments[G__19781__i + 0]; ++G__19781__i;}
  args = new cljs.core.IndexedSeq(G__19781__a,0,null);
} 
return G__19780__delegate.call(this,args);};
G__19780.cljs$lang$maxFixedArity = 0;
G__19780.cljs$lang$applyTo = (function (arglist__19782){
var args = cljs.core.seq(arglist__19782);
return G__19780__delegate(args);
});
G__19780.cljs$core$IFn$_invoke$arity$variadic = G__19780__delegate;
return G__19780;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
