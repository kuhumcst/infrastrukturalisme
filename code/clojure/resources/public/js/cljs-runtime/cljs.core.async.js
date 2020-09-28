goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46608 = arguments.length;
switch (G__46608) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46621 = (function (f,blockable,meta46622){
this.f = f;
this.blockable = blockable;
this.meta46622 = meta46622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46623,meta46622__$1){
var self__ = this;
var _46623__$1 = this;
return (new cljs.core.async.t_cljs$core$async46621(self__.f,self__.blockable,meta46622__$1));
}));

(cljs.core.async.t_cljs$core$async46621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46623){
var self__ = this;
var _46623__$1 = this;
return self__.meta46622;
}));

(cljs.core.async.t_cljs$core$async46621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46622","meta46622",238099221,null)], null);
}));

(cljs.core.async.t_cljs$core$async46621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46621");

(cljs.core.async.t_cljs$core$async46621.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46621.
 */
cljs.core.async.__GT_t_cljs$core$async46621 = (function cljs$core$async$__GT_t_cljs$core$async46621(f__$1,blockable__$1,meta46622){
return (new cljs.core.async.t_cljs$core$async46621(f__$1,blockable__$1,meta46622));
});

}

return (new cljs.core.async.t_cljs$core$async46621(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46659 = arguments.length;
switch (G__46659) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46839 = arguments.length;
switch (G__46839) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46854 = arguments.length;
switch (G__46854) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49399 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49399) : fn1.call(null,val_49399));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49399) : fn1.call(null,val_49399));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46989 = arguments.length;
switch (G__46989) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___49406 = n;
var x_49407 = (0);
while(true){
if((x_49407 < n__4613__auto___49406)){
(a[x_49407] = x_49407);

var G__49408 = (x_49407 + (1));
x_49407 = G__49408;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47001 = (function (flag,meta47002){
this.flag = flag;
this.meta47002 = meta47002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47003,meta47002__$1){
var self__ = this;
var _47003__$1 = this;
return (new cljs.core.async.t_cljs$core$async47001(self__.flag,meta47002__$1));
}));

(cljs.core.async.t_cljs$core$async47001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47003){
var self__ = this;
var _47003__$1 = this;
return self__.meta47002;
}));

(cljs.core.async.t_cljs$core$async47001.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47002","meta47002",1828363662,null)], null);
}));

(cljs.core.async.t_cljs$core$async47001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47001");

(cljs.core.async.t_cljs$core$async47001.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47001.
 */
cljs.core.async.__GT_t_cljs$core$async47001 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47001(flag__$1,meta47002){
return (new cljs.core.async.t_cljs$core$async47001(flag__$1,meta47002));
});

}

return (new cljs.core.async.t_cljs$core$async47001(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47013 = (function (flag,cb,meta47014){
this.flag = flag;
this.cb = cb;
this.meta47014 = meta47014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47015,meta47014__$1){
var self__ = this;
var _47015__$1 = this;
return (new cljs.core.async.t_cljs$core$async47013(self__.flag,self__.cb,meta47014__$1));
}));

(cljs.core.async.t_cljs$core$async47013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47015){
var self__ = this;
var _47015__$1 = this;
return self__.meta47014;
}));

(cljs.core.async.t_cljs$core$async47013.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47014","meta47014",-1038956600,null)], null);
}));

(cljs.core.async.t_cljs$core$async47013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47013");

(cljs.core.async.t_cljs$core$async47013.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47013.
 */
cljs.core.async.__GT_t_cljs$core$async47013 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47013(flag__$1,cb__$1,meta47014){
return (new cljs.core.async.t_cljs$core$async47013(flag__$1,cb__$1,meta47014));
});

}

return (new cljs.core.async.t_cljs$core$async47013(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47025_SHARP_){
var G__47029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47025_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47029) : fret.call(null,G__47029));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47026_SHARP_){
var G__47030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47026_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47030) : fret.call(null,G__47030));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49434 = (i + (1));
i = G__49434;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49435 = arguments.length;
var i__4737__auto___49436 = (0);
while(true){
if((i__4737__auto___49436 < len__4736__auto___49435)){
args__4742__auto__.push((arguments[i__4737__auto___49436]));

var G__49437 = (i__4737__auto___49436 + (1));
i__4737__auto___49436 = G__49437;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47085){
var map__47086 = p__47085;
var map__47086__$1 = (((((!((map__47086 == null))))?(((((map__47086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47086):map__47086);
var opts = map__47086__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47068){
var G__47070 = cljs.core.first(seq47068);
var seq47068__$1 = cljs.core.next(seq47068);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47070,seq47068__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47096 = arguments.length;
switch (G__47096) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46462__auto___49440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47131){
var state_val_47132 = (state_47131[(1)]);
if((state_val_47132 === (7))){
var inst_47125 = (state_47131[(2)]);
var state_47131__$1 = state_47131;
var statearr_47137_49441 = state_47131__$1;
(statearr_47137_49441[(2)] = inst_47125);

(statearr_47137_49441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (1))){
var state_47131__$1 = state_47131;
var statearr_47139_49442 = state_47131__$1;
(statearr_47139_49442[(2)] = null);

(statearr_47139_49442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (4))){
var inst_47104 = (state_47131[(7)]);
var inst_47104__$1 = (state_47131[(2)]);
var inst_47105 = (inst_47104__$1 == null);
var state_47131__$1 = (function (){var statearr_47159 = state_47131;
(statearr_47159[(7)] = inst_47104__$1);

return statearr_47159;
})();
if(cljs.core.truth_(inst_47105)){
var statearr_47160_49444 = state_47131__$1;
(statearr_47160_49444[(1)] = (5));

} else {
var statearr_47161_49445 = state_47131__$1;
(statearr_47161_49445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (13))){
var state_47131__$1 = state_47131;
var statearr_47162_49446 = state_47131__$1;
(statearr_47162_49446[(2)] = null);

(statearr_47162_49446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (6))){
var inst_47104 = (state_47131[(7)]);
var state_47131__$1 = state_47131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47131__$1,(11),to,inst_47104);
} else {
if((state_val_47132 === (3))){
var inst_47127 = (state_47131[(2)]);
var state_47131__$1 = state_47131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47131__$1,inst_47127);
} else {
if((state_val_47132 === (12))){
var state_47131__$1 = state_47131;
var statearr_47163_49448 = state_47131__$1;
(statearr_47163_49448[(2)] = null);

(statearr_47163_49448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (2))){
var state_47131__$1 = state_47131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47131__$1,(4),from);
} else {
if((state_val_47132 === (11))){
var inst_47115 = (state_47131[(2)]);
var state_47131__$1 = state_47131;
if(cljs.core.truth_(inst_47115)){
var statearr_47164_49457 = state_47131__$1;
(statearr_47164_49457[(1)] = (12));

} else {
var statearr_47165_49459 = state_47131__$1;
(statearr_47165_49459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (9))){
var state_47131__$1 = state_47131;
var statearr_47168_49460 = state_47131__$1;
(statearr_47168_49460[(2)] = null);

(statearr_47168_49460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (5))){
var state_47131__$1 = state_47131;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47169_49465 = state_47131__$1;
(statearr_47169_49465[(1)] = (8));

} else {
var statearr_47170_49466 = state_47131__$1;
(statearr_47170_49466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (14))){
var inst_47123 = (state_47131[(2)]);
var state_47131__$1 = state_47131;
var statearr_47171_49467 = state_47131__$1;
(statearr_47171_49467[(2)] = inst_47123);

(statearr_47171_49467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (10))){
var inst_47112 = (state_47131[(2)]);
var state_47131__$1 = state_47131;
var statearr_47173_49468 = state_47131__$1;
(statearr_47173_49468[(2)] = inst_47112);

(statearr_47173_49468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47132 === (8))){
var inst_47108 = cljs.core.async.close_BANG_(to);
var state_47131__$1 = state_47131;
var statearr_47174_49469 = state_47131__$1;
(statearr_47174_49469[(2)] = inst_47108);

(statearr_47174_49469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_47180 = [null,null,null,null,null,null,null,null];
(statearr_47180[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_47180[(1)] = (1));

return statearr_47180;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_47131){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47131);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47181){var ex__46320__auto__ = e47181;
var statearr_47182_49473 = state_47131;
(statearr_47182_49473[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47131[(4)]))){
var statearr_47183_49474 = state_47131;
(statearr_47183_49474[(1)] = cljs.core.first((state_47131[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49475 = state_47131;
state_47131 = G__49475;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_47131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_47131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47184 = f__46463__auto__();
(statearr_47184[(6)] = c__46462__auto___49440);

return statearr_47184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47192){
var vec__47194 = p__47192;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(1),null);
var job = vec__47194;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46462__auto___49483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47206){
var state_val_47207 = (state_47206[(1)]);
if((state_val_47207 === (1))){
var state_47206__$1 = state_47206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47206__$1,(2),res,v);
} else {
if((state_val_47207 === (2))){
var inst_47203 = (state_47206[(2)]);
var inst_47204 = cljs.core.async.close_BANG_(res);
var state_47206__$1 = (function (){var statearr_47226 = state_47206;
(statearr_47226[(7)] = inst_47203);

return statearr_47226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47206__$1,inst_47204);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0 = (function (){
var statearr_47236 = [null,null,null,null,null,null,null,null];
(statearr_47236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__);

(statearr_47236[(1)] = (1));

return statearr_47236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1 = (function (state_47206){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47206);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47237){var ex__46320__auto__ = e47237;
var statearr_47246_49488 = state_47206;
(statearr_47246_49488[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47206[(4)]))){
var statearr_47250_49489 = state_47206;
(statearr_47250_49489[(1)] = cljs.core.first((state_47206[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49491 = state_47206;
state_47206 = G__49491;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = function(state_47206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1.call(this,state_47206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47254 = f__46463__auto__();
(statearr_47254[(6)] = c__46462__auto___49483);

return statearr_47254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47260){
var vec__47263 = p__47260;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(1),null);
var job = vec__47263;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___49496 = n;
var __49498 = (0);
while(true){
if((__49498 < n__4613__auto___49496)){
var G__47268_49499 = type;
var G__47268_49500__$1 = (((G__47268_49499 instanceof cljs.core.Keyword))?G__47268_49499.fqn:null);
switch (G__47268_49500__$1) {
case "compute":
var c__46462__auto___49503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49498,c__46462__auto___49503,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async){
return (function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = ((function (__49498,c__46462__auto___49503,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async){
return (function (state_47285){
var state_val_47286 = (state_47285[(1)]);
if((state_val_47286 === (1))){
var state_47285__$1 = state_47285;
var statearr_47296_49504 = state_47285__$1;
(statearr_47296_49504[(2)] = null);

(statearr_47296_49504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (2))){
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47285__$1,(4),jobs);
} else {
if((state_val_47286 === (3))){
var inst_47282 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47285__$1,inst_47282);
} else {
if((state_val_47286 === (4))){
var inst_47273 = (state_47285[(2)]);
var inst_47274 = process(inst_47273);
var state_47285__$1 = state_47285;
if(cljs.core.truth_(inst_47274)){
var statearr_47298_49508 = state_47285__$1;
(statearr_47298_49508[(1)] = (5));

} else {
var statearr_47299_49509 = state_47285__$1;
(statearr_47299_49509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (5))){
var state_47285__$1 = state_47285;
var statearr_47302_49510 = state_47285__$1;
(statearr_47302_49510[(2)] = null);

(statearr_47302_49510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (6))){
var state_47285__$1 = state_47285;
var statearr_47305_49511 = state_47285__$1;
(statearr_47305_49511[(2)] = null);

(statearr_47305_49511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (7))){
var inst_47279 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47306_49512 = state_47285__$1;
(statearr_47306_49512[(2)] = inst_47279);

(statearr_47306_49512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49498,c__46462__auto___49503,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async))
;
return ((function (__49498,switch__46316__auto__,c__46462__auto___49503,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0 = (function (){
var statearr_47307 = [null,null,null,null,null,null,null];
(statearr_47307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__);

(statearr_47307[(1)] = (1));

return statearr_47307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1 = (function (state_47285){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47285);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47308){var ex__46320__auto__ = e47308;
var statearr_47310_49518 = state_47285;
(statearr_47310_49518[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47285[(4)]))){
var statearr_47311_49519 = state_47285;
(statearr_47311_49519[(1)] = cljs.core.first((state_47285[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49520 = state_47285;
state_47285 = G__49520;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = function(state_47285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1.call(this,state_47285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__;
})()
;})(__49498,switch__46316__auto__,c__46462__auto___49503,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async))
})();
var state__46464__auto__ = (function (){var statearr_47314 = f__46463__auto__();
(statearr_47314[(6)] = c__46462__auto___49503);

return statearr_47314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
});})(__49498,c__46462__auto___49503,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async))
);


break;
case "async":
var c__46462__auto___49524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49498,c__46462__auto___49524,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async){
return (function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = ((function (__49498,c__46462__auto___49524,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async){
return (function (state_47327){
var state_val_47328 = (state_47327[(1)]);
if((state_val_47328 === (1))){
var state_47327__$1 = state_47327;
var statearr_47339_49525 = state_47327__$1;
(statearr_47339_49525[(2)] = null);

(statearr_47339_49525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (2))){
var state_47327__$1 = state_47327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47327__$1,(4),jobs);
} else {
if((state_val_47328 === (3))){
var inst_47325 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47327__$1,inst_47325);
} else {
if((state_val_47328 === (4))){
var inst_47317 = (state_47327[(2)]);
var inst_47318 = async(inst_47317);
var state_47327__$1 = state_47327;
if(cljs.core.truth_(inst_47318)){
var statearr_47343_49526 = state_47327__$1;
(statearr_47343_49526[(1)] = (5));

} else {
var statearr_47344_49527 = state_47327__$1;
(statearr_47344_49527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (5))){
var state_47327__$1 = state_47327;
var statearr_47349_49528 = state_47327__$1;
(statearr_47349_49528[(2)] = null);

(statearr_47349_49528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (6))){
var state_47327__$1 = state_47327;
var statearr_47350_49529 = state_47327__$1;
(statearr_47350_49529[(2)] = null);

(statearr_47350_49529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47328 === (7))){
var inst_47323 = (state_47327[(2)]);
var state_47327__$1 = state_47327;
var statearr_47351_49530 = state_47327__$1;
(statearr_47351_49530[(2)] = inst_47323);

(statearr_47351_49530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49498,c__46462__auto___49524,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async))
;
return ((function (__49498,switch__46316__auto__,c__46462__auto___49524,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0 = (function (){
var statearr_47352 = [null,null,null,null,null,null,null];
(statearr_47352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__);

(statearr_47352[(1)] = (1));

return statearr_47352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1 = (function (state_47327){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47327);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47353){var ex__46320__auto__ = e47353;
var statearr_47354_49533 = state_47327;
(statearr_47354_49533[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47327[(4)]))){
var statearr_47355_49534 = state_47327;
(statearr_47355_49534[(1)] = cljs.core.first((state_47327[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49538 = state_47327;
state_47327 = G__49538;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = function(state_47327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1.call(this,state_47327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__;
})()
;})(__49498,switch__46316__auto__,c__46462__auto___49524,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async))
})();
var state__46464__auto__ = (function (){var statearr_47359 = f__46463__auto__();
(statearr_47359[(6)] = c__46462__auto___49524);

return statearr_47359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
});})(__49498,c__46462__auto___49524,G__47268_49499,G__47268_49500__$1,n__4613__auto___49496,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47268_49500__$1)].join('')));

}

var G__49542 = (__49498 + (1));
__49498 = G__49542;
continue;
} else {
}
break;
}

var c__46462__auto___49543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47385){
var state_val_47386 = (state_47385[(1)]);
if((state_val_47386 === (7))){
var inst_47381 = (state_47385[(2)]);
var state_47385__$1 = state_47385;
var statearr_47393_49544 = state_47385__$1;
(statearr_47393_49544[(2)] = inst_47381);

(statearr_47393_49544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (1))){
var state_47385__$1 = state_47385;
var statearr_47394_49545 = state_47385__$1;
(statearr_47394_49545[(2)] = null);

(statearr_47394_49545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (4))){
var inst_47363 = (state_47385[(7)]);
var inst_47363__$1 = (state_47385[(2)]);
var inst_47364 = (inst_47363__$1 == null);
var state_47385__$1 = (function (){var statearr_47396 = state_47385;
(statearr_47396[(7)] = inst_47363__$1);

return statearr_47396;
})();
if(cljs.core.truth_(inst_47364)){
var statearr_47399_49549 = state_47385__$1;
(statearr_47399_49549[(1)] = (5));

} else {
var statearr_47402_49550 = state_47385__$1;
(statearr_47402_49550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (6))){
var inst_47368 = (state_47385[(8)]);
var inst_47363 = (state_47385[(7)]);
var inst_47368__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47373 = [inst_47363,inst_47368__$1];
var inst_47374 = (new cljs.core.PersistentVector(null,2,(5),inst_47371,inst_47373,null));
var state_47385__$1 = (function (){var statearr_47410 = state_47385;
(statearr_47410[(8)] = inst_47368__$1);

return statearr_47410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47385__$1,(8),jobs,inst_47374);
} else {
if((state_val_47386 === (3))){
var inst_47383 = (state_47385[(2)]);
var state_47385__$1 = state_47385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47385__$1,inst_47383);
} else {
if((state_val_47386 === (2))){
var state_47385__$1 = state_47385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47385__$1,(4),from);
} else {
if((state_val_47386 === (9))){
var inst_47378 = (state_47385[(2)]);
var state_47385__$1 = (function (){var statearr_47412 = state_47385;
(statearr_47412[(9)] = inst_47378);

return statearr_47412;
})();
var statearr_47413_49552 = state_47385__$1;
(statearr_47413_49552[(2)] = null);

(statearr_47413_49552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (5))){
var inst_47366 = cljs.core.async.close_BANG_(jobs);
var state_47385__$1 = state_47385;
var statearr_47415_49553 = state_47385__$1;
(statearr_47415_49553[(2)] = inst_47366);

(statearr_47415_49553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47386 === (8))){
var inst_47368 = (state_47385[(8)]);
var inst_47376 = (state_47385[(2)]);
var state_47385__$1 = (function (){var statearr_47419 = state_47385;
(statearr_47419[(10)] = inst_47376);

return statearr_47419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47385__$1,(9),results,inst_47368);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0 = (function (){
var statearr_47421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__);

(statearr_47421[(1)] = (1));

return statearr_47421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1 = (function (state_47385){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47385);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47424){var ex__46320__auto__ = e47424;
var statearr_47425_49554 = state_47385;
(statearr_47425_49554[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47385[(4)]))){
var statearr_47427_49555 = state_47385;
(statearr_47427_49555[(1)] = cljs.core.first((state_47385[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49556 = state_47385;
state_47385 = G__49556;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = function(state_47385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1.call(this,state_47385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47428 = f__46463__auto__();
(statearr_47428[(6)] = c__46462__auto___49543);

return statearr_47428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


var c__46462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47469){
var state_val_47470 = (state_47469[(1)]);
if((state_val_47470 === (7))){
var inst_47465 = (state_47469[(2)]);
var state_47469__$1 = state_47469;
var statearr_47471_49557 = state_47469__$1;
(statearr_47471_49557[(2)] = inst_47465);

(statearr_47471_49557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (20))){
var state_47469__$1 = state_47469;
var statearr_47473_49558 = state_47469__$1;
(statearr_47473_49558[(2)] = null);

(statearr_47473_49558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (1))){
var state_47469__$1 = state_47469;
var statearr_47474_49559 = state_47469__$1;
(statearr_47474_49559[(2)] = null);

(statearr_47474_49559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (4))){
var inst_47431 = (state_47469[(7)]);
var inst_47431__$1 = (state_47469[(2)]);
var inst_47432 = (inst_47431__$1 == null);
var state_47469__$1 = (function (){var statearr_47476 = state_47469;
(statearr_47476[(7)] = inst_47431__$1);

return statearr_47476;
})();
if(cljs.core.truth_(inst_47432)){
var statearr_47477_49564 = state_47469__$1;
(statearr_47477_49564[(1)] = (5));

} else {
var statearr_47478_49565 = state_47469__$1;
(statearr_47478_49565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (15))){
var inst_47447 = (state_47469[(8)]);
var state_47469__$1 = state_47469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47469__$1,(18),to,inst_47447);
} else {
if((state_val_47470 === (21))){
var inst_47460 = (state_47469[(2)]);
var state_47469__$1 = state_47469;
var statearr_47479_49566 = state_47469__$1;
(statearr_47479_49566[(2)] = inst_47460);

(statearr_47479_49566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (13))){
var inst_47462 = (state_47469[(2)]);
var state_47469__$1 = (function (){var statearr_47480 = state_47469;
(statearr_47480[(9)] = inst_47462);

return statearr_47480;
})();
var statearr_47481_49567 = state_47469__$1;
(statearr_47481_49567[(2)] = null);

(statearr_47481_49567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (6))){
var inst_47431 = (state_47469[(7)]);
var state_47469__$1 = state_47469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47469__$1,(11),inst_47431);
} else {
if((state_val_47470 === (17))){
var inst_47455 = (state_47469[(2)]);
var state_47469__$1 = state_47469;
if(cljs.core.truth_(inst_47455)){
var statearr_47482_49568 = state_47469__$1;
(statearr_47482_49568[(1)] = (19));

} else {
var statearr_47483_49569 = state_47469__$1;
(statearr_47483_49569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (3))){
var inst_47467 = (state_47469[(2)]);
var state_47469__$1 = state_47469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47469__$1,inst_47467);
} else {
if((state_val_47470 === (12))){
var inst_47443 = (state_47469[(10)]);
var state_47469__$1 = state_47469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47469__$1,(14),inst_47443);
} else {
if((state_val_47470 === (2))){
var state_47469__$1 = state_47469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47469__$1,(4),results);
} else {
if((state_val_47470 === (19))){
var state_47469__$1 = state_47469;
var statearr_47486_49570 = state_47469__$1;
(statearr_47486_49570[(2)] = null);

(statearr_47486_49570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (11))){
var inst_47443 = (state_47469[(2)]);
var state_47469__$1 = (function (){var statearr_47487 = state_47469;
(statearr_47487[(10)] = inst_47443);

return statearr_47487;
})();
var statearr_47488_49571 = state_47469__$1;
(statearr_47488_49571[(2)] = null);

(statearr_47488_49571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (9))){
var state_47469__$1 = state_47469;
var statearr_47492_49572 = state_47469__$1;
(statearr_47492_49572[(2)] = null);

(statearr_47492_49572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (5))){
var state_47469__$1 = state_47469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47493_49573 = state_47469__$1;
(statearr_47493_49573[(1)] = (8));

} else {
var statearr_47494_49574 = state_47469__$1;
(statearr_47494_49574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (14))){
var inst_47447 = (state_47469[(8)]);
var inst_47447__$1 = (state_47469[(2)]);
var inst_47448 = (inst_47447__$1 == null);
var inst_47449 = cljs.core.not(inst_47448);
var state_47469__$1 = (function (){var statearr_47495 = state_47469;
(statearr_47495[(8)] = inst_47447__$1);

return statearr_47495;
})();
if(inst_47449){
var statearr_47496_49575 = state_47469__$1;
(statearr_47496_49575[(1)] = (15));

} else {
var statearr_47497_49576 = state_47469__$1;
(statearr_47497_49576[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (16))){
var state_47469__$1 = state_47469;
var statearr_47498_49578 = state_47469__$1;
(statearr_47498_49578[(2)] = false);

(statearr_47498_49578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (10))){
var inst_47438 = (state_47469[(2)]);
var state_47469__$1 = state_47469;
var statearr_47499_49580 = state_47469__$1;
(statearr_47499_49580[(2)] = inst_47438);

(statearr_47499_49580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (18))){
var inst_47452 = (state_47469[(2)]);
var state_47469__$1 = state_47469;
var statearr_47500_49581 = state_47469__$1;
(statearr_47500_49581[(2)] = inst_47452);

(statearr_47500_49581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47470 === (8))){
var inst_47435 = cljs.core.async.close_BANG_(to);
var state_47469__$1 = state_47469;
var statearr_47501_49582 = state_47469__$1;
(statearr_47501_49582[(2)] = inst_47435);

(statearr_47501_49582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0 = (function (){
var statearr_47502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__);

(statearr_47502[(1)] = (1));

return statearr_47502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1 = (function (state_47469){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47469);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47503){var ex__46320__auto__ = e47503;
var statearr_47504_49583 = state_47469;
(statearr_47504_49583[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47469[(4)]))){
var statearr_47505_49584 = state_47469;
(statearr_47505_49584[(1)] = cljs.core.first((state_47469[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49585 = state_47469;
state_47469 = G__49585;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__ = function(state_47469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1.call(this,state_47469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47506 = f__46463__auto__();
(statearr_47506[(6)] = c__46462__auto__);

return statearr_47506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));

return c__46462__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47509 = arguments.length;
switch (G__47509) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47512 = arguments.length;
switch (G__47512) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47519 = arguments.length;
switch (G__47519) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46462__auto___49605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47546){
var state_val_47547 = (state_47546[(1)]);
if((state_val_47547 === (7))){
var inst_47542 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
var statearr_47548_49606 = state_47546__$1;
(statearr_47548_49606[(2)] = inst_47542);

(statearr_47548_49606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (1))){
var state_47546__$1 = state_47546;
var statearr_47549_49607 = state_47546__$1;
(statearr_47549_49607[(2)] = null);

(statearr_47549_49607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (4))){
var inst_47523 = (state_47546[(7)]);
var inst_47523__$1 = (state_47546[(2)]);
var inst_47524 = (inst_47523__$1 == null);
var state_47546__$1 = (function (){var statearr_47550 = state_47546;
(statearr_47550[(7)] = inst_47523__$1);

return statearr_47550;
})();
if(cljs.core.truth_(inst_47524)){
var statearr_47551_49612 = state_47546__$1;
(statearr_47551_49612[(1)] = (5));

} else {
var statearr_47553_49616 = state_47546__$1;
(statearr_47553_49616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (13))){
var state_47546__$1 = state_47546;
var statearr_47555_49617 = state_47546__$1;
(statearr_47555_49617[(2)] = null);

(statearr_47555_49617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (6))){
var inst_47523 = (state_47546[(7)]);
var inst_47529 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47523) : p.call(null,inst_47523));
var state_47546__$1 = state_47546;
if(cljs.core.truth_(inst_47529)){
var statearr_47556_49618 = state_47546__$1;
(statearr_47556_49618[(1)] = (9));

} else {
var statearr_47557_49619 = state_47546__$1;
(statearr_47557_49619[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (3))){
var inst_47544 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47546__$1,inst_47544);
} else {
if((state_val_47547 === (12))){
var state_47546__$1 = state_47546;
var statearr_47558_49623 = state_47546__$1;
(statearr_47558_49623[(2)] = null);

(statearr_47558_49623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (2))){
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47546__$1,(4),ch);
} else {
if((state_val_47547 === (11))){
var inst_47523 = (state_47546[(7)]);
var inst_47533 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47546__$1,(8),inst_47533,inst_47523);
} else {
if((state_val_47547 === (9))){
var state_47546__$1 = state_47546;
var statearr_47559_49631 = state_47546__$1;
(statearr_47559_49631[(2)] = tc);

(statearr_47559_49631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (5))){
var inst_47526 = cljs.core.async.close_BANG_(tc);
var inst_47527 = cljs.core.async.close_BANG_(fc);
var state_47546__$1 = (function (){var statearr_47560 = state_47546;
(statearr_47560[(8)] = inst_47526);

return statearr_47560;
})();
var statearr_47561_49632 = state_47546__$1;
(statearr_47561_49632[(2)] = inst_47527);

(statearr_47561_49632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (14))){
var inst_47540 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
var statearr_47562_49636 = state_47546__$1;
(statearr_47562_49636[(2)] = inst_47540);

(statearr_47562_49636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (10))){
var state_47546__$1 = state_47546;
var statearr_47563_49637 = state_47546__$1;
(statearr_47563_49637[(2)] = fc);

(statearr_47563_49637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47547 === (8))){
var inst_47535 = (state_47546[(2)]);
var state_47546__$1 = state_47546;
if(cljs.core.truth_(inst_47535)){
var statearr_47564_49638 = state_47546__$1;
(statearr_47564_49638[(1)] = (12));

} else {
var statearr_47565_49639 = state_47546__$1;
(statearr_47565_49639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_47572 = [null,null,null,null,null,null,null,null,null];
(statearr_47572[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_47572[(1)] = (1));

return statearr_47572;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_47546){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47546);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47573){var ex__46320__auto__ = e47573;
var statearr_47574_49641 = state_47546;
(statearr_47574_49641[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47546[(4)]))){
var statearr_47575_49642 = state_47546;
(statearr_47575_49642[(1)] = cljs.core.first((state_47546[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49643 = state_47546;
state_47546 = G__49643;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_47546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_47546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47576 = f__46463__auto__();
(statearr_47576[(6)] = c__46462__auto___49605);

return statearr_47576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47598){
var state_val_47599 = (state_47598[(1)]);
if((state_val_47599 === (7))){
var inst_47594 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
var statearr_47600_49644 = state_47598__$1;
(statearr_47600_49644[(2)] = inst_47594);

(statearr_47600_49644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (1))){
var inst_47577 = init;
var inst_47578 = inst_47577;
var state_47598__$1 = (function (){var statearr_47601 = state_47598;
(statearr_47601[(7)] = inst_47578);

return statearr_47601;
})();
var statearr_47602_49645 = state_47598__$1;
(statearr_47602_49645[(2)] = null);

(statearr_47602_49645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (4))){
var inst_47581 = (state_47598[(8)]);
var inst_47581__$1 = (state_47598[(2)]);
var inst_47582 = (inst_47581__$1 == null);
var state_47598__$1 = (function (){var statearr_47604 = state_47598;
(statearr_47604[(8)] = inst_47581__$1);

return statearr_47604;
})();
if(cljs.core.truth_(inst_47582)){
var statearr_47605_49648 = state_47598__$1;
(statearr_47605_49648[(1)] = (5));

} else {
var statearr_47606_49649 = state_47598__$1;
(statearr_47606_49649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (6))){
var inst_47585 = (state_47598[(9)]);
var inst_47581 = (state_47598[(8)]);
var inst_47578 = (state_47598[(7)]);
var inst_47585__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47578,inst_47581) : f.call(null,inst_47578,inst_47581));
var inst_47586 = cljs.core.reduced_QMARK_(inst_47585__$1);
var state_47598__$1 = (function (){var statearr_47607 = state_47598;
(statearr_47607[(9)] = inst_47585__$1);

return statearr_47607;
})();
if(inst_47586){
var statearr_47608_49651 = state_47598__$1;
(statearr_47608_49651[(1)] = (8));

} else {
var statearr_47609_49652 = state_47598__$1;
(statearr_47609_49652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (3))){
var inst_47596 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47598__$1,inst_47596);
} else {
if((state_val_47599 === (2))){
var state_47598__$1 = state_47598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47598__$1,(4),ch);
} else {
if((state_val_47599 === (9))){
var inst_47585 = (state_47598[(9)]);
var inst_47578 = inst_47585;
var state_47598__$1 = (function (){var statearr_47614 = state_47598;
(statearr_47614[(7)] = inst_47578);

return statearr_47614;
})();
var statearr_47615_49653 = state_47598__$1;
(statearr_47615_49653[(2)] = null);

(statearr_47615_49653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (5))){
var inst_47578 = (state_47598[(7)]);
var state_47598__$1 = state_47598;
var statearr_47616_49654 = state_47598__$1;
(statearr_47616_49654[(2)] = inst_47578);

(statearr_47616_49654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (10))){
var inst_47592 = (state_47598[(2)]);
var state_47598__$1 = state_47598;
var statearr_47619_49655 = state_47598__$1;
(statearr_47619_49655[(2)] = inst_47592);

(statearr_47619_49655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47599 === (8))){
var inst_47585 = (state_47598[(9)]);
var inst_47588 = cljs.core.deref(inst_47585);
var state_47598__$1 = state_47598;
var statearr_47622_49657 = state_47598__$1;
(statearr_47622_49657[(2)] = inst_47588);

(statearr_47622_49657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46317__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46317__auto____0 = (function (){
var statearr_47623 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47623[(0)] = cljs$core$async$reduce_$_state_machine__46317__auto__);

(statearr_47623[(1)] = (1));

return statearr_47623;
});
var cljs$core$async$reduce_$_state_machine__46317__auto____1 = (function (state_47598){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47598);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47624){var ex__46320__auto__ = e47624;
var statearr_47625_49658 = state_47598;
(statearr_47625_49658[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47598[(4)]))){
var statearr_47627_49659 = state_47598;
(statearr_47627_49659[(1)] = cljs.core.first((state_47598[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49660 = state_47598;
state_47598 = G__49660;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46317__auto__ = function(state_47598){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46317__auto____1.call(this,state_47598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46317__auto____0;
cljs$core$async$reduce_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46317__auto____1;
return cljs$core$async$reduce_$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47629 = f__46463__auto__();
(statearr_47629[(6)] = c__46462__auto__);

return statearr_47629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));

return c__46462__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47640){
var state_val_47641 = (state_47640[(1)]);
if((state_val_47641 === (1))){
var inst_47635 = cljs.core.async.reduce(f__$1,init,ch);
var state_47640__$1 = state_47640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47640__$1,(2),inst_47635);
} else {
if((state_val_47641 === (2))){
var inst_47637 = (state_47640[(2)]);
var inst_47638 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47637) : f__$1.call(null,inst_47637));
var state_47640__$1 = state_47640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47640__$1,inst_47638);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46317__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46317__auto____0 = (function (){
var statearr_47646 = [null,null,null,null,null,null,null];
(statearr_47646[(0)] = cljs$core$async$transduce_$_state_machine__46317__auto__);

(statearr_47646[(1)] = (1));

return statearr_47646;
});
var cljs$core$async$transduce_$_state_machine__46317__auto____1 = (function (state_47640){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47640);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47648){var ex__46320__auto__ = e47648;
var statearr_47649_49670 = state_47640;
(statearr_47649_49670[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47640[(4)]))){
var statearr_47650_49671 = state_47640;
(statearr_47650_49671[(1)] = cljs.core.first((state_47640[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49674 = state_47640;
state_47640 = G__49674;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46317__auto__ = function(state_47640){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46317__auto____1.call(this,state_47640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46317__auto____0;
cljs$core$async$transduce_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46317__auto____1;
return cljs$core$async$transduce_$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47655 = f__46463__auto__();
(statearr_47655[(6)] = c__46462__auto__);

return statearr_47655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));

return c__46462__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47661 = arguments.length;
switch (G__47661) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47686){
var state_val_47687 = (state_47686[(1)]);
if((state_val_47687 === (7))){
var inst_47668 = (state_47686[(2)]);
var state_47686__$1 = state_47686;
var statearr_47690_49679 = state_47686__$1;
(statearr_47690_49679[(2)] = inst_47668);

(statearr_47690_49679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (1))){
var inst_47662 = cljs.core.seq(coll);
var inst_47663 = inst_47662;
var state_47686__$1 = (function (){var statearr_47691 = state_47686;
(statearr_47691[(7)] = inst_47663);

return statearr_47691;
})();
var statearr_47692_49680 = state_47686__$1;
(statearr_47692_49680[(2)] = null);

(statearr_47692_49680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (4))){
var inst_47663 = (state_47686[(7)]);
var inst_47666 = cljs.core.first(inst_47663);
var state_47686__$1 = state_47686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47686__$1,(7),ch,inst_47666);
} else {
if((state_val_47687 === (13))){
var inst_47680 = (state_47686[(2)]);
var state_47686__$1 = state_47686;
var statearr_47694_49681 = state_47686__$1;
(statearr_47694_49681[(2)] = inst_47680);

(statearr_47694_49681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (6))){
var inst_47671 = (state_47686[(2)]);
var state_47686__$1 = state_47686;
if(cljs.core.truth_(inst_47671)){
var statearr_47695_49682 = state_47686__$1;
(statearr_47695_49682[(1)] = (8));

} else {
var statearr_47698_49683 = state_47686__$1;
(statearr_47698_49683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (3))){
var inst_47684 = (state_47686[(2)]);
var state_47686__$1 = state_47686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47686__$1,inst_47684);
} else {
if((state_val_47687 === (12))){
var state_47686__$1 = state_47686;
var statearr_47702_49686 = state_47686__$1;
(statearr_47702_49686[(2)] = null);

(statearr_47702_49686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (2))){
var inst_47663 = (state_47686[(7)]);
var state_47686__$1 = state_47686;
if(cljs.core.truth_(inst_47663)){
var statearr_47703_49690 = state_47686__$1;
(statearr_47703_49690[(1)] = (4));

} else {
var statearr_47704_49691 = state_47686__$1;
(statearr_47704_49691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (11))){
var inst_47677 = cljs.core.async.close_BANG_(ch);
var state_47686__$1 = state_47686;
var statearr_47705_49693 = state_47686__$1;
(statearr_47705_49693[(2)] = inst_47677);

(statearr_47705_49693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (9))){
var state_47686__$1 = state_47686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47706_49694 = state_47686__$1;
(statearr_47706_49694[(1)] = (11));

} else {
var statearr_47708_49697 = state_47686__$1;
(statearr_47708_49697[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (5))){
var inst_47663 = (state_47686[(7)]);
var state_47686__$1 = state_47686;
var statearr_47709_49698 = state_47686__$1;
(statearr_47709_49698[(2)] = inst_47663);

(statearr_47709_49698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (10))){
var inst_47682 = (state_47686[(2)]);
var state_47686__$1 = state_47686;
var statearr_47712_49701 = state_47686__$1;
(statearr_47712_49701[(2)] = inst_47682);

(statearr_47712_49701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47687 === (8))){
var inst_47663 = (state_47686[(7)]);
var inst_47673 = cljs.core.next(inst_47663);
var inst_47663__$1 = inst_47673;
var state_47686__$1 = (function (){var statearr_47713 = state_47686;
(statearr_47713[(7)] = inst_47663__$1);

return statearr_47713;
})();
var statearr_47714_49702 = state_47686__$1;
(statearr_47714_49702[(2)] = null);

(statearr_47714_49702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_47715 = [null,null,null,null,null,null,null,null];
(statearr_47715[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_47715[(1)] = (1));

return statearr_47715;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_47686){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47686);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e47716){var ex__46320__auto__ = e47716;
var statearr_47717_49707 = state_47686;
(statearr_47717_49707[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47686[(4)]))){
var statearr_47718_49708 = state_47686;
(statearr_47718_49708[(1)] = cljs.core.first((state_47686[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49713 = state_47686;
state_47686 = G__49713;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_47686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_47686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_47719 = f__46463__auto__();
(statearr_47719[(6)] = c__46462__auto__);

return statearr_47719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));

return c__46462__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47722 = arguments.length;
switch (G__47722) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49723 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49723(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49724 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49724(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49732 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49732(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49739 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49739(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47772 = (function (ch,cs,meta47773){
this.ch = ch;
this.cs = cs;
this.meta47773 = meta47773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47774,meta47773__$1){
var self__ = this;
var _47774__$1 = this;
return (new cljs.core.async.t_cljs$core$async47772(self__.ch,self__.cs,meta47773__$1));
}));

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47774){
var self__ = this;
var _47774__$1 = this;
return self__.meta47773;
}));

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47772.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47773","meta47773",-133636832,null)], null);
}));

(cljs.core.async.t_cljs$core$async47772.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47772");

(cljs.core.async.t_cljs$core$async47772.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47772");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47772.
 */
cljs.core.async.__GT_t_cljs$core$async47772 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47772(ch__$1,cs__$1,meta47773){
return (new cljs.core.async.t_cljs$core$async47772(ch__$1,cs__$1,meta47773));
});

}

return (new cljs.core.async.t_cljs$core$async47772(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46462__auto___49744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_47923){
var state_val_47924 = (state_47923[(1)]);
if((state_val_47924 === (7))){
var inst_47919 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47933_49750 = state_47923__$1;
(statearr_47933_49750[(2)] = inst_47919);

(statearr_47933_49750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (20))){
var inst_47821 = (state_47923[(7)]);
var inst_47833 = cljs.core.first(inst_47821);
var inst_47834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47833,(0),null);
var inst_47835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47833,(1),null);
var state_47923__$1 = (function (){var statearr_47942 = state_47923;
(statearr_47942[(8)] = inst_47834);

return statearr_47942;
})();
if(cljs.core.truth_(inst_47835)){
var statearr_47943_49754 = state_47923__$1;
(statearr_47943_49754[(1)] = (22));

} else {
var statearr_47944_49755 = state_47923__$1;
(statearr_47944_49755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (27))){
var inst_47873 = (state_47923[(9)]);
var inst_47866 = (state_47923[(10)]);
var inst_47788 = (state_47923[(11)]);
var inst_47868 = (state_47923[(12)]);
var inst_47873__$1 = cljs.core._nth(inst_47866,inst_47868);
var inst_47874 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47873__$1,inst_47788,done);
var state_47923__$1 = (function (){var statearr_47949 = state_47923;
(statearr_47949[(9)] = inst_47873__$1);

return statearr_47949;
})();
if(cljs.core.truth_(inst_47874)){
var statearr_47950_49760 = state_47923__$1;
(statearr_47950_49760[(1)] = (30));

} else {
var statearr_47951_49762 = state_47923__$1;
(statearr_47951_49762[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (1))){
var state_47923__$1 = state_47923;
var statearr_47953_49765 = state_47923__$1;
(statearr_47953_49765[(2)] = null);

(statearr_47953_49765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (24))){
var inst_47821 = (state_47923[(7)]);
var inst_47840 = (state_47923[(2)]);
var inst_47841 = cljs.core.next(inst_47821);
var inst_47797 = inst_47841;
var inst_47798 = null;
var inst_47799 = (0);
var inst_47800 = (0);
var state_47923__$1 = (function (){var statearr_47955 = state_47923;
(statearr_47955[(13)] = inst_47800);

(statearr_47955[(14)] = inst_47840);

(statearr_47955[(15)] = inst_47799);

(statearr_47955[(16)] = inst_47798);

(statearr_47955[(17)] = inst_47797);

return statearr_47955;
})();
var statearr_47956_49784 = state_47923__$1;
(statearr_47956_49784[(2)] = null);

(statearr_47956_49784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (39))){
var state_47923__$1 = state_47923;
var statearr_47960_49790 = state_47923__$1;
(statearr_47960_49790[(2)] = null);

(statearr_47960_49790[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (4))){
var inst_47788 = (state_47923[(11)]);
var inst_47788__$1 = (state_47923[(2)]);
var inst_47789 = (inst_47788__$1 == null);
var state_47923__$1 = (function (){var statearr_47961 = state_47923;
(statearr_47961[(11)] = inst_47788__$1);

return statearr_47961;
})();
if(cljs.core.truth_(inst_47789)){
var statearr_47962_49807 = state_47923__$1;
(statearr_47962_49807[(1)] = (5));

} else {
var statearr_47963_49812 = state_47923__$1;
(statearr_47963_49812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (15))){
var inst_47800 = (state_47923[(13)]);
var inst_47799 = (state_47923[(15)]);
var inst_47798 = (state_47923[(16)]);
var inst_47797 = (state_47923[(17)]);
var inst_47815 = (state_47923[(2)]);
var inst_47816 = (inst_47800 + (1));
var tmp47957 = inst_47799;
var tmp47958 = inst_47798;
var tmp47959 = inst_47797;
var inst_47797__$1 = tmp47959;
var inst_47798__$1 = tmp47958;
var inst_47799__$1 = tmp47957;
var inst_47800__$1 = inst_47816;
var state_47923__$1 = (function (){var statearr_47965 = state_47923;
(statearr_47965[(13)] = inst_47800__$1);

(statearr_47965[(15)] = inst_47799__$1);

(statearr_47965[(16)] = inst_47798__$1);

(statearr_47965[(18)] = inst_47815);

(statearr_47965[(17)] = inst_47797__$1);

return statearr_47965;
})();
var statearr_47966_49820 = state_47923__$1;
(statearr_47966_49820[(2)] = null);

(statearr_47966_49820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (21))){
var inst_47844 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47970_49822 = state_47923__$1;
(statearr_47970_49822[(2)] = inst_47844);

(statearr_47970_49822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (31))){
var inst_47873 = (state_47923[(9)]);
var inst_47877 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47873);
var state_47923__$1 = state_47923;
var statearr_47971_49826 = state_47923__$1;
(statearr_47971_49826[(2)] = inst_47877);

(statearr_47971_49826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (32))){
var inst_47866 = (state_47923[(10)]);
var inst_47867 = (state_47923[(19)]);
var inst_47865 = (state_47923[(20)]);
var inst_47868 = (state_47923[(12)]);
var inst_47879 = (state_47923[(2)]);
var inst_47880 = (inst_47868 + (1));
var tmp47967 = inst_47866;
var tmp47968 = inst_47867;
var tmp47969 = inst_47865;
var inst_47865__$1 = tmp47969;
var inst_47866__$1 = tmp47967;
var inst_47867__$1 = tmp47968;
var inst_47868__$1 = inst_47880;
var state_47923__$1 = (function (){var statearr_47976 = state_47923;
(statearr_47976[(10)] = inst_47866__$1);

(statearr_47976[(21)] = inst_47879);

(statearr_47976[(19)] = inst_47867__$1);

(statearr_47976[(20)] = inst_47865__$1);

(statearr_47976[(12)] = inst_47868__$1);

return statearr_47976;
})();
var statearr_47977_49827 = state_47923__$1;
(statearr_47977_49827[(2)] = null);

(statearr_47977_49827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (40))){
var inst_47892 = (state_47923[(22)]);
var inst_47896 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47892);
var state_47923__$1 = state_47923;
var statearr_47978_49828 = state_47923__$1;
(statearr_47978_49828[(2)] = inst_47896);

(statearr_47978_49828[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (33))){
var inst_47883 = (state_47923[(23)]);
var inst_47885 = cljs.core.chunked_seq_QMARK_(inst_47883);
var state_47923__$1 = state_47923;
if(inst_47885){
var statearr_47979_49829 = state_47923__$1;
(statearr_47979_49829[(1)] = (36));

} else {
var statearr_47980_49830 = state_47923__$1;
(statearr_47980_49830[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (13))){
var inst_47809 = (state_47923[(24)]);
var inst_47812 = cljs.core.async.close_BANG_(inst_47809);
var state_47923__$1 = state_47923;
var statearr_47981_49831 = state_47923__$1;
(statearr_47981_49831[(2)] = inst_47812);

(statearr_47981_49831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (22))){
var inst_47834 = (state_47923[(8)]);
var inst_47837 = cljs.core.async.close_BANG_(inst_47834);
var state_47923__$1 = state_47923;
var statearr_47982_49836 = state_47923__$1;
(statearr_47982_49836[(2)] = inst_47837);

(statearr_47982_49836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (36))){
var inst_47883 = (state_47923[(23)]);
var inst_47887 = cljs.core.chunk_first(inst_47883);
var inst_47888 = cljs.core.chunk_rest(inst_47883);
var inst_47889 = cljs.core.count(inst_47887);
var inst_47865 = inst_47888;
var inst_47866 = inst_47887;
var inst_47867 = inst_47889;
var inst_47868 = (0);
var state_47923__$1 = (function (){var statearr_47985 = state_47923;
(statearr_47985[(10)] = inst_47866);

(statearr_47985[(19)] = inst_47867);

(statearr_47985[(20)] = inst_47865);

(statearr_47985[(12)] = inst_47868);

return statearr_47985;
})();
var statearr_47986_49837 = state_47923__$1;
(statearr_47986_49837[(2)] = null);

(statearr_47986_49837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (41))){
var inst_47883 = (state_47923[(23)]);
var inst_47898 = (state_47923[(2)]);
var inst_47899 = cljs.core.next(inst_47883);
var inst_47865 = inst_47899;
var inst_47866 = null;
var inst_47867 = (0);
var inst_47868 = (0);
var state_47923__$1 = (function (){var statearr_47988 = state_47923;
(statearr_47988[(10)] = inst_47866);

(statearr_47988[(19)] = inst_47867);

(statearr_47988[(25)] = inst_47898);

(statearr_47988[(20)] = inst_47865);

(statearr_47988[(12)] = inst_47868);

return statearr_47988;
})();
var statearr_47989_49841 = state_47923__$1;
(statearr_47989_49841[(2)] = null);

(statearr_47989_49841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (43))){
var state_47923__$1 = state_47923;
var statearr_47990_49845 = state_47923__$1;
(statearr_47990_49845[(2)] = null);

(statearr_47990_49845[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (29))){
var inst_47907 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47991_49847 = state_47923__$1;
(statearr_47991_49847[(2)] = inst_47907);

(statearr_47991_49847[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (44))){
var inst_47916 = (state_47923[(2)]);
var state_47923__$1 = (function (){var statearr_47993 = state_47923;
(statearr_47993[(26)] = inst_47916);

return statearr_47993;
})();
var statearr_47997_49849 = state_47923__$1;
(statearr_47997_49849[(2)] = null);

(statearr_47997_49849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (6))){
var inst_47857 = (state_47923[(27)]);
var inst_47854 = cljs.core.deref(cs);
var inst_47857__$1 = cljs.core.keys(inst_47854);
var inst_47858 = cljs.core.count(inst_47857__$1);
var inst_47859 = cljs.core.reset_BANG_(dctr,inst_47858);
var inst_47864 = cljs.core.seq(inst_47857__$1);
var inst_47865 = inst_47864;
var inst_47866 = null;
var inst_47867 = (0);
var inst_47868 = (0);
var state_47923__$1 = (function (){var statearr_48003 = state_47923;
(statearr_48003[(10)] = inst_47866);

(statearr_48003[(19)] = inst_47867);

(statearr_48003[(28)] = inst_47859);

(statearr_48003[(27)] = inst_47857__$1);

(statearr_48003[(20)] = inst_47865);

(statearr_48003[(12)] = inst_47868);

return statearr_48003;
})();
var statearr_48006_49851 = state_47923__$1;
(statearr_48006_49851[(2)] = null);

(statearr_48006_49851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (28))){
var inst_47883 = (state_47923[(23)]);
var inst_47865 = (state_47923[(20)]);
var inst_47883__$1 = cljs.core.seq(inst_47865);
var state_47923__$1 = (function (){var statearr_48011 = state_47923;
(statearr_48011[(23)] = inst_47883__$1);

return statearr_48011;
})();
if(inst_47883__$1){
var statearr_48013_49853 = state_47923__$1;
(statearr_48013_49853[(1)] = (33));

} else {
var statearr_48014_49855 = state_47923__$1;
(statearr_48014_49855[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (25))){
var inst_47867 = (state_47923[(19)]);
var inst_47868 = (state_47923[(12)]);
var inst_47870 = (inst_47868 < inst_47867);
var inst_47871 = inst_47870;
var state_47923__$1 = state_47923;
if(cljs.core.truth_(inst_47871)){
var statearr_48016_49859 = state_47923__$1;
(statearr_48016_49859[(1)] = (27));

} else {
var statearr_48021_49860 = state_47923__$1;
(statearr_48021_49860[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (34))){
var state_47923__$1 = state_47923;
var statearr_48022_49861 = state_47923__$1;
(statearr_48022_49861[(2)] = null);

(statearr_48022_49861[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (17))){
var state_47923__$1 = state_47923;
var statearr_48023_49862 = state_47923__$1;
(statearr_48023_49862[(2)] = null);

(statearr_48023_49862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (3))){
var inst_47921 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47923__$1,inst_47921);
} else {
if((state_val_47924 === (12))){
var inst_47849 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_48029_49863 = state_47923__$1;
(statearr_48029_49863[(2)] = inst_47849);

(statearr_48029_49863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (2))){
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47923__$1,(4),ch);
} else {
if((state_val_47924 === (23))){
var state_47923__$1 = state_47923;
var statearr_48032_49866 = state_47923__$1;
(statearr_48032_49866[(2)] = null);

(statearr_48032_49866[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (35))){
var inst_47905 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_48033_49868 = state_47923__$1;
(statearr_48033_49868[(2)] = inst_47905);

(statearr_48033_49868[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (19))){
var inst_47821 = (state_47923[(7)]);
var inst_47825 = cljs.core.chunk_first(inst_47821);
var inst_47826 = cljs.core.chunk_rest(inst_47821);
var inst_47827 = cljs.core.count(inst_47825);
var inst_47797 = inst_47826;
var inst_47798 = inst_47825;
var inst_47799 = inst_47827;
var inst_47800 = (0);
var state_47923__$1 = (function (){var statearr_48038 = state_47923;
(statearr_48038[(13)] = inst_47800);

(statearr_48038[(15)] = inst_47799);

(statearr_48038[(16)] = inst_47798);

(statearr_48038[(17)] = inst_47797);

return statearr_48038;
})();
var statearr_48039_49869 = state_47923__$1;
(statearr_48039_49869[(2)] = null);

(statearr_48039_49869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (11))){
var inst_47821 = (state_47923[(7)]);
var inst_47797 = (state_47923[(17)]);
var inst_47821__$1 = cljs.core.seq(inst_47797);
var state_47923__$1 = (function (){var statearr_48040 = state_47923;
(statearr_48040[(7)] = inst_47821__$1);

return statearr_48040;
})();
if(inst_47821__$1){
var statearr_48041_49871 = state_47923__$1;
(statearr_48041_49871[(1)] = (16));

} else {
var statearr_48042_49872 = state_47923__$1;
(statearr_48042_49872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (9))){
var inst_47851 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_48043_49873 = state_47923__$1;
(statearr_48043_49873[(2)] = inst_47851);

(statearr_48043_49873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (5))){
var inst_47795 = cljs.core.deref(cs);
var inst_47796 = cljs.core.seq(inst_47795);
var inst_47797 = inst_47796;
var inst_47798 = null;
var inst_47799 = (0);
var inst_47800 = (0);
var state_47923__$1 = (function (){var statearr_48045 = state_47923;
(statearr_48045[(13)] = inst_47800);

(statearr_48045[(15)] = inst_47799);

(statearr_48045[(16)] = inst_47798);

(statearr_48045[(17)] = inst_47797);

return statearr_48045;
})();
var statearr_48047_49876 = state_47923__$1;
(statearr_48047_49876[(2)] = null);

(statearr_48047_49876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (14))){
var state_47923__$1 = state_47923;
var statearr_48048_49879 = state_47923__$1;
(statearr_48048_49879[(2)] = null);

(statearr_48048_49879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (45))){
var inst_47913 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_48049_49880 = state_47923__$1;
(statearr_48049_49880[(2)] = inst_47913);

(statearr_48049_49880[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (26))){
var inst_47857 = (state_47923[(27)]);
var inst_47909 = (state_47923[(2)]);
var inst_47910 = cljs.core.seq(inst_47857);
var state_47923__$1 = (function (){var statearr_48050 = state_47923;
(statearr_48050[(29)] = inst_47909);

return statearr_48050;
})();
if(inst_47910){
var statearr_48051_49882 = state_47923__$1;
(statearr_48051_49882[(1)] = (42));

} else {
var statearr_48052_49883 = state_47923__$1;
(statearr_48052_49883[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (16))){
var inst_47821 = (state_47923[(7)]);
var inst_47823 = cljs.core.chunked_seq_QMARK_(inst_47821);
var state_47923__$1 = state_47923;
if(inst_47823){
var statearr_48055_49885 = state_47923__$1;
(statearr_48055_49885[(1)] = (19));

} else {
var statearr_48056_49888 = state_47923__$1;
(statearr_48056_49888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (38))){
var inst_47902 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_48057_49889 = state_47923__$1;
(statearr_48057_49889[(2)] = inst_47902);

(statearr_48057_49889[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (30))){
var state_47923__$1 = state_47923;
var statearr_48058_49890 = state_47923__$1;
(statearr_48058_49890[(2)] = null);

(statearr_48058_49890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (10))){
var inst_47800 = (state_47923[(13)]);
var inst_47798 = (state_47923[(16)]);
var inst_47808 = cljs.core._nth(inst_47798,inst_47800);
var inst_47809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47808,(0),null);
var inst_47810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47808,(1),null);
var state_47923__$1 = (function (){var statearr_48060 = state_47923;
(statearr_48060[(24)] = inst_47809);

return statearr_48060;
})();
if(cljs.core.truth_(inst_47810)){
var statearr_48061_49894 = state_47923__$1;
(statearr_48061_49894[(1)] = (13));

} else {
var statearr_48062_49895 = state_47923__$1;
(statearr_48062_49895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (18))){
var inst_47847 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_48063_49896 = state_47923__$1;
(statearr_48063_49896[(2)] = inst_47847);

(statearr_48063_49896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (42))){
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47923__$1,(45),dchan);
} else {
if((state_val_47924 === (37))){
var inst_47892 = (state_47923[(22)]);
var inst_47883 = (state_47923[(23)]);
var inst_47788 = (state_47923[(11)]);
var inst_47892__$1 = cljs.core.first(inst_47883);
var inst_47893 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47892__$1,inst_47788,done);
var state_47923__$1 = (function (){var statearr_48064 = state_47923;
(statearr_48064[(22)] = inst_47892__$1);

return statearr_48064;
})();
if(cljs.core.truth_(inst_47893)){
var statearr_48066_49898 = state_47923__$1;
(statearr_48066_49898[(1)] = (39));

} else {
var statearr_48067_49899 = state_47923__$1;
(statearr_48067_49899[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (8))){
var inst_47800 = (state_47923[(13)]);
var inst_47799 = (state_47923[(15)]);
var inst_47802 = (inst_47800 < inst_47799);
var inst_47803 = inst_47802;
var state_47923__$1 = state_47923;
if(cljs.core.truth_(inst_47803)){
var statearr_48068_49900 = state_47923__$1;
(statearr_48068_49900[(1)] = (10));

} else {
var statearr_48069_49901 = state_47923__$1;
(statearr_48069_49901[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46317__auto__ = null;
var cljs$core$async$mult_$_state_machine__46317__auto____0 = (function (){
var statearr_48072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48072[(0)] = cljs$core$async$mult_$_state_machine__46317__auto__);

(statearr_48072[(1)] = (1));

return statearr_48072;
});
var cljs$core$async$mult_$_state_machine__46317__auto____1 = (function (state_47923){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_47923);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48073){var ex__46320__auto__ = e48073;
var statearr_48074_49903 = state_47923;
(statearr_48074_49903[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_47923[(4)]))){
var statearr_48075_49906 = state_47923;
(statearr_48075_49906[(1)] = cljs.core.first((state_47923[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49907 = state_47923;
state_47923 = G__49907;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46317__auto__ = function(state_47923){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46317__auto____1.call(this,state_47923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46317__auto____0;
cljs$core$async$mult_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46317__auto____1;
return cljs$core$async$mult_$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48076 = f__46463__auto__();
(statearr_48076[(6)] = c__46462__auto___49744);

return statearr_48076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48078 = arguments.length;
switch (G__48078) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49918 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49918(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49922 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49922(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49926 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49926(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49928 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49928(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49933 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49933(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49935 = arguments.length;
var i__4737__auto___49936 = (0);
while(true){
if((i__4737__auto___49936 < len__4736__auto___49935)){
args__4742__auto__.push((arguments[i__4737__auto___49936]));

var G__49937 = (i__4737__auto___49936 + (1));
i__4737__auto___49936 = G__49937;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48105){
var map__48106 = p__48105;
var map__48106__$1 = (((((!((map__48106 == null))))?(((((map__48106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48106):map__48106);
var opts = map__48106__$1;
var statearr_48108_49943 = state;
(statearr_48108_49943[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48109_49945 = state;
(statearr_48109_49945[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48110_49947 = state;
(statearr_48110_49947[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48095){
var G__48096 = cljs.core.first(seq48095);
var seq48095__$1 = cljs.core.next(seq48095);
var G__48097 = cljs.core.first(seq48095__$1);
var seq48095__$2 = cljs.core.next(seq48095__$1);
var G__48098 = cljs.core.first(seq48095__$2);
var seq48095__$3 = cljs.core.next(seq48095__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48096,G__48097,G__48098,seq48095__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48111 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48112){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48112 = meta48112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48113,meta48112__$1){
var self__ = this;
var _48113__$1 = this;
return (new cljs.core.async.t_cljs$core$async48111(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48112__$1));
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48113){
var self__ = this;
var _48113__$1 = this;
return self__.meta48112;
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48111.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48112","meta48112",1649285925,null)], null);
}));

(cljs.core.async.t_cljs$core$async48111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48111");

(cljs.core.async.t_cljs$core$async48111.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48111.
 */
cljs.core.async.__GT_t_cljs$core$async48111 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48111(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48112){
return (new cljs.core.async.t_cljs$core$async48111(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48112));
});

}

return (new cljs.core.async.t_cljs$core$async48111(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46462__auto___49973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_48226){
var state_val_48227 = (state_48226[(1)]);
if((state_val_48227 === (7))){
var inst_48136 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48228_49979 = state_48226__$1;
(statearr_48228_49979[(2)] = inst_48136);

(statearr_48228_49979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (20))){
var inst_48148 = (state_48226[(7)]);
var state_48226__$1 = state_48226;
var statearr_48229_49980 = state_48226__$1;
(statearr_48229_49980[(2)] = inst_48148);

(statearr_48229_49980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (27))){
var state_48226__$1 = state_48226;
var statearr_48230_49981 = state_48226__$1;
(statearr_48230_49981[(2)] = null);

(statearr_48230_49981[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (1))){
var inst_48123 = (state_48226[(8)]);
var inst_48123__$1 = calc_state();
var inst_48125 = (inst_48123__$1 == null);
var inst_48126 = cljs.core.not(inst_48125);
var state_48226__$1 = (function (){var statearr_48231 = state_48226;
(statearr_48231[(8)] = inst_48123__$1);

return statearr_48231;
})();
if(inst_48126){
var statearr_48232_49983 = state_48226__$1;
(statearr_48232_49983[(1)] = (2));

} else {
var statearr_48233_49984 = state_48226__$1;
(statearr_48233_49984[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (24))){
var inst_48186 = (state_48226[(9)]);
var inst_48176 = (state_48226[(10)]);
var inst_48200 = (state_48226[(11)]);
var inst_48200__$1 = (inst_48176.cljs$core$IFn$_invoke$arity$1 ? inst_48176.cljs$core$IFn$_invoke$arity$1(inst_48186) : inst_48176.call(null,inst_48186));
var state_48226__$1 = (function (){var statearr_48235 = state_48226;
(statearr_48235[(11)] = inst_48200__$1);

return statearr_48235;
})();
if(cljs.core.truth_(inst_48200__$1)){
var statearr_48236_49985 = state_48226__$1;
(statearr_48236_49985[(1)] = (29));

} else {
var statearr_48237_49986 = state_48226__$1;
(statearr_48237_49986[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (4))){
var inst_48139 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48139)){
var statearr_48238_49987 = state_48226__$1;
(statearr_48238_49987[(1)] = (8));

} else {
var statearr_48239_49988 = state_48226__$1;
(statearr_48239_49988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (15))){
var inst_48170 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48170)){
var statearr_48240_49990 = state_48226__$1;
(statearr_48240_49990[(1)] = (19));

} else {
var statearr_48241_49991 = state_48226__$1;
(statearr_48241_49991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (21))){
var inst_48175 = (state_48226[(12)]);
var inst_48175__$1 = (state_48226[(2)]);
var inst_48176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48175__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48175__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48175__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48226__$1 = (function (){var statearr_48242 = state_48226;
(statearr_48242[(10)] = inst_48176);

(statearr_48242[(12)] = inst_48175__$1);

(statearr_48242[(13)] = inst_48177);

return statearr_48242;
})();
return cljs.core.async.ioc_alts_BANG_(state_48226__$1,(22),inst_48178);
} else {
if((state_val_48227 === (31))){
var inst_48208 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48208)){
var statearr_48243_49994 = state_48226__$1;
(statearr_48243_49994[(1)] = (32));

} else {
var statearr_48244_49995 = state_48226__$1;
(statearr_48244_49995[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (32))){
var inst_48185 = (state_48226[(14)]);
var state_48226__$1 = state_48226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48226__$1,(35),out,inst_48185);
} else {
if((state_val_48227 === (33))){
var inst_48175 = (state_48226[(12)]);
var inst_48148 = inst_48175;
var state_48226__$1 = (function (){var statearr_48245 = state_48226;
(statearr_48245[(7)] = inst_48148);

return statearr_48245;
})();
var statearr_48246_49996 = state_48226__$1;
(statearr_48246_49996[(2)] = null);

(statearr_48246_49996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (13))){
var inst_48148 = (state_48226[(7)]);
var inst_48157 = inst_48148.cljs$lang$protocol_mask$partition0$;
var inst_48158 = (inst_48157 & (64));
var inst_48161 = inst_48148.cljs$core$ISeq$;
var inst_48162 = (cljs.core.PROTOCOL_SENTINEL === inst_48161);
var inst_48163 = ((inst_48158) || (inst_48162));
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48163)){
var statearr_48247_49997 = state_48226__$1;
(statearr_48247_49997[(1)] = (16));

} else {
var statearr_48248_49998 = state_48226__$1;
(statearr_48248_49998[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (22))){
var inst_48185 = (state_48226[(14)]);
var inst_48186 = (state_48226[(9)]);
var inst_48184 = (state_48226[(2)]);
var inst_48185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48184,(0),null);
var inst_48186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48184,(1),null);
var inst_48187 = (inst_48185__$1 == null);
var inst_48188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48186__$1,change);
var inst_48189 = ((inst_48187) || (inst_48188));
var state_48226__$1 = (function (){var statearr_48249 = state_48226;
(statearr_48249[(14)] = inst_48185__$1);

(statearr_48249[(9)] = inst_48186__$1);

return statearr_48249;
})();
if(cljs.core.truth_(inst_48189)){
var statearr_48250_49999 = state_48226__$1;
(statearr_48250_49999[(1)] = (23));

} else {
var statearr_48251_50000 = state_48226__$1;
(statearr_48251_50000[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (36))){
var inst_48175 = (state_48226[(12)]);
var inst_48148 = inst_48175;
var state_48226__$1 = (function (){var statearr_48252 = state_48226;
(statearr_48252[(7)] = inst_48148);

return statearr_48252;
})();
var statearr_48253_50001 = state_48226__$1;
(statearr_48253_50001[(2)] = null);

(statearr_48253_50001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (29))){
var inst_48200 = (state_48226[(11)]);
var state_48226__$1 = state_48226;
var statearr_48254_50002 = state_48226__$1;
(statearr_48254_50002[(2)] = inst_48200);

(statearr_48254_50002[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (6))){
var state_48226__$1 = state_48226;
var statearr_48255_50003 = state_48226__$1;
(statearr_48255_50003[(2)] = false);

(statearr_48255_50003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (28))){
var inst_48196 = (state_48226[(2)]);
var inst_48197 = calc_state();
var inst_48148 = inst_48197;
var state_48226__$1 = (function (){var statearr_48256 = state_48226;
(statearr_48256[(7)] = inst_48148);

(statearr_48256[(15)] = inst_48196);

return statearr_48256;
})();
var statearr_48257_50004 = state_48226__$1;
(statearr_48257_50004[(2)] = null);

(statearr_48257_50004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (25))){
var inst_48222 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48258_50005 = state_48226__$1;
(statearr_48258_50005[(2)] = inst_48222);

(statearr_48258_50005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (34))){
var inst_48220 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48259_50006 = state_48226__$1;
(statearr_48259_50006[(2)] = inst_48220);

(statearr_48259_50006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (17))){
var state_48226__$1 = state_48226;
var statearr_48260_50007 = state_48226__$1;
(statearr_48260_50007[(2)] = false);

(statearr_48260_50007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (3))){
var state_48226__$1 = state_48226;
var statearr_48263_50008 = state_48226__$1;
(statearr_48263_50008[(2)] = false);

(statearr_48263_50008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (12))){
var inst_48224 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48226__$1,inst_48224);
} else {
if((state_val_48227 === (2))){
var inst_48123 = (state_48226[(8)]);
var inst_48128 = inst_48123.cljs$lang$protocol_mask$partition0$;
var inst_48129 = (inst_48128 & (64));
var inst_48130 = inst_48123.cljs$core$ISeq$;
var inst_48131 = (cljs.core.PROTOCOL_SENTINEL === inst_48130);
var inst_48132 = ((inst_48129) || (inst_48131));
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48132)){
var statearr_48265_50013 = state_48226__$1;
(statearr_48265_50013[(1)] = (5));

} else {
var statearr_48266_50014 = state_48226__$1;
(statearr_48266_50014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (23))){
var inst_48185 = (state_48226[(14)]);
var inst_48191 = (inst_48185 == null);
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48191)){
var statearr_48267_50015 = state_48226__$1;
(statearr_48267_50015[(1)] = (26));

} else {
var statearr_48268_50016 = state_48226__$1;
(statearr_48268_50016[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (35))){
var inst_48211 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
if(cljs.core.truth_(inst_48211)){
var statearr_48270_50017 = state_48226__$1;
(statearr_48270_50017[(1)] = (36));

} else {
var statearr_48271_50018 = state_48226__$1;
(statearr_48271_50018[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (19))){
var inst_48148 = (state_48226[(7)]);
var inst_48172 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48148);
var state_48226__$1 = state_48226;
var statearr_48273_50019 = state_48226__$1;
(statearr_48273_50019[(2)] = inst_48172);

(statearr_48273_50019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (11))){
var inst_48148 = (state_48226[(7)]);
var inst_48152 = (inst_48148 == null);
var inst_48153 = cljs.core.not(inst_48152);
var state_48226__$1 = state_48226;
if(inst_48153){
var statearr_48274_50020 = state_48226__$1;
(statearr_48274_50020[(1)] = (13));

} else {
var statearr_48275_50022 = state_48226__$1;
(statearr_48275_50022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (9))){
var inst_48123 = (state_48226[(8)]);
var state_48226__$1 = state_48226;
var statearr_48276_50023 = state_48226__$1;
(statearr_48276_50023[(2)] = inst_48123);

(statearr_48276_50023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (5))){
var state_48226__$1 = state_48226;
var statearr_48277_50024 = state_48226__$1;
(statearr_48277_50024[(2)] = true);

(statearr_48277_50024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (14))){
var state_48226__$1 = state_48226;
var statearr_48278_50025 = state_48226__$1;
(statearr_48278_50025[(2)] = false);

(statearr_48278_50025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (26))){
var inst_48186 = (state_48226[(9)]);
var inst_48193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48186);
var state_48226__$1 = state_48226;
var statearr_48283_50030 = state_48226__$1;
(statearr_48283_50030[(2)] = inst_48193);

(statearr_48283_50030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (16))){
var state_48226__$1 = state_48226;
var statearr_48286_50032 = state_48226__$1;
(statearr_48286_50032[(2)] = true);

(statearr_48286_50032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (38))){
var inst_48216 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48289_50033 = state_48226__$1;
(statearr_48289_50033[(2)] = inst_48216);

(statearr_48289_50033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (30))){
var inst_48186 = (state_48226[(9)]);
var inst_48176 = (state_48226[(10)]);
var inst_48177 = (state_48226[(13)]);
var inst_48203 = cljs.core.empty_QMARK_(inst_48176);
var inst_48204 = (inst_48177.cljs$core$IFn$_invoke$arity$1 ? inst_48177.cljs$core$IFn$_invoke$arity$1(inst_48186) : inst_48177.call(null,inst_48186));
var inst_48205 = cljs.core.not(inst_48204);
var inst_48206 = ((inst_48203) && (inst_48205));
var state_48226__$1 = state_48226;
var statearr_48297_50034 = state_48226__$1;
(statearr_48297_50034[(2)] = inst_48206);

(statearr_48297_50034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (10))){
var inst_48123 = (state_48226[(8)]);
var inst_48144 = (state_48226[(2)]);
var inst_48145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48144,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48144,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48144,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48148 = inst_48123;
var state_48226__$1 = (function (){var statearr_48301 = state_48226;
(statearr_48301[(7)] = inst_48148);

(statearr_48301[(16)] = inst_48147);

(statearr_48301[(17)] = inst_48145);

(statearr_48301[(18)] = inst_48146);

return statearr_48301;
})();
var statearr_48306_50036 = state_48226__$1;
(statearr_48306_50036[(2)] = null);

(statearr_48306_50036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (18))){
var inst_48167 = (state_48226[(2)]);
var state_48226__$1 = state_48226;
var statearr_48307_50037 = state_48226__$1;
(statearr_48307_50037[(2)] = inst_48167);

(statearr_48307_50037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (37))){
var state_48226__$1 = state_48226;
var statearr_48309_50038 = state_48226__$1;
(statearr_48309_50038[(2)] = null);

(statearr_48309_50038[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48227 === (8))){
var inst_48123 = (state_48226[(8)]);
var inst_48141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48123);
var state_48226__$1 = state_48226;
var statearr_48311_50039 = state_48226__$1;
(statearr_48311_50039[(2)] = inst_48141);

(statearr_48311_50039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46317__auto__ = null;
var cljs$core$async$mix_$_state_machine__46317__auto____0 = (function (){
var statearr_48322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48322[(0)] = cljs$core$async$mix_$_state_machine__46317__auto__);

(statearr_48322[(1)] = (1));

return statearr_48322;
});
var cljs$core$async$mix_$_state_machine__46317__auto____1 = (function (state_48226){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_48226);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48323){var ex__46320__auto__ = e48323;
var statearr_48324_50044 = state_48226;
(statearr_48324_50044[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_48226[(4)]))){
var statearr_48327_50045 = state_48226;
(statearr_48327_50045[(1)] = cljs.core.first((state_48226[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50046 = state_48226;
state_48226 = G__50046;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46317__auto__ = function(state_48226){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46317__auto____1.call(this,state_48226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46317__auto____0;
cljs$core$async$mix_$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46317__auto____1;
return cljs$core$async$mix_$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48329 = f__46463__auto__();
(statearr_48329[(6)] = c__46462__auto___49973);

return statearr_48329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50057 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50057(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50071 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50071(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50072 = (function() {
var G__50073 = null;
var G__50073__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50073__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50073 = function(p,v){
switch(arguments.length){
case 1:
return G__50073__1.call(this,p);
case 2:
return G__50073__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50073.cljs$core$IFn$_invoke$arity$1 = G__50073__1;
G__50073.cljs$core$IFn$_invoke$arity$2 = G__50073__2;
return G__50073;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48384 = arguments.length;
switch (G__48384) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50072(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50072(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48397 = arguments.length;
switch (G__48397) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48392_SHARP_){
if(cljs.core.truth_((p1__48392_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48392_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48392_SHARP_.call(null,topic)))){
return p1__48392_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48392_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48414 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48415){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48415 = meta48415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48416,meta48415__$1){
var self__ = this;
var _48416__$1 = this;
return (new cljs.core.async.t_cljs$core$async48414(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48415__$1));
}));

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48416){
var self__ = this;
var _48416__$1 = this;
return self__.meta48415;
}));

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48415","meta48415",1651873013,null)], null);
}));

(cljs.core.async.t_cljs$core$async48414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48414");

(cljs.core.async.t_cljs$core$async48414.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48414.
 */
cljs.core.async.__GT_t_cljs$core$async48414 = (function cljs$core$async$__GT_t_cljs$core$async48414(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48415){
return (new cljs.core.async.t_cljs$core$async48414(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48415));
});

}

return (new cljs.core.async.t_cljs$core$async48414(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46462__auto___50083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_48541){
var state_val_48542 = (state_48541[(1)]);
if((state_val_48542 === (7))){
var inst_48531 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48546_50089 = state_48541__$1;
(statearr_48546_50089[(2)] = inst_48531);

(statearr_48546_50089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (20))){
var state_48541__$1 = state_48541;
var statearr_48548_50095 = state_48541__$1;
(statearr_48548_50095[(2)] = null);

(statearr_48548_50095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (1))){
var state_48541__$1 = state_48541;
var statearr_48553_50102 = state_48541__$1;
(statearr_48553_50102[(2)] = null);

(statearr_48553_50102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (24))){
var inst_48508 = (state_48541[(7)]);
var inst_48521 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48508);
var state_48541__$1 = state_48541;
var statearr_48556_50108 = state_48541__$1;
(statearr_48556_50108[(2)] = inst_48521);

(statearr_48556_50108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (4))){
var inst_48453 = (state_48541[(8)]);
var inst_48453__$1 = (state_48541[(2)]);
var inst_48454 = (inst_48453__$1 == null);
var state_48541__$1 = (function (){var statearr_48559 = state_48541;
(statearr_48559[(8)] = inst_48453__$1);

return statearr_48559;
})();
if(cljs.core.truth_(inst_48454)){
var statearr_48561_50109 = state_48541__$1;
(statearr_48561_50109[(1)] = (5));

} else {
var statearr_48563_50110 = state_48541__$1;
(statearr_48563_50110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (15))){
var inst_48502 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48564_50111 = state_48541__$1;
(statearr_48564_50111[(2)] = inst_48502);

(statearr_48564_50111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (21))){
var inst_48526 = (state_48541[(2)]);
var state_48541__$1 = (function (){var statearr_48567 = state_48541;
(statearr_48567[(9)] = inst_48526);

return statearr_48567;
})();
var statearr_48569_50112 = state_48541__$1;
(statearr_48569_50112[(2)] = null);

(statearr_48569_50112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (13))){
var inst_48482 = (state_48541[(10)]);
var inst_48486 = cljs.core.chunked_seq_QMARK_(inst_48482);
var state_48541__$1 = state_48541;
if(inst_48486){
var statearr_48574_50113 = state_48541__$1;
(statearr_48574_50113[(1)] = (16));

} else {
var statearr_48575_50118 = state_48541__$1;
(statearr_48575_50118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (22))){
var inst_48518 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
if(cljs.core.truth_(inst_48518)){
var statearr_48579_50123 = state_48541__$1;
(statearr_48579_50123[(1)] = (23));

} else {
var statearr_48583_50124 = state_48541__$1;
(statearr_48583_50124[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (6))){
var inst_48510 = (state_48541[(11)]);
var inst_48453 = (state_48541[(8)]);
var inst_48508 = (state_48541[(7)]);
var inst_48508__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48453) : topic_fn.call(null,inst_48453));
var inst_48509 = cljs.core.deref(mults);
var inst_48510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48509,inst_48508__$1);
var state_48541__$1 = (function (){var statearr_48584 = state_48541;
(statearr_48584[(11)] = inst_48510__$1);

(statearr_48584[(7)] = inst_48508__$1);

return statearr_48584;
})();
if(cljs.core.truth_(inst_48510__$1)){
var statearr_48587_50138 = state_48541__$1;
(statearr_48587_50138[(1)] = (19));

} else {
var statearr_48588_50139 = state_48541__$1;
(statearr_48588_50139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (25))){
var inst_48523 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48593_50145 = state_48541__$1;
(statearr_48593_50145[(2)] = inst_48523);

(statearr_48593_50145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (17))){
var inst_48482 = (state_48541[(10)]);
var inst_48493 = cljs.core.first(inst_48482);
var inst_48494 = cljs.core.async.muxch_STAR_(inst_48493);
var inst_48495 = cljs.core.async.close_BANG_(inst_48494);
var inst_48496 = cljs.core.next(inst_48482);
var inst_48465 = inst_48496;
var inst_48466 = null;
var inst_48467 = (0);
var inst_48468 = (0);
var state_48541__$1 = (function (){var statearr_48595 = state_48541;
(statearr_48595[(12)] = inst_48465);

(statearr_48595[(13)] = inst_48495);

(statearr_48595[(14)] = inst_48467);

(statearr_48595[(15)] = inst_48466);

(statearr_48595[(16)] = inst_48468);

return statearr_48595;
})();
var statearr_48597_50146 = state_48541__$1;
(statearr_48597_50146[(2)] = null);

(statearr_48597_50146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (3))){
var inst_48533 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48541__$1,inst_48533);
} else {
if((state_val_48542 === (12))){
var inst_48504 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48605_50153 = state_48541__$1;
(statearr_48605_50153[(2)] = inst_48504);

(statearr_48605_50153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (2))){
var state_48541__$1 = state_48541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48541__$1,(4),ch);
} else {
if((state_val_48542 === (23))){
var state_48541__$1 = state_48541;
var statearr_48606_50160 = state_48541__$1;
(statearr_48606_50160[(2)] = null);

(statearr_48606_50160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (19))){
var inst_48510 = (state_48541[(11)]);
var inst_48453 = (state_48541[(8)]);
var inst_48516 = cljs.core.async.muxch_STAR_(inst_48510);
var state_48541__$1 = state_48541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48541__$1,(22),inst_48516,inst_48453);
} else {
if((state_val_48542 === (11))){
var inst_48465 = (state_48541[(12)]);
var inst_48482 = (state_48541[(10)]);
var inst_48482__$1 = cljs.core.seq(inst_48465);
var state_48541__$1 = (function (){var statearr_48609 = state_48541;
(statearr_48609[(10)] = inst_48482__$1);

return statearr_48609;
})();
if(inst_48482__$1){
var statearr_48610_50175 = state_48541__$1;
(statearr_48610_50175[(1)] = (13));

} else {
var statearr_48611_50176 = state_48541__$1;
(statearr_48611_50176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (9))){
var inst_48506 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48612_50177 = state_48541__$1;
(statearr_48612_50177[(2)] = inst_48506);

(statearr_48612_50177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (5))){
var inst_48460 = cljs.core.deref(mults);
var inst_48461 = cljs.core.vals(inst_48460);
var inst_48463 = cljs.core.seq(inst_48461);
var inst_48465 = inst_48463;
var inst_48466 = null;
var inst_48467 = (0);
var inst_48468 = (0);
var state_48541__$1 = (function (){var statearr_48616 = state_48541;
(statearr_48616[(12)] = inst_48465);

(statearr_48616[(14)] = inst_48467);

(statearr_48616[(15)] = inst_48466);

(statearr_48616[(16)] = inst_48468);

return statearr_48616;
})();
var statearr_48621_50178 = state_48541__$1;
(statearr_48621_50178[(2)] = null);

(statearr_48621_50178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (14))){
var state_48541__$1 = state_48541;
var statearr_48627_50179 = state_48541__$1;
(statearr_48627_50179[(2)] = null);

(statearr_48627_50179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (16))){
var inst_48482 = (state_48541[(10)]);
var inst_48488 = cljs.core.chunk_first(inst_48482);
var inst_48489 = cljs.core.chunk_rest(inst_48482);
var inst_48490 = cljs.core.count(inst_48488);
var inst_48465 = inst_48489;
var inst_48466 = inst_48488;
var inst_48467 = inst_48490;
var inst_48468 = (0);
var state_48541__$1 = (function (){var statearr_48631 = state_48541;
(statearr_48631[(12)] = inst_48465);

(statearr_48631[(14)] = inst_48467);

(statearr_48631[(15)] = inst_48466);

(statearr_48631[(16)] = inst_48468);

return statearr_48631;
})();
var statearr_48633_50180 = state_48541__$1;
(statearr_48633_50180[(2)] = null);

(statearr_48633_50180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (10))){
var inst_48465 = (state_48541[(12)]);
var inst_48467 = (state_48541[(14)]);
var inst_48466 = (state_48541[(15)]);
var inst_48468 = (state_48541[(16)]);
var inst_48475 = cljs.core._nth(inst_48466,inst_48468);
var inst_48476 = cljs.core.async.muxch_STAR_(inst_48475);
var inst_48477 = cljs.core.async.close_BANG_(inst_48476);
var inst_48478 = (inst_48468 + (1));
var tmp48624 = inst_48465;
var tmp48625 = inst_48467;
var tmp48626 = inst_48466;
var inst_48465__$1 = tmp48624;
var inst_48466__$1 = tmp48626;
var inst_48467__$1 = tmp48625;
var inst_48468__$1 = inst_48478;
var state_48541__$1 = (function (){var statearr_48636 = state_48541;
(statearr_48636[(12)] = inst_48465__$1);

(statearr_48636[(14)] = inst_48467__$1);

(statearr_48636[(17)] = inst_48477);

(statearr_48636[(15)] = inst_48466__$1);

(statearr_48636[(16)] = inst_48468__$1);

return statearr_48636;
})();
var statearr_48637_50181 = state_48541__$1;
(statearr_48637_50181[(2)] = null);

(statearr_48637_50181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (18))){
var inst_48499 = (state_48541[(2)]);
var state_48541__$1 = state_48541;
var statearr_48638_50183 = state_48541__$1;
(statearr_48638_50183[(2)] = inst_48499);

(statearr_48638_50183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48542 === (8))){
var inst_48467 = (state_48541[(14)]);
var inst_48468 = (state_48541[(16)]);
var inst_48471 = (inst_48468 < inst_48467);
var inst_48472 = inst_48471;
var state_48541__$1 = state_48541;
if(cljs.core.truth_(inst_48472)){
var statearr_48639_50184 = state_48541__$1;
(statearr_48639_50184[(1)] = (10));

} else {
var statearr_48640_50185 = state_48541__$1;
(statearr_48640_50185[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_48641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48641[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_48641[(1)] = (1));

return statearr_48641;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_48541){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_48541);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48642){var ex__46320__auto__ = e48642;
var statearr_48643_50186 = state_48541;
(statearr_48643_50186[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_48541[(4)]))){
var statearr_48644_50187 = state_48541;
(statearr_48644_50187[(1)] = cljs.core.first((state_48541[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50188 = state_48541;
state_48541 = G__50188;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_48541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_48541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48645 = f__46463__auto__();
(statearr_48645[(6)] = c__46462__auto___50083);

return statearr_48645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48647 = arguments.length;
switch (G__48647) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48651 = arguments.length;
switch (G__48651) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48661 = arguments.length;
switch (G__48661) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46462__auto___50207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_48712){
var state_val_48713 = (state_48712[(1)]);
if((state_val_48713 === (7))){
var state_48712__$1 = state_48712;
var statearr_48714_50209 = state_48712__$1;
(statearr_48714_50209[(2)] = null);

(statearr_48714_50209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (1))){
var state_48712__$1 = state_48712;
var statearr_48715_50210 = state_48712__$1;
(statearr_48715_50210[(2)] = null);

(statearr_48715_50210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (4))){
var inst_48673 = (state_48712[(7)]);
var inst_48672 = (state_48712[(8)]);
var inst_48675 = (inst_48673 < inst_48672);
var state_48712__$1 = state_48712;
if(cljs.core.truth_(inst_48675)){
var statearr_48716_50211 = state_48712__$1;
(statearr_48716_50211[(1)] = (6));

} else {
var statearr_48718_50212 = state_48712__$1;
(statearr_48718_50212[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (15))){
var inst_48698 = (state_48712[(9)]);
var inst_48703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48698);
var state_48712__$1 = state_48712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48712__$1,(17),out,inst_48703);
} else {
if((state_val_48713 === (13))){
var inst_48698 = (state_48712[(9)]);
var inst_48698__$1 = (state_48712[(2)]);
var inst_48699 = cljs.core.some(cljs.core.nil_QMARK_,inst_48698__$1);
var state_48712__$1 = (function (){var statearr_48719 = state_48712;
(statearr_48719[(9)] = inst_48698__$1);

return statearr_48719;
})();
if(cljs.core.truth_(inst_48699)){
var statearr_48720_50214 = state_48712__$1;
(statearr_48720_50214[(1)] = (14));

} else {
var statearr_48721_50215 = state_48712__$1;
(statearr_48721_50215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (6))){
var state_48712__$1 = state_48712;
var statearr_48722_50216 = state_48712__$1;
(statearr_48722_50216[(2)] = null);

(statearr_48722_50216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (17))){
var inst_48705 = (state_48712[(2)]);
var state_48712__$1 = (function (){var statearr_48724 = state_48712;
(statearr_48724[(10)] = inst_48705);

return statearr_48724;
})();
var statearr_48725_50217 = state_48712__$1;
(statearr_48725_50217[(2)] = null);

(statearr_48725_50217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (3))){
var inst_48710 = (state_48712[(2)]);
var state_48712__$1 = state_48712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48712__$1,inst_48710);
} else {
if((state_val_48713 === (12))){
var _ = (function (){var statearr_48726 = state_48712;
(statearr_48726[(4)] = cljs.core.rest((state_48712[(4)])));

return statearr_48726;
})();
var state_48712__$1 = state_48712;
var ex48723 = (state_48712__$1[(2)]);
var statearr_48727_50219 = state_48712__$1;
(statearr_48727_50219[(5)] = ex48723);


if((ex48723 instanceof Object)){
var statearr_48728_50220 = state_48712__$1;
(statearr_48728_50220[(1)] = (11));

(statearr_48728_50220[(5)] = null);

} else {
throw ex48723;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (2))){
var inst_48671 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48672 = cnt;
var inst_48673 = (0);
var state_48712__$1 = (function (){var statearr_48729 = state_48712;
(statearr_48729[(7)] = inst_48673);

(statearr_48729[(8)] = inst_48672);

(statearr_48729[(11)] = inst_48671);

return statearr_48729;
})();
var statearr_48730_50221 = state_48712__$1;
(statearr_48730_50221[(2)] = null);

(statearr_48730_50221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (11))){
var inst_48677 = (state_48712[(2)]);
var inst_48678 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48712__$1 = (function (){var statearr_48731 = state_48712;
(statearr_48731[(12)] = inst_48677);

return statearr_48731;
})();
var statearr_48732_50222 = state_48712__$1;
(statearr_48732_50222[(2)] = inst_48678);

(statearr_48732_50222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (9))){
var inst_48673 = (state_48712[(7)]);
var _ = (function (){var statearr_48733 = state_48712;
(statearr_48733[(4)] = cljs.core.cons((12),(state_48712[(4)])));

return statearr_48733;
})();
var inst_48684 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48673) : chs__$1.call(null,inst_48673));
var inst_48685 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48673) : done.call(null,inst_48673));
var inst_48686 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48684,inst_48685);
var ___$1 = (function (){var statearr_48734 = state_48712;
(statearr_48734[(4)] = cljs.core.rest((state_48712[(4)])));

return statearr_48734;
})();
var state_48712__$1 = state_48712;
var statearr_48735_50223 = state_48712__$1;
(statearr_48735_50223[(2)] = inst_48686);

(statearr_48735_50223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (5))){
var inst_48696 = (state_48712[(2)]);
var state_48712__$1 = (function (){var statearr_48736 = state_48712;
(statearr_48736[(13)] = inst_48696);

return statearr_48736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48712__$1,(13),dchan);
} else {
if((state_val_48713 === (14))){
var inst_48701 = cljs.core.async.close_BANG_(out);
var state_48712__$1 = state_48712;
var statearr_48737_50224 = state_48712__$1;
(statearr_48737_50224[(2)] = inst_48701);

(statearr_48737_50224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (16))){
var inst_48708 = (state_48712[(2)]);
var state_48712__$1 = state_48712;
var statearr_48738_50225 = state_48712__$1;
(statearr_48738_50225[(2)] = inst_48708);

(statearr_48738_50225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (10))){
var inst_48673 = (state_48712[(7)]);
var inst_48689 = (state_48712[(2)]);
var inst_48690 = (inst_48673 + (1));
var inst_48673__$1 = inst_48690;
var state_48712__$1 = (function (){var statearr_48739 = state_48712;
(statearr_48739[(14)] = inst_48689);

(statearr_48739[(7)] = inst_48673__$1);

return statearr_48739;
})();
var statearr_48740_50226 = state_48712__$1;
(statearr_48740_50226[(2)] = null);

(statearr_48740_50226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48713 === (8))){
var inst_48694 = (state_48712[(2)]);
var state_48712__$1 = state_48712;
var statearr_48741_50227 = state_48712__$1;
(statearr_48741_50227[(2)] = inst_48694);

(statearr_48741_50227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_48742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48742[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_48742[(1)] = (1));

return statearr_48742;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_48712){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_48712);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48743){var ex__46320__auto__ = e48743;
var statearr_48744_50229 = state_48712;
(statearr_48744_50229[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_48712[(4)]))){
var statearr_48745_50231 = state_48712;
(statearr_48745_50231[(1)] = cljs.core.first((state_48712[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50235 = state_48712;
state_48712 = G__50235;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_48712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_48712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48746 = f__46463__auto__();
(statearr_48746[(6)] = c__46462__auto___50207);

return statearr_48746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48749 = arguments.length;
switch (G__48749) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46462__auto___50241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_48790){
var state_val_48794 = (state_48790[(1)]);
if((state_val_48794 === (7))){
var inst_48760 = (state_48790[(7)]);
var inst_48765 = (state_48790[(8)]);
var inst_48760__$1 = (state_48790[(2)]);
var inst_48765__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48760__$1,(0),null);
var inst_48766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48760__$1,(1),null);
var inst_48767 = (inst_48765__$1 == null);
var state_48790__$1 = (function (){var statearr_48795 = state_48790;
(statearr_48795[(7)] = inst_48760__$1);

(statearr_48795[(8)] = inst_48765__$1);

(statearr_48795[(9)] = inst_48766);

return statearr_48795;
})();
if(cljs.core.truth_(inst_48767)){
var statearr_48796_50242 = state_48790__$1;
(statearr_48796_50242[(1)] = (8));

} else {
var statearr_48797_50243 = state_48790__$1;
(statearr_48797_50243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (1))){
var inst_48750 = cljs.core.vec(chs);
var inst_48751 = inst_48750;
var state_48790__$1 = (function (){var statearr_48800 = state_48790;
(statearr_48800[(10)] = inst_48751);

return statearr_48800;
})();
var statearr_48801_50246 = state_48790__$1;
(statearr_48801_50246[(2)] = null);

(statearr_48801_50246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (4))){
var inst_48751 = (state_48790[(10)]);
var state_48790__$1 = state_48790;
return cljs.core.async.ioc_alts_BANG_(state_48790__$1,(7),inst_48751);
} else {
if((state_val_48794 === (6))){
var inst_48785 = (state_48790[(2)]);
var state_48790__$1 = state_48790;
var statearr_48802_50247 = state_48790__$1;
(statearr_48802_50247[(2)] = inst_48785);

(statearr_48802_50247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (3))){
var inst_48787 = (state_48790[(2)]);
var state_48790__$1 = state_48790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48790__$1,inst_48787);
} else {
if((state_val_48794 === (2))){
var inst_48751 = (state_48790[(10)]);
var inst_48753 = cljs.core.count(inst_48751);
var inst_48754 = (inst_48753 > (0));
var state_48790__$1 = state_48790;
if(cljs.core.truth_(inst_48754)){
var statearr_48804_50248 = state_48790__$1;
(statearr_48804_50248[(1)] = (4));

} else {
var statearr_48805_50249 = state_48790__$1;
(statearr_48805_50249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (11))){
var inst_48751 = (state_48790[(10)]);
var inst_48778 = (state_48790[(2)]);
var tmp48803 = inst_48751;
var inst_48751__$1 = tmp48803;
var state_48790__$1 = (function (){var statearr_48806 = state_48790;
(statearr_48806[(11)] = inst_48778);

(statearr_48806[(10)] = inst_48751__$1);

return statearr_48806;
})();
var statearr_48807_50258 = state_48790__$1;
(statearr_48807_50258[(2)] = null);

(statearr_48807_50258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (9))){
var inst_48765 = (state_48790[(8)]);
var state_48790__$1 = state_48790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48790__$1,(11),out,inst_48765);
} else {
if((state_val_48794 === (5))){
var inst_48783 = cljs.core.async.close_BANG_(out);
var state_48790__$1 = state_48790;
var statearr_48808_50259 = state_48790__$1;
(statearr_48808_50259[(2)] = inst_48783);

(statearr_48808_50259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (10))){
var inst_48781 = (state_48790[(2)]);
var state_48790__$1 = state_48790;
var statearr_48809_50260 = state_48790__$1;
(statearr_48809_50260[(2)] = inst_48781);

(statearr_48809_50260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48794 === (8))){
var inst_48760 = (state_48790[(7)]);
var inst_48765 = (state_48790[(8)]);
var inst_48766 = (state_48790[(9)]);
var inst_48751 = (state_48790[(10)]);
var inst_48773 = (function (){var cs = inst_48751;
var vec__48756 = inst_48760;
var v = inst_48765;
var c = inst_48766;
return (function (p1__48747_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48747_SHARP_);
});
})();
var inst_48774 = cljs.core.filterv(inst_48773,inst_48751);
var inst_48751__$1 = inst_48774;
var state_48790__$1 = (function (){var statearr_48812 = state_48790;
(statearr_48812[(10)] = inst_48751__$1);

return statearr_48812;
})();
var statearr_48813_50261 = state_48790__$1;
(statearr_48813_50261[(2)] = null);

(statearr_48813_50261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_48815 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48815[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_48815[(1)] = (1));

return statearr_48815;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_48790){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_48790);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48816){var ex__46320__auto__ = e48816;
var statearr_48817_50262 = state_48790;
(statearr_48817_50262[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_48790[(4)]))){
var statearr_48818_50263 = state_48790;
(statearr_48818_50263[(1)] = cljs.core.first((state_48790[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50264 = state_48790;
state_48790 = G__50264;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_48790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_48790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48819 = f__46463__auto__();
(statearr_48819[(6)] = c__46462__auto___50241);

return statearr_48819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48829 = arguments.length;
switch (G__48829) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46462__auto___50280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_48858){
var state_val_48859 = (state_48858[(1)]);
if((state_val_48859 === (7))){
var inst_48840 = (state_48858[(7)]);
var inst_48840__$1 = (state_48858[(2)]);
var inst_48841 = (inst_48840__$1 == null);
var inst_48842 = cljs.core.not(inst_48841);
var state_48858__$1 = (function (){var statearr_48863 = state_48858;
(statearr_48863[(7)] = inst_48840__$1);

return statearr_48863;
})();
if(inst_48842){
var statearr_48864_50281 = state_48858__$1;
(statearr_48864_50281[(1)] = (8));

} else {
var statearr_48866_50282 = state_48858__$1;
(statearr_48866_50282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (1))){
var inst_48833 = (0);
var state_48858__$1 = (function (){var statearr_48869 = state_48858;
(statearr_48869[(8)] = inst_48833);

return statearr_48869;
})();
var statearr_48870_50283 = state_48858__$1;
(statearr_48870_50283[(2)] = null);

(statearr_48870_50283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (4))){
var state_48858__$1 = state_48858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48858__$1,(7),ch);
} else {
if((state_val_48859 === (6))){
var inst_48853 = (state_48858[(2)]);
var state_48858__$1 = state_48858;
var statearr_48872_50284 = state_48858__$1;
(statearr_48872_50284[(2)] = inst_48853);

(statearr_48872_50284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (3))){
var inst_48855 = (state_48858[(2)]);
var inst_48856 = cljs.core.async.close_BANG_(out);
var state_48858__$1 = (function (){var statearr_48875 = state_48858;
(statearr_48875[(9)] = inst_48855);

return statearr_48875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48858__$1,inst_48856);
} else {
if((state_val_48859 === (2))){
var inst_48833 = (state_48858[(8)]);
var inst_48835 = (inst_48833 < n);
var state_48858__$1 = state_48858;
if(cljs.core.truth_(inst_48835)){
var statearr_48877_50285 = state_48858__$1;
(statearr_48877_50285[(1)] = (4));

} else {
var statearr_48878_50309 = state_48858__$1;
(statearr_48878_50309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (11))){
var inst_48833 = (state_48858[(8)]);
var inst_48845 = (state_48858[(2)]);
var inst_48846 = (inst_48833 + (1));
var inst_48833__$1 = inst_48846;
var state_48858__$1 = (function (){var statearr_48881 = state_48858;
(statearr_48881[(8)] = inst_48833__$1);

(statearr_48881[(10)] = inst_48845);

return statearr_48881;
})();
var statearr_48882_50310 = state_48858__$1;
(statearr_48882_50310[(2)] = null);

(statearr_48882_50310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (9))){
var state_48858__$1 = state_48858;
var statearr_48885_50311 = state_48858__$1;
(statearr_48885_50311[(2)] = null);

(statearr_48885_50311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (5))){
var state_48858__$1 = state_48858;
var statearr_48887_50312 = state_48858__$1;
(statearr_48887_50312[(2)] = null);

(statearr_48887_50312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (10))){
var inst_48850 = (state_48858[(2)]);
var state_48858__$1 = state_48858;
var statearr_48888_50314 = state_48858__$1;
(statearr_48888_50314[(2)] = inst_48850);

(statearr_48888_50314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48859 === (8))){
var inst_48840 = (state_48858[(7)]);
var state_48858__$1 = state_48858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48858__$1,(11),out,inst_48840);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_48891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48891[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_48891[(1)] = (1));

return statearr_48891;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_48858){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_48858);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48893){var ex__46320__auto__ = e48893;
var statearr_48894_50318 = state_48858;
(statearr_48894_50318[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_48858[(4)]))){
var statearr_48896_50325 = state_48858;
(statearr_48896_50325[(1)] = cljs.core.first((state_48858[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50326 = state_48858;
state_48858 = G__50326;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_48858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_48858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48897 = f__46463__auto__();
(statearr_48897[(6)] = c__46462__auto___50280);

return statearr_48897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48899 = (function (f,ch,meta48900){
this.f = f;
this.ch = ch;
this.meta48900 = meta48900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48901,meta48900__$1){
var self__ = this;
var _48901__$1 = this;
return (new cljs.core.async.t_cljs$core$async48899(self__.f,self__.ch,meta48900__$1));
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48901){
var self__ = this;
var _48901__$1 = this;
return self__.meta48900;
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48903 = (function (f,ch,meta48900,_,fn1,meta48904){
this.f = f;
this.ch = ch;
this.meta48900 = meta48900;
this._ = _;
this.fn1 = fn1;
this.meta48904 = meta48904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48905,meta48904__$1){
var self__ = this;
var _48905__$1 = this;
return (new cljs.core.async.t_cljs$core$async48903(self__.f,self__.ch,self__.meta48900,self__._,self__.fn1,meta48904__$1));
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48905){
var self__ = this;
var _48905__$1 = this;
return self__.meta48904;
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48898_SHARP_){
var G__48907 = (((p1__48898_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48898_SHARP_) : self__.f.call(null,p1__48898_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48907) : f1.call(null,G__48907));
});
}));

(cljs.core.async.t_cljs$core$async48903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48900","meta48900",84274021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48899","cljs.core.async/t_cljs$core$async48899",-65483407,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48904","meta48904",-1778623885,null)], null);
}));

(cljs.core.async.t_cljs$core$async48903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48903");

(cljs.core.async.t_cljs$core$async48903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48903.
 */
cljs.core.async.__GT_t_cljs$core$async48903 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48903(f__$1,ch__$1,meta48900__$1,___$2,fn1__$1,meta48904){
return (new cljs.core.async.t_cljs$core$async48903(f__$1,ch__$1,meta48900__$1,___$2,fn1__$1,meta48904));
});

}

return (new cljs.core.async.t_cljs$core$async48903(self__.f,self__.ch,self__.meta48900,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48911 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48911) : self__.f.call(null,G__48911));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48900","meta48900",84274021,null)], null);
}));

(cljs.core.async.t_cljs$core$async48899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48899");

(cljs.core.async.t_cljs$core$async48899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48899.
 */
cljs.core.async.__GT_t_cljs$core$async48899 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48899(f__$1,ch__$1,meta48900){
return (new cljs.core.async.t_cljs$core$async48899(f__$1,ch__$1,meta48900));
});

}

return (new cljs.core.async.t_cljs$core$async48899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48915 = (function (f,ch,meta48916){
this.f = f;
this.ch = ch;
this.meta48916 = meta48916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48917,meta48916__$1){
var self__ = this;
var _48917__$1 = this;
return (new cljs.core.async.t_cljs$core$async48915(self__.f,self__.ch,meta48916__$1));
}));

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48917){
var self__ = this;
var _48917__$1 = this;
return self__.meta48916;
}));

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48916","meta48916",2008324628,null)], null);
}));

(cljs.core.async.t_cljs$core$async48915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48915");

(cljs.core.async.t_cljs$core$async48915.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48915.
 */
cljs.core.async.__GT_t_cljs$core$async48915 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48915(f__$1,ch__$1,meta48916){
return (new cljs.core.async.t_cljs$core$async48915(f__$1,ch__$1,meta48916));
});

}

return (new cljs.core.async.t_cljs$core$async48915(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48932 = (function (p,ch,meta48933){
this.p = p;
this.ch = ch;
this.meta48933 = meta48933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48934,meta48933__$1){
var self__ = this;
var _48934__$1 = this;
return (new cljs.core.async.t_cljs$core$async48932(self__.p,self__.ch,meta48933__$1));
}));

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48934){
var self__ = this;
var _48934__$1 = this;
return self__.meta48933;
}));

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48933","meta48933",222088546,null)], null);
}));

(cljs.core.async.t_cljs$core$async48932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48932");

(cljs.core.async.t_cljs$core$async48932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48932.
 */
cljs.core.async.__GT_t_cljs$core$async48932 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48932(p__$1,ch__$1,meta48933){
return (new cljs.core.async.t_cljs$core$async48932(p__$1,ch__$1,meta48933));
});

}

return (new cljs.core.async.t_cljs$core$async48932(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48937 = arguments.length;
switch (G__48937) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46462__auto___50352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_48960){
var state_val_48961 = (state_48960[(1)]);
if((state_val_48961 === (7))){
var inst_48956 = (state_48960[(2)]);
var state_48960__$1 = state_48960;
var statearr_48967_50353 = state_48960__$1;
(statearr_48967_50353[(2)] = inst_48956);

(statearr_48967_50353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (1))){
var state_48960__$1 = state_48960;
var statearr_48968_50354 = state_48960__$1;
(statearr_48968_50354[(2)] = null);

(statearr_48968_50354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (4))){
var inst_48940 = (state_48960[(7)]);
var inst_48940__$1 = (state_48960[(2)]);
var inst_48941 = (inst_48940__$1 == null);
var state_48960__$1 = (function (){var statearr_48971 = state_48960;
(statearr_48971[(7)] = inst_48940__$1);

return statearr_48971;
})();
if(cljs.core.truth_(inst_48941)){
var statearr_48973_50355 = state_48960__$1;
(statearr_48973_50355[(1)] = (5));

} else {
var statearr_48974_50356 = state_48960__$1;
(statearr_48974_50356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (6))){
var inst_48940 = (state_48960[(7)]);
var inst_48947 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48940) : p.call(null,inst_48940));
var state_48960__$1 = state_48960;
if(cljs.core.truth_(inst_48947)){
var statearr_48975_50357 = state_48960__$1;
(statearr_48975_50357[(1)] = (8));

} else {
var statearr_48976_50358 = state_48960__$1;
(statearr_48976_50358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (3))){
var inst_48958 = (state_48960[(2)]);
var state_48960__$1 = state_48960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48960__$1,inst_48958);
} else {
if((state_val_48961 === (2))){
var state_48960__$1 = state_48960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48960__$1,(4),ch);
} else {
if((state_val_48961 === (11))){
var inst_48950 = (state_48960[(2)]);
var state_48960__$1 = state_48960;
var statearr_48977_50359 = state_48960__$1;
(statearr_48977_50359[(2)] = inst_48950);

(statearr_48977_50359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (9))){
var state_48960__$1 = state_48960;
var statearr_48978_50360 = state_48960__$1;
(statearr_48978_50360[(2)] = null);

(statearr_48978_50360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (5))){
var inst_48943 = cljs.core.async.close_BANG_(out);
var state_48960__$1 = state_48960;
var statearr_48979_50363 = state_48960__$1;
(statearr_48979_50363[(2)] = inst_48943);

(statearr_48979_50363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (10))){
var inst_48953 = (state_48960[(2)]);
var state_48960__$1 = (function (){var statearr_48980 = state_48960;
(statearr_48980[(8)] = inst_48953);

return statearr_48980;
})();
var statearr_48982_50364 = state_48960__$1;
(statearr_48982_50364[(2)] = null);

(statearr_48982_50364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48961 === (8))){
var inst_48940 = (state_48960[(7)]);
var state_48960__$1 = state_48960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48960__$1,(11),out,inst_48940);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_48983 = [null,null,null,null,null,null,null,null,null];
(statearr_48983[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_48983[(1)] = (1));

return statearr_48983;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_48960){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_48960);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e48984){var ex__46320__auto__ = e48984;
var statearr_48985_50365 = state_48960;
(statearr_48985_50365[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_48960[(4)]))){
var statearr_48986_50366 = state_48960;
(statearr_48986_50366[(1)] = cljs.core.first((state_48960[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50367 = state_48960;
state_48960 = G__50367;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_48960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_48960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_48987 = f__46463__auto__();
(statearr_48987[(6)] = c__46462__auto___50352);

return statearr_48987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48989 = arguments.length;
switch (G__48989) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_49063){
var state_val_49064 = (state_49063[(1)]);
if((state_val_49064 === (7))){
var inst_49059 = (state_49063[(2)]);
var state_49063__$1 = state_49063;
var statearr_49065_50371 = state_49063__$1;
(statearr_49065_50371[(2)] = inst_49059);

(statearr_49065_50371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (20))){
var inst_49029 = (state_49063[(7)]);
var inst_49040 = (state_49063[(2)]);
var inst_49041 = cljs.core.next(inst_49029);
var inst_49015 = inst_49041;
var inst_49016 = null;
var inst_49017 = (0);
var inst_49018 = (0);
var state_49063__$1 = (function (){var statearr_49067 = state_49063;
(statearr_49067[(8)] = inst_49040);

(statearr_49067[(9)] = inst_49016);

(statearr_49067[(10)] = inst_49018);

(statearr_49067[(11)] = inst_49017);

(statearr_49067[(12)] = inst_49015);

return statearr_49067;
})();
var statearr_49068_50372 = state_49063__$1;
(statearr_49068_50372[(2)] = null);

(statearr_49068_50372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (1))){
var state_49063__$1 = state_49063;
var statearr_49069_50373 = state_49063__$1;
(statearr_49069_50373[(2)] = null);

(statearr_49069_50373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (4))){
var inst_49000 = (state_49063[(13)]);
var inst_49000__$1 = (state_49063[(2)]);
var inst_49001 = (inst_49000__$1 == null);
var state_49063__$1 = (function (){var statearr_49070 = state_49063;
(statearr_49070[(13)] = inst_49000__$1);

return statearr_49070;
})();
if(cljs.core.truth_(inst_49001)){
var statearr_49071_50374 = state_49063__$1;
(statearr_49071_50374[(1)] = (5));

} else {
var statearr_49072_50375 = state_49063__$1;
(statearr_49072_50375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (15))){
var state_49063__$1 = state_49063;
var statearr_49076_50376 = state_49063__$1;
(statearr_49076_50376[(2)] = null);

(statearr_49076_50376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (21))){
var state_49063__$1 = state_49063;
var statearr_49077_50377 = state_49063__$1;
(statearr_49077_50377[(2)] = null);

(statearr_49077_50377[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (13))){
var inst_49016 = (state_49063[(9)]);
var inst_49018 = (state_49063[(10)]);
var inst_49017 = (state_49063[(11)]);
var inst_49015 = (state_49063[(12)]);
var inst_49025 = (state_49063[(2)]);
var inst_49026 = (inst_49018 + (1));
var tmp49073 = inst_49016;
var tmp49074 = inst_49017;
var tmp49075 = inst_49015;
var inst_49015__$1 = tmp49075;
var inst_49016__$1 = tmp49073;
var inst_49017__$1 = tmp49074;
var inst_49018__$1 = inst_49026;
var state_49063__$1 = (function (){var statearr_49078 = state_49063;
(statearr_49078[(14)] = inst_49025);

(statearr_49078[(9)] = inst_49016__$1);

(statearr_49078[(10)] = inst_49018__$1);

(statearr_49078[(11)] = inst_49017__$1);

(statearr_49078[(12)] = inst_49015__$1);

return statearr_49078;
})();
var statearr_49081_50378 = state_49063__$1;
(statearr_49081_50378[(2)] = null);

(statearr_49081_50378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (22))){
var state_49063__$1 = state_49063;
var statearr_49082_50381 = state_49063__$1;
(statearr_49082_50381[(2)] = null);

(statearr_49082_50381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (6))){
var inst_49000 = (state_49063[(13)]);
var inst_49013 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49000) : f.call(null,inst_49000));
var inst_49014 = cljs.core.seq(inst_49013);
var inst_49015 = inst_49014;
var inst_49016 = null;
var inst_49017 = (0);
var inst_49018 = (0);
var state_49063__$1 = (function (){var statearr_49085 = state_49063;
(statearr_49085[(9)] = inst_49016);

(statearr_49085[(10)] = inst_49018);

(statearr_49085[(11)] = inst_49017);

(statearr_49085[(12)] = inst_49015);

return statearr_49085;
})();
var statearr_49087_50386 = state_49063__$1;
(statearr_49087_50386[(2)] = null);

(statearr_49087_50386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (17))){
var inst_49029 = (state_49063[(7)]);
var inst_49033 = cljs.core.chunk_first(inst_49029);
var inst_49034 = cljs.core.chunk_rest(inst_49029);
var inst_49035 = cljs.core.count(inst_49033);
var inst_49015 = inst_49034;
var inst_49016 = inst_49033;
var inst_49017 = inst_49035;
var inst_49018 = (0);
var state_49063__$1 = (function (){var statearr_49091 = state_49063;
(statearr_49091[(9)] = inst_49016);

(statearr_49091[(10)] = inst_49018);

(statearr_49091[(11)] = inst_49017);

(statearr_49091[(12)] = inst_49015);

return statearr_49091;
})();
var statearr_49092_50388 = state_49063__$1;
(statearr_49092_50388[(2)] = null);

(statearr_49092_50388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (3))){
var inst_49061 = (state_49063[(2)]);
var state_49063__$1 = state_49063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49063__$1,inst_49061);
} else {
if((state_val_49064 === (12))){
var inst_49049 = (state_49063[(2)]);
var state_49063__$1 = state_49063;
var statearr_49096_50390 = state_49063__$1;
(statearr_49096_50390[(2)] = inst_49049);

(statearr_49096_50390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (2))){
var state_49063__$1 = state_49063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49063__$1,(4),in$);
} else {
if((state_val_49064 === (23))){
var inst_49057 = (state_49063[(2)]);
var state_49063__$1 = state_49063;
var statearr_49097_50391 = state_49063__$1;
(statearr_49097_50391[(2)] = inst_49057);

(statearr_49097_50391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (19))){
var inst_49044 = (state_49063[(2)]);
var state_49063__$1 = state_49063;
var statearr_49100_50394 = state_49063__$1;
(statearr_49100_50394[(2)] = inst_49044);

(statearr_49100_50394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (11))){
var inst_49029 = (state_49063[(7)]);
var inst_49015 = (state_49063[(12)]);
var inst_49029__$1 = cljs.core.seq(inst_49015);
var state_49063__$1 = (function (){var statearr_49102 = state_49063;
(statearr_49102[(7)] = inst_49029__$1);

return statearr_49102;
})();
if(inst_49029__$1){
var statearr_49103_50396 = state_49063__$1;
(statearr_49103_50396[(1)] = (14));

} else {
var statearr_49104_50397 = state_49063__$1;
(statearr_49104_50397[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (9))){
var inst_49051 = (state_49063[(2)]);
var inst_49052 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49063__$1 = (function (){var statearr_49105 = state_49063;
(statearr_49105[(15)] = inst_49051);

return statearr_49105;
})();
if(cljs.core.truth_(inst_49052)){
var statearr_49107_50401 = state_49063__$1;
(statearr_49107_50401[(1)] = (21));

} else {
var statearr_49108_50403 = state_49063__$1;
(statearr_49108_50403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (5))){
var inst_49007 = cljs.core.async.close_BANG_(out);
var state_49063__$1 = state_49063;
var statearr_49109_50404 = state_49063__$1;
(statearr_49109_50404[(2)] = inst_49007);

(statearr_49109_50404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (14))){
var inst_49029 = (state_49063[(7)]);
var inst_49031 = cljs.core.chunked_seq_QMARK_(inst_49029);
var state_49063__$1 = state_49063;
if(inst_49031){
var statearr_49110_50405 = state_49063__$1;
(statearr_49110_50405[(1)] = (17));

} else {
var statearr_49111_50406 = state_49063__$1;
(statearr_49111_50406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (16))){
var inst_49047 = (state_49063[(2)]);
var state_49063__$1 = state_49063;
var statearr_49112_50407 = state_49063__$1;
(statearr_49112_50407[(2)] = inst_49047);

(statearr_49112_50407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49064 === (10))){
var inst_49016 = (state_49063[(9)]);
var inst_49018 = (state_49063[(10)]);
var inst_49023 = cljs.core._nth(inst_49016,inst_49018);
var state_49063__$1 = state_49063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49063__$1,(13),out,inst_49023);
} else {
if((state_val_49064 === (18))){
var inst_49029 = (state_49063[(7)]);
var inst_49038 = cljs.core.first(inst_49029);
var state_49063__$1 = state_49063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49063__$1,(20),out,inst_49038);
} else {
if((state_val_49064 === (8))){
var inst_49018 = (state_49063[(10)]);
var inst_49017 = (state_49063[(11)]);
var inst_49020 = (inst_49018 < inst_49017);
var inst_49021 = inst_49020;
var state_49063__$1 = state_49063;
if(cljs.core.truth_(inst_49021)){
var statearr_49115_50410 = state_49063__$1;
(statearr_49115_50410[(1)] = (10));

} else {
var statearr_49116_50411 = state_49063__$1;
(statearr_49116_50411[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46317__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46317__auto____0 = (function (){
var statearr_49117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49117[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46317__auto__);

(statearr_49117[(1)] = (1));

return statearr_49117;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46317__auto____1 = (function (state_49063){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_49063);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e49120){var ex__46320__auto__ = e49120;
var statearr_49121_50415 = state_49063;
(statearr_49121_50415[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_49063[(4)]))){
var statearr_49124_50416 = state_49063;
(statearr_49124_50416[(1)] = cljs.core.first((state_49063[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50418 = state_49063;
state_49063 = G__50418;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46317__auto__ = function(state_49063){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46317__auto____1.call(this,state_49063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_49125 = f__46463__auto__();
(statearr_49125[(6)] = c__46462__auto__);

return statearr_49125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));

return c__46462__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49133 = arguments.length;
switch (G__49133) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49136 = arguments.length;
switch (G__49136) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49142 = arguments.length;
switch (G__49142) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46462__auto___50427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_49167){
var state_val_49168 = (state_49167[(1)]);
if((state_val_49168 === (7))){
var inst_49162 = (state_49167[(2)]);
var state_49167__$1 = state_49167;
var statearr_49170_50429 = state_49167__$1;
(statearr_49170_50429[(2)] = inst_49162);

(statearr_49170_50429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (1))){
var inst_49143 = null;
var state_49167__$1 = (function (){var statearr_49171 = state_49167;
(statearr_49171[(7)] = inst_49143);

return statearr_49171;
})();
var statearr_49172_50430 = state_49167__$1;
(statearr_49172_50430[(2)] = null);

(statearr_49172_50430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (4))){
var inst_49146 = (state_49167[(8)]);
var inst_49146__$1 = (state_49167[(2)]);
var inst_49148 = (inst_49146__$1 == null);
var inst_49149 = cljs.core.not(inst_49148);
var state_49167__$1 = (function (){var statearr_49174 = state_49167;
(statearr_49174[(8)] = inst_49146__$1);

return statearr_49174;
})();
if(inst_49149){
var statearr_49176_50432 = state_49167__$1;
(statearr_49176_50432[(1)] = (5));

} else {
var statearr_49177_50433 = state_49167__$1;
(statearr_49177_50433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (6))){
var state_49167__$1 = state_49167;
var statearr_49178_50434 = state_49167__$1;
(statearr_49178_50434[(2)] = null);

(statearr_49178_50434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (3))){
var inst_49164 = (state_49167[(2)]);
var inst_49165 = cljs.core.async.close_BANG_(out);
var state_49167__$1 = (function (){var statearr_49179 = state_49167;
(statearr_49179[(9)] = inst_49164);

return statearr_49179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49167__$1,inst_49165);
} else {
if((state_val_49168 === (2))){
var state_49167__$1 = state_49167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49167__$1,(4),ch);
} else {
if((state_val_49168 === (11))){
var inst_49146 = (state_49167[(8)]);
var inst_49156 = (state_49167[(2)]);
var inst_49143 = inst_49146;
var state_49167__$1 = (function (){var statearr_49180 = state_49167;
(statearr_49180[(7)] = inst_49143);

(statearr_49180[(10)] = inst_49156);

return statearr_49180;
})();
var statearr_49182_50435 = state_49167__$1;
(statearr_49182_50435[(2)] = null);

(statearr_49182_50435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (9))){
var inst_49146 = (state_49167[(8)]);
var state_49167__$1 = state_49167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49167__$1,(11),out,inst_49146);
} else {
if((state_val_49168 === (5))){
var inst_49143 = (state_49167[(7)]);
var inst_49146 = (state_49167[(8)]);
var inst_49151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49146,inst_49143);
var state_49167__$1 = state_49167;
if(inst_49151){
var statearr_49184_50437 = state_49167__$1;
(statearr_49184_50437[(1)] = (8));

} else {
var statearr_49185_50438 = state_49167__$1;
(statearr_49185_50438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (10))){
var inst_49159 = (state_49167[(2)]);
var state_49167__$1 = state_49167;
var statearr_49186_50439 = state_49167__$1;
(statearr_49186_50439[(2)] = inst_49159);

(statearr_49186_50439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49168 === (8))){
var inst_49143 = (state_49167[(7)]);
var tmp49183 = inst_49143;
var inst_49143__$1 = tmp49183;
var state_49167__$1 = (function (){var statearr_49187 = state_49167;
(statearr_49187[(7)] = inst_49143__$1);

return statearr_49187;
})();
var statearr_49188_50440 = state_49167__$1;
(statearr_49188_50440[(2)] = null);

(statearr_49188_50440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_49190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49190[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_49190[(1)] = (1));

return statearr_49190;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_49167){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_49167);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e49191){var ex__46320__auto__ = e49191;
var statearr_49192_50443 = state_49167;
(statearr_49192_50443[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_49167[(4)]))){
var statearr_49193_50444 = state_49167;
(statearr_49193_50444[(1)] = cljs.core.first((state_49167[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50445 = state_49167;
state_49167 = G__50445;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_49167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_49167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_49194 = f__46463__auto__();
(statearr_49194[(6)] = c__46462__auto___50427);

return statearr_49194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49196 = arguments.length;
switch (G__49196) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46462__auto___50448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_49234){
var state_val_49235 = (state_49234[(1)]);
if((state_val_49235 === (7))){
var inst_49230 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49237_50453 = state_49234__$1;
(statearr_49237_50453[(2)] = inst_49230);

(statearr_49237_50453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (1))){
var inst_49197 = (new Array(n));
var inst_49198 = inst_49197;
var inst_49199 = (0);
var state_49234__$1 = (function (){var statearr_49239 = state_49234;
(statearr_49239[(7)] = inst_49199);

(statearr_49239[(8)] = inst_49198);

return statearr_49239;
})();
var statearr_49240_50463 = state_49234__$1;
(statearr_49240_50463[(2)] = null);

(statearr_49240_50463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (4))){
var inst_49202 = (state_49234[(9)]);
var inst_49202__$1 = (state_49234[(2)]);
var inst_49203 = (inst_49202__$1 == null);
var inst_49204 = cljs.core.not(inst_49203);
var state_49234__$1 = (function (){var statearr_49241 = state_49234;
(statearr_49241[(9)] = inst_49202__$1);

return statearr_49241;
})();
if(inst_49204){
var statearr_49242_50465 = state_49234__$1;
(statearr_49242_50465[(1)] = (5));

} else {
var statearr_49243_50466 = state_49234__$1;
(statearr_49243_50466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (15))){
var inst_49224 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49244_50467 = state_49234__$1;
(statearr_49244_50467[(2)] = inst_49224);

(statearr_49244_50467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (13))){
var state_49234__$1 = state_49234;
var statearr_49245_50468 = state_49234__$1;
(statearr_49245_50468[(2)] = null);

(statearr_49245_50468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (6))){
var inst_49199 = (state_49234[(7)]);
var inst_49220 = (inst_49199 > (0));
var state_49234__$1 = state_49234;
if(cljs.core.truth_(inst_49220)){
var statearr_49246_50481 = state_49234__$1;
(statearr_49246_50481[(1)] = (12));

} else {
var statearr_49247_50482 = state_49234__$1;
(statearr_49247_50482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (3))){
var inst_49232 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49234__$1,inst_49232);
} else {
if((state_val_49235 === (12))){
var inst_49198 = (state_49234[(8)]);
var inst_49222 = cljs.core.vec(inst_49198);
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49234__$1,(15),out,inst_49222);
} else {
if((state_val_49235 === (2))){
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49234__$1,(4),ch);
} else {
if((state_val_49235 === (11))){
var inst_49214 = (state_49234[(2)]);
var inst_49215 = (new Array(n));
var inst_49198 = inst_49215;
var inst_49199 = (0);
var state_49234__$1 = (function (){var statearr_49248 = state_49234;
(statearr_49248[(10)] = inst_49214);

(statearr_49248[(7)] = inst_49199);

(statearr_49248[(8)] = inst_49198);

return statearr_49248;
})();
var statearr_49249_50497 = state_49234__$1;
(statearr_49249_50497[(2)] = null);

(statearr_49249_50497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (9))){
var inst_49198 = (state_49234[(8)]);
var inst_49212 = cljs.core.vec(inst_49198);
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49234__$1,(11),out,inst_49212);
} else {
if((state_val_49235 === (5))){
var inst_49202 = (state_49234[(9)]);
var inst_49207 = (state_49234[(11)]);
var inst_49199 = (state_49234[(7)]);
var inst_49198 = (state_49234[(8)]);
var inst_49206 = (inst_49198[inst_49199] = inst_49202);
var inst_49207__$1 = (inst_49199 + (1));
var inst_49208 = (inst_49207__$1 < n);
var state_49234__$1 = (function (){var statearr_49252 = state_49234;
(statearr_49252[(12)] = inst_49206);

(statearr_49252[(11)] = inst_49207__$1);

return statearr_49252;
})();
if(cljs.core.truth_(inst_49208)){
var statearr_49253_50501 = state_49234__$1;
(statearr_49253_50501[(1)] = (8));

} else {
var statearr_49254_50503 = state_49234__$1;
(statearr_49254_50503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (14))){
var inst_49227 = (state_49234[(2)]);
var inst_49228 = cljs.core.async.close_BANG_(out);
var state_49234__$1 = (function (){var statearr_49256 = state_49234;
(statearr_49256[(13)] = inst_49227);

return statearr_49256;
})();
var statearr_49257_50505 = state_49234__$1;
(statearr_49257_50505[(2)] = inst_49228);

(statearr_49257_50505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (10))){
var inst_49218 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49258_50507 = state_49234__$1;
(statearr_49258_50507[(2)] = inst_49218);

(statearr_49258_50507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (8))){
var inst_49207 = (state_49234[(11)]);
var inst_49198 = (state_49234[(8)]);
var tmp49255 = inst_49198;
var inst_49198__$1 = tmp49255;
var inst_49199 = inst_49207;
var state_49234__$1 = (function (){var statearr_49260 = state_49234;
(statearr_49260[(7)] = inst_49199);

(statearr_49260[(8)] = inst_49198__$1);

return statearr_49260;
})();
var statearr_49261_50508 = state_49234__$1;
(statearr_49261_50508[(2)] = null);

(statearr_49261_50508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_49262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49262[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_49262[(1)] = (1));

return statearr_49262;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_49234){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_49234);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e49263){var ex__46320__auto__ = e49263;
var statearr_49264_50509 = state_49234;
(statearr_49264_50509[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_49234[(4)]))){
var statearr_49265_50510 = state_49234;
(statearr_49265_50510[(1)] = cljs.core.first((state_49234[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50512 = state_49234;
state_49234 = G__50512;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_49234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_49234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_49267 = f__46463__auto__();
(statearr_49267[(6)] = c__46462__auto___50448);

return statearr_49267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49271 = arguments.length;
switch (G__49271) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46462__auto___50514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46463__auto__ = (function (){var switch__46316__auto__ = (function (state_49314){
var state_val_49315 = (state_49314[(1)]);
if((state_val_49315 === (7))){
var inst_49310 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
var statearr_49317_50515 = state_49314__$1;
(statearr_49317_50515[(2)] = inst_49310);

(statearr_49317_50515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (1))){
var inst_49273 = [];
var inst_49274 = inst_49273;
var inst_49275 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49314__$1 = (function (){var statearr_49318 = state_49314;
(statearr_49318[(7)] = inst_49275);

(statearr_49318[(8)] = inst_49274);

return statearr_49318;
})();
var statearr_49319_50517 = state_49314__$1;
(statearr_49319_50517[(2)] = null);

(statearr_49319_50517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (4))){
var inst_49278 = (state_49314[(9)]);
var inst_49278__$1 = (state_49314[(2)]);
var inst_49279 = (inst_49278__$1 == null);
var inst_49280 = cljs.core.not(inst_49279);
var state_49314__$1 = (function (){var statearr_49320 = state_49314;
(statearr_49320[(9)] = inst_49278__$1);

return statearr_49320;
})();
if(inst_49280){
var statearr_49322_50518 = state_49314__$1;
(statearr_49322_50518[(1)] = (5));

} else {
var statearr_49323_50519 = state_49314__$1;
(statearr_49323_50519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (15))){
var inst_49304 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
var statearr_49326_50520 = state_49314__$1;
(statearr_49326_50520[(2)] = inst_49304);

(statearr_49326_50520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (13))){
var state_49314__$1 = state_49314;
var statearr_49328_50526 = state_49314__$1;
(statearr_49328_50526[(2)] = null);

(statearr_49328_50526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (6))){
var inst_49274 = (state_49314[(8)]);
var inst_49299 = inst_49274.length;
var inst_49300 = (inst_49299 > (0));
var state_49314__$1 = state_49314;
if(cljs.core.truth_(inst_49300)){
var statearr_49330_50533 = state_49314__$1;
(statearr_49330_50533[(1)] = (12));

} else {
var statearr_49331_50536 = state_49314__$1;
(statearr_49331_50536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (3))){
var inst_49312 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49314__$1,inst_49312);
} else {
if((state_val_49315 === (12))){
var inst_49274 = (state_49314[(8)]);
var inst_49302 = cljs.core.vec(inst_49274);
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49314__$1,(15),out,inst_49302);
} else {
if((state_val_49315 === (2))){
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49314__$1,(4),ch);
} else {
if((state_val_49315 === (11))){
var inst_49278 = (state_49314[(9)]);
var inst_49282 = (state_49314[(10)]);
var inst_49292 = (state_49314[(2)]);
var inst_49293 = [];
var inst_49294 = inst_49293.push(inst_49278);
var inst_49274 = inst_49293;
var inst_49275 = inst_49282;
var state_49314__$1 = (function (){var statearr_49337 = state_49314;
(statearr_49337[(11)] = inst_49292);

(statearr_49337[(7)] = inst_49275);

(statearr_49337[(8)] = inst_49274);

(statearr_49337[(12)] = inst_49294);

return statearr_49337;
})();
var statearr_49339_50561 = state_49314__$1;
(statearr_49339_50561[(2)] = null);

(statearr_49339_50561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (9))){
var inst_49274 = (state_49314[(8)]);
var inst_49290 = cljs.core.vec(inst_49274);
var state_49314__$1 = state_49314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49314__$1,(11),out,inst_49290);
} else {
if((state_val_49315 === (5))){
var inst_49278 = (state_49314[(9)]);
var inst_49275 = (state_49314[(7)]);
var inst_49282 = (state_49314[(10)]);
var inst_49282__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49278) : f.call(null,inst_49278));
var inst_49283 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49282__$1,inst_49275);
var inst_49284 = cljs.core.keyword_identical_QMARK_(inst_49275,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49285 = ((inst_49283) || (inst_49284));
var state_49314__$1 = (function (){var statearr_49340 = state_49314;
(statearr_49340[(10)] = inst_49282__$1);

return statearr_49340;
})();
if(cljs.core.truth_(inst_49285)){
var statearr_49341_50628 = state_49314__$1;
(statearr_49341_50628[(1)] = (8));

} else {
var statearr_49343_50629 = state_49314__$1;
(statearr_49343_50629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (14))){
var inst_49307 = (state_49314[(2)]);
var inst_49308 = cljs.core.async.close_BANG_(out);
var state_49314__$1 = (function (){var statearr_49347 = state_49314;
(statearr_49347[(13)] = inst_49307);

return statearr_49347;
})();
var statearr_49348_50631 = state_49314__$1;
(statearr_49348_50631[(2)] = inst_49308);

(statearr_49348_50631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (10))){
var inst_49297 = (state_49314[(2)]);
var state_49314__$1 = state_49314;
var statearr_49351_50632 = state_49314__$1;
(statearr_49351_50632[(2)] = inst_49297);

(statearr_49351_50632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49315 === (8))){
var inst_49278 = (state_49314[(9)]);
var inst_49282 = (state_49314[(10)]);
var inst_49274 = (state_49314[(8)]);
var inst_49287 = inst_49274.push(inst_49278);
var tmp49344 = inst_49274;
var inst_49274__$1 = tmp49344;
var inst_49275 = inst_49282;
var state_49314__$1 = (function (){var statearr_49353 = state_49314;
(statearr_49353[(7)] = inst_49275);

(statearr_49353[(14)] = inst_49287);

(statearr_49353[(8)] = inst_49274__$1);

return statearr_49353;
})();
var statearr_49354_50634 = state_49314__$1;
(statearr_49354_50634[(2)] = null);

(statearr_49354_50634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46317__auto__ = null;
var cljs$core$async$state_machine__46317__auto____0 = (function (){
var statearr_49355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49355[(0)] = cljs$core$async$state_machine__46317__auto__);

(statearr_49355[(1)] = (1));

return statearr_49355;
});
var cljs$core$async$state_machine__46317__auto____1 = (function (state_49314){
while(true){
var ret_value__46318__auto__ = (function (){try{while(true){
var result__46319__auto__ = switch__46316__auto__(state_49314);
if(cljs.core.keyword_identical_QMARK_(result__46319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46319__auto__;
}
break;
}
}catch (e49356){var ex__46320__auto__ = e49356;
var statearr_49357_50636 = state_49314;
(statearr_49357_50636[(2)] = ex__46320__auto__);


if(cljs.core.seq((state_49314[(4)]))){
var statearr_49358_50637 = state_49314;
(statearr_49358_50637[(1)] = cljs.core.first((state_49314[(4)])));

} else {
throw ex__46320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50638 = state_49314;
state_49314 = G__50638;
continue;
} else {
return ret_value__46318__auto__;
}
break;
}
});
cljs$core$async$state_machine__46317__auto__ = function(state_49314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46317__auto____1.call(this,state_49314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46317__auto____0;
cljs$core$async$state_machine__46317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46317__auto____1;
return cljs$core$async$state_machine__46317__auto__;
})()
})();
var state__46464__auto__ = (function (){var statearr_49362 = f__46463__auto__();
(statearr_49362[(6)] = c__46462__auto___50514);

return statearr_49362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46464__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
