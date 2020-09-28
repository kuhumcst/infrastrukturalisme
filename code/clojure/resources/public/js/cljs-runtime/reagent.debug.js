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
var G__52322__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52323__i = 0, G__52323__a = new Array(arguments.length -  0);
while (G__52323__i < G__52323__a.length) {G__52323__a[G__52323__i] = arguments[G__52323__i + 0]; ++G__52323__i;}
  args = new cljs.core.IndexedSeq(G__52323__a,0,null);
} 
return G__52322__delegate.call(this,args);};
G__52322.cljs$lang$maxFixedArity = 0;
G__52322.cljs$lang$applyTo = (function (arglist__52324){
var args = cljs.core.seq(arglist__52324);
return G__52322__delegate(args);
});
G__52322.cljs$core$IFn$_invoke$arity$variadic = G__52322__delegate;
return G__52322;
})()
);

(o.error = (function() { 
var G__52325__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52329__i = 0, G__52329__a = new Array(arguments.length -  0);
while (G__52329__i < G__52329__a.length) {G__52329__a[G__52329__i] = arguments[G__52329__i + 0]; ++G__52329__i;}
  args = new cljs.core.IndexedSeq(G__52329__a,0,null);
} 
return G__52325__delegate.call(this,args);};
G__52325.cljs$lang$maxFixedArity = 0;
G__52325.cljs$lang$applyTo = (function (arglist__52335){
var args = cljs.core.seq(arglist__52335);
return G__52325__delegate(args);
});
G__52325.cljs$core$IFn$_invoke$arity$variadic = G__52325__delegate;
return G__52325;
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
